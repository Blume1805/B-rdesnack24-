((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O4(d,e,f,g,h){return new A.a6S(f,g,d,h,e,null)},
a6S:function a6S(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uN:function uN(d){this.a=d},
E3:function E3(d){this.a=d},
bSI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z1
w=x.f
v=x.N
u=x.z
t=A.aF9(B.db(w.a(e.h(a0,"current")),v,u))
s=A.aF9(B.db(w.a(e.h(a0,"prior_year")),v,u))
r=A.aF9(B.db(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cX(p,new A.aES(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cX(o,new A.aET(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cX(q,new A.aEU(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.db(w.a(e.h(a0,"customer")),v,u)
m=B.bp(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.oY(n.h(0,"app_gross"))
k=B.bp(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.oY(n.h(0,"avg_basket"))
u=B.db(w.a(e.h(a0,"derived")),v,u)
v=A.oY(u.h(0,"gross_margin_pct"))
e=A.oY(u.h(0,"net_margin_pct"))
w=A.oY(u.h(0,"ebitda_margin_pct"))
j=A.oY(u.h(0,"cashflow_operating"))
i=A.bs5(u.h(0,"revenue_growth_yoy_pct"))
h=A.bs5(u.h(0,"revenue_growth_mom_pct"))
g=A.bs5(u.h(0,"result_growth_yoy_pct"))
u=A.bs5(u.h(0,"result_growth_mom_pct"))
f=B.bp(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.o3(t,s,r,p,o,q,new A.aAh(m,l,k,n),new A.aBo(v,e,w,j,i,h,g,u),f)},
oY(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
bs5(d){if(d==null)return null
if(typeof d=="number")return d
return B.js(J.al(d))},
qd:function qd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vt:function vt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wn:function wn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAh:function aAh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBo:function aBo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o3:function o3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aES:function aES(){},
aET:function aET(){},
aEU:function aEU(){},
aF9(d){var w=J.Y(d),v=A.u6(w.h(d,"revenue_net_7")),u=A.u6(w.h(d,"revenue_net_19")),t=A.u6(w.h(d,"revenue_net")),s=A.u6(w.h(d,"expense_net")),r=A.u6(w.h(d,"result_net")),q=A.u6(w.h(d,"vat_collected")),p=A.u6(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cX(w,new A.aFa(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.o4(v,u,t,s,r,q,p,w)},
u6(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
CD:function CD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o4:function o4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFa:function aFa(){},
bSH(d){return new A.yp(d,new B.io(x.c_),C.dK)},
bsU:function bsU(){},
bsV:function bsV(){},
buK:function buK(){},
bsW:function bsW(){},
bsT:function bsT(){},
bsS:function bsS(){},
yp:function yp(d,e,f){this.r=d
this.a=e
this.f=f},
aER:function aER(d,e,f){this.a=d
this.b=e
this.c=f},
aEQ:function aEQ(d,e,f){this.a=d
this.b=e
this.c=f},
bSJ(){return new A.yq(null)},
alI(d,e,f,g,h){return new A.alH(e,h,g,f,d,null)},
yq:function yq(d){this.a=d},
aF8:function aF8(d){this.a=d},
aF0:function aF0(d,e,f){this.a=d
this.b=e
this.c=f},
aF1:function aF1(d,e,f){this.a=d
this.b=e
this.c=f},
aF2:function aF2(d){this.a=d},
aF_:function aF_(){},
aF3:function aF3(d){this.a=d},
aF4:function aF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF7:function aF7(){},
aF6:function aF6(){},
aF5:function aF5(){},
aEZ:function aEZ(d,e){this.a=d
this.b=e},
aEX:function aEX(d){this.a=d},
aEY:function aEY(d){this.a=d},
agn:function agn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alH:function alH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anW:function anW(d,e){this.e=d
this.a=e},
bhl:function bhl(d){this.a=d},
bhm:function bhm(d){this.a=d},
bhn:function bhn(d,e,f){this.a=d
this.b=e
this.c=f},
bhk:function bhk(){},
IR:function IR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jj:function Jj(d,e){this.c=d
this.a=e},
bnV:function bnV(d){this.a=d},
agl:function agl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HY:function HY(d,e){this.c=d
this.a=e},
bzs(d,e,f,g,h){var w=null
return B.j6(w,w,!0,w,new A.bs0(h,g,e,f),d,w,!0,!0,x.H)},
jE(d,e,f,g,h,i,j,k,l,m,n){return new A.ame(g,n,i,e,d,m,f,k,l,j,null)},
auY(d,e){return A.c2b(d,e)},
c2b(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auY=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bk(D.axN)
t=4
o=e.aK(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$auY)
case 7:r=g
q=B.db(x.f.a(r.a),x.N,n)
l.Mg()
if(J.d(J.a3(q,"configured"),!1)){l.bk(D.axR)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bvx()
if(e.e==null)B.U(B.Z(y.b))
e.gcq().ck(o)
l.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mg()
l.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auY,v)},
av0(d,e,f){var w=0,v=B.q(x.H)
var $async$av0=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j6(null,null,!0,null,new A.brZ(f,e,e.aK(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$av0)
case 2:return B.o(null,v)}})
return B.p($async$av0,v)},
a6T:function a6T(d){this.a=d},
aK0:function aK0(){},
aK_:function aK_(){},
aJZ:function aJZ(){},
Ii:function Ii(d,e){this.c=d
this.a=e},
bev:function bev(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bek:function bek(){},
bel:function bel(){},
bem:function bem(){},
ben:function ben(){},
beo:function beo(){},
bep:function bep(){},
beq:function beq(){},
ber:function ber(){},
bes:function bes(d){this.a=d},
bet:function bet(d){this.a=d},
beu:function beu(d){this.a=d},
bew:function bew(d,e){this.a=d
this.b=e},
bex:function bex(d,e){this.a=d
this.b=e},
bs0:function bs0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bs_:function bs_(d){this.a=d},
al1:function al1(d){this.a=d},
ame:function ame(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bey:function bey(d,e){this.a=d
this.b=e},
UJ:function UJ(d,e,f){this.c=d
this.d=e
this.a=f},
Yi:function Yi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bn1:function bn1(){},
bn2:function bn2(){},
bn3:function bn3(d){this.a=d},
TW:function TW(d,e,f){this.c=d
this.d=e
this.a=f},
b5c:function b5c(){},
b5e:function b5e(d){this.a=d},
b5f:function b5f(d){this.a=d},
b5d:function b5d(){},
U8:function U8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b66:function b66(){},
b67:function b67(){},
b68:function b68(){},
b69:function b69(d){this.a=d},
amI:function amI(d,e){this.c=d
this.a=e},
bf1:function bf1(){},
bf2:function bf2(){},
aj2:function aj2(d,e){this.c=d
this.a=e},
C6:function C6(d,e,f){this.c=d
this.d=e
this.a=f},
asr:function asr(d,e){this.c=d
this.a=e},
bpc:function bpc(){},
bpd:function bpd(){},
wG:function wG(d,e){this.c=d
this.a=e},
ahf:function ahf(d,e){this.e=d
this.a=e},
b3D:function b3D(){},
b3C:function b3C(){},
b3B:function b3B(d,e,f){this.a=d
this.b=e
this.c=f},
b3v:function b3v(d,e){this.a=d
this.b=e},
b3w:function b3w(d,e){this.a=d
this.b=e},
b3E:function b3E(d){this.a=d},
b3F:function b3F(d){this.a=d},
b3x:function b3x(){},
b3y:function b3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3z:function b3z(d,e){this.a=d
this.b=e},
b3A:function b3A(d,e,f){this.a=d
this.b=e
this.c=f},
brZ:function brZ(d,e,f){this.a=d
this.b=e
this.c=f},
brY:function brY(d){this.a=d},
B7:function B7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ty:function Ty(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3p:function b3p(){},
b3q:function b3q(d){this.a=d},
b3r:function b3r(d){this.a=d},
b3t:function b3t(d,e){this.a=d
this.b=e},
b3s:function b3s(d,e){this.a=d
this.b=e},
b3u:function b3u(d){this.a=d},
bg:function bg(){},
bCM(d){return new A.KO(d,C.ak,C.c0,null,null)},
KO:function KO(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tz:function Tz(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e9$=f
_.c4$=g
_.c=_.a=null},
b3G:function b3G(d,e){this.a=d
this.b=e},
b3H:function b3H(d){this.a=d},
axA(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alZ:f,p=a0==null?16:a0,o=d==null?D.a04:d,n=g==null,m=n?A.bvZ(r,r,r,r,r,r,r,r):g,l=a3==null?D.Y6:a3
n=n?A.bvZ(r,r,r,r,r,r,r,r):g
w=j==null?D.DS:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nN(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BN,s,w,i,n)},
axH(d,e,f,g,h){var w=d==null?D.am_:d,v=e==null?2:e,u=g==null?C.ls:g
return new A.fC(h,f===!0,w,v,u)},
bQ1(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.axH(A.kt(d.c,e.c,f,A.c2W(),x.fj),B.ac(d.d,e.d,f),!1,A.kt(d.e,e.e,f,A.a_z(),x.S),w)},
a0X(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tu
else w=h
v=m==null
u=v?8:m
t=$.lu()
s=t.aWV(f,v?8:m)
t=t.aWW(g,v?8:m)
v=d==null?A.bCK(r,r,r,r,r):d
return new A.ik(q,l,w,j,u,s,e,t,v,k==null?D.am0:k)},
bQ2(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mA(d.f,e.f,f),p=A.kt(d.r,e.r,f,A.a_z(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0X(A.bCK(v,u,null,!1,t),p,q,o,s,n,null,A.kt(d.y,e.y,f,A.c2X(),x.G),m,r)},
bQ3(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.my(u,w,v,B.bX(d.d,e.d,f))},
bCK(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0T(g===!0,v,u,w,f)},
bvZ(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0Z(4,C.hN,16,D.xD,0,120,A.c2Z(),!1,!1,D.a_2,0,C.I,A.c2Y())
else w=k
v=j==null?C.kZ:j
return new A.a0Y(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3K(d,e,f,g){var w=null,v=B.iY(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.J,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CU(C.d.j(f.b),v)},
c3J(d){return A.azI(D.dp,15)},
nN:function nN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axz:function axz(d,e){this.a=d
this.b=e},
fC:function fC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axI:function axI(){},
axJ:function axJ(){},
ik:function ik(d,e,f,g,h,i,j,k,l,m){var _=this
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
my:function my(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0T:function a0T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0Y:function a0Y(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adP:function adP(d,e){this.a=d
this.b=e},
a0Z:function a0Z(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CU:function CU(d,e){this.a=d
this.b=e},
KP:function KP(d){this.a=d},
a1_:function a1_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xz:function xz(d,e){this.a=d
this.b=e},
ahb:function ahb(){},
ahi:function ahi(){},
ahj:function ahj(){},
ahl:function ahl(){},
ahm:function ahm(){},
ahn:function ahn(){},
aho:function aho(){},
ahp:function ahp(){},
ahq:function ahq(){},
axK:function axK(d){this.a=d},
axL:function axL(){},
ur:function ur(d,e,f){this.a=d
this.b=e
this.c=f},
ahk:function ahk(){},
axM:function axM(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axN:function axN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axO:function axO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5V:function a5V(d){this.b=d},
a0W:function a0W(d,e,f){this.d=d
this.e=e
this.a=f},
aaZ:function aaZ(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bC=_.aE=_.ai=_.ar=$
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
c3L(d,e){var w=null
return new A.Rv(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axt(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pb(t,e.b,new A.q3(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bE8(d,e,f){var w=A.axt(d.b,e.b,f),v=A.axt(d.d,e.d,f),u=A.axt(d.e,e.e,f)
return new A.uP(e.a,w,A.axt(d.c,e.c,f),v,u)},
bSL(d,e,f){var w,v
if(d.k(0,D.fN))return e
if(e.k(0,D.fN))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ew(w,v)},
bE6(d,e,f){return new A.ys(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c68(d){return!0},
c3O(d){return D.a9v},
bE7(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.py(w,f,g,e)},
bG2(d,e,f){var w,v=A.kt(d.a,e.a,f,A.c2S(),x.dv)
v.toString
w=A.kt(d.b,e.b,f,A.c2U(),x.bN)
w.toString
return new A.Q4(v,w)},
bTx(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.mT(t,w,v,u)},
bYI(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.nk(t,w,v,u)},
bTw(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ps(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bTu(B.bvR(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kt(d.d,e.d,f,A.a_z(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kM(r,e.f,e.r,t,e.x,u,v,w,s)},
bYH(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ps(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bYF(B.bvR(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kt(d.d,e.d,f,A.a_z(),x.S)
if(u==null)u=v==null?C.C:null
return new A.lb(r,e.f,e.r,t,e.x,u,v,w,s)},
bTu(d,e,f,g,h,i){return new A.a65(f,!1,g,i,d,e)},
bTv(d){return C.d.aj(d.e,1)},
bYF(d,e,f,g,h,i){return new A.aee(f,!1,g,i,d,e)},
bYG(d){return C.d.aj(d.e,1)},
bE3(d,e,f){var w,v=A.kt(d.a,e.a,f,A.c2R(),x.cm)
v.toString
w=A.kt(d.b,e.b,f,A.c2T(),x.es)
w.toString
return new A.MI(v,w,!0)},
bSK(d,e,f){return new A.MT(d,e==null?4:e,f)},
a0M:function a0M(){},
CT:function CT(d,e){this.a=d
this.b=e},
tr:function tr(d,e){this.r=d
this.w=e},
q3:function q3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acn:function acn(){},
pb:function pb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uP:function uP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ew:function ew(d,e){this.a=d
this.b=e},
ys:function ys(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
py:function py(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adR:function adR(){},
Q4:function Q4(d,e){this.a=d
this.b=e},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nk:function nk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kM:function kM(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lb:function lb(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a65:function a65(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aee:function aee(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MI:function MI(d,e,f){this.a=d
this.b=e
this.c=f},
uO:function uO(){},
MT:function MT(d,e,f){this.a=d
this.b=e
this.c=f},
ah6:function ah6(){},
aha:function aha(){},
akp:function akp(){},
akH:function akH(){},
akI:function akI(){},
akK:function akK(){},
akL:function akL(){},
alx:function alx(){},
alw:function alw(){},
aly:function aly(){},
ap4:function ap4(){},
aqS:function aqS(){},
aqT:function aqT(){},
asv:function asv(){},
at8:function at8(){},
at7:function at7(){},
at9:function at9(){},
axp:function axp(){},
KI:function KI(){},
KJ:function KJ(d,e,f){this.c=d
this.d=e
this.a=f},
axr:function axr(d){this.a=d},
axq:function axq(d){this.a=d},
Rv:function Rv(d,e,f){this.c=d
this.e=e
this.a=f},
Y7:function Y7(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bXf(d,e,f){var w=B.ad(f),v=w.i("ab<1,jP>")
v=B.Q(new B.ab(f,new A.aYX(),v),v.i("aw.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aYY(),w),w.i("aw.E"))
return new A.aco(e,d,v,w,null)},
bQ_(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6J(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tp(v,C.as,C.w,new B.ko(1),v,v,v,v,C.bA,v)
u=new A.a0N(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.v))
u.bl()
return u},
aco:function aco(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aYX:function aYX(){},
aYY:function aYY(){},
a0N:function a0N(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W0$=h
_.aSI$=i
_.dn$=j
_.ah$=k
_.dQ$=l
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
beE:function beE(d,e){this.a=d
this.b=e},
axs:function axs(){},
jP:function jP(d,e){this.a=d
this.b=e},
nM:function nM(d,e){this.a=d
this.b=e},
ah7:function ah7(){},
ah8:function ah8(){},
ah9:function ah9(){},
Tw:function Tw(){},
Az:function Az(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYZ:function aYZ(d){this.a=d},
aZ_:function aZ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZ0:function aZ0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5e(d,e){var w=d==null?B.cp(C.C,1):d
return new A.a5d(e!==!1,w)},
a11:function a11(){},
a5d:function a5d(d,e){this.a=d
this.b=e},
N_:function N_(){},
a5f:function a5f(){},
axX:function axX(){},
aEg:function aEg(d,e){this.a=d
this.b=e},
aht:function aht(){},
akE:function akE(){},
akF:function akF(){},
akM:function akM(){},
KS:function KS(){},
vF:function vF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hl:function hl(){},
a5j:function a5j(d){this.a=d},
a5k:function a5k(d){this.a=d},
a5l:function a5l(d){this.a=d},
MV:function MV(){},
MW:function MW(){},
a5o:function a5o(d){this.a=d},
MY:function MY(){},
MZ:function MZ(d){this.a=d},
a5i:function a5i(d){this.a=d},
a5h:function a5h(d){this.a=d},
MU:function MU(d){this.a=d},
a5m:function a5m(d){this.a=d},
a5n:function a5n(d){this.a=d},
MX:function MX(d){this.a=d},
G1:function G1(){},
aUg:function aUg(d){this.a=d},
aUh:function aUh(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
aUk:function aUk(d){this.a=d},
aUl:function aUl(d){this.a=d},
aUm:function aUm(d){this.a=d},
aUn:function aUn(d){this.a=d},
aUo:function aUo(d){this.a=d},
aUp:function aUp(d){this.a=d},
aUq:function aUq(d){this.a=d},
aUr:function aUr(d){this.a=d},
aUs:function aUs(d){this.a=d},
Oj:function Oj(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VT:function VT(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e9$=g
_.c4$=h
_.c=_.a=null},
beJ:function beJ(d,e){this.a=d
this.b=e},
beH:function beH(d){this.a=d},
beI:function beI(d,e){this.a=d
this.b=e},
beG:function beG(){},
beK:function beK(d){this.a=d},
bxc(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pK(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKf(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tu:u
else w=g
v=f==null?A.axy(!1,u,0,u,!1,D.w5):f
w=new A.ea(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axy(!1,u,0,u,!1,D.w5):d,j,a0,i,s,!1,p)
w.aqP(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bCL(d.ay,e.ay,f)
v=A.bCL(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kt(d.cy,e.cy,f,A.a_z(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rf(d.w,e.w,f)
p=A.kt(d.a,e.a,f,A.c2Q(),x.cw)
p.toString
o=B.bGy(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKf(v,m,w,r,e.z,s,new A.yr(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ok(n),!1,u,o,!0,e.cx,p)},
axy(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
else w=e
return new A.a0V(h,w,g,i,f,!1)},
bCL(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rf(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bE7(t,A.kt(v.d,u.d,f,A.a_z(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rf(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axy(!1,s,v,u,e.a,new A.KN(!1,r,w.c,!0))},
bQ5(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rf(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
return new A.mz(e.a,e.b,w,v)},
c69(d){return!0},
bzg(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k3)return A.bA1(w.a,A.bwR(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c0t(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k3)w=A.bA1(v.a,A.bwR(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.azI(w,40)},
bJ3(d,e,f,g,h){var w,v=A.bzg(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k3)w=A.bA1(u.a,A.bwR(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.azI(w,40)
return new A.MT(v,h==null?4:h,u)},
c67(d,e){return!0},
c2D(d,e){return Math.abs(d.a-e.a)},
c3R(d,e){var w=J.cX(e,new A.bsI(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c3N(d,e){return-1/0},
c3M(d,e){return d.a[e].b},
bKd(d){var w=J.cX(d,new A.bsF(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bKc(d){return A.azI(D.dp,15)},
pK:function pK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKg:function aKg(){},
Ok:function Ok(d){this.a=d},
a0V:function a0V(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mz:function mz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KN:function KN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yr:function yr(d,e,f){this.a=d
this.b=e
this.c=f},
aK1:function aK1(d,e){this.a=d
this.b=e},
a5g:function a5g(){},
EG:function EG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsI:function bsI(d){this.a=d},
bsH:function bsH(d){this.a=d},
a75:function a75(){},
bsF:function bsF(){},
mW:function mW(){},
qb:function qb(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
ru:function ru(d,e){this.a=d
this.b=e},
ts:function ts(d,e){this.a=d
this.b=e},
Gt:function Gt(d){this.a=d},
Ol:function Ol(d){this.a=d},
zb:function zb(d,e){this.a=d
this.b=e},
ahg:function ahg(){},
ahh:function ahh(){},
ahu:function ahu(){},
akG:function akG(){},
akJ:function akJ(){},
aml:function aml(){},
amm:function amm(){},
amn:function amn(){},
amp:function amp(){},
amq:function amq(){},
amr:function amr(){},
ams:function ams(){},
aqR:function aqR(){},
asu:function asu(){},
aKh:function aKh(d){this.a=d},
aKi:function aKi(){},
aKj:function aKj(){},
zc:function zc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amo:function amo(){},
aKk:function aKk(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKn:function aKn(){},
aKl:function aKl(d,e,f){this.a=d
this.b=e
this.c=f},
aKm:function aKm(d,e,f){this.a=d
this.b=e
this.c=f},
aKo:function aKo(){},
vo:function vo(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a74:function a74(d,e,f){this.d=d
this.e=e
this.a=f},
abb:function abb(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bC=_.aE=_.ai=_.ar=$
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
bvY(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bG(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.axB(),m.i("ab<1,F>")).km(0,new A.axC()),k=e-l,j=new A.axF(k,d,n)
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
new B.iP(o,m.i("iP<1>")).aw(0,new A.axD(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iP(o,m.i("iP<1>")).aw(0,new A.axE(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axB:function axB(){},
axC:function axC(){},
axF:function axF(d,e,f){this.a=d
this.b=e
this.c=f},
axG:function axG(d,e,f){this.a=d
this.b=e
this.c=f},
axD:function axD(d,e,f){this.a=d
this.b=e
this.c=f},
axE:function axE(d,e,f){this.a=d
this.b=e
this.c=f},
bwR(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iP(w,B.ad(w).i("iP<1>")).aw(0,new A.aHo(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHo:function aHo(d,e){this.a=d
this.b=e},
aAS(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAT(),w),w.i("aw.E"))
return A.c3F(d,new A.a1A(v,x.cX))}else return d},
aAT:function aAT(){},
bXQ(d,e){var w=!0
if(d!==C.fw)if(!(d===C.as&&e===C.w))w=d===C.it&&e===C.aY
if(w)return D.E4
else{w=!0
if(d!==C.is)if(!(d===C.it&&e===C.w))w=d===C.as&&e===C.aY
if(w)return D.E5
else return D.aaa}},
Nq:function Nq(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e){this.a=d
this.b=e},
zf:function zf(d,e){this.a=d
this.$ti=e},
amz:function amz(){},
c3F(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cG($.an().r)
for(w=B.b([],x.C),v=new B.Oc(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.U(B.fu('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ob(v,s)
v.D3()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D3()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.K6(d.aSE(r,p,p+n,!0),C.v,null)
t.push(q)
m=l.d
if(m!=null)q.ik(m)}p+=n
o=!o}}return l},
a1A:function a1A(d,e){this.a=d
this.b=0
this.$ti=e},
b1t:function b1t(){},
bwF(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fN))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bQ8(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azI(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNK()*w),C.d.aP(d.gFY()*w),C.d.aP(d.gK8()*w))},
bE5(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bwG(d){var w=d.a,v=w?A.aYW(d.b):0,u=w?A.aYW(d.c):0,t=w?A.aYW(d.d):0
return new B.ai(v,u,t,w?A.aYW(d.e):0)},
bVd(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bxz(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mO(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seU(null)}},
aYW(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kt(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k2(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k2(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4Y(d,e,f){return C.d.aP(d+(e-d)*f)},
bA1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k2(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6S.prototype={
q(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.m
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.cg(t.x,C.n,s,18),C.aQ],w))
v.push(B.ay(new B.dJ(t.c,!1,s),1))
v=B.ak(v,C.A,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.i(t.d,s,1,C.ac,s,B.bD(u==null?C.h:u,22,C.J),s,s,s)],w)
return B.bz(r,B.aa(w,C.A,C.hm,C.i),q,s,C.ah,s,3)}}
A.uN.prototype={
Lz(d){return this.aSH(d)},
aSH(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eq("finance_summary",B.a4(["p_from",E.r9(d.a),"p_to",E.r9(d.b)],s,r),r),$async$Lz)
case 3:q=f
if(q==null){u=D.apP
w=1
break}if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.aqg
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lz,v)},
Ly(d){return this.aSG(d)},
aSG(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ly=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eq("finance_kpis",B.a4(["p_from",E.r9(d.a),"p_to",E.r9(d.b)],s,r),r),$async$Ly)
case 3:q=f
if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.apw
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ly,v)},
pB(d){return this.aqx(d)},
aqx(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pB=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a4(["from",E.r9(d.a),"to",E.r9(d.b)],s,s)),$async$pB)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fA(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pB,v)},
Lu(d){return this.aSw(d)},
aSw(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lu=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("finance-export-pdf",B.a4(["from",E.r9(d.a),"to",E.r9(d.b)],s,s)),$async$Lu)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aH(J.a3(r,"base64"))
w=1
break}throw B.e(B.dI("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lu,v)}}
A.E3.prototype={
FS(d){return this.ajB(d)},
ajB(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FS=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lz(d),$async$FS)
case 7:q=f
o=A.aF9(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FS,v)},
FO(d){return this.ajm(d)},
ajm(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ly(d),$async$FO)
case 7:q=f
o=A.bSI(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FO,v)},
pB(d){return this.aqy(d)},
aqy(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pB=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pB(d),$async$pB)
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
p=r.Hs(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pB,v)},
Lt(d){return this.aSv(d)},
aSv(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lt=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lu(d),$async$Lt)
case 7:q=f
o=C.iP.cN(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lt,v)},
Hs(d){if(d instanceof B.ym)return d
if(d instanceof B.m2){if(d.b==="42501")return new B.vJ(d.a)
return new B.t9(d.a)}if(d instanceof B.Nd)return new B.t9("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B_("Unerwarteter Fehler: "+B.j(d))},
$iaEW:1}
A.qd.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vt.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wn.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAh.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBo.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o3.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CD.prototype={
gbE(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o4.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yp.prototype={
GO(d){return this.aqw(0)},
aqw(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GO=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dv)
s=t.r
r=s.aK(0,$.xk(),x.P)
p.a=null
w=3
return B.k(B.pa(new A.aER(p,t,r),x.H),$async$GO)
case 3:t.se4(0,f)
q=t.f
if(q.ght(q)==null){q=$.bvy()
s=s.e
s===$&&B.a()
s.ck(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GO,v)},
Ls(){return this.aSu()},
aSu(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Ls=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dv)
s=t.r.aK(0,$.xk(),x.P)
q.a=null
w=3
return B.k(B.pa(new A.aEQ(q,t,s),x.H),$async$Ls)
case 3:t.se4(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ls,v)}}
A.yq.prototype={
dA(d,e){var w=null,v=e.ao($.xk(),x.P),u=e.ao($.bvy(),x.aN)
return B.t_(B.dA(B.b([new B.fv("Finanzen","Dashboard",new A.agn(e.ao($.bvw(),x.b).gjc(),new A.aF0(this,d,e),new A.aF1(this,d,e),new A.aF2(d),new A.aF3(d),new A.aF4(this,d,e,v),w),w),C.az,new A.anW(v,w),C.c5,D.ag4,C.c5,B.dh(u,new A.aF5(),new A.aF6(),new A.aF7(),!1,!0,!1,x.d,x.l)],x.p),w,C.cN,w,C.F,!1),C.n,new A.aF8(e))},
Ji(d,e){return this.aL1(d,e)},
aL1(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Ji=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bvw()
w=3
return B.k(e.aK(0,s.ghP(),x.F).GO(0),$async$Ji)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bk(B.c5(null,null,null,null,null,C.t,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Ji,v)},
Bh(d,e){return this.awv(d,e)},
awv(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bh=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.bvw().ghP(),x.F).Ls(),$async$Bh)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bk(D.axT)
w=1
break}t=B.or(C.v,10)
w=4
return B.k($.bMl().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bh)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bh,v)},
Bi(d,e,f){return this.aIJ(d,e,f)},
aIJ(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bi=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j6(null,null,!0,null,new A.aEZ(f,d),d,null,!0,!0,x.cJ),$async$Bi)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nG(e.aK(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dP()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zw("finance_period",p,o,B.a4(["period_from",p.ef()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bi)
case 8:if(d.e!=null)d.P(x.q).f.bk(F.v9)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bi,v)}}
A.agn.prototype={
q(d){var w=this,v=null,u=A.alI(C.n,F.hU,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alI(v,D.abY,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alI(v,D.xU,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alI(C.ad,C.ji,C.ad,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.alI(C.aj,C.fP,C.aj,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.K,0,v,v)}}
A.alH.prototype={
q(d){var w,v=this,u=null,t=B.aB(12),s=B.aB(12),r=B.aB(12),q=v.w
if(q==null)q=C.a7
q=B.cp(q,1)
w=v.r
if(w==null)w=C.h
return B.H5(B.dC(!1,C.X,!0,t,B.ey(!1,s,!0,B.aU(u,B.cg(v.c,w,u,20),C.p,u,u,new B.aS(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a9,0,u,u,u,u,u,C.bq),u,v.d,u,u)}}
A.anW.prototype={
dA(d,e){var w=null,v=this.e,u=$.dP(),t=x.p
return B.bz(w,B.aa(B.b([D.a9e,C.D,B.ak(B.b([D.acQ,C.aE,B.ay(B.i(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,w,B.y(C.h,16,C.J),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.u,B.km(C.cg,B.b([new A.IR("Monat",new A.bhl(e),w,w),new A.IR("Jahr (YTD)",new A.bhm(e),w,w),new A.IR("Zeitraum w\xe4hlen \u2026",new A.bhn(this,d,e),D.ab3,w)],t),C.dt,6,8)],t),C.A,C.f,C.i),w,w,C.E,w,3)},
IE(d,e){return this.aHC(d,e)},
aHC(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IE=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avj(new A.bhk(),d,B.bO(B.aZ(t)-5,1,1,0,0,0,0),new B.lD(s.a,s.b,x.bz),B.bO(B.aZ(t)+1,1,1,0,0,0,0),C.e1),$async$IE)
case 2:r=g
if(r!=null)e.aK(0,$.xk().ghP(),x.V).wv(0,new E.lI(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IE,v)}}
A.IR.prototype={
q(d){var w=null,v=B.aB(9999),u=B.aB(9999),t=B.aB(9999),s=B.cp(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.cg(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.J),w,w,w))
return B.dC(!1,C.X,!0,v,B.ey(!1,u,!0,B.aU(w,B.ak(q,C.k,w,C.f,C.K,0,w,w),C.p,w,w,new B.aS(w,w,s,t,w,w,C.B),w,w,w,w,C.j5,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a9,0,w,w,w,w,w,C.bq)}}
A.Jj.prototype={
q(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jl(new A.bnV(this)),C.c5,D.a9i,C.u],r),p=this.c.w
if(p.length===0)q.push(B.bz(s,B.ak(B.b([D.adg,C.ar,B.ay(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.q,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a9,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.L(w,B.b([new A.agl(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.aa(w,C.k,C.f,C.i))}return B.aa(q,C.aa,C.f,C.i)}}
A.agl.prototype={
q(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a9,s=B.cp(u?C.n:C.a7,1),r=B.aB(4),q=w.c
r=B.aU(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bD(C.h,14,C.o),v,v,v),C.p,v,v,new B.aS(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ac,v,B.y(C.h,14,C.J),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.aa(B.b([q,B.i(t,v,v,v,v,B.y(C.q,12,C.l),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dx().aq(w.f)
return B.bz(v,B.ak(B.b([r,C.ar,t,B.i(q,v,v,v,v,B.y(u?C.aj:C.h,15,C.J),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.eh,v,3)}}
A.HY.prototype={
q(d){var w=null
return B.bz(C.ad,B.ak(B.b([D.adP,C.ar,B.ay(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fK,w,C.E,w,3)}}
A.a6T.prototype={
dA(d,e){return B.dh(e.ao($.bON(),x.e),new A.aJZ(),new A.aK_(),new A.aK0(),!1,!0,!1,x.X,x.l)}}
A.Ii.prototype={
q(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ava,C.u,B.jl(new A.bev(v,q,100-t.w.a,w,p)),C.u,new A.al1(u),C.az,D.av9,C.u,new A.ahf(t,u),C.az,D.av4,C.u,B.bA(u,!0,u,B.kL(u,B.bz(u,new A.TW(t,220,u),u,u,C.E,u,3),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bew(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.auZ,C.u,B.bA(u,!0,u,B.kL(u,new A.U8(t,200,!1,u),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bex(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.av2,C.u,new A.amI(t,u),C.az,D.av_,C.u,new A.aj2(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.az,D.av6,C.u,new A.asr(t,u)],s))
return B.aa(r,C.aa,C.f,C.i)}}
A.al1.prototype={
q(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.q,11,C.l).dm(1.35),w,w,w)}}
A.ame.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.ad:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bey(m,d):l
r=x.p
q=B.b([B.ay(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.q,10,C.o).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cp(C.ad,0.8)
n=B.aB(4)
q.push(B.aU(l,B.i("Ziel "+p,l,l,l,l,B.y(C.ad,9,C.o),l,l,l),C.p,l,l,new B.aS(l,l,o,n,l,l,C.B),l,l,l,l,C.nq,l,l,l))}q=B.b([B.ak(q,C.k,l,C.f,C.i,0,l,l),C.b5,B.aFd(C.dc,B.i(m.d,l,l,l,l,B.bD(w,22,C.o),l,l,l),C.ku)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ac,l,B.y(C.q,10,C.aD),l,l,l))
q.push(C.cy)
q.push(B.ak(B.b([new A.UJ("Vormonat",m.r,l),C.cx,new A.UJ("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.cy)
q.push(B.ay(new A.Yi(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.kL(l,B.bz(l,B.aa(q,C.A,C.f,C.i),l,l,C.cn,l,3),C.a8,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.UJ.prototype={
q(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aB(4)
return B.aU(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.q,9,C.o),r,r,r),C.p,r,r,new B.aS(C.a7,r,r,q,r,r,C.B),r,r,r,r,C.nq,r,r,r)}w=q>=0
v=w?C.aj:C.ad
u=v.ez(0.12)
t=B.cp(v,0.7)
s=B.aB(4)
return B.aU(r,B.ak(B.b([B.cg(w?F.aag:D.aaf,v,r,10),C.Zk,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.K,0,r,r),C.p,r,r,new B.aS(u,r,t,s,r,r,C.B),r,r,r,r,C.nq,r,r,r)}}
A.Yi.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ew(v,j[v]))
u=C.b.km(j,new A.bn1())
t=C.b.km(j,new A.bn2())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bn3(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5e(k,!1)
w=B.b([A.aKf(k,2,A.axy(!1,C.n.ez(0.16),0,k,!0,D.w5),C.n,0.35,k,D.DW,k,!0,!1,!0,!1,D.Fi,!1,10,D.YN,!0,C.ls,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oj(A.bxc(k,k,k,D.am1,l,D.BN,D.DS,D.DX,w,D.ag8,k,m,k,n,D.Y6,D.am2,D.a9y),C.ak,C.a2,k,k)}}
A.TW.prototype={
q(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aKG
w=C.b.fA(p,0,new A.b5c())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axH(B.b([A.a0X(q,q,D.Be,q,C.n,q,q,q,r.b,6),A.a0X(q,q,D.Be,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return new B.aQ(q,this.d,A.bCM(A.axA(q,q,u,q,q,A.a5e(q,!1),q,new A.ys(!0,!0,q,new A.b5d(),A.a_u(),!1,q,A.av3(),A.a_u()),q,v,q,q,new A.uP(!0,new A.pb(16,q,new A.q3(!0,new A.b5e(this),46,q),!0),D.kr,D.kr,new A.pb(16,q,new A.q3(!0,new A.b5f(p),26,q),!0)))),q)},
aKi(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.U8.prototype={
q(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b66(),w),x.i)
C.b.L(o,new B.ab(u,new A.b67(),w))
t=C.b.fA(o,0,new A.b68())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axH(B.b([A.a0X(q,q,q,q,C.n,q,q,q,v[s],14),A.a0X(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=new B.aQ(q,this.d,A.bCM(A.axA(q,q,n,q,q,A.a5e(q,!1),q,D.DX,q,o,q,q,new A.uP(!0,D.kr,D.kr,D.kr,new A.pb(16,q,new A.q3(!0,new A.b69(p),26,q),!0)))),q)
return this.e?r:B.bz(q,r,q,q,C.E,q,3)}}
A.amI.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aKF
w=new B.ab(l,new A.bf1(),B.ad(l).i("ab<1,F>")).km(0,new A.bf2())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dx()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.i9(C.at,C.f,C.i,C.k,m,C.b1,m,0,B.b([new B.jU(1,C.dA,B.aa(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,m,B.y(C.q,12,C.aD),m,m,m)],v),C.A,C.f,C.i),m),C.aE,B.i(p.aq(o),m,m,m,m,B.bD(C.h,16,C.o),m,m,m)],v),m),C.cy,new B.Dj(new B.d_(n,n,n,n),C.bv,B.EH(C.a7,8,C.d.bq(o/w,0,1),D.B2),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.I(r)===B.I(q)&&B.a_x(r.gbE(),q.gbE())
else q=!0
if(!q)o.push(C.u)
C.b.L(u,o)}return B.bz(m,B.aa(u,C.k,C.f,C.i),m,m,C.E,m,3)}}
A.aj2.prototype={
q(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.C6("Aktive Kunden",""+s,u),1)
w=B.ay(new A.C6("K\xe4ufe",""+t.a,u),1)
v=$.dx()
return B.bz(u,B.ak(B.b([s,w,B.ay(new A.C6("\xd8-Warenkorb",v.aq(t.d),u),1),B.ay(new A.C6("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.E,u,3)}}
A.C6.prototype={
q(d){var w=null
return B.aa(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.q,10,C.o).fw(0.6),w,w,w),C.bh,B.i(this.d,w,w,w,w,B.bD(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.K)}}
A.asr.prototype={
q(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bpc(),B.ad(q).i("ab<1,F>")).km(0,new A.bpd()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.i9(C.at,C.f,C.i,C.k,r,C.b1,r,0,B.b([new B.jU(1,C.dA,B.i(u.b,r,1,C.ac,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.q,12,C.J),r,r,r),B.i($.dx().aq(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.b5,new B.Dj(new B.d_(s,s,s,s),C.bv,B.EH(C.a7,6,C.d.bq(t/p,0,1),D.B2),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.I(u)===B.I(s)&&B.a_x(u.gbE(),s.gbE())
else s=!0
if(!s)t.push(C.D)
C.b.L(n,t)}return B.bz(r,B.aa(n,C.k,C.f,C.i),r,r,C.E,r,3)}}
A.wG.prototype={
q(d){var w=null
return B.bz(w,B.i(this.c,w,w,w,w,B.y(C.q,13,C.l),w,w,w),C.a9,w,C.E,w,3)}}
A.ahf.prototype={
dA(d,e){return B.dh(e.ao($.bvx(),x.fM),new A.b3B(this,d,e),new A.b3C(),new A.b3D(),!1,!0,!1,x.h,x.l)}}
A.B7.prototype={
W(){return new A.Ty()},
aXy(){return this.d.$0()}}
A.Ty.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fg(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pA[t].a
if(v)r=""
else{r=B.bp(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b1(r,".",",")}u.m(0,s,new B.bM(new B.cU(r,C.bH,C.aR),$.ag()))}q.e!==$&&B.b6()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c8(v,v.r,v.e,B.l(v).i("c8<2>"))
while(v.u()){w=v.d
w.S$=$.ag()
w.T$=0}this.am()},
ri(d){var w=this.e
w===$&&B.a()
w=C.c.bm(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.js(B.b1(w,",","."))
return w==null?0:w},
a3O(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pA[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b1(s,".",",")
t.ku(0,t.a.xY(C.aR,C.bH,s))}}this.J(new A.b3p())},
aEe(){this.a3O(D.apR)
this.c.P(x.q).f.bk(D.ayc)},
HU(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HU=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b9(a1)
for(e=0;e<8;++e)a2.E(0,D.pA[e].a)
q=a2
t=4
w=7
return B.k($.aEK.ci().zd(B.b(["csv","txt"],x.s),C.xG,!0),$async$HU)
case 7:p=a5
a2=p
o=a2==null?null:J.K3(a2.a).c
if(o==null){w=1
break}n=C.aG.ad_(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BS.cN(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.avW(l,B.bS("[;,\t]",!0,!1,!1))
if(J.ci(k)<2)continue
j=C.c.bm(J.a3(k,0)).toLowerCase()
i=J.Cz(q,j)?j:D.aqh.h(0,j)
if(i==null)continue
d=C.c.bm(C.b.n5(J.bPz(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.js(h)
if(g!=null)J.fo(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bk(D.axQ)
w=1
break}r.a3O(m)
r.c.P(x.q).f.bk(B.c5(null,null,null,null,null,C.t,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HU,v)},
I4(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I4=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3q(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b__("upsert_finance_balance",B.a4(["p_as_of",C.c.a0(n.ef(),0,10),"p_cash_and_bank",q.ri("cash_and_bank"),"p_receivables",q.ri("receivables"),"p_inventory_value",q.ri("inventory_value"),"p_other_current_assets",q.ri("other_current_assets"),"p_fixed_assets",q.ri("fixed_assets"),"p_current_liabilities",q.ri("current_liabilities"),"p_long_term_liabilities",q.ri("long_term_liabilities"),"p_equity",q.ri("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I4)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXy()
o=q.c
o.toString
B.bd(o,!1).f2()
q.c.P(x.q).f.bk(D.axU)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bk(B.c5(null,null,null,null,null,C.t,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b3r(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I4,v)},
q(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bD(C.h,18,C.o),r,r,r),p=s.f?r:new A.b3t(s,d),o=s.d
o===$&&B.a()
p=B.hr(D.acS,B.i("Stichtag: "+C.c.a0(o.ef(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.hr(D.adY,D.aDU,o?r:s.gaDg(),r),1)
v=x.p
w=B.b([p,C.D,B.ak(B.b([w,C.aE,B.ay(B.hr(D.adN,D.aDJ,o?r:s.gaEd(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.pA[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.f1(r,C.aV,!1,r,!0,C.t,r,B.fe(),o.h(0,p.a),r,r,r,r,r,2,new B.ce(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a8,!0,r,!0,r,!1,r,C.aZ,r,r,r,r,C.iv,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.as,r,C.a3,r,r,r,r),C.D],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.q,11,C.l),r,r,r))
p=B.f9(B.aa(w,C.aa,C.f,C.K),r,C.F)
o=s.f
w=B.dM(C.cZ,r,r,o?r:new A.b3u(d),r,r)
o=o?r:s.gaDY()
t=B.dK(C.n,C.h,r,r,r,r,r)
return B.lx(B.b([w,B.dY(s.f?F.Zn:C.ex,o,t)],v),C.m,new B.aQ(380,r,p,r),q)}}
A.bg.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.I(this)===B.I(e)&&B.a_x(this.gbE(),e.gbE())
else w=!0
return w},
gv(d){return(B.eB(B.I(this))^B.bKI(this.gbE()))>>>0},
j(d){B.bE1()
return B.I(this).j(0)}}
A.KO.prototype={
W(){return new A.Tz(B.A(x.S,x.I),new A.axK(B.A(x.x,x.T)),null,null)}}
A.Tz.prototype={
q(d){var w,v=this,u=v.a1M(),t=v.CW
t.toString
t=v.a1N(t.au(0,v.gfs().gp(0)))
w=v.a1N(u)
v.a.toString
return new A.KJ(new A.a0W(t,w,null),u,null)},
a1N(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axH(s.c,s.d,!1,r,s.a))}return d.aPx(w)},
a1M(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UC(t.ch)
if(r)s=w.a
r=t.y
t=t.aQs(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPy(A.bvZ(!1,!0,!0,v.d,v.c,u.gas2(),v.f,v.e))}return t},
as3(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafr()||e==null||e.a==null){w=v.cy
v.J(w.gaOX(w))
return}v.J(new A.b3G(v,e))},
lw(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1M(),new A.b3H(w)))}}
A.nN.prototype={
Vb(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axA(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQs(d,e){return this.Vb(null,null,d,e)},
aPy(d){return this.Vb(null,d,null,null)},
aPx(d){return this.Vb(d,null,null,null)},
X6(d,e,f){var w,v,u,t=A.kt(d.ch,e.ch,f,A.c2V(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bE8(d.d,e.d,f),q=A.bG2(d.e,e.e,f),p=A.bE6(d.c,e.c,f),o=e.a
o=A.a5e(B.a1d(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axA(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bE3(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbE(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axz.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fC.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axI(),B.ad(v).i("ab<1,F>")).km(0,new A.axJ())
v=v.length
return w+(v-1)*this.d},
gbE(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ik.prototype={
gbE(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.my.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0T.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0Y.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adP.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0Z.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CU.prototype={
gbE(){return[this.a,this.b,C.bT,C.w,null]}}
A.KP.prototype={}
A.a1_.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xz.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X6(v,w,d)}}
A.ahb.prototype={}
A.ahi.prototype={}
A.ahj.prototype={}
A.ahl.prototype={}
A.ahm.prototype={}
A.ahn.prototype={}
A.aho.prototype={}
A.ahp.prototype={}
A.ahq.prototype={}
A.axK.prototype={
UC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ur(0,0,!1)
v=new A.zf(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ur(t,u,!0)}w=null
try{w=C.b.oS(d,new A.axL())}catch(s){return new A.ur(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ur(q,r,!1)
u.m(0,v,j)
return j}}
A.ur.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.ahk.prototype={}
A.axM.prototype={
i9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_R(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac1(t,A.bvY(w,t.a),u)
l.y=u
l.aRO(e,u,f)
l.alB(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRX(d,e,m,t,r,s,n,o,f)}}},
ac1(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dI("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iP(p,B.ad(p).i("iP<1>")).aw(0,new A.axN(t,q,r,s))
w.push(new A.a5V(q))}return w},
aRO(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d_(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b3.dG(Math.max(s,a2),b5,b8)
a4=B.Q0(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Q0(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seU(null)
a6=b3.f.el()
u.drawRRect(B.ls(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.b0(u.save())
u.clipRect(B.dO(b1),$.p1()[1],!0)
a6=b3.f.el()
u.drawRRect(B.ls(a4),a6)
a6.delete()
u.restore()
b3.aRV(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gek(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cG($.an().r)
n=new B.hc(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.ik(k)
v.fW(A.aAS(b2,o.r),b3.r)}}}},
aRX(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AP(a5,a5,a5,a5,B.d9(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lu().ZR(a8,a7.b),a7.a),C.bT,C.w,a5,b6.c,C.bA)
w.afK(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dG(s,a6,b6)
q=b4.a
p=a4.dG(q,a6,b6)
o=b1.b
n=u+o.gev()
m=v+4+(o.gd_(0)+o.gd2(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aGh)j=v===D.a_2&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZS(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FQ(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lu().Kj(new B.G(v,t),d).b
s=$.lu()
q=w.b
p=q.c
q=q.a.c
a0=s.Kj(new B.G(p,q.gbU(q)),d)
q=g.gc9()
p=w.b.c
s=g.gai0()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VN(d,new A.axO(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aRV(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gek(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a1
s=w?new B.aW(i.x,i.y):C.a1
r=w?C.a1:new B.aW(i.e,i.f)
w=w?C.a1:new B.aW(i.r,i.w)
q=B.Q0(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a1:new B.aW(i.z,i.Q)
p=v?C.a1:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a1
q=B.Q0(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a1)}else q=B.bxU(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Ws(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac1(b2,A.bvY(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dG(k,b2,b3)
m=b0[q].c[o]
g=a7.dG(m.a+m.x.b,b2,b3)}else{h=a7.dG(j+m.x.b,b2,b3)
g=a7.dG(b0[q].c[o].b,b2,b3)}a7.dG(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dG(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dG(a4.a,b2,b3)
a6=a7.dG(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a1_(d,q,a0,o,a2,a1,new A.ew(d.a,v),new B.r(n,t))}}return null}}
A.a5V.prototype={}
A.a0W.prototype={
bn(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcQ(),t=new A.axM()
t.a13()
$.an()
w=B.b_()
w.b=C.bf
t.f=w
w=B.b_()
w.b=C.aW
t.r=w
w=B.b_()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.b_()
w.b=C.aW
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aaZ(this.d,v,u,t,d,C.bu,new B.bs(),B.aK(x.v))
t.bl()
t.YN(v.cy)
t.aeT()
return t},
bA(d,e){e.sio(0,this.d)
e.sYy(this.e)
e.scQ(B.bv(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.aaZ.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYy(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0B(d.cy)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a1q(t,v),new A.vF(u.aC,u.i3,u.cW,x.Q))
s.restore()},
ZL(d){var w=this,v=w.gC(0)
return new A.KP(w.fX.Ws(d,v,new A.vF(w.aC,w.i3,w.cW,x.Q)))}}
A.a0M.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CT.prototype={
K(){return"AxisSide."+this.b}}
A.tr.prototype={}
A.q3.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acn.prototype={
gbE(){return[!1,0,0,0]}}
A.pb.prototype={
gbE(){return[this.b,this.a,this.c,!0]}}
A.uP.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ew.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ew))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.ys.prototype={
gbE(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.py.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adR.prototype={
gbE(){return[this.a,this.b]}}
A.Q4.prototype={
gbE(){return[this.a,this.b]}}
A.mT.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nk.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kM.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lb.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a65.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aee.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MI.prototype={
gbE(){return[this.a,this.b,!0]}}
A.uO.prototype={}
A.MT.prototype={
adr(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iT(f,this.b,w)},
gbE(){return[this.a,this.b,this.c,0]}}
A.ah6.prototype={}
A.aha.prototype={}
A.akp.prototype={}
A.akH.prototype={}
A.akI.prototype={}
A.akK.prototype={}
A.akL.prototype={}
A.alx.prototype={}
A.alw.prototype={}
A.aly.prototype={}
A.ap4.prototype={}
A.aqS.prototype={}
A.aqT.prototype={}
A.asv.prototype={}
A.at8.prototype={}
A.at7.prototype={}
A.at9.prototype={}
A.axp.prototype={
Mx(d,e,f,g,h,i){return new B.ie(this.aVC(d,e,f,g,h,i),x.g4)},
aVB(d,e,f,g){return this.Mx(d,e,f,!0,g,!0)},
aVC(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mx(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lu().aj8(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fS(u-s,v)*v===u
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
A.KI.prototype={
a13(){var w,v=this
$.an()
w=B.b_()
w.b=C.aW
v.a=w
w=B.b_()
w.b=C.bf
v.b=w
w=B.b_()
w.b=C.bf
v.e=w
w=B.b_()
w.b=C.aW
v.c=w
v.d=B.b_()},
i9(d,e,f){var w=this
w.a_S(d,e,f)
w.aRK(e,f)
w.aRU(e,f)
w.aRT(e,f)},
aRT(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lu().OB(w.a,a1.r-a1.f)
u=$.bv9().Mx(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l0(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mO(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dw(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lu().OB(w.b,a1.y-a1.x)
u=$.bv9().Mx(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l0(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mO(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dw(n,m,d.a,f.d)}},
aRK(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aRU(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.l0(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mO(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seU(null)}o=n.e.el()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.l0(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mO(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seU(null)}o=n.e.el()
j.drawRect(B.dO(s),o)
o.delete()}},
aRS(d,e,f){var w,v
this.a_S(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ads(d,e,f,w)
if(v.b.length!==0)this.aRZ(d,e,f,w)},
ads(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l0(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dw(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=C.d.al(o,n.gbU(n).eG(0,2))
J.b0(r.save())
r.translate(h,g)
n=n.gNu().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
o=C.d.al(o,n.gbU(n).eG(0,2))
k=f.d
k===$&&B.a()
s.adt(0,n,new B.r(h,o),k)}}},
aRZ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=d.fd(o,a3,a2)
m=new B.r(n,0)
o=d.fd(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l0(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dw(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=n.gbU(n).eG(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.b0(r.save())
r.translate(f,e)
n=n.gNu().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
g=n.gbU(n).ae(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.adt(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZS(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KJ.prototype={
gakT(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakU(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakV(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakR(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
ale(d){var w,v=this,u=null,t=v.d,s=A.bwG(t.d),r=t.a
r=r.a&&A.bQ8(r.b)?r.b:u
w=B.b([B.aU(u,v.c,C.p,u,u,new B.aS(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.axr(w)
if(v.gakT())C.b.hz(w,s.$1(!0),new A.Az(D.B9,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakV())C.b.hz(w,s.$1(!0),new A.Az(D.mE,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakU())C.b.hz(w,s.$1(!0),new A.Az(D.Ba,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakR())C.b.hz(w,s.$1(!0),new A.Az(D.dL,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
q(d){return B.jl(new A.axq(this))}}
A.Rv.prototype={
W(){return new A.Y7(new B.bi(null,x.eF))}}
A.Y7.prototype={
axv(){switch(this.a.c.a){case 0:return C.ea
case 1:return C.fD
case 2:return C.dc
case 3:return C.fa}},
ay0(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
axx(d){this.a.toString
return},
ap(){this.aI()
$.cA.x1$.push(this.ga4h())},
bb(d){this.bD(d)
$.cA.x1$.push(this.ga4h())},
q(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay0()
return B.SL(B.b11(0,B.aU(v.axv(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aco.prototype={
bn(d){return A.bQ_(this.f,this.r,this.e)},
bA(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a0N.prototype={
hn(d){if(!(d.b instanceof B.hm))d.b=new B.hm(null,null,C.v)},
hX(d){if(this.B===C.at)return this.y7(d)
return this.ad3(d)},
aKu(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8X(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a8W(d,B.hC())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a8W(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.at?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.he(u,null)
break
case 1:q=B.he(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8X(p)
t=Math.max(t,o.aKu(p))
m=r.aG$}return new A.beE(n<1/0?n:s,t)},
cw(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a8W(o,B.mu()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.G(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.G(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8X(r==null?B.U(B.Z("RenderBox was not laid out: "+B.I(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
ea(d,e){return this.y8(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a4.sbh(0,null)
this.v0(d,e)},
l(){this.a4.sbh(0,null)
this.aoa()}}
A.beE.prototype={}
A.axs.prototype={}
A.jP.prototype={
gbE(){return[this.a,this.b]}}
A.nM.prototype={}
A.ah7.prototype={}
A.ah8.prototype={
aQ(d){var w,v,u
this.fq(d)
w=this.ah$
for(v=x.L;w!=null;){w.aQ(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fi(0)
w=this.ah$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ah9.prototype={}
A.Tw.prototype={
l(){var w,v,u
for(w=this.W0$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.Az.prototype={
goz(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dc
case 1:return C.fa
case 2:return C.ea
case 3:return C.fD}},
gb_c(){var w=this.d,v=A.bwG(w.d),u=A.bE5(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ae(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ae(0,new B.ai(u.a,0,u.c,0))}},
gahP(){var w=this.d,v=A.bE5(w.a),u=A.bwG(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd2(0)+(v.gd_(0)+v.gd2(0))
case 1:case 3:return u.gev()+v.gev()}},
aWl(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goz().c.d
if(o==null)o=$.lu().OB(d,f-e)
w=p.c
v=w!==D.mE
if((!v||w===D.dL)&&p.d instanceof A.nN){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bvY(u,d)
w=new B.iP(t,B.ad(t).i("iP<1>"))
s=w.giF(w).f1(0,new A.aYZ(u),x.W).fZ(0)}else{r=$.bv9()
w=!v||w===D.dL
v=p.d
q=r.aVB(w?v.w:v.z,o,f,e)
v=B.oh(q,new A.aZ_(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nM>")
w=B.Q(new B.ab(s,new A.aZ0(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goz()
w=j.goz()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aU(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mE
u=!v
t=!u||w===D.dL
s=j.e
r=t?s.a:s.b
t=j.ghJ()
s=!u||w===D.dL?C.F:C.at
q=B.b([],x.p)
if(w===D.B9||v)j.goz()
if(j.goz().c.a){v=!u||w===D.dL?r:j.goz().c.c
p=!u||w===D.dL?j.goz().c.c:r
o=j.gb_c()
n=!u||w===D.dL?C.at:C.F
j.gahP()
m=j.gahP()
l=!u||w===D.dL
k=j.d
l=l?k.f:k.x
u=!u||w===D.dL?k.r:k.y
q.push(B.aU(i,A.bXf(new A.axs(),n,j.aWl(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Ba||w===D.dL)j.goz()
return new B.es(t,i,i,B.bSM(q,C.k,s,i,C.f,C.K,0,i,i,C.b1),i)}}
A.a11.prototype={
gbE(){return[this.a,this.b]}}
A.a5d.prototype={
gbE(){return[this.a,this.b]}}
A.N_.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5f.prototype={
gabm(d){return!1},
gbE(){return[!1,!1,!1,!1]}}
A.axX.prototype={}
A.aEg.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.aht.prototype={}
A.akE.prototype={}
A.akF.prototype={}
A.akM.prototype={}
A.KS.prototype={
i9(d,e,f){}}
A.vF.prototype={}
A.hl.prototype={
gdL(){return null},
gafr(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.MZ
if(w)return!0
return!(v instanceof A.MW)&&!(v instanceof A.MV)&&!(v instanceof A.MX)&&!(v instanceof A.MU)&&!w&&!(v instanceof A.MY)}}
A.a5j.prototype={
gdL(){return this.a.b}}
A.a5k.prototype={
gdL(){return this.a.b}}
A.a5l.prototype={
gdL(){return this.a.b}}
A.MV.prototype={}
A.MW.prototype={}
A.a5o.prototype={
gdL(){return this.a.b}}
A.MY.prototype={}
A.MZ.prototype={
gdL(){return this.a.b}}
A.a5i.prototype={
gdL(){return this.a.b}}
A.a5h.prototype={
gdL(){return this.a.b}}
A.MU.prototype={
gdL(){return this.a.b}}
A.a5m.prototype={
gdL(){return this.a.gdL()}}
A.a5n.prototype={
gdL(){return this.a.gdL()}}
A.MX.prototype={
gdL(){return this.a.gdL()}}
A.G1.prototype={
YN(d){this.V=d.b
this.U=d.c
this.a4=d.d},
aeT(){var w=this,v=null,u=w.ai=B.bxA(v,v)
u.ay=new A.aUg(w)
u.ch=new A.aUh(w)
u.CW=new A.aUi(w)
u.cy=new A.aUj(w)
u.cx=new A.aUk(w)
u=w.aE=B.GR(v,-1,v)
u.B=new A.aUl(w)
u.Y=new A.aUm(w)
u.V=new A.aUn(w)
u=w.bC=B.a7c(v,w.a4,v)
u.p3=new A.aUo(w)
u.p4=new A.aUp(w)
u.RG=new A.aUq(w)},
cw(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kK(d){return!0},
mY(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.rF(d)
w=v.aE
w===$&&B.a()
w.rF(d)
w=v.ai
w===$&&B.a()
w.rF(d)}else if(x.gJ.b(d))v.l7(new A.a5n(d))},
gN0(d){return new A.aUr(this)},
gN2(d){return new A.aUs(this)},
l7(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZL(w):null
u.V.$2(d,v)
u.Y=C.bu},
gKP(d){return this.Y},
gFr(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fq(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijn:1}
A.Oj.prototype={
W(){return new A.VT(B.b([],x.r),B.A(x.S,x.I),new A.aKh(B.A(x.y,x.dj)),null,null)}}
A.VT.prototype={
q(d){var w,v=this,u=v.a4j(),t=v.CW
t.toString
t=v.aaW(t.au(0,v.gfs().gp(0)))
w=v.aaW(u)
v.a.toString
return new A.KJ(new A.a74(t,w,null),u,null)},
aaW(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,ea>")
w=B.Q(new B.ab(w,new A.beJ(this,d),v),v.i("aw.E"))
return d.aQp(w,this.cy)},
a4j(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UC(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQE(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQ3(new A.EG(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayP(),t.c,t.d))}return r},
ayQ(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafr())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beH(v))
return}v.J(new A.beI(v,e))},
lw(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4j(),new A.beK(w)))}}
A.pK.prototype={
X6(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5e(B.a1d(d.a.b,j.b,f),j.a)
w=A.bE3(d.at,e.at,f)
v=A.bE6(d.c,e.c,f)
u=A.bE8(d.d,e.d,f)
t=A.bG2(d.e,e.e,f)
s=A.kt(d.ch,e.ch,f,A.c5_(),x.cz)
s.toString
r=A.kt(d.CW,e.CW,f,A.c4Z(),x.J)
r.toString
u=A.bxc(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vc(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bxc(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQE(d,e,f,g){return this.Vc(null,null,d,e,f,g,null)},
aQ3(d){var w=null
return this.Vc(w,d,w,w,w,w,w)},
aQp(d,e){var w=null
return this.Vc(d,w,w,w,w,w,e)},
gbE(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ea.prototype={
aqP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oS(n.a,new A.aKg())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fN))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b6()
n.b=q
r.toString
n.c!==$&&B.b6()
n.c=r
s.toString
n.d!==$&&B.b6()
n.d=s
t.toString
n.e!==$&&B.b6()
n.e=t}},
acJ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKf(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQa(d){return this.acJ(d,null)},
aQc(d){return this.acJ(null,d)},
gbE(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ok.prototype={
gbE(){return[this.a]}}
A.a0V.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mz.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KN.prototype={
gbE(){return[!1,this.b,this.c,!0]}}
A.yr.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.aK1.prototype={
K(){return"LabelDirection."+this.b}}
A.a5g.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EG.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a75.prototype={
gbE(){return[4,C.hN,16,D.xD,0,120,A.c51(),!1,!1,!1,0,C.I,A.c50()]}}
A.mW.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qb.prototype={}
A.ru.prototype={
gbE(){return[this.a,this.b,C.bT,C.w,null]}}
A.ts.prototype={
gbE(){return[this.a,this.b]}}
A.Gt.prototype={
gbE(){return[this.a]}}
A.Ol.prototype={}
A.zb.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X6(v,w,d)}}
A.ahg.prototype={}
A.ahh.prototype={}
A.ahu.prototype={}
A.akG.prototype={}
A.akJ.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.amn.prototype={}
A.amp.prototype={}
A.amq.prototype={}
A.amr.prototype={}
A.ams.prototype={}
A.aqR.prototype={}
A.asu.prototype={}
A.aKh.prototype={
UC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.zf(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zc(s,r,q,t,!0)}w=null
try{w=C.b.oS(d,new A.aKi())}catch(p){return D.ye}v=null
try{v=C.b.oS(w.a,new A.aKj())}catch(p){return D.ye}o=v.a
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
if(f<m)m=f}e=new A.zc(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zc.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amo.prototype={}
A.aKk.prototype={
i9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabm(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aP3(new B.H(0,0,u,v))}d.a_R(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aRQ(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRM(a3,q,a4)
d.aRR(a3,q,a4)
d.alA(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dI("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vo(q,i,j,k))}}d.aRY(a3,s,a4)
if(w.gabm(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRW(a2,a3,v,f,new A.Gt(g),a4)}},
aRM(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bwF(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Zk(o,e,u,f)
s=p.aj0(o,e,t,u,f)
r=p.Zm(o,e,t,u,f,!0)
q=p.aj_(o,e,t,u,f)
p.aRP(d,s,p.Zj(o,e,t,u,f,!0),f,e)
p.aRJ(d,q,r,f,e)
p.aRN(d,t,e)
p.aRL(d,t,e,f)}},
aRQ(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bwF(a6.a),a9=A.bwF(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cH<1>")
k=B.Q(new B.cH(m,l),l.i("aw.E"))
j=a3.Zk(a4,a6,n,b3)
i=a3.Zl(a4,a7.aQc(k),k,b3,j)
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
m=a3.fd(h,a4,b3)
l=a3.dG(g,a4,b3)
d=a3.fd(f,a4,b3)
a0=a3.dG(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gp(0)
a1.seU(u.mO(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mC(C.dw,C.bf,C.e4,C.ev,C.dT).el()
m=B.dO(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.U(B.vl(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aRR(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zq(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fN)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adr(s,q,new B.r(p,o))}}},
aRY(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKn())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Zq(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rt(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lq(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lq(q.$2(m,k))))
f=b1.dG(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dG(a2,w,b4)
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
b0=B.l0(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mO(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dw(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rt(d.a))
f.adr(t,j,new B.r(h,g))}}},
Zl(d,e,f,g,h){var w=this.aj1(d,e,f,g,h)
return w},
Zk(d,e,f,g){return this.Zl(d,e,f,g,null)},
aj1(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cG($.an().r):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f8(d,a0))
if(e===1)g.aA(new B.cr(d,a0))}else g.aA(new B.cr(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fd(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fd(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LN(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.ik(r)}return g},
Zm(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bxa(f)
v=J.Y(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cr(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cr(u,t))
w.aA(new B.cr(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pj())
return w},
aj0(d,e,f,g,h){return this.Zm(d,e,f,g,h,!1)},
Zj(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bxa(f)
v=J.Y(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cr(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cr(u,0))
w.aA(new B.cr(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pj())
return w},
aj_(d,e,f,g,h){return this.Zj(d,e,f,g,h,!1)},
aRP(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fd(t.a,w,g)
s=r.r
s===$&&B.a()
A.bxz(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fW(e,r.r)},
aRJ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.bxz(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRN(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Oc(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iq:C.e4
u.e=C.ev
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lu()
u.z=new B.zk(C.aA,w.c*0.57735+0.5)
d.a.fW(B.bxb(A.aAS(e,f.cy),w.b),this.f)},
aRL(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iq:C.e4
q.e=C.ev
q=f.b
q===$&&B.a()
q=s.fd(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fd(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.bxz(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bVd(t)
d.a.fW(A.aAS(e,f.cy),s.f)},
aRW(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bKd(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dI("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lu().ZR(b4,u.b)
s=u.a
r=w.k(0,C.iU)?new B.ko(1):w
q=new B.tp(new B.hS(s,a8,a8,C.bu,a8,a8,a8,a8,a8,a8,t),C.bT,C.w,r,a8,a8,a8,a8,C.bA,a8)
q.afK(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hN.gev()
k=o+(w-1)*4+(C.hN.gd_(0)+C.hN.gd2(0))
j=t-k-16
i=a7.ZS(b3,l,D.xD,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FQ(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bKc(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lu().Kj(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lu().Kj(new B.G(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VN(0,new A.aKl(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bXQ(q.r,q.w)
A:{if(D.E4===a5){a6=a3
break A}if(D.E5===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VN(0,new A.aKm(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zq(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Ws(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajs(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKo())
return t.length===0?null:t},
ajs(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fN))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qb(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vo.prototype={}
A.a74.prototype={
bn(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcQ(),t=new A.aKk()
t.a13()
$.an()
w=B.b_()
w.b=C.aW
t.f=w
w=B.b_()
w.b=C.bf
t.r=w
w=B.b_()
w.b=C.aW
t.w=w
w=B.b_()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a0d
t.x=w
w=B.b_()
w.b=C.aW
w.r=C.C.gp(0)
t.y=w
w=B.b_()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.b_()
w.b=C.aW
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.abb(this.d,v,u,t,d,C.bu,new B.bs(),B.aK(x.v))
t.bl()
t.YN(v.cx)
t.aeT()
return t},
bA(d,e){e.sio(0,this.d)
e.sYy(this.e)
e.scQ(B.bv(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.abb.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYy(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0B(d.cx)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a1q(t,v),new A.vF(u.aC,u.i3,u.cW,x.o))
s.restore()},
ZL(d){var w=this,v=w.gC(0)
return new A.Ol(w.fX.Ws(d,v,new A.vF(w.aC,w.i3,w.cW,x.o)))}}
A.Nq.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a1q.prototype={
aP3(d){this.a.a.clipRect(B.dO(d),$.p1()[1],!0)
return null},
adz(d,e){d.aM(this.a,e)},
VN(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b0(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lu()
s.Yw(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dw(d,e,f,g){var w=B.cG($.an().r)
w.aA(new B.f8(d.a,d.b))
w.aA(new B.cr(e.a,e.b))
this.a.fW(A.aAS(w,g),f)}}
A.zf.prototype={
gbE(){return[this.a]}}
A.amz.prototype={}
A.a1A.prototype={}
A.b1t.prototype={
Kj(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWV(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d_(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aWW(d,e){var w,v
if(d==null)return D.a0o
w=d.b
v=e/2
return d.aQf(w>v?v:w)},
OB(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZX(w)},
aZX(d){if(d<1)return this.aJ3(d)
return this.a80(d)},
aJ3(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a80(d*q)/q},
a80(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajg(d){if(d>=1)return 1
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
ZR(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j_
w=e.a?u.w.c5(e):e
v=B.ba(d,C.vD)
v=v==null?null:v.ay
return v===!0?w.c5(C.mk):w},
aj8(d,e,f,g){var w=C.d.ad(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qd)","D(ew)","~(w,fC)","F(ea,w)","R<~>()","F(F,qd)","bT(F,tr)","py(F)","w(qb,qb)","Ii(o3)","HY(B,bJ)","Jj(o4)","vt(@)","wn(@)","ea(F)","CD(@)","ah(F,tr)","uN(dB<uN>)","E3(dB<aEW>)","F(vt)","F(wn)","wG(B,bJ)","B7(z)","~()","qd(@)","~(hl,KP?)","xz(@)","F(ik)","D(fC)","~(w,ik)","~(@)","jP(nM)","c(nM)","jP(bI<w,F>)","jP(F)","nM(jP)","~(hl,Ol?)","ea(ea)","lI(GE<lI>)","zb(@)","R<o4>(ck<o4>)","ts(w)","uO(ew,F,ea,w)","ru(mW)","D(ea)","w(vo,vo)","F(fC)","R<o3>(ck<o3>)","w(w,w,F)","fC(fC,fC,F)","ik(ik,ik,F)","my(my,my,F)","CU?(fC,w,ik,w)","E(fC)","c(F,tr)","ew(ew,ew,F)","D(F)","mT(mT,mT,F)","nk(nk,nk,F)","kM(kM,kM,F)","lb(lb,lb,F)","f(kM)","f(lb)","ea(ea,ea,F)","mz(mz,mz,F)","uO(ew,F,ea,w{size:F?})","D(ew,ea)","F(r,r)","u<ts>(ea,u<w>)","y2(z)","u<ru>(u<mW>)","E(mW)","yp(eZ<B?>)"])
A.aES.prototype={
$1(d){var w=B.db(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qd(J.al(v==null?"":v),A.oY(w.h(0,"revenue_net")),A.oY(w.h(0,"expense_net")),A.oY(w.h(0,"result_net")))},
$S:z+24}
A.aET.prototype={
$1(d){var w,v,u,t=B.db(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.oY(t.h(0,"gross"))
u=B.bp(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vt(s,r,w,v,u,A.oY(t.h(0,"avg_basket")))},
$S:z+12}
A.aEU.prototype={
$1(d){var w,v=B.db(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bp(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.wn(u,t,w,A.oY(v.h(0,"gross")))},
$S:z+13}
A.aFa.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CD(v,u,J.al(t==null?"expense":t),A.u6(w.h(d,"net")),A.u6(w.h(d,"tax")),A.u6(w.h(d,"gross")))},
$S:z+15}
A.bsU.prototype={
$1(d){return new A.uN(d.ao($.c0(),x.A))},
$S:z+17}
A.bsV.prototype={
$1(d){return new A.E3(d.ao($.bOO(),x.D))},
$S:z+18}
A.buK.prototype={
$1(d){return E.aEV()},
$S:z+38}
A.bsW.prototype={
$1(d){var w=d.ao($.xk(),x.P)
return d.ao($.avI(),x.a).FS(w)},
$S:z+40}
A.bsT.prototype={
$1(d){var w=d.ao($.xk(),x.P)
return d.ao($.avI(),x.a).FO(w)},
$S:z+47}
A.bsS.prototype={
$1(d){return this.aiS(d)},
aiS(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.c0(),x.A).hm("finance_balance_kpis",t),$async$$1)
case 3:s=r.db(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:282}
A.aER.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avI(),x.a).pB(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEQ.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avI(),x.a).Lt(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF8.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bvy()
if(s.e==null)B.U(B.Z(y.b))
s.gcq().ck(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF0.prototype={
$0(){return this.a.Ji(this.b,this.c)},
$S:0}
A.aF1.prototype={
$0(){return this.a.Bh(this.b,this.c)},
$S:0}
A.aF2.prototype={
$0(){var w=x.z
return B.bd(this.a,!1).dX(B.dS(new A.aF_(),null,w),w)},
$S:0}
A.aF_.prototype={
$1(d){return F.D5},
$S:z+69}
A.aF3.prototype={
$0(){return B.o9(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aF4.prototype={
$0(){var w=this
return w.a.Bi(w.b,w.c,w.d)},
$S:0}
A.aF7.prototype={
$0(){return D.ash},
$S:130}
A.aF6.prototype={
$2(d,e){return new A.HY(B.j(d),null)},
$S:z+10}
A.aF5.prototype={
$1(d){return new A.Jj(d,null)},
$S:z+11}
A.aEZ.prototype={
$1(d){var w=null,v=this.a,u=$.dP()
v=B.i("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lx(B.b([B.dM(C.cZ,w,w,new A.aEX(u),w,w),B.dY(F.vg,new A.aEY(u),B.dK(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vh)},
$S:54}
A.aEX.prototype={
$0(){B.bd(this.a,!1).dh(!1)
return null},
$S:0}
A.aEY.prototype={
$0(){B.bd(this.a,!1).dh(!0)
return null},
$S:0}
A.bhl.prototype={
$0(){var w=this.a.aK(0,$.xk().ghP(),x.V),v=E.aEV()
w.wv(0,v)
return v},
$S:0}
A.bhm.prototype={
$0(){var w=this.a.aK(0,$.xk().ghP(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.lI(B.bO(B.aZ(v),1,1,0,0,0,0),v)
w.wv(0,u)
return u},
$S:0}
A.bhn.prototype={
$0(){return this.a.IE(this.b,this.c)},
$S:0}
A.bhk.prototype={
$2(d,e){return new B.oE(B.W(d).aPB(B.W(d).ax.aQu(C.h,C.n)),e,null)},
$S:1009}
A.bnV.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dx(),s=A.O4(!1,C.nZ,"Umsatz 7 %",t.aq(u.a),w),r=A.O4(!1,C.nZ,"Umsatz 19 %",t.aq(u.b),w),q=A.O4(!0,D.ab2,"Umsatz netto",t.aq(u.c),w),p=A.O4(!1,D.ab1,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return B.Nm(1.7,B.b([s,r,q,p,A.O4(!0,C.nR,"Ergebnis",n,o<0?C.ad:C.aj),A.O4(!1,C.fP,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.fs,!0)},
$S:101}
A.aK0.prototype={
$0(){return D.ase},
$S:130}
A.aK_.prototype={
$2(d,e){var w=null
return B.bz(C.ad,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fK,w,C.E,w,3)},
$S:349}
A.aJZ.prototype={
$1(d){return new A.Ii(d,null)},
$S:z+9}
A.bev.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dx(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("aw.E"),d=B.Q(new B.ab(g,new A.bek(),f),e)
i=A.jE(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.ab(g,new A.bel(),f),e)
d=A.jE(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.ab(g,new A.bem(),f),e)
k=A.jE(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.ben(),f),e)
w=A.jE(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.beo(),f),e)
v=A.jE(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.bep(),f),e)
u=A.jE(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.beq(),f),e)
t=A.jE(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.ab(g,new A.ber(),f),e)
h=A.jE(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.ab(g,new A.bes(m),f),e)
m=A.jE(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.ab(g,new A.bet(l),f),e)
l=A.jE(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.beu(j),f),e)
return B.Nm(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jE(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.fs,!0)},
$S:101}
A.bek.prototype={
$1(d){return d.b},
$S:z+0}
A.bel.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bem.prototype={
$1(d){return d.d},
$S:z+0}
A.ben.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beo.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bep.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.beq.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.ber.prototype={
$1(d){return d.d},
$S:z+0}
A.bes.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bet.prototype={
$1(d){return this.a},
$S:z+0}
A.beu.prototype={
$1(d){return this.a},
$S:z+0}
A.bew.prototype={
$0(){return A.bzs(this.b,1.45,new A.TW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bex.prototype={
$0(){return A.bzs(this.b,1.6,new A.U8(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bs0.prototype={
$1(d){var w=this,v=null,u=B.aB(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.i(w.a,v,v,v,v,B.bD(C.h,18,C.o),v,v,v),1),B.fh(v,v,D.adf,v,v,new A.bs_(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.L(s,B.b([B.i(w.b,v,v,v,v,B.y(C.q,12,C.aD),v,v,v),C.D],t))
s.push(C.u)
s.push(new B.aQ(17976931348623157e292,v,new B.lz(w.c,w.d,v),v))
return B.a4u(v,C.m,new B.ae(C.ah,B.aa(s,C.A,C.f,C.K),v),v,v,v,C.fM,C.v_,v,new B.d4(u,C.I),v)},
$S:1010}
A.bs_.prototype={
$0(){return B.bd(this.a,!1).f2()},
$S:0}
A.bey.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bzs(this.b,2.4,new A.Yi(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bn1.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bn2.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bn3.prototype={
$1(d){return A.aKf(null,1.4,null,C.ad,0.35,D.ahv,D.DW,null,!1,!1,!1,!1,D.Fi,!1,10,D.YN,!0,C.ls,B.b([new A.ew(0,d),new A.ew(this.a,d)],x.U))},
$S:z+14}
A.b5c.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5e.prototype={
$2(d,e){var w=null
return B.i(this.a.aKi(d),w,w,w,w,B.y(C.q,10,C.J),w,w,w)},
$S:z+16}
A.b5f.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.v7
return new B.ae(C.kY,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.q,9,C.J),w,w,w),w)},
$S:z+6}
A.b5d.prototype={
$1(d){return D.a9w},
$S:z+7}
A.b66.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b67.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b68.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b69.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.v7
return new B.ae(C.kY,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bf1.prototype={
$1(d){return d.d},
$S:z+19}
A.bf2.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bpc.prototype={
$1(d){return d.d},
$S:z+20}
A.bpd.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3D.prototype={
$0(){return D.asm},
$S:130}
A.b3C.prototype={
$2(d,e){return new A.wG("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b3B.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bz(m,B.aa(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.J),m,m,m),C.D,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.q,12.5,C.l),m,m,m),C.u,B.km(C.cg,B.b([B.hr(C.EQ,D.aFG,new A.b3v(w,v),m),B.hr(D.acT,D.aEB,new A.b3w(w,v),m)],u),C.dt,8,8)],u),C.A,C.f,C.i),C.a9,m,C.E,m,3)}w=new A.b3E(d)
t=C.b.fA(n.a.e.d,0,new A.b3x())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jl(new A.b3y(new A.b3F(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.aa(B.b([w,C.D,B.ak(B.b([B.ay(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.q,11,C.l),m,m,m),1),B.oC(D.ae2,D.aEW,new A.b3z(q,p),m),B.oC(D.adH,D.aEH,new A.b3A(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:274}
A.b3v.prototype={
$0(){return A.av0(this.a,this.b,null)},
$S:0}
A.b3w.prototype={
$0(){return A.auY(this.a,this.b)},
$S:0}
A.b3E.prototype={
$1(d){var w=B.bp(J.a3(this.a,d))
return w==null?null:w},
$S:1011}
A.b3F.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:33}
A.b3x.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jE(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i_,o.$1("liquidity1_pct")),m=A.jE(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i_,o.$1("liquidity2_pct")),l=A.jE(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i_,o.$1("liquidity3_pct"))
o=A.jE(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i_,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b1(w,".",",")+" %"}w=A.jE(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i_,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dx()
v=u.aq(v)
return B.Nm(p,B.b([n,m,l,o,w,A.jE(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.i_,v)],x.p),q,12,12,C.fs,!0)},
$S:101}
A.b3z.prototype={
$0(){return A.auY(this.a,this.b)},
$S:0}
A.b3A.prototype={
$0(){return A.av0(this.a,this.b,this.c)},
$S:0}
A.brZ.prototype={
$1(d){return new A.B7(this.a,new A.brY(this.b),this.c,null)},
$S:z+22}
A.brY.prototype={
$0(){var w=this.a,v=$.bvx()
if(w.e==null)B.U(B.Z(y.b))
w.gcq().ck(v)},
$S:0}
A.b3p.prototype={
$0(){},
$S:0}
A.b3q.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3r.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3t.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uc(u.b,B.bO(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3s(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3s.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3u.prototype={
$0(){return B.bd(this.a,!1).f2()},
$S:0}
A.b3G.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3H.prototype={
$1(d){return new A.xz(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axI.prototype={
$1(d){return d.e},
$S:z+27}
A.axJ.prototype={
$2(d,e){return d+e},
$S:44}
A.axL.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axN.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axO.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adz(v.d,v.e)},
$S:0}
A.axr.prototype={
$1(d){return 0},
$S:1012}
A.axq.prototype={
$2(d,e){return B.f0(C.bQ,this.a.ale(e),C.t,C.bk,null)},
$S:1013}
A.aYX.prototype={
$1(d){return d.a},
$S:z+31}
A.aYY.prototype={
$1(d){return d.b},
$S:z+32}
A.aYZ.prototype={
$1(d){return new A.jP(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZ_.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mE||v===D.dL))t=1-t
return new A.jP(d,t*w.d)},
$S:z+34}
A.aZ0.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goz(),p=d.a
r.goz()
r=$.lu()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajg(Math.abs(s.b-s.c)))
t=""}if(C.c.hL(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nM(d,q.c.b.$2(p,new A.tr(u+t,s.e)))},
$S:z+35}
A.aUg.prototype={
$1(d){this.a.l7(new A.a5j(d))},
$S:178}
A.aUh.prototype={
$1(d){this.a.l7(new A.a5k(d))},
$S:42}
A.aUi.prototype={
$1(d){this.a.l7(new A.a5l(d))},
$S:29}
A.aUj.prototype={
$0(){this.a.l7(D.a22)},
$S:0}
A.aUk.prototype={
$1(d){this.a.l7(new A.MW())},
$S:46}
A.aUl.prototype={
$1(d){this.a.l7(new A.a5o(d))},
$S:40}
A.aUm.prototype={
$0(){this.a.l7(D.a23)},
$S:0}
A.aUn.prototype={
$1(d){this.a.l7(new A.MZ(d))},
$S:79}
A.aUo.prototype={
$1(d){this.a.l7(new A.a5i(d))},
$S:168}
A.aUp.prototype={
$1(d){this.a.l7(new A.a5h(d))},
$S:166}
A.aUq.prototype={
$1(d){return this.a.l7(new A.MU(d))},
$S:163}
A.aUr.prototype={
$1(d){return this.a.l7(new A.a5m(d))},
$S:63}
A.aUs.prototype={
$1(d){return this.a.l7(new A.MX(d))},
$S:57}
A.beJ.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQa(w==null?B.b([],x.t):w)},
$S:z+37}
A.beH.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.beI.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.beG())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.Gt(w))},
$S:0}
A.beG.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.beK.prototype={
$1(d){return new A.zb(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKg.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.bsI.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bE7(t?A.bzg(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.ts(w,new A.yr(!0,A.bA2(),new A.bsH(v)))},
$S:z+41}
A.bsH.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bSK(A.bzg(d,e,f),w,A.c0t(d,e,f))},
$S:z+42}
A.bsF.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.iY(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v)
return new A.ru(C.d.j(d.b),w)},
$S:z+43}
A.aKi.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKj.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.aKn.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aKl.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKm.prototype={
$0(){this.a.adz(this.b,this.c)},
$S:0}
A.aKo.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.axB.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axC.prototype={
$2(d,e){return d+e},
$S:44}
A.axF.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iP(v,B.ad(v).i("iP<1>")).aw(0,new A.axG(w,this.a/(u+1),this.c))},
$S:0}
A.axG.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axD.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axE.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHo.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1014}
A.aAT.prototype={
$1(d){return d},
$S:1015};(function aliases(){var w=A.KI.prototype
w.a_R=w.i9
w.alA=w.aRS
w.alB=w.ads
w=A.Tw.prototype
w.aoa=w.l
w=A.KS.prototype
w.a_S=w.i9
w=A.G1.prototype
w.a0B=w.YN})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c46","bSH",72)
var q
v(q=A.Ty.prototype,"gaEd","aEe",23)
v(q,"gaDg","HU",4)
v(q,"gaDY","I4",4)
u(A.Tz.prototype,"gas2","as3",25)
t(A,"c2V",3,null,["$3"],["bQ1"],49,0)
t(A,"c2W",3,null,["$3"],["bQ2"],50,0)
t(A,"c2X",3,null,["$3"],["bQ3"],51,0)
t(A,"c2Z",4,null,["$4"],["c3K"],52,0)
w(A,"c2Y","c3J",53)
s(A,"bzw","c3L",54)
t(A,"c2Q",3,null,["$3"],["bSL"],55,0)
w(A,"a_u","c68",56)
w(A,"av3","c3O",7)
t(A,"c2S",3,null,["$3"],["bTx"],57,0)
t(A,"c2U",3,null,["$3"],["bYI"],58,0)
t(A,"c2R",3,null,["$3"],["bTw"],59,0)
t(A,"c2T",3,null,["$3"],["bYH"],60,0)
w(A,"cdh","bTv",61)
w(A,"cdi","bYG",62)
r(A.Y7.prototype,"ga4h","axx",30)
u(A.VT.prototype,"gayP","ayQ",36)
t(A,"c5_",3,null,["$3"],["bTZ"],63,0)
t(A,"c4Z",3,null,["$3"],["bQ5"],64,0)
w(A,"c52","c69",1)
t(A,"bKA",4,null,["$5$size","$4"],["bJ3",function(d,e,f,g){return A.bJ3(d,e,f,g,null)}],65,0)
s(A,"bA2","c67",66)
s(A,"bKB","c2D",67)
s(A,"bKE","c3R",68)
s(A,"bKD","c3N",3)
s(A,"bKC","c3M",3)
w(A,"c51","bKd",70)
w(A,"c50","bKc",71)
t(A,"a_z",3,null,["$3"],["c4Y"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.O,[A.a6S,A.agn,A.alH,A.IR,A.Jj,A.agl,A.HY,A.Ii,A.al1,A.ame,A.UJ,A.Yi,A.TW,A.U8,A.amI,A.aj2,A.C6,A.asr,A.wG,A.KJ,A.Az])
u(B.B,[A.uN,A.E3,A.bg,A.aht,A.ahj,A.ahl,A.ahm,A.ahb,A.akM,A.ahp,A.ahn,A.axX,A.asv,A.axK,A.ahk,A.KS,A.a5V,A.tr,A.aqT,A.aqS,A.aha,A.akL,A.ew,A.akI,A.akK,A.ap4,A.aly,A.at9,A.akJ,A.akp,A.akH,A.axp,A.beE,A.axs,A.ah7,A.nM,A.akE,A.akF,A.vF,A.hl,A.amm,A.amp,A.ahg,A.ahu,A.ahh,A.akG,A.ams,A.amq,A.asu,A.aqR,A.aKh,A.amo,A.vo,A.a1q,A.amz,A.a1A,A.b1t])
u(B.uL,[A.qd,A.vt,A.wn,A.aAh,A.aBo,A.o3,A.CD,A.o4])
u(B.nR,[A.aES,A.aET,A.aEU,A.aFa,A.bsU,A.bsV,A.buK,A.bsW,A.bsT,A.bsS,A.aF_,A.aF5,A.aEZ,A.aJZ,A.bek,A.bel,A.bem,A.ben,A.beo,A.bep,A.beq,A.ber,A.bes,A.bet,A.beu,A.bs0,A.bn3,A.b5d,A.b66,A.b67,A.bf1,A.bpc,A.b3B,A.b3E,A.b3F,A.brZ,A.b3H,A.axI,A.axL,A.axr,A.aYX,A.aYY,A.aYZ,A.aZ_,A.aZ0,A.aUg,A.aUh,A.aUi,A.aUk,A.aUl,A.aUn,A.aUo,A.aUp,A.aUq,A.aUr,A.aUs,A.beJ,A.beK,A.aKg,A.bsI,A.bsH,A.bsF,A.aKi,A.aKj,A.axB,A.aAT])
t(A.yp,B.fy)
u(B.xP,[A.aER,A.aEQ,A.aF8,A.aF0,A.aF1,A.aF2,A.aF3,A.aF4,A.aF7,A.aEX,A.aEY,A.bhl,A.bhm,A.bhn,A.aK0,A.bew,A.bex,A.bs_,A.bey,A.b3D,A.b3v,A.b3w,A.b3z,A.b3A,A.brY,A.b3p,A.b3q,A.b3r,A.b3t,A.b3s,A.b3u,A.b3G,A.axO,A.aUj,A.aUm,A.beH,A.beI,A.aKl,A.aKm,A.axF])
u(B.xX,[A.yq,A.anW,A.a6T,A.ahf])
u(B.xQ,[A.aF6,A.bhk,A.bnV,A.aK_,A.bev,A.bn1,A.bn2,A.b5c,A.b5e,A.b5f,A.b68,A.b69,A.bf2,A.bpd,A.b3C,A.b3x,A.b3y,A.axJ,A.axN,A.axq,A.beG,A.aKn,A.aKo,A.axC,A.axG,A.axD,A.axE,A.aHo])
u(B.M,[A.B7,A.Rv])
u(B.a0,[A.Ty,A.Y7])
u(B.ND,[A.KO,A.Oj])
u(B.ul,[A.Tz,A.VT])
t(A.a11,A.aht)
t(A.ah6,A.a11)
t(A.a0M,A.ah6)
u(A.a0M,[A.ahi,A.amn])
t(A.nN,A.ahi)
u(B.HX,[A.axz,A.adP,A.CT,A.aEg,A.aK1,A.Nq])
t(A.fC,A.ahj)
t(A.ik,A.ahl)
t(A.my,A.ahm)
t(A.a0T,A.ahb)
t(A.N_,A.akM)
u(A.N_,[A.aho,A.amr])
t(A.a0Y,A.aho)
t(A.a0Z,A.ahp)
t(A.CU,A.ahn)
u(A.axX,[A.KP,A.Ol])
t(A.adR,A.asv)
t(A.ahq,A.adR)
t(A.a1_,A.ahq)
u(B.b3,[A.xz,A.zb])
t(A.ur,A.ahk)
t(A.KI,A.KS)
u(A.KI,[A.axM,A.aKk])
u(B.Oe,[A.a0W,A.a74])
u(B.K,[A.G1,A.ah8])
u(A.G1,[A.aaZ,A.abb])
t(A.q3,A.aqT)
t(A.acn,A.aqS)
t(A.pb,A.aha)
t(A.uP,A.akL)
t(A.ys,A.akI)
t(A.py,A.akK)
t(A.Q4,A.ap4)
t(A.mT,A.aly)
t(A.nk,A.at9)
u(A.py,[A.alx,A.at8])
t(A.kM,A.alx)
t(A.lb,A.at8)
t(A.a5g,A.akJ)
u(A.a5g,[A.alw,A.at7])
t(A.a65,A.alw)
t(A.aee,A.at7)
t(A.MI,A.akp)
t(A.uO,A.akH)
t(A.MT,A.uO)
t(A.aco,B.h2)
t(A.ah9,A.ah8)
t(A.Tw,A.ah9)
t(A.a0N,A.Tw)
t(A.jP,A.ah7)
t(A.a5d,A.akE)
t(A.a5f,A.akF)
u(A.hl,[A.a5j,A.a5k,A.a5l,A.MV,A.MW,A.a5o,A.MY,A.MZ,A.a5i,A.a5h,A.MU,A.a5m,A.a5n,A.MX])
t(A.pK,A.amn)
t(A.ea,A.amm)
t(A.Ok,A.amp)
t(A.a0V,A.ahg)
t(A.mz,A.ahu)
t(A.KN,A.ahh)
t(A.yr,A.akG)
t(A.EG,A.amr)
t(A.a75,A.ams)
t(A.aml,A.ew)
t(A.mW,A.aml)
t(A.qb,A.mW)
t(A.ru,A.amq)
t(A.ts,A.asu)
t(A.Gt,A.aqR)
t(A.zc,A.amo)
t(A.zf,A.amz)
w(A.ahb,A.bg)
w(A.ahi,A.bg)
w(A.ahj,A.bg)
w(A.ahl,A.bg)
w(A.ahm,A.bg)
w(A.ahn,A.bg)
w(A.aho,A.bg)
w(A.ahp,A.bg)
w(A.ahq,A.bg)
w(A.ahk,A.bg)
w(A.ah6,A.bg)
w(A.aha,A.bg)
w(A.akp,A.bg)
w(A.akH,A.bg)
w(A.akI,A.bg)
w(A.akK,A.bg)
w(A.akL,A.bg)
w(A.alx,A.bg)
w(A.alw,A.bg)
w(A.aly,A.bg)
w(A.ap4,A.bg)
w(A.aqS,A.bg)
w(A.aqT,A.bg)
w(A.asv,A.bg)
w(A.at8,A.bg)
w(A.at7,A.bg)
w(A.at9,A.bg)
w(A.ah7,A.bg)
v(A.ah8,B.aD)
w(A.ah9,B.e7)
v(A.Tw,B.a4d)
w(A.aht,A.bg)
w(A.akE,A.bg)
w(A.akF,A.bg)
w(A.akM,A.bg)
w(A.ahg,A.bg)
w(A.ahh,A.bg)
w(A.ahu,A.bg)
w(A.akG,A.bg)
w(A.akJ,A.bg)
w(A.aml,A.bg)
w(A.amm,A.bg)
w(A.amn,A.bg)
w(A.amp,A.bg)
w(A.amq,A.bg)
w(A.amr,A.bg)
w(A.ams,A.bg)
w(A.aqR,A.bg)
w(A.asu,A.bg)
w(A.amo,A.bg)
w(A.amz,A.bg)})()
B.bpr(b.typeUniverse,JSON.parse('{"a6S":{"O":[],"c":[]},"E3":{"aEW":[]},"yp":{"fy":["bh<~>"],"fy.T":"bh<~>"},"Jj":{"O":[],"c":[]},"HY":{"O":[],"c":[]},"yq":{"bk":[],"M":[],"c":[]},"agn":{"O":[],"c":[]},"alH":{"O":[],"c":[]},"anW":{"bk":[],"M":[],"c":[]},"IR":{"O":[],"c":[]},"agl":{"O":[],"c":[]},"Ii":{"O":[],"c":[]},"wG":{"O":[],"c":[]},"B7":{"M":[],"c":[]},"a6T":{"bk":[],"M":[],"c":[]},"al1":{"O":[],"c":[]},"ame":{"O":[],"c":[]},"UJ":{"O":[],"c":[]},"Yi":{"O":[],"c":[]},"TW":{"O":[],"c":[]},"U8":{"O":[],"c":[]},"amI":{"O":[],"c":[]},"aj2":{"O":[],"c":[]},"C6":{"O":[],"c":[]},"asr":{"O":[],"c":[]},"ahf":{"bk":[],"M":[],"c":[]},"Ty":{"a0":["B7"]},"KO":{"M":[],"c":[]},"Tz":{"a0":["KO"]},"nN":{"bg":[]},"fC":{"bg":[]},"ik":{"bg":[]},"my":{"bg":[]},"CU":{"bg":[]},"xz":{"b3":["nN"],"b4":["nN"],"b4.T":"nN","b3.T":"nN"},"a0T":{"bg":[]},"a0Y":{"bg":[]},"a0Z":{"bg":[]},"a1_":{"bg":[]},"ur":{"bg":[]},"a0W":{"aX":[],"c":[]},"aaZ":{"K":[],"L":[],"jn":[],"aV":[]},"py":{"bg":[]},"mT":{"bg":[]},"nk":{"bg":[]},"kM":{"bg":[]},"lb":{"bg":[]},"uO":{"bg":[]},"a0M":{"bg":[]},"q3":{"bg":[]},"acn":{"bg":[]},"pb":{"bg":[]},"uP":{"bg":[]},"ys":{"bg":[]},"adR":{"bg":[]},"Q4":{"bg":[]},"a65":{"bg":[]},"aee":{"bg":[]},"MI":{"bg":[]},"MT":{"bg":[]},"KJ":{"O":[],"c":[]},"Rv":{"M":[],"c":[]},"Y7":{"a0":["Rv"]},"jP":{"bg":[]},"aco":{"h2":[],"aX":[],"c":[]},"a0N":{"e7":["K","hm"],"K":[],"aD":["K","hm"],"L":[],"aV":[],"aD.1":"hm","e7.1":"hm","aD.0":"K"},"Az":{"O":[],"c":[]},"a11":{"bg":[]},"a5d":{"bg":[]},"N_":{"bg":[]},"a5f":{"bg":[]},"a5j":{"hl":[]},"a5k":{"hl":[]},"a5l":{"hl":[]},"MV":{"hl":[]},"MW":{"hl":[]},"a5o":{"hl":[]},"MY":{"hl":[]},"MZ":{"hl":[]},"a5i":{"hl":[]},"a5h":{"hl":[]},"MU":{"hl":[]},"a5m":{"hl":[]},"a5n":{"hl":[]},"MX":{"hl":[]},"G1":{"K":[],"L":[],"jn":[],"aV":[]},"Oj":{"M":[],"c":[]},"VT":{"a0":["Oj"]},"pK":{"bg":[]},"ea":{"bg":[]},"mz":{"bg":[]},"mW":{"ew":[],"bg":[]},"qb":{"mW":[],"ew":[],"bg":[]},"ru":{"bg":[]},"ts":{"bg":[]},"Gt":{"bg":[]},"zb":{"b3":["pK"],"b4":["pK"],"b4.T":"pK","b3.T":"pK"},"Ok":{"bg":[]},"a0V":{"bg":[]},"KN":{"bg":[]},"yr":{"bg":[]},"a5g":{"bg":[]},"EG":{"bg":[]},"a75":{"bg":[]},"zc":{"bg":[]},"a74":{"aX":[],"c":[]},"abb":{"K":[],"L":[],"jn":[],"aV":[]},"zf":{"bg":[]}}'))
B.bIy(b.typeUniverse,JSON.parse('{"KI":1,"N_":1,"KS":1,"G1":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CD"),e:w("bh<o3>"),aN:w("bh<o4>"),fM:w("bh<a1<f,@>?>"),b:w("bh<~>"),W:w("jP"),B:w("nN"),dB:w("fC"),T:w("ur"),fj:w("ik"),G:w("my"),J:w("mz"),k:w("at"),cX:w("a1A<F>"),dO:w("uz"),R:w("aj<f,@>"),v:w("hH"),bz:w("lD<bc>"),f0:w("nX"),E:w("bg"),F:w("yp"),X:w("o3"),P:w("lI"),D:w("uN"),a:w("aEW"),d:w("o4"),cw:w("ew"),L:w("hm"),m:w("dp<w,E>"),cm:w("kM"),dv:w("mT"),g:w("C<nM>"),O:w("C<fC>"),Y:w("C<ik>"),C:w("C<bwr>"),U:w("C<ew>"),K:w("C<a5V>"),u:w("C<ea>"),bC:w("C<vo>"),aA:w("C<u<ew>>"),r:w("C<Gt>"),s:w("C<f>"),eg:w("C<tp>"),df:w("C<qb>"),p:w("C<c>"),n:w("C<F>"),t:w("C<w>"),eF:w("bi<a0<M>>"),Z:w("mW"),cz:w("ea"),hf:w("pK"),dj:w("zc"),fT:w("ru"),c_:w("io<oR<bh<~>>>"),x:w("zf<fC>"),y:w("zf<ea>"),I:w("u<w>"),ef:w("vt"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("k4"),aU:w("B"),Q:w("vF<nN>"),o:w("vF<pK>"),eo:w("pU"),gJ:w("pV"),V:w("nd<lI>"),N:w("f"),A:w("nf"),bO:w("bM"),er:w("tp"),j:w("wn"),dw:w("qb"),bY:w("ts"),cZ:w("qd"),gc:w("kl"),es:w("lb"),bN:w("nk"),l:w("c"),q:w("wZ"),g4:w("ie<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("w"),bn:w("xz?"),f3:w("zb?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("B?"),aD:w("kl?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B2=new B.ly(C.n,B.au("ly<E>"))
D.B9=new A.CT(0,"left")
D.mE=new A.CT(1,"top")
D.Ba=new A.CT(2,"right")
D.dL=new A.CT(3,"bottom")
D.aw3=new A.q3(!1,A.bzw(),22,null)
D.kr=new A.pb(16,null,D.aw3,!0)
D.a9x=new A.py(C.C,null,2,null)
D.w5=new A.KN(!1,D.a9x,A.c52(),!0)
D.a04=new A.axz(3,"spaceEvenly")
D.a0d=new B.xD(6,"dstIn")
D.Y4=new B.aW(3,3)
D.Be=new B.d_(D.Y4,D.Y4,C.a1,C.a1)
D.a0o=new B.bm(C.C,0,C.T,-1)
D.BN=new A.a5f()
D.a22=new A.MV()
D.a23=new A.MY()
D.aNH=new A.acn()
D.amc=w([],B.au("C<kM>"))
D.amd=w([],B.au("C<lb>"))
D.DS=new A.MI(D.amc,D.amd,!0)
D.a9e=new B.dJ("Zeitraum",!1,null)
D.a9i=new B.dJ("Konten (SKR 03)",!1,null)
D.xD=new A.aEg(0,"center")
D.aNT=new A.yr(!0,A.bA2(),A.bKA())
D.DW=new A.yr(!1,A.bA2(),A.bKA())
D.DX=new A.ys(!1,!0,null,A.av3(),A.a_u(),!0,null,A.av3(),A.a_u())
D.aNU=new A.ys(!0,!0,null,A.av3(),A.a_u(),!0,null,A.av3(),A.a_u())
D.a4n=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a48=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4x=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a4r=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3S=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3R=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4U=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a4g=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4X=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4R=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aql=new B.dp([50,D.a4n,100,D.a48,200,D.a4x,300,D.a4r,400,D.a3S,500,D.a3R,600,D.a4U,700,D.a4g,800,D.a4X,900,D.a4R],x.m)
D.dp=new B.rA(D.aql,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.air=w([8,4],x.t)
D.a9v=new A.py(D.dp,null,0.4,D.air)
D.a9w=new A.py(C.a7,null,0.5,null)
D.fN=new A.ew(0/0,0/0)
D.aw5=new A.q3(!0,A.bzw(),44,null)
D.mF=new A.pb(16,null,D.aw5,!0)
D.aw4=new A.q3(!0,A.bzw(),30,null)
D.mG=new A.pb(16,null,D.aw4,!0)
D.a9y=new A.uP(!1,D.mF,D.mG,D.mF,D.mG)
D.aNV=new A.uP(!0,D.mF,D.mG,D.mF,D.mG)
D.E4=new A.Nq(0,"left")
D.aaa=new A.Nq(1,"center")
D.E5=new A.Nq(2,"right")
D.aaf=new B.a5(57495,"MaterialIcons",null,!1)
D.xU=new B.a5(58927,"MaterialIcons",null,!1)
D.ab1=new B.a5(59005,"MaterialIcons",null,!0)
D.ab2=new B.a5(59007,"MaterialIcons",null,!0)
D.ab3=new B.a5(59011,"MaterialIcons",null,!1)
D.abY=new B.a5(62589,"MaterialIcons",null,!1)
D.abh=new B.a5(61349,"MaterialIcons",null,!1)
D.acQ=new B.aC(D.abh,20,C.h,null,null)
D.abo=new B.a5(61487,"MaterialIcons",null,!1)
D.acS=new B.aC(D.abo,18,null,null,null)
D.acT=new B.aC(D.xU,18,null,null,null)
D.adf=new B.aC(C.hS,null,C.h,null,null)
D.adg=new B.aC(C.la,null,C.q,null,null)
D.adH=new B.aC(C.nW,16,null,null,null)
D.adN=new B.aC(C.y1,16,null,null,null)
D.aaq=new B.a5(57912,"MaterialIcons",null,!1)
D.adP=new B.aC(D.aaq,null,C.ad,null,null)
D.abW=new B.a5(62584,"MaterialIcons",null,!1)
D.adY=new B.aC(D.abW,16,null,null,null)
D.ae2=new B.aC(D.xU,16,null,null,null)
D.ag4=new A.a6T(null)
D.aO_=new A.aK1(0,"horizontal")
D.ye=new A.zc(0,0,0,0,!1)
D.Fi=new A.Ok(0.5)
D.BT=new A.a75()
D.ag8=new A.EG(D.BT,A.bKE(),10,A.bKB(),!0,A.bKD(),A.bKC(),!1,null,null,null)
D.aO1=new A.EG(D.BT,A.bKE(),10,A.bKB(),!0,A.bKD(),A.bKC(),!0,null,null,null)
D.ahv=w([4,3],x.t)
D.auh=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.au7=new B.aI("receivables","Forderungen (kurzfristig)")
D.atX=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.atV=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.atL=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.atQ=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.aue=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.au6=new B.aI("equity","Eigenkapital")
D.pA=w([D.auh,D.au7,D.atX,D.atV,D.atL,D.atQ,D.aue,D.au6],B.au("C<+(f,f)>"))
D.aO4=w([],x.g)
D.alZ=w([],x.O)
D.am_=w([],x.Y)
D.am0=w([],B.au("C<my>"))
D.am1=w([],B.au("C<mz>"))
D.aO5=w([],x.U)
D.aO6=w([],x.u)
D.am2=w([],x.r)
D.aqW={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TI={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.aj(D.TI,[0,0,0,0,0,0,0,C.cc],B.au("aj<f,B>"))
D.aqU={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqf=new B.aj(D.aqU,[0,0,0,0],B.au("aj<f,w>"))
D.ara={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apC=new B.aj(D.ara,[0,0,0,0,null,null,null,null],B.au("aj<f,w?>"))
D.apw=new B.aj(D.aqW,[D.yT,D.yT,D.yT,C.cc,C.cc,C.cc,D.aqf,D.apC],x.R)
D.apP=new B.aj(D.TI,[0,0,0,0,0,0,0,C.cF],x.R)
D.aqX={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apR=new B.aj(D.aqX,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("aj<f,F>"))
D.aqT={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqg=new B.aj(D.aqT,[0,0,0,0,0,0,0,C.cF],x.R)
D.arl={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqh=new B.aj(D.arl,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("aj<f,f>"))
D.a52=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a5a=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3V=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a4j=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4t=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a5o=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3G=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a4l=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4w=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4S=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqm=new B.dp([50,D.a52,100,D.a5a,200,D.a3V,300,D.a4j,400,D.a4t,500,D.a5o,600,D.a3G,700,D.a4l,800,D.a4w,900,D.a4S],x.m)
D.Tu=new B.rA(D.aqm,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8u=new B.ai(32,32,32,32)
D.ase=new B.ae(D.a8u,C.bJ,null)
D.a8w=new B.ai(48,48,48,48)
D.ash=new B.ae(D.a8w,C.bJ,null)
D.asm=new B.ae(C.ah,C.bJ,null)
D.ame=w([],B.au("C<mT>"))
D.amf=w([],B.au("C<nk>"))
D.Y6=new A.Q4(D.ame,D.amf)
D.auZ=new B.fv("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.av_=new B.fv("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.av2=new B.fv("Automaten-Business","Umsatz je Automat",null,null)
D.av4=new B.fv("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.av6=new B.fv("Top","Meistverkaufte Produkte",null,null)
D.av9=new B.fv("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ava=new B.fv("Kennzahlen","Rentabilit\xe4t",null,null)
D.YN=new B.ta(C.G,C.v,0)
D.aDz=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.axN=new B.e2(D.aDz,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFu=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.axQ=new B.e2(D.aFu,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aDM=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.axR=new B.e2(D.aDM,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFo=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.axT=new B.e2(D.aFo,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aES=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.axU=new B.e2(D.aES,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aEP=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayc=new B.e2(D.aEP,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aOg=new B.S(!0,C.C,null,null,null,null,14,C.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDJ=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aDU=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aEB=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aEH=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aEW=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aFG=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_2=new A.adP(0,"auto")
D.aGh=new A.adP(1,"top")
D.aKF=new A.wG("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aKG=new A.wG("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdH","bOO",()=>B.iQ(new A.bsU(),x.D))
w($,"cdI","avI",()=>B.iQ(new A.bsV(),x.a))
w($,"ceG","xk",()=>B.byf(new A.buK(),x.P))
w($,"cdJ","bvy",()=>C.aJ.$1$1(new A.bsW(),x.d))
w($,"cdG","bON",()=>C.aJ.$1$1(new A.bsT(),x.X))
w($,"cdF","bvx",()=>C.aJ.$1$1(new A.bsS(),x.h))
w($,"cdE","bvw",()=>B.aZP(A.c46(),x.F,x.b))
w($,"c6V","bv9",()=>new A.axp())
v($,"cab","lu",()=>new A.b1t())})()};
(a=>{a["GS2+mTudyuA1iQp8O3XsCT7xOtU="]=a.current})($__dart_deferred_initializers__);