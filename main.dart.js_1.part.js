((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NZ(d,e,f,g,h){return new A.a6x(f,g,d,h,e,null)},
a6x:function a6x(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uN:function uN(d){this.a=d},
E7:function E7(d){this.a=d},
bRT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.St
w=x.f
v=x.N
u=x.z
t=A.aER(B.dj(w.a(e.h(a0,"current")),v,u))
s=A.aER(B.dj(w.a(e.h(a0,"prior_year")),v,u))
r=A.aER(B.dj(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cY(p,new A.aEz(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cY(o,new A.aEA(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cY(q,new A.aEB(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.dj(w.a(e.h(a0,"customer")),v,u)
m=B.b0(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p1(n.h(0,"app_gross"))
k=B.b0(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p1(n.h(0,"avg_basket"))
u=B.dj(w.a(e.h(a0,"derived")),v,u)
v=A.p1(u.h(0,"gross_margin_pct"))
e=A.p1(u.h(0,"net_margin_pct"))
w=A.p1(u.h(0,"ebitda_margin_pct"))
j=A.p1(u.h(0,"cashflow_operating"))
i=A.bqN(u.h(0,"revenue_growth_yoy_pct"))
h=A.bqN(u.h(0,"revenue_growth_mom_pct"))
g=A.bqN(u.h(0,"result_growth_yoy_pct"))
u=A.bqN(u.h(0,"result_growth_mom_pct"))
f=B.b0(J.a3(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.o9(t,s,r,p,o,q,new A.azO(m,l,k,n),new A.aAT(v,e,w,j,i,h,g,u),f)},
p1(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iY(J.am(d))
return w==null?0:w},
bqN(d){if(d==null)return null
if(typeof d=="number")return d
return B.iY(J.am(d))},
qi:function qi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vn:function vn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wj:function wj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azO:function azO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAT:function aAT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o9:function o9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEz:function aEz(){},
aEA:function aEA(){},
aEB:function aEB(){},
aER(d){var w=J.Y(d),v=A.u5(w.h(d,"revenue_net_7")),u=A.u5(w.h(d,"revenue_net_19")),t=A.u5(w.h(d,"revenue_net")),s=A.u5(w.h(d,"expense_net")),r=A.u5(w.h(d,"result_net")),q=A.u5(w.h(d,"vat_collected")),p=A.u5(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cY(w,new A.aES(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.oa(v,u,t,s,r,q,p,w)},
u5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iY(J.am(d))
return w==null?0:w},
CI:function CI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oa:function oa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aES:function aES(){},
bRS(d){return new A.yk(d,new B.ir(x.c_),C.dI)},
bry:function bry(){},
brz:function brz(){},
btk:function btk(){},
brA:function brA(){},
brx:function brx(){},
brw:function brw(){},
yk:function yk(d,e,f){this.r=d
this.a=e
this.f=f},
aEy:function aEy(d,e,f){this.a=d
this.b=e
this.c=f},
aEx:function aEx(d,e,f){this.a=d
this.b=e
this.c=f},
bRU(){return new A.yl(null)},
all(d,e,f,g,h){return new A.alk(e,h,g,f,d,null)},
yl:function yl(d){this.a=d},
aEQ:function aEQ(d){this.a=d},
aEI:function aEI(d,e,f){this.a=d
this.b=e
this.c=f},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
aEK:function aEK(d){this.a=d},
aEH:function aEH(){},
aEL:function aEL(d){this.a=d},
aEM:function aEM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEP:function aEP(){},
aEO:function aEO(){},
aEN:function aEN(){},
aEG:function aEG(d,e){this.a=d
this.b=e},
aEE:function aEE(d){this.a=d},
aEF:function aEF(d){this.a=d},
agb:function agb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alk:function alk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
any:function any(d,e){this.e=d
this.a=e},
bgY:function bgY(d){this.a=d},
bgZ:function bgZ(d){this.a=d},
bh_:function bh_(d,e,f){this.a=d
this.b=e
this.c=f},
bgX:function bgX(){},
IE:function IE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J4:function J4(d,e){this.c=d
this.a=e},
bmO:function bmO(d){this.a=d},
ag9:function ag9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HN:function HN(d,e){this.c=d
this.a=e},
byi(d,e,f,g,h){var w=null
return B.jS(w,w,!0,w,new A.bqI(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.alT(g,n,i,e,d,m,f,k,l,j,null)},
auB(d,e){return A.c1q(d,e)},
c1q(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auB=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bj(D.ayw)
t=4
o=e.aI(0,$.bZ(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.hw("finance-balance-sync",B.y(n,n)),$async$auB)
case 7:r=g
q=B.dj(x.f.a(r.a),x.N,n)
l.WJ()
if(J.d(J.a3(q,"configured"),!1)){l.bj(D.ayA)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bud()
if(e.e==null)B.S(B.a_(y.b))
e.gcv().cs(o)
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.WJ()
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auB,v)},
auE(d,e,f){var w=0,v=B.q(x.H)
var $async$auE=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.jS(null,null,!0,null,new A.bqG(f,e,e.aI(0,$.bZ(),x.A)),d,null,!0,!0,x.H),$async$auE)
case 2:return B.o(null,v)}})
return B.p($async$auE,v)},
a6y:function a6y(d){this.a=d},
aJQ:function aJQ(){},
aJP:function aJP(){},
aJO:function aJO(){},
I6:function I6(d,e){this.c=d
this.a=e},
bep:function bep(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bee:function bee(){},
bef:function bef(){},
beg:function beg(){},
beh:function beh(){},
bei:function bei(){},
bej:function bej(){},
bek:function bek(){},
bel:function bel(){},
bem:function bem(d){this.a=d},
ben:function ben(d){this.a=d},
beo:function beo(d){this.a=d},
beq:function beq(d,e){this.a=d
this.b=e},
ber:function ber(d,e){this.a=d
this.b=e},
bqI:function bqI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqH:function bqH(d){this.a=d},
akF:function akF(d){this.a=d},
alT:function alT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bes:function bes(d,e){this.a=d
this.b=e},
Ul:function Ul(d,e,f){this.c=d
this.d=e
this.a=f},
XT:function XT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmm:function bmm(){},
bmn:function bmn(){},
bmo:function bmo(d){this.a=d},
Tz:function Tz(d,e,f){this.c=d
this.d=e
this.a=f},
b57:function b57(){},
b59:function b59(d){this.a=d},
b5a:function b5a(d){this.a=d},
b58:function b58(){},
TK:function TK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5V:function b5V(){},
b5W:function b5W(){},
b5X:function b5X(){},
b5Y:function b5Y(d){this.a=d},
amm:function amm(d,e){this.c=d
this.a=e},
beX:function beX(){},
beY:function beY(){},
aiK:function aiK(d,e){this.c=d
this.a=e},
Ca:function Ca(d,e,f){this.c=d
this.d=e
this.a=f},
as5:function as5(d,e){this.c=d
this.a=e},
bo4:function bo4(){},
bo5:function bo5(){},
wC:function wC(d,e){this.c=d
this.a=e},
ah2:function ah2(d,e){this.e=d
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
bqG:function bqG(d,e,f){this.a=d
this.b=e
this.c=f},
bqF:function bqF(d){this.a=d},
Bc:function Bc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tc:function Tc(){var _=this
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
bf:function bf(){},
bBL(d){return new A.KC(d,C.au,C.dA,null,null)},
KC:function KC(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Td:function Td(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eM$=f
_.cu$=g
_.c=_.a=null},
b3G:function b3G(d,e){this.a=d
this.b=e},
b3H:function b3H(d){this.a=d},
ax6(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akO:f,p=a0==null?16:a0,o=d==null?D.a_p:d,n=g==null,m=n?A.buJ(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xc:a3
n=n?A.buJ(r,r,r,r,r,r,r,r):g
w=j==null?D.DQ:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.nT(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BJ,s,w,i,n)},
axd(d,e,f,g,h){var w=d==null?D.akP:d,v=e==null?2:e,u=g==null?C.lx:g
return new A.fF(h,f===!0,w,v,u)},
bP9(d,e,f){var w=d.a
w=C.d.aR(w+(e.a-w)*f)
return A.axd(A.kx(d.c,e.c,f,A.c2b(),x.fj),B.ac(d.d,e.d,f),!1,A.kx(d.e,e.e,f,A.a_6(),x.S),w)},
a0y(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SB
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aXe(f,v?8:m)
t=t.aXf(g,v?8:m)
v=d==null?A.bBJ(r,r,r,r,r):d
return new A.io(q,l,w,j,u,s,e,t,v,k==null?D.akQ:k)},
bPa(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mD(d.f,e.f,f),p=A.kx(d.r,e.r,f,A.a_6(),x.S),o=B.bV(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a0y(A.bBJ(v,u,null,!1,t),p,q,o,s,n,null,A.kx(d.y,e.y,f,A.c2c(),x.G),m,r)},
bPb(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mB(u,w,v,B.bV(d.d,e.d,f))},
bBJ(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dm
else w=d
return new A.a0u(g===!0,v,u,w,f)},
buJ(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0A(4,C.hU,16,D.xF,0,120,A.c2e(),!1,!1,D.Z8,0,C.I,A.c2d())
else w=k
v=j==null?C.l0:j
return new A.a0z(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c2Z(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D_(C.d.j(f.b),v)},
c2Y(d){return A.azc(D.dm,15)},
nT:function nT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ax5:function ax5(d,e){this.a=d
this.b=e},
fF:function fF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axe:function axe(){},
axf:function axf(){},
io:function io(d,e,f,g,h,i,j,k,l,m){var _=this
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
mB:function mB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0u:function a0u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0z:function a0z(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adE:function adE(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KD:function KD(d){this.a=d},
a0B:function a0B(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xw:function xw(d,e){this.a=d
this.b=e},
agZ:function agZ(){},
ah5:function ah5(){},
ah6:function ah6(){},
ah8:function ah8(){},
ah9:function ah9(){},
aha:function aha(){},
ahb:function ahb(){},
ahc:function ahc(){},
ahd:function ahd(){},
axg:function axg(d){this.a=d},
axh:function axh(){},
up:function up(d,e,f){this.a=d
this.b=e
this.c=f},
ah7:function ah7(){},
axi:function axi(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axj:function axj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axk:function axk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5A:function a5A(d){this.b=d},
a0x:function a0x(d,e,f){this.d=d
this.e=e
this.a=f},
aaL:function aaL(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i2=e
_.cZ=f
_.fW=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bC=_.aF=_.aj=_.aq=$
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
c3_(d,e){var w=null
return new A.Rf(e.w,B.k(e.r,w,w,w,w,w,w,w),w)},
awZ(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pc(t,e.b,new A.q7(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bD7(d,e,f){var w=A.awZ(d.b,e.b,f),v=A.awZ(d.d,e.d,f),u=A.awZ(d.e,e.e,f)
return new A.uP(e.a,w,A.awZ(d.c,e.c,f),v,u)},
bRW(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ew(w,v)},
bD5(d,e,f){return new A.yn(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5o(d){return!0},
c32(d){return D.a89},
bD6(d,e,f,g){var w
if(d==null)w=f==null?C.D:null
else w=d
return new A.pz(w,f,g,e)},
bF5(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c27(),x.dv)
v.toString
w=A.kx(d.b,e.b,f,A.c29(),x.bN)
w.toString
return new A.PO(v,w)},
bSH(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.mX(t,w,v,u)},
bXW(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nn(t,w,v,u)},
bSG(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pt(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bSE(B.buB(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_6(),x.S)
if(u==null)u=v==null?C.D:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
bXV(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pt(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bXT(B.buB(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_6(),x.S)
if(u==null)u=v==null?C.D:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bSE(d,e,f,g,h,i){return new A.a5L(f,!1,g,i,d,e)},
bSF(d){return C.d.ak(d.e,1)},
bXT(d,e,f,g,h,i){return new A.ae2(f,!1,g,i,d,e)},
bXU(d){return C.d.ak(d.e,1)},
bD1(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c26(),x.cm)
v.toString
w=A.kx(d.b,e.b,f,A.c28(),x.es)
w.toString
return new A.MB(v,w,!0)},
bRV(d,e,f){return new A.MI(d,e==null?4:e,f)},
a0n:function a0n(){},
CZ:function CZ(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.r=d
this.w=e},
q7:function q7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acc:function acc(){},
pc:function pc(d,e,f,g){var _=this
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
yn:function yn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pz:function pz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adG:function adG(){},
PO:function PO(d,e){this.a=d
this.b=e},
mX:function mX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nn:function nn(d,e,f,g){var _=this
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
a5L:function a5L(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae2:function ae2(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MB:function MB(d,e,f){this.a=d
this.b=e
this.c=f},
uO:function uO(){},
MI:function MI(d,e,f){this.a=d
this.b=e
this.c=f},
agU:function agU(){},
agY:function agY(){},
ak4:function ak4(){},
akk:function akk(){},
akl:function akl(){},
akn:function akn(){},
ako:function ako(){},
ala:function ala(){},
al9:function al9(){},
alb:function alb(){},
aoE:function aoE(){},
aqw:function aqw(){},
aqx:function aqx(){},
as9:function as9(){},
asO:function asO(){},
asN:function asN(){},
asP:function asP(){},
awV:function awV(){},
Kw:function Kw(){},
Kx:function Kx(d,e,f){this.c=d
this.d=e
this.a=f},
awX:function awX(d){this.a=d},
awW:function awW(d){this.a=d},
Rf:function Rf(d,e,f){this.c=d
this.e=e
this.a=f},
XI:function XI(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWr(d,e,f){var w=B.ad(f),v=w.i("ab<1,jV>")
v=B.Q(new B.ab(f,new A.aZ1(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZ2(),w),w.i("av.E"))
return new A.acd(e,d,v,w,null)},
bP6(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6o(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tn(v,C.ao,C.w,new B.kp(1),v,v,v,v,C.bw,v)
u=new A.a0o(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.g))
u.bk()
return u},
acd:function acd(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZ1:function aZ1(){},
aZ2:function aZ2(){},
a0o:function a0o(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.W2$=h
_.aT0$=i
_.dk$=j
_.af$=k
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
bey:function bey(d,e){this.a=d
this.b=e},
awY:function awY(){},
jV:function jV(d,e){this.a=d
this.b=e},
nS:function nS(d,e){this.a=d
this.b=e},
agV:function agV(){},
agW:function agW(){},
agX:function agX(){},
Ta:function Ta(){},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZ3:function aZ3(d){this.a=d},
aZ4:function aZ4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZ5:function aZ5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4S(d,e){var w=d==null?B.cT(C.D,1):d
return new A.a4R(e!==!1,w)},
a0D:function a0D(){},
a4R:function a4R(d,e){this.a=d
this.b=e},
MP:function MP(){},
a4T:function a4T(){},
axt:function axt(){},
aDO:function aDO(d,e){this.a=d
this.b=e},
ahg:function ahg(){},
akh:function akh(){},
aki:function aki(){},
akp:function akp(){},
KG:function KG(){},
vy:function vy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hl:function hl(){},
a4X:function a4X(d){this.a=d},
a4Y:function a4Y(d){this.a=d},
a4Z:function a4Z(d){this.a=d},
MK:function MK(){},
ML:function ML(){},
a51:function a51(d){this.a=d},
MN:function MN(){},
MO:function MO(d){this.a=d},
a4W:function a4W(d){this.a=d},
a4V:function a4V(d){this.a=d},
MJ:function MJ(d){this.a=d},
a5_:function a5_(d){this.a=d},
a50:function a50(d){this.a=d},
MM:function MM(d){this.a=d},
FU:function FU(){},
aUc:function aUc(d){this.a=d},
aUd:function aUd(d){this.a=d},
aUe:function aUe(d){this.a=d},
aUf:function aUf(d){this.a=d},
aUg:function aUg(d){this.a=d},
aUh:function aUh(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
aUk:function aUk(d){this.a=d},
aUl:function aUl(d){this.a=d},
aUm:function aUm(d){this.a=d},
aUn:function aUn(d){this.a=d},
aUo:function aUo(d){this.a=d},
Oa:function Oa(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vw:function Vw(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eM$=g
_.cu$=h
_.c=_.a=null},
beD:function beD(d,e){this.a=d
this.b=e},
beB:function beB(d){this.a=d},
beC:function beC(d,e){this.a=d
this.b=e},
beA:function beA(){},
beE:function beE(d){this.a=d},
bvZ(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pK(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aK0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SB:u
else w=g
v=f==null?A.ax4(!1,u,0,u,!1,D.vQ):f
w=new A.e7(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ax4(!1,u,0,u,!1,D.vQ):d,j,a0,i,s,!1,p)
w.aqZ(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bT8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bBK(d.ay,e.ay,f)
v=A.bBK(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kx(d.cy,e.cy,f,A.a_6(),x.S)
r=B.Z(d.r,e.r,f)
q=B.rf(d.w,e.w,f)
p=A.kx(d.a,e.a,f,A.c25(),x.cw)
p.toString
o=B.bFC(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aK0(v,m,w,r,e.z,s,new A.ym(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ob(n),!1,u,o,!0,e.cx,p)},
ax4(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
else w=e
return new A.a0w(h,w,g,i,f,!1)},
bBK(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.rf(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bD6(t,A.kx(v.d,u.d,f,A.a_6(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.rf(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.ax4(!1,s,v,u,e.a,new A.KB(!1,r,w.c,!0))},
bPc(d,e,f){var w=B.Z(d.c,e.c,f),v=B.rf(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
return new A.mC(e.a,e.b,w,v)},
c5p(d){return!0},
by3(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iW)return A.byS(w.a,A.bvF(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dm:w},
c_O(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iW)w=A.byS(v.a,A.bvF(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dm}return A.azc(w,40)},
bI7(d,e,f,g,h){var w,v=A.by3(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iW)w=A.byS(u.a,A.bvF(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dm}u=A.azc(w,40)
return new A.MI(v,h==null?4:h,u)},
c5n(d,e){return!0},
c1T(d,e){return Math.abs(d.a-e.a)},
c35(d,e){var w=J.cY(e,new A.brn(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c31(d,e){return-1/0},
c30(d,e){return d.a[e].b},
bJj(d){var w=J.cY(d,new A.brk(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bJi(d){return A.azc(D.dm,15)},
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
e7:function e7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aK1:function aK1(){},
Ob:function Ob(d){this.a=d},
a0w:function a0w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mC:function mC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KB:function KB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ym:function ym(d,e,f){this.a=d
this.b=e
this.c=f},
aJR:function aJR(d,e){this.a=d
this.b=e},
a4U:function a4U(){},
EL:function EL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brn:function brn(d){this.a=d},
brm:function brm(d){this.a=d},
a6M:function a6M(){},
brk:function brk(){},
n2:function n2(){},
qg:function qg(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rt:function rt(d,e){this.a=d
this.b=e},
tr:function tr(d,e){this.a=d
this.b=e},
Gk:function Gk(d){this.a=d},
Oc:function Oc(d){this.a=d},
z8:function z8(d,e){this.a=d
this.b=e},
ah3:function ah3(){},
ah4:function ah4(){},
ahh:function ahh(){},
akj:function akj(){},
akm:function akm(){},
am_:function am_(){},
am0:function am0(){},
am1:function am1(){},
am3:function am3(){},
am4:function am4(){},
am5:function am5(){},
am6:function am6(){},
aqv:function aqv(){},
as8:function as8(){},
aK2:function aK2(d){this.a=d},
aK3:function aK3(){},
aK4:function aK4(){},
z9:function z9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
am2:function am2(){},
aK5:function aK5(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aK8:function aK8(){},
aK6:function aK6(d,e,f){this.a=d
this.b=e
this.c=f},
aK7:function aK7(d,e,f){this.a=d
this.b=e
this.c=f},
aK9:function aK9(){},
vj:function vj(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6L:function a6L(d,e,f){this.d=d
this.e=e
this.a=f},
aaY:function aaY(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i2=e
_.cZ=f
_.fW=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bC=_.aF=_.aj=_.aq=$
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
buI(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.ax7(),m.i("ab<1,F>")).km(0,new A.ax8()),k=e-l,j=new A.axb(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aB(0,new A.ax9(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aB(0,new A.axa(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ax7:function ax7(){},
ax8:function ax8(){},
axb:function axb(d,e,f){this.a=d
this.b=e
this.c=f},
axc:function axc(d,e,f){this.a=d
this.b=e
this.c=f},
ax9:function ax9(d,e,f){this.a=d
this.b=e
this.c=f},
axa:function axa(d,e,f){this.a=d
this.b=e
this.c=f},
bvF(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ad(w).i("iX<1>")).aB(0,new A.aH5(v,d))
else throw B.e(B.bD('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aH5:function aH5(d,e){this.a=d
this.b=e},
aAm(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAn(),w),w.i("av.E"))
return A.c2U(d,new A.a1c(v,x.C))}else return d},
aAn:function aAn(){},
bX2(d,e){var w=!0
if(d!==C.f9)if(!(d===C.ao&&e===C.w))w=d===C.iw&&e===C.aY
if(w)return D.E1
else{w=!0
if(d!==C.iv)if(!(d===C.iw&&e===C.w))w=d===C.ao&&e===C.aY
if(w)return D.E2
else return D.a8N}},
Ne:function Ne(d,e){this.a=d
this.b=e},
a12:function a12(d,e){this.a=d
this.b=e},
ze:function ze(d,e){this.a=d
this.$ti=e},
amd:function amd(){},
c2U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.al(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ad,k,k,h)
for(j=B.Mv(d),w=B.b([],x.I),v=new B.Mx(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.S(B.fu('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Mw(v,r)
v.D_()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.D_()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ej(B.b([],i),!0,s)
p=new B.JY(new B.ck(t,p,k,new B.ap0([q,o,o+m,!0]),l),C.p,k)
h.push(p)
l=g.f
if(l!=null)p.iz(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1c:function a1c(d,e){this.a=d
this.b=0
this.$ti=e},
b1v:function b1v(){},
bvu(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bPf(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azc(d,e){var w=1-e/100
return B.aC(d.gfH(d),C.d.aR(d.gNy()*w),C.d.aR(d.gFV()*w),C.d.aR(d.gK6()*w))},
bD4(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
bvv(d){var w=d.a,v=w?A.aZ0(d.b):0,u=w?A.aZ0(d.c):0,t=w?A.aZ0(d.d):0
return new B.ak(v,u,t,w?A.aZ0(d.e):0)},
bUl(d){var w
if(d.c===0){d.seX(null)
w=B.c_(d.r)
d.r=B.aC(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwl(d,e,f,g){var w
if(f!=null){d.r=C.D.gp(0)
d.seX(f.mH(0,g))}else{w=e==null?C.F:e
d.r=w.gp(w)
d.seX(null)}},
aZ0(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kx(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4d(d,e,f){return C.d.aR(d+(e-d)*f)},
byS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kY(m,x.i)
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
A.a6x.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.B
r=r?C.l:C.am
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ct(t.x,C.l,s,18),C.b1],w))
v.push(B.aD(new B.ep(t.c,!1,s),1))
v=B.aq(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.U,B.k(t.d,1,C.ah,s,B.c2(u==null?C.j:u,22,C.P),s,s,s)],w)
return B.bA(r,B.ag(w,C.C,s,C.ii,C.h),q,s,C.ai,s,3)}}
A.uN.prototype={
Lp(d){return this.aT_(d)},
aT_(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lp=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ez("finance_summary",B.a5(["p_from",E.ra(d.a),"p_to",E.ra(d.b)],s,r),r),$async$Lp)
case 3:q=f
if(q==null){u=D.aoN
w=1
break}if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.ar0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lp,v)},
Lo(d){return this.aSZ(d)},
aSZ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lo=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ez("finance_kpis",B.a5(["p_from",E.ra(d.a),"p_to",E.ra(d.b)],s,r),r),$async$Lo)
case 3:q=f
if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.aox
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lo,v)},
pC(d){return this.aqH(d)},
aqH(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hw("sevdesk-sync",B.a5(["from",E.ra(d.a),"to",E.ra(d.b)],s,s)),$async$pC)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a0(B.fC(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pC,v)},
Lk(d){return this.aSQ(d)},
aSQ(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hw("finance-export-pdf",B.a5(["from",E.ra(d.a),"to",E.ra(d.b)],s,s)),$async$Lk)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.e1("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lk,v)}}
A.E7.prototype={
FP(d){return this.ajP(d)},
ajP(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FP=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lp(d),$async$FP)
case 7:q=f
o=A.aER(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FP,v)},
FK(d){return this.ajA(d)},
ajA(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FK=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lo(d),$async$FK)
case 7:q=f
o=A.bRT(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FK,v)},
pC(d){return this.aqI(d)},
aqI(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pC=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.pC(d),$async$pC)
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
p=r.Hr(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pC,v)},
Lj(d){return this.aSP(d)},
aSP(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lj=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lk(d),$async$Lj)
case 7:q=f
o=C.iQ.cE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lj,v)},
Hr(d){if(d instanceof B.yh)return d
if(d instanceof B.l5){if(d.b==="42501")return new B.vC(d.a)
return new B.t6(d.a)}if(d instanceof B.N2)return new B.t6("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B4("Unerwarteter Fehler: "+B.i(d))},
$iaED:1}
A.qi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wj.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azO.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAT.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CI.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oa.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yk.prototype={
GL(d){return this.aqG(0)},
aqG(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dv)
s=t.r
r=s.aI(0,$.xi(),x.P)
p.a=null
w=3
return B.j(B.pb(new A.aEy(p,t,r),x.H),$async$GL)
case 3:t.se6(0,f)
q=t.f
if(q.ghp(q)==null){q=$.bue()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GL,v)},
Li(){return this.aSO()},
aSO(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Li=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dv)
s=t.r.aI(0,$.xi(),x.P)
q.a=null
w=3
return B.j(B.pb(new A.aEx(q,t,s),x.H),$async$Li)
case 3:t.se6(0,e)
r=t.f
u=r.ghp(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Li,v)}}
A.yl.prototype={
ds(d,e){var w=null,v=e.ao($.xi(),x.P),u=e.ao($.bue(),x.aN)
return B.iv(B.dT(B.b([new B.fv("Finanzen","Dashboard",new A.agb(e.ao($.buc(),x.b).giU(),new A.aEI(this,d,e),new A.aEJ(this,d,e),new A.aEK(d),new A.aEL(d),new A.aEM(this,d,e,v),w),w),C.aP,new A.any(v,w),C.bY,D.aew,C.bY,B.dt(u,new A.aEN(),new A.aEO(),new A.aEP(),!1,!0,!1,x.d,x.l)],x.p),C.cJ,w,C.Q,!1),C.l,new A.aEQ(e))},
Jh(d,e){return this.aLq(d,e)},
aLq(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jh=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.buc()
w=3
return B.j(e.aI(0,s.ghP(),x.F).GL(0),$async$Jh)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghp(s)
t=d.P(x.q).f
t.bj(B.c9(null,null,null,null,null,C.o,null,B.k(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jh,v)},
Bd(d,e){return this.awP(d,e)},
awP(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bd=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.aI(0,$.buc().ghP(),x.F).Li(),$async$Bd)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bj(D.ayC)
w=1
break}t=B.q1(C.p,10)
w=4
return B.j($.bLt().tY(s,"finanzauswertung.pdf",t,null,null,null),$async$Bd)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bd,v)},
Be(d,e,f){return this.aJ0(d,e,f)},
aJ0(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Be=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.jS(null,null,!0,null,new A.aEG(f,d),d,null,!0,!0,x.cJ),$async$Be)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nM(e.aI(0,$.bZ(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ar(p)
n=n.ar(o)
w=8
return B.j(r.zt("finance_period",p,o,B.a5(["period_from",p.eh()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Be)
case 8:if(d.e!=null)d.P(x.q).f.bj(F.uR)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Be,v)}}
A.agb.prototype={
u(d){var w=this,v=null,u=A.all(C.l,F.i_,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.all(v,D.aay,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.all(v,D.xX,v,s?v:w.d,"sevDesk synchronisieren"),q=A.all(C.av,C.jf,C.av,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.b1,t,C.b1,r,C.b1,q,C.b1,A.all(C.aC,C.fO,C.aC,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.M,0,v,v)}}
A.alk.prototype={
u(d){var w,v=this,u=null,t=B.aQ(12),s=B.aQ(12),r=B.aQ(12),q=v.w
if(q==null)q=C.am
q=B.cT(q,1)
w=v.r
if(w==null)w=C.j
return B.GW(B.dK(!1,C.a_,!0,t,B.eO(!1,s,!0,B.b9(u,B.ct(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.af,0,u,u,u,u,u,C.bu),u,v.d,u,u)}}
A.any.prototype={
ds(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bA(w,B.ag(B.b([D.a7V,C.U,B.aq(B.b([D.ab1,C.aT,B.aD(B.k(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.j,16,C.P),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.v,B.mn(C.cD,B.b([new A.IE("Monat",new A.bgY(e),w,w),new A.IE("Jahr (YTD)",new A.bgZ(e),w,w),new A.IE("Zeitraum w\xe4hlen \u2026",new A.bh_(this,d,e),D.a9C,w)],t),C.e9,6,8)],t),C.C,w,C.f,C.h),w,w,C.E,w,3)},
ID(d,e){return this.aHV(d,e)},
aHV(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$ID=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.ba(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.auV(new A.bgX(),d,B.bQ(B.aX(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bQ(B.aX(t)+1,1,1,0,0,0,0),C.eo),$async$ID)
case 2:r=g
if(r!=null)e.aI(0,$.xi().ghP(),x.V).wz(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$ID,v)}}
A.IE.prototype={
u(d){var w=null,v=B.aQ(9999),u=B.aQ(9999),t=B.aQ(9999),s=B.cT(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ct(p,C.j,w,14),C.b1],r))
q.push(B.k(this.c,w,w,w,B.E(C.j,13,C.P),w,w,w))
return B.dK(!1,C.a_,!0,v,B.eO(!1,u,!0,B.b9(w,B.aq(q,C.k,w,C.f,C.M,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.af,0,w,w,w,w,w,C.bu)}}
A.J4.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iV(new A.bmO(this)),C.bY,D.a7Z,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.aq(B.b([D.abX,C.aK,B.aD(B.k("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.t,14,C.m),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.af,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.L(w,B.b([new A.ag9(t.a,t.b,t.c==="revenue",t.d,s),C.U],r))}q.push(B.ag(w,C.k,s,C.f,C.h))}return B.ag(q,C.ac,s,C.f,C.h)}}
A.ag9.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.af,s=B.cT(u?C.l:C.am,1),r=B.aQ(4),q=w.c
r=B.b9(C.W,B.k(C.c.a_(q,0,1),v,v,v,B.c2(C.j,14,C.q),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.k(q+" \xb7 "+w.d,1,C.ah,v,B.E(C.j,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aD(B.ag(B.b([q,B.k(t,v,v,v,B.E(C.t,12,C.m),v,v,v)],s),C.C,v,C.f,C.h),1)
q=$.dx().ar(w.f)
return B.bA(v,B.aq(B.b([r,C.aK,t,B.k(q,v,v,v,B.E(u?C.aC:C.j,15,C.P),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eK,v,3)}}
A.HN.prototype={
u(d){var w=null
return B.bA(C.av,B.aq(B.b([D.acy,C.aK,B.aD(B.k(this.c,w,w,w,B.E(C.j,14,C.m),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eE,w,C.E,w,3)}}
A.a6y.prototype={
ds(d,e){return B.dt(e.ao($.bNY(),x.e),new A.aJO(),new A.aJP(),new A.aJQ(),!1,!0,!1,x.X,x.l)}}
A.I6.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aw6,C.v,B.iV(new A.bep(v,q,100-t.w.a,w,p)),C.v,new A.akF(u),C.aP,D.aw5,C.v,new A.ah2(t,u),C.aP,D.aw_,C.v,B.by(u,!0,u,B.mV(u,B.bA(u,new A.Tz(t,220,u),u,u,C.E,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beq(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.avU,C.v,B.by(u,!0,u,B.mV(u,new A.TK(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ber(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.avY,C.v,new A.amm(t,u),C.aP,D.avV,C.v,new A.aiK(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aP,D.aw1,C.v,new A.as5(t,u)],s))
return B.ag(r,C.ac,u,C.f,C.h)}}
A.akF.prototype={
u(d){var w=null
return B.k("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.t,11,C.m).ej(1.35),w,w,w)}}
A.alT.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cC(m.d,"-")?C.av:C.aC
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bes(m,d):l
r=x.p
q=B.b([B.aD(B.k(m.c.toUpperCase(),l,l,l,B.E(C.t,10,C.q).fU(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cT(C.hM,0.8)
n=B.aQ(4)
q.push(B.b9(l,B.k("Ziel "+p,l,l,l,B.E(C.av,9,C.q),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nk,l,l,l))}q=B.b([B.aq(q,C.k,l,C.f,C.h,0,l,l),C.b9,B.bvt(C.du,B.k(m.d,l,l,l,B.c2(w,22,C.q),l,l,l),C.mE)],r)
p=m.e
if(p!=null)q.push(B.k(p,2,C.ah,l,B.E(C.t,10,C.aI),l,l,l))
q.push(C.cV)
q.push(B.aq(B.b([new A.Ul("Vormonat",m.r,l),C.cU,new A.Ul("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.cV)
q.push(B.aD(new A.XT(v,m.y,m.z,l),1))
return B.by(l,u,l,B.mV(l,B.bA(l,B.ag(q,C.C,l,C.f,C.h),l,l,C.dB,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.Ul.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aQ(4)
return B.b9(r,B.k(this.c+" \u2014",r,r,r,B.E(C.t,9,C.q),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nk,r,r,r)}w=q>=0
v=w?C.aC:C.av
u=v.fE(0.12)
t=B.cT(v,0.7)
s=B.aQ(4)
return B.b9(r,B.aq(B.b([B.ct(w?F.a8S:D.a8R,v,r,10),F.aye,B.k(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.E(v,9,C.q),r,r,r)],x.p),C.k,r,C.f,C.M,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nk,r,r,r)}}
A.XT.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ew(v,j[v]))
u=C.b.km(j,new A.bmm())
t=C.b.km(j,new A.bmn())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bmo(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4S(k,!1)
w=B.b([A.aK0(k,2,A.ax4(!1,C.l.fE(0.16),0,k,!0,D.vQ),C.l,0.35,k,D.DT,k,!0,!1,!0,!1,D.Fd,!1,10,D.XV,!0,C.lx,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oa(A.bvZ(k,k,k,D.akR,l,D.BJ,D.DQ,D.DU,w,D.aeA,k,m,k,n,D.Xc,D.akS,D.a8c),C.au,C.ag,k,k)}}
A.Tz.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLj
w=C.b.fK(p,0,new A.b57())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axd(B.b([A.a0y(q,q,D.B9,q,C.l,q,q,q,r.b,6),A.a0y(q,q,D.B9,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.cd(A.bBL(A.ax6(q,q,u,q,q,A.a4S(q,!1),q,new A.yn(!0,!0,q,new A.b58(),A.a_0(),!1,q,A.auG(),A.a_0()),q,v,q,q,new A.uP(!0,new A.pc(16,q,new A.q7(!0,new A.b59(this),46,q),!0),D.kt,D.kt,new A.pc(16,q,new A.q7(!0,new A.b5a(p),26,q),!0)))),this.d,q)},
aKH(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.TK.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b5V(),w),x.i)
C.b.L(o,new B.ab(u,new A.b5W(),w))
t=C.b.fK(o,0,new A.b5X())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axd(B.b([A.a0y(q,q,q,q,C.l,q,q,q,v[s],14),A.a0y(q,q,q,q,C.aC,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cd(A.bBL(A.ax6(q,q,n,q,q,A.a4S(q,!1),q,D.DU,q,o,q,q,new A.uP(!0,D.kt,D.kt,D.kt,new A.pc(16,q,new A.q7(!0,new A.b5Y(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.E,q,3)}}
A.amm.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aLi
w=new B.ab(k,new A.beX(),B.ad(k).i("ab<1,F>")).km(0,new A.beY())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.J)(k),++s){r=k[s]
q=B.k(r.b,m,m,m,new B.P(!0,C.j,m,l,C.bH,m,14,C.q,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dx()
o=p.ar(r.f)
q=B.ag(B.b([q,B.k(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.t,m,l,C.bH,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h)
o=r.d
p=p.ar(o)
n=new B.aT(4,4)
o=B.b([new B.iw(C.ay,C.f,C.h,C.k,m,C.bx,m,0,B.b([new B.mQ(1,C.eL,q,m),C.aT,B.k(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.bH,m,16,C.q,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cV,new B.Do(new B.d5(n,n,n,n),C.bK,B.Od(C.am,8,C.d.bS(o/w,0,1),D.AZ),m)],v)
q=C.b.gae(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_4(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.L(u,o)}return B.bA(m,B.ag(u,C.k,m,C.f,C.h),m,m,C.E,m,3)}}
A.aiK.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aD(new A.Ca("Aktive Kunden",""+s,u),1)
w=B.aD(new A.Ca("K\xe4ufe",""+t.a,u),1)
v=$.dx()
return B.bA(u,B.aq(B.b([s,w,B.aD(new A.Ca("\xd8-Warenkorb",v.ar(t.d),u),1),B.aD(new A.Ca("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.E,u,3)}}
A.Ca.prototype={
u(d){var w=null
return B.ag(B.b([B.k(this.c.toUpperCase(),w,w,w,B.E(C.t,10,C.q).fU(0.6),w,w,w),C.bU,B.k(this.d,w,w,w,B.c2(C.j,20,C.q),w,w,w)],x.p),C.C,w,C.f,C.M)}}
A.as5.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.bo4(),B.ad(m).i("ab<1,F>")).km(0,new A.bo5()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.J)(m),++v){u=m[v]
t=B.k(u.b,1,C.ah,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.k(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.t,o,n,C.bH,o,12,C.P,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dx().ar(r)
p=new B.aT(4,4)
r=B.b([new B.iw(C.ay,C.f,C.h,C.k,o,C.bx,o,0,B.b([new B.mQ(1,C.eL,t,o),s,B.k(q,o,o,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b9,new B.Do(new B.d5(p,p,p,p),C.bK,B.Od(C.am,6,C.d.bS(r/l,0,1),D.AZ),o)],k)
t=C.b.gae(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_4(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.U)
C.b.L(j,r)}return B.bA(o,B.ag(j,C.k,o,C.f,C.h),o,o,C.E,o,3)}}
A.wC.prototype={
u(d){var w=null
return B.bA(w,B.k(this.c,w,w,w,B.E(C.t,13,C.m),w,w,w),C.af,w,C.E,w,3)}}
A.ah2.prototype={
ds(d,e){return B.dt(e.ao($.bud(),x.fM),new A.b3B(this,d,e),new A.b3C(),new A.b3D(),!1,!0,!1,x.h,x.l)}}
A.Bc.prototype={
W(){return new A.Tc()},
aXV(){return this.d.$0()}}
A.Tc.prototype={
az(){var w,v,u,t,s,r,q=this
q.aP()
q.d=new B.ba(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fr(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bP)
for(t=0;t<8;++t){s=D.pq[t].a
if(v)r=""
else{r=B.b0(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b1(r,".",",")}u.m(0,s,new B.bI(new B.cR(r,C.bI,C.aQ),$.af()))}q.e!==$&&B.b2()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cc(v,v.r,v.e,B.l(v).i("cc<2>"))
while(v.t()){w=v.d
w.S$=$.af()
w.R$=0}this.an()},
rm(d){var w=this.e
w===$&&B.a()
w=C.c.bg(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.iY(B.b1(w,",","."))
return w==null?0:w},
a3S(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pq[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b1(s,".",",")
t.lK(0,t.a.xT(C.aQ,C.bI,s))}}this.J(new A.b3p())},
aEz(){this.a3S(D.aoP)
this.c.P(x.q).f.bj(D.ayX)},
HT(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HT=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b_(a1)
for(e=0;e<8;++e)a2.E(0,D.pq[e].a)
q=a2
t=4
w=7
return B.j($.aEr.cb().zc(B.b(["csv","txt"],x.s),C.xI,!0),$async$HT)
case 7:p=a5
a2=p
o=a2==null?null:J.JU(a2.a).c
if(o==null){w=1
break}n=C.aB.adc(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BO.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.avq(l,B.bS("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.bg(J.a3(k,0)).toLowerCase()
i=J.CD(q,j)?j:D.ar1.h(0,j)
if(i==null)continue
d=C.c.bg(C.b.n_(J.bOF(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.iY(h)
if(g!=null)J.fn(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bj(D.ayz)
w=1
break}r.a3S(m)
r.c.P(x.q).f.bj(B.c9(null,null,null,null,null,C.o,null,B.k(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HT,v)},
I4(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I4=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3q(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_p("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.eh(),0,10),"p_cash_and_bank",q.rm("cash_and_bank"),"p_receivables",q.rm("receivables"),"p_inventory_value",q.rm("inventory_value"),"p_other_current_assets",q.rm("other_current_assets"),"p_fixed_assets",q.rm("fixed_assets"),"p_current_liabilities",q.rm("current_liabilities"),"p_long_term_liabilities",q.rm("long_term_liabilities"),"p_equity",q.rm("equity")],x.N,x.aU))
w=7
return B.j(n,$async$I4)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXV()
o=q.c
o.toString
B.bn(o,!1).fb()
q.c.P(x.q).f.bj(D.ayD)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
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
u(d){var w,v,u,t,s=this,r=null,q=B.k("Bilanzwerte erfassen",r,r,r,B.c2(C.j,18,C.q),r,r,r),p=s.f?r:new A.b3t(s,d),o=s.d
o===$&&B.a()
p=B.i5(D.abj,B.k("Stichtag: "+C.c.a_(o.eh(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aD(B.i5(D.aco,D.aEG,o?r:s.gaDz(),r),1)
v=x.p
w=B.b([p,C.U,B.aq(B.b([w,C.aT,B.aD(B.i5(D.acd,D.aEv,o?r:s.gaEy(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pq[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.eS(r,C.aS,!1,r,!0,C.o,r,B.f6(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aU,r,r,r,r,r,C.ix,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ao,r,C.a3,r,r,r,r),C.U],v))}w.push(B.k("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.t,11,C.m),r,r,r))
p=B.cd(B.f1(B.ag(w,C.ac,r,C.f,C.M),r,r,r,C.Q),r,380)
o=s.f
w=B.dL(C.d7,r,r,o?r:new A.b3u(d),r,r)
o=o?r:s.gaEh()
t=B.dI(C.l,C.B,r,r,r,r,r)
return B.my(B.b([w,B.dS(s.f?F.Yr:C.ex,o,t)],v),C.B,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_4(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.eZ(B.K(this))^B.bJQ(this.gbD()))>>>0},
j(d){B.bD_()
return B.K(this).j(0)}}
A.KC.prototype={
W(){return new A.Td(B.y(x.S,x.J),new A.axg(B.y(x.x,x.gF)),null,null)}}
A.Td.prototype={
u(d){var w,v=this,u=v.a1N(),t=v.CW
t.toString
t=v.a1O(t.av(0,v.gh2().gp(0)))
w=v.a1O(u)
v.a.toString
return new A.Kx(new A.a0x(t,w,null),u,null)},
a1O(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axd(s.c,s.d,!1,r,s.a))}return d.aPQ(w)},
a1N(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UB(t.ch)
if(r)s=w.a
r=t.y
t=t.aQM(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPR(A.buJ(!1,!0,!0,v.d,v.c,u.gasg(),v.f,v.e))}return t},
ash(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafJ()||e==null||e.a==null){w=v.cy
v.J(w.gaPd(w))
return}v.J(new A.b3G(v,e))},
m0(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1N(),new A.b3H(w)))}}
A.nT.prototype={
Vc(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ax6(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQM(d,e){return this.Vc(null,null,d,e)},
aPR(d){return this.Vc(null,d,null,null)},
aPQ(d){return this.Vc(d,null,null,null)},
Xa(d,e,f){var w,v,u,t=A.kx(d.ch,e.ch,f,A.c2a(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bD7(d.d,e.d,f),q=A.bF5(d.e,e.e,f),p=A.bD5(d.c,e.c,f),o=e.a
o=A.a4S(B.a0P(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.ax6(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bD1(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ax5.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fF.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axe(),B.ad(v).i("ab<1,F>")).km(0,new A.axf())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.io.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mB.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0u.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0z.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adE.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0A.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D_.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.KD.prototype={}
A.a0B.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xw.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.agZ.prototype={}
A.ah5.prototype={}
A.ah6.prototype={}
A.ah8.prototype={}
A.ah9.prototype={}
A.aha.prototype={}
A.ahb.prototype={}
A.ahc.prototype={}
A.ahd.prototype={}
A.axg.prototype={
UB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.up(0,0,!1)
v=new A.ze(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.up(t,u,!0)}w=null
try{w=C.b.qe(d,new A.axh())}catch(s){return new A.up(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.up(q,r,!1)
u.m(0,v,j)
return j}}
A.up.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ah7.prototype={}
A.axi.prototype={
i8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_V(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acc(t,A.buI(w,t.a),u)
l.y=u
l.aS7(e,u,f)
l.alN(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSg(d,e,m,t,r,s,n,o,f)}}},
acc(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e1("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ad(p).i("iX<1>")).aB(0,new A.axj(t,q,r,s))
w.push(new A.a5A(q))}return w},
aS7(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aT(m,m)
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
if(a1!==a2){if(a1>a2){a3=b2.dG(Math.max(t,a2),b4,b7)
a4=B.PK(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.PK(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gp(0)
k.seX(null)
a6=b2.f.dZ()
v.drawRRect(B.mw(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dG(f,b4,b7)
e=a8.b
b0=b2.dG(e,b4,b7)
b2.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.b8(v.save())
v.clipRect(B.dG(b1),$.nI()[1],!0)
a6=b2.f.dZ()
v.drawRRect(B.mw(a4),a6)
a6.delete()
v.restore()
b2.aSe(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.al()
k=B.b([],s)
k.push(new B.he(a4))
n=A.aAm(new B.ck(n.r,C.ad,null,null,k),o.r)
a6=b2.r.dZ()
k=n.e
v.drawPath((k==null?n.e=new B.mG(n.gjs().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSg(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AU(a5,a5,a5,a5,B.dd(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().ZW(a8,a7.b),a7.a),C.cX,C.w,a5,b6.c,C.bw)
w.ag1(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbT(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dG(s,a6,b6)
q=b4.a
p=a4.dG(q,a6,b6)
o=b1.b
n=u+o.geu()
m=v+4+(o.gd1(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aH1)j=v===D.Z8&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZX(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aT(s,s)
e=B.FI(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lw().Kg(new B.H(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.Kg(new B.H(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaia()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VQ(d,new A.axk(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSe(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gel(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aT(i.z,i.Q):C.a2
s=w?new B.aT(i.x,i.y):C.a2
r=w?C.a2:new B.aT(i.e,i.f)
w=w?C.a2:new B.aT(i.r,i.w)
q=B.PK(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aT(i.z,i.Q)
p=v?C.a2:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a2
q=B.PK(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a2)}else q=B.bwH(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Wt(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acc(b2,A.buI(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0B(d,q,a0,o,a2,a1,new A.ew(d.a,v),new B.r(n,t))}}return null}}
A.a5A.prototype={}
A.a0x.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.axi()
t.a15()
$.al()
w=B.aW()
w.b=C.bc
t.f=w
w=B.aW()
w.b=C.aW
t.r=w
w=B.aW()
w.b=C.bc
w.r=C.x.gp(0)
t.w=w
w=B.aW()
w.b=C.aW
w.r=C.F.gp(0)
w.c=1
t.x=w
t=new A.aaL(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YO(v.cy)
t.afc()
return t},
by(d,e){e.sih(0,this.d)
e.sYy(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.aaL.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYy(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0F(d.cy)
w.bc()},
scR(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a12(t,v),new A.vy(u.aC,u.i2,u.cZ,x.Q))
s.restore()},
ZP(d){var w=this,v=w.gC(0)
return new A.KD(w.fW.Wt(d,v,new A.vy(w.aC,w.i2,w.cZ,x.Q)))}}
A.a0n.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CZ.prototype={
K(){return"AxisSide."+this.b}}
A.tq.prototype={}
A.q7.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acc.prototype={
gbD(){return[!1,0,0,0]}}
A.pc.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uP.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ew.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ew))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yn.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pz.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adG.prototype={
gbD(){return[this.a,this.b]}}
A.PO.prototype={
gbD(){return[this.a,this.b]}}
A.mX.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kS.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5L.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae2.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MB.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uO.prototype={}
A.MI.prototype={
adD(d,e,f){var w,v
$.al()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bc
d.iO(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.agU.prototype={}
A.agY.prototype={}
A.ak4.prototype={}
A.akk.prototype={}
A.akl.prototype={}
A.akn.prototype={}
A.ako.prototype={}
A.ala.prototype={}
A.al9.prototype={}
A.alb.prototype={}
A.aoE.prototype={}
A.aqw.prototype={}
A.aqx.prototype={}
A.as9.prototype={}
A.asO.prototype={}
A.asN.prototype={}
A.asP.prototype={}
A.awV.prototype={
Mn(d,e,f,g,h,i){return new B.ii(this.aVV(d,e,f,g,h,i),x.g4)},
aVU(d,e,f,g){return this.Mn(d,e,f,!0,g,!0)},
aVV(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mn(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().ajm(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h1(u-s,v)*v===u
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
A.Kw.prototype={
a15(){var w,v=this
$.al()
w=B.aW()
w.b=C.aW
v.a=w
w=B.aW()
w.b=C.bc
v.b=w
w=B.aW()
w.b=C.bc
v.e=w
w=B.aW()
w.b=C.aW
v.c=w
v.d=B.aW()},
i8(d,e,f){var w=this
w.a_W(d,e,f)
w.aS3(e,f)
w.aSd(e,f)
w.aSc(e,f)},
aSc(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().Oq(w.a,a1.r-a1.f)
u=$.btJ().Mn(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l6(n,m)
if(j!=null){p.r=C.D.gp(0)
p.seX(j.mH(0,i))}else{if(k==null)k=C.F
p.r=k.gp(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c_(p.r)
p.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dt(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lw().Oq(w.b,a1.y-a1.x)
u=$.btJ().Mn(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l6(n,m)
if(k!=null){q.r=C.D.gp(0)
q.seX(k.mH(0,i))}else{if(p==null)p=C.F
q.r=p.gp(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c_(q.r)
q.r=B.aC(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dt(n,m,d.a,f.d)}},
aS3(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aSd(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.l6(new B.r(n.fc(t.a,m,e),0),new B.r(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.D.gp(0)
r.seX(p.mH(0,s))}else{r.r=(q==null?C.F:q).gp(0)
r.seX(null)}o=n.e.dZ()
w.drawRect(B.dG(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.l6(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.D.gp(0)
v.seX(q.mH(0,s))}else{v.r=(r==null?C.F:r).gp(0)
v.seX(null)}o=n.e.dZ()
j.drawRect(B.dG(s),o)
o.delete()}},
aSb(d,e,f){var w,v
this.a_W(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adE(d,e,f,w)
if(v.b.length!==0)this.aSi(d,e,f,w)},
adE(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l6(m,l)
if(j!=null){n.r=C.D.gp(0)
n.seX(j.mH(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c_(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dt(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=C.d.am(o,n.gbT(n).eI(0,2))
J.b8(r.save())
r.translate(h,g)
n=n.gNi().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eI(0,2)
o=C.d.am(o,n.gbT(n).eI(0,2))
k=f.d
k===$&&B.a()
s.adF(0,n,new B.r(h,o),k)}}},
aSi(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.r(n,0)
o=d.fc(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l6(m,l)
if(j!=null){n.r=C.D.gp(0)
n.seX(j.mH(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c_(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dt(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b8(r.save())
r.translate(f,e)
n=n.gNi().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eI(0,2)
g=n.gbT(n).ad(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.adF(0,n,new B.r(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZX(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kx.prototype={
gal6(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal7(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal8(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gal4(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alr(d){var w,v=this,u=null,t=v.d,s=A.bvv(t.d),r=t.a
r=r.a&&A.bPf(r.b)?r.b:u
w=B.b([B.b9(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.awX(w)
if(v.gal6())C.b.hv(w,s.$1(!0),new A.AG(D.B5,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal8())C.b.hv(w,s.$1(!0),new A.AG(D.mA,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal7())C.b.hv(w,s.$1(!0),new A.AG(D.B6,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal4())C.b.hv(w,s.$1(!0),new A.AG(D.dJ,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
u(d){return B.iV(new A.awW(this))}}
A.Rf.prototype={
W(){return new A.XI(new B.bg(null,x.eF))}}
A.XI.prototype={
axO(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fF
case 2:return C.du
case 3:return C.fe}},
ayj(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
axQ(d){this.a.toString
return},
az(){this.aP()
$.cA.x1$.push(this.ga4j())},
ba(d){this.bG(d)
$.cA.x1$.push(this.ga4j())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayj()
return B.Sr(B.b13(0,B.b9(v.axO(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.acd.prototype={
bl(d){return A.bP6(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0o.prototype={
hk(d){if(!(d.b instanceof B.hm))d.b=new B.hm(null,null,C.p)},
hW(d){if(this.B===C.ay)return this.y3(d)
return this.adh(d)},
aKS(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a93(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a92(d,B.hB())
switch(this.B.a){case 0:return d.c2(new B.H(w.a,w.b))
case 1:return d.c2(new B.H(w.b,w.a))}},
a92(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h_(u,null)
break
case 1:q=B.h_(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a93(p)
t=Math.max(t,o.aKS(p))
m=r.aG$}return new A.bey(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a92(o,B.mv()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.af$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.V[u]
r=w.fy
q=s.b-p.a93(r==null?B.S(B.a_("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
ec(d,e){return this.y4(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a3.sbe(0,null)
this.v7(d,e)},
l(){this.a3.sbe(0,null)
this.aon()}}
A.bey.prototype={}
A.awY.prototype={}
A.jV.prototype={
gbD(){return[this.a,this.b]}}
A.nS.prototype={}
A.agV.prototype={}
A.agW.prototype={
aK(d){var w,v,u
this.fo(d)
w=this.af$
for(v=x.L;w!=null;){w.aK(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fg(0)
w=this.af$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.agX.prototype={}
A.Ta.prototype={
l(){var w,v,u
for(w=this.W2$,v=w.length,u=0;u<v;++u)w[u].l()
this.is()}}
A.AG.prototype={
goC(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.du
case 1:return C.fe
case 2:return C.ec
case 3:return C.fF}},
gb_B(){var w=this.d,v=A.bvv(w.d),u=A.bD4(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gahY(){var w=this.d,v=A.bD4(w.a),u=A.bvv(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd4(0)+(v.gd1(0)+v.gd4(0))
case 1:case 3:return u.geu()+v.geu()}},
aWE(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goC().c.d
if(o==null)o=$.lw().Oq(d,f-e)
w=p.c
v=w!==D.mA
if((!v||w===D.dJ)&&p.d instanceof A.nT){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.buI(u,d)
w=new B.iX(t,B.ad(t).i("iX<1>"))
s=w.giC(w).eP(0,new A.aZ3(u),x.W).fZ(0)}else{r=$.btJ()
w=!v||w===D.dJ
v=p.d
q=r.aVU(w?v.w:v.z,o,f,e)
v=B.oo(q,new A.aZ4(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nS>")
w=B.Q(new B.ab(s,new A.aZ5(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goC()
w=j.goC()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b9(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mA
u=!v
t=!u||w===D.dJ
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dJ?C.Q:C.ay
q=B.b([],x.p)
if(w===D.B5||v)j.goC()
if(j.goC().c.a){v=!u||w===D.dJ?r:j.goC().c.c
p=!u||w===D.dJ?j.goC().c.c:r
o=j.gb_B()
n=!u||w===D.dJ?C.ay:C.Q
j.gahY()
m=j.gahY()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.b9(i,A.bWr(new A.awY(),n,j.aWE(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B6||w===D.dJ)j.goC()
return new B.eW(t,i,i,B.bRX(q,C.k,s,i,C.f,C.M,0,i,i,C.bx),i)}}
A.a0D.prototype={
gbD(){return[this.a,this.b]}}
A.a4R.prototype={
gbD(){return[this.a,this.b]}}
A.MP.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4T.prototype={
gabx(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.axt.prototype={}
A.aDO.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahg.prototype={}
A.akh.prototype={}
A.aki.prototype={}
A.akp.prototype={}
A.KG.prototype={
i8(d,e,f){}}
A.vy.prototype={}
A.hl.prototype={
gdN(){return null},
gafJ(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MO
if(w)return!0
return!(v instanceof A.ML)&&!(v instanceof A.MK)&&!(v instanceof A.MM)&&!(v instanceof A.MJ)&&!w&&!(v instanceof A.MN)}}
A.a4X.prototype={
gdN(){return this.a.b}}
A.a4Y.prototype={
gdN(){return this.a.b}}
A.a4Z.prototype={
gdN(){return this.a.b}}
A.MK.prototype={}
A.ML.prototype={}
A.a51.prototype={
gdN(){return this.a.b}}
A.MN.prototype={}
A.MO.prototype={
gdN(){return this.a.b}}
A.a4W.prototype={
gdN(){return this.a.b}}
A.a4V.prototype={
gdN(){return this.a.b}}
A.MJ.prototype={
gdN(){return this.a.b}}
A.a5_.prototype={
gdN(){return this.a.gdN()}}
A.a50.prototype={
gdN(){return this.a.gdN()}}
A.MM.prototype={
gdN(){return this.a.gdN()}}
A.FU.prototype={
YO(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afc(){var w=this,v=null,u=w.aj=B.bwm(v,v)
u.ay=new A.aUc(w)
u.ch=new A.aUd(w)
u.CW=new A.aUe(w)
u.cy=new A.aUf(w)
u.cx=new A.aUg(w)
u=w.aF=B.GI(v,-1,v)
u.B=new A.aUh(w)
u.a4=new A.aUi(w)
u.U=new A.aUj(w)
u=w.bC=B.a6U(v,w.a3,v)
u.p3=new A.aUk(w)
u.p4=new A.aUl(w)
u.RG=new A.aUm(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dC(d){return new B.H(d.b,d.d)},
kG(d){return!0},
mR(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.oA(d)
w=v.aF
w===$&&B.a()
w.oA(d)
w=v.aj
w===$&&B.a()
w.oA(d)}else if(x.gJ.b(d))v.l5(new A.a50(d))},
gMQ(d){return new A.aUn(this)},
gMS(d){return new A.aUo(this)},
l5(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.ZP(w):null
u.U.$2(d,v)
u.a4=C.bp},
gKJ(d){return this.a4},
gFn(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.fo(d)
this.aq=!0},
aE(d){this.aq=!1
this.fg(0)},
$ijy:1}
A.Oa.prototype={
W(){return new A.Vw(B.b([],x.r),B.y(x.S,x.J),new A.aK2(B.y(x.y,x.dj)),null,null)}}
A.Vw.prototype={
u(d){var w,v=this,u=v.a4l(),t=v.CW
t.toString
t=v.ab3(t.av(0,v.gh2().gp(0)))
w=v.ab3(u)
v.a.toString
return new A.Kx(new A.a6L(t,w,null),u,null)},
ab3(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e7>")
w=B.Q(new B.ab(w,new A.beD(this,d),v),v.i("av.E"))
return d.aQJ(w,this.cy)},
a4l(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UB(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQY(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQm(new A.EL(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaz8(),t.c,t.d))}return r},
az9(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafJ())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beB(v))
return}v.J(new A.beC(v,e))},
m0(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4l(),new A.beE(w)))}}
A.pK.prototype={
Xa(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4S(B.a0P(d.a.b,j.b,f),j.a)
w=A.bD1(d.at,e.at,f)
v=A.bD5(d.c,e.c,f)
u=A.bD7(d.d,e.d,f)
t=A.bF5(d.e,e.e,f)
s=A.kx(d.ch,e.ch,f,A.c4f(),x.cz)
s.toString
r=A.kx(d.CW,e.CW,f,A.c4e(),x.bO)
r.toString
u=A.bvZ(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vd(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bvZ(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQY(d,e,f,g){return this.Vd(null,null,d,e,f,g,null)},
aQm(d){var w=null
return this.Vd(w,d,w,w,w,w,w)},
aQJ(d,e){var w=null
return this.Vd(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e7.prototype={
aqZ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aK1())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fM))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b2()
n.b=q
r.toString
n.c!==$&&B.b2()
n.c=r
s.toString
n.d!==$&&B.b2()
n.d=s
t.toString
n.e!==$&&B.b2()
n.e=t}},
acV(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aK0(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQt(d){return this.acV(d,null)},
aQv(d){return this.acV(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ob.prototype={
gbD(){return[this.a]}}
A.a0w.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KB.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.ym.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aJR.prototype={
K(){return"LabelDirection."+this.b}}
A.a4U.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6M.prototype={
gbD(){return[4,C.hU,16,D.xF,0,120,A.c4h(),!1,!1,!1,0,C.I,A.c4g()]}}
A.n2.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qg.prototype={}
A.rt.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.tr.prototype={
gbD(){return[this.a,this.b]}}
A.Gk.prototype={
gbD(){return[this.a]}}
A.Oc.prototype={}
A.z8.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.ah3.prototype={}
A.ah4.prototype={}
A.ahh.prototype={}
A.akj.prototype={}
A.akm.prototype={}
A.am_.prototype={}
A.am0.prototype={}
A.am1.prototype={}
A.am3.prototype={}
A.am4.prototype={}
A.am5.prototype={}
A.am6.prototype={}
A.aqv.prototype={}
A.as8.prototype={}
A.aK2.prototype={
UB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.ze(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.z9(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aK3())}catch(p){return D.ye}v=null
try{v=C.b.qe(w.a,new A.aK4())}catch(p){return D.ye}o=v.a
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
if(f<m)m=f}e=new A.z9(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.z9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.am2.prototype={}
A.aK5.prototype={
i8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabx(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jo(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aPk(new B.G(0,0,u,v))}d.a_V(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aS9(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aS5(a3,q,a4)
d.aSa(a3,q,a4)
d.alM(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.e1("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vj(q,i,j,k))}}d.aSh(a3,s,a4)
if(w.gabx(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSf(a2,a3,v,f,new A.Gk(g),a4)}},
aS5(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvu(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Zo(o,e,u,f)
s=p.ajd(o,e,t,u,f)
r=p.Zq(o,e,t,u,f,!0)
q=p.ajc(o,e,t,u,f)
p.aS8(d,s,p.Zn(o,e,t,u,f,!0),f,e)
p.aS2(d,q,r,f,e)
p.aS6(d,t,e)
p.aS4(d,t,e,f)}},
aS9(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bvu(a5.a),a8=A.bvu(a6.a)
if(a7.length!==a8.length)throw B.e(B.bD("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bP.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ad(n).i("cz<1>")
l=B.Q(new B.cz(n,m),m.i("av.E"))
k=a2.Zo(a3,a5,o,b2)
j=a2.Zp(a3,a6.aQv(l),l,b2,k)
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
n=a2.fc(i,a3,b2)
m=a2.dG(h,a3,b2)
e=a2.fc(g,a3,b2)
d=a2.dG(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.D.gp(0)
a0.seX(v.mH(0,new B.G(n,m,e,d)))}else{a0.r=(r?C.F:w).gp(0)
a0.seX(null)}$.al()
a1=new B.mF(C.dw,C.bc,C.e4,C.ev,C.dR).dZ()
n=B.dG(new B.G(0,0,t,s))
m=$.bP.b
if(m===$.bP)B.S(B.vh(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.dZ()
n=j.e
a4.drawPath((n==null?j.e=new B.mG(j.gjs().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSa(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zu(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adD(s,q,new B.r(p,o))}}},
aSh(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fQ(b3,new A.aK8())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Zu(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cs()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rs(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lt(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lt(q.$2(m,k))))
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
b0=B.l6(a3,a5)
if(a6!=null){f.r=C.D.gp(0)
f.seX(a6.mH(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gp(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c_(f.r)
f.r=B.aC(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dt(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rs(d.a))
f.adD(t,j,new B.r(h,g))}}},
Zp(d,e,f,g,h){var w=this.aje(d,e,f,g,h)
return w},
Zo(d,e,f,g){return this.Zp(d,e,f,g,null)},
aje(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.al().r,C.ad,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.ap(new B.fd(d,a0))
if(e===1)g.ap(new B.c8(d,a0))}else g.ap(new B.c8(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.p,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LC(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iz(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
Zq(d,e,f,g,h,i){var w=this,v=B.Mv(f),u=J.Y(g),t=w.fc(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.fc(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.fc(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nX())
return v},
ajd(d,e,f,g,h){return this.Zq(d,e,f,g,h,!1)},
Zn(d,e,f,g,h,i){var w=this,v=B.Mv(f),u=J.Y(g),t=w.fc(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.fc(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.fc(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nX())
return v},
ajc(d,e,f,g,h){return this.Zn(d,e,f,g,h,!1)},
aS8(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.bwl(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.hJ(e,r.r)},
aS2(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fc(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.bwl(s,q.b,q.c,new B.G(v,0,u,t))
d.a.hJ(e,r.r)},
aS6(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Mx(B.Mv(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ka:C.e4
u.e=C.ev
u.r=v.gp(0)
u.seX(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zk(C.aE,w.c*0.57735+0.5)
d.a.hJ(A.aAm(e,f.cy).e5(w.b),this.f)},
aS4(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ka:C.e4
q.e=C.ev
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.bwl(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bUl(t)
d.a.hJ(A.aAm(e,f.cy),s.f)},
aSf(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bJj(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e1("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().ZW(b4,u.b)
s=u.a
r=w.k(0,C.iV)?new B.kp(1):w
q=new B.tn(new B.hQ(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.cX,C.w,r,a8,a8,a8,a8,C.bw,a8)
q.ag1(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hU.geu()
k=o+(w-1)*4+(C.hU.gd1(0)+C.hU.gd4(0))
j=t-k-16
i=a7.ZX(b3,l,D.xF,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.FI(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bJi(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().Kg(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().Kg(new B.H(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.D.gp(0)
s.c=0}b5.VQ(0,new A.aK6(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bX2(q.r,q.w)
A:{if(D.E1===a5){a6=a3
break A}if(D.E2===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VQ(0,new A.aK7(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
Zu(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wt(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajF(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fQ(t,new A.aK9())
return t.length===0?null:t},
ajF(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fc(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hv(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qg(s,f,g,C.b.hu(w,v),v.a,v.b)}else return null}}
A.vj.prototype={}
A.a6L.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.aK5()
t.a15()
$.al()
w=B.aW()
w.b=C.aW
t.f=w
w=B.aW()
w.b=C.bc
t.r=w
w=B.aW()
w.b=C.aW
t.w=w
w=B.aW()
w.b=C.bc
w.r=C.F.gp(0)
w.a=D.a_y
t.x=w
w=B.aW()
w.b=C.aW
w.r=C.D.gp(0)
t.y=w
w=B.aW()
w.b=C.bc
w.r=C.x.gp(0)
t.z=w
w=B.aW()
w.b=C.aW
w.r=C.F.gp(0)
w.c=1
t.Q=w
t=new A.aaY(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YO(v.cx)
t.afc()
return t},
by(d,e){e.sih(0,this.d)
e.sYy(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.aaY.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYy(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0F(d.cx)
w.bc()},
scR(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a12(t,v),new A.vy(u.aC,u.i2,u.cZ,x.o))
s.restore()},
ZP(d){var w=this,v=w.gC(0)
return new A.Oc(w.fW.Wt(d,v,new A.vy(w.aC,w.i2,w.cZ,x.o)))}}
A.Ne.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a12.prototype={
aPk(d){this.a.a.clipRect(B.dG(d),$.nI()[1],!0)
return null},
adL(d,e){d.aO(this.a,e)},
VQ(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b8(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lw()
s.Yw(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dt(d,e,f,g){var w=new B.ck($.al().r,C.ad,null,null,B.b([],x.v))
w.ap(new B.fd(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.hJ(A.aAm(w,g),f)}}
A.ze.prototype={
gbD(){return[this.a]}}
A.amd.prototype={}
A.a1c.prototype={}
A.b1v.prototype={
Kg(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXe(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aT(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aT(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aT(v,v)
s=d.d
return new B.d5(w,u,t,s.a>v||s.b>v?new B.aT(v,v):s)},
aXf(d,e){var w,v
if(d==null)return D.a_J
w=d.b
v=e/2
return d.aQy(w>v?v:w)},
Oq(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_m(w)},
b_m(d){if(d<1)return this.aJm(d)
return this.a85(d)},
aJm(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a85(d*q)/q},
a85(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aR(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
aju(d){if(d>=1)return 1
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
ZW(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j0
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.mj):w},
ajm(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qi)","A(ew)","~(v,fF)","F(e7,v)","T<~>()","F(F,qi)","bT(F,tq)","pz(F)","v(qg,qg)","I6(o9)","HN(C,bH)","J4(oa)","vn(@)","wj(@)","e7(F)","CI(@)","ai(F,tq)","uN(dA<uN>)","E7(dA<aED>)","F(vn)","F(wj)","wC(C,bH)","Bc(z)","~()","qi(@)","~(hl,KD?)","xw(@)","F(io)","A(fF)","~(v,io)","~(@)","jV(nS)","c(nS)","jV(bE<v,F>)","jV(F)","nS(jV)","~(hl,Oc?)","e7(e7)","lJ(Gw<lJ>)","z8(@)","T<oa>(cj<oa>)","tr(v)","uO(ew,F,e7,v)","rt(n2)","A(e7)","v(vj,vj)","F(fF)","T<o9>(cj<o9>)","v(v,v,F)","fF(fF,fF,F)","io(io,io,F)","mB(mB,mB,F)","D_?(fF,v,io,v)","D(fF)","c(F,tq)","ew(ew,ew,F)","A(F)","mX(mX,mX,F)","nn(nn,nn,F)","kS(kS,kS,F)","lf(lf,lf,F)","f(kS)","f(lf)","e7(e7,e7,F)","mC(mC,mC,F)","uO(ew,F,e7,v{size:F?})","A(ew,e7)","F(r,r)","u<tr>(e7,u<v>)","xY(z)","u<rt>(u<n2>)","D(n2)","yk(f_<C?>)"])
A.aEz.prototype={
$1(d){var w=B.dj(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qi(J.am(v==null?"":v),A.p1(w.h(0,"revenue_net")),A.p1(w.h(0,"expense_net")),A.p1(w.h(0,"result_net")))},
$S:z+24}
A.aEA.prototype={
$1(d){var w,v,u,t=B.dj(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.p1(t.h(0,"gross"))
u=B.b0(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vn(s,r,w,v,u,A.p1(t.h(0,"avg_basket")))},
$S:z+12}
A.aEB.prototype={
$1(d){var w,v=B.dj(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b0(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wj(u,t,w,A.p1(v.h(0,"gross")))},
$S:z+13}
A.aES.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CI(v,u,J.am(t==null?"expense":t),A.u5(w.h(d,"net")),A.u5(w.h(d,"tax")),A.u5(w.h(d,"gross")))},
$S:z+15}
A.bry.prototype={
$1(d){return new A.uN(d.ao($.bZ(),x.A))},
$S:z+17}
A.brz.prototype={
$1(d){return new A.E7(d.ao($.bNZ(),x.D))},
$S:z+18}
A.btk.prototype={
$1(d){return E.aEC()},
$S:z+38}
A.brA.prototype={
$1(d){var w=d.ao($.xi(),x.P)
return d.ao($.avh(),x.a).FP(w)},
$S:z+40}
A.brx.prototype={
$1(d){var w=d.ao($.xi(),x.P)
return d.ao($.avh(),x.a).FK(w)},
$S:z+47}
A.brw.prototype={
$1(d){return this.aj2(d)},
aj2(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.j(d.ao($.bZ(),x.A).hh("finance_balance_kpis",t),$async$$1)
case 3:s=r.dj(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:233}
A.aEy.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avh(),x.a).pC(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEx.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avh(),x.a).Lj(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEQ.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bue()
if(s.e==null)B.S(B.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEI.prototype={
$0(){return this.a.Jh(this.b,this.c)},
$S:0}
A.aEJ.prototype={
$0(){return this.a.Bd(this.b,this.c)},
$S:0}
A.aEK.prototype={
$0(){var w=x.z
return B.bn(this.a,!1).ew(B.eP(new A.aEH(),null,w),w)},
$S:0}
A.aEH.prototype={
$1(d){return F.D1},
$S:z+69}
A.aEL.prototype={
$0(){return B.of(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEM.prototype={
$0(){var w=this
return w.a.Be(w.b,w.c,w.d)},
$S:0}
A.aEP.prototype={
$0(){return D.at3},
$S:133}
A.aEO.prototype={
$2(d,e){return new A.HN(B.i(d),null)},
$S:z+10}
A.aEN.prototype={
$1(d){return new A.J4(d,null)},
$S:z+11}
A.aEG.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.k("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.my(B.b([B.dL(C.d7,w,w,new A.aEE(u),w,w),B.dS(F.v_,new A.aEF(u),B.dI(C.l,C.B,w,w,w,w,w))],x.p),w,v,F.v0)},
$S:53}
A.aEE.prototype={
$0(){B.bn(this.a,!1).dm(!1)
return null},
$S:0}
A.aEF.prototype={
$0(){B.bn(this.a,!1).dm(!0)
return null},
$S:0}
A.bgY.prototype={
$0(){var w=this.a.aI(0,$.xi().ghP(),x.V),v=E.aEC()
w.wz(0,v)
return v},
$S:0}
A.bgZ.prototype={
$0(){var w=this.a.aI(0,$.xi().ghP(),x.V),v=new B.ba(Date.now(),0,!1),u=new E.lJ(B.bQ(B.aX(v),1,1,0,0,0,0),v)
w.wz(0,u)
return u},
$S:0}
A.bh_.prototype={
$0(){return this.a.ID(this.b,this.c)},
$S:0}
A.bgX.prototype={
$2(d,e){return new B.oJ(B.V(d).aPU(B.V(d).ax.aQO(C.j,C.l)),e,null)},
$S:1003}
A.bmO.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dx(),s=A.NZ(!1,C.nS,"Umsatz 7 %",t.ar(u.a),w),r=A.NZ(!1,C.nS,"Umsatz 19 %",t.ar(u.b),w),q=A.NZ(!0,D.a9B,"Umsatz netto",t.ar(u.c),w),p=A.NZ(!1,D.a9A,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5z(1.7,B.b([s,r,q,p,A.NZ(!0,C.xU,"Ergebnis",n,o<0?C.av:C.aC),A.NZ(!1,C.fO,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jS,!0)},
$S:99}
A.aJQ.prototype={
$0(){return D.at1},
$S:133}
A.aJP.prototype={
$2(d,e){var w=null
return B.bA(C.av,B.k("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.j,13,C.m),w,w,w),C.eE,w,C.E,w,3)},
$S:283}
A.aJO.prototype={
$1(d){return new A.I6(d,null)},
$S:z+9}
A.bep.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dx(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.bee(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.bef(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.beg(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.ab(g,new A.beh(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.ab(g,new A.bei(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.ab(g,new A.bej(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.ab(g,new A.bek(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.bel(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.bem(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.ben(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.ab(g,new A.beo(j),f),e)
return B.a5z(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jS,!0)},
$S:99}
A.bee.prototype={
$1(d){return d.b},
$S:z+0}
A.bef.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beg.prototype={
$1(d){return d.d},
$S:z+0}
A.beh.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bei.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bej.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bek.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bel.prototype={
$1(d){return d.d},
$S:z+0}
A.bem.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.ben.prototype={
$1(d){return this.a},
$S:z+0}
A.beo.prototype={
$1(d){return this.a},
$S:z+0}
A.beq.prototype={
$0(){return A.byi(this.b,1.45,new A.Tz(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.ber.prototype={
$0(){return A.byi(this.b,1.6,new A.TK(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqI.prototype={
$1(d){var w=this,v=null,u=B.aQ(16),t=x.p,s=B.b([B.aq(B.b([B.aD(B.k(w.a,v,v,v,B.c2(C.j,18,C.q),v,v,v),1),B.fK(v,v,D.acg,v,v,new A.bqH(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.L(s,B.b([B.k(w.b,v,v,v,B.E(C.t,12,C.aI),v,v,v),C.U],t))
s.push(C.v)
s.push(B.cd(new B.mA(w.c,w.d,v),v,17976931348623157e292))
return B.a46(v,C.B,new B.ah(C.ai,B.ag(s,C.C,v,C.f,C.M),v),v,v,v,C.fL,C.uI,v,new B.d9(u,C.I),v)},
$S:1004}
A.bqH.prototype={
$0(){return B.bn(this.a,!1).fb()},
$S:0}
A.bes.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byi(this.b,2.4,new A.XT(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bmm.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bmn.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmo.prototype={
$1(d){return A.aK0(null,1.4,null,C.av,0.35,D.ag5,D.DT,null,!1,!1,!1,!1,D.Fd,!1,10,D.XV,!0,C.lx,B.b([new A.ew(0,d),new A.ew(this.a,d)],x.U))},
$S:z+14}
A.b57.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b59.prototype={
$2(d,e){var w=null
return B.k(this.a.aKH(d),w,w,w,B.E(C.t,10,C.P),w,w,w)},
$S:z+16}
A.b5a.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.A5
return new B.ah(C.hT,B.k(C.c.cO(this.a[v].a,5),w,w,w,B.E(C.t,9,C.P),w,w,w),w)},
$S:z+6}
A.b58.prototype={
$1(d){return D.a8a},
$S:z+7}
A.b5V.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5W.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5X.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5Y.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.A5
return new B.ah(C.hT,B.k(this.a[v],w,w,w,B.E(C.j,12,C.q),w,w,w),w)},
$S:z+6}
A.beX.prototype={
$1(d){return d.d},
$S:z+19}
A.beY.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bo4.prototype={
$1(d){return d.d},
$S:z+20}
A.bo5.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b3D.prototype={
$0(){return D.at9},
$S:133}
A.b3C.prototype={
$2(d,e){return new A.wC("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b3B.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ag(B.b([B.k("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.j,14,C.P),m,m,m),C.U,B.k("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.t,12.5,C.m),m,m,m),C.v,B.mn(C.cD,B.b([B.i5(C.EO,D.aGv,new A.b3v(w,v),m),B.i5(D.abk,D.aFo,new A.b3w(w,v),m)],u),C.e9,8,8)],u),C.C,m,C.f,C.h),C.af,m,C.E,m,3)}w=new A.b3E(d)
t=C.b.fK(n.a.e.d,0,new A.b3x())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iV(new A.b3y(new A.b3F(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ag(B.b([w,C.U,B.aq(B.b([B.aD(B.k("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.t,11,C.m),m,m,m),1),B.oH(D.acu,D.aFK,new A.b3z(q,p),m),B.oH(D.ac5,D.aFx,new A.b3A(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.ac,m,C.f,C.h)},
$S:269}
A.b3v.prototype={
$0(){return A.auE(this.a,this.b,null)},
$S:0}
A.b3w.prototype={
$0(){return A.auB(this.a,this.b)},
$S:0}
A.b3E.prototype={
$1(d){var w=B.b0(J.a3(this.a,d))
return w==null?null:w},
$S:1005}
A.b3F.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:33}
A.b3x.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i4,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i4,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i4,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i4,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b1(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i4,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dx()
v=u.ar(v)
return B.a5z(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i4,v)],x.p),q,12,12,C.jS,!0)},
$S:99}
A.b3z.prototype={
$0(){return A.auB(this.a,this.b)},
$S:0}
A.b3A.prototype={
$0(){return A.auE(this.a,this.b,this.c)},
$S:0}
A.bqG.prototype={
$1(d){return new A.Bc(this.a,new A.bqF(this.b),this.c,null)},
$S:z+22}
A.bqF.prototype={
$0(){var w=this.a,v=$.bud()
if(w.e==null)B.S(B.a_(y.b))
w.gcv().cs(v)},
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
return B.j(B.ub(u.b,B.bQ(2024,1,1,0,0,0,0),null,r,new B.ba(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3s(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3s.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3u.prototype={
$0(){return B.bn(this.a,!1).fb()},
$S:0}
A.b3G.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3H.prototype={
$1(d){return new A.xw(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axe.prototype={
$1(d){return d.e},
$S:z+27}
A.axf.prototype={
$2(d,e){return d+e},
$S:45}
A.axh.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axj.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axk.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.adL(v.d,v.e)},
$S:0}
A.awX.prototype={
$1(d){return 0},
$S:1006}
A.awW.prototype={
$2(d,e){return B.fk(C.bW,this.a.alr(e),C.o,C.bv,null)},
$S:1007}
A.aZ1.prototype={
$1(d){return d.a},
$S:z+31}
A.aZ2.prototype={
$1(d){return d.b},
$S:z+32}
A.aZ3.prototype={
$1(d){return new A.jV(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZ4.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mA||v===D.dJ))t=1-t
return new A.jV(d,t*w.d)},
$S:z+34}
A.aZ5.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goC(),p=d.a
r.goC()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aju(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nS(d,q.c.b.$2(p,new A.tq(u+t,s.e)))},
$S:z+35}
A.aUc.prototype={
$1(d){this.a.l5(new A.a4X(d))},
$S:200}
A.aUd.prototype={
$1(d){this.a.l5(new A.a4Y(d))},
$S:40}
A.aUe.prototype={
$1(d){this.a.l5(new A.a4Z(d))},
$S:27}
A.aUf.prototype={
$0(){this.a.l5(D.a1f)},
$S:0}
A.aUg.prototype={
$1(d){this.a.l5(new A.ML())},
$S:43}
A.aUh.prototype={
$1(d){this.a.l5(new A.a51(d))},
$S:46}
A.aUi.prototype={
$0(){this.a.l5(D.a1g)},
$S:0}
A.aUj.prototype={
$1(d){this.a.l5(new A.MO(d))},
$S:97}
A.aUk.prototype={
$1(d){this.a.l5(new A.a4W(d))},
$S:203}
A.aUl.prototype={
$1(d){this.a.l5(new A.a4V(d))},
$S:204}
A.aUm.prototype={
$1(d){return this.a.l5(new A.MJ(d))},
$S:194}
A.aUn.prototype={
$1(d){return this.a.l5(new A.a5_(d))},
$S:60}
A.aUo.prototype={
$1(d){return this.a.l5(new A.MM(d))},
$S:58}
A.beD.prototype={
$1(d){var w=this.a.db.h(0,C.b.hu(this.b.ch,d))
return d.aQt(w==null?B.b([],x.t):w)},
$S:z+37}
A.beB.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.beC.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fQ(w,new A.beA())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gk(w))},
$S:0}
A.beA.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.beE.prototype={
$1(d){return new A.z8(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aK1.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.brn.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bD6(t?A.by3(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tr(w,new A.ym(!0,A.byT(),new A.brm(v)))},
$S:z+41}
A.brm.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bRV(A.by3(d,e,f),w,A.c_O(d,e,f))},
$S:z+42}
A.brk.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dm:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rt(C.d.j(d.b),w)},
$S:z+43}
A.aK3.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aK4.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aK8.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aK6.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aK7.prototype={
$0(){this.a.adL(this.b,this.c)},
$S:0}
A.aK9.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.ax7.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.ax8.prototype={
$2(d,e){return d+e},
$S:45}
A.axb.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ad(v).i("iX<1>")).aB(0,new A.axc(w,this.a/(u+1),this.c))},
$S:0}
A.axc.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.ax9.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.axa.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aH5.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1008}
A.aAn.prototype={
$1(d){return d},
$S:1009};(function aliases(){var w=A.Kw.prototype
w.a_V=w.i8
w.alM=w.aSb
w.alN=w.adE
w=A.Ta.prototype
w.aon=w.l
w=A.KG.prototype
w.a_W=w.i8
w=A.FU.prototype
w.a0F=w.YO})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3l","bRS",72)
var q
v(q=A.Tc.prototype,"gaEy","aEz",23)
v(q,"gaDz","HT",4)
v(q,"gaEh","I4",4)
u(A.Td.prototype,"gasg","ash",25)
t(A,"c2a",3,null,["$3"],["bP9"],49,0)
t(A,"c2b",3,null,["$3"],["bPa"],50,0)
t(A,"c2c",3,null,["$3"],["bPb"],51,0)
t(A,"c2e",4,null,["$4"],["c2Z"],52,0)
w(A,"c2d","c2Y",53)
s(A,"byn","c3_",54)
t(A,"c25",3,null,["$3"],["bRW"],55,0)
w(A,"a_0","c5o",56)
w(A,"auG","c32",7)
t(A,"c27",3,null,["$3"],["bSH"],57,0)
t(A,"c29",3,null,["$3"],["bXW"],58,0)
t(A,"c26",3,null,["$3"],["bSG"],59,0)
t(A,"c28",3,null,["$3"],["bXV"],60,0)
w(A,"ccK","bSF",61)
w(A,"ccL","bXU",62)
r(A.XI.prototype,"ga4j","axQ",30)
u(A.Vw.prototype,"gaz8","az9",36)
t(A,"c4f",3,null,["$3"],["bT8"],63,0)
t(A,"c4e",3,null,["$3"],["bPc"],64,0)
w(A,"c4i","c5p",1)
t(A,"bJI",4,null,["$5$size","$4"],["bI7",function(d,e,f,g){return A.bI7(d,e,f,g,null)}],65,0)
s(A,"byT","c5n",66)
s(A,"bJJ","c1T",67)
s(A,"bJM","c35",68)
s(A,"bJL","c31",3)
s(A,"bJK","c30",3)
w(A,"c4h","bJj",70)
w(A,"c4g","bJi",71)
t(A,"a_6",3,null,["$3"],["c4d"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a6x,A.agb,A.alk,A.IE,A.J4,A.ag9,A.HN,A.I6,A.akF,A.alT,A.Ul,A.XT,A.Tz,A.TK,A.amm,A.aiK,A.Ca,A.as5,A.wC,A.Kx,A.AG])
u(B.C,[A.uN,A.E7,A.bf,A.ahg,A.ah6,A.ah8,A.ah9,A.agZ,A.akp,A.ahc,A.aha,A.axt,A.as9,A.axg,A.ah7,A.KG,A.a5A,A.tq,A.aqx,A.aqw,A.agY,A.ako,A.ew,A.akl,A.akn,A.aoE,A.alb,A.asP,A.akm,A.ak4,A.akk,A.awV,A.bey,A.awY,A.agV,A.nS,A.akh,A.aki,A.vy,A.hl,A.am0,A.am3,A.ah3,A.ahh,A.ah4,A.akj,A.am6,A.am4,A.as8,A.aqv,A.aK2,A.am2,A.vj,A.a12,A.amd,A.a1c,A.b1v])
u(B.uL,[A.qi,A.vn,A.wj,A.azO,A.aAT,A.o9,A.CI,A.oa])
u(B.nY,[A.aEz,A.aEA,A.aEB,A.aES,A.bry,A.brz,A.btk,A.brA,A.brx,A.brw,A.aEH,A.aEN,A.aEG,A.aJO,A.bee,A.bef,A.beg,A.beh,A.bei,A.bej,A.bek,A.bel,A.bem,A.ben,A.beo,A.bqI,A.bmo,A.b58,A.b5V,A.b5W,A.beX,A.bo4,A.b3B,A.b3E,A.b3F,A.bqG,A.b3H,A.axe,A.axh,A.awX,A.aZ1,A.aZ2,A.aZ3,A.aZ4,A.aZ5,A.aUc,A.aUd,A.aUe,A.aUg,A.aUh,A.aUj,A.aUk,A.aUl,A.aUm,A.aUn,A.aUo,A.beD,A.beE,A.aK1,A.brn,A.brm,A.brk,A.aK3,A.aK4,A.ax7,A.aAn])
t(A.yk,B.fy)
u(B.xM,[A.aEy,A.aEx,A.aEQ,A.aEI,A.aEJ,A.aEK,A.aEL,A.aEM,A.aEP,A.aEE,A.aEF,A.bgY,A.bgZ,A.bh_,A.aJQ,A.beq,A.ber,A.bqH,A.bes,A.b3D,A.b3v,A.b3w,A.b3z,A.b3A,A.bqF,A.b3p,A.b3q,A.b3r,A.b3t,A.b3s,A.b3u,A.b3G,A.axk,A.aUf,A.aUi,A.beB,A.beC,A.aK6,A.aK7,A.axb])
u(B.xU,[A.yl,A.any,A.a6y,A.ah2])
u(B.xN,[A.aEO,A.bgX,A.bmO,A.aJP,A.bep,A.bmm,A.bmn,A.b57,A.b59,A.b5a,A.b5X,A.b5Y,A.beY,A.bo5,A.b3C,A.b3x,A.b3y,A.axf,A.axj,A.awW,A.beA,A.aK8,A.aK9,A.ax8,A.axc,A.ax9,A.axa,A.aH5])
u(B.N,[A.Bc,A.Rf])
u(B.a0,[A.Tc,A.XI])
u(B.Nv,[A.KC,A.Oa])
u(B.uj,[A.Td,A.Vw])
t(A.a0D,A.ahg)
t(A.agU,A.a0D)
t(A.a0n,A.agU)
u(A.a0n,[A.ah5,A.am1])
t(A.nT,A.ah5)
u(B.HM,[A.ax5,A.adE,A.CZ,A.aDO,A.aJR,A.Ne])
t(A.fF,A.ah6)
t(A.io,A.ah8)
t(A.mB,A.ah9)
t(A.a0u,A.agZ)
t(A.MP,A.akp)
u(A.MP,[A.ahb,A.am5])
t(A.a0z,A.ahb)
t(A.a0A,A.ahc)
t(A.D_,A.aha)
u(A.axt,[A.KD,A.Oc])
t(A.adG,A.as9)
t(A.ahd,A.adG)
t(A.a0B,A.ahd)
u(B.b7,[A.xw,A.z8])
t(A.up,A.ah7)
t(A.Kw,A.KG)
u(A.Kw,[A.axi,A.aK5])
u(B.O6,[A.a0x,A.a6L])
u(B.I,[A.FU,A.agW])
u(A.FU,[A.aaL,A.aaY])
t(A.q7,A.aqx)
t(A.acc,A.aqw)
t(A.pc,A.agY)
t(A.uP,A.ako)
t(A.yn,A.akl)
t(A.pz,A.akn)
t(A.PO,A.aoE)
t(A.mX,A.alb)
t(A.nn,A.asP)
u(A.pz,[A.ala,A.asO])
t(A.kS,A.ala)
t(A.lf,A.asO)
t(A.a4U,A.akm)
u(A.a4U,[A.al9,A.asN])
t(A.a5L,A.al9)
t(A.ae2,A.asN)
t(A.MB,A.ak4)
t(A.uO,A.akk)
t(A.MI,A.uO)
t(A.acd,B.h5)
t(A.agX,A.agW)
t(A.Ta,A.agX)
t(A.a0o,A.Ta)
t(A.jV,A.agV)
t(A.a4R,A.akh)
t(A.a4T,A.aki)
u(A.hl,[A.a4X,A.a4Y,A.a4Z,A.MK,A.ML,A.a51,A.MN,A.MO,A.a4W,A.a4V,A.MJ,A.a5_,A.a50,A.MM])
t(A.pK,A.am1)
t(A.e7,A.am0)
t(A.Ob,A.am3)
t(A.a0w,A.ah3)
t(A.mC,A.ahh)
t(A.KB,A.ah4)
t(A.ym,A.akj)
t(A.EL,A.am5)
t(A.a6M,A.am6)
t(A.am_,A.ew)
t(A.n2,A.am_)
t(A.qg,A.n2)
t(A.rt,A.am4)
t(A.tr,A.as8)
t(A.Gk,A.aqv)
t(A.z9,A.am2)
t(A.ze,A.amd)
w(A.agZ,A.bf)
w(A.ah5,A.bf)
w(A.ah6,A.bf)
w(A.ah8,A.bf)
w(A.ah9,A.bf)
w(A.aha,A.bf)
w(A.ahb,A.bf)
w(A.ahc,A.bf)
w(A.ahd,A.bf)
w(A.ah7,A.bf)
w(A.agU,A.bf)
w(A.agY,A.bf)
w(A.ak4,A.bf)
w(A.akk,A.bf)
w(A.akl,A.bf)
w(A.akn,A.bf)
w(A.ako,A.bf)
w(A.ala,A.bf)
w(A.al9,A.bf)
w(A.alb,A.bf)
w(A.aoE,A.bf)
w(A.aqw,A.bf)
w(A.aqx,A.bf)
w(A.as9,A.bf)
w(A.asO,A.bf)
w(A.asN,A.bf)
w(A.asP,A.bf)
w(A.agV,A.bf)
v(A.agW,B.aA)
w(A.agX,B.e3)
v(A.Ta,B.a3Q)
w(A.ahg,A.bf)
w(A.akh,A.bf)
w(A.aki,A.bf)
w(A.akp,A.bf)
w(A.ah3,A.bf)
w(A.ah4,A.bf)
w(A.ahh,A.bf)
w(A.akj,A.bf)
w(A.akm,A.bf)
w(A.am_,A.bf)
w(A.am0,A.bf)
w(A.am1,A.bf)
w(A.am3,A.bf)
w(A.am4,A.bf)
w(A.am5,A.bf)
w(A.am6,A.bf)
w(A.aqv,A.bf)
w(A.as8,A.bf)
w(A.am2,A.bf)
w(A.amd,A.bf)})()
B.boi(b.typeUniverse,JSON.parse('{"a6x":{"W":[],"c":[]},"E7":{"aED":[]},"yk":{"fy":["bb<~>"],"fy.T":"bb<~>"},"J4":{"W":[],"c":[]},"HN":{"W":[],"c":[]},"yl":{"bj":[],"N":[],"c":[]},"agb":{"W":[],"c":[]},"alk":{"W":[],"c":[]},"any":{"bj":[],"N":[],"c":[]},"IE":{"W":[],"c":[]},"ag9":{"W":[],"c":[]},"I6":{"W":[],"c":[]},"wC":{"W":[],"c":[]},"Bc":{"N":[],"c":[]},"a6y":{"bj":[],"N":[],"c":[]},"akF":{"W":[],"c":[]},"alT":{"W":[],"c":[]},"Ul":{"W":[],"c":[]},"XT":{"W":[],"c":[]},"Tz":{"W":[],"c":[]},"TK":{"W":[],"c":[]},"amm":{"W":[],"c":[]},"aiK":{"W":[],"c":[]},"Ca":{"W":[],"c":[]},"as5":{"W":[],"c":[]},"ah2":{"bj":[],"N":[],"c":[]},"Tc":{"a0":["Bc"]},"KC":{"N":[],"c":[]},"Td":{"a0":["KC"]},"nT":{"bf":[]},"fF":{"bf":[]},"io":{"bf":[]},"mB":{"bf":[]},"D_":{"bf":[]},"xw":{"b7":["nT"],"b4":["nT"],"b4.T":"nT","b7.T":"nT"},"a0u":{"bf":[]},"a0z":{"bf":[]},"a0A":{"bf":[]},"a0B":{"bf":[]},"up":{"bf":[]},"a0x":{"aV":[],"c":[]},"aaL":{"I":[],"L":[],"jy":[],"aS":[]},"pz":{"bf":[]},"mX":{"bf":[]},"nn":{"bf":[]},"kS":{"bf":[]},"lf":{"bf":[]},"uO":{"bf":[]},"a0n":{"bf":[]},"q7":{"bf":[]},"acc":{"bf":[]},"pc":{"bf":[]},"uP":{"bf":[]},"yn":{"bf":[]},"adG":{"bf":[]},"PO":{"bf":[]},"a5L":{"bf":[]},"ae2":{"bf":[]},"MB":{"bf":[]},"MI":{"bf":[]},"Kx":{"W":[],"c":[]},"Rf":{"N":[],"c":[]},"XI":{"a0":["Rf"]},"jV":{"bf":[]},"acd":{"h5":[],"aV":[],"c":[]},"a0o":{"e3":["I","hm"],"I":[],"aA":["I","hm"],"L":[],"aS":[],"aA.1":"hm","e3.1":"hm","aA.0":"I"},"AG":{"W":[],"c":[]},"a0D":{"bf":[]},"a4R":{"bf":[]},"MP":{"bf":[]},"a4T":{"bf":[]},"a4X":{"hl":[]},"a4Y":{"hl":[]},"a4Z":{"hl":[]},"MK":{"hl":[]},"ML":{"hl":[]},"a51":{"hl":[]},"MN":{"hl":[]},"MO":{"hl":[]},"a4W":{"hl":[]},"a4V":{"hl":[]},"MJ":{"hl":[]},"a5_":{"hl":[]},"a50":{"hl":[]},"MM":{"hl":[]},"FU":{"I":[],"L":[],"jy":[],"aS":[]},"Oa":{"N":[],"c":[]},"Vw":{"a0":["Oa"]},"pK":{"bf":[]},"e7":{"bf":[]},"mC":{"bf":[]},"n2":{"ew":[],"bf":[]},"qg":{"n2":[],"ew":[],"bf":[]},"rt":{"bf":[]},"tr":{"bf":[]},"Gk":{"bf":[]},"z8":{"b7":["pK"],"b4":["pK"],"b4.T":"pK","b7.T":"pK"},"Ob":{"bf":[]},"a0w":{"bf":[]},"KB":{"bf":[]},"ym":{"bf":[]},"a4U":{"bf":[]},"EL":{"bf":[]},"a6M":{"bf":[]},"z9":{"bf":[]},"a6L":{"aV":[],"c":[]},"aaY":{"I":[],"L":[],"jy":[],"aS":[]},"ze":{"bf":[]}}'))
B.bHB(b.typeUniverse,JSON.parse('{"Kw":1,"MP":1,"KG":1,"FU":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ar
return{_:w("CI"),e:w("bb<o9>"),aN:w("bb<oa>"),fM:w("bb<a2<f,@>?>"),b:w("bb<~>"),W:w("jV"),B:w("nT"),dB:w("fF"),gF:w("up"),fj:w("io"),G:w("mB"),bO:w("mC"),k:w("au"),C:w("a1c<F>"),dO:w("uw"),R:w("a4<f,@>"),g:w("hF"),bz:w("lE<ba>"),f0:w("o2"),E:w("bf"),F:w("yk"),X:w("o9"),P:w("lJ"),D:w("uN"),a:w("aED"),d:w("oa"),cw:w("ew"),L:w("hm"),m:w("di<v,D>"),cm:w("kS"),dv:w("mX"),M:w("B<nS>"),I:w("B<bBI>"),O:w("B<fF>"),Y:w("B<io>"),U:w("B<ew>"),K:w("B<a5A>"),u:w("B<e7>"),bC:w("B<vj>"),aA:w("B<u<ew>>"),v:w("B<e9>"),r:w("B<Gk>"),s:w("B<f>"),eg:w("B<tn>"),df:w("B<qg>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bg<a0<N>>"),Z:w("n2"),cz:w("e7"),hf:w("pK"),dj:w("z9"),fT:w("rt"),c_:w("ir<oW<bb<~>>>"),x:w("ze<fF>"),y:w("ze<e7>"),J:w("u<v>"),ef:w("vn"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k6"),aU:w("C"),Q:w("vy<nT>"),o:w("vy<pK>"),dc:w("e9"),eo:w("pX"),gJ:w("pY"),V:w("nh<lJ>"),N:w("f"),A:w("ni"),bP:w("bI"),er:w("tn"),j:w("wj"),dw:w("qg"),bY:w("tr"),cZ:w("qi"),gc:w("ig"),es:w("lf"),bN:w("nn"),l:w("c"),q:w("wV"),g4:w("ii<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xw?"),f3:w("z8?"),T:w("u<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("C?"),aD:w("ig?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AZ=new B.p6(C.l,B.ar("p6<D>"))
D.B5=new A.CZ(0,"left")
D.mA=new A.CZ(1,"top")
D.B6=new A.CZ(2,"right")
D.dJ=new A.CZ(3,"bottom")
D.awV=new A.q7(!1,A.byn(),22,null)
D.kt=new A.pc(16,null,D.awV,!0)
D.a8b=new A.pz(C.D,null,2,null)
D.vQ=new A.KB(!1,D.a8b,A.c4i(),!0)
D.a_p=new A.ax5(3,"spaceEvenly")
D.a_y=new B.xA(6,"dstIn")
D.Xb=new B.aT(3,3)
D.B9=new B.d5(D.Xb,D.Xb,C.a2,C.a2)
D.a_J=new B.bl(C.D,0,C.V,-1)
D.BJ=new A.a4T()
D.a1f=new A.MK()
D.a1g=new A.MN()
D.aO5=new A.acc()
D.al1=w([],B.ar("B<kS>"))
D.al2=w([],B.ar("B<lf>"))
D.DQ=new A.MB(D.al1,D.al2,!0)
D.a7V=new B.ep("Zeitraum",!1,null)
D.a7Z=new B.ep("Konten (SKR 03)",!1,null)
D.xF=new A.aDO(0,"center")
D.aOi=new A.ym(!0,A.byT(),A.bJI())
D.DT=new A.ym(!1,A.byT(),A.bJI())
D.DU=new A.yn(!1,!0,null,A.auG(),A.a_0(),!0,null,A.auG(),A.a_0())
D.aOj=new A.yn(!0,!0,null,A.auG(),A.a_0(),!0,null,A.auG(),A.a_0())
D.a3x=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3j=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a3H=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a3B=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a34=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a33=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a40=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a3r=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a43=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a3Y=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.ar5=new B.di([50,D.a3x,100,D.a3j,200,D.a3H,300,D.a3B,400,D.a34,500,D.a33,600,D.a40,700,D.a3r,800,D.a43,900,D.a3Y],x.m)
D.dm=new B.rB(D.ar5,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ah7=w([8,4],x.t)
D.a89=new A.pz(D.dm,null,0.4,D.ah7)
D.a8a=new A.pz(C.am,null,0.5,null)
D.fM=new A.ew(0/0,0/0)
D.awX=new A.q7(!0,A.byn(),44,null)
D.mB=new A.pc(16,null,D.awX,!0)
D.awW=new A.q7(!0,A.byn(),30,null)
D.mC=new A.pc(16,null,D.awW,!0)
D.a8c=new A.uP(!1,D.mB,D.mC,D.mB,D.mC)
D.aOk=new A.uP(!0,D.mB,D.mC,D.mB,D.mC)
D.E1=new A.Ne(0,"left")
D.a8N=new A.Ne(1,"center")
D.E2=new A.Ne(2,"right")
D.a8R=new B.a8(57495,"MaterialIcons",null,!1)
D.xX=new B.a8(58927,"MaterialIcons",null,!1)
D.a9A=new B.a8(59005,"MaterialIcons",null,!0)
D.a9B=new B.a8(59007,"MaterialIcons",null,!0)
D.a9C=new B.a8(59011,"MaterialIcons",null,!1)
D.aay=new B.a8(62589,"MaterialIcons",null,!1)
D.a9S=new B.a8(61349,"MaterialIcons",null,!1)
D.ab1=new B.aK(D.a9S,20,C.j,null,null)
D.a9Z=new B.a8(61487,"MaterialIcons",null,!1)
D.abj=new B.aK(D.a9Z,18,null,null,null)
D.abk=new B.aK(D.xX,18,null,null,null)
D.abX=new B.aK(C.nJ,null,C.t,null,null)
D.ac5=new B.aK(C.nO,16,null,null,null)
D.acd=new B.aK(C.EC,16,null,null,null)
D.acg=new B.aK(C.hZ,null,C.j,null,null)
D.aaw=new B.a8(62584,"MaterialIcons",null,!1)
D.aco=new B.aK(D.aaw,16,null,null,null)
D.acu=new B.aK(D.xX,16,null,null,null)
D.a93=new B.a8(57912,"MaterialIcons",null,!1)
D.acy=new B.aK(D.a93,null,C.av,null,null)
D.aew=new A.a6y(null)
D.aOp=new A.aJR(0,"horizontal")
D.ye=new A.z9(0,0,0,0,!1)
D.Fd=new A.Ob(0.5)
D.BP=new A.a6M()
D.aeA=new A.EL(D.BP,A.bJM(),10,A.bJJ(),!0,A.bJL(),A.bJK(),!1,null,null,null)
D.aOr=new A.EL(D.BP,A.bJM(),10,A.bJJ(),!0,A.bJL(),A.bJK(),!0,null,null,null)
D.ag5=w([4,3],x.t)
D.avc=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.av2=new B.aG("receivables","Forderungen (kurzfristig)")
D.auS=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.auQ=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auG=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.auL=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.av9=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.av1=new B.aG("equity","Eigenkapital")
D.pq=w([D.avc,D.av2,D.auS,D.auQ,D.auG,D.auL,D.av9,D.av1],B.ar("B<+(f,f)>"))
D.aOu=w([],x.M)
D.akO=w([],x.O)
D.akP=w([],x.Y)
D.akQ=w([],B.ar("B<mB>"))
D.akR=w([],B.ar("B<mC>"))
D.aOv=w([],x.U)
D.aOw=w([],x.u)
D.akS=w([],x.r)
D.arH={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SM={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.a4(D.SM,[0,0,0,0,0,0,0,C.cc],B.ar("a4<f,C>"))
D.arF={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ar_=new B.a4(D.arF,[0,0,0,0],B.ar("a4<f,v>"))
D.arW={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoC=new B.a4(D.arW,[0,0,0,0,null,null,null,null],B.ar("a4<f,v?>"))
D.aox=new B.a4(D.arH,[D.yT,D.yT,D.yT,C.cc,C.cc,C.cc,D.ar_,D.aoC],x.R)
D.aoN=new B.a4(D.SM,[0,0,0,0,0,0,0,C.cA],x.R)
D.arI={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoP=new B.a4(D.arI,[8500,1200,3400,300,22e3,4200,9000,22200],B.ar("a4<f,F>"))
D.arE={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ar0=new B.a4(D.arE,[0,0,0,0,0,0,0,C.cA],x.R)
D.as6={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar1=new B.a4(D.as6,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ar("a4<f,f>"))
D.a48=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4g=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a37=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a3t=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a3D=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a4t=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a2T=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a3v=new B.D(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a3G=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a3Z=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.ar6=new B.di([50,D.a48,100,D.a4g,200,D.a37,300,D.a3t,400,D.a3D,500,D.a4t,600,D.a2T,700,D.a3v,800,D.a3G,900,D.a3Z],x.m)
D.SB=new B.rB(D.ar6,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a7n=new B.ak(32,32,32,32)
D.at1=new B.ah(D.a7n,C.bC,null)
D.a7p=new B.ak(48,48,48,48)
D.at3=new B.ah(D.a7p,C.bC,null)
D.at9=new B.ah(C.ai,C.bC,null)
D.al3=w([],B.ar("B<mX>"))
D.al4=w([],B.ar("B<nn>"))
D.Xc=new A.PO(D.al3,D.al4)
D.avU=new B.fv("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avV=new B.fv("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avY=new B.fv("Automaten-Business","Umsatz je Automat",null,null)
D.aw_=new B.fv("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aw1=new B.fv("Top","Meistverkaufte Produkte",null,null)
D.aw5=new B.fv("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aw6=new B.fv("Kennzahlen","Rentabilit\xe4t",null,null)
D.XV=new B.t7(C.F,C.p,0)
D.aEm=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayw=new B.dV(D.aEm,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGj=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayz=new B.dV(D.aGj,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aEx=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayA=new B.dV(D.aEx,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGd=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayC=new B.dV(D.aGd,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFH=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayD=new B.dV(D.aFH,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFE=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayX=new B.dV(D.aFE,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aOG=new B.P(!0,C.D,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEv=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEG=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFo=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFx=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFK=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGv=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Z8=new A.adE(0,"auto")
D.aH1=new A.adE(1,"top")
D.aLi=new A.wC("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLj=new A.wC("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdb","bNZ",()=>B.iZ(new A.bry(),x.D))
w($,"cdc","avh",()=>B.iZ(new A.brz(),x.a))
w($,"ce8","xi",()=>B.bx2(new A.btk(),x.P))
w($,"cdd","bue",()=>C.aH.$1$1(new A.brA(),x.d))
w($,"cda","bNY",()=>C.aH.$1$1(new A.brx(),x.X))
w($,"cd9","bud",()=>C.aH.$1$1(new A.brw(),x.h))
w($,"cd8","buc",()=>B.aZS(A.c3l(),x.F,x.b))
w($,"c69","btJ",()=>new A.awV())
v($,"c9s","lw",()=>new A.b1v())})()};
(a=>{a["zhjr95S4pew5NmXr5X9OiTZim+I="]=a.current})($__dart_deferred_initializers__);