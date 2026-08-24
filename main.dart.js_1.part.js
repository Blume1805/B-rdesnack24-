((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oy(d,e,f,g,h){return new A.a7H(f,g,d,h,e,null)},
a7H:function a7H(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
v7:function v7(d){this.a=d},
Ei:function Ei(d){this.a=d},
bV0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z8
w=x.f
v=x.N
u=x.z
t=A.aGv(B.cZ(w.a(e.h(a0,"current")),v,u))
s=A.aGv(B.cZ(w.a(e.h(a0,"prior_year")),v,u))
r=A.aGv(B.cZ(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c1
p=J.cU(p,new A.aGd(),x.cZ)
p=B.Q(p,p.$ti.i("at.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c1
o=J.cU(o,new A.aGe(),x.ef)
o=B.Q(o,o.$ti.i("at.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c1
q=J.cU(q,new A.aGf(),x.j)
q=B.Q(q,q.$ti.i("at.E"))
n=B.cZ(w.a(e.h(a0,"customer")),v,u)
m=B.b_(n.h(0,"purchases_count"))
m=m==null?null:C.d.Z(m)
if(m==null)m=0
l=A.pd(n.h(0,"app_gross"))
k=B.b_(n.h(0,"active_customers"))
k=k==null?null:C.d.Z(k)
if(k==null)k=0
n=A.pd(n.h(0,"avg_basket"))
u=B.cZ(w.a(e.h(a0,"derived")),v,u)
v=A.pd(u.h(0,"gross_margin_pct"))
e=A.pd(u.h(0,"net_margin_pct"))
w=A.pd(u.h(0,"ebitda_margin_pct"))
j=A.pd(u.h(0,"cashflow_operating"))
i=A.btL(u.h(0,"revenue_growth_yoy_pct"))
h=A.btL(u.h(0,"revenue_growth_mom_pct"))
g=A.btL(u.h(0,"result_growth_yoy_pct"))
u=A.btL(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.a2(d,"days"))
f=f==null?null:C.d.Z(f)
if(f==null)f=1
return new A.oj(t,s,r,p,o,q,new A.aBn(m,l,k,n),new A.aCv(v,e,w,j,i,h,g,u),f)},
pd(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.an(d))
return w==null?0:w},
btL(d){if(d==null)return null
if(typeof d=="number")return d
return B.iV(J.an(d))},
qs:function qs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vJ:function vJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wF:function wF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBn:function aBn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCv:function aCv(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oj:function oj(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aGd:function aGd(){},
aGe:function aGe(){},
aGf:function aGf(){},
aGv(d){var w=J.Y(d),v=A.uq(w.h(d,"revenue_net_7")),u=A.uq(w.h(d,"revenue_net_19")),t=A.uq(w.h(d,"revenue_net")),s=A.uq(w.h(d,"expense_net")),r=A.uq(w.h(d,"result_net")),q=A.uq(w.h(d,"vat_collected")),p=A.uq(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.c1
w=J.cU(w,new A.aGw(),x._)
w=B.Q(w,w.$ti.i("at.E"))
return new A.ok(v,u,t,s,r,q,p,w)},
uq(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.an(d))
return w==null?0:w},
CP:function CP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ok:function ok(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aGw:function aGw(){},
bV_(d){return new A.yz(d,new B.is(x.c_),C.dP)},
buy:function buy(){},
buz:function buz(){},
bwq:function bwq(){},
buA:function buA(){},
bux:function bux(){},
buw:function buw(){},
yz:function yz(d,e,f){this.r=d
this.a=e
this.f=f},
aGc:function aGc(d,e,f){this.a=d
this.b=e
this.c=f},
aGb:function aGb(d,e,f){this.a=d
this.b=e
this.c=f},
bV1(){return new A.yA(null)},
amE(d,e,f,g,h){return new A.amD(e,h,g,f,d,null)},
yA:function yA(d){this.a=d},
aGu:function aGu(d){this.a=d},
aGm:function aGm(d,e,f){this.a=d
this.b=e
this.c=f},
aGn:function aGn(d,e,f){this.a=d
this.b=e
this.c=f},
aGo:function aGo(d){this.a=d},
aGl:function aGl(){},
aGp:function aGp(d){this.a=d},
aGq:function aGq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGt:function aGt(){},
aGs:function aGs(){},
aGr:function aGr(){},
aGk:function aGk(d,e){this.a=d
this.b=e},
aGi:function aGi(d){this.a=d},
aGj:function aGj(d){this.a=d},
ahe:function ahe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amD:function amD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aoU:function aoU(d,e){this.e=d
this.a=e},
bj2:function bj2(d){this.a=d},
bj3:function bj3(d){this.a=d},
bj4:function bj4(d,e,f){this.a=d
this.b=e
this.c=f},
bj1:function bj1(){},
Jb:function Jb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JB:function JB(d,e){this.c=d
this.a=e},
bpK:function bpK(d){this.a=d},
ahc:function ahc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ii:function Ii(d,e){this.c=d
this.a=e},
bBm(d,e,f,g,h){var w=null
return B.jc(w,w,!0,w,new A.btG(h,g,e,f),d,w,!0,!0,x.H)},
jQ(d,e,f,g,h,i,j,k,l,m,n){return new A.ana(g,n,i,e,d,m,f,k,l,j,null)},
aw5(d,e){return A.c4A(d,e)},
c4A(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aw5=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.aAM)
t=4
o=e.aI(0,$.bW(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fY("finance-balance-sync",B.A(n,n)),$async$aw5)
case 7:r=g
q=B.cZ(x.f.a(r.a),x.N,n)
l.Mu()
if(J.d(J.a2(q,"configured"),!1)){l.be(D.aAQ)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bxj()
if(e.e==null)B.S(B.X(y.b))
e.gce().c7(o)
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Mu()
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$aw5,v)},
aw8(d,e,f){var w=0,v=B.q(x.H)
var $async$aw8=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jc(null,null,!0,null,new A.btE(f,e,e.aI(0,$.bW(),x.A)),d,null,!0,!0,x.H),$async$aw8)
case 2:return B.o(null,v)}})
return B.p($async$aw8,v)},
a7I:function a7I(d){this.a=d},
aLr:function aLr(){},
aLq:function aLq(){},
aLp:function aLp(){},
ID:function ID(d,e){this.c=d
this.a=e},
bg5:function bg5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfV:function bfV(){},
bfW:function bfW(){},
bfX:function bfX(){},
bfY:function bfY(){},
bfZ:function bfZ(){},
bg_:function bg_(){},
bg0:function bg0(){},
bg1:function bg1(){},
bg2:function bg2(d){this.a=d},
bg3:function bg3(d){this.a=d},
bg4:function bg4(d){this.a=d},
bg6:function bg6(d,e){this.a=d
this.b=e},
bg7:function bg7(d,e){this.a=d
this.b=e},
btG:function btG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btF:function btF(d){this.a=d},
alV:function alV(d){this.a=d},
ana:function ana(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bg8:function bg8(d,e){this.a=d
this.b=e},
Vh:function Vh(d,e,f){this.c=d
this.d=e
this.a=f},
YZ:function YZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boP:function boP(){},
boQ:function boQ(){},
boR:function boR(d){this.a=d},
Ur:function Ur(d,e,f){this.c=d
this.d=e
this.a=f},
b6G:function b6G(){},
b6I:function b6I(d){this.a=d},
b6J:function b6J(d){this.a=d},
b6H:function b6H(){},
UI:function UI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7G:function b7G(){},
b7H:function b7H(){},
b7I:function b7I(){},
b7J:function b7J(d){this.a=d},
anG:function anG(d,e){this.c=d
this.a=e},
bgI:function bgI(){},
bgJ:function bgJ(){},
ajW:function ajW(d,e){this.c=d
this.a=e},
Cg:function Cg(d,e,f){this.c=d
this.d=e
this.a=f},
atx:function atx(d,e){this.c=d
this.a=e},
br1:function br1(){},
br2:function br2(){},
wW:function wW(d,e){this.c=d
this.a=e},
ai7:function ai7(d,e){this.e=d
this.a=e},
b56:function b56(){},
b55:function b55(){},
b54:function b54(d,e,f){this.a=d
this.b=e
this.c=f},
b4Z:function b4Z(d,e){this.a=d
this.b=e},
b5_:function b5_(d,e){this.a=d
this.b=e},
b57:function b57(d){this.a=d},
b58:function b58(d){this.a=d},
b50:function b50(){},
b51:function b51(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b52:function b52(d,e){this.a=d
this.b=e},
b53:function b53(d,e,f){this.a=d
this.b=e
this.c=f},
btE:function btE(d,e,f){this.a=d
this.b=e
this.c=f},
btD:function btD(d){this.a=d},
Bg:function Bg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U3:function U3(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4T:function b4T(){},
b4U:function b4U(d){this.a=d},
b4V:function b4V(d){this.a=d},
b4X:function b4X(d,e){this.a=d
this.b=e},
b4W:function b4W(d,e){this.a=d
this.b=e},
b4Y:function b4Y(d){this.a=d},
bj:function bj(){},
bEO(d){return new A.Ld(d,C.am,C.bX,null,null)},
Ld:function Ld(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
U4:function U4(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ef$=f
_.c4$=g
_.c=_.a=null},
b59:function b59(d,e){this.a=d
this.b=e},
b5a:function b5a(d){this.a=d},
ayF(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amu:f,p=a0==null?16:a0,o=d==null?D.a_A:d,n=g==null,m=n?A.bxK(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xx:a3
n=n?A.bxK(r,r,r,r,r,r,r,r):g
w=j==null?D.E2:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.K:e
return new A.o1(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BV,s,w,i,n)},
ayM(d,e,f,g,h){var w=d==null?D.amv:d,v=e==null?2:e,u=g==null?C.lz:g
return new A.fK(h,f===!0,w,v,u)},
bSh(d,e,f){var w=d.a
w=C.d.aM(w+(e.a-w)*f)
return A.ayM(A.kE(d.c,e.c,f,A.c5l(),x.fj),B.af(d.d,e.d,f),!1,A.kE(d.e,e.e,f,A.a0i(),x.S),w)},
a1L(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SX
else w=h
v=m==null
u=v?8:m
t=$.lF()
s=t.aXL(f,v?8:m)
t=t.aXM(g,v?8:m)
v=d==null?A.bEM(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.amw:k)},
bSi(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.af(d.e,e.e,f),q=B.mR(d.f,e.f,f),p=A.kE(d.r,e.r,f,A.a0i(),x.S),o=B.bZ(d.w,e.w,f),n=B.af(d.a,e.a,f),m=B.af(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.af(w.b,v.b,f)
t=B.af(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1L(A.bEM(v,u,null,!1,t),p,q,o,s,n,null,A.kE(d.y,e.y,f,A.c5m(),x.G),m,r)},
bSj(d,e,f){var w,v,u=B.af(d.a,e.a,f)
u.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mP(u,w,v,B.bZ(d.d,e.d,f))},
bEM(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dv
else w=d
return new A.a1H(g===!0,v,u,w,f)},
bxK(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1N(4,C.fN,16,D.xM,0,120,A.c5o(),!1,!1,D.Zt,0,C.J,A.c5n())
else w=k
v=j==null?C.l3:j
return new A.a1M(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c6b(d,e,f,g){var w=null,v=B.j2(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D6(C.d.j(f.b),v)},
c6a(d){return A.aAM(D.dv,15)},
o1:function o1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayE:function ayE(d,e){this.a=d
this.b=e},
fK:function fK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayN:function ayN(){},
ayO:function ayO(){},
ip:function ip(d,e,f,g,h,i,j,k,l,m){var _=this
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
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1H:function a1H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1M:function a1M(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aeG:function aeG(d,e){this.a=d
this.b=e},
a1N:function a1N(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D6:function D6(d,e){this.a=d
this.b=e},
Le:function Le(d){this.a=d},
a1O:function a1O(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xM:function xM(d,e){this.a=d
this.b=e},
ai3:function ai3(){},
aia:function aia(){},
aib:function aib(){},
aid:function aid(){},
aie:function aie(){},
aif:function aif(){},
aig:function aig(){},
aih:function aih(){},
aii:function aii(){},
ayP:function ayP(d){this.a=d},
ayQ:function ayQ(){},
uM:function uM(d,e,f){this.a=d
this.b=e
this.c=f},
aic:function aic(){},
ayR:function ayR(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayS:function ayS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayT:function ayT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6L:function a6L(d){this.b=d},
a1K:function a1K(d,e,f){this.d=d
this.e=e
this.a=f},
abQ:function abQ(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Y=i
_.bD=_.aF=_.aj=_.ar=$
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
c6c(d,e){var w=null
return new A.S0(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ayx(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.af(w.c,v.c,f)
u.toString
return new A.pm(t,e.b,new A.qh(v.a,v.b,u,B.af(w.d,v.d,f)),!0)},
bGa(d,e,f){var w=A.ayx(d.b,e.b,f),v=A.ayx(d.d,e.d,f),u=A.ayx(d.e,e.e,f)
return new A.v9(e.a,w,A.ayx(d.c,e.c,f),v,u)},
bV3(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.af(d.a,e.a,f)
w.toString
v=B.af(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bG8(d,e,f){return new A.yC(e.a,!0,B.af(d.c,e.c,f),e.d,e.e,e.f,B.af(d.r,e.r,f),e.w,e.x)},
c8A(d){return!0},
c6f(d){return D.a9d},
bG9(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pJ(w,f,g,e)},
bI7(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5h(),x.dv)
v.toString
w=A.kE(d.b,e.b,f,A.c5j(),x.bN)
w.toString
return new A.Qz(v,w)},
bVQ(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rr(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n8(t,w,v,u)},
c06(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rr(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nw(t,w,v,u)},
bVP(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pD(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bVN(B.bxD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rr(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0i(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c05(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pD(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c03(B.bxD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rr(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0i(),x.S)
if(u==null)u=v==null?C.E:null
return new A.ln(r,e.f,e.r,t,e.x,u,v,w,s)},
bVN(d,e,f,g,h,i){return new A.a6W(f,!1,g,i,d,e)},
bVO(d){return C.d.ai(d.e,1)},
c03(d,e,f,g,h,i){return new A.af5(f,!1,g,i,d,e)},
c04(d){return C.d.ai(d.e,1)},
bG4(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5g(),x.cm)
v.toString
w=A.kE(d.b,e.b,f,A.c5i(),x.es)
w.toString
return new A.Na(v,w,!0)},
bV2(d,e,f){return new A.Nj(d,e==null?4:e,f)},
a1A:function a1A(){},
D5:function D5(d,e){this.a=d
this.b=e},
tH:function tH(d,e){this.r=d
this.w=e},
qh:function qh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adf:function adf(){},
pm:function pm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v9:function v9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB:function eB(d,e){this.a=d
this.b=e},
yC:function yC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pJ:function pJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeI:function aeI(){},
Qz:function Qz(d,e){this.a=d
this.b=e},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kW:function kW(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ln:function ln(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6W:function a6W(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
af5:function af5(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Na:function Na(d,e,f){this.a=d
this.b=e
this.c=f},
v8:function v8(){},
Nj:function Nj(d,e,f){this.a=d
this.b=e
this.c=f},
ahZ:function ahZ(){},
ai2:function ai2(){},
alg:function alg(){},
alA:function alA(){},
alB:function alB(){},
alD:function alD(){},
alE:function alE(){},
amt:function amt(){},
ams:function ams(){},
amu:function amu(){},
aq4:function aq4(){},
arX:function arX(){},
arY:function arY(){},
atB:function atB(){},
aui:function aui(){},
auh:function auh(){},
auj:function auj(){},
ayt:function ayt(){},
L7:function L7(){},
L8:function L8(d,e,f){this.c=d
this.d=e
this.a=f},
ayv:function ayv(d){this.a=d},
ayu:function ayu(d){this.a=d},
S0:function S0(d,e,f){this.c=d
this.e=e
this.a=f},
YN:function YN(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZB(d,e,f){var w=B.ag(f),v=w.i("ac<1,jY>")
v=B.Q(new B.ac(f,new A.b_n(),v),v.i("at.E"))
w=w.i("ac<1,c>")
w=B.Q(new B.ac(f,new A.b_o(),w),w.i("at.E"))
return new A.adg(e,d,v,w,null)},
bSf(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7y(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tE(v,C.av,C.x,new B.kx(1),v,v,v,v,C.bD,v)
u=new A.a1B(f,d,e,u,t,!0,0,v,v,new B.br(),B.aK(x.g))
u.bl()
return u},
adg:function adg(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_n:function b_n(){},
b_o:function b_o(){},
a1B:function a1B(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.Wo$=h
_.aTD$=i
_.dq$=j
_.ah$=k
_.dR$=l
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
bge:function bge(d,e){this.a=d
this.b=e},
ayw:function ayw(){},
jY:function jY(d,e){this.a=d
this.b=e},
o0:function o0(d,e){this.a=d
this.b=e},
ai_:function ai_(){},
ai0:function ai0(){},
ai1:function ai1(){},
U1:function U1(){},
AH:function AH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_p:function b_p(d){this.a=d},
b_q:function b_q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_r:function b_r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a62(d,e){var w=d==null?B.cl(C.E,1):d
return new A.a61(e!==!1,w)},
a1Q:function a1Q(){},
a61:function a61(d,e){this.a=d
this.b=e},
Nq:function Nq(){},
a63:function a63(){},
az1:function az1(){},
aFr:function aFr(d,e){this.a=d
this.b=e},
ail:function ail(){},
alx:function alx(){},
aly:function aly(){},
alF:function alF(){},
Lh:function Lh(){},
vU:function vU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hw:function hw(){},
a67:function a67(d){this.a=d},
a68:function a68(d){this.a=d},
a69:function a69(d){this.a=d},
Nl:function Nl(){},
Nm:function Nm(){},
a6c:function a6c(d){this.a=d},
No:function No(){},
Np:function Np(d){this.a=d},
a66:function a66(d){this.a=d},
a65:function a65(d){this.a=d},
Nk:function Nk(d){this.a=d},
a6a:function a6a(d){this.a=d},
a6b:function a6b(d){this.a=d},
Nn:function Nn(d){this.a=d},
Gn:function Gn(){},
aVC:function aVC(d){this.a=d},
aVD:function aVD(d){this.a=d},
aVE:function aVE(d){this.a=d},
aVF:function aVF(d){this.a=d},
aVG:function aVG(d){this.a=d},
aVH:function aVH(d){this.a=d},
aVI:function aVI(d){this.a=d},
aVJ:function aVJ(d){this.a=d},
aVK:function aVK(d){this.a=d},
aVL:function aVL(d){this.a=d},
aVM:function aVM(d){this.a=d},
aVN:function aVN(d){this.a=d},
aVO:function aVO(d){this.a=d},
OL:function OL(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ww:function Ww(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ef$=g
_.c4$=h
_.c=_.a=null},
bgk:function bgk(d,e){this.a=d
this.b=e},
bgi:function bgi(d){this.a=d},
bgj:function bgj(d,e){this.a=d
this.b=e},
bgh:function bgh(){},
bgl:function bgl(d){this.a=d},
bz2(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.K:d
return new A.pX(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SX:u
else w=g
v=f==null?A.ayD(!1,u,0,u,!1,D.w7):f
w=new A.ea(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayD(!1,u,0,u,!1,D.w7):d,j,a0,i,s,!1,p)
w.arA(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bWg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.af(d.x,e.x,f)
m.toString
w=A.bEN(d.ay,e.ay,f)
v=A.bEN(d.ch,e.ch,f)
u=B.af(d.as,e.as,f)
u.toString
t=e.CW
s=A.kE(d.cy,e.cy,f,A.a0i(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rr(d.w,e.w,f)
p=A.kE(d.a,e.a,f,A.c5f(),x.cw)
p.toString
o=B.bIG(d.db,e.db,f)
o.toString
n=B.af(d.dy.a,e.dy.a,f)
n.toString
return A.aLC(v,m,w,r,e.z,s,new A.yB(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OM(n),!1,u,o,!0,e.cx,p)},
ayD(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aM(127.5),D.dv.A()>>>16&255,D.dv.A()>>>8&255,D.dv.A()&255):null
else w=e
return new A.a1J(h,w,g,i,f,!1)},
bEN(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rr(v.b,u.b,f),r=B.af(v.c,u.c,f)
r.toString
r=A.bG9(t,A.kE(v.d,u.d,f,A.a0i(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rr(d.c,e.c,f)
v=B.af(d.e,e.e,f)
v.toString
return A.ayD(!1,s,v,u,e.a,new A.Lc(!1,r,w.c,!0))},
bSk(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rr(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aM(127.5),D.dv.A()>>>16&255,D.dv.A()>>>8&255,D.dv.A()&255):null
return new A.mQ(e.a,e.b,w,v)},
c8B(d){return!0},
bB7(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jv)return A.bBW(w.a,A.byH(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dv:w},
c2Z(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jv)w=A.bBW(v.a,A.byH(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dv}return A.aAM(w,40)},
bLc(d,e,f,g,h){var w,v=A.bB7(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jv)w=A.bBW(u.a,A.byH(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dv}u=A.aAM(w,40)
return new A.Nj(v,h==null?4:h,u)},
c8z(d,e){return!0},
c52(d,e){return Math.abs(d.a-e.a)},
c6i(d,e){var w=J.cU(e,new A.bun(d),x.bY)
w=B.Q(w,w.$ti.i("at.E"))
return w},
c6e(d,e){return-1/0},
c6d(d,e){return d.a[e].b},
bMm(d){var w=J.cU(d,new A.buk(),x.fT)
w=B.Q(w,w.$ti.i("at.E"))
return w},
bMl(d){return A.aAM(D.dv,15)},
pX:function pX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ea:function ea(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aLD:function aLD(){},
OM:function OM(d){this.a=d},
a1J:function a1J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mQ:function mQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Lc:function Lc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yB:function yB(d,e,f){this.a=d
this.b=e
this.c=f},
aLs:function aLs(d,e){this.a=d
this.b=e},
a64:function a64(){},
EV:function EV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bun:function bun(d){this.a=d},
bum:function bum(d){this.a=d},
a7V:function a7V(){},
buk:function buk(){},
nb:function nb(){},
qq:function qq(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rE:function rE(d,e){this.a=d
this.b=e},
tI:function tI(d,e){this.a=d
this.b=e},
GP:function GP(d){this.a=d},
ON:function ON(d){this.a=d},
zn:function zn(d,e){this.a=d
this.b=e},
ai8:function ai8(){},
ai9:function ai9(){},
aim:function aim(){},
alz:function alz(){},
alC:function alC(){},
ani:function ani(){},
anj:function anj(){},
ank:function ank(){},
anm:function anm(){},
ann:function ann(){},
ano:function ano(){},
anp:function anp(){},
arW:function arW(){},
atA:function atA(){},
aLE:function aLE(d){this.a=d},
aLF:function aLF(){},
aLG:function aLG(){},
zo:function zo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
anl:function anl(){},
aLH:function aLH(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLK:function aLK(){},
aLI:function aLI(d,e,f){this.a=d
this.b=e
this.c=f},
aLJ:function aLJ(d,e,f){this.a=d
this.b=e
this.c=f},
aLL:function aLL(){},
vF:function vF(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7U:function a7U(d,e,f){this.d=d
this.e=e
this.a=f},
ac2:function ac2(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Y=i
_.bD=_.aF=_.aj=_.ar=$
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
bxJ(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ag(o),l=new B.ac(o,new A.ayG(),m.i("ac<1,F>")).jJ(0,new A.ayH()),k=e-l,j=new A.ayK(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iU(o,m.i("iU<1>")).aB(0,new A.ayI(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iU(o,m.i("iU<1>")).aB(0,new A.ayJ(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayG:function ayG(){},
ayH:function ayH(){},
ayK:function ayK(d,e,f){this.a=d
this.b=e
this.c=f},
ayL:function ayL(d,e,f){this.a=d
this.b=e
this.c=f},
ayI:function ayI(d,e,f){this.a=d
this.b=e
this.c=f},
ayJ:function ayJ(d,e,f){this.a=d
this.b=e
this.c=f},
byH(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iU(w,B.ag(w).i("iU<1>")).aB(0,new A.aIH(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIH:function aIH(d,e){this.a=d
this.b=e},
aBZ(d,e){var w,v
if(e!=null){w=B.ag(e).i("ac<1,F>")
v=B.Q(new B.ac(e,new A.aC_(),w),w.i("at.E"))
return A.c65(d,new A.a2o(v,x.C))}else return d},
aC_:function aC_(){},
c_d(d,e){var w=!0
if(d!==C.f8)if(!(d===C.av&&e===C.x))w=d===C.iz&&e===C.b1
if(w)return D.Ef
else{w=!0
if(d!==C.hx)if(!(d===C.iz&&e===C.x))w=d===C.av&&e===C.b1
if(w)return D.Eg
else return D.a9U}},
NP:function NP(d,e){this.a=d
this.b=e},
a2e:function a2e(d,e){this.a=d
this.b=e},
zs:function zs(d,e){this.a=d
this.$ti=e},
anw:function anw(){},
c65(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.am(),i=x.v,h=B.b([],i),g=new B.cm(j.r,C.ag,k,k,h)
for(j=B.N4(d),w=B.b([],x.I),v=new B.N6(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fC('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.N5(v,r)
v.De()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.De()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eo(B.b([],i),!0,s)
p=new B.Kt(new B.cm(t,p,k,new B.aqr([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2o:function a2o(d,e){this.a=d
this.b=0
this.$ti=e},
b2U:function b2U(){},
byv(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bSn(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gen(v)===0){v=d.a.a
if(v.gen(v)===0){v=d.b.a
if(v.gen(v)===0){v=d.c.a
v=v.gen(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAM(d,e){var w=1-e/100
return B.aH(d.gfH(d),C.d.aM(d.gNX()*w),C.d.aM(d.gGc()*w),C.d.aM(d.gKp()*w))},
bG7(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ah(v,u,t,w?d.b.c.b:0)},
byw(d){var w=d.a,v=w?A.b_m(d.b):0,u=w?A.b_m(d.c):0,t=w?A.b_m(d.d):0
return new B.ah(v,u,t,w?A.b_m(d.e):0)},
bXu(d){var w
if(d.c===0){d.seX(null)
w=B.c3(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bzp(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.seX(f.mM(0,g))}else{w=e==null?C.K:e
d.r=w.gq(w)
d.seX(null)}},
b_m(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kE(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kc(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kc(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c7n(d,e,f){return C.d.aM(d+(e-d)*f)},
bBW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kc(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7H.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aL:C.n
r=r?C.m:C.a4
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bX(t.x,C.m,s,18),C.aO],w))
v.push(B.as(new B.dI(t.c,!1,s),1))
v=B.ai(v,C.A,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.i(t.d,s,1,C.ak,s,B.bz(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.bm(r,B.a7(w,C.A,C.ij,C.i),q,s,C.al,s,s,3)}}
A.v7.prototype={
LL(d){return this.aTC(d)},
aTC(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eo("finance_summary",B.a6(["p_from",E.rl(d.a),"p_to",E.rl(d.b)],s,r),r),$async$LL)
case 3:q=f
if(q==null){u=D.aqD
w=1
break}if(x.f.b(q)){u=B.cZ(q,s,r)
w=1
break}u=D.asR
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LL,v)},
LK(d){return this.aTB(d)},
aTB(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LK=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eo("finance_kpis",B.a6(["p_from",E.rl(d.a),"p_to",E.rl(d.b)],s,r),r),$async$LK)
case 3:q=f
if(x.f.b(q)){u=B.cZ(q,s,r)
w=1
break}u=D.aqj
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LK,v)},
pG(d){return this.ari(d)},
ari(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("sevdesk-sync",B.a6(["from",E.rl(d.a),"to",E.rl(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.Z(B.fr(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LG(d){return this.aTs(d)},
aTs(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("finance-export-pdf",B.a6(["from",E.rl(d.a),"to",E.rl(d.b)],s,s)),$async$LG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aF(J.a2(r,"base64"))
w=1
break}throw B.e(B.dW("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LG,v)}}
A.Ei.prototype={
G6(d){return this.akk(d)},
akk(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G6=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LL(d),$async$G6)
case 7:q=f
o=A.aGv(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HI(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G6,v)},
G1(d){return this.ak5(d)},
ak5(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G1=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LK(d),$async$G1)
case 7:q=f
o=A.bV0(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HI(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G1,v)},
pG(d){return this.arj(d)},
arj(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pG=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pG(d),$async$pG)
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
p=r.HI(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LF(d){return this.aTr(d)},
aTr(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LF=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LG(d),$async$LF)
case 7:q=f
o=C.iV.cG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HI(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LF,v)},
HI(d){if(d instanceof B.yw)return d
if(d instanceof B.mh){if(d.b==="42501")return new B.vY(d.a)
return new B.tm(d.a)}if(d instanceof B.ND)return new B.tm("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B8("Unerwarteter Fehler: "+B.j(d))},
$iaGh:1}
A.qs.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vJ.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wF.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBn.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCv.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oj.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CP.prototype={
gbw(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ok.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yz.prototype={
H2(d){return this.arh(0)},
arh(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H2=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sea(0,C.dC)
s=t.r
r=s.aI(0,$.xA(),x.P)
p.a=null
w=3
return B.k(B.pl(new A.aGc(p,t,r),x.H),$async$H2)
case 3:t.sea(0,f)
q=t.f
if(q.ghu(q)==null){q=$.bxk()
s=s.e
s===$&&B.a()
s.c7(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H2,v)},
LE(){return this.aTq()},
aTq(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LE=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sea(0,C.dC)
s=t.r.aI(0,$.xA(),x.P)
q.a=null
w=3
return B.k(B.pl(new A.aGb(q,t,s),x.H),$async$LE)
case 3:t.sea(0,e)
r=t.f
u=r.ghu(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LE,v)}}
A.yA.prototype={
dg(d,e){var w=null,v=e.al($.xA(),x.P),u=e.al($.bxk(),x.aN)
return B.tb(B.dn(B.b([new B.fT("Finanzen","Dashboard",new A.ahe(e.al($.bxi(),x.b).gje(),new A.aGm(this,d,e),new A.aGn(this,d,e),new A.aGo(d),new A.aGp(d),new A.aGq(this,d,e,v),w),w),C.aF,new A.aoU(v,w),C.c9,D.ag2,C.c9,B.dd(u,new A.aGr(),new A.aGs(),new A.aGt(),!1,!0,!1,x.d,x.l)],x.p),w,C.cO,w,C.F,!1),C.m,new A.aGu(e))},
Jx(d,e){return this.aM2(d,e)},
aM2(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jx=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bxi()
w=3
return B.k(e.aI(0,s.ghP(),x.F).H2(0),$async$Jx)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghu(s)
t=d.P(x.q).f
t.be(B.c2(null,null,null,null,null,C.r,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jx,v)},
Bp(d,e){return this.axn(d,e)},
axn(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bp=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bxi().ghP(),x.F).LE(),$async$Bp)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.aAS)
w=1
break}t=B.oJ(C.v,10)
w=4
return B.k($.bOz().u2(s,"finanzauswertung.pdf",t,null,null,null),$async$Bp)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bp,v)},
Bq(d,e,f){return this.aJC(d,e,f)},
aJC(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bq=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jc(null,null,!0,null,new A.aGk(f,d),d,null,!0,!0,x.cJ),$async$Bq)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nW(e.aI(0,$.bW(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zB("finance_period",p,o,B.a6(["period_from",p.ek()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bq)
case 8:if(d.e!=null)d.P(x.q).f.be(F.v9)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bq,v)}}
A.ahe.prototype={
p(d){var w=this,v=null,u=A.amE(C.m,F.i0,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.amE(v,D.abQ,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.amE(v,D.y4,v,s?v:w.d,"sevDesk synchronisieren"),q=A.amE(C.aa,C.jl,C.aa,s?v:w.e,"PDF-Export")
return B.ai(B.b([u,C.aO,t,C.aO,r,C.aO,q,C.aO,A.amE(C.ac,C.fR,C.ac,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.G,0,v,v)}}
A.amD.prototype={
p(d){var w,v=this,u=null,t=B.ax(12),s=B.ax(12),r=B.ax(12),q=v.w
if(q==null)q=C.a4
q=B.cl(q,1)
w=v.r
if(w==null)w=C.h
return B.wE(B.dE(!1,C.X,!0,t,B.ex(!1,s,!0,B.aQ(u,B.bX(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a8,0,u,u,u,u,u,C.bp),u,v.d,u,u)}}
A.aoU.prototype={
dg(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bm(w,B.a7(B.b([D.a8V,C.I,B.ai(B.b([D.acI,C.ar,B.as(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.kv(C.ck,B.b([new A.Jb("Monat",new A.bj2(e),w,w),new A.Jb("Jahr (YTD)",new A.bj3(e),w,w),new A.Jb("Zeitraum w\xe4hlen \u2026",new A.bj4(this,d,e),D.aaQ,w)],t),C.dA,6,8)],t),C.A,C.f,C.i),w,w,C.D,w,w,3)},
IT(d,e){return this.aIw(d,e)},
aIw(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awr(new A.bj1(),d,B.bU(B.b0(t)-5,1,1,0,0,0,0),new B.lQ(s.a,s.b,x.bz),B.bU(B.b0(t)+1,1,1,0,0,0,0),C.e5),$async$IT)
case 2:r=g
if(r!=null)e.aI(0,$.xA().ghP(),x.V).uk(0,new E.lW(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IT,v)}}
A.Jb.prototype={
p(d){var w=null,v=B.ax(9999),u=B.ax(9999),t=B.ax(9999),s=B.cl(C.a4,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bX(p,C.h,w,14),C.aO],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dE(!1,C.X,!0,v,B.ex(!1,u,!0,B.aQ(w,B.ai(q,C.j,w,C.f,C.G,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.B),w,w,w,w,C.hU,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a8,0,w,w,w,w,w,C.bp)}}
A.JB.prototype={
p(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ju(new A.bpK(this)),C.c9,D.a90,C.t],r),p=this.c.w
if(p.length===0)q.push(B.bm(s,B.ai(B.b([D.ad9,C.aq,B.as(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.p,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.i,0,s,s),C.a8,s,C.D,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.K)(p),++u){t=p[u]
C.b.K(w,B.b([new A.ahc(t.a,t.b,t.c==="revenue",t.d,s),C.I],r))}q.push(B.a7(w,C.j,C.f,C.i))}return B.a7(q,C.a9,C.f,C.i)}}
A.ahc.prototype={
p(d){var w=this,v=null,u=w.e,t=u?C.aL:C.a8,s=B.cl(u?C.m:C.a4,1),r=B.ax(4),q=w.c
r=B.aQ(C.U,B.i(C.c.a1(q,0,1),v,v,v,v,B.bz(C.h,14,C.o),v,v,v),C.q,v,v,new B.aD(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ak,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.as(B.a7(B.b([q,B.i(t,v,v,v,v,B.y(C.p,12,C.l),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dr().ap(w.f)
return B.bm(v,B.ai(B.b([r,C.aq,t,B.i(q,v,v,v,v,B.y(u?C.ac:C.h,15,C.H),v,v,v)],s),C.j,v,C.f,C.i,0,v,v),v,v,C.d6,v,v,3)}}
A.Ii.prototype={
p(d){var w=null
return B.bm(C.aa,B.ai(B.b([D.adI,C.aq,B.as(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fi,w,C.D,w,w,3)}}
A.a7I.prototype={
dg(d,e){return B.dd(e.al($.bR2(),x.e),new A.aLp(),new A.aLq(),new A.aLr(),!1,!0,!1,x.X,x.l)}}
A.ID.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ayc,C.t,B.ju(new A.bg5(v,q,100-t.w.a,w,p)),C.t,new A.alV(u),C.aF,D.ayb,C.t,new A.ai7(t,u),C.aF,D.ay5,C.t,B.bA(u,!0,u,B.k9(u,B.bm(u,new A.Ur(t,220,u),u,u,C.D,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bg6(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aF,D.axZ,C.t,B.bA(u,!0,u,B.k9(u,new A.UI(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bg7(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aF,D.ay2,C.t,new A.anG(t,u),C.aF,D.ay0,C.t,new A.ajW(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aF,D.ay7,C.t,new A.atx(t,u)],s))
return B.a7(r,C.a9,C.f,C.i)}}
A.alV.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.p,11,C.l).cB(1.35),w,w,w)}}
A.ana.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.aa:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bg8(m,d):l
r=x.p
q=B.b([B.as(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.p,10,C.o).fv(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cl(C.aa,0.8)
n=B.ax(4)
q.push(B.aQ(l,B.i("Ziel "+p,l,l,l,l,B.y(C.aa,9,C.o),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.B),l,l,l,l,C.nv,l,l,l))}q=B.b([B.ai(q,C.j,l,C.f,C.i,0,l,l),C.aX,B.Nh(C.d0,B.i(m.d,l,l,l,l,B.bz(w,22,C.o),l,l,l),C.hI)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ak,l,B.y(C.p,10,C.aE),l,l,l))
q.push(C.cX)
q.push(B.ai(B.b([new A.Vh("Vormonat",m.r,l),C.cz,new A.Vh("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cX)
q.push(B.as(new A.YZ(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.k9(l,B.bm(l,B.a7(q,C.A,C.f,C.i),l,l,C.bY,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.Vh.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ax(4)
return B.aQ(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.p,9,C.o),r,r,r),C.q,r,r,new B.aD(C.a4,r,r,q,r,r,C.B),r,r,r,r,C.nv,r,r,r)}w=q>=0
v=w?C.ac:C.aa
u=v.el(0.12)
t=B.cl(v,0.7)
s=B.ax(4)
return B.aQ(r,B.ai(B.b([B.bX(w?F.aa_:D.a9Z,v,r,10),C.YL,B.i(this.c+" "+C.d.ai(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.j,r,C.f,C.G,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.B),r,r,r,r,C.nv,r,r,r)}}
A.YZ.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.jJ(j,new A.boP())
t=C.b.jJ(j,new A.boQ())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boR(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a62(k,!1)
w=B.b([A.aLC(k,2,A.ayD(!1,C.m.el(0.16),0,k,!0,D.w7),C.m,0.35,k,D.E6,k,!0,!1,!0,!1,D.Fs,!1,10,D.Yd,!0,C.lz,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OL(A.bz2(k,k,k,D.amx,l,D.BV,D.E2,D.E7,w,D.agf,k,m,k,n,D.Xx,D.amy,D.a9g),C.am,C.a1,k,k)}}
A.Ur.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aNR
w=C.b.fL(p,0,new A.b6G())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayM(B.b([A.a1L(q,q,D.Bm,q,C.m,q,q,q,r.b,6),A.a1L(q,q,D.Bm,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bEO(A.ayF(q,q,u,q,q,A.a62(q,!1),q,new A.yC(!0,!0,q,new A.b6H(),A.a0c(),!1,q,A.awb(),A.a0c()),q,v,q,q,new A.v9(!0,new A.pm(16,q,new A.qh(!0,new A.b6I(this),46,q),!0),D.kw,D.kw,new A.pm(16,q,new A.qh(!0,new A.b6J(p),26,q),!0)))),this.d,q)},
aLi(d){if(Math.abs(d)>=1000)return C.d.ai(d/1000,1)+" k"
return C.d.ai(d,0)}}
A.UI.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ac(v,new A.b7G(),w),x.i)
C.b.K(o,new B.ac(u,new A.b7H(),w))
t=C.b.fL(o,0,new A.b7I())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayM(B.b([A.a1L(q,q,q,q,C.m,q,q,q,v[s],14),A.a1L(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bEO(A.ayF(q,q,n,q,q,A.a62(q,!1),q,D.E7,q,o,q,q,new A.v9(!0,D.kw,D.kw,D.kw,new A.pm(16,q,new A.qh(!0,new A.b7J(p),26,q),!0)))),this.d,q)
return this.e?r:B.bm(q,r,q,q,C.D,q,q,3)}}
A.anG.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aNQ
w=new B.ac(l,new A.bgI(),B.ag(l).i("ac<1,F>")).jJ(0,new A.bgJ())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.K)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dr()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hW(C.ai,C.f,C.i,C.j,m,C.aQ,m,0,B.b([new B.jq(1,C.dj,B.a7(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,m,B.y(C.p,12,C.aE),m,m,m)],v),C.A,C.f,C.i),m),C.ar,B.i(p.ap(o),m,m,m,m,B.bz(C.h,16,C.o),m,m,m)],v),m),C.cX,new B.Du(new B.d5(n,n,n,n),C.by,B.zp(C.a4,m,8,C.d.bo(o/w,0,1),D.Bb),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.M(r)===B.M(q)&&B.a0g(r.gbw(),q.gbw())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bm(m,B.a7(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.ajW.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.as(new A.Cg("Aktive Kunden",""+s,u),1)
w=B.as(new A.Cg("K\xe4ufe",""+t.a,u),1)
v=$.dr()
return B.bm(u,B.ai(B.b([s,w,B.as(new A.Cg("\xd8-Warenkorb",v.ap(t.d),u),1),B.as(new A.Cg("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.Cg.prototype={
p(d){var w=null
return B.a7(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.p,10,C.o).fv(0.6),w,w,w),C.ba,B.i(this.d,w,w,w,w,B.bz(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.G)}}
A.atx.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ac(q,new A.br1(),B.ag(q).i("ac<1,F>")).jJ(0,new A.br2()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.K)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hW(C.ai,C.f,C.i,C.j,r,C.aQ,r,0,B.b([new B.jq(1,C.dj,B.i(u.b,r,1,C.ak,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.p,12,C.H),r,r,r),B.i($.dr().ap(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aX,new B.Du(new B.d5(s,s,s,s),C.by,B.zp(C.a4,r,6,C.d.bo(t/p,0,1),D.Bb),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.M(u)===B.M(s)&&B.a0g(u.gbw(),s.gbw())
else s=!0
if(!s)t.push(C.I)
C.b.K(n,t)}return B.bm(r,B.a7(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.wW.prototype={
p(d){var w=null
return B.bm(w,B.i(this.c,w,w,w,w,B.y(C.p,13,C.l),w,w,w),C.a8,w,C.D,w,w,3)}}
A.ai7.prototype={
dg(d,e){return B.dd(e.al($.bxj(),x.fM),new A.b54(this,d,e),new A.b55(),new A.b56(),!1,!0,!1,x.h,x.l)}}
A.Bg.prototype={
U(){return new A.U3()},
aYo(){return this.d.$0()}}
A.U3.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.ew(J.an(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pH[t].a
if(v)r=""
else{r=B.b_(J.a2(w,s))
if(r==null)r=null
r=C.d.ai(r==null?0:r,2)
r=B.b5(r,".",",")}u.m(0,s,new B.bK(new B.cW(r,C.bL,C.aU),$.al()))}q.e!==$&&B.aY()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ci(v,v.r,v.e,B.l(v).i("ci<2>"))
while(v.u()){w=v.d
w.T$=$.al()
w.S$=0}this.an()},
rv(d){var w=this.e
w===$&&B.a()
w=C.c.aS(w.h(0,d).a.a)
w=B.b5(w,".","")
w=B.iV(B.b5(w,",","."))
return w==null?0:w},
a4b(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pH[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ai(u,2)
s=B.b5(s,".",",")
t.kt(0,t.a.y0(C.aU,C.bL,s))}}this.J(new A.b4T())},
aF6(){this.a4b(D.aqF)
this.c.P(x.q).f.be(D.aBb)},
I9(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I9=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b6(a1)
for(e=0;e<8;++e)a2.E(0,D.pH[e].a)
q=a2
t=4
w=7
return B.k($.aG5.cf().zi(B.b(["csv","txt"],x.s),C.xP,!0),$async$I9)
case 7:p=a5
a2=p
o=a2==null?null:J.Kp(a2.a).c
if(o==null){w=1
break}n=C.aH.adJ(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C_.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.K)(a1),++e){l=a1[e]
k=J.ax_(l,B.bP("[;,\t]",!0,!1,!1))
if(J.cd(k)<2)continue
j=C.c.aS(J.a2(k,0)).toLowerCase()
i=J.CK(q,j)?j:D.asS.h(0,j)
if(i==null)continue
d=C.c.aS(C.b.n4(J.bRN(k,1)))
d=B.b5(d,"\u20ac","")
d=B.b5(d," ","")
d=B.b5(d,".","")
h=B.b5(d,",",".")
g=B.iV(h)
if(g!=null)J.fs(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.aAP)
w=1
break}r.a4b(m)
r.c.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I9,v)},
Ik(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ik=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4U(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_W("upsert_finance_balance",B.a6(["p_as_of",C.c.a1(n.ek(),0,10),"p_cash_and_bank",q.rv("cash_and_bank"),"p_receivables",q.rv("receivables"),"p_inventory_value",q.rv("inventory_value"),"p_other_current_assets",q.rv("other_current_assets"),"p_fixed_assets",q.rv("fixed_assets"),"p_current_liabilities",q.rv("current_liabilities"),"p_long_term_liabilities",q.rv("long_term_liabilities"),"p_equity",q.rv("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ik)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYo()
o=q.c
o.toString
B.bc(o,!1).eU()
q.c.P(x.q).f.be(D.aAT)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4V(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ik,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bz(C.h,18,C.o),r,r,r),p=s.f?r:new A.b4X(s,d),o=s.d
o===$&&B.a()
p=B.fQ(D.acK,B.i("Stichtag: "+C.c.a1(o.ek(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.as(B.fQ(D.adT,D.aGY,o?r:s.gaE8(),r),1)
v=x.p
w=B.b([p,C.I,B.ai(B.b([w,C.ar,B.as(B.fQ(D.adF,D.aGN,o?r:s.gaF5(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pH[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f6(r,C.aW,!1,r,!0,C.r,r,B.fj(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.iB,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.av,r,C.a5,r,r,r,r),C.I],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.p,11,C.l),r,r,r))
p=B.bN(B.f5(B.a7(w,C.a9,C.f,C.G),r,C.F),r,380)
o=s.f
w=B.dL(C.cY,r,r,o?r:new A.b4Y(d),r,r)
o=o?r:s.gaEQ()
t=B.dC(C.m,C.h,r,r,r,r,r)
return B.lI(B.b([w,B.dY(s.f?F.YO:C.eB,o,t)],v),C.n,p,q)}}
A.bj.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.M(this)===B.M(e)&&B.a0g(this.gbw(),e.gbw())
else w=!0
return w},
gv(d){return(B.f3(B.M(this))^B.bMT(this.gbw()))>>>0},
j(d){B.bG2()
return B.M(this).j(0)}}
A.Ld.prototype={
U(){return new A.U4(B.A(x.S,x.J),new A.ayP(B.A(x.x,x.gF)),null,null)}}
A.U4.prototype={
p(d){var w,v=this,u=v.a24(),t=v.CW
t.toString
t=v.a25(t.au(0,v.gfq().gq(0)))
w=v.a25(u)
v.a.toString
return new A.L8(new A.a1K(t,w,null),u,null)},
a25(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayM(s.c,s.d,!1,r,s.a))}return d.aQu(w)},
a24(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UW(t.ch)
if(r)s=w.a
r=t.y
t=t.aRo(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQv(A.bxK(!1,!0,!0,v.d,v.c,u.gasR(),v.f,v.e))}return t},
asS(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagb()||e==null||e.a==null){w=v.cy
v.J(w.gaPT(w))
return}v.J(new A.b59(v,e))},
lv(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a24(),new A.b5a(w)))}}
A.o1.prototype={
Vz(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayF(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRo(d,e){return this.Vz(null,null,d,e)},
aQv(d){return this.Vz(null,d,null,null)},
aQu(d){return this.Vz(d,null,null,null)},
Xu(d,e,f){var w,v,u,t=A.kE(d.ch,e.ch,f,A.c5k(),x.dB),s=B.af(d.CW,e.CW,f),r=A.bGa(d.d,e.d,f),q=A.bI7(d.e,e.e,f),p=A.bG8(d.c,e.c,f),o=e.a
o=A.a62(B.a20(d.a.b,o.b,f),o.a)
w=B.af(d.y,e.y,f)
v=B.af(d.x,e.x,f)
u=B.af(d.z,e.z,f)
r=A.ayF(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bG4(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbw(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayE.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fK.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.ayN(),B.ag(v).i("ac<1,F>")).jJ(0,new A.ayO())
v=v.length
return w+(v-1)*this.d},
gbw(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbw(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mP.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1H.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1M.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aeG.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1N.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D6.prototype={
gbw(){return[this.a,this.b,C.bu,C.x,null]}}
A.Le.prototype={}
A.a1O.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xM.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xu(v,w,d)}}
A.ai3.prototype={}
A.aia.prototype={}
A.aib.prototype={}
A.aid.prototype={}
A.aie.prototype={}
A.aif.prototype={}
A.aig.prototype={}
A.aih.prototype={}
A.aii.prototype={}
A.ayP.prototype={
UW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uM(0,0,!1)
v=new A.zs(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uM(t,u,!0)}w=null
try{w=C.b.oY(d,new A.ayQ())}catch(s){return new A.uM(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uM(q,r,!1)
u.m(0,v,j)
return j}}
A.uM.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.aic.prototype={}
A.ayR.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0c(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acG(t,A.bxJ(w,t.a),u)
l.y=u
l.aSK(e,u,f)
l.amj(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aST(d,e,m,t,r,s,n,o,f)}}},
acG(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dW("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iU(p,B.ag(p).i("iU<1>")).aB(0,new A.ayS(t,q,r,s))
w.push(new A.a6L(q))}return w},
aSK(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d5(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b2.dH(Math.max(t,a2),b4,b7)
a4=B.Qv(h,Math.min(b2.dH(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dH(Math.min(u,a2),b4,b7)
a4=B.Qv(h,a5,g,Math.max(b2.dH(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.K:f).gq(0)
k.seX(null)
a6=b2.f.e_()
v.drawRRect(B.lD(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dH(f,b4,b7)
e=a8.b
b0=b2.dH(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.bb(v.save())
v.clipRect(B.dH(b1),$.mK()[1],!0)
a6=b2.f.e_()
v.drawRRect(B.lD(a4),a6)
a6.delete()
v.restore()
b2.aSR(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gen(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.am()
k=B.b([],s)
k.push(new B.hm(a4))
n=A.aBZ(new B.cm(n.r,C.ag,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mU(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aST(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AX(a5,a5,a5,a5,B.cR(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lF().a_f(a8,a7.b),a7.a),C.bu,C.x,a5,b6.c,C.bD)
w.agv(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbT(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dH(s,a6,b6)
q=b4.a
p=a4.dH(q,a6,b6)
o=b1.b
n=u+o.gex()
m=v+4+(o.gd3(0)+o.gd6(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aJq)j=v===D.Zt&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_g(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.G6(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lF().KA(new B.H(v,t),d).b
s=$.lF()
q=w.b
p=q.c
q=q.a.c
a0=s.KA(new B.H(p,q.gbT(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaiI()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.Wb(d,new A.ayT(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSR(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gen(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dH(w,j,k)
u=e.a
t=n.dH(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a2
s=w?new B.aW(i.x,i.y):C.a2
r=w?C.a2:new B.aW(i.e,i.f)
w=w?C.a2:new B.aW(i.r,i.w)
q=B.Qv(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dH(v,j,k),i.b)
r=n.dH(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.Qv(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bzK(w,n.dH(v,j,k),u,n.dH(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WQ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acG(b2,A.bxJ(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dH(k,b2,b3)
m=b0[q].c[o]
g=a7.dH(m.a+m.x.b,b2,b3)}else{h=a7.dH(j+m.x.b,b2,b3)
g=a7.dH(b0[q].c[o].b,b2,b3)}a7.dH(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dH(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dH(a4.a,b2,b3)
a6=a7.dH(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a1O(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a6L.prototype={}
A.a1K.prototype={
bn(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcP(),t=new A.ayR()
t.a1o()
$.am()
w=B.aX()
w.b=C.bi
t.f=w
w=B.aX()
w.b=C.b_
t.r=w
w=B.aX()
w.b=C.bi
w.r=C.n.gq(0)
t.w=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.x=w
t=new A.abQ(this.d,v,u,t,d,C.b7,new B.br(),B.aK(x.g))
t.bl()
t.Z7(v.cy)
t.afF()
return t},
bx(d,e){e.sij(0,this.d)
e.sYS(this.e)
e.scP(B.by(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.abQ.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYS(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0X(d.cy)
w.bc()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bc()},
aL(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bb(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2e(t,v),new A.vU(u.aC,u.i6,u.d0,x.Q))
s.restore()},
a_8(d){var w=this,v=w.gC(0)
return new A.Le(w.fX.WQ(d,v,new A.vU(w.aC,w.i6,w.d0,x.Q)))}}
A.a1A.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D5.prototype={
L(){return"AxisSide."+this.b}}
A.tH.prototype={}
A.qh.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adf.prototype={
gbw(){return[!1,0,0,0]}}
A.pm.prototype={
gbw(){return[this.b,this.a,this.c,!0]}}
A.v9.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eB.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eB))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yC.prototype={
gbw(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pJ.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeI.prototype={
gbw(){return[this.a,this.b]}}
A.Qz.prototype={
gbw(){return[this.a,this.b]}}
A.n8.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nw.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ln.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6W.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.af5.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Na.prototype={
gbw(){return[this.a,this.b,!0]}}
A.v8.prototype={}
A.Nj.prototype={
ae8(d,e,f){var w,v
$.am()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bi
d.iR(f,this.b,w)},
gbw(){return[this.a,this.b,this.c,0]}}
A.ahZ.prototype={}
A.ai2.prototype={}
A.alg.prototype={}
A.alA.prototype={}
A.alB.prototype={}
A.alD.prototype={}
A.alE.prototype={}
A.amt.prototype={}
A.ams.prototype={}
A.amu.prototype={}
A.aq4.prototype={}
A.arX.prototype={}
A.arY.prototype={}
A.atB.prototype={}
A.aui.prototype={}
A.auh.prototype={}
A.auj.prototype={}
A.ayt.prototype={
ML(d,e,f,g,h,i){return new B.ii(this.aWv(d,e,f,g,h,i),x.g4)},
aWu(d,e,f,g){return this.ML(d,e,f,!0,g,!0)},
aWv(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$ML(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lF().ajS(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h2(u-s,v)*v===u
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
A.L7.prototype={
a1o(){var w,v=this
$.am()
w=B.aX()
w.b=C.b_
v.a=w
w=B.aX()
w.b=C.bi
v.b=w
w=B.aX()
w.b=C.bi
v.e=w
w=B.aX()
w.b=C.b_
v.c=w
v.d=B.aX()},
ic(d,e,f){var w=this
w.a0d(d,e,f)
w.aSG(e,f)
w.aSQ(e,f)
w.aSP(e,f)},
aSP(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lF().OL(w.a,a1.r-a1.f)
u=$.bwR().ML(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lc(n,m)
if(j!=null){p.r=C.E.gq(0)
p.seX(j.mM(0,i))}else{if(k==null)k=C.K
p.r=k.gq(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c3(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.DI(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lF().OL(w.b,a1.y-a1.x)
u=$.bwR().ML(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dH(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.lc(n,m)
if(k!=null){q.r=C.E.gq(0)
q.seX(k.mM(0,i))}else{if(p==null)p=C.K
q.r=p.gq(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c3(q.r)
q.r=B.aH(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.DI(n,m,d.a,f.d)}},
aSG(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hc(new B.I(0,0,0+w.a,0+w.b),this.b)},
aSQ(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.K)(k),++u){t=k[u]
s=B.lc(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.seX(p.mM(0,s))}else{r.r=(q==null?C.K:q).gq(0)
r.seX(null)}o=n.e.e_()
w.drawRect(B.dH(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.K)(l),++u){t=l[u]
s=B.lc(new B.r(0,n.dH(t.a,m,e)),new B.r(w,n.dH(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gq(0)
v.seX(q.mM(0,s))}else{v.r=(r==null?C.K:r).gq(0)
v.seX(null)}o=n.e.e_()
j.drawRect(B.dH(s),o)
o.delete()}},
aSO(d,e,f){var w,v
this.a0d(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ae9(d,e,f,w)
if(v.b.length!==0)this.aSV(d,e,f,w)},
ae9(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=f.dH(o,a1,a0)
m=new B.r(0,n)
o=f.dH(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lc(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seX(j.mM(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.DI(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=C.d.am(o,n.gbT(n).eI(0,2))
J.bb(r.save())
r.translate(h,g)
n=n.gNH().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eI(0,2)
o=C.d.am(o,n.gbT(n).eI(0,2))
k=f.d
k===$&&B.a()
s.aea(0,n,new B.r(h,o),k)}}},
aSV(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.e
n=d.fd(o,a3,a2)
m=new B.r(n,0)
o=d.fd(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lc(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seX(j.mM(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.DI(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.bb(r.save())
r.translate(f,e)
n=n.gNH().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eI(0,2)
g=n.gbT(n).ae(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.aea(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dH(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_g(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.L8.prototype={
galF(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galG(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galH(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galD(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am_(d){var w,v=this,u=null,t=v.d,s=A.byw(t.d),r=t.a
r=r.a&&A.bSn(r.b)?r.b:u
w=B.b([B.aQ(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayv(w)
if(v.galF())C.b.hA(w,s.$1(!0),new A.AH(D.Bi,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galH())C.b.hA(w,s.$1(!0),new A.AH(D.mH,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galG())C.b.hA(w,s.$1(!0),new A.AH(D.Bj,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galD())C.b.hA(w,s.$1(!0),new A.AH(D.dQ,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.ju(new A.ayu(this))}}
A.S0.prototype={
U(){return new A.YN(new B.bk(null,x.eF))}}
A.YN.prototype={
ayo(){switch(this.a.c.a){case 0:return C.eg
case 1:return C.fd
case 2:return C.d0
case 3:return C.dO}},
ayU(){switch(this.a.c.a){case 0:return new B.ah(0,0,8,0)
case 1:return new B.ah(0,0,0,8)
case 2:return new B.ah(8,0,0,0)
case 3:return new B.ah(0,8,0,0)}},
ayq(d){this.a.toString
return},
aq(){this.aJ()
$.cC.x1$.push(this.ga4E())},
bb(d){this.bE(d)
$.cC.x1$.push(this.ga4E())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayU()
return B.B5(B.b2s(0,B.aQ(v.ayo(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adg.prototype={
bn(d){return A.bSf(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.W!==w){e.W=w
e.a7()}}}
A.a1B.prototype={
hm(d){if(!(d.b instanceof B.hx))d.b=new B.hx(null,null,C.v)},
hZ(d){if(this.B===C.ai)return this.ya(d)
return this.adN(d)},
aLu(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9v(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dF(d){var w=this.a9u(d,B.hL())
switch(this.B.a){case 0:return d.c3(new B.H(w.a,w.b))
case 1:return d.c3(new B.H(w.b,w.a))}},
a9u(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ai?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ho(u,null)
break
case 1:q=B.ho(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9v(p)
t=Math.max(t,o.aLu(p))
m=r.aG$}return new A.bge(n<1/0?n:s,t)},
cD(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9u(o,B.mJ()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c3(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c3(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.a9v(r==null?B.S(B.X("RenderBox was not laid out: "+B.M(w).j(0)+"#"+B.c9(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eg(d,e){return this.yb(d,e)},
aL(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v9(d,e)},
l(){this.a4.sbh(0,null)
this.aoV()}}
A.bge.prototype={}
A.ayw.prototype={}
A.jY.prototype={
gbw(){return[this.a,this.b]}}
A.o0.prototype={}
A.ai_.prototype={}
A.ai0.prototype={
aN(d){var w,v,u
this.fp(d)
w=this.ah$
for(v=x.L;w!=null;){w.aN(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fi(0)
w=this.ah$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ai1.prototype={}
A.U1.prototype={
l(){var w,v,u
for(w=this.Wo$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AH.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d0
case 1:return C.dO
case 2:return C.eg
case 3:return C.fd}},
gb07(){var w=this.d,v=A.byw(w.d),u=A.bG7(w.a)
switch(this.c.a){case 2:case 0:return new B.ah(0,v.b,0,v.d).ae(0,new B.ah(0,u.b,0,u.d))
case 1:case 3:return new B.ah(v.a,0,v.c,0).ae(0,new B.ah(u.a,0,u.c,0))}},
gaiw(){var w=this.d,v=A.bG7(w.a),u=A.byw(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gex()+v.gex()}},
aXb(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lF().OL(d,f-e)
w=p.c
v=w!==D.mH
if((!v||w===D.dQ)&&p.d instanceof A.o1){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bxJ(u,d)
w=new B.iU(t,B.ag(t).i("iU<1>"))
s=w.giE(w).f2(0,new A.b_p(u),x.W).fZ(0)}else{r=$.bwR()
w=!v||w===D.dQ
v=p.d
q=r.aWu(w?v.w:v.z,o,f,e)
v=B.oz(q,new A.b_q(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ag(s).i("ac<1,o0>")
w=B.Q(new B.ac(s,new A.b_r(p,e,f,o,g,d),w),w.i("at.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aQ(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mH
u=!v
t=!u||w===D.dQ
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dQ?C.F:C.ai
q=B.b([],x.p)
if(w===D.Bi||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dQ?r:j.goD().c.c
p=!u||w===D.dQ?j.goD().c.c:r
o=j.gb07()
n=!u||w===D.dQ?C.ai:C.F
j.gaiw()
m=j.gaiw()
l=!u||w===D.dQ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dQ?k.r:k.y
q.push(B.aQ(i,A.bZB(new A.ayw(),n,j.aXb(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bj||w===D.dQ)j.goD()
return new B.e8(t,i,i,B.bV4(q,C.j,s,i,C.f,C.G,0,i,i,C.aQ),i)}}
A.a1Q.prototype={
gbw(){return[this.a,this.b]}}
A.a61.prototype={
gbw(){return[this.a,this.b]}}
A.Nq.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a63.prototype={
gac0(d){return!1},
gbw(){return[!1,!1,!1,!1]}}
A.az1.prototype={}
A.aFr.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ail.prototype={}
A.alx.prototype={}
A.aly.prototype={}
A.alF.prototype={}
A.Lh.prototype={
ic(d,e,f){}}
A.vU.prototype={}
A.hw.prototype={
gdM(){return null},
gagb(){var w,v=this
B.bC()
B.bC()
B.bC()
w=v instanceof A.Np
if(w)return!0
return!(v instanceof A.Nm)&&!(v instanceof A.Nl)&&!(v instanceof A.Nn)&&!(v instanceof A.Nk)&&!w&&!(v instanceof A.No)}}
A.a67.prototype={
gdM(){return this.a.b}}
A.a68.prototype={
gdM(){return this.a.b}}
A.a69.prototype={
gdM(){return this.a.b}}
A.Nl.prototype={}
A.Nm.prototype={}
A.a6c.prototype={
gdM(){return this.a.b}}
A.No.prototype={}
A.Np.prototype={
gdM(){return this.a.b}}
A.a66.prototype={
gdM(){return this.a.b}}
A.a65.prototype={
gdM(){return this.a.b}}
A.Nk.prototype={
gdM(){return this.a.b}}
A.a6a.prototype={
gdM(){return this.a.gdM()}}
A.a6b.prototype={
gdM(){return this.a.gdM()}}
A.Nn.prototype={
gdM(){return this.a.gdM()}}
A.Gn.prototype={
Z7(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afF(){var w=this,v=null,u=w.aj=B.bzq(v,v)
u.ay=new A.aVC(w)
u.ch=new A.aVD(w)
u.CW=new A.aVE(w)
u.cy=new A.aVF(w)
u.cx=new A.aVG(w)
u=w.aF=B.Hb(v,-1,v)
u.B=new A.aVH(w)
u.Y=new A.aVI(w)
u.V=new A.aVJ(w)
u=w.bD=B.a82(v,w.a4,v)
u.p3=new A.aVK(w)
u.p4=new A.aVL(w)
u.RG=new A.aVM(w)},
cD(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dF(d){return new B.H(d.b,d.d)},
kJ(d){return!0},
mW(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.oB(d)
w=v.aF
w===$&&B.a()
w.oB(d)
w=v.aj
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l8(new A.a6b(d))},
gNe(d){return new A.aVN(this)},
gNg(d){return new A.aVO(this)},
l8(d){var w,v,u=this
if(u.V==null)return
w=d.gdM()
v=w!=null?u.a_8(w):null
u.V.$2(d,v)
u.Y=C.b7},
gL2(d){return this.Y},
gFF(){var w=this.ar
w===$&&B.a()
return w},
aN(d){this.fp(d)
this.ar=!0},
aE(d){this.ar=!1
this.fi(0)},
$ijx:1}
A.OL.prototype={
U(){return new A.Ww(B.b([],x.r),B.A(x.S,x.J),new A.aLE(B.A(x.y,x.dj)),null,null)}}
A.Ww.prototype={
p(d){var w,v=this,u=v.a4G(),t=v.CW
t.toString
t=v.abx(t.au(0,v.gfq().gq(0)))
w=v.abx(u)
v.a.toString
return new A.L8(new A.a7U(t,w,null),u,null)},
abx(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ag(w).i("ac<1,ea>")
w=B.Q(new B.ac(w,new A.bgk(this,d),v),v.i("at.E"))
return d.aRl(w,this.cy)},
a4G(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UW(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRA(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aR_(new A.EV(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazH(),t.c,t.d))}return r},
azI(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagb())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bgi(v))
return}v.J(new A.bgj(v,e))},
lv(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4G(),new A.bgl(w)))}}
A.pX.prototype={
Xu(d,e,f){var w,v,u,t,s,r,q=B.af(d.f,e.f,f),p=B.af(d.r,e.r,f),o=B.af(d.w,e.w,f),n=B.af(d.x,e.x,f),m=B.af(d.y,e.y,f),l=B.af(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a62(B.a20(d.a.b,j.b,f),j.a)
w=A.bG4(d.at,e.at,f)
v=A.bG8(d.c,e.c,f)
u=A.bGa(d.d,e.d,f)
t=A.bI7(d.e,e.e,f)
s=A.kE(d.ch,e.ch,f,A.c7p(),x.cz)
s.toString
r=A.kE(d.CW,e.CW,f,A.c7o(),x.bO)
r.toString
u=A.bz2(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VA(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bz2(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRA(d,e,f,g){return this.VA(null,null,d,e,f,g,null)},
aR_(d){var w=null
return this.VA(w,d,w,w,w,w,w)},
aRl(d,e){var w=null
return this.VA(d,w,w,w,w,w,e)},
gbw(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ea.prototype={
arA(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oY(n.a,new A.aLD())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.K)(v),++p){o=v[p]
if(o.k(0,D.fP))continue
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
adr(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLC(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aR6(d){return this.adr(d,null)},
aR8(d){return this.adr(null,d)},
gbw(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OM.prototype={
gbw(){return[this.a]}}
A.a1J.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mQ.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Lc.prototype={
gbw(){return[!1,this.b,this.c,!0]}}
A.yB.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.aLs.prototype={
L(){return"LabelDirection."+this.b}}
A.a64.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EV.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7V.prototype={
gbw(){return[4,C.fN,16,D.xM,0,120,A.c7r(),!1,!1,!1,0,C.J,A.c7q()]}}
A.nb.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qq.prototype={}
A.rE.prototype={
gbw(){return[this.a,this.b,C.bu,C.x,null]}}
A.tI.prototype={
gbw(){return[this.a,this.b]}}
A.GP.prototype={
gbw(){return[this.a]}}
A.ON.prototype={}
A.zn.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xu(v,w,d)}}
A.ai8.prototype={}
A.ai9.prototype={}
A.aim.prototype={}
A.alz.prototype={}
A.alC.prototype={}
A.ani.prototype={}
A.anj.prototype={}
A.ank.prototype={}
A.anm.prototype={}
A.ann.prototype={}
A.ano.prototype={}
A.anp.prototype={}
A.arW.prototype={}
A.atA.prototype={}
A.aLE.prototype={
UW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yn
u=new A.zs(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zo(s,r,q,t,!0)}w=null
try{w=C.b.oY(d,new A.aLF())}catch(p){return D.yn}v=null
try{v=C.b.oY(w.a,new A.aLG())}catch(p){return D.yn}o=v.a
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
if(f<m)m=f}e=new A.zo(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zo.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.anl.prototype={}
A.aLH.prototype={
ic(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac0(0)){v=a3.b
u=v.a
v=v.b
$.am()
a3.a.iM(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aQ_(new B.I(0,0,u,v))}d.a0c(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t)d.aSM(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSI(a3,q,a4)
d.aSN(a3,q,a4)
d.ami(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dW("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vF(q,i,j,k))}}d.aSU(a3,s,a4)
if(w.gac0(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSS(a2,a3,v,f,new A.GP(g),a4)}},
aSI(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.byv(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.K)(n),++v){u=n[v]
t=p.ZI(o,e,u,f)
s=p.ajK(o,e,t,u,f)
r=p.ZK(o,e,t,u,f,!0)
q=p.ajJ(o,e,t,u,f)
p.aSL(d,s,p.ZH(o,e,t,u,f,!0),f,e)
p.aSF(d,q,r,f,e)
p.aSJ(d,t,e)
p.aSH(d,t,e,f)}},
aSM(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.byv(a5.a),a8=A.byv(a6.a)
if(a7.length!==a8.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bT.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ag(n).i("cB<1>")
l=B.Q(new B.cB(n,m),m.i("at.E"))
k=a2.ZI(a3,a5,o,b2)
j=a2.ZJ(a3,a6.aR8(l),l,b2,k)
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
n=a2.fd(i,a3,b2)
m=a2.dH(h,a3,b2)
e=a2.fd(g,a3,b2)
d=a2.dH(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gq(0)
a0.seX(v.mM(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.K:w).gq(0)
a0.seX(null)}$.am()
a1=new B.mT(C.dD,C.bi,C.e9,C.ez,C.dY).e_()
n=B.dH(new B.I(0,0,t,s))
m=$.bT.b
if(m===$.bT)B.S(B.vD(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mU(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSN(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZO(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dH(q.b,w,f)
n.$4(q,p/v*100,e,r).ae8(s,q,new B.r(p,o))}}},
aSU(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fT(b3,new A.aLK())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.K)(b3),++o){n=b3[o]
m=n.a
l=b1.ZO(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dH(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rD(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lB(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lB(q.$2(m,k))))
f=b1.dH(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dH(a2,w,b4)
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
b0=B.lc(a3,a5)
if(a6!=null){f.r=C.E.gq(0)
f.seX(a6.mM(0,b0))}else{if(a4==null)a4=C.K
f.r=a4.gq(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c3(f.r)
f.r=B.aH(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.DI(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rD(d.a))
f.ae8(t,j,new B.r(h,g))}}},
ZJ(d,e,f,g,h){var w=this.ajL(d,e,f,g,h)
return w},
ZI(d,e,f,g){return this.ZJ(d,e,f,g,null)},
ajL(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cm($.am().r,C.ag,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dH(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.fe(d,a0))
if(e===1)g.az(new B.ct(d,a0))}else g.az(new B.ct(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
r=i.dH(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fd(f.h(a3,q).a,a1,a4)
q=i.dH(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fd(f.h(a3,n?o:t).a,a1,a4)
l=i.dH(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Mf(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZK(d,e,f,g,h,i){var w=this,v=B.N4(f),u=J.Y(g),t=w.fd(u.h(g,u.gt(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fd(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fd(u.h(g,0).a,d,h),w.dH(u.h(g,0).b,d,h)))
v.az(new B.pu())
return v},
ajK(d,e,f,g,h){return this.ZK(d,e,f,g,h,!1)},
ZH(d,e,f,g,h,i){var w=this,v=B.N4(f),u=J.Y(g),t=w.fd(u.h(g,u.gt(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fd(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fd(u.h(g,0).a,d,h),w.dH(u.h(g,0).b,d,h)))
v.az(new B.pu())
return v},
ajJ(d,e,f,g,h){return this.ZH(d,e,f,g,h,!1)},
aSL(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dH(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fd(t.a,w,g)
s=r.r
s===$&&B.a()
A.bzp(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.i0(e,r.r)},
aSF(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fd(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dH(t.b,w,g)
s=r.r
s===$&&B.a()
A.bzp(s,q.b,q.c,new B.I(v,0,u,t))
d.a.i0(e,r.r)},
aSJ(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.N6(B.N4(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ix:C.e9
u.e=C.ez
u.r=v.gq(0)
u.seX(null)
u.c=f.x
u.r=v.gq(0)
$.lF()
u.z=new B.zx(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aBZ(e,f.cy).e9(w.b),this.f)},
aSH(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ix:C.e9
q.e=C.ez
q=f.b
q===$&&B.a()
q=s.fd(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dH(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fd(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dH(u.b,r,g)
t=s.f
A.bzp(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bXu(t)
d.a.i0(A.aBZ(e,f.cy),s.f)},
aSS(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bMm(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dW("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lF().a_f(b4,u.b)
s=u.a
r=w.k(0,C.j_)?new B.kx(1):w
q=new B.tE(new B.fp(s,a8,a8,C.b7,a8,a8,a8,a8,a8,a8,t),C.bu,C.x,r,a8,a8,a8,a8,C.bD,a8)
q.agv(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.K)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dH(b7.b,a9,b9)
l=p+C.fN.gex()
k=o+(w-1)*4+(C.fN.gd3(0)+C.fN.gd6(0))
j=t-k-16
i=a7.a_g(b3,l,D.xM,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.G6(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bMl(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lF().KA(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lF().KA(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.Wb(0,new A.aLI(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.K)(b0),++n){q=b0[n]
a5=A.c_d(q.r,q.w)
A:{if(D.Ef===a5){a6=a3
break A}if(D.Eg===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wb(0,new A.aLJ(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZO(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
WQ(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aka(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fT(t,new A.aLL())
return t.length===0?null:t},
aka(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dH(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hA(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qq(s,f,g,C.b.hz(w,v),v.a,v.b)}else return null}}
A.vF.prototype={}
A.a7U.prototype={
bn(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcP(),t=new A.aLH()
t.a1o()
$.am()
w=B.aX()
w.b=C.b_
t.f=w
w=B.aX()
w.b=C.bi
t.r=w
w=B.aX()
w.b=C.b_
t.w=w
w=B.aX()
w.b=C.bi
w.r=C.K.gq(0)
w.a=D.a_J
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.E.gq(0)
t.y=w
w=B.aX()
w.b=C.bi
w.r=C.n.gq(0)
t.z=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.Q=w
t=new A.ac2(this.d,v,u,t,d,C.b7,new B.br(),B.aK(x.g))
t.bl()
t.Z7(v.cx)
t.afF()
return t},
bx(d,e){e.sij(0,this.d)
e.sYS(this.e)
e.scP(B.by(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.ac2.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYS(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0X(d.cx)
w.bc()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bc()},
aL(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bb(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2e(t,v),new A.vU(u.aC,u.i6,u.d0,x.o))
s.restore()},
a_8(d){var w=this,v=w.gC(0)
return new A.ON(w.fX.WQ(d,v,new A.vU(w.aC,w.i6,w.d0,x.o)))}}
A.NP.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2e.prototype={
aQ_(d){this.a.a.clipRect(B.dH(d),$.mK()[1],!0)
return null},
aeg(d,e){d.aL(this.a,e)},
Wb(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bb(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lF()
s.YQ(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DI(d,e,f,g){var w=new B.cm($.am().r,C.ag,null,null,B.b([],x.v))
w.az(new B.fe(d.a,d.b))
w.az(new B.ct(e.a,e.b))
this.a.i0(A.aBZ(w,g),f)}}
A.zs.prototype={
gbw(){return[this.a]}}
A.anw.prototype={}
A.a2o.prototype={}
A.b2U.prototype={
KA(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXL(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d5(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXM(d,e){var w,v
if(d==null)return D.a_U
w=d.b
v=e/2
return d.aRb(w>v?v:w)},
OL(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_T(w)},
b_T(d){if(d<1)return this.aJY(d)
return this.a8x(d)},
aJY(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8x(d*q)/q},
a8x(d){var w,v=C.e.j(C.d.Z(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aM(d)/10:d
if(w>=7.6)return 10*C.d.Z(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.Z(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.Z(Math.pow(10,v))
else return C.d.Z(Math.pow(10,v))},
ak_(d){if(d>=1)return 1
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
a_f(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j4
w=e.a?u.w.c5(e):e
v=B.b2(d,C.vG)
v=v==null?null:v.ay
return v===!0?w.c5(C.mp):w},
ajS(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qs)","C(eB)","~(v,fK)","F(ea,v)","R<~>()","F(F,qs)","bQ(F,tH)","pJ(F)","v(qq,qq)","ID(oj)","Ii(B,bH)","JB(ok)","vJ(@)","wF(@)","ea(F)","CP(@)","aj(F,tH)","v7(dF<v7>)","Ei(dF<aGh>)","F(vJ)","F(wF)","wW(B,bH)","Bg(z)","~()","qs(@)","~(hw,Le?)","xM(@)","F(ip)","C(fK)","~(v,ip)","~(@)","jY(o0)","c(o0)","jY(bG<v,F>)","jY(F)","o0(jY)","~(hw,ON?)","ea(ea)","lW(wv<lW>)","zn(@)","R<ok>(c5<ok>)","tI(v)","v8(eB,F,ea,v)","rE(nb)","C(ea)","v(vF,vF)","F(fK)","R<oj>(c5<oj>)","v(v,v,F)","fK(fK,fK,F)","ip(ip,ip,F)","mP(mP,mP,F)","D6?(fK,v,ip,v)","E(fK)","c(F,tH)","eB(eB,eB,F)","C(F)","n8(n8,n8,F)","nw(nw,nw,F)","kW(kW,kW,F)","ln(ln,ln,F)","f(kW)","f(ln)","ea(ea,ea,F)","mQ(mQ,mQ,F)","v8(eB,F,ea,v{size:F?})","C(eB,ea)","F(r,r)","u<tI>(ea,u<v>)","yc(z)","u<rE>(u<nb>)","E(nb)","yz(eq<B?>)"])
A.aGd.prototype={
$1(d){var w=B.cZ(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qs(J.an(v==null?"":v),A.pd(w.h(0,"revenue_net")),A.pd(w.h(0,"expense_net")),A.pd(w.h(0,"result_net")))},
$S:z+24}
A.aGe.prototype={
$1(d){var w,v,u,t=B.cZ(x.f.a(d),x.N,x.z),s=B.ae(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.an(r==null?"unbekannt":r)
w=B.ae(t.h(0,"code"))
v=A.pd(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.d.Z(u)
if(u==null)u=0
return new A.vJ(s,r,w,v,u,A.pd(t.h(0,"avg_basket")))},
$S:z+12}
A.aGf.prototype={
$1(d){var w,v=B.cZ(x.f.a(d),x.N,x.z),u=B.ae(v.h(0,"product_id")),t=v.h(0,"name")
t=J.an(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.d.Z(w)
if(w==null)w=0
return new A.wF(u,t,w,A.pd(v.h(0,"gross")))},
$S:z+13}
A.aGw.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.an(v==null?"":v)
u=w.h(d,"name")
u=J.an(u==null?"":u)
t=w.h(d,"direction")
return new A.CP(v,u,J.an(t==null?"expense":t),A.uq(w.h(d,"net")),A.uq(w.h(d,"tax")),A.uq(w.h(d,"gross")))},
$S:z+15}
A.buy.prototype={
$1(d){return new A.v7(d.al($.bW(),x.A))},
$S:z+17}
A.buz.prototype={
$1(d){return new A.Ei(d.al($.bR3(),x.D))},
$S:z+18}
A.bwq.prototype={
$1(d){return E.aGg()},
$S:z+38}
A.buA.prototype={
$1(d){var w=d.al($.xA(),x.P)
return d.al($.awO(),x.a).G6(w)},
$S:z+40}
A.bux.prototype={
$1(d){var w=d.al($.xA(),x.P)
return d.al($.awO(),x.a).G1(w)},
$S:z+47}
A.buw.prototype={
$1(d){return this.ajA(d)},
ajA(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.al($.bW(),x.A).fD("finance_balance_kpis",t),$async$$1)
case 3:s=r.cZ(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:335}
A.aGc.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awO(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGb.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awO(),x.a).LF(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGu.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bxk()
if(s.e==null)B.S(B.X(y.b))
s.gce().c7(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGm.prototype={
$0(){return this.a.Jx(this.b,this.c)},
$S:0}
A.aGn.prototype={
$0(){return this.a.Bp(this.b,this.c)},
$S:0}
A.aGo.prototype={
$0(){var w=x.z
return B.bc(this.a,!1).dT(B.dJ(new A.aGl(),null,w),w)},
$S:0}
A.aGl.prototype={
$1(d){return F.Db},
$S:z+69}
A.aGp.prototype={
$0(){return B.pO(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aGq.prototype={
$0(){var w=this
return w.a.Bq(w.b,w.c,w.d)},
$S:0}
A.aGt.prototype={
$0(){return D.auU},
$S:96}
A.aGs.prototype={
$2(d,e){return new A.Ii(B.j(d),null)},
$S:z+10}
A.aGr.prototype={
$1(d){return new A.JB(d,null)},
$S:z+11}
A.aGk.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lI(B.b([B.dL(C.cY,w,w,new A.aGi(u),w,w),B.dY(F.vi,new A.aGj(u),B.dC(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vj)},
$S:58}
A.aGi.prototype={
$0(){B.bc(this.a,!1).dk(!1)
return null},
$S:0}
A.aGj.prototype={
$0(){B.bc(this.a,!1).dk(!0)
return null},
$S:0}
A.bj2.prototype={
$0(){var w=this.a.aI(0,$.xA().ghP(),x.V),v=E.aGg()
w.uk(0,v)
return v},
$S:0}
A.bj3.prototype={
$0(){var w=this.a.aI(0,$.xA().ghP(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lW(B.bU(B.b0(v),1,1,0,0,0,0),v)
w.uk(0,u)
return u},
$S:0}
A.bj4.prototype={
$0(){return this.a.IT(this.b,this.c)},
$S:0}
A.bj1.prototype={
$2(d,e){return new B.oV(B.V(d).aQy(B.V(d).ax.aRq(C.h,C.m)),e,null)},
$S:1032}
A.bpK.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dr(),s=A.Oy(!1,C.li,"Umsatz 7 %",t.ap(u.a),w),r=A.Oy(!1,C.li,"Umsatz 19 %",t.ap(u.b),w),q=A.Oy(!0,D.aaP,"Umsatz netto",t.ap(u.c),w),p=A.Oy(!1,D.aaO,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aII(1.7,B.b([s,r,q,p,A.Oy(!0,C.nV,"Ergebnis",n,o<0?C.aa:C.ac),A.Oy(!1,C.fR,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.il,!0)},
$S:131}
A.aLr.prototype={
$0(){return D.auR},
$S:96}
A.aLq.prototype={
$2(d,e){var w=null
return B.bm(C.aa,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fi,w,C.D,w,w,3)},
$S:199}
A.aLp.prototype={
$1(d){return new A.ID(d,null)},
$S:z+9}
A.bg5.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dr(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ag(g).i("ac<1,F>"),e=f.i("at.E"),d=B.Q(new B.ac(g,new A.bfV(),f),e)
i=A.jQ(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.ac(g,new A.bfW(),f),e)
d=A.jQ(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.ac(g,new A.bfX(),f),e)
k=A.jQ(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ai(h.b,1)
v=B.Q(new B.ac(g,new A.bfY(),f),e)
w=A.jQ(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ai(h.a,1)
u=B.Q(new B.ac(g,new A.bfZ(),f),e)
v=A.jQ(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ai(r.c,1)
t=B.Q(new B.ac(g,new A.bg_(),f),e)
u=A.jQ(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ai(h.c,1)
s=B.Q(new B.ac(g,new A.bg0(),f),e)
t=A.jQ(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.ac(g,new A.bg1(),f),e)
h=A.jQ(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.ac(g,new A.bg2(m),f),e)
m=A.jQ(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.ac(g,new A.bg3(l),f),e)
l=A.jQ(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ai(j,1)
j=B.Q(new B.ac(g,new A.bg4(j),f),e)
return E.aII(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jQ(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.il,!0)},
$S:131}
A.bfV.prototype={
$1(d){return d.b},
$S:z+0}
A.bfW.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfX.prototype={
$1(d){return d.d},
$S:z+0}
A.bfY.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfZ.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bg_.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bg0.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bg1.prototype={
$1(d){return d.d},
$S:z+0}
A.bg2.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bg3.prototype={
$1(d){return this.a},
$S:z+0}
A.bg4.prototype={
$1(d){return this.a},
$S:z+0}
A.bg6.prototype={
$0(){return A.bBm(this.b,1.45,new A.Ur(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bg7.prototype={
$0(){return A.bBm(this.b,1.6,new A.UI(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.btG.prototype={
$1(d){var w=this,v=null,u=B.ax(16),t=x.p,s=B.b([B.ai(B.b([B.as(B.i(w.a,v,v,v,v,B.bz(C.h,18,C.o),v,v,v),1),B.fc(v,v,D.ad8,v,v,new A.btF(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.p,12,C.aE),v,v,v),C.I],t))
s.push(C.t)
s.push(B.bN(new B.mO(w.c,w.d,v),v,17976931348623157e292))
return B.a5h(v,C.n,new B.ad(C.al,B.a7(s,C.A,C.f,C.G),v),v,v,v,C.fO,C.uZ,v,new B.d_(u,C.J),v)},
$S:1033}
A.btF.prototype={
$0(){return B.bc(this.a,!1).eU()},
$S:0}
A.bg8.prototype={
$0(){var w=this.a,v=B.b5(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bBm(this.b,2.4,new A.YZ(w.w,w.y,w.z,null),C.b.cn(u," \xb7 "),v)
return null},
$S:0}
A.boP.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.boQ.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.boR.prototype={
$1(d){return A.aLC(null,1.4,null,C.aa,0.35,D.ahH,D.E6,null,!1,!1,!1,!1,D.Fs,!1,10,D.Yd,!0,C.lz,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+14}
A.b6G.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6I.prototype={
$2(d,e){var w=null
return B.i(this.a.aLi(d),w,w,w,w,B.y(C.p,10,C.H),w,w,w)},
$S:z+16}
A.b6J.prototype={
$2(d,e){var w=null,v=C.d.Z(d)
if(v<0||v>=this.a.length)return C.v6
return new B.ad(C.l1,B.i(C.c.cM(this.a[v].a,5),w,w,w,w,B.y(C.p,9,C.H),w,w,w),w)},
$S:z+6}
A.b6H.prototype={
$1(d){return D.a9e},
$S:z+7}
A.b7G.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7H.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7I.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b7J.prototype={
$2(d,e){var w=null,v=C.d.Z(d)
if(v<0||v>=3)return C.v6
return new B.ad(C.l1,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bgI.prototype={
$1(d){return d.d},
$S:z+19}
A.bgJ.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.br1.prototype={
$1(d){return d.d},
$S:z+20}
A.br2.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b56.prototype={
$0(){return D.av_},
$S:96}
A.b55.prototype={
$2(d,e){return new A.wW("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b54.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bm(m,B.a7(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.I,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.p,12.5,C.l),m,m,m),C.t,B.kv(C.ck,B.b([B.fQ(C.F0,D.aIN,new A.b4Z(w,v),m),B.fQ(D.acL,D.aHJ,new A.b5_(w,v),m)],u),C.dA,8,8)],u),C.A,C.f,C.i),C.a8,m,C.D,m,m,3)}w=new A.b57(d)
t=C.b.fL(n.a.e.d,0,new A.b50())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.ju(new A.b51(new A.b58(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.I,B.ai(B.b([B.as(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.p,11,C.l),m,m,m),1),B.qn(D.adZ,D.aI3,new A.b52(q,p),m),B.qn(D.adz,D.aHP,new A.b53(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:223}
A.b4Z.prototype={
$0(){return A.aw8(this.a,this.b,null)},
$S:0}
A.b5_.prototype={
$0(){return A.aw5(this.a,this.b)},
$S:0}
A.b57.prototype={
$1(d){var w=B.b_(J.a2(this.a,d))
return w==null?null:w},
$S:1034}
A.b58.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ai(v,1)
w=B.b5(w,".",",")+" %"}return w},
$S:34}
A.b50.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b51.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jQ(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jQ(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jQ(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jQ(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ai(w,1)
w=B.b5(w,".",",")+" %"}w=A.jQ(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dr()
v=u.ap(v)
return E.aII(p,B.b([n,m,l,o,w,A.jQ(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.il,!0)},
$S:131}
A.b52.prototype={
$0(){return A.aw5(this.a,this.b)},
$S:0}
A.b53.prototype={
$0(){return A.aw8(this.a,this.b,this.c)},
$S:0}
A.btE.prototype={
$1(d){return new A.Bg(this.a,new A.btD(this.b),this.c,null)},
$S:z+22}
A.btD.prototype={
$0(){var w=this.a,v=$.bxj()
if(w.e==null)B.S(B.X(y.b))
w.gce().c7(v)},
$S:0}
A.b4T.prototype={
$0(){},
$S:0}
A.b4U.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4V.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4X.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.ux(u.b,B.bU(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4W(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4W.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4Y.prototype={
$0(){return B.bc(this.a,!1).eU()},
$S:0}
A.b59.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5a.prototype={
$1(d){return new A.xM(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayN.prototype={
$1(d){return d.e},
$S:z+27}
A.ayO.prototype={
$2(d,e){return d+e},
$S:46}
A.ayQ.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayS.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayT.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aeg(v.d,v.e)},
$S:0}
A.ayv.prototype={
$1(d){return 0},
$S:1035}
A.ayu.prototype={
$2(d,e){return B.eV(C.bW,this.a.am_(e),C.r,C.bk,null)},
$S:1036}
A.b_n.prototype={
$1(d){return d.a},
$S:z+31}
A.b_o.prototype={
$1(d){return d.b},
$S:z+32}
A.b_p.prototype={
$1(d){return new A.jY(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_q.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mH||v===D.dQ))t=1-t
return new A.jY(d,t*w.d)},
$S:z+34}
A.b_r.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lF()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ai(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ai(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ai(v/1000,1)
t="K"}else{u=C.d.ai(v,r.ak_(Math.abs(s.b-s.c)))
t=""}if(C.c.ht(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o0(d,q.c.b.$2(p,new A.tH(u+t,s.e)))},
$S:z+35}
A.aVC.prototype={
$1(d){this.a.l8(new A.a67(d))},
$S:187}
A.aVD.prototype={
$1(d){this.a.l8(new A.a68(d))},
$S:40}
A.aVE.prototype={
$1(d){this.a.l8(new A.a69(d))},
$S:29}
A.aVF.prototype={
$0(){this.a.l8(D.a1D)},
$S:0}
A.aVG.prototype={
$1(d){this.a.l8(new A.Nm())},
$S:44}
A.aVH.prototype={
$1(d){this.a.l8(new A.a6c(d))},
$S:41}
A.aVI.prototype={
$0(){this.a.l8(D.a1E)},
$S:0}
A.aVJ.prototype={
$1(d){this.a.l8(new A.Np(d))},
$S:76}
A.aVK.prototype={
$1(d){this.a.l8(new A.a66(d))},
$S:197}
A.aVL.prototype={
$1(d){this.a.l8(new A.a65(d))},
$S:184}
A.aVM.prototype={
$1(d){return this.a.l8(new A.Nk(d))},
$S:183}
A.aVN.prototype={
$1(d){return this.a.l8(new A.a6a(d))},
$S:63}
A.aVO.prototype={
$1(d){return this.a.l8(new A.Nn(d))},
$S:54}
A.bgk.prototype={
$1(d){var w=this.a.db.h(0,C.b.hz(this.b.ch,d))
return d.aR6(w==null?B.b([],x.t):w)},
$S:z+37}
A.bgi.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bgj.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fT(w,new A.bgh())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.GP(w))},
$S:0}
A.bgh.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.bgl.prototype={
$1(d){return new A.zn(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aLD.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.bun.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bG9(t?A.bB7(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tI(w,new A.yB(!0,A.bBX(),new A.bum(v)))},
$S:z+41}
A.bum.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bV2(A.bB7(d,e,f),w,A.c2Z(d,e,f))},
$S:z+42}
A.buk.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j2(v,v,u==null?D.dv:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rE(C.d.j(d.b),w)},
$S:z+43}
A.aLF.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLG.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aLK.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aLI.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aLJ.prototype={
$0(){this.a.aeg(this.b,this.c)},
$S:0}
A.aLL.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.ayG.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.ayH.prototype={
$2(d,e){return d+e},
$S:46}
A.ayK.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iU(v,B.ag(v).i("iU<1>")).aB(0,new A.ayL(w,this.a/(u+1),this.c))},
$S:0}
A.ayL.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.ayI.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.ayJ.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIH.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1037}
A.aC_.prototype={
$1(d){return d},
$S:1038};(function aliases(){var w=A.L7.prototype
w.a0c=w.ic
w.ami=w.aSO
w.amj=w.ae9
w=A.U1.prototype
w.aoV=w.l
w=A.Lh.prototype
w.a0d=w.ic
w=A.Gn.prototype
w.a0X=w.Z7})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c6y","bV_",72)
var q
v(q=A.U3.prototype,"gaF5","aF6",23)
v(q,"gaE8","I9",4)
v(q,"gaEQ","Ik",4)
u(A.U4.prototype,"gasR","asS",25)
t(A,"c5k",3,null,["$3"],["bSh"],49,0)
t(A,"c5l",3,null,["$3"],["bSi"],50,0)
t(A,"c5m",3,null,["$3"],["bSj"],51,0)
t(A,"c5o",4,null,["$4"],["c6b"],52,0)
w(A,"c5n","c6a",53)
s(A,"bBq","c6c",54)
t(A,"c5f",3,null,["$3"],["bV3"],55,0)
w(A,"a0c","c8A",56)
w(A,"awb","c6f",7)
t(A,"c5h",3,null,["$3"],["bVQ"],57,0)
t(A,"c5j",3,null,["$3"],["c06"],58,0)
t(A,"c5g",3,null,["$3"],["bVP"],59,0)
t(A,"c5i",3,null,["$3"],["c05"],60,0)
w(A,"cfS","bVO",61)
w(A,"cfT","c04",62)
r(A.YN.prototype,"ga4E","ayq",30)
u(A.Ww.prototype,"gazH","azI",36)
t(A,"c7p",3,null,["$3"],["bWg"],63,0)
t(A,"c7o",3,null,["$3"],["bSk"],64,0)
w(A,"c7s","c8B",1)
t(A,"bML",4,null,["$5$size","$4"],["bLc",function(d,e,f,g){return A.bLc(d,e,f,g,null)}],65,0)
s(A,"bBX","c8z",66)
s(A,"bMM","c52",67)
s(A,"bMP","c6i",68)
s(A,"bMO","c6e",3)
s(A,"bMN","c6d",3)
w(A,"c7r","bMm",70)
w(A,"c7q","bMl",71)
t(A,"a0i",3,null,["$3"],["c7n"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.G,[A.a7H,A.ahe,A.amD,A.Jb,A.JB,A.ahc,A.Ii,A.ID,A.alV,A.ana,A.Vh,A.YZ,A.Ur,A.UI,A.anG,A.ajW,A.Cg,A.atx,A.wW,A.L8,A.AH])
u(B.B,[A.v7,A.Ei,A.bj,A.ail,A.aib,A.aid,A.aie,A.ai3,A.alF,A.aih,A.aif,A.az1,A.atB,A.ayP,A.aic,A.Lh,A.a6L,A.tH,A.arY,A.arX,A.ai2,A.alE,A.eB,A.alB,A.alD,A.aq4,A.amu,A.auj,A.alC,A.alg,A.alA,A.ayt,A.bge,A.ayw,A.ai_,A.o0,A.alx,A.aly,A.vU,A.hw,A.anj,A.anm,A.ai8,A.aim,A.ai9,A.alz,A.anp,A.ann,A.atA,A.arW,A.aLE,A.anl,A.vF,A.a2e,A.anw,A.a2o,A.b2U])
u(B.v5,[A.qs,A.vJ,A.wF,A.aBn,A.aCv,A.oj,A.CP,A.ok])
u(B.o6,[A.aGd,A.aGe,A.aGf,A.aGw,A.buy,A.buz,A.bwq,A.buA,A.bux,A.buw,A.aGl,A.aGr,A.aGk,A.aLp,A.bfV,A.bfW,A.bfX,A.bfY,A.bfZ,A.bg_,A.bg0,A.bg1,A.bg2,A.bg3,A.bg4,A.btG,A.boR,A.b6H,A.b7G,A.b7H,A.bgI,A.br1,A.b54,A.b57,A.b58,A.btE,A.b5a,A.ayN,A.ayQ,A.ayv,A.b_n,A.b_o,A.b_p,A.b_q,A.b_r,A.aVC,A.aVD,A.aVE,A.aVG,A.aVH,A.aVJ,A.aVK,A.aVL,A.aVM,A.aVN,A.aVO,A.bgk,A.bgl,A.aLD,A.bun,A.bum,A.buk,A.aLF,A.aLG,A.ayG,A.aC_])
t(A.yz,B.fF)
u(B.y_,[A.aGc,A.aGb,A.aGu,A.aGm,A.aGn,A.aGo,A.aGp,A.aGq,A.aGt,A.aGi,A.aGj,A.bj2,A.bj3,A.bj4,A.aLr,A.bg6,A.bg7,A.btF,A.bg8,A.b56,A.b4Z,A.b5_,A.b52,A.b53,A.btD,A.b4T,A.b4U,A.b4V,A.b4X,A.b4W,A.b4Y,A.b59,A.ayT,A.aVF,A.aVI,A.bgi,A.bgj,A.aLI,A.aLJ,A.ayK])
u(B.y7,[A.yA,A.aoU,A.a7I,A.ai7])
u(B.y0,[A.aGs,A.bj1,A.bpK,A.aLq,A.bg5,A.boP,A.boQ,A.b6G,A.b6I,A.b6J,A.b7I,A.b7J,A.bgJ,A.br2,A.b55,A.b50,A.b51,A.ayO,A.ayS,A.ayu,A.bgh,A.aLK,A.aLL,A.ayH,A.ayL,A.ayI,A.ayJ,A.aIH])
u(B.N,[A.Bg,A.S0])
u(B.a_,[A.U3,A.YN])
u(B.O5,[A.Ld,A.OL])
u(B.uG,[A.U4,A.Ww])
t(A.a1Q,A.ail)
t(A.ahZ,A.a1Q)
t(A.a1A,A.ahZ)
u(A.a1A,[A.aia,A.ank])
t(A.o1,A.aia)
u(B.Ih,[A.ayE,A.aeG,A.D5,A.aFr,A.aLs,A.NP])
t(A.fK,A.aib)
t(A.ip,A.aid)
t(A.mP,A.aie)
t(A.a1H,A.ai3)
t(A.Nq,A.alF)
u(A.Nq,[A.aig,A.ano])
t(A.a1M,A.aig)
t(A.a1N,A.aih)
t(A.D6,A.aif)
u(A.az1,[A.Le,A.ON])
t(A.aeI,A.atB)
t(A.aii,A.aeI)
t(A.a1O,A.aii)
u(B.b4,[A.xM,A.zn])
t(A.uM,A.aic)
t(A.L7,A.Lh)
u(A.L7,[A.ayR,A.aLH])
u(B.OG,[A.a1K,A.a7U])
u(B.J,[A.Gn,A.ai0])
u(A.Gn,[A.abQ,A.ac2])
t(A.qh,A.arY)
t(A.adf,A.arX)
t(A.pm,A.ai2)
t(A.v9,A.alE)
t(A.yC,A.alB)
t(A.pJ,A.alD)
t(A.Qz,A.aq4)
t(A.n8,A.amu)
t(A.nw,A.auj)
u(A.pJ,[A.amt,A.aui])
t(A.kW,A.amt)
t(A.ln,A.aui)
t(A.a64,A.alC)
u(A.a64,[A.ams,A.auh])
t(A.a6W,A.ams)
t(A.af5,A.auh)
t(A.Na,A.alg)
t(A.v8,A.alA)
t(A.Nj,A.v8)
t(A.adg,B.ha)
t(A.ai1,A.ai0)
t(A.U1,A.ai1)
t(A.a1B,A.U1)
t(A.jY,A.ai_)
t(A.a61,A.alx)
t(A.a63,A.aly)
u(A.hw,[A.a67,A.a68,A.a69,A.Nl,A.Nm,A.a6c,A.No,A.Np,A.a66,A.a65,A.Nk,A.a6a,A.a6b,A.Nn])
t(A.pX,A.ank)
t(A.ea,A.anj)
t(A.OM,A.anm)
t(A.a1J,A.ai8)
t(A.mQ,A.aim)
t(A.Lc,A.ai9)
t(A.yB,A.alz)
t(A.EV,A.ano)
t(A.a7V,A.anp)
t(A.ani,A.eB)
t(A.nb,A.ani)
t(A.qq,A.nb)
t(A.rE,A.ann)
t(A.tI,A.atA)
t(A.GP,A.arW)
t(A.zo,A.anl)
t(A.zs,A.anw)
w(A.ai3,A.bj)
w(A.aia,A.bj)
w(A.aib,A.bj)
w(A.aid,A.bj)
w(A.aie,A.bj)
w(A.aif,A.bj)
w(A.aig,A.bj)
w(A.aih,A.bj)
w(A.aii,A.bj)
w(A.aic,A.bj)
w(A.ahZ,A.bj)
w(A.ai2,A.bj)
w(A.alg,A.bj)
w(A.alA,A.bj)
w(A.alB,A.bj)
w(A.alD,A.bj)
w(A.alE,A.bj)
w(A.amt,A.bj)
w(A.ams,A.bj)
w(A.amu,A.bj)
w(A.aq4,A.bj)
w(A.arX,A.bj)
w(A.arY,A.bj)
w(A.atB,A.bj)
w(A.aui,A.bj)
w(A.auh,A.bj)
w(A.auj,A.bj)
w(A.ai_,A.bj)
v(A.ai0,B.aE)
w(A.ai1,B.e7)
v(A.U1,B.a50)
w(A.ail,A.bj)
w(A.alx,A.bj)
w(A.aly,A.bj)
w(A.alF,A.bj)
w(A.ai8,A.bj)
w(A.ai9,A.bj)
w(A.aim,A.bj)
w(A.alz,A.bj)
w(A.alC,A.bj)
w(A.ani,A.bj)
w(A.anj,A.bj)
w(A.ank,A.bj)
w(A.anm,A.bj)
w(A.ann,A.bj)
w(A.ano,A.bj)
w(A.anp,A.bj)
w(A.arW,A.bj)
w(A.atA,A.bj)
w(A.anl,A.bj)
w(A.anw,A.bj)})()
B.brg(b.typeUniverse,JSON.parse('{"a7H":{"G":[],"c":[]},"Ei":{"aGh":[]},"yz":{"fF":["bg<~>"],"fF.T":"bg<~>"},"JB":{"G":[],"c":[]},"Ii":{"G":[],"c":[]},"yA":{"bf":[],"N":[],"c":[]},"ahe":{"G":[],"c":[]},"amD":{"G":[],"c":[]},"aoU":{"bf":[],"N":[],"c":[]},"Jb":{"G":[],"c":[]},"ahc":{"G":[],"c":[]},"ID":{"G":[],"c":[]},"wW":{"G":[],"c":[]},"Bg":{"N":[],"c":[]},"a7I":{"bf":[],"N":[],"c":[]},"alV":{"G":[],"c":[]},"ana":{"G":[],"c":[]},"Vh":{"G":[],"c":[]},"YZ":{"G":[],"c":[]},"Ur":{"G":[],"c":[]},"UI":{"G":[],"c":[]},"anG":{"G":[],"c":[]},"ajW":{"G":[],"c":[]},"Cg":{"G":[],"c":[]},"atx":{"G":[],"c":[]},"ai7":{"bf":[],"N":[],"c":[]},"U3":{"a_":["Bg"]},"Ld":{"N":[],"c":[]},"U4":{"a_":["Ld"]},"o1":{"bj":[]},"fK":{"bj":[]},"ip":{"bj":[]},"mP":{"bj":[]},"D6":{"bj":[]},"xM":{"b4":["o1"],"b7":["o1"],"b7.T":"o1","b4.T":"o1"},"a1H":{"bj":[]},"a1M":{"bj":[]},"a1N":{"bj":[]},"a1O":{"bj":[]},"uM":{"bj":[]},"a1K":{"aV":[],"c":[]},"abQ":{"J":[],"L":[],"jx":[],"aU":[]},"pJ":{"bj":[]},"n8":{"bj":[]},"nw":{"bj":[]},"kW":{"bj":[]},"ln":{"bj":[]},"v8":{"bj":[]},"a1A":{"bj":[]},"qh":{"bj":[]},"adf":{"bj":[]},"pm":{"bj":[]},"v9":{"bj":[]},"yC":{"bj":[]},"aeI":{"bj":[]},"Qz":{"bj":[]},"a6W":{"bj":[]},"af5":{"bj":[]},"Na":{"bj":[]},"Nj":{"bj":[]},"L8":{"G":[],"c":[]},"S0":{"N":[],"c":[]},"YN":{"a_":["S0"]},"jY":{"bj":[]},"adg":{"ha":[],"aV":[],"c":[]},"a1B":{"e7":["J","hx"],"J":[],"aE":["J","hx"],"L":[],"aU":[],"aE.1":"hx","e7.1":"hx","aE.0":"J"},"AH":{"G":[],"c":[]},"a1Q":{"bj":[]},"a61":{"bj":[]},"Nq":{"bj":[]},"a63":{"bj":[]},"a67":{"hw":[]},"a68":{"hw":[]},"a69":{"hw":[]},"Nl":{"hw":[]},"Nm":{"hw":[]},"a6c":{"hw":[]},"No":{"hw":[]},"Np":{"hw":[]},"a66":{"hw":[]},"a65":{"hw":[]},"Nk":{"hw":[]},"a6a":{"hw":[]},"a6b":{"hw":[]},"Nn":{"hw":[]},"Gn":{"J":[],"L":[],"jx":[],"aU":[]},"OL":{"N":[],"c":[]},"Ww":{"a_":["OL"]},"pX":{"bj":[]},"ea":{"bj":[]},"mQ":{"bj":[]},"nb":{"eB":[],"bj":[]},"qq":{"nb":[],"eB":[],"bj":[]},"rE":{"bj":[]},"tI":{"bj":[]},"GP":{"bj":[]},"zn":{"b4":["pX"],"b7":["pX"],"b7.T":"pX","b4.T":"pX"},"OM":{"bj":[]},"a1J":{"bj":[]},"Lc":{"bj":[]},"yB":{"bj":[]},"a64":{"bj":[]},"EV":{"bj":[]},"a7V":{"bj":[]},"zo":{"bj":[]},"a7U":{"aV":[],"c":[]},"ac2":{"J":[],"L":[],"jx":[],"aU":[]},"zs":{"bj":[]}}'))
B.bKG(b.typeUniverse,JSON.parse('{"L7":1,"Nq":1,"Lh":1,"Gn":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("CP"),e:w("bg<oj>"),aN:w("bg<ok>"),fM:w("bg<a3<f,@>?>"),b:w("bg<~>"),W:w("jY"),B:w("o1"),dB:w("fK"),gF:w("uM"),fj:w("ip"),G:w("mP"),bO:w("mQ"),k:w("ar"),C:w("a2o<F>"),dO:w("uT"),R:w("a4<f,@>"),g:w("hr"),bz:w("lQ<b9>"),f0:w("oc"),E:w("bj"),F:w("yz"),X:w("oj"),P:w("lW"),D:w("v7"),a:w("aGh"),d:w("ok"),cw:w("eB"),L:w("hx"),m:w("dv<v,E>"),cm:w("kW"),dv:w("n8"),M:w("D<o0>"),I:w("D<bEL>"),O:w("D<fK>"),Y:w("D<ip>"),U:w("D<eB>"),K:w("D<a6L>"),u:w("D<ea>"),bC:w("D<vF>"),aA:w("D<u<eB>>"),v:w("D<ec>"),r:w("D<GP>"),s:w("D<f>"),eg:w("D<tE>"),df:w("D<qq>"),p:w("D<c>"),n:w("D<F>"),t:w("D<v>"),eF:w("bk<a_<N>>"),Z:w("nb"),cz:w("ea"),hf:w("pX"),dj:w("zo"),fT:w("rE"),c_:w("is<p7<bg<~>>>"),x:w("zs<fK>"),y:w("zs<ea>"),J:w("u<v>"),ef:w("vJ"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<F,F>"),w:w("kd"),aU:w("B"),Q:w("vU<o1>"),o:w("vU<pX>"),dc:w("ec"),eo:w("q7"),gJ:w("q8"),V:w("kp<lW>"),N:w("f"),A:w("nr"),bP:w("bK"),er:w("tE"),j:w("wF"),dw:w("qq"),bY:w("tI"),cZ:w("qs"),gc:w("j7"),es:w("ln"),bN:w("nw"),l:w("c"),q:w("xe"),g4:w("ii<F>"),cJ:w("C"),i:w("F"),z:w("@"),S:w("v"),bn:w("xM?"),f3:w("zn?"),T:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("j7?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bb=new B.lJ(C.m,B.aw("lJ<E>"))
D.Bi=new A.D5(0,"left")
D.mH=new A.D5(1,"top")
D.Bj=new A.D5(2,"right")
D.dQ=new A.D5(3,"bottom")
D.az0=new A.qh(!1,A.bBq(),22,null)
D.kw=new A.pm(16,null,D.az0,!0)
D.a9f=new A.pJ(C.E,null,2,null)
D.w7=new A.Lc(!1,D.a9f,A.c7s(),!0)
D.a_A=new A.ayE(3,"spaceEvenly")
D.a_J=new B.xQ(6,"dstIn")
D.Xv=new B.aW(3,3)
D.Bm=new B.d5(D.Xv,D.Xv,C.a2,C.a2)
D.a_U=new B.bo(C.E,0,C.S,-1)
D.BV=new A.a63()
D.a1D=new A.Nl()
D.a1E=new A.No()
D.aR1=new A.adf()
D.amH=w([],B.aw("D<kW>"))
D.amI=w([],B.aw("D<ln>"))
D.E2=new A.Na(D.amH,D.amI,!0)
D.a8V=new B.dI("Zeitraum",!1,null)
D.a90=new B.dI("Konten (SKR 03)",!1,null)
D.xM=new A.aFr(0,"center")
D.aRe=new A.yB(!0,A.bBX(),A.bML())
D.E6=new A.yB(!1,A.bBX(),A.bML())
D.E7=new A.yC(!1,!0,null,A.awb(),A.a0c(),!0,null,A.awb(),A.a0c())
D.aRf=new A.yC(!0,!0,null,A.awb(),A.a0c(),!0,null,A.awb(),A.a0c())
D.a40=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3L=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4a=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a44=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3s=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3r=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a4z=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a3U=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4C=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4w=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.asW=new B.dv([50,D.a40,100,D.a3L,200,D.a4a,300,D.a44,400,D.a3s,500,D.a3r,600,D.a4z,700,D.a3U,800,D.a4C,900,D.a4w],x.m)
D.dv=new B.rL(D.asW,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aiI=w([8,4],x.t)
D.a9d=new A.pJ(D.dv,null,0.4,D.aiI)
D.a9e=new A.pJ(C.a4,null,0.5,null)
D.fP=new A.eB(0/0,0/0)
D.az2=new A.qh(!0,A.bBq(),44,null)
D.mI=new A.pm(16,null,D.az2,!0)
D.az1=new A.qh(!0,A.bBq(),30,null)
D.mJ=new A.pm(16,null,D.az1,!0)
D.a9g=new A.v9(!1,D.mI,D.mJ,D.mI,D.mJ)
D.aRg=new A.v9(!0,D.mI,D.mJ,D.mI,D.mJ)
D.Ef=new A.NP(0,"left")
D.a9U=new A.NP(1,"center")
D.Eg=new A.NP(2,"right")
D.a9Z=new B.a5(57495,"MaterialIcons",null,!1)
D.y4=new B.a5(58927,"MaterialIcons",null,!1)
D.aaO=new B.a5(59005,"MaterialIcons",null,!0)
D.aaP=new B.a5(59007,"MaterialIcons",null,!0)
D.aaQ=new B.a5(59011,"MaterialIcons",null,!1)
D.abQ=new B.a5(62589,"MaterialIcons",null,!1)
D.ab7=new B.a5(61349,"MaterialIcons",null,!1)
D.acI=new B.aA(D.ab7,20,C.h,null,null)
D.abd=new B.a5(61487,"MaterialIcons",null,!1)
D.acK=new B.aA(D.abd,18,null,null,null)
D.acL=new B.aA(D.y4,18,null,null,null)
D.ad8=new B.aA(C.hZ,null,C.h,null,null)
D.ad9=new B.aA(C.nW,null,C.p,null,null)
D.adz=new B.aA(C.o1,16,null,null,null)
D.adF=new B.aA(C.yd,16,null,null,null)
D.aa9=new B.a5(57912,"MaterialIcons",null,!1)
D.adI=new B.aA(D.aa9,null,C.aa,null,null)
D.abO=new B.a5(62584,"MaterialIcons",null,!1)
D.adT=new B.aA(D.abO,16,null,null,null)
D.adZ=new B.aA(D.y4,16,null,null,null)
D.ag2=new A.a7I(null)
D.aRl=new A.aLs(0,"horizontal")
D.yn=new A.zo(0,0,0,0,!1)
D.Fs=new A.OM(0.5)
D.C0=new A.a7V()
D.agf=new A.EV(D.C0,A.bMP(),10,A.bMM(),!0,A.bMO(),A.bMN(),!1,null,null,null)
D.aRn=new A.EV(D.C0,A.bMP(),10,A.bMM(),!0,A.bMO(),A.bMN(),!0,null,null,null)
D.ahH=w([4,3],x.t)
D.axc=new B.aJ("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ax1=new B.aJ("receivables","Forderungen (kurzfristig)")
D.awQ=new B.aJ("inventory_value","Vorr\xe4te (Warenbestand)")
D.awO=new B.aJ("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.awB=new B.aJ("fixed_assets","Anlageverm\xf6gen")
D.awI=new B.aJ("current_liabilities","Kurzfristige Verbindlichkeiten")
D.ax8=new B.aJ("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ax0=new B.aJ("equity","Eigenkapital")
D.pH=w([D.axc,D.ax1,D.awQ,D.awO,D.awB,D.awI,D.ax8,D.ax0],B.aw("D<+(f,f)>"))
D.aRq=w([],x.M)
D.amu=w([],x.O)
D.amv=w([],x.Y)
D.amw=w([],B.aw("D<mP>"))
D.amx=w([],B.aw("D<mQ>"))
D.aRr=w([],x.U)
D.aRs=w([],x.u)
D.amy=w([],x.r)
D.atw={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ta={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z3=new B.a4(D.Ta,[0,0,0,0,0,0,0,C.c1],B.aw("a4<f,B>"))
D.att={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.asQ=new B.a4(D.att,[0,0,0,0],B.aw("a4<f,v>"))
D.atL={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqq=new B.a4(D.atL,[0,0,0,0,null,null,null,null],B.aw("a4<f,v?>"))
D.aqj=new B.a4(D.atw,[D.z3,D.z3,D.z3,C.c1,C.c1,C.c1,D.asQ,D.aqq],x.R)
D.aqD=new B.a4(D.Ta,[0,0,0,0,0,0,0,C.cv],x.R)
D.atx={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqF=new B.a4(D.atx,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("a4<f,F>"))
D.ats={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.asR=new B.a4(D.ats,[0,0,0,0,0,0,0,C.cv],x.R)
D.atX={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.asS=new B.a4(D.atX,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("a4<f,f>"))
D.a4I=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4Q=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3v=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a3X=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a46=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a54=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3f=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a3Z=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a49=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a4x=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.asX=new B.dv([50,D.a4I,100,D.a4Q,200,D.a3v,300,D.a3X,400,D.a46,500,D.a54,600,D.a3f,700,D.a3Z,800,D.a49,900,D.a4x],x.m)
D.SX=new B.rL(D.asX,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8c=new B.ah(32,32,32,32)
D.auR=new B.ad(D.a8c,C.bK,null)
D.a8e=new B.ah(48,48,48,48)
D.auU=new B.ad(D.a8e,C.bK,null)
D.av_=new B.ad(C.al,C.bK,null)
D.amJ=w([],B.aw("D<n8>"))
D.amK=w([],B.aw("D<nw>"))
D.Xx=new A.Qz(D.amJ,D.amK)
D.axZ=new B.fT("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ay0=new B.fT("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ay2=new B.fT("Automaten-Business","Umsatz je Automat",null,null)
D.ay5=new B.fT("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ay7=new B.fT("Top","Meistverkaufte Produkte",null,null)
D.ayb=new B.fT("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ayc=new B.fT("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yd=new B.tn(C.K,C.v,0)
D.aGD=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aAM=new B.e2(D.aGD,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIB=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aAP=new B.e2(D.aIB,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGQ=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aAQ=new B.e2(D.aGQ,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIu=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aAS=new B.e2(D.aIu,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aI_=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aAT=new B.e2(D.aI_,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aHX=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aBb=new B.e2(D.aHX,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aRC=new B.T(!0,C.E,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGN=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aGY=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aHJ=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aHP=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aI3=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aIN=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zt=new A.aeG(0,"auto")
D.aJq=new A.aeG(1,"top")
D.aNQ=new A.wW("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aNR=new A.wW("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cgk","bR3",()=>B.iX(new A.buy(),x.D))
w($,"cgl","awO",()=>B.iX(new A.buz(),x.a))
w($,"chl","xA",()=>B.bA5(new A.bwq(),x.P))
w($,"cgm","bxk",()=>C.aG.$1$1(new A.buA(),x.d))
w($,"cgj","bR2",()=>C.aG.$1$1(new A.bux(),x.X))
w($,"cgi","bxj",()=>C.aG.$1$1(new A.buw(),x.h))
w($,"cgh","bxi",()=>B.b0d(A.c6y(),x.F,x.b))
w($,"c9n","bwR",()=>new A.ayt())
v($,"ccJ","lF",()=>new A.b2U())})()};
(a=>{a["zdVL+e2CLU+TV584KjrKd5S/do8="]=a.current})($__dart_deferred_initializers__);