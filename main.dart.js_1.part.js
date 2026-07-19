((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nh(d,e,f,g,h){return new A.a5o(f,g,d,h,e,null)},
a5o:function a5o(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
ut:function ut(d){this.a=d},
Dl:function Dl(d){this.a=d},
bNw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=J.Y(d),e=y.fF.a(f.h(d,"period"))
if(e==null)e=C.Sz
x=y.f
w=y.N
v=y.z
u=A.aCR(B.ej(x.a(f.h(d,"current")),w,v))
t=A.aCR(B.ej(x.a(f.h(d,"prior_year")),w,v))
s=A.aCR(B.ej(x.a(f.h(d,"prior_period")),w,v))
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
o=B.ej(x.a(f.h(d,"customer")),w,v)
n=B.bE(o.h(0,"purchases_count"))
n=n==null?null:C.d.a4(n)
if(n==null)n=0
m=A.oC(o.h(0,"app_gross"))
l=B.bE(o.h(0,"active_customers"))
l=l==null?null:C.d.a4(l)
if(l==null)l=0
o=A.oC(o.h(0,"avg_basket"))
v=B.ej(x.a(f.h(d,"derived")),w,v)
w=A.oC(v.h(0,"gross_margin_pct"))
f=A.oC(v.h(0,"net_margin_pct"))
x=A.oC(v.h(0,"ebitda_margin_pct"))
k=A.oC(v.h(0,"cashflow_operating"))
j=A.bn8(v.h(0,"revenue_growth_yoy_pct"))
i=A.bn8(v.h(0,"revenue_growth_mom_pct"))
h=A.bn8(v.h(0,"result_growth_yoy_pct"))
v=A.bn8(v.h(0,"result_growth_mom_pct"))
g=B.bE(J.a3(e,"days"))
g=g==null?null:C.d.a4(g)
if(g==null)g=1
return new A.nL(u,t,s,q,p,r,new A.ay4(n,m,l,o),new A.azb(w,f,x,k,j,i,h,v),g)},
oC(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kL(J.ak(d))
return x==null?0:x},
bn8(d){if(d==null)return null
if(typeof d=="number")return d
return B.kL(J.ak(d))},
pT:function pT(d,e,f,g){var _=this
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
ay4:function ay4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azb:function azb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nL:function nL(d,e,f,g,h,i,j,k,l){var _=this
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
return new A.nM(w,v,u,t,s,r,q,x)},
tO(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kL(J.ak(d))
return x==null?0:x},
BY:function BY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nM:function nM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aCS:function aCS(){},
bNv(d){return new A.y0(d,new B.ie(y.c_),C.dw)},
bnU:function bnU(){},
bnV:function bnV(){},
bpH:function bpH(){},
bnW:function bnW(){},
bnT:function bnT(){},
y0:function y0(d,e,f){this.r=d
this.a=e
this.f=f},
aCB:function aCB(d,e,f){this.a=d
this.b=e
this.c=f},
aCA:function aCA(d,e,f){this.a=d
this.b=e
this.c=f},
bNx(){return new A.y1(null)},
b9Y(d,e,f,g,h){return new A.ajX(e,h,g,f,d,null)},
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
aeV:function aeV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ajX:function ajX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
am6:function am6(d,e){this.e=d
this.a=e},
bdA:function bdA(d){this.a=d},
bdB:function bdB(d){this.a=d},
bdC:function bdC(d,e,f){this.a=d
this.b=e
this.c=f},
bdz:function bdz(){},
I5:function I5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IB:function IB(d,e){this.c=d
this.a=e},
bj4:function bj4(d){this.a=d},
aeT:function aeT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hd:function Hd(d,e){this.c=d
this.a=e},
tv(d,e,f,g,h,i,j,k,l,m,n){return new A.aks(g,n,i,e,d,m,f,k,l,j,null)},
a5p:function a5p(d){this.a=d},
aHE:function aHE(){},
aHD:function aHD(){},
aHC:function aHC(){},
Hx:function Hx(d,e){this.c=d
this.a=e},
bbd:function bbd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb3:function bb3(){},
bb4:function bb4(){},
bb5:function bb5(){},
bb6:function bb6(){},
bb7:function bb7(){},
bb8:function bb8(){},
bb9:function bb9(){},
bba:function bba(){},
bbb:function bbb(d){this.a=d},
bbc:function bbc(d){this.a=d},
ajh:function ajh(d){this.a=d},
aks:function aks(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Tz:function Tz(d,e,f){this.c=d
this.d=e
this.a=f},
aph:function aph(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bir:function bir(){},
bis:function bis(){},
bit:function bit(d){this.a=d},
agk:function agk(d,e){this.c=d
this.a=e},
b2x:function b2x(){},
b2z:function b2z(d){this.a=d},
b2A:function b2A(d){this.a=d},
b2y:function b2y(){},
agB:function agB(d,e){this.c=d
this.a=e},
b3i:function b3i(){},
b3j:function b3j(){},
b3k:function b3k(){},
b3l:function b3l(d){this.a=d},
akW:function akW(d,e){this.c=d
this.a=e},
bbH:function bbH(){},
bbI:function bbI(){},
ahn:function ahn(d,e){this.c=d
this.a=e},
Ip:function Ip(d,e,f){this.c=d
this.d=e
this.a=f},
aqt:function aqt(d,e){this.c=d
this.a=e},
bkl:function bkl(){},
bkm:function bkm(){},
TY:function TY(d,e){this.c=d
this.a=e},
b8:function b8(){},
bxG(d){return new A.K_(d,C.ap,C.dm,null,null)},
K_:function K_(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Sx:function Sx(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fq$=f
_.cR$=g
_.c=_.a=null},
b15:function b15(d,e){this.a=d
this.b=e},
b16:function b16(d){this.a=d},
avo(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3){var x,w,v,u,t,s=null,r=f==null?D.aiE:f,q=l==null?16:l,p=d==null?D.a_0:d,o=g==null,n=o?A.bqZ(s,s,s,s,s,s,s,s):g,m=a2==null?D.Xg:a2
o=o?A.bqZ(s,s,s,s,s,s,s,s):g
x=j==null?D.D8:j
w=a0==null?0/0:a0
v=a1==null?0/0:a1
u=h==null?0:h
t=e==null?C.D:e
return new A.nu(r,q,p,n,k,a3,m,0,1,0,v,w,u,D.B8,t,x,i,o)},
avv(d,e,f,g,h){var x=d==null?D.aiF:d,w=e==null?2:e,v=g==null?C.l7:g
return new A.fu(h,f===!0,x,w,v)},
bKQ(d,e,f){var x=d.a
x=C.d.b0(x+(e.a-x)*f)
return A.avv(A.ke(d.c,e.c,f,A.bYC(),y.fj),B.aa(d.d,e.d,f),!1,A.ke(d.e,e.e,f,A.Z8(),y.S),x)},
a_w(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s=null,r=i==null?0:i
if(h==null)x=D.SH
else x=h
w=m==null
v=w?8:m
u=$.lg()
t=u.aVN(f,w?8:m)
u=u.aVO(g,w?8:m)
w=d==null?A.bxE(s,s,s,s,s):d
return new A.i8(r,l,x,j,v,t,e,u,w,k==null?D.aiG:k)},
bKR(d,e,f){var x,w,v,u,t=B.X(d.c,e.c,f),s=B.aa(d.e,e.e,f),r=B.ml(d.f,e.f,f),q=A.ke(d.r,e.r,f,A.Z8(),y.S),p=B.bU(d.w,e.w,f),o=B.aa(d.a,e.a,f),n=B.aa(d.b,e.b,f)
n.toString
x=d.x
w=e.x
v=B.aa(x.b,w.b,f)
u=B.aa(x.c,w.c,f)
w=B.X(x.d,w.d,f)
return A.a_w(A.bxE(w,v,null,!1,u),q,r,p,t,o,null,A.ke(d.y,e.y,f,A.bYD(),y.G),n,s)},
bKS(d,e,f){var x,w,v=B.aa(d.a,e.a,f)
v.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
w.toString
return new A.mj(v,x,w,B.bU(d.d,e.d,f))},
bxE(d,e,f,g,h){var x,w=e==null?0:e,v=h==null?0:h
if(d==null)x=D.dc
else x=d
return new A.a_s(g===!0,w,v,x,f)},
bqZ(d,e,f,g,h,i,j,k){var x,w
if(k==null)x=new A.a_y(4,C.hC,16,D.x7,0,120,A.bYF(),!1,!1,D.Z5,0,C.A,A.bYE())
else x=k
w=j==null?C.kG:j
return new A.a_x(x,w,d===!0,f!==!1,e!==!1,i,h,g)},
bZn(d,e,f,g){var x=null,w=B.iT(x,x,f.c,x,x,x,x,x,x,x,x,14,x,x,C.O,x,x,!0,x,x,x,x,x,x,x,x)
return new A.Ce(C.d.j(f.b),w)},
bZm(d){return A.axv(D.dc,15)},
nu:function nu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avn:function avn(d,e){this.a=d
this.b=e},
fu:function fu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avw:function avw(){},
avx:function avx(){},
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
mj:function mj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_s:function a_s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_x:function a_x(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acm:function acm(d,e){this.a=d
this.b=e},
a_y:function a_y(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
K0:function K0(d){this.a=d},
a_z:function a_z(d,e,f,g,h,i,j,k){var _=this
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
afF:function afF(){},
afJ:function afJ(){},
afK:function afK(){},
afM:function afM(){},
afN:function afN(){},
afO:function afO(){},
afP:function afP(){},
afQ:function afQ(){},
afR:function afR(){},
avy:function avy(d){this.a=d},
avz:function avz(){},
u6:function u6(d,e,f){this.a=d
this.b=e
this.c=f},
afL:function afL(){},
avA:function avA(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avB:function avB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avC:function avC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4r:function a4r(d){this.b=d},
a_v:function a_v(d,e,f){this.d=d
this.e=e
this.a=f},
a9v:function a9v(d,e,f,g,h,i,j,k){var _=this
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
bZo(d,e){var x=null
return new A.QB(e.w,B.l(e.r,x,x,x,x,x,x,x),x)},
avh(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=d.c
w=e.c
v=B.aa(x.c,w.c,f)
v.toString
return new A.oO(u,e.b,new A.pI(w.a,w.b,v,B.aa(x.d,w.d,f)),!0)},
bz1(d,e,f){var x=A.avh(d.b,e.b,f),w=A.avh(d.d,e.d,f),v=A.avh(d.e,e.e,f)
return new A.uv(e.a,x,A.avh(d.c,e.c,f),w,v)},
bNz(d,e,f){var x,w
if(d.k(0,D.fC))return e
if(e.k(0,D.fC))return d
x=B.aa(d.a,e.a,f)
x.toString
w=B.aa(d.b,e.b,f)
w.toString
return new A.es(x,w)},
bz_(d,e,f){return new A.y3(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c0L(d){return!0},
bZr(d){return D.a7s},
bz0(d,e,f,g){var x
if(d==null)x=f==null?C.B:null
else x=d
return new A.pb(x,f,g,e)},
bAZ(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYy(),y.dv)
w.toString
x=A.ke(d.b,e.b,f,A.bYA(),y.bN)
x.toString
return new A.Pa(w,x)},
bOk(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qX(d.d,e.d,f)
if(w==null)w=v==null?C.l:null
return new A.mC(u,x,w,v)},
bTt(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qX(d.d,e.d,f)
if(w==null)w=v==null?C.l:null
return new A.mZ(u,x,w,v)},
bOj(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.co(x.c,w.c,f)
u=A.bOh(B.bqP(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qX(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Z8(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kx(s,e.f,e.r,u,e.x,v,w,x,t)},
bTs(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.co(x.c,w.c,f)
u=A.bTq(B.bqP(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qX(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Z8(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kY(s,e.f,e.r,u,e.x,v,w,x,t)},
bOh(d,e,f,g,h,i){return new A.a4C(f,!1,g,i,d,e)},
bOi(d){return C.d.am(d.e,1)},
bTq(d,e,f,g,h,i){return new A.acM(f,!1,g,i,d,e)},
bTr(d){return C.d.am(d.e,1)},
byX(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYx(),y.cm)
w.toString
x=A.ke(d.b,e.b,f,A.bYz(),y.es)
x.toString
return new A.LV(w,x,!0)},
bNy(d,e,f){return new A.M5(d,e==null?4:e,f)},
a_l:function a_l(){},
Cd:function Cd(d,e){this.a=d
this.b=e},
t9:function t9(d,e){this.r=d
this.w=e},
pI:function pI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaU:function aaU(){},
oO:function oO(d,e,f,g){var _=this
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
es:function es(d,e){this.a=d
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
pb:function pb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aco:function aco(){},
Pa:function Pa(d,e){this.a=d
this.b=e},
mC:function mC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mZ:function mZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kx:function kx(d,e,f,g,h,i,j,k,l){var _=this
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
a4C:function a4C(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acM:function acM(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LV:function LV(d,e,f){this.a=d
this.b=e
this.c=f},
uu:function uu(){},
M5:function M5(d,e,f){this.a=d
this.b=e
this.c=f},
afA:function afA(){},
afE:function afE(){},
aiH:function aiH(){},
aiX:function aiX(){},
aiY:function aiY(){},
aj_:function aj_(){},
aj0:function aj0(){},
ajN:function ajN(){},
ajM:function ajM(){},
ajO:function ajO(){},
anb:function anb(){},
aoW:function aoW(){},
aoX:function aoX(){},
aqx:function aqx(){},
ar9:function ar9(){},
ar8:function ar8(){},
ara:function ara(){},
avd:function avd(){},
JU:function JU(){},
JV:function JV(d,e,f){this.c=d
this.d=e
this.a=f},
avf:function avf(d){this.a=d},
ave:function ave(d){this.a=d},
QB:function QB(d,e,f){this.c=d
this.e=e
this.a=f},
WS:function WS(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bS0(d,e,f){var x=B.ab(f),w=x.i("a9<1,jC>")
w=B.P(new B.a9(f,new A.aWJ(),w),w.i("av.E"))
x=x.i("a9<1,c>")
x=B.P(new B.a9(f,new A.aWK(),x),x.i("av.E"))
return new A.aaV(e,d,w,x,null)},
bKN(d,e,f){var x,w=null,v=B.aG(y.dO),u=J.a5f(4,y.er)
for(x=0;x<4;++x)u[x]=new B.t7(w,C.ax,C.u,new B.k9(1),w,w,w,w,C.bx,w)
v=new A.a_m(f,d,e,v,u,!0,0,w,w,new B.bn(),B.aG(y.v))
v.bj()
return v},
aaV:function aaV(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWJ:function aWJ(){},
aWK:function aWK(){},
a_m:function a_m(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bbj:function bbj(d,e){this.a=d
this.b=e},
avg:function avg(){},
jC:function jC(d,e){this.a=d
this.b=e},
nt:function nt(d,e){this.a=d
this.b=e},
afB:function afB(){},
afC:function afC(){},
afD:function afD(){},
Sv:function Sv(){},
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
a3N(d,e){var x=d==null?B.dr(C.B,1):d
return new A.a3M(e!==!1,x)},
a_B:function a_B(){},
a3M:function a3M(d,e){this.a=d
this.b=e},
Mc:function Mc(){},
a3O:function a3O(){},
avL:function avL(){},
aC2:function aC2(d,e){this.a=d
this.b=e},
afU:function afU(){},
aiU:function aiU(){},
aiV:function aiV(){},
aj1:function aj1(){},
K3:function K3(){},
vk:function vk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ha:function ha(){},
a3S:function a3S(d){this.a=d},
a3T:function a3T(d){this.a=d},
a3U:function a3U(d){this.a=d},
M7:function M7(){},
M8:function M8(){},
a3X:function a3X(d){this.a=d},
Ma:function Ma(){},
Mb:function Mb(d){this.a=d},
a3R:function a3R(d){this.a=d},
a3Q:function a3Q(d){this.a=d},
M6:function M6(d){this.a=d},
a3V:function a3V(d){this.a=d},
a3W:function a3W(d){this.a=d},
M9:function M9(d){this.a=d},
Fj:function Fj(){},
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
Nv:function Nv(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UJ:function UJ(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fq$=g
_.cR$=h
_.c=_.a=null},
bbo:function bbo(d,e){this.a=d
this.b=e},
bbm:function bbm(d){this.a=d},
bbn:function bbn(d,e){this.a=d
this.b=e},
bbl:function bbl(){},
bbp:function bbp(d){this.a=d},
bsh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,a0,a1,a2){var x=p==null?0/0:p,w=n==null?0/0:n,v=q==null?0/0:q,u=o==null?0/0:o,t=e==null?0:e,s=f==null?0:f,r=d==null?C.D:d
return new A.pm(l,g,m,a1,k,a2,a0,x,w,t,v,u,s,i,r,j,h,m)},
aHT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0){var x,w,v=null
if(g==null)x=k==null?D.SH:v
else x=g
w=f==null?A.avm(!1,v,0,v,!1,D.vx):f
x=new A.e2(a0,!0,x,k,e,l,h,!1,r,n,!1,w,d==null?A.avm(!1,v,0,v,!1,D.vx):d,j,u,i,s,!1,p)
x.aq_(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,u,a0)
return x},
bOP(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=B.aa(d.x,e.x,f)
n.toString
x=A.bxF(d.ay,e.ay,f)
w=A.bxF(d.ch,e.ch,f)
v=B.aa(d.as,e.as,f)
v.toString
u=e.CW
t=A.ke(d.cy,e.cy,f,A.Z8(),y.S)
s=B.X(d.r,e.r,f)
r=B.qX(d.w,e.w,f)
q=A.ke(d.a,e.a,f,A.bYw(),y.cw)
q.toString
p=B.bBs(d.db,e.db,f)
p.toString
o=B.aa(d.dy.a,e.dy.a,f)
o.toString
return A.aHT(w,n,x,s,e.z,t,new A.y2(u.a,u.b,u.c),r,e.y,!1,e.at,!1,new A.Nw(o),!1,v,p,!0,e.cx,q)},
avm(d,e,f,g,h,i){var x
if(e==null)x=g==null?B.aA(C.d.b0(127.5),D.dc.v()>>>16&255,D.dc.v()>>>8&255,D.dc.v()&255):null
else x=e
return new A.a_u(h,x,g,i,f,!1)},
bxF(d,e,f){var x=e.d,w=d.d.b,v=x.b,u=B.X(w.a,v.a,f),t=B.qX(w.b,v.b,f),s=B.aa(w.c,v.c,f)
s.toString
s=A.bz0(u,A.ke(w.d,v.d,f,A.Z8(),y.S),t,s)
t=B.X(d.b,e.b,f)
v=B.qX(d.c,e.c,f)
w=B.aa(d.e,e.e,f)
w.toString
return A.avm(!1,t,w,v,e.a,new A.JZ(!1,s,x.c,!0))},
bKU(d,e,f){var x=B.X(d.c,e.c,f),w=B.qX(d.d,e.d,f)
if(x==null)x=w==null?B.aA(C.d.b0(127.5),D.dc.v()>>>16&255,D.dc.v()>>>8&255,D.dc.v()&255):null
return new A.mk(e.a,e.b,x,w)},
c0M(d){return!0},
buj(d,e,f){var x=f.w,w=x==null
if(!w&&x instanceof B.lC)return A.bv1(x.a,A.brV(x),e/100)
x=w?null:C.b.ga0(x.a)
if(x==null)x=f.r
return x==null?D.dc:x},
bWa(d,e,f){var x,w=f.w,v=w==null
if(!v&&w instanceof B.lC)x=A.bv1(w.a,A.brV(w),e/100)
else{w=v?null:C.b.ga0(w.a)
x=w==null?f.r:w
if(x==null)x=D.dc}return A.axv(x,40)},
bDX(d,e,f,g,h){var x,w=A.buj(d,e,f),v=f.w,u=v==null
if(!u&&v instanceof B.lC)x=A.bv1(v.a,A.brV(v),e/100)
else{v=u?null:C.b.ga0(v.a)
x=v==null?f.r:v
if(x==null)x=D.dc}v=A.axv(x,40)
return new A.M5(w,h==null?4:h,v)},
c0K(d,e){return!0},
bYj(d,e){return Math.abs(d.a-e.a)},
bZu(d,e){var x=J.d3(e,new A.bnJ(d),y.bY)
x=B.P(x,x.$ti.i("av.E"))
return x},
bZq(d,e){return-1/0},
bZp(d,e){return d.a[e].b},
bF8(d){var x=J.d3(d,new A.bnG(),y.fT)
x=B.P(x,x.$ti.i("av.E"))
return x},
bF7(d){return A.axv(D.dc,15)},
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
Nw:function Nw(d){this.a=d},
a_u:function a_u(d,e,f,g,h,i){var _=this
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
JZ:function JZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
y2:function y2(d,e,f){this.a=d
this.b=e
this.c=f},
aHF:function aHF(d,e){this.a=d
this.b=e},
a3P:function a3P(){},
E0:function E0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bnJ:function bnJ(d){this.a=d},
bnI:function bnI(d){this.a=d},
a5D:function a5D(){},
bnG:function bnG(){},
mG:function mG(){},
pR:function pR(d,e,f,g,h,i){var _=this
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
FL:function FL(d){this.a=d},
Nx:function Nx(d){this.a=d},
yL:function yL(d,e){this.a=d
this.b=e},
afH:function afH(){},
afI:function afI(){},
afV:function afV(){},
aiW:function aiW(){},
aiZ:function aiZ(){},
akz:function akz(){},
akA:function akA(){},
akB:function akB(){},
akD:function akD(){},
akE:function akE(){},
akF:function akF(){},
akG:function akG(){},
aoV:function aoV(){},
aqw:function aqw(){},
aHV:function aHV(d){this.a=d},
aHW:function aHW(){},
aHX:function aHX(){},
yM:function yM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akC:function akC(){},
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
a5C:function a5C(d,e,f){this.d=d
this.e=e
this.a=f},
a9I:function a9I(d,e,f,g,h,i,j,k){var _=this
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
bqY(d,e){var x,w,v,u,t,s,r,q,p=d.ch,o=B.by(p.length,0,!1,y.i),n=B.ab(p),m=new B.a9(p,new A.avp(),n.i("a9<1,N>")).kk(0,new A.avq()),l=e-m,k=new A.avt(l,d,o)
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
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avr(r,l/(q-1),o))
break
case 4:r={}
q=p.length
r.a=0
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avs(r,l/(q*2),o))
break
case 3:k.$0()
break}return o},
avp:function avp(){},
avq:function avq(){},
avt:function avt(d,e,f){this.a=d
this.b=e
this.c=f},
avu:function avu(d,e,f){this.a=d
this.b=e
this.c=f},
avr:function avr(d,e,f){this.a=d
this.b=e
this.c=f},
avs:function avs(d,e,f){this.a=d
this.b=e
this.c=f},
brV(d){var x,w={}
w.a=B.b([],y.n)
x=d.b
if(x==null||x.length!==d.a.length){x=d.a
if(x.length>1)new B.iJ(x,B.ab(x).i("iJ<1>")).aq(0,new A.aF5(w,d))
else throw B.e(B.bC('"colors" must have length > 1.',null))}else w.a=x
return w.a},
aF5:function aF5(d,e){this.a=d
this.b=e},
ayF(d,e){var x,w
if(e!=null){x=B.ab(e).i("a9<1,N>")
w=B.P(new B.a9(e,new A.ayG(),x),x.i("av.E"))
return A.bZi(d,new A.a08(w,y.cX))}else return d},
ayG:function ayG(){},
bSA(d,e){var x=!0
if(d!==C.eV)if(!(d===C.ax&&e===C.u))x=d===C.ib&&e===C.aU
if(x)return D.Dl
else{x=!0
if(d!==C.hh)if(!(d===C.ib&&e===C.u))x=d===C.ax&&e===C.aU
if(x)return D.Dm
else return D.a7K}},
MC:function MC(d,e){this.a=d
this.b=e},
a_Z:function a_Z(d,e){this.a=d
this.b=e},
yP:function yP(d,e){this.a=d
this.$ti=e},
akN:function akN(){},
bZi(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=B.cB($.af().r)
for(x=B.b([],y.C),w=new B.Np(d,!1,x),v=e.a,u=m.e;w.t();){t=w.c
if(t===0||w.f)B.V(B.fl('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--t
s=new B.No(w,t)
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
if(p){r=new B.Jp(d.aRt(s,q,q+o,!0),C.p,null)
u.push(r)
n=m.d
if(n!=null)r.hD(n)}q+=o
p=!p}}return m},
a08:function a08(d,e){this.a=d
this.b=0
this.$ti=e},
b_f:function b_f(){},
Pu:function Pu(d,e,f,g,h,i,j){var _=this
_.G=null
_.ae=d
_.aH=e
_.dn=f
_.cP=_.D=null
_.eV=g
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
a3I:function a3I(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
brJ(d){var x,w,v,u=y.U,t=B.b([B.b([],u)],y.aA)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.K)(d),++w){v=d[w]
if(!v.k(0,D.fC))C.b.gaf(t).push(v)
else if(C.b.gaf(t).length!==0)t.push(B.b([],u))}if(C.b.gaf(t).length===0)t.pop()
return t},
bKX(d){var x,w=d.d
if(w.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
w=w.a
x=!1
if(w.geg(w)===0){w=d.a.a
if(w.geg(w)===0){w=d.b.a
if(w.geg(w)===0){w=d.c.a
w=w.geg(w)===0}else w=x}else w=x}else w=x
if(w)return!1
return!0},
axv(d,e){var x=1-e/100
return B.aA(d.gfD(d),C.d.b0(d.gNl()*x),C.d.b0(d.gFK()*x),C.d.b0(d.gJS()*x))},
byZ(d){var x=d.a,w=x?d.b.d.b:0,v=x?d.b.a.b:0,u=x?d.b.b.b:0
return new B.aj(w,v,u,x?d.b.c.b:0)},
brK(d){var x=d.a,w=x?A.aWI(d.b):0,v=x?A.aWI(d.c):0,u=x?A.aWI(d.d):0
return new B.aj(w,v,u,x?A.aWI(d.e):0)},
bQ3(d){var x
if(d.c===0){d.seQ(null)
x=B.bY(d.r)
d.r=B.aA(0,x.v()>>>16&255,x.v()>>>8&255,x.v()&255).gp(0)}},
bsD(d,e,f,g){var x
if(f!=null){d.r=C.B.gp(0)
d.seQ(f.mJ(0,g))}else{x=e==null?C.D:e
d.r=x.gp(x)
d.seQ(null)}},
aWI(d){var x=d.c
return x.a&&x.c!==0?0+x.c:0},
ke(d,e,f,g,h){var x,w,v,u=d!=null
if(u&&e!=null&&d.length===e.length){x=d.length
w=J.kD(x,h)
for(v=0;v<x;++v)w[v]=g.$3(d[v],e[v],f)
return w}else if(u&&e!=null){x=e.length
w=J.kD(x,h)
for(v=0;v<x;++v){u=v>=d.length?e[v]:d[v]
w[v]=g.$3(u,e[v],f)}return w}else return e},
c_C(d,e,f){return C.d.b0(d+(e-d)*f)},
bv1(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=d.length
if(e.length!==n){x=J.kD(n,y.i)
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
A.a5o.prototype={
A(d){var x,w,v,u=this,t=null,s=u.r,r=s?C.aP:C.l
s=s?C.n:C.an
x=y.p
w=B.b([],x)
C.b.M(w,B.b([B.cV(u.x,C.n,t,18),C.bs],x))
w.push(B.aQ(new B.er(u.c,t),1))
w=B.au(w,C.E,C.f,C.i,0,t,t)
v=u.w
x=B.b([w,C.a0,B.l(u.d,1,C.ai,t,B.cc(v==null?C.h:v,22,C.O),t,t,t)],x)
return B.bL(s,B.ai(x,C.E,C.hZ,C.i),r,t,C.ar,t,3)}}
A.ut.prototype={
Ld(d){return this.aRw(d)},
aRw(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$Ld=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eH("finance_summary",B.a5(["p_from",E.qQ(d.a),"p_to",E.qQ(d.b)],t,s),s),$async$Ld)
case 3:r=f
if(r==null){v=D.amh
x=1
break}if(y.f.b(r)){v=B.ej(r,t,s)
x=1
break}v=D.amI
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
return B.k(u.a.eH("finance_kpis",B.a5(["p_from",E.qQ(d.a),"p_to",E.qQ(d.b)],t,s),s),$async$Lc)
case 3:r=f
if(y.f.b(r)){v=B.ej(r,t,s)
x=1
break}v=D.am0
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
return B.k(r.i_("sevdesk-sync",B.a5(["from",E.qQ(d.a),"to",E.qQ(d.b)],t,t)),$async$px)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"upserted")=="number"){v=C.d.a4(B.fr(J.a3(s,"upserted")))
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
return B.k(r.i_("finance-export-pdf",B.a5(["from",E.qQ(d.a),"to",E.qQ(d.b)],t,t)),$async$L8)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"base64")=="string"){v=B.aC(J.a3(s,"base64"))
x=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(v,w)}})
return B.q($async$L8,w)}}
A.Dl.prototype={
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
p=A.bNw(r)
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
return new B.rQ(d.a)}if(d instanceof B.Mq)return new B.rQ("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Au("Unerwarteter Fehler: "+B.i(d))},
$iaCF:1}
A.pT.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.v8.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f]}}
A.w0.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.ay4.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.azb.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w]}}
A.nL.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.BY.prototype={
gbH(){var x=this
return[x.a,x.d,x.e,x.f]}}
A.nM.prototype={
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
return B.k(B.oN(new A.aCB(q,u,s),y.H),$async$GB)
case 3:u.se3(0,f)
r=u.f
if(r.ghm(r)==null){r=$.bqv()
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
return B.k(B.oN(new A.aCA(r,u,t),y.H),$async$L6)
case 3:u.se3(0,e)
s=u.f
v=s.ghm(s)!=null?null:r.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L6,w)}}
A.y1.prototype={
dw(d,e){var x=null,w=e.aC($.wX(),y.P),v=e.aC($.bqv(),y.h)
return B.jV(B.e3(B.b([new B.hh("Finanzen","Dashboard",new A.aeV(e.aC($.bqu(),y.b).gj9(),new A.aCJ(this,d,e),new A.aCK(this,d,e),new A.aCL(d),new A.aCM(this,d,e,w),x),x),C.aB,new A.am6(w,x),C.c3,D.acX,C.c3,B.dx(v,new A.aCN(),new A.aCO(),new A.aCP(),!1,!0,!1,y.d,y.l)],y.p),C.cQ,x,!1),C.n,new A.aCQ(e))},
J2(d,e){return this.aJR(d,e)},
aJR(d,e){var x=0,w=B.r(y.H),v,u,t,s
var $async$J2=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=$.bqu()
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
B_(d,e){return this.avE(d,e)},
avE(d,e){var x=0,w=B.r(y.H),v,u
var $async$B_=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:x=3
return B.k(e.aP(0,$.bqu().gi2(),y.F).L6(),$async$B_)
case 3:u=g
if(d.e==null){x=1
break}if(u==null){d.P(y.q).f.bR(D.atG)
x=1
break}x=4
return B.k(E.bAQ(u,"finanzauswertung.pdf"),$async$B_)
case 4:case 1:return B.p(v,w)}})
return B.q($async$B_,w)},
B0(d,e,f){return this.aHD(d,e,f)},
aHD(d,e,f){var x=0,w=B.r(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$B0=B.n(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=3
return B.k(B.le(null,null,!0,null,new A.aCI(f,d),d,null,!0,!0,y.y),$async$B0)
case 3:if(h!==!0){x=1
break}u=5
s=new E.nn(e.aP(0,$.ce(),y.A))
q=f.a
p=f.b
o=$.em()
n=o.aw(q)
o=o.aw(p)
x=8
return B.k(s.ze("finance_period",q,p,B.a5(["period_from",q.f0()],y.N,y.z),"Finanzauswertung "+n+" \u2013 "+o),$async$B0)
case 8:if(d.e!=null)d.P(y.q).f.bR(F.uD)
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
A.aeV.prototype={
A(d){var x=this,w=null,v=A.b9Y(C.n,F.iY,C.n,x.r,"Freigabe f\xfcr Auswertung anfordern"),u=A.b9Y(w,D.a9i,w,x.f,"Gesellschafter-Freigaben"),t=x.c,s=A.b9Y(w,D.a8t,w,t?w:x.d,"sevDesk synchronisieren")
return B.au(B.b([v,C.bs,u,C.bs,s,C.bs,A.b9Y(C.ak,C.kS,C.ak,t?w:x.e,"PDF-Export")],y.p),C.o,C.f,C.P,0,w,w)}}
A.ajX.prototype={
A(d){var x,w=this,v=null,u=B.b0(12),t=B.b0(12),s=B.b0(12),r=w.w
if(r==null)r=C.an
r=B.dr(r,1)
x=w.r
if(x==null)x=C.h
return B.acl(B.e4(!1,C.Y,!0,u,B.fc(!1,t,!0,B.bk(v,B.cV(w.c,x,v,20),C.r,v,v,new B.bb(v,v,r,s,v,v,C.I),v,40,v,v,v,v,v,40),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),C.r,C.at,0,v,v,v,v,v,C.bL),v,w.d,v,v)}}
A.am6.prototype={
dw(d,e){var x=null,w=this.e,v=$.em(),u=y.p
return B.bL(x,B.ai(B.b([D.a79,C.a0,B.au(B.b([D.a9Z,C.be,B.aQ(B.l(v.aw(w.a)+" \u2013 "+v.aw(w.b),x,x,x,B.E(C.h,16,C.O),x,x,x),1)],u),C.o,C.f,C.i,0,x,x),C.x,B.pW(C.dh,B.b([new A.I5("Monat",new A.bdA(e),x,x),new A.I5("Jahr (YTD)",new A.bdB(e),x,x),new A.I5("Zeitraum w\xe4hlen \u2026",new A.bdC(this,d,e),D.a8y,x)],u),C.eY,6,8)],u),C.E,C.f,C.i),x,x,C.G,x,3)},
Ir(d,e){return this.aGB(d,e)},
aGB(d,e){var x=0,w=B.r(y.H),v=this,u,t,s
var $async$Ir=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=new B.bg(Date.now(),0,!1)
t=v.e
x=2
return B.k(E.bpM(new A.bdz(),d,B.bM(B.aY(u)-5,1,1,0,0,0,0),new B.ms(t.a,t.b,y.bz),B.bM(B.aY(u)+1,1,1,0,0,0,0),C.eM),$async$Ir)
case 2:s=g
if(s!=null)e.aP(0,$.wX().gi2(),y.V).Ao(0,new E.mx(s.a,s.b))
return B.p(null,w)}})
return B.q($async$Ir,w)}}
A.I5.prototype={
A(d){var x=null,w=B.b0(9999),v=B.b0(9999),u=B.b0(9999),t=B.dr(C.an,1),s=y.p,r=B.b([],s),q=this.e
if(q!=null)C.b.M(r,B.b([B.cV(q,C.h,x,14),C.bs],s))
r.push(B.l(this.c,x,x,x,B.E(C.h,13,C.O),x,x,x))
return B.e4(!1,C.Y,!0,w,B.fc(!1,v,!0,B.bk(x,B.au(r,C.o,C.f,C.P,0,x,x),C.r,x,x,new B.bb(x,x,t,u,x,x,C.I),x,x,x,x,C.kF,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),C.r,C.at,0,x,x,x,x,x,C.bL)}}
A.IB.prototype={
A(d){var x,w,v,u,t=null,s=y.p,r=B.b([B.kF(new A.bj4(this)),C.c3,D.a70,C.x],s),q=this.c.w
if(q.length===0)r.push(B.bL(t,B.au(B.b([D.aaw,C.aF,B.aQ(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",t,t,t,B.E(C.w,14,C.k),t,t,t),1)],s),C.o,C.f,C.i,0,t,t),C.at,t,C.G,t,3))
else{x=B.b([],s)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
C.b.M(x,B.b([new A.aeT(u.a,u.b,u.c==="revenue",u.d,t),C.a0],s))}r.push(B.ai(x,C.o,C.f,C.i))}return B.ai(r,C.ab,C.f,C.i)}}
A.aeT.prototype={
A(d){var x=this,w=null,v=x.e,u=v?C.aP:C.at,t=B.dr(v?C.n:C.an,1),s=B.b0(4),r=x.c
s=B.bk(C.a_,B.l(C.c.a1(r,0,1),w,w,w,B.cc(C.h,14,C.q),w,w,w),C.r,w,w,new B.bb(u,w,t,s,w,w,C.I),w,36,w,w,w,w,w,36)
r=B.l(r+" \xb7 "+x.d,1,C.ai,w,B.E(C.h,14,C.O),w,w,w)
u=v?"Erl\xf6s":"Aufwand"
t=y.p
u=B.aQ(B.ai(B.b([r,B.l(u,w,w,w,B.E(C.w,12,C.k),w,w,w)],t),C.E,C.f,C.i),1)
r=$.e9().aw(x.f)
return B.bL(w,B.au(B.b([s,C.aF,u,B.l(r,w,w,w,B.E(v?C.aO:C.h,15,C.O),w,w,w)],t),C.o,C.f,C.i,0,w,w),w,w,C.e4,w,3)}}
A.Hd.prototype={
A(d){var x=null
return B.bL(C.ak,B.au(B.b([D.aaR,C.aF,B.aQ(B.l(this.c,x,x,x,B.E(C.h,14,C.k),x,x,x),1)],y.p),C.o,C.f,C.i,0,x,x),C.fz,x,C.G,x,3)}}
A.a5p.prototype={
dw(d,e){return B.dx(e.aC($.bJF(),y.e),new A.aHC(),new A.aHD(),new A.aHE(),!1,!0,!1,y.X,y.l)}}
A.Hx.prototype={
A(d){var x=null,w=this.c,v=w.x,u=v>0,t=u?w.a.c/v:0,s=u?w.r.a/v:0
v=y.p
u=B.b([D.ara,C.x,B.kF(new A.bbd(this,t,100-w.w.a,s)),C.x,new A.ajh(x),C.aB,D.ar5,C.x,B.bL(x,new A.agk(w,x),x,x,C.G,x,3),C.aB,D.ar0,C.x,new A.agB(w,x),C.aB,D.ar4,C.x,new A.akW(w,x),C.aB,D.ar2,C.x,new A.ahn(w,x)],v)
if(w.f.length!==0)C.b.M(u,B.b([C.aB,D.ar7,C.x,new A.aqt(w,x)],v))
return B.ai(u,C.ab,C.f,C.i)}}
A.ajh.prototype={
A(d){var x=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",x,x,x,B.E(C.w,11,C.k).eT(1.35),x,x,x)}}
A.aks.prototype={
A(d){var x,w,v,u,t,s,r=this,q=null
if(r.x)x=C.c.cG(r.d,"-")?C.ak:C.aO
else x=C.h
w=y.p
v=B.b([B.aQ(B.l(r.c.toUpperCase(),q,q,q,B.E(C.w,10,C.q).hF(0.6),q,q,q),1)],w)
u=r.Q
if(u!=null){t=B.dr(C.ak,0.8)
s=B.b0(4)
v.push(B.bk(q,B.l("Ziel "+u,q,q,q,B.E(C.ak,9,C.q),q,q,q),C.r,q,q,new B.bb(q,q,t,s,q,q,C.I),q,q,q,q,C.mX,q,q,q))}v=B.b([B.au(v,C.o,C.f,C.i,0,q,q),C.aY,new A.a3I(C.AV,C.dX,B.l(r.d,q,q,q,B.cc(x,22,C.q),q,q,q),q)],w)
u=r.e
if(u!=null)v.push(B.l(u,2,C.ai,q,B.E(C.w,10,C.aQ),q,q,q))
v.push(C.cL)
v.push(B.au(B.b([new A.Tz("Vormonat",r.r,q),C.cV,new A.Tz("Vorjahr",r.f,q)],w),C.o,C.f,C.i,0,q,q))
v.push(C.cL)
v.push(B.aQ(new A.aph(r.w,r.y,r.z,q),1))
return B.bL(q,B.ai(v,C.E,C.f,C.i),q,q,C.dn,q,3)}}
A.Tz.prototype={
A(d){var x,w,v,u,t,s=null,r=this.d
if(r==null){r=B.b0(4)
return B.bk(s,B.l(this.c+" \u2014",s,s,s,B.E(C.w,9,C.q),s,s,s),C.r,s,s,new B.bb(C.an,s,s,r,s,s,C.I),s,s,s,s,C.mX,s,s,s)}x=r>=0
w=x?C.aO:C.ak
v=w.mi(0.12)
u=B.dr(w,0.7)
t=B.b0(4)
return B.bk(s,B.au(B.b([B.cV(x?F.a7Q:D.a7P,w,s,10),F.atm,B.l(this.c+" "+C.d.am(r,1)+" %",s,s,s,B.E(w,9,C.q),s,s,s)],y.p),C.o,C.f,C.P,0,s,s),C.r,s,s,new B.bb(v,s,u,t,s,s,C.I),s,s,s,s,C.mX,s,s,s)}}
A.aph.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
if(k.length<2)return C.aw
x=B.b([],y.U)
for(w=0;w<k.length;++w)x.push(new A.es(w,k[w]))
v=C.b.kk(k,new A.bir())
u=C.b.kk(k,new A.bis())
t=this.d
s=t!=null
if(s){if(t<v)v=t
if(t>u)u=t}r=this.e
q=r!=null
if(q){if(r<v)v=r
if(r>u)u=r}p=Math.abs(u-v)<0.001
k=new A.bit(k.length-1)
o=p?v-1:v
n=p?u+1:u
m=A.a3N(l,!1)
x=B.b([A.aHT(l,2,A.avm(!1,C.n.mi(0.16),0,l,!0,D.vx),C.n,0.35,l,D.Dc,l,!0,!1,!0,!1,D.Ew,!1,10,D.XV,!0,C.l7,x)],y.u)
if(s)x.push(k.$1(t))
if(q)x.push(k.$1(r))
return new A.Nv(A.bsh(l,l,l,D.aiH,m,D.B8,D.D8,D.Dd,x,D.ad0,l,n,l,o,D.Xg,D.aiI,D.a7v),C.ap,C.ac,l,l)}}
A.agk.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c.d
if(q.length===0)return new A.TY("Noch keine Trend-Daten f\xfcr den Zeitraum.",r)
x=C.b.fT(q,0,new A.b2x())
w=x>0?x*1.15:10
v=B.b([],y.O)
for(u=y.Y,t=0;t<q.length;++t){s=q[t]
v.push(A.avv(B.b([A.a_w(r,r,D.AC,r,C.n,r,r,r,s.b,6),A.a_w(r,r,D.AC,r,C.h,r,r,r,s.c,6)],u),2,r,r,t))}return B.cn(A.bxG(A.avo(r,r,v,r,r,A.a3N(r,!1),r,new A.y3(!0,!0,r,new A.b2y(),A.Z3(),!1,r,A.at0(),A.Z3()),r,w,r,r,new A.uv(!0,new A.oO(16,r,new A.pI(!0,new A.b2z(this),46,r),!0),D.k7,D.k7,new A.oO(16,r,new A.pI(!0,new A.b2A(q),26,r),!0)))),220,r)},
aJ9(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.agB.prototype={
A(d){var x,w,v,u,t,s=null,r=B.b(["Aktuell","Vormonat","Vorjahr"],y.gM),q=this.c,p=q.a,o=q.c
q=q.b
x=y.n
w=B.b([p.c,o.c,q.c],x)
v=B.b([p.e,o.e,q.e],x)
x=y.gj
q=B.P(new B.a9(w,new A.b3i(),x),y.i)
C.b.M(q,new B.a9(v,new A.b3j(),x))
u=C.b.fT(q,0,new A.b3k())
q=u>0?u*1.2:10
p=B.b([],y.O)
for(o=y.Y,t=0;t<3;++t)p.push(A.avv(B.b([A.a_w(s,s,s,s,C.n,s,s,s,w[t],14),A.a_w(s,s,s,s,C.aO,s,s,s,v[t],14)],o),4,s,s,t))
return B.bL(s,B.cn(A.bxG(A.avo(s,s,p,s,s,A.a3N(s,!1),s,D.Dd,s,q,s,s,new A.uv(!0,D.k7,D.k7,D.k7,new A.oO(16,s,new A.pI(!0,new A.b3l(r),26,s),!0)))),200,s),s,s,C.G,s,3)}}
A.akW.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c.e
if(m.length===0)return D.aFP
x=new B.a9(m,new A.bbH(),B.ab(m).i("a9<1,N>")).kk(0,new A.bbI())
w=y.p
v=B.b([],w)
for(u=m.length,t=0;t<m.length;m.length===u||(0,B.K)(m),++t){s=m[t]
r=B.l(s.b,n,n,n,B.E(C.h,14,C.q),n,n,n)
q=$.e9()
p=s.d
o=new B.aT(4,4)
p=B.b([B.au(B.b([new B.qJ(1,C.hF,B.ai(B.b([r,B.l(""+s.e+" Verk\xe4ufe \xb7 \xd8 "+q.aw(s.f),n,n,n,B.E(C.w,12,C.aQ),n,n,n)],w),C.E,C.f,C.i),n),C.be,B.l(q.aw(p),n,n,n,B.cc(C.h,16,C.q),n,n,n)],w),C.o,C.f,C.i,0,n,n),C.cL,new B.CG(new B.d2(o,o,o,o),C.bI,B.a5E(C.an,8,C.d.c4(p/x,0,1),D.Aq),n)],w)
r=C.b.gaf(m)
if(s!==r)r=B.H(s)===B.H(r)&&B.Z6(s.gbH(),r.gbH())
else r=!0
if(!r)p.push(C.x)
C.b.M(v,p)}return B.bL(n,B.ai(v,C.o,C.f,C.i),n,n,C.G,n,3)}}
A.ahn.prototype={
A(d){var x=null,w=this.c.r
return B.bL(x,B.au(B.b([B.aQ(new A.Ip("Aktive Kunden",""+w.c,x),1),B.aQ(new A.Ip("K\xe4ufe",""+w.a,x),1),B.aQ(new A.Ip("\xd8-Warenkorb",$.e9().aw(w.d),x),1)],y.p),C.o,C.f,C.i,0,x,x),x,x,C.G,x,3)}}
A.Ip.prototype={
A(d){var x=null
return B.ai(B.b([B.l(this.c.toUpperCase(),x,x,x,B.E(C.w,10,C.q).hF(0.6),x,x,x),C.cK,B.l(this.d,x,x,x,B.cc(C.h,20,C.q),x,x,x)],y.p),C.E,C.f,C.P)}}
A.aqt.prototype={
A(d){var x,w,v,u,t,s=null,r=this.c.f,q=new B.a9(r,new A.bkl(),B.ab(r).i("a9<1,N>")).kk(0,new A.bkm()),p=y.p,o=B.b([],p)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.K)(r),++w){v=r[w]
u=v.d
t=new B.aT(4,4)
u=B.b([B.au(B.b([new B.qJ(1,C.hF,B.l(v.b,1,C.ai,s,B.E(C.h,13,C.q),s,s,s),s),B.l(""+v.c+"\xd7 ",s,s,s,B.E(C.w,12,C.O),s,s,s),B.l($.e9().aw(u),s,s,s,B.E(C.h,13,C.q),s,s,s)],p),C.o,C.f,C.i,0,s,s),C.aY,new B.CG(new B.d2(t,t,t,t),C.bI,B.a5E(C.an,6,C.d.c4(u/q,0,1),D.Aq),s)],p)
t=C.b.gaf(r)
if(v!==t)t=B.H(v)===B.H(t)&&B.Z6(v.gbH(),t.gbH())
else t=!0
if(!t)u.push(C.a0)
C.b.M(o,u)}return B.bL(s,B.ai(o,C.o,C.f,C.i),s,s,C.G,s,3)}}
A.TY.prototype={
A(d){var x=null
return B.bL(x,B.l(this.c,x,x,x,B.E(C.w,13,C.k),x,x,x),C.at,x,C.G,x,3)}}
A.b8.prototype={
k(d,e){var x
if(e==null)return!1
if(this!==e)x=y.E.b(e)&&B.H(this)===B.H(e)&&B.Z6(this.gbH(),e.gbH())
else x=!0
return x},
gu(d){return(B.ex(B.H(this))^B.bFD(this.gbH()))>>>0},
j(d){B.byV()
return B.H(this).j(0)}}
A.K_.prototype={
Y(){return new A.Sx(B.y(y.S,y.I),new A.avy(B.y(y.s,y.T)),null,null)}}
A.Sx.prototype={
A(d){var x,w=this,v=w.a1k(),u=w.CW
u.toString
u=w.a1l(u.ar(0,w.ghA().gp(0)))
x=w.a1l(v)
w.a.toString
return new A.JV(new A.a_v(u,x,null),v,null)},
a1l(d){var x,w,v,u,t,s
if(!d.cy.a)return d
x=B.b([],y.O)
for(w=d.ch,v=this.cy,u=0;u<w.length;++u){t=w[u]
s=v.h(0,u)
if(s==null)s=t.e
x.push(A.avv(t.c,t.d,!1,s,t.a))}return d.aOm(x)},
a1k(){var x,w,v=this,u=v.a.r,t=u.x,s=isNaN(t)
if(s||isNaN(u.y)){x=v.db.Ua(u.ch)
if(s)t=x.a
s=u.y
u=u.aPh(isNaN(s)?x.b:s,t)}w=u.cy
if(w.a){v.cx=w.b
return u.aOn(A.bqZ(!1,!0,!0,w.d,w.c,v.garf(),w.f,w.e))}return u},
arg(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(!d.gaeO()||e==null||e.a==null){x=w.cy
w.L(x.gaNM(x))
return}w.L(new A.b15(w,e))},
nP(d){var x=this
x.CW=y.bn.a(d.$3(x.CW,x.a1k(),new A.b16(x)))}}
A.nu.prototype={
UL(d,e,f,g){var x=this,w=d==null?x.ch:d,v=e==null?x.cy:e,u=f==null?x.y:f,t=g==null?x.x:g
return A.avo(x.cx,x.as,w,v,x.z,x.a,x.at,x.c,x.CW,u,t,x.e,x.d)},
aPh(d,e){return this.UL(null,null,d,e)},
aOn(d){return this.UL(null,d,null,null)},
aOm(d){return this.UL(d,null,null,null)},
WG(d,e,f){var x,w,v,u=A.ke(d.ch,e.ch,f,A.bYB(),y.dB),t=B.aa(d.CW,e.CW,f),s=A.bz1(d.d,e.d,f),r=A.bAZ(d.e,e.e,f),q=A.bz_(d.c,e.c,f),p=e.a
p=A.a3N(B.a_M(d.a.b,p.b,f),p.a)
x=B.aa(d.y,e.y,f)
w=B.aa(d.x,e.x,f)
v=B.aa(d.z,e.z,f)
s=A.avo(e.cx,B.X(d.as,e.as,f),u,e.cy,v,p,A.byX(d.at,e.at,f),q,t,x,w,r,s)
return s},
gbH(){var x=this
return[x.ch,x.CW,x.cx,x.d,x.cy,x.y,x.x,x.z,x.c,x.a,x.e,x.as,x.at]}}
A.avn.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fu.prototype={
gdm(d){var x,w=this.c
if(w.length===0)return 0
x=new B.a9(w,new A.avw(),B.ab(w).i("a9<1,N>")).kk(0,new A.avx())
w=w.length
return x+(w-1)*this.d},
gbH(){var x=this
return[x.a,!1,x.c,x.d,x.e]}}
A.i8.prototype={
gbH(){var x=this
return[x.a,x.b,x.e,x.f,x.r,x.w,x.x,x.y,x.c,x.d]}}
A.mj.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a_s.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.a_x.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,!1,!0]}}
A.acm.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_y.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,!1,!1,x.z,x.Q,x.as]}}
A.Ce.prototype={
gbH(){return[this.a,this.b,C.cX,C.u,null]}}
A.K0.prototype={}
A.a_z.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.a,x.b]}}
A.xe.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WG(w,x,d)}}
A.afF.prototype={}
A.afJ.prototype={}
A.afK.prototype={}
A.afM.prototype={}
A.afN.prototype={}
A.afO.prototype={}
A.afP.prototype={}
A.afQ.prototype={}
A.afR.prototype={}
A.avy.prototype={
Ua(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(d.length===0)return new A.u6(0,0,!1)
w=new A.yP(d,y.s)
v=this.a
if(v.aD(0,w)){v=v.h(0,w)
u=v.a
v=v.b
return new A.u6(u,v,!0)}x=null
try{x=C.b.qc(d,new A.avz())}catch(t){return new A.u6(0,0,!1)}s=Math.max(x.c[0].a,x.c[0].b)
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
A.afL.prototype={}
A.avA.prototype={
i4(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a_q(d,e,f)
x=f.a
w=f.b
v=x.ch
if(v.length===0)return
u=e.b
v=m.abp(u,A.bqY(x,u.a),v)
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
new B.iJ(q,B.ab(q).i("iJ<1>")).aq(0,new A.avB(u,r,s,t))
x.push(new A.a4r(r))}return x},
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
a3=B.P6(i,Math.min(b2.dC(a0,b4,b7),a2-d),h,a2,f,e,l,g)}else{a4=b2.dC(Math.min(u,a1),b4,b7)
a3=B.P6(i,a4,h,Math.max(b2.dC(a0,b4,b7),a4+d),f,e,l,g)}l=b2.f
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
a8=b2.dC(g,b4,b7)
f=a7.b
a9=b2.dC(f,b4,b7)
b2.f.r=a7.c.gp(0)
b0=f<g?new B.D(i,a8,h,a9):new B.D(i,a9,h,a8)
J.aX(v.save())
v.clipRect(B.dF(b0),$.oG()[1],!0)
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
o=new B.h2(a3)
b1.e.push(o)
l=b1.d
if(l!=null)o.hD(l)
w.fR(A.ayF(b1,p.r),b2.r)}}}},
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
if(w!==D.aBF)k=w===D.Z5&&t>=r
else k=!0
w=b0.c
j=k?m-n-w:l+w
i=a3.Zr(u,o,b0.d,b0.e)
w=i+o
u=j+n
h=new B.D(i,j,w,u)
t=b0.a
g=new B.aT(t,t)
f=B.F7(h,g,g,g,g)
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
a1.c=a0.b}a8.Vn(e,new A.avC(a3,a8,f,x,new B.m(r.a-q/2,t.b+p.b-d.b+s)),new B.m(f.a,f.b),new B.m(0,s),new B.G(w,u))},
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
r=B.P6(i.a,w,i.c,u,v,t,s,x)}else{x=i.a
w=e.b
v=i.c
u=e.a
if(f===g-1){t=Math.max(o.dC(w,j,k),i.b)
s=o.dC(u,j,k)
w=u<w
u=w?C.Z:new B.aT(i.z,i.Q)
q=w?C.Z:new B.aT(i.x,i.y)
p=w?new B.aT(i.e,i.f):C.Z
r=B.P6(x,t,v,s,u,q,p,w?new B.aT(i.r,i.w):C.Z)}else r=B.bsY(x,o.dC(w,j,k),v,o.dC(u,j,k),C.Z)}x=o.r
x===$&&B.a()
n=n.a
x.r=n.gp(n)
x.c=Math.min(m,h/2)
d.a.eL(r,o.r)},
W2(b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b2.a,a8=b2.b,a9=a8.ch
if(a9.length===0)return null
if(a6.y==null)a6.y=a6.abp(b1,A.bqY(a7,b1.a),a7.ch)
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
break}++a2}return new A.a_z(e,r,d,p,a1,a0,new A.es(e.a,w),new B.m(o,u))}}return null}}
A.a4r.prototype={}
A.a_v.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.avA()
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
u=new A.a9v(this.d,w,v,u,d,C.bn,new B.bn(),B.aG(y.v))
u.bj()
u.Ym(w.cy)
u.aef()
return u},
bx(d,e){e.sii(0,this.d)
e.sY7(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9v.prototype={
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
v.fS.i4(x,new A.a_Z(u,w),new A.vk(v.aB,v.hX,v.cV,y.Q))
t.restore()},
Zk(d){var x=this,w=x.gC(0)
return new A.K0(x.fS.W2(d,w,new A.vk(x.aB,x.hX,x.cV,y.Q)))}}
A.a_l.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as,x.a,x.b,x.at]}}
A.Cd.prototype={
K(){return"AxisSide."+this.b}}
A.t9.prototype={}
A.pI.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.aaU.prototype={
gbH(){return[!1,0,0,0]}}
A.oO.prototype={
gbH(){return[this.b,this.a,this.c,!0]}}
A.uv.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.es.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.es))return!1
x=w.a
if(isNaN(x)&&isNaN(w.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===x&&e.b===w.b},
gu(d){return C.d.gu(this.a)^C.d.gu(this.b)}}
A.y3.prototype={
gbH(){var x=this
return[x.a,!0,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.pb.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.aco.prototype={
gbH(){return[this.a,this.b]}}
A.Pa.prototype={
gbH(){return[this.a,this.b]}}
A.mC.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.mZ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.kx.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.kY.prototype={
gbH(){var x=this
return[x.e,x.w,x.a,x.c,x.d,x.f,x.r,x.x]}}
A.a4C.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.acM.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.LV.prototype={
gbH(){return[this.a,this.b,!0]}}
A.uu.prototype={}
A.M5.prototype={
acO(d,e,f){var x,w
$.af()
x=B.aR()
w=this.a
x.r=w.gp(w)
x.b=C.bd
d.iO(f,this.b,x)},
gbH(){return[this.a,this.b,this.c,0]}}
A.afA.prototype={}
A.afE.prototype={}
A.aiH.prototype={}
A.aiX.prototype={}
A.aiY.prototype={}
A.aj_.prototype={}
A.aj0.prototype={}
A.ajN.prototype={}
A.ajM.prototype={}
A.ajO.prototype={}
A.anb.prototype={}
A.aoW.prototype={}
A.aoX.prototype={}
A.aqx.prototype={}
A.ar9.prototype={}
A.ar8.prototype={}
A.ara.prototype={}
A.avd.prototype={
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
A.JU.prototype={
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
v=$.bq6().M8(a0.w,w,a0.r,!1,a0.f,!1)
for(u=new B.f8(v.a(),v.$ti.i("f8<1>")),t=x.b,s=a1.w,r=a1.x;u.t();){q=u.b
if(!r.$1(q))continue
p=e.fb(q,x,a3)
o=new B.m(p,0)
n=new B.m(p,t)
m=s.$1(q)
q=e.a
q===$&&B.a()
l=m.a
k=m.b
j=B.kM(o,n)
if(k!=null){q.r=C.B.gp(0)
q.seQ(k.mJ(0,j))}else{if(l==null)l=C.D
q.r=l.gp(l)
q.seQ(d)}l=m.c
q.c=l
if(l===0){q.seQ(d)
l=B.bY(q.r)
q.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}a2.Df(o,n,e.a,m.d)}}i=a1.c
if(i==null)i=$.lg().Oc(x.b,a0.y-a0.x)
v=$.bq6().M8(a0.z,i,a0.y,!1,a0.x,!1)
for(u=new B.f8(v.a(),v.$ti.i("f8<1>")),s=a1.d,h=x.a,a1=a1.e;u.t();){r=u.b
if(!a1.$1(r))continue
g=s.$1(r)
f=e.dC(r,x,a3)
o=new B.m(0,f)
n=new B.m(h,f)
r=e.a
r===$&&B.a()
q=g.a
l=g.b
j=B.kM(o,n)
if(l!=null){r.r=C.B.gp(0)
r.seQ(l.mJ(0,j))}else{if(q==null)q=C.D
r.r=q.gp(q)
r.seQ(d)}q=g.c
r.c=q
if(q===0){r.seQ(d)
q=B.bY(r.r)
r.r=B.aA(0,q.v()>>>16&255,q.v()>>>8&255,q.v()&255).gp(0)}a2.Df(o,n,e.a,g.d)}},
aQz(d,e){var x,w,v=e.a.as
if((v.v()>>>24&255)/255===0)return
x=d.b
w=this.b
w===$&&B.a()
w.r=v.gp(0)
d.a.h9(new B.D(0,0,0+x.a,0+x.b),this.b)},
aQJ(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(x=d.a.a,w=n.b,v=0;v<l.length;l.length===k||(0,B.K)(l),++v){u=l[v]
t=B.kM(new B.m(o.fb(u.a,n,e),0),new B.m(o.fb(u.b,n,e),w))
s=o.e
s===$&&B.a()
r=u.c
q=u.d
if(q!=null){s.r=C.B.gp(0)
s.seQ(q.mJ(0,t))}else{s.r=(r==null?C.D:r).gp(0)
s.seQ(null)}p=o.e.ek()
x.drawRect(B.dF(t),p)
p.delete()}m=m.a
l=m.length
if(l!==0)for(k=d.a.a,x=n.a,v=0;v<m.length;m.length===l||(0,B.K)(m),++v){u=m[v]
t=B.kM(new B.m(0,o.dC(u.a,n,e)),new B.m(x,o.dC(u.b,n,e)))
w=o.e
w===$&&B.a()
s=u.c
r=u.d
if(r!=null){w.r=C.B.gp(0)
w.seQ(r.mJ(0,t))}else{w.r=(s==null?C.D:s).gp(0)
w.seQ(null)}p=o.e.ek()
k.drawRect(B.dF(t),p)
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
j=B.kM(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seQ(k.mJ(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seQ(null)}l=q.c
o.c=l
if(l===0){o.seQ(null)
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
j=B.kM(n,m)
if(k!=null){o.r=C.B.gp(0)
o.seQ(k.mJ(0,j))}else{if(l==null)l=C.D
o.r=l.gp(l)
o.seQ(null)}l=q.c
o.c=l
if(l===0){o.seQ(null)
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
A.JV.prototype={
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
akw(d){var x,w=this,v=null,u=w.d,t=A.brK(u.d),s=u.a
s=s.a&&A.bKX(s.b)?s.b:v
x=B.b([B.bk(v,w.c,C.r,v,v,new B.bb(v,v,s,v,v,v,C.I),v,v,v,t,v,v,v,v)],y.p)
t=new A.avf(x)
if(w.gakb())C.b.hs(x,t.$1(!0),new A.A4(D.Ax,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gakd())C.b.hs(x,t.$1(!0),new A.A4(D.me,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gakc())C.b.hs(x,t.$1(!0),new A.A4(D.Ay,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
if(w.gak9())C.b.hs(x,t.$1(!0),new A.A4(D.dx,u,new B.G(B.L(1/0,d.a,d.b),B.L(1/0,d.c,d.d)),v))
return x},
A(d){return B.kF(new A.ave(this))}}
A.QB.prototype={
Y(){return new A.WS(new B.ba(null,y.eF))}}
A.WS.prototype={
awD(){switch(this.a.c.a){case 0:return C.f1
case 1:return C.hn
case 2:return C.dX
case 3:return C.ho}},
ax8(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
awF(d){this.a.toString
return},
az(){this.aQ()
$.cw.x1$.push(this.ga3M())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3M())},
A(d){var x,w=this,v=null,u=w.a
u.toString
x=w.ax8()
return B.btv(B.aZP(0,B.bk(w.awD(),u.e,C.r,v,v,v,v,v,w.d,x,v,v,v,v)),C.p)}}
A.aaV.prototype={
bl(d){return A.bKN(this.f,this.r,this.e)},
bx(d,e){var x=this.e
if(e.B!==x){e.B=x
e.a7()}x=this.f
if(e.V!==x){e.V=x
e.a7()}x=this.r
if(e.U!==x){e.U=x
e.a7()}}}
A.a_m.prototype={
hi(d){if(!(d.b instanceof B.hb))d.b=new B.hb(null,null,C.p)},
hQ(d){if(this.B===C.aZ)return this.xQ(d)
return this.acq(d)},
aJj(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8l(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dz(d){var x=this.a8k(d,B.hr())
switch(this.B.a){case 0:return d.c1(new B.G(x.a,x.b))
case 1:return d.c1(new B.G(x.b,x.a))}},
a8k(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.B===C.aZ?d.b:d.d,n=p.ag$
for(x=y.L,w=d.b,v=d.d,u=0,t=0;n!=null;){s=n.b
s.toString
x.a(s)
switch(p.B.a){case 0:r=B.fQ(v,null)
break
case 1:r=B.fQ(null,w)
break
default:r=null}q=e.$2(n,r)
t+=p.a8l(q)
u=Math.max(u,p.aJj(q))
n=s.aG$}return new A.bbj(o<1/0?o:t,u)},
cu(){var x,w,v,u,t,s,r,q=this,p=y.k.a(B.I.prototype.ga6.call(q)),o=q.a8k(p,B.md()),n=o.a,m=o.b
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
r=t.b-q.a8l(s==null?B.V(B.Z("RenderBox was not laid out: "+B.H(x).j(0)+"#"+B.c2(x))):s)/2
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
A.bbj.prototype={}
A.avg.prototype={}
A.jC.prototype={
gbH(){return[this.a,this.b]}}
A.nt.prototype={}
A.afB.prototype={}
A.afC.prototype={
aN(d){var x,w,v
this.fl(d)
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
A.afD.prototype={}
A.Sv.prototype={
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
gaZ2(){var x=this.d,w=A.brK(x.d),v=A.byZ(x.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,w.b,0,w.d).ac(0,new B.aj(0,v.b,0,v.d))
case 1:case 3:return new B.aj(w.a,0,w.c,0).ac(0,new B.aj(v.a,0,v.c,0))}},
gahc(){var x=this.d,w=A.byZ(x.a),v=A.brK(x.d)
switch(this.c.a){case 2:case 0:return v.gcY(0)+v.gd_(0)+(w.gcY(0)+w.gd_(0))
case 1:case 3:return v.gen()+w.gen()}},
aVd(d,e,f,g){var x,w,v,u,t,s,r,q=this,p=q.gov().c.d
if(p==null)p=$.lg().Oc(d,f-e)
x=q.c
w=x!==D.me
if((!w||x===D.dx)&&q.d instanceof A.nu){v=y.B.a(q.d)
if(v.ch.length===0)return B.b([],y.g)
u=A.bqY(v,d)
x=new B.iJ(u,B.ab(u).i("iJ<1>"))
t=x.giC(x).eZ(0,new A.aWL(v),y.W).fV(0)}else{s=$.bq6()
x=!w||x===D.dx
w=q.d
r=s.aUt(x?w.w:w.z,p,f,e)
w=B.nY(r,new A.aWM(q,f,e,d),r.$ti.i("t.E"),y.W)
t=B.P(w,B.j(w).i("t.E"))}x=B.ab(t).i("a9<1,nt>")
x=B.P(new B.a9(t,new A.aWN(q,e,f,p,g,d),x),x.i("av.E"))
return x},
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.gov()
x=k.gov()
x=x.c
x=!(x.a&&x.c!==0)
if(x)return B.bk(j,j,C.r,j,j,j,j,j,j,j,j,j,j,j)
x=k.c
w=x===D.me
v=!w
u=!v||x===D.dx
t=k.e
s=u?t.a:t.b
u=k.ghC()
t=!v||x===D.dx?C.a8:C.aZ
r=B.b([],y.p)
if(x===D.Ax||w)k.gov()
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
r.push(B.bk(j,A.bS0(new A.avg(),o,k.aVd(s-n,m,v,x)),C.r,j,j,j,j,q,j,p,j,j,j,w))}if(x===D.Ay||x===D.dx)k.gov()
return new B.eR(u,j,j,B.bNA(r,C.o,t,j,C.f,C.P,0,j,j,C.dT),j)}}
A.a_B.prototype={
gbH(){return[this.a,this.b]}}
A.a3M.prototype={
gbH(){return[this.a,this.b]}}
A.Mc.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a3O.prototype={
gaaK(d){return!1},
gbH(){return[!1,!1,!1,!1]}}
A.avL.prototype={}
A.aC2.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.afU.prototype={}
A.aiU.prototype={}
A.aiV.prototype={}
A.aj1.prototype={}
A.K3.prototype={
i4(d,e,f){}}
A.vk.prototype={}
A.ha.prototype={
gdH(){return null},
gaeO(){var x,w=this
B.bu()
B.bu()
B.bu()
x=w instanceof A.Mb
if(x)return!0
return!(w instanceof A.M8)&&!(w instanceof A.M7)&&!(w instanceof A.M9)&&!(w instanceof A.M6)&&!x&&!(w instanceof A.Ma)}}
A.a3S.prototype={
gdH(){return this.a.b}}
A.a3T.prototype={
gdH(){return this.a.b}}
A.a3U.prototype={
gdH(){return this.a.b}}
A.M7.prototype={}
A.M8.prototype={}
A.a3X.prototype={
gdH(){return this.a.b}}
A.Ma.prototype={}
A.Mb.prototype={
gdH(){return this.a.b}}
A.a3R.prototype={
gdH(){return this.a.b}}
A.a3Q.prototype={
gdH(){return this.a.b}}
A.M6.prototype={
gdH(){return this.a.b}}
A.a3V.prototype={
gdH(){return this.a.gdH()}}
A.a3W.prototype={
gdH(){return this.a.gdH()}}
A.M9.prototype={
gdH(){return this.a.gdH()}}
A.Fj.prototype={
Ym(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aef(){var x=this,w=null,v=x.ad=B.bsE(w,w)
v.ay=new A.aS2(x)
v.ch=new A.aS3(x)
v.CW=new A.aS4(x)
v.cy=new A.aS5(x)
v.cx=new A.aS6(x)
v=x.aE=B.G8(w,-1,w)
v.B=new A.aS7(x)
v.a3=new A.aS8(x)
v.V=new A.aS9(x)
v=x.bz=B.a5L(w,x.a2,w)
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
x.rA(d)}else if(y.gJ.b(d))w.l5(new A.a3W(d))},
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
aN(d){this.fl(d)
this.an=!0},
aF(d){this.an=!1
this.ff(0)},
$ije:1}
A.Nv.prototype={
Y(){return new A.UJ(B.b([],y.r),B.y(y.S,y.I),new A.aHV(B.y(y.x,y.dj)),null,null)}}
A.UJ.prototype={
A(d){var x,w=this,v=w.a3O(),u=w.CW
u.toString
u=w.aaj(u.ar(0,w.ghA().gp(0)))
x=w.aaj(v)
w.a.toString
return new A.JV(new A.a5C(u,x,null),v,null)},
aaj(d){var x,w
if(!d.cx.a)return d
x=d.ch
w=B.ab(x).i("a9<1,e2>")
x=B.P(new B.a9(x,new A.bbo(this,d),w),w.i("av.E"))
return d.aPe(x,this.cy)},
a3O(){var x,w,v,u,t=this,s=t.a.r,r=s.f,q=isNaN(r)
if(q||isNaN(s.r)||isNaN(s.x)||isNaN(s.y)){x=t.dx.Ua(s.ch)
if(q)r=x.a
q=s.r
if(isNaN(q))q=x.b
w=s.x
if(isNaN(w))w=x.c
v=s.y
s=s.aPt(q,isNaN(v)?x.d:v,r,w)}u=s.cx
if(u.a){t.cx=u.b
s=s.aOT(new A.E0(u.e,u.f,u.r,u.w,!0,u.y,u.z,!0,t.gaxX(),u.c,u.d))}return s},
axY(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(d.gaeO())x=(e==null?null:e.a)==null||e.a.length===0
else x=!0
if(x){w.L(new A.bbm(w))
return}w.L(new A.bbn(w,e))},
nP(d){var x=this
x.CW=y.f3.a(d.$3(x.CW,x.a3O(),new A.bbp(x)))}}
A.pm.prototype={
WG(d,e,f){var x,w,v,u,t,s,r=B.aa(d.f,e.f,f),q=B.aa(d.r,e.r,f),p=B.aa(d.w,e.w,f),o=B.aa(d.x,e.x,f),n=B.aa(d.y,e.y,f),m=B.aa(d.z,e.z,f),l=B.X(d.as,e.as,f),k=e.a
k=A.a3N(B.a_M(d.a.b,k.b,f),k.a)
x=A.byX(d.at,e.at,f)
w=A.bz_(d.c,e.c,f)
v=A.bz1(d.d,e.d,f)
u=A.bAZ(d.e,e.e,f)
t=A.ke(d.ch,e.ch,f,A.c_E(),y.cz)
t.toString
s=A.ke(d.CW,e.CW,f,A.c_D(),y.J)
s.toString
v=A.bsh(l,p,m,s,k,e.Q,x,w,t,e.cx,q,n,r,o,u,e.cy,v)
return v},
UM(d,e,f,g,h,i,j){var x=this,w=d==null?x.ch:d,v=e==null?x.cx:e,u=j==null?x.cy:j,t=h==null?x.f:h,s=f==null?x.r:f,r=i==null?x.x:i,q=g==null?x.y:g
return A.bsh(x.as,x.w,x.z,x.CW,x.a,x.Q,x.at,x.c,w,v,s,q,t,r,x.e,u,x.d)},
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
A.Nw.prototype={
gbH(){return[this.a]}}
A.a_u.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,!1]}}
A.mk.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.JZ.prototype={
gbH(){return[!1,this.b,this.c,!0]}}
A.y2.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.aHF.prototype={
K(){return"LabelDirection."+this.b}}
A.a3P.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.E0.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,!0,x.y,x.z]}}
A.a5D.prototype={
gbH(){return[4,C.hC,16,D.x7,0,120,A.c_G(),!1,!1,!1,0,C.A,A.c_F()]}}
A.mG.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.a,x.b]}}
A.pR.prototype={}
A.rb.prototype={
gbH(){return[this.a,this.b,C.cX,C.u,null]}}
A.ta.prototype={
gbH(){return[this.a,this.b]}}
A.FL.prototype={
gbH(){return[this.a]}}
A.Nx.prototype={}
A.yL.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WG(w,x,d)}}
A.afH.prototype={}
A.afI.prototype={}
A.afV.prototype={}
A.aiW.prototype={}
A.aiZ.prototype={}
A.akz.prototype={}
A.akA.prototype={}
A.akB.prototype={}
A.akD.prototype={}
A.akE.prototype={}
A.akF.prototype={}
A.akG.prototype={}
A.aoV.prototype={}
A.aqw.prototype={}
A.aHV.prototype={
Ua(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length===0)return D.xB
v=new A.yP(d,y.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
s=u.b
r=u.c
u=u.d
return new A.yM(t,s,r,u,!0)}x=null
try{x=C.b.qc(d,new A.aHW())}catch(q){return D.xB}w=null
try{w=C.b.qc(x.a,new A.aHX())}catch(q){return D.xB}p=w.a
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
A.akC.prototype={}
A.aHY.prototype={
i4(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a3.a,a0=d.ch
if(a0.length===0)return
x=d.Q
if(x.gaaK(0)){w=a2.b
v=w.a
w=w.b
$.af()
a2.a.jm(new B.D(0,-40,0+(v+40),-40+(w+40)),B.aR())
a2.aNT(new B.D(0,0,v,w))}e.a_q(a1,a2,a3)
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
if(f.b>g.b)g=f}e.aQL(a1,a2,w,g,new A.FL(h),a3)}},
aQB(d,e,f){var x,w,v,u,t,s,r,q=this,p=d.b,o=A.brJ(e.a)
for(x=o.length,w=0;w<o.length;o.length===x||(0,B.K)(o),++w){v=o[w]
u=q.YU(p,e,v,f)
t=q.aij(p,e,u,v,f)
s=q.YW(p,e,u,v,f,!0)
r=q.aii(p,e,u,v,f)
q.aQE(d,t,q.YT(p,e,u,v,f,!0),f,e)
q.aQy(d,r,s,f,e)
q.aQC(d,u,e)
q.aQA(d,u,e,f)}},
aQF(a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.brJ(a5.a),a8=A.brJ(a6.a)
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
a0.seQ(v.mJ(0,new B.D(n,m,e,d)))}else{a0.r=(r?C.D:w).gp(0)
a0.seQ(null)}$.af()
a1=new B.mn(C.dk,C.bd,C.dQ,C.eh,C.dD).ek()
n=B.dF(new B.D(0,0,t,s))
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
a0=Math.min(t,Math.max(s,B.lc(q.$2(n,l))))
a1=Math.min(t,Math.max(s,B.lc(r.$2(n,l))))
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
a9=B.kM(a2,a4)
if(a5!=null){g.r=C.B.gp(0)
g.seQ(a5.mJ(0,a9))}else{if(a3==null)a3=C.D
g.r=a3.gp(a3)
g.seQ(null)}a3=a8.c
g.c=a3
if(a3===0){g.seQ(null)
a3=B.bY(g.r)
g.r=B.aA(0,a3.v()>>>16&255,a3.v()>>>8&255,a3.v()&255).gp(0)}b1.Df(a2,a4,b0.y,a8.d)
if(f){g=e.b
if(g===e)B.V(B.ra(e.a))
g.acO(u,k,new B.m(i,h))}}},
YV(d,e,f,g,h){var x=this.aik(d,e,f,g,h)
return x},
YU(d,e,f,g){return this.YV(d,e,f,g,null)},
aik(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a4==null,h=i?B.cB($.af().r):a4,g=J.Y(a2),f=g.gq(a2),e=j.fb(g.h(a2,0).a,a0,a3),d=j.dC(g.h(a2,0).b,a0,a3)
if(i){h.aA(new B.f4(e,d))
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
t=new B.KX(q+v.a,r+v.b,t-o,s-m,t,s)
i.push(t)
s=h.d
if(s!=null)t.hD(s)}return h},
YW(d,e,f,g,h,i){var x,w,v,u,t=this
$.af()
x=B.bsf(f)
w=J.Y(g)
v=t.fb(w.h(g,w.gq(g)-1).a,d,h)
u=d.b
x.aA(new B.ct(v,u))
v=t.fb(w.h(g,0).a,d,h)
x.aA(new B.ct(v,u))
x.aA(new B.ct(t.fb(w.h(g,0).a,d,h),t.dC(w.h(g,0).b,d,h)))
x.aA(new B.oX())
return x},
aij(d,e,f,g,h){return this.YW(d,e,f,g,h,!1)},
YT(d,e,f,g,h,i){var x,w,v,u=this
$.af()
x=B.bsf(f)
w=J.Y(g)
v=u.fb(w.h(g,w.gq(g)-1).a,d,h)
x.aA(new B.ct(v,0))
v=u.fb(w.h(g,0).a,d,h)
x.aA(new B.ct(v,0))
x.aA(new B.ct(u.fb(w.h(g,0).a,d,h),u.dC(w.h(g,0).b,d,h)))
x.aA(new B.oX())
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
A.bsD(t,r.b,r.c,new B.D(w,v,u,x.b))
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
A.bsD(t,r.b,r.c,new B.D(w,0,v,u))
d.a.fR(e,s.r)},
aQC(d,e,f){var x=f.db,w=x.a,v=w.v()
if((v>>>24&255)/255===0)return
if(!new B.Np(e,!1,B.b([],y.C)).t())return
v=this.f
v===$&&B.a()
v.d=f.at?C.jQ:C.dQ
v.e=C.eh
v.r=w.gp(0)
v.seQ(null)
v.c=f.x
v.r=w.gp(0)
$.lg()
v.z=new B.yU(C.aC,x.c*0.57735+0.5)
d.a.fR(B.bsg(A.ayF(e,f.cy),x.b),this.f)},
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
A.bsD(u,f.r,f.w,new B.D(r,x,w,v))
u.z=null
u.c=f.x
A.bQ3(u)
d.a.fR(A.ayF(e,f.cy),t.f)},
aQL(b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],y.eg),b0=b7.a,b1=A.bF8(b0),b2=J.Y(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(x=b8.c,w=0;w<b0.length;++w){v=b2.h(b1,w)
if(v==null)continue
u=$.lg().Zq(b3,v.b)
t=v.a
s=x.k(0,C.iA)?new B.k9(1):x
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
j=a6.Zr(b2,m,D.x7,0)
b2=j+m
x=k+l
i=new B.aT(4,4)
h=B.F7(new B.D(j,k,b2,x),i,i,i,i)
g=b0[0]
for(u=b0.length,o=0;o<u;++o){f=b0[o]
if(f.b>g.b)g=f}b0=a6.z
b0===$&&B.a()
u=A.bF7(g)
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
a4=A.bSA(r.r,r.w)
A:{if(D.Dl===a4){a5=a2
break A}if(D.Dm===a4){a5=b2-r.b.c
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
return new A.pR(t,f,g,C.b.io(x,w),w.a,w.b)}else return null}}
A.v2.prototype={}
A.a5C.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.aHY()
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
x.a=D.a_9
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
u=new A.a9I(this.d,w,v,u,d,C.bn,new B.bn(),B.aG(y.v))
u.bj()
u.Ym(w.cx)
u.aef()
return u},
bx(d,e){e.sii(0,this.d)
e.sY7(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9I.prototype={
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
v.fS.i4(x,new A.a_Z(u,w),new A.vk(v.aB,v.hX,v.cV,y.o))
t.restore()},
Zk(d){var x=this,w=x.gC(0)
return new A.Nx(x.fS.W2(d,w,new A.vk(x.aB,x.hX,x.cV,y.o)))}}
A.MC.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a_Z.prototype={
aNT(d){this.a.a.clipRect(B.dF(d),$.oG()[1],!0)
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
x.aA(new B.f4(d.a,d.b))
x.aA(new B.ct(e.a,e.b))
this.a.fR(A.ayF(x,g),f)}}
A.yP.prototype={
gbH(){return[this.a]}}
A.akN.prototype={}
A.a08.prototype={}
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
if(d==null)return D.a_l
x=d.b
w=e/2
return d.aP4(x>w?w:x)},
Oc(d,e){var x,w=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
x=e/w
if(w<=2)return x
return this.aYO(x)},
aYO(d){if(d<1)return this.aHY(d)
return this.a7q(d)},
aHY(d){var x,w,v,u,t,s,r
if(d<0.000001)return d
x=C.d.j(d)
w=x.length
v=w-2
for(u=0,t=2;t<=w;++t){if(x[t]!=="0")break;++u}s=v-u
if(s>2)v-=s-2
r=Math.pow(10,v)
return this.a7q(d*r)/r},
a7q(d){var x,w=C.e.j(C.d.a4(d)).length-1
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
if(v==null)v=C.iH
x=e.a?v.w.c2(e):e
w=B.bP(d,C.v3)
w=w==null?null:w.ay
return w===!0?x.c2(C.lX):x},
ais(d,e,f,g){var x=C.d.aj(g-d,f)
if(Math.abs(e-d)<=x)return d
if(x===0)return d
return d+x}}
A.Pu.prototype={
a3q(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st1(d){var x=this,w=x.ae
if(w===d)return
x.ae=d
if(x.a3q(w)||x.a3q(d))x.a7()
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
if(w!=null){x=w.ap(C.ad,C.iv,w.gdh())
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xD(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xD(x)}}else return new B.G(B.L(0,d.a,d.b),B.L(0,d.c,d.d))},
e6(d,e){var x=this.D$
return x==null?null:x.fJ(C.iv,e)},
cu(){var x,w,v=this,u=v.D$
if(u!=null){u.dG(C.iv,!0)
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
u=B.bux(n.ae,v,n.gC(0))
x=u.b
t=u.a
s=v.a
r=v.b
q=w.yu(t,new B.D(0,0,0+s,0+r))
p=n.gC(0)
o=w.yu(x,new B.D(0,0,0+p.a,0+p.b))
p=q.a
n.D=q.c-p<s||q.d-q.b<r
r=B.pq(o.a,o.b,0)
r.qO(x.a/t.a,x.b/t.b,1,1)
r.fW(-p,-q.b,0,1)
n.cP=r}},
a6m(d,e){var x,w,v,u,t=this,s=t.cP
s.toString
x=B.z3(s)
if(x==null){s=t.cx
s===$&&B.a()
w=t.cP
w.toString
v=B.hZ.prototype.gi3.call(t)
u=t.ch.a
return d.z2(s,e,w,v,u instanceof B.pS?u:null)}else t.kq(d,e.ac(0,x))
return null},
aM(d,e){var x,w,v,u,t=this
if(t.D$==null||t.gC(0).gZ(0)||t.D$.gC(0).gZ(0))return
t.Tn()
x=t.D
x.toString
if(x&&t.eV!==C.r){x=t.cx
x===$&&B.a()
w=t.gC(0)
v=t.ch
u=v.a
u=u instanceof B.ue?u:null
v.sbh(0,d.o0(x,e,new B.D(0,0,0+w.a,0+w.b),t.gaFF(),t.eV,u))}else t.ch.sbh(0,t.a6m(d,e))},
e8(d,e){var x,w=this
if(!w.gC(0).gZ(0)){x=w.D$
x=x==null?null:x.gC(0).gZ(0)
x=x===!0}else x=!0
if(x)return!1
w.Tn()
return d.JL(new A.aSn(w),e,w.cP)},
tp(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eS(d,e){var x
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OF()
else{this.Tn()
x=this.cP
x.toString
e.fU(0,x)}}}
A.a3I.prototype={
bl(d){var x=new A.Pu(this.e,this.f,B.e_(d),C.r,null,new B.bn(),B.aG(y.v))
x.bj()
x.sc8(null)
return x},
bx(d,e){e.st1(this.e)
e.shC(this.f)
e.scC(B.e_(d))
if(C.r!==e.eV){e.eV=C.r
e.bd()
e.ct()}}}
var z=a.updateTypes(["N(pT)","C(es)","~(w,fu)","N(e2,w)","bH(N,t9)","pb(N)","w(pR,pR)","C(fu)","U<nL>(cm<nL>)","Hd(A,bQ)","IB(nM)","Hx(nL)","v8(@)","e2(N)","N(N,pT)","aq(N,t9)","w0(@)","BY(@)","N(v8)","N(w0)","~(ha,K0?)","xe(@)","N(i8)","pT(@)","~(w,i8)","~(@)","jC(nt)","c(nt)","jC(bB<w,N>)","jC(N)","nt(jC)","~(ha,Nx?)","e2(e2)","ut(dO<ut>)","yL(@)","Dl(dO<aCF>)","ta(w)","uu(es,N,e2,w)","rb(mG)","C(e2)","w(v2,v2)","N(fu)","mx(FW<mx>)","pS?(rq,m)","y0(fd<A?>)","w(w,w,N)","i8(i8,i8,N)","mj(mj,mj,N)","Ce?(fu,w,i8,w)","F(fu)","c(N,t9)","es(es,es,N)","C(N)","mC(mC,mC,N)","mZ(mZ,mZ,N)","kx(kx,kx,N)","kY(kY,kY,N)","h(kx)","h(kY)","e2(e2,e2,N)","mk(mk,mk,N)","uu(es,N,e2,w{size:N?})","C(es,e2)","N(m,m)","u<ta>(e2,u<w>)","U<nM>(cm<nM>)","u<rb>(u<mG>)","F(mG)","fu(fu,fu,N)"])
A.aCC.prototype={
$1(d){var x=B.ej(y.f.a(d),y.N,y.z),w=x.h(0,"month")
return new A.pT(J.ak(w==null?"":w),A.oC(x.h(0,"revenue_net")),A.oC(x.h(0,"expense_net")),A.oC(x.h(0,"result_net")))},
$S:z+23}
A.aCD.prototype={
$1(d){var x,w,v,u=B.ej(y.f.a(d),y.N,y.z),t=B.ao(u.h(0,"machine_id")),s=u.h(0,"label")
s=J.ak(s==null?"unbekannt":s)
x=B.ao(u.h(0,"code"))
w=A.oC(u.h(0,"gross"))
v=B.bE(u.h(0,"purchases_count"))
v=v==null?null:C.d.a4(v)
if(v==null)v=0
return new A.v8(t,s,x,w,v,A.oC(u.h(0,"avg_basket")))},
$S:z+12}
A.aCE.prototype={
$1(d){var x,w=B.ej(y.f.a(d),y.N,y.z),v=B.ao(w.h(0,"product_id")),u=w.h(0,"name")
u=J.ak(u==null?"unbekannt":u)
x=B.bE(w.h(0,"quantity"))
x=x==null?null:C.d.a4(x)
if(x==null)x=0
return new A.w0(v,u,x,A.oC(w.h(0,"gross")))},
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
A.bnU.prototype={
$1(d){return new A.ut(d.aC($.ce(),y.A))},
$S:z+33}
A.bnV.prototype={
$1(d){return new A.Dl(d.aC($.bJG(),y.D))},
$S:z+35}
A.bpH.prototype={
$1(d){return E.brI()},
$S:z+42}
A.bnW.prototype={
$1(d){var x=d.aC($.wX(),y.P)
return d.aC($.atE(),y.a).FE(x)},
$S:z+65}
A.bnT.prototype={
$1(d){var x=d.aC($.wX(),y.P)
return d.aC($.atE(),y.a).FA(x)},
$S:z+8}
A.aCB.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atE(),y.a).px(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCA.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atE(),y.a).L7(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCQ.prototype={
$0(){var x=0,w=B.r(y.H),v,u=this,t,s
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:t=u.a
s=$.bqv()
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
$0(){return B.nR(this.a,"/finance/approvals",y.cK)},
$S:0}
A.aCM.prototype={
$0(){var x=this
return x.a.B0(x.b,x.c,x.d)},
$S:0}
A.aCP.prototype={
$0(){return D.aoG},
$S:121}
A.aCO.prototype={
$2(d,e){return new A.Hd(B.i(d),null)},
$S:z+9}
A.aCN.prototype={
$1(d){return new A.IB(d,null)},
$S:z+10}
A.aCI.prototype={
$1(d){var x=null,w=this.a,v=$.em()
w=B.l("Die Finanzauswertung f\xfcr "+v.aw(w.a)+" \u2013 "+v.aw(w.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",x,x,x,x,x,x,x)
v=this.b
return B.nl(B.b([B.dY(C.dg,x,x,new A.aCG(v),x,x),B.e1(F.uJ,new A.aCH(v),B.eh(C.n,C.h,x,x,x,x,x))],y.p),w,F.uK)},
$S:56}
A.aCG.prototype={
$0(){B.bq(this.a,!1).dr(!1)
return null},
$S:0}
A.aCH.prototype={
$0(){B.bq(this.a,!1).dr(!0)
return null},
$S:0}
A.bdA.prototype={
$0(){var x=this.a.aP(0,$.wX().gi2(),y.V),w=E.brI()
x.Ao(0,w)
return w},
$S:0}
A.bdB.prototype={
$0(){var x=this.a.aP(0,$.wX().gi2(),y.V),w=new B.bg(Date.now(),0,!1),v=new E.mx(B.bM(B.aY(w),1,1,0,0,0,0),w)
x.Ao(0,v)
return v},
$S:0}
A.bdC.prototype={
$0(){return this.a.Ir(this.b,this.c)},
$S:0}
A.bdz.prototype={
$2(d,e){return new B.ok(B.T(d).aOq(B.T(d).ax.aPj(C.h,C.n)),e,null)},
$S:984}
A.bj4.prototype={
$2(d,e){var x=null,w=e.b<380?1:2,v=this.a.c,u=$.e9(),t=A.Nh(!1,C.xt,"Umsatz 7 %",u.aw(v.a),x),s=A.Nh(!1,C.xt,"Umsatz 19 %",u.aw(v.b),x),r=A.Nh(!0,D.a8x,"Umsatz netto",u.aw(v.c),x),q=A.Nh(!1,D.a8w,"Aufwand",u.aw(v.d),x),p=v.e,o=u.aw(p)
return E.brX(1.7,B.b([t,s,r,q,A.Nh(!0,C.nr,"Ergebnis",o,p<0?C.ak:C.aO),A.Nh(!1,C.iX,"USt-Saldo",u.aw(v.f-v.r),x)],y.p),w,12,12,F.u1,!0)},
$S:185}
A.aHE.prototype={
$0(){return D.aoE},
$S:121}
A.aHD.prototype={
$2(d,e){var x=null
return B.bL(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),x,x,x,B.E(C.h,13,C.k),x,x,x),C.fz,x,C.G,x,3)},
$S:214}
A.aHC.prototype={
$1(d){return new A.Hx(d,null)},
$S:z+11}
A.bbd.prototype={
$2(d,a0){var x,w,v,u,t,s=this,r=null,q=a0.b<480,p=q?2:3,o=q?1.05:1.1,n=s.a,m=n.c,l=m.a,k=$.e9(),j=k.aw(l.c),i=m.w,h=m.d,g=B.ab(h).i("a9<1,N>"),f=g.i("av.E"),e=B.P(new B.a9(h,new A.bb3(),g),f)
j=A.tv(i.f,i.e,!1,"Umsatz (netto)",!1,r,r,r,r,e,j)
e=k.aw(s.b)
x=B.P(new B.a9(h,new A.bb4(),g),f)
e=A.tv(r,r,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,x,e)
l=k.aw(l.e)
x=B.P(new B.a9(h,new A.bb5(),g),f)
l=A.tv(i.w,i.r,!0,"Ergebnis (netto)",!1,r,r,r,r,x,l)
x=C.d.am(i.b,1)
w=B.P(new B.a9(h,new A.bb6(),g),f)
x=A.tv(r,r,!1,"Umsatzrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,w,x+" %")
w=C.d.am(i.a,1)
v=B.P(new B.a9(h,new A.bb7(),g),f)
w=A.tv(r,r,!1,"Rohertragsmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,v,w+" %")
v=C.d.am(s.c,1)
u=B.P(new B.a9(h,new A.bb8(),g),f)
v=A.tv(r,r,!1,"Wareneinsatzquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,u,v+" %")
u=C.d.am(i.c,1)
t=B.P(new B.a9(h,new A.bb9(),g),f)
u=A.tv(r,r,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",r,r,r,t,u+" %")
i=k.aw(i.d)
t=B.P(new B.a9(h,new A.bba(),g),f)
i=A.tv(r,r,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",r,r,r,t,i)
m=k.aw(m.r.d)
n=B.P(new B.a9(h,new A.bbb(n),g),f)
n=A.tv(r,r,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,n,m)
m=s.d
k=C.d.am(m,1)
m=B.P(new B.a9(h,new A.bbc(m),g),f)
return E.brX(o,B.b([j,e,l,x,w,v,u,i,n,A.tv(r,r,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,m,k)],y.p),p,12,12,F.u1,!0)},
$S:185}
A.bb3.prototype={
$1(d){return d.b},
$S:z+0}
A.bb4.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bb5.prototype={
$1(d){return d.d},
$S:z+0}
A.bb6.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.bb7.prototype={
$1(d){var x=d.b
return x>0?(x-d.c)/x*100:0},
$S:z+0}
A.bb8.prototype={
$1(d){var x=d.b
return x>0?d.c/x*100:0},
$S:z+0}
A.bb9.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.bba.prototype={
$1(d){return d.d},
$S:z+0}
A.bbb.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bbc.prototype={
$1(d){return this.a},
$S:z+0}
A.bir.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bis.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bit.prototype={
$1(d){return A.aHT(null,1.4,null,C.ak,0.35,D.aen,D.Dc,null,!1,!1,!1,!1,D.Ew,!1,10,D.XV,!0,C.l7,B.b([new A.es(0,d),new A.es(this.a,d)],y.U))},
$S:z+13}
A.b2x.prototype={
$2(d,e){var x=e.b,w=e.c,v=x>w?x:w
return v>d?v:d},
$S:z+14}
A.b2z.prototype={
$2(d,e){var x=null
return B.l(this.a.aJ9(d),x,x,x,B.E(C.w,10,C.O),x,x,x)},
$S:z+15}
A.b2A.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=this.a.length)return C.zv
return new B.ah(C.kE,B.l(C.c.cT(this.a[w].a,5),x,x,x,B.E(C.w,9,C.O),x,x,x),x)},
$S:z+4}
A.b2y.prototype={
$1(d){return D.a7t},
$S:z+5}
A.b3i.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3j.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b3k.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3l.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=3)return C.zv
return new B.ah(C.kE,B.l(this.a[w],x,x,x,B.E(C.h,12,C.q),x,x,x),x)},
$S:z+4}
A.bbH.prototype={
$1(d){return d.d},
$S:z+18}
A.bbI.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bkl.prototype={
$1(d){return d.d},
$S:z+19}
A.bkm.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b15.prototype={
$0(){var x=this.b.a,w=x.d,v=x.f,u=this.a.cy
u.a8(0)
u.m(0,w,B.b([v],y.t))},
$S:0}
A.b16.prototype={
$1(d){return new A.xe(y.B.a(d),this.a.a.r)},
$S:z+21}
A.avw.prototype={
$1(d){return d.e},
$S:z+22}
A.avx.prototype={
$2(d,e){return d+e},
$S:44}
A.avz.prototype={
$1(d){return d.c.length!==0},
$S:z+7}
A.avB.prototype={
$2(d,e){var x=this,w=e.e,v=x.d,u=x.a
x.b.push(x.c-v.gdm(0)/2+u.a+w/2)
u.a=u.a+(w+v.d)},
$S:z+24}
A.avC.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=w.a,s=t.w
s===$&&B.a()
x=v.a
x.eL(u,s)
t=t.x
t===$&&B.a()
x.eL(u,t)
v.acW(w.d,w.e)},
$S:0}
A.avf.prototype={
$1(d){return 0},
$S:985}
A.ave.prototype={
$2(d,e){return B.fF(C.c4,this.a.akw(e),C.t,C.bA,null)},
$S:986}
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
if(!(w===D.me||w===D.dx))u=1-u
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
return new A.nt(d,r.c.b.$2(q,new A.t9(v+u,t.e)))},
$S:z+30}
A.aS2.prototype={
$1(d){this.a.l5(new A.a3S(d))},
$S:157}
A.aS3.prototype={
$1(d){this.a.l5(new A.a3T(d))},
$S:41}
A.aS4.prototype={
$1(d){this.a.l5(new A.a3U(d))},
$S:28}
A.aS5.prototype={
$0(){this.a.l5(D.a0U)},
$S:0}
A.aS6.prototype={
$1(d){this.a.l5(new A.M8())},
$S:45}
A.aS7.prototype={
$1(d){this.a.l5(new A.a3X(d))},
$S:43}
A.aS8.prototype={
$0(){this.a.l5(D.a0V)},
$S:0}
A.aS9.prototype={
$1(d){this.a.l5(new A.Mb(d))},
$S:91}
A.aSa.prototype={
$1(d){this.a.l5(new A.a3R(d))},
$S:161}
A.aSb.prototype={
$1(d){this.a.l5(new A.a3Q(d))},
$S:162}
A.aSc.prototype={
$1(d){return this.a.l5(new A.M6(d))},
$S:163}
A.aSd.prototype={
$1(d){return this.a.l5(new A.a3V(d))},
$S:59}
A.aSe.prototype={
$1(d){return this.a.l5(new A.M9(d))},
$S:49}
A.bbo.prototype={
$1(d){var x=this.a.db.h(0,C.b.io(this.b.ch,d))
return d.aP_(x==null?B.b([],y.t):x)},
$S:z+32}
A.bbm.prototype={
$0(){var x=this.a
C.b.a8(x.cy)
x.db.a8(0)},
$S:0}
A.bbn.prototype={
$0(){var x,w,v,u,t,s,r=this.b.a
r.toString
x=B.P(r,y.dw)
C.b.h_(x,new A.bbl())
w=this.a
v=w.db
v.a8(0)
for(u=y.t,t=0;t<r.length;++t){s=r[t]
v.m(0,s.d,B.b([s.e],u))}r=w.cy
C.b.a8(r)
r.push(new A.FL(x))},
$S:0}
A.bbl.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+6}
A.bbp.prototype={
$1(d){return new A.yL(y.hf.a(d),this.a.a.r)},
$S:z+34}
A.aHU.prototype={
$1(d){return!d.k(0,D.fC)},
$S:z+1}
A.bnJ.prototype={
$1(d){var x,w={},v=this.a,u=v.w,t=u==null?null:C.b.ga0(u.a)
if(t==null)t=v.r
u=v.CW.a
x=A.bz0(u?A.buj(v.a[d],0,v):t,null,null,4)
w.a=10
if(u)w.a=7.2
return new A.ta(x,new A.y2(!0,A.bv2(),new A.bnI(w)))},
$S:z+36}
A.bnI.prototype={
$4(d,e,f,g){var x=this.a.a
return A.bNy(A.buj(d,e,f),x,A.bWa(d,e,f))},
$S:z+37}
A.bnG.prototype={
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
x.eL(w,u)
v=v.Q
v===$&&B.a()
x.eL(w,v)},
$S:0}
A.aI_.prototype={
$0(){this.a.acW(this.b,this.c)},
$S:0}
A.aI1.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+6}
A.avp.prototype={
$1(d){return d.gdm(0)},
$S:z+41}
A.avq.prototype={
$2(d,e){return d+e},
$S:44}
A.avt.prototype={
$0(){var x={},w=this.b.ch,v=w.length
x.a=0
new B.iJ(w,B.ab(w).i("iJ<1>")).aq(0,new A.avu(x,this.a/(v+1),this.c))},
$S:0}
A.avu.prototype={
$2(d,e){var x=this.a,w=x.a+this.b
x.a=w
w=x.a=w+e.gdm(0)/2
this.c[d]=w
x.a=w+e.gdm(0)/2},
$S:z+2}
A.avr.prototype={
$2(d,e){var x=this.a,w=x.a=x.a+e.gdm(0)/2,v=d!==0?x.a=w+this.b:w
this.c[d]=v
x.a=v+e.gdm(0)/2},
$S:z+2}
A.avs.prototype={
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
$S:987}
A.ayG.prototype={
$1(d){return d},
$S:988}
A.aSn.prototype={
$2(d,e){return this.a.Al(d,e)},
$S:19};(function aliases(){var x=A.JU.prototype
x.a_q=x.i4
x.akP=x.aQH
x.akQ=x.acP
x=A.Sv.prototype
x.ans=x.l
x=A.K3.prototype
x.a_r=x.i4
x=A.Fj.prototype
x.a0a=x.Ym})();(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff,u=a._static_2,t=a._instance_1u
x(A,"bZK","bNv",44)
w(A.Sx.prototype,"garf","arg",20)
v(A,"bYB",3,null,["$3"],["bKQ"],68,0)
v(A,"bYC",3,null,["$3"],["bKR"],46,0)
v(A,"bYD",3,null,["$3"],["bKS"],47,0)
v(A,"bYF",4,null,["$4"],["bZn"],48,0)
x(A,"bYE","bZm",49)
u(A,"buy","bZo",50)
v(A,"bYw",3,null,["$3"],["bNz"],51,0)
x(A,"Z3","c0L",52)
x(A,"at0","bZr",5)
v(A,"bYy",3,null,["$3"],["bOk"],53,0)
v(A,"bYA",3,null,["$3"],["bTt"],54,0)
v(A,"bYx",3,null,["$3"],["bOj"],55,0)
v(A,"bYz",3,null,["$3"],["bTs"],56,0)
x(A,"c7R","bOi",57)
x(A,"c7S","bTr",58)
t(A.WS.prototype,"ga3M","awF",25)
w(A.UJ.prototype,"gaxX","axY",31)
v(A,"c_E",3,null,["$3"],["bOP"],59,0)
v(A,"c_D",3,null,["$3"],["bKU"],60,0)
x(A,"c_H","c0M",1)
v(A,"bFv",4,null,["$5$size","$4"],["bDX",function(d,e,f,g){return A.bDX(d,e,f,g,null)}],61,0)
u(A,"bv2","c0K",62)
u(A,"bFw","bYj",63)
u(A,"bFz","bZu",64)
u(A,"bFy","bZq",3)
u(A,"bFx","bZp",3)
x(A,"c_G","bF8",66)
x(A,"c_F","bF7",67)
w(A.Pu.prototype,"gaFF","a6m",43)
v(A,"Z8",3,null,["$3"],["c_C"],45,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.a_,[A.a5o,A.aeV,A.ajX,A.I5,A.IB,A.aeT,A.Hd,A.Hx,A.ajh,A.aks,A.Tz,A.aph,A.agk,A.agB,A.akW,A.ahn,A.Ip,A.aqt,A.TY,A.JV,A.A4])
v(B.A,[A.ut,A.Dl,A.b8,A.afU,A.afK,A.afM,A.afN,A.afF,A.aj1,A.afQ,A.afO,A.avL,A.aqx,A.avy,A.afL,A.K3,A.a4r,A.t9,A.aoX,A.aoW,A.afE,A.aj0,A.es,A.aiY,A.aj_,A.anb,A.ajO,A.ara,A.aiZ,A.aiH,A.aiX,A.avd,A.bbj,A.avg,A.afB,A.nt,A.aiU,A.aiV,A.vk,A.ha,A.akA,A.akD,A.afH,A.afV,A.afI,A.aiW,A.akG,A.akE,A.aqw,A.aoV,A.aHV,A.akC,A.v2,A.a_Z,A.akN,A.a08,A.b_f])
v(B.ur,[A.pT,A.v8,A.w0,A.ay4,A.azb,A.nL,A.BY,A.nM])
v(B.ny,[A.aCC,A.aCD,A.aCE,A.aCS,A.bnU,A.bnV,A.bpH,A.bnW,A.bnT,A.aCN,A.aCI,A.aHC,A.bb3,A.bb4,A.bb5,A.bb6,A.bb7,A.bb8,A.bb9,A.bba,A.bbb,A.bbc,A.bit,A.b2y,A.b3i,A.b3j,A.bbH,A.bkl,A.b16,A.avw,A.avz,A.avf,A.aWJ,A.aWK,A.aWL,A.aWM,A.aWN,A.aS2,A.aS3,A.aS4,A.aS6,A.aS7,A.aS9,A.aSa,A.aSb,A.aSc,A.aSd,A.aSe,A.bbo,A.bbp,A.aHU,A.bnJ,A.bnI,A.bnG,A.aHW,A.aHX,A.avp,A.ayG])
u(A.y0,B.fp)
v(B.xt,[A.aCB,A.aCA,A.aCQ,A.aCJ,A.aCK,A.aCL,A.aCM,A.aCP,A.aCG,A.aCH,A.bdA,A.bdB,A.bdC,A.aHE,A.b15,A.avC,A.aS5,A.aS8,A.bbm,A.bbn,A.aHZ,A.aI_,A.avt])
v(B.xA,[A.y1,A.am6,A.a5p])
v(B.xu,[A.aCO,A.bdz,A.bj4,A.aHD,A.bbd,A.bir,A.bis,A.b2x,A.b2z,A.b2A,A.b3k,A.b3l,A.bbI,A.bkm,A.avx,A.avB,A.ave,A.bbl,A.aI0,A.aI1,A.avq,A.avu,A.avr,A.avs,A.aF5,A.aSn])
v(B.MP,[A.K_,A.Nv])
v(B.x6,[A.Sx,A.UJ])
u(A.a_B,A.afU)
u(A.afA,A.a_B)
u(A.a_l,A.afA)
v(A.a_l,[A.afJ,A.akB])
u(A.nu,A.afJ)
v(B.U_,[A.avn,A.acm,A.Cd,A.aC2,A.aHF,A.MC])
u(A.fu,A.afK)
u(A.i8,A.afM)
u(A.mj,A.afN)
u(A.a_s,A.afF)
u(A.Mc,A.aj1)
v(A.Mc,[A.afP,A.akF])
u(A.a_x,A.afP)
u(A.a_y,A.afQ)
u(A.Ce,A.afO)
v(A.avL,[A.K0,A.Nx])
u(A.aco,A.aqx)
u(A.afR,A.aco)
u(A.a_z,A.afR)
v(B.b6,[A.xe,A.yL])
u(A.u6,A.afL)
u(A.JU,A.K3)
v(A.JU,[A.avA,A.aHY])
v(B.Nr,[A.a_v,A.a5C])
v(B.J,[A.Fj,A.afC])
v(A.Fj,[A.a9v,A.a9I])
u(A.pI,A.aoX)
u(A.aaU,A.aoW)
u(A.oO,A.afE)
u(A.uv,A.aj0)
u(A.y3,A.aiY)
u(A.pb,A.aj_)
u(A.Pa,A.anb)
u(A.mC,A.ajO)
u(A.mZ,A.ara)
v(A.pb,[A.ajN,A.ar9])
u(A.kx,A.ajN)
u(A.kY,A.ar9)
u(A.a3P,A.aiZ)
v(A.a3P,[A.ajM,A.ar8])
u(A.a4C,A.ajM)
u(A.acM,A.ar8)
u(A.LV,A.aiH)
u(A.uu,A.aiX)
u(A.M5,A.uu)
u(A.QB,B.O)
u(A.WS,B.a0)
u(A.aaV,B.fU)
u(A.afD,A.afC)
u(A.Sv,A.afD)
u(A.a_m,A.Sv)
u(A.jC,A.afB)
u(A.a3M,A.aiU)
u(A.a3O,A.aiV)
v(A.ha,[A.a3S,A.a3T,A.a3U,A.M7,A.M8,A.a3X,A.Ma,A.Mb,A.a3R,A.a3Q,A.M6,A.a3V,A.a3W,A.M9])
u(A.pm,A.akB)
u(A.e2,A.akA)
u(A.Nw,A.akD)
u(A.a_u,A.afH)
u(A.mk,A.afV)
u(A.JZ,A.afI)
u(A.y2,A.aiW)
u(A.E0,A.akF)
u(A.a5D,A.akG)
u(A.akz,A.es)
u(A.mG,A.akz)
u(A.pR,A.mG)
u(A.rb,A.akE)
u(A.ta,A.aqw)
u(A.FL,A.aoV)
u(A.yM,A.akC)
u(A.yP,A.akN)
u(A.Pu,B.PH)
u(A.a3I,B.bH)
x(A.afF,A.b8)
x(A.afJ,A.b8)
x(A.afK,A.b8)
x(A.afM,A.b8)
x(A.afN,A.b8)
x(A.afO,A.b8)
x(A.afP,A.b8)
x(A.afQ,A.b8)
x(A.afR,A.b8)
x(A.afL,A.b8)
x(A.afA,A.b8)
x(A.afE,A.b8)
x(A.aiH,A.b8)
x(A.aiX,A.b8)
x(A.aiY,A.b8)
x(A.aj_,A.b8)
x(A.aj0,A.b8)
x(A.ajN,A.b8)
x(A.ajM,A.b8)
x(A.ajO,A.b8)
x(A.anb,A.b8)
x(A.aoW,A.b8)
x(A.aoX,A.b8)
x(A.aqx,A.b8)
x(A.ar9,A.b8)
x(A.ar8,A.b8)
x(A.ara,A.b8)
x(A.afB,A.b8)
w(A.afC,B.aB)
x(A.afD,B.dX)
w(A.Sv,B.a2N)
x(A.afU,A.b8)
x(A.aiU,A.b8)
x(A.aiV,A.b8)
x(A.aj1,A.b8)
x(A.afH,A.b8)
x(A.afI,A.b8)
x(A.afV,A.b8)
x(A.aiW,A.b8)
x(A.aiZ,A.b8)
x(A.akz,A.b8)
x(A.akA,A.b8)
x(A.akB,A.b8)
x(A.akD,A.b8)
x(A.akE,A.b8)
x(A.akF,A.b8)
x(A.akG,A.b8)
x(A.aoV,A.b8)
x(A.aqw,A.b8)
x(A.akC,A.b8)
x(A.akN,A.b8)})()
B.bky(b.typeUniverse,JSON.parse('{"a5o":{"a_":[],"c":[]},"Dl":{"aCF":[]},"y0":{"fp":["bf<~>"],"fp.T":"bf<~>"},"IB":{"a_":[],"c":[]},"Hd":{"a_":[],"c":[]},"y1":{"bp":[],"O":[],"c":[]},"aeV":{"a_":[],"c":[]},"ajX":{"a_":[],"c":[]},"am6":{"bp":[],"O":[],"c":[]},"I5":{"a_":[],"c":[]},"aeT":{"a_":[],"c":[]},"Hx":{"a_":[],"c":[]},"a5p":{"bp":[],"O":[],"c":[]},"ajh":{"a_":[],"c":[]},"aks":{"a_":[],"c":[]},"Tz":{"a_":[],"c":[]},"aph":{"a_":[],"c":[]},"agk":{"a_":[],"c":[]},"agB":{"a_":[],"c":[]},"akW":{"a_":[],"c":[]},"ahn":{"a_":[],"c":[]},"Ip":{"a_":[],"c":[]},"aqt":{"a_":[],"c":[]},"TY":{"a_":[],"c":[]},"K_":{"O":[],"c":[]},"Sx":{"a0":["K_"]},"nu":{"b8":[]},"fu":{"b8":[]},"i8":{"b8":[]},"mj":{"b8":[]},"Ce":{"b8":[]},"xe":{"b6":["nu"],"b_":["nu"],"b_.T":"nu","b6.T":"nu"},"a_s":{"b8":[]},"a_x":{"b8":[]},"a_y":{"b8":[]},"a_z":{"b8":[]},"u6":{"b8":[]},"a_v":{"aU":[],"c":[]},"a9v":{"J":[],"I":[],"je":[],"aP":[]},"pb":{"b8":[]},"mC":{"b8":[]},"mZ":{"b8":[]},"kx":{"b8":[]},"kY":{"b8":[]},"uu":{"b8":[]},"a_l":{"b8":[]},"pI":{"b8":[]},"aaU":{"b8":[]},"oO":{"b8":[]},"uv":{"b8":[]},"y3":{"b8":[]},"aco":{"b8":[]},"Pa":{"b8":[]},"a4C":{"b8":[]},"acM":{"b8":[]},"LV":{"b8":[]},"M5":{"b8":[]},"JV":{"a_":[],"c":[]},"QB":{"O":[],"c":[]},"WS":{"a0":["QB"]},"jC":{"b8":[]},"aaV":{"fU":[],"aU":[],"c":[]},"a_m":{"dX":["J","hb"],"J":[],"aB":["J","hb"],"I":[],"aP":[],"aB.1":"hb","dX.1":"hb","aB.0":"J"},"A4":{"a_":[],"c":[]},"a_B":{"b8":[]},"a3M":{"b8":[]},"Mc":{"b8":[]},"a3O":{"b8":[]},"a3S":{"ha":[]},"a3T":{"ha":[]},"a3U":{"ha":[]},"M7":{"ha":[]},"M8":{"ha":[]},"a3X":{"ha":[]},"Ma":{"ha":[]},"Mb":{"ha":[]},"a3R":{"ha":[]},"a3Q":{"ha":[]},"M6":{"ha":[]},"a3V":{"ha":[]},"a3W":{"ha":[]},"M9":{"ha":[]},"Fj":{"J":[],"I":[],"je":[],"aP":[]},"Nv":{"O":[],"c":[]},"UJ":{"a0":["Nv"]},"pm":{"b8":[]},"e2":{"b8":[]},"mk":{"b8":[]},"mG":{"es":[],"b8":[]},"pR":{"mG":[],"es":[],"b8":[]},"rb":{"b8":[]},"ta":{"b8":[]},"FL":{"b8":[]},"yL":{"b6":["pm"],"b_":["pm"],"b_.T":"pm","b6.T":"pm"},"Nw":{"b8":[]},"a_u":{"b8":[]},"JZ":{"b8":[]},"y2":{"b8":[]},"a3P":{"b8":[]},"E0":{"b8":[]},"a5D":{"b8":[]},"yM":{"b8":[]},"a5C":{"aU":[],"c":[]},"a9I":{"J":[],"I":[],"je":[],"aP":[]},"yP":{"b8":[]},"Pu":{"J":[],"bt":["J"],"I":[],"aP":[]},"a3I":{"bH":[],"aU":[],"c":[]}}'))
B.bDr(b.typeUniverse,JSON.parse('{"JU":1,"Mc":1,"K3":1,"Fj":1}'))
var y=(function rtii(){var x=B.ax
return{_:x("BY"),e:x("bf<nL>"),h:x("bf<nM>"),b:x("bf<~>"),W:x("jC"),B:x("nu"),dB:x("fu"),T:x("u6"),fj:x("i8"),G:x("mj"),J:x("mk"),k:x("as"),cX:x("a08<N>"),dO:x("ue"),R:x("ag<h,@>"),v:x("hP"),bz:x("ms<bg>"),f0:x("nD"),E:x("b8"),F:x("y0"),X:x("nL"),P:x("mx"),D:x("ut"),a:x("aCF"),d:x("nM"),cw:x("es"),L:x("hb"),m:x("df<w,F>"),cm:x("kx"),dv:x("mC"),g:x("B<nt>"),O:x("B<fu>"),Y:x("B<i8>"),C:x("B<brt>"),U:x("B<es>"),K:x("B<a4r>"),u:x("B<e2>"),bC:x("B<v2>"),aA:x("B<u<es>>"),r:x("B<FL>"),gM:x("B<h>"),eg:x("B<t7>"),df:x("B<pR>"),p:x("B<c>"),n:x("B<N>"),t:x("B<w>"),eF:x("ba<a0<O>>"),Z:x("mG"),cz:x("e2"),hf:x("pm"),dj:x("yM"),fT:x("rb"),c_:x("ie<ow<bf<~>>>"),s:x("yP<fu>"),x:x("yP<e2>"),I:x("u<w>"),ef:x("v8"),c:x("a2<h,@>"),f:x("a2<@,@>"),gj:x("a9<N,N>"),w:x("jP"),Q:x("vk<nu>"),o:x("vk<pm>"),eo:x("pz"),gJ:x("pA"),V:x("mT<mx>"),N:x("h"),A:x("og"),er:x("t7"),j:x("w0"),dw:x("pR"),bY:x("ta"),cZ:x("pT"),gc:x("k7"),es:x("kY"),bN:x("mZ"),l:x("c"),q:x("Bp"),g4:x("iu<N>"),y:x("C"),i:x("N"),z:x("@"),S:x("w"),bn:x("xe?"),f3:x("yL?"),M:x("u<@>?"),fF:x("a2<@,@>?"),cK:x("A?"),aD:x("k7?"),h6:x("w?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Aq=new B.qn(C.n,B.ax("qn<F>"))
D.Ax=new A.Cd(0,"left")
D.me=new A.Cd(1,"top")
D.Ay=new A.Cd(2,"right")
D.dx=new A.Cd(3,"bottom")
D.as3=new A.pI(!1,A.buy(),22,null)
D.k7=new A.oO(16,null,D.as3,!0)
D.a7u=new A.pb(C.B,null,2,null)
D.vx=new A.JZ(!1,D.a7u,A.c_H(),!0)
D.a_0=new A.avn(3,"spaceEvenly")
D.a_9=new B.xi(6,"dstIn")
D.Xf=new B.aT(3,3)
D.AC=new B.d2(D.Xf,D.Xf,C.Z,C.Z)
D.a_l=new B.b7(C.B,0,C.N,-1)
D.B8=new A.a3O()
D.a0U=new A.M7()
D.a0V=new A.Ma()
D.aI7=new A.aaU()
D.aiS=x([],B.ax("B<kx>"))
D.aiT=x([],B.ax("B<kY>"))
D.D8=new A.LV(D.aiS,D.aiT,!0)
D.a70=new B.er("Konten (SKR 03)",null)
D.a79=new B.er("Zeitraum",null)
D.x7=new A.aC2(0,"center")
D.aIj=new A.y2(!0,A.bv2(),A.bFv())
D.Dc=new A.y2(!1,A.bv2(),A.bFv())
D.Dd=new A.y3(!1,!0,null,A.at0(),A.Z3(),!0,null,A.at0(),A.Z3())
D.aIk=new A.y3(!0,!0,null,A.at0(),A.Z3(),!0,null,A.at0(),A.Z3())
D.a3b=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a2Y=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3k=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3f=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2J=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2I=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3G=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a34=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3J=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3D=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.amM=new B.df([50,D.a3b,100,D.a2Y,200,D.a3k,300,D.a3f,400,D.a2J,500,D.a2I,600,D.a3G,700,D.a34,800,D.a3J,900,D.a3D],y.m)
D.dc=new B.ri(D.amM,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.afi=x([8,4],y.t)
D.a7s=new A.pb(D.dc,null,0.4,D.afi)
D.a7t=new A.pb(C.an,null,0.5,null)
D.fC=new A.es(0/0,0/0)
D.as5=new A.pI(!0,A.buy(),44,null)
D.mf=new A.oO(16,null,D.as5,!0)
D.as4=new A.pI(!0,A.buy(),30,null)
D.mg=new A.oO(16,null,D.as4,!0)
D.a7v=new A.uv(!1,D.mf,D.mg,D.mf,D.mg)
D.aIl=new A.uv(!0,D.mf,D.mg,D.mf,D.mg)
D.Dl=new A.MC(0,"left")
D.a7K=new A.MC(1,"center")
D.Dm=new A.MC(2,"right")
D.a7P=new B.ad(57495,"MaterialIcons",null,!1)
D.a8t=new B.ad(58927,"MaterialIcons",null,!1)
D.a8w=new B.ad(59005,"MaterialIcons",null,!0)
D.a8x=new B.ad(59007,"MaterialIcons",null,!0)
D.a8y=new B.ad(59011,"MaterialIcons",null,!1)
D.a9i=new B.ad(62589,"MaterialIcons",null,!1)
D.a8K=new B.ad(61349,"MaterialIcons",null,!1)
D.a9Z=new B.aV(D.a8K,20,C.h,null,null)
D.aaw=new B.aV(C.xl,null,C.w,null,null)
D.a80=new B.ad(57912,"MaterialIcons",null,!1)
D.aaR=new B.aV(D.a80,null,C.ak,null,null)
D.acX=new A.a5p(null)
D.aIq=new A.aHF(0,"horizontal")
D.xB=new A.yM(0,0,0,0,!1)
D.Ew=new A.Nw(0.5)
D.Bc=new A.a5D()
D.ad0=new A.E0(D.Bc,A.bFz(),10,A.bFw(),!0,A.bFy(),A.bFx(),!1,null,null,null)
D.aIs=new A.E0(D.Bc,A.bFz(),10,A.bFw(),!0,A.bFy(),A.bFx(),!0,null,null,null)
D.aen=x([4,3],y.t)
D.aIw=x([],y.g)
D.aiE=x([],y.O)
D.aiF=x([],y.Y)
D.aiG=x([],B.ax("B<mj>"))
D.aiH=x([],B.ax("B<mk>"))
D.aIx=x([],y.U)
D.aIy=x([],y.u)
D.aiI=x([],y.r)
D.ann={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SS={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yf=new B.ag(D.SS,[0,0,0,0,0,0,0,C.cD],B.ax("ag<h,A>"))
D.anl={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.amH=new B.ag(D.anl,[0,0,0,0],B.ax("ag<h,w>"))
D.anA={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.am4=new B.ag(D.anA,[0,0,0,0,null,null,null,null],B.ax("ag<h,w?>"))
D.am0=new B.ag(D.ann,[D.yf,D.yf,D.yf,C.cD,C.cD,C.cD,D.amH,D.am4],y.R)
D.amh=new B.ag(D.SS,[0,0,0,0,0,0,0,C.cC],y.R)
D.ank={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.amI=new B.ag(D.ank,[0,0,0,0,0,0,0,C.cC],y.R)
D.a3P=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a3W=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2M=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a37=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3h=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a48=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2z=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a39=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3j=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3E=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.amN=new B.df([50,D.a3P,100,D.a3W,200,D.a2M,300,D.a37,400,D.a3h,500,D.a48,600,D.a2z,700,D.a39,800,D.a3j,900,D.a3E],y.m)
D.SH=new B.ri(D.amN,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6K=new B.aj(32,32,32,32)
D.aoE=new B.ah(D.a6K,C.bH,null)
D.a6M=new B.aj(48,48,48,48)
D.aoG=new B.ah(D.a6M,C.bH,null)
D.aiU=x([],B.ax("B<mC>"))
D.aiV=x([],B.ax("B<mZ>"))
D.Xg=new A.Pa(D.aiU,D.aiV)
D.ar0=new B.hh("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ar2=new B.hh("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ar4=new B.hh("Automaten-Business","Umsatz je Automat",null,null)
D.ar5=new B.hh("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ar7=new B.hh("Top","Meistverkaufte Produkte",null,null)
D.ara=new B.hh("Kennzahlen","Rentabilit\xe4t",null,null)
D.XV=new B.rR(C.D,C.p,0)
D.aAU=new B.aq("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.atG=new B.eN(D.aAU,null,null,null,null,null,null,null,null,null,null,null,null,C.R,!1,null,null,null,C.t,null)
D.aIH=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Z5=new A.acm(0,"auto")
D.aBF=new A.acm(1,"top")
D.aFP=new A.TY("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"c8f","bJG",()=>B.jj(new A.bnU(),y.D))
x($,"c8g","atE",()=>B.jj(new A.bnV(),y.a))
x($,"c98","wX",()=>B.bBG(new A.bpH(),y.P))
x($,"c8h","bqv",()=>C.aN.$1$1(new A.bnW(),y.d))
x($,"c8e","bJF",()=>C.aN.$1$1(new A.bnT(),y.X))
x($,"c8d","bqu",()=>B.aXB(A.bZK(),y.F,y.b))
x($,"c1w","bq6",()=>new A.avd())
w($,"c4K","lg",()=>new A.b_f())})()};
(a=>{a["FTb41E+tGAL+RKgekVaewE3YOUM="]=a.current})($__dart_deferred_initializers__);