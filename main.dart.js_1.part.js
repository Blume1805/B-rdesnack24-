((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Pl(d,e,f,g,h){return new A.a8K(f,g,d,h,e,null)},
a8K:function a8K(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vq:function vq(d){this.a=d},
cc6(d){var w
if(x.f.b(d)){w=J.R(d,"error")
if(typeof w=="string"&&C.c.au(w).length!==0)return C.c.au(w)}if(typeof d=="string"&&C.c.au(d).length!==0)return C.c.au(d)
return null},
F2:function F2(d){this.a=d},
c_c(d){var w=J.S(d),v=B.aY(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.b_
w=J.cT(w,new A.aHV(),x.aI)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.os(v,w)},
byA(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fc(J.aj(d))
return w==null?0:w},
pU:function pU(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
os:function os(d,e){this.a=d
this.b=e},
aHV:function aHV(){},
c_d(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.S(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.fG
w=x.f
v=x.N
u=x.z
t=A.aIf(B.co(w.a(e.h(a0,"current")),v,u))
s=A.aIf(B.co(w.a(e.h(a0,"prior_year")),v,u))
r=A.aIf(B.co(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.b_
p=J.cT(p,new A.aHW(),x.cZ)
p=B.Q(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.b_
o=J.cT(o,new A.aHX(),x.ef)
o=B.Q(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.b_
q=J.cT(q,new A.aHY(),x.fB)
q=B.Q(q,q.$ti.i("ax.E"))
n=B.co(w.a(e.h(a0,"customer")),v,u)
m=B.aY(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.po(n.h(0,"app_gross"))
k=B.aY(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.po(n.h(0,"avg_basket"))
u=B.co(w.a(e.h(a0,"derived")),v,u)
v=A.po(u.h(0,"gross_margin_pct"))
e=A.po(u.h(0,"net_margin_pct"))
w=A.po(u.h(0,"ebitda_margin_pct"))
j=A.po(u.h(0,"cashflow_operating"))
i=A.byB(u.h(0,"revenue_growth_yoy_pct"))
h=A.byB(u.h(0,"revenue_growth_mom_pct"))
g=A.byB(u.h(0,"result_growth_yoy_pct"))
u=A.byB(u.h(0,"result_growth_mom_pct"))
f=B.aY(J.R(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.ot(t,s,r,p,o,q,new A.aD2(m,l,k,n),new A.aEd(v,e,w,j,i,h,g,u),f)},
po(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fc(J.aj(d))
return w==null?0:w},
byB(d){if(d==null)return null
if(typeof d=="number")return d
return B.fc(J.aj(d))},
qD:function qD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w_:function w_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wY:function wY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD2:function aD2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEd:function aEd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ot:function ot(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aHW:function aHW(){},
aHX:function aHX(){},
aHY:function aHY(){},
aIf(d){var w=J.S(d),v=A.uH(w.h(d,"revenue_net_7")),u=A.uH(w.h(d,"revenue_net_19")),t=A.uH(w.h(d,"revenue_net")),s=A.uH(w.h(d,"expense_net")),r=A.uH(w.h(d,"result_net")),q=A.uH(w.h(d,"vat_collected")),p=A.uH(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.b_
w=J.cT(w,new A.aIg(),x._)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.ov(v,u,t,s,r,q,p,w)},
uH(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fc(J.aj(d))
return w==null?0:w},
Ds:function Ds(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ov:function ov(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aIg:function aIg(){},
c_b(d){return new A.z_(d,new B.iA(x.c_),C.dU)},
bzq:function bzq(){},
bzr:function bzr(){},
bBn:function bBn(){},
bzs:function bzs(){},
bzo:function bzo(){},
bzp:function bzp(){},
bzn:function bzn(){},
z_:function z_(d,e,f){this.r=d
this.a=e
this.f=f},
aHU:function aHU(d,e,f){this.a=d
this.b=e
this.c=f},
aHT:function aHT(d,e,f){this.a=d
this.b=e
this.c=f},
vp:function vp(d,e){this.d=d
this.a=e},
xh:function xh(d,e){this.a=d
this.b=e},
amH:function amH(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bfW:function bfW(d){this.a=d},
bfR:function bfR(d){this.a=d},
bfQ:function bfQ(d,e){this.a=d
this.b=e},
bfS:function bfS(d){this.a=d},
bfP:function bfP(d){this.a=d},
bfV:function bfV(){},
bfU:function bfU(){},
bfT:function bfT(d){this.a=d},
bfO:function bfO(d){this.a=d},
amG:function amG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfK:function bfK(d){this.a=d},
bfL:function bfL(d){this.a=d},
bfM:function bfM(d){this.a=d},
bfN:function bfN(d){this.a=d},
xb:function xb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ju:function Ju(d,e,f){this.c=d
this.d=e
this.a=f},
bkc:function bkc(){},
bkd:function bkd(){},
bke:function bke(){},
bkf:function bkf(){},
bkg:function bkg(){},
bkh:function bkh(){},
bki:function bki(){},
ajI:function ajI(d,e){this.c=d
this.a=e},
xk:function xk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c_e(){return new A.z0(null)},
Xa(d,e,f,g,h){return new A.anT(e,h,g,f,d,null)},
z0:function z0(d){this.a=d},
aIe:function aIe(d){this.a=d},
aI5:function aI5(d,e,f){this.a=d
this.b=e
this.c=f},
aI6:function aI6(d,e,f){this.a=d
this.b=e
this.c=f},
aI7:function aI7(d){this.a=d},
aI4:function aI4(){},
aI8:function aI8(d){this.a=d},
aI9:function aI9(d){this.a=d},
aI3:function aI3(){},
aIa:function aIa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aId:function aId(){},
aIc:function aIc(){},
aIb:function aIb(){},
aI2:function aI2(d,e){this.a=d
this.b=e},
aI0:function aI0(d){this.a=d},
aI1:function aI1(d){this.a=d},
aig:function aig(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anT:function anT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aqj:function aqj(d,e){this.e=d
this.a=e},
bnz:function bnz(d){this.a=d},
bnA:function bnA(d){this.a=d},
bnB:function bnB(d,e,f){this.a=d
this.b=e
this.c=f},
bny:function bny(){},
K0:function K0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Kq:function Kq(d,e){this.c=d
this.a=e},
buq:function buq(d){this.a=d},
bur:function bur(d,e){this.a=d
this.b=e},
bup:function bup(d){this.a=d},
aie:function aie(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
J4:function J4(d,e){this.c=d
this.a=e},
bGn(d,e,f,g,h){var w=null
return B.f4(w,w,!0,w,new A.byv(h,g,e,f),d,w,!0,!0,x.H)},
jW(d,e,f,g,h,i,j,k,l,m,n){return new A.aow(g,n,i,e,d,m,f,k,l,j,null)},
axI(d,e){return A.c9S(d,e)},
c9S(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$axI=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.N(x.q).f
l.aG(D.aDz)
t=4
o=e.aw(0,$.bA(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fN("finance-balance-sync",B.B(n,n)),$async$axI)
case 7:r=g
q=B.co(x.f.a(r.a),x.N,n)
l.N3()
if(J.e(J.R(q,"configured"),!1)){l.aG(D.aDD)
w=1
break}if(J.e(J.R(q,"ok"),!0)){o=$.bCi()
if(e.e==null)B.U(B.a0(y.b))
e.gcg().c_(o)
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Bilanz aus sevDesk \xfcbernommen ("+B.f(J.R(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}else{o=J.R(q,"error")
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Sync-Fehler: "+B.f(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a_(k)
l.N3()
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Sync fehlgeschlagen: "+B.f(p),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$axI,v)},
axL(d,e,f){var w=0,v=B.q(x.H)
var $async$axL=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.f4(null,null,!0,null,new A.byt(f,e,e.aw(0,$.bA(),x.A)),d,null,!0,!0,x.H),$async$axL)
case 2:return B.o(null,v)}})
return B.p($async$axL,v)},
a8L:function a8L(d){this.a=d},
aN3:function aN3(){},
aN2:function aN2(){},
aN1:function aN1(){},
Jp:function Jp(d,e){this.c=d
this.a=e},
bjN:function bjN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjC:function bjC(){},
bjD:function bjD(){},
bjE:function bjE(){},
bjF:function bjF(){},
bjG:function bjG(){},
bjH:function bjH(){},
bjI:function bjI(){},
bjJ:function bjJ(){},
bjK:function bjK(d){this.a=d},
bjL:function bjL(d){this.a=d},
bjM:function bjM(d){this.a=d},
bjO:function bjO(d,e){this.a=d
this.b=e},
bjP:function bjP(d,e){this.a=d
this.b=e},
byv:function byv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
byu:function byu(d){this.a=d},
an9:function an9(d){this.a=d},
aow:function aow(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bjQ:function bjQ(d,e){this.a=d
this.b=e},
Wa:function Wa(d,e,f){this.c=d
this.d=e
this.a=f},
a__:function a__(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bts:function bts(){},
btt:function btt(){},
btu:function btu(d){this.a=d},
Vj:function Vj(d,e,f){this.c=d
this.d=e
this.a=f},
b8Y:function b8Y(){},
b9_:function b9_(d){this.a=d},
b90:function b90(d){this.a=d},
b8Z:function b8Z(){},
VA:function VA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba0:function ba0(){},
ba1:function ba1(){},
ba2:function ba2(){},
ba3:function ba3(d){this.a=d},
ap2:function ap2(d,e){this.c=d
this.a=e},
bkw:function bkw(){},
bkx:function bkx(){},
al2:function al2(d,e){this.c=d
this.a=e},
CU:function CU(d,e,f){this.c=d
this.d=e
this.a=f},
av3:function av3(d,e){this.c=d
this.a=e},
bvL:function bvL(){},
bvM:function bvM(){},
xf:function xf(d,e){this.c=d
this.a=e},
aja:function aja(d,e){this.e=d
this.a=e},
b6S:function b6S(){},
b6R:function b6R(){},
b6Q:function b6Q(d,e,f){this.a=d
this.b=e
this.c=f},
b6K:function b6K(d,e){this.a=d
this.b=e},
b6L:function b6L(d,e){this.a=d
this.b=e},
b6T:function b6T(d){this.a=d},
b6U:function b6U(d){this.a=d},
b6M:function b6M(){},
b6N:function b6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6O:function b6O(d,e){this.a=d
this.b=e},
b6P:function b6P(d,e,f){this.a=d
this.b=e
this.c=f},
byt:function byt(d,e,f){this.a=d
this.b=e
this.c=f},
bys:function bys(d){this.a=d},
BO:function BO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UU:function UU(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b6E:function b6E(){},
b6F:function b6F(d){this.a=d},
b6G:function b6G(d){this.a=d},
b6I:function b6I(d,e){this.a=d
this.b=e},
b6H:function b6H(d,e){this.a=d
this.b=e},
b6J:function b6J(d){this.a=d},
bo:function bo(){},
bJT(d){return new A.M4(d,C.ar,C.c2,null,null)},
M4:function M4(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UV:function UV(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c5$=g
_.c=_.a=null},
b6V:function b6V(d,e){this.a=d
this.b=e},
b6W:function b6W(d){this.a=d},
aAk(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.aoT:f,p=a0==null?16:a0,o=d==null?D.a0A:d,n=g==null,m=n?A.bCM(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yr:a3
n=n?A.bCM(r,r,r,r,r,r,r,r):g
w=j==null?D.EC:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.M:e
return new A.ob(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Co,s,w,i,n)},
aAr(d,e,f,g,h){var w=d==null?D.aoU:d,v=e==null?2:e,u=g==null?C.lN:g
return new A.fU(h,f===!0,w,v,u)},
bXt(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.aAr(A.kI(d.c,e.c,f,A.caF(),x.fj),B.am(d.d,e.d,f),!1,A.kI(d.e,e.e,f,A.a1m(),x.S),w)},
a2Q(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TP
else w=h
v=m==null
u=v?8:m
t=$.lM()
s=t.aZ7(f,v?8:m)
t=t.aZ8(g,v?8:m)
v=d==null?A.bJR(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.aoV:k)},
bXu(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.am(d.e,e.e,f),q=B.mW(d.f,e.f,f),p=A.kI(d.r,e.r,f,A.a1m(),x.S),o=B.c1(d.w,e.w,f),n=B.am(d.a,e.a,f),m=B.am(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.am(w.b,v.b,f)
t=B.am(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2Q(A.bJR(v,u,null,!1,t),p,q,o,s,n,null,A.kI(d.y,e.y,f,A.caG(),x.G),m,r)},
bXv(d,e,f){var w,v,u=B.am(d.a,e.a,f)
u.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mU(u,w,v,B.c1(d.d,e.d,f))},
bJR(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dy
else w=d
return new A.a2M(g===!0,v,u,w,f)},
bCM(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2S(4,C.eQ,16,D.y8,0,120,A.caI(),!1,!1,D.a_o,0,C.K,A.caH())
else w=k
v=j==null?C.lf:j
return new A.a2R(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
cbv(d,e,f,g){var w=null,v=B.j9(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.C,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DL(C.d.j(f.b),v)},
cbu(d){return A.aCr(D.dy,15)},
ob:function ob(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aAj:function aAj(d,e){this.a=d
this.b=e},
fU:function fU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aAs:function aAs(){},
aAt:function aAt(){},
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
mU:function mU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2M:function a2M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2R:function a2R(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
afI:function afI(d,e){this.a=d
this.b=e},
a2S:function a2S(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
DL:function DL(d,e){this.a=d
this.b=e},
M5:function M5(d){this.a=d},
a2T:function a2T(d,e,f,g,h,i,j,k){var _=this
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
aj6:function aj6(){},
ajd:function ajd(){},
aje:function aje(){},
ajg:function ajg(){},
ajh:function ajh(){},
aji:function aji(){},
ajj:function ajj(){},
ajk:function ajk(){},
ajl:function ajl(){},
aAu:function aAu(d){this.a=d},
aAv:function aAv(){},
v2:function v2(d,e,f){this.a=d
this.b=e
this.c=f},
ajf:function ajf(){},
aAw:function aAw(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aAx:function aAx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAy:function aAy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7O:function a7O(d){this.b=d},
a2P:function a2P(d,e,f){this.d=d
this.e=e
this.a=f},
acR:function acR(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h0=g
_.B=h
_.a5=_.W=_.V=null
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
cbw(d,e){var w=null
return new A.SQ(e.w,B.d(e.r,w,w,w,w,w,w,w,w),w)},
aAc(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.am(w.c,v.c,f)
u.toString
return new A.px(t,e.b,new A.qt(v.a,v.b,u,B.am(w.d,v.d,f)),!0)},
bLf(d,e,f){var w=A.aAc(d.b,e.b,f),v=A.aAc(d.d,e.d,f),u=A.aAc(d.e,e.e,f)
return new A.vs(e.a,w,A.aAc(d.c,e.c,f),v,u)},
c_g(d,e,f){var w,v
if(d.k(0,D.fZ))return e
if(e.k(0,D.fZ))return d
w=B.am(d.a,e.a,f)
w.toString
v=B.am(d.b,e.b,f)
v.toString
return new A.eG(w,v)},
bLd(d,e,f){return new A.z4(e.a,!0,B.am(d.c,e.c,f),e.d,e.e,e.f,B.am(d.r,e.r,f),e.w,e.x)},
cdW(d){return!0},
cbz(d){return D.aaD},
bLe(d,e,f,g){var w
if(d==null)w=f==null?C.J:null
else w=d
return new A.pV(w,f,g,e)},
bNc(d,e,f){var w,v=A.kI(d.a,e.a,f,A.caB(),x.dv)
v.toString
w=A.kI(d.b,e.b,f,A.caD(),x.bN)
w.toString
return new A.Ro(v,w)},
c02(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rG(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nf(t,w,v,u)},
c5k(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rG(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nE(t,w,v,u)},
c01(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oo(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c0_(B.bCE(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rG(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1m(),x.S)
if(u==null)u=v==null?C.J:null
return new A.l1(r,e.f,e.r,t,e.x,u,v,w,s)},
c5j(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oo(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c5h(B.bCE(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rG(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1m(),x.S)
if(u==null)u=v==null?C.J:null
return new A.lu(r,e.f,e.r,t,e.x,u,v,w,s)},
c0_(d,e,f,g,h,i){return new A.a7Z(f,!1,g,i,d,e)},
c00(d){return C.d.aa(d.e,1)},
c5h(d,e,f,g,h,i){return new A.ag7(f,!1,g,i,d,e)},
c5i(d){return C.d.aa(d.e,1)},
bL9(d,e,f){var w,v=A.kI(d.a,e.a,f,A.caA(),x.cm)
v.toString
w=A.kI(d.b,e.b,f,A.caC(),x.es)
w.toString
return new A.NZ(v,w,!0)},
c_f(d,e,f){return new A.O7(d,e==null?4:e,f)},
a2F:function a2F(){},
DK:function DK(d,e){this.a=d
this.b=e},
tX:function tX(d,e){this.r=d
this.w=e},
qt:function qt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aei:function aei(){},
px:function px(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vs:function vs(d,e,f,g,h){var _=this
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
pV:function pV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afK:function afK(){},
Ro:function Ro(d,e){this.a=d
this.b=e},
nf:function nf(d,e,f,g){var _=this
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
a7Z:function a7Z(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ag7:function ag7(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
NZ:function NZ(d,e,f){this.a=d
this.b=e
this.c=f},
vr:function vr(){},
O7:function O7(d,e,f){this.a=d
this.b=e
this.c=f},
aj1:function aj1(){},
aj5:function aj5(){},
amo:function amo(){},
amP:function amP(){},
amQ:function amQ(){},
amS:function amS(){},
amT:function amT(){},
anJ:function anJ(){},
anI:function anI(){},
anK:function anK(){},
aru:function aru(){},
atr:function atr(){},
ats:function ats(){},
av7:function av7(){},
avS:function avS(){},
avR:function avR(){},
avT:function avT(){},
aA8:function aA8(){},
M_:function M_(){},
M0:function M0(d,e,f){this.c=d
this.d=e
this.a=f},
aAa:function aAa(d){this.a=d},
aA9:function aA9(d){this.a=d},
SQ:function SQ(d,e,f){this.c=d
this.e=e
this.a=f},
ZO:function ZO(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c3Q(d,e,f){var w=B.ak(f),v=w.i("ae<1,k2>")
v=B.Q(new B.ae(f,new A.b1_(),v),v.i("ax.E"))
w=w.i("ae<1,c>")
w=B.Q(new B.ae(f,new A.b10(),w),w.i("ax.E"))
return new A.aej(e,d,v,w,null)},
bXr(d,e,f){var w,v=null,u=B.aN(x.dO),t=J.a8B(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tU(v,C.a3,C.z,new B.kB(1),v,v,v,v,C.bz,v)
u=new A.a2G(f,d,e,u,t,!0,0,v,v,new B.bu(),B.aN(x.j))
u.bl()
return u},
aej:function aej(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b1_:function b1_(){},
b10:function b10(){},
a2G:function a2G(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a5=g
_.X6$=h
_.aV_$=i
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
bjW:function bjW(d,e){this.a=d
this.b=e},
aAb:function aAb(){},
k2:function k2(d,e){this.a=d
this.b=e},
oa:function oa(d,e){this.a=d
this.b=e},
aj2:function aj2(){},
aj3:function aj3(){},
aj4:function aj4(){},
US:function US(){},
Ba:function Ba(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b11:function b11(d){this.a=d},
b12:function b12(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b13:function b13(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a76(d,e){var w=d==null?B.c5(C.J,1):d
return new A.a75(e!==!1,w)},
a2V:function a2V(){},
a75:function a75(d,e){this.a=d
this.b=e},
Oe:function Oe(){},
a77:function a77(){},
aAH:function aAH(){},
aH9:function aH9(d,e){this.a=d
this.b=e},
ajo:function ajo(){},
amM:function amM(){},
amN:function amN(){},
amU:function amU(){},
M8:function M8(){},
wd:function wd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hA:function hA(){},
a7b:function a7b(d){this.a=d},
a7c:function a7c(d){this.a=d},
a7d:function a7d(d){this.a=d},
O9:function O9(){},
Oa:function Oa(){},
a7g:function a7g(d){this.a=d},
Oc:function Oc(){},
Od:function Od(d){this.a=d},
a7a:function a7a(d){this.a=d},
a79:function a79(d){this.a=d},
O8:function O8(d){this.a=d},
a7e:function a7e(d){this.a=d},
a7f:function a7f(d){this.a=d},
Ob:function Ob(d){this.a=d},
H7:function H7(){},
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
aXp:function aXp(d){this.a=d},
aXq:function aXq(d){this.a=d},
Py:function Py(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xw:function Xw(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c5$=h
_.c=_.a=null},
bk1:function bk1(d,e){this.a=d
this.b=e},
bk_:function bk_(d){this.a=d},
bk0:function bk0(d,e){this.a=d
this.b=e},
bjZ:function bjZ(){},
bk2:function bk2(d){this.a=d},
bE4(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.M:d
return new A.q8(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aNe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TP:u
else w=g
v=f==null?A.aAi(!1,u,0,u,!1,D.ws):f
w=new A.ei(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aAi(!1,u,0,u,!1,D.ws):d,j,a0,i,s,!1,p)
w.asn(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c0u(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.am(d.x,e.x,f)
m.toString
w=A.bJS(d.ay,e.ay,f)
v=A.bJS(d.ch,e.ch,f)
u=B.am(d.as,e.as,f)
u.toString
t=e.CW
s=A.kI(d.cy,e.cy,f,A.a1m(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rG(d.w,e.w,f)
p=A.kI(d.a,e.a,f,A.caz(),x.cw)
p.toString
o=B.bNK(d.db,e.db,f)
o.toString
n=B.am(d.dy.a,e.dy.a,f)
n.toString
return A.aNe(v,m,w,r,e.z,s,new A.z3(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Pz(n),!1,u,o,!0,e.cx,p)},
aAi(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
else w=e
return new A.a2O(h,w,g,i,f,!1)},
bJS(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rG(v.b,u.b,f),r=B.am(v.c,u.c,f)
r.toString
r=A.bLe(t,A.kI(v.d,u.d,f,A.a1m(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rG(d.c,e.c,f)
v=B.am(d.e,e.e,f)
v.toString
return A.aAi(!1,s,v,u,e.a,new A.M3(!1,r,w.c,!0))},
bXw(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rG(d.d,e.d,f)
if(w==null)w=v==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
return new A.mV(e.a,e.b,w,v)},
cdX(d){return!0},
bG7(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jB)return A.bGZ(w.a,A.bDJ(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dy:w},
c8f(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jB)w=A.bGZ(v.a,A.bDJ(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dy}return A.aCr(w,40)},
bQl(d,e,f,g,h){var w,v=A.bG7(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jB)w=A.bGZ(u.a,A.bDJ(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dy}u=A.aCr(w,40)
return new A.O7(v,h==null?4:h,u)},
cdV(d,e){return!0},
cal(d,e){return Math.abs(d.a-e.a)},
cbC(d,e){var w=J.cT(e,new A.bze(d),x.bY)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
cby(d,e){return-1/0},
cbx(d,e){return d.a[e].b},
bRz(d){var w=J.cT(d,new A.bzb(),x.fT)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
bRy(d){return A.aCr(D.dy,15)},
q8:function q8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aNf:function aNf(){},
Pz:function Pz(d){this.a=d},
a2O:function a2O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mV:function mV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
M3:function M3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z3:function z3(d,e,f){this.a=d
this.b=e
this.c=f},
aN4:function aN4(d,e){this.a=d
this.b=e},
a78:function a78(){},
FF:function FF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bze:function bze(d){this.a=d},
bzd:function bzd(d){this.a=d},
a8Y:function a8Y(){},
bzb:function bzb(){},
ni:function ni(){},
qB:function qB(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rV:function rV(d,e){this.a=d
this.b=e},
tZ:function tZ(d,e){this.a=d
this.b=e},
Hz:function Hz(d){this.a=d},
PA:function PA(d){this.a=d},
zS:function zS(d,e){this.a=d
this.b=e},
ajb:function ajb(){},
ajc:function ajc(){},
ajq:function ajq(){},
amO:function amO(){},
amR:function amR(){},
aoF:function aoF(){},
aoG:function aoG(){},
aoH:function aoH(){},
aoJ:function aoJ(){},
aoK:function aoK(){},
aoL:function aoL(){},
aoM:function aoM(){},
atq:function atq(){},
av6:function av6(){},
aNg:function aNg(d){this.a=d},
aNh:function aNh(){},
aNi:function aNi(){},
zT:function zT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aoI:function aoI(){},
aNj:function aNj(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aNm:function aNm(){},
aNk:function aNk(d,e,f){this.a=d
this.b=e
this.c=f},
aNl:function aNl(d,e,f){this.a=d
this.b=e
this.c=f},
aNn:function aNn(){},
vW:function vW(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8X:function a8X(d,e,f){this.d=d
this.e=e
this.a=f},
ad3:function ad3(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h0=g
_.B=h
_.a5=_.W=_.V=null
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
bCL(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bH(o.length,0,!1,x.i),m=B.ak(o),l=new B.ae(o,new A.aAl(),m.i("ae<1,G>")).jM(0,new A.aAm()),k=e-l,j=new A.aAp(k,d,n)
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
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAn(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAo(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aAl:function aAl(){},
aAm:function aAm(){},
aAp:function aAp(d,e,f){this.a=d
this.b=e
this.c=f},
aAq:function aAq(d,e,f){this.a=d
this.b=e
this.c=f},
aAn:function aAn(d,e,f){this.a=d
this.b=e
this.c=f},
aAo:function aAo(d,e,f){this.a=d
this.b=e
this.c=f},
bDJ(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.ak(w).i("j1<1>")).aD(0,new A.aKr(v,d))
else throw B.h(B.bP('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aKr:function aKr(d,e){this.a=d
this.b=e},
aDE(d,e){var w,v
if(e!=null){w=B.ak(e).i("ae<1,G>")
v=B.Q(new B.ae(e,new A.aDF(),w),w.i("ax.E"))
return A.cbp(d,new A.a3w(v,x.cX))}else return d},
aDF:function aDF(){},
c4r(d,e){var w=!0
if(d!==C.fe)if(!(d===C.a3&&e===C.z))w=d===C.iL&&e===C.b6
if(w)return D.EP
else{w=!0
if(d!==C.hI)if(!(d===C.iL&&e===C.z))w=d===C.a3&&e===C.b6
if(w)return D.EQ
else return D.abo}},
OD:function OD(d,e){this.a=d
this.b=e},
a3m:function a3m(d,e){this.a=d
this.b=e},
zX:function zX(d,e){this.a=d
this.$ti=e},
aoT:function aoT(){},
cbp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.aq(),i=x.v,h=B.b([],i),g=new B.cr(j.r,C.an,k,k,h)
for(j=B.NT(d),w=B.b([],x.I),v=new B.NV(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.U(B.fM('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.NU(v,r)
v.DL()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.DL()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.et(B.b([],i),!0,s)
p=new B.Lk(new B.cr(t,p,k,new B.arV([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3w:function a3w(d,e){this.a=d
this.b=0
this.$ti=e},
b4v:function b4v(){},
bDx(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fZ))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bXz(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aCr(d,e){var w=1-e/100
return B.aG(d.gfJ(d),C.d.aN(d.gOz()*w),C.d.aN(d.gGI()*w),C.d.aN(d.gKZ()*w))},
bLc(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bDy(d){var w=d.a,v=w?A.b0Z(d.b):0,u=w?A.b0Z(d.c):0,t=w?A.b0Z(d.d):0
return new B.ai(v,u,t,w?A.b0Z(d.e):0)},
c1J(d){var w
if(d.c===0){d.seY(null)
w=B.c6(d.r)
d.r=B.aG(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bEr(d,e,f,g){var w
if(f!=null){d.r=C.J.gt(0)
d.seY(f.mQ(0,g))}else{w=e==null?C.M:e
d.r=w.gt(w)
d.seY(null)}},
b0Z(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kI(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ccJ(d,e,f){return C.d.aN(d+(e-d)*f)},
bGZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a8K.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.q
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.H(v,B.b([B.bN(t.x,C.n,s,18),C.aP],w))
v.push(B.an(new B.dF(t.c,!1,s),1))
v=B.a9(v,C.x,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.E,B.d(t.d,s,1,C.ag,s,B.bD(u==null?C.h:u,22,C.C),s,s,s)],w)
return B.b5(r,B.a3(w,C.x,C.iu,C.i),q,s,C.ap,s,s,3)}}
A.vq.prototype={
Mk(d){return this.aUZ(d)},
aUZ(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_summary",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b)],s,r),r),$async$Mk)
case 3:q=f
if(q==null){u=D.at9
w=1
break}if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.avo
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mk,v)},
Mj(d){return this.aUY(d)},
aUY(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mj=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_kpis",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b)],s,r),r),$async$Mj)
case 3:q=f
if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.asQ
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mj,v)},
Mi(d){return this.aUX(d)},
aUX(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mi=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_bookings_list",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$Mi)
case 3:q=f
if(x.f.b(q)){u=B.co(q,s,r)
w=1
break}u=D.ate
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mi,v)},
pK(d){return this.as5(d)},
as5(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pK=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fN("sevdesk-sync",B.a4(["from",E.ou(d.a),"to",E.ou(d.b)],s,s)),$async$pK)
case 3:r=f.a
if(x.f.b(r)&&typeof J.R(r,"upserted")=="number"){u=C.d.X(B.fz(J.R(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pK,v)},
Me(d){return this.aUO(d)},
aUO(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Me=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fN("finance-export-pdf",B.a4(["from",E.ou(d.a),"to",E.ou(d.b)],s,s)),$async$Me)
case 3:r=f.a
if(x.f.b(r)&&typeof J.R(r,"base64")=="string"){u=B.aK(J.R(r,"base64"))
w=1
break}throw B.h(B.e3("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Me,v)}}
A.F2.prototype={
GC(d){return this.al6(d)},
al6(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GC=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mk(d),$async$GC)
case 7:q=f
o=A.aIf(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BT(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$GC,v)},
Gx(d){return this.akS(d)},
akS(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gx=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mj(d),$async$Gx)
case 7:q=f
o=A.c_d(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BT(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gx,v)},
Gn(d){return this.akE(d)},
akE(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gn=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mi(d),$async$Gn)
case 7:q=f
o=A.c_c(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a_(m)
o=r.BT(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gn,v)},
pK(d){return this.as6(d)},
as6(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pK=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pK(d),$async$pK)
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
p=r.BT(q)
throw B.h(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pK,v)},
Md(d){return this.aUN(d)},
aUN(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Md=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Me(d),$async$Md)
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
o=r.BT(p)
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Md,v)},
BT(d){var w,v
if(d instanceof B.vo)return d
if(d instanceof B.ml){if(d.b==="42501")return new B.wh(d.a)
return new B.tC(d.a)}if(d instanceof B.Or){w=A.cc6(d.b)
v=""+d.a
return new B.tC(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.BD("Unerwarteter Fehler: "+B.f(d))},
$iaI_:1}
A.pU.prototype={
gamL(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbt(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.os.prototype={
gbt(){return[this.a,this.b]}}
A.qD.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.w_.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wY.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aD2.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aEd.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ot.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ds.prototype={
gbt(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ov.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.z_.prototype={
Hw(d){return this.as4(0)},
as4(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hw=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.see(0,C.dF)
s=t.r
r=s.aw(0,$.r3(),x.P)
p.a=null
w=3
return B.k(B.pw(new A.aHU(p,t,r),x.H),$async$Hw)
case 3:t.see(0,f)
q=t.f
if(q.ghf(q)==null){q=$.bCk()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bIJ())
s.c_($.bCj())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hw,v)},
Mc(){return this.aUM()},
aUM(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Mc=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.see(0,C.dF)
s=t.r.aw(0,$.r3(),x.P)
q.a=null
w=3
return B.k(B.pw(new A.aHT(q,t,s),x.H),$async$Mc)
case 3:t.see(0,e)
r=t.f
u=r.ghf(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mc,v)}}
A.vp.prototype={
U(){return new A.amH(D.Bm)}}
A.xh.prototype={
L(){return"_Filter."+this.b}}
A.amH.prototype={
gSZ(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbq(),t=u.ak($.r3(),x.P),s=u.ak($.bCj(),x.e)
u=$.cQ()
return B.d7(D.abe,v,B.lj(B.d4(B.b([new B.f_("Zeitraum",u.a4(t.a)+" \u2013 "+u.a4(t.b),v,v),C.L,new A.amG(w.w,w.gSZ(),new A.bfR(w),new A.bfS(w),v),C.aw,B.dm(s,new A.bfT(w),new A.bfU(),new A.bfV(),!1,!0,!1,x.m,x.l)],x.p),v,C.cb,v,C.G,!1),C.n,new A.bfW(w)),v,v,v)},
atu(d){var w=B.ak(d).i("b1<1>")
w=B.Q(new B.b1(d,new A.bfO(this),w),w.i("u.E"))
return w}}
A.amG.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.xb("Alle",t===D.Bm,new A.bfK(v),u),new A.xb("Ausgaben",t===D.a_O,new A.bfL(v),u),new A.xb("Erl\xf6se",t===D.a_P,new A.bfM(v),u),new A.xb("Privat",t===D.a_Q,new A.bfN(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.xb("Konto "+w+" \xd7",!0,v.f,u))
return B.ji(C.c8,t,C.d3,6,8)}}
A.xb.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aN:C.a5,s=B.ar(9999),r=B.ar(9999),q=B.ar(9999),p=B.c5(v?C.n:C.a7,1)
return B.br(w,!0,w,B.du(!1,C.Y,!0,s,B.dT(!1,r,!0,B.aD(w,B.d(u,w,w,w,w,B.t(C.h,13,C.C),w,w,w),C.p,w,w,new B.aB(w,w,p,q,w,w,C.B),w,w,w,w,C.fX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.p,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.N,w)}}
A.Ju.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aSD
w=this.d
if(w.length===0)return D.aSE
v=B.ak(w).i("b1<1>")
u=new B.b1(w,new A.bkc(),v).f1(0,0,new A.bkd())
t=new B.b1(w,new A.bke(),v).f1(0,0,new A.bkf())
s=new B.b1(w,new A.bkg(),v).f1(0,0,new A.bkh())
r=new B.b1(w,new A.bki(),v).gq(0)
v=w.length
q=$.cA()
p=q.a4(t)
o=E.bGs(u,E.bzw("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a4(s)
n=x.p
q=B.b([B.d(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.t(C.h,14,C.C),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.H(q,B.b([C.aF,B.d(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.t(C.l,12,C.j),l,l,l)],n))
if(r>0)C.b.H(q,B.b([C.aF,B.d(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.t(C.Q,12,C.j),l,l,l)],n))
k=B.b([B.b5(l,B.a3(q,C.x,C.f,C.i),C.a5,l,C.y,l,l,3),C.L],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.H(k,B.b([new A.ajI(w[m],l),C.E],n))
return B.a3(k,C.ab,C.f,C.i)}}
A.ajI.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.au(n).length!==0)===!0){n.toString
n=C.c.au(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.a9(B.b([B.an(B.d(n,p,2,C.ag,p,B.t(C.h,14,C.C),p,p,p),1),C.af,new E.DM(o.r,w,v,15,p)],u),C.x,p,C.f,C.i,0,p,p)
w=B.d($.cQ().a4(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+E.bHf(w),p,1,C.ag,p,B.t(C.l,12,C.j),p,p,p)
v=C.d.aa(o.y,1)
t=$.cA()
s=t.a4(o.w)
t=t.a4(o.x)
r=o.gamL()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aF,w,C.b2,B.d("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ag,p,B.t(C.l,12,C.j),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.H(q,B.b([C.aF,B.a9(B.b([D.aeQ,C.c4,B.an(B.d("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.t(C.Q,11,C.j),p,p,p),1)],u),C.k,p,C.f,C.i,0,p,p)],u))
return B.b5(p,B.a3(q,C.x,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xk.prototype={
p(d){var w=null
return B.b5(w,B.a9(B.b([B.bN(this.e,this.d,w,w),C.af,B.an(B.d(this.c,w,w,w,w,B.t(C.h,14,C.j),w,w,w),1)],x.p),C.x,w,C.f,C.i,0,w,w),C.a5,w,C.y,w,w,3)}}
A.z0.prototype={
d9(d,e){var w=null,v=e.ak($.r3(),x.P),u=e.ak($.bCk(),x.aN)
return B.lj(B.d4(B.b([new B.f_("Finanzen","Dashboard",new A.aig(e.ak($.bCh(),x.c).gjg(),new A.aI5(this,d,e),new A.aI6(this,d,e),new A.aI7(d),new A.aI8(d),new A.aI9(d),new A.aIa(this,d,e,v),w),w),C.aw,new A.aqj(v,w),C.c5,D.aio,C.c5,B.dm(u,new A.aIb(),new A.aIc(),new A.aId(),!1,!0,!1,x.d,x.l)],x.p),w,C.cb,w,C.G,!1),C.n,new A.aIe(e))},
K4(d,e){return this.aNm(d,e)},
aNm(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$K4=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bCh()
w=3
return B.k(e.aw(0,n.ghQ(),x.F).Hw(0),$async$K4)
case 3:m=g
if(d.e==null){w=1
break}t=e.aw(0,n,x.c)
s=t.ghf(t)==null
r=t.ghf(t)
if(r instanceof B.vo)q=r.a
else q=r==null?null:J.aj(r)
if(s)p="sevDesk synchronisiert: "+B.f(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.N(x.q).f
o=s?C.I:D.a8E
n.aG(B.bO(null,null,null,null,null,C.o,null,B.d(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$K4,v)},
BU(d,e){return this.ayp(d,e)},
ayp(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BU=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aw(0,$.bCh().ghQ(),x.F).Mc(),$async$BU)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.N(x.q).f.aG(D.aDF)
w=1
break}t=B.oV(C.v,10)
w=4
return B.k($.bTM().uc(s,"finanzauswertung.pdf",t,null,null,null),$async$BU)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BU,v)},
BV(d,e,f){return this.aKR(d,e,f)},
aKR(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BV=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.f4(null,null,!0,null,new A.aI2(f,d),d,null,!0,!0,x.cJ),$async$BV)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mS(e.aw(0,$.bA(),x.A))
p=f.a
o=f.b
n=$.cQ()
m=n.a4(p)
n=n.a4(o)
w=8
return B.k(r.wj("finance_period",p,o,B.a4(["period_from",p.dR()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BV)
case 8:if(d.e!=null)d.N(x.q).f.aG(F.mA)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a_(k)
if(d.e!=null)d.N(x.q).f.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Fehler: "+B.f(q),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BV,v)}}
A.aig.prototype={
p(d){var w=this,v=null,u=A.Xa(C.n,F.h1,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Xa(v,D.adr,v,w.r,"Gesellschafter-Freigaben"),s=A.Xa(v,D.abG,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Xa(v,D.yp,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Xa(C.Q,C.fx,C.Q,r?v:w.e,"PDF-Export")
return B.a9(B.b([u,C.aP,t,C.aP,s,C.aP,q,C.aP,p,C.aP,A.Xa(C.am,C.fz,C.am,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.H,0,v,v)}}
A.anT.prototype={
p(d){var w,v=this,u=null,t=B.ar(12),s=B.ar(12),r=B.ar(12),q=v.w
if(q==null)q=C.a7
q=B.c5(q,1)
w=v.r
if(w==null)w=C.h
return B.tY(B.du(!1,C.Y,!0,t,B.dT(!1,s,!0,B.aD(u,B.bN(v.c,w,u,20),C.p,u,u,new B.aB(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a5,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.aqj.prototype={
d9(d,e){var w=null,v=this.e,u=$.cQ(),t=x.p
return B.b5(w,B.a3(B.b([D.aai,C.E,B.a9(B.b([D.aeq,C.ak,B.an(B.d(u.a4(v.a)+" \u2013 "+u.a4(v.b),w,w,w,w,B.t(C.h,16,C.C),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.t,B.ji(C.c8,B.b([new A.K0("Monat",new A.bnz(e),w,w),new A.K0("Jahr (YTD)",new A.bnA(e),w,w),new A.K0("Zeitraum w\xe4hlen \u2026",new A.bnB(this,d,e),F.F6,w)],t),C.d3,6,8)],t),C.x,C.f,C.i),w,w,C.y,w,w,3)},
Jo(d,e){return this.aJK(d,e)},
aJK(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Jo=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aW(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.ay3(new A.bny(),d,B.bv(B.aV(t)-5,1,1,0,0,0,0),new B.lW(s.a,s.b,x.bz),B.bv(B.aV(t)+1,1,1,0,0,0,0),C.ee),$async$Jo)
case 2:r=g
if(r!=null)e.aw(0,$.r3().ghQ(),x.V).uu(0,new E.m0(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Jo,v)}}
A.K0.prototype={
p(d){var w=null,v=B.ar(9999),u=B.ar(9999),t=B.ar(9999),s=B.c5(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.H(q,B.b([B.bN(p,C.h,w,14),C.aP],r))
q.push(B.d(this.c,w,w,w,w,B.t(C.h,13,C.C),w,w,w))
return B.du(!1,C.Y,!0,v,B.dT(!1,u,!0,B.aD(w,B.a9(q,C.k,w,C.f,C.H,0,w,w),C.p,w,w,new B.aB(w,w,s,t,w,w,C.B),w,w,w,w,C.fX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a5,0,w,w,w,w,w,C.bb)}}
A.Kq.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jA(new A.buq(this)),C.c5,D.aao,C.t],q),o=this.c.w
if(o.length===0)p.push(B.b5(r,B.a9(B.b([D.aeX,C.af,B.an(B.d("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.t(C.l,14,C.j),r,r,r),1)],q),C.k,r,C.f,C.i,0,r,r),C.a5,r,C.y,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.H(w,B.b([new A.aie(t.a,t.b,s,E.bHf(s),t.d,new A.bur(d,t),r),C.E],q))}p.push(B.a3(w,C.k,C.f,C.i))}return B.a3(p,C.ab,C.f,C.i)}}
A.aie.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aN:C.a5,q=B.c5(s?C.n:C.a7,1),p=B.ar(4),o=v.c,n=x.p
t=B.b([B.aD(C.W,B.d(C.c.a1(o,0,1),u,u,u,u,B.bD(C.h,14,C.r),u,u,u),C.p,u,u,new B.aB(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.af,B.an(B.a3(B.b([B.d(o+" \xb7 "+v.d,u,1,C.ag,u,B.t(C.h,14,C.C),u,u,u),B.d(v.f,u,u,u,u,B.t(C.l,12,C.j),u,u,u)],n),C.x,C.f,C.i),1),new E.DM(v.r,t,o,15,u)],n)
C.b.H(t,B.b([C.c4,C.FJ],n))
w=B.b5(u,B.a9(t,C.k,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.br(u,!0,u,B.dT(!1,B.ar(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u)}}
A.J4.prototype={
p(d){var w=null
return B.b5(C.Q,B.a9(B.b([D.afC,C.af,B.an(B.d(this.c,w,w,w,w,B.t(C.h,14,C.j),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fo,w,C.y,w,w,3)}}
A.a8L.prototype={
d9(d,e){return B.dm(e.ak($.bIJ(),x.cn),new A.aN1(),new A.aN2(),new A.aN3(),!1,!0,!1,x.X,x.l)}}
A.Jp.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aAY,C.t,B.jA(new A.bjN(v,q,100-t.w.a,w,p)),C.t,new A.an9(u),C.aw,D.aAX,C.t,new A.aja(t,u),C.aw,D.aAS,C.t,B.br(u,!0,u,B.kd(u,B.b5(u,new A.Vj(t,220,u),u,u,C.y,u,u,3),C.T,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjO(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aw,D.aAI,C.t,B.br(u,!0,u,B.kd(u,new A.VA(t,200,!1,u),C.T,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjP(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aw,D.aAP,C.t,new A.ap2(t,u),C.aw,D.aAK,C.t,new A.al2(t,u)],s)
if(t.f.length!==0)C.b.H(r,B.b([C.aw,D.aAU,C.t,new A.av3(t,u)],s))
return B.a3(r,C.ab,C.f,C.i)}}
A.an9.prototype={
p(d){var w=null
return B.d("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.t(C.l,11,C.j).cC(1.35),w,w,w)}}
A.aow.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.Q:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bjQ(m,d):l
r=x.p
q=B.b([B.an(B.d(m.c.toUpperCase(),l,l,l,l,B.t(C.l,10,C.r).fm(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.c5(C.Q,0.8)
n=B.ar(4)
q.push(B.aD(l,B.d("Ziel "+p,l,l,l,l,B.t(C.Q,9,C.r),l,l,l),C.p,l,l,new B.aB(l,l,o,n,l,l,C.B),l,l,l,l,C.nS,l,l,l))}q=B.b([B.a9(q,C.k,l,C.f,C.i,0,l,l),C.aF,B.O5(C.d6,B.d(m.d,l,l,l,l,B.bD(w,22,C.r),l,l,l),C.hU)],r)
p=m.e
if(p!=null)q.push(B.d(p,l,2,C.ag,l,B.t(C.l,10,C.aH),l,l,l))
q.push(C.d2)
q.push(B.a9(B.b([new A.Wa("Vormonat",m.r,l),C.c4,new A.Wa("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.d2)
q.push(B.an(new A.a__(v,m.y,m.z,l),1))
return B.br(l,u,l,B.kd(l,B.b5(l,B.a3(q,C.x,C.f,C.i),l,l,C.bE,l,l,3),C.T,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.Wa.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ar(4)
return B.aD(r,B.d(this.c+" \u2014",r,r,r,r,B.t(C.l,9,C.r),r,r,r),C.p,r,r,new B.aB(C.a7,r,r,q,r,r,C.B),r,r,r,r,C.nS,r,r,r)}w=q>=0
v=w?C.am:C.Q
u=v.dG(0.12)
t=B.c5(v,0.7)
s=B.ar(4)
return B.aD(r,B.a9(B.b([B.bN(w?F.abt:D.abs,v,r,10),C.ZE,B.d(this.c+" "+C.d.aa(q,1)+" %",r,r,r,r,B.t(v,9,C.r),r,r,r)],x.p),C.k,r,C.f,C.H,0,r,r),C.p,r,r,new B.aB(u,r,t,s,r,r,C.B),r,r,r,r,C.nS,r,r,r)}}
A.a__.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.at
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eG(v,j[v]))
u=C.b.jM(j,new A.bts())
t=C.b.jM(j,new A.btt())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.btu(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a76(k,!1)
w=B.b([A.aNe(k,2,A.aAi(!1,C.n.dG(0.16),0,k,!0,D.ws),C.n,0.35,k,D.EG,k,!0,!1,!0,!1,D.Gi,!1,10,D.Z6,!0,C.lN,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Py(A.bE4(k,k,k,D.aoW,l,D.Co,D.EC,D.EH,w,D.aiB,k,m,k,n,D.Yr,D.aoX,D.aaG),C.ar,C.a8,k,k)}}
A.Vj.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aRI
w=C.b.f1(p,0,new A.b8Y())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aAr(B.b([A.a2Q(q,q,D.BP,q,C.n,q,q,q,r.b,6),A.a2Q(q,q,D.BP,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bQ(A.bJT(A.aAk(q,q,u,q,q,A.a76(q,!1),q,new A.z4(!0,!0,q,new A.b8Z(),A.a1f(),!1,q,A.axO(),A.a1f()),q,v,q,q,new A.vs(!0,new A.px(16,q,new A.qt(!0,new A.b9_(this),46,q),!0),D.kI,D.kI,new A.px(16,q,new A.qt(!0,new A.b90(p),26,q),!0)))),this.d,q)},
aMz(d){if(Math.abs(d)>=1000)return C.d.aa(d/1000,1)+" k"
return C.d.aa(d,0)}}
A.VA.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ae(v,new A.ba0(),w),x.i)
C.b.H(o,new B.ae(u,new A.ba1(),w))
t=C.b.f1(o,0,new A.ba2())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aAr(B.b([A.a2Q(q,q,q,q,C.n,q,q,q,v[s],14),A.a2Q(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bQ(A.bJT(A.aAk(q,q,n,q,q,A.a76(q,!1),q,D.EH,q,o,q,q,new A.vs(!0,D.kI,D.kI,D.kI,new A.px(16,q,new A.qt(!0,new A.ba3(p),26,q),!0)))),this.d,q)
return this.e?r:B.b5(q,r,q,q,C.y,q,q,3)}}
A.ap2.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aRH
w=new B.ae(l,new A.bkw(),B.ak(l).i("ae<1,G>")).jM(0,new A.bkx())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.d(r.b,m,m,m,m,B.t(C.h,14,C.r),m,m,m)
p=$.cA()
o=r.d
n=new B.b3(4,4)
o=B.b([new B.i0(C.al,C.f,C.i,C.k,m,C.aX,m,0,B.b([new B.iy(1,C.cU,B.a3(B.b([q,B.d(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a4(r.f),m,m,m,m,B.t(C.l,12,C.aH),m,m,m)],v),C.x,C.f,C.i),m),C.ak,B.d(p.a4(o),m,m,m,m,B.bD(C.h,16,C.r),m,m,m)],v),m),C.d2,new B.Ea(new B.d9(n,n,n,n),C.bv,B.zU(C.a7,m,8,C.d.bm(o/w,0,1),D.BE),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a1k(r.gbt(),q.gbt())
else q=!0
if(!q)o.push(C.t)
C.b.H(u,o)}return B.b5(m,B.a3(u,C.k,C.f,C.i),m,m,C.y,m,m,3)}}
A.al2.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.an(new A.CU("Aktive Kunden",""+s,u),1)
w=B.an(new A.CU("K\xe4ufe",""+t.a,u),1)
v=$.cA()
return B.b5(u,B.a9(B.b([s,w,B.an(new A.CU("\xd8-Warenkorb",v.a4(t.d),u),1),B.an(new A.CU("Umsatz/Kunde",v.a4(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.y,u,u,3)}}
A.CU.prototype={
p(d){var w=null
return B.a3(B.b([B.d(this.c.toUpperCase(),w,w,w,w,B.t(C.l,10,C.r).fm(0.6),w,w,w),C.b2,B.d(this.d,w,w,w,w,B.bD(C.h,20,C.r),w,w,w)],x.p),C.x,C.f,C.H)}}
A.av3.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ae(q,new A.bvL(),B.ak(q).i("ae<1,G>")).jM(0,new A.bvM()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.b3(4,4)
t=B.b([new B.i0(C.al,C.f,C.i,C.k,r,C.aX,r,0,B.b([new B.iy(1,C.cU,B.d(u.b,r,1,C.ag,r,B.t(C.h,13,C.r),r,r,r),r),B.d(""+u.c+"\xd7 ",r,r,r,r,B.t(C.l,12,C.C),r,r,r),B.d($.cA().a4(t),r,r,r,r,B.t(C.h,13,C.r),r,r,r)],o),r),C.aF,new B.Ea(new B.d9(s,s,s,s),C.bv,B.zU(C.a7,r,6,C.d.bm(t/p,0,1),D.BE),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a1k(u.gbt(),s.gbt())
else s=!0
if(!s)t.push(C.E)
C.b.H(n,t)}return B.b5(r,B.a3(n,C.k,C.f,C.i),r,r,C.y,r,r,3)}}
A.xf.prototype={
p(d){var w=null
return B.b5(w,B.d(this.c,w,w,w,w,B.t(C.l,13,C.j),w,w,w),C.a5,w,C.y,w,w,3)}}
A.aja.prototype={
d9(d,e){return B.dm(e.ak($.bCi(),x.fM),new A.b6Q(this,d,e),new A.b6R(),new A.b6S(),!1,!0,!1,x.h,x.l)}}
A.BO.prototype={
U(){return new A.UU()},
aZL(){return this.d.$0()}}
A.UU.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aF()
q.d=new B.aW(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.R(w,"as_of"))!=null){w.toString
u=B.dp(J.aj(J.R(w,"as_of")))
q.d=u==null?q.d:u}u=B.B(x.N,x.bP)
for(t=0;t<8;++t){s=D.q3[t].a
if(v)r=""
else{r=B.aY(J.R(w,s))
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
rF(d){var w=this.e
w===$&&B.a()
w=C.c.au(w.h(0,d).a.a)
w=B.ag(w,".","")
w=B.fc(B.ag(w,",","."))
return w==null?0:w},
a4V(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q3[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aa(u,2)
s=B.ag(s,".",",")
t.jY(0,t.a.yp(C.au,C.aQ,s))}}this.G(new A.b6E())},
aGk(){this.a4V(D.atb)
this.c.N(x.q).f.aG(D.aE7)},
IE(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$IE=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.bc(a1)
for(e=0;e<8;++e)a2.E(0,D.q3[e].a)
q=a2
t=4
w=7
return B.k($.a6Z.ci().w8(B.b(["csv","txt"],x.s),C.o1,!0),$async$IE)
case 7:p=a5
a2=p
o=a2==null?null:J.Lg(a2.a).c
if(o==null){w=1
break}n=C.aM.aet(0,o,!0)
m=B.B(a1,x.i)
for(a1=C.Ct.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ayB(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.au(J.R(k,0)).toLowerCase()
i=J.Dn(q,j)?j:D.avp.h(0,j)
if(i==null)continue
d=C.c.au(C.b.mc(J.bWZ(k,1)))
d=B.ag(d,"\u20ac","")
d=B.ag(d," ","")
d=B.ag(d,".","")
h=B.ag(d,",",".")
g=B.fc(h)
if(g!=null)J.fA(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.N(x.q).f.aG(D.aDC)
w=1
break}r.a4V(m)
r.c.N(x.q).f.aG(B.bO(null,null,null,null,null,C.o,null,B.d(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a_(a3)
a1=r.c
if(a1==null){w=1
break}a1.N(x.q).f.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Import fehlgeschlagen: "+B.f(f),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IE,v)},
IP(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IP=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.G(new A.b6F(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b1i("upsert_finance_balance",B.a4(["p_as_of",C.c.a1(n.dR(),0,10),"p_cash_and_bank",q.rF("cash_and_bank"),"p_receivables",q.rF("receivables"),"p_inventory_value",q.rF("inventory_value"),"p_other_current_assets",q.rF("other_current_assets"),"p_fixed_assets",q.rF("fixed_assets"),"p_current_liabilities",q.rF("current_liabilities"),"p_long_term_liabilities",q.rF("long_term_liabilities"),"p_equity",q.rF("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IP)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZL()
o=q.c
o.toString
B.aI(o,!1).eV()
q.c.N(x.q).f.aG(D.aDG)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a_(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.N(x.q).f.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Speichern fehlgeschlagen: "+B.f(p),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.G(new A.b6G(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IP,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.d("Bilanzwerte erfassen",r,r,r,r,B.bD(C.h,18,C.r),r,r,r),p=s.f?r:new A.b6I(s,d),o=s.d
o===$&&B.a()
p=B.ev(D.aes,B.d("Stichtag: "+C.c.a1(o.dR(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.an(B.ev(D.afN,D.aK6,o?r:s.gaFg(),r),1)
v=x.p
w=B.b([p,C.E,B.a9(B.b([w,C.ak,B.an(B.ev(D.afx,D.aJP,o?r:s.gaGj(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q3[u]
o=s.e
o===$&&B.a()
C.b.H(w,B.b([B.cG(r,C.ae,!1,r,!0,C.o,r,B.cM(),o.h(0,p.a),r,r,r,r,r,2,new B.bw(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.T,!0,r,!0,r,!1,r,C.ah,r,r,r,r,C.dQ,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.y,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.a3,r,C.S,r,r,r,r),C.E],v))}w.push(B.d("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.t(C.l,11,C.j),r,r,r))
p=B.bQ(B.ey(B.a3(w,C.ab,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.cO(C.bt,r,r,o?r:new A.b6J(d),r,r)
o=o?r:s.gaG2()
t=B.dL(C.n,C.h,r,r,r,r,r)
return B.fC(B.b([w,B.db(s.f?F.ZH:C.cO,o,t)],v),C.q,p,q)}}
A.bo.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a1k(this.gbt(),e.gbt())
else w=!0
return w},
gA(d){return(B.fb(B.N(this))^B.bS5(this.gbt()))>>>0},
j(d){B.bL7()
return B.N(this).j(0)}}
A.M4.prototype={
U(){return new A.UV(B.B(x.S,x.J),new A.aAu(B.B(x.x,x.T)),null,null)}}
A.UV.prototype={
p(d){var w,v=this,u=v.a2L(),t=v.CW
t.toString
t=v.a2M(t.av(0,v.gfl().gt(0)))
w=v.a2M(u)
v.a.toString
return new A.M0(new A.a2P(t,w,null),u,null)},
a2M(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aAr(s.c,s.d,!1,r,s.a))}return d.aRQ(w)},
a2L(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.VE(t.ch)
if(r)s=w.a
r=t.y
t=t.aSK(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aRR(A.bCM(!1,!0,!0,v.d,v.c,u.gatL(),v.f,v.e))}return t},
atM(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagW()||e==null||e.a==null){w=v.cy
v.G(w.gaRe(w))
return}v.G(new A.b6V(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2L(),new A.b6W(w)))}}
A.ob.prototype={
Wh(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aAk(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aSK(d,e){return this.Wh(null,null,d,e)},
aRR(d){return this.Wh(null,d,null,null)},
aRQ(d){return this.Wh(d,null,null,null)},
Yc(d,e,f){var w,v,u,t=A.kI(d.ch,e.ch,f,A.caE(),x.dB),s=B.am(d.CW,e.CW,f),r=A.bLf(d.d,e.d,f),q=A.bNc(d.e,e.e,f),p=A.bLd(d.c,e.c,f),o=e.a
o=A.a76(B.a38(d.a.b,o.b,f),o.a)
w=B.am(d.y,e.y,f)
v=B.am(d.x,e.x,f)
u=B.am(d.z,e.z,f)
r=A.aAk(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bL9(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbt(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aAj.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fU.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.aAs(),B.ak(v).i("ae<1,G>")).jM(0,new A.aAt())
v=v.length
return w+(v-1)*this.d},
gbt(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iv.prototype={
gbt(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mU.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a2M.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2R.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.afI.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2S.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DL.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.M5.prototype={}
A.a2T.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.ya.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yc(v,w,d)}}
A.aj6.prototype={}
A.ajd.prototype={}
A.aje.prototype={}
A.ajg.prototype={}
A.ajh.prototype={}
A.aji.prototype={}
A.ajj.prototype={}
A.ajk.prototype={}
A.ajl.prototype={}
A.aAu.prototype={
VE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.v2(0,0,!1)
v=new A.zX(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.v2(t,u,!0)}w=null
try{w=C.b.p5(d,new A.aAv())}catch(s){return new A.v2(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.v2(q,r,!1)
u.m(0,v,j)
return j}}
A.v2.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.ajf.prototype={}
A.aAw.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0T(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.adr(t,A.bCL(w,t.a),u)
l.y=u
l.aU5(e,u,f)
l.an6(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aUe(d,e,m,t,r,s,n,o,f)}}},
adr(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.h(B.e3("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.ak(p).i("j1<1>")).aD(0,new A.aAx(t,q,r,s))
w.push(new A.a7O(q))}return w},
aU5(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
if(a1!==a2){if(a1>a2){a3=b2.dK(Math.max(t,a2),b4,b7)
a4=B.Rk(h,Math.min(b2.dK(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dK(Math.min(u,a2),b4,b7)
a4=B.Rk(h,a5,g,Math.max(b2.dK(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
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
a9=b2.dK(f,b4,b7)
e=a8.b
b0=b2.dK(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.K(h,a9,g,b0):new B.K(h,b0,g,a9)
J.bi(v.save())
v.clipRect(B.dS(b1),$.mO()[1],!0)
a6=b2.f.e2()
v.drawRRect(B.lK(a4),a6)
a6.delete()
v.restore()
b2.aUc(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
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
n=A.aDE(new B.cr(n.r,C.an,null,null,k),o.r)
a6=b2.r.e2()
k=n.e
v.drawPath((k==null?n.e=new B.mZ(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aUe(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Br(a5,a5,a5,a5,B.cP(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lM().a_W(a8,a7.b),a7.a),C.bk,C.z,a5,b6.c,C.bz)
w.ahf(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dK(s,a6,b6)
q=b4.a
p=a4.dK(q,a6,b6)
o=b1.b
n=u+o.gey()
m=v+4+(o.gd5(0)+o.gd8(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aN9)j=v===D.a_o&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_X(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.K(h,i,v,t)
s=b1.a
f=new B.b3(s,s)
e=B.GR(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lM().L9(new B.I(v,t),d).b
s=$.lM()
q=w.b
p=q.c
q=q.a.c
a0=s.L9(new B.I(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gajt()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.WU(d,new A.aAy(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aUc(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gep(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dK(w,j,k)
u=e.a
t=n.dK(u,j,k)
w=u<w
u=w?new B.b3(i.z,i.Q):C.a9
s=w?new B.b3(i.x,i.y):C.a9
r=w?C.a9:new B.b3(i.e,i.f)
w=w?C.a9:new B.b3(i.r,i.w)
q=B.Rk(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dK(v,j,k),i.b)
r=n.dK(t,j,k)
v=t<v
t=v?C.a9:new B.b3(i.z,i.Q)
p=v?C.a9:new B.b3(i.x,i.y)
o=v?new B.b3(i.e,i.f):C.a9
q=B.Rk(w,s,u,r,t,p,o,v?new B.b3(i.r,i.w):C.a9)}else q=B.bEM(w,n.dK(v,j,k),u,n.dK(t,j,k),C.a9)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xy(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.adr(b2,A.bCL(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dK(k,b2,b3)
m=b0[q].c[o]
g=a7.dK(m.a+m.x.b,b2,b3)}else{h=a7.dK(j+m.x.b,b2,b3)
g=a7.dK(b0[q].c[o].b,b2,b3)}a7.dK(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dK(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dK(a4.a,b2,b3)
a6=a7.dK(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a2T(d,q,a0,o,a2,a1,new A.eG(d.a,v),new B.r(n,t))}}return null}}
A.a7O.prototype={}
A.a2P.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aAw()
t.a24()
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
t=new A.acR(this.d,v,u,t,d,C.bc,new B.bu(),B.aN(x.j))
t.bl()
t.ZO(v.cy)
t.agp()
return t},
by(d,e){e.sip(0,this.d)
e.sZy(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.acR.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZy(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1D(d.cy)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bi(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h0.ih(w,new A.a3m(t,v),new A.wd(u.aE,u.i9,u.d3,x.Q))
s.restore()},
a_P(d){var w=this,v=w.gC(0)
return new A.M5(w.h0.Xy(d,v,new A.wd(w.aE,w.i9,w.d3,x.Q)))}}
A.a2F.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DK.prototype={
L(){return"AxisSide."+this.b}}
A.tX.prototype={}
A.qt.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aei.prototype={
gbt(){return[!1,0,0,0]}}
A.px.prototype={
gbt(){return[this.b,this.a,this.c,!0]}}
A.vs.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eG.prototype={
j(d){return"("+B.f(this.a)+", "+B.f(this.b)+")"},
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
A.pV.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afK.prototype={
gbt(){return[this.a,this.b]}}
A.Ro.prototype={
gbt(){return[this.a,this.b]}}
A.nf.prototype={
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
A.a7Z.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ag7.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.NZ.prototype={
gbt(){return[this.a,this.b,!0]}}
A.vr.prototype={}
A.O7.prototype={
aeT(d,e,f){var w,v
$.aq()
w=B.b4()
v=this.a
w.r=v.gt(v)
w.b=C.bm
d.iU(f,this.b,w)},
gbt(){return[this.a,this.b,this.c,0]}}
A.aj1.prototype={}
A.aj5.prototype={}
A.amo.prototype={}
A.amP.prototype={}
A.amQ.prototype={}
A.amS.prototype={}
A.amT.prototype={}
A.anJ.prototype={}
A.anI.prototype={}
A.anK.prototype={}
A.aru.prototype={}
A.atr.prototype={}
A.ats.prototype={}
A.av7.prototype={}
A.avS.prototype={}
A.avR.prototype={}
A.avT.prototype={}
A.aA8.prototype={
Nk(d,e,f,g,h,i){return new B.ip(this.aXS(d,e,f,g,h,i),x.g4)},
aXR(d,e,f,g){return this.Nk(d,e,f,!0,g,!0)},
aXS(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Nk(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lM().akD(s,u,v,w)
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
A.M_.prototype={
a24(){var w,v=this
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
w.a0U(d,e,f)
w.aU1(e,f)
w.aUb(e,f)
w.aUa(e,f)},
aUa(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lM().Pn(w.a,a1.r-a1.f)
u=$.bBP().Nk(a1.w,v,a1.r,!1,a1.f,!1)
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
p.seY(j.mQ(0,i))}else{if(k==null)k=C.M
p.r=k.gt(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c6(p.r)
p.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.Ee(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lM().Pn(w.b,a1.y-a1.x)
u=$.bBP().Nk(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fo(u.a(),u.$ti.i("fo<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dK(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.li(n,m)
if(k!=null){q.r=C.J.gt(0)
q.seY(k.mQ(0,i))}else{if(p==null)p=C.M
q.r=p.gt(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c6(q.r)
q.r=B.aG(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.Ee(n,m,d.a,f.d)}},
aU1(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.he(new B.K(0,0,0+w.a,0+w.b),this.b)},
aUb(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.li(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.J.gt(0)
r.seY(p.mQ(0,s))}else{r.r=(q==null?C.M:q).gt(0)
r.seY(null)}o=n.e.e2()
w.drawRect(B.dS(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.li(new B.r(0,n.dK(t.a,m,e)),new B.r(w,n.dK(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.J.gt(0)
v.seY(q.mQ(0,s))}else{v.r=(r==null?C.M:r).gt(0)
v.seY(null)}o=n.e.e2()
j.drawRect(B.dS(s),o)
o.delete()}},
aU9(d,e,f){var w,v
this.a0U(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeU(d,e,f,w)
if(v.b.length!==0)this.aUg(d,e,f,w)},
aeU(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dK(o,a1,a0)
m=new B.r(0,n)
o=f.dK(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.li(m,l)
if(j!=null){n.r=C.J.gt(0)
n.seY(j.mQ(0,i))}else{if(k==null)k=C.M
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c6(n.r)
n.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
e.Ee(m,l,f.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=C.d.ao(o,n.gbU(n).eI(0,2))
J.bi(r.save())
r.translate(h,g)
n=n.gOi().b
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
s.aeV(0,n,new B.r(h,o),k)}}},
aUg(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
n.seY(j.mQ(0,i))}else{if(k==null)k=C.M
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c6(n.r)
n.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
a1.Ee(m,l,d.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.bi(r.save())
r.translate(f,e)
n=n.gOi().b
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
s.aeV(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dK(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_X(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.M0.prototype={
gamr(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gams(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamt(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gamp(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amN(d){var w,v=this,u=null,t=v.d,s=A.bDy(t.d),r=t.a
r=r.a&&A.bXz(r.b)?r.b:u
w=B.b([B.aD(u,v.c,C.p,u,u,new B.aB(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.aAa(w)
if(v.gamr())C.b.hB(w,s.$1(!0),new A.Ba(D.BL,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gamt())C.b.hB(w,s.$1(!0),new A.Ba(D.n2,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gams())C.b.hB(w,s.$1(!0),new A.Ba(D.BM,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gamp())C.b.hB(w,s.$1(!0),new A.Ba(D.dV,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jA(new A.aA9(this))}}
A.SQ.prototype={
U(){return new A.ZO(new B.bp(null,x.eF))}}
A.ZO.prototype={
azw(){switch(this.a.c.a){case 0:return C.eo
case 1:return C.fj
case 2:return C.d6
case 3:return C.dE}},
aA1(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
azy(d){this.a.toString
return},
ap(){this.aF()
$.cJ.x1$.push(this.ga5o())},
bc(d){this.bF(d)
$.cJ.x1$.push(this.ga5o())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.aA1()
return B.BA(B.b43(0,B.aD(v.azw(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aej.prototype={
bo(d){return A.bXr(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2G.prototype={
ho(d){if(!(d.b instanceof B.hB))d.b=new B.hB(null,null,C.v)},
i_(d){if(this.B===C.al)return this.yx(d)
return this.aex(d)},
aML(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
aaf(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dH(d){var w=this.aae(d,B.hQ())
switch(this.B.a){case 0:return d.c4(new B.I(w.a,w.b))
case 1:return d.c4(new B.I(w.b,w.a))}},
aae(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.al?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ht(u,null)
break
case 1:q=B.ht(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aaf(p)
t=Math.max(t,o.aML(p))
m=r.aK$}return new A.bjW(n<1/0?n:s,t)},
cE(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga7.call(p)),n=p.aae(o,B.mN()),m=n.a,l=n.b
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
q=s.b-p.aaf(r==null?B.U(B.a0("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aK$;++u}},
ej(d,e){return this.yy(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a5.sbh(0,null)
this.vo(d,e)},
l(){this.a5.sbh(0,null)
this.apI()}}
A.bjW.prototype={}
A.aAb.prototype={}
A.k2.prototype={
gbt(){return[this.a,this.b]}}
A.oa.prototype={}
A.aj2.prototype={}
A.aj3.prototype={
aP(d){var w,v,u
this.fv(d)
w=this.aj$
for(v=x.L;w!=null;){w.aP(d)
u=w.b
u.toString
w=v.a(u).aK$}},
aI(d){var w,v,u
this.fk(0)
w=this.aj$
for(v=x.L;w!=null;){w.aI(0)
u=w.b
u.toString
w=v.a(u).aK$}}}
A.aj4.prototype={}
A.US.prototype={
l(){var w,v,u
for(w=this.X6$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.Ba.prototype={
goH(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d6
case 1:return C.dE
case 2:return C.eo
case 3:return C.fj}},
gb1u(){var w=this.d,v=A.bDy(w.d),u=A.bLc(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ah(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ah(0,new B.ai(u.a,0,u.c,0))}},
gajh(){var w=this.d,v=A.bLc(w.a),u=A.bDy(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aYy(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goH().c.d
if(o==null)o=$.lM().Pn(d,f-e)
w=p.c
v=w!==D.n2
if((!v||w===D.dV)&&p.d instanceof A.ob){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bCL(u,d)
w=new B.j1(t,B.ak(t).i("j1<1>"))
s=w.gi2(w).eQ(0,new A.b11(u),x.W).fQ(0)}else{r=$.bBP()
w=!v||w===D.dV
v=p.d
q=r.aXR(w?v.w:v.z,o,f,e)
v=B.oK(q,new A.b12(p,f,e,d),q.$ti.i("u.E"),x.W)
s=B.Q(v,B.l(v).i("u.E"))}w=B.ak(s).i("ae<1,oa>")
w=B.Q(new B.ae(s,new A.b13(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goH()
w=j.goH()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aD(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.n2
u=!v
t=!u||w===D.dV
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dV?C.G:C.al
q=B.b([],x.p)
if(w===D.BL||v)j.goH()
if(j.goH().c.a){v=!u||w===D.dV?r:j.goH().c.c
p=!u||w===D.dV?j.goH().c.c:r
o=j.gb1u()
n=!u||w===D.dV?C.al:C.G
j.gajh()
m=j.gajh()
l=!u||w===D.dV
k=j.d
l=l?k.f:k.x
u=!u||w===D.dV?k.r:k.y
q.push(B.aD(i,A.c3Q(new A.aAb(),n,j.aYy(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BM||w===D.dV)j.goH()
return new B.ef(t,i,i,B.c_h(q,C.k,s,i,C.f,C.H,0,i,i,C.aX),i)}}
A.a2V.prototype={
gbt(){return[this.a,this.b]}}
A.a75.prototype={
gbt(){return[this.a,this.b]}}
A.Oe.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a77.prototype={
gacL(d){return!1},
gbt(){return[!1,!1,!1,!1]}}
A.aAH.prototype={}
A.aH9.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ajo.prototype={}
A.amM.prototype={}
A.amN.prototype={}
A.amU.prototype={}
A.M8.prototype={
ih(d,e,f){}}
A.wd.prototype={}
A.hA.prototype={
gdP(){return null},
gagW(){var w,v=this
B.bI()
B.bI()
B.bI()
w=v instanceof A.Od
if(w)return!0
return!(v instanceof A.Oa)&&!(v instanceof A.O9)&&!(v instanceof A.Ob)&&!(v instanceof A.O8)&&!w&&!(v instanceof A.Oc)}}
A.a7b.prototype={
gdP(){return this.a.b}}
A.a7c.prototype={
gdP(){return this.a.b}}
A.a7d.prototype={
gdP(){return this.a.b}}
A.O9.prototype={}
A.Oa.prototype={}
A.a7g.prototype={
gdP(){return this.a.b}}
A.Oc.prototype={}
A.Od.prototype={
gdP(){return this.a.b}}
A.a7a.prototype={
gdP(){return this.a.b}}
A.a79.prototype={
gdP(){return this.a.b}}
A.O8.prototype={
gdP(){return this.a.b}}
A.a7e.prototype={
gdP(){return this.a.gdP()}}
A.a7f.prototype={
gdP(){return this.a.gdP()}}
A.Ob.prototype={
gdP(){return this.a.gdP()}}
A.H7.prototype={
ZO(d){this.V=d.b
this.W=d.c
this.a5=d.d},
agp(){var w=this,v=null,u=w.al=B.bEs(v,v)
u.ay=new A.aXe(w)
u.ch=new A.aXf(w)
u.CW=new A.aXg(w)
u.cy=new A.aXh(w)
u.cx=new A.aXi(w)
u=w.aJ=B.HW(v,-1,v)
u.B=new A.aXj(w)
u.a_=new A.aXk(w)
u.V=new A.aXl(w)
u=w.bE=B.a95(v,w.a5,v)
u.p3=new A.aXm(w)
u.p4=new A.aXn(w)
u.RG=new A.aXo(w)},
cE(){var w=x.k.a(B.M.prototype.ga7.call(this))
this.fy=new B.I(w.b,w.d)},
dH(d){return new B.I(d.b,d.d)},
kM(d){return!0},
n_(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bE
w===$&&B.a()
w.oF(d)
w=v.aJ
w===$&&B.a()
w.oF(d)
w=v.al
w===$&&B.a()
w.oF(d)}else if(x.gJ.b(d))v.la(new A.a7f(d))},
gNO(d){return new A.aXp(this)},
gNQ(d){return new A.aXq(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdP()
v=w!=null?u.a_P(w):null
u.V.$2(d,v)
u.a_=C.bc},
gLC(d){return this.a_},
gG9(){var w=this.ar
w===$&&B.a()
return w},
aP(d){this.fv(d)
this.ar=!0},
aI(d){this.ar=!1
this.fk(0)},
$ijD:1}
A.Py.prototype={
U(){return new A.Xw(B.b([],x.r),B.B(x.S,x.J),new A.aNg(B.B(x.y,x.dj)),null,null)}}
A.Xw.prototype={
p(d){var w,v=this,u=v.a5q(),t=v.CW
t.toString
t=v.ach(t.av(0,v.gfl().gt(0)))
w=v.ach(u)
v.a.toString
return new A.M0(new A.a8X(t,w,null),u,null)},
ach(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ak(w).i("ae<1,ei>")
w=B.Q(new B.ae(w,new A.bk1(this,d),v),v.i("ax.E"))
return d.aSH(w,this.cy)},
a5q(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.VE(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSW(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aSl(new A.FF(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAP(),t.c,t.d))}return r},
aAQ(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagW())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.G(new A.bk_(v))
return}v.G(new A.bk0(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a5q(),new A.bk2(w)))}}
A.q8.prototype={
Yc(d,e,f){var w,v,u,t,s,r,q=B.am(d.f,e.f,f),p=B.am(d.r,e.r,f),o=B.am(d.w,e.w,f),n=B.am(d.x,e.x,f),m=B.am(d.y,e.y,f),l=B.am(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a76(B.a38(d.a.b,j.b,f),j.a)
w=A.bL9(d.at,e.at,f)
v=A.bLd(d.c,e.c,f)
u=A.bLf(d.d,e.d,f)
t=A.bNc(d.e,e.e,f)
s=A.kI(d.ch,e.ch,f,A.ccL(),x.cz)
s.toString
r=A.kI(d.CW,e.CW,f,A.ccK(),x.bO)
r.toString
u=A.bE4(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Wi(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bE4(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSW(d,e,f,g){return this.Wi(null,null,d,e,f,g,null)},
aSl(d){var w=null
return this.Wi(w,d,w,w,w,w,w)},
aSH(d,e){var w=null
return this.Wi(d,w,w,w,w,w,e)},
gbt(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ei.prototype={
asn(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p5(n.a,new A.aNf())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
aeb(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aNe(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aSs(d){return this.aeb(d,null)},
aSu(d){return this.aeb(null,d)},
gbt(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Pz.prototype={
gbt(){return[this.a]}}
A.a2O.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mV.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.M3.prototype={
gbt(){return[!1,this.b,this.c,!0]}}
A.z3.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.aN4.prototype={
L(){return"LabelDirection."+this.b}}
A.a78.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.FF.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8Y.prototype={
gbt(){return[4,C.eQ,16,D.y8,0,120,A.ccN(),!1,!1,!1,0,C.K,A.ccM()]}}
A.ni.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qB.prototype={}
A.rV.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.tZ.prototype={
gbt(){return[this.a,this.b]}}
A.Hz.prototype={
gbt(){return[this.a]}}
A.PA.prototype={}
A.zS.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yc(v,w,d)}}
A.ajb.prototype={}
A.ajc.prototype={}
A.ajq.prototype={}
A.amO.prototype={}
A.amR.prototype={}
A.aoF.prototype={}
A.aoG.prototype={}
A.aoH.prototype={}
A.aoJ.prototype={}
A.aoK.prototype={}
A.aoL.prototype={}
A.aoM.prototype={}
A.atq.prototype={}
A.av6.prototype={}
A.aNg.prototype={
VE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yL
u=new A.zX(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zT(s,r,q,t,!0)}w=null
try{w=C.b.p5(d,new A.aNh())}catch(p){return D.yL}v=null
try{v=C.b.p5(w.a,new A.aNi())}catch(p){return D.yL}o=v.a
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
A.aoI.prototype={}
A.aNj.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacL(0)){v=a3.b
u=v.a
v=v.b
$.aq()
a3.a.iP(new B.K(0,-40,0+(u+40),-40+(v+40)),B.b4())
a3.aRl(new B.K(0,0,u,v))}d.a0T(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aU7(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aU3(a3,q,a4)
d.aU8(a3,q,a4)
d.an5(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.S(o)
if(n.gq(o)!==p.length)throw B.h(B.e3("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vW(q,i,j,k))}}d.aUf(a3,s,a4)
if(w.gacL(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aUd(a2,a3,v,f,new A.Hz(g),a4)}},
aU3(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bDx(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.a_o(o,e,u,f)
s=p.akv(o,e,t,u,f)
r=p.a_q(o,e,t,u,f,!0)
q=p.aku(o,e,t,u,f)
p.aU6(d,s,p.a_n(o,e,t,u,f,!0),f,e)
p.aU0(d,q,r,f,e)
p.aU4(d,t,e)
p.aU2(d,t,e,f)}},
aU7(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bDx(a5.a),a8=A.bDx(a6.a)
if(a7.length!==a8.length)throw B.h(B.bP("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bY.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ak(n).i("cI<1>")
l=B.Q(new B.cI(n,m),m.i("ax.E"))
k=a2.a_o(a3,a5,o,b2)
j=a2.a_p(a3,a6.aSu(l),l,b2,k)
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
m=a2.dK(h,a3,b2)
e=a2.ff(g,a3,b2)
d=a2.dK(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.J.gt(0)
a0.seY(v.mQ(0,new B.K(n,m,e,d)))}else{a0.r=(r?C.M:w).gt(0)
a0.seY(null)}$.aq()
a1=new B.mY(C.dG,C.bm,C.ei,C.eF,C.e6).e2()
n=B.dS(new B.K(0,0,t,s))
m=$.bY.b
if(m===$.bY)B.U(B.vU(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e2()
n=j.e
a4.drawPath((n==null?j.e=new B.mZ(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aU8(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_u(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fZ)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dK(q.b,w,f)
n.$4(q,p/v*100,e,r).aeT(s,q,new B.r(p,o))}}},
aUf(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fX(b3,new A.aNm())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.a_u(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dK(j.b,w,b4)
f=i.b
e=f.a
d=B.cu()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rU(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lI(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lI(q.$2(m,k))))
f=b1.dK(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dK(a2,w,b4)
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
f.seY(a6.mQ(0,b0))}else{if(a4==null)a4=C.M
f.r=a4.gt(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c6(f.r)
f.r=B.aG(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.Ee(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rU(d.a))
f.aeT(t,j,new B.r(h,g))}}},
a_p(d,e,f,g,h){var w=this.akw(d,e,f,g,h)
return w},
a_o(d,e,f,g){return this.a_p(d,e,f,g,null)},
akw(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cr($.aq().r,C.an,null,null,B.b([],x.v)):a5,f=J.S(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dK(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.fk(d,a0))
if(e===1)g.aB(new B.cw(d,a0))}else g.aB(new B.cw(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.ff(f.h(a3,t).a,a1,a4)
r=i.dK(f.h(a3,t).b,a1,a4)
q=t-1
p=i.ff(f.h(a3,q).a,a1,a4)
q=i.dK(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.ff(f.h(a3,n?o:t).a,a1,a4)
l=i.dK(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.N4(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_q(d,e,f,g,h,i){var w=this,v=B.NT(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aB(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,s))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dK(u.h(g,0).b,d,h)))
v.aB(new B.pG())
return v},
akv(d,e,f,g,h){return this.a_q(d,e,f,g,h,!1)},
a_n(d,e,f,g,h,i){var w=this,v=B.NT(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aB(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,0))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dK(u.h(g,0).b,d,h)))
v.aB(new B.pG())
return v},
aku(d,e,f,g,h){return this.a_n(d,e,f,g,h,!1)},
aU6(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dK(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.ff(t.a,w,g)
s=r.r
s===$&&B.a()
A.bEr(s,q.b,q.c,new B.K(v,u,t,w.b))
d.a.i1(e,r.r)},
aU0(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dK(t.b,w,g)
s=r.r
s===$&&B.a()
A.bEr(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i1(e,r.r)},
aU4(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.NV(B.NT(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iJ:C.ei
u.e=C.eF
u.r=v.gt(0)
u.seY(null)
u.c=f.x
u.r=v.gt(0)
$.lM()
u.z=new B.A0(C.aA,w.c*0.57735+0.5)
d.a.i1(A.aDE(e,f.cy).ed(w.b),this.f)},
aU2(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iJ:C.ei
q.e=C.eF
q=f.b
q===$&&B.a()
q=s.ff(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dK(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.ff(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dK(u.b,r,g)
t=s.f
A.bEr(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c1J(t)
d.a.i1(A.aDE(e,f.cy),s.f)},
aUd(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bRz(b1),b3=J.S(b2)
if(b3.gq(b2)!==b1.length)throw B.h(B.e3("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lM().a_W(b4,u.b)
s=u.a
r=w.k(0,C.j9)?new B.kB(1):w
q=new B.tU(new B.fx(s,a8,a8,C.bc,a8,a8,a8,a8,a8,a8,t),C.bk,C.z,r,a8,a8,a8,a8,C.bz,a8)
q.ahf(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dK(b7.b,a9,b9)
l=p+C.eQ.gey()
k=o+(w-1)*4+(C.eQ.gd5(0)+C.eQ.gd8(0))
j=t-k-16
i=a7.a_X(b3,l,D.y8,0)
b3=i+l
w=j+k
h=new B.b3(4,4)
g=B.GR(new B.K(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bRy(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lM().L9(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lM().L9(new B.I(t,w),0)
if(!C.K.k(0,C.K)){s=a7.Q
s===$&&B.a()
s.r=C.J.gt(0)
s.c=0}b5.WU(0,new A.aNk(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c4r(q.r,q.w)
A:{if(D.EP===a5){a6=a3
break A}if(D.EQ===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.WU(0,new A.aNl(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_u(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xy(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akX(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fX(t,new A.aNn())
return t.length===0?null:t},
akX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fZ))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dK(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qB(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vW.prototype={}
A.a8X.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aNj()
t.a24()
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
w.a=D.a0K
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
t=new A.ad3(this.d,v,u,t,d,C.bc,new B.bu(),B.aN(x.j))
t.bl()
t.ZO(v.cx)
t.agp()
return t},
by(d,e){e.sip(0,this.d)
e.sZy(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.ad3.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZy(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1D(d.cx)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bi(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h0.ih(w,new A.a3m(t,v),new A.wd(u.aE,u.i9,u.d3,x.C))
s.restore()},
a_P(d){var w=this,v=w.gC(0)
return new A.PA(w.h0.Xy(d,v,new A.wd(w.aE,w.i9,w.d3,x.C)))}}
A.OD.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a3m.prototype={
aRl(d){this.a.a.clipRect(B.dS(d),$.mO()[1],!0)
return null},
af0(d,e){d.aO(this.a,e)},
WU(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bi(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lM()
s.Zw(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ee(d,e,f,g){var w=new B.cr($.aq().r,C.an,null,null,B.b([],x.v))
w.aB(new B.fk(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.i1(A.aDE(w,g),f)}}
A.zX.prototype={
gbt(){return[this.a]}}
A.aoT.prototype={}
A.a3w.prototype={}
A.b4v.prototype={
L9(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aZ7(d,e){var w,v,u,t,s
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
aZ8(d,e){var w,v
if(d==null)return D.a0W
w=d.b
v=e/2
return d.aSx(w>v?v:w)},
Pn(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b1f(w)},
b1f(d){if(d<1)return this.aLd(d)
return this.a9h(d)},
aLd(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a9h(d*q)/q},
a9h(d){var w,v=C.e.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akM(d){if(d>=1)return 1
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
a_W(d,e){var w,v,u=d.N(x.f0)
if(u==null)u=C.jf
w=e.a?u.w.c7(e):e
v=B.ba(d,C.w0)
v=v==null?null:v.ay
return v===!0?w.c7(C.mJ):w},
akD(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qD)","D(pU)","G(G,pU)","D(eG)","~(w,fU)","G(ei,w)","vp(z)","G(G,qD)","bV(G,tX)","pV(G)","T<~>()","w(qB,qB)","G(w_)","Ju(os)","qD(@)","w_(@)","ro(z)","wY(@)","J4(C,bK)","Kq(ov)","Jp(ot)","Ds(@)","ei(G)","vq(dP<vq>)","a7(G,tX)","F2(dP<aI_>)","m0(wO<m0>)","pU(@)","G(wY)","xf(C,bK)","BO(z)","~()","T<ov>(c4<ov>)","~(hA,M5?)","ya(@)","G(iv)","D(fU)","~(w,iv)","~(@)","k2(oa)","c(oa)","k2(bB<w,G>)","k2(G)","oa(k2)","~(hA,PA?)","ei(ei)","T<os>(c4<os>)","zS(@)","T<ot>(c4<ot>)","tZ(w)","vr(eG,G,ei,w)","rV(ni)","D(ei)","w(w,w,G)","G(fU)","~(xh)","z_(ew<C?>)","fU(fU,fU,G)","iv(iv,iv,G)","mU(mU,mU,G)","DL?(fU,w,iv,w)","F(fU)","c(G,tX)","eG(eG,eG,G)","D(G)","nf(nf,nf,G)","nE(nE,nE,G)","l1(l1,l1,G)","lu(lu,lu,G)","i(l1)","i(lu)","ei(ei,ei,G)","mV(mV,mV,G)","vr(eG,G,ei,w{size:G?})","D(eG,ei)","G(r,r)","v<tZ>(ei,v<w>)","xk(C,bK)","v<rV>(v<ni>)","F(ni)","w(vW,vW)"])
A.aHV.prototype={
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
r=A.byA(l.h(0,"amount_net"))
q=A.byA(l.h(0,"amount_tax"))
p=A.byA(l.h(0,"amount_gross"))
o=A.byA(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.aj(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.aj(m)
l=l.h(0,"source_account_code")
return new A.pU(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.aj(l))},
$S:z+27}
A.aHW.prototype={
$1(d){var w=B.co(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qD(J.aj(v==null?"":v),A.po(w.h(0,"revenue_net")),A.po(w.h(0,"expense_net")),A.po(w.h(0,"result_net")))},
$S:z+14}
A.aHX.prototype={
$1(d){var w,v,u,t=B.co(x.f.a(d),x.N,x.z),s=B.al(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.aj(r==null?"unbekannt":r)
w=B.al(t.h(0,"code"))
v=A.po(t.h(0,"gross"))
u=B.aY(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.w_(s,r,w,v,u,A.po(t.h(0,"avg_basket")))},
$S:z+15}
A.aHY.prototype={
$1(d){var w,v=B.co(x.f.a(d),x.N,x.z),u=B.al(v.h(0,"product_id")),t=v.h(0,"name")
t=J.aj(t==null?"unbekannt":t)
w=B.aY(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wY(u,t,w,A.po(v.h(0,"gross")))},
$S:z+17}
A.aIg.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.S(d)
v=w.h(d,"code")
v=J.aj(v==null?"":v)
u=w.h(d,"name")
u=J.aj(u==null?"":u)
t=w.h(d,"direction")
return new A.Ds(v,u,J.aj(t==null?"expense":t),A.uH(w.h(d,"net")),A.uH(w.h(d,"tax")),A.uH(w.h(d,"gross")))},
$S:z+21}
A.bzq.prototype={
$1(d){return new A.vq(d.ak($.bA(),x.A))},
$S:z+23}
A.bzr.prototype={
$1(d){return new A.F2(d.ak($.bWf(),x.D))},
$S:z+25}
A.bBn.prototype={
$1(d){return E.aHZ()},
$S:z+26}
A.bzs.prototype={
$1(d){var w=d.ak($.r3(),x.P)
return d.ak($.a1O(),x.a).GC(w)},
$S:z+32}
A.bzo.prototype={
$1(d){var w=d.ak($.r3(),x.P)
return d.ak($.a1O(),x.a).Gn(w)},
$S:z+46}
A.bzp.prototype={
$1(d){var w=d.ak($.r3(),x.P)
return d.ak($.a1O(),x.a).Gx(w)},
$S:z+48}
A.bzn.prototype={
$1(d){return this.akl(d)},
akl(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bA(),x.A).fd("finance_balance_kpis",t),$async$$1)
case 3:s=r.co(q.a(f),x.N,t)
if(!J.e(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aHU.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1O(),x.a).pK(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHT.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1O(),x.a).Md(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfW.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbq()
r=$.bCj()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfR.prototype={
$1(d){var w=this.a
return w.G(new A.bfQ(w,d))},
$S:z+55}
A.bfQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bfS.prototype={
$0(){var w=this.a
return w.G(new A.bfP(w))},
$S:0}
A.bfP.prototype={
$0(){return this.a.x=null},
$S:0}
A.bfV.prototype={
$0(){return F.k6},
$S:88}
A.bfU.prototype={
$2(d,e){return new A.xk("Buchungen konnten nicht geladen werden: "+B.f(d),C.Q,F.lr,null)},
$S:z+77}
A.bfT.prototype={
$1(d){return new A.Ju(d,this.a.atu(d.b),null)},
$S:z+13}
A.bfO.prototype={
$1(d){var w=this.a
if(w.gSZ()!=null&&d.c!==w.gSZ())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bfK.prototype={
$0(){return this.a.e.$1(D.Bm)},
$S:0}
A.bfL.prototype={
$0(){return this.a.e.$1(D.a_O)},
$S:0}
A.bfM.prototype={
$0(){return this.a.e.$1(D.a_P)},
$S:0}
A.bfN.prototype={
$0(){return this.a.e.$1(D.a_Q)},
$S:0}
A.bkc.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bkd.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bke.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bkf.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bkg.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bkh.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bki.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aIe.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCk()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aI5.prototype={
$0(){return this.a.K4(this.b,this.c)},
$S:0}
A.aI6.prototype={
$0(){return this.a.BU(this.b,this.c)},
$S:0}
A.aI7.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dC(B.dy(new A.aI4(),null,w),w)},
$S:0}
A.aI4.prototype={
$1(d){return F.DF},
$S:z+16}
A.aI8.prototype={
$0(){return B.q_(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aI9.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dC(B.dy(new A.aI3(),null,w),w)},
$S:0}
A.aI3.prototype={
$1(d){return D.aaz},
$S:z+6}
A.aIa.prototype={
$0(){var w=this
return w.a.BV(w.b,w.c,w.d)},
$S:0}
A.aId.prototype={
$0(){return F.k6},
$S:88}
A.aIc.prototype={
$2(d,e){return new A.J4(B.f(d),null)},
$S:z+18}
A.aIb.prototype={
$1(d){return new A.Kq(d,null)},
$S:z+19}
A.aI2.prototype={
$1(d){var w=null,v=this.a,u=$.cQ()
v=B.d("Die Finanzauswertung f\xfcr "+u.a4(v.a)+" \u2013 "+u.a4(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.fC(B.b([B.cO(C.bt,w,w,new A.aI0(u),w,w),B.db(F.kp,new A.aI1(u),B.dL(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mL)},
$S:43}
A.aI0.prototype={
$0(){B.aI(this.a,!1).c8(!1)
return null},
$S:0}
A.aI1.prototype={
$0(){B.aI(this.a,!1).c8(!0)
return null},
$S:0}
A.bnz.prototype={
$0(){var w=this.a.aw(0,$.r3().ghQ(),x.V),v=E.aHZ()
w.uu(0,v)
return v},
$S:0}
A.bnA.prototype={
$0(){var w=this.a.aw(0,$.r3().ghQ(),x.V),v=new B.aW(Date.now(),0,!1),u=new E.m0(B.bv(B.aV(v),1,1,0,0,0,0),v)
w.uu(0,u)
return u},
$S:0}
A.bnB.prototype={
$0(){return this.a.Jo(this.b,this.c)},
$S:0}
A.bny.prototype={
$2(d,e){return new B.p5(B.W(d).aRU(B.W(d).ax.aSM(C.h,C.n)),e,null)},
$S:1034}
A.buq.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cA(),p=A.Pl(!1,C.lw,"Umsatz 7 %",q.a4(r.a),u),o=A.Pl(!1,C.lw,"Umsatz 19 %",q.a4(r.b),u),n=A.Pl(!0,D.ack,"Umsatz netto",q.a4(r.c),u),m=r.d
m=A.Pl(!1,D.acj,"Aufwand",E.bGs(m,E.bzw(t,"",m)),E.bRi(t,E.bzw(t,"",m)))
w=r.e
v=q.a4(w)
return E.aKs(1.7,B.b([p,o,n,m,A.Pl(!0,C.ls,"Ergebnis",v,w<0?C.Q:C.am),A.Pl(!1,C.fz,"USt-Saldo",q.a4(r.f-r.r),u)],x.p),s,12,12,C.iw,!0)},
$S:142}
A.bur.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dC(B.dy(new A.bup(this.b),null,w),w)},
$S:0}
A.bup.prototype={
$1(d){return new A.vp(this.a.a,null)},
$S:z+6}
A.aN3.prototype={
$0(){return D.axw},
$S:88}
A.aN2.prototype={
$2(d,e){var w=null
return B.b5(C.Q,B.d("KPIs konnten nicht geladen werden: "+B.f(d),w,w,w,w,B.t(C.h,13,C.j),w,w,w),C.fo,w,C.y,w,w,3)},
$S:168}
A.aN1.prototype={
$1(d){return new A.Jp(d,null)},
$S:z+20}
A.bjN.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cA(),i=j.a4(k.c),h=l.w,g=l.d,f=B.ak(g).i("ae<1,G>"),e=f.i("ax.E"),d=B.Q(new B.ae(g,new A.bjC(),f),e)
i=A.jW(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a4(r.b)
w=B.Q(new B.ae(g,new A.bjD(),f),e)
d=A.jW(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a4(k.e)
w=B.Q(new B.ae(g,new A.bjE(),f),e)
k=A.jW(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aa(h.b,1)
v=B.Q(new B.ae(g,new A.bjF(),f),e)
w=A.jW(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aa(h.a,1)
u=B.Q(new B.ae(g,new A.bjG(),f),e)
v=A.jW(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aa(r.c,1)
t=B.Q(new B.ae(g,new A.bjH(),f),e)
u=A.jW(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aa(h.c,1)
s=B.Q(new B.ae(g,new A.bjI(),f),e)
t=A.jW(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a4(h.d)
s=B.Q(new B.ae(g,new A.bjJ(),f),e)
h=A.jW(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a4(l.r.d)
m=B.Q(new B.ae(g,new A.bjK(m),f),e)
m=A.jW(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a4(l)
l=B.Q(new B.ae(g,new A.bjL(l),f),e)
l=A.jW(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aa(j,1)
j=B.Q(new B.ae(g,new A.bjM(j),f),e)
return E.aKs(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jW(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iw,!0)},
$S:142}
A.bjC.prototype={
$1(d){return d.b},
$S:z+0}
A.bjD.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bjE.prototype={
$1(d){return d.d},
$S:z+0}
A.bjF.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjG.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bjH.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bjI.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjJ.prototype={
$1(d){return d.d},
$S:z+0}
A.bjK.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bjL.prototype={
$1(d){return this.a},
$S:z+0}
A.bjM.prototype={
$1(d){return this.a},
$S:z+0}
A.bjO.prototype={
$0(){return A.bGn(this.b,1.45,new A.Vj(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bjP.prototype={
$0(){return A.bGn(this.b,1.6,new A.VA(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.byv.prototype={
$1(d){var w=this,v=null,u=B.ar(16),t=x.p,s=B.b([B.a9(B.b([B.an(B.d(w.a,v,v,v,v,B.bD(C.h,18,C.r),v,v,v),1),B.eW(v,v,D.aeW,v,v,new A.byu(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.H(s,B.b([B.d(w.b,v,v,v,v,B.t(C.l,12,C.aH),v,v,v),C.E],t))
s.push(C.t)
s.push(B.bQ(new B.mT(w.c,w.d,v),v,17976931348623157e292))
return B.a6o(v,C.q,new B.ab(C.ap,B.a3(s,C.x,C.f,C.H),v),v,v,v,C.fv,C.vl,v,new B.d5(u,C.K),v)},
$S:1035}
A.byu.prototype={
$0(){return B.aI(this.a,!1).eV()},
$S:0}
A.bjQ.prototype={
$0(){var w=this.a,v=B.ag(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bGn(this.b,2.4,new A.a__(w.w,w.y,w.z,null),C.b.c6(u," \xb7 "),v)
return null},
$S:0}
A.bts.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.btt.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.btu.prototype={
$1(d){return A.aNe(null,1.4,null,C.Q,0.35,D.ak2,D.EG,null,!1,!1,!1,!1,D.Gi,!1,10,D.Z6,!0,C.lN,B.b([new A.eG(0,d),new A.eG(this.a,d)],x.U))},
$S:z+22}
A.b8Y.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b9_.prototype={
$2(d,e){var w=null
return B.d(this.a.aMz(d),w,w,w,w,B.t(C.l,10,C.C),w,w,w)},
$S:z+24}
A.b90.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vu
return new B.ab(C.ld,B.d(C.c.cR(this.a[v].a,5),w,w,w,w,B.t(C.l,9,C.C),w,w,w),w)},
$S:z+8}
A.b8Z.prototype={
$1(d){return D.aaE},
$S:z+9}
A.ba0.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba1.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba2.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.ba3.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vu
return new B.ab(C.ld,B.d(this.a[v],w,w,w,w,B.t(C.h,12,C.r),w,w,w),w)},
$S:z+8}
A.bkw.prototype={
$1(d){return d.d},
$S:z+12}
A.bkx.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bvL.prototype={
$1(d){return d.d},
$S:z+28}
A.bvM.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b6S.prototype={
$0(){return D.axE},
$S:88}
A.b6R.prototype={
$2(d,e){return new A.xf("Bilanzdaten nicht verf\xfcgbar: "+B.f(d),null)},
$S:z+29}
A.b6Q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.b5(m,B.a3(B.b([B.d("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.t(C.h,14,C.C),m,m,m),C.E,B.d("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.t(C.l,12.5,C.j),m,m,m),C.t,B.ji(C.c8,B.b([B.ev(C.FI,D.aMq,new A.b6K(w,v),m),B.ev(D.aet,D.aL8,new A.b6L(w,v),m)],u),C.d3,8,8)],u),C.x,C.f,C.i),C.a5,m,C.y,m,m,3)}w=new A.b6T(d)
t=C.b.f1(n.a.e.d,0,new A.b6M())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jA(new A.b6N(new A.b6U(w),r,w,s))
v=J.S(d)
u=B.f(v.h(d,"as_of"))
v=J.e(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a3(B.b([w,C.E,B.a9(B.b([B.an(B.d("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.t(C.l,11,C.j),m,m,m),1),B.mz(D.afU,D.aLy,new A.b6O(q,p),m),B.mz(D.afq,D.aLg,new A.b6P(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.ab,C.f,C.i)},
$S:225}
A.b6K.prototype={
$0(){return A.axL(this.a,this.b,null)},
$S:0}
A.b6L.prototype={
$0(){return A.axI(this.a,this.b)},
$S:0}
A.b6T.prototype={
$1(d){var w=B.aY(J.R(this.a,d))
return w==null?null:w},
$S:1036}
A.b6U.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aa(v,1)
w=B.ag(w,".",",")+" %"}return w},
$S:33}
A.b6M.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b6N.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jW(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ig,o.$1("liquidity1_pct")),m=A.jW(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ig,o.$1("liquidity2_pct")),l=A.jW(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ig,o.$1("liquidity3_pct"))
o=A.jW(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ig,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aa(w,1)
w=B.ag(w,".",",")+" %"}w=A.jW(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ig,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cA()
v=u.a4(v)
return E.aKs(p,B.b([n,m,l,o,w,A.jW(s,s,!1,"Bilanzsumme",!1,"EK "+u.a4(t.d),s,s,s,C.ig,v)],x.p),q,12,12,C.iw,!0)},
$S:142}
A.b6O.prototype={
$0(){return A.axI(this.a,this.b)},
$S:0}
A.b6P.prototype={
$0(){return A.axL(this.a,this.b,this.c)},
$S:0}
A.byt.prototype={
$1(d){return new A.BO(this.a,new A.bys(this.b),this.c,null)},
$S:z+30}
A.bys.prototype={
$0(){var w=this.a,v=$.bCi()
if(w.e==null)B.U(B.a0(y.b))
w.gcg().c_(v)},
$S:0}
A.b6E.prototype={
$0(){},
$S:0}
A.b6F.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b6G.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b6I.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.o_(u.b,B.bv(2024,1,1,0,0,0,0),null,r,new B.aW(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.G(new A.b6H(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b6H.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b6J.prototype={
$0(){return B.aI(this.a,!1).eV()},
$S:0}
A.b6V.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b6W.prototype={
$1(d){return new A.ya(x.B.a(d),this.a.a.r)},
$S:z+34}
A.aAs.prototype={
$1(d){return d.e},
$S:z+35}
A.aAt.prototype={
$2(d,e){return d+e},
$S:49}
A.aAv.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.aAx.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.aAy.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.af0(v.d,v.e)},
$S:0}
A.aAa.prototype={
$1(d){return 0},
$S:1037}
A.aA9.prototype={
$2(d,e){return B.f0(C.c0,this.a.amN(e),C.o,C.bo,null)},
$S:1038}
A.b1_.prototype={
$1(d){return d.a},
$S:z+39}
A.b10.prototype={
$1(d){return d.b},
$S:z+40}
A.b11.prototype={
$1(d){return new A.k2(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b12.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.n2||v===D.dV))t=1-t
return new A.k2(d,t*w.d)},
$S:z+42}
A.b13.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goH(),p=d.a
r.goH()
r=$.lM()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aa(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aa(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aa(v/1000,1)
t="K"}else{u=C.d.aa(v,r.akM(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.oa(d,q.c.b.$2(p,new A.tX(u+t,s.e)))},
$S:z+43}
A.aXe.prototype={
$1(d){this.a.la(new A.a7b(d))},
$S:170}
A.aXf.prototype={
$1(d){this.a.la(new A.a7c(d))},
$S:44}
A.aXg.prototype={
$1(d){this.a.la(new A.a7d(d))},
$S:30}
A.aXh.prototype={
$0(){this.a.la(D.a2L)},
$S:0}
A.aXi.prototype={
$1(d){this.a.la(new A.Oa())},
$S:48}
A.aXj.prototype={
$1(d){this.a.la(new A.a7g(d))},
$S:45}
A.aXk.prototype={
$0(){this.a.la(D.a2M)},
$S:0}
A.aXl.prototype={
$1(d){this.a.la(new A.Od(d))},
$S:91}
A.aXm.prototype={
$1(d){this.a.la(new A.a7a(d))},
$S:173}
A.aXn.prototype={
$1(d){this.a.la(new A.a79(d))},
$S:174}
A.aXo.prototype={
$1(d){return this.a.la(new A.O8(d))},
$S:175}
A.aXp.prototype={
$1(d){return this.a.la(new A.a7e(d))},
$S:67}
A.aXq.prototype={
$1(d){return this.a.la(new A.Ob(d))},
$S:60}
A.bk1.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aSs(w==null?B.b([],x.t):w)},
$S:z+45}
A.bk_.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.bk0.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fX(w,new A.bjZ())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.Hz(w))},
$S:0}
A.bjZ.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.bk2.prototype={
$1(d){return new A.zS(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aNf.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.bze.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bLe(t?A.bG7(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tZ(w,new A.z3(!0,A.bH_(),new A.bzd(v)))},
$S:z+49}
A.bzd.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c_f(A.bG7(d,e,f),w,A.c8f(d,e,f))},
$S:z+50}
A.bzb.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j9(v,v,u==null?D.dy:u,v,v,v,v,v,v,v,v,14,v,v,C.C,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rV(C.d.j(d.b),w)},
$S:z+51}
A.aNh.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aNi.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.aNm.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+80}
A.aNk.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aNl.prototype={
$0(){this.a.af0(this.b,this.c)},
$S:0}
A.aNn.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.aAl.prototype={
$1(d){return d.gdu(0)},
$S:z+54}
A.aAm.prototype={
$2(d,e){return d+e},
$S:49}
A.aAp.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.ak(v).i("j1<1>")).aD(0,new A.aAq(w,this.a/(u+1),this.c))},
$S:0}
A.aAq.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.aAn.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.aAo.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aKr.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aDF.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.M_.prototype
w.a0T=w.ih
w.an5=w.aU9
w.an6=w.aeU
w=A.US.prototype
w.apI=w.l
w=A.M8.prototype
w.a0U=w.ih
w=A.H7.prototype
w.a1D=w.ZO})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cbS","c_b",56)
var q
v(q=A.UU.prototype,"gaGj","aGk",31)
v(q,"gaFg","IE",10)
v(q,"gaG2","IP",10)
u(A.UV.prototype,"gatL","atM",33)
t(A,"caE",3,null,["$3"],["bXt"],57,0)
t(A,"caF",3,null,["$3"],["bXu"],58,0)
t(A,"caG",3,null,["$3"],["bXv"],59,0)
t(A,"caI",4,null,["$4"],["cbv"],60,0)
w(A,"caH","cbu",61)
s(A,"bGr","cbw",62)
t(A,"caz",3,null,["$3"],["c_g"],63,0)
w(A,"a1f","cdW",64)
w(A,"axO","cbz",9)
t(A,"caB",3,null,["$3"],["c02"],65,0)
t(A,"caD",3,null,["$3"],["c5k"],66,0)
t(A,"caA",3,null,["$3"],["c01"],67,0)
t(A,"caC",3,null,["$3"],["c5j"],68,0)
w(A,"cld","c00",69)
w(A,"cle","c5i",70)
r(A.ZO.prototype,"ga5o","azy",38)
u(A.Xw.prototype,"gaAP","aAQ",44)
t(A,"ccL",3,null,["$3"],["c0u"],71,0)
t(A,"ccK",3,null,["$3"],["bXw"],72,0)
w(A,"ccO","cdX",3)
t(A,"bRY",4,null,["$5$size","$4"],["bQl",function(d,e,f,g){return A.bQl(d,e,f,g,null)}],73,0)
s(A,"bH_","cdV",74)
s(A,"bRZ","cal",75)
s(A,"bS1","cbC",76)
s(A,"bS0","cby",5)
s(A,"bS_","cbx",5)
w(A,"ccN","bRz",78)
w(A,"ccM","bRy",79)
t(A,"a1m",3,null,["$3"],["ccJ"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.A,[A.a8K,A.amG,A.xb,A.Ju,A.ajI,A.xk,A.aig,A.anT,A.K0,A.Kq,A.aie,A.J4,A.Jp,A.an9,A.aow,A.Wa,A.a__,A.Vj,A.VA,A.ap2,A.al2,A.CU,A.av3,A.xf,A.M0,A.Ba])
u(B.C,[A.vq,A.F2,A.bo,A.ajo,A.aje,A.ajg,A.ajh,A.aj6,A.amU,A.ajk,A.aji,A.aAH,A.av7,A.aAu,A.ajf,A.M8,A.a7O,A.tX,A.ats,A.atr,A.aj5,A.amT,A.eG,A.amQ,A.amS,A.aru,A.anK,A.avT,A.amR,A.amo,A.amP,A.aA8,A.bjW,A.aAb,A.aj2,A.oa,A.amM,A.amN,A.wd,A.hA,A.aoG,A.aoJ,A.ajb,A.ajq,A.ajc,A.amO,A.aoM,A.aoK,A.av6,A.atq,A.aNg,A.aoI,A.vW,A.a3m,A.aoT,A.a3w,A.b4v])
u(B.vm,[A.pU,A.os,A.qD,A.w_,A.wY,A.aD2,A.aEd,A.ot,A.Ds,A.ov])
u(B.of,[A.aHV,A.aHW,A.aHX,A.aHY,A.aIg,A.bzq,A.bzr,A.bBn,A.bzs,A.bzo,A.bzp,A.bzn,A.bfR,A.bfT,A.bfO,A.bkc,A.bke,A.bkg,A.bki,A.aI4,A.aI3,A.aIb,A.aI2,A.bup,A.aN1,A.bjC,A.bjD,A.bjE,A.bjF,A.bjG,A.bjH,A.bjI,A.bjJ,A.bjK,A.bjL,A.bjM,A.byv,A.btu,A.b8Z,A.ba0,A.ba1,A.bkw,A.bvL,A.b6Q,A.b6T,A.b6U,A.byt,A.b6W,A.aAs,A.aAv,A.aAa,A.b1_,A.b10,A.b11,A.b12,A.b13,A.aXe,A.aXf,A.aXg,A.aXi,A.aXj,A.aXl,A.aXm,A.aXn,A.aXo,A.aXp,A.aXq,A.bk1,A.bk2,A.aNf,A.bze,A.bzd,A.bzb,A.aNh,A.aNi,A.aAl,A.aDF])
t(A.z_,B.fP)
u(B.yr,[A.aHU,A.aHT,A.bfW,A.bfQ,A.bfS,A.bfP,A.bfV,A.bfK,A.bfL,A.bfM,A.bfN,A.aIe,A.aI5,A.aI6,A.aI7,A.aI8,A.aI9,A.aIa,A.aId,A.aI0,A.aI1,A.bnz,A.bnA,A.bnB,A.bur,A.aN3,A.bjO,A.bjP,A.byu,A.bjQ,A.b6S,A.b6K,A.b6L,A.b6O,A.b6P,A.bys,A.b6E,A.b6F,A.b6G,A.b6I,A.b6H,A.b6J,A.b6V,A.aAy,A.aXh,A.aXk,A.bk_,A.bk0,A.aNk,A.aNl,A.aAp])
t(A.vp,B.b7)
u(B.J3,[A.xh,A.aAj,A.afI,A.DK,A.aH9,A.aN4,A.OD])
t(A.amH,B.vd)
u(B.ys,[A.bfU,A.bkd,A.bkf,A.bkh,A.aIc,A.bny,A.buq,A.aN2,A.bjN,A.bts,A.btt,A.b8Y,A.b9_,A.b90,A.ba2,A.ba3,A.bkx,A.bvM,A.b6R,A.b6M,A.b6N,A.aAt,A.aAx,A.aA9,A.bjZ,A.aNm,A.aNn,A.aAm,A.aAq,A.aAn,A.aAo,A.aKr])
u(B.yz,[A.z0,A.aqj,A.a8L,A.aja])
u(B.H,[A.BO,A.SQ])
u(B.Y,[A.UU,A.ZO])
u(B.Fu,[A.M4,A.Py])
u(B.uX,[A.UV,A.Xw])
t(A.a2V,A.ajo)
t(A.aj1,A.a2V)
t(A.a2F,A.aj1)
u(A.a2F,[A.ajd,A.aoH])
t(A.ob,A.ajd)
t(A.fU,A.aje)
t(A.iv,A.ajg)
t(A.mU,A.ajh)
t(A.a2M,A.aj6)
t(A.Oe,A.amU)
u(A.Oe,[A.ajj,A.aoL])
t(A.a2R,A.ajj)
t(A.a2S,A.ajk)
t(A.DL,A.aji)
u(A.aAH,[A.M5,A.PA])
t(A.afK,A.av7)
t(A.ajl,A.afK)
t(A.a2T,A.ajl)
u(B.b8,[A.ya,A.zS])
t(A.v2,A.ajf)
t(A.M_,A.M8)
u(A.M_,[A.aAw,A.aNj])
u(B.Pt,[A.a2P,A.a8X])
u(B.L,[A.H7,A.aj3])
u(A.H7,[A.acR,A.ad3])
t(A.qt,A.ats)
t(A.aei,A.atr)
t(A.px,A.aj5)
t(A.vs,A.amT)
t(A.z4,A.amQ)
t(A.pV,A.amS)
t(A.Ro,A.aru)
t(A.nf,A.anK)
t(A.nE,A.avT)
u(A.pV,[A.anJ,A.avS])
t(A.l1,A.anJ)
t(A.lu,A.avS)
t(A.a78,A.amR)
u(A.a78,[A.anI,A.avR])
t(A.a7Z,A.anI)
t(A.ag7,A.avR)
t(A.NZ,A.amo)
t(A.vr,A.amP)
t(A.O7,A.vr)
t(A.aej,B.hf)
t(A.aj4,A.aj3)
t(A.US,A.aj4)
t(A.a2G,A.US)
t(A.k2,A.aj2)
t(A.a75,A.amM)
t(A.a77,A.amN)
u(A.hA,[A.a7b,A.a7c,A.a7d,A.O9,A.Oa,A.a7g,A.Oc,A.Od,A.a7a,A.a79,A.O8,A.a7e,A.a7f,A.Ob])
t(A.q8,A.aoH)
t(A.ei,A.aoG)
t(A.Pz,A.aoJ)
t(A.a2O,A.ajb)
t(A.mV,A.ajq)
t(A.M3,A.ajc)
t(A.z3,A.amO)
t(A.FF,A.aoL)
t(A.a8Y,A.aoM)
t(A.aoF,A.eG)
t(A.ni,A.aoF)
t(A.qB,A.ni)
t(A.rV,A.aoK)
t(A.tZ,A.av6)
t(A.Hz,A.atq)
t(A.zT,A.aoI)
t(A.zX,A.aoT)
w(A.aj6,A.bo)
w(A.ajd,A.bo)
w(A.aje,A.bo)
w(A.ajg,A.bo)
w(A.ajh,A.bo)
w(A.aji,A.bo)
w(A.ajj,A.bo)
w(A.ajk,A.bo)
w(A.ajl,A.bo)
w(A.ajf,A.bo)
w(A.aj1,A.bo)
w(A.aj5,A.bo)
w(A.amo,A.bo)
w(A.amP,A.bo)
w(A.amQ,A.bo)
w(A.amS,A.bo)
w(A.amT,A.bo)
w(A.anJ,A.bo)
w(A.anI,A.bo)
w(A.anK,A.bo)
w(A.aru,A.bo)
w(A.atr,A.bo)
w(A.ats,A.bo)
w(A.av7,A.bo)
w(A.avS,A.bo)
w(A.avR,A.bo)
w(A.avT,A.bo)
w(A.aj2,A.bo)
v(A.aj3,B.aJ)
w(A.aj4,B.ed)
v(A.US,B.a67)
w(A.ajo,A.bo)
w(A.amM,A.bo)
w(A.amN,A.bo)
w(A.amU,A.bo)
w(A.ajb,A.bo)
w(A.ajc,A.bo)
w(A.ajq,A.bo)
w(A.amO,A.bo)
w(A.amR,A.bo)
w(A.aoF,A.bo)
w(A.aoG,A.bo)
w(A.aoH,A.bo)
w(A.aoJ,A.bo)
w(A.aoK,A.bo)
w(A.aoL,A.bo)
w(A.aoM,A.bo)
w(A.atq,A.bo)
w(A.av6,A.bo)
w(A.aoI,A.bo)
w(A.aoT,A.bo)})()
B.bw_(b.typeUniverse,JSON.parse('{"a8K":{"A":[],"c":[]},"F2":{"aI_":[]},"z_":{"fP":["bl<~>"],"fP.T":"bl<~>"},"vp":{"b7":[],"H":[],"c":[]},"Ju":{"A":[],"c":[]},"xk":{"A":[],"c":[]},"amH":{"Y":["vp"]},"amG":{"A":[],"c":[]},"xb":{"A":[],"c":[]},"ajI":{"A":[],"c":[]},"Kq":{"A":[],"c":[]},"J4":{"A":[],"c":[]},"z0":{"b7":[],"H":[],"c":[]},"aig":{"A":[],"c":[]},"anT":{"A":[],"c":[]},"aqj":{"b7":[],"H":[],"c":[]},"K0":{"A":[],"c":[]},"aie":{"A":[],"c":[]},"Jp":{"A":[],"c":[]},"xf":{"A":[],"c":[]},"BO":{"H":[],"c":[]},"a8L":{"b7":[],"H":[],"c":[]},"an9":{"A":[],"c":[]},"aow":{"A":[],"c":[]},"Wa":{"A":[],"c":[]},"a__":{"A":[],"c":[]},"Vj":{"A":[],"c":[]},"VA":{"A":[],"c":[]},"ap2":{"A":[],"c":[]},"al2":{"A":[],"c":[]},"CU":{"A":[],"c":[]},"av3":{"A":[],"c":[]},"aja":{"b7":[],"H":[],"c":[]},"UU":{"Y":["BO"]},"M4":{"H":[],"c":[]},"UV":{"Y":["M4"]},"ob":{"bo":[]},"fU":{"bo":[]},"iv":{"bo":[]},"mU":{"bo":[]},"DL":{"bo":[]},"ya":{"b8":["ob"],"bd":["ob"],"bd.T":"ob","b8.T":"ob"},"a2M":{"bo":[]},"a2R":{"bo":[]},"a2S":{"bo":[]},"a2T":{"bo":[]},"v2":{"bo":[]},"a2P":{"b0":[],"c":[]},"acR":{"L":[],"M":[],"jD":[],"b_":[]},"pV":{"bo":[]},"nf":{"bo":[]},"nE":{"bo":[]},"l1":{"bo":[]},"lu":{"bo":[]},"vr":{"bo":[]},"a2F":{"bo":[]},"qt":{"bo":[]},"aei":{"bo":[]},"px":{"bo":[]},"vs":{"bo":[]},"z4":{"bo":[]},"afK":{"bo":[]},"Ro":{"bo":[]},"a7Z":{"bo":[]},"ag7":{"bo":[]},"NZ":{"bo":[]},"O7":{"bo":[]},"M0":{"A":[],"c":[]},"SQ":{"H":[],"c":[]},"ZO":{"Y":["SQ"]},"k2":{"bo":[]},"aej":{"hf":[],"b0":[],"c":[]},"a2G":{"ed":["L","hB"],"L":[],"aJ":["L","hB"],"M":[],"b_":[],"aJ.1":"hB","ed.1":"hB","aJ.0":"L"},"Ba":{"A":[],"c":[]},"a2V":{"bo":[]},"a75":{"bo":[]},"Oe":{"bo":[]},"a77":{"bo":[]},"a7b":{"hA":[]},"a7c":{"hA":[]},"a7d":{"hA":[]},"O9":{"hA":[]},"Oa":{"hA":[]},"a7g":{"hA":[]},"Oc":{"hA":[]},"Od":{"hA":[]},"a7a":{"hA":[]},"a79":{"hA":[]},"O8":{"hA":[]},"a7e":{"hA":[]},"a7f":{"hA":[]},"Ob":{"hA":[]},"H7":{"L":[],"M":[],"jD":[],"b_":[]},"Py":{"H":[],"c":[]},"Xw":{"Y":["Py"]},"q8":{"bo":[]},"ei":{"bo":[]},"mV":{"bo":[]},"ni":{"eG":[],"bo":[]},"qB":{"ni":[],"eG":[],"bo":[]},"rV":{"bo":[]},"tZ":{"bo":[]},"Hz":{"bo":[]},"zS":{"b8":["q8"],"bd":["q8"],"bd.T":"q8","b8.T":"q8"},"Pz":{"bo":[]},"a2O":{"bo":[]},"M3":{"bo":[]},"z3":{"bo":[]},"a78":{"bo":[]},"FF":{"bo":[]},"a8Y":{"bo":[]},"zT":{"bo":[]},"a8X":{"b0":[],"c":[]},"ad3":{"L":[],"M":[],"jD":[],"b_":[]},"zX":{"bo":[]}}'))
B.bPN(b.typeUniverse,JSON.parse('{"M_":1,"Oe":1,"M8":1,"H7":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ay
return{_:w("Ds"),e:w("bl<os>"),cn:w("bl<ot>"),aN:w("bl<ov>"),fM:w("bl<a6<i,@>?>"),c:w("bl<~>"),W:w("k2"),B:w("ob"),dB:w("fU"),T:w("v2"),fj:w("iv"),G:w("mU"),bO:w("mV"),k:w("aw"),cX:w("a3w<G>"),dO:w("v9"),R:w("a8<i,@>"),j:w("hw"),bz:w("lW<aW>"),f0:w("ol"),E:w("bo"),F:w("z_"),aI:w("pU"),m:w("os"),X:w("ot"),P:w("m0"),D:w("vq"),a:w("aI_"),d:w("ov"),cw:w("eG"),L:w("hB"),o:w("dG<w,F>"),cm:w("l1"),dv:w("nf"),M:w("E<oa>"),I:w("E<bJQ>"),O:w("E<fU>"),Y:w("E<iv>"),U:w("E<eG>"),K:w("E<a7O>"),u:w("E<ei>"),bC:w("E<vW>"),aA:w("E<v<eG>>"),v:w("E<ek>"),r:w("E<Hz>"),s:w("E<i>"),eg:w("E<tU>"),df:w("E<qB>"),p:w("E<c>"),n:w("E<G>"),t:w("E<w>"),eF:w("bp<Y<H>>"),Z:w("ni"),cz:w("ei"),hf:w("q8"),dj:w("zT"),fT:w("rV"),c_:w("iA<pi<bl<~>>>"),x:w("zX<fU>"),y:w("zX<ei>"),J:w("v<w>"),ef:w("w_"),b:w("a6<i,@>"),f:w("a6<@,@>"),gj:w("ae<G,G>"),w:w("kh"),aU:w("C"),Q:w("wd<ob>"),C:w("wd<q8>"),dc:w("ek"),eo:w("qj"),gJ:w("qk"),V:w("kt<m0>"),N:w("i"),A:w("nz"),bP:w("bg"),er:w("tU"),fB:w("wY"),dw:w("qB"),bY:w("tZ"),cZ:w("qD"),gc:w("je"),es:w("lu"),bN:w("nE"),l:w("c"),q:w("xA"),g4:w("ip<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("w"),bn:w("ya?"),f3:w("zS?"),g:w("v<@>?"),h:w("a6<i,@>?"),fF:w("a6<@,@>?"),cK:w("C?"),aD:w("je?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BE=new B.lP(C.n,B.ay("lP<F>"))
D.BL=new A.DK(0,"left")
D.n2=new A.DK(1,"top")
D.BM=new A.DK(2,"right")
D.dV=new A.DK(3,"bottom")
D.aBM=new A.qt(!1,A.bGr(),22,null)
D.kI=new A.px(16,null,D.aBM,!0)
D.aaF=new A.pV(C.J,null,2,null)
D.ws=new A.M3(!1,D.aaF,A.ccO(),!0)
D.a0A=new A.aAj(3,"spaceEvenly")
D.a0K=new B.yf(6,"dstIn")
D.Yp=new B.b3(3,3)
D.BP=new B.d9(D.Yp,D.Yp,C.a9,C.a9)
D.a0W=new B.bn(C.J,0,C.V,-1)
D.Co=new A.a77()
D.a2L=new A.O9()
D.a2M=new A.Oc()
D.aV9=new A.aei()
D.a8E=new B.bz(8e6)
D.ap5=w([],B.ay("E<l1>"))
D.ap6=w([],B.ay("E<lu>"))
D.EC=new A.NZ(D.ap5,D.ap6,!0)
D.aai=new B.dF("Zeitraum",!1,null)
D.aao=new B.dF("Konten (SKR 03)",!1,null)
D.y8=new A.aH9(0,"center")
D.aaz=new A.vp(null,null)
D.aVm=new A.z3(!0,A.bH_(),A.bRY())
D.EG=new A.z3(!1,A.bH_(),A.bRY())
D.EH=new A.z4(!1,!0,null,A.axO(),A.a1f(),!0,null,A.axO(),A.a1f())
D.aVn=new A.z4(!0,!0,null,A.axO(),A.a1f(),!0,null,A.axO(),A.a1f())
D.a59=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.m)
D.a4U=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.m)
D.a5j=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.m)
D.a5d=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.m)
D.a4A=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.m)
D.a4z=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.a5I=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.m)
D.a52=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.m)
D.a5L=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.m)
D.a5F=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.m)
D.avt=new B.dG([50,D.a59,100,D.a4U,200,D.a5j,300,D.a5d,400,D.a4A,500,D.a4z,600,D.a5I,700,D.a52,800,D.a5L,900,D.a5F],x.o)
D.dy=new B.t1(D.avt,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.al5=w([8,4],x.t)
D.aaD=new A.pV(D.dy,null,0.4,D.al5)
D.aaE=new A.pV(C.a7,null,0.5,null)
D.fZ=new A.eG(0/0,0/0)
D.aBO=new A.qt(!0,A.bGr(),44,null)
D.n3=new A.px(16,null,D.aBO,!0)
D.aBN=new A.qt(!0,A.bGr(),30,null)
D.n4=new A.px(16,null,D.aBN,!0)
D.aaG=new A.vs(!1,D.n3,D.n4,D.n3,D.n4)
D.aVo=new A.vs(!0,D.n3,D.n4,D.n3,D.n4)
D.aLH=new B.a7("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.abe=new B.e1(D.aLH,null,null)
D.EP=new A.OD(0,"left")
D.abo=new A.OD(1,"center")
D.EQ=new A.OD(2,"right")
D.abs=new B.a5(57495,"MaterialIcons",null,!1)
D.abG=new B.a5(58040,"MaterialIcons",null,!0)
D.yp=new B.a5(58927,"MaterialIcons",null,!1)
D.acj=new B.a5(59005,"MaterialIcons",null,!0)
D.ack=new B.a5(59007,"MaterialIcons",null,!0)
D.adr=new B.a5(62589,"MaterialIcons",null,!1)
D.acE=new B.a5(61349,"MaterialIcons",null,!1)
D.aeq=new B.as(D.acE,20,C.h,null,null)
D.aes=new B.as(F.Fm,18,null,null,null)
D.aet=new B.as(D.yp,18,null,null,null)
D.aeQ=new B.as(C.oj,14,C.Q,null,null)
D.aeW=new B.as(C.i9,null,C.h,null,null)
D.aeX=new B.as(C.jv,null,C.l,null,null)
D.afq=new B.as(C.lt,16,null,null,null)
D.afx=new B.as(C.yA,16,null,null,null)
D.afC=new B.as(F.lr,null,C.Q,null,null)
D.afN=new B.as(F.Fx,16,null,null,null)
D.afU=new B.as(D.yp,16,null,null,null)
D.aio=new A.a8L(null)
D.aVt=new A.aN4(0,"horizontal")
D.yL=new A.zT(0,0,0,0,!1)
D.Gi=new A.Pz(0.5)
D.Cu=new A.a8Y()
D.aiB=new A.FF(D.Cu,A.bS1(),10,A.bRZ(),!0,A.bS0(),A.bS_(),!1,null,null,null)
D.aVv=new A.FF(D.Cu,A.bS1(),10,A.bRZ(),!0,A.bS0(),A.bS_(),!0,null,null,null)
D.ak2=w([4,3],x.t)
D.azU=new B.aH("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.azH=new B.aH("receivables","Forderungen (kurzfristig)")
D.azu=new B.aH("inventory_value","Vorr\xe4te (Warenbestand)")
D.azs=new B.aH("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.azf=new B.aH("fixed_assets","Anlageverm\xf6gen")
D.azm=new B.aH("current_liabilities","Kurzfristige Verbindlichkeiten")
D.azO=new B.aH("long_term_liabilities","Langfristige Verbindlichkeiten")
D.azG=new B.aH("equity","Eigenkapital")
D.q3=w([D.azU,D.azH,D.azu,D.azs,D.azf,D.azm,D.azO,D.azG],B.ay("E<+(i,i)>"))
D.aVy=w([],x.M)
D.aoT=w([],x.O)
D.aoU=w([],x.Y)
D.aoV=w([],B.ay("E<mU>"))
D.aoW=w([],B.ay("E<mV>"))
D.aVz=w([],x.U)
D.aVA=w([],x.u)
D.aoX=w([],x.r)
D.aw8={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.U3={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zr=new B.a8(D.U3,[0,0,0,0,0,0,0,C.b_],B.ay("a8<i,C>"))
D.aw5={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.avn=new B.a8(D.aw5,[0,0,0,0],B.ay("a8<i,w>"))
D.awn={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.asX=new B.a8(D.awn,[0,0,0,0,null,null,null,null],B.ay("a8<i,w?>"))
D.asQ=new B.a8(D.aw8,[D.zr,D.zr,D.zr,C.b_,C.b_,C.b_,D.avn,D.asX],x.R)
D.at9=new B.a8(D.U3,[0,0,0,0,0,0,0,C.bU],x.R)
D.aw9={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.atb=new B.a8(D.aw9,[8500,1200,3400,300,22e3,4200,9000,22200],B.ay("a8<i,G>"))
D.awx={total:0,rows:1}
D.ate=new B.a8(D.awx,[0,C.bU],x.R)
D.aw4={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.avo=new B.a8(D.aw4,[0,0,0,0,0,0,0,C.bU],x.R)
D.awB={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.avp=new B.a8(D.awB,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ay("a8<i,i>"))
D.a5R=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.m)
D.a5Z=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.m)
D.a4D=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.m)
D.a55=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.m)
D.a5f=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.m)
D.a6e=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a4o=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.m)
D.a57=new B.F(1,0,0.592156862745098,0.6549019607843137,C.m)
D.a5i=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.m)
D.a5G=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.m)
D.avu=new B.dG([50,D.a5R,100,D.a5Z,200,D.a4D,300,D.a55,400,D.a5f,500,D.a6e,600,D.a4o,700,D.a57,800,D.a5i,900,D.a5G],x.o)
D.TP=new B.t1(D.avu,1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a9w=new B.ai(32,32,32,32)
D.axw=new B.ab(D.a9w,C.bD,null)
D.axE=new B.ab(C.ap,C.bD,null)
D.ap7=w([],B.ay("E<nf>"))
D.ap8=w([],B.ay("E<nE>"))
D.Yr=new A.Ro(D.ap7,D.ap8)
D.aAI=new B.f_("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aAK=new B.f_("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aAP=new B.f_("Automaten-Business","Umsatz je Automat",null,null)
D.aAS=new B.f_("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aAU=new B.f_("Top","Meistverkaufte Produkte",null,null)
D.aAX=new B.f_("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aAY=new B.f_("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z6=new B.tD(C.M,C.v,0)
D.aJC=new B.a7("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aDz=new B.dl(D.aJC,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aMd=new B.a7('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aDC=new B.dl(D.aMd,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aJU=new B.a7("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aDD=new B.dl(D.aJU,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aM5=new B.a7("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aDF=new B.dl(D.aM5,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLu=new B.a7("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aDG=new B.dl(D.aLu,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLr=new B.a7("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aE7=new B.dl(D.aLr,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aVK=new B.V(!0,C.J,null,null,null,null,14,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJP=new B.a7("Demo",null,null,null,null,null,null,null,null,null)
D.aK6=new B.a7("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aL8=new B.a7("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aLg=new B.a7("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aLy=new B.a7("sevDesk",null,null,null,null,null,null,null,null,null)
D.aMq=new B.a7("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_o=new A.afI(0,"auto")
D.aN9=new A.afI(1,"top")
D.aRH=new A.xf("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aRI=new A.xf("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bm=new A.xh(0,"alle")
D.a_O=new A.xh(1,"aufwand")
D.a_P=new A.xh(2,"erloes")
D.a_Q=new A.xh(3,"privat")
D.aSD=new A.xk('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.l,C.jv,null)
D.adE=new B.a5(984570,"MaterialIcons",null,!1)
D.aSE=new A.xk("Keine Buchung passt zu dieser Auswahl.",C.l,D.adE,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"clH","bWf",()=>B.j3(new A.bzq(),x.D))
w($,"clI","a1O",()=>B.j3(new A.bzr(),x.a))
w($,"cmI","r3",()=>B.bF6(new A.bBn(),x.P))
w($,"clJ","bCk",()=>C.aK.$1$1(new A.bzs(),x.d))
w($,"clF","bCj",()=>C.aK.$1$1(new A.bzo(),x.m))
w($,"clG","bIJ",()=>C.aK.$1$1(new A.bzp(),x.X))
w($,"clE","bCi",()=>C.aK.$1$1(new A.bzn(),x.h))
w($,"clD","bCh",()=>B.b1Q(A.cbS(),x.F,x.c))
w($,"ceJ","bBP",()=>new A.aA8())
v($,"ci4","lM",()=>new A.b4v())})()};
(a=>{a["pt97fYku5oU8U29PzrImPw9yvWA="]=a.current})($__dart_deferred_initializers__);