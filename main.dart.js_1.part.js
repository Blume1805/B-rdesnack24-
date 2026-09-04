((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Of(d,e,f,g,h){return new A.a6Y(f,g,d,h,e,null)},
a6Y:function a6Y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
v1:function v1(d){this.a=d},
E8:function E8(d){this.a=d},
bUw(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.S(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SG
w=x.f
v=x.N
u=x.z
t=A.aG_(B.cT(w.a(e.h(a0,"current")),v,u))
s=A.aG_(B.cT(w.a(e.h(a0,"prior_year")),v,u))
r=A.aG_(B.cT(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cb
p=J.d2(p,new A.aFI(),x.cZ)
p=B.Q(p,p.$ti.i("ar.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cb
o=J.d2(o,new A.aFJ(),x.ef)
o=B.Q(o,o.$ti.i("ar.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cb
q=J.d2(q,new A.aFK(),x.j)
q=B.Q(q,q.$ti.i("ar.E"))
n=B.cT(w.a(e.h(a0,"customer")),v,u)
m=B.bk(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.p9(n.h(0,"app_gross"))
k=B.bk(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.p9(n.h(0,"avg_basket"))
u=B.cT(w.a(e.h(a0,"derived")),v,u)
v=A.p9(u.h(0,"gross_margin_pct"))
e=A.p9(u.h(0,"net_margin_pct"))
w=A.p9(u.h(0,"ebitda_margin_pct"))
j=A.p9(u.h(0,"cashflow_operating"))
i=A.bt9(u.h(0,"revenue_growth_yoy_pct"))
h=A.bt9(u.h(0,"revenue_growth_mom_pct"))
g=A.bt9(u.h(0,"result_growth_yoy_pct"))
u=A.bt9(u.h(0,"result_growth_mom_pct"))
f=B.bk(J.a2(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.og(t,s,r,p,o,q,new A.aAP(m,l,k,n),new A.aBW(v,e,w,j,i,h,g,u),f)},
p9(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
bt9(d){if(d==null)return null
if(typeof d=="number")return d
return B.hx(J.a6(d))},
qt:function qt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vC:function vC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wx:function wx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAP:function aAP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBW:function aBW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
og:function og(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFI:function aFI(){},
aFJ:function aFJ(){},
aFK:function aFK(){},
aG_(d){var w=J.S(d),v=A.uf(w.h(d,"revenue_net_7")),u=A.uf(w.h(d,"revenue_net_19")),t=A.uf(w.h(d,"revenue_net")),s=A.uf(w.h(d,"expense_net")),r=A.uf(w.h(d,"result_net")),q=A.uf(w.h(d,"vat_collected")),p=A.uf(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cb
w=J.d2(w,new A.aG0(),x._)
w=B.Q(w,w.$ti.i("ar.E"))
return new A.oh(v,u,t,s,r,q,p,w)},
uf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
CI:function CI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oh:function oh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aG0:function aG0(){},
bUv(d){return new A.yx(d,new B.i5(x.c_),C.bS)},
bu7:function bu7(){},
bu8:function bu8(){},
bvW:function bvW(){},
bu9:function bu9(){},
bu6:function bu6(){},
bu5:function bu5(){},
yx:function yx(d,e,f){this.r=d
this.a=e
this.f=f},
aFH:function aFH(d,e,f){this.a=d
this.b=e
this.c=f},
aFG:function aFG(d,e,f){this.a=d
this.b=e
this.c=f},
bUx(){return new A.yy(null)},
alJ(d,e,f,g,h){return new A.alI(e,h,g,f,d,null)},
yy:function yy(d){this.a=d},
aFZ:function aFZ(d){this.a=d},
aFR:function aFR(d,e,f){this.a=d
this.b=e
this.c=f},
aFS:function aFS(d,e,f){this.a=d
this.b=e
this.c=f},
aFT:function aFT(d){this.a=d},
aFQ:function aFQ(){},
aFU:function aFU(d){this.a=d},
aFV:function aFV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFY:function aFY(){},
aFX:function aFX(){},
aFW:function aFW(){},
aFP:function aFP(d,e){this.a=d
this.b=e},
aFN:function aFN(d){this.a=d},
aFO:function aFO(d){this.a=d},
agw:function agw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alI:function alI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ao2:function ao2(d,e){this.e=d
this.a=e},
biJ:function biJ(d){this.a=d},
biK:function biK(d){this.a=d},
biL:function biL(d,e,f){this.a=d
this.b=e
this.c=f},
biI:function biI(){},
IW:function IW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jp:function Jp(d,e){this.c=d
this.a=e},
bp3:function bp3(d){this.a=d},
agu:function agu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I1:function I1(d,e){this.c=d
this.a=e},
bAW(d,e,f,g,h){var w=null
return B.fK(w,w,!0,w,new A.bt4(h,g,e,f),d,w,!0,!0,x.H)},
jR(d,e,f,g,h,i,j,k,l,m,n){return new A.amj(g,n,i,e,d,m,f,k,l,j,null)},
av6(d,e){return A.c4_(d,e)},
c4_(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$av6=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aR(D.azi)
t=4
o=e.ap(0,$.bW(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hj("finance-balance-sync",B.A(n,n)),$async$av6)
case 7:r=g
q=B.cT(x.f.a(r.a),x.N,n)
l.Xi()
if(J.d(J.a2(q,"configured"),!1)){l.aR(D.azm)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bwS()
if(e.e==null)B.P(B.T(y.b))
e.gc5().bA(o)
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Xi()
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$av6,v)},
av9(d,e,f){var w=0,v=B.q(x.H)
var $async$av9=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.fK(null,null,!0,null,new A.bt2(f,e,e.ap(0,$.bW(),x.A)),d,null,!0,!0,x.H),$async$av9)
case 2:return B.o(null,v)}})
return B.p($async$av9,v)},
a6Z:function a6Z(d){this.a=d},
aKT:function aKT(){},
aKS:function aKS(){},
aKR:function aKR(){},
Im:function Im(d,e){this.c=d
this.a=e},
bfS:function bfS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfH:function bfH(){},
bfI:function bfI(){},
bfJ:function bfJ(){},
bfK:function bfK(){},
bfL:function bfL(){},
bfM:function bfM(){},
bfN:function bfN(){},
bfO:function bfO(){},
bfP:function bfP(d){this.a=d},
bfQ:function bfQ(d){this.a=d},
bfR:function bfR(d){this.a=d},
bfT:function bfT(d,e){this.a=d
this.b=e},
bfU:function bfU(d,e){this.a=d
this.b=e},
bt4:function bt4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bt3:function bt3(d){this.a=d},
al0:function al0(d){this.a=d},
amj:function amj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfV:function bfV(d,e){this.a=d
this.b=e},
UJ:function UJ(d,e,f){this.c=d
this.d=e
this.a=f},
Yj:function Yj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boc:function boc(){},
bod:function bod(){},
boe:function boe(d){this.a=d},
TW:function TW(d,e,f){this.c=d
this.d=e
this.a=f},
b6w:function b6w(){},
b6y:function b6y(d){this.a=d},
b6z:function b6z(d){this.a=d},
b6x:function b6x(){},
U7:function U7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7m:function b7m(){},
b7n:function b7n(){},
b7o:function b7o(){},
b7p:function b7p(d){this.a=d},
amP:function amP(d,e){this.c=d
this.a=e},
bgt:function bgt(){},
bgu:function bgu(){},
aj5:function aj5(d,e){this.c=d
this.a=e},
C9:function C9(d,e,f){this.c=d
this.d=e
this.a=f},
asA:function asA(d,e){this.c=d
this.a=e},
bqq:function bqq(){},
bqr:function bqr(){},
wQ:function wQ(d,e){this.c=d
this.a=e},
ahm:function ahm(d,e){this.e=d
this.a=e},
b4V:function b4V(){},
b4U:function b4U(){},
b4T:function b4T(d,e,f){this.a=d
this.b=e
this.c=f},
b4N:function b4N(d,e){this.a=d
this.b=e},
b4O:function b4O(d,e){this.a=d
this.b=e},
b4W:function b4W(d){this.a=d},
b4X:function b4X(d){this.a=d},
b4P:function b4P(){},
b4Q:function b4Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4R:function b4R(d,e){this.a=d
this.b=e},
b4S:function b4S(d,e,f){this.a=d
this.b=e
this.c=f},
bt2:function bt2(d,e,f){this.a=d
this.b=e
this.c=f},
bt1:function bt1(d){this.a=d},
Ba:function Ba(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tz:function Tz(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4H:function b4H(){},
b4I:function b4I(d){this.a=d},
b4J:function b4J(d){this.a=d},
b4L:function b4L(d,e){this.a=d
this.b=e},
b4K:function b4K(d,e){this.a=d
this.b=e},
b4M:function b4M(d){this.a=d},
bh:function bh(){},
bEo(d){return new A.KX(d,C.az,C.dA,null,null)},
KX:function KX(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TA:function TA(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fA$=f
_.cW$=g
_.c=_.a=null},
b4Y:function b4Y(d,e){this.a=d
this.b=e},
b4Z:function b4Z(d){this.a=d},
ay2(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alp:f,p=a0==null?16:a0,o=d==null?D.a_t:d,n=g==null,m=n?A.bxl(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xq:a3
n=n?A.bxl(r,r,r,r,r,r,r,r):g
w=j==null?D.DM:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.o_(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BI,s,w,i,n)},
ay9(d,e,f,g,h){var w=d==null?D.alq:d,v=e==null?2:e,u=g==null?C.lu:g
return new A.fL(h,f===!0,w,v,u)},
bRO(d,e,f){var w=d.a
w=C.d.aV(w+(e.a-w)*f)
return A.ay9(A.kA(d.c,e.c,f,A.c4P(),x.fj),B.ah(d.d,e.d,f),!1,A.kA(d.e,e.e,f,A.a_u(),x.S),w)},
a0Z(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SP
else w=h
v=m==null
u=v?8:m
t=$.lv()
s=t.aY2(f,v?8:m)
t=t.aY3(g,v?8:m)
v=d==null?A.bEm(r,r,r,r,r):d
return new A.it(q,l,w,j,u,s,e,t,v,k==null?D.alr:k)},
bRP(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.mK(d.f,e.f,f),p=A.kA(d.r,e.r,f,A.a_u(),x.S),o=B.bY(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a0Z(A.bEm(v,u,null,!1,t),p,q,o,s,n,null,A.kA(d.y,e.y,f,A.c4Q(),x.G),m,r)},
bRQ(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mI(u,w,v,B.bY(d.d,e.d,f))},
bEm(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0V(g===!0,v,u,w,f)},
bxl(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a10(4,C.hO,16,D.xx,0,120,A.c4S(),!1,!1,D.Zm,0,C.J,A.c4R())
else w=k
v=j==null?C.l2:j
return new A.a1_(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5F(d,e,f,g){var w=null,v=B.j6(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D_(C.d.j(f.b),v)},
c5E(d){return A.aAd(D.dp,15)},
o_:function o_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ay1:function ay1(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aya:function aya(){},
ayb:function ayb(){},
it:function it(d,e,f,g,h,i,j,k,l,m){var _=this
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
mI:function mI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0V:function a0V(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1_:function a1_(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adY:function adY(d,e){this.a=d
this.b=e},
a10:function a10(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D_:function D_(d,e){this.a=d
this.b=e},
KY:function KY(d){this.a=d},
a11:function a11(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xL:function xL(d,e){this.a=d
this.b=e},
ahi:function ahi(){},
ahp:function ahp(){},
ahq:function ahq(){},
ahs:function ahs(){},
aht:function aht(){},
ahu:function ahu(){},
ahv:function ahv(){},
ahw:function ahw(){},
ahx:function ahx(){},
ayc:function ayc(d){this.a=d},
ayd:function ayd(){},
uD:function uD(d,e,f){this.a=d
this.b=e
this.c=f},
ahr:function ahr(){},
aye:function aye(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayf:function ayf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayg:function ayg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a62:function a62(d){this.b=d},
a0Y:function a0Y(d,e,f){this.d=d
this.e=e
this.a=f},
ab5:function ab5(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.h_=f
_.fC=g
_.A=h
_.a2=_.U=_.V=null
_.a4=i
_.bz=_.aJ=_.ah=_.av=$
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
c5G(d,e){var w=null
return new A.Rz(e.w,B.h(e.r,w,w,w,w,w,w,w),w)},
axV(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.pk(t,e.b,new A.qk(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bFM(d,e,f){var w=A.axV(d.b,e.b,f),v=A.axV(d.d,e.d,f),u=A.axV(d.e,e.e,f)
return new A.v3(e.a,w,A.axV(d.c,e.c,f),v,u)},
bUz(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bFK(d,e,f){return new A.yA(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
c84(d){return!0},
c5J(d){return D.a8y},
bFL(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pH(w,f,g,e)},
bHI(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c4L(),x.dv)
v.toString
w=A.kA(d.b,e.b,f,A.c4N(),x.bN)
w.toString
return new A.Q8(v,w)},
bVj(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rr(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.n4(t,w,v,u)},
c_z(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rr(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.nu(t,w,v,u)},
bVi(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oc(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bVg(B.bxe(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rr(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.a_u(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
c_y(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oc(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.c_w(B.bxe(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rr(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.a_u(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bVg(d,e,f,g,h,i){return new A.a6d(f,!1,g,i,d,e)},
bVh(d){return C.d.al(d.e,1)},
c_w(d,e,f,g,h,i){return new A.aem(f,!1,g,i,d,e)},
c_x(d){return C.d.al(d.e,1)},
bFF(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c4K(),x.cm)
v.toString
w=A.kA(d.b,e.b,f,A.c4M(),x.es)
w.toString
return new A.MV(v,w,!0)},
bUy(d,e,f){return new A.N1(d,e==null?4:e,f)},
a0O:function a0O(){},
CZ:function CZ(d,e){this.a=d
this.b=e},
tA:function tA(d,e){this.r=d
this.w=e},
qk:function qk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acw:function acw(){},
pk:function pk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v3:function v3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB:function eB(d,e){this.a=d
this.b=e},
yA:function yA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pH:function pH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae_:function ae_(){},
Q8:function Q8(d,e){this.a=d
this.b=e},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nu:function nu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kS:function kS(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lf:function lf(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6d:function a6d(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aem:function aem(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MV:function MV(d,e,f){this.a=d
this.b=e
this.c=f},
v2:function v2(){},
N1:function N1(d,e,f){this.a=d
this.b=e
this.c=f},
ahd:function ahd(){},
ahh:function ahh(){},
akr:function akr(){},
akG:function akG(){},
akH:function akH(){},
akJ:function akJ(){},
akK:function akK(){},
aly:function aly(){},
alx:function alx(){},
alz:function alz(){},
ap8:function ap8(){},
aqZ:function aqZ(){},
ar_:function ar_(){},
asE:function asE(){},
ati:function ati(){},
ath:function ath(){},
atj:function atj(){},
axR:function axR(){},
KR:function KR(){},
KS:function KS(d,e,f){this.c=d
this.d=e
this.a=f},
axT:function axT(d){this.a=d},
axS:function axS(d){this.a=d},
Rz:function Rz(d,e,f){this.c=d
this.e=e
this.a=f},
Y8:function Y8(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZ2(d,e,f){var w=B.ai(f),v=w.i("af<1,jZ>")
v=B.Q(new B.af(f,new A.b_h(),v),v.i("ar.E"))
w=w.i("af<1,c>")
w=B.Q(new B.af(f,new A.b_i(),w),w.i("ar.E"))
return new A.acx(e,d,v,w,null)},
bRL(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6P(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tx(v,C.aj,C.x,new B.ks(1),v,v,v,v,C.bm,v)
u=new A.a0P(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.g))
u.bl()
return u},
acx:function acx(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_h:function b_h(){},
b_i:function b_i(){},
a0P:function a0P(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.V=e
_.U=f
_.a2=g
_.WC$=h
_.aTR$=i
_.dm$=j
_.a9$=k
_.dG$=l
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
bg0:function bg0(d,e){this.a=d
this.b=e},
axU:function axU(){},
jZ:function jZ(d,e){this.a=d
this.b=e},
nZ:function nZ(d,e){this.a=d
this.b=e},
ahe:function ahe(){},
ahf:function ahf(){},
ahg:function ahg(){},
Tx:function Tx(){},
AD:function AD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_j:function b_j(d){this.a=d},
b_k:function b_k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_l:function b_l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5j(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a5i(e!==!1,w)},
a13:function a13(){},
a5i:function a5i(d,e){this.a=d
this.b=e},
N8:function N8(){},
a5k:function a5k(){},
ayp:function ayp(){},
aEX:function aEX(d,e){this.a=d
this.b=e},
ahA:function ahA(){},
akD:function akD(){},
akE:function akE(){},
akL:function akL(){},
L0:function L0(){},
vN:function vN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hn:function hn(){},
a5o:function a5o(d){this.a=d},
a5p:function a5p(d){this.a=d},
a5q:function a5q(d){this.a=d},
N3:function N3(){},
N4:function N4(){},
a5t:function a5t(d){this.a=d},
N6:function N6(){},
N7:function N7(d){this.a=d},
a5n:function a5n(d){this.a=d},
a5m:function a5m(d){this.a=d},
N2:function N2(d){this.a=d},
a5r:function a5r(d){this.a=d},
a5s:function a5s(d){this.a=d},
N5:function N5(d){this.a=d},
G8:function G8(){},
aVj:function aVj(d){this.a=d},
aVk:function aVk(d){this.a=d},
aVl:function aVl(d){this.a=d},
aVm:function aVm(d){this.a=d},
aVn:function aVn(d){this.a=d},
aVo:function aVo(d){this.a=d},
aVp:function aVp(d){this.a=d},
aVq:function aVq(d){this.a=d},
aVr:function aVr(d){this.a=d},
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(d){this.a=d},
Or:function Or(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VW:function VW(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fA$=g
_.cW$=h
_.c=_.a=null},
bg9:function bg9(d,e){this.a=d
this.b=e},
bg7:function bg7(d){this.a=d},
bg8:function bg8(d,e){this.a=d
this.b=e},
bg6:function bg6(){},
bga:function bga(d){this.a=d},
byB(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pT(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aL7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SP:u
else w=g
v=f==null?A.ay0(!1,u,0,u,!1,D.vS):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ay0(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.aru(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bEn(d.ay,e.ay,f)
v=A.bEn(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.kA(d.cy,e.cy,f,A.a_u(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rr(d.w,e.w,f)
p=A.kA(d.a,e.a,f,A.c4J(),x.cw)
p.toString
o=B.bId(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aL7(v,m,w,r,e.z,s,new A.yz(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Os(n),!1,u,o,!0,e.cx,p)},
ay0(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a0X(h,w,g,i,f,!1)},
bEn(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rr(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bFL(t,A.kA(v.d,u.d,f,A.a_u(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rr(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.ay0(!1,s,v,u,e.a,new A.KW(!1,r,w.c,!0))},
bRR(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rr(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mJ(e.a,e.b,w,v)},
c85(d){return!0},
bAH(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jy)return A.bBt(w.a,A.byh(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c2n(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jy)w=A.bBt(v.a,A.byh(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.aAd(w,40)},
bKK(d,e,f,g,h){var w,v=A.bAH(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jy)w=A.bBt(u.a,A.byh(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.aAd(w,40)
return new A.N1(v,h==null?4:h,u)},
c83(d,e){return!0},
c4s(d,e){return Math.abs(d.a-e.a)},
c5M(d,e){var w=J.d2(e,new A.btU(d),x.bY)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
c5I(d,e){return-1/0},
c5H(d,e){return d.a[e].b},
bLY(d){var w=J.d2(d,new A.btR(),x.fT)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
bLX(d){return A.aAd(D.dp,15)},
pT:function pT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ec:function ec(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aL8:function aL8(){},
Os:function Os(d){this.a=d},
a0X:function a0X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mJ:function mJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KW:function KW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yz:function yz(d,e,f){this.a=d
this.b=e
this.c=f},
aKU:function aKU(d,e){this.a=d
this.b=e},
a5l:function a5l(){},
EM:function EM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btU:function btU(d){this.a=d},
btT:function btT(d){this.a=d},
a7d:function a7d(){},
btR:function btR(){},
n8:function n8(){},
qr:function qr(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rF:function rF(d,e){this.a=d
this.b=e},
tB:function tB(d,e){this.a=d
this.b=e},
Gz:function Gz(d){this.a=d},
Ot:function Ot(d){this.a=d},
zl:function zl(d,e){this.a=d
this.b=e},
ahn:function ahn(){},
aho:function aho(){},
ahB:function ahB(){},
akF:function akF(){},
akI:function akI(){},
amr:function amr(){},
ams:function ams(){},
amt:function amt(){},
amv:function amv(){},
amw:function amw(){},
amx:function amx(){},
amy:function amy(){},
aqY:function aqY(){},
asD:function asD(){},
aL9:function aL9(d){this.a=d},
aLa:function aLa(){},
aLb:function aLb(){},
zm:function zm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amu:function amu(){},
aLc:function aLc(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLf:function aLf(){},
aLd:function aLd(d,e,f){this.a=d
this.b=e
this.c=f},
aLe:function aLe(d,e,f){this.a=d
this.b=e
this.c=f},
aLg:function aLg(){},
vy:function vy(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7c:function a7c(d,e,f){this.d=d
this.e=e
this.a=f},
abi:function abi(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.h_=f
_.fC=g
_.A=h
_.a2=_.U=_.V=null
_.a4=i
_.bz=_.aJ=_.ah=_.av=$
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
bxk(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bC(o.length,0,!1,x.i),m=B.ai(o),l=new B.af(o,new A.ay3(),m.i("af<1,K>")).kr(0,new A.ay4()),k=e-l,j=new A.ay7(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aD(0,new A.ay5(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aD(0,new A.ay6(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ay3:function ay3(){},
ay4:function ay4(){},
ay7:function ay7(d,e,f){this.a=d
this.b=e
this.c=f},
ay8:function ay8(d,e,f){this.a=d
this.b=e
this.c=f},
ay5:function ay5(d,e,f){this.a=d
this.b=e
this.c=f},
ay6:function ay6(d,e,f){this.a=d
this.b=e
this.c=f},
byh(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ai(w).i("iX<1>")).aD(0,new A.aIb(v,d))
else throw B.e(B.bI('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIb:function aIb(d,e){this.a=d
this.b=e},
aBp(d,e){var w,v
if(e!=null){w=B.ai(e).i("af<1,K>")
v=B.Q(new B.af(e,new A.aBq(),w),w.i("ar.E"))
return A.c5z(d,new A.a1F(v,x.C))}else return d},
aBq:function aBq(){},
bZE(d,e){var w=!0
if(d!==C.f6)if(!(d===C.aj&&e===C.x))w=d===C.io&&e===C.b_
if(w)return D.DZ
else{w=!0
if(d!==C.im)if(!(d===C.io&&e===C.x))w=d===C.aj&&e===C.b_
if(w)return D.E_
else return D.a9e}},
Nw:function Nw(d,e){this.a=d
this.b=e},
a1u:function a1u(d,e){this.a=d
this.b=e},
zp:function zp(d,e){this.a=d
this.$ti=e},
amF:function amF(){},
c5z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ah,k,k,h)
for(j=B.MP(d),w=B.b([],x.I),v=new B.MR(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.P(B.fB('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MQ(v,r)
v.Dj()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dj()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.e2(B.b([],i),!0,s)
p=new B.Ki(new B.ck(t,p,k,new B.apu([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1F:function a1F(d,e){this.a=d
this.b=0
this.$ti=e},
b2M:function b2M(){},
by5(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.H)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRU(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAd(d,e){var w=1-e/100
return B.aD(d.gfN(d),C.d.aV(d.gO8()*w),C.d.aV(d.gGc()*w),C.d.aV(d.gKt()*w))},
bFJ(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
by6(d){var w=d.a,v=w?A.b_g(d.b):0,u=w?A.b_g(d.c):0,t=w?A.b_g(d.d):0
return new B.al(v,u,t,w?A.b_g(d.e):0)},
bWZ(d){var w
if(d.c===0){d.seW(null)
w=B.c3(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gp(0)}},
byY(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.seW(f.mL(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seW(null)}},
b_g(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kA(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6S(d,e,f){return C.d.aV(d+(e-d)*f)},
bBt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kY(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6Y.prototype={
t(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aT:C.p
r=r?C.m:C.am
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.cl(t.x,C.m,s,18),C.aX],w))
v.push(B.ay(new B.dF(t.c,!1,s),1))
v=B.ak(v,C.z,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.h(t.d,1,C.aa,s,B.bz(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bi(r,B.a7(w,C.z,C.i9,C.i),q,s,C.ae,s,3)}}
A.v1.prototype={
LV(d){return this.aTQ(d)},
aTQ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LV=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_summary",B.a5(["p_from",E.rm(d.a),"p_to",E.rm(d.b)],s,r),r),$async$LV)
case 3:q=f
if(q==null){u=D.apn
w=1
break}if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.arC
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LV,v)},
LU(d){return this.aTP(d)},
aTP(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LU=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_kpis",B.a5(["p_from",E.rm(d.a),"p_to",E.rm(d.b)],s,r),r),$async$LU)
case 3:q=f
if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.ap5
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LU,v)},
pI(d){return this.arb(d)},
arb(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hj("sevdesk-sync",B.a5(["from",E.rm(d.a),"to",E.rm(d.b)],s,s)),$async$pI)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.a1(B.fI(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pI,v)},
LQ(d){return this.aTG(d)},
aTG(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LQ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hj("finance-export-pdf",B.a5(["from",E.rm(d.a),"to",E.rm(d.b)],s,s)),$async$LQ)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aH(J.a2(r,"base64"))
w=1
break}throw B.e(B.e8("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LQ,v)}}
A.E8.prototype={
G6(d){return this.akl(d)},
akl(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G6=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LV(d),$async$G6)
case 7:q=f
o=A.aG_(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G6,v)},
G1(d){return this.ak6(d)},
ak6(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G1=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LU(d),$async$G1)
case 7:q=f
o=A.bUw(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G1,v)},
pI(d){return this.ard(d)},
ard(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pI=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pI(d),$async$pI)
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
p=r.HJ(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pI,v)},
LP(d){return this.aTF(d)},
aTF(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LP=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LQ(d),$async$LP)
case 7:q=f
o=C.iM.cE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LP,v)},
HJ(d){if(d instanceof B.yu)return d
if(d instanceof B.m3){if(d.b==="42501")return new B.vR(d.a)
return new B.tg(d.a)}if(d instanceof B.Nl)return new B.tg("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B2("Unerwarteter Fehler: "+B.j(d))},
$iaFM:1}
A.qt.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wx.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAP.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBW.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.og.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CI.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yx.prototype={
H2(d){return this.ara(0)},
ara(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H2=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sdZ(0,C.db)
s=t.r
r=s.ap(0,$.xw(),x.P)
p.a=null
w=3
return B.k(B.pj(new A.aFH(p,t,r),x.H),$async$H2)
case 3:t.sdZ(0,f)
q=t.f
if(q.gfZ(q)==null){q=$.bwT()
s=s.e
s===$&&B.a()
s.bA(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H2,v)},
LO(){return this.aTE()},
aTE(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LO=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sdZ(0,C.db)
s=t.r.ap(0,$.xw(),x.P)
q.a=null
w=3
return B.k(B.pj(new A.aFG(q,t,s),x.H),$async$LO)
case 3:t.sdZ(0,e)
r=t.f
u=r.gfZ(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LO,v)}}
A.yy.prototype={
cw(d,e){var w=null,v=e.a8($.xw(),x.P),u=e.a8($.bwT(),x.aN)
return B.ia(B.dE(B.b([new B.fC("Finanzen","Dashboard",new A.agw(e.a8($.bwR(),x.b).gjc(),new A.aFR(this,d,e),new A.aFS(this,d,e),new A.aFT(d),new A.aFU(d),new A.aFV(this,d,e,v),w),w),C.ax,new A.ao2(v,w),C.cd,D.afb,C.cd,B.db(u,new A.aFW(),new A.aFX(),new A.aFY(),!1,!0,!1,x.d,x.l)],x.p),C.cD,w,C.H,!1),C.m,new A.aFZ(e))},
JB(d,e){return this.aM3(d,e)},
aM3(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$JB=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwR()
w=3
return B.k(e.ap(0,s.geP(),x.F).H2(0),$async$JB)
case 3:r=g
if(d.e==null){w=1
break}s=e.ap(0,s,x.b)
s=s.gfZ(s)
t=d.O(x.q).f
t.aR(B.c1(null,null,null,null,null,C.q,null,B.h(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JB,v)},
Bu(d,e){return this.axj(d,e)},
axj(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bu=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.ap(0,$.bwR().geP(),x.F).LO(),$async$Bu)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aR(D.azo)
w=1
break}t=B.qd(C.v,10)
w=4
return B.k($.bO8().u6(s,"finanzauswertung.pdf",t,null,null,null),$async$Bu)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bu,v)},
Bv(d,e,f){return this.aJz(d,e,f)},
aJz(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bv=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.fK(null,null,!0,null,new A.aFP(f,d),d,null,!0,!0,x.cJ),$async$Bv)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nT(e.ap(0,$.bW(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zz("finance_period",p,o,B.a5(["period_from",p.e4()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bv)
case 8:if(d.e!=null)d.O(x.q).f.aR(F.uS)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Fehler: "+B.j(q),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bv,v)}}
A.agw.prototype={
t(d){var w=this,v=null,u=A.alJ(C.m,F.hS,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alJ(v,D.aaY,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alJ(v,D.xP,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alJ(C.a8,C.jf,C.a8,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aX,t,C.aX,r,C.aX,q,C.aX,A.alJ(C.al,C.fN,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.K,0,v,v)}}
A.alI.prototype={
t(d){var w,v=this,u=null,t=B.aM(12),s=B.aM(12),r=B.aM(12),q=v.w
if(q==null)q=C.am
q=B.cU(q,1)
w=v.r
if(w==null)w=C.h
return B.Ha(B.dV(!1,C.a_,!0,t,B.eD(!1,s,!0,B.b3(u,B.cl(v.c,w,u,20),C.u,u,u,new B.b0(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.u,C.ab,0,u,u,u,u,u,C.bE),u,v.d,u,u)}}
A.ao2.prototype={
cw(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.bi(w,B.a7(B.b([D.a8j,C.D,B.ak(B.b([D.abM,C.aR,B.ay(B.h(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,B.y(C.h,16,C.N),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.r,B.jP(C.c5,B.b([new A.IW("Monat",new A.biJ(e),w,w),new A.IW("Jahr (YTD)",new A.biK(e),w,w),new A.IW("Zeitraum w\xe4hlen \u2026",new A.biL(this,d,e),D.aa3,w)],t),C.d7,6,8)],t),C.z,C.f,C.i),w,w,C.A,w,3)},
IW(d,e){return this.aIr(d,e)},
aIr(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IW=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avr(new A.biI(),d,B.bK(B.aT(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bK(B.aT(t)+1,1,1,0,0,0,0),C.e1),$async$IW)
case 2:r=g
if(r!=null)e.ap(0,$.xw().geP(),x.V).rd(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IW,v)}}
A.IW.prototype={
t(d){var w=null,v=B.aM(9999),u=B.aM(9999),t=B.aM(9999),s=B.cU(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.cl(p,C.h,w,14),C.aX],r))
q.push(B.h(this.c,w,w,w,B.y(C.h,13,C.N),w,w,w))
return B.dV(!1,C.a_,!0,v,B.eD(!1,u,!0,B.b3(w,B.ak(q,C.l,C.f,C.K,0,w,w),C.u,w,w,new B.b0(w,w,s,t,w,w,C.F),w,w,w,w,C.l1,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.u,C.ab,0,w,w,w,w,w,C.bE)}}
A.Jp.prototype={
t(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jx(new A.bp3(this)),C.cd,D.a8n,C.r],r),p=this.c.w
if(p.length===0)q.push(B.bi(s,B.ak(B.b([D.acb,C.aw,B.ay(B.h("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.o,14,C.j),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ab,s,C.A,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.H)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agu(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a7(w,C.l,C.f,C.i))}return B.a7(q,C.ac,C.f,C.i)}}
A.agu.prototype={
t(d){var w=this,v=null,u=w.e,t=u?C.aT:C.ab,s=B.cU(u?C.m:C.am,1),r=B.aM(4),q=w.c
r=B.b3(C.a1,B.h(C.c.a_(q,0,1),v,v,v,B.bz(C.h,14,C.n),v,v,v),C.u,v,v,new B.b0(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.h(q+" \xb7 "+w.d,1,C.aa,v,B.y(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.a7(B.b([q,B.h(t,v,v,v,B.y(C.o,12,C.j),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dt().aq(w.f)
return B.bi(v,B.ak(B.b([r,C.aw,t,B.h(q,v,v,v,B.y(u?C.al:C.h,15,C.N),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.eh,v,3)}}
A.I1.prototype={
t(d){var w=null
return B.bi(C.a8,B.ak(B.b([D.acO,C.aw,B.ay(B.h(this.c,w,w,w,B.y(C.h,14,C.j),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.eE,w,C.A,w,3)}}
A.a6Z.prototype={
cw(d,e){return B.db(e.a8($.bQC(),x.e),new A.aKR(),new A.aKS(),new A.aKT(),!1,!0,!1,x.X,x.l)}}
A.Im.prototype={
t(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awS,C.r,B.jx(new A.bfS(v,q,100-t.w.a,w,p)),C.r,new A.al0(u),C.ax,D.awR,C.r,new A.ahm(t,u),C.ax,D.awM,C.r,B.bD(u,!0,u,B.n1(u,B.bi(u,new A.TW(t,220,u),u,u,C.A,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfT(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.ax,D.awG,C.r,B.bD(u,!0,u,B.n1(u,new A.U7(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfU(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.ax,D.awK,C.r,new A.amP(t,u),C.ax,D.awH,C.r,new A.aj5(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.ax,D.awO,C.r,new A.asA(t,u)],s))
return B.a7(r,C.ac,C.f,C.i)}}
A.al0.prototype={
t(d){var w=null
return B.h("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.o,11,C.j).dt(1.35),w,w,w)}}
A.amj.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cv(m.d,"-")?C.a8:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfV(m,d):l
r=x.p
q=B.b([B.ay(B.h(m.c.toUpperCase(),l,l,l,B.y(C.o,10,C.n).f8(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.a8,0.8)
n=B.aM(4)
q.push(B.b3(l,B.h("Ziel "+p,l,l,l,B.y(C.a8,9,C.n),l,l,l),C.u,l,l,new B.b0(l,l,o,n,l,l,C.F),l,l,l,l,C.ni,l,l,l))}q=B.b([B.ak(q,C.l,C.f,C.i,0,l,l),C.aN,B.bFI(C.dI,B.h(m.d,l,l,l,B.bz(w,22,C.n),l,l,l),C.vY)],r)
p=m.e
if(p!=null)q.push(B.h(p,2,C.aa,l,B.y(C.o,10,C.aP),l,l,l))
q.push(C.cu)
q.push(B.ak(B.b([new A.UJ("Vormonat",m.r,l),C.ct,new A.UJ("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cu)
q.push(B.ay(new A.Yj(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.n1(l,B.bi(l,B.a7(q,C.z,C.f,C.i),l,l,C.dd,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.Q,l)}}
A.UJ.prototype={
t(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aM(4)
return B.b3(r,B.h(this.c+" \u2014",r,r,r,B.y(C.o,9,C.n),r,r,r),C.u,r,r,new B.b0(C.am,r,r,q,r,r,C.F),r,r,r,r,C.ni,r,r,r)}w=q>=0
v=w?C.al:C.a8
u=v.fo(0.12)
t=B.cU(v,0.7)
s=B.aM(4)
return B.b3(r,B.ak(B.b([B.cl(w?F.a9j:D.a9i,v,r,10),F.az1,B.h(this.c+" "+C.d.al(q,1)+" %",r,r,r,B.y(v,9,C.n),r,r,r)],x.p),C.l,C.f,C.K,0,r,r),C.u,r,r,new B.b0(u,r,t,s,r,r,C.F),r,r,r,r,C.ni,r,r,r)}}
A.Yj.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ai
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.kr(j,new A.boc())
t=C.b.kr(j,new A.bod())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boe(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5j(k,!1)
w=B.b([A.aL7(k,2,A.ay0(!1,C.m.fo(0.16),0,k,!0,D.vS),C.m,0.35,k,D.DQ,k,!0,!1,!0,!1,D.Fk,!1,10,D.Y5,!0,C.lu,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Or(A.byB(k,k,k,D.als,l,D.BI,D.DM,D.DR,w,D.afg,k,m,k,n,D.Xq,D.alt,D.a8B),C.az,C.an,k,k)}}
A.TW.prototype={
t(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMD
w=C.b.fP(p,0,new A.b6w())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ay9(B.b([A.a0Z(q,q,D.B9,q,C.m,q,q,q,r.b,6),A.a0Z(q,q,D.B9,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c5(A.bEo(A.ay2(q,q,u,q,q,A.a5j(q,!1),q,new A.yA(!0,!0,q,new A.b6x(),A.a_n(),!1,q,A.avb(),A.a_n()),q,v,q,q,new A.v3(!0,new A.pk(16,q,new A.qk(!0,new A.b6y(this),46,q),!0),D.ku,D.ku,new A.pk(16,q,new A.qk(!0,new A.b6z(p),26,q),!0)))),this.d,q)},
aLh(d){if(Math.abs(d)>=1000)return C.d.al(d/1000,1)+" k"
return C.d.al(d,0)}}
A.U7.prototype={
t(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.af(v,new A.b7m(),w),x.i)
C.b.K(o,new B.af(u,new A.b7n(),w))
t=C.b.fP(o,0,new A.b7o())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ay9(B.b([A.a0Z(q,q,q,q,C.m,q,q,q,v[s],14),A.a0Z(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c5(A.bEo(A.ay2(q,q,n,q,q,A.a5j(q,!1),q,D.DR,q,o,q,q,new A.v3(!0,D.ku,D.ku,D.ku,new A.pk(16,q,new A.qk(!0,new A.b7p(p),26,q),!0)))),this.d,q)
return this.e?r:B.bi(q,r,q,q,C.A,q,3)}}
A.amP.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aMC
w=new B.af(l,new A.bgt(),B.ai(l).i("af<1,K>")).kr(0,new A.bgu())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.H)(l),++s){r=l[s]
q=B.h(r.b,m,m,m,B.y(C.h,14,C.n),m,m,m)
p=$.dt()
o=r.d
n=new B.aX(4,4)
o=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.a7(B.b([q,B.h(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,B.y(C.o,12,C.aP),m,m,m)],v),C.z,C.f,C.i),m),C.aR,B.h(p.aq(o),m,m,m,B.bz(C.h,16,C.n),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cu,new B.Do(new B.d9(n,n,n,n),C.bH,B.EN(C.am,8,C.d.c2(o/w,0,1),D.AZ),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.G(r)===B.G(q)&&B.a_s(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.r)
C.b.K(u,o)}return B.bi(m,B.a7(u,C.l,C.f,C.i),m,m,C.A,m,3)}}
A.aj5.prototype={
t(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.C9("Aktive Kunden",""+s,u),1)
w=B.ay(new A.C9("K\xe4ufe",""+t.a,u),1)
v=$.dt()
return B.bi(u,B.ak(B.b([s,w,B.ay(new A.C9("\xd8-Warenkorb",v.aq(t.d),u),1),B.ay(new A.C9("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.A,u,3)}}
A.C9.prototype={
t(d){var w=null
return B.a7(B.b([B.h(this.c.toUpperCase(),w,w,w,B.y(C.o,10,C.n).f8(0.6),w,w,w),C.be,B.h(this.d,w,w,w,B.bz(C.h,20,C.n),w,w,w)],x.p),C.z,C.f,C.K)}}
A.asA.prototype={
t(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.bqq(),B.ai(q).i("af<1,K>")).kr(0,new A.bqr()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.H)(q),++v){u=q[v]
t=u.d
s=new B.aX(4,4)
t=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.h(u.b,1,C.aa,r,B.y(C.h,13,C.n),r,r,r),r),B.h(""+u.c+"\xd7 ",r,r,r,B.y(C.o,12,C.N),r,r,r),B.h($.dt().aq(t),r,r,r,B.y(C.h,13,C.n),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.aN,new B.Do(new B.d9(s,s,s,s),C.bH,B.EN(C.am,6,C.d.c2(t/p,0,1),D.AZ),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.G(u)===B.G(s)&&B.a_s(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.bi(r,B.a7(n,C.l,C.f,C.i),r,r,C.A,r,3)}}
A.wQ.prototype={
t(d){var w=null
return B.bi(w,B.h(this.c,w,w,w,B.y(C.o,13,C.j),w,w,w),C.ab,w,C.A,w,3)}}
A.ahm.prototype={
cw(d,e){return B.db(e.a8($.bwS(),x.fM),new A.b4T(this,d,e),new A.b4U(),new A.b4V(),!1,!0,!1,x.h,x.l)}}
A.Ba.prototype={
X(){return new A.Tz()},
aYH(){return this.d.$0()}}
A.Tz.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aM()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.fc(J.a6(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pr[t].a
if(v)r=""
else{r=B.bk(J.a2(w,s))
if(r==null)r=null
r=C.d.al(r==null?0:r,2)
r=B.b5(r,".",",")}u.m(0,s,new B.bw(new B.cE(r,C.bl,C.aJ),$.ag()))}q.e!==$&&B.aZ()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ce(v,v.r,v.e,B.l(v).i("ce<2>"))
while(v.u()){w=v.d
w.T$=$.ag()
w.R$=0}this.ar()},
rz(d){var w=this.e
w===$&&B.a()
w=C.c.ba(w.h(0,d).a.a)
w=B.b5(w,".","")
w=B.hx(B.b5(w,",","."))
return w==null?0:w},
a4m(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pr[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.al(u,2)
s=B.b5(s,".",",")
t.lK(0,t.a.xW(C.aJ,C.bl,s))}}this.J(new A.b4H())},
aF4(){this.a4m(D.app)
this.c.O(x.q).f.aR(D.azN)},
Ic(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ic=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b4(a1)
for(e=0;e<8;++e)a2.E(0,D.pr[e].a)
q=a2
t=4
w=7
return B.k($.aFA.cj().zg(B.b(["csv","txt"],x.s),C.xA,!0),$async$Ic)
case 7:p=a5
a2=p
o=a2==null?null:J.Kd(a2.a).c
if(o==null){w=1
break}n=C.aG.adN(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BN.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.H)(a1),++e){l=a1[e]
k=J.aw0(l,B.bQ("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.ba(J.a2(k,0)).toLowerCase()
i=J.xy(q,j)?j:D.arF.h(0,j)
if(i==null)continue
d=C.c.ba(C.b.n3(J.bRi(k,1)))
d=B.b5(d,"\u20ac","")
d=B.b5(d," ","")
d=B.b5(d,".","")
h=B.b5(d,",",".")
g=B.hx(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aR(D.azl)
w=1
break}r.a4m(m)
r.c.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ic,v)},
In(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$In=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4I(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0e("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.e4(),0,10),"p_cash_and_bank",q.rz("cash_and_bank"),"p_receivables",q.rz("receivables"),"p_inventory_value",q.rz("inventory_value"),"p_other_current_assets",q.rz("other_current_assets"),"p_fixed_assets",q.rz("fixed_assets"),"p_current_liabilities",q.rz("current_liabilities"),"p_long_term_liabilities",q.rz("long_term_liabilities"),"p_equity",q.rz("equity")],x.N,x.aU))
w=7
return B.k(n,$async$In)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYH()
o=q.c
o.toString
B.aW(o,!1).eq()
q.c.O(x.q).f.aR(D.azp)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4J(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$In,v)},
t(d){var w,v,u,t,s=this,r=null,q=B.h("Bilanzwerte erfassen",r,r,r,B.bz(C.h,18,C.n),r,r,r),p=s.f?r:new A.b4L(s,d),o=s.d
o===$&&B.a()
p=B.f4(D.abO,B.h("Stichtag: "+C.c.a_(o.e4(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.f4(D.acW,D.aFJ,o?r:s.gaE7(),r),1)
v=x.p
w=B.b([p,C.D,B.ak(B.b([w,C.aR,B.ay(B.f4(D.acM,D.aFu,o?r:s.gaF3(),r),1)],v),C.l,C.f,C.i,0,r,r),C.r],v)
for(u=0;u<8;++u){p=D.pr[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dX(r,C.aD,!1,r,!0,C.q,r,B.e4(),o.h(0,p.a),r,r,r,r,r,2,new B.c0(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aH,r,r,r,r,C.iq,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.A,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aj,r,C.W,r,r,r,r),C.D],v))}w.push(B.h("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.o,11,C.j),r,r,r))
p=B.c5(B.ex(B.a7(w,C.ac,C.f,C.K),r,C.H),r,380)
o=s.f
w=B.cX(C.bR,r,r,o?r:new A.b4M(d),r,r)
o=o?r:s.gaEO()
t=B.dM(C.m,C.h,r,r,r,r,r)
return B.hY(B.b([w,B.di(s.f?F.YD:C.dv,o,t)],v),C.p,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.G(this)===B.G(e)&&B.a_s(this.gbD(),e.gbD())
else w=!0
return w},
gB(d){return(B.f5(B.G(this))^B.bMt(this.gbD()))>>>0},
j(d){B.bFD()
return B.G(this).j(0)}}
A.KX.prototype={
X(){return new A.TA(B.A(x.S,x.J),new A.ayc(B.A(x.x,x.gF)),null,null)}}
A.TA.prototype={
t(d){var w,v=this,u=v.a2j(),t=v.CW
t.toString
t=v.a2k(t.aB(0,v.ghJ().gp(0)))
w=v.a2k(u)
v.a.toString
return new A.KS(new A.a0Y(t,w,null),u,null)},
a2k(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ay9(s.c,s.d,!1,r,s.a))}return d.aQF(w)},
a2j(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.V8(t.ch)
if(r)s=w.a
r=t.y
t=t.aRB(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQG(A.bxl(!1,!0,!0,v.d,v.c,u.gasO(),v.f,v.e))}return t},
asP(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagf()||e==null||e.a==null){w=v.cy
v.J(w.gaQ2(w))
return}v.J(new A.b4Y(v,e))},
nX(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2j(),new A.b4Z(w)))}}
A.o_.prototype={
VK(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ay2(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRB(d,e){return this.VK(null,null,d,e)},
aQG(d){return this.VK(null,d,null,null)},
aQF(d){return this.VK(d,null,null,null)},
XK(d,e,f){var w,v,u,t=A.kA(d.ch,e.ch,f,A.c4O(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bFM(d.d,e.d,f),q=A.bHI(d.e,e.e,f),p=A.bFK(d.c,e.c,f),o=e.a
o=A.a5j(B.a1e(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.ay2(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bFF(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ay1.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.aya(),B.ai(v).i("af<1,K>")).kr(0,new A.ayb())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.it.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mI.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0V.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1_.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adY.prototype={
L(){return"TooltipDirection."+this.b}}
A.a10.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D_.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.KY.prototype={}
A.a11.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xL.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XK(v,w,d)}}
A.ahi.prototype={}
A.ahp.prototype={}
A.ahq.prototype={}
A.ahs.prototype={}
A.aht.prototype={}
A.ahu.prototype={}
A.ahv.prototype={}
A.ahw.prototype={}
A.ahx.prototype={}
A.ayc.prototype={
V8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uD(0,0,!1)
v=new A.zp(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uD(t,u,!0)}w=null
try{w=C.b.qq(d,new A.ayd())}catch(s){return new A.uD(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uD(q,r,!1)
u.m(0,v,j)
return j}}
A.uD.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahr.prototype={}
A.aye.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0q(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acL(t,A.bxk(w,t.a),u)
l.y=u
l.aSY(e,u,f)
l.aml(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aT6(d,e,m,t,r,s,n,o,f)}}},
acL(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e8("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ai(p).i("iX<1>")).aD(0,new A.ayf(t,q,r,s))
w.push(new A.a62(q))}return w},
aSY(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aX(m,m)
l=new B.d9(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b2.dI(Math.max(t,a2),b4,b7)
a4=B.Q4(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.Q4(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seW(null)
a6=b2.f.e5()
v.drawRRect(B.mD(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gp(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.ba(v.save())
v.clipRect(B.dJ(b1),$.nO()[1],!0)
a6=b2.f.e5()
v.drawRRect(B.mD(a4),a6)
a6.delete()
v.restore()
b2.aT4(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.he(a4))
n=A.aBp(new B.ck(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e5()
k=n.e
v.drawPath((k==null?n.e=new B.mN(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aT6(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AS(a5,a5,a5,a5,B.dk(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lv().a_s(a8,a7.b),a7.a),C.cV,C.x,a5,b6.c,C.bm)
w.agz(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbT(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dI(s,a6,b6)
q=b4.a
p=a4.dI(q,a6,b6)
o=b1.b
n=u+o.gex()
m=v+4+(o.gd3(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aIi)j=v===D.Zm&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_t(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aX(s,s)
e=B.FX(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lv().KG(new B.F(v,t),d).b
s=$.lv()
q=w.b
p=q.c
q=q.a.c
a0=s.KG(new B.F(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiL()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Wp(d,new A.ayg(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aT4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geo(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aX(i.z,i.Q):C.a2
s=w?new B.aX(i.x,i.y):C.a2
r=w?C.a2:new B.aX(i.e,i.f)
w=w?C.a2:new B.aX(i.r,i.w)
q=B.Q4(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a2:new B.aX(i.z,i.Q)
p=v?C.a2:new B.aX(i.x,i.y)
o=v?new B.aX(i.e,i.f):C.a2
q=B.Q4(w,s,u,r,t,p,o,v?new B.aX(i.r,i.w):C.a2)}else q=B.bzk(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
X3(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acL(b2,A.bxk(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dI(k,b2,b3)
m=b0[q].c[o]
g=a7.dI(m.a+m.x.b,b2,b3)}else{h=a7.dI(j+m.x.b,b2,b3)
g=a7.dI(b0[q].c[o].b,b2,b3)}a7.dI(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dI(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dI(a4.a,b2,b3)
a6=a7.dI(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a11(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a62.prototype={}
A.a0Y.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aye()
t.a1B()
$.an()
w=B.b_()
w.b=C.bk
t.f=w
w=B.b_()
w.b=C.b3
t.r=w
w=B.b_()
w.b=C.bk
w.r=C.p.gp(0)
t.w=w
w=B.b_()
w.b=C.b3
w.r=C.I.gp(0)
w.c=1
t.x=w
t=new A.ab5(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zl(v.cy)
t.afJ()
return t},
bw(d,e){e.sih(0,this.d)
e.sZ5(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.ab5.prototype={
sih(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZ5(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a1a(d.cy)
w.bf()},
scN(d){if(this.h_.k(0,d))return
this.h_=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1u(t,v),new A.vN(u.fB,u.aI,u.h_,x.Q))
s.restore()},
a_l(d){var w=this,v=w.gC(0)
return new A.KY(w.fC.X3(d,v,new A.vN(w.fB,w.aI,w.h_,x.Q)))}}
A.a0O.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CZ.prototype={
L(){return"AxisSide."+this.b}}
A.tA.prototype={}
A.qk.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acw.prototype={
gbD(){return[!1,0,0,0]}}
A.pk.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.v3.prototype={
gbD(){var w=this
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
gB(d){return C.d.gB(this.a)^C.d.gB(this.b)}}
A.yA.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pH.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ae_.prototype={
gbD(){return[this.a,this.b]}}
A.Q8.prototype={
gbD(){return[this.a,this.b]}}
A.n4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nu.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kS.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6d.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aem.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MV.prototype={
gbD(){return[this.a,this.b,!0]}}
A.v2.prototype={}
A.N1.prototype={
aeb(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bk
d.iP(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahd.prototype={}
A.ahh.prototype={}
A.akr.prototype={}
A.akG.prototype={}
A.akH.prototype={}
A.akJ.prototype={}
A.akK.prototype={}
A.aly.prototype={}
A.alx.prototype={}
A.alz.prototype={}
A.ap8.prototype={}
A.aqZ.prototype={}
A.ar_.prototype={}
A.asE.prototype={}
A.ati.prototype={}
A.ath.prototype={}
A.atj.prototype={}
A.axR.prototype={
MV(d,e,f,g,h,i){return new B.il(this.aWK(d,e,f,g,h,i),x.g4)},
aWJ(d,e,f,g){return this.MV(d,e,f,!0,g,!0)},
aWK(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MV(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lv().ajT(s,u,v,w)
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
A.KR.prototype={
a1B(){var w,v=this
$.an()
w=B.b_()
w.b=C.b3
v.a=w
w=B.b_()
w.b=C.bk
v.b=w
w=B.b_()
w.b=C.bk
v.e=w
w=B.b_()
w.b=C.b3
v.c=w
v.d=B.b_()},
i5(d,e,f){var w=this
w.a0r(d,e,f)
w.aSU(e,f)
w.aT3(e,f)
w.aT2(e,f)},
aT2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lv().OZ(w.a,a1.r-a1.f)
u=$.bwo().MV(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l5(n,m)
if(j!=null){p.r=C.E.gp(0)
p.seW(j.mL(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seW(a0)}k=l.c
p.c=k
if(k===0){p.seW(a0)
k=B.c3(p.r)
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}a3.DL(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lv().OZ(w.b,a1.y-a1.x)
u=$.bwo().MV(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l5(n,m)
if(k!=null){q.r=C.E.gp(0)
q.seW(k.mL(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seW(a0)}p=f.c
q.c=p
if(p===0){q.seW(a0)
p=B.c3(q.r)
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gp(0)}a3.DL(n,m,d.a,f.d)}},
aSU(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hf(new B.I(0,0,0+w.a,0+w.b),this.b)},
aT3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.H)(k),++u){t=k[u]
s=B.l5(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.seW(p.mL(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seW(null)}o=n.e.e5()
w.drawRect(B.dJ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.H)(l),++u){t=l[u]
s=B.l5(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.seW(q.mL(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seW(null)}o=n.e.e5()
j.drawRect(B.dJ(s),o)
o.delete()}},
aT1(d,e,f){var w,v
this.a0r(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aec(d,e,f,w)
if(v.b.length!==0)this.aT8(d,e,f,w)},
aec(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.H)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l5(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mL(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
e.DL(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=C.d.ao(o,n.gbT(n).eF(0,2))
J.ba(r.save())
r.translate(h,g)
n=n.gNT().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
o=C.d.ao(o,n.gbT(n).eF(0,2))
k=f.d
k===$&&B.a()
s.aed(0,n,new B.r(h,o),k)}}},
aT8(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.H)(w),++q){p=w[q]
o=p.e
n=d.ff(o,a3,a2)
m=new B.r(n,0)
o=d.ff(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l5(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mL(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
a1.DL(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=n.gbT(n).eF(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.ba(r.save())
r.translate(f,e)
n=n.gNT().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
g=n.gbT(n).af(0,2)
o=C.d.ao(o,h)
k=C.d.ao(u,g)
j=d.d
j===$&&B.a()
s.aed(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_t(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KS.prototype={
galJ(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galK(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galL(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galH(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am2(d){var w,v=this,u=null,t=v.d,s=A.by6(t.d),r=t.a
r=r.a&&A.bRU(r.b)?r.b:u
w=B.b([B.b3(u,v.c,C.u,u,u,new B.b0(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.axT(w)
if(v.galJ())C.b.hz(w,s.$1(!0),new A.AD(D.B5,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galL())C.b.hz(w,s.$1(!0),new A.AD(D.mw,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galK())C.b.hz(w,s.$1(!0),new A.AD(D.B6,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galH())C.b.hz(w,s.$1(!0),new A.AD(D.dJ,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
t(d){return B.jx(new A.axS(this))}}
A.Rz.prototype={
X(){return new A.Y8(new B.bj(null,x.eF))}}
A.Y8.prototype={
ayl(){switch(this.a.c.a){case 0:return C.ea
case 1:return C.fF
case 2:return C.dI
case 3:return C.fG}},
ayR(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayn(d){this.a.toString
return},
aA(){this.aM()
$.cy.x2$.push(this.ga4O())},
bd(d){this.bG(d)
$.cy.x2$.push(this.ga4O())},
t(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayR()
return B.bzT(B.b2l(0,B.b3(v.ayl(),t.e,C.u,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.acx.prototype={
bm(d){return A.bRL(this.f,this.r,this.e)},
bw(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a0P.prototype={
h5(d){if(!(d.b instanceof B.ho))d.b=new B.ho(null,null,C.v)},
hL(d){if(this.A===C.aF)return this.y6(d)
return this.VX(d)},
aLv(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
a9C(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dB(d){var w=this.a9B(d,B.hF())
switch(this.A.a){case 0:return d.bC(new B.F(w.a,w.b))
case 1:return d.bC(new B.F(w.b,w.a))}},
a9B(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.aF?d.b:d.d,m=o.a9$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.et(u,null)
break
case 1:q=B.et(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9C(p)
t=Math.max(t,o.aLv(p))
m=r.aw$}return new A.bg0(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga6.call(p)),n=p.a9B(o,B.mC()),m=n.a,l=n.b
switch(p.A.a){case 0:p.fy=o.bC(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.bC(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.a9$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a9C(r==null?B.P(B.T("RenderBox was not laid out: "+B.G(w).j(0)+"#"+B.c_(w))):r)/2
switch(p.A.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aw$;++u}},
ec(d,e){return this.va(d,e)},
aQ(d,e){if(this.gC(0).gW(0))return
this.a2.sbk(0,null)
this.t4(d,e)},
l(){this.a2.sbk(0,null)
this.aoW()}}
A.bg0.prototype={}
A.axU.prototype={}
A.jZ.prototype={
gbD(){return[this.a,this.b]}}
A.nZ.prototype={}
A.ahe.prototype={}
A.ahf.prototype={
aL(d){var w,v,u
this.fj(d)
w=this.a9$
for(v=x.L;w!=null;){w.aL(d)
u=w.b
u.toString
w=v.a(u).aw$}},
aG(d){var w,v,u
this.f6(0)
w=this.a9$
for(v=x.L;w!=null;){w.aG(0)
u=w.b
u.toString
w=v.a(u).aw$}}}
A.ahg.prototype={}
A.Tx.prototype={
l(){var w,v,u
for(w=this.WC$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AD.prototype={
goI(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.dI
case 1:return C.fG
case 2:return C.ea
case 3:return C.fF}},
gb0q(){var w=this.d,v=A.by6(w.d),u=A.bFJ(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).af(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).af(0,new B.al(u.a,0,u.c,0))}},
gaiz(){var w=this.d,v=A.bFJ(w.a),u=A.by6(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd4(0)+(v.gd3(0)+v.gd4(0))
case 1:case 3:return u.gex()+v.gex()}},
aXs(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goI().c.d
if(o==null)o=$.lv().OZ(d,f-e)
w=p.c
v=w!==D.mw
if((!v||w===D.dJ)&&p.d instanceof A.o_){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bxk(u,d)
w=new B.iX(t,B.ai(t).i("iX<1>"))
s=w.ghu(w).f1(0,new A.b_j(u),x.W).h1(0)}else{r=$.bwo()
w=!v||w===D.dJ
v=p.d
q=r.aWJ(w?v.w:v.z,o,f,e)
v=B.k9(q,new A.b_k(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ai(s).i("af<1,nZ>")
w=B.Q(new B.af(s,new A.b_l(p,e,f,o,g,d),w),w.i("ar.E"))
return w},
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goI()
w=j.goI()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b3(i,i,C.u,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mw
u=!v
t=!u||w===D.dJ
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dJ?C.H:C.aF
q=B.b([],x.p)
if(w===D.B5||v)j.goI()
if(j.goI().c.a){v=!u||w===D.dJ?r:j.goI().c.c
p=!u||w===D.dJ?j.goI().c.c:r
o=j.gb0q()
n=!u||w===D.dJ?C.aF:C.H
j.gaiz()
m=j.gaiz()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.b3(i,A.bZ2(new A.axU(),n,j.aXs(r-m,l,u,w)),C.u,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B6||w===D.dJ)j.goI()
return new B.eO(t,i,i,B.bUA(q,C.l,s,i,C.f,C.K,0,i,i,C.bY),i)}}
A.a13.prototype={
gbD(){return[this.a,this.b]}}
A.a5i.prototype={
gbD(){return[this.a,this.b]}}
A.N8.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5k.prototype={
gac5(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayp.prototype={}
A.aEX.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahA.prototype={}
A.akD.prototype={}
A.akE.prototype={}
A.akL.prototype={}
A.L0.prototype={
i5(d,e,f){}}
A.vN.prototype={}
A.hn.prototype={
gdN(){return null},
gagf(){var w,v=this
B.by()
B.by()
B.by()
w=v instanceof A.N7
if(w)return!0
return!(v instanceof A.N4)&&!(v instanceof A.N3)&&!(v instanceof A.N5)&&!(v instanceof A.N2)&&!w&&!(v instanceof A.N6)}}
A.a5o.prototype={
gdN(){return this.a.b}}
A.a5p.prototype={
gdN(){return this.a.b}}
A.a5q.prototype={
gdN(){return this.a.b}}
A.N3.prototype={}
A.N4.prototype={}
A.a5t.prototype={
gdN(){return this.a.b}}
A.N6.prototype={}
A.N7.prototype={
gdN(){return this.a.b}}
A.a5n.prototype={
gdN(){return this.a.b}}
A.a5m.prototype={
gdN(){return this.a.b}}
A.N2.prototype={
gdN(){return this.a.b}}
A.a5r.prototype={
gdN(){return this.a.gdN()}}
A.a5s.prototype={
gdN(){return this.a.gdN()}}
A.N5.prototype={
gdN(){return this.a.gdN()}}
A.G8.prototype={
Zl(d){this.V=d.b
this.U=d.c
this.a2=d.d},
afJ(){var w=this,v=null,u=w.ah=B.byZ(v,v)
u.ay=new A.aVj(w)
u.ch=new A.aVk(w)
u.CW=new A.aVl(w)
u.cy=new A.aVm(w)
u.cx=new A.aVn(w)
u=w.aJ=B.GX(v,-1,v)
u.A=new A.aVo(w)
u.a4=new A.aVp(w)
u.V=new A.aVq(w)
u=w.bz=B.a7m(v,w.a2,v)
u.p3=new A.aVr(w)
u.p4=new A.aVs(w)
u.RG=new A.aVt(w)},
cA(){var w=x.k.a(B.M.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dB(d){return new B.F(d.b,d.d)},
kL(d){return!0},
mV(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bz
w===$&&B.a()
w.oF(d)
w=v.aJ
w===$&&B.a()
w.oF(d)
w=v.ah
w===$&&B.a()
w.oF(d)}else if(x.gJ.b(d))v.l8(new A.a5s(d))},
gNq(d){return new A.aVu(this)},
gNs(d){return new A.aVv(this)},
l8(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_l(w):null
u.V.$2(d,v)
u.a4=C.bv},
gLc(d){return this.a4},
gFG(){var w=this.av
w===$&&B.a()
return w},
aL(d){this.fj(d)
this.av=!0},
aG(d){this.av=!1
this.f6(0)},
$ijA:1}
A.Or.prototype={
X(){return new A.VW(B.b([],x.r),B.A(x.S,x.J),new A.aL9(B.A(x.y,x.dj)),null,null)}}
A.VW.prototype={
t(d){var w,v=this,u=v.a4Q(),t=v.CW
t.toString
t=v.abB(t.aB(0,v.ghJ().gp(0)))
w=v.abB(u)
v.a.toString
return new A.KS(new A.a7c(t,w,null),u,null)},
abB(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ai(w).i("af<1,ec>")
w=B.Q(new B.af(w,new A.bg9(this,d),v),v.i("ar.E"))
return d.aRy(w,this.cy)},
a4Q(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.V8(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRN(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRc(new A.EM(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazG(),t.c,t.d))}return r},
azH(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagf())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bg7(v))
return}v.J(new A.bg8(v,e))},
nX(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4Q(),new A.bga(w)))}}
A.pT.prototype={
XK(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5j(B.a1e(d.a.b,j.b,f),j.a)
w=A.bFF(d.at,e.at,f)
v=A.bFK(d.c,e.c,f)
u=A.bFM(d.d,e.d,f)
t=A.bHI(d.e,e.e,f)
s=A.kA(d.ch,e.ch,f,A.c6U(),x.cz)
s.toString
r=A.kA(d.CW,e.CW,f,A.c6T(),x.bO)
r.toString
u=A.byB(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VL(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byB(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRN(d,e,f,g){return this.VL(null,null,d,e,f,g,null)},
aRc(d){var w=null
return this.VL(w,d,w,w,w,w,w)},
aRy(d,e){var w=null
return this.VL(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
aru(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qq(n.a,new A.aL8())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.H)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aZ()
n.b=q
r.toString
n.c!==$&&B.aZ()
n.c=r
s.toString
n.d!==$&&B.aZ()
n.d=s
t.toString
n.e!==$&&B.aZ()
n.e=t}},
adv(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aL7(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRj(d){return this.adv(d,null)},
aRl(d){return this.adv(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Os.prototype={
gbD(){return[this.a]}}
A.a0X.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mJ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KW.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yz.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKU.prototype={
L(){return"LabelDirection."+this.b}}
A.a5l.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EM.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7d.prototype={
gbD(){return[4,C.hO,16,D.xx,0,120,A.c6W(),!1,!1,!1,0,C.J,A.c6V()]}}
A.n8.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qr.prototype={}
A.rF.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.tB.prototype={
gbD(){return[this.a,this.b]}}
A.Gz.prototype={
gbD(){return[this.a]}}
A.Ot.prototype={}
A.zl.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XK(v,w,d)}}
A.ahn.prototype={}
A.aho.prototype={}
A.ahB.prototype={}
A.akF.prototype={}
A.akI.prototype={}
A.amr.prototype={}
A.ams.prototype={}
A.amt.prototype={}
A.amv.prototype={}
A.amw.prototype={}
A.amx.prototype={}
A.amy.prototype={}
A.aqY.prototype={}
A.asD.prototype={}
A.aL9.prototype={
V8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.y7
u=new A.zp(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zm(s,r,q,t,!0)}w=null
try{w=C.b.qq(d,new A.aLa())}catch(p){return D.y7}v=null
try{v=C.b.qq(w.a,new A.aLb())}catch(p){return D.y7}o=v.a
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
if(f<m)m=f}e=new A.zm(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zm.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amu.prototype={}
A.aLc.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac5(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.I(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aQ9(new B.I(0,0,u,v))}d.a0q(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.H)(v),++t)d.aT_(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSW(a3,q,a4)
d.aT0(a3,q,a4)
d.amk(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.S(o)
if(n.gq(o)!==p.length)throw B.e(B.e8("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vy(q,i,j,k))}}d.aT7(a3,s,a4)
if(w.gac5(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aT5(a2,a3,v,f,new A.Gz(g),a4)}},
aSW(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.by5(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.H)(n),++v){u=n[v]
t=p.ZV(o,e,u,f)
s=p.ajL(o,e,t,u,f)
r=p.ZX(o,e,t,u,f,!0)
q=p.ajK(o,e,t,u,f)
p.aSZ(d,s,p.ZU(o,e,t,u,f,!0),f,e)
p.aST(d,q,r,f,e)
p.aSX(d,t,e)
p.aSV(d,t,e,f)}},
aT_(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.by5(a5.a),a8=A.by5(a6.a)
if(a7.length!==a8.length)throw B.e(B.bI("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bU.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ai(n).i("cx<1>")
l=B.Q(new B.cx(n,m),m.i("ar.E"))
k=a2.ZV(a3,a5,o,b2)
j=a2.ZW(a3,a6.aRl(l),l,b2,k)
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
n=a2.ff(i,a3,b2)
m=a2.dI(h,a3,b2)
e=a2.ff(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gp(0)
a0.seW(v.mL(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.I:w).gp(0)
a0.seW(null)}$.an()
a1=new B.mM(C.dx,C.bk,C.e5,C.et,C.dT).e5()
n=B.dJ(new B.I(0,0,t,s))
m=$.bU.b
if(m===$.bU)B.P(B.vw(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e5()
n=j.e
a4.drawPath((n==null?j.e=new B.mN(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aT0(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_0(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aeb(s,q,new B.r(p,o))}}},
aT7(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fL(b3,new A.aLf())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.H)(b3),++o){n=b3[o]
m=n.a
l=b1.a_0(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.P(B.rE(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.kx(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kx(q.$2(m,k))))
f=b1.dI(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dI(a2,w,b4)
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
b0=B.l5(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.seW(a6.mL(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seW(null)}a4=a9.c
f.c=a4
if(a4===0){f.seW(null)
a4=B.c3(f.r)
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gp(0)}b2.DL(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.P(B.rE(d.a))
f.aeb(t,j,new B.r(h,g))}}},
ZW(d,e,f,g,h){var w=this.ajM(d,e,f,g,h)
return w},
ZV(d,e,f,g){return this.ZW(d,e,f,g,null)},
ajM(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.S(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.aE(new B.fn(d,a0))
if(e===1)g.aE(new B.cw(d,a0))}else g.aE(new B.cw(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.ff(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.ff(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.ff(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LW(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZX(d,e,f,g,h,i){var w=this,v=B.MP(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aE(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,s))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pt())
return v},
ajL(d,e,f,g,h){return this.ZX(d,e,f,g,h,!1)},
ZU(d,e,f,g,h,i){var w=this,v=B.MP(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aE(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,0))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pt())
return v},
ajK(d,e,f,g,h){return this.ZU(d,e,f,g,h,!1)},
aSZ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.ff(t.a,w,g)
s=r.r
s===$&&B.a()
A.byY(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.ik(e,r.r)},
aST(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.ff(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.byY(s,q.b,q.c,new B.I(v,0,u,t))
d.a.ik(e,r.r)},
aSX(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MR(B.MP(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kb:C.e5
u.e=C.et
u.r=v.gp(0)
u.seW(null)
u.c=f.x
u.r=v.gp(0)
$.lv()
u.z=new B.zu(C.aL,w.c*0.57735+0.5)
d.a.ik(A.aBp(e,f.cy).ee(w.b),this.f)},
aSV(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kb:C.e5
q.e=C.et
q=f.b
q===$&&B.a()
q=s.ff(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.ff(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.byY(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bWZ(t)
d.a.ik(A.aBp(e,f.cy),s.f)},
aT5(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLY(b1),b3=J.S(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e8("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lv().a_s(b4,u.b)
s=u.a
r=w.k(0,C.iR)?new B.ks(1):w
q=new B.tx(new B.hS(s,a8,a8,C.bv,a8,a8,a8,a8,a8,a8,t),C.cV,C.x,r,a8,a8,a8,a8,C.bm,a8)
q.agz(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.H)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hO.gex()
k=o+(w-1)*4+(C.hO.gd3(0)+C.hO.gd4(0))
j=t-k-16
i=a7.a_t(b3,l,D.xx,0)
b3=i+l
w=j+k
h=new B.aX(4,4)
g=B.FX(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLX(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lv().KG(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lv().KG(new B.F(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b5.Wp(0,new A.aLd(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.H)(b0),++n){q=b0[n]
a5=A.bZE(q.r,q.w)
A:{if(D.DZ===a5){a6=a3
break A}if(D.E_===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wp(0,new A.aLe(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
a_0(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
X3(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akb(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fL(t,new A.aLg())
return t.length===0?null:t},
akb(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.H)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qr(s,f,g,C.b.hy(w,v),v.a,v.b)}else return null}}
A.vy.prototype={}
A.a7c.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aLc()
t.a1B()
$.an()
w=B.b_()
w.b=C.b3
t.f=w
w=B.b_()
w.b=C.bk
t.r=w
w=B.b_()
w.b=C.b3
t.w=w
w=B.b_()
w.b=C.bk
w.r=C.I.gp(0)
w.a=D.a_C
t.x=w
w=B.b_()
w.b=C.b3
w.r=C.E.gp(0)
t.y=w
w=B.b_()
w.b=C.bk
w.r=C.p.gp(0)
t.z=w
w=B.b_()
w.b=C.b3
w.r=C.I.gp(0)
w.c=1
t.Q=w
t=new A.abi(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zl(v.cx)
t.afJ()
return t},
bw(d,e){e.sih(0,this.d)
e.sZ5(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.abi.prototype={
sih(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZ5(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a1a(d.cx)
w.bf()},
scN(d){if(this.h_.k(0,d))return
this.h_=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1u(t,v),new A.vN(u.fB,u.aI,u.h_,x.o))
s.restore()},
a_l(d){var w=this,v=w.gC(0)
return new A.Ot(w.fC.X3(d,v,new A.vN(w.fB,w.aI,w.h_,x.o)))}}
A.Nw.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1u.prototype={
aQ9(d){this.a.a.clipRect(B.dJ(d),$.nO()[1],!0)
return null},
aej(d,e){d.aQ(this.a,e)},
Wp(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.ba(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lv()
s.Z3(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DL(d,e,f,g){var w=new B.ck($.an().r,C.ah,null,null,B.b([],x.v))
w.aE(new B.fn(d.a,d.b))
w.aE(new B.cw(e.a,e.b))
this.a.ik(A.aBp(w,g),f)}}
A.zp.prototype={
gbD(){return[this.a]}}
A.amF.prototype={}
A.a1F.prototype={}
A.b2M.prototype={
KG(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aY2(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aX(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aX(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aX(v,v)
s=d.d
return new B.d9(w,u,t,s.a>v||s.b>v?new B.aX(v,v):s)},
aY3(d,e){var w,v
if(d==null)return D.a_N
w=d.b
v=e/2
return d.aRo(w>v?v:w)},
OZ(d,e){var w,v=Math.max(C.d.cF(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0b(w)},
b0b(d){if(d<1)return this.aJX(d)
return this.a8E(d)},
aJX(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8E(d*q)/q},
a8E(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aV(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
ak0(d){if(d>=1)return 1
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
a_s(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.iW
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vq)
v=v==null?null:v.ay
return v===!0?w.c3(C.mg):w},
ajT(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["K(qt)","D(eB)","~(v,fL)","K(ec,v)","U<~>()","K(K,qt)","bR(K,tA)","pH(K)","v(qr,qr)","Im(og)","I1(B,bE)","Jp(oh)","vC(@)","wx(@)","ec(K)","CI(@)","ac(K,tA)","v1(dc<v1>)","E8(dc<aFM>)","K(vC)","K(wx)","wQ(B,bE)","Ba(z)","~()","qt(@)","~(hn,KY?)","xL(@)","K(it)","D(fL)","~(v,it)","~(@)","jZ(nZ)","c(nZ)","jZ(bH<v,K>)","jZ(K)","nZ(jZ)","~(hn,Ot?)","ec(ec)","lJ(wn<lJ>)","zl(@)","U<oh>(cg<oh>)","tB(v)","v2(eB,K,ec,v)","rF(n8)","D(ec)","v(vy,vy)","K(fL)","U<og>(cg<og>)","v(v,v,K)","fL(fL,fL,K)","it(it,it,K)","mI(mI,mI,K)","D_?(fL,v,it,v)","E(fL)","c(K,tA)","eB(eB,eB,K)","D(K)","n4(n4,n4,K)","nu(nu,nu,K)","kS(kS,kS,K)","lf(lf,lf,K)","f(kS)","f(lf)","ec(ec,ec,K)","mJ(mJ,mJ,K)","v2(eB,K,ec,v{size:K?})","D(eB,ec)","K(r,r)","u<tB>(ec,u<v>)","ya(z)","u<rF>(u<n8>)","E(n8)","yx(eI<B?>)"])
A.aFI.prototype={
$1(d){var w=B.cT(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qt(J.a6(v==null?"":v),A.p9(w.h(0,"revenue_net")),A.p9(w.h(0,"expense_net")),A.p9(w.h(0,"result_net")))},
$S:z+24}
A.aFJ.prototype={
$1(d){var w,v,u,t=B.cT(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.a6(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.p9(t.h(0,"gross"))
u=B.bk(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vC(s,r,w,v,u,A.p9(t.h(0,"avg_basket")))},
$S:z+12}
A.aFK.prototype={
$1(d){var w,v=B.cT(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.a6(t==null?"unbekannt":t)
w=B.bk(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wx(u,t,w,A.p9(v.h(0,"gross")))},
$S:z+13}
A.aG0.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.S(d)
v=w.h(d,"code")
v=J.a6(v==null?"":v)
u=w.h(d,"name")
u=J.a6(u==null?"":u)
t=w.h(d,"direction")
return new A.CI(v,u,J.a6(t==null?"expense":t),A.uf(w.h(d,"net")),A.uf(w.h(d,"tax")),A.uf(w.h(d,"gross")))},
$S:z+15}
A.bu7.prototype={
$1(d){return new A.v1(d.a8($.bW(),x.A))},
$S:z+17}
A.bu8.prototype={
$1(d){return new A.E8(d.a8($.bQD(),x.D))},
$S:z+18}
A.bvW.prototype={
$1(d){return E.aFL()},
$S:z+38}
A.bu9.prototype={
$1(d){var w=d.a8($.xw(),x.P)
return d.a8($.avP(),x.a).G6(w)},
$S:z+40}
A.bu6.prototype={
$1(d){var w=d.a8($.xw(),x.P)
return d.a8($.avP(),x.a).G1(w)},
$S:z+47}
A.bu5.prototype={
$1(d){return this.ajC(d)},
ajC(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.a8($.bW(),x.A).fG("finance_balance_kpis",t),$async$$1)
case 3:s=r.cT(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:212}
A.aFH.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.ap(0,$.avP(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFG.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.ap(0,$.avP(),x.a).LP(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFZ.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwT()
if(s.e==null)B.P(B.T(y.b))
s.gc5().bA(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFR.prototype={
$0(){return this.a.JB(this.b,this.c)},
$S:0}
A.aFS.prototype={
$0(){return this.a.Bu(this.b,this.c)},
$S:0}
A.aFT.prototype={
$0(){var w=x.z
return B.aW(this.a,!1).e3(B.e9(new A.aFQ(),null,w),w)},
$S:0}
A.aFQ.prototype={
$1(d){return F.D_},
$S:z+69}
A.aFU.prototype={
$0(){return B.ol(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFV.prototype={
$0(){var w=this
return w.a.Bv(w.b,w.c,w.d)},
$S:0}
A.aFY.prototype={
$0(){return D.atR},
$S:61}
A.aFX.prototype={
$2(d,e){return new A.I1(B.j(d),null)},
$S:z+10}
A.aFW.prototype={
$1(d){return new A.Jp(d,null)},
$S:z+11}
A.aFP.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.h("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.hY(B.b([B.cX(C.bR,w,w,new A.aFN(u),w,w),B.di(F.v2,new A.aFO(u),B.dM(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.v3)},
$S:45}
A.aFN.prototype={
$0(){B.aW(this.a,!1).cJ(!1)
return null},
$S:0}
A.aFO.prototype={
$0(){B.aW(this.a,!1).cJ(!0)
return null},
$S:0}
A.biJ.prototype={
$0(){var w=this.a.ap(0,$.xw().geP(),x.V),v=E.aFL()
w.rd(0,v)
return v},
$S:0}
A.biK.prototype={
$0(){var w=this.a.ap(0,$.xw().geP(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lJ(B.bK(B.aT(v),1,1,0,0,0,0),v)
w.rd(0,u)
return u},
$S:0}
A.biL.prototype={
$0(){return this.a.IW(this.b,this.c)},
$S:0}
A.biI.prototype={
$2(d,e){return new B.oR(B.V(d).aQJ(B.V(d).ax.aRD(C.h,C.m)),e,null)},
$S:1011}
A.bp3.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dt(),s=A.Of(!1,C.nT,"Umsatz 7 %",t.aq(u.a),w),r=A.Of(!1,C.nT,"Umsatz 19 %",t.aq(u.b),w),q=A.Of(!0,D.aa2,"Umsatz netto",t.aq(u.c),w),p=A.Of(!1,D.aa1,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return B.a61(1.7,B.b([s,r,q,p,A.Of(!0,C.nJ,"Ergebnis",n,o<0?C.a8:C.al),A.Of(!1,C.fN,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.jU,!0)},
$S:104}
A.aKT.prototype={
$0(){return F.Tc},
$S:61}
A.aKS.prototype={
$2(d,e){var w=null
return B.bi(C.a8,B.h("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,B.y(C.h,13,C.j),w,w,w),C.eE,w,C.A,w,3)},
$S:222}
A.aKR.prototype={
$1(d){return new A.Im(d,null)},
$S:z+9}
A.bfS.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dt(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ai(g).i("af<1,K>"),e=f.i("ar.E"),d=B.Q(new B.af(g,new A.bfH(),f),e)
i=A.jR(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.af(g,new A.bfI(),f),e)
d=A.jR(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.af(g,new A.bfJ(),f),e)
k=A.jR(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.al(h.b,1)
v=B.Q(new B.af(g,new A.bfK(),f),e)
w=A.jR(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.al(h.a,1)
u=B.Q(new B.af(g,new A.bfL(),f),e)
v=A.jR(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.al(r.c,1)
t=B.Q(new B.af(g,new A.bfM(),f),e)
u=A.jR(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.al(h.c,1)
s=B.Q(new B.af(g,new A.bfN(),f),e)
t=A.jR(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.af(g,new A.bfO(),f),e)
h=A.jR(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.af(g,new A.bfP(m),f),e)
m=A.jR(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.af(g,new A.bfQ(l),f),e)
l=A.jR(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.al(j,1)
j=B.Q(new B.af(g,new A.bfR(j),f),e)
return B.a61(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jR(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jU,!0)},
$S:104}
A.bfH.prototype={
$1(d){return d.b},
$S:z+0}
A.bfI.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfJ.prototype={
$1(d){return d.d},
$S:z+0}
A.bfK.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfL.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfM.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfN.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfO.prototype={
$1(d){return d.d},
$S:z+0}
A.bfP.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfQ.prototype={
$1(d){return this.a},
$S:z+0}
A.bfR.prototype={
$1(d){return this.a},
$S:z+0}
A.bfT.prototype={
$0(){return A.bAW(this.b,1.45,new A.TW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfU.prototype={
$0(){return A.bAW(this.b,1.6,new A.U7(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bt4.prototype={
$1(d){var w=this,v=null,u=B.aM(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.h(w.a,v,v,v,B.bz(C.h,18,C.n),v,v,v),1),B.ff(v,v,D.aca,v,v,new A.bt3(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.h(w.b,v,v,v,B.y(C.o,12,C.aP),v,v,v),C.D],t))
s.push(C.r)
s.push(B.c5(new B.mH(w.c,w.d,v),v,17976931348623157e292))
return B.Mo(v,C.p,new B.ad(C.ae,B.a7(s,C.z,C.f,C.K),v),v,v,v,C.fn,C.m0,v,new B.dd(u,C.J),v)},
$S:1012}
A.bt3.prototype={
$0(){return B.aW(this.a,!1).eq()},
$S:0}
A.bfV.prototype={
$0(){var w=this.a,v=B.b5(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAW(this.b,2.4,new A.Yj(w.w,w.y,w.z,null),C.b.ce(u," \xb7 "),v)
return null},
$S:0}
A.boc.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.bod.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.boe.prototype={
$1(d){return A.aL7(null,1.4,null,C.a8,0.35,D.agI,D.DQ,null,!1,!1,!1,!1,D.Fk,!1,10,D.Y5,!0,C.lu,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+14}
A.b6w.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6y.prototype={
$2(d,e){var w=null
return B.h(this.a.aLh(d),w,w,w,B.y(C.o,10,C.N),w,w,w)},
$S:z+16}
A.b6z.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.uR
return new B.ad(C.l0,B.h(C.c.cP(this.a[v].a,5),w,w,w,B.y(C.o,9,C.N),w,w,w),w)},
$S:z+6}
A.b6x.prototype={
$1(d){return D.a8z},
$S:z+7}
A.b7m.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7n.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7o.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b7p.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.uR
return new B.ad(C.l0,B.h(this.a[v],w,w,w,B.y(C.h,12,C.n),w,w,w),w)},
$S:z+6}
A.bgt.prototype={
$1(d){return d.d},
$S:z+19}
A.bgu.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bqq.prototype={
$1(d){return d.d},
$S:z+20}
A.bqr.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b4V.prototype={
$0(){return D.atX},
$S:61}
A.b4U.prototype={
$2(d,e){return new A.wQ("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4T.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bi(m,B.a7(B.b([B.h("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.N),m,m,m),C.D,B.h("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.o,12.5,C.j),m,m,m),C.r,B.jP(C.c5,B.b([B.f4(C.xZ,D.aHG,new A.b4N(w,v),m),B.f4(D.abP,D.aGx,new A.b4O(w,v),m)],u),C.d7,8,8)],u),C.z,C.f,C.i),C.ab,m,C.A,m,3)}w=new A.b4W(d)
t=C.b.fP(n.a.e.d,0,new A.b4P())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jx(new A.b4Q(new A.b4X(w),r,w,s))
v=J.S(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.D,B.ak(B.b([B.ay(B.h("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.o,11,C.j),m,m,m),1),B.np(D.ad0,D.aGU,new A.b4R(q,p),m),B.np(D.acE,D.aGE,new A.b4S(q,p,d),m)],o),C.l,C.f,C.i,0,m,m)],o),C.ac,C.f,C.i)},
$S:220}
A.b4N.prototype={
$0(){return A.av9(this.a,this.b,null)},
$S:0}
A.b4O.prototype={
$0(){return A.av6(this.a,this.b)},
$S:0}
A.b4W.prototype={
$1(d){var w=B.bk(J.a2(this.a,d))
return w==null?null:w},
$S:1013}
A.b4X.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.al(v,1)
w=B.b5(w,".",",")+" %"}return w},
$S:35}
A.b4P.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4Q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jR(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hX,o.$1("liquidity1_pct")),m=A.jR(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hX,o.$1("liquidity2_pct")),l=A.jR(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hX,o.$1("liquidity3_pct"))
o=A.jR(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hX,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.al(w,1)
w=B.b5(w,".",",")+" %"}w=A.jR(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hX,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dt()
v=u.aq(v)
return B.a61(p,B.b([n,m,l,o,w,A.jR(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.hX,v)],x.p),q,12,12,C.jU,!0)},
$S:104}
A.b4R.prototype={
$0(){return A.av6(this.a,this.b)},
$S:0}
A.b4S.prototype={
$0(){return A.av9(this.a,this.b,this.c)},
$S:0}
A.bt2.prototype={
$1(d){return new A.Ba(this.a,new A.bt1(this.b),this.c,null)},
$S:z+22}
A.bt1.prototype={
$0(){var w=this.a,v=$.bwS()
if(w.e==null)B.P(B.T(y.b))
w.gc5().bA(v)},
$S:0}
A.b4H.prototype={
$0(){},
$S:0}
A.b4I.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4J.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4L.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.qP(u.b,B.bK(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4K(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4K.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4M.prototype={
$0(){return B.aW(this.a,!1).eq()},
$S:0}
A.b4Y.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4Z.prototype={
$1(d){return new A.xL(x.B.a(d),this.a.a.r)},
$S:z+26}
A.aya.prototype={
$1(d){return d.e},
$S:z+27}
A.ayb.prototype={
$2(d,e){return d+e},
$S:49}
A.ayd.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayf.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayg.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aej(v.d,v.e)},
$S:0}
A.axT.prototype={
$1(d){return 0},
$S:1014}
A.axS.prototype={
$2(d,e){return B.fq(C.c_,this.a.am2(e),C.q,C.bA,null)},
$S:1015}
A.b_h.prototype={
$1(d){return d.a},
$S:z+31}
A.b_i.prototype={
$1(d){return d.b},
$S:z+32}
A.b_j.prototype={
$1(d){return new A.jZ(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_k.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mw||v===D.dJ))t=1-t
return new A.jZ(d,t*w.d)},
$S:z+34}
A.b_l.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goI(),p=d.a
r.goI()
r=$.lv()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.al(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.al(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.al(v/1000,1)
t="K"}else{u=C.d.al(v,r.ak0(Math.abs(s.b-s.c)))
t=""}if(C.c.fz(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nZ(d,q.c.b.$2(p,new A.tA(u+t,s.e)))},
$S:z+35}
A.aVj.prototype={
$1(d){this.a.l8(new A.a5o(d))},
$S:161}
A.aVk.prototype={
$1(d){this.a.l8(new A.a5p(d))},
$S:44}
A.aVl.prototype={
$1(d){this.a.l8(new A.a5q(d))},
$S:28}
A.aVm.prototype={
$0(){this.a.l8(D.a1o)},
$S:0}
A.aVn.prototype={
$1(d){this.a.l8(new A.N4())},
$S:47}
A.aVo.prototype={
$1(d){this.a.l8(new A.a5t(d))},
$S:46}
A.aVp.prototype={
$0(){this.a.l8(D.a1p)},
$S:0}
A.aVq.prototype={
$1(d){this.a.l8(new A.N7(d))},
$S:98}
A.aVr.prototype={
$1(d){this.a.l8(new A.a5n(d))},
$S:164}
A.aVs.prototype={
$1(d){this.a.l8(new A.a5m(d))},
$S:165}
A.aVt.prototype={
$1(d){return this.a.l8(new A.N2(d))},
$S:145}
A.aVu.prototype={
$1(d){return this.a.l8(new A.a5r(d))},
$S:63}
A.aVv.prototype={
$1(d){return this.a.l8(new A.N5(d))},
$S:54}
A.bg9.prototype={
$1(d){var w=this.a.db.h(0,C.b.hy(this.b.ch,d))
return d.aRj(w==null?B.b([],x.t):w)},
$S:z+37}
A.bg7.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bg8.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fL(w,new A.bg6())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.Gz(w))},
$S:0}
A.bg6.prototype={
$2(d,e){return C.d.cz(e.b,d.b)},
$S:z+8}
A.bga.prototype={
$1(d){return new A.zl(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aL8.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.btU.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFL(t?A.bAH(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tB(w,new A.yz(!0,A.bBu(),new A.btT(v)))},
$S:z+41}
A.btT.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUy(A.bAH(d,e,f),w,A.c2n(d,e,f))},
$S:z+42}
A.btR.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j6(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rF(C.d.j(d.b),w)},
$S:z+43}
A.aLa.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLb.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aLf.prototype={
$2(d,e){return C.d.cz(e.c.b,d.c.b)},
$S:z+45}
A.aLd.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aLe.prototype={
$0(){this.a.aej(this.b,this.c)},
$S:0}
A.aLg.prototype={
$2(d,e){return C.d.cz(d.w,e.w)},
$S:z+8}
A.ay3.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.ay4.prototype={
$2(d,e){return d+e},
$S:49}
A.ay7.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ai(v).i("iX<1>")).aD(0,new A.ay8(w,this.a/(u+1),this.c))},
$S:0}
A.ay8.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.ay5.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.ay6.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIb.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1016}
A.aBq.prototype={
$1(d){return d},
$S:1017};(function aliases(){var w=A.KR.prototype
w.a0q=w.i5
w.amk=w.aT1
w.aml=w.aec
w=A.Tx.prototype
w.aoW=w.l
w=A.L0.prototype
w.a0r=w.i5
w=A.G8.prototype
w.a1a=w.Zl})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c62","bUv",72)
var q
v(q=A.Tz.prototype,"gaF3","aF4",23)
v(q,"gaE7","Ic",4)
v(q,"gaEO","In",4)
u(A.TA.prototype,"gasO","asP",25)
t(A,"c4O",3,null,["$3"],["bRO"],49,0)
t(A,"c4P",3,null,["$3"],["bRP"],50,0)
t(A,"c4Q",3,null,["$3"],["bRQ"],51,0)
t(A,"c4S",4,null,["$4"],["c5F"],52,0)
w(A,"c4R","c5E",53)
s(A,"bB_","c5G",54)
t(A,"c4J",3,null,["$3"],["bUz"],55,0)
w(A,"a_n","c84",56)
w(A,"avb","c5J",7)
t(A,"c4L",3,null,["$3"],["bVj"],57,0)
t(A,"c4N",3,null,["$3"],["c_z"],58,0)
t(A,"c4K",3,null,["$3"],["bVi"],59,0)
t(A,"c4M",3,null,["$3"],["c_y"],60,0)
w(A,"cfl","bVh",61)
w(A,"cfm","c_x",62)
r(A.Y8.prototype,"ga4O","ayn",30)
u(A.VW.prototype,"gazG","azH",36)
t(A,"c6U",3,null,["$3"],["bVL"],63,0)
t(A,"c6T",3,null,["$3"],["bRR"],64,0)
w(A,"c6X","c85",1)
t(A,"bMl",4,null,["$5$size","$4"],["bKK",function(d,e,f,g){return A.bKK(d,e,f,g,null)}],65,0)
s(A,"bBu","c83",66)
s(A,"bMm","c4s",67)
s(A,"bMp","c5M",68)
s(A,"bMo","c5I",3)
s(A,"bMn","c5H",3)
w(A,"c6W","bLY",70)
w(A,"c6V","bLX",71)
t(A,"a_u",3,null,["$3"],["c6S"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.R,[A.a6Y,A.agw,A.alI,A.IW,A.Jp,A.agu,A.I1,A.Im,A.al0,A.amj,A.UJ,A.Yj,A.TW,A.U7,A.amP,A.aj5,A.C9,A.asA,A.wQ,A.KS,A.AD])
u(B.B,[A.v1,A.E8,A.bh,A.ahA,A.ahq,A.ahs,A.aht,A.ahi,A.akL,A.ahw,A.ahu,A.ayp,A.asE,A.ayc,A.ahr,A.L0,A.a62,A.tA,A.ar_,A.aqZ,A.ahh,A.akK,A.eB,A.akH,A.akJ,A.ap8,A.alz,A.atj,A.akI,A.akr,A.akG,A.axR,A.bg0,A.axU,A.ahe,A.nZ,A.akD,A.akE,A.vN,A.hn,A.ams,A.amv,A.ahn,A.ahB,A.aho,A.akF,A.amy,A.amw,A.asD,A.aqY,A.aL9,A.amu,A.vy,A.a1u,A.amF,A.a1F,A.b2M])
u(B.v_,[A.qt,A.vC,A.wx,A.aAP,A.aBW,A.og,A.CI,A.oh])
u(B.o3,[A.aFI,A.aFJ,A.aFK,A.aG0,A.bu7,A.bu8,A.bvW,A.bu9,A.bu6,A.bu5,A.aFQ,A.aFW,A.aFP,A.aKR,A.bfH,A.bfI,A.bfJ,A.bfK,A.bfL,A.bfM,A.bfN,A.bfO,A.bfP,A.bfQ,A.bfR,A.bt4,A.boe,A.b6x,A.b7m,A.b7n,A.bgt,A.bqq,A.b4T,A.b4W,A.b4X,A.bt2,A.b4Z,A.aya,A.ayd,A.axT,A.b_h,A.b_i,A.b_j,A.b_k,A.b_l,A.aVj,A.aVk,A.aVl,A.aVn,A.aVo,A.aVq,A.aVr,A.aVs,A.aVt,A.aVu,A.aVv,A.bg9,A.bga,A.aL8,A.btU,A.btT,A.btR,A.aLa,A.aLb,A.ay3,A.aBq])
t(A.yx,B.fh)
u(B.xY,[A.aFH,A.aFG,A.aFZ,A.aFR,A.aFS,A.aFT,A.aFU,A.aFV,A.aFY,A.aFN,A.aFO,A.biJ,A.biK,A.biL,A.aKT,A.bfT,A.bfU,A.bt3,A.bfV,A.b4V,A.b4N,A.b4O,A.b4R,A.b4S,A.bt1,A.b4H,A.b4I,A.b4J,A.b4L,A.b4K,A.b4M,A.b4Y,A.ayg,A.aVm,A.aVp,A.bg7,A.bg8,A.aLd,A.aLe,A.ay7])
u(B.y5,[A.yy,A.ao2,A.a6Z,A.ahm])
u(B.xZ,[A.aFX,A.biI,A.bp3,A.aKS,A.bfS,A.boc,A.bod,A.b6w,A.b6y,A.b6z,A.b7o,A.b7p,A.bgu,A.bqr,A.b4U,A.b4P,A.b4Q,A.ayb,A.ayf,A.axS,A.bg6,A.aLf,A.aLg,A.ay4,A.ay8,A.ay5,A.ay6,A.aIb])
u(B.L,[A.Ba,A.Rz])
u(B.a3,[A.Tz,A.Y8])
u(B.NN,[A.KX,A.Or])
u(B.xD,[A.TA,A.VW])
t(A.a13,A.ahA)
t(A.ahd,A.a13)
t(A.a0O,A.ahd)
u(A.a0O,[A.ahp,A.amt])
t(A.o_,A.ahp)
u(B.I0,[A.ay1,A.adY,A.CZ,A.aEX,A.aKU,A.Nw])
t(A.fL,A.ahq)
t(A.it,A.ahs)
t(A.mI,A.aht)
t(A.a0V,A.ahi)
t(A.N8,A.akL)
u(A.N8,[A.ahv,A.amx])
t(A.a1_,A.ahv)
t(A.a10,A.ahw)
t(A.D_,A.ahu)
u(A.ayp,[A.KY,A.Ot])
t(A.ae_,A.asE)
t(A.ahx,A.ae_)
t(A.a11,A.ahx)
u(B.bf,[A.xL,A.zl])
t(A.uD,A.ahr)
t(A.KR,A.L0)
u(A.KR,[A.aye,A.aLc])
u(B.On,[A.a0Y,A.a7c])
u(B.J,[A.G8,A.ahf])
u(A.G8,[A.ab5,A.abi])
t(A.qk,A.ar_)
t(A.acw,A.aqZ)
t(A.pk,A.ahh)
t(A.v3,A.akK)
t(A.yA,A.akH)
t(A.pH,A.akJ)
t(A.Q8,A.ap8)
t(A.n4,A.alz)
t(A.nu,A.atj)
u(A.pH,[A.aly,A.ati])
t(A.kS,A.aly)
t(A.lf,A.ati)
t(A.a5l,A.akI)
u(A.a5l,[A.alx,A.ath])
t(A.a6d,A.alx)
t(A.aem,A.ath)
t(A.MV,A.akr)
t(A.v2,A.akG)
t(A.N1,A.v2)
t(A.acx,B.fA)
t(A.ahg,A.ahf)
t(A.Tx,A.ahg)
t(A.a0P,A.Tx)
t(A.jZ,A.ahe)
t(A.a5i,A.akD)
t(A.a5k,A.akE)
u(A.hn,[A.a5o,A.a5p,A.a5q,A.N3,A.N4,A.a5t,A.N6,A.N7,A.a5n,A.a5m,A.N2,A.a5r,A.a5s,A.N5])
t(A.pT,A.amt)
t(A.ec,A.ams)
t(A.Os,A.amv)
t(A.a0X,A.ahn)
t(A.mJ,A.ahB)
t(A.KW,A.aho)
t(A.yz,A.akF)
t(A.EM,A.amx)
t(A.a7d,A.amy)
t(A.amr,A.eB)
t(A.n8,A.amr)
t(A.qr,A.n8)
t(A.rF,A.amw)
t(A.tB,A.asD)
t(A.Gz,A.aqY)
t(A.zm,A.amu)
t(A.zp,A.amF)
w(A.ahi,A.bh)
w(A.ahp,A.bh)
w(A.ahq,A.bh)
w(A.ahs,A.bh)
w(A.aht,A.bh)
w(A.ahu,A.bh)
w(A.ahv,A.bh)
w(A.ahw,A.bh)
w(A.ahx,A.bh)
w(A.ahr,A.bh)
w(A.ahd,A.bh)
w(A.ahh,A.bh)
w(A.akr,A.bh)
w(A.akG,A.bh)
w(A.akH,A.bh)
w(A.akJ,A.bh)
w(A.akK,A.bh)
w(A.aly,A.bh)
w(A.alx,A.bh)
w(A.alz,A.bh)
w(A.ap8,A.bh)
w(A.aqZ,A.bh)
w(A.ar_,A.bh)
w(A.asE,A.bh)
w(A.ati,A.bh)
w(A.ath,A.bh)
w(A.atj,A.bh)
w(A.ahe,A.bh)
v(A.ahf,B.az)
w(A.ahg,B.dO)
v(A.Tx,B.a4g)
w(A.ahA,A.bh)
w(A.akD,A.bh)
w(A.akE,A.bh)
w(A.akL,A.bh)
w(A.ahn,A.bh)
w(A.aho,A.bh)
w(A.ahB,A.bh)
w(A.akF,A.bh)
w(A.akI,A.bh)
w(A.amr,A.bh)
w(A.ams,A.bh)
w(A.amt,A.bh)
w(A.amv,A.bh)
w(A.amw,A.bh)
w(A.amx,A.bh)
w(A.amy,A.bh)
w(A.aqY,A.bh)
w(A.asD,A.bh)
w(A.amu,A.bh)
w(A.amF,A.bh)})()
B.bqD(b.typeUniverse,JSON.parse('{"a6Y":{"R":[],"c":[]},"E8":{"aFM":[]},"yx":{"fh":["be<~>"],"fh.T":"be<~>"},"Jp":{"R":[],"c":[]},"I1":{"R":[],"c":[]},"yy":{"aV":[],"L":[],"c":[]},"agw":{"R":[],"c":[]},"alI":{"R":[],"c":[]},"ao2":{"aV":[],"L":[],"c":[]},"IW":{"R":[],"c":[]},"agu":{"R":[],"c":[]},"Im":{"R":[],"c":[]},"wQ":{"R":[],"c":[]},"Ba":{"L":[],"c":[]},"a6Z":{"aV":[],"L":[],"c":[]},"al0":{"R":[],"c":[]},"amj":{"R":[],"c":[]},"UJ":{"R":[],"c":[]},"Yj":{"R":[],"c":[]},"TW":{"R":[],"c":[]},"U7":{"R":[],"c":[]},"amP":{"R":[],"c":[]},"aj5":{"R":[],"c":[]},"C9":{"R":[],"c":[]},"asA":{"R":[],"c":[]},"ahm":{"aV":[],"L":[],"c":[]},"Tz":{"a3":["Ba"]},"KX":{"L":[],"c":[]},"TA":{"a3":["KX"]},"o_":{"bh":[]},"fL":{"bh":[]},"it":{"bh":[]},"mI":{"bh":[]},"D_":{"bh":[]},"xL":{"bf":["o_"],"b9":["o_"],"b9.T":"o_","bf.T":"o_"},"a0V":{"bh":[]},"a1_":{"bh":[]},"a10":{"bh":[]},"a11":{"bh":[]},"uD":{"bh":[]},"a0Y":{"aU":[],"c":[]},"ab5":{"J":[],"M":[],"jA":[],"aS":[]},"pH":{"bh":[]},"n4":{"bh":[]},"nu":{"bh":[]},"kS":{"bh":[]},"lf":{"bh":[]},"v2":{"bh":[]},"a0O":{"bh":[]},"qk":{"bh":[]},"acw":{"bh":[]},"pk":{"bh":[]},"v3":{"bh":[]},"yA":{"bh":[]},"ae_":{"bh":[]},"Q8":{"bh":[]},"a6d":{"bh":[]},"aem":{"bh":[]},"MV":{"bh":[]},"N1":{"bh":[]},"KS":{"R":[],"c":[]},"Rz":{"L":[],"c":[]},"Y8":{"a3":["Rz"]},"jZ":{"bh":[]},"acx":{"fA":[],"aU":[],"c":[]},"a0P":{"dO":["J","ho"],"J":[],"az":["J","ho"],"M":[],"aS":[],"az.1":"ho","dO.1":"ho","az.0":"J"},"AD":{"R":[],"c":[]},"a13":{"bh":[]},"a5i":{"bh":[]},"N8":{"bh":[]},"a5k":{"bh":[]},"a5o":{"hn":[]},"a5p":{"hn":[]},"a5q":{"hn":[]},"N3":{"hn":[]},"N4":{"hn":[]},"a5t":{"hn":[]},"N6":{"hn":[]},"N7":{"hn":[]},"a5n":{"hn":[]},"a5m":{"hn":[]},"N2":{"hn":[]},"a5r":{"hn":[]},"a5s":{"hn":[]},"N5":{"hn":[]},"G8":{"J":[],"M":[],"jA":[],"aS":[]},"Or":{"L":[],"c":[]},"VW":{"a3":["Or"]},"pT":{"bh":[]},"ec":{"bh":[]},"mJ":{"bh":[]},"n8":{"eB":[],"bh":[]},"qr":{"n8":[],"eB":[],"bh":[]},"rF":{"bh":[]},"tB":{"bh":[]},"Gz":{"bh":[]},"zl":{"bf":["pT"],"b9":["pT"],"b9.T":"pT","bf.T":"pT"},"Os":{"bh":[]},"a0X":{"bh":[]},"KW":{"bh":[]},"yz":{"bh":[]},"a5l":{"bh":[]},"EM":{"bh":[]},"a7d":{"bh":[]},"zm":{"bh":[]},"a7c":{"aU":[],"c":[]},"abi":{"J":[],"M":[],"jA":[],"aS":[]},"zp":{"bh":[]}}'))
B.bKd(b.typeUniverse,JSON.parse('{"KR":1,"N8":1,"L0":1,"G8":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CI"),e:w("be<og>"),aN:w("be<oh>"),fM:w("be<Z<f,@>?>"),b:w("be<~>"),W:w("jZ"),B:w("o_"),dB:w("fL"),gF:w("uD"),fj:w("it"),G:w("mI"),bO:w("mJ"),k:w("av"),C:w("a1F<K>"),dO:w("uL"),R:w("a4<f,@>"),g:w("hJ"),bz:w("lE<b8>"),f0:w("o9"),E:w("bh"),F:w("yx"),X:w("og"),P:w("lJ"),D:w("v1"),a:w("aFM"),d:w("oh"),cw:w("eB"),L:w("ho"),m:w("dp<v,E>"),cm:w("kS"),dv:w("n4"),M:w("C<nZ>"),I:w("C<bEl>"),O:w("C<fL>"),Y:w("C<it>"),U:w("C<eB>"),K:w("C<a62>"),u:w("C<ec>"),bC:w("C<vy>"),aA:w("C<u<eB>>"),v:w("C<ee>"),r:w("C<Gz>"),s:w("C<f>"),eg:w("C<tx>"),df:w("C<qr>"),p:w("C<c>"),n:w("C<K>"),t:w("C<v>"),eF:w("bj<a3<L>>"),Z:w("n8"),cz:w("ec"),hf:w("pT"),dj:w("zm"),fT:w("rF"),c_:w("i5<p3<be<~>>>"),x:w("zp<fL>"),y:w("zp<ec>"),J:w("u<v>"),ef:w("vC"),c:w("Z<f,@>"),f:w("Z<@,@>"),gj:w("af<K,K>"),w:w("ka"),aU:w("B"),Q:w("vN<o_>"),o:w("vN<pT>"),dc:w("ee"),eo:w("q8"),gJ:w("q9"),V:w("mg<lJ>"),N:w("f"),A:w("no"),bP:w("bw"),er:w("tx"),j:w("wx"),dw:w("qr"),bY:w("tB"),cZ:w("qt"),gc:w("jb"),es:w("lf"),bN:w("nu"),l:w("c"),q:w("x7"),g4:w("il<K>"),cJ:w("D"),i:w("K"),z:w("@"),S:w("v"),bn:w("xL?"),f3:w("zl?"),T:w("u<@>?"),h:w("Z<f,@>?"),fF:w("Z<@,@>?"),cK:w("B?"),aD:w("jb?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AZ=new B.nR(C.m,B.au("nR<E>"))
D.B5=new A.CZ(0,"left")
D.mw=new A.CZ(1,"top")
D.B6=new A.CZ(2,"right")
D.dJ=new A.CZ(3,"bottom")
D.axH=new A.qk(!1,A.bB_(),22,null)
D.ku=new A.pk(16,null,D.axH,!0)
D.a8A=new A.pH(C.E,null,2,null)
D.vS=new A.KW(!1,D.a8A,A.c6X(),!0)
D.a_t=new A.ay1(3,"spaceEvenly")
D.a_C=new B.xO(6,"dstIn")
D.Xp=new B.aX(3,3)
D.B9=new B.d9(D.Xp,D.Xp,C.a2,C.a2)
D.a_N=new B.bl(C.E,0,C.S,-1)
D.BI=new A.a5k()
D.a1o=new A.N3()
D.a1p=new A.N6()
D.aPK=new A.acw()
D.alD=w([],B.au("C<kS>"))
D.alE=w([],B.au("C<lf>"))
D.DM=new A.MV(D.alD,D.alE,!0)
D.a8j=new B.dF("Zeitraum",!1,null)
D.a8n=new B.dF("Konten (SKR 03)",!1,null)
D.xx=new A.aEX(0,"center")
D.aPZ=new A.yz(!0,A.bBu(),A.bMl())
D.DQ=new A.yz(!1,A.bBu(),A.bMl())
D.DR=new A.yA(!1,!0,null,A.avb(),A.a_n(),!0,null,A.avb(),A.a_n())
D.aQ_=new A.yA(!0,!0,null,A.avb(),A.a_n(),!0,null,A.avb(),A.a_n())
D.a3J=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3u=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a3T=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a3N=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3e=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3d=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a4e=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a3C=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4h=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4b=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.arJ=new B.dp([50,D.a3J,100,D.a3u,200,D.a3T,300,D.a3N,400,D.a3e,500,D.a3d,600,D.a4e,700,D.a3C,800,D.a4h,900,D.a4b],x.m)
D.dp=new B.rM(D.arJ,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.ahJ=w([8,4],x.t)
D.a8y=new A.pH(D.dp,null,0.4,D.ahJ)
D.a8z=new A.pH(C.am,null,0.5,null)
D.fK=new A.eB(0/0,0/0)
D.axJ=new A.qk(!0,A.bB_(),44,null)
D.mx=new A.pk(16,null,D.axJ,!0)
D.axI=new A.qk(!0,A.bB_(),30,null)
D.my=new A.pk(16,null,D.axI,!0)
D.a8B=new A.v3(!1,D.mx,D.my,D.mx,D.my)
D.aQ0=new A.v3(!0,D.mx,D.my,D.mx,D.my)
D.DZ=new A.Nw(0,"left")
D.a9e=new A.Nw(1,"center")
D.E_=new A.Nw(2,"right")
D.a9i=new B.a9(57495,"MaterialIcons",null,!1)
D.xP=new B.a9(58927,"MaterialIcons",null,!1)
D.aa1=new B.a9(59005,"MaterialIcons",null,!0)
D.aa2=new B.a9(59007,"MaterialIcons",null,!0)
D.aa3=new B.a9(59011,"MaterialIcons",null,!1)
D.aaY=new B.a9(62589,"MaterialIcons",null,!1)
D.aah=new B.a9(61349,"MaterialIcons",null,!1)
D.abM=new B.aC(D.aah,20,C.h,null,null)
D.aao=new B.a9(61487,"MaterialIcons",null,!1)
D.abO=new B.aC(D.aao,18,null,null,null)
D.abP=new B.aC(D.xP,18,null,null,null)
D.aca=new B.aC(C.je,null,C.h,null,null)
D.acb=new B.aC(C.lb,null,C.o,null,null)
D.acE=new B.aC(C.nO,16,null,null,null)
D.acM=new B.aC(C.xV,16,null,null,null)
D.a9t=new B.a9(57912,"MaterialIcons",null,!1)
D.acO=new B.aC(D.a9t,null,C.a8,null,null)
D.aaX=new B.a9(62584,"MaterialIcons",null,!1)
D.acW=new B.aC(D.aaX,16,null,null,null)
D.ad0=new B.aC(D.xP,16,null,null,null)
D.afb=new A.a6Z(null)
D.aQ5=new A.aKU(0,"horizontal")
D.y7=new A.zm(0,0,0,0,!1)
D.Fk=new A.Os(0.5)
D.BO=new A.a7d()
D.afg=new A.EM(D.BO,A.bMp(),10,A.bMm(),!0,A.bMo(),A.bMn(),!1,null,null,null)
D.aQ7=new A.EM(D.BO,A.bMp(),10,A.bMm(),!0,A.bMo(),A.bMn(),!0,null,null,null)
D.agI=w([4,3],x.t)
D.avZ=new B.aF("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.avP=new B.aF("receivables","Forderungen (kurzfristig)")
D.avE=new B.aF("inventory_value","Vorr\xe4te (Warenbestand)")
D.avC=new B.aF("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avs=new B.aF("fixed_assets","Anlageverm\xf6gen")
D.avx=new B.aF("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avW=new B.aF("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avO=new B.aF("equity","Eigenkapital")
D.pr=w([D.avZ,D.avP,D.avE,D.avC,D.avs,D.avx,D.avW,D.avO],B.au("C<+(f,f)>"))
D.aQb=w([],x.M)
D.alp=w([],x.O)
D.alq=w([],x.Y)
D.alr=w([],B.au("C<mI>"))
D.als=w([],B.au("C<mJ>"))
D.aQc=w([],x.U)
D.aQd=w([],x.u)
D.alt=w([],x.r)
D.asq={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T_={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yN=new B.a4(D.T_,[0,0,0,0,0,0,0,C.cb],B.au("a4<f,B>"))
D.asn={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.arB=new B.a4(D.asn,[0,0,0,0],B.au("a4<f,v>"))
D.asI={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apb=new B.a4(D.asI,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.ap5=new B.a4(D.asq,[D.yN,D.yN,D.yN,C.cb,C.cb,C.cb,D.arB,D.apb],x.R)
D.apn=new B.a4(D.T_,[0,0,0,0,0,0,0,C.cE],x.R)
D.ass={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.app=new B.a4(D.ass,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,K>"))
D.asm={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.arC=new B.a4(D.asm,[0,0,0,0,0,0,0,C.cE],x.R)
D.asV={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arF=new B.a4(D.asV,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a4m=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4u=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3h=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a3F=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a3P=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a4J=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a33=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a3H=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a3S=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a4c=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.arK=new B.dp([50,D.a4m,100,D.a4u,200,D.a3h,300,D.a3F,400,D.a3P,500,D.a4J,600,D.a33,700,D.a3H,800,D.a3S,900,D.a4c],x.m)
D.SP=new B.rM(D.arK,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a7E=new B.al(48,48,48,48)
D.atR=new B.ad(D.a7E,C.bo,null)
D.atX=new B.ad(C.ae,C.bo,null)
D.alF=w([],B.au("C<n4>"))
D.alG=w([],B.au("C<nu>"))
D.Xq=new A.Q8(D.alF,D.alG)
D.awG=new B.fC("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awH=new B.fC("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awK=new B.fC("Automaten-Business","Umsatz je Automat",null,null)
D.awM=new B.fC("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awO=new B.fC("Top","Meistverkaufte Produkte",null,null)
D.awR=new B.fC("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awS=new B.fC("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y5=new B.th(C.I,C.v,0)
D.aFe=new B.ac("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.azi=new B.df(D.aFe,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHt=new B.ac('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azl=new B.df(D.aHt,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aFy=new B.ac("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.azm=new B.df(D.aFy,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHn=new B.ac("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azo=new B.df(D.aHn,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGQ=new B.ac("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azp=new B.df(D.aGQ,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGN=new B.ac("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azN=new B.df(D.aGN,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aQm=new B.W(!0,C.E,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFu=new B.ac("Demo",null,null,null,null,null,null,null,null,null)
D.aFJ=new B.ac("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGx=new B.ac("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGE=new B.ac("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGU=new B.ac("sevDesk",null,null,null,null,null,null,null,null,null)
D.aHG=new B.ac("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zm=new A.adY(0,"auto")
D.aIi=new A.adY(1,"top")
D.aMC=new A.wQ("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMD=new A.wQ("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfW","bQD",()=>B.hP(new A.bu7(),x.D))
w($,"cfX","avP",()=>B.hP(new A.bu8(),x.a))
w($,"cgW","xw",()=>B.b09(new A.bvW(),x.P))
w($,"cfY","bwT",()=>C.aq.$1$1(new A.bu9(),x.d))
w($,"cfV","bQC",()=>C.aq.$1$1(new A.bu6(),x.X))
w($,"cfU","bwS",()=>C.aq.$1$1(new A.bu5(),x.h))
w($,"cfT","bwR",()=>B.ade(A.c62(),x.F,x.b))
w($,"c8Q","bwo",()=>new A.axR())
v($,"cca","lv",()=>new A.b2M())})()};
(a=>{a["oJtfha827f9cFRmDXJa9nUJJeEA="]=a.current})($__dart_deferred_initializers__);