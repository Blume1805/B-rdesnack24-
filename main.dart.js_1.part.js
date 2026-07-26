((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NI(d,e,f,g,h){return new A.a65(f,g,d,h,e,null)},
a65:function a65(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uF:function uF(d){this.a=d},
DM:function DM(d){this.a=d},
bQd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T8
w=x.f
v=x.N
u=x.z
t=A.aDW(B.dh(w.a(e.h(a0,"current")),v,u))
s=A.aDW(B.dh(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDW(B.dh(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c6
p=J.d_(p,new A.aDE(),x.cZ)
p=B.P(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c6
o=J.d_(o,new A.aDF(),x.ef)
o=B.P(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c6
q=J.d_(q,new A.aDG(),x.j)
q=B.P(q,q.$ti.i("aw.E"))
n=B.dh(w.a(e.h(a0,"customer")),v,u)
m=B.bn(n.h(0,"purchases_count"))
m=m==null?null:C.d.a2(m)
if(m==null)m=0
l=A.oS(n.h(0,"app_gross"))
k=B.bn(n.h(0,"active_customers"))
k=k==null?null:C.d.a2(k)
if(k==null)k=0
n=A.oS(n.h(0,"avg_basket"))
u=B.dh(w.a(e.h(a0,"derived")),v,u)
v=A.oS(u.h(0,"gross_margin_pct"))
e=A.oS(u.h(0,"net_margin_pct"))
w=A.oS(u.h(0,"ebitda_margin_pct"))
j=A.oS(u.h(0,"cashflow_operating"))
i=A.bpL(u.h(0,"revenue_growth_yoy_pct"))
h=A.bpL(u.h(0,"revenue_growth_mom_pct"))
g=A.bpL(u.h(0,"result_growth_yoy_pct"))
u=A.bpL(u.h(0,"result_growth_mom_pct"))
f=B.bn(J.a3(d,"days"))
f=f==null?null:C.d.a2(f)
if(f==null)f=1
return new A.o_(t,s,r,p,o,q,new A.az6(m,l,k,n),new A.aAc(v,e,w,j,i,h,g,u),f)},
oS(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jq(J.ak(d))
return w==null?0:w},
bpL(d){if(d==null)return null
if(typeof d=="number")return d
return B.jq(J.ak(d))},
qa:function qa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vk:function vk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wc:function wc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az6:function az6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAc:function aAc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o_:function o_(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDE:function aDE(){},
aDF:function aDF(){},
aDG:function aDG(){},
aDW(d){var w=J.Y(d),v=A.tW(w.h(d,"revenue_net_7")),u=A.tW(w.h(d,"revenue_net_19")),t=A.tW(w.h(d,"revenue_net")),s=A.tW(w.h(d,"expense_net")),r=A.tW(w.h(d,"result_net")),q=A.tW(w.h(d,"vat_collected")),p=A.tW(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.c6
w=J.d_(w,new A.aDX(),x._)
w=B.P(w,w.$ti.i("aw.E"))
return new A.o0(v,u,t,s,r,q,p,w)},
tW(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jq(J.ak(d))
return w==null?0:w},
Cm:function Cm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o0:function o0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aDX:function aDX(){},
bQc(d){return new A.yd(d,new B.ij(x.c_),C.dD)},
bqy:function bqy(){},
bqz:function bqz(){},
bsn:function bsn(){},
bqA:function bqA(){},
bqx:function bqx(){},
bqw:function bqw(){},
yd:function yd(d,e,f){this.r=d
this.a=e
this.f=f},
aDD:function aDD(d,e,f){this.a=d
this.b=e
this.c=f},
aDC:function aDC(d,e,f){this.a=d
this.b=e
this.c=f},
bQe(){return new A.ye(null)},
akL(d,e,f,g,h){return new A.akK(e,h,g,f,d,null)},
ye:function ye(d){this.a=d},
aDV:function aDV(d){this.a=d},
aDN:function aDN(d,e,f){this.a=d
this.b=e
this.c=f},
aDO:function aDO(d,e,f){this.a=d
this.b=e
this.c=f},
aDP:function aDP(d){this.a=d},
aDM:function aDM(){},
aDQ:function aDQ(d){this.a=d},
aDR:function aDR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDU:function aDU(){},
aDT:function aDT(){},
aDS:function aDS(){},
aDL:function aDL(d,e){this.a=d
this.b=e},
aDJ:function aDJ(d){this.a=d},
aDK:function aDK(d){this.a=d},
afB:function afB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akK:function akK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amY:function amY(d,e){this.e=d
this.a=e},
bfB:function bfB(d){this.a=d},
bfC:function bfC(d){this.a=d},
bfD:function bfD(d,e,f){this.a=d
this.b=e
this.c=f},
bfA:function bfA(){},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J_:function J_(d,e){this.c=d
this.a=e},
blD:function blD(d){this.a=d},
afz:function afz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HE:function HE(d,e){this.c=d
this.a=e},
bx4(d,e,f,g,h){var w=null
return B.j5(w,w,!0,w,new A.bpG(h,g,e,f),d,w,!0,!0,x.H)},
jB(d,e,f,g,h,i,j,k,l,m,n){return new A.alh(g,n,i,e,d,m,f,k,l,j,null)},
atR(d,e){return A.c_I(d,e)},
c_I(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$atR=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bc(D.aww)
t=4
o=e.aJ(0,$.c_(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hf("finance-balance-sync",B.A(n,n)),$async$atR)
case 7:r=g
q=B.dh(x.f.a(r.a),x.N,n)
l.Wt()
if(J.d(J.a3(q,"configured"),!1)){l.bc(D.awA)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bt7()
if(e.e==null)B.U(B.a_(y.b))
e.gcp().cj(o)
l.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Wt()
l.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$atR,v)},
atU(d,e,f){var w=0,v=B.q(x.H)
var $async$atU=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j5(null,null,!0,null,new A.bpE(f,e,e.aJ(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$atU)
case 2:return B.o(null,v)}})
return B.p($async$atU,v)},
a66:function a66(d){this.a=d},
aIM:function aIM(){},
aIL:function aIL(){},
aIK:function aIK(){},
HZ:function HZ(d,e){this.c=d
this.a=e},
bd9:function bd9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcZ:function bcZ(){},
bd_:function bd_(){},
bd0:function bd0(){},
bd1:function bd1(){},
bd2:function bd2(){},
bd3:function bd3(){},
bd4:function bd4(){},
bd5:function bd5(){},
bd6:function bd6(d){this.a=d},
bd7:function bd7(d){this.a=d},
bd8:function bd8(d){this.a=d},
bda:function bda(d,e){this.a=d
this.b=e},
bdb:function bdb(d,e){this.a=d
this.b=e},
bpG:function bpG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpF:function bpF(d){this.a=d},
ak3:function ak3(d){this.a=d},
alh:function alh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bdc:function bdc(d,e){this.a=d
this.b=e},
U7:function U7(d,e,f){this.c=d
this.d=e
this.a=f},
XD:function XD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkQ:function bkQ(){},
bkR:function bkR(){},
bkS:function bkS(d){this.a=d},
Tl:function Tl(d,e,f){this.c=d
this.d=e
this.a=f},
b48:function b48(){},
b4a:function b4a(d){this.a=d},
b4b:function b4b(d){this.a=d},
b49:function b49(){},
Tx:function Tx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4W:function b4W(){},
b4X:function b4X(){},
b4Y:function b4Y(){},
b4Z:function b4Z(d){this.a=d},
alL:function alL(d,e){this.c=d
this.a=e},
bdG:function bdG(){},
bdH:function bdH(){},
ai6:function ai6(d,e){this.c=d
this.a=e},
BR:function BR(d,e,f){this.c=d
this.d=e
this.a=f},
arm:function arm(d,e){this.c=d
this.a=e},
bmU:function bmU(){},
bmV:function bmV(){},
wu:function wu(d,e){this.c=d
this.a=e},
agq:function agq(d,e){this.e=d
this.a=e},
b2D:function b2D(){},
b2C:function b2C(){},
b2B:function b2B(d,e,f){this.a=d
this.b=e
this.c=f},
b2v:function b2v(d,e){this.a=d
this.b=e},
b2w:function b2w(d,e){this.a=d
this.b=e},
b2E:function b2E(d){this.a=d},
b2F:function b2F(d){this.a=d},
b2x:function b2x(){},
b2y:function b2y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2z:function b2z(d,e){this.a=d
this.b=e},
b2A:function b2A(d,e,f){this.a=d
this.b=e
this.c=f},
bpE:function bpE(d,e,f){this.a=d
this.b=e
this.c=f},
bpD:function bpD(d){this.a=d},
AW:function AW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SZ:function SZ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b2p:function b2p(){},
b2q:function b2q(d){this.a=d},
b2r:function b2r(d){this.a=d},
b2t:function b2t(d,e){this.a=d
this.b=e},
b2s:function b2s(d,e){this.a=d
this.b=e},
b2u:function b2u(d){this.a=d},
bc:function bc(){},
bAk(d){return new A.Kt(d,C.au,C.ds,null,null)},
Kt:function Kt(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
T_:function T_(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ft$=f
_.cS$=g
_.c=_.a=null},
b2G:function b2G(d,e){this.a=d
this.b=e},
b2H:function b2H(d){this.a=d},
awp(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akW:f,p=a0==null?16:a0,o=d==null?D.a_G:d,n=g==null,m=n?A.btB(r,r,r,r,r,r,r,r):g,l=a3==null?D.XP:a3
n=n?A.btB(r,r,r,r,r,r,r,r):g
w=j==null?D.DD:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nJ(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bv,s,w,i,n)},
aww(d,e,f,g,h){var w=d==null?D.akX:d,v=e==null?2:e,u=g==null?C.lh:g
return new A.fB(h,f===!0,w,v,u)},
bNx(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.aww(A.ko(d.c,e.c,f,A.c0s(),x.fj),B.ab(d.d,e.d,f),!1,A.ko(d.e,e.e,f,A.ZL(),x.S),w)},
a08(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tg
else w=h
v=m==null
u=v?8:m
t=$.lp()
s=t.aWm(f,v?8:m)
t=t.aWn(g,v?8:m)
v=d==null?A.bAi(r,r,r,r,r):d
return new A.ig(q,l,w,j,u,s,e,t,v,k==null?D.akY:k)},
bNy(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mw(d.f,e.f,f),p=A.ko(d.r,e.r,f,A.ZL(),x.S),o=B.bW(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a08(A.bAi(v,u,null,!1,t),p,q,o,s,n,null,A.ko(d.y,e.y,f,A.c0t(),x.G),m,r)},
bNz(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mu(u,w,v,B.bW(d.d,e.d,f))},
bAi(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.di
else w=d
return new A.a04(g===!0,v,u,w,f)},
btB(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0a(4,C.hG,16,D.xn,0,120,A.c0v(),!1,!1,D.ZJ,0,C.F,A.c0u())
else w=k
v=j==null?C.kP:j
return new A.a09(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c1g(d,e,f,g){var w=null,v=B.iX(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CD(C.d.j(f.b),v)},
c1f(d){return A.ayx(D.di,15)},
nJ:function nJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
awo:function awo(d,e){this.a=d
this.b=e},
fB:function fB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awx:function awx(){},
awy:function awy(){},
ig:function ig(d,e,f,g,h,i,j,k,l,m){var _=this
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
mu:function mu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a04:function a04(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a09:function a09(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ad3:function ad3(d,e){this.a=d
this.b=e},
a0a:function a0a(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CD:function CD(d,e){this.a=d
this.b=e},
Ku:function Ku(d){this.a=d},
a0b:function a0b(d,e,f,g,h,i,j,k){var _=this
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
agm:function agm(){},
agt:function agt(){},
agu:function agu(){},
agw:function agw(){},
agx:function agx(){},
agy:function agy(){},
agz:function agz(){},
agA:function agA(){},
agB:function agB(){},
awz:function awz(d){this.a=d},
awA:function awA(){},
ui:function ui(d,e,f){this.a=d
this.b=e
this.c=f},
agv:function agv(){},
awB:function awB(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
awC:function awC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awD:function awD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a58:function a58(d){this.b=d},
a07:function a07(d,e,f){this.d=d
this.e=e
this.a=f},
aad:function aad(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ah=_.an=$
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
c1h(d,e){var w=null
return new A.R_(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
awi(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p5(t,e.b,new A.q1(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bBI(d,e,f){var w=A.awi(d.b,e.b,f),v=A.awi(d.d,e.d,f),u=A.awi(d.e,e.e,f)
return new A.uH(e.a,w,A.awi(d.c,e.c,f),v,u)},
bQg(d,e,f){var w,v
if(d.k(0,D.fH))return e
if(e.k(0,D.fH))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bBG(d,e,f){return new A.yg(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c3F(d){return!0},
c1k(d){return D.a8I},
bBH(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pr(w,f,g,e)},
bDC(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0o(),x.dv)
v.toString
w=A.ko(d.b,e.b,f,A.c0q(),x.bN)
w.toString
return new A.PA(v,w)},
bR1(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r7(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mO(t,w,v,u)},
bWf(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r7(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nf(t,w,v,u)},
bR0(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pl(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQZ(B.bts(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r7(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZL(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kI(r,e.f,e.r,t,e.x,u,v,w,s)},
bWe(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pl(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bWc(B.bts(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r7(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZL(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l6(r,e.f,e.r,t,e.x,u,v,w,s)},
bQZ(d,e,f,g,h,i){return new A.a5j(f,!1,g,i,d,e)},
bR_(d){return C.d.ak(d.e,1)},
bWc(d,e,f,g,h,i){return new A.ads(f,!1,g,i,d,e)},
bWd(d){return C.d.ak(d.e,1)},
bBC(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0n(),x.cm)
v.toString
w=A.ko(d.b,e.b,f,A.c0p(),x.es)
w.toString
return new A.Mn(v,w,!0)},
bQf(d,e,f){return new A.Mx(d,e==null?4:e,f)},
a_Y:function a_Y(){},
CC:function CC(d,e){this.a=d
this.b=e},
th:function th(d,e){this.r=d
this.w=e},
q1:function q1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abD:function abD(){},
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
ev:function ev(d,e){this.a=d
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
ad5:function ad5(){},
PA:function PA(d,e){this.a=d
this.b=e},
mO:function mO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nf:function nf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kI:function kI(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
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
a5j:function a5j(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ads:function ads(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mn:function Mn(d,e,f){this.a=d
this.b=e
this.c=f},
uG:function uG(){},
Mx:function Mx(d,e,f){this.a=d
this.b=e
this.c=f},
agh:function agh(){},
agl:function agl(){},
ajt:function ajt(){},
ajJ:function ajJ(){},
ajK:function ajK(){},
ajM:function ajM(){},
ajN:function ajN(){},
akA:function akA(){},
akz:function akz(){},
akB:function akB(){},
ao3:function ao3(){},
apP:function apP(){},
apQ:function apQ(){},
arq:function arq(){},
as2:function as2(){},
as1:function as1(){},
as3:function as3(){},
awe:function awe(){},
Kn:function Kn(){},
Ko:function Ko(d,e,f){this.c=d
this.d=e
this.a=f},
awg:function awg(d){this.a=d},
awf:function awf(d){this.a=d},
R_:function R_(d,e,f){this.c=d
this.e=e
this.a=f},
Xs:function Xs(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bUM(d,e,f){var w=B.ac(f),v=w.i("aa<1,jM>")
v=B.P(new B.aa(f,new A.aY1(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.P(new B.aa(f,new A.aY2(),w),w.i("aw.E"))
return new A.abE(e,d,v,w,null)},
bNu(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a5X(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tf(v,C.ap,C.w,new B.ki(1),v,v,v,v,C.bv,v)
u=new A.a_Z(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aJ(x.v))
u.bk()
return u},
abE:function abE(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aY1:function aY1(){},
aY2:function aY2(){},
a_Z:function a_Z(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a3=g
_.VN$=h
_.aS7$=i
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
bdi:function bdi(d,e){this.a=d
this.b=e},
awh:function awh(){},
jM:function jM(d,e){this.a=d
this.b=e},
nI:function nI(d,e){this.a=d
this.b=e},
agi:function agi(){},
agj:function agj(){},
agk:function agk(){},
SX:function SX(){},
An:function An(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aY3:function aY3(d){this.a=d},
aY4:function aY4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aY5:function aY5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4r(d,e){var w=d==null?B.cV(C.B,1):d
return new A.a4q(e!==!1,w)},
a0d:function a0d(){},
a4q:function a4q(d,e){this.a=d
this.b=e},
ME:function ME(){},
a4s:function a4s(){},
awM:function awM(){},
aD3:function aD3(d,e){this.a=d
this.b=e},
agE:function agE(){},
ajG:function ajG(){},
ajH:function ajH(){},
ajO:function ajO(){},
Kx:function Kx(){},
vw:function vw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4w:function a4w(d){this.a=d},
a4x:function a4x(d){this.a=d},
a4y:function a4y(d){this.a=d},
Mz:function Mz(){},
MA:function MA(){},
a4B:function a4B(d){this.a=d},
MC:function MC(){},
MD:function MD(d){this.a=d},
a4v:function a4v(d){this.a=d},
a4u:function a4u(d){this.a=d},
My:function My(d){this.a=d},
a4z:function a4z(d){this.a=d},
a4A:function a4A(d){this.a=d},
MB:function MB(d){this.a=d},
FK:function FK(){},
aTg:function aTg(d){this.a=d},
aTh:function aTh(d){this.a=d},
aTi:function aTi(d){this.a=d},
aTj:function aTj(d){this.a=d},
aTk:function aTk(d){this.a=d},
aTl:function aTl(d){this.a=d},
aTm:function aTm(d){this.a=d},
aTn:function aTn(d){this.a=d},
aTo:function aTo(d){this.a=d},
aTp:function aTp(d){this.a=d},
aTq:function aTq(d){this.a=d},
aTr:function aTr(d){this.a=d},
aTs:function aTs(d){this.a=d},
NW:function NW(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vh:function Vh(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ft$=g
_.cS$=h
_.c=_.a=null},
bdn:function bdn(d,e){this.a=d
this.b=e},
bdl:function bdl(d){this.a=d},
bdm:function bdm(d,e){this.a=d
this.b=e},
bdk:function bdk(){},
bdo:function bdo(d){this.a=d},
buP(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pE(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aJ0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tg:u
else w=g
v=f==null?A.awn(!1,u,0,u,!1,D.vQ):f
w=new A.ea(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.awn(!1,u,0,u,!1,D.vQ):d,j,a0,i,s,!1,p)
w.aql(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bRu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bAj(d.ay,e.ay,f)
v=A.bAj(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.ko(d.cy,e.cy,f,A.ZL(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r7(d.w,e.w,f)
p=A.ko(d.a,e.a,f,A.c0m(),x.cw)
p.toString
o=B.bE5(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aJ0(v,m,w,r,e.z,s,new A.yf(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NX(n),!1,u,o,!0,e.cx,p)},
awn(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aE(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
else w=e
return new A.a06(h,w,g,i,f,!1)},
bAj(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r7(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bBH(t,A.ko(v.d,u.d,f,A.ZL(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r7(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.awn(!1,s,v,u,e.a,new A.Ks(!1,r,w.c,!0))},
bNB(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r7(d.d,e.d,f)
if(w==null)w=v==null?B.aE(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
return new A.mv(e.a,e.b,w,v)},
c3G(d){return!0},
bwT(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jZ)return A.bxD(w.a,A.but(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.di:w},
bZ_(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jZ)w=A.bxD(v.a,A.but(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.di}return A.ayx(w,40)},
bGA(d,e,f,g,h){var w,v=A.bwT(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jZ)w=A.bxD(u.a,A.but(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.di}u=A.ayx(w,40)
return new A.Mx(v,h==null?4:h,u)},
c3E(d,e){return!0},
c09(d,e){return Math.abs(d.a-e.a)},
c1n(d,e){var w=J.d_(e,new A.bqm(d),x.bY)
w=B.P(w,w.$ti.i("aw.E"))
return w},
c1j(d,e){return-1/0},
c1i(d,e){return d.a[e].b},
bHM(d){var w=J.d_(d,new A.bqj(),x.fT)
w=B.P(w,w.$ti.i("aw.E"))
return w},
bHL(d){return A.ayx(D.di,15)},
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
aJ1:function aJ1(){},
NX:function NX(d){this.a=d},
a06:function a06(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ks:function Ks(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yf:function yf(d,e,f){this.a=d
this.b=e
this.c=f},
aIN:function aIN(d,e){this.a=d
this.b=e},
a4t:function a4t(){},
Eo:function Eo(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bqm:function bqm(d){this.a=d},
bql:function bql(d){this.a=d},
a6k:function a6k(){},
bqj:function bqj(){},
mT:function mT(){},
q8:function q8(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rm:function rm(d,e){this.a=d
this.b=e},
ti:function ti(d,e){this.a=d
this.b=e},
Gb:function Gb(d){this.a=d},
NY:function NY(d){this.a=d},
z_:function z_(d,e){this.a=d
this.b=e},
agr:function agr(){},
ags:function ags(){},
agF:function agF(){},
ajI:function ajI(){},
ajL:function ajL(){},
alo:function alo(){},
alp:function alp(){},
alq:function alq(){},
als:function als(){},
alt:function alt(){},
alu:function alu(){},
alv:function alv(){},
apO:function apO(){},
arp:function arp(){},
aJ2:function aJ2(d){this.a=d},
aJ3:function aJ3(){},
aJ4:function aJ4(){},
z0:function z0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alr:function alr(){},
aJ5:function aJ5(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aJ8:function aJ8(){},
aJ6:function aJ6(d,e,f){this.a=d
this.b=e
this.c=f},
aJ7:function aJ7(d,e,f){this.a=d
this.b=e
this.c=f},
aJ9:function aJ9(){},
vf:function vf(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6j:function a6j(d,e,f){this.d=d
this.e=e
this.a=f},
aaq:function aaq(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ah=_.an=$
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
btA(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.awq(),m.i("aa<1,L>")).km(0,new A.awr()),k=e-l,j=new A.awu(k,d,n)
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
new B.iM(o,m.i("iM<1>")).au(0,new A.aws(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iM(o,m.i("iM<1>")).au(0,new A.awt(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
awq:function awq(){},
awr:function awr(){},
awu:function awu(d,e,f){this.a=d
this.b=e
this.c=f},
awv:function awv(d,e,f){this.a=d
this.b=e
this.c=f},
aws:function aws(d,e,f){this.a=d
this.b=e
this.c=f},
awt:function awt(d,e,f){this.a=d
this.b=e
this.c=f},
but(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iM(w,B.ac(w).i("iM<1>")).au(0,new A.aG9(v,d))
else throw B.e(B.bH('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aG9:function aG9(d,e){this.a=d
this.b=e},
azG(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,L>")
v=B.P(new B.aa(e,new A.azH(),w),w.i("aw.E"))
return A.c1b(d,new A.a0M(v,x.cX))}else return d},
azH:function azH(){},
bVm(d,e){var w=!0
if(d!==C.fr)if(!(d===C.ap&&e===C.w))w=d===C.ih&&e===C.aX
if(w)return D.DQ
else{w=!0
if(d!==C.ig)if(!(d===C.ih&&e===C.w))w=d===C.ap&&e===C.aX
if(w)return D.DR
else return D.a9m}},
N2:function N2(d,e){this.a=d
this.b=e},
a0C:function a0C(d,e){this.a=d
this.b=e},
z3:function z3(d,e){this.a=d
this.$ti=e},
alC:function alC(){},
c1b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cF($.an().r)
for(w=B.b([],x.C),v=new B.NQ(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.U(B.ft('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NP(v,s)
v.CV()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CV()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.JR(d.aS3(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.ih(m)}p+=n
o=!o}}return l},
a0M:function a0M(d,e){this.a=d
this.b=0
this.$ti=e},
b0y:function b0y(){},
buh(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fH))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bNE(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gej(v)===0){v=d.a.a
if(v.gej(v)===0){v=d.b.a
if(v.gej(v)===0){v=d.c.a
v=v.gej(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ayx(d,e){var w=1-e/100
return B.aE(d.gfG(d),C.d.b0(d.gNw()*w),C.d.b0(d.gFR()*w),C.d.b0(d.gK0()*w))},
bBF(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bui(d){var w=d.a,v=w?A.aY0(d.b):0,u=w?A.aY0(d.c):0,t=w?A.aY0(d.d):0
return new B.ai(v,u,t,w?A.aY0(d.e):0)},
bSJ(d){var w
if(d.c===0){d.seS(null)
w=B.c0(d.r)
d.r=B.aE(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bva(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mK(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seS(null)}},
aY0(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ko(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kO(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kO(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c2u(d,e,f){return C.d.b0(d+(e-d)*f)},
bxD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kO(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.Z(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gae(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a65.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.m:C.ag
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.co(t.x,C.m,s,18),C.aR],w))
v.push(B.aA(new B.dR(t.c,!1,s),1))
v=B.al(v,C.A,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.j(t.d,1,C.ah,s,B.bF(u==null?C.h:u,22,C.P),s,s,s)],w)
return B.bw(r,B.ad(w,C.A,C.i2,C.i),q,s,C.ae,s,3)}}
A.uF.prototype={
Ln(d){return this.aS6(d)},
aS6(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ln=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ew("finance_summary",B.a4(["p_from",E.r1(d.a),"p_to",E.r1(d.b)],s,r),r),$async$Ln)
case 3:q=f
if(q==null){u=D.aoG
w=1
break}if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.ap7
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ln,v)},
Lm(d){return this.aS5(d)},
aS5(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lm=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ew("finance_kpis",B.a4(["p_from",E.r1(d.a),"p_to",E.r1(d.b)],s,r),r),$async$Lm)
case 3:q=f
if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.aop
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lm,v)},
pz(d){return this.aq3(d)},
aq3(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hf("sevdesk-sync",B.a4(["from",E.r1(d.a),"to",E.r1(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a2(B.fz(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pz,v)},
Li(d){return this.aRW(d)},
aRW(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Li=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hf("finance-export-pdf",B.a4(["from",E.r1(d.a),"to",E.r1(d.b)],s,s)),$async$Li)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aG(J.a3(r,"base64"))
w=1
break}throw B.e(B.dE("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Li,v)}}
A.DM.prototype={
FL(d){return this.ajf(d)},
ajf(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ln(d),$async$FL)
case 7:q=f
o=A.aDW(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hm(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FL,v)},
FH(d){return this.aj0(d)},
aj0(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FH=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lm(d),$async$FH)
case 7:q=f
o=A.bQd(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hm(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FH,v)},
pz(d){return this.aq4(d)},
aq4(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hm(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pz,v)},
Lh(d){return this.aRV(d)},
aRV(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lh=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Li(d),$async$Lh)
case 7:q=f
o=C.iE.cL(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hm(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lh,v)},
Hm(d){if(d instanceof B.ya)return d
if(d instanceof B.lW){if(d.b==="42501")return new B.vA(d.a)
return new B.t_(d.a)}if(d instanceof B.MS)return new B.t_("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AO("Unerwarteter Fehler: "+B.i(d))},
$iaDI:1}
A.qa.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vk.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wc.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.az6.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAc.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o_.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Cm.prototype={
gbC(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o0.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yd.prototype={
GH(d){return this.aq2(0)},
aq2(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GH=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dn)
s=t.r
r=s.aJ(0,$.x9(),x.P)
p.a=null
w=3
return B.k(B.p4(new A.aDD(p,t,r),x.H),$async$GH)
case 3:t.se3(0,f)
q=t.f
if(q.ghq(q)==null){q=$.bt8()
s=s.e
s===$&&B.a()
s.cj(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GH,v)},
Lg(){return this.aRU()},
aRU(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lg=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dn)
s=t.r.aJ(0,$.x9(),x.P)
q.a=null
w=3
return B.k(B.p4(new A.aDC(q,t,s),x.H),$async$Lg)
case 3:t.se3(0,e)
r=t.f
u=r.ghq(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lg,v)}}
A.ye.prototype={
dr(d,e){var w=null,v=e.ao($.x9(),x.P),u=e.ao($.bt8(),x.aN)
return B.il(B.dH(B.b([new B.fu("Finanzen","Dashboard",new A.afB(e.ao($.bt6(),x.b).gja(),new A.aDN(this,d,e),new A.aDO(this,d,e),new A.aDP(d),new A.aDQ(d),new A.aDR(this,d,e,v),w),w),C.az,new A.amY(v,w),C.c8,D.af4,C.c8,B.dl(u,new A.aDS(),new A.aDT(),new A.aDU(),!1,!0,!1,x.d,x.l)],x.p),C.cy,w,C.J,!1),C.m,new A.aDV(e))},
Jb(d,e){return this.aKq(d,e)},
aKq(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jb=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bt6()
w=3
return B.k(e.aJ(0,s.ghN(),x.F).GH(0),$async$Jb)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghq(s)
t=d.P(x.q).f
t.bc(B.c3(null,null,null,null,null,C.q,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jb,v)},
B9(d,e){return this.aw0(d,e)},
aw0(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$B9=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bt6().ghN(),x.F).Lg(),$async$B9)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bc(D.awC)
w=1
break}t=B.pW(C.u,10)
w=4
return B.k($.bJS().tV(s,"finanzauswertung.pdf",t,null,null,null),$async$B9)
case 4:case 1:return B.o(u,v)}})
return B.p($async$B9,v)},
Ba(d,e,f){return this.aI5(d,e,f)},
aI5(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Ba=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j5(null,null,!0,null,new A.aDL(f,d),d,null,!0,!0,x.cJ),$async$Ba)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nC(e.aJ(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zo("finance_period",p,o,B.a4(["period_from",p.ed()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Ba)
case 8:if(d.e!=null)d.P(x.q).f.bc(F.uS)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ba,v)}}
A.afB.prototype={
u(d){var w=this,v=null,u=A.akL(C.m,F.hK,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akL(v,D.ab1,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akL(v,D.xE,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akL(C.ab,C.j7,C.ab,s?v:w.e,"PDF-Export")
return B.al(B.b([u,C.aR,t,C.aR,r,C.aR,q,C.aR,A.akL(C.ak,C.fK,C.ak,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.N,0,v,v)}}
A.akK.prototype={
u(d){var w,v=this,u=null,t=B.aM(12),s=B.aM(12),r=B.aM(12),q=v.w
if(q==null)q=C.ag
q=B.cV(q,1)
w=v.r
if(w==null)w=C.h
return B.GO(B.dT(!1,C.Z,!0,t,B.eM(!1,s,!0,B.b1(u,B.co(v.c,w,u,20),C.t,u,u,new B.b0(u,u,q,r,u,u,C.D),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ac,0,u,u,u,u,u,C.bA),u,v.d,u,u)}}
A.amY.prototype={
dr(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bw(w,B.ad(B.b([D.a8t,C.I,B.al(B.b([D.abS,C.aV,B.aA(B.j(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.y(C.h,16,C.P),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.v,B.l7(C.cs,B.b([new A.Iw("Monat",new A.bfB(e),w,w),new A.Iw("Jahr (YTD)",new A.bfC(e),w,w),new A.Iw("Zeitraum w\xe4hlen \u2026",new A.bfD(this,d,e),D.aa9,w)],t),C.dB,6,8)],t),C.A,C.f,C.i),w,w,C.C,w,3)},
Iy(d,e){return this.aH_(d,e)},
aH_(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Iy=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b7(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.aub(new A.bfA(),d,B.bL(B.aW(t)-5,1,1,0,0,0,0),new B.lw(s.a,s.b,x.bz),B.bL(B.aW(t)+1,1,1,0,0,0,0),C.ei),$async$Iy)
case 2:r=g
if(r!=null)e.aJ(0,$.x9().ghN(),x.V).wo(0,new E.lC(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Iy,v)}}
A.Iw.prototype={
u(d){var w=null,v=B.aM(9999),u=B.aM(9999),t=B.aM(9999),s=B.cV(C.ag,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.co(p,C.h,w,14),C.aR],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.P),w,w,w))
return B.dT(!1,C.Z,!0,v,B.eM(!1,u,!0,B.b1(w,B.al(q,C.l,C.f,C.N,0,w,w),C.t,w,w,new B.b0(w,w,s,t,w,w,C.D),w,w,w,w,C.kO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ac,0,w,w,w,w,w,C.bA)}}
A.J_.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jj(new A.blD(this)),C.c8,D.a8x,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bw(s,B.al(B.b([D.acg,C.ax,B.aA(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.r,14,C.k),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ac,s,C.C,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afz(t.a,t.b,t.c==="revenue",t.d,s),C.I],r))}q.push(B.ad(w,C.l,C.f,C.i))}return B.ad(q,C.ad,C.f,C.i)}}
A.afz.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aK:C.ac,s=B.cV(u?C.m:C.ag,1),r=B.aM(4),q=w.c
r=B.b1(C.a0,B.j(C.c.a_(q,0,1),v,v,v,B.bF(C.h,14,C.o),v,v,v),C.t,v,v,new B.b0(t,v,s,r,v,v,C.D),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ah,v,B.y(C.h,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aA(B.ad(B.b([q,B.j(t,v,v,v,B.y(C.r,12,C.k),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dC().ap(w.f)
return B.bw(v,B.al(B.b([r,C.ax,t,B.j(q,v,v,v,B.y(u?C.ak:C.h,15,C.P),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.ea,v,3)}}
A.HE.prototype={
u(d){var w=null
return B.bw(C.ab,B.al(B.b([D.acR,C.ax,B.aA(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.fE,w,C.C,w,3)}}
A.a66.prototype={
dr(d,e){return B.dl(e.ao($.bMj(),x.e),new A.aIK(),new A.aIL(),new A.aIM(),!1,!0,!1,x.X,x.l)}}
A.HZ.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.au1,C.v,B.jj(new A.bd9(v,q,100-t.w.a,w,p)),C.v,new A.ak3(u),C.az,D.au0,C.v,new A.agq(t,u),C.az,D.atW,C.v,B.bE(u,!0,u,B.mN(u,B.bw(u,new A.Tl(t,220,u),u,u,C.C,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bda(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.az,D.atQ,C.v,B.bE(u,!0,u,B.mN(u,new A.Tx(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bdb(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.az,D.atU,C.v,new A.alL(t,u),C.az,D.atR,C.v,new A.ai6(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.az,D.atY,C.v,new A.arm(t,u)],s))
return B.ad(r,C.ad,C.f,C.i)}}
A.ak3.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.r,11,C.k).ds(1.35),w,w,w)}}
A.alh.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ab:C.ak
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bdc(m,d):l
r=x.p
q=B.b([B.aA(B.j(m.c.toUpperCase(),l,l,l,B.y(C.r,10,C.o).fg(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cV(C.ab,0.8)
n=B.aM(4)
q.push(B.b1(l,B.j("Ziel "+p,l,l,l,B.y(C.ab,9,C.o),l,l,l),C.t,l,l,new B.b0(l,l,o,n,l,l,C.D),l,l,l,l,C.n8,l,l,l))}q=B.b([B.al(q,C.l,C.f,C.i,0,l,l),C.b3,B.bBE(C.e3,B.j(m.d,l,l,l,B.bF(w,22,C.o),l,l,l),C.vU)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ah,l,B.y(C.r,10,C.aH),l,l,l))
q.push(C.co)
q.push(B.al(B.b([new A.U7("Vormonat",m.r,l),C.cn,new A.U7("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.co)
q.push(B.aA(new A.XD(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mN(l,B.bw(l,B.ad(q,C.A,C.f,C.i),l,l,C.d8,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.Q,l)}}
A.U7.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aM(4)
return B.b1(r,B.j(this.c+" \u2014",r,r,r,B.y(C.r,9,C.o),r,r,r),C.t,r,r,new B.b0(C.ag,r,r,q,r,r,C.D),r,r,r,r,C.n8,r,r,r)}w=q>=0
v=w?C.ak:C.ab
u=v.fC(0.12)
t=B.cV(v,0.7)
s=B.aM(4)
return B.b1(r,B.al(B.b([B.co(w?F.a9s:D.a9r,v,r,10),F.awf,B.j(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.l,C.f,C.N,0,r,r),C.t,r,r,new B.b0(u,r,t,s,r,r,C.D),r,r,r,r,C.n8,r,r,r)}}
A.XD.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.km(j,new A.bkQ())
t=C.b.km(j,new A.bkR())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bkS(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4r(k,!1)
w=B.b([A.aJ0(k,2,A.awn(!1,C.m.fC(0.16),0,k,!0,D.vQ),C.m,0.35,k,D.DH,k,!0,!1,!0,!1,D.F6,!1,10,D.Yw,!0,C.lh,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NW(A.buP(k,k,k,D.akZ,l,D.Bv,D.DD,D.DI,w,D.af8,k,m,k,n,D.XP,D.al_,D.a8L),C.au,C.ai,k,k)}}
A.Tl.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aJq
w=C.b.fv(p,0,new A.b48())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aww(B.b([A.a08(q,q,D.AX,q,C.m,q,q,q,r.b,6),A.a08(q,q,D.AX,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c2(A.bAk(A.awp(q,q,u,q,q,A.a4r(q,!1),q,new A.yg(!0,!0,q,new A.b49(),A.ZG(),!1,q,A.atW(),A.ZG()),q,v,q,q,new A.uH(!0,new A.p5(16,q,new A.q1(!0,new A.b4a(this),46,q),!0),D.ki,D.ki,new A.p5(16,q,new A.q1(!0,new A.b4b(p),26,q),!0)))),this.d,q)},
aJH(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.Tx.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.aa(v,new A.b4W(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4X(),w))
t=C.b.fv(o,0,new A.b4Y())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aww(B.b([A.a08(q,q,q,q,C.m,q,q,q,v[s],14),A.a08(q,q,q,q,C.ak,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c2(A.bAk(A.awp(q,q,n,q,q,A.a4r(q,!1),q,D.DI,q,o,q,q,new A.uH(!0,D.ki,D.ki,D.ki,new A.p5(16,q,new A.q1(!0,new A.b4Z(p),26,q),!0)))),this.d,q)
return this.e?r:B.bw(q,r,q,q,C.C,q,3)}}
A.alL.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aJp
w=new B.aa(l,new A.bdG(),B.ac(l).i("aa<1,L>")).km(0,new A.bdH())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dC()
o=r.d
n=new B.aT(4,4)
o=B.b([B.al(B.b([new B.lA(1,C.ed,B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.y(C.r,12,C.aH),m,m,m)],v),C.A,C.f,C.i),m),C.aV,B.j(p.ap(o),m,m,m,B.bF(C.h,16,C.o),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.co,new B.D4(new B.d3(n,n,n,n),C.bE,B.Ep(C.ag,8,C.d.c1(o/w,0,1),D.AL),m)],v)
q=C.b.gae(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.ZJ(r.gbC(),q.gbC())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bw(m,B.ad(u,C.l,C.f,C.i),m,m,C.C,m,3)}}
A.ai6.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aA(new A.BR("Aktive Kunden",""+s,u),1)
w=B.aA(new A.BR("K\xe4ufe",""+t.a,u),1)
v=$.dC()
return B.bw(u,B.al(B.b([s,w,B.aA(new A.BR("\xd8-Warenkorb",v.ap(t.d),u),1),B.aA(new A.BR("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.C,u,3)}}
A.BR.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.r,10,C.o).fg(0.6),w,w,w),C.bk,B.j(this.d,w,w,w,B.bF(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.N)}}
A.arm.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bmU(),B.ac(q).i("aa<1,L>")).km(0,new A.bmV()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aT(4,4)
t=B.b([B.al(B.b([new B.lA(1,C.ed,B.j(u.b,1,C.ah,r,B.y(C.h,13,C.o),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.r,12,C.P),r,r,r),B.j($.dC().ap(t),r,r,r,B.y(C.h,13,C.o),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.b3,new B.D4(new B.d3(s,s,s,s),C.bE,B.Ep(C.ag,6,C.d.c1(t/p,0,1),D.AL),r)],o)
s=C.b.gae(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.ZJ(u.gbC(),s.gbC())
else s=!0
if(!s)t.push(C.I)
C.b.M(n,t)}return B.bw(r,B.ad(n,C.l,C.f,C.i),r,r,C.C,r,3)}}
A.wu.prototype={
u(d){var w=null
return B.bw(w,B.j(this.c,w,w,w,B.y(C.r,13,C.k),w,w,w),C.ac,w,C.C,w,3)}}
A.agq.prototype={
dr(d,e){return B.dl(e.ao($.bt7(),x.fM),new A.b2B(this,d,e),new A.b2C(),new A.b2D(),!1,!0,!1,x.h,x.l)}}
A.AW.prototype={
X(){return new A.SZ()},
aX0(){return this.d.$0()}}
A.SZ.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b7(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fe(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pj[t].a
if(v)r=""
else{r=B.bn(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b_(r,".",",")}u.m(0,s,new B.bJ(new B.cT(r,C.bG,C.aP),$.ag()))}q.e!==$&&B.b9()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c7(v,v.r,v.e,B.l(v).i("c7<2>"))
while(v.t()){w=v.d
w.R$=$.ag()
w.S$=0}this.aq()},
rf(d){var w=this.e
w===$&&B.a()
w=C.c.bm(w.h(0,d).a.a)
w=B.b_(w,".","")
w=B.jq(B.b_(w,",","."))
return w==null?0:w},
a3w(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pj[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b_(s,".",",")
t.lK(0,t.a.xP(C.aP,C.bG,s))}}this.J(new A.b2p())},
aDJ(){this.a3w(D.aoI)
this.c.P(x.q).f.bc(D.awY)},
HO(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HO=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b5(a1)
for(e=0;e<8;++e)a2.E(0,D.pj[e].a)
q=a2
t=4
w=7
return B.k($.aDw.cg().z5(B.b(["csv","txt"],x.s),C.xq,!0),$async$HO)
case 7:p=a5
a2=p
o=a2==null?null:J.JO(a2.a).c
if(o==null){w=1
break}n=C.aD.acF(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BA.cL(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.auN(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ch(k)<2)continue
j=C.c.bm(J.a3(k,0)).toLowerCase()
i=J.Ci(q,j)?j:D.ap8.h(0,j)
if(i==null)continue
d=C.c.bm(C.b.n1(J.bN3(k,1)))
d=B.b_(d,"\u20ac","")
d=B.b_(d," ","")
d=B.b_(d,".","")
h=B.b_(d,",",".")
g=B.jq(h)
if(g!=null)J.fn(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bc(D.awz)
w=1
break}r.a3w(m)
r.c.P(x.q).f.bc(B.c3(null,null,null,null,null,C.q,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HO,v)},
HZ(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HZ=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b2q(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZs("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ed(),0,10),"p_cash_and_bank",q.rf("cash_and_bank"),"p_receivables",q.rf("receivables"),"p_inventory_value",q.rf("inventory_value"),"p_other_current_assets",q.rf("other_current_assets"),"p_fixed_assets",q.rf("fixed_assets"),"p_current_liabilities",q.rf("current_liabilities"),"p_long_term_liabilities",q.rf("long_term_liabilities"),"p_equity",q.rf("equity")],x.N,x.aU))
w=7
return B.k(n,$async$HZ)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aX0()
o=q.c
o.toString
B.bd(o,!1).f0()
q.c.P(x.q).f.bc(D.awD)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bc(B.c3(null,null,null,null,null,C.q,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b2r(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HZ,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bF(C.h,18,C.o),r,r,r),p=s.f?r:new A.b2t(s,d),o=s.d
o===$&&B.a()
p=B.hp(D.abU,B.j("Stichtag: "+C.c.a_(o.ed(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aA(B.hp(D.acZ,D.aCJ,o?r:s.gaCM(),r),1)
v=x.p
w=B.b([p,C.I,B.al(B.b([w,C.aV,B.aA(B.hp(D.acP,D.aCw,o?r:s.gaDI(),r),1)],v),C.l,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pj[u]
o=s.e
o===$&&B.a()
C.b.M(w,B.b([B.f0(r,C.aT,!1,r,!0,C.q,r,B.fc(),o.h(0,p.a),r,r,r,r,r,2,new B.ce(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aY,r,r,r,r,C.ij,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a2,r,r,r,r),C.I],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.r,11,C.k),r,r,r))
p=B.c2(B.f8(B.ad(w,C.ad,C.f,C.N),r,C.J),r,380)
o=s.f
w=B.dJ(C.cU,r,r,o?r:new A.b2u(d),r,r)
o=o?r:s.gaDs()
t=B.dF(C.m,C.h,r,r,r,r,r)
return B.ls(B.b([w,B.dS(s.f?F.Z2:C.er,o,t)],v),C.n,p,q)}}
A.bc.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.ZJ(this.gbC(),e.gbC())
else w=!0
return w},
gv(d){return(B.eA(B.H(this))^B.bIg(this.gbC()))>>>0},
j(d){B.bBA()
return B.H(this).j(0)}}
A.Kt.prototype={
X(){return new A.T_(B.A(x.S,x.I),new A.awz(B.A(x.x,x.T)),null,null)}}
A.T_.prototype={
u(d){var w,v=this,u=v.a1x(),t=v.CW
t.toString
t=v.a1y(t.av(0,v.ghF().gp(0)))
w=v.a1y(u)
v.a.toString
return new A.Ko(new A.a07(t,w,null),u,null)},
a1y(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aww(s.c,s.d,!1,r,s.a))}return d.aOX(w)},
a1x(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Um(t.ch)
if(r)s=w.a
r=t.y
t=t.aPS(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOY(A.btB(!1,!0,!0,v.d,v.c,u.garA(),v.f,v.e))}return t},
arB(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf6()||e==null||e.a==null){w=v.cy
v.J(w.gaOm(w))
return}v.J(new A.b2G(v,e))},
nQ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1x(),new A.b2H(w)))}}
A.nJ.prototype={
UW(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.awp(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPS(d,e){return this.UW(null,null,d,e)},
aOY(d){return this.UW(null,d,null,null)},
aOX(d){return this.UW(d,null,null,null)},
WU(d,e,f){var w,v,u,t=A.ko(d.ch,e.ch,f,A.c0r(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bBI(d.d,e.d,f),q=A.bDC(d.e,e.e,f),p=A.bBG(d.c,e.c,f),o=e.a
o=A.a4r(B.a0p(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.awp(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bBC(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbC(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.awo.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fB.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.awx(),B.ac(v).i("aa<1,L>")).km(0,new A.awy())
v=v.length
return w+(v-1)*this.d},
gbC(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ig.prototype={
gbC(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mu.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a04.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a09.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ad3.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0a.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CD.prototype={
gbC(){return[this.a,this.b,C.cT,C.w,null]}}
A.Ku.prototype={}
A.a0b.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xp.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WU(v,w,d)}}
A.agm.prototype={}
A.agt.prototype={}
A.agu.prototype={}
A.agw.prototype={}
A.agx.prototype={}
A.agy.prototype={}
A.agz.prototype={}
A.agA.prototype={}
A.agB.prototype={}
A.awz.prototype={
Um(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ui(0,0,!1)
v=new A.z3(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ui(t,u,!0)}w=null
try{w=C.b.qe(d,new A.awA())}catch(s){return new A.ui(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.agv.prototype={}
A.awB.prototype={
i6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_D(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abH(t,A.btA(w,t.a),u)
l.y=u
l.aRd(e,u,f)
l.alb(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRm(d,e,m,t,r,s,n,o,f)}}},
abH(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dE("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iM(p,B.ac(p).i("iM<1>")).au(0,new A.awC(t,q,r,s))
w.push(new A.a58(q))}return w},
aRd(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aT(m,m)
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
a4=B.Pw(h,Math.min(b3.dE(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dE(Math.min(t,a2),b5,b8)
a4=B.Pw(h,a5,g,Math.max(b3.dE(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seS(null)
a6=b3.f.eo()
u.drawRRect(B.mp(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dE(f,b5,b8)
e=a8.b
b0=b3.dE(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aY(u.save())
u.clipRect(B.dN(b1),$.oW()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mp(a4),a6)
a6.delete()
u.restore()
b3.aRk(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gej(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cF($.an().r)
n=new B.hb(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.ih(k)
v.ha(A.azG(b2,o.r),b3.r)}}}},
aRm(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AD(a5,a5,a5,a5,B.da(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lp().ZD(a8,a7.b),a7.a),C.cT,C.w,a5,b6.c,C.bv)
w.afp(b1.f)
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
m=v+4+(o.gcZ(0)+o.gd0(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aF6)j=v===D.ZJ&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZE(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aT(s,s)
e=B.Fy(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lp().Ka(new B.F(v,t),d).b
s=$.lp()
q=w.b
p=q.c
q=q.a.c
a0=s.Ka(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahF()
a1=b1.Q
if(!a1.k(0,C.F)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vz(d,new A.awD(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aRk(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gej(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dE(w,j,k)
u=e.a
t=n.dE(u,j,k)
w=u<w
u=w?new B.aT(i.z,i.Q):C.a1
s=w?new B.aT(i.x,i.y):C.a1
r=w?C.a1:new B.aT(i.e,i.f)
w=w?C.a1:new B.aT(i.r,i.w)
q=B.Pw(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dE(v,j,k),i.b)
r=n.dE(t,j,k)
v=t<v
t=v?C.a1:new B.aT(i.z,i.Q)
p=v?C.a1:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a1
q=B.Pw(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a1)}else q=B.bvv(w,n.dE(v,j,k),u,n.dE(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
We(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abH(b2,A.btA(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0b(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.r(n,t))}}return null}}
A.a58.prototype={}
A.a07.prototype={
bn(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcO(),t=new A.awB()
t.a0P()
$.an()
w=B.aX()
w.b=C.bf
t.f=w
w=B.aX()
w.b=C.b0
t.r=w
w=B.aX()
w.b=C.bf
w.r=C.n.gp(0)
t.w=w
w=B.aX()
w.b=C.b0
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aad(this.d,v,u,t,d,C.bo,new B.bq(),B.aJ(x.v))
t.bk()
t.Yz(v.cy)
t.aey()
return t},
by(d,e){e.sik(0,this.d)
e.sYk(this.e)
e.scO(B.bv(d,null,x.w).w.gcO())
e.B=d
e.bf()}}
A.aad.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYk(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
w.a0n(d.cy)
w.bf()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bf()},
aN(d,e){var w,v,u=this,t=d.gdF(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i6(w,new A.a0C(t,v),new A.vw(u.aC,u.i0,u.cV,x.Q))
s.restore()},
Zx(d){var w=this,v=w.gC(0)
return new A.Ku(w.fV.We(d,v,new A.vw(w.aC,w.i0,w.cV,x.Q)))}}
A.a_Y.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CC.prototype={
K(){return"AxisSide."+this.b}}
A.th.prototype={}
A.q1.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abD.prototype={
gbC(){return[!1,0,0,0]}}
A.p5.prototype={
gbC(){return[this.b,this.a,this.c,!0]}}
A.uH.prototype={
gbC(){var w=this
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
A.yg.prototype={
gbC(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pr.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad5.prototype={
gbC(){return[this.a,this.b]}}
A.PA.prototype={
gbC(){return[this.a,this.b]}}
A.mO.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nf.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kI.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l6.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5j.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ads.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mn.prototype={
gbC(){return[this.a,this.b,!0]}}
A.uG.prototype={}
A.Mx.prototype={
ad5(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iP(f,this.b,w)},
gbC(){return[this.a,this.b,this.c,0]}}
A.agh.prototype={}
A.agl.prototype={}
A.ajt.prototype={}
A.ajJ.prototype={}
A.ajK.prototype={}
A.ajM.prototype={}
A.ajN.prototype={}
A.akA.prototype={}
A.akz.prototype={}
A.akB.prototype={}
A.ao3.prototype={}
A.apP.prototype={}
A.apQ.prototype={}
A.arq.prototype={}
A.as2.prototype={}
A.as1.prototype={}
A.as3.prototype={}
A.awe.prototype={
Mj(d,e,f,g,h,i){return new B.ia(this.aV2(d,e,f,g,h,i),x.g4)},
aV1(d,e,f,g){return this.Mj(d,e,f,!0,g,!0)},
aV2(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mj(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lp().aiN(s,u,v,w)
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
A.Kn.prototype={
a0P(){var w,v=this
$.an()
w=B.aX()
w.b=C.b0
v.a=w
w=B.aX()
w.b=C.bf
v.b=w
w=B.aX()
w.b=C.bf
v.e=w
w=B.aX()
w.b=C.b0
v.c=w
v.d=B.aX()},
i6(d,e,f){var w=this
w.a_E(d,e,f)
w.aR9(e,f)
w.aRj(e,f)
w.aRi(e,f)},
aRi(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lp().Op(w.a,a1.r-a1.f)
u=$.bsK().Mj(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fb(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kW(n,m)
if(j!=null){p.r=C.B.gp(0)
p.seS(j.mK(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seS(a0)}k=l.c
p.c=k
if(k===0){p.seS(a0)
k=B.c0(p.r)
p.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Do(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lp().Op(w.b,a1.y-a1.x)
u=$.bsK().Mj(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dE(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kW(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seS(k.mK(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seS(a0)}p=f.c
q.c=p
if(p===0){q.seS(a0)
p=B.c0(q.r)
q.r=B.aE(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Do(n,m,d.a,f.d)}},
aR9(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hb(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRj(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.kW(new B.r(n.fb(t.a,m,e),0),new B.r(n.fb(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.B.gp(0)
r.seS(p.mK(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seS(null)}o=n.e.eo()
w.drawRect(B.dN(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.kW(new B.r(0,n.dE(t.a,m,e)),new B.r(w,n.dE(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.B.gp(0)
v.seS(q.mK(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seS(null)}o=n.e.eo()
j.drawRect(B.dN(s),o)
o.delete()}},
aRh(d,e,f){var w,v
this.a_E(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad6(d,e,f,w)
if(v.b.length!==0)this.aRo(d,e,f,w)},
ad6(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=f.dE(o,a1,a0)
m=new B.r(0,n)
o=f.dE(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kW(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seS(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.c0(n.r)
n.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Do(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=C.d.am(o,n.gbS(n).eE(0,2))
J.aY(r.save())
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
h=n.gdq(n).eE(0,2)
o=C.d.am(o,n.gbS(n).eE(0,2))
k=f.d
k===$&&B.a()
s.ad7(0,n,new B.r(h,o),k)}}},
aRo(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fb(o,a3,a2)
m=new B.r(n,0)
o=d.fb(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kW(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seS(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.c0(n.r)
n.r=B.aE(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Do(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=n.gbS(n).eE(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.aY(r.save())
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
h=n.gdq(n).eE(0,2)
g=n.gbS(n).ac(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.ad7(0,n,new B.r(o,k),j)}}},
fb(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dE(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZE(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Ko.prototype={
gakw(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakx(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gaky(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gaku(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akS(d){var w,v=this,u=null,t=v.d,s=A.bui(t.d),r=t.a
r=r.a&&A.bNE(r.b)?r.b:u
w=B.b([B.b1(u,v.c,C.t,u,u,new B.b0(u,u,r,u,u,u,C.D),u,u,u,s,u,u,u,u)],x.p)
s=new A.awg(w)
if(v.gakw())C.b.hw(w,s.$1(!0),new A.An(D.AS,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaky())C.b.hw(w,s.$1(!0),new A.An(D.mo,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakx())C.b.hw(w,s.$1(!0),new A.An(D.AT,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaku())C.b.hw(w,s.$1(!0),new A.An(D.dE,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
return w},
u(d){return B.jj(new A.awf(this))}}
A.R_.prototype={
X(){return new A.Xs(new B.bf(null,x.eF))}}
A.Xs.prototype={
ax0(){switch(this.a.c.a){case 0:return C.e2
case 1:return C.fy
case 2:return C.e3
case 3:return C.fz}},
axw(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
ax2(d){this.a.toString
return},
aA(){this.aO()
$.cx.x1$.push(this.ga4_())},
bd(d){this.bF(d)
$.cx.x1$.push(this.ga4_())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axw()
return B.bw4(B.b07(0,B.b1(v.ax0(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.abE.prototype={
bn(d){return A.bNu(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_Z.prototype={
hm(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.u)},
hU(d){if(this.B===C.aB)return this.xY(d)
return this.acJ(d)},
aJT(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8C(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a8B(d,B.hz())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8B(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aB?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fX(u,null)
break
case 1:q=B.fX(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8C(p)
t=Math.max(t,o.aJT(p))
m=r.aG$}return new A.bdi(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a8B(o,B.mo()),m=n.a,l=n.b
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
q=s.b-p.a8C(r==null?B.U(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e7(d,e){return this.xZ(d,e)},
aN(d,e){if(this.gC(0).gY(0))return
this.a3.sbi(0,null)
this.uU(d,e)},
l(){this.a3.sbi(0,null)
this.anO()}}
A.bdi.prototype={}
A.awh.prototype={}
A.jM.prototype={
gbC(){return[this.a,this.b]}}
A.nI.prototype={}
A.agi.prototype={}
A.agj.prototype={
aP(d){var w,v,u
this.fn(d)
w=this.ag$
for(v=x.L;w!=null;){w.aP(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.ff(0)
w=this.ag$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.agk.prototype={}
A.SX.prototype={
l(){var w,v,u
for(w=this.VN$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.An.prototype={
gow(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.e3
case 1:return C.fz
case 2:return C.e2
case 3:return C.fy}},
gaZF(){var w=this.d,v=A.bui(w.d),u=A.bBF(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ac(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ac(0,new B.ai(u.a,0,u.c,0))}},
gaht(){var w=this.d,v=A.bBF(w.a),u=A.bui(w.d)
switch(this.c.a){case 2:case 0:return u.gcZ(0)+u.gd0(0)+(v.gcZ(0)+v.gd0(0))
case 1:case 3:return u.ger()+v.ger()}},
aVM(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gow().c.d
if(o==null)o=$.lp().Op(d,f-e)
w=p.c
v=w!==D.mo
if((!v||w===D.dE)&&p.d instanceof A.nJ){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.btA(u,d)
w=new B.iM(t,B.ac(t).i("iM<1>"))
s=w.giD(w).f_(0,new A.aY3(u),x.W).fX(0)}else{r=$.bsK()
w=!v||w===D.dE
v=p.d
q=r.aV1(w?v.w:v.z,o,f,e)
v=B.oc(q,new A.aY4(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.l(v).i("t.E"))}w=B.ac(s).i("aa<1,nI>")
w=B.P(new B.aa(s,new A.aY5(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gow()
w=j.gow()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b1(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mo
u=!v
t=!u||w===D.dE
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dE?C.J:C.aB
q=B.b([],x.p)
if(w===D.AS||v)j.gow()
if(j.gow().c.a){v=!u||w===D.dE?r:j.gow().c.c
p=!u||w===D.dE?j.gow().c.c:r
o=j.gaZF()
n=!u||w===D.dE?C.aB:C.J
j.gaht()
m=j.gaht()
l=!u||w===D.dE
k=j.d
l=l?k.f:k.x
u=!u||w===D.dE?k.r:k.y
q.push(B.b1(i,A.bUM(new A.awh(),n,j.aVM(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AT||w===D.dE)j.gow()
return new B.eV(t,i,i,B.bQh(q,C.l,s,i,C.f,C.N,0,i,i,C.bU),i)}}
A.a0d.prototype={
gbC(){return[this.a,this.b]}}
A.a4q.prototype={
gbC(){return[this.a,this.b]}}
A.ME.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4s.prototype={
gab1(d){return!1},
gbC(){return[!1,!1,!1,!1]}}
A.awM.prototype={}
A.aD3.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.agE.prototype={}
A.ajG.prototype={}
A.ajH.prototype={}
A.ajO.prototype={}
A.Kx.prototype={
i6(d,e,f){}}
A.vw.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf6(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MD
if(w)return!0
return!(v instanceof A.MA)&&!(v instanceof A.Mz)&&!(v instanceof A.MB)&&!(v instanceof A.My)&&!w&&!(v instanceof A.MC)}}
A.a4w.prototype={
gdJ(){return this.a.b}}
A.a4x.prototype={
gdJ(){return this.a.b}}
A.a4y.prototype={
gdJ(){return this.a.b}}
A.Mz.prototype={}
A.MA.prototype={}
A.a4B.prototype={
gdJ(){return this.a.b}}
A.MC.prototype={}
A.MD.prototype={
gdJ(){return this.a.b}}
A.a4v.prototype={
gdJ(){return this.a.b}}
A.a4u.prototype={
gdJ(){return this.a.b}}
A.My.prototype={
gdJ(){return this.a.b}}
A.a4z.prototype={
gdJ(){return this.a.gdJ()}}
A.a4A.prototype={
gdJ(){return this.a.gdJ()}}
A.MB.prototype={
gdJ(){return this.a.gdJ()}}
A.FK.prototype={
Yz(d){this.V=d.b
this.U=d.c
this.a3=d.d},
aey(){var w=this,v=null,u=w.ah=B.bvb(v,v)
u.ay=new A.aTg(w)
u.ch=new A.aTh(w)
u.CW=new A.aTi(w)
u.cy=new A.aTj(w)
u.cx=new A.aTk(w)
u=w.aE=B.Gz(v,-1,v)
u.B=new A.aTl(w)
u.a4=new A.aTm(w)
u.V=new A.aTn(w)
u=w.bA=B.a6r(v,w.a3,v)
u.p3=new A.aTo(w)
u.p4=new A.aTp(w)
u.RG=new A.aTq(w)},
cv(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dC(d){return new B.F(d.b,d.d)},
kJ(d){return!0},
mU(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.rC(d)
w=v.aE
w===$&&B.a()
w.rC(d)
w=v.ah
w===$&&B.a()
w.rC(d)}else if(x.gJ.b(d))v.l6(new A.a4A(d))},
gMN(d){return new A.aTr(this)},
gMP(d){return new A.aTs(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdJ()
v=w!=null?u.Zx(w):null
u.V.$2(d,v)
u.a4=C.bo},
gKG(d){return this.a4},
gFk(){var w=this.an
w===$&&B.a()
return w},
aP(d){this.fn(d)
this.an=!0},
aF(d){this.an=!1
this.ff(0)},
$ijl:1}
A.NW.prototype={
X(){return new A.Vh(B.b([],x.r),B.A(x.S,x.I),new A.aJ2(B.A(x.y,x.dj)),null,null)}}
A.Vh.prototype={
u(d){var w,v=this,u=v.a41(),t=v.CW
t.toString
t=v.aaB(t.av(0,v.ghF().gp(0)))
w=v.aaB(u)
v.a.toString
return new A.Ko(new A.a6j(t,w,null),u,null)},
aaB(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,ea>")
w=B.P(new B.aa(w,new A.bdn(this,d),v),v.i("aw.E"))
return d.aPP(w,this.cy)},
a41(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Um(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQ3(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPt(new A.Eo(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayk(),t.c,t.d))}return r},
ayl(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf6())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bdl(v))
return}v.J(new A.bdm(v,e))},
nQ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a41(),new A.bdo(w)))}}
A.pE.prototype={
WU(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4r(B.a0p(d.a.b,j.b,f),j.a)
w=A.bBC(d.at,e.at,f)
v=A.bBG(d.c,e.c,f)
u=A.bBI(d.d,e.d,f)
t=A.bDC(d.e,e.e,f)
s=A.ko(d.ch,e.ch,f,A.c2w(),x.cz)
s.toString
r=A.ko(d.CW,e.CW,f,A.c2v(),x.J)
r.toString
u=A.buP(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UX(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.buP(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQ3(d,e,f,g){return this.UX(null,null,d,e,f,g,null)},
aPt(d){var w=null
return this.UX(w,d,w,w,w,w,w)},
aPP(d,e){var w=null
return this.UX(d,w,w,w,w,w,e)},
gbC(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ea.prototype={
aql(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aJ1())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fH))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b9()
n.b=q
r.toString
n.c!==$&&B.b9()
n.c=r
s.toString
n.d!==$&&B.b9()
n.d=s
t.toString
n.e!==$&&B.b9()
n.e=t}},
aco(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aJ0(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPA(d){return this.aco(d,null)},
aPC(d){return this.aco(null,d)},
gbC(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NX.prototype={
gbC(){return[this.a]}}
A.a06.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mv.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Ks.prototype={
gbC(){return[!1,this.b,this.c,!0]}}
A.yf.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.aIN.prototype={
K(){return"LabelDirection."+this.b}}
A.a4t.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Eo.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6k.prototype={
gbC(){return[4,C.hG,16,D.xn,0,120,A.c2y(),!1,!1,!1,0,C.F,A.c2x()]}}
A.mT.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q8.prototype={}
A.rm.prototype={
gbC(){return[this.a,this.b,C.cT,C.w,null]}}
A.ti.prototype={
gbC(){return[this.a,this.b]}}
A.Gb.prototype={
gbC(){return[this.a]}}
A.NY.prototype={}
A.z_.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WU(v,w,d)}}
A.agr.prototype={}
A.ags.prototype={}
A.agF.prototype={}
A.ajI.prototype={}
A.ajL.prototype={}
A.alo.prototype={}
A.alp.prototype={}
A.alq.prototype={}
A.als.prototype={}
A.alt.prototype={}
A.alu.prototype={}
A.alv.prototype={}
A.apO.prototype={}
A.arp.prototype={}
A.aJ2.prototype={
Um(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xX
u=new A.z3(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.z0(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aJ3())}catch(p){return D.xX}v=null
try{v=C.b.qe(w.a,new A.aJ4())}catch(p){return D.xX}o=v.a
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
A.alr.prototype={}
A.aJ5.prototype={
i6(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gab1(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aOt(new B.G(0,0,u,v))}d.a_D(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRf(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRb(a3,q,a4)
d.aRg(a3,q,a4)
d.ala(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dE("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vf(q,i,j,k))}}d.aRn(a3,s,a4)
if(w.gab1(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRl(a2,a3,v,f,new A.Gb(g),a4)}},
aRb(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.buh(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Z6(o,e,u,f)
s=p.aiF(o,e,t,u,f)
r=p.Z8(o,e,t,u,f,!0)
q=p.aiE(o,e,t,u,f)
p.aRe(d,s,p.Z5(o,e,t,u,f,!0),f,e)
p.aR8(d,q,r,f,e)
p.aRc(d,t,e)
p.aRa(d,t,e,f)}},
aRf(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.buh(a6.a),a9=A.buh(a7.a)
if(a8.length!==a9.length)throw B.e(B.bH("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bV.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cG<1>")
k=B.P(new B.cG(m,l),l.i("aw.E"))
j=a3.Z6(a4,a6,n,b3)
i=a3.Z7(a4,a7.aPC(k),k,b3,j)
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
m=a3.fb(h,a4,b3)
l=a3.dE(g,a4,b3)
d=a3.fb(f,a4,b3)
a0=a3.dE(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.B.gp(0)
a1.seS(u.mK(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seS(null)}$.an()
a2=new B.my(C.dp,C.bf,C.dX,C.ep,C.dL).eo()
m=B.dN(new B.G(0,0,s,r))
l=$.bV.b
if(l===$.bV)B.U(B.vc(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.ha(i,a3.r)
w.restore()}},
aRg(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zc(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fH)&&t.$2(q,e)){p=this.fb(q.a,w,f)
o=this.dE(q.b,w,f)
n.$4(q,p/v*100,e,r).ad5(s,q,new B.r(p,o))}}},
aRn(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h1(b3,new A.aJ8())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zc(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fb(j.a,w,b4)
g=b1.dE(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rl(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lm(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lm(q.$2(m,k))))
f=b1.dE(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dE(a2,w,b4)
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
b0=B.kW(a3,a5)
if(a6!=null){f.r=C.B.gp(0)
f.seS(a6.mK(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seS(null)}a4=a9.c
f.c=a4
if(a4===0){f.seS(null)
a4=B.c0(f.r)
f.r=B.aE(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Do(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rl(d.a))
f.ad5(t,j,new B.r(h,g))}}},
Z7(d,e,f,g,h){var w=this.aiG(d,e,f,g,h)
return w},
Z6(d,e,f,g){return this.Z7(d,e,f,g,null)},
aiG(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cF($.an().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fb(f.h(a3,0).a,a1,a4),a0=i.dE(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.fg(d,a0))
if(e===1)g.aB(new B.cw(d,a0))}else g.aB(new B.cw(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.u,t=1;t<e;t=o,u=j){s=i.fb(f.h(a3,t).a,a1,a4)
r=i.dE(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fb(f.h(a3,q).a,a1,a4)
q=i.dE(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fb(f.h(a3,n?o:t).a,a1,a4)
l=i.dE(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Lq(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.ih(r)}return g},
Z8(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.buN(f)
v=J.Y(g)
u=s.fb(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cw(u,t))
u=s.fb(v.h(g,0).a,d,h)
w.aB(new B.cw(u,t))
w.aB(new B.cw(s.fb(v.h(g,0).a,d,h),s.dE(v.h(g,0).b,d,h)))
w.aB(new B.pd())
return w},
aiF(d,e,f,g,h){return this.Z8(d,e,f,g,h,!1)},
Z5(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.buN(f)
v=J.Y(g)
u=t.fb(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cw(u,0))
u=t.fb(v.h(g,0).a,d,h)
w.aB(new B.cw(u,0))
w.aB(new B.cw(t.fb(v.h(g,0).a,d,h),t.dE(v.h(g,0).b,d,h)))
w.aB(new B.pd())
return w},
aiE(d,e,f,g,h){return this.Z5(d,e,f,g,h,!1)},
aRe(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fb(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dE(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fb(t.a,w,g)
s=r.r
s===$&&B.a()
A.bva(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.ha(e,r.r)},
aR8(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fb(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fb(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dE(t.b,w,g)
s=r.r
s===$&&B.a()
A.bva(s,q.b,q.c,new B.G(v,0,u,t))
d.a.ha(e,r.r)},
aRc(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NQ(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k2:C.dX
u.e=C.ep
u.r=v.gp(0)
u.seS(null)
u.c=f.x
u.r=v.gp(0)
$.lp()
u.z=new B.z8(C.aF,w.c*0.57735+0.5)
d.a.ha(B.buO(A.azG(e,f.cy),w.b),this.f)},
aRa(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k2:C.dX
q.e=C.ep
q=f.b
q===$&&B.a()
q=s.fb(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dE(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fb(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dE(u.b,r,g)
t=s.f
A.bva(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bSJ(t)
d.a.ha(A.azG(e,f.cy),s.f)},
aRl(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bHM(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dE("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lp().ZD(b4,u.b)
s=u.a
r=w.k(0,C.iJ)?new B.ki(1):w
q=new B.tf(new B.hO(s,a8,a8,C.bo,a8,a8,a8,a8,a8,a8,t),C.cT,C.w,r,a8,a8,a8,a8,C.bv,a8)
q.afp(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fb(b7.a,a9,b9)
t=a7.dE(b7.b,a9,b9)
l=p+C.hG.ger()
k=o+(w-1)*4+(C.hG.gcZ(0)+C.hG.gd0(0))
j=t-k-16
i=a7.ZE(b3,l,D.xn,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.Fy(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bHL(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lp().Ka(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lp().Ka(new B.F(t,w),0)
if(!C.F.k(0,C.F)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vz(0,new A.aJ6(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bVm(q.r,q.w)
A:{if(D.DQ===a5){a6=a3
break A}if(D.DR===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vz(0,new A.aJ7(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Zc(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fb(v[0].a,e,f)
return this.fb(v[v.length-1].a,e,f)-w},
We(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj6(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h1(t,new A.aJ9())
return t.length===0?null:t},
aj6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fH))continue
p=u.$2(e,new B.r(this.fb(q.a,d,h),this.dE(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hw(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q8(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.vf.prototype={}
A.a6j.prototype={
bn(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcO(),t=new A.aJ5()
t.a0P()
$.an()
w=B.aX()
w.b=C.b0
t.f=w
w=B.aX()
w.b=C.bf
t.r=w
w=B.aX()
w.b=C.b0
t.w=w
w=B.aX()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a_P
t.x=w
w=B.aX()
w.b=C.b0
w.r=C.B.gp(0)
t.y=w
w=B.aX()
w.b=C.bf
w.r=C.n.gp(0)
t.z=w
w=B.aX()
w.b=C.b0
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.aaq(this.d,v,u,t,d,C.bo,new B.bq(),B.aJ(x.v))
t.bk()
t.Yz(v.cx)
t.aey()
return t},
by(d,e){e.sik(0,this.d)
e.sYk(this.e)
e.scO(B.bv(d,null,x.w).w.gcO())
e.B=d
e.bf()}}
A.aaq.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYk(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
w.a0n(d.cx)
w.bf()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bf()},
aN(d,e){var w,v,u=this,t=d.gdF(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i6(w,new A.a0C(t,v),new A.vw(u.aC,u.i0,u.cV,x.o))
s.restore()},
Zx(d){var w=this,v=w.gC(0)
return new A.NY(w.fV.We(d,v,new A.vw(w.aC,w.i0,w.cV,x.o)))}}
A.N2.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a0C.prototype={
aOt(d){this.a.a.clipRect(B.dN(d),$.oW()[1],!0)
return null},
ade(d,e){d.aN(this.a,e)},
Vz(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aY(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lp()
s.Yi(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Do(d,e,f,g){var w=B.cF($.an().r)
w.aB(new B.fg(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.ha(A.azG(w,g),f)}}
A.z3.prototype={
gbC(){return[this.a]}}
A.alC.prototype={}
A.a0M.prototype={}
A.b0y.prototype={
Ka(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWm(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aT(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aT(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aT(v,v)
s=d.d
return new B.d3(w,u,t,s.a>v||s.b>v?new B.aT(v,v):s)},
aWn(d,e){var w,v
if(d==null)return D.a0_
w=d.b
v=e/2
return d.aPF(w>v?v:w)},
Op(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZp(w)},
aZp(d){if(d<1)return this.aIq(d)
return this.a7G(d)},
aIq(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7G(d*q)/q},
a7G(d){var w,v=C.e.j(C.d.a2(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a2(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a2(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a2(Math.pow(10,v))
else return C.d.a2(Math.pow(10,v))},
aiV(d){if(d>=1)return 1
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
ZD(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iP
w=e.a?u.w.c3(e):e
v=B.bS(d,C.vm)
v=v==null?null:v.ay
return v===!0?w.c3(C.m6):w},
aiN(d,e,f,g){var w=C.d.af(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["L(qa)","D(ev)","~(v,fB)","L(ea,v)","Q<~>()","L(L,qa)","bQ(L,th)","pr(L)","v(q8,q8)","HZ(o_)","HE(C,bG)","J_(o0)","vk(@)","wc(@)","ea(L)","Cm(@)","ah(L,th)","uF(dy<uF>)","DM(dy<aDI>)","L(vk)","L(wc)","wu(C,bG)","AW(z)","~()","qa(@)","~(hi,Ku?)","xp(@)","L(ig)","D(fB)","~(v,ig)","~(@)","jM(nI)","c(nI)","jM(bD<v,L>)","jM(L)","nI(jM)","~(hi,NY?)","ea(ea)","lC(Gm<lC>)","z_(@)","Q<o0>(ci<o0>)","ti(v)","uG(ev,L,ea,v)","rm(mT)","D(ea)","v(vf,vf)","L(fB)","Q<o_>(ci<o_>)","v(v,v,L)","fB(fB,fB,L)","ig(ig,ig,L)","mu(mu,mu,L)","CD?(fB,v,ig,v)","E(fB)","c(L,th)","ev(ev,ev,L)","D(L)","mO(mO,mO,L)","nf(nf,nf,L)","kI(kI,kI,L)","l6(l6,l6,L)","f(kI)","f(l6)","ea(ea,ea,L)","mv(mv,mv,L)","uG(ev,L,ea,v{size:L?})","D(ev,ea)","L(r,r)","u<ti>(ea,u<v>)","xR(z)","u<rm>(u<mT>)","E(mT)","yd(eZ<C?>)"])
A.aDE.prototype={
$1(d){var w=B.dh(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qa(J.ak(v==null?"":v),A.oS(w.h(0,"revenue_net")),A.oS(w.h(0,"expense_net")),A.oS(w.h(0,"result_net")))},
$S:z+24}
A.aDF.prototype={
$1(d){var w,v,u,t=B.dh(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.oS(t.h(0,"gross"))
u=B.bn(t.h(0,"purchases_count"))
u=u==null?null:C.d.a2(u)
if(u==null)u=0
return new A.vk(s,r,w,v,u,A.oS(t.h(0,"avg_basket")))},
$S:z+12}
A.aDG.prototype={
$1(d){var w,v=B.dh(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bn(v.h(0,"quantity"))
w=w==null?null:C.d.a2(w)
if(w==null)w=0
return new A.wc(u,t,w,A.oS(v.h(0,"gross")))},
$S:z+13}
A.aDX.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.Cm(v,u,J.ak(t==null?"expense":t),A.tW(w.h(d,"net")),A.tW(w.h(d,"tax")),A.tW(w.h(d,"gross")))},
$S:z+15}
A.bqy.prototype={
$1(d){return new A.uF(d.ao($.c_(),x.A))},
$S:z+17}
A.bqz.prototype={
$1(d){return new A.DM(d.ao($.bMk(),x.D))},
$S:z+18}
A.bsn.prototype={
$1(d){return E.aDH()},
$S:z+38}
A.bqA.prototype={
$1(d){var w=d.ao($.x9(),x.P)
return d.ao($.auA(),x.a).FL(w)},
$S:z+40}
A.bqx.prototype={
$1(d){var w=d.ao($.x9(),x.P)
return d.ao($.auA(),x.a).FH(w)},
$S:z+47}
A.bqw.prototype={
$1(d){return this.aiw(d)},
aiw(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.c_(),x.A).hl("finance_balance_kpis",t),$async$$1)
case 3:s=r.dh(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:217}
A.aDD.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.auA(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDC.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.auA(),x.a).Lh(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDV.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bt8()
if(s.e==null)B.U(B.a_(y.b))
s.gcp().cj(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDN.prototype={
$0(){return this.a.Jb(this.b,this.c)},
$S:0}
A.aDO.prototype={
$0(){return this.a.B9(this.b,this.c)},
$S:0}
A.aDP.prototype={
$0(){var w=x.z
return B.bd(this.a,!1).ec(B.ej(new A.aDM(),null,w),w)},
$S:0}
A.aDM.prototype={
$1(d){return F.CS},
$S:z+69}
A.aDQ.prototype={
$0(){return B.o5(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDR.prototype={
$0(){var w=this
return w.a.Ba(w.b,w.c,w.d)},
$S:0}
A.aDU.prototype={
$0(){return D.ara},
$S:97}
A.aDT.prototype={
$2(d,e){return new A.HE(B.i(d),null)},
$S:z+10}
A.aDS.prototype={
$1(d){return new A.J_(d,null)},
$S:z+11}
A.aDL.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.j("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.ls(B.b([B.dJ(C.cU,w,w,new A.aDJ(u),w,w),B.dS(F.uZ,new A.aDK(u),B.dF(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.v_)},
$S:53}
A.aDJ.prototype={
$0(){B.bd(this.a,!1).dg(!1)
return null},
$S:0}
A.aDK.prototype={
$0(){B.bd(this.a,!1).dg(!0)
return null},
$S:0}
A.bfB.prototype={
$0(){var w=this.a.aJ(0,$.x9().ghN(),x.V),v=E.aDH()
w.wo(0,v)
return v},
$S:0}
A.bfC.prototype={
$0(){var w=this.a.aJ(0,$.x9().ghN(),x.V),v=new B.b7(Date.now(),0,!1),u=new E.lC(B.bL(B.aW(v),1,1,0,0,0,0),v)
w.wo(0,u)
return u},
$S:0}
A.bfD.prototype={
$0(){return this.a.Iy(this.b,this.c)},
$S:0}
A.bfA.prototype={
$2(d,e){return new B.oy(B.W(d).aP0(B.W(d).ax.aPU(C.h,C.m)),e,null)},
$S:993}
A.blD.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dC(),s=A.NI(!1,C.nI,"Umsatz 7 %",t.ap(u.a),w),r=A.NI(!1,C.nI,"Umsatz 19 %",t.ap(u.b),w),q=A.NI(!0,D.aa8,"Umsatz netto",t.ap(u.c),w),p=A.NI(!1,D.aa7,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return B.a57(1.7,B.b([s,r,q,p,A.NI(!0,C.nA,"Ergebnis",n,o<0?C.ab:C.ak),A.NI(!1,C.fK,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.jL,!0)},
$S:110}
A.aIM.prototype={
$0(){return D.ar7},
$S:97}
A.aIL.prototype={
$2(d,e){var w=null
return B.bw(C.ab,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fE,w,C.C,w,3)},
$S:266}
A.aIK.prototype={
$1(d){return new A.HZ(d,null)},
$S:z+9}
A.bd9.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dC(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,L>"),e=f.i("aw.E"),d=B.P(new B.aa(g,new A.bcZ(),f),e)
i=A.jB(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.P(new B.aa(g,new A.bd_(),f),e)
d=A.jB(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.P(new B.aa(g,new A.bd0(),f),e)
k=A.jB(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.P(new B.aa(g,new A.bd1(),f),e)
w=A.jB(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.P(new B.aa(g,new A.bd2(),f),e)
v=A.jB(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.P(new B.aa(g,new A.bd3(),f),e)
u=A.jB(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.P(new B.aa(g,new A.bd4(),f),e)
t=A.jB(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.P(new B.aa(g,new A.bd5(),f),e)
h=A.jB(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.P(new B.aa(g,new A.bd6(m),f),e)
m=A.jB(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.P(new B.aa(g,new A.bd7(l),f),e)
l=A.jB(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.P(new B.aa(g,new A.bd8(j),f),e)
return B.a57(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jB(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jL,!0)},
$S:110}
A.bcZ.prototype={
$1(d){return d.b},
$S:z+0}
A.bd_.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bd0.prototype={
$1(d){return d.d},
$S:z+0}
A.bd1.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bd2.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bd3.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bd4.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bd5.prototype={
$1(d){return d.d},
$S:z+0}
A.bd6.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bd7.prototype={
$1(d){return this.a},
$S:z+0}
A.bd8.prototype={
$1(d){return this.a},
$S:z+0}
A.bda.prototype={
$0(){return A.bx4(this.b,1.45,new A.Tl(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bdb.prototype={
$0(){return A.bx4(this.b,1.6,new A.Tx(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bpG.prototype={
$1(d){var w=this,v=null,u=B.aM(16),t=x.p,s=B.b([B.al(B.b([B.aA(B.j(w.a,v,v,v,B.bF(C.h,18,C.o),v,v,v),1),B.fq(v,v,D.acf,v,v,new A.bpF(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.r,12,C.aH),v,v,v),C.I],t))
s.push(C.v)
s.push(B.c2(new B.ms(w.c,w.d,v),v,17976931348623157e292))
return B.a3H(v,C.n,new B.ae(C.ae,B.ad(s,C.A,C.f,C.N),v),v,v,v,C.fG,C.uJ,v,new B.d6(u,C.F),v)},
$S:994}
A.bpF.prototype={
$0(){return B.bd(this.a,!1).f0()},
$S:0}
A.bdc.prototype={
$0(){var w=this.a,v=B.b_(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bx4(this.b,2.4,new A.XD(w.w,w.y,w.z,null),C.b.cl(u," \xb7 "),v)
return null},
$S:0}
A.bkQ.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bkR.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bkS.prototype={
$1(d){return A.aJ0(null,1.4,null,C.ab,0.35,D.agw,D.DH,null,!1,!1,!1,!1,D.F6,!1,10,D.Yw,!0,C.lh,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b48.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b4a.prototype={
$2(d,e){var w=null
return B.j(this.a.aJH(d),w,w,w,B.y(C.r,10,C.P),w,w,w)},
$S:z+16}
A.b4b.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=this.a.length)return C.uR
return new B.ae(C.kN,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.r,9,C.P),w,w,w),w)},
$S:z+6}
A.b49.prototype={
$1(d){return D.a8J},
$S:z+7}
A.b4W.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4X.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4Y.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b4Z.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=3)return C.uR
return new B.ae(C.kN,B.j(this.a[v],w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bdG.prototype={
$1(d){return d.d},
$S:z+19}
A.bdH.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmU.prototype={
$1(d){return d.d},
$S:z+20}
A.bmV.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b2D.prototype={
$0(){return D.arf},
$S:97}
A.b2C.prototype={
$2(d,e){return new A.wu("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2B.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bw(m,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.P),m,m,m),C.I,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.r,12.5,C.k),m,m,m),C.v,B.l7(C.cs,B.b([B.hp(C.EF,D.aEv,new A.b2v(w,v),m),B.hp(D.abV,D.aDr,new A.b2w(w,v),m)],u),C.dB,8,8)],u),C.A,C.f,C.i),C.ac,m,C.C,m,3)}w=new A.b2E(d)
t=C.b.fv(n.a.e.d,0,new A.b2x())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jj(new A.b2y(new A.b2F(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.I,B.al(B.b([B.aA(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.r,11,C.k),m,m,m),1),B.na(D.ad3,D.aDM,new A.b2z(q,p),m),B.na(D.acJ,D.aDx,new A.b2A(q,p,d),m)],o),C.l,C.f,C.i,0,m,m)],o),C.ad,C.f,C.i)},
$S:253}
A.b2v.prototype={
$0(){return A.atU(this.a,this.b,null)},
$S:0}
A.b2w.prototype={
$0(){return A.atR(this.a,this.b)},
$S:0}
A.b2E.prototype={
$1(d){var w=B.bn(J.a3(this.a,d))
return w==null?null:w},
$S:995}
A.b2F.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b_(w,".",",")+" %"}return w},
$S:34}
A.b2x.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b2y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jB(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hQ,o.$1("liquidity1_pct")),m=A.jB(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hQ,o.$1("liquidity2_pct")),l=A.jB(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hQ,o.$1("liquidity3_pct"))
o=A.jB(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hQ,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b_(w,".",",")+" %"}w=A.jB(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hQ,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dC()
v=u.ap(v)
return B.a57(p,B.b([n,m,l,o,w,A.jB(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.hQ,v)],x.p),q,12,12,C.jL,!0)},
$S:110}
A.b2z.prototype={
$0(){return A.atR(this.a,this.b)},
$S:0}
A.b2A.prototype={
$0(){return A.atU(this.a,this.b,this.c)},
$S:0}
A.bpE.prototype={
$1(d){return new A.AW(this.a,new A.bpD(this.b),this.c,null)},
$S:z+22}
A.bpD.prototype={
$0(){var w=this.a,v=$.bt7()
if(w.e==null)B.U(B.a_(y.b))
w.gcp().cj(v)},
$S:0}
A.b2p.prototype={
$0(){},
$S:0}
A.b2q.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b2r.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b2t.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u1(u.b,B.bL(2024,1,1,0,0,0,0),null,r,new B.b7(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b2s(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b2s.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b2u.prototype={
$0(){return B.bd(this.a,!1).f0()},
$S:0}
A.b2G.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2H.prototype={
$1(d){return new A.xp(x.B.a(d),this.a.a.r)},
$S:z+26}
A.awx.prototype={
$1(d){return d.e},
$S:z+27}
A.awy.prototype={
$2(d,e){return d+e},
$S:45}
A.awA.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.awC.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.awD.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.ade(v.d,v.e)},
$S:0}
A.awg.prototype={
$1(d){return 0},
$S:996}
A.awf.prototype={
$2(d,e){return B.fj(C.bW,this.a.akS(e),C.q,C.bu,null)},
$S:997}
A.aY1.prototype={
$1(d){return d.a},
$S:z+31}
A.aY2.prototype={
$1(d){return d.b},
$S:z+32}
A.aY3.prototype={
$1(d){return new A.jM(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aY4.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mo||v===D.dE))t=1-t
return new A.jM(d,t*w.d)},
$S:z+34}
A.aY5.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gow(),p=d.a
r.gow()
r=$.lp()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aiV(Math.abs(s.b-s.c)))
t=""}if(C.c.hJ(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nI(d,q.c.b.$2(p,new A.th(u+t,s.e)))},
$S:z+35}
A.aTg.prototype={
$1(d){this.a.l6(new A.a4w(d))},
$S:146}
A.aTh.prototype={
$1(d){this.a.l6(new A.a4x(d))},
$S:40}
A.aTi.prototype={
$1(d){this.a.l6(new A.a4y(d))},
$S:29}
A.aTj.prototype={
$0(){this.a.l6(D.a1B)},
$S:0}
A.aTk.prototype={
$1(d){this.a.l6(new A.MA())},
$S:42}
A.aTl.prototype={
$1(d){this.a.l6(new A.a4B(d))},
$S:44}
A.aTm.prototype={
$0(){this.a.l6(D.a1C)},
$S:0}
A.aTn.prototype={
$1(d){this.a.l6(new A.MD(d))},
$S:102}
A.aTo.prototype={
$1(d){this.a.l6(new A.a4v(d))},
$S:180}
A.aTp.prototype={
$1(d){this.a.l6(new A.a4u(d))},
$S:164}
A.aTq.prototype={
$1(d){return this.a.l6(new A.My(d))},
$S:184}
A.aTr.prototype={
$1(d){return this.a.l6(new A.a4z(d))},
$S:58}
A.aTs.prototype={
$1(d){return this.a.l6(new A.MB(d))},
$S:56}
A.bdn.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPA(w==null?B.b([],x.t):w)},
$S:z+37}
A.bdl.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bdm.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h1(w,new A.bdk())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gb(w))},
$S:0}
A.bdk.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bdo.prototype={
$1(d){return new A.z_(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aJ1.prototype={
$1(d){return!d.k(0,D.fH)},
$S:z+1}
A.bqm.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bBH(t?A.bwT(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.ti(w,new A.yf(!0,A.bxE(),new A.bql(v)))},
$S:z+41}
A.bql.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bQf(A.bwT(d,e,f),w,A.bZ_(d,e,f))},
$S:z+42}
A.bqj.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iX(v,v,u==null?D.di:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rm(C.d.j(d.b),w)},
$S:z+43}
A.aJ3.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aJ4.prototype={
$1(d){return!d.k(0,D.fH)},
$S:z+1}
A.aJ8.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aJ6.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aJ7.prototype={
$0(){this.a.ade(this.b,this.c)},
$S:0}
A.aJ9.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.awq.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.awr.prototype={
$2(d,e){return d+e},
$S:45}
A.awu.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iM(v,B.ac(v).i("iM<1>")).au(0,new A.awv(w,this.a/(u+1),this.c))},
$S:0}
A.awv.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.aws.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.awt.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aG9.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:998}
A.azH.prototype={
$1(d){return d},
$S:999};(function aliases(){var w=A.Kn.prototype
w.a_D=w.i6
w.ala=w.aRh
w.alb=w.ad6
w=A.SX.prototype
w.anO=w.l
w=A.Kx.prototype
w.a_E=w.i6
w=A.FK.prototype
w.a0n=w.Yz})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c1D","bQc",72)
var q
v(q=A.SZ.prototype,"gaDI","aDJ",23)
v(q,"gaCM","HO",4)
v(q,"gaDs","HZ",4)
u(A.T_.prototype,"garA","arB",25)
t(A,"c0r",3,null,["$3"],["bNx"],49,0)
t(A,"c0s",3,null,["$3"],["bNy"],50,0)
t(A,"c0t",3,null,["$3"],["bNz"],51,0)
t(A,"c0v",4,null,["$4"],["c1g"],52,0)
w(A,"c0u","c1f",53)
s(A,"bx8","c1h",54)
t(A,"c0m",3,null,["$3"],["bQg"],55,0)
w(A,"ZG","c3F",56)
w(A,"atW","c1k",7)
t(A,"c0o",3,null,["$3"],["bR1"],57,0)
t(A,"c0q",3,null,["$3"],["bWf"],58,0)
t(A,"c0n",3,null,["$3"],["bR0"],59,0)
t(A,"c0p",3,null,["$3"],["bWe"],60,0)
w(A,"caL","bR_",61)
w(A,"caM","bWd",62)
r(A.Xs.prototype,"ga4_","ax2",30)
u(A.Vh.prototype,"gayk","ayl",36)
t(A,"c2w",3,null,["$3"],["bRu"],63,0)
t(A,"c2v",3,null,["$3"],["bNB"],64,0)
w(A,"c2z","c3G",1)
t(A,"bI8",4,null,["$5$size","$4"],["bGA",function(d,e,f,g){return A.bGA(d,e,f,g,null)}],65,0)
s(A,"bxE","c3E",66)
s(A,"bI9","c09",67)
s(A,"bIc","c1n",68)
s(A,"bIb","c1j",3)
s(A,"bIa","c1i",3)
w(A,"c2y","bHM",70)
w(A,"c2x","bHL",71)
t(A,"ZL",3,null,["$3"],["c2u"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.T,[A.a65,A.afB,A.akK,A.Iw,A.J_,A.afz,A.HE,A.HZ,A.ak3,A.alh,A.U7,A.XD,A.Tl,A.Tx,A.alL,A.ai6,A.BR,A.arm,A.wu,A.Ko,A.An])
u(B.C,[A.uF,A.DM,A.bc,A.agE,A.agu,A.agw,A.agx,A.agm,A.ajO,A.agA,A.agy,A.awM,A.arq,A.awz,A.agv,A.Kx,A.a58,A.th,A.apQ,A.apP,A.agl,A.ajN,A.ev,A.ajK,A.ajM,A.ao3,A.akB,A.as3,A.ajL,A.ajt,A.ajJ,A.awe,A.bdi,A.awh,A.agi,A.nI,A.ajG,A.ajH,A.vw,A.hi,A.alp,A.als,A.agr,A.agF,A.ags,A.ajI,A.alv,A.alt,A.arp,A.apO,A.aJ2,A.alr,A.vf,A.a0C,A.alC,A.a0M,A.b0y])
u(B.uD,[A.qa,A.vk,A.wc,A.az6,A.aAc,A.o_,A.Cm,A.o0])
u(B.nN,[A.aDE,A.aDF,A.aDG,A.aDX,A.bqy,A.bqz,A.bsn,A.bqA,A.bqx,A.bqw,A.aDM,A.aDS,A.aDL,A.aIK,A.bcZ,A.bd_,A.bd0,A.bd1,A.bd2,A.bd3,A.bd4,A.bd5,A.bd6,A.bd7,A.bd8,A.bpG,A.bkS,A.b49,A.b4W,A.b4X,A.bdG,A.bmU,A.b2B,A.b2E,A.b2F,A.bpE,A.b2H,A.awx,A.awA,A.awg,A.aY1,A.aY2,A.aY3,A.aY4,A.aY5,A.aTg,A.aTh,A.aTi,A.aTk,A.aTl,A.aTn,A.aTo,A.aTp,A.aTq,A.aTr,A.aTs,A.bdn,A.bdo,A.aJ1,A.bqm,A.bql,A.bqj,A.aJ3,A.aJ4,A.awq,A.azH])
t(A.yd,B.fx)
u(B.xE,[A.aDD,A.aDC,A.aDV,A.aDN,A.aDO,A.aDP,A.aDQ,A.aDR,A.aDU,A.aDJ,A.aDK,A.bfB,A.bfC,A.bfD,A.aIM,A.bda,A.bdb,A.bpF,A.bdc,A.b2D,A.b2v,A.b2w,A.b2z,A.b2A,A.bpD,A.b2p,A.b2q,A.b2r,A.b2t,A.b2s,A.b2u,A.b2G,A.awD,A.aTj,A.aTm,A.bdl,A.bdm,A.aJ6,A.aJ7,A.awu])
u(B.xM,[A.ye,A.amY,A.a66,A.agq])
u(B.xF,[A.aDT,A.bfA,A.blD,A.aIL,A.bd9,A.bkQ,A.bkR,A.b48,A.b4a,A.b4b,A.b4Y,A.b4Z,A.bdH,A.bmV,A.b2C,A.b2x,A.b2y,A.awy,A.awC,A.awf,A.bdk,A.aJ8,A.aJ9,A.awr,A.awv,A.aws,A.awt,A.aG9])
u(B.O,[A.AW,A.R_])
u(B.a1,[A.SZ,A.Xs])
u(B.Nf,[A.Kt,A.NW])
u(B.xh,[A.T_,A.Vh])
t(A.a0d,A.agE)
t(A.agh,A.a0d)
t(A.a_Y,A.agh)
u(A.a_Y,[A.agt,A.alq])
t(A.nJ,A.agt)
u(B.HD,[A.awo,A.ad3,A.CC,A.aD3,A.aIN,A.N2])
t(A.fB,A.agu)
t(A.ig,A.agw)
t(A.mu,A.agx)
t(A.a04,A.agm)
t(A.ME,A.ajO)
u(A.ME,[A.agz,A.alu])
t(A.a09,A.agz)
t(A.a0a,A.agA)
t(A.CD,A.agy)
u(A.awM,[A.Ku,A.NY])
t(A.ad5,A.arq)
t(A.agB,A.ad5)
t(A.a0b,A.agB)
u(B.bb,[A.xp,A.z_])
t(A.ui,A.agv)
t(A.Kn,A.Kx)
u(A.Kn,[A.awB,A.aJ5])
u(B.NS,[A.a07,A.a6j])
u(B.J,[A.FK,A.agj])
u(A.FK,[A.aad,A.aaq])
t(A.q1,A.apQ)
t(A.abD,A.apP)
t(A.p5,A.agl)
t(A.uH,A.ajN)
t(A.yg,A.ajK)
t(A.pr,A.ajM)
t(A.PA,A.ao3)
t(A.mO,A.akB)
t(A.nf,A.as3)
u(A.pr,[A.akA,A.as2])
t(A.kI,A.akA)
t(A.l6,A.as2)
t(A.a4t,A.ajL)
u(A.a4t,[A.akz,A.as1])
t(A.a5j,A.akz)
t(A.ads,A.as1)
t(A.Mn,A.ajt)
t(A.uG,A.ajJ)
t(A.Mx,A.uG)
t(A.abE,B.h1)
t(A.agk,A.agj)
t(A.SX,A.agk)
t(A.a_Z,A.SX)
t(A.jM,A.agi)
t(A.a4q,A.ajG)
t(A.a4s,A.ajH)
u(A.hi,[A.a4w,A.a4x,A.a4y,A.Mz,A.MA,A.a4B,A.MC,A.MD,A.a4v,A.a4u,A.My,A.a4z,A.a4A,A.MB])
t(A.pE,A.alq)
t(A.ea,A.alp)
t(A.NX,A.als)
t(A.a06,A.agr)
t(A.mv,A.agF)
t(A.Ks,A.ags)
t(A.yf,A.ajI)
t(A.Eo,A.alu)
t(A.a6k,A.alv)
t(A.alo,A.ev)
t(A.mT,A.alo)
t(A.q8,A.mT)
t(A.rm,A.alt)
t(A.ti,A.arp)
t(A.Gb,A.apO)
t(A.z0,A.alr)
t(A.z3,A.alC)
w(A.agm,A.bc)
w(A.agt,A.bc)
w(A.agu,A.bc)
w(A.agw,A.bc)
w(A.agx,A.bc)
w(A.agy,A.bc)
w(A.agz,A.bc)
w(A.agA,A.bc)
w(A.agB,A.bc)
w(A.agv,A.bc)
w(A.agh,A.bc)
w(A.agl,A.bc)
w(A.ajt,A.bc)
w(A.ajJ,A.bc)
w(A.ajK,A.bc)
w(A.ajM,A.bc)
w(A.ajN,A.bc)
w(A.akA,A.bc)
w(A.akz,A.bc)
w(A.akB,A.bc)
w(A.ao3,A.bc)
w(A.apP,A.bc)
w(A.apQ,A.bc)
w(A.arq,A.bc)
w(A.as2,A.bc)
w(A.as1,A.bc)
w(A.as3,A.bc)
w(A.agi,A.bc)
v(A.agj,B.aB)
w(A.agk,B.e6)
v(A.SX,B.a3q)
w(A.agE,A.bc)
w(A.ajG,A.bc)
w(A.ajH,A.bc)
w(A.ajO,A.bc)
w(A.agr,A.bc)
w(A.ags,A.bc)
w(A.agF,A.bc)
w(A.ajI,A.bc)
w(A.ajL,A.bc)
w(A.alo,A.bc)
w(A.alp,A.bc)
w(A.alq,A.bc)
w(A.als,A.bc)
w(A.alt,A.bc)
w(A.alu,A.bc)
w(A.alv,A.bc)
w(A.apO,A.bc)
w(A.arp,A.bc)
w(A.alr,A.bc)
w(A.alC,A.bc)})()
B.bn6(b.typeUniverse,JSON.parse('{"a65":{"T":[],"c":[]},"DM":{"aDI":[]},"yd":{"fx":["be<~>"],"fx.T":"be<~>"},"J_":{"T":[],"c":[]},"HE":{"T":[],"c":[]},"ye":{"bi":[],"O":[],"c":[]},"afB":{"T":[],"c":[]},"akK":{"T":[],"c":[]},"amY":{"bi":[],"O":[],"c":[]},"Iw":{"T":[],"c":[]},"afz":{"T":[],"c":[]},"HZ":{"T":[],"c":[]},"wu":{"T":[],"c":[]},"AW":{"O":[],"c":[]},"a66":{"bi":[],"O":[],"c":[]},"ak3":{"T":[],"c":[]},"alh":{"T":[],"c":[]},"U7":{"T":[],"c":[]},"XD":{"T":[],"c":[]},"Tl":{"T":[],"c":[]},"Tx":{"T":[],"c":[]},"alL":{"T":[],"c":[]},"ai6":{"T":[],"c":[]},"BR":{"T":[],"c":[]},"arm":{"T":[],"c":[]},"agq":{"bi":[],"O":[],"c":[]},"SZ":{"a1":["AW"]},"Kt":{"O":[],"c":[]},"T_":{"a1":["Kt"]},"nJ":{"bc":[]},"fB":{"bc":[]},"ig":{"bc":[]},"mu":{"bc":[]},"CD":{"bc":[]},"xp":{"bb":["nJ"],"b3":["nJ"],"b3.T":"nJ","bb.T":"nJ"},"a04":{"bc":[]},"a09":{"bc":[]},"a0a":{"bc":[]},"a0b":{"bc":[]},"ui":{"bc":[]},"a07":{"aU":[],"c":[]},"aad":{"J":[],"K":[],"jl":[],"aS":[]},"pr":{"bc":[]},"mO":{"bc":[]},"nf":{"bc":[]},"kI":{"bc":[]},"l6":{"bc":[]},"uG":{"bc":[]},"a_Y":{"bc":[]},"q1":{"bc":[]},"abD":{"bc":[]},"p5":{"bc":[]},"uH":{"bc":[]},"yg":{"bc":[]},"ad5":{"bc":[]},"PA":{"bc":[]},"a5j":{"bc":[]},"ads":{"bc":[]},"Mn":{"bc":[]},"Mx":{"bc":[]},"Ko":{"T":[],"c":[]},"R_":{"O":[],"c":[]},"Xs":{"a1":["R_"]},"jM":{"bc":[]},"abE":{"h1":[],"aU":[],"c":[]},"a_Z":{"e6":["J","hj"],"J":[],"aB":["J","hj"],"K":[],"aS":[],"aB.1":"hj","e6.1":"hj","aB.0":"J"},"An":{"T":[],"c":[]},"a0d":{"bc":[]},"a4q":{"bc":[]},"ME":{"bc":[]},"a4s":{"bc":[]},"a4w":{"hi":[]},"a4x":{"hi":[]},"a4y":{"hi":[]},"Mz":{"hi":[]},"MA":{"hi":[]},"a4B":{"hi":[]},"MC":{"hi":[]},"MD":{"hi":[]},"a4v":{"hi":[]},"a4u":{"hi":[]},"My":{"hi":[]},"a4z":{"hi":[]},"a4A":{"hi":[]},"MB":{"hi":[]},"FK":{"J":[],"K":[],"jl":[],"aS":[]},"NW":{"O":[],"c":[]},"Vh":{"a1":["NW"]},"pE":{"bc":[]},"ea":{"bc":[]},"mv":{"bc":[]},"mT":{"ev":[],"bc":[]},"q8":{"mT":[],"ev":[],"bc":[]},"rm":{"bc":[]},"ti":{"bc":[]},"Gb":{"bc":[]},"z_":{"bb":["pE"],"b3":["pE"],"b3.T":"pE","bb.T":"pE"},"NX":{"bc":[]},"a06":{"bc":[]},"Ks":{"bc":[]},"yf":{"bc":[]},"a4t":{"bc":[]},"Eo":{"bc":[]},"a6k":{"bc":[]},"z0":{"bc":[]},"a6j":{"aU":[],"c":[]},"aaq":{"J":[],"K":[],"jl":[],"aS":[]},"z3":{"bc":[]}}'))
B.bG4(b.typeUniverse,JSON.parse('{"Kn":1,"ME":1,"Kx":1,"FK":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("Cm"),e:w("be<o_>"),aN:w("be<o0>"),fM:w("be<a0<f,@>?>"),b:w("be<~>"),W:w("jM"),B:w("nJ"),dB:w("fB"),T:w("ui"),fj:w("ig"),G:w("mu"),J:w("mv"),k:w("at"),cX:w("a0M<L>"),dO:w("uq"),R:w("aj<f,@>"),v:w("hD"),bz:w("lw<b7>"),f0:w("nT"),E:w("bc"),F:w("yd"),X:w("o_"),P:w("lC"),D:w("uF"),a:w("aDI"),d:w("o0"),cw:w("ev"),L:w("hj"),m:w("du<v,E>"),cm:w("kI"),dv:w("mO"),g:w("B<nI>"),O:w("B<fB>"),Y:w("B<ig>"),C:w("B<bu3>"),U:w("B<ev>"),K:w("B<a58>"),u:w("B<ea>"),bC:w("B<vf>"),aA:w("B<u<ev>>"),r:w("B<Gb>"),s:w("B<f>"),eg:w("B<tf>"),df:w("B<q8>"),p:w("B<c>"),n:w("B<L>"),t:w("B<v>"),eF:w("bf<a1<O>>"),Z:w("mT"),cz:w("ea"),hf:w("pE"),dj:w("z0"),fT:w("rm"),c_:w("ij<oL<be<~>>>"),x:w("z3<fB>"),y:w("z3<ea>"),I:w("u<v>"),ef:w("vk"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<L,L>"),w:w("k_"),aU:w("C"),Q:w("vw<nJ>"),o:w("vw<pE>"),eo:w("pR"),gJ:w("pS"),V:w("n7<lC>"),N:w("f"),A:w("n9"),bO:w("bJ"),er:w("tf"),j:w("wc"),dw:w("q8"),bY:w("ti"),cZ:w("qa"),gc:w("kg"),es:w("l6"),bN:w("nf"),l:w("c"),q:w("wO"),g4:w("ia<L>"),cJ:w("D"),i:w("L"),z:w("@"),S:w("v"),bn:w("xp?"),f3:w("z_?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("C?"),aD:w("kg?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AL=new B.nA(C.m,B.au("nA<E>"))
D.AS=new A.CC(0,"left")
D.mo=new A.CC(1,"top")
D.AT=new A.CC(2,"right")
D.dE=new A.CC(3,"bottom")
D.auV=new A.q1(!1,A.bx8(),22,null)
D.ki=new A.p5(16,null,D.auV,!0)
D.a8K=new A.pr(C.B,null,2,null)
D.vQ=new A.Ks(!1,D.a8K,A.c2z(),!0)
D.a_G=new A.awo(3,"spaceEvenly")
D.a_P=new B.xt(6,"dstIn")
D.XO=new B.aT(3,3)
D.AX=new B.d3(D.XO,D.XO,C.a1,C.a1)
D.a0_=new B.bk(C.B,0,C.T,-1)
D.Bv=new A.a4s()
D.a1B=new A.Mz()
D.a1C=new A.MC()
D.aMj=new A.abD()
D.al9=w([],B.au("B<kI>"))
D.ala=w([],B.au("B<l6>"))
D.DD=new A.Mn(D.al9,D.ala,!0)
D.a8t=new B.dR("Zeitraum",!1,null)
D.a8x=new B.dR("Konten (SKR 03)",!1,null)
D.xn=new A.aD3(0,"center")
D.aMv=new A.yf(!0,A.bxE(),A.bI8())
D.DH=new A.yf(!1,A.bxE(),A.bI8())
D.DI=new A.yg(!1,!0,null,A.atW(),A.ZG(),!0,null,A.atW(),A.ZG())
D.aMw=new A.yg(!0,!0,null,A.atW(),A.ZG(),!0,null,A.atW(),A.ZG())
D.a3V=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3G=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a44=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3Z=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3q=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3p=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4q=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3O=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4t=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4n=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.apc=new B.du([50,D.a3V,100,D.a3G,200,D.a44,300,D.a3Z,400,D.a3q,500,D.a3p,600,D.a4q,700,D.a3O,800,D.a4t,900,D.a4n],x.m)
D.di=new B.rt(D.apc,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ahs=w([8,4],x.t)
D.a8I=new A.pr(D.di,null,0.4,D.ahs)
D.a8J=new A.pr(C.ag,null,0.5,null)
D.fH=new A.ev(0/0,0/0)
D.auX=new A.q1(!0,A.bx8(),44,null)
D.mp=new A.p5(16,null,D.auX,!0)
D.auW=new A.q1(!0,A.bx8(),30,null)
D.mq=new A.p5(16,null,D.auW,!0)
D.a8L=new A.uH(!1,D.mp,D.mq,D.mp,D.mq)
D.aMx=new A.uH(!0,D.mp,D.mq,D.mp,D.mq)
D.DQ=new A.N2(0,"left")
D.a9m=new A.N2(1,"center")
D.DR=new A.N2(2,"right")
D.a9r=new B.a8(57495,"MaterialIcons",null,!1)
D.xE=new B.a8(58927,"MaterialIcons",null,!1)
D.aa7=new B.a8(59005,"MaterialIcons",null,!0)
D.aa8=new B.a8(59007,"MaterialIcons",null,!0)
D.aa9=new B.a8(59011,"MaterialIcons",null,!1)
D.ab1=new B.a8(62589,"MaterialIcons",null,!1)
D.aam=new B.a8(61349,"MaterialIcons",null,!1)
D.abS=new B.aC(D.aam,20,C.h,null,null)
D.aat=new B.a8(61487,"MaterialIcons",null,!1)
D.abU=new B.aC(D.aat,18,null,null,null)
D.abV=new B.aC(D.xE,18,null,null,null)
D.acf=new B.aC(C.j6,null,C.h,null,null)
D.acg=new B.aC(C.l_,null,C.r,null,null)
D.acJ=new B.aC(C.nE,16,null,null,null)
D.acP=new B.aC(C.xL,16,null,null,null)
D.a9C=new B.a8(57912,"MaterialIcons",null,!1)
D.acR=new B.aC(D.a9C,null,C.ab,null,null)
D.ab_=new B.a8(62584,"MaterialIcons",null,!1)
D.acZ=new B.aC(D.ab_,16,null,null,null)
D.ad3=new B.aC(D.xE,16,null,null,null)
D.af4=new A.a66(null)
D.aMC=new A.aIN(0,"horizontal")
D.xX=new A.z0(0,0,0,0,!1)
D.F6=new A.NX(0.5)
D.BB=new A.a6k()
D.af8=new A.Eo(D.BB,A.bIc(),10,A.bI9(),!0,A.bIb(),A.bIa(),!1,null,null,null)
D.aME=new A.Eo(D.BB,A.bIc(),10,A.bI9(),!0,A.bIb(),A.bIa(),!0,null,null,null)
D.agw=w([4,3],x.t)
D.at8=new B.aH("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.asZ=new B.aH("receivables","Forderungen (kurzfristig)")
D.asO=new B.aH("inventory_value","Vorr\xe4te (Warenbestand)")
D.asM=new B.aH("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.asC=new B.aH("fixed_assets","Anlageverm\xf6gen")
D.asH=new B.aH("current_liabilities","Kurzfristige Verbindlichkeiten")
D.at5=new B.aH("long_term_liabilities","Langfristige Verbindlichkeiten")
D.asY=new B.aH("equity","Eigenkapital")
D.pj=w([D.at8,D.asZ,D.asO,D.asM,D.asC,D.asH,D.at5,D.asY],B.au("B<+(f,f)>"))
D.aMH=w([],x.g)
D.akW=w([],x.O)
D.akX=w([],x.Y)
D.akY=w([],B.au("B<mu>"))
D.akZ=w([],B.au("B<mv>"))
D.aMI=w([],x.U)
D.aMJ=w([],x.u)
D.al_=w([],x.r)
D.apO={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tr={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yB=new B.aj(D.Tr,[0,0,0,0,0,0,0,C.c6],B.au("aj<f,C>"))
D.apM={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ap6=new B.aj(D.apM,[0,0,0,0],B.au("aj<f,v>"))
D.aq2={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aot=new B.aj(D.aq2,[0,0,0,0,null,null,null,null],B.au("aj<f,v?>"))
D.aop=new B.aj(D.apO,[D.yB,D.yB,D.yB,C.c6,C.c6,C.c6,D.ap6,D.aot],x.R)
D.aoG=new B.aj(D.Tr,[0,0,0,0,0,0,0,C.cL],x.R)
D.apP={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoI=new B.aj(D.apP,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("aj<f,L>"))
D.apL={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ap7=new B.aj(D.apL,[0,0,0,0,0,0,0,C.cL],x.R)
D.aqd={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ap8=new B.aj(D.aqd,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("aj<f,f>"))
D.a4y=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4G=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3t=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3R=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a40=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4V=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3f=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3T=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a43=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4o=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.apd=new B.du([50,D.a4y,100,D.a4G,200,D.a3t,300,D.a3R,400,D.a40,500,D.a4V,600,D.a3f,700,D.a3T,800,D.a43,900,D.a4o],x.m)
D.Tg=new B.rt(D.apd,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7O=new B.ai(32,32,32,32)
D.ar7=new B.ae(D.a7O,C.bp,null)
D.a7Q=new B.ai(48,48,48,48)
D.ara=new B.ae(D.a7Q,C.bp,null)
D.arf=new B.ae(C.ae,C.bp,null)
D.alb=w([],B.au("B<mO>"))
D.alc=w([],B.au("B<nf>"))
D.XP=new A.PA(D.alb,D.alc)
D.atQ=new B.fu("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.atR=new B.fu("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.atU=new B.fu("Automaten-Business","Umsatz je Automat",null,null)
D.atW=new B.fu("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.atY=new B.fu("Top","Meistverkaufte Produkte",null,null)
D.au0=new B.fu("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.au1=new B.fu("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yw=new B.t0(C.G,C.u,0)
D.aCm=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aww=new B.dI(D.aCm,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aEj=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.awz=new B.dI(D.aEj,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aCA=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.awA=new B.dI(D.aCA,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aEd=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.awC=new B.dI(D.aEd,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aDI=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.awD=new B.dI(D.aDI,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aDF=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.awY=new B.dI(D.aDF,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aMT=new B.R(!0,C.B,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCw=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aCJ=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aDr=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aDx=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aDM=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aEv=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZJ=new A.ad3(0,"auto")
D.aF6=new A.ad3(1,"top")
D.aJp=new A.wu("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aJq=new A.wu("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cba","bMk",()=>B.iN(new A.bqy(),x.D))
w($,"cbb","auA",()=>B.iN(new A.bqz(),x.a))
w($,"cc8","x9",()=>B.bvS(new A.bsn(),x.P))
w($,"cbc","bt8",()=>C.aJ.$1$1(new A.bqA(),x.d))
w($,"cb9","bMj",()=>C.aJ.$1$1(new A.bqx(),x.X))
w($,"cb8","bt7",()=>C.aJ.$1$1(new A.bqw(),x.h))
w($,"cb7","bt6",()=>B.aYU(A.c1D(),x.F,x.b))
w($,"c4q","bsK",()=>new A.awe())
v($,"c7F","lp",()=>new A.b0y())})()};
(a=>{a["fZJmR+yJLmsYfRTTNPjw8Lbgpak="]=a.current})($__dart_deferred_initializers__);