((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Nb(d,e,f,g,h){return new A.a5h(f,g,d,h,e,null)},
a5h:function a5h(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
ur:function ur(d){this.a=d},
Dk:function Dk(d){this.a=d},
bNd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=J.Y(d),e=y.fF.a(f.h(d,"period"))
if(e==null)e=C.Sr
x=y.f
w=y.N
v=y.z
u=A.aCJ(B.eg(x.a(f.h(d,"current")),w,v))
t=A.aCJ(B.eg(x.a(f.h(d,"prior_year")),w,v))
s=A.aCJ(B.eg(x.a(f.h(d,"prior_period")),w,v))
r=y.M
q=r.a(f.h(d,"trend"))
if(q==null)q=C.cB
q=J.d3(q,new A.aCu(),y.cZ)
q=B.P(q,q.$ti.i("au.E"))
p=r.a(f.h(d,"machines"))
if(p==null)p=C.cB
p=J.d3(p,new A.aCv(),y.ef)
p=B.P(p,p.$ti.i("au.E"))
r=r.a(f.h(d,"top_products"))
if(r==null)r=C.cB
r=J.d3(r,new A.aCw(),y.j)
r=B.P(r,r.$ti.i("au.E"))
o=B.eg(x.a(f.h(d,"customer")),w,v)
n=B.bS(o.h(0,"purchases_count"))
n=n==null?null:C.d.a4(n)
if(n==null)n=0
m=A.oA(o.h(0,"app_gross"))
l=B.bS(o.h(0,"active_customers"))
l=l==null?null:C.d.a4(l)
if(l==null)l=0
o=A.oA(o.h(0,"avg_basket"))
v=B.eg(x.a(f.h(d,"derived")),w,v)
w=A.oA(v.h(0,"gross_margin_pct"))
f=A.oA(v.h(0,"net_margin_pct"))
x=A.oA(v.h(0,"ebitda_margin_pct"))
k=A.oA(v.h(0,"cashflow_operating"))
j=A.bmS(v.h(0,"revenue_growth_yoy_pct"))
i=A.bmS(v.h(0,"revenue_growth_mom_pct"))
h=A.bmS(v.h(0,"result_growth_yoy_pct"))
v=A.bmS(v.h(0,"result_growth_mom_pct"))
g=B.bS(J.a3(e,"days"))
g=g==null?null:C.d.a4(g)
if(g==null)g=1
return new A.nJ(u,t,s,q,p,r,new A.axX(n,m,l,o),new A.az3(w,f,x,k,j,i,h,v),g)},
oA(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kL(J.ak(d))
return x==null?0:x},
bmS(d){if(d==null)return null
if(typeof d=="number")return d
return B.kL(J.ak(d))},
pS:function pS(d,e,f,g){var _=this
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
w_:function w_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axX:function axX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az3:function az3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
nJ:function nJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aCu:function aCu(){},
aCv:function aCv(){},
aCw:function aCw(){},
aCJ(d){var x=J.Y(d),w=A.tM(x.h(d,"revenue_net_7")),v=A.tM(x.h(d,"revenue_net_19")),u=A.tM(x.h(d,"revenue_net")),t=A.tM(x.h(d,"expense_net")),s=A.tM(x.h(d,"result_net")),r=A.tM(x.h(d,"vat_collected")),q=A.tM(x.h(d,"vat_paid"))
x=y.M.a(x.h(d,"accounts"))
if(x==null)x=C.cB
x=J.d3(x,new A.aCK(),y._)
x=B.P(x,x.$ti.i("au.E"))
return new A.nK(w,v,u,t,s,r,q,x)},
tM(d){var x
if(d==null)return 0
if(typeof d=="number")return d
x=B.kL(J.ak(d))
return x==null?0:x},
BX:function BX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nK:function nK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aCK:function aCK(){},
bNc(d){return new A.y_(d,new B.ie(y.c_),C.dw)},
bnD:function bnD(){},
bnE:function bnE(){},
bpq:function bpq(){},
bnF:function bnF(){},
bnC:function bnC(){},
y_:function y_(d,e,f){this.r=d
this.a=e
this.f=f},
aCt:function aCt(d,e,f){this.a=d
this.b=e
this.c=f},
aCs:function aCs(d,e,f){this.a=d
this.b=e
this.c=f},
bNe(){return new A.y0(null)},
b9L(d,e,f,g,h){return new A.ajP(e,h,g,f,d,null)},
y0:function y0(d){this.a=d},
aCI:function aCI(d){this.a=d},
aCB:function aCB(d,e,f){this.a=d
this.b=e
this.c=f},
aCC:function aCC(d,e,f){this.a=d
this.b=e
this.c=f},
aCD:function aCD(d){this.a=d},
aCE:function aCE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCH:function aCH(){},
aCG:function aCG(){},
aCF:function aCF(){},
aCA:function aCA(d,e){this.a=d
this.b=e},
aCy:function aCy(d){this.a=d},
aCz:function aCz(d){this.a=d},
aeO:function aeO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ajP:function ajP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
alZ:function alZ(d,e){this.e=d
this.a=e},
bdn:function bdn(d){this.a=d},
bdo:function bdo(d){this.a=d},
bdp:function bdp(d,e,f){this.a=d
this.b=e
this.c=f},
bdm:function bdm(){},
I1:function I1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ix:function Ix(d,e){this.c=d
this.a=e},
biO:function biO(d){this.a=d},
aeM:function aeM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
H9:function H9(d,e){this.c=d
this.a=e},
tt(d,e,f,g,h,i,j,k,l,m,n){return new A.akk(g,n,i,e,d,m,f,k,l,j,null)},
a5i:function a5i(d){this.a=d},
aHw:function aHw(){},
aHv:function aHv(){},
aHu:function aHu(){},
Ht:function Ht(d,e){this.c=d
this.a=e},
bb0:function bb0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baR:function baR(){},
baS:function baS(){},
baT:function baT(){},
baU:function baU(){},
baV:function baV(){},
baW:function baW(){},
baX:function baX(){},
baY:function baY(){},
baZ:function baZ(d){this.a=d},
bb_:function bb_(d){this.a=d},
aj9:function aj9(d){this.a=d},
akk:function akk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Ts:function Ts(d,e,f){this.c=d
this.d=e
this.a=f},
ap7:function ap7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bie:function bie(){},
bif:function bif(){},
big:function big(d){this.a=d},
agc:function agc(d,e){this.c=d
this.a=e},
b2k:function b2k(){},
b2m:function b2m(d){this.a=d},
b2n:function b2n(d){this.a=d},
b2l:function b2l(){},
agt:function agt(d,e){this.c=d
this.a=e},
b35:function b35(){},
b36:function b36(){},
b37:function b37(){},
b38:function b38(d){this.a=d},
akO:function akO(d,e){this.c=d
this.a=e},
bbu:function bbu(){},
bbv:function bbv(){},
ahf:function ahf(d,e){this.c=d
this.a=e},
Il:function Il(d,e,f){this.c=d
this.d=e
this.a=f},
aqj:function aqj(d,e){this.c=d
this.a=e},
bk4:function bk4(){},
bk5:function bk5(){},
TR:function TR(d,e){this.c=d
this.a=e},
b8:function b8(){},
bxo(d){return new A.JV(d,C.ap,C.dm,null,null)},
JV:function JV(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Sq:function Sq(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fp$=f
_.cR$=g
_.c=_.a=null},
b0U:function b0U(d,e){this.a=d
this.b=e},
b0V:function b0V(d){this.a=d},
avg(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3){var x,w,v,u,t,s=null,r=f==null?D.ais:f,q=l==null?16:l,p=d==null?D.ZT:d,o=g==null,n=o?A.bqI(s,s,s,s,s,s,s,s):g,m=a2==null?D.X8:a2
o=o?A.bqI(s,s,s,s,s,s,s,s):g
x=j==null?D.D1:j
w=a0==null?0/0:a0
v=a1==null?0/0:a1
u=h==null?0:h
t=e==null?C.D:e
return new A.ns(r,q,p,n,k,a3,m,0,1,0,v,w,u,D.B1,t,x,i,o)},
avn(d,e,f,g,h){var x=d==null?D.ait:d,w=e==null?2:e,v=g==null?C.l5:g
return new A.ft(h,f===!0,x,w,v)},
bKx(d,e,f){var x=d.a
x=C.d.b5(x+(e.a-x)*f)
return A.avn(A.ke(d.c,e.c,f,A.bYj(),y.fj),B.aa(d.d,e.d,f),!1,A.ke(d.e,e.e,f,A.Z0(),y.S),x)},
a_o(d,e,f,g,h,i,j,k,l,m){var x,w,v,u,t,s=null,r=i==null?0:i
if(h==null)x=D.Sz
else x=h
w=m==null
v=w?8:m
u=$.lg()
t=u.aVL(f,w?8:m)
u=u.aVM(g,w?8:m)
w=d==null?A.bxm(s,s,s,s,s):d
return new A.i8(r,l,x,j,v,t,e,u,w,k==null?D.aiu:k)},
bKy(d,e,f){var x,w,v,u,t=B.X(d.c,e.c,f),s=B.aa(d.e,e.e,f),r=B.ml(d.f,e.f,f),q=A.ke(d.r,e.r,f,A.Z0(),y.S),p=B.bT(d.w,e.w,f),o=B.aa(d.a,e.a,f),n=B.aa(d.b,e.b,f)
n.toString
x=d.x
w=e.x
v=B.aa(x.b,w.b,f)
u=B.aa(x.c,w.c,f)
w=B.X(x.d,w.d,f)
return A.a_o(A.bxm(w,v,null,!1,u),q,r,p,t,o,null,A.ke(d.y,e.y,f,A.bYk(),y.G),n,s)},
bKz(d,e,f){var x,w,v=B.aa(d.a,e.a,f)
v.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
w.toString
return new A.mj(v,x,w,B.bT(d.d,e.d,f))},
bxm(d,e,f,g,h){var x,w=e==null?0:e,v=h==null?0:h
if(d==null)x=D.db
else x=d
return new A.a_k(g===!0,w,v,x,f)},
bqI(d,e,f,g,h,i,j,k){var x,w
if(k==null)x=new A.a_q(4,C.hD,16,D.x4,0,120,A.bYm(),!1,!1,D.YX,0,C.A,A.bYl())
else x=k
w=j==null?C.kE:j
return new A.a_p(x,w,d===!0,f!==!1,e!==!1,i,h,g)},
bZ4(d,e,f,g){var x=null,w=B.iT(x,x,f.c,x,x,x,x,x,x,x,x,14,x,x,C.O,x,x,!0,x,x,x,x,x,x,x,x)
return new A.Cd(C.d.j(f.b),w)},
bZ3(d){return A.axn(D.db,15)},
ns:function ns(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
avf:function avf(d,e){this.a=d
this.b=e},
ft:function ft(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
avo:function avo(){},
avp:function avp(){},
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
a_k:function a_k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a_p:function a_p(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acf:function acf(d,e){this.a=d
this.b=e},
a_q:function a_q(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cd:function Cd(d,e){this.a=d
this.b=e},
JW:function JW(d){this.a=d},
a_r:function a_r(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xd:function xd(d,e){this.a=d
this.b=e},
afy:function afy(){},
afC:function afC(){},
afD:function afD(){},
afF:function afF(){},
afG:function afG(){},
afH:function afH(){},
afI:function afI(){},
afJ:function afJ(){},
afK:function afK(){},
avq:function avq(d){this.a=d},
avr:function avr(){},
u4:function u4(d,e,f){this.a=d
this.b=e
this.c=f},
afE:function afE(){},
avs:function avs(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
avt:function avt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
avu:function avu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4j:function a4j(d){this.b=d},
a_n:function a_n(d,e,f){this.d=d
this.e=e
this.a=f},
a9o:function a9o(d,e,f,g,h,i,j,k){var _=this
_.aA=d
_.hW=e
_.cV=f
_.fS=g
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
bZ5(d,e){var x=null
return new A.Qu(e.w,B.l(e.r,x,x,x,x,x,x,x),x)},
av9(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=d.c
w=e.c
v=B.aa(x.c,w.c,f)
v.toString
return new A.oO(u,e.b,new A.pI(w.a,w.b,v,B.aa(x.d,w.d,f)),!0)},
byK(d,e,f){var x=A.av9(d.b,e.b,f),w=A.av9(d.d,e.d,f),v=A.av9(d.e,e.e,f)
return new A.ut(e.a,x,A.av9(d.c,e.c,f),w,v)},
bNg(d,e,f){var x,w
if(d.k(0,D.fC))return e
if(e.k(0,D.fC))return d
x=B.aa(d.a,e.a,f)
x.toString
w=B.aa(d.b,e.b,f)
w.toString
return new A.ep(x,w)},
byI(d,e,f){return new A.y2(e.a,!0,B.aa(d.c,e.c,f),e.d,e.e,e.f,B.aa(d.r,e.r,f),e.w,e.x)},
c0s(d){return!0},
bZ8(d){return D.a7i},
byJ(d,e,f,g){var x
if(d==null)x=f==null?C.B:null
else x=d
return new A.pb(x,f,g,e)},
bAG(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYf(),y.dv)
w.toString
x=A.ke(d.b,e.b,f,A.bYh(),y.bN)
x.toString
return new A.P3(w,x)},
bO1(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qV(d.d,e.d,f)
if(w==null)w=v==null?C.k:null
return new A.mC(u,x,w,v)},
bTa(d,e,f){var x,w,v,u=B.aa(d.a,e.a,f)
u.toString
x=B.aa(d.b,e.b,f)
x.toString
w=B.X(d.c,e.c,f)
v=B.qV(d.d,e.d,f)
if(w==null)w=v==null?C.k:null
return new A.mZ(u,x,w,v)},
bO0(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.cn(x.c,w.c,f)
u=A.bNZ(B.bqy(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qV(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Z0(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kx(s,e.f,e.r,u,e.x,v,w,x,t)},
bT9(d,e,f){var x,w,v,u,t,s=B.aa(d.e,e.e,f)
s.toString
x=d.w
w=e.w
v=B.p5(x.b,w.b,f)
v.toString
u=B.cn(x.c,w.c,f)
u=A.bT7(B.bqy(x.d,w.d,f),w.e,w.f,v,!1,u)
v=B.X(d.a,e.a,f)
w=B.qV(d.b,e.b,f)
x=B.aa(d.c,e.c,f)
x.toString
t=A.ke(d.d,e.d,f,A.Z0(),y.S)
if(v==null)v=w==null?C.B:null
return new A.kY(s,e.f,e.r,u,e.x,v,w,x,t)},
bNZ(d,e,f,g,h,i){return new A.a4u(f,!1,g,i,d,e)},
bO_(d){return C.d.an(d.e,1)},
bT7(d,e,f,g,h,i){return new A.acF(f,!1,g,i,d,e)},
bT8(d){return C.d.an(d.e,1)},
byF(d,e,f){var x,w=A.ke(d.a,e.a,f,A.bYe(),y.cm)
w.toString
x=A.ke(d.b,e.b,f,A.bYg(),y.es)
x.toString
return new A.LQ(w,x,!0)},
bNf(d,e,f){return new A.M0(d,e==null?4:e,f)},
a_d:function a_d(){},
Cc:function Cc(d,e){this.a=d
this.b=e},
t6:function t6(d,e){this.r=d
this.w=e},
pI:function pI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aaN:function aaN(){},
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
ep:function ep(d,e){this.a=d
this.b=e},
y2:function y2(d,e,f,g,h,i,j,k,l){var _=this
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
ach:function ach(){},
P3:function P3(d,e){this.a=d
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
a4u:function a4u(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
acF:function acF(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
LQ:function LQ(d,e,f){this.a=d
this.b=e
this.c=f},
us:function us(){},
M0:function M0(d,e,f){this.a=d
this.b=e
this.c=f},
aft:function aft(){},
afx:function afx(){},
aiz:function aiz(){},
aiP:function aiP(){},
aiQ:function aiQ(){},
aiS:function aiS(){},
aiT:function aiT(){},
ajF:function ajF(){},
ajE:function ajE(){},
ajG:function ajG(){},
an1:function an1(){},
aoM:function aoM(){},
aoN:function aoN(){},
aqn:function aqn(){},
ar_:function ar_(){},
aqZ:function aqZ(){},
ar0:function ar0(){},
av5:function av5(){},
JP:function JP(){},
JQ:function JQ(d,e,f){this.c=d
this.d=e
this.a=f},
av7:function av7(d){this.a=d},
av6:function av6(d){this.a=d},
Qu:function Qu(d,e,f){this.c=d
this.e=e
this.a=f},
WK:function WK(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bRI(d,e,f){var x=B.ab(f),w=x.i("a9<1,jC>")
w=B.P(new B.a9(f,new A.aWA(),w),w.i("au.E"))
x=x.i("a9<1,c>")
x=B.P(new B.a9(f,new A.aWB(),x),x.i("au.E"))
return new A.aaO(e,d,w,x,null)},
bKu(d,e,f){var x,w=null,v=B.aG(y.dO),u=J.a58(4,y.er)
for(x=0;x<4;++x)u[x]=new B.t4(w,C.aw,C.u,new B.k9(1),w,w,w,w,C.bx,w)
v=new A.a_e(f,d,e,v,u,!0,0,w,w,new B.bm(),B.aG(y.v))
v.bj()
return v},
aaO:function aaO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aWA:function aWA(){},
aWB:function aWB(){},
a_e:function a_e(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a2=g
_.VA$=h
_.aRu$=i
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
bb6:function bb6(d,e){this.a=d
this.b=e},
av8:function av8(){},
jC:function jC(d,e){this.a=d
this.b=e},
nr:function nr(d,e){this.a=d
this.b=e},
afu:function afu(){},
afv:function afv(){},
afw:function afw(){},
So:function So(){},
A3:function A3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aWC:function aWC(d){this.a=d},
aWD:function aWD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWE:function aWE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a3F(d,e){var x=d==null?B.dr(C.B,1):d
return new A.a3E(e!==!1,x)},
a_t:function a_t(){},
a3E:function a3E(d,e){this.a=d
this.b=e},
M7:function M7(){},
a3G:function a3G(){},
avD:function avD(){},
aBV:function aBV(d,e){this.a=d
this.b=e},
afN:function afN(){},
aiM:function aiM(){},
aiN:function aiN(){},
aiU:function aiU(){},
JZ:function JZ(){},
vi:function vi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ha:function ha(){},
a3K:function a3K(d){this.a=d},
a3L:function a3L(d){this.a=d},
a3M:function a3M(d){this.a=d},
M2:function M2(){},
M3:function M3(){},
a3P:function a3P(d){this.a=d},
M5:function M5(){},
M6:function M6(d){this.a=d},
a3J:function a3J(d){this.a=d},
a3I:function a3I(d){this.a=d},
M1:function M1(d){this.a=d},
a3N:function a3N(d){this.a=d},
a3O:function a3O(d){this.a=d},
M4:function M4(d){this.a=d},
Fi:function Fi(){},
aRU:function aRU(d){this.a=d},
aRV:function aRV(d){this.a=d},
aRW:function aRW(d){this.a=d},
aRX:function aRX(d){this.a=d},
aRY:function aRY(d){this.a=d},
aRZ:function aRZ(d){this.a=d},
aS_:function aS_(d){this.a=d},
aS0:function aS0(d){this.a=d},
aS1:function aS1(d){this.a=d},
aS2:function aS2(d){this.a=d},
aS3:function aS3(d){this.a=d},
aS4:function aS4(d){this.a=d},
aS5:function aS5(d){this.a=d},
Np:function Np(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UC:function UC(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fp$=g
_.cR$=h
_.c=_.a=null},
bbb:function bbb(d,e){this.a=d
this.b=e},
bb9:function bb9(d){this.a=d},
bba:function bba(d,e){this.a=d
this.b=e},
bb8:function bb8(){},
bbc:function bbc(d){this.a=d},
bs0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,a0,a1,a2){var x=p==null?0/0:p,w=n==null?0/0:n,v=q==null?0/0:q,u=o==null?0/0:o,t=e==null?0:e,s=f==null?0:f,r=d==null?C.D:d
return new A.pm(l,g,m,a1,k,a2,a0,x,w,t,v,u,s,i,r,j,h,m)},
aHL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0){var x,w,v=null
if(g==null)x=k==null?D.Sz:v
else x=g
w=f==null?A.ave(!1,v,0,v,!1,D.vv):f
x=new A.e1(a0,!0,x,k,e,l,h,!1,r,n,!1,w,d==null?A.ave(!1,v,0,v,!1,D.vv):d,j,u,i,s,!1,p)
x.apY(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,u,a0)
return x},
bOw(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=B.aa(d.x,e.x,f)
n.toString
x=A.bxn(d.ay,e.ay,f)
w=A.bxn(d.ch,e.ch,f)
v=B.aa(d.as,e.as,f)
v.toString
u=e.CW
t=A.ke(d.cy,e.cy,f,A.Z0(),y.S)
s=B.X(d.r,e.r,f)
r=B.qV(d.w,e.w,f)
q=A.ke(d.a,e.a,f,A.bYd(),y.cw)
q.toString
p=B.bB9(d.db,e.db,f)
p.toString
o=B.aa(d.dy.a,e.dy.a,f)
o.toString
return A.aHL(w,n,x,s,e.z,t,new A.y1(u.a,u.b,u.c),r,e.y,!1,e.at,!1,new A.Nq(o),!1,v,p,!0,e.cx,q)},
ave(d,e,f,g,h,i){var x
if(e==null)x=g==null?B.aA(C.d.b5(127.5),D.db.v()>>>16&255,D.db.v()>>>8&255,D.db.v()&255):null
else x=e
return new A.a_m(h,x,g,i,f,!1)},
bxn(d,e,f){var x=e.d,w=d.d.b,v=x.b,u=B.X(w.a,v.a,f),t=B.qV(w.b,v.b,f),s=B.aa(w.c,v.c,f)
s.toString
s=A.byJ(u,A.ke(w.d,v.d,f,A.Z0(),y.S),t,s)
t=B.X(d.b,e.b,f)
v=B.qV(d.c,e.c,f)
w=B.aa(d.e,e.e,f)
w.toString
return A.ave(!1,t,w,v,e.a,new A.JU(!1,s,x.c,!0))},
bKB(d,e,f){var x=B.X(d.c,e.c,f),w=B.qV(d.d,e.d,f)
if(x==null)x=w==null?B.aA(C.d.b5(127.5),D.db.v()>>>16&255,D.db.v()>>>8&255,D.db.v()&255):null
return new A.mk(e.a,e.b,x,w)},
c0t(d){return!0},
bu1(d,e,f){var x=f.w,w=x==null
if(!w&&x instanceof B.lC)return A.buK(x.a,A.brE(x),e/100)
x=w?null:C.b.ga0(x.a)
if(x==null)x=f.r
return x==null?D.db:x},
bVS(d,e,f){var x,w=f.w,v=w==null
if(!v&&w instanceof B.lC)x=A.buK(w.a,A.brE(w),e/100)
else{w=v?null:C.b.ga0(w.a)
x=w==null?f.r:w
if(x==null)x=D.db}return A.axn(x,40)},
bDF(d,e,f,g,h){var x,w=A.bu1(d,e,f),v=f.w,u=v==null
if(!u&&v instanceof B.lC)x=A.buK(v.a,A.brE(v),e/100)
else{v=u?null:C.b.ga0(v.a)
x=v==null?f.r:v
if(x==null)x=D.db}v=A.axn(x,40)
return new A.M0(w,h==null?4:h,v)},
c0r(d,e){return!0},
bY0(d,e){return Math.abs(d.a-e.a)},
bZb(d,e){var x=J.d3(e,new A.bns(d),y.bY)
x=B.P(x,x.$ti.i("au.E"))
return x},
bZ7(d,e){return-1/0},
bZ6(d,e){return d.a[e].b},
bER(d){var x=J.d3(d,new A.bnp(),y.fT)
x=B.P(x,x.$ti.i("au.E"))
return x},
bEQ(d){return A.axn(D.db,15)},
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
e1:function e1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aHM:function aHM(){},
Nq:function Nq(d){this.a=d},
a_m:function a_m(d,e,f,g,h,i){var _=this
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
y1:function y1(d,e,f){this.a=d
this.b=e
this.c=f},
aHx:function aHx(d,e){this.a=d
this.b=e},
a3H:function a3H(){},
E_:function E_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bns:function bns(d){this.a=d},
bnr:function bnr(d){this.a=d},
a5w:function a5w(){},
bnp:function bnp(){},
mG:function mG(){},
pQ:function pQ(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
r9:function r9(d,e){this.a=d
this.b=e},
t7:function t7(d,e){this.a=d
this.b=e},
FK:function FK(d){this.a=d},
Nr:function Nr(d){this.a=d},
yK:function yK(d,e){this.a=d
this.b=e},
afA:function afA(){},
afB:function afB(){},
afO:function afO(){},
aiO:function aiO(){},
aiR:function aiR(){},
akr:function akr(){},
aks:function aks(){},
akt:function akt(){},
akv:function akv(){},
akw:function akw(){},
akx:function akx(){},
aky:function aky(){},
aoL:function aoL(){},
aqm:function aqm(){},
aHN:function aHN(d){this.a=d},
aHO:function aHO(){},
aHP:function aHP(){},
yL:function yL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aku:function aku(){},
aHQ:function aHQ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aHT:function aHT(){},
aHR:function aHR(d,e,f){this.a=d
this.b=e
this.c=f},
aHS:function aHS(d,e,f){this.a=d
this.b=e
this.c=f},
aHU:function aHU(){},
v0:function v0(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a5v:function a5v(d,e,f){this.d=d
this.e=e
this.a=f},
a9B:function a9B(d,e,f,g,h,i,j,k){var _=this
_.aA=d
_.hW=e
_.cV=f
_.fS=g
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
bqH(d,e){var x,w,v,u,t,s,r,q,p=d.ch,o=B.by(p.length,0,!1,y.i),n=B.ab(p),m=new B.a9(p,new A.avh(),n.i("a9<1,M>")).kk(0,new A.avi()),l=e-m,k=new A.avl(l,d,o)
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
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avj(r,l/(q-1),o))
break
case 4:r={}
q=p.length
r.a=0
new B.iJ(p,n.i("iJ<1>")).aq(0,new A.avk(r,l/(q*2),o))
break
case 3:k.$0()
break}return o},
avh:function avh(){},
avi:function avi(){},
avl:function avl(d,e,f){this.a=d
this.b=e
this.c=f},
avm:function avm(d,e,f){this.a=d
this.b=e
this.c=f},
avj:function avj(d,e,f){this.a=d
this.b=e
this.c=f},
avk:function avk(d,e,f){this.a=d
this.b=e
this.c=f},
brE(d){var x,w={}
w.a=B.b([],y.n)
x=d.b
if(x==null||x.length!==d.a.length){x=d.a
if(x.length>1)new B.iJ(x,B.ab(x).i("iJ<1>")).aq(0,new A.aEY(w,d))
else throw B.e(B.bC('"colors" must have length > 1.',null))}else w.a=x
return w.a},
aEY:function aEY(d,e){this.a=d
this.b=e},
ayx(d,e){var x,w
if(e!=null){x=B.ab(e).i("a9<1,M>")
w=B.P(new B.a9(e,new A.ayy(),x),x.i("au.E"))
return A.bZ_(d,new A.a00(w,y.cX))}else return d},
ayy:function ayy(){},
bSh(d,e){var x=!0
if(d!==C.eU)if(!(d===C.aw&&e===C.u))x=d===C.jQ&&e===C.aS
if(x)return D.De
else{x=!0
if(d!==C.hi)if(!(d===C.jQ&&e===C.u))x=d===C.aw&&e===C.aS
if(x)return D.Df
else return D.a7A}},
Mx:function Mx(d,e){this.a=d
this.b=e},
a_R:function a_R(d,e){this.a=d
this.b=e},
yO:function yO(d,e){this.a=d
this.$ti=e},
akF:function akF(){},
bZ_(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=B.cB($.af().r)
for(x=B.b([],y.C),w=new B.Nj(d,!1,x),v=e.a,u=m.e;w.t();){t=w.c
if(t===0||w.f)B.V(B.fk('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--t
s=new B.Ni(w,t)
w.CH()
r=x[t].b
r===$&&B.a()
r.a.length()
q=0
p=!0
for(;;){w.CH()
r=x[t].b
r===$&&B.a()
if(!(q<r.a.length()))break
r=e.b
if(r>=v.length)r=e.b=0
e.b=r+1
o=v[r]
if(p){r=new B.Jk(d.aRq(s,q,q+o,!0),C.p,null)
u.push(r)
n=m.d
if(n!=null)r.hD(n)}q+=o
p=!p}}return m},
a00:function a00(d,e){this.a=d
this.b=0
this.$ti=e},
b_3:function b_3(){},
Pn:function Pn(d,e,f,g,h,i,j){var _=this
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
aSe:function aSe(d){this.a=d},
a3A:function a3A(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
brs(d){var x,w,v,u=y.U,t=B.b([B.b([],u)],y.aA)
for(x=d.length,w=0;w<d.length;d.length===x||(0,B.J)(d),++w){v=d[w]
if(!v.k(0,D.fC))C.b.gaf(t).push(v)
else if(C.b.gaf(t).length!==0)t.push(B.b([],u))}if(C.b.gaf(t).length===0)t.pop()
return t},
bKE(d){var x,w=d.d
if(w.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
w=w.a
x=!1
if(w.geg(w)===0){w=d.a.a
if(w.geg(w)===0){w=d.b.a
if(w.geg(w)===0){w=d.c.a
w=w.geg(w)===0}else w=x}else w=x}else w=x
if(w)return!1
return!0},
axn(d,e){var x=1-e/100
return B.aA(d.gfC(d),C.d.b5(d.gNh()*x),C.d.b5(d.gFH()*x),C.d.b5(d.gJP()*x))},
byH(d){var x=d.a,w=x?d.b.d.b:0,v=x?d.b.a.b:0,u=x?d.b.b.b:0
return new B.ai(w,v,u,x?d.b.c.b:0)},
brt(d){var x=d.a,w=x?A.aWz(d.b):0,v=x?A.aWz(d.c):0,u=x?A.aWz(d.d):0
return new B.ai(w,v,u,x?A.aWz(d.e):0)},
bPL(d){var x
if(d.c===0){d.seQ(null)
x=B.bY(d.r)
d.r=B.aA(0,x.v()>>>16&255,x.v()>>>8&255,x.v()&255).gp(0)}},
bsm(d,e,f,g){var x
if(f!=null){d.r=C.B.gp(0)
d.seQ(f.mJ(0,g))}else{x=e==null?C.D:e
d.r=x.gp(x)
d.seQ(null)}},
aWz(d){var x=d.c
return x.a&&x.c!==0?0+x.c:0},
ke(d,e,f,g,h){var x,w,v,u=d!=null
if(u&&e!=null&&d.length===e.length){x=d.length
w=J.kD(x,h)
for(v=0;v<x;++v)w[v]=g.$3(d[v],e[v],f)
return w}else if(u&&e!=null){x=e.length
w=J.kD(x,h)
for(v=0;v<x;++v){u=v>=d.length?e[v]:d[v]
w[v]=g.$3(u,e[v],f)}return w}else return e},
c_j(d,e,f){return C.d.b5(d+(e-d)*f)},
buK(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=d.length
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
A.a5h.prototype={
A(d){var x,w,v,u=this,t=null,s=u.r,r=s?C.aY:C.k
s=s?C.n:C.an
x=y.p
w=B.b([],x)
C.b.M(w,B.b([B.cW(u.x,C.n,t,18),C.br],x))
w.push(B.b_(new B.f1(u.c,t),1))
w=B.ax(w,C.F,C.f,C.i,0,t,t)
v=u.w
x=B.b([w,C.a4,B.l(u.d,1,C.aj,t,B.cj(v==null?C.h:v,22,C.O),t,t,t)],x)
return B.bX(s,B.aj(x,C.F,C.h9,C.i),r,t,C.ar,t,3)}}
A.ur.prototype={
L9(d){return this.aRt(d)},
aRt(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$L9=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eH("finance_summary",B.a5(["p_from",E.qO(d.a),"p_to",E.qO(d.b)],t,s),s),$async$L9)
case 3:r=f
if(r==null){v=D.am5
x=1
break}if(y.f.b(r)){v=B.eg(r,t,s)
x=1
break}v=D.amw
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L9,w)},
L8(d){return this.aRs(d)},
aRs(d){var x=0,w=B.r(y.c),v,u=this,t,s,r
var $async$L8=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.N
s=y.z
x=3
return B.k(u.a.eH("finance_kpis",B.a5(["p_from",E.qO(d.a),"p_to",E.qO(d.b)],t,s),s),$async$L8)
case 3:r=f
if(y.f.b(r)){v=B.eg(r,t,s)
x=1
break}v=D.alP
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L8,w)},
px(d){return this.apG(d)},
apG(d){var x=0,w=B.r(y.S),v,u=this,t,s,r
var $async$px=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.hZ("sevdesk-sync",B.a5(["from",E.qO(d.a),"to",E.qO(d.b)],t,t)),$async$px)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"upserted")=="number"){v=C.d.a4(B.fq(J.a3(s,"upserted")))
x=1
break}v=0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$px,w)},
L4(d){return this.aRi(d)},
aRi(d){var x=0,w=B.r(y.N),v,u=this,t,s,r
var $async$L4=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:r=u.a.as
r===$&&B.a()
t=y.N
x=3
return B.k(r.hZ("finance-export-pdf",B.a5(["from",E.qO(d.a),"to",E.qO(d.b)],t,t)),$async$L4)
case 3:s=f.a
if(y.f.b(s)&&typeof J.a3(s,"base64")=="string"){v=B.aC(J.a3(s,"base64"))
x=1
break}throw B.e(B.dB("PDF-Export fehlgeschlagen"))
case 1:return B.p(v,w)}})
return B.q($async$L4,w)}}
A.Dk.prototype={
FB(d){return this.aiT(d)},
aiT(d){var x=0,w=B.r(y.d),v,u=2,t=[],s=this,r,q,p,o,n
var $async$FB=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L9(d),$async$FB)
case 7:r=f
p=A.aCJ(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.Hb(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$FB,w)},
Fx(d){return this.aiE(d)},
aiE(d){var x=0,w=B.r(y.X),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Fx=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L8(d),$async$Fx)
case 7:r=f
p=A.bNd(r)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=B.a1(n)
p=s.Hb(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$Fx,w)},
px(d){return this.apH(d)},
apH(d){var x=0,w=B.r(y.S),v,u=2,t=[],s=this,r,q,p,o
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
q=s.Hb(r)
throw B.e(q)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$px,w)},
L3(d){return this.aRh(d)},
aRh(d){var x=0,w=B.r(y.gc),v,u=2,t=[],s=this,r,q,p,o,n
var $async$L3=B.n(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return B.k(s.a.L4(d),$async$L3)
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
p=s.Hb(q)
throw B.e(p)
x=6
break
case 3:x=2
break
case 6:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$L3,w)},
Hb(d){if(d instanceof B.xX)return d
if(d instanceof B.lO){if(d.b==="42501")return new B.vm(d.a)
return new B.rO(d.a)}if(d instanceof B.Ml)return new B.rO("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Au("Unerwarteter Fehler: "+B.i(d))},
$iaCx:1}
A.pS.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.v6.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f]}}
A.w_.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.axX.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.az3.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w]}}
A.nJ.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.BX.prototype={
gbH(){var x=this
return[x.a,x.d,x.e,x.f]}}
A.nK.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.y_.prototype={
Gy(d){return this.apF(0)},
apF(d){var x=0,w=B.r(y.h6),v,u=this,t,s,r,q
var $async$Gy=B.n(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:q={}
u.se3(0,C.dj)
t=u.r
s=t.aP(0,$.wW(),y.P)
q.a=null
x=3
return B.k(B.oN(new A.aCt(q,u,s),y.H),$async$Gy)
case 3:u.se3(0,f)
r=u.f
if(r.ghm(r)==null){r=$.bqe()
t=t.e
t===$&&B.a()
t.cr(r)}v=q.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$Gy,w)},
L2(){return this.aRg()},
aRg(){var x=0,w=B.r(y.aD),v,u=this,t,s,r
var $async$L2=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:r={}
u.se3(0,C.dj)
t=u.r.aP(0,$.wW(),y.P)
r.a=null
x=3
return B.k(B.oN(new A.aCs(r,u,t),y.H),$async$L2)
case 3:u.se3(0,e)
s=u.f
v=s.ghm(s)!=null?null:r.a
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$L2,w)}}
A.y0.prototype={
dK(d,e){var x=null,w=e.aG($.wW(),y.P),v=e.aG($.bqe(),y.h)
return B.jV(B.eb(B.b([new B.hB("Finanzen","Dashboard",new A.aeO(e.aG($.bqd(),y.b).gj9(),new A.aCB(this,d,e),new A.aCC(this,d,e),new A.aCD(d),new A.aCE(this,d,e,w),x),x),C.aI,new A.alZ(w,x),C.cg,D.acM,C.cg,B.dw(v,new A.aCF(),new A.aCG(),new A.aCH(),!1,!0,!1,y.d,y.l)],y.p),C.d1,x,!1),C.n,new A.aCI(e))},
J_(d,e){return this.aJO(d,e)},
aJO(d,e){var x=0,w=B.r(y.H),v,u,t,s
var $async$J_=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=$.bqd()
x=3
return B.k(e.aP(0,t.gi1(),y.F).Gy(0),$async$J_)
case 3:s=g
if(d.e==null){x=1
break}t=e.aP(0,t,y.b)
t=t.ghm(t)
u=d.P(y.q).f
u.bR(B.ch(null,null,null,null,null,C.r,null,B.l(t==null?"sevDesk synchronisiert: "+B.i(s)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.R,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(v,w)}})
return B.q($async$J_,w)},
AZ(d,e){return this.avC(d,e)},
avC(d,e){var x=0,w=B.r(y.H),v,u
var $async$AZ=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:x=3
return B.k(e.aP(0,$.bqd().gi1(),y.F).L2(),$async$AZ)
case 3:u=g
if(d.e==null){x=1
break}if(u==null){d.P(y.q).f.bR(D.att)
x=1
break}x=4
return B.k(E.bAx(u,"finanzauswertung.pdf"),$async$AZ)
case 4:case 1:return B.p(v,w)}})
return B.q($async$AZ,w)},
B_(d,e,f){return this.aHA(d,e,f)},
aHA(d,e,f){var x=0,w=B.r(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$B_=B.n(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=3
return B.k(B.le(null,null,!0,null,new A.aCA(f,d),d,null,!0,!0,y.y),$async$B_)
case 3:if(h!==!0){x=1
break}u=5
s=new E.nl(e.aP(0,$.cd(),y.A))
q=f.a
p=f.b
o=$.ej()
n=o.aH(q)
o=o.aH(p)
x=8
return B.k(s.ze("finance_period",q,p,B.a5(["period_from",q.eZ()],y.N,y.z),"Finanzauswertung "+n+" \u2013 "+o),$async$B_)
case 8:if(d.e!=null)d.P(y.q).f.bR(F.uC)
u=2
x=7
break
case 5:u=4
l=t.pop()
r=B.a1(l)
if(d.e!=null)d.P(y.q).f.bR(B.ch(null,null,null,null,null,C.r,null,B.l("Fehler: "+B.i(r),null,null,null,null,null,null,null),null,C.R,null,null,null,null,null,null,null,null,null,null))
x=7
break
case 4:x=2
break
case 7:case 1:return B.p(v,w)
case 2:return B.o(t.at(-1),w)}})
return B.q($async$B_,w)}}
A.aeO.prototype={
A(d){var x=this,w=null,v=A.b9L(C.n,F.iX,C.n,x.r,"Freigabe f\xfcr Auswertung anfordern"),u=A.b9L(w,D.a97,w,x.f,"Gesellschafter-Freigaben"),t=x.c,s=A.b9L(w,D.a8k,w,t?w:x.d,"sevDesk synchronisieren")
return B.ax(B.b([v,C.br,u,C.br,s,C.br,A.b9L(C.ak,C.kQ,C.ak,t?w:x.e,"PDF-Export")],y.p),C.o,C.f,C.P,0,w,w)}}
A.ajP.prototype={
A(d){var x,w=this,v=null,u=B.b1(12),t=B.b1(12),s=B.b1(12),r=w.w
if(r==null)r=C.an
r=B.dr(r,1)
x=w.r
if(x==null)x=C.h
return B.ace(B.e2(!1,C.Y,!0,u,B.fh(!1,t,!0,B.bj(v,B.cW(w.c,x,v,20),C.q,v,v,new B.bb(v,v,r,s,v,v,C.H),v,40,v,v,v,v,v,40),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.e,v,v,v,v,v,v,v),C.q,C.ax,0,v,v,v,v,v,C.bL),v,w.d,v,v)}}
A.alZ.prototype={
dK(d,e){var x=null,w=this.e,v=$.ej(),u=y.p
return B.bX(x,B.aj(B.b([D.a70,C.a4,B.ax(B.b([D.a9O,C.bv,B.b_(B.l(v.aH(w.a)+" \u2013 "+v.aH(w.b),x,x,x,B.L(C.h,16,C.O),x,x,x),1)],u),C.o,C.f,C.i,0,x,x),C.w,B.tg(C.dh,B.b([new A.I1("Monat",new A.bdn(e),x,x),new A.I1("Jahr (YTD)",new A.bdo(e),x,x),new A.I1("Zeitraum w\xe4hlen \u2026",new A.bdp(this,d,e),D.a8p,x)],u),C.eX,6,8)],u),C.F,C.f,C.i),x,x,C.J,x,3)},
Io(d,e){return this.aGy(d,e)},
aGy(d,e){var x=0,w=B.r(y.H),v=this,u,t,s
var $async$Io=B.n(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:u=new B.bg(Date.now(),0,!1)
t=v.e
x=2
return B.k(E.bpv(new A.bdm(),d,B.bK(B.aX(u)-5,1,1,0,0,0,0),new B.ms(t.a,t.b,y.bz),B.bK(B.aX(u)+1,1,1,0,0,0,0),C.eL),$async$Io)
case 2:s=g
if(s!=null)e.aP(0,$.wW().gi1(),y.V).An(0,new E.mx(s.a,s.b))
return B.p(null,w)}})
return B.q($async$Io,w)}}
A.I1.prototype={
A(d){var x=null,w=B.b1(9999),v=B.b1(9999),u=B.b1(9999),t=B.dr(C.an,1),s=y.p,r=B.b([],s),q=this.e
if(q!=null)C.b.M(r,B.b([B.cW(q,C.h,x,14),C.br],s))
r.push(B.l(this.c,x,x,x,B.L(C.h,13,C.O),x,x,x))
return B.e2(!1,C.Y,!0,w,B.fh(!1,v,!0,B.bj(x,B.ax(r,C.o,C.f,C.P,0,x,x),C.q,x,x,new B.bb(x,x,t,u,x,x,C.H),x,x,x,x,C.kD,x,x,x),x,!0,x,x,x,x,x,x,x,x,x,x,x,this.d,x,x,x,x,x,x,x),C.q,C.ax,0,x,x,x,x,x,C.bL)}}
A.Ix.prototype={
A(d){var x,w,v,u,t=null,s=y.p,r=B.b([B.kF(new A.biO(this)),C.cg,D.a6U,C.w],s),q=this.c.w
if(q.length===0)r.push(B.bX(t,B.ax(B.b([D.aam,C.aL,B.b_(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",t,t,t,B.L(C.x,14,C.m),t,t,t),1)],s),C.o,C.f,C.i,0,t,t),C.ax,t,C.J,t,3))
else{x=B.b([],s)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
C.b.M(x,B.b([new A.aeM(u.a,u.b,u.c==="revenue",u.d,t),C.a4],s))}r.push(B.aj(x,C.o,C.f,C.i))}return B.aj(r,C.ab,C.f,C.i)}}
A.aeM.prototype={
A(d){var x=this,w=null,v=x.e,u=v?C.aY:C.ax,t=B.dr(v?C.n:C.an,1),s=B.b1(4),r=x.c
s=B.bj(C.a_,B.l(C.c.a1(r,0,1),w,w,w,B.cj(C.h,14,C.t),w,w,w),C.q,w,w,new B.bb(u,w,t,s,w,w,C.H),w,36,w,w,w,w,w,36)
r=B.l(r+" \xb7 "+x.d,1,C.aj,w,B.L(C.h,14,C.O),w,w,w)
u=v?"Erl\xf6s":"Aufwand"
t=y.p
u=B.b_(B.aj(B.b([r,B.l(u,w,w,w,B.L(C.x,12,C.m),w,w,w)],t),C.F,C.f,C.i),1)
r=$.eP().aH(x.f)
return B.bX(w,B.ax(B.b([s,C.aL,u,B.l(r,w,w,w,B.L(v?C.aN:C.h,15,C.O),w,w,w)],t),C.o,C.f,C.i,0,w,w),w,w,C.fb,w,3)}}
A.H9.prototype={
A(d){var x=null
return B.bX(C.ak,B.ax(B.b([D.aaG,C.aL,B.b_(B.l(this.c,x,x,x,B.L(C.h,14,C.m),x,x,x),1)],y.p),C.o,C.f,C.i,0,x,x),C.fz,x,C.J,x,3)}}
A.a5i.prototype={
dK(d,e){return B.dw(e.aG($.bJm(),y.e),new A.aHu(),new A.aHv(),new A.aHw(),!1,!0,!1,y.X,y.l)}}
A.Ht.prototype={
A(d){var x=null,w=this.c,v=w.x,u=v>0,t=u?w.a.c/v:0,s=u?w.r.a/v:0
v=y.p
u=B.b([D.aqY,C.w,B.kF(new A.bb0(this,t,100-w.w.a,s)),C.w,new A.aj9(x),C.aI,D.aqU,C.w,B.bX(x,new A.agc(w,x),x,x,C.J,x,3),C.aI,D.aqP,C.w,new A.agt(w,x),C.aI,D.aqT,C.w,new A.akO(w,x),C.aI,D.aqR,C.w,new A.ahf(w,x)],v)
if(w.f.length!==0)C.b.M(u,B.b([C.aI,D.aqV,C.w,new A.aqj(w,x)],v))
return B.aj(u,C.ab,C.f,C.i)}}
A.aj9.prototype={
A(d){var x=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",x,x,x,B.L(C.x,11,C.m).fP(1.35),x,x,x)}}
A.akk.prototype={
A(d){var x,w,v,u,t,s,r=this,q=null
if(r.x)x=C.c.cG(r.d,"-")?C.ak:C.aN
else x=C.h
w=y.p
v=B.b([B.b_(B.l(r.c.toUpperCase(),q,q,q,B.L(C.x,10,C.t).ih(0.6),q,q,q),1)],w)
u=r.Q
if(u!=null){t=B.dr(C.ak,0.8)
s=B.b1(4)
v.push(B.bj(q,B.l("Ziel "+u,q,q,q,B.L(C.ak,9,C.t),q,q,q),C.q,q,q,new B.bb(q,q,t,s,q,q,C.H),q,q,q,q,C.mW,q,q,q))}v=B.b([B.ax(v,C.o,C.f,C.i,0,q,q),C.aW,new A.a3A(C.AO,C.ek,B.l(r.d,q,q,q,B.cj(x,22,C.t),q,q,q),q)],w)
u=r.e
if(u!=null)v.push(B.l(u,2,C.aj,q,B.L(C.x,10,C.bf),q,q,q))
v.push(C.cJ)
v.push(B.ax(B.b([new A.Ts("Vormonat",r.r,q),C.df,new A.Ts("Vorjahr",r.f,q)],w),C.o,C.f,C.i,0,q,q))
v.push(C.cJ)
v.push(B.b_(new A.ap7(r.w,r.y,r.z,q),1))
return B.bX(q,B.aj(v,C.F,C.f,C.i),q,q,C.dn,q,3)}}
A.Ts.prototype={
A(d){var x,w,v,u,t,s=null,r=this.d
if(r==null){r=B.b1(4)
return B.bj(s,B.l(this.c+" \u2014",s,s,s,B.L(C.x,9,C.t),s,s,s),C.q,s,s,new B.bb(C.an,s,s,r,s,s,C.H),s,s,s,s,C.mW,s,s,s)}x=r>=0
w=x?C.aN:C.ak
v=w.mi(0.12)
u=B.dr(w,0.7)
t=B.b1(4)
return B.bj(s,B.ax(B.b([B.cW(x?F.a7G:D.a7F,w,s,10),F.at9,B.l(this.c+" "+C.d.an(r,1)+" %",s,s,s,B.L(w,9,C.t),s,s,s)],y.p),C.o,C.f,C.P,0,s,s),C.q,s,s,new B.bb(v,s,u,t,s,s,C.H),s,s,s,s,C.mW,s,s,s)}}
A.ap7.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c
if(k.length<2)return C.av
x=B.b([],y.U)
for(w=0;w<k.length;++w)x.push(new A.ep(w,k[w]))
v=C.b.kk(k,new A.bie())
u=C.b.kk(k,new A.bif())
t=this.d
s=t!=null
if(s){if(t<v)v=t
if(t>u)u=t}r=this.e
q=r!=null
if(q){if(r<v)v=r
if(r>u)u=r}p=Math.abs(u-v)<0.001
k=new A.big(k.length-1)
o=p?v-1:v
n=p?u+1:u
m=A.a3F(l,!1)
x=B.b([A.aHL(l,2,A.ave(!1,C.n.mi(0.16),0,l,!0,D.vv),C.n,0.35,l,D.D5,l,!0,!1,!0,!1,D.Eo,!1,10,D.XN,!0,C.l5,x)],y.u)
if(s)x.push(k.$1(t))
if(q)x.push(k.$1(r))
return new A.Np(A.bs0(l,l,l,D.aiv,m,D.B1,D.D1,D.D6,x,D.acQ,l,n,l,o,D.X8,D.aiw,D.a7l),C.ap,C.ac,l,l)}}
A.agc.prototype={
A(d){var x,w,v,u,t,s,r=null,q=this.c.d
if(q.length===0)return new A.TR("Noch keine Trend-Daten f\xfcr den Zeitraum.",r)
x=C.b.fT(q,0,new A.b2k())
w=x>0?x*1.15:10
v=B.b([],y.O)
for(u=y.Y,t=0;t<q.length;++t){s=q[t]
v.push(A.avn(B.b([A.a_o(r,r,D.Av,r,C.n,r,r,r,s.b,6),A.a_o(r,r,D.Av,r,C.h,r,r,r,s.c,6)],u),2,r,r,t))}return B.ct(A.bxo(A.avg(r,r,v,r,r,A.a3F(r,!1),r,new A.y2(!0,!0,r,new A.b2l(),A.YW(),!1,r,A.asR(),A.YW()),r,w,r,r,new A.ut(!0,new A.oO(16,r,new A.pI(!0,new A.b2m(this),46,r),!0),D.k6,D.k6,new A.oO(16,r,new A.pI(!0,new A.b2n(q),26,r),!0)))),220,r)},
aJ6(d){if(Math.abs(d)>=1000)return C.d.an(d/1000,1)+" k"
return C.d.an(d,0)}}
A.agt.prototype={
A(d){var x,w,v,u,t,s=null,r=B.b(["Aktuell","Vormonat","Vorjahr"],y.gM),q=this.c,p=q.a,o=q.c
q=q.b
x=y.n
w=B.b([p.c,o.c,q.c],x)
v=B.b([p.e,o.e,q.e],x)
x=y.gj
q=B.P(new B.a9(w,new A.b35(),x),y.i)
C.b.M(q,new B.a9(v,new A.b36(),x))
u=C.b.fT(q,0,new A.b37())
q=u>0?u*1.2:10
p=B.b([],y.O)
for(o=y.Y,t=0;t<3;++t)p.push(A.avn(B.b([A.a_o(s,s,s,s,C.n,s,s,s,w[t],14),A.a_o(s,s,s,s,C.aN,s,s,s,v[t],14)],o),4,s,s,t))
return B.bX(s,B.ct(A.bxo(A.avg(s,s,p,s,s,A.a3F(s,!1),s,D.D6,s,q,s,s,new A.ut(!0,D.k6,D.k6,D.k6,new A.oO(16,s,new A.pI(!0,new A.b38(r),26,s),!0)))),200,s),s,s,C.J,s,3)}}
A.akO.prototype={
A(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c.e
if(m.length===0)return D.aFx
x=new B.a9(m,new A.bbu(),B.ab(m).i("a9<1,M>")).kk(0,new A.bbv())
w=y.p
v=B.b([],w)
for(u=m.length,t=0;t<m.length;m.length===u||(0,B.J)(m),++t){s=m[t]
r=B.l(s.b,n,n,n,B.L(C.h,14,C.t),n,n,n)
q=$.eP()
p=s.d
o=new B.aS(4,4)
p=B.b([B.ax(B.b([new B.qH(1,C.hG,B.aj(B.b([r,B.l(""+s.e+" Verk\xe4ufe \xb7 \xd8 "+q.aH(s.f),n,n,n,B.L(C.x,12,C.bf),n,n,n)],w),C.F,C.f,C.i),n),C.bv,B.l(q.aH(p),n,n,n,B.cj(C.h,16,C.t),n,n,n)],w),C.o,C.f,C.i,0,n,n),C.cJ,new B.CF(new B.d2(o,o,o,o),C.bI,B.a5x(C.an,8,C.d.c4(p/x,0,1),D.Aj),n)],w)
r=C.b.gaf(m)
if(s!==r)r=B.G(s)===B.G(r)&&B.YZ(s.gbH(),r.gbH())
else r=!0
if(!r)p.push(C.w)
C.b.M(v,p)}return B.bX(n,B.aj(v,C.o,C.f,C.i),n,n,C.J,n,3)}}
A.ahf.prototype={
A(d){var x=null,w=this.c.r
return B.bX(x,B.ax(B.b([B.b_(new A.Il("Aktive Kunden",""+w.c,x),1),B.b_(new A.Il("K\xe4ufe",""+w.a,x),1),B.b_(new A.Il("\xd8-Warenkorb",$.eP().aH(w.d),x),1)],y.p),C.o,C.f,C.i,0,x,x),x,x,C.J,x,3)}}
A.Il.prototype={
A(d){var x=null
return B.aj(B.b([B.l(this.c.toUpperCase(),x,x,x,B.L(C.x,10,C.t).ih(0.6),x,x,x),C.cI,B.l(this.d,x,x,x,B.cj(C.h,20,C.t),x,x,x)],y.p),C.F,C.f,C.P)}}
A.aqj.prototype={
A(d){var x,w,v,u,t,s=null,r=this.c.f,q=new B.a9(r,new A.bk4(),B.ab(r).i("a9<1,M>")).kk(0,new A.bk5()),p=y.p,o=B.b([],p)
for(x=r.length,w=0;w<r.length;r.length===x||(0,B.J)(r),++w){v=r[w]
u=v.d
t=new B.aS(4,4)
u=B.b([B.ax(B.b([new B.qH(1,C.hG,B.l(v.b,1,C.aj,s,B.L(C.h,13,C.t),s,s,s),s),B.l(""+v.c+"\xd7 ",s,s,s,B.L(C.x,12,C.O),s,s,s),B.l($.eP().aH(u),s,s,s,B.L(C.h,13,C.t),s,s,s)],p),C.o,C.f,C.i,0,s,s),C.aW,new B.CF(new B.d2(t,t,t,t),C.bI,B.a5x(C.an,6,C.d.c4(u/q,0,1),D.Aj),s)],p)
t=C.b.gaf(r)
if(v!==t)t=B.G(v)===B.G(t)&&B.YZ(v.gbH(),t.gbH())
else t=!0
if(!t)u.push(C.a4)
C.b.M(o,u)}return B.bX(s,B.aj(o,C.o,C.f,C.i),s,s,C.J,s,3)}}
A.TR.prototype={
A(d){var x=null
return B.bX(x,B.l(this.c,x,x,x,B.L(C.x,13,C.m),x,x,x),C.ax,x,C.J,x,3)}}
A.b8.prototype={
k(d,e){var x
if(e==null)return!1
if(this!==e)x=y.E.b(e)&&B.G(this)===B.G(e)&&B.YZ(this.gbH(),e.gbH())
else x=!0
return x},
gu(d){return(B.eu(B.G(this))^B.bFl(this.gbH()))>>>0},
j(d){B.byD()
return B.G(this).j(0)}}
A.JV.prototype={
Y(){return new A.Sq(B.y(y.S,y.I),new A.avq(B.y(y.s,y.T)),null,null)}}
A.Sq.prototype={
A(d){var x,w=this,v=w.a1j(),u=w.CW
u.toString
u=w.a1k(u.ar(0,w.ghA().gp(0)))
x=w.a1k(v)
w.a.toString
return new A.JQ(new A.a_n(u,x,null),v,null)},
a1k(d){var x,w,v,u,t,s
if(!d.cy.a)return d
x=B.b([],y.O)
for(w=d.ch,v=this.cy,u=0;u<w.length;++u){t=w[u]
s=v.h(0,u)
if(s==null)s=t.e
x.push(A.avn(t.c,t.d,!1,s,t.a))}return d.aOj(x)},
a1j(){var x,w,v=this,u=v.a.r,t=u.x,s=isNaN(t)
if(s||isNaN(u.y)){x=v.db.U7(u.ch)
if(s)t=x.a
s=u.y
u=u.aPe(isNaN(s)?x.b:s,t)}w=u.cy
if(w.a){v.cx=w.b
return u.aOk(A.bqI(!1,!0,!0,w.d,w.c,v.gard(),w.f,w.e))}return u},
are(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(!d.gaeN()||e==null||e.a==null){x=w.cy
w.L(x.gaNJ(x))
return}w.L(new A.b0U(w,e))},
nP(d){var x=this
x.CW=y.bn.a(d.$3(x.CW,x.a1j(),new A.b0V(x)))}}
A.ns.prototype={
UK(d,e,f,g){var x=this,w=d==null?x.ch:d,v=e==null?x.cy:e,u=f==null?x.y:f,t=g==null?x.x:g
return A.avg(x.cx,x.as,w,v,x.z,x.a,x.at,x.c,x.CW,u,t,x.e,x.d)},
aPe(d,e){return this.UK(null,null,d,e)},
aOk(d){return this.UK(null,d,null,null)},
aOj(d){return this.UK(d,null,null,null)},
WF(d,e,f){var x,w,v,u=A.ke(d.ch,e.ch,f,A.bYi(),y.dB),t=B.aa(d.CW,e.CW,f),s=A.byK(d.d,e.d,f),r=A.bAG(d.e,e.e,f),q=A.byI(d.c,e.c,f),p=e.a
p=A.a3F(B.a_E(d.a.b,p.b,f),p.a)
x=B.aa(d.y,e.y,f)
w=B.aa(d.x,e.x,f)
v=B.aa(d.z,e.z,f)
s=A.avg(e.cx,B.X(d.as,e.as,f),u,e.cy,v,p,A.byF(d.at,e.at,f),q,t,x,w,r,s)
return s},
gbH(){var x=this
return[x.ch,x.CW,x.cx,x.d,x.cy,x.y,x.x,x.z,x.c,x.a,x.e,x.as,x.at]}}
A.avf.prototype={
K(){return"BarChartAlignment."+this.b}}
A.ft.prototype={
gdm(d){var x,w=this.c
if(w.length===0)return 0
x=new B.a9(w,new A.avo(),B.ab(w).i("a9<1,M>")).kk(0,new A.avp())
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
A.a_k.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.a_p.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,!1,!0]}}
A.acf.prototype={
K(){return"TooltipDirection."+this.b}}
A.a_q.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,!1,!1,x.z,x.Q,x.as]}}
A.Cd.prototype={
gbH(){return[this.a,this.b,C.cV,C.u,null]}}
A.JW.prototype={}
A.a_r.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.a,x.b]}}
A.xd.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WF(w,x,d)}}
A.afy.prototype={}
A.afC.prototype={}
A.afD.prototype={}
A.afF.prototype={}
A.afG.prototype={}
A.afH.prototype={}
A.afI.prototype={}
A.afJ.prototype={}
A.afK.prototype={}
A.avq.prototype={
U7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k
if(d.length===0)return new A.u4(0,0,!1)
w=new A.yO(d,y.s)
v=this.a
if(v.aB(0,w)){v=v.h(0,w)
u=v.a
v=v.b
return new A.u4(u,v,!0)}x=null
try{x=C.b.qc(d,new A.avr())}catch(t){return new A.u4(0,0,!1)}s=Math.max(x.c[0].a,x.c[0].b)
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
A.afE.prototype={}
A.avs.prototype={
i3(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=this
m.a_p(d,e,f)
x=f.a
w=f.b
v=x.ch
if(v.length===0)return
u=e.b
v=m.abo(u,A.bqH(x,u.a),v)
m.y=v
m.aQA(e,v,f)
m.akO(d,e,f,u)
for(v=w.ch,u=w.cy.e,t=0;t<v.length;++t){s=v[t]
for(r=s.c,q=s.e,p=0;p<r.length;++p){if(!C.b.n(q,p))continue
o=r[p]
n=m.y
n.toString
m.aQJ(d,e,n,u,s,t,o,p,f)}}},
abo(d,e,f){var x,w,v,u,t,s,r,q
if(e.length!==f.length)throw B.e(B.dB("inconsistent state groupsX.length != barGroups.length"))
x=B.b([],y.K)
for(w=y.n,v=0;v<f.length;++v){u={}
t=f[v]
s=e[v]
u.a=0
r=B.b([],w)
q=t.c
new B.iJ(q,B.ab(q).i("iJ<1>")).aq(0,new A.avt(u,r,s,t))
x.push(new A.a4j(r))}return x},
aQA(b5,b6,b7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
if(a0!==a1){if(a0>a1){a2=b2.dB(Math.max(t,a1),b4,b7)
a3=B.P_(i,Math.min(b2.dB(a0,b4,b7),a2-d),h,a2,f,e,l,g)}else{a4=b2.dB(Math.min(u,a1),b4,b7)
a3=B.P_(i,a4,h,Math.max(b2.dB(a0,b4,b7),a4+d),f,e,l,g)}l=b2.f
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
a8=b2.dB(g,b4,b7)
f=a7.b
a9=b2.dB(f,b4,b7)
b2.f.r=a7.c.gp(0)
b0=f<g?new B.D(i,a8,h,a9):new B.D(i,a9,h,a8)
J.aV(v.save())
v.clipRect(B.dF(b0),$.oG()[1],!0)
a5=b2.f.ek()
v.drawRRect(B.mf(a3),a5)
a5.delete()
v.restore()
b2.aQH(b5,a7,a6,l.length,o,a3,b4,b7)}o=k.b
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
w.fR(A.ayx(b1,p.r),b2.r)}}}},
aQJ(a7,a8,a9,b0,b1,b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=a8.b,a6=b0.r.$4(b1,b2,b3,b4)
if(a6==null)return
x=B.Aj(a4,a4,a4,a4,B.d6(a4,a4,a4,a4,a4,a4,a4,a4,a4,$.lg().Zp(a7,a6.b),a6.a),C.cV,C.u,a4,b5.c,C.bx)
x.af4(b0.f)
w=x.b
v=w.c
w=w.a.c
w=w.gbS(w)
u=a9[b2].b[b4]
t=b3.b
s=a3.dB(t,a5,b5)
r=b3.a
q=a3.dB(r,a5,b5)
p=b0.b
o=v+p.gen()
n=w+4+(p.gcY(0)+p.gd_(0))
m=Math.min(s,q)
l=Math.max(s,q)
w=b0.y
if(w!==D.aBq)k=w===D.YX&&t>=r
else k=!0
w=b0.c
j=k?m-n-w:l+w
i=a3.Zq(u,o,b0.d,b0.e)
w=i+o
u=j+n
h=new B.D(i,j,w,u)
t=b0.a
g=new B.aS(t,t)
f=B.F6(h,g,g,g,g)
t=a3.w
t===$&&B.a()
s=b0.as.$1(b1)
t.r=s.gp(s)
e=b0.z
w-=i
u-=j
s=$.lg().JZ(new B.E(w,u),e).b
t=$.lg()
r=x.b
q=r.c
r=r.a.c
d=t.JZ(new B.E(q,r.gbS(r)),e)
r=h.gc7()
q=x.b.c
t=h.gahn()
a0=b0.Q
if(!a0.k(0,C.A)){a1=a3.x
a1===$&&B.a()
a2=a0.a
a1.r=a2.gp(a2)
a1.c=a0.b}a8.Vm(e,new A.avu(a3,a8,f,x,new B.m(r.a-q/2,t.b+p.b-d.b+s)),new B.m(f.a,f.b),new B.m(0,s),new B.E(w,u))},
aQH(d,e,f,g,h,i,j,k){var x,w,v,u,t,s,r,q,p,o=this,n=e.d,m=n.b
if(m!==0){x=n.a
x=x.geg(x)===0}else x=!0
if(x)return
if(f===0){x=e.b
w=o.dB(x,j,k)
v=e.a
u=o.dB(v,j,k)
x=v<x
v=x?new B.aS(i.z,i.Q):C.Z
t=x?new B.aS(i.x,i.y):C.Z
s=x?C.Z:new B.aS(i.e,i.f)
x=x?C.Z:new B.aS(i.r,i.w)
r=B.P_(i.a,w,i.c,u,v,t,s,x)}else{x=i.a
w=e.b
v=i.c
u=e.a
if(f===g-1){t=Math.max(o.dB(w,j,k),i.b)
s=o.dB(u,j,k)
w=u<w
u=w?C.Z:new B.aS(i.z,i.Q)
q=w?C.Z:new B.aS(i.x,i.y)
p=w?new B.aS(i.e,i.f):C.Z
r=B.P_(x,t,v,s,u,q,p,w?new B.aS(i.r,i.w):C.Z)}else r=B.bsH(x,o.dB(w,j,k),v,o.dB(u,j,k),C.Z)}x=o.r
x===$&&B.a()
n=n.a
x.r=n.gp(n)
x.c=Math.min(m,h/2)
d.a.eL(r,o.r)},
W1(b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=b2.a,a8=b2.b,a9=a8.ch
if(a9.length===0)return null
if(a6.y==null)a6.y=a6.abo(b1,A.bqH(a7,b1.a),a7.ch)
for(x=b0.b,w=b0.a,v=a8.cy.f,u=v.a,t=v.d,s=v.b,r=0;q=a6.y,r<q.length;++r)for(q=q[r].b,p=0;p<q.length;++p){o=q[p]
n=a9[r].c[p]
m=n.e/2
l=n.b
k=n.a
j=l>=k
if(j){i=a6.dB(l,b1,b2)
n=a9[r].c[p]
h=a6.dB(n.a+n.x.b,b1,b2)}else{i=a6.dB(k+n.x.b,b1,b2)
h=a6.dB(a9[r].c[p].b,b1,b2)}a6.dB(a9[r].c[p].x.c,b1,b2)
g=w<=o+m+v.c&&w>=o-m-u
if(j)f=x<=h+t&&x>=i-s
else f=x>=i-s&&x<=h+t
if(g&&f){e=a9[r]
d=e.c[p]
w=d.b
u=a6.dB(w,b1,b2)
a9=d.y
a2=0
for(;;){if(!(a2<a9.length)){a0=-1
a1=null
break}a3=a9[a2]
a4=a6.dB(a3.a,b1,b2)
a5=a6.dB(a3.b,b1,b2)
if(x<=a4&&x>=a5){a1=a3
a0=a2
break}++a2}return new A.a_r(e,r,d,p,a1,a0,new A.ep(e.a,w),new B.m(o,u))}}return null}}
A.a4j.prototype={}
A.a_n.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.avs()
u.a0B()
$.af()
x=B.aQ()
x.b=C.bc
u.f=x
x=B.aQ()
x.b=C.aQ
u.r=x
x=B.aQ()
x.b=C.bc
x.r=C.k.gp(0)
u.w=x
x=B.aQ()
x.b=C.aQ
x.r=C.D.gp(0)
x.c=1
u.x=x
u=new A.a9o(this.d,w,v,u,d,C.bm,new B.bm(),B.aG(y.v))
u.bj()
u.Yl(w.cy)
u.aee()
return u},
bx(d,e){e.sii(0,this.d)
e.sY6(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9o.prototype={
sii(d,e){if(this.aA.k(0,e))return
this.aA=e
this.bd()},
sY6(d){var x=this
if(x.hW.k(0,d))return
x.hW=d
x.a09(d.cy)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aV(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fS.i3(x,new A.a_R(u,w),new A.vi(v.aA,v.hW,v.cV,y.Q))
t.restore()},
Zj(d){var x=this,w=x.gC(0)
return new A.JW(x.fS.W1(d,w,new A.vi(x.aA,x.hW,x.cV,y.Q)))}}
A.a_d.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as,x.a,x.b,x.at]}}
A.Cc.prototype={
K(){return"AxisSide."+this.b}}
A.t6.prototype={}
A.pI.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.aaN.prototype={
gbH(){return[!1,0,0,0]}}
A.oO.prototype={
gbH(){return[this.b,this.a,this.c,!0]}}
A.ut.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.ep.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var x,w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.ep))return!1
x=w.a
if(isNaN(x)&&isNaN(w.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===x&&e.b===w.b},
gu(d){return C.d.gu(this.a)^C.d.gu(this.b)}}
A.y2.prototype={
gbH(){var x=this
return[x.a,!0,x.c,x.d,x.e,x.f,x.r,x.w,x.x]}}
A.pb.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.ach.prototype={
gbH(){return[this.a,this.b]}}
A.P3.prototype={
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
A.a4u.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.acF.prototype={
gbH(){var x=this
return[x.f,!1,x.b,x.c,x.d,x.e]}}
A.LQ.prototype={
gbH(){return[this.a,this.b,!0]}}
A.us.prototype={}
A.M0.prototype={
acN(d,e,f){var x,w
$.af()
x=B.aQ()
w=this.a
x.r=w.gp(w)
x.b=C.bc
d.iO(f,this.b,x)},
gbH(){return[this.a,this.b,this.c,0]}}
A.aft.prototype={}
A.afx.prototype={}
A.aiz.prototype={}
A.aiP.prototype={}
A.aiQ.prototype={}
A.aiS.prototype={}
A.aiT.prototype={}
A.ajF.prototype={}
A.ajE.prototype={}
A.ajG.prototype={}
A.an1.prototype={}
A.aoM.prototype={}
A.aoN.prototype={}
A.aqn.prototype={}
A.ar_.prototype={}
A.aqZ.prototype={}
A.ar0.prototype={}
A.av5.prototype={
M4(d,e,f,g,h,i){return new B.iu(this.aUr(d,e,f,g,h,i),y.g4)},
aUq(d,e,f,g){return this.M4(d,e,f,!0,g,!0)},
aUr(d,e,f,g,h,i){return function(){var x=d,w=e,v=f,u=g,t=h,s=i
var r=0,q=1,p=[],o,n,m,l,k,j
return function $async$M4(a0,a1,a2){if(a1===1){p.push(a2)
r=q}for(;;)switch(r){case 0:n=$.lg().aiq(t,v,w,x)
m=n===t
l=!s&&m?n+w:n
k=n+C.d.fM(v-t,w)*w===v
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
a0B(){var x,w=this
$.af()
x=B.aQ()
x.b=C.aQ
w.a=x
x=B.aQ()
x.b=C.bc
w.b=x
x=B.aQ()
x.b=C.bc
w.e=x
x=B.aQ()
x.b=C.aQ
w.c=x
w.d=B.aQ()},
i3(d,e,f){var x=this
x.a_q(d,e,f)
x.aQw(e,f)
x.aQG(e,f)
x.aQF(e,f)},
aQF(a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a3.a,a1=a0.c
if(!a1.a)return
x=a2.b
if(a1.f){w=a1.r
if(w==null)w=$.lg().O8(x.a,a0.r-a0.f)
v=$.bpQ().M4(a0.w,w,a0.r,!1,a0.f,!1)
for(u=new B.f7(v.a(),v.$ti.i("f7<1>")),t=x.b,s=a1.w,r=a1.x;u.t();){q=u.b
if(!r.$1(q))continue
p=e.f9(q,x,a3)
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
q.r=B.aA(0,l.v()>>>16&255,l.v()>>>8&255,l.v()&255).gp(0)}a2.Dc(o,n,e.a,m.d)}}i=a1.c
if(i==null)i=$.lg().O8(x.b,a0.y-a0.x)
v=$.bpQ().M4(a0.z,i,a0.y,!1,a0.x,!1)
for(u=new B.f7(v.a(),v.$ti.i("f7<1>")),s=a1.d,h=x.a,a1=a1.e;u.t();){r=u.b
if(!a1.$1(r))continue
g=s.$1(r)
f=e.dB(r,x,a3)
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
r.r=B.aA(0,q.v()>>>16&255,q.v()>>>8&255,q.v()&255).gp(0)}a2.Dc(o,n,e.a,g.d)}},
aQw(d,e){var x,w,v=e.a.as
if((v.v()>>>24&255)/255===0)return
x=d.b
w=this.b
w===$&&B.a()
w.r=v.gp(0)
d.a.h9(new B.D(0,0,0+x.a,0+x.b),this.b)},
aQG(d,e){var x,w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(x=d.a.a,w=n.b,v=0;v<l.length;l.length===k||(0,B.J)(l),++v){u=l[v]
t=B.kM(new B.m(o.f9(u.a,n,e),0),new B.m(o.f9(u.b,n,e),w))
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
if(l!==0)for(k=d.a.a,x=n.a,v=0;v<m.length;m.length===l||(0,B.J)(m),++v){u=m[v]
t=B.kM(new B.m(0,o.dB(u.a,n,e)),new B.m(x,o.dB(u.b,n,e)))
w=o.e
w===$&&B.a()
s=u.c
r=u.d
if(r!=null){w.r=C.B.gp(0)
w.seQ(r.mJ(0,t))}else{w.r=(s==null?C.D:s).gp(0)
w.seQ(null)}p=o.e.ek()
k.drawRect(B.dF(t),p)
p.delete()}},
aQE(d,e,f){var x,w
this.a_q(d,e,f)
x=e.b
w=f.a.at
if(w.a.length!==0)this.acO(d,e,f,x)
if(w.b.length!==0)this.aQL(d,e,f,x)},
acO(d,e,f,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
for(x=f.a.at.a,w=x.length,v=a0.a,u=a0.b,t=e.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.J)(x),++r){q=x[r]
p=q.e
o=g.dB(p,a0,f)
n=new B.m(0,o)
p=g.dB(p,a0,f)
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
e.Dc(n,m,g.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=C.d.al(p,o.gbS(o).ez(0,2))
J.aV(s.save())
s.translate(i,h)
o=o.gN1().b
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
t.acP(0,o,new B.m(i,p),l)}}},
aQL(d,a0,a1,a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
for(x=a1.a.at.b,w=x.length,v=a2.b,u=a2.a,t=a0.a,s=t.a,r=0;r<x.length;x.length===w||(0,B.J)(x),++r){q=x[r]
p=q.e
o=e.f9(p,a2,a1)
n=new B.m(o,0)
p=e.f9(p,a2,a1)
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
a0.Dc(n,m,e.c,q.d)
o=q.r
i=o.gdm(o).ez(0,2)
h=o.gbS(o).ez(0,2)
g=C.d.al(p,i)
f=C.d.al(v,h)
J.aV(s.save())
s.translate(g,f)
o=o.gN1().b
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
t.acP(0,o,new B.m(p,l),k)}}},
f9(d,e,f){var x=f.a,w=x.f,v=x.r-w
if(v===0)return 0
return(d-w)/v*e.a},
dB(d,e,f){var x,w=f.a,v=w.x,u=w.y-v
if(u===0)return e.b
x=e.b
return x-(d-v)/u*x},
Zq(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.JQ.prototype={
gak9(){var x,w=this.d.d
if(!w.a)return!1
w=w.b.c
x=w.a&&w.c!==0
return x},
gaka(){var x,w=this.d.d
if(!w.a)return!1
w=w.d.c
x=w.a&&w.c!==0
return x},
gakb(){var x,w=this.d.d
if(!w.a)return!1
w=w.c.c
x=w.a&&w.c!==0
return x},
gak7(){var x,w=this.d.d
if(!w.a)return!1
w=w.e.c
x=w.a&&w.c!==0
return x},
aku(d){var x,w=this,v=null,u=w.d,t=A.brt(u.d),s=u.a
s=s.a&&A.bKE(s.b)?s.b:v
x=B.b([B.bj(v,w.c,C.q,v,v,new B.bb(v,v,s,v,v,v,C.H),v,v,v,t,v,v,v,v)],y.p)
t=new A.av7(x)
if(w.gak9())C.b.hs(x,t.$1(!0),new A.A3(D.Aq,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gakb())C.b.hs(x,t.$1(!0),new A.A3(D.md,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gaka())C.b.hs(x,t.$1(!0),new A.A3(D.Ar,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
if(w.gak7())C.b.hs(x,t.$1(!0),new A.A3(D.dx,u,new B.E(B.K(1/0,d.a,d.b),B.K(1/0,d.c,d.d)),v))
return x},
A(d){return B.kF(new A.av6(this))}}
A.Qu.prototype={
Y(){return new A.WK(new B.ba(null,y.eF))}}
A.WK.prototype={
awB(){switch(this.a.c.a){case 0:return C.f0
case 1:return C.ho
case 2:return C.ek
case 3:return C.hp}},
ax6(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
awD(d){this.a.toString
return},
aw(){this.aQ()
$.cw.x1$.push(this.ga3L())},
bb(d){this.bB(d)
$.cw.x1$.push(this.ga3L())},
A(d){var x,w=this,v=null,u=w.a
u.toString
x=w.ax6()
return B.bte(B.aZD(0,B.bj(w.awB(),u.e,C.q,v,v,v,v,v,w.d,x,v,v,v,v)),C.p)}}
A.aaO.prototype={
bl(d){return A.bKu(this.f,this.r,this.e)},
bx(d,e){var x=this.e
if(e.B!==x){e.B=x
e.a7()}x=this.f
if(e.V!==x){e.V=x
e.a7()}x=this.r
if(e.U!==x){e.U=x
e.a7()}}}
A.a_e.prototype={
hi(d){if(!(d.b instanceof B.hb))d.b=new B.hb(null,null,C.p)},
hP(d){if(this.B===C.aX)return this.xQ(d)
return this.acp(d)},
aJg(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8k(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dw(d){var x=this.a8j(d,B.hq())
switch(this.B.a){case 0:return d.c1(new B.E(x.a,x.b))
case 1:return d.c1(new B.E(x.b,x.a))}},
a8j(d,e){var x,w,v,u,t,s,r,q,p=this,o=p.B===C.aX?d.b:d.d,n=p.ag$
for(x=y.L,w=d.b,v=d.d,u=0,t=0;n!=null;){s=n.b
s.toString
x.a(s)
switch(p.B.a){case 0:r=B.fQ(v,null)
break
case 1:r=B.fQ(null,w)
break
default:r=null}q=e.$2(n,r)
t+=p.a8k(q)
u=Math.max(u,p.aJg(q))
n=s.aE$}return new A.bb6(o<1/0?o:t,u)},
cu(){var x,w,v,u,t,s,r,q=this,p=y.k.a(B.H.prototype.ga6.call(q)),o=q.a8j(p,B.md()),n=o.a,m=o.b
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
r=t.b-q.a8k(s==null?B.V(B.Z("RenderBox was not laid out: "+B.G(x).j(0)+"#"+B.c2(x))):s)/2
switch(q.B.a){case 0:s=new B.m(r,0)
break
case 1:s=new B.m(0,r)
break
default:s=null}u.a=s
x=u.aE$;++v}},
e8(d,e){return this.xR(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a2.sbh(0,null)
this.uR(d,e)},
l(){this.a2.sbh(0,null)
this.anq()}}
A.bb6.prototype={}
A.av8.prototype={}
A.jC.prototype={
gbH(){return[this.a,this.b]}}
A.nr.prototype={}
A.afu.prototype={}
A.afv.prototype={
aN(d){var x,w,v
this.fk(d)
x=this.ag$
for(w=y.L;x!=null;){x.aN(d)
v=x.b
v.toString
x=w.a(v).aE$}},
aD(d){var x,w,v
this.fd(0)
x=this.ag$
for(w=y.L;x!=null;){x.aD(0)
v=x.b
v.toString
x=w.a(v).aE$}}}
A.afw.prototype={}
A.So.prototype={
l(){var x,w,v
for(x=this.VA$,w=x.length,v=0;v<w;++v)x[v].l()
this.iw()}}
A.A3.prototype={
gov(){var x=this
switch(x.c.a){case 0:return x.d.d.b
case 1:return x.d.d.c
case 2:return x.d.d.d
case 3:return x.d.d.e}},
ghC(){switch(this.c.a){case 0:return C.ek
case 1:return C.hp
case 2:return C.f0
case 3:return C.ho}},
gaZ0(){var x=this.d,w=A.brt(x.d),v=A.byH(x.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,w.b,0,w.d).ac(0,new B.ai(0,v.b,0,v.d))
case 1:case 3:return new B.ai(w.a,0,w.c,0).ac(0,new B.ai(v.a,0,v.c,0))}},
gaha(){var x=this.d,w=A.byH(x.a),v=A.brt(x.d)
switch(this.c.a){case 2:case 0:return v.gcY(0)+v.gd_(0)+(w.gcY(0)+w.gd_(0))
case 1:case 3:return v.gen()+w.gen()}},
aVb(d,e,f,g){var x,w,v,u,t,s,r,q=this,p=q.gov().c.d
if(p==null)p=$.lg().O8(d,f-e)
x=q.c
w=x!==D.md
if((!w||x===D.dx)&&q.d instanceof A.ns){v=y.B.a(q.d)
if(v.ch.length===0)return B.b([],y.g)
u=A.bqH(v,d)
x=new B.iJ(u,B.ab(u).i("iJ<1>"))
t=x.giC(x).eY(0,new A.aWC(v),y.W).fV(0)}else{s=$.bpQ()
x=!w||x===D.dx
w=q.d
r=s.aUq(x?w.w:w.z,p,f,e)
w=B.nW(r,new A.aWD(q,f,e,d),r.$ti.i("t.E"),y.W)
t=B.P(w,B.j(w).i("t.E"))}x=B.ab(t).i("a9<1,nr>")
x=B.P(new B.a9(t,new A.aWE(q,e,f,p,g,d),x),x.i("au.E"))
return x},
A(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null
k.gov()
x=k.gov()
x=x.c
x=!(x.a&&x.c!==0)
if(x)return B.bj(j,j,C.q,j,j,j,j,j,j,j,j,j,j,j)
x=k.c
w=x===D.md
v=!w
u=!v||x===D.dx
t=k.e
s=u?t.a:t.b
u=k.ghC()
t=!v||x===D.dx?C.a8:C.aX
r=B.b([],y.p)
if(x===D.Aq||w)k.gov()
if(k.gov().c.a){w=!v||x===D.dx?s:k.gov().c.c
q=!v||x===D.dx?k.gov().c.c:s
p=k.gaZ0()
o=!v||x===D.dx?C.aX:C.a8
k.gaha()
n=k.gaha()
m=!v||x===D.dx
l=k.d
m=m?l.f:l.x
v=!v||x===D.dx?l.r:l.y
r.push(B.bj(j,A.bRI(new A.av8(),o,k.aVb(s-n,m,v,x)),C.q,j,j,j,j,q,j,p,j,j,j,w))}if(x===D.Ar||x===D.dx)k.gov()
return new B.eY(u,j,j,B.bNh(r,C.o,t,j,C.f,C.P,0,j,j,C.dS),j)}}
A.a_t.prototype={
gbH(){return[this.a,this.b]}}
A.a3E.prototype={
gbH(){return[this.a,this.b]}}
A.M7.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.a3G.prototype={
gaaJ(d){return!1},
gbH(){return[!1,!1,!1,!1]}}
A.avD.prototype={}
A.aBV.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.afN.prototype={}
A.aiM.prototype={}
A.aiN.prototype={}
A.aiU.prototype={}
A.JZ.prototype={
i3(d,e,f){}}
A.vi.prototype={}
A.ha.prototype={
gdG(){return null},
gaeN(){var x,w=this
B.bu()
B.bu()
B.bu()
x=w instanceof A.M6
if(x)return!0
return!(w instanceof A.M3)&&!(w instanceof A.M2)&&!(w instanceof A.M4)&&!(w instanceof A.M1)&&!x&&!(w instanceof A.M5)}}
A.a3K.prototype={
gdG(){return this.a.b}}
A.a3L.prototype={
gdG(){return this.a.b}}
A.a3M.prototype={
gdG(){return this.a.b}}
A.M2.prototype={}
A.M3.prototype={}
A.a3P.prototype={
gdG(){return this.a.b}}
A.M5.prototype={}
A.M6.prototype={
gdG(){return this.a.b}}
A.a3J.prototype={
gdG(){return this.a.b}}
A.a3I.prototype={
gdG(){return this.a.b}}
A.M1.prototype={
gdG(){return this.a.b}}
A.a3N.prototype={
gdG(){return this.a.gdG()}}
A.a3O.prototype={
gdG(){return this.a.gdG()}}
A.M4.prototype={
gdG(){return this.a.gdG()}}
A.Fi.prototype={
Yl(d){this.V=d.b
this.U=d.c
this.a2=d.d},
aee(){var x=this,w=null,v=x.ad=B.bsn(w,w)
v.ay=new A.aRU(x)
v.ch=new A.aRV(x)
v.CW=new A.aRW(x)
v.cy=new A.aRX(x)
v.cx=new A.aRY(x)
v=x.aC=B.G6(w,-1,w)
v.B=new A.aRZ(x)
v.a3=new A.aS_(x)
v.V=new A.aS0(x)
v=x.bz=B.a5E(w,x.a2,w)
v.p3=new A.aS1(x)
v.p4=new A.aS2(x)
v.RG=new A.aS3(x)},
cu(){var x=y.k.a(B.H.prototype.ga6.call(this))
this.fy=new B.E(x.b,x.d)},
dw(d){return new B.E(d.b,d.d)},
kI(d){return!0},
mT(d,e){var x,w=this
if(w.V==null)return
if(y.eo.b(d)){x=w.bz
x===$&&B.a()
x.rA(d)
x=w.aC
x===$&&B.a()
x.rA(d)
x=w.ad
x===$&&B.a()
x.rA(d)}else if(y.gJ.b(d))w.l5(new A.a3O(d))},
gMy(d){return new A.aS4(this)},
gMA(d){return new A.aS5(this)},
l5(d){var x,w,v=this
if(v.V==null)return
x=d.gdG()
w=x!=null?v.Zj(x):null
v.V.$2(d,w)
v.a3=C.bm},
gKs(d){return this.a3},
gFa(){var x=this.am
x===$&&B.a()
return x},
aN(d){this.fk(d)
this.am=!0},
aD(d){this.am=!1
this.fd(0)},
$ije:1}
A.Np.prototype={
Y(){return new A.UC(B.b([],y.r),B.y(y.S,y.I),new A.aHN(B.y(y.x,y.dj)),null,null)}}
A.UC.prototype={
A(d){var x,w=this,v=w.a3N(),u=w.CW
u.toString
u=w.aai(u.ar(0,w.ghA().gp(0)))
x=w.aai(v)
w.a.toString
return new A.JQ(new A.a5v(u,x,null),v,null)},
aai(d){var x,w
if(!d.cx.a)return d
x=d.ch
w=B.ab(x).i("a9<1,e1>")
x=B.P(new B.a9(x,new A.bbb(this,d),w),w.i("au.E"))
return d.aPb(x,this.cy)},
a3N(){var x,w,v,u,t=this,s=t.a.r,r=s.f,q=isNaN(r)
if(q||isNaN(s.r)||isNaN(s.x)||isNaN(s.y)){x=t.dx.U7(s.ch)
if(q)r=x.a
q=s.r
if(isNaN(q))q=x.b
w=s.x
if(isNaN(w))w=x.c
v=s.y
s=s.aPq(q,isNaN(v)?x.d:v,r,w)}u=s.cx
if(u.a){t.cx=u.b
s=s.aOQ(new A.E_(u.e,u.f,u.r,u.w,!0,u.y,u.z,!0,t.gaxV(),u.c,u.d))}return s},
axW(d,e){var x,w=this
if(w.c==null)return
x=w.cx
if(x!=null)x.$2(d,e)
if(d.gaeN())x=(e==null?null:e.a)==null||e.a.length===0
else x=!0
if(x){w.L(new A.bb9(w))
return}w.L(new A.bba(w,e))},
nP(d){var x=this
x.CW=y.f3.a(d.$3(x.CW,x.a3N(),new A.bbc(x)))}}
A.pm.prototype={
WF(d,e,f){var x,w,v,u,t,s,r=B.aa(d.f,e.f,f),q=B.aa(d.r,e.r,f),p=B.aa(d.w,e.w,f),o=B.aa(d.x,e.x,f),n=B.aa(d.y,e.y,f),m=B.aa(d.z,e.z,f),l=B.X(d.as,e.as,f),k=e.a
k=A.a3F(B.a_E(d.a.b,k.b,f),k.a)
x=A.byF(d.at,e.at,f)
w=A.byI(d.c,e.c,f)
v=A.byK(d.d,e.d,f)
u=A.bAG(d.e,e.e,f)
t=A.ke(d.ch,e.ch,f,A.c_l(),y.cz)
t.toString
s=A.ke(d.CW,e.CW,f,A.c_k(),y.J)
s.toString
v=A.bs0(l,p,m,s,k,e.Q,x,w,t,e.cx,q,n,r,o,u,e.cy,v)
return v},
UL(d,e,f,g,h,i,j){var x=this,w=d==null?x.ch:d,v=e==null?x.cx:e,u=j==null?x.cy:j,t=h==null?x.f:h,s=f==null?x.r:f,r=i==null?x.x:i,q=g==null?x.y:g
return A.bs0(x.as,x.w,x.z,x.CW,x.a,x.Q,x.at,x.c,w,v,s,q,t,r,x.e,u,x.d)},
aPq(d,e,f,g){return this.UL(null,null,d,e,f,g,null)},
aOQ(d){var x=null
return this.UL(x,d,x,x,x,x,x)},
aPb(d,e){var x=null
return this.UL(d,x,x,x,x,x,e)},
gbH(){var x=this
return[x.ch,x.CW,x.d,x.at,x.cx,x.cy,x.c,x.a,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as]}}
A.e1.prototype={
apY(d,e,f,g,h,i,j,k,l,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=null
try{m=C.b.qc(o.a,new A.aHM())}catch(x){}if(m!=null){for(w=o.a,v=w.length,u=n,t=u,s=t,r=s,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
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
ac5(d,e){var x=this,w=e==null?x.a:e,v=d==null?x.cx:d
return A.aHL(x.ch,x.x,x.ay,x.r,x.z,x.cy,x.CW,x.w,x.y,!1,x.at,!1,x.dy,!1,x.as,x.db,!0,v,w)},
aOX(d){return this.ac5(d,null)},
aOZ(d){return this.ac5(null,d)},
gbH(){var x=this
return[x.a,!0,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,!1,x.ay,x.ch,x.CW,x.cx,x.cy,x.db,!1,x.dy]}}
A.Nq.prototype={
gbH(){return[this.a]}}
A.a_m.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,!1]}}
A.mk.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d]}}
A.JU.prototype={
gbH(){return[!1,this.b,this.c,!0]}}
A.y1.prototype={
gbH(){return[this.a,this.b,this.c]}}
A.aHx.prototype={
K(){return"LabelDirection."+this.b}}
A.a3H.prototype={
gbH(){var x=this
return[!1,x.b,x.c,x.d,x.e]}}
A.E_.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,!0,x.y,x.z]}}
A.a5w.prototype={
gbH(){return[4,C.hD,16,D.x4,0,120,A.c_n(),!1,!1,!1,0,C.A,A.c_m()]}}
A.mG.prototype={
gbH(){var x=this
return[x.c,x.d,x.e,x.a,x.b]}}
A.pQ.prototype={}
A.r9.prototype={
gbH(){return[this.a,this.b,C.cV,C.u,null]}}
A.t7.prototype={
gbH(){return[this.a,this.b]}}
A.FK.prototype={
gbH(){return[this.a]}}
A.Nr.prototype={}
A.yK.prototype={
hd(d){var x,w=this.a
w.toString
x=this.b
x.toString
return w.WF(w,x,d)}}
A.afA.prototype={}
A.afB.prototype={}
A.afO.prototype={}
A.aiO.prototype={}
A.aiR.prototype={}
A.akr.prototype={}
A.aks.prototype={}
A.akt.prototype={}
A.akv.prototype={}
A.akw.prototype={}
A.akx.prototype={}
A.aky.prototype={}
A.aoL.prototype={}
A.aqm.prototype={}
A.aHN.prototype={
U7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d.length===0)return D.xw
v=new A.yO(d,y.x)
u=this.a
if(u.aB(0,v)){u=u.h(0,v)
t=u.a
s=u.b
r=u.c
u=u.d
return new A.yL(t,s,r,u,!0)}x=null
try{x=C.b.qc(d,new A.aHO())}catch(q){return D.xw}w=null
try{w=C.b.qc(x.a,new A.aHP())}catch(q){return D.xw}p=w.a
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
if(g<n)n=g}f=new A.yL(p,o,n,m,!1)
u.m(0,v,f)
return f}}
A.yL.prototype={
gbH(){var x=this
return[x.a,x.b,x.c,x.d,x.e]}}
A.aku.prototype={}
A.aHQ.prototype={
i3(a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=a3.a,a0=d.ch
if(a0.length===0)return
x=d.Q
if(x.gaaJ(0)){w=a2.b
v=w.a
w=w.b
$.af()
a2.a.jm(new B.D(0,-40,0+(v+40),-40+(w+40)),B.aQ())
a2.aNQ(new B.D(0,0,v,w))}e.a_p(a1,a2,a3)
for(w=d.CW,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)e.aQC(a2,d,w[u],a3)
t=B.b([],y.bC)
for(w=d.cx,v=w.f,s=0;s<a0.length;++s){r=a0[s]
e.aQy(a2,r,a3)
e.aQD(a2,r,a3)
e.akN(a1,a2,a3)
q=r.cx
p=v.$2(r,q)
o=J.Y(p)
if(o.gq(p)!==q.length)throw B.e(B.dB("indicatorsData and touchedSpotOffsets size should be same"))
for(n=r.a,m=0;m<q.length;++m){l=o.h(p,m)
k=q[m]
if(k<0||k>=n.length)continue
j=n[k]
if(l==null)continue
t.push(new A.v0(r,j,k,l))}}e.aQK(a2,t,a3)
if(x.gaaJ(0))a2.a.a.restore()
for(a0=d.cy,w=w.e,x=y.Z,s=0;s<a0.length;++s){i=a0[s].a
if(i.length===0)continue
h=B.P(i,x)
g=h[0]
for(v=h.length,u=0;u<v;++u){f=h[u]
if(f.b>g.b)g=f}e.aQI(a1,a2,w,g,new A.FK(h),a3)}},
aQy(d,e,f){var x,w,v,u,t,s,r,q=this,p=d.b,o=A.brs(e.a)
for(x=o.length,w=0;w<o.length;o.length===x||(0,B.J)(o),++w){v=o[w]
u=q.YT(p,e,v,f)
t=q.aih(p,e,u,v,f)
s=q.YV(p,e,u,v,f,!0)
r=q.aig(p,e,u,v,f)
q.aQB(d,t,q.YS(p,e,u,v,f,!0),f,e)
q.aQv(d,r,s,f,e)
q.aQz(d,u,e)
q.aQx(d,u,e,f)}},
aQC(a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.brs(a5.a),a8=A.brs(a6.a)
if(a7.length!==a8.length)throw B.e(B.bC("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a,x=a4.a,w=b1.c,v=b1.d,u=$.bR.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ab(n).i("cE<1>")
l=B.P(new B.cE(n,m),m.i("au.E"))
k=a2.YT(a3,a5,o,b2)
j=a2.YU(a3,a6.aOZ(l),l,b2,k)
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
n=a2.f9(i,a3,b2)
m=a2.dB(h,a3,b2)
e=a2.f9(g,a3,b2)
d=a2.dB(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.B.gp(0)
a0.seQ(v.mJ(0,new B.D(n,m,e,d)))}else{a0.r=(r?C.D:w).gp(0)
a0.seQ(null)}$.af()
a1=new B.mn(C.dk,C.bc,C.dP,C.ed,C.dC).ek()
n=B.dF(new B.D(0,0,t,s))
m=$.bR.b
if(m===$.bR)B.V(B.uY(u))
m=m.TileMode.Clamp
x.saveLayer.apply(x,[a1,n,null,null,m])
a1.delete()
a4.fR(j,a2.r)
x.restore()}},
aQD(d,e,f){var x,w,v,u,t,s,r,q,p,o=e.CW
if(!o.a||e.a.length===0)return
x=d.b
w=this.YZ(e,x,f)
for(v=e.a,u=o.b,o=o.c,t=d.a,s=0;s<v.length;++s){r=v[s]
if(!r.k(0,D.fC)&&u.$2(r,e)){q=this.f9(r.a,x,f)
p=this.dB(r.b,x,f)
o.$4(r,q/w*100,e,s).acN(t,r,new B.m(q,p))}}},
aQK(b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this
if(b2.length===0)return
x=b1.b
C.b.h_(b2,new A.aHT())
for(w=b2.length,v=b3.a,u=b1.a,t=v.y,s=v.x,r=v.cx,q=r.y,r=r.z,p=0;p<b2.length;b2.length===w||(0,B.J)(b2),++p){o=b2[p]
n=o.a
m=b0.YZ(n,x,b3)
l=o.d
k=o.c
j=o.e
i=b0.f9(k.a,x,b3)
h=b0.dB(k.b,x,b3)
g=j.b
f=g.a
e=B.ci()
if(f){g=e.b=g.c.$4(k,i/m*100,n,l)
if(g===e)B.V(B.r8(e.a))
d=g.b*2}else d=0
a0=Math.min(t,Math.max(s,B.lc(q.$2(n,l))))
a1=Math.min(t,Math.max(s,B.lc(r.$2(n,l))))
g=b0.dB(a0,x,b3)
a2=new B.m(i,g)
a3=b0.dB(a1,x,b3)
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
g.r=B.aA(0,a3.v()>>>16&255,a3.v()>>>8&255,a3.v()&255).gp(0)}b1.Dc(a2,a4,b0.y,a8.d)
if(f){g=e.b
if(g===e)B.V(B.r8(e.a))
g.acN(u,k,new B.m(i,h))}}},
YU(d,e,f,g,h){var x=this.aii(d,e,f,g,h)
return x},
YT(d,e,f,g){return this.YU(d,e,f,g,null)},
aii(a0,a1,a2,a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=a4==null,h=i?B.cB($.af().r):a4,g=J.Y(a2),f=g.gq(a2),e=j.f9(g.h(a2,0).a,a0,a3),d=j.dB(g.h(a2,0).b,a0,a3)
if(i){h.az(new B.f3(e,d))
if(f===1)h.az(new B.cr(e,d))}else h.az(new B.cr(e,d))
for(i=h.e,x=a1.y,w=a1.z,v=C.p,u=1;u<f;u=p,v=k){t=j.f9(g.h(a2,u).a,a0,a3)
s=j.dB(g.h(a2,u).b,a0,a3)
r=u-1
q=j.f9(g.h(a2,r).a,a0,a3)
r=j.dB(g.h(a2,r).b,a0,a3)
p=u+1
o=p<f
n=j.f9(g.h(a2,o?p:u).a,a0,a3)
m=j.dB(g.h(a2,o?p:u).b,a0,a3)
l=x?w:0
o=(n-q)/2*l
m=(m-r)/2*l
k=new B.m(o,m)
t=new B.KS(q+v.a,r+v.b,t-o,s-m,t,s)
i.push(t)
s=h.d
if(s!=null)t.hD(s)}return h},
YV(d,e,f,g,h,i){var x,w,v,u,t=this
$.af()
x=B.brZ(f)
w=J.Y(g)
v=t.f9(w.h(g,w.gq(g)-1).a,d,h)
u=d.b
x.az(new B.cr(v,u))
v=t.f9(w.h(g,0).a,d,h)
x.az(new B.cr(v,u))
x.az(new B.cr(t.f9(w.h(g,0).a,d,h),t.dB(w.h(g,0).b,d,h)))
x.az(new B.oX())
return x},
aih(d,e,f,g,h){return this.YV(d,e,f,g,h,!1)},
YS(d,e,f,g,h,i){var x,w,v,u=this
$.af()
x=B.brZ(f)
w=J.Y(g)
v=u.f9(w.h(g,w.gq(g)-1).a,d,h)
x.az(new B.cr(v,0))
v=u.f9(w.h(g,0).a,d,h)
x.az(new B.cr(v,0))
x.az(new B.cr(u.f9(w.h(g,0).a,d,h),u.dB(w.h(g,0).b,d,h)))
x.az(new B.oX())
return x},
aig(d,e,f,g,h){return this.YS(d,e,f,g,h,!1)},
aQB(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ay
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.f9(w.a,x,g)
v=h.c
v===$&&B.a()
v=s.dB(v.b,x,g)
u=h.d
u===$&&B.a()
u=s.f9(u.a,x,g)
t=s.r
t===$&&B.a()
A.bsm(t,r.b,r.c,new B.D(w,v,u,x.b))
d.a.fR(e,s.r)},
aQv(d,e,f,g,h){var x,w,v,u,t,s=this,r=h.ch
if(!r.a)return
x=d.b
w=h.b
w===$&&B.a()
w=s.f9(w.a,x,g)
v=h.d
v===$&&B.a()
v=s.f9(v.a,x,g)
u=h.e
u===$&&B.a()
u=s.dB(u.b,x,g)
t=s.r
t===$&&B.a()
A.bsm(t,r.b,r.c,new B.D(w,0,v,u))
d.a.fR(e,s.r)},
aQz(d,e,f){var x=f.db,w=x.a,v=w.v()
if((v>>>24&255)/255===0)return
if(!new B.Nj(e,!1,B.b([],y.C)).t())return
v=this.f
v===$&&B.a()
v.d=f.at?C.jP:C.dP
v.e=C.ed
v.r=w.gp(0)
v.seQ(null)
v.c=f.x
v.r=w.gp(0)
$.lg()
v.z=new B.yT(C.aB,x.c*0.57735+0.5)
d.a.fR(B.bs_(A.ayx(e,f.cy),x.b),this.f)},
aQx(d,e,f,g){var x,w,v,u,t=this,s=d.b,r=t.f
r===$&&B.a()
r.d=f.at?C.jP:C.dP
r.e=C.ed
r=f.b
r===$&&B.a()
r=t.f9(r.a,s,g)
x=f.c
x===$&&B.a()
x=t.dB(x.b,s,g)
w=f.d
w===$&&B.a()
w=t.f9(w.a,s,g)
v=f.e
v===$&&B.a()
v=t.dB(v.b,s,g)
u=t.f
A.bsm(u,f.r,f.w,new B.D(r,x,w,v))
u.z=null
u.c=f.x
A.bPL(u)
d.a.fR(A.ayx(e,f.cy),t.f)},
aQI(b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],y.eg),b0=b7.a,b1=A.bER(b0),b2=J.Y(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dB("tooltipItems and touchedSpots size should be same"))
for(x=b8.c,w=0;w<b0.length;++w){v=b2.h(b1,w)
if(v==null)continue
u=$.lg().Zp(b3,v.b)
t=v.a
s=x.k(0,C.iz)?new B.k9(1):x
r=new B.t4(new B.hF(t,a7,a7,C.bm,a7,a7,a7,a7,a7,a7,u),C.cV,C.u,s,a7,a7,a7,a7,C.bx,a7)
r.af4(120)
a9.push(r)}b2=a9.length
if(b2===0)return
for(q=0,p=0,o=0;x=a9.length,o<x;a9.length===b2||(0,B.J)(a9),++o){x=a9[o].b
n=x.c
if(n>q)q=n
x=x.a.c
p+=x.gbS(x)}b2=a6.f9(b6.a,a8,b8)
u=a6.dB(b6.b,a8,b8)
m=q+C.hD.gen()
l=p+(x-1)*4+(C.hD.gcY(0)+C.hD.gd_(0))
k=u-l-16
j=a6.Zq(b2,m,D.x4,0)
b2=j+m
x=k+l
i=new B.aS(4,4)
h=B.F6(new B.D(j,k,b2,x),i,i,i,i)
g=b0[0]
for(u=b0.length,o=0;o<u;++o){f=b0[o]
if(f.b>g.b)g=f}b0=a6.z
b0===$&&B.a()
u=A.bEQ(g)
b0.r=u.gp(u)
u=b2-j
x-=k
b0=$.lg().JZ(new B.E(u,x),0).b
e=new B.m(0,b0)
d=new B.m(h.a,h.b)
a0=$.lg().JZ(new B.E(u,x),0)
if(!C.A.k(0,C.A)){t=a6.Q
t===$&&B.a()
t.r=C.B.gp(0)
t.c=0}b4.Vm(0,new A.aHR(a6,b4,h),d,e,new B.E(u,x))
for(t=a9.length,s=j+u/2,a1=a0.b,b2-=16,a2=j+16,a3=8,o=0;o<a9.length;a9.length===t||(0,B.J)(a9),++o){r=a9[o]
a4=A.bSh(r.r,r.w)
A:{if(D.De===a4){a5=a2
break A}if(D.Df===a4){a5=b2-r.b.c
break A}a5=s-r.b.c/2
break A}b4.Vm(0,new A.aHS(b4,r,new B.m(a5,k+a3-a1+b0)),d,e,new B.E(u,x))
a5=r.b.a.c
a3=a3+a5.gbS(a5)+4}},
YZ(d,e,f){var x,w=d.a
if(w.length===0)return 0
x=this.f9(w[0].a,e,f)
return this.f9(w[w.length-1].a,e,f)-x},
W1(d,e,f){var x,w,v,u=B.b([],y.df)
for(x=f.a.ch,w=0;w<x.length;++w){v=this.aiK(e,d,x[w],w,f)
if(v!=null)u.push(v)}C.b.h_(u,new A.aHU())
return u.length===0?null:u},
aiK(d,e,f,g,h){var x,w,v,u,t,s,r,q,p=B.b([],y.U)
for(x=f.a,w=x.length,v=h.a.cx,u=v.r,v=v.w,t=null,s=0;s<x.length;x.length===w||(0,B.J)(x),++s){r=x[s]
if(r.k(0,D.fC))continue
q=v.$2(e,new B.m(this.f9(r.a,d,h),this.dB(r.b,d,h)))
if(q<=u){if(t==null)t=q
if(q<t){C.b.hs(p,0,r)
t=q}else p.push(r)}}if(p.length!==0){w=C.b.ga0(p)
t.toString
return new A.pQ(t,f,g,C.b.io(x,w),w.a,w.b)}else return null}}
A.v0.prototype={}
A.a5v.prototype={
bl(d){var x,w=this.e,v=B.bA(d,null,y.w).w.gcN(),u=new A.aHQ()
u.a0B()
$.af()
x=B.aQ()
x.b=C.aQ
u.f=x
x=B.aQ()
x.b=C.bc
u.r=x
x=B.aQ()
x.b=C.aQ
u.w=x
x=B.aQ()
x.b=C.bc
x.r=C.D.gp(0)
x.a=D.a_1
u.x=x
x=B.aQ()
x.b=C.aQ
x.r=C.B.gp(0)
u.y=x
x=B.aQ()
x.b=C.bc
x.r=C.k.gp(0)
u.z=x
x=B.aQ()
x.b=C.aQ
x.r=C.D.gp(0)
x.c=1
u.Q=x
u=new A.a9B(this.d,w,v,u,d,C.bm,new B.bm(),B.aG(y.v))
u.bj()
u.Yl(w.cx)
u.aee()
return u},
bx(d,e){e.sii(0,this.d)
e.sY6(this.e)
e.scN(B.bA(d,null,y.w).w.gcN())
e.B=d
e.bd()}}
A.a9B.prototype={
sii(d,e){if(this.aA.k(0,e))return
this.aA=e
this.bd()},
sY6(d){var x=this
if(x.hW.k(0,d))return
x.hW=d
x.a09(d.cx)
x.bd()},
scN(d){if(this.cV.k(0,d))return
this.cV=d
this.bd()},
aM(d,e){var x,w,v=this,u=d.gds(0),t=u.a
J.aV(t.save())
t.translate(e.a,e.b)
x=v.B
w=v.gC(0)
v.fS.i3(x,new A.a_R(u,w),new A.vi(v.aA,v.hW,v.cV,y.o))
t.restore()},
Zj(d){var x=this,w=x.gC(0)
return new A.Nr(x.fS.W1(d,w,new A.vi(x.aA,x.hW,x.cV,y.o)))}}
A.Mx.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a_R.prototype={
aNQ(d){this.a.a.clipRect(B.dF(d),$.oG()[1],!0)
return null},
acV(d,e){d.aM(this.a,e)},
Vm(d,e,f,g,h){var x,w,v,u,t=this.a,s=t.a
J.aV(s.save())
x=f.a
w=h.a/2
v=f.b
u=h.b/2
s.translate(g.a+x+w,g.b+v+u)
$.lg()
t.Y4(0,d*0.017453292519943295)
s.translate(-x-w,-v-u)
e.$0()
s.restore()},
Dc(d,e,f,g){var x=B.cB($.af().r)
x.az(new B.f3(d.a,d.b))
x.az(new B.cr(e.a,e.b))
this.a.fR(A.ayx(x,g),f)}}
A.yO.prototype={
gbH(){return[this.a]}}
A.akF.prototype={}
A.a00.prototype={}
A.b_3.prototype={
JZ(d,e){var x=d.a,w=e*0.017453292519943295,v=Math.sin(w),u=d.b,t=Math.cos(w)
return new B.m((x-(Math.abs(x*Math.cos(w))+Math.abs(u*Math.sin(w))))/2,(u-(Math.abs(x*v)+Math.abs(u*t)))/2)},
aVL(d,e){var x,w,v,u,t
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
aVM(d,e){var x,w
if(d==null)return D.a_d
x=d.b
w=e/2
return d.aP1(x>w?w:x)},
O8(d,e){var x,w=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
x=e/w
if(w<=2)return x
return this.aYM(x)},
aYM(d){if(d<1)return this.aHV(d)
return this.a7p(d)},
aHV(d){var x,w,v,u,t,s,r
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
x=d>=10?C.d.b5(d)/10:d
if(x>=7.6)return 10*C.d.a4(Math.pow(10,w))
else if(x>=2.6)return 5*C.d.a4(Math.pow(10,w))
else if(x>=1.6)return 2*C.d.a4(Math.pow(10,w))
else return C.d.a4(Math.pow(10,w))},
aiy(d){if(d>=1)return 1
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
Zp(d,e){var x,w,v=d.P(y.f0)
if(v==null)v=C.iG
x=e.a?v.w.c2(e):e
w=B.bN(d,C.v1)
w=w==null?null:w.ay
return w===!0?x.c2(C.lW):x},
aiq(d,e,f,g){var x=C.d.aj(g-d,f)
if(Math.abs(e-d)<=x)return d
if(x===0)return d
return d+x}}
A.Pn.prototype={
a3p(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st1(d){var x=this,w=x.ae
if(w===d)return
x.ae=d
if(x.a3p(w)||x.a3p(d))x.a7()
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
switch(this.ae.a){case 6:return d.c1(new B.as(0,d.b,0,d.d).xD(x))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xD(x)}}else return new B.E(B.K(0,d.a,d.b),B.K(0,d.c,d.d))},
e6(d,e){var x=this.D$
return x==null?null:x.fI(C.iu,e)},
cu(){var x,w,v=this,u=v.D$
if(u!=null){u.dF(C.iu,!0)
switch(v.ae.a){case 6:u=y.k
x=u.a(B.H.prototype.ga6.call(v))
w=new B.as(0,x.b,0,x.d).xD(v.D$.gC(0))
v.fy=u.a(B.H.prototype.ga6.call(v)).c1(w)
break
case 1:case 2:case 0:case 4:case 3:case 5:v.fy=y.k.a(B.H.prototype.ga6.call(v)).xD(v.D$.gC(0))
break}v.cP=v.D=null}else{u=y.k.a(B.H.prototype.ga6.call(v))
v.fy=new B.E(B.K(0,u.a,u.b),B.K(0,u.c,u.d))}},
Tk(){var x,w,v,u,t,s,r,q,p,o,n=this
if(n.cP!=null)return
x=n.D$
if(x==null){n.D=!1
x=new B.c1(new Float64Array(16))
x.fY()
n.cP=x}else{w=n.G
if(w==null)w=n.G=n.aF
v=x.gC(0)
u=B.buf(n.ae,v,n.gC(0))
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
a6l(d,e){var x,w,v,u,t=this,s=t.cP
s.toString
x=B.z2(s)
if(x==null){s=t.cx
s===$&&B.a()
w=t.cP
w.toString
v=B.hZ.prototype.gi2.call(t)
u=t.ch.a
return d.z2(s,e,w,v,u instanceof B.pR?u:null)}else t.kq(d,e.ac(0,x))
return null},
aM(d,e){var x,w,v,u,t=this
if(t.D$==null||t.gC(0).gZ(0)||t.D$.gC(0).gZ(0))return
t.Tk()
x=t.D
x.toString
if(x&&t.eU!==C.q){x=t.cx
x===$&&B.a()
w=t.gC(0)
v=t.ch
u=v.a
u=u instanceof B.uc?u:null
v.sbh(0,d.o0(x,e,new B.D(0,0,0+w.a,0+w.b),t.gaFD(),t.eU,u))}else t.ch.sbh(0,t.a6l(d,e))},
e8(d,e){var x,w=this
if(!w.gC(0).gZ(0)){x=w.D$
x=x==null?null:x.gC(0).gZ(0)
x=x===!0}else x=!0
if(x)return!1
w.Tk()
return d.JI(new A.aSe(w),e,w.cP)},
tp(d){return!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)},
eS(d,e){var x
if(!(!this.gC(0).gZ(0)&&!d.gC(0).gZ(0)))e.OB()
else{this.Tk()
x=this.cP
x.toString
e.fU(0,x)}}}
A.a3A.prototype={
bl(d){var x=new A.Pn(this.e,this.f,B.e_(d),C.q,null,new B.bm(),B.aG(y.v))
x.bj()
x.sc8(null)
return x},
bx(d,e){e.st1(this.e)
e.shC(this.f)
e.scC(B.e_(d))
if(C.q!==e.eU){e.eU=C.q
e.bd()
e.ct()}}}
var z=a.updateTypes(["M(pS)","C(ep)","~(w,ft)","M(e1,w)","bG(M,t6)","pb(M)","w(pQ,pQ)","C(ft)","U<nJ>(cm<nJ>)","H9(A,bO)","Ix(nK)","Ht(nJ)","v6(@)","e1(M)","M(M,pS)","ar(M,t6)","w_(@)","BX(@)","M(v6)","M(w_)","~(ha,JW?)","xd(@)","M(i8)","pS(@)","~(w,i8)","~(@)","jC(nr)","c(nr)","jC(bB<w,M>)","jC(M)","nr(jC)","~(ha,Nr?)","e1(e1)","ur(dO<ur>)","yK(@)","Dk(dO<aCx>)","t7(w)","us(ep,M,e1,w)","r9(mG)","C(e1)","w(v0,v0)","M(ft)","mx(FV<mx>)","pR?(ro,m)","y_(fb<A?>)","w(w,w,M)","i8(i8,i8,M)","mj(mj,mj,M)","Cd?(ft,w,i8,w)","F(ft)","c(M,t6)","ep(ep,ep,M)","C(M)","mC(mC,mC,M)","mZ(mZ,mZ,M)","kx(kx,kx,M)","kY(kY,kY,M)","h(kx)","h(kY)","e1(e1,e1,M)","mk(mk,mk,M)","us(ep,M,e1,w{size:M?})","C(ep,e1)","M(m,m)","u<t7>(e1,u<w>)","U<nK>(cm<nK>)","u<r9>(u<mG>)","F(mG)","ft(ft,ft,M)"])
A.aCu.prototype={
$1(d){var x=B.eg(y.f.a(d),y.N,y.z),w=x.h(0,"month")
return new A.pS(J.ak(w==null?"":w),A.oA(x.h(0,"revenue_net")),A.oA(x.h(0,"expense_net")),A.oA(x.h(0,"result_net")))},
$S:z+23}
A.aCv.prototype={
$1(d){var x,w,v,u=B.eg(y.f.a(d),y.N,y.z),t=B.ao(u.h(0,"machine_id")),s=u.h(0,"label")
s=J.ak(s==null?"unbekannt":s)
x=B.ao(u.h(0,"code"))
w=A.oA(u.h(0,"gross"))
v=B.bS(u.h(0,"purchases_count"))
v=v==null?null:C.d.a4(v)
if(v==null)v=0
return new A.v6(t,s,x,w,v,A.oA(u.h(0,"avg_basket")))},
$S:z+12}
A.aCw.prototype={
$1(d){var x,w=B.eg(y.f.a(d),y.N,y.z),v=B.ao(w.h(0,"product_id")),u=w.h(0,"name")
u=J.ak(u==null?"unbekannt":u)
x=B.bS(w.h(0,"quantity"))
x=x==null?null:C.d.a4(x)
if(x==null)x=0
return new A.w_(v,u,x,A.oA(w.h(0,"gross")))},
$S:z+16}
A.aCK.prototype={
$1(d){var x,w,v,u
y.c.a(d)
x=J.Y(d)
w=x.h(d,"code")
w=J.ak(w==null?"":w)
v=x.h(d,"name")
v=J.ak(v==null?"":v)
u=x.h(d,"direction")
return new A.BX(w,v,J.ak(u==null?"expense":u),A.tM(x.h(d,"net")),A.tM(x.h(d,"tax")),A.tM(x.h(d,"gross")))},
$S:z+17}
A.bnD.prototype={
$1(d){return new A.ur(d.aG($.cd(),y.A))},
$S:z+33}
A.bnE.prototype={
$1(d){return new A.Dk(d.aG($.bJn(),y.D))},
$S:z+35}
A.bpq.prototype={
$1(d){return E.brr()},
$S:z+42}
A.bnF.prototype={
$1(d){var x=d.aG($.wW(),y.P)
return d.aG($.atv(),y.a).FB(x)},
$S:z+65}
A.bnC.prototype={
$1(d){var x=d.aG($.wW(),y.P)
return d.aG($.atv(),y.a).Fx(x)},
$S:z+8}
A.aCt.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atv(),y.a).px(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCs.prototype={
$0(){var x=0,w=B.r(y.H),v=this,u
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return B.k(v.b.r.aP(0,$.atv(),y.a).L3(v.c),$async$$0)
case 2:u.a=e
return B.p(null,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCI.prototype={
$0(){var x=0,w=B.r(y.H),v,u=this,t,s
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:t=u.a
s=$.bqe()
if(t.e==null)B.V(B.Z('Cannot use "ref" after the widget was disposed.'))
t.gcv().cr(s)
v=null
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$$0,w)},
$S:2}
A.aCB.prototype={
$0(){return this.a.J_(this.b,this.c)},
$S:0}
A.aCC.prototype={
$0(){return this.a.AZ(this.b,this.c)},
$S:0}
A.aCD.prototype={
$0(){return B.nP(this.a,"/finance/approvals",y.cK)},
$S:0}
A.aCE.prototype={
$0(){var x=this
return x.a.B_(x.b,x.c,x.d)},
$S:0}
A.aCH.prototype={
$0(){return D.aou},
$S:118}
A.aCG.prototype={
$2(d,e){return new A.H9(B.i(d),null)},
$S:z+9}
A.aCF.prototype={
$1(d){return new A.Ix(d,null)},
$S:z+10}
A.aCA.prototype={
$1(d){var x=null,w=this.a,v=$.ej()
w=B.l("Die Finanzauswertung f\xfcr "+v.aH(w.a)+" \u2013 "+v.aH(w.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",x,x,x,x,x,x,x)
v=this.b
return B.nj(B.b([B.dX(C.dg,x,x,new A.aCy(v),x,x),B.e9(F.uH,new A.aCz(v),B.eo(C.n,C.h,x,x,x,x,x))],y.p),w,F.uI)},
$S:60}
A.aCy.prototype={
$0(){B.bt(this.a,!1).dr(!1)
return null},
$S:0}
A.aCz.prototype={
$0(){B.bt(this.a,!1).dr(!0)
return null},
$S:0}
A.bdn.prototype={
$0(){var x=this.a.aP(0,$.wW().gi1(),y.V),w=E.brr()
x.An(0,w)
return w},
$S:0}
A.bdo.prototype={
$0(){var x=this.a.aP(0,$.wW().gi1(),y.V),w=new B.bg(Date.now(),0,!1),v=new E.mx(B.bK(B.aX(w),1,1,0,0,0,0),w)
x.An(0,v)
return v},
$S:0}
A.bdp.prototype={
$0(){return this.a.Io(this.b,this.c)},
$S:0}
A.bdm.prototype={
$2(d,e){return new B.oi(B.T(d).aOn(B.T(d).ax.aPg(C.h,C.n)),e,null)},
$S:982}
A.biO.prototype={
$2(d,e){var x=null,w=e.b<380?1:2,v=this.a.c,u=$.eP(),t=A.Nb(!1,D.DW,"Umsatz 7 %",u.aH(v.a),x),s=A.Nb(!1,D.DW,"Umsatz 19 %",u.aH(v.b),x),r=A.Nb(!0,D.a8o,"Umsatz netto",u.aH(v.c),x),q=A.Nb(!1,D.a8n,"Aufwand",u.aH(v.d),x),p=v.e,o=u.aH(p)
return E.brG(1.7,B.b([t,s,r,q,A.Nb(!0,C.nq,"Ergebnis",o,p<0?C.ak:C.aN),A.Nb(!1,C.iW,"USt-Saldo",u.aH(v.f-v.r),x)],y.p),w,12,12,F.u0,!0)},
$S:193}
A.aHw.prototype={
$0(){return D.aos},
$S:118}
A.aHv.prototype={
$2(d,e){var x=null
return B.bX(C.ak,B.l("KPIs konnten nicht geladen werden: "+B.i(d),x,x,x,B.L(C.h,13,C.m),x,x,x),C.fz,x,C.J,x,3)},
$S:326}
A.aHu.prototype={
$1(d){return new A.Ht(d,null)},
$S:z+11}
A.bb0.prototype={
$2(d,a0){var x,w,v,u,t,s=this,r=null,q=a0.b<480,p=q?2:3,o=q?1.05:1.1,n=s.a,m=n.c,l=m.a,k=$.eP(),j=k.aH(l.c),i=m.w,h=m.d,g=B.ab(h).i("a9<1,M>"),f=g.i("au.E"),e=B.P(new B.a9(h,new A.baR(),g),f)
j=A.tt(i.f,i.e,!1,"Umsatz (netto)",!1,r,r,r,r,e,j)
e=k.aH(s.b)
x=B.P(new B.a9(h,new A.baS(),g),f)
e=A.tt(r,r,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,x,e)
l=k.aH(l.e)
x=B.P(new B.a9(h,new A.baT(),g),f)
l=A.tt(i.w,i.r,!0,"Ergebnis (netto)",!1,r,r,r,r,x,l)
x=C.d.an(i.b,1)
w=B.P(new B.a9(h,new A.baU(),g),f)
x=A.tt(r,r,!1,"Umsatzrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,w,x+" %")
w=C.d.an(i.a,1)
v=B.P(new B.a9(h,new A.baV(),g),f)
w=A.tt(r,r,!1,"Rohertragsmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,v,w+" %")
v=C.d.an(s.c,1)
u=B.P(new B.a9(h,new A.baW(),g),f)
v=A.tt(r,r,!1,"Wareneinsatzquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,u,v+" %")
u=C.d.an(i.c,1)
t=B.P(new B.a9(h,new A.baX(),g),f)
u=A.tt(r,r,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",r,r,r,t,u+" %")
i=k.aH(i.d)
t=B.P(new B.a9(h,new A.baY(),g),f)
i=A.tt(r,r,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",r,r,r,t,i)
m=k.aH(m.r.d)
n=B.P(new B.a9(h,new A.baZ(n),g),f)
n=A.tt(r,r,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,n,m)
m=s.d
k=C.d.an(m,1)
m=B.P(new B.a9(h,new A.bb_(m),g),f)
return E.brG(o,B.b([j,e,l,x,w,v,u,i,n,A.tt(r,r,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,m,k)],y.p),p,12,12,F.u0,!0)},
$S:193}
A.baR.prototype={
$1(d){return d.b},
$S:z+0}
A.baS.prototype={
$1(d){return d.b/30},
$S:z+0}
A.baT.prototype={
$1(d){return d.d},
$S:z+0}
A.baU.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.baV.prototype={
$1(d){var x=d.b
return x>0?(x-d.c)/x*100:0},
$S:z+0}
A.baW.prototype={
$1(d){var x=d.b
return x>0?d.c/x*100:0},
$S:z+0}
A.baX.prototype={
$1(d){var x=d.b
return x>0?d.d/x*100:0},
$S:z+0}
A.baY.prototype={
$1(d){return d.d},
$S:z+0}
A.baZ.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bb_.prototype={
$1(d){return this.a},
$S:z+0}
A.bie.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bif.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.big.prototype={
$1(d){return A.aHL(null,1.4,null,C.ak,0.35,D.aec,D.D5,null,!1,!1,!1,!1,D.Eo,!1,10,D.XN,!0,C.l5,B.b([new A.ep(0,d),new A.ep(this.a,d)],y.U))},
$S:z+13}
A.b2k.prototype={
$2(d,e){var x=e.b,w=e.c,v=x>w?x:w
return v>d?v:d},
$S:z+14}
A.b2m.prototype={
$2(d,e){var x=null
return B.l(this.a.aJ6(d),x,x,x,B.L(C.x,10,C.O),x,x,x)},
$S:z+15}
A.b2n.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=this.a.length)return C.zq
return new B.ah(C.kC,B.l(C.c.cT(this.a[w].a,5),x,x,x,B.L(C.x,9,C.O),x,x,x),x)},
$S:z+4}
A.b2l.prototype={
$1(d){return D.a7j},
$S:z+5}
A.b35.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b36.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b37.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b38.prototype={
$2(d,e){var x=null,w=C.d.a4(d)
if(w<0||w>=3)return C.zq
return new B.ah(C.kC,B.l(this.a[w],x,x,x,B.L(C.h,12,C.t),x,x,x),x)},
$S:z+4}
A.bbu.prototype={
$1(d){return d.d},
$S:z+18}
A.bbv.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bk4.prototype={
$1(d){return d.d},
$S:z+19}
A.bk5.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b0U.prototype={
$0(){var x=this.b.a,w=x.d,v=x.f,u=this.a.cy
u.a8(0)
u.m(0,w,B.b([v],y.t))},
$S:0}
A.b0V.prototype={
$1(d){return new A.xd(y.B.a(d),this.a.a.r)},
$S:z+21}
A.avo.prototype={
$1(d){return d.e},
$S:z+22}
A.avp.prototype={
$2(d,e){return d+e},
$S:44}
A.avr.prototype={
$1(d){return d.c.length!==0},
$S:z+7}
A.avt.prototype={
$2(d,e){var x=this,w=e.e,v=x.d,u=x.a
x.b.push(x.c-v.gdm(0)/2+u.a+w/2)
u.a=u.a+(w+v.d)},
$S:z+24}
A.avu.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=w.a,s=t.w
s===$&&B.a()
x=v.a
x.eL(u,s)
t=t.x
t===$&&B.a()
x.eL(u,t)
v.acV(w.d,w.e)},
$S:0}
A.av7.prototype={
$1(d){return 0},
$S:983}
A.av6.prototype={
$2(d,e){return B.fF(C.c3,this.a.aku(e),C.r,C.bA,null)},
$S:984}
A.aWA.prototype={
$1(d){return d.a},
$S:z+26}
A.aWB.prototype={
$1(d){return d.b},
$S:z+27}
A.aWC.prototype={
$1(d){return new A.jC(this.a.ch[d.a].a,d.b)},
$S:z+28}
A.aWD.prototype={
$1(d){var x=this,w=x.c,v=x.b-w,u=v>0?(d-w)/v:0
w=x.a.c
if(!(w===D.md||w===D.dx))u=1-u
return new A.jC(d,u*x.d)},
$S:z+29}
A.aWE.prototype={
$1(d){var x,w,v,u,t=this,s=t.a,r=s.gov(),q=d.a
s.gov()
s=$.lg()
x=q<0
w=x?Math.abs(q):q
if(w>=1e9){v=C.d.an(w/1e9,1)
u="B"}else if(w>=1e6){v=C.d.an(w/1e6,1)
u="M"}else if(w>=1000){v=C.d.an(w/1000,1)
u="K"}else{v=C.d.an(w,s.aiy(Math.abs(t.b-t.c)))
u=""}if(C.c.hF(v,".0"))v=C.c.a1(v,0,v.length-2)
if(x)v="-"+v
if(v==="-0")v="0"
return new A.nr(d,r.c.b.$2(q,new A.t6(v+u,t.e)))},
$S:z+30}
A.aRU.prototype={
$1(d){this.a.l5(new A.a3K(d))},
$S:156}
A.aRV.prototype={
$1(d){this.a.l5(new A.a3L(d))},
$S:40}
A.aRW.prototype={
$1(d){this.a.l5(new A.a3M(d))},
$S:28}
A.aRX.prototype={
$0(){this.a.l5(D.a0M)},
$S:0}
A.aRY.prototype={
$1(d){this.a.l5(new A.M3())},
$S:45}
A.aRZ.prototype={
$1(d){this.a.l5(new A.a3P(d))},
$S:42}
A.aS_.prototype={
$0(){this.a.l5(D.a0N)},
$S:0}
A.aS0.prototype={
$1(d){this.a.l5(new A.M6(d))},
$S:90}
A.aS1.prototype={
$1(d){this.a.l5(new A.a3J(d))},
$S:145}
A.aS2.prototype={
$1(d){this.a.l5(new A.a3I(d))},
$S:143}
A.aS3.prototype={
$1(d){return this.a.l5(new A.M1(d))},
$S:155}
A.aS4.prototype={
$1(d){return this.a.l5(new A.a3N(d))},
$S:61}
A.aS5.prototype={
$1(d){return this.a.l5(new A.M4(d))},
$S:54}
A.bbb.prototype={
$1(d){var x=this.a.db.h(0,C.b.io(this.b.ch,d))
return d.aOX(x==null?B.b([],y.t):x)},
$S:z+32}
A.bb9.prototype={
$0(){var x=this.a
C.b.a8(x.cy)
x.db.a8(0)},
$S:0}
A.bba.prototype={
$0(){var x,w,v,u,t,s,r=this.b.a
r.toString
x=B.P(r,y.dw)
C.b.h_(x,new A.bb8())
w=this.a
v=w.db
v.a8(0)
for(u=y.t,t=0;t<r.length;++t){s=r[t]
v.m(0,s.d,B.b([s.e],u))}r=w.cy
C.b.a8(r)
r.push(new A.FK(x))},
$S:0}
A.bb8.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+6}
A.bbc.prototype={
$1(d){return new A.yK(y.hf.a(d),this.a.a.r)},
$S:z+34}
A.aHM.prototype={
$1(d){return!d.k(0,D.fC)},
$S:z+1}
A.bns.prototype={
$1(d){var x,w={},v=this.a,u=v.w,t=u==null?null:C.b.ga0(u.a)
if(t==null)t=v.r
u=v.CW.a
x=A.byJ(u?A.bu1(v.a[d],0,v):t,null,null,4)
w.a=10
if(u)w.a=7.2
return new A.t7(x,new A.y1(!0,A.buL(),new A.bnr(w)))},
$S:z+36}
A.bnr.prototype={
$4(d,e,f,g){var x=this.a.a
return A.bNf(A.bu1(d,e,f),x,A.bVS(d,e,f))},
$S:z+37}
A.bnp.prototype={
$1(d){var x,w=null,v=d.c,u=v.w
u=u==null?w:C.b.ga0(u.a)
v=u==null?v.r:u
x=B.iT(w,w,v==null?D.db:v,w,w,w,w,w,w,w,w,14,w,w,C.O,w,w,!0,w,w,w,w,w,w,w,w)
return new A.r9(C.d.j(d.b),x)},
$S:z+38}
A.aHO.prototype={
$1(d){return d.a.length!==0},
$S:z+39}
A.aHP.prototype={
$1(d){return!d.k(0,D.fC)},
$S:z+1}
A.aHT.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+40}
A.aHR.prototype={
$0(){var x,w=this.c,v=this.a,u=v.z
u===$&&B.a()
x=this.b.a
x.eL(w,u)
v=v.Q
v===$&&B.a()
x.eL(w,v)},
$S:0}
A.aHS.prototype={
$0(){this.a.acV(this.b,this.c)},
$S:0}
A.aHU.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+6}
A.avh.prototype={
$1(d){return d.gdm(0)},
$S:z+41}
A.avi.prototype={
$2(d,e){return d+e},
$S:44}
A.avl.prototype={
$0(){var x={},w=this.b.ch,v=w.length
x.a=0
new B.iJ(w,B.ab(w).i("iJ<1>")).aq(0,new A.avm(x,this.a/(v+1),this.c))},
$S:0}
A.avm.prototype={
$2(d,e){var x=this.a,w=x.a+this.b
x.a=w
w=x.a=w+e.gdm(0)/2
this.c[d]=w
x.a=w+e.gdm(0)/2},
$S:z+2}
A.avj.prototype={
$2(d,e){var x=this.a,w=x.a=x.a+e.gdm(0)/2,v=d!==0?x.a=w+this.b:w
this.c[d]=v
x.a=v+e.gdm(0)/2},
$S:z+2}
A.avk.prototype={
$2(d,e){var x=this.a,w=this.b,v=x.a+w
x.a=v
v=x.a=v+e.gdm(0)/2
this.c[d]=v
v+=e.gdm(0)/2
x.a=v
x.a=v+w},
$S:z+2}
A.aEY.prototype={
$2(d,e){var x=this.b.a.length
C.b.E(this.a.a,1/(x-1)*d)},
$S:985}
A.ayy.prototype={
$1(d){return d},
$S:986}
A.aSe.prototype={
$2(d,e){return this.a.Ak(d,e)},
$S:21};(function aliases(){var x=A.JP.prototype
x.a_p=x.i3
x.akN=x.aQE
x.akO=x.acO
x=A.So.prototype
x.anq=x.l
x=A.JZ.prototype
x.a_q=x.i3
x=A.Fi.prototype
x.a09=x.Yl})();(function installTearOffs(){var x=a._static_1,w=a._instance_2u,v=a.installStaticTearOff,u=a._static_2,t=a._instance_1u
x(A,"bZr","bNc",44)
w(A.Sq.prototype,"gard","are",20)
v(A,"bYi",3,null,["$3"],["bKx"],68,0)
v(A,"bYj",3,null,["$3"],["bKy"],46,0)
v(A,"bYk",3,null,["$3"],["bKz"],47,0)
v(A,"bYm",4,null,["$4"],["bZ4"],48,0)
x(A,"bYl","bZ3",49)
u(A,"bug","bZ5",50)
v(A,"bYd",3,null,["$3"],["bNg"],51,0)
x(A,"YW","c0s",52)
x(A,"asR","bZ8",5)
v(A,"bYf",3,null,["$3"],["bO1"],53,0)
v(A,"bYh",3,null,["$3"],["bTa"],54,0)
v(A,"bYe",3,null,["$3"],["bO0"],55,0)
v(A,"bYg",3,null,["$3"],["bT9"],56,0)
x(A,"c7x","bO_",57)
x(A,"c7y","bT8",58)
t(A.WK.prototype,"ga3L","awD",25)
w(A.UC.prototype,"gaxV","axW",31)
v(A,"c_l",3,null,["$3"],["bOw"],59,0)
v(A,"c_k",3,null,["$3"],["bKB"],60,0)
x(A,"c_o","c0t",1)
v(A,"bFd",4,null,["$5$size","$4"],["bDF",function(d,e,f,g){return A.bDF(d,e,f,g,null)}],61,0)
u(A,"buL","c0r",62)
u(A,"bFe","bY0",63)
u(A,"bFh","bZb",64)
u(A,"bFg","bZ7",3)
u(A,"bFf","bZ6",3)
x(A,"c_n","bER",66)
x(A,"c_m","bEQ",67)
w(A.Pn.prototype,"gaFD","a6l",43)
v(A,"Z0",3,null,["$3"],["c_j"],45,0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(B.a_,[A.a5h,A.aeO,A.ajP,A.I1,A.Ix,A.aeM,A.H9,A.Ht,A.aj9,A.akk,A.Ts,A.ap7,A.agc,A.agt,A.akO,A.ahf,A.Il,A.aqj,A.TR,A.JQ,A.A3])
v(B.A,[A.ur,A.Dk,A.b8,A.afN,A.afD,A.afF,A.afG,A.afy,A.aiU,A.afJ,A.afH,A.avD,A.aqn,A.avq,A.afE,A.JZ,A.a4j,A.t6,A.aoN,A.aoM,A.afx,A.aiT,A.ep,A.aiQ,A.aiS,A.an1,A.ajG,A.ar0,A.aiR,A.aiz,A.aiP,A.av5,A.bb6,A.av8,A.afu,A.nr,A.aiM,A.aiN,A.vi,A.ha,A.aks,A.akv,A.afA,A.afO,A.afB,A.aiO,A.aky,A.akw,A.aqm,A.aoL,A.aHN,A.aku,A.v0,A.a_R,A.akF,A.a00,A.b_3])
v(B.up,[A.pS,A.v6,A.w_,A.axX,A.az3,A.nJ,A.BX,A.nK])
v(B.nw,[A.aCu,A.aCv,A.aCw,A.aCK,A.bnD,A.bnE,A.bpq,A.bnF,A.bnC,A.aCF,A.aCA,A.aHu,A.baR,A.baS,A.baT,A.baU,A.baV,A.baW,A.baX,A.baY,A.baZ,A.bb_,A.big,A.b2l,A.b35,A.b36,A.bbu,A.bk4,A.b0V,A.avo,A.avr,A.av7,A.aWA,A.aWB,A.aWC,A.aWD,A.aWE,A.aRU,A.aRV,A.aRW,A.aRY,A.aRZ,A.aS0,A.aS1,A.aS2,A.aS3,A.aS4,A.aS5,A.bbb,A.bbc,A.aHM,A.bns,A.bnr,A.bnp,A.aHO,A.aHP,A.avh,A.ayy])
u(A.y_,B.fo)
v(B.xs,[A.aCt,A.aCs,A.aCI,A.aCB,A.aCC,A.aCD,A.aCE,A.aCH,A.aCy,A.aCz,A.bdn,A.bdo,A.bdp,A.aHw,A.b0U,A.avu,A.aRX,A.aS_,A.bb9,A.bba,A.aHR,A.aHS,A.avl])
v(B.xz,[A.y0,A.alZ,A.a5i])
v(B.xt,[A.aCG,A.bdm,A.biO,A.aHv,A.bb0,A.bie,A.bif,A.b2k,A.b2m,A.b2n,A.b37,A.b38,A.bbv,A.bk5,A.avp,A.avt,A.av6,A.bb8,A.aHT,A.aHU,A.avi,A.avm,A.avj,A.avk,A.aEY,A.aSe])
v(B.MK,[A.JV,A.Np])
v(B.x5,[A.Sq,A.UC])
u(A.a_t,A.afN)
u(A.aft,A.a_t)
u(A.a_d,A.aft)
v(A.a_d,[A.afC,A.akt])
u(A.ns,A.afC)
v(B.TT,[A.avf,A.acf,A.Cc,A.aBV,A.aHx,A.Mx])
u(A.ft,A.afD)
u(A.i8,A.afF)
u(A.mj,A.afG)
u(A.a_k,A.afy)
u(A.M7,A.aiU)
v(A.M7,[A.afI,A.akx])
u(A.a_p,A.afI)
u(A.a_q,A.afJ)
u(A.Cd,A.afH)
v(A.avD,[A.JW,A.Nr])
u(A.ach,A.aqn)
u(A.afK,A.ach)
u(A.a_r,A.afK)
v(B.b6,[A.xd,A.yK])
u(A.u4,A.afE)
u(A.JP,A.JZ)
v(A.JP,[A.avs,A.aHQ])
v(B.Nl,[A.a_n,A.a5v])
v(B.I,[A.Fi,A.afv])
v(A.Fi,[A.a9o,A.a9B])
u(A.pI,A.aoN)
u(A.aaN,A.aoM)
u(A.oO,A.afx)
u(A.ut,A.aiT)
u(A.y2,A.aiQ)
u(A.pb,A.aiS)
u(A.P3,A.an1)
u(A.mC,A.ajG)
u(A.mZ,A.ar0)
v(A.pb,[A.ajF,A.ar_])
u(A.kx,A.ajF)
u(A.kY,A.ar_)
u(A.a3H,A.aiR)
v(A.a3H,[A.ajE,A.aqZ])
u(A.a4u,A.ajE)
u(A.acF,A.aqZ)
u(A.LQ,A.aiz)
u(A.us,A.aiP)
u(A.M0,A.us)
u(A.Qu,B.O)
u(A.WK,B.a0)
u(A.aaO,B.fU)
u(A.afw,A.afv)
u(A.So,A.afw)
u(A.a_e,A.So)
u(A.jC,A.afu)
u(A.a3E,A.aiM)
u(A.a3G,A.aiN)
v(A.ha,[A.a3K,A.a3L,A.a3M,A.M2,A.M3,A.a3P,A.M5,A.M6,A.a3J,A.a3I,A.M1,A.a3N,A.a3O,A.M4])
u(A.pm,A.akt)
u(A.e1,A.aks)
u(A.Nq,A.akv)
u(A.a_m,A.afA)
u(A.mk,A.afO)
u(A.JU,A.afB)
u(A.y1,A.aiO)
u(A.E_,A.akx)
u(A.a5w,A.aky)
u(A.akr,A.ep)
u(A.mG,A.akr)
u(A.pQ,A.mG)
u(A.r9,A.akw)
u(A.t7,A.aqm)
u(A.FK,A.aoL)
u(A.yL,A.aku)
u(A.yO,A.akF)
u(A.Pn,B.PA)
u(A.a3A,B.bG)
x(A.afy,A.b8)
x(A.afC,A.b8)
x(A.afD,A.b8)
x(A.afF,A.b8)
x(A.afG,A.b8)
x(A.afH,A.b8)
x(A.afI,A.b8)
x(A.afJ,A.b8)
x(A.afK,A.b8)
x(A.afE,A.b8)
x(A.aft,A.b8)
x(A.afx,A.b8)
x(A.aiz,A.b8)
x(A.aiP,A.b8)
x(A.aiQ,A.b8)
x(A.aiS,A.b8)
x(A.aiT,A.b8)
x(A.ajF,A.b8)
x(A.ajE,A.b8)
x(A.ajG,A.b8)
x(A.an1,A.b8)
x(A.aoM,A.b8)
x(A.aoN,A.b8)
x(A.aqn,A.b8)
x(A.ar_,A.b8)
x(A.aqZ,A.b8)
x(A.ar0,A.b8)
x(A.afu,A.b8)
w(A.afv,B.aB)
x(A.afw,B.dW)
w(A.So,B.a2F)
x(A.afN,A.b8)
x(A.aiM,A.b8)
x(A.aiN,A.b8)
x(A.aiU,A.b8)
x(A.afA,A.b8)
x(A.afB,A.b8)
x(A.afO,A.b8)
x(A.aiO,A.b8)
x(A.aiR,A.b8)
x(A.akr,A.b8)
x(A.aks,A.b8)
x(A.akt,A.b8)
x(A.akv,A.b8)
x(A.akw,A.b8)
x(A.akx,A.b8)
x(A.aky,A.b8)
x(A.aoL,A.b8)
x(A.aqm,A.b8)
x(A.aku,A.b8)
x(A.akF,A.b8)})()
B.bkh(b.typeUniverse,JSON.parse('{"a5h":{"a_":[],"c":[]},"Dk":{"aCx":[]},"y_":{"fo":["bf<~>"],"fo.T":"bf<~>"},"Ix":{"a_":[],"c":[]},"H9":{"a_":[],"c":[]},"y0":{"bs":[],"O":[],"c":[]},"aeO":{"a_":[],"c":[]},"ajP":{"a_":[],"c":[]},"alZ":{"bs":[],"O":[],"c":[]},"I1":{"a_":[],"c":[]},"aeM":{"a_":[],"c":[]},"Ht":{"a_":[],"c":[]},"a5i":{"bs":[],"O":[],"c":[]},"aj9":{"a_":[],"c":[]},"akk":{"a_":[],"c":[]},"Ts":{"a_":[],"c":[]},"ap7":{"a_":[],"c":[]},"agc":{"a_":[],"c":[]},"agt":{"a_":[],"c":[]},"akO":{"a_":[],"c":[]},"ahf":{"a_":[],"c":[]},"Il":{"a_":[],"c":[]},"aqj":{"a_":[],"c":[]},"TR":{"a_":[],"c":[]},"JV":{"O":[],"c":[]},"Sq":{"a0":["JV"]},"ns":{"b8":[]},"ft":{"b8":[]},"i8":{"b8":[]},"mj":{"b8":[]},"Cd":{"b8":[]},"xd":{"b6":["ns"],"aZ":["ns"],"aZ.T":"ns","b6.T":"ns"},"a_k":{"b8":[]},"a_p":{"b8":[]},"a_q":{"b8":[]},"a_r":{"b8":[]},"u4":{"b8":[]},"a_n":{"aT":[],"c":[]},"a9o":{"I":[],"H":[],"je":[],"aP":[]},"pb":{"b8":[]},"mC":{"b8":[]},"mZ":{"b8":[]},"kx":{"b8":[]},"kY":{"b8":[]},"us":{"b8":[]},"a_d":{"b8":[]},"pI":{"b8":[]},"aaN":{"b8":[]},"oO":{"b8":[]},"ut":{"b8":[]},"y2":{"b8":[]},"ach":{"b8":[]},"P3":{"b8":[]},"a4u":{"b8":[]},"acF":{"b8":[]},"LQ":{"b8":[]},"M0":{"b8":[]},"JQ":{"a_":[],"c":[]},"Qu":{"O":[],"c":[]},"WK":{"a0":["Qu"]},"jC":{"b8":[]},"aaO":{"fU":[],"aT":[],"c":[]},"a_e":{"dW":["I","hb"],"I":[],"aB":["I","hb"],"H":[],"aP":[],"aB.1":"hb","dW.1":"hb","aB.0":"I"},"A3":{"a_":[],"c":[]},"a_t":{"b8":[]},"a3E":{"b8":[]},"M7":{"b8":[]},"a3G":{"b8":[]},"a3K":{"ha":[]},"a3L":{"ha":[]},"a3M":{"ha":[]},"M2":{"ha":[]},"M3":{"ha":[]},"a3P":{"ha":[]},"M5":{"ha":[]},"M6":{"ha":[]},"a3J":{"ha":[]},"a3I":{"ha":[]},"M1":{"ha":[]},"a3N":{"ha":[]},"a3O":{"ha":[]},"M4":{"ha":[]},"Fi":{"I":[],"H":[],"je":[],"aP":[]},"Np":{"O":[],"c":[]},"UC":{"a0":["Np"]},"pm":{"b8":[]},"e1":{"b8":[]},"mk":{"b8":[]},"mG":{"ep":[],"b8":[]},"pQ":{"mG":[],"ep":[],"b8":[]},"r9":{"b8":[]},"t7":{"b8":[]},"FK":{"b8":[]},"yK":{"b6":["pm"],"aZ":["pm"],"aZ.T":"pm","b6.T":"pm"},"Nq":{"b8":[]},"a_m":{"b8":[]},"JU":{"b8":[]},"y1":{"b8":[]},"a3H":{"b8":[]},"E_":{"b8":[]},"a5w":{"b8":[]},"yL":{"b8":[]},"a5v":{"aT":[],"c":[]},"a9B":{"I":[],"H":[],"je":[],"aP":[]},"yO":{"b8":[]},"Pn":{"I":[],"br":["I"],"H":[],"aP":[]},"a3A":{"bG":[],"aT":[],"c":[]}}'))
B.bD9(b.typeUniverse,JSON.parse('{"JP":1,"M7":1,"JZ":1,"Fi":1}'))
var y=(function rtii(){var x=B.aw
return{_:x("BX"),e:x("bf<nJ>"),h:x("bf<nK>"),b:x("bf<~>"),W:x("jC"),B:x("ns"),dB:x("ft"),T:x("u4"),fj:x("i8"),G:x("mj"),J:x("mk"),k:x("as"),cX:x("a00<M>"),dO:x("uc"),R:x("ag<h,@>"),v:x("hO"),bz:x("ms<bg>"),f0:x("nB"),E:x("b8"),F:x("y_"),X:x("nJ"),P:x("mx"),D:x("ur"),a:x("aCx"),d:x("nK"),cw:x("ep"),L:x("hb"),m:x("df<w,F>"),cm:x("kx"),dv:x("mC"),g:x("B<nr>"),O:x("B<ft>"),Y:x("B<i8>"),C:x("B<brc>"),U:x("B<ep>"),K:x("B<a4j>"),u:x("B<e1>"),bC:x("B<v0>"),aA:x("B<u<ep>>"),r:x("B<FK>"),gM:x("B<h>"),eg:x("B<t4>"),df:x("B<pQ>"),p:x("B<c>"),n:x("B<M>"),t:x("B<w>"),eF:x("ba<a0<O>>"),Z:x("mG"),cz:x("e1"),hf:x("pm"),dj:x("yL"),fT:x("r9"),c_:x("ie<ou<bf<~>>>"),s:x("yO<ft>"),x:x("yO<e1>"),I:x("u<w>"),ef:x("v6"),c:x("a2<h,@>"),f:x("a2<@,@>"),gj:x("a9<M,M>"),w:x("jP"),Q:x("vi<ns>"),o:x("vi<pm>"),eo:x("pz"),gJ:x("pA"),V:x("mT<mx>"),N:x("h"),A:x("oe"),er:x("t4"),j:x("w_"),dw:x("pQ"),bY:x("t7"),cZ:x("pS"),gc:x("k7"),es:x("kY"),bN:x("mZ"),l:x("c"),q:x("Bp"),g4:x("iu<M>"),y:x("C"),i:x("M"),z:x("@"),S:x("w"),bn:x("xd?"),f3:x("yK?"),M:x("u<@>?"),fF:x("a2<@,@>?"),cK:x("A?"),aD:x("k7?"),h6:x("w?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Aj=new B.ql(C.n,B.aw("ql<F>"))
D.Aq=new A.Cc(0,"left")
D.md=new A.Cc(1,"top")
D.Ar=new A.Cc(2,"right")
D.dx=new A.Cc(3,"bottom")
D.arR=new A.pI(!1,A.bug(),22,null)
D.k6=new A.oO(16,null,D.arR,!0)
D.a7k=new A.pb(C.B,null,2,null)
D.vv=new A.JU(!1,D.a7k,A.c_o(),!0)
D.ZT=new A.avf(3,"spaceEvenly")
D.a_1=new B.xh(6,"dstIn")
D.X7=new B.aS(3,3)
D.Av=new B.d2(D.X7,D.X7,C.Z,C.Z)
D.a_d=new B.b7(C.B,0,C.N,-1)
D.B1=new A.a3G()
D.a0M=new A.M2()
D.a0N=new A.M5()
D.aHQ=new A.aaN()
D.aiG=x([],B.aw("B<kx>"))
D.aiH=x([],B.aw("B<kY>"))
D.D1=new A.LQ(D.aiG,D.aiH,!0)
D.a6U=new B.f1("Konten (SKR 03)",null)
D.a70=new B.f1("Zeitraum",null)
D.x4=new A.aBV(0,"center")
D.aI1=new A.y1(!0,A.buL(),A.bFd())
D.D5=new A.y1(!1,A.buL(),A.bFd())
D.D6=new A.y2(!1,!0,null,A.asR(),A.YW(),!0,null,A.asR(),A.YW())
D.aI2=new A.y2(!0,!0,null,A.asR(),A.YW(),!0,null,A.asR(),A.YW())
D.a33=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a2Q=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3c=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a37=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2B=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2A=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3y=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a2X=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3B=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3v=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.amA=new B.df([50,D.a33,100,D.a2Q,200,D.a3c,300,D.a37,400,D.a2B,500,D.a2A,600,D.a3y,700,D.a2X,800,D.a3B,900,D.a3v],y.m)
D.db=new B.rg(D.amA,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.af7=x([8,4],y.t)
D.a7i=new A.pb(D.db,null,0.4,D.af7)
D.a7j=new A.pb(C.an,null,0.5,null)
D.fC=new A.ep(0/0,0/0)
D.arT=new A.pI(!0,A.bug(),44,null)
D.me=new A.oO(16,null,D.arT,!0)
D.arS=new A.pI(!0,A.bug(),30,null)
D.mf=new A.oO(16,null,D.arS,!0)
D.a7l=new A.ut(!1,D.me,D.mf,D.me,D.mf)
D.aI3=new A.ut(!0,D.me,D.mf,D.me,D.mf)
D.De=new A.Mx(0,"left")
D.a7A=new A.Mx(1,"center")
D.Df=new A.Mx(2,"right")
D.a7F=new B.ad(57495,"MaterialIcons",null,!1)
D.a8k=new B.ad(58927,"MaterialIcons",null,!1)
D.a8n=new B.ad(59005,"MaterialIcons",null,!0)
D.a8o=new B.ad(59007,"MaterialIcons",null,!0)
D.a8p=new B.ad(59011,"MaterialIcons",null,!1)
D.a97=new B.ad(62589,"MaterialIcons",null,!1)
D.DW=new B.ad(984391,"MaterialIcons",null,!1)
D.a8A=new B.ad(61349,"MaterialIcons",null,!1)
D.a9O=new B.aW(D.a8A,20,C.h,null,null)
D.aam=new B.aW(C.xi,null,C.x,null,null)
D.a7R=new B.ad(57912,"MaterialIcons",null,!1)
D.aaG=new B.aW(D.a7R,null,C.ak,null,null)
D.acM=new A.a5i(null)
D.aI8=new A.aHx(0,"horizontal")
D.xw=new A.yL(0,0,0,0,!1)
D.Eo=new A.Nq(0.5)
D.B5=new A.a5w()
D.acQ=new A.E_(D.B5,A.bFh(),10,A.bFe(),!0,A.bFg(),A.bFf(),!1,null,null,null)
D.aIa=new A.E_(D.B5,A.bFh(),10,A.bFe(),!0,A.bFg(),A.bFf(),!0,null,null,null)
D.aec=x([4,3],y.t)
D.aIe=x([],y.g)
D.ais=x([],y.O)
D.ait=x([],y.Y)
D.aiu=x([],B.aw("B<mj>"))
D.aiv=x([],B.aw("B<mk>"))
D.aIf=x([],y.U)
D.aIg=x([],y.u)
D.aiw=x([],y.r)
D.anb={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SK={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ya=new B.ag(D.SK,[0,0,0,0,0,0,0,C.cB],B.aw("ag<h,A>"))
D.an9={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.amv=new B.ag(D.an9,[0,0,0,0],B.aw("ag<h,w>"))
D.ano={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.alT=new B.ag(D.ano,[0,0,0,0,null,null,null,null],B.aw("ag<h,w?>"))
D.alP=new B.ag(D.anb,[D.ya,D.ya,D.ya,C.cB,C.cB,C.cB,D.amv,D.alT],y.R)
D.am5=new B.ag(D.SK,[0,0,0,0,0,0,0,C.cA],y.R)
D.an8={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.amw=new B.ag(D.an8,[0,0,0,0,0,0,0,C.cA],y.R)
D.a3H=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a3O=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2E=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3_=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a39=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a40=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2r=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a31=new B.F(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3b=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3w=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.amB=new B.df([50,D.a3H,100,D.a3O,200,D.a2E,300,D.a3_,400,D.a39,500,D.a40,600,D.a2r,700,D.a31,800,D.a3b,900,D.a3w],y.m)
D.Sz=new B.rg(D.amB,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6D=new B.ai(32,32,32,32)
D.aos=new B.ah(D.a6D,C.bH,null)
D.a6F=new B.ai(48,48,48,48)
D.aou=new B.ah(D.a6F,C.bH,null)
D.aiI=x([],B.aw("B<mC>"))
D.aiJ=x([],B.aw("B<mZ>"))
D.X8=new A.P3(D.aiI,D.aiJ)
D.aqP=new B.hB("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aqR=new B.hB("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aqT=new B.hB("Automaten-Business","Umsatz je Automat",null,null)
D.aqU=new B.hB("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aqV=new B.hB("Top","Meistverkaufte Produkte",null,null)
D.aqY=new B.hB("Kennzahlen","Rentabilit\xe4t",null,null)
D.XN=new B.rP(C.D,C.p,0)
D.aAG=new B.ar("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.att=new B.eL(D.aAG,null,null,null,null,null,null,null,null,null,null,null,null,C.R,!1,null,null,null,C.r,null)
D.aIp=new B.Q(!0,C.B,null,null,null,null,14,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.YX=new A.acf(0,"auto")
D.aBq=new A.acf(1,"top")
D.aFx=new A.TR("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"c7W","bJn",()=>B.jj(new A.bnD(),y.D))
x($,"c7X","atv",()=>B.jj(new A.bnE(),y.a))
x($,"c8P","wW",()=>B.bBn(new A.bpq(),y.P))
x($,"c7Y","bqe",()=>C.aM.$1$1(new A.bnF(),y.d))
x($,"c7V","bJm",()=>C.aM.$1$1(new A.bnC(),y.X))
x($,"c7U","bqd",()=>B.aXs(A.bZr(),y.F,y.b))
x($,"c1d","bpQ",()=>new A.av5())
w($,"c4q","lg",()=>new A.b_3())})()};
(a=>{a["DuNg+fddMCUgmEoDEG/UTLPDCSs="]=a.current})($__dart_deferred_initializers__);