((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NJ(d,e,f,g,h){return new A.a65(f,g,d,h,e,null)},
a65:function a65(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uJ:function uJ(d){this.a=d},
DH:function DH(d){this.a=d},
bQe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Sd
w=x.f
v=x.N
u=x.z
t=A.aE4(B.dq(w.a(e.h(a0,"current")),v,u))
s=A.aE4(B.dq(w.a(e.h(a0,"prior_year")),v,u))
r=A.aE4(B.dq(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c6
p=J.cY(p,new A.aDN(),x.cZ)
p=B.P(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c6
o=J.cY(o,new A.aDO(),x.ef)
o=B.P(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c6
q=J.cY(q,new A.aDP(),x.j)
q=B.P(q,q.$ti.i("av.E"))
n=B.dq(w.a(e.h(a0,"customer")),v,u)
m=B.bf(n.h(0,"purchases_count"))
m=m==null?null:C.d.a_(m)
if(m==null)m=0
l=A.oX(n.h(0,"app_gross"))
k=B.bf(n.h(0,"active_customers"))
k=k==null?null:C.d.a_(k)
if(k==null)k=0
n=A.oX(n.h(0,"avg_basket"))
u=B.dq(w.a(e.h(a0,"derived")),v,u)
v=A.oX(u.h(0,"gross_margin_pct"))
e=A.oX(u.h(0,"net_margin_pct"))
w=A.oX(u.h(0,"ebitda_margin_pct"))
j=A.oX(u.h(0,"cashflow_operating"))
i=A.bpn(u.h(0,"revenue_growth_yoy_pct"))
h=A.bpn(u.h(0,"revenue_growth_mom_pct"))
g=A.bpn(u.h(0,"result_growth_yoy_pct"))
u=A.bpn(u.h(0,"result_growth_mom_pct"))
f=B.bf(J.a3(d,"days"))
f=f==null?null:C.d.a_(f)
if(f==null)f=1
return new A.o4(t,s,r,p,o,q,new A.az0(m,l,k,n),new A.aA6(v,e,w,j,i,h,g,u),f)},
oX(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iO(J.am(d))
return w==null?0:w},
bpn(d){if(d==null)return null
if(typeof d=="number")return d
return B.iO(J.am(d))},
qe:function qe(d,e,f,g){var _=this
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
wd:function wd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az0:function az0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA6:function aA6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o4:function o4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aDN:function aDN(){},
aDO:function aDO(){},
aDP:function aDP(){},
aE4(d){var w=J.Y(d),v=A.u_(w.h(d,"revenue_net_7")),u=A.u_(w.h(d,"revenue_net_19")),t=A.u_(w.h(d,"revenue_net")),s=A.u_(w.h(d,"expense_net")),r=A.u_(w.h(d,"result_net")),q=A.u_(w.h(d,"vat_collected")),p=A.u_(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.c6
w=J.cY(w,new A.aE5(),x._)
w=B.P(w,w.$ti.i("av.E"))
return new A.o5(v,u,t,s,r,q,p,w)},
u_(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iO(J.am(d))
return w==null?0:w},
Ch:function Ch(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o5:function o5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aE5:function aE5(){},
bQd(d){return new A.yb(d,new B.im(x.c_),C.dE)},
bq8:function bq8(){},
bq9:function bq9(){},
brU:function brU(){},
bqa:function bqa(){},
bq7:function bq7(){},
bq6:function bq6(){},
yb:function yb(d,e,f){this.r=d
this.a=e
this.f=f},
aDM:function aDM(d,e,f){this.a=d
this.b=e
this.c=f},
aDL:function aDL(d,e,f){this.a=d
this.b=e
this.c=f},
bQf(){return new A.yc(null)},
akI(d,e,f,g,h){return new A.akH(e,h,g,f,d,null)},
yc:function yc(d){this.a=d},
aE3:function aE3(d){this.a=d},
aDW:function aDW(d,e,f){this.a=d
this.b=e
this.c=f},
aDX:function aDX(d,e,f){this.a=d
this.b=e
this.c=f},
aDY:function aDY(d){this.a=d},
aDV:function aDV(){},
aDZ:function aDZ(d){this.a=d},
aE_:function aE_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aE2:function aE2(){},
aE1:function aE1(){},
aE0:function aE0(){},
aDU:function aDU(d,e){this.a=d
this.b=e},
aDS:function aDS(d){this.a=d},
aDT:function aDT(d){this.a=d},
afD:function afD(d,e,f,g,h,i,j){var _=this
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
amU:function amU(d,e){this.e=d
this.a=e},
bfG:function bfG(d){this.a=d},
bfH:function bfH(d){this.a=d},
bfI:function bfI(d,e,f){this.a=d
this.b=e
this.c=f},
bfF:function bfF(){},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IT:function IT(d,e){this.c=d
this.a=e},
blp:function blp(d){this.a=d},
afB:function afB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Hy:function Hy(d,e){this.c=d
this.a=e},
bwP(d,e,f,g,h){var w=null
return B.jK(w,w,!0,w,new A.bpi(h,g,e,f),d,w,!0,!0,x.H)},
jF(d,e,f,g,h,i,j,k,l,m,n){return new A.alf(g,n,i,e,d,m,f,k,l,j,null)},
atP(d,e){return A.c_G(d,e)},
c_G(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$atP=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.axJ)
t=4
o=e.aJ(0,$.c_(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hv("finance-balance-sync",B.y(n,n)),$async$atP)
case 7:r=g
q=B.dq(x.f.a(r.a),x.N,n)
l.WE()
if(J.d(J.a3(q,"configured"),!1)){l.be(D.axN)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bsK()
if(e.e==null)B.Q(B.Z(y.b))
e.gcr().cj(o)
l.be(B.c4(null,null,null,null,null,C.p,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.be(B.c4(null,null,null,null,null,C.p,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a0(k)
l.WE()
l.be(B.c4(null,null,null,null,null,C.p,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$atP,v)},
atS(d,e,f){var w=0,v=B.q(x.H)
var $async$atS=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jK(null,null,!0,null,new A.bpg(f,e,e.aJ(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$atS)
case 2:return B.o(null,v)}})
return B.p($async$atS,v)},
a66:function a66(d){this.a=d},
aIZ:function aIZ(){},
aIY:function aIY(){},
aIX:function aIX(){},
HT:function HT(d,e){this.c=d
this.a=e},
bde:function bde(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bd3:function bd3(){},
bd4:function bd4(){},
bd5:function bd5(){},
bd6:function bd6(){},
bd7:function bd7(){},
bd8:function bd8(){},
bd9:function bd9(){},
bda:function bda(){},
bdb:function bdb(d){this.a=d},
bdc:function bdc(d){this.a=d},
bdd:function bdd(d){this.a=d},
bdf:function bdf(d,e){this.a=d
this.b=e},
bdg:function bdg(d,e){this.a=d
this.b=e},
bpi:function bpi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bph:function bph(d){this.a=d},
ak0:function ak0(d){this.a=d},
alf:function alf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bdh:function bdh(d,e){this.a=d
this.b=e},
U2:function U2(d,e,f){this.c=d
this.d=e
this.a=f},
Xz:function Xz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkY:function bkY(){},
bkZ:function bkZ(){},
bl_:function bl_(d){this.a=d},
Th:function Th(d,e,f){this.c=d
this.d=e
this.a=f},
b4b:function b4b(){},
b4d:function b4d(d){this.a=d},
b4e:function b4e(d){this.a=d},
b4c:function b4c(){},
Ts:function Ts(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4Z:function b4Z(){},
b5_:function b5_(){},
b50:function b50(){},
b51:function b51(d){this.a=d},
alJ:function alJ(d,e){this.c=d
this.a=e},
bdL:function bdL(){},
bdM:function bdM(){},
ai6:function ai6(d,e){this.c=d
this.a=e},
BL:function BL(d,e,f){this.c=d
this.d=e
this.a=f},
arj:function arj(d,e){this.c=d
this.a=e},
bmG:function bmG(){},
bmH:function bmH(){},
ww:function ww(d,e){this.c=d
this.a=e},
ags:function ags(d,e){this.e=d
this.a=e},
b2H:function b2H(){},
b2G:function b2G(){},
b2F:function b2F(d,e,f){this.a=d
this.b=e
this.c=f},
b2z:function b2z(d,e){this.a=d
this.b=e},
b2A:function b2A(d,e){this.a=d
this.b=e},
b2I:function b2I(d){this.a=d},
b2J:function b2J(d){this.a=d},
b2B:function b2B(){},
b2C:function b2C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2D:function b2D(d,e){this.a=d
this.b=e},
b2E:function b2E(d,e,f){this.a=d
this.b=e
this.c=f},
bpg:function bpg(d,e,f){this.a=d
this.b=e
this.c=f},
bpf:function bpf(d){this.a=d},
AP:function AP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SW:function SW(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b2t:function b2t(){},
b2u:function b2u(d){this.a=d},
b2v:function b2v(d){this.a=d},
b2x:function b2x(d,e){this.a=d
this.b=e},
b2w:function b2w(d,e){this.a=d
this.b=e},
b2y:function b2y(d){this.a=d},
bb:function bb(){},
bAa(d){return new A.Ko(d,C.aw,C.du,null,null)},
Ko:function Ko(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SX:function SX(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fs$=f
_.cU$=g
_.c=_.a=null},
b2K:function b2K(d,e){this.a=d
this.b=e},
b2L:function b2L(d){this.a=d},
awj(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ak7:f,p=a0==null?16:a0,o=d==null?D.ZP:d,n=g==null,m=n?A.bte(r,r,r,r,r,r,r,r):g,l=a3==null?D.WV:a3
n=n?A.bte(r,r,r,r,r,r,r,r):g
w=j==null?D.Ds:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.E:e
return new A.nO(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bn,s,w,i,n)},
awq(d,e,f,g,h){var w=d==null?D.ak8:d,v=e==null?2:e,u=g==null?C.lk:g
return new A.fG(h,f===!0,w,v,u)},
bNw(d,e,f){var w=d.a
w=C.d.aU(w+(e.a-w)*f)
return A.awq(A.ko(d.c,e.c,f,A.c0r(),x.fj),B.ac(d.d,e.d,f),!1,A.ko(d.e,e.e,f,A.ZK(),x.S),w)},
a0a(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Sl
else w=h
v=m==null
u=v?8:m
t=$.lo()
s=t.aWO(f,v?8:m)
t=t.aWP(g,v?8:m)
v=d==null?A.bA8(r,r,r,r,r):d
return new A.ij(q,l,w,j,u,s,e,t,v,k==null?D.ak9:k)},
bNx(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.my(d.f,e.f,f),p=A.ko(d.r,e.r,f,A.ZK(),x.S),o=B.bV(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0a(A.bA8(v,u,null,!1,t),p,q,o,s,n,null,A.ko(d.y,e.y,f,A.c0s(),x.G),m,r)},
bNy(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mw(u,w,v,B.bV(d.d,e.d,f))},
bA8(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dj
else w=d
return new A.a06(g===!0,v,u,w,f)},
bte(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0c(4,C.hK,16,D.xj,0,120,A.c0u(),!1,!1,D.YP,0,C.J,A.c0t())
else w=k
v=j==null?C.kR:j
return new A.a0b(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c1g(d,e,f,g){var w=null,v=B.iY(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Cy(C.d.j(f.b),v)},
c1f(d){return A.ayp(D.dj,15)},
nO:function nO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
awi:function awi(d,e){this.a=d
this.b=e},
fG:function fG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awr:function awr(){},
aws:function aws(){},
ij:function ij(d,e,f,g,h,i,j,k,l,m){var _=this
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
mw:function mw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a06:function a06(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0b:function a0b(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ad5:function ad5(d,e){this.a=d
this.b=e},
a0c:function a0c(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Cy:function Cy(d,e){this.a=d
this.b=e},
Kp:function Kp(d){this.a=d},
a0d:function a0d(d,e,f,g,h,i,j,k){var _=this
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
ago:function ago(){},
agv:function agv(){},
agw:function agw(){},
agy:function agy(){},
agz:function agz(){},
agA:function agA(){},
agB:function agB(){},
agC:function agC(){},
agD:function agD(){},
awt:function awt(d){this.a=d},
awu:function awu(){},
ul:function ul(d,e,f){this.a=d
this.b=e
this.c=f},
agx:function agx(){},
awv:function awv(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aww:function aww(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
awx:function awx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a59:function a59(d){this.b=d},
a09:function a09(d,e,f){this.d=d
this.e=e
this.a=f},
aaf:function aaf(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hZ=e
_.cZ=f
_.fT=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bA=_.aF=_.ai=_.ao=$
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
return new A.QY(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
awb(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.p6(t,e.b,new A.q3(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bBy(d,e,f){var w=A.awb(d.b,e.b,f),v=A.awb(d.d,e.d,f),u=A.awb(d.e,e.e,f)
return new A.uL(e.a,w,A.awb(d.c,e.c,f),v,u)},
bQh(d,e,f){var w,v
if(d.k(0,D.fG))return e
if(e.k(0,D.fG))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bBw(d,e,f){return new A.ye(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c3G(d){return!0},
c1k(d){return D.a7B},
bBx(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pt(w,f,g,e)},
bDv(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0n(),x.dv)
v.toString
w=A.ko(d.b,e.b,f,A.c0p(),x.bN)
w.toString
return new A.Px(v,w)},
bR1(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.r9(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mR(t,w,v,u)},
bWf(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.r9(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nh(t,w,v,u)},
bR0(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pn(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQZ(B.bt6(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.r9(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZK(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kJ(r,e.f,e.r,t,e.x,u,v,w,s)},
bWe(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pn(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bWc(B.bt6(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.r9(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ko(d.d,e.d,f,A.ZK(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l6(r,e.f,e.r,t,e.x,u,v,w,s)},
bQZ(d,e,f,g,h,i){return new A.a5k(f,!1,g,i,d,e)},
bR_(d){return C.d.aj(d.e,1)},
bWc(d,e,f,g,h,i){return new A.adu(f,!1,g,i,d,e)},
bWd(d){return C.d.aj(d.e,1)},
bBr(d,e,f){var w,v=A.ko(d.a,e.a,f,A.c0m(),x.cm)
v.toString
w=A.ko(d.b,e.b,f,A.c0o(),x.es)
w.toString
return new A.Ml(v,w,!0)},
bQg(d,e,f){return new A.Ms(d,e==null?4:e,f)},
a0_:function a0_(){},
Cx:function Cx(d,e){this.a=d
this.b=e},
tk:function tk(d,e){this.r=d
this.w=e},
q3:function q3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abG:function abG(){},
p6:function p6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uL:function uL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev:function ev(d,e){this.a=d
this.b=e},
ye:function ye(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pt:function pt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad7:function ad7(){},
Px:function Px(d,e){this.a=d
this.b=e},
mR:function mR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nh:function nh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kJ:function kJ(d,e,f,g,h,i,j,k,l){var _=this
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
a5k:function a5k(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
adu:function adu(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Ml:function Ml(d,e,f){this.a=d
this.b=e
this.c=f},
uK:function uK(){},
Ms:function Ms(d,e,f){this.a=d
this.b=e
this.c=f},
agj:function agj(){},
agn:function agn(){},
ajr:function ajr(){},
ajG:function ajG(){},
ajH:function ajH(){},
ajJ:function ajJ(){},
ajK:function ajK(){},
akx:function akx(){},
akw:function akw(){},
aky:function aky(){},
anY:function anY(){},
apM:function apM(){},
apN:function apN(){},
arn:function arn(){},
as1:function as1(){},
as0:function as0(){},
as2:function as2(){},
aw7:function aw7(){},
Ki:function Ki(){},
Kj:function Kj(d,e,f){this.c=d
this.d=e
this.a=f},
aw9:function aw9(d){this.a=d},
aw8:function aw8(d){this.a=d},
QY:function QY(d,e,f){this.c=d
this.e=e
this.a=f},
Xo:function Xo(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bUK(d,e,f){var w=B.ad(f),v=w.i("ab<1,jN>")
v=B.P(new B.ab(f,new A.aY4(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.P(new B.ab(f,new A.aY5(),w),w.i("av.E"))
return new A.abH(e,d,v,w,null)},
bNt(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a5X(4,x.er)
for(w=0;w<4;++w)t[w]=new B.th(v,C.ar,C.x,new B.kg(1),v,v,v,v,C.bv,v)
u=new A.a00(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.g))
u.bm()
return u},
abH:function abH(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aY4:function aY4(){},
aY5:function aY5(){},
a00:function a00(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.VZ$=h
_.aSD$=i
_.dk$=j
_.af$=k
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
bdn:function bdn(d,e){this.a=d
this.b=e},
awa:function awa(){},
jN:function jN(d,e){this.a=d
this.b=e},
nN:function nN(d,e){this.a=d
this.b=e},
agk:function agk(){},
agl:function agl(){},
agm:function agm(){},
SU:function SU(){},
Ah:function Ah(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aY6:function aY6(d){this.a=d},
aY7:function aY7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aY8:function aY8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4r(d,e){var w=d==null?B.cZ(C.C,1):d
return new A.a4q(e!==!1,w)},
a0f:function a0f(){},
a4q:function a4q(d,e){this.a=d
this.b=e},
Mz:function Mz(){},
a4s:function a4s(){},
awG:function awG(){},
aD1:function aD1(d,e){this.a=d
this.b=e},
agG:function agG(){},
ajD:function ajD(){},
ajE:function ajE(){},
ajL:function ajL(){},
Ks:function Ks(){},
vv:function vv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hj:function hj(){},
a4w:function a4w(d){this.a=d},
a4x:function a4x(d){this.a=d},
a4y:function a4y(d){this.a=d},
Mu:function Mu(){},
Mv:function Mv(){},
a4B:function a4B(d){this.a=d},
Mx:function Mx(){},
My:function My(d){this.a=d},
a4v:function a4v(d){this.a=d},
a4u:function a4u(d){this.a=d},
Mt:function Mt(d){this.a=d},
a4z:function a4z(d){this.a=d},
a4A:function a4A(d){this.a=d},
Mw:function Mw(d){this.a=d},
FG:function FG(){},
aTe:function aTe(d){this.a=d},
aTf:function aTf(d){this.a=d},
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
_.fs$=g
_.cU$=h
_.c=_.a=null},
bds:function bds(d,e){this.a=d
this.b=e},
bdq:function bdq(d){this.a=d},
bdr:function bdr(d,e){this.a=d
this.b=e},
bdp:function bdp(){},
bdt:function bdt(d){this.a=d},
buu(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.E:d
return new A.pG(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aJ9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Sl:u
else w=g
v=f==null?A.awh(!1,u,0,u,!1,D.vF):f
w=new A.e6(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.awh(!1,u,0,u,!1,D.vF):d,j,a0,i,s,!1,p)
w.aqL(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bRt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bA9(d.ay,e.ay,f)
v=A.bA9(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.ko(d.cy,e.cy,f,A.ZK(),x.S)
r=B.a_(d.r,e.r,f)
q=B.r9(d.w,e.w,f)
p=A.ko(d.a,e.a,f,A.c0l(),x.cw)
p.toString
o=B.bE1(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aJ9(v,m,w,r,e.z,s,new A.yd(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NW(n),!1,u,o,!0,e.cx,p)},
awh(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aU(127.5),D.dj.A()>>>16&255,D.dj.A()>>>8&255,D.dj.A()&255):null
else w=e
return new A.a08(h,w,g,i,f,!1)},
bA9(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.r9(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bBx(t,A.ko(v.d,u.d,f,A.ZK(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.r9(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.awh(!1,s,v,u,e.a,new A.Kn(!1,r,w.c,!0))},
bNz(d,e,f){var w=B.a_(d.c,e.c,f),v=B.r9(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aU(127.5),D.dj.A()>>>16&255,D.dj.A()>>>8&255,D.dj.A()&255):null
return new A.mx(e.a,e.b,w,v)},
c3H(d){return!0},
bwA(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jn)return A.bxn(w.a,A.bua(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dj:w},
bZ3(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jn)w=A.bxn(v.a,A.bua(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dj}return A.ayp(w,40)},
bGx(d,e,f,g,h){var w,v=A.bwA(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jn)w=A.bxn(u.a,A.bua(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dj}u=A.ayp(w,40)
return new A.Ms(v,h==null?4:h,u)},
c3F(d,e){return!0},
c08(d,e){return Math.abs(d.a-e.a)},
c1n(d,e){var w=J.cY(e,new A.bpY(d),x.bY)
w=B.P(w,w.$ti.i("av.E"))
return w},
c1j(d,e){return-1/0},
c1i(d,e){return d.a[e].b},
bHI(d){var w=J.cY(d,new A.bpV(),x.fT)
w=B.P(w,w.$ti.i("av.E"))
return w},
bHH(d){return A.ayp(D.dj,15)},
pG:function pG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e6:function e6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aJa:function aJa(){},
NW:function NW(d){this.a=d},
a08:function a08(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kn:function Kn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yd:function yd(d,e,f){this.a=d
this.b=e
this.c=f},
aJ_:function aJ_(d,e){this.a=d
this.b=e},
a4t:function a4t(){},
Ej:function Ej(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bpY:function bpY(d){this.a=d},
bpX:function bpX(d){this.a=d},
a6k:function a6k(){},
bpV:function bpV(){},
mV:function mV(){},
qc:function qc(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rm:function rm(d,e){this.a=d
this.b=e},
tl:function tl(d,e){this.a=d
this.b=e},
G6:function G6(d){this.a=d},
NX:function NX(d){this.a=d},
z_:function z_(d,e){this.a=d
this.b=e},
agt:function agt(){},
agu:function agu(){},
agH:function agH(){},
ajF:function ajF(){},
ajI:function ajI(){},
alm:function alm(){},
aln:function aln(){},
alo:function alo(){},
alq:function alq(){},
alr:function alr(){},
als:function als(){},
alt:function alt(){},
apL:function apL(){},
arm:function arm(){},
aJb:function aJb(d){this.a=d},
aJc:function aJc(){},
aJd:function aJd(){},
z0:function z0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alp:function alp(){},
aJe:function aJe(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aJh:function aJh(){},
aJf:function aJf(d,e,f){this.a=d
this.b=e
this.c=f},
aJg:function aJg(d,e,f){this.a=d
this.b=e
this.c=f},
aJi:function aJi(){},
vg:function vg(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6j:function a6j(d,e,f){this.d=d
this.e=e
this.a=f},
aas:function aas(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.hZ=e
_.cZ=f
_.fT=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bA=_.aF=_.ai=_.ao=$
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
btd(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.by(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.awk(),m.i("ab<1,H>")).kn(0,new A.awl()),k=e-l,j=new A.awo(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdn(0)/2
s=u===o.length-1?0:w
v+=t.gdn(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iN(o,m.i("iN<1>")).aA(0,new A.awm(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iN(o,m.i("iN<1>")).aA(0,new A.awn(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
awk:function awk(){},
awl:function awl(){},
awo:function awo(d,e,f){this.a=d
this.b=e
this.c=f},
awp:function awp(d,e,f){this.a=d
this.b=e
this.c=f},
awm:function awm(d,e,f){this.a=d
this.b=e
this.c=f},
awn:function awn(d,e,f){this.a=d
this.b=e
this.c=f},
bua(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iN(w,B.ad(w).i("iN<1>")).aA(0,new A.aGg(v,d))
else throw B.e(B.bF('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aGg:function aGg(d,e){this.a=d
this.b=e},
azA(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,H>")
v=B.P(new B.ab(e,new A.azB(),w),w.i("av.E"))
return A.c1a(d,new A.a0O(v,x.C))}else return d},
azB:function azB(){},
bVl(d,e){var w=!0
if(d!==C.f1)if(!(d===C.ar&&e===C.x))w=d===C.il&&e===C.aX
if(w)return D.DF
else{w=!0
if(d!==C.ik)if(!(d===C.il&&e===C.x))w=d===C.ar&&e===C.aX
if(w)return D.DG
else return D.a8e}},
MY:function MY(d,e){this.a=d
this.b=e},
a0E:function a0E(d,e){this.a=d
this.b=e},
z3:function z3(d,e){this.a=d
this.$ti=e},
alA:function alA(){},
c1a(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.al(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ac,k,k,h)
for(j=B.Mf(d),w=B.b([],x.I),v=new B.Mh(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.Q(B.fw('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Mg(v,r)
v.CZ()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.CZ()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ek(B.b([],i),!0,s)
p=new B.JL(new B.ck(t,p,k,new B.aoj([q,o,o+m,!0]),l),C.r,k)
h.push(p)
l=g.f
if(l!=null)p.ix(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a0O:function a0O(d,e){this.a=d
this.b=0
this.$ti=e},
b0A:function b0A(){},
btZ(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fG))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bNC(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
ayp(d,e){var w=1-e/100
return B.aC(d.gfE(d),C.d.aU(d.gNx()*w),C.d.aU(d.gFV()*w),C.d.aU(d.gK4()*w))},
bBv(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bu_(d){var w=d.a,v=w?A.aY3(d.b):0,u=w?A.aY3(d.c):0,t=w?A.aY3(d.d):0
return new B.aj(v,u,t,w?A.aY3(d.e):0)},
bSH(d){var w
if(d.c===0){d.seU(null)
w=B.c0(d.r)
d.r=B.aC(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
buR(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mF(0,g))}else{w=e==null?C.E:e
d.r=w.gp(w)
d.seU(null)}},
aY3(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ko(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kP(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kP(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c2u(d,e,f){return C.d.aU(d+(e-d)*f)},
bxn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kP(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
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
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aM:C.n
r=r?C.m:C.ai
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.co(t.x,C.m,s,18),C.aV],w))
v.push(B.aE(new B.eh(t.c,!1,s),1))
v=B.an(v,C.B,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.S,B.j(t.d,1,C.ah,s,B.bZ(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bA(r,B.ah(w,C.B,C.i7,C.i),q,s,C.ag,s,3)}}
A.uJ.prototype={
Ln(d){return this.aSC(d)},
aSC(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ln=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ex("finance_summary",B.a5(["p_from",E.r3(d.a),"p_to",E.r3(d.b)],s,r),r),$async$Ln)
case 3:q=f
if(q==null){u=D.ao2
w=1
break}if(x.f.b(q)){u=B.dq(q,s,r)
w=1
break}u=D.aqg
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ln,v)},
Lm(d){return this.aSB(d)},
aSB(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lm=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ex("finance_kpis",B.a5(["p_from",E.r3(d.a),"p_to",E.r3(d.b)],s,r),r),$async$Lm)
case 3:q=f
if(x.f.b(q)){u=B.dq(q,s,r)
w=1
break}u=D.anM
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lm,v)},
pz(d){return this.aqt(d)},
aqt(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hv("sevdesk-sync",B.a5(["from",E.r3(d.a),"to",E.r3(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a_(B.fE(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pz,v)},
Li(d){return this.aSs(d)},
aSs(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Li=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hv("finance-export-pdf",B.a5(["from",E.r3(d.a),"to",E.r3(d.b)],s,s)),$async$Li)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.e0("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Li,v)}}
A.DH.prototype={
FP(d){return this.ajH(d)},
ajH(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FP=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ln(d),$async$FP)
case 7:q=f
o=A.aE4(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.Hp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FP,v)},
FK(d){return this.ajs(d)},
ajs(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FK=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lm(d),$async$FK)
case 7:q=f
o=A.bQe(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.Hp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FK,v)},
pz(d){return this.aqu(d)},
aqu(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a0(n)
p=r.Hp(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pz,v)},
Lh(d){return this.aSr(d)},
aSr(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lh=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Li(d),$async$Lh)
case 7:q=f
o=C.iI.cD(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.Hp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lh,v)},
Hp(d){if(d instanceof B.y8)return d
if(d instanceof B.lW){if(d.b==="42501")return new B.vz(d.a)
return new B.t0(d.a)}if(d instanceof B.MM)return new B.t0("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AH("Unerwarteter Fehler: "+B.i(d))},
$iaDR:1}
A.qe.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vk.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wd.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.az0.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aA6.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o4.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ch.prototype={
gbC(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o5.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yb.prototype={
GL(d){return this.aqs(0)},
aqs(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dq)
s=t.r
r=s.aJ(0,$.xb(),x.P)
p.a=null
w=3
return B.k(B.p5(new A.aDM(p,t,r),x.H),$async$GL)
case 3:t.se6(0,f)
q=t.f
if(q.gho(q)==null){q=$.bsL()
s=s.e
s===$&&B.a()
s.cj(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GL,v)},
Lg(){return this.aSq()},
aSq(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lg=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dq)
s=t.r.aJ(0,$.xb(),x.P)
q.a=null
w=3
return B.k(B.p5(new A.aDL(q,t,s),x.H),$async$Lg)
case 3:t.se6(0,e)
r=t.f
u=r.gho(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lg,v)}}
A.yc.prototype={
dq(d,e){var w=null,v=e.an($.xb(),x.P),u=e.an($.bsL(),x.aN)
return B.ip(B.dO(B.b([new B.fx("Finanzen","Dashboard",new A.afD(e.an($.bsJ(),x.b).gja(),new A.aDW(this,d,e),new A.aDX(this,d,e),new A.aDY(d),new A.aDZ(d),new A.aE_(this,d,e,v),w),w),C.aH,new A.amU(v,w),C.c8,D.adV,C.c8,B.dk(u,new A.aE0(),new A.aE1(),new A.aE2(),!1,!0,!1,x.d,x.l)],x.p),C.cG,w,C.I,!1),C.m,new A.aE3(e))},
Je(d,e){return this.aL2(d,e)},
aL2(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Je=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bsJ()
w=3
return B.k(e.aJ(0,s.ghM(),x.F).GL(0),$async$Je)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.gho(s)
t=d.P(x.q).f
t.be(B.c4(null,null,null,null,null,C.p,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Je,v)},
Bb(d,e){return this.aww(d,e)},
aww(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bb=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bsJ().ghM(),x.F).Lg(),$async$Bb)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.axP)
w=1
break}t=B.pY(C.r,10)
w=4
return B.k($.bJS().tX(s,"finanzauswertung.pdf",t,null,null,null),$async$Bb)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bb,v)},
Bc(d,e,f){return this.aIF(d,e,f)},
aIF(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bc=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jK(null,null,!0,null,new A.aDU(f,d),d,null,!0,!0,x.cJ),$async$Bc)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nH(e.aJ(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dL()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zo("finance_period",p,o,B.a5(["period_from",p.ef()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bc)
case 8:if(d.e!=null)d.P(x.q).f.be(F.uG)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a0(k)
if(d.e!=null)d.P(x.q).f.be(B.c4(null,null,null,null,null,C.p,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bc,v)}}
A.afD.prototype={
u(d){var w=this,v=null,u=A.akI(C.m,F.hQ,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akI(v,D.a9V,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akI(v,D.xA,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akI(C.ae,C.j6,C.ae,s?v:w.e,"PDF-Export")
return B.an(B.b([u,C.aV,t,C.aV,r,C.aV,q,C.aV,A.akI(C.an,C.fI,C.an,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,C.f,C.O,0,v,v)}}
A.akH.prototype={
u(d){var w,v=this,u=null,t=B.aP(12),s=B.aP(12),r=B.aP(12),q=v.w
if(q==null)q=C.ai
q=B.cZ(q,1)
w=v.r
if(w==null)w=C.h
return B.GI(B.dP(!1,C.Z,!0,t,B.eM(!1,s,!0,B.b7(u,B.co(v.c,w,u,20),C.t,u,u,new B.b5(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.aj,0,u,u,u,u,u,C.bC),u,v.d,u,u)}}
A.amU.prototype={
dq(d,e){var w=null,v=this.e,u=$.dL(),t=x.p
return B.bA(w,B.ah(B.b([D.a7n,C.S,B.an(B.b([D.aaG,C.aT,B.aE(B.j(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,B.B(C.h,16,C.N),w,w,w),1)],t),C.k,C.f,C.i,0,w,w),C.w,B.l7(C.cq,B.b([new A.Ir("Monat",new A.bfG(e),w,w),new A.Ir("Jahr (YTD)",new A.bfH(e),w,w),new A.Ir("Zeitraum w\xe4hlen \u2026",new A.bfI(this,d,e),D.a92,w)],t),C.dC,6,8)],t),C.B,C.f,C.i),w,w,C.D,w,3)},
IB(d,e){return this.aHA(d,e)},
aHA(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IB=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.au9(new A.bfF(),d,B.bQ(B.aW(t)-5,1,1,0,0,0,0),new B.lw(s.a,s.b,x.bz),B.bQ(B.aW(t)+1,1,1,0,0,0,0),C.eg),$async$IB)
case 2:r=g
if(r!=null)e.aJ(0,$.xb().ghM(),x.V).ws(0,new E.lB(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IB,v)}}
A.Ir.prototype={
u(d){var w=null,v=B.aP(9999),u=B.aP(9999),t=B.aP(9999),s=B.cZ(C.ai,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.co(p,C.h,w,14),C.aV],r))
q.push(B.j(this.c,w,w,w,B.B(C.h,13,C.N),w,w,w))
return B.dP(!1,C.Z,!0,v,B.eM(!1,u,!0,B.b7(w,B.an(q,C.k,C.f,C.O,0,w,w),C.t,w,w,new B.b5(w,w,s,t,w,w,C.F),w,w,w,w,C.kQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.aj,0,w,w,w,w,w,C.bC)}}
A.IT.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jm(new A.blp(this)),C.c8,D.a7q,C.w],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.an(B.b([D.ab5,C.aA,B.aE(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.B(C.u,14,C.l),s,s,s),1)],r),C.k,C.f,C.i,0,s,s),C.aj,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.L(w,B.b([new A.afB(t.a,t.b,t.c==="revenue",t.d,s),C.S],r))}q.push(B.ah(w,C.k,C.f,C.i))}return B.ah(q,C.ad,C.f,C.i)}}
A.afB.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aM:C.aj,s=B.cZ(u?C.m:C.ai,1),r=B.aP(4),q=w.c
r=B.b7(C.a0,B.j(C.c.a0(q,0,1),v,v,v,B.bZ(C.h,14,C.q),v,v,v),C.t,v,v,new B.b5(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ah,v,B.B(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aE(B.ah(B.b([q,B.j(t,v,v,v,B.B(C.u,12,C.l),v,v,v)],s),C.B,C.f,C.i),1)
q=$.dE().aq(w.f)
return B.bA(v,B.an(B.b([r,C.aA,t,B.j(q,v,v,v,B.B(u?C.an:C.h,15,C.N),v,v,v)],s),C.k,C.f,C.i,0,v,v),v,v,C.eD,v,3)}}
A.Hy.prototype={
u(d){var w=null
return B.bA(C.ae,B.an(B.b([D.abG,C.aA,B.aE(B.j(this.c,w,w,w,B.B(C.h,14,C.l),w,w,w),1)],x.p),C.k,C.f,C.i,0,w,w),C.fD,w,C.D,w,3)}}
A.a66.prototype={
dq(d,e){return B.dk(e.an($.bMj(),x.e),new A.aIX(),new A.aIY(),new A.aIZ(),!1,!0,!1,x.X,x.l)}}
A.HT.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.avi,C.w,B.jm(new A.bde(v,q,100-t.w.a,w,p)),C.w,new A.ak0(u),C.aH,D.avh,C.w,new A.ags(t,u),C.aH,D.avc,C.w,B.bD(u,!0,u,B.mQ(u,B.bA(u,new A.Th(t,220,u),u,u,C.D,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bdf(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aH,D.av6,C.w,B.bD(u,!0,u,B.mQ(u,new A.Ts(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bdg(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aH,D.ava,C.w,new A.alJ(t,u),C.aH,D.av7,C.w,new A.ai6(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aH,D.ave,C.w,new A.arj(t,u)],s))
return B.ah(r,C.ad,C.f,C.i)}}
A.ak0.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.B(C.u,11,C.l).ei(1.35),w,w,w)}}
A.alf.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cB(m.d,"-")?C.ae:C.an
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bdh(m,d):l
r=x.p
q=B.b([B.aE(B.j(m.c.toUpperCase(),l,l,l,B.B(C.u,10,C.q).h6(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cZ(C.ae,0.8)
n=B.aP(4)
q.push(B.b7(l,B.j("Ziel "+p,l,l,l,B.B(C.ae,9,C.q),l,l,l),C.t,l,l,new B.b5(l,l,o,n,l,l,C.F),l,l,l,l,C.n7,l,l,l))}q=B.b([B.an(q,C.k,C.f,C.i,0,l,l),C.b4,B.bBu(C.ev,B.j(m.d,l,l,l,B.bZ(w,22,C.q),l,l,l),C.vK)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ah,l,B.B(C.u,10,C.aR),l,l,l))
q.push(C.cx)
q.push(B.an(B.b([new A.U2("Vormonat",m.r,l),C.cm,new A.U2("Vorjahr",m.f,l)],r),C.k,C.f,C.i,0,l,l))
q.push(C.cx)
q.push(B.aE(new A.Xz(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.mQ(l,B.bA(l,B.ah(q,C.B,C.f,C.i),l,l,C.dv,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.U2.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aP(4)
return B.b7(r,B.j(this.c+" \u2014",r,r,r,B.B(C.u,9,C.q),r,r,r),C.t,r,r,new B.b5(C.ai,r,r,q,r,r,C.F),r,r,r,r,C.n7,r,r,r)}w=q>=0
v=w?C.an:C.ae
u=v.fA(0.12)
t=B.cZ(v,0.7)
s=B.aP(4)
return B.b7(r,B.an(B.b([B.co(w?F.a8j:D.a8i,v,r,10),F.axs,B.j(this.c+" "+C.d.aj(q,1)+" %",r,r,r,B.B(v,9,C.q),r,r,r)],x.p),C.k,C.f,C.O,0,r,r),C.t,r,r,new B.b5(u,r,t,s,r,r,C.F),r,r,r,r,C.n7,r,r,r)}}
A.Xz.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.kn(j,new A.bkY())
t=C.b.kn(j,new A.bkZ())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bl_(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4r(k,!1)
w=B.b([A.aJ9(k,2,A.awh(!1,C.m.fA(0.16),0,k,!0,D.vF),C.m,0.35,k,D.Dw,k,!0,!1,!0,!1,D.ET,!1,10,D.XC,!0,C.lk,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NV(A.buu(k,k,k,D.aka,l,D.Bn,D.Ds,D.Dx,w,D.adZ,k,m,k,n,D.WV,D.akb,D.a7E),C.aw,C.af,k,k)}}
A.Th.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aKA
w=C.b.fH(p,0,new A.b4b())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.awq(B.b([A.a0a(q,q,D.AO,q,C.m,q,q,q,r.b,6),A.a0a(q,q,D.AO,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.cc(A.bAa(A.awj(q,q,u,q,q,A.a4r(q,!1),q,new A.ye(!0,!0,q,new A.b4c(),A.ZD(),!1,q,A.atU(),A.ZD()),q,v,q,q,new A.uL(!0,new A.p6(16,q,new A.q3(!0,new A.b4d(this),46,q),!0),D.ki,D.ki,new A.p6(16,q,new A.q3(!0,new A.b4e(p),26,q),!0)))),this.d,q)},
aKk(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Ts.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.ab(v,new A.b4Z(),w),x.i)
C.b.L(o,new B.ab(u,new A.b5_(),w))
t=C.b.fH(o,0,new A.b50())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.awq(B.b([A.a0a(q,q,q,q,C.m,q,q,q,v[s],14),A.a0a(q,q,q,q,C.an,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cc(A.bAa(A.awj(q,q,n,q,q,A.a4r(q,!1),q,D.Dx,q,o,q,q,new A.uL(!0,D.ki,D.ki,D.ki,new A.p6(16,q,new A.q3(!0,new A.b51(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.D,q,3)}}
A.alJ.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aKz
w=new B.ab(l,new A.bdL(),B.ad(l).i("ab<1,H>")).kn(0,new A.bdM())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.B(C.h,14,C.q),m,m,m)
p=$.dE()
o=r.d
n=new B.aT(4,4)
o=B.b([B.an(B.b([new B.mL(1,C.eE,B.ah(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,B.B(C.u,12,C.aR),m,m,m)],v),C.B,C.f,C.i),m),C.aT,B.j(p.aq(o),m,m,m,B.bZ(C.h,16,C.q),m,m,m)],v),C.k,C.f,C.i,0,m,m),C.cx,new B.CY(new B.d4(n,n,n,n),C.bF,B.Ek(C.ai,8,C.d.c1(o/w,0,1),D.AD),m)],v)
q=C.b.gae(l)
if(r!==q)q=B.J(r)===B.J(q)&&B.ZI(r.gbC(),q.gbC())
else q=!0
if(!q)o.push(C.w)
C.b.L(u,o)}return B.bA(m,B.ah(u,C.k,C.f,C.i),m,m,C.D,m,3)}}
A.ai6.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aE(new A.BL("Aktive Kunden",""+s,u),1)
w=B.aE(new A.BL("K\xe4ufe",""+t.a,u),1)
v=$.dE()
return B.bA(u,B.an(B.b([s,w,B.aE(new A.BL("\xd8-Warenkorb",v.aq(t.d),u),1),B.aE(new A.BL("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.BL.prototype={
u(d){var w=null
return B.ah(B.b([B.j(this.c.toUpperCase(),w,w,w,B.B(C.u,10,C.q).h6(0.6),w,w,w),C.c0,B.j(this.d,w,w,w,B.bZ(C.h,20,C.q),w,w,w)],x.p),C.B,C.f,C.O)}}
A.arj.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bmG(),B.ad(q).i("ab<1,H>")).kn(0,new A.bmH()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aT(4,4)
t=B.b([B.an(B.b([new B.mL(1,C.eE,B.j(u.b,1,C.ah,r,B.B(C.h,13,C.q),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.B(C.u,12,C.N),r,r,r),B.j($.dE().aq(t),r,r,r,B.B(C.h,13,C.q),r,r,r)],o),C.k,C.f,C.i,0,r,r),C.b4,new B.CY(new B.d4(s,s,s,s),C.bF,B.Ek(C.ai,6,C.d.c1(t/p,0,1),D.AD),r)],o)
s=C.b.gae(q)
if(u!==s)s=B.J(u)===B.J(s)&&B.ZI(u.gbC(),s.gbC())
else s=!0
if(!s)t.push(C.S)
C.b.L(n,t)}return B.bA(r,B.ah(n,C.k,C.f,C.i),r,r,C.D,r,3)}}
A.ww.prototype={
u(d){var w=null
return B.bA(w,B.j(this.c,w,w,w,B.B(C.u,13,C.l),w,w,w),C.aj,w,C.D,w,3)}}
A.ags.prototype={
dq(d,e){return B.dk(e.an($.bsK(),x.fM),new A.b2F(this,d,e),new A.b2G(),new A.b2H(),!1,!0,!1,x.h,x.l)}}
A.AP.prototype={
Y(){return new A.SW()},
aXt(){return this.d.$0()}}
A.SW.prototype={
az(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fd(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bP)
for(t=0;t<8;++t){s=D.pg[t].a
if(v)r=""
else{r=B.bf(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b1(r,".",",")}u.m(0,s,new B.bJ(new B.cR(r,C.bG,C.aP),$.af()))}q.e!==$&&B.b_()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cb(v,v.r,v.e,B.l(v).i("cb<2>"))
while(v.t()){w=v.d
w.S$=$.af()
w.R$=0}this.ap()},
rl(d){var w=this.e
w===$&&B.a()
w=C.c.bl(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.iO(B.b1(w,",","."))
return w==null?0:w},
a3H(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pg[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b1(s,".",",")
t.lH(0,t.a.xP(C.aP,C.bG,s))}}this.J(new A.b2t())},
aEh(){this.a3H(D.ao4)
this.c.P(x.q).f.be(D.aya)},
HR(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HR=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b0(a1)
for(e=0;e<8;++e)a2.E(0,D.pg[e].a)
q=a2
t=4
w=7
return B.k($.aDF.cb().z7(B.b(["csv","txt"],x.s),C.xm,!0),$async$HR)
case 7:p=a5
a2=p
o=a2==null?null:J.JH(a2.a).c
if(o==null){w=1
break}n=C.aB.ad4(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.Bs.cD(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.auG(l,B.bS("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.bl(J.a3(k,0)).toLowerCase()
i=J.Cd(q,j)?j:D.aqh.h(0,j)
if(i==null)continue
d=C.c.bl(C.b.mY(J.bN1(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.iO(h)
if(g!=null)J.fo(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.axM)
w=1
break}r.a3H(m)
r.c.P(x.q).f.be(B.c4(null,null,null,null,null,C.p,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a0(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.be(B.c4(null,null,null,null,null,C.p,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HR,v)},
I2(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I2=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b2u(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZX("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.ef(),0,10),"p_cash_and_bank",q.rl("cash_and_bank"),"p_receivables",q.rl("receivables"),"p_inventory_value",q.rl("inventory_value"),"p_other_current_assets",q.rl("other_current_assets"),"p_fixed_assets",q.rl("fixed_assets"),"p_current_liabilities",q.rl("current_liabilities"),"p_long_term_liabilities",q.rl("long_term_liabilities"),"p_equity",q.rl("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I2)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXt()
o=q.c
o.toString
B.bn(o,!1).f9()
q.c.P(x.q).f.be(D.axQ)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a0(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.be(B.c4(null,null,null,null,null,C.p,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b2v(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I2,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bZ(C.h,18,C.q),r,r,r),p=s.f?r:new A.b2x(s,d),o=s.d
o===$&&B.a()
p=B.hK(D.aaI,B.j("Stichtag: "+C.c.a0(o.ef(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aE(B.hK(D.abO,D.aDV,o?r:s.gaDj(),r),1)
v=x.p
w=B.b([p,C.S,B.an(B.b([w,C.aT,B.aE(B.hK(D.abE,D.aDJ,o?r:s.gaEg(),r),1)],v),C.k,C.f,C.i,0,r,r),C.w],v)
for(u=0;u<8;++u){p=D.pg[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.f_(r,C.aS,!1,r,!0,C.p,r,B.fc(),o.h(0,p.a),r,r,r,r,r,2,new B.cf(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aY,r,r,r,r,C.im,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ar,r,C.a2,r,r,r,r),C.S],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.B(C.u,11,C.l),r,r,r))
p=B.cc(B.fj(B.ah(w,C.ad,C.f,C.O),r,C.I),r,380)
o=s.f
w=B.dQ(C.d3,r,r,o?r:new A.b2y(d),r,r)
o=o?r:s.gaE0()
t=B.dN(C.m,C.h,r,r,r,r,r)
return B.mt(B.b([w,B.e1(s.f?F.Y8:C.eq,o,t)],v),C.n,p,q)}}
A.bb.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.J(this)===B.J(e)&&B.ZI(this.gbC(),e.gbC())
else w=!0
return w},
gv(d){return(B.eX(B.J(this))^B.bId(this.gbC()))>>>0},
j(d){B.bBp()
return B.J(this).j(0)}}
A.Ko.prototype={
Y(){return new A.SX(B.y(x.S,x.J),new A.awt(B.y(x.x,x.gF)),null,null)}}
A.SX.prototype={
u(d){var w,v=this,u=v.a1D(),t=v.CW
t.toString
t=v.a1E(t.av(0,v.ghF().gp(0)))
w=v.a1E(u)
v.a.toString
return new A.Kj(new A.a09(t,w,null),u,null)},
a1E(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.awq(s.c,s.d,!1,r,s.a))}return d.aPt(w)},
a1D(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uw(t.ch)
if(r)s=w.a
r=t.y
t=t.aQo(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPu(A.bte(!1,!0,!0,v.d,v.c,u.gas3(),v.f,v.e))}return t},
as4(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafA()||e==null||e.a==null){w=v.cy
v.J(w.gaOR(w))
return}v.J(new A.b2K(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1D(),new A.b2L(w)))}}
A.nO.prototype={
V7(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.awj(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQo(d,e){return this.V7(null,null,d,e)},
aPu(d){return this.V7(null,d,null,null)},
aPt(d){return this.V7(d,null,null,null)},
X5(d,e,f){var w,v,u,t=A.ko(d.ch,e.ch,f,A.c0q(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bBy(d.d,e.d,f),q=A.bDv(d.e,e.e,f),p=A.bBw(d.c,e.c,f),o=e.a
o=A.a4r(B.a0q(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.awj(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bBr(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbC(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.awi.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fG.prototype={
gdn(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.awr(),B.ad(v).i("ab<1,H>")).kn(0,new A.aws())
v=v.length
return w+(v-1)*this.d},
gbC(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ij.prototype={
gbC(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mw.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a06.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0b.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ad5.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0c.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Cy.prototype={
gbC(){return[this.a,this.b,C.cS,C.x,null]}}
A.Kp.prototype={}
A.a0d.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xp.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X5(v,w,d)}}
A.ago.prototype={}
A.agv.prototype={}
A.agw.prototype={}
A.agy.prototype={}
A.agz.prototype={}
A.agA.prototype={}
A.agB.prototype={}
A.agC.prototype={}
A.agD.prototype={}
A.awt.prototype={
Uw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ul(0,0,!1)
v=new A.z3(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ul(t,u,!0)}w=null
try{w=C.b.qf(d,new A.awu())}catch(s){return new A.ul(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ul(q,r,!1)
u.m(0,v,j)
return j}}
A.ul.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.agx.prototype={}
A.awv.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_L(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac3(t,A.btd(w,t.a),u)
l.y=u
l.aRK(e,u,f)
l.alD(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRT(d,e,m,t,r,s,n,o,f)}}},
ac3(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e0("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iN(p,B.ad(p).i("iN<1>")).aA(0,new A.aww(t,q,r,s))
w.push(new A.a59(q))}return w},
aRK(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aT(m,m)
l=new B.d4(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b2.dE(Math.max(t,a2),b4,b7)
a4=B.Pt(h,Math.min(b2.dE(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dE(Math.min(u,a2),b4,b7)
a4=B.Pt(h,a5,g,Math.max(b2.dE(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.E:f).gp(0)
k.seU(null)
a6=b2.f.dZ()
v.drawRRect(B.mr(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dE(f,b4,b7)
e=a8.b
b0=b2.dE(e,b4,b7)
b2.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.b6(v.save())
v.clipRect(B.dD(b1),$.nC()[1],!0)
a6=b2.f.dZ()
v.drawRRect(B.mr(a4),a6)
a6.delete()
v.restore()
b2.aRR(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gek(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.al()
k=B.b([],s)
k.push(new B.hb(a4))
n=A.azA(new B.ck(n.r,C.ac,null,null,k),o.r)
a6=b2.r.dZ()
k=n.e
v.drawPath((k==null?n.e=new B.mB(n.gjr().a.snapshot()):k).a,a6)
a6.delete()}}}},
aRT(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Aw(a5,a5,a5,a5,B.dd(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lo().ZN(a8,a7.b),a7.a),C.cS,C.x,a5,b6.c,C.bv)
w.afT(b1.f)
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
m=v+4+(o.gd1(0)+o.gd3(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aGi)j=v===D.YP&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZO(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aT(s,s)
e=B.Fu(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lo().Ke(new B.F(v,t),d).b
s=$.lo()
q=w.b
p=q.c
q=q.a.c
a0=s.Ke(new B.F(p,q.gbS(q)),d)
q=g.gc5()
p=w.b.c
s=g.gai3()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VM(d,new A.awx(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aRR(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gek(w)===0}else w=!0
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
q=B.Pt(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dE(v,j,k),i.b)
r=n.dE(t,j,k)
v=t<v
t=v?C.a1:new B.aT(i.z,i.Q)
p=v?C.a1:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a1
q=B.Pt(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a1)}else q=B.bvc(w,n.dE(v,j,k),u,n.dE(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eQ(q,n.r)},
Wp(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac3(b2,A.btd(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0d(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.r(n,t))}}return null}}
A.a59.prototype={}
A.a09.prototype={
bo(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.awv()
t.a0W()
$.al()
w=B.aX()
w.b=C.bh
t.f=w
w=B.aX()
w.b=C.b1
t.r=w
w=B.aX()
w.b=C.bh
w.r=C.n.gp(0)
t.w=w
w=B.aX()
w.b=C.b1
w.r=C.E.gp(0)
w.c=1
t.x=w
t=new A.aaf(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bm()
t.YG(v.cy)
t.af3()
return t},
by(d,e){e.sie(0,this.d)
e.sYq(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bc()}}
A.aaf.prototype={
sie(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYq(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0v(d.cy)
w.bc()},
scQ(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bc()},
aQ(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b6(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fT.i5(w,new A.a0E(t,v),new A.vv(u.aC,u.hZ,u.cZ,x.Q))
s.restore()},
ZG(d){var w=this,v=w.gC(0)
return new A.Kp(w.fT.Wp(d,v,new A.vv(w.aC,w.hZ,w.cZ,x.Q)))}}
A.a0_.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Cx.prototype={
K(){return"AxisSide."+this.b}}
A.tk.prototype={}
A.q3.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abG.prototype={
gbC(){return[!1,0,0,0]}}
A.p6.prototype={
gbC(){return[this.b,this.a,this.c,!0]}}
A.uL.prototype={
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
A.ye.prototype={
gbC(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pt.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad7.prototype={
gbC(){return[this.a,this.b]}}
A.Px.prototype={
gbC(){return[this.a,this.b]}}
A.mR.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nh.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kJ.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l6.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5k.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.adu.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Ml.prototype={
gbC(){return[this.a,this.b,!0]}}
A.uK.prototype={}
A.Ms.prototype={
adv(d,e,f){var w,v
$.al()
w=B.aX()
v=this.a
w.r=v.gp(v)
w.b=C.bh
d.iN(f,this.b,w)},
gbC(){return[this.a,this.b,this.c,0]}}
A.agj.prototype={}
A.agn.prototype={}
A.ajr.prototype={}
A.ajG.prototype={}
A.ajH.prototype={}
A.ajJ.prototype={}
A.ajK.prototype={}
A.akx.prototype={}
A.akw.prototype={}
A.aky.prototype={}
A.anY.prototype={}
A.apM.prototype={}
A.apN.prototype={}
A.arn.prototype={}
A.as1.prototype={}
A.as0.prototype={}
A.as2.prototype={}
A.aw7.prototype={
Ml(d,e,f,g,h,i){return new B.id(this.aVw(d,e,f,g,h,i),x.g4)},
aVv(d,e,f,g){return this.Ml(d,e,f,!0,g,!0)},
aVw(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Ml(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lo().aje(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fZ(u-s,v)*v===u
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
A.Ki.prototype={
a0W(){var w,v=this
$.al()
w=B.aX()
w.b=C.b1
v.a=w
w=B.aX()
w.b=C.bh
v.b=w
w=B.aX()
w.b=C.bh
v.e=w
w=B.aX()
w.b=C.b1
v.c=w
v.d=B.aX()},
i5(d,e,f){var w=this
w.a_M(d,e,f)
w.aRG(e,f)
w.aRQ(e,f)
w.aRP(e,f)},
aRP(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lo().Oo(w.a,a1.r-a1.f)
u=$.bsi().Ml(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fa(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kX(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mF(0,i))}else{if(k==null)k=C.E
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c0(p.r)
p.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Ds(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lo().Oo(w.b,a1.y-a1.x)
u=$.bsi().Ml(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.kX(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mF(0,i))}else{if(p==null)p=C.E
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c0(q.r)
q.r=B.aC(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Ds(n,m,d.a,f.d)}},
aRG(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.h8(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRQ(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.kX(new B.r(n.fa(t.a,m,e),0),new B.r(n.fa(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mF(0,s))}else{r.r=(q==null?C.E:q).gp(0)
r.seU(null)}o=n.e.dZ()
w.drawRect(B.dD(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.kX(new B.r(0,n.dE(t.a,m,e)),new B.r(w,n.dE(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mF(0,s))}else{v.r=(r==null?C.E:r).gp(0)
v.seU(null)}o=n.e.dZ()
j.drawRect(B.dD(s),o)
o.delete()}},
aRO(d,e,f){var w,v
this.a_M(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adw(d,e,f,w)
if(v.b.length!==0)this.aRV(d,e,f,w)},
adw(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.kX(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mF(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c0(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Ds(m,l,f.c,p.d)
n=p.r
h=n.gdn(n).eF(0,2)
g=C.d.am(o,n.gbS(n).eF(0,2))
J.b6(r.save())
r.translate(h,g)
n=n.gNh().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdn(n).eF(0,2)
o=C.d.am(o,n.gbS(n).eF(0,2))
k=f.d
k===$&&B.a()
s.adx(0,n,new B.r(h,o),k)}}},
aRV(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fa(o,a3,a2)
m=new B.r(n,0)
o=d.fa(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kX(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mF(0,i))}else{if(k==null)k=C.E
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c0(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Ds(m,l,d.c,p.d)
n=p.r
h=n.gdn(n).eF(0,2)
g=n.gbS(n).eF(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b6(r.save())
r.translate(f,e)
n=n.gNh().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdn(n).eF(0,2)
g=n.gbS(n).ad(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.adx(0,n,new B.r(o,k),j)}}},
fa(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dE(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZO(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kj.prototype={
gakZ(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal_(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal0(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakX(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
ali(d){var w,v=this,u=null,t=v.d,s=A.bu_(t.d),r=t.a
r=r.a&&A.bNC(r.b)?r.b:u
w=B.b([B.b7(u,v.c,C.t,u,u,new B.b5(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.aw9(w)
if(v.gakZ())C.b.hu(w,s.$1(!0),new A.Ah(D.AK,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gal0())C.b.hu(w,s.$1(!0),new A.Ah(D.mo,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gal_())C.b.hu(w,s.$1(!0),new A.Ah(D.AL,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakX())C.b.hu(w,s.$1(!0),new A.Ah(D.dF,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
u(d){return B.jm(new A.aw8(this))}}
A.QY.prototype={
Y(){return new A.Xo(new B.bg(null,x.eF))}}
A.Xo.prototype={
axx(){switch(this.a.c.a){case 0:return C.e3
case 1:return C.fy
case 2:return C.ev
case 3:return C.fz}},
ay2(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
axz(d){this.a.toString
return},
az(){this.aO()
$.cy.x1$.push(this.ga49())},
ba(d){this.bF(d)
$.cy.x1$.push(this.ga49())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay2()
return B.bvL(B.b09(0,B.b7(v.axx(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.r)}}
A.abH.prototype={
bo(d){return A.bNt(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a00.prototype={
hj(d){if(!(d.b instanceof B.hk))d.b=new B.hk(null,null,C.r)},
hT(d){if(this.B===C.aC)return this.xX(d)
return this.ad8(d)},
aKv(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8W(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a8V(d,B.hz())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8V(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aC?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fY(u,null)
break
case 1:q=B.fY(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8W(p)
t=Math.max(t,o.aKv(p))
m=r.aG$}return new A.bdn(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a8V(o,B.mq()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.af$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.V[u]
r=w.fy
q=s.b-p.a8W(r==null?B.Q(B.Z("RenderBox was not laid out: "+B.J(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.xY(d,e)},
aQ(d,e){if(this.gC(0).gX(0))return
this.a3.sbi(0,null)
this.v1(d,e)},
l(){this.a3.sbi(0,null)
this.aod()}}
A.bdn.prototype={}
A.awa.prototype={}
A.jN.prototype={
gbC(){return[this.a,this.b]}}
A.nN.prototype={}
A.agk.prototype={}
A.agl.prototype={
aK(d){var w,v,u
this.fm(d)
w=this.af$
for(v=x.L;w!=null;){w.aK(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fe(0)
w=this.af$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.agm.prototype={}
A.SU.prototype={
l(){var w,v,u
for(w=this.VZ$,v=w.length,u=0;u<v;++u)w[u].l()
this.is()}}
A.Ah.prototype={
goy(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghG(){switch(this.c.a){case 0:return C.ev
case 1:return C.fz
case 2:return C.e3
case 3:return C.fy}},
gb_8(){var w=this.d,v=A.bu_(w.d),u=A.bBv(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gahS(){var w=this.d,v=A.bBv(w.a),u=A.bu_(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd3(0)+(v.gd1(0)+v.gd3(0))
case 1:case 3:return u.ger()+v.ger()}},
aWd(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goy().c.d
if(o==null)o=$.lo().Oo(d,f-e)
w=p.c
v=w!==D.mo
if((!v||w===D.dF)&&p.d instanceof A.nO){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.btd(u,d)
w=new B.iN(t,B.ad(t).i("iN<1>"))
s=w.giA(w).f_(0,new A.aY6(u),x.W).fV(0)}else{r=$.bsi()
w=!v||w===D.dF
v=p.d
q=r.aVv(w?v.w:v.z,o,f,e)
v=B.ok(q,new A.aY7(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nN>")
w=B.P(new B.ab(s,new A.aY8(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goy()
w=j.goy()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b7(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mo
u=!v
t=!u||w===D.dF
s=j.e
r=t?s.a:s.b
t=j.ghG()
s=!u||w===D.dF?C.I:C.aC
q=B.b([],x.p)
if(w===D.AK||v)j.goy()
if(j.goy().c.a){v=!u||w===D.dF?r:j.goy().c.c
p=!u||w===D.dF?j.goy().c.c:r
o=j.gb_8()
n=!u||w===D.dF?C.aC:C.I
j.gahS()
m=j.gahS()
l=!u||w===D.dF
k=j.d
l=l?k.f:k.x
u=!u||w===D.dF?k.r:k.y
q.push(B.b7(i,A.bUK(new A.awa(),n,j.aWd(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AL||w===D.dF)j.goy()
return new B.f4(t,i,i,B.bQi(q,C.k,s,i,C.f,C.O,0,i,i,C.bT),i)}}
A.a0f.prototype={
gbC(){return[this.a,this.b]}}
A.a4q.prototype={
gbC(){return[this.a,this.b]}}
A.Mz.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4s.prototype={
gabo(d){return!1},
gbC(){return[!1,!1,!1,!1]}}
A.awG.prototype={}
A.aD1.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.agG.prototype={}
A.ajD.prototype={}
A.ajE.prototype={}
A.ajL.prototype={}
A.Ks.prototype={
i5(d,e,f){}}
A.vv.prototype={}
A.hj.prototype={
gdJ(){return null},
gafA(){var w,v=this
B.bw()
B.bw()
B.bw()
w=v instanceof A.My
if(w)return!0
return!(v instanceof A.Mv)&&!(v instanceof A.Mu)&&!(v instanceof A.Mw)&&!(v instanceof A.Mt)&&!w&&!(v instanceof A.Mx)}}
A.a4w.prototype={
gdJ(){return this.a.b}}
A.a4x.prototype={
gdJ(){return this.a.b}}
A.a4y.prototype={
gdJ(){return this.a.b}}
A.Mu.prototype={}
A.Mv.prototype={}
A.a4B.prototype={
gdJ(){return this.a.b}}
A.Mx.prototype={}
A.My.prototype={
gdJ(){return this.a.b}}
A.a4v.prototype={
gdJ(){return this.a.b}}
A.a4u.prototype={
gdJ(){return this.a.b}}
A.Mt.prototype={
gdJ(){return this.a.b}}
A.a4z.prototype={
gdJ(){return this.a.gdJ()}}
A.a4A.prototype={
gdJ(){return this.a.gdJ()}}
A.Mw.prototype={
gdJ(){return this.a.gdJ()}}
A.FG.prototype={
YG(d){this.U=d.b
this.V=d.c
this.a3=d.d},
af3(){var w=this,v=null,u=w.ai=B.buS(v,v)
u.ay=new A.aTe(w)
u.ch=new A.aTf(w)
u.CW=new A.aTg(w)
u.cy=new A.aTh(w)
u.cx=new A.aTi(w)
u=w.aF=B.Gu(v,-1,v)
u.B=new A.aTj(w)
u.a4=new A.aTk(w)
u.U=new A.aTl(w)
u=w.bA=B.a6s(v,w.a3,v)
u.p3=new A.aTm(w)
u.p4=new A.aTn(w)
u.RG=new A.aTo(w)},
cz(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dC(d){return new B.F(d.b,d.d)},
kH(d){return!0},
mP(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.ow(d)
w=v.aF
w===$&&B.a()
w.ow(d)
w=v.ai
w===$&&B.a()
w.ow(d)}else if(x.gJ.b(d))v.l5(new A.a4A(d))},
gMP(d){return new A.aTp(this)},
gMR(d){return new A.aTq(this)},
l5(d){var w,v,u=this
if(u.U==null)return
w=d.gdJ()
v=w!=null?u.ZG(w):null
u.U.$2(d,v)
u.a4=C.bp},
gKI(d){return this.a4},
gFn(){var w=this.ao
w===$&&B.a()
return w},
aK(d){this.fm(d)
this.ao=!0},
aE(d){this.ao=!1
this.fe(0)},
$ijp:1}
A.NV.prototype={
Y(){return new A.Vd(B.b([],x.r),B.y(x.S,x.J),new A.aJb(B.y(x.y,x.dj)),null,null)}}
A.Vd.prototype={
u(d){var w,v=this,u=v.a4b(),t=v.CW
t.toString
t=v.aaV(t.av(0,v.ghF().gp(0)))
w=v.aaV(u)
v.a.toString
return new A.Kj(new A.a6j(t,w,null),u,null)},
aaV(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e6>")
w=B.P(new B.ab(w,new A.bds(this,d),v),v.i("av.E"))
return d.aQl(w,this.cy)},
a4b(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uw(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQA(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQ_(new A.Ej(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayS(),t.c,t.d))}return r},
ayT(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafA())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bdq(v))
return}v.J(new A.bdr(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4b(),new A.bdt(w)))}}
A.pG.prototype={
X5(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a4r(B.a0q(d.a.b,j.b,f),j.a)
w=A.bBr(d.at,e.at,f)
v=A.bBw(d.c,e.c,f)
u=A.bBy(d.d,e.d,f)
t=A.bDv(d.e,e.e,f)
s=A.ko(d.ch,e.ch,f,A.c2w(),x.cz)
s.toString
r=A.ko(d.CW,e.CW,f,A.c2v(),x.bO)
r.toString
u=A.buu(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
V8(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.buu(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQA(d,e,f,g){return this.V8(null,null,d,e,f,g,null)},
aQ_(d){var w=null
return this.V8(w,d,w,w,w,w,w)},
aQl(d,e){var w=null
return this.V8(d,w,w,w,w,w,e)},
gbC(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e6.prototype={
aqL(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qf(n.a,new A.aJa())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fG))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b_()
n.b=q
r.toString
n.c!==$&&B.b_()
n.c=r
s.toString
n.d!==$&&B.b_()
n.d=s
t.toString
n.e!==$&&B.b_()
n.e=t}},
acN(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aJ9(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQ6(d){return this.acN(d,null)},
aQ8(d){return this.acN(null,d)},
gbC(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NW.prototype={
gbC(){return[this.a]}}
A.a08.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mx.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kn.prototype={
gbC(){return[!1,this.b,this.c,!0]}}
A.yd.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.aJ_.prototype={
K(){return"LabelDirection."+this.b}}
A.a4t.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ej.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6k.prototype={
gbC(){return[4,C.hK,16,D.xj,0,120,A.c2y(),!1,!1,!1,0,C.J,A.c2x()]}}
A.mV.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qc.prototype={}
A.rm.prototype={
gbC(){return[this.a,this.b,C.cS,C.x,null]}}
A.tl.prototype={
gbC(){return[this.a,this.b]}}
A.G6.prototype={
gbC(){return[this.a]}}
A.NX.prototype={}
A.z_.prototype={
hd(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X5(v,w,d)}}
A.agt.prototype={}
A.agu.prototype={}
A.agH.prototype={}
A.ajF.prototype={}
A.ajI.prototype={}
A.alm.prototype={}
A.aln.prototype={}
A.alo.prototype={}
A.alq.prototype={}
A.alr.prototype={}
A.als.prototype={}
A.alt.prototype={}
A.apL.prototype={}
A.arm.prototype={}
A.aJb.prototype={
Uw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xU
u=new A.z3(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.z0(s,r,q,t,!0)}w=null
try{w=C.b.qf(d,new A.aJc())}catch(p){return D.xU}v=null
try{v=C.b.qf(w.a,new A.aJd())}catch(p){return D.xU}o=v.a
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
A.alp.prototype={}
A.aJe.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabo(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aOY(new B.G(0,0,u,v))}d.a_L(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRM(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRI(a3,q,a4)
d.aRN(a3,q,a4)
d.alC(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.e0("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vg(q,i,j,k))}}d.aRU(a3,s,a4)
if(w.gabo(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRS(a2,a3,v,f,new A.G6(g),a4)}},
aRI(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.btZ(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zf(o,e,u,f)
s=p.aj6(o,e,t,u,f)
r=p.Zh(o,e,t,u,f,!0)
q=p.aj5(o,e,t,u,f)
p.aRL(d,s,p.Ze(o,e,t,u,f,!0),f,e)
p.aRF(d,q,r,f,e)
p.aRJ(d,t,e)
p.aRH(d,t,e,f)}},
aRM(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.btZ(a5.a),a8=A.btZ(a6.a)
if(a7.length!==a8.length)throw B.e(B.bF("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bP.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ad(n).i("cx<1>")
l=B.P(new B.cx(n,m),m.i("av.E"))
k=a2.Zf(a3,a5,o,b2)
j=a2.Zg(a3,a6.aQ8(l),l,b2,k)
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
n=a2.fa(i,a3,b2)
m=a2.dE(h,a3,b2)
e=a2.fa(g,a3,b2)
d=a2.dE(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.C.gp(0)
a0.seU(v.mF(0,new B.G(n,m,e,d)))}else{a0.r=(r?C.E:w).gp(0)
a0.seU(null)}$.al()
a1=new B.mA(C.dr,C.bh,C.dY,C.eo,C.dN).dZ()
n=B.dD(new B.G(0,0,t,s))
m=$.bP.b
if(m===$.bP)B.Q(B.ve(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.dZ()
n=j.e
a4.drawPath((n==null?j.e=new B.mB(j.gjr().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aRN(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zl(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fG)&&t.$2(q,e)){p=this.fa(q.a,w,f)
o=this.dE(q.b,w,f)
n.$4(q,p/v*100,e,r).adv(s,q,new B.r(p,o))}}},
aRU(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fP(b3,new A.aJh())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zl(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fa(j.a,w,b4)
g=b1.dE(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.Q(B.rl(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.ll(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.ll(q.$2(m,k))))
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
b0=B.kX(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mF(0,b0))}else{if(a4==null)a4=C.E
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c0(f.r)
f.r=B.aC(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Ds(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.Q(B.rl(d.a))
f.adv(t,j,new B.r(h,g))}}},
Zg(d,e,f,g,h){var w=this.aj7(d,e,f,g,h)
return w},
Zf(d,e,f,g){return this.Zg(d,e,f,g,null)},
aj7(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.al().r,C.ac,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gq(a3),d=i.fa(f.h(a3,0).a,a1,a4),a0=i.dE(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.fg(d,a0))
if(e===1)g.aB(new B.cw(d,a0))}else g.aB(new B.cw(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.r,t=1;t<e;t=o,u=j){s=i.fa(f.h(a3,t).a,a1,a4)
r=i.dE(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fa(f.h(a3,q).a,a1,a4)
q=i.dE(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fa(f.h(a3,n?o:t).a,a1,a4)
l=i.dE(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Ln(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.ix(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
Zh(d,e,f,g,h,i){var w=this,v=B.Mf(f),u=J.Y(g),t=w.fa(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aB(new B.cw(t,s))
t=w.fa(u.h(g,0).a,d,h)
v.aB(new B.cw(t,s))
v.aB(new B.cw(w.fa(u.h(g,0).a,d,h),w.dE(u.h(g,0).b,d,h)))
v.aB(new B.pe())
return v},
aj6(d,e,f,g,h){return this.Zh(d,e,f,g,h,!1)},
Ze(d,e,f,g,h,i){var w=this,v=B.Mf(f),u=J.Y(g),t=w.fa(u.h(g,u.gq(g)-1).a,d,h)
v.aB(new B.cw(t,0))
t=w.fa(u.h(g,0).a,d,h)
v.aB(new B.cw(t,0))
v.aB(new B.cw(w.fa(u.h(g,0).a,d,h),w.dE(u.h(g,0).b,d,h)))
v.aB(new B.pe())
return v},
aj5(d,e,f,g,h){return this.Ze(d,e,f,g,h,!1)},
aRL(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fa(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dE(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fa(t.a,w,g)
s=r.r
s===$&&B.a()
A.buR(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.ii(e,r.r)},
aRF(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fa(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fa(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dE(t.b,w,g)
s=r.r
s===$&&B.a()
A.buR(s,q.b,q.c,new B.G(v,0,u,t))
d.a.ii(e,r.r)},
aRJ(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Mh(B.Mf(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k0:C.dY
u.e=C.eo
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lo()
u.z=new B.z8(C.aE,w.c*0.57735+0.5)
d.a.ii(A.azA(e,f.cy).e5(w.b),this.f)},
aRH(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k0:C.dY
q.e=C.eo
q=f.b
q===$&&B.a()
q=s.fa(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dE(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fa(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dE(u.b,r,g)
t=s.f
A.buR(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bSH(t)
d.a.ii(A.azA(e,f.cy),s.f)},
aRS(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bHI(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e0("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lo().ZN(b4,u.b)
s=u.a
r=w.k(0,C.iN)?new B.kg(1):w
q=new B.th(new B.hO(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.cS,C.x,r,a8,a8,a8,a8,C.bv,a8)
q.afT(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fa(b7.a,a9,b9)
t=a7.dE(b7.b,a9,b9)
l=p+C.hK.ger()
k=o+(w-1)*4+(C.hK.gd1(0)+C.hK.gd3(0))
j=t-k-16
i=a7.ZO(b3,l,D.xj,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.Fu(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bHH(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lo().Ke(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lo().Ke(new B.F(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VM(0,new A.aJf(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bVl(q.r,q.w)
A:{if(D.DF===a5){a6=a3
break A}if(D.DG===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VM(0,new A.aJg(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Zl(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fa(v[0].a,e,f)
return this.fa(v[v.length-1].a,e,f)-w},
Wp(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajx(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fP(t,new A.aJi())
return t.length===0?null:t},
ajx(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fG))continue
p=u.$2(e,new B.r(this.fa(q.a,d,h),this.dE(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hu(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qc(s,f,g,C.b.ht(w,v),v.a,v.b)}else return null}}
A.vg.prototype={}
A.a6j.prototype={
bo(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.aJe()
t.a0W()
$.al()
w=B.aX()
w.b=C.b1
t.f=w
w=B.aX()
w.b=C.bh
t.r=w
w=B.aX()
w.b=C.b1
t.w=w
w=B.aX()
w.b=C.bh
w.r=C.E.gp(0)
w.a=D.ZY
t.x=w
w=B.aX()
w.b=C.b1
w.r=C.C.gp(0)
t.y=w
w=B.aX()
w.b=C.bh
w.r=C.n.gp(0)
t.z=w
w=B.aX()
w.b=C.b1
w.r=C.E.gp(0)
w.c=1
t.Q=w
t=new A.aas(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bm()
t.YG(v.cx)
t.af3()
return t},
by(d,e){e.sie(0,this.d)
e.sYq(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bc()}}
A.aas.prototype={
sie(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYq(d){var w=this
if(w.hZ.k(0,d))return
w.hZ=d
w.a0v(d.cx)
w.bc()},
scQ(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bc()},
aQ(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b6(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fT.i5(w,new A.a0E(t,v),new A.vv(u.aC,u.hZ,u.cZ,x.o))
s.restore()},
ZG(d){var w=this,v=w.gC(0)
return new A.NX(w.fT.Wp(d,v,new A.vv(w.aC,w.hZ,w.cZ,x.o)))}}
A.MY.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a0E.prototype={
aOY(d){this.a.a.clipRect(B.dD(d),$.nC()[1],!0)
return null},
adD(d,e){d.aQ(this.a,e)},
VM(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b6(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lo()
s.Yo(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ds(d,e,f,g){var w=new B.ck($.al().r,C.ac,null,null,B.b([],x.v))
w.aB(new B.fg(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.ii(A.azA(w,g),f)}}
A.z3.prototype={
gbC(){return[this.a]}}
A.alA.prototype={}
A.a0O.prototype={}
A.b0A.prototype={
Ke(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWO(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aT(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aT(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aT(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.aT(v,v):s)},
aWP(d,e){var w,v
if(d==null)return D.a_8
w=d.b
v=e/2
return d.aQb(w>v?v:w)},
Oo(d,e){var w,v=Math.max(C.d.cC(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZU(w)},
aZU(d){if(d<1)return this.aJ0(d)
return this.a7Y(d)},
aJ0(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7Y(d*q)/q},
a7Y(d){var w,v=C.e.j(C.d.a_(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aU(d)/10:d
if(w>=7.6)return 10*C.d.a_(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a_(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a_(Math.pow(10,v))
else return C.d.a_(Math.pow(10,v))},
ajm(d){if(d>=1)return 1
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
ZN(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iS
w=e.a?u.w.c3(e):e
v=B.bO(d,C.vd)
v=v==null?null:v.ay
return v===!0?w.c3(C.m7):w},
aje(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["H(qe)","D(ev)","~(v,fG)","H(e6,v)","S<~>()","H(H,qe)","bT(H,tk)","pt(H)","v(qc,qc)","HT(o4)","Hy(A,bG)","IT(o5)","vk(@)","wd(@)","e6(H)","Ch(@)","ai(H,tk)","uJ(dz<uJ>)","DH(dz<aDR>)","H(vk)","H(wd)","ww(A,bG)","AP(z)","~()","qe(@)","~(hj,Kp?)","xp(@)","H(ij)","D(fG)","~(v,ij)","~(@)","jN(nN)","c(nN)","jN(bC<v,H>)","jN(H)","nN(jN)","~(hj,NX?)","e6(e6)","lB(Gi<lB>)","z_(@)","S<o5>(cg<o5>)","tl(v)","uK(ev,H,e6,v)","rm(mV)","D(e6)","v(vg,vg)","H(fG)","S<o4>(cg<o4>)","v(v,v,H)","fG(fG,fG,H)","ij(ij,ij,H)","mw(mw,mw,H)","Cy?(fG,v,ij,v)","E(fG)","c(H,tk)","ev(ev,ev,H)","D(H)","mR(mR,mR,H)","nh(nh,nh,H)","kJ(kJ,kJ,H)","l6(l6,l6,H)","f(kJ)","f(l6)","e6(e6,e6,H)","mx(mx,mx,H)","uK(ev,H,e6,v{size:H?})","D(ev,e6)","H(r,r)","u<tl>(e6,u<v>)","xP(z)","u<rm>(u<mV>)","E(mV)","yb(eY<A?>)"])
A.aDN.prototype={
$1(d){var w=B.dq(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qe(J.am(v==null?"":v),A.oX(w.h(0,"revenue_net")),A.oX(w.h(0,"expense_net")),A.oX(w.h(0,"result_net")))},
$S:z+24}
A.aDO.prototype={
$1(d){var w,v,u,t=B.dq(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.oX(t.h(0,"gross"))
u=B.bf(t.h(0,"purchases_count"))
u=u==null?null:C.d.a_(u)
if(u==null)u=0
return new A.vk(s,r,w,v,u,A.oX(t.h(0,"avg_basket")))},
$S:z+12}
A.aDP.prototype={
$1(d){var w,v=B.dq(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bf(v.h(0,"quantity"))
w=w==null?null:C.d.a_(w)
if(w==null)w=0
return new A.wd(u,t,w,A.oX(v.h(0,"gross")))},
$S:z+13}
A.aE5.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.Ch(v,u,J.am(t==null?"expense":t),A.u_(w.h(d,"net")),A.u_(w.h(d,"tax")),A.u_(w.h(d,"gross")))},
$S:z+15}
A.bq8.prototype={
$1(d){return new A.uJ(d.an($.c_(),x.A))},
$S:z+17}
A.bq9.prototype={
$1(d){return new A.DH(d.an($.bMk(),x.D))},
$S:z+18}
A.brU.prototype={
$1(d){return E.aDQ()},
$S:z+38}
A.bqa.prototype={
$1(d){var w=d.an($.xb(),x.P)
return d.an($.auw(),x.a).FP(w)},
$S:z+40}
A.bq7.prototype={
$1(d){var w=d.an($.xb(),x.P)
return d.an($.auw(),x.a).FK(w)},
$S:z+47}
A.bq6.prototype={
$1(d){return this.aiW(d)},
aiW(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.an($.c_(),x.A).hh("finance_balance_kpis",t),$async$$1)
case 3:s=r.dq(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:206}
A.aDM.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.auw(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDL.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.auw(),x.a).Lh(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aE3.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bsL()
if(s.e==null)B.Q(B.Z(y.b))
s.gcr().cj(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDW.prototype={
$0(){return this.a.Je(this.b,this.c)},
$S:0}
A.aDX.prototype={
$0(){return this.a.Bb(this.b,this.c)},
$S:0}
A.aDY.prototype={
$0(){var w=x.z
return B.bn(this.a,!1).eu(B.eO(new A.aDV(),null,w),w)},
$S:0}
A.aDV.prototype={
$1(d){return F.CH},
$S:z+69}
A.aDZ.prototype={
$0(){return B.oa(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aE_.prototype={
$0(){var w=this
return w.a.Bc(w.b,w.c,w.d)},
$S:0}
A.aE2.prototype={
$0(){return D.asi},
$S:106}
A.aE1.prototype={
$2(d,e){return new A.Hy(B.i(d),null)},
$S:z+10}
A.aE0.prototype={
$1(d){return new A.IT(d,null)},
$S:z+11}
A.aDU.prototype={
$1(d){var w=null,v=this.a,u=$.dL()
v=B.j("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mt(B.b([B.dQ(C.d3,w,w,new A.aDS(u),w,w),B.e1(F.uQ,new A.aDT(u),B.dN(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.uR)},
$S:50}
A.aDS.prototype={
$0(){B.bn(this.a,!1).dl(!1)
return null},
$S:0}
A.aDT.prototype={
$0(){B.bn(this.a,!1).dl(!0)
return null},
$S:0}
A.bfG.prototype={
$0(){var w=this.a.aJ(0,$.xb().ghM(),x.V),v=E.aDQ()
w.ws(0,v)
return v},
$S:0}
A.bfH.prototype={
$0(){var w=this.a.aJ(0,$.xb().ghM(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lB(B.bQ(B.aW(v),1,1,0,0,0,0),v)
w.ws(0,u)
return u},
$S:0}
A.bfI.prototype={
$0(){return this.a.IB(this.b,this.c)},
$S:0}
A.bfF.prototype={
$2(d,e){return new B.oE(B.V(d).aPx(B.V(d).ax.aQq(C.h,C.m)),e,null)},
$S:992}
A.blp.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dE(),s=A.NJ(!1,C.nI,"Umsatz 7 %",t.aq(u.a),w),r=A.NJ(!1,C.nI,"Umsatz 19 %",t.aq(u.b),w),q=A.NJ(!0,D.a91,"Umsatz netto",t.aq(u.c),w),p=A.NJ(!1,D.a90,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return B.a58(1.7,B.b([s,r,q,p,A.NJ(!0,C.ny,"Ergebnis",n,o<0?C.ae:C.an),A.NJ(!1,C.fI,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.jJ,!0)},
$S:92}
A.aIZ.prototype={
$0(){return D.asf},
$S:106}
A.aIY.prototype={
$2(d,e){var w=null
return B.bA(C.ae,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.B(C.h,13,C.l),w,w,w),C.fD,w,C.D,w,3)},
$S:218}
A.aIX.prototype={
$1(d){return new A.HT(d,null)},
$S:z+9}
A.bde.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dE(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,H>"),e=f.i("av.E"),d=B.P(new B.ab(g,new A.bd3(),f),e)
i=A.jF(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.P(new B.ab(g,new A.bd4(),f),e)
d=A.jF(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.P(new B.ab(g,new A.bd5(),f),e)
k=A.jF(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.P(new B.ab(g,new A.bd6(),f),e)
w=A.jF(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.P(new B.ab(g,new A.bd7(),f),e)
v=A.jF(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.P(new B.ab(g,new A.bd8(),f),e)
u=A.jF(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.P(new B.ab(g,new A.bd9(),f),e)
t=A.jF(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.P(new B.ab(g,new A.bda(),f),e)
h=A.jF(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.P(new B.ab(g,new A.bdb(m),f),e)
m=A.jF(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.P(new B.ab(g,new A.bdc(l),f),e)
l=A.jF(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.P(new B.ab(g,new A.bdd(j),f),e)
return B.a58(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jF(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jJ,!0)},
$S:92}
A.bd3.prototype={
$1(d){return d.b},
$S:z+0}
A.bd4.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bd5.prototype={
$1(d){return d.d},
$S:z+0}
A.bd6.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bd7.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bd8.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bd9.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bda.prototype={
$1(d){return d.d},
$S:z+0}
A.bdb.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bdc.prototype={
$1(d){return this.a},
$S:z+0}
A.bdd.prototype={
$1(d){return this.a},
$S:z+0}
A.bdf.prototype={
$0(){return A.bwP(this.b,1.45,new A.Th(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bdg.prototype={
$0(){return A.bwP(this.b,1.6,new A.Ts(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bpi.prototype={
$1(d){var w=this,v=null,u=B.aP(16),t=x.p,s=B.b([B.an(B.b([B.aE(B.j(w.a,v,v,v,B.bZ(C.h,18,C.q),v,v,v),1),B.ft(v,v,D.ab4,v,v,new A.bph(d),v,v,v,"Schlie\xdfen",v)],t),C.k,C.f,C.i,0,v,v)],t)
C.b.L(s,B.b([B.j(w.b,v,v,v,B.B(C.u,12,C.aR),v,v,v),C.S],t))
s.push(C.w)
s.push(B.cc(new B.mv(w.c,w.d,v),v,17976931348623157e292))
return B.a3G(v,C.n,new B.ag(C.ag,B.ah(s,C.B,C.f,C.O),v),v,v,v,C.fF,C.uz,v,new B.db(u,C.J),v)},
$S:993}
A.bph.prototype={
$0(){return B.bn(this.a,!1).f9()},
$S:0}
A.bdh.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bwP(this.b,2.4,new A.Xz(w.w,w.y,w.z,null),C.b.co(u," \xb7 "),v)
return null},
$S:0}
A.bkY.prototype={
$2(d,e){return d<e?d:e},
$S:42}
A.bkZ.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.bl_.prototype={
$1(d){return A.aJ9(null,1.4,null,C.ae,0.35,D.afs,D.Dw,null,!1,!1,!1,!1,D.ET,!1,10,D.XC,!0,C.lk,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b4b.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b4d.prototype={
$2(d,e){var w=null
return B.j(this.a.aKk(d),w,w,w,B.B(C.u,10,C.N),w,w,w)},
$S:z+16}
A.b4e.prototype={
$2(d,e){var w=null,v=C.d.a_(d)
if(v<0||v>=this.a.length)return C.zN
return new B.ag(C.kP,B.j(C.c.cM(this.a[v].a,5),w,w,w,B.B(C.u,9,C.N),w,w,w),w)},
$S:z+6}
A.b4c.prototype={
$1(d){return D.a7C},
$S:z+7}
A.b4Z.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5_.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b50.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.b51.prototype={
$2(d,e){var w=null,v=C.d.a_(d)
if(v<0||v>=3)return C.zN
return new B.ag(C.kP,B.j(this.a[v],w,w,w,B.B(C.h,12,C.q),w,w,w),w)},
$S:z+6}
A.bdL.prototype={
$1(d){return d.d},
$S:z+19}
A.bdM.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.bmG.prototype={
$1(d){return d.d},
$S:z+20}
A.bmH.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.b2H.prototype={
$0(){return D.asn},
$S:106}
A.b2G.prototype={
$2(d,e){return new A.ww("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2F.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ah(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.B(C.h,14,C.N),m,m,m),C.S,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.B(C.u,12.5,C.l),m,m,m),C.w,B.l7(C.cq,B.b([B.hK(C.Et,D.aFI,new A.b2z(w,v),m),B.hK(D.aaJ,D.aED,new A.b2A(w,v),m)],u),C.dC,8,8)],u),C.B,C.f,C.i),C.aj,m,C.D,m,3)}w=new A.b2I(d)
t=C.b.fH(n.a.e.d,0,new A.b2B())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jm(new A.b2C(new A.b2J(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ah(B.b([w,C.S,B.an(B.b([B.aE(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.B(C.u,11,C.l),m,m,m),1),B.oC(D.abT,D.aEZ,new A.b2D(q,p),m),B.oC(D.aby,D.aEL,new A.b2E(q,p,d),m)],o),C.k,C.f,C.i,0,m,m)],o),C.ad,C.f,C.i)},
$S:215}
A.b2z.prototype={
$0(){return A.atS(this.a,this.b,null)},
$S:0}
A.b2A.prototype={
$0(){return A.atP(this.a,this.b)},
$S:0}
A.b2I.prototype={
$1(d){var w=B.bf(J.a3(this.a,d))
return w==null?null:w},
$S:994}
A.b2J.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:33}
A.b2B.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b2C.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jF(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hV,o.$1("liquidity1_pct")),m=A.jF(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hV,o.$1("liquidity2_pct")),l=A.jF(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hV,o.$1("liquidity3_pct"))
o=A.jF(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hV,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b1(w,".",",")+" %"}w=A.jF(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hV,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dE()
v=u.aq(v)
return B.a58(p,B.b([n,m,l,o,w,A.jF(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.hV,v)],x.p),q,12,12,C.jJ,!0)},
$S:92}
A.b2D.prototype={
$0(){return A.atP(this.a,this.b)},
$S:0}
A.b2E.prototype={
$0(){return A.atS(this.a,this.b,this.c)},
$S:0}
A.bpg.prototype={
$1(d){return new A.AP(this.a,new A.bpf(this.b),this.c,null)},
$S:z+22}
A.bpf.prototype={
$0(){var w=this.a,v=$.bsK()
if(w.e==null)B.Q(B.Z(y.b))
w.gcr().cj(v)},
$S:0}
A.b2t.prototype={
$0(){},
$S:0}
A.b2u.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b2v.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b2x.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u5(u.b,B.bQ(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b2w(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b2w.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b2y.prototype={
$0(){return B.bn(this.a,!1).f9()},
$S:0}
A.b2K.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2L.prototype={
$1(d){return new A.xp(x.B.a(d),this.a.a.r)},
$S:z+26}
A.awr.prototype={
$1(d){return d.e},
$S:z+27}
A.aws.prototype={
$2(d,e){return d+e},
$S:42}
A.awu.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.aww.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdn(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.awx.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eQ(t,r)
s=s.x
s===$&&B.a()
w.eQ(t,s)
u.adD(v.d,v.e)},
$S:0}
A.aw9.prototype={
$1(d){return 0},
$S:995}
A.aw8.prototype={
$2(d,e){return B.fk(C.bV,this.a.ali(e),C.p,C.bu,null)},
$S:996}
A.aY4.prototype={
$1(d){return d.a},
$S:z+31}
A.aY5.prototype={
$1(d){return d.b},
$S:z+32}
A.aY6.prototype={
$1(d){return new A.jN(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aY7.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mo||v===D.dF))t=1-t
return new A.jN(d,t*w.d)},
$S:z+34}
A.aY8.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goy(),p=d.a
r.goy()
r=$.lo()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajm(Math.abs(s.b-s.c)))
t=""}if(C.c.hI(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nN(d,q.c.b.$2(p,new A.tk(u+t,s.e)))},
$S:z+35}
A.aTe.prototype={
$1(d){this.a.l5(new A.a4w(d))},
$S:159}
A.aTf.prototype={
$1(d){this.a.l5(new A.a4x(d))},
$S:40}
A.aTg.prototype={
$1(d){this.a.l5(new A.a4y(d))},
$S:29}
A.aTh.prototype={
$0(){this.a.l5(D.a0E)},
$S:0}
A.aTi.prototype={
$1(d){this.a.l5(new A.Mv())},
$S:45}
A.aTj.prototype={
$1(d){this.a.l5(new A.a4B(d))},
$S:43}
A.aTk.prototype={
$0(){this.a.l5(D.a0F)},
$S:0}
A.aTl.prototype={
$1(d){this.a.l5(new A.My(d))},
$S:105}
A.aTm.prototype={
$1(d){this.a.l5(new A.a4v(d))},
$S:162}
A.aTn.prototype={
$1(d){this.a.l5(new A.a4u(d))},
$S:163}
A.aTo.prototype={
$1(d){return this.a.l5(new A.Mt(d))},
$S:164}
A.aTp.prototype={
$1(d){return this.a.l5(new A.a4z(d))},
$S:57}
A.aTq.prototype={
$1(d){return this.a.l5(new A.Mw(d))},
$S:51}
A.bds.prototype={
$1(d){var w=this.a.db.h(0,C.b.ht(this.b.ch,d))
return d.aQ6(w==null?B.b([],x.t):w)},
$S:z+37}
A.bdq.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bdr.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.fP(w,new A.bdp())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G6(w))},
$S:0}
A.bdp.prototype={
$2(d,e){return C.d.cv(e.b,d.b)},
$S:z+8}
A.bdt.prototype={
$1(d){return new A.z_(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aJa.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.bpY.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bBx(t?A.bwA(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tl(w,new A.yd(!0,A.bxo(),new A.bpX(v)))},
$S:z+41}
A.bpX.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bQg(A.bwA(d,e,f),w,A.bZ3(d,e,f))},
$S:z+42}
A.bpV.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.iY(v,v,u==null?D.dj:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rm(C.d.j(d.b),w)},
$S:z+43}
A.aJc.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aJd.prototype={
$1(d){return!d.k(0,D.fG)},
$S:z+1}
A.aJh.prototype={
$2(d,e){return C.d.cv(e.c.b,d.c.b)},
$S:z+45}
A.aJf.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eQ(v,t)
u=u.Q
u===$&&B.a()
w.eQ(v,u)},
$S:0}
A.aJg.prototype={
$0(){this.a.adD(this.b,this.c)},
$S:0}
A.aJi.prototype={
$2(d,e){return C.d.cv(d.w,e.w)},
$S:z+8}
A.awk.prototype={
$1(d){return d.gdn(0)},
$S:z+46}
A.awl.prototype={
$2(d,e){return d+e},
$S:42}
A.awo.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iN(v,B.ad(v).i("iN<1>")).aA(0,new A.awp(w,this.a/(u+1),this.c))},
$S:0}
A.awp.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdn(0)/2
this.c[d]=v
w.a=v+e.gdn(0)/2},
$S:z+2}
A.awm.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdn(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdn(0)/2},
$S:z+2}
A.awn.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdn(0)/2
this.c[d]=u
u+=e.gdn(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aGg.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:997}
A.azB.prototype={
$1(d){return d},
$S:998};(function aliases(){var w=A.Ki.prototype
w.a_L=w.i5
w.alC=w.aRO
w.alD=w.adw
w=A.SU.prototype
w.aod=w.l
w=A.Ks.prototype
w.a_M=w.i5
w=A.FG.prototype
w.a0v=w.YG})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c1D","bQd",72)
var q
v(q=A.SW.prototype,"gaEg","aEh",23)
v(q,"gaDj","HR",4)
v(q,"gaE0","I2",4)
u(A.SX.prototype,"gas3","as4",25)
t(A,"c0q",3,null,["$3"],["bNw"],49,0)
t(A,"c0r",3,null,["$3"],["bNx"],50,0)
t(A,"c0s",3,null,["$3"],["bNy"],51,0)
t(A,"c0u",4,null,["$4"],["c1g"],52,0)
w(A,"c0t","c1f",53)
s(A,"bwT","c1h",54)
t(A,"c0l",3,null,["$3"],["bQh"],55,0)
w(A,"ZD","c3G",56)
w(A,"atU","c1k",7)
t(A,"c0n",3,null,["$3"],["bR1"],57,0)
t(A,"c0p",3,null,["$3"],["bWf"],58,0)
t(A,"c0m",3,null,["$3"],["bR0"],59,0)
t(A,"c0o",3,null,["$3"],["bWe"],60,0)
w(A,"caT","bR_",61)
w(A,"caU","bWd",62)
r(A.Xo.prototype,"ga49","axz",30)
u(A.Vd.prototype,"gayS","ayT",36)
t(A,"c2w",3,null,["$3"],["bRt"],63,0)
t(A,"c2v",3,null,["$3"],["bNz"],64,0)
w(A,"c2z","c3H",1)
t(A,"bI5",4,null,["$5$size","$4"],["bGx",function(d,e,f,g){return A.bGx(d,e,f,g,null)}],65,0)
s(A,"bxo","c3F",66)
s(A,"bI6","c08",67)
s(A,"bI9","c1n",68)
s(A,"bI8","c1j",3)
s(A,"bI7","c1i",3)
w(A,"c2y","bHI",70)
w(A,"c2x","bHH",71)
t(A,"ZK",3,null,["$3"],["c2u"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a65,A.afD,A.akH,A.Ir,A.IT,A.afB,A.Hy,A.HT,A.ak0,A.alf,A.U2,A.Xz,A.Th,A.Ts,A.alJ,A.ai6,A.BL,A.arj,A.ww,A.Kj,A.Ah])
u(B.A,[A.uJ,A.DH,A.bb,A.agG,A.agw,A.agy,A.agz,A.ago,A.ajL,A.agC,A.agA,A.awG,A.arn,A.awt,A.agx,A.Ks,A.a59,A.tk,A.apN,A.apM,A.agn,A.ajK,A.ev,A.ajH,A.ajJ,A.anY,A.aky,A.as2,A.ajI,A.ajr,A.ajG,A.aw7,A.bdn,A.awa,A.agk,A.nN,A.ajD,A.ajE,A.vv,A.hj,A.aln,A.alq,A.agt,A.agH,A.agu,A.ajF,A.alt,A.alr,A.arm,A.apL,A.aJb,A.alp,A.vg,A.a0E,A.alA,A.a0O,A.b0A])
u(B.uH,[A.qe,A.vk,A.wd,A.az0,A.aA6,A.o4,A.Ch,A.o5])
u(B.nS,[A.aDN,A.aDO,A.aDP,A.aE5,A.bq8,A.bq9,A.brU,A.bqa,A.bq7,A.bq6,A.aDV,A.aE0,A.aDU,A.aIX,A.bd3,A.bd4,A.bd5,A.bd6,A.bd7,A.bd8,A.bd9,A.bda,A.bdb,A.bdc,A.bdd,A.bpi,A.bl_,A.b4c,A.b4Z,A.b5_,A.bdL,A.bmG,A.b2F,A.b2I,A.b2J,A.bpg,A.b2L,A.awr,A.awu,A.aw9,A.aY4,A.aY5,A.aY6,A.aY7,A.aY8,A.aTe,A.aTf,A.aTg,A.aTi,A.aTj,A.aTl,A.aTm,A.aTn,A.aTo,A.aTp,A.aTq,A.bds,A.bdt,A.aJa,A.bpY,A.bpX,A.bpV,A.aJc,A.aJd,A.awk,A.azB])
t(A.yb,B.fA)
u(B.xD,[A.aDM,A.aDL,A.aE3,A.aDW,A.aDX,A.aDY,A.aDZ,A.aE_,A.aE2,A.aDS,A.aDT,A.bfG,A.bfH,A.bfI,A.aIZ,A.bdf,A.bdg,A.bph,A.bdh,A.b2H,A.b2z,A.b2A,A.b2D,A.b2E,A.bpf,A.b2t,A.b2u,A.b2v,A.b2x,A.b2w,A.b2y,A.b2K,A.awx,A.aTh,A.aTk,A.bdq,A.bdr,A.aJf,A.aJg,A.awo])
u(B.xL,[A.yc,A.amU,A.a66,A.ags])
u(B.xE,[A.aE1,A.bfF,A.blp,A.aIY,A.bde,A.bkY,A.bkZ,A.b4b,A.b4d,A.b4e,A.b50,A.b51,A.bdM,A.bmH,A.b2G,A.b2B,A.b2C,A.aws,A.aww,A.aw8,A.bdp,A.aJh,A.aJi,A.awl,A.awp,A.awm,A.awn,A.aGg])
u(B.O,[A.AP,A.QY])
u(B.a1,[A.SW,A.Xo])
u(B.Ne,[A.Ko,A.NV])
u(B.xh,[A.SX,A.Vd])
t(A.a0f,A.agG)
t(A.agj,A.a0f)
t(A.a0_,A.agj)
u(A.a0_,[A.agv,A.alo])
t(A.nO,A.agv)
u(B.Hx,[A.awi,A.ad5,A.Cx,A.aD1,A.aJ_,A.MY])
t(A.fG,A.agw)
t(A.ij,A.agy)
t(A.mw,A.agz)
t(A.a06,A.ago)
t(A.Mz,A.ajL)
u(A.Mz,[A.agB,A.als])
t(A.a0b,A.agB)
t(A.a0c,A.agC)
t(A.Cy,A.agA)
u(A.awG,[A.Kp,A.NX])
t(A.ad7,A.arn)
t(A.agD,A.ad7)
t(A.a0d,A.agD)
u(B.b9,[A.xp,A.z_])
t(A.ul,A.agx)
t(A.Ki,A.Ks)
u(A.Ki,[A.awv,A.aJe])
u(B.NR,[A.a09,A.a6j])
u(B.L,[A.FG,A.agl])
u(A.FG,[A.aaf,A.aas])
t(A.q3,A.apN)
t(A.abG,A.apM)
t(A.p6,A.agn)
t(A.uL,A.ajK)
t(A.ye,A.ajH)
t(A.pt,A.ajJ)
t(A.Px,A.anY)
t(A.mR,A.aky)
t(A.nh,A.as2)
u(A.pt,[A.akx,A.as1])
t(A.kJ,A.akx)
t(A.l6,A.as1)
t(A.a4t,A.ajI)
u(A.a4t,[A.akw,A.as0])
t(A.a5k,A.akw)
t(A.adu,A.as0)
t(A.Ml,A.ajr)
t(A.uK,A.ajG)
t(A.Ms,A.uK)
t(A.abH,B.h3)
t(A.agm,A.agl)
t(A.SU,A.agm)
t(A.a00,A.SU)
t(A.jN,A.agk)
t(A.a4q,A.ajD)
t(A.a4s,A.ajE)
u(A.hj,[A.a4w,A.a4x,A.a4y,A.Mu,A.Mv,A.a4B,A.Mx,A.My,A.a4v,A.a4u,A.Mt,A.a4z,A.a4A,A.Mw])
t(A.pG,A.alo)
t(A.e6,A.aln)
t(A.NW,A.alq)
t(A.a08,A.agt)
t(A.mx,A.agH)
t(A.Kn,A.agu)
t(A.yd,A.ajF)
t(A.Ej,A.als)
t(A.a6k,A.alt)
t(A.alm,A.ev)
t(A.mV,A.alm)
t(A.qc,A.mV)
t(A.rm,A.alr)
t(A.tl,A.arm)
t(A.G6,A.apL)
t(A.z0,A.alp)
t(A.z3,A.alA)
w(A.ago,A.bb)
w(A.agv,A.bb)
w(A.agw,A.bb)
w(A.agy,A.bb)
w(A.agz,A.bb)
w(A.agA,A.bb)
w(A.agB,A.bb)
w(A.agC,A.bb)
w(A.agD,A.bb)
w(A.agx,A.bb)
w(A.agj,A.bb)
w(A.agn,A.bb)
w(A.ajr,A.bb)
w(A.ajG,A.bb)
w(A.ajH,A.bb)
w(A.ajJ,A.bb)
w(A.ajK,A.bb)
w(A.akx,A.bb)
w(A.akw,A.bb)
w(A.aky,A.bb)
w(A.anY,A.bb)
w(A.apM,A.bb)
w(A.apN,A.bb)
w(A.arn,A.bb)
w(A.as1,A.bb)
w(A.as0,A.bb)
w(A.as2,A.bb)
w(A.agk,A.bb)
v(A.agl,B.aA)
w(A.agm,B.e3)
v(A.SU,B.a3p)
w(A.agG,A.bb)
w(A.ajD,A.bb)
w(A.ajE,A.bb)
w(A.ajL,A.bb)
w(A.agt,A.bb)
w(A.agu,A.bb)
w(A.agH,A.bb)
w(A.ajF,A.bb)
w(A.ajI,A.bb)
w(A.alm,A.bb)
w(A.aln,A.bb)
w(A.alo,A.bb)
w(A.alq,A.bb)
w(A.alr,A.bb)
w(A.als,A.bb)
w(A.alt,A.bb)
w(A.apL,A.bb)
w(A.arm,A.bb)
w(A.alp,A.bb)
w(A.alA,A.bb)})()
B.bmT(b.typeUniverse,JSON.parse('{"a65":{"W":[],"c":[]},"DH":{"aDR":[]},"yb":{"fA":["bd<~>"],"fA.T":"bd<~>"},"IT":{"W":[],"c":[]},"Hy":{"W":[],"c":[]},"yc":{"bj":[],"O":[],"c":[]},"afD":{"W":[],"c":[]},"akH":{"W":[],"c":[]},"amU":{"bj":[],"O":[],"c":[]},"Ir":{"W":[],"c":[]},"afB":{"W":[],"c":[]},"HT":{"W":[],"c":[]},"ww":{"W":[],"c":[]},"AP":{"O":[],"c":[]},"a66":{"bj":[],"O":[],"c":[]},"ak0":{"W":[],"c":[]},"alf":{"W":[],"c":[]},"U2":{"W":[],"c":[]},"Xz":{"W":[],"c":[]},"Th":{"W":[],"c":[]},"Ts":{"W":[],"c":[]},"alJ":{"W":[],"c":[]},"ai6":{"W":[],"c":[]},"BL":{"W":[],"c":[]},"arj":{"W":[],"c":[]},"ags":{"bj":[],"O":[],"c":[]},"SW":{"a1":["AP"]},"Ko":{"O":[],"c":[]},"SX":{"a1":["Ko"]},"nO":{"bb":[]},"fG":{"bb":[]},"ij":{"bb":[]},"mw":{"bb":[]},"Cy":{"bb":[]},"xp":{"b9":["nO"],"b4":["nO"],"b4.T":"nO","b9.T":"nO"},"a06":{"bb":[]},"a0b":{"bb":[]},"a0c":{"bb":[]},"a0d":{"bb":[]},"ul":{"bb":[]},"a09":{"aV":[],"c":[]},"aaf":{"L":[],"K":[],"jp":[],"aS":[]},"pt":{"bb":[]},"mR":{"bb":[]},"nh":{"bb":[]},"kJ":{"bb":[]},"l6":{"bb":[]},"uK":{"bb":[]},"a0_":{"bb":[]},"q3":{"bb":[]},"abG":{"bb":[]},"p6":{"bb":[]},"uL":{"bb":[]},"ye":{"bb":[]},"ad7":{"bb":[]},"Px":{"bb":[]},"a5k":{"bb":[]},"adu":{"bb":[]},"Ml":{"bb":[]},"Ms":{"bb":[]},"Kj":{"W":[],"c":[]},"QY":{"O":[],"c":[]},"Xo":{"a1":["QY"]},"jN":{"bb":[]},"abH":{"h3":[],"aV":[],"c":[]},"a00":{"e3":["L","hk"],"L":[],"aA":["L","hk"],"K":[],"aS":[],"aA.1":"hk","e3.1":"hk","aA.0":"L"},"Ah":{"W":[],"c":[]},"a0f":{"bb":[]},"a4q":{"bb":[]},"Mz":{"bb":[]},"a4s":{"bb":[]},"a4w":{"hj":[]},"a4x":{"hj":[]},"a4y":{"hj":[]},"Mu":{"hj":[]},"Mv":{"hj":[]},"a4B":{"hj":[]},"Mx":{"hj":[]},"My":{"hj":[]},"a4v":{"hj":[]},"a4u":{"hj":[]},"Mt":{"hj":[]},"a4z":{"hj":[]},"a4A":{"hj":[]},"Mw":{"hj":[]},"FG":{"L":[],"K":[],"jp":[],"aS":[]},"NV":{"O":[],"c":[]},"Vd":{"a1":["NV"]},"pG":{"bb":[]},"e6":{"bb":[]},"mx":{"bb":[]},"mV":{"ev":[],"bb":[]},"qc":{"mV":[],"ev":[],"bb":[]},"rm":{"bb":[]},"tl":{"bb":[]},"G6":{"bb":[]},"z_":{"b9":["pG"],"b4":["pG"],"b4.T":"pG","b9.T":"pG"},"NW":{"bb":[]},"a08":{"bb":[]},"Kn":{"bb":[]},"yd":{"bb":[]},"a4t":{"bb":[]},"Ej":{"bb":[]},"a6k":{"bb":[]},"z0":{"bb":[]},"a6j":{"aV":[],"c":[]},"aas":{"L":[],"K":[],"jp":[],"aS":[]},"z3":{"bb":[]}}'))
B.bG0(b.typeUniverse,JSON.parse('{"Ki":1,"Mz":1,"Ks":1,"FG":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("Ch"),e:w("bd<o4>"),aN:w("bd<o5>"),fM:w("bd<a2<f,@>?>"),b:w("bd<~>"),W:w("jN"),B:w("nO"),dB:w("fG"),gF:w("ul"),fj:w("ij"),G:w("mw"),bO:w("mx"),k:w("at"),C:w("a0O<H>"),dO:w("us"),R:w("a4<f,@>"),g:w("hD"),bz:w("lw<b8>"),f0:w("nY"),E:w("bb"),F:w("yb"),X:w("o4"),P:w("lB"),D:w("uJ"),a:w("aDR"),d:w("o5"),cw:w("ev"),L:w("hk"),m:w("dg<v,E>"),cm:w("kJ"),dv:w("mR"),M:w("C<nN>"),I:w("C<bA7>"),O:w("C<fG>"),Y:w("C<ij>"),U:w("C<ev>"),K:w("C<a59>"),u:w("C<e6>"),bC:w("C<vg>"),aA:w("C<u<ev>>"),v:w("C<e8>"),r:w("C<G6>"),s:w("C<f>"),eg:w("C<th>"),df:w("C<qc>"),p:w("C<c>"),n:w("C<H>"),t:w("C<v>"),eF:w("bg<a1<O>>"),Z:w("mV"),cz:w("e6"),hf:w("pG"),dj:w("z0"),fT:w("rm"),c_:w("im<oR<bd<~>>>"),x:w("z3<fG>"),y:w("z3<e6>"),J:w("u<v>"),ef:w("vk"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<H,H>"),w:w("k_"),aU:w("A"),Q:w("vv<nO>"),o:w("vv<pG>"),dc:w("e8"),eo:w("pU"),gJ:w("pV"),V:w("nb<lB>"),N:w("f"),A:w("nc"),bP:w("bJ"),er:w("th"),j:w("wd"),dw:w("qc"),bY:w("tl"),cZ:w("qe"),gc:w("j2"),es:w("l6"),bN:w("nh"),l:w("c"),q:w("wP"),g4:w("id<H>"),cJ:w("D"),i:w("H"),z:w("@"),S:w("v"),bn:w("xp?"),f3:w("z_?"),T:w("u<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("A?"),aD:w("j2?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AD=new B.nF(C.m,B.au("nF<E>"))
D.AK=new A.Cx(0,"left")
D.mo=new A.Cx(1,"top")
D.AL=new A.Cx(2,"right")
D.dF=new A.Cx(3,"bottom")
D.aw7=new A.q3(!1,A.bwT(),22,null)
D.ki=new A.p6(16,null,D.aw7,!0)
D.a7D=new A.pt(C.C,null,2,null)
D.vF=new A.Kn(!1,D.a7D,A.c2z(),!0)
D.ZP=new A.awi(3,"spaceEvenly")
D.ZY=new B.xt(6,"dstIn")
D.WU=new B.aT(3,3)
D.AO=new B.d4(D.WU,D.WU,C.a1,C.a1)
D.a_8=new B.bm(C.C,0,C.T,-1)
D.Bn=new A.a4s()
D.a0E=new A.Mu()
D.a0F=new A.Mx()
D.aNo=new A.abG()
D.akl=w([],B.au("C<kJ>"))
D.akm=w([],B.au("C<l6>"))
D.Ds=new A.Ml(D.akl,D.akm,!0)
D.a7n=new B.eh("Zeitraum",!1,null)
D.a7q=new B.eh("Konten (SKR 03)",!1,null)
D.xj=new A.aD1(0,"center")
D.aNB=new A.yd(!0,A.bxo(),A.bI5())
D.Dw=new A.yd(!1,A.bxo(),A.bI5())
D.Dx=new A.ye(!1,!0,null,A.atU(),A.ZD(),!0,null,A.atU(),A.ZD())
D.aNC=new A.ye(!0,!0,null,A.atU(),A.ZD(),!0,null,A.atU(),A.ZD())
D.a2X=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a2I=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a36=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a30=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2s=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2r=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3s=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a2Q=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3v=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3p=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aql=new B.dg([50,D.a2X,100,D.a2I,200,D.a36,300,D.a30,400,D.a2s,500,D.a2r,600,D.a3s,700,D.a2Q,800,D.a3v,900,D.a3p],x.m)
D.dj=new B.ru(D.aql,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.agt=w([8,4],x.t)
D.a7B=new A.pt(D.dj,null,0.4,D.agt)
D.a7C=new A.pt(C.ai,null,0.5,null)
D.fG=new A.ev(0/0,0/0)
D.aw9=new A.q3(!0,A.bwT(),44,null)
D.mp=new A.p6(16,null,D.aw9,!0)
D.aw8=new A.q3(!0,A.bwT(),30,null)
D.mq=new A.p6(16,null,D.aw8,!0)
D.a7E=new A.uL(!1,D.mp,D.mq,D.mp,D.mq)
D.aND=new A.uL(!0,D.mp,D.mq,D.mp,D.mq)
D.DF=new A.MY(0,"left")
D.a8e=new A.MY(1,"center")
D.DG=new A.MY(2,"right")
D.a8i=new B.a9(57495,"MaterialIcons",null,!1)
D.xA=new B.a9(58927,"MaterialIcons",null,!1)
D.a90=new B.a9(59005,"MaterialIcons",null,!0)
D.a91=new B.a9(59007,"MaterialIcons",null,!0)
D.a92=new B.a9(59011,"MaterialIcons",null,!1)
D.a9V=new B.a9(62589,"MaterialIcons",null,!1)
D.a9g=new B.a9(61349,"MaterialIcons",null,!1)
D.aaG=new B.aG(D.a9g,20,C.h,null,null)
D.a9n=new B.a9(61487,"MaterialIcons",null,!1)
D.aaI=new B.aG(D.a9n,18,null,null,null)
D.aaJ=new B.aG(D.xA,18,null,null,null)
D.ab4=new B.aG(C.hP,null,C.h,null,null)
D.ab5=new B.aG(C.nz,null,C.u,null,null)
D.aby=new B.aG(C.nE,16,null,null,null)
D.abE=new B.aG(C.xH,16,null,null,null)
D.a8u=new B.a9(57912,"MaterialIcons",null,!1)
D.abG=new B.aG(D.a8u,null,C.ae,null,null)
D.a9T=new B.a9(62584,"MaterialIcons",null,!1)
D.abO=new B.aG(D.a9T,16,null,null,null)
D.abT=new B.aG(D.xA,16,null,null,null)
D.adV=new A.a66(null)
D.aNI=new A.aJ_(0,"horizontal")
D.xU=new A.z0(0,0,0,0,!1)
D.ET=new A.NW(0.5)
D.Bt=new A.a6k()
D.adZ=new A.Ej(D.Bt,A.bI9(),10,A.bI6(),!0,A.bI8(),A.bI7(),!1,null,null,null)
D.aNK=new A.Ej(D.Bt,A.bI9(),10,A.bI6(),!0,A.bI8(),A.bI7(),!0,null,null,null)
D.afs=w([4,3],x.t)
D.aup=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.auf=new B.aI("receivables","Forderungen (kurzfristig)")
D.au4=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.au2=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.atT=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.atY=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.aum=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aue=new B.aI("equity","Eigenkapital")
D.pg=w([D.aup,D.auf,D.au4,D.au2,D.atT,D.atY,D.aum,D.aue],B.au("C<+(f,f)>"))
D.aNN=w([],x.M)
D.ak7=w([],x.O)
D.ak8=w([],x.Y)
D.ak9=w([],B.au("C<mw>"))
D.aka=w([],B.au("C<mx>"))
D.aNO=w([],x.U)
D.aNP=w([],x.u)
D.akb=w([],x.r)
D.aqW={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Sw={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yy=new B.a4(D.Sw,[0,0,0,0,0,0,0,C.c6],B.au("a4<f,A>"))
D.aqU={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqf=new B.a4(D.aqU,[0,0,0,0],B.au("a4<f,v>"))
D.ara={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.anR=new B.a4(D.ara,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.anM=new B.a4(D.aqW,[D.yy,D.yy,D.yy,C.c6,C.c6,C.c6,D.aqf,D.anR],x.R)
D.ao2=new B.a4(D.Sw,[0,0,0,0,0,0,0,C.cL],x.R)
D.aqX={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ao4=new B.a4(D.aqX,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,H>"))
D.aqT={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqg=new B.a4(D.aqT,[0,0,0,0,0,0,0,C.cL],x.R)
D.arl={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqh=new B.a4(D.arl,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a3A=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a3I=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a2v=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a2T=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a32=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a3X=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2h=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a2V=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a35=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3q=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqm=new B.dg([50,D.a3A,100,D.a3I,200,D.a2v,300,D.a2T,400,D.a32,500,D.a3X,600,D.a2h,700,D.a2V,800,D.a35,900,D.a3q],x.m)
D.Sl=new B.ru(D.aqm,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a6O=new B.aj(32,32,32,32)
D.asf=new B.ag(D.a6O,C.bA,null)
D.a6Q=new B.aj(48,48,48,48)
D.asi=new B.ag(D.a6Q,C.bA,null)
D.asn=new B.ag(C.ag,C.bA,null)
D.akn=w([],B.au("C<mR>"))
D.ako=w([],B.au("C<nh>"))
D.WV=new A.Px(D.akn,D.ako)
D.av6=new B.fx("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.av7=new B.fx("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ava=new B.fx("Automaten-Business","Umsatz je Automat",null,null)
D.avc=new B.fx("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ave=new B.fx("Top","Meistverkaufte Produkte",null,null)
D.avh=new B.fx("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.avi=new B.fx("Kennzahlen","Rentabilit\xe4t",null,null)
D.XC=new B.t1(C.E,C.r,0)
D.aDA=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.axJ=new B.dI(D.aDA,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aFw=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.axM=new B.dI(D.aFw,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aDM=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.axN=new B.dI(D.aDM,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aFq=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.axP=new B.dI(D.aFq,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aEV=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.axQ=new B.dI(D.aEV,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aES=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aya=new B.dI(D.aES,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.p,null)
D.aNZ=new B.T(!0,C.C,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDJ=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aDV=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aED=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aEL=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aEZ=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aFI=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.YP=new A.ad5(0,"auto")
D.aGi=new A.ad5(1,"top")
D.aKz=new A.ww("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aKA=new A.ww("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cbk","bMk",()=>B.iP(new A.bq8(),x.D))
w($,"cbl","auw",()=>B.iP(new A.bq9(),x.a))
w($,"cch","xb",()=>B.bvy(new A.brU(),x.P))
w($,"cbm","bsL",()=>C.aI.$1$1(new A.bqa(),x.d))
w($,"cbj","bMj",()=>C.aI.$1$1(new A.bq7(),x.X))
w($,"cbi","bsK",()=>C.aI.$1$1(new A.bq6(),x.h))
w($,"cbh","bsJ",()=>B.aYV(A.c1D(),x.F,x.b))
w($,"c4r","bsi",()=>new A.aw7())
v($,"c7L","lo",()=>new A.b0A())})()};
(a=>{a["6x9JzN7EMY1sf3MnKbdelSFmXaQ="]=a.current})($__dart_deferred_initializers__);