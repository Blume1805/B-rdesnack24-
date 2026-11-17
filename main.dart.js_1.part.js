((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O2(d,e,f,g,h){return new A.a6E(f,g,d,h,e,null)},
a6E:function a6E(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uP:function uP(d){this.a=d},
E9:function E9(d){this.a=d},
bSb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Sw
w=x.f
v=x.N
u=x.z
t=A.aF2(B.dj(w.a(e.h(a0,"current")),v,u))
s=A.aF2(B.dj(w.a(e.h(a0,"prior_year")),v,u))
r=A.aF2(B.dj(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cY(p,new A.aEL(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cY(o,new A.aEM(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cY(q,new A.aEN(),x.j)
q=B.Q(q,q.$ti.i("au.E"))
n=B.dj(w.a(e.h(a0,"customer")),v,u)
m=B.b0(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.p4(n.h(0,"app_gross"))
k=B.b0(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.p4(n.h(0,"avg_basket"))
u=B.dj(w.a(e.h(a0,"derived")),v,u)
v=A.p4(u.h(0,"gross_margin_pct"))
e=A.p4(u.h(0,"net_margin_pct"))
w=A.p4(u.h(0,"ebitda_margin_pct"))
j=A.p4(u.h(0,"cashflow_operating"))
i=A.br2(u.h(0,"revenue_growth_yoy_pct"))
h=A.br2(u.h(0,"revenue_growth_mom_pct"))
g=A.br2(u.h(0,"result_growth_yoy_pct"))
u=A.br2(u.h(0,"result_growth_mom_pct"))
f=B.b0(J.a3(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.ob(t,s,r,p,o,q,new A.aA_(m,l,k,n),new A.aB4(v,e,w,j,i,h,g,u),f)},
p4(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iY(J.am(d))
return w==null?0:w},
br2(d){if(d==null)return null
if(typeof d=="number")return d
return B.iY(J.am(d))},
qk:function qk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vp:function vp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wm:function wm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA_:function aA_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB4:function aB4(d,e,f,g,h,i,j,k){var _=this
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
aEL:function aEL(){},
aEM:function aEM(){},
aEN:function aEN(){},
aF2(d){var w=J.Y(d),v=A.u7(w.h(d,"revenue_net_7")),u=A.u7(w.h(d,"revenue_net_19")),t=A.u7(w.h(d,"revenue_net")),s=A.u7(w.h(d,"expense_net")),r=A.u7(w.h(d,"result_net")),q=A.u7(w.h(d,"vat_collected")),p=A.u7(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cY(w,new A.aF3(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.oc(v,u,t,s,r,q,p,w)},
u7(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iY(J.am(d))
return w==null?0:w},
CK:function CK(d,e,f,g,h,i){var _=this
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
aF3:function aF3(){},
bSa(d){return new A.yn(d,new B.ir(x.c_),C.dI)},
brO:function brO(){},
brP:function brP(){},
btB:function btB(){},
brQ:function brQ(){},
brN:function brN(){},
brM:function brM(){},
yn:function yn(d,e,f){this.r=d
this.a=e
this.f=f},
aEK:function aEK(d,e,f){this.a=d
this.b=e
this.c=f},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
bSc(){return new A.yo(null)},
als(d,e,f,g,h){return new A.alr(e,h,g,f,d,null)},
yo:function yo(d){this.a=d},
aF1:function aF1(d){this.a=d},
aEU:function aEU(d,e,f){this.a=d
this.b=e
this.c=f},
aEV:function aEV(d,e,f){this.a=d
this.b=e
this.c=f},
aEW:function aEW(d){this.a=d},
aET:function aET(){},
aEX:function aEX(d){this.a=d},
aEY:function aEY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF0:function aF0(){},
aF_:function aF_(){},
aEZ:function aEZ(){},
aES:function aES(d,e){this.a=d
this.b=e},
aEQ:function aEQ(d){this.a=d},
aER:function aER(d){this.a=d},
agg:function agg(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alr:function alr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anF:function anF(d,e){this.e=d
this.a=e},
bhb:function bhb(d){this.a=d},
bhc:function bhc(d){this.a=d},
bhd:function bhd(d,e,f){this.a=d
this.b=e
this.c=f},
bha:function bha(){},
IH:function IH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J7:function J7(d,e){this.c=d
this.a=e},
bn3:function bn3(d){this.a=d},
age:function age(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HQ:function HQ(d,e){this.c=d
this.a=e},
byA(d,e,f,g,h){var w=null
return B.jS(w,w,!0,w,new A.bqY(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.am_(g,n,i,e,d,m,f,k,l,j,null)},
auI(d,e){return A.c1I(d,e)},
c1I(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auI=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bj(D.ayz)
t=4
o=e.aI(0,$.bZ(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.hw("finance-balance-sync",B.y(n,n)),$async$auI)
case 7:r=g
q=B.dj(x.f.a(r.a),x.N,n)
l.WL()
if(J.d(J.a3(q,"configured"),!1)){l.bj(D.ayD)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.buu()
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
return B.p($async$auI,v)},
auL(d,e,f){var w=0,v=B.q(x.H)
var $async$auL=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.jS(null,null,!0,null,new A.bqW(f,e,e.aI(0,$.bZ(),x.A)),d,null,!0,!0,x.H),$async$auL)
case 2:return B.o(null,v)}})
return B.p($async$auL,v)},
a6F:function a6F(d){this.a=d},
aK1:function aK1(){},
aK0:function aK0(){},
aK_:function aK_(){},
I9:function I9(d,e){this.c=d
this.a=e},
beD:function beD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bes:function bes(){},
bet:function bet(){},
beu:function beu(){},
bev:function bev(){},
bew:function bew(){},
bex:function bex(){},
bey:function bey(){},
bez:function bez(){},
beA:function beA(d){this.a=d},
beB:function beB(d){this.a=d},
beC:function beC(d){this.a=d},
beE:function beE(d,e){this.a=d
this.b=e},
beF:function beF(d,e){this.a=d
this.b=e},
bqY:function bqY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqX:function bqX(d){this.a=d},
akM:function akM(d){this.a=d},
am_:function am_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
beG:function beG(d,e){this.a=d
this.b=e},
Uq:function Uq(d,e,f){this.c=d
this.d=e
this.a=f},
XY:function XY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmC:function bmC(){},
bmD:function bmD(){},
bmE:function bmE(d){this.a=d},
TE:function TE(d,e,f){this.c=d
this.d=e
this.a=f},
b5l:function b5l(){},
b5n:function b5n(d){this.a=d},
b5o:function b5o(d){this.a=d},
b5m:function b5m(){},
TP:function TP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b68:function b68(){},
b69:function b69(){},
b6a:function b6a(){},
b6b:function b6b(d){this.a=d},
amt:function amt(d,e){this.c=d
this.a=e},
bfa:function bfa(){},
bfb:function bfb(){},
aiR:function aiR(d,e){this.c=d
this.a=e},
Cc:function Cc(d,e,f){this.c=d
this.d=e
this.a=f},
asc:function asc(d,e){this.c=d
this.a=e},
bok:function bok(){},
bol:function bol(){},
wF:function wF(d,e){this.c=d
this.a=e},
ah9:function ah9(d,e){this.e=d
this.a=e},
b3R:function b3R(){},
b3Q:function b3Q(){},
b3P:function b3P(d,e,f){this.a=d
this.b=e
this.c=f},
b3J:function b3J(d,e){this.a=d
this.b=e},
b3K:function b3K(d,e){this.a=d
this.b=e},
b3S:function b3S(d){this.a=d},
b3T:function b3T(d){this.a=d},
b3L:function b3L(){},
b3M:function b3M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3N:function b3N(d,e){this.a=d
this.b=e},
b3O:function b3O(d,e,f){this.a=d
this.b=e
this.c=f},
bqW:function bqW(d,e,f){this.a=d
this.b=e
this.c=f},
bqV:function bqV(d){this.a=d},
Be:function Be(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Th:function Th(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3D:function b3D(){},
b3E:function b3E(d){this.a=d},
b3F:function b3F(d){this.a=d},
b3H:function b3H(d,e){this.a=d
this.b=e},
b3G:function b3G(d,e){this.a=d
this.b=e},
b3I:function b3I(d){this.a=d},
bf:function bf(){},
bC3(d){return new A.KG(d,C.au,C.dA,null,null)},
KG:function KG(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ti:function Ti(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eM$=f
_.cu$=g
_.c=_.a=null},
b3U:function b3U(d,e){this.a=d
this.b=e},
b3V:function b3V(d){this.a=d},
axi(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akP:f,p=a0==null?16:a0,o=d==null?D.a_s:d,n=g==null,m=n?A.bv_(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xf:a3
n=n?A.bv_(r,r,r,r,r,r,r,r):g
w=j==null?D.DR:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.nV(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BK,s,w,i,n)},
axp(d,e,f,g,h){var w=d==null?D.akQ:d,v=e==null?2:e,u=g==null?C.lx:g
return new A.fG(h,f===!0,w,v,u)},
bPs(d,e,f){var w=d.a
w=C.d.aR(w+(e.a-w)*f)
return A.axp(A.kx(d.c,e.c,f,A.c2t(),x.fj),B.ac(d.d,e.d,f),!1,A.kx(d.e,e.e,f,A.a_b(),x.S),w)},
a0F(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SE
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aXn(f,v?8:m)
t=t.aXo(g,v?8:m)
v=d==null?A.bC1(r,r,r,r,r):d
return new A.io(q,l,w,j,u,s,e,t,v,k==null?D.akR:k)},
bPt(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mE(d.f,e.f,f),p=A.kx(d.r,e.r,f,A.a_b(),x.S),o=B.bW(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a0F(A.bC1(v,u,null,!1,t),p,q,o,s,n,null,A.kx(d.y,e.y,f,A.c2u(),x.G),m,r)},
bPu(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mC(u,w,v,B.bW(d.d,e.d,f))},
bC1(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dm
else w=d
return new A.a0B(g===!0,v,u,w,f)},
bv_(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0H(4,C.hU,16,D.xF,0,120,A.c2w(),!1,!1,D.Zb,0,C.I,A.c2v())
else w=k
v=j==null?C.l0:j
return new A.a0G(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3g(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D1(C.d.j(f.b),v)},
c3f(d){return A.azo(D.dm,15)},
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
axh:function axh(d,e){this.a=d
this.b=e},
fG:function fG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axq:function axq(){},
axr:function axr(){},
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
mC:function mC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0B:function a0B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0G:function a0G(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adJ:function adJ(d,e){this.a=d
this.b=e},
a0H:function a0H(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D1:function D1(d,e){this.a=d
this.b=e},
KH:function KH(d){this.a=d},
a0I:function a0I(d,e,f,g,h,i,j,k){var _=this
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
ah5:function ah5(){},
ahc:function ahc(){},
ahd:function ahd(){},
ahf:function ahf(){},
ahg:function ahg(){},
ahh:function ahh(){},
ahi:function ahi(){},
ahj:function ahj(){},
ahk:function ahk(){},
axs:function axs(d){this.a=d},
axt:function axt(){},
ur:function ur(d,e,f){this.a=d
this.b=e
this.c=f},
ahe:function ahe(){},
axu:function axu(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axv:function axv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axw:function axw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5H:function a5H(d){this.b=d},
a0E:function a0E(d,e,f){this.d=d
this.e=e
this.a=f},
aaR:function aaR(d,e,f,g,h,i,j,k){var _=this
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
c3h(d,e){var w=null
return new A.Rj(e.w,B.k(e.r,w,w,w,w,w,w,w),w)},
axa(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pf(t,e.b,new A.q9(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bDq(d,e,f){var w=A.axa(d.b,e.b,f),v=A.axa(d.d,e.d,f),u=A.axa(d.e,e.e,f)
return new A.uR(e.a,w,A.axa(d.c,e.c,f),v,u)},
bSe(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ex(w,v)},
bDo(d,e,f){return new A.yq(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5I(d){return!0},
c3k(d){return D.a8b},
bDp(d,e,f,g){var w
if(d==null)w=f==null?C.D:null
else w=d
return new A.pC(w,f,g,e)},
bFo(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c2p(),x.dv)
v.toString
w=A.kx(d.b,e.b,f,A.c2r(),x.bN)
w.toString
return new A.PT(v,w)},
bT_(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.ri(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.mY(t,w,v,u)},
bYe(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.ri(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nq(t,w,v,u)},
bSZ(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pw(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bSX(B.buS(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.ri(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_b(),x.S)
if(u==null)u=v==null?C.D:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
bYd(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pw(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bYb(B.buS(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.ri(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_b(),x.S)
if(u==null)u=v==null?C.D:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bSX(d,e,f,g,h,i){return new A.a5S(f,!1,g,i,d,e)},
bSY(d){return C.d.ak(d.e,1)},
bYb(d,e,f,g,h,i){return new A.ae7(f,!1,g,i,d,e)},
bYc(d){return C.d.ak(d.e,1)},
bDk(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c2o(),x.cm)
v.toString
w=A.kx(d.b,e.b,f,A.c2q(),x.es)
w.toString
return new A.MF(v,w,!0)},
bSd(d,e,f){return new A.MM(d,e==null?4:e,f)},
a0u:function a0u(){},
D0:function D0(d,e){this.a=d
this.b=e},
ts:function ts(d,e){this.r=d
this.w=e},
q9:function q9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aci:function aci(){},
pf:function pf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uR:function uR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ex:function ex(d,e){this.a=d
this.b=e},
yq:function yq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pC:function pC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adL:function adL(){},
PT:function PT(d,e){this.a=d
this.b=e},
mY:function mY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nq:function nq(d,e,f,g){var _=this
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
a5S:function a5S(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae7:function ae7(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MF:function MF(d,e,f){this.a=d
this.b=e
this.c=f},
uQ:function uQ(){},
MM:function MM(d,e,f){this.a=d
this.b=e
this.c=f},
ah0:function ah0(){},
ah4:function ah4(){},
akb:function akb(){},
akr:function akr(){},
aks:function aks(){},
aku:function aku(){},
akv:function akv(){},
alh:function alh(){},
alg:function alg(){},
ali:function ali(){},
aoL:function aoL(){},
aqD:function aqD(){},
aqE:function aqE(){},
asg:function asg(){},
asV:function asV(){},
asU:function asU(){},
asW:function asW(){},
ax6:function ax6(){},
KA:function KA(){},
KB:function KB(d,e,f){this.c=d
this.d=e
this.a=f},
ax8:function ax8(d){this.a=d},
ax7:function ax7(d){this.a=d},
Rj:function Rj(d,e,f){this.c=d
this.e=e
this.a=f},
XN:function XN(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWK(d,e,f){var w=B.ad(f),v=w.i("ab<1,jV>")
v=B.Q(new B.ab(f,new A.aZd(),v),v.i("au.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZe(),w),w.i("au.E"))
return new A.acj(e,d,v,w,null)},
bPp(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6v(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tp(v,C.ao,C.w,new B.kp(1),v,v,v,v,C.bw,v)
u=new A.a0v(f,d,e,u,t,!0,0,v,v,new B.br(),B.aL(x.g))
u.bk()
return u},
acj:function acj(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZd:function aZd(){},
aZe:function aZe(){},
a0v:function a0v(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.W4$=h
_.aT8$=i
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
beM:function beM(d,e){this.a=d
this.b=e},
ax9:function ax9(){},
jV:function jV(d,e){this.a=d
this.b=e},
nU:function nU(d,e){this.a=d
this.b=e},
ah1:function ah1(){},
ah2:function ah2(){},
ah3:function ah3(){},
Tf:function Tf(){},
AI:function AI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZf:function aZf(d){this.a=d},
aZg:function aZg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZh:function aZh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4Z(d,e){var w=d==null?B.cT(C.D,1):d
return new A.a4Y(e!==!1,w)},
a0K:function a0K(){},
a4Y:function a4Y(d,e){this.a=d
this.b=e},
MT:function MT(){},
a5_:function a5_(){},
axF:function axF(){},
aE_:function aE_(d,e){this.a=d
this.b=e},
ahn:function ahn(){},
ako:function ako(){},
akp:function akp(){},
akw:function akw(){},
KK:function KK(){},
vA:function vA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hl:function hl(){},
a53:function a53(d){this.a=d},
a54:function a54(d){this.a=d},
a55:function a55(d){this.a=d},
MO:function MO(){},
MP:function MP(){},
a58:function a58(d){this.a=d},
MR:function MR(){},
MS:function MS(d){this.a=d},
a52:function a52(d){this.a=d},
a51:function a51(d){this.a=d},
MN:function MN(d){this.a=d},
a56:function a56(d){this.a=d},
a57:function a57(d){this.a=d},
MQ:function MQ(d){this.a=d},
FW:function FW(){},
aUo:function aUo(d){this.a=d},
aUp:function aUp(d){this.a=d},
aUq:function aUq(d){this.a=d},
aUr:function aUr(d){this.a=d},
aUs:function aUs(d){this.a=d},
aUt:function aUt(d){this.a=d},
aUu:function aUu(d){this.a=d},
aUv:function aUv(d){this.a=d},
aUw:function aUw(d){this.a=d},
aUx:function aUx(d){this.a=d},
aUy:function aUy(d){this.a=d},
aUz:function aUz(d){this.a=d},
aUA:function aUA(d){this.a=d},
Oe:function Oe(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VB:function VB(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eM$=g
_.cu$=h
_.c=_.a=null},
beR:function beR(d,e){this.a=d
this.b=e},
beP:function beP(d){this.a=d},
beQ:function beQ(d,e){this.a=d
this.b=e},
beO:function beO(){},
beS:function beS(d){this.a=d},
bwf(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pM(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SE:u
else w=g
v=f==null?A.axg(!1,u,0,u,!1,D.vQ):f
w=new A.e8(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axg(!1,u,0,u,!1,D.vQ):d,j,a0,i,s,!1,p)
w.ar5(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bC2(d.ay,e.ay,f)
v=A.bC2(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kx(d.cy,e.cy,f,A.a_b(),x.S)
r=B.Z(d.r,e.r,f)
q=B.ri(d.w,e.w,f)
p=A.kx(d.a,e.a,f,A.c2n(),x.cw)
p.toString
o=B.bFV(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKc(v,m,w,r,e.z,s,new A.yp(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Of(n),!1,u,o,!0,e.cx,p)},
axg(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
else w=e
return new A.a0D(h,w,g,i,f,!1)},
bC2(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.ri(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bDp(t,A.kx(v.d,u.d,f,A.a_b(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.ri(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axg(!1,s,v,u,e.a,new A.KF(!1,r,w.c,!0))},
bPv(d,e,f){var w=B.Z(d.c,e.c,f),v=B.ri(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aR(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
return new A.mD(e.a,e.b,w,v)},
c5J(d){return!0},
byl(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iW)return A.bz9(w.a,A.bvW(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dm:w},
c05(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iW)w=A.bz9(v.a,A.bvW(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dm}return A.azo(w,40)},
bIq(d,e,f,g,h){var w,v=A.byl(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iW)w=A.bz9(u.a,A.bvW(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dm}u=A.azo(w,40)
return new A.MM(v,h==null?4:h,u)},
c5H(d,e){return!0},
c2a(d,e){return Math.abs(d.a-e.a)},
c3n(d,e){var w=J.cY(e,new A.brD(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c3j(d,e){return-1/0},
c3i(d,e){return d.a[e].b},
bJC(d){var w=J.cY(d,new A.brA(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bJB(d){return A.azo(D.dm,15)},
pM:function pM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKd:function aKd(){},
Of:function Of(d){this.a=d},
a0D:function a0D(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mD:function mD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KF:function KF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yp:function yp(d,e,f){this.a=d
this.b=e
this.c=f},
aK2:function aK2(d,e){this.a=d
this.b=e},
a50:function a50(){},
EN:function EN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brD:function brD(d){this.a=d},
brC:function brC(d){this.a=d},
a6T:function a6T(){},
brA:function brA(){},
n3:function n3(){},
qi:function qi(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rw:function rw(d,e){this.a=d
this.b=e},
tt:function tt(d,e){this.a=d
this.b=e},
Gn:function Gn(d){this.a=d},
Og:function Og(d){this.a=d},
zb:function zb(d,e){this.a=d
this.b=e},
aha:function aha(){},
ahb:function ahb(){},
aho:function aho(){},
akq:function akq(){},
akt:function akt(){},
am6:function am6(){},
am7:function am7(){},
am8:function am8(){},
ama:function ama(){},
amb:function amb(){},
amc:function amc(){},
amd:function amd(){},
aqC:function aqC(){},
asf:function asf(){},
aKe:function aKe(d){this.a=d},
aKf:function aKf(){},
aKg:function aKg(){},
zc:function zc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
am9:function am9(){},
aKh:function aKh(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKk:function aKk(){},
aKi:function aKi(d,e,f){this.a=d
this.b=e
this.c=f},
aKj:function aKj(d,e,f){this.a=d
this.b=e
this.c=f},
aKl:function aKl(){},
vl:function vl(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6S:function a6S(d,e,f){this.d=d
this.e=e
this.a=f},
ab3:function ab3(d,e,f,g,h,i,j,k){var _=this
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
buZ(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.axj(),m.i("ab<1,F>")).km(0,new A.axk()),k=e-l,j=new A.axn(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aB(0,new A.axl(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aB(0,new A.axm(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axj:function axj(){},
axk:function axk(){},
axn:function axn(d,e,f){this.a=d
this.b=e
this.c=f},
axo:function axo(d,e,f){this.a=d
this.b=e
this.c=f},
axl:function axl(d,e,f){this.a=d
this.b=e
this.c=f},
axm:function axm(d,e,f){this.a=d
this.b=e
this.c=f},
bvW(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ad(w).i("iX<1>")).aB(0,new A.aHh(v,d))
else throw B.e(B.bD('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHh:function aHh(d,e){this.a=d
this.b=e},
aAy(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAz(),w),w.i("au.E"))
return A.c3b(d,new A.a1j(v,x.C))}else return d},
aAz:function aAz(){},
bXl(d,e){var w=!0
if(d!==C.f9)if(!(d===C.ao&&e===C.w))w=d===C.ix&&e===C.aY
if(w)return D.E3
else{w=!0
if(d!==C.iw)if(!(d===C.ix&&e===C.w))w=d===C.ao&&e===C.aY
if(w)return D.E4
else return D.a8P}},
Ni:function Ni(d,e){this.a=d
this.b=e},
a19:function a19(d,e){this.a=d
this.b=e},
zh:function zh(d,e){this.a=d
this.$ti=e},
amk:function amk(){},
c3b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.al(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.ad,k,k,h)
for(j=B.Mz(d),w=B.b([],x.I),v=new B.MB(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.S(B.fv('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MA(v,r)
v.D0()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.D0()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ek(B.b([],i),!0,s)
p=new B.K0(new B.cl(t,p,k,new B.ap7([q,o,o+m,!0]),l),C.p,k)
h.push(p)
l=g.f
if(l!=null)p.iz(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1j:function a1j(d,e){this.a=d
this.b=0
this.$ti=e},
b1I:function b1I(){},
bvL(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gae(s).push(u)
else if(C.b.gae(s).length!==0)s.push(B.b([],t))}if(C.b.gae(s).length===0)s.pop()
return s},
bPy(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azo(d,e){var w=1-e/100
return B.aC(d.gfH(d),C.d.aR(d.gNC()*w),C.d.aR(d.gFX()*w),C.d.aR(d.gK9()*w))},
bDn(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
bvM(d){var w=d.a,v=w?A.aZc(d.b):0,u=w?A.aZc(d.c):0,t=w?A.aZc(d.d):0
return new B.ak(v,u,t,w?A.aZc(d.e):0)},
bUE(d){var w
if(d.c===0){d.seY(null)
w=B.c_(d.r)
d.r=B.aC(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwC(d,e,f,g){var w
if(f!=null){d.r=C.D.gp(0)
d.seY(f.mI(0,g))}else{w=e==null?C.F:e
d.r=w.gp(w)
d.seY(null)}},
aZc(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kx(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4v(d,e,f){return C.d.aR(d+(e-d)*f)},
bz9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a6E.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.B
r=r?C.l:C.am
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ct(t.x,C.l,s,18),C.b1],w))
v.push(B.aD(new B.eq(t.c,!1,s),1))
v=B.aq(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.U,B.k(t.d,1,C.ah,s,B.c2(u==null?C.j:u,22,C.P),s,s,s)],w)
return B.bA(r,B.ag(w,C.C,s,C.ij,C.h),q,s,C.ai,s,3)}}
A.uP.prototype={
Lt(d){return this.aT7(d)},
aT7(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lt=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eA("finance_summary",B.a5(["p_from",E.rd(d.a),"p_to",E.rd(d.b)],s,r),r),$async$Lt)
case 3:q=f
if(q==null){u=D.aoP
w=1
break}if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.ar2
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lt,v)},
Ls(d){return this.aT6(d)},
aT6(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ls=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eA("finance_kpis",B.a5(["p_from",E.rd(d.a),"p_to",E.rd(d.b)],s,r),r),$async$Ls)
case 3:q=f
if(x.f.b(q)){u=B.dj(q,s,r)
w=1
break}u=D.aoz
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ls,v)},
pC(d){return this.aqO(d)},
aqO(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hw("sevdesk-sync",B.a5(["from",E.rd(d.a),"to",E.rd(d.b)],s,s)),$async$pC)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a1(B.fD(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pC,v)},
Lo(d){return this.aSY(d)},
aSY(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lo=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.hw("finance-export-pdf",B.a5(["from",E.rd(d.a),"to",E.rd(d.b)],s,s)),$async$Lo)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.e1("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lo,v)}}
A.E9.prototype={
FR(d){return this.ajV(d)},
ajV(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FR=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lt(d),$async$FR)
case 7:q=f
o=A.aF2(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FR,v)},
FM(d){return this.ajG(d)},
ajG(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FM=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Ls(d),$async$FM)
case 7:q=f
o=A.bSb(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FM,v)},
pC(d){return this.aqP(d)},
aqP(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.Hu(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pC,v)},
Ln(d){return this.aSX(d)},
aSX(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ln=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.Lo(d),$async$Ln)
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
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ln,v)},
Hu(d){if(d instanceof B.yk)return d
if(d instanceof B.l5){if(d.b==="42501")return new B.vE(d.a)
return new B.t8(d.a)}if(d instanceof B.N6)return new B.t8("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B6("Unerwarteter Fehler: "+B.i(d))},
$iaEP:1}
A.qk.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vp.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wm.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aA_.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aB4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ob.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CK.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oc.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yn.prototype={
GN(d){return this.aqN(0)},
aqN(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GN=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se7(0,C.dv)
s=t.r
r=s.aI(0,$.xl(),x.P)
p.a=null
w=3
return B.j(B.pe(new A.aEK(p,t,r),x.H),$async$GN)
case 3:t.se7(0,f)
q=t.f
if(q.ghp(q)==null){q=$.buv()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GN,v)},
Lm(){return this.aSW()},
aSW(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lm=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se7(0,C.dv)
s=t.r.aI(0,$.xl(),x.P)
q.a=null
w=3
return B.j(B.pe(new A.aEJ(q,t,s),x.H),$async$Lm)
case 3:t.se7(0,e)
r=t.f
u=r.ghp(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lm,v)}}
A.yo.prototype={
ds(d,e){var w=null,v=e.ao($.xl(),x.P),u=e.ao($.buv(),x.aN)
return B.iv(B.dT(B.b([new B.fw("Finanzen","Dashboard",new A.agg(e.ao($.but(),x.b).giU(),new A.aEU(this,d,e),new A.aEV(this,d,e),new A.aEW(d),new A.aEX(d),new A.aEY(this,d,e,v),w),w),C.aP,new A.anF(v,w),C.bY,D.aey,C.bY,B.du(u,new A.aEZ(),new A.aF_(),new A.aF0(),!1,!0,!1,x.d,x.l)],x.p),C.cJ,w,C.Q,!1),C.l,new A.aF1(e))},
Jk(d,e){return this.aLx(d,e)},
aLx(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jk=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.but()
w=3
return B.j(e.aI(0,s.ghP(),x.F).GN(0),$async$Jk)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghp(s)
t=d.P(x.q).f
t.bj(B.c9(null,null,null,null,null,C.o,null,B.k(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jk,v)},
Be(d,e){return this.awW(d,e)},
awW(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Be=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.aI(0,$.but().ghP(),x.F).Lm(),$async$Be)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bj(D.ayF)
w=1
break}t=B.q3(C.p,10)
w=4
return B.j($.bLM().tZ(s,"finanzauswertung.pdf",t,null,null,null),$async$Be)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Be,v)},
Bf(d,e,f){return this.aJ7(d,e,f)},
aJ7(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bf=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.jS(null,null,!0,null,new A.aES(f,d),d,null,!0,!0,x.cJ),$async$Bf)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nO(e.aI(0,$.bZ(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ar(p)
n=n.ar(o)
w=8
return B.j(r.zu("finance_period",p,o,B.a5(["period_from",p.eh()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bf)
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
return B.p($async$Bf,v)}}
A.agg.prototype={
u(d){var w=this,v=null,u=A.als(C.l,F.i0,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.als(v,D.aaA,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.als(v,D.xX,v,s?v:w.d,"sevDesk synchronisieren"),q=A.als(C.av,C.jf,C.av,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.b1,t,C.b1,r,C.b1,q,C.b1,A.als(C.aC,C.fO,C.aC,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.M,0,v,v)}}
A.alr.prototype={
u(d){var w,v=this,u=null,t=B.aQ(12),s=B.aQ(12),r=B.aQ(12),q=v.w
if(q==null)q=C.am
q=B.cT(q,1)
w=v.r
if(w==null)w=C.j
return B.GZ(B.dK(!1,C.a_,!0,t,B.eP(!1,s,!0,B.ba(u,B.ct(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.af,0,u,u,u,u,u,C.bu),u,v.d,u,u)}}
A.anF.prototype={
ds(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bA(w,B.ag(B.b([D.a7Y,C.U,B.aq(B.b([D.ab3,C.aT,B.aD(B.k(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.j,16,C.P),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.v,B.mn(C.cD,B.b([new A.IH("Monat",new A.bhb(e),w,w),new A.IH("Jahr (YTD)",new A.bhc(e),w,w),new A.IH("Zeitraum w\xe4hlen \u2026",new A.bhd(this,d,e),D.a9E,w)],t),C.e9,6,8)],t),C.C,w,C.f,C.h),w,w,C.E,w,3)},
IG(d,e){return this.aI1(d,e)},
aI1(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IG=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.av1(new A.bha(),d,B.bQ(B.aX(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bQ(B.aX(t)+1,1,1,0,0,0,0),C.eo),$async$IG)
case 2:r=g
if(r!=null)e.aI(0,$.xl().ghP(),x.V).wz(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IG,v)}}
A.IH.prototype={
u(d){var w=null,v=B.aQ(9999),u=B.aQ(9999),t=B.aQ(9999),s=B.cT(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ct(p,C.j,w,14),C.b1],r))
q.push(B.k(this.c,w,w,w,B.E(C.j,13,C.P),w,w,w))
return B.dK(!1,C.a_,!0,v,B.eP(!1,u,!0,B.ba(w,B.aq(q,C.k,w,C.f,C.M,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.af,0,w,w,w,w,w,C.bu)}}
A.J7.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iV(new A.bn3(this)),C.bY,D.a81,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.aq(B.b([D.abZ,C.aK,B.aD(B.k("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.t,14,C.m),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.af,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.L(w,B.b([new A.age(t.a,t.b,t.c==="revenue",t.d,s),C.U],r))}q.push(B.ag(w,C.k,s,C.f,C.h))}return B.ag(q,C.ac,s,C.f,C.h)}}
A.age.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.af,s=B.cT(u?C.l:C.am,1),r=B.aQ(4),q=w.c
r=B.ba(C.W,B.k(C.c.a0(q,0,1),v,v,v,B.c2(C.j,14,C.q),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.k(q+" \xb7 "+w.d,1,C.ah,v,B.E(C.j,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aD(B.ag(B.b([q,B.k(t,v,v,v,B.E(C.t,12,C.m),v,v,v)],s),C.C,v,C.f,C.h),1)
q=$.dy().ar(w.f)
return B.bA(v,B.aq(B.b([r,C.aK,t,B.k(q,v,v,v,B.E(u?C.aC:C.j,15,C.P),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eK,v,3)}}
A.HQ.prototype={
u(d){var w=null
return B.bA(C.av,B.aq(B.b([D.acA,C.aK,B.aD(B.k(this.c,w,w,w,B.E(C.j,14,C.m),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eE,w,C.E,w,3)}}
A.a6F.prototype={
ds(d,e){return B.du(e.ao($.bOg(),x.e),new A.aK_(),new A.aK0(),new A.aK1(),!1,!0,!1,x.X,x.l)}}
A.I9.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aw9,C.v,B.iV(new A.beD(v,q,100-t.w.a,w,p)),C.v,new A.akM(u),C.aP,D.aw8,C.v,new A.ah9(t,u),C.aP,D.aw2,C.v,B.by(u,!0,u,B.mW(u,B.bA(u,new A.TE(t,220,u),u,u,C.E,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beE(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.avX,C.v,B.by(u,!0,u,B.mW(u,new A.TP(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aP,D.aw0,C.v,new A.amt(t,u),C.aP,D.avY,C.v,new A.aiR(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aP,D.aw4,C.v,new A.asc(t,u)],s))
return B.ag(r,C.ac,u,C.f,C.h)}}
A.akM.prototype={
u(d){var w=null
return B.k("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.t,11,C.m).ej(1.35),w,w,w)}}
A.am_.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cC(m.d,"-")?C.av:C.aC
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.beG(m,d):l
r=x.p
q=B.b([B.aD(B.k(m.c.toUpperCase(),l,l,l,B.E(C.t,10,C.q).fU(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cT(C.hM,0.8)
n=B.aQ(4)
q.push(B.ba(l,B.k("Ziel "+p,l,l,l,B.E(C.av,9,C.q),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nk,l,l,l))}q=B.b([B.aq(q,C.k,l,C.f,C.h,0,l,l),C.b9,B.bvK(C.du,B.k(m.d,l,l,l,B.c2(w,22,C.q),l,l,l),C.mE)],r)
p=m.e
if(p!=null)q.push(B.k(p,2,C.ah,l,B.E(C.t,10,C.aI),l,l,l))
q.push(C.cV)
q.push(B.aq(B.b([new A.Uq("Vormonat",m.r,l),C.cU,new A.Uq("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.cV)
q.push(B.aD(new A.XY(v,m.y,m.z,l),1))
return B.by(l,u,l,B.mW(l,B.bA(l,B.ag(q,C.C,l,C.f,C.h),l,l,C.dB,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.Uq.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aQ(4)
return B.ba(r,B.k(this.c+" \u2014",r,r,r,B.E(C.t,9,C.q),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nk,r,r,r)}w=q>=0
v=w?C.aC:C.av
u=v.fE(0.12)
t=B.cT(v,0.7)
s=B.aQ(4)
return B.ba(r,B.aq(B.b([B.ct(w?F.a8U:D.a8T,v,r,10),F.ayh,B.k(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.E(v,9,C.q),r,r,r)],x.p),C.k,r,C.f,C.M,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nk,r,r,r)}}
A.XY.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ex(v,j[v]))
u=C.b.km(j,new A.bmC())
t=C.b.km(j,new A.bmD())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bmE(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4Z(k,!1)
w=B.b([A.aKc(k,2,A.axg(!1,C.l.fE(0.16),0,k,!0,D.vQ),C.l,0.35,k,D.DV,k,!0,!1,!0,!1,D.Ff,!1,10,D.XY,!0,C.lx,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oe(A.bwf(k,k,k,D.akS,l,D.BK,D.DR,D.DW,w,D.aeC,k,m,k,n,D.Xf,D.akT,D.a8e),C.au,C.ag,k,k)}}
A.TE.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLl
w=C.b.fK(p,0,new A.b5l())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axp(B.b([A.a0F(q,q,D.Ba,q,C.l,q,q,q,r.b,6),A.a0F(q,q,D.Ba,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.cd(A.bC3(A.axi(q,q,u,q,q,A.a4Z(q,!1),q,new A.yq(!0,!0,q,new A.b5m(),A.a_5(),!1,q,A.auN(),A.a_5()),q,v,q,q,new A.uR(!0,new A.pf(16,q,new A.q9(!0,new A.b5n(this),46,q),!0),D.kt,D.kt,new A.pf(16,q,new A.q9(!0,new A.b5o(p),26,q),!0)))),this.d,q)},
aKO(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.TP.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b68(),w),x.i)
C.b.L(o,new B.ab(u,new A.b69(),w))
t=C.b.fK(o,0,new A.b6a())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axp(B.b([A.a0F(q,q,q,q,C.l,q,q,q,v[s],14),A.a0F(q,q,q,q,C.aC,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cd(A.bC3(A.axi(q,q,n,q,q,A.a4Z(q,!1),q,D.DW,q,o,q,q,new A.uR(!0,D.kt,D.kt,D.kt,new A.pf(16,q,new A.q9(!0,new A.b6b(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.E,q,3)}}
A.amt.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aLk
w=new B.ab(k,new A.bfa(),B.ad(k).i("ab<1,F>")).km(0,new A.bfb())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
q=B.k(r.b,m,m,m,new B.P(!0,C.j,m,l,C.bH,m,14,C.q,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dy()
o=p.ar(r.f)
q=B.ag(B.b([q,B.k(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.t,m,l,C.bH,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h)
o=r.d
p=p.ar(o)
n=new B.aT(4,4)
o=B.b([new B.iw(C.ay,C.f,C.h,C.k,m,C.bx,m,0,B.b([new B.mR(1,C.eL,q,m),C.aT,B.k(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.bH,m,16,C.q,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cV,new B.Dq(new B.d5(n,n,n,n),C.bK,B.Oh(C.am,8,C.d.bS(o/w,0,1),D.B_),m)],v)
q=C.b.gae(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_9(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.L(u,o)}return B.bA(m,B.ag(u,C.k,m,C.f,C.h),m,m,C.E,m,3)}}
A.aiR.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aD(new A.Cc("Aktive Kunden",""+s,u),1)
w=B.aD(new A.Cc("K\xe4ufe",""+t.a,u),1)
v=$.dy()
return B.bA(u,B.aq(B.b([s,w,B.aD(new A.Cc("\xd8-Warenkorb",v.ar(t.d),u),1),B.aD(new A.Cc("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.E,u,3)}}
A.Cc.prototype={
u(d){var w=null
return B.ag(B.b([B.k(this.c.toUpperCase(),w,w,w,B.E(C.t,10,C.q).fU(0.6),w,w,w),C.bU,B.k(this.d,w,w,w,B.c2(C.j,20,C.q),w,w,w)],x.p),C.C,w,C.f,C.M)}}
A.asc.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.bok(),B.ad(m).i("ab<1,F>")).km(0,new A.bol()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.I)(m),++v){u=m[v]
t=B.k(u.b,1,C.ah,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.k(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.t,o,n,C.bH,o,12,C.P,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dy().ar(r)
p=new B.aT(4,4)
r=B.b([new B.iw(C.ay,C.f,C.h,C.k,o,C.bx,o,0,B.b([new B.mR(1,C.eL,t,o),s,B.k(q,o,o,o,new B.P(!0,C.j,o,n,C.bH,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b9,new B.Dq(new B.d5(p,p,p,p),C.bK,B.Oh(C.am,6,C.d.bS(r/l,0,1),D.B_),o)],k)
t=C.b.gae(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_9(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.U)
C.b.L(j,r)}return B.bA(o,B.ag(j,C.k,o,C.f,C.h),o,o,C.E,o,3)}}
A.wF.prototype={
u(d){var w=null
return B.bA(w,B.k(this.c,w,w,w,B.E(C.t,13,C.m),w,w,w),C.af,w,C.E,w,3)}}
A.ah9.prototype={
ds(d,e){return B.du(e.ao($.buu(),x.fM),new A.b3P(this,d,e),new A.b3Q(),new A.b3R(),!1,!0,!1,x.h,x.l)}}
A.Be.prototype={
W(){return new A.Th()},
aY3(){return this.d.$0()}}
A.Th.prototype={
az(){var w,v,u,t,s,r,q=this
q.aP()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fs(J.am(J.a3(w,"as_of")))
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
w.R$=$.af()
w.S$=0}this.an()},
rm(d){var w=this.e
w===$&&B.a()
w=C.c.bg(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.iY(B.b1(w,",","."))
return w==null?0:w},
a3V(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pq[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b1(s,".",",")
t.lL(0,t.a.xU(C.aQ,C.bI,s))}}this.J(new A.b3D())},
aEG(){this.a3V(D.aoR)
this.c.P(x.q).f.bj(D.az_)},
HW(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HW=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b_(a1)
for(e=0;e<8;++e)a2.E(0,D.pq[e].a)
q=a2
t=4
w=7
return B.j($.aED.cb().zd(B.b(["csv","txt"],x.s),C.xI,!0),$async$HW)
case 7:p=a5
a2=p
o=a2==null?null:J.JX(a2.a).c
if(o==null){w=1
break}n=C.aB.adi(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BP.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.avx(l,B.bS("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.bg(J.a3(k,0)).toLowerCase()
i=J.CF(q,j)?j:D.ar3.h(0,j)
if(i==null)continue
d=C.c.bg(C.b.n0(J.bOY(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.iY(h)
if(g!=null)J.fo(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bj(D.ayC)
w=1
break}r.a3V(m)
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
return B.p($async$HW,v)},
I7(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I7=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3E(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_y("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eh(),0,10),"p_cash_and_bank",q.rm("cash_and_bank"),"p_receivables",q.rm("receivables"),"p_inventory_value",q.rm("inventory_value"),"p_other_current_assets",q.rm("other_current_assets"),"p_fixed_assets",q.rm("fixed_assets"),"p_current_liabilities",q.rm("current_liabilities"),"p_long_term_liabilities",q.rm("long_term_liabilities"),"p_equity",q.rm("equity")],x.N,x.aU))
w=7
return B.j(n,$async$I7)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aY3()
o=q.c
o.toString
B.bn(o,!1).fc()
q.c.P(x.q).f.bj(D.ayG)
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
if(q.c!=null)q.J(new A.b3F(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I7,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.k("Bilanzwerte erfassen",r,r,r,B.c2(C.j,18,C.q),r,r,r),p=s.f?r:new A.b3H(s,d),o=s.d
o===$&&B.a()
p=B.i5(D.abl,B.k("Stichtag: "+C.c.a0(o.eh(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aD(B.i5(D.acq,D.aEI,o?r:s.gaDG(),r),1)
v=x.p
w=B.b([p,C.U,B.aq(B.b([w,C.aT,B.aD(B.i5(D.acf,D.aEx,o?r:s.gaEF(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pq[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.eT(r,C.aS,!1,r,!0,C.o,r,B.f6(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aU,r,r,r,r,r,C.iy,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ao,r,C.a3,r,r,r,r),C.U],v))}w.push(B.k("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.t,11,C.m),r,r,r))
p=B.cd(B.f1(B.ag(w,C.ac,r,C.f,C.M),r,r,r,C.Q),r,380)
o=s.f
w=B.dL(C.d7,r,r,o?r:new A.b3I(d),r,r)
o=o?r:s.gaEo()
t=B.dI(C.l,C.B,r,r,r,r,r)
return B.mz(B.b([w,B.dS(s.f?F.Yu:C.ex,o,t)],v),C.B,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_9(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.e3(B.K(this))^B.bK8(this.gbD()))>>>0},
j(d){B.bDi()
return B.K(this).j(0)}}
A.KG.prototype={
W(){return new A.Ti(B.y(x.S,x.J),new A.axs(B.y(x.x,x.gF)),null,null)}}
A.Ti.prototype={
u(d){var w,v=this,u=v.a1Q(),t=v.CW
t.toString
t=v.a1R(t.av(0,v.gh2().gp(0)))
w=v.a1R(u)
v.a.toString
return new A.KB(new A.a0E(t,w,null),u,null)},
a1R(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axp(s.c,s.d,!1,r,s.a))}return d.aPY(w)},
a1Q(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UD(t.ch)
if(r)s=w.a
r=t.y
t=t.aQU(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPZ(A.bv_(!1,!0,!0,v.d,v.c,u.gasn(),v.f,v.e))}return t},
aso(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafO()||e==null||e.a==null){w=v.cy
v.J(w.gaPl(w))
return}v.J(new A.b3U(v,e))},
m1(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1Q(),new A.b3V(w)))}}
A.nV.prototype={
Ve(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axi(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQU(d,e){return this.Ve(null,null,d,e)},
aPZ(d){return this.Ve(null,d,null,null)},
aPY(d){return this.Ve(d,null,null,null)},
Xc(d,e,f){var w,v,u,t=A.kx(d.ch,e.ch,f,A.c2s(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bDq(d.d,e.d,f),q=A.bFo(d.e,e.e,f),p=A.bDo(d.c,e.c,f),o=e.a
o=A.a4Z(B.a0W(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axi(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bDk(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axh.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fG.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axq(),B.ad(v).i("ab<1,F>")).km(0,new A.axr())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.io.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0B.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0G.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adJ.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0H.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D1.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.KH.prototype={}
A.a0I.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xz.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.ah5.prototype={}
A.ahc.prototype={}
A.ahd.prototype={}
A.ahf.prototype={}
A.ahg.prototype={}
A.ahh.prototype={}
A.ahi.prototype={}
A.ahj.prototype={}
A.ahk.prototype={}
A.axs.prototype={
UD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ur(0,0,!1)
v=new A.zh(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ur(t,u,!0)}w=null
try{w=C.b.qe(d,new A.axt())}catch(s){return new A.ur(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
gbD(){return[this.a,this.b,this.c]}}
A.ahe.prototype={}
A.axu.prototype={
i8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_Y(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ach(t,A.buZ(w,t.a),u)
l.y=u
l.aSf(e,u,f)
l.alT(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSo(d,e,m,t,r,s,n,o,f)}}},
ach(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e1("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ad(p).i("iX<1>")).aB(0,new A.axv(t,q,r,s))
w.push(new A.a5H(q))}return w},
aSf(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
a4=B.PP(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.PP(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gp(0)
k.seY(null)
a6=b2.f.e_()
v.drawRRect(B.mx(a4),a6)
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
v.clipRect(B.dH(b1),$.nK()[1],!0)
a6=b2.f.e_()
v.drawRRect(B.mx(a4),a6)
a6.delete()
v.restore()
b2.aSm(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
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
n=A.aAy(new B.cl(n.r,C.ad,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mH(n.gjs().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSo(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AW(a5,a5,a5,a5,B.dd(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().ZZ(a8,a7.b),a7.a),C.cX,C.w,a5,b6.c,C.bw)
w.ag6(b1.f)
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
if(v!==D.aH3)j=v===D.Zb&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a__(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aT(s,s)
e=B.FK(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lw().Kj(new B.H(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.Kj(new B.H(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaig()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VS(d,new A.axw(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSm(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.PP(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aT(i.z,i.Q)
p=v?C.a2:new B.aT(i.x,i.y)
o=v?new B.aT(i.e,i.f):C.a2
q=B.PP(w,s,u,r,t,p,o,v?new B.aT(i.r,i.w):C.a2)}else q=B.bwY(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Wv(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ach(b2,A.buZ(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0I(d,q,a0,o,a2,a1,new A.ex(d.a,v),new B.r(n,t))}}return null}}
A.a5H.prototype={}
A.a0E.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.axu()
t.a18()
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
t=new A.aaR(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YQ(v.cy)
t.afh()
return t},
by(d,e){e.sih(0,this.d)
e.sYA(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.aaR.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYA(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0I(d.cy)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a19(t,v),new A.vA(u.aC,u.i2,u.d_,x.Q))
s.restore()},
ZS(d){var w=this,v=w.gC(0)
return new A.KH(w.fW.Wv(d,v,new A.vA(w.aC,w.i2,w.d_,x.Q)))}}
A.a0u.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D0.prototype={
K(){return"AxisSide."+this.b}}
A.ts.prototype={}
A.q9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aci.prototype={
gbD(){return[!1,0,0,0]}}
A.pf.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uR.prototype={
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
A.yq.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adL.prototype={
gbD(){return[this.a,this.b]}}
A.PT.prototype={
gbD(){return[this.a,this.b]}}
A.mY.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nq.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kS.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5S.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae7.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MF.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uQ.prototype={}
A.MM.prototype={
adI(d,e,f){var w,v
$.al()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bc
d.iO(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ah0.prototype={}
A.ah4.prototype={}
A.akb.prototype={}
A.akr.prototype={}
A.aks.prototype={}
A.aku.prototype={}
A.akv.prototype={}
A.alh.prototype={}
A.alg.prototype={}
A.ali.prototype={}
A.aoL.prototype={}
A.aqD.prototype={}
A.aqE.prototype={}
A.asg.prototype={}
A.asV.prototype={}
A.asU.prototype={}
A.asW.prototype={}
A.ax6.prototype={
Mr(d,e,f,g,h,i){return new B.ii(this.aW3(d,e,f,g,h,i),x.g4)},
aW2(d,e,f,g){return this.Mr(d,e,f,!0,g,!0)},
aW3(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mr(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().ajs(s,u,v,w)
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
A.KA.prototype={
a18(){var w,v=this
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
w.a_Z(d,e,f)
w.aSb(e,f)
w.aSl(e,f)
w.aSk(e,f)},
aSk(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().Ou(w.a,a1.r-a1.f)
u=$.bu_().Mr(a1.w,v,a1.r,!1,a1.f,!1)
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
k=B.c_(p.r)
p.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Du(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lw().Ou(w.b,a1.y-a1.x)
u=$.bu_().Mr(a1.z,h,a1.y,!1,a1.x,!1)
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
p=B.c_(q.r)
q.r=B.aC(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Du(n,m,d.a,f.d)}},
aSb(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.ha(new B.G(0,0,0+w.a,0+w.b),this.b)},
aSl(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l6(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.D.gp(0)
r.seY(p.mI(0,s))}else{r.r=(q==null?C.F:q).gp(0)
r.seY(null)}o=n.e.e_()
w.drawRect(B.dH(s),o)
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
v.seY(null)}o=n.e.e_()
j.drawRect(B.dH(s),o)
o.delete()}},
aSj(d,e,f){var w,v
this.a_Z(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adJ(d,e,f,w)
if(v.b.length!==0)this.aSq(d,e,f,w)},
adJ(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
k=B.c_(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Du(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=C.d.am(o,n.gbT(n).eI(0,2))
J.b8(r.save())
r.translate(h,g)
n=n.gNm().b
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
s.adK(0,n,new B.r(h,o),k)}}},
aSq(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
k=B.c_(n.r)
n.r=B.aC(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Du(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b8(r.save())
r.translate(f,e)
n=n.gNm().b
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
s.adK(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a__(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KB.prototype={
galc(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gald(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gale(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gala(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
aly(d){var w,v=this,u=null,t=v.d,s=A.bvM(t.d),r=t.a
r=r.a&&A.bPy(r.b)?r.b:u
w=B.b([B.ba(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.ax8(w)
if(v.galc())C.b.hv(w,s.$1(!0),new A.AI(D.B6,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gale())C.b.hv(w,s.$1(!0),new A.AI(D.mA,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gald())C.b.hv(w,s.$1(!0),new A.AI(D.B7,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gala())C.b.hv(w,s.$1(!0),new A.AI(D.dJ,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
u(d){return B.iV(new A.ax7(this))}}
A.Rj.prototype={
W(){return new A.XN(new B.bi(null,x.eF))}}
A.XN.prototype={
axV(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fF
case 2:return C.du
case 3:return C.fe}},
ayq(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
axX(d){this.a.toString
return},
az(){this.aP()
$.cA.x1$.push(this.ga4m())},
ba(d){this.bG(d)
$.cA.x1$.push(this.ga4m())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayq()
return B.Sv(B.b1g(0,B.ba(v.axV(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.p)}}
A.acj.prototype={
bl(d){return A.bPp(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0v.prototype={
hk(d){if(!(d.b instanceof B.hm))d.b=new B.hm(null,null,C.p)},
hW(d){if(this.B===C.ay)return this.y4(d)
return this.adm(d)},
aKZ(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a96(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a95(d,B.hC())
switch(this.B.a){case 0:return d.c2(new B.H(w.a,w.b))
case 1:return d.c2(new B.H(w.b,w.a))}},
a95(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h_(u,null)
break
case 1:q=B.h_(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a96(p)
t=Math.max(t,o.aKZ(p))
m=r.aG$}return new A.beM(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a95(o,B.mw()),m=n.a,l=n.b
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
q=s.b-p.a96(r==null?B.S(B.a_("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
ec(d,e){return this.y5(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a3.sbe(0,null)
this.v7(d,e)},
l(){this.a3.sbe(0,null)
this.aou()}}
A.beM.prototype={}
A.ax9.prototype={}
A.jV.prototype={
gbD(){return[this.a,this.b]}}
A.nU.prototype={}
A.ah1.prototype={}
A.ah2.prototype={
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
A.ah3.prototype={}
A.Tf.prototype={
l(){var w,v,u
for(w=this.W4$,v=w.length,u=0;u<v;++u)w[u].l()
this.is()}}
A.AI.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.du
case 1:return C.fe
case 2:return C.ec
case 3:return C.fF}},
gb_K(){var w=this.d,v=A.bvM(w.d),u=A.bDn(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gai3(){var w=this.d,v=A.bDn(w.a),u=A.bvM(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd4(0)+(v.gd1(0)+v.gd4(0))
case 1:case 3:return u.geu()+v.geu()}},
aWN(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lw().Ou(d,f-e)
w=p.c
v=w!==D.mA
if((!v||w===D.dJ)&&p.d instanceof A.nV){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.buZ(u,d)
w=new B.iX(t,B.ad(t).i("iX<1>"))
s=w.giC(w).eP(0,new A.aZf(u),x.W).fZ(0)}else{r=$.bu_()
w=!v||w===D.dJ
v=p.d
q=r.aW2(w?v.w:v.z,o,f,e)
v=B.n4(q,new A.aZg(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nU>")
w=B.Q(new B.ab(s,new A.aZh(p,e,f,o,g,d),w),w.i("au.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
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
if(w===D.B6||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dJ?r:j.goD().c.c
p=!u||w===D.dJ?j.goD().c.c:r
o=j.gb_K()
n=!u||w===D.dJ?C.ay:C.Q
j.gai3()
m=j.gai3()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.ba(i,A.bWK(new A.ax9(),n,j.aWN(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B7||w===D.dJ)j.goD()
return new B.eX(t,i,i,B.bSf(q,C.k,s,i,C.f,C.M,0,i,i,C.bx),i)}}
A.a0K.prototype={
gbD(){return[this.a,this.b]}}
A.a4Y.prototype={
gbD(){return[this.a,this.b]}}
A.MT.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5_.prototype={
gabA(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.axF.prototype={}
A.aE_.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahn.prototype={}
A.ako.prototype={}
A.akp.prototype={}
A.akw.prototype={}
A.KK.prototype={
i8(d,e,f){}}
A.vA.prototype={}
A.hl.prototype={
gdN(){return null},
gafO(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.MS
if(w)return!0
return!(v instanceof A.MP)&&!(v instanceof A.MO)&&!(v instanceof A.MQ)&&!(v instanceof A.MN)&&!w&&!(v instanceof A.MR)}}
A.a53.prototype={
gdN(){return this.a.b}}
A.a54.prototype={
gdN(){return this.a.b}}
A.a55.prototype={
gdN(){return this.a.b}}
A.MO.prototype={}
A.MP.prototype={}
A.a58.prototype={
gdN(){return this.a.b}}
A.MR.prototype={}
A.MS.prototype={
gdN(){return this.a.b}}
A.a52.prototype={
gdN(){return this.a.b}}
A.a51.prototype={
gdN(){return this.a.b}}
A.MN.prototype={
gdN(){return this.a.b}}
A.a56.prototype={
gdN(){return this.a.gdN()}}
A.a57.prototype={
gdN(){return this.a.gdN()}}
A.MQ.prototype={
gdN(){return this.a.gdN()}}
A.FW.prototype={
YQ(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afh(){var w=this,v=null,u=w.aj=B.bwD(v,v)
u.ay=new A.aUo(w)
u.ch=new A.aUp(w)
u.CW=new A.aUq(w)
u.cy=new A.aUr(w)
u.cx=new A.aUs(w)
u=w.aF=B.GL(v,-1,v)
u.B=new A.aUt(w)
u.a4=new A.aUu(w)
u.U=new A.aUv(w)
u=w.bC=B.a70(v,w.a3,v)
u.p3=new A.aUw(w)
u.p4=new A.aUx(w)
u.RG=new A.aUy(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dD(d){return new B.H(d.b,d.d)},
kG(d){return!0},
mS(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.oB(d)
w=v.aF
w===$&&B.a()
w.oB(d)
w=v.aj
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l7(new A.a57(d))},
gMU(d){return new A.aUz(this)},
gMW(d){return new A.aUA(this)},
l7(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.ZS(w):null
u.U.$2(d,v)
u.a4=C.bp},
gKM(d){return this.a4},
gFp(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.fo(d)
this.aq=!0},
aE(d){this.aq=!1
this.fh(0)},
$ijy:1}
A.Oe.prototype={
W(){return new A.VB(B.b([],x.r),B.y(x.S,x.J),new A.aKe(B.y(x.y,x.dj)),null,null)}}
A.VB.prototype={
u(d){var w,v=this,u=v.a4o(),t=v.CW
t.toString
t=v.ab6(t.av(0,v.gh2().gp(0)))
w=v.ab6(u)
v.a.toString
return new A.KB(new A.a6S(t,w,null),u,null)},
ab6(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e8>")
w=B.Q(new B.ab(w,new A.beR(this,d),v),v.i("au.E"))
return d.aQR(w,this.cy)},
a4o(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UD(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aR5(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQu(new A.EN(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazf(),t.c,t.d))}return r},
azg(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafO())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beP(v))
return}v.J(new A.beQ(v,e))},
m1(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4o(),new A.beS(w)))}}
A.pM.prototype={
Xc(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4Z(B.a0W(d.a.b,j.b,f),j.a)
w=A.bDk(d.at,e.at,f)
v=A.bDo(d.c,e.c,f)
u=A.bDq(d.d,e.d,f)
t=A.bFo(d.e,e.e,f)
s=A.kx(d.ch,e.ch,f,A.c4y(),x.cz)
s.toString
r=A.kx(d.CW,e.CW,f,A.c4x(),x.bO)
r.toString
u=A.bwf(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vf(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bwf(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aR5(d,e,f,g){return this.Vf(null,null,d,e,f,g,null)},
aQu(d){var w=null
return this.Vf(w,d,w,w,w,w,w)},
aQR(d,e){var w=null
return this.Vf(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e8.prototype={
ar5(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qe(n.a,new A.aKd())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
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
ad_(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKc(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQB(d){return this.ad_(d,null)},
aQD(d){return this.ad_(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Of.prototype={
gbD(){return[this.a]}}
A.a0D.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mD.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KF.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yp.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aK2.prototype={
K(){return"LabelDirection."+this.b}}
A.a50.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EN.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6T.prototype={
gbD(){return[4,C.hU,16,D.xF,0,120,A.c4A(),!1,!1,!1,0,C.I,A.c4z()]}}
A.n3.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qi.prototype={}
A.rw.prototype={
gbD(){return[this.a,this.b,C.cX,C.w,null]}}
A.tt.prototype={
gbD(){return[this.a,this.b]}}
A.Gn.prototype={
gbD(){return[this.a]}}
A.Og.prototype={}
A.zb.prototype={
he(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.aha.prototype={}
A.ahb.prototype={}
A.aho.prototype={}
A.akq.prototype={}
A.akt.prototype={}
A.am6.prototype={}
A.am7.prototype={}
A.am8.prototype={}
A.ama.prototype={}
A.amb.prototype={}
A.amc.prototype={}
A.amd.prototype={}
A.aqC.prototype={}
A.asf.prototype={}
A.aKe.prototype={
UD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.zh(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zc(s,r,q,t,!0)}w=null
try{w=C.b.qe(d,new A.aKf())}catch(p){return D.ye}v=null
try{v=C.b.qe(w.a,new A.aKg())}catch(p){return D.ye}o=v.a
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
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.am9.prototype={}
A.aKh.prototype={
i8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabA(0)){v=a3.b
u=v.a
v=v.b
$.al()
a3.a.jo(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aPs(new B.G(0,0,u,v))}d.a_Y(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aSh(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSd(a3,q,a4)
d.aSi(a3,q,a4)
d.alS(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.e1("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vl(q,i,j,k))}}d.aSp(a3,s,a4)
if(w.gabA(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSn(a2,a3,v,f,new A.Gn(g),a4)}},
aSd(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvL(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zr(o,e,u,f)
s=p.ajj(o,e,t,u,f)
r=p.Zt(o,e,t,u,f,!0)
q=p.aji(o,e,t,u,f)
p.aSg(d,s,p.Zq(o,e,t,u,f,!0),f,e)
p.aSa(d,q,r,f,e)
p.aSe(d,t,e)
p.aSc(d,t,e,f)}},
aSh(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bvL(a5.a),a8=A.bvL(a6.a)
if(a7.length!==a8.length)throw B.e(B.bD("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bP.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ad(n).i("cz<1>")
l=B.Q(new B.cz(n,m),m.i("au.E"))
k=a2.Zr(a3,a5,o,b2)
j=a2.Zs(a3,a6.aQD(l),l,b2,k)
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
a1=new B.mG(C.dw,C.bc,C.e4,C.ev,C.dR).e_()
n=B.dH(new B.G(0,0,t,s))
m=$.bP.b
if(m===$.bP)B.S(B.vj(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mH(j.gjs().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSi(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zx(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adI(s,q,new B.r(p,o))}}},
aSp(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fQ(b3,new A.aKk())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zx(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cs()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rv(d.a))
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
a4=B.c_(f.r)
f.r=B.aC(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Du(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rv(d.a))
f.adI(t,j,new B.r(h,g))}}},
Zs(d,e,f,g,h){var w=this.ajk(d,e,f,g,h)
return w},
Zr(d,e,f,g){return this.Zs(d,e,f,g,null)},
ajk(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.al().r,C.ad,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gq(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.ap(new B.fd(d,a0))
if(e===1)g.ap(new B.c8(d,a0))}else g.ap(new B.c8(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.p,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
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
s=new B.LG(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iz(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
Zt(d,e,f,g,h,i){var w=this,v=B.Mz(f),u=J.Y(g),t=w.fd(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.fd(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nZ())
return v},
ajj(d,e,f,g,h){return this.Zt(d,e,f,g,h,!1)},
Zq(d,e,f,g,h,i){var w=this,v=B.Mz(f),u=J.Y(g),t=w.fd(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.fd(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nZ())
return v},
aji(d,e,f,g,h){return this.Zq(d,e,f,g,h,!1)},
aSg(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bwC(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.hJ(e,r.r)},
aSa(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bwC(s,q.b,q.c,new B.G(v,0,u,t))
d.a.hJ(e,r.r)},
aSe(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.MB(B.Mz(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ka:C.e4
u.e=C.ev
u.r=v.gp(0)
u.seY(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zn(C.aE,w.c*0.57735+0.5)
d.a.hJ(A.aAy(e,f.cy).e6(w.b),this.f)},
aSc(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ka:C.e4
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
A.bwC(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bUE(t)
d.a.hJ(A.aAy(e,f.cy),s.f)},
aSn(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bJC(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e1("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().ZZ(b4,u.b)
s=u.a
r=w.k(0,C.iW)?new B.kp(1):w
q=new B.tp(new B.hQ(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.cX,C.w,r,a8,a8,a8,a8,C.bw,a8)
q.ag6(120)
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
i=a7.a__(b3,l,D.xF,0)
b3=i+l
w=j+k
h=new B.aT(4,4)
g=B.FK(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bJB(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().Kj(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().Kj(new B.H(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.D.gp(0)
s.c=0}b5.VS(0,new A.aKi(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bXl(q.r,q.w)
A:{if(D.E3===a5){a6=a3
break A}if(D.E4===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VS(0,new A.aKj(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
Zx(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Wv(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajL(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fQ(t,new A.aKl())
return t.length===0?null:t},
ajL(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hv(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qi(s,f,g,C.b.hu(w,v),v.a,v.b)}else return null}}
A.vl.prototype={}
A.a6S.prototype={
bl(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcR(),t=new A.aKh()
t.a18()
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
w.a=D.a_B
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
t=new A.ab3(this.d,v,u,t,d,C.bp,new B.br(),B.aL(x.g))
t.bk()
t.YQ(v.cx)
t.afh()
return t},
by(d,e){e.sih(0,this.d)
e.sYA(this.e)
e.scR(B.bu(d,null,x.w).w.gcR())
e.B=d
e.bc()}}
A.ab3.prototype={
sih(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYA(d){var w=this
if(w.i2.k(0,d))return
w.i2=d
w.a0I(d.cx)
w.bc()},
scR(d){if(this.d_.k(0,d))return
this.d_=d
this.bc()},
aO(d,e){var w,v,u=this,t=d.gdu(0),s=t.a
J.b8(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.i8(w,new A.a19(t,v),new A.vA(u.aC,u.i2,u.d_,x.o))
s.restore()},
ZS(d){var w=this,v=w.gC(0)
return new A.Og(w.fW.Wv(d,v,new A.vA(w.aC,w.i2,w.d_,x.o)))}}
A.Ni.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a19.prototype={
aPs(d){this.a.a.clipRect(B.dH(d),$.nK()[1],!0)
return null},
adQ(d,e){d.aO(this.a,e)},
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
Du(d,e,f,g){var w=new B.cl($.al().r,C.ad,null,null,B.b([],x.v))
w.ap(new B.fd(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.hJ(A.aAy(w,g),f)}}
A.zh.prototype={
gbD(){return[this.a]}}
A.amk.prototype={}
A.a1j.prototype={}
A.b1I.prototype={
Kj(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXn(d,e){var w,v,u,t,s
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
aXo(d,e){var w,v
if(d==null)return D.a_M
w=d.b
v=e/2
return d.aQG(w>v?v:w)},
Ou(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_v(w)},
b_v(d){if(d<1)return this.aJt(d)
return this.a88(d)},
aJt(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a88(d*q)/q},
a88(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aR(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
ajA(d){if(d>=1)return 1
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
ZZ(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j1
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.mj):w},
ajs(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qk)","A(ex)","~(v,fG)","F(e8,v)","T<~>()","F(F,qk)","bT(F,ts)","pC(F)","v(qi,qi)","I9(ob)","HQ(C,bH)","J7(oc)","vp(@)","wm(@)","e8(F)","CK(@)","ai(F,ts)","uP(dB<uP>)","E9(dB<aEP>)","F(vp)","F(wm)","wF(C,bH)","Be(z)","~()","qk(@)","~(hl,KH?)","xz(@)","F(io)","A(fG)","~(v,io)","~(@)","jV(nU)","c(nU)","jV(bE<v,F>)","jV(F)","nU(jV)","~(hl,Og?)","e8(e8)","lJ(Gz<lJ>)","zb(@)","T<oc>(ck<oc>)","tt(v)","uQ(ex,F,e8,v)","rw(n3)","A(e8)","v(vl,vl)","F(fG)","T<ob>(ck<ob>)","v(v,v,F)","fG(fG,fG,F)","io(io,io,F)","mC(mC,mC,F)","D1?(fG,v,io,v)","D(fG)","c(F,ts)","ex(ex,ex,F)","A(F)","mY(mY,mY,F)","nq(nq,nq,F)","kS(kS,kS,F)","lf(lf,lf,F)","f(kS)","f(lf)","e8(e8,e8,F)","mD(mD,mD,F)","uQ(ex,F,e8,v{size:F?})","A(ex,e8)","F(r,r)","u<tt>(e8,u<v>)","y0(z)","u<rw>(u<n3>)","D(n3)","yn(f_<C?>)"])
A.aEL.prototype={
$1(d){var w=B.dj(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qk(J.am(v==null?"":v),A.p4(w.h(0,"revenue_net")),A.p4(w.h(0,"expense_net")),A.p4(w.h(0,"result_net")))},
$S:z+24}
A.aEM.prototype={
$1(d){var w,v,u,t=B.dj(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.p4(t.h(0,"gross"))
u=B.b0(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vp(s,r,w,v,u,A.p4(t.h(0,"avg_basket")))},
$S:z+12}
A.aEN.prototype={
$1(d){var w,v=B.dj(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b0(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wm(u,t,w,A.p4(v.h(0,"gross")))},
$S:z+13}
A.aF3.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CK(v,u,J.am(t==null?"expense":t),A.u7(w.h(d,"net")),A.u7(w.h(d,"tax")),A.u7(w.h(d,"gross")))},
$S:z+15}
A.brO.prototype={
$1(d){return new A.uP(d.ao($.bZ(),x.A))},
$S:z+17}
A.brP.prototype={
$1(d){return new A.E9(d.ao($.bOh(),x.D))},
$S:z+18}
A.btB.prototype={
$1(d){return E.aEO()},
$S:z+38}
A.brQ.prototype={
$1(d){var w=d.ao($.xl(),x.P)
return d.ao($.avo(),x.a).FR(w)},
$S:z+40}
A.brN.prototype={
$1(d){var w=d.ao($.xl(),x.P)
return d.ao($.avo(),x.a).FM(w)},
$S:z+47}
A.brM.prototype={
$1(d){return this.aj8(d)},
aj8(d){var w=0,v=B.q(x.h),u,t,s,r,q
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
A.aEK.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avo(),x.a).pC(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEJ.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aI(0,$.avo(),x.a).Ln(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF1.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.buv()
if(s.e==null)B.S(B.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEU.prototype={
$0(){return this.a.Jk(this.b,this.c)},
$S:0}
A.aEV.prototype={
$0(){return this.a.Be(this.b,this.c)},
$S:0}
A.aEW.prototype={
$0(){var w=x.z
return B.bn(this.a,!1).ex(B.eQ(new A.aET(),null,w),w)},
$S:0}
A.aET.prototype={
$1(d){return F.D2},
$S:z+69}
A.aEX.prototype={
$0(){return B.oh(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEY.prototype={
$0(){var w=this
return w.a.Bf(w.b,w.c,w.d)},
$S:0}
A.aF0.prototype={
$0(){return D.at5},
$S:133}
A.aF_.prototype={
$2(d,e){return new A.HQ(B.i(d),null)},
$S:z+10}
A.aEZ.prototype={
$1(d){return new A.J7(d,null)},
$S:z+11}
A.aES.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.k("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mz(B.b([B.dL(C.d7,w,w,new A.aEQ(u),w,w),B.dS(F.v_,new A.aER(u),B.dI(C.l,C.B,w,w,w,w,w))],x.p),w,v,F.v0)},
$S:53}
A.aEQ.prototype={
$0(){B.bn(this.a,!1).dm(!1)
return null},
$S:0}
A.aER.prototype={
$0(){B.bn(this.a,!1).dm(!0)
return null},
$S:0}
A.bhb.prototype={
$0(){var w=this.a.aI(0,$.xl().ghP(),x.V),v=E.aEO()
w.wz(0,v)
return v},
$S:0}
A.bhc.prototype={
$0(){var w=this.a.aI(0,$.xl().ghP(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lJ(B.bQ(B.aX(v),1,1,0,0,0,0),v)
w.wz(0,u)
return u},
$S:0}
A.bhd.prototype={
$0(){return this.a.IG(this.b,this.c)},
$S:0}
A.bha.prototype={
$2(d,e){return new B.oM(B.V(d).aQ1(B.V(d).ax.aQW(C.j,C.l)),e,null)},
$S:1008}
A.bn3.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dy(),s=A.O2(!1,C.nS,"Umsatz 7 %",t.ar(u.a),w),r=A.O2(!1,C.nS,"Umsatz 19 %",t.ar(u.b),w),q=A.O2(!0,D.a9D,"Umsatz netto",t.ar(u.c),w),p=A.O2(!1,D.a9C,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5G(1.7,B.b([s,r,q,p,A.O2(!0,C.xU,"Ergebnis",n,o<0?C.av:C.aC),A.O2(!1,C.fO,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jS,!0)},
$S:95}
A.aK1.prototype={
$0(){return D.at3},
$S:133}
A.aK0.prototype={
$2(d,e){var w=null
return B.bA(C.av,B.k("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.j,13,C.m),w,w,w),C.eE,w,C.E,w,3)},
$S:283}
A.aK_.prototype={
$1(d){return new A.I9(d,null)},
$S:z+9}
A.beD.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dy(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("au.E"),d=B.Q(new B.ab(g,new A.bes(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.bet(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.beu(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.ab(g,new A.bev(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.ab(g,new A.bew(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.ab(g,new A.bex(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.ab(g,new A.bey(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.bez(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.beA(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.beB(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.ab(g,new A.beC(j),f),e)
return B.a5G(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jS,!0)},
$S:95}
A.bes.prototype={
$1(d){return d.b},
$S:z+0}
A.bet.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beu.prototype={
$1(d){return d.d},
$S:z+0}
A.bev.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bew.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bex.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bey.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bez.prototype={
$1(d){return d.d},
$S:z+0}
A.beA.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.beB.prototype={
$1(d){return this.a},
$S:z+0}
A.beC.prototype={
$1(d){return this.a},
$S:z+0}
A.beE.prototype={
$0(){return A.byA(this.b,1.45,new A.TE(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.beF.prototype={
$0(){return A.byA(this.b,1.6,new A.TP(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqY.prototype={
$1(d){var w=this,v=null,u=B.aQ(16),t=x.p,s=B.b([B.aq(B.b([B.aD(B.k(w.a,v,v,v,B.c2(C.j,18,C.q),v,v,v),1),B.fL(v,v,D.aci,v,v,new A.bqX(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.L(s,B.b([B.k(w.b,v,v,v,B.E(C.t,12,C.aI),v,v,v),C.U],t))
s.push(C.v)
s.push(B.cd(new B.mB(w.c,w.d,v),v,17976931348623157e292))
return B.a4d(v,C.B,new B.ah(C.ai,B.ag(s,C.C,v,C.f,C.M),v),v,v,v,C.fL,C.uI,v,new B.d9(u,C.I),v)},
$S:1009}
A.bqX.prototype={
$0(){return B.bn(this.a,!1).fc()},
$S:0}
A.beG.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byA(this.b,2.4,new A.XY(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bmC.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bmD.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bmE.prototype={
$1(d){return A.aKc(null,1.4,null,C.av,0.35,D.ag7,D.DV,null,!1,!1,!1,!1,D.Ff,!1,10,D.XY,!0,C.lx,B.b([new A.ex(0,d),new A.ex(this.a,d)],x.U))},
$S:z+14}
A.b5l.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5n.prototype={
$2(d,e){var w=null
return B.k(this.a.aKO(d),w,w,w,B.E(C.t,10,C.P),w,w,w)},
$S:z+16}
A.b5o.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.A5
return new B.ah(C.hT,B.k(C.c.cO(this.a[v].a,5),w,w,w,B.E(C.t,9,C.P),w,w,w),w)},
$S:z+6}
A.b5m.prototype={
$1(d){return D.a8c},
$S:z+7}
A.b68.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b69.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6a.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b6b.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.A5
return new B.ah(C.hT,B.k(this.a[v],w,w,w,B.E(C.j,12,C.q),w,w,w),w)},
$S:z+6}
A.bfa.prototype={
$1(d){return d.d},
$S:z+19}
A.bfb.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bok.prototype={
$1(d){return d.d},
$S:z+20}
A.bol.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3R.prototype={
$0(){return D.atb},
$S:133}
A.b3Q.prototype={
$2(d,e){return new A.wF("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b3P.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ag(B.b([B.k("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.j,14,C.P),m,m,m),C.U,B.k("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.t,12.5,C.m),m,m,m),C.v,B.mn(C.cD,B.b([B.i5(C.EQ,D.aGx,new A.b3J(w,v),m),B.i5(D.abm,D.aFq,new A.b3K(w,v),m)],u),C.e9,8,8)],u),C.C,m,C.f,C.h),C.af,m,C.E,m,3)}w=new A.b3S(d)
t=C.b.fK(n.a.e.d,0,new A.b3L())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iV(new A.b3M(new A.b3T(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ag(B.b([w,C.U,B.aq(B.b([B.aD(B.k("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.t,11,C.m),m,m,m),1),B.oK(D.acw,D.aFM,new A.b3N(q,p),m),B.oK(D.ac7,D.aFz,new A.b3O(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.ac,m,C.f,C.h)},
$S:269}
A.b3J.prototype={
$0(){return A.auL(this.a,this.b,null)},
$S:0}
A.b3K.prototype={
$0(){return A.auI(this.a,this.b)},
$S:0}
A.b3S.prototype={
$1(d){var w=B.b0(J.a3(this.a,d))
return w==null?null:w},
$S:1010}
A.b3T.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:32}
A.b3L.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3M.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b1(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dy()
v=u.ar(v)
return B.a5G(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.jS,!0)},
$S:95}
A.b3N.prototype={
$0(){return A.auI(this.a,this.b)},
$S:0}
A.b3O.prototype={
$0(){return A.auL(this.a,this.b,this.c)},
$S:0}
A.bqW.prototype={
$1(d){return new A.Be(this.a,new A.bqV(this.b),this.c,null)},
$S:z+22}
A.bqV.prototype={
$0(){var w=this.a,v=$.buu()
if(w.e==null)B.S(B.a_(y.b))
w.gcv().cs(v)},
$S:0}
A.b3D.prototype={
$0(){},
$S:0}
A.b3E.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3F.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3H.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.j(B.ud(u.b,B.bQ(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3G(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3G.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3I.prototype={
$0(){return B.bn(this.a,!1).fc()},
$S:0}
A.b3U.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3V.prototype={
$1(d){return new A.xz(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axq.prototype={
$1(d){return d.e},
$S:z+27}
A.axr.prototype={
$2(d,e){return d+e},
$S:44}
A.axt.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axv.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axw.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.adQ(v.d,v.e)},
$S:0}
A.ax8.prototype={
$1(d){return 0},
$S:1011}
A.ax7.prototype={
$2(d,e){return B.fl(C.bW,this.a.aly(e),C.o,C.bv,null)},
$S:1012}
A.aZd.prototype={
$1(d){return d.a},
$S:z+31}
A.aZe.prototype={
$1(d){return d.b},
$S:z+32}
A.aZf.prototype={
$1(d){return new A.jV(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZg.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mA||v===D.dJ))t=1-t
return new A.jV(d,t*w.d)},
$S:z+34}
A.aZh.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.ajA(Math.abs(s.b-s.c)))
t=""}if(C.c.hK(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nU(d,q.c.b.$2(p,new A.ts(u+t,s.e)))},
$S:z+35}
A.aUo.prototype={
$1(d){this.a.l7(new A.a53(d))},
$S:173}
A.aUp.prototype={
$1(d){this.a.l7(new A.a54(d))},
$S:40}
A.aUq.prototype={
$1(d){this.a.l7(new A.a55(d))},
$S:29}
A.aUr.prototype={
$0(){this.a.l7(D.a1i)},
$S:0}
A.aUs.prototype={
$1(d){this.a.l7(new A.MP())},
$S:43}
A.aUt.prototype={
$1(d){this.a.l7(new A.a58(d))},
$S:46}
A.aUu.prototype={
$0(){this.a.l7(D.a1j)},
$S:0}
A.aUv.prototype={
$1(d){this.a.l7(new A.MS(d))},
$S:93}
A.aUw.prototype={
$1(d){this.a.l7(new A.a52(d))},
$S:171}
A.aUx.prototype={
$1(d){this.a.l7(new A.a51(d))},
$S:170}
A.aUy.prototype={
$1(d){return this.a.l7(new A.MN(d))},
$S:169}
A.aUz.prototype={
$1(d){return this.a.l7(new A.a56(d))},
$S:65}
A.aUA.prototype={
$1(d){return this.a.l7(new A.MQ(d))},
$S:51}
A.beR.prototype={
$1(d){var w=this.a.db.h(0,C.b.hu(this.b.ch,d))
return d.aQB(w==null?B.b([],x.t):w)},
$S:z+37}
A.beP.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.beQ.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fQ(w,new A.beO())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gn(w))},
$S:0}
A.beO.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.beS.prototype={
$1(d){return new A.zb(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKd.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.brD.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bDp(t?A.byl(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tt(w,new A.yp(!0,A.bza(),new A.brC(v)))},
$S:z+41}
A.brC.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bSd(A.byl(d,e,f),w,A.c05(d,e,f))},
$S:z+42}
A.brA.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dm:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rw(C.d.j(d.b),w)},
$S:z+43}
A.aKf.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKg.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aKk.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aKi.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aKj.prototype={
$0(){this.a.adQ(this.b,this.c)},
$S:0}
A.aKl.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.axj.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.axk.prototype={
$2(d,e){return d+e},
$S:44}
A.axn.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ad(v).i("iX<1>")).aB(0,new A.axo(w,this.a/(u+1),this.c))},
$S:0}
A.axo.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.axl.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.axm.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHh.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1013}
A.aAz.prototype={
$1(d){return d},
$S:1014};(function aliases(){var w=A.KA.prototype
w.a_Y=w.i8
w.alS=w.aSj
w.alT=w.adJ
w=A.Tf.prototype
w.aou=w.l
w=A.KK.prototype
w.a_Z=w.i8
w=A.FW.prototype
w.a0I=w.YQ})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3D","bSa",72)
var q
v(q=A.Th.prototype,"gaEF","aEG",23)
v(q,"gaDG","HW",4)
v(q,"gaEo","I7",4)
u(A.Ti.prototype,"gasn","aso",25)
t(A,"c2s",3,null,["$3"],["bPs"],49,0)
t(A,"c2t",3,null,["$3"],["bPt"],50,0)
t(A,"c2u",3,null,["$3"],["bPu"],51,0)
t(A,"c2w",4,null,["$4"],["c3g"],52,0)
w(A,"c2v","c3f",53)
s(A,"byF","c3h",54)
t(A,"c2n",3,null,["$3"],["bSe"],55,0)
w(A,"a_5","c5I",56)
w(A,"auN","c3k",7)
t(A,"c2p",3,null,["$3"],["bT_"],57,0)
t(A,"c2r",3,null,["$3"],["bYe"],58,0)
t(A,"c2o",3,null,["$3"],["bSZ"],59,0)
t(A,"c2q",3,null,["$3"],["bYd"],60,0)
w(A,"cd3","bSY",61)
w(A,"cd4","bYc",62)
r(A.XN.prototype,"ga4m","axX",30)
u(A.VB.prototype,"gazf","azg",36)
t(A,"c4y",3,null,["$3"],["bTr"],63,0)
t(A,"c4x",3,null,["$3"],["bPv"],64,0)
w(A,"c4B","c5J",1)
t(A,"bK0",4,null,["$5$size","$4"],["bIq",function(d,e,f,g){return A.bIq(d,e,f,g,null)}],65,0)
s(A,"bza","c5H",66)
s(A,"bK1","c2a",67)
s(A,"bK4","c3n",68)
s(A,"bK3","c3j",3)
s(A,"bK2","c3i",3)
w(A,"c4A","bJC",70)
w(A,"c4z","bJB",71)
t(A,"a_b",3,null,["$3"],["c4v"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.W,[A.a6E,A.agg,A.alr,A.IH,A.J7,A.age,A.HQ,A.I9,A.akM,A.am_,A.Uq,A.XY,A.TE,A.TP,A.amt,A.aiR,A.Cc,A.asc,A.wF,A.KB,A.AI])
u(B.C,[A.uP,A.E9,A.bf,A.ahn,A.ahd,A.ahf,A.ahg,A.ah5,A.akw,A.ahj,A.ahh,A.axF,A.asg,A.axs,A.ahe,A.KK,A.a5H,A.ts,A.aqE,A.aqD,A.ah4,A.akv,A.ex,A.aks,A.aku,A.aoL,A.ali,A.asW,A.akt,A.akb,A.akr,A.ax6,A.beM,A.ax9,A.ah1,A.nU,A.ako,A.akp,A.vA,A.hl,A.am7,A.ama,A.aha,A.aho,A.ahb,A.akq,A.amd,A.amb,A.asf,A.aqC,A.aKe,A.am9,A.vl,A.a19,A.amk,A.a1j,A.b1I])
u(B.uN,[A.qk,A.vp,A.wm,A.aA_,A.aB4,A.ob,A.CK,A.oc])
u(B.o_,[A.aEL,A.aEM,A.aEN,A.aF3,A.brO,A.brP,A.btB,A.brQ,A.brN,A.brM,A.aET,A.aEZ,A.aES,A.aK_,A.bes,A.bet,A.beu,A.bev,A.bew,A.bex,A.bey,A.bez,A.beA,A.beB,A.beC,A.bqY,A.bmE,A.b5m,A.b68,A.b69,A.bfa,A.bok,A.b3P,A.b3S,A.b3T,A.bqW,A.b3V,A.axq,A.axt,A.ax8,A.aZd,A.aZe,A.aZf,A.aZg,A.aZh,A.aUo,A.aUp,A.aUq,A.aUs,A.aUt,A.aUv,A.aUw,A.aUx,A.aUy,A.aUz,A.aUA,A.beR,A.beS,A.aKd,A.brD,A.brC,A.brA,A.aKf,A.aKg,A.axj,A.aAz])
t(A.yn,B.fz)
u(B.xP,[A.aEK,A.aEJ,A.aF1,A.aEU,A.aEV,A.aEW,A.aEX,A.aEY,A.aF0,A.aEQ,A.aER,A.bhb,A.bhc,A.bhd,A.aK1,A.beE,A.beF,A.bqX,A.beG,A.b3R,A.b3J,A.b3K,A.b3N,A.b3O,A.bqV,A.b3D,A.b3E,A.b3F,A.b3H,A.b3G,A.b3I,A.b3U,A.axw,A.aUr,A.aUu,A.beP,A.beQ,A.aKi,A.aKj,A.axn])
u(B.xX,[A.yo,A.anF,A.a6F,A.ah9])
u(B.xQ,[A.aF_,A.bha,A.bn3,A.aK0,A.beD,A.bmC,A.bmD,A.b5l,A.b5n,A.b5o,A.b6a,A.b6b,A.bfb,A.bol,A.b3Q,A.b3L,A.b3M,A.axr,A.axv,A.ax7,A.beO,A.aKk,A.aKl,A.axk,A.axo,A.axl,A.axm,A.aHh])
u(B.N,[A.Be,A.Rj])
u(B.a0,[A.Th,A.XN])
u(B.Nz,[A.KG,A.Oe])
u(B.ul,[A.Ti,A.VB])
t(A.a0K,A.ahn)
t(A.ah0,A.a0K)
t(A.a0u,A.ah0)
u(A.a0u,[A.ahc,A.am8])
t(A.nV,A.ahc)
u(B.HP,[A.axh,A.adJ,A.D0,A.aE_,A.aK2,A.Ni])
t(A.fG,A.ahd)
t(A.io,A.ahf)
t(A.mC,A.ahg)
t(A.a0B,A.ah5)
t(A.MT,A.akw)
u(A.MT,[A.ahi,A.amc])
t(A.a0G,A.ahi)
t(A.a0H,A.ahj)
t(A.D1,A.ahh)
u(A.axF,[A.KH,A.Og])
t(A.adL,A.asg)
t(A.ahk,A.adL)
t(A.a0I,A.ahk)
u(B.b7,[A.xz,A.zb])
t(A.ur,A.ahe)
t(A.KA,A.KK)
u(A.KA,[A.axu,A.aKh])
u(B.Oa,[A.a0E,A.a6S])
u(B.J,[A.FW,A.ah2])
u(A.FW,[A.aaR,A.ab3])
t(A.q9,A.aqE)
t(A.aci,A.aqD)
t(A.pf,A.ah4)
t(A.uR,A.akv)
t(A.yq,A.aks)
t(A.pC,A.aku)
t(A.PT,A.aoL)
t(A.mY,A.ali)
t(A.nq,A.asW)
u(A.pC,[A.alh,A.asV])
t(A.kS,A.alh)
t(A.lf,A.asV)
t(A.a50,A.akt)
u(A.a50,[A.alg,A.asU])
t(A.a5S,A.alg)
t(A.ae7,A.asU)
t(A.MF,A.akb)
t(A.uQ,A.akr)
t(A.MM,A.uQ)
t(A.acj,B.h5)
t(A.ah3,A.ah2)
t(A.Tf,A.ah3)
t(A.a0v,A.Tf)
t(A.jV,A.ah1)
t(A.a4Y,A.ako)
t(A.a5_,A.akp)
u(A.hl,[A.a53,A.a54,A.a55,A.MO,A.MP,A.a58,A.MR,A.MS,A.a52,A.a51,A.MN,A.a56,A.a57,A.MQ])
t(A.pM,A.am8)
t(A.e8,A.am7)
t(A.Of,A.ama)
t(A.a0D,A.aha)
t(A.mD,A.aho)
t(A.KF,A.ahb)
t(A.yp,A.akq)
t(A.EN,A.amc)
t(A.a6T,A.amd)
t(A.am6,A.ex)
t(A.n3,A.am6)
t(A.qi,A.n3)
t(A.rw,A.amb)
t(A.tt,A.asf)
t(A.Gn,A.aqC)
t(A.zc,A.am9)
t(A.zh,A.amk)
w(A.ah5,A.bf)
w(A.ahc,A.bf)
w(A.ahd,A.bf)
w(A.ahf,A.bf)
w(A.ahg,A.bf)
w(A.ahh,A.bf)
w(A.ahi,A.bf)
w(A.ahj,A.bf)
w(A.ahk,A.bf)
w(A.ahe,A.bf)
w(A.ah0,A.bf)
w(A.ah4,A.bf)
w(A.akb,A.bf)
w(A.akr,A.bf)
w(A.aks,A.bf)
w(A.aku,A.bf)
w(A.akv,A.bf)
w(A.alh,A.bf)
w(A.alg,A.bf)
w(A.ali,A.bf)
w(A.aoL,A.bf)
w(A.aqD,A.bf)
w(A.aqE,A.bf)
w(A.asg,A.bf)
w(A.asV,A.bf)
w(A.asU,A.bf)
w(A.asW,A.bf)
w(A.ah1,A.bf)
v(A.ah2,B.aA)
w(A.ah3,B.e4)
v(A.Tf,B.a3X)
w(A.ahn,A.bf)
w(A.ako,A.bf)
w(A.akp,A.bf)
w(A.akw,A.bf)
w(A.aha,A.bf)
w(A.ahb,A.bf)
w(A.aho,A.bf)
w(A.akq,A.bf)
w(A.akt,A.bf)
w(A.am6,A.bf)
w(A.am7,A.bf)
w(A.am8,A.bf)
w(A.ama,A.bf)
w(A.amb,A.bf)
w(A.amc,A.bf)
w(A.amd,A.bf)
w(A.aqC,A.bf)
w(A.asf,A.bf)
w(A.am9,A.bf)
w(A.amk,A.bf)})()
B.boy(b.typeUniverse,JSON.parse('{"a6E":{"W":[],"c":[]},"E9":{"aEP":[]},"yn":{"fz":["bb<~>"],"fz.T":"bb<~>"},"J7":{"W":[],"c":[]},"HQ":{"W":[],"c":[]},"yo":{"bj":[],"N":[],"c":[]},"agg":{"W":[],"c":[]},"alr":{"W":[],"c":[]},"anF":{"bj":[],"N":[],"c":[]},"IH":{"W":[],"c":[]},"age":{"W":[],"c":[]},"I9":{"W":[],"c":[]},"wF":{"W":[],"c":[]},"Be":{"N":[],"c":[]},"a6F":{"bj":[],"N":[],"c":[]},"akM":{"W":[],"c":[]},"am_":{"W":[],"c":[]},"Uq":{"W":[],"c":[]},"XY":{"W":[],"c":[]},"TE":{"W":[],"c":[]},"TP":{"W":[],"c":[]},"amt":{"W":[],"c":[]},"aiR":{"W":[],"c":[]},"Cc":{"W":[],"c":[]},"asc":{"W":[],"c":[]},"ah9":{"bj":[],"N":[],"c":[]},"Th":{"a0":["Be"]},"KG":{"N":[],"c":[]},"Ti":{"a0":["KG"]},"nV":{"bf":[]},"fG":{"bf":[]},"io":{"bf":[]},"mC":{"bf":[]},"D1":{"bf":[]},"xz":{"b7":["nV"],"b4":["nV"],"b4.T":"nV","b7.T":"nV"},"a0B":{"bf":[]},"a0G":{"bf":[]},"a0H":{"bf":[]},"a0I":{"bf":[]},"ur":{"bf":[]},"a0E":{"aV":[],"c":[]},"aaR":{"J":[],"L":[],"jy":[],"aS":[]},"pC":{"bf":[]},"mY":{"bf":[]},"nq":{"bf":[]},"kS":{"bf":[]},"lf":{"bf":[]},"uQ":{"bf":[]},"a0u":{"bf":[]},"q9":{"bf":[]},"aci":{"bf":[]},"pf":{"bf":[]},"uR":{"bf":[]},"yq":{"bf":[]},"adL":{"bf":[]},"PT":{"bf":[]},"a5S":{"bf":[]},"ae7":{"bf":[]},"MF":{"bf":[]},"MM":{"bf":[]},"KB":{"W":[],"c":[]},"Rj":{"N":[],"c":[]},"XN":{"a0":["Rj"]},"jV":{"bf":[]},"acj":{"h5":[],"aV":[],"c":[]},"a0v":{"e4":["J","hm"],"J":[],"aA":["J","hm"],"L":[],"aS":[],"aA.1":"hm","e4.1":"hm","aA.0":"J"},"AI":{"W":[],"c":[]},"a0K":{"bf":[]},"a4Y":{"bf":[]},"MT":{"bf":[]},"a5_":{"bf":[]},"a53":{"hl":[]},"a54":{"hl":[]},"a55":{"hl":[]},"MO":{"hl":[]},"MP":{"hl":[]},"a58":{"hl":[]},"MR":{"hl":[]},"MS":{"hl":[]},"a52":{"hl":[]},"a51":{"hl":[]},"MN":{"hl":[]},"a56":{"hl":[]},"a57":{"hl":[]},"MQ":{"hl":[]},"FW":{"J":[],"L":[],"jy":[],"aS":[]},"Oe":{"N":[],"c":[]},"VB":{"a0":["Oe"]},"pM":{"bf":[]},"e8":{"bf":[]},"mD":{"bf":[]},"n3":{"ex":[],"bf":[]},"qi":{"n3":[],"ex":[],"bf":[]},"rw":{"bf":[]},"tt":{"bf":[]},"Gn":{"bf":[]},"zb":{"b7":["pM"],"b4":["pM"],"b4.T":"pM","b7.T":"pM"},"Of":{"bf":[]},"a0D":{"bf":[]},"KF":{"bf":[]},"yp":{"bf":[]},"a50":{"bf":[]},"EN":{"bf":[]},"a6T":{"bf":[]},"zc":{"bf":[]},"a6S":{"aV":[],"c":[]},"ab3":{"J":[],"L":[],"jy":[],"aS":[]},"zh":{"bf":[]}}'))
B.bHU(b.typeUniverse,JSON.parse('{"KA":1,"MT":1,"KK":1,"FW":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.at
return{_:w("CK"),e:w("bb<ob>"),aN:w("bb<oc>"),fM:w("bb<a2<f,@>?>"),b:w("bb<~>"),W:w("jV"),B:w("nV"),dB:w("fG"),gF:w("ur"),fj:w("io"),G:w("mC"),bO:w("mD"),k:w("av"),C:w("a1j<F>"),dO:w("uy"),R:w("a4<f,@>"),g:w("hG"),bz:w("lE<b9>"),f0:w("o4"),E:w("bf"),F:w("yn"),X:w("ob"),P:w("lJ"),D:w("uP"),a:w("aEP"),d:w("oc"),cw:w("ex"),L:w("hm"),m:w("di<v,D>"),cm:w("kS"),dv:w("mY"),M:w("B<nU>"),I:w("B<bC0>"),O:w("B<fG>"),Y:w("B<io>"),U:w("B<ex>"),K:w("B<a5H>"),u:w("B<e8>"),bC:w("B<vl>"),aA:w("B<u<ex>>"),v:w("B<ea>"),r:w("B<Gn>"),s:w("B<f>"),eg:w("B<tp>"),df:w("B<qi>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bi<a0<N>>"),Z:w("n3"),cz:w("e8"),hf:w("pM"),dj:w("zc"),fT:w("rw"),c_:w("ir<oZ<bb<~>>>"),x:w("zh<fG>"),y:w("zh<e8>"),J:w("u<v>"),ef:w("vp"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k6"),aU:w("C"),Q:w("vA<nV>"),o:w("vA<pM>"),dc:w("ea"),eo:w("pZ"),gJ:w("q_"),V:w("nj<lJ>"),N:w("f"),A:w("nk"),bP:w("bI"),er:w("tp"),j:w("wm"),dw:w("qi"),bY:w("tt"),cZ:w("qk"),gc:w("ig"),es:w("lf"),bN:w("nq"),l:w("c"),q:w("wY"),g4:w("ii<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xz?"),f3:w("zb?"),T:w("u<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("C?"),aD:w("ig?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B_=new B.p9(C.l,B.at("p9<D>"))
D.B6=new A.D0(0,"left")
D.mA=new A.D0(1,"top")
D.B7=new A.D0(2,"right")
D.dJ=new A.D0(3,"bottom")
D.awY=new A.q9(!1,A.byF(),22,null)
D.kt=new A.pf(16,null,D.awY,!0)
D.a8d=new A.pC(C.D,null,2,null)
D.vQ=new A.KF(!1,D.a8d,A.c4B(),!0)
D.a_s=new A.axh(3,"spaceEvenly")
D.a_B=new B.xD(6,"dstIn")
D.Xe=new B.aT(3,3)
D.Ba=new B.d5(D.Xe,D.Xe,C.a2,C.a2)
D.a_M=new B.bl(C.D,0,C.V,-1)
D.BK=new A.a5_()
D.a1i=new A.MO()
D.a1j=new A.MR()
D.aO8=new A.aci()
D.al2=w([],B.at("B<kS>"))
D.al3=w([],B.at("B<lf>"))
D.DR=new A.MF(D.al2,D.al3,!0)
D.a7Y=new B.eq("Zeitraum",!1,null)
D.a81=new B.eq("Konten (SKR 03)",!1,null)
D.xF=new A.aE_(0,"center")
D.aOl=new A.yp(!0,A.bza(),A.bK0())
D.DV=new A.yp(!1,A.bza(),A.bK0())
D.DW=new A.yq(!1,!0,null,A.auN(),A.a_5(),!0,null,A.auN(),A.a_5())
D.aOm=new A.yq(!0,!0,null,A.auN(),A.a_5(),!0,null,A.auN(),A.a_5())
D.a3A=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3m=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a3K=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a3E=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a37=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a36=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a43=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a3u=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a46=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a40=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.ar7=new B.di([50,D.a3A,100,D.a3m,200,D.a3K,300,D.a3E,400,D.a37,500,D.a36,600,D.a43,700,D.a3u,800,D.a46,900,D.a40],x.m)
D.dm=new B.rD(D.ar7,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ah9=w([8,4],x.t)
D.a8b=new A.pC(D.dm,null,0.4,D.ah9)
D.a8c=new A.pC(C.am,null,0.5,null)
D.fM=new A.ex(0/0,0/0)
D.ax_=new A.q9(!0,A.byF(),44,null)
D.mB=new A.pf(16,null,D.ax_,!0)
D.awZ=new A.q9(!0,A.byF(),30,null)
D.mC=new A.pf(16,null,D.awZ,!0)
D.a8e=new A.uR(!1,D.mB,D.mC,D.mB,D.mC)
D.aOn=new A.uR(!0,D.mB,D.mC,D.mB,D.mC)
D.E3=new A.Ni(0,"left")
D.a8P=new A.Ni(1,"center")
D.E4=new A.Ni(2,"right")
D.a8T=new B.a8(57495,"MaterialIcons",null,!1)
D.xX=new B.a8(58927,"MaterialIcons",null,!1)
D.a9C=new B.a8(59005,"MaterialIcons",null,!0)
D.a9D=new B.a8(59007,"MaterialIcons",null,!0)
D.a9E=new B.a8(59011,"MaterialIcons",null,!1)
D.aaA=new B.a8(62589,"MaterialIcons",null,!1)
D.a9U=new B.a8(61349,"MaterialIcons",null,!1)
D.ab3=new B.aK(D.a9U,20,C.j,null,null)
D.aa0=new B.a8(61487,"MaterialIcons",null,!1)
D.abl=new B.aK(D.aa0,18,null,null,null)
D.abm=new B.aK(D.xX,18,null,null,null)
D.abZ=new B.aK(C.nJ,null,C.t,null,null)
D.ac7=new B.aK(C.nO,16,null,null,null)
D.acf=new B.aK(C.EE,16,null,null,null)
D.aci=new B.aK(C.i_,null,C.j,null,null)
D.aay=new B.a8(62584,"MaterialIcons",null,!1)
D.acq=new B.aK(D.aay,16,null,null,null)
D.acw=new B.aK(D.xX,16,null,null,null)
D.a95=new B.a8(57912,"MaterialIcons",null,!1)
D.acA=new B.aK(D.a95,null,C.av,null,null)
D.aey=new A.a6F(null)
D.aOs=new A.aK2(0,"horizontal")
D.ye=new A.zc(0,0,0,0,!1)
D.Ff=new A.Of(0.5)
D.BQ=new A.a6T()
D.aeC=new A.EN(D.BQ,A.bK4(),10,A.bK1(),!0,A.bK3(),A.bK2(),!1,null,null,null)
D.aOu=new A.EN(D.BQ,A.bK4(),10,A.bK1(),!0,A.bK3(),A.bK2(),!0,null,null,null)
D.ag7=w([4,3],x.t)
D.ave=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.av4=new B.aG("receivables","Forderungen (kurzfristig)")
D.auU=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.auS=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auI=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.auN=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avb=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.av3=new B.aG("equity","Eigenkapital")
D.pq=w([D.ave,D.av4,D.auU,D.auS,D.auI,D.auN,D.avb,D.av3],B.at("B<+(f,f)>"))
D.aOw=w([],x.M)
D.akP=w([],x.O)
D.akQ=w([],x.Y)
D.akR=w([],B.at("B<mC>"))
D.akS=w([],B.at("B<mD>"))
D.aOx=w([],x.U)
D.aOy=w([],x.u)
D.akT=w([],x.r)
D.arJ={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SP={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.a4(D.SP,[0,0,0,0,0,0,0,C.cc],B.at("a4<f,C>"))
D.arH={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ar1=new B.a4(D.arH,[0,0,0,0],B.at("a4<f,v>"))
D.arY={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoE=new B.a4(D.arY,[0,0,0,0,null,null,null,null],B.at("a4<f,v?>"))
D.aoz=new B.a4(D.arJ,[D.yT,D.yT,D.yT,C.cc,C.cc,C.cc,D.ar1,D.aoE],x.R)
D.aoP=new B.a4(D.SP,[0,0,0,0,0,0,0,C.cA],x.R)
D.arK={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoR=new B.a4(D.arK,[8500,1200,3400,300,22e3,4200,9000,22200],B.at("a4<f,F>"))
D.arG={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ar2=new B.a4(D.arG,[0,0,0,0,0,0,0,C.cA],x.R)
D.as8={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar3=new B.a4(D.as8,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.at("a4<f,f>"))
D.a4b=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4j=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3a=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a3w=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a3G=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a4w=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a2W=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a3y=new B.D(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a3J=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a41=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.ar8=new B.di([50,D.a4b,100,D.a4j,200,D.a3a,300,D.a3w,400,D.a3G,500,D.a4w,600,D.a2W,700,D.a3y,800,D.a3J,900,D.a41],x.m)
D.SE=new B.rD(D.ar8,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a7q=new B.ak(32,32,32,32)
D.at3=new B.ah(D.a7q,C.bC,null)
D.a7s=new B.ak(48,48,48,48)
D.at5=new B.ah(D.a7s,C.bC,null)
D.atb=new B.ah(C.ai,C.bC,null)
D.al4=w([],B.at("B<mY>"))
D.al5=w([],B.at("B<nq>"))
D.Xf=new A.PT(D.al4,D.al5)
D.avX=new B.fw("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avY=new B.fw("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aw0=new B.fw("Automaten-Business","Umsatz je Automat",null,null)
D.aw2=new B.fw("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aw4=new B.fw("Top","Meistverkaufte Produkte",null,null)
D.aw8=new B.fw("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aw9=new B.fw("Kennzahlen","Rentabilit\xe4t",null,null)
D.XY=new B.t9(C.F,C.p,0)
D.aEo=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayz=new B.dV(D.aEo,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGl=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayC=new B.dV(D.aGl,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aEz=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayD=new B.dV(D.aEz,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aGf=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayF=new B.dV(D.aGf,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFJ=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayG=new B.dV(D.aFJ,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aFG=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.az_=new B.dV(D.aFG,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.o,null)
D.aOI=new B.P(!0,C.D,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEx=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEI=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFq=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFz=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFM=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGx=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zb=new A.adJ(0,"auto")
D.aH3=new A.adJ(1,"top")
D.aLk=new A.wF("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLl=new A.wF("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdv","bOh",()=>B.iZ(new A.brO(),x.D))
w($,"cdw","avo",()=>B.iZ(new A.brP(),x.a))
w($,"ces","xl",()=>B.bxj(new A.btB(),x.P))
w($,"cdx","buv",()=>C.aH.$1$1(new A.brQ(),x.d))
w($,"cdu","bOg",()=>C.aH.$1$1(new A.brN(),x.X))
w($,"cdt","buu",()=>C.aH.$1$1(new A.brM(),x.h))
w($,"cds","but",()=>B.b_3(A.c3D(),x.F,x.b))
w($,"c6t","bu_",()=>new A.ax6())
v($,"c9M","lw",()=>new A.b1I())})()};
(a=>{a["2uDD3usyQhTfOeYe2knPVSnk53k="]=a.current})($__dart_deferred_initializers__);