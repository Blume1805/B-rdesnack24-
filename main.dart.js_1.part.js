((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Pn(d,e,f,g,h){return new A.a8L(f,g,d,h,e,null)},
a8L:function a8L(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vr:function vr(d){this.a=d},
cce(d){var w
if(x.f.b(d)){w=J.P(d,"error")
if(typeof w=="string"&&C.c.aq(w).length!==0)return C.c.aq(w)}if(typeof d=="string"&&C.c.aq(d).length!==0)return C.c.aq(d)
return null},
F3:function F3(d){this.a=d},
c_k(d){var w=J.S(d),v=B.aZ(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.b_
w=J.cU(w,new A.aHY(),x.aI)
w=B.R(w,w.$ti.i("ax.E"))
return new A.os(v,w)},
byG(d){var w
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
aHY:function aHY(){},
c_l(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.S(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.fG
w=x.f
v=x.N
u=x.z
t=A.aIi(B.cm(w.a(e.h(a0,"current")),v,u))
s=A.aIi(B.cm(w.a(e.h(a0,"prior_year")),v,u))
r=A.aIi(B.cm(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.b_
p=J.cU(p,new A.aHZ(),x.cZ)
p=B.R(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.b_
o=J.cU(o,new A.aI_(),x.ef)
o=B.R(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.b_
q=J.cU(q,new A.aI0(),x.fB)
q=B.R(q,q.$ti.i("ax.E"))
n=B.cm(w.a(e.h(a0,"customer")),v,u)
m=B.aZ(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.po(n.h(0,"app_gross"))
k=B.aZ(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.po(n.h(0,"avg_basket"))
u=B.cm(w.a(e.h(a0,"derived")),v,u)
v=A.po(u.h(0,"gross_margin_pct"))
e=A.po(u.h(0,"net_margin_pct"))
w=A.po(u.h(0,"ebitda_margin_pct"))
j=A.po(u.h(0,"cashflow_operating"))
i=A.byH(u.h(0,"revenue_growth_yoy_pct"))
h=A.byH(u.h(0,"revenue_growth_mom_pct"))
g=A.byH(u.h(0,"result_growth_yoy_pct"))
u=A.byH(u.h(0,"result_growth_mom_pct"))
f=B.aZ(J.P(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.ot(t,s,r,p,o,q,new A.aD5(m,l,k,n),new A.aEg(v,e,w,j,i,h,g,u),f)},
po(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fc(J.aj(d))
return w==null?0:w},
byH(d){if(d==null)return null
if(typeof d=="number")return d
return B.fc(J.aj(d))},
qD:function qD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
w0:function w0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wZ:function wZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD5:function aD5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEg:function aEg(d,e,f,g,h,i,j,k){var _=this
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
aHZ:function aHZ(){},
aI_:function aI_(){},
aI0:function aI0(){},
aIi(d){var w=J.S(d),v=A.uI(w.h(d,"revenue_net_7")),u=A.uI(w.h(d,"revenue_net_19")),t=A.uI(w.h(d,"revenue_net")),s=A.uI(w.h(d,"expense_net")),r=A.uI(w.h(d,"result_net")),q=A.uI(w.h(d,"vat_collected")),p=A.uI(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.b_
w=J.cU(w,new A.aIj(),x._)
w=B.R(w,w.$ti.i("ax.E"))
return new A.ov(v,u,t,s,r,q,p,w)},
uI(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fc(J.aj(d))
return w==null?0:w},
Dt:function Dt(d,e,f,g,h,i){var _=this
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
aIj:function aIj(){},
c_j(d){return new A.z1(d,new B.iA(x.c_),C.dV)},
bzw:function bzw(){},
bzx:function bzx(){},
bBu:function bBu(){},
bzy:function bzy(){},
bzu:function bzu(){},
bzv:function bzv(){},
bzt:function bzt(){},
z1:function z1(d,e,f){this.r=d
this.a=e
this.f=f},
aHX:function aHX(d,e,f){this.a=d
this.b=e
this.c=f},
aHW:function aHW(d,e,f){this.a=d
this.b=e
this.c=f},
vq:function vq(d,e){this.d=d
this.a=e},
xj:function xj(d,e){this.a=d
this.b=e},
amJ:function amJ(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bfZ:function bfZ(d){this.a=d},
bfU:function bfU(d){this.a=d},
bfT:function bfT(d,e){this.a=d
this.b=e},
bfV:function bfV(d){this.a=d},
bfS:function bfS(d){this.a=d},
bfY:function bfY(){},
bfX:function bfX(){},
bfW:function bfW(d){this.a=d},
bfR:function bfR(d){this.a=d},
amI:function amI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bfN:function bfN(d){this.a=d},
bfO:function bfO(d){this.a=d},
bfP:function bfP(d){this.a=d},
bfQ:function bfQ(d){this.a=d},
xd:function xd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jw:function Jw(d,e,f){this.c=d
this.d=e
this.a=f},
bkf:function bkf(){},
bkg:function bkg(){},
bkh:function bkh(){},
bki:function bki(){},
bkj:function bkj(){},
bkk:function bkk(){},
bkl:function bkl(){},
ajJ:function ajJ(d,e){this.c=d
this.a=e},
xm:function xm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c_m(){return new A.z2(null)},
Xc(d,e,f,g,h){return new A.anV(e,h,g,f,d,null)},
z2:function z2(d){this.a=d},
aIh:function aIh(d){this.a=d},
aI8:function aI8(d,e,f){this.a=d
this.b=e
this.c=f},
aI9:function aI9(d,e,f){this.a=d
this.b=e
this.c=f},
aIa:function aIa(d){this.a=d},
aI7:function aI7(){},
aIb:function aIb(d){this.a=d},
aIc:function aIc(d){this.a=d},
aI6:function aI6(){},
aId:function aId(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aIg:function aIg(){},
aIf:function aIf(){},
aIe:function aIe(){},
aI5:function aI5(d,e){this.a=d
this.b=e},
aI3:function aI3(d){this.a=d},
aI4:function aI4(d){this.a=d},
aih:function aih(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anV:function anV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aql:function aql(d,e){this.e=d
this.a=e},
bnC:function bnC(d){this.a=d},
bnD:function bnD(d){this.a=d},
bnE:function bnE(d,e,f){this.a=d
this.b=e
this.c=f},
bnB:function bnB(){},
K2:function K2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ks:function Ks(d,e){this.c=d
this.a=e},
buw:function buw(d){this.a=d},
bux:function bux(d,e){this.a=d
this.b=e},
buv:function buv(d){this.a=d},
aif:function aif(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
J5:function J5(d,e){this.c=d
this.a=e},
bGu(d,e,f,g,h){var w=null
return B.f4(w,w,!0,w,new A.byB(h,g,e,f),d,w,!0,!0,x.H)},
jW(d,e,f,g,h,i,j,k,l,m,n){return new A.aoy(g,n,i,e,d,m,f,k,l,j,null)},
axL(d,e){return A.ca_(d,e)},
ca_(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$axL=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.N(x.q).f
l.aG(D.aDE)
t=4
o=e.aw(0,$.bA(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fO("finance-balance-sync",B.B(n,n)),$async$axL)
case 7:r=g
q=B.cm(x.f.a(r.a),x.N,n)
l.N4()
if(J.e(J.P(q,"configured"),!1)){l.aG(D.aDI)
w=1
break}if(J.e(J.P(q,"ok"),!0)){o=$.bCp()
if(e.e==null)B.U(B.a0(y.b))
e.gcg().c0(o)
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Bilanz aus sevDesk \xfcbernommen ("+B.f(J.P(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}else{o=J.P(q,"error")
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Sync-Fehler: "+B.f(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a_(k)
l.N4()
l.aG(B.bO(null,null,null,null,null,C.o,null,B.d("Sync fehlgeschlagen: "+B.f(p),null,null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$axL,v)},
axO(d,e,f){var w=0,v=B.q(x.H)
var $async$axO=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.f4(null,null,!0,null,new A.byz(f,e,e.aw(0,$.bA(),x.A)),d,null,!0,!0,x.H),$async$axO)
case 2:return B.o(null,v)}})
return B.p($async$axO,v)},
a8M:function a8M(d){this.a=d},
aN6:function aN6(){},
aN5:function aN5(){},
aN4:function aN4(){},
Jq:function Jq(d,e){this.c=d
this.a=e},
bjQ:function bjQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjF:function bjF(){},
bjG:function bjG(){},
bjH:function bjH(){},
bjI:function bjI(){},
bjJ:function bjJ(){},
bjK:function bjK(){},
bjL:function bjL(){},
bjM:function bjM(){},
bjN:function bjN(d){this.a=d},
bjO:function bjO(d){this.a=d},
bjP:function bjP(d){this.a=d},
bjR:function bjR(d,e){this.a=d
this.b=e},
bjS:function bjS(d,e){this.a=d
this.b=e},
byB:function byB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
byA:function byA(d){this.a=d},
anb:function anb(d){this.a=d},
aoy:function aoy(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bjT:function bjT(d,e){this.a=d
this.b=e},
Wc:function Wc(d,e,f){this.c=d
this.d=e
this.a=f},
a_0:function a_0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
btv:function btv(){},
btw:function btw(){},
btx:function btx(d){this.a=d},
Vl:function Vl(d,e,f){this.c=d
this.d=e
this.a=f},
b90:function b90(){},
b92:function b92(d){this.a=d},
b93:function b93(d){this.a=d},
b91:function b91(){},
VC:function VC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba3:function ba3(){},
ba4:function ba4(){},
ba5:function ba5(){},
ba6:function ba6(d){this.a=d},
ap4:function ap4(d,e){this.c=d
this.a=e},
bkz:function bkz(){},
bkA:function bkA(){},
al3:function al3(d,e){this.c=d
this.a=e},
CV:function CV(d,e,f){this.c=d
this.d=e
this.a=f},
av6:function av6(d,e){this.c=d
this.a=e},
bvR:function bvR(){},
bvS:function bvS(){},
xh:function xh(d,e){this.c=d
this.a=e},
ajb:function ajb(d,e){this.e=d
this.a=e},
b6V:function b6V(){},
b6U:function b6U(){},
b6T:function b6T(d,e,f){this.a=d
this.b=e
this.c=f},
b6N:function b6N(d,e){this.a=d
this.b=e},
b6O:function b6O(d,e){this.a=d
this.b=e},
b6W:function b6W(d){this.a=d},
b6X:function b6X(d){this.a=d},
b6P:function b6P(){},
b6Q:function b6Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6R:function b6R(d,e){this.a=d
this.b=e},
b6S:function b6S(d,e,f){this.a=d
this.b=e
this.c=f},
byz:function byz(d,e,f){this.a=d
this.b=e
this.c=f},
byy:function byy(d){this.a=d},
BP:function BP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UW:function UW(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b6H:function b6H(){},
b6I:function b6I(d){this.a=d},
b6J:function b6J(d){this.a=d},
b6L:function b6L(d,e){this.a=d
this.b=e},
b6K:function b6K(d,e){this.a=d
this.b=e},
b6M:function b6M(d){this.a=d},
bo:function bo(){},
bK_(d){return new A.M6(d,C.ar,C.c2,null,null)},
M6:function M6(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UX:function UX(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c6$=g
_.c=_.a=null},
b6Y:function b6Y(d,e){this.a=d
this.b=e},
b6Z:function b6Z(d){this.a=d},
aAn(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.aoX:f,p=a0==null?16:a0,o=d==null?D.a0B:d,n=g==null,m=n?A.bCT(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yq:a3
n=n?A.bCT(r,r,r,r,r,r,r,r):g
w=j==null?D.EC:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.M:e
return new A.ob(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cp,s,w,i,n)},
aAu(d,e,f,g,h){var w=d==null?D.aoY:d,v=e==null?2:e,u=g==null?C.lN:g
return new A.fU(h,f===!0,w,v,u)},
bXB(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.aAu(A.kI(d.c,e.c,f,A.caN(),x.fj),B.am(d.d,e.d,f),!1,A.kI(d.e,e.e,f,A.a1n(),x.S),w)},
a2R(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TO
else w=h
v=m==null
u=v?8:m
t=$.lN()
s=t.aZb(f,v?8:m)
t=t.aZc(g,v?8:m)
v=d==null?A.bJY(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.aoZ:k)},
bXC(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.am(d.e,e.e,f),q=B.mW(d.f,e.f,f),p=A.kI(d.r,e.r,f,A.a1n(),x.S),o=B.c1(d.w,e.w,f),n=B.am(d.a,e.a,f),m=B.am(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.am(w.b,v.b,f)
t=B.am(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2R(A.bJY(v,u,null,!1,t),p,q,o,s,n,null,A.kI(d.y,e.y,f,A.caO(),x.G),m,r)},
bXD(d,e,f){var w,v,u=B.am(d.a,e.a,f)
u.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mU(u,w,v,B.c1(d.d,e.d,f))},
bJY(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dy
else w=d
return new A.a2N(g===!0,v,u,w,f)},
bCT(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2T(4,C.eQ,16,D.y9,0,120,A.caQ(),!1,!1,D.a_p,0,C.K,A.caP())
else w=k
v=j==null?C.lf:j
return new A.a2S(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
cbD(d,e,f,g){var w=null,v=B.j9(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.C,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DM(C.d.j(f.b),v)},
cbC(d){return A.aCu(D.dy,15)},
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
aAm:function aAm(d,e){this.a=d
this.b=e},
fU:function fU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aAv:function aAv(){},
aAw:function aAw(){},
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
a2N:function a2N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2S:function a2S(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
afJ:function afJ(d,e){this.a=d
this.b=e},
a2T:function a2T(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
DM:function DM(d,e){this.a=d
this.b=e},
M7:function M7(d){this.a=d},
a2U:function a2U(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
yc:function yc(d,e){this.a=d
this.b=e},
aj7:function aj7(){},
aje:function aje(){},
ajf:function ajf(){},
ajh:function ajh(){},
aji:function aji(){},
ajj:function ajj(){},
ajk:function ajk(){},
ajl:function ajl(){},
ajm:function ajm(){},
aAx:function aAx(d){this.a=d},
aAy:function aAy(){},
v3:function v3(d,e,f){this.a=d
this.b=e
this.c=f},
ajg:function ajg(){},
aAz:function aAz(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aAA:function aAA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAB:function aAB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7P:function a7P(d){this.b=d},
a2Q:function a2Q(d,e,f){this.d=d
this.e=e
this.a=f},
acS:function acS(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h0=g
_.B=h
_.a5=_.W=_.V=null
_.a_=i
_.bE=_.aJ=_.al=_.au=$
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
cbE(d,e){var w=null
return new A.SS(e.w,B.d(e.r,w,w,w,w,w,w,w,w),w)},
aAf(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.am(w.c,v.c,f)
u.toString
return new A.px(t,e.b,new A.qt(v.a,v.b,u,B.am(w.d,v.d,f)),!0)},
bLm(d,e,f){var w=A.aAf(d.b,e.b,f),v=A.aAf(d.d,e.d,f),u=A.aAf(d.e,e.e,f)
return new A.vt(e.a,w,A.aAf(d.c,e.c,f),v,u)},
c_o(d,e,f){var w,v
if(d.k(0,D.fZ))return e
if(e.k(0,D.fZ))return d
w=B.am(d.a,e.a,f)
w.toString
v=B.am(d.b,e.b,f)
v.toString
return new A.eG(w,v)},
bLk(d,e,f){return new A.z6(e.a,!0,B.am(d.c,e.c,f),e.d,e.e,e.f,B.am(d.r,e.r,f),e.w,e.x)},
ce3(d){return!0},
cbH(d){return D.aaE},
bLl(d,e,f,g){var w
if(d==null)w=f==null?C.J:null
else w=d
return new A.pV(w,f,g,e)},
bNj(d,e,f){var w,v=A.kI(d.a,e.a,f,A.caJ(),x.dv)
v.toString
w=A.kI(d.b,e.b,f,A.caL(),x.bN)
w.toString
return new A.Rq(v,w)},
c0a(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rH(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nf(t,w,v,u)},
c5s(d,e,f){var w,v,u,t=B.am(d.a,e.a,f)
t.toString
w=B.am(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rH(d.d,e.d,f)
if(v==null)v=u==null?C.q:null
return new A.nE(t,w,v,u)},
c09(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oo(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c07(B.bCL(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rH(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1n(),x.S)
if(u==null)u=v==null?C.J:null
return new A.l1(r,e.f,e.r,t,e.x,u,v,w,s)},
c5r(d,e,f){var w,v,u,t,s,r=B.am(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oo(w.b,v.b,f)
u.toString
t=B.cy(w.c,v.c,f)
t=A.c5p(B.bCL(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rH(d.b,e.b,f)
w=B.am(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a1n(),x.S)
if(u==null)u=v==null?C.J:null
return new A.lv(r,e.f,e.r,t,e.x,u,v,w,s)},
c07(d,e,f,g,h,i){return new A.a8_(f,!1,g,i,d,e)},
c08(d){return C.d.aa(d.e,1)},
c5p(d,e,f,g,h,i){return new A.ag8(f,!1,g,i,d,e)},
c5q(d){return C.d.aa(d.e,1)},
bLg(d,e,f){var w,v=A.kI(d.a,e.a,f,A.caI(),x.cm)
v.toString
w=A.kI(d.b,e.b,f,A.caK(),x.es)
w.toString
return new A.O0(v,w,!0)},
c_n(d,e,f){return new A.O9(d,e==null?4:e,f)},
a2G:function a2G(){},
DL:function DL(d,e){this.a=d
this.b=e},
tY:function tY(d,e){this.r=d
this.w=e},
qt:function qt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aej:function aej(){},
px:function px(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vt:function vt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eG:function eG(d,e){this.a=d
this.b=e},
z6:function z6(d,e,f,g,h,i,j,k,l){var _=this
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
afL:function afL(){},
Rq:function Rq(d,e){this.a=d
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
lv:function lv(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a8_:function a8_(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ag8:function ag8(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
O0:function O0(d,e,f){this.a=d
this.b=e
this.c=f},
vs:function vs(){},
O9:function O9(d,e,f){this.a=d
this.b=e
this.c=f},
aj2:function aj2(){},
aj6:function aj6(){},
amp:function amp(){},
amR:function amR(){},
amS:function amS(){},
amU:function amU(){},
amV:function amV(){},
anL:function anL(){},
anK:function anK(){},
anM:function anM(){},
arw:function arw(){},
att:function att(){},
atu:function atu(){},
ava:function ava(){},
avV:function avV(){},
avU:function avU(){},
avW:function avW(){},
aAb:function aAb(){},
M1:function M1(){},
M2:function M2(d,e,f){this.c=d
this.d=e
this.a=f},
aAd:function aAd(d){this.a=d},
aAc:function aAc(d){this.a=d},
SS:function SS(d,e,f){this.c=d
this.e=e
this.a=f},
ZP:function ZP(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c3Y(d,e,f){var w=B.ak(f),v=w.i("ae<1,k2>")
v=B.R(new B.ae(f,new A.b12(),v),v.i("ax.E"))
w=w.i("ae<1,c>")
w=B.R(new B.ae(f,new A.b13(),w),w.i("ax.E"))
return new A.aek(e,d,v,w,null)},
bXz(d,e,f){var w,v=null,u=B.aO(x.dO),t=J.a8C(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tV(v,C.a0,C.z,new B.kB(1),v,v,v,v,C.bB,v)
u=new A.a2H(f,d,e,u,t,!0,0,v,v,new B.bv(),B.aO(x.j))
u.bl()
return u},
aek:function aek(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b12:function b12(){},
b13:function b13(){},
a2H:function a2H(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a5=g
_.X7$=h
_.aV3$=i
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
bjZ:function bjZ(d,e){this.a=d
this.b=e},
aAe:function aAe(){},
k2:function k2(d,e){this.a=d
this.b=e},
oa:function oa(d,e){this.a=d
this.b=e},
aj3:function aj3(){},
aj4:function aj4(){},
aj5:function aj5(){},
UU:function UU(){},
Bc:function Bc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b14:function b14(d){this.a=d},
b15:function b15(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b16:function b16(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a77(d,e){var w=d==null?B.c5(C.J,1):d
return new A.a76(e!==!1,w)},
a2W:function a2W(){},
a76:function a76(d,e){this.a=d
this.b=e},
Og:function Og(){},
a78:function a78(){},
aAK:function aAK(){},
aHc:function aHc(d,e){this.a=d
this.b=e},
ajp:function ajp(){},
amO:function amO(){},
amP:function amP(){},
amW:function amW(){},
Ma:function Ma(){},
we:function we(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hA:function hA(){},
a7c:function a7c(d){this.a=d},
a7d:function a7d(d){this.a=d},
a7e:function a7e(d){this.a=d},
Ob:function Ob(){},
Oc:function Oc(){},
a7h:function a7h(d){this.a=d},
Oe:function Oe(){},
Of:function Of(d){this.a=d},
a7b:function a7b(d){this.a=d},
a7a:function a7a(d){this.a=d},
Oa:function Oa(d){this.a=d},
a7f:function a7f(d){this.a=d},
a7g:function a7g(d){this.a=d},
Od:function Od(d){this.a=d},
H8:function H8(){},
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
aXr:function aXr(d){this.a=d},
aXs:function aXs(d){this.a=d},
aXt:function aXt(d){this.a=d},
PA:function PA(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xx:function Xx(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c6$=h
_.c=_.a=null},
bk4:function bk4(d,e){this.a=d
this.b=e},
bk2:function bk2(d){this.a=d},
bk3:function bk3(d,e){this.a=d
this.b=e},
bk1:function bk1(){},
bk5:function bk5(d){this.a=d},
bEb(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.M:d
return new A.q8(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aNh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TO:u
else w=g
v=f==null?A.aAl(!1,u,0,u,!1,D.ws):f
w=new A.ei(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aAl(!1,u,0,u,!1,D.ws):d,j,a0,i,s,!1,p)
w.asp(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c0C(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.am(d.x,e.x,f)
m.toString
w=A.bJZ(d.ay,e.ay,f)
v=A.bJZ(d.ch,e.ch,f)
u=B.am(d.as,e.as,f)
u.toString
t=e.CW
s=A.kI(d.cy,e.cy,f,A.a1n(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rH(d.w,e.w,f)
p=A.kI(d.a,e.a,f,A.caH(),x.cw)
p.toString
o=B.bNR(d.db,e.db,f)
o.toString
n=B.am(d.dy.a,e.dy.a,f)
n.toString
return A.aNh(v,m,w,r,e.z,s,new A.z5(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.PB(n),!1,u,o,!0,e.cx,p)},
aAl(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
else w=e
return new A.a2P(h,w,g,i,f,!1)},
bJZ(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rH(v.b,u.b,f),r=B.am(v.c,u.c,f)
r.toString
r=A.bLl(t,A.kI(v.d,u.d,f,A.a1n(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rH(d.c,e.c,f)
v=B.am(d.e,e.e,f)
v.toString
return A.aAl(!1,s,v,u,e.a,new A.M5(!1,r,w.c,!0))},
bXE(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rH(d.d,e.d,f)
if(w==null)w=v==null?B.aG(C.d.aN(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
return new A.mV(e.a,e.b,w,v)},
ce4(d){return!0},
bGe(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jB)return A.bH5(w.a,A.bDQ(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dy:w},
c8n(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jB)w=A.bH5(v.a,A.bDQ(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dy}return A.aCu(w,40)},
bQs(d,e,f,g,h){var w,v=A.bGe(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jB)w=A.bH5(u.a,A.bDQ(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dy}u=A.aCu(w,40)
return new A.O9(v,h==null?4:h,u)},
ce2(d,e){return!0},
cat(d,e){return Math.abs(d.a-e.a)},
cbK(d,e){var w=J.cU(e,new A.bzk(d),x.bY)
w=B.R(w,w.$ti.i("ax.E"))
return w},
cbG(d,e){return-1/0},
cbF(d,e){return d.a[e].b},
bRG(d){var w=J.cU(d,new A.bzh(),x.fT)
w=B.R(w,w.$ti.i("ax.E"))
return w},
bRF(d){return A.aCu(D.dy,15)},
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
aNi:function aNi(){},
PB:function PB(d){this.a=d},
a2P:function a2P(d,e,f,g,h,i){var _=this
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
M5:function M5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
z5:function z5(d,e,f){this.a=d
this.b=e
this.c=f},
aN7:function aN7(d,e){this.a=d
this.b=e},
a79:function a79(){},
FG:function FG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bzk:function bzk(d){this.a=d},
bzj:function bzj(d){this.a=d},
a8Z:function a8Z(){},
bzh:function bzh(){},
ni:function ni(){},
qB:function qB(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rW:function rW(d,e){this.a=d
this.b=e},
u_:function u_(d,e){this.a=d
this.b=e},
HA:function HA(d){this.a=d},
PC:function PC(d){this.a=d},
zU:function zU(d,e){this.a=d
this.b=e},
ajc:function ajc(){},
ajd:function ajd(){},
ajr:function ajr(){},
amQ:function amQ(){},
amT:function amT(){},
aoH:function aoH(){},
aoI:function aoI(){},
aoJ:function aoJ(){},
aoL:function aoL(){},
aoM:function aoM(){},
aoN:function aoN(){},
aoO:function aoO(){},
ats:function ats(){},
av9:function av9(){},
aNj:function aNj(d){this.a=d},
aNk:function aNk(){},
aNl:function aNl(){},
zV:function zV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aoK:function aoK(){},
aNm:function aNm(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aNp:function aNp(){},
aNn:function aNn(d,e,f){this.a=d
this.b=e
this.c=f},
aNo:function aNo(d,e,f){this.a=d
this.b=e
this.c=f},
aNq:function aNq(){},
vX:function vX(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8Y:function a8Y(d,e,f){this.d=d
this.e=e
this.a=f},
ad4:function ad4(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.h0=g
_.B=h
_.a5=_.W=_.V=null
_.a_=i
_.bE=_.aJ=_.al=_.au=$
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
bCS(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bH(o.length,0,!1,x.i),m=B.ak(o),l=new B.ae(o,new A.aAo(),m.i("ae<1,G>")).jM(0,new A.aAp()),k=e-l,j=new A.aAs(k,d,n)
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
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAq(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aD(0,new A.aAr(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aAo:function aAo(){},
aAp:function aAp(){},
aAs:function aAs(d,e,f){this.a=d
this.b=e
this.c=f},
aAt:function aAt(d,e,f){this.a=d
this.b=e
this.c=f},
aAq:function aAq(d,e,f){this.a=d
this.b=e
this.c=f},
aAr:function aAr(d,e,f){this.a=d
this.b=e
this.c=f},
bDQ(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.ak(w).i("j1<1>")).aD(0,new A.aKu(v,d))
else throw B.h(B.bQ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aKu:function aKu(d,e){this.a=d
this.b=e},
aDH(d,e){var w,v
if(e!=null){w=B.ak(e).i("ae<1,G>")
v=B.R(new B.ae(e,new A.aDI(),w),w.i("ax.E"))
return A.cbx(d,new A.a3x(v,x.cX))}else return d},
aDI:function aDI(){},
c4z(d,e){var w=!0
if(d!==C.fe)if(!(d===C.a0&&e===C.z))w=d===C.iL&&e===C.b6
if(w)return D.EP
else{w=!0
if(d!==C.hI)if(!(d===C.iL&&e===C.z))w=d===C.a0&&e===C.b6
if(w)return D.EQ
else return D.abp}},
OF:function OF(d,e){this.a=d
this.b=e},
a3n:function a3n(d,e){this.a=d
this.b=e},
zZ:function zZ(d,e){this.a=d
this.$ti=e},
aoV:function aoV(){},
cbx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.aq(),i=x.v,h=B.b([],i),g=new B.cr(j.r,C.an,k,k,h)
for(j=B.NV(d),w=B.b([],x.I),v=new B.NX(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.U(B.fM('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.NW(v,r)
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
p=new B.Lm(new B.cr(t,p,k,new B.arX([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3x:function a3x(d,e){this.a=d
this.b=0
this.$ti=e},
b4y:function b4y(){},
bDE(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fZ))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bXH(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aCu(d,e){var w=1-e/100
return B.aG(d.gfK(d),C.d.aN(d.gOA()*w),C.d.aN(d.gGI()*w),C.d.aN(d.gL_()*w))},
bLj(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bDF(d){var w=d.a,v=w?A.b11(d.b):0,u=w?A.b11(d.c):0,t=w?A.b11(d.d):0
return new B.ai(v,u,t,w?A.b11(d.e):0)},
c1R(d){var w
if(d.c===0){d.seY(null)
w=B.c6(d.r)
d.r=B.aG(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bEy(d,e,f,g){var w
if(f!=null){d.r=C.J.gt(0)
d.seY(f.mR(0,g))}else{w=e==null?C.M:e
d.r=w.gt(w)
d.seY(null)}},
b11(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kI(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ccR(d,e,f){return C.d.aN(d+(e-d)*f)},
bH5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a8L.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.q
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.H(v,B.b([B.bN(t.x,C.n,s,18),C.aQ],w))
v.push(B.an(new B.dF(t.c,!1,s),1))
v=B.a9(v,C.x,s,C.e,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.d(t.d,s,1,C.ag,s,B.bD(u==null?C.h:u,22,C.C),s,s,s)],w)
return B.b4(r,B.a3(w,C.x,C.iu,C.i),q,s,C.ap,s,s,3)}}
A.vr.prototype={
Ml(d){return this.aV2(d)},
aV2(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Ml=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_summary",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b)],s,r),r),$async$Ml)
case 3:q=f
if(q==null){u=D.ate
w=1
break}if(x.f.b(q)){u=B.cm(q,s,r)
w=1
break}u=D.avt
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ml,v)},
Mk(d){return this.aV1(d)},
aV1(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_kpis",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b)],s,r),r),$async$Mk)
case 3:q=f
if(x.f.b(q)){u=B.cm(q,s,r)
w=1
break}u=D.asV
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mk,v)},
Mj(d){return this.aV0(d)},
aV0(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$Mj=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dJ("finance_bookings_list",B.a4(["p_from",E.ou(d.a),"p_to",E.ou(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$Mj)
case 3:q=f
if(x.f.b(q)){u=B.cm(q,s,r)
w=1
break}u=D.atj
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Mj,v)},
pL(d){return this.as7(d)},
as7(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fO("sevdesk-sync",B.a4(["from",E.ou(d.a),"to",E.ou(d.b)],s,s)),$async$pL)
case 3:r=f.a
if(x.f.b(r)&&typeof J.P(r,"upserted")=="number"){u=C.d.X(B.fz(J.P(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pL,v)},
Mf(d){return this.aUS(d)},
aUS(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Mf=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fO("finance-export-pdf",B.a4(["from",E.ou(d.a),"to",E.ou(d.b)],s,s)),$async$Mf)
case 3:r=f.a
if(x.f.b(r)&&typeof J.P(r,"base64")=="string"){u=B.aK(J.P(r,"base64"))
w=1
break}throw B.h(B.e3("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Mf,v)}}
A.F3.prototype={
GC(d){return this.al8(d)},
al8(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$GC=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ml(d),$async$GC)
case 7:q=f
o=A.aIi(q)
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
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$GC,v)},
Gx(d){return this.akU(d)},
akU(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gx=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mk(d),$async$Gx)
case 7:q=f
o=A.c_l(q)
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
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gx,v)},
Gn(d){return this.akG(d)},
akG(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gn=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mj(d),$async$Gn)
case 7:q=f
o=A.c_k(q)
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
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gn,v)},
pL(d){return this.as8(d)},
as8(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pL(d),$async$pL)
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
throw B.h(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pL,v)},
Me(d){return this.aUR(d)},
aUR(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Me=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mf(d),$async$Me)
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
throw B.h(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Me,v)},
BS(d){var w,v
if(d instanceof B.vp)return d
if(d instanceof B.mm){if(d.b==="42501")return new B.wi(d.a)
return new B.tD(d.a)}if(d instanceof B.Ot){w=A.cce(d.b)
v=""+d.a
return new B.tD(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.BF("Unerwarteter Fehler: "+B.f(d))},
$iaI2:1}
A.pU.prototype={
gamN(){var w=this.z
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
A.w0.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wZ.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aD5.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aEg.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ot.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Dt.prototype={
gbt(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ov.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.z1.prototype={
Hw(d){return this.as6(0)},
as6(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hw=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.see(0,C.dF)
s=t.r
r=s.aw(0,$.r4(),x.P)
p.a=null
w=3
return B.k(B.pw(new A.aHX(p,t,r),x.H),$async$Hw)
case 3:t.see(0,f)
q=t.f
if(q.ghf(q)==null){q=$.bCr()
s=s.e
s===$&&B.a()
s.c0(q)
s.c0($.bIQ())
s.c0($.bCq())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hw,v)},
Md(){return this.aUQ()},
aUQ(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Md=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.see(0,C.dF)
s=t.r.aw(0,$.r4(),x.P)
q.a=null
w=3
return B.k(B.pw(new A.aHW(q,t,s),x.H),$async$Md)
case 3:t.see(0,e)
r=t.f
u=r.ghf(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Md,v)}}
A.vq.prototype={
U(){return new A.amJ(D.Bn)}}
A.xj.prototype={
L(){return"_Filter."+this.b}}
A.amJ.prototype={
gT_(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbq(),t=u.ak($.r4(),x.P),s=u.ak($.bCq(),x.e)
u=$.cQ()
return B.d8(D.abf,v,B.lj(B.d5(B.b([new B.f_("Zeitraum",u.a4(t.a)+" \u2013 "+u.a4(t.b),v,v),C.L,new A.amI(w.w,w.gT_(),new A.bfU(w),new A.bfV(w),v),C.av,B.dn(s,new A.bfW(w),new A.bfX(),new A.bfY(),!1,!0,!1,x.m,x.l)],x.p),v,C.cb,v,C.G,!1),C.n,new A.bfZ(w)),v,v,v)},
atw(d){var w=B.ak(d).i("aY<1>")
w=B.R(new B.aY(d,new A.bfR(this),w),w.i("u.E"))
return w}}
A.amI.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.xd("Alle",t===D.Bn,new A.bfN(v),u),new A.xd("Ausgaben",t===D.a_P,new A.bfO(v),u),new A.xd("Erl\xf6se",t===D.a_Q,new A.bfP(v),u),new A.xd("Privat",t===D.a_R,new A.bfQ(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.xd("Konto "+w+" \xd7",!0,v.f,u))
return B.ji(C.c8,t,C.d3,6,8)}}
A.xd.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aN:C.a5,s=B.ar(9999),r=B.ar(9999),q=B.ar(9999),p=B.c5(v?C.n:C.a7,1)
return B.br(w,!0,w,B.du(!1,C.Y,!0,s,B.dT(!1,r,!0,B.aD(w,B.d(u,w,w,w,w,B.t(C.h,13,C.C),w,w,w),C.p,w,w,new B.aB(w,w,p,q,w,w,C.B),w,w,w,w,C.fX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.p,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.N,w)}}
A.Jw.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aSQ
w=this.d
if(w.length===0)return D.aSR
v=B.ak(w).i("aY<1>")
u=new B.aY(w,new A.bkf(),v).f1(0,0,new A.bkg())
t=new B.aY(w,new A.bkh(),v).f1(0,0,new A.bki())
s=new B.aY(w,new A.bkj(),v).f1(0,0,new A.bkk())
r=new B.aY(w,new A.bkl(),v).gq(0)
v=w.length
q=$.cA()
p=q.a4(t)
o=E.bGz(u,E.bzD("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a4(s)
n=x.p
q=B.b([B.d(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.t(C.h,14,C.C),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.H(q,B.b([C.aG,B.d(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.t(C.l,12,C.j),l,l,l)],n))
if(r>0)C.b.H(q,B.b([C.aG,B.d(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.t(C.R,12,C.j),l,l,l)],n))
k=B.b([B.b4(l,B.a3(q,C.x,C.e,C.i),C.a5,l,C.y,l,l,3),C.L],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.H(k,B.b([new A.ajJ(w[m],l),C.D],n))
return B.a3(k,C.aa,C.e,C.i)}}
A.ajJ.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aq(n).length!==0)===!0){n.toString
n=C.c.aq(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.a9(B.b([B.an(B.d(n,p,2,C.ag,p,B.t(C.h,14,C.C),p,p,p),1),C.af,new E.DN(o.r,w,v,15,p)],u),C.x,p,C.e,C.i,0,p,p)
w=B.d($.cQ().a4(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+E.bHm(w),p,1,C.ag,p,B.t(C.l,12,C.j),p,p,p)
v=C.d.aa(o.y,1)
t=$.cA()
s=t.a4(o.w)
t=t.a4(o.x)
r=o.gamN()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aG,w,C.b2,B.d("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ag,p,B.t(C.l,12,C.j),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.H(q,B.b([C.aG,B.a9(B.b([D.aeT,C.c4,B.an(B.d("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.t(C.R,11,C.j),p,p,p),1)],u),C.k,p,C.e,C.i,0,p,p)],u))
return B.b4(p,B.a3(q,C.x,C.e,C.i),p,p,C.cK,p,p,3)}}
A.xm.prototype={
p(d){var w=null
return B.b4(w,B.a9(B.b([B.bN(this.e,this.d,w,w),C.af,B.an(B.d(this.c,w,w,w,w,B.t(C.h,14,C.j),w,w,w),1)],x.p),C.x,w,C.e,C.i,0,w,w),C.a5,w,C.y,w,w,3)}}
A.z2.prototype={
d9(d,e){var w=null,v=e.ak($.r4(),x.P),u=e.ak($.bCr(),x.aN)
return B.lj(B.d5(B.b([new B.f_("Finanzen","Dashboard",new A.aih(e.ak($.bCo(),x.c).gjg(),new A.aI8(this,d,e),new A.aI9(this,d,e),new A.aIa(d),new A.aIb(d),new A.aIc(d),new A.aId(this,d,e,v),w),w),C.av,new A.aql(v,w),C.c5,D.ais,C.c5,B.dn(u,new A.aIe(),new A.aIf(),new A.aIg(),!1,!0,!1,x.d,x.l)],x.p),w,C.cb,w,C.G,!1),C.n,new A.aIh(e))},
K5(d,e){return this.aNq(d,e)},
aNq(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$K5=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bCo()
w=3
return B.k(e.aw(0,n.ghR(),x.F).Hw(0),$async$K5)
case 3:m=g
if(d.e==null){w=1
break}t=e.aw(0,n,x.c)
s=t.ghf(t)==null
r=t.ghf(t)
if(r instanceof B.vp)q=r.a
else q=r==null?null:J.aj(r)
if(s)p="sevDesk synchronisiert: "+B.f(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.N(x.q).f
o=s?C.I:D.a8F
n.aG(B.bO(null,null,null,null,null,C.o,null,B.d(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$K5,v)},
BT(d,e){return this.ays(d,e)},
ays(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aw(0,$.bCo().ghR(),x.F).Md(),$async$BT)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.N(x.q).f.aG(D.aDK)
w=1
break}t=B.oV(C.v,10)
w=4
return B.k($.bTU().uc(s,"finanzauswertung.pdf",t,null,null,null),$async$BT)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BT,v)},
BU(d,e,f){return this.aKU(d,e,f)},
aKU(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BU=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.f4(null,null,!0,null,new A.aI5(f,d),d,null,!0,!0,x.cJ),$async$BU)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mS(e.aw(0,$.bA(),x.A))
p=f.a
o=f.b
n=$.cQ()
m=n.a4(p)
n=n.a4(o)
w=8
return B.k(r.wi("finance_period",p,o,B.a4(["period_from",p.dR()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BU)
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
return B.p($async$BU,v)}}
A.aih.prototype={
p(d){var w=this,v=null,u=A.Xc(C.n,F.h1,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Xc(v,D.adt,v,w.r,"Gesellschafter-Freigaben"),s=A.Xc(v,D.abH,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Xc(v,D.yq,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Xc(C.R,C.fx,C.R,r?v:w.e,"PDF-Export")
return B.a9(B.b([u,C.aQ,t,C.aQ,s,C.aQ,q,C.aQ,p,C.aQ,A.Xc(C.am,C.fz,C.am,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.e,C.H,0,v,v)}}
A.anV.prototype={
p(d){var w,v=this,u=null,t=B.ar(12),s=B.ar(12),r=B.ar(12),q=v.w
if(q==null)q=C.a7
q=B.c5(q,1)
w=v.r
if(w==null)w=C.h
return B.tZ(B.du(!1,C.Y,!0,t,B.dT(!1,s,!0,B.aD(u,B.bN(v.c,w,u,20),C.p,u,u,new B.aB(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a5,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.aql.prototype={
d9(d,e){var w=null,v=this.e,u=$.cQ(),t=x.p
return B.b4(w,B.a3(B.b([D.aaj,C.D,B.a9(B.b([D.aet,C.aj,B.an(B.d(u.a4(v.a)+" \u2013 "+u.a4(v.b),w,w,w,w,B.t(C.h,16,C.C),w,w,w),1)],t),C.k,w,C.e,C.i,0,w,w),C.t,B.ji(C.c8,B.b([new A.K2("Monat",new A.bnC(e),w,w),new A.K2("Jahr (YTD)",new A.bnD(e),w,w),new A.K2("Zeitraum w\xe4hlen \u2026",new A.bnE(this,d,e),F.F6,w)],t),C.d3,6,8)],t),C.x,C.e,C.i),w,w,C.y,w,w,3)},
Jp(d,e){return this.aJN(d,e)},
aJN(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Jp=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aW(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.ay6(new A.bnB(),d,B.bw(B.aV(t)-5,1,1,0,0,0,0),new B.lX(s.a,s.b,x.bz),B.bw(B.aV(t)+1,1,1,0,0,0,0),C.ef),$async$Jp)
case 2:r=g
if(r!=null)e.aw(0,$.r4().ghR(),x.V).uu(0,new E.m1(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Jp,v)}}
A.K2.prototype={
p(d){var w=null,v=B.ar(9999),u=B.ar(9999),t=B.ar(9999),s=B.c5(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.H(q,B.b([B.bN(p,C.h,w,14),C.aQ],r))
q.push(B.d(this.c,w,w,w,w,B.t(C.h,13,C.C),w,w,w))
return B.du(!1,C.Y,!0,v,B.dT(!1,u,!0,B.aD(w,B.a9(q,C.k,w,C.e,C.H,0,w,w),C.p,w,w,new B.aB(w,w,s,t,w,w,C.B),w,w,w,w,C.fX,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a5,0,w,w,w,w,w,C.bb)}}
A.Ks.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jA(new A.buw(this)),C.c5,D.aap,C.t],q),o=this.c.w
if(o.length===0)p.push(B.b4(r,B.a9(B.b([D.af_,C.af,B.an(B.d("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.t(C.l,14,C.j),r,r,r),1)],q),C.k,r,C.e,C.i,0,r,r),C.a5,r,C.y,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.H(w,B.b([new A.aif(t.a,t.b,s,E.bHm(s),t.d,new A.bux(d,t),r),C.D],q))}p.push(B.a3(w,C.k,C.e,C.i))}return B.a3(p,C.aa,C.e,C.i)}}
A.aif.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aN:C.a5,q=B.c5(s?C.n:C.a7,1),p=B.ar(4),o=v.c,n=x.p
t=B.b([B.aD(C.W,B.d(C.c.a1(o,0,1),u,u,u,u,B.bD(C.h,14,C.r),u,u,u),C.p,u,u,new B.aB(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.af,B.an(B.a3(B.b([B.d(o+" \xb7 "+v.d,u,1,C.ag,u,B.t(C.h,14,C.C),u,u,u),B.d(v.f,u,u,u,u,B.t(C.l,12,C.j),u,u,u)],n),C.x,C.e,C.i),1),new E.DN(v.r,t,o,15,u)],n)
C.b.H(t,B.b([C.c4,C.FI],n))
w=B.b4(u,B.a9(t,C.k,u,C.e,C.i,0,u,u),u,u,C.cK,u,u,3)
return B.br(u,!0,u,B.dT(!1,B.ar(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u)}}
A.J5.prototype={
p(d){var w=null
return B.b4(C.R,B.a9(B.b([D.afF,C.af,B.an(B.d(this.c,w,w,w,w,B.t(C.h,14,C.j),w,w,w),1)],x.p),C.k,w,C.e,C.i,0,w,w),C.fo,w,C.y,w,w,3)}}
A.a8M.prototype={
d9(d,e){return B.dn(e.ak($.bIQ(),x.cn),new A.aN4(),new A.aN5(),new A.aN6(),!1,!0,!1,x.X,x.l)}}
A.Jq.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aB2,C.t,B.jA(new A.bjQ(v,q,100-t.w.a,w,p)),C.t,new A.anb(u),C.av,D.aB1,C.t,new A.ajb(t,u),C.av,D.aAX,C.t,B.br(u,!0,u,B.kd(u,B.b4(u,new A.Vl(t,220,u),u,u,C.y,u,u,3),C.S,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjR(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.av,D.aAN,C.t,B.br(u,!0,u,B.kd(u,new A.VC(t,200,!1,u),C.S,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bjS(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.av,D.aAU,C.t,new A.ap4(t,u),C.av,D.aAP,C.t,new A.al3(t,u)],s)
if(t.f.length!==0)C.b.H(r,B.b([C.av,D.aAZ,C.t,new A.av6(t,u)],s))
return B.a3(r,C.aa,C.e,C.i)}}
A.anb.prototype={
p(d){var w=null
return B.d("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.t(C.l,11,C.j).cC(1.35),w,w,w)}}
A.aoy.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.R:C.am
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bjT(m,d):l
r=x.p
q=B.b([B.an(B.d(m.c.toUpperCase(),l,l,l,l,B.t(C.l,10,C.r).fm(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.c5(C.R,0.8)
n=B.ar(4)
q.push(B.aD(l,B.d("Ziel "+p,l,l,l,l,B.t(C.R,9,C.r),l,l,l),C.p,l,l,new B.aB(l,l,o,n,l,l,C.B),l,l,l,l,C.nS,l,l,l))}q=B.b([B.a9(q,C.k,l,C.e,C.i,0,l,l),C.aG,B.O7(C.d6,B.d(m.d,l,l,l,l,B.bD(w,22,C.r),l,l,l),C.hU)],r)
p=m.e
if(p!=null)q.push(B.d(p,l,2,C.ag,l,B.t(C.l,10,C.aF),l,l,l))
q.push(C.d2)
q.push(B.a9(B.b([new A.Wc("Vormonat",m.r,l),C.c4,new A.Wc("Vorjahr",m.f,l)],r),C.k,l,C.e,C.i,0,l,l))
q.push(C.d2)
q.push(B.an(new A.a_0(v,m.y,m.z,l),1))
return B.br(l,u,l,B.kd(l,B.b4(l,B.a3(q,C.x,C.e,C.i),l,l,C.bx,l,l,3),C.S,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.Wc.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ar(4)
return B.aD(r,B.d(this.c+" \u2014",r,r,r,r,B.t(C.l,9,C.r),r,r,r),C.p,r,r,new B.aB(C.a7,r,r,q,r,r,C.B),r,r,r,r,C.nS,r,r,r)}w=q>=0
v=w?C.am:C.R
u=v.dz(0.12)
t=B.c5(v,0.7)
s=B.ar(4)
return B.aD(r,B.a9(B.b([B.bN(w?F.abu:D.abt,v,r,10),C.ZD,B.d(this.c+" "+C.d.aa(q,1)+" %",r,r,r,r,B.t(v,9,C.r),r,r,r)],x.p),C.k,r,C.e,C.H,0,r,r),C.p,r,r,new B.aB(u,r,t,s,r,r,C.B),r,r,r,r,C.nS,r,r,r)}}
A.a_0.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.au
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eG(v,j[v]))
u=C.b.jM(j,new A.btv())
t=C.b.jM(j,new A.btw())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.btx(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a77(k,!1)
w=B.b([A.aNh(k,2,A.aAl(!1,C.n.dz(0.16),0,k,!0,D.ws),C.n,0.35,k,D.EG,k,!0,!1,!0,!1,D.Gh,!1,10,D.Z5,!0,C.lN,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.PA(A.bEb(k,k,k,D.ap_,l,D.Cp,D.EC,D.EH,w,D.aiF,k,m,k,n,D.Yq,D.ap0,D.aaH),C.ar,C.a8,k,k)}}
A.Vl.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aRW
w=C.b.f1(p,0,new A.b90())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aAu(B.b([A.a2R(q,q,D.BQ,q,C.n,q,q,q,r.b,6),A.a2R(q,q,D.BQ,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bP(A.bK_(A.aAn(q,q,u,q,q,A.a77(q,!1),q,new A.z6(!0,!0,q,new A.b91(),A.a1g(),!1,q,A.axR(),A.a1g()),q,v,q,q,new A.vt(!0,new A.px(16,q,new A.qt(!0,new A.b92(this),46,q),!0),D.kI,D.kI,new A.px(16,q,new A.qt(!0,new A.b93(p),26,q),!0)))),this.d,q)},
aMC(d){if(Math.abs(d)>=1000)return C.d.aa(d/1000,1)+" k"
return C.d.aa(d,0)}}
A.VC.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.R(new B.ae(v,new A.ba3(),w),x.i)
C.b.H(o,new B.ae(u,new A.ba4(),w))
t=C.b.f1(o,0,new A.ba5())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aAu(B.b([A.a2R(q,q,q,q,C.n,q,q,q,v[s],14),A.a2R(q,q,q,q,C.am,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bP(A.bK_(A.aAn(q,q,n,q,q,A.a77(q,!1),q,D.EH,q,o,q,q,new A.vt(!0,D.kI,D.kI,D.kI,new A.px(16,q,new A.qt(!0,new A.ba6(p),26,q),!0)))),this.d,q)
return this.e?r:B.b4(q,r,q,q,C.y,q,q,3)}}
A.ap4.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aRV
w=new B.ae(l,new A.bkz(),B.ak(l).i("ae<1,G>")).jM(0,new A.bkA())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.d(r.b,m,m,m,m,B.t(C.h,14,C.r),m,m,m)
p=$.cA()
o=r.d
n=new B.b3(4,4)
o=B.b([new B.i0(C.al,C.e,C.i,C.k,m,C.aX,m,0,B.b([new B.iy(1,C.cU,B.a3(B.b([q,B.d(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a4(r.f),m,m,m,m,B.t(C.l,12,C.aF),m,m,m)],v),C.x,C.e,C.i),m),C.aj,B.d(p.a4(o),m,m,m,m,B.bD(C.h,16,C.r),m,m,m)],v),m),C.d2,new B.Eb(new B.da(n,n,n,n),C.bv,B.zW(C.a7,m,8,C.d.bm(o/w,0,1),D.BF),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a1l(r.gbt(),q.gbt())
else q=!0
if(!q)o.push(C.t)
C.b.H(u,o)}return B.b4(m,B.a3(u,C.k,C.e,C.i),m,m,C.y,m,m,3)}}
A.al3.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.an(new A.CV("Aktive Kunden",""+s,u),1)
w=B.an(new A.CV("K\xe4ufe",""+t.a,u),1)
v=$.cA()
return B.b4(u,B.a9(B.b([s,w,B.an(new A.CV("\xd8-Warenkorb",v.a4(t.d),u),1),B.an(new A.CV("Umsatz/Kunde",v.a4(r),u),1)],x.p),C.k,u,C.e,C.i,0,u,u),u,u,C.y,u,u,3)}}
A.CV.prototype={
p(d){var w=null
return B.a3(B.b([B.d(this.c.toUpperCase(),w,w,w,w,B.t(C.l,10,C.r).fm(0.6),w,w,w),C.b2,B.d(this.d,w,w,w,w,B.bD(C.h,20,C.r),w,w,w)],x.p),C.x,C.e,C.H)}}
A.av6.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ae(q,new A.bvR(),B.ak(q).i("ae<1,G>")).jM(0,new A.bvS()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.b3(4,4)
t=B.b([new B.i0(C.al,C.e,C.i,C.k,r,C.aX,r,0,B.b([new B.iy(1,C.cU,B.d(u.b,r,1,C.ag,r,B.t(C.h,13,C.r),r,r,r),r),B.d(""+u.c+"\xd7 ",r,r,r,r,B.t(C.l,12,C.C),r,r,r),B.d($.cA().a4(t),r,r,r,r,B.t(C.h,13,C.r),r,r,r)],o),r),C.aG,new B.Eb(new B.da(s,s,s,s),C.bv,B.zW(C.a7,r,6,C.d.bm(t/p,0,1),D.BF),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a1l(u.gbt(),s.gbt())
else s=!0
if(!s)t.push(C.D)
C.b.H(n,t)}return B.b4(r,B.a3(n,C.k,C.e,C.i),r,r,C.y,r,r,3)}}
A.xh.prototype={
p(d){var w=null
return B.b4(w,B.d(this.c,w,w,w,w,B.t(C.l,13,C.j),w,w,w),C.a5,w,C.y,w,w,3)}}
A.ajb.prototype={
d9(d,e){return B.dn(e.ak($.bCp(),x.fM),new A.b6T(this,d,e),new A.b6U(),new A.b6V(),!1,!0,!1,x.h,x.l)}}
A.BP.prototype={
U(){return new A.UW()},
aZP(){return this.d.$0()}}
A.UW.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aF()
q.d=new B.aW(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.P(w,"as_of"))!=null){w.toString
u=B.dq(J.aj(J.P(w,"as_of")))
q.d=u==null?q.d:u}u=B.B(x.N,x.bP)
for(t=0;t<8;++t){s=D.q3[t].a
if(v)r=""
else{r=B.aZ(J.P(w,s))
if(r==null)r=null
r=C.d.aa(r==null?0:r,2)
r=B.ag(r,".",",")}u.m(0,s,new B.bl(new B.ch(r,C.aO,C.as),$.ah()))}q.e!==$&&B.aX()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cf(v,v.r,v.e,B.l(v).i("cf<2>"))
while(v.u()){w=v.d
w.S$=$.ah()
w.R$=0}this.am()},
rG(d){var w=this.e
w===$&&B.a()
w=C.c.aq(w.h(0,d).a.a)
w=B.ag(w,".","")
w=B.fc(B.ag(w,",","."))
return w==null?0:w},
a4X(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q3[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aa(u,2)
s=B.ag(s,".",",")
t.jY(0,t.a.yo(C.as,C.aO,s))}}this.G(new A.b6H())},
aGn(){this.a4X(D.atg)
this.c.N(x.q).f.aG(D.aEc)},
IF(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$IF=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.bc(a1)
for(e=0;e<8;++e)a2.E(0,D.q3[e].a)
q=a2
t=4
w=7
return B.k($.a7_.ci().w7(B.b(["csv","txt"],x.s),C.o1,!0),$async$IF)
case 7:p=a5
a2=p
o=a2==null?null:J.Li(a2.a).c
if(o==null){w=1
break}n=C.aM.aev(0,o,!0)
m=B.B(a1,x.i)
for(a1=C.Cu.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ayE(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.aq(J.P(k,0)).toLowerCase()
i=J.Do(q,j)?j:D.avu.h(0,j)
if(i==null)continue
d=C.c.aq(C.b.mc(J.bX6(k,1)))
d=B.ag(d,"\u20ac","")
d=B.ag(d," ","")
d=B.ag(d,".","")
h=B.ag(d,",",".")
g=B.fc(h)
if(g!=null)J.fA(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.N(x.q).f.aG(D.aDH)
w=1
break}r.a4X(m)
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
return B.p($async$IF,v)},
IQ(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IQ=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.G(new A.b6I(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b1m("upsert_finance_balance",B.a4(["p_as_of",C.c.a1(n.dR(),0,10),"p_cash_and_bank",q.rG("cash_and_bank"),"p_receivables",q.rG("receivables"),"p_inventory_value",q.rG("inventory_value"),"p_other_current_assets",q.rG("other_current_assets"),"p_fixed_assets",q.rG("fixed_assets"),"p_current_liabilities",q.rG("current_liabilities"),"p_long_term_liabilities",q.rG("long_term_liabilities"),"p_equity",q.rG("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IQ)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZP()
o=q.c
o.toString
B.aI(o,!1).eV()
q.c.N(x.q).f.aG(D.aDL)
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
if(q.c!=null)q.G(new A.b6J(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IQ,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.d("Bilanzwerte erfassen",r,r,r,r,B.bD(C.h,18,C.r),r,r,r),p=s.f?r:new A.b6L(s,d),o=s.d
o===$&&B.a()
p=B.ev(D.aev,B.d("Stichtag: "+C.c.a1(o.dR(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.an(B.ev(D.afQ,D.aKb,o?r:s.gaFj(),r),1)
v=x.p
w=B.b([p,C.D,B.a9(B.b([w,C.aj,B.an(B.ev(D.afA,D.aJU,o?r:s.gaGm(),r),1)],v),C.k,r,C.e,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q3[u]
o=s.e
o===$&&B.a()
C.b.H(w,B.b([B.cE(r,C.ad,!1,r,!0,C.o,r,B.cI(),o.h(0,p.a),r,r,r,r,r,2,new B.bu(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.S,!0,r,!0,r,!1,r,C.ah,r,r,r,r,r,C.dQ,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.y,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.a0,r,C.Q,r,r,r,r),C.D],v))}w.push(B.d("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.t(C.l,11,C.j),r,r,r))
p=B.bP(B.ey(B.a3(w,C.aa,C.e,C.H),r,C.G),r,380)
o=s.f
w=B.cL(C.bt,r,r,o?r:new A.b6M(d),r,r)
o=o?r:s.gaG5()
t=B.dL(C.n,C.h,r,r,r,r,r)
return B.fC(B.b([w,B.dc(s.f?F.ZG:C.cO,o,t)],v),C.q,p,q)}}
A.bo.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a1l(this.gbt(),e.gbt())
else w=!0
return w},
gA(d){return(B.fb(B.N(this))^B.bSd(this.gbt()))>>>0},
j(d){B.bLe()
return B.N(this).j(0)}}
A.M6.prototype={
U(){return new A.UX(B.B(x.S,x.J),new A.aAx(B.B(x.x,x.T)),null,null)}}
A.UX.prototype={
p(d){var w,v=this,u=v.a2M(),t=v.CW
t.toString
t=v.a2N(t.av(0,v.gfl().gt(0)))
w=v.a2N(u)
v.a.toString
return new A.M2(new A.a2Q(t,w,null),u,null)},
a2N(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aAu(s.c,s.d,!1,r,s.a))}return d.aRU(w)},
a2M(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.VF(t.ch)
if(r)s=w.a
r=t.y
t=t.aSO(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aRV(A.bCT(!1,!0,!0,v.d,v.c,u.gatN(),v.f,v.e))}return t},
atO(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagY()||e==null||e.a==null){w=v.cy
v.G(w.gaRi(w))
return}v.G(new A.b6Y(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2M(),new A.b6Z(w)))}}
A.ob.prototype={
Wi(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aAn(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aSO(d,e){return this.Wi(null,null,d,e)},
aRV(d){return this.Wi(null,d,null,null)},
aRU(d){return this.Wi(d,null,null,null)},
Yd(d,e,f){var w,v,u,t=A.kI(d.ch,e.ch,f,A.caM(),x.dB),s=B.am(d.CW,e.CW,f),r=A.bLm(d.d,e.d,f),q=A.bNj(d.e,e.e,f),p=A.bLk(d.c,e.c,f),o=e.a
o=A.a77(B.a39(d.a.b,o.b,f),o.a)
w=B.am(d.y,e.y,f)
v=B.am(d.x,e.x,f)
u=B.am(d.z,e.z,f)
r=A.aAn(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bLg(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbt(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aAm.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fU.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.aAv(),B.ak(v).i("ae<1,G>")).jM(0,new A.aAw())
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
A.a2N.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2S.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.afJ.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2T.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DM.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.M7.prototype={}
A.a2U.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.yc.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yd(v,w,d)}}
A.aj7.prototype={}
A.aje.prototype={}
A.ajf.prototype={}
A.ajh.prototype={}
A.aji.prototype={}
A.ajj.prototype={}
A.ajk.prototype={}
A.ajl.prototype={}
A.ajm.prototype={}
A.aAx.prototype={
VF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.v3(0,0,!1)
v=new A.zZ(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.v3(t,u,!0)}w=null
try{w=C.b.p6(d,new A.aAy())}catch(s){return new A.v3(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.v3(q,r,!1)
u.m(0,v,j)
return j}}
A.v3.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.ajg.prototype={}
A.aAz.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0U(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.adt(t,A.bCS(w,t.a),u)
l.y=u
l.aU9(e,u,f)
l.an8(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aUi(d,e,m,t,r,s,n,o,f)}}},
adt(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.h(B.e3("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.ak(p).i("j1<1>")).aD(0,new A.aAA(t,q,r,s))
w.push(new A.a7P(q))}return w},
aU9(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.b3(m,m)
l=new B.da(k,k,k,k)}j=o.w
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
a4=B.Rm(h,Math.min(b2.dK(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dK(Math.min(u,a2),b4,b7)
a4=B.Rm(h,a5,g,Math.max(b2.dK(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.M:f).gt(0)
k.seY(null)
a6=b2.f.e2()
v.drawRRect(B.lL(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dK(f,b4,b7)
e=a8.b
b0=b2.dK(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.K(h,a9,g,b0):new B.K(h,b0,g,a9)
J.bh(v.save())
v.clipRect(B.dS(b1),$.mO()[1],!0)
a6=b2.f.e2()
v.drawRRect(B.lL(a4),a6)
a6.delete()
v.restore()
b2.aUg(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
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
n=A.aDH(new B.cr(n.r,C.an,null,null,k),o.r)
a6=b2.r.e2()
k=n.e
v.drawPath((k==null?n.e=new B.mZ(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aUi(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bt(a5,a5,a5,a5,B.cP(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lN().a_X(a8,a7.b),a7.a),C.bk,C.z,a5,b6.c,C.bB)
w.ahh(b1.f)
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
if(v!==D.aNe)j=v===D.a_p&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_Y(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.K(h,i,v,t)
s=b1.a
f=new B.b3(s,s)
e=B.GS(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lN().La(new B.I(v,t),d).b
s=$.lN()
q=w.b
p=q.c
q=q.a.c
a0=s.La(new B.I(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gajv()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.WV(d,new A.aAB(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aUg(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Rm(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dK(v,j,k),i.b)
r=n.dK(t,j,k)
v=t<v
t=v?C.a9:new B.b3(i.z,i.Q)
p=v?C.a9:new B.b3(i.x,i.y)
o=v?new B.b3(i.e,i.f):C.a9
q=B.Rm(w,s,u,r,t,p,o,v?new B.b3(i.r,i.w):C.a9)}else q=B.bET(w,n.dK(v,j,k),u,n.dK(t,j,k),C.a9)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xz(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.adt(b2,A.bCS(a8,b2.a),a8.ch)
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
break}++a3}return new A.a2U(d,q,a0,o,a2,a1,new A.eG(d.a,v),new B.r(n,t))}}return null}}
A.a7P.prototype={}
A.a2Q.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aAz()
t.a25()
$.aq()
w=B.b5()
w.b=C.bm
t.f=w
w=B.b5()
w.b=C.b4
t.r=w
w=B.b5()
w.b=C.bm
w.r=C.q.gt(0)
t.w=w
w=B.b5()
w.b=C.b4
w.r=C.M.gt(0)
w.c=1
t.x=w
t=new A.acS(this.d,v,u,t,d,C.bc,new B.bv(),B.aO(x.j))
t.bl()
t.ZP(v.cy)
t.agr()
return t},
by(d,e){e.sip(0,this.d)
e.sZz(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.acS.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZz(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1E(d.cy)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdB(0),s=t.a
J.bh(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h0.ih(w,new A.a3n(t,v),new A.we(u.aE,u.i9,u.d3,x.Q))
s.restore()},
a_Q(d){var w=this,v=w.gC(0)
return new A.M7(w.h0.Xz(d,v,new A.we(w.aE,w.i9,w.d3,x.Q)))}}
A.a2G.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DL.prototype={
L(){return"AxisSide."+this.b}}
A.tY.prototype={}
A.qt.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aej.prototype={
gbt(){return[!1,0,0,0]}}
A.px.prototype={
gbt(){return[this.b,this.a,this.c,!0]}}
A.vt.prototype={
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
A.z6.prototype={
gbt(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pV.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afL.prototype={
gbt(){return[this.a,this.b]}}
A.Rq.prototype={
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
A.lv.prototype={
gbt(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a8_.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ag8.prototype={
gbt(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.O0.prototype={
gbt(){return[this.a,this.b,!0]}}
A.vs.prototype={}
A.O9.prototype={
aeV(d,e,f){var w,v
$.aq()
w=B.b5()
v=this.a
w.r=v.gt(v)
w.b=C.bm
d.iU(f,this.b,w)},
gbt(){return[this.a,this.b,this.c,0]}}
A.aj2.prototype={}
A.aj6.prototype={}
A.amp.prototype={}
A.amR.prototype={}
A.amS.prototype={}
A.amU.prototype={}
A.amV.prototype={}
A.anL.prototype={}
A.anK.prototype={}
A.anM.prototype={}
A.arw.prototype={}
A.att.prototype={}
A.atu.prototype={}
A.ava.prototype={}
A.avV.prototype={}
A.avU.prototype={}
A.avW.prototype={}
A.aAb.prototype={
Nl(d,e,f,g,h,i){return new B.ip(this.aXW(d,e,f,g,h,i),x.g4)},
aXV(d,e,f,g){return this.Nl(d,e,f,!0,g,!0)},
aXW(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Nl(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lN().akF(s,u,v,w)
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
A.M1.prototype={
a25(){var w,v=this
$.aq()
w=B.b5()
w.b=C.b4
v.a=w
w=B.b5()
w.b=C.bm
v.b=w
w=B.b5()
w.b=C.bm
v.e=w
w=B.b5()
w.b=C.b4
v.c=w
v.d=B.b5()},
ih(d,e,f){var w=this
w.a0V(d,e,f)
w.aU5(e,f)
w.aUf(e,f)
w.aUe(e,f)},
aUe(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lN().Po(w.a,a1.r-a1.f)
u=$.bBW().Nl(a1.w,v,a1.r,!1,a1.f,!1)
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
p.seY(j.mR(0,i))}else{if(k==null)k=C.M
p.r=k.gt(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c6(p.r)
p.r=B.aG(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.Ee(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lN().Po(w.b,a1.y-a1.x)
u=$.bBW().Nl(a1.z,h,a1.y,!1,a1.x,!1)
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
q.seY(k.mR(0,i))}else{if(p==null)p=C.M
q.r=p.gt(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c6(q.r)
q.r=B.aG(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.Ee(n,m,d.a,f.d)}},
aU5(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.he(new B.K(0,0,0+w.a,0+w.b),this.b)},
aUf(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.li(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.J.gt(0)
r.seY(p.mR(0,s))}else{r.r=(q==null?C.M:q).gt(0)
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
v.seY(q.mR(0,s))}else{v.r=(r==null?C.M:r).gt(0)
v.seY(null)}o=n.e.e2()
j.drawRect(B.dS(s),o)
o.delete()}},
aUd(d,e,f){var w,v
this.a0V(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeW(d,e,f,w)
if(v.b.length!==0)this.aUk(d,e,f,w)},
aeW(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
n.seY(j.mR(0,i))}else{if(k==null)k=C.M
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
J.bh(r.save())
r.translate(h,g)
n=n.gOj().b
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
s.aeX(0,n,new B.r(h,o),k)}}},
aUk(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
n.seY(j.mR(0,i))}else{if(k==null)k=C.M
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
J.bh(r.save())
r.translate(f,e)
n=n.gOj().b
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
s.aeX(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dK(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_Y(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.M2.prototype={
gamt(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gamu(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamv(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gamr(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amP(d){var w,v=this,u=null,t=v.d,s=A.bDF(t.d),r=t.a
r=r.a&&A.bXH(r.b)?r.b:u
w=B.b([B.aD(u,v.c,C.p,u,u,new B.aB(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.aAd(w)
if(v.gamt())C.b.hB(w,s.$1(!0),new A.Bc(D.BM,t,new B.I(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.gamv())C.b.hB(w,s.$1(!0),new A.Bc(D.n2,t,new B.I(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.gamu())C.b.hB(w,s.$1(!0),new A.Bc(D.BN,t,new B.I(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.gamr())C.b.hB(w,s.$1(!0),new A.Bc(D.dW,t,new B.I(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
return w},
p(d){return B.jA(new A.aAc(this))}}
A.SS.prototype={
U(){return new A.ZP(new B.bp(null,x.eF))}}
A.ZP.prototype={
azz(){switch(this.a.c.a){case 0:return C.dU
case 1:return C.fj
case 2:return C.d6
case 3:return C.dE}},
aA4(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
azB(d){this.a.toString
return},
ap(){this.aF()
$.cK.x1$.push(this.ga5q())},
bc(d){this.bF(d)
$.cK.x1$.push(this.ga5q())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.aA4()
return B.BC(B.b46(0,B.aD(v.azz(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aek.prototype={
bo(d){return A.bXz(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2H.prototype={
ho(d){if(!(d.b instanceof B.hB))d.b=new B.hB(null,null,C.v)},
i0(d){if(this.B===C.al)return this.yw(d)
return this.aez(d)},
aMO(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
aah(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dH(d){var w=this.aag(d,B.hQ())
switch(this.B.a){case 0:return d.c5(new B.I(w.a,w.b))
case 1:return d.c5(new B.I(w.b,w.a))}},
aag(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.al?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ht(u,null)
break
case 1:q=B.ht(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aah(p)
t=Math.max(t,o.aMO(p))
m=r.aK$}return new A.bjZ(n<1/0?n:s,t)},
cE(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga7.call(p)),n=p.aag(o,B.mN()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c5(new B.I(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c5(new B.I(l,m))
p.gC(0)
p.gC(0)
break}w=p.aj$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.aah(r==null?B.U(B.a0("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aK$;++u}},
ej(d,e){return this.yx(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a5.sbh(0,null)
this.vn(d,e)},
l(){this.a5.sbh(0,null)
this.apK()}}
A.bjZ.prototype={}
A.aAe.prototype={}
A.k2.prototype={
gbt(){return[this.a,this.b]}}
A.oa.prototype={}
A.aj3.prototype={}
A.aj4.prototype={
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
A.aj5.prototype={}
A.UU.prototype={
l(){var w,v,u
for(w=this.X7$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.Bc.prototype={
goI(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d6
case 1:return C.dE
case 2:return C.dU
case 3:return C.fj}},
gb1y(){var w=this.d,v=A.bDF(w.d),u=A.bLj(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ah(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ah(0,new B.ai(u.a,0,u.c,0))}},
gajj(){var w=this.d,v=A.bLj(w.a),u=A.bDF(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aYC(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goI().c.d
if(o==null)o=$.lN().Po(d,f-e)
w=p.c
v=w!==D.n2
if((!v||w===D.dW)&&p.d instanceof A.ob){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bCS(u,d)
w=new B.j1(t,B.ak(t).i("j1<1>"))
s=w.gi3(w).eQ(0,new A.b14(u),x.W).fR(0)}else{r=$.bBW()
w=!v||w===D.dW
v=p.d
q=r.aXV(w?v.w:v.z,o,f,e)
v=B.oK(q,new A.b15(p,f,e,d),q.$ti.i("u.E"),x.W)
s=B.R(v,B.l(v).i("u.E"))}w=B.ak(s).i("ae<1,oa>")
w=B.R(new B.ae(s,new A.b16(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goI()
w=j.goI()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aD(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.n2
u=!v
t=!u||w===D.dW
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dW?C.G:C.al
q=B.b([],x.p)
if(w===D.BM||v)j.goI()
if(j.goI().c.a){v=!u||w===D.dW?r:j.goI().c.c
p=!u||w===D.dW?j.goI().c.c:r
o=j.gb1y()
n=!u||w===D.dW?C.al:C.G
j.gajj()
m=j.gajj()
l=!u||w===D.dW
k=j.d
l=l?k.f:k.x
u=!u||w===D.dW?k.r:k.y
q.push(B.aD(i,A.c3Y(new A.aAe(),n,j.aYC(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BN||w===D.dW)j.goI()
return new B.eb(t,i,i,B.c_p(q,C.k,s,i,C.e,C.H,0,i,i,C.aX),i)}}
A.a2W.prototype={
gbt(){return[this.a,this.b]}}
A.a76.prototype={
gbt(){return[this.a,this.b]}}
A.Og.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a78.prototype={
gacN(d){return!1},
gbt(){return[!1,!1,!1,!1]}}
A.aAK.prototype={}
A.aHc.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ajp.prototype={}
A.amO.prototype={}
A.amP.prototype={}
A.amW.prototype={}
A.Ma.prototype={
ih(d,e,f){}}
A.we.prototype={}
A.hA.prototype={
gdP(){return null},
gagY(){var w,v=this
B.bI()
B.bI()
B.bI()
w=v instanceof A.Of
if(w)return!0
return!(v instanceof A.Oc)&&!(v instanceof A.Ob)&&!(v instanceof A.Od)&&!(v instanceof A.Oa)&&!w&&!(v instanceof A.Oe)}}
A.a7c.prototype={
gdP(){return this.a.b}}
A.a7d.prototype={
gdP(){return this.a.b}}
A.a7e.prototype={
gdP(){return this.a.b}}
A.Ob.prototype={}
A.Oc.prototype={}
A.a7h.prototype={
gdP(){return this.a.b}}
A.Oe.prototype={}
A.Of.prototype={
gdP(){return this.a.b}}
A.a7b.prototype={
gdP(){return this.a.b}}
A.a7a.prototype={
gdP(){return this.a.b}}
A.Oa.prototype={
gdP(){return this.a.b}}
A.a7f.prototype={
gdP(){return this.a.gdP()}}
A.a7g.prototype={
gdP(){return this.a.gdP()}}
A.Od.prototype={
gdP(){return this.a.gdP()}}
A.H8.prototype={
ZP(d){this.V=d.b
this.W=d.c
this.a5=d.d},
agr(){var w=this,v=null,u=w.al=B.bEz(v,v)
u.ay=new A.aXh(w)
u.ch=new A.aXi(w)
u.CW=new A.aXj(w)
u.cy=new A.aXk(w)
u.cx=new A.aXl(w)
u=w.aJ=B.HX(v,-1,v)
u.B=new A.aXm(w)
u.a_=new A.aXn(w)
u.V=new A.aXo(w)
u=w.bE=B.a96(v,w.a5,v)
u.p3=new A.aXp(w)
u.p4=new A.aXq(w)
u.RG=new A.aXr(w)},
cE(){var w=x.k.a(B.M.prototype.ga7.call(this))
this.fy=new B.I(w.b,w.d)},
dH(d){return new B.I(d.b,d.d)},
kM(d){return!0},
n0(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bE
w===$&&B.a()
w.oG(d)
w=v.aJ
w===$&&B.a()
w.oG(d)
w=v.al
w===$&&B.a()
w.oG(d)}else if(x.gJ.b(d))v.la(new A.a7g(d))},
gNP(d){return new A.aXs(this)},
gNR(d){return new A.aXt(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdP()
v=w!=null?u.a_Q(w):null
u.V.$2(d,v)
u.a_=C.bc},
gLD(d){return this.a_},
gG9(){var w=this.au
w===$&&B.a()
return w},
aP(d){this.fv(d)
this.au=!0},
aI(d){this.au=!1
this.fk(0)},
$ijD:1}
A.PA.prototype={
U(){return new A.Xx(B.b([],x.r),B.B(x.S,x.J),new A.aNj(B.B(x.y,x.dj)),null,null)}}
A.Xx.prototype={
p(d){var w,v=this,u=v.a5s(),t=v.CW
t.toString
t=v.acj(t.av(0,v.gfl().gt(0)))
w=v.acj(u)
v.a.toString
return new A.M2(new A.a8Y(t,w,null),u,null)},
acj(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ak(w).i("ae<1,ei>")
w=B.R(new B.ae(w,new A.bk4(this,d),v),v.i("ax.E"))
return d.aSL(w,this.cy)},
a5s(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.VF(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aT_(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aSp(new A.FG(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAS(),t.c,t.d))}return r},
aAT(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagY())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.G(new A.bk2(v))
return}v.G(new A.bk3(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a5s(),new A.bk5(w)))}}
A.q8.prototype={
Yd(d,e,f){var w,v,u,t,s,r,q=B.am(d.f,e.f,f),p=B.am(d.r,e.r,f),o=B.am(d.w,e.w,f),n=B.am(d.x,e.x,f),m=B.am(d.y,e.y,f),l=B.am(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a77(B.a39(d.a.b,j.b,f),j.a)
w=A.bLg(d.at,e.at,f)
v=A.bLk(d.c,e.c,f)
u=A.bLm(d.d,e.d,f)
t=A.bNj(d.e,e.e,f)
s=A.kI(d.ch,e.ch,f,A.ccT(),x.cz)
s.toString
r=A.kI(d.CW,e.CW,f,A.ccS(),x.bO)
r.toString
u=A.bEb(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Wj(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bEb(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aT_(d,e,f,g){return this.Wj(null,null,d,e,f,g,null)},
aSp(d){var w=null
return this.Wj(w,d,w,w,w,w,w)},
aSL(d,e){var w=null
return this.Wj(d,w,w,w,w,w,e)},
gbt(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ei.prototype={
asp(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p6(n.a,new A.aNi())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
aed(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aNh(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aSw(d){return this.aed(d,null)},
aSy(d){return this.aed(null,d)},
gbt(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.PB.prototype={
gbt(){return[this.a]}}
A.a2P.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mV.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.M5.prototype={
gbt(){return[!1,this.b,this.c,!0]}}
A.z5.prototype={
gbt(){return[this.a,this.b,this.c]}}
A.aN7.prototype={
L(){return"LabelDirection."+this.b}}
A.a79.prototype={
gbt(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.FG.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8Z.prototype={
gbt(){return[4,C.eQ,16,D.y9,0,120,A.ccV(),!1,!1,!1,0,C.K,A.ccU()]}}
A.ni.prototype={
gbt(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qB.prototype={}
A.rW.prototype={
gbt(){return[this.a,this.b,C.bk,C.z,null]}}
A.u_.prototype={
gbt(){return[this.a,this.b]}}
A.HA.prototype={
gbt(){return[this.a]}}
A.PC.prototype={}
A.zU.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Yd(v,w,d)}}
A.ajc.prototype={}
A.ajd.prototype={}
A.ajr.prototype={}
A.amQ.prototype={}
A.amT.prototype={}
A.aoH.prototype={}
A.aoI.prototype={}
A.aoJ.prototype={}
A.aoL.prototype={}
A.aoM.prototype={}
A.aoN.prototype={}
A.aoO.prototype={}
A.ats.prototype={}
A.av9.prototype={}
A.aNj.prototype={
VF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yN
u=new A.zZ(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zV(s,r,q,t,!0)}w=null
try{w=C.b.p6(d,new A.aNk())}catch(p){return D.yN}v=null
try{v=C.b.p6(w.a,new A.aNl())}catch(p){return D.yN}o=v.a
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
if(f<m)m=f}e=new A.zV(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zV.prototype={
gbt(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.aoK.prototype={}
A.aNm.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacN(0)){v=a3.b
u=v.a
v=v.b
$.aq()
a3.a.iP(new B.K(0,-40,0+(u+40),-40+(v+40)),B.b5())
a3.aRp(new B.K(0,0,u,v))}d.a0U(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aUb(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aU7(a3,q,a4)
d.aUc(a3,q,a4)
d.an7(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.S(o)
if(n.gq(o)!==p.length)throw B.h(B.e3("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vX(q,i,j,k))}}d.aUj(a3,s,a4)
if(w.gacN(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.R(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aUh(a2,a3,v,f,new A.HA(g),a4)}},
aU7(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bDE(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.a_p(o,e,u,f)
s=p.akx(o,e,t,u,f)
r=p.a_r(o,e,t,u,f,!0)
q=p.akw(o,e,t,u,f)
p.aUa(d,s,p.a_o(o,e,t,u,f,!0),f,e)
p.aU4(d,q,r,f,e)
p.aU8(d,t,e)
p.aU6(d,t,e,f)}},
aUb(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bDE(a5.a),a8=A.bDE(a6.a)
if(a7.length!==a8.length)throw B.h(B.bQ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bY.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ak(n).i("cJ<1>")
l=B.R(new B.cJ(n,m),m.i("ax.E"))
k=a2.a_p(a3,a5,o,b2)
j=a2.a_q(a3,a6.aSy(l),l,b2,k)
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
a0.seY(v.mR(0,new B.K(n,m,e,d)))}else{a0.r=(r?C.M:w).gt(0)
a0.seY(null)}$.aq()
a1=new B.mY(C.dG,C.bm,C.ej,C.eF,C.e7).e2()
n=B.dS(new B.K(0,0,t,s))
m=$.bY.b
if(m===$.bY)B.U(B.vV(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e2()
n=j.e
a4.drawPath((n==null?j.e=new B.mZ(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aUc(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_v(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fZ)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dK(q.b,w,f)
n.$4(q,p/v*100,e,r).aeV(s,q,new B.r(p,o))}}},
aUj(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fX(b3,new A.aNp())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.a_v(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dK(j.b,w,b4)
f=i.b
e=f.a
d=B.cu()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rV(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lJ(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lJ(q.$2(m,k))))
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
f.seY(a6.mR(0,b0))}else{if(a4==null)a4=C.M
f.r=a4.gt(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c6(f.r)
f.r=B.aG(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.Ee(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rV(d.a))
f.aeV(t,j,new B.r(h,g))}}},
a_q(d,e,f,g,h){var w=this.aky(d,e,f,g,h)
return w},
a_p(d,e,f,g){return this.a_q(d,e,f,g,null)},
aky(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cr($.aq().r,C.an,null,null,B.b([],x.v)):a5,f=J.S(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dK(f.h(a3,0).b,a1,a4)
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
s=new B.N6(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_r(d,e,f,g,h,i){var w=this,v=B.NV(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aB(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,s))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dK(u.h(g,0).b,d,h)))
v.aB(new B.pG())
return v},
akx(d,e,f,g,h){return this.a_r(d,e,f,g,h,!1)},
a_o(d,e,f,g,h,i){var w=this,v=B.NV(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aB(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aB(new B.cw(t,0))
v.aB(new B.cw(w.ff(u.h(g,0).a,d,h),w.dK(u.h(g,0).b,d,h)))
v.aB(new B.pG())
return v},
akw(d,e,f,g,h){return this.a_o(d,e,f,g,h,!1)},
aUa(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bEy(s,q.b,q.c,new B.K(v,u,t,w.b))
d.a.i2(e,r.r)},
aU4(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bEy(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i2(e,r.r)},
aU8(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.NX(B.NV(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iJ:C.ej
u.e=C.eF
u.r=v.gt(0)
u.seY(null)
u.c=f.x
u.r=v.gt(0)
$.lN()
u.z=new B.A2(C.aA,w.c*0.57735+0.5)
d.a.i2(A.aDH(e,f.cy).ed(w.b),this.f)},
aU6(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iJ:C.ej
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
A.bEy(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c1R(t)
d.a.i2(A.aDH(e,f.cy),s.f)},
aUh(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bRG(b1),b3=J.S(b2)
if(b3.gq(b2)!==b1.length)throw B.h(B.e3("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lN().a_X(b4,u.b)
s=u.a
r=w.k(0,C.j9)?new B.kB(1):w
q=new B.tV(new B.fx(s,a8,a8,C.bc,a8,a8,a8,a8,a8,a8,t),C.bk,C.z,r,a8,a8,a8,a8,C.bB,a8)
q.ahh(120)
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
i=a7.a_Y(b3,l,D.y9,0)
b3=i+l
w=j+k
h=new B.b3(4,4)
g=B.GS(new B.K(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bRF(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lN().La(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lN().La(new B.I(t,w),0)
if(!C.K.k(0,C.K)){s=a7.Q
s===$&&B.a()
s.r=C.J.gt(0)
s.c=0}b5.WV(0,new A.aNn(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c4z(q.r,q.w)
A:{if(D.EP===a5){a6=a3
break A}if(D.EQ===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.WV(0,new A.aNo(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_v(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xz(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akZ(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fX(t,new A.aNq())
return t.length===0?null:t},
akZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fZ))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dK(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qB(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vX.prototype={}
A.a8Y.prototype={
bo(d){var w,v=this.e,u=B.bE(d,null,x.w).w.gcQ(),t=new A.aNm()
t.a25()
$.aq()
w=B.b5()
w.b=C.b4
t.f=w
w=B.b5()
w.b=C.bm
t.r=w
w=B.b5()
w.b=C.b4
t.w=w
w=B.b5()
w.b=C.bm
w.r=C.M.gt(0)
w.a=D.a0L
t.x=w
w=B.b5()
w.b=C.b4
w.r=C.J.gt(0)
t.y=w
w=B.b5()
w.b=C.bm
w.r=C.q.gt(0)
t.z=w
w=B.b5()
w.b=C.b4
w.r=C.M.gt(0)
w.c=1
t.Q=w
t=new A.ad4(this.d,v,u,t,d,C.bc,new B.bv(),B.aO(x.j))
t.bl()
t.ZP(v.cx)
t.agr()
return t},
by(d,e){e.sip(0,this.d)
e.sZz(this.e)
e.scQ(B.bE(d,null,x.w).w.gcQ())
e.B=d
e.bd()}}
A.ad4.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZz(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1E(d.cx)
w.bd()},
scQ(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdB(0),s=t.a
J.bh(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.h0.ih(w,new A.a3n(t,v),new A.we(u.aE,u.i9,u.d3,x.C))
s.restore()},
a_Q(d){var w=this,v=w.gC(0)
return new A.PC(w.h0.Xz(d,v,new A.we(w.aE,w.i9,w.d3,x.C)))}}
A.OF.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a3n.prototype={
aRp(d){this.a.a.clipRect(B.dS(d),$.mO()[1],!0)
return null},
af2(d,e){d.aO(this.a,e)},
WV(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bh(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lN()
s.Zx(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ee(d,e,f,g){var w=new B.cr($.aq().r,C.an,null,null,B.b([],x.v))
w.aB(new B.fk(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.i2(A.aDH(w,g),f)}}
A.zZ.prototype={
gbt(){return[this.a]}}
A.aoV.prototype={}
A.a3x.prototype={}
A.b4y.prototype={
La(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aZb(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.b3(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.b3(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.b3(v,v)
s=d.d
return new B.da(w,u,t,s.a>v||s.b>v?new B.b3(v,v):s)},
aZc(d,e){var w,v
if(d==null)return D.a0X
w=d.b
v=e/2
return d.aSB(w>v?v:w)},
Po(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b1j(w)},
b1j(d){if(d<1)return this.aLg(d)
return this.a9j(d)},
aLg(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a9j(d*q)/q},
a9j(d){var w,v=C.f.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akO(d){if(d>=1)return 1
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
a_X(d,e){var w,v,u=d.N(x.f0)
if(u==null)u=C.jf
w=e.a?u.w.c8(e):e
v=B.ba(d,C.w0)
v=v==null?null:v.ay
return v===!0?w.c8(C.mJ):w},
akF(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qD)","D(pU)","G(G,pU)","D(eG)","~(w,fU)","G(ei,w)","vq(z)","G(G,qD)","bV(G,tY)","pV(G)","T<~>()","w(qB,qB)","G(w0)","Jw(os)","qD(@)","w0(@)","rp(z)","wZ(@)","J5(C,bK)","Ks(ov)","Jq(ot)","Dt(@)","ei(G)","vr(dP<vr>)","a7(G,tY)","F3(dP<aI2>)","m1(wP<m1>)","pU(@)","G(wZ)","xh(C,bK)","BP(z)","~()","T<ov>(c4<ov>)","~(hA,M7?)","yc(@)","G(iv)","D(fU)","~(w,iv)","~(@)","k2(oa)","c(oa)","k2(bB<w,G>)","k2(G)","oa(k2)","~(hA,PC?)","ei(ei)","T<os>(c4<os>)","zU(@)","T<ot>(c4<ot>)","u_(w)","vs(eG,G,ei,w)","rW(ni)","D(ei)","w(w,w,G)","G(fU)","~(xj)","z1(ew<C?>)","fU(fU,fU,G)","iv(iv,iv,G)","mU(mU,mU,G)","DM?(fU,w,iv,w)","F(fU)","c(G,tY)","eG(eG,eG,G)","D(G)","nf(nf,nf,G)","nE(nE,nE,G)","l1(l1,l1,G)","lv(lv,lv,G)","i(l1)","i(lv)","ei(ei,ei,G)","mV(mV,mV,G)","vs(eG,G,ei,w{size:G?})","D(eG,ei)","G(r,r)","v<u_>(ei,v<w>)","xm(C,bK)","v<rW>(v<ni>)","F(ni)","w(vX,vX)"])
A.aHY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cm(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.aj(k==null?"":k)
w=l.h(0,"booking_date")
w=B.dq(J.aj(w==null?"":w))
if(w==null)w=B.bw(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.aj(v==null?"":v)
u=l.h(0,"account_name")
u=J.aj(u==null?"":u)
t=l.h(0,"direction")
t=J.aj(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.aj(s)
r=A.byG(l.h(0,"amount_net"))
q=A.byG(l.h(0,"amount_tax"))
p=A.byG(l.h(0,"amount_gross"))
o=A.byG(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.aj(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.aj(m)
l=l.h(0,"source_account_code")
return new A.pU(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.aj(l))},
$S:z+27}
A.aHZ.prototype={
$1(d){var w=B.cm(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qD(J.aj(v==null?"":v),A.po(w.h(0,"revenue_net")),A.po(w.h(0,"expense_net")),A.po(w.h(0,"result_net")))},
$S:z+14}
A.aI_.prototype={
$1(d){var w,v,u,t=B.cm(x.f.a(d),x.N,x.z),s=B.al(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.aj(r==null?"unbekannt":r)
w=B.al(t.h(0,"code"))
v=A.po(t.h(0,"gross"))
u=B.aZ(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.w0(s,r,w,v,u,A.po(t.h(0,"avg_basket")))},
$S:z+15}
A.aI0.prototype={
$1(d){var w,v=B.cm(x.f.a(d),x.N,x.z),u=B.al(v.h(0,"product_id")),t=v.h(0,"name")
t=J.aj(t==null?"unbekannt":t)
w=B.aZ(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wZ(u,t,w,A.po(v.h(0,"gross")))},
$S:z+17}
A.aIj.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.S(d)
v=w.h(d,"code")
v=J.aj(v==null?"":v)
u=w.h(d,"name")
u=J.aj(u==null?"":u)
t=w.h(d,"direction")
return new A.Dt(v,u,J.aj(t==null?"expense":t),A.uI(w.h(d,"net")),A.uI(w.h(d,"tax")),A.uI(w.h(d,"gross")))},
$S:z+21}
A.bzw.prototype={
$1(d){return new A.vr(d.ak($.bA(),x.A))},
$S:z+23}
A.bzx.prototype={
$1(d){return new A.F3(d.ak($.bWn(),x.D))},
$S:z+25}
A.bBu.prototype={
$1(d){return E.aI1()},
$S:z+26}
A.bzy.prototype={
$1(d){var w=d.ak($.r4(),x.P)
return d.ak($.a1P(),x.a).GC(w)},
$S:z+32}
A.bzu.prototype={
$1(d){var w=d.ak($.r4(),x.P)
return d.ak($.a1P(),x.a).Gn(w)},
$S:z+46}
A.bzv.prototype={
$1(d){var w=d.ak($.r4(),x.P)
return d.ak($.a1P(),x.a).Gx(w)},
$S:z+48}
A.bzt.prototype={
$1(d){return this.akn(d)},
akn(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bA(),x.A).fd("finance_balance_kpis",t),$async$$1)
case 3:s=r.cm(q.a(f),x.N,t)
if(!J.e(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aHX.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1P(),x.a).pL(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHW.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aw(0,$.a1P(),x.a).Me(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfZ.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbq()
r=$.bCq()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c0(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfU.prototype={
$1(d){var w=this.a
return w.G(new A.bfT(w,d))},
$S:z+55}
A.bfT.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bfV.prototype={
$0(){var w=this.a
return w.G(new A.bfS(w))},
$S:0}
A.bfS.prototype={
$0(){return this.a.x=null},
$S:0}
A.bfY.prototype={
$0(){return F.k6},
$S:88}
A.bfX.prototype={
$2(d,e){return new A.xm("Buchungen konnten nicht geladen werden: "+B.f(d),C.R,F.lr,null)},
$S:z+77}
A.bfW.prototype={
$1(d){return new A.Jw(d,this.a.atw(d.b),null)},
$S:z+13}
A.bfR.prototype={
$1(d){var w=this.a
if(w.gT_()!=null&&d.c!==w.gT_())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bfN.prototype={
$0(){return this.a.e.$1(D.Bn)},
$S:0}
A.bfO.prototype={
$0(){return this.a.e.$1(D.a_P)},
$S:0}
A.bfP.prototype={
$0(){return this.a.e.$1(D.a_Q)},
$S:0}
A.bfQ.prototype={
$0(){return this.a.e.$1(D.a_R)},
$S:0}
A.bkf.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bkg.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bkh.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bki.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bkj.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bkk.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bkl.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aIh.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bCr()
if(s.e==null)B.U(B.a0(y.b))
s.gcg().c0(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aI8.prototype={
$0(){return this.a.K5(this.b,this.c)},
$S:0}
A.aI9.prototype={
$0(){return this.a.BT(this.b,this.c)},
$S:0}
A.aIa.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dD(B.dy(new A.aI7(),null,w),w)},
$S:0}
A.aI7.prototype={
$1(d){return F.DG},
$S:z+16}
A.aIb.prototype={
$0(){return B.q_(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aIc.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dD(B.dy(new A.aI6(),null,w),w)},
$S:0}
A.aI6.prototype={
$1(d){return D.aaA},
$S:z+6}
A.aId.prototype={
$0(){var w=this
return w.a.BU(w.b,w.c,w.d)},
$S:0}
A.aIg.prototype={
$0(){return F.k6},
$S:88}
A.aIf.prototype={
$2(d,e){return new A.J5(B.f(d),null)},
$S:z+18}
A.aIe.prototype={
$1(d){return new A.Ks(d,null)},
$S:z+19}
A.aI5.prototype={
$1(d){var w=null,v=this.a,u=$.cQ()
v=B.d("Die Finanzauswertung f\xfcr "+u.a4(v.a)+" \u2013 "+u.a4(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.fC(B.b([B.cL(C.bt,w,w,new A.aI3(u),w,w),B.dc(F.kp,new A.aI4(u),B.dL(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mL)},
$S:43}
A.aI3.prototype={
$0(){B.aI(this.a,!1).c7(!1)
return null},
$S:0}
A.aI4.prototype={
$0(){B.aI(this.a,!1).c7(!0)
return null},
$S:0}
A.bnC.prototype={
$0(){var w=this.a.aw(0,$.r4().ghR(),x.V),v=E.aI1()
w.uu(0,v)
return v},
$S:0}
A.bnD.prototype={
$0(){var w=this.a.aw(0,$.r4().ghR(),x.V),v=new B.aW(Date.now(),0,!1),u=new E.m1(B.bw(B.aV(v),1,1,0,0,0,0),v)
w.uu(0,u)
return u},
$S:0}
A.bnE.prototype={
$0(){return this.a.Jp(this.b,this.c)},
$S:0}
A.bnB.prototype={
$2(d,e){return new B.p5(B.W(d).aRY(B.W(d).ax.aSQ(C.h,C.n)),e,null)},
$S:1034}
A.buw.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cA(),p=A.Pn(!1,C.lw,"Umsatz 7 %",q.a4(r.a),u),o=A.Pn(!1,C.lw,"Umsatz 19 %",q.a4(r.b),u),n=A.Pn(!0,D.acl,"Umsatz netto",q.a4(r.c),u),m=r.d
m=A.Pn(!1,D.ack,"Aufwand",E.bGz(m,E.bzD(t,"",m)),E.bRp(t,E.bzD(t,"",m)))
w=r.e
v=q.a4(w)
return E.aKv(1.7,B.b([p,o,n,m,A.Pn(!0,C.ls,"Ergebnis",v,w<0?C.R:C.am),A.Pn(!1,C.fz,"USt-Saldo",q.a4(r.f-r.r),u)],x.p),s,12,12,C.iw,!0)},
$S:142}
A.bux.prototype={
$0(){var w=x.z
return B.aI(this.a,!1).dD(B.dy(new A.buv(this.b),null,w),w)},
$S:0}
A.buv.prototype={
$1(d){return new A.vq(this.a.a,null)},
$S:z+6}
A.aN6.prototype={
$0(){return D.axB},
$S:88}
A.aN5.prototype={
$2(d,e){var w=null
return B.b4(C.R,B.d("KPIs konnten nicht geladen werden: "+B.f(d),w,w,w,w,B.t(C.h,13,C.j),w,w,w),C.fo,w,C.y,w,w,3)},
$S:168}
A.aN4.prototype={
$1(d){return new A.Jq(d,null)},
$S:z+20}
A.bjQ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cA(),i=j.a4(k.c),h=l.w,g=l.d,f=B.ak(g).i("ae<1,G>"),e=f.i("ax.E"),d=B.R(new B.ae(g,new A.bjF(),f),e)
i=A.jW(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a4(r.b)
w=B.R(new B.ae(g,new A.bjG(),f),e)
d=A.jW(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a4(k.e)
w=B.R(new B.ae(g,new A.bjH(),f),e)
k=A.jW(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aa(h.b,1)
v=B.R(new B.ae(g,new A.bjI(),f),e)
w=A.jW(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aa(h.a,1)
u=B.R(new B.ae(g,new A.bjJ(),f),e)
v=A.jW(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aa(r.c,1)
t=B.R(new B.ae(g,new A.bjK(),f),e)
u=A.jW(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aa(h.c,1)
s=B.R(new B.ae(g,new A.bjL(),f),e)
t=A.jW(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a4(h.d)
s=B.R(new B.ae(g,new A.bjM(),f),e)
h=A.jW(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a4(l.r.d)
m=B.R(new B.ae(g,new A.bjN(m),f),e)
m=A.jW(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a4(l)
l=B.R(new B.ae(g,new A.bjO(l),f),e)
l=A.jW(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aa(j,1)
j=B.R(new B.ae(g,new A.bjP(j),f),e)
return E.aKv(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jW(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iw,!0)},
$S:142}
A.bjF.prototype={
$1(d){return d.b},
$S:z+0}
A.bjG.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bjH.prototype={
$1(d){return d.d},
$S:z+0}
A.bjI.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjJ.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bjK.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bjL.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bjM.prototype={
$1(d){return d.d},
$S:z+0}
A.bjN.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bjO.prototype={
$1(d){return this.a},
$S:z+0}
A.bjP.prototype={
$1(d){return this.a},
$S:z+0}
A.bjR.prototype={
$0(){return A.bGu(this.b,1.45,new A.Vl(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bjS.prototype={
$0(){return A.bGu(this.b,1.6,new A.VC(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.byB.prototype={
$1(d){var w=this,v=null,u=B.ar(16),t=x.p,s=B.b([B.a9(B.b([B.an(B.d(w.a,v,v,v,v,B.bD(C.h,18,C.r),v,v,v),1),B.eW(v,v,D.aeZ,v,v,new A.byA(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.e,C.i,0,v,v)],t)
C.b.H(s,B.b([B.d(w.b,v,v,v,v,B.t(C.l,12,C.aF),v,v,v),C.D],t))
s.push(C.t)
s.push(B.bP(new B.mT(w.c,w.d,v),v,17976931348623157e292))
return B.a6p(v,C.q,new B.ab(C.ap,B.a3(s,C.x,C.e,C.H),v),v,v,v,C.fv,C.vl,v,new B.d6(u,C.K),v)},
$S:1035}
A.byA.prototype={
$0(){return B.aI(this.a,!1).eV()},
$S:0}
A.bjT.prototype={
$0(){var w=this.a,v=B.ag(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bGu(this.b,2.4,new A.a_0(w.w,w.y,w.z,null),C.b.bX(u," \xb7 "),v)
return null},
$S:0}
A.btv.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.btw.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.btx.prototype={
$1(d){return A.aNh(null,1.4,null,C.R,0.35,D.ak6,D.EG,null,!1,!1,!1,!1,D.Gh,!1,10,D.Z5,!0,C.lN,B.b([new A.eG(0,d),new A.eG(this.a,d)],x.U))},
$S:z+22}
A.b90.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b92.prototype={
$2(d,e){var w=null
return B.d(this.a.aMC(d),w,w,w,w,B.t(C.l,10,C.C),w,w,w)},
$S:z+24}
A.b93.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vu
return new B.ab(C.ld,B.d(C.c.cR(this.a[v].a,5),w,w,w,w,B.t(C.l,9,C.C),w,w,w),w)},
$S:z+8}
A.b91.prototype={
$1(d){return D.aaF},
$S:z+9}
A.ba3.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba4.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.ba5.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.ba6.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vu
return new B.ab(C.ld,B.d(this.a[v],w,w,w,w,B.t(C.h,12,C.r),w,w,w),w)},
$S:z+8}
A.bkz.prototype={
$1(d){return d.d},
$S:z+12}
A.bkA.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bvR.prototype={
$1(d){return d.d},
$S:z+28}
A.bvS.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b6V.prototype={
$0(){return D.axJ},
$S:88}
A.b6U.prototype={
$2(d,e){return new A.xh("Bilanzdaten nicht verf\xfcgbar: "+B.f(d),null)},
$S:z+29}
A.b6T.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.b4(m,B.a3(B.b([B.d("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.t(C.h,14,C.C),m,m,m),C.D,B.d("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.t(C.l,12.5,C.j),m,m,m),C.t,B.ji(C.c8,B.b([B.ev(C.yG,D.aMv,new A.b6N(w,v),m),B.ev(D.aew,D.aLe,new A.b6O(w,v),m)],u),C.d3,8,8)],u),C.x,C.e,C.i),C.a5,m,C.y,m,m,3)}w=new A.b6W(d)
t=C.b.f1(n.a.e.d,0,new A.b6P())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jA(new A.b6Q(new A.b6X(w),r,w,s))
v=J.S(d)
u=B.f(v.h(d,"as_of"))
v=J.e(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a3(B.b([w,C.D,B.a9(B.b([B.an(B.d("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.t(C.l,11,C.j),m,m,m),1),B.lu(D.afX,D.aLE,new A.b6R(q,p),m),B.lu(D.aft,D.aLm,new A.b6S(q,p,d),m)],o),C.k,m,C.e,C.i,0,m,m)],o),C.aa,C.e,C.i)},
$S:225}
A.b6N.prototype={
$0(){return A.axO(this.a,this.b,null)},
$S:0}
A.b6O.prototype={
$0(){return A.axL(this.a,this.b)},
$S:0}
A.b6W.prototype={
$1(d){var w=B.aZ(J.P(this.a,d))
return w==null?null:w},
$S:1036}
A.b6X.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aa(v,1)
w=B.ag(w,".",",")+" %"}return w},
$S:28}
A.b6P.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b6Q.prototype={
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
return E.aKv(p,B.b([n,m,l,o,w,A.jW(s,s,!1,"Bilanzsumme",!1,"EK "+u.a4(t.d),s,s,s,C.ig,v)],x.p),q,12,12,C.iw,!0)},
$S:142}
A.b6R.prototype={
$0(){return A.axL(this.a,this.b)},
$S:0}
A.b6S.prototype={
$0(){return A.axO(this.a,this.b,this.c)},
$S:0}
A.byz.prototype={
$1(d){return new A.BP(this.a,new A.byy(this.b),this.c,null)},
$S:z+30}
A.byy.prototype={
$0(){var w=this.a,v=$.bCp()
if(w.e==null)B.U(B.a0(y.b))
w.gcg().c0(v)},
$S:0}
A.b6H.prototype={
$0(){},
$S:0}
A.b6I.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b6J.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b6L.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.o_(u.b,B.bw(2024,1,1,0,0,0,0),null,r,new B.aW(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.G(new A.b6K(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b6K.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b6M.prototype={
$0(){return B.aI(this.a,!1).eV()},
$S:0}
A.b6Y.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b6Z.prototype={
$1(d){return new A.yc(x.B.a(d),this.a.a.r)},
$S:z+34}
A.aAv.prototype={
$1(d){return d.e},
$S:z+35}
A.aAw.prototype={
$2(d,e){return d+e},
$S:49}
A.aAy.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.aAA.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.aAB.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.af2(v.d,v.e)},
$S:0}
A.aAd.prototype={
$1(d){return 0},
$S:1037}
A.aAc.prototype={
$2(d,e){return B.f0(C.c0,this.a.amP(e),C.o,C.bo,null)},
$S:1038}
A.b12.prototype={
$1(d){return d.a},
$S:z+39}
A.b13.prototype={
$1(d){return d.b},
$S:z+40}
A.b14.prototype={
$1(d){return new A.k2(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b15.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.n2||v===D.dW))t=1-t
return new A.k2(d,t*w.d)},
$S:z+42}
A.b16.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goI(),p=d.a
r.goI()
r=$.lN()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aa(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aa(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aa(v/1000,1)
t="K"}else{u=C.d.aa(v,r.akO(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.oa(d,q.c.b.$2(p,new A.tY(u+t,s.e)))},
$S:z+43}
A.aXh.prototype={
$1(d){this.a.la(new A.a7c(d))},
$S:170}
A.aXi.prototype={
$1(d){this.a.la(new A.a7d(d))},
$S:44}
A.aXj.prototype={
$1(d){this.a.la(new A.a7e(d))},
$S:31}
A.aXk.prototype={
$0(){this.a.la(D.a2M)},
$S:0}
A.aXl.prototype={
$1(d){this.a.la(new A.Oc())},
$S:48}
A.aXm.prototype={
$1(d){this.a.la(new A.a7h(d))},
$S:45}
A.aXn.prototype={
$0(){this.a.la(D.a2N)},
$S:0}
A.aXo.prototype={
$1(d){this.a.la(new A.Of(d))},
$S:91}
A.aXp.prototype={
$1(d){this.a.la(new A.a7b(d))},
$S:173}
A.aXq.prototype={
$1(d){this.a.la(new A.a7a(d))},
$S:174}
A.aXr.prototype={
$1(d){return this.a.la(new A.Oa(d))},
$S:175}
A.aXs.prototype={
$1(d){return this.a.la(new A.a7f(d))},
$S:67}
A.aXt.prototype={
$1(d){return this.a.la(new A.Od(d))},
$S:60}
A.bk4.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aSw(w==null?B.b([],x.t):w)},
$S:z+45}
A.bk2.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.bk3.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.R(q,x.dw)
C.b.fX(w,new A.bk1())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.HA(w))},
$S:0}
A.bk1.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.bk5.prototype={
$1(d){return new A.zU(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aNi.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.bzk.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bLl(t?A.bGe(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.u_(w,new A.z5(!0,A.bH6(),new A.bzj(v)))},
$S:z+49}
A.bzj.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c_n(A.bGe(d,e,f),w,A.c8n(d,e,f))},
$S:z+50}
A.bzh.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j9(v,v,u==null?D.dy:u,v,v,v,v,v,v,v,v,14,v,v,C.C,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rW(C.d.j(d.b),w)},
$S:z+51}
A.aNk.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aNl.prototype={
$1(d){return!d.k(0,D.fZ)},
$S:z+3}
A.aNp.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+80}
A.aNn.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aNo.prototype={
$0(){this.a.af2(this.b,this.c)},
$S:0}
A.aNq.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.aAo.prototype={
$1(d){return d.gdu(0)},
$S:z+54}
A.aAp.prototype={
$2(d,e){return d+e},
$S:49}
A.aAs.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.ak(v).i("j1<1>")).aD(0,new A.aAt(w,this.a/(u+1),this.c))},
$S:0}
A.aAt.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.aAq.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.aAr.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aKu.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aDI.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.M1.prototype
w.a0U=w.ih
w.an7=w.aUd
w.an8=w.aeW
w=A.UU.prototype
w.apK=w.l
w=A.Ma.prototype
w.a0V=w.ih
w=A.H8.prototype
w.a1E=w.ZP})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cc_","c_j",56)
var q
v(q=A.UW.prototype,"gaGm","aGn",31)
v(q,"gaFj","IF",10)
v(q,"gaG5","IQ",10)
u(A.UX.prototype,"gatN","atO",33)
t(A,"caM",3,null,["$3"],["bXB"],57,0)
t(A,"caN",3,null,["$3"],["bXC"],58,0)
t(A,"caO",3,null,["$3"],["bXD"],59,0)
t(A,"caQ",4,null,["$4"],["cbD"],60,0)
w(A,"caP","cbC",61)
s(A,"bGy","cbE",62)
t(A,"caH",3,null,["$3"],["c_o"],63,0)
w(A,"a1g","ce3",64)
w(A,"axR","cbH",9)
t(A,"caJ",3,null,["$3"],["c0a"],65,0)
t(A,"caL",3,null,["$3"],["c5s"],66,0)
t(A,"caI",3,null,["$3"],["c09"],67,0)
t(A,"caK",3,null,["$3"],["c5r"],68,0)
w(A,"cll","c08",69)
w(A,"clm","c5q",70)
r(A.ZP.prototype,"ga5q","azB",38)
u(A.Xx.prototype,"gaAS","aAT",44)
t(A,"ccT",3,null,["$3"],["c0C"],71,0)
t(A,"ccS",3,null,["$3"],["bXE"],72,0)
w(A,"ccW","ce4",3)
t(A,"bS5",4,null,["$5$size","$4"],["bQs",function(d,e,f,g){return A.bQs(d,e,f,g,null)}],73,0)
s(A,"bH6","ce2",74)
s(A,"bS6","cat",75)
s(A,"bS9","cbK",76)
s(A,"bS8","cbG",5)
s(A,"bS7","cbF",5)
w(A,"ccV","bRG",78)
w(A,"ccU","bRF",79)
t(A,"a1n",3,null,["$3"],["ccR"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.A,[A.a8L,A.amI,A.xd,A.Jw,A.ajJ,A.xm,A.aih,A.anV,A.K2,A.Ks,A.aif,A.J5,A.Jq,A.anb,A.aoy,A.Wc,A.a_0,A.Vl,A.VC,A.ap4,A.al3,A.CV,A.av6,A.xh,A.M2,A.Bc])
u(B.C,[A.vr,A.F3,A.bo,A.ajp,A.ajf,A.ajh,A.aji,A.aj7,A.amW,A.ajl,A.ajj,A.aAK,A.ava,A.aAx,A.ajg,A.Ma,A.a7P,A.tY,A.atu,A.att,A.aj6,A.amV,A.eG,A.amS,A.amU,A.arw,A.anM,A.avW,A.amT,A.amp,A.amR,A.aAb,A.bjZ,A.aAe,A.aj3,A.oa,A.amO,A.amP,A.we,A.hA,A.aoI,A.aoL,A.ajc,A.ajr,A.ajd,A.amQ,A.aoO,A.aoM,A.av9,A.ats,A.aNj,A.aoK,A.vX,A.a3n,A.aoV,A.a3x,A.b4y])
u(B.vn,[A.pU,A.os,A.qD,A.w0,A.wZ,A.aD5,A.aEg,A.ot,A.Dt,A.ov])
u(B.of,[A.aHY,A.aHZ,A.aI_,A.aI0,A.aIj,A.bzw,A.bzx,A.bBu,A.bzy,A.bzu,A.bzv,A.bzt,A.bfU,A.bfW,A.bfR,A.bkf,A.bkh,A.bkj,A.bkl,A.aI7,A.aI6,A.aIe,A.aI5,A.buv,A.aN4,A.bjF,A.bjG,A.bjH,A.bjI,A.bjJ,A.bjK,A.bjL,A.bjM,A.bjN,A.bjO,A.bjP,A.byB,A.btx,A.b91,A.ba3,A.ba4,A.bkz,A.bvR,A.b6T,A.b6W,A.b6X,A.byz,A.b6Z,A.aAv,A.aAy,A.aAd,A.b12,A.b13,A.b14,A.b15,A.b16,A.aXh,A.aXi,A.aXj,A.aXl,A.aXm,A.aXo,A.aXp,A.aXq,A.aXr,A.aXs,A.aXt,A.bk4,A.bk5,A.aNi,A.bzk,A.bzj,A.bzh,A.aNk,A.aNl,A.aAo,A.aDI])
t(A.z1,B.fP)
u(B.yt,[A.aHX,A.aHW,A.bfZ,A.bfT,A.bfV,A.bfS,A.bfY,A.bfN,A.bfO,A.bfP,A.bfQ,A.aIh,A.aI8,A.aI9,A.aIa,A.aIb,A.aIc,A.aId,A.aIg,A.aI3,A.aI4,A.bnC,A.bnD,A.bnE,A.bux,A.aN6,A.bjR,A.bjS,A.byA,A.bjT,A.b6V,A.b6N,A.b6O,A.b6R,A.b6S,A.byy,A.b6H,A.b6I,A.b6J,A.b6L,A.b6K,A.b6M,A.b6Y,A.aAB,A.aXk,A.aXn,A.bk2,A.bk3,A.aNn,A.aNo,A.aAs])
t(A.vq,B.b7)
u(B.J4,[A.xj,A.aAm,A.afJ,A.DL,A.aHc,A.aN7,A.OF])
t(A.amJ,B.ve)
u(B.yu,[A.bfX,A.bkg,A.bki,A.bkk,A.aIf,A.bnB,A.buw,A.aN5,A.bjQ,A.btv,A.btw,A.b90,A.b92,A.b93,A.ba5,A.ba6,A.bkA,A.bvS,A.b6U,A.b6P,A.b6Q,A.aAw,A.aAA,A.aAc,A.bk1,A.aNp,A.aNq,A.aAp,A.aAt,A.aAq,A.aAr,A.aKu])
u(B.yB,[A.z2,A.aql,A.a8M,A.ajb])
u(B.H,[A.BP,A.SS])
u(B.Y,[A.UW,A.ZP])
u(B.Fv,[A.M6,A.PA])
u(B.uY,[A.UX,A.Xx])
t(A.a2W,A.ajp)
t(A.aj2,A.a2W)
t(A.a2G,A.aj2)
u(A.a2G,[A.aje,A.aoJ])
t(A.ob,A.aje)
t(A.fU,A.ajf)
t(A.iv,A.ajh)
t(A.mU,A.aji)
t(A.a2N,A.aj7)
t(A.Og,A.amW)
u(A.Og,[A.ajk,A.aoN])
t(A.a2S,A.ajk)
t(A.a2T,A.ajl)
t(A.DM,A.ajj)
u(A.aAK,[A.M7,A.PC])
t(A.afL,A.ava)
t(A.ajm,A.afL)
t(A.a2U,A.ajm)
u(B.b8,[A.yc,A.zU])
t(A.v3,A.ajg)
t(A.M1,A.Ma)
u(A.M1,[A.aAz,A.aNm])
u(B.Pv,[A.a2Q,A.a8Y])
u(B.L,[A.H8,A.aj4])
u(A.H8,[A.acS,A.ad4])
t(A.qt,A.atu)
t(A.aej,A.att)
t(A.px,A.aj6)
t(A.vt,A.amV)
t(A.z6,A.amS)
t(A.pV,A.amU)
t(A.Rq,A.arw)
t(A.nf,A.anM)
t(A.nE,A.avW)
u(A.pV,[A.anL,A.avV])
t(A.l1,A.anL)
t(A.lv,A.avV)
t(A.a79,A.amT)
u(A.a79,[A.anK,A.avU])
t(A.a8_,A.anK)
t(A.ag8,A.avU)
t(A.O0,A.amp)
t(A.vs,A.amR)
t(A.O9,A.vs)
t(A.aek,B.hf)
t(A.aj5,A.aj4)
t(A.UU,A.aj5)
t(A.a2H,A.UU)
t(A.k2,A.aj3)
t(A.a76,A.amO)
t(A.a78,A.amP)
u(A.hA,[A.a7c,A.a7d,A.a7e,A.Ob,A.Oc,A.a7h,A.Oe,A.Of,A.a7b,A.a7a,A.Oa,A.a7f,A.a7g,A.Od])
t(A.q8,A.aoJ)
t(A.ei,A.aoI)
t(A.PB,A.aoL)
t(A.a2P,A.ajc)
t(A.mV,A.ajr)
t(A.M5,A.ajd)
t(A.z5,A.amQ)
t(A.FG,A.aoN)
t(A.a8Z,A.aoO)
t(A.aoH,A.eG)
t(A.ni,A.aoH)
t(A.qB,A.ni)
t(A.rW,A.aoM)
t(A.u_,A.av9)
t(A.HA,A.ats)
t(A.zV,A.aoK)
t(A.zZ,A.aoV)
w(A.aj7,A.bo)
w(A.aje,A.bo)
w(A.ajf,A.bo)
w(A.ajh,A.bo)
w(A.aji,A.bo)
w(A.ajj,A.bo)
w(A.ajk,A.bo)
w(A.ajl,A.bo)
w(A.ajm,A.bo)
w(A.ajg,A.bo)
w(A.aj2,A.bo)
w(A.aj6,A.bo)
w(A.amp,A.bo)
w(A.amR,A.bo)
w(A.amS,A.bo)
w(A.amU,A.bo)
w(A.amV,A.bo)
w(A.anL,A.bo)
w(A.anK,A.bo)
w(A.anM,A.bo)
w(A.arw,A.bo)
w(A.att,A.bo)
w(A.atu,A.bo)
w(A.ava,A.bo)
w(A.avV,A.bo)
w(A.avU,A.bo)
w(A.avW,A.bo)
w(A.aj3,A.bo)
v(A.aj4,B.aJ)
w(A.aj5,B.ef)
v(A.UU,B.a68)
w(A.ajp,A.bo)
w(A.amO,A.bo)
w(A.amP,A.bo)
w(A.amW,A.bo)
w(A.ajc,A.bo)
w(A.ajd,A.bo)
w(A.ajr,A.bo)
w(A.amQ,A.bo)
w(A.amT,A.bo)
w(A.aoH,A.bo)
w(A.aoI,A.bo)
w(A.aoJ,A.bo)
w(A.aoL,A.bo)
w(A.aoM,A.bo)
w(A.aoN,A.bo)
w(A.aoO,A.bo)
w(A.ats,A.bo)
w(A.av9,A.bo)
w(A.aoK,A.bo)
w(A.aoV,A.bo)})()
B.bw5(b.typeUniverse,JSON.parse('{"a8L":{"A":[],"c":[]},"F3":{"aI2":[]},"z1":{"fP":["bk<~>"],"fP.T":"bk<~>"},"vq":{"b7":[],"H":[],"c":[]},"Jw":{"A":[],"c":[]},"xm":{"A":[],"c":[]},"amJ":{"Y":["vq"]},"amI":{"A":[],"c":[]},"xd":{"A":[],"c":[]},"ajJ":{"A":[],"c":[]},"Ks":{"A":[],"c":[]},"J5":{"A":[],"c":[]},"z2":{"b7":[],"H":[],"c":[]},"aih":{"A":[],"c":[]},"anV":{"A":[],"c":[]},"aql":{"b7":[],"H":[],"c":[]},"K2":{"A":[],"c":[]},"aif":{"A":[],"c":[]},"Jq":{"A":[],"c":[]},"xh":{"A":[],"c":[]},"BP":{"H":[],"c":[]},"a8M":{"b7":[],"H":[],"c":[]},"anb":{"A":[],"c":[]},"aoy":{"A":[],"c":[]},"Wc":{"A":[],"c":[]},"a_0":{"A":[],"c":[]},"Vl":{"A":[],"c":[]},"VC":{"A":[],"c":[]},"ap4":{"A":[],"c":[]},"al3":{"A":[],"c":[]},"CV":{"A":[],"c":[]},"av6":{"A":[],"c":[]},"ajb":{"b7":[],"H":[],"c":[]},"UW":{"Y":["BP"]},"M6":{"H":[],"c":[]},"UX":{"Y":["M6"]},"ob":{"bo":[]},"fU":{"bo":[]},"iv":{"bo":[]},"mU":{"bo":[]},"DM":{"bo":[]},"yc":{"b8":["ob"],"bd":["ob"],"bd.T":"ob","b8.T":"ob"},"a2N":{"bo":[]},"a2S":{"bo":[]},"a2T":{"bo":[]},"a2U":{"bo":[]},"v3":{"bo":[]},"a2Q":{"b1":[],"c":[]},"acS":{"L":[],"M":[],"jD":[],"b0":[]},"pV":{"bo":[]},"nf":{"bo":[]},"nE":{"bo":[]},"l1":{"bo":[]},"lv":{"bo":[]},"vs":{"bo":[]},"a2G":{"bo":[]},"qt":{"bo":[]},"aej":{"bo":[]},"px":{"bo":[]},"vt":{"bo":[]},"z6":{"bo":[]},"afL":{"bo":[]},"Rq":{"bo":[]},"a8_":{"bo":[]},"ag8":{"bo":[]},"O0":{"bo":[]},"O9":{"bo":[]},"M2":{"A":[],"c":[]},"SS":{"H":[],"c":[]},"ZP":{"Y":["SS"]},"k2":{"bo":[]},"aek":{"hf":[],"b1":[],"c":[]},"a2H":{"ef":["L","hB"],"L":[],"aJ":["L","hB"],"M":[],"b0":[],"aJ.1":"hB","ef.1":"hB","aJ.0":"L"},"Bc":{"A":[],"c":[]},"a2W":{"bo":[]},"a76":{"bo":[]},"Og":{"bo":[]},"a78":{"bo":[]},"a7c":{"hA":[]},"a7d":{"hA":[]},"a7e":{"hA":[]},"Ob":{"hA":[]},"Oc":{"hA":[]},"a7h":{"hA":[]},"Oe":{"hA":[]},"Of":{"hA":[]},"a7b":{"hA":[]},"a7a":{"hA":[]},"Oa":{"hA":[]},"a7f":{"hA":[]},"a7g":{"hA":[]},"Od":{"hA":[]},"H8":{"L":[],"M":[],"jD":[],"b0":[]},"PA":{"H":[],"c":[]},"Xx":{"Y":["PA"]},"q8":{"bo":[]},"ei":{"bo":[]},"mV":{"bo":[]},"ni":{"eG":[],"bo":[]},"qB":{"ni":[],"eG":[],"bo":[]},"rW":{"bo":[]},"u_":{"bo":[]},"HA":{"bo":[]},"zU":{"b8":["q8"],"bd":["q8"],"bd.T":"q8","b8.T":"q8"},"PB":{"bo":[]},"a2P":{"bo":[]},"M5":{"bo":[]},"z5":{"bo":[]},"a79":{"bo":[]},"FG":{"bo":[]},"a8Z":{"bo":[]},"zV":{"bo":[]},"a8Y":{"b1":[],"c":[]},"ad4":{"L":[],"M":[],"jD":[],"b0":[]},"zZ":{"bo":[]}}'))
B.bPU(b.typeUniverse,JSON.parse('{"M1":1,"Og":1,"Ma":1,"H8":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ay
return{_:w("Dt"),e:w("bk<os>"),cn:w("bk<ot>"),aN:w("bk<ov>"),fM:w("bk<a6<i,@>?>"),c:w("bk<~>"),W:w("k2"),B:w("ob"),dB:w("fU"),T:w("v3"),fj:w("iv"),G:w("mU"),bO:w("mV"),k:w("aw"),cX:w("a3x<G>"),dO:w("va"),R:w("a8<i,@>"),j:w("hw"),bz:w("lX<aW>"),f0:w("ol"),E:w("bo"),F:w("z1"),aI:w("pU"),m:w("os"),X:w("ot"),P:w("m1"),D:w("vr"),a:w("aI2"),d:w("ov"),cw:w("eG"),L:w("hB"),o:w("dG<w,F>"),cm:w("l1"),dv:w("nf"),M:w("E<oa>"),I:w("E<bJX>"),O:w("E<fU>"),Y:w("E<iv>"),U:w("E<eG>"),K:w("E<a7P>"),u:w("E<ei>"),bC:w("E<vX>"),aA:w("E<v<eG>>"),v:w("E<ek>"),r:w("E<HA>"),s:w("E<i>"),eg:w("E<tV>"),df:w("E<qB>"),p:w("E<c>"),n:w("E<G>"),t:w("E<w>"),eF:w("bp<Y<H>>"),Z:w("ni"),cz:w("ei"),hf:w("q8"),dj:w("zV"),fT:w("rW"),c_:w("iA<pi<bk<~>>>"),x:w("zZ<fU>"),y:w("zZ<ei>"),J:w("v<w>"),ef:w("w0"),b:w("a6<i,@>"),f:w("a6<@,@>"),gj:w("ae<G,G>"),w:w("kh"),aU:w("C"),Q:w("we<ob>"),C:w("we<q8>"),dc:w("ek"),eo:w("qj"),gJ:w("qk"),V:w("kt<m1>"),N:w("i"),A:w("nz"),bP:w("bl"),er:w("tV"),fB:w("wZ"),dw:w("qB"),bY:w("u_"),cZ:w("qD"),gc:w("je"),es:w("lv"),bN:w("nE"),l:w("c"),q:w("xC"),g4:w("ip<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("w"),bn:w("yc?"),f3:w("zU?"),g:w("v<@>?"),h:w("a6<i,@>?"),fF:w("a6<@,@>?"),cK:w("C?"),aD:w("je?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BF=new B.lQ(C.n,B.ay("lQ<F>"))
D.BM=new A.DL(0,"left")
D.n2=new A.DL(1,"top")
D.BN=new A.DL(2,"right")
D.dW=new A.DL(3,"bottom")
D.aBR=new A.qt(!1,A.bGy(),22,null)
D.kI=new A.px(16,null,D.aBR,!0)
D.aaG=new A.pV(C.J,null,2,null)
D.ws=new A.M5(!1,D.aaG,A.ccW(),!0)
D.a0B=new A.aAm(3,"spaceEvenly")
D.a0L=new B.yh(6,"dstIn")
D.Yo=new B.b3(3,3)
D.BQ=new B.da(D.Yo,D.Yo,C.a9,C.a9)
D.a0X=new B.bn(C.J,0,C.V,-1)
D.Cp=new A.a78()
D.a2M=new A.Ob()
D.a2N=new A.Oe()
D.aVn=new A.aej()
D.a8F=new B.bz(8e6)
D.ap9=w([],B.ay("E<l1>"))
D.apa=w([],B.ay("E<lv>"))
D.EC=new A.O0(D.ap9,D.apa,!0)
D.aaj=new B.dF("Zeitraum",!1,null)
D.aap=new B.dF("Konten (SKR 03)",!1,null)
D.y9=new A.aHc(0,"center")
D.aaA=new A.vq(null,null)
D.aVA=new A.z5(!0,A.bH6(),A.bS5())
D.EG=new A.z5(!1,A.bH6(),A.bS5())
D.EH=new A.z6(!1,!0,null,A.axR(),A.a1g(),!0,null,A.axR(),A.a1g())
D.aVB=new A.z6(!0,!0,null,A.axR(),A.a1g(),!0,null,A.axR(),A.a1g())
D.a5a=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.m)
D.a4V=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.m)
D.a5k=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.m)
D.a5e=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.m)
D.a4B=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.m)
D.a4A=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.a5J=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.m)
D.a53=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.m)
D.a5M=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.m)
D.a5G=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.m)
D.avy=new B.dG([50,D.a5a,100,D.a4V,200,D.a5k,300,D.a5e,400,D.a4B,500,D.a4A,600,D.a5J,700,D.a53,800,D.a5M,900,D.a5G],x.o)
D.dy=new B.t2(D.avy,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.m)
D.al9=w([8,4],x.t)
D.aaE=new A.pV(D.dy,null,0.4,D.al9)
D.aaF=new A.pV(C.a7,null,0.5,null)
D.fZ=new A.eG(0/0,0/0)
D.aBT=new A.qt(!0,A.bGy(),44,null)
D.n3=new A.px(16,null,D.aBT,!0)
D.aBS=new A.qt(!0,A.bGy(),30,null)
D.n4=new A.px(16,null,D.aBS,!0)
D.aaH=new A.vt(!1,D.n3,D.n4,D.n3,D.n4)
D.aVC=new A.vt(!0,D.n3,D.n4,D.n3,D.n4)
D.aLM=new B.a7("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.abf=new B.e1(D.aLM,null,null)
D.EP=new A.OF(0,"left")
D.abp=new A.OF(1,"center")
D.EQ=new A.OF(2,"right")
D.abt=new B.a5(57495,"MaterialIcons",null,!1)
D.abH=new B.a5(58040,"MaterialIcons",null,!0)
D.yq=new B.a5(58927,"MaterialIcons",null,!1)
D.ack=new B.a5(59005,"MaterialIcons",null,!0)
D.acl=new B.a5(59007,"MaterialIcons",null,!0)
D.adt=new B.a5(62589,"MaterialIcons",null,!1)
D.acF=new B.a5(61349,"MaterialIcons",null,!1)
D.aet=new B.as(D.acF,20,C.h,null,null)
D.aev=new B.as(F.Fm,18,null,null,null)
D.aew=new B.as(D.yq,18,null,null,null)
D.aeT=new B.as(C.oj,14,C.R,null,null)
D.aeZ=new B.as(C.i9,null,C.h,null,null)
D.af_=new B.as(C.jv,null,C.l,null,null)
D.aft=new B.as(C.lt,16,null,null,null)
D.afA=new B.as(C.yB,16,null,null,null)
D.afF=new B.as(F.lr,null,C.R,null,null)
D.afQ=new B.as(F.Fx,16,null,null,null)
D.afX=new B.as(D.yq,16,null,null,null)
D.ais=new A.a8M(null)
D.aVH=new A.aN7(0,"horizontal")
D.yN=new A.zV(0,0,0,0,!1)
D.Gh=new A.PB(0.5)
D.Cv=new A.a8Z()
D.aiF=new A.FG(D.Cv,A.bS9(),10,A.bS6(),!0,A.bS8(),A.bS7(),!1,null,null,null)
D.aVJ=new A.FG(D.Cv,A.bS9(),10,A.bS6(),!0,A.bS8(),A.bS7(),!0,null,null,null)
D.ak6=w([4,3],x.t)
D.azZ=new B.aH("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.azM=new B.aH("receivables","Forderungen (kurzfristig)")
D.azz=new B.aH("inventory_value","Vorr\xe4te (Warenbestand)")
D.azx=new B.aH("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.azk=new B.aH("fixed_assets","Anlageverm\xf6gen")
D.azr=new B.aH("current_liabilities","Kurzfristige Verbindlichkeiten")
D.azT=new B.aH("long_term_liabilities","Langfristige Verbindlichkeiten")
D.azL=new B.aH("equity","Eigenkapital")
D.q3=w([D.azZ,D.azM,D.azz,D.azx,D.azk,D.azr,D.azT,D.azL],B.ay("E<+(i,i)>"))
D.aVM=w([],x.M)
D.aoX=w([],x.O)
D.aoY=w([],x.Y)
D.aoZ=w([],B.ay("E<mU>"))
D.ap_=w([],B.ay("E<mV>"))
D.aVN=w([],x.U)
D.aVO=w([],x.u)
D.ap0=w([],x.r)
D.awd={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.U2={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zt=new B.a8(D.U2,[0,0,0,0,0,0,0,C.b_],B.ay("a8<i,C>"))
D.awa={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.avs=new B.a8(D.awa,[0,0,0,0],B.ay("a8<i,w>"))
D.aws={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.at1=new B.a8(D.aws,[0,0,0,0,null,null,null,null],B.ay("a8<i,w?>"))
D.asV=new B.a8(D.awd,[D.zt,D.zt,D.zt,C.b_,C.b_,C.b_,D.avs,D.at1],x.R)
D.ate=new B.a8(D.U2,[0,0,0,0,0,0,0,C.bU],x.R)
D.awe={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.atg=new B.a8(D.awe,[8500,1200,3400,300,22e3,4200,9000,22200],B.ay("a8<i,G>"))
D.awC={total:0,rows:1}
D.atj=new B.a8(D.awC,[0,C.bU],x.R)
D.aw9={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.avt=new B.a8(D.aw9,[0,0,0,0,0,0,0,C.bU],x.R)
D.awG={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.avu=new B.a8(D.awG,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ay("a8<i,i>"))
D.a5S=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.m)
D.a6_=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.m)
D.a4E=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.m)
D.a56=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.m)
D.a5g=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.m)
D.a6f=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a4p=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.m)
D.a58=new B.F(1,0,0.592156862745098,0.6549019607843137,C.m)
D.a5j=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.m)
D.a5H=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.m)
D.avz=new B.dG([50,D.a5S,100,D.a6_,200,D.a4E,300,D.a56,400,D.a5g,500,D.a6f,600,D.a4p,700,D.a58,800,D.a5j,900,D.a5H],x.o)
D.TO=new B.t2(D.avz,1,0,0.7372549019607844,0.8313725490196079,C.m)
D.a9x=new B.ai(32,32,32,32)
D.axB=new B.ab(D.a9x,C.bF,null)
D.axJ=new B.ab(C.ap,C.bF,null)
D.apb=w([],B.ay("E<nf>"))
D.apc=w([],B.ay("E<nE>"))
D.Yq=new A.Rq(D.apb,D.apc)
D.aAN=new B.f_("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aAP=new B.f_("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aAU=new B.f_("Automaten-Business","Umsatz je Automat",null,null)
D.aAX=new B.f_("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aAZ=new B.f_("Top","Meistverkaufte Produkte",null,null)
D.aB1=new B.f_("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aB2=new B.f_("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z5=new B.tE(C.M,C.v,0)
D.aJH=new B.a7("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aDE=new B.dm(D.aJH,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aMi=new B.a7('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aDH=new B.dm(D.aMi,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aJZ=new B.a7("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aDI=new B.dm(D.aJZ,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aMa=new B.a7("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aDK=new B.dm(D.aMa,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLA=new B.a7("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aDL=new B.dm(D.aLA,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aLx=new B.a7("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aEc=new B.dm(D.aLx,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.o,null)
D.aVY=new B.V(!0,C.J,null,null,null,null,14,C.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aJU=new B.a7("Demo",null,null,null,null,null,null,null,null,null)
D.aKb=new B.a7("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aLe=new B.a7("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aLm=new B.a7("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aLE=new B.a7("sevDesk",null,null,null,null,null,null,null,null,null)
D.aMv=new B.a7("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_p=new A.afJ(0,"auto")
D.aNe=new A.afJ(1,"top")
D.aRV=new A.xh("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aRW=new A.xh("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bn=new A.xj(0,"alle")
D.a_P=new A.xj(1,"aufwand")
D.a_Q=new A.xj(2,"erloes")
D.a_R=new A.xj(3,"privat")
D.aSQ=new A.xm('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.l,C.jv,null)
D.adG=new B.a5(984570,"MaterialIcons",null,!1)
D.aSR=new A.xm("Keine Buchung passt zu dieser Auswahl.",C.l,D.adG,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"clP","bWn",()=>B.j3(new A.bzw(),x.D))
w($,"clQ","a1P",()=>B.j3(new A.bzx(),x.a))
w($,"cmQ","r4",()=>B.bFd(new A.bBu(),x.P))
w($,"clR","bCr",()=>C.aK.$1$1(new A.bzy(),x.d))
w($,"clN","bCq",()=>C.aK.$1$1(new A.bzu(),x.m))
w($,"clO","bIQ",()=>C.aK.$1$1(new A.bzv(),x.X))
w($,"clM","bCp",()=>C.aK.$1$1(new A.bzt(),x.h))
w($,"clL","bCo",()=>B.b1T(A.cc_(),x.F,x.c))
w($,"ceR","bBW",()=>new A.aAb())
v($,"cic","lN",()=>new A.b4y())})()};
(a=>{a["1PXghakGu0pGStzgXxWag8xhmfI="]=a.current})($__dart_deferred_initializers__);