((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oo(d,e,f,g,h){return new A.a7s(f,g,d,h,e,null)},
a7s:function a7s(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uY:function uY(d){this.a=d},
Ei:function Ei(d){this.a=d},
bUk(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zd
w=x.f
v=x.N
u=x.z
t=A.aFZ(B.d2(w.a(e.h(a0,"current")),v,u))
s=A.aFZ(B.d2(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFZ(B.d2(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c_
p=J.cT(p,new A.aFH(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c_
o=J.cT(o,new A.aFI(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c_
q=J.cT(q,new A.aFJ(),x.j)
q=B.Q(q,q.$ti.i("au.E"))
n=B.d2(w.a(e.h(a0,"customer")),v,u)
m=B.ba(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p8(n.h(0,"app_gross"))
k=B.ba(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p8(n.h(0,"avg_basket"))
u=B.d2(w.a(e.h(a0,"derived")),v,u)
v=A.p8(u.h(0,"gross_margin_pct"))
e=A.p8(u.h(0,"net_margin_pct"))
w=A.p8(u.h(0,"ebitda_margin_pct"))
j=A.p8(u.h(0,"cashflow_operating"))
i=A.btu(u.h(0,"revenue_growth_yoy_pct"))
h=A.btu(u.h(0,"revenue_growth_mom_pct"))
g=A.btu(u.h(0,"result_growth_yoy_pct"))
u=A.btu(u.h(0,"result_growth_mom_pct"))
f=B.ba(J.a3(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.od(t,s,r,p,o,q,new A.aB5(m,l,k,n),new A.aCd(v,e,w,j,i,h,g,u),f)},
p8(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jw(J.am(d))
return w==null?0:w},
btu(d){if(d==null)return null
if(typeof d=="number")return d
return B.jw(J.am(d))},
qm:function qm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vD:function vD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wz:function wz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aB5:function aB5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCd:function aCd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
od:function od(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFH:function aFH(){},
aFI:function aFI(){},
aFJ:function aFJ(){},
aFZ(d){var w=J.Z(d),v=A.uh(w.h(d,"revenue_net_7")),u=A.uh(w.h(d,"revenue_net_19")),t=A.uh(w.h(d,"revenue_net")),s=A.uh(w.h(d,"expense_net")),r=A.uh(w.h(d,"result_net")),q=A.uh(w.h(d,"vat_collected")),p=A.uh(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.c_
w=J.cT(w,new A.aG_(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.oe(v,u,t,s,r,q,p,w)},
uh(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jw(J.am(d))
return w==null?0:w},
CQ:function CQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oe:function oe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aG_:function aG_(){},
bUj(d){return new A.yx(d,new B.ip(x.c_),C.dN)},
bui:function bui(){},
buj:function buj(){},
bwc:function bwc(){},
buk:function buk(){},
buh:function buh(){},
bug:function bug(){},
yx:function yx(d,e,f){this.r=d
this.a=e
this.f=f},
aFG:function aFG(d,e,f){this.a=d
this.b=e
this.c=f},
aFF:function aFF(d,e,f){this.a=d
this.b=e
this.c=f},
bUl(){return new A.yy(null)},
amo(d,e,f,g,h){return new A.amn(e,h,g,f,d,null)},
yy:function yy(d){this.a=d},
aFY:function aFY(d){this.a=d},
aFQ:function aFQ(d,e,f){this.a=d
this.b=e
this.c=f},
aFR:function aFR(d,e,f){this.a=d
this.b=e
this.c=f},
aFS:function aFS(d){this.a=d},
aFP:function aFP(){},
aFT:function aFT(d){this.a=d},
aFU:function aFU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFX:function aFX(){},
aFW:function aFW(){},
aFV:function aFV(){},
aFO:function aFO(d,e){this.a=d
this.b=e},
aFM:function aFM(d){this.a=d},
aFN:function aFN(d){this.a=d},
ah1:function ah1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amn:function amn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aoE:function aoE(d,e){this.e=d
this.a=e},
biC:function biC(d){this.a=d},
biD:function biD(d){this.a=d},
biE:function biE(d,e,f){this.a=d
this.b=e
this.c=f},
biB:function biB(){},
J8:function J8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JA:function JA(d,e){this.c=d
this.a=e},
bpj:function bpj(d){this.a=d},
ah_:function ah_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
If:function If(d,e){this.c=d
this.a=e},
bAX(d,e,f,g,h){var w=null
return B.j8(w,w,!0,w,new A.btp(h,g,e,f),d,w,!0,!0,x.H)},
jJ(d,e,f,g,h,i,j,k,l,m,n){return new A.amV(g,n,i,e,d,m,f,k,l,j,null)},
avL(d,e){return A.c3V(d,e)},
c3V(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avL=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bh(D.ayM)
t=4
o=e.aI(0,$.bX(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hh("finance-balance-sync",B.A(n,n)),$async$avL)
case 7:r=g
q=B.d2(x.f.a(r.a),x.N,n)
l.Mq()
if(J.d(J.a3(q,"configured"),!1)){l.bh(D.ayQ)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bx0()
if(e.e==null)B.S(B.X(y.b))
e.gce().c7(o)
l.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mq()
l.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avL,v)},
avO(d,e,f){var w=0,v=B.q(x.H)
var $async$avO=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j8(null,null,!0,null,new A.btn(f,e,e.aI(0,$.bX(),x.A)),d,null,!0,!0,x.H),$async$avO)
case 2:return B.o(null,v)}})
return B.p($async$avO,v)},
a7t:function a7t(d){this.a=d},
aKS:function aKS(){},
aKR:function aKR(){},
aKQ:function aKQ(){},
Iz:function Iz(d,e){this.c=d
this.a=e},
bfG:function bfG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfv:function bfv(){},
bfw:function bfw(){},
bfx:function bfx(){},
bfy:function bfy(){},
bfz:function bfz(){},
bfA:function bfA(){},
bfB:function bfB(){},
bfC:function bfC(){},
bfD:function bfD(d){this.a=d},
bfE:function bfE(d){this.a=d},
bfF:function bfF(d){this.a=d},
bfH:function bfH(d,e){this.a=d
this.b=e},
bfI:function bfI(d,e){this.a=d
this.b=e},
btp:function btp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bto:function bto(d){this.a=d},
alG:function alG(d){this.a=d},
amV:function amV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfJ:function bfJ(d,e){this.a=d
this.b=e},
V8:function V8(d,e,f){this.c=d
this.d=e
this.a=f},
YM:function YM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bom:function bom(){},
bon:function bon(){},
boo:function boo(d){this.a=d},
Ui:function Ui(d,e,f){this.c=d
this.d=e
this.a=f},
b6h:function b6h(){},
b6j:function b6j(d){this.a=d},
b6k:function b6k(d){this.a=d},
b6i:function b6i(){},
Uz:function Uz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7h:function b7h(){},
b7i:function b7i(){},
b7j:function b7j(){},
b7k:function b7k(d){this.a=d},
anp:function anp(d,e){this.c=d
this.a=e},
bgh:function bgh(){},
bgi:function bgi(){},
ajH:function ajH(d,e){this.c=d
this.a=e},
Ci:function Ci(d,e,f){this.c=d
this.d=e
this.a=f},
ate:function ate(d,e){this.c=d
this.a=e},
bqB:function bqB(){},
bqC:function bqC(){},
wR:function wR(d,e){this.c=d
this.a=e},
ahV:function ahV(d,e){this.e=d
this.a=e},
b4I:function b4I(){},
b4H:function b4H(){},
b4G:function b4G(d,e,f){this.a=d
this.b=e
this.c=f},
b4A:function b4A(d,e){this.a=d
this.b=e},
b4B:function b4B(d,e){this.a=d
this.b=e},
b4J:function b4J(d){this.a=d},
b4K:function b4K(d){this.a=d},
b4C:function b4C(){},
b4D:function b4D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4E:function b4E(d,e){this.a=d
this.b=e},
b4F:function b4F(d,e,f){this.a=d
this.b=e
this.c=f},
btn:function btn(d,e,f){this.a=d
this.b=e
this.c=f},
btm:function btm(d){this.a=d},
Bh:function Bh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TV:function TV(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4u:function b4u(){},
b4v:function b4v(d){this.a=d},
b4w:function b4w(d){this.a=d},
b4y:function b4y(d,e){this.a=d
this.b=e},
b4x:function b4x(d,e){this.a=d
this.b=e},
b4z:function b4z(d){this.a=d},
bh:function bh(){},
bEj(d){return new A.L7(d,C.al,C.bY,null,null)},
L7:function L7(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TW:function TW(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c5$=g
_.c=_.a=null},
b4L:function b4L(d,e){this.a=d
this.b=e},
b4M:function b4M(d){this.a=d},
ayo(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amz:f,p=a0==null?16:a0,o=d==null?D.a0i:d,n=g==null,m=n?A.bxr(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yk:a3
n=n?A.bxr(r,r,r,r,r,r,r,r):g
w=j==null?D.E7:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.J:e
return new A.nW(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C0,s,w,i,n)},
ayv(d,e,f,g,h){var w=d==null?D.amA:d,v=e==null?2:e,u=g==null?C.lu:g
return new A.fG(h,f===!0,w,v,u)},
bRD(d,e,f){var w=d.a
w=C.d.aO(w+(e.a-w)*f)
return A.ayv(A.kB(d.c,e.c,f,A.c4F(),x.fj),B.ad(d.d,e.d,f),!1,A.kB(d.e,e.e,f,A.a03(),x.S),w)},
a1t(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TK
else w=h
v=m==null
u=v?8:m
t=$.lE()
s=t.aXd(f,v?8:m)
t=t.aXe(g,v?8:m)
v=d==null?A.bEh(r,r,r,r,r):d
return new A.il(q,l,w,j,u,s,e,t,v,k==null?D.amB:k)},
bRE(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ad(d.e,e.e,f),q=B.mM(d.f,e.f,f),p=A.kB(d.r,e.r,f,A.a03(),x.S),o=B.bY(d.w,e.w,f),n=B.ad(d.a,e.a,f),m=B.ad(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ad(w.b,v.b,f)
t=B.ad(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a1t(A.bEh(v,u,null,!1,t),p,q,o,s,n,null,A.kB(d.y,e.y,f,A.c4G(),x.G),m,r)},
bRF(d,e,f){var w,v,u=B.ad(d.a,e.a,f)
u.toString
w=B.ad(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mK(u,w,v,B.bY(d.d,e.d,f))},
bEh(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dt
else w=d
return new A.a1p(g===!0,v,u,w,f)},
bxr(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1v(4,C.hP,16,D.xP,0,120,A.c4I(),!1,!1,D.a_g,0,C.I,A.c4H())
else w=k
v=j==null?C.l1:j
return new A.a1u(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5u(d,e,f,g){var w=null,v=B.j0(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D7(C.d.j(f.b),v)},
c5t(d){return A.aAw(D.dt,15)},
nW:function nW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayn:function ayn(d,e){this.a=d
this.b=e},
fG:function fG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayw:function ayw(){},
ayx:function ayx(){},
il:function il(d,e,f,g,h,i,j,k,l,m){var _=this
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
mK:function mK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1p:function a1p(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1u:function a1u(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aet:function aet(d,e){this.a=d
this.b=e},
a1v:function a1v(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
L8:function L8(d){this.a=d},
a1w:function a1w(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xH:function xH(d,e){this.a=d
this.b=e},
ahR:function ahR(){},
ahY:function ahY(){},
ahZ:function ahZ(){},
ai0:function ai0(){},
ai1:function ai1(){},
ai2:function ai2(){},
ai3:function ai3(){},
ai4:function ai4(){},
ai5:function ai5(){},
ayy:function ayy(d){this.a=d},
ayz:function ayz(){},
uD:function uD(d,e,f){this.a=d
this.b=e
this.c=f},
ai_:function ai_(){},
ayA:function ayA(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayB:function ayB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayC:function ayC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6u:function a6u(d){this.b=d},
a1s:function a1s(d,e,f){this.d=d
this.e=e
this.a=f},
abB:function abB(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i7=e
_.cX=f
_.fY=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
c5v(d,e){var w=null
return new A.RS(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ayh(d,e,f){var w,v,u,t=B.ad(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ad(w.c,v.c,f)
u.toString
return new A.pl(t,e.b,new A.qc(v.a,v.b,u,B.ad(w.d,v.d,f)),!0)},
bFH(d,e,f){var w=A.ayh(d.b,e.b,f),v=A.ayh(d.d,e.d,f),u=A.ayh(d.e,e.e,f)
return new A.v_(e.a,w,A.ayh(d.c,e.c,f),v,u)},
bUn(d,e,f){var w,v
if(d.k(0,D.fL))return e
if(e.k(0,D.fL))return d
w=B.ad(d.a,e.a,f)
w.toString
v=B.ad(d.b,e.b,f)
v.toString
return new A.eA(w,v)},
bFF(d,e,f){return new A.yA(e.a,!0,B.ad(d.c,e.c,f),e.d,e.e,e.f,B.ad(d.r,e.r,f),e.w,e.x)},
c7U(d){return!0},
c5y(d){return D.a9T},
bFG(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pG(w,f,g,e)},
bHB(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c4B(),x.dv)
v.toString
w=A.kB(d.b,e.b,f,A.c4D(),x.bN)
w.toString
return new A.Qq(v,w)},
bV9(d,e,f){var w,v,u,t=B.ad(d.a,e.a,f)
t.toString
w=B.ad(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n4(t,w,v,u)},
c_p(d,e,f){var w,v,u,t=B.ad(d.a,e.a,f)
t.toString
w=B.ad(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.ns(t,w,v,u)},
bV8(d,e,f){var w,v,u,t,s,r=B.ad(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pA(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bV6(B.bxj(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ad(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a03(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kT(r,e.f,e.r,t,e.x,u,v,w,s)},
c_o(d,e,f){var w,v,u,t,s,r=B.ad(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pA(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.c_m(B.bxj(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ad(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a03(),x.S)
if(u==null)u=v==null?C.E:null
return new A.ll(r,e.f,e.r,t,e.x,u,v,w,s)},
bV6(d,e,f,g,h,i){return new A.a6F(f,!1,g,i,d,e)},
bV7(d){return C.d.aj(d.e,1)},
c_m(d,e,f,g,h,i){return new A.aeT(f,!1,g,i,d,e)},
c_n(d){return C.d.aj(d.e,1)},
bFC(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c4A(),x.cm)
v.toString
w=A.kB(d.b,e.b,f,A.c4C(),x.es)
w.toString
return new A.N1(v,w,!0)},
bUm(d,e,f){return new A.Nc(d,e==null?4:e,f)},
a1i:function a1i(){},
D6:function D6(d,e){this.a=d
this.b=e},
tB:function tB(d,e){this.r=d
this.w=e},
qc:function qc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad0:function ad0(){},
pl:function pl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v_:function v_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eA:function eA(d,e){this.a=d
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
pG:function pG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aev:function aev(){},
Qq:function Qq(d,e){this.a=d
this.b=e},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ns:function ns(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kT:function kT(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ll:function ll(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6F:function a6F(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeT:function aeT(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N1:function N1(d,e,f){this.a=d
this.b=e
this.c=f},
uZ:function uZ(){},
Nc:function Nc(d,e,f){this.a=d
this.b=e
this.c=f},
ahM:function ahM(){},
ahQ:function ahQ(){},
al2:function al2(){},
all:function all(){},
alm:function alm(){},
alo:function alo(){},
alp:function alp(){},
amd:function amd(){},
amc:function amc(){},
ame:function ame(){},
apO:function apO(){},
arE:function arE(){},
arF:function arF(){},
ati:function ati(){},
atW:function atW(){},
atV:function atV(){},
atX:function atX(){},
ayd:function ayd(){},
L1:function L1(){},
L2:function L2(d,e,f){this.c=d
this.d=e
this.a=f},
ayf:function ayf(d){this.a=d},
aye:function aye(d){this.a=d},
RS:function RS(d,e,f){this.c=d
this.e=e
this.a=f},
YB:function YB(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYW(d,e,f){var w=B.ae(f),v=w.i("ab<1,jU>")
v=B.Q(new B.ab(f,new A.b__(),v),v.i("au.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.b_0(),w),w.i("au.E"))
return new A.ad1(e,d,v,w,null)},
bRB(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7j(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tz(v,C.at,C.w,new B.kw(1),v,v,v,v,C.bB,v)
u=new A.a1j(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aK(x.v))
u.bj()
return u},
ad1:function ad1(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b__:function b__(){},
b_0:function b_0(){},
a1j:function a1j(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.Wa$=h
_.aT0$=i
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
bfP:function bfP(d,e){this.a=d
this.b=e},
ayg:function ayg(){},
jU:function jU(d,e){this.a=d
this.b=e},
nV:function nV(d,e){this.a=d
this.b=e},
ahN:function ahN(){},
ahO:function ahO(){},
ahP:function ahP(){},
TT:function TT(){},
AI:function AI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_1:function b_1(d){this.a=d},
b_2:function b_2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_3:function b_3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5O(d,e){var w=d==null?B.cr(C.E,1):d
return new A.a5N(e!==!1,w)},
a1y:function a1y(){},
a5N:function a5N(d,e){this.a=d
this.b=e},
Nj:function Nj(){},
a5P:function a5P(){},
ayL:function ayL(){},
aF5:function aF5(d,e){this.a=d
this.b=e},
ai8:function ai8(){},
ali:function ali(){},
alj:function alj(){},
alq:function alq(){},
Lb:function Lb(){},
vP:function vP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ht:function ht(){},
a5T:function a5T(d){this.a=d},
a5U:function a5U(d){this.a=d},
a5V:function a5V(d){this.a=d},
Ne:function Ne(){},
Nf:function Nf(){},
a5Y:function a5Y(d){this.a=d},
Nh:function Nh(){},
Ni:function Ni(d){this.a=d},
a5S:function a5S(d){this.a=d},
a5R:function a5R(d){this.a=d},
Nd:function Nd(d){this.a=d},
a5W:function a5W(d){this.a=d},
a5X:function a5X(d){this.a=d},
Ng:function Ng(d){this.a=d},
Gk:function Gk(){},
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
aVw:function aVw(d){this.a=d},
OD:function OD(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wl:function Wl(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c5$=h
_.c=_.a=null},
bfU:function bfU(d,e){this.a=d
this.b=e},
bfS:function bfS(d){this.a=d},
bfT:function bfT(d,e){this.a=d
this.b=e},
bfR:function bfR(){},
bfV:function bfV(d){this.a=d},
byI(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.J:d
return new A.pT(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aL6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TK:u
else w=g
v=f==null?A.aym(!1,u,0,u,!1,D.we):f
w=new A.ed(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aym(!1,u,0,u,!1,D.we):d,j,a0,i,s,!1,p)
w.ar4(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ad(d.x,e.x,f)
m.toString
w=A.bEi(d.ay,e.ay,f)
v=A.bEi(d.ch,e.ch,f)
u=B.ad(d.as,e.as,f)
u.toString
t=e.CW
s=A.kB(d.cy,e.cy,f,A.a03(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rn(d.w,e.w,f)
p=A.kB(d.a,e.a,f,A.c4z(),x.cw)
p.toString
o=B.bI6(d.db,e.db,f)
o.toString
n=B.ad(d.dy.a,e.dy.a,f)
n.toString
return A.aL6(v,m,w,r,e.z,s,new A.yz(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OE(n),!1,u,o,!0,e.cx,p)},
aym(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aG(C.d.aO(127.5),D.dt.A()>>>16&255,D.dt.A()>>>8&255,D.dt.A()&255):null
else w=e
return new A.a1r(h,w,g,i,f,!1)},
bEi(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rn(v.b,u.b,f),r=B.ad(v.c,u.c,f)
r.toString
r=A.bFG(t,A.kB(v.d,u.d,f,A.a03(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rn(d.c,e.c,f)
v=B.ad(d.e,e.e,f)
v.toString
return A.aym(!1,s,v,u,e.a,new A.L6(!1,r,w.c,!0))},
bRH(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rn(d.d,e.d,f)
if(w==null)w=v==null?B.aG(C.d.aO(127.5),D.dt.A()>>>16&255,D.dt.A()>>>8&255,D.dt.A()&255):null
return new A.mL(e.a,e.b,w,v)},
c7V(d){return!0},
bAL(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k9)return A.bBw(w.a,A.byk(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dt:w},
c2d(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k9)w=A.bBw(v.a,A.byk(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dt}return A.aAw(w,40)},
bKC(d,e,f,g,h){var w,v=A.bAL(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k9)w=A.bBw(u.a,A.byk(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dt}u=A.aAw(w,40)
return new A.Nc(v,h==null?4:h,u)},
c7T(d,e){return!0},
c4m(d,e){return Math.abs(d.a-e.a)},
c5B(d,e){var w=J.cT(e,new A.bu6(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c5x(d,e){return-1/0},
c5w(d,e){return d.a[e].b},
bLN(d){var w=J.cT(d,new A.bu3(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bLM(d){return A.aAw(D.dt,15)},
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
ed:function ed(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aL7:function aL7(){},
OE:function OE(d){this.a=d},
a1r:function a1r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mL:function mL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
L6:function L6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yz:function yz(d,e,f){this.a=d
this.b=e
this.c=f},
aKT:function aKT(d,e){this.a=d
this.b=e},
a5Q:function a5Q(){},
EU:function EU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bu6:function bu6(d){this.a=d},
bu5:function bu5(d){this.a=d},
a7G:function a7G(){},
bu3:function bu3(){},
n7:function n7(){},
qk:function qk(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rC:function rC(d,e){this.a=d
this.b=e},
tC:function tC(d,e){this.a=d
this.b=e},
GM:function GM(d){this.a=d},
OF:function OF(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ahW:function ahW(){},
ahX:function ahX(){},
ai9:function ai9(){},
alk:function alk(){},
aln:function aln(){},
an1:function an1(){},
an2:function an2(){},
an3:function an3(){},
an5:function an5(){},
an6:function an6(){},
an7:function an7(){},
an8:function an8(){},
arD:function arD(){},
ath:function ath(){},
aL8:function aL8(d){this.a=d},
aL9:function aL9(){},
aLa:function aLa(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
an4:function an4(){},
aLb:function aLb(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLe:function aLe(){},
aLc:function aLc(d,e,f){this.a=d
this.b=e
this.c=f},
aLd:function aLd(d,e,f){this.a=d
this.b=e
this.c=f},
aLf:function aLf(){},
vy:function vy(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7F:function a7F(d,e,f){this.d=d
this.e=e
this.a=f},
abO:function abO(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i7=e
_.cX=f
_.fY=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
bxq(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.ae(o),l=new B.ab(o,new A.ayp(),m.i("ab<1,F>")).jJ(0,new A.ayq()),k=e-l,j=new A.ayt(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iS(o,m.i("iS<1>")).aw(0,new A.ayr(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iS(o,m.i("iS<1>")).aw(0,new A.ays(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayp:function ayp(){},
ayq:function ayq(){},
ayt:function ayt(d,e,f){this.a=d
this.b=e
this.c=f},
ayu:function ayu(d,e,f){this.a=d
this.b=e
this.c=f},
ayr:function ayr(d,e,f){this.a=d
this.b=e
this.c=f},
ays:function ays(d,e,f){this.a=d
this.b=e
this.c=f},
byk(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iS(w,B.ae(w).i("iS<1>")).aw(0,new A.aIc(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIc:function aIc(d,e){this.a=d
this.b=e},
aBH(d,e){var w,v
if(e!=null){w=B.ae(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aBI(),w),w.i("au.E"))
return A.c5p(d,new A.a26(v,x.cX))}else return d},
aBI:function aBI(){},
bZx(d,e){var w=!0
if(d!==C.fz)if(!(d===C.at&&e===C.w))w=d===C.iw&&e===C.b1
if(w)return D.Ek
else{w=!0
if(d!==C.hs)if(!(d===C.iw&&e===C.w))w=d===C.at&&e===C.b1
if(w)return D.El
else return D.aaz}},
NJ:function NJ(d,e){this.a=d
this.b=e},
a1X:function a1X(d,e){this.a=d
this.b=e},
zo:function zo(d,e){this.a=d
this.$ti=e},
anf:function anf(){},
c5p(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cH($.an().r)
for(w=B.b([],x.C),v=new B.Ow(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.S(B.fA('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ov(v,s)
v.D9()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D9()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.Ko(d.aSX(r,p,p+n,!0),C.v,null)
t.push(q)
m=l.d
if(m!=null)q.im(m)}p+=n
o=!o}}return l},
a26:function a26(d,e){this.a=d
this.b=0
this.$ti=e},
b2x:function b2x(){},
by8(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fL))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRK(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAw(d,e){var w=1-e/100
return B.aG(d.gfH(d),C.d.aO(d.gNU()*w),C.d.aO(d.gG5()*w),C.d.aO(d.gKi()*w))},
bFE(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ah(v,u,t,w?d.b.c.b:0)},
by9(d){var w=d.a,v=w?A.aZZ(d.b):0,u=w?A.aZZ(d.c):0,t=w?A.aZZ(d.d):0
return new B.ah(v,u,t,w?A.aZZ(d.e):0)},
bWQ(d){var w
if(d.c===0){d.seV(null)
w=B.c1(d.r)
d.r=B.aG(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bz3(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.seV(f.mR(0,g))}else{w=e==null?C.J:e
d.r=w.gq(w)
d.seV(null)}},
aZZ(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kB(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k8(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k8(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6I(d,e,f){return C.d.aO(d+(e-d)*f)},
bBw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k8(m,x.i)
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
A.a7s.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aJ:C.n
r=r?C.m:C.a5
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.c2(t.x,C.m,s,18),C.aP],w))
v.push(B.av(new B.dB(t.c,!1,s),1))
v=B.aj(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.i(t.d,s,1,C.af,s,B.by(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.bl(r,B.a6(w,C.z,C.ie,C.i),q,s,C.ai,s,s,3)}}
A.uY.prototype={
LJ(d){return this.aT_(d)},
aT_(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LJ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eg("finance_summary",B.a5(["p_from",E.rh(d.a),"p_to",E.rh(d.b)],s,r),r),$async$LJ)
case 3:q=f
if(q==null){u=D.aqw
w=1
break}if(x.f.b(q)){u=B.d2(q,s,r)
w=1
break}u=D.aqY
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LJ,v)},
LI(d){return this.aSZ(d)},
aSZ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eg("finance_kpis",B.a5(["p_from",E.rh(d.a),"p_to",E.rh(d.b)],s,r),r),$async$LI)
case 3:q=f
if(x.f.b(q)){u=B.d2(q,s,r)
w=1
break}u=D.aqc
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LI,v)},
pG(d){return this.aqN(d)},
aqN(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hh("sevdesk-sync",B.a5(["from",E.rh(d.a),"to",E.rh(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a0(B.fr(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LE(d){return this.aSP(d)},
aSP(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LE=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hh("finance-export-pdf",B.a5(["from",E.rh(d.a),"to",E.rh(d.b)],s,s)),$async$LE)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aE(J.a3(r,"base64"))
w=1
break}throw B.e(B.dQ("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LE,v)}}
A.Ei.prototype={
G_(d){return this.ajQ(d)},
ajQ(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G_=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LJ(d),$async$G_)
case 7:q=f
o=A.aFZ(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HB(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G_,v)},
FW(d){return this.ajB(d)},
ajB(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FW=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LI(d),$async$FW)
case 7:q=f
o=A.bUk(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HB(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FW,v)},
pG(d){return this.aqO(d)},
aqO(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a2(n)
p=r.HB(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LD(d){return this.aSO(d)},
aSO(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LD=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LE(d),$async$LD)
case 7:q=f
o=C.iS.cP(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HB(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LD,v)},
HB(d){if(d instanceof B.yu)return d
if(d instanceof B.me){if(d.b==="42501")return new B.vT(d.a)
return new B.ti(d.a)}if(d instanceof B.Nx)return new B.ti("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B9("Unerwarteter Fehler: "+B.j(d))},
$iaFL:1}
A.qm.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vD.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wz.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aB5.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCd.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.od.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CQ.prototype={
gbw(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oe.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yx.prototype={
GW(d){return this.aqM(0)},
aqM(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GW=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dz)
s=t.r
r=s.aI(0,$.xt(),x.P)
p.a=null
w=3
return B.k(B.pk(new A.aFG(p,t,r),x.H),$async$GW)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bx1()
s=s.e
s===$&&B.a()
s.c7(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GW,v)},
LC(){return this.aSN()},
aSN(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LC=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dz)
s=t.r.aI(0,$.xt(),x.P)
q.a=null
w=3
return B.k(B.pk(new A.aFF(q,t,s),x.H),$async$LC)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LC,v)}}
A.yy.prototype={
dm(d,e){var w=null,v=e.al($.xt(),x.P),u=e.al($.bx1(),x.aN)
return B.t8(B.dn(B.b([new B.fn("Finanzen","Dashboard",new A.ah1(e.al($.bx_(),x.b).gje(),new A.aFQ(this,d,e),new A.aFR(this,d,e),new A.aFS(d),new A.aFT(d),new A.aFU(this,d,e,v),w),w),C.aw,new A.aoE(v,w),C.c9,D.agE,C.c9,B.da(u,new A.aFV(),new A.aFW(),new A.aFX(),!1,!0,!1,x.d,x.l)],x.p),w,C.cF,w,C.F,!1),C.m,new A.aFY(e))},
Jr(d,e){return this.aLi(d,e)},
aLi(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jr=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bx_()
w=3
return B.k(e.aI(0,s.ghR(),x.F).GW(0),$async$Jr)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bh(B.c4(null,null,null,null,null,C.r,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jr,v)},
Bl(d,e){return this.awN(d,e)},
awN(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bl=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bx_().ghR(),x.F).LC(),$async$Bl)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bh(D.ayS)
w=1
break}t=B.oB(C.v,10)
w=4
return B.k($.bNW().u1(s,"finanzauswertung.pdf",t,null,null,null),$async$Bl)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bl,v)},
Bm(d,e,f){return this.aIZ(d,e,f)},
aIZ(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bm=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j8(null,null,!0,null,new A.aFO(f,d),d,null,!0,!0,x.cJ),$async$Bm)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nQ(e.aI(0,$.bX(),x.A))
p=f.a
o=f.b
n=$.dN()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zA("finance_period",p,o,B.a5(["period_from",p.eh()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bm)
case 8:if(d.e!=null)d.P(x.q).f.bh(F.vh)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bm,v)}}
A.ah1.prototype={
p(d){var w=this,v=null,u=A.amo(C.m,F.hW,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.amo(v,D.acr,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.amo(v,D.y6,v,s?v:w.d,"sevDesk synchronisieren"),q=A.amo(C.a9,C.jk,C.a9,s?v:w.e,"PDF-Export")
return B.aj(B.b([u,C.aP,t,C.aP,r,C.aP,q,C.aP,A.amo(C.ac,C.fO,C.ac,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.G,0,v,v)}}
A.amn.prototype={
p(d){var w,v=this,u=null,t=B.ay(12),s=B.ay(12),r=B.ay(12),q=v.w
if(q==null)q=C.a5
q=B.cr(q,1)
w=v.r
if(w==null)w=C.h
return B.wy(B.dE(!1,C.W,!0,t,B.eu(!1,s,!0,B.aS(u,B.c2(v.c,w,u,20),C.q,u,u,new B.aJ(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a8,0,u,u,u,u,u,C.bm),u,v.d,u,u)}}
A.aoE.prototype={
dm(d,e){var w=null,v=this.e,u=$.dN(),t=x.p
return B.bl(w,B.a6(B.b([D.a9A,C.D,B.aj(B.b([D.adj,C.av,B.av(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.u,B.ku(C.cm,B.b([new A.J8("Monat",new A.biC(e),w,w),new A.J8("Jahr (YTD)",new A.biD(e),w,w),new A.J8("Zeitraum w\xe4hlen \u2026",new A.biE(this,d,e),D.abv,w)],t),C.dx,6,8)],t),C.z,C.f,C.i),w,w,C.C,w,w,3)},
IN(d,e){return this.aHS(d,e)},
aHS(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IN=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.aw6(new A.biB(),d,B.bP(B.aZ(t)-5,1,1,0,0,0,0),new B.lN(s.a,s.b,x.bz),B.bP(B.aZ(t)+1,1,1,0,0,0,0),C.e4),$async$IN)
case 2:r=g
if(r!=null)e.aI(0,$.xt().ghR(),x.V).ug(0,new E.lU(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IN,v)}}
A.J8.prototype={
p(d){var w=null,v=B.ay(9999),u=B.ay(9999),t=B.ay(9999),s=B.cr(C.a5,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.c2(p,C.h,w,14),C.aP],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dE(!1,C.W,!0,v,B.eu(!1,u,!0,B.aS(w,B.aj(q,C.j,w,C.f,C.G,0,w,w),C.q,w,w,new B.aJ(w,w,s,t,w,w,C.A),w,w,w,w,C.hN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a8,0,w,w,w,w,w,C.bm)}}
A.JA.prototype={
p(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jp(new A.bpj(this)),C.c9,D.a9G,C.u],r),p=this.c.w
if(p.length===0)q.push(B.bl(s,B.aj(B.b([D.adK,C.ap,B.av(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.p,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.i,0,s,s),C.a8,s,C.C,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.K(w,B.b([new A.ah_(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a6(w,C.j,C.f,C.i))}return B.a6(q,C.aa,C.f,C.i)}}
A.ah_.prototype={
p(d){var w=this,v=null,u=w.e,t=u?C.aJ:C.a8,s=B.cr(u?C.m:C.a5,1),r=B.ay(4),q=w.c
r=B.aS(C.U,B.i(C.c.a1(q,0,1),v,v,v,v,B.by(C.h,14,C.o),v,v,v),C.q,v,v,new B.aJ(t,v,s,r,v,v,C.A),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.af,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.av(B.a6(B.b([q,B.i(t,v,v,v,v,B.y(C.p,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dz().ap(w.f)
return B.bl(v,B.aj(B.b([r,C.ap,t,B.i(q,v,v,v,v,B.y(u?C.ac:C.h,15,C.H),v,v,v)],s),C.j,v,C.f,C.i,0,v,v),v,v,C.dh,v,v,3)}}
A.If.prototype={
p(d){var w=null
return B.bl(C.a9,B.aj(B.b([D.aek,C.ap,B.av(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.ff,w,C.C,w,w,3)}}
A.a7t.prototype={
dm(d,e){return B.da(e.al($.bQn(),x.e),new A.aKQ(),new A.aKR(),new A.aKS(),!1,!0,!1,x.X,x.l)}}
A.Iz.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aw7,C.u,B.jp(new A.bfG(v,q,100-t.w.a,w,p)),C.u,new A.alG(u),C.aw,D.aw6,C.u,new A.ahV(t,u),C.aw,D.aw0,C.u,B.bA(u,!0,u,B.k4(u,B.bl(u,new A.Ui(t,220,u),u,u,C.C,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfH(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aw,D.avV,C.u,B.bA(u,!0,u,B.k4(u,new A.Uz(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfI(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aw,D.avZ,C.u,new A.anp(t,u),C.aw,D.avW,C.u,new A.ajH(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aw,D.aw2,C.u,new A.ate(t,u)],s))
return B.a6(r,C.aa,C.f,C.i)}}
A.alG.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.p,11,C.l).cw(1.35),w,w,w)}}
A.amV.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cJ(m.d,"-")?C.a9:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfJ(m,d):l
r=x.p
q=B.b([B.av(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.p,10,C.o).fj(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cr(C.a9,0.8)
n=B.ay(4)
q.push(B.aS(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a9,9,C.o),l,l,l),C.q,l,l,new B.aJ(l,l,o,n,l,l,C.A),l,l,l,l,C.nt,l,l,l))}q=B.b([B.aj(q,C.j,l,C.f,C.i,0,l,l),C.aX,B.a5I(C.d0,B.i(m.d,l,l,l,l,B.by(w,22,C.o),l,l,l),C.iR)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.af,l,B.y(C.p,10,C.aC),l,l,l))
q.push(C.cH)
q.push(B.aj(B.b([new A.V8("Vormonat",m.r,l),C.cj,new A.V8("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cH)
q.push(B.av(new A.YM(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.k4(l,B.bl(l,B.a6(q,C.z,C.f,C.i),l,l,C.bT,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.V8.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ay(4)
return B.aS(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.p,9,C.o),r,r,r),C.q,r,r,new B.aJ(C.a5,r,r,q,r,r,C.A),r,r,r,r,C.nt,r,r,r)}w=q>=0
v=w?C.ac:C.a9
u=v.es(0.12)
t=B.cr(v,0.7)
s=B.ay(4)
return B.aS(r,B.aj(B.b([B.c2(w?F.aaF:D.aaE,v,r,10),C.Zy,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.j,r,C.f,C.G,0,r,r),C.q,r,r,new B.aJ(u,r,t,s,r,r,C.A),r,r,r,r,C.nt,r,r,r)}}
A.YM.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eA(v,j[v]))
u=C.b.jJ(j,new A.bom())
t=C.b.jJ(j,new A.bon())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boo(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5O(k,!1)
w=B.b([A.aL6(k,2,A.aym(!1,C.m.es(0.16),0,k,!0,D.we),C.m,0.35,k,D.Eb,k,!0,!1,!0,!1,D.Fy,!1,10,D.Z0,!0,C.lu,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OD(A.byI(k,k,k,D.amC,l,D.C0,D.E7,D.Ec,w,D.agI,k,m,k,n,D.Yk,D.amD,D.a9W),C.al,C.a1,k,k)}}
A.Ui.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLP
w=C.b.fA(p,0,new A.b6h())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayv(B.b([A.a1t(q,q,D.Br,q,C.m,q,q,q,r.b,6),A.a1t(q,q,D.Br,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bEj(A.ayo(q,q,u,q,q,A.a5O(q,!1),q,new A.yA(!0,!0,q,new A.b6i(),A.a_Z(),!1,q,A.avR(),A.a_Z()),q,v,q,q,new A.v_(!0,new A.pl(16,q,new A.qc(!0,new A.b6j(this),46,q),!0),D.kv,D.kv,new A.pl(16,q,new A.qc(!0,new A.b6k(p),26,q),!0)))),this.d,q)},
aKy(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Uz.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b7h(),w),x.i)
C.b.K(o,new B.ab(u,new A.b7i(),w))
t=C.b.fA(o,0,new A.b7j())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayv(B.b([A.a1t(q,q,q,q,C.m,q,q,q,v[s],14),A.a1t(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bEj(A.ayo(q,q,n,q,q,A.a5O(q,!1),q,D.Ec,q,o,q,q,new A.v_(!0,D.kv,D.kv,D.kv,new A.pl(16,q,new A.qc(!0,new A.b7k(p),26,q),!0)))),this.d,q)
return this.e?r:B.bl(q,r,q,q,C.C,q,q,3)}}
A.anp.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aLO
w=new B.ab(l,new A.bgh(),B.ae(l).i("ab<1,F>")).jJ(0,new A.bgi())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dz()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.ib(C.ak,C.f,C.i,C.j,m,C.aV,m,0,B.b([new B.jl(1,C.di,B.a6(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,m,B.y(C.p,12,C.aC),m,m,m)],v),C.z,C.f,C.i),m),C.av,B.i(p.ap(o),m,m,m,m,B.by(C.h,16,C.o),m,m,m)],v),m),C.cH,new B.Dx(new B.d4(n,n,n,n),C.bw,B.zl(C.a5,m,8,C.d.bo(o/w,0,1),D.Bf),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.L(r)===B.L(q)&&B.a01(r.gbw(),q.gbw())
else q=!0
if(!q)o.push(C.u)
C.b.K(u,o)}return B.bl(m,B.a6(u,C.j,C.f,C.i),m,m,C.C,m,m,3)}}
A.ajH.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.av(new A.Ci("Aktive Kunden",""+s,u),1)
w=B.av(new A.Ci("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.bl(u,B.aj(B.b([s,w,B.av(new A.Ci("\xd8-Warenkorb",v.ap(t.d),u),1),B.av(new A.Ci("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.C,u,u,3)}}
A.Ci.prototype={
p(d){var w=null
return B.a6(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.p,10,C.o).fj(0.6),w,w,w),C.b5,B.i(this.d,w,w,w,w,B.by(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.G)}}
A.ate.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bqB(),B.ae(q).i("ab<1,F>")).jJ(0,new A.bqC()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.ib(C.ak,C.f,C.i,C.j,r,C.aV,r,0,B.b([new B.jl(1,C.di,B.i(u.b,r,1,C.af,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.p,12,C.H),r,r,r),B.i($.dz().ap(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aX,new B.Dx(new B.d4(s,s,s,s),C.bw,B.zl(C.a5,r,6,C.d.bo(t/p,0,1),D.Bf),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.L(u)===B.L(s)&&B.a01(u.gbw(),s.gbw())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.bl(r,B.a6(n,C.j,C.f,C.i),r,r,C.C,r,r,3)}}
A.wR.prototype={
p(d){var w=null
return B.bl(w,B.i(this.c,w,w,w,w,B.y(C.p,13,C.l),w,w,w),C.a8,w,C.C,w,w,3)}}
A.ahV.prototype={
dm(d,e){return B.da(e.al($.bx0(),x.fM),new A.b4G(this,d,e),new A.b4H(),new A.b4I(),!1,!0,!1,x.h,x.l)}}
A.Bh.prototype={
W(){return new A.TV()},
aXR(){return this.d.$0()}}
A.TV.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.es(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pI[t].a
if(v)r=""
else{r=B.ba(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bJ(new B.cW(r,C.bJ,C.aR),$.ak()))}q.e!==$&&B.b4()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ca(v,v.r,v.e,B.l(v).i("ca<2>"))
while(v.u()){w=v.d
w.S$=$.ak()
w.T$=0}this.am()},
rn(d){var w=this.e
w===$&&B.a()
w=C.c.aS(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.jw(B.b0(w,",","."))
return w==null?0:w},
a40(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pI[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b0(s,".",",")
t.ku(0,t.a.y4(C.aR,C.bJ,s))}}this.J(new A.b4u())},
aEu(){this.a40(D.aqy)
this.c.P(x.q).f.bh(D.azc)},
I2(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I2=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.bc(a1)
for(e=0;e<8;++e)a2.E(0,D.pI[e].a)
q=a2
t=4
w=7
return B.k($.aFz.cl().zg(B.b(["csv","txt"],x.s),C.xS,!0),$async$I2)
case 7:p=a5
a2=p
o=a2==null?null:J.Kl(a2.a).c
if(o==null){w=1
break}n=C.aH.adg(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C5.cP(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.awK(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ch(k)<2)continue
j=C.c.aS(J.a3(k,0)).toLowerCase()
i=J.CM(q,j)?j:D.aqZ.h(0,j)
if(i==null)continue
d=C.c.aS(C.b.n8(J.bRa(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.jw(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bh(D.ayP)
w=1
break}r.a40(m)
r.c.P(x.q).f.bh(B.c4(null,null,null,null,null,C.r,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I2,v)},
Id(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Id=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4v(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_l("upsert_finance_balance",B.a5(["p_as_of",C.c.a1(n.eh(),0,10),"p_cash_and_bank",q.rn("cash_and_bank"),"p_receivables",q.rn("receivables"),"p_inventory_value",q.rn("inventory_value"),"p_other_current_assets",q.rn("other_current_assets"),"p_fixed_assets",q.rn("fixed_assets"),"p_current_liabilities",q.rn("current_liabilities"),"p_long_term_liabilities",q.rn("long_term_liabilities"),"p_equity",q.rn("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Id)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXR()
o=q.c
o.toString
B.b9(o,!1).eS()
q.c.P(x.q).f.bh(D.ayT)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bh(B.c4(null,null,null,null,null,C.r,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4w(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Id,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.by(C.h,18,C.o),r,r,r),p=s.f?r:new A.b4y(s,d),o=s.d
o===$&&B.a()
p=B.fP(D.adl,B.i("Stichtag: "+C.c.a1(o.eh(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.av(B.fP(D.aev,D.aEW,o?r:s.gaDw(),r),1)
v=x.p
w=B.b([p,C.D,B.aj(B.b([w,C.av,B.av(B.fP(D.aeh,D.aEL,o?r:s.gaEt(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.pI[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f4(r,C.aW,!1,r,!0,C.r,r,B.fh(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.ix,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.at,r,C.a4,r,r,r,r),C.D],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.p,11,C.l),r,r,r))
p=B.bN(B.fc(B.a6(w,C.aa,C.f,C.G),r,C.F),r,380)
o=s.f
w=B.dI(C.cY,r,r,o?r:new A.b4z(d),r,r)
o=o?r:s.gaEd()
t=B.dC(C.m,C.h,r,r,r,r,r)
return B.lH(B.b([w,B.e_(s.f?F.ZB:C.ey,o,t)],v),C.n,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a01(this.gbw(),e.gbw())
else w=!0
return w},
gv(d){return(B.eE(B.L(this))^B.bMi(this.gbw()))>>>0},
j(d){B.bFA()
return B.L(this).j(0)}}
A.L7.prototype={
W(){return new A.TW(B.A(x.S,x.I),new A.ayy(B.A(x.x,x.T)),null,null)}}
A.TW.prototype={
p(d){var w,v=this,u=v.a1Z(),t=v.CW
t.toString
t=v.a2_(t.au(0,v.gft().gq(0)))
w=v.a2_(u)
v.a.toString
return new A.L2(new A.a1s(t,w,null),u,null)},
a2_(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayv(s.c,s.d,!1,r,s.a))}return d.aPQ(w)},
a1Z(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UK(t.ch)
if(r)s=w.a
r=t.y
t=t.aQL(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPR(A.bxr(!1,!0,!0,v.d,v.c,u.gasi(),v.f,v.e))}return t},
asj(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafF()||e==null||e.a==null){w=v.cy
v.J(w.gaPg(w))
return}v.J(new A.b4L(v,e))},
ly(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1Z(),new A.b4M(w)))}}
A.nW.prototype={
Vl(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayo(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQL(d,e){return this.Vl(null,null,d,e)},
aPR(d){return this.Vl(null,d,null,null)},
aPQ(d){return this.Vl(d,null,null,null)},
Xg(d,e,f){var w,v,u,t=A.kB(d.ch,e.ch,f,A.c4E(),x.dB),s=B.ad(d.CW,e.CW,f),r=A.bFH(d.d,e.d,f),q=A.bHB(d.e,e.e,f),p=A.bFF(d.c,e.c,f),o=e.a
o=A.a5O(B.a1K(d.a.b,o.b,f),o.a)
w=B.ad(d.y,e.y,f)
v=B.ad(d.x,e.x,f)
u=B.ad(d.z,e.z,f)
r=A.ayo(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bFC(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbw(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayn.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fG.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ayw(),B.ae(v).i("ab<1,F>")).jJ(0,new A.ayx())
v=v.length
return w+(v-1)*this.d},
gbw(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.il.prototype={
gbw(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mK.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1p.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1u.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aet.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1v.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D7.prototype={
gbw(){return[this.a,this.b,C.bA,C.w,null]}}
A.L8.prototype={}
A.a1w.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xH.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xg(v,w,d)}}
A.ahR.prototype={}
A.ahY.prototype={}
A.ahZ.prototype={}
A.ai0.prototype={}
A.ai1.prototype={}
A.ai2.prototype={}
A.ai3.prototype={}
A.ai4.prototype={}
A.ai5.prototype={}
A.ayy.prototype={
UK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uD(0,0,!1)
v=new A.zo(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uD(t,u,!0)}w=null
try{w=C.b.oW(d,new A.ayz())}catch(s){return new A.uD(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
gbw(){return[this.a,this.b,this.c]}}
A.ai_.prototype={}
A.ayA.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a03(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ach(t,A.bxq(w,t.a),u)
l.y=u
l.aS6(e,u,f)
l.alQ(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSf(d,e,m,t,r,s,n,o,f)}}},
ach(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dQ("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iS(p,B.ae(p).i("iS<1>")).aw(0,new A.ayB(t,q,r,s))
w.push(new A.a6u(q))}return w},
aS6(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d4(k,k,k,k)}j=o.w
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
a4=B.Qm(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qm(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.J:f).gq(0)
k.seV(null)
a6=b3.f.em()
u.drawRRect(B.lC(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gq(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dM(b1),$.nN()[1],!0)
a6=b3.f.em()
u.drawRRect(B.lC(a4),a6)
a6.delete()
u.restore()
b3.aSd(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
b2=B.cH($.an().r)
n=new B.hk(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.im(k)
v.fX(A.aBH(b2,o.r),b3.r)}}}},
aSf(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AY(a5,a5,a5,a5,B.d3(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lE().a_3(a8,a7.b),a7.a),C.bA,C.w,a5,b6.c,C.bB)
w.afZ(b1.f)
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
n=u+o.gew()
m=v+4+(o.gd0(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aHq)j=v===D.a_g&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_4(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.G3(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lE().Kt(new B.G(v,t),d).b
s=$.lE()
q=w.b
p=q.c
q=q.a.c
a0=s.Kt(new B.G(p,q.gbU(q)),d)
q=g.gcb()
p=w.b.c
s=g.gaie()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.VX(d,new A.ayC(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aSd(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gel(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a2
s=w?new B.aW(i.x,i.y):C.a2
r=w?C.a2:new B.aW(i.e,i.f)
w=w?C.a2:new B.aW(i.r,i.w)
q=B.Qm(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.Qm(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bzn(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
WD(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ach(b2,A.bxq(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1w(d,q,a0,o,a2,a1,new A.eA(d.a,v),new B.r(n,t))}}return null}}
A.a6u.prototype={}
A.a1s.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcM(),t=new A.ayA()
t.a1g()
$.an()
w=B.aX()
w.b=C.bg
t.f=w
w=B.aX()
w.b=C.b_
t.r=w
w=B.aX()
w.b=C.bg
w.r=C.n.gq(0)
t.w=w
w=B.aX()
w.b=C.b_
w.r=C.J.gq(0)
w.c=1
t.x=w
t=new A.abB(this.d,v,u,t,d,C.bp,new B.bp(),B.aK(x.v))
t.bj()
t.YZ(v.cy)
t.af6()
return t},
bx(d,e){e.sip(0,this.d)
e.sYK(this.e)
e.scM(B.bw(d,null,x.w).w.gcM())
e.B=d
e.bd()}}
A.abB.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYK(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a0O(d.cy)
w.bd()},
scM(d){if(this.cX.k(0,d))return
this.cX=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ic(w,new A.a1X(t,v),new A.vP(u.aC,u.i7,u.cX,x.Q))
s.restore()},
ZY(d){var w=this,v=w.gC(0)
return new A.L8(w.fY.WD(d,v,new A.vP(w.aC,w.i7,w.cX,x.Q)))}}
A.a1i.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D6.prototype={
L(){return"AxisSide."+this.b}}
A.tB.prototype={}
A.qc.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad0.prototype={
gbw(){return[!1,0,0,0]}}
A.pl.prototype={
gbw(){return[this.b,this.a,this.c,!0]}}
A.v_.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eA.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eA))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yA.prototype={
gbw(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pG.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aev.prototype={
gbw(){return[this.a,this.b]}}
A.Qq.prototype={
gbw(){return[this.a,this.b]}}
A.n4.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ns.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kT.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ll.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6F.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeT.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N1.prototype={
gbw(){return[this.a,this.b,!0]}}
A.uZ.prototype={}
A.Nc.prototype={
adH(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bg
d.iU(f,this.b,w)},
gbw(){return[this.a,this.b,this.c,0]}}
A.ahM.prototype={}
A.ahQ.prototype={}
A.al2.prototype={}
A.all.prototype={}
A.alm.prototype={}
A.alo.prototype={}
A.alp.prototype={}
A.amd.prototype={}
A.amc.prototype={}
A.ame.prototype={}
A.apO.prototype={}
A.arE.prototype={}
A.arF.prototype={}
A.ati.prototype={}
A.atW.prototype={}
A.atV.prototype={}
A.atX.prototype={}
A.ayd.prototype={
MH(d,e,f,g,h,i){return new B.ih(this.aVV(d,e,f,g,h,i),x.g4)},
aVU(d,e,f,g){return this.MH(d,e,f,!0,g,!0)},
aVV(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MH(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lE().ajn(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fT(u-s,v)*v===u
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
A.L1.prototype={
a1g(){var w,v=this
$.an()
w=B.aX()
w.b=C.b_
v.a=w
w=B.aX()
w.b=C.bg
v.b=w
w=B.aX()
w.b=C.bg
v.e=w
w=B.aX()
w.b=C.b_
v.c=w
v.d=B.aX()},
ic(d,e,f){var w=this
w.a04(d,e,f)
w.aS2(e,f)
w.aSc(e,f)
w.aSb(e,f)},
aSb(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lE().OK(w.a,a1.r-a1.f)
u=$.bwD().MH(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l8(n,m)
if(j!=null){p.r=C.E.gq(0)
p.seV(j.mR(0,i))}else{if(k==null)k=C.J
p.r=k.gq(k)
p.seV(a0)}k=l.c
p.c=k
if(k===0){p.seV(a0)
k=B.c1(p.r)
p.r=B.aG(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.DC(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lE().OK(w.b,a1.y-a1.x)
u=$.bwD().MH(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l8(n,m)
if(k!=null){q.r=C.E.gq(0)
q.seV(k.mR(0,i))}else{if(p==null)p=C.J
q.r=p.gq(p)
q.seV(a0)}p=f.c
q.c=p
if(p===0){q.seV(a0)
p=B.c1(q.r)
q.r=B.aG(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.DC(n,m,d.a,f.d)}},
aS2(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hd(new B.I(0,0,0+w.a,0+w.b),this.b)},
aSc(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.l8(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.seV(p.mR(0,s))}else{r.r=(q==null?C.J:q).gq(0)
r.seV(null)}o=n.e.em()
w.drawRect(B.dM(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.l8(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gq(0)
v.seV(q.mR(0,s))}else{v.r=(r==null?C.J:r).gq(0)
v.seV(null)}o=n.e.em()
j.drawRect(B.dM(s),o)
o.delete()}},
aSa(d,e,f){var w,v
this.a04(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adI(d,e,f,w)
if(v.b.length!==0)this.aSh(d,e,f,w)},
adI(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l8(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seV(j.mR(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seV(null)}k=p.c
n.c=k
if(k===0){n.seV(null)
k=B.c1(n.r)
n.r=B.aG(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.DC(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eG(0,2)
g=C.d.an(o,n.gbU(n).eG(0,2))
J.b_(r.save())
r.translate(h,g)
n=n.gNE().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eG(0,2)
o=C.d.an(o,n.gbU(n).eG(0,2))
k=f.d
k===$&&B.a()
s.adJ(0,n,new B.r(h,o),k)}}},
aSh(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l8(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seV(j.mR(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seV(null)}k=p.c
n.c=k
if(k===0){n.seV(null)
k=B.c1(n.r)
n.r=B.aG(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.DC(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eG(0,2)
g=n.gbU(n).eG(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.b_(r.save())
r.translate(f,e)
n=n.gNE().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eG(0,2)
g=n.gbU(n).af(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.adJ(0,n,new B.r(o,k),j)}}},
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
A.L2.prototype={
gal7(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal8(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal9(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gal5(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alv(d){var w,v=this,u=null,t=v.d,s=A.by9(t.d),r=t.a
r=r.a&&A.bRK(r.b)?r.b:u
w=B.b([B.aS(u,v.c,C.q,u,u,new B.aJ(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayf(w)
if(v.gal7())C.b.hz(w,s.$1(!0),new A.AI(D.Bm,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal9())C.b.hz(w,s.$1(!0),new A.AI(D.mG,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal8())C.b.hz(w,s.$1(!0),new A.AI(D.Bn,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal5())C.b.hz(w,s.$1(!0),new A.AI(D.dO,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
p(d){return B.jp(new A.aye(this))}}
A.RS.prototype={
W(){return new A.YB(new B.bk(null,x.eF))}}
A.YB.prototype={
axN(){switch(this.a.c.a){case 0:return C.ee
case 1:return C.fb
case 2:return C.d0
case 3:return C.dM}},
ayi(){switch(this.a.c.a){case 0:return new B.ah(0,0,8,0)
case 1:return new B.ah(0,0,0,8)
case 2:return new B.ah(8,0,0,0)
case 3:return new B.ah(0,8,0,0)}},
axP(d){this.a.toString
return},
aq(){this.aJ()
$.cB.x1$.push(this.ga4u())},
bc(d){this.bE(d)
$.cB.x1$.push(this.ga4u())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayi()
return B.B6(B.b25(0,B.aS(v.axN(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ad1.prototype={
bm(d){return A.bRB(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a1j.prototype={
hn(d){if(!(d.b instanceof B.hu))d.b=new B.hu(null,null,C.v)},
i_(d){if(this.B===C.ak)return this.yb(d)
return this.adk(d)},
aKK(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9a(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a99(d,B.hH())
switch(this.B.a){case 0:return d.c3(new B.G(w.a,w.b))
case 1:return d.c3(new B.G(w.b,w.a))}},
a99(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hm(u,null)
break
case 1:q=B.hm(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9a(p)
t=Math.max(t,o.aKK(p))
m=r.aG$}return new A.bfP(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a99(o,B.mE()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c3(new B.G(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c3(new B.G(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a9a(r==null?B.S(B.X("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c7(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.yc(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbi(0,null)
this.v3(d,e)},
l(){this.a4.sbi(0,null)
this.aoq()}}
A.bfP.prototype={}
A.ayg.prototype={}
A.jU.prototype={
gbw(){return[this.a,this.b]}}
A.nV.prototype={}
A.ahN.prototype={}
A.ahO.prototype={
aQ(d){var w,v,u
this.fs(d)
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
A.ahP.prototype={}
A.TT.prototype={
l(){var w,v,u
for(w=this.Wa$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AI.prototype={
goB(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.d0
case 1:return C.dM
case 2:return C.ee
case 3:return C.fb}},
gb_y(){var w=this.d,v=A.by9(w.d),u=A.bFE(w.a)
switch(this.c.a){case 2:case 0:return new B.ah(0,v.b,0,v.d).af(0,new B.ah(0,u.b,0,u.d))
case 1:case 3:return new B.ah(v.a,0,v.c,0).af(0,new B.ah(u.a,0,u.c,0))}},
gai2(){var w=this.d,v=A.bFE(w.a),u=A.by9(w.d)
switch(this.c.a){case 2:case 0:return u.gd0(0)+u.gd4(0)+(v.gd0(0)+v.gd4(0))
case 1:case 3:return u.gew()+v.gew()}},
aWD(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goB().c.d
if(o==null)o=$.lE().OK(d,f-e)
w=p.c
v=w!==D.mG
if((!v||w===D.dO)&&p.d instanceof A.nW){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bxq(u,d)
w=new B.iS(t,B.ae(t).i("iS<1>"))
s=w.giG(w).f2(0,new A.b_1(u),x.W).h_(0)}else{r=$.bwD()
w=!v||w===D.dO
v=p.d
q=r.aVU(w?v.w:v.z,o,f,e)
v=B.or(q,new A.b_2(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ae(s).i("ab<1,nV>")
w=B.Q(new B.ab(s,new A.b_3(p,e,f,o,g,d),w),w.i("au.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goB()
w=j.goB()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aS(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mG
u=!v
t=!u||w===D.dO
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dO?C.F:C.ak
q=B.b([],x.p)
if(w===D.Bm||v)j.goB()
if(j.goB().c.a){v=!u||w===D.dO?r:j.goB().c.c
p=!u||w===D.dO?j.goB().c.c:r
o=j.gb_y()
n=!u||w===D.dO?C.ak:C.F
j.gai2()
m=j.gai2()
l=!u||w===D.dO
k=j.d
l=l?k.f:k.x
u=!u||w===D.dO?k.r:k.y
q.push(B.aS(i,A.bYW(new A.ayg(),n,j.aWD(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bn||w===D.dO)j.goB()
return new B.e5(t,i,i,B.bUo(q,C.j,s,i,C.f,C.G,0,i,i,C.aV),i)}}
A.a1y.prototype={
gbw(){return[this.a,this.b]}}
A.a5N.prototype={
gbw(){return[this.a,this.b]}}
A.Nj.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5P.prototype={
gabC(d){return!1},
gbw(){return[!1,!1,!1,!1]}}
A.ayL.prototype={}
A.aF5.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ai8.prototype={}
A.ali.prototype={}
A.alj.prototype={}
A.alq.prototype={}
A.Lb.prototype={
ic(d,e,f){}}
A.vP.prototype={}
A.ht.prototype={
gdL(){return null},
gafF(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.Ni
if(w)return!0
return!(v instanceof A.Nf)&&!(v instanceof A.Ne)&&!(v instanceof A.Ng)&&!(v instanceof A.Nd)&&!w&&!(v instanceof A.Nh)}}
A.a5T.prototype={
gdL(){return this.a.b}}
A.a5U.prototype={
gdL(){return this.a.b}}
A.a5V.prototype={
gdL(){return this.a.b}}
A.Ne.prototype={}
A.Nf.prototype={}
A.a5Y.prototype={
gdL(){return this.a.b}}
A.Nh.prototype={}
A.Ni.prototype={
gdL(){return this.a.b}}
A.a5S.prototype={
gdL(){return this.a.b}}
A.a5R.prototype={
gdL(){return this.a.b}}
A.Nd.prototype={
gdL(){return this.a.b}}
A.a5W.prototype={
gdL(){return this.a.gdL()}}
A.a5X.prototype={
gdL(){return this.a.gdL()}}
A.Ng.prototype={
gdL(){return this.a.gdL()}}
A.Gk.prototype={
YZ(d){this.V=d.b
this.U=d.c
this.a4=d.d},
af6(){var w=this,v=null,u=w.ai=B.bz4(v,v)
u.ay=new A.aVk(w)
u.ch=new A.aVl(w)
u.CW=new A.aVm(w)
u.cy=new A.aVn(w)
u.cx=new A.aVo(w)
u=w.aE=B.H9(v,-1,v)
u.B=new A.aVp(w)
u.Y=new A.aVq(w)
u.V=new A.aVr(w)
u=w.bD=B.a7N(v,w.a4,v)
u.p3=new A.aVs(w)
u.p4=new A.aVt(w)
u.RG=new A.aVu(w)},
cA(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kL(d){return!0},
n0(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.rL(d)
w=v.aE
w===$&&B.a()
w.rL(d)
w=v.ai
w===$&&B.a()
w.rL(d)}else if(x.gJ.b(d))v.l9(new A.a5X(d))},
gNa(d){return new A.aVv(this)},
gNc(d){return new A.aVw(this)},
l9(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZY(w):null
u.V.$2(d,v)
u.Y=C.bp},
gKY(d){return this.Y},
gFz(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fs(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijr:1}
A.OD.prototype={
W(){return new A.Wl(B.b([],x.r),B.A(x.S,x.I),new A.aL8(B.A(x.y,x.dj)),null,null)}}
A.Wl.prototype={
p(d){var w,v=this,u=v.a4w(),t=v.CW
t.toString
t=v.abb(t.au(0,v.gft().gq(0)))
w=v.abb(u)
v.a.toString
return new A.L2(new A.a7F(t,w,null),u,null)},
abb(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ae(w).i("ab<1,ed>")
w=B.Q(new B.ab(w,new A.bfU(this,d),v),v.i("au.E"))
return d.aQI(w,this.cy)},
a4w(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UK(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQX(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQm(new A.EU(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaz4(),t.c,t.d))}return r},
az5(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafF())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfS(v))
return}v.J(new A.bfT(v,e))},
ly(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4w(),new A.bfV(w)))}}
A.pT.prototype={
Xg(d,e,f){var w,v,u,t,s,r,q=B.ad(d.f,e.f,f),p=B.ad(d.r,e.r,f),o=B.ad(d.w,e.w,f),n=B.ad(d.x,e.x,f),m=B.ad(d.y,e.y,f),l=B.ad(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5O(B.a1K(d.a.b,j.b,f),j.a)
w=A.bFC(d.at,e.at,f)
v=A.bFF(d.c,e.c,f)
u=A.bFH(d.d,e.d,f)
t=A.bHB(d.e,e.e,f)
s=A.kB(d.ch,e.ch,f,A.c6K(),x.cz)
s.toString
r=A.kB(d.CW,e.CW,f,A.c6J(),x.J)
r.toString
u=A.byI(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vm(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byI(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQX(d,e,f,g){return this.Vm(null,null,d,e,f,g,null)},
aQm(d){var w=null
return this.Vm(w,d,w,w,w,w,w)},
aQI(d,e){var w=null
return this.Vm(d,w,w,w,w,w,e)},
gbw(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ed.prototype={
ar4(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oW(n.a,new A.aL7())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fL))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b4()
n.b=q
r.toString
n.c!==$&&B.b4()
n.c=r
s.toString
n.d!==$&&B.b4()
n.d=s
t.toString
n.e!==$&&B.b4()
n.e=t}},
acZ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aL6(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQt(d){return this.acZ(d,null)},
aQv(d){return this.acZ(null,d)},
gbw(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OE.prototype={
gbw(){return[this.a]}}
A.a1r.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mL.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.L6.prototype={
gbw(){return[!1,this.b,this.c,!0]}}
A.yz.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.aKT.prototype={
L(){return"LabelDirection."+this.b}}
A.a5Q.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EU.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7G.prototype={
gbw(){return[4,C.hP,16,D.xP,0,120,A.c6M(),!1,!1,!1,0,C.I,A.c6L()]}}
A.n7.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qk.prototype={}
A.rC.prototype={
gbw(){return[this.a,this.b,C.bA,C.w,null]}}
A.tC.prototype={
gbw(){return[this.a,this.b]}}
A.GM.prototype={
gbw(){return[this.a]}}
A.OF.prototype={}
A.zj.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xg(v,w,d)}}
A.ahW.prototype={}
A.ahX.prototype={}
A.ai9.prototype={}
A.alk.prototype={}
A.aln.prototype={}
A.an1.prototype={}
A.an2.prototype={}
A.an3.prototype={}
A.an5.prototype={}
A.an6.prototype={}
A.an7.prototype={}
A.an8.prototype={}
A.arD.prototype={}
A.ath.prototype={}
A.aL8.prototype={
UK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yq
u=new A.zo(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.oW(d,new A.aL9())}catch(p){return D.yq}v=null
try{v=C.b.oW(w.a,new A.aLa())}catch(p){return D.yq}o=v.a
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
if(f<m)m=f}e=new A.zk(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zk.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.an4.prototype={}
A.aLb.prototype={
ic(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabC(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iP(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aPn(new B.I(0,0,u,v))}d.a03(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aS8(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aS4(a3,q,a4)
d.aS9(a3,q,a4)
d.alP(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gt(o)!==p.length)throw B.e(B.dQ("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vy(q,i,j,k))}}d.aSg(a3,s,a4)
if(w.gabC(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSe(a2,a3,v,f,new A.GM(g),a4)}},
aS4(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.by8(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Zx(o,e,u,f)
s=p.ajf(o,e,t,u,f)
r=p.Zz(o,e,t,u,f,!0)
q=p.aje(o,e,t,u,f)
p.aS7(d,s,p.Zw(o,e,t,u,f,!0),f,e)
p.aS1(d,q,r,f,e)
p.aS5(d,t,e)
p.aS3(d,t,e,f)}},
aS8(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.by8(a6.a),a9=A.by8(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ae(m).i("cI<1>")
k=B.Q(new B.cI(m,l),l.i("au.E"))
j=a3.Zx(a4,a6,n,b3)
i=a3.Zy(a4,a7.aQv(k),k,b3,j)
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
if(p){a1.r=C.E.gq(0)
a1.seV(u.mR(0,new B.I(m,l,d,a0)))}else{a1.r=(q?C.J:v).gq(0)
a1.seV(null)}$.an()
a2=new B.mO(C.dA,C.bg,C.e8,C.ew,C.dV).em()
m=B.dM(new B.I(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.S(B.vv(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fX(i,a3.r)
w.restore()}},
aS9(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZD(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fL)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adH(s,q,new B.r(p,o))}}},
aSg(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h4(b3,new A.aLe())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.ZD(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rB(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lA(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lA(q.$2(m,k))))
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
b0=B.l8(a3,a5)
if(a6!=null){f.r=C.E.gq(0)
f.seV(a6.mR(0,b0))}else{if(a4==null)a4=C.J
f.r=a4.gq(a4)
f.seV(null)}a4=a9.c
f.c=a4
if(a4===0){f.seV(null)
a4=B.c1(f.r)
f.r=B.aG(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.DC(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rB(d.a))
f.adH(t,j,new B.r(h,g))}}},
Zy(d,e,f,g,h){var w=this.ajg(d,e,f,g,h)
return w},
Zx(d,e,f,g){return this.Zy(d,e,f,g,null)},
ajg(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cH($.an().r):a5,f=J.Z(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.fa(d,a0))
if(e===1)g.aA(new B.cs(d,a0))}else g.aA(new B.cs(d,a0))
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
s=new B.M7(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.im(r)}return g},
Zz(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.byG(f)
v=J.Z(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.ps())
return w},
ajf(d,e,f,g,h){return this.Zz(d,e,f,g,h,!1)},
Zw(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.byG(f)
v=J.Z(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.ps())
return w},
aje(d,e,f,g,h){return this.Zw(d,e,f,g,h,!1)},
aS7(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bz3(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.fX(e,r.r)},
aS1(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bz3(s,q.b,q.c,new B.I(v,0,u,t))
d.a.fX(e,r.r)},
aS5(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Ow(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iu:C.e8
u.e=C.ew
u.r=v.gq(0)
u.seV(null)
u.c=f.x
u.r=v.gq(0)
$.lE()
u.z=new B.zt(C.au,w.c*0.57735+0.5)
d.a.fX(B.byH(A.aBH(e,f.cy),w.b),this.f)},
aS3(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iu:C.e8
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
A.bz3(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bWQ(t)
d.a.fX(A.aBH(e,f.cy),s.f)},
aSe(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLN(b1),b3=J.Z(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dQ("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lE().a_3(b4,u.b)
s=u.a
r=w.k(0,C.iX)?new B.kw(1):w
q=new B.tz(new B.hC(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.bA,C.w,r,a8,a8,a8,a8,C.bB,a8)
q.afZ(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hP.gew()
k=o+(w-1)*4+(C.hP.gd0(0)+C.hP.gd4(0))
j=t-k-16
i=a7.a_4(b3,l,D.xP,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.G3(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLM(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lE().Kt(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lE().Kt(new B.G(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.VX(0,new A.aLc(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bZx(q.r,q.w)
A:{if(D.Ek===a5){a6=a3
break A}if(D.El===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VX(0,new A.aLd(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
ZD(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
WD(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajH(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h4(t,new A.aLf())
return t.length===0?null:t},
ajH(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fL))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qk(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vy.prototype={}
A.a7F.prototype={
bm(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcM(),t=new A.aLb()
t.a1g()
$.an()
w=B.aX()
w.b=C.b_
t.f=w
w=B.aX()
w.b=C.bg
t.r=w
w=B.aX()
w.b=C.b_
t.w=w
w=B.aX()
w.b=C.bg
w.r=C.J.gq(0)
w.a=D.a0r
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.E.gq(0)
t.y=w
w=B.aX()
w.b=C.bg
w.r=C.n.gq(0)
t.z=w
w=B.aX()
w.b=C.b_
w.r=C.J.gq(0)
w.c=1
t.Q=w
t=new A.abO(this.d,v,u,t,d,C.bp,new B.bp(),B.aK(x.v))
t.bj()
t.YZ(v.cx)
t.af6()
return t},
bx(d,e){e.sip(0,this.d)
e.sYK(this.e)
e.scM(B.bw(d,null,x.w).w.gcM())
e.B=d
e.bd()}}
A.abO.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYK(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a0O(d.cx)
w.bd()},
scM(d){if(this.cX.k(0,d))return
this.cX=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ic(w,new A.a1X(t,v),new A.vP(u.aC,u.i7,u.cX,x.o))
s.restore()},
ZY(d){var w=this,v=w.gC(0)
return new A.OF(w.fY.WD(d,v,new A.vP(w.aC,w.i7,w.cX,x.o)))}}
A.NJ.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1X.prototype={
aPn(d){this.a.a.clipRect(B.dM(d),$.nN()[1],!0)
return null},
adP(d,e){d.aM(this.a,e)},
VX(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lE()
s.YI(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DC(d,e,f,g){var w=B.cH($.an().r)
w.aA(new B.fa(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fX(A.aBH(w,g),f)}}
A.zo.prototype={
gbw(){return[this.a]}}
A.anf.prototype={}
A.a26.prototype={}
A.b2x.prototype={
Kt(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXd(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXe(d,e){var w,v
if(d==null)return D.a0C
w=d.b
v=e/2
return d.aQy(w>v?v:w)},
OK(d,e){var w,v=Math.max(C.d.cB(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_i(w)},
b_i(d){if(d<1)return this.aJj(d)
return this.a8e(d)},
aJj(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8e(d*q)/q},
a8e(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aO(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajv(d){if(d>=1)return 1
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
if(u==null)u=C.j2
w=e.a?u.w.c6(e):e
v=B.b3(d,C.vL)
v=v==null?null:v.ay
return v===!0?w.c6(C.mn):w},
ajn(d,e,f,g){var w=C.d.ae(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qm)","D(eA)","~(v,fG)","F(ed,v)","R<~>()","F(F,qm)","bM(F,tB)","pG(F)","v(qk,qk)","Iz(od)","If(B,bI)","JA(oe)","vD(@)","wz(@)","ed(F)","CQ(@)","ag(F,tB)","uY(dG<uY>)","Ei(dG<aFL>)","F(vD)","F(wz)","wR(B,bI)","Bh(z)","~()","qm(@)","~(ht,L8?)","xH(@)","F(il)","D(fG)","~(v,il)","~(@)","jU(nV)","c(nV)","jU(bH<v,F>)","jU(F)","nV(jU)","~(ht,OF?)","ed(ed)","lU(wo<lU>)","zj(@)","R<oe>(c9<oe>)","tC(v)","uZ(eA,F,ed,v)","rC(n7)","D(ed)","v(vy,vy)","F(fG)","R<od>(c9<od>)","v(v,v,F)","fG(fG,fG,F)","il(il,il,F)","mK(mK,mK,F)","D7?(fG,v,il,v)","E(fG)","c(F,tB)","eA(eA,eA,F)","D(F)","n4(n4,n4,F)","ns(ns,ns,F)","kT(kT,kT,F)","ll(ll,ll,F)","f(kT)","f(ll)","ed(ed,ed,F)","mL(mL,mL,F)","uZ(eA,F,ed,v{size:F?})","D(eA,ed)","F(r,r)","u<tC>(ed,u<v>)","ya(z)","u<rC>(u<n7>)","E(n7)","yx(eo<B?>)"])
A.aFH.prototype={
$1(d){var w=B.d2(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qm(J.am(v==null?"":v),A.p8(w.h(0,"revenue_net")),A.p8(w.h(0,"expense_net")),A.p8(w.h(0,"result_net")))},
$S:z+24}
A.aFI.prototype={
$1(d){var w,v,u,t=B.d2(x.f.a(d),x.N,x.z),s=B.af(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.af(t.h(0,"code"))
v=A.p8(t.h(0,"gross"))
u=B.ba(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vD(s,r,w,v,u,A.p8(t.h(0,"avg_basket")))},
$S:z+12}
A.aFJ.prototype={
$1(d){var w,v=B.d2(x.f.a(d),x.N,x.z),u=B.af(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.ba(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wz(u,t,w,A.p8(v.h(0,"gross")))},
$S:z+13}
A.aG_.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CQ(v,u,J.am(t==null?"expense":t),A.uh(w.h(d,"net")),A.uh(w.h(d,"tax")),A.uh(w.h(d,"gross")))},
$S:z+15}
A.bui.prototype={
$1(d){return new A.uY(d.al($.bX(),x.A))},
$S:z+17}
A.buj.prototype={
$1(d){return new A.Ei(d.al($.bQo(),x.D))},
$S:z+18}
A.bwc.prototype={
$1(d){return E.aFK()},
$S:z+38}
A.buk.prototype={
$1(d){var w=d.al($.xt(),x.P)
return d.al($.awv(),x.a).G_(w)},
$S:z+40}
A.buh.prototype={
$1(d){var w=d.al($.xt(),x.P)
return d.al($.awv(),x.a).FW(w)},
$S:z+47}
A.bug.prototype={
$1(d){return this.aj5(d)},
aj5(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.al($.bX(),x.A).fM("finance_balance_kpis",t),$async$$1)
case 3:s=r.d2(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:238}
A.aFG.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awv(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFF.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awv(),x.a).LD(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFY.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bx1()
if(s.e==null)B.S(B.X(y.b))
s.gce().c7(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFQ.prototype={
$0(){return this.a.Jr(this.b,this.c)},
$S:0}
A.aFR.prototype={
$0(){return this.a.Bl(this.b,this.c)},
$S:0}
A.aFS.prototype={
$0(){var w=x.z
return B.b9(this.a,!1).dN(B.dF(new A.aFP(),null,w),w)},
$S:0}
A.aFP.prototype={
$1(d){return F.Di},
$S:z+69}
A.aFT.prototype={
$0(){return B.oi(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFU.prototype={
$0(){var w=this
return w.a.Bm(w.b,w.c,w.d)},
$S:0}
A.aFX.prototype={
$0(){return D.at0},
$S:108}
A.aFW.prototype={
$2(d,e){return new A.If(B.j(d),null)},
$S:z+10}
A.aFV.prototype={
$1(d){return new A.JA(d,null)},
$S:z+11}
A.aFO.prototype={
$1(d){var w=null,v=this.a,u=$.dN()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lH(B.b([B.dI(C.cY,w,w,new A.aFM(u),w,w),B.e_(F.vn,new A.aFN(u),B.dC(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vo)},
$S:56}
A.aFM.prototype={
$0(){B.b9(this.a,!1).di(!1)
return null},
$S:0}
A.aFN.prototype={
$0(){B.b9(this.a,!1).di(!0)
return null},
$S:0}
A.biC.prototype={
$0(){var w=this.a.aI(0,$.xt().ghR(),x.V),v=E.aFK()
w.ug(0,v)
return v},
$S:0}
A.biD.prototype={
$0(){var w=this.a.aI(0,$.xt().ghR(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lU(B.bP(B.aZ(v),1,1,0,0,0,0),v)
w.ug(0,u)
return u},
$S:0}
A.biE.prototype={
$0(){return this.a.IN(this.b,this.c)},
$S:0}
A.biB.prototype={
$2(d,e){return new B.oP(B.V(d).aPU(B.V(d).ax.aQN(C.h,C.m)),e,null)},
$S:1026}
A.bpj.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.Oo(!1,C.lf,"Umsatz 7 %",t.ap(u.a),w),r=A.Oo(!1,C.lf,"Umsatz 19 %",t.ap(u.b),w),q=A.Oo(!0,D.abu,"Umsatz netto",t.ap(u.c),w),p=A.Oo(!1,D.abt,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aId(1.7,B.b([s,r,q,p,A.Oo(!0,C.nU,"Ergebnis",n,o<0?C.a9:C.ac),A.Oo(!1,C.fO,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.ih,!0)},
$S:133}
A.aKS.prototype={
$0(){return D.asY},
$S:108}
A.aKR.prototype={
$2(d,e){var w=null
return B.bl(C.a9,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.ff,w,C.C,w,w,3)},
$S:154}
A.aKQ.prototype={
$1(d){return new A.Iz(d,null)},
$S:z+9}
A.bfG.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ae(g).i("ab<1,F>"),e=f.i("au.E"),d=B.Q(new B.ab(g,new A.bfv(),f),e)
i=A.jJ(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.ab(g,new A.bfw(),f),e)
d=A.jJ(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.ab(g,new A.bfx(),f),e)
k=A.jJ(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.bfy(),f),e)
w=A.jJ(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.bfz(),f),e)
v=A.jJ(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.bfA(),f),e)
u=A.jJ(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.bfB(),f),e)
t=A.jJ(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.ab(g,new A.bfC(),f),e)
h=A.jJ(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.ab(g,new A.bfD(m),f),e)
m=A.jJ(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.ab(g,new A.bfE(l),f),e)
l=A.jJ(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.bfF(j),f),e)
return E.aId(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jJ(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ih,!0)},
$S:133}
A.bfv.prototype={
$1(d){return d.b},
$S:z+0}
A.bfw.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfx.prototype={
$1(d){return d.d},
$S:z+0}
A.bfy.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfz.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfA.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfB.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfC.prototype={
$1(d){return d.d},
$S:z+0}
A.bfD.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfE.prototype={
$1(d){return this.a},
$S:z+0}
A.bfF.prototype={
$1(d){return this.a},
$S:z+0}
A.bfH.prototype={
$0(){return A.bAX(this.b,1.45,new A.Ui(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfI.prototype={
$0(){return A.bAX(this.b,1.6,new A.Uz(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.btp.prototype={
$1(d){var w=this,v=null,u=B.ay(16),t=x.p,s=B.b([B.aj(B.b([B.av(B.i(w.a,v,v,v,v,B.by(C.h,18,C.o),v,v,v),1),B.fk(v,v,D.adJ,v,v,new A.bto(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.p,12,C.aC),v,v,v),C.D],t))
s.push(C.u)
s.push(B.bN(new B.mI(w.c,w.d,v),v,17976931348623157e292))
return B.a52(v,C.n,new B.ac(C.ai,B.a6(s,C.z,C.f,C.G),v),v,v,v,C.hQ,C.v6,v,new B.cZ(u,C.I),v)},
$S:1027}
A.bto.prototype={
$0(){return B.b9(this.a,!1).eS()},
$S:0}
A.bfJ.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAX(this.b,2.4,new A.YM(w.w,w.y,w.z,null),C.b.ck(u," \xb7 "),v)
return null},
$S:0}
A.bom.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.bon.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.boo.prototype={
$1(d){return A.aL6(null,1.4,null,C.a9,0.35,D.ai5,D.Eb,null,!1,!1,!1,!1,D.Fy,!1,10,D.Z0,!0,C.lu,B.b([new A.eA(0,d),new A.eA(this.a,d)],x.U))},
$S:z+14}
A.b6h.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6j.prototype={
$2(d,e){var w=null
return B.i(this.a.aKy(d),w,w,w,w,B.y(C.p,10,C.H),w,w,w)},
$S:z+16}
A.b6k.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.ve
return new B.ac(C.l_,B.i(C.c.cW(this.a[v].a,5),w,w,w,w,B.y(C.p,9,C.H),w,w,w),w)},
$S:z+6}
A.b6i.prototype={
$1(d){return D.a9U},
$S:z+7}
A.b7h.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7i.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7j.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b7k.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.ve
return new B.ac(C.l_,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bgh.prototype={
$1(d){return d.d},
$S:z+19}
A.bgi.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bqB.prototype={
$1(d){return d.d},
$S:z+20}
A.bqC.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b4I.prototype={
$0(){return D.at6},
$S:108}
A.b4H.prototype={
$2(d,e){return new A.wR("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4G.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bl(m,B.a6(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.D,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.p,12.5,C.l),m,m,m),C.u,B.ku(C.cm,B.b([B.fP(C.F5,D.aGN,new A.b4A(w,v),m),B.fP(D.adm,D.aFG,new A.b4B(w,v),m)],u),C.dx,8,8)],u),C.z,C.f,C.i),C.a8,m,C.C,m,m,3)}w=new A.b4J(d)
t=C.b.fA(n.a.e.d,0,new A.b4C())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jp(new A.b4D(new A.b4K(w),r,w,s))
v=J.Z(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a6(B.b([w,C.D,B.aj(B.b([B.av(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.p,11,C.l),m,m,m),1),B.oM(D.aeB,D.aG0,new A.b4E(q,p),m),B.oM(D.aeb,D.aFM,new A.b4F(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:282}
A.b4A.prototype={
$0(){return A.avO(this.a,this.b,null)},
$S:0}
A.b4B.prototype={
$0(){return A.avL(this.a,this.b)},
$S:0}
A.b4J.prototype={
$1(d){var w=B.ba(J.a3(this.a,d))
return w==null?null:w},
$S:1028}
A.b4K.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:33}
A.b4C.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4D.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jJ(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i1,o.$1("liquidity1_pct")),m=A.jJ(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i1,o.$1("liquidity2_pct")),l=A.jJ(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i1,o.$1("liquidity3_pct"))
o=A.jJ(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i1,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b0(w,".",",")+" %"}w=A.jJ(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i1,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.ap(v)
return E.aId(p,B.b([n,m,l,o,w,A.jJ(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.i1,v)],x.p),q,12,12,C.ih,!0)},
$S:133}
A.b4E.prototype={
$0(){return A.avL(this.a,this.b)},
$S:0}
A.b4F.prototype={
$0(){return A.avO(this.a,this.b,this.c)},
$S:0}
A.btn.prototype={
$1(d){return new A.Bh(this.a,new A.btm(this.b),this.c,null)},
$S:z+22}
A.btm.prototype={
$0(){var w=this.a,v=$.bx0()
if(w.e==null)B.S(B.X(y.b))
w.gce().c7(v)},
$S:0}
A.b4u.prototype={
$0(){},
$S:0}
A.b4v.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4w.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4y.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uo(u.b,B.bP(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4x(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4x.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4z.prototype={
$0(){return B.b9(this.a,!1).eS()},
$S:0}
A.b4L.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4M.prototype={
$1(d){return new A.xH(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayw.prototype={
$1(d){return d.e},
$S:z+27}
A.ayx.prototype={
$2(d,e){return d+e},
$S:43}
A.ayz.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayB.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayC.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adP(v.d,v.e)},
$S:0}
A.ayf.prototype={
$1(d){return 0},
$S:1029}
A.aye.prototype={
$2(d,e){return B.eU(C.bS,this.a.alv(e),C.r,C.bi,null)},
$S:1030}
A.b__.prototype={
$1(d){return d.a},
$S:z+31}
A.b_0.prototype={
$1(d){return d.b},
$S:z+32}
A.b_1.prototype={
$1(d){return new A.jU(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_2.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mG||v===D.dO))t=1-t
return new A.jU(d,t*w.d)},
$S:z+34}
A.b_3.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goB(),p=d.a
r.goB()
r=$.lE()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajv(Math.abs(s.b-s.c)))
t=""}if(C.c.hN(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nV(d,q.c.b.$2(p,new A.tB(u+t,s.e)))},
$S:z+35}
A.aVk.prototype={
$1(d){this.a.l9(new A.a5T(d))},
$S:175}
A.aVl.prototype={
$1(d){this.a.l9(new A.a5U(d))},
$S:42}
A.aVm.prototype={
$1(d){this.a.l9(new A.a5V(d))},
$S:29}
A.aVn.prototype={
$0(){this.a.l9(D.a2l)},
$S:0}
A.aVo.prototype={
$1(d){this.a.l9(new A.Nf())},
$S:46}
A.aVp.prototype={
$1(d){this.a.l9(new A.a5Y(d))},
$S:40}
A.aVq.prototype={
$0(){this.a.l9(D.a2m)},
$S:0}
A.aVr.prototype={
$1(d){this.a.l9(new A.Ni(d))},
$S:77}
A.aVs.prototype={
$1(d){this.a.l9(new A.a5S(d))},
$S:174}
A.aVt.prototype={
$1(d){this.a.l9(new A.a5R(d))},
$S:173}
A.aVu.prototype={
$1(d){return this.a.l9(new A.Nd(d))},
$S:172}
A.aVv.prototype={
$1(d){return this.a.l9(new A.a5W(d))},
$S:62}
A.aVw.prototype={
$1(d){return this.a.l9(new A.Ng(d))},
$S:60}
A.bfU.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQt(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfS.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.bfT.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h4(w,new A.bfR())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.GM(w))},
$S:0}
A.bfR.prototype={
$2(d,e){return C.d.cC(e.b,d.b)},
$S:z+8}
A.bfV.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aL7.prototype={
$1(d){return!d.k(0,D.fL)},
$S:z+1}
A.bu6.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFG(t?A.bAL(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tC(w,new A.yz(!0,A.bBx(),new A.bu5(v)))},
$S:z+41}
A.bu5.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUm(A.bAL(d,e,f),w,A.c2d(d,e,f))},
$S:z+42}
A.bu3.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j0(v,v,u==null?D.dt:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rC(C.d.j(d.b),w)},
$S:z+43}
A.aL9.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLa.prototype={
$1(d){return!d.k(0,D.fL)},
$S:z+1}
A.aLe.prototype={
$2(d,e){return C.d.cC(e.c.b,d.c.b)},
$S:z+45}
A.aLc.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aLd.prototype={
$0(){this.a.adP(this.b,this.c)},
$S:0}
A.aLf.prototype={
$2(d,e){return C.d.cC(d.w,e.w)},
$S:z+8}
A.ayp.prototype={
$1(d){return d.gdt(0)},
$S:z+46}
A.ayq.prototype={
$2(d,e){return d+e},
$S:43}
A.ayt.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iS(v,B.ae(v).i("iS<1>")).aw(0,new A.ayu(w,this.a/(u+1),this.c))},
$S:0}
A.ayu.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+2}
A.ayr.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+2}
A.ays.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIc.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1031}
A.aBI.prototype={
$1(d){return d},
$S:1032};(function aliases(){var w=A.L1.prototype
w.a03=w.ic
w.alP=w.aSa
w.alQ=w.adI
w=A.TT.prototype
w.aoq=w.l
w=A.Lb.prototype
w.a04=w.ic
w=A.Gk.prototype
w.a0O=w.YZ})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5R","bUj",72)
var q
v(q=A.TV.prototype,"gaEt","aEu",23)
v(q,"gaDw","I2",4)
v(q,"gaEd","Id",4)
u(A.TW.prototype,"gasi","asj",25)
t(A,"c4E",3,null,["$3"],["bRD"],49,0)
t(A,"c4F",3,null,["$3"],["bRE"],50,0)
t(A,"c4G",3,null,["$3"],["bRF"],51,0)
t(A,"c4I",4,null,["$4"],["c5u"],52,0)
w(A,"c4H","c5t",53)
s(A,"bB0","c5v",54)
t(A,"c4z",3,null,["$3"],["bUn"],55,0)
w(A,"a_Z","c7U",56)
w(A,"avR","c5y",7)
t(A,"c4B",3,null,["$3"],["bV9"],57,0)
t(A,"c4D",3,null,["$3"],["c_p"],58,0)
t(A,"c4A",3,null,["$3"],["bV8"],59,0)
t(A,"c4C",3,null,["$3"],["c_o"],60,0)
w(A,"cf3","bV7",61)
w(A,"cf4","c_n",62)
r(A.YB.prototype,"ga4u","axP",30)
u(A.Wl.prototype,"gaz4","az5",36)
t(A,"c6K",3,null,["$3"],["bVB"],63,0)
t(A,"c6J",3,null,["$3"],["bRH"],64,0)
w(A,"c6N","c7V",1)
t(A,"bMa",4,null,["$5$size","$4"],["bKC",function(d,e,f,g){return A.bKC(d,e,f,g,null)}],65,0)
s(A,"bBx","c7T",66)
s(A,"bMb","c4m",67)
s(A,"bMe","c5B",68)
s(A,"bMd","c5x",3)
s(A,"bMc","c5w",3)
w(A,"c6M","bLN",70)
w(A,"c6L","bLM",71)
t(A,"a03",3,null,["$3"],["c6I"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.M,[A.a7s,A.ah1,A.amn,A.J8,A.JA,A.ah_,A.If,A.Iz,A.alG,A.amV,A.V8,A.YM,A.Ui,A.Uz,A.anp,A.ajH,A.Ci,A.ate,A.wR,A.L2,A.AI])
u(B.B,[A.uY,A.Ei,A.bh,A.ai8,A.ahZ,A.ai0,A.ai1,A.ahR,A.alq,A.ai4,A.ai2,A.ayL,A.ati,A.ayy,A.ai_,A.Lb,A.a6u,A.tB,A.arF,A.arE,A.ahQ,A.alp,A.eA,A.alm,A.alo,A.apO,A.ame,A.atX,A.aln,A.al2,A.all,A.ayd,A.bfP,A.ayg,A.ahN,A.nV,A.ali,A.alj,A.vP,A.ht,A.an2,A.an5,A.ahW,A.ai9,A.ahX,A.alk,A.an8,A.an6,A.ath,A.arD,A.aL8,A.an4,A.vy,A.a1X,A.anf,A.a26,A.b2x])
u(B.uW,[A.qm,A.vD,A.wz,A.aB5,A.aCd,A.od,A.CQ,A.oe])
u(B.o0,[A.aFH,A.aFI,A.aFJ,A.aG_,A.bui,A.buj,A.bwc,A.buk,A.buh,A.bug,A.aFP,A.aFV,A.aFO,A.aKQ,A.bfv,A.bfw,A.bfx,A.bfy,A.bfz,A.bfA,A.bfB,A.bfC,A.bfD,A.bfE,A.bfF,A.btp,A.boo,A.b6i,A.b7h,A.b7i,A.bgh,A.bqB,A.b4G,A.b4J,A.b4K,A.btn,A.b4M,A.ayw,A.ayz,A.ayf,A.b__,A.b_0,A.b_1,A.b_2,A.b_3,A.aVk,A.aVl,A.aVm,A.aVo,A.aVp,A.aVr,A.aVs,A.aVt,A.aVu,A.aVv,A.aVw,A.bfU,A.bfV,A.aL7,A.bu6,A.bu5,A.bu3,A.aL9,A.aLa,A.ayp,A.aBI])
t(A.yx,B.fD)
u(B.xX,[A.aFG,A.aFF,A.aFY,A.aFQ,A.aFR,A.aFS,A.aFT,A.aFU,A.aFX,A.aFM,A.aFN,A.biC,A.biD,A.biE,A.aKS,A.bfH,A.bfI,A.bto,A.bfJ,A.b4I,A.b4A,A.b4B,A.b4E,A.b4F,A.btm,A.b4u,A.b4v,A.b4w,A.b4y,A.b4x,A.b4z,A.b4L,A.ayC,A.aVn,A.aVq,A.bfS,A.bfT,A.aLc,A.aLd,A.ayt])
u(B.y4,[A.yy,A.aoE,A.a7t,A.ahV])
u(B.xY,[A.aFW,A.biB,A.bpj,A.aKR,A.bfG,A.bom,A.bon,A.b6h,A.b6j,A.b6k,A.b7j,A.b7k,A.bgi,A.bqC,A.b4H,A.b4C,A.b4D,A.ayx,A.ayB,A.aye,A.bfR,A.aLe,A.aLf,A.ayq,A.ayu,A.ayr,A.ays,A.aIc])
u(B.N,[A.Bh,A.RS])
u(B.a0,[A.TV,A.YB])
u(B.NW,[A.L7,A.OD])
u(B.ux,[A.TW,A.Wl])
t(A.a1y,A.ai8)
t(A.ahM,A.a1y)
t(A.a1i,A.ahM)
u(A.a1i,[A.ahY,A.an3])
t(A.nW,A.ahY)
u(B.Ie,[A.ayn,A.aet,A.D6,A.aF5,A.aKT,A.NJ])
t(A.fG,A.ahZ)
t(A.il,A.ai0)
t(A.mK,A.ai1)
t(A.a1p,A.ahR)
t(A.Nj,A.alq)
u(A.Nj,[A.ai3,A.an7])
t(A.a1u,A.ai3)
t(A.a1v,A.ai4)
t(A.D7,A.ai2)
u(A.ayL,[A.L8,A.OF])
t(A.aev,A.ati)
t(A.ai5,A.aev)
t(A.a1w,A.ai5)
u(B.b2,[A.xH,A.zj])
t(A.uD,A.ai_)
t(A.L1,A.Lb)
u(A.L1,[A.ayA,A.aLb])
u(B.Oy,[A.a1s,A.a7F])
u(B.H,[A.Gk,A.ahO])
u(A.Gk,[A.abB,A.abO])
t(A.qc,A.arF)
t(A.ad0,A.arE)
t(A.pl,A.ahQ)
t(A.v_,A.alp)
t(A.yA,A.alm)
t(A.pG,A.alo)
t(A.Qq,A.apO)
t(A.n4,A.ame)
t(A.ns,A.atX)
u(A.pG,[A.amd,A.atW])
t(A.kT,A.amd)
t(A.ll,A.atW)
t(A.a5Q,A.aln)
u(A.a5Q,[A.amc,A.atV])
t(A.a6F,A.amc)
t(A.aeT,A.atV)
t(A.N1,A.al2)
t(A.uZ,A.all)
t(A.Nc,A.uZ)
t(A.ad1,B.h7)
t(A.ahP,A.ahO)
t(A.TT,A.ahP)
t(A.a1j,A.TT)
t(A.jU,A.ahN)
t(A.a5N,A.ali)
t(A.a5P,A.alj)
u(A.ht,[A.a5T,A.a5U,A.a5V,A.Ne,A.Nf,A.a5Y,A.Nh,A.Ni,A.a5S,A.a5R,A.Nd,A.a5W,A.a5X,A.Ng])
t(A.pT,A.an3)
t(A.ed,A.an2)
t(A.OE,A.an5)
t(A.a1r,A.ahW)
t(A.mL,A.ai9)
t(A.L6,A.ahX)
t(A.yz,A.alk)
t(A.EU,A.an7)
t(A.a7G,A.an8)
t(A.an1,A.eA)
t(A.n7,A.an1)
t(A.qk,A.n7)
t(A.rC,A.an6)
t(A.tC,A.ath)
t(A.GM,A.arD)
t(A.zk,A.an4)
t(A.zo,A.anf)
w(A.ahR,A.bh)
w(A.ahY,A.bh)
w(A.ahZ,A.bh)
w(A.ai0,A.bh)
w(A.ai1,A.bh)
w(A.ai2,A.bh)
w(A.ai3,A.bh)
w(A.ai4,A.bh)
w(A.ai5,A.bh)
w(A.ai_,A.bh)
w(A.ahM,A.bh)
w(A.ahQ,A.bh)
w(A.al2,A.bh)
w(A.all,A.bh)
w(A.alm,A.bh)
w(A.alo,A.bh)
w(A.alp,A.bh)
w(A.amd,A.bh)
w(A.amc,A.bh)
w(A.ame,A.bh)
w(A.apO,A.bh)
w(A.arE,A.bh)
w(A.arF,A.bh)
w(A.ati,A.bh)
w(A.atW,A.bh)
w(A.atV,A.bh)
w(A.atX,A.bh)
w(A.ahN,A.bh)
v(A.ahO,B.aD)
w(A.ahP,B.ea)
v(A.TT,B.a4M)
w(A.ai8,A.bh)
w(A.ali,A.bh)
w(A.alj,A.bh)
w(A.alq,A.bh)
w(A.ahW,A.bh)
w(A.ahX,A.bh)
w(A.ai9,A.bh)
w(A.alk,A.bh)
w(A.aln,A.bh)
w(A.an1,A.bh)
w(A.an2,A.bh)
w(A.an3,A.bh)
w(A.an5,A.bh)
w(A.an6,A.bh)
w(A.an7,A.bh)
w(A.an8,A.bh)
w(A.arD,A.bh)
w(A.ath,A.bh)
w(A.an4,A.bh)
w(A.anf,A.bh)})()
B.bqQ(b.typeUniverse,JSON.parse('{"a7s":{"M":[],"c":[]},"Ei":{"aFL":[]},"yx":{"fD":["bf<~>"],"fD.T":"bf<~>"},"JA":{"M":[],"c":[]},"If":{"M":[],"c":[]},"yy":{"bg":[],"N":[],"c":[]},"ah1":{"M":[],"c":[]},"amn":{"M":[],"c":[]},"aoE":{"bg":[],"N":[],"c":[]},"J8":{"M":[],"c":[]},"ah_":{"M":[],"c":[]},"Iz":{"M":[],"c":[]},"wR":{"M":[],"c":[]},"Bh":{"N":[],"c":[]},"a7t":{"bg":[],"N":[],"c":[]},"alG":{"M":[],"c":[]},"amV":{"M":[],"c":[]},"V8":{"M":[],"c":[]},"YM":{"M":[],"c":[]},"Ui":{"M":[],"c":[]},"Uz":{"M":[],"c":[]},"anp":{"M":[],"c":[]},"ajH":{"M":[],"c":[]},"Ci":{"M":[],"c":[]},"ate":{"M":[],"c":[]},"ahV":{"bg":[],"N":[],"c":[]},"TV":{"a0":["Bh"]},"L7":{"N":[],"c":[]},"TW":{"a0":["L7"]},"nW":{"bh":[]},"fG":{"bh":[]},"il":{"bh":[]},"mK":{"bh":[]},"D7":{"bh":[]},"xH":{"b2":["nW"],"b5":["nW"],"b5.T":"nW","b2.T":"nW"},"a1p":{"bh":[]},"a1u":{"bh":[]},"a1v":{"bh":[]},"a1w":{"bh":[]},"uD":{"bh":[]},"a1s":{"aV":[],"c":[]},"abB":{"H":[],"K":[],"jr":[],"aU":[]},"pG":{"bh":[]},"n4":{"bh":[]},"ns":{"bh":[]},"kT":{"bh":[]},"ll":{"bh":[]},"uZ":{"bh":[]},"a1i":{"bh":[]},"qc":{"bh":[]},"ad0":{"bh":[]},"pl":{"bh":[]},"v_":{"bh":[]},"yA":{"bh":[]},"aev":{"bh":[]},"Qq":{"bh":[]},"a6F":{"bh":[]},"aeT":{"bh":[]},"N1":{"bh":[]},"Nc":{"bh":[]},"L2":{"M":[],"c":[]},"RS":{"N":[],"c":[]},"YB":{"a0":["RS"]},"jU":{"bh":[]},"ad1":{"h7":[],"aV":[],"c":[]},"a1j":{"ea":["H","hu"],"H":[],"aD":["H","hu"],"K":[],"aU":[],"aD.1":"hu","ea.1":"hu","aD.0":"H"},"AI":{"M":[],"c":[]},"a1y":{"bh":[]},"a5N":{"bh":[]},"Nj":{"bh":[]},"a5P":{"bh":[]},"a5T":{"ht":[]},"a5U":{"ht":[]},"a5V":{"ht":[]},"Ne":{"ht":[]},"Nf":{"ht":[]},"a5Y":{"ht":[]},"Nh":{"ht":[]},"Ni":{"ht":[]},"a5S":{"ht":[]},"a5R":{"ht":[]},"Nd":{"ht":[]},"a5W":{"ht":[]},"a5X":{"ht":[]},"Ng":{"ht":[]},"Gk":{"H":[],"K":[],"jr":[],"aU":[]},"OD":{"N":[],"c":[]},"Wl":{"a0":["OD"]},"pT":{"bh":[]},"ed":{"bh":[]},"mL":{"bh":[]},"n7":{"eA":[],"bh":[]},"qk":{"n7":[],"eA":[],"bh":[]},"rC":{"bh":[]},"tC":{"bh":[]},"GM":{"bh":[]},"zj":{"b2":["pT"],"b5":["pT"],"b5.T":"pT","b2.T":"pT"},"OE":{"bh":[]},"a1r":{"bh":[]},"L6":{"bh":[]},"yz":{"bh":[]},"a5Q":{"bh":[]},"EU":{"bh":[]},"a7G":{"bh":[]},"zk":{"bh":[]},"a7F":{"aV":[],"c":[]},"abO":{"H":[],"K":[],"jr":[],"aU":[]},"zo":{"bh":[]}}'))
B.bK6(b.typeUniverse,JSON.parse('{"L1":1,"Nj":1,"Lb":1,"Gk":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("CQ"),e:w("bf<od>"),aN:w("bf<oe>"),fM:w("bf<a1<f,@>?>"),b:w("bf<~>"),W:w("jU"),B:w("nW"),dB:w("fG"),T:w("uD"),fj:w("il"),G:w("mK"),J:w("mL"),k:w("ar"),cX:w("a26<F>"),dO:w("uL"),R:w("al<f,@>"),v:w("ho"),bz:w("lN<b8>"),f0:w("o6"),E:w("bh"),F:w("yx"),X:w("od"),P:w("lU"),D:w("uY"),a:w("aFL"),d:w("oe"),cw:w("eA"),L:w("hu"),m:w("dt<v,E>"),cm:w("kT"),dv:w("n4"),g:w("C<nV>"),O:w("C<fG>"),Y:w("C<il>"),C:w("C<bxV>"),U:w("C<eA>"),K:w("C<a6u>"),u:w("C<ed>"),bC:w("C<vy>"),aA:w("C<u<eA>>"),r:w("C<GM>"),s:w("C<f>"),eg:w("C<tz>"),df:w("C<qk>"),p:w("C<c>"),n:w("C<F>"),t:w("C<v>"),eF:w("bk<a0<N>>"),Z:w("n7"),cz:w("ed"),hf:w("pT"),dj:w("zk"),fT:w("rC"),c_:w("ip<p1<bf<~>>>"),x:w("zo<fG>"),y:w("zo<ed>"),I:w("u<v>"),ef:w("vD"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("ka"),aU:w("B"),Q:w("vP<nW>"),o:w("vP<pT>"),eo:w("q2"),gJ:w("q3"),V:w("kl<lU>"),N:w("f"),A:w("nn"),bO:w("bJ"),er:w("tz"),j:w("wz"),dw:w("qk"),bY:w("tC"),cZ:w("qm"),gc:w("kt"),es:w("ll"),bN:w("ns"),l:w("c"),q:w("x8"),g4:w("ih<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xH?"),f3:w("zj?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("B?"),aD:w("kt?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bf=new B.lI(C.m,B.aw("lI<E>"))
D.Bm=new A.D6(0,"left")
D.mG=new A.D6(1,"top")
D.Bn=new A.D6(2,"right")
D.dO=new A.D6(3,"bottom")
D.ax0=new A.qc(!1,A.bB0(),22,null)
D.kv=new A.pl(16,null,D.ax0,!0)
D.a9V=new A.pG(C.E,null,2,null)
D.we=new A.L6(!1,D.a9V,A.c6N(),!0)
D.a0i=new A.ayn(3,"spaceEvenly")
D.a0r=new B.xL(6,"dstIn")
D.Yi=new B.aW(3,3)
D.Br=new B.d4(D.Yi,D.Yi,C.a2,C.a2)
D.a0C=new B.bn(C.E,0,C.T,-1)
D.C0=new A.a5P()
D.a2l=new A.Ne()
D.a2m=new A.Nh()
D.aOQ=new A.ad0()
D.amM=w([],B.aw("C<kT>"))
D.amO=w([],B.aw("C<ll>"))
D.E7=new A.N1(D.amM,D.amO,!0)
D.a9A=new B.dB("Zeitraum",!1,null)
D.a9G=new B.dB("Konten (SKR 03)",!1,null)
D.xP=new A.aF5(0,"center")
D.aP1=new A.yz(!0,A.bBx(),A.bMa())
D.Eb=new A.yz(!1,A.bBx(),A.bMa())
D.Ec=new A.yA(!1,!0,null,A.avR(),A.a_Z(),!0,null,A.avR(),A.a_Z())
D.aP2=new A.yA(!0,!0,null,A.avR(),A.a_Z(),!0,null,A.avR(),A.a_Z())
D.a4I=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a4s=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4S=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4M=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a4a=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a49=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a5e=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a4B=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a5h=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a5b=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.ar2=new B.dt([50,D.a4I,100,D.a4s,200,D.a4S,300,D.a4M,400,D.a4a,500,D.a49,600,D.a5e,700,D.a4B,800,D.a5h,900,D.a5b],x.m)
D.dt=new B.rI(D.ar2,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aj1=w([8,4],x.t)
D.a9T=new A.pG(D.dt,null,0.4,D.aj1)
D.a9U=new A.pG(C.a5,null,0.5,null)
D.fL=new A.eA(0/0,0/0)
D.ax2=new A.qc(!0,A.bB0(),44,null)
D.mH=new A.pl(16,null,D.ax2,!0)
D.ax1=new A.qc(!0,A.bB0(),30,null)
D.mI=new A.pl(16,null,D.ax1,!0)
D.a9W=new A.v_(!1,D.mH,D.mI,D.mH,D.mI)
D.aP3=new A.v_(!0,D.mH,D.mI,D.mH,D.mI)
D.Ek=new A.NJ(0,"left")
D.aaz=new A.NJ(1,"center")
D.El=new A.NJ(2,"right")
D.aaE=new B.a4(57495,"MaterialIcons",null,!1)
D.y6=new B.a4(58927,"MaterialIcons",null,!1)
D.abt=new B.a4(59005,"MaterialIcons",null,!0)
D.abu=new B.a4(59007,"MaterialIcons",null,!0)
D.abv=new B.a4(59011,"MaterialIcons",null,!1)
D.acr=new B.a4(62589,"MaterialIcons",null,!1)
D.abK=new B.a4(61349,"MaterialIcons",null,!1)
D.adj=new B.aA(D.abK,20,C.h,null,null)
D.abR=new B.a4(61487,"MaterialIcons",null,!1)
D.adl=new B.aA(D.abR,18,null,null,null)
D.adm=new B.aA(D.y6,18,null,null,null)
D.adJ=new B.aA(C.hU,null,C.h,null,null)
D.adK=new B.aA(C.ld,null,C.p,null,null)
D.aeb=new B.aA(C.o_,16,null,null,null)
D.aeh=new B.aA(C.yd,16,null,null,null)
D.aaP=new B.a4(57912,"MaterialIcons",null,!1)
D.aek=new B.aA(D.aaP,null,C.a9,null,null)
D.acp=new B.a4(62584,"MaterialIcons",null,!1)
D.aev=new B.aA(D.acp,16,null,null,null)
D.aeB=new B.aA(D.y6,16,null,null,null)
D.agE=new A.a7t(null)
D.aP8=new A.aKT(0,"horizontal")
D.yq=new A.zk(0,0,0,0,!1)
D.Fy=new A.OE(0.5)
D.C6=new A.a7G()
D.agI=new A.EU(D.C6,A.bMe(),10,A.bMb(),!0,A.bMd(),A.bMc(),!1,null,null,null)
D.aPa=new A.EU(D.C6,A.bMe(),10,A.bMb(),!0,A.bMd(),A.bMc(),!0,null,null,null)
D.ai5=w([4,3],x.t)
D.av9=new B.aH("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.auZ=new B.aH("receivables","Forderungen (kurzfristig)")
D.auN=new B.aH("inventory_value","Vorr\xe4te (Warenbestand)")
D.auL=new B.aH("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auy=new B.aH("fixed_assets","Anlageverm\xf6gen")
D.auF=new B.aH("current_liabilities","Kurzfristige Verbindlichkeiten")
D.av5=new B.aH("long_term_liabilities","Langfristige Verbindlichkeiten")
D.auY=new B.aH("equity","Eigenkapital")
D.pI=w([D.av9,D.auZ,D.auN,D.auL,D.auy,D.auF,D.av5,D.auY],B.aw("C<+(f,f)>"))
D.aPd=w([],x.g)
D.amz=w([],x.O)
D.amA=w([],x.Y)
D.amB=w([],B.aw("C<mK>"))
D.amC=w([],B.aw("C<mL>"))
D.aPe=w([],x.U)
D.aPf=w([],x.u)
D.amD=w([],x.r)
D.arE={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TY={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z4=new B.al(D.TY,[0,0,0,0,0,0,0,C.c_],B.aw("al<f,B>"))
D.arB={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqX=new B.al(D.arB,[0,0,0,0],B.aw("al<f,v>"))
D.arT={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqj=new B.al(D.arT,[0,0,0,0,null,null,null,null],B.aw("al<f,v?>"))
D.aqc=new B.al(D.arE,[D.z4,D.z4,D.z4,C.c_,C.c_,C.c_,D.aqX,D.aqj],x.R)
D.aqw=new B.al(D.TY,[0,0,0,0,0,0,0,C.cw],x.R)
D.arF={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqy=new B.al(D.arF,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("al<f,F>"))
D.arA={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqY=new B.al(D.arA,[0,0,0,0,0,0,0,C.cw],x.R)
D.as3={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqZ=new B.al(D.as3,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("al<f,f>"))
D.a5n=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a5v=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a4d=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a4E=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4O=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5K=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3Z=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a4G=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4R=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a5c=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.ar3=new B.dt([50,D.a5n,100,D.a5v,200,D.a4d,300,D.a4E,400,D.a4O,500,D.a5K,600,D.a3Z,700,D.a4G,800,D.a4R,900,D.a5c],x.m)
D.TK=new B.rI(D.ar3,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8R=new B.ah(32,32,32,32)
D.asY=new B.ac(D.a8R,C.bI,null)
D.a8T=new B.ah(48,48,48,48)
D.at0=new B.ac(D.a8T,C.bI,null)
D.at6=new B.ac(C.ai,C.bI,null)
D.amP=w([],B.aw("C<n4>"))
D.amQ=w([],B.aw("C<ns>"))
D.Yk=new A.Qq(D.amP,D.amQ)
D.avV=new B.fn("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avW=new B.fn("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avZ=new B.fn("Automaten-Business","Umsatz je Automat",null,null)
D.aw0=new B.fn("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aw2=new B.fn("Top","Meistverkaufte Produkte",null,null)
D.aw6=new B.fn("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aw7=new B.fn("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z0=new B.tj(C.J,C.v,0)
D.aEB=new B.ag("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayM=new B.dW(D.aEB,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGB=new B.ag('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayP=new B.dW(D.aGB,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aEO=new B.ag("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayQ=new B.dW(D.aEO,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGu=new B.ag("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayS=new B.dW(D.aGu,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aFX=new B.ag("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayT=new B.dW(D.aFX,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aFU=new B.ag("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azc=new B.dW(D.aFU,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aPp=new B.T(!0,C.E,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEL=new B.ag("Demo",null,null,null,null,null,null,null,null,null)
D.aEW=new B.ag("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFG=new B.ag("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFM=new B.ag("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aG0=new B.ag("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGN=new B.ag("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_g=new A.aet(0,"auto")
D.aHq=new A.aet(1,"top")
D.aLO=new A.wR("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLP=new A.wR("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cft","bQo",()=>B.iU(new A.bui(),x.D))
w($,"cfu","awv",()=>B.iU(new A.buj(),x.a))
w($,"cgw","xt",()=>B.bzK(new A.bwc(),x.P))
w($,"cfv","bx1",()=>C.aF.$1$1(new A.buk(),x.d))
w($,"cfs","bQn",()=>C.aF.$1$1(new A.buh(),x.X))
w($,"cfr","bx0",()=>C.aF.$1$1(new A.bug(),x.h))
w($,"cfq","bx_",()=>B.b_S(A.c5R(),x.F,x.b))
w($,"c8H","bwD",()=>new A.ayd())
v($,"cbY","lE",()=>new A.b2x())})()};
(a=>{a["6GH6blq9aqfP7AsJpW9h+6jttME="]=a.current})($__dart_deferred_initializers__);