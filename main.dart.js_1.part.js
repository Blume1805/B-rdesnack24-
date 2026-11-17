((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O_(d,e,f,g,h){return new A.a6z(f,g,d,h,e,null)},
a6z:function a6z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uN:function uN(d){this.a=d},
E7:function E7(d){this.a=d},
bRV(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Su
w=x.f
v=x.N
u=x.z
t=A.aES(B.dj(w.a(e.h(a0,"current")),v,u))
s=A.aES(B.dj(w.a(e.h(a0,"prior_year")),v,u))
r=A.aES(B.dj(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cY(p,new A.aEA(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cY(o,new A.aEB(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cY(q,new A.aEC(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.dj(w.a(e.h(a0,"customer")),v,u)
m=B.b0(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p2(n.h(0,"app_gross"))
k=B.b0(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p2(n.h(0,"avg_basket"))
u=B.dj(w.a(e.h(a0,"derived")),v,u)
v=A.p2(u.h(0,"gross_margin_pct"))
e=A.p2(u.h(0,"net_margin_pct"))
w=A.p2(u.h(0,"ebitda_margin_pct"))
j=A.p2(u.h(0,"cashflow_operating"))
i=A.bqO(u.h(0,"revenue_growth_yoy_pct"))
h=A.bqO(u.h(0,"revenue_growth_mom_pct"))
g=A.bqO(u.h(0,"result_growth_yoy_pct"))
u=A.bqO(u.h(0,"result_growth_mom_pct"))
f=B.b0(J.a3(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.o9(t,s,r,p,o,q,new A.azP(m,l,k,n),new A.aAU(v,e,w,j,i,h,g,u),f)},
p2(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iY(J.am(d))
return w==null?0:w},
bqO(d){if(d==null)return null
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
wk:function wk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azP:function azP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAU:function aAU(d,e,f,g,h,i,j,k){var _=this
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
aEA:function aEA(){},
aEB:function aEB(){},
aEC:function aEC(){},
aES(d){var w=J.Y(d),v=A.u5(w.h(d,"revenue_net_7")),u=A.u5(w.h(d,"revenue_net_19")),t=A.u5(w.h(d,"revenue_net")),s=A.u5(w.h(d,"expense_net")),r=A.u5(w.h(d,"result_net")),q=A.u5(w.h(d,"vat_collected")),p=A.u5(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cY(w,new A.aET(),x._)
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
aET:function aET(){},
bRU(d){return new A.yl(d,new B.ir(x.c_),C.dI)},
brz:function brz(){},
brA:function brA(){},
btm:function btm(){},
brB:function brB(){},
bry:function bry(){},
brx:function brx(){},
yl:function yl(d,e,f){this.r=d
this.a=e
this.f=f},
aEz:function aEz(d,e,f){this.a=d
this.b=e
this.c=f},
aEy:function aEy(d,e,f){this.a=d
this.b=e
this.c=f},
bRW(){return new A.ym(null)},
alm(d,e,f,g,h){return new A.all(e,h,g,f,d,null)},
ym:function ym(d){this.a=d},
aER:function aER(d){this.a=d},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
aEK:function aEK(d,e,f){this.a=d
this.b=e
this.c=f},
aEL:function aEL(d){this.a=d},
aEI:function aEI(){},
aEM:function aEM(d){this.a=d},
aEN:function aEN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEQ:function aEQ(){},
aEP:function aEP(){},
aEO:function aEO(){},
aEH:function aEH(d,e){this.a=d
this.b=e},
aEF:function aEF(d){this.a=d},
aEG:function aEG(d){this.a=d},
agc:function agc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
all:function all(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anz:function anz(d,e){this.e=d
this.a=e},
bgZ:function bgZ(d){this.a=d},
bh_:function bh_(d){this.a=d},
bh0:function bh0(d,e,f){this.a=d
this.b=e
this.c=f},
bgY:function bgY(){},
IF:function IF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J5:function J5(d,e){this.c=d
this.a=e},
bmP:function bmP(d){this.a=d},
aga:function aga(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HO:function HO(d,e){this.c=d
this.a=e},
byk(d,e,f,g,h){var w=null
return B.jS(w,w,!0,w,new A.bqJ(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.alU(g,n,i,e,d,m,f,k,l,j,null)},
auC(d,e){return A.c1s(d,e)},
c1s(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auC=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bj(D.ayx)
t=4
o=e.aI(0,$.bZ(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.hw("finance-balance-sync",B.y(n,n)),$async$auC)
case 7:r=g
q=B.dj(x.f.a(r.a),x.N,n)
l.WL()
if(J.d(J.a3(q,"configured"),!1)){l.bj(D.ayB)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.buf()
if(e.e==null)B.S(B.a_(y.b))
e.gcv().cs(o)
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.WL()
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auC,v)},
auF(d,e,f){var w=0,v=B.q(x.H)
var $async$auF=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.jS(null,null,!0,null,new A.bqH(f,e,e.aI(0,$.bZ(),x.A)),d,null,!0,!0,x.H),$async$auF)
case 2:return B.o(null,v)}})
return B.p($async$auF,v)},
a6A:function a6A(d){this.a=d},
aJR:function aJR(){},
aJQ:function aJQ(){},
aJP:function aJP(){},
I7:function I7(d,e){this.c=d
this.a=e},
beq:function beq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bef:function bef(){},
beg:function beg(){},
beh:function beh(){},
bei:function bei(){},
bej:function bej(){},
bek:function bek(){},
bel:function bel(){},
bem:function bem(){},
ben:function ben(d){this.a=d},
beo:function beo(d){this.a=d},
bep:function bep(d){this.a=d},
ber:function ber(d,e){this.a=d
this.b=e},
bes:function bes(d,e){this.a=d
this.b=e},
bqJ:function bqJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqI:function bqI(d){this.a=d},
akG:function akG(d){this.a=d},
alU:function alU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bet:function bet(d,e){this.a=d
this.b=e},
Um:function Um(d,e,f){this.c=d
this.d=e
this.a=f},
XU:function XU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmn:function bmn(){},
bmo:function bmo(){},
bmp:function bmp(d){this.a=d},
TA:function TA(d,e,f){this.c=d
this.d=e
this.a=f},
b58:function b58(){},
b5a:function b5a(d){this.a=d},
b5b:function b5b(d){this.a=d},
b59:function b59(){},
TL:function TL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5W:function b5W(){},
b5X:function b5X(){},
b5Y:function b5Y(){},
b5Z:function b5Z(d){this.a=d},
amn:function amn(d,e){this.c=d
this.a=e},
beY:function beY(){},
beZ:function beZ(){},
aiL:function aiL(d,e){this.c=d
this.a=e},
Ca:function Ca(d,e,f){this.c=d
this.d=e
this.a=f},
as6:function as6(d,e){this.c=d
this.a=e},
bo5:function bo5(){},
bo6:function bo6(){},
wD:function wD(d,e){this.c=d
this.a=e},
ah3:function ah3(d,e){this.e=d
this.a=e},
b3E:function b3E(){},
b3D:function b3D(){},
b3C:function b3C(d,e,f){this.a=d
this.b=e
this.c=f},
b3w:function b3w(d,e){this.a=d
this.b=e},
b3x:function b3x(d,e){this.a=d
this.b=e},
b3F:function b3F(d){this.a=d},
b3G:function b3G(d){this.a=d},
b3y:function b3y(){},
b3z:function b3z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3A:function b3A(d,e){this.a=d
this.b=e},
b3B:function b3B(d,e,f){this.a=d
this.b=e
this.c=f},
bqH:function bqH(d,e,f){this.a=d
this.b=e
this.c=f},
bqG:function bqG(d){this.a=d},
Bc:function Bc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Td:function Td(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3q:function b3q(){},
b3r:function b3r(d){this.a=d},
b3s:function b3s(d){this.a=d},
b3u:function b3u(d,e){this.a=d
this.b=e},
b3t:function b3t(d,e){this.a=d
this.b=e},
b3v:function b3v(d){this.a=d},
bf:function bf(){},
bBN(d){return new A.KD(d,C.au,C.dA,null,null)},
KD:function KD(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Te:function Te(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eM$=f
_.cu$=g
_.c=_.a=null},
b3H:function b3H(d,e){this.a=d
this.b=e},
b3I:function b3I(d){this.a=d},
ax7(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akO:f,p=a0==null?16:a0,o=d==null?D.a_q:d,n=g==null,m=n?A.buL(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xd:a3
n=n?A.buL(r,r,r,r,r,r,r,r):g
w=j==null?D.DQ:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.nT(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BJ,s,w,i,n)},
axe(d,e,f,g,h){var w=d==null?D.akP:d,v=e==null?2:e,u=g==null?C.lx:g
return new A.fF(h,f===!0,w,v,u)},
bPb(d,e,f){var w=d.a
w=C.d.aR(w+(e.a-w)*f)
return A.axe(A.kx(d.c,e.c,f,A.c2d(),x.fj),B.ac(d.d,e.d,f),!1,A.kx(d.e,e.e,f,A.a_7(),x.S),w)},
a0A(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SC
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aXg(f,v?8:m)
t=t.aXh(g,v?8:m)
v=d==null?A.bBL(r,r,r,r,r):d
return new A.io(q,l,w,j,u,s,e,t,v,k==null?D.akQ:k)},
bPc(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mD(d.f,e.f,f),p=A.kx(d.r,e.r,f,A.a_7(),x.S),o=B.bW(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a0A(A.bBL(v,u,null,!1,t),p,q,o,s,n,null,A.kx(d.y,e.y,f,A.c2e(),x.G),m,r)},
bPd(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mB(u,w,v,B.bW(d.d,e.d,f))},
bBL(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dm
else w=d
return new A.a0w(g===!0,v,u,w,f)},
buL(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0C(4,C.hU,16,D.xF,0,120,A.c2g(),!1,!1,D.Z9,0,C.I,A.c2f())
else w=k
v=j==null?C.l0:j
return new A.a0B(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c30(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D_(C.d.j(f.b),v)},
c3_(d){return A.azd(D.dm,15)},
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
ax6:function ax6(d,e){this.a=d
this.b=e},
fF:function fF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axf:function axf(){},
axg:function axg(){},
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
a0w:function a0w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0B:function a0B(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adF:function adF(d,e){this.a=d
this.b=e},
a0C:function a0C(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KE:function KE(d){this.a=d},
a0D:function a0D(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xx:function xx(d,e){this.a=d
this.b=e},
ah_:function ah_(){},
ah6:function ah6(){},
ah7:function ah7(){},
ah9:function ah9(){},
aha:function aha(){},
ahb:function ahb(){},
ahc:function ahc(){},
ahd:function ahd(){},
ahe:function ahe(){},
axh:function axh(d){this.a=d},
axi:function axi(){},
up:function up(d,e,f){this.a=d
this.b=e
this.c=f},
ah8:function ah8(){},
axj:function axj(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axk:function axk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axl:function axl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5C:function a5C(d){this.b=d},
a0z:function a0z(d,e,f){this.d=d
this.e=e
this.a=f},
aaM:function aaM(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i2=e
_.d_=f
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
c31(d,e){var w=null
return new A.Rg(e.w,B.k(e.r,w,w,w,w,w,w,w),w)},
ax_(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pd(t,e.b,new A.q7(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bD9(d,e,f){var w=A.ax_(d.b,e.b,f),v=A.ax_(d.d,e.d,f),u=A.ax_(d.e,e.e,f)
return new A.uP(e.a,w,A.ax_(d.c,e.c,f),v,u)},
bRY(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ew(w,v)},
bD7(d,e,f){return new A.yo(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5s(d){return!0},
c34(d){return D.a89},
bD8(d,e,f,g){var w
if(d==null)w=f==null?C.D:null
else w=d
return new A.pA(w,f,g,e)},
bF7(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c29(),x.dv)
v.toString
w=A.kx(d.b,e.b,f,A.c2b(),x.bN)
w.toString
return new A.PQ(v,w)},
bSJ(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.mX(t,w,v,u)},
bXY(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rf(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nn(t,w,v,u)},
bSI(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bSG(B.buD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_7(),x.S)
if(u==null)u=v==null?C.D:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
bXX(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bXV(B.buD(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rf(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_7(),x.S)
if(u==null)u=v==null?C.D:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bSG(d,e,f,g,h,i){return new A.a5N(f,!1,g,i,d,e)},
bSH(d){return C.d.ak(d.e,1)},
bXV(d,e,f,g,h,i){return new A.ae3(f,!1,g,i,d,e)},
bXW(d){return C.d.ak(d.e,1)},
bD3(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c28(),x.cm)
v.toString
w=A.kx(d.b,e.b,f,A.c2a(),x.es)
w.toString
return new A.MC(v,w,!0)},
bRX(d,e,f){return new A.MJ(d,e==null?4:e,f)},
a0p:function a0p(){},
CZ:function CZ(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.r=d
this.w=e},
q7:function q7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acd:function acd(){},
pd:function pd(d,e,f,g){var _=this
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
yo:function yo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pA:function pA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adH:function adH(){},
PQ:function PQ(d,e){this.a=d
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
a5N:function a5N(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae3:function ae3(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MC:function MC(d,e,f){this.a=d
this.b=e
this.c=f},
uO:function uO(){},
MJ:function MJ(d,e,f){this.a=d
this.b=e
this.c=f},
agV:function agV(){},
agZ:function agZ(){},
ak5:function ak5(){},
akl:function akl(){},
akm:function akm(){},
ako:function ako(){},
akp:function akp(){},
alb:function alb(){},
ala:function ala(){},
alc:function alc(){},
aoF:function aoF(){},
aqx:function aqx(){},
aqy:function aqy(){},
asa:function asa(){},
asP:function asP(){},
asO:function asO(){},
asQ:function asQ(){},
awW:function awW(){},
Kx:function Kx(){},
Ky:function Ky(d,e,f){this.c=d
this.d=e
this.a=f},
awY:function awY(d){this.a=d},
awX:function awX(d){this.a=d},
Rg:function Rg(d,e,f){this.c=d
this.e=e
this.a=f},
XJ:function XJ(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWt(d,e,f){var w=B.ad(f),v=w.i("ab<1,jV>")
v=B.Q(new B.ab(f,new A.aZ2(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZ3(),w),w.i("av.E"))
return new A.ace(e,d,v,w,null)},
bP8(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6q(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tn(v,C.ao,C.w,new B.kp(1),v,v,v,v,C.bw,v)
u=new A.a0q(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.g))
u.bk()
return u},
ace:function ace(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZ2:function aZ2(){},
aZ3:function aZ3(){},
a0q:function a0q(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.W4$=h
_.aT2$=i
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
bez:function bez(d,e){this.a=d
this.b=e},
awZ:function awZ(){},
jV:function jV(d,e){this.a=d
this.b=e},
nS:function nS(d,e){this.a=d
this.b=e},
agW:function agW(){},
agX:function agX(){},
agY:function agY(){},
Tb:function Tb(){},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZ4:function aZ4(d){this.a=d},
aZ5:function aZ5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZ6:function aZ6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4U(d,e){var w=d==null?B.cT(C.D,1):d
return new A.a4T(e!==!1,w)},
a0F:function a0F(){},
a4T:function a4T(d,e){this.a=d
this.b=e},
MQ:function MQ(){},
a4V:function a4V(){},
axu:function axu(){},
aDP:function aDP(d,e){this.a=d
this.b=e},
ahh:function ahh(){},
aki:function aki(){},
akj:function akj(){},
akq:function akq(){},
KH:function KH(){},
vy:function vy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hl:function hl(){},
a4Z:function a4Z(d){this.a=d},
a5_:function a5_(d){this.a=d},
a50:function a50(d){this.a=d},
ML:function ML(){},
MM:function MM(){},
a53:function a53(d){this.a=d},
MO:function MO(){},
MP:function MP(d){this.a=d},
a4Y:function a4Y(d){this.a=d},
a4X:function a4X(d){this.a=d},
MK:function MK(d){this.a=d},
a51:function a51(d){this.a=d},
a52:function a52(d){this.a=d},
MN:function MN(d){this.a=d},
FU:function FU(){},
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
aUp:function aUp(d){this.a=d},
Ob:function Ob(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vx:function Vx(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eM$=g
_.cu$=h
_.c=_.a=null},
beE:function beE(d,e){this.a=d
this.b=e},
beC:function beC(d){this.a=d},
beD:function beD(d,e){this.a=d
this.b=e},
beB:function beB(){},
beF:function beF(d){this.a=d},
bw0(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pK(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aK1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SC:u
else w=g
v=f==null?A.ax5(!1,u,0,u,!1,D.vQ):f
w=new A.e7(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ax5(!1,u,0,u,!1,D.vQ):d,j,a0,i,s,!1,p)
w.ar0(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bBM(d.ay,e.ay,f)
v=A.bBM(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kx(d.cy,e.cy,f,A.a_7(),x.S)
r=B.Z(d.r,e.r,f)
q=B.rf(d.w,e.w,f)
p=A.kx(d.a,e.a,f,A.c27(),x.cw)
p.toString
o=B.bFE(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aK1(v,m,w,r,e.z,s,new A.yn(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Oc(n),!1,u,o,!0,e.cx,p)},
ax5(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
else w=e
return new A.a0y(h,w,g,i,f,!1)},
bBM(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.rf(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bD8(t,A.kx(v.d,u.d,f,A.a_7(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.rf(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.ax5(!1,s,v,u,e.a,new A.KC(!1,r,w.c,!0))},
bPe(d,e,f){var w=B.Z(d.c,e.c,f),v=B.rf(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
return new A.mC(e.a,e.b,w,v)},
c5t(d){return!0},
by5(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iW)return A.byU(w.a,A.bvH(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dm:w},
c_Q(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iW)w=A.byU(v.a,A.bvH(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dm}return A.azd(w,40)},
bI9(d,e,f,g,h){var w,v=A.by5(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iW)w=A.byU(u.a,A.bvH(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dm}u=A.azd(w,40)
return new A.MJ(v,h==null?4:h,u)},
c5r(d,e){return!0},
c1V(d,e){return Math.abs(d.a-e.a)},
c37(d,e){var w=J.cY(e,new A.bro(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c33(d,e){return-1/0},
c32(d,e){return d.a[e].b},
bJl(d){var w=J.cY(d,new A.brl(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bJk(d){return A.azd(D.dm,15)},
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
aK2:function aK2(){},
Oc:function Oc(d){this.a=d},
a0y:function a0y(d,e,f,g,h,i){var _=this
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
KC:function KC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yn:function yn(d,e,f){this.a=d
this.b=e
this.c=f},
aJS:function aJS(d,e){this.a=d
this.b=e},
a4W:function a4W(){},
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
bro:function bro(d){this.a=d},
brn:function brn(d){this.a=d},
a6O:function a6O(){},
brl:function brl(){},
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
Gl:function Gl(d){this.a=d},
Od:function Od(d){this.a=d},
z9:function z9(d,e){this.a=d
this.b=e},
ah4:function ah4(){},
ah5:function ah5(){},
ahi:function ahi(){},
akk:function akk(){},
akn:function akn(){},
am0:function am0(){},
am1:function am1(){},
am2:function am2(){},
am4:function am4(){},
am5:function am5(){},
am6:function am6(){},
am7:function am7(){},
aqw:function aqw(){},
as9:function as9(){},
aK3:function aK3(d){this.a=d},
aK4:function aK4(){},
aK5:function aK5(){},
za:function za(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
am3:function am3(){},
aK6:function aK6(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aK9:function aK9(){},
aK7:function aK7(d,e,f){this.a=d
this.b=e
this.c=f},
aK8:function aK8(d,e,f){this.a=d
this.b=e
this.c=f},
aKa:function aKa(){},
vj:function vj(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6N:function a6N(d,e,f){this.d=d
this.e=e
this.a=f},
aaZ:function aaZ(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i2=e
_.d_=f
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
buK(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.ax8(),m.i("ab<1,F>")).km(0,new A.ax9()),k=e-l,j=new A.axc(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aB(0,new A.axa(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aB(0,new A.axb(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ax8:function ax8(){},
ax9:function ax9(){},
axc:function axc(d,e,f){this.a=d
this.b=e
this.c=f},
axd:function axd(d,e,f){this.a=d
this.b=e
this.c=f},
axa:function axa(d,e,f){this.a=d
this.b=e
this.c=f},
axb:function axb(d,e,f){this.a=d
this.b=e
this.c=f},
bvH(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ad(w).i("iX<1>")).aB(0,new A.aH6(v,d))
else throw B.e(B.bD('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aH6:function aH6(d,e){this.a=d
this.b=e},
aAn(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAo(),w),w.i("av.E"))
return A.c2W(d,new A.a1e(v,x.C))}else return d},
aAo:function aAo(){},
bX4(d,e){var w=!0
if(d!==C.f9)if(!(d===C.ao&&e===C.w))w=d===C.ix&&e===C.aY
if(w)return D.E2
else{w=!0
if(d!==C.iw)if(!(d===C.ix&&e===C.w))w=d===C.ao&&e===C.aY
if(w)return D.E3
else return D.a8N}},
Nf:function Nf(d,e){this.a=d
this.b=e},
a14:function a14(d,e){this.a=d
this.b=e},
zf:function zf(d,e){this.a=d
this.$ti=e},
ame:function ame(){},
c2W(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.al(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ad,k,k,h)
for(j=B.Mw(d),w=B.b([],x.I),v=new B.My(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.S(B.fu('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Mx(v,r)
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
p=new B.JZ(new B.ck(t,p,k,new B.ap1([q,o,o+m,!0]),l),C.p,k)
h.push(p)
l=g.f
if(l!=null)p.iz(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1e:function a1e(d,e){this.a=d
this.b=0
this.$ti=e},
b1w:function b1w(){},
bvw(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bPh(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azd(d,e){var w=1-e/100
return B.aC(d.gfH(d),C.d.aR(d.gNA()*w),C.d.aR(d.gFW()*w),C.d.aR(d.gK7()*w))},
bD6(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
bvx(d){var w=d.a,v=w?A.aZ1(d.b):0,u=w?A.aZ1(d.c):0,t=w?A.aZ1(d.d):0
return new B.ak(v,u,t,w?A.aZ1(d.e):0)},
bUn(d){var w
if(d.c===0){d.seX(null)
w=B.c_(d.r)
d.r=B.aC(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwn(d,e,f,g){var w
if(f!=null){d.r=C.D.gp(0)
d.seX(f.mH(0,g))}else{w=e==null?C.F:e
d.r=w.gp(w)
d.seX(null)}},
aZ1(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kx(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4f(d,e,f){return C.d.aR(d+(e-d)*f)},
byU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a6z.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.B
r=r?C.l:C.am
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ct(t.x,C.l,s,18),C.b1],w))
v.push(B.aD(new B.ep(t.c,!1,s),1))
v=B.aq(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.U,B.k(t.d,1,C.ah,s,B.c2(u==null?C.j:u,22,C.P),s,s,s)],w)
return B.bA(r,B.ag(w,C.C,s,C.ij,C.h),q,s,C.ai,s,3)}}
A.uN.prototype={
Lr(d){return this.aT1(d)},
aT1(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lr=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ez("finance_summary",B.a5(["p_from",E.ra(d.a),"p_to",E.ra(d.b)],s,r),r),$async$Lr)
case 3:q=f
if(q==null){u=D.aoN
w=1
break}if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.ar0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lr,v)},
Lq(d){return this.aT0(d)},
aT0(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lq=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ez("finance_kpis",B.a5(["p_from",E.ra(d.a),"p_to",E.ra(d.b)],s,r),r),$async$Lq)
case 3:q=f
if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.aox
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lq,v)},
pC(d){return this.aqJ(d)},
aqJ(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
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
Lm(d){return this.aSS(d)},
aSS(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lm=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hw("finance-export-pdf",B.a5(["from",E.ra(d.a),"to",E.ra(d.b)],s,s)),$async$Lm)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.e1("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lm,v)}}
A.E7.prototype={
FQ(d){return this.ajR(d)},
ajR(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FQ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lr(d),$async$FQ)
case 7:q=f
o=A.aES(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FQ,v)},
FL(d){return this.ajC(d)},
ajC(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lq(d),$async$FL)
case 7:q=f
o=A.bRV(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FL,v)},
pC(d){return this.aqK(d)},
aqK(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hs(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pC,v)},
Ll(d){return this.aSR(d)},
aSR(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ll=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lm(d),$async$Ll)
case 7:q=f
o=C.iR.cE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hs(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ll,v)},
Hs(d){if(d instanceof B.yi)return d
if(d instanceof B.l5){if(d.b==="42501")return new B.vC(d.a)
return new B.t6(d.a)}if(d instanceof B.N3)return new B.t6("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B4("Unerwarteter Fehler: "+B.i(d))},
$iaEE:1}
A.qi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wk.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azP.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAU.prototype={
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
A.yl.prototype={
GM(d){return this.aqI(0)},
aqI(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GM=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se7(0,C.dv)
s=t.r
r=s.aI(0,$.xj(),x.P)
p.a=null
w=3
return B.j(B.pc(new A.aEz(p,t,r),x.H),$async$GM)
case 3:t.se7(0,f)
q=t.f
if(q.ghp(q)==null){q=$.bug()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GM,v)},
Lk(){return this.aSQ()},
aSQ(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lk=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se7(0,C.dv)
s=t.r.aI(0,$.xj(),x.P)
q.a=null
w=3
return B.j(B.pc(new A.aEy(q,t,s),x.H),$async$Lk)
case 3:t.se7(0,e)
r=t.f
u=r.ghp(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lk,v)}}
A.ym.prototype={
ds(d,e){var w=null,v=e.ao($.xj(),x.P),u=e.ao($.bug(),x.aN)
return B.iv(B.dT(B.b([new B.fv("Finanzen","Dashboard",new A.agc(e.ao($.bue(),x.b).giU(),new A.aEJ(this,d,e),new A.aEK(this,d,e),new A.aEL(d),new A.aEM(d),new A.aEN(this,d,e,v),w),w),C.aP,new A.anz(v,w),C.bY,D.aew,C.bY,B.dt(u,new A.aEO(),new A.aEP(),new A.aEQ(),!1,!0,!1,x.d,x.l)],x.p),C.cJ,w,C.Q,!1),C.l,new A.aER(e))},
Ji(d,e){return this.aLs(d,e)},
aLs(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Ji=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bue()
w=3
return B.j(e.aI(0,s.ghP(),x.F).GM(0),$async$Ji)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghp(s)
t=d.P(x.q).f
t.bj(B.c9(null,null,null,null,null,C.o,null,B.k(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Ji,v)},
Bd(d,e){return this.awR(d,e)},
awR(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bd=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.aI(0,$.bue().ghP(),x.F).Lk(),$async$Bd)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bj(D.ayD)
w=1
break}t=B.q1(C.p,10)
w=4
return B.j($.bLv().tY(s,"finanzauswertung.pdf",t,null,null,null),$async$Bd)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bd,v)},
Be(d,e,f){return this.aJ2(d,e,f)},
aJ2(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Be=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.jS(null,null,!0,null,new A.aEH(f,d),d,null,!0,!0,x.cJ),$async$Be)
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
A.agc.prototype={
u(d){var w=this,v=null,u=A.alm(C.l,F.i0,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alm(v,D.aay,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alm(v,D.xX,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alm(C.av,C.jf,C.av,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.b1,t,C.b1,r,C.b1,q,C.b1,A.alm(C.aC,C.fO,C.aC,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.M,0,v,v)}}
A.all.prototype={
u(d){var w,v=this,u=null,t=B.aQ(12),s=B.aQ(12),r=B.aQ(12),q=v.w
if(q==null)q=C.am
q=B.cT(q,1)
w=v.r
if(w==null)w=C.j
return B.GX(B.dK(!1,C.a_,!0,t,B.eO(!1,s,!0,B.ba(u,B.ct(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.af,0,u,u,u,u,u,C.bu),u,v.d,u,u)}}
A.anz.prototype={
ds(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bA(w,B.ag(B.b([D.a7W,C.U,B.aq(B.b([D.ab1,C.aT,B.aD(B.k(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.j,16,C.P),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.v,B.mn(C.cD,B.b([new A.IF("Monat",new A.bgZ(e),w,w),new A.IF("Jahr (YTD)",new A.bh_(e),w,w),new A.IF("Zeitraum w\xe4hlen \u2026",new A.bh0(this,d,e),D.a9C,w)],t),C.e9,6,8)],t),C.C,w,C.f,C.h),w,w,C.E,w,3)},
IE(d,e){return this.aHX(d,e)},
aHX(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IE=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.auW(new A.bgY(),d,B.bQ(B.aX(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bQ(B.aX(t)+1,1,1,0,0,0,0),C.eo),$async$IE)
case 2:r=g
if(r!=null)e.aI(0,$.xj().ghP(),x.V).wz(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IE,v)}}
A.IF.prototype={
u(d){var w=null,v=B.aQ(9999),u=B.aQ(9999),t=B.aQ(9999),s=B.cT(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ct(p,C.j,w,14),C.b1],r))
q.push(B.k(this.c,w,w,w,B.E(C.j,13,C.P),w,w,w))
return B.dK(!1,C.a_,!0,v,B.eO(!1,u,!0,B.ba(w,B.aq(q,C.k,w,C.f,C.M,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.af,0,w,w,w,w,w,C.bu)}}
A.J5.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iV(new A.bmP(this)),C.bY,D.a8_,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.aq(B.b([D.abX,C.aK,B.aD(B.k("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.t,14,C.m),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.af,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.L(w,B.b([new A.aga(t.a,t.b,t.c==="revenue",t.d,s),C.U],r))}q.push(B.ag(w,C.k,s,C.f,C.h))}return B.ag(q,C.ac,s,C.f,C.h)}}
A.aga.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.af,s=B.cT(u?C.l:C.am,1),r=B.aQ(4),q=w.c
r=B.ba(C.W,B.k(C.c.a_(q,0,1),v,v,v,B.c2(C.j,14,C.q),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.k(q+" \xb7 "+w.d,1,C.ah,v,B.E(C.j,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aD(B.ag(B.b([q,B.k(t,v,v,v,B.E(C.t,12,C.m),v,v,v)],s),C.C,v,C.f,C.h),1)
q=$.dx().ar(w.f)
return B.bA(v,B.aq(B.b([r,C.aK,t,B.k(q,v,v,v,B.E(u?C.aC:C.j,15,C.P),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eK,v,3)}}
A.HO.prototype={
u(d){var w=null
return B.bA(C.av,B.aq(B.b([D.acy,C.aK,B.aD(B.k(this.c,w,w,w,B.E(C.j,14,C.m),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eE,w,C.E,w,3)}}
A.a6A.prototype={
ds(d,e){return B.dt(e.ao($.bO_(),x.e),new A.aJP(),new A.aJQ(),new A.aJR(),!1,!0,!1,x.X,x.l)}}
A.I7.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aw7,C.v,B.iV(new A.beq(v,q,100-t.w.a,w,p)),C.v,new A.akG(u),C.aP,D.aw6,C.v,new A.ah3(t,u),C.aP,D.aw0,C.v,B.by(u,!0,u,B.mV(u,B.bA(u,new A.TA(t,220,u),u,u,C.E,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ber(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.avV,C.v,B.by(u,!0,u,B.mV(u,new A.TL(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bes(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.avZ,C.v,new A.amn(t,u),C.aP,D.avW,C.v,new A.aiL(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aP,D.aw2,C.v,new A.as6(t,u)],s))
return B.ag(r,C.ac,u,C.f,C.h)}}
A.akG.prototype={
u(d){var w=null
return B.k("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.t,11,C.m).ej(1.35),w,w,w)}}
A.alU.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cC(m.d,"-")?C.av:C.aC
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bet(m,d):l
r=x.p
q=B.b([B.aD(B.k(m.c.toUpperCase(),l,l,l,B.E(C.t,10,C.q).fU(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cT(C.hM,0.8)
n=B.aQ(4)
q.push(B.ba(l,B.k("Ziel "+p,l,l,l,B.E(C.av,9,C.q),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nk,l,l,l))}q=B.b([B.aq(q,C.k,l,C.f,C.h,0,l,l),C.b9,B.bvv(C.du,B.k(m.d,l,l,l,B.c2(w,22,C.q),l,l,l),C.mE)],r)
p=m.e
if(p!=null)q.push(B.k(p,2,C.ah,l,B.E(C.t,10,C.aI),l,l,l))
q.push(C.cV)
q.push(B.aq(B.b([new A.Um("Vormonat",m.r,l),C.cU,new A.Um("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.cV)
q.push(B.aD(new A.XU(v,m.y,m.z,l),1))
return B.by(l,u,l,B.mV(l,B.bA(l,B.ag(q,C.C,l,C.f,C.h),l,l,C.dB,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.Um.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aQ(4)
return B.ba(r,B.k(this.c+" \u2014",r,r,r,B.E(C.t,9,C.q),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nk,r,r,r)}w=q>=0
v=w?C.aC:C.av
u=v.fE(0.12)
t=B.cT(v,0.7)
s=B.aQ(4)
return B.ba(r,B.aq(B.b([B.ct(w?F.a8S:D.a8R,v,r,10),F.ayf,B.k(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.E(v,9,C.q),r,r,r)],x.p),C.k,r,C.f,C.M,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nk,r,r,r)}}
A.XU.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ew(v,j[v]))
u=C.b.km(j,new A.bmn())
t=C.b.km(j,new A.bmo())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bmp(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4U(k,!1)
w=B.b([A.aK1(k,2,A.ax5(!1,C.l.fE(0.16),0,k,!0,D.vQ),C.l,0.35,k,D.DU,k,!0,!1,!0,!1,D.Fe,!1,10,D.XW,!0,C.lx,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Ob(A.bw0(k,k,k,D.akR,l,D.BJ,D.DQ,D.DV,w,D.aeA,k,m,k,n,D.Xd,D.akS,D.a8c),C.au,C.ag,k,k)}}
A.TA.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLk
w=C.b.fK(p,0,new A.b58())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axe(B.b([A.a0A(q,q,D.B9,q,C.l,q,q,q,r.b,6),A.a0A(q,q,D.B9,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.cd(A.bBN(A.ax7(q,q,u,q,q,A.a4U(q,!1),q,new A.yo(!0,!0,q,new A.b59(),A.a_1(),!1,q,A.auH(),A.a_1()),q,v,q,q,new A.uP(!0,new A.pd(16,q,new A.q7(!0,new A.b5a(this),46,q),!0),D.kt,D.kt,new A.pd(16,q,new A.q7(!0,new A.b5b(p),26,q),!0)))),this.d,q)},
aKJ(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.TL.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b5W(),w),x.i)
C.b.L(o,new B.ab(u,new A.b5X(),w))
t=C.b.fK(o,0,new A.b5Y())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axe(B.b([A.a0A(q,q,q,q,C.l,q,q,q,v[s],14),A.a0A(q,q,q,q,C.aC,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cd(A.bBN(A.ax7(q,q,n,q,q,A.a4U(q,!1),q,D.DV,q,o,q,q,new A.uP(!0,D.kt,D.kt,D.kt,new A.pd(16,q,new A.q7(!0,new A.b5Z(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.E,q,3)}}
A.amn.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aLj
w=new B.ab(k,new A.beY(),B.ad(k).i("ab<1,F>")).km(0,new A.beZ())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
q=B.k(r.b,m,m,m,new B.P(!0,C.j,m,l,C.bH,m,14,C.q,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dx()
o=p.ar(r.f)
q=B.ag(B.b([q,B.k(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.t,m,l,C.bH,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h)
o=r.d
p=p.ar(o)
n=new B.aT(4,4)
o=B.b([new B.iw(C.ay,C.f,C.h,C.k,m,C.bx,m,0,B.b([new B.mQ(1,C.eL,q,m),C.aT,B.k(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.bH,m,16,C.q,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cV,new B.Do(new B.d5(n,n,n,n),C.bK,B.Oe(C.am,8,C.d.bS(o/w,0,1),D.AZ),m)],v)
q=C.b.gae(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_5(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.L(u,o)}return B.bA(m,B.ag(u,C.k,m,C.f,C.h),m,m,C.E,m,3)}}
A.aiL.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aD(new A.Ca("Aktive Kunden",""+s,u),1)
w=B.aD(new A.Ca("K\xe4ufe",""+t.a,u),1)
v=$.dx()
return B.bA(u,B.aq(B.b([s,w,B.aD(new A.Ca("\xd8-Warenkorb",v.ar(t.d),u),1),B.aD(new A.Ca("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.E,u,3)}}
A.Ca.prototype={
u(d){var w=null
return B.ag(B.b([B.k(this.c.toUpperCase(),w,w,w,B.E(C.t,10,C.q).fU(0.6),w,w,w),C.bU,B.k(this.d,w,w,w,B.c2(C.j,20,C.q),w,w,w)],x.p),C.C,w,C.f,C.M)}}
A.as6.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.bo5(),B.ad(m).i("ab<1,F>")).km(0,new A.bo6()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.I)(m),++v){u=m[v]
t=B.k(u.b,1,C.ah,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.k(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.t,o,n,C.bH,o,12,C.P,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dx().ar(r)
p=new B.aT(4,4)
r=B.b([new B.iw(C.ay,C.f,C.h,C.k,o,C.bx,o,0,B.b([new B.mQ(1,C.eL,t,o),s,B.k(q,o,o,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b9,new B.Do(new B.d5(p,p,p,p),C.bK,B.Oe(C.am,6,C.d.bS(r/l,0,1),D.AZ),o)],k)
t=C.b.gae(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_5(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.U)
C.b.L(j,r)}return B.bA(o,B.ag(j,C.k,o,C.f,C.h),o,o,C.E,o,3)}}
A.wD.prototype={
u(d){var w=null
return B.bA(w,B.k(this.c,w,w,w,B.E(C.t,13,C.m),w,w,w),C.af,w,C.E,w,3)}}
A.ah3.prototype={
ds(d,e){return B.dt(e.ao($.buf(),x.fM),new A.b3C(this,d,e),new A.b3D(),new A.b3E(),!1,!0,!1,x.h,x.l)}}
A.Bc.prototype={
W(){return new A.Td()},
aXX(){return this.d.$0()}}
A.Td.prototype={
az(){var w,v,u,t,s,r,q=this
q.aP()
q.d=new B.b9(Date.now(),0,!1)
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
a3U(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pq[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b1(s,".",",")
t.lK(0,t.a.xT(C.aQ,C.bI,s))}}this.J(new A.b3q())},
aEB(){this.a3U(D.aoP)
this.c.P(x.q).f.bj(D.ayY)},
HU(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HU=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b_(a1)
for(e=0;e<8;++e)a2.E(0,D.pq[e].a)
q=a2
t=4
w=7
return B.j($.aEs.cb().zc(B.b(["csv","txt"],x.s),C.xI,!0),$async$HU)
case 7:p=a5
a2=p
o=a2==null?null:J.JV(a2.a).c
if(o==null){w=1
break}n=C.aB.adf(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BO.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.avr(l,B.bS("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.bg(J.a3(k,0)).toLowerCase()
i=J.CD(q,j)?j:D.ar1.h(0,j)
if(i==null)continue
d=C.c.bg(C.b.n_(J.bOH(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.iY(h)
if(g!=null)J.fn(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bj(D.ayA)
w=1
break}r.a3U(m)
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
return B.p($async$HU,v)},
I5(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I5=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3r(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_r("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.eh(),0,10),"p_cash_and_bank",q.rm("cash_and_bank"),"p_receivables",q.rm("receivables"),"p_inventory_value",q.rm("inventory_value"),"p_other_current_assets",q.rm("other_current_assets"),"p_fixed_assets",q.rm("fixed_assets"),"p_current_liabilities",q.rm("current_liabilities"),"p_long_term_liabilities",q.rm("long_term_liabilities"),"p_equity",q.rm("equity")],x.N,x.aU))
w=7
return B.j(n,$async$I5)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXX()
o=q.c
o.toString
B.bn(o,!1).fb()
q.c.P(x.q).f.bj(D.ayE)
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
if(q.c!=null)q.J(new A.b3s(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I5,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.k("Bilanzwerte erfassen",r,r,r,B.c2(C.j,18,C.q),r,r,r),p=s.f?r:new A.b3u(s,d),o=s.d
o===$&&B.a()
p=B.i5(D.abj,B.k("Stichtag: "+C.c.a_(o.eh(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aD(B.i5(D.aco,D.aEH,o?r:s.gaDB(),r),1)
v=x.p
w=B.b([p,C.U,B.aq(B.b([w,C.aT,B.aD(B.i5(D.acd,D.aEw,o?r:s.gaEA(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pq[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.eS(r,C.aS,!1,r,!0,C.o,r,B.f6(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aU,r,r,r,r,r,C.iy,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ao,r,C.a3,r,r,r,r),C.U],v))}w.push(B.k("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.t,11,C.m),r,r,r))
p=B.cd(B.f1(B.ag(w,C.ac,r,C.f,C.M),r,r,r,C.Q),r,380)
o=s.f
w=B.dL(C.d7,r,r,o?r:new A.b3v(d),r,r)
o=o?r:s.gaEj()
t=B.dI(C.l,C.B,r,r,r,r,r)
return B.my(B.b([w,B.dS(s.f?F.Ys:C.ex,o,t)],v),C.B,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_5(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.eZ(B.K(this))^B.bJS(this.gbD()))>>>0},
j(d){B.bD1()
return B.K(this).j(0)}}
A.KD.prototype={
W(){return new A.Te(B.y(x.S,x.J),new A.axh(B.y(x.x,x.gF)),null,null)}}
A.Te.prototype={
u(d){var w,v=this,u=v.a1P(),t=v.CW
t.toString
t=v.a1Q(t.av(0,v.gh2().gp(0)))
w=v.a1Q(u)
v.a.toString
return new A.Ky(new A.a0z(t,w,null),u,null)},
a1Q(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axe(s.c,s.d,!1,r,s.a))}return d.aPS(w)},
a1P(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UD(t.ch)
if(r)s=w.a
r=t.y
t=t.aQO(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPT(A.buL(!1,!0,!0,v.d,v.c,u.gasi(),v.f,v.e))}return t},
asj(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafL()||e==null||e.a==null){w=v.cy
v.J(w.gaPf(w))
return}v.J(new A.b3H(v,e))},
m0(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1P(),new A.b3I(w)))}}
A.nT.prototype={
Ve(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ax7(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQO(d,e){return this.Ve(null,null,d,e)},
aPT(d){return this.Ve(null,d,null,null)},
aPS(d){return this.Ve(d,null,null,null)},
Xc(d,e,f){var w,v,u,t=A.kx(d.ch,e.ch,f,A.c2c(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bD9(d.d,e.d,f),q=A.bF7(d.e,e.e,f),p=A.bD7(d.c,e.c,f),o=e.a
o=A.a4U(B.a0R(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.ax7(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bD3(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ax6.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fF.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axf(),B.ad(v).i("ab<1,F>")).km(0,new A.axg())
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
A.a0w.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0B.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adF.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0C.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D_.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.KE.prototype={}
A.a0D.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xx.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.ah_.prototype={}
A.ah6.prototype={}
A.ah7.prototype={}
A.ah9.prototype={}
A.aha.prototype={}
A.ahb.prototype={}
A.ahc.prototype={}
A.ahd.prototype={}
A.ahe.prototype={}
A.axh.prototype={
UD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.up(0,0,!1)
v=new A.zf(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.up(t,u,!0)}w=null
try{w=C.b.qe(d,new A.axi())}catch(s){return new A.up(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ah8.prototype={}
A.axj.prototype={
i8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_X(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ace(t,A.buK(w,t.a),u)
l.y=u
l.aS9(e,u,f)
l.alP(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSi(d,e,m,t,r,s,n,o,f)}}},
ace(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e1("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ad(p).i("iX<1>")).aB(0,new A.axk(t,q,r,s))
w.push(new A.a5C(q))}return w},
aS9(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
a4=B.PM(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.PM(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gp(0)
k.seX(null)
a6=b2.f.e_()
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
a6=b2.f.e_()
v.drawRRect(B.mw(a4),a6)
a6.delete()
v.restore()
b2.aSg(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
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
n=A.aAn(new B.ck(n.r,C.ad,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mG(n.gjs().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSi(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AU(a5,a5,a5,a5,B.dd(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().ZY(a8,a7.b),a7.a),C.cX,C.w,a5,b6.c,C.bw)
w.ag3(b1.f)
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
if(v!==D.aH2)j=v===D.Z9&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZZ(t,n,b1.d,b1.e)
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
r=$.lw().Kh(new B.H(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.Kh(new B.H(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaic()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VS(d,new A.axl(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSg(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.PM(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aT(i.z,i.Q)
p=v?C.a2:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a2
q=B.PM(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a2)}else q=B.bwJ(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Wv(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ace(b2,A.buK(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0D(d,q,a0,o,a2,a1,new A.ew(d.a,v),new B.r(n,t))}}return null}}
A.a5C.prototype={}
A.a0z.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.axj()
t.a17()
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
t=new A.aaM(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YQ(v.cy)
t.afe()
return t},
by(d,e){e.sih(0,this.d)
e.sYA(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.aaM.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYA(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0H(d.cy)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a14(t,v),new A.vy(u.aC,u.i2,u.d_,x.Q))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.KE(w.fW.Wv(d,v,new A.vy(w.aC,w.i2,w.d_,x.Q)))}}
A.a0p.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CZ.prototype={
K(){return"AxisSide."+this.b}}
A.tq.prototype={}
A.q7.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acd.prototype={
gbD(){return[!1,0,0,0]}}
A.pd.prototype={
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
A.yo.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pA.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adH.prototype={
gbD(){return[this.a,this.b]}}
A.PQ.prototype={
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
A.a5N.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae3.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MC.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uO.prototype={}
A.MJ.prototype={
adF(d,e,f){var w,v
$.al()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bc
d.iO(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.agV.prototype={}
A.agZ.prototype={}
A.ak5.prototype={}
A.akl.prototype={}
A.akm.prototype={}
A.ako.prototype={}
A.akp.prototype={}
A.alb.prototype={}
A.ala.prototype={}
A.alc.prototype={}
A.aoF.prototype={}
A.aqx.prototype={}
A.aqy.prototype={}
A.asa.prototype={}
A.asP.prototype={}
A.asO.prototype={}
A.asQ.prototype={}
A.awW.prototype={
Mp(d,e,f,g,h,i){return new B.ii(this.aVX(d,e,f,g,h,i),x.g4)},
aVW(d,e,f,g){return this.Mp(d,e,f,!0,g,!0)},
aVX(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mp(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().ajo(s,u,v,w)
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
A.Kx.prototype={
a17(){var w,v=this
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
w.a_Y(d,e,f)
w.aS5(e,f)
w.aSf(e,f)
w.aSe(e,f)},
aSe(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().Os(w.a,a1.r-a1.f)
u=$.btL().Mp(a1.w,v,a1.r,!1,a1.f,!1)
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
if(h==null)h=$.lw().Os(w.b,a1.y-a1.x)
u=$.btL().Mp(a1.z,h,a1.y,!1,a1.x,!1)
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
aS5(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aSf(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l6(new B.r(n.fc(t.a,m,e),0),new B.r(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.D.gp(0)
r.seX(p.mH(0,s))}else{r.r=(q==null?C.F:q).gp(0)
r.seX(null)}o=n.e.e_()
w.drawRect(B.dG(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.l6(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.D.gp(0)
v.seX(q.mH(0,s))}else{v.r=(r==null?C.F:r).gp(0)
v.seX(null)}o=n.e.e_()
j.drawRect(B.dG(s),o)
o.delete()}},
aSd(d,e,f){var w,v
this.a_Y(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adG(d,e,f,w)
if(v.b.length!==0)this.aSk(d,e,f,w)},
adG(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
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
n=n.gNk().b
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
s.adH(0,n,new B.r(h,o),k)}}},
aSk(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
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
n=n.gNk().b
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
s.adH(0,n,new B.r(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZZ(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Ky.prototype={
gal8(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal9(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gala(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gal6(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alu(d){var w,v=this,u=null,t=v.d,s=A.bvx(t.d),r=t.a
r=r.a&&A.bPh(r.b)?r.b:u
w=B.b([B.ba(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.awY(w)
if(v.gal8())C.b.hv(w,s.$1(!0),new A.AG(D.B5,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gala())C.b.hv(w,s.$1(!0),new A.AG(D.mA,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal9())C.b.hv(w,s.$1(!0),new A.AG(D.B6,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal6())C.b.hv(w,s.$1(!0),new A.AG(D.dJ,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
u(d){return B.iV(new A.awX(this))}}
A.Rg.prototype={
W(){return new A.XJ(new B.bh(null,x.eF))}}
A.XJ.prototype={
axQ(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fF
case 2:return C.du
case 3:return C.fe}},
ayl(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
axS(d){this.a.toString
return},
az(){this.aP()
$.cA.x1$.push(this.ga4l())},
ba(d){this.bG(d)
$.cA.x1$.push(this.ga4l())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayl()
return B.Ss(B.b14(0,B.ba(v.axQ(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.ace.prototype={
bl(d){return A.bP8(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0q.prototype={
hk(d){if(!(d.b instanceof B.hm))d.b=new B.hm(null,null,C.p)},
hW(d){if(this.B===C.ay)return this.y3(d)
return this.adj(d)},
aKU(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a95(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a94(d,B.hC())
switch(this.B.a){case 0:return d.c2(new B.H(w.a,w.b))
case 1:return d.c2(new B.H(w.b,w.a))}},
a94(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h_(u,null)
break
case 1:q=B.h_(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a95(p)
t=Math.max(t,o.aKU(p))
m=r.aG$}return new A.bez(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a94(o,B.mv()),m=n.a,l=n.b
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
q=s.b-p.a95(r==null?B.S(B.a_("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
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
this.aop()}}
A.bez.prototype={}
A.awZ.prototype={}
A.jV.prototype={
gbD(){return[this.a,this.b]}}
A.nS.prototype={}
A.agW.prototype={}
A.agX.prototype={
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
A.agY.prototype={}
A.Tb.prototype={
l(){var w,v,u
for(w=this.W4$,v=w.length,u=0;u<v;++u)w[u].l()
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
gb_D(){var w=this.d,v=A.bvx(w.d),u=A.bD6(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gai_(){var w=this.d,v=A.bD6(w.a),u=A.bvx(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd4(0)+(v.gd1(0)+v.gd4(0))
case 1:case 3:return u.geu()+v.geu()}},
aWG(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goC().c.d
if(o==null)o=$.lw().Os(d,f-e)
w=p.c
v=w!==D.mA
if((!v||w===D.dJ)&&p.d instanceof A.nT){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.buK(u,d)
w=new B.iX(t,B.ad(t).i("iX<1>"))
s=w.giC(w).eP(0,new A.aZ4(u),x.W).fZ(0)}else{r=$.btL()
w=!v||w===D.dJ
v=p.d
q=r.aVW(w?v.w:v.z,o,f,e)
v=B.op(q,new A.aZ5(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nS>")
w=B.Q(new B.ab(s,new A.aZ6(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goC()
w=j.goC()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.ba(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
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
o=j.gb_D()
n=!u||w===D.dJ?C.ay:C.Q
j.gai_()
m=j.gai_()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.ba(i,A.bWt(new A.awZ(),n,j.aWG(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B6||w===D.dJ)j.goC()
return new B.eW(t,i,i,B.bRZ(q,C.k,s,i,C.f,C.M,0,i,i,C.bx),i)}}
A.a0F.prototype={
gbD(){return[this.a,this.b]}}
A.a4T.prototype={
gbD(){return[this.a,this.b]}}
A.MQ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4V.prototype={
gabz(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.axu.prototype={}
A.aDP.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahh.prototype={}
A.aki.prototype={}
A.akj.prototype={}
A.akq.prototype={}
A.KH.prototype={
i8(d,e,f){}}
A.vy.prototype={}
A.hl.prototype={
gdN(){return null},
gafL(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MP
if(w)return!0
return!(v instanceof A.MM)&&!(v instanceof A.ML)&&!(v instanceof A.MN)&&!(v instanceof A.MK)&&!w&&!(v instanceof A.MO)}}
A.a4Z.prototype={
gdN(){return this.a.b}}
A.a5_.prototype={
gdN(){return this.a.b}}
A.a50.prototype={
gdN(){return this.a.b}}
A.ML.prototype={}
A.MM.prototype={}
A.a53.prototype={
gdN(){return this.a.b}}
A.MO.prototype={}
A.MP.prototype={
gdN(){return this.a.b}}
A.a4Y.prototype={
gdN(){return this.a.b}}
A.a4X.prototype={
gdN(){return this.a.b}}
A.MK.prototype={
gdN(){return this.a.b}}
A.a51.prototype={
gdN(){return this.a.gdN()}}
A.a52.prototype={
gdN(){return this.a.gdN()}}
A.MN.prototype={
gdN(){return this.a.gdN()}}
A.FU.prototype={
YQ(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afe(){var w=this,v=null,u=w.aj=B.bwo(v,v)
u.ay=new A.aUd(w)
u.ch=new A.aUe(w)
u.CW=new A.aUf(w)
u.cy=new A.aUg(w)
u.cx=new A.aUh(w)
u=w.aF=B.GJ(v,-1,v)
u.B=new A.aUi(w)
u.a4=new A.aUj(w)
u.U=new A.aUk(w)
u=w.bC=B.a6W(v,w.a3,v)
u.p3=new A.aUl(w)
u.p4=new A.aUm(w)
u.RG=new A.aUn(w)},
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
w.oA(d)}else if(x.gJ.b(d))v.l6(new A.a52(d))},
gMS(d){return new A.aUo(this)},
gMU(d){return new A.aUp(this)},
l6(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.ZR(w):null
u.U.$2(d,v)
u.a4=C.bp},
gKK(d){return this.a4},
gFo(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.fo(d)
this.aq=!0},
aE(d){this.aq=!1
this.fg(0)},
$ijy:1}
A.Ob.prototype={
W(){return new A.Vx(B.b([],x.r),B.y(x.S,x.J),new A.aK3(B.y(x.y,x.dj)),null,null)}}
A.Vx.prototype={
u(d){var w,v=this,u=v.a4n(),t=v.CW
t.toString
t=v.ab5(t.av(0,v.gh2().gp(0)))
w=v.ab5(u)
v.a.toString
return new A.Ky(new A.a6N(t,w,null),u,null)},
ab5(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e7>")
w=B.Q(new B.ab(w,new A.beE(this,d),v),v.i("av.E"))
return d.aQL(w,this.cy)},
a4n(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UD(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aR_(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQo(new A.EL(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaza(),t.c,t.d))}return r},
azb(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafL())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beC(v))
return}v.J(new A.beD(v,e))},
m0(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4n(),new A.beF(w)))}}
A.pK.prototype={
Xc(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4U(B.a0R(d.a.b,j.b,f),j.a)
w=A.bD3(d.at,e.at,f)
v=A.bD7(d.c,e.c,f)
u=A.bD9(d.d,e.d,f)
t=A.bF7(d.e,e.e,f)
s=A.kx(d.ch,e.ch,f,A.c4i(),x.cz)
s.toString
r=A.kx(d.CW,e.CW,f,A.c4h(),x.bO)
r.toString
u=A.bw0(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vf(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bw0(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aR_(d,e,f,g){return this.Vf(null,null,d,e,f,g,null)},
aQo(d){var w=null
return this.Vf(w,d,w,w,w,w,w)},
aQL(d,e){var w=null
return this.Vf(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e7.prototype={
ar0(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aK2())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
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
acX(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aK1(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQv(d){return this.acX(d,null)},
aQx(d){return this.acX(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Oc.prototype={
gbD(){return[this.a]}}
A.a0y.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KC.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yn.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aJS.prototype={
K(){return"LabelDirection."+this.b}}
A.a4W.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6O.prototype={
gbD(){return[4,C.hU,16,D.xF,0,120,A.c4k(),!1,!1,!1,0,C.I,A.c4j()]}}
A.n2.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qg.prototype={}
A.rt.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.tr.prototype={
gbD(){return[this.a,this.b]}}
A.Gl.prototype={
gbD(){return[this.a]}}
A.Od.prototype={}
A.z9.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.ah4.prototype={}
A.ah5.prototype={}
A.ahi.prototype={}
A.akk.prototype={}
A.akn.prototype={}
A.am0.prototype={}
A.am1.prototype={}
A.am2.prototype={}
A.am4.prototype={}
A.am5.prototype={}
A.am6.prototype={}
A.am7.prototype={}
A.aqw.prototype={}
A.as9.prototype={}
A.aK3.prototype={
UD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.zf(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.za(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aK4())}catch(p){return D.ye}v=null
try{v=C.b.qe(w.a,new A.aK5())}catch(p){return D.ye}o=v.a
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
if(f<m)m=f}e=new A.za(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.za.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.am3.prototype={}
A.aK6.prototype={
i8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabz(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jo(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aPm(new B.G(0,0,u,v))}d.a_X(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aSb(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aS7(a3,q,a4)
d.aSc(a3,q,a4)
d.alO(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.e1("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vj(q,i,j,k))}}d.aSj(a3,s,a4)
if(w.gabz(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSh(a2,a3,v,f,new A.Gl(g),a4)}},
aS7(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvw(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zq(o,e,u,f)
s=p.ajf(o,e,t,u,f)
r=p.Zs(o,e,t,u,f,!0)
q=p.aje(o,e,t,u,f)
p.aSa(d,s,p.Zp(o,e,t,u,f,!0),f,e)
p.aS4(d,q,r,f,e)
p.aS8(d,t,e)
p.aS6(d,t,e,f)}},
aSb(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bvw(a5.a),a8=A.bvw(a6.a)
if(a7.length!==a8.length)throw B.e(B.bD("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bP.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ad(n).i("cz<1>")
l=B.Q(new B.cz(n,m),m.i("av.E"))
k=a2.Zq(a3,a5,o,b2)
j=a2.Zr(a3,a6.aQx(l),l,b2,k)
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
a1=new B.mF(C.dw,C.bc,C.e4,C.ev,C.dR).e_()
n=B.dG(new B.G(0,0,t,s))
m=$.bP.b
if(m===$.bP)B.S(B.vh(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mG(j.gjs().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSc(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zw(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adF(s,q,new B.r(p,o))}}},
aSj(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fQ(b3,new A.aK9())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zw(m,w,b4)
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
f.adF(t,j,new B.r(h,g))}}},
Zr(d,e,f,g,h){var w=this.ajg(d,e,f,g,h)
return w},
Zq(d,e,f,g){return this.Zr(d,e,f,g,null)},
ajg(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.al().r,C.ad,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gq(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
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
s=new B.LD(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iz(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
Zs(d,e,f,g,h,i){var w=this,v=B.Mw(f),u=J.Y(g),t=w.fc(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.fc(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.fc(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nX())
return v},
ajf(d,e,f,g,h){return this.Zs(d,e,f,g,h,!1)},
Zp(d,e,f,g,h,i){var w=this,v=B.Mw(f),u=J.Y(g),t=w.fc(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.fc(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.fc(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nX())
return v},
aje(d,e,f,g,h){return this.Zp(d,e,f,g,h,!1)},
aSa(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bwn(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.hJ(e,r.r)},
aS4(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bwn(s,q.b,q.c,new B.G(v,0,u,t))
d.a.hJ(e,r.r)},
aS8(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.My(B.Mw(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ka:C.e4
u.e=C.ev
u.r=v.gp(0)
u.seX(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zl(C.aE,w.c*0.57735+0.5)
d.a.hJ(A.aAn(e,f.cy).e6(w.b),this.f)},
aS6(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
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
A.bwn(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bUn(t)
d.a.hJ(A.aAn(e,f.cy),s.f)},
aSh(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bJl(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e1("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().ZY(b4,u.b)
s=u.a
r=w.k(0,C.iW)?new B.kp(1):w
q=new B.tn(new B.hQ(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.cX,C.w,r,a8,a8,a8,a8,C.bw,a8)
q.ag3(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hU.geu()
k=o+(w-1)*4+(C.hU.gd1(0)+C.hU.gd4(0))
j=t-k-16
i=a7.ZZ(b3,l,D.xF,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.FI(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bJk(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().Kh(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().Kh(new B.H(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.D.gp(0)
s.c=0}b5.VS(0,new A.aK7(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bX4(q.r,q.w)
A:{if(D.E2===a5){a6=a3
break A}if(D.E3===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VS(0,new A.aK8(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
Zw(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
Wv(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajH(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fQ(t,new A.aKa())
return t.length===0?null:t},
ajH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fc(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hv(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qg(s,f,g,C.b.hu(w,v),v.a,v.b)}else return null}}
A.vj.prototype={}
A.a6N.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.aK6()
t.a17()
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
w.a=D.a_z
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
t=new A.aaZ(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YQ(v.cx)
t.afe()
return t},
by(d,e){e.sih(0,this.d)
e.sYA(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.aaZ.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYA(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0H(d.cx)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a14(t,v),new A.vy(u.aC,u.i2,u.d_,x.o))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.Od(w.fW.Wv(d,v,new A.vy(w.aC,w.i2,w.d_,x.o)))}}
A.Nf.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a14.prototype={
aPm(d){this.a.a.clipRect(B.dG(d),$.nI()[1],!0)
return null},
adN(d,e){d.aO(this.a,e)},
VS(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b8(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lw()
s.Yy(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dt(d,e,f,g){var w=new B.ck($.al().r,C.ad,null,null,B.b([],x.v))
w.ap(new B.fd(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.hJ(A.aAn(w,g),f)}}
A.zf.prototype={
gbD(){return[this.a]}}
A.ame.prototype={}
A.a1e.prototype={}
A.b1w.prototype={
Kh(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXg(d,e){var w,v,u,t,s
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
aXh(d,e){var w,v
if(d==null)return D.a_K
w=d.b
v=e/2
return d.aQA(w>v?v:w)},
Os(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_o(w)},
b_o(d){if(d<1)return this.aJo(d)
return this.a87(d)},
aJo(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a87(d*q)/q},
a87(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aR(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajw(d){if(d>=1)return 1
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
ZY(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j1
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.mj):w},
ajo(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qi)","A(ew)","~(v,fF)","F(e7,v)","T<~>()","F(F,qi)","bT(F,tq)","pA(F)","v(qg,qg)","I7(o9)","HO(C,bH)","J5(oa)","vn(@)","wk(@)","e7(F)","CI(@)","ai(F,tq)","uN(dA<uN>)","E7(dA<aEE>)","F(vn)","F(wk)","wD(C,bH)","Bc(z)","~()","qi(@)","~(hl,KE?)","xx(@)","F(io)","A(fF)","~(v,io)","~(@)","jV(nS)","c(nS)","jV(bE<v,F>)","jV(F)","nS(jV)","~(hl,Od?)","e7(e7)","lJ(Gx<lJ>)","z9(@)","T<oa>(cj<oa>)","tr(v)","uO(ew,F,e7,v)","rt(n2)","A(e7)","v(vj,vj)","F(fF)","T<o9>(cj<o9>)","v(v,v,F)","fF(fF,fF,F)","io(io,io,F)","mB(mB,mB,F)","D_?(fF,v,io,v)","D(fF)","c(F,tq)","ew(ew,ew,F)","A(F)","mX(mX,mX,F)","nn(nn,nn,F)","kS(kS,kS,F)","lf(lf,lf,F)","f(kS)","f(lf)","e7(e7,e7,F)","mC(mC,mC,F)","uO(ew,F,e7,v{size:F?})","A(ew,e7)","F(r,r)","u<tr>(e7,u<v>)","xZ(z)","u<rt>(u<n2>)","D(n2)","yl(f_<C?>)"])
A.aEA.prototype={
$1(d){var w=B.dj(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qi(J.am(v==null?"":v),A.p2(w.h(0,"revenue_net")),A.p2(w.h(0,"expense_net")),A.p2(w.h(0,"result_net")))},
$S:z+24}
A.aEB.prototype={
$1(d){var w,v,u,t=B.dj(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.p2(t.h(0,"gross"))
u=B.b0(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vn(s,r,w,v,u,A.p2(t.h(0,"avg_basket")))},
$S:z+12}
A.aEC.prototype={
$1(d){var w,v=B.dj(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b0(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wk(u,t,w,A.p2(v.h(0,"gross")))},
$S:z+13}
A.aET.prototype={
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
A.brz.prototype={
$1(d){return new A.uN(d.ao($.bZ(),x.A))},
$S:z+17}
A.brA.prototype={
$1(d){return new A.E7(d.ao($.bO0(),x.D))},
$S:z+18}
A.btm.prototype={
$1(d){return E.aED()},
$S:z+38}
A.brB.prototype={
$1(d){var w=d.ao($.xj(),x.P)
return d.ao($.avi(),x.a).FQ(w)},
$S:z+40}
A.bry.prototype={
$1(d){var w=d.ao($.xj(),x.P)
return d.ao($.avi(),x.a).FL(w)},
$S:z+47}
A.brx.prototype={
$1(d){return this.aj4(d)},
aj4(d){var w=0,v=B.q(x.h),u,t,s,r,q
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
A.aEz.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avi(),x.a).pC(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEy.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avi(),x.a).Ll(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aER.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bug()
if(s.e==null)B.S(B.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEJ.prototype={
$0(){return this.a.Ji(this.b,this.c)},
$S:0}
A.aEK.prototype={
$0(){return this.a.Bd(this.b,this.c)},
$S:0}
A.aEL.prototype={
$0(){var w=x.z
return B.bn(this.a,!1).ew(B.eP(new A.aEI(),null,w),w)},
$S:0}
A.aEI.prototype={
$1(d){return F.D1},
$S:z+69}
A.aEM.prototype={
$0(){return B.of(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEN.prototype={
$0(){var w=this
return w.a.Be(w.b,w.c,w.d)},
$S:0}
A.aEQ.prototype={
$0(){return D.at3},
$S:133}
A.aEP.prototype={
$2(d,e){return new A.HO(B.i(d),null)},
$S:z+10}
A.aEO.prototype={
$1(d){return new A.J5(d,null)},
$S:z+11}
A.aEH.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.k("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.my(B.b([B.dL(C.d7,w,w,new A.aEF(u),w,w),B.dS(F.v_,new A.aEG(u),B.dI(C.l,C.B,w,w,w,w,w))],x.p),w,v,F.v0)},
$S:53}
A.aEF.prototype={
$0(){B.bn(this.a,!1).dm(!1)
return null},
$S:0}
A.aEG.prototype={
$0(){B.bn(this.a,!1).dm(!0)
return null},
$S:0}
A.bgZ.prototype={
$0(){var w=this.a.aI(0,$.xj().ghP(),x.V),v=E.aED()
w.wz(0,v)
return v},
$S:0}
A.bh_.prototype={
$0(){var w=this.a.aI(0,$.xj().ghP(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lJ(B.bQ(B.aX(v),1,1,0,0,0,0),v)
w.wz(0,u)
return u},
$S:0}
A.bh0.prototype={
$0(){return this.a.IE(this.b,this.c)},
$S:0}
A.bgY.prototype={
$2(d,e){return new B.oK(B.V(d).aPW(B.V(d).ax.aQQ(C.j,C.l)),e,null)},
$S:1003}
A.bmP.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dx(),s=A.O_(!1,C.nS,"Umsatz 7 %",t.ar(u.a),w),r=A.O_(!1,C.nS,"Umsatz 19 %",t.ar(u.b),w),q=A.O_(!0,D.a9B,"Umsatz netto",t.ar(u.c),w),p=A.O_(!1,D.a9A,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5B(1.7,B.b([s,r,q,p,A.O_(!0,C.xU,"Ergebnis",n,o<0?C.av:C.aC),A.O_(!1,C.fO,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jS,!0)},
$S:99}
A.aJR.prototype={
$0(){return D.at1},
$S:133}
A.aJQ.prototype={
$2(d,e){var w=null
return B.bA(C.av,B.k("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.j,13,C.m),w,w,w),C.eE,w,C.E,w,3)},
$S:283}
A.aJP.prototype={
$1(d){return new A.I7(d,null)},
$S:z+9}
A.beq.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dx(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.bef(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.beg(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.beh(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.ab(g,new A.bei(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.ab(g,new A.bej(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.ab(g,new A.bek(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.ab(g,new A.bel(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.bem(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.ben(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.beo(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.ab(g,new A.bep(j),f),e)
return B.a5B(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jS,!0)},
$S:99}
A.bef.prototype={
$1(d){return d.b},
$S:z+0}
A.beg.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beh.prototype={
$1(d){return d.d},
$S:z+0}
A.bei.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bej.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bek.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bel.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bem.prototype={
$1(d){return d.d},
$S:z+0}
A.ben.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.beo.prototype={
$1(d){return this.a},
$S:z+0}
A.bep.prototype={
$1(d){return this.a},
$S:z+0}
A.ber.prototype={
$0(){return A.byk(this.b,1.45,new A.TA(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bes.prototype={
$0(){return A.byk(this.b,1.6,new A.TL(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqJ.prototype={
$1(d){var w=this,v=null,u=B.aQ(16),t=x.p,s=B.b([B.aq(B.b([B.aD(B.k(w.a,v,v,v,B.c2(C.j,18,C.q),v,v,v),1),B.fK(v,v,D.acg,v,v,new A.bqI(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.L(s,B.b([B.k(w.b,v,v,v,B.E(C.t,12,C.aI),v,v,v),C.U],t))
s.push(C.v)
s.push(B.cd(new B.mA(w.c,w.d,v),v,17976931348623157e292))
return B.a48(v,C.B,new B.ah(C.ai,B.ag(s,C.C,v,C.f,C.M),v),v,v,v,C.fL,C.uI,v,new B.d9(u,C.I),v)},
$S:1004}
A.bqI.prototype={
$0(){return B.bn(this.a,!1).fb()},
$S:0}
A.bet.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byk(this.b,2.4,new A.XU(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bmn.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bmo.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmp.prototype={
$1(d){return A.aK1(null,1.4,null,C.av,0.35,D.ag5,D.DU,null,!1,!1,!1,!1,D.Fe,!1,10,D.XW,!0,C.lx,B.b([new A.ew(0,d),new A.ew(this.a,d)],x.U))},
$S:z+14}
A.b58.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5a.prototype={
$2(d,e){var w=null
return B.k(this.a.aKJ(d),w,w,w,B.E(C.t,10,C.P),w,w,w)},
$S:z+16}
A.b5b.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.A5
return new B.ah(C.hT,B.k(C.c.cO(this.a[v].a,5),w,w,w,B.E(C.t,9,C.P),w,w,w),w)},
$S:z+6}
A.b59.prototype={
$1(d){return D.a8a},
$S:z+7}
A.b5W.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5X.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5Y.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5Z.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.A5
return new B.ah(C.hT,B.k(this.a[v],w,w,w,B.E(C.j,12,C.q),w,w,w),w)},
$S:z+6}
A.beY.prototype={
$1(d){return d.d},
$S:z+19}
A.beZ.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bo5.prototype={
$1(d){return d.d},
$S:z+20}
A.bo6.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b3E.prototype={
$0(){return D.at9},
$S:133}
A.b3D.prototype={
$2(d,e){return new A.wD("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b3C.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ag(B.b([B.k("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.j,14,C.P),m,m,m),C.U,B.k("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.t,12.5,C.m),m,m,m),C.v,B.mn(C.cD,B.b([B.i5(C.EP,D.aGw,new A.b3w(w,v),m),B.i5(D.abk,D.aFp,new A.b3x(w,v),m)],u),C.e9,8,8)],u),C.C,m,C.f,C.h),C.af,m,C.E,m,3)}w=new A.b3F(d)
t=C.b.fK(n.a.e.d,0,new A.b3y())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iV(new A.b3z(new A.b3G(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ag(B.b([w,C.U,B.aq(B.b([B.aD(B.k("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.t,11,C.m),m,m,m),1),B.oI(D.acu,D.aFL,new A.b3A(q,p),m),B.oI(D.ac5,D.aFy,new A.b3B(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.ac,m,C.f,C.h)},
$S:269}
A.b3w.prototype={
$0(){return A.auF(this.a,this.b,null)},
$S:0}
A.b3x.prototype={
$0(){return A.auC(this.a,this.b)},
$S:0}
A.b3F.prototype={
$1(d){var w=B.b0(J.a3(this.a,d))
return w==null?null:w},
$S:1005}
A.b3G.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:33}
A.b3y.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3z.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b1(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dx()
v=u.ar(v)
return B.a5B(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.jS,!0)},
$S:99}
A.b3A.prototype={
$0(){return A.auC(this.a,this.b)},
$S:0}
A.b3B.prototype={
$0(){return A.auF(this.a,this.b,this.c)},
$S:0}
A.bqH.prototype={
$1(d){return new A.Bc(this.a,new A.bqG(this.b),this.c,null)},
$S:z+22}
A.bqG.prototype={
$0(){var w=this.a,v=$.buf()
if(w.e==null)B.S(B.a_(y.b))
w.gcv().cs(v)},
$S:0}
A.b3q.prototype={
$0(){},
$S:0}
A.b3r.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3s.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3u.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.j(B.ub(u.b,B.bQ(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3t(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3t.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3v.prototype={
$0(){return B.bn(this.a,!1).fb()},
$S:0}
A.b3H.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3I.prototype={
$1(d){return new A.xx(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axf.prototype={
$1(d){return d.e},
$S:z+27}
A.axg.prototype={
$2(d,e){return d+e},
$S:45}
A.axi.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axk.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axl.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.adN(v.d,v.e)},
$S:0}
A.awY.prototype={
$1(d){return 0},
$S:1006}
A.awX.prototype={
$2(d,e){return B.fk(C.bW,this.a.alu(e),C.o,C.bv,null)},
$S:1007}
A.aZ2.prototype={
$1(d){return d.a},
$S:z+31}
A.aZ3.prototype={
$1(d){return d.b},
$S:z+32}
A.aZ4.prototype={
$1(d){return new A.jV(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZ5.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mA||v===D.dJ))t=1-t
return new A.jV(d,t*w.d)},
$S:z+34}
A.aZ6.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goC(),p=d.a
r.goC()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.ajw(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nS(d,q.c.b.$2(p,new A.tq(u+t,s.e)))},
$S:z+35}
A.aUd.prototype={
$1(d){this.a.l6(new A.a4Z(d))},
$S:200}
A.aUe.prototype={
$1(d){this.a.l6(new A.a5_(d))},
$S:40}
A.aUf.prototype={
$1(d){this.a.l6(new A.a50(d))},
$S:27}
A.aUg.prototype={
$0(){this.a.l6(D.a1g)},
$S:0}
A.aUh.prototype={
$1(d){this.a.l6(new A.MM())},
$S:43}
A.aUi.prototype={
$1(d){this.a.l6(new A.a53(d))},
$S:46}
A.aUj.prototype={
$0(){this.a.l6(D.a1h)},
$S:0}
A.aUk.prototype={
$1(d){this.a.l6(new A.MP(d))},
$S:97}
A.aUl.prototype={
$1(d){this.a.l6(new A.a4Y(d))},
$S:203}
A.aUm.prototype={
$1(d){this.a.l6(new A.a4X(d))},
$S:204}
A.aUn.prototype={
$1(d){return this.a.l6(new A.MK(d))},
$S:194}
A.aUo.prototype={
$1(d){return this.a.l6(new A.a51(d))},
$S:60}
A.aUp.prototype={
$1(d){return this.a.l6(new A.MN(d))},
$S:58}
A.beE.prototype={
$1(d){var w=this.a.db.h(0,C.b.hu(this.b.ch,d))
return d.aQv(w==null?B.b([],x.t):w)},
$S:z+37}
A.beC.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.beD.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fQ(w,new A.beB())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gl(w))},
$S:0}
A.beB.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.beF.prototype={
$1(d){return new A.z9(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aK2.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.bro.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bD8(t?A.by5(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tr(w,new A.yn(!0,A.byV(),new A.brn(v)))},
$S:z+41}
A.brn.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bRX(A.by5(d,e,f),w,A.c_Q(d,e,f))},
$S:z+42}
A.brl.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dm:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rt(C.d.j(d.b),w)},
$S:z+43}
A.aK4.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aK5.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aK9.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aK7.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aK8.prototype={
$0(){this.a.adN(this.b,this.c)},
$S:0}
A.aKa.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.ax8.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.ax9.prototype={
$2(d,e){return d+e},
$S:45}
A.axc.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ad(v).i("iX<1>")).aB(0,new A.axd(w,this.a/(u+1),this.c))},
$S:0}
A.axd.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.axa.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.axb.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aH6.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1008}
A.aAo.prototype={
$1(d){return d},
$S:1009};(function aliases(){var w=A.Kx.prototype
w.a_X=w.i8
w.alO=w.aSd
w.alP=w.adG
w=A.Tb.prototype
w.aop=w.l
w=A.KH.prototype
w.a_Y=w.i8
w=A.FU.prototype
w.a0H=w.YQ})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3n","bRU",72)
var q
v(q=A.Td.prototype,"gaEA","aEB",23)
v(q,"gaDB","HU",4)
v(q,"gaEj","I5",4)
u(A.Te.prototype,"gasi","asj",25)
t(A,"c2c",3,null,["$3"],["bPb"],49,0)
t(A,"c2d",3,null,["$3"],["bPc"],50,0)
t(A,"c2e",3,null,["$3"],["bPd"],51,0)
t(A,"c2g",4,null,["$4"],["c30"],52,0)
w(A,"c2f","c3_",53)
s(A,"byp","c31",54)
t(A,"c27",3,null,["$3"],["bRY"],55,0)
w(A,"a_1","c5s",56)
w(A,"auH","c34",7)
t(A,"c29",3,null,["$3"],["bSJ"],57,0)
t(A,"c2b",3,null,["$3"],["bXY"],58,0)
t(A,"c28",3,null,["$3"],["bSI"],59,0)
t(A,"c2a",3,null,["$3"],["bXX"],60,0)
w(A,"ccO","bSH",61)
w(A,"ccP","bXW",62)
r(A.XJ.prototype,"ga4l","axS",30)
u(A.Vx.prototype,"gaza","azb",36)
t(A,"c4i",3,null,["$3"],["bTa"],63,0)
t(A,"c4h",3,null,["$3"],["bPe"],64,0)
w(A,"c4l","c5t",1)
t(A,"bJK",4,null,["$5$size","$4"],["bI9",function(d,e,f,g){return A.bI9(d,e,f,g,null)}],65,0)
s(A,"byV","c5r",66)
s(A,"bJL","c1V",67)
s(A,"bJO","c37",68)
s(A,"bJN","c33",3)
s(A,"bJM","c32",3)
w(A,"c4k","bJl",70)
w(A,"c4j","bJk",71)
t(A,"a_7",3,null,["$3"],["c4f"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a6z,A.agc,A.all,A.IF,A.J5,A.aga,A.HO,A.I7,A.akG,A.alU,A.Um,A.XU,A.TA,A.TL,A.amn,A.aiL,A.Ca,A.as6,A.wD,A.Ky,A.AG])
u(B.C,[A.uN,A.E7,A.bf,A.ahh,A.ah7,A.ah9,A.aha,A.ah_,A.akq,A.ahd,A.ahb,A.axu,A.asa,A.axh,A.ah8,A.KH,A.a5C,A.tq,A.aqy,A.aqx,A.agZ,A.akp,A.ew,A.akm,A.ako,A.aoF,A.alc,A.asQ,A.akn,A.ak5,A.akl,A.awW,A.bez,A.awZ,A.agW,A.nS,A.aki,A.akj,A.vy,A.hl,A.am1,A.am4,A.ah4,A.ahi,A.ah5,A.akk,A.am7,A.am5,A.as9,A.aqw,A.aK3,A.am3,A.vj,A.a14,A.ame,A.a1e,A.b1w])
u(B.uL,[A.qi,A.vn,A.wk,A.azP,A.aAU,A.o9,A.CI,A.oa])
u(B.nY,[A.aEA,A.aEB,A.aEC,A.aET,A.brz,A.brA,A.btm,A.brB,A.bry,A.brx,A.aEI,A.aEO,A.aEH,A.aJP,A.bef,A.beg,A.beh,A.bei,A.bej,A.bek,A.bel,A.bem,A.ben,A.beo,A.bep,A.bqJ,A.bmp,A.b59,A.b5W,A.b5X,A.beY,A.bo5,A.b3C,A.b3F,A.b3G,A.bqH,A.b3I,A.axf,A.axi,A.awY,A.aZ2,A.aZ3,A.aZ4,A.aZ5,A.aZ6,A.aUd,A.aUe,A.aUf,A.aUh,A.aUi,A.aUk,A.aUl,A.aUm,A.aUn,A.aUo,A.aUp,A.beE,A.beF,A.aK2,A.bro,A.brn,A.brl,A.aK4,A.aK5,A.ax8,A.aAo])
t(A.yl,B.fy)
u(B.xN,[A.aEz,A.aEy,A.aER,A.aEJ,A.aEK,A.aEL,A.aEM,A.aEN,A.aEQ,A.aEF,A.aEG,A.bgZ,A.bh_,A.bh0,A.aJR,A.ber,A.bes,A.bqI,A.bet,A.b3E,A.b3w,A.b3x,A.b3A,A.b3B,A.bqG,A.b3q,A.b3r,A.b3s,A.b3u,A.b3t,A.b3v,A.b3H,A.axl,A.aUg,A.aUj,A.beC,A.beD,A.aK7,A.aK8,A.axc])
u(B.xV,[A.ym,A.anz,A.a6A,A.ah3])
u(B.xO,[A.aEP,A.bgY,A.bmP,A.aJQ,A.beq,A.bmn,A.bmo,A.b58,A.b5a,A.b5b,A.b5Y,A.b5Z,A.beZ,A.bo6,A.b3D,A.b3y,A.b3z,A.axg,A.axk,A.awX,A.beB,A.aK9,A.aKa,A.ax9,A.axd,A.axa,A.axb,A.aH6])
u(B.N,[A.Bc,A.Rg])
u(B.a0,[A.Td,A.XJ])
u(B.Nw,[A.KD,A.Ob])
u(B.uj,[A.Te,A.Vx])
t(A.a0F,A.ahh)
t(A.agV,A.a0F)
t(A.a0p,A.agV)
u(A.a0p,[A.ah6,A.am2])
t(A.nT,A.ah6)
u(B.HN,[A.ax6,A.adF,A.CZ,A.aDP,A.aJS,A.Nf])
t(A.fF,A.ah7)
t(A.io,A.ah9)
t(A.mB,A.aha)
t(A.a0w,A.ah_)
t(A.MQ,A.akq)
u(A.MQ,[A.ahc,A.am6])
t(A.a0B,A.ahc)
t(A.a0C,A.ahd)
t(A.D_,A.ahb)
u(A.axu,[A.KE,A.Od])
t(A.adH,A.asa)
t(A.ahe,A.adH)
t(A.a0D,A.ahe)
u(B.b7,[A.xx,A.z9])
t(A.up,A.ah8)
t(A.Kx,A.KH)
u(A.Kx,[A.axj,A.aK6])
u(B.O7,[A.a0z,A.a6N])
u(B.J,[A.FU,A.agX])
u(A.FU,[A.aaM,A.aaZ])
t(A.q7,A.aqy)
t(A.acd,A.aqx)
t(A.pd,A.agZ)
t(A.uP,A.akp)
t(A.yo,A.akm)
t(A.pA,A.ako)
t(A.PQ,A.aoF)
t(A.mX,A.alc)
t(A.nn,A.asQ)
u(A.pA,[A.alb,A.asP])
t(A.kS,A.alb)
t(A.lf,A.asP)
t(A.a4W,A.akn)
u(A.a4W,[A.ala,A.asO])
t(A.a5N,A.ala)
t(A.ae3,A.asO)
t(A.MC,A.ak5)
t(A.uO,A.akl)
t(A.MJ,A.uO)
t(A.ace,B.h5)
t(A.agY,A.agX)
t(A.Tb,A.agY)
t(A.a0q,A.Tb)
t(A.jV,A.agW)
t(A.a4T,A.aki)
t(A.a4V,A.akj)
u(A.hl,[A.a4Z,A.a5_,A.a50,A.ML,A.MM,A.a53,A.MO,A.MP,A.a4Y,A.a4X,A.MK,A.a51,A.a52,A.MN])
t(A.pK,A.am2)
t(A.e7,A.am1)
t(A.Oc,A.am4)
t(A.a0y,A.ah4)
t(A.mC,A.ahi)
t(A.KC,A.ah5)
t(A.yn,A.akk)
t(A.EL,A.am6)
t(A.a6O,A.am7)
t(A.am0,A.ew)
t(A.n2,A.am0)
t(A.qg,A.n2)
t(A.rt,A.am5)
t(A.tr,A.as9)
t(A.Gl,A.aqw)
t(A.za,A.am3)
t(A.zf,A.ame)
w(A.ah_,A.bf)
w(A.ah6,A.bf)
w(A.ah7,A.bf)
w(A.ah9,A.bf)
w(A.aha,A.bf)
w(A.ahb,A.bf)
w(A.ahc,A.bf)
w(A.ahd,A.bf)
w(A.ahe,A.bf)
w(A.ah8,A.bf)
w(A.agV,A.bf)
w(A.agZ,A.bf)
w(A.ak5,A.bf)
w(A.akl,A.bf)
w(A.akm,A.bf)
w(A.ako,A.bf)
w(A.akp,A.bf)
w(A.alb,A.bf)
w(A.ala,A.bf)
w(A.alc,A.bf)
w(A.aoF,A.bf)
w(A.aqx,A.bf)
w(A.aqy,A.bf)
w(A.asa,A.bf)
w(A.asP,A.bf)
w(A.asO,A.bf)
w(A.asQ,A.bf)
w(A.agW,A.bf)
v(A.agX,B.aA)
w(A.agY,B.e3)
v(A.Tb,B.a3S)
w(A.ahh,A.bf)
w(A.aki,A.bf)
w(A.akj,A.bf)
w(A.akq,A.bf)
w(A.ah4,A.bf)
w(A.ah5,A.bf)
w(A.ahi,A.bf)
w(A.akk,A.bf)
w(A.akn,A.bf)
w(A.am0,A.bf)
w(A.am1,A.bf)
w(A.am2,A.bf)
w(A.am4,A.bf)
w(A.am5,A.bf)
w(A.am6,A.bf)
w(A.am7,A.bf)
w(A.aqw,A.bf)
w(A.as9,A.bf)
w(A.am3,A.bf)
w(A.ame,A.bf)})()
B.boj(b.typeUniverse,JSON.parse('{"a6z":{"W":[],"c":[]},"E7":{"aEE":[]},"yl":{"fy":["bb<~>"],"fy.T":"bb<~>"},"J5":{"W":[],"c":[]},"HO":{"W":[],"c":[]},"ym":{"bj":[],"N":[],"c":[]},"agc":{"W":[],"c":[]},"all":{"W":[],"c":[]},"anz":{"bj":[],"N":[],"c":[]},"IF":{"W":[],"c":[]},"aga":{"W":[],"c":[]},"I7":{"W":[],"c":[]},"wD":{"W":[],"c":[]},"Bc":{"N":[],"c":[]},"a6A":{"bj":[],"N":[],"c":[]},"akG":{"W":[],"c":[]},"alU":{"W":[],"c":[]},"Um":{"W":[],"c":[]},"XU":{"W":[],"c":[]},"TA":{"W":[],"c":[]},"TL":{"W":[],"c":[]},"amn":{"W":[],"c":[]},"aiL":{"W":[],"c":[]},"Ca":{"W":[],"c":[]},"as6":{"W":[],"c":[]},"ah3":{"bj":[],"N":[],"c":[]},"Td":{"a0":["Bc"]},"KD":{"N":[],"c":[]},"Te":{"a0":["KD"]},"nT":{"bf":[]},"fF":{"bf":[]},"io":{"bf":[]},"mB":{"bf":[]},"D_":{"bf":[]},"xx":{"b7":["nT"],"b4":["nT"],"b4.T":"nT","b7.T":"nT"},"a0w":{"bf":[]},"a0B":{"bf":[]},"a0C":{"bf":[]},"a0D":{"bf":[]},"up":{"bf":[]},"a0z":{"aV":[],"c":[]},"aaM":{"J":[],"L":[],"jy":[],"aS":[]},"pA":{"bf":[]},"mX":{"bf":[]},"nn":{"bf":[]},"kS":{"bf":[]},"lf":{"bf":[]},"uO":{"bf":[]},"a0p":{"bf":[]},"q7":{"bf":[]},"acd":{"bf":[]},"pd":{"bf":[]},"uP":{"bf":[]},"yo":{"bf":[]},"adH":{"bf":[]},"PQ":{"bf":[]},"a5N":{"bf":[]},"ae3":{"bf":[]},"MC":{"bf":[]},"MJ":{"bf":[]},"Ky":{"W":[],"c":[]},"Rg":{"N":[],"c":[]},"XJ":{"a0":["Rg"]},"jV":{"bf":[]},"ace":{"h5":[],"aV":[],"c":[]},"a0q":{"e3":["J","hm"],"J":[],"aA":["J","hm"],"L":[],"aS":[],"aA.1":"hm","e3.1":"hm","aA.0":"J"},"AG":{"W":[],"c":[]},"a0F":{"bf":[]},"a4T":{"bf":[]},"MQ":{"bf":[]},"a4V":{"bf":[]},"a4Z":{"hl":[]},"a5_":{"hl":[]},"a50":{"hl":[]},"ML":{"hl":[]},"MM":{"hl":[]},"a53":{"hl":[]},"MO":{"hl":[]},"MP":{"hl":[]},"a4Y":{"hl":[]},"a4X":{"hl":[]},"MK":{"hl":[]},"a51":{"hl":[]},"a52":{"hl":[]},"MN":{"hl":[]},"FU":{"J":[],"L":[],"jy":[],"aS":[]},"Ob":{"N":[],"c":[]},"Vx":{"a0":["Ob"]},"pK":{"bf":[]},"e7":{"bf":[]},"mC":{"bf":[]},"n2":{"ew":[],"bf":[]},"qg":{"n2":[],"ew":[],"bf":[]},"rt":{"bf":[]},"tr":{"bf":[]},"Gl":{"bf":[]},"z9":{"b7":["pK"],"b4":["pK"],"b4.T":"pK","b7.T":"pK"},"Oc":{"bf":[]},"a0y":{"bf":[]},"KC":{"bf":[]},"yn":{"bf":[]},"a4W":{"bf":[]},"EL":{"bf":[]},"a6O":{"bf":[]},"za":{"bf":[]},"a6N":{"aV":[],"c":[]},"aaZ":{"J":[],"L":[],"jy":[],"aS":[]},"zf":{"bf":[]}}'))
B.bHD(b.typeUniverse,JSON.parse('{"Kx":1,"MQ":1,"KH":1,"FU":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.at
return{_:w("CI"),e:w("bb<o9>"),aN:w("bb<oa>"),fM:w("bb<a2<f,@>?>"),b:w("bb<~>"),W:w("jV"),B:w("nT"),dB:w("fF"),gF:w("up"),fj:w("io"),G:w("mB"),bO:w("mC"),k:w("au"),C:w("a1e<F>"),dO:w("uw"),R:w("a4<f,@>"),g:w("hG"),bz:w("lE<b9>"),f0:w("o2"),E:w("bf"),F:w("yl"),X:w("o9"),P:w("lJ"),D:w("uN"),a:w("aEE"),d:w("oa"),cw:w("ew"),L:w("hm"),m:w("di<v,D>"),cm:w("kS"),dv:w("mX"),M:w("B<nS>"),I:w("B<bBK>"),O:w("B<fF>"),Y:w("B<io>"),U:w("B<ew>"),K:w("B<a5C>"),u:w("B<e7>"),bC:w("B<vj>"),aA:w("B<u<ew>>"),v:w("B<e9>"),r:w("B<Gl>"),s:w("B<f>"),eg:w("B<tn>"),df:w("B<qg>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bh<a0<N>>"),Z:w("n2"),cz:w("e7"),hf:w("pK"),dj:w("za"),fT:w("rt"),c_:w("ir<oX<bb<~>>>"),x:w("zf<fF>"),y:w("zf<e7>"),J:w("u<v>"),ef:w("vn"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k6"),aU:w("C"),Q:w("vy<nT>"),o:w("vy<pK>"),dc:w("e9"),eo:w("pX"),gJ:w("pY"),V:w("nh<lJ>"),N:w("f"),A:w("ni"),bP:w("bI"),er:w("tn"),j:w("wk"),dw:w("qg"),bY:w("tr"),cZ:w("qi"),gc:w("ig"),es:w("lf"),bN:w("nn"),l:w("c"),q:w("wW"),g4:w("ii<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xx?"),f3:w("z9?"),T:w("u<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("C?"),aD:w("ig?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AZ=new B.p7(C.l,B.at("p7<D>"))
D.B5=new A.CZ(0,"left")
D.mA=new A.CZ(1,"top")
D.B6=new A.CZ(2,"right")
D.dJ=new A.CZ(3,"bottom")
D.awW=new A.q7(!1,A.byp(),22,null)
D.kt=new A.pd(16,null,D.awW,!0)
D.a8b=new A.pA(C.D,null,2,null)
D.vQ=new A.KC(!1,D.a8b,A.c4l(),!0)
D.a_q=new A.ax6(3,"spaceEvenly")
D.a_z=new B.xB(6,"dstIn")
D.Xc=new B.aT(3,3)
D.B9=new B.d5(D.Xc,D.Xc,C.a2,C.a2)
D.a_K=new B.bl(C.D,0,C.V,-1)
D.BJ=new A.a4V()
D.a1g=new A.ML()
D.a1h=new A.MO()
D.aO6=new A.acd()
D.al1=w([],B.at("B<kS>"))
D.al2=w([],B.at("B<lf>"))
D.DQ=new A.MC(D.al1,D.al2,!0)
D.a7W=new B.ep("Zeitraum",!1,null)
D.a8_=new B.ep("Konten (SKR 03)",!1,null)
D.xF=new A.aDP(0,"center")
D.aOj=new A.yn(!0,A.byV(),A.bJK())
D.DU=new A.yn(!1,A.byV(),A.bJK())
D.DV=new A.yo(!1,!0,null,A.auH(),A.a_1(),!0,null,A.auH(),A.a_1())
D.aOk=new A.yo(!0,!0,null,A.auH(),A.a_1(),!0,null,A.auH(),A.a_1())
D.a3y=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3k=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a3I=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a3C=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a35=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a34=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a41=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a3s=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a44=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a3Z=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.ar5=new B.di([50,D.a3y,100,D.a3k,200,D.a3I,300,D.a3C,400,D.a35,500,D.a34,600,D.a41,700,D.a3s,800,D.a44,900,D.a3Z],x.m)
D.dm=new B.rB(D.ar5,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ah7=w([8,4],x.t)
D.a89=new A.pA(D.dm,null,0.4,D.ah7)
D.a8a=new A.pA(C.am,null,0.5,null)
D.fM=new A.ew(0/0,0/0)
D.awY=new A.q7(!0,A.byp(),44,null)
D.mB=new A.pd(16,null,D.awY,!0)
D.awX=new A.q7(!0,A.byp(),30,null)
D.mC=new A.pd(16,null,D.awX,!0)
D.a8c=new A.uP(!1,D.mB,D.mC,D.mB,D.mC)
D.aOl=new A.uP(!0,D.mB,D.mC,D.mB,D.mC)
D.E2=new A.Nf(0,"left")
D.a8N=new A.Nf(1,"center")
D.E3=new A.Nf(2,"right")
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
D.acd=new B.aK(C.ED,16,null,null,null)
D.acg=new B.aK(C.i_,null,C.j,null,null)
D.aaw=new B.a8(62584,"MaterialIcons",null,!1)
D.aco=new B.aK(D.aaw,16,null,null,null)
D.acu=new B.aK(D.xX,16,null,null,null)
D.a93=new B.a8(57912,"MaterialIcons",null,!1)
D.acy=new B.aK(D.a93,null,C.av,null,null)
D.aew=new A.a6A(null)
D.aOq=new A.aJS(0,"horizontal")
D.ye=new A.za(0,0,0,0,!1)
D.Fe=new A.Oc(0.5)
D.BP=new A.a6O()
D.aeA=new A.EL(D.BP,A.bJO(),10,A.bJL(),!0,A.bJN(),A.bJM(),!1,null,null,null)
D.aOs=new A.EL(D.BP,A.bJO(),10,A.bJL(),!0,A.bJN(),A.bJM(),!0,null,null,null)
D.ag5=w([4,3],x.t)
D.avc=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.av2=new B.aG("receivables","Forderungen (kurzfristig)")
D.auS=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.auQ=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auG=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.auL=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.av9=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.av1=new B.aG("equity","Eigenkapital")
D.pq=w([D.avc,D.av2,D.auS,D.auQ,D.auG,D.auL,D.av9,D.av1],B.at("B<+(f,f)>"))
D.aOv=w([],x.M)
D.akO=w([],x.O)
D.akP=w([],x.Y)
D.akQ=w([],B.at("B<mB>"))
D.akR=w([],B.at("B<mC>"))
D.aOw=w([],x.U)
D.aOx=w([],x.u)
D.akS=w([],x.r)
D.arH={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SN={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.a4(D.SN,[0,0,0,0,0,0,0,C.cc],B.at("a4<f,C>"))
D.arF={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ar_=new B.a4(D.arF,[0,0,0,0],B.at("a4<f,v>"))
D.arW={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoC=new B.a4(D.arW,[0,0,0,0,null,null,null,null],B.at("a4<f,v?>"))
D.aox=new B.a4(D.arH,[D.yT,D.yT,D.yT,C.cc,C.cc,C.cc,D.ar_,D.aoC],x.R)
D.aoN=new B.a4(D.SN,[0,0,0,0,0,0,0,C.cA],x.R)
D.arI={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoP=new B.a4(D.arI,[8500,1200,3400,300,22e3,4200,9000,22200],B.at("a4<f,F>"))
D.arE={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ar0=new B.a4(D.arE,[0,0,0,0,0,0,0,C.cA],x.R)
D.as6={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar1=new B.a4(D.as6,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.at("a4<f,f>"))
D.a49=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4h=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a38=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a3u=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a3E=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a4u=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a2U=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a3w=new B.D(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a3H=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a4_=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.ar6=new B.di([50,D.a49,100,D.a4h,200,D.a38,300,D.a3u,400,D.a3E,500,D.a4u,600,D.a2U,700,D.a3w,800,D.a3H,900,D.a4_],x.m)
D.SC=new B.rB(D.ar6,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a7o=new B.ak(32,32,32,32)
D.at1=new B.ah(D.a7o,C.bC,null)
D.a7q=new B.ak(48,48,48,48)
D.at3=new B.ah(D.a7q,C.bC,null)
D.at9=new B.ah(C.ai,C.bC,null)
D.al3=w([],B.at("B<mX>"))
D.al4=w([],B.at("B<nn>"))
D.Xd=new A.PQ(D.al3,D.al4)
D.avV=new B.fv("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avW=new B.fv("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avZ=new B.fv("Automaten-Business","Umsatz je Automat",null,null)
D.aw0=new B.fv("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aw2=new B.fv("Top","Meistverkaufte Produkte",null,null)
D.aw6=new B.fv("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aw7=new B.fv("Kennzahlen","Rentabilit\xe4t",null,null)
D.XW=new B.t7(C.F,C.p,0)
D.aEn=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayx=new B.dV(D.aEn,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGk=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayA=new B.dV(D.aGk,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aEy=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayB=new B.dV(D.aEy,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGe=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayD=new B.dV(D.aGe,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFI=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayE=new B.dV(D.aFI,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFF=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayY=new B.dV(D.aFF,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aOH=new B.P(!0,C.D,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEw=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEH=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFp=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFy=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFL=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGw=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Z9=new A.adF(0,"auto")
D.aH2=new A.adF(1,"top")
D.aLj=new A.wD("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLk=new A.wD("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdf","bO0",()=>B.iZ(new A.brz(),x.D))
w($,"cdg","avi",()=>B.iZ(new A.brA(),x.a))
w($,"cec","xj",()=>B.bx4(new A.btm(),x.P))
w($,"cdh","bug",()=>C.aH.$1$1(new A.brB(),x.d))
w($,"cde","bO_",()=>C.aH.$1$1(new A.bry(),x.X))
w($,"cdd","buf",()=>C.aH.$1$1(new A.brx(),x.h))
w($,"cdc","bue",()=>B.aZT(A.c3n(),x.F,x.b))
w($,"c6d","btL",()=>new A.awW())
v($,"c9w","lw",()=>new A.b1w())})()};
(a=>{a["JwMPr+FWvVU+zDdndd33LUqSPTk="]=a.current})($__dart_deferred_initializers__);