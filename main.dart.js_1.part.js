((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Pj(d,e,f,g,h){return new A.a8I(f,g,d,h,e,null)},
a8I:function a8I(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vp:function vp(d){this.a=d},
cbY(d){var w
if(x.f.b(d)){w=J.R(d,"error")
if(typeof w=="string"&&C.c.au(w).length!==0)return C.c.au(w)}if(typeof d=="string"&&C.c.au(d).length!==0)return C.c.au(d)
return null},
F1:function F1(d){this.a=d},
c_3(d){var w=J.S(d),v=B.b_(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.b_
w=J.cT(w,new A.aHT(),x.aI)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.or(v,w)},
byr(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fb(J.aj(d))
return w==null?0:w},
pT:function pT(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
or:function or(d,e){this.a=d
this.b=e},
aHT:function aHT(){},
c_4(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.S(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.fF
w=x.f
v=x.N
u=x.z
t=A.aId(B.co(w.a(e.h(a0,"current")),v,u))
s=A.aId(B.co(w.a(e.h(a0,"prior_year")),v,u))
r=A.aId(B.co(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.b_
p=J.cT(p,new A.aHU(),x.cZ)
p=B.Q(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.b_
o=J.cT(o,new A.aHV(),x.ef)
o=B.Q(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.b_
q=J.cT(q,new A.aHW(),x.fB)
q=B.Q(q,q.$ti.i("ax.E"))
n=B.co(w.a(e.h(a0,"customer")),v,u)
m=B.b_(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pn(n.h(0,"app_gross"))
k=B.b_(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pn(n.h(0,"avg_basket"))
u=B.co(w.a(e.h(a0,"derived")),v,u)
v=A.pn(u.h(0,"gross_margin_pct"))
e=A.pn(u.h(0,"net_margin_pct"))
w=A.pn(u.h(0,"ebitda_margin_pct"))
j=A.pn(u.h(0,"cashflow_operating"))
i=A.bys(u.h(0,"revenue_growth_yoy_pct"))
h=A.bys(u.h(0,"revenue_growth_mom_pct"))
g=A.bys(u.h(0,"result_growth_yoy_pct"))
u=A.bys(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.R(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.os(t,s,r,p,o,q,new A.aD0(m,l,k,n),new A.aEb(v,e,w,j,i,h,g,u),f)},
pn(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fb(J.aj(d))
return w==null?0:w},
bys(d){if(d==null)return null
if(typeof d=="number")return d
return B.fb(J.aj(d))},
qC:function qC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vZ:function vZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wX:function wX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD0:function aD0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEb:function aEb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
os:function os(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aHU:function aHU(){},
aHV:function aHV(){},
aHW:function aHW(){},
aId(d){var w=J.S(d),v=A.uG(w.h(d,"revenue_net_7")),u=A.uG(w.h(d,"revenue_net_19")),t=A.uG(w.h(d,"revenue_net")),s=A.uG(w.h(d,"expense_net")),r=A.uG(w.h(d,"result_net")),q=A.uG(w.h(d,"vat_collected")),p=A.uG(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.b_
w=J.cT(w,new A.aIe(),x._)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.ou(v,u,t,s,r,q,p,w)},
uG(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fb(J.aj(d))
return w==null?0:w},
Dr:function Dr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ou:function ou(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIe:function aIe(){},
c_2(d){return new A.z_(d,new B.iA(x.c_),C.dU)},
bzh:function bzh(){},
bzi:function bzi(){},
bBe:function bBe(){},
bzj:function bzj(){},
bzf:function bzf(){},
bzg:function bzg(){},
bze:function bze(){},
z_:function z_(d,e,f){this.r=d
this.a=e
this.f=f},
aHS:function aHS(d,e,f){this.a=d
this.b=e
this.c=f},
aHR:function aHR(d,e,f){this.a=d
this.b=e
this.c=f},
vo:function vo(d,e){this.d=d
this.a=e},
xg:function xg(d,e){this.a=d
this.b=e},
amF:function amF(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bfU:function bfU(d){this.a=d},
bfP:function bfP(d){this.a=d},
bfO:function bfO(d,e){this.a=d
this.b=e},
bfQ:function bfQ(d){this.a=d},
bfN:function bfN(d){this.a=d},
bfT:function bfT(){},
bfS:function bfS(){},
bfR:function bfR(d){this.a=d},
bfM:function bfM(d){this.a=d},
amE:function amE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfI:function bfI(d){this.a=d},
bfJ:function bfJ(d){this.a=d},
bfK:function bfK(d){this.a=d},
bfL:function bfL(d){this.a=d},
xa:function xa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jt:function Jt(d,e,f){this.c=d
this.d=e
this.a=f},
bk3:function bk3(){},
bk4:function bk4(){},
bk5:function bk5(){},
bk6:function bk6(){},
bk7:function bk7(){},
bk8:function bk8(){},
bk9:function bk9(){},
ajG:function ajG(d,e){this.c=d
this.a=e},
xj:function xj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c_5(){return new A.z0(null)},
X9(d,e,f,g,h){return new A.anR(e,h,g,f,d,null)},
z0:function z0(d){this.a=d},
aIc:function aIc(d){this.a=d},
aI3:function aI3(d,e,f){this.a=d
this.b=e
this.c=f},
aI4:function aI4(d,e,f){this.a=d
this.b=e
this.c=f},
aI5:function aI5(d){this.a=d},
aI2:function aI2(){},
aI6:function aI6(d){this.a=d},
aI7:function aI7(d){this.a=d},
aI1:function aI1(){},
aI8:function aI8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aIb:function aIb(){},
aIa:function aIa(){},
aI9:function aI9(){},
aI0:function aI0(d,e){this.a=d
this.b=e},
aHZ:function aHZ(d){this.a=d},
aI_:function aI_(d){this.a=d},
aie:function aie(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anR:function anR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aqi:function aqi(d,e){this.e=d
this.a=e},
bnq:function bnq(d){this.a=d},
bnr:function bnr(d){this.a=d},
bns:function bns(d,e,f){this.a=d
this.b=e
this.c=f},
bnp:function bnp(){},
JZ:function JZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ko:function Ko(d,e){this.c=d
this.a=e},
buh:function buh(d){this.a=d},
bui:function bui(d,e){this.a=d
this.b=e},
bug:function bug(d){this.a=d},
aic:function aic(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
J3:function J3(d,e){this.c=d
this.a=e},
bGe(d,e,f,g,h){var w=null
return B.fg(w,w,!0,w,new A.bym(h,g,e,f),d,w,!0,!0,x.H)},
jW(d,e,f,g,h,i,j,k,l,m,n){return new A.aou(g,n,i,e,d,m,f,k,l,j,null)},
axF(d,e){return A.c9J(d,e)},
c9J(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$axF=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.N(x.q).f
l.aI(D.aDp)
t=4
o=e.aw(0,$.bC(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.h0("finance-balance-sync",B.A(n,n)),$async$axF)
case 7:r=g
q=B.co(x.f.a(r.a),x.N,n)
l.N0()
if(J.d(J.R(q,"configured"),!1)){l.aI(D.aDt)
w=1
break}if(J.d(J.R(q,"ok"),!0)){o=$.bC9()
if(e.e==null)B.U(B.a0(y.b))
e.gcg().c_(o)
l.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Bilanz aus sevDesk \xfcbernommen ("+B.h(J.R(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}else{o=J.R(q,"error")
l.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Sync-Fehler: "+B.h(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a_(k)
l.N0()
l.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Sync fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$axF,v)},
axI(d,e,f){var w=0,v=B.q(x.H)
var $async$axI=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.fg(null,null,!0,null,new A.byk(f,e,e.aw(0,$.bC(),x.A)),d,null,!0,!0,x.H),$async$axI)
case 2:return B.o(null,v)}})
return B.p($async$axI,v)},
a8J:function a8J(d){this.a=d},
aN1:function aN1(){},
aN0:function aN0(){},
aN_:function aN_(){},
Jo:function Jo(d,e){this.c=d
this.a=e},
bjE:function bjE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjt:function bjt(){},
bju:function bju(){},
bjv:function bjv(){},
bjw:function bjw(){},
bjx:function bjx(){},
bjy:function bjy(){},
bjz:function bjz(){},
bjA:function bjA(){},
bjB:function bjB(d){this.a=d},
bjC:function bjC(d){this.a=d},
bjD:function bjD(d){this.a=d},
bjF:function bjF(d,e){this.a=d
this.b=e},
bjG:function bjG(d,e){this.a=d
this.b=e},
bym:function bym(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
byl:function byl(d){this.a=d},
an7:function an7(d){this.a=d},
aou:function aou(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bjH:function bjH(d,e){this.a=d
this.b=e},
W9:function W9(d,e,f){this.c=d
this.d=e
this.a=f},
ZZ:function ZZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
btj:function btj(){},
btk:function btk(){},
btl:function btl(d){this.a=d},
Vi:function Vi(d,e,f){this.c=d
this.d=e
this.a=f},
b8W:function b8W(){},
b8Y:function b8Y(d){this.a=d},
b8Z:function b8Z(d){this.a=d},
b8X:function b8X(){},
Vz:function Vz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9Z:function b9Z(){},
ba_:function ba_(){},
ba0:function ba0(){},
ba1:function ba1(d){this.a=d},
ap1:function ap1(d,e){this.c=d
this.a=e},
bkn:function bkn(){},
bko:function bko(){},
al0:function al0(d,e){this.c=d
this.a=e},
CT:function CT(d,e,f){this.c=d
this.d=e
this.a=f},
av0:function av0(d,e){this.c=d
this.a=e},
bvC:function bvC(){},
bvD:function bvD(){},
xe:function xe(d,e){this.c=d
this.a=e},
aj8:function aj8(d,e){this.e=d
this.a=e},
b6Q:function b6Q(){},
b6P:function b6P(){},
b6O:function b6O(d,e,f){this.a=d
this.b=e
this.c=f},
b6I:function b6I(d,e){this.a=d
this.b=e},
b6J:function b6J(d,e){this.a=d
this.b=e},
b6R:function b6R(d){this.a=d},
b6S:function b6S(d){this.a=d},
b6K:function b6K(){},
b6L:function b6L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6M:function b6M(d,e){this.a=d
this.b=e},
b6N:function b6N(d,e,f){this.a=d
this.b=e
this.c=f},
byk:function byk(d,e,f){this.a=d
this.b=e
this.c=f},
byj:function byj(d){this.a=d},
BN:function BN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UT:function UT(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b6C:function b6C(){},
b6D:function b6D(d){this.a=d},
b6E:function b6E(d){this.a=d},
b6G:function b6G(d,e){this.a=d
this.b=e},
b6F:function b6F(d,e){this.a=d
this.b=e},
b6H:function b6H(d){this.a=d},
bo:function bo(){},
bJJ(d){return new A.M2(d,C.ar,C.c1,null,null)},
M2:function M2(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UU:function UU(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c5$=g
_.c=_.a=null},
b6T:function b6T(d,e){this.a=d
this.b=e},
b6U:function b6U(d){this.a=d},
aAi(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.aoN:f,p=a0==null?16:a0,o=d==null?D.a0y:d,n=g==null,m=n?A.bCD(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yq:a3
n=n?A.bCD(r,r,r,r,r,r,r,r):g
w=j==null?D.EC:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.M:e
return new A.oa(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cn,s,w,i,n)},
aAp(d,e,f,g,h){var w=d==null?D.aoO:d,v=e==null?2:e,u=g==null?C.lM:g
return new A.fU(h,f===!0,w,v,u)},
bXk(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.aAp(A.kI(d.c,e.c,f,A.caw(),x.fj),B.am(d.d,e.d,f),!1,A.kI(d.e,e.e,f,A.a1k(),x.S),w)},
a2O(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TO
else w=h
v=m==null
u=v?8:m
t=$.lM()
s=t.aZ1(f,v?8:m)
t=t.aZ2(g,v?8:m)
v=d==null?A.bJH(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.aoP:k)},
bXl(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.am(d.e,e.e,f),q=B.mV(d.f,e.f,f),p=A.kI(d.r,e.r,f,A.a1k(),x.S),o=B.c1(d.w,e.w,f),n=B.am(d.a,e.a,f),m=B.am(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.am(w.b,v.b,f)
t=B.am(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2O(A.bJH(v,u,null,!1,t),p,q,o,s,n,null,A.kI(d.y,e.y,f,A.cax(),x.G),m,r)},
bXm(d,e,f){var w,v,u=B.am(d.a,e.a,f)
u.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mT(u,w,v,B.c1(d.d,e.d,f))},
bJH(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dy
else w=d
return new A.a2K(g===!0,v,u,w,f)},
bCD(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2Q(4,C.eP,16,D.y7,0,120,A.caz(),!1,!1,D.a_m,0,C.K,A.cay())
else w=k
v=j==null?C.ld:j
return new A.a2P(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
cbm(d,e,f,g){var w=null,v=B.j9(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.C,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DK(C.d.j(f.b),v)},
cbl(d){return A.aCp(D.dy,15)},
oa:function oa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aAh:function aAh(d,e){this.a=d
this.b=e},
fU:function fU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aAq:function aAq(){},
aAr:function aAr(){},
iv:function iv(d,e,f,g,h,i,j,k,l,m){var _=this
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
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2K:function a2K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2P:function a2P(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
afG:function afG(d,e){this.a=d
this.b=e},
a2Q:function a2Q(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
DK:function DK(d,e){this.a=d
this.b=e},
M3:function M3(d){this.a=d},
a2R:function a2R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
ya:function ya(d,e){this.a=d
this.b=e},
aj4:function aj4(){},
ajb:function ajb(){},
ajc:function ajc(){},
aje:function aje(){},
ajf:function ajf(){},
ajg:function ajg(){},
ajh:function ajh(){},
aji:function aji(){},
ajj:function ajj(){},
aAs:function aAs(d){this.a=d},
aAt:function aAt(){},
v1:function v1(d,e,f){this.a=d
this.b=e
this.c=f},
ajd:function ajd(){},
aAu:function aAu(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aAv:function aAv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAw:function aAw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7M:function a7M(d){this.b=d},
a2N:function a2N(d,e,f){this.d=d
this.e=e
this.a=f},
acP:function acP(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h_=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bE=_.aJ=_.al=_.ar=$
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
cbn(d,e){var w=null
return new A.SO(e.w,B.e(e.r,w,w,w,w,w,w,w,w),w)},
aAa(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.am(w.c,v.c,f)
u.toString
return new A.pw(t,e.b,new A.qs(v.a,v.b,u,B.am(w.d,v.d,f)),!0)},
bL5(d,e,f){var w=A.aAa(d.b,e.b,f),v=A.aAa(d.d,e.d,f),u=A.aAa(d.e,e.e,f)
return new A.vr(e.a,w,A.aAa(d.c,e.c,f),v,u)},
c_7(d,e,f){var w,v
if(d.k(0,D.fY))return e
if(e.k(0,D.fY))return d
w=B.am(d.a,e.a,f)
w.toString
v=B.am(d.b,e.b,f)
v.toString
return new A.eG(w,v)},
bL3(d,e,f){return new A.z4(e.a,!0,B.am(d.c,e.c,f),e.d,e.e,e.f,B.am(d.r,e.r,f),e.w,e.x)},
cdN(d){return!0},
cbq(d){return D.aaB},
bL4(d,e,f,g){var w
if(d==null)w=f==null?C.J:null
else w=d
return new A.pU(w,f,g,e)},
bN2(d,e,f){var w,v=A.kI(d.a,e.a,f,A.cas(),x.dv)
v.toString
w=A.kI(d.b,e.b,f,A.cau(),x.bN)
w.toString
return new A.Rm(v,w)},
c_U(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rF(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.ne(t,w,v,u)},
c5b(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rF(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nE(t,w,v,u)},
c_T(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.on(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c_R(B.bCv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rF(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1k(),x.S)
if(u==null)u=v==null?C.J:null
return new A.l1(r,e.f,e.r,t,e.x,u,v,w,s)},
c5a(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.on(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c58(B.bCv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rF(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1k(),x.S)
if(u==null)u=v==null?C.J:null
return new A.lu(r,e.f,e.r,t,e.x,u,v,w,s)},
c_R(d,e,f,g,h,i){return new A.a7X(f,!1,g,i,d,e)},
c_S(d){return C.d.aa(d.e,1)},
c58(d,e,f,g,h,i){return new A.ag5(f,!1,g,i,d,e)},
c59(d){return C.d.aa(d.e,1)},
bL_(d,e,f){var w,v=A.kI(d.a,e.a,f,A.car(),x.cm)
v.toString
w=A.kI(d.b,e.b,f,A.cat(),x.es)
w.toString
return new A.NX(v,w,!0)},
c_6(d,e,f){return new A.O5(d,e==null?4:e,f)},
a2D:function a2D(){},
DJ:function DJ(d,e){this.a=d
this.b=e},
tW:function tW(d,e){this.r=d
this.w=e},
qs:function qs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeg:function aeg(){},
pw:function pw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vr:function vr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eG:function eG(d,e){this.a=d
this.b=e},
z4:function z4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pU:function pU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afI:function afI(){},
Rm:function Rm(d,e){this.a=d
this.b=e},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nE:function nE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
l1:function l1(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lu:function lu(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7X:function a7X(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ag5:function ag5(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
NX:function NX(d,e,f){this.a=d
this.b=e
this.c=f},
vq:function vq(){},
O5:function O5(d,e,f){this.a=d
this.b=e
this.c=f},
aj_:function aj_(){},
aj3:function aj3(){},
amm:function amm(){},
amN:function amN(){},
amO:function amO(){},
amQ:function amQ(){},
amR:function amR(){},
anH:function anH(){},
anG:function anG(){},
anI:function anI(){},
art:function art(){},
ato:function ato(){},
atp:function atp(){},
av4:function av4(){},
avP:function avP(){},
avO:function avO(){},
avQ:function avQ(){},
aA6:function aA6(){},
LY:function LY(){},
LZ:function LZ(d,e,f){this.c=d
this.d=e
this.a=f},
aA8:function aA8(d){this.a=d},
aA7:function aA7(d){this.a=d},
SO:function SO(d,e,f){this.c=d
this.e=e
this.a=f},
ZN:function ZN(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c3H(d,e,f){var w=B.ak(f),v=w.i("ae<1,k2>")
v=B.Q(new B.ae(f,new A.b0Y(),v),v.i("ax.E"))
w=w.i("ae<1,c>")
w=B.Q(new B.ae(f,new A.b0Z(),w),w.i("ax.E"))
return new A.aeh(e,d,v,w,null)},
bXi(d,e,f){var w,v=null,u=B.aN(x.dO),t=J.a8z(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tT(v,C.a3,C.z,new B.kB(1),v,v,v,v,C.by,v)
u=new A.a2E(f,d,e,u,t,!0,0,v,v,new B.bu(),B.aN(x.j))
u.bl()
return u},
aeh:function aeh(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b0Y:function b0Y(){},
b0Z:function b0Z(){},
a2E:function a2E(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.X3$=h
_.aUU$=i
_.ds$=j
_.aj$=k
_.dV$=l
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
bjN:function bjN(d,e){this.a=d
this.b=e},
aA9:function aA9(){},
k2:function k2(d,e){this.a=d
this.b=e},
o9:function o9(d,e){this.a=d
this.b=e},
aj0:function aj0(){},
aj1:function aj1(){},
aj2:function aj2(){},
UR:function UR(){},
Ba:function Ba(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b1_:function b1_(d){this.a=d},
b10:function b10(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b11:function b11(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a74(d,e){var w=d==null?B.c7(C.J,1):d
return new A.a73(e!==!1,w)},
a2T:function a2T(){},
a73:function a73(d,e){this.a=d
this.b=e},
Oc:function Oc(){},
a75:function a75(){},
aAF:function aAF(){},
aH7:function aH7(d,e){this.a=d
this.b=e},
ajm:function ajm(){},
amK:function amK(){},
amL:function amL(){},
amS:function amS(){},
M6:function M6(){},
wc:function wc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hA:function hA(){},
a79:function a79(d){this.a=d},
a7a:function a7a(d){this.a=d},
a7b:function a7b(d){this.a=d},
O7:function O7(){},
O8:function O8(){},
a7e:function a7e(d){this.a=d},
Oa:function Oa(){},
Ob:function Ob(d){this.a=d},
a78:function a78(d){this.a=d},
a77:function a77(d){this.a=d},
O6:function O6(d){this.a=d},
a7c:function a7c(d){this.a=d},
a7d:function a7d(d){this.a=d},
O9:function O9(d){this.a=d},
H6:function H6(){},
aXc:function aXc(d){this.a=d},
aXd:function aXd(d){this.a=d},
aXe:function aXe(d){this.a=d},
aXf:function aXf(d){this.a=d},
aXg:function aXg(d){this.a=d},
aXh:function aXh(d){this.a=d},
aXi:function aXi(d){this.a=d},
aXj:function aXj(d){this.a=d},
aXk:function aXk(d){this.a=d},
aXl:function aXl(d){this.a=d},
aXm:function aXm(d){this.a=d},
aXn:function aXn(d){this.a=d},
aXo:function aXo(d){this.a=d},
Pw:function Pw(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xu:function Xu(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c5$=h
_.c=_.a=null},
bjT:function bjT(d,e){this.a=d
this.b=e},
bjR:function bjR(d){this.a=d},
bjS:function bjS(d,e){this.a=d
this.b=e},
bjQ:function bjQ(){},
bjU:function bjU(d){this.a=d},
bDW(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.M:d
return new A.q7(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aNc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TO:u
else w=g
v=f==null?A.aAg(!1,u,0,u,!1,D.ws):f
w=new A.eh(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aAg(!1,u,0,u,!1,D.ws):d,j,a0,i,s,!1,p)
w.ask(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c0l(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.am(d.x,e.x,f)
m.toString
w=A.bJI(d.ay,e.ay,f)
v=A.bJI(d.ch,e.ch,f)
u=B.am(d.as,e.as,f)
u.toString
t=e.CW
s=A.kI(d.cy,e.cy,f,A.a1k(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rF(d.w,e.w,f)
p=A.kI(d.a,e.a,f,A.caq(),x.cw)
p.toString
o=B.bNA(d.db,e.db,f)
o.toString
n=B.am(d.dy.a,e.dy.a,f)
n.toString
return A.aNc(v,m,w,r,e.z,s,new A.z3(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Px(n),!1,u,o,!0,e.cx,p)},
aAg(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
else w=e
return new A.a2M(h,w,g,i,f,!1)},
bJI(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rF(v.b,u.b,f),r=B.am(v.c,u.c,f)
r.toString
r=A.bL4(t,A.kI(v.d,u.d,f,A.a1k(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rF(d.c,e.c,f)
v=B.am(d.e,e.e,f)
v.toString
return A.aAg(!1,s,v,u,e.a,new A.M1(!1,r,w.c,!0))},
bXn(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rF(d.d,e.d,f)
if(w==null)w=v==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
return new A.mU(e.a,e.b,w,v)},
cdO(d){return!0},
bFZ(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jB)return A.bGP(w.a,A.bDA(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dy:w},
c86(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jB)w=A.bGP(v.a,A.bDA(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dy}return A.aCp(w,40)},
bQb(d,e,f,g,h){var w,v=A.bFZ(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jB)w=A.bGP(u.a,A.bDA(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dy}u=A.aCp(w,40)
return new A.O5(v,h==null?4:h,u)},
cdM(d,e){return!0},
cac(d,e){return Math.abs(d.a-e.a)},
cbt(d,e){var w=J.cT(e,new A.bz5(d),x.bY)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
cbp(d,e){return-1/0},
cbo(d,e){return d.a[e].b},
bRq(d){var w=J.cT(d,new A.bz2(),x.fT)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
bRp(d){return A.aCp(D.dy,15)},
q7:function q7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
eh:function eh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aNd:function aNd(){},
Px:function Px(d){this.a=d},
a2M:function a2M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mU:function mU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
M1:function M1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
aN2:function aN2(d,e){this.a=d
this.b=e},
a76:function a76(){},
FE:function FE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bz5:function bz5(d){this.a=d},
bz4:function bz4(d){this.a=d},
a8W:function a8W(){},
bz2:function bz2(){},
nh:function nh(){},
qA:function qA(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rU:function rU(d,e){this.a=d
this.b=e},
tY:function tY(d,e){this.a=d
this.b=e},
Hy:function Hy(d){this.a=d},
Py:function Py(d){this.a=d},
zS:function zS(d,e){this.a=d
this.b=e},
aj9:function aj9(){},
aja:function aja(){},
ajo:function ajo(){},
amM:function amM(){},
amP:function amP(){},
aoE:function aoE(){},
aoF:function aoF(){},
aoG:function aoG(){},
aoI:function aoI(){},
aoJ:function aoJ(){},
aoK:function aoK(){},
aoL:function aoL(){},
atn:function atn(){},
av3:function av3(){},
aNe:function aNe(d){this.a=d},
aNf:function aNf(){},
aNg:function aNg(){},
zT:function zT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aoH:function aoH(){},
aNh:function aNh(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aNk:function aNk(){},
aNi:function aNi(d,e,f){this.a=d
this.b=e
this.c=f},
aNj:function aNj(d,e,f){this.a=d
this.b=e
this.c=f},
aNl:function aNl(){},
vV:function vV(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8V:function a8V(d,e,f){this.d=d
this.e=e
this.a=f},
ad1:function ad1(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h_=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bE=_.aJ=_.al=_.ar=$
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
bCC(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bH(o.length,0,!1,x.i),m=B.ak(o),l=new B.ae(o,new A.aAj(),m.i("ae<1,G>")).jM(0,new A.aAk()),k=e-l,j=new A.aAn(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdu(0)/2
s=u===o.length-1?0:w
v+=t.gdu(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdu(0)/2
s=u===o.length-1?0:w
v+=t.gdu(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdu(0)/2
s=u===o.length-1?0:w
v+=t.gdu(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAl(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAm(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aAj:function aAj(){},
aAk:function aAk(){},
aAn:function aAn(d,e,f){this.a=d
this.b=e
this.c=f},
aAo:function aAo(d,e,f){this.a=d
this.b=e
this.c=f},
aAl:function aAl(d,e,f){this.a=d
this.b=e
this.c=f},
aAm:function aAm(d,e,f){this.a=d
this.b=e
this.c=f},
bDA(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.ak(w).i("j1<1>")).aD(0,new A.aKp(v,d))
else throw B.f(B.bP('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aKp:function aKp(d,e){this.a=d
this.b=e},
aDC(d,e){var w,v
if(e!=null){w=B.ak(e).i("ae<1,G>")
v=B.Q(new B.ae(e,new A.aDD(),w),w.i("ax.E"))
return A.cbg(d,new A.a3u(v,x.cX))}else return d},
aDD:function aDD(){},
c4i(d,e){var w=!0
if(d!==C.fe)if(!(d===C.a3&&e===C.z))w=d===C.iL&&e===C.b6
if(w)return D.EP
else{w=!0
if(d!==C.hI)if(!(d===C.iL&&e===C.z))w=d===C.a3&&e===C.b6
if(w)return D.EQ
else return D.abm}},
OB:function OB(d,e){this.a=d
this.b=e},
a3k:function a3k(d,e){this.a=d
this.b=e},
zX:function zX(d,e){this.a=d
this.$ti=e},
aoS:function aoS(){},
cbg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.aq(),i=x.v,h=B.b([],i),g=new B.cr(j.r,C.al,k,k,h)
for(j=B.NR(d),w=B.b([],x.I),v=new B.NT(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.U(B.fL('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.NS(v,r)
v.DJ()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.DJ()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.et(B.b([],i),!0,s)
p=new B.Li(new B.cr(t,p,k,new B.arS([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3u:function a3u(d,e){this.a=d
this.b=0
this.$ti=e},
b4t:function b4t(){},
bDo(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fY))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bXq(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aCp(d,e){var w=1-e/100
return B.aG(d.gfJ(d),C.d.aN(d.gOw()*w),C.d.aN(d.gGG()*w),C.d.aN(d.gKW()*w))},
bL2(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bDp(d){var w=d.a,v=w?A.b0X(d.b):0,u=w?A.b0X(d.c):0,t=w?A.b0X(d.d):0
return new B.ai(v,u,t,w?A.b0X(d.e):0)},
c1A(d){var w
if(d.c===0){d.seY(null)
w=B.c5(d.r)
d.r=B.aG(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bEi(d,e,f,g){var w
if(f!=null){d.r=C.J.gt(0)
d.seY(f.mP(0,g))}else{w=e==null?C.M:e
d.r=w.gt(w)
d.seY(null)}},
b0X(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kI(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ccA(d,e,f){return C.d.aN(d+(e-d)*f)},
bGP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kg(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a2(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a8I.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.q
r=r?C.n:C.a9
w=x.p
v=B.b([],w)
C.b.I(v,B.b([B.bN(t.x,C.n,s,18),C.aP],w))
v.push(B.ao(new B.dF(t.c,!1,s),1))
v=B.aa(v,C.y,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.E,B.e(t.d,s,1,C.ag,s,B.bD(u==null?C.h:u,22,C.C),s,s,s)],w)
return B.b6(r,B.a3(w,C.y,C.iu,C.i),q,s,C.ap,s,s,3)}}
A.vp.prototype={
Mh(d){return this.aUT(d)},
aUT(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mh=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dQ("finance_summary",B.a5(["p_from",E.ot(d.a),"p_to",E.ot(d.b)],s,r),r),$async$Mh)
case 3:q=f
if(q==null){u=D.at3
w=1
break}if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.avi
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mh,v)},
Mg(d){return this.aUS(d)},
aUS(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mg=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dQ("finance_kpis",B.a5(["p_from",E.ot(d.a),"p_to",E.ot(d.b)],s,r),r),$async$Mg)
case 3:q=f
if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.asK
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mg,v)},
Mf(d){return this.aUR(d)},
aUR(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mf=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dQ("finance_bookings_list",B.a5(["p_from",E.ot(d.a),"p_to",E.ot(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$Mf)
case 3:q=f
if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.at8
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mf,v)},
pJ(d){return this.as2(d)},
as2(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pJ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.h0("sevdesk-sync",B.a5(["from",E.ot(d.a),"to",E.ot(d.b)],s,s)),$async$pJ)
case 3:r=f.a
if(x.f.b(r)&&typeof J.R(r,"upserted")=="number"){u=C.d.X(B.fy(J.R(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pJ,v)},
Mb(d){return this.aUI(d)},
aUI(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Mb=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.h0("finance-export-pdf",B.a5(["from",E.ot(d.a),"to",E.ot(d.b)],s,s)),$async$Mb)
case 3:r=f.a
if(x.f.b(r)&&typeof J.R(r,"base64")=="string"){u=B.aI(J.R(r,"base64"))
w=1
break}throw B.f(B.e3("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Mb,v)}}
A.F1.prototype={
GA(d){return this.al3(d)},
al3(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GA=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mh(d),$async$GA)
case 7:q=f
o=A.aId(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BS(p)
throw B.f(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$GA,v)},
Gv(d){return this.akP(d)},
akP(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gv=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mg(d),$async$Gv)
case 7:q=f
o=A.c_4(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BS(p)
throw B.f(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gv,v)},
Gl(d){return this.akB(d)},
akB(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gl=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mf(d),$async$Gl)
case 7:q=f
o=A.c_3(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BS(p)
throw B.f(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gl,v)},
pJ(d){return this.as3(d)},
as3(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pJ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pJ(d),$async$pJ)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a_(n)
p=r.BS(q)
throw B.f(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pJ,v)},
Ma(d){return this.aUH(d)},
aUH(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ma=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mb(d),$async$Ma)
case 7:q=f
o=C.j4.cH(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BS(p)
throw B.f(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ma,v)},
BS(d){var w,v
if(d instanceof B.vn)return d
if(d instanceof B.ml){if(d.b==="42501")return new B.wg(d.a)
return new B.tB(d.a)}if(d instanceof B.Op){w=A.cbY(d.b)
v=""+d.a
return new B.tB(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.BD("Unerwarteter Fehler: "+B.h(d))},
$iaHY:1}
A.pT.prototype={
gamI(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbt(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.or.prototype={
gbt(){return[this.a,this.b]}}
A.qC.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vZ.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wX.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aD0.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aEb.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.os.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Dr.prototype={
gbt(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ou.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.z_.prototype={
Hu(d){return this.as1(0)},
as1(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hu=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.see(0,C.dF)
s=t.r
r=s.aw(0,$.r2(),x.P)
p.a=null
w=3
return B.k(B.pv(new A.aHS(p,t,r),x.H),$async$Hu)
case 3:t.see(0,f)
q=t.f
if(q.ghf(q)==null){q=$.bCb()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bIz())
s.c_($.bCa())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hu,v)},
M9(){return this.aUG()},
aUG(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$M9=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.see(0,C.dF)
s=t.r.aw(0,$.r2(),x.P)
q.a=null
w=3
return B.k(B.pv(new A.aHR(q,t,s),x.H),$async$M9)
case 3:t.see(0,e)
r=t.f
u=r.ghf(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M9,v)}}
A.vo.prototype={
U(){return new A.amF(D.Bl)}}
A.xg.prototype={
L(){return"_Filter."+this.b}}
A.amF.prototype={
gSW(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbq(),t=u.ak($.r2(),x.P),s=u.ak($.bCa(),x.e)
u=$.cP()
return B.d7(D.abc,v,B.lj(B.d4(B.b([new B.f_("Zeitraum",u.a5(t.a)+" \u2013 "+u.a5(t.b),v,v),C.L,new A.amE(w.w,w.gSW(),new A.bfP(w),new A.bfQ(w),v),C.ax,B.dl(s,new A.bfR(w),new A.bfS(),new A.bfT(),!1,!0,!1,x.m,x.l)],x.p),v,C.cb,v,C.G,!1),C.n,new A.bfU(w)),v,v,v)},
atq(d){var w=B.ak(d).i("b1<1>")
w=B.Q(new B.b1(d,new A.bfM(this),w),w.i("u.E"))
return w}}
A.amE.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.xa("Alle",t===D.Bl,new A.bfI(v),u),new A.xa("Ausgaben",t===D.a_M,new A.bfJ(v),u),new A.xa("Erl\xf6se",t===D.a_N,new A.bfK(v),u),new A.xa("Privat",t===D.a_O,new A.bfL(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.xa("Konto "+w+" \xd7",!0,v.f,u))
return B.ji(C.c8,t,C.d3,6,8)}}
A.xa.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aN:C.a6,s=B.ar(9999),r=B.ar(9999),q=B.ar(9999),p=B.c7(v?C.n:C.a9,1)
return B.br(w,!0,w,B.du(!1,C.Y,!0,s,B.dT(!1,r,!0,B.aF(w,B.e(u,w,w,w,w,B.t(C.h,13,C.C),w,w,w),C.p,w,w,new B.aB(w,w,p,q,w,w,C.B),w,w,w,w,C.fW,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.p,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.N,w)}}
A.Jt.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aSq
w=this.d
if(w.length===0)return D.aSr
v=B.ak(w).i("b1<1>")
u=new B.b1(w,new A.bk3(),v).f1(0,0,new A.bk4())
t=new B.b1(w,new A.bk5(),v).f1(0,0,new A.bk6())
s=new B.b1(w,new A.bk7(),v).f1(0,0,new A.bk8())
r=new B.b1(w,new A.bk9(),v).gq(0)
v=w.length
q=$.cH()
p=q.a5(t)
o=E.bGj(u,E.bzn("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a5(s)
n=x.p
q=B.b([B.e(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.t(C.h,14,C.C),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.I(q,B.b([C.aI,B.e(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.t(C.l,12,C.k),l,l,l)],n))
if(r>0)C.b.I(q,B.b([C.aI,B.e(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.t(C.V,12,C.k),l,l,l)],n))
k=B.b([B.b6(l,B.a3(q,C.y,C.f,C.i),C.a6,l,C.x,l,l,3),C.L],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.I(k,B.b([new A.ajG(w[m],l),C.E],n))
return B.a3(k,C.ab,C.f,C.i)}}
A.ajG.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.au(n).length!==0)===!0){n.toString
n=C.c.au(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.aa(B.b([B.ao(B.e(n,p,2,C.ag,p,B.t(C.h,14,C.C),p,p,p),1),C.af,new E.DL(o.r,w,v,15,p)],u),C.y,p,C.f,C.i,0,p,p)
w=B.e($.cP().a5(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+E.bH5(w),p,1,C.ag,p,B.t(C.l,12,C.k),p,p,p)
v=C.d.aa(o.y,1)
t=$.cH()
s=t.a5(o.w)
t=t.a5(o.x)
r=o.gamI()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aI,w,C.b2,B.e("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ag,p,B.t(C.l,12,C.k),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.I(q,B.b([C.aI,B.aa(B.b([D.aeN,C.c4,B.ao(B.e("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.t(C.V,11,C.k),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.b6(p,B.a3(q,C.y,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xj.prototype={
p(d){var w=null
return B.b6(w,B.aa(B.b([B.bN(this.e,this.d,w,w),C.af,B.ao(B.e(this.c,w,w,w,w,B.t(C.h,14,C.k),w,w,w),1)],x.p),C.y,w,C.f,C.i,0,w,w),C.a6,w,C.x,w,w,3)}}
A.z0.prototype={
d9(d,e){var w=null,v=e.ak($.r2(),x.P),u=e.ak($.bCb(),x.aN)
return B.lj(B.d4(B.b([new B.f_("Finanzen","Dashboard",new A.aie(e.ak($.bC8(),x.c).gjg(),new A.aI3(this,d,e),new A.aI4(this,d,e),new A.aI5(d),new A.aI6(d),new A.aI7(d),new A.aI8(this,d,e,v),w),w),C.ax,new A.aqi(v,w),C.c5,D.aii,C.c5,B.dl(u,new A.aI9(),new A.aIa(),new A.aIb(),!1,!0,!1,x.d,x.l)],x.p),w,C.cb,w,C.G,!1),C.n,new A.aIc(e))},
K1(d,e){return this.aNg(d,e)},
aNg(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$K1=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bC8()
w=3
return B.k(e.aw(0,n.ghQ(),x.F).Hu(0),$async$K1)
case 3:m=g
if(d.e==null){w=1
break}t=e.aw(0,n,x.c)
s=t.ghf(t)==null
r=t.ghf(t)
if(r instanceof B.vn)q=r.a
else q=r==null?null:J.aj(r)
if(s)p="sevDesk synchronisiert: "+B.h(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.N(x.q).f
o=s?C.I:D.a8C
n.aI(B.bO(null,null,null,null,null,C.o,null,B.e(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$K1,v)},
BT(d,e){return this.ayl(d,e)},
ayl(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aw(0,$.bC8().ghQ(),x.F).M9(),$async$BT)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.N(x.q).f.aI(D.aDv)
w=1
break}t=B.oU(C.v,10)
w=4
return B.k($.bTD().ua(s,"finanzauswertung.pdf",t,null,null,null),$async$BT)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BT,v)},
BU(d,e,f){return this.aKL(d,e,f)},
aKL(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BU=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.fg(null,null,!0,null,new A.aI0(f,d),d,null,!0,!0,x.cJ),$async$BU)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mR(e.aw(0,$.bC(),x.A))
p=f.a
o=f.b
n=$.cP()
m=n.a5(p)
n=n.a5(o)
w=8
return B.k(r.wj("finance_period",p,o,B.a5(["period_from",p.dR()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BU)
case 8:if(d.e!=null)d.N(x.q).f.aI(F.mz)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a_(k)
if(d.e!=null)d.N(x.q).f.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Fehler: "+B.h(q),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BU,v)}}
A.aie.prototype={
p(d){var w=this,v=null,u=A.X9(C.n,F.h1,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.X9(v,D.adp,v,w.r,"Gesellschafter-Freigaben"),s=A.X9(v,D.abE,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.X9(v,D.yo,v,r?v:w.d,"sevDesk synchronisieren"),p=A.X9(C.V,C.fx,C.V,r?v:w.e,"PDF-Export")
return B.aa(B.b([u,C.aP,t,C.aP,s,C.aP,q,C.aP,p,C.aP,A.X9(C.ao,C.h0,C.ao,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.anR.prototype={
p(d){var w,v=this,u=null,t=B.ar(12),s=B.ar(12),r=B.ar(12),q=v.w
if(q==null)q=C.a9
q=B.c7(q,1)
w=v.r
if(w==null)w=C.h
return B.tX(B.du(!1,C.Y,!0,t,B.dT(!1,s,!0,B.aF(u,B.bN(v.c,w,u,20),C.p,u,u,new B.aB(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a6,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.aqi.prototype={
d9(d,e){var w=null,v=this.e,u=$.cP(),t=x.p
return B.b6(w,B.a3(B.b([D.aag,C.E,B.aa(B.b([D.aen,C.an,B.ao(B.e(u.a5(v.a)+" \u2013 "+u.a5(v.b),w,w,w,w,B.t(C.h,16,C.C),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.ji(C.c8,B.b([new A.JZ("Monat",new A.bnq(e),w,w),new A.JZ("Jahr (YTD)",new A.bnr(e),w,w),new A.JZ("Zeitraum w\xe4hlen \u2026",new A.bns(this,d,e),F.F6,w)],t),C.d3,6,8)],t),C.y,C.f,C.i),w,w,C.x,w,w,3)},
Jm(d,e){return this.aJF(d,e)},
aJF(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Jm=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aV(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.ay1(new A.bnp(),d,B.bv(B.aW(t)-5,1,1,0,0,0,0),new B.lW(s.a,s.b,x.bz),B.bv(B.aW(t)+1,1,1,0,0,0,0),C.ee),$async$Jm)
case 2:r=g
if(r!=null)e.aw(0,$.r2().ghQ(),x.V).ut(0,new E.m0(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Jm,v)}}
A.JZ.prototype={
p(d){var w=null,v=B.ar(9999),u=B.ar(9999),t=B.ar(9999),s=B.c7(C.a9,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.I(q,B.b([B.bN(p,C.h,w,14),C.aP],r))
q.push(B.e(this.c,w,w,w,w,B.t(C.h,13,C.C),w,w,w))
return B.du(!1,C.Y,!0,v,B.dT(!1,u,!0,B.aF(w,B.aa(q,C.j,w,C.f,C.H,0,w,w),C.p,w,w,new B.aB(w,w,s,t,w,w,C.B),w,w,w,w,C.fW,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a6,0,w,w,w,w,w,C.bb)}}
A.Ko.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jA(new A.buh(this)),C.c5,D.aam,C.t],q),o=this.c.w
if(o.length===0)p.push(B.b6(r,B.aa(B.b([D.aeU,C.af,B.ao(B.e("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.t(C.l,14,C.k),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a6,r,C.x,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.I(w,B.b([new A.aic(t.a,t.b,s,E.bH5(s),t.d,new A.bui(d,t),r),C.E],q))}p.push(B.a3(w,C.j,C.f,C.i))}return B.a3(p,C.ab,C.f,C.i)}}
A.aic.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aN:C.a6,q=B.c7(s?C.n:C.a9,1),p=B.ar(4),o=v.c,n=x.p
t=B.b([B.aF(C.W,B.e(C.c.a1(o,0,1),u,u,u,u,B.bD(C.h,14,C.r),u,u,u),C.p,u,u,new B.aB(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.af,B.ao(B.a3(B.b([B.e(o+" \xb7 "+v.d,u,1,C.ag,u,B.t(C.h,14,C.C),u,u,u),B.e(v.f,u,u,u,u,B.t(C.l,12,C.k),u,u,u)],n),C.y,C.f,C.i),1),new E.DL(v.r,t,o,15,u)],n)
C.b.I(t,B.b([C.c4,C.FI],n))
w=B.b6(u,B.aa(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.br(u,!0,u,B.dT(!1,B.ar(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u)}}
A.J3.prototype={
p(d){var w=null
return B.b6(C.V,B.aa(B.b([D.afx,C.af,B.ao(B.e(this.c,w,w,w,w,B.t(C.h,14,C.k),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fo,w,C.x,w,w,3)}}
A.a8J.prototype={
d9(d,e){return B.dl(e.ak($.bIz(),x.cn),new A.aN_(),new A.aN0(),new A.aN1(),!1,!0,!1,x.X,x.l)}}
A.Jo.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aAO,C.t,B.jA(new A.bjE(v,q,100-t.w.a,w,p)),C.t,new A.an7(u),C.ax,D.aAN,C.t,new A.aj8(t,u),C.ax,D.aAI,C.t,B.br(u,!0,u,B.kd(u,B.b6(u,new A.Vi(t,220,u),u,u,C.x,u,u,3),C.S,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.ax,D.aAy,C.t,B.br(u,!0,u,B.kd(u,new A.Vz(t,200,!1,u),C.S,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjG(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.ax,D.aAF,C.t,new A.ap1(t,u),C.ax,D.aAA,C.t,new A.al0(t,u)],s)
if(t.f.length!==0)C.b.I(r,B.b([C.ax,D.aAK,C.t,new A.av0(t,u)],s))
return B.a3(r,C.ab,C.f,C.i)}}
A.an7.prototype={
p(d){var w=null
return B.e("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.t(C.l,11,C.k).cC(1.35),w,w,w)}}
A.aou.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.V:C.ao
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bjH(m,d):l
r=x.p
q=B.b([B.ao(B.e(m.c.toUpperCase(),l,l,l,l,B.t(C.l,10,C.r).fm(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.c7(C.V,0.8)
n=B.ar(4)
q.push(B.aF(l,B.e("Ziel "+p,l,l,l,l,B.t(C.V,9,C.r),l,l,l),C.p,l,l,new B.aB(l,l,o,n,l,l,C.B),l,l,l,l,C.nS,l,l,l))}q=B.b([B.aa(q,C.j,l,C.f,C.i,0,l,l),C.aI,B.O3(C.d6,B.e(m.d,l,l,l,l,B.bD(w,22,C.r),l,l,l),C.hU)],r)
p=m.e
if(p!=null)q.push(B.e(p,l,2,C.ag,l,B.t(C.l,10,C.aG),l,l,l))
q.push(C.d2)
q.push(B.aa(B.b([new A.W9("Vormonat",m.r,l),C.c4,new A.W9("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.d2)
q.push(B.ao(new A.ZZ(v,m.y,m.z,l),1))
return B.br(l,u,l,B.kd(l,B.b6(l,B.a3(q,C.y,C.f,C.i),l,l,C.bM,l,l,3),C.S,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.W9.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ar(4)
return B.aF(r,B.e(this.c+" \u2014",r,r,r,r,B.t(C.l,9,C.r),r,r,r),C.p,r,r,new B.aB(C.a9,r,r,q,r,r,C.B),r,r,r,r,C.nS,r,r,r)}w=q>=0
v=w?C.ao:C.V
u=v.dG(0.12)
t=B.c7(v,0.7)
s=B.ar(4)
return B.aF(r,B.aa(B.b([B.bN(w?F.abr:D.abq,v,r,10),C.ZD,B.e(this.c+" "+C.d.aa(q,1)+" %",r,r,r,r,B.t(v,9,C.r),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.p,r,r,new B.aB(u,r,t,s,r,r,C.B),r,r,r,r,C.nS,r,r,r)}}
A.ZZ.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.at
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eG(v,j[v]))
u=C.b.jM(j,new A.btj())
t=C.b.jM(j,new A.btk())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.btl(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a74(k,!1)
w=B.b([A.aNc(k,2,A.aAg(!1,C.n.dG(0.16),0,k,!0,D.ws),C.n,0.35,k,D.EG,k,!0,!1,!0,!1,D.Gh,!1,10,D.Z5,!0,C.lM,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Pw(A.bDW(k,k,k,D.aoQ,l,D.Cn,D.EC,D.EH,w,D.aiv,k,m,k,n,D.Yq,D.aoR,D.aaE),C.ar,C.a7,k,k)}}
A.Vi.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aRv
w=C.b.f1(p,0,new A.b8W())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aAp(B.b([A.a2O(q,q,D.BO,q,C.n,q,q,q,r.b,6),A.a2O(q,q,D.BO,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bQ(A.bJJ(A.aAi(q,q,u,q,q,A.a74(q,!1),q,new A.z4(!0,!0,q,new A.b8X(),A.a1e(),!1,q,A.axL(),A.a1e()),q,v,q,q,new A.vr(!0,new A.pw(16,q,new A.qs(!0,new A.b8Y(this),46,q),!0),D.kG,D.kG,new A.pw(16,q,new A.qs(!0,new A.b8Z(p),26,q),!0)))),this.d,q)},
aMt(d){if(Math.abs(d)>=1000)return C.d.aa(d/1000,1)+" k"
return C.d.aa(d,0)}}
A.Vz.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ae(v,new A.b9Z(),w),x.i)
C.b.I(o,new B.ae(u,new A.ba_(),w))
t=C.b.f1(o,0,new A.ba0())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aAp(B.b([A.a2O(q,q,q,q,C.n,q,q,q,v[s],14),A.a2O(q,q,q,q,C.ao,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bQ(A.bJJ(A.aAi(q,q,n,q,q,A.a74(q,!1),q,D.EH,q,o,q,q,new A.vr(!0,D.kG,D.kG,D.kG,new A.pw(16,q,new A.qs(!0,new A.ba1(p),26,q),!0)))),this.d,q)
return this.e?r:B.b6(q,r,q,q,C.x,q,q,3)}}
A.ap1.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aRu
w=new B.ae(l,new A.bkn(),B.ak(l).i("ae<1,G>")).jM(0,new A.bko())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.e(r.b,m,m,m,m,B.t(C.h,14,C.r),m,m,m)
p=$.cH()
o=r.d
n=new B.b3(4,4)
o=B.b([new B.i0(C.ak,C.f,C.i,C.j,m,C.aX,m,0,B.b([new B.iy(1,C.cU,B.a3(B.b([q,B.e(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a5(r.f),m,m,m,m,B.t(C.l,12,C.aG),m,m,m)],v),C.y,C.f,C.i),m),C.an,B.e(p.a5(o),m,m,m,m,B.bD(C.h,16,C.r),m,m,m)],v),m),C.d2,new B.E9(new B.d9(n,n,n,n),C.bu,B.zU(C.a9,m,8,C.d.bn(o/w,0,1),D.BD),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a1i(r.gbt(),q.gbt())
else q=!0
if(!q)o.push(C.t)
C.b.I(u,o)}return B.b6(m,B.a3(u,C.j,C.f,C.i),m,m,C.x,m,m,3)}}
A.al0.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ao(new A.CT("Aktive Kunden",""+s,u),1)
w=B.ao(new A.CT("K\xe4ufe",""+t.a,u),1)
v=$.cH()
return B.b6(u,B.aa(B.b([s,w,B.ao(new A.CT("\xd8-Warenkorb",v.a5(t.d),u),1),B.ao(new A.CT("Umsatz/Kunde",v.a5(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.x,u,u,3)}}
A.CT.prototype={
p(d){var w=null
return B.a3(B.b([B.e(this.c.toUpperCase(),w,w,w,w,B.t(C.l,10,C.r).fm(0.6),w,w,w),C.b2,B.e(this.d,w,w,w,w,B.bD(C.h,20,C.r),w,w,w)],x.p),C.y,C.f,C.H)}}
A.av0.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ae(q,new A.bvC(),B.ak(q).i("ae<1,G>")).jM(0,new A.bvD()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.b3(4,4)
t=B.b([new B.i0(C.ak,C.f,C.i,C.j,r,C.aX,r,0,B.b([new B.iy(1,C.cU,B.e(u.b,r,1,C.ag,r,B.t(C.h,13,C.r),r,r,r),r),B.e(""+u.c+"\xd7 ",r,r,r,r,B.t(C.l,12,C.C),r,r,r),B.e($.cH().a5(t),r,r,r,r,B.t(C.h,13,C.r),r,r,r)],o),r),C.aI,new B.E9(new B.d9(s,s,s,s),C.bu,B.zU(C.a9,r,6,C.d.bn(t/p,0,1),D.BD),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a1i(u.gbt(),s.gbt())
else s=!0
if(!s)t.push(C.E)
C.b.I(n,t)}return B.b6(r,B.a3(n,C.j,C.f,C.i),r,r,C.x,r,r,3)}}
A.xe.prototype={
p(d){var w=null
return B.b6(w,B.e(this.c,w,w,w,w,B.t(C.l,13,C.k),w,w,w),C.a6,w,C.x,w,w,3)}}
A.aj8.prototype={
d9(d,e){return B.dl(e.ak($.bC9(),x.fM),new A.b6O(this,d,e),new A.b6P(),new A.b6Q(),!1,!0,!1,x.h,x.l)}}
A.BN.prototype={
U(){return new A.UT()},
aZF(){return this.d.$0()}}
A.UT.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aF()
q.d=new B.aV(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.R(w,"as_of"))!=null){w.toString
u=B.dp(J.aj(J.R(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.q3[t].a
if(v)r=""
else{r=B.b_(J.R(w,s))
if(r==null)r=null
r=C.d.aa(r==null?0:r,2)
r=B.ag(r,".",",")}u.m(0,s,new B.bg(new B.ck(r,C.aQ,C.au),$.ah()))}q.e!==$&&B.aX()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cj(v,v.r,v.e,B.l(v).i("cj<2>"))
while(v.u()){w=v.d
w.S$=$.ah()
w.R$=0}this.am()},
rE(d){var w=this.e
w===$&&B.a()
w=C.c.au(w.h(0,d).a.a)
w=B.ag(w,".","")
w=B.fb(B.ag(w,",","."))
return w==null?0:w},
a4S(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q3[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aa(u,2)
s=B.ag(s,".",",")
t.jY(0,t.a.yo(C.au,C.aQ,s))}}this.G(new A.b6C())},
aGf(){this.a4S(D.at5)
this.c.N(x.q).f.aI(D.aDX)},
IC(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$IC=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.bc(a1)
for(e=0;e<8;++e)a2.E(0,D.q3[e].a)
q=a2
t=4
w=7
return B.k($.a6X.ci().w8(B.b(["csv","txt"],x.s),C.o1,!0),$async$IC)
case 7:p=a5
a2=p
o=a2==null?null:J.Le(a2.a).c
if(o==null){w=1
break}n=C.aM.aeq(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Cs.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ayz(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.au(J.R(k,0)).toLowerCase()
i=J.Dm(q,j)?j:D.avj.h(0,j)
if(i==null)continue
d=C.c.au(C.b.mb(J.bWQ(k,1)))
d=B.ag(d,"\u20ac","")
d=B.ag(d," ","")
d=B.ag(d,".","")
h=B.ag(d,",",".")
g=B.fb(h)
if(g!=null)J.fz(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.N(x.q).f.aI(D.aDs)
w=1
break}r.a4S(m)
r.c.N(x.q).f.aI(B.bO(null,null,null,null,null,C.o,null,B.e(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a_(a3)
a1=r.c
if(a1==null){w=1
break}a1.N(x.q).f.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Import fehlgeschlagen: "+B.h(f),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IC,v)},
IN(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IN=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.G(new A.b6D(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b1c("upsert_finance_balance",B.a5(["p_as_of",C.c.a1(n.dR(),0,10),"p_cash_and_bank",q.rE("cash_and_bank"),"p_receivables",q.rE("receivables"),"p_inventory_value",q.rE("inventory_value"),"p_other_current_assets",q.rE("other_current_assets"),"p_fixed_assets",q.rE("fixed_assets"),"p_current_liabilities",q.rE("current_liabilities"),"p_long_term_liabilities",q.rE("long_term_liabilities"),"p_equity",q.rE("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IN)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZF()
o=q.c
o.toString
B.aK(o,!1).eV()
q.c.N(x.q).f.aI(D.aDw)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a_(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.N(x.q).f.aI(B.bO(null,null,null,null,null,C.o,null,B.e("Speichern fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.G(new A.b6E(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IN,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.e("Bilanzwerte erfassen",r,r,r,r,B.bD(C.h,18,C.r),r,r,r),p=s.f?r:new A.b6G(s,d),o=s.d
o===$&&B.a()
p=B.eB(D.aep,B.e("Stichtag: "+C.c.a1(o.dR(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ao(B.eB(D.afI,D.aJV,o?r:s.gaFb(),r),1)
v=x.p
w=B.b([p,C.E,B.aa(B.b([w,C.an,B.ao(B.eB(D.aft,D.aJD,o?r:s.gaGe(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q3[u]
o=s.e
o===$&&B.a()
C.b.I(w,B.b([B.cF(r,C.ae,!1,r,!0,C.o,r,B.cM(),o.h(0,p.a),r,r,r,r,r,2,new B.bw(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.S,!0,r,!0,r,!1,r,C.ah,r,r,r,r,C.dQ,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.x,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.a3,r,C.R,r,r,r,r),C.E],v))}w.push(B.e("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.t(C.l,11,C.k),r,r,r))
p=B.bQ(B.ex(B.a3(w,C.ab,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.cR(C.bz,r,r,o?r:new A.b6H(d),r,r)
o=o?r:s.gaFY()
t=B.dL(C.n,C.h,r,r,r,r,r)
return B.fT(B.b([w,B.de(s.f?F.ZG:C.cO,o,t)],v),C.q,p,q)}}
A.bo.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a1i(this.gbt(),e.gbt())
else w=!0
return w},
gA(d){return(B.fa(B.N(this))^B.bRX(this.gbt()))>>>0},
j(d){B.bKY()
return B.N(this).j(0)}}
A.M2.prototype={
U(){return new A.UU(B.A(x.S,x.J),new A.aAs(B.A(x.x,x.T)),null,null)}}
A.UU.prototype={
p(d){var w,v=this,u=v.a2I(),t=v.CW
t.toString
t=v.a2J(t.av(0,v.gfl().gt(0)))
w=v.a2J(u)
v.a.toString
return new A.LZ(new A.a2N(t,w,null),u,null)},
a2J(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aAp(s.c,s.d,!1,r,s.a))}return d.aRK(w)},
a2I(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.VB(t.ch)
if(r)s=w.a
r=t.y
t=t.aSE(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aRL(A.bCD(!1,!0,!0,v.d,v.c,u.gatH(),v.f,v.e))}return t},
atI(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagT()||e==null||e.a==null){w=v.cy
v.G(w.gaR8(w))
return}v.G(new A.b6T(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2I(),new A.b6U(w)))}}
A.oa.prototype={
We(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aAi(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aSE(d,e){return this.We(null,null,d,e)},
aRL(d){return this.We(null,d,null,null)},
aRK(d){return this.We(d,null,null,null)},
Y9(d,e,f){var w,v,u,t=A.kI(d.ch,e.ch,f,A.cav(),x.dB),s=B.am(d.CW,e.CW,f),r=A.bL5(d.d,e.d,f),q=A.bN2(d.e,e.e,f),p=A.bL3(d.c,e.c,f),o=e.a
o=A.a74(B.a36(d.a.b,o.b,f),o.a)
w=B.am(d.y,e.y,f)
v=B.am(d.x,e.x,f)
u=B.am(d.z,e.z,f)
r=A.aAi(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bL_(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbt(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aAh.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fU.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.aAq(),B.ak(v).i("ae<1,G>")).jM(0,new A.aAr())
v=v.length
return w+(v-1)*this.d},
gbt(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iv.prototype={
gbt(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mT.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a2K.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2P.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.afG.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2Q.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DK.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.M3.prototype={}
A.a2R.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.ya.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Y9(v,w,d)}}
A.aj4.prototype={}
A.ajb.prototype={}
A.ajc.prototype={}
A.aje.prototype={}
A.ajf.prototype={}
A.ajg.prototype={}
A.ajh.prototype={}
A.aji.prototype={}
A.ajj.prototype={}
A.aAs.prototype={
VB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.v1(0,0,!1)
v=new A.zX(d,x.x)
u=this.a
if(u.aG(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.v1(t,u,!0)}w=null
try{w=C.b.p0(d,new A.aAt())}catch(s){return new A.v1(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.v1(q,r,!1)
u.m(0,v,j)
return j}}
A.v1.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.ajd.prototype={}
A.aAu.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0Q(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ado(t,A.bCC(w,t.a),u)
l.y=u
l.aU_(e,u,f)
l.an3(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aU8(d,e,m,t,r,s,n,o,f)}}},
ado(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.f(B.e3("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.ak(p).i("j1<1>")).aD(0,new A.aAv(t,q,r,s))
w.push(new A.a7M(q))}return w},
aU_(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.b3(m,m)
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
if(a1!==a2){if(a1>a2){a3=b2.dJ(Math.max(t,a2),b4,b7)
a4=B.Ri(h,Math.min(b2.dJ(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dJ(Math.min(u,a2),b4,b7)
a4=B.Ri(h,a5,g,Math.max(b2.dJ(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.M:f).gt(0)
k.seY(null)
a6=b2.f.e2()
v.drawRRect(B.lK(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dJ(f,b4,b7)
e=a8.b
b0=b2.dJ(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.K(h,a9,g,b0):new B.K(h,b0,g,a9)
J.bi(v.save())
v.clipRect(B.dS(b1),$.mN()[1],!0)
a6=b2.f.e2()
v.drawRRect(B.lK(a4),a6)
a6.delete()
v.restore()
b2.aU6(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gep(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gt(f)
k.c=n
n=$.aq()
k=B.b([],s)
k.push(new B.hr(a4))
n=A.aDC(new B.cr(n.r,C.al,null,null,k),o.r)
a6=b2.r.e2()
k=n.e
v.drawPath((k==null?n.e=new B.mY(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aU8(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Br(a5,a5,a5,a5,B.cO(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lM().a_T(a8,a7.b),a7.a),C.bk,C.z,a5,b6.c,C.by)
w.ahc(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dJ(s,a6,b6)
q=b4.a
p=a4.dJ(q,a6,b6)
o=b1.b
n=u+o.gey()
m=v+4+(o.gd5(0)+o.gd8(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aMX)j=v===D.a_m&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_U(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.K(h,i,v,t)
s=b1.a
f=new B.b3(s,s)
e=B.GQ(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lM().L6(new B.I(v,t),d).b
s=$.lM()
q=w.b
p=q.c
q=q.a.c
a0=s.L6(new B.I(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gajq()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.WR(d,new A.aAw(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aU6(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gep(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dJ(w,j,k)
u=e.a
t=n.dJ(u,j,k)
w=u<w
u=w?new B.b3(i.z,i.Q):C.a8
s=w?new B.b3(i.x,i.y):C.a8
r=w?C.a8:new B.b3(i.e,i.f)
w=w?C.a8:new B.b3(i.r,i.w)
q=B.Ri(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dJ(v,j,k),i.b)
r=n.dJ(t,j,k)
v=t<v
t=v?C.a8:new B.b3(i.z,i.Q)
p=v?C.a8:new B.b3(i.x,i.y)
o=v?new B.b3(i.e,i.f):C.a8
q=B.Ri(w,s,u,r,t,p,o,v?new B.b3(i.r,i.w):C.a8)}else q=B.bED(w,n.dJ(v,j,k),u,n.dJ(t,j,k),C.a8)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xv(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ado(b2,A.bCC(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dJ(k,b2,b3)
m=b0[q].c[o]
g=a7.dJ(m.a+m.x.b,b2,b3)}else{h=a7.dJ(j+m.x.b,b2,b3)
g=a7.dJ(b0[q].c[o].b,b2,b3)}a7.dJ(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dJ(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dJ(a4.a,b2,b3)
a6=a7.dJ(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a2R(d,q,a0,o,a2,a1,new A.eG(d.a,v),new B.r(n,t))}}return null}}
A.a7M.prototype={}
A.a2N.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aAu()
t.a21()
$.aq()
w=B.b4()
w.b=C.bm
t.f=w
w=B.b4()
w.b=C.b4
t.r=w
w=B.b4()
w.b=C.bm
w.r=C.q.gt(0)
t.w=w
w=B.b4()
w.b=C.b4
w.r=C.M.gt(0)
w.c=1
t.x=w
t=new A.acP(this.d,v,u,t,d,C.bc,new B.bu(),B.aN(x.j))
t.bl()
t.ZL(v.cy)
t.agm()
return t},
by(d,e){e.sip(0,this.d)
e.sZv(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.acP.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZv(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1A(d.cy)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bi(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h_.ih(w,new A.a3k(t,v),new A.wc(u.aE,u.i9,u.d3,x.Q))
s.restore()},
a_M(d){var w=this,v=w.gC(0)
return new A.M3(w.h_.Xv(d,v,new A.wc(w.aE,w.i9,w.d3,x.Q)))}}
A.a2D.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DJ.prototype={
L(){return"AxisSide."+this.b}}
A.tW.prototype={}
A.qs.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeg.prototype={
gbt(){return[!1,0,0,0]}}
A.pw.prototype={
gbt(){return[this.b,this.a,this.c,!0]}}
A.vr.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eG.prototype={
j(d){return"("+B.h(this.a)+", "+B.h(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eG))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.z4.prototype={
gbt(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pU.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afI.prototype={
gbt(){return[this.a,this.b]}}
A.Rm.prototype={
gbt(){return[this.a,this.b]}}
A.ne.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nE.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l1.prototype={
gbt(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lu.prototype={
gbt(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7X.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ag5.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.NX.prototype={
gbt(){return[this.a,this.b,!0]}}
A.vq.prototype={}
A.O5.prototype={
aeQ(d,e,f){var w,v
$.aq()
w=B.b4()
v=this.a
w.r=v.gt(v)
w.b=C.bm
d.iU(f,this.b,w)},
gbt(){return[this.a,this.b,this.c,0]}}
A.aj_.prototype={}
A.aj3.prototype={}
A.amm.prototype={}
A.amN.prototype={}
A.amO.prototype={}
A.amQ.prototype={}
A.amR.prototype={}
A.anH.prototype={}
A.anG.prototype={}
A.anI.prototype={}
A.art.prototype={}
A.ato.prototype={}
A.atp.prototype={}
A.av4.prototype={}
A.avP.prototype={}
A.avO.prototype={}
A.avQ.prototype={}
A.aA6.prototype={
Nh(d,e,f,g,h,i){return new B.ip(this.aXM(d,e,f,g,h,i),x.g4)},
aXL(d,e,f,g){return this.Nh(d,e,f,!0,g,!0)},
aXM(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Nh(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lM().akA(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h4(u-s,v)*v===u
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
A.LY.prototype={
a21(){var w,v=this
$.aq()
w=B.b4()
w.b=C.b4
v.a=w
w=B.b4()
w.b=C.bm
v.b=w
w=B.b4()
w.b=C.bm
v.e=w
w=B.b4()
w.b=C.b4
v.c=w
v.d=B.b4()},
ih(d,e,f){var w=this
w.a0R(d,e,f)
w.aTW(e,f)
w.aU5(e,f)
w.aU4(e,f)},
aU4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lM().Pk(w.a,a1.r-a1.f)
u=$.bBG().Nh(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fo(u.a(),u.$ti.i("fo<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.li(n,m)
if(j!=null){p.r=C.J.gt(0)
p.seY(j.mP(0,i))}else{if(k==null)k=C.M
p.r=k.gt(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c5(p.r)
p.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.Ec(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lM().Pk(w.b,a1.y-a1.x)
u=$.bBG().Nh(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fo(u.a(),u.$ti.i("fo<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dJ(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.li(n,m)
if(k!=null){q.r=C.J.gt(0)
q.seY(k.mP(0,i))}else{if(p==null)p=C.M
q.r=p.gt(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c5(q.r)
q.r=B.aG(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.Ec(n,m,d.a,f.d)}},
aTW(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.he(new B.K(0,0,0+w.a,0+w.b),this.b)},
aU5(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.li(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.J.gt(0)
r.seY(p.mP(0,s))}else{r.r=(q==null?C.M:q).gt(0)
r.seY(null)}o=n.e.e2()
w.drawRect(B.dS(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.li(new B.r(0,n.dJ(t.a,m,e)),new B.r(w,n.dJ(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.J.gt(0)
v.seY(q.mP(0,s))}else{v.r=(r==null?C.M:r).gt(0)
v.seY(null)}o=n.e.e2()
j.drawRect(B.dS(s),o)
o.delete()}},
aU3(d,e,f){var w,v
this.a0R(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeR(d,e,f,w)
if(v.b.length!==0)this.aUa(d,e,f,w)},
aeR(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dJ(o,a1,a0)
m=new B.r(0,n)
o=f.dJ(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.li(m,l)
if(j!=null){n.r=C.J.gt(0)
n.seY(j.mP(0,i))}else{if(k==null)k=C.M
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c5(n.r)
n.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
e.Ec(m,l,f.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=C.d.ao(o,n.gbU(n).eI(0,2))
J.bi(r.save())
r.translate(h,g)
n=n.gOf().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdu(n).eI(0,2)
o=C.d.ao(o,n.gbU(n).eI(0,2))
k=f.d
k===$&&B.a()
s.aeS(0,n,new B.r(h,o),k)}}},
aUa(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=d.ff(o,a3,a2)
m=new B.r(n,0)
o=d.ff(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.li(m,l)
if(j!=null){n.r=C.J.gt(0)
n.seY(j.mP(0,i))}else{if(k==null)k=C.M
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c5(n.r)
n.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
a1.Ec(m,l,d.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.bi(r.save())
r.translate(f,e)
n=n.gOf().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdu(n).eI(0,2)
g=n.gbU(n).ah(0,2)
o=C.d.ao(o,h)
k=C.d.ao(u,g)
j=d.d
j===$&&B.a()
s.aeS(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dJ(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_U(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.LZ.prototype={
gamo(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gamp(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamq(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gamm(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amK(d){var w,v=this,u=null,t=v.d,s=A.bDp(t.d),r=t.a
r=r.a&&A.bXq(r.b)?r.b:u
w=B.b([B.aF(u,v.c,C.p,u,u,new B.aB(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.aA8(w)
if(v.gamo())C.b.hB(w,s.$1(!0),new A.Ba(D.BK,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gamq())C.b.hB(w,s.$1(!0),new A.Ba(D.n2,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gamp())C.b.hB(w,s.$1(!0),new A.Ba(D.BL,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gamm())C.b.hB(w,s.$1(!0),new A.Ba(D.dV,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jA(new A.aA7(this))}}
A.SO.prototype={
U(){return new A.ZN(new B.bp(null,x.eF))}}
A.ZN.prototype={
azr(){switch(this.a.c.a){case 0:return C.eo
case 1:return C.fj
case 2:return C.d6
case 3:return C.dE}},
azX(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
azt(d){this.a.toString
return},
ap(){this.aF()
$.cJ.x1$.push(this.ga5l())},
bc(d){this.bF(d)
$.cJ.x1$.push(this.ga5l())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azX()
return B.BA(B.b41(0,B.aF(v.azr(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aeh.prototype={
bo(d){return A.bXi(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2E.prototype={
ho(d){if(!(d.b instanceof B.hB))d.b=new B.hB(null,null,C.v)},
i_(d){if(this.B===C.ak)return this.yw(d)
return this.aeu(d)},
aMF(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
aac(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dH(d){var w=this.aab(d,B.hQ())
switch(this.B.a){case 0:return d.c4(new B.I(w.a,w.b))
case 1:return d.c4(new B.I(w.b,w.a))}},
aab(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ht(u,null)
break
case 1:q=B.ht(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aac(p)
t=Math.max(t,o.aMF(p))
m=r.aK$}return new A.bjN(n<1/0?n:s,t)},
cE(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga7.call(p)),n=p.aab(o,B.mM()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c4(new B.I(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c4(new B.I(l,m))
p.gC(0)
p.gC(0)
break}w=p.aj$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.aac(r==null?B.U(B.a0("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aK$;++u}},
ej(d,e){return this.yx(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a4.sbh(0,null)
this.vo(d,e)},
l(){this.a4.sbh(0,null)
this.apF()}}
A.bjN.prototype={}
A.aA9.prototype={}
A.k2.prototype={
gbt(){return[this.a,this.b]}}
A.o9.prototype={}
A.aj0.prototype={}
A.aj1.prototype={
aP(d){var w,v,u
this.fv(d)
w=this.aj$
for(v=x.L;w!=null;){w.aP(d)
u=w.b
u.toString
w=v.a(u).aK$}},
aH(d){var w,v,u
this.fk(0)
w=this.aj$
for(v=x.L;w!=null;){w.aH(0)
u=w.b
u.toString
w=v.a(u).aK$}}}
A.aj2.prototype={}
A.UR.prototype={
l(){var w,v,u
for(w=this.X3$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.Ba.prototype={
goG(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d6
case 1:return C.dE
case 2:return C.eo
case 3:return C.fj}},
gb1o(){var w=this.d,v=A.bDp(w.d),u=A.bL2(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ah(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ah(0,new B.ai(u.a,0,u.c,0))}},
gaje(){var w=this.d,v=A.bL2(w.a),u=A.bDp(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aYs(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goG().c.d
if(o==null)o=$.lM().Pk(d,f-e)
w=p.c
v=w!==D.n2
if((!v||w===D.dV)&&p.d instanceof A.oa){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bCC(u,d)
w=new B.j1(t,B.ak(t).i("j1<1>"))
s=w.gi2(w).eQ(0,new A.b1_(u),x.W).fP(0)}else{r=$.bBG()
w=!v||w===D.dV
v=p.d
q=r.aXL(w?v.w:v.z,o,f,e)
v=B.oJ(q,new A.b10(p,f,e,d),q.$ti.i("u.E"),x.W)
s=B.Q(v,B.l(v).i("u.E"))}w=B.ak(s).i("ae<1,o9>")
w=B.Q(new B.ae(s,new A.b11(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goG()
w=j.goG()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aF(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.n2
u=!v
t=!u||w===D.dV
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dV?C.G:C.ak
q=B.b([],x.p)
if(w===D.BK||v)j.goG()
if(j.goG().c.a){v=!u||w===D.dV?r:j.goG().c.c
p=!u||w===D.dV?j.goG().c.c:r
o=j.gb1o()
n=!u||w===D.dV?C.ak:C.G
j.gaje()
m=j.gaje()
l=!u||w===D.dV
k=j.d
l=l?k.f:k.x
u=!u||w===D.dV?k.r:k.y
q.push(B.aF(i,A.c3H(new A.aA9(),n,j.aYs(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BL||w===D.dV)j.goG()
return new B.ee(t,i,i,B.c_8(q,C.j,s,i,C.f,C.H,0,i,i,C.aX),i)}}
A.a2T.prototype={
gbt(){return[this.a,this.b]}}
A.a73.prototype={
gbt(){return[this.a,this.b]}}
A.Oc.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a75.prototype={
gacI(d){return!1},
gbt(){return[!1,!1,!1,!1]}}
A.aAF.prototype={}
A.aH7.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ajm.prototype={}
A.amK.prototype={}
A.amL.prototype={}
A.amS.prototype={}
A.M6.prototype={
ih(d,e,f){}}
A.wc.prototype={}
A.hA.prototype={
gdO(){return null},
gagT(){var w,v=this
B.bI()
B.bI()
B.bI()
w=v instanceof A.Ob
if(w)return!0
return!(v instanceof A.O8)&&!(v instanceof A.O7)&&!(v instanceof A.O9)&&!(v instanceof A.O6)&&!w&&!(v instanceof A.Oa)}}
A.a79.prototype={
gdO(){return this.a.b}}
A.a7a.prototype={
gdO(){return this.a.b}}
A.a7b.prototype={
gdO(){return this.a.b}}
A.O7.prototype={}
A.O8.prototype={}
A.a7e.prototype={
gdO(){return this.a.b}}
A.Oa.prototype={}
A.Ob.prototype={
gdO(){return this.a.b}}
A.a78.prototype={
gdO(){return this.a.b}}
A.a77.prototype={
gdO(){return this.a.b}}
A.O6.prototype={
gdO(){return this.a.b}}
A.a7c.prototype={
gdO(){return this.a.gdO()}}
A.a7d.prototype={
gdO(){return this.a.gdO()}}
A.O9.prototype={
gdO(){return this.a.gdO()}}
A.H6.prototype={
ZL(d){this.V=d.b
this.W=d.c
this.a4=d.d},
agm(){var w=this,v=null,u=w.al=B.bEj(v,v)
u.ay=new A.aXc(w)
u.ch=new A.aXd(w)
u.CW=new A.aXe(w)
u.cy=new A.aXf(w)
u.cx=new A.aXg(w)
u=w.aJ=B.HV(v,-1,v)
u.B=new A.aXh(w)
u.a_=new A.aXi(w)
u.V=new A.aXj(w)
u=w.bE=B.a93(v,w.a4,v)
u.p3=new A.aXk(w)
u.p4=new A.aXl(w)
u.RG=new A.aXm(w)},
cE(){var w=x.k.a(B.M.prototype.ga7.call(this))
this.fy=new B.I(w.b,w.d)},
dH(d){return new B.I(d.b,d.d)},
kM(d){return!0},
mZ(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bE
w===$&&B.a()
w.oE(d)
w=v.aJ
w===$&&B.a()
w.oE(d)
w=v.al
w===$&&B.a()
w.oE(d)}else if(x.gJ.b(d))v.la(new A.a7d(d))},
gNL(d){return new A.aXn(this)},
gNN(d){return new A.aXo(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdO()
v=w!=null?u.a_M(w):null
u.V.$2(d,v)
u.a_=C.bc},
gLz(d){return this.a_},
gG7(){var w=this.ar
w===$&&B.a()
return w},
aP(d){this.fv(d)
this.ar=!0},
aH(d){this.ar=!1
this.fk(0)},
$ijD:1}
A.Pw.prototype={
U(){return new A.Xu(B.b([],x.r),B.A(x.S,x.J),new A.aNe(B.A(x.y,x.dj)),null,null)}}
A.Xu.prototype={
p(d){var w,v=this,u=v.a5n(),t=v.CW
t.toString
t=v.ace(t.av(0,v.gfl().gt(0)))
w=v.ace(u)
v.a.toString
return new A.LZ(new A.a8V(t,w,null),u,null)},
ace(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ak(w).i("ae<1,eh>")
w=B.Q(new B.ae(w,new A.bjT(this,d),v),v.i("ax.E"))
return d.aSB(w,this.cy)},
a5n(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.VB(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSQ(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aSf(new A.FE(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAK(),t.c,t.d))}return r},
aAL(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagT())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.G(new A.bjR(v))
return}v.G(new A.bjS(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a5n(),new A.bjU(w)))}}
A.q7.prototype={
Y9(d,e,f){var w,v,u,t,s,r,q=B.am(d.f,e.f,f),p=B.am(d.r,e.r,f),o=B.am(d.w,e.w,f),n=B.am(d.x,e.x,f),m=B.am(d.y,e.y,f),l=B.am(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a74(B.a36(d.a.b,j.b,f),j.a)
w=A.bL_(d.at,e.at,f)
v=A.bL3(d.c,e.c,f)
u=A.bL5(d.d,e.d,f)
t=A.bN2(d.e,e.e,f)
s=A.kI(d.ch,e.ch,f,A.ccC(),x.cz)
s.toString
r=A.kI(d.CW,e.CW,f,A.ccB(),x.bO)
r.toString
u=A.bDW(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Wf(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bDW(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSQ(d,e,f,g){return this.Wf(null,null,d,e,f,g,null)},
aSf(d){var w=null
return this.Wf(w,d,w,w,w,w,w)},
aSB(d,e){var w=null
return this.Wf(d,w,w,w,w,w,e)},
gbt(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eh.prototype={
ask(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p0(n.a,new A.aNd())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fY))continue
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
ae8(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aNc(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aSm(d){return this.ae8(d,null)},
aSo(d){return this.ae8(null,d)},
gbt(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Px.prototype={
gbt(){return[this.a]}}
A.a2M.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mU.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.M1.prototype={
gbt(){return[!1,this.b,this.c,!0]}}
A.z3.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.aN2.prototype={
L(){return"LabelDirection."+this.b}}
A.a76.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.FE.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8W.prototype={
gbt(){return[4,C.eP,16,D.y7,0,120,A.ccE(),!1,!1,!1,0,C.K,A.ccD()]}}
A.nh.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qA.prototype={}
A.rU.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.tY.prototype={
gbt(){return[this.a,this.b]}}
A.Hy.prototype={
gbt(){return[this.a]}}
A.Py.prototype={}
A.zS.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Y9(v,w,d)}}
A.aj9.prototype={}
A.aja.prototype={}
A.ajo.prototype={}
A.amM.prototype={}
A.amP.prototype={}
A.aoE.prototype={}
A.aoF.prototype={}
A.aoG.prototype={}
A.aoI.prototype={}
A.aoJ.prototype={}
A.aoK.prototype={}
A.aoL.prototype={}
A.atn.prototype={}
A.av3.prototype={}
A.aNe.prototype={
VB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yK
u=new A.zX(d,x.y)
t=this.a
if(t.aG(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zT(s,r,q,t,!0)}w=null
try{w=C.b.p0(d,new A.aNf())}catch(p){return D.yK}v=null
try{v=C.b.p0(w.a,new A.aNg())}catch(p){return D.yK}o=v.a
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
if(f<m)m=f}e=new A.zT(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zT.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.aoH.prototype={}
A.aNh.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacI(0)){v=a3.b
u=v.a
v=v.b
$.aq()
a3.a.iP(new B.K(0,-40,0+(u+40),-40+(v+40)),B.b4())
a3.aRf(new B.K(0,0,u,v))}d.a0Q(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aU1(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTY(a3,q,a4)
d.aU2(a3,q,a4)
d.an2(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.S(o)
if(n.gq(o)!==p.length)throw B.f(B.e3("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vV(q,i,j,k))}}d.aU9(a3,s,a4)
if(w.gacI(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aU7(a2,a3,v,f,new A.Hy(g),a4)}},
aTY(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bDo(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.a_l(o,e,u,f)
s=p.aks(o,e,t,u,f)
r=p.a_n(o,e,t,u,f,!0)
q=p.akr(o,e,t,u,f)
p.aU0(d,s,p.a_k(o,e,t,u,f,!0),f,e)
p.aTV(d,q,r,f,e)
p.aTZ(d,t,e)
p.aTX(d,t,e,f)}},
aU1(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bDo(a5.a),a8=A.bDo(a6.a)
if(a7.length!==a8.length)throw B.f(B.bP("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bY.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ak(n).i("cI<1>")
l=B.Q(new B.cI(n,m),m.i("ax.E"))
k=a2.a_l(a3,a5,o,b2)
j=a2.a_m(a3,a6.aSo(l),l,b2,k)
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
m=a2.dJ(h,a3,b2)
e=a2.ff(g,a3,b2)
d=a2.dJ(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.J.gt(0)
a0.seY(v.mP(0,new B.K(n,m,e,d)))}else{a0.r=(r?C.M:w).gt(0)
a0.seY(null)}$.aq()
a1=new B.mX(C.dG,C.bm,C.ei,C.eE,C.e6).e2()
n=B.dS(new B.K(0,0,t,s))
m=$.bY.b
if(m===$.bY)B.U(B.vT(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e2()
n=j.e
a4.drawPath((n==null?j.e=new B.mY(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aU2(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_r(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fY)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dJ(q.b,w,f)
n.$4(q,p/v*100,e,r).aeQ(s,q,new B.r(p,o))}}},
aU9(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fW(b3,new A.aNk())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.a_r(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dJ(j.b,w,b4)
f=i.b
e=f.a
d=B.cu()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rT(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lI(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lI(q.$2(m,k))))
f=b1.dJ(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dJ(a2,w,b4)
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
b0=B.li(a3,a5)
if(a6!=null){f.r=C.J.gt(0)
f.seY(a6.mP(0,b0))}else{if(a4==null)a4=C.M
f.r=a4.gt(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c5(f.r)
f.r=B.aG(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.Ec(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rT(d.a))
f.aeQ(t,j,new B.r(h,g))}}},
a_m(d,e,f,g,h){var w=this.akt(d,e,f,g,h)
return w},
a_l(d,e,f,g){return this.a_m(d,e,f,g,null)},
akt(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cr($.aq().r,C.al,null,null,B.b([],x.v)):a5,f=J.S(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dJ(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.fk(d,a0))
if(e===1)g.aB(new B.cw(d,a0))}else g.aB(new B.cw(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.ff(f.h(a3,t).a,a1,a4)
r=i.dJ(f.h(a3,t).b,a1,a4)
q=t-1
p=i.ff(f.h(a3,q).a,a1,a4)
q=i.dJ(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.ff(f.h(a3,n?o:t).a,a1,a4)
l=i.dJ(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.N2(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_n(d,e,f,g,h,i){var w=this,v=B.NR(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aB(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,s))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dJ(u.h(g,0).b,d,h)))
v.aB(new B.pF())
return v},
aks(d,e,f,g,h){return this.a_n(d,e,f,g,h,!1)},
a_k(d,e,f,g,h,i){var w=this,v=B.NR(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aB(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,0))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dJ(u.h(g,0).b,d,h)))
v.aB(new B.pF())
return v},
akr(d,e,f,g,h){return this.a_k(d,e,f,g,h,!1)},
aU0(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dJ(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.ff(t.a,w,g)
s=r.r
s===$&&B.a()
A.bEi(s,q.b,q.c,new B.K(v,u,t,w.b))
d.a.i1(e,r.r)},
aTV(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dJ(t.b,w,g)
s=r.r
s===$&&B.a()
A.bEi(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i1(e,r.r)},
aTZ(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.NT(B.NR(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iJ:C.ei
u.e=C.eE
u.r=v.gt(0)
u.seY(null)
u.c=f.x
u.r=v.gt(0)
$.lM()
u.z=new B.A0(C.aA,w.c*0.57735+0.5)
d.a.i1(A.aDC(e,f.cy).ed(w.b),this.f)},
aTX(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iJ:C.ei
q.e=C.eE
q=f.b
q===$&&B.a()
q=s.ff(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dJ(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.ff(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dJ(u.b,r,g)
t=s.f
A.bEi(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c1A(t)
d.a.i1(A.aDC(e,f.cy),s.f)},
aU7(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bRq(b1),b3=J.S(b2)
if(b3.gq(b2)!==b1.length)throw B.f(B.e3("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lM().a_T(b4,u.b)
s=u.a
r=w.k(0,C.j9)?new B.kB(1):w
q=new B.tT(new B.fw(s,a8,a8,C.bc,a8,a8,a8,a8,a8,a8,t),C.bk,C.z,r,a8,a8,a8,a8,C.by,a8)
q.ahc(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dJ(b7.b,a9,b9)
l=p+C.eP.gey()
k=o+(w-1)*4+(C.eP.gd5(0)+C.eP.gd8(0))
j=t-k-16
i=a7.a_U(b3,l,D.y7,0)
b3=i+l
w=j+k
h=new B.b3(4,4)
g=B.GQ(new B.K(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bRp(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lM().L6(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lM().L6(new B.I(t,w),0)
if(!C.K.k(0,C.K)){s=a7.Q
s===$&&B.a()
s.r=C.J.gt(0)
s.c=0}b5.WR(0,new A.aNi(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c4i(q.r,q.w)
A:{if(D.EP===a5){a6=a3
break A}if(D.EQ===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.WR(0,new A.aNj(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_r(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xv(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akU(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fW(t,new A.aNl())
return t.length===0?null:t},
akU(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fY))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dJ(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qA(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vV.prototype={}
A.a8V.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aNh()
t.a21()
$.aq()
w=B.b4()
w.b=C.b4
t.f=w
w=B.b4()
w.b=C.bm
t.r=w
w=B.b4()
w.b=C.b4
t.w=w
w=B.b4()
w.b=C.bm
w.r=C.M.gt(0)
w.a=D.a0I
t.x=w
w=B.b4()
w.b=C.b4
w.r=C.J.gt(0)
t.y=w
w=B.b4()
w.b=C.bm
w.r=C.q.gt(0)
t.z=w
w=B.b4()
w.b=C.b4
w.r=C.M.gt(0)
w.c=1
t.Q=w
t=new A.ad1(this.d,v,u,t,d,C.bc,new B.bu(),B.aN(x.j))
t.bl()
t.ZL(v.cx)
t.agm()
return t},
by(d,e){e.sip(0,this.d)
e.sZv(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.ad1.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZv(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1A(d.cx)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bi(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h_.ih(w,new A.a3k(t,v),new A.wc(u.aE,u.i9,u.d3,x.C))
s.restore()},
a_M(d){var w=this,v=w.gC(0)
return new A.Py(w.h_.Xv(d,v,new A.wc(w.aE,w.i9,w.d3,x.C)))}}
A.OB.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a3k.prototype={
aRf(d){this.a.a.clipRect(B.dS(d),$.mN()[1],!0)
return null},
aeY(d,e){d.aO(this.a,e)},
WR(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bi(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lM()
s.Zt(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ec(d,e,f,g){var w=new B.cr($.aq().r,C.al,null,null,B.b([],x.v))
w.aB(new B.fk(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.i1(A.aDC(w,g),f)}}
A.zX.prototype={
gbt(){return[this.a]}}
A.aoS.prototype={}
A.a3u.prototype={}
A.b4t.prototype={
L6(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aZ1(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.b3(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.b3(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.b3(v,v)
s=d.d
return new B.d9(w,u,t,s.a>v||s.b>v?new B.b3(v,v):s)},
aZ2(d,e){var w,v
if(d==null)return D.a0U
w=d.b
v=e/2
return d.aSr(w>v?v:w)},
Pk(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b19(w)},
b19(d){if(d<1)return this.aL7(d)
return this.a9e(d)},
aL7(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a9e(d*q)/q},
a9e(d){var w,v=C.e.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akJ(d){if(d>=1)return 1
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
a_T(d,e){var w,v,u=d.N(x.f0)
if(u==null)u=C.jf
w=e.a?u.w.c7(e):e
v=B.ba(d,C.w0)
v=v==null?null:v.ay
return v===!0?w.c7(C.mI):w},
akA(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qC)","D(pT)","G(G,pT)","D(eG)","~(w,fU)","G(eh,w)","vo(z)","G(G,qC)","bV(G,tW)","pU(G)","T<~>()","w(qA,qA)","G(vZ)","Jt(or)","qC(@)","vZ(@)","rn(z)","wX(@)","J3(C,bK)","Ko(ou)","Jo(os)","Dr(@)","eh(G)","vp(dP<vp>)","a8(G,tW)","F1(dP<aHY>)","m0(wN<m0>)","pT(@)","G(wX)","xe(C,bK)","BN(z)","~()","T<ou>(c4<ou>)","~(hA,M3?)","ya(@)","G(iv)","D(fU)","~(w,iv)","~(@)","k2(o9)","c(o9)","k2(bA<w,G>)","k2(G)","o9(k2)","~(hA,Py?)","eh(eh)","T<or>(c4<or>)","zS(@)","T<os>(c4<os>)","tY(w)","vq(eG,G,eh,w)","rU(nh)","D(eh)","w(w,w,G)","G(fU)","~(xg)","z_(ev<C?>)","fU(fU,fU,G)","iv(iv,iv,G)","mT(mT,mT,G)","DK?(fU,w,iv,w)","F(fU)","c(G,tW)","eG(eG,eG,G)","D(G)","ne(ne,ne,G)","nE(nE,nE,G)","l1(l1,l1,G)","lu(lu,lu,G)","i(l1)","i(lu)","eh(eh,eh,G)","mU(mU,mU,G)","vq(eG,G,eh,w{size:G?})","D(eG,eh)","G(r,r)","v<tY>(eh,v<w>)","xj(C,bK)","v<rU>(v<nh>)","F(nh)","w(vV,vV)"])
A.aHT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.co(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.aj(k==null?"":k)
w=l.h(0,"booking_date")
w=B.dp(J.aj(w==null?"":w))
if(w==null)w=B.bv(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.aj(v==null?"":v)
u=l.h(0,"account_name")
u=J.aj(u==null?"":u)
t=l.h(0,"direction")
t=J.aj(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.aj(s)
r=A.byr(l.h(0,"amount_net"))
q=A.byr(l.h(0,"amount_tax"))
p=A.byr(l.h(0,"amount_gross"))
o=A.byr(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.aj(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.aj(m)
l=l.h(0,"source_account_code")
return new A.pT(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.aj(l))},
$S:z+27}
A.aHU.prototype={
$1(d){var w=B.co(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qC(J.aj(v==null?"":v),A.pn(w.h(0,"revenue_net")),A.pn(w.h(0,"expense_net")),A.pn(w.h(0,"result_net")))},
$S:z+14}
A.aHV.prototype={
$1(d){var w,v,u,t=B.co(x.f.a(d),x.N,x.z),s=B.al(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.aj(r==null?"unbekannt":r)
w=B.al(t.h(0,"code"))
v=A.pn(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.vZ(s,r,w,v,u,A.pn(t.h(0,"avg_basket")))},
$S:z+15}
A.aHW.prototype={
$1(d){var w,v=B.co(x.f.a(d),x.N,x.z),u=B.al(v.h(0,"product_id")),t=v.h(0,"name")
t=J.aj(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wX(u,t,w,A.pn(v.h(0,"gross")))},
$S:z+17}
A.aIe.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.S(d)
v=w.h(d,"code")
v=J.aj(v==null?"":v)
u=w.h(d,"name")
u=J.aj(u==null?"":u)
t=w.h(d,"direction")
return new A.Dr(v,u,J.aj(t==null?"expense":t),A.uG(w.h(d,"net")),A.uG(w.h(d,"tax")),A.uG(w.h(d,"gross")))},
$S:z+21}
A.bzh.prototype={
$1(d){return new A.vp(d.ak($.bC(),x.A))},
$S:z+23}
A.bzi.prototype={
$1(d){return new A.F1(d.ak($.bW6(),x.D))},
$S:z+25}
A.bBe.prototype={
$1(d){return E.aHX()},
$S:z+26}
A.bzj.prototype={
$1(d){var w=d.ak($.r2(),x.P)
return d.ak($.a1M(),x.a).GA(w)},
$S:z+32}
A.bzf.prototype={
$1(d){var w=d.ak($.r2(),x.P)
return d.ak($.a1M(),x.a).Gl(w)},
$S:z+46}
A.bzg.prototype={
$1(d){var w=d.ak($.r2(),x.P)
return d.ak($.a1M(),x.a).Gv(w)},
$S:z+48}
A.bze.prototype={
$1(d){return this.aki(d)},
aki(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bC(),x.A).fd("finance_balance_kpis",t),$async$$1)
case 3:s=r.co(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aHS.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1M(),x.a).pJ(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHR.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1M(),x.a).Ma(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfU.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbq()
r=$.bCa()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfP.prototype={
$1(d){var w=this.a
return w.G(new A.bfO(w,d))},
$S:z+55}
A.bfO.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bfQ.prototype={
$0(){var w=this.a
return w.G(new A.bfN(w))},
$S:0}
A.bfN.prototype={
$0(){return this.a.x=null},
$S:0}
A.bfT.prototype={
$0(){return F.k5},
$S:88}
A.bfS.prototype={
$2(d,e){return new A.xj("Buchungen konnten nicht geladen werden: "+B.h(d),C.V,F.lp,null)},
$S:z+77}
A.bfR.prototype={
$1(d){return new A.Jt(d,this.a.atq(d.b),null)},
$S:z+13}
A.bfM.prototype={
$1(d){var w=this.a
if(w.gSW()!=null&&d.c!==w.gSW())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bfI.prototype={
$0(){return this.a.e.$1(D.Bl)},
$S:0}
A.bfJ.prototype={
$0(){return this.a.e.$1(D.a_M)},
$S:0}
A.bfK.prototype={
$0(){return this.a.e.$1(D.a_N)},
$S:0}
A.bfL.prototype={
$0(){return this.a.e.$1(D.a_O)},
$S:0}
A.bk3.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bk4.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bk5.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bk6.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bk7.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bk8.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bk9.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aIc.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCb()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aI3.prototype={
$0(){return this.a.K1(this.b,this.c)},
$S:0}
A.aI4.prototype={
$0(){return this.a.BT(this.b,this.c)},
$S:0}
A.aI5.prototype={
$0(){var w=x.z
return B.aK(this.a,!1).dC(B.dy(new A.aI2(),null,w),w)},
$S:0}
A.aI2.prototype={
$1(d){return F.DF},
$S:z+16}
A.aI6.prototype={
$0(){return B.pZ(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aI7.prototype={
$0(){var w=x.z
return B.aK(this.a,!1).dC(B.dy(new A.aI1(),null,w),w)},
$S:0}
A.aI1.prototype={
$1(d){return D.aax},
$S:z+6}
A.aI8.prototype={
$0(){var w=this
return w.a.BU(w.b,w.c,w.d)},
$S:0}
A.aIb.prototype={
$0(){return F.k5},
$S:88}
A.aIa.prototype={
$2(d,e){return new A.J3(B.h(d),null)},
$S:z+18}
A.aI9.prototype={
$1(d){return new A.Ko(d,null)},
$S:z+19}
A.aI0.prototype={
$1(d){var w=null,v=this.a,u=$.cP()
v=B.e("Die Finanzauswertung f\xfcr "+u.a5(v.a)+" \u2013 "+u.a5(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.fT(B.b([B.cR(C.bz,w,w,new A.aHZ(u),w,w),B.de(F.mK,new A.aI_(u),B.dL(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mL)},
$S:46}
A.aHZ.prototype={
$0(){B.aK(this.a,!1).c9(!1)
return null},
$S:0}
A.aI_.prototype={
$0(){B.aK(this.a,!1).c9(!0)
return null},
$S:0}
A.bnq.prototype={
$0(){var w=this.a.aw(0,$.r2().ghQ(),x.V),v=E.aHX()
w.ut(0,v)
return v},
$S:0}
A.bnr.prototype={
$0(){var w=this.a.aw(0,$.r2().ghQ(),x.V),v=new B.aV(Date.now(),0,!1),u=new E.m0(B.bv(B.aW(v),1,1,0,0,0,0),v)
w.ut(0,u)
return u},
$S:0}
A.bns.prototype={
$0(){return this.a.Jm(this.b,this.c)},
$S:0}
A.bnp.prototype={
$2(d,e){return new B.p4(B.W(d).aRO(B.W(d).ax.aSG(C.h,C.n)),e,null)},
$S:1034}
A.buh.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cH(),p=A.Pj(!1,C.lv,"Umsatz 7 %",q.a5(r.a),u),o=A.Pj(!1,C.lv,"Umsatz 19 %",q.a5(r.b),u),n=A.Pj(!0,D.aci,"Umsatz netto",q.a5(r.c),u),m=r.d
m=A.Pj(!1,D.ach,"Aufwand",E.bGj(m,E.bzn(t,"",m)),E.bR8(t,E.bzn(t,"",m)))
w=r.e
v=q.a5(w)
return E.aKq(1.7,B.b([p,o,n,m,A.Pj(!0,C.lq,"Ergebnis",v,w<0?C.V:C.ao),A.Pj(!1,C.h0,"USt-Saldo",q.a5(r.f-r.r),u)],x.p),s,12,12,C.iw,!0)},
$S:142}
A.bui.prototype={
$0(){var w=x.z
return B.aK(this.a,!1).dC(B.dy(new A.bug(this.b),null,w),w)},
$S:0}
A.bug.prototype={
$1(d){return new A.vo(this.a.a,null)},
$S:z+6}
A.aN1.prototype={
$0(){return D.axq},
$S:88}
A.aN0.prototype={
$2(d,e){var w=null
return B.b6(C.V,B.e("KPIs konnten nicht geladen werden: "+B.h(d),w,w,w,w,B.t(C.h,13,C.k),w,w,w),C.fo,w,C.x,w,w,3)},
$S:168}
A.aN_.prototype={
$1(d){return new A.Jo(d,null)},
$S:z+20}
A.bjE.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cH(),i=j.a5(k.c),h=l.w,g=l.d,f=B.ak(g).i("ae<1,G>"),e=f.i("ax.E"),d=B.Q(new B.ae(g,new A.bjt(),f),e)
i=A.jW(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a5(r.b)
w=B.Q(new B.ae(g,new A.bju(),f),e)
d=A.jW(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a5(k.e)
w=B.Q(new B.ae(g,new A.bjv(),f),e)
k=A.jW(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aa(h.b,1)
v=B.Q(new B.ae(g,new A.bjw(),f),e)
w=A.jW(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aa(h.a,1)
u=B.Q(new B.ae(g,new A.bjx(),f),e)
v=A.jW(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aa(r.c,1)
t=B.Q(new B.ae(g,new A.bjy(),f),e)
u=A.jW(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aa(h.c,1)
s=B.Q(new B.ae(g,new A.bjz(),f),e)
t=A.jW(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a5(h.d)
s=B.Q(new B.ae(g,new A.bjA(),f),e)
h=A.jW(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a5(l.r.d)
m=B.Q(new B.ae(g,new A.bjB(m),f),e)
m=A.jW(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a5(l)
l=B.Q(new B.ae(g,new A.bjC(l),f),e)
l=A.jW(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aa(j,1)
j=B.Q(new B.ae(g,new A.bjD(j),f),e)
return E.aKq(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jW(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iw,!0)},
$S:142}
A.bjt.prototype={
$1(d){return d.b},
$S:z+0}
A.bju.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bjv.prototype={
$1(d){return d.d},
$S:z+0}
A.bjw.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjx.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bjy.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bjz.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjA.prototype={
$1(d){return d.d},
$S:z+0}
A.bjB.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bjC.prototype={
$1(d){return this.a},
$S:z+0}
A.bjD.prototype={
$1(d){return this.a},
$S:z+0}
A.bjF.prototype={
$0(){return A.bGe(this.b,1.45,new A.Vi(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bjG.prototype={
$0(){return A.bGe(this.b,1.6,new A.Vz(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bym.prototype={
$1(d){var w=this,v=null,u=B.ar(16),t=x.p,s=B.b([B.aa(B.b([B.ao(B.e(w.a,v,v,v,v,B.bD(C.h,18,C.r),v,v,v),1),B.eW(v,v,D.aeT,v,v,new A.byl(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.I(s,B.b([B.e(w.b,v,v,v,v,B.t(C.l,12,C.aG),v,v,v),C.E],t))
s.push(C.t)
s.push(B.bQ(new B.mS(w.c,w.d,v),v,17976931348623157e292))
return B.a6m(v,C.q,new B.ab(C.ap,B.a3(s,C.y,C.f,C.H),v),v,v,v,C.fv,C.vl,v,new B.d5(u,C.K),v)},
$S:1035}
A.byl.prototype={
$0(){return B.aK(this.a,!1).eV()},
$S:0}
A.bjH.prototype={
$0(){var w=this.a,v=B.ag(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bGe(this.b,2.4,new A.ZZ(w.w,w.y,w.z,null),C.b.c6(u," \xb7 "),v)
return null},
$S:0}
A.btj.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.btk.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.btl.prototype={
$1(d){return A.aNc(null,1.4,null,C.V,0.35,D.ajX,D.EG,null,!1,!1,!1,!1,D.Gh,!1,10,D.Z5,!0,C.lM,B.b([new A.eG(0,d),new A.eG(this.a,d)],x.U))},
$S:z+22}
A.b8W.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b8Y.prototype={
$2(d,e){var w=null
return B.e(this.a.aMt(d),w,w,w,w,B.t(C.l,10,C.C),w,w,w)},
$S:z+24}
A.b8Z.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vu
return new B.ab(C.lb,B.e(C.c.cR(this.a[v].a,5),w,w,w,w,B.t(C.l,9,C.C),w,w,w),w)},
$S:z+8}
A.b8X.prototype={
$1(d){return D.aaC},
$S:z+9}
A.b9Z.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba_.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba0.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.ba1.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vu
return new B.ab(C.lb,B.e(this.a[v],w,w,w,w,B.t(C.h,12,C.r),w,w,w),w)},
$S:z+8}
A.bkn.prototype={
$1(d){return d.d},
$S:z+12}
A.bko.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bvC.prototype={
$1(d){return d.d},
$S:z+28}
A.bvD.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b6Q.prototype={
$0(){return D.axy},
$S:88}
A.b6P.prototype={
$2(d,e){return new A.xe("Bilanzdaten nicht verf\xfcgbar: "+B.h(d),null)},
$S:z+29}
A.b6O.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.b6(m,B.a3(B.b([B.e("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.t(C.h,14,C.C),m,m,m),C.E,B.e("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.t(C.l,12.5,C.k),m,m,m),C.t,B.ji(C.c8,B.b([B.eB(C.FH,D.aMd,new A.b6I(w,v),m),B.eB(D.aeq,D.aKW,new A.b6J(w,v),m)],u),C.d3,8,8)],u),C.y,C.f,C.i),C.a6,m,C.x,m,m,3)}w=new A.b6R(d)
t=C.b.f1(n.a.e.d,0,new A.b6K())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jA(new A.b6L(new A.b6S(w),r,w,s))
v=J.S(d)
u=B.h(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a3(B.b([w,C.E,B.aa(B.b([B.ao(B.e("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.t(C.l,11,C.k),m,m,m),1),B.nz(D.afP,D.aLl,new A.b6M(q,p),m),B.nz(D.afm,D.aL3,new A.b6N(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.ab,C.f,C.i)},
$S:225}
A.b6I.prototype={
$0(){return A.axI(this.a,this.b,null)},
$S:0}
A.b6J.prototype={
$0(){return A.axF(this.a,this.b)},
$S:0}
A.b6R.prototype={
$1(d){var w=B.b_(J.R(this.a,d))
return w==null?null:w},
$S:1036}
A.b6S.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aa(v,1)
w=B.ag(w,".",",")+" %"}return w},
$S:33}
A.b6K.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b6L.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jW(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ig,o.$1("liquidity1_pct")),m=A.jW(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ig,o.$1("liquidity2_pct")),l=A.jW(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ig,o.$1("liquidity3_pct"))
o=A.jW(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ig,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aa(w,1)
w=B.ag(w,".",",")+" %"}w=A.jW(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ig,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cH()
v=u.a5(v)
return E.aKq(p,B.b([n,m,l,o,w,A.jW(s,s,!1,"Bilanzsumme",!1,"EK "+u.a5(t.d),s,s,s,C.ig,v)],x.p),q,12,12,C.iw,!0)},
$S:142}
A.b6M.prototype={
$0(){return A.axF(this.a,this.b)},
$S:0}
A.b6N.prototype={
$0(){return A.axI(this.a,this.b,this.c)},
$S:0}
A.byk.prototype={
$1(d){return new A.BN(this.a,new A.byj(this.b),this.c,null)},
$S:z+30}
A.byj.prototype={
$0(){var w=this.a,v=$.bC9()
if(w.e==null)B.U(B.a0(y.b))
w.gcg().c_(v)},
$S:0}
A.b6C.prototype={
$0(){},
$S:0}
A.b6D.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b6E.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b6G.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.o_(u.b,B.bv(2024,1,1,0,0,0,0),null,r,new B.aV(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.G(new A.b6F(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b6F.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b6H.prototype={
$0(){return B.aK(this.a,!1).eV()},
$S:0}
A.b6T.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b6U.prototype={
$1(d){return new A.ya(x.B.a(d),this.a.a.r)},
$S:z+34}
A.aAq.prototype={
$1(d){return d.e},
$S:z+35}
A.aAr.prototype={
$2(d,e){return d+e},
$S:49}
A.aAt.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.aAv.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.aAw.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.aeY(v.d,v.e)},
$S:0}
A.aA8.prototype={
$1(d){return 0},
$S:1037}
A.aA7.prototype={
$2(d,e){return B.f0(C.bZ,this.a.amK(e),C.o,C.bo,null)},
$S:1038}
A.b0Y.prototype={
$1(d){return d.a},
$S:z+39}
A.b0Z.prototype={
$1(d){return d.b},
$S:z+40}
A.b1_.prototype={
$1(d){return new A.k2(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b10.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.n2||v===D.dV))t=1-t
return new A.k2(d,t*w.d)},
$S:z+42}
A.b11.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goG(),p=d.a
r.goG()
r=$.lM()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aa(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aa(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aa(v/1000,1)
t="K"}else{u=C.d.aa(v,r.akJ(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o9(d,q.c.b.$2(p,new A.tW(u+t,s.e)))},
$S:z+43}
A.aXc.prototype={
$1(d){this.a.la(new A.a79(d))},
$S:170}
A.aXd.prototype={
$1(d){this.a.la(new A.a7a(d))},
$S:43}
A.aXe.prototype={
$1(d){this.a.la(new A.a7b(d))},
$S:30}
A.aXf.prototype={
$0(){this.a.la(D.a2J)},
$S:0}
A.aXg.prototype={
$1(d){this.a.la(new A.O8())},
$S:48}
A.aXh.prototype={
$1(d){this.a.la(new A.a7e(d))},
$S:44}
A.aXi.prototype={
$0(){this.a.la(D.a2K)},
$S:0}
A.aXj.prototype={
$1(d){this.a.la(new A.Ob(d))},
$S:91}
A.aXk.prototype={
$1(d){this.a.la(new A.a78(d))},
$S:173}
A.aXl.prototype={
$1(d){this.a.la(new A.a77(d))},
$S:174}
A.aXm.prototype={
$1(d){return this.a.la(new A.O6(d))},
$S:175}
A.aXn.prototype={
$1(d){return this.a.la(new A.a7c(d))},
$S:67}
A.aXo.prototype={
$1(d){return this.a.la(new A.O9(d))},
$S:60}
A.bjT.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aSm(w==null?B.b([],x.t):w)},
$S:z+45}
A.bjR.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.bjS.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fW(w,new A.bjQ())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.Hy(w))},
$S:0}
A.bjQ.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.bjU.prototype={
$1(d){return new A.zS(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aNd.prototype={
$1(d){return!d.k(0,D.fY)},
$S:z+3}
A.bz5.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bL4(t?A.bFZ(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tY(w,new A.z3(!0,A.bGQ(),new A.bz4(v)))},
$S:z+49}
A.bz4.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c_6(A.bFZ(d,e,f),w,A.c86(d,e,f))},
$S:z+50}
A.bz2.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j9(v,v,u==null?D.dy:u,v,v,v,v,v,v,v,v,14,v,v,C.C,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rU(C.d.j(d.b),w)},
$S:z+51}
A.aNf.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aNg.prototype={
$1(d){return!d.k(0,D.fY)},
$S:z+3}
A.aNk.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+80}
A.aNi.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aNj.prototype={
$0(){this.a.aeY(this.b,this.c)},
$S:0}
A.aNl.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.aAj.prototype={
$1(d){return d.gdu(0)},
$S:z+54}
A.aAk.prototype={
$2(d,e){return d+e},
$S:49}
A.aAn.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.ak(v).i("j1<1>")).aD(0,new A.aAo(w,this.a/(u+1),this.c))},
$S:0}
A.aAo.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.aAl.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.aAm.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aKp.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aDD.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.LY.prototype
w.a0Q=w.ih
w.an2=w.aU3
w.an3=w.aeR
w=A.UR.prototype
w.apF=w.l
w=A.M6.prototype
w.a0R=w.ih
w=A.H6.prototype
w.a1A=w.ZL})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cbJ","c_2",56)
var q
v(q=A.UT.prototype,"gaGe","aGf",31)
v(q,"gaFb","IC",10)
v(q,"gaFY","IN",10)
u(A.UU.prototype,"gatH","atI",33)
t(A,"cav",3,null,["$3"],["bXk"],57,0)
t(A,"caw",3,null,["$3"],["bXl"],58,0)
t(A,"cax",3,null,["$3"],["bXm"],59,0)
t(A,"caz",4,null,["$4"],["cbm"],60,0)
w(A,"cay","cbl",61)
s(A,"bGi","cbn",62)
t(A,"caq",3,null,["$3"],["c_7"],63,0)
w(A,"a1e","cdN",64)
w(A,"axL","cbq",9)
t(A,"cas",3,null,["$3"],["c_U"],65,0)
t(A,"cau",3,null,["$3"],["c5b"],66,0)
t(A,"car",3,null,["$3"],["c_T"],67,0)
t(A,"cat",3,null,["$3"],["c5a"],68,0)
w(A,"cl4","c_S",69)
w(A,"cl5","c59",70)
r(A.ZN.prototype,"ga5l","azt",38)
u(A.Xu.prototype,"gaAK","aAL",44)
t(A,"ccC",3,null,["$3"],["c0l"],71,0)
t(A,"ccB",3,null,["$3"],["bXn"],72,0)
w(A,"ccF","cdO",3)
t(A,"bRP",4,null,["$5$size","$4"],["bQb",function(d,e,f,g){return A.bQb(d,e,f,g,null)}],73,0)
s(A,"bGQ","cdM",74)
s(A,"bRQ","cac",75)
s(A,"bRT","cbt",76)
s(A,"bRS","cbp",5)
s(A,"bRR","cbo",5)
w(A,"ccE","bRq",78)
w(A,"ccD","bRp",79)
t(A,"a1k",3,null,["$3"],["ccA"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.B,[A.a8I,A.amE,A.xa,A.Jt,A.ajG,A.xj,A.aie,A.anR,A.JZ,A.Ko,A.aic,A.J3,A.Jo,A.an7,A.aou,A.W9,A.ZZ,A.Vi,A.Vz,A.ap1,A.al0,A.CT,A.av0,A.xe,A.LZ,A.Ba])
u(B.C,[A.vp,A.F1,A.bo,A.ajm,A.ajc,A.aje,A.ajf,A.aj4,A.amS,A.aji,A.ajg,A.aAF,A.av4,A.aAs,A.ajd,A.M6,A.a7M,A.tW,A.atp,A.ato,A.aj3,A.amR,A.eG,A.amO,A.amQ,A.art,A.anI,A.avQ,A.amP,A.amm,A.amN,A.aA6,A.bjN,A.aA9,A.aj0,A.o9,A.amK,A.amL,A.wc,A.hA,A.aoF,A.aoI,A.aj9,A.ajo,A.aja,A.amM,A.aoL,A.aoJ,A.av3,A.atn,A.aNe,A.aoH,A.vV,A.a3k,A.aoS,A.a3u,A.b4t])
u(B.vl,[A.pT,A.or,A.qC,A.vZ,A.wX,A.aD0,A.aEb,A.os,A.Dr,A.ou])
u(B.oe,[A.aHT,A.aHU,A.aHV,A.aHW,A.aIe,A.bzh,A.bzi,A.bBe,A.bzj,A.bzf,A.bzg,A.bze,A.bfP,A.bfR,A.bfM,A.bk3,A.bk5,A.bk7,A.bk9,A.aI2,A.aI1,A.aI9,A.aI0,A.bug,A.aN_,A.bjt,A.bju,A.bjv,A.bjw,A.bjx,A.bjy,A.bjz,A.bjA,A.bjB,A.bjC,A.bjD,A.bym,A.btl,A.b8X,A.b9Z,A.ba_,A.bkn,A.bvC,A.b6O,A.b6R,A.b6S,A.byk,A.b6U,A.aAq,A.aAt,A.aA8,A.b0Y,A.b0Z,A.b1_,A.b10,A.b11,A.aXc,A.aXd,A.aXe,A.aXg,A.aXh,A.aXj,A.aXk,A.aXl,A.aXm,A.aXn,A.aXo,A.bjT,A.bjU,A.aNd,A.bz5,A.bz4,A.bz2,A.aNf,A.aNg,A.aAj,A.aDD])
t(A.z_,B.fO)
u(B.yr,[A.aHS,A.aHR,A.bfU,A.bfO,A.bfQ,A.bfN,A.bfT,A.bfI,A.bfJ,A.bfK,A.bfL,A.aIc,A.aI3,A.aI4,A.aI5,A.aI6,A.aI7,A.aI8,A.aIb,A.aHZ,A.aI_,A.bnq,A.bnr,A.bns,A.bui,A.aN1,A.bjF,A.bjG,A.byl,A.bjH,A.b6Q,A.b6I,A.b6J,A.b6M,A.b6N,A.byj,A.b6C,A.b6D,A.b6E,A.b6G,A.b6F,A.b6H,A.b6T,A.aAw,A.aXf,A.aXi,A.bjR,A.bjS,A.aNi,A.aNj,A.aAn])
t(A.vo,B.b7)
u(B.J2,[A.xg,A.aAh,A.afG,A.DJ,A.aH7,A.aN2,A.OB])
t(A.amF,B.vc)
u(B.ys,[A.bfS,A.bk4,A.bk6,A.bk8,A.aIa,A.bnp,A.buh,A.aN0,A.bjE,A.btj,A.btk,A.b8W,A.b8Y,A.b8Z,A.ba0,A.ba1,A.bko,A.bvD,A.b6P,A.b6K,A.b6L,A.aAr,A.aAv,A.aA7,A.bjQ,A.aNk,A.aNl,A.aAk,A.aAo,A.aAl,A.aAm,A.aKp])
u(B.yz,[A.z0,A.aqi,A.a8J,A.aj8])
u(B.H,[A.BN,A.SO])
u(B.Y,[A.UT,A.ZN])
u(B.Ft,[A.M2,A.Pw])
u(B.uW,[A.UU,A.Xu])
t(A.a2T,A.ajm)
t(A.aj_,A.a2T)
t(A.a2D,A.aj_)
u(A.a2D,[A.ajb,A.aoG])
t(A.oa,A.ajb)
t(A.fU,A.ajc)
t(A.iv,A.aje)
t(A.mT,A.ajf)
t(A.a2K,A.aj4)
t(A.Oc,A.amS)
u(A.Oc,[A.ajh,A.aoK])
t(A.a2P,A.ajh)
t(A.a2Q,A.aji)
t(A.DK,A.ajg)
u(A.aAF,[A.M3,A.Py])
t(A.afI,A.av4)
t(A.ajj,A.afI)
t(A.a2R,A.ajj)
u(B.b8,[A.ya,A.zS])
t(A.v1,A.ajd)
t(A.LY,A.M6)
u(A.LY,[A.aAu,A.aNh])
u(B.Pr,[A.a2N,A.a8V])
u(B.L,[A.H6,A.aj1])
u(A.H6,[A.acP,A.ad1])
t(A.qs,A.atp)
t(A.aeg,A.ato)
t(A.pw,A.aj3)
t(A.vr,A.amR)
t(A.z4,A.amO)
t(A.pU,A.amQ)
t(A.Rm,A.art)
t(A.ne,A.anI)
t(A.nE,A.avQ)
u(A.pU,[A.anH,A.avP])
t(A.l1,A.anH)
t(A.lu,A.avP)
t(A.a76,A.amP)
u(A.a76,[A.anG,A.avO])
t(A.a7X,A.anG)
t(A.ag5,A.avO)
t(A.NX,A.amm)
t(A.vq,A.amN)
t(A.O5,A.vq)
t(A.aeh,B.hf)
t(A.aj2,A.aj1)
t(A.UR,A.aj2)
t(A.a2E,A.UR)
t(A.k2,A.aj0)
t(A.a73,A.amK)
t(A.a75,A.amL)
u(A.hA,[A.a79,A.a7a,A.a7b,A.O7,A.O8,A.a7e,A.Oa,A.Ob,A.a78,A.a77,A.O6,A.a7c,A.a7d,A.O9])
t(A.q7,A.aoG)
t(A.eh,A.aoF)
t(A.Px,A.aoI)
t(A.a2M,A.aj9)
t(A.mU,A.ajo)
t(A.M1,A.aja)
t(A.z3,A.amM)
t(A.FE,A.aoK)
t(A.a8W,A.aoL)
t(A.aoE,A.eG)
t(A.nh,A.aoE)
t(A.qA,A.nh)
t(A.rU,A.aoJ)
t(A.tY,A.av3)
t(A.Hy,A.atn)
t(A.zT,A.aoH)
t(A.zX,A.aoS)
w(A.aj4,A.bo)
w(A.ajb,A.bo)
w(A.ajc,A.bo)
w(A.aje,A.bo)
w(A.ajf,A.bo)
w(A.ajg,A.bo)
w(A.ajh,A.bo)
w(A.aji,A.bo)
w(A.ajj,A.bo)
w(A.ajd,A.bo)
w(A.aj_,A.bo)
w(A.aj3,A.bo)
w(A.amm,A.bo)
w(A.amN,A.bo)
w(A.amO,A.bo)
w(A.amQ,A.bo)
w(A.amR,A.bo)
w(A.anH,A.bo)
w(A.anG,A.bo)
w(A.anI,A.bo)
w(A.art,A.bo)
w(A.ato,A.bo)
w(A.atp,A.bo)
w(A.av4,A.bo)
w(A.avP,A.bo)
w(A.avO,A.bo)
w(A.avQ,A.bo)
w(A.aj0,A.bo)
v(A.aj1,B.aH)
w(A.aj2,B.ed)
v(A.UR,B.a65)
w(A.ajm,A.bo)
w(A.amK,A.bo)
w(A.amL,A.bo)
w(A.amS,A.bo)
w(A.aj9,A.bo)
w(A.aja,A.bo)
w(A.ajo,A.bo)
w(A.amM,A.bo)
w(A.amP,A.bo)
w(A.aoE,A.bo)
w(A.aoF,A.bo)
w(A.aoG,A.bo)
w(A.aoI,A.bo)
w(A.aoJ,A.bo)
w(A.aoK,A.bo)
w(A.aoL,A.bo)
w(A.atn,A.bo)
w(A.av3,A.bo)
w(A.aoH,A.bo)
w(A.aoS,A.bo)})()
B.bvR(b.typeUniverse,JSON.parse('{"a8I":{"B":[],"c":[]},"F1":{"aHY":[]},"z_":{"fO":["bl<~>"],"fO.T":"bl<~>"},"vo":{"b7":[],"H":[],"c":[]},"Jt":{"B":[],"c":[]},"xj":{"B":[],"c":[]},"amF":{"Y":["vo"]},"amE":{"B":[],"c":[]},"xa":{"B":[],"c":[]},"ajG":{"B":[],"c":[]},"Ko":{"B":[],"c":[]},"J3":{"B":[],"c":[]},"z0":{"b7":[],"H":[],"c":[]},"aie":{"B":[],"c":[]},"anR":{"B":[],"c":[]},"aqi":{"b7":[],"H":[],"c":[]},"JZ":{"B":[],"c":[]},"aic":{"B":[],"c":[]},"Jo":{"B":[],"c":[]},"xe":{"B":[],"c":[]},"BN":{"H":[],"c":[]},"a8J":{"b7":[],"H":[],"c":[]},"an7":{"B":[],"c":[]},"aou":{"B":[],"c":[]},"W9":{"B":[],"c":[]},"ZZ":{"B":[],"c":[]},"Vi":{"B":[],"c":[]},"Vz":{"B":[],"c":[]},"ap1":{"B":[],"c":[]},"al0":{"B":[],"c":[]},"CT":{"B":[],"c":[]},"av0":{"B":[],"c":[]},"aj8":{"b7":[],"H":[],"c":[]},"UT":{"Y":["BN"]},"M2":{"H":[],"c":[]},"UU":{"Y":["M2"]},"oa":{"bo":[]},"fU":{"bo":[]},"iv":{"bo":[]},"mT":{"bo":[]},"DK":{"bo":[]},"ya":{"b8":["oa"],"bd":["oa"],"bd.T":"oa","b8.T":"oa"},"a2K":{"bo":[]},"a2P":{"bo":[]},"a2Q":{"bo":[]},"a2R":{"bo":[]},"v1":{"bo":[]},"a2N":{"b0":[],"c":[]},"acP":{"L":[],"M":[],"jD":[],"aZ":[]},"pU":{"bo":[]},"ne":{"bo":[]},"nE":{"bo":[]},"l1":{"bo":[]},"lu":{"bo":[]},"vq":{"bo":[]},"a2D":{"bo":[]},"qs":{"bo":[]},"aeg":{"bo":[]},"pw":{"bo":[]},"vr":{"bo":[]},"z4":{"bo":[]},"afI":{"bo":[]},"Rm":{"bo":[]},"a7X":{"bo":[]},"ag5":{"bo":[]},"NX":{"bo":[]},"O5":{"bo":[]},"LZ":{"B":[],"c":[]},"SO":{"H":[],"c":[]},"ZN":{"Y":["SO"]},"k2":{"bo":[]},"aeh":{"hf":[],"b0":[],"c":[]},"a2E":{"ed":["L","hB"],"L":[],"aH":["L","hB"],"M":[],"aZ":[],"aH.1":"hB","ed.1":"hB","aH.0":"L"},"Ba":{"B":[],"c":[]},"a2T":{"bo":[]},"a73":{"bo":[]},"Oc":{"bo":[]},"a75":{"bo":[]},"a79":{"hA":[]},"a7a":{"hA":[]},"a7b":{"hA":[]},"O7":{"hA":[]},"O8":{"hA":[]},"a7e":{"hA":[]},"Oa":{"hA":[]},"Ob":{"hA":[]},"a78":{"hA":[]},"a77":{"hA":[]},"O6":{"hA":[]},"a7c":{"hA":[]},"a7d":{"hA":[]},"O9":{"hA":[]},"H6":{"L":[],"M":[],"jD":[],"aZ":[]},"Pw":{"H":[],"c":[]},"Xu":{"Y":["Pw"]},"q7":{"bo":[]},"eh":{"bo":[]},"mU":{"bo":[]},"nh":{"eG":[],"bo":[]},"qA":{"nh":[],"eG":[],"bo":[]},"rU":{"bo":[]},"tY":{"bo":[]},"Hy":{"bo":[]},"zS":{"b8":["q7"],"bd":["q7"],"bd.T":"q7","b8.T":"q7"},"Px":{"bo":[]},"a2M":{"bo":[]},"M1":{"bo":[]},"z3":{"bo":[]},"a76":{"bo":[]},"FE":{"bo":[]},"a8W":{"bo":[]},"zT":{"bo":[]},"a8V":{"b0":[],"c":[]},"ad1":{"L":[],"M":[],"jD":[],"aZ":[]},"zX":{"bo":[]}}'))
B.bPD(b.typeUniverse,JSON.parse('{"LY":1,"Oc":1,"M6":1,"H6":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ay
return{_:w("Dr"),e:w("bl<or>"),cn:w("bl<os>"),aN:w("bl<ou>"),fM:w("bl<a6<i,@>?>"),c:w("bl<~>"),W:w("k2"),B:w("oa"),dB:w("fU"),T:w("v1"),fj:w("iv"),G:w("mT"),bO:w("mU"),k:w("aw"),cX:w("a3u<G>"),dO:w("v8"),R:w("a7<i,@>"),j:w("hw"),bz:w("lW<aV>"),f0:w("ok"),E:w("bo"),F:w("z_"),aI:w("pT"),m:w("or"),X:w("os"),P:w("m0"),D:w("vp"),a:w("aHY"),d:w("ou"),cw:w("eG"),L:w("hB"),o:w("dG<w,F>"),cm:w("l1"),dv:w("ne"),M:w("E<o9>"),I:w("E<bJG>"),O:w("E<fU>"),Y:w("E<iv>"),U:w("E<eG>"),K:w("E<a7M>"),u:w("E<eh>"),bC:w("E<vV>"),aA:w("E<v<eG>>"),v:w("E<ej>"),r:w("E<Hy>"),s:w("E<i>"),eg:w("E<tT>"),df:w("E<qA>"),p:w("E<c>"),n:w("E<G>"),t:w("E<w>"),eF:w("bp<Y<H>>"),Z:w("nh"),cz:w("eh"),hf:w("q7"),dj:w("zT"),fT:w("rU"),c_:w("iA<ph<bl<~>>>"),x:w("zX<fU>"),y:w("zX<eh>"),J:w("v<w>"),ef:w("vZ"),b:w("a6<i,@>"),f:w("a6<@,@>"),gj:w("ae<G,G>"),w:w("kh"),aU:w("C"),Q:w("wc<oa>"),C:w("wc<q7>"),dc:w("ej"),eo:w("qi"),gJ:w("qj"),V:w("kt<m0>"),N:w("i"),A:w("ny"),bP:w("bg"),er:w("tT"),fB:w("wX"),dw:w("qA"),bY:w("tY"),cZ:w("qC"),gc:w("je"),es:w("lu"),bN:w("nE"),l:w("c"),q:w("xz"),g4:w("ip<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("w"),bn:w("ya?"),f3:w("zS?"),g:w("v<@>?"),h:w("a6<i,@>?"),fF:w("a6<@,@>?"),cK:w("C?"),aD:w("je?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BD=new B.lP(C.n,B.ay("lP<F>"))
D.BK=new A.DJ(0,"left")
D.n2=new A.DJ(1,"top")
D.BL=new A.DJ(2,"right")
D.dV=new A.DJ(3,"bottom")
D.aBC=new A.qs(!1,A.bGi(),22,null)
D.kG=new A.pw(16,null,D.aBC,!0)
D.aaD=new A.pU(C.J,null,2,null)
D.ws=new A.M1(!1,D.aaD,A.ccF(),!0)
D.a0y=new A.aAh(3,"spaceEvenly")
D.a0I=new B.yf(6,"dstIn")
D.Yo=new B.b3(3,3)
D.BO=new B.d9(D.Yo,D.Yo,C.a8,C.a8)
D.a0U=new B.bn(C.J,0,C.U,-1)
D.Cn=new A.a75()
D.a2J=new A.O7()
D.a2K=new A.Oa()
D.aUV=new A.aeg()
D.a8C=new B.bz(8e6)
D.ap_=w([],B.ay("E<l1>"))
D.ap0=w([],B.ay("E<lu>"))
D.EC=new A.NX(D.ap_,D.ap0,!0)
D.aag=new B.dF("Zeitraum",!1,null)
D.aam=new B.dF("Konten (SKR 03)",!1,null)
D.y7=new A.aH7(0,"center")
D.aax=new A.vo(null,null)
D.aV7=new A.z3(!0,A.bGQ(),A.bRP())
D.EG=new A.z3(!1,A.bGQ(),A.bRP())
D.EH=new A.z4(!1,!0,null,A.axL(),A.a1e(),!0,null,A.axL(),A.a1e())
D.aV8=new A.z4(!0,!0,null,A.axL(),A.a1e(),!0,null,A.axL(),A.a1e())
D.a57=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.m)
D.a4S=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.m)
D.a5h=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.m)
D.a5b=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.m)
D.a4y=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.m)
D.a4x=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.a5G=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.m)
D.a50=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.m)
D.a5J=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.m)
D.a5D=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.m)
D.avn=new B.dG([50,D.a57,100,D.a4S,200,D.a5h,300,D.a5b,400,D.a4y,500,D.a4x,600,D.a5G,700,D.a50,800,D.a5J,900,D.a5D],x.o)
D.dy=new B.t0(D.avn,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.al_=w([8,4],x.t)
D.aaB=new A.pU(D.dy,null,0.4,D.al_)
D.aaC=new A.pU(C.a9,null,0.5,null)
D.fY=new A.eG(0/0,0/0)
D.aBE=new A.qs(!0,A.bGi(),44,null)
D.n3=new A.pw(16,null,D.aBE,!0)
D.aBD=new A.qs(!0,A.bGi(),30,null)
D.n4=new A.pw(16,null,D.aBD,!0)
D.aaE=new A.vr(!1,D.n3,D.n4,D.n3,D.n4)
D.aV9=new A.vr(!0,D.n3,D.n4,D.n3,D.n4)
D.aLu=new B.a8("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.abc=new B.e1(D.aLu,null,null)
D.EP=new A.OB(0,"left")
D.abm=new A.OB(1,"center")
D.EQ=new A.OB(2,"right")
D.abq=new B.a4(57495,"MaterialIcons",null,!1)
D.abE=new B.a4(58040,"MaterialIcons",null,!0)
D.yo=new B.a4(58927,"MaterialIcons",null,!1)
D.ach=new B.a4(59005,"MaterialIcons",null,!0)
D.aci=new B.a4(59007,"MaterialIcons",null,!0)
D.adp=new B.a4(62589,"MaterialIcons",null,!1)
D.acB=new B.a4(61349,"MaterialIcons",null,!1)
D.aen=new B.as(D.acB,20,C.h,null,null)
D.aep=new B.as(F.Fm,18,null,null,null)
D.aeq=new B.as(D.yo,18,null,null,null)
D.aeN=new B.as(C.oj,14,C.V,null,null)
D.aeT=new B.as(C.i9,null,C.h,null,null)
D.aeU=new B.as(C.lr,null,C.l,null,null)
D.afm=new B.as(C.ls,16,null,null,null)
D.aft=new B.as(C.yz,16,null,null,null)
D.afx=new B.as(F.lp,null,C.V,null,null)
D.afI=new B.as(F.Fx,16,null,null,null)
D.afP=new B.as(D.yo,16,null,null,null)
D.aii=new A.a8J(null)
D.aVe=new A.aN2(0,"horizontal")
D.yK=new A.zT(0,0,0,0,!1)
D.Gh=new A.Px(0.5)
D.Ct=new A.a8W()
D.aiv=new A.FE(D.Ct,A.bRT(),10,A.bRQ(),!0,A.bRS(),A.bRR(),!1,null,null,null)
D.aVg=new A.FE(D.Ct,A.bRT(),10,A.bRQ(),!0,A.bRS(),A.bRR(),!0,null,null,null)
D.ajX=w([4,3],x.t)
D.azL=new B.aM("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.azA=new B.aM("receivables","Forderungen (kurzfristig)")
D.azo=new B.aM("inventory_value","Vorr\xe4te (Warenbestand)")
D.azm=new B.aM("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.az9=new B.aM("fixed_assets","Anlageverm\xf6gen")
D.azg=new B.aM("current_liabilities","Kurzfristige Verbindlichkeiten")
D.azH=new B.aM("long_term_liabilities","Langfristige Verbindlichkeiten")
D.azz=new B.aM("equity","Eigenkapital")
D.q3=w([D.azL,D.azA,D.azo,D.azm,D.az9,D.azg,D.azH,D.azz],B.ay("E<+(i,i)>"))
D.aVj=w([],x.M)
D.aoN=w([],x.O)
D.aoO=w([],x.Y)
D.aoP=w([],B.ay("E<mT>"))
D.aoQ=w([],B.ay("E<mU>"))
D.aVk=w([],x.U)
D.aVl=w([],x.u)
D.aoR=w([],x.r)
D.aw2={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.U2={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zq=new B.a7(D.U2,[0,0,0,0,0,0,0,C.b_],B.ay("a7<i,C>"))
D.aw_={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.avh=new B.a7(D.aw_,[0,0,0,0],B.ay("a7<i,w>"))
D.awh={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.asR=new B.a7(D.awh,[0,0,0,0,null,null,null,null],B.ay("a7<i,w?>"))
D.asK=new B.a7(D.aw2,[D.zq,D.zq,D.zq,C.b_,C.b_,C.b_,D.avh,D.asR],x.R)
D.at3=new B.a7(D.U2,[0,0,0,0,0,0,0,C.c3],x.R)
D.aw3={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.at5=new B.a7(D.aw3,[8500,1200,3400,300,22e3,4200,9000,22200],B.ay("a7<i,G>"))
D.awr={total:0,rows:1}
D.at8=new B.a7(D.awr,[0,C.c3],x.R)
D.avZ={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.avi=new B.a7(D.avZ,[0,0,0,0,0,0,0,C.c3],x.R)
D.awv={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.avj=new B.a7(D.awv,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ay("a7<i,i>"))
D.a5P=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.m)
D.a5X=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.m)
D.a4B=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.m)
D.a53=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.m)
D.a5d=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.m)
D.a6c=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a4m=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.m)
D.a55=new B.F(1,0,0.592156862745098,0.6549019607843137,C.m)
D.a5g=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.m)
D.a5E=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.m)
D.avo=new B.dG([50,D.a5P,100,D.a5X,200,D.a4B,300,D.a53,400,D.a5d,500,D.a6c,600,D.a4m,700,D.a55,800,D.a5g,900,D.a5E],x.o)
D.TO=new B.t0(D.avo,1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a9u=new B.ai(32,32,32,32)
D.axq=new B.ab(D.a9u,C.bD,null)
D.axy=new B.ab(C.ap,C.bD,null)
D.ap1=w([],B.ay("E<ne>"))
D.ap2=w([],B.ay("E<nE>"))
D.Yq=new A.Rm(D.ap1,D.ap2)
D.aAy=new B.f_("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aAA=new B.f_("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aAF=new B.f_("Automaten-Business","Umsatz je Automat",null,null)
D.aAI=new B.f_("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aAK=new B.f_("Top","Meistverkaufte Produkte",null,null)
D.aAN=new B.f_("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aAO=new B.f_("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z5=new B.tC(C.M,C.v,0)
D.aJq=new B.a8("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aDp=new B.dm(D.aJq,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aM0=new B.a8('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aDs=new B.dm(D.aM0,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aJI=new B.a8("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aDt=new B.dm(D.aJI,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLT=new B.a8("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aDv=new B.dm(D.aLT,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLh=new B.a8("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aDw=new B.dm(D.aLh,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLe=new B.a8("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aDX=new B.dm(D.aLe,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aVv=new B.V(!0,C.J,null,null,null,null,14,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJD=new B.a8("Demo",null,null,null,null,null,null,null,null,null)
D.aJV=new B.a8("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aKW=new B.a8("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aL3=new B.a8("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aLl=new B.a8("sevDesk",null,null,null,null,null,null,null,null,null)
D.aMd=new B.a8("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_m=new A.afG(0,"auto")
D.aMX=new A.afG(1,"top")
D.aRu=new A.xe("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aRv=new A.xe("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bl=new A.xg(0,"alle")
D.a_M=new A.xg(1,"aufwand")
D.a_N=new A.xg(2,"erloes")
D.a_O=new A.xg(3,"privat")
D.aSq=new A.xj('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.l,C.lr,null)
D.adC=new B.a4(984570,"MaterialIcons",null,!1)
D.aSr=new A.xj("Keine Buchung passt zu dieser Auswahl.",C.l,D.adC,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cly","bW6",()=>B.j3(new A.bzh(),x.D))
w($,"clz","a1M",()=>B.j3(new A.bzi(),x.a))
w($,"cmz","r2",()=>B.bEY(new A.bBe(),x.P))
w($,"clA","bCb",()=>C.aK.$1$1(new A.bzj(),x.d))
w($,"clw","bCa",()=>C.aK.$1$1(new A.bzf(),x.m))
w($,"clx","bIz",()=>C.aK.$1$1(new A.bzg(),x.X))
w($,"clv","bC9",()=>C.aK.$1$1(new A.bze(),x.h))
w($,"clu","bC8",()=>B.b1O(A.cbJ(),x.F,x.c))
w($,"ceA","bBG",()=>new A.aA6())
v($,"chW","lM",()=>new A.b4t())})()};
(a=>{a["/+j9vanM3ejqK8Oi3fJjHk4ozZk="]=a.current})($__dart_deferred_initializers__);