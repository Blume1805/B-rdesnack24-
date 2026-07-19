((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Ni(d,e,f,g,h){return new A.a5s(f,g,d,h,e,null)},
a5s:function a5s(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
ut:function ut(d){this.a=d},
Dm:function Dm(d){this.a=d},
bNE(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=J.Y(d),e=y.fF.a(f.h(d,"period"))
if(e==null)e=C.SA
x=y.f
w=y.N
v=y.z
u=A.aCR(B.el(x.a(f.h(d,"current")),w,v))
t=A.aCR(B.el(x.a(f.h(d,"prior_year")),w,v))
s=A.aCR(B.el(x.a(f.h(d,"prior_period")),w,v))
r=y.M
q=r.a(f.h(d,"trend"))
if(q==null)q=C.cD
q=J.d3(q,new A.aCC(),y.cZ)
q=B.P(q,q.$ti.i("av.E"))
p=r.a(f.h(d,"machines"))
if(p==null)p=C.cD
p=J.d3(p,new A.aCD(),y.ef)
p=B.P(p,p.$ti.i("av.E"))
r=r.a(f.h(d,"top_products"))
if(r==null)r=C.cD
r=J.d3(r,new A.aCE(),y.j)
r=B.P(r,r.$ti.i("av.E"))
o=B.el(x.a(f.h(d,"customer")),w,v)
n=B.bE(o.h(0,"purchases_count"))
n=n==null?null:C.d.a4(n)
if(n==null)n=0
m=A.oE(o.h(0,"app_gross"))
l=B.bE(o.h(0,"active_customers"))
l=l==null?null:C.d.a4(l)
if(l==null)l=0
o=A.oE(o.h(0,"avg_basket"))
v=B.el(x.a(f.h(d,"derived")),w,v)
w=A.oE(v.h(0,"gross_margin_pct"))
f=A.oE(v.h(0,"net_margin_pct"))
x=A.oE(v.h(0,"ebitda_margin_pct"))
k=A.oE(v.h(0,"cashflow_operating"))
j=A.bnf(v.h(0,"revenue_growth_yoy_pct"))
i=A.bnf(v.h(0,"revenue_growth_mom_pct"))
h=A.bnf(v.h(0,"result_growth_yoy_pct"))
v=A.bnf(v.h(0,"result_growth_mom_pct"))
g=B.bE(J.a3(e,"days"))
g=g==null?null:C.d.a4(g)
if(g==null)g=1
return new A.nM(u,t,s,q,p,r,new A.ay5(n,m,l,o),new A.azc(w,f,x,k,j,i,h,v),g)},
oE(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kM(J.ak(d))
return x==null?0:x},
bnf(d){if(d==null)return null
if(typeof d=="number")return d
return B.kM(J.ak(d))},
pV:function pV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v8:function v8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
w0:function w0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay5:function ay5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azc:function azc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nM:function nM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCC:function aCC(){},
aCD:function aCD(){},
aCE:function aCE(){},
aCR(d){var x=J.Y(d),w=A.tO(x.h(d,"revenue_net_7")),v=A.tO(x.h(d,"revenue_net_19")),u=A.tO(x.h(d,"revenue_net")),t=A.tO(x.h(d,"expense_net")),s=A.tO(x.h(d,"result_net")),r=A.tO(x.h(d,"vat_collected")),q=A.tO(x.h(d,"vat_paid"))
x=y.M.a(x.h(d,"accounts"))
if(x==null)x=C.cD
x=J.d3(x,new A.aCS(),y._)
x=B.P(x,x.$ti.i("av.E"))
return new A.nN(w,v,u,t,s,r,q,x)},
tO(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kM(J.ak(d))
return x==null?0:x},
BY:function BY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nN:function nN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aCS:function aCS(){},
bND(d){return new A.y0(d,new B.ie(y.c_),C.dw)},
bo0:function bo0(){},
bo1:function bo1(){},
bpO:function bpO(){},
bo2:function bo2(){},
bo_:function bo_(){},
y0:function y0(d,e,f){this.r=d
this.a=e
this.f=f},
aCB:function aCB(d,e,f){this.a=d
this.b=e
this.c=f},
aCA:function aCA(d,e,f){this.a=d
this.b=e
this.c=f},
bNF(){return new A.y1(null)},
ba_(d,e,f,g,h){return new A.ajZ(e,h,g,f,d,null)},
y1:function y1(d){this.a=d},
aCQ:function aCQ(d){this.a=d},
aCJ:function aCJ(d,e,f){this.a=d
this.b=e
this.c=f},
aCK:function aCK(d,e,f){this.a=d
this.b=e
this.c=f},
aCL:function aCL(d){this.a=d},
aCM:function aCM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCP:function aCP(){},
aCO:function aCO(){},
aCN:function aCN(){},
aCI:function aCI(d,e){this.a=d
this.b=e},
aCG:function aCG(d){this.a=d},
aCH:function aCH(d){this.a=d},
aeZ:function aeZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ajZ:function ajZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
am8:function am8(d,e){this.e=d
this.a=e},
bdF:function bdF(d){this.a=d},
bdG:function bdG(d){this.a=d},
bdH:function bdH(d,e,f){this.a=d
this.b=e
this.c=f},
bdE:function bdE(){},
I6:function I6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IC:function IC(d,e){this.c=d
this.a=e},
bj9:function bj9(d){this.a=d},
aeX:function aeX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
He:function He(d,e){this.c=d
this.a=e},
buC(d,e,f,g,h){var x=null
return B.kh(x,x,!0,x,new A.bna(h,g,e,f),d,x,!0,!0,y.H)},
tv(d,e,f,g,h,i,j,k,l,m,n){return new A.aku(g,n,i,e,d,m,f,k,l,j,null)},
a5t:function a5t(d){this.a=d},
aHE:function aHE(){},
aHD:function aHD(){},
aHC:function aHC(){},
Hy:function Hy(d,e){this.c=d
this.a=e},
bbf:function bbf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb5:function bb5(){},
bb6:function bb6(){},
bb7:function bb7(){},
bb8:function bb8(){},
bb9:function bb9(){},
bba:function bba(){},
bbb:function bbb(){},
bbc:function bbc(){},
bbd:function bbd(d){this.a=d},
bbe:function bbe(d){this.a=d},
bbg:function bbg(d,e){this.a=d
this.b=e},
bbh:function bbh(d,e){this.a=d
this.b=e},
bna:function bna(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bn9:function bn9(d){this.a=d},
ajj:function ajj(d){this.a=d},
aku:function aku(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbi:function bbi(d,e){this.a=d
this.b=e},
TC:function TC(d,e,f){this.c=d
this.d=e
this.a=f},
X5:function X5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biw:function biw(){},
bix:function bix(){},
biy:function biy(d){this.a=d},
ST:function ST(d,e,f){this.c=d
this.d=e
this.a=f},
b2x:function b2x(){},
b2z:function b2z(d){this.a=d},
b2A:function b2A(d){this.a=d},
b2y:function b2y(){},
T3:function T3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b3k:function b3k(){},
b3l:function b3l(){},
b3m:function b3m(){},
b3n:function b3n(d){this.a=d},
akY:function akY(d,e){this.c=d
this.a=e},
bbM:function bbM(){},
bbN:function bbN(){},
ahp:function ahp(d,e){this.c=d
this.a=e},
Iq:function Iq(d,e,f){this.c=d
this.d=e
this.a=f},
aqu:function aqu(d,e){this.c=d
this.a=e},
bkq:function bkq(){},
bkr:function bkr(){},
U0:function U0(d,e){this.c=d
this.a=e},
b8:function b8(){},
bxO(d){return new A.K0(d,C.aq,C.dm,null,null)},
K0:function K0(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Sy:function Sy(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cR$=g
_.c=_.a=null},
b15:function b15(d,e){this.a=d
this.b=e},
b16:function b16(d){this.a=d},
avp(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3){var x,w,v,u,t,s=null,r=f==null?D.aiI:f,q=l==null?16:l,p=d==null?D.a_1:d,o=g==null,n=o?A.br5(s,s,s,s,s,s,s,s):g,m=a2==null?D.Xh:a2
o=o?A.br5(s,s,s,s,s,s,s,s):g
x=j==null?D.Da:j
w=a0==null?0/0:a0
v=a1==null?0/0:a1
u=h==null?0:h
t=e==null?C.D:e
return new A.nv(r,q,p,n,k,a3,m,0,1,0,v,w,u,D.Ba,t,x,i,o)},
avw(d,e,f,g,h){var x=d==null?D.aiJ:d,w=e==null?2:e,v=g==null?C.l8:g
return new A.fv(h,f===!0,x,w,v)},
bKY(d,e,f){var x=d.a
x=C.d.b0(x+(e.a-x)*f)
return A.avw(A.ke(d.c,e.c,f,A.bYK(),y.fj),B.aa(d.d,e.d,f),!1,A.ke(d.e,e.e,f,A.Zc(),y.S),x)},
a_A(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s=null,r=i==null?0:i
if(h==null)x=D.SI
else x=h
w=m==null
v=w?8:m
u=$.lg()
t=u.aVN(f,w?8:m)
u=u.aVO(g,w?8:m)
w=d==null?A.bxM(s,s,s,s,s):d
return new A.i8(r,l,x,j,v,t,e,u,w,k==null?D.aiK:k)},
bKZ(d,e,f){var x,w,v,u,t=B.X(d.c,e.c,f),s=B.aa(d.e,e.e,f),r=B.mm(d.f,e.f,f),q=A.ke(d.r,e.r,f,A.Zc(),y.S),p=B.bU(d.w,e.w,f),o=B.aa(d.a,e.a,f),n=B.aa(d.b,e.b,f)
n.toString
x=d.x
w=e.x
v=B.aa(x.b,w.b,f)
u=B.aa(x.c,w.c,f)
w=B.X(x.d,w.d,f)
return A.a_A(A.bxM(w,v,null,!1,u),q,r,p,t,o,null,A.ke(d.y,e.y,f,A.bYL(),y.G),n,s)},
bL_(d,e,f){var x,w,v=B.aa(d.a,e.a,f)
v.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
w.toString
return new A.mk(v,x,w,B.bU(d.d,e.d,f))},
bxM(d,e,f,g,h){var x,w=e==null?0:e,v=h==null?0:h
if(d==null)x=D.dc
else x=d
return new A.a_w(g===!0,w,v,x,f)},
br5(d,e,f,g,h,i,j,k){var x,w
if(k==null)x=new A.a_C(4,C.hC,16,D.x9,0,120,A.bYN(),!1,!1,D.Z5,0,C.A,A.bYM())
else x=k
w=j==null?C.kG:j
return new A.a_B(x,w,d===!0,f!==!1,e!==!1,i,h,g)},
bZv(d,e,f,g){var x=null,w=B.iT(x,x,f.c,x,x,x,x,x,x,x,x,14,x,x,C.O,x,x,!0,x,x,x,x,x,x,x,x)
return new A.Ce(C.d.j(f.b),w)},
bZu(d){return A.axw(D.dc,15)},
nv:function nv(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avo:function avo(d,e){this.a=d
this.b=e},
fv:function fv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avx:function avx(){},
avy:function avy(){},
i8:function i8(d,e,f,g,h,i,j,k,l,m){var _=this
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
mk:function mk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_w:function a_w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_B:function a_B(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acq:function acq(d,e){this.a=d
this.b=e},
a_C:function a_C(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Ce:function Ce(d,e){this.a=d
this.b=e},
K1:function K1(d){this.a=d},
a_D:function a_D(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xe:function xe(d,e){this.a=d
this.b=e},
afJ:function afJ(){},
afN:function afN(){},
afO:function afO(){},
afQ:function afQ(){},
afR:function afR(){},
afS:function afS(){},
afT:function afT(){},
afU:function afU(){},
afV:function afV(){},
avz:function avz(d){this.a=d},
avA:function avA(){},
u6:function u6(d,e,f){this.a=d
this.b=e
this.c=f},
afP:function afP(){},
avB:function avB(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avC:function avC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avD:function avD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4v:function a4v(d){this.b=d},
a_z:function a_z(d,e,f){this.d=d
this.e=e
this.a=f},
a9z:function a9z(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.hX=e
_.cV=f
_.fS=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aE=_.ad=_.an=$
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
bZw(d,e){var x=null
return new A.QC(e.w,B.l(e.r,x,x,x,x,x,x,x),x)},
avi(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=d.c
w=e.c
v=B.aa(x.c,w.c,f)
v.toString
return new A.oQ(u,e.b,new A.pK(w.a,w.b,v,B.aa(x.d,w.d,f)),!0)},
bz9(d,e,f){var x=A.avi(d.b,e.b,f),w=A.avi(d.d,e.d,f),v=A.avi(d.e,e.e,f)
return new A.uv(e.a,x,A.avi(d.c,e.c,f),w,v)},
bNH(d,e,f){var x,w
if(d.k(0,D.fC))return e
if(e.k(0,D.fC))return d
x=B.aa(d.a,e.a,f)
x.toString
w=B.aa(d.b,e.b,f)
w.toString
return new A.eu(x,w)},
bz7(d,e,f){return new A.y3(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c0T(d){return!0},
bZz(d){return D.a7t},
bz8(d,e,f,g){var x
if(d==null)x=f==null?C.B:null
else x=d
return new A.pd(x,f,g,e)},
bB6(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYG(),y.dv)
w.toString
x=A.ke(d.b,e.b,f,A.bYI(),y.bN)
x.toString
return new A.Pb(w,x)},
bOs(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qX(d.d,e.d,f)
if(w==null)w=v==null?C.l:null
return new A.mE(u,x,w,v)},
bTB(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qX(d.d,e.d,f)
if(w==null)w=v==null?C.l:null
return new A.n0(u,x,w,v)},
bOr(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p7(x.b,w.b,f)
v.toString
u=B.co(x.c,w.c,f)
u=A.bOp(B.bqW(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qX(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Zc(),y.S)
if(v==null)v=w==null?C.B:null
return new A.ky(s,e.f,e.r,u,e.x,v,w,x,t)},
bTA(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p7(x.b,w.b,f)
v.toString
u=B.co(x.c,w.c,f)
u=A.bTy(B.bqW(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qX(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Zc(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kZ(s,e.f,e.r,u,e.x,v,w,x,t)},
bOp(d,e,f,g,h,i){return new A.a4G(f,!1,g,i,d,e)},
bOq(d){return C.d.am(d.e,1)},
bTy(d,e,f,g,h,i){return new A.acQ(f,!1,g,i,d,e)},
bTz(d){return C.d.am(d.e,1)},
bz4(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYF(),y.cm)
w.toString
x=A.ke(d.b,e.b,f,A.bYH(),y.es)
x.toString
return new A.LW(w,x,!0)},
bNG(d,e,f){return new A.M6(d,e==null?4:e,f)},
a_p:function a_p(){},
Cd:function Cd(d,e){this.a=d
this.b=e},
t9:function t9(d,e){this.r=d
this.w=e},
pK:function pK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaY:function aaY(){},
oQ:function oQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uv:function uv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eu:function eu(d,e){this.a=d
this.b=e},
y3:function y3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pd:function pd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acs:function acs(){},
Pb:function Pb(d,e){this.a=d
this.b=e},
mE:function mE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
n0:function n0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ky:function ky(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
kZ:function kZ(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a4G:function a4G(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acQ:function acQ(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LW:function LW(d,e,f){this.a=d
this.b=e
this.c=f},
uu:function uu(){},
M6:function M6(d,e,f){this.a=d
this.b=e
this.c=f},
afE:function afE(){},
afI:function afI(){},
aiJ:function aiJ(){},
aiZ:function aiZ(){},
aj_:function aj_(){},
aj1:function aj1(){},
aj2:function aj2(){},
ajP:function ajP(){},
ajO:function ajO(){},
ajQ:function ajQ(){},
and:function and(){},
aoY:function aoY(){},
aoZ:function aoZ(){},
aqy:function aqy(){},
ara:function ara(){},
ar9:function ar9(){},
arb:function arb(){},
ave:function ave(){},
JV:function JV(){},
JW:function JW(d,e,f){this.c=d
this.d=e
this.a=f},
avg:function avg(d){this.a=d},
avf:function avf(d){this.a=d},
QC:function QC(d,e,f){this.c=d
this.e=e
this.a=f},
WV:function WV(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bS8(d,e,f){var x=B.ab(f),w=x.i("a9<1,jC>")
w=B.P(new B.a9(f,new A.aWJ(),w),w.i("av.E"))
x=x.i("a9<1,c>")
x=B.P(new B.a9(f,new A.aWK(),x),x.i("av.E"))
return new A.aaZ(e,d,w,x,null)},
bKV(d,e,f){var x,w=null,v=B.aG(y.dO),u=J.a5j(4,y.er)
for(x=0;x<4;++x)u[x]=new B.t7(w,C.ax,C.u,new B.k9(1),w,w,w,w,C.bx,w)
v=new A.a_q(f,d,e,v,u,!0,0,w,w,new B.bn(),B.aG(y.v))
v.bj()
return v},
aaZ:function aaZ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWJ:function aWJ(){},
aWK:function aWK(){},
a_q:function a_q(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VB$=h
_.aRx$=i
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
bbo:function bbo(d,e){this.a=d
this.b=e},
avh:function avh(){},
jC:function jC(d,e){this.a=d
this.b=e},
nu:function nu(d,e){this.a=d
this.b=e},
afF:function afF(){},
afG:function afG(){},
afH:function afH(){},
Sw:function Sw(){},
A4:function A4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWL:function aWL(d){this.a=d},
aWM:function aWM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWN:function aWN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3R(d,e){var x=d==null?B.dr(C.B,1):d
return new A.a3Q(e!==!1,x)},
a_F:function a_F(){},
a3Q:function a3Q(d,e){this.a=d
this.b=e},
Md:function Md(){},
a3S:function a3S(){},
avM:function avM(){},
aC2:function aC2(d,e){this.a=d
this.b=e},
afY:function afY(){},
aiW:function aiW(){},
aiX:function aiX(){},
aj3:function aj3(){},
K4:function K4(){},
vk:function vk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hb:function hb(){},
a3W:function a3W(d){this.a=d},
a3X:function a3X(d){this.a=d},
a3Y:function a3Y(d){this.a=d},
M8:function M8(){},
M9:function M9(){},
a40:function a40(d){this.a=d},
Mb:function Mb(){},
Mc:function Mc(d){this.a=d},
a3V:function a3V(d){this.a=d},
a3U:function a3U(d){this.a=d},
M7:function M7(d){this.a=d},
a3Z:function a3Z(d){this.a=d},
a4_:function a4_(d){this.a=d},
Ma:function Ma(d){this.a=d},
Fk:function Fk(){},
aS2:function aS2(d){this.a=d},
aS3:function aS3(d){this.a=d},
aS4:function aS4(d){this.a=d},
aS5:function aS5(d){this.a=d},
aS6:function aS6(d){this.a=d},
aS7:function aS7(d){this.a=d},
aS8:function aS8(d){this.a=d},
aS9:function aS9(d){this.a=d},
aSa:function aSa(d){this.a=d},
aSb:function aSb(d){this.a=d},
aSc:function aSc(d){this.a=d},
aSd:function aSd(d){this.a=d},
aSe:function aSe(d){this.a=d},
Nw:function Nw(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UM:function UM(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fs$=g
_.cR$=h
_.c=_.a=null},
bbt:function bbt(d,e){this.a=d
this.b=e},
bbr:function bbr(d){this.a=d},
bbs:function bbs(d,e){this.a=d
this.b=e},
bbq:function bbq(){},
bbu:function bbu(d){this.a=d},
bso(d,e,f,g,h,i,j,k,l,m,n,o,p,q,a0,a1,a2){var x=p==null?0/0:p,w=n==null?0/0:n,v=q==null?0/0:q,u=o==null?0/0:o,t=e==null?0:e,s=f==null?0:f,r=d==null?C.D:d
return new A.po(l,g,m,a1,k,a2,a0,x,w,t,v,u,s,i,r,j,h,m)},
aHT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0){var x,w,v=null
if(g==null)x=k==null?D.SI:v
else x=g
w=f==null?A.avn(!1,v,0,v,!1,D.vz):f
x=new A.e2(a0,!0,x,k,e,l,h,!1,r,n,!1,w,d==null?A.avn(!1,v,0,v,!1,D.vz):d,j,u,i,s,!1,p)
x.aq_(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,u,a0)
return x},
bOX(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=B.aa(d.x,e.x,f)
n.toString
x=A.bxN(d.ay,e.ay,f)
w=A.bxN(d.ch,e.ch,f)
v=B.aa(d.as,e.as,f)
v.toString
u=e.CW
t=A.ke(d.cy,e.cy,f,A.Zc(),y.S)
s=B.X(d.r,e.r,f)
r=B.qX(d.w,e.w,f)
q=A.ke(d.a,e.a,f,A.bYE(),y.cw)
q.toString
p=B.bBA(d.db,e.db,f)
p.toString
o=B.aa(d.dy.a,e.dy.a,f)
o.toString
return A.aHT(w,n,x,s,e.z,t,new A.y2(u.a,u.b,u.c),r,e.y,!1,e.at,!1,new A.Nx(o),!1,v,p,!0,e.cx,q)},
avn(d,e,f,g,h,i){var x
if(e==null)x=g==null?B.aA(C.d.b0(127.5),D.dc.v()>>>16&255,D.dc.v()>>>8&255,D.dc.v()&255):null
else x=e
return new A.a_y(h,x,g,i,f,!1)},
bxN(d,e,f){var x=e.d,w=d.d.b,v=x.b,u=B.X(w.a,v.a,f),t=B.qX(w.b,v.b,f),s=B.aa(w.c,v.c,f)
s.toString
s=A.bz8(u,A.ke(w.d,v.d,f,A.Zc(),y.S),t,s)
t=B.X(d.b,e.b,f)
v=B.qX(d.c,e.c,f)
w=B.aa(d.e,e.e,f)
w.toString
return A.avn(!1,t,w,v,e.a,new A.K_(!1,s,x.c,!0))},
bL1(d,e,f){var x=B.X(d.c,e.c,f),w=B.qX(d.d,e.d,f)
if(x==null)x=w==null?B.aA(C.d.b0(127.5),D.dc.v()>>>16&255,D.dc.v()>>>8&255,D.dc.v()&255):null
return new A.ml(e.a,e.b,x,w)},
c0U(d){return!0},
buq(d,e,f){var x=f.w,w=x==null
if(!w&&x instanceof B.lC)return A.bv9(x.a,A.bs1(x),e/100)
x=w?null:C.b.ga0(x.a)
if(x==null)x=f.r
return x==null?D.dc:x},
bWi(d,e,f){var x,w=f.w,v=w==null
if(!v&&w instanceof B.lC)x=A.bv9(w.a,A.bs1(w),e/100)
else{w=v?null:C.b.ga0(w.a)
x=w==null?f.r:w
if(x==null)x=D.dc}return A.axw(x,40)},
bE4(d,e,f,g,h){var x,w=A.buq(d,e,f),v=f.w,u=v==null
if(!u&&v instanceof B.lC)x=A.bv9(v.a,A.bs1(v),e/100)
else{v=u?null:C.b.ga0(v.a)
x=v==null?f.r:v
if(x==null)x=D.dc}v=A.axw(x,40)
return new A.M6(w,h==null?4:h,v)},
c0S(d,e){return!0},
bYr(d,e){return Math.abs(d.a-e.a)},
bZC(d,e){var x=J.d3(e,new A.bnQ(d),y.bY)
x=B.P(x,x.$ti.i("av.E"))
return x},
bZy(d,e){return-1/0},
bZx(d,e){return d.a[e].b},
bFg(d){var x=J.d3(d,new A.bnN(),y.fT)
x=B.P(x,x.$ti.i("av.E"))
return x},
bFf(d){return A.axw(D.dc,15)},
po:function po(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e2:function e2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aHU:function aHU(){},
Nx:function Nx(d){this.a=d},
a_y:function a_y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ml:function ml(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
K_:function K_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y2:function y2(d,e,f){this.a=d
this.b=e
this.c=f},
aHF:function aHF(d,e){this.a=d
this.b=e},
a3T:function a3T(){},
E1:function E1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bnQ:function bnQ(d){this.a=d},
bnP:function bnP(d){this.a=d},
a5H:function a5H(){},
bnN:function bnN(){},
mI:function mI(){},
pT:function pT(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rb:function rb(d,e){this.a=d
this.b=e},
ta:function ta(d,e){this.a=d
this.b=e},
FM:function FM(d){this.a=d},
Ny:function Ny(d){this.a=d},
yL:function yL(d,e){this.a=d
this.b=e},
afL:function afL(){},
afM:function afM(){},
afZ:function afZ(){},
aiY:function aiY(){},
aj0:function aj0(){},
akB:function akB(){},
akC:function akC(){},
akD:function akD(){},
akF:function akF(){},
akG:function akG(){},
akH:function akH(){},
akI:function akI(){},
aoX:function aoX(){},
aqx:function aqx(){},
aHV:function aHV(d){this.a=d},
aHW:function aHW(){},
aHX:function aHX(){},
yM:function yM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akE:function akE(){},
aHY:function aHY(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aI0:function aI0(){},
aHZ:function aHZ(d,e,f){this.a=d
this.b=e
this.c=f},
aI_:function aI_(d,e,f){this.a=d
this.b=e
this.c=f},
aI1:function aI1(){},
v2:function v2(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5G:function a5G(d,e,f){this.d=d
this.e=e
this.a=f},
a9M:function a9M(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.hX=e
_.cV=f
_.fS=g
_.B=h
_.a2=_.U=_.V=null
_.a3=i
_.bz=_.aE=_.ad=_.an=$
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
br4(d,e){var x,w,v,u,t,s,r,q,p=d.ch,o=B.bz(p.length,0,!1,y.i),n=B.ab(p),m=new B.a9(p,new A.avq(),n.i("a9<1,N>")).kk(0,new A.avr()),l=e-m,k=new A.avu(l,d,o)
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
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avs(r,l/(q-1),o))
break
case 4:r={}
q=p.length
r.a=0
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avt(r,l/(q*2),o))
break
case 3:k.$0()
break}return o},
avq:function avq(){},
avr:function avr(){},
avu:function avu(d,e,f){this.a=d
this.b=e
this.c=f},
avv:function avv(d,e,f){this.a=d
this.b=e
this.c=f},
avs:function avs(d,e,f){this.a=d
this.b=e
this.c=f},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
bs1(d){var x,w={}
w.a=B.b([],y.n)
x=d.b
if(x==null||x.length!==d.a.length){x=d.a
if(x.length>1)new B.iJ(x,B.ab(x).i("iJ<1>")).aq(0,new A.aF5(w,d))
else throw B.e(B.bC('"colors" must have length > 1.',null))}else w.a=x
return w.a},
aF5:function aF5(d,e){this.a=d
this.b=e},
ayG(d,e){var x,w
if(e!=null){x=B.ab(e).i("a9<1,N>")
w=B.P(new B.a9(e,new A.ayH(),x),x.i("av.E"))
return A.bZq(d,new A.a0c(w,y.cX))}else return d},
ayH:function ayH(){},
bSI(d,e){var x=!0
if(d!==C.eV)if(!(d===C.ax&&e===C.u))x=d===C.ic&&e===C.aU
if(x)return D.Dn
else{x=!0
if(d!==C.hh)if(!(d===C.ic&&e===C.u))x=d===C.ax&&e===C.aU
if(x)return D.Do
else return D.a7L}},
MD:function MD(d,e){this.a=d
this.b=e},
a02:function a02(d,e){this.a=d
this.b=e},
yP:function yP(d,e){this.a=d
this.$ti=e},
akP:function akP(){},
bZq(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=B.cB($.af().r)
for(x=B.b([],y.C),w=new B.Nq(d,!1,x),v=e.a,u=m.e;w.t();){t=w.c
if(t===0||w.f)B.V(B.fn('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--t
s=new B.Np(w,t)
w.CJ()
r=x[t].b
r===$&&B.a()
r.a.length()
q=0
p=!0
for(;;){w.CJ()
r=x[t].b
r===$&&B.a()
if(!(q<r.a.length()))break
r=e.b
if(r>=v.length)r=e.b=0
e.b=r+1
o=v[r]
if(p){r=new B.Jq(d.aRt(s,q,q+o,!0),C.p,null)
u.push(r)
n=m.d
if(n!=null)r.hD(n)}q+=o
p=!p}}return m},
a0c:function a0c(d,e){this.a=d
this.b=0
this.$ti=e},
b_f:function b_f(){},
Pv:function Pv(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.dn=f
_.cP=_.D=null
_.eW=g
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
aSn:function aSn(d){this.a=d},
a3M:function a3M(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
brQ(d){var x,w,v,u=y.U,t=B.b([B.b([],u)],y.aA)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.K)(d),++w){v=d[w]
if(!v.k(0,D.fC))C.b.gaf(t).push(v)
else if(C.b.gaf(t).length!==0)t.push(B.b([],u))}if(C.b.gaf(t).length===0)t.pop()
return t},
bL4(d){var x,w=d.d
if(w.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
w=w.a
x=!1
if(w.geg(w)===0){w=d.a.a
if(w.geg(w)===0){w=d.b.a
if(w.geg(w)===0){w=d.c.a
w=w.geg(w)===0}else w=x}else w=x}else w=x
if(w)return!1
return!0},
axw(d,e){var x=1-e/100
return B.aA(d.gfD(d),C.d.b0(d.gNl()*x),C.d.b0(d.gFK()*x),C.d.b0(d.gJS()*x))},
bz6(d){var x=d.a,w=x?d.b.d.b:0,v=x?d.b.a.b:0,u=x?d.b.b.b:0
return new B.aj(w,v,u,x?d.b.c.b:0)},
brR(d){var x=d.a,w=x?A.aWI(d.b):0,v=x?A.aWI(d.c):0,u=x?A.aWI(d.d):0
return new B.aj(w,v,u,x?A.aWI(d.e):0)},
bQb(d){var x
if(d.c===0){d.seR(null)
x=B.bY(d.r)
d.r=B.aA(0,x.v()>>>16&255,x.v()>>>8&255,x.v()&255).gp(0)}},
bsK(d,e,f,g){var x
if(f!=null){d.r=C.B.gp(0)
d.seR(f.mJ(0,g))}else{x=e==null?C.D:e
d.r=x.gp(x)
d.seR(null)}},
aWI(d){var x=d.c
return x.a&&x.c!==0?0+x.c:0},
ke(d,e,f,g,h){var x,w,v,u=d!=null
if(u&&e!=null&&d.length===e.length){x=d.length
w=J.kE(x,h)
for(v=0;v<x;++v)w[v]=g.$3(d[v],e[v],f)
return w}else if(u&&e!=null){x=e.length
w=J.kE(x,h)
for(v=0;v<x;++v){u=v>=d.length?e[v]:d[v]
w[v]=g.$3(u,e[v],f)}return w}else return e},
c_K(d,e,f){return C.d.b0(d+(e-d)*f)},
bv9(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=d.length
if(e.length!==n){x=J.kE(n,y.i)
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
A.a5s.prototype={
A(d){var x,w,v,u=this,t=null,s=u.r,r=s?C.aQ:C.l
s=s?C.n:C.an
x=y.p
w=B.b([],x)
C.b.M(w,B.b([B.cV(u.x,C.n,t,18),C.bs],x))
w.push(B.aQ(new B.et(u.c,t),1))
w=B.au(w,C.E,C.f,C.i,0,t,t)
v=u.w
x=B.b([w,C.a0,B.l(u.d,1,C.ai,t,B.ca(v==null?C.h:v,22,C.O),t,t,t)],x)
return B.bL(s,B.ai(x,C.E,C.i_,C.i),r,t,C.ao,t,3)}}
A.ut.prototype={
Ld(d){return this.aRw(d)},
aRw(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$Ld=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eI("finance_summary",B.a5(["p_from",E.qR(d.a),"p_to",E.qR(d.b)],t,s),s),$async$Ld)
case 3:r=f
if(r==null){v=D.amk
x=1
break}if(y.f.b(r)){v=B.el(r,t,s)
x=1
break}v=D.amL
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$Ld,w)},
Lc(d){return this.aRv(d)},
aRv(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$Lc=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eI("finance_kpis",B.a5(["p_from",E.qR(d.a),"p_to",E.qR(d.b)],t,s),s),$async$Lc)
case 3:r=f
if(y.f.b(r)){v=B.el(r,t,s)
x=1
break}v=D.am3
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$Lc,w)},
px(d){return this.apI(d)},
apI(d){var x=0,w=B.r(y.S),v,u=this,t,s,r
var $async$px=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.i_("sevdesk-sync",B.a5(["from",E.qR(d.a),"to",E.qR(d.b)],t,t)),$async$px)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"upserted")=="number"){v=C.d.a4(B.fs(J.a3(s,"upserted")))
x=1
break}v=0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$px,w)},
L8(d){return this.aRl(d)},
aRl(d){var x=0,w=B.r(y.N),v,u=this,t,s,r
var $async$L8=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.i_("finance-export-pdf",B.a5(["from",E.qR(d.a),"to",E.qR(d.b)],t,t)),$async$L8)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"base64")=="string"){v=B.aC(J.a3(s,"base64"))
x=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(v,w)}})
return B.q($async$L8,w)}}
A.Dm.prototype={
FE(d){return this.aiV(d)},
aiV(d){var x=0,w=B.r(y.d),v,u=2,t=[],s=this,r,q,p,o,n
var $async$FE=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.Ld(d),$async$FE)
case 7:r=f
p=A.aCR(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.Hf(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$FE,w)},
FA(d){return this.aiG(d)},
aiG(d){var x=0,w=B.r(y.X),v,u=2,t=[],s=this,r,q,p,o,n
var $async$FA=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.Lc(d),$async$FA)
case 7:r=f
p=A.bNE(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.Hf(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$FA,w)},
px(d){return this.apJ(d)},
apJ(d){var x=0,w=B.r(y.S),v,u=2,t=[],s=this,r,q,p,o
var $async$px=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.px(d),$async$px)
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
q=s.Hf(r)
throw B.e(q)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$px,w)},
L7(d){return this.aRk(d)},
aRk(d){var x=0,w=B.r(y.gc),v,u=2,t=[],s=this,r,q,p,o,n
var $async$L7=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L8(d),$async$L7)
case 7:r=f
p=C.kb.cU(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.Hf(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$L7,w)},
Hf(d){if(d instanceof B.xY)return d
if(d instanceof B.lO){if(d.b==="42501")return new B.vo(d.a)
return new B.rQ(d.a)}if(d instanceof B.Mr)return new B.rQ("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Au("Unerwarteter Fehler: "+B.i(d))},
$iaCF:1}
A.pV.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.v8.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f]}}
A.w0.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.ay5.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.azc.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w]}}
A.nM.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.BY.prototype={
gbH(){var x=this
return[x.a,x.d,x.e,x.f]}}
A.nN.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.y0.prototype={
GB(d){return this.apH(0)},
apH(d){var x=0,w=B.r(y.h6),v,u=this,t,s,r,q
var $async$GB=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:q={}
u.se3(0,C.dj)
t=u.r
s=t.aP(0,$.wX(),y.P)
q.a=null
x=3
return B.k(B.oP(new A.aCB(q,u,s),y.H),$async$GB)
case 3:u.se3(0,f)
r=u.f
if(r.ghm(r)==null){r=$.bqC()
t=t.e
t===$&&B.a()
t.cr(r)}v=q.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$GB,w)},
L6(){return this.aRj()},
aRj(){var x=0,w=B.r(y.aD),v,u=this,t,s,r
var $async$L6=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:r={}
u.se3(0,C.dj)
t=u.r.aP(0,$.wX(),y.P)
r.a=null
x=3
return B.k(B.oP(new A.aCA(r,u,t),y.H),$async$L6)
case 3:u.se3(0,e)
s=u.f
v=s.ghm(s)!=null?null:r.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L6,w)}}
A.y1.prototype={
dw(d,e){var x=null,w=e.aC($.wX(),y.P),v=e.aC($.bqC(),y.h)
return B.jV(B.e3(B.b([new B.hi("Finanzen","Dashboard",new A.aeZ(e.aC($.bqB(),y.b).gj9(),new A.aCJ(this,d,e),new A.aCK(this,d,e),new A.aCL(d),new A.aCM(this,d,e,w),x),x),C.aB,new A.am8(w,x),C.c3,D.acZ,C.c3,B.dx(v,new A.aCN(),new A.aCO(),new A.aCP(),!1,!0,!1,y.d,y.l)],y.p),C.cQ,x,!1),C.n,new A.aCQ(e))},
J2(d,e){return this.aJR(d,e)},
aJR(d,e){var x=0,w=B.r(y.H),v,u,t,s
var $async$J2=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=$.bqB()
x=3
return B.k(e.aP(0,t.gi2(),y.F).GB(0),$async$J2)
case 3:s=g
if(d.e==null){x=1
break}t=e.aP(0,t,y.b)
t=t.ghm(t)
u=d.P(y.q).f
u.bR(B.ci(null,null,null,null,null,C.t,null,B.l(t==null?"sevDesk synchronisiert: "+B.i(s)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.R,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(v,w)}})
return B.q($async$J2,w)},
B_(d,e){return this.avF(d,e)},
avF(d,e){var x=0,w=B.r(y.H),v,u
var $async$B_=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:x=3
return B.k(e.aP(0,$.bqB().gi2(),y.F).L6(),$async$B_)
case 3:u=g
if(d.e==null){x=1
break}if(u==null){d.P(y.q).f.bR(D.atJ)
x=1
break}x=4
return B.k(E.bAY(u,"finanzauswertung.pdf"),$async$B_)
case 4:case 1:return B.p(v,w)}})
return B.q($async$B_,w)},
B0(d,e,f){return this.aHD(d,e,f)},
aHD(d,e,f){var x=0,w=B.r(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$B0=B.n(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=3
return B.k(B.kh(null,null,!0,null,new A.aCI(f,d),d,null,!0,!0,y.cJ),$async$B0)
case 3:if(h!==!0){x=1
break}u=5
s=new E.np(e.aP(0,$.ce(),y.A))
q=f.a
p=f.b
o=$.eo()
n=o.aw(q)
o=o.aw(p)
x=8
return B.k(s.ze("finance_period",q,p,B.a5(["period_from",q.f0()],y.N,y.z),"Finanzauswertung "+n+" \u2013 "+o),$async$B0)
case 8:if(d.e!=null)d.P(y.q).f.bR(F.uE)
u=2
x=7
break
case 5:u=4
l=t.pop()
r=B.a1(l)
if(d.e!=null)d.P(y.q).f.bR(B.ci(null,null,null,null,null,C.t,null,B.l("Fehler: "+B.i(r),null,null,null,null,null,null,null),null,C.R,null,null,null,null,null,null,null,null,null,null))
x=7
break
case 4:x=2
break
case 7:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$B0,w)}}
A.aeZ.prototype={
A(d){var x=this,w=null,v=A.ba_(C.n,F.iY,C.n,x.r,"Freigabe f\xfcr Auswertung anfordern"),u=A.ba_(w,D.a9j,w,x.f,"Gesellschafter-Freigaben"),t=x.c,s=A.ba_(w,D.a8u,w,t?w:x.d,"sevDesk synchronisieren")
return B.au(B.b([v,C.bs,u,C.bs,s,C.bs,A.ba_(C.ak,C.kT,C.ak,t?w:x.e,"PDF-Export")],y.p),C.o,C.f,C.P,0,w,w)}}
A.ajZ.prototype={
A(d){var x,w=this,v=null,u=B.b0(12),t=B.b0(12),s=B.b0(12),r=w.w
if(r==null)r=C.an
r=B.dr(r,1)
x=w.r
if(x==null)x=C.h
return B.acp(B.e4(!1,C.Y,!0,u,B.fd(!1,t,!0,B.bk(v,B.cV(w.c,x,v,20),C.r,v,v,new B.bb(v,v,r,s,v,v,C.I),v,40,v,v,v,v,v,40),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),C.r,C.at,0,v,v,v,v,v,C.bL),v,w.d,v,v)}}
A.am8.prototype={
dw(d,e){var x=null,w=this.e,v=$.eo(),u=y.p
return B.bL(x,B.ai(B.b([D.a7a,C.a0,B.au(B.b([D.aa_,C.be,B.aQ(B.l(v.aw(w.a)+" \u2013 "+v.aw(w.b),x,x,x,B.D(C.h,16,C.O),x,x,x),1)],u),C.o,C.f,C.i,0,x,x),C.x,B.pY(C.dh,B.b([new A.I6("Monat",new A.bdF(e),x,x),new A.I6("Jahr (YTD)",new A.bdG(e),x,x),new A.I6("Zeitraum w\xe4hlen \u2026",new A.bdH(this,d,e),D.a8z,x)],u),C.eY,6,8)],u),C.E,C.f,C.i),x,x,C.G,x,3)},
Ir(d,e){return this.aGB(d,e)},
aGB(d,e){var x=0,w=B.r(y.H),v=this,u,t,s
var $async$Ir=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=new B.bg(Date.now(),0,!1)
t=v.e
x=2
return B.k(E.bpT(new A.bdE(),d,B.bM(B.aY(u)-5,1,1,0,0,0,0),new B.mt(t.a,t.b,y.bz),B.bM(B.aY(u)+1,1,1,0,0,0,0),C.eM),$async$Ir)
case 2:s=g
if(s!=null)e.aP(0,$.wX().gi2(),y.V).Ao(0,new E.my(s.a,s.b))
return B.p(null,w)}})
return B.q($async$Ir,w)}}
A.I6.prototype={
A(d){var x=null,w=B.b0(9999),v=B.b0(9999),u=B.b0(9999),t=B.dr(C.an,1),s=y.p,r=B.b([],s),q=this.e
if(q!=null)C.b.M(r,B.b([B.cV(q,C.h,x,14),C.bs],s))
r.push(B.l(this.c,x,x,x,B.D(C.h,13,C.O),x,x,x))
return B.e4(!1,C.Y,!0,w,B.fd(!1,v,!0,B.bk(x,B.au(r,C.o,C.f,C.P,0,x,x),C.r,x,x,new B.bb(x,x,t,u,x,x,C.I),x,x,x,x,C.kF,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),C.r,C.at,0,x,x,x,x,x,C.bL)}}
A.IC.prototype={
A(d){var x,w,v,u,t=null,s=y.p,r=B.b([B.kG(new A.bj9(this)),C.c3,D.a71,C.x],s),q=this.c.w
if(q.length===0)r.push(B.bL(t,B.au(B.b([D.aay,C.aF,B.aQ(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",t,t,t,B.D(C.v,14,C.k),t,t,t),1)],s),C.o,C.f,C.i,0,t,t),C.at,t,C.G,t,3))
else{x=B.b([],s)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
C.b.M(x,B.b([new A.aeX(u.a,u.b,u.c==="revenue",u.d,t),C.a0],s))}r.push(B.ai(x,C.o,C.f,C.i))}return B.ai(r,C.ab,C.f,C.i)}}
A.aeX.prototype={
A(d){var x=this,w=null,v=x.e,u=v?C.aQ:C.at,t=B.dr(v?C.n:C.an,1),s=B.b0(4),r=x.c
s=B.bk(C.a_,B.l(C.c.a1(r,0,1),w,w,w,B.ca(C.h,14,C.q),w,w,w),C.r,w,w,new B.bb(u,w,t,s,w,w,C.I),w,36,w,w,w,w,w,36)
r=B.l(r+" \xb7 "+x.d,1,C.ai,w,B.D(C.h,14,C.O),w,w,w)
u=v?"Erl\xf6s":"Aufwand"
t=y.p
u=B.aQ(B.ai(B.b([r,B.l(u,w,w,w,B.D(C.v,12,C.k),w,w,w)],t),C.E,C.f,C.i),1)
r=$.e9().aw(x.f)
return B.bL(w,B.au(B.b([s,C.aF,u,B.l(r,w,w,w,B.D(v?C.aP:C.h,15,C.O),w,w,w)],t),C.o,C.f,C.i,0,w,w),w,w,C.e4,w,3)}}
A.He.prototype={
A(d){var x=null
return B.bL(C.ak,B.au(B.b([D.aaT,C.aF,B.aQ(B.l(this.c,x,x,x,B.D(C.h,14,C.k),x,x,x),1)],y.p),C.o,C.f,C.i,0,x,x),C.fz,x,C.G,x,3)}}
A.a5t.prototype={
dw(d,e){return B.dx(e.aC($.bJN(),y.e),new A.aHC(),new A.aHD(),new A.aHE(),!1,!0,!1,y.X,y.l)}}
A.Hy.prototype={
A(d){var x=this,w=null,v=x.c,u=v.x,t=u>0,s=t?v.a.c/u:0,r=t?v.r.a/u:0
u=y.p
t=B.b([D.ard,C.x,B.kG(new A.bbf(x,s,100-v.w.a,r)),C.x,new A.ajj(w),C.aB,D.ar8,C.x,B.mD(w,B.bL(w,new A.ST(v,220,w),w,w,C.G,w,3),C.ac,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.bbg(x,d),w,w,w,w,w,w),C.aB,D.ar3,C.x,B.mD(w,new A.T3(v,200,!1,w),C.ac,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.bbh(x,d),w,w,w,w,w,w),C.aB,D.ar7,C.x,new A.akY(v,w),C.aB,D.ar5,C.x,new A.ahp(v,w)],u)
if(v.f.length!==0)C.b.M(t,B.b([C.aB,D.ara,C.x,new A.aqu(v,w)],u))
return B.ai(t,C.ab,C.f,C.i)}}
A.ajj.prototype={
A(d){var x=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",x,x,x,B.D(C.v,11,C.k).eU(1.35),x,x,x)}}
A.aku.prototype={
A(d){var x,w,v,u,t,s,r,q,p=this,o=null
if(p.x)x=C.c.cG(p.d,"-")?C.ak:C.aP
else x=C.h
w=p.w
v=w.length>=2?new A.bbi(p,d):o
u=y.p
t=B.b([B.aQ(B.l(p.c.toUpperCase(),o,o,o,B.D(C.v,10,C.q).hF(0.6),o,o,o),1)],u)
s=p.Q
if(s!=null){r=B.dr(C.ak,0.8)
q=B.b0(4)
t.push(B.bk(o,B.l("Ziel "+s,o,o,o,B.D(C.ak,9,C.q),o,o,o),C.r,o,o,new B.bb(o,o,r,q,o,o,C.I),o,o,o,o,C.mY,o,o,o))}t=B.b([B.au(t,C.o,C.f,C.i,0,o,o),C.aY,new A.a3M(C.AX,C.dX,B.l(p.d,o,o,o,B.ca(x,22,C.q),o,o,o),o)],u)
s=p.e
if(s!=null)t.push(B.l(s,2,C.ai,o,B.D(C.v,10,C.aN),o,o,o))
t.push(C.cL)
t.push(B.au(B.b([new A.TC("Vormonat",p.r,o),C.cV,new A.TC("Vorjahr",p.f,o)],u),C.o,C.f,C.i,0,o,o))
t.push(C.cL)
t.push(B.aQ(new A.X5(w,p.y,p.z,o),1))
return B.mD(o,B.bL(o,B.ai(t,C.E,C.f,C.i),o,o,C.dn,o,3),C.ac,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,v,o,o,o,o,o,o)}}
A.TC.prototype={
A(d){var x,w,v,u,t,s=null,r=this.d
if(r==null){r=B.b0(4)
return B.bk(s,B.l(this.c+" \u2014",s,s,s,B.D(C.v,9,C.q),s,s,s),C.r,s,s,new B.bb(C.an,s,s,r,s,s,C.I),s,s,s,s,C.mY,s,s,s)}x=r>=0
w=x?C.aP:C.ak
v=w.mi(0.12)
u=B.dr(w,0.7)
t=B.b0(4)
return B.bk(s,B.au(B.b([B.cV(x?F.a7R:D.a7Q,w,s,10),F.atp,B.l(this.c+" "+C.d.am(r,1)+" %",s,s,s,B.D(w,9,C.q),s,s,s)],y.p),C.o,C.f,C.P,0,s,s),C.r,s,s,new B.bb(v,s,u,t,s,s,C.I),s,s,s,s,C.mY,s,s,s)}}
A.X5.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
if(k.length<2)return C.aw
x=B.b([],y.U)
for(w=0;w<k.length;++w)x.push(new A.eu(w,k[w]))
v=C.b.kk(k,new A.biw())
u=C.b.kk(k,new A.bix())
t=this.d
s=t!=null
if(s){if(t<v)v=t
if(t>u)u=t}r=this.e
q=r!=null
if(q){if(r<v)v=r
if(r>u)u=r}p=Math.abs(u-v)<0.001
k=new A.biy(k.length-1)
o=p?v-1:v
n=p?u+1:u
m=A.a3R(l,!1)
x=B.b([A.aHT(l,2,A.avn(!1,C.n.mi(0.16),0,l,!0,D.vz),C.n,0.35,l,D.De,l,!0,!1,!0,!1,D.Ex,!1,10,D.XW,!0,C.l8,x)],y.u)
if(s)x.push(k.$1(t))
if(q)x.push(k.$1(r))
return new A.Nw(A.bso(l,l,l,D.aiL,m,D.Ba,D.Da,D.Df,x,D.ad2,l,n,l,o,D.Xh,D.aiM,D.a7w),C.aq,C.ad,l,l)}}
A.ST.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c.d
if(q.length===0)return new A.U0("Noch keine Trend-Daten f\xfcr den Zeitraum.",r)
x=C.b.fT(q,0,new A.b2x())
w=x>0?x*1.15:10
v=B.b([],y.O)
for(u=y.Y,t=0;t<q.length;++t){s=q[t]
v.push(A.avw(B.b([A.a_A(r,r,D.AE,r,C.n,r,r,r,s.b,6),A.a_A(r,r,D.AE,r,C.h,r,r,r,s.c,6)],u),2,r,r,t))}return B.cl(A.bxO(A.avp(r,r,v,r,r,A.a3R(r,!1),r,new A.y3(!0,!0,r,new A.b2y(),A.Z7(),!1,r,A.at1(),A.Z7()),r,w,r,r,new A.uv(!0,new A.oQ(16,r,new A.pK(!0,new A.b2z(this),46,r),!0),D.k7,D.k7,new A.oQ(16,r,new A.pK(!0,new A.b2A(q),26,r),!0)))),this.d,r)},
aJ9(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.T3.prototype={
A(d){var x,w,v,u,t,s,r=null,q=B.b(["Aktuell","Vormonat","Vorjahr"],y.s),p=this.c,o=p.a,n=p.c
p=p.b
x=y.n
w=B.b([o.c,n.c,p.c],x)
v=B.b([o.e,n.e,p.e],x)
x=y.gj
p=B.P(new B.a9(w,new A.b3k(),x),y.i)
C.b.M(p,new B.a9(v,new A.b3l(),x))
u=C.b.fT(p,0,new A.b3m())
p=u>0?u*1.2:10
o=B.b([],y.O)
for(n=y.Y,t=0;t<3;++t)o.push(A.avw(B.b([A.a_A(r,r,r,r,C.n,r,r,r,w[t],14),A.a_A(r,r,r,r,C.aP,r,r,r,v[t],14)],n),4,r,r,t))
s=B.cl(A.bxO(A.avp(r,r,o,r,r,A.a3R(r,!1),r,D.Df,r,p,r,r,new A.uv(!0,D.k7,D.k7,D.k7,new A.oQ(16,r,new A.pK(!0,new A.b3n(q),26,r),!0)))),this.d,r)
return this.e?s:B.bL(r,s,r,r,C.G,r,3)}}
A.akY.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c.e
if(m.length===0)return D.aFT
x=new B.a9(m,new A.bbM(),B.ab(m).i("a9<1,N>")).kk(0,new A.bbN())
w=y.p
v=B.b([],w)
for(u=m.length,t=0;t<m.length;m.length===u||(0,B.K)(m),++t){s=m[t]
r=B.l(s.b,n,n,n,B.D(C.h,14,C.q),n,n,n)
q=$.e9()
p=s.d
o=new B.aT(4,4)
p=B.b([B.au(B.b([new B.qK(1,C.hG,B.ai(B.b([r,B.l(""+s.e+" Verk\xe4ufe \xb7 \xd8 "+q.aw(s.f),n,n,n,B.D(C.v,12,C.aN),n,n,n)],w),C.E,C.f,C.i),n),C.be,B.l(q.aw(p),n,n,n,B.ca(C.h,16,C.q),n,n,n)],w),C.o,C.f,C.i,0,n,n),C.cL,new B.CG(new B.d2(o,o,o,o),C.bI,B.a5I(C.an,8,C.d.c4(p/x,0,1),D.As),n)],w)
r=C.b.gaf(m)
if(s!==r)r=B.H(s)===B.H(r)&&B.Za(s.gbH(),r.gbH())
else r=!0
if(!r)p.push(C.x)
C.b.M(v,p)}return B.bL(n,B.ai(v,C.o,C.f,C.i),n,n,C.G,n,3)}}
A.ahp.prototype={
A(d){var x=null,w=this.c.r
return B.bL(x,B.au(B.b([B.aQ(new A.Iq("Aktive Kunden",""+w.c,x),1),B.aQ(new A.Iq("K\xe4ufe",""+w.a,x),1),B.aQ(new A.Iq("\xd8-Warenkorb",$.e9().aw(w.d),x),1)],y.p),C.o,C.f,C.i,0,x,x),x,x,C.G,x,3)}}
A.Iq.prototype={
A(d){var x=null
return B.ai(B.b([B.l(this.c.toUpperCase(),x,x,x,B.D(C.v,10,C.q).hF(0.6),x,x,x),C.cK,B.l(this.d,x,x,x,B.ca(C.h,20,C.q),x,x,x)],y.p),C.E,C.f,C.P)}}
A.aqu.prototype={
A(d){var x,w,v,u,t,s=null,r=this.c.f,q=new B.a9(r,new A.bkq(),B.ab(r).i("a9<1,N>")).kk(0,new A.bkr()),p=y.p,o=B.b([],p)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.K)(r),++w){v=r[w]
u=v.d
t=new B.aT(4,4)
u=B.b([B.au(B.b([new B.qK(1,C.hG,B.l(v.b,1,C.ai,s,B.D(C.h,13,C.q),s,s,s),s),B.l(""+v.c+"\xd7 ",s,s,s,B.D(C.v,12,C.O),s,s,s),B.l($.e9().aw(u),s,s,s,B.D(C.h,13,C.q),s,s,s)],p),C.o,C.f,C.i,0,s,s),C.aY,new B.CG(new B.d2(t,t,t,t),C.bI,B.a5I(C.an,6,C.d.c4(u/q,0,1),D.As),s)],p)
t=C.b.gaf(r)
if(v!==t)t=B.H(v)===B.H(t)&&B.Za(v.gbH(),t.gbH())
else t=!0
if(!t)u.push(C.a0)
C.b.M(o,u)}return B.bL(s,B.ai(o,C.o,C.f,C.i),s,s,C.G,s,3)}}
A.U0.prototype={
A(d){var x=null
return B.bL(x,B.l(this.c,x,x,x,B.D(C.v,13,C.k),x,x,x),C.at,x,C.G,x,3)}}
A.b8.prototype={
k(d,e){var x
if(e==null)return!1
if(this!==e)x=y.E.b(e)&&B.H(this)===B.H(e)&&B.Za(this.gbH(),e.gbH())
else x=!0
return x},
gu(d){return(B.ey(B.H(this))^B.bFL(this.gbH()))>>>0},
j(d){B.bz2()
return B.H(this).j(0)}}
A.K0.prototype={
Y(){return new A.Sy(B.y(y.S,y.I),new A.avz(B.y(y.x,y.T)),null,null)}}
A.Sy.prototype={
A(d){var x,w=this,v=w.a1k(),u=w.CW
u.toString
u=w.a1l(u.ar(0,w.ghA().gp(0)))
x=w.a1l(v)
w.a.toString
return new A.JW(new A.a_z(u,x,null),v,null)},
a1l(d){var x,w,v,u,t,s
if(!d.cy.a)return d
x=B.b([],y.O)
for(w=d.ch,v=this.cy,u=0;u<w.length;++u){t=w[u]
s=v.h(0,u)
if(s==null)s=t.e
x.push(A.avw(t.c,t.d,!1,s,t.a))}return d.aOm(x)},
a1k(){var x,w,v=this,u=v.a.r,t=u.x,s=isNaN(t)
if(s||isNaN(u.y)){x=v.db.Ua(u.ch)
if(s)t=x.a
s=u.y
u=u.aPh(isNaN(s)?x.b:s,t)}w=u.cy
if(w.a){v.cx=w.b
return u.aOn(A.br5(!1,!0,!0,w.d,w.c,v.garf(),w.f,w.e))}return u},
arg(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(!d.gaeO()||e==null||e.a==null){x=w.cy
w.L(x.gaNM(x))
return}w.L(new A.b15(w,e))},
nP(d){var x=this
x.CW=y.bn.a(d.$3(x.CW,x.a1k(),new A.b16(x)))}}
A.nv.prototype={
UL(d,e,f,g){var x=this,w=d==null?x.ch:d,v=e==null?x.cy:e,u=f==null?x.y:f,t=g==null?x.x:g
return A.avp(x.cx,x.as,w,v,x.z,x.a,x.at,x.c,x.CW,u,t,x.e,x.d)},
aPh(d,e){return this.UL(null,null,d,e)},
aOn(d){return this.UL(null,d,null,null)},
aOm(d){return this.UL(d,null,null,null)},
WG(d,e,f){var x,w,v,u=A.ke(d.ch,e.ch,f,A.bYJ(),y.dB),t=B.aa(d.CW,e.CW,f),s=A.bz9(d.d,e.d,f),r=A.bB6(d.e,e.e,f),q=A.bz7(d.c,e.c,f),p=e.a
p=A.a3R(B.a_Q(d.a.b,p.b,f),p.a)
x=B.aa(d.y,e.y,f)
w=B.aa(d.x,e.x,f)
v=B.aa(d.z,e.z,f)
s=A.avp(e.cx,B.X(d.as,e.as,f),u,e.cy,v,p,A.bz4(d.at,e.at,f),q,t,x,w,r,s)
return s},
gbH(){var x=this
return[x.ch,x.CW,x.cx,x.d,x.cy,x.y,x.x,x.z,x.c,x.a,x.e,x.as,x.at]}}
A.avo.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fv.prototype={
gdm(d){var x,w=this.c
if(w.length===0)return 0
x=new B.a9(w,new A.avx(),B.ab(w).i("a9<1,N>")).kk(0,new A.avy())
w=w.length
return x+(w-1)*this.d},
gbH(){var x=this
return[x.a,!1,x.c,x.d,x.e]}}
A.i8.prototype={
gbH(){var x=this
return[x.a,x.b,x.e,x.f,x.r,x.w,x.x,x.y,x.c,x.d]}}
A.mk.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a_w.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.a_B.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,!1,!0]}}
A.acq.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_C.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,!1,!1,x.z,x.Q,x.as]}}
A.Ce.prototype={
gbH(){return[this.a,this.b,C.cX,C.u,null]}}
A.K1.prototype={}
A.a_D.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.a,x.b]}}
A.xe.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WG(w,x,d)}}
A.afJ.prototype={}
A.afN.prototype={}
A.afO.prototype={}
A.afQ.prototype={}
A.afR.prototype={}
A.afS.prototype={}
A.afT.prototype={}
A.afU.prototype={}
A.afV.prototype={}
A.avz.prototype={
Ua(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(d.length===0)return new A.u6(0,0,!1)
w=new A.yP(d,y.x)
v=this.a
if(v.aD(0,w)){v=v.h(0,w)
u=v.a
v=v.b
return new A.u6(u,v,!0)}x=null
try{x=C.b.qc(d,new A.avA())}catch(t){return new A.u6(0,0,!1)}s=Math.max(x.c[0].a,x.c[0].b)
r=Math.min(x.c[0].a,x.c[0].b)
for(u=d.length,q=0;q<u;++q)for(p=d[q].c,o=p.length,n=0;n<o;++n){m=p[n]
l=m.a
s=Math.max(s,l)
r=Math.min(r,l)
l=m.b
s=Math.max(s,l)
r=Math.min(r,l)}k=new A.u6(r,s,!1)
v.m(0,w,k)
return k}}
A.u6.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.afP.prototype={}
A.avB.prototype={
i4(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a_q(d,e,f)
x=f.a
w=f.b
v=x.ch
if(v.length===0)return
u=e.b
v=m.abp(u,A.br4(x,u.a),v)
m.y=v
m.aQD(e,v,f)
m.akQ(d,e,f,u)
for(v=w.ch,u=w.cy.e,t=0;t<v.length;++t){s=v[t]
for(r=s.c,q=s.e,p=0;p<r.length;++p){if(!C.b.n(q,p))continue
o=r[p]
n=m.y
n.toString
m.aQM(d,e,n,u,s,t,o,p,f)}}},
abp(d,e,f){var x,w,v,u,t,s,r,q
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
x=B.b([],y.K)
for(w=y.n,v=0;v<f.length;++v){u={}
t=f[v]
s=e[v]
u.a=0
r=B.b([],w)
q=t.c
new B.iJ(q,B.ab(q).i("iJ<1>")).aq(0,new A.avC(u,r,s,t))
x.push(new A.a4v(r))}return x},
aQD(b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(x=b3.ch,w=b5.a,v=w.a,u=b3.y,t=b3.x,s=0;s<x.length;++s)for(r=x[s].c,q=0;q<r.length;++q){p=r[q]
o=p.e
n=o/2
m=p.f
if(m==null){l=new B.aT(n,n)
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
if(a0!==a1){if(a0>a1){a2=b2.dC(Math.max(t,a1),b4,b7)
a3=B.P7(i,Math.min(b2.dC(a0,b4,b7),a2-d),h,a2,f,e,l,g)}else{a4=b2.dC(Math.min(u,a1),b4,b7)
a3=B.P7(i,a4,h,Math.max(b2.dC(a0,b4,b7),a4+d),f,e,l,g)}l=b2.f
l===$&&B.a()
g=p.c
l.r=(g==null?C.D:g).gp(0)
l.seR(null)
a5=b2.f.ek()
v.drawRRect(B.mf(a3),a5)
a5.delete()
l=p.y
if(l.length!==0)for(a6=0;a6<l.length;++a6){a7=l[a6]
g=a7.a
a8=b2.dC(g,b4,b7)
f=a7.b
a9=b2.dC(f,b4,b7)
b2.f.r=a7.c.gp(0)
b0=f<g?new B.E(i,a8,h,a9):new B.E(i,a9,h,a8)
J.aX(v.save())
v.clipRect(B.dG(b0),$.oI()[1],!0)
a5=b2.f.ek()
v.drawRRect(B.mf(a3),a5)
a5.delete()
v.restore()
b2.aQK(b5,a7,a6,l.length,o,a3,b4,b7)}o=k.b
if(o>0){l=k.a
l=l.geg(l)>0}else l=!1
if(l){l=b2.r
l===$&&B.a()
g=k.a
l.r=g.gp(g)
l.c=o
b1=B.cB($.af().r)
o=new B.h3(a3)
b1.e.push(o)
l=b1.d
if(l!=null)o.hD(l)
w.fR(A.ayG(b1,p.r),b2.r)}}}},
aQM(a7,a8,a9,b0,b1,b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=a8.b,a6=b0.r.$4(b1,b2,b3,b4)
if(a6==null)return
x=B.Aj(a4,a4,a4,a4,B.d6(a4,a4,a4,a4,a4,a4,a4,a4,a4,$.lg().Zq(a7,a6.b),a6.a),C.cX,C.u,a4,b5.c,C.bx)
x.af6(b0.f)
w=x.b
v=w.c
w=w.a.c
w=w.gbS(w)
u=a9[b2].b[b4]
t=b3.b
s=a3.dC(t,a5,b5)
r=b3.a
q=a3.dC(r,a5,b5)
p=b0.b
o=v+p.gen()
n=w+4+(p.gcY(0)+p.gd_(0))
m=Math.min(s,q)
l=Math.max(s,q)
w=b0.y
if(w!==D.aBI)k=w===D.Z5&&t>=r
else k=!0
w=b0.c
j=k?m-n-w:l+w
i=a3.Zr(u,o,b0.d,b0.e)
w=i+o
u=j+n
h=new B.E(i,j,w,u)
t=b0.a
g=new B.aT(t,t)
f=B.F8(h,g,g,g,g)
t=a3.w
t===$&&B.a()
s=b0.as.$1(b1)
t.r=s.gp(s)
e=b0.z
w-=i
u-=j
s=$.lg().K1(new B.G(w,u),e).b
t=$.lg()
r=x.b
q=r.c
r=r.a.c
d=t.K1(new B.G(q,r.gbS(r)),e)
r=h.gc7()
q=x.b.c
t=h.gahp()
a0=b0.Q
if(!a0.k(0,C.A)){a1=a3.x
a1===$&&B.a()
a2=a0.a
a1.r=a2.gp(a2)
a1.c=a0.b}a8.Vn(e,new A.avD(a3,a8,f,x,new B.m(r.a-q/2,t.b+p.b-d.b+s)),new B.m(f.a,f.b),new B.m(0,s),new B.G(w,u))},
aQK(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o=this,n=e.d,m=n.b
if(m!==0){x=n.a
x=x.geg(x)===0}else x=!0
if(x)return
if(f===0){x=e.b
w=o.dC(x,j,k)
v=e.a
u=o.dC(v,j,k)
x=v<x
v=x?new B.aT(i.z,i.Q):C.Z
t=x?new B.aT(i.x,i.y):C.Z
s=x?C.Z:new B.aT(i.e,i.f)
x=x?C.Z:new B.aT(i.r,i.w)
r=B.P7(i.a,w,i.c,u,v,t,s,x)}else{x=i.a
w=e.b
v=i.c
u=e.a
if(f===g-1){t=Math.max(o.dC(w,j,k),i.b)
s=o.dC(u,j,k)
w=u<w
u=w?C.Z:new B.aT(i.z,i.Q)
q=w?C.Z:new B.aT(i.x,i.y)
p=w?new B.aT(i.e,i.f):C.Z
r=B.P7(x,t,v,s,u,q,p,w?new B.aT(i.r,i.w):C.Z)}else r=B.bt4(x,o.dC(w,j,k),v,o.dC(u,j,k),C.Z)}x=o.r
x===$&&B.a()
n=n.a
x.r=n.gp(n)
x.c=Math.min(m,h/2)
d.a.eM(r,o.r)},
W2(b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b2.a,a8=b2.b,a9=a8.ch
if(a9.length===0)return null
if(a6.y==null)a6.y=a6.abp(b1,A.br4(a7,b1.a),a7.ch)
for(x=b0.b,w=b0.a,v=a8.cy.f,u=v.a,t=v.d,s=v.b,r=0;q=a6.y,r<q.length;++r)for(q=q[r].b,p=0;p<q.length;++p){o=q[p]
n=a9[r].c[p]
m=n.e/2
l=n.b
k=n.a
j=l>=k
if(j){i=a6.dC(l,b1,b2)
n=a9[r].c[p]
h=a6.dC(n.a+n.x.b,b1,b2)}else{i=a6.dC(k+n.x.b,b1,b2)
h=a6.dC(a9[r].c[p].b,b1,b2)}a6.dC(a9[r].c[p].x.c,b1,b2)
g=w<=o+m+v.c&&w>=o-m-u
if(j)f=x<=h+t&&x>=i-s
else f=x>=i-s&&x<=h+t
if(g&&f){e=a9[r]
d=e.c[p]
w=d.b
u=a6.dC(w,b1,b2)
a9=d.y
a2=0
for(;;){if(!(a2<a9.length)){a0=-1
a1=null
break}a3=a9[a2]
a4=a6.dC(a3.a,b1,b2)
a5=a6.dC(a3.b,b1,b2)
if(x<=a4&&x>=a5){a1=a3
a0=a2
break}++a2}return new A.a_D(e,r,d,p,a1,a0,new A.eu(e.a,w),new B.m(o,u))}}return null}}
A.a4v.prototype={}
A.a_z.prototype={
bl(d){var x,w=this.e,v=B.bx(d,null,y.w).w.gcN(),u=new A.avB()
u.a0C()
$.af()
x=B.aR()
x.b=C.bd
u.f=x
x=B.aR()
x.b=C.aS
u.r=x
x=B.aR()
x.b=C.bd
x.r=C.l.gp(0)
u.w=x
x=B.aR()
x.b=C.aS
x.r=C.D.gp(0)
x.c=1
u.x=x
u=new A.a9z(this.d,w,v,u,d,C.bn,new B.bn(),B.aG(y.v))
u.bj()
u.Ym(w.cy)
u.aef()
return u},
bx(d,e){e.sii(0,this.d)
e.sY7(this.e)
e.scN(B.bx(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9z.prototype={
sii(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bd()},
sY7(d){var x=this
if(x.hX.k(0,d))return
x.hX=d
x.a0a(d.cy)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aX(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fS.i4(x,new A.a02(u,w),new A.vk(v.aB,v.hX,v.cV,y.Q))
t.restore()},
Zk(d){var x=this,w=x.gC(0)
return new A.K1(x.fS.W2(d,w,new A.vk(x.aB,x.hX,x.cV,y.Q)))}}
A.a_p.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as,x.a,x.b,x.at]}}
A.Cd.prototype={
K(){return"AxisSide."+this.b}}
A.t9.prototype={}
A.pK.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.aaY.prototype={
gbH(){return[!1,0,0,0]}}
A.oQ.prototype={
gbH(){return[this.b,this.a,this.c,!0]}}
A.uv.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.eu.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.eu))return!1
x=w.a
if(isNaN(x)&&isNaN(w.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===x&&e.b===w.b},
gu(d){return C.d.gu(this.a)^C.d.gu(this.b)}}
A.y3.prototype={
gbH(){var x=this
return[x.a,!0,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.pd.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.acs.prototype={
gbH(){return[this.a,this.b]}}
A.Pb.prototype={
gbH(){return[this.a,this.b]}}
A.mE.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.n0.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.ky.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.kZ.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.a4G.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.acQ.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.LW.prototype={
gbH(){return[this.a,this.b,!0]}}
A.uu.prototype={}
A.M6.prototype={
acO(d,e,f){var x,w
$.af()
x=B.aR()
w=this.a
x.r=w.gp(w)
x.b=C.bd
d.iO(f,this.b,x)},
gbH(){return[this.a,this.b,this.c,0]}}
A.afE.prototype={}
A.afI.prototype={}
A.aiJ.prototype={}
A.aiZ.prototype={}
A.aj_.prototype={}
A.aj1.prototype={}
A.aj2.prototype={}
A.ajP.prototype={}
A.ajO.prototype={}
A.ajQ.prototype={}
A.and.prototype={}
A.aoY.prototype={}
A.aoZ.prototype={}
A.aqy.prototype={}
A.ara.prototype={}
A.ar9.prototype={}
A.arb.prototype={}
A.ave.prototype={
M8(d,e,f,g,h,i){return new B.iu(this.aUu(d,e,f,g,h,i),y.g4)},
aUt(d,e,f,g){return this.M8(d,e,f,!0,g,!0)},
aUu(d,e,f,g,h,i){return function(){var x=d,w=e,v=f,u=g,t=h,s=i
var r=0,q=1,p=[],o,n,m,l,k,j
return function $async$M8(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)switch(r){case 0:n=$.lg().ais(t,v,w,x)
m=n===t
l=!s&&m?n+w:n
k=n+C.d.fN(v-t,w)*w===v
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
A.JV.prototype={
a0C(){var x,w=this
$.af()
x=B.aR()
x.b=C.aS
w.a=x
x=B.aR()
x.b=C.bd
w.b=x
x=B.aR()
x.b=C.bd
w.e=x
x=B.aR()
x.b=C.aS
w.c=x
w.d=B.aR()},
i4(d,e,f){var x=this
x.a_r(d,e,f)
x.aQz(e,f)
x.aQJ(e,f)
x.aQI(e,f)},
aQI(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a3.a,a1=a0.c
if(!a1.a)return
x=a2.b
if(a1.f){w=a1.r
if(w==null)w=$.lg().Oc(x.a,a0.r-a0.f)
v=$.bqd().M8(a0.w,w,a0.r,!1,a0.f,!1)
for(u=new B.f9(v.a(),v.$ti.i("f9<1>")),t=x.b,s=a1.w,r=a1.x;u.t();){q=u.b
if(!r.$1(q))continue
p=e.fb(q,x,a3)
o=new B.m(p,0)
n=new B.m(p,t)
m=s.$1(q)
q=e.a
q===$&&B.a()
l=m.a
k=m.b
j=B.kN(o,n)
if(k!=null){q.r=C.B.gp(0)
q.seR(k.mJ(0,j))}else{if(l==null)l=C.D
q.r=l.gp(l)
q.seR(d)}l=m.c
q.c=l
if(l===0){q.seR(d)
l=B.bY(q.r)
q.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}a2.Df(o,n,e.a,m.d)}}i=a1.c
if(i==null)i=$.lg().Oc(x.b,a0.y-a0.x)
v=$.bqd().M8(a0.z,i,a0.y,!1,a0.x,!1)
for(u=new B.f9(v.a(),v.$ti.i("f9<1>")),s=a1.d,h=x.a,a1=a1.e;u.t();){r=u.b
if(!a1.$1(r))continue
g=s.$1(r)
f=e.dC(r,x,a3)
o=new B.m(0,f)
n=new B.m(h,f)
r=e.a
r===$&&B.a()
q=g.a
l=g.b
j=B.kN(o,n)
if(l!=null){r.r=C.B.gp(0)
r.seR(l.mJ(0,j))}else{if(q==null)q=C.D
r.r=q.gp(q)
r.seR(d)}q=g.c
r.c=q
if(q===0){r.seR(d)
q=B.bY(r.r)
r.r=B.aA(0,q.v()>>>16&255,q.v()>>>8&255,q.v()&255).gp(0)}a2.Df(o,n,e.a,g.d)}},
aQz(d,e){var x,w,v=e.a.as
if((v.v()>>>24&255)/255===0)return
x=d.b
w=this.b
w===$&&B.a()
w.r=v.gp(0)
d.a.h9(new B.E(0,0,0+x.a,0+x.b),this.b)},
aQJ(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(x=d.a.a,w=n.b,v=0;v<l.length;l.length===k||(0,B.K)(l),++v){u=l[v]
t=B.kN(new B.m(o.fb(u.a,n,e),0),new B.m(o.fb(u.b,n,e),w))
s=o.e
s===$&&B.a()
r=u.c
q=u.d
if(q!=null){s.r=C.B.gp(0)
s.seR(q.mJ(0,t))}else{s.r=(r==null?C.D:r).gp(0)
s.seR(null)}p=o.e.ek()
x.drawRect(B.dG(t),p)
p.delete()}m=m.a
l=m.length
if(l!==0)for(k=d.a.a,x=n.a,v=0;v<m.length;m.length===l||(0,B.K)(m),++v){u=m[v]
t=B.kN(new B.m(0,o.dC(u.a,n,e)),new B.m(x,o.dC(u.b,n,e)))
w=o.e
w===$&&B.a()
s=u.c
r=u.d
if(r!=null){w.r=C.B.gp(0)
w.seR(r.mJ(0,t))}else{w.r=(s==null?C.D:s).gp(0)
w.seR(null)}p=o.e.ek()
k.drawRect(B.dG(t),p)
p.delete()}},
aQH(d,e,f){var x,w
this.a_r(d,e,f)
x=e.b
w=f.a.at
if(w.a.length!==0)this.acP(d,e,f,x)
if(w.b.length!==0)this.aQO(d,e,f,x)},
acP(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=f.a.at.a,w=x.length,v=a0.a,u=a0.b,t=e.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.K)(x),++r){q=x[r]
p=q.e
o=g.dC(p,a0,f)
n=new B.m(0,o)
p=g.dC(p,a0,f)
m=new B.m(v,p)
if(!(o<0||p<0||o>u||p>u)){o=g.c
o===$&&B.a()
l=q.a
k=q.b
j=B.kN(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seR(k.mJ(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seR(null)}l=q.c
o.c=l
if(l===0){o.seR(null)
l=B.bY(o.r)
o.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}o.d=q.x
e.Df(n,m,g.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=C.d.al(p,o.gbS(o).ez(0,2))
J.aX(s.save())
s.translate(i,h)
o=o.gN5().b
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
t.acQ(0,o,new B.m(i,p),l)}}},
aQO(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(x=a1.a.at.b,w=x.length,v=a2.b,u=a2.a,t=a0.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.K)(x),++r){q=x[r]
p=q.e
o=e.fb(p,a2,a1)
n=new B.m(o,0)
p=e.fb(p,a2,a1)
m=new B.m(p,v)
if(!(o<0||p<0||o>u||p>u)){o=e.c
o===$&&B.a()
l=q.a
k=q.b
j=B.kN(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seR(k.mJ(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seR(null)}l=q.c
o.c=l
if(l===0){o.seR(null)
l=B.bY(o.r)
o.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}o.d=q.x
a0.Df(n,m,e.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=o.gbS(o).ez(0,2)
g=C.d.al(p,i)
f=C.d.al(v,h)
J.aX(s.save())
s.translate(g,f)
o=o.gN5().b
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
t.acQ(0,o,new B.m(p,l),k)}}},
fb(d,e,f){var x=f.a,w=x.f,v=x.r-w
if(v===0)return 0
return(d-w)/v*e.a},
dC(d,e,f){var x,w=f.a,v=w.x,u=w.y-v
if(u===0)return e.b
x=e.b
return x-(d-v)/u*x},
Zr(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.JW.prototype={
gakb(){var x,w=this.d.d
if(!w.a)return!1
w=w.b.c
x=w.a&&w.c!==0
return x},
gakc(){var x,w=this.d.d
if(!w.a)return!1
w=w.d.c
x=w.a&&w.c!==0
return x},
gakd(){var x,w=this.d.d
if(!w.a)return!1
w=w.c.c
x=w.a&&w.c!==0
return x},
gak9(){var x,w=this.d.d
if(!w.a)return!1
w=w.e.c
x=w.a&&w.c!==0
return x},
akw(d){var x,w=this,v=null,u=w.d,t=A.brR(u.d),s=u.a
s=s.a&&A.bL4(s.b)?s.b:v
x=B.b([B.bk(v,w.c,C.r,v,v,new B.bb(v,v,s,v,v,v,C.I),v,v,v,t,v,v,v,v)],y.p)
t=new A.avg(x)
if(w.gakb())C.b.hs(x,t.$1(!0),new A.A4(D.Az,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gakd())C.b.hs(x,t.$1(!0),new A.A4(D.mf,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gakc())C.b.hs(x,t.$1(!0),new A.A4(D.AA,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gak9())C.b.hs(x,t.$1(!0),new A.A4(D.dx,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
return x},
A(d){return B.kG(new A.avf(this))}}
A.QC.prototype={
Y(){return new A.WV(new B.ba(null,y.eF))}}
A.WV.prototype={
awE(){switch(this.a.c.a){case 0:return C.f1
case 1:return C.hn
case 2:return C.dX
case 3:return C.ho}},
ax9(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awG(d){this.a.toString
return},
az(){this.aQ()
$.cw.x1$.push(this.ga3L())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3L())},
A(d){var x,w=this,v=null,u=w.a
u.toString
x=w.ax9()
return B.btC(B.aZP(0,B.bk(w.awE(),u.e,C.r,v,v,v,v,v,w.d,x,v,v,v,v)),C.p)}}
A.aaZ.prototype={
bl(d){return A.bKV(this.f,this.r,this.e)},
bx(d,e){var x=this.e
if(e.B!==x){e.B=x
e.a7()}x=this.f
if(e.V!==x){e.V=x
e.a7()}x=this.r
if(e.U!==x){e.U=x
e.a7()}}}
A.a_q.prototype={
hi(d){if(!(d.b instanceof B.hc))d.b=new B.hc(null,null,C.p)},
hQ(d){if(this.B===C.aZ)return this.xQ(d)
return this.acq(d)},
aJj(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8k(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var x=this.a8j(d,B.hr())
switch(this.B.a){case 0:return d.c1(new B.G(x.a,x.b))
case 1:return d.c1(new B.G(x.b,x.a))}},
a8j(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.B===C.aZ?d.b:d.d,n=p.ag$
for(x=y.L,w=d.b,v=d.d,u=0,t=0;n!=null;){s=n.b
s.toString
x.a(s)
switch(p.B.a){case 0:r=B.fR(v,null)
break
case 1:r=B.fR(null,w)
break
default:r=null}q=e.$2(n,r)
t+=p.a8k(q)
u=Math.max(u,p.aJj(q))
n=s.aG$}return new A.bbo(o<1/0?o:t,u)},
cu(){var x,w,v,u,t,s,r,q=this,p=y.k.a(B.I.prototype.ga6.call(q)),o=q.a8j(p,B.md()),n=o.a,m=o.b
switch(q.B.a){case 0:q.fy=p.c1(new B.G(n,m))
q.gC(0)
q.gC(0)
break
case 1:q.fy=p.c1(new B.G(m,n))
q.gC(0)
q.gC(0)
break}x=q.ag$
for(w=y.L,v=0;x!=null;){u=x.b
u.toString
w.a(u)
t=q.U[v]
s=x.fy
r=t.b-q.a8k(s==null?B.V(B.Z("RenderBox was not laid out: "+B.H(x).j(0)+"#"+B.c2(x))):s)/2
switch(q.B.a){case 0:s=new B.m(r,0)
break
case 1:s=new B.m(0,r)
break
default:s=null}u.a=s
x=u.aG$;++v}},
e8(d,e){return this.xR(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uR(d,e)},
l(){this.a2.sbh(0,null)
this.ans()}}
A.bbo.prototype={}
A.avh.prototype={}
A.jC.prototype={
gbH(){return[this.a,this.b]}}
A.nu.prototype={}
A.afF.prototype={}
A.afG.prototype={
aN(d){var x,w,v
this.fm(d)
x=this.ag$
for(w=y.L;x!=null;){x.aN(d)
v=x.b
v.toString
x=w.a(v).aG$}},
aF(d){var x,w,v
this.ff(0)
x=this.ag$
for(w=y.L;x!=null;){x.aF(0)
v=x.b
v.toString
x=w.a(v).aG$}}}
A.afH.prototype={}
A.Sw.prototype={
l(){var x,w,v
for(x=this.VB$,w=x.length,v=0;v<w;++v)x[v].l()
this.iw()}}
A.A4.prototype={
gov(){var x=this
switch(x.c.a){case 0:return x.d.d.b
case 1:return x.d.d.c
case 2:return x.d.d.d
case 3:return x.d.d.e}},
ghC(){switch(this.c.a){case 0:return C.dX
case 1:return C.ho
case 2:return C.f1
case 3:return C.hn}},
gaZ2(){var x=this.d,w=A.brR(x.d),v=A.bz6(x.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,w.b,0,w.d).ac(0,new B.aj(0,v.b,0,v.d))
case 1:case 3:return new B.aj(w.a,0,w.c,0).ac(0,new B.aj(v.a,0,v.c,0))}},
gahc(){var x=this.d,w=A.bz6(x.a),v=A.brR(x.d)
switch(this.c.a){case 2:case 0:return v.gcY(0)+v.gd_(0)+(w.gcY(0)+w.gd_(0))
case 1:case 3:return v.gen()+w.gen()}},
aVd(d,e,f,g){var x,w,v,u,t,s,r,q=this,p=q.gov().c.d
if(p==null)p=$.lg().Oc(d,f-e)
x=q.c
w=x!==D.mf
if((!w||x===D.dx)&&q.d instanceof A.nv){v=y.B.a(q.d)
if(v.ch.length===0)return B.b([],y.g)
u=A.br4(v,d)
x=new B.iJ(u,B.ab(u).i("iJ<1>"))
t=x.giC(x).f_(0,new A.aWL(v),y.W).fV(0)}else{s=$.bqd()
x=!w||x===D.dx
w=q.d
r=s.aUt(x?w.w:w.z,p,f,e)
w=B.nZ(r,new A.aWM(q,f,e,d),r.$ti.i("t.E"),y.W)
t=B.P(w,B.j(w).i("t.E"))}x=B.ab(t).i("a9<1,nu>")
x=B.P(new B.a9(t,new A.aWN(q,e,f,p,g,d),x),x.i("av.E"))
return x},
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.gov()
x=k.gov()
x=x.c
x=!(x.a&&x.c!==0)
if(x)return B.bk(j,j,C.r,j,j,j,j,j,j,j,j,j,j,j)
x=k.c
w=x===D.mf
v=!w
u=!v||x===D.dx
t=k.e
s=u?t.a:t.b
u=k.ghC()
t=!v||x===D.dx?C.a8:C.aZ
r=B.b([],y.p)
if(x===D.Az||w)k.gov()
if(k.gov().c.a){w=!v||x===D.dx?s:k.gov().c.c
q=!v||x===D.dx?k.gov().c.c:s
p=k.gaZ2()
o=!v||x===D.dx?C.aZ:C.a8
k.gahc()
n=k.gahc()
m=!v||x===D.dx
l=k.d
m=m?l.f:l.x
v=!v||x===D.dx?l.r:l.y
r.push(B.bk(j,A.bS8(new A.avh(),o,k.aVd(s-n,m,v,x)),C.r,j,j,j,j,q,j,p,j,j,j,w))}if(x===D.AA||x===D.dx)k.gov()
return new B.eT(u,j,j,B.bNI(r,C.o,t,j,C.f,C.P,0,j,j,C.dT),j)}}
A.a_F.prototype={
gbH(){return[this.a,this.b]}}
A.a3Q.prototype={
gbH(){return[this.a,this.b]}}
A.Md.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a3S.prototype={
gaaK(d){return!1},
gbH(){return[!1,!1,!1,!1]}}
A.avM.prototype={}
A.aC2.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.afY.prototype={}
A.aiW.prototype={}
A.aiX.prototype={}
A.aj3.prototype={}
A.K4.prototype={
i4(d,e,f){}}
A.vk.prototype={}
A.hb.prototype={
gdH(){return null},
gaeO(){var x,w=this
B.bu()
B.bu()
B.bu()
x=w instanceof A.Mc
if(x)return!0
return!(w instanceof A.M9)&&!(w instanceof A.M8)&&!(w instanceof A.Ma)&&!(w instanceof A.M7)&&!x&&!(w instanceof A.Mb)}}
A.a3W.prototype={
gdH(){return this.a.b}}
A.a3X.prototype={
gdH(){return this.a.b}}
A.a3Y.prototype={
gdH(){return this.a.b}}
A.M8.prototype={}
A.M9.prototype={}
A.a40.prototype={
gdH(){return this.a.b}}
A.Mb.prototype={}
A.Mc.prototype={
gdH(){return this.a.b}}
A.a3V.prototype={
gdH(){return this.a.b}}
A.a3U.prototype={
gdH(){return this.a.b}}
A.M7.prototype={
gdH(){return this.a.b}}
A.a3Z.prototype={
gdH(){return this.a.gdH()}}
A.a4_.prototype={
gdH(){return this.a.gdH()}}
A.Ma.prototype={
gdH(){return this.a.gdH()}}
A.Fk.prototype={
Ym(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aef(){var x=this,w=null,v=x.ad=B.bsL(w,w)
v.ay=new A.aS2(x)
v.ch=new A.aS3(x)
v.CW=new A.aS4(x)
v.cy=new A.aS5(x)
v.cx=new A.aS6(x)
v=x.aE=B.G9(w,-1,w)
v.B=new A.aS7(x)
v.a3=new A.aS8(x)
v.V=new A.aS9(x)
v=x.bz=B.a5P(w,x.a2,w)
v.p3=new A.aSa(x)
v.p4=new A.aSb(x)
v.RG=new A.aSc(x)},
cu(){var x=y.k.a(B.I.prototype.ga6.call(this))
this.fy=new B.G(x.b,x.d)},
dz(d){return new B.G(d.b,d.d)},
kI(d){return!0},
mT(d,e){var x,w=this
if(w.V==null)return
if(y.eo.b(d)){x=w.bz
x===$&&B.a()
x.rA(d)
x=w.aE
x===$&&B.a()
x.rA(d)
x=w.ad
x===$&&B.a()
x.rA(d)}else if(y.gJ.b(d))w.l5(new A.a4_(d))},
gMC(d){return new A.aSd(this)},
gME(d){return new A.aSe(this)},
l5(d){var x,w,v=this
if(v.V==null)return
x=d.gdH()
w=x!=null?v.Zk(x):null
v.V.$2(d,w)
v.a3=C.bn},
gKw(d){return this.a3},
gFd(){var x=this.an
x===$&&B.a()
return x},
aN(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.ff(0)},
$ije:1}
A.Nw.prototype={
Y(){return new A.UM(B.b([],y.r),B.y(y.S,y.I),new A.aHV(B.y(y.y,y.dj)),null,null)}}
A.UM.prototype={
A(d){var x,w=this,v=w.a3N(),u=w.CW
u.toString
u=w.aaj(u.ar(0,w.ghA().gp(0)))
x=w.aaj(v)
w.a.toString
return new A.JW(new A.a5G(u,x,null),v,null)},
aaj(d){var x,w
if(!d.cx.a)return d
x=d.ch
w=B.ab(x).i("a9<1,e2>")
x=B.P(new B.a9(x,new A.bbt(this,d),w),w.i("av.E"))
return d.aPe(x,this.cy)},
a3N(){var x,w,v,u,t=this,s=t.a.r,r=s.f,q=isNaN(r)
if(q||isNaN(s.r)||isNaN(s.x)||isNaN(s.y)){x=t.dx.Ua(s.ch)
if(q)r=x.a
q=s.r
if(isNaN(q))q=x.b
w=s.x
if(isNaN(w))w=x.c
v=s.y
s=s.aPt(q,isNaN(v)?x.d:v,r,w)}u=s.cx
if(u.a){t.cx=u.b
s=s.aOT(new A.E1(u.e,u.f,u.r,u.w,!0,u.y,u.z,!0,t.gaxY(),u.c,u.d))}return s},
axZ(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(d.gaeO())x=(e==null?null:e.a)==null||e.a.length===0
else x=!0
if(x){w.L(new A.bbr(w))
return}w.L(new A.bbs(w,e))},
nP(d){var x=this
x.CW=y.f3.a(d.$3(x.CW,x.a3N(),new A.bbu(x)))}}
A.po.prototype={
WG(d,e,f){var x,w,v,u,t,s,r=B.aa(d.f,e.f,f),q=B.aa(d.r,e.r,f),p=B.aa(d.w,e.w,f),o=B.aa(d.x,e.x,f),n=B.aa(d.y,e.y,f),m=B.aa(d.z,e.z,f),l=B.X(d.as,e.as,f),k=e.a
k=A.a3R(B.a_Q(d.a.b,k.b,f),k.a)
x=A.bz4(d.at,e.at,f)
w=A.bz7(d.c,e.c,f)
v=A.bz9(d.d,e.d,f)
u=A.bB6(d.e,e.e,f)
t=A.ke(d.ch,e.ch,f,A.c_M(),y.cz)
t.toString
s=A.ke(d.CW,e.CW,f,A.c_L(),y.J)
s.toString
v=A.bso(l,p,m,s,k,e.Q,x,w,t,e.cx,q,n,r,o,u,e.cy,v)
return v},
UM(d,e,f,g,h,i,j){var x=this,w=d==null?x.ch:d,v=e==null?x.cx:e,u=j==null?x.cy:j,t=h==null?x.f:h,s=f==null?x.r:f,r=i==null?x.x:i,q=g==null?x.y:g
return A.bso(x.as,x.w,x.z,x.CW,x.a,x.Q,x.at,x.c,w,v,s,q,t,r,x.e,u,x.d)},
aPt(d,e,f,g){return this.UM(null,null,d,e,f,g,null)},
aOT(d){var x=null
return this.UM(x,d,x,x,x,x,x)},
aPe(d,e){var x=null
return this.UM(d,x,x,x,x,x,e)},
gbH(){var x=this
return[x.ch,x.CW,x.d,x.at,x.cx,x.cy,x.c,x.a,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as]}}
A.e2.prototype={
aq_(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=null
try{m=C.b.qc(o.a,new A.aHU())}catch(x){}if(m!=null){for(w=o.a,v=w.length,u=n,t=u,s=t,r=s,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
if(p.k(0,D.fC))continue
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
ac6(d,e){var x=this,w=e==null?x.a:e,v=d==null?x.cx:d
return A.aHT(x.ch,x.x,x.ay,x.r,x.z,x.cy,x.CW,x.w,x.y,!1,x.at,!1,x.dy,!1,x.as,x.db,!0,v,w)},
aP_(d){return this.ac6(d,null)},
aP1(d){return this.ac6(null,d)},
gbH(){var x=this
return[x.a,!0,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,!1,x.ay,x.ch,x.CW,x.cx,x.cy,x.db,!1,x.dy]}}
A.Nx.prototype={
gbH(){return[this.a]}}
A.a_y.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,!1]}}
A.ml.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.K_.prototype={
gbH(){return[!1,this.b,this.c,!0]}}
A.y2.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.aHF.prototype={
K(){return"LabelDirection."+this.b}}
A.a3T.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.E1.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,!0,x.y,x.z]}}
A.a5H.prototype={
gbH(){return[4,C.hC,16,D.x9,0,120,A.c_O(),!1,!1,!1,0,C.A,A.c_N()]}}
A.mI.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.a,x.b]}}
A.pT.prototype={}
A.rb.prototype={
gbH(){return[this.a,this.b,C.cX,C.u,null]}}
A.ta.prototype={
gbH(){return[this.a,this.b]}}
A.FM.prototype={
gbH(){return[this.a]}}
A.Ny.prototype={}
A.yL.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WG(w,x,d)}}
A.afL.prototype={}
A.afM.prototype={}
A.afZ.prototype={}
A.aiY.prototype={}
A.aj0.prototype={}
A.akB.prototype={}
A.akC.prototype={}
A.akD.prototype={}
A.akF.prototype={}
A.akG.prototype={}
A.akH.prototype={}
A.akI.prototype={}
A.aoX.prototype={}
A.aqx.prototype={}
A.aHV.prototype={
Ua(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length===0)return D.xE
v=new A.yP(d,y.y)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
s=u.b
r=u.c
u=u.d
return new A.yM(t,s,r,u,!0)}x=null
try{x=C.b.qc(d,new A.aHW())}catch(q){return D.xE}w=null
try{w=C.b.qc(x.a,new A.aHX())}catch(q){return D.xE}p=w.a
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
if(g<n)n=g}f=new A.yM(p,o,n,m,!1)
u.m(0,v,f)
return f}}
A.yM.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.akE.prototype={}
A.aHY.prototype={
i4(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a3.a,a0=d.ch
if(a0.length===0)return
x=d.Q
if(x.gaaK(0)){w=a2.b
v=w.a
w=w.b
$.af()
a2.a.jm(new B.E(0,-40,0+(v+40),-40+(w+40)),B.aR())
a2.aNT(new B.E(0,0,v,w))}e.a_q(a1,a2,a3)
for(w=d.CW,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)e.aQF(a2,d,w[u],a3)
t=B.b([],y.bC)
for(w=d.cx,v=w.f,s=0;s<a0.length;++s){r=a0[s]
e.aQB(a2,r,a3)
e.aQG(a2,r,a3)
e.akP(a1,a2,a3)
q=r.cx
p=v.$2(r,q)
o=J.Y(p)
if(o.gq(p)!==q.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(n=r.a,m=0;m<q.length;++m){l=o.h(p,m)
k=q[m]
if(k<0||k>=n.length)continue
j=n[k]
if(l==null)continue
t.push(new A.v2(r,j,k,l))}}e.aQN(a2,t,a3)
if(x.gaaK(0))a2.a.a.restore()
for(a0=d.cy,w=w.e,x=y.Z,s=0;s<a0.length;++s){i=a0[s].a
if(i.length===0)continue
h=B.P(i,x)
g=h[0]
for(v=h.length,u=0;u<v;++u){f=h[u]
if(f.b>g.b)g=f}e.aQL(a1,a2,w,g,new A.FM(h),a3)}},
aQB(d,e,f){var x,w,v,u,t,s,r,q=this,p=d.b,o=A.brQ(e.a)
for(x=o.length,w=0;w<o.length;o.length===x||(0,B.K)(o),++w){v=o[w]
u=q.YU(p,e,v,f)
t=q.aij(p,e,u,v,f)
s=q.YW(p,e,u,v,f,!0)
r=q.aii(p,e,u,v,f)
q.aQE(d,t,q.YT(p,e,u,v,f,!0),f,e)
q.aQy(d,r,s,f,e)
q.aQC(d,u,e)
q.aQA(d,u,e,f)}},
aQF(a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.brQ(a5.a),a8=A.brQ(a6.a)
if(a7.length!==a8.length)throw B.e(B.bC("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a,x=a4.a,w=b1.c,v=b1.d,u=$.bT.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ab(n).i("cE<1>")
l=B.P(new B.cE(n,m),m.i("av.E"))
k=a2.YU(a3,a5,o,b2)
j=a2.YV(a3,a6.aP1(l),l,b2,k)
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
n=a2.fb(i,a3,b2)
m=a2.dC(h,a3,b2)
e=a2.fb(g,a3,b2)
d=a2.dC(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.B.gp(0)
a0.seR(v.mJ(0,new B.E(n,m,e,d)))}else{a0.r=(r?C.D:w).gp(0)
a0.seR(null)}$.af()
a1=new B.mo(C.dk,C.bd,C.dQ,C.eh,C.dD).ek()
n=B.dG(new B.E(0,0,t,s))
m=$.bT.b
if(m===$.bT)B.V(B.v_(u))
m=m.TileMode.Clamp
x.saveLayer.apply(x,[a1,n,null,null,m])
a1.delete()
a4.fR(j,a2.r)
x.restore()}},
aQG(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.CW
if(!o.a||e.a.length===0)return
x=d.b
w=this.Z_(e,x,f)
for(v=e.a,u=o.b,o=o.c,t=d.a,s=0;s<v.length;++s){r=v[s]
if(!r.k(0,D.fC)&&u.$2(r,e)){q=this.fb(r.a,x,f)
p=this.dC(r.b,x,f)
o.$4(r,q/w*100,e,s).acO(t,r,new B.m(q,p))}}},
aQN(b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b2.length===0)return
x=b1.b
C.b.h_(b2,new A.aI0())
for(w=b2.length,v=b3.a,u=b1.a,t=v.y,s=v.x,r=v.cx,q=r.y,r=r.z,p=0;p<b2.length;b2.length===w||(0,B.K)(b2),++p){o=b2[p]
n=o.a
m=b0.Z_(n,x,b3)
l=o.d
k=o.c
j=o.e
i=b0.fb(k.a,x,b3)
h=b0.dC(k.b,x,b3)
g=j.b
f=g.a
e=B.cj()
if(f){g=e.b=g.c.$4(k,i/m*100,n,l)
if(g===e)B.V(B.ra(e.a))
d=g.b*2}else d=0
a0=Math.min(t,Math.max(s,B.ld(q.$2(n,l))))
a1=Math.min(t,Math.max(s,B.ld(r.$2(n,l))))
g=b0.dC(a0,x,b3)
a2=new B.m(i,g)
a3=b0.dC(a1,x,b3)
a4=new B.m(i,a3)
a5=d/2
a6=h-a5
a7=h+a5
if(a3>a6&&a3<a7)a4=g<a3?new B.m(i,a3-(a3-a6)):new B.m(i+0,a3+(a7-a3))
a8=j.a
g=b0.y
g===$&&B.a()
a3=a8.a
a5=a8.b
a9=B.kN(a2,a4)
if(a5!=null){g.r=C.B.gp(0)
g.seR(a5.mJ(0,a9))}else{if(a3==null)a3=C.D
g.r=a3.gp(a3)
g.seR(null)}a3=a8.c
g.c=a3
if(a3===0){g.seR(null)
a3=B.bY(g.r)
g.r=B.aA(0,a3.v()>>>16&255,a3.v()>>>8&255,a3.v()&255).gp(0)}b1.Df(a2,a4,b0.y,a8.d)
if(f){g=e.b
if(g===e)B.V(B.ra(e.a))
g.acO(u,k,new B.m(i,h))}}},
YV(d,e,f,g,h){var x=this.aik(d,e,f,g,h)
return x},
YU(d,e,f,g){return this.YV(d,e,f,g,null)},
aik(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a4==null,h=i?B.cB($.af().r):a4,g=J.Y(a2),f=g.gq(a2),e=j.fb(g.h(a2,0).a,a0,a3),d=j.dC(g.h(a2,0).b,a0,a3)
if(i){h.aA(new B.f5(e,d))
if(f===1)h.aA(new B.ct(e,d))}else h.aA(new B.ct(e,d))
for(i=h.e,x=a1.y,w=a1.z,v=C.p,u=1;u<f;u=p,v=k){t=j.fb(g.h(a2,u).a,a0,a3)
s=j.dC(g.h(a2,u).b,a0,a3)
r=u-1
q=j.fb(g.h(a2,r).a,a0,a3)
r=j.dC(g.h(a2,r).b,a0,a3)
p=u+1
o=p<f
n=j.fb(g.h(a2,o?p:u).a,a0,a3)
m=j.dC(g.h(a2,o?p:u).b,a0,a3)
l=x?w:0
o=(n-q)/2*l
m=(m-r)/2*l
k=new B.m(o,m)
t=new B.KY(q+v.a,r+v.b,t-o,s-m,t,s)
i.push(t)
s=h.d
if(s!=null)t.hD(s)}return h},
YW(d,e,f,g,h,i){var x,w,v,u,t=this
$.af()
x=B.bsm(f)
w=J.Y(g)
v=t.fb(w.h(g,w.gq(g)-1).a,d,h)
u=d.b
x.aA(new B.ct(v,u))
v=t.fb(w.h(g,0).a,d,h)
x.aA(new B.ct(v,u))
x.aA(new B.ct(t.fb(w.h(g,0).a,d,h),t.dC(w.h(g,0).b,d,h)))
x.aA(new B.oZ())
return x},
aij(d,e,f,g,h){return this.YW(d,e,f,g,h,!1)},
YT(d,e,f,g,h,i){var x,w,v,u=this
$.af()
x=B.bsm(f)
w=J.Y(g)
v=u.fb(w.h(g,w.gq(g)-1).a,d,h)
x.aA(new B.ct(v,0))
v=u.fb(w.h(g,0).a,d,h)
x.aA(new B.ct(v,0))
x.aA(new B.ct(u.fb(w.h(g,0).a,d,h),u.dC(w.h(g,0).b,d,h)))
x.aA(new B.oZ())
return x},
aii(d,e,f,g,h){return this.YT(d,e,f,g,h,!1)},
aQE(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ay
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.fb(w.a,x,g)
v=h.c
v===$&&B.a()
v=s.dC(v.b,x,g)
u=h.d
u===$&&B.a()
u=s.fb(u.a,x,g)
t=s.r
t===$&&B.a()
A.bsK(t,r.b,r.c,new B.E(w,v,u,x.b))
d.a.fR(e,s.r)},
aQy(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ch
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.fb(w.a,x,g)
v=h.d
v===$&&B.a()
v=s.fb(v.a,x,g)
u=h.e
u===$&&B.a()
u=s.dC(u.b,x,g)
t=s.r
t===$&&B.a()
A.bsK(t,r.b,r.c,new B.E(w,0,v,u))
d.a.fR(e,s.r)},
aQC(d,e,f){var x=f.db,w=x.a,v=w.v()
if((v>>>24&255)/255===0)return
if(!new B.Nq(e,!1,B.b([],y.C)).t())return
v=this.f
v===$&&B.a()
v.d=f.at?C.jQ:C.dQ
v.e=C.eh
v.r=w.gp(0)
v.seR(null)
v.c=f.x
v.r=w.gp(0)
$.lg()
v.z=new B.yU(C.aC,x.c*0.57735+0.5)
d.a.fR(B.bsn(A.ayG(e,f.cy),x.b),this.f)},
aQA(d,e,f,g){var x,w,v,u,t=this,s=d.b,r=t.f
r===$&&B.a()
r.d=f.at?C.jQ:C.dQ
r.e=C.eh
r=f.b
r===$&&B.a()
r=t.fb(r.a,s,g)
x=f.c
x===$&&B.a()
x=t.dC(x.b,s,g)
w=f.d
w===$&&B.a()
w=t.fb(w.a,s,g)
v=f.e
v===$&&B.a()
v=t.dC(v.b,s,g)
u=t.f
A.bsK(u,f.r,f.w,new B.E(r,x,w,v))
u.z=null
u.c=f.x
A.bQb(u)
d.a.fR(A.ayG(e,f.cy),t.f)},
aQL(b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],y.eg),b0=b7.a,b1=A.bFg(b0),b2=J.Y(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(x=b8.c,w=0;w<b0.length;++w){v=b2.h(b1,w)
if(v==null)continue
u=$.lg().Zq(b3,v.b)
t=v.a
s=x.k(0,C.iB)?new B.k9(1):x
r=new B.t7(new B.hG(t,a7,a7,C.bn,a7,a7,a7,a7,a7,a7,u),C.cX,C.u,s,a7,a7,a7,a7,C.bx,a7)
r.af6(120)
a9.push(r)}b2=a9.length
if(b2===0)return
for(q=0,p=0,o=0;x=a9.length,o<x;a9.length===b2||(0,B.K)(a9),++o){x=a9[o].b
n=x.c
if(n>q)q=n
x=x.a.c
p+=x.gbS(x)}b2=a6.fb(b6.a,a8,b8)
u=a6.dC(b6.b,a8,b8)
m=q+C.hC.gen()
l=p+(x-1)*4+(C.hC.gcY(0)+C.hC.gd_(0))
k=u-l-16
j=a6.Zr(b2,m,D.x9,0)
b2=j+m
x=k+l
i=new B.aT(4,4)
h=B.F8(new B.E(j,k,b2,x),i,i,i,i)
g=b0[0]
for(u=b0.length,o=0;o<u;++o){f=b0[o]
if(f.b>g.b)g=f}b0=a6.z
b0===$&&B.a()
u=A.bFf(g)
b0.r=u.gp(u)
u=b2-j
x-=k
b0=$.lg().K1(new B.G(u,x),0).b
e=new B.m(0,b0)
d=new B.m(h.a,h.b)
a0=$.lg().K1(new B.G(u,x),0)
if(!C.A.k(0,C.A)){t=a6.Q
t===$&&B.a()
t.r=C.B.gp(0)
t.c=0}b4.Vn(0,new A.aHZ(a6,b4,h),d,e,new B.G(u,x))
for(t=a9.length,s=j+u/2,a1=a0.b,b2-=16,a2=j+16,a3=8,o=0;o<a9.length;a9.length===t||(0,B.K)(a9),++o){r=a9[o]
a4=A.bSI(r.r,r.w)
A:{if(D.Dn===a4){a5=a2
break A}if(D.Do===a4){a5=b2-r.b.c
break A}a5=s-r.b.c/2
break A}b4.Vn(0,new A.aI_(b4,r,new B.m(a5,k+a3-a1+b0)),d,e,new B.G(u,x))
a5=r.b.a.c
a3=a3+a5.gbS(a5)+4}},
Z_(d,e,f){var x,w=d.a
if(w.length===0)return 0
x=this.fb(w[0].a,e,f)
return this.fb(w[w.length-1].a,e,f)-x},
W2(d,e,f){var x,w,v,u=B.b([],y.df)
for(x=f.a.ch,w=0;w<x.length;++w){v=this.aiM(e,d,x[w],w,f)
if(v!=null)u.push(v)}C.b.h_(u,new A.aI1())
return u.length===0?null:u},
aiM(d,e,f,g,h){var x,w,v,u,t,s,r,q,p=B.b([],y.U)
for(x=f.a,w=x.length,v=h.a.cx,u=v.r,v=v.w,t=null,s=0;s<x.length;x.length===w||(0,B.K)(x),++s){r=x[s]
if(r.k(0,D.fC))continue
q=v.$2(e,new B.m(this.fb(r.a,d,h),this.dC(r.b,d,h)))
if(q<=u){if(t==null)t=q
if(q<t){C.b.hs(p,0,r)
t=q}else p.push(r)}}if(p.length!==0){w=C.b.ga0(p)
t.toString
return new A.pT(t,f,g,C.b.io(x,w),w.a,w.b)}else return null}}
A.v2.prototype={}
A.a5G.prototype={
bl(d){var x,w=this.e,v=B.bx(d,null,y.w).w.gcN(),u=new A.aHY()
u.a0C()
$.af()
x=B.aR()
x.b=C.aS
u.f=x
x=B.aR()
x.b=C.bd
u.r=x
x=B.aR()
x.b=C.aS
u.w=x
x=B.aR()
x.b=C.bd
x.r=C.D.gp(0)
x.a=D.a_a
u.x=x
x=B.aR()
x.b=C.aS
x.r=C.B.gp(0)
u.y=x
x=B.aR()
x.b=C.bd
x.r=C.l.gp(0)
u.z=x
x=B.aR()
x.b=C.aS
x.r=C.D.gp(0)
x.c=1
u.Q=x
u=new A.a9M(this.d,w,v,u,d,C.bn,new B.bn(),B.aG(y.v))
u.bj()
u.Ym(w.cx)
u.aef()
return u},
bx(d,e){e.sii(0,this.d)
e.sY7(this.e)
e.scN(B.bx(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9M.prototype={
sii(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bd()},
sY7(d){var x=this
if(x.hX.k(0,d))return
x.hX=d
x.a0a(d.cx)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aX(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fS.i4(x,new A.a02(u,w),new A.vk(v.aB,v.hX,v.cV,y.o))
t.restore()},
Zk(d){var x=this,w=x.gC(0)
return new A.Ny(x.fS.W2(d,w,new A.vk(x.aB,x.hX,x.cV,y.o)))}}
A.MD.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a02.prototype={
aNT(d){this.a.a.clipRect(B.dG(d),$.oI()[1],!0)
return null},
acW(d,e){d.aM(this.a,e)},
Vn(d,e,f,g,h){var x,w,v,u,t=this.a,s=t.a
J.aX(s.save())
x=f.a
w=h.a/2
v=f.b
u=h.b/2
s.translate(g.a+x+w,g.b+v+u)
$.lg()
t.Y5(0,d*0.017453292519943295)
s.translate(-x-w,-v-u)
e.$0()
s.restore()},
Df(d,e,f,g){var x=B.cB($.af().r)
x.aA(new B.f5(d.a,d.b))
x.aA(new B.ct(e.a,e.b))
this.a.fR(A.ayG(x,g),f)}}
A.yP.prototype={
gbH(){return[this.a]}}
A.akP.prototype={}
A.a0c.prototype={}
A.b_f.prototype={
K1(d,e){var x=d.a,w=e*0.017453292519943295,v=Math.sin(w),u=d.b,t=Math.cos(w)
return new B.m((x-(Math.abs(x*Math.cos(w))+Math.abs(u*Math.sin(w))))/2,(u-(Math.abs(x*v)+Math.abs(u*t)))/2)},
aVN(d,e){var x,w,v,u,t
if(d==null)return null
x=d.a
w=e/2
if(x.a>w||x.b>w)x=new B.aT(w,w)
v=d.b
if(v.a>w||v.b>w)v=new B.aT(w,w)
u=d.c
if(u.a>w||u.b>w)u=new B.aT(w,w)
t=d.d
return new B.d2(x,v,u,t.a>w||t.b>w?new B.aT(w,w):t)},
aVO(d,e){var x,w
if(d==null)return D.a_m
x=d.b
w=e/2
return d.aP4(x>w?w:x)},
Oc(d,e){var x,w=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
x=e/w
if(w<=2)return x
return this.aYO(x)},
aYO(d){if(d<1)return this.aHY(d)
return this.a7p(d)},
aHY(d){var x,w,v,u,t,s,r
if(d<0.000001)return d
x=C.d.j(d)
w=x.length
v=w-2
for(u=0,t=2;t<=w;++t){if(x[t]!=="0")break;++u}s=v-u
if(s>2)v-=s-2
r=Math.pow(10,v)
return this.a7p(d*r)/r},
a7p(d){var x,w=C.e.j(C.d.a4(d)).length-1
d/=Math.pow(10,w)
x=d>=10?C.d.b0(d)/10:d
if(x>=7.6)return 10*C.d.a4(Math.pow(10,w))
else if(x>=2.6)return 5*C.d.a4(Math.pow(10,w))
else if(x>=1.6)return 2*C.d.a4(Math.pow(10,w))
else return C.d.a4(Math.pow(10,w))},
aiA(d){if(d>=1)return 1
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
Zq(d,e){var x,w,v=d.P(y.f0)
if(v==null)v=C.iI
x=e.a?v.w.c2(e):e
w=B.bP(d,C.v5)
w=w==null?null:w.ay
return w===!0?x.c2(C.lY):x},
ais(d,e,f,g){var x=C.d.aj(g-d,f)
if(Math.abs(e-d)<=x)return d
if(x===0)return d
return d+x}}
A.Pv.prototype={
a3p(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st1(d){var x=this,w=x.ae
if(w===d)return
x.ae=d
if(x.a3p(w)||x.a3p(d))x.a7()
else{x.cP=x.D=null
x.bd()}},
shC(d){var x=this
if(x.aH.k(0,d))return
x.aH=d
x.G=x.cP=x.D=null
x.bd()},
scC(d){var x=this
if(x.dn==d)return
x.dn=d
x.G=x.cP=x.D=null
x.bd()},
dz(d){var x,w=this.D$
if(w!=null){x=w.ap(C.ae,C.iw,w.gdh())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xD(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xD(x)}}else return new B.G(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var x=this.D$
return x==null?null:x.fJ(C.iw,e)},
cu(){var x,w,v=this,u=v.D$
if(u!=null){u.dG(C.iw,!0)
switch(v.ae.a){case 6:u=y.k
x=u.a(B.I.prototype.ga6.call(v))
w=new B.as(0,x.b,0,x.d).xD(v.D$.gC(0))
v.fy=u.a(B.I.prototype.ga6.call(v)).c1(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.k.a(B.I.prototype.ga6.call(v)).xD(v.D$.gC(0))
break}v.cP=v.D=null}else{u=y.k.a(B.I.prototype.ga6.call(v))
v.fy=new B.G(B.L(0,u.a,u.b),B.L(0,u.c,u.d))}},
Tn(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.cP!=null)return
x=n.D$
if(x==null){n.D=!1
x=new B.c1(new Float64Array(16))
x.fY()
n.cP=x}else{w=n.G
if(w==null)w=n.G=n.aH
v=x.gC(0)
u=B.buF(n.ae,v,n.gC(0))
x=u.b
t=u.a
s=v.a
r=v.b
q=w.yu(t,new B.E(0,0,0+s,0+r))
p=n.gC(0)
o=w.yu(x,new B.E(0,0,0+p.a,0+p.b))
p=q.a
n.D=q.c-p<s||q.d-q.b<r
r=B.ps(o.a,o.b,0)
r.qO(x.a/t.a,x.b/t.b,1,1)
r.fW(-p,-q.b,0,1)
n.cP=r}},
a6l(d,e){var x,w,v,u,t=this,s=t.cP
s.toString
x=B.z3(s)
if(x==null){s=t.cx
s===$&&B.a()
w=t.cP
w.toString
v=B.hZ.prototype.gi3.call(t)
u=t.ch.a
return d.z2(s,e,w,v,u instanceof B.pU?u:null)}else t.kq(d,e.ac(0,x))
return null},
aM(d,e){var x,w,v,u,t=this
if(t.D$==null||t.gC(0).gZ(0)||t.D$.gC(0).gZ(0))return
t.Tn()
x=t.D
x.toString
if(x&&t.eW!==C.r){x=t.cx
x===$&&B.a()
w=t.gC(0)
v=t.ch
u=v.a
u=u instanceof B.ue?u:null
v.sbh(0,d.o0(x,e,new B.E(0,0,0+w.a,0+w.b),t.gaFF(),t.eW,u))}else t.ch.sbh(0,t.a6l(d,e))},
e8(d,e){var x,w=this
if(!w.gC(0).gZ(0)){x=w.D$
x=x==null?null:x.gC(0).gZ(0)
x=x===!0}else x=!0
if(x)return!1
w.Tn()
return d.JL(new A.aSn(w),e,w.cP)},
tp(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eT(d,e){var x
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OF()
else{this.Tn()
x=this.cP
x.toString
e.fU(0,x)}}}
A.a3M.prototype={
bl(d){var x=new A.Pv(this.e,this.f,B.e_(d),C.r,null,new B.bn(),B.aG(y.v))
x.bj()
x.sc8(null)
return x},
bx(d,e){e.st1(this.e)
e.shC(this.f)
e.scC(B.e_(d))
if(C.r!==e.eW){e.eW=C.r
e.bd()
e.ct()}}}
var z=a.updateTypes(["N(pV)","C(eu)","~(w,fv)","N(e2,w)","bH(N,t9)","pd(N)","w(pT,pT)","C(fv)","U<nM>(cn<nM>)","He(A,bQ)","IC(nN)","Hy(nM)","v8(@)","e2(N)","N(N,pV)","aq(N,t9)","w0(@)","BY(@)","N(v8)","N(w0)","~(hb,K1?)","xe(@)","N(i8)","pV(@)","~(w,i8)","~(@)","jC(nu)","c(nu)","jC(bB<w,N>)","jC(N)","nu(jC)","~(hb,Ny?)","e2(e2)","ut(dQ<ut>)","yL(@)","Dm(dQ<aCF>)","ta(w)","uu(eu,N,e2,w)","rb(mI)","C(e2)","w(v2,v2)","N(fv)","my(FX<my>)","pU?(rq,m)","y0(fe<A?>)","w(w,w,N)","i8(i8,i8,N)","mk(mk,mk,N)","Ce?(fv,w,i8,w)","F(fv)","c(N,t9)","eu(eu,eu,N)","C(N)","mE(mE,mE,N)","n0(n0,n0,N)","ky(ky,ky,N)","kZ(kZ,kZ,N)","h(ky)","h(kZ)","e2(e2,e2,N)","ml(ml,ml,N)","uu(eu,N,e2,w{size:N?})","C(eu,e2)","N(m,m)","u<ta>(e2,u<w>)","U<nN>(cn<nN>)","u<rb>(u<mI>)","F(mI)","fv(fv,fv,N)"])
A.aCC.prototype={
$1(d){var x=B.el(y.f.a(d),y.N,y.z),w=x.h(0,"month")
return new A.pV(J.ak(w==null?"":w),A.oE(x.h(0,"revenue_net")),A.oE(x.h(0,"expense_net")),A.oE(x.h(0,"result_net")))},
$S:z+23}
A.aCD.prototype={
$1(d){var x,w,v,u=B.el(y.f.a(d),y.N,y.z),t=B.ao(u.h(0,"machine_id")),s=u.h(0,"label")
s=J.ak(s==null?"unbekannt":s)
x=B.ao(u.h(0,"code"))
w=A.oE(u.h(0,"gross"))
v=B.bE(u.h(0,"purchases_count"))
v=v==null?null:C.d.a4(v)
if(v==null)v=0
return new A.v8(t,s,x,w,v,A.oE(u.h(0,"avg_basket")))},
$S:z+12}
A.aCE.prototype={
$1(d){var x,w=B.el(y.f.a(d),y.N,y.z),v=B.ao(w.h(0,"product_id")),u=w.h(0,"name")
u=J.ak(u==null?"unbekannt":u)
x=B.bE(w.h(0,"quantity"))
x=x==null?null:C.d.a4(x)
if(x==null)x=0
return new A.w0(v,u,x,A.oE(w.h(0,"gross")))},
$S:z+16}
A.aCS.prototype={
$1(d){var x,w,v,u
y.c.a(d)
x=J.Y(d)
w=x.h(d,"code")
w=J.ak(w==null?"":w)
v=x.h(d,"name")
v=J.ak(v==null?"":v)
u=x.h(d,"direction")
return new A.BY(w,v,J.ak(u==null?"expense":u),A.tO(x.h(d,"net")),A.tO(x.h(d,"tax")),A.tO(x.h(d,"gross")))},
$S:z+17}
A.bo0.prototype={
$1(d){return new A.ut(d.aC($.ce(),y.A))},
$S:z+33}
A.bo1.prototype={
$1(d){return new A.Dm(d.aC($.bJO(),y.D))},
$S:z+35}
A.bpO.prototype={
$1(d){return E.brP()},
$S:z+42}
A.bo2.prototype={
$1(d){var x=d.aC($.wX(),y.P)
return d.aC($.atF(),y.a).FE(x)},
$S:z+65}
A.bo_.prototype={
$1(d){var x=d.aC($.wX(),y.P)
return d.aC($.atF(),y.a).FA(x)},
$S:z+8}
A.aCB.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atF(),y.a).px(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCA.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atF(),y.a).L7(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCQ.prototype={
$0(){var x=0,w=B.r(y.H),v,u=this,t,s
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:t=u.a
s=$.bqC()
if(t.e==null)B.V(B.Z('Cannot use "ref" after the widget was disposed.'))
t.gcv().cr(s)
v=null
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCJ.prototype={
$0(){return this.a.J2(this.b,this.c)},
$S:0}
A.aCK.prototype={
$0(){return this.a.B_(this.b,this.c)},
$S:0}
A.aCL.prototype={
$0(){return B.nS(this.a,"/finance/approvals",y.cK)},
$S:0}
A.aCM.prototype={
$0(){var x=this
return x.a.B0(x.b,x.c,x.d)},
$S:0}
A.aCP.prototype={
$0(){return D.aoJ},
$S:133}
A.aCO.prototype={
$2(d,e){return new A.He(B.i(d),null)},
$S:z+9}
A.aCN.prototype={
$1(d){return new A.IC(d,null)},
$S:z+10}
A.aCI.prototype={
$1(d){var x=null,w=this.a,v=$.eo()
w=B.l("Die Finanzauswertung f\xfcr "+v.aw(w.a)+" \u2013 "+v.aw(w.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",x,x,x,x,x,x,x)
v=this.b
return B.nn(B.b([B.dY(C.dg,x,x,new A.aCG(v),x,x),B.e1(F.uL,new A.aCH(v),B.ei(C.n,C.h,x,x,x,x,x))],y.p),w,F.uM)},
$S:60}
A.aCG.prototype={
$0(){B.bp(this.a,!1).dr(!1)
return null},
$S:0}
A.aCH.prototype={
$0(){B.bp(this.a,!1).dr(!0)
return null},
$S:0}
A.bdF.prototype={
$0(){var x=this.a.aP(0,$.wX().gi2(),y.V),w=E.brP()
x.Ao(0,w)
return w},
$S:0}
A.bdG.prototype={
$0(){var x=this.a.aP(0,$.wX().gi2(),y.V),w=new B.bg(Date.now(),0,!1),v=new E.my(B.bM(B.aY(w),1,1,0,0,0,0),w)
x.Ao(0,v)
return v},
$S:0}
A.bdH.prototype={
$0(){return this.a.Ir(this.b,this.c)},
$S:0}
A.bdE.prototype={
$2(d,e){return new B.ol(B.T(d).aOq(B.T(d).ax.aPj(C.h,C.n)),e,null)},
$S:984}
A.bj9.prototype={
$2(d,e){var x=null,w=e.b<380?1:2,v=this.a.c,u=$.e9(),t=A.Ni(!1,C.xv,"Umsatz 7 %",u.aw(v.a),x),s=A.Ni(!1,C.xv,"Umsatz 19 %",u.aw(v.b),x),r=A.Ni(!0,D.a8y,"Umsatz netto",u.aw(v.c),x),q=A.Ni(!1,D.a8x,"Aufwand",u.aw(v.d),x),p=v.e,o=u.aw(p)
return E.bs3(1.7,B.b([t,s,r,q,A.Ni(!0,C.nr,"Ergebnis",o,p<0?C.ak:C.aP),A.Ni(!1,C.iX,"USt-Saldo",u.aw(v.f-v.r),x)],y.p),w,12,12,F.u1,!0)},
$S:196}
A.aHE.prototype={
$0(){return D.aoH},
$S:133}
A.aHD.prototype={
$2(d,e){var x=null
return B.bL(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),x,x,x,B.D(C.h,13,C.k),x,x,x),C.fz,x,C.G,x,3)},
$S:310}
A.aHC.prototype={
$1(d){return new A.Hy(d,null)},
$S:z+11}
A.bbf.prototype={
$2(d,a0){var x,w,v,u,t,s=this,r=null,q=a0.b<480,p=q?2:3,o=q?1.05:1.1,n=s.a,m=n.c,l=m.a,k=$.e9(),j=k.aw(l.c),i=m.w,h=m.d,g=B.ab(h).i("a9<1,N>"),f=g.i("av.E"),e=B.P(new B.a9(h,new A.bb5(),g),f)
j=A.tv(i.f,i.e,!1,"Umsatz (netto)",!1,r,r,r,r,e,j)
e=k.aw(s.b)
x=B.P(new B.a9(h,new A.bb6(),g),f)
e=A.tv(r,r,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,x,e)
l=k.aw(l.e)
x=B.P(new B.a9(h,new A.bb7(),g),f)
l=A.tv(i.w,i.r,!0,"Ergebnis (netto)",!1,r,r,r,r,x,l)
x=C.d.am(i.b,1)
w=B.P(new B.a9(h,new A.bb8(),g),f)
x=A.tv(r,r,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,w,x+" %")
w=C.d.am(i.a,1)
v=B.P(new B.a9(h,new A.bb9(),g),f)
w=A.tv(r,r,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,v,w+" %")
v=C.d.am(s.c,1)
u=B.P(new B.a9(h,new A.bba(),g),f)
v=A.tv(r,r,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,u,v+" %")
u=C.d.am(i.c,1)
t=B.P(new B.a9(h,new A.bbb(),g),f)
u=A.tv(r,r,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",r,r,r,t,u+" %")
i=k.aw(i.d)
t=B.P(new B.a9(h,new A.bbc(),g),f)
i=A.tv(r,r,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",r,r,r,t,i)
m=k.aw(m.r.d)
n=B.P(new B.a9(h,new A.bbd(n),g),f)
n=A.tv(r,r,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,n,m)
m=s.d
k=C.d.am(m,1)
m=B.P(new B.a9(h,new A.bbe(m),g),f)
return E.bs3(o,B.b([j,e,l,x,w,v,u,i,n,A.tv(r,r,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,m,k)],y.p),p,12,12,F.u1,!0)},
$S:196}
A.bb5.prototype={
$1(d){return d.b},
$S:z+0}
A.bb6.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bb7.prototype={
$1(d){return d.d},
$S:z+0}
A.bb8.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.bb9.prototype={
$1(d){var x=d.b
return x>0?(x-d.c)/x*100:0},
$S:z+0}
A.bba.prototype={
$1(d){var x=d.b
return x>0?d.c/x*100:0},
$S:z+0}
A.bbb.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.bbc.prototype={
$1(d){return d.d},
$S:z+0}
A.bbd.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbe.prototype={
$1(d){return this.a},
$S:z+0}
A.bbg.prototype={
$0(){return A.buC(this.b,1.45,new A.ST(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bbh.prototype={
$0(){return A.buC(this.b,1.6,new A.T3(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bna.prototype={
$1(d){var x=this,w=null,v=B.b0(16),u=y.p,t=B.b([B.au(B.b([B.aQ(B.l(x.a,w,w,w,B.ca(C.h,18,C.q),w,w,w),1),B.ej(w,w,D.aam,w,w,new A.bn9(d),w,w,w,"Schlie\xdfen",w)],u),C.o,C.f,C.i,0,w,w)],u)
C.b.M(t,B.b([B.l(x.b,w,w,w,B.D(C.v,12,C.aN),w,w,w),C.a0],u))
t.push(C.x)
t.push(B.cl(new B.mi(x.c,x.d,w),w,17976931348623157e292))
return B.a37(w,C.l,new B.ah(C.ao,B.ai(t,C.E,C.f,C.P),w),w,w,w,C.hD,C.uw,w,new B.dg(v,C.A),w)},
$S:985}
A.bn9.prototype={
$0(){return B.bp(this.a,!1).fh()},
$S:0}
A.bbi.prototype={
$0(){var x=this.a,w=B.bj(x.c,"\xad",""),v=B.b([x.d],y.s),u=x.e
if(u!=null)v.push(u)
A.buC(this.b,2.4,new A.X5(x.w,x.y,x.z,null),C.b.co(v," \xb7 "),w)
return null},
$S:0}
A.biw.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bix.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.biy.prototype={
$1(d){return A.aHT(null,1.4,null,C.ak,0.35,D.aep,D.De,null,!1,!1,!1,!1,D.Ex,!1,10,D.XW,!0,C.l8,B.b([new A.eu(0,d),new A.eu(this.a,d)],y.U))},
$S:z+13}
A.b2x.prototype={
$2(d,e){var x=e.b,w=e.c,v=x>w?x:w
return v>d?v:d},
$S:z+14}
A.b2z.prototype={
$2(d,e){var x=null
return B.l(this.a.aJ9(d),x,x,x,B.D(C.v,10,C.O),x,x,x)},
$S:z+15}
A.b2A.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=this.a.length)return C.zx
return new B.ah(C.kE,B.l(C.c.cT(this.a[w].a,5),x,x,x,B.D(C.v,9,C.O),x,x,x),x)},
$S:z+4}
A.b2y.prototype={
$1(d){return D.a7u},
$S:z+5}
A.b3k.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3l.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3m.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b3n.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=3)return C.zx
return new B.ah(C.kE,B.l(this.a[w],x,x,x,B.D(C.h,12,C.q),x,x,x),x)},
$S:z+4}
A.bbM.prototype={
$1(d){return d.d},
$S:z+18}
A.bbN.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bkq.prototype={
$1(d){return d.d},
$S:z+19}
A.bkr.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b15.prototype={
$0(){var x=this.b.a,w=x.d,v=x.f,u=this.a.cy
u.a8(0)
u.m(0,w,B.b([v],y.t))},
$S:0}
A.b16.prototype={
$1(d){return new A.xe(y.B.a(d),this.a.a.r)},
$S:z+21}
A.avx.prototype={
$1(d){return d.e},
$S:z+22}
A.avy.prototype={
$2(d,e){return d+e},
$S:45}
A.avA.prototype={
$1(d){return d.c.length!==0},
$S:z+7}
A.avC.prototype={
$2(d,e){var x=this,w=e.e,v=x.d,u=x.a
x.b.push(x.c-v.gdm(0)/2+u.a+w/2)
u.a=u.a+(w+v.d)},
$S:z+24}
A.avD.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=w.a,s=t.w
s===$&&B.a()
x=v.a
x.eM(u,s)
t=t.x
t===$&&B.a()
x.eM(u,t)
v.acW(w.d,w.e)},
$S:0}
A.avg.prototype={
$1(d){return 0},
$S:986}
A.avf.prototype={
$2(d,e){return B.fG(C.c4,this.a.akw(e),C.t,C.bA,null)},
$S:987}
A.aWJ.prototype={
$1(d){return d.a},
$S:z+26}
A.aWK.prototype={
$1(d){return d.b},
$S:z+27}
A.aWL.prototype={
$1(d){return new A.jC(this.a.ch[d.a].a,d.b)},
$S:z+28}
A.aWM.prototype={
$1(d){var x=this,w=x.c,v=x.b-w,u=v>0?(d-w)/v:0
w=x.a.c
if(!(w===D.mf||w===D.dx))u=1-u
return new A.jC(d,u*x.d)},
$S:z+29}
A.aWN.prototype={
$1(d){var x,w,v,u,t=this,s=t.a,r=s.gov(),q=d.a
s.gov()
s=$.lg()
x=q<0
w=x?Math.abs(q):q
if(w>=1e9){v=C.d.am(w/1e9,1)
u="B"}else if(w>=1e6){v=C.d.am(w/1e6,1)
u="M"}else if(w>=1000){v=C.d.am(w/1000,1)
u="K"}else{v=C.d.am(w,s.aiA(Math.abs(t.b-t.c)))
u=""}if(C.c.hG(v,".0"))v=C.c.a1(v,0,v.length-2)
if(x)v="-"+v
if(v==="-0")v="0"
return new A.nu(d,r.c.b.$2(q,new A.t9(v+u,t.e)))},
$S:z+30}
A.aS2.prototype={
$1(d){this.a.l5(new A.a3W(d))},
$S:181}
A.aS3.prototype={
$1(d){this.a.l5(new A.a3X(d))},
$S:40}
A.aS4.prototype={
$1(d){this.a.l5(new A.a3Y(d))},
$S:28}
A.aS5.prototype={
$0(){this.a.l5(D.a0V)},
$S:0}
A.aS6.prototype={
$1(d){this.a.l5(new A.M9())},
$S:44}
A.aS7.prototype={
$1(d){this.a.l5(new A.a40(d))},
$S:43}
A.aS8.prototype={
$0(){this.a.l5(D.a0W)},
$S:0}
A.aS9.prototype={
$1(d){this.a.l5(new A.Mc(d))},
$S:103}
A.aSa.prototype={
$1(d){this.a.l5(new A.a3V(d))},
$S:203}
A.aSb.prototype={
$1(d){this.a.l5(new A.a3U(d))},
$S:183}
A.aSc.prototype={
$1(d){return this.a.l5(new A.M7(d))},
$S:184}
A.aSd.prototype={
$1(d){return this.a.l5(new A.a3Z(d))},
$S:59}
A.aSe.prototype={
$1(d){return this.a.l5(new A.Ma(d))},
$S:50}
A.bbt.prototype={
$1(d){var x=this.a.db.h(0,C.b.io(this.b.ch,d))
return d.aP_(x==null?B.b([],y.t):x)},
$S:z+32}
A.bbr.prototype={
$0(){var x=this.a
C.b.a8(x.cy)
x.db.a8(0)},
$S:0}
A.bbs.prototype={
$0(){var x,w,v,u,t,s,r=this.b.a
r.toString
x=B.P(r,y.dw)
C.b.h_(x,new A.bbq())
w=this.a
v=w.db
v.a8(0)
for(u=y.t,t=0;t<r.length;++t){s=r[t]
v.m(0,s.d,B.b([s.e],u))}r=w.cy
C.b.a8(r)
r.push(new A.FM(x))},
$S:0}
A.bbq.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+6}
A.bbu.prototype={
$1(d){return new A.yL(y.hf.a(d),this.a.a.r)},
$S:z+34}
A.aHU.prototype={
$1(d){return!d.k(0,D.fC)},
$S:z+1}
A.bnQ.prototype={
$1(d){var x,w={},v=this.a,u=v.w,t=u==null?null:C.b.ga0(u.a)
if(t==null)t=v.r
u=v.CW.a
x=A.bz8(u?A.buq(v.a[d],0,v):t,null,null,4)
w.a=10
if(u)w.a=7.2
return new A.ta(x,new A.y2(!0,A.bva(),new A.bnP(w)))},
$S:z+36}
A.bnP.prototype={
$4(d,e,f,g){var x=this.a.a
return A.bNG(A.buq(d,e,f),x,A.bWi(d,e,f))},
$S:z+37}
A.bnN.prototype={
$1(d){var x,w=null,v=d.c,u=v.w
u=u==null?w:C.b.ga0(u.a)
v=u==null?v.r:u
x=B.iT(w,w,v==null?D.dc:v,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.rb(C.d.j(d.b),x)},
$S:z+38}
A.aHW.prototype={
$1(d){return d.a.length!==0},
$S:z+39}
A.aHX.prototype={
$1(d){return!d.k(0,D.fC)},
$S:z+1}
A.aI0.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+40}
A.aHZ.prototype={
$0(){var x,w=this.c,v=this.a,u=v.z
u===$&&B.a()
x=this.b.a
x.eM(w,u)
v=v.Q
v===$&&B.a()
x.eM(w,v)},
$S:0}
A.aI_.prototype={
$0(){this.a.acW(this.b,this.c)},
$S:0}
A.aI1.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+6}
A.avq.prototype={
$1(d){return d.gdm(0)},
$S:z+41}
A.avr.prototype={
$2(d,e){return d+e},
$S:45}
A.avu.prototype={
$0(){var x={},w=this.b.ch,v=w.length
x.a=0
new B.iJ(w,B.ab(w).i("iJ<1>")).aq(0,new A.avv(x,this.a/(v+1),this.c))},
$S:0}
A.avv.prototype={
$2(d,e){var x=this.a,w=x.a+this.b
x.a=w
w=x.a=w+e.gdm(0)/2
this.c[d]=w
x.a=w+e.gdm(0)/2},
$S:z+2}
A.avs.prototype={
$2(d,e){var x=this.a,w=x.a=x.a+e.gdm(0)/2,v=d!==0?x.a=w+this.b:w
this.c[d]=v
x.a=v+e.gdm(0)/2},
$S:z+2}
A.avt.prototype={
$2(d,e){var x=this.a,w=this.b,v=x.a+w
x.a=v
v=x.a=v+e.gdm(0)/2
this.c[d]=v
v+=e.gdm(0)/2
x.a=v
x.a=v+w},
$S:z+2}
A.aF5.prototype={
$2(d,e){var x=this.b.a.length
C.b.E(this.a.a,1/(x-1)*d)},
$S:988}
A.ayH.prototype={
$1(d){return d},
$S:989}
A.aSn.prototype={
$2(d,e){return this.a.Al(d,e)},
$S:21};(function aliases(){var x=A.JV.prototype
x.a_q=x.i4
x.akP=x.aQH
x.akQ=x.acP
x=A.Sw.prototype
x.ans=x.l
x=A.K4.prototype
x.a_r=x.i4
x=A.Fk.prototype
x.a0a=x.Ym})();(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff,u=a._static_2,t=a._instance_1u
x(A,"bZS","bND",44)
w(A.Sy.prototype,"garf","arg",20)
v(A,"bYJ",3,null,["$3"],["bKY"],68,0)
v(A,"bYK",3,null,["$3"],["bKZ"],46,0)
v(A,"bYL",3,null,["$3"],["bL_"],47,0)
v(A,"bYN",4,null,["$4"],["bZv"],48,0)
x(A,"bYM","bZu",49)
u(A,"buG","bZw",50)
v(A,"bYE",3,null,["$3"],["bNH"],51,0)
x(A,"Z7","c0T",52)
x(A,"at1","bZz",5)
v(A,"bYG",3,null,["$3"],["bOs"],53,0)
v(A,"bYI",3,null,["$3"],["bTB"],54,0)
v(A,"bYF",3,null,["$3"],["bOr"],55,0)
v(A,"bYH",3,null,["$3"],["bTA"],56,0)
x(A,"c7Z","bOq",57)
x(A,"c8_","bTz",58)
t(A.WV.prototype,"ga3L","awG",25)
w(A.UM.prototype,"gaxY","axZ",31)
v(A,"c_M",3,null,["$3"],["bOX"],59,0)
v(A,"c_L",3,null,["$3"],["bL1"],60,0)
x(A,"c_P","c0U",1)
v(A,"bFD",4,null,["$5$size","$4"],["bE4",function(d,e,f,g){return A.bE4(d,e,f,g,null)}],61,0)
u(A,"bva","c0S",62)
u(A,"bFE","bYr",63)
u(A,"bFH","bZC",64)
u(A,"bFG","bZy",3)
u(A,"bFF","bZx",3)
x(A,"c_O","bFg",66)
x(A,"c_N","bFf",67)
w(A.Pv.prototype,"gaFF","a6l",43)
v(A,"Zc",3,null,["$3"],["c_K"],45,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.a_,[A.a5s,A.aeZ,A.ajZ,A.I6,A.IC,A.aeX,A.He,A.Hy,A.ajj,A.aku,A.TC,A.X5,A.ST,A.T3,A.akY,A.ahp,A.Iq,A.aqu,A.U0,A.JW,A.A4])
v(B.A,[A.ut,A.Dm,A.b8,A.afY,A.afO,A.afQ,A.afR,A.afJ,A.aj3,A.afU,A.afS,A.avM,A.aqy,A.avz,A.afP,A.K4,A.a4v,A.t9,A.aoZ,A.aoY,A.afI,A.aj2,A.eu,A.aj_,A.aj1,A.and,A.ajQ,A.arb,A.aj0,A.aiJ,A.aiZ,A.ave,A.bbo,A.avh,A.afF,A.nu,A.aiW,A.aiX,A.vk,A.hb,A.akC,A.akF,A.afL,A.afZ,A.afM,A.aiY,A.akI,A.akG,A.aqx,A.aoX,A.aHV,A.akE,A.v2,A.a02,A.akP,A.a0c,A.b_f])
v(B.ur,[A.pV,A.v8,A.w0,A.ay5,A.azc,A.nM,A.BY,A.nN])
v(B.nz,[A.aCC,A.aCD,A.aCE,A.aCS,A.bo0,A.bo1,A.bpO,A.bo2,A.bo_,A.aCN,A.aCI,A.aHC,A.bb5,A.bb6,A.bb7,A.bb8,A.bb9,A.bba,A.bbb,A.bbc,A.bbd,A.bbe,A.bna,A.biy,A.b2y,A.b3k,A.b3l,A.bbM,A.bkq,A.b16,A.avx,A.avA,A.avg,A.aWJ,A.aWK,A.aWL,A.aWM,A.aWN,A.aS2,A.aS3,A.aS4,A.aS6,A.aS7,A.aS9,A.aSa,A.aSb,A.aSc,A.aSd,A.aSe,A.bbt,A.bbu,A.aHU,A.bnQ,A.bnP,A.bnN,A.aHW,A.aHX,A.avq,A.ayH])
u(A.y0,B.fq)
v(B.xt,[A.aCB,A.aCA,A.aCQ,A.aCJ,A.aCK,A.aCL,A.aCM,A.aCP,A.aCG,A.aCH,A.bdF,A.bdG,A.bdH,A.aHE,A.bbg,A.bbh,A.bn9,A.bbi,A.b15,A.avD,A.aS5,A.aS8,A.bbr,A.bbs,A.aHZ,A.aI_,A.avu])
v(B.xA,[A.y1,A.am8,A.a5t])
v(B.xu,[A.aCO,A.bdE,A.bj9,A.aHD,A.bbf,A.biw,A.bix,A.b2x,A.b2z,A.b2A,A.b3m,A.b3n,A.bbN,A.bkr,A.avy,A.avC,A.avf,A.bbq,A.aI0,A.aI1,A.avr,A.avv,A.avs,A.avt,A.aF5,A.aSn])
v(B.MQ,[A.K0,A.Nw])
v(B.x6,[A.Sy,A.UM])
u(A.a_F,A.afY)
u(A.afE,A.a_F)
u(A.a_p,A.afE)
v(A.a_p,[A.afN,A.akD])
u(A.nv,A.afN)
v(B.U2,[A.avo,A.acq,A.Cd,A.aC2,A.aHF,A.MD])
u(A.fv,A.afO)
u(A.i8,A.afQ)
u(A.mk,A.afR)
u(A.a_w,A.afJ)
u(A.Md,A.aj3)
v(A.Md,[A.afT,A.akH])
u(A.a_B,A.afT)
u(A.a_C,A.afU)
u(A.Ce,A.afS)
v(A.avM,[A.K1,A.Ny])
u(A.acs,A.aqy)
u(A.afV,A.acs)
u(A.a_D,A.afV)
v(B.b6,[A.xe,A.yL])
u(A.u6,A.afP)
u(A.JV,A.K4)
v(A.JV,[A.avB,A.aHY])
v(B.Ns,[A.a_z,A.a5G])
v(B.J,[A.Fk,A.afG])
v(A.Fk,[A.a9z,A.a9M])
u(A.pK,A.aoZ)
u(A.aaY,A.aoY)
u(A.oQ,A.afI)
u(A.uv,A.aj2)
u(A.y3,A.aj_)
u(A.pd,A.aj1)
u(A.Pb,A.and)
u(A.mE,A.ajQ)
u(A.n0,A.arb)
v(A.pd,[A.ajP,A.ara])
u(A.ky,A.ajP)
u(A.kZ,A.ara)
u(A.a3T,A.aj0)
v(A.a3T,[A.ajO,A.ar9])
u(A.a4G,A.ajO)
u(A.acQ,A.ar9)
u(A.LW,A.aiJ)
u(A.uu,A.aiZ)
u(A.M6,A.uu)
u(A.QC,B.O)
u(A.WV,B.a0)
u(A.aaZ,B.fV)
u(A.afH,A.afG)
u(A.Sw,A.afH)
u(A.a_q,A.Sw)
u(A.jC,A.afF)
u(A.a3Q,A.aiW)
u(A.a3S,A.aiX)
v(A.hb,[A.a3W,A.a3X,A.a3Y,A.M8,A.M9,A.a40,A.Mb,A.Mc,A.a3V,A.a3U,A.M7,A.a3Z,A.a4_,A.Ma])
u(A.po,A.akD)
u(A.e2,A.akC)
u(A.Nx,A.akF)
u(A.a_y,A.afL)
u(A.ml,A.afZ)
u(A.K_,A.afM)
u(A.y2,A.aiY)
u(A.E1,A.akH)
u(A.a5H,A.akI)
u(A.akB,A.eu)
u(A.mI,A.akB)
u(A.pT,A.mI)
u(A.rb,A.akG)
u(A.ta,A.aqx)
u(A.FM,A.aoX)
u(A.yM,A.akE)
u(A.yP,A.akP)
u(A.Pv,B.PI)
u(A.a3M,B.bH)
x(A.afJ,A.b8)
x(A.afN,A.b8)
x(A.afO,A.b8)
x(A.afQ,A.b8)
x(A.afR,A.b8)
x(A.afS,A.b8)
x(A.afT,A.b8)
x(A.afU,A.b8)
x(A.afV,A.b8)
x(A.afP,A.b8)
x(A.afE,A.b8)
x(A.afI,A.b8)
x(A.aiJ,A.b8)
x(A.aiZ,A.b8)
x(A.aj_,A.b8)
x(A.aj1,A.b8)
x(A.aj2,A.b8)
x(A.ajP,A.b8)
x(A.ajO,A.b8)
x(A.ajQ,A.b8)
x(A.and,A.b8)
x(A.aoY,A.b8)
x(A.aoZ,A.b8)
x(A.aqy,A.b8)
x(A.ara,A.b8)
x(A.ar9,A.b8)
x(A.arb,A.b8)
x(A.afF,A.b8)
w(A.afG,B.aB)
x(A.afH,B.dX)
w(A.Sw,B.a2R)
x(A.afY,A.b8)
x(A.aiW,A.b8)
x(A.aiX,A.b8)
x(A.aj3,A.b8)
x(A.afL,A.b8)
x(A.afM,A.b8)
x(A.afZ,A.b8)
x(A.aiY,A.b8)
x(A.aj0,A.b8)
x(A.akB,A.b8)
x(A.akC,A.b8)
x(A.akD,A.b8)
x(A.akF,A.b8)
x(A.akG,A.b8)
x(A.akH,A.b8)
x(A.akI,A.b8)
x(A.aoX,A.b8)
x(A.aqx,A.b8)
x(A.akE,A.b8)
x(A.akP,A.b8)})()
B.bkD(b.typeUniverse,JSON.parse('{"a5s":{"a_":[],"c":[]},"Dm":{"aCF":[]},"y0":{"fq":["bf<~>"],"fq.T":"bf<~>"},"IC":{"a_":[],"c":[]},"He":{"a_":[],"c":[]},"y1":{"bq":[],"O":[],"c":[]},"aeZ":{"a_":[],"c":[]},"ajZ":{"a_":[],"c":[]},"am8":{"bq":[],"O":[],"c":[]},"I6":{"a_":[],"c":[]},"aeX":{"a_":[],"c":[]},"Hy":{"a_":[],"c":[]},"a5t":{"bq":[],"O":[],"c":[]},"ajj":{"a_":[],"c":[]},"aku":{"a_":[],"c":[]},"TC":{"a_":[],"c":[]},"X5":{"a_":[],"c":[]},"ST":{"a_":[],"c":[]},"T3":{"a_":[],"c":[]},"akY":{"a_":[],"c":[]},"ahp":{"a_":[],"c":[]},"Iq":{"a_":[],"c":[]},"aqu":{"a_":[],"c":[]},"U0":{"a_":[],"c":[]},"K0":{"O":[],"c":[]},"Sy":{"a0":["K0"]},"nv":{"b8":[]},"fv":{"b8":[]},"i8":{"b8":[]},"mk":{"b8":[]},"Ce":{"b8":[]},"xe":{"b6":["nv"],"b_":["nv"],"b_.T":"nv","b6.T":"nv"},"a_w":{"b8":[]},"a_B":{"b8":[]},"a_C":{"b8":[]},"a_D":{"b8":[]},"u6":{"b8":[]},"a_z":{"aU":[],"c":[]},"a9z":{"J":[],"I":[],"je":[],"aP":[]},"pd":{"b8":[]},"mE":{"b8":[]},"n0":{"b8":[]},"ky":{"b8":[]},"kZ":{"b8":[]},"uu":{"b8":[]},"a_p":{"b8":[]},"pK":{"b8":[]},"aaY":{"b8":[]},"oQ":{"b8":[]},"uv":{"b8":[]},"y3":{"b8":[]},"acs":{"b8":[]},"Pb":{"b8":[]},"a4G":{"b8":[]},"acQ":{"b8":[]},"LW":{"b8":[]},"M6":{"b8":[]},"JW":{"a_":[],"c":[]},"QC":{"O":[],"c":[]},"WV":{"a0":["QC"]},"jC":{"b8":[]},"aaZ":{"fV":[],"aU":[],"c":[]},"a_q":{"dX":["J","hc"],"J":[],"aB":["J","hc"],"I":[],"aP":[],"aB.1":"hc","dX.1":"hc","aB.0":"J"},"A4":{"a_":[],"c":[]},"a_F":{"b8":[]},"a3Q":{"b8":[]},"Md":{"b8":[]},"a3S":{"b8":[]},"a3W":{"hb":[]},"a3X":{"hb":[]},"a3Y":{"hb":[]},"M8":{"hb":[]},"M9":{"hb":[]},"a40":{"hb":[]},"Mb":{"hb":[]},"Mc":{"hb":[]},"a3V":{"hb":[]},"a3U":{"hb":[]},"M7":{"hb":[]},"a3Z":{"hb":[]},"a4_":{"hb":[]},"Ma":{"hb":[]},"Fk":{"J":[],"I":[],"je":[],"aP":[]},"Nw":{"O":[],"c":[]},"UM":{"a0":["Nw"]},"po":{"b8":[]},"e2":{"b8":[]},"ml":{"b8":[]},"mI":{"eu":[],"b8":[]},"pT":{"mI":[],"eu":[],"b8":[]},"rb":{"b8":[]},"ta":{"b8":[]},"FM":{"b8":[]},"yL":{"b6":["po"],"b_":["po"],"b_.T":"po","b6.T":"po"},"Nx":{"b8":[]},"a_y":{"b8":[]},"K_":{"b8":[]},"y2":{"b8":[]},"a3T":{"b8":[]},"E1":{"b8":[]},"a5H":{"b8":[]},"yM":{"b8":[]},"a5G":{"aU":[],"c":[]},"a9M":{"J":[],"I":[],"je":[],"aP":[]},"yP":{"b8":[]},"Pv":{"J":[],"bt":["J"],"I":[],"aP":[]},"a3M":{"bH":[],"aU":[],"c":[]}}'))
B.bDz(b.typeUniverse,JSON.parse('{"JV":1,"Md":1,"K4":1,"Fk":1}'))
var y=(function rtii(){var x=B.ax
return{_:x("BY"),e:x("bf<nM>"),h:x("bf<nN>"),b:x("bf<~>"),W:x("jC"),B:x("nv"),dB:x("fv"),T:x("u6"),fj:x("i8"),G:x("mk"),J:x("ml"),k:x("as"),cX:x("a0c<N>"),dO:x("ue"),R:x("ag<h,@>"),v:x("hP"),bz:x("mt<bg>"),f0:x("nE"),E:x("b8"),F:x("y0"),X:x("nM"),P:x("my"),D:x("ut"),a:x("aCF"),d:x("nN"),cw:x("eu"),L:x("hc"),m:x("df<w,F>"),cm:x("ky"),dv:x("mE"),g:x("B<nu>"),O:x("B<fv>"),Y:x("B<i8>"),C:x("B<brA>"),U:x("B<eu>"),K:x("B<a4v>"),u:x("B<e2>"),bC:x("B<v2>"),aA:x("B<u<eu>>"),r:x("B<FM>"),s:x("B<h>"),eg:x("B<t7>"),df:x("B<pT>"),p:x("B<c>"),n:x("B<N>"),t:x("B<w>"),eF:x("ba<a0<O>>"),Z:x("mI"),cz:x("e2"),hf:x("po"),dj:x("yM"),fT:x("rb"),c_:x("ie<oy<bf<~>>>"),x:x("yP<fv>"),y:x("yP<e2>"),I:x("u<w>"),ef:x("v8"),c:x("a2<h,@>"),f:x("a2<@,@>"),gj:x("a9<N,N>"),w:x("jP"),Q:x("vk<nv>"),o:x("vk<po>"),eo:x("pB"),gJ:x("pC"),V:x("mV<my>"),N:x("h"),A:x("oh"),er:x("t7"),j:x("w0"),dw:x("pT"),bY:x("ta"),cZ:x("pV"),gc:x("k7"),es:x("kZ"),bN:x("n0"),l:x("c"),q:x("Bp"),g4:x("iu<N>"),cJ:x("C"),i:x("N"),z:x("@"),S:x("w"),bn:x("xe?"),f3:x("yL?"),M:x("u<@>?"),fF:x("a2<@,@>?"),cK:x("A?"),aD:x("k7?"),h6:x("w?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.As=new B.qo(C.n,B.ax("qo<F>"))
D.Az=new A.Cd(0,"left")
D.mf=new A.Cd(1,"top")
D.AA=new A.Cd(2,"right")
D.dx=new A.Cd(3,"bottom")
D.as6=new A.pK(!1,A.buG(),22,null)
D.k7=new A.oQ(16,null,D.as6,!0)
D.a7v=new A.pd(C.B,null,2,null)
D.vz=new A.K_(!1,D.a7v,A.c_P(),!0)
D.a_1=new A.avo(3,"spaceEvenly")
D.a_a=new B.xi(6,"dstIn")
D.Xg=new B.aT(3,3)
D.AE=new B.d2(D.Xg,D.Xg,C.Z,C.Z)
D.a_m=new B.b7(C.B,0,C.N,-1)
D.Ba=new A.a3S()
D.a0V=new A.M8()
D.a0W=new A.Mb()
D.aIm=new A.aaY()
D.aiW=x([],B.ax("B<ky>"))
D.aiX=x([],B.ax("B<kZ>"))
D.Da=new A.LW(D.aiW,D.aiX,!0)
D.a71=new B.et("Konten (SKR 03)",null)
D.a7a=new B.et("Zeitraum",null)
D.x9=new A.aC2(0,"center")
D.aIy=new A.y2(!0,A.bva(),A.bFD())
D.De=new A.y2(!1,A.bva(),A.bFD())
D.Df=new A.y3(!1,!0,null,A.at1(),A.Z7(),!0,null,A.at1(),A.Z7())
D.aIz=new A.y3(!0,!0,null,A.at1(),A.Z7(),!0,null,A.at1(),A.Z7())
D.a3c=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a2Z=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3l=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3g=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2K=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2J=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3H=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a35=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3K=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3E=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.amP=new B.df([50,D.a3c,100,D.a2Z,200,D.a3l,300,D.a3g,400,D.a2K,500,D.a2J,600,D.a3H,700,D.a35,800,D.a3K,900,D.a3E],y.m)
D.dc=new B.ri(D.amP,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.afl=x([8,4],y.t)
D.a7t=new A.pd(D.dc,null,0.4,D.afl)
D.a7u=new A.pd(C.an,null,0.5,null)
D.fC=new A.eu(0/0,0/0)
D.as8=new A.pK(!0,A.buG(),44,null)
D.mg=new A.oQ(16,null,D.as8,!0)
D.as7=new A.pK(!0,A.buG(),30,null)
D.mh=new A.oQ(16,null,D.as7,!0)
D.a7w=new A.uv(!1,D.mg,D.mh,D.mg,D.mh)
D.aIA=new A.uv(!0,D.mg,D.mh,D.mg,D.mh)
D.Dn=new A.MD(0,"left")
D.a7L=new A.MD(1,"center")
D.Do=new A.MD(2,"right")
D.a7Q=new B.ad(57495,"MaterialIcons",null,!1)
D.a8u=new B.ad(58927,"MaterialIcons",null,!1)
D.a8x=new B.ad(59005,"MaterialIcons",null,!0)
D.a8y=new B.ad(59007,"MaterialIcons",null,!0)
D.a8z=new B.ad(59011,"MaterialIcons",null,!1)
D.a9j=new B.ad(62589,"MaterialIcons",null,!1)
D.a8L=new B.ad(61349,"MaterialIcons",null,!1)
D.aa_=new B.aV(D.a8L,20,C.h,null,null)
D.aam=new B.aV(C.kS,null,C.h,null,null)
D.aay=new B.aV(C.xn,null,C.v,null,null)
D.a81=new B.ad(57912,"MaterialIcons",null,!1)
D.aaT=new B.aV(D.a81,null,C.ak,null,null)
D.acZ=new A.a5t(null)
D.aIF=new A.aHF(0,"horizontal")
D.xE=new A.yM(0,0,0,0,!1)
D.Ex=new A.Nx(0.5)
D.Be=new A.a5H()
D.ad2=new A.E1(D.Be,A.bFH(),10,A.bFE(),!0,A.bFG(),A.bFF(),!1,null,null,null)
D.aIH=new A.E1(D.Be,A.bFH(),10,A.bFE(),!0,A.bFG(),A.bFF(),!0,null,null,null)
D.aep=x([4,3],y.t)
D.aIL=x([],y.g)
D.aiI=x([],y.O)
D.aiJ=x([],y.Y)
D.aiK=x([],B.ax("B<mk>"))
D.aiL=x([],B.ax("B<ml>"))
D.aIM=x([],y.U)
D.aIN=x([],y.u)
D.aiM=x([],y.r)
D.anq={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.ST={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yi=new B.ag(D.ST,[0,0,0,0,0,0,0,C.cD],B.ax("ag<h,A>"))
D.ano={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.amK=new B.ag(D.ano,[0,0,0,0],B.ax("ag<h,w>"))
D.anD={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.am7=new B.ag(D.anD,[0,0,0,0,null,null,null,null],B.ax("ag<h,w?>"))
D.am3=new B.ag(D.anq,[D.yi,D.yi,D.yi,C.cD,C.cD,C.cD,D.amK,D.am7],y.R)
D.amk=new B.ag(D.ST,[0,0,0,0,0,0,0,C.cC],y.R)
D.ann={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.amL=new B.ag(D.ann,[0,0,0,0,0,0,0,C.cC],y.R)
D.a3Q=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a3X=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2N=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a38=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3i=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a49=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2A=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3a=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3k=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3F=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.amQ=new B.df([50,D.a3Q,100,D.a3X,200,D.a2N,300,D.a38,400,D.a3i,500,D.a49,600,D.a2A,700,D.a3a,800,D.a3k,900,D.a3F],y.m)
D.SI=new B.ri(D.amQ,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6L=new B.aj(32,32,32,32)
D.aoH=new B.ah(D.a6L,C.bH,null)
D.a6N=new B.aj(48,48,48,48)
D.aoJ=new B.ah(D.a6N,C.bH,null)
D.aiY=x([],B.ax("B<mE>"))
D.aiZ=x([],B.ax("B<n0>"))
D.Xh=new A.Pb(D.aiY,D.aiZ)
D.ar3=new B.hi("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ar5=new B.hi("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ar7=new B.hi("Automaten-Business","Umsatz je Automat",null,null)
D.ar8=new B.hi("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ara=new B.hi("Top","Meistverkaufte Produkte",null,null)
D.ard=new B.hi("Kennzahlen","Rentabilit\xe4t",null,null)
D.XW=new B.rR(C.D,C.p,0)
D.aAX=new B.aq("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.atJ=new B.eP(D.aAX,null,null,null,null,null,null,null,null,null,null,null,null,C.R,!1,null,null,null,C.t,null)
D.aIW=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Z5=new A.acq(0,"auto")
D.aBI=new A.acq(1,"top")
D.aFT=new A.U0("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"c8n","bJO",()=>B.jj(new A.bo0(),y.D))
x($,"c8o","atF",()=>B.jj(new A.bo1(),y.a))
x($,"c9g","wX",()=>B.bBO(new A.bpO(),y.P))
x($,"c8p","bqC",()=>C.aO.$1$1(new A.bo2(),y.d))
x($,"c8m","bJN",()=>C.aO.$1$1(new A.bo_(),y.X))
x($,"c8l","bqB",()=>B.aXB(A.bZS(),y.F,y.b))
x($,"c1E","bqd",()=>new A.ave())
w($,"c4S","lg",()=>new A.b_f())})()};
(a=>{a["4JCdlXncj+83H0ZjhuQA3bThcbY="]=a.current})($__dart_deferred_initializers__);