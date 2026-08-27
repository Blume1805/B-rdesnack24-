((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Px(d,e,f,g,h){return new A.a9_(f,g,d,h,e,null)},
a9_:function a9_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vw:function vw(d){this.a=d},
cdR(d){var w
if(x.f.b(d)){w=J.I(d,"error")
if(typeof w=="string"&&C.c.ah(w).length!==0)return C.c.ah(w)}if(typeof d=="string"&&C.c.ah(d).length!==0)return C.c.ah(d)
return null},
Fa:function Fa(d){this.a=d},
c0X(d){var w=J.Q(d),v=B.aX(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.aW
w=J.cV(w,new A.aIr(),x.aI)
w=B.S(w,w.$ti.i("ax.E"))
return new A.ov(v,w)},
bAa(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.ak(d))
return w==null?0:w},
pW:function pW(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ov:function ov(d,e){this.a=d
this.b=e},
aIr:function aIr(){},
c0Y(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Q(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.fa
w=x.f
v=x.N
u=x.z
t=A.aIM(B.cn(w.a(e.h(a0,"current")),v,u))
s=A.aIM(B.cn(w.a(e.h(a0,"prior_year")),v,u))
r=A.aIM(B.cn(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.aW
p=J.cV(p,new A.aIs(),x.cZ)
p=B.S(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.aW
o=J.cV(o,new A.aIt(),x.ef)
o=B.S(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.aW
q=J.cV(q,new A.aIu(),x.fB)
q=B.S(q,q.$ti.i("ax.E"))
n=B.cn(w.a(e.h(a0,"customer")),v,u)
m=B.aX(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pq(n.h(0,"app_gross"))
k=B.aX(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pq(n.h(0,"avg_basket"))
u=B.cn(w.a(e.h(a0,"derived")),v,u)
v=A.pq(u.h(0,"gross_margin_pct"))
e=A.pq(u.h(0,"net_margin_pct"))
w=A.pq(u.h(0,"ebitda_margin_pct"))
j=A.pq(u.h(0,"cashflow_operating"))
i=A.bAb(u.h(0,"revenue_growth_yoy_pct"))
h=A.bAb(u.h(0,"revenue_growth_mom_pct"))
g=A.bAb(u.h(0,"result_growth_yoy_pct"))
u=A.bAb(u.h(0,"result_growth_mom_pct"))
f=B.aX(J.I(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.ow(t,s,r,p,o,q,new A.aDA(m,l,k,n),new A.aEL(v,e,w,j,i,h,g,u),f)},
pq(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.ak(d))
return w==null?0:w},
bAb(d){if(d==null)return null
if(typeof d=="number")return d
return B.f1(J.ak(d))},
qH:function qH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w5:function w5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
x2:function x2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDA:function aDA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEL:function aEL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ow:function ow(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aIs:function aIs(){},
aIt:function aIt(){},
aIu:function aIu(){},
aIM(d){var w=J.Q(d),v=A.uM(w.h(d,"revenue_net_7")),u=A.uM(w.h(d,"revenue_net_19")),t=A.uM(w.h(d,"revenue_net")),s=A.uM(w.h(d,"expense_net")),r=A.uM(w.h(d,"result_net")),q=A.uM(w.h(d,"vat_collected")),p=A.uM(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.aW
w=J.cV(w,new A.aIN(),x._)
w=B.S(w,w.$ti.i("ax.E"))
return new A.oy(v,u,t,s,r,q,p,w)},
uM(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.ak(d))
return w==null?0:w},
DA:function DA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oy:function oy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIN:function aIN(){},
c0W(d){return new A.z3(d,new B.iC(x.c_),C.dW)},
bB0:function bB0(){},
bB1:function bB1(){},
bD_:function bD_(){},
bB2:function bB2(){},
bAZ:function bAZ(){},
bB_:function bB_(){},
bAY:function bAY(){},
z3:function z3(d,e,f){this.r=d
this.a=e
this.f=f},
aIq:function aIq(d,e,f){this.a=d
this.b=e
this.c=f},
aIp:function aIp(d,e,f){this.a=d
this.b=e
this.c=f},
vv:function vv(d,e){this.d=d
this.a=e},
xm:function xm(d,e){this.a=d
this.b=e},
an4:function an4(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bgB:function bgB(d){this.a=d},
bgw:function bgw(d){this.a=d},
bgv:function bgv(d,e){this.a=d
this.b=e},
bgx:function bgx(d){this.a=d},
bgu:function bgu(d){this.a=d},
bgA:function bgA(){},
bgz:function bgz(){},
bgy:function bgy(d){this.a=d},
bgt:function bgt(d){this.a=d},
an3:function an3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgp:function bgp(d){this.a=d},
bgq:function bgq(d){this.a=d},
bgr:function bgr(d){this.a=d},
bgs:function bgs(d){this.a=d},
xg:function xg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JC:function JC(d,e,f){this.c=d
this.d=e
this.a=f},
bld:function bld(){},
ble:function ble(){},
blf:function blf(){},
blg:function blg(){},
blh:function blh(){},
bli:function bli(){},
blj:function blj(){},
ak3:function ak3(d,e){this.c=d
this.a=e},
xp:function xp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c0Z(){return new A.z4(null)},
Xp(d,e,f,g,h){return new A.aoh(e,h,g,f,d,null)},
z4:function z4(d){this.a=d},
aIL:function aIL(d){this.a=d},
aIC:function aIC(d,e,f){this.a=d
this.b=e
this.c=f},
aID:function aID(d,e,f){this.a=d
this.b=e
this.c=f},
aIE:function aIE(d){this.a=d},
aIB:function aIB(){},
aIF:function aIF(d){this.a=d},
aIG:function aIG(d){this.a=d},
aIA:function aIA(){},
aIH:function aIH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aIK:function aIK(){},
aIJ:function aIJ(){},
aII:function aII(){},
aIz:function aIz(d,e){this.a=d
this.b=e},
aIx:function aIx(d){this.a=d},
aIy:function aIy(d){this.a=d},
aiB:function aiB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aoh:function aoh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aqK:function aqK(d,e){this.e=d
this.a=e},
boE:function boE(d){this.a=d},
boF:function boF(d){this.a=d},
boG:function boG(d,e,f){this.a=d
this.b=e
this.c=f},
boD:function boD(){},
K8:function K8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
KA:function KA(d,e){this.c=d
this.a=e},
bvB:function bvB(d){this.a=d},
bvC:function bvC(d,e){this.a=d
this.b=e},
bvA:function bvA(d){this.a=d},
aiz:function aiz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
Ja:function Ja(d,e){this.c=d
this.a=e},
bI0(d,e,f,g,h){var w=null
return B.eq(w,w,!0,w,new A.bA5(h,g,e,f),d,w,!0,!0,x.H)},
jY(d,e,f,g,h,i,j,k,l,m,n){return new A.aoV(g,n,i,e,d,m,f,k,l,j,null)},
ayf(d,e){return A.cbC(d,e)},
cbC(d,e){var w=0,v=B.p(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$ayf=B.l(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.M(x.q).f
l.aE(D.aEg)
t=4
o=e.az(0,$.bx(),x.A).ax
o===$&&B.b()
n=x.z
w=7
return B.j(o.fO("finance-balance-sync",B.B(n,n)),$async$ayf)
case 7:r=g
q=B.cn(x.f.a(r.a),x.N,n)
l.Ni()
if(J.f(J.I(q,"configured"),!1)){l.aE(D.aEm)
w=1
break}if(J.f(J.I(q,"ok"),!0)){o=$.bDV()
if(e.e==null)B.T(B.Z(y.b))
e.gck().c2(o)
l.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Bilanz aus sevDesk \xfcbernommen ("+B.e(J.I(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.I(q,"error")
l.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Sync-Fehler: "+B.e(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a0(k)
l.Ni()
l.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Sync fehlgeschlagen: "+B.e(p),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$ayf,v)},
ayi(d,e,f){var w=0,v=B.p(x.H)
var $async$ayi=B.l(function(g,h){if(g===1)return B.m(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.eq(null,null,!0,null,new A.bA3(f,e,e.az(0,$.bx(),x.A)),d,null,!0,!0,x.H),$async$ayi)
case 2:return B.n(null,v)}})
return B.o($async$ayi,v)},
a90:function a90(d){this.a=d},
aNA:function aNA(){},
aNz:function aNz(){},
aNy:function aNy(){},
Jw:function Jw(d,e){this.c=d
this.a=e},
bkO:function bkO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bkD:function bkD(){},
bkE:function bkE(){},
bkF:function bkF(){},
bkG:function bkG(){},
bkH:function bkH(){},
bkI:function bkI(){},
bkJ:function bkJ(){},
bkK:function bkK(){},
bkL:function bkL(d){this.a=d},
bkM:function bkM(d){this.a=d},
bkN:function bkN(d){this.a=d},
bkP:function bkP(d,e){this.a=d
this.b=e},
bkQ:function bkQ(d,e){this.a=d
this.b=e},
bA5:function bA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bA4:function bA4(d){this.a=d},
any:function any(d){this.a=d},
aoV:function aoV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bkR:function bkR(d,e){this.a=d
this.b=e},
Wp:function Wp(d,e,f){this.c=d
this.d=e
this.a=f},
a_d:function a_d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bux:function bux(){},
buy:function buy(){},
buz:function buz(d){this.a=d},
Vx:function Vx(d,e,f){this.c=d
this.d=e
this.a=f},
b9C:function b9C(){},
b9E:function b9E(d){this.a=d},
b9F:function b9F(d){this.a=d},
b9D:function b9D(){},
VO:function VO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baF:function baF(){},
baG:function baG(){},
baH:function baH(){},
baI:function baI(d){this.a=d},
aps:function aps(d,e){this.c=d
this.a=e},
blx:function blx(){},
bly:function bly(){},
alp:function alp(d,e){this.c=d
this.a=e},
D0:function D0(d,e,f){this.c=d
this.d=e
this.a=f},
avA:function avA(d,e){this.c=d
this.a=e},
bwW:function bwW(){},
bwX:function bwX(){},
xk:function xk(d,e){this.c=d
this.a=e},
ajw:function ajw(d,e){this.e=d
this.a=e},
b7w:function b7w(){},
b7v:function b7v(){},
b7u:function b7u(d,e,f){this.a=d
this.b=e
this.c=f},
b7o:function b7o(d,e){this.a=d
this.b=e},
b7p:function b7p(d,e){this.a=d
this.b=e},
b7x:function b7x(d){this.a=d},
b7y:function b7y(d){this.a=d},
b7q:function b7q(){},
b7r:function b7r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7s:function b7s(d,e){this.a=d
this.b=e},
b7t:function b7t(d,e,f){this.a=d
this.b=e
this.c=f},
bA3:function bA3(d,e,f){this.a=d
this.b=e
this.c=f},
bA2:function bA2(d){this.a=d},
BT:function BT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
V7:function V7(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b7i:function b7i(){},
b7j:function b7j(d){this.a=d},
b7k:function b7k(d){this.a=d},
b7m:function b7m(d,e){this.a=d
this.b=e},
b7l:function b7l(d,e){this.a=d
this.b=e},
b7n:function b7n(d){this.a=d},
bp:function bp(){},
bLy(d){return new A.Mf(d,C.au,C.c2,null,null)},
Mf:function Mf(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V8:function V8(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eb$=f
_.c7$=g
_.c=_.a=null},
b7z:function b7z(d,e){this.a=d
this.b=e},
b7A:function b7A(d){this.a=d},
aAS(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.apu:f,p=a0==null?16:a0,o=d==null?D.a0H:d,n=g==null,m=n?A.bEo(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yx:a3
n=n?A.bEo(r,r,r,r,r,r,r,r):g
w=j==null?D.EJ:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.N:e
return new A.oe(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cy,s,w,i,n)},
aAZ(d,e,f,g,h){var w=d==null?D.apv:d,v=e==null?2:e,u=g==null?C.lP:g
return new A.fY(h,f===!0,w,v,u)},
bZd(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.aAZ(A.kP(d.c,e.c,f,A.ccp(),x.fj),B.an(d.d,e.d,f),!1,A.kP(d.e,e.e,f,A.a1B(),x.S),w)},
a34(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TV
else w=h
v=m==null
u=v?8:m
t=$.lQ()
s=t.aZN(f,v?8:m)
t=t.aZO(g,v?8:m)
v=d==null?A.bLw(r,r,r,r,r):d
return new A.iy(q,l,w,j,u,s,e,t,v,k==null?D.apw:k)},
bZe(d,e,f){var w,v,u,t,s=B.a4(d.c,e.c,f),r=B.an(d.e,e.e,f),q=B.n_(d.f,e.f,f),p=A.kP(d.r,e.r,f,A.a1B(),x.S),o=B.c1(d.w,e.w,f),n=B.an(d.a,e.a,f),m=B.an(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.an(w.b,v.b,f)
t=B.an(w.c,v.c,f)
v=B.a4(w.d,v.d,f)
return A.a34(A.bLw(v,u,null,!1,t),p,q,o,s,n,null,A.kP(d.y,e.y,f,A.ccq(),x.G),m,r)},
bZf(d,e,f){var w,v,u=B.an(d.a,e.a,f)
u.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a4(d.c,e.c,f)
v.toString
return new A.mY(u,w,v,B.c1(d.d,e.d,f))},
bLw(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dA
else w=d
return new A.a30(g===!0,v,u,w,f)},
bEo(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a36(4,C.eR,16,D.ye,0,120,A.ccs(),!1,!1,D.a_v,0,C.L,A.ccr())
else w=k
v=j==null?C.lj:j
return new A.a35(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
cdf(d,e,f,g){var w=null,v=B.jb(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.C,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DT(C.d.j(f.b),v)},
cde(d){return A.aCZ(D.dA,15)},
oe:function oe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aAR:function aAR(d,e){this.a=d
this.b=e},
fY:function fY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aB_:function aB_(){},
aB0:function aB0(){},
iy:function iy(d,e,f,g,h,i,j,k,l,m){var _=this
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
mY:function mY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a30:function a30(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a35:function a35(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ag0:function ag0(d,e){this.a=d
this.b=e},
a36:function a36(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
DT:function DT(d,e){this.a=d
this.b=e},
Mg:function Mg(d){this.a=d},
a37:function a37(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
yf:function yf(d,e){this.a=d
this.b=e},
ajs:function ajs(){},
ajz:function ajz(){},
ajA:function ajA(){},
ajC:function ajC(){},
ajD:function ajD(){},
ajE:function ajE(){},
ajF:function ajF(){},
ajG:function ajG(){},
ajH:function ajH(){},
aB1:function aB1(d){this.a=d},
aB2:function aB2(){},
v7:function v7(d,e,f){this.a=d
this.b=e
this.c=f},
ajB:function ajB(){},
aB3:function aB3(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aB4:function aB4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB5:function aB5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a83:function a83(d){this.b=d},
a33:function a33(d,e,f){this.d=d
this.e=e
this.a=f},
ad7:function ad7(d,e,f,g,h,i,j,k){var _=this
_.aG=d
_.i9=e
_.d3=f
_.h1=g
_.A=h
_.a5=_.W=_.V=null
_.a_=i
_.bF=_.aK=_.an=_.av=$
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
cdg(d,e){var w=null
return new A.T2(e.w,B.d(e.r,w,w,w,w,w,w,w,w),w)},
aAK(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.an(w.c,v.c,f)
u.toString
return new A.pz(t,e.b,new A.qx(v.a,v.b,u,B.an(w.d,v.d,f)),!0)},
bMV(d,e,f){var w=A.aAK(d.b,e.b,f),v=A.aAK(d.d,e.d,f),u=A.aAK(d.e,e.e,f)
return new A.vy(e.a,w,A.aAK(d.c,e.c,f),v,u)},
c10(d,e,f){var w,v
if(d.k(0,D.h_))return e
if(e.k(0,D.h_))return d
w=B.an(d.a,e.a,f)
w.toString
v=B.an(d.b,e.b,f)
v.toString
return new A.eI(w,v)},
bMT(d,e,f){return new A.z8(e.a,!0,B.an(d.c,e.c,f),e.d,e.e,e.f,B.an(d.r,e.r,f),e.w,e.x)},
cfG(d){return!0},
cdj(d){return D.aaN},
bMU(d,e,f,g){var w
if(d==null)w=f==null?C.J:null
else w=d
return new A.pX(w,f,g,e)},
bOT(d,e,f){var w,v=A.kP(d.a,e.a,f,A.ccl(),x.dv)
v.toString
w=A.kP(d.b,e.b,f,A.ccn(),x.bN)
w.toString
return new A.RA(v,w)},
c1N(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a4(d.c,e.c,f)
u=B.rK(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nj(t,w,v,u)},
c74(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a4(d.c,e.c,f)
u=B.rK(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nI(t,w,v,u)},
c1M(d,e,f){var w,v,u,t,s,r=B.an(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.or(w.b,v.b,f)
u.toString
t=B.cD(w.c,v.c,f)
t=A.c1K(B.bEg(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a4(d.a,e.a,f)
v=B.rK(d.b,e.b,f)
w=B.an(d.c,e.c,f)
w.toString
s=A.kP(d.d,e.d,f,A.a1B(),x.S)
if(u==null)u=v==null?C.J:null
return new A.l6(r,e.f,e.r,t,e.x,u,v,w,s)},
c73(d,e,f){var w,v,u,t,s,r=B.an(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.or(w.b,v.b,f)
u.toString
t=B.cD(w.c,v.c,f)
t=A.c71(B.bEg(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a4(d.a,e.a,f)
v=B.rK(d.b,e.b,f)
w=B.an(d.c,e.c,f)
w.toString
s=A.kP(d.d,e.d,f,A.a1B(),x.S)
if(u==null)u=v==null?C.J:null
return new A.ly(r,e.f,e.r,t,e.x,u,v,w,s)},
c1K(d,e,f,g,h,i){return new A.a8e(f,!1,g,i,d,e)},
c1L(d){return C.d.aa(d.e,1)},
c71(d,e,f,g,h,i){return new A.agq(f,!1,g,i,d,e)},
c72(d){return C.d.aa(d.e,1)},
bMP(d,e,f){var w,v=A.kP(d.a,e.a,f,A.cck(),x.cm)
v.toString
w=A.kP(d.b,e.b,f,A.ccm(),x.es)
w.toString
return new A.Oa(v,w,!0)},
c1_(d,e,f){return new A.Oj(d,e==null?4:e,f)},
a2U:function a2U(){},
DS:function DS(d,e){this.a=d
this.b=e},
u_:function u_(d,e){this.r=d
this.w=e},
qx:function qx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aez:function aez(){},
pz:function pz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vy:function vy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eI:function eI(d,e){this.a=d
this.b=e},
z8:function z8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pX:function pX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag2:function ag2(){},
RA:function RA(d,e){this.a=d
this.b=e},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nI:function nI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
l6:function l6(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ly:function ly(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a8e:function a8e(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
agq:function agq(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Oa:function Oa(d,e,f){this.a=d
this.b=e
this.c=f},
vx:function vx(){},
Oj:function Oj(d,e,f){this.a=d
this.b=e
this.c=f},
ajn:function ajn(){},
ajr:function ajr(){},
amL:function amL(){},
anc:function anc(){},
and:function and(){},
anf:function anf(){},
ang:function ang(){},
ao7:function ao7(){},
ao6:function ao6(){},
ao8:function ao8(){},
arV:function arV(){},
atU:function atU(){},
atV:function atV(){},
avE:function avE(){},
awo:function awo(){},
awn:function awn(){},
awp:function awp(){},
aAG:function aAG(){},
Ma:function Ma(){},
Mb:function Mb(d,e,f){this.c=d
this.d=e
this.a=f},
aAI:function aAI(d){this.a=d},
aAH:function aAH(d){this.a=d},
T2:function T2(d,e,f){this.c=d
this.e=e
this.a=f},
a_1:function a_1(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c5A(d,e,f){var w=B.al(f),v=w.i("ag<1,k4>")
v=B.S(new B.ag(f,new A.b1E(),v),v.i("ax.E"))
w=w.i("ag<1,c>")
w=B.S(new B.ag(f,new A.b1F(),w),w.i("ax.E"))
return new A.aeA(e,d,v,w,null)},
bZb(d,e,f){var w,v=null,u=B.aO(x.dO),t=J.a8R(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tX(v,C.W,C.z,new B.kH(1),v,v,v,v,C.bt,v)
u=new A.a2V(f,d,e,u,t,!0,0,v,v,new B.bw(),B.aO(x.j))
u.bj()
return u},
aeA:function aeA(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b1E:function b1E(){},
b1F:function b1F(){},
a2V:function a2V(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.V=e
_.W=f
_.a5=g
_.Xu$=h
_.aVF$=i
_.ds$=j
_.a9$=k
_.dK$=l
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
bkX:function bkX(d,e){this.a=d
this.b=e},
aAJ:function aAJ(){},
k4:function k4(d,e){this.a=d
this.b=e},
od:function od(d,e){this.a=d
this.b=e},
ajo:function ajo(){},
ajp:function ajp(){},
ajq:function ajq(){},
V5:function V5(){},
Bf:function Bf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1G:function b1G(d){this.a=d},
b1H:function b1H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1I:function b1I(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a7m(d,e){var w=d==null?B.c5(C.J,1):d
return new A.a7l(e!==!1,w)},
a39:function a39(){},
a7l:function a7l(d,e){this.a=d
this.b=e},
Oq:function Oq(){},
a7n:function a7n(){},
aBe:function aBe(){},
aHG:function aHG(d,e){this.a=d
this.b=e},
ajK:function ajK(){},
an9:function an9(){},
ana:function ana(){},
anh:function anh(){},
Mj:function Mj(){},
wj:function wj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hE:function hE(){},
a7r:function a7r(d){this.a=d},
a7s:function a7s(d){this.a=d},
a7t:function a7t(d){this.a=d},
Ol:function Ol(){},
Om:function Om(){},
a7w:function a7w(d){this.a=d},
Oo:function Oo(){},
Op:function Op(d){this.a=d},
a7q:function a7q(d){this.a=d},
a7p:function a7p(d){this.a=d},
Ok:function Ok(d){this.a=d},
a7u:function a7u(d){this.a=d},
a7v:function a7v(d){this.a=d},
On:function On(d){this.a=d},
He:function He(){},
aXL:function aXL(d){this.a=d},
aXM:function aXM(d){this.a=d},
aXN:function aXN(d){this.a=d},
aXO:function aXO(d){this.a=d},
aXP:function aXP(d){this.a=d},
aXQ:function aXQ(d){this.a=d},
aXR:function aXR(d){this.a=d},
aXS:function aXS(d){this.a=d},
aXT:function aXT(d){this.a=d},
aXU:function aXU(d){this.a=d},
aXV:function aXV(d){this.a=d},
aXW:function aXW(d){this.a=d},
aXX:function aXX(d){this.a=d},
PK:function PK(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
XK:function XK(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eb$=g
_.c7$=h
_.c=_.a=null},
bl2:function bl2(d,e){this.a=d
this.b=e},
bl0:function bl0(d){this.a=d},
bl1:function bl1(d,e){this.a=d
this.b=e},
bl_:function bl_(){},
bl3:function bl3(d){this.a=d},
bFG(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.N:d
return new A.qa(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aNL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TV:u
else w=g
v=f==null?A.aAQ(!1,u,0,u,!1,D.wx):f
w=new A.ei(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aAQ(!1,u,0,u,!1,D.wx):d,j,a0,i,s,!1,p)
w.asR(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c2e(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.an(d.x,e.x,f)
m.toString
w=A.bLx(d.ay,e.ay,f)
v=A.bLx(d.ch,e.ch,f)
u=B.an(d.as,e.as,f)
u.toString
t=e.CW
s=A.kP(d.cy,e.cy,f,A.a1B(),x.S)
r=B.a4(d.r,e.r,f)
q=B.rK(d.w,e.w,f)
p=A.kP(d.a,e.a,f,A.ccj(),x.cw)
p.toString
o=B.bPq(d.db,e.db,f)
o.toString
n=B.an(d.dy.a,e.dy.a,f)
n.toString
return A.aNL(v,m,w,r,e.z,s,new A.z7(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.PL(n),!1,u,o,!0,e.cx,p)},
aAQ(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aJ(C.d.aN(127.5),D.dA.v()>>>16&255,D.dA.v()>>>8&255,D.dA.v()&255):null
else w=e
return new A.a32(h,w,g,i,f,!1)},
bLx(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a4(v.a,u.a,f),s=B.rK(v.b,u.b,f),r=B.an(v.c,u.c,f)
r.toString
r=A.bMU(t,A.kP(v.d,u.d,f,A.a1B(),x.S),s,r)
s=B.a4(d.b,e.b,f)
u=B.rK(d.c,e.c,f)
v=B.an(d.e,e.e,f)
v.toString
return A.aAQ(!1,s,v,u,e.a,new A.Me(!1,r,w.c,!0))},
bZg(d,e,f){var w=B.a4(d.c,e.c,f),v=B.rK(d.d,e.d,f)
if(w==null)w=v==null?B.aJ(C.d.aN(127.5),D.dA.v()>>>16&255,D.dA.v()>>>8&255,D.dA.v()&255):null
return new A.mZ(e.a,e.b,w,v)},
cfH(d){return!0},
bHL(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jE)return A.bIC(w.a,A.bFk(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dA:w},
ca_(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jE)w=A.bIC(v.a,A.bFk(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dA}return A.aCZ(w,40)},
bS0(d,e,f,g,h){var w,v=A.bHL(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jE)w=A.bIC(u.a,A.bFk(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dA}u=A.aCZ(w,40)
return new A.Oj(v,h==null?4:h,u)},
cfF(d,e){return!0},
cc5(d,e){return Math.abs(d.a-e.a)},
cdm(d,e){var w=J.cV(e,new A.bAP(d),x.bY)
w=B.S(w,w.$ti.i("ax.E"))
return w},
cdi(d,e){return-1/0},
cdh(d,e){return d.a[e].b},
bTh(d){var w=J.cV(d,new A.bAM(),x.fT)
w=B.S(w,w.$ti.i("ax.E"))
return w},
bTg(d){return A.aCZ(D.dA,15)},
qa:function qa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ei:function ei(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aNM:function aNM(){},
PL:function PL(d){this.a=d},
a32:function a32(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mZ:function mZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Me:function Me(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z7:function z7(d,e,f){this.a=d
this.b=e
this.c=f},
aNB:function aNB(d,e){this.a=d
this.b=e},
a7o:function a7o(){},
FM:function FM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bAP:function bAP(d){this.a=d},
bAO:function bAO(d){this.a=d},
a9d:function a9d(){},
bAM:function bAM(){},
nm:function nm(){},
qF:function qF(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rZ:function rZ(d,e){this.a=d
this.b=e},
u1:function u1(d,e){this.a=d
this.b=e},
HG:function HG(d){this.a=d},
PM:function PM(d){this.a=d},
zX:function zX(d,e){this.a=d
this.b=e},
ajx:function ajx(){},
ajy:function ajy(){},
ajM:function ajM(){},
anb:function anb(){},
ane:function ane(){},
ap4:function ap4(){},
ap5:function ap5(){},
ap6:function ap6(){},
ap8:function ap8(){},
ap9:function ap9(){},
apa:function apa(){},
apb:function apb(){},
atT:function atT(){},
avD:function avD(){},
aNN:function aNN(d){this.a=d},
aNO:function aNO(){},
aNP:function aNP(){},
zY:function zY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ap7:function ap7(){},
aNQ:function aNQ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aNT:function aNT(){},
aNR:function aNR(d,e,f){this.a=d
this.b=e
this.c=f},
aNS:function aNS(d,e,f){this.a=d
this.b=e
this.c=f},
aNU:function aNU(){},
w1:function w1(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a9c:function a9c(d,e,f){this.d=d
this.e=e
this.a=f},
adk:function adk(d,e,f,g,h,i,j,k){var _=this
_.aG=d
_.i9=e
_.d3=f
_.h1=g
_.A=h
_.a5=_.W=_.V=null
_.a_=i
_.bF=_.aK=_.an=_.av=$
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
bEn(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bJ(o.length,0,!1,x.i),m=B.al(o),l=new B.ag(o,new A.aAT(),m.i("ag<1,G>")).jN(0,new A.aAU()),k=e-l,j=new A.aAX(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdv(0)/2
s=u===o.length-1?0:w
v+=t.gdv(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdv(0)/2
s=u===o.length-1?0:w
v+=t.gdv(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdv(0)/2
s=u===o.length-1?0:w
v+=t.gdv(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.j3(o,m.i("j3<1>")).aF(0,new A.aAV(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j3(o,m.i("j3<1>")).aF(0,new A.aAW(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aAT:function aAT(){},
aAU:function aAU(){},
aAX:function aAX(d,e,f){this.a=d
this.b=e
this.c=f},
aAY:function aAY(d,e,f){this.a=d
this.b=e
this.c=f},
aAV:function aAV(d,e,f){this.a=d
this.b=e
this.c=f},
aAW:function aAW(d,e,f){this.a=d
this.b=e
this.c=f},
bFk(d){var w,v={}
v.a=B.a([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j3(w,B.al(w).i("j3<1>")).aF(0,new A.aKY(v,d))
else throw B.h(B.bQ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aKY:function aKY(d,e){this.a=d
this.b=e},
aEb(d,e){var w,v
if(e!=null){w=B.al(e).i("ag<1,G>")
v=B.S(new B.ag(e,new A.aEc(),w),w.i("ax.E"))
return A.cd9(d,new A.a3L(v,x.cX))}else return d},
aEc:function aEc(){},
c6b(d,e){var w=!0
if(d!==C.fg)if(!(d===C.W&&e===C.z))w=d===C.iN&&e===C.b7
if(w)return D.EW
else{w=!0
if(d!==C.hK)if(!(d===C.iN&&e===C.z))w=d===C.W&&e===C.b7
if(w)return D.EX
else return D.abz}},
OP:function OP(d,e){this.a=d
this.b=e},
a3B:function a3B(d,e){this.a=d
this.b=e},
A1:function A1(d,e){this.a=d
this.$ti=e},
api:function api(){},
cd9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.as(),i=x.v,h=B.a([],i),g=new B.cu(j.r,C.ao,k,k,h)
for(j=B.O4(d),w=B.a([],x.I),v=new B.O6(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.T(B.fP('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.O5(v,r)
v.DW()
p=w[r].b
p===$&&B.b()
p.a.length()
o=0
n=!0
for(;;){v.DW()
p=w[r].b
p===$&&B.b()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ev(B.a([],i),!0,s)
p=new B.Lv(new B.cu(t,p,k,new B.asl([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3L:function a3L(d,e){this.a=d
this.b=0
this.$ti=e},
b59:function b59(){},
bF8(d){var w,v,u,t=x.U,s=B.a([B.a([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.h_))C.b.gai(s).push(u)
else if(C.b.gai(s).length!==0)s.push(B.a([],t))}if(C.b.gai(s).length===0)s.pop()
return s},
bZj(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aCZ(d,e){var w=1-e/100
return B.aJ(d.gfK(d),C.d.aN(d.gOO()*w),C.d.aN(d.gGT()*w),C.d.aN(d.gLd()*w))},
bMS(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.af(v,u,t,w?d.b.c.b:0)},
bF9(d){var w=d.a,v=w?A.b1D(d.b):0,u=w?A.b1D(d.c):0,t=w?A.b1D(d.d):0
return new B.af(v,u,t,w?A.b1D(d.e):0)},
c3t(d){var w
if(d.c===0){d.seZ(null)
w=B.c8(d.r)
d.r=B.aJ(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gu(0)}},
bG2(d,e,f,g){var w
if(f!=null){d.r=C.J.gu(0)
d.seZ(f.mU(0,g))}else{w=e==null?C.N:e
d.r=w.gu(w)
d.seZ(null)}},
b1D(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kP(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kj(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kj(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
cet(d,e,f){return C.d.aN(d+(e-d)*f)},
bIC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kj(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a4(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gai(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a9_.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aP:C.q
r=r?C.n:C.a8
w=x.p
v=B.a([],w)
C.b.H(v,B.a([B.bI(t.x,C.n,s,18),C.aS],w))
v.push(B.aj(new B.dF(t.c,!1,s),1))
v=B.a8(v,C.x,s,C.e,C.i,0,s,s)
u=t.w
w=B.a([v,C.D,B.d(t.d,s,1,C.ai,s,B.bE(u==null?C.h:u,22,C.C),s,s,s)],w)
return B.aZ(r,B.a1(w,C.x,C.iw,C.i),q,s,C.aq,s,s,3)}}
A.vw.prototype={
Mz(d){return this.aVE(d)},
aVE(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$Mz=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dB("finance_summary",B.a3(["p_from",E.ox(d.a),"p_to",E.ox(d.b)],s,r),r),$async$Mz)
case 3:q=f
if(q==null){u=D.atN
w=1
break}if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.aw1
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mz,v)},
My(d){return this.aVD(d)},
aVD(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$My=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dB("finance_kpis",B.a3(["p_from",E.ox(d.a),"p_to",E.ox(d.b)],s,r),r),$async$My)
case 3:q=f
if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.att
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$My,v)},
Mx(d){return this.aVC(d)},
aVC(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$Mx=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dB("finance_bookings_list",B.a3(["p_from",E.ox(d.a),"p_to",E.ox(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$Mx)
case 3:q=f
if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.atS
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mx,v)},
pN(d){return this.asz(d)},
asz(d){var w=0,v=B.p(x.S),u,t=this,s,r,q
var $async$pN=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.b()
s=x.N
w=3
return B.j(q.fO("sevdesk-sync",B.a3(["from",E.ox(d.a),"to",E.ox(d.b)],s,s)),$async$pN)
case 3:r=f.a
if(x.f.b(r)&&typeof J.I(r,"upserted")=="number"){u=C.d.X(B.fC(J.I(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$pN,v)},
Mt(d){return this.aVt(d)},
aVt(d){var w=0,v=B.p(x.N),u,t=this,s,r,q
var $async$Mt=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.b()
s=x.N
w=3
return B.j(q.fO("finance-export-pdf",B.a3(["from",E.ox(d.a),"to",E.ox(d.b)],s,s)),$async$Mt)
case 3:r=f.a
if(x.f.b(r)&&typeof J.I(r,"base64")=="string"){u=B.aL(J.I(r,"base64"))
w=1
break}throw B.h(B.e6("PDF-Export fehlgeschlagen"))
case 1:return B.n(u,v)}})
return B.o($async$Mt,v)}}
A.Fa.prototype={
GN(d){return this.alC(d)},
alC(d){var w=0,v=B.p(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GN=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mz(d),$async$GN)
case 7:q=f
o=A.aIM(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BX(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$GN,v)},
GI(d){return this.alm(d)},
alm(d){var w=0,v=B.p(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GI=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.My(d),$async$GI)
case 7:q=f
o=A.c0Y(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BX(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$GI,v)},
Gy(d){return this.al7(d)},
al7(d){var w=0,v=B.p(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gy=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mx(d),$async$Gy)
case 7:q=f
o=A.c0X(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BX(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$Gy,v)},
pN(d){return this.asA(d)},
asA(d){var w=0,v=B.p(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pN=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.pN(d),$async$pN)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a0(n)
p=r.BX(q)
throw B.h(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$pN,v)},
Ms(d){return this.aVs(d)},
aVs(d){var w=0,v=B.p(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ms=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mt(d),$async$Ms)
case 7:q=f
o=C.j6.cL(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BX(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$Ms,v)},
BX(d){var w,v
if(d instanceof B.vu)return d
if(d instanceof B.mp){if(d.b==="42501")return new B.wn(d.a)
return new B.tE(d.a)}if(d instanceof B.OD){w=A.cdR(d.b)
v=""+d.a
return new B.tE(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.BI("Unerwarteter Fehler: "+B.e(d))},
$iaIw:1}
A.pW.prototype={
gane(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbu(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.ov.prototype={
gbu(){return[this.a,this.b]}}
A.qH.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.w5.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.x2.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDA.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aEL.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ow.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.DA.prototype={
gbu(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oy.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.z3.prototype={
HH(d){return this.asy(0)},
asy(d){var w=0,v=B.p(x.h6),u,t=this,s,r,q,p
var $async$HH=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:p={}
t.seh(0,C.dH)
s=t.r
r=s.az(0,$.r8(),x.P)
p.a=null
w=3
return B.j(B.py(new A.aIq(p,t,r),x.H),$async$HH)
case 3:t.seh(0,f)
q=t.f
if(q.ghg(q)==null){q=$.bDX()
s=s.e
s===$&&B.b()
s.c2(q)
s.c2($.bKo())
s.c2($.bDW())}u=p.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$HH,v)},
Mr(){return this.aVr()},
aVr(){var w=0,v=B.p(x.aD),u,t=this,s,r,q
var $async$Mr=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:q={}
t.seh(0,C.dH)
s=t.r.az(0,$.r8(),x.P)
q.a=null
w=3
return B.j(B.py(new A.aIp(q,t,s),x.H),$async$Mr)
case 3:t.seh(0,e)
r=t.f
u=r.ghg(r)!=null?null:q.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mr,v)}}
A.vv.prototype={
U(){return new A.an4(D.Bw)}}
A.xm.prototype={
L(){return"_Filter."+this.b}}
A.an4.prototype={
gTi(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbp(),t=u.al($.r8(),x.P),s=u.al($.bDW(),x.e)
u=$.cI()
return B.d9(D.abo,v,B.kq(B.cS(B.a([new B.eP("Zeitraum",u.a3(t.a)+" \u2013 "+u.a3(t.b),v,v),C.K,new A.an3(w.w,w.gTi(),new A.bgw(w),new A.bgx(w),v),C.as,B.dp(s,new A.bgy(w),new A.bgz(),new A.bgA(),!1,!0,!1,x.m,x.l)],x.p),v,C.cc,v,C.F,!1),C.n,new A.bgB(w)),v,v,v)},
atY(d){var w=B.al(d).i("b0<1>")
w=B.S(new B.b0(d,new A.bgt(this),w),w.i("u.E"))
return w}}
A.an3.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.a([new A.xg("Alle",t===D.Bw,new A.bgp(v),u),new A.xg("Ausgaben",t===D.a_V,new A.bgq(v),u),new A.xg("Erl\xf6se",t===D.a_W,new A.bgr(v),u),new A.xg("Privat",t===D.a_X,new A.bgs(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.xg("Konto "+w+" \xd7",!0,v.f,u))
return B.jk(C.c9,t,C.d3,6,8)}}
A.xg.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aP:C.a5,s=B.aq(9999),r=B.aq(9999),q=B.aq(9999),p=B.c5(v?C.n:C.a8,1)
return B.bq(w,!0,w,B.dv(!1,C.Z,!0,s,B.dP(!1,r,!0,B.aD(w,B.d(u,w,w,w,w,B.r(C.h,13,C.C),w,w,w),C.p,w,w,new B.aB(w,w,p,q,w,w,C.B),w,w,w,w,C.fZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.p,t,0,w,w,w,w,w,C.bd),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.JC.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aTT
w=this.d
if(w.length===0)return D.aTU
v=B.al(w).i("b0<1>")
u=new B.b0(w,new A.bld(),v).eV(0,0,new A.ble())
t=new B.b0(w,new A.blf(),v).eV(0,0,new A.blg())
s=new B.b0(w,new A.blh(),v).eV(0,0,new A.bli())
r=new B.b0(w,new A.blj(),v).gq(0)
v=w.length
q=$.cx()
p=q.a3(t)
o=E.bI5(u,E.bB7("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a3(s)
n=x.p
q=B.a([B.d(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.r(C.h,14,C.C),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.H(q,B.a([C.aH,B.d(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.r(C.l,12,C.j),l,l,l)],n))
if(r>0)C.b.H(q,B.a([C.aH,B.d(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.r(C.R,12,C.j),l,l,l)],n))
k=B.a([B.aZ(l,B.a1(q,C.x,C.e,C.i),C.a5,l,C.w,l,l,3),C.K],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.K)(w),++m)C.b.H(k,B.a([new A.ak3(w[m],l),C.D],n))
return B.a1(k,C.ac,C.e,C.i)}}
A.ak3.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.ah(n).length!==0)===!0){n.toString
n=C.c.ah(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.a8(B.a([B.aj(B.d(n,p,2,C.ai,p,B.r(C.h,14,C.C),p,p,p),1),C.ae,new E.DU(o.r,w,v,15,p)],u),C.x,p,C.e,C.i,0,p,p)
w=B.d($.cI().a3(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+E.bIT(w),p,1,C.ai,p,B.r(C.l,12,C.j),p,p,p)
v=C.d.aa(o.y,1)
t=$.cx()
s=t.a3(o.w)
t=t.a3(o.x)
r=o.gane()
q=o.Q
q=q==null?"":" #"+q
q=B.a([n,C.aH,w,C.aY,B.d("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ai,p,B.r(C.l,12,C.j),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.H(q,B.a([C.aH,B.a8(B.a([D.afa,C.c4,B.aj(B.d("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.r(C.R,11,C.j),p,p,p),1)],u),C.k,p,C.e,C.i,0,p,p)],u))
return B.aZ(p,B.a1(q,C.x,C.e,C.i),p,p,C.cM,p,p,3)}}
A.xp.prototype={
p(d){var w=null
return B.aZ(w,B.a8(B.a([B.bI(this.e,this.d,w,w),C.ae,B.aj(B.d(this.c,w,w,w,w,B.r(C.h,14,C.j),w,w,w),1)],x.p),C.x,w,C.e,C.i,0,w,w),C.a5,w,C.w,w,w,3)}}
A.z4.prototype={
d9(d,e){var w=null,v=e.al($.r8(),x.P),u=e.al($.bDX(),x.aN)
return B.kq(B.cS(B.a([new B.eP("Finanzen","Dashboard",new A.aiB(e.al($.bDU(),x.c).gjg(),new A.aIC(this,d,e),new A.aID(this,d,e),new A.aIE(d),new A.aIF(d),new A.aIG(d),new A.aIH(this,d,e,v),w),w),C.as,new A.aqK(v,w),C.c5,D.aiY,C.c5,B.dp(u,new A.aII(),new A.aIJ(),new A.aIK(),!1,!0,!1,x.d,x.l)],x.p),w,C.cc,w,C.F,!1),C.n,new A.aIL(e))},
Ki(d,e){return this.aO_(d,e)},
aO_(d,e){var w=0,v=B.p(x.H),u,t,s,r,q,p,o,n,m
var $async$Ki=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:n=$.bDU()
w=3
return B.j(e.az(0,n.ghS(),x.F).HH(0),$async$Ki)
case 3:m=g
if(d.e==null){w=1
break}t=e.az(0,n,x.c)
s=t.ghg(t)==null
r=t.ghg(t)
if(r instanceof B.vu)q=r.a
else q=r==null?null:J.ak(r)
if(s)p="sevDesk synchronisiert: "+B.e(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.M(x.q).f
o=s?C.G:D.a8M
n.aE(B.bL(null,null,null,null,null,C.m,null,B.d(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.n(u,v)}})
return B.o($async$Ki,v)},
BY(d,e){return this.ayV(d,e)},
ayV(d,e){var w=0,v=B.p(x.H),u,t,s
var $async$BY=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.az(0,$.bDU().ghS(),x.F).Mr(),$async$BY)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.M(x.q).f.aE(D.aEo)
w=1
break}t=B.oX(C.v,10)
w=4
return B.j($.bVw().ui(s,"finanzauswertung.pdf",t,null,null,null),$async$BY)
case 4:case 1:return B.n(u,v)}})
return B.o($async$BY,v)},
BZ(d,e,f){return this.aLq(d,e,f)},
aLq(d,e,f){var w=0,v=B.p(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BZ=B.l(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.eq(null,null,!0,null,new A.aIz(f,d),d,null,!0,!0,x.cJ),$async$BZ)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mW(e.az(0,$.bx(),x.A))
p=f.a
o=f.b
n=$.cI()
m=n.a3(p)
n=n.a3(o)
w=8
return B.j(r.wo("finance_period",p,o,B.a3(["period_from",p.dS()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BZ)
case 8:if(d.e!=null)d.M(x.q).f.aE(F.mD)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a0(k)
if(d.e!=null)d.M(x.q).f.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Fehler: "+B.e(q),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$BZ,v)}}
A.aiB.prototype={
p(d){var w=this,v=null,u=A.Xp(C.n,F.h2,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Xp(v,D.adH,v,w.r,"Gesellschafter-Freigaben"),s=A.Xp(v,D.abR,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Xp(v,D.yw,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Xp(C.R,C.fB,C.R,r?v:w.e,"PDF-Export")
return B.a8(B.a([u,C.aS,t,C.aS,s,C.aS,q,C.aS,p,C.aS,A.Xp(C.aj,C.fD,C.aj,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.e,C.I,0,v,v)}}
A.aoh.prototype={
p(d){var w,v=this,u=null,t=B.aq(12),s=B.aq(12),r=B.aq(12),q=v.w
if(q==null)q=C.a8
q=B.c5(q,1)
w=v.r
if(w==null)w=C.h
return B.u0(B.dv(!1,C.Z,!0,t,B.dP(!1,s,!0,B.aD(u,B.bI(v.c,w,u,20),C.p,u,u,new B.aB(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a5,0,u,u,u,u,u,C.bd),u,v.d,u,u)}}
A.aqK.prototype={
d9(d,e){var w=null,v=this.e,u=$.cI(),t=x.p
return B.aZ(w,B.a1(B.a([D.aas,C.D,B.a8(B.a([D.aeK,C.ah,B.aj(B.d(u.a3(v.a)+" \u2013 "+u.a3(v.b),w,w,w,w,B.r(C.h,16,C.C),w,w,w),1)],t),C.k,w,C.e,C.i,0,w,w),C.t,B.jk(C.c9,B.a([new A.K8("Monat",new A.boE(e),w,w),new A.K8("Jahr (YTD)",new A.boF(e),w,w),new A.K8("Zeitraum w\xe4hlen \u2026",new A.boG(this,d,e),F.Fc,w)],t),C.d3,6,8)],t),C.x,C.e,C.i),w,w,C.w,w,w,3)},
JC(d,e){return this.aKj(d,e)},
aKj(d,e){var w=0,v=B.p(x.H),u=this,t,s,r
var $async$JC=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:t=new B.aT(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.ayB(new A.boD(),d,B.bs(B.aS(t)-5,1,1,0,0,0,0),new B.m_(s.a,s.b,x.bz),B.bs(B.aS(t)+1,1,1,0,0,0,0),C.ef),$async$JC)
case 2:r=g
if(r!=null)e.az(0,$.r8().ghS(),x.V).uA(0,new E.m4(r.a,r.b))
return B.n(null,v)}})
return B.o($async$JC,v)}}
A.K8.prototype={
p(d){var w=null,v=B.aq(9999),u=B.aq(9999),t=B.aq(9999),s=B.c5(C.a8,1),r=x.p,q=B.a([],r),p=this.e
if(p!=null)C.b.H(q,B.a([B.bI(p,C.h,w,14),C.aS],r))
q.push(B.d(this.c,w,w,w,w,B.r(C.h,13,C.C),w,w,w))
return B.dv(!1,C.Z,!0,v,B.dP(!1,u,!0,B.aD(w,B.a8(q,C.k,w,C.e,C.I,0,w,w),C.p,w,w,new B.aB(w,w,s,t,w,w,C.B),w,w,w,w,C.fZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a5,0,w,w,w,w,w,C.bd)}}
A.KA.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.a([B.jD(new A.bvB(this)),C.c5,D.aay,C.t],q),o=this.c.w
if(o.length===0)p.push(B.aZ(r,B.a8(B.a([D.afh,C.ae,B.aj(B.d("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.r(C.l,14,C.j),r,r,r),1)],q),C.k,r,C.e,C.i,0,r,r),C.a5,r,C.w,r,r,3))
else{w=B.a([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.K)(o),++u){t=o[u]
s=t.c
C.b.H(w,B.a([new A.aiz(t.a,t.b,s,E.bIT(s),t.d,new A.bvC(d,t),r),C.D],q))}p.push(B.a1(w,C.k,C.e,C.i))}return B.a1(p,C.ac,C.e,C.i)}}
A.aiz.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aP:C.a5,q=B.c5(s?C.n:C.a8,1),p=B.aq(4),o=v.c,n=x.p
t=B.a([B.aD(C.X,B.d(C.c.a1(o,0,1),u,u,u,u,B.bE(C.h,14,C.r),u,u,u),C.p,u,u,new B.aB(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.ae,B.aj(B.a1(B.a([B.d(o+" \xb7 "+v.d,u,1,C.ai,u,B.r(C.h,14,C.C),u,u,u),B.d(v.f,u,u,u,u,B.r(C.l,12,C.j),u,u,u)],n),C.x,C.e,C.i),1),new E.DU(v.r,t,o,15,u)],n)
C.b.H(t,B.a([C.c4,C.FN],n))
w=B.aZ(u,B.a8(t,C.k,u,C.e,C.i,0,u,u),u,u,C.cM,u,u,3)
return B.bq(u,!0,u,B.dP(!1,B.aq(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.Ja.prototype={
p(d){var w=null
return B.aZ(C.R,B.a8(B.a([D.ag0,C.ae,B.aj(B.d(this.c,w,w,w,w,B.r(C.h,14,C.j),w,w,w),1)],x.p),C.k,w,C.e,C.i,0,w,w),C.fq,w,C.w,w,w,3)}}
A.a90.prototype={
d9(d,e){return B.dp(e.al($.bKo(),x.cn),new A.aNy(),new A.aNz(),new A.aNA(),!1,!0,!1,x.X,x.l)}}
A.Jw.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.a([D.aBF,C.t,B.jD(new A.bkO(v,q,100-t.w.a,w,p)),C.t,new A.any(u),C.as,D.aBE,C.t,new A.ajw(t,u),C.as,D.aBz,C.t,B.bq(u,!0,u,B.kg(u,B.aZ(u,new A.Vx(t,220,u),u,u,C.w,u,u,3),C.P,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bkP(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.as,D.aBo,C.t,B.bq(u,!0,u,B.kg(u,new A.VO(t,200,!1,u),C.P,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bkQ(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.as,D.aBv,C.t,new A.aps(t,u),C.as,D.aBq,C.t,new A.alp(t,u)],s)
if(t.f.length!==0)C.b.H(r,B.a([C.as,D.aBB,C.t,new A.avA(t,u)],s))
return B.a1(r,C.ac,C.e,C.i)}}
A.any.prototype={
p(d){var w=null
return B.d("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.r(C.l,11,C.j).cH(1.35),w,w,w)}}
A.aoV.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cK(m.d,"-")?C.R:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bkR(m,d):l
r=x.p
q=B.a([B.aj(B.d(m.c.toUpperCase(),l,l,l,l,B.r(C.l,10,C.r).fo(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.c5(C.R,0.8)
n=B.aq(4)
q.push(B.aD(l,B.d("Ziel "+p,l,l,l,l,B.r(C.R,9,C.r),l,l,l),C.p,l,l,new B.aB(l,l,o,n,l,l,C.B),l,l,l,l,C.nW,l,l,l))}q=B.a([B.a8(q,C.k,l,C.e,C.i,0,l,l),C.aH,B.Oh(C.d6,B.d(m.d,l,l,l,l,B.bE(w,22,C.r),l,l,l),C.hW)],r)
p=m.e
if(p!=null)q.push(B.d(p,l,2,C.ai,l,B.r(C.l,10,C.aD),l,l,l))
q.push(C.d2)
q.push(B.a8(B.a([new A.Wp("Vormonat",m.r,l),C.c4,new A.Wp("Vorjahr",m.f,l)],r),C.k,l,C.e,C.i,0,l,l))
q.push(C.d2)
q.push(B.aj(new A.a_d(v,m.y,m.z,l),1))
return B.bq(l,u,l,B.kg(l,B.aZ(l,B.a1(q,C.x,C.e,C.i),l,l,C.bw,l,l,3),C.P,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.Wp.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aq(4)
return B.aD(r,B.d(this.c+" \u2014",r,r,r,r,B.r(C.l,9,C.r),r,r,r),C.p,r,r,new B.aB(C.a8,r,r,q,r,r,C.B),r,r,r,r,C.nW,r,r,r)}w=q>=0
v=w?C.aj:C.R
u=v.dm(0.12)
t=B.c5(v,0.7)
s=B.aq(4)
return B.aD(r,B.a8(B.a([B.bI(w?F.abE:D.abD,v,r,10),C.ZJ,B.d(this.c+" "+C.d.aa(q,1)+" %",r,r,r,r,B.r(v,9,C.r),r,r,r)],x.p),C.k,r,C.e,C.I,0,r,r),C.p,r,r,new B.aB(u,r,t,s,r,r,C.B),r,r,r,r,C.nW,r,r,r)}}
A.a_d.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aw
w=B.a([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eI(v,j[v]))
u=C.b.jN(j,new A.bux())
t=C.b.jN(j,new A.buy())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.buz(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a7m(k,!1)
w=B.a([A.aNL(k,2,A.aAQ(!1,C.n.dm(0.16),0,k,!0,D.wx),C.n,0.35,k,D.EN,k,!0,!1,!0,!1,D.Gn,!1,10,D.Zb,!0,C.lP,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.PK(A.bFG(k,k,k,D.apx,l,D.Cy,D.EJ,D.EO,w,D.aja,k,m,k,n,D.Yx,D.apy,D.aaQ),C.au,C.a9,k,k)}}
A.Vx.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aSZ
w=C.b.eV(p,0,new A.b9C())
v=w>0?w*1.15:10
u=B.a([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aAZ(B.a([A.a34(q,q,D.BZ,q,C.n,q,q,q,r.b,6),A.a34(q,q,D.BZ,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bP(A.bLy(A.aAS(q,q,u,q,q,A.a7m(q,!1),q,new A.z8(!0,!0,q,new A.b9D(),A.a1u(),!1,q,A.ayl(),A.a1u()),q,v,q,q,new A.vy(!0,new A.pz(16,q,new A.qx(!0,new A.b9E(this),46,q),!0),D.kN,D.kN,new A.pz(16,q,new A.qx(!0,new A.b9F(p),26,q),!0)))),this.d,q)},
aN9(d){if(Math.abs(d)>=1000)return C.d.aa(d/1000,1)+" k"
return C.d.aa(d,0)}}
A.VO.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.a(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.a([n.c,m.c,o.c],w)
u=B.a([n.e,m.e,o.e],w)
w=x.gj
o=B.S(new B.ag(v,new A.baF(),w),x.i)
C.b.H(o,new B.ag(u,new A.baG(),w))
t=C.b.eV(o,0,new A.baH())
o=t>0?t*1.2:10
n=B.a([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aAZ(B.a([A.a34(q,q,q,q,C.n,q,q,q,v[s],14),A.a34(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bP(A.bLy(A.aAS(q,q,n,q,q,A.a7m(q,!1),q,D.EO,q,o,q,q,new A.vy(!0,D.kN,D.kN,D.kN,new A.pz(16,q,new A.qx(!0,new A.baI(p),26,q),!0)))),this.d,q)
return this.e?r:B.aZ(q,r,q,q,C.w,q,q,3)}}
A.aps.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aSY
w=new B.ag(l,new A.blx(),B.al(l).i("ag<1,G>")).jN(0,new A.bly())
v=x.p
u=B.a([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.d(r.b,m,m,m,m,B.r(C.h,14,C.r),m,m,m)
p=$.cx()
o=r.d
n=new B.b4(4,4)
o=B.a([new B.hP(C.al,C.e,C.i,C.k,m,C.aZ,m,0,B.a([new B.iA(1,C.cU,B.a1(B.a([q,B.d(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a3(r.f),m,m,m,m,B.r(C.l,12,C.aD),m,m,m)],v),C.x,C.e,C.i),m),C.ah,B.d(p.a3(o),m,m,m,m,B.bE(C.h,16,C.r),m,m,m)],v),m),C.d2,new B.Ei(new B.dc(n,n,n,n),C.bA,B.zZ(C.a8,m,8,C.d.bm(o/w,0,1),D.BO),m)],v)
q=C.b.gai(l)
if(r!==q)q=B.M(r)===B.M(q)&&B.a1z(r.gbu(),q.gbu())
else q=!0
if(!q)o.push(C.t)
C.b.H(u,o)}return B.aZ(m,B.a1(u,C.k,C.e,C.i),m,m,C.w,m,m,3)}}
A.alp.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aj(new A.D0("Aktive Kunden",""+s,u),1)
w=B.aj(new A.D0("K\xe4ufe",""+t.a,u),1)
v=$.cx()
return B.aZ(u,B.a8(B.a([s,w,B.aj(new A.D0("\xd8-Warenkorb",v.a3(t.d),u),1),B.aj(new A.D0("Umsatz/Kunde",v.a3(r),u),1)],x.p),C.k,u,C.e,C.i,0,u,u),u,u,C.w,u,u,3)}}
A.D0.prototype={
p(d){var w=null
return B.a1(B.a([B.d(this.c.toUpperCase(),w,w,w,w,B.r(C.l,10,C.r).fo(0.6),w,w,w),C.aY,B.d(this.d,w,w,w,w,B.bE(C.h,20,C.r),w,w,w)],x.p),C.x,C.e,C.I)}}
A.avA.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ag(q,new A.bwW(),B.al(q).i("ag<1,G>")).jN(0,new A.bwX()),o=x.p,n=B.a([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.b4(4,4)
t=B.a([new B.hP(C.al,C.e,C.i,C.k,r,C.aZ,r,0,B.a([new B.iA(1,C.cU,B.d(u.b,r,1,C.ai,r,B.r(C.h,13,C.r),r,r,r),r),B.d(""+u.c+"\xd7 ",r,r,r,r,B.r(C.l,12,C.C),r,r,r),B.d($.cx().a3(t),r,r,r,r,B.r(C.h,13,C.r),r,r,r)],o),r),C.aH,new B.Ei(new B.dc(s,s,s,s),C.bA,B.zZ(C.a8,r,6,C.d.bm(t/p,0,1),D.BO),r)],o)
s=C.b.gai(q)
if(u!==s)s=B.M(u)===B.M(s)&&B.a1z(u.gbu(),s.gbu())
else s=!0
if(!s)t.push(C.D)
C.b.H(n,t)}return B.aZ(r,B.a1(n,C.k,C.e,C.i),r,r,C.w,r,r,3)}}
A.xk.prototype={
p(d){var w=null
return B.aZ(w,B.d(this.c,w,w,w,w,B.r(C.l,13,C.j),w,w,w),C.a5,w,C.w,w,w,3)}}
A.ajw.prototype={
d9(d,e){return B.dp(e.al($.bDV(),x.fM),new A.b7u(this,d,e),new A.b7v(),new A.b7w(),!1,!0,!1,x.h,x.l)}}
A.BT.prototype={
U(){return new A.V7()},
b_q(){return this.d.$0()}}
A.V7.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aH()
q.d=new B.aT(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.I(w,"as_of"))!=null){w.toString
u=B.dh(J.ak(J.I(w,"as_of")))
q.d=u==null?q.d:u}u=B.B(x.N,x.bP)
for(t=0;t<8;++t){s=D.q9[t].a
if(v)r=""
else{r=B.aX(J.I(w,s))
if(r==null)r=null
r=C.d.aa(r==null?0:r,2)
r=B.ah(r,".",",")}u.m(0,s,new B.bc(new B.c6(r,C.aC,C.an),$.ad()))}q.e!==$&&B.aY()
q.e=u},
l(){var w,v=this.e
v===$&&B.b()
v=new B.ci(v,v.r,v.e,B.q(v).i("ci<2>"))
while(v.t()){w=v.d
w.S$=$.ad()
w.R$=0}this.am()},
rM(d){var w=this.e
w===$&&B.b()
w=C.c.ah(w.h(0,d).a.a)
w=B.ah(w,".","")
w=B.f1(B.ah(w,",","."))
return w==null?0:w},
a5k(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q9[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.b()
t=t.h(0,v)
t.toString
s=C.d.aa(u,2)
s=B.ah(s,".",",")
t.jZ(0,t.a.yu(C.an,C.aC,s))}}this.F(new A.b7i())},
aGT(){this.a5k(D.atP)
this.c.M(x.q).f.aE(D.aEU)},
IS(){var w=0,v=B.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$IS=B.l(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.be(a1)
for(e=0;e<8;++e)a2.E(0,D.q9[e].a)
q=a2
t=4
w=7
return B.j($.a7e.cl().wd(B.a(["csv","txt"],x.s),C.o5,!0),$async$IS)
case 7:p=a5
a2=p
o=a2==null?null:J.Lr(a2.a).c
if(o==null){w=1
break}n=C.aO.aeY(0,o,!0)
m=B.B(a1,x.i)
for(a1=C.CD.cL(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.K)(a1),++e){l=a1[e]
k=J.az8(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cj(k)<2)continue
j=C.c.ah(J.I(k,0)).toLowerCase()
i=J.Dv(q,j)?j:D.aw2.h(0,j)
if(i==null)continue
d=C.c.ah(C.b.md(J.bYJ(k,1)))
d=B.ah(d,"\u20ac","")
d=B.ah(d," ","")
d=B.ah(d,".","")
h=B.ah(d,",",".")
g=B.f1(h)
if(g!=null)J.fD(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.M(x.q).f.aE(D.aEl)
w=1
break}r.a5k(m)
r.c.M(x.q).f.aE(B.bL(null,null,null,null,null,C.m,null,B.d(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a0(a3)
a1=r.c
if(a1==null){w=1
break}a1.M(x.q).f.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Import fehlgeschlagen: "+B.e(f),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$IS,v)},
J2(){var w=0,v=B.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$J2=B.l(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.F(new A.b7j(q))
t=4
o=q.a.e
n=q.d
n===$&&B.b()
n=o.b1Y("upsert_finance_balance",B.a3(["p_as_of",C.c.a1(n.dS(),0,10),"p_cash_and_bank",q.rM("cash_and_bank"),"p_receivables",q.rM("receivables"),"p_inventory_value",q.rM("inventory_value"),"p_other_current_assets",q.rM("other_current_assets"),"p_fixed_assets",q.rM("fixed_assets"),"p_current_liabilities",q.rM("current_liabilities"),"p_long_term_liabilities",q.rM("long_term_liabilities"),"p_equity",q.rM("equity")],x.N,x.aU))
w=7
return B.j(n,$async$J2)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.b_q()
o=q.c
o.toString
B.aC(o,!1).eW()
q.c.M(x.q).f.aE(D.aEp)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a0(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.M(x.q).f.aE(B.bL(null,null,null,null,null,C.m,null,B.d("Speichern fehlgeschlagen: "+B.e(p),null,null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.F(new A.b7k(q))
w=r.pop()
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$J2,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.d("Bilanzwerte erfassen",r,r,r,r,B.bE(C.h,18,C.r),r,r,r),p=s.f?r:new A.b7m(s,d),o=s.d
o===$&&B.b()
p=B.ex(D.aeM,B.d("Stichtag: "+C.c.a1(o.dS(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aj(B.ex(D.agc,D.aKV,o?r:s.gaFP(),r),1)
v=x.p
w=B.a([p,C.D,B.a8(B.a([w,C.ah,B.aj(B.ex(D.afW,D.aKC,o?r:s.gaGS(),r),1)],v),C.k,r,C.e,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q9[u]
o=s.e
o===$&&B.b()
C.b.H(w,B.a([B.ck(r,C.a6,!1,r,!0,C.m,r,B.co(),o.h(0,p.a),r,r,r,r,r,2,new B.bl(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.P,!0,r,!0,r,!1,r,C.ab,r,r,r,r,r,C.di,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.w,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.W,r,C.O,r,r,r,r),C.D],v))}w.push(B.d("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.r(C.l,11,C.j),r,r,r))
p=B.bP(B.em(B.a1(w,C.ac,C.e,C.I),r,C.F),r,380)
o=s.f
w=B.cs(C.b8,r,r,o?r:new A.b7n(d),r,r)
o=o?r:s.gaGB()
t=B.dL(C.n,C.h,r,r,r,r,r)
return B.f8(B.a([w,B.cX(s.f?F.ZM:C.ct,o,t)],v),C.q,p,q)}}
A.bp.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.M(this)===B.M(e)&&B.a1z(this.gbu(),e.gbu())
else w=!0
return w},
gB(d){return(B.fe(B.M(this))^B.bTO(this.gbu()))>>>0},
j(d){B.bMN()
return B.M(this).j(0)}}
A.Mf.prototype={
U(){return new A.V8(B.B(x.S,x.J),new A.aB1(B.B(x.x,x.T)),null,null)}}
A.V8.prototype={
p(d){var w,v=this,u=v.a38(),t=v.CW
t.toString
t=v.a39(t.aw(0,v.gfn().gu(0)))
w=v.a39(u)
v.a.toString
return new A.Mb(new A.a33(t,w,null),u,null)},
a39(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.a([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aAZ(s.c,s.d,!1,r,s.a))}return d.aSv(w)},
a38(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.W0(t.ch)
if(r)s=w.a
r=t.y
t=t.aTp(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aSw(A.bEo(!1,!0,!0,v.d,v.c,u.gauf(),v.f,v.e))}return t},
aug(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gahp()||e==null||e.a==null){w=v.cy
v.F(w.gaRU(w))
return}v.F(new A.b7z(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a38(),new A.b7A(w)))}}
A.oe.prototype={
WE(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aAS(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aTp(d,e){return this.WE(null,null,d,e)},
aSw(d){return this.WE(null,d,null,null)},
aSv(d){return this.WE(d,null,null,null)},
YA(d,e,f){var w,v,u,t=A.kP(d.ch,e.ch,f,A.cco(),x.dB),s=B.an(d.CW,e.CW,f),r=A.bMV(d.d,e.d,f),q=A.bOT(d.e,e.e,f),p=A.bMT(d.c,e.c,f),o=e.a
o=A.a7m(B.a3n(d.a.b,o.b,f),o.a)
w=B.an(d.y,e.y,f)
v=B.an(d.x,e.x,f)
u=B.an(d.z,e.z,f)
r=A.aAS(e.cx,B.a4(d.as,e.as,f),t,e.cy,u,o,A.bMP(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbu(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aAR.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fY.prototype={
gdv(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ag(v,new A.aB_(),B.al(v).i("ag<1,G>")).jN(0,new A.aB0())
v=v.length
return w+(v-1)*this.d},
gbu(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iy.prototype={
gbu(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mY.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a30.prototype={
gbu(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a35.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ag0.prototype={
L(){return"TooltipDirection."+this.b}}
A.a36.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DT.prototype={
gbu(){return[this.a,this.b,C.bm,C.z,null]}}
A.Mg.prototype={}
A.a37.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.yf.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.YA(v,w,d)}}
A.ajs.prototype={}
A.ajz.prototype={}
A.ajA.prototype={}
A.ajC.prototype={}
A.ajD.prototype={}
A.ajE.prototype={}
A.ajF.prototype={}
A.ajG.prototype={}
A.ajH.prototype={}
A.aB1.prototype={
W0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.v7(0,0,!1)
v=new A.A1(d,x.x)
u=this.a
if(u.aJ(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.v7(t,u,!0)}w=null
try{w=C.b.p8(d,new A.aB2())}catch(s){return new A.v7(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.v7(q,r,!1)
u.m(0,v,j)
return j}}
A.v7.prototype={
gbu(){return[this.a,this.b,this.c]}}
A.ajB.prototype={}
A.aB3.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a1g(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.adW(t,A.bEn(w,t.a),u)
l.y=u
l.aUL(e,u,f)
l.anA(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aUU(d,e,m,t,r,s,n,o,f)}}},
adW(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.h(B.e6("inconsistent state groupsX.length != barGroups.length"))
w=B.a([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.a([],v)
p=s.c
new B.j3(p,B.al(p).i("j3<1>")).aF(0,new A.aB4(t,q,r,s))
w.push(new A.a83(q))}return w},
aUL(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.b4(m,m)
l=new B.dc(k,k,k,k)}j=o.w
i=b6[r].b[p]
h=i-m
g=i+m
k=l.a
f=l.b
e=l.c
d=l.d
a0=Math.max(k.b,f.b)+Math.max(e.b,d.b)
a1=o.b
a2=o.a
if(a1!==a2){if(a1>a2){a3=b2.dM(Math.max(t,a2),b4,b7)
a4=B.Rw(h,Math.min(b2.dM(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dM(Math.min(u,a2),b4,b7)
a4=B.Rw(h,a5,g,Math.max(b2.dM(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.b()
f=o.c
k.r=(f==null?C.N:f).gu(0)
k.seZ(null)
a6=b2.f.e3()
v.drawRRect(B.lO(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dM(f,b4,b7)
e=a8.b
b0=b2.dM(e,b4,b7)
b2.f.r=a8.c.gu(0)
b1=e<f?new B.N(h,a9,g,b0):new B.N(h,b0,g,a9)
J.bj(v.save())
v.clipRect(B.dT(b1),$.mS()[1],!0)
a6=b2.f.e3()
v.drawRRect(B.lO(a4),a6)
a6.delete()
v.restore()
b2.aUS(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gep(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.b()
f=j.a
k.r=f.gu(f)
k.c=n
n=$.as()
k=B.a([],s)
k.push(new B.hv(a4))
n=A.aEb(new B.cu(n.r,C.ao,null,null,k),o.r)
a6=b2.r.e3()
k=n.e
v.drawPath((k==null?n.e=new B.n2(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aUU(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bw(a5,a5,a5,a5,B.cR(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lQ().a0j(a8,a7.b),a7.a),C.bm,C.z,a5,b6.c,C.bt)
w.ahJ(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbX(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dM(s,a6,b6)
q=b4.a
p=a4.dM(q,a6,b6)
o=b1.b
n=u+o.gey()
m=v+4+(o.gd5(0)+o.gd8(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aOa)j=v===D.a_v&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a0k(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.N(h,i,v,t)
s=b1.a
f=new B.b4(s,s)
e=B.GY(g,f,f,f,f)
s=a4.w
s===$&&B.b()
r=b1.as.$1(b2)
s.r=r.gu(r)
d=b1.z
v-=h
t-=i
r=$.lQ().Lo(new B.J(v,t),d).b
s=$.lQ()
q=w.b
p=q.c
q=q.a.c
a0=s.Lo(new B.J(p,q.gbX(q)),d)
q=g.gca()
p=w.b.c
s=g.gajX()
a1=b1.Q
if(!a1.k(0,C.L)){a2=a4.x
a2===$&&B.b()
a3=a1.a
a2.r=a3.gu(a3)
a2.c=a1.b}a9.Xh(d,new A.aB5(a4,a9,e,w,new B.t(q.a-p/2,s.b+o.b-a0.b+r)),new B.t(e.a,e.b),new B.t(0,r),new B.J(v,t))},
aUS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gep(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dM(w,j,k)
u=e.a
t=n.dM(u,j,k)
w=u<w
u=w?new B.b4(i.z,i.Q):C.aa
s=w?new B.b4(i.x,i.y):C.aa
r=w?C.aa:new B.b4(i.e,i.f)
w=w?C.aa:new B.b4(i.r,i.w)
q=B.Rw(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dM(v,j,k),i.b)
r=n.dM(t,j,k)
v=t<v
t=v?C.aa:new B.b4(i.z,i.Q)
p=v?C.aa:new B.b4(i.x,i.y)
o=v?new B.b4(i.e,i.f):C.aa
q=B.Rw(w,s,u,r,t,p,o,v?new B.b4(i.r,i.w):C.aa)}else q=B.bGn(w,n.dM(v,j,k),u,n.dM(t,j,k),C.aa)}w=n.r
w===$&&B.b()
m=m.a
w.r=m.gu(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
XW(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.adW(b2,A.bEn(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dM(k,b2,b3)
m=b0[q].c[o]
g=a7.dM(m.a+m.x.b,b2,b3)}else{h=a7.dM(j+m.x.b,b2,b3)
g=a7.dM(b0[q].c[o].b,b2,b3)}a7.dM(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dM(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dM(a4.a,b2,b3)
a6=a7.dM(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a37(d,q,a0,o,a2,a1,new A.eI(d.a,v),new B.t(n,t))}}return null}}
A.a83.prototype={}
A.a33.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.aB3()
t.a2s()
$.as()
w=B.b5()
w.b=C.bp
t.f=w
w=B.b5()
w.b=C.b5
t.r=w
w=B.b5()
w.b=C.bp
w.r=C.q.gu(0)
t.w=w
w=B.b5()
w.b=C.b5
w.r=C.N.gu(0)
w.c=1
t.x=w
t=new A.ad7(this.d,v,u,t,d,C.be,new B.bw(),B.aO(x.j))
t.bj()
t.a_b(v.cy)
t.agT()
return t},
by(d,e){e.sip(0,this.d)
e.sZW(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.A=d
e.bd()}}
A.ad7.prototype={
sip(d,e){if(this.aG.k(0,e))return
this.aG=e
this.bd()},
sZW(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a20(d.cy)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aP(d,e){var w,v,u=this,t=d.gdD(0),s=t.a
J.bj(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.h1.ih(w,new A.a3B(t,v),new A.wj(u.aG,u.i9,u.d3,x.Q))
s.restore()},
a0c(d){var w=this,v=w.gC(0)
return new A.Mg(w.h1.XW(d,v,new A.wj(w.aG,w.i9,w.d3,x.Q)))}}
A.a2U.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DS.prototype={
L(){return"AxisSide."+this.b}}
A.u_.prototype={}
A.qx.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aez.prototype={
gbu(){return[!1,0,0,0]}}
A.pz.prototype={
gbu(){return[this.b,this.a,this.c,!0]}}
A.vy.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eI.prototype={
j(d){return"("+B.e(this.a)+", "+B.e(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eI))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gB(d){return C.d.gB(this.a)^C.d.gB(this.b)}}
A.z8.prototype={
gbu(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pX.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ag2.prototype={
gbu(){return[this.a,this.b]}}
A.RA.prototype={
gbu(){return[this.a,this.b]}}
A.nj.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nI.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l6.prototype={
gbu(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ly.prototype={
gbu(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a8e.prototype={
gbu(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.agq.prototype={
gbu(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Oa.prototype={
gbu(){return[this.a,this.b,!0]}}
A.vx.prototype={}
A.Oj.prototype={
afm(d,e,f){var w,v
$.as()
w=B.b5()
v=this.a
w.r=v.gu(v)
w.b=C.bp
d.iU(f,this.b,w)},
gbu(){return[this.a,this.b,this.c,0]}}
A.ajn.prototype={}
A.ajr.prototype={}
A.amL.prototype={}
A.anc.prototype={}
A.and.prototype={}
A.anf.prototype={}
A.ang.prototype={}
A.ao7.prototype={}
A.ao6.prototype={}
A.ao8.prototype={}
A.arV.prototype={}
A.atU.prototype={}
A.atV.prototype={}
A.avE.prototype={}
A.awo.prototype={}
A.awn.prototype={}
A.awp.prototype={}
A.aAG.prototype={
Nz(d,e,f,g,h,i){return new B.is(this.aYx(d,e,f,g,h,i),x.g4)},
aYw(d,e,f,g){return this.Nz(d,e,f,!0,g,!0)},
aYx(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Nz(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lQ().al6(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h6(u-s,v)*v===u
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
A.Ma.prototype={
a2s(){var w,v=this
$.as()
w=B.b5()
w.b=C.b5
v.a=w
w=B.b5()
w.b=C.bp
v.b=w
w=B.b5()
w.b=C.bp
v.e=w
w=B.b5()
w.b=C.b5
v.c=w
v.d=B.b5()},
ih(d,e,f){var w=this
w.a1h(d,e,f)
w.aUH(e,f)
w.aUR(e,f)
w.aUQ(e,f)},
aUQ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lQ().PC(w.a,a1.r-a1.f)
u=$.bDr().Nz(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fq(u.a(),u.$ti.i("fq<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fg(p,w,a4)
n=new B.t(o,0)
m=new B.t(o,s)
l=r.$1(p)
p=d.a
p===$&&B.b()
k=l.a
j=l.b
i=B.ln(n,m)
if(j!=null){p.r=C.J.gu(0)
p.seZ(j.mU(0,i))}else{if(k==null)k=C.N
p.r=k.gu(k)
p.seZ(a0)}k=l.c
p.c=k
if(k===0){p.seZ(a0)
k=B.c8(p.r)
p.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}a3.Ep(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lQ().PC(w.b,a1.y-a1.x)
u=$.bDr().Nz(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fq(u.a(),u.$ti.i("fq<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dM(q,w,a4)
n=new B.t(0,e)
m=new B.t(g,e)
q=d.a
q===$&&B.b()
p=f.a
k=f.b
i=B.ln(n,m)
if(k!=null){q.r=C.J.gu(0)
q.seZ(k.mU(0,i))}else{if(p==null)p=C.N
q.r=p.gu(p)
q.seZ(a0)}p=f.c
q.c=p
if(p===0){q.seZ(a0)
p=B.c8(q.r)
q.r=B.aJ(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gu(0)}a3.Ep(n,m,d.a,f.d)}},
aUH(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.b()
v.r=u.gu(0)
d.a.hf(new B.N(0,0,0+w.a,0+w.b),this.b)},
aUR(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.ln(new B.t(n.fg(t.a,m,e),0),new B.t(n.fg(t.b,m,e),v))
r=n.e
r===$&&B.b()
q=t.c
p=t.d
if(p!=null){r.r=C.J.gu(0)
r.seZ(p.mU(0,s))}else{r.r=(q==null?C.N:q).gu(0)
r.seZ(null)}o=n.e.e3()
w.drawRect(B.dT(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.ln(new B.t(0,n.dM(t.a,m,e)),new B.t(w,n.dM(t.b,m,e)))
v=n.e
v===$&&B.b()
r=t.c
q=t.d
if(q!=null){v.r=C.J.gu(0)
v.seZ(q.mU(0,s))}else{v.r=(r==null?C.N:r).gu(0)
v.seZ(null)}o=n.e.e3()
j.drawRect(B.dT(s),o)
o.delete()}},
aUP(d,e,f){var w,v
this.a1h(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.afn(d,e,f,w)
if(v.b.length!==0)this.aUW(d,e,f,w)},
afn(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dM(o,a1,a0)
m=new B.t(0,n)
o=f.dM(o,a1,a0)
l=new B.t(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.b()
k=p.a
j=p.b
i=B.ln(m,l)
if(j!=null){n.r=C.J.gu(0)
n.seZ(j.mU(0,i))}else{if(k==null)k=C.N
n.r=k.gu(k)
n.seZ(null)}k=p.c
n.c=k
if(k===0){n.seZ(null)
k=B.c8(n.r)
n.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}n.d=p.x
e.Ep(m,l,f.c,p.d)
n=p.r
h=n.gdv(n).eI(0,2)
g=C.d.aq(o,n.gbX(n).eI(0,2))
J.bj(r.save())
r.translate(h,g)
n=n.gOx().b
n===$&&B.b()
n=n.a
n===$&&B.b()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdv(n).eI(0,2)
o=C.d.aq(o,n.gbX(n).eI(0,2))
k=f.d
k===$&&B.b()
s.afo(0,n,new B.t(h,o),k)}}},
aUW(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=d.fg(o,a3,a2)
m=new B.t(n,0)
o=d.fg(o,a3,a2)
l=new B.t(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.b()
k=p.a
j=p.b
i=B.ln(m,l)
if(j!=null){n.r=C.J.gu(0)
n.seZ(j.mU(0,i))}else{if(k==null)k=C.N
n.r=k.gu(k)
n.seZ(null)}k=p.c
n.c=k
if(k===0){n.seZ(null)
k=B.c8(n.r)
n.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}n.d=p.x
a1.Ep(m,l,d.c,p.d)
n=p.r
h=n.gdv(n).eI(0,2)
g=n.gbX(n).eI(0,2)
f=C.d.aq(o,h)
e=C.d.aq(u,g)
J.bj(r.save())
r.translate(f,e)
n=n.gOx().b
n===$&&B.b()
n=n.a
n===$&&B.b()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdv(n).eI(0,2)
g=n.gbX(n).aj(0,2)
o=C.d.aq(o,h)
k=C.d.aq(u,g)
j=d.d
j===$&&B.b()
s.afo(0,n,new B.t(o,k),j)}}},
fg(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dM(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a0k(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Mb.prototype={
gamV(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gamW(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamX(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gamT(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
ang(d){var w,v=this,u=null,t=v.d,s=A.bF9(t.d),r=t.a
r=r.a&&A.bZj(r.b)?r.b:u
w=B.a([B.aD(u,v.c,C.p,u,u,new B.aB(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.aAI(w)
if(v.gamV())C.b.hB(w,s.$1(!0),new A.Bf(D.BV,t,new B.J(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamX())C.b.hB(w,s.$1(!0),new A.Bf(D.n5,t,new B.J(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamW())C.b.hB(w,s.$1(!0),new A.Bf(D.BW,t,new B.J(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamT())C.b.hB(w,s.$1(!0),new A.Bf(D.dX,t,new B.J(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
return w},
p(d){return B.jD(new A.aAH(this))}}
A.T2.prototype={
U(){return new A.a_1(new B.br(null,x.eF))}}
A.a_1.prototype={
aA4(){switch(this.a.c.a){case 0:return C.dV
case 1:return C.fl
case 2:return C.d6
case 3:return C.dG}},
aAA(){switch(this.a.c.a){case 0:return new B.af(0,0,8,0)
case 1:return new B.af(0,0,0,8)
case 2:return new B.af(8,0,0,0)
case 3:return new B.af(0,8,0,0)}},
aA6(d){this.a.toString
return},
ap(){this.aH()
$.cN.x1$.push(this.ga5P())},
bc(d){this.bG(d)
$.cN.x1$.push(this.ga5P())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.aAA()
return B.BF(B.b4I(0,B.aD(v.aA4(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aeA.prototype={
bn(d){return A.bZb(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2V.prototype={
h5(d){if(!(d.b instanceof B.hF))d.b=new B.hF(null,null,C.v)},
hM(d){if(this.A===C.al)return this.yC(d)
return this.WR(d)},
aNl(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
aaJ(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dH(d){var w=this.aaI(d,B.hV())
switch(this.A.a){case 0:return d.bH(new B.J(w.a,w.b))
case 1:return d.bH(new B.J(w.b,w.a))}},
aaI(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.al?d.b:d.d,m=o.a9$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.eF(u,null)
break
case 1:q=B.eF(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aaJ(p)
t=Math.max(t,o.aNl(p))
m=r.aA$}return new A.bkX(n<1/0?n:s,t)},
cB(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.O.prototype.ga7.call(p)),n=p.aaI(o,B.mR()),m=n.a,l=n.b
switch(p.A.a){case 0:p.fy=o.bH(new B.J(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.bH(new B.J(l,m))
p.gC(0)
p.gC(0)
break}w=p.a9$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.aaJ(r==null?B.T(B.Z("RenderBox was not laid out: "+B.M(w).j(0)+"#"+B.c3(w))):r)/2
switch(p.A.a){case 0:r=new B.t(q,0)
break
case 1:r=new B.t(0,q)
break
default:r=null}t.a=r
w=t.aA$;++u}},
ed(d,e){return this.vt(d,e)},
aP(d,e){if(this.gC(0).gY(0))return
this.a5.sbi(0,null)
this.tj(d,e)},
l(){this.a5.sbi(0,null)
this.aqb()}}
A.bkX.prototype={}
A.aAJ.prototype={}
A.k4.prototype={
gbu(){return[this.a,this.b]}}
A.od.prototype={}
A.ajo.prototype={}
A.ajp.prototype={
aO(d){var w,v,u
this.fm(d)
w=this.a9$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aA$}},
aI(d){var w,v,u
this.f7(0)
w=this.a9$
for(v=x.L;w!=null;){w.aI(0)
u=w.b
u.toString
w=v.a(u).aA$}}}
A.ajq.prototype={}
A.V5.prototype={
l(){var w,v,u
for(w=this.Xu$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.Bf.prototype={
goK(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d6
case 1:return C.dG
case 2:return C.dV
case 3:return C.fl}},
gb29(){var w=this.d,v=A.bF9(w.d),u=A.bMS(w.a)
switch(this.c.a){case 2:case 0:return new B.af(0,v.b,0,v.d).aj(0,new B.af(0,u.b,0,u.d))
case 1:case 3:return new B.af(v.a,0,v.c,0).aj(0,new B.af(u.a,0,u.c,0))}},
gajL(){var w=this.d,v=A.bMS(w.a),u=A.bF9(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aZd(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goK().c.d
if(o==null)o=$.lQ().PC(d,f-e)
w=p.c
v=w!==D.n5
if((!v||w===D.dX)&&p.d instanceof A.oe){u=x.B.a(p.d)
if(u.ch.length===0)return B.a([],x.M)
t=A.bEn(u,d)
w=new B.j3(t,B.al(t).i("j3<1>"))
s=w.gi3(w).eQ(0,new A.b1G(u),x.W).fR(0)}else{r=$.bDr()
w=!v||w===D.dX
v=p.d
q=r.aYw(w?v.w:v.z,o,f,e)
v=B.oN(q,new A.b1H(p,f,e,d),q.$ti.i("u.E"),x.W)
s=B.S(v,B.q(v).i("u.E"))}w=B.al(s).i("ag<1,od>")
w=B.S(new B.ag(s,new A.b1I(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goK()
w=j.goK()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aD(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.n5
u=!v
t=!u||w===D.dX
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dX?C.F:C.al
q=B.a([],x.p)
if(w===D.BV||v)j.goK()
if(j.goK().c.a){v=!u||w===D.dX?r:j.goK().c.c
p=!u||w===D.dX?j.goK().c.c:r
o=j.gb29()
n=!u||w===D.dX?C.al:C.F
j.gajL()
m=j.gajL()
l=!u||w===D.dX
k=j.d
l=l?k.f:k.x
u=!u||w===D.dX?k.r:k.y
q.push(B.aD(i,A.c5A(new A.aAJ(),n,j.aZd(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BW||w===D.dX)j.goK()
return new B.ec(t,i,i,B.c11(q,C.k,s,i,C.e,C.I,0,i,i,C.aZ),i)}}
A.a39.prototype={
gbu(){return[this.a,this.b]}}
A.a7l.prototype={
gbu(){return[this.a,this.b]}}
A.Oq.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a7n.prototype={
gadg(d){return!1},
gbu(){return[!1,!1,!1,!1]}}
A.aBe.prototype={}
A.aHG.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ajK.prototype={}
A.an9.prototype={}
A.ana.prototype={}
A.anh.prototype={}
A.Mj.prototype={
ih(d,e,f){}}
A.wj.prototype={}
A.hE.prototype={
gdQ(){return null},
gahp(){var w,v=this
B.bH()
B.bH()
B.bH()
w=v instanceof A.Op
if(w)return!0
return!(v instanceof A.Om)&&!(v instanceof A.Ol)&&!(v instanceof A.On)&&!(v instanceof A.Ok)&&!w&&!(v instanceof A.Oo)}}
A.a7r.prototype={
gdQ(){return this.a.b}}
A.a7s.prototype={
gdQ(){return this.a.b}}
A.a7t.prototype={
gdQ(){return this.a.b}}
A.Ol.prototype={}
A.Om.prototype={}
A.a7w.prototype={
gdQ(){return this.a.b}}
A.Oo.prototype={}
A.Op.prototype={
gdQ(){return this.a.b}}
A.a7q.prototype={
gdQ(){return this.a.b}}
A.a7p.prototype={
gdQ(){return this.a.b}}
A.Ok.prototype={
gdQ(){return this.a.b}}
A.a7u.prototype={
gdQ(){return this.a.gdQ()}}
A.a7v.prototype={
gdQ(){return this.a.gdQ()}}
A.On.prototype={
gdQ(){return this.a.gdQ()}}
A.He.prototype={
a_b(d){this.V=d.b
this.W=d.c
this.a5=d.d},
agT(){var w=this,v=null,u=w.an=B.bG3(v,v)
u.ay=new A.aXL(w)
u.ch=new A.aXM(w)
u.CW=new A.aXN(w)
u.cy=new A.aXO(w)
u.cx=new A.aXP(w)
u=w.aK=B.I2(v,-1,v)
u.A=new A.aXQ(w)
u.a_=new A.aXR(w)
u.V=new A.aXS(w)
u=w.bF=B.a9m(v,w.a5,v)
u.p3=new A.aXT(w)
u.p4=new A.aXU(w)
u.RG=new A.aXV(w)},
cB(){var w=x.k.a(B.O.prototype.ga7.call(this))
this.fy=new B.J(w.b,w.d)},
dH(d){return new B.J(d.b,d.d)},
kM(d){return!0},
n3(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bF
w===$&&B.b()
w.oH(d)
w=v.aK
w===$&&B.b()
w.oH(d)
w=v.an
w===$&&B.b()
w.oH(d)}else if(x.gJ.b(d))v.la(new A.a7v(d))},
gO2(d){return new A.aXW(this)},
gO4(d){return new A.aXX(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdQ()
v=w!=null?u.a0c(w):null
u.V.$2(d,v)
u.a_=C.be},
gLR(d){return this.a_},
gGk(){var w=this.av
w===$&&B.b()
return w},
aO(d){this.fm(d)
this.av=!0},
aI(d){this.av=!1
this.f7(0)},
$ijG:1}
A.PK.prototype={
U(){return new A.XK(B.a([],x.r),B.B(x.S,x.J),new A.aNN(B.B(x.y,x.dj)),null,null)}}
A.XK.prototype={
p(d){var w,v=this,u=v.a5R(),t=v.CW
t.toString
t=v.acL(t.aw(0,v.gfn().gu(0)))
w=v.acL(u)
v.a.toString
return new A.Mb(new A.a9c(t,w,null),u,null)},
acL(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.al(w).i("ag<1,ei>")
w=B.S(new B.ag(w,new A.bl2(this,d),v),v.i("ax.E"))
return d.aTm(w,this.cy)},
a5R(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.W0(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aTB(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aT0(new A.FM(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaBn(),t.c,t.d))}return r},
aBo(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gahp())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.F(new A.bl0(v))
return}v.F(new A.bl1(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a5R(),new A.bl3(w)))}}
A.qa.prototype={
YA(d,e,f){var w,v,u,t,s,r,q=B.an(d.f,e.f,f),p=B.an(d.r,e.r,f),o=B.an(d.w,e.w,f),n=B.an(d.x,e.x,f),m=B.an(d.y,e.y,f),l=B.an(d.z,e.z,f),k=B.a4(d.as,e.as,f),j=e.a
j=A.a7m(B.a3n(d.a.b,j.b,f),j.a)
w=A.bMP(d.at,e.at,f)
v=A.bMT(d.c,e.c,f)
u=A.bMV(d.d,e.d,f)
t=A.bOT(d.e,e.e,f)
s=A.kP(d.ch,e.ch,f,A.cev(),x.cz)
s.toString
r=A.kP(d.CW,e.CW,f,A.ceu(),x.bO)
r.toString
u=A.bFG(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
WF(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bFG(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aTB(d,e,f,g){return this.WF(null,null,d,e,f,g,null)},
aT0(d){var w=null
return this.WF(w,d,w,w,w,w,w)},
aTm(d,e){var w=null
return this.WF(d,w,w,w,w,w,e)},
gbu(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ei.prototype={
asR(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p8(n.a,new A.aNM())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.h_))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aY()
n.b=q
r.toString
n.c!==$&&B.aY()
n.c=r
s.toString
n.d!==$&&B.aY()
n.d=s
t.toString
n.e!==$&&B.aY()
n.e=t}},
aeG(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aNL(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aT7(d){return this.aeG(d,null)},
aT9(d){return this.aeG(null,d)},
gbu(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.PL.prototype={
gbu(){return[this.a]}}
A.a32.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mZ.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Me.prototype={
gbu(){return[!1,this.b,this.c,!0]}}
A.z7.prototype={
gbu(){return[this.a,this.b,this.c]}}
A.aNB.prototype={
L(){return"LabelDirection."+this.b}}
A.a7o.prototype={
gbu(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.FM.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a9d.prototype={
gbu(){return[4,C.eR,16,D.ye,0,120,A.cex(),!1,!1,!1,0,C.L,A.cew()]}}
A.nm.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qF.prototype={}
A.rZ.prototype={
gbu(){return[this.a,this.b,C.bm,C.z,null]}}
A.u1.prototype={
gbu(){return[this.a,this.b]}}
A.HG.prototype={
gbu(){return[this.a]}}
A.PM.prototype={}
A.zX.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.YA(v,w,d)}}
A.ajx.prototype={}
A.ajy.prototype={}
A.ajM.prototype={}
A.anb.prototype={}
A.ane.prototype={}
A.ap4.prototype={}
A.ap5.prototype={}
A.ap6.prototype={}
A.ap8.prototype={}
A.ap9.prototype={}
A.apa.prototype={}
A.apb.prototype={}
A.atT.prototype={}
A.avD.prototype={}
A.aNN.prototype={
W0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yU
u=new A.A1(d,x.y)
t=this.a
if(t.aJ(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zY(s,r,q,t,!0)}w=null
try{w=C.b.p8(d,new A.aNO())}catch(p){return D.yU}v=null
try{v=C.b.p8(w.a,new A.aNP())}catch(p){return D.yU}o=v.a
n=v.a
m=v.b
l=v.b
for(s=d.length,k=0;k<s;++k){j=d[k]
if(j.a.length===0)continue
r=j.d
r===$&&B.b()
i=r.a
if(i>n)n=i
r=j.b
r===$&&B.b()
h=r.a
if(h<o)o=h
r=j.c
r===$&&B.b()
g=r.b
if(g>l)l=g
r=j.e
r===$&&B.b()
f=r.b
if(f<m)m=f}e=new A.zY(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zY.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ap7.prototype={}
A.aNQ.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gadg(0)){v=a3.b
u=v.a
v=v.b
$.as()
a3.a.iP(new B.N(0,-40,0+(u+40),-40+(v+40)),B.b5())
a3.aS0(new B.N(0,0,u,v))}d.a1g(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aUN(a3,a0,v[t],a4)
s=B.a([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aUJ(a3,q,a4)
d.aUO(a3,q,a4)
d.anz(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Q(o)
if(n.gq(o)!==p.length)throw B.h(B.e6("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.w1(q,i,j,k))}}d.aUV(a3,s,a4)
if(w.gadg(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.S(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aUT(a2,a3,v,f,new A.HG(g),a4)}},
aUJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bF8(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.a_M(o,e,u,f)
s=p.akZ(o,e,t,u,f)
r=p.a_O(o,e,t,u,f,!0)
q=p.akY(o,e,t,u,f)
p.aUM(d,s,p.a_L(o,e,t,u,f,!0),f,e)
p.aUG(d,q,r,f,e)
p.aUK(d,t,e)
p.aUI(d,t,e,f)}},
aUN(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bF8(a5.a),a8=A.bF8(a6.a)
if(a7.length!==a8.length)throw B.h(B.bQ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bZ.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.al(n).i("cM<1>")
l=B.S(new B.cM(n,m),m.i("ax.E"))
k=a2.a_M(a3,a5,o,b2)
j=a2.a_N(a3,a6.aT9(l),l,b2,k)
n=a5.b
n===$&&B.b()
m=a6.b
m===$&&B.b()
i=Math.min(n.a,m.a)
m=a5.c
m===$&&B.b()
n=a6.c
n===$&&B.b()
h=Math.max(m.b,n.b)
n=a5.d
n===$&&B.b()
m=a6.d
m===$&&B.b()
g=Math.max(n.a,m.a)
m=a5.e
m===$&&B.b()
n=a6.e
n===$&&B.b()
f=Math.min(m.b,n.b)
n=a2.fg(i,a3,b2)
m=a2.dM(h,a3,b2)
e=a2.fg(g,a3,b2)
d=a2.dM(f,a3,b2)
a0=a2.r
a0===$&&B.b()
if(q){a0.r=C.J.gu(0)
a0.seZ(v.mU(0,new B.N(n,m,e,d)))}else{a0.r=(r?C.N:w).gu(0)
a0.seZ(null)}$.as()
a1=new B.n1(C.dI,C.bp,C.ej,C.eF,C.e7).e3()
n=B.dT(new B.N(0,0,t,s))
m=$.bZ.b
if(m===$.bZ)B.T(B.w_(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e3()
n=j.e
a4.drawPath((n==null?j.e=new B.n2(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aUO(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_S(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.h_)&&t.$2(q,e)){p=this.fg(q.a,w,f)
o=this.dM(q.b,w,f)
n.$4(q,p/v*100,e,r).afm(s,q,new B.t(p,o))}}},
aUV(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fX(b3,new A.aNT())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.a_S(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fg(j.a,w,b4)
g=b1.dM(j.b,w,b4)
f=i.b
e=f.a
d=B.cy()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.rY(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.kM(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kM(q.$2(m,k))))
f=b1.dM(a1,w,b4)
a3=new B.t(h,f)
a4=b1.dM(a2,w,b4)
a5=new B.t(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.t(h,a4-(a4-a7)):new B.t(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.b()
a4=a9.a
a6=a9.b
b0=B.ln(a3,a5)
if(a6!=null){f.r=C.J.gu(0)
f.seZ(a6.mU(0,b0))}else{if(a4==null)a4=C.N
f.r=a4.gu(a4)
f.seZ(null)}a4=a9.c
f.c=a4
if(a4===0){f.seZ(null)
a4=B.c8(f.r)
f.r=B.aJ(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gu(0)}b2.Ep(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.rY(d.a))
f.afm(t,j,new B.t(h,g))}}},
a_N(d,e,f,g,h){var w=this.al_(d,e,f,g,h)
return w},
a_M(d,e,f,g){return this.a_N(d,e,f,g,null)},
al_(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cu($.as().r,C.ao,null,null,B.a([],x.v)):a5,f=J.Q(a3),e=f.gq(a3),d=i.fg(f.h(a3,0).a,a1,a4),a0=i.dM(f.h(a3,0).b,a1,a4)
if(h){g.aC(new B.fm(d,a0))
if(e===1)g.aC(new B.cA(d,a0))}else g.aC(new B.cA(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fg(f.h(a3,t).a,a1,a4)
r=i.dM(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fg(f.h(a3,q).a,a1,a4)
q=i.dM(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fg(f.h(a3,n?o:t).a,a1,a4)
l=i.dM(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.t(n,l)
s=new B.Nf(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_O(d,e,f,g,h,i){var w=this,v=B.O4(f),u=J.Q(g),t=w.fg(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aC(new B.cA(t,s))
t=w.fg(u.h(g,0).a,d,h)
v.aC(new B.cA(t,s))
v.aC(new B.cA(w.fg(u.h(g,0).a,d,h),w.dM(u.h(g,0).b,d,h)))
v.aC(new B.pI())
return v},
akZ(d,e,f,g,h){return this.a_O(d,e,f,g,h,!1)},
a_L(d,e,f,g,h,i){var w=this,v=B.O4(f),u=J.Q(g),t=w.fg(u.h(g,u.gq(g)-1).a,d,h)
v.aC(new B.cA(t,0))
t=w.fg(u.h(g,0).a,d,h)
v.aC(new B.cA(t,0))
v.aC(new B.cA(w.fg(u.h(g,0).a,d,h),w.dM(u.h(g,0).b,d,h)))
v.aC(new B.pI())
return v},
akY(d,e,f,g,h){return this.a_L(d,e,f,g,h,!1)},
aUM(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.b()
v=r.fg(v.a,w,g)
u=h.c
u===$&&B.b()
u=r.dM(u.b,w,g)
t=h.d
t===$&&B.b()
t=r.fg(t.a,w,g)
s=r.r
s===$&&B.b()
A.bG2(s,q.b,q.c,new B.N(v,u,t,w.b))
d.a.i2(e,r.r)},
aUG(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.b()
v=r.fg(v.a,w,g)
u=h.d
u===$&&B.b()
u=r.fg(u.a,w,g)
t=h.e
t===$&&B.b()
t=r.dM(t.b,w,g)
s=r.r
s===$&&B.b()
A.bG2(s,q.b,q.c,new B.N(v,0,u,t))
d.a.i2(e,r.r)},
aUK(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.O6(B.O4(e),!1,B.a([],x.I)).t())return
u=this.f
u===$&&B.b()
u.d=f.at?C.iL:C.ej
u.e=C.eF
u.r=v.gu(0)
u.seZ(null)
u.c=f.x
u.r=v.gu(0)
$.lQ()
u.z=new B.A5(C.aA,w.c*0.57735+0.5)
d.a.i2(A.aEb(e,f.cy).eg(w.b),this.f)},
aUI(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.b()
q.d=f.at?C.iL:C.ej
q.e=C.eF
q=f.b
q===$&&B.b()
q=s.fg(q.a,r,g)
w=f.c
w===$&&B.b()
w=s.dM(w.b,r,g)
v=f.d
v===$&&B.b()
v=s.fg(v.a,r,g)
u=f.e
u===$&&B.b()
u=s.dM(u.b,r,g)
t=s.f
A.bG2(t,f.r,f.w,new B.N(q,w,v,u))
t.z=null
t.c=f.x
A.c3t(t)
d.a.i2(A.aEb(e,f.cy),s.f)},
aUT(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.a([],x.eg),b1=b8.a,b2=A.bTh(b1),b3=J.Q(b2)
if(b3.gq(b2)!==b1.length)throw B.h(B.e6("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lQ().a0j(b4,u.b)
s=u.a
r=w.k(0,C.jb)?new B.kH(1):w
q=new B.tX(new B.fA(s,a8,a8,C.be,a8,a8,a8,a8,a8,a8,t),C.bm,C.z,r,a8,a8,a8,a8,C.bt,a8)
q.ahJ(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbX(w)}b3=a7.fg(b7.a,a9,b9)
t=a7.dM(b7.b,a9,b9)
l=p+C.eR.gey()
k=o+(w-1)*4+(C.eR.gd5(0)+C.eR.gd8(0))
j=t-k-16
i=a7.a0k(b3,l,D.ye,0)
b3=i+l
w=j+k
h=new B.b4(4,4)
g=B.GY(new B.N(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.b()
t=A.bTg(f)
b1.r=t.gu(t)
t=b3-i
w-=j
b1=$.lQ().Lo(new B.J(t,w),0).b
d=new B.t(0,b1)
a0=new B.t(g.a,g.b)
a1=$.lQ().Lo(new B.J(t,w),0)
if(!C.L.k(0,C.L)){s=a7.Q
s===$&&B.b()
s.r=C.J.gu(0)
s.c=0}b5.Xh(0,new A.aNR(a7,b5,g),a0,d,new B.J(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.c6b(q.r,q.w)
A:{if(D.EW===a5){a6=a3
break A}if(D.EX===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Xh(0,new A.aNS(b5,q,new B.t(a6,j+a4-a2+b1)),a0,d,new B.J(t,w))
a6=q.b.a.c
a4=a4+a6.gbX(a6)+4}},
a_S(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fg(v[0].a,e,f)
return this.fg(v[v.length-1].a,e,f)-w},
XW(d,e,f){var w,v,u,t=B.a([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.alr(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fX(t,new A.aNU())
return t.length===0?null:t},
alr(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.a([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.h_))continue
p=u.$2(e,new B.t(this.fg(q.a,d,h),this.dM(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qF(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.w1.prototype={}
A.a9c.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.aNQ()
t.a2s()
$.as()
w=B.b5()
w.b=C.b5
t.f=w
w=B.b5()
w.b=C.bp
t.r=w
w=B.b5()
w.b=C.b5
t.w=w
w=B.b5()
w.b=C.bp
w.r=C.N.gu(0)
w.a=D.a0R
t.x=w
w=B.b5()
w.b=C.b5
w.r=C.J.gu(0)
t.y=w
w=B.b5()
w.b=C.bp
w.r=C.q.gu(0)
t.z=w
w=B.b5()
w.b=C.b5
w.r=C.N.gu(0)
w.c=1
t.Q=w
t=new A.adk(this.d,v,u,t,d,C.be,new B.bw(),B.aO(x.j))
t.bj()
t.a_b(v.cx)
t.agT()
return t},
by(d,e){e.sip(0,this.d)
e.sZW(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.A=d
e.bd()}}
A.adk.prototype={
sip(d,e){if(this.aG.k(0,e))return
this.aG=e
this.bd()},
sZW(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a20(d.cx)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aP(d,e){var w,v,u=this,t=d.gdD(0),s=t.a
J.bj(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.h1.ih(w,new A.a3B(t,v),new A.wj(u.aG,u.i9,u.d3,x.C))
s.restore()},
a0c(d){var w=this,v=w.gC(0)
return new A.PM(w.h1.XW(d,v,new A.wj(w.aG,w.i9,w.d3,x.C)))}}
A.OP.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a3B.prototype={
aS0(d){this.a.a.clipRect(B.dT(d),$.mS()[1],!0)
return null},
afu(d,e){d.aP(this.a,e)},
Xh(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bj(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lQ()
s.ZU(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ep(d,e,f,g){var w=new B.cu($.as().r,C.ao,null,null,B.a([],x.v))
w.aC(new B.fm(d.a,d.b))
w.aC(new B.cA(e.a,e.b))
this.a.i2(A.aEb(w,g),f)}}
A.A1.prototype={
gbu(){return[this.a]}}
A.api.prototype={}
A.a3L.prototype={}
A.b59.prototype={
Lo(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.t((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aZN(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.b4(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.b4(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.b4(v,v)
s=d.d
return new B.dc(w,u,t,s.a>v||s.b>v?new B.b4(v,v):s)},
aZO(d,e){var w,v
if(d==null)return D.a12
w=d.b
v=e/2
return d.aTc(w>v?v:w)},
PC(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b1V(w)},
b1V(d){if(d<1)return this.aLN(d)
return this.a9L(d)},
aLN(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a9L(d*q)/q},
a9L(d){var w,v=C.f.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
alf(d){if(d>=1)return 1
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
a0j(d,e){var w,v,u=d.M(x.f0)
if(u==null)u=C.jh
w=e.a?u.w.c8(e):e
v=B.b8(d,C.w5)
v=v==null?null:v.ay
return v===!0?w.c8(C.mM):w},
al6(d,e,f,g){var w=C.d.ak(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qH)","D(pW)","G(G,pW)","D(eI)","~(w,fY)","G(ei,w)","vv(z)","G(G,qH)","bW(G,u_)","pX(G)","U<~>()","w(qF,qF)","G(w5)","JC(ov)","qH(@)","w5(@)","rs(z)","x2(@)","Ja(C,bM)","KA(oy)","Jw(ow)","DA(@)","ei(G)","vw(dQ<vw>)","a6(G,u_)","Fa(dQ<aIw>)","m4(wU<m4>)","pW(@)","G(x2)","xk(C,bM)","BT(z)","~()","U<oy>(c7<oy>)","~(hE,Mg?)","yf(@)","G(iy)","D(fY)","~(w,iy)","~(@)","k4(od)","c(od)","k4(bC<w,G>)","k4(G)","od(k4)","~(hE,PM?)","ei(ei)","U<ov>(c7<ov>)","zX(@)","U<ow>(c7<ow>)","u1(w)","vx(eI,G,ei,w)","rZ(nm)","D(ei)","w(w,w,G)","G(fY)","~(xm)","z3(ey<C?>)","fY(fY,fY,G)","iy(iy,iy,G)","mY(mY,mY,G)","DT?(fY,w,iy,w)","F(fY)","c(G,u_)","eI(eI,eI,G)","D(G)","nj(nj,nj,G)","nI(nI,nI,G)","l6(l6,l6,G)","ly(ly,ly,G)","i(l6)","i(ly)","ei(ei,ei,G)","mZ(mZ,mZ,G)","vx(eI,G,ei,w{size:G?})","D(eI,ei)","G(t,t)","v<u1>(ei,v<w>)","xp(C,bM)","v<rZ>(v<nm>)","F(nm)","w(w1,w1)"])
A.aIr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cn(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.ak(k==null?"":k)
w=l.h(0,"booking_date")
w=B.dh(J.ak(w==null?"":w))
if(w==null)w=B.bs(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.ak(v==null?"":v)
u=l.h(0,"account_name")
u=J.ak(u==null?"":u)
t=l.h(0,"direction")
t=J.ak(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.ak(s)
r=A.bAa(l.h(0,"amount_net"))
q=A.bAa(l.h(0,"amount_tax"))
p=A.bAa(l.h(0,"amount_gross"))
o=A.bAa(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.ak(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.ak(m)
l=l.h(0,"source_account_code")
return new A.pW(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.ak(l))},
$S:z+27}
A.aIs.prototype={
$1(d){var w=B.cn(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qH(J.ak(v==null?"":v),A.pq(w.h(0,"revenue_net")),A.pq(w.h(0,"expense_net")),A.pq(w.h(0,"result_net")))},
$S:z+14}
A.aIt.prototype={
$1(d){var w,v,u,t=B.cn(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.pq(t.h(0,"gross"))
u=B.aX(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.w5(s,r,w,v,u,A.pq(t.h(0,"avg_basket")))},
$S:z+15}
A.aIu.prototype={
$1(d){var w,v=B.cn(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.aX(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.x2(u,t,w,A.pq(v.h(0,"gross")))},
$S:z+17}
A.aIN.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.Q(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.DA(v,u,J.ak(t==null?"expense":t),A.uM(w.h(d,"net")),A.uM(w.h(d,"tax")),A.uM(w.h(d,"gross")))},
$S:z+21}
A.bB0.prototype={
$1(d){return new A.vw(d.al($.bx(),x.A))},
$S:z+23}
A.bB1.prototype={
$1(d){return new A.Fa(d.al($.bY_(),x.D))},
$S:z+25}
A.bD_.prototype={
$1(d){return E.aIv()},
$S:z+26}
A.bB2.prototype={
$1(d){var w=d.al($.r8(),x.P)
return d.al($.a22(),x.a).GN(w)},
$S:z+32}
A.bAZ.prototype={
$1(d){var w=d.al($.r8(),x.P)
return d.al($.a22(),x.a).Gy(w)},
$S:z+46}
A.bB_.prototype={
$1(d){var w=d.al($.r8(),x.P)
return d.al($.a22(),x.a).GI(w)},
$S:z+48}
A.bAY.prototype={
$1(d){return this.akP(d)},
akP(d){var w=0,v=B.p(x.h),u,t,s,r,q
var $async$$1=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.j(d.al($.bx(),x.A).fe("finance_balance_kpis",t),$async$$1)
case 3:s=r.cn(q.a(f),x.N,t)
if(!J.f(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$1,v)},
$S:219}
A.aIq.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.az(0,$.a22(),x.a).pN(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.aIp.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.az(0,$.a22(),x.a).Ms(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.bgB.prototype={
$0(){var w=0,v=B.p(x.H),u,t=this,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=t.a.gbp()
r=$.bDW()
if(s.e==null)B.T(B.Z(y.b))
s.gck().c2(r)
u=null
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$0,v)},
$S:2}
A.bgw.prototype={
$1(d){var w=this.a
return w.F(new A.bgv(w,d))},
$S:z+55}
A.bgv.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bgx.prototype={
$0(){var w=this.a
return w.F(new A.bgu(w))},
$S:0}
A.bgu.prototype={
$0(){return this.a.x=null},
$S:0}
A.bgA.prototype={
$0(){return F.iA},
$S:80}
A.bgz.prototype={
$2(d,e){return new A.xp("Buchungen konnten nicht geladen werden: "+B.e(d),C.R,F.lv,null)},
$S:z+77}
A.bgy.prototype={
$1(d){return new A.JC(d,this.a.atY(d.b),null)},
$S:z+13}
A.bgt.prototype={
$1(d){var w=this.a
if(w.gTi()!=null&&d.c!==w.gTi())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bgp.prototype={
$0(){return this.a.e.$1(D.Bw)},
$S:0}
A.bgq.prototype={
$0(){return this.a.e.$1(D.a_V)},
$S:0}
A.bgr.prototype={
$0(){return this.a.e.$1(D.a_W)},
$S:0}
A.bgs.prototype={
$0(){return this.a.e.$1(D.a_X)},
$S:0}
A.bld.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.ble.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.blf.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.blg.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.blh.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bli.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.blj.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aIL.prototype={
$0(){var w=0,v=B.p(x.H),u,t=this,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bDX()
if(s.e==null)B.T(B.Z(y.b))
s.gck().c2(r)
u=null
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$0,v)},
$S:2}
A.aIC.prototype={
$0(){return this.a.Ki(this.b,this.c)},
$S:0}
A.aID.prototype={
$0(){return this.a.BY(this.b,this.c)},
$S:0}
A.aIE.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dF(B.dz(new A.aIB(),null,w),w)},
$S:0}
A.aIB.prototype={
$1(d){return F.DP},
$S:z+16}
A.aIF.prototype={
$0(){return B.q1(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aIG.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dF(B.dz(new A.aIA(),null,w),w)},
$S:0}
A.aIA.prototype={
$1(d){return D.aaJ},
$S:z+6}
A.aIH.prototype={
$0(){var w=this
return w.a.BZ(w.b,w.c,w.d)},
$S:0}
A.aIK.prototype={
$0(){return F.iA},
$S:80}
A.aIJ.prototype={
$2(d,e){return new A.Ja(B.e(d),null)},
$S:z+18}
A.aII.prototype={
$1(d){return new A.KA(d,null)},
$S:z+19}
A.aIz.prototype={
$1(d){var w=null,v=this.a,u=$.cI()
v=B.d("Die Finanzauswertung f\xfcr "+u.a3(v.a)+" \u2013 "+u.a3(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.f8(B.a([B.cs(C.b8,w,w,new A.aIx(u),w,w),B.cX(F.ku,new A.aIy(u),B.dL(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mO)},
$S:40}
A.aIx.prototype={
$0(){B.aC(this.a,!1).bq(!1)
return null},
$S:0}
A.aIy.prototype={
$0(){B.aC(this.a,!1).bq(!0)
return null},
$S:0}
A.boE.prototype={
$0(){var w=this.a.az(0,$.r8().ghS(),x.V),v=E.aIv()
w.uA(0,v)
return v},
$S:0}
A.boF.prototype={
$0(){var w=this.a.az(0,$.r8().ghS(),x.V),v=new B.aT(Date.now(),0,!1),u=new E.m4(B.bs(B.aS(v),1,1,0,0,0,0),v)
w.uA(0,u)
return u},
$S:0}
A.boG.prototype={
$0(){return this.a.JC(this.b,this.c)},
$S:0}
A.boD.prototype={
$2(d,e){return new B.p7(B.X(d).aSz(B.X(d).ax.aTr(C.h,C.n)),e,null)},
$S:1034}
A.bvB.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cx(),p=A.Px(!1,C.ly,"Umsatz 7 %",q.a3(r.a),u),o=A.Px(!1,C.ly,"Umsatz 19 %",q.a3(r.b),u),n=A.Px(!0,D.acy,"Umsatz netto",q.a3(r.c),u),m=r.d
m=A.Px(!1,D.acx,"Aufwand",E.bI5(m,E.bB7(t,"",m)),E.bT0(t,E.bB7(t,"",m)))
w=r.e
v=q.a3(w)
return E.aKZ(1.7,B.a([p,o,n,m,A.Px(!0,C.lw,"Ergebnis",v,w<0?C.R:C.aj),A.Px(!1,C.fD,"USt-Saldo",q.a3(r.f-r.r),u)],x.p),s,12,12,C.iy,!0)},
$S:137}
A.bvC.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dF(B.dz(new A.bvA(this.b),null,w),w)},
$S:0}
A.bvA.prototype={
$1(d){return new A.vv(this.a.a,null)},
$S:z+6}
A.aNA.prototype={
$0(){return D.ay9},
$S:80}
A.aNz.prototype={
$2(d,e){var w=null
return B.aZ(C.R,B.d("KPIs konnten nicht geladen werden: "+B.e(d),w,w,w,w,B.r(C.h,13,C.j),w,w,w),C.fq,w,C.w,w,w,3)},
$S:161}
A.aNy.prototype={
$1(d){return new A.Jw(d,null)},
$S:z+20}
A.bkO.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cx(),i=j.a3(k.c),h=l.w,g=l.d,f=B.al(g).i("ag<1,G>"),e=f.i("ax.E"),d=B.S(new B.ag(g,new A.bkD(),f),e)
i=A.jY(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a3(r.b)
w=B.S(new B.ag(g,new A.bkE(),f),e)
d=A.jY(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a3(k.e)
w=B.S(new B.ag(g,new A.bkF(),f),e)
k=A.jY(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aa(h.b,1)
v=B.S(new B.ag(g,new A.bkG(),f),e)
w=A.jY(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aa(h.a,1)
u=B.S(new B.ag(g,new A.bkH(),f),e)
v=A.jY(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aa(r.c,1)
t=B.S(new B.ag(g,new A.bkI(),f),e)
u=A.jY(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aa(h.c,1)
s=B.S(new B.ag(g,new A.bkJ(),f),e)
t=A.jY(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a3(h.d)
s=B.S(new B.ag(g,new A.bkK(),f),e)
h=A.jY(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a3(l.r.d)
m=B.S(new B.ag(g,new A.bkL(m),f),e)
m=A.jY(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a3(l)
l=B.S(new B.ag(g,new A.bkM(l),f),e)
l=A.jY(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aa(j,1)
j=B.S(new B.ag(g,new A.bkN(j),f),e)
return E.aKZ(n,B.a([i,d,k,w,v,u,t,h,m,l,A.jY(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iy,!0)},
$S:137}
A.bkD.prototype={
$1(d){return d.b},
$S:z+0}
A.bkE.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bkF.prototype={
$1(d){return d.d},
$S:z+0}
A.bkG.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bkH.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bkI.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bkJ.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bkK.prototype={
$1(d){return d.d},
$S:z+0}
A.bkL.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bkM.prototype={
$1(d){return this.a},
$S:z+0}
A.bkN.prototype={
$1(d){return this.a},
$S:z+0}
A.bkP.prototype={
$0(){return A.bI0(this.b,1.45,new A.Vx(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bkQ.prototype={
$0(){return A.bI0(this.b,1.6,new A.VO(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bA5.prototype={
$1(d){var w=this,v=null,u=B.aq(16),t=x.p,s=B.a([B.a8(B.a([B.aj(B.d(w.a,v,v,v,v,B.bE(C.h,18,C.r),v,v,v),1),B.eK(v,v,D.afg,v,v,new A.bA4(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.e,C.i,0,v,v)],t)
C.b.H(s,B.a([B.d(w.b,v,v,v,v,B.r(C.l,12,C.aD),v,v,v),C.D],t))
s.push(C.t)
s.push(B.bP(new B.mX(w.c,w.d,v),v,17976931348623157e292))
return B.NG(v,C.q,new B.aa(C.aq,B.a1(s,C.x,C.e,C.I),v),v,v,v,C.fy,C.mq,v,new B.d8(u,C.L),v)},
$S:1035}
A.bA4.prototype={
$0(){return B.aC(this.a,!1).eW()},
$S:0}
A.bkR.prototype={
$0(){var w=this.a,v=B.ah(w.c,"\xad",""),u=B.a([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bI0(this.b,2.4,new A.a_d(w.w,w.y,w.z,null),C.b.bS(u," \xb7 "),v)
return null},
$S:0}
A.bux.prototype={
$2(d,e){return d<e?d:e},
$S:48}
A.buy.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.buz.prototype={
$1(d){return A.aNL(null,1.4,null,C.R,0.35,D.akC,D.EN,null,!1,!1,!1,!1,D.Gn,!1,10,D.Zb,!0,C.lP,B.a([new A.eI(0,d),new A.eI(this.a,d)],x.U))},
$S:z+22}
A.b9C.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b9E.prototype={
$2(d,e){var w=null
return B.d(this.a.aN9(d),w,w,w,w,B.r(C.l,10,C.C),w,w,w)},
$S:z+24}
A.b9F.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vz
return new B.aa(C.lh,B.d(C.c.cR(this.a[v].a,5),w,w,w,w,B.r(C.l,9,C.C),w,w,w),w)},
$S:z+8}
A.b9D.prototype={
$1(d){return D.aaO},
$S:z+9}
A.baF.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.baG.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.baH.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.baI.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vz
return new B.aa(C.lh,B.d(this.a[v],w,w,w,w,B.r(C.h,12,C.r),w,w,w),w)},
$S:z+8}
A.blx.prototype={
$1(d){return d.d},
$S:z+12}
A.bly.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.bwW.prototype={
$1(d){return d.d},
$S:z+28}
A.bwX.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.b7w.prototype={
$0(){return D.ayh},
$S:80}
A.b7v.prototype={
$2(d,e){return new A.xk("Bilanzdaten nicht verf\xfcgbar: "+B.e(d),null)},
$S:z+29}
A.b7u.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.aZ(m,B.a1(B.a([B.d("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.r(C.h,14,C.C),m,m,m),C.D,B.d("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.r(C.l,12.5,C.j),m,m,m),C.t,B.jk(C.c9,B.a([B.ex(C.yM,D.aNm,new A.b7o(w,v),m),B.ex(D.aeO,D.aM1,new A.b7p(w,v),m)],u),C.d3,8,8)],u),C.x,C.e,C.i),C.a5,m,C.w,m,m,3)}w=new A.b7x(d)
t=C.b.eV(n.a.e.d,0,new A.b7q())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jD(new A.b7r(new A.b7y(w),r,w,s))
v=J.Q(d)
u=B.e(v.h(d,"as_of"))
v=J.f(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a1(B.a([w,C.D,B.a8(B.a([B.aj(B.d("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.r(C.l,11,C.j),m,m,m),1),B.kB(D.agj,D.aMs,new A.b7s(q,p),m),B.kB(D.afO,D.aMa,new A.b7t(q,p,d),m)],o),C.k,m,C.e,C.i,0,m,m)],o),C.ac,C.e,C.i)},
$S:226}
A.b7o.prototype={
$0(){return A.ayi(this.a,this.b,null)},
$S:0}
A.b7p.prototype={
$0(){return A.ayf(this.a,this.b)},
$S:0}
A.b7x.prototype={
$1(d){var w=B.aX(J.I(this.a,d))
return w==null?null:w},
$S:1036}
A.b7y.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aa(v,1)
w=B.ah(w,".",",")+" %"}return w},
$S:29}
A.b7q.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b7r.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jY(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ii,o.$1("liquidity1_pct")),m=A.jY(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ii,o.$1("liquidity2_pct")),l=A.jY(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ii,o.$1("liquidity3_pct"))
o=A.jY(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ii,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aa(w,1)
w=B.ah(w,".",",")+" %"}w=A.jY(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ii,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cx()
v=u.a3(v)
return E.aKZ(p,B.a([n,m,l,o,w,A.jY(s,s,!1,"Bilanzsumme",!1,"EK "+u.a3(t.d),s,s,s,C.ii,v)],x.p),q,12,12,C.iy,!0)},
$S:137}
A.b7s.prototype={
$0(){return A.ayf(this.a,this.b)},
$S:0}
A.b7t.prototype={
$0(){return A.ayi(this.a,this.b,this.c)},
$S:0}
A.bA3.prototype={
$1(d){return new A.BT(this.a,new A.bA2(this.b),this.c,null)},
$S:z+30}
A.bA2.prototype={
$0(){var w=this.a,v=$.bDV()
if(w.e==null)B.T(B.Z(y.b))
w.gck().c2(v)},
$S:0}
A.b7i.prototype={
$0(){},
$S:0}
A.b7j.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b7k.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b7m.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.b()
w=2
return B.j(B.lN(u.b,B.bs(2024,1,1,0,0,0,0),null,r,new B.aT(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.F(new A.b7l(s,t))
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.b7l.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b7n.prototype={
$0(){return B.aC(this.a,!1).eW()},
$S:0}
A.b7z.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ad(0)
t.m(0,v,B.a([u],x.t))},
$S:0}
A.b7A.prototype={
$1(d){return new A.yf(x.B.a(d),this.a.a.r)},
$S:z+34}
A.aB_.prototype={
$1(d){return d.e},
$S:z+35}
A.aB0.prototype={
$2(d,e){return d+e},
$S:48}
A.aB2.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.aB4.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdv(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.aB5.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.b()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.b()
w.eT(t,s)
u.afu(v.d,v.e)},
$S:0}
A.aAI.prototype={
$1(d){return 0},
$S:1037}
A.aAH.prototype={
$2(d,e){return B.f4(C.c0,this.a.ang(e),C.m,C.br,null)},
$S:1038}
A.b1E.prototype={
$1(d){return d.a},
$S:z+39}
A.b1F.prototype={
$1(d){return d.b},
$S:z+40}
A.b1G.prototype={
$1(d){return new A.k4(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b1H.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.n5||v===D.dX))t=1-t
return new A.k4(d,t*w.d)},
$S:z+42}
A.b1I.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goK(),p=d.a
r.goK()
r=$.lQ()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aa(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aa(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aa(v/1000,1)
t="K"}else{u=C.d.aa(v,r.alf(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.od(d,q.c.b.$2(p,new A.u_(u+t,s.e)))},
$S:z+43}
A.aXL.prototype={
$1(d){this.a.la(new A.a7r(d))},
$S:170}
A.aXM.prototype={
$1(d){this.a.la(new A.a7s(d))},
$S:47}
A.aXN.prototype={
$1(d){this.a.la(new A.a7t(d))},
$S:31}
A.aXO.prototype={
$0(){this.a.la(D.a2S)},
$S:0}
A.aXP.prototype={
$1(d){this.a.la(new A.Om())},
$S:49}
A.aXQ.prototype={
$1(d){this.a.la(new A.a7w(d))},
$S:46}
A.aXR.prototype={
$0(){this.a.la(D.a2T)},
$S:0}
A.aXS.prototype={
$1(d){this.a.la(new A.Op(d))},
$S:90}
A.aXT.prototype={
$1(d){this.a.la(new A.a7q(d))},
$S:173}
A.aXU.prototype={
$1(d){this.a.la(new A.a7p(d))},
$S:174}
A.aXV.prototype={
$1(d){return this.a.la(new A.Ok(d))},
$S:175}
A.aXW.prototype={
$1(d){return this.a.la(new A.a7u(d))},
$S:72}
A.aXX.prototype={
$1(d){return this.a.la(new A.On(d))},
$S:66}
A.bl2.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aT7(w==null?B.a([],x.t):w)},
$S:z+45}
A.bl0.prototype={
$0(){var w=this.a
C.b.ad(w.cy)
w.db.ad(0)},
$S:0}
A.bl1.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.S(q,x.dw)
C.b.fX(w,new A.bl_())
v=this.a
u=v.db
u.ad(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.a([r.e],t))}q=v.cy
C.b.ad(q)
q.push(new A.HG(w))},
$S:0}
A.bl_.prototype={
$2(d,e){return C.d.cE(e.b,d.b)},
$S:z+11}
A.bl3.prototype={
$1(d){return new A.zX(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aNM.prototype={
$1(d){return!d.k(0,D.h_)},
$S:z+3}
A.bAP.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bMU(t?A.bHL(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.u1(w,new A.z7(!0,A.bID(),new A.bAO(v)))},
$S:z+49}
A.bAO.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c1_(A.bHL(d,e,f),w,A.ca_(d,e,f))},
$S:z+50}
A.bAM.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.jb(v,v,u==null?D.dA:u,v,v,v,v,v,v,v,v,14,v,v,C.C,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rZ(C.d.j(d.b),w)},
$S:z+51}
A.aNO.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aNP.prototype={
$1(d){return!d.k(0,D.h_)},
$S:z+3}
A.aNT.prototype={
$2(d,e){return C.d.cE(e.c.b,d.c.b)},
$S:z+80}
A.aNR.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.b()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.b()
w.eT(v,u)},
$S:0}
A.aNS.prototype={
$0(){this.a.afu(this.b,this.c)},
$S:0}
A.aNU.prototype={
$2(d,e){return C.d.cE(d.w,e.w)},
$S:z+11}
A.aAT.prototype={
$1(d){return d.gdv(0)},
$S:z+54}
A.aAU.prototype={
$2(d,e){return d+e},
$S:48}
A.aAX.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j3(v,B.al(v).i("j3<1>")).aF(0,new A.aAY(w,this.a/(u+1),this.c))},
$S:0}
A.aAY.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdv(0)/2
this.c[d]=v
w.a=v+e.gdv(0)/2},
$S:z+4}
A.aAV.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdv(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdv(0)/2},
$S:z+4}
A.aAW.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdv(0)/2
this.c[d]=u
u+=e.gdv(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aKY.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aEc.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.Ma.prototype
w.a1g=w.ih
w.anz=w.aUP
w.anA=w.afn
w=A.V5.prototype
w.aqb=w.l
w=A.Mj.prototype
w.a1h=w.ih
w=A.He.prototype
w.a20=w.a_b})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cdC","c0W",56)
var q
v(q=A.V7.prototype,"gaGS","aGT",31)
v(q,"gaFP","IS",10)
v(q,"gaGB","J2",10)
u(A.V8.prototype,"gauf","aug",33)
t(A,"cco",3,null,["$3"],["bZd"],57,0)
t(A,"ccp",3,null,["$3"],["bZe"],58,0)
t(A,"ccq",3,null,["$3"],["bZf"],59,0)
t(A,"ccs",4,null,["$4"],["cdf"],60,0)
w(A,"ccr","cde",61)
s(A,"bI4","cdg",62)
t(A,"ccj",3,null,["$3"],["c10"],63,0)
w(A,"a1u","cfG",64)
w(A,"ayl","cdj",9)
t(A,"ccl",3,null,["$3"],["c1N"],65,0)
t(A,"ccn",3,null,["$3"],["c74"],66,0)
t(A,"cck",3,null,["$3"],["c1M"],67,0)
t(A,"ccm",3,null,["$3"],["c73"],68,0)
w(A,"cmY","c1L",69)
w(A,"cmZ","c72",70)
r(A.a_1.prototype,"ga5P","aA6",38)
u(A.XK.prototype,"gaBn","aBo",44)
t(A,"cev",3,null,["$3"],["c2e"],71,0)
t(A,"ceu",3,null,["$3"],["bZg"],72,0)
w(A,"cey","cfH",3)
t(A,"bTG",4,null,["$5$size","$4"],["bS0",function(d,e,f,g){return A.bS0(d,e,f,g,null)}],73,0)
s(A,"bID","cfF",74)
s(A,"bTH","cc5",75)
s(A,"bTK","cdm",76)
s(A,"bTJ","cdi",5)
s(A,"bTI","cdh",5)
w(A,"cex","bTh",78)
w(A,"cew","bTg",79)
t(A,"a1B",3,null,["$3"],["cet"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.A,[A.a9_,A.an3,A.xg,A.JC,A.ak3,A.xp,A.aiB,A.aoh,A.K8,A.KA,A.aiz,A.Ja,A.Jw,A.any,A.aoV,A.Wp,A.a_d,A.Vx,A.VO,A.aps,A.alp,A.D0,A.avA,A.xk,A.Mb,A.Bf])
u(B.C,[A.vw,A.Fa,A.bp,A.ajK,A.ajA,A.ajC,A.ajD,A.ajs,A.anh,A.ajG,A.ajE,A.aBe,A.avE,A.aB1,A.ajB,A.Mj,A.a83,A.u_,A.atV,A.atU,A.ajr,A.ang,A.eI,A.and,A.anf,A.arV,A.ao8,A.awp,A.ane,A.amL,A.anc,A.aAG,A.bkX,A.aAJ,A.ajo,A.od,A.an9,A.ana,A.wj,A.hE,A.ap5,A.ap8,A.ajx,A.ajM,A.ajy,A.anb,A.apb,A.ap9,A.avD,A.atT,A.aNN,A.ap7,A.w1,A.a3B,A.api,A.a3L,A.b59])
u(B.vs,[A.pW,A.ov,A.qH,A.w5,A.x2,A.aDA,A.aEL,A.ow,A.DA,A.oy])
u(B.oi,[A.aIr,A.aIs,A.aIt,A.aIu,A.aIN,A.bB0,A.bB1,A.bD_,A.bB2,A.bAZ,A.bB_,A.bAY,A.bgw,A.bgy,A.bgt,A.bld,A.blf,A.blh,A.blj,A.aIB,A.aIA,A.aII,A.aIz,A.bvA,A.aNy,A.bkD,A.bkE,A.bkF,A.bkG,A.bkH,A.bkI,A.bkJ,A.bkK,A.bkL,A.bkM,A.bkN,A.bA5,A.buz,A.b9D,A.baF,A.baG,A.blx,A.bwW,A.b7u,A.b7x,A.b7y,A.bA3,A.b7A,A.aB_,A.aB2,A.aAI,A.b1E,A.b1F,A.b1G,A.b1H,A.b1I,A.aXL,A.aXM,A.aXN,A.aXP,A.aXQ,A.aXS,A.aXT,A.aXU,A.aXV,A.aXW,A.aXX,A.bl2,A.bl3,A.aNM,A.bAP,A.bAO,A.bAM,A.aNO,A.aNP,A.aAT,A.aEc])
t(A.z3,B.fS)
u(B.yv,[A.aIq,A.aIp,A.bgB,A.bgv,A.bgx,A.bgu,A.bgA,A.bgp,A.bgq,A.bgr,A.bgs,A.aIL,A.aIC,A.aID,A.aIE,A.aIF,A.aIG,A.aIH,A.aIK,A.aIx,A.aIy,A.boE,A.boF,A.boG,A.bvC,A.aNA,A.bkP,A.bkQ,A.bA4,A.bkR,A.b7w,A.b7o,A.b7p,A.b7s,A.b7t,A.bA2,A.b7i,A.b7j,A.b7k,A.b7m,A.b7l,A.b7n,A.b7z,A.aB5,A.aXO,A.aXR,A.bl0,A.bl1,A.aNR,A.aNS,A.aAX])
t(A.vv,B.b7)
u(B.J9,[A.xm,A.aAR,A.ag0,A.DS,A.aHG,A.aNB,A.OP])
t(A.an4,B.vj)
u(B.yw,[A.bgz,A.ble,A.blg,A.bli,A.aIJ,A.boD,A.bvB,A.aNz,A.bkO,A.bux,A.buy,A.b9C,A.b9E,A.b9F,A.baH,A.baI,A.bly,A.bwX,A.b7v,A.b7q,A.b7r,A.aB0,A.aB4,A.aAH,A.bl_,A.aNT,A.aNU,A.aAU,A.aAY,A.aAV,A.aAW,A.aKY])
u(B.yD,[A.z4,A.aqK,A.a90,A.ajw])
u(B.H,[A.BT,A.T2])
u(B.V,[A.V7,A.a_1])
u(B.FB,[A.Mf,A.PK])
u(B.v1,[A.V8,A.XK])
t(A.a39,A.ajK)
t(A.ajn,A.a39)
t(A.a2U,A.ajn)
u(A.a2U,[A.ajz,A.ap6])
t(A.oe,A.ajz)
t(A.fY,A.ajA)
t(A.iy,A.ajC)
t(A.mY,A.ajD)
t(A.a30,A.ajs)
t(A.Oq,A.anh)
u(A.Oq,[A.ajF,A.apa])
t(A.a35,A.ajF)
t(A.a36,A.ajG)
t(A.DT,A.ajE)
u(A.aBe,[A.Mg,A.PM])
t(A.ag2,A.avE)
t(A.ajH,A.ag2)
t(A.a37,A.ajH)
u(B.b9,[A.yf,A.zX])
t(A.v7,A.ajB)
t(A.Ma,A.Mj)
u(A.Ma,[A.aB3,A.aNQ])
u(B.PF,[A.a33,A.a9c])
u(B.L,[A.He,A.ajp])
u(A.He,[A.ad7,A.adk])
t(A.qx,A.atV)
t(A.aez,A.atU)
t(A.pz,A.ajr)
t(A.vy,A.ang)
t(A.z8,A.and)
t(A.pX,A.anf)
t(A.RA,A.arV)
t(A.nj,A.ao8)
t(A.nI,A.awp)
u(A.pX,[A.ao7,A.awo])
t(A.l6,A.ao7)
t(A.ly,A.awo)
t(A.a7o,A.ane)
u(A.a7o,[A.ao6,A.awn])
t(A.a8e,A.ao6)
t(A.agq,A.awn)
t(A.Oa,A.amL)
t(A.vx,A.anc)
t(A.Oj,A.vx)
t(A.aeA,B.fO)
t(A.ajq,A.ajp)
t(A.V5,A.ajq)
t(A.a2V,A.V5)
t(A.k4,A.ajo)
t(A.a7l,A.an9)
t(A.a7n,A.ana)
u(A.hE,[A.a7r,A.a7s,A.a7t,A.Ol,A.Om,A.a7w,A.Oo,A.Op,A.a7q,A.a7p,A.Ok,A.a7u,A.a7v,A.On])
t(A.qa,A.ap6)
t(A.ei,A.ap5)
t(A.PL,A.ap8)
t(A.a32,A.ajx)
t(A.mZ,A.ajM)
t(A.Me,A.ajy)
t(A.z7,A.anb)
t(A.FM,A.apa)
t(A.a9d,A.apb)
t(A.ap4,A.eI)
t(A.nm,A.ap4)
t(A.qF,A.nm)
t(A.rZ,A.ap9)
t(A.u1,A.avD)
t(A.HG,A.atT)
t(A.zY,A.ap7)
t(A.A1,A.api)
w(A.ajs,A.bp)
w(A.ajz,A.bp)
w(A.ajA,A.bp)
w(A.ajC,A.bp)
w(A.ajD,A.bp)
w(A.ajE,A.bp)
w(A.ajF,A.bp)
w(A.ajG,A.bp)
w(A.ajH,A.bp)
w(A.ajB,A.bp)
w(A.ajn,A.bp)
w(A.ajr,A.bp)
w(A.amL,A.bp)
w(A.anc,A.bp)
w(A.and,A.bp)
w(A.anf,A.bp)
w(A.ang,A.bp)
w(A.ao7,A.bp)
w(A.ao6,A.bp)
w(A.ao8,A.bp)
w(A.arV,A.bp)
w(A.atU,A.bp)
w(A.atV,A.bp)
w(A.avE,A.bp)
w(A.awo,A.bp)
w(A.awn,A.bp)
w(A.awp,A.bp)
w(A.ajo,A.bp)
v(A.ajp,B.aG)
w(A.ajq,B.e_)
v(A.V5,B.a6m)
w(A.ajK,A.bp)
w(A.an9,A.bp)
w(A.ana,A.bp)
w(A.anh,A.bp)
w(A.ajx,A.bp)
w(A.ajy,A.bp)
w(A.ajM,A.bp)
w(A.anb,A.bp)
w(A.ane,A.bp)
w(A.ap4,A.bp)
w(A.ap5,A.bp)
w(A.ap6,A.bp)
w(A.ap8,A.bp)
w(A.ap9,A.bp)
w(A.apa,A.bp)
w(A.apb,A.bp)
w(A.atT,A.bp)
w(A.avD,A.bp)
w(A.ap7,A.bp)
w(A.api,A.bp)})()
B.bxa(b.typeUniverse,JSON.parse('{"a9_":{"A":[],"c":[]},"Fa":{"aIw":[]},"z3":{"fS":["bm<~>"],"fS.T":"bm<~>"},"vv":{"b7":[],"H":[],"c":[]},"JC":{"A":[],"c":[]},"xp":{"A":[],"c":[]},"an4":{"V":["vv"]},"an3":{"A":[],"c":[]},"xg":{"A":[],"c":[]},"ak3":{"A":[],"c":[]},"KA":{"A":[],"c":[]},"Ja":{"A":[],"c":[]},"z4":{"b7":[],"H":[],"c":[]},"aiB":{"A":[],"c":[]},"aoh":{"A":[],"c":[]},"aqK":{"b7":[],"H":[],"c":[]},"K8":{"A":[],"c":[]},"aiz":{"A":[],"c":[]},"Jw":{"A":[],"c":[]},"xk":{"A":[],"c":[]},"BT":{"H":[],"c":[]},"a90":{"b7":[],"H":[],"c":[]},"any":{"A":[],"c":[]},"aoV":{"A":[],"c":[]},"Wp":{"A":[],"c":[]},"a_d":{"A":[],"c":[]},"Vx":{"A":[],"c":[]},"VO":{"A":[],"c":[]},"aps":{"A":[],"c":[]},"alp":{"A":[],"c":[]},"D0":{"A":[],"c":[]},"avA":{"A":[],"c":[]},"ajw":{"b7":[],"H":[],"c":[]},"V7":{"V":["BT"]},"Mf":{"H":[],"c":[]},"V8":{"V":["Mf"]},"oe":{"bp":[]},"fY":{"bp":[]},"iy":{"bp":[]},"mY":{"bp":[]},"DT":{"bp":[]},"yf":{"b9":["oe"],"bf":["oe"],"bf.T":"oe","b9.T":"oe"},"a30":{"bp":[]},"a35":{"bp":[]},"a36":{"bp":[]},"a37":{"bp":[]},"v7":{"bp":[]},"a33":{"b3":[],"c":[]},"ad7":{"L":[],"O":[],"jG":[],"b1":[]},"pX":{"bp":[]},"nj":{"bp":[]},"nI":{"bp":[]},"l6":{"bp":[]},"ly":{"bp":[]},"vx":{"bp":[]},"a2U":{"bp":[]},"qx":{"bp":[]},"aez":{"bp":[]},"pz":{"bp":[]},"vy":{"bp":[]},"z8":{"bp":[]},"ag2":{"bp":[]},"RA":{"bp":[]},"a8e":{"bp":[]},"agq":{"bp":[]},"Oa":{"bp":[]},"Oj":{"bp":[]},"Mb":{"A":[],"c":[]},"T2":{"H":[],"c":[]},"a_1":{"V":["T2"]},"k4":{"bp":[]},"aeA":{"fO":[],"b3":[],"c":[]},"a2V":{"e_":["L","hF"],"L":[],"aG":["L","hF"],"O":[],"b1":[],"aG.1":"hF","e_.1":"hF","aG.0":"L"},"Bf":{"A":[],"c":[]},"a39":{"bp":[]},"a7l":{"bp":[]},"Oq":{"bp":[]},"a7n":{"bp":[]},"a7r":{"hE":[]},"a7s":{"hE":[]},"a7t":{"hE":[]},"Ol":{"hE":[]},"Om":{"hE":[]},"a7w":{"hE":[]},"Oo":{"hE":[]},"Op":{"hE":[]},"a7q":{"hE":[]},"a7p":{"hE":[]},"Ok":{"hE":[]},"a7u":{"hE":[]},"a7v":{"hE":[]},"On":{"hE":[]},"He":{"L":[],"O":[],"jG":[],"b1":[]},"PK":{"H":[],"c":[]},"XK":{"V":["PK"]},"qa":{"bp":[]},"ei":{"bp":[]},"mZ":{"bp":[]},"nm":{"eI":[],"bp":[]},"qF":{"nm":[],"eI":[],"bp":[]},"rZ":{"bp":[]},"u1":{"bp":[]},"HG":{"bp":[]},"zX":{"b9":["qa"],"bf":["qa"],"bf.T":"qa","b9.T":"qa"},"PL":{"bp":[]},"a32":{"bp":[]},"Me":{"bp":[]},"z7":{"bp":[]},"a7o":{"bp":[]},"FM":{"bp":[]},"a9d":{"bp":[]},"zY":{"bp":[]},"a9c":{"b3":[],"c":[]},"adk":{"L":[],"O":[],"jG":[],"b1":[]},"A1":{"bp":[]}}'))
B.bRs(b.typeUniverse,JSON.parse('{"Ma":1,"Oq":1,"Mj":1,"He":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ay
return{_:w("DA"),e:w("bm<ov>"),cn:w("bm<ow>"),aN:w("bm<oy>"),fM:w("bm<a7<i,@>?>"),c:w("bm<~>"),W:w("k4"),B:w("oe"),dB:w("fY"),T:w("v7"),fj:w("iy"),G:w("mY"),bO:w("mZ"),k:w("aw"),cX:w("a3L<G>"),dO:w("vf"),R:w("a9<i,@>"),j:w("hA"),bz:w("m_<aT>"),f0:w("oo"),E:w("bp"),F:w("z3"),aI:w("pW"),m:w("ov"),X:w("ow"),P:w("m4"),D:w("vw"),a:w("aIw"),d:w("oy"),cw:w("eI"),L:w("hF"),o:w("dG<w,F>"),cm:w("l6"),dv:w("nj"),M:w("E<od>"),I:w("E<bLv>"),O:w("E<fY>"),Y:w("E<iy>"),U:w("E<eI>"),K:w("E<a83>"),u:w("E<ei>"),bC:w("E<w1>"),aA:w("E<v<eI>>"),v:w("E<ek>"),r:w("E<HG>"),s:w("E<i>"),eg:w("E<tX>"),df:w("E<qF>"),p:w("E<c>"),n:w("E<G>"),t:w("E<w>"),eF:w("br<V<H>>"),Z:w("nm"),cz:w("ei"),hf:w("qa"),dj:w("zY"),fT:w("rZ"),c_:w("iC<pk<bm<~>>>"),x:w("A1<fY>"),y:w("A1<ei>"),J:w("v<w>"),ef:w("w5"),b:w("a7<i,@>"),f:w("a7<@,@>"),gj:w("ag<G,G>"),w:w("kl"),aU:w("C"),Q:w("wj<oe>"),C:w("wj<qa>"),dc:w("ek"),eo:w("qn"),gJ:w("qo"),V:w("ky<m4>"),N:w("i"),A:w("nD"),bP:w("bc"),er:w("tX"),fB:w("x2"),dw:w("qF"),bY:w("u1"),cZ:w("qH"),gc:w("jg"),es:w("ly"),bN:w("nI"),l:w("c"),q:w("xF"),g4:w("is<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("w"),bn:w("yf?"),f3:w("zX?"),g:w("v<@>?"),h:w("a7<i,@>?"),fF:w("a7<@,@>?"),cK:w("C?"),aD:w("jg?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BO=new B.lT(C.n,B.ay("lT<F>"))
D.BV=new A.DS(0,"left")
D.n5=new A.DS(1,"top")
D.BW=new A.DS(2,"right")
D.dX=new A.DS(3,"bottom")
D.aCt=new A.qx(!1,A.bI4(),22,null)
D.kN=new A.pz(16,null,D.aCt,!0)
D.aaP=new A.pX(C.J,null,2,null)
D.wx=new A.Me(!1,D.aaP,A.cey(),!0)
D.a0H=new A.aAR(3,"spaceEvenly")
D.a0R=new B.yj(6,"dstIn")
D.Yv=new B.b4(3,3)
D.BZ=new B.dc(D.Yv,D.Yv,C.aa,C.aa)
D.a12=new B.bo(C.J,0,C.V,-1)
D.Cy=new A.a7n()
D.a2S=new A.Ol()
D.a2T=new A.Oo()
D.aWs=new A.aez()
D.a8M=new B.bA(8e6)
D.apH=w([],B.ay("E<l6>"))
D.apI=w([],B.ay("E<ly>"))
D.EJ=new A.Oa(D.apH,D.apI,!0)
D.aas=new B.dF("Zeitraum",!1,null)
D.aay=new B.dF("Konten (SKR 03)",!1,null)
D.ye=new A.aHG(0,"center")
D.aaJ=new A.vv(null,null)
D.aWH=new A.z7(!0,A.bID(),A.bTG())
D.EN=new A.z7(!1,A.bID(),A.bTG())
D.EO=new A.z8(!1,!0,null,A.ayl(),A.a1u(),!0,null,A.ayl(),A.a1u())
D.aWI=new A.z8(!0,!0,null,A.ayl(),A.a1u(),!0,null,A.ayl(),A.a1u())
D.a5g=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.o)
D.a50=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.o)
D.a5q=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.o)
D.a5k=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.o)
D.a4H=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.o)
D.a4G=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.o)
D.a5P=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.o)
D.a59=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.o)
D.a5S=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.o)
D.a5M=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.o)
D.aw6=new B.dG([50,D.a5g,100,D.a50,200,D.a5q,300,D.a5k,400,D.a4H,500,D.a4G,600,D.a5P,700,D.a59,800,D.a5S,900,D.a5M],x.o)
D.dA=new B.t3(D.aw6,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.o)
D.alF=w([8,4],x.t)
D.aaN=new A.pX(D.dA,null,0.4,D.alF)
D.aaO=new A.pX(C.a8,null,0.5,null)
D.h_=new A.eI(0/0,0/0)
D.aCv=new A.qx(!0,A.bI4(),44,null)
D.n6=new A.pz(16,null,D.aCv,!0)
D.aCu=new A.qx(!0,A.bI4(),30,null)
D.n7=new A.pz(16,null,D.aCu,!0)
D.aaQ=new A.vy(!1,D.n6,D.n7,D.n6,D.n7)
D.aWJ=new A.vy(!0,D.n6,D.n7,D.n6,D.n7)
D.aMB=new B.a6("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.abo=new B.dY(D.aMB,null,null)
D.EW=new A.OP(0,"left")
D.abz=new A.OP(1,"center")
D.EX=new A.OP(2,"right")
D.abD=new B.a5(57495,"MaterialIcons",null,!1)
D.abR=new B.a5(58040,"MaterialIcons",null,!0)
D.yw=new B.a5(58927,"MaterialIcons",null,!1)
D.acx=new B.a5(59005,"MaterialIcons",null,!0)
D.acy=new B.a5(59007,"MaterialIcons",null,!0)
D.adH=new B.a5(62589,"MaterialIcons",null,!1)
D.acU=new B.a5(61349,"MaterialIcons",null,!1)
D.aeK=new B.ar(D.acU,20,C.h,null,null)
D.aeM=new B.ar(F.yy,18,null,null,null)
D.aeO=new B.ar(D.yw,18,null,null,null)
D.afa=new B.ar(C.on,14,C.R,null,null)
D.afg=new B.ar(C.ia,null,C.h,null,null)
D.afh=new B.ar(C.ib,null,C.l,null,null)
D.afO=new B.ar(C.jz,16,null,null,null)
D.afW=new B.ar(C.yG,16,null,null,null)
D.ag0=new B.ar(F.lv,null,C.R,null,null)
D.agc=new B.ar(F.FD,16,null,null,null)
D.agj=new B.ar(D.yw,16,null,null,null)
D.aiY=new A.a90(null)
D.aWO=new A.aNB(0,"horizontal")
D.yU=new A.zY(0,0,0,0,!1)
D.Gn=new A.PL(0.5)
D.CE=new A.a9d()
D.aja=new A.FM(D.CE,A.bTK(),10,A.bTH(),!0,A.bTJ(),A.bTI(),!1,null,null,null)
D.aWQ=new A.FM(D.CE,A.bTK(),10,A.bTH(),!0,A.bTJ(),A.bTI(),!0,null,null,null)
D.akC=w([4,3],x.t)
D.aAz=new B.aF("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aAm=new B.aF("receivables","Forderungen (kurzfristig)")
D.aA9=new B.aF("inventory_value","Vorr\xe4te (Warenbestand)")
D.aA6=new B.aF("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.azT=new B.aF("fixed_assets","Anlageverm\xf6gen")
D.aA0=new B.aF("current_liabilities","Kurzfristige Verbindlichkeiten")
D.aAt=new B.aF("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aAl=new B.aF("equity","Eigenkapital")
D.q9=w([D.aAz,D.aAm,D.aA9,D.aA6,D.azT,D.aA0,D.aAt,D.aAl],B.ay("E<+(i,i)>"))
D.aWT=w([],x.M)
D.apu=w([],x.O)
D.apv=w([],x.Y)
D.apw=w([],B.ay("E<mY>"))
D.apx=w([],B.ay("E<mZ>"))
D.aWU=w([],x.U)
D.aWV=w([],x.u)
D.apy=w([],x.r)
D.awM={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.U9={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zA=new B.a9(D.U9,[0,0,0,0,0,0,0,C.aW],B.ay("a9<i,C>"))
D.awJ={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aw0=new B.a9(D.awJ,[0,0,0,0],B.ay("a9<i,w>"))
D.ax0={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.atA=new B.a9(D.ax0,[0,0,0,0,null,null,null,null],B.ay("a9<i,w?>"))
D.att=new B.a9(D.awM,[D.zA,D.zA,D.zA,C.aW,C.aW,C.aW,D.aw0,D.atA],x.R)
D.atN=new B.a9(D.U9,[0,0,0,0,0,0,0,C.bL],x.R)
D.awN={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.atP=new B.a9(D.awN,[8500,1200,3400,300,22e3,4200,9000,22200],B.ay("a9<i,G>"))
D.axa={total:0,rows:1}
D.atS=new B.a9(D.axa,[0,C.bL],x.R)
D.awI={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aw1=new B.a9(D.awI,[0,0,0,0,0,0,0,C.bL],x.R)
D.axe={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aw2=new B.a9(D.axe,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ay("a9<i,i>"))
D.a5Y=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.o)
D.a65=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.o)
D.a4K=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.o)
D.a5c=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.o)
D.a5m=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.o)
D.a6l=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.o)
D.a4v=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.o)
D.a5e=new B.F(1,0,0.592156862745098,0.6549019607843137,C.o)
D.a5p=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.o)
D.a5N=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.o)
D.aw7=new B.dG([50,D.a5Y,100,D.a65,200,D.a4K,300,D.a5c,400,D.a5m,500,D.a6l,600,D.a4v,700,D.a5e,800,D.a5p,900,D.a5N],x.o)
D.TV=new B.t3(D.aw7,1,0,0.7372549019607844,0.8313725490196079,C.o)
D.a9G=new B.af(32,32,32,32)
D.ay9=new B.aa(D.a9G,C.bG,null)
D.ayh=new B.aa(C.aq,C.bG,null)
D.apJ=w([],B.ay("E<nj>"))
D.apK=w([],B.ay("E<nI>"))
D.Yx=new A.RA(D.apJ,D.apK)
D.aBo=new B.eP("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aBq=new B.eP("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aBv=new B.eP("Automaten-Business","Umsatz je Automat",null,null)
D.aBz=new B.eP("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aBB=new B.eP("Top","Meistverkaufte Produkte",null,null)
D.aBE=new B.eP("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aBF=new B.eP("Kennzahlen","Rentabilit\xe4t",null,null)
D.Zb=new B.tF(C.N,C.v,0)
D.aKp=new B.a6("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aEg=new B.d6(D.aKp,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aN9=new B.a6('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aEl=new B.d6(D.aN9,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aKI=new B.a6("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aEm=new B.d6(D.aKI,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aN1=new B.a6("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aEo=new B.d6(D.aN1,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aMo=new B.a6("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aEp=new B.d6(D.aMo,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aMl=new B.a6("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aEU=new B.d6(D.aMl,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.m,null)
D.aX4=new B.W(!0,C.J,null,null,null,null,14,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKC=new B.a6("Demo",null,null,null,null,null,null,null,null,null)
D.aKV=new B.a6("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aM1=new B.a6("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aMa=new B.a6("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aMs=new B.a6("sevDesk",null,null,null,null,null,null,null,null,null)
D.aNm=new B.a6("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_v=new A.ag0(0,"auto")
D.aOa=new A.ag0(1,"top")
D.aSY=new A.xk("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aSZ=new A.xk("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bw=new A.xm(0,"alle")
D.a_V=new A.xm(1,"aufwand")
D.a_W=new A.xm(2,"erloes")
D.a_X=new A.xm(3,"privat")
D.aTT=new A.xp('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.l,C.ib,null)
D.adU=new B.a5(984570,"MaterialIcons",null,!1)
D.aTU=new A.xp("Keine Buchung passt zu dieser Auswahl.",C.l,D.adU,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cnr","bY_",()=>B.j5(new A.bB0(),x.D))
w($,"cns","a22",()=>B.j5(new A.bB1(),x.a))
w($,"cos","r8",()=>B.bGI(new A.bD_(),x.P))
w($,"cnt","bDX",()=>C.aM.$1$1(new A.bB2(),x.d))
w($,"cnp","bDW",()=>C.aM.$1$1(new A.bAZ(),x.m))
w($,"cnq","bKo",()=>C.aM.$1$1(new A.bB_(),x.X))
w($,"cno","bDV",()=>C.aM.$1$1(new A.bAY(),x.h))
w($,"cnn","bDU",()=>B.b2u(A.cdC(),x.F,x.c))
w($,"cgt","bDr",()=>new A.aAG())
v($,"cjP","lQ",()=>new A.b59())})()};
(a=>{a["+3MHfZMLm1/u9wbVgymzky0HnAg="]=a.current})($__dart_deferred_initializers__);