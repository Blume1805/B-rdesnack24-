((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O8(d,e,f,g,h){return new A.a6N(f,g,d,h,e,null)},
a6N:function a6N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uR:function uR(d){this.a=d},
Eg:function Eg(d){this.a=d},
bSD(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.X(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Sx
w=x.f
v=x.N
u=x.z
t=A.aFd(B.dl(w.a(e.h(a0,"current")),v,u))
s=A.aFd(B.dl(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFd(B.dl(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cY(p,new A.aEW(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cY(o,new A.aEX(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cY(q,new A.aEY(),x.j)
q=B.Q(q,q.$ti.i("au.E"))
n=B.dl(w.a(e.h(a0,"customer")),v,u)
m=B.b1(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.p5(n.h(0,"app_gross"))
k=B.b1(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.p5(n.h(0,"avg_basket"))
u=B.dl(w.a(e.h(a0,"derived")),v,u)
v=A.p5(u.h(0,"gross_margin_pct"))
e=A.p5(u.h(0,"net_margin_pct"))
w=A.p5(u.h(0,"ebitda_margin_pct"))
j=A.p5(u.h(0,"cashflow_operating"))
i=A.bro(u.h(0,"revenue_growth_yoy_pct"))
h=A.bro(u.h(0,"revenue_growth_mom_pct"))
g=A.bro(u.h(0,"result_growth_yoy_pct"))
u=A.bro(u.h(0,"result_growth_mom_pct"))
f=B.b1(J.a3(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.ob(t,s,r,p,o,q,new A.aAa(m,l,k,n),new A.aBf(v,e,w,j,i,h,g,u),f)},
p5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iZ(J.am(d))
return w==null?0:w},
bro(d){if(d==null)return null
if(typeof d=="number")return d
return B.iZ(J.am(d))},
qn:function qn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vr:function vr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wo:function wo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAa:function aAa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBf:function aBf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ob:function ob(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEW:function aEW(){},
aEX:function aEX(){},
aEY:function aEY(){},
aFd(d){var w=J.X(d),v=A.ua(w.h(d,"revenue_net_7")),u=A.ua(w.h(d,"revenue_net_19")),t=A.ua(w.h(d,"revenue_net")),s=A.ua(w.h(d,"expense_net")),r=A.ua(w.h(d,"result_net")),q=A.ua(w.h(d,"vat_collected")),p=A.ua(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cY(w,new A.aFe(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.oc(v,u,t,s,r,q,p,w)},
ua(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iZ(J.am(d))
return w==null?0:w},
CQ:function CQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oc:function oc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFe:function aFe(){},
bSC(d){return new A.yq(d,new B.is(x.c_),C.dJ)},
bs9:function bs9(){},
bsa:function bsa(){},
btY:function btY(){},
bsb:function bsb(){},
bs8:function bs8(){},
bs7:function bs7(){},
yq:function yq(d,e,f){this.r=d
this.a=e
this.f=f},
aEV:function aEV(d,e,f){this.a=d
this.b=e
this.c=f},
aEU:function aEU(d,e,f){this.a=d
this.b=e
this.c=f},
bSE(){return new A.yr(null)},
alB(d,e,f,g,h){return new A.alA(e,h,g,f,d,null)},
yr:function yr(d){this.a=d},
aFc:function aFc(d){this.a=d},
aF4:function aF4(d,e,f){this.a=d
this.b=e
this.c=f},
aF5:function aF5(d,e,f){this.a=d
this.b=e
this.c=f},
aF6:function aF6(d){this.a=d},
aF3:function aF3(){},
aF7:function aF7(d){this.a=d},
aF8:function aF8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFb:function aFb(){},
aFa:function aFa(){},
aF9:function aF9(){},
aF2:function aF2(d,e){this.a=d
this.b=e},
aF0:function aF0(d){this.a=d},
aF1:function aF1(d){this.a=d},
ago:function ago(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alA:function alA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anP:function anP(d,e){this.e=d
this.a=e},
bhx:function bhx(d){this.a=d},
bhy:function bhy(d){this.a=d},
bhz:function bhz(d,e,f){this.a=d
this.b=e
this.c=f},
bhw:function bhw(){},
IN:function IN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jd:function Jd(d,e){this.c=d
this.a=e},
bnp:function bnp(d){this.a=d},
agm:function agm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HW:function HW(d,e){this.c=d
this.a=e},
bz1(d,e,f,g,h){var w=null
return B.jS(w,w,!0,w,new A.brj(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.am8(g,n,i,e,d,m,f,k,l,j,null)},
auS(d,e){return A.c2a(d,e)},
c2a(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auS=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bj(D.ayR)
t=4
o=e.aI(0,$.bZ(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.hx("finance-balance-sync",B.y(n,n)),$async$auS)
case 7:r=g
q=B.dl(x.f.a(r.a),x.N,n)
l.WQ()
if(J.e(J.a3(q,"configured"),!1)){l.bj(D.ayV)
w=1
break}if(J.e(J.a3(q,"ok"),!0)){o=$.buV()
if(e.e==null)B.T(B.a_(y.b))
e.gcv().cs(o)
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.WQ()
l.bj(B.c9(null,null,null,null,null,C.o,null,B.k("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auS,v)},
auV(d,e,f){var w=0,v=B.q(x.H)
var $async$auV=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.jS(null,null,!0,null,new A.brh(f,e,e.aI(0,$.bZ(),x.A)),d,null,!0,!0,x.H),$async$auV)
case 2:return B.o(null,v)}})
return B.p($async$auV,v)},
a6O:function a6O(d){this.a=d},
aKc:function aKc(){},
aKb:function aKb(){},
aKa:function aKa(){},
If:function If(d,e){this.c=d
this.a=e},
beQ:function beQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beF:function beF(){},
beG:function beG(){},
beH:function beH(){},
beI:function beI(){},
beJ:function beJ(){},
beK:function beK(){},
beL:function beL(){},
beM:function beM(){},
beN:function beN(d){this.a=d},
beO:function beO(d){this.a=d},
beP:function beP(d){this.a=d},
beR:function beR(d,e){this.a=d
this.b=e},
beS:function beS(d,e){this.a=d
this.b=e},
brj:function brj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bri:function bri(d){this.a=d},
akU:function akU(d){this.a=d},
am8:function am8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
beT:function beT(d,e){this.a=d
this.b=e},
Uz:function Uz(d,e,f){this.c=d
this.d=e
this.a=f},
Y6:function Y6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmY:function bmY(){},
bmZ:function bmZ(){},
bn_:function bn_(d){this.a=d},
TN:function TN(d,e,f){this.c=d
this.d=e
this.a=f},
b5y:function b5y(){},
b5A:function b5A(d){this.a=d},
b5B:function b5B(d){this.a=d},
b5z:function b5z(){},
TY:function TY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6l:function b6l(){},
b6m:function b6m(){},
b6n:function b6n(){},
b6o:function b6o(d){this.a=d},
amC:function amC(d,e){this.c=d
this.a=e},
bfn:function bfn(){},
bfo:function bfo(){},
aiZ:function aiZ(d,e){this.c=d
this.a=e},
Ci:function Ci(d,e,f){this.c=d
this.d=e
this.a=f},
asm:function asm(d,e){this.c=d
this.a=e},
boG:function boG(){},
boH:function boH(){},
wI:function wI(d,e){this.c=d
this.a=e},
ahh:function ahh(d,e){this.e=d
this.a=e},
b43:function b43(){},
b42:function b42(){},
b41:function b41(d,e,f){this.a=d
this.b=e
this.c=f},
b3W:function b3W(d,e){this.a=d
this.b=e},
b3X:function b3X(d,e){this.a=d
this.b=e},
b44:function b44(d){this.a=d},
b45:function b45(d){this.a=d},
b3Y:function b3Y(){},
b3Z:function b3Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4_:function b4_(d,e){this.a=d
this.b=e},
b40:function b40(d,e,f){this.a=d
this.b=e
this.c=f},
brh:function brh(d,e,f){this.a=d
this.b=e
this.c=f},
brg:function brg(d){this.a=d},
Bj:function Bj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tq:function Tq(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3Q:function b3Q(){},
b3R:function b3R(d){this.a=d},
b3S:function b3S(d){this.a=d},
b3U:function b3U(d,e){this.a=d
this.b=e},
b3T:function b3T(d,e){this.a=d
this.b=e},
b3V:function b3V(d){this.a=d},
bf:function bf(){},
bCw(d){return new A.KL(d,C.au,C.dB,null,null)},
KL:function KL(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tr:function Tr(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eM$=f
_.cu$=g
_.c=_.a=null},
b46:function b46(d,e){this.a=d
this.b=e},
b47:function b47(d){this.a=d},
axt(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.al2:f,p=a0==null?16:a0,o=d==null?D.a_u:d,n=g==null,m=n?A.bvr(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xh:a3
n=n?A.bvr(r,r,r,r,r,r,r,r):g
w=j==null?D.DR:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.nV(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BK,s,w,i,n)},
axA(d,e,f,g,h){var w=d==null?D.al3:d,v=e==null?2:e,u=g==null?C.lx:g
return new A.fH(h,f===!0,w,v,u)},
bPU(d,e,f){var w=d.a
w=C.d.aR(w+(e.a-w)*f)
return A.axA(A.kx(d.c,e.c,f,A.c2W(),x.fj),B.ac(d.d,e.d,f),!1,A.kx(d.e,e.e,f,A.a_k(),x.S),w)},
a0P(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SG
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aXy(f,v?8:m)
t=t.aXz(g,v?8:m)
v=d==null?A.bCu(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.al4:k)},
bPV(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mG(d.f,e.f,f),p=A.kx(d.r,e.r,f,A.a_k(),x.S),o=B.bW(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a0P(A.bCu(v,u,null,!1,t),p,q,o,s,n,null,A.kx(d.y,e.y,f,A.c2X(),x.G),m,r)},
bPW(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mE(u,w,v,B.bW(d.d,e.d,f))},
bCu(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dn
else w=d
return new A.a0L(g===!0,v,u,w,f)},
bvr(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0R(4,C.hU,16,D.xF,0,120,A.c2Z(),!1,!1,D.Zd,0,C.I,A.c2Y())
else w=k
v=j==null?C.l0:j
return new A.a0Q(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3J(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D7(C.d.j(f.b),v)},
c3I(d){return A.azz(D.dn,15)},
nV:function nV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axs:function axs(d,e){this.a=d
this.b=e},
fH:function fH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axB:function axB(){},
axC:function axC(){},
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
mE:function mE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0L:function a0L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0Q:function a0Q(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adS:function adS(d,e){this.a=d
this.b=e},
a0R:function a0R(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D7:function D7(d,e){this.a=d
this.b=e},
KM:function KM(d){this.a=d},
a0S:function a0S(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xC:function xC(d,e){this.a=d
this.b=e},
ahd:function ahd(){},
ahk:function ahk(){},
ahl:function ahl(){},
ahn:function ahn(){},
aho:function aho(){},
ahp:function ahp(){},
ahq:function ahq(){},
ahr:function ahr(){},
ahs:function ahs(){},
axD:function axD(d){this.a=d},
axE:function axE(){},
uu:function uu(d,e,f){this.a=d
this.b=e
this.c=f},
ahm:function ahm(){},
axF:function axF(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axG:function axG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axH:function axH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5Q:function a5Q(d){this.b=d},
a0O:function a0O(d,e,f){this.d=d
this.e=e
this.a=f},
ab_:function ab_(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
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
c3K(d,e){var w=null
return new A.Rq(e.w,B.k(e.r,w,w,w,w,w,w,w),w)},
axl(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pg(t,e.b,new A.qc(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bDT(d,e,f){var w=A.axl(d.b,e.b,f),v=A.axl(d.d,e.d,f),u=A.axl(d.e,e.e,f)
return new A.uT(e.a,w,A.axl(d.c,e.c,f),v,u)},
bSG(d,e,f){var w,v
if(d.k(0,D.fN))return e
if(e.k(0,D.fN))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ex(w,v)},
bDR(d,e,f){return new A.yt(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c6a(d){return!0},
c3N(d){return D.a8m},
bDS(d,e,f,g){var w
if(d==null)w=f==null?C.D:null
else w=d
return new A.pE(w,f,g,e)},
bFR(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c2S(),x.dv)
v.toString
w=A.kx(d.b,e.b,f,A.c2U(),x.bN)
w.toString
return new A.Q_(v,w)},
bTr(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.mZ(t,w,v,u)},
bYG(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nr(t,w,v,u)},
bTq(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bTo(B.bvi(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_k(),x.S)
if(u==null)u=v==null?C.D:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
bYF(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bYD(B.bvi(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_k(),x.S)
if(u==null)u=v==null?C.D:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bTo(d,e,f,g,h,i){return new A.a60(f,!1,g,i,d,e)},
bTp(d){return C.d.ak(d.e,1)},
bYD(d,e,f,g,h,i){return new A.aef(f,!1,g,i,d,e)},
bYE(d){return C.d.ak(d.e,1)},
bDN(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c2R(),x.cm)
v.toString
w=A.kx(d.b,e.b,f,A.c2T(),x.es)
w.toString
return new A.ML(v,w,!0)},
bSF(d,e,f){return new A.MS(d,e==null?4:e,f)},
a0E:function a0E(){},
D6:function D6(d,e){this.a=d
this.b=e},
tu:function tu(d,e){this.r=d
this.w=e},
qc:function qc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acr:function acr(){},
pg:function pg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uT:function uT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ex:function ex(d,e){this.a=d
this.b=e},
yt:function yt(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pE:function pE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adU:function adU(){},
Q_:function Q_(d,e){this.a=d
this.b=e},
mZ:function mZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nr:function nr(d,e,f,g){var _=this
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
a60:function a60(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aef:function aef(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ML:function ML(d,e,f){this.a=d
this.b=e
this.c=f},
uS:function uS(){},
MS:function MS(d,e,f){this.a=d
this.b=e
this.c=f},
ah8:function ah8(){},
ahc:function ahc(){},
akj:function akj(){},
akz:function akz(){},
akA:function akA(){},
akC:function akC(){},
akD:function akD(){},
alq:function alq(){},
alp:function alp(){},
alr:function alr(){},
aoV:function aoV(){},
aqN:function aqN(){},
aqO:function aqO(){},
asq:function asq(){},
at4:function at4(){},
at3:function at3(){},
at5:function at5(){},
axh:function axh(){},
KF:function KF(){},
KG:function KG(d,e,f){this.c=d
this.d=e
this.a=f},
axj:function axj(d){this.a=d},
axi:function axi(d){this.a=d},
Rq:function Rq(d,e,f){this.c=d
this.e=e
this.a=f},
XW:function XW(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bXb(d,e,f){var w=B.ad(f),v=w.i("ab<1,jV>")
v=B.Q(new B.ab(f,new A.aZp(),v),v.i("au.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZq(),w),w.i("au.E"))
return new A.acs(e,d,v,w,null)},
bPR(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6E(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tr(v,C.ao,C.w,new B.kp(1),v,v,v,v,C.bw,v)
u=new A.a0F(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.g))
u.bk()
return u},
acs:function acs(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZp:function aZp(){},
aZq:function aZq(){},
a0F:function a0F(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.W9$=h
_.aTj$=i
_.dk$=j
_.af$=k
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
beZ:function beZ(d,e){this.a=d
this.b=e},
axk:function axk(){},
jV:function jV(d,e){this.a=d
this.b=e},
nU:function nU(d,e){this.a=d
this.b=e},
ah9:function ah9(){},
aha:function aha(){},
ahb:function ahb(){},
To:function To(){},
AN:function AN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZr:function aZr(d){this.a=d},
aZs:function aZs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZt:function aZt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a57(d,e){var w=d==null?B.cT(C.D,1):d
return new A.a56(e!==!1,w)},
a0U:function a0U(){},
a56:function a56(d,e){this.a=d
this.b=e},
MZ:function MZ(){},
a58:function a58(){},
axQ:function axQ(){},
aEa:function aEa(d,e){this.a=d
this.b=e},
ahv:function ahv(){},
akw:function akw(){},
akx:function akx(){},
akE:function akE(){},
KP:function KP(){},
vC:function vC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hm:function hm(){},
a5c:function a5c(d){this.a=d},
a5d:function a5d(d){this.a=d},
a5e:function a5e(d){this.a=d},
MU:function MU(){},
MV:function MV(){},
a5h:function a5h(d){this.a=d},
MX:function MX(){},
MY:function MY(d){this.a=d},
a5b:function a5b(d){this.a=d},
a5a:function a5a(d){this.a=d},
MT:function MT(d){this.a=d},
a5f:function a5f(d){this.a=d},
a5g:function a5g(d){this.a=d},
MW:function MW(d){this.a=d},
G1:function G1(){},
aUA:function aUA(d){this.a=d},
aUB:function aUB(d){this.a=d},
aUC:function aUC(d){this.a=d},
aUD:function aUD(d){this.a=d},
aUE:function aUE(d){this.a=d},
aUF:function aUF(d){this.a=d},
aUG:function aUG(d){this.a=d},
aUH:function aUH(d){this.a=d},
aUI:function aUI(d){this.a=d},
aUJ:function aUJ(d){this.a=d},
aUK:function aUK(d){this.a=d},
aUL:function aUL(d){this.a=d},
aUM:function aUM(d){this.a=d},
Ok:function Ok(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VK:function VK(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eM$=g
_.cu$=h
_.c=_.a=null},
bf3:function bf3(d,e){this.a=d
this.b=e},
bf1:function bf1(d){this.a=d},
bf2:function bf2(d,e){this.a=d
this.b=e},
bf0:function bf0(){},
bf4:function bf4(d){this.a=d},
bwH(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pP(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SG:u
else w=g
v=f==null?A.axr(!1,u,0,u,!1,D.vQ):f
w=new A.e8(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axr(!1,u,0,u,!1,D.vQ):d,j,a0,i,s,!1,p)
w.ard(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bCv(d.ay,e.ay,f)
v=A.bCv(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kx(d.cy,e.cy,f,A.a_k(),x.S)
r=B.Z(d.r,e.r,f)
q=B.rk(d.w,e.w,f)
p=A.kx(d.a,e.a,f,A.c2Q(),x.cw)
p.toString
o=B.bGn(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKn(v,m,w,r,e.z,s,new A.ys(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ol(n),!1,u,o,!0,e.cx,p)},
axr(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aR(127.5),D.dn.A()>>>16&255,D.dn.A()>>>8&255,D.dn.A()&255):null
else w=e
return new A.a0N(h,w,g,i,f,!1)},
bCv(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.rk(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bDS(t,A.kx(v.d,u.d,f,A.a_k(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.rk(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axr(!1,s,v,u,e.a,new A.KK(!1,r,w.c,!0))},
bPX(d,e,f){var w=B.Z(d.c,e.c,f),v=B.rk(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aR(127.5),D.dn.A()>>>16&255,D.dn.A()>>>8&255,D.dn.A()&255):null
return new A.mF(e.a,e.b,w,v)},
c6b(d){return!0},
byN(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iX)return A.bzB(w.a,A.bwn(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dn:w},
c0y(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iX)w=A.bzB(v.a,A.bwn(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dn}return A.azz(w,40)},
bIS(d,e,f,g,h){var w,v=A.byN(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iX)w=A.bzB(u.a,A.bwn(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dn}u=A.azz(w,40)
return new A.MS(v,h==null?4:h,u)},
c69(d,e){return!0},
c2D(d,e){return Math.abs(d.a-e.a)},
c3Q(d,e){var w=J.cY(e,new A.brZ(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c3M(d,e){return-1/0},
c3L(d,e){return d.a[e].b},
bK3(d){var w=J.cY(d,new A.brW(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bK2(d){return A.azz(D.dn,15)},
pP:function pP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e8:function e8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aKo:function aKo(){},
Ol:function Ol(d){this.a=d},
a0N:function a0N(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mF:function mF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KK:function KK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ys:function ys(d,e,f){this.a=d
this.b=e
this.c=f},
aKd:function aKd(d,e){this.a=d
this.b=e},
a59:function a59(){},
ET:function ET(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brZ:function brZ(d){this.a=d},
brY:function brY(d){this.a=d},
a71:function a71(){},
brW:function brW(){},
n4:function n4(){},
ql:function ql(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
ry:function ry(d,e){this.a=d
this.b=e},
tv:function tv(d,e){this.a=d
this.b=e},
Gt:function Gt(d){this.a=d},
Om:function Om(d){this.a=d},
zf:function zf(d,e){this.a=d
this.b=e},
ahi:function ahi(){},
ahj:function ahj(){},
ahw:function ahw(){},
aky:function aky(){},
akB:function akB(){},
amf:function amf(){},
amg:function amg(){},
amh:function amh(){},
amj:function amj(){},
amk:function amk(){},
aml:function aml(){},
amm:function amm(){},
aqM:function aqM(){},
asp:function asp(){},
aKp:function aKp(d){this.a=d},
aKq:function aKq(){},
aKr:function aKr(){},
zg:function zg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ami:function ami(){},
aKs:function aKs(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKv:function aKv(){},
aKt:function aKt(d,e,f){this.a=d
this.b=e
this.c=f},
aKu:function aKu(d,e,f){this.a=d
this.b=e
this.c=f},
aKw:function aKw(){},
vn:function vn(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a70:function a70(d,e,f){this.d=d
this.e=e
this.a=f},
abc:function abc(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
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
bvq(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.axu(),m.i("ab<1,F>")).kn(0,new A.axv()),k=e-l,j=new A.axy(k,d,n)
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
new B.iY(o,m.i("iY<1>")).aB(0,new A.axw(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iY(o,m.i("iY<1>")).aB(0,new A.axx(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axu:function axu(){},
axv:function axv(){},
axy:function axy(d,e,f){this.a=d
this.b=e
this.c=f},
axz:function axz(d,e,f){this.a=d
this.b=e
this.c=f},
axw:function axw(d,e,f){this.a=d
this.b=e
this.c=f},
axx:function axx(d,e,f){this.a=d
this.b=e
this.c=f},
bwn(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iY(w,B.ad(w).i("iY<1>")).aB(0,new A.aHs(v,d))
else throw B.d(B.bD('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHs:function aHs(d,e){this.a=d
this.b=e},
aAJ(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAK(),w),w.i("au.E"))
return A.c3E(d,new A.a1s(v,x.C))}else return d},
aAK:function aAK(){},
bXN(d,e){var w=!0
if(d!==C.f9)if(!(d===C.ao&&e===C.w))w=d===C.iy&&e===C.aY
if(w)return D.E4
else{w=!0
if(d!==C.ix)if(!(d===C.iy&&e===C.w))w=d===C.ao&&e===C.aY
if(w)return D.E5
else return D.a90}},
No:function No(d,e){this.a=d
this.b=e},
a1i:function a1i(d,e){this.a=d
this.b=e},
zl:function zl(d,e){this.a=d
this.$ti=e},
amt:function amt(){},
c3E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.al(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.ad,k,k,h)
for(j=B.MF(d),w=B.b([],x.I),v=new B.MH(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.T(B.fw('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MG(v,r)
v.D2()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.D2()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ek(B.b([],i),!0,s)
p=new B.K5(new B.cl(t,p,k,new B.aph([q,o,o+m,!0]),l),C.q,k)
h.push(p)
l=g.f
if(l!=null)p.iA(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1s:function a1s(d,e){this.a=d
this.b=0
this.$ti=e},
b1U:function b1U(){},
bwc(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fN))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bQ_(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azz(d,e){var w=1-e/100
return B.aD(d.gfH(d),C.d.aR(d.gNG()*w),C.d.aR(d.gFZ()*w),C.d.aR(d.gKc()*w))},
bDQ(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
bwd(d){var w=d.a,v=w?A.aZo(d.b):0,u=w?A.aZo(d.c):0,t=w?A.aZo(d.d):0
return new B.ak(v,u,t,w?A.aZo(d.e):0)},
bV5(d){var w
if(d.c===0){d.seY(null)
w=B.c0(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bx2(d,e,f,g){var w
if(f!=null){d.r=C.D.gp(0)
d.seY(f.mI(0,g))}else{w=e==null?C.F:e
d.r=w.gp(w)
d.seY(null)}},
aZo(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kx(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4Y(d,e,f){return C.d.aR(d+(e-d)*f)},
bzB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a6N.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.B
r=r?C.l:C.am
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.cr(t.x,C.l,s,18),C.b1],w))
v.push(B.aB(new B.eq(t.c,!1,s),1))
v=B.aq(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.U,B.k(t.d,1,C.ah,s,B.c_(u==null?C.j:u,22,C.Q),s,s,s)],w)
return B.bA(r,B.ag(w,C.C,s,C.ik,C.h),q,s,C.ai,s,3)}}
A.uR.prototype={
Lx(d){return this.aTi(d)},
aTi(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lx=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eA("finance_summary",B.a5(["p_from",E.rg(d.a),"p_to",E.rg(d.b)],s,r),r),$async$Lx)
case 3:q=f
if(q==null){u=D.ap4
w=1
break}if(x.f.b(q)){u=B.dl(q,s,r)
w=1
break}u=D.ari
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lx,v)},
Lw(d){return this.aTh(d)},
aTh(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lw=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eA("finance_kpis",B.a5(["p_from",E.rg(d.a),"p_to",E.rg(d.b)],s,r),r),$async$Lw)
case 3:q=f
if(x.f.b(q)){u=B.dl(q,s,r)
w=1
break}u=D.aoN
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)},
pD(d){return this.aqV(d)},
aqV(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hx("sevdesk-sync",B.a5(["from",E.rg(d.a),"to",E.rg(d.b)],s,s)),$async$pD)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a1(B.fE(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pD,v)},
Ls(d){return this.aT8(d)},
aT8(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Ls=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hx("finance-export-pdf",B.a5(["from",E.rg(d.a),"to",E.rg(d.b)],s,s)),$async$Ls)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.d(B.e1("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Ls,v)}}
A.Eg.prototype={
FT(d){return this.ak1(d)},
ak1(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FT=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lx(d),$async$FT)
case 7:q=f
o=A.aFd(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hw(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FT,v)},
FO(d){return this.ajN(d)},
ajN(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lw(d),$async$FO)
case 7:q=f
o=A.bSD(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hw(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FO,v)},
pD(d){return this.aqW(d)},
aqW(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pD=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.pD(d),$async$pD)
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
p=r.Hw(q)
throw B.d(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pD,v)},
Lr(d){return this.aT7(d)},
aT7(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lr=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Ls(d),$async$Lr)
case 7:q=f
o=C.iS.cE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hw(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lr,v)},
Hw(d){if(d instanceof B.yn)return d
if(d instanceof B.l5){if(d.b==="42501")return new B.vG(d.a)
return new B.ta(d.a)}if(d instanceof B.Nc)return new B.ta("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bb("Unerwarteter Fehler: "+B.i(d))},
$iaF_:1}
A.qn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vr.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wo.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAa.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBf.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ob.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CQ.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oc.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yq.prototype={
GP(d){return this.aqU(0)},
aqU(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GP=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se7(0,C.dw)
s=t.r
r=s.aI(0,$.xo(),x.P)
p.a=null
w=3
return B.j(B.pf(new A.aEV(p,t,r),x.H),$async$GP)
case 3:t.se7(0,f)
q=t.f
if(q.ghq(q)==null){q=$.buW()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GP,v)},
Lq(){return this.aT6()},
aT6(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lq=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se7(0,C.dw)
s=t.r.aI(0,$.xo(),x.P)
q.a=null
w=3
return B.j(B.pf(new A.aEU(q,t,s),x.H),$async$Lq)
case 3:t.se7(0,e)
r=t.f
u=r.ghq(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lq,v)}}
A.yr.prototype={
ds(d,e){var w=null,v=e.an($.xo(),x.P),u=e.an($.buW(),x.aN)
return B.iw(B.dM(B.b([new B.fx("Finanzen","Dashboard",new A.ago(e.an($.buU(),x.b).giU(),new A.aF4(this,d,e),new A.aF5(this,d,e),new A.aF6(d),new A.aF7(d),new A.aF8(this,d,e,v),w),w),C.aP,new A.anP(v,w),C.bU,D.aeL,C.bU,B.dv(u,new A.aF9(),new A.aFa(),new A.aFb(),!1,!0,!1,x.d,x.l)],x.p),C.cK,w,C.R,!1),C.l,new A.aFc(e))},
Jm(d,e){return this.aLF(d,e)},
aLF(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jm=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.buU()
w=3
return B.j(e.aI(0,s.ghP(),x.F).GP(0),$async$Jm)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghq(s)
t=d.P(x.q).f
t.bj(B.c9(null,null,null,null,null,C.o,null,B.k(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jm,v)},
Bf(d,e){return this.ax3(d,e)},
ax3(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bf=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.aI(0,$.buU().ghP(),x.F).Lq(),$async$Bf)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bj(D.ayX)
w=1
break}t=B.q6(C.q,10)
w=4
return B.j($.bMc().tZ(s,"finanzauswertung.pdf",t,null,null,null),$async$Bf)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bf,v)},
Bg(d,e,f){return this.aJf(d,e,f)},
aJf(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bg=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.jS(null,null,!0,null,new A.aF2(f,d),d,null,!0,!0,x.cJ),$async$Bg)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nO(e.aI(0,$.bZ(),x.A))
p=f.a
o=f.b
n=$.dQ()
m=n.ar(p)
n=n.ar(o)
w=8
return B.j(r.zv("finance_period",p,o,B.a5(["period_from",p.eh()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bg)
case 8:if(d.e!=null)d.P(x.q).f.bj(F.uS)
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
return B.p($async$Bg,v)}}
A.ago.prototype={
u(d){var w=this,v=null,u=A.alB(C.l,F.i1,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alB(v,D.aaN,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alB(v,D.xX,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alB(C.av,C.jg,C.av,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.b1,t,C.b1,r,C.b1,q,C.b1,A.alB(C.aD,C.fP,C.aD,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.L,0,v,v)}}
A.alA.prototype={
u(d){var w,v=this,u=null,t=B.aQ(12),s=B.aQ(12),r=B.aQ(12),q=v.w
if(q==null)q=C.am
q=B.cT(q,1)
w=v.r
if(w==null)w=C.j
return B.H4(B.dN(!1,C.a_,!0,t,B.eP(!1,s,!0,B.ba(u,B.cr(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.af,0,u,u,u,u,u,C.bu),u,v.d,u,u)}}
A.anP.prototype={
ds(d,e){var w=null,v=this.e,u=$.dQ(),t=x.p
return B.bA(w,B.ag(B.b([D.a88,C.U,B.aq(B.b([D.abg,C.aT,B.aB(B.k(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.j,16,C.Q),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.v,B.mo(C.cE,B.b([new A.IN("Monat",new A.bhx(e),w,w),new A.IN("Jahr (YTD)",new A.bhy(e),w,w),new A.IN("Zeitraum w\xe4hlen \u2026",new A.bhz(this,d,e),D.a9R,w)],t),C.e9,6,8)],t),C.C,w,C.f,C.h),w,w,C.E,w,3)},
II(d,e){return this.aI9(d,e)},
aI9(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$II=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.avb(new A.bhw(),d,B.bR(B.aX(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bR(B.aX(t)+1,1,1,0,0,0,0),C.ep),$async$II)
case 2:r=g
if(r!=null)e.aI(0,$.xo().ghP(),x.V).wz(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$II,v)}}
A.IN.prototype={
u(d){var w=null,v=B.aQ(9999),u=B.aQ(9999),t=B.aQ(9999),s=B.cT(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.cr(p,C.j,w,14),C.b1],r))
q.push(B.k(this.c,w,w,w,B.E(C.j,13,C.Q),w,w,w))
return B.dN(!1,C.a_,!0,v,B.eP(!1,u,!0,B.ba(w,B.aq(q,C.k,w,C.f,C.L,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.af,0,w,w,w,w,w,C.bu)}}
A.Jd.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iW(new A.bnp(this)),C.bU,D.a8c,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.aq(B.b([D.acb,C.aH,B.aB(B.k("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.t,14,C.m),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.af,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.L(w,B.b([new A.agm(t.a,t.b,t.c==="revenue",t.d,s),C.U],r))}q.push(B.ag(w,C.k,s,C.f,C.h))}return B.ag(q,C.ac,s,C.f,C.h)}}
A.agm.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.af,s=B.cT(u?C.l:C.am,1),r=B.aQ(4),q=w.c
r=B.ba(C.W,B.k(C.c.a0(q,0,1),v,v,v,B.c_(C.j,14,C.p),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.k(q+" \xb7 "+w.d,1,C.ah,v,B.E(C.j,14,C.Q),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aB(B.ag(B.b([q,B.k(t,v,v,v,B.E(C.t,12,C.m),v,v,v)],s),C.C,v,C.f,C.h),1)
q=$.dz().ar(w.f)
return B.bA(v,B.aq(B.b([r,C.aH,t,B.k(q,v,v,v,B.E(u?C.aD:C.j,15,C.Q),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eK,v,3)}}
A.HW.prototype={
u(d){var w=null
return B.bA(C.av,B.aq(B.b([D.acN,C.aH,B.aB(B.k(this.c,w,w,w,B.E(C.j,14,C.m),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eF,w,C.E,w,3)}}
A.a6O.prototype={
ds(d,e){return B.dv(e.an($.bOH(),x.e),new A.aKa(),new A.aKb(),new A.aKc(),!1,!0,!1,x.X,x.l)}}
A.If.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awr,C.v,B.iW(new A.beQ(v,q,100-t.w.a,w,p)),C.v,new A.akU(u),C.aP,D.awq,C.v,new A.ahh(t,u),C.aP,D.awk,C.v,B.by(u,!0,u,B.mY(u,B.bA(u,new A.TN(t,220,u),u,u,C.E,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beR(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.awe,C.v,B.by(u,!0,u,B.mY(u,new A.TY(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beS(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.awi,C.v,new A.amC(t,u),C.aP,D.awf,C.v,new A.aiZ(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aP,D.awm,C.v,new A.asm(t,u)],s))
return B.ag(r,C.ac,u,C.f,C.h)}}
A.akU.prototype={
u(d){var w=null
return B.k("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.t,11,C.m).ej(1.35),w,w,w)}}
A.am8.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cC(m.d,"-")?C.av:C.aD
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.beT(m,d):l
r=x.p
q=B.b([B.aB(B.k(m.c.toUpperCase(),l,l,l,B.E(C.t,10,C.p).fU(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cT(C.hM,0.8)
n=B.aQ(4)
q.push(B.ba(l,B.k("Ziel "+p,l,l,l,B.E(C.av,9,C.p),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nl,l,l,l))}q=B.b([B.aq(q,C.k,l,C.f,C.h,0,l,l),C.b9,B.bwb(C.dv,B.k(m.d,l,l,l,B.c_(w,22,C.p),l,l,l),C.mF)],r)
p=m.e
if(p!=null)q.push(B.k(p,2,C.ah,l,B.E(C.t,10,C.aJ),l,l,l))
q.push(C.cW)
q.push(B.aq(B.b([new A.Uz("Vormonat",m.r,l),C.cV,new A.Uz("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.cW)
q.push(B.aB(new A.Y6(v,m.y,m.z,l),1))
return B.by(l,u,l,B.mY(l,B.bA(l,B.ag(q,C.C,l,C.f,C.h),l,l,C.dC,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.Uz.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aQ(4)
return B.ba(r,B.k(this.c+" \u2014",r,r,r,B.E(C.t,9,C.p),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nl,r,r,r)}w=q>=0
v=w?C.aD:C.av
u=v.fE(0.12)
t=B.cT(v,0.7)
s=B.aQ(4)
return B.ba(r,B.aq(B.b([B.cr(w?F.a95:D.a94,v,r,10),F.ayz,B.k(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.E(v,9,C.p),r,r,r)],x.p),C.k,r,C.f,C.L,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nl,r,r,r)}}
A.Y6.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ex(v,j[v]))
u=C.b.kn(j,new A.bmY())
t=C.b.kn(j,new A.bmZ())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bn_(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a57(k,!1)
w=B.b([A.aKn(k,2,A.axr(!1,C.l.fE(0.16),0,k,!0,D.vQ),C.l,0.35,k,D.DV,k,!0,!1,!0,!1,D.Fg,!1,10,D.Y_,!0,C.lx,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Ok(A.bwH(k,k,k,D.al5,l,D.BK,D.DR,D.DW,w,D.aeQ,k,m,k,n,D.Xh,D.al6,D.a8p),C.au,C.ag,k,k)}}
A.TN.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLI
w=C.b.fK(p,0,new A.b5y())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axA(B.b([A.a0P(q,q,D.Ba,q,C.l,q,q,q,r.b,6),A.a0P(q,q,D.Ba,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.cd(A.bCw(A.axt(q,q,u,q,q,A.a57(q,!1),q,new A.yt(!0,!0,q,new A.b5z(),A.a_e(),!1,q,A.auX(),A.a_e()),q,v,q,q,new A.uT(!0,new A.pg(16,q,new A.qc(!0,new A.b5A(this),46,q),!0),D.ku,D.ku,new A.pg(16,q,new A.qc(!0,new A.b5B(p),26,q),!0)))),this.d,q)},
aKW(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.TY.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6l(),w),x.i)
C.b.L(o,new B.ab(u,new A.b6m(),w))
t=C.b.fK(o,0,new A.b6n())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axA(B.b([A.a0P(q,q,q,q,C.l,q,q,q,v[s],14),A.a0P(q,q,q,q,C.aD,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cd(A.bCw(A.axt(q,q,n,q,q,A.a57(q,!1),q,D.DW,q,o,q,q,new A.uT(!0,D.ku,D.ku,D.ku,new A.pg(16,q,new A.qc(!0,new A.b6o(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.E,q,3)}}
A.amC.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aLH
w=new B.ab(k,new A.bfn(),B.ad(k).i("ab<1,F>")).kn(0,new A.bfo())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
q=B.k(r.b,m,m,m,new B.P(!0,C.j,m,l,C.bH,m,14,C.p,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dz()
o=p.ar(r.f)
q=B.ag(B.b([q,B.k(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.t,m,l,C.bH,m,12,C.aJ,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h)
o=r.d
p=p.ar(o)
n=new B.aT(4,4)
o=B.b([new B.ix(C.ay,C.f,C.h,C.k,m,C.bx,m,0,B.b([new B.mT(1,C.eL,q,m),C.aT,B.k(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.bH,m,16,C.p,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cW,new B.Dx(new B.d5(n,n,n,n),C.bK,B.On(C.am,8,C.d.bS(o/w,0,1),D.B_),m)],v)
q=C.b.gae(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_i(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.L(u,o)}return B.bA(m,B.ag(u,C.k,m,C.f,C.h),m,m,C.E,m,3)}}
A.aiZ.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aB(new A.Ci("Aktive Kunden",""+s,u),1)
w=B.aB(new A.Ci("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.bA(u,B.aq(B.b([s,w,B.aB(new A.Ci("\xd8-Warenkorb",v.ar(t.d),u),1),B.aB(new A.Ci("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.E,u,3)}}
A.Ci.prototype={
u(d){var w=null
return B.ag(B.b([B.k(this.c.toUpperCase(),w,w,w,B.E(C.t,10,C.p).fU(0.6),w,w,w),C.bV,B.k(this.d,w,w,w,B.c_(C.j,20,C.p),w,w,w)],x.p),C.C,w,C.f,C.L)}}
A.asm.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.boG(),B.ad(m).i("ab<1,F>")).kn(0,new A.boH()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.I)(m),++v){u=m[v]
t=B.k(u.b,1,C.ah,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.k(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.t,o,n,C.bH,o,12,C.Q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dz().ar(r)
p=new B.aT(4,4)
r=B.b([new B.ix(C.ay,C.f,C.h,C.k,o,C.bx,o,0,B.b([new B.mT(1,C.eL,t,o),s,B.k(q,o,o,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b9,new B.Dx(new B.d5(p,p,p,p),C.bK,B.On(C.am,6,C.d.bS(r/l,0,1),D.B_),o)],k)
t=C.b.gae(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_i(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.U)
C.b.L(j,r)}return B.bA(o,B.ag(j,C.k,o,C.f,C.h),o,o,C.E,o,3)}}
A.wI.prototype={
u(d){var w=null
return B.bA(w,B.k(this.c,w,w,w,B.E(C.t,13,C.m),w,w,w),C.af,w,C.E,w,3)}}
A.ahh.prototype={
ds(d,e){return B.dv(e.an($.buV(),x.fM),new A.b41(this,d,e),new A.b42(),new A.b43(),!1,!0,!1,x.h,x.l)}}
A.Bj.prototype={
W(){return new A.Tq()},
aYe(){return this.d.$0()}}
A.Tq.prototype={
av(){var w,v,u,t,s,r,q=this
q.aN()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ft(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bP)
for(t=0;t<8;++t){s=D.pr[t].a
if(v)r=""
else{r=B.b1(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b2(r,".",",")}u.m(0,s,new B.bI(new B.cR(r,C.bI,C.aQ),$.ai()))}q.e!==$&&B.b_()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cc(v,v.r,v.e,B.l(v).i("cc<2>"))
while(v.t()){w=v.d
w.R$=$.ai()
w.S$=0}this.ao()},
ro(d){var w=this.e
w===$&&B.a()
w=C.c.bf(w.h(0,d).a.a)
w=B.b2(w,".","")
w=B.iZ(B.b2(w,",","."))
return w==null?0:w},
a4_(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pr[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b2(s,".",",")
t.lL(0,t.a.xV(C.aQ,C.bI,s))}}this.J(new A.b3Q())},
aEO(){this.a4_(D.ap6)
this.c.P(x.q).f.bj(D.azh)},
HY(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HY=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b0(a1)
for(e=0;e<8;++e)a2.E(0,D.pr[e].a)
q=a2
t=4
w=7
return B.j($.aEO.cc().ze(B.b(["csv","txt"],x.s),C.xI,!0),$async$HY)
case 7:p=a5
a2=p
o=a2==null?null:J.K1(a2.a).c
if(o==null){w=1
break}n=C.az.ado(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BP.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.avI(l,B.bN("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.bf(J.a3(k,0)).toLowerCase()
i=J.CL(q,j)?j:D.arj.h(0,j)
if(i==null)continue
d=C.c.bf(C.b.n1(J.bPp(k,1)))
d=B.b2(d,"\u20ac","")
d=B.b2(d," ","")
d=B.b2(d,".","")
h=B.b2(d,",",".")
g=B.iZ(h)
if(g!=null)J.fo(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bj(D.ayU)
w=1
break}r.a4_(m)
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
return B.p($async$HY,v)},
I9(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I9=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3R(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_J("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eh(),0,10),"p_cash_and_bank",q.ro("cash_and_bank"),"p_receivables",q.ro("receivables"),"p_inventory_value",q.ro("inventory_value"),"p_other_current_assets",q.ro("other_current_assets"),"p_fixed_assets",q.ro("fixed_assets"),"p_current_liabilities",q.ro("current_liabilities"),"p_long_term_liabilities",q.ro("long_term_liabilities"),"p_equity",q.ro("equity")],x.N,x.aU))
w=7
return B.j(n,$async$I9)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYe()
o=q.c
o.toString
B.bo(o,!1).fc()
q.c.P(x.q).f.bj(D.ayY)
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
if(q.c!=null)q.J(new A.b3S(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I9,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.k("Bilanzwerte erfassen",r,r,r,B.c_(C.j,18,C.p),r,r,r),p=s.f?r:new A.b3U(s,d),o=s.d
o===$&&B.a()
p=B.i8(D.aby,B.k("Stichtag: "+C.c.a0(o.eh(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aB(B.i8(D.acD,D.aF0,o?r:s.gaDO(),r),1)
v=x.p
w=B.b([p,C.U,B.aq(B.b([w,C.aT,B.aB(B.i8(D.acs,D.aEQ,o?r:s.gaEN(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pr[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.eT(r,C.aS,!1,r,!0,C.o,r,B.f6(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aU,r,r,r,r,r,C.iz,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ao,r,C.a3,r,r,r,r),C.U],v))}w.push(B.k("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.t,11,C.m),r,r,r))
p=B.cd(B.f1(B.ag(w,C.ac,r,C.f,C.L),r,r,r,C.R),r,380)
o=s.f
w=B.dF(C.d7,r,r,o?r:new A.b3V(d),r,r)
o=o?r:s.gaEw()
t=B.dK(C.l,C.B,r,r,r,r,r)
return B.mB(B.b([w,B.dJ(s.f?F.Yw:C.ey,o,t)],v),C.B,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_i(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.e3(B.K(this))^B.bKA(this.gbD()))>>>0},
j(d){B.bDL()
return B.K(this).j(0)}}
A.KL.prototype={
W(){return new A.Tr(B.y(x.S,x.J),new A.axD(B.y(x.x,x.gF)),null,null)}}
A.Tr.prototype={
u(d){var w,v=this,u=v.a1V(),t=v.CW
t.toString
t=v.a1W(t.aw(0,v.gh2().gp(0)))
w=v.a1W(u)
v.a.toString
return new A.KG(new A.a0O(t,w,null),u,null)},
a1W(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axA(s.c,s.d,!1,r,s.a))}return d.aQ7(w)},
a1V(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UI(t.ch)
if(r)s=w.a
r=t.y
t=t.aR3(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQ8(A.bvr(!1,!0,!0,v.d,v.c,u.gasu(),v.f,v.e))}return t},
asv(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafU()||e==null||e.a==null){w=v.cy
v.J(w.gaPv(w))
return}v.J(new A.b46(v,e))},
m1(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1V(),new A.b47(w)))}}
A.nV.prototype={
Vj(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axt(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aR3(d,e){return this.Vj(null,null,d,e)},
aQ8(d){return this.Vj(null,d,null,null)},
aQ7(d){return this.Vj(d,null,null,null)},
Xh(d,e,f){var w,v,u,t=A.kx(d.ch,e.ch,f,A.c2V(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bDT(d.d,e.d,f),q=A.bFR(d.e,e.e,f),p=A.bDR(d.c,e.c,f),o=e.a
o=A.a57(B.a15(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axt(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bDN(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axs.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fH.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axB(),B.ad(v).i("ab<1,F>")).kn(0,new A.axC())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mE.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0L.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0Q.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adS.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0R.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D7.prototype={
gbD(){return[this.a,this.b,C.cB,C.w,null]}}
A.KM.prototype={}
A.a0S.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xC.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ahd.prototype={}
A.ahk.prototype={}
A.ahl.prototype={}
A.ahn.prototype={}
A.aho.prototype={}
A.ahp.prototype={}
A.ahq.prototype={}
A.ahr.prototype={}
A.ahs.prototype={}
A.axD.prototype={
UI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uu(0,0,!1)
v=new A.zl(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uu(t,u,!0)}w=null
try{w=C.b.qi(d,new A.axE())}catch(s){return new A.uu(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uu(q,r,!1)
u.m(0,v,j)
return j}}
A.uu.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahm.prototype={}
A.axF.prototype={
i9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a02(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acn(t,A.bvq(w,t.a),u)
l.y=u
l.aSp(e,u,f)
l.am_(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSy(d,e,m,t,r,s,n,o,f)}}},
acn(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.d(B.e1("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iY(p,B.ad(p).i("iY<1>")).aB(0,new A.axG(t,q,r,s))
w.push(new A.a5Q(q))}return w},
aSp(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
a4=B.PW(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.PW(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gp(0)
k.seY(null)
a6=b2.f.e0()
v.drawRRect(B.mz(a4),a6)
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
v.clipRect(B.dI(b1),$.nK()[1],!0)
a6=b2.f.e0()
v.drawRRect(B.mz(a4),a6)
a6.delete()
v.restore()
b2.aSw(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.al()
k=B.b([],s)
k.push(new B.hf(a4))
n=A.aAJ(new B.cl(n.r,C.ad,null,null,k),o.r)
a6=b2.r.e0()
k=n.e
v.drawPath((k==null?n.e=new B.mJ(n.gjs().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSy(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B0(a5,a5,a5,a5,B.df(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().a_3(a8,a7.b),a7.a),C.cB,C.w,a5,b6.c,C.bw)
w.agc(b1.f)
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
if(v!==D.aHq)j=v===D.Zd&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_4(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aT(s,s)
e=B.FQ(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lw().Km(new B.H(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.Km(new B.H(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaim()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VX(d,new A.axH(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSw(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.PW(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aT(i.z,i.Q)
p=v?C.a2:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a2
q=B.PW(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a2)}else q=B.bxo(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
WA(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acn(b2,A.bvq(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0S(d,q,a0,o,a2,a1,new A.ex(d.a,v),new B.r(n,t))}}return null}}
A.a5Q.prototype={}
A.a0O.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.axF()
t.a1d()
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
t=new A.ab_(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YV(v.cy)
t.afn()
return t},
by(d,e){e.sij(0,this.d)
e.sYF(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.ab_.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYF(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0N(d.cy)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aP(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i9(w,new A.a1i(t,v),new A.vC(u.aC,u.i3,u.d_,x.Q))
s.restore()},
ZX(d){var w=this,v=w.gC(0)
return new A.KM(w.fW.WA(d,v,new A.vC(w.aC,w.i3,w.d_,x.Q)))}}
A.a0E.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D6.prototype={
K(){return"AxisSide."+this.b}}
A.tu.prototype={}
A.qc.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acr.prototype={
gbD(){return[!1,0,0,0]}}
A.pg.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uT.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ex.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ex))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yt.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pE.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adU.prototype={
gbD(){return[this.a,this.b]}}
A.Q_.prototype={
gbD(){return[this.a,this.b]}}
A.mZ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nr.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kS.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a60.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aef.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ML.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uS.prototype={}
A.MS.prototype={
adO(d,e,f){var w,v
$.al()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bc
d.iO(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ah8.prototype={}
A.ahc.prototype={}
A.akj.prototype={}
A.akz.prototype={}
A.akA.prototype={}
A.akC.prototype={}
A.akD.prototype={}
A.alq.prototype={}
A.alp.prototype={}
A.alr.prototype={}
A.aoV.prototype={}
A.aqN.prototype={}
A.aqO.prototype={}
A.asq.prototype={}
A.at4.prototype={}
A.at3.prototype={}
A.at5.prototype={}
A.axh.prototype={
Mv(d,e,f,g,h,i){return new B.im(this.aWe(d,e,f,g,h,i),x.g4)},
aWd(d,e,f,g){return this.Mv(d,e,f,!0,g,!0)},
aWe(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mv(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().ajz(s,u,v,w)
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
A.KF.prototype={
a1d(){var w,v=this
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
i9(d,e,f){var w=this
w.a03(d,e,f)
w.aSl(e,f)
w.aSv(e,f)
w.aSu(e,f)},
aSu(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().Oy(w.a,a1.r-a1.f)
u=$.bur().Mv(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l6(n,m)
if(j!=null){p.r=C.D.gp(0)
p.seY(j.mI(0,i))}else{if(k==null)k=C.F
p.r=k.gp(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c0(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dw(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lw().Oy(w.b,a1.y-a1.x)
u=$.bur().Mv(a1.z,h,a1.y,!1,a1.x,!1)
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
q.seY(k.mI(0,i))}else{if(p==null)p=C.F
q.r=p.gp(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c0(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dw(n,m,d.a,f.d)}},
aSl(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aSv(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l6(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.D.gp(0)
r.seY(p.mI(0,s))}else{r.r=(q==null?C.F:q).gp(0)
r.seY(null)}o=n.e.e0()
w.drawRect(B.dI(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.l6(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.D.gp(0)
v.seY(q.mI(0,s))}else{v.r=(r==null?C.F:r).gp(0)
v.seY(null)}o=n.e.e0()
j.drawRect(B.dI(s),o)
o.delete()}},
aSt(d,e,f){var w,v
this.a03(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adP(d,e,f,w)
if(v.b.length!==0)this.aSA(d,e,f,w)},
adP(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
n.seY(j.mI(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dw(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=C.d.am(o,n.gbT(n).eI(0,2))
J.b8(r.save())
r.translate(h,g)
n=n.gNq().b
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
s.adQ(0,n,new B.r(h,o),k)}}},
aSA(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fd(o,a3,a2)
m=new B.r(n,0)
o=d.fd(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l6(m,l)
if(j!=null){n.r=C.D.gp(0)
n.seY(j.mI(0,i))}else{if(k==null)k=C.F
n.r=k.gp(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dw(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b8(r.save())
r.translate(f,e)
n=n.gNq().b
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
s.adQ(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_4(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KG.prototype={
galj(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galk(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galm(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galh(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alF(d){var w,v=this,u=null,t=v.d,s=A.bwd(t.d),r=t.a
r=r.a&&A.bQ_(r.b)?r.b:u
w=B.b([B.ba(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.axj(w)
if(v.galj())C.b.hw(w,s.$1(!0),new A.AN(D.B6,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galm())C.b.hw(w,s.$1(!0),new A.AN(D.mB,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galk())C.b.hw(w,s.$1(!0),new A.AN(D.B7,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galh())C.b.hw(w,s.$1(!0),new A.AN(D.dK,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
u(d){return B.iW(new A.axi(this))}}
A.Rq.prototype={
W(){return new A.XW(new B.bi(null,x.eF))}}
A.XW.prototype={
ay2(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fF
case 2:return C.dv
case 3:return C.fe}},
ayy(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
ay4(d){this.a.toString
return},
av(){this.aN()
$.cA.x1$.push(this.ga4r())},
ba(d){this.bG(d)
$.cA.x1$.push(this.ga4r())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayy()
return B.SC(B.b1s(0,B.ba(v.ay2(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.acs.prototype={
bl(d){return A.bPR(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0F.prototype={
hk(d){if(!(d.b instanceof B.hn))d.b=new B.hn(null,null,C.q)},
hX(d){if(this.B===C.ay)return this.y5(d)
return this.ads(d)},
aL6(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9c(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a9b(d,B.hD())
switch(this.B.a){case 0:return d.c2(new B.H(w.a,w.b))
case 1:return d.c2(new B.H(w.b,w.a))}},
a9b(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h_(u,null)
break
case 1:q=B.h_(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9c(p)
t=Math.max(t,o.aL6(p))
m=r.aG$}return new A.beZ(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9b(o,B.my()),m=n.a,l=n.b
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
q=s.b-p.a9c(r==null?B.T(B.a_("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
ec(d,e){return this.y6(d,e)},
aP(d,e){if(this.gC(0).gY(0))return
this.a3.sbe(0,null)
this.v7(d,e)},
l(){this.a3.sbe(0,null)
this.aoB()}}
A.beZ.prototype={}
A.axk.prototype={}
A.jV.prototype={
gbD(){return[this.a,this.b]}}
A.nU.prototype={}
A.ah9.prototype={}
A.aha.prototype={
aK(d){var w,v,u
this.fo(d)
w=this.af$
for(v=x.L;w!=null;){w.aK(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fh(0)
w=this.af$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ahb.prototype={}
A.To.prototype={
l(){var w,v,u
for(w=this.W9$,v=w.length,u=0;u<v;++u)w[u].l()
this.it()}}
A.AN.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghI(){switch(this.c.a){case 0:return C.dv
case 1:return C.fe
case 2:return C.ec
case 3:return C.fF}},
gb_V(){var w=this.d,v=A.bwd(w.d),u=A.bDQ(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gai9(){var w=this.d,v=A.bDQ(w.a),u=A.bwd(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd4(0)+(v.gd1(0)+v.gd4(0))
case 1:case 3:return u.geu()+v.geu()}},
aWY(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lw().Oy(d,f-e)
w=p.c
v=w!==D.mB
if((!v||w===D.dK)&&p.d instanceof A.nV){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bvq(u,d)
w=new B.iY(t,B.ad(t).i("iY<1>"))
s=w.giC(w).eP(0,new A.aZr(u),x.W).fZ(0)}else{r=$.bur()
w=!v||w===D.dK
v=p.d
q=r.aWd(w?v.w:v.z,o,f,e)
v=B.n5(q,new A.aZs(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nU>")
w=B.Q(new B.ab(s,new A.aZt(p,e,f,o,g,d),w),w.i("au.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.ba(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mB
u=!v
t=!u||w===D.dK
s=j.e
r=t?s.a:s.b
t=j.ghI()
s=!u||w===D.dK?C.R:C.ay
q=B.b([],x.p)
if(w===D.B6||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dK?r:j.goD().c.c
p=!u||w===D.dK?j.goD().c.c:r
o=j.gb_V()
n=!u||w===D.dK?C.ay:C.R
j.gai9()
m=j.gai9()
l=!u||w===D.dK
k=j.d
l=l?k.f:k.x
u=!u||w===D.dK?k.r:k.y
q.push(B.ba(i,A.bXb(new A.axk(),n,j.aWY(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B7||w===D.dK)j.goD()
return new B.eX(t,i,i,B.bSH(q,C.k,s,i,C.f,C.L,0,i,i,C.bx),i)}}
A.a0U.prototype={
gbD(){return[this.a,this.b]}}
A.a56.prototype={
gbD(){return[this.a,this.b]}}
A.MZ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a58.prototype={
gabG(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.axQ.prototype={}
A.aEa.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahv.prototype={}
A.akw.prototype={}
A.akx.prototype={}
A.akE.prototype={}
A.KP.prototype={
i9(d,e,f){}}
A.vC.prototype={}
A.hm.prototype={
gdN(){return null},
gafU(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MY
if(w)return!0
return!(v instanceof A.MV)&&!(v instanceof A.MU)&&!(v instanceof A.MW)&&!(v instanceof A.MT)&&!w&&!(v instanceof A.MX)}}
A.a5c.prototype={
gdN(){return this.a.b}}
A.a5d.prototype={
gdN(){return this.a.b}}
A.a5e.prototype={
gdN(){return this.a.b}}
A.MU.prototype={}
A.MV.prototype={}
A.a5h.prototype={
gdN(){return this.a.b}}
A.MX.prototype={}
A.MY.prototype={
gdN(){return this.a.b}}
A.a5b.prototype={
gdN(){return this.a.b}}
A.a5a.prototype={
gdN(){return this.a.b}}
A.MT.prototype={
gdN(){return this.a.b}}
A.a5f.prototype={
gdN(){return this.a.gdN()}}
A.a5g.prototype={
gdN(){return this.a.gdN()}}
A.MW.prototype={
gdN(){return this.a.gdN()}}
A.G1.prototype={
YV(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afn(){var w=this,v=null,u=w.aj=B.bx3(v,v)
u.ay=new A.aUA(w)
u.ch=new A.aUB(w)
u.CW=new A.aUC(w)
u.cy=new A.aUD(w)
u.cx=new A.aUE(w)
u=w.aF=B.GR(v,-1,v)
u.B=new A.aUF(w)
u.a4=new A.aUG(w)
u.U=new A.aUH(w)
u=w.bC=B.a79(v,w.a3,v)
u.p3=new A.aUI(w)
u.p4=new A.aUJ(w)
u.RG=new A.aUK(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dD(d){return new B.H(d.b,d.d)},
kH(d){return!0},
mT(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.oB(d)
w=v.aF
w===$&&B.a()
w.oB(d)
w=v.aj
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l8(new A.a5g(d))},
gMY(d){return new A.aUL(this)},
gN_(d){return new A.aUM(this)},
l8(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.ZX(w):null
u.U.$2(d,v)
u.a4=C.bp},
gKP(d){return this.a4},
gFr(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.fo(d)
this.aq=!0},
aE(d){this.aq=!1
this.fh(0)},
$ijy:1}
A.Ok.prototype={
W(){return new A.VK(B.b([],x.r),B.y(x.S,x.J),new A.aKp(B.y(x.y,x.dj)),null,null)}}
A.VK.prototype={
u(d){var w,v=this,u=v.a4t(),t=v.CW
t.toString
t=v.abc(t.aw(0,v.gh2().gp(0)))
w=v.abc(u)
v.a.toString
return new A.KG(new A.a70(t,w,null),u,null)},
abc(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e8>")
w=B.Q(new B.ab(w,new A.bf3(this,d),v),v.i("au.E"))
return d.aR0(w,this.cy)},
a4t(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UI(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRf(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQE(new A.ET(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazn(),t.c,t.d))}return r},
azo(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafU())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bf1(v))
return}v.J(new A.bf2(v,e))},
m1(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4t(),new A.bf4(w)))}}
A.pP.prototype={
Xh(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a57(B.a15(d.a.b,j.b,f),j.a)
w=A.bDN(d.at,e.at,f)
v=A.bDR(d.c,e.c,f)
u=A.bDT(d.d,e.d,f)
t=A.bFR(d.e,e.e,f)
s=A.kx(d.ch,e.ch,f,A.c50(),x.cz)
s.toString
r=A.kx(d.CW,e.CW,f,A.c5_(),x.bO)
r.toString
u=A.bwH(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vk(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bwH(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRf(d,e,f,g){return this.Vk(null,null,d,e,f,g,null)},
aQE(d){var w=null
return this.Vk(w,d,w,w,w,w,w)},
aR0(d,e){var w=null
return this.Vk(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e8.prototype={
ard(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qi(n.a,new A.aKo())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fN))continue
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
ad5(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKn(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQL(d){return this.ad5(d,null)},
aQN(d){return this.ad5(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ol.prototype={
gbD(){return[this.a]}}
A.a0N.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mF.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KK.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.ys.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKd.prototype={
K(){return"LabelDirection."+this.b}}
A.a59.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.ET.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a71.prototype={
gbD(){return[4,C.hU,16,D.xF,0,120,A.c52(),!1,!1,!1,0,C.I,A.c51()]}}
A.n4.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.ql.prototype={}
A.ry.prototype={
gbD(){return[this.a,this.b,C.cB,C.w,null]}}
A.tv.prototype={
gbD(){return[this.a,this.b]}}
A.Gt.prototype={
gbD(){return[this.a]}}
A.Om.prototype={}
A.zf.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ahi.prototype={}
A.ahj.prototype={}
A.ahw.prototype={}
A.aky.prototype={}
A.akB.prototype={}
A.amf.prototype={}
A.amg.prototype={}
A.amh.prototype={}
A.amj.prototype={}
A.amk.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.aqM.prototype={}
A.asp.prototype={}
A.aKp.prototype={
UI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.zl(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zg(s,r,q,t,!0)}w=null
try{w=C.b.qi(d,new A.aKq())}catch(p){return D.ye}v=null
try{v=C.b.qi(w.a,new A.aKr())}catch(p){return D.ye}o=v.a
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
if(f<m)m=f}e=new A.zg(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zg.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ami.prototype={}
A.aKs.prototype={
i9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabG(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jo(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aPC(new B.G(0,0,u,v))}d.a02(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aSr(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSn(a3,q,a4)
d.aSs(a3,q,a4)
d.alZ(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.X(o)
if(n.gq(o)!==p.length)throw B.d(B.e1("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vn(q,i,j,k))}}d.aSz(a3,s,a4)
if(w.gabG(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSx(a2,a3,v,f,new A.Gt(g),a4)}},
aSn(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bwc(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zw(o,e,u,f)
s=p.ajq(o,e,t,u,f)
r=p.Zy(o,e,t,u,f,!0)
q=p.ajp(o,e,t,u,f)
p.aSq(d,s,p.Zv(o,e,t,u,f,!0),f,e)
p.aSk(d,q,r,f,e)
p.aSo(d,t,e)
p.aSm(d,t,e,f)}},
aSr(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bwc(a5.a),a8=A.bwc(a6.a)
if(a7.length!==a8.length)throw B.d(B.bD("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bQ.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ad(n).i("cz<1>")
l=B.Q(new B.cz(n,m),m.i("au.E"))
k=a2.Zw(a3,a5,o,b2)
j=a2.Zx(a3,a6.aQN(l),l,b2,k)
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
m=a2.dG(h,a3,b2)
e=a2.fd(g,a3,b2)
d=a2.dG(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.D.gp(0)
a0.seY(v.mI(0,new B.G(n,m,e,d)))}else{a0.r=(r?C.F:w).gp(0)
a0.seY(null)}$.al()
a1=new B.mI(C.dx,C.bc,C.e4,C.ew,C.dR).e0()
n=B.dI(new B.G(0,0,t,s))
m=$.bQ.b
if(m===$.bQ)B.T(B.vl(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e0()
n=j.e
a4.drawPath((n==null?j.e=new B.mJ(j.gjs().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSs(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZC(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fN)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adO(s,q,new B.r(p,o))}}},
aSz(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fQ(b3,new A.aKv())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.ZC(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.ct()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.rx(d.a))
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
f.seY(a6.mI(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gp(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c0(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dw(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.rx(d.a))
f.adO(t,j,new B.r(h,g))}}},
Zx(d,e,f,g,h){var w=this.ajr(d,e,f,g,h)
return w},
Zw(d,e,f,g){return this.Zx(d,e,f,g,null)},
ajr(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.al().r,C.ad,null,null,B.b([],x.v)):a5,f=J.X(a3),e=f.gq(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.ap(new B.fd(d,a0))
if(e===1)g.ap(new B.c8(d,a0))}else g.ap(new B.c8(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.q,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
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
s=new B.LM(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iA(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
Zy(d,e,f,g,h,i){var w=this,v=B.MF(f),u=J.X(g),t=w.fd(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.fd(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nZ())
return v},
ajq(d,e,f,g,h){return this.Zy(d,e,f,g,h,!1)},
Zv(d,e,f,g,h,i){var w=this,v=B.MF(f),u=J.X(g),t=w.fd(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.fd(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nZ())
return v},
ajp(d,e,f,g,h){return this.Zv(d,e,f,g,h,!1)},
aSq(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bx2(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.hK(e,r.r)},
aSk(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bx2(s,q.b,q.c,new B.G(v,0,u,t))
d.a.hK(e,r.r)},
aSo(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.MH(B.MF(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kb:C.e4
u.e=C.ew
u.r=v.gp(0)
u.seY(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zr(C.aF,w.c*0.57735+0.5)
d.a.hK(A.aAJ(e,f.cy).e6(w.b),this.f)},
aSm(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kb:C.e4
q.e=C.ew
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
A.bx2(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bV5(t)
d.a.hK(A.aAJ(e,f.cy),s.f)},
aSx(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bK3(b1),b3=J.X(b2)
if(b3.gq(b2)!==b1.length)throw B.d(B.e1("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().a_3(b4,u.b)
s=u.a
r=w.k(0,C.iX)?new B.kp(1):w
q=new B.tr(new B.hS(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.cB,C.w,r,a8,a8,a8,a8,C.bw,a8)
q.agc(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hU.geu()
k=o+(w-1)*4+(C.hU.gd1(0)+C.hU.gd4(0))
j=t-k-16
i=a7.a_4(b3,l,D.xF,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.FQ(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bK2(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().Km(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().Km(new B.H(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.D.gp(0)
s.c=0}b5.VX(0,new A.aKt(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bXN(q.r,q.w)
A:{if(D.E4===a5){a6=a3
break A}if(D.E5===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VX(0,new A.aKu(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZC(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
WA(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajS(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fQ(t,new A.aKw())
return t.length===0?null:t},
ajS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fN))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hw(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.ql(s,f,g,C.b.hv(w,v),v.a,v.b)}else return null}}
A.vn.prototype={}
A.a70.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.aKs()
t.a1d()
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
w.a=D.a_D
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
t=new A.abc(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YV(v.cx)
t.afn()
return t},
by(d,e){e.sij(0,this.d)
e.sYF(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.abc.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYF(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0N(d.cx)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aP(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i9(w,new A.a1i(t,v),new A.vC(u.aC,u.i3,u.d_,x.o))
s.restore()},
ZX(d){var w=this,v=w.gC(0)
return new A.Om(w.fW.WA(d,v,new A.vC(w.aC,w.i3,w.d_,x.o)))}}
A.No.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a1i.prototype={
aPC(d){this.a.a.clipRect(B.dI(d),$.nK()[1],!0)
return null},
adW(d,e){d.aP(this.a,e)},
VX(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b8(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lw()
s.YD(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dw(d,e,f,g){var w=new B.cl($.al().r,C.ad,null,null,B.b([],x.v))
w.ap(new B.fd(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.hK(A.aAJ(w,g),f)}}
A.zl.prototype={
gbD(){return[this.a]}}
A.amt.prototype={}
A.a1s.prototype={}
A.b1U.prototype={
Km(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXy(d,e){var w,v,u,t,s
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
aXz(d,e){var w,v
if(d==null)return D.a_O
w=d.b
v=e/2
return d.aQQ(w>v?v:w)},
Oy(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_G(w)},
b_G(d){if(d<1)return this.aJB(d)
return this.a8f(d)},
aJB(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8f(d*q)/q},
a8f(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aR(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
ajH(d){if(d>=1)return 1
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
a_3(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j3
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.mj):w},
ajz(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qn)","A(ex)","~(v,fH)","F(e8,v)","R<~>()","F(F,qn)","bT(F,tu)","pE(F)","v(ql,ql)","If(ob)","HW(C,bH)","Jd(oc)","vr(@)","wo(@)","e8(F)","CQ(@)","ah(F,tu)","uR(dg<uR>)","Eg(dg<aF_>)","F(vr)","F(wo)","wI(C,bH)","Bj(z)","~()","qn(@)","~(hm,KM?)","xC(@)","F(ip)","A(fH)","~(v,ip)","~(@)","jV(nU)","c(nU)","jV(bE<v,F>)","jV(F)","nU(jV)","~(hm,Om?)","e8(e8)","lJ(GF<lJ>)","zf(@)","R<oc>(ck<oc>)","tv(v)","uS(ex,F,e8,v)","ry(n4)","A(e8)","v(vn,vn)","F(fH)","R<ob>(ck<ob>)","v(v,v,F)","fH(fH,fH,F)","ip(ip,ip,F)","mE(mE,mE,F)","D7?(fH,v,ip,v)","D(fH)","c(F,tu)","ex(ex,ex,F)","A(F)","mZ(mZ,mZ,F)","nr(nr,nr,F)","kS(kS,kS,F)","lf(lf,lf,F)","f(kS)","f(lf)","e8(e8,e8,F)","mF(mF,mF,F)","uS(ex,F,e8,v{size:F?})","A(ex,e8)","F(r,r)","u<tv>(e8,u<v>)","y3(z)","u<ry>(u<n4>)","D(n4)","yq(f_<C?>)"])
A.aEW.prototype={
$1(d){var w=B.dl(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qn(J.am(v==null?"":v),A.p5(w.h(0,"revenue_net")),A.p5(w.h(0,"expense_net")),A.p5(w.h(0,"result_net")))},
$S:z+24}
A.aEX.prototype={
$1(d){var w,v,u,t=B.dl(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.p5(t.h(0,"gross"))
u=B.b1(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vr(s,r,w,v,u,A.p5(t.h(0,"avg_basket")))},
$S:z+12}
A.aEY.prototype={
$1(d){var w,v=B.dl(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b1(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wo(u,t,w,A.p5(v.h(0,"gross")))},
$S:z+13}
A.aFe.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.X(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CQ(v,u,J.am(t==null?"expense":t),A.ua(w.h(d,"net")),A.ua(w.h(d,"tax")),A.ua(w.h(d,"gross")))},
$S:z+15}
A.bs9.prototype={
$1(d){return new A.uR(d.an($.bZ(),x.A))},
$S:z+17}
A.bsa.prototype={
$1(d){return new A.Eg(d.an($.bOI(),x.D))},
$S:z+18}
A.btY.prototype={
$1(d){return E.aEZ()},
$S:z+38}
A.bsb.prototype={
$1(d){var w=d.an($.xo(),x.P)
return d.an($.avz(),x.a).FT(w)},
$S:z+40}
A.bs8.prototype={
$1(d){var w=d.an($.xo(),x.P)
return d.an($.avz(),x.a).FO(w)},
$S:z+47}
A.bs7.prototype={
$1(d){return this.aje(d)},
aje(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.j(d.an($.bZ(),x.A).hh("finance_balance_kpis",t),$async$$1)
case 3:s=r.dl(q.a(f),x.N,t)
if(!J.e(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:240}
A.aEV.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avz(),x.a).pD(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEU.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avz(),x.a).Lr(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFc.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.buW()
if(s.e==null)B.T(B.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF4.prototype={
$0(){return this.a.Jm(this.b,this.c)},
$S:0}
A.aF5.prototype={
$0(){return this.a.Bf(this.b,this.c)},
$S:0}
A.aF6.prototype={
$0(){var w=x.z
return B.bo(this.a,!1).ex(B.eQ(new A.aF3(),null,w),w)},
$S:0}
A.aF3.prototype={
$1(d){return F.D2},
$S:z+69}
A.aF7.prototype={
$0(){return B.oh(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aF8.prototype={
$0(){var w=this
return w.a.Bg(w.b,w.c,w.d)},
$S:0}
A.aFb.prototype={
$0(){return D.atn},
$S:133}
A.aFa.prototype={
$2(d,e){return new A.HW(B.i(d),null)},
$S:z+10}
A.aF9.prototype={
$1(d){return new A.Jd(d,null)},
$S:z+11}
A.aF2.prototype={
$1(d){var w=null,v=this.a,u=$.dQ()
v=B.k("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mB(B.b([B.dF(C.d7,w,w,new A.aF0(u),w,w),B.dJ(F.v0,new A.aF1(u),B.dK(C.l,C.B,w,w,w,w,w))],x.p),w,v,F.v1)},
$S:53}
A.aF0.prototype={
$0(){B.bo(this.a,!1).dm(!1)
return null},
$S:0}
A.aF1.prototype={
$0(){B.bo(this.a,!1).dm(!0)
return null},
$S:0}
A.bhx.prototype={
$0(){var w=this.a.aI(0,$.xo().ghP(),x.V),v=E.aEZ()
w.wz(0,v)
return v},
$S:0}
A.bhy.prototype={
$0(){var w=this.a.aI(0,$.xo().ghP(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lJ(B.bR(B.aX(v),1,1,0,0,0,0),v)
w.wz(0,u)
return u},
$S:0}
A.bhz.prototype={
$0(){return this.a.II(this.b,this.c)},
$S:0}
A.bhw.prototype={
$2(d,e){return new B.oM(B.V(d).aQb(B.V(d).ax.aR5(C.j,C.l)),e,null)},
$S:1013}
A.bnp.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.O8(!1,C.nT,"Umsatz 7 %",t.ar(u.a),w),r=A.O8(!1,C.nT,"Umsatz 19 %",t.ar(u.b),w),q=A.O8(!0,D.a9Q,"Umsatz netto",t.ar(u.c),w),p=A.O8(!1,D.a9P,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5P(1.7,B.b([s,r,q,p,A.O8(!0,C.xU,"Ergebnis",n,o<0?C.av:C.aD),A.O8(!1,C.fP,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jT,!0)},
$S:95}
A.aKc.prototype={
$0(){return D.atl},
$S:133}
A.aKb.prototype={
$2(d,e){var w=null
return B.bA(C.av,B.k("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.j,13,C.m),w,w,w),C.eF,w,C.E,w,3)},
$S:290}
A.aKa.prototype={
$1(d){return new A.If(d,null)},
$S:z+9}
A.beQ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("au.E"),d=B.Q(new B.ab(g,new A.beF(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.beG(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.beH(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.ab(g,new A.beI(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.ab(g,new A.beJ(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.ab(g,new A.beK(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.ab(g,new A.beL(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.beM(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.beN(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.beO(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.ab(g,new A.beP(j),f),e)
return B.a5P(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jT,!0)},
$S:95}
A.beF.prototype={
$1(d){return d.b},
$S:z+0}
A.beG.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beH.prototype={
$1(d){return d.d},
$S:z+0}
A.beI.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beJ.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.beK.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.beL.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beM.prototype={
$1(d){return d.d},
$S:z+0}
A.beN.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.beO.prototype={
$1(d){return this.a},
$S:z+0}
A.beP.prototype={
$1(d){return this.a},
$S:z+0}
A.beR.prototype={
$0(){return A.bz1(this.b,1.45,new A.TN(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.beS.prototype={
$0(){return A.bz1(this.b,1.6,new A.TY(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.brj.prototype={
$1(d){var w=this,v=null,u=B.aQ(16),t=x.p,s=B.b([B.aq(B.b([B.aB(B.k(w.a,v,v,v,B.c_(C.j,18,C.p),v,v,v),1),B.fL(v,v,D.acv,v,v,new A.bri(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.L(s,B.b([B.k(w.b,v,v,v,B.E(C.t,12,C.aJ),v,v,v),C.U],t))
s.push(C.v)
s.push(B.cd(new B.mD(w.c,w.d,v),v,17976931348623157e292))
return B.a4m(v,C.B,new B.ae(C.ai,B.ag(s,C.C,v,C.f,C.L),v),v,v,v,C.fM,C.uJ,v,new B.da(u,C.I),v)},
$S:1014}
A.bri.prototype={
$0(){return B.bo(this.a,!1).fc()},
$S:0}
A.beT.prototype={
$0(){var w=this.a,v=B.b2(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bz1(this.b,2.4,new A.Y6(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bmY.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bmZ.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bn_.prototype={
$1(d){return A.aKn(null,1.4,null,C.av,0.35,D.agl,D.DV,null,!1,!1,!1,!1,D.Fg,!1,10,D.Y_,!0,C.lx,B.b([new A.ex(0,d),new A.ex(this.a,d)],x.U))},
$S:z+14}
A.b5y.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5A.prototype={
$2(d,e){var w=null
return B.k(this.a.aKW(d),w,w,w,B.E(C.t,10,C.Q),w,w,w)},
$S:z+16}
A.b5B.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.A5
return new B.ae(C.hT,B.k(C.c.cO(this.a[v].a,5),w,w,w,B.E(C.t,9,C.Q),w,w,w),w)},
$S:z+6}
A.b5z.prototype={
$1(d){return D.a8n},
$S:z+7}
A.b6l.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6m.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6n.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b6o.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.A5
return new B.ae(C.hT,B.k(this.a[v],w,w,w,B.E(C.j,12,C.p),w,w,w),w)},
$S:z+6}
A.bfn.prototype={
$1(d){return d.d},
$S:z+19}
A.bfo.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.boG.prototype={
$1(d){return d.d},
$S:z+20}
A.boH.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b43.prototype={
$0(){return D.att},
$S:133}
A.b42.prototype={
$2(d,e){return new A.wI("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b41.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ag(B.b([B.k("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.j,14,C.Q),m,m,m),C.U,B.k("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.t,12.5,C.m),m,m,m),C.v,B.mo(C.cE,B.b([B.i8(C.ER,D.aGT,new A.b3W(w,v),m),B.i8(D.abz,D.aFL,new A.b3X(w,v),m)],u),C.e9,8,8)],u),C.C,m,C.f,C.h),C.af,m,C.E,m,3)}w=new A.b44(d)
t=C.b.fK(n.a.e.d,0,new A.b3Y())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iW(new A.b3Z(new A.b45(w),r,w,s))
v=J.X(d)
u=B.i(v.h(d,"as_of"))
v=J.e(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ag(B.b([w,C.U,B.aq(B.b([B.aB(B.k("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.t,11,C.m),m,m,m),1),B.oK(D.acJ,D.aG7,new A.b4_(q,p),m),B.oK(D.ack,D.aFU,new A.b40(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.ac,m,C.f,C.h)},
$S:276}
A.b3W.prototype={
$0(){return A.auV(this.a,this.b,null)},
$S:0}
A.b3X.prototype={
$0(){return A.auS(this.a,this.b)},
$S:0}
A.b44.prototype={
$1(d){var w=B.b1(J.a3(this.a,d))
return w==null?null:w},
$S:1015}
A.b45.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b2(w,".",",")+" %"}return w},
$S:35}
A.b3Y.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3Z.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i6,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i6,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i6,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i6,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b2(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i6,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.ar(v)
return B.a5P(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i6,v)],x.p),q,12,12,C.jT,!0)},
$S:95}
A.b4_.prototype={
$0(){return A.auS(this.a,this.b)},
$S:0}
A.b40.prototype={
$0(){return A.auV(this.a,this.b,this.c)},
$S:0}
A.brh.prototype={
$1(d){return new A.Bj(this.a,new A.brg(this.b),this.c,null)},
$S:z+22}
A.brg.prototype={
$0(){var w=this.a,v=$.buV()
if(w.e==null)B.T(B.a_(y.b))
w.gcv().cs(v)},
$S:0}
A.b3Q.prototype={
$0(){},
$S:0}
A.b3R.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3S.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3U.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.j(B.ug(u.b,B.bR(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3T(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3T.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3V.prototype={
$0(){return B.bo(this.a,!1).fc()},
$S:0}
A.b46.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b47.prototype={
$1(d){return new A.xC(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axB.prototype={
$1(d){return d.e},
$S:z+27}
A.axC.prototype={
$2(d,e){return d+e},
$S:45}
A.axE.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axG.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axH.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.adW(v.d,v.e)},
$S:0}
A.axj.prototype={
$1(d){return 0},
$S:1016}
A.axi.prototype={
$2(d,e){return B.fl(C.bX,this.a.alF(e),C.o,C.bv,null)},
$S:1017}
A.aZp.prototype={
$1(d){return d.a},
$S:z+31}
A.aZq.prototype={
$1(d){return d.b},
$S:z+32}
A.aZr.prototype={
$1(d){return new A.jV(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZs.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mB||v===D.dK))t=1-t
return new A.jV(d,t*w.d)},
$S:z+34}
A.aZt.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.ajH(Math.abs(s.b-s.c)))
t=""}if(C.c.hp(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nU(d,q.c.b.$2(p,new A.tu(u+t,s.e)))},
$S:z+35}
A.aUA.prototype={
$1(d){this.a.l8(new A.a5c(d))},
$S:173}
A.aUB.prototype={
$1(d){this.a.l8(new A.a5d(d))},
$S:41}
A.aUC.prototype={
$1(d){this.a.l8(new A.a5e(d))},
$S:27}
A.aUD.prototype={
$0(){this.a.l8(D.a1k)},
$S:0}
A.aUE.prototype={
$1(d){this.a.l8(new A.MV())},
$S:43}
A.aUF.prototype={
$1(d){this.a.l8(new A.a5h(d))},
$S:46}
A.aUG.prototype={
$0(){this.a.l8(D.a1l)},
$S:0}
A.aUH.prototype={
$1(d){this.a.l8(new A.MY(d))},
$S:93}
A.aUI.prototype={
$1(d){this.a.l8(new A.a5b(d))},
$S:171}
A.aUJ.prototype={
$1(d){this.a.l8(new A.a5a(d))},
$S:170}
A.aUK.prototype={
$1(d){return this.a.l8(new A.MT(d))},
$S:169}
A.aUL.prototype={
$1(d){return this.a.l8(new A.a5f(d))},
$S:67}
A.aUM.prototype={
$1(d){return this.a.l8(new A.MW(d))},
$S:59}
A.bf3.prototype={
$1(d){var w=this.a.db.h(0,C.b.hv(this.b.ch,d))
return d.aQL(w==null?B.b([],x.t):w)},
$S:z+37}
A.bf1.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bf2.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fQ(w,new A.bf0())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gt(w))},
$S:0}
A.bf0.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bf4.prototype={
$1(d){return new A.zf(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKo.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.brZ.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bDS(t?A.byN(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tv(w,new A.ys(!0,A.bzC(),new A.brY(v)))},
$S:z+41}
A.brY.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bSF(A.byN(d,e,f),w,A.c0y(d,e,f))},
$S:z+42}
A.brW.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dn:u,v,v,v,v,v,v,v,v,14,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v)
return new A.ry(C.d.j(d.b),w)},
$S:z+43}
A.aKq.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKr.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.aKv.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aKt.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aKu.prototype={
$0(){this.a.adW(this.b,this.c)},
$S:0}
A.aKw.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.axu.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.axv.prototype={
$2(d,e){return d+e},
$S:45}
A.axy.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iY(v,B.ad(v).i("iY<1>")).aB(0,new A.axz(w,this.a/(u+1),this.c))},
$S:0}
A.axz.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.axw.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.axx.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHs.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1018}
A.aAK.prototype={
$1(d){return d},
$S:1019};(function aliases(){var w=A.KF.prototype
w.a02=w.i9
w.alZ=w.aSt
w.am_=w.adP
w=A.To.prototype
w.aoB=w.l
w=A.KP.prototype
w.a03=w.i9
w=A.G1.prototype
w.a0N=w.YV})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c45","bSC",72)
var q
v(q=A.Tq.prototype,"gaEN","aEO",23)
v(q,"gaDO","HY",4)
v(q,"gaEw","I9",4)
u(A.Tr.prototype,"gasu","asv",25)
t(A,"c2V",3,null,["$3"],["bPU"],49,0)
t(A,"c2W",3,null,["$3"],["bPV"],50,0)
t(A,"c2X",3,null,["$3"],["bPW"],51,0)
t(A,"c2Z",4,null,["$4"],["c3J"],52,0)
w(A,"c2Y","c3I",53)
s(A,"bz6","c3K",54)
t(A,"c2Q",3,null,["$3"],["bSG"],55,0)
w(A,"a_e","c6a",56)
w(A,"auX","c3N",7)
t(A,"c2S",3,null,["$3"],["bTr"],57,0)
t(A,"c2U",3,null,["$3"],["bYG"],58,0)
t(A,"c2R",3,null,["$3"],["bTq"],59,0)
t(A,"c2T",3,null,["$3"],["bYF"],60,0)
w(A,"cdx","bTp",61)
w(A,"cdy","bYE",62)
r(A.XW.prototype,"ga4r","ay4",30)
u(A.VK.prototype,"gazn","azo",36)
t(A,"c50",3,null,["$3"],["bTT"],63,0)
t(A,"c5_",3,null,["$3"],["bPX"],64,0)
w(A,"c53","c6b",1)
t(A,"bKs",4,null,["$5$size","$4"],["bIS",function(d,e,f,g){return A.bIS(d,e,f,g,null)}],65,0)
s(A,"bzC","c69",66)
s(A,"bKt","c2D",67)
s(A,"bKw","c3Q",68)
s(A,"bKv","c3M",3)
s(A,"bKu","c3L",3)
w(A,"c52","bK3",70)
w(A,"c51","bK2",71)
t(A,"a_k",3,null,["$3"],["c4Y"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a6N,A.ago,A.alA,A.IN,A.Jd,A.agm,A.HW,A.If,A.akU,A.am8,A.Uz,A.Y6,A.TN,A.TY,A.amC,A.aiZ,A.Ci,A.asm,A.wI,A.KG,A.AN])
u(B.C,[A.uR,A.Eg,A.bf,A.ahv,A.ahl,A.ahn,A.aho,A.ahd,A.akE,A.ahr,A.ahp,A.axQ,A.asq,A.axD,A.ahm,A.KP,A.a5Q,A.tu,A.aqO,A.aqN,A.ahc,A.akD,A.ex,A.akA,A.akC,A.aoV,A.alr,A.at5,A.akB,A.akj,A.akz,A.axh,A.beZ,A.axk,A.ah9,A.nU,A.akw,A.akx,A.vC,A.hm,A.amg,A.amj,A.ahi,A.ahw,A.ahj,A.aky,A.amm,A.amk,A.asp,A.aqM,A.aKp,A.ami,A.vn,A.a1i,A.amt,A.a1s,A.b1U])
u(B.uP,[A.qn,A.vr,A.wo,A.aAa,A.aBf,A.ob,A.CQ,A.oc])
u(B.o_,[A.aEW,A.aEX,A.aEY,A.aFe,A.bs9,A.bsa,A.btY,A.bsb,A.bs8,A.bs7,A.aF3,A.aF9,A.aF2,A.aKa,A.beF,A.beG,A.beH,A.beI,A.beJ,A.beK,A.beL,A.beM,A.beN,A.beO,A.beP,A.brj,A.bn_,A.b5z,A.b6l,A.b6m,A.bfn,A.boG,A.b41,A.b44,A.b45,A.brh,A.b47,A.axB,A.axE,A.axj,A.aZp,A.aZq,A.aZr,A.aZs,A.aZt,A.aUA,A.aUB,A.aUC,A.aUE,A.aUF,A.aUH,A.aUI,A.aUJ,A.aUK,A.aUL,A.aUM,A.bf3,A.bf4,A.aKo,A.brZ,A.brY,A.brW,A.aKq,A.aKr,A.axu,A.aAK])
t(A.yq,B.fA)
u(B.xS,[A.aEV,A.aEU,A.aFc,A.aF4,A.aF5,A.aF6,A.aF7,A.aF8,A.aFb,A.aF0,A.aF1,A.bhx,A.bhy,A.bhz,A.aKc,A.beR,A.beS,A.bri,A.beT,A.b43,A.b3W,A.b3X,A.b4_,A.b40,A.brg,A.b3Q,A.b3R,A.b3S,A.b3U,A.b3T,A.b3V,A.b46,A.axH,A.aUD,A.aUG,A.bf1,A.bf2,A.aKt,A.aKu,A.axy])
u(B.y_,[A.yr,A.anP,A.a6O,A.ahh])
u(B.xT,[A.aFa,A.bhw,A.bnp,A.aKb,A.beQ,A.bmY,A.bmZ,A.b5y,A.b5A,A.b5B,A.b6n,A.b6o,A.bfo,A.boH,A.b42,A.b3Y,A.b3Z,A.axC,A.axG,A.axi,A.bf0,A.aKv,A.aKw,A.axv,A.axz,A.axw,A.axx,A.aHs])
u(B.M,[A.Bj,A.Rq])
u(B.a0,[A.Tq,A.XW])
u(B.NF,[A.KL,A.Ok])
u(B.uo,[A.Tr,A.VK])
t(A.a0U,A.ahv)
t(A.ah8,A.a0U)
t(A.a0E,A.ah8)
u(A.a0E,[A.ahk,A.amh])
t(A.nV,A.ahk)
u(B.HV,[A.axs,A.adS,A.D6,A.aEa,A.aKd,A.No])
t(A.fH,A.ahl)
t(A.ip,A.ahn)
t(A.mE,A.aho)
t(A.a0L,A.ahd)
t(A.MZ,A.akE)
u(A.MZ,[A.ahq,A.aml])
t(A.a0Q,A.ahq)
t(A.a0R,A.ahr)
t(A.D7,A.ahp)
u(A.axQ,[A.KM,A.Om])
t(A.adU,A.asq)
t(A.ahs,A.adU)
t(A.a0S,A.ahs)
u(B.b7,[A.xC,A.zf])
t(A.uu,A.ahm)
t(A.KF,A.KP)
u(A.KF,[A.axF,A.aKs])
u(B.Og,[A.a0O,A.a70])
u(B.J,[A.G1,A.aha])
u(A.G1,[A.ab_,A.abc])
t(A.qc,A.aqO)
t(A.acr,A.aqN)
t(A.pg,A.ahc)
t(A.uT,A.akD)
t(A.yt,A.akA)
t(A.pE,A.akC)
t(A.Q_,A.aoV)
t(A.mZ,A.alr)
t(A.nr,A.at5)
u(A.pE,[A.alq,A.at4])
t(A.kS,A.alq)
t(A.lf,A.at4)
t(A.a59,A.akB)
u(A.a59,[A.alp,A.at3])
t(A.a60,A.alp)
t(A.aef,A.at3)
t(A.ML,A.akj)
t(A.uS,A.akz)
t(A.MS,A.uS)
t(A.acs,B.h5)
t(A.ahb,A.aha)
t(A.To,A.ahb)
t(A.a0F,A.To)
t(A.jV,A.ah9)
t(A.a56,A.akw)
t(A.a58,A.akx)
u(A.hm,[A.a5c,A.a5d,A.a5e,A.MU,A.MV,A.a5h,A.MX,A.MY,A.a5b,A.a5a,A.MT,A.a5f,A.a5g,A.MW])
t(A.pP,A.amh)
t(A.e8,A.amg)
t(A.Ol,A.amj)
t(A.a0N,A.ahi)
t(A.mF,A.ahw)
t(A.KK,A.ahj)
t(A.ys,A.aky)
t(A.ET,A.aml)
t(A.a71,A.amm)
t(A.amf,A.ex)
t(A.n4,A.amf)
t(A.ql,A.n4)
t(A.ry,A.amk)
t(A.tv,A.asp)
t(A.Gt,A.aqM)
t(A.zg,A.ami)
t(A.zl,A.amt)
w(A.ahd,A.bf)
w(A.ahk,A.bf)
w(A.ahl,A.bf)
w(A.ahn,A.bf)
w(A.aho,A.bf)
w(A.ahp,A.bf)
w(A.ahq,A.bf)
w(A.ahr,A.bf)
w(A.ahs,A.bf)
w(A.ahm,A.bf)
w(A.ah8,A.bf)
w(A.ahc,A.bf)
w(A.akj,A.bf)
w(A.akz,A.bf)
w(A.akA,A.bf)
w(A.akC,A.bf)
w(A.akD,A.bf)
w(A.alq,A.bf)
w(A.alp,A.bf)
w(A.alr,A.bf)
w(A.aoV,A.bf)
w(A.aqN,A.bf)
w(A.aqO,A.bf)
w(A.asq,A.bf)
w(A.at4,A.bf)
w(A.at3,A.bf)
w(A.at5,A.bf)
w(A.ah9,A.bf)
v(A.aha,B.aA)
w(A.ahb,B.e4)
v(A.To,B.a45)
w(A.ahv,A.bf)
w(A.akw,A.bf)
w(A.akx,A.bf)
w(A.akE,A.bf)
w(A.ahi,A.bf)
w(A.ahj,A.bf)
w(A.ahw,A.bf)
w(A.aky,A.bf)
w(A.akB,A.bf)
w(A.amf,A.bf)
w(A.amg,A.bf)
w(A.amh,A.bf)
w(A.amj,A.bf)
w(A.amk,A.bf)
w(A.aml,A.bf)
w(A.amm,A.bf)
w(A.aqM,A.bf)
w(A.asp,A.bf)
w(A.ami,A.bf)
w(A.amt,A.bf)})()
B.boU(b.typeUniverse,JSON.parse('{"a6N":{"W":[],"c":[]},"Eg":{"aF_":[]},"yq":{"fA":["bb<~>"],"fA.T":"bb<~>"},"Jd":{"W":[],"c":[]},"HW":{"W":[],"c":[]},"yr":{"bj":[],"M":[],"c":[]},"ago":{"W":[],"c":[]},"alA":{"W":[],"c":[]},"anP":{"bj":[],"M":[],"c":[]},"IN":{"W":[],"c":[]},"agm":{"W":[],"c":[]},"If":{"W":[],"c":[]},"wI":{"W":[],"c":[]},"Bj":{"M":[],"c":[]},"a6O":{"bj":[],"M":[],"c":[]},"akU":{"W":[],"c":[]},"am8":{"W":[],"c":[]},"Uz":{"W":[],"c":[]},"Y6":{"W":[],"c":[]},"TN":{"W":[],"c":[]},"TY":{"W":[],"c":[]},"amC":{"W":[],"c":[]},"aiZ":{"W":[],"c":[]},"Ci":{"W":[],"c":[]},"asm":{"W":[],"c":[]},"ahh":{"bj":[],"M":[],"c":[]},"Tq":{"a0":["Bj"]},"KL":{"M":[],"c":[]},"Tr":{"a0":["KL"]},"nV":{"bf":[]},"fH":{"bf":[]},"ip":{"bf":[]},"mE":{"bf":[]},"D7":{"bf":[]},"xC":{"b7":["nV"],"b4":["nV"],"b4.T":"nV","b7.T":"nV"},"a0L":{"bf":[]},"a0Q":{"bf":[]},"a0R":{"bf":[]},"a0S":{"bf":[]},"uu":{"bf":[]},"a0O":{"aV":[],"c":[]},"ab_":{"J":[],"L":[],"jy":[],"aS":[]},"pE":{"bf":[]},"mZ":{"bf":[]},"nr":{"bf":[]},"kS":{"bf":[]},"lf":{"bf":[]},"uS":{"bf":[]},"a0E":{"bf":[]},"qc":{"bf":[]},"acr":{"bf":[]},"pg":{"bf":[]},"uT":{"bf":[]},"yt":{"bf":[]},"adU":{"bf":[]},"Q_":{"bf":[]},"a60":{"bf":[]},"aef":{"bf":[]},"ML":{"bf":[]},"MS":{"bf":[]},"KG":{"W":[],"c":[]},"Rq":{"M":[],"c":[]},"XW":{"a0":["Rq"]},"jV":{"bf":[]},"acs":{"h5":[],"aV":[],"c":[]},"a0F":{"e4":["J","hn"],"J":[],"aA":["J","hn"],"L":[],"aS":[],"aA.1":"hn","e4.1":"hn","aA.0":"J"},"AN":{"W":[],"c":[]},"a0U":{"bf":[]},"a56":{"bf":[]},"MZ":{"bf":[]},"a58":{"bf":[]},"a5c":{"hm":[]},"a5d":{"hm":[]},"a5e":{"hm":[]},"MU":{"hm":[]},"MV":{"hm":[]},"a5h":{"hm":[]},"MX":{"hm":[]},"MY":{"hm":[]},"a5b":{"hm":[]},"a5a":{"hm":[]},"MT":{"hm":[]},"a5f":{"hm":[]},"a5g":{"hm":[]},"MW":{"hm":[]},"G1":{"J":[],"L":[],"jy":[],"aS":[]},"Ok":{"M":[],"c":[]},"VK":{"a0":["Ok"]},"pP":{"bf":[]},"e8":{"bf":[]},"mF":{"bf":[]},"n4":{"ex":[],"bf":[]},"ql":{"n4":[],"ex":[],"bf":[]},"ry":{"bf":[]},"tv":{"bf":[]},"Gt":{"bf":[]},"zf":{"b7":["pP"],"b4":["pP"],"b4.T":"pP","b7.T":"pP"},"Ol":{"bf":[]},"a0N":{"bf":[]},"KK":{"bf":[]},"ys":{"bf":[]},"a59":{"bf":[]},"ET":{"bf":[]},"a71":{"bf":[]},"zg":{"bf":[]},"a70":{"aV":[],"c":[]},"abc":{"J":[],"L":[],"jy":[],"aS":[]},"zl":{"bf":[]}}'))
B.bIl(b.typeUniverse,JSON.parse('{"KF":1,"MZ":1,"KP":1,"G1":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.at
return{_:w("CQ"),e:w("bb<ob>"),aN:w("bb<oc>"),fM:w("bb<a2<f,@>?>"),b:w("bb<~>"),W:w("jV"),B:w("nV"),dB:w("fH"),gF:w("uu"),fj:w("ip"),G:w("mE"),bO:w("mF"),k:w("av"),C:w("a1s<F>"),dO:w("uB"),R:w("a4<f,@>"),g:w("hI"),bz:w("lE<b9>"),f0:w("o4"),E:w("bf"),F:w("yq"),X:w("ob"),P:w("lJ"),D:w("uR"),a:w("aF_"),d:w("oc"),cw:w("ex"),L:w("hn"),m:w("dd<v,D>"),cm:w("kS"),dv:w("mZ"),M:w("B<nU>"),I:w("B<bCt>"),O:w("B<fH>"),Y:w("B<ip>"),U:w("B<ex>"),K:w("B<a5Q>"),u:w("B<e8>"),bC:w("B<vn>"),aA:w("B<u<ex>>"),v:w("B<ea>"),r:w("B<Gt>"),s:w("B<f>"),eg:w("B<tr>"),df:w("B<ql>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bi<a0<M>>"),Z:w("n4"),cz:w("e8"),hf:w("pP"),dj:w("zg"),fT:w("ry"),c_:w("is<p_<bb<~>>>"),x:w("zl<fH>"),y:w("zl<e8>"),J:w("u<v>"),ef:w("vr"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k6"),aU:w("C"),Q:w("vC<nV>"),o:w("vC<pP>"),dc:w("ea"),eo:w("q1"),gJ:w("q2"),V:w("nk<lJ>"),N:w("f"),A:w("nl"),bP:w("bI"),er:w("tr"),j:w("wo"),dw:w("ql"),bY:w("tv"),cZ:w("qn"),gc:w("ik"),es:w("lf"),bN:w("nr"),l:w("c"),q:w("x0"),g4:w("im<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xC?"),f3:w("zf?"),T:w("u<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("C?"),aD:w("ik?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B_=new B.pa(C.l,B.at("pa<D>"))
D.B6=new A.D6(0,"left")
D.mB=new A.D6(1,"top")
D.B7=new A.D6(2,"right")
D.dK=new A.D6(3,"bottom")
D.axf=new A.qc(!1,A.bz6(),22,null)
D.ku=new A.pg(16,null,D.axf,!0)
D.a8o=new A.pE(C.D,null,2,null)
D.vQ=new A.KK(!1,D.a8o,A.c53(),!0)
D.a_u=new A.axs(3,"spaceEvenly")
D.a_D=new B.xG(6,"dstIn")
D.Xg=new B.aT(3,3)
D.Ba=new B.d5(D.Xg,D.Xg,C.a2,C.a2)
D.a_O=new B.bl(C.D,0,C.V,-1)
D.BK=new A.a58()
D.a1k=new A.MU()
D.a1l=new A.MX()
D.aOz=new A.acr()
D.alg=w([],B.at("B<kS>"))
D.alh=w([],B.at("B<lf>"))
D.DR=new A.ML(D.alg,D.alh,!0)
D.a88=new B.eq("Zeitraum",!1,null)
D.a8c=new B.eq("Konten (SKR 03)",!1,null)
D.xF=new A.aEa(0,"center")
D.aOM=new A.ys(!0,A.bzC(),A.bKs())
D.DV=new A.ys(!1,A.bzC(),A.bKs())
D.DW=new A.yt(!1,!0,null,A.auX(),A.a_e(),!0,null,A.auX(),A.a_e())
D.aON=new A.yt(!0,!0,null,A.auX(),A.a_e(),!0,null,A.auX(),A.a_e())
D.a3G=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3s=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a3Q=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a3K=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a3b=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a3a=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a49=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a3A=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a4e=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a46=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.arn=new B.dd([50,D.a3G,100,D.a3s,200,D.a3Q,300,D.a3K,400,D.a3b,500,D.a3a,600,D.a49,700,D.a3A,800,D.a4e,900,D.a46],x.m)
D.dn=new B.rF(D.arn,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ahn=w([8,4],x.t)
D.a8m=new A.pE(D.dn,null,0.4,D.ahn)
D.a8n=new A.pE(C.am,null,0.5,null)
D.fN=new A.ex(0/0,0/0)
D.axh=new A.qc(!0,A.bz6(),44,null)
D.mC=new A.pg(16,null,D.axh,!0)
D.axg=new A.qc(!0,A.bz6(),30,null)
D.mD=new A.pg(16,null,D.axg,!0)
D.a8p=new A.uT(!1,D.mC,D.mD,D.mC,D.mD)
D.aOO=new A.uT(!0,D.mC,D.mD,D.mC,D.mD)
D.E4=new A.No(0,"left")
D.a90=new A.No(1,"center")
D.E5=new A.No(2,"right")
D.a94=new B.a8(57495,"MaterialIcons",null,!1)
D.xX=new B.a8(58927,"MaterialIcons",null,!1)
D.a9P=new B.a8(59005,"MaterialIcons",null,!0)
D.a9Q=new B.a8(59007,"MaterialIcons",null,!0)
D.a9R=new B.a8(59011,"MaterialIcons",null,!1)
D.aaN=new B.a8(62589,"MaterialIcons",null,!1)
D.aa6=new B.a8(61349,"MaterialIcons",null,!1)
D.abg=new B.aK(D.aa6,20,C.j,null,null)
D.aad=new B.a8(61487,"MaterialIcons",null,!1)
D.aby=new B.aK(D.aad,18,null,null,null)
D.abz=new B.aK(D.xX,18,null,null,null)
D.acb=new B.aK(C.nK,null,C.t,null,null)
D.ack=new B.aK(C.nP,16,null,null,null)
D.acs=new B.aK(C.EF,16,null,null,null)
D.acv=new B.aK(C.i0,null,C.j,null,null)
D.aaL=new B.a8(62584,"MaterialIcons",null,!1)
D.acD=new B.aK(D.aaL,16,null,null,null)
D.acJ=new B.aK(D.xX,16,null,null,null)
D.a9i=new B.a8(57912,"MaterialIcons",null,!1)
D.acN=new B.aK(D.a9i,null,C.av,null,null)
D.aeL=new A.a6O(null)
D.aOT=new A.aKd(0,"horizontal")
D.ye=new A.zg(0,0,0,0,!1)
D.Fg=new A.Ol(0.5)
D.BQ=new A.a71()
D.aeQ=new A.ET(D.BQ,A.bKw(),10,A.bKt(),!0,A.bKv(),A.bKu(),!1,null,null,null)
D.aOU=new A.ET(D.BQ,A.bKw(),10,A.bKt(),!0,A.bKv(),A.bKu(),!0,null,null,null)
D.agl=w([4,3],x.t)
D.avw=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.avm=new B.aG("receivables","Forderungen (kurzfristig)")
D.avb=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.av9=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.av_=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.av4=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avt=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avl=new B.aG("equity","Eigenkapital")
D.pr=w([D.avw,D.avm,D.avb,D.av9,D.av_,D.av4,D.avt,D.avl],B.at("B<+(f,f)>"))
D.aOW=w([],x.M)
D.al2=w([],x.O)
D.al3=w([],x.Y)
D.al4=w([],B.at("B<mE>"))
D.al5=w([],B.at("B<mF>"))
D.aOX=w([],x.U)
D.aOY=w([],x.u)
D.al6=w([],x.r)
D.as0={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SR={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.a4(D.SR,[0,0,0,0,0,0,0,C.cc],B.at("a4<f,C>"))
D.arZ={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.arh=new B.a4(D.arZ,[0,0,0,0],B.at("a4<f,v>"))
D.asf={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoS=new B.a4(D.asf,[0,0,0,0,null,null,null,null],B.at("a4<f,v?>"))
D.aoN=new B.a4(D.as0,[D.yT,D.yT,D.yT,C.cc,C.cc,C.cc,D.arh,D.aoS],x.R)
D.ap4=new B.a4(D.SR,[0,0,0,0,0,0,0,C.cA],x.R)
D.as1={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ap6=new B.a4(D.as1,[8500,1200,3400,300,22e3,4200,9000,22200],B.at("a4<f,F>"))
D.arY={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ari=new B.a4(D.arY,[0,0,0,0,0,0,0,C.cA],x.R)
D.asq={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arj=new B.a4(D.asq,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.at("a4<f,f>"))
D.a4j=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4s=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3e=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a3C=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a3M=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a4F=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a3_=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a3E=new B.D(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a3P=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a47=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.aro=new B.dd([50,D.a4j,100,D.a4s,200,D.a3e,300,D.a3C,400,D.a3M,500,D.a4F,600,D.a3_,700,D.a3E,800,D.a3P,900,D.a47],x.m)
D.SG=new B.rF(D.aro,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a7B=new B.ak(32,32,32,32)
D.atl=new B.ae(D.a7B,C.bC,null)
D.a7D=new B.ak(48,48,48,48)
D.atn=new B.ae(D.a7D,C.bC,null)
D.att=new B.ae(C.ai,C.bC,null)
D.ali=w([],B.at("B<mZ>"))
D.alj=w([],B.at("B<nr>"))
D.Xh=new A.Q_(D.ali,D.alj)
D.awe=new B.fx("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awf=new B.fx("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awi=new B.fx("Automaten-Business","Umsatz je Automat",null,null)
D.awk=new B.fx("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awm=new B.fx("Top","Meistverkaufte Produkte",null,null)
D.awq=new B.fx("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awr=new B.fx("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y_=new B.tb(C.F,C.q,0)
D.aEH=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayR=new B.dV(D.aEH,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGH=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayU=new B.dV(D.aGH,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aES=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayV=new B.dV(D.aES,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGB=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayX=new B.dV(D.aGB,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aG3=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayY=new B.dV(D.aG3,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aG0=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azh=new B.dV(D.aG0,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aP7=new B.P(!0,C.D,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEQ=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aF0=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFL=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFU=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aG7=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGT=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zd=new A.adS(0,"auto")
D.aHq=new A.adS(1,"top")
D.aLH=new A.wI("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLI=new A.wI("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdZ","bOI",()=>B.ia(new A.bs9(),x.D))
w($,"ce_","avz",()=>B.ia(new A.bsa(),x.a))
w($,"ceW","xo",()=>B.bxK(new A.btY(),x.P))
w($,"ce0","buW",()=>C.aI.$1$1(new A.bsb(),x.d))
w($,"cdY","bOH",()=>C.aI.$1$1(new A.bs8(),x.X))
w($,"cdX","buV",()=>C.aI.$1$1(new A.bs7(),x.h))
w($,"cdW","buU",()=>B.b_f(A.c45(),x.F,x.b))
w($,"c6X","bur",()=>new A.axh())
v($,"caf","lw",()=>new A.b1U())})()};
(a=>{a["wUfSRW8iPguL+eV+JXOlB/rvU+E="]=a.current})($__dart_deferred_initializers__);