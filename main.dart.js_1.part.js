((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Pw(d,e,f,g,h){return new A.a8Z(f,g,d,h,e,null)},
a8Z:function a8Z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vv:function vv(d){this.a=d},
cdF(d){var w
if(x.f.b(d)){w=J.J(d,"error")
if(typeof w=="string"&&C.c.ak(w).length!==0)return C.c.ak(w)}if(typeof d=="string"&&C.c.ak(d).length!==0)return C.c.ak(d)
return null},
Fa:function Fa(d){this.a=d},
c0L(d){var w=J.Q(d),v=B.b1(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.aW
w=J.cU(w,new A.aIo(),x.aI)
w=B.S(w,w.$ti.i("ax.E"))
return new A.ou(v,w)},
bzZ(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.aj(d))
return w==null?0:w},
pV:function pV(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ou:function ou(d,e){this.a=d
this.b=e},
aIo:function aIo(){},
c0M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Q(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.fa
w=x.f
v=x.N
u=x.z
t=A.aIJ(B.cn(w.a(e.h(a0,"current")),v,u))
s=A.aIJ(B.cn(w.a(e.h(a0,"prior_year")),v,u))
r=A.aIJ(B.cn(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.aW
p=J.cU(p,new A.aIp(),x.cZ)
p=B.S(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.aW
o=J.cU(o,new A.aIq(),x.ef)
o=B.S(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.aW
q=J.cU(q,new A.aIr(),x.fB)
q=B.S(q,q.$ti.i("ax.E"))
n=B.cn(w.a(e.h(a0,"customer")),v,u)
m=B.b1(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pp(n.h(0,"app_gross"))
k=B.b1(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pp(n.h(0,"avg_basket"))
u=B.cn(w.a(e.h(a0,"derived")),v,u)
v=A.pp(u.h(0,"gross_margin_pct"))
e=A.pp(u.h(0,"net_margin_pct"))
w=A.pp(u.h(0,"ebitda_margin_pct"))
j=A.pp(u.h(0,"cashflow_operating"))
i=A.bA_(u.h(0,"revenue_growth_yoy_pct"))
h=A.bA_(u.h(0,"revenue_growth_mom_pct"))
g=A.bA_(u.h(0,"result_growth_yoy_pct"))
u=A.bA_(u.h(0,"result_growth_mom_pct"))
f=B.b1(J.J(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.ov(t,s,r,p,o,q,new A.aDx(m,l,k,n),new A.aEI(v,e,w,j,i,h,g,u),f)},
pp(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.aj(d))
return w==null?0:w},
bA_(d){if(d==null)return null
if(typeof d=="number")return d
return B.f1(J.aj(d))},
qG:function qG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w4:function w4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
x1:function x1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDx:function aDx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEI:function aEI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ov:function ov(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aIp:function aIp(){},
aIq:function aIq(){},
aIr:function aIr(){},
aIJ(d){var w=J.Q(d),v=A.uL(w.h(d,"revenue_net_7")),u=A.uL(w.h(d,"revenue_net_19")),t=A.uL(w.h(d,"revenue_net")),s=A.uL(w.h(d,"expense_net")),r=A.uL(w.h(d,"result_net")),q=A.uL(w.h(d,"vat_collected")),p=A.uL(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.aW
w=J.cU(w,new A.aIK(),x._)
w=B.S(w,w.$ti.i("ax.E"))
return new A.ox(v,u,t,s,r,q,p,w)},
uL(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.f1(J.aj(d))
return w==null?0:w},
DA:function DA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ox:function ox(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIK:function aIK(){},
c0K(d){return new A.z3(d,new B.iC(x.c_),C.dW)},
bAP:function bAP(){},
bAQ:function bAQ(){},
bCO:function bCO(){},
bAR:function bAR(){},
bAN:function bAN(){},
bAO:function bAO(){},
bAM:function bAM(){},
z3:function z3(d,e,f){this.r=d
this.a=e
this.f=f},
aIn:function aIn(d,e,f){this.a=d
this.b=e
this.c=f},
aIm:function aIm(d,e,f){this.a=d
this.b=e
this.c=f},
vu:function vu(d,e){this.d=d
this.a=e},
xm:function xm(d,e){this.a=d
this.b=e},
an3:function an3(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bgy:function bgy(d){this.a=d},
bgt:function bgt(d){this.a=d},
bgs:function bgs(d,e){this.a=d
this.b=e},
bgu:function bgu(d){this.a=d},
bgr:function bgr(d){this.a=d},
bgx:function bgx(){},
bgw:function bgw(){},
bgv:function bgv(d){this.a=d},
bgq:function bgq(d){this.a=d},
an2:function an2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bgm:function bgm(d){this.a=d},
bgn:function bgn(d){this.a=d},
bgo:function bgo(d){this.a=d},
bgp:function bgp(d){this.a=d},
xg:function xg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JC:function JC(d,e,f){this.c=d
this.d=e
this.a=f},
bl2:function bl2(){},
bl3:function bl3(){},
bl4:function bl4(){},
bl5:function bl5(){},
bl6:function bl6(){},
bl7:function bl7(){},
bl8:function bl8(){},
ak2:function ak2(d,e){this.c=d
this.a=e},
xp:function xp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c0N(){return new A.z4(null)},
Xo(d,e,f,g,h){return new A.aog(e,h,g,f,d,null)},
z4:function z4(d){this.a=d},
aII:function aII(d){this.a=d},
aIz:function aIz(d,e,f){this.a=d
this.b=e
this.c=f},
aIA:function aIA(d,e,f){this.a=d
this.b=e
this.c=f},
aIB:function aIB(d){this.a=d},
aIy:function aIy(){},
aIC:function aIC(d){this.a=d},
aID:function aID(d){this.a=d},
aIx:function aIx(){},
aIE:function aIE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aIH:function aIH(){},
aIG:function aIG(){},
aIF:function aIF(){},
aIw:function aIw(d,e){this.a=d
this.b=e},
aIu:function aIu(d){this.a=d},
aIv:function aIv(d){this.a=d},
aiA:function aiA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aog:function aog(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aqJ:function aqJ(d,e){this.e=d
this.a=e},
bot:function bot(d){this.a=d},
bou:function bou(d){this.a=d},
bov:function bov(d,e,f){this.a=d
this.b=e
this.c=f},
bos:function bos(){},
K8:function K8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Kz:function Kz(d,e){this.c=d
this.a=e},
bvp:function bvp(d){this.a=d},
bvq:function bvq(d,e){this.a=d
this.b=e},
bvo:function bvo(d){this.a=d},
aiy:function aiy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
Ja:function Ja(d,e){this.c=d
this.a=e},
bHP(d,e,f,g,h){var w=null
return B.eB(w,w,!0,w,new A.bzU(h,g,e,f),d,w,!0,!0,x.H)},
jY(d,e,f,g,h,i,j,k,l,m,n){return new A.aoU(g,n,i,e,d,m,f,k,l,j,null)},
ayc(d,e){return A.cbq(d,e)},
cbq(d,e){var w=0,v=B.p(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$ayc=B.l(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.M(x.q).f
l.aF(D.aEa)
t=4
o=e.az(0,$.bx(),x.A).ax
o===$&&B.b()
n=x.z
w=7
return B.j(o.fO("finance-balance-sync",B.B(n,n)),$async$ayc)
case 7:r=g
q=B.cn(x.f.a(r.a),x.N,n)
l.Ng()
if(J.f(J.J(q,"configured"),!1)){l.aF(D.aEg)
w=1
break}if(J.f(J.J(q,"ok"),!0)){o=$.bDJ()
if(e.e==null)B.T(B.Z(y.b))
e.gck().c2(o)
l.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Bilanz aus sevDesk \xfcbernommen ("+B.e(J.J(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}else{o=J.J(q,"error")
l.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Sync-Fehler: "+B.e(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a0(k)
l.Ng()
l.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Sync fehlgeschlagen: "+B.e(p),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$ayc,v)},
ayf(d,e,f){var w=0,v=B.p(x.H)
var $async$ayf=B.l(function(g,h){if(g===1)return B.m(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.eB(null,null,!0,null,new A.bzS(f,e,e.az(0,$.bx(),x.A)),d,null,!0,!0,x.H),$async$ayf)
case 2:return B.n(null,v)}})
return B.o($async$ayf,v)},
a9_:function a9_(d){this.a=d},
aNx:function aNx(){},
aNw:function aNw(){},
aNv:function aNv(){},
Jw:function Jw(d,e){this.c=d
this.a=e},
bkD:function bkD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bks:function bks(){},
bkt:function bkt(){},
bku:function bku(){},
bkv:function bkv(){},
bkw:function bkw(){},
bkx:function bkx(){},
bky:function bky(){},
bkz:function bkz(){},
bkA:function bkA(d){this.a=d},
bkB:function bkB(d){this.a=d},
bkC:function bkC(d){this.a=d},
bkE:function bkE(d,e){this.a=d
this.b=e},
bkF:function bkF(d,e){this.a=d
this.b=e},
bzU:function bzU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bzT:function bzT(d){this.a=d},
anx:function anx(d){this.a=d},
aoU:function aoU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bkG:function bkG(d,e){this.a=d
this.b=e},
Wo:function Wo(d,e,f){this.c=d
this.d=e
this.a=f},
a_c:function a_c(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bum:function bum(){},
bun:function bun(){},
buo:function buo(d){this.a=d},
Vw:function Vw(d,e,f){this.c=d
this.d=e
this.a=f},
b9z:function b9z(){},
b9B:function b9B(d){this.a=d},
b9C:function b9C(d){this.a=d},
b9A:function b9A(){},
VN:function VN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baC:function baC(){},
baD:function baD(){},
baE:function baE(){},
baF:function baF(d){this.a=d},
apr:function apr(d,e){this.c=d
this.a=e},
blm:function blm(){},
bln:function bln(){},
alo:function alo(d,e){this.c=d
this.a=e},
D0:function D0(d,e,f){this.c=d
this.d=e
this.a=f},
avx:function avx(d,e){this.c=d
this.a=e},
bwK:function bwK(){},
bwL:function bwL(){},
xk:function xk(d,e){this.c=d
this.a=e},
ajv:function ajv(d,e){this.e=d
this.a=e},
b7t:function b7t(){},
b7s:function b7s(){},
b7r:function b7r(d,e,f){this.a=d
this.b=e
this.c=f},
b7l:function b7l(d,e){this.a=d
this.b=e},
b7m:function b7m(d,e){this.a=d
this.b=e},
b7u:function b7u(d){this.a=d},
b7v:function b7v(d){this.a=d},
b7n:function b7n(){},
b7o:function b7o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7p:function b7p(d,e){this.a=d
this.b=e},
b7q:function b7q(d,e,f){this.a=d
this.b=e
this.c=f},
bzS:function bzS(d,e,f){this.a=d
this.b=e
this.c=f},
bzR:function bzR(d){this.a=d},
BT:function BT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
V6:function V6(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b7f:function b7f(){},
b7g:function b7g(d){this.a=d},
b7h:function b7h(d){this.a=d},
b7j:function b7j(d,e){this.a=d
this.b=e},
b7i:function b7i(d,e){this.a=d
this.b=e},
b7k:function b7k(d){this.a=d},
bp:function bp(){},
bLm(d){return new A.Me(d,C.au,C.c2,null,null)},
Me:function Me(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V7:function V7(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eb$=f
_.c7$=g
_.c=_.a=null},
b7w:function b7w(d,e){this.a=d
this.b=e},
b7x:function b7x(d){this.a=d},
aAP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.apq:f,p=a0==null?16:a0,o=d==null?D.a0H:d,n=g==null,m=n?A.bEc(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yx:a3
n=n?A.bEc(r,r,r,r,r,r,r,r):g
w=j==null?D.EJ:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.N:e
return new A.od(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cy,s,w,i,n)},
aAW(d,e,f,g,h){var w=d==null?D.apr:d,v=e==null?2:e,u=g==null?C.lO:g
return new A.fW(h,f===!0,w,v,u)},
bZ1(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.aAW(A.kN(d.c,e.c,f,A.ccd(),x.fj),B.an(d.d,e.d,f),!1,A.kN(d.e,e.e,f,A.a1A(),x.S),w)},
a33(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TV
else w=h
v=m==null
u=v?8:m
t=$.lQ()
s=t.aZI(f,v?8:m)
t=t.aZJ(g,v?8:m)
v=d==null?A.bLk(r,r,r,r,r):d
return new A.iy(q,l,w,j,u,s,e,t,v,k==null?D.aps:k)},
bZ2(d,e,f){var w,v,u,t,s=B.a3(d.c,e.c,f),r=B.an(d.e,e.e,f),q=B.n_(d.f,e.f,f),p=A.kN(d.r,e.r,f,A.a1A(),x.S),o=B.c1(d.w,e.w,f),n=B.an(d.a,e.a,f),m=B.an(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.an(w.b,v.b,f)
t=B.an(w.c,v.c,f)
v=B.a3(w.d,v.d,f)
return A.a33(A.bLk(v,u,null,!1,t),p,q,o,s,n,null,A.kN(d.y,e.y,f,A.cce(),x.G),m,r)},
bZ3(d,e,f){var w,v,u=B.an(d.a,e.a,f)
u.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a3(d.c,e.c,f)
v.toString
return new A.mY(u,w,v,B.c1(d.d,e.d,f))},
bLk(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dA
else w=d
return new A.a3_(g===!0,v,u,w,f)},
bEc(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a35(4,C.eR,16,D.ye,0,120,A.ccg(),!1,!1,D.a_v,0,C.L,A.ccf())
else w=k
v=j==null?C.lh:j
return new A.a34(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
cd3(d,e,f,g){var w=null,v=B.jb(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.C,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DT(C.d.j(f.b),v)},
cd2(d){return A.aCW(D.dA,15)},
od:function od(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aAO:function aAO(d,e){this.a=d
this.b=e},
fW:function fW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aAX:function aAX(){},
aAY:function aAY(){},
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
a3_:function a3_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a34:function a34(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ag_:function ag_(d,e){this.a=d
this.b=e},
a35:function a35(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Mf:function Mf(d){this.a=d},
a36:function a36(d,e,f,g,h,i,j,k){var _=this
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
ajr:function ajr(){},
ajy:function ajy(){},
ajz:function ajz(){},
ajB:function ajB(){},
ajC:function ajC(){},
ajD:function ajD(){},
ajE:function ajE(){},
ajF:function ajF(){},
ajG:function ajG(){},
aAZ:function aAZ(d){this.a=d},
aB_:function aB_(){},
v6:function v6(d,e,f){this.a=d
this.b=e
this.c=f},
ajA:function ajA(){},
aB0:function aB0(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aB1:function aB1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB2:function aB2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a82:function a82(d){this.b=d},
a32:function a32(d,e,f){this.d=d
this.e=e
this.a=f},
ad6:function ad6(d,e,f,g,h,i,j,k){var _=this
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
cd4(d,e){var w=null
return new A.T1(e.w,B.d(e.r,w,w,w,w,w,w,w,w),w)},
aAH(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.an(w.c,v.c,f)
u.toString
return new A.py(t,e.b,new A.qw(v.a,v.b,u,B.an(w.d,v.d,f)),!0)},
bMJ(d,e,f){var w=A.aAH(d.b,e.b,f),v=A.aAH(d.d,e.d,f),u=A.aAH(d.e,e.e,f)
return new A.vx(e.a,w,A.aAH(d.c,e.c,f),v,u)},
c0P(d,e,f){var w,v
if(d.k(0,D.fZ))return e
if(e.k(0,D.fZ))return d
w=B.an(d.a,e.a,f)
w.toString
v=B.an(d.b,e.b,f)
v.toString
return new A.eI(w,v)},
bMH(d,e,f){return new A.z8(e.a,!0,B.an(d.c,e.c,f),e.d,e.e,e.f,B.an(d.r,e.r,f),e.w,e.x)},
cfu(d){return!0},
cd7(d){return D.aaN},
bMI(d,e,f,g){var w
if(d==null)w=f==null?C.J:null
else w=d
return new A.pW(w,f,g,e)},
bOH(d,e,f){var w,v=A.kN(d.a,e.a,f,A.cc9(),x.dv)
v.toString
w=A.kN(d.b,e.b,f,A.ccb(),x.bN)
w.toString
return new A.Rz(v,w)},
c1B(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a3(d.c,e.c,f)
u=B.rK(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nj(t,w,v,u)},
c6T(d,e,f){var w,v,u,t=B.an(d.a,e.a,f)
t.toString
w=B.an(d.b,e.b,f)
w.toString
v=B.a3(d.c,e.c,f)
u=B.rK(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nI(t,w,v,u)},
c1A(d,e,f){var w,v,u,t,s,r=B.an(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oq(w.b,v.b,f)
u.toString
t=B.cD(w.c,v.c,f)
t=A.c1y(B.bE4(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a3(d.a,e.a,f)
v=B.rK(d.b,e.b,f)
w=B.an(d.c,e.c,f)
w.toString
s=A.kN(d.d,e.d,f,A.a1A(),x.S)
if(u==null)u=v==null?C.J:null
return new A.l4(r,e.f,e.r,t,e.x,u,v,w,s)},
c6S(d,e,f){var w,v,u,t,s,r=B.an(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oq(w.b,v.b,f)
u.toString
t=B.cD(w.c,v.c,f)
t=A.c6Q(B.bE4(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a3(d.a,e.a,f)
v=B.rK(d.b,e.b,f)
w=B.an(d.c,e.c,f)
w.toString
s=A.kN(d.d,e.d,f,A.a1A(),x.S)
if(u==null)u=v==null?C.J:null
return new A.ly(r,e.f,e.r,t,e.x,u,v,w,s)},
c1y(d,e,f,g,h,i){return new A.a8d(f,!1,g,i,d,e)},
c1z(d){return C.d.aa(d.e,1)},
c6Q(d,e,f,g,h,i){return new A.agp(f,!1,g,i,d,e)},
c6R(d){return C.d.aa(d.e,1)},
bMD(d,e,f){var w,v=A.kN(d.a,e.a,f,A.cc8(),x.cm)
v.toString
w=A.kN(d.b,e.b,f,A.cca(),x.es)
w.toString
return new A.O9(v,w,!0)},
c0O(d,e,f){return new A.Oi(d,e==null?4:e,f)},
a2T:function a2T(){},
DS:function DS(d,e){this.a=d
this.b=e},
u_:function u_(d,e){this.r=d
this.w=e},
qw:function qw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aey:function aey(){},
py:function py(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vx:function vx(d,e,f,g,h){var _=this
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
pW:function pW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag1:function ag1(){},
Rz:function Rz(d,e){this.a=d
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
a8d:function a8d(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
agp:function agp(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
O9:function O9(d,e,f){this.a=d
this.b=e
this.c=f},
vw:function vw(){},
Oi:function Oi(d,e,f){this.a=d
this.b=e
this.c=f},
ajm:function ajm(){},
ajq:function ajq(){},
amK:function amK(){},
anb:function anb(){},
anc:function anc(){},
ane:function ane(){},
anf:function anf(){},
ao6:function ao6(){},
ao5:function ao5(){},
ao7:function ao7(){},
arU:function arU(){},
atT:function atT(){},
atU:function atU(){},
avB:function avB(){},
awl:function awl(){},
awk:function awk(){},
awm:function awm(){},
aAD:function aAD(){},
M9:function M9(){},
Ma:function Ma(d,e,f){this.c=d
this.d=e
this.a=f},
aAF:function aAF(d){this.a=d},
aAE:function aAE(d){this.a=d},
T1:function T1(d,e,f){this.c=d
this.e=e
this.a=f},
a_0:function a_0(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c5o(d,e,f){var w=B.al(f),v=w.i("ag<1,k4>")
v=B.S(new B.ag(f,new A.b1B(),v),v.i("ax.E"))
w=w.i("ag<1,c>")
w=B.S(new B.ag(f,new A.b1C(),w),w.i("ax.E"))
return new A.aez(e,d,v,w,null)},
bZ_(d,e,f){var w,v=null,u=B.aO(x.dO),t=J.a8Q(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tX(v,C.W,C.z,new B.kF(1),v,v,v,v,C.bt,v)
u=new A.a2U(f,d,e,u,t,!0,0,v,v,new B.bw(),B.aO(x.j))
u.bj()
return u},
aez:function aez(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b1B:function b1B(){},
b1C:function b1C(){},
a2U:function a2U(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.V=e
_.W=f
_.a5=g
_.Xr$=h
_.aVA$=i
_.dr$=j
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
bkM:function bkM(d,e){this.a=d
this.b=e},
aAG:function aAG(){},
k4:function k4(d,e){this.a=d
this.b=e},
oc:function oc(d,e){this.a=d
this.b=e},
ajn:function ajn(){},
ajo:function ajo(){},
ajp:function ajp(){},
V4:function V4(){},
Bf:function Bf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1D:function b1D(d){this.a=d},
b1E:function b1E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b1F:function b1F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a7l(d,e){var w=d==null?B.c7(C.J,1):d
return new A.a7k(e!==!1,w)},
a38:function a38(){},
a7k:function a7k(d,e){this.a=d
this.b=e},
Op:function Op(){},
a7m:function a7m(){},
aBb:function aBb(){},
aHD:function aHD(d,e){this.a=d
this.b=e},
ajJ:function ajJ(){},
an8:function an8(){},
an9:function an9(){},
ang:function ang(){},
Mi:function Mi(){},
wi:function wi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hE:function hE(){},
a7q:function a7q(d){this.a=d},
a7r:function a7r(d){this.a=d},
a7s:function a7s(d){this.a=d},
Ok:function Ok(){},
Ol:function Ol(){},
a7v:function a7v(d){this.a=d},
On:function On(){},
Oo:function Oo(d){this.a=d},
a7p:function a7p(d){this.a=d},
a7o:function a7o(d){this.a=d},
Oj:function Oj(d){this.a=d},
a7t:function a7t(d){this.a=d},
a7u:function a7u(d){this.a=d},
Om:function Om(d){this.a=d},
He:function He(){},
aXI:function aXI(d){this.a=d},
aXJ:function aXJ(d){this.a=d},
aXK:function aXK(d){this.a=d},
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
PJ:function PJ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
XJ:function XJ(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eb$=g
_.c7$=h
_.c=_.a=null},
bkS:function bkS(d,e){this.a=d
this.b=e},
bkQ:function bkQ(d){this.a=d},
bkR:function bkR(d,e){this.a=d
this.b=e},
bkP:function bkP(){},
bkT:function bkT(d){this.a=d},
bFu(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.N:d
return new A.q9(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aNI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TV:u
else w=g
v=f==null?A.aAN(!1,u,0,u,!1,D.wx):f
w=new A.ei(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aAN(!1,u,0,u,!1,D.wx):d,j,a0,i,s,!1,p)
w.asO(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c22(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.an(d.x,e.x,f)
m.toString
w=A.bLl(d.ay,e.ay,f)
v=A.bLl(d.ch,e.ch,f)
u=B.an(d.as,e.as,f)
u.toString
t=e.CW
s=A.kN(d.cy,e.cy,f,A.a1A(),x.S)
r=B.a3(d.r,e.r,f)
q=B.rK(d.w,e.w,f)
p=A.kN(d.a,e.a,f,A.cc7(),x.cw)
p.toString
o=B.bPe(d.db,e.db,f)
o.toString
n=B.an(d.dy.a,e.dy.a,f)
n.toString
return A.aNI(v,m,w,r,e.z,s,new A.z7(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.PK(n),!1,u,o,!0,e.cx,p)},
aAN(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aJ(C.d.aN(127.5),D.dA.v()>>>16&255,D.dA.v()>>>8&255,D.dA.v()&255):null
else w=e
return new A.a31(h,w,g,i,f,!1)},
bLl(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a3(v.a,u.a,f),s=B.rK(v.b,u.b,f),r=B.an(v.c,u.c,f)
r.toString
r=A.bMI(t,A.kN(v.d,u.d,f,A.a1A(),x.S),s,r)
s=B.a3(d.b,e.b,f)
u=B.rK(d.c,e.c,f)
v=B.an(d.e,e.e,f)
v.toString
return A.aAN(!1,s,v,u,e.a,new A.Md(!1,r,w.c,!0))},
bZ4(d,e,f){var w=B.a3(d.c,e.c,f),v=B.rK(d.d,e.d,f)
if(w==null)w=v==null?B.aJ(C.d.aN(127.5),D.dA.v()>>>16&255,D.dA.v()>>>8&255,D.dA.v()&255):null
return new A.mZ(e.a,e.b,w,v)},
cfv(d){return!0},
bHz(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jE)return A.bIq(w.a,A.bF8(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dA:w},
c9O(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jE)w=A.bIq(v.a,A.bF8(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dA}return A.aCW(w,40)},
bRP(d,e,f,g,h){var w,v=A.bHz(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jE)w=A.bIq(u.a,A.bF8(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dA}u=A.aCW(w,40)
return new A.Oi(v,h==null?4:h,u)},
cft(d,e){return!0},
cbU(d,e){return Math.abs(d.a-e.a)},
cda(d,e){var w=J.cU(e,new A.bAD(d),x.bY)
w=B.S(w,w.$ti.i("ax.E"))
return w},
cd6(d,e){return-1/0},
cd5(d,e){return d.a[e].b},
bT5(d){var w=J.cU(d,new A.bAA(),x.fT)
w=B.S(w,w.$ti.i("ax.E"))
return w},
bT4(d){return A.aCW(D.dA,15)},
q9:function q9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aNJ:function aNJ(){},
PK:function PK(d){this.a=d},
a31:function a31(d,e,f,g,h,i){var _=this
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
Md:function Md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z7:function z7(d,e,f){this.a=d
this.b=e
this.c=f},
aNy:function aNy(d,e){this.a=d
this.b=e},
a7n:function a7n(){},
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
bAD:function bAD(d){this.a=d},
bAC:function bAC(d){this.a=d},
a9c:function a9c(){},
bAA:function bAA(){},
nm:function nm(){},
qE:function qE(d,e,f,g,h,i){var _=this
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
PL:function PL(d){this.a=d},
zX:function zX(d,e){this.a=d
this.b=e},
ajw:function ajw(){},
ajx:function ajx(){},
ajL:function ajL(){},
ana:function ana(){},
and:function and(){},
ap3:function ap3(){},
ap4:function ap4(){},
ap5:function ap5(){},
ap7:function ap7(){},
ap8:function ap8(){},
ap9:function ap9(){},
apa:function apa(){},
atS:function atS(){},
avA:function avA(){},
aNK:function aNK(d){this.a=d},
aNL:function aNL(){},
aNM:function aNM(){},
zY:function zY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ap6:function ap6(){},
aNN:function aNN(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aNQ:function aNQ(){},
aNO:function aNO(d,e,f){this.a=d
this.b=e
this.c=f},
aNP:function aNP(d,e,f){this.a=d
this.b=e
this.c=f},
aNR:function aNR(){},
w0:function w0(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a9b:function a9b(d,e,f){this.d=d
this.e=e
this.a=f},
adj:function adj(d,e,f,g,h,i,j,k){var _=this
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
bEb(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bI(o.length,0,!1,x.i),m=B.al(o),l=new B.ag(o,new A.aAQ(),m.i("ag<1,G>")).jN(0,new A.aAR()),k=e-l,j=new A.aAU(k,d,n)
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
new B.j2(o,m.i("j2<1>")).aE(0,new A.aAS(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j2(o,m.i("j2<1>")).aE(0,new A.aAT(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aAQ:function aAQ(){},
aAR:function aAR(){},
aAU:function aAU(d,e,f){this.a=d
this.b=e
this.c=f},
aAV:function aAV(d,e,f){this.a=d
this.b=e
this.c=f},
aAS:function aAS(d,e,f){this.a=d
this.b=e
this.c=f},
aAT:function aAT(d,e,f){this.a=d
this.b=e
this.c=f},
bF8(d){var w,v={}
v.a=B.a([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j2(w,B.al(w).i("j2<1>")).aE(0,new A.aKV(v,d))
else throw B.h(B.bQ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aKV:function aKV(d,e){this.a=d
this.b=e},
aE8(d,e){var w,v
if(e!=null){w=B.al(e).i("ag<1,G>")
v=B.S(new B.ag(e,new A.aE9(),w),w.i("ax.E"))
return A.ccY(d,new A.a3K(v,x.cX))}else return d},
aE9:function aE9(){},
c6_(d,e){var w=!0
if(d!==C.fg)if(!(d===C.W&&e===C.z))w=d===C.iM&&e===C.b7
if(w)return D.EW
else{w=!0
if(d!==C.hJ)if(!(d===C.iM&&e===C.z))w=d===C.W&&e===C.b7
if(w)return D.EX
else return D.abz}},
OO:function OO(d,e){this.a=d
this.b=e},
a3A:function a3A(d,e){this.a=d
this.b=e},
A1:function A1(d,e){this.a=d
this.$ti=e},
aph:function aph(){},
ccY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ar(),i=x.v,h=B.a([],i),g=new B.ct(j.r,C.ao,k,k,h)
for(j=B.O3(d),w=B.a([],x.I),v=new B.O5(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.T(B.fO('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.O4(v,r)
v.DU()
p=w[r].b
p===$&&B.b()
p.a.length()
o=0
n=!0
for(;;){v.DU()
p=w[r].b
p===$&&B.b()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eu(B.a([],i),!0,s)
p=new B.Lu(new B.ct(t,p,k,new B.ask([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3K:function a3K(d,e){this.a=d
this.b=0
this.$ti=e},
b56:function b56(){},
bEX(d){var w,v,u,t=x.U,s=B.a([B.a([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.L)(d),++v){u=d[v]
if(!u.k(0,D.fZ))C.b.gah(s).push(u)
else if(C.b.gah(s).length!==0)s.push(B.a([],t))}if(C.b.gah(s).length===0)s.pop()
return s},
bZ7(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aCW(d,e){var w=1-e/100
return B.aJ(d.gfK(d),C.d.aN(d.gOM()*w),C.d.aN(d.gGR()*w),C.d.aN(d.gLb()*w))},
bMG(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.af(v,u,t,w?d.b.c.b:0)},
bEY(d){var w=d.a,v=w?A.b1A(d.b):0,u=w?A.b1A(d.c):0,t=w?A.b1A(d.d):0
return new B.af(v,u,t,w?A.b1A(d.e):0)},
c3h(d){var w
if(d.c===0){d.seY(null)
w=B.c8(d.r)
d.r=B.aJ(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gu(0)}},
bFR(d,e,f,g){var w
if(f!=null){d.r=C.J.gu(0)
d.seY(f.mT(0,g))}else{w=e==null?C.N:e
d.r=w.gu(w)
d.seY(null)}},
b1A(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kN(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kj(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kj(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ceh(d,e,f){return C.d.aN(d+(e-d)*f)},
bIq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kj(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a3(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gah(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a8Z.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aP:C.q
r=r?C.n:C.a8
w=x.p
v=B.a([],w)
C.b.H(v,B.a([B.bK(t.x,C.n,s,18),C.aS],w))
v.push(B.ak(new B.dF(t.c,!1,s),1))
v=B.a9(v,C.x,s,C.e,C.i,0,s,s)
u=t.w
w=B.a([v,C.D,B.d(t.d,s,1,C.ah,s,B.bE(u==null?C.h:u,22,C.C),s,s,s)],w)
return B.b_(r,B.a1(w,C.x,C.iv,C.i),q,s,C.aq,s,s,3)}}
A.vv.prototype={
Mx(d){return this.aVz(d)},
aVz(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$Mx=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dF("finance_summary",B.a4(["p_from",E.ow(d.a),"p_to",E.ow(d.b)],s,r),r),$async$Mx)
case 3:q=f
if(q==null){u=D.atJ
w=1
break}if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.avY
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mx,v)},
Mw(d){return this.aVy(d)},
aVy(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$Mw=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dF("finance_kpis",B.a4(["p_from",E.ow(d.a),"p_to",E.ow(d.b)],s,r),r),$async$Mw)
case 3:q=f
if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.atp
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mw,v)},
Mv(d){return this.aVx(d)},
aVx(d){var w=0,v=B.p(x.b),u,t=this,s,r,q
var $async$Mv=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.dF("finance_bookings_list",B.a4(["p_from",E.ow(d.a),"p_to",E.ow(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$Mv)
case 3:q=f
if(x.f.b(q)){u=B.cn(q,s,r)
w=1
break}u=D.atO
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mv,v)},
pN(d){return this.asw(d)},
asw(d){var w=0,v=B.p(x.S),u,t=this,s,r,q
var $async$pN=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.b()
s=x.N
w=3
return B.j(q.fO("sevdesk-sync",B.a4(["from",E.ow(d.a),"to",E.ow(d.b)],s,s)),$async$pN)
case 3:r=f.a
if(x.f.b(r)&&typeof J.J(r,"upserted")=="number"){u=C.d.X(B.fC(J.J(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$pN,v)},
Mr(d){return this.aVo(d)},
aVo(d){var w=0,v=B.p(x.N),u,t=this,s,r,q
var $async$Mr=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.b()
s=x.N
w=3
return B.j(q.fO("finance-export-pdf",B.a4(["from",E.ow(d.a),"to",E.ow(d.b)],s,s)),$async$Mr)
case 3:r=f.a
if(x.f.b(r)&&typeof J.J(r,"base64")=="string"){u=B.aL(J.J(r,"base64"))
w=1
break}throw B.h(B.e6("PDF-Export fehlgeschlagen"))
case 1:return B.n(u,v)}})
return B.o($async$Mr,v)}}
A.Fa.prototype={
GL(d){return this.alz(d)},
alz(d){var w=0,v=B.p(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GL=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mx(d),$async$GL)
case 7:q=f
o=A.aIJ(q)
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
return B.o($async$GL,v)},
GG(d){return this.ali(d)},
ali(d){var w=0,v=B.p(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GG=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mw(d),$async$GG)
case 7:q=f
o=A.c0M(q)
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
return B.o($async$GG,v)},
Gw(d){return this.al4(d)},
al4(d){var w=0,v=B.p(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gw=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mv(d),$async$Gw)
case 7:q=f
o=A.c0L(q)
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
return B.o($async$Gw,v)},
pN(d){return this.asx(d)},
asx(d){var w=0,v=B.p(x.S),u,t=2,s=[],r=this,q,p,o,n
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
Mq(d){return this.aVn(d)},
aVn(d){var w=0,v=B.p(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Mq=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Mr(d),$async$Mq)
case 7:q=f
o=C.j5.cL(q)
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
return B.o($async$Mq,v)},
BX(d){var w,v
if(d instanceof B.vt)return d
if(d instanceof B.mp){if(d.b==="42501")return new B.wm(d.a)
return new B.tE(d.a)}if(d instanceof B.OC){w=A.cdF(d.b)
v=""+d.a
return new B.tE(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.BI("Unerwarteter Fehler: "+B.e(d))},
$iaIt:1}
A.pV.prototype={
ganb(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbu(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.ou.prototype={
gbu(){return[this.a,this.b]}}
A.qG.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.w4.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.x1.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDx.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aEI.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ov.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.DA.prototype={
gbu(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ox.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.z3.prototype={
HF(d){return this.asv(0)},
asv(d){var w=0,v=B.p(x.h6),u,t=this,s,r,q,p
var $async$HF=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:p={}
t.seh(0,C.dH)
s=t.r
r=s.az(0,$.r7(),x.P)
p.a=null
w=3
return B.j(B.px(new A.aIn(p,t,r),x.H),$async$HF)
case 3:t.seh(0,f)
q=t.f
if(q.ghg(q)==null){q=$.bDL()
s=s.e
s===$&&B.b()
s.c2(q)
s.c2($.bKc())
s.c2($.bDK())}u=p.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$HF,v)},
Mp(){return this.aVm()},
aVm(){var w=0,v=B.p(x.aD),u,t=this,s,r,q
var $async$Mp=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:q={}
t.seh(0,C.dH)
s=t.r.az(0,$.r7(),x.P)
q.a=null
w=3
return B.j(B.px(new A.aIm(q,t,s),x.H),$async$Mp)
case 3:t.seh(0,e)
r=t.f
u=r.ghg(r)!=null?null:q.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mp,v)}}
A.vu.prototype={
U(){return new A.an3(D.Bw)}}
A.xm.prototype={
L(){return"_Filter."+this.b}}
A.an3.prototype={
gTg(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbp(),t=u.al($.r7(),x.P),s=u.al($.bDK(),x.e)
u=$.cI()
return B.d8(D.abo,v,B.kp(B.cY(B.a([new B.eO("Zeitraum",u.a3(t.a)+" \u2013 "+u.a3(t.b),v,v),C.K,new A.an2(w.w,w.gTg(),new A.bgt(w),new A.bgu(w),v),C.as,B.dp(s,new A.bgv(w),new A.bgw(),new A.bgx(),!1,!0,!1,x.m,x.l)],x.p),v,C.cc,v,C.F,!1),C.n,new A.bgy(w)),v,v,v)},
atV(d){var w=B.al(d).i("aZ<1>")
w=B.S(new B.aZ(d,new A.bgq(this),w),w.i("u.E"))
return w}}
A.an2.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.a([new A.xg("Alle",t===D.Bw,new A.bgm(v),u),new A.xg("Ausgaben",t===D.a_V,new A.bgn(v),u),new A.xg("Erl\xf6se",t===D.a_W,new A.bgo(v),u),new A.xg("Privat",t===D.a_X,new A.bgp(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.xg("Konto "+w+" \xd7",!0,v.f,u))
return B.jk(C.c9,t,C.d3,6,8)}}
A.xg.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aP:C.a5,s=B.aq(9999),r=B.aq(9999),q=B.aq(9999),p=B.c7(v?C.n:C.a8,1)
return B.bq(w,!0,w,B.dv(!1,C.Z,!0,s,B.dP(!1,r,!0,B.aE(w,B.d(u,w,w,w,w,B.r(C.h,13,C.C),w,w,w),C.p,w,w,new B.aB(w,w,p,q,w,w,C.B),w,w,w,w,C.fY,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.p,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.JC.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aTI
w=this.d
if(w.length===0)return D.aTJ
v=B.al(w).i("aZ<1>")
u=new B.aZ(w,new A.bl2(),v).f1(0,0,new A.bl3())
t=new B.aZ(w,new A.bl4(),v).f1(0,0,new A.bl5())
s=new B.aZ(w,new A.bl6(),v).f1(0,0,new A.bl7())
r=new B.aZ(w,new A.bl8(),v).gq(0)
v=w.length
q=$.cx()
p=q.a3(t)
o=E.bHU(u,E.bAW("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a3(s)
n=x.p
q=B.a([B.d(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.r(C.h,14,C.C),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.H(q,B.a([C.aH,B.d(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.r(C.l,12,C.j),l,l,l)],n))
if(r>0)C.b.H(q,B.a([C.aH,B.d(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.r(C.R,12,C.j),l,l,l)],n))
k=B.a([B.b_(l,B.a1(q,C.x,C.e,C.i),C.a5,l,C.w,l,l,3),C.K],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.L)(w),++m)C.b.H(k,B.a([new A.ak2(w[m],l),C.D],n))
return B.a1(k,C.ac,C.e,C.i)}}
A.ak2.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.ak(n).length!==0)===!0){n.toString
n=C.c.ak(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.a9(B.a([B.ak(B.d(n,p,2,C.ah,p,B.r(C.h,14,C.C),p,p,p),1),C.ae,new E.DU(o.r,w,v,15,p)],u),C.x,p,C.e,C.i,0,p,p)
w=B.d($.cI().a3(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+E.bIH(w),p,1,C.ah,p,B.r(C.l,12,C.j),p,p,p)
v=C.d.aa(o.y,1)
t=$.cx()
s=t.a3(o.w)
t=t.a3(o.x)
r=o.ganb()
q=o.Q
q=q==null?"":" #"+q
q=B.a([n,C.aH,w,C.b_,B.d("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ah,p,B.r(C.l,12,C.j),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.H(q,B.a([C.aH,B.a9(B.a([D.af8,C.c4,B.ak(B.d("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.r(C.R,11,C.j),p,p,p),1)],u),C.k,p,C.e,C.i,0,p,p)],u))
return B.b_(p,B.a1(q,C.x,C.e,C.i),p,p,C.cM,p,p,3)}}
A.xp.prototype={
p(d){var w=null
return B.b_(w,B.a9(B.a([B.bK(this.e,this.d,w,w),C.ae,B.ak(B.d(this.c,w,w,w,w,B.r(C.h,14,C.j),w,w,w),1)],x.p),C.x,w,C.e,C.i,0,w,w),C.a5,w,C.w,w,w,3)}}
A.z4.prototype={
d9(d,e){var w=null,v=e.al($.r7(),x.P),u=e.al($.bDL(),x.aN)
return B.kp(B.cY(B.a([new B.eO("Finanzen","Dashboard",new A.aiA(e.al($.bDI(),x.c).gjg(),new A.aIz(this,d,e),new A.aIA(this,d,e),new A.aIB(d),new A.aIC(d),new A.aID(d),new A.aIE(this,d,e,v),w),w),C.as,new A.aqJ(v,w),C.c5,D.aiU,C.c5,B.dp(u,new A.aIF(),new A.aIG(),new A.aIH(),!1,!0,!1,x.d,x.l)],x.p),w,C.cc,w,C.F,!1),C.n,new A.aII(e))},
Kg(d,e){return this.aNV(d,e)},
aNV(d,e){var w=0,v=B.p(x.H),u,t,s,r,q,p,o,n,m
var $async$Kg=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:n=$.bDI()
w=3
return B.j(e.az(0,n.ghS(),x.F).HF(0),$async$Kg)
case 3:m=g
if(d.e==null){w=1
break}t=e.az(0,n,x.c)
s=t.ghg(t)==null
r=t.ghg(t)
if(r instanceof B.vt)q=r.a
else q=r==null?null:J.aj(r)
if(s)p="sevDesk synchronisiert: "+B.e(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.M(x.q).f
o=s?C.H:D.a8M
n.aF(B.bL(null,null,null,null,null,C.m,null,B.d(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.n(u,v)}})
return B.o($async$Kg,v)},
BY(d,e){return this.ayS(d,e)},
ayS(d,e){var w=0,v=B.p(x.H),u,t,s
var $async$BY=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.az(0,$.bDI().ghS(),x.F).Mp(),$async$BY)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.M(x.q).f.aF(D.aEi)
w=1
break}t=B.oW(C.v,10)
w=4
return B.j($.bVk().ui(s,"finanzauswertung.pdf",t,null,null,null),$async$BY)
case 4:case 1:return B.n(u,v)}})
return B.o($async$BY,v)},
BZ(d,e,f){return this.aLn(d,e,f)},
aLn(d,e,f){var w=0,v=B.p(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BZ=B.l(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.eB(null,null,!0,null,new A.aIw(f,d),d,null,!0,!0,x.cJ),$async$BZ)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mW(e.az(0,$.bx(),x.A))
p=f.a
o=f.b
n=$.cI()
m=n.a3(p)
n=n.a3(o)
w=8
return B.j(r.wo("finance_period",p,o,B.a4(["period_from",p.dS()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BZ)
case 8:if(d.e!=null)d.M(x.q).f.aF(F.mD)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a0(k)
if(d.e!=null)d.M(x.q).f.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Fehler: "+B.e(q),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$BZ,v)}}
A.aiA.prototype={
p(d){var w=this,v=null,u=A.Xo(C.n,F.h1,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Xo(v,D.adF,v,w.r,"Gesellschafter-Freigaben"),s=A.Xo(v,D.abR,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Xo(v,D.yw,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Xo(C.R,C.fA,C.R,r?v:w.e,"PDF-Export")
return B.a9(B.a([u,C.aS,t,C.aS,s,C.aS,q,C.aS,p,C.aS,A.Xo(C.aj,C.fC,C.aj,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.e,C.I,0,v,v)}}
A.aog.prototype={
p(d){var w,v=this,u=null,t=B.aq(12),s=B.aq(12),r=B.aq(12),q=v.w
if(q==null)q=C.a8
q=B.c7(q,1)
w=v.r
if(w==null)w=C.h
return B.u0(B.dv(!1,C.Z,!0,t,B.dP(!1,s,!0,B.aE(u,B.bK(v.c,w,u,20),C.p,u,u,new B.aB(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a5,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.aqJ.prototype={
d9(d,e){var w=null,v=this.e,u=$.cI(),t=x.p
return B.b_(w,B.a1(B.a([D.aas,C.D,B.a9(B.a([D.aeI,C.ai,B.ak(B.d(u.a3(v.a)+" \u2013 "+u.a3(v.b),w,w,w,w,B.r(C.h,16,C.C),w,w,w),1)],t),C.k,w,C.e,C.i,0,w,w),C.t,B.jk(C.c9,B.a([new A.K8("Monat",new A.bot(e),w,w),new A.K8("Jahr (YTD)",new A.bou(e),w,w),new A.K8("Zeitraum w\xe4hlen \u2026",new A.bov(this,d,e),F.Fc,w)],t),C.d3,6,8)],t),C.x,C.e,C.i),w,w,C.w,w,w,3)},
JA(d,e){return this.aKg(d,e)},
aKg(d,e){var w=0,v=B.p(x.H),u=this,t,s,r
var $async$JA=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:t=new B.aT(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.ayy(new A.bos(),d,B.bs(B.aS(t)-5,1,1,0,0,0,0),new B.m_(s.a,s.b,x.bz),B.bs(B.aS(t)+1,1,1,0,0,0,0),C.ef),$async$JA)
case 2:r=g
if(r!=null)e.az(0,$.r7().ghS(),x.V).uA(0,new E.m4(r.a,r.b))
return B.n(null,v)}})
return B.o($async$JA,v)}}
A.K8.prototype={
p(d){var w=null,v=B.aq(9999),u=B.aq(9999),t=B.aq(9999),s=B.c7(C.a8,1),r=x.p,q=B.a([],r),p=this.e
if(p!=null)C.b.H(q,B.a([B.bK(p,C.h,w,14),C.aS],r))
q.push(B.d(this.c,w,w,w,w,B.r(C.h,13,C.C),w,w,w))
return B.dv(!1,C.Z,!0,v,B.dP(!1,u,!0,B.aE(w,B.a9(q,C.k,w,C.e,C.I,0,w,w),C.p,w,w,new B.aB(w,w,s,t,w,w,C.B),w,w,w,w,C.fY,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a5,0,w,w,w,w,w,C.bb)}}
A.Kz.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.a([B.jD(new A.bvp(this)),C.c5,D.aay,C.t],q),o=this.c.w
if(o.length===0)p.push(B.b_(r,B.a9(B.a([D.aff,C.ae,B.ak(B.d("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.r(C.l,14,C.j),r,r,r),1)],q),C.k,r,C.e,C.i,0,r,r),C.a5,r,C.w,r,r,3))
else{w=B.a([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.L)(o),++u){t=o[u]
s=t.c
C.b.H(w,B.a([new A.aiy(t.a,t.b,s,E.bIH(s),t.d,new A.bvq(d,t),r),C.D],q))}p.push(B.a1(w,C.k,C.e,C.i))}return B.a1(p,C.ac,C.e,C.i)}}
A.aiy.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aP:C.a5,q=B.c7(s?C.n:C.a8,1),p=B.aq(4),o=v.c,n=x.p
t=B.a([B.aE(C.X,B.d(C.c.a1(o,0,1),u,u,u,u,B.bE(C.h,14,C.r),u,u,u),C.p,u,u,new B.aB(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.ae,B.ak(B.a1(B.a([B.d(o+" \xb7 "+v.d,u,1,C.ah,u,B.r(C.h,14,C.C),u,u,u),B.d(v.f,u,u,u,u,B.r(C.l,12,C.j),u,u,u)],n),C.x,C.e,C.i),1),new E.DU(v.r,t,o,15,u)],n)
C.b.H(t,B.a([C.c4,C.FN],n))
w=B.b_(u,B.a9(t,C.k,u,C.e,C.i,0,u,u),u,u,C.cM,u,u,3)
return B.bq(u,!0,u,B.dP(!1,B.aq(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.Ja.prototype={
p(d){var w=null
return B.b_(C.R,B.a9(B.a([D.afX,C.ae,B.ak(B.d(this.c,w,w,w,w,B.r(C.h,14,C.j),w,w,w),1)],x.p),C.k,w,C.e,C.i,0,w,w),C.fq,w,C.w,w,w,3)}}
A.a9_.prototype={
d9(d,e){return B.dp(e.al($.bKc(),x.cn),new A.aNv(),new A.aNw(),new A.aNx(),!1,!0,!1,x.X,x.l)}}
A.Jw.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.a([D.aBz,C.t,B.jD(new A.bkD(v,q,100-t.w.a,w,p)),C.t,new A.anx(u),C.as,D.aBy,C.t,new A.ajv(t,u),C.as,D.aBt,C.t,B.bq(u,!0,u,B.kg(u,B.b_(u,new A.Vw(t,220,u),u,u,C.w,u,u,3),C.P,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bkE(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.as,D.aBi,C.t,B.bq(u,!0,u,B.kg(u,new A.VN(t,200,!1,u),C.P,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bkF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.as,D.aBp,C.t,new A.apr(t,u),C.as,D.aBk,C.t,new A.alo(t,u)],s)
if(t.f.length!==0)C.b.H(r,B.a([C.as,D.aBv,C.t,new A.avx(t,u)],s))
return B.a1(r,C.ac,C.e,C.i)}}
A.anx.prototype={
p(d){var w=null
return B.d("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.r(C.l,11,C.j).cH(1.35),w,w,w)}}
A.aoU.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cK(m.d,"-")?C.R:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bkG(m,d):l
r=x.p
q=B.a([B.ak(B.d(m.c.toUpperCase(),l,l,l,l,B.r(C.l,10,C.r).fo(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.c7(C.R,0.8)
n=B.aq(4)
q.push(B.aE(l,B.d("Ziel "+p,l,l,l,l,B.r(C.R,9,C.r),l,l,l),C.p,l,l,new B.aB(l,l,o,n,l,l,C.B),l,l,l,l,C.nW,l,l,l))}q=B.a([B.a9(q,C.k,l,C.e,C.i,0,l,l),C.aH,B.Og(C.d6,B.d(m.d,l,l,l,l,B.bE(w,22,C.r),l,l,l),C.hV)],r)
p=m.e
if(p!=null)q.push(B.d(p,l,2,C.ah,l,B.r(C.l,10,C.aD),l,l,l))
q.push(C.d2)
q.push(B.a9(B.a([new A.Wo("Vormonat",m.r,l),C.c4,new A.Wo("Vorjahr",m.f,l)],r),C.k,l,C.e,C.i,0,l,l))
q.push(C.d2)
q.push(B.ak(new A.a_c(v,m.y,m.z,l),1))
return B.bq(l,u,l,B.kg(l,B.b_(l,B.a1(q,C.x,C.e,C.i),l,l,C.bA,l,l,3),C.P,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.Wo.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aq(4)
return B.aE(r,B.d(this.c+" \u2014",r,r,r,r,B.r(C.l,9,C.r),r,r,r),C.p,r,r,new B.aB(C.a8,r,r,q,r,r,C.B),r,r,r,r,C.nW,r,r,r)}w=q>=0
v=w?C.aj:C.R
u=v.dt(0.12)
t=B.c7(v,0.7)
s=B.aq(4)
return B.aE(r,B.a9(B.a([B.bK(w?F.abE:D.abD,v,r,10),C.ZJ,B.d(this.c+" "+C.d.aa(q,1)+" %",r,r,r,r,B.r(v,9,C.r),r,r,r)],x.p),C.k,r,C.e,C.I,0,r,r),C.p,r,r,new B.aB(u,r,t,s,r,r,C.B),r,r,r,r,C.nW,r,r,r)}}
A.a_c.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aw
w=B.a([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eI(v,j[v]))
u=C.b.jN(j,new A.bum())
t=C.b.jN(j,new A.bun())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.buo(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a7l(k,!1)
w=B.a([A.aNI(k,2,A.aAN(!1,C.n.dt(0.16),0,k,!0,D.wx),C.n,0.35,k,D.EN,k,!0,!1,!0,!1,D.Gn,!1,10,D.Zb,!0,C.lO,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.PJ(A.bFu(k,k,k,D.apt,l,D.Cy,D.EJ,D.EO,w,D.aj6,k,m,k,n,D.Yx,D.apu,D.aaQ),C.au,C.a9,k,k)}}
A.Vw.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aSO
w=C.b.f1(p,0,new A.b9z())
v=w>0?w*1.15:10
u=B.a([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aAW(B.a([A.a33(q,q,D.BZ,q,C.n,q,q,q,r.b,6),A.a33(q,q,D.BZ,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bP(A.bLm(A.aAP(q,q,u,q,q,A.a7l(q,!1),q,new A.z8(!0,!0,q,new A.b9A(),A.a1t(),!1,q,A.ayi(),A.a1t()),q,v,q,q,new A.vx(!0,new A.py(16,q,new A.qw(!0,new A.b9B(this),46,q),!0),D.kK,D.kK,new A.py(16,q,new A.qw(!0,new A.b9C(p),26,q),!0)))),this.d,q)},
aN6(d){if(Math.abs(d)>=1000)return C.d.aa(d/1000,1)+" k"
return C.d.aa(d,0)}}
A.VN.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.a(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.a([n.c,m.c,o.c],w)
u=B.a([n.e,m.e,o.e],w)
w=x.gj
o=B.S(new B.ag(v,new A.baC(),w),x.i)
C.b.H(o,new B.ag(u,new A.baD(),w))
t=C.b.f1(o,0,new A.baE())
o=t>0?t*1.2:10
n=B.a([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aAW(B.a([A.a33(q,q,q,q,C.n,q,q,q,v[s],14),A.a33(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bP(A.bLm(A.aAP(q,q,n,q,q,A.a7l(q,!1),q,D.EO,q,o,q,q,new A.vx(!0,D.kK,D.kK,D.kK,new A.py(16,q,new A.qw(!0,new A.baF(p),26,q),!0)))),this.d,q)
return this.e?r:B.b_(q,r,q,q,C.w,q,q,3)}}
A.apr.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aSN
w=new B.ag(l,new A.blm(),B.al(l).i("ag<1,G>")).jN(0,new A.bln())
v=x.p
u=B.a([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.L)(l),++s){r=l[s]
q=B.d(r.b,m,m,m,m,B.r(C.h,14,C.r),m,m,m)
p=$.cx()
o=r.d
n=new B.b4(4,4)
o=B.a([new B.hP(C.al,C.e,C.i,C.k,m,C.aY,m,0,B.a([new B.iA(1,C.cU,B.a1(B.a([q,B.d(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a3(r.f),m,m,m,m,B.r(C.l,12,C.aD),m,m,m)],v),C.x,C.e,C.i),m),C.ai,B.d(p.a3(o),m,m,m,m,B.bE(C.h,16,C.r),m,m,m)],v),m),C.d2,new B.Ei(new B.dc(n,n,n,n),C.bz,B.zZ(C.a8,m,8,C.d.bm(o/w,0,1),D.BO),m)],v)
q=C.b.gah(l)
if(r!==q)q=B.M(r)===B.M(q)&&B.a1y(r.gbu(),q.gbu())
else q=!0
if(!q)o.push(C.t)
C.b.H(u,o)}return B.b_(m,B.a1(u,C.k,C.e,C.i),m,m,C.w,m,m,3)}}
A.alo.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ak(new A.D0("Aktive Kunden",""+s,u),1)
w=B.ak(new A.D0("K\xe4ufe",""+t.a,u),1)
v=$.cx()
return B.b_(u,B.a9(B.a([s,w,B.ak(new A.D0("\xd8-Warenkorb",v.a3(t.d),u),1),B.ak(new A.D0("Umsatz/Kunde",v.a3(r),u),1)],x.p),C.k,u,C.e,C.i,0,u,u),u,u,C.w,u,u,3)}}
A.D0.prototype={
p(d){var w=null
return B.a1(B.a([B.d(this.c.toUpperCase(),w,w,w,w,B.r(C.l,10,C.r).fo(0.6),w,w,w),C.b_,B.d(this.d,w,w,w,w,B.bE(C.h,20,C.r),w,w,w)],x.p),C.x,C.e,C.I)}}
A.avx.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ag(q,new A.bwK(),B.al(q).i("ag<1,G>")).jN(0,new A.bwL()),o=x.p,n=B.a([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.L)(q),++v){u=q[v]
t=u.d
s=new B.b4(4,4)
t=B.a([new B.hP(C.al,C.e,C.i,C.k,r,C.aY,r,0,B.a([new B.iA(1,C.cU,B.d(u.b,r,1,C.ah,r,B.r(C.h,13,C.r),r,r,r),r),B.d(""+u.c+"\xd7 ",r,r,r,r,B.r(C.l,12,C.C),r,r,r),B.d($.cx().a3(t),r,r,r,r,B.r(C.h,13,C.r),r,r,r)],o),r),C.aH,new B.Ei(new B.dc(s,s,s,s),C.bz,B.zZ(C.a8,r,6,C.d.bm(t/p,0,1),D.BO),r)],o)
s=C.b.gah(q)
if(u!==s)s=B.M(u)===B.M(s)&&B.a1y(u.gbu(),s.gbu())
else s=!0
if(!s)t.push(C.D)
C.b.H(n,t)}return B.b_(r,B.a1(n,C.k,C.e,C.i),r,r,C.w,r,r,3)}}
A.xk.prototype={
p(d){var w=null
return B.b_(w,B.d(this.c,w,w,w,w,B.r(C.l,13,C.j),w,w,w),C.a5,w,C.w,w,w,3)}}
A.ajv.prototype={
d9(d,e){return B.dp(e.al($.bDJ(),x.fM),new A.b7r(this,d,e),new A.b7s(),new A.b7t(),!1,!0,!1,x.h,x.l)}}
A.BT.prototype={
U(){return new A.V6()},
b_l(){return this.d.$0()}}
A.V6.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aH()
q.d=new B.aT(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.J(w,"as_of"))!=null){w.toString
u=B.dh(J.aj(J.J(w,"as_of")))
q.d=u==null?q.d:u}u=B.B(x.N,x.bP)
for(t=0;t<8;++t){s=D.q9[t].a
if(v)r=""
else{r=B.b1(J.J(w,s))
if(r==null)r=null
r=C.d.aa(r==null?0:r,2)
r=B.ah(r,".",",")}u.m(0,s,new B.bc(new B.c5(r,C.aC,C.an),$.ad()))}q.e!==$&&B.aX()
q.e=u},
l(){var w,v=this.e
v===$&&B.b()
v=new B.ch(v,v.r,v.e,B.q(v).i("ch<2>"))
while(v.t()){w=v.d
w.S$=$.ad()
w.R$=0}this.am()},
rM(d){var w=this.e
w===$&&B.b()
w=C.c.ak(w.h(0,d).a.a)
w=B.ah(w,".","")
w=B.f1(B.ah(w,",","."))
return w==null?0:w},
a5h(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q9[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.b()
t=t.h(0,v)
t.toString
s=C.d.aa(u,2)
s=B.ah(s,".",",")
t.jZ(0,t.a.yu(C.an,C.aC,s))}}this.F(new A.b7f())},
aGQ(){this.a5h(D.atL)
this.c.M(x.q).f.aF(D.aEN)},
IQ(){var w=0,v=B.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$IQ=B.l(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.be(a1)
for(e=0;e<8;++e)a2.E(0,D.q9[e].a)
q=a2
t=4
w=7
return B.j($.a7d.cl().wd(B.a(["csv","txt"],x.s),C.o5,!0),$async$IQ)
case 7:p=a5
a2=p
o=a2==null?null:J.Lq(a2.a).c
if(o==null){w=1
break}n=C.aO.aeV(0,o,!0)
m=B.B(a1,x.i)
for(a1=C.CD.cL(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.L)(a1),++e){l=a1[e]
k=J.az5(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cj(k)<2)continue
j=C.c.ak(J.J(k,0)).toLowerCase()
i=J.Dv(q,j)?j:D.avZ.h(0,j)
if(i==null)continue
d=C.c.ak(C.b.mc(J.bYx(k,1)))
d=B.ah(d,"\u20ac","")
d=B.ah(d," ","")
d=B.ah(d,".","")
h=B.ah(d,",",".")
g=B.f1(h)
if(g!=null)J.fD(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.M(x.q).f.aF(D.aEf)
w=1
break}r.a5h(m)
r.c.M(x.q).f.aF(B.bL(null,null,null,null,null,C.m,null,B.d(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a0(a3)
a1=r.c
if(a1==null){w=1
break}a1.M(x.q).f.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Import fehlgeschlagen: "+B.e(f),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$IQ,v)},
J0(){var w=0,v=B.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$J0=B.l(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.F(new A.b7g(q))
t=4
o=q.a.e
n=q.d
n===$&&B.b()
n=o.b1T("upsert_finance_balance",B.a4(["p_as_of",C.c.a1(n.dS(),0,10),"p_cash_and_bank",q.rM("cash_and_bank"),"p_receivables",q.rM("receivables"),"p_inventory_value",q.rM("inventory_value"),"p_other_current_assets",q.rM("other_current_assets"),"p_fixed_assets",q.rM("fixed_assets"),"p_current_liabilities",q.rM("current_liabilities"),"p_long_term_liabilities",q.rM("long_term_liabilities"),"p_equity",q.rM("equity")],x.N,x.aU))
w=7
return B.j(n,$async$J0)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.b_l()
o=q.c
o.toString
B.aC(o,!1).eV()
q.c.M(x.q).f.aF(D.aEj)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a0(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.M(x.q).f.aF(B.bL(null,null,null,null,null,C.m,null,B.d("Speichern fehlgeschlagen: "+B.e(p),null,null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.F(new A.b7h(q))
w=r.pop()
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$J0,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.d("Bilanzwerte erfassen",r,r,r,r,B.bE(C.h,18,C.r),r,r,r),p=s.f?r:new A.b7j(s,d),o=s.d
o===$&&B.b()
p=B.ew(D.aeK,B.d("Stichtag: "+C.c.a1(o.dS(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ak(B.ew(D.ag8,D.aKO,o?r:s.gaFM(),r),1)
v=x.p
w=B.a([p,C.D,B.a9(B.a([w,C.ai,B.ak(B.ew(D.afS,D.aKv,o?r:s.gaGP(),r),1)],v),C.k,r,C.e,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q9[u]
o=s.e
o===$&&B.b()
C.b.H(w,B.a([B.ck(r,C.a6,!1,r,!0,C.m,r,B.co(),o.h(0,p.a),r,r,r,r,r,2,new B.bl(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.P,!0,r,!0,r,!1,r,C.ab,r,r,r,r,r,C.di,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.w,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.W,r,C.O,r,r,r,r),C.D],v))}w.push(B.d("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.r(C.l,11,C.j),r,r,r))
p=B.bP(B.em(B.a1(w,C.ac,C.e,C.I),r,C.F),r,380)
o=s.f
w=B.cv(C.bc,r,r,o?r:new A.b7k(d),r,r)
o=o?r:s.gaGy()
t=B.dL(C.n,C.h,r,r,r,r,r)
return B.fj(B.a([w,B.d1(s.f?F.ZM:C.ct,o,t)],v),C.q,p,q)}}
A.bp.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.M(this)===B.M(e)&&B.a1y(this.gbu(),e.gbu())
else w=!0
return w},
gB(d){return(B.fd(B.M(this))^B.bTC(this.gbu()))>>>0},
j(d){B.bMB()
return B.M(this).j(0)}}
A.Me.prototype={
U(){return new A.V7(B.B(x.S,x.J),new A.aAZ(B.B(x.x,x.T)),null,null)}}
A.V7.prototype={
p(d){var w,v=this,u=v.a35(),t=v.CW
t.toString
t=v.a36(t.aw(0,v.gfn().gu(0)))
w=v.a36(u)
v.a.toString
return new A.Ma(new A.a32(t,w,null),u,null)},
a36(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.a([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aAW(s.c,s.d,!1,r,s.a))}return d.aSq(w)},
a35(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.VY(t.ch)
if(r)s=w.a
r=t.y
t=t.aTk(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aSr(A.bEc(!1,!0,!0,v.d,v.c,u.gauc(),v.f,v.e))}return t},
aud(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gahm()||e==null||e.a==null){w=v.cy
v.F(w.gaRP(w))
return}v.F(new A.b7w(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a35(),new A.b7x(w)))}}
A.od.prototype={
WB(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aAP(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aTk(d,e){return this.WB(null,null,d,e)},
aSr(d){return this.WB(null,d,null,null)},
aSq(d){return this.WB(d,null,null,null)},
Yx(d,e,f){var w,v,u,t=A.kN(d.ch,e.ch,f,A.ccc(),x.dB),s=B.an(d.CW,e.CW,f),r=A.bMJ(d.d,e.d,f),q=A.bOH(d.e,e.e,f),p=A.bMH(d.c,e.c,f),o=e.a
o=A.a7l(B.a3m(d.a.b,o.b,f),o.a)
w=B.an(d.y,e.y,f)
v=B.an(d.x,e.x,f)
u=B.an(d.z,e.z,f)
r=A.aAP(e.cx,B.a3(d.as,e.as,f),t,e.cy,u,o,A.bMD(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbu(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aAO.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fW.prototype={
gdv(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ag(v,new A.aAX(),B.al(v).i("ag<1,G>")).jN(0,new A.aAY())
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
A.a3_.prototype={
gbu(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a34.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ag_.prototype={
L(){return"TooltipDirection."+this.b}}
A.a35.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DT.prototype={
gbu(){return[this.a,this.b,C.bl,C.z,null]}}
A.Mf.prototype={}
A.a36.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.yf.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yx(v,w,d)}}
A.ajr.prototype={}
A.ajy.prototype={}
A.ajz.prototype={}
A.ajB.prototype={}
A.ajC.prototype={}
A.ajD.prototype={}
A.ajE.prototype={}
A.ajF.prototype={}
A.ajG.prototype={}
A.aAZ.prototype={
VY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.v6(0,0,!1)
v=new A.A1(d,x.x)
u=this.a
if(u.aJ(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.v6(t,u,!0)}w=null
try{w=C.b.p8(d,new A.aB_())}catch(s){return new A.v6(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.v6(q,r,!1)
u.m(0,v,j)
return j}}
A.v6.prototype={
gbu(){return[this.a,this.b,this.c]}}
A.ajA.prototype={}
A.aB0.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a1d(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.adT(t,A.bEb(w,t.a),u)
l.y=u
l.aUG(e,u,f)
l.anx(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aUP(d,e,m,t,r,s,n,o,f)}}},
adT(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.h(B.e6("inconsistent state groupsX.length != barGroups.length"))
w=B.a([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.a([],v)
p=s.c
new B.j2(p,B.al(p).i("j2<1>")).aE(0,new A.aB1(t,q,r,s))
w.push(new A.a82(q))}return w},
aUG(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
a4=B.Rv(h,Math.min(b2.dM(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dM(Math.min(u,a2),b4,b7)
a4=B.Rv(h,a5,g,Math.max(b2.dM(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.b()
f=o.c
k.r=(f==null?C.N:f).gu(0)
k.seY(null)
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
b2.aUN(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gep(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.b()
f=j.a
k.r=f.gu(f)
k.c=n
n=$.ar()
k=B.a([],s)
k.push(new B.hv(a4))
n=A.aE8(new B.ct(n.r,C.ao,null,null,k),o.r)
a6=b2.r.e3()
k=n.e
v.drawPath((k==null?n.e=new B.n2(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aUP(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bw(a5,a5,a5,a5,B.cR(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lQ().a0g(a8,a7.b),a7.a),C.bl,C.z,a5,b6.c,C.bt)
w.ahG(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbW(v)
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
if(v!==D.aO_)j=v===D.a_v&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a0h(t,n,b1.d,b1.e)
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
r=$.lQ().Lm(new B.I(v,t),d).b
s=$.lQ()
q=w.b
p=q.c
q=q.a.c
a0=s.Lm(new B.I(p,q.gbW(q)),d)
q=g.gca()
p=w.b.c
s=g.gajU()
a1=b1.Q
if(!a1.k(0,C.L)){a2=a4.x
a2===$&&B.b()
a3=a1.a
a2.r=a3.gu(a3)
a2.c=a1.b}a9.Xe(d,new A.aB2(a4,a9,e,w,new B.t(q.a-p/2,s.b+o.b-a0.b+r)),new B.t(e.a,e.b),new B.t(0,r),new B.I(v,t))},
aUN(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Rv(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dM(v,j,k),i.b)
r=n.dM(t,j,k)
v=t<v
t=v?C.aa:new B.b4(i.z,i.Q)
p=v?C.aa:new B.b4(i.x,i.y)
o=v?new B.b4(i.e,i.f):C.aa
q=B.Rv(w,s,u,r,t,p,o,v?new B.b4(i.r,i.w):C.aa)}else q=B.bGb(w,n.dM(v,j,k),u,n.dM(t,j,k),C.aa)}w=n.r
w===$&&B.b()
m=m.a
w.r=m.gu(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
XT(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.adT(b2,A.bEb(a8,b2.a),a8.ch)
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
break}++a3}return new A.a36(d,q,a0,o,a2,a1,new A.eI(d.a,v),new B.t(n,t))}}return null}}
A.a82.prototype={}
A.a32.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.aB0()
t.a2p()
$.ar()
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
t=new A.ad6(this.d,v,u,t,d,C.bd,new B.bw(),B.aO(x.j))
t.bj()
t.a_8(v.cy)
t.agQ()
return t},
by(d,e){e.sip(0,this.d)
e.sZT(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.A=d
e.bd()}}
A.ad6.prototype={
sip(d,e){if(this.aG.k(0,e))return
this.aG=e
this.bd()},
sZT(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1Y(d.cy)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aP(d,e){var w,v,u=this,t=d.gdC(0),s=t.a
J.bj(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.h1.ih(w,new A.a3A(t,v),new A.wi(u.aG,u.i9,u.d3,x.Q))
s.restore()},
a09(d){var w=this,v=w.gC(0)
return new A.Mf(w.h1.XT(d,v,new A.wi(w.aG,w.i9,w.d3,x.Q)))}}
A.a2T.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DS.prototype={
L(){return"AxisSide."+this.b}}
A.u_.prototype={}
A.qw.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aey.prototype={
gbu(){return[!1,0,0,0]}}
A.py.prototype={
gbu(){return[this.b,this.a,this.c,!0]}}
A.vx.prototype={
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
A.pW.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ag1.prototype={
gbu(){return[this.a,this.b]}}
A.Rz.prototype={
gbu(){return[this.a,this.b]}}
A.nj.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nI.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l4.prototype={
gbu(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ly.prototype={
gbu(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a8d.prototype={
gbu(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.agp.prototype={
gbu(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.O9.prototype={
gbu(){return[this.a,this.b,!0]}}
A.vw.prototype={}
A.Oi.prototype={
afj(d,e,f){var w,v
$.ar()
w=B.b5()
v=this.a
w.r=v.gu(v)
w.b=C.bp
d.iU(f,this.b,w)},
gbu(){return[this.a,this.b,this.c,0]}}
A.ajm.prototype={}
A.ajq.prototype={}
A.amK.prototype={}
A.anb.prototype={}
A.anc.prototype={}
A.ane.prototype={}
A.anf.prototype={}
A.ao6.prototype={}
A.ao5.prototype={}
A.ao7.prototype={}
A.arU.prototype={}
A.atT.prototype={}
A.atU.prototype={}
A.avB.prototype={}
A.awl.prototype={}
A.awk.prototype={}
A.awm.prototype={}
A.aAD.prototype={
Nx(d,e,f,g,h,i){return new B.is(this.aYs(d,e,f,g,h,i),x.g4)},
aYr(d,e,f,g){return this.Nx(d,e,f,!0,g,!0)},
aYs(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Nx(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lQ().al3(s,u,v,w)
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
A.M9.prototype={
a2p(){var w,v=this
$.ar()
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
w.a1e(d,e,f)
w.aUC(e,f)
w.aUM(e,f)
w.aUL(e,f)},
aUL(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lQ().PA(w.a,a1.r-a1.f)
u=$.bDf().Nx(a1.w,v,a1.r,!1,a1.f,!1)
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
i=B.lm(n,m)
if(j!=null){p.r=C.J.gu(0)
p.seY(j.mT(0,i))}else{if(k==null)k=C.N
p.r=k.gu(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c8(p.r)
p.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}a3.En(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lQ().PA(w.b,a1.y-a1.x)
u=$.bDf().Nx(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.lm(n,m)
if(k!=null){q.r=C.J.gu(0)
q.seY(k.mT(0,i))}else{if(p==null)p=C.N
q.r=p.gu(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c8(q.r)
q.r=B.aJ(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gu(0)}a3.En(n,m,d.a,f.d)}},
aUC(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.b()
v.r=u.gu(0)
d.a.hf(new B.N(0,0,0+w.a,0+w.b),this.b)},
aUM(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.L)(k),++u){t=k[u]
s=B.lm(new B.t(n.fg(t.a,m,e),0),new B.t(n.fg(t.b,m,e),v))
r=n.e
r===$&&B.b()
q=t.c
p=t.d
if(p!=null){r.r=C.J.gu(0)
r.seY(p.mT(0,s))}else{r.r=(q==null?C.N:q).gu(0)
r.seY(null)}o=n.e.e3()
w.drawRect(B.dT(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.L)(l),++u){t=l[u]
s=B.lm(new B.t(0,n.dM(t.a,m,e)),new B.t(w,n.dM(t.b,m,e)))
v=n.e
v===$&&B.b()
r=t.c
q=t.d
if(q!=null){v.r=C.J.gu(0)
v.seY(q.mT(0,s))}else{v.r=(r==null?C.N:r).gu(0)
v.seY(null)}o=n.e.e3()
j.drawRect(B.dT(s),o)
o.delete()}},
aUK(d,e,f){var w,v
this.a1e(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.afk(d,e,f,w)
if(v.b.length!==0)this.aUR(d,e,f,w)},
afk(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.e
n=f.dM(o,a1,a0)
m=new B.t(0,n)
o=f.dM(o,a1,a0)
l=new B.t(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.b()
k=p.a
j=p.b
i=B.lm(m,l)
if(j!=null){n.r=C.J.gu(0)
n.seY(j.mT(0,i))}else{if(k==null)k=C.N
n.r=k.gu(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c8(n.r)
n.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}n.d=p.x
e.En(m,l,f.c,p.d)
n=p.r
h=n.gdv(n).eI(0,2)
g=C.d.aq(o,n.gbW(n).eI(0,2))
J.bj(r.save())
r.translate(h,g)
n=n.gOv().b
n===$&&B.b()
n=n.a
n===$&&B.b()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdv(n).eI(0,2)
o=C.d.aq(o,n.gbW(n).eI(0,2))
k=f.d
k===$&&B.b()
s.afl(0,n,new B.t(h,o),k)}}},
aUR(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.L)(w),++q){p=w[q]
o=p.e
n=d.fg(o,a3,a2)
m=new B.t(n,0)
o=d.fg(o,a3,a2)
l=new B.t(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.b()
k=p.a
j=p.b
i=B.lm(m,l)
if(j!=null){n.r=C.J.gu(0)
n.seY(j.mT(0,i))}else{if(k==null)k=C.N
n.r=k.gu(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c8(n.r)
n.r=B.aJ(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gu(0)}n.d=p.x
a1.En(m,l,d.c,p.d)
n=p.r
h=n.gdv(n).eI(0,2)
g=n.gbW(n).eI(0,2)
f=C.d.aq(o,h)
e=C.d.aq(u,g)
J.bj(r.save())
r.translate(f,e)
n=n.gOv().b
n===$&&B.b()
n=n.a
n===$&&B.b()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdv(n).eI(0,2)
g=n.gbW(n).ai(0,2)
o=C.d.aq(o,h)
k=C.d.aq(u,g)
j=d.d
j===$&&B.b()
s.afl(0,n,new B.t(o,k),j)}}},
fg(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dM(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a0h(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Ma.prototype={
gamS(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gamT(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamU(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gamQ(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
and(d){var w,v=this,u=null,t=v.d,s=A.bEY(t.d),r=t.a
r=r.a&&A.bZ7(r.b)?r.b:u
w=B.a([B.aE(u,v.c,C.p,u,u,new B.aB(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.aAF(w)
if(v.gamS())C.b.hB(w,s.$1(!0),new A.Bf(D.BV,t,new B.I(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamU())C.b.hB(w,s.$1(!0),new A.Bf(D.n5,t,new B.I(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamT())C.b.hB(w,s.$1(!0),new A.Bf(D.BW,t,new B.I(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
if(v.gamQ())C.b.hB(w,s.$1(!0),new A.Bf(D.dX,t,new B.I(B.R(1/0,d.a,d.b),B.R(1/0,d.c,d.d)),u))
return w},
p(d){return B.jD(new A.aAE(this))}}
A.T1.prototype={
U(){return new A.a_0(new B.br(null,x.eF))}}
A.a_0.prototype={
aA1(){switch(this.a.c.a){case 0:return C.dV
case 1:return C.fl
case 2:return C.d6
case 3:return C.dG}},
aAx(){switch(this.a.c.a){case 0:return new B.af(0,0,8,0)
case 1:return new B.af(0,0,0,8)
case 2:return new B.af(8,0,0,0)
case 3:return new B.af(0,8,0,0)}},
aA3(d){this.a.toString
return},
ap(){this.aH()
$.cN.x1$.push(this.ga5M())},
bc(d){this.bG(d)
$.cN.x1$.push(this.ga5M())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.aAx()
return B.BF(B.b4F(0,B.aE(v.aA1(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aez.prototype={
bn(d){return A.bZ_(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2U.prototype={
h5(d){if(!(d.b instanceof B.hF))d.b=new B.hF(null,null,C.v)},
hM(d){if(this.A===C.al)return this.yC(d)
return this.WO(d)},
aNi(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
aaG(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dH(d){var w=this.aaF(d,B.hV())
switch(this.A.a){case 0:return d.bH(new B.I(w.a,w.b))
case 1:return d.bH(new B.I(w.b,w.a))}},
aaF(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.al?d.b:d.d,m=o.a9$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.eF(u,null)
break
case 1:q=B.eF(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aaG(p)
t=Math.max(t,o.aNi(p))
m=r.aA$}return new A.bkM(n<1/0?n:s,t)},
cB(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.O.prototype.ga7.call(p)),n=p.aaF(o,B.mR()),m=n.a,l=n.b
switch(p.A.a){case 0:p.fy=o.bH(new B.I(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.bH(new B.I(l,m))
p.gC(0)
p.gC(0)
break}w=p.a9$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.aaG(r==null?B.T(B.Z("RenderBox was not laid out: "+B.M(w).j(0)+"#"+B.c3(w))):r)/2
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
this.aq8()}}
A.bkM.prototype={}
A.aAG.prototype={}
A.k4.prototype={
gbu(){return[this.a,this.b]}}
A.oc.prototype={}
A.ajn.prototype={}
A.ajo.prototype={
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
A.ajp.prototype={}
A.V4.prototype={
l(){var w,v,u
for(w=this.Xr$,v=w.length,u=0;u<v;++u)w[u].l()
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
gb24(){var w=this.d,v=A.bEY(w.d),u=A.bMG(w.a)
switch(this.c.a){case 2:case 0:return new B.af(0,v.b,0,v.d).ai(0,new B.af(0,u.b,0,u.d))
case 1:case 3:return new B.af(v.a,0,v.c,0).ai(0,new B.af(u.a,0,u.c,0))}},
gajI(){var w=this.d,v=A.bMG(w.a),u=A.bEY(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aZ8(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goK().c.d
if(o==null)o=$.lQ().PA(d,f-e)
w=p.c
v=w!==D.n5
if((!v||w===D.dX)&&p.d instanceof A.od){u=x.B.a(p.d)
if(u.ch.length===0)return B.a([],x.M)
t=A.bEb(u,d)
w=new B.j2(t,B.al(t).i("j2<1>"))
s=w.gi3(w).eQ(0,new A.b1D(u),x.W).fR(0)}else{r=$.bDf()
w=!v||w===D.dX
v=p.d
q=r.aYr(w?v.w:v.z,o,f,e)
v=B.oM(q,new A.b1E(p,f,e,d),q.$ti.i("u.E"),x.W)
s=B.S(v,B.q(v).i("u.E"))}w=B.al(s).i("ag<1,oc>")
w=B.S(new B.ag(s,new A.b1F(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goK()
w=j.goK()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aE(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
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
o=j.gb24()
n=!u||w===D.dX?C.al:C.F
j.gajI()
m=j.gajI()
l=!u||w===D.dX
k=j.d
l=l?k.f:k.x
u=!u||w===D.dX?k.r:k.y
q.push(B.aE(i,A.c5o(new A.aAG(),n,j.aZ8(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BW||w===D.dX)j.goK()
return new B.ec(t,i,i,B.c0Q(q,C.k,s,i,C.e,C.I,0,i,i,C.aY),i)}}
A.a38.prototype={
gbu(){return[this.a,this.b]}}
A.a7k.prototype={
gbu(){return[this.a,this.b]}}
A.Op.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a7m.prototype={
gadc(d){return!1},
gbu(){return[!1,!1,!1,!1]}}
A.aBb.prototype={}
A.aHD.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ajJ.prototype={}
A.an8.prototype={}
A.an9.prototype={}
A.ang.prototype={}
A.Mi.prototype={
ih(d,e,f){}}
A.wi.prototype={}
A.hE.prototype={
gdQ(){return null},
gahm(){var w,v=this
B.bH()
B.bH()
B.bH()
w=v instanceof A.Oo
if(w)return!0
return!(v instanceof A.Ol)&&!(v instanceof A.Ok)&&!(v instanceof A.Om)&&!(v instanceof A.Oj)&&!w&&!(v instanceof A.On)}}
A.a7q.prototype={
gdQ(){return this.a.b}}
A.a7r.prototype={
gdQ(){return this.a.b}}
A.a7s.prototype={
gdQ(){return this.a.b}}
A.Ok.prototype={}
A.Ol.prototype={}
A.a7v.prototype={
gdQ(){return this.a.b}}
A.On.prototype={}
A.Oo.prototype={
gdQ(){return this.a.b}}
A.a7p.prototype={
gdQ(){return this.a.b}}
A.a7o.prototype={
gdQ(){return this.a.b}}
A.Oj.prototype={
gdQ(){return this.a.b}}
A.a7t.prototype={
gdQ(){return this.a.gdQ()}}
A.a7u.prototype={
gdQ(){return this.a.gdQ()}}
A.Om.prototype={
gdQ(){return this.a.gdQ()}}
A.He.prototype={
a_8(d){this.V=d.b
this.W=d.c
this.a5=d.d},
agQ(){var w=this,v=null,u=w.an=B.bFS(v,v)
u.ay=new A.aXI(w)
u.ch=new A.aXJ(w)
u.CW=new A.aXK(w)
u.cy=new A.aXL(w)
u.cx=new A.aXM(w)
u=w.aK=B.I2(v,-1,v)
u.A=new A.aXN(w)
u.a_=new A.aXO(w)
u.V=new A.aXP(w)
u=w.bF=B.a9l(v,w.a5,v)
u.p3=new A.aXQ(w)
u.p4=new A.aXR(w)
u.RG=new A.aXS(w)},
cB(){var w=x.k.a(B.O.prototype.ga7.call(this))
this.fy=new B.I(w.b,w.d)},
dH(d){return new B.I(d.b,d.d)},
kM(d){return!0},
n2(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bF
w===$&&B.b()
w.oH(d)
w=v.aK
w===$&&B.b()
w.oH(d)
w=v.an
w===$&&B.b()
w.oH(d)}else if(x.gJ.b(d))v.la(new A.a7u(d))},
gO0(d){return new A.aXT(this)},
gO2(d){return new A.aXU(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdQ()
v=w!=null?u.a09(w):null
u.V.$2(d,v)
u.a_=C.bd},
gLP(d){return this.a_},
gGi(){var w=this.av
w===$&&B.b()
return w},
aO(d){this.fm(d)
this.av=!0},
aI(d){this.av=!1
this.f7(0)},
$ijG:1}
A.PJ.prototype={
U(){return new A.XJ(B.a([],x.r),B.B(x.S,x.J),new A.aNK(B.B(x.y,x.dj)),null,null)}}
A.XJ.prototype={
p(d){var w,v=this,u=v.a5O(),t=v.CW
t.toString
t=v.acI(t.aw(0,v.gfn().gu(0)))
w=v.acI(u)
v.a.toString
return new A.Ma(new A.a9b(t,w,null),u,null)},
acI(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.al(w).i("ag<1,ei>")
w=B.S(new B.ag(w,new A.bkS(this,d),v),v.i("ax.E"))
return d.aTh(w,this.cy)},
a5O(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.VY(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aTw(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aSW(new A.FM(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaBk(),t.c,t.d))}return r},
aBl(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gahm())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.F(new A.bkQ(v))
return}v.F(new A.bkR(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a5O(),new A.bkT(w)))}}
A.q9.prototype={
Yx(d,e,f){var w,v,u,t,s,r,q=B.an(d.f,e.f,f),p=B.an(d.r,e.r,f),o=B.an(d.w,e.w,f),n=B.an(d.x,e.x,f),m=B.an(d.y,e.y,f),l=B.an(d.z,e.z,f),k=B.a3(d.as,e.as,f),j=e.a
j=A.a7l(B.a3m(d.a.b,j.b,f),j.a)
w=A.bMD(d.at,e.at,f)
v=A.bMH(d.c,e.c,f)
u=A.bMJ(d.d,e.d,f)
t=A.bOH(d.e,e.e,f)
s=A.kN(d.ch,e.ch,f,A.cej(),x.cz)
s.toString
r=A.kN(d.CW,e.CW,f,A.cei(),x.bO)
r.toString
u=A.bFu(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
WC(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bFu(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aTw(d,e,f,g){return this.WC(null,null,d,e,f,g,null)},
aSW(d){var w=null
return this.WC(w,d,w,w,w,w,w)},
aTh(d,e){var w=null
return this.WC(d,w,w,w,w,w,e)},
gbu(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ei.prototype={
asO(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p8(n.a,new A.aNJ())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.L)(v),++p){o=v[p]
if(o.k(0,D.fZ))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aX()
n.b=q
r.toString
n.c!==$&&B.aX()
n.c=r
s.toString
n.d!==$&&B.aX()
n.d=s
t.toString
n.e!==$&&B.aX()
n.e=t}},
aeD(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aNI(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aT2(d){return this.aeD(d,null)},
aT4(d){return this.aeD(null,d)},
gbu(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.PK.prototype={
gbu(){return[this.a]}}
A.a31.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mZ.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Md.prototype={
gbu(){return[!1,this.b,this.c,!0]}}
A.z7.prototype={
gbu(){return[this.a,this.b,this.c]}}
A.aNy.prototype={
L(){return"LabelDirection."+this.b}}
A.a7n.prototype={
gbu(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.FM.prototype={
gbu(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a9c.prototype={
gbu(){return[4,C.eR,16,D.ye,0,120,A.cel(),!1,!1,!1,0,C.L,A.cek()]}}
A.nm.prototype={
gbu(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qE.prototype={}
A.rZ.prototype={
gbu(){return[this.a,this.b,C.bl,C.z,null]}}
A.u1.prototype={
gbu(){return[this.a,this.b]}}
A.HG.prototype={
gbu(){return[this.a]}}
A.PL.prototype={}
A.zX.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yx(v,w,d)}}
A.ajw.prototype={}
A.ajx.prototype={}
A.ajL.prototype={}
A.ana.prototype={}
A.and.prototype={}
A.ap3.prototype={}
A.ap4.prototype={}
A.ap5.prototype={}
A.ap7.prototype={}
A.ap8.prototype={}
A.ap9.prototype={}
A.apa.prototype={}
A.atS.prototype={}
A.avA.prototype={}
A.aNK.prototype={
VY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yU
u=new A.A1(d,x.y)
t=this.a
if(t.aJ(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zY(s,r,q,t,!0)}w=null
try{w=C.b.p8(d,new A.aNL())}catch(p){return D.yU}v=null
try{v=C.b.p8(w.a,new A.aNM())}catch(p){return D.yU}o=v.a
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
A.ap6.prototype={}
A.aNN.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gadc(0)){v=a3.b
u=v.a
v=v.b
$.ar()
a3.a.iP(new B.N(0,-40,0+(u+40),-40+(v+40)),B.b5())
a3.aRW(new B.N(0,0,u,v))}d.a1d(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t)d.aUI(a3,a0,v[t],a4)
s=B.a([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aUE(a3,q,a4)
d.aUJ(a3,q,a4)
d.anw(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Q(o)
if(n.gq(o)!==p.length)throw B.h(B.e6("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.w0(q,i,j,k))}}d.aUQ(a3,s,a4)
if(w.gadc(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.S(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aUO(a2,a3,v,f,new A.HG(g),a4)}},
aUE(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bEX(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.L)(n),++v){u=n[v]
t=p.a_J(o,e,u,f)
s=p.akW(o,e,t,u,f)
r=p.a_L(o,e,t,u,f,!0)
q=p.akV(o,e,t,u,f)
p.aUH(d,s,p.a_I(o,e,t,u,f,!0),f,e)
p.aUB(d,q,r,f,e)
p.aUF(d,t,e)
p.aUD(d,t,e,f)}},
aUI(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bEX(a5.a),a8=A.bEX(a6.a)
if(a7.length!==a8.length)throw B.h(B.bQ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bZ.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.al(n).i("cM<1>")
l=B.S(new B.cM(n,m),m.i("ax.E"))
k=a2.a_J(a3,a5,o,b2)
j=a2.a_K(a3,a6.aT4(l),l,b2,k)
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
a0.seY(v.mT(0,new B.N(n,m,e,d)))}else{a0.r=(r?C.N:w).gu(0)
a0.seY(null)}$.ar()
a1=new B.n1(C.dI,C.bp,C.ej,C.eF,C.e7).e3()
n=B.dT(new B.N(0,0,t,s))
m=$.bZ.b
if(m===$.bZ)B.T(B.vZ(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e3()
n=j.e
a4.drawPath((n==null?j.e=new B.n2(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aUJ(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_P(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fZ)&&t.$2(q,e)){p=this.fg(q.a,w,f)
o=this.dM(q.b,w,f)
n.$4(q,p/v*100,e,r).afj(s,q,new B.t(p,o))}}},
aUQ(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fX(b3,new A.aNQ())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.L)(b3),++o){n=b3[o]
m=n.a
l=b1.a_P(m,w,b4)
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
a1=Math.min(s,Math.max(r,B.kK(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kK(q.$2(m,k))))
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
b0=B.lm(a3,a5)
if(a6!=null){f.r=C.J.gu(0)
f.seY(a6.mT(0,b0))}else{if(a4==null)a4=C.N
f.r=a4.gu(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c8(f.r)
f.r=B.aJ(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gu(0)}b2.En(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.rY(d.a))
f.afj(t,j,new B.t(h,g))}}},
a_K(d,e,f,g,h){var w=this.akX(d,e,f,g,h)
return w},
a_J(d,e,f,g){return this.a_K(d,e,f,g,null)},
akX(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ct($.ar().r,C.ao,null,null,B.a([],x.v)):a5,f=J.Q(a3),e=f.gq(a3),d=i.fg(f.h(a3,0).a,a1,a4),a0=i.dM(f.h(a3,0).b,a1,a4)
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
s=new B.Ne(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_L(d,e,f,g,h,i){var w=this,v=B.O3(f),u=J.Q(g),t=w.fg(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aC(new B.cA(t,s))
t=w.fg(u.h(g,0).a,d,h)
v.aC(new B.cA(t,s))
v.aC(new B.cA(w.fg(u.h(g,0).a,d,h),w.dM(u.h(g,0).b,d,h)))
v.aC(new B.pH())
return v},
akW(d,e,f,g,h){return this.a_L(d,e,f,g,h,!1)},
a_I(d,e,f,g,h,i){var w=this,v=B.O3(f),u=J.Q(g),t=w.fg(u.h(g,u.gq(g)-1).a,d,h)
v.aC(new B.cA(t,0))
t=w.fg(u.h(g,0).a,d,h)
v.aC(new B.cA(t,0))
v.aC(new B.cA(w.fg(u.h(g,0).a,d,h),w.dM(u.h(g,0).b,d,h)))
v.aC(new B.pH())
return v},
akV(d,e,f,g,h){return this.a_I(d,e,f,g,h,!1)},
aUH(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bFR(s,q.b,q.c,new B.N(v,u,t,w.b))
d.a.i2(e,r.r)},
aUB(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bFR(s,q.b,q.c,new B.N(v,0,u,t))
d.a.i2(e,r.r)},
aUF(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.O5(B.O3(e),!1,B.a([],x.I)).t())return
u=this.f
u===$&&B.b()
u.d=f.at?C.iK:C.ej
u.e=C.eF
u.r=v.gu(0)
u.seY(null)
u.c=f.x
u.r=v.gu(0)
$.lQ()
u.z=new B.A5(C.aA,w.c*0.57735+0.5)
d.a.i2(A.aE8(e,f.cy).eg(w.b),this.f)},
aUD(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.b()
q.d=f.at?C.iK:C.ej
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
A.bFR(t,f.r,f.w,new B.N(q,w,v,u))
t.z=null
t.c=f.x
A.c3h(t)
d.a.i2(A.aE8(e,f.cy),s.f)},
aUO(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.a([],x.eg),b1=b8.a,b2=A.bT5(b1),b3=J.Q(b2)
if(b3.gq(b2)!==b1.length)throw B.h(B.e6("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lQ().a0g(b4,u.b)
s=u.a
r=w.k(0,C.ja)?new B.kF(1):w
q=new B.tX(new B.fA(s,a8,a8,C.bd,a8,a8,a8,a8,a8,a8,t),C.bl,C.z,r,a8,a8,a8,a8,C.bt,a8)
q.ahG(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.L)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbW(w)}b3=a7.fg(b7.a,a9,b9)
t=a7.dM(b7.b,a9,b9)
l=p+C.eR.gey()
k=o+(w-1)*4+(C.eR.gd5(0)+C.eR.gd8(0))
j=t-k-16
i=a7.a0h(b3,l,D.ye,0)
b3=i+l
w=j+k
h=new B.b4(4,4)
g=B.GY(new B.N(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.b()
t=A.bT4(f)
b1.r=t.gu(t)
t=b3-i
w-=j
b1=$.lQ().Lm(new B.I(t,w),0).b
d=new B.t(0,b1)
a0=new B.t(g.a,g.b)
a1=$.lQ().Lm(new B.I(t,w),0)
if(!C.L.k(0,C.L)){s=a7.Q
s===$&&B.b()
s.r=C.J.gu(0)
s.c=0}b5.Xe(0,new A.aNO(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.L)(b0),++n){q=b0[n]
a5=A.c6_(q.r,q.w)
A:{if(D.EW===a5){a6=a3
break A}if(D.EX===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Xe(0,new A.aNP(b5,q,new B.t(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbW(a6)+4}},
a_P(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fg(v[0].a,e,f)
return this.fg(v[v.length-1].a,e,f)-w},
XT(d,e,f){var w,v,u,t=B.a([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.alo(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fX(t,new A.aNR())
return t.length===0?null:t},
alo(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.a([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
if(q.k(0,D.fZ))continue
p=u.$2(e,new B.t(this.fg(q.a,d,h),this.dM(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qE(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.w0.prototype={}
A.a9b.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.aNN()
t.a2p()
$.ar()
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
t=new A.adj(this.d,v,u,t,d,C.bd,new B.bw(),B.aO(x.j))
t.bj()
t.a_8(v.cx)
t.agQ()
return t},
by(d,e){e.sip(0,this.d)
e.sZT(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.A=d
e.bd()}}
A.adj.prototype={
sip(d,e){if(this.aG.k(0,e))return
this.aG=e
this.bd()},
sZT(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1Y(d.cx)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aP(d,e){var w,v,u=this,t=d.gdC(0),s=t.a
J.bj(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.h1.ih(w,new A.a3A(t,v),new A.wi(u.aG,u.i9,u.d3,x.C))
s.restore()},
a09(d){var w=this,v=w.gC(0)
return new A.PL(w.h1.XT(d,v,new A.wi(w.aG,w.i9,w.d3,x.C)))}}
A.OO.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a3A.prototype={
aRW(d){this.a.a.clipRect(B.dT(d),$.mS()[1],!0)
return null},
afr(d,e){d.aP(this.a,e)},
Xe(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bj(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lQ()
s.ZR(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
En(d,e,f,g){var w=new B.ct($.ar().r,C.ao,null,null,B.a([],x.v))
w.aC(new B.fm(d.a,d.b))
w.aC(new B.cA(e.a,e.b))
this.a.i2(A.aE8(w,g),f)}}
A.A1.prototype={
gbu(){return[this.a]}}
A.aph.prototype={}
A.a3K.prototype={}
A.b56.prototype={
Lm(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.t((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aZI(d,e){var w,v,u,t,s
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
aZJ(d,e){var w,v
if(d==null)return D.a12
w=d.b
v=e/2
return d.aT7(w>v?v:w)},
PA(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b1Q(w)},
b1Q(d){if(d<1)return this.aLK(d)
return this.a9I(d)},
aLK(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a9I(d*q)/q},
a9I(d){var w,v=C.f.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
alc(d){if(d>=1)return 1
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
a0g(d,e){var w,v,u=d.M(x.f0)
if(u==null)u=C.jg
w=e.a?u.w.c8(e):e
v=B.b8(d,C.w5)
v=v==null?null:v.ay
return v===!0?w.c8(C.mM):w},
al3(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qG)","D(pV)","G(G,pV)","D(eI)","~(w,fW)","G(ei,w)","vu(z)","G(G,qG)","bW(G,u_)","pW(G)","U<~>()","w(qE,qE)","G(w4)","JC(ou)","qG(@)","w4(@)","rs(z)","x1(@)","Ja(C,bM)","Kz(ox)","Jw(ov)","DA(@)","ei(G)","vv(dQ<vv>)","a6(G,u_)","Fa(dQ<aIt>)","m4(wT<m4>)","pV(@)","G(x1)","xk(C,bM)","BT(z)","~()","U<ox>(c6<ox>)","~(hE,Mf?)","yf(@)","G(iy)","D(fW)","~(w,iy)","~(@)","k4(oc)","c(oc)","k4(bC<w,G>)","k4(G)","oc(k4)","~(hE,PL?)","ei(ei)","U<ou>(c6<ou>)","zX(@)","U<ov>(c6<ov>)","u1(w)","vw(eI,G,ei,w)","rZ(nm)","D(ei)","w(w,w,G)","G(fW)","~(xm)","z3(ex<C?>)","fW(fW,fW,G)","iy(iy,iy,G)","mY(mY,mY,G)","DT?(fW,w,iy,w)","F(fW)","c(G,u_)","eI(eI,eI,G)","D(G)","nj(nj,nj,G)","nI(nI,nI,G)","l4(l4,l4,G)","ly(ly,ly,G)","i(l4)","i(ly)","ei(ei,ei,G)","mZ(mZ,mZ,G)","vw(eI,G,ei,w{size:G?})","D(eI,ei)","G(t,t)","v<u1>(ei,v<w>)","xp(C,bM)","v<rZ>(v<nm>)","F(nm)","w(w0,w0)"])
A.aIo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cn(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.aj(k==null?"":k)
w=l.h(0,"booking_date")
w=B.dh(J.aj(w==null?"":w))
if(w==null)w=B.bs(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.aj(v==null?"":v)
u=l.h(0,"account_name")
u=J.aj(u==null?"":u)
t=l.h(0,"direction")
t=J.aj(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.aj(s)
r=A.bzZ(l.h(0,"amount_net"))
q=A.bzZ(l.h(0,"amount_tax"))
p=A.bzZ(l.h(0,"amount_gross"))
o=A.bzZ(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.aj(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.aj(m)
l=l.h(0,"source_account_code")
return new A.pV(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.aj(l))},
$S:z+27}
A.aIp.prototype={
$1(d){var w=B.cn(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qG(J.aj(v==null?"":v),A.pp(w.h(0,"revenue_net")),A.pp(w.h(0,"expense_net")),A.pp(w.h(0,"result_net")))},
$S:z+14}
A.aIq.prototype={
$1(d){var w,v,u,t=B.cn(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.aj(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.pp(t.h(0,"gross"))
u=B.b1(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.w4(s,r,w,v,u,A.pp(t.h(0,"avg_basket")))},
$S:z+15}
A.aIr.prototype={
$1(d){var w,v=B.cn(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.aj(t==null?"unbekannt":t)
w=B.b1(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.x1(u,t,w,A.pp(v.h(0,"gross")))},
$S:z+17}
A.aIK.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.Q(d)
v=w.h(d,"code")
v=J.aj(v==null?"":v)
u=w.h(d,"name")
u=J.aj(u==null?"":u)
t=w.h(d,"direction")
return new A.DA(v,u,J.aj(t==null?"expense":t),A.uL(w.h(d,"net")),A.uL(w.h(d,"tax")),A.uL(w.h(d,"gross")))},
$S:z+21}
A.bAP.prototype={
$1(d){return new A.vv(d.al($.bx(),x.A))},
$S:z+23}
A.bAQ.prototype={
$1(d){return new A.Fa(d.al($.bXO(),x.D))},
$S:z+25}
A.bCO.prototype={
$1(d){return E.aIs()},
$S:z+26}
A.bAR.prototype={
$1(d){var w=d.al($.r7(),x.P)
return d.al($.a21(),x.a).GL(w)},
$S:z+32}
A.bAN.prototype={
$1(d){var w=d.al($.r7(),x.P)
return d.al($.a21(),x.a).Gw(w)},
$S:z+46}
A.bAO.prototype={
$1(d){var w=d.al($.r7(),x.P)
return d.al($.a21(),x.a).GG(w)},
$S:z+48}
A.bAM.prototype={
$1(d){return this.akM(d)},
akM(d){var w=0,v=B.p(x.h),u,t,s,r,q
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
A.aIn.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.az(0,$.a21(),x.a).pN(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.aIm.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.az(0,$.a21(),x.a).Mq(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.bgy.prototype={
$0(){var w=0,v=B.p(x.H),u,t=this,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=t.a.gbp()
r=$.bDK()
if(s.e==null)B.T(B.Z(y.b))
s.gck().c2(r)
u=null
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$0,v)},
$S:2}
A.bgt.prototype={
$1(d){var w=this.a
return w.F(new A.bgs(w,d))},
$S:z+55}
A.bgs.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bgu.prototype={
$0(){var w=this.a
return w.F(new A.bgr(w))},
$S:0}
A.bgr.prototype={
$0(){return this.a.x=null},
$S:0}
A.bgx.prototype={
$0(){return F.iz},
$S:80}
A.bgw.prototype={
$2(d,e){return new A.xp("Buchungen konnten nicht geladen werden: "+B.e(d),C.R,F.lt,null)},
$S:z+77}
A.bgv.prototype={
$1(d){return new A.JC(d,this.a.atV(d.b),null)},
$S:z+13}
A.bgq.prototype={
$1(d){var w=this.a
if(w.gTg()!=null&&d.c!==w.gTg())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bgm.prototype={
$0(){return this.a.e.$1(D.Bw)},
$S:0}
A.bgn.prototype={
$0(){return this.a.e.$1(D.a_V)},
$S:0}
A.bgo.prototype={
$0(){return this.a.e.$1(D.a_W)},
$S:0}
A.bgp.prototype={
$0(){return this.a.e.$1(D.a_X)},
$S:0}
A.bl2.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bl3.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bl4.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bl5.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bl6.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bl7.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bl8.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aII.prototype={
$0(){var w=0,v=B.p(x.H),u,t=this,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bDL()
if(s.e==null)B.T(B.Z(y.b))
s.gck().c2(r)
u=null
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$0,v)},
$S:2}
A.aIz.prototype={
$0(){return this.a.Kg(this.b,this.c)},
$S:0}
A.aIA.prototype={
$0(){return this.a.BY(this.b,this.c)},
$S:0}
A.aIB.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dE(B.dz(new A.aIy(),null,w),w)},
$S:0}
A.aIy.prototype={
$1(d){return F.DP},
$S:z+16}
A.aIC.prototype={
$0(){return B.q0(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aID.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dE(B.dz(new A.aIx(),null,w),w)},
$S:0}
A.aIx.prototype={
$1(d){return D.aaJ},
$S:z+6}
A.aIE.prototype={
$0(){var w=this
return w.a.BZ(w.b,w.c,w.d)},
$S:0}
A.aIH.prototype={
$0(){return F.iz},
$S:80}
A.aIG.prototype={
$2(d,e){return new A.Ja(B.e(d),null)},
$S:z+18}
A.aIF.prototype={
$1(d){return new A.Kz(d,null)},
$S:z+19}
A.aIw.prototype={
$1(d){var w=null,v=this.a,u=$.cI()
v=B.d("Die Finanzauswertung f\xfcr "+u.a3(v.a)+" \u2013 "+u.a3(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.fj(B.a([B.cv(C.bc,w,w,new A.aIu(u),w,w),B.d1(F.kr,new A.aIv(u),B.dL(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mO)},
$S:44}
A.aIu.prototype={
$0(){B.aC(this.a,!1).bt(!1)
return null},
$S:0}
A.aIv.prototype={
$0(){B.aC(this.a,!1).bt(!0)
return null},
$S:0}
A.bot.prototype={
$0(){var w=this.a.az(0,$.r7().ghS(),x.V),v=E.aIs()
w.uA(0,v)
return v},
$S:0}
A.bou.prototype={
$0(){var w=this.a.az(0,$.r7().ghS(),x.V),v=new B.aT(Date.now(),0,!1),u=new E.m4(B.bs(B.aS(v),1,1,0,0,0,0),v)
w.uA(0,u)
return u},
$S:0}
A.bov.prototype={
$0(){return this.a.JA(this.b,this.c)},
$S:0}
A.bos.prototype={
$2(d,e){return new B.p6(B.X(d).aSu(B.X(d).ax.aTm(C.h,C.n)),e,null)},
$S:1034}
A.bvp.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cx(),p=A.Pw(!1,C.lx,"Umsatz 7 %",q.a3(r.a),u),o=A.Pw(!1,C.lx,"Umsatz 19 %",q.a3(r.b),u),n=A.Pw(!0,D.acx,"Umsatz netto",q.a3(r.c),u),m=r.d
m=A.Pw(!1,D.acw,"Aufwand",E.bHU(m,E.bAW(t,"",m)),E.bSP(t,E.bAW(t,"",m)))
w=r.e
v=q.a3(w)
return E.aKW(1.7,B.a([p,o,n,m,A.Pw(!0,C.lu,"Ergebnis",v,w<0?C.R:C.aj),A.Pw(!1,C.fC,"USt-Saldo",q.a3(r.f-r.r),u)],x.p),s,12,12,C.ix,!0)},
$S:137}
A.bvq.prototype={
$0(){var w=x.z
return B.aC(this.a,!1).dE(B.dz(new A.bvo(this.b),null,w),w)},
$S:0}
A.bvo.prototype={
$1(d){return new A.vu(this.a.a,null)},
$S:z+6}
A.aNx.prototype={
$0(){return D.ay5},
$S:80}
A.aNw.prototype={
$2(d,e){var w=null
return B.b_(C.R,B.d("KPIs konnten nicht geladen werden: "+B.e(d),w,w,w,w,B.r(C.h,13,C.j),w,w,w),C.fq,w,C.w,w,w,3)},
$S:161}
A.aNv.prototype={
$1(d){return new A.Jw(d,null)},
$S:z+20}
A.bkD.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cx(),i=j.a3(k.c),h=l.w,g=l.d,f=B.al(g).i("ag<1,G>"),e=f.i("ax.E"),d=B.S(new B.ag(g,new A.bks(),f),e)
i=A.jY(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a3(r.b)
w=B.S(new B.ag(g,new A.bkt(),f),e)
d=A.jY(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a3(k.e)
w=B.S(new B.ag(g,new A.bku(),f),e)
k=A.jY(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aa(h.b,1)
v=B.S(new B.ag(g,new A.bkv(),f),e)
w=A.jY(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aa(h.a,1)
u=B.S(new B.ag(g,new A.bkw(),f),e)
v=A.jY(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aa(r.c,1)
t=B.S(new B.ag(g,new A.bkx(),f),e)
u=A.jY(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aa(h.c,1)
s=B.S(new B.ag(g,new A.bky(),f),e)
t=A.jY(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a3(h.d)
s=B.S(new B.ag(g,new A.bkz(),f),e)
h=A.jY(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a3(l.r.d)
m=B.S(new B.ag(g,new A.bkA(m),f),e)
m=A.jY(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a3(l)
l=B.S(new B.ag(g,new A.bkB(l),f),e)
l=A.jY(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aa(j,1)
j=B.S(new B.ag(g,new A.bkC(j),f),e)
return E.aKW(n,B.a([i,d,k,w,v,u,t,h,m,l,A.jY(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ix,!0)},
$S:137}
A.bks.prototype={
$1(d){return d.b},
$S:z+0}
A.bkt.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bku.prototype={
$1(d){return d.d},
$S:z+0}
A.bkv.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bkw.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bkx.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bky.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bkz.prototype={
$1(d){return d.d},
$S:z+0}
A.bkA.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bkB.prototype={
$1(d){return this.a},
$S:z+0}
A.bkC.prototype={
$1(d){return this.a},
$S:z+0}
A.bkE.prototype={
$0(){return A.bHP(this.b,1.45,new A.Vw(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bkF.prototype={
$0(){return A.bHP(this.b,1.6,new A.VN(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bzU.prototype={
$1(d){var w=this,v=null,u=B.aq(16),t=x.p,s=B.a([B.a9(B.a([B.ak(B.d(w.a,v,v,v,v,B.bE(C.h,18,C.r),v,v,v),1),B.f_(v,v,D.afe,v,v,new A.bzT(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.e,C.i,0,v,v)],t)
C.b.H(s,B.a([B.d(w.b,v,v,v,v,B.r(C.l,12,C.aD),v,v,v),C.D],t))
s.push(C.t)
s.push(B.bP(new B.mX(w.c,w.d,v),v,17976931348623157e292))
return B.NF(v,C.q,new B.aa(C.aq,B.a1(s,C.x,C.e,C.I),v),v,v,v,C.fy,C.mq,v,new B.d7(u,C.L),v)},
$S:1035}
A.bzT.prototype={
$0(){return B.aC(this.a,!1).eV()},
$S:0}
A.bkG.prototype={
$0(){var w=this.a,v=B.ah(w.c,"\xad",""),u=B.a([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bHP(this.b,2.4,new A.a_c(w.w,w.y,w.z,null),C.b.bX(u," \xb7 "),v)
return null},
$S:0}
A.bum.prototype={
$2(d,e){return d<e?d:e},
$S:48}
A.bun.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.buo.prototype={
$1(d){return A.aNI(null,1.4,null,C.R,0.35,D.aky,D.EN,null,!1,!1,!1,!1,D.Gn,!1,10,D.Zb,!0,C.lO,B.a([new A.eI(0,d),new A.eI(this.a,d)],x.U))},
$S:z+22}
A.b9z.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b9B.prototype={
$2(d,e){var w=null
return B.d(this.a.aN6(d),w,w,w,w,B.r(C.l,10,C.C),w,w,w)},
$S:z+24}
A.b9C.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vz
return new B.aa(C.le,B.d(C.c.cR(this.a[v].a,5),w,w,w,w,B.r(C.l,9,C.C),w,w,w),w)},
$S:z+8}
A.b9A.prototype={
$1(d){return D.aaO},
$S:z+9}
A.baC.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.baD.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.baE.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.baF.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vz
return new B.aa(C.le,B.d(this.a[v],w,w,w,w,B.r(C.h,12,C.r),w,w,w),w)},
$S:z+8}
A.blm.prototype={
$1(d){return d.d},
$S:z+12}
A.bln.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.bwK.prototype={
$1(d){return d.d},
$S:z+28}
A.bwL.prototype={
$2(d,e){return d>e?d:e},
$S:48}
A.b7t.prototype={
$0(){return D.ayd},
$S:80}
A.b7s.prototype={
$2(d,e){return new A.xk("Bilanzdaten nicht verf\xfcgbar: "+B.e(d),null)},
$S:z+29}
A.b7r.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.b_(m,B.a1(B.a([B.d("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.r(C.h,14,C.C),m,m,m),C.D,B.d("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.r(C.l,12.5,C.j),m,m,m),C.t,B.jk(C.c9,B.a([B.ew(C.yM,D.aNd,new A.b7l(w,v),m),B.ew(D.aeM,D.aLV,new A.b7m(w,v),m)],u),C.d3,8,8)],u),C.x,C.e,C.i),C.a5,m,C.w,m,m,3)}w=new A.b7u(d)
t=C.b.f1(n.a.e.d,0,new A.b7n())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jD(new A.b7o(new A.b7v(w),r,w,s))
v=J.Q(d)
u=B.e(v.h(d,"as_of"))
v=J.f(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a1(B.a([w,C.D,B.a9(B.a([B.ak(B.d("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.r(C.l,11,C.j),m,m,m),1),B.lx(D.agf,D.aMl,new A.b7p(q,p),m),B.lx(D.afK,D.aM3,new A.b7q(q,p,d),m)],o),C.k,m,C.e,C.i,0,m,m)],o),C.ac,C.e,C.i)},
$S:226}
A.b7l.prototype={
$0(){return A.ayf(this.a,this.b,null)},
$S:0}
A.b7m.prototype={
$0(){return A.ayc(this.a,this.b)},
$S:0}
A.b7u.prototype={
$1(d){var w=B.b1(J.J(this.a,d))
return w==null?null:w},
$S:1036}
A.b7v.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aa(v,1)
w=B.ah(w,".",",")+" %"}return w},
$S:29}
A.b7n.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b7o.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jY(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ih,o.$1("liquidity1_pct")),m=A.jY(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ih,o.$1("liquidity2_pct")),l=A.jY(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ih,o.$1("liquidity3_pct"))
o=A.jY(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ih,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aa(w,1)
w=B.ah(w,".",",")+" %"}w=A.jY(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ih,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cx()
v=u.a3(v)
return E.aKW(p,B.a([n,m,l,o,w,A.jY(s,s,!1,"Bilanzsumme",!1,"EK "+u.a3(t.d),s,s,s,C.ih,v)],x.p),q,12,12,C.ix,!0)},
$S:137}
A.b7p.prototype={
$0(){return A.ayc(this.a,this.b)},
$S:0}
A.b7q.prototype={
$0(){return A.ayf(this.a,this.b,this.c)},
$S:0}
A.bzS.prototype={
$1(d){return new A.BT(this.a,new A.bzR(this.b),this.c,null)},
$S:z+30}
A.bzR.prototype={
$0(){var w=this.a,v=$.bDJ()
if(w.e==null)B.T(B.Z(y.b))
w.gck().c2(v)},
$S:0}
A.b7f.prototype={
$0(){},
$S:0}
A.b7g.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b7h.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b7j.prototype={
$0(){var w=0,v=B.p(x.H),u=this,t,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.b()
w=2
return B.j(B.lN(u.b,B.bs(2024,1,1,0,0,0,0),null,r,new B.aT(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.F(new A.b7i(s,t))
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.b7i.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b7k.prototype={
$0(){return B.aC(this.a,!1).eV()},
$S:0}
A.b7w.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ad(0)
t.m(0,v,B.a([u],x.t))},
$S:0}
A.b7x.prototype={
$1(d){return new A.yf(x.B.a(d),this.a.a.r)},
$S:z+34}
A.aAX.prototype={
$1(d){return d.e},
$S:z+35}
A.aAY.prototype={
$2(d,e){return d+e},
$S:48}
A.aB_.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.aB1.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdv(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.aB2.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.b()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.b()
w.eT(t,s)
u.afr(v.d,v.e)},
$S:0}
A.aAF.prototype={
$1(d){return 0},
$S:1037}
A.aAE.prototype={
$2(d,e){return B.f4(C.c0,this.a.and(e),C.m,C.br,null)},
$S:1038}
A.b1B.prototype={
$1(d){return d.a},
$S:z+39}
A.b1C.prototype={
$1(d){return d.b},
$S:z+40}
A.b1D.prototype={
$1(d){return new A.k4(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b1E.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.n5||v===D.dX))t=1-t
return new A.k4(d,t*w.d)},
$S:z+42}
A.b1F.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goK(),p=d.a
r.goK()
r=$.lQ()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aa(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aa(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aa(v/1000,1)
t="K"}else{u=C.d.aa(v,r.alc(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.oc(d,q.c.b.$2(p,new A.u_(u+t,s.e)))},
$S:z+43}
A.aXI.prototype={
$1(d){this.a.la(new A.a7q(d))},
$S:170}
A.aXJ.prototype={
$1(d){this.a.la(new A.a7r(d))},
$S:47}
A.aXK.prototype={
$1(d){this.a.la(new A.a7s(d))},
$S:31}
A.aXL.prototype={
$0(){this.a.la(D.a2S)},
$S:0}
A.aXM.prototype={
$1(d){this.a.la(new A.Ol())},
$S:49}
A.aXN.prototype={
$1(d){this.a.la(new A.a7v(d))},
$S:46}
A.aXO.prototype={
$0(){this.a.la(D.a2T)},
$S:0}
A.aXP.prototype={
$1(d){this.a.la(new A.Oo(d))},
$S:90}
A.aXQ.prototype={
$1(d){this.a.la(new A.a7p(d))},
$S:173}
A.aXR.prototype={
$1(d){this.a.la(new A.a7o(d))},
$S:174}
A.aXS.prototype={
$1(d){return this.a.la(new A.Oj(d))},
$S:175}
A.aXT.prototype={
$1(d){return this.a.la(new A.a7t(d))},
$S:72}
A.aXU.prototype={
$1(d){return this.a.la(new A.Om(d))},
$S:65}
A.bkS.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aT2(w==null?B.a([],x.t):w)},
$S:z+45}
A.bkQ.prototype={
$0(){var w=this.a
C.b.ad(w.cy)
w.db.ad(0)},
$S:0}
A.bkR.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.S(q,x.dw)
C.b.fX(w,new A.bkP())
v=this.a
u=v.db
u.ad(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.a([r.e],t))}q=v.cy
C.b.ad(q)
q.push(new A.HG(w))},
$S:0}
A.bkP.prototype={
$2(d,e){return C.d.cE(e.b,d.b)},
$S:z+11}
A.bkT.prototype={
$1(d){return new A.zX(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aNJ.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.bAD.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bMI(t?A.bHz(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.u1(w,new A.z7(!0,A.bIr(),new A.bAC(v)))},
$S:z+49}
A.bAC.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c0O(A.bHz(d,e,f),w,A.c9O(d,e,f))},
$S:z+50}
A.bAA.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.jb(v,v,u==null?D.dA:u,v,v,v,v,v,v,v,v,14,v,v,C.C,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rZ(C.d.j(d.b),w)},
$S:z+51}
A.aNL.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aNM.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.aNQ.prototype={
$2(d,e){return C.d.cE(e.c.b,d.c.b)},
$S:z+80}
A.aNO.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.b()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.b()
w.eT(v,u)},
$S:0}
A.aNP.prototype={
$0(){this.a.afr(this.b,this.c)},
$S:0}
A.aNR.prototype={
$2(d,e){return C.d.cE(d.w,e.w)},
$S:z+11}
A.aAQ.prototype={
$1(d){return d.gdv(0)},
$S:z+54}
A.aAR.prototype={
$2(d,e){return d+e},
$S:48}
A.aAU.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j2(v,B.al(v).i("j2<1>")).aE(0,new A.aAV(w,this.a/(u+1),this.c))},
$S:0}
A.aAV.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdv(0)/2
this.c[d]=v
w.a=v+e.gdv(0)/2},
$S:z+4}
A.aAS.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdv(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdv(0)/2},
$S:z+4}
A.aAT.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdv(0)/2
this.c[d]=u
u+=e.gdv(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aKV.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aE9.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.M9.prototype
w.a1d=w.ih
w.anw=w.aUK
w.anx=w.afk
w=A.V4.prototype
w.aq8=w.l
w=A.Mi.prototype
w.a1e=w.ih
w=A.He.prototype
w.a1Y=w.a_8})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cdq","c0K",56)
var q
v(q=A.V6.prototype,"gaGP","aGQ",31)
v(q,"gaFM","IQ",10)
v(q,"gaGy","J0",10)
u(A.V7.prototype,"gauc","aud",33)
t(A,"ccc",3,null,["$3"],["bZ1"],57,0)
t(A,"ccd",3,null,["$3"],["bZ2"],58,0)
t(A,"cce",3,null,["$3"],["bZ3"],59,0)
t(A,"ccg",4,null,["$4"],["cd3"],60,0)
w(A,"ccf","cd2",61)
s(A,"bHT","cd4",62)
t(A,"cc7",3,null,["$3"],["c0P"],63,0)
w(A,"a1t","cfu",64)
w(A,"ayi","cd7",9)
t(A,"cc9",3,null,["$3"],["c1B"],65,0)
t(A,"ccb",3,null,["$3"],["c6T"],66,0)
t(A,"cc8",3,null,["$3"],["c1A"],67,0)
t(A,"cca",3,null,["$3"],["c6S"],68,0)
w(A,"cmM","c1z",69)
w(A,"cmN","c6R",70)
r(A.a_0.prototype,"ga5M","aA3",38)
u(A.XJ.prototype,"gaBk","aBl",44)
t(A,"cej",3,null,["$3"],["c22"],71,0)
t(A,"cei",3,null,["$3"],["bZ4"],72,0)
w(A,"cem","cfv",3)
t(A,"bTu",4,null,["$5$size","$4"],["bRP",function(d,e,f,g){return A.bRP(d,e,f,g,null)}],73,0)
s(A,"bIr","cft",74)
s(A,"bTv","cbU",75)
s(A,"bTy","cda",76)
s(A,"bTx","cd6",5)
s(A,"bTw","cd5",5)
w(A,"cel","bT5",78)
w(A,"cek","bT4",79)
t(A,"a1A",3,null,["$3"],["ceh"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.A,[A.a8Z,A.an2,A.xg,A.JC,A.ak2,A.xp,A.aiA,A.aog,A.K8,A.Kz,A.aiy,A.Ja,A.Jw,A.anx,A.aoU,A.Wo,A.a_c,A.Vw,A.VN,A.apr,A.alo,A.D0,A.avx,A.xk,A.Ma,A.Bf])
u(B.C,[A.vv,A.Fa,A.bp,A.ajJ,A.ajz,A.ajB,A.ajC,A.ajr,A.ang,A.ajF,A.ajD,A.aBb,A.avB,A.aAZ,A.ajA,A.Mi,A.a82,A.u_,A.atU,A.atT,A.ajq,A.anf,A.eI,A.anc,A.ane,A.arU,A.ao7,A.awm,A.and,A.amK,A.anb,A.aAD,A.bkM,A.aAG,A.ajn,A.oc,A.an8,A.an9,A.wi,A.hE,A.ap4,A.ap7,A.ajw,A.ajL,A.ajx,A.ana,A.apa,A.ap8,A.avA,A.atS,A.aNK,A.ap6,A.w0,A.a3A,A.aph,A.a3K,A.b56])
u(B.vr,[A.pV,A.ou,A.qG,A.w4,A.x1,A.aDx,A.aEI,A.ov,A.DA,A.ox])
u(B.oh,[A.aIo,A.aIp,A.aIq,A.aIr,A.aIK,A.bAP,A.bAQ,A.bCO,A.bAR,A.bAN,A.bAO,A.bAM,A.bgt,A.bgv,A.bgq,A.bl2,A.bl4,A.bl6,A.bl8,A.aIy,A.aIx,A.aIF,A.aIw,A.bvo,A.aNv,A.bks,A.bkt,A.bku,A.bkv,A.bkw,A.bkx,A.bky,A.bkz,A.bkA,A.bkB,A.bkC,A.bzU,A.buo,A.b9A,A.baC,A.baD,A.blm,A.bwK,A.b7r,A.b7u,A.b7v,A.bzS,A.b7x,A.aAX,A.aB_,A.aAF,A.b1B,A.b1C,A.b1D,A.b1E,A.b1F,A.aXI,A.aXJ,A.aXK,A.aXM,A.aXN,A.aXP,A.aXQ,A.aXR,A.aXS,A.aXT,A.aXU,A.bkS,A.bkT,A.aNJ,A.bAD,A.bAC,A.bAA,A.aNL,A.aNM,A.aAQ,A.aE9])
t(A.z3,B.fR)
u(B.yv,[A.aIn,A.aIm,A.bgy,A.bgs,A.bgu,A.bgr,A.bgx,A.bgm,A.bgn,A.bgo,A.bgp,A.aII,A.aIz,A.aIA,A.aIB,A.aIC,A.aID,A.aIE,A.aIH,A.aIu,A.aIv,A.bot,A.bou,A.bov,A.bvq,A.aNx,A.bkE,A.bkF,A.bzT,A.bkG,A.b7t,A.b7l,A.b7m,A.b7p,A.b7q,A.bzR,A.b7f,A.b7g,A.b7h,A.b7j,A.b7i,A.b7k,A.b7w,A.aB2,A.aXL,A.aXO,A.bkQ,A.bkR,A.aNO,A.aNP,A.aAU])
t(A.vu,B.b7)
u(B.J9,[A.xm,A.aAO,A.ag_,A.DS,A.aHD,A.aNy,A.OO])
t(A.an3,B.vi)
u(B.yw,[A.bgw,A.bl3,A.bl5,A.bl7,A.aIG,A.bos,A.bvp,A.aNw,A.bkD,A.bum,A.bun,A.b9z,A.b9B,A.b9C,A.baE,A.baF,A.bln,A.bwL,A.b7s,A.b7n,A.b7o,A.aAY,A.aB1,A.aAE,A.bkP,A.aNQ,A.aNR,A.aAR,A.aAV,A.aAS,A.aAT,A.aKV])
u(B.yD,[A.z4,A.aqJ,A.a9_,A.ajv])
u(B.H,[A.BT,A.T1])
u(B.V,[A.V6,A.a_0])
u(B.FB,[A.Me,A.PJ])
u(B.v0,[A.V7,A.XJ])
t(A.a38,A.ajJ)
t(A.ajm,A.a38)
t(A.a2T,A.ajm)
u(A.a2T,[A.ajy,A.ap5])
t(A.od,A.ajy)
t(A.fW,A.ajz)
t(A.iy,A.ajB)
t(A.mY,A.ajC)
t(A.a3_,A.ajr)
t(A.Op,A.ang)
u(A.Op,[A.ajE,A.ap9])
t(A.a34,A.ajE)
t(A.a35,A.ajF)
t(A.DT,A.ajD)
u(A.aBb,[A.Mf,A.PL])
t(A.ag1,A.avB)
t(A.ajG,A.ag1)
t(A.a36,A.ajG)
u(B.b9,[A.yf,A.zX])
t(A.v6,A.ajA)
t(A.M9,A.Mi)
u(A.M9,[A.aB0,A.aNN])
u(B.PE,[A.a32,A.a9b])
u(B.K,[A.He,A.ajo])
u(A.He,[A.ad6,A.adj])
t(A.qw,A.atU)
t(A.aey,A.atT)
t(A.py,A.ajq)
t(A.vx,A.anf)
t(A.z8,A.anc)
t(A.pW,A.ane)
t(A.Rz,A.arU)
t(A.nj,A.ao7)
t(A.nI,A.awm)
u(A.pW,[A.ao6,A.awl])
t(A.l4,A.ao6)
t(A.ly,A.awl)
t(A.a7n,A.and)
u(A.a7n,[A.ao5,A.awk])
t(A.a8d,A.ao5)
t(A.agp,A.awk)
t(A.O9,A.amK)
t(A.vw,A.anb)
t(A.Oi,A.vw)
t(A.aez,B.fN)
t(A.ajp,A.ajo)
t(A.V4,A.ajp)
t(A.a2U,A.V4)
t(A.k4,A.ajn)
t(A.a7k,A.an8)
t(A.a7m,A.an9)
u(A.hE,[A.a7q,A.a7r,A.a7s,A.Ok,A.Ol,A.a7v,A.On,A.Oo,A.a7p,A.a7o,A.Oj,A.a7t,A.a7u,A.Om])
t(A.q9,A.ap5)
t(A.ei,A.ap4)
t(A.PK,A.ap7)
t(A.a31,A.ajw)
t(A.mZ,A.ajL)
t(A.Md,A.ajx)
t(A.z7,A.ana)
t(A.FM,A.ap9)
t(A.a9c,A.apa)
t(A.ap3,A.eI)
t(A.nm,A.ap3)
t(A.qE,A.nm)
t(A.rZ,A.ap8)
t(A.u1,A.avA)
t(A.HG,A.atS)
t(A.zY,A.ap6)
t(A.A1,A.aph)
w(A.ajr,A.bp)
w(A.ajy,A.bp)
w(A.ajz,A.bp)
w(A.ajB,A.bp)
w(A.ajC,A.bp)
w(A.ajD,A.bp)
w(A.ajE,A.bp)
w(A.ajF,A.bp)
w(A.ajG,A.bp)
w(A.ajA,A.bp)
w(A.ajm,A.bp)
w(A.ajq,A.bp)
w(A.amK,A.bp)
w(A.anb,A.bp)
w(A.anc,A.bp)
w(A.ane,A.bp)
w(A.anf,A.bp)
w(A.ao6,A.bp)
w(A.ao5,A.bp)
w(A.ao7,A.bp)
w(A.arU,A.bp)
w(A.atT,A.bp)
w(A.atU,A.bp)
w(A.avB,A.bp)
w(A.awl,A.bp)
w(A.awk,A.bp)
w(A.awm,A.bp)
w(A.ajn,A.bp)
v(A.ajo,B.aF)
w(A.ajp,B.e_)
v(A.V4,B.a6l)
w(A.ajJ,A.bp)
w(A.an8,A.bp)
w(A.an9,A.bp)
w(A.ang,A.bp)
w(A.ajw,A.bp)
w(A.ajx,A.bp)
w(A.ajL,A.bp)
w(A.ana,A.bp)
w(A.and,A.bp)
w(A.ap3,A.bp)
w(A.ap4,A.bp)
w(A.ap5,A.bp)
w(A.ap7,A.bp)
w(A.ap8,A.bp)
w(A.ap9,A.bp)
w(A.apa,A.bp)
w(A.atS,A.bp)
w(A.avA,A.bp)
w(A.ap6,A.bp)
w(A.aph,A.bp)})()
B.bwZ(b.typeUniverse,JSON.parse('{"a8Z":{"A":[],"c":[]},"Fa":{"aIt":[]},"z3":{"fR":["bm<~>"],"fR.T":"bm<~>"},"vu":{"b7":[],"H":[],"c":[]},"JC":{"A":[],"c":[]},"xp":{"A":[],"c":[]},"an3":{"V":["vu"]},"an2":{"A":[],"c":[]},"xg":{"A":[],"c":[]},"ak2":{"A":[],"c":[]},"Kz":{"A":[],"c":[]},"Ja":{"A":[],"c":[]},"z4":{"b7":[],"H":[],"c":[]},"aiA":{"A":[],"c":[]},"aog":{"A":[],"c":[]},"aqJ":{"b7":[],"H":[],"c":[]},"K8":{"A":[],"c":[]},"aiy":{"A":[],"c":[]},"Jw":{"A":[],"c":[]},"xk":{"A":[],"c":[]},"BT":{"H":[],"c":[]},"a9_":{"b7":[],"H":[],"c":[]},"anx":{"A":[],"c":[]},"aoU":{"A":[],"c":[]},"Wo":{"A":[],"c":[]},"a_c":{"A":[],"c":[]},"Vw":{"A":[],"c":[]},"VN":{"A":[],"c":[]},"apr":{"A":[],"c":[]},"alo":{"A":[],"c":[]},"D0":{"A":[],"c":[]},"avx":{"A":[],"c":[]},"ajv":{"b7":[],"H":[],"c":[]},"V6":{"V":["BT"]},"Me":{"H":[],"c":[]},"V7":{"V":["Me"]},"od":{"bp":[]},"fW":{"bp":[]},"iy":{"bp":[]},"mY":{"bp":[]},"DT":{"bp":[]},"yf":{"b9":["od"],"bf":["od"],"bf.T":"od","b9.T":"od"},"a3_":{"bp":[]},"a34":{"bp":[]},"a35":{"bp":[]},"a36":{"bp":[]},"v6":{"bp":[]},"a32":{"b3":[],"c":[]},"ad6":{"K":[],"O":[],"jG":[],"b0":[]},"pW":{"bp":[]},"nj":{"bp":[]},"nI":{"bp":[]},"l4":{"bp":[]},"ly":{"bp":[]},"vw":{"bp":[]},"a2T":{"bp":[]},"qw":{"bp":[]},"aey":{"bp":[]},"py":{"bp":[]},"vx":{"bp":[]},"z8":{"bp":[]},"ag1":{"bp":[]},"Rz":{"bp":[]},"a8d":{"bp":[]},"agp":{"bp":[]},"O9":{"bp":[]},"Oi":{"bp":[]},"Ma":{"A":[],"c":[]},"T1":{"H":[],"c":[]},"a_0":{"V":["T1"]},"k4":{"bp":[]},"aez":{"fN":[],"b3":[],"c":[]},"a2U":{"e_":["K","hF"],"K":[],"aF":["K","hF"],"O":[],"b0":[],"aF.1":"hF","e_.1":"hF","aF.0":"K"},"Bf":{"A":[],"c":[]},"a38":{"bp":[]},"a7k":{"bp":[]},"Op":{"bp":[]},"a7m":{"bp":[]},"a7q":{"hE":[]},"a7r":{"hE":[]},"a7s":{"hE":[]},"Ok":{"hE":[]},"Ol":{"hE":[]},"a7v":{"hE":[]},"On":{"hE":[]},"Oo":{"hE":[]},"a7p":{"hE":[]},"a7o":{"hE":[]},"Oj":{"hE":[]},"a7t":{"hE":[]},"a7u":{"hE":[]},"Om":{"hE":[]},"He":{"K":[],"O":[],"jG":[],"b0":[]},"PJ":{"H":[],"c":[]},"XJ":{"V":["PJ"]},"q9":{"bp":[]},"ei":{"bp":[]},"mZ":{"bp":[]},"nm":{"eI":[],"bp":[]},"qE":{"nm":[],"eI":[],"bp":[]},"rZ":{"bp":[]},"u1":{"bp":[]},"HG":{"bp":[]},"zX":{"b9":["q9"],"bf":["q9"],"bf.T":"q9","b9.T":"q9"},"PK":{"bp":[]},"a31":{"bp":[]},"Md":{"bp":[]},"z7":{"bp":[]},"a7n":{"bp":[]},"FM":{"bp":[]},"a9c":{"bp":[]},"zY":{"bp":[]},"a9b":{"b3":[],"c":[]},"adj":{"K":[],"O":[],"jG":[],"b0":[]},"A1":{"bp":[]}}'))
B.bRg(b.typeUniverse,JSON.parse('{"M9":1,"Op":1,"Mi":1,"He":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ay
return{_:w("DA"),e:w("bm<ou>"),cn:w("bm<ov>"),aN:w("bm<ox>"),fM:w("bm<a7<i,@>?>"),c:w("bm<~>"),W:w("k4"),B:w("od"),dB:w("fW"),T:w("v6"),fj:w("iy"),G:w("mY"),bO:w("mZ"),k:w("aw"),cX:w("a3K<G>"),dO:w("ve"),R:w("a8<i,@>"),j:w("hA"),bz:w("m_<aT>"),f0:w("on"),E:w("bp"),F:w("z3"),aI:w("pV"),m:w("ou"),X:w("ov"),P:w("m4"),D:w("vv"),a:w("aIt"),d:w("ox"),cw:w("eI"),L:w("hF"),o:w("dG<w,F>"),cm:w("l4"),dv:w("nj"),M:w("E<oc>"),I:w("E<bLj>"),O:w("E<fW>"),Y:w("E<iy>"),U:w("E<eI>"),K:w("E<a82>"),u:w("E<ei>"),bC:w("E<w0>"),aA:w("E<v<eI>>"),v:w("E<ek>"),r:w("E<HG>"),s:w("E<i>"),eg:w("E<tX>"),df:w("E<qE>"),p:w("E<c>"),n:w("E<G>"),t:w("E<w>"),eF:w("br<V<H>>"),Z:w("nm"),cz:w("ei"),hf:w("q9"),dj:w("zY"),fT:w("rZ"),c_:w("iC<pj<bm<~>>>"),x:w("A1<fW>"),y:w("A1<ei>"),J:w("v<w>"),ef:w("w4"),b:w("a7<i,@>"),f:w("a7<@,@>"),gj:w("ag<G,G>"),w:w("kk"),aU:w("C"),Q:w("wi<od>"),C:w("wi<q9>"),dc:w("ek"),eo:w("qm"),gJ:w("qn"),V:w("kx<m4>"),N:w("i"),A:w("nD"),bP:w("bc"),er:w("tX"),fB:w("x1"),dw:w("qE"),bY:w("u1"),cZ:w("qG"),gc:w("jg"),es:w("ly"),bN:w("nI"),l:w("c"),q:w("xF"),g4:w("is<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("w"),bn:w("yf?"),f3:w("zX?"),g:w("v<@>?"),h:w("a7<i,@>?"),fF:w("a7<@,@>?"),cK:w("C?"),aD:w("jg?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BO=new B.lT(C.n,B.ay("lT<F>"))
D.BV=new A.DS(0,"left")
D.n5=new A.DS(1,"top")
D.BW=new A.DS(2,"right")
D.dX=new A.DS(3,"bottom")
D.aCn=new A.qw(!1,A.bHT(),22,null)
D.kK=new A.py(16,null,D.aCn,!0)
D.aaP=new A.pW(C.J,null,2,null)
D.wx=new A.Md(!1,D.aaP,A.cem(),!0)
D.a0H=new A.aAO(3,"spaceEvenly")
D.a0R=new B.yj(6,"dstIn")
D.Yv=new B.b4(3,3)
D.BZ=new B.dc(D.Yv,D.Yv,C.aa,C.aa)
D.a12=new B.bo(C.J,0,C.V,-1)
D.Cy=new A.a7m()
D.a2S=new A.Ok()
D.a2T=new A.On()
D.aWh=new A.aey()
D.a8M=new B.bA(8e6)
D.apD=w([],B.ay("E<l4>"))
D.apE=w([],B.ay("E<ly>"))
D.EJ=new A.O9(D.apD,D.apE,!0)
D.aas=new B.dF("Zeitraum",!1,null)
D.aay=new B.dF("Konten (SKR 03)",!1,null)
D.ye=new A.aHD(0,"center")
D.aaJ=new A.vu(null,null)
D.aWw=new A.z7(!0,A.bIr(),A.bTu())
D.EN=new A.z7(!1,A.bIr(),A.bTu())
D.EO=new A.z8(!1,!0,null,A.ayi(),A.a1t(),!0,null,A.ayi(),A.a1t())
D.aWx=new A.z8(!0,!0,null,A.ayi(),A.a1t(),!0,null,A.ayi(),A.a1t())
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
D.aw2=new B.dG([50,D.a5g,100,D.a50,200,D.a5q,300,D.a5k,400,D.a4H,500,D.a4G,600,D.a5P,700,D.a59,800,D.a5S,900,D.a5M],x.o)
D.dA=new B.t3(D.aw2,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.o)
D.alB=w([8,4],x.t)
D.aaN=new A.pW(D.dA,null,0.4,D.alB)
D.aaO=new A.pW(C.a8,null,0.5,null)
D.fZ=new A.eI(0/0,0/0)
D.aCp=new A.qw(!0,A.bHT(),44,null)
D.n6=new A.py(16,null,D.aCp,!0)
D.aCo=new A.qw(!0,A.bHT(),30,null)
D.n7=new A.py(16,null,D.aCo,!0)
D.aaQ=new A.vx(!1,D.n6,D.n7,D.n6,D.n7)
D.aWy=new A.vx(!0,D.n6,D.n7,D.n6,D.n7)
D.aMu=new B.a6("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.abo=new B.dY(D.aMu,null,null)
D.EW=new A.OO(0,"left")
D.abz=new A.OO(1,"center")
D.EX=new A.OO(2,"right")
D.abD=new B.a5(57495,"MaterialIcons",null,!1)
D.abR=new B.a5(58040,"MaterialIcons",null,!0)
D.yw=new B.a5(58927,"MaterialIcons",null,!1)
D.acw=new B.a5(59005,"MaterialIcons",null,!0)
D.acx=new B.a5(59007,"MaterialIcons",null,!0)
D.adF=new B.a5(62589,"MaterialIcons",null,!1)
D.acS=new B.a5(61349,"MaterialIcons",null,!1)
D.aeI=new B.as(D.acS,20,C.h,null,null)
D.aeK=new B.as(F.yy,18,null,null,null)
D.aeM=new B.as(D.yw,18,null,null,null)
D.af8=new B.as(C.on,14,C.R,null,null)
D.afe=new B.as(C.ia,null,C.h,null,null)
D.aff=new B.as(C.jx,null,C.l,null,null)
D.afK=new B.as(C.jy,16,null,null,null)
D.afS=new B.as(C.yG,16,null,null,null)
D.afX=new B.as(F.lt,null,C.R,null,null)
D.ag8=new B.as(F.FD,16,null,null,null)
D.agf=new B.as(D.yw,16,null,null,null)
D.aiU=new A.a9_(null)
D.aWD=new A.aNy(0,"horizontal")
D.yU=new A.zY(0,0,0,0,!1)
D.Gn=new A.PK(0.5)
D.CE=new A.a9c()
D.aj6=new A.FM(D.CE,A.bTy(),10,A.bTv(),!0,A.bTx(),A.bTw(),!1,null,null,null)
D.aWF=new A.FM(D.CE,A.bTy(),10,A.bTv(),!0,A.bTx(),A.bTw(),!0,null,null,null)
D.aky=w([4,3],x.t)
D.aAu=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aAh=new B.aG("receivables","Forderungen (kurzfristig)")
D.aA4=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.aA1=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.azP=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.azW=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.aAo=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aAg=new B.aG("equity","Eigenkapital")
D.q9=w([D.aAu,D.aAh,D.aA4,D.aA1,D.azP,D.azW,D.aAo,D.aAg],B.ay("E<+(i,i)>"))
D.aWI=w([],x.M)
D.apq=w([],x.O)
D.apr=w([],x.Y)
D.aps=w([],B.ay("E<mY>"))
D.apt=w([],B.ay("E<mZ>"))
D.aWJ=w([],x.U)
D.aWK=w([],x.u)
D.apu=w([],x.r)
D.awI={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.U9={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zA=new B.a8(D.U9,[0,0,0,0,0,0,0,C.aW],B.ay("a8<i,C>"))
D.awF={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.avX=new B.a8(D.awF,[0,0,0,0],B.ay("a8<i,w>"))
D.awX={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.atw=new B.a8(D.awX,[0,0,0,0,null,null,null,null],B.ay("a8<i,w?>"))
D.atp=new B.a8(D.awI,[D.zA,D.zA,D.zA,C.aW,C.aW,C.aW,D.avX,D.atw],x.R)
D.atJ=new B.a8(D.U9,[0,0,0,0,0,0,0,C.bO],x.R)
D.awJ={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.atL=new B.a8(D.awJ,[8500,1200,3400,300,22e3,4200,9000,22200],B.ay("a8<i,G>"))
D.ax6={total:0,rows:1}
D.atO=new B.a8(D.ax6,[0,C.bO],x.R)
D.awE={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.avY=new B.a8(D.awE,[0,0,0,0,0,0,0,C.bO],x.R)
D.axa={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.avZ=new B.a8(D.axa,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ay("a8<i,i>"))
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
D.aw3=new B.dG([50,D.a5Y,100,D.a65,200,D.a4K,300,D.a5c,400,D.a5m,500,D.a6l,600,D.a4v,700,D.a5e,800,D.a5p,900,D.a5N],x.o)
D.TV=new B.t3(D.aw3,1,0,0.7372549019607844,0.8313725490196079,C.o)
D.a9G=new B.af(32,32,32,32)
D.ay5=new B.aa(D.a9G,C.bG,null)
D.ayd=new B.aa(C.aq,C.bG,null)
D.apF=w([],B.ay("E<nj>"))
D.apG=w([],B.ay("E<nI>"))
D.Yx=new A.Rz(D.apF,D.apG)
D.aBi=new B.eO("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aBk=new B.eO("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aBp=new B.eO("Automaten-Business","Umsatz je Automat",null,null)
D.aBt=new B.eO("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aBv=new B.eO("Top","Meistverkaufte Produkte",null,null)
D.aBy=new B.eO("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aBz=new B.eO("Kennzahlen","Rentabilit\xe4t",null,null)
D.Zb=new B.tF(C.N,C.v,0)
D.aKi=new B.a6("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aEa=new B.d9(D.aKi,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aN0=new B.a6('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aEf=new B.d9(D.aN0,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aKB=new B.a6("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aEg=new B.d9(D.aKB,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aMT=new B.a6("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aEi=new B.d9(D.aMT,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aMh=new B.a6("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aEj=new B.d9(D.aMh,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aMe=new B.a6("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aEN=new B.d9(D.aMe,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.m,null)
D.aWU=new B.W(!0,C.J,null,null,null,null,14,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKv=new B.a6("Demo",null,null,null,null,null,null,null,null,null)
D.aKO=new B.a6("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aLV=new B.a6("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aM3=new B.a6("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aMl=new B.a6("sevDesk",null,null,null,null,null,null,null,null,null)
D.aNd=new B.a6("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_v=new A.ag_(0,"auto")
D.aO_=new A.ag_(1,"top")
D.aSN=new A.xk("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aSO=new A.xk("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bw=new A.xm(0,"alle")
D.a_V=new A.xm(1,"aufwand")
D.a_W=new A.xm(2,"erloes")
D.a_X=new A.xm(3,"privat")
D.aTI=new A.xp('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.l,C.jx,null)
D.adS=new B.a5(984570,"MaterialIcons",null,!1)
D.aTJ=new A.xp("Keine Buchung passt zu dieser Auswahl.",C.l,D.adS,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cnf","bXO",()=>B.j4(new A.bAP(),x.D))
w($,"cng","a21",()=>B.j4(new A.bAQ(),x.a))
w($,"cog","r7",()=>B.bGw(new A.bCO(),x.P))
w($,"cnh","bDL",()=>C.aM.$1$1(new A.bAR(),x.d))
w($,"cnd","bDK",()=>C.aM.$1$1(new A.bAN(),x.m))
w($,"cne","bKc",()=>C.aM.$1$1(new A.bAO(),x.X))
w($,"cnc","bDJ",()=>C.aM.$1$1(new A.bAM(),x.h))
w($,"cnb","bDI",()=>B.b2r(A.cdq(),x.F,x.c))
w($,"cgh","bDf",()=>new A.aAD())
v($,"cjD","lQ",()=>new A.b56())})()};
(a=>{a["I81Z5DNlFGR5Ci8Gt1flr2ecVUY="]=a.current})($__dart_deferred_initializers__);