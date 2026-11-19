((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Rk(d,e,f,g,h){return new A.abq(f,g,d,h,e,null)},
abq:function abq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
wF:function wF(d){this.a=d},
GV:function GV(d){this.a=d},
c4L(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.W(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.a3K
w=x.f
v=x.N
u=x.z
t=A.aLQ(B.dr(w.a(e.h(a0,"current")),v,u))
s=A.aLQ(B.dr(w.a(e.h(a0,"prior_year")),v,u))
r=A.aLQ(B.dr(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cd
p=J.d7(p,new A.aLx(),x.cZ)
p=B.R(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cd
o=J.d7(o,new A.aLy(),x.ef)
o=B.R(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cd
q=J.d7(q,new A.aLz(),x.j)
q=B.R(q,q.$ti.i("aw.E"))
n=B.dr(w.a(e.h(a0,"customer")),v,u)
m=B.b9(n.h(0,"purchases_count"))
m=m==null?null:C.l.v(m)
if(m==null)m=0
l=A.qA(n.h(0,"app_gross"))
k=B.b9(n.h(0,"active_customers"))
k=k==null?null:C.l.v(k)
if(k==null)k=0
n=A.qA(n.h(0,"avg_basket"))
u=B.dr(w.a(e.h(a0,"derived")),v,u)
v=A.qA(u.h(0,"gross_margin_pct"))
e=A.qA(u.h(0,"net_margin_pct"))
w=A.qA(u.h(0,"ebitda_margin_pct"))
j=A.qA(u.h(0,"cashflow_operating"))
i=A.bBr(u.h(0,"revenue_growth_yoy_pct"))
h=A.bBr(u.h(0,"revenue_growth_mom_pct"))
g=A.bBr(u.h(0,"result_growth_yoy_pct"))
u=A.bBr(u.h(0,"result_growth_mom_pct"))
f=B.b9(J.t(d,"days"))
f=f==null?null:C.l.v(f)
if(f==null)f=1
return new A.pA(t,s,r,p,o,q,new A.aGB(m,l,k,n),new A.aHK(v,e,w,j,i,h,g,u),f)},
qA(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hz(J.ap(d))
return w==null?0:w},
bBr(d){if(d==null)return null
if(typeof d=="number")return d
return B.hz(J.ap(d))},
rY:function rY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
xi:function xi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
yj:function yj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGB:function aGB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHK:function aHK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
pA:function pA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aLx:function aLx(){},
aLy:function aLy(){},
aLz:function aLz(){},
aLQ(d){var w=J.W(d),v=A.w1(w.h(d,"revenue_net_7")),u=A.w1(w.h(d,"revenue_net_19")),t=A.w1(w.h(d,"revenue_net")),s=A.w1(w.h(d,"expense_net")),r=A.w1(w.h(d,"result_net")),q=A.w1(w.h(d,"vat_collected")),p=A.w1(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cd
w=J.d7(w,new A.aLR(),x._)
w=B.R(w,w.$ti.i("aw.E"))
return new A.pB(v,u,t,s,r,q,p,w)},
w1(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hz(J.ap(d))
return w==null?0:w},
Fe:function Fe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
pB:function pB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aLR:function aLR(){},
c4K(d){return new A.AB(d,new B.je(x.c_),C.eT)},
bCB:function bCB(){},
bCC:function bCC(){},
bEV:function bEV(){},
bCD:function bCD(){},
bCA:function bCA(){},
bCz:function bCz(){},
AB:function AB(d,e,f){this.r=d
this.a=e
this.f=f},
aLw:function aLw(d,e,f){this.a=d
this.b=e
this.c=f},
aLv:function aLv(d,e,f){this.a=d
this.b=e
this.c=f},
c4M(){return new A.AC(null)},
arp(d,e,f,g,h){return new A.aro(e,h,g,f,d,null)},
AC:function AC(d){this.a=d},
aLP:function aLP(d){this.a=d},
aLH:function aLH(d,e,f){this.a=d
this.b=e
this.c=f},
aLI:function aLI(d,e,f){this.a=d
this.b=e
this.c=f},
aLJ:function aLJ(d){this.a=d},
aLG:function aLG(){},
aLK:function aLK(d){this.a=d},
aLL:function aLL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aLO:function aLO(){},
aLN:function aLN(){},
aLM:function aLM(){},
aLC:function aLC(d){this.a=d},
aLF:function aLF(d,e){this.a=d
this.b=e},
aLD:function aLD(d){this.a=d},
aLE:function aLE(d){this.a=d},
am6:function am6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aro:function aro(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
atJ:function atJ(d,e){this.e=d
this.a=e},
brl:function brl(d){this.a=d},
brm:function brm(d){this.a=d},
brn:function brn(d,e,f){this.a=d
this.b=e
this.c=f},
brk:function brk(){},
LN:function LN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Me:function Me(d,e){this.c=d
this.a=e},
bxm:function bxm(d){this.a=d},
am4:function am4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
KU:function KU(d,e){this.c=d
this.a=e},
bKu(d,e,f,g,h){var w=null
return B.hX(w,w,!0,w,new A.bBk(h,g,e,f),d,w,!0,!0,x.H)},
kz(d,e,f,g,h,i,j,k,l,m,n){return new A.as_(g,n,i,e,d,m,f,k,l,j,null)},
aB1(d,e){return A.cgZ(d,e)},
cgZ(d,e){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aB1=B.n(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.R(x.q).f
l.bp(D.bC2)
t=4
o=e.aQ(0,$.bN(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.kM("finance-balance-sync",B.A(n,n)),$async$aB1)
case 7:r=g
q=B.dr(x.f.a(r.a),x.N,n)
l.a_J()
if(J.e(J.t(q,"configured"),!1)){l.bp(D.bC6)
w=1
break}if(J.e(J.t(q,"ok"),!0)){o=$.bFX()
if(e.e==null)B.T(B.a0(y.b))
e.gcK().cG(o)
l.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Bilanz aus sevDesk \xfcbernommen ("+B.h(J.t(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))}else{o=J.t(q,"error")
l.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Sync-Fehler: "+B.h(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.Z(k)
l.a_J()
l.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Sync fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$aB1,v)},
aB4(d,e,f){var w=0,v=B.r(x.H)
var $async$aB4=B.n(function(g,h){if(g===1)return B.o(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.hX(null,null,!0,null,new A.bBi(f,e,e.aQ(0,$.bN(),x.A)),d,null,!0,!0,x.H),$async$aB4)
case 2:return B.p(null,v)}})
return B.q($async$aB4,v)},
abr:function abr(d){this.a=d},
aRf:function aRf(){},
aRe:function aRe(){},
aRd:function aRd(){},
Le:function Le(d,e){this.c=d
this.a=e},
bom:function bom(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bob:function bob(){},
boc:function boc(){},
bod:function bod(){},
boe:function boe(){},
bof:function bof(){},
bog:function bog(){},
boh:function boh(){},
boi:function boi(){},
boj:function boj(d){this.a=d},
bok:function bok(d){this.a=d},
bol:function bol(d){this.a=d},
bon:function bon(d,e){this.a=d
this.b=e},
boo:function boo(d,e){this.a=d
this.b=e},
bBk:function bBk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBj:function bBj(d){this.a=d},
aqI:function aqI(d){this.a=d},
as_:function as_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bop:function bop(d,e){this.a=d
this.b=e},
Yn:function Yn(d,e,f){this.c=d
this.d=e
this.a=f},
a13:function a13(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bwS:function bwS(){},
bwT:function bwT(){},
bwU:function bwU(d){this.a=d},
XB:function XB(d,e,f){this.c=d
this.d=e
this.a=f},
bej:function bej(){},
bel:function bel(d){this.a=d},
bem:function bem(d){this.a=d},
bek:function bek(){},
XM:function XM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bf9:function bf9(){},
bfa:function bfa(){},
bfb:function bfb(){},
bfc:function bfc(d){this.a=d},
ast:function ast(d,e){this.c=d
this.a=e},
boV:function boV(){},
boW:function boW(){},
aoJ:function aoJ(d,e){this.c=d
this.a=e},
EI:function EI(d,e,f){this.c=d
this.d=e
this.a=f},
ayr:function ayr(d,e){this.c=d
this.a=e},
byD:function byD(){},
byE:function byE(){},
yG:function yG(d,e){this.c=d
this.a=e},
an_:function an_(d,e){this.e=d
this.a=e},
bcP:function bcP(){},
bcO:function bcO(){},
bcN:function bcN(d,e,f){this.a=d
this.b=e
this.c=f},
bcH:function bcH(d,e){this.a=d
this.b=e},
bcI:function bcI(d,e){this.a=d
this.b=e},
bcQ:function bcQ(d){this.a=d},
bcR:function bcR(d){this.a=d},
bcJ:function bcJ(){},
bcK:function bcK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcL:function bcL(d,e){this.a=d
this.b=e},
bcM:function bcM(d,e,f){this.a=d
this.b=e
this.c=f},
bBi:function bBi(d,e,f){this.a=d
this.b=e
this.c=f},
bBh:function bBh(d){this.a=d},
DG:function DG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xe:function Xe(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
bcB:function bcB(){},
bcC:function bcC(d){this.a=d},
bcD:function bcD(d){this.a=d},
bcF:function bcF(d,e){this.a=d
this.b=e},
bcE:function bcE(d,e){this.a=d
this.b=e},
bcG:function bcG(d){this.a=d},
bm:function bm(){},
bO3(d){return new A.NR(d,C.ba,C.eG,null,null)},
NR:function NR(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xf:function Xf(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fa$=f
_.cJ$=g
_.c=_.a=null},
bcS:function bcS(d,e){this.a=d
this.b=e},
bcT:function bcT(d){this.a=d},
aDM(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.biX:f,p=a0==null?16:a0,o=d==null?D.acT:d,n=g==null,m=n?A.bGy(r,r,r,r,r,r,r,r):g,l=a3==null?D.a8Z:a3
n=n?A.bGy(r,r,r,r,r,r,r,r):g
w=j==null?D.K3:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.a5:e
return new A.pg(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.HI,s,w,i,n)},
aDT(d,e,f,g,h){var w=d==null?D.biY:d,v=e==null?2:e,u=g==null?C.hU:g
return new A.hs(h,f===!0,w,v,u)},
c1N(d,e,f){var w=d.a
w=C.l.aM(w+(e.a-w)*f)
return A.aDT(A.lv(d.c,e.c,f,A.chS(),x.fj),B.ah(d.d,e.d,f),!1,A.lv(d.e,e.e,f,A.a3i(),x.S),w)},
a4T(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.a3U
else w=h
v=m==null
u=v?8:m
t=$.mF()
s=t.b6S(f,v?8:m)
t=t.b6T(g,v?8:m)
v=d==null?A.bO0(r,r,r,r,r):d
return new A.jb(q,l,w,j,u,s,e,t,v,k==null?D.biZ:k)},
c1O(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.nU(d.f,e.f,f),p=A.lv(d.r,e.r,f,A.a3i(),x.S),o=B.c2(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a4T(A.bO0(v,u,null,!1,t),p,q,o,s,n,null,A.lv(d.y,e.y,f,A.chT(),x.G),m,r)},
c1P(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.nS(u,w,v,B.c2(d.d,e.d,f))},
bO0(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.eu
else w=d
return new A.a4Q(g===!0,v,u,w,f)},
bGy(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a4V(4,C.ju,16,D.C2,0,120,A.chV(),!1,!1,D.ab6,0,C.ae,A.chU())
else w=k
v=j==null?C.pV:j
return new A.a4U(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
ciI(d,e,f,g){var w=null,v=B.jW(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.ai,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Fy(C.l.j(f.b),v)},
ciH(d){return A.aG0(D.eu,15)},
pg:function pg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aDL:function aDL(d,e){this.a=d
this.b=e},
hs:function hs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDU:function aDU(){},
aDV:function aDV(){},
jb:function jb(d,e,f,g,h,i,j,k,l,m){var _=this
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
nS:function nS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4Q:function a4Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a4U:function a4U(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ajp:function ajp(d,e){this.a=d
this.b=e},
a4V:function a4V(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Fy:function Fy(d,e){this.a=d
this.b=e},
NS:function NS(d){this.a=d},
a4W:function a4W(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
zF:function zF(d,e){this.a=d
this.b=e},
amW:function amW(){},
an2:function an2(){},
an3:function an3(){},
an5:function an5(){},
an6:function an6(){},
an7:function an7(){},
an8:function an8(){},
an9:function an9(){},
ana:function ana(){},
aDW:function aDW(d){this.a=d},
aDX:function aDX(){},
wj:function wj(d,e,f){this.a=d
this.b=e
this.c=f},
an4:function an4(){},
aDY:function aDY(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
aDZ:function aDZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aE_:function aE_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aaa:function aaa(d){this.b=d},
a4S:function a4S(d,e,f){this.d=d
this.e=e
this.a=f},
agf:function agf(d,e,f,g,h,i,j,k){var _=this
_.aP=d
_.iW=e
_.dd=f
_.hm=g
_.C=h
_.a8=_.Y=_.Z=null
_.aa=i
_.bK=_.aS=_.ar=_.aE=$
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
ciJ(d,e){var w=null
return new A.V1(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
aDE(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.qL(t,e.b,new A.rM(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bPv(d,e,f){var w=A.aDE(d.b,e.b,f),v=A.aDE(d.d,e.d,f),u=A.aDE(d.e,e.e,f)
return new A.wH(e.a,w,A.aDE(d.c,e.c,f),v,u)},
c4O(d,e,f){var w,v
if(d.k(0,D.ie))return e
if(e.k(0,D.ie))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.f7(w,v)},
bPt(d,e,f){return new A.AE(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
cll(d){return!0},
ciM(d){return D.an1},
bPu(d,e,f,g){var w
if(d==null)w=f==null?C.a4:null
else w=d
return new A.rc(w,f,g,e)},
bS0(d,e,f){var w,v=A.lv(d.a,e.a,f,A.chO(),x.dv)
v.toString
w=A.lv(d.b,e.b,f,A.chQ(),x.bN)
w.toString
return new A.TB(v,w)},
c5D(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.u1(d.d,e.d,f)
if(v==null)v=u==null?C.W:null
return new A.ob(t,w,v,u)},
cc_(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.u1(d.d,e.d,f)
if(v==null)v=u==null?C.W:null
return new A.oM(t,w,v,u)},
c5C(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cE(w.c,v.c,f)
t=A.c5A(B.bGo(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.u1(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.lv(d.d,e.d,f,A.a3i(),x.S)
if(u==null)u=v==null?C.a4:null
return new A.lR(r,e.f,e.r,t,e.x,u,v,w,s)},
cbZ(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cE(w.c,v.c,f)
t=A.cbX(B.bGo(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.u1(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.lv(d.d,e.d,f,A.a3i(),x.S)
if(u==null)u=v==null?C.a4:null
return new A.mk(r,e.f,e.r,t,e.x,u,v,w,s)},
c5A(d,e,f,g,h,i){return new A.aal(f,!1,g,i,d,e)},
c5B(d){return C.l.ah(d.e,1)},
cbX(d,e,f,g,h,i){return new A.ajV(f,!1,g,i,d,e)},
cbY(d){return C.l.ah(d.e,1)},
bPp(d,e,f){var w,v=A.lv(d.a,e.a,f,A.chN(),x.cm)
v.toString
w=A.lv(d.b,e.b,f,A.chP(),x.es)
w.toString
return new A.PQ(v,w,!0)},
c4N(d,e,f){return new A.PX(d,e==null?4:e,f)},
a4J:function a4J(){},
Fw:function Fw(d,e){this.a=d
this.b=e},
vj:function vj(d,e){this.r=d
this.w=e},
rM:function rM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahN:function ahN(){},
qL:function qL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
wH:function wH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f7:function f7(d,e){this.a=d
this.b=e},
AE:function AE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
rc:function rc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ajr:function ajr(){},
TB:function TB(d,e){this.a=d
this.b=e},
ob:function ob(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oM:function oM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
lR:function lR(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
mk:function mk(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
aal:function aal(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ajV:function ajV(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
PQ:function PQ(d,e,f){this.a=d
this.b=e
this.c=f},
wG:function wG(){},
PX:function PX(d,e,f){this.a=d
this.b=e
this.c=f},
amR:function amR(){},
amV:function amV(){},
aq3:function aq3(){},
aqm:function aqm(){},
aqn:function aqn(){},
aqp:function aqp(){},
aqq:function aqq(){},
are:function are(){},
ard:function ard(){},
arf:function arf(){},
auR:function auR(){},
awN:function awN(){},
awO:function awO(){},
ayv:function ayv(){},
aza:function aza(){},
az9:function az9(){},
azb:function azb(){},
aDA:function aDA(){},
NL:function NL(){},
NM:function NM(d,e,f){this.c=d
this.d=e
this.a=f},
aDC:function aDC(d){this.a=d},
aDB:function aDB(d){this.a=d},
V1:function V1(d,e,f){this.c=d
this.e=e
this.a=f},
a0T:function a0T(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c9P(d,e,f){var w=B.a8(f),v=w.i("ac<1,kL>")
v=B.R(new B.ac(f,new A.b6l(),v),v.i("aw.E"))
w=w.i("ac<1,c>")
w=B.R(new B.ac(f,new A.b6m(),w),w.i("aw.E"))
return new A.ahO(e,d,v,w,null)},
c1K(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.iz(4,x.er)
for(w=0;w<4;++w)t[w]=new B.rU(v,C.aL,C.T,new B.kA(1),v,v,v,v,C.c7,v)
u=new A.a4K(f,d,e,u,t,!0,0,v,v,new B.bw(),B.aK(x.g))
u.bs()
return u},
ahO:function ahO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b6l:function b6l(){},
b6m:function b6m(){},
a4K:function a4K(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.C=d
_.Z=e
_.Y=f
_.a8=g
_.a_4$=h
_.b2p$=i
_.dH$=j
_.an$=k
_.e0$=l
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
bov:function bov(d,e){this.a=d
this.b=e},
aDD:function aDD(){},
kL:function kL(d,e){this.a=d
this.b=e},
pf:function pf(d,e){this.a=d
this.b=e},
amS:function amS(){},
amT:function amT(){},
amU:function amU(){},
Xc:function Xc(){},
D6:function D6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6n:function b6n(d){this.a=d},
b6o:function b6o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6p:function b6p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9n(d,e){var w=d==null?B.d1(C.a4,1):d
return new A.a9m(e!==!1,w)},
a4Y:function a4Y(){},
a9m:function a9m(d,e){this.a=d
this.b=e},
Q3:function Q3(){},
a9o:function a9o(){},
aE8:function aE8(){},
aKM:function aKM(d,e){this.a=d
this.b=e},
and:function and(){},
aqj:function aqj(){},
aqk:function aqk(){},
aqr:function aqr(){},
NV:function NV(){},
xu:function xu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
i4:function i4(){},
a9s:function a9s(d){this.a=d},
a9t:function a9t(d){this.a=d},
a9u:function a9u(d){this.a=d},
PZ:function PZ(){},
Q_:function Q_(){},
a9x:function a9x(d){this.a=d},
Q1:function Q1(){},
Q2:function Q2(d){this.a=d},
a9r:function a9r(d){this.a=d},
a9q:function a9q(d){this.a=d},
PY:function PY(d){this.a=d},
a9v:function a9v(d){this.a=d},
a9w:function a9w(d){this.a=d},
Q0:function Q0(d){this.a=d},
IU:function IU(){},
b1u:function b1u(d){this.a=d},
b1v:function b1v(d){this.a=d},
b1w:function b1w(d){this.a=d},
b1x:function b1x(d){this.a=d},
b1y:function b1y(d){this.a=d},
b1z:function b1z(d){this.a=d},
b1A:function b1A(d){this.a=d},
b1B:function b1B(d){this.a=d},
b1C:function b1C(d){this.a=d},
b1D:function b1D(d){this.a=d},
b1E:function b1E(d){this.a=d},
b1F:function b1F(d){this.a=d},
b1G:function b1G(d){this.a=d},
Rw:function Rw(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
ZA:function ZA(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fa$=g
_.cJ$=h
_.c=_.a=null},
boA:function boA(d,e){this.a=d
this.b=e},
boy:function boy(d){this.a=d},
boz:function boz(d,e){this.a=d
this.b=e},
box:function box(){},
boB:function boB(d){this.a=d},
bHT(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.a5:d
return new A.ro(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aRq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.a3U:u
else w=g
v=f==null?A.aDK(!1,u,0,u,!1,D.A6):f
w=new A.eE(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.aDK(!1,u,0,u,!1,D.A6):d,j,a0,i,s,!1,p)
w.axJ(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c6c(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bO2(d.ay,e.ay,f)
v=A.bO2(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.lv(d.cy,e.cy,f,A.a3i(),x.S)
r=B.a2(d.r,e.r,f)
q=B.u1(d.w,e.w,f)
p=A.lv(d.a,e.a,f,A.chM(),x.cw)
p.toString
o=B.bSx(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aRq(v,m,w,r,e.z,s,new A.AD(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Rx(n),!1,u,o,!0,e.cx,p)},
aDK(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.l.aM(127.5),D.eu.B()>>>16&255,D.eu.B()>>>8&255,D.eu.B()&255):null
else w=e
return new A.a4R(h,w,g,i,f,!1)},
bO2(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.u1(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bPu(t,A.lv(v.d,u.d,f,A.a3i(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.u1(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.aDK(!1,s,v,u,e.a,new A.NQ(!1,r,w.c,!0))},
c1Q(d,e,f){var w=B.a2(d.c,e.c,f),v=B.u1(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.l.aM(127.5),D.eu.B()>>>16&255,D.eu.B()>>>8&255,D.eu.B()&255):null
return new A.nT(e.a,e.b,w,v)},
clm(d){return!0},
bKd(d,e,f){var w=f.w
if(w!=null)return A.bL3(w.a,A.bHx(w),e/100)
w=f.r
w=w
return w==null?D.eu:w},
cf0(d,e,f){var w,v=f.w
if(v!=null)w=A.bL3(v.a,A.bHx(v),e/100)
else{v=f.r
w=v
if(w==null)w=D.eu}return A.aG0(w,40)},
bVa(d,e,f,g,h){var w,v=A.bKd(d,e,f),u=f.w
if(u!=null)w=A.bL3(u.a,A.bHx(u),e/100)
else{u=f.r
w=u
if(w==null)w=D.eu}u=A.aG0(w,40)
return new A.PX(v,h==null?4:h,u)},
clk(d,e){return!0},
chx(d,e){return Math.abs(d.a-e.a)},
ciP(d,e){var w=J.d7(e,new A.bCq(d),x.bY)
w=B.R(w,w.$ti.i("aw.E"))
return w},
ciL(d,e){return-1/0},
ciK(d,e){return d.a[e].b},
bWv(d){var w=J.d7(d,new A.bCn(),x.fT)
w=B.R(w,w.$ti.i("aw.E"))
return w},
bWu(d){return A.aG0(D.eu,15)},
ro:function ro(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
eE:function eE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aRr:function aRr(){},
Rx:function Rx(d){this.a=d},
a4R:function a4R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
nT:function nT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NQ:function NQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
AD:function AD(d,e,f){this.a=d
this.b=e
this.c=f},
aRg:function aRg(d,e){this.a=d
this.b=e},
a9p:function a9p(){},
HB:function HB(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bCq:function bCq(d){this.a=d},
bCp:function bCp(d){this.a=d},
abG:function abG(){},
bCn:function bCn(){},
oi:function oi(){},
rW:function rW(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
uh:function uh(d,e){this.a=d
this.b=e},
vk:function vk(d,e){this.a=d
this.b=e},
Jm:function Jm(d){this.a=d},
Ry:function Ry(d){this.a=d},
Bu:function Bu(d,e){this.a=d
this.b=e},
an0:function an0(){},
an1:function an1(){},
ane:function ane(){},
aql:function aql(){},
aqo:function aqo(){},
as6:function as6(){},
as7:function as7(){},
as8:function as8(){},
asa:function asa(){},
asb:function asb(){},
asc:function asc(){},
asd:function asd(){},
awM:function awM(){},
ayu:function ayu(){},
aRs:function aRs(d){this.a=d},
aRt:function aRt(){},
aRu:function aRu(){},
Bv:function Bv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
as9:function as9(){},
aRv:function aRv(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aRy:function aRy(){},
aRw:function aRw(d,e,f){this.a=d
this.b=e
this.c=f},
aRx:function aRx(d,e,f){this.a=d
this.b=e
this.c=f},
aRz:function aRz(){},
xd:function xd(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
abF:function abF(d,e,f){this.d=d
this.e=e
this.a=f},
ags:function ags(d,e,f,g,h,i,j,k){var _=this
_.aP=d
_.iW=e
_.dd=f
_.hm=g
_.C=h
_.a8=_.Y=_.Z=null
_.aa=i
_.bK=_.aS=_.ar=_.aE=$
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
bGx(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bi(o.length,0,!1,x.i),m=B.a8(o),l=new B.ac(o,new A.aDN(),m.i("ac<1,J>")).iB(0,new A.aDO()),k=e-l,j=new A.aDR(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gaZ(0)/2
s=u===o.length-1?0:w
v+=t.gaZ(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gaZ(0)/2
s=u===o.length-1?0:w
v+=t.gaZ(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gaZ(0)/2
s=u===o.length-1?0:w
v+=t.gaZ(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.jL(o,m.i("jL<1>")).aN(0,new A.aDP(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.jL(o,m.i("jL<1>")).aN(0,new A.aDQ(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aDN:function aDN(){},
aDO:function aDO(){},
aDR:function aDR(d,e,f){this.a=d
this.b=e
this.c=f},
aDS:function aDS(d,e,f){this.a=d
this.b=e
this.c=f},
aDP:function aDP(d,e,f){this.a=d
this.b=e
this.c=f},
aDQ:function aDQ(d,e,f){this.a=d
this.b=e
this.c=f},
bHx(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.jL(w,B.a8(w).i("jL<1>")).aN(0,new A.aOb(v,d))
else throw B.d(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aOb:function aOb(d,e){this.a=d
this.b=e},
aH9(d,e){var w,v
if(e!=null){w=B.a8(e).i("ac<1,J>")
v=B.R(new B.ac(e,new A.aHa(),w),w.i("aw.E"))
return A.ciD(d,new A.a5A(v,x.C))}else return d},
aHa:function aHa(){},
cap(d,e){var w=!0
if(d!==C.hv)if(!(d===C.aL&&e===C.T))w=d===C.kf&&e===C.bJ
if(w)return D.Kk
else{w=!0
if(d!==C.ke)if(!(d===C.kf&&e===C.T))w=d===C.aL&&e===C.bJ
if(w)return D.Kl
else return D.anS}},
Qw:function Qw(d,e){this.a=d
this.b=e},
a5p:function a5p(d,e){this.a=d
this.b=e},
Bz:function Bz(d,e){this.a=d
this.$ti=e},
ask:function ask(){},
ciD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ao(),i=x.v,h=B.b([],i),g=new B.cw(j.r,C.aP,k,k,h)
for(j=B.PG(d),w=B.b([],x.I),v=new B.PI(j,!1,w),u=e.a,t=j.a,s=x.dc;v.q();){r=v.c
if(r===0||v.f)B.T(B.h4('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.PH(v,r)
v.FI()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.FI()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eF(B.b([],i),!0,s)
p=new B.Na(new B.cw(t,p,k,new B.avd([q,o,o+m,!0]),l),C.P,k)
h.push(p)
l=g.f
if(l!=null)p.h8(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a5A:function a5A(d,e){this.a=d
this.b=0
this.$ti=e},
baa:function baa(){},
bHn(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.C)(d),++v){u=d[v]
if(!u.k(0,D.ie))C.m.gaf(s).push(u)
else if(C.m.gaf(s).length!==0)s.push(B.b([],t))}if(C.m.gaf(s).length===0)s.pop()
return s},
c1X(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geJ(v)===0){v=d.a.a
if(v.geJ(v)===0){v=d.b.a
if(v.geJ(v)===0){v=d.c.a
v=v.geJ(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aG0(d,e){var w=1-e/100
return B.aD(d.ghj(d),C.l.aM(d.gR6()*w),C.l.aM(d.gIR()*w),C.l.aM(d.gNE()*w))},
bPs(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
bHo(d){var w=d.a,v=w?A.b6k(d.b):0,u=w?A.b6k(d.c):0,t=w?A.b6k(d.d):0
return new B.al(v,u,t,w?A.b6k(d.e):0)},
c7t(d){var w
if(d.c===0){d.sfv(null)
w=B.c7(d.r)
d.r=B.aD(0,w.B()>>>16&255,w.B()>>>8&255,w.B()&255).gt(0)}},
bId(d,e,f,g){var w
if(f!=null){d.r=C.a4.gt(0)
d.sfv(f.pk(0,g))}else{w=e==null?C.a5:e
d.r=w.gt(w)
d.sfv(null)}},
b6k(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
lv(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.fT(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.fT(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
ck_(d,e,f){return C.l.aM(d+(e-d)*f)},
bL3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.fT(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a2(o,n,(f-r)/(p-r))
t.toString
return t}}return C.m.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.abq.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.ca:C.Z
r=r?C.G:C.aY
w=x.p
v=B.b([],w)
C.m.L(v,B.b([B.cy(t.x,C.G,s,18),C.bH],w))
v.push(B.aA(new B.ew(t.c,!1,s),1))
v=B.aq(v,C.a2,s,C.q,C.v,0,s,s)
u=t.w
w=B.b([v,C.aa,B.l(t.d,1,C.aW,s,B.cc(u==null?C.D:u,22,C.ai),s,s,s)],w)
return B.bC(r,B.ad(w,C.a2,s,C.k_,C.v,0),q,s,C.aS,s,3)}}
A.wF.prototype={
OZ(d){return this.b2o(d)},
b2o(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$OZ=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eQ("finance_summary",B.a4(["p_from",E.tW(d.a),"p_to",E.tW(d.b)],s,r),r),$async$OZ)
case 3:q=f
if(q==null){u=D.bp0
w=1
break}if(x.f.b(q)){u=B.dr(q,s,r)
w=1
break}u=D.brh
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$OZ,v)},
OY(d){return this.b2n(d)},
b2n(d){var w=0,v=B.r(x.c),u,t=this,s,r,q
var $async$OY=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.eQ("finance_kpis",B.a4(["p_from",E.tW(d.a),"p_to",E.tW(d.b)],s,r),r),$async$OY)
case 3:q=f
if(x.f.b(q)){u=B.dr(q,s,r)
w=1
break}u=D.boD
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$OY,v)},
ro(d){return this.axd(d)},
axd(d){var w=0,v=B.r(x.S),u,t=this,s,r,q
var $async$ro=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.kM("sevdesk-sync",B.a4(["from",E.tW(d.a),"to",E.tW(d.b)],s,s)),$async$ro)
case 3:r=f.a
if(x.f.b(r)&&typeof J.t(r,"upserted")=="number"){u=C.l.v(B.hF(J.t(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$ro,v)},
OU(d){return this.b2c(d)},
b2c(d){var w=0,v=B.r(x.N),u,t=this,s,r,q
var $async$OU=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.kM("finance-export-pdf",B.a4(["from",E.tW(d.a),"to",E.tW(d.b)],s,s)),$async$OU)
case 3:r=f.a
if(x.f.b(r)&&typeof J.t(r,"base64")=="string"){u=B.aH(J.t(r,"base64"))
w=1
break}throw B.d(B.ea("PDF-Export fehlgeschlagen"))
case 1:return B.p(u,v)}})
return B.q($async$OU,v)}}
A.GV.prototype={
IK(d){return this.aqa(d)},
aqa(d){var w=0,v=B.r(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$IK=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.OZ(d),$async$IK)
case 7:q=f
o=A.aLQ(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.Z(m)
o=r.KB(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$IK,v)},
IG(d){return this.apS(d)},
apS(d){var w=0,v=B.r(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$IG=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.OY(d),$async$IG)
case 7:q=f
o=A.c4L(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.Z(m)
o=r.KB(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$IG,v)},
ro(d){return this.axe(d)},
axe(d){var w=0,v=B.r(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$ro=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.ro(d),$async$ro)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.Z(n)
p=r.KB(q)
throw B.d(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$ro,v)},
OT(d){return this.b2b(d)},
b2b(d){var w=0,v=B.r(x.E),u,t=2,s=[],r=this,q,p,o,n,m
var $async$OT=B.n(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.OU(d),$async$OT)
case 7:q=f
o=C.ji.cC(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.Z(m)
o=r.KB(p)
throw B.d(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$OT,v)},
KB(d){if(d instanceof B.Ay)return d
if(d instanceof B.m5){if(d.b==="42501")return new B.xy(d.a)
return new B.v1(d.a)}if(d instanceof B.Qh)return new B.v1("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Dw("Unerwarteter Fehler: "+B.h(d))},
$iaLB:1}
A.rY.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.xi.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.yj.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aGB.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aHK.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.pA.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Fe.prototype={
gbQ(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.pB.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.AB.prototype={
JK(d){return this.axc(0)},
axc(d){var w=0,v=B.r(x.h6),u,t=this,s,r,q,p
var $async$JK=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:p={}
t.sev(0,C.eB)
s=t.r
r=s.aQ(0,$.zn(),x.P)
p.a=null
w=3
return B.j(B.qK(new A.aLw(p,t,r),x.H),$async$JK)
case 3:t.sev(0,f)
q=t.f
if(q.gi6(q)==null){q=$.bFY()
s=s.e
s===$&&B.a()
s.cG(q)}u=p.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$JK,v)},
OS(){return this.b2a()},
b2a(){var w=0,v=B.r(x.aD),u,t=this,s,r,q
var $async$OS=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:q={}
t.sev(0,C.eB)
s=t.r.aQ(0,$.zn(),x.P)
q.a=null
w=3
return B.j(B.qK(new A.aLv(q,t,s),x.H),$async$OS)
case 3:t.sev(0,e)
r=t.f
u=r.gi6(r)!=null?null:q.a
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$OS,v)}}
A.AC.prototype={
dA(d,e){var w=null,v=e.aC($.zn(),x.P),u=e.aC($.bFY(),x.aN)
return B.iZ(B.dY(B.b([new B.fW("Finanzen","Dashboard",new A.am6(e.aC($.bFW(),x.b).gjQ(),new A.aLH(this,d,e),new A.aLI(this,d,e),new A.aLJ(d),new A.aLK(d),new A.aLL(this,d,e,v),w),w),C.bv,new A.atJ(v,w),C.cB,D.atJ,C.cB,B.dQ(u,new A.aLM(),new A.aLN(),new A.aLO(),!1,!0,!1,x.d,x.l)],x.p),C.dh,w,C.ad,!1),C.G,new A.aLP(e))},
MH(d,e){return this.aUW(d,e)},
aUW(d,e){var w=0,v=B.r(x.H),u,t,s,r
var $async$MH=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:s=$.bFW()
w=3
return B.j(e.aQ(0,s.gie(),x.F).JK(0),$async$MH)
case 3:r=g
if(d.e==null){w=1
break}s=e.aQ(0,s,x.b)
s=s.gi6(s)
t=d.R(x.q).f
t.bp(B.cg(null,null,null,null,null,C.K,null,B.l(s==null?"sevDesk synchronisiert: "+B.h(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
case 1:return B.p(u,v)}})
return B.q($async$MH,v)},
KC(d,e){return this.aEG(d,e)},
aEG(d,e){var w=0,v=B.r(x.H)
var $async$KC=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:w=2
return B.j(B.aBk(d,"finanzauswertung.pdf",new A.aLC(e),"Finanzauswertung"),$async$KC)
case 2:return B.p(null,v)}})
return B.q($async$KC,v)},
DT(d,e,f){return this.aSr(d,e,f)},
aSr(d,e,f){var w=0,v=B.r(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$DT=B.n(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.hX(null,null,!0,null,new A.aLF(f,d),d,null,!0,!0,x.cJ),$async$DT)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nQ(e.aQ(0,$.bN(),x.A))
p=f.a
o=f.b
n=$.dy()
m=n.aB(p)
n=n.aB(o)
w=8
return B.j(r.yb("finance_period",p,o,B.a4(["period_from",p.dR()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$DT)
case 8:if(d.e!=null)d.R(x.q).f.bp(F.oD)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.Z(k)
if(d.e!=null)d.R(x.q).f.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Fehler: "+B.h(q),null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$DT,v)}}
A.am6.prototype={
u(d){var w=this,v=null,u=A.arp(C.G,C.hR,C.G,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.arp(v,C.KZ,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.arp(v,D.Cn,v,s?v:w.d,"sevDesk synchronisieren"),q=A.arp(C.aU,C.jE,C.aU,s?v:w.e,"PDF-Export")
return B.aq(B.b([u,C.bH,t,C.bH,r,C.bH,q,C.bH,A.arp(C.bi,C.hQ,C.bi,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.E,v,C.q,C.a8,0,v,v)}}
A.aro.prototype={
u(d){var w,v=this,u=null,t=B.aS(12),s=B.aS(12),r=B.aS(12),q=v.w
if(q==null)q=C.aY
q=B.d1(q,1)
w=v.r
if(w==null)w=C.D
return B.K_(B.e3(!1,C.at,!0,t,B.fa(!1,s,!0,B.bb(u,B.cy(v.c,w,u,20),C.O,u,u,new B.b5(u,u,q,r,u,u,C.a6),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.O,C.aO,0,u,u,u,u,u,C.cg),u,v.d,u,u)}}
A.atJ.prototype={
dA(d,e){var w=null,v=this.e,u=$.dy(),t=x.p
return B.bC(w,B.ad(B.b([D.amJ,C.aa,B.aq(B.b([D.aq7,C.bB,B.aA(B.l(u.aB(v.a)+" \u2013 "+u.aB(v.b),w,w,w,B.H(C.D,16,C.ai),w,w,w),1)],t),C.E,w,C.q,C.v,0,w,w),C.R,B.ml(C.dw,B.b([new A.LN("Monat",new A.brl(e),w,w),new A.LN("Jahr (YTD)",new A.brm(e),w,w),new A.LN("Zeitraum w\xe4hlen \u2026",new A.brn(this,d,e),D.aoJ,w)],t),C.eP,6,8)],t),C.a2,w,C.q,C.v,0),w,w,C.a0,w,3)},
LW(d,e){return this.aQF(d,e)},
aQF(d,e){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$LW=B.n(function(f,g){if(f===1)return B.o(g,v)
for(;;)switch(w){case 0:t=new B.b_(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.aBp(new A.brk(),d,B.bF(B.aX(t)-5,1,1,0,0,0,0),new B.mO(s.a,s.b,x.bz),B.bF(B.aX(t)+1,1,1,0,0,0,0),C.fA),$async$LW)
case 2:r=g
if(r!=null)e.aQ(0,$.zn().gie(),x.V).wd(0,new E.mU(r.a,r.b))
return B.p(null,v)}})
return B.q($async$LW,v)}}
A.LN.prototype={
u(d){var w=null,v=B.aS(9999),u=B.aS(9999),t=B.aS(9999),s=B.d1(C.aY,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.m.L(q,B.b([B.cy(p,C.D,w,14),C.bH],r))
q.push(B.l(this.c,w,w,w,B.H(C.D,13,C.ai),w,w,w))
return B.e3(!1,C.at,!0,v,B.fa(!1,u,!0,B.bb(w,B.aq(q,C.E,w,C.q,C.a8,0,w,w),C.O,w,w,new B.b5(w,w,s,t,w,w,C.a6),w,w,w,w,C.n7,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.O,C.aO,0,w,w,w,w,w,C.cg)}}
A.Me.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iU(new A.bxm(this)),C.cB,D.amN,C.R],r),p=this.c.w
if(p.length===0)q.push(B.bC(s,B.aq(B.b([D.ar7,C.bg,B.aA(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.H(C.M,14,C.F),s,s,s),1)],r),C.E,s,C.q,C.v,0,s,s),C.aO,s,C.a0,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.C)(p),++u){t=p[u]
C.m.L(w,B.b([new A.am4(t.a,t.b,t.c==="revenue",t.d,s),C.aa],r))}q.push(B.ad(w,C.E,s,C.q,C.v,0))}return B.ad(q,C.aF,s,C.q,C.v,0)}}
A.am4.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.ca:C.aO,s=B.d1(u?C.G:C.aY,1),r=B.aS(4),q=w.c
r=B.bb(C.an,B.l(C.o.a4(q,0,1),v,v,v,B.cc(C.D,14,C.N),v,v,v),C.O,v,v,new B.b5(t,v,s,r,v,v,C.a6),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.aW,v,B.H(C.D,14,C.ai),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aA(B.ad(B.b([q,B.l(t,v,v,v,B.H(C.M,12,C.F),v,v,v)],s),C.a2,v,C.q,C.v,0),1)
q=$.dd().aB(w.f)
return B.bC(v,B.aq(B.b([r,C.bg,t,B.l(q,v,v,v,B.H(u?C.bi:C.D,15,C.ai),v,v,v)],s),C.E,v,C.q,C.v,0,v,v),v,v,C.h1,v,3)}}
A.KU.prototype={
u(d){var w=null
return B.bC(C.aU,B.aq(B.b([D.arO,C.bg,B.aA(B.l(this.c,w,w,w,B.H(C.D,14,C.F),w,w,w),1)],x.p),C.E,w,C.q,C.v,0,w,w),C.fX,w,C.a0,w,3)}}
A.abr.prototype={
dA(d,e){return B.dQ(e.aC($.c0v(),x.e),new A.aRd(),new A.aRe(),new A.aRf(),!1,!0,!1,x.X,x.l)}}
A.Le.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.bzD,C.R,B.iU(new A.bom(v,q,100-t.w.a,w,p)),C.R,new A.aqI(u),C.bv,D.bzC,C.R,new A.an_(t,u),C.bv,D.bzw,C.R,B.bG(u,!0,u,B.oa(u,B.bC(u,new A.XB(t,220,u),u,u,C.a0,u,3),C.aC,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bon(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.ag,u),C.bv,D.bzp,C.R,B.bG(u,!0,u,B.oa(u,new A.XM(t,200,!1,u),C.aC,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.boo(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.ag,u),C.bv,D.bzu,C.R,new A.ast(t,u),C.bv,D.bzq,C.R,new A.aoJ(t,u)],s)
if(t.f.length!==0)C.m.L(r,B.b([C.bv,D.bzy,C.R,new A.ayr(t,u)],s))
return B.ad(r,C.aF,u,C.q,C.v,0)}}
A.aqI.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.H(C.M,11,C.F).eM(1.35),w,w,w)}}
A.as_.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.o.cO(m.d,"-")?C.aU:C.bi
else w=C.D
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bop(m,d):l
r=x.p
q=B.b([B.aA(B.l(m.c.toUpperCase(),l,l,l,B.H(C.M,10,C.N).hy(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d1(C.kM,0.8)
n=B.aS(4)
q.push(B.bb(l,B.l("Ziel "+p,l,l,l,B.H(C.aU,9,C.N),l,l,l),C.O,l,l,new B.b5(l,l,o,n,l,l,C.a6),l,l,l,l,C.pW,l,l,l))}q=B.b([B.aq(q,C.E,l,C.q,C.v,0,l,l),C.bD,B.bHm(C.eR,B.l(m.d,l,l,l,B.cc(w,22,C.N),l,l,l),C.pe)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.aW,l,B.H(C.M,10,C.bl),l,l,l))
q.push(C.e9)
q.push(B.aq(B.b([new A.Yn("Vormonat",m.r,l),C.dE,new A.Yn("Vorjahr",m.f,l)],r),C.E,l,C.q,C.v,0,l,l))
q.push(C.e9)
q.push(B.aA(new A.a13(v,m.y,m.z,l),1))
return B.bG(l,u,l,B.oa(l,B.bC(l,B.ad(q,C.a2,l,C.q,C.v,0),l,l,C.eH,l,3),C.aC,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.ag,l)}}
A.Yn.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aS(4)
return B.bb(r,B.l(this.c+" \u2014",r,r,r,B.H(C.M,9,C.N),r,r,r),C.O,r,r,new B.b5(C.aY,r,r,q,r,r,C.a6),r,r,r,r,C.pW,r,r,r)}w=q>=0
v=w?C.bi:C.aU
u=v.fu(0.12)
t=B.d1(v,0.7)
s=B.aS(4)
return B.bb(r,B.aq(B.b([B.cy(w?F.ao_:D.anZ,v,r,10),F.bBI,B.l(this.c+" "+C.l.ah(q,1)+" %",r,r,r,B.H(v,9,C.N),r,r,r)],x.p),C.E,r,C.q,C.a8,0,r,r),C.O,r,r,new B.b5(u,r,t,s,r,r,C.a6),r,r,r,r,C.pW,r,r,r)}}
A.a13.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.b_
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.f7(v,j[v]))
u=C.m.iB(j,new A.bwS())
t=C.m.iB(j,new A.bwT())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bwU(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a9n(k,!1)
w=B.b([A.aRq(k,2,A.aDK(!1,C.G.fu(0.16),0,k,!0,D.A6),C.G,0.35,k,D.K8,k,!0,!1,!0,!1,D.LN,!1,10,D.a9I,!0,C.hU,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Rw(A.bHT(k,k,k,D.bj_,l,D.HI,D.K3,D.K9,w,D.atO,k,m,k,n,D.a8Z,D.bj0,D.an4),C.ba,C.aR,k,k)}}
A.XB.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.bQm
w=C.m.fo(p,0,new A.bej())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aDT(B.b([A.a4T(q,q,D.H5,q,C.G,q,q,q,r.b,6),A.a4T(q,q,D.H5,q,C.D,q,q,q,r.c,6)],t),2,q,q,s))}return B.cr(A.bO3(A.aDM(q,q,u,q,q,A.a9n(q,!1),q,new A.AE(!0,!0,q,new A.bek(),A.a3c(),!1,q,A.aB6(),A.a3c()),q,v,q,q,new A.wH(!0,new A.qL(16,q,new A.rM(!0,new A.bel(this),46,q),!0),D.my,D.my,new A.qL(16,q,new A.rM(!0,new A.bem(p),26,q),!0)))),this.d,q)},
aU8(d){if(Math.abs(d)>=1000)return C.l.ah(d/1000,1)+" k"
return C.l.ah(d,0)}}
A.XM.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.R(new B.ac(v,new A.bf9(),w),x.i)
C.m.L(o,new B.ac(u,new A.bfa(),w))
t=C.m.fo(o,0,new A.bfb())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aDT(B.b([A.a4T(q,q,q,q,C.G,q,q,q,v[s],14),A.a4T(q,q,q,q,C.bi,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cr(A.bO3(A.aDM(q,q,n,q,q,A.a9n(q,!1),q,D.K9,q,o,q,q,new A.wH(!0,D.my,D.my,D.my,new A.qL(16,q,new A.rM(!0,new A.bfc(p),26,q),!0)))),this.d,q)
return this.e?r:B.bC(q,r,q,q,C.a0,q,3)}}
A.ast.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.bQl
w=new B.ac(k,new A.boV(),B.a8(k).i("ac<1,J>")).iB(0,new A.boW())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.C)(k),++s){r=k[s]
q=B.l(r.b,m,m,m,new B.S(!0,C.D,m,l,C.cp,m,14,C.N,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dd()
o=p.aB(r.f)
q=B.ad(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.S(!0,C.M,m,l,C.cp,m,12,C.bl,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.a2,m,C.q,C.v,0)
o=r.d
p=p.aB(o)
n=new B.aZ(4,4)
o=B.b([new B.j0(C.b9,C.q,C.v,C.E,m,C.ch,m,0,B.b([new B.lM(1,C.f5,q,m),C.bB,B.l(p,m,m,m,new B.S(!0,C.D,m,"Bricolage Grotesque",C.cp,m,16,C.N,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.e9,new B.FX(new B.dp(n,n,n,n),C.cE,B.Rz(C.aY,8,C.l.aJ(o/w,0,1),D.GU),m)],v)
q=C.m.gaf(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a3g(r.gbQ(),q.gbQ())
else q=!0
if(!q)o.push(C.R)
C.m.L(u,o)}return B.bC(m,B.ad(u,C.E,m,C.q,C.v,0),m,m,C.a0,m,3)}}
A.aoJ.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aA(new A.EI("Aktive Kunden",""+s,u),1)
w=B.aA(new A.EI("K\xe4ufe",""+t.a,u),1)
v=$.dd()
return B.bC(u,B.aq(B.b([s,w,B.aA(new A.EI("\xd8-Warenkorb",v.aB(t.d),u),1),B.aA(new A.EI("Umsatz/Kunde",v.aB(r),u),1)],x.p),C.E,u,C.q,C.v,0,u,u),u,u,C.a0,u,3)}}
A.EI.prototype={
u(d){var w=null
return B.ad(B.b([B.l(this.c.toUpperCase(),w,w,w,B.H(C.M,10,C.N).hy(0.6),w,w,w),C.cO,B.l(this.d,w,w,w,B.cc(C.D,20,C.N),w,w,w)],x.p),C.a2,w,C.q,C.a8,0)}}
A.ayr.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ac(m,new A.byD(),B.a8(m).i("ac<1,J>")).iB(0,new A.byE()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.C)(m),++v){u=m[v]
t=B.l(u.b,1,C.aW,o,new B.S(!0,C.D,o,n,C.cp,o,13,C.N,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.l(""+u.c+"\xd7 ",o,o,o,new B.S(!0,C.M,o,n,C.cp,o,12,C.ai,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dd().aB(r)
p=new B.aZ(4,4)
r=B.b([new B.j0(C.b9,C.q,C.v,C.E,o,C.ch,o,0,B.b([new B.lM(1,C.f5,t,o),s,B.l(q,o,o,o,new B.S(!0,C.D,o,n,C.cp,o,13,C.N,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.bD,new B.FX(new B.dp(p,p,p,p),C.cE,B.Rz(C.aY,6,C.l.aJ(r/l,0,1),D.GU),o)],k)
t=C.m.gaf(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a3g(u.gbQ(),t.gbQ())
else t=!0
if(!t)r.push(C.aa)
C.m.L(j,r)}return B.bC(o,B.ad(j,C.E,o,C.q,C.v,0),o,o,C.a0,o,3)}}
A.yG.prototype={
u(d){var w=null
return B.bC(w,B.l(this.c,w,w,w,B.H(C.M,13,C.F),w,w,w),C.aO,w,C.a0,w,3)}}
A.an_.prototype={
dA(d,e){return B.dQ(e.aC($.bFX(),x.fM),new A.bcN(this,d,e),new A.bcO(),new A.bcP(),!1,!0,!1,x.h,x.l)}}
A.DG.prototype={
a0(){return new A.Xe()},
b7y(){return this.d.$0()}}
A.Xe.prototype={
aH(){var w,v,u,t,s,r,q=this
q.aY()
q.d=new B.b_(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.t(w,"as_of"))!=null){w.toString
u=B.f6(J.ap(J.t(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.uo[t].a
if(v)r=""
else{r=B.b9(J.t(w,s))
if(r==null)r=null
r=C.l.ah(r==null?0:r,2)
r=B.bL(r,".",",")}u.l(0,s,new B.bz(new B.cP(r,C.bY,C.bj),$.ag()))}q.e!==$&&B.au()
q.e=u},
m(){var w,v=this.e
v===$&&B.a()
v=new B.bW(v,v.r,v.e,B.m(v).i("bW<2>"))
while(v.q()){w=v.d
w.T$=$.ag()
w.U$=0}this.aD()},
uh(d){var w=this.e
w===$&&B.a()
w=C.o.aW(w.h(0,d).a.a)
w=B.bL(w,".","")
w=B.hz(B.bL(w,",","."))
return w==null?0:w},
a8G(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.uo[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.l.ah(u,2)
s=B.bL(s,".",",")
t.n4(0,t.a.Aj(C.bj,C.bY,s))}}this.M(new A.bcB())},
aMU(){this.a8G(D.bp2)
this.c.R(x.q).f.bp(D.bCt)},
L8(){var w=0,v=B.r(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$L8=B.n(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.aW(a1)
for(e=0;e<8;++e)a2.E(0,D.uo[e].a)
q=a2
t=4
w=7
return B.j($.aLp.co().BG(B.b(["csv","txt"],x.s),C.C5,!0),$async$L8)
case 7:p=a5
a2=p
o=a2==null?null:J.N6(a2.a).c
if(o==null){w=1
break}n=C.b3.Os(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.HN.cC(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.C)(a1),++e){l=a1[e]
k=J.aBW(l,B.bO("[;,\t]",!0,!1,!1))
if(J.c9(k)<2)continue
j=C.o.aW(J.t(k,0)).toLowerCase()
i=J.zq(q,j)?j:D.brj.h(0,j)
if(i==null)continue
d=C.o.aW(C.m.ou(J.c1f(k,1)))
d=B.bL(d,"\u20ac","")
d=B.bL(d," ","")
d=B.bL(d,".","")
h=B.bL(d,",",".")
g=B.hz(h)
if(g!=null)J.d6(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.R(x.q).f.bp(D.bC5)
w=1
break}r.a8G(m)
r.c.R(x.q).f.bp(B.cg(null,null,null,null,null,C.K,null,B.l(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.Z(a3)
a1=r.c
if(a1==null){w=1
break}a1.R(x.q).f.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Import fehlgeschlagen: "+B.h(f),null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$L8,v)},
Lk(){var w=0,v=B.r(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Lk=B.n(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.M(new A.bcC(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.bat("upsert_finance_balance",B.a4(["p_as_of",C.o.a4(n.dR(),0,10),"p_cash_and_bank",q.uh("cash_and_bank"),"p_receivables",q.uh("receivables"),"p_inventory_value",q.uh("inventory_value"),"p_other_current_assets",q.uh("other_current_assets"),"p_fixed_assets",q.uh("fixed_assets"),"p_current_liabilities",q.uh("current_liabilities"),"p_long_term_liabilities",q.uh("long_term_liabilities"),"p_equity",q.uh("equity")],x.N,x.aU))
w=7
return B.j(n,$async$Lk)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.b7y()
o=q.c
o.toString
B.b7(o,!1).fO()
q.c.R(x.q).f.bp(D.bC8)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.Z(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.R(x.q).f.bp(B.cg(null,null,null,null,null,C.K,null,B.l("Speichern fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null),null,C.ab,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.M(new A.bcD(q))
w=r.pop()
break
case 6:case 1:return B.p(u,v)
case 2:return B.o(s.at(-1),v)}})
return B.q($async$Lk,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.cc(C.D,18,C.N),r,r,r),p=s.f?r:new A.bcF(s,d),o=s.d
o===$&&B.a()
p=B.h3(D.aqp,B.l("Stichtag: "+C.o.a4(o.dR(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aA(B.h3(D.arC,D.bIs,o?r:s.gaLI(),r),1)
v=x.p
w=B.b([p,C.aa,B.aq(B.b([w,C.bB,B.aA(B.h3(D.arp,D.bIg,o?r:s.gaMT(),r),1)],v),C.E,r,C.q,C.v,0,r,r),C.R],v)
for(u=0;u<8;++u){p=D.uo[u]
o=s.e
o===$&&B.a()
C.m.L(w,B.b([B.dZ(r,C.b7,!1,r,!0,C.K,r,B.e7(),o.h(0,p.a),r,r,r,r,r,2,new B.c6(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.aC,!0,r,!0,r,!1,r,C.be,r,r,r,r,r,C.fK,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.a0,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aL,r,C.aq,r,r,r,r),C.aa],v))}w.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.H(C.M,11,C.F),r,r,r))
p=B.cr(B.eV(B.ad(w,C.aF,r,C.q,C.a8,0),r,r,r,C.ad),r,380)
o=s.f
w=B.dl(C.cT,r,r,o?r:new A.bcG(d),r,r)
o=o?r:s.gaMB()
t=B.e1(C.G,C.Z,r,r,r,r,r)
return B.ja(B.b([w,B.dD(s.f?F.aae:C.ey,o,t)],v),C.Z,p,q)}}
A.bm.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.f4.b(e)&&B.K(this)===B.K(e)&&B.a3g(this.gbQ(),e.gbQ())
else w=!0
return w},
gA(d){return(B.dU(B.K(this))^B.bX9(this.gbQ()))>>>0},
j(d){B.bPm()
return B.K(this).j(0)}}
A.NR.prototype={
a0(){return new A.Xf(B.A(x.S,x.J),new A.aDW(B.A(x.x,x.gF)),null,null)}}
A.Xf.prototype={
u(d){var w,v=this,u=v.a6j(),t=v.CW
t.toString
t=v.a6k(t.aL(0,v.ghL().gt(0)))
w=v.a6k(u)
v.a.toString
return new A.NM(new A.a4S(t,w,null),u,null)},
a6k(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aDT(s.c,s.d,!1,r,s.a))}return d.aZQ(w)},
a6j(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Yz(t.ch)
if(r)s=w.a
r=t.y
t=t.b_Q(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aZR(A.bGy(!1,!0,!0,v.d,v.c,u.gazf(),v.f,v.e))}return t},
azg(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.galG()||e==null||e.a==null){w=v.cy
v.M(w.gYM(w))
return}v.M(new A.bcS(v,e))},
nr(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a6j(),new A.bcT(w)))}}
A.pg.prototype={
Zd(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aDM(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
b_Q(d,e){return this.Zd(null,null,d,e)},
aZR(d){return this.Zd(null,d,null,null)},
aZQ(d){return this.Zd(d,null,null,null)},
a0e(d,e,f){var w,v,u,t=A.lv(d.ch,e.ch,f,A.chR(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bPv(d.d,e.d,f),q=A.bS0(d.e,e.e,f),p=A.bPt(d.c,e.c,f),o=e.a
o=A.a9n(B.a5b(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.aDM(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bPp(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbQ(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.aDL.prototype={
H(){return"BarChartAlignment."+this.b}}
A.hs.prototype={
gaZ(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.aDU(),B.a8(v).i("ac<1,J>")).iB(0,new A.aDV())
v=v.length
return w+(v-1)*this.d},
gbQ(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.jb.prototype={
gbQ(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.nS.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4Q.prototype={
gbQ(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a4U.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ajp.prototype={
H(){return"TooltipDirection."+this.b}}
A.a4V.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Fy.prototype={
gbQ(){return[this.a,this.b,C.dF,C.T,null]}}
A.NS.prototype={}
A.a4W.prototype={
gbQ(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.zF.prototype={
hW(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.a0e(v,w,d)}}
A.amW.prototype={}
A.an2.prototype={}
A.an3.prototype={}
A.an5.prototype={}
A.an6.prototype={}
A.an7.prototype={}
A.an8.prototype={}
A.an9.prototype={}
A.ana.prototype={}
A.aDW.prototype={
Yz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.wj(0,0,!1)
v=new A.Bz(d,x.x)
u=this.a
if(u.ao(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.wj(t,u,!0)}w=null
try{w=C.m.qH(d,new A.aDX())}catch(s){return new A.wj(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.wj(q,r,!1)
u.l(0,v,j)
return j}}
A.wj.prototype={
gbQ(){return[this.a,this.b,this.c]}}
A.an4.prototype={}
A.aDY.prototype={
hF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a4d(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ahU(t,A.bGx(w,t.a),u)
l.y=u
l.b1p(e,u,f)
l.asf(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.m.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.b1B(d,e,m,t,r,s,n,o,f)}}},
ahU(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.d(B.ea("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.jL(p,B.a8(p).i("jL<1>")).aN(0,new A.aDZ(t,q,r,s))
w.push(new A.aaa(q))}return w},
b1p(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aZ(m,m)
l=new B.dp(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b2.dX(Math.max(t,a2),b4,b7)
a4=B.Tw(h,Math.min(b2.dX(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dX(Math.min(u,a2),b4,b7)
a4=B.Tw(h,a5,g,Math.max(b2.dX(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.a5:f).gt(0)
k.sfv(null)
a6=b2.f.el()
v.drawRRect(B.nN(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dX(f,b4,b7)
e=a8.b
b0=b2.dX(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.M(h,a9,g,b0):new B.M(h,b0,g,a9)
J.bf(v.save())
v.clipRect(B.e8(b1),$.p5()[1],!0)
a6=b2.f.el()
v.drawRRect(B.nN(a4),a6)
a6.delete()
v.restore()
b2.b1z(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geJ(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gt(f)
k.c=n
n=$.ao()
k=B.b([],s)
k.push(new B.hZ(a4))
n=A.aH9(new B.cw(n.r,C.aP,null,null,k),o.r)
a6=b2.r.el()
k=n.e
v.drawPath((k==null?n.e=new B.nX(n.gkA().a.snapshot()):k).a,a6)
a6.delete()}}}},
b1B(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Dk(a5,a5,a5,a5,B.dA(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.mF().a36(a8,a7.b),a7.a),C.dF,C.T,a5,b6.c,C.c7)
w.am_(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gau(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dX(s,a6,b6)
q=b4.a
p=a4.dX(q,a6,b6)
o=b1.b
n=u+o.ge3()
m=v+4+(o.gdi(0)+o.gdk(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.bLB)j=v===D.ab6&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a37(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.M(h,i,v,t)
s=b1.a
f=new B.aZ(s,s)
e=B.II(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.mF().NN(new B.N(v,t),d).b
s=$.mF()
q=w.b
p=q.c
q=q.a.c
a0=s.NN(new B.N(p,q.gau(q)),d)
q=g.gcg()
p=w.b.c
s=g.gaod()
a1=b1.Q
if(!a1.k(0,C.ae)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.ZP(d,new A.aE_(a4,a9,e,w,new B.v(q.a-p/2,s.b+o.b-a0.b+r)),new B.v(e.a,e.b),new B.v(0,r),new B.N(v,t))},
b1z(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geJ(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dX(w,j,k)
u=e.a
t=n.dX(u,j,k)
w=u<w
u=w?new B.aZ(i.z,i.Q):C.aA
s=w?new B.aZ(i.x,i.y):C.aA
r=w?C.aA:new B.aZ(i.e,i.f)
w=w?C.aA:new B.aZ(i.r,i.w)
q=B.Tw(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dX(v,j,k),i.b)
r=n.dX(t,j,k)
v=t<v
t=v?C.aA:new B.aZ(i.z,i.Q)
p=v?C.aA:new B.aZ(i.x,i.y)
o=v?new B.aZ(i.e,i.f):C.aA
q=B.Tw(w,s,u,r,t,p,o,v?new B.aZ(i.r,i.w):C.aA)}else q=B.bIH(w,n.dX(v,j,k),u,n.dX(t,j,k),C.aA)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.fl(q,n.r)},
a_t(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ahU(b2,A.bGx(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dX(k,b2,b3)
m=b0[q].c[o]
g=a7.dX(m.a+m.x.b,b2,b3)}else{h=a7.dX(j+m.x.b,b2,b3)
g=a7.dX(b0[q].c[o].b,b2,b3)}a7.dX(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dX(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dX(a4.a,b2,b3)
a6=a7.dX(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a4W(d,q,a0,o,a2,a1,new A.f7(d.a,v),new B.v(n,t))}}return null}}
A.aaa.prototype={}
A.a4S.prototype={
by(d){var w,v=this.e,u=B.bH(d,null,x.w).w.gd4(),t=new A.aDY()
t.a5t()
$.ao()
w=B.b1()
w.b=C.c0
t.f=w
w=B.b1()
w.b=C.bG
t.r=w
w=B.b1()
w.b=C.c0
w.r=C.W.gt(0)
t.w=w
w=B.b1()
w.b=C.bG
w.r=C.a5.gt(0)
w.c=1
t.x=w
t=new A.agf(this.d,v,u,t,d,C.c9,new B.bw(),B.aK(x.g))
t.bs()
t.a1X(v.cy)
t.al7()
return t},
bL(d,e){e.sjb(0,this.d)
e.sa1G(this.e)
e.sd4(B.bH(d,null,x.w).w.gd4())
e.C=d
e.bn()}}
A.agf.prototype={
sjb(d,e){if(this.aP.k(0,e))return
this.aP=e
this.bn()},
sa1G(d){var w=this
if(w.iW.k(0,d))return
w.iW=d
w.a4Y(d.cy)
w.bn()},
sd4(d){if(this.dd.k(0,d))return
this.dd=d
this.bn()},
aV(d,e){var w,v,u=this,t=d.gdO(0),s=t.a
J.bf(s.save())
s.translate(e.a,e.b)
w=u.C
v=u.gD(0)
u.hm.hF(w,new A.a5p(t,v),new A.xu(u.aP,u.iW,u.dd,x.Q))
s.restore()},
a3_(d){var w=this,v=w.gD(0)
return new A.NS(w.hm.a_t(d,v,new A.xu(w.aP,w.iW,w.dd,x.Q)))}}
A.a4J.prototype={
gbQ(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Fw.prototype={
H(){return"AxisSide."+this.b}}
A.vj.prototype={}
A.rM.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ahN.prototype={
gbQ(){return[!1,0,0,0]}}
A.qL.prototype={
gbQ(){return[this.b,this.a,this.c,!0]}}
A.wH.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.f7.prototype={
j(d){return"("+B.h(this.a)+", "+B.h(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.f7))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.l.gA(this.a)^C.l.gA(this.b)}}
A.AE.prototype={
gbQ(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.rc.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ajr.prototype={
gbQ(){return[this.a,this.b]}}
A.TB.prototype={
gbQ(){return[this.a,this.b]}}
A.ob.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.oM.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.lR.prototype={
gbQ(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.mk.prototype={
gbQ(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.aal.prototype={
gbQ(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ajV.prototype={
gbQ(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.PQ.prototype={
gbQ(){return[this.a,this.b,!0]}}
A.wG.prototype={}
A.PX.prototype={
ajq(d,e,f){var w,v
$.ao()
w=B.b1()
v=this.a
w.r=v.gt(v)
w.b=C.c0
d.jL(f,this.b,w)},
gbQ(){return[this.a,this.b,this.c,0]}}
A.amR.prototype={}
A.amV.prototype={}
A.aq3.prototype={}
A.aqm.prototype={}
A.aqn.prototype={}
A.aqp.prototype={}
A.aqq.prototype={}
A.are.prototype={}
A.ard.prototype={}
A.arf.prototype={}
A.auR.prototype={}
A.awN.prototype={}
A.awO.prototype={}
A.ayv.prototype={}
A.aza.prototype={}
A.az9.prototype={}
A.azb.prototype={}
A.aDA.prototype={
PX(d,e,f,g,h,i){return new B.j6(this.b5v(d,e,f,g,h,i),x.g4)},
b5u(d,e,f,g){return this.PX(d,e,f,!0,g,!0)},
b5v(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$PX(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.mF().apD(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.l.d5(u-s,v)*v===u
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
A.NL.prototype={
a5t(){var w,v=this
$.ao()
w=B.b1()
w.b=C.bG
v.a=w
w=B.b1()
w.b=C.c0
v.b=w
w=B.b1()
w.b=C.c0
v.e=w
w=B.b1()
w.b=C.bG
v.c=w
v.d=B.b1()},
hF(d,e,f){var w=this
w.a4f(d,e,f)
w.b1l(e,f)
w.b1x(e,f)
w.b1v(e,f)},
b1v(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.mF().S6(w.a,a1.r-a1.f)
u=$.bFo().PX(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fY(u.a(),u.$ti.i("fY<1>")),s=w.b,r=a2.w,q=a2.x;t.q();){p=t.b
if(!q.$1(p))continue
o=d.fR(p,w,a4)
n=new B.v(o,0)
m=new B.v(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.m7(n,m)
if(j!=null){p.r=C.a4.gt(0)
p.sfv(j.pk(0,i))}else{if(k==null)k=C.a5
p.r=k.gt(k)
p.sfv(a0)}k=l.c
p.c=k
if(k===0){p.sfv(a0)
k=B.c7(p.r)
p.r=B.aD(0,k.B()>>>16&255,k.B()>>>8&255,k.B()&255).gt(0)}a3.Gf(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.mF().S6(w.b,a1.y-a1.x)
u=$.bFo().PX(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fY(u.a(),u.$ti.i("fY<1>")),r=a2.d,g=w.a,a2=a2.e;t.q();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dX(q,w,a4)
n=new B.v(0,e)
m=new B.v(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.m7(n,m)
if(k!=null){q.r=C.a4.gt(0)
q.sfv(k.pk(0,i))}else{if(p==null)p=C.a5
q.r=p.gt(p)
q.sfv(a0)}p=f.c
q.c=p
if(p===0){q.sfv(a0)
p=B.c7(q.r)
q.r=B.aD(0,p.B()>>>16&255,p.B()>>>8&255,p.B()&255).gt(0)}a3.Gf(n,m,d.a,f.d)}},
b1l(d,e){var w,v,u=e.a.as
if((u.B()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.hS(new B.M(0,0,0+w.a,0+w.b),this.b)},
b1x(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.C)(k),++u){t=k[u]
s=B.m7(new B.v(n.fR(t.a,m,e),0),new B.v(n.fR(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.a4.gt(0)
r.sfv(p.pk(0,s))}else{r.r=(q==null?C.a5:q).gt(0)
r.sfv(null)}o=n.e.el()
w.drawRect(B.e8(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.C)(l),++u){t=l[u]
s=B.m7(new B.v(0,n.dX(t.a,m,e)),new B.v(w,n.dX(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.a4.gt(0)
v.sfv(q.pk(0,s))}else{v.r=(r==null?C.a5:r).gt(0)
v.sfv(null)}o=n.e.el()
j.drawRect(B.e8(s),o)
o.delete()}},
b1u(d,e,f){var w,v
this.a4f(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ajr(d,e,f,w)
if(v.b.length!==0)this.b1D(d,e,f,w)},
ajr(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.C)(w),++q){p=w[q]
o=p.e
n=f.dX(o,a1,a0)
m=new B.v(0,n)
o=f.dX(o,a1,a0)
l=new B.v(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.m7(m,l)
if(j!=null){n.r=C.a4.gt(0)
n.sfv(j.pk(0,i))}else{if(k==null)k=C.a5
n.r=k.gt(k)
n.sfv(null)}k=p.c
n.c=k
if(k===0){n.sfv(null)
k=B.c7(n.r)
n.r=B.aD(0,k.B()>>>16&255,k.B()>>>8&255,k.B()&255).gt(0)}n.d=p.x
e.Gf(m,l,f.c,p.d)
n=p.r
h=n.gaZ(n).f5(0,2)
g=C.l.aA(o,n.gau(n).f5(0,2))
J.bf(r.save())
r.translate(h,g)
n=n.gQR().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gaZ(n).f5(0,2)
o=C.l.aA(o,n.gau(n).f5(0,2))
k=f.d
k===$&&B.a()
s.ajs(0,n,new B.v(h,o),k)}}},
b1D(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.C)(w),++q){p=w[q]
o=p.e
n=d.fR(o,a3,a2)
m=new B.v(n,0)
o=d.fR(o,a3,a2)
l=new B.v(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.m7(m,l)
if(j!=null){n.r=C.a4.gt(0)
n.sfv(j.pk(0,i))}else{if(k==null)k=C.a5
n.r=k.gt(k)
n.sfv(null)}k=p.c
n.c=k
if(k===0){n.sfv(null)
k=B.c7(n.r)
n.r=B.aD(0,k.B()>>>16&255,k.B()>>>8&255,k.B()&255).gt(0)}n.d=p.x
a1.Gf(m,l,d.c,p.d)
n=p.r
h=n.gaZ(n).f5(0,2)
g=n.gau(n).f5(0,2)
f=C.l.aA(o,h)
e=C.l.aA(u,g)
J.bf(r.save())
r.translate(f,e)
n=n.gQR().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gaZ(n).f5(0,2)
g=n.gau(n).ac(0,2)
o=C.l.aA(o,h)
k=C.l.aA(u,g)
j=d.d
j===$&&B.a()
s.ajs(0,n,new B.v(o,k),j)}}},
fR(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dX(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a37(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.NM.prototype={
gars(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gart(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
garu(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
garq(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
arO(d){var w,v=this,u=null,t=v.d,s=A.bHo(t.d),r=t.a
r=r.a&&A.c1X(r.b)?r.b:u
w=B.b([B.bb(u,v.c,C.O,u,u,new B.b5(u,u,r,u,u,u,C.a6),u,u,u,s,u,u,u,u)],x.p)
s=new A.aDC(w)
if(v.gars())C.m.hb(w,s.$1(!0),new A.D6(D.H0,t,new B.N(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.garu())C.m.hb(w,s.$1(!0),new A.D6(D.p9,t,new B.N(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.gart())C.m.hb(w,s.$1(!0),new A.D6(D.H1,t,new B.N(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
if(v.garq())C.m.hb(w,s.$1(!0),new A.D6(D.eU,t,new B.N(B.Q(1/0,d.a,d.b),B.Q(1/0,d.c,d.d)),u))
return w},
u(d){return B.iU(new A.aDB(this))}}
A.V1.prototype={
a0(){return new A.a0T(new B.bo(null,x.eF))}}
A.a0T.prototype={
aFO(){switch(this.a.c.a){case 0:return C.jc
case 1:return C.hA
case 2:return C.eR
case 3:return C.hB}},
aGl(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
aFS(d){this.a.toString
return},
aH(){this.aY()
$.cO.x1$.push(this.ga9a())},
bq(d){this.bO(d)
$.cO.x1$.push(this.ga9a())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.aGl()
return B.Wj(B.b9F(0,B.bb(v.aFO(),t.e,C.O,u,u,u,u,u,v.d,w,u,u,u,u)),C.P)}}
A.ahO.prototype={
by(d){return A.c1K(this.f,this.r,this.e)},
bL(d,e){var w=this.e
if(e.C!==w){e.C=w
e.ag()}w=this.f
if(e.Z!==w){e.Z=w
e.ag()}w=this.r
if(e.Y!==w){e.Y=w
e.ag()}}}
A.a4K.prototype={
hK(d){if(!(d.b instanceof B.i5))d.b=new B.i5(null,null,C.P)},
iO(d){if(this.C===C.b9)return this.Ar(d)
return this.aj4(d)},
aUj(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
aeo(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
dU(d){var w=this.aen(d,B.im())
switch(this.C.a){case 0:return d.bU(new B.N(w.a,w.b))
case 1:return d.bU(new B.N(w.b,w.a))}},
aen(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.C===C.b9?d.b:d.d,m=o.an$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.C.a){case 0:q=B.hJ(u,null)
break
case 1:q=B.hJ(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.aeo(p)
t=Math.max(t,o.aUj(p))
m=r.aT$}return new A.bov(n<1/0?n:s,t)},
cM(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.O.prototype.gad.call(p)),n=p.aen(o,B.nM()),m=n.a,l=n.b
switch(p.C.a){case 0:p.fy=o.bU(new B.N(m,l))
p.gD(0)
p.gD(0)
break
case 1:p.fy=o.bU(new B.N(l,m))
p.gD(0)
p.gD(0)
break}w=p.an$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.Y[u]
r=w.fy
q=s.b-p.aeo(r==null?B.T(B.a0("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.C.a){case 0:r=new B.v(q,0)
break
case 1:r=new B.v(0,q)
break
default:r=null}t.a=r
w=t.aT$;++u}},
eB(d,e){return this.As(d,e)},
aV(d,e){if(this.gD(0).ga1(0))return
this.a8.sbw(0,null)
this.xd(d,e)},
m(){this.a8.sbw(0,null)
this.auS()}}
A.bov.prototype={}
A.aDD.prototype={}
A.kL.prototype={
gbQ(){return[this.a,this.b]}}
A.pf.prototype={}
A.amS.prototype={}
A.amT.prototype={
aX(d){var w,v,u
this.fW(d)
w=this.an$
for(v=x.L;w!=null;){w.aX(d)
u=w.b
u.toString
w=v.a(u).aT$}},
aR(d){var w,v,u
this.fH(0)
w=this.an$
for(v=x.L;w!=null;){w.aR(0)
u=w.b
u.toString
w=v.a(u).aT$}}}
A.amU.prototype={}
A.Xc.prototype={
m(){var w,v,u
for(w=this.a_4$,v=w.length,u=0;u<v;++u)w[u].m()
this.jl()}}
A.D6.prototype={
gql(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
giw(){switch(this.c.a){case 0:return C.eR
case 1:return C.hB
case 2:return C.jc
case 3:return C.hA}},
gbaG(){var w=this.d,v=A.bHo(w.d),u=A.bPs(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ac(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ac(0,new B.al(u.a,0,u.c,0))}},
gao0(){var w=this.d,v=A.bPs(w.a),u=A.bHo(w.d)
switch(this.c.a){case 2:case 0:return u.gdi(0)+u.gdk(0)+(v.gdi(0)+v.gdk(0))
case 1:case 3:return u.ge3()+v.ge3()}},
b6e(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gql().c.d
if(o==null)o=$.mF().S6(d,f-e)
w=p.c
v=w!==D.p9
if((!v||w===D.eU)&&p.d instanceof A.pg){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bGx(u,d)
w=new B.jL(t,B.a8(t).i("jL<1>"))
s=w.giQ(w).fp(0,new A.b6n(u),x.W).h1(0)}else{r=$.bFo()
w=!v||w===D.eU
v=p.d
q=r.b5u(w?v.w:v.z,o,f,e)
v=B.ok(q,new A.b6o(p,f,e,d),q.$ti.i("w.E"),x.W)
s=B.R(v,B.m(v).i("w.E"))}w=B.a8(s).i("ac<1,pf>")
w=B.R(new B.ac(s,new A.b6p(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gql()
w=j.gql()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bb(i,i,C.O,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.p9
u=!v
t=!u||w===D.eU
s=j.e
r=t?s.a:s.b
t=j.giw()
s=!u||w===D.eU?C.ad:C.b9
q=B.b([],x.p)
if(w===D.H0||v)j.gql()
if(j.gql().c.a){v=!u||w===D.eU?r:j.gql().c.c
p=!u||w===D.eU?j.gql().c.c:r
o=j.gbaG()
n=!u||w===D.eU?C.b9:C.ad
j.gao0()
m=j.gao0()
l=!u||w===D.eU
k=j.d
l=l?k.f:k.x
u=!u||w===D.eU?k.r:k.y
q.push(B.bb(i,A.c9P(new A.aDD(),n,j.b6e(r-m,l,u,w)),C.O,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.H1||w===D.eU)j.gql()
return new B.fo(t,i,i,B.c4P(q,C.E,s,i,C.q,C.a8,0,i,i,C.ch),i)}}
A.a4Y.prototype={
gbQ(){return[this.a,this.b]}}
A.a9m.prototype={
gbQ(){return[this.a,this.b]}}
A.Q3.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a9o.prototype={
gah7(d){return!1},
gbQ(){return[!1,!1,!1,!1]}}
A.aE8.prototype={}
A.aKM.prototype={
H(){return"FLHorizontalAlignment."+this.b}}
A.and.prototype={}
A.aqj.prototype={}
A.aqk.prototype={}
A.aqr.prototype={}
A.NV.prototype={
hF(d,e,f){}}
A.xu.prototype={}
A.i4.prototype={
ge4(){return null},
galG(){var w,v=this
B.bE()
B.bE()
B.bE()
w=v instanceof A.Q2
if(w)return!0
return!(v instanceof A.Q_)&&!(v instanceof A.PZ)&&!(v instanceof A.Q0)&&!(v instanceof A.PY)&&!w&&!(v instanceof A.Q1)}}
A.a9s.prototype={
ge4(){return this.a.b}}
A.a9t.prototype={
ge4(){return this.a.b}}
A.a9u.prototype={
ge4(){return this.a.b}}
A.PZ.prototype={}
A.Q_.prototype={}
A.a9x.prototype={
ge4(){return this.a.b}}
A.Q1.prototype={}
A.Q2.prototype={
ge4(){return this.a.b}}
A.a9r.prototype={
ge4(){return this.a.b}}
A.a9q.prototype={
ge4(){return this.a.b}}
A.PY.prototype={
ge4(){return this.a.b}}
A.a9v.prototype={
ge4(){return this.a.ge4()}}
A.a9w.prototype={
ge4(){return this.a.ge4()}}
A.Q0.prototype={
ge4(){return this.a.ge4()}}
A.IU.prototype={
a1X(d){this.Z=d.b
this.Y=d.c
this.a8=d.d},
al7(){var w=this,v=null,u=w.ar=B.bIe(v,v)
u.ay=new A.b1u(w)
u.ch=new A.b1v(w)
u.CW=new A.b1w(w)
u.cy=new A.b1x(w)
u.cx=new A.b1y(w)
u=w.aS=B.JK(v,-1,v)
u.C=new A.b1z(w)
u.aa=new A.b1A(w)
u.Z=new A.b1B(w)
u=w.bK=B.abN(v,w.a8,v)
u.p3=new A.b1C(w)
u.p4=new A.b1D(w)
u.RG=new A.b1E(w)},
cM(){var w=x.k.a(B.O.prototype.gad.call(this))
this.fy=new B.N(w.b,w.d)},
dU(d){return new B.N(d.b,d.d)},
lT(d){return!0},
ol(d,e){var w,v=this
if(v.Z==null)return
if(x.eo.b(d)){w=v.bK
w===$&&B.a()
w.qi(d)
w=v.aS
w===$&&B.a()
w.qi(d)
w=v.ar
w===$&&B.a()
w.qi(d)}else if(x.gJ.b(d))v.ml(new A.a9w(d))},
gQp(d){return new A.b1F(this)},
gQr(d){return new A.b1G(this)},
ml(d){var w,v,u=this
if(u.Z==null)return
w=d.ge4()
v=w!=null?u.a3_(w):null
u.Z.$2(d,v)
u.aa=C.c9},
gOh(d){return this.aa},
gIg(){var w=this.aE
w===$&&B.a()
return w},
aX(d){this.fW(d)
this.aE=!0},
aR(d){this.aE=!1
this.fH(0)},
$ikl:1}
A.Rw.prototype={
a0(){return new A.ZA(B.b([],x.r),B.A(x.S,x.J),new A.aRs(B.A(x.y,x.dj)),null,null)}}
A.ZA.prototype={
u(d){var w,v=this,u=v.a9d(),t=v.CW
t.toString
t=v.agw(t.aL(0,v.ghL().gt(0)))
w=v.agw(u)
v.a.toString
return new A.NM(new A.abF(t,w,null),u,null)},
agw(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.a8(w).i("ac<1,eE>")
w=B.R(new B.ac(w,new A.boA(this,d),v),v.i("aw.E"))
return d.b_N(w,this.cy)},
a9d(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Yz(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.b03(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.b_n(new A.HB(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaHd(),t.c,t.d))}return r},
aHe(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.galG())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.M(new A.boy(v))
return}v.M(new A.boz(v,e))},
nr(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a9d(),new A.boB(w)))}}
A.ro.prototype={
a0e(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a9n(B.a5b(d.a.b,j.b,f),j.a)
w=A.bPp(d.at,e.at,f)
v=A.bPt(d.c,e.c,f)
u=A.bPv(d.d,e.d,f)
t=A.bS0(d.e,e.e,f)
s=A.lv(d.ch,e.ch,f,A.ck2(),x.cz)
s.toString
r=A.lv(d.CW,e.CW,f,A.ck1(),x.bO)
r.toString
u=A.bHT(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Ze(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bHT(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
b03(d,e,f,g){return this.Ze(null,null,d,e,f,g,null)},
b_n(d){var w=null
return this.Ze(w,d,w,w,w,w,w)},
b_N(d,e){var w=null
return this.Ze(d,w,w,w,w,w,e)},
gbQ(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eE.prototype={
axJ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.m.qH(n.a,new A.aRr())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.C)(v),++p){o=v[p]
if(o.k(0,D.ie))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.au()
n.b=q
r.toString
n.c!==$&&B.au()
n.c=r
s.toString
n.d!==$&&B.au()
n.d=s
t.toString
n.e!==$&&B.au()
n.e=t}},
aiH(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aRq(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
b_u(d){return this.aiH(d,null)},
b_w(d){return this.aiH(null,d)},
gbQ(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Rx.prototype={
gbQ(){return[this.a]}}
A.a4R.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.nT.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.NQ.prototype={
gbQ(){return[!1,this.b,this.c,!0]}}
A.AD.prototype={
gbQ(){return[this.a,this.b,this.c]}}
A.aRg.prototype={
H(){return"LabelDirection."+this.b}}
A.a9p.prototype={
gbQ(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.HB.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.abG.prototype={
gbQ(){return[4,C.ju,16,D.C2,0,120,A.ck4(),!1,!1,!1,0,C.ae,A.ck3()]}}
A.oi.prototype={
gbQ(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.rW.prototype={}
A.uh.prototype={
gbQ(){return[this.a,this.b,C.dF,C.T,null]}}
A.vk.prototype={
gbQ(){return[this.a,this.b]}}
A.Jm.prototype={
gbQ(){return[this.a]}}
A.Ry.prototype={}
A.Bu.prototype={
hW(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.a0e(v,w,d)}}
A.an0.prototype={}
A.an1.prototype={}
A.ane.prototype={}
A.aql.prototype={}
A.aqo.prototype={}
A.as6.prototype={}
A.as7.prototype={}
A.as8.prototype={}
A.asa.prototype={}
A.asb.prototype={}
A.asc.prototype={}
A.asd.prototype={}
A.awM.prototype={}
A.ayu.prototype={}
A.aRs.prototype={
Yz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.CQ
u=new A.Bz(d,x.y)
t=this.a
if(t.ao(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.Bv(s,r,q,t,!0)}w=null
try{w=C.m.qH(d,new A.aRt())}catch(p){return D.CQ}v=null
try{v=C.m.qH(w.a,new A.aRu())}catch(p){return D.CQ}o=v.a
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
if(f<m)m=f}e=new A.Bv(o,n,m,l,!1)
t.l(0,u,e)
return e}}
A.Bv.prototype={
gbQ(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.as9.prototype={}
A.aRv.prototype={
hF(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gah7(0)){v=a3.b
u=v.a
v=v.b
$.ao()
a3.a.kx(new B.M(0,-40,0+(u+40),-40+(v+40)),B.b1())
a3.aZh(new B.M(0,0,u,v))}d.a4d(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.C)(v),++t)d.b1r(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.b1n(a3,q,a4)
d.b1s(a3,q,a4)
d.ase(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.W(o)
if(n.gp(o)!==p.length)throw B.d(B.ea("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.xd(q,i,j,k))}}d.b1C(a3,s,a4)
if(w.gah7(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.R(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.b1A(a2,a3,v,f,new A.Jm(g),a4)}},
b1n(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bHn(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.C)(n),++v){u=n[v]
t=p.a2z(o,e,u,f)
s=p.apt(o,e,t,u,f)
r=p.a2B(o,e,t,u,f,!0)
q=p.aps(o,e,t,u,f)
p.b1q(d,s,p.a2y(o,e,t,u,f,!0),f,e)
p.b1k(d,q,r,f,e)
p.b1o(d,t,e)
p.b1m(d,t,e,f)}},
b1r(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bHn(a5.a),a8=A.bHn(a6.a)
if(a7.length!==a8.length)throw B.d(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bZ.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.a8(n).i("cH<1>")
l=B.R(new B.cH(n,m),m.i("aw.E"))
k=a2.a2z(a3,a5,o,b2)
j=a2.a2A(a3,a6.b_w(l),l,b2,k)
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
n=a2.fR(i,a3,b2)
m=a2.dX(h,a3,b2)
e=a2.fR(g,a3,b2)
d=a2.dX(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.a4.gt(0)
a0.sfv(v.pk(0,new B.M(n,m,e,d)))}else{a0.r=(r?C.a5:w).gt(0)
a0.sfv(null)}$.ao()
a1=new B.nW(C.eC,C.c0,C.fi,C.fJ,C.f4).el()
n=B.e8(new B.M(0,0,t,s))
m=$.bZ.b
if(m===$.bZ)B.T(B.xb(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.el()
n=j.e
a4.drawPath((n==null?j.e=new B.nX(j.gkA().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
b1s(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a2F(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.ie)&&t.$2(q,e)){p=this.fR(q.a,w,f)
o=this.dX(q.b,w,f)
n.$4(q,p/v*100,e,r).ajq(s,q,new B.v(p,o))}}},
b1C(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.m.h4(b3,new A.aRy())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.C)(b3),++o){n=b3[o]
m=n.a
l=b1.a2F(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fR(j.a,w,b4)
g=b1.dX(j.b,w,b4)
f=i.b
e=f.a
d=B.co()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.n3(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.mB(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.mB(q.$2(m,k))))
f=b1.dX(a1,w,b4)
a3=new B.v(h,f)
a4=b1.dX(a2,w,b4)
a5=new B.v(h,a4)
a6=a0/2
a7=g-a6
a8=g+a6
if(a4>a7&&a4<a8)a5=f<a4?new B.v(h,a4-(a4-a7)):new B.v(h+0,a4+(a8-a4))
a9=i.a
f=b1.y
f===$&&B.a()
a4=a9.a
a6=a9.b
b0=B.m7(a3,a5)
if(a6!=null){f.r=C.a4.gt(0)
f.sfv(a6.pk(0,b0))}else{if(a4==null)a4=C.a5
f.r=a4.gt(a4)
f.sfv(null)}a4=a9.c
f.c=a4
if(a4===0){f.sfv(null)
a4=B.c7(f.r)
f.r=B.aD(0,a4.B()>>>16&255,a4.B()>>>8&255,a4.B()&255).gt(0)}b2.Gf(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.n3(d.a))
f.ajq(t,j,new B.v(h,g))}}},
a2A(d,e,f,g,h){var w=this.apu(d,e,f,g,h)
return w},
a2z(d,e,f,g){return this.a2A(d,e,f,g,null)},
apu(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cw($.ao().r,C.aP,null,null,B.b([],x.v)):a5,f=J.W(a3),e=f.gp(a3),d=i.fR(f.h(a3,0).a,a1,a4),a0=i.dX(f.h(a3,0).b,a1,a4)
if(h){g.aF(new B.fV(d,a0))
if(e===1)g.aF(new B.ch(d,a0))}else g.aF(new B.ch(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.P,t=1;t<e;t=o,u=j){s=i.fR(f.h(a3,t).a,a1,a4)
r=i.dX(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fR(f.h(a3,q).a,a1,a4)
q=i.dX(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fR(f.h(a3,n?o:t).a,a1,a4)
l=i.dX(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.v(n,l)
s=new B.OL(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.h8(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a2B(d,e,f,g,h,i){var w=this,v=B.PG(f),u=J.W(g),t=w.fR(u.h(g,u.gp(g)-1).a,d,h),s=d.b
v.aF(new B.ch(t,s))
t=w.fR(u.h(g,0).a,d,h)
v.aF(new B.ch(t,s))
v.aF(new B.ch(w.fR(u.h(g,0).a,d,h),w.dX(u.h(g,0).b,d,h)))
v.aF(new B.pl())
return v},
apt(d,e,f,g,h){return this.a2B(d,e,f,g,h,!1)},
a2y(d,e,f,g,h,i){var w=this,v=B.PG(f),u=J.W(g),t=w.fR(u.h(g,u.gp(g)-1).a,d,h)
v.aF(new B.ch(t,0))
t=w.fR(u.h(g,0).a,d,h)
v.aF(new B.ch(t,0))
v.aF(new B.ch(w.fR(u.h(g,0).a,d,h),w.dX(u.h(g,0).b,d,h)))
v.aF(new B.pl())
return v},
aps(d,e,f,g,h){return this.a2y(d,e,f,g,h,!1)},
b1q(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fR(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dX(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fR(t.a,w,g)
s=r.r
s===$&&B.a()
A.bId(s,q.b,q.c,new B.M(v,u,t,w.b))
d.a.ix(e,r.r)},
b1k(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fR(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fR(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dX(t.b,w,g)
s=r.r
s===$&&B.a()
A.bId(s,q.b,q.c,new B.M(v,0,u,t))
d.a.ix(e,r.r)},
b1o(d,e,f){var w=f.db,v=w.a,u=v.B()
if((u>>>24&255)/255===0)return
if(!new B.PI(B.PG(e),!1,B.b([],x.I)).q())return
u=this.f
u===$&&B.a()
u.d=f.at?C.me:C.fi
u.e=C.fJ
u.r=v.gt(0)
u.sfv(null)
u.c=f.x
u.r=v.gt(0)
$.mF()
u.z=new B.BF(C.bn,w.c*0.57735+0.5)
d.a.ix(A.aH9(e,f.cy).eu(w.b),this.f)},
b1m(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.me:C.fi
q.e=C.fJ
q=f.b
q===$&&B.a()
q=s.fR(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dX(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fR(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dX(u.b,r,g)
t=s.f
A.bId(t,f.r,f.w,new B.M(q,w,v,u))
t.z=null
t.c=f.x
A.c7t(t)
d.a.ix(A.aH9(e,f.cy),s.f)},
b1A(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bWv(b1),b3=J.W(b2)
if(b3.gp(b2)!==b1.length)throw B.d(B.ea("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.mF().a36(b4,u.b)
s=u.a
r=w.k(0,C.kF)?new B.kA(1):w
q=new B.rU(new B.ie(s,a8,a8,C.c9,a8,a8,a8,a8,a8,a8,t),C.dF,C.T,r,a8,a8,a8,a8,C.c7,a8)
q.am_(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.C)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gau(w)}b3=a7.fR(b7.a,a9,b9)
t=a7.dX(b7.b,a9,b9)
l=p+C.ju.ge3()
k=o+(w-1)*4+(C.ju.gdi(0)+C.ju.gdk(0))
j=t-k-16
i=a7.a37(b3,l,D.C2,0)
b3=i+l
w=j+k
h=new B.aZ(4,4)
g=B.II(new B.M(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bWu(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.mF().NN(new B.N(t,w),0).b
d=new B.v(0,b1)
a0=new B.v(g.a,g.b)
a1=$.mF().NN(new B.N(t,w),0)
if(!C.ae.k(0,C.ae)){s=a7.Q
s===$&&B.a()
s.r=C.a4.gt(0)
s.c=0}b5.ZP(0,new A.aRw(a7,b5,g),a0,d,new B.N(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.C)(b0),++n){q=b0[n]
a5=A.cap(q.r,q.w)
A:{if(D.Kk===a5){a6=a3
break A}if(D.Kl===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.ZP(0,new A.aRx(b5,q,new B.v(a6,j+a4-a2+b1)),a0,d,new B.N(t,w))
a6=q.b.a.c
a4=a4+a6.gau(a6)+4}},
a2F(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fR(v[0].a,e,f)
return this.fR(v[v.length-1].a,e,f)-w},
a_t(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.apY(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.m.h4(t,new A.aRz())
return t.length===0?null:t},
apY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.C)(w),++r){q=w[r]
if(q.k(0,D.ie))continue
p=u.$2(e,new B.v(this.fR(q.a,d,h),this.dX(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.m.hb(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.m.ga9(o)
s.toString
return new A.rW(s,f,g,C.m.h_(w,v),v.a,v.b)}else return null}}
A.xd.prototype={}
A.abF.prototype={
by(d){var w,v=this.e,u=B.bH(d,null,x.w).w.gd4(),t=new A.aRv()
t.a5t()
$.ao()
w=B.b1()
w.b=C.bG
t.f=w
w=B.b1()
w.b=C.c0
t.r=w
w=B.b1()
w.b=C.bG
t.w=w
w=B.b1()
w.b=C.c0
w.r=C.a5.gt(0)
w.a=D.ad2
t.x=w
w=B.b1()
w.b=C.bG
w.r=C.a4.gt(0)
t.y=w
w=B.b1()
w.b=C.c0
w.r=C.W.gt(0)
t.z=w
w=B.b1()
w.b=C.bG
w.r=C.a5.gt(0)
w.c=1
t.Q=w
t=new A.ags(this.d,v,u,t,d,C.c9,new B.bw(),B.aK(x.g))
t.bs()
t.a1X(v.cx)
t.al7()
return t},
bL(d,e){e.sjb(0,this.d)
e.sa1G(this.e)
e.sd4(B.bH(d,null,x.w).w.gd4())
e.C=d
e.bn()}}
A.ags.prototype={
sjb(d,e){if(this.aP.k(0,e))return
this.aP=e
this.bn()},
sa1G(d){var w=this
if(w.iW.k(0,d))return
w.iW=d
w.a4Y(d.cx)
w.bn()},
sd4(d){if(this.dd.k(0,d))return
this.dd=d
this.bn()},
aV(d,e){var w,v,u=this,t=d.gdO(0),s=t.a
J.bf(s.save())
s.translate(e.a,e.b)
w=u.C
v=u.gD(0)
u.hm.hF(w,new A.a5p(t,v),new A.xu(u.aP,u.iW,u.dd,x.o))
s.restore()},
a3_(d){var w=this,v=w.gD(0)
return new A.Ry(w.hm.a_t(d,v,new A.xu(w.aP,w.iW,w.dd,x.o)))}}
A.Qw.prototype={
H(){return"HorizontalAlignment."+this.b}}
A.a5p.prototype={
aZh(d){this.a.a.clipRect(B.e8(d),$.p5()[1],!0)
return null},
ajy(d,e){d.aV(this.a,e)},
ZP(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bf(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.mF()
s.a1D(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Gf(d,e,f,g){var w=new B.cw($.ao().r,C.aP,null,null,B.b([],x.v))
w.aF(new B.fV(d.a,d.b))
w.aF(new B.ch(e.a,e.b))
this.a.ix(A.aH9(w,g),f)}}
A.Bz.prototype={
gbQ(){return[this.a]}}
A.ask.prototype={}
A.a5A.prototype={}
A.baa.prototype={
NN(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.v((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
b6S(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aZ(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aZ(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aZ(v,v)
s=d.d
return new B.dp(w,u,t,s.a>v||s.b>v?new B.aZ(v,v):s)},
b6T(d,e){var w,v
if(d==null)return D.adp
w=d.b
v=e/2
return d.b_z(w>v?v:w)},
S6(d,e){var w,v=Math.max(C.l.bd(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.baq(w)},
baq(d){if(d<1)return this.aSO(d)
return this.adp(d)},
aSO(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.l.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.adp(d*q)/q},
adp(d){var w,v=C.h.j(C.l.v(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.l.aM(d)/10:d
if(w>=7.6)return 10*C.l.v(Math.pow(10,v))
else if(w>=2.6)return 5*C.l.v(Math.pow(10,v))
else if(w>=1.6)return 2*C.l.v(Math.pow(10,v))
else return C.l.v(Math.pow(10,v))},
apL(d){if(d>=1)return 1
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
a36(d,e){var w,v,u=d.R(x.f0)
if(u==null)u=C.kP
w=e.a?u.w.bP(e):e
v=B.bS(d,C.zD)
v=v==null?null:v.ay
return v===!0?w.bP(C.oL):w},
apD(d,e,f,g){var w=C.l.a2(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["J(rY)","E(f7)","~(u,hs)","J(eE,u)","U<~>()","J(J,rY)","bU(J,vj)","rc(J)","u(rW,rW)","Le(pA)","KU(G,bP)","Me(pB)","xi(@)","yj(@)","eE(J)","Fe(@)","ab(J,vj)","wF(dw<wF>)","GV(dw<aLB>)","J(xi)","J(yj)","yG(G,bP)","DG(D)","~()","rY(@)","~(i4,NS?)","zF(@)","J(jb)","E(hs)","~(u,jb)","~(@)","kL(pf)","c(pf)","kL(bn<u,J>)","kL(J)","pf(kL)","~(i4,Ry?)","eE(eE)","mU(Jy<mU>)","Bu(@)","U<pB>(cp<pB>)","vk(u)","wG(f7,J,eE,u)","uh(oi)","E(eE)","u(xd,xd)","J(hs)","U<pA>(cp<pA>)","u(u,u,J)","hs(hs,hs,J)","jb(jb,jb,J)","nS(nS,nS,J)","Fy?(hs,u,jb,u)","I(hs)","c(J,vj)","f7(f7,f7,J)","E(J)","ob(ob,ob,J)","oM(oM,oM,J)","lR(lR,lR,J)","mk(mk,mk,J)","f(lR)","f(mk)","eE(eE,eE,J)","nT(nT,nT,J)","wG(f7,J,eE,u{size:J?})","E(f7,eE)","J(v,v)","x<vk>(eE,x<u>)","A9(D)","x<uh>(x<oi>)","I(oi)","AB(fI<G?>)"])
A.aLx.prototype={
$1(d){var w=B.dr(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.rY(J.ap(v==null?"":v),A.qA(w.h(0,"revenue_net")),A.qA(w.h(0,"expense_net")),A.qA(w.h(0,"result_net")))},
$S:z+24}
A.aLy.prototype={
$1(d){var w,v,u,t=B.dr(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ap(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.qA(t.h(0,"gross"))
u=B.b9(t.h(0,"purchases_count"))
u=u==null?null:C.l.v(u)
if(u==null)u=0
return new A.xi(s,r,w,v,u,A.qA(t.h(0,"avg_basket")))},
$S:z+12}
A.aLz.prototype={
$1(d){var w,v=B.dr(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ap(t==null?"unbekannt":t)
w=B.b9(v.h(0,"quantity"))
w=w==null?null:C.l.v(w)
if(w==null)w=0
return new A.yj(u,t,w,A.qA(v.h(0,"gross")))},
$S:z+13}
A.aLR.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.W(d)
v=w.h(d,"code")
v=J.ap(v==null?"":v)
u=w.h(d,"name")
u=J.ap(u==null?"":u)
t=w.h(d,"direction")
return new A.Fe(v,u,J.ap(t==null?"expense":t),A.w1(w.h(d,"net")),A.w1(w.h(d,"tax")),A.w1(w.h(d,"gross")))},
$S:z+15}
A.bCB.prototype={
$1(d){return new A.wF(d.aC($.bN(),x.A))},
$S:z+17}
A.bCC.prototype={
$1(d){return new A.GV(d.aC($.c0w(),x.D))},
$S:z+18}
A.bEV.prototype={
$1(d){return E.aLA()},
$S:z+38}
A.bCD.prototype={
$1(d){var w=d.aC($.zn(),x.P)
return d.aC($.aBN(),x.a).IK(w)},
$S:z+40}
A.bCA.prototype={
$1(d){var w=d.aC($.zn(),x.P)
return d.aC($.aBN(),x.a).IG(w)},
$S:z+47}
A.bCz.prototype={
$1(d){return this.apg(d)},
apg(d){var w=0,v=B.r(x.h),u,t,s,r,q
var $async$$1=B.n(function(e,f){if(e===1)return B.o(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.j(d.aC($.bN(),x.A).hG("finance_balance_kpis",t),$async$$1)
case 3:s=r.dr(q.a(f),x.N,t)
if(!J.e(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$1,v)},
$S:249}
A.aLw.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aQ(0,$.aBN(),x.a).ro(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aLv.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aQ(0,$.aBN(),x.a).OT(u.c),$async$$0)
case 2:t.a=e
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.aLP.prototype={
$0(){var w=0,v=B.r(x.H),u,t=this,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bFY()
if(s.e==null)B.T(B.a0(y.b))
s.gcK().cG(r)
u=null
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:2}
A.aLH.prototype={
$0(){return this.a.MH(this.b,this.c)},
$S:0}
A.aLI.prototype={
$0(){return this.a.KC(this.b,this.c)},
$S:0}
A.aLJ.prototype={
$0(){var w=x.z
return B.b7(this.a,!1).eO(B.fd(new A.aLG(),null,w),w)},
$S:0}
A.aLG.prototype={
$1(d){return F.J2},
$S:z+69}
A.aLK.prototype={
$0(){return B.pF(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aLL.prototype={
$0(){var w=this
return w.a.DT(w.b,w.c,w.d)},
$S:0}
A.aLO.prototype={
$0(){return F.a4f},
$S:139}
A.aLN.prototype={
$2(d,e){return new A.KU(B.h(d),null)},
$S:z+10}
A.aLM.prototype={
$1(d){return new A.Me(d,null)},
$S:z+11}
A.aLC.prototype={
$0(){var w=0,v=B.r(x.E),u,t=this,s
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:w=3
return B.j(t.a.aQ(0,$.bFW().gie(),x.F).OS(),$async$$0)
case 3:s=e
if(s==null)throw B.d(B.ea("PDF-Export fehlgeschlagen"))
u=s
w=1
break
case 1:return B.p(u,v)}})
return B.q($async$$0,v)},
$S:82}
A.aLF.prototype={
$1(d){var w=null,v=this.a,u=$.dy()
v=B.l("Die Finanzauswertung f\xfcr "+u.aB(v.a)+" \u2013 "+u.aB(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.ja(B.b([B.dl(C.cT,w,w,new A.aLD(u),w,w),B.dD(F.oM,new A.aLE(u),B.e1(C.G,C.Z,w,w,w,w,w))],x.p),w,v,F.oN)},
$S:47}
A.aLD.prototype={
$0(){B.b7(this.a,!1).cU(!1)
return null},
$S:0}
A.aLE.prototype={
$0(){B.b7(this.a,!1).cU(!0)
return null},
$S:0}
A.brl.prototype={
$0(){var w=this.a.aQ(0,$.zn().gie(),x.V),v=E.aLA()
w.wd(0,v)
return v},
$S:0}
A.brm.prototype={
$0(){var w=this.a.aQ(0,$.zn().gie(),x.V),v=new B.b_(Date.now(),0,!1),u=new E.mU(B.bF(B.aX(v),1,1,0,0,0,0),v)
w.wd(0,u)
return u},
$S:0}
A.brn.prototype={
$0(){return this.a.LW(this.b,this.c)},
$S:0}
A.brk.prototype={
$2(d,e){return new B.qg(B.X(d).aZU(B.X(d).ax.b_S(C.D,C.G)),e,null)},
$S:1042}
A.bxm.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dd(),s=A.Rk(!1,C.qn,"Umsatz 7 %",t.aB(u.a),w),r=A.Rk(!1,C.qn,"Umsatz 19 %",t.aB(u.b),w),q=A.Rk(!0,D.aoI,"Umsatz netto",t.aB(u.c),w),p=A.Rk(!1,D.aoH,"Aufwand",t.aB(u.d),w),o=u.e,n=t.aB(o)
return B.aa9(1.7,B.b([s,r,q,p,A.Rk(!0,C.Cj,"Ergebnis",n,o<0?C.aU:C.bi),A.Rk(!1,C.hQ,"USt-Saldo",t.aB(u.f-u.r),w)],x.p),v,12,12,C.lU,!0)},
$S:109}
A.aRf.prototype={
$0(){return D.btp},
$S:139}
A.aRe.prototype={
$2(d,e){var w=null
return B.bC(C.aU,B.l("KPIs konnten nicht geladen werden: "+B.h(d),w,w,w,B.H(C.D,13,C.F),w,w,w),C.fX,w,C.a0,w,3)},
$S:334}
A.aRd.prototype={
$1(d){return new A.Le(d,null)},
$S:z+9}
A.bom.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dd(),i=j.aB(k.c),h=l.w,g=l.d,f=B.a8(g).i("ac<1,J>"),e=f.i("aw.E"),d=B.R(new B.ac(g,new A.bob(),f),e)
i=A.kz(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aB(r.b)
w=B.R(new B.ac(g,new A.boc(),f),e)
d=A.kz(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aB(k.e)
w=B.R(new B.ac(g,new A.bod(),f),e)
k=A.kz(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.l.ah(h.b,1)
v=B.R(new B.ac(g,new A.boe(),f),e)
w=A.kz(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.l.ah(h.a,1)
u=B.R(new B.ac(g,new A.bof(),f),e)
v=A.kz(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.l.ah(r.c,1)
t=B.R(new B.ac(g,new A.bog(),f),e)
u=A.kz(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.l.ah(h.c,1)
s=B.R(new B.ac(g,new A.boh(),f),e)
t=A.kz(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aB(h.d)
s=B.R(new B.ac(g,new A.boi(),f),e)
h=A.kz(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aB(l.r.d)
m=B.R(new B.ac(g,new A.boj(m),f),e)
m=A.kz(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aB(l)
l=B.R(new B.ac(g,new A.bok(l),f),e)
l=A.kz(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.l.ah(j,1)
j=B.R(new B.ac(g,new A.bol(j),f),e)
return B.aa9(n,B.b([i,d,k,w,v,u,t,h,m,l,A.kz(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.lU,!0)},
$S:109}
A.bob.prototype={
$1(d){return d.b},
$S:z+0}
A.boc.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bod.prototype={
$1(d){return d.d},
$S:z+0}
A.boe.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bof.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bog.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.boh.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.boi.prototype={
$1(d){return d.d},
$S:z+0}
A.boj.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bok.prototype={
$1(d){return this.a},
$S:z+0}
A.bol.prototype={
$1(d){return this.a},
$S:z+0}
A.bon.prototype={
$0(){return A.bKu(this.b,1.45,new A.XB(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.boo.prototype={
$0(){return A.bKu(this.b,1.6,new A.XM(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bBk.prototype={
$1(d){var w=this,v=null,u=B.aS(16),t=x.p,s=B.b([B.aq(B.b([B.aA(B.l(w.a,v,v,v,B.cc(C.D,18,C.N),v,v,v),1),B.fS(v,v,D.ars,v,v,new A.bBj(d),v,v,v,"Schlie\xdfen",v)],t),C.E,v,C.q,C.v,0,v,v)],t)
C.m.L(s,B.b([B.l(w.b,v,v,v,B.H(C.M,12,C.bl),v,v,v),C.aa],t))
s.push(C.R)
s.push(B.cr(new B.nR(w.c,w.d,v),v,17976931348623157e292))
return B.a8y(v,C.Z,new B.ai(C.aS,B.ad(s,C.a2,v,C.q,C.a8,0),v),v,v,v,C.hM,C.yU,v,new B.dx(u,C.ae),v)},
$S:1043}
A.bBj.prototype={
$0(){return B.b7(this.a,!1).fO()},
$S:0}
A.bop.prototype={
$0(){var w=this.a,v=B.bL(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bKu(this.b,2.4,new A.a13(w.w,w.y,w.z,null),C.m.cm(u," \xb7 "),v)
return null},
$S:0}
A.bwS.prototype={
$2(d,e){return d<e?d:e},
$S:42}
A.bwT.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.bwU.prototype={
$1(d){return A.aRq(null,1.4,null,C.aU,0.35,D.aYM,D.K8,null,!1,!1,!1,!1,D.LN,!1,10,D.a9I,!0,C.hU,B.b([new A.f7(0,d),new A.f7(this.a,d)],x.U))},
$S:z+14}
A.bej.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.bel.prototype={
$2(d,e){var w=null
return B.l(this.a.aU8(d),w,w,w,B.H(C.M,10,C.ai),w,w,w)},
$S:z+16}
A.bem.prototype={
$2(d,e){var w=null,v=C.l.v(d)
if(v<0||v>=this.a.length)return C.FL
return new B.ai(C.jt,B.l(C.o.d2(this.a[v].a,5),w,w,w,B.H(C.M,9,C.ai),w,w,w),w)},
$S:z+6}
A.bek.prototype={
$1(d){return D.an2},
$S:z+7}
A.bf9.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.bfa.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.bfb.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.bfc.prototype={
$2(d,e){var w=null,v=C.l.v(d)
if(v<0||v>=3)return C.FL
return new B.ai(C.jt,B.l(this.a[v],w,w,w,B.H(C.D,12,C.N),w,w,w),w)},
$S:z+6}
A.boV.prototype={
$1(d){return d.d},
$S:z+19}
A.boW.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.byD.prototype={
$1(d){return d.d},
$S:z+20}
A.byE.prototype={
$2(d,e){return d>e?d:e},
$S:42}
A.bcP.prototype={
$0(){return D.btx},
$S:139}
A.bcO.prototype={
$2(d,e){return new A.yG("Bilanzdaten nicht verf\xfcgbar: "+B.h(d),null)},
$S:z+21}
A.bcN.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bC(m,B.ad(B.b([B.l("Noch keine Bilanzdaten erfasst.",m,m,m,B.H(C.D,14,C.ai),m,m,m),C.aa,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.H(C.M,12.5,C.F),m,m,m),C.R,B.ml(C.dw,B.b([B.h3(C.L7,D.bKy,new A.bcH(w,v),m),B.h3(D.aqq,D.bJl,new A.bcI(w,v),m)],u),C.eP,8,8)],u),C.a2,m,C.q,C.v,0),C.aO,m,C.a0,m,3)}w=new A.bcQ(d)
t=C.m.fo(n.a.e.d,0,new A.bcJ())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iU(new A.bcK(new A.bcR(w),r,w,s))
v=J.W(d)
u=B.h(v.h(d,"as_of"))
v=J.e(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.aa,B.aq(B.b([B.aA(B.l("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.H(C.M,11,C.F),m,m,m),1),B.nw(D.arI,D.bJL,new A.bcL(q,p),m),B.nw(D.arh,D.bJu,new A.bcM(q,p,d),m)],o),C.E,m,C.q,C.v,0,m,m)],o),C.aF,m,C.q,C.v,0)},
$S:285}
A.bcH.prototype={
$0(){return A.aB4(this.a,this.b,null)},
$S:0}
A.bcI.prototype={
$0(){return A.aB1(this.a,this.b)},
$S:0}
A.bcQ.prototype={
$1(d){var w=B.b9(J.t(this.a,d))
return w==null?null:w},
$S:1044}
A.bcR.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.l.ah(v,1)
w=B.bL(w,".",",")+" %"}return w},
$S:37}
A.bcJ.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.bcK.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.kz(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.fz,o.$1("liquidity1_pct")),m=A.kz(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.fz,o.$1("liquidity2_pct")),l=A.kz(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.fz,o.$1("liquidity3_pct"))
o=A.kz(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.fz,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.l.ah(w,1)
w=B.bL(w,".",",")+" %"}w=A.kz(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.fz,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dd()
v=u.aB(v)
return B.aa9(p,B.b([n,m,l,o,w,A.kz(s,s,!1,"Bilanzsumme",!1,"EK "+u.aB(t.d),s,s,s,C.fz,v)],x.p),q,12,12,C.lU,!0)},
$S:109}
A.bcL.prototype={
$0(){return A.aB1(this.a,this.b)},
$S:0}
A.bcM.prototype={
$0(){return A.aB4(this.a,this.b,this.c)},
$S:0}
A.bBi.prototype={
$1(d){return new A.DG(this.a,new A.bBh(this.b),this.c,null)},
$S:z+22}
A.bBh.prototype={
$0(){var w=this.a,v=$.bFX()
if(w.e==null)B.T(B.a0(y.b))
w.gcK().cG(v)},
$S:0}
A.bcB.prototype={
$0(){},
$S:0}
A.bcC.prototype={
$0(){return this.a.f=!0},
$S:0}
A.bcD.prototype={
$0(){return this.a.f=!1},
$S:0}
A.bcF.prototype={
$0(){var w=0,v=B.r(x.H),u=this,t,s,r
var $async$$0=B.n(function(d,e){if(d===1)return B.o(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.j(B.qC(u.b,B.bF(2024,1,1,0,0,0,0),null,r,new B.b_(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.M(new A.bcE(s,t))
return B.p(null,v)}})
return B.q($async$$0,v)},
$S:2}
A.bcE.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.bcG.prototype={
$0(){return B.b7(this.a,!1).fO()},
$S:0}
A.bcS.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a7(0)
t.l(0,v,B.b([u],x.t))},
$S:0}
A.bcT.prototype={
$1(d){return new A.zF(x.B.a(d),this.a.a.r)},
$S:z+26}
A.aDU.prototype={
$1(d){return d.e},
$S:z+27}
A.aDV.prototype={
$2(d,e){return d+e},
$S:42}
A.aDX.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.aDZ.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gaZ(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.aE_.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.fl(t,r)
s=s.x
s===$&&B.a()
w.fl(t,s)
u.ajy(v.d,v.e)},
$S:0}
A.aDC.prototype={
$1(d){return 0},
$S:1045}
A.aDB.prototype={
$2(d,e){return B.hi(C.cW,this.a.arO(e),C.K,C.cC,null)},
$S:1046}
A.b6l.prototype={
$1(d){return d.a},
$S:z+31}
A.b6m.prototype={
$1(d){return d.b},
$S:z+32}
A.b6n.prototype={
$1(d){return new A.kL(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b6o.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.p9||v===D.eU))t=1-t
return new A.kL(d,t*w.d)},
$S:z+34}
A.b6p.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gql(),p=d.a
r.gql()
r=$.mF()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.l.ah(v/1e9,1)
t="B"}else if(v>=1e6){u=C.l.ah(v/1e6,1)
t="M"}else if(v>=1000){u=C.l.ah(v/1000,1)
t="K"}else{u=C.l.ah(v,r.apL(Math.abs(s.b-s.c)))
t=""}if(C.o.hB(u,".0"))u=C.o.a4(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.pf(d,q.c.b.$2(p,new A.vj(u+t,s.e)))},
$S:z+35}
A.b1u.prototype={
$1(d){this.a.ml(new A.a9s(d))},
$S:179}
A.b1v.prototype={
$1(d){this.a.ml(new A.a9t(d))},
$S:44}
A.b1w.prototype={
$1(d){this.a.ml(new A.a9u(d))},
$S:30}
A.b1x.prototype={
$0(){this.a.ml(D.af9)},
$S:0}
A.b1y.prototype={
$1(d){this.a.ml(new A.Q_())},
$S:46}
A.b1z.prototype={
$1(d){this.a.ml(new A.a9x(d))},
$S:45}
A.b1A.prototype={
$0(){this.a.ml(D.afa)},
$S:0}
A.b1B.prototype={
$1(d){this.a.ml(new A.Q2(d))},
$S:105}
A.b1C.prototype={
$1(d){this.a.ml(new A.a9r(d))},
$S:178}
A.b1D.prototype={
$1(d){this.a.ml(new A.a9q(d))},
$S:177}
A.b1E.prototype={
$1(d){return this.a.ml(new A.PY(d))},
$S:176}
A.b1F.prototype={
$1(d){return this.a.ml(new A.a9v(d))},
$S:67}
A.b1G.prototype={
$1(d){return this.a.ml(new A.Q0(d))},
$S:54}
A.boA.prototype={
$1(d){var w=this.a.db.h(0,C.m.h_(this.b.ch,d))
return d.b_u(w==null?B.b([],x.t):w)},
$S:z+37}
A.boy.prototype={
$0(){var w=this.a
C.m.a7(w.cy)
w.db.a7(0)},
$S:0}
A.boz.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.R(q,x.dw)
C.m.h4(w,new A.box())
v=this.a
u=v.db
u.a7(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.l(0,r.d,B.b([r.e],t))}q=v.cy
C.m.a7(q)
q.push(new A.Jm(w))},
$S:0}
A.box.prototype={
$2(d,e){return C.l.cL(e.b,d.b)},
$S:z+8}
A.boB.prototype={
$1(d){return new A.Bu(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aRr.prototype={
$1(d){return!d.k(0,D.ie)},
$S:z+1}
A.bCq.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.m.ga9(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bPu(t?A.bKd(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.vk(w,new A.AD(!0,A.bL4(),new A.bCp(v)))},
$S:z+41}
A.bCp.prototype={
$4(d,e,f,g){var w=this.a.a
return A.c4N(A.bKd(d,e,f),w,A.cf0(d,e,f))},
$S:z+42}
A.bCn.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.m.ga9(t.a)
u=t==null?u.r:t
w=B.jW(v,v,u==null?D.eu:u,v,v,v,v,v,v,v,v,14,v,v,C.ai,v,v,!0,v,v,v,v,v,v,v,v)
return new A.uh(C.l.j(d.b),w)},
$S:z+43}
A.aRt.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aRu.prototype={
$1(d){return!d.k(0,D.ie)},
$S:z+1}
A.aRy.prototype={
$2(d,e){return C.l.cL(e.c.b,d.c.b)},
$S:z+45}
A.aRw.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.fl(v,t)
u=u.Q
u===$&&B.a()
w.fl(v,u)},
$S:0}
A.aRx.prototype={
$0(){this.a.ajy(this.b,this.c)},
$S:0}
A.aRz.prototype={
$2(d,e){return C.l.cL(d.w,e.w)},
$S:z+8}
A.aDN.prototype={
$1(d){return d.gaZ(0)},
$S:z+46}
A.aDO.prototype={
$2(d,e){return d+e},
$S:42}
A.aDR.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.jL(v,B.a8(v).i("jL<1>")).aN(0,new A.aDS(w,this.a/(u+1),this.c))},
$S:0}
A.aDS.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gaZ(0)/2
this.c[d]=v
w.a=v+e.gaZ(0)/2},
$S:z+2}
A.aDP.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gaZ(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gaZ(0)/2},
$S:z+2}
A.aDQ.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gaZ(0)/2
this.c[d]=u
u+=e.gaZ(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aOb.prototype={
$2(d,e){var w=this.b.a.length
C.m.E(this.a.a,1/(w-1)*d)},
$S:1047}
A.aHa.prototype={
$1(d){return d},
$S:1048};(function aliases(){var w=A.NL.prototype
w.a4d=w.hF
w.ase=w.b1u
w.asf=w.ajr
w=A.Xc.prototype
w.auS=w.m
w=A.NV.prototype
w.a4f=w.hF
w=A.IU.prototype
w.a4Y=w.a1X})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cj4","c4K",72)
var q
v(q=A.Xe.prototype,"gaMT","aMU",23)
v(q,"gaLI","L8",4)
v(q,"gaMB","Lk",4)
u(A.Xf.prototype,"gazf","azg",25)
t(A,"chR",3,null,["$3"],["c1N"],49,0)
t(A,"chS",3,null,["$3"],["c1O"],50,0)
t(A,"chT",3,null,["$3"],["c1P"],51,0)
t(A,"chV",4,null,["$4"],["ciI"],52,0)
w(A,"chU","ciH",53)
s(A,"bKA","ciJ",54)
t(A,"chM",3,null,["$3"],["c4O"],55,0)
w(A,"a3c","cll",56)
w(A,"aB6","ciM",7)
t(A,"chO",3,null,["$3"],["c5D"],57,0)
t(A,"chQ",3,null,["$3"],["cc_"],58,0)
t(A,"chN",3,null,["$3"],["c5C"],59,0)
t(A,"chP",3,null,["$3"],["cbZ"],60,0)
w(A,"ctP","c5B",61)
w(A,"ctQ","cbY",62)
r(A.a0T.prototype,"ga9a","aFS",30)
u(A.ZA.prototype,"gaHd","aHe",36)
t(A,"ck2",3,null,["$3"],["c6c"],63,0)
t(A,"ck1",3,null,["$3"],["c1Q"],64,0)
w(A,"ck5","clm",1)
t(A,"bX1",4,null,["$5$size","$4"],["bVa",function(d,e,f,g){return A.bVa(d,e,f,g,null)}],65,0)
s(A,"bL4","clk",66)
s(A,"bX2","chx",67)
s(A,"bX5","ciP",68)
s(A,"bX4","ciL",3)
s(A,"bX3","ciK",3)
w(A,"ck4","bWv",70)
w(A,"ck3","bWu",71)
t(A,"a3i",3,null,["$3"],["ck_"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.V,[A.abq,A.am6,A.aro,A.LN,A.Me,A.am4,A.KU,A.Le,A.aqI,A.as_,A.Yn,A.a13,A.XB,A.XM,A.ast,A.aoJ,A.EI,A.ayr,A.yG,A.NM,A.D6])
u(B.G,[A.wF,A.GV,A.bm,A.and,A.an3,A.an5,A.an6,A.amW,A.aqr,A.an9,A.an7,A.aE8,A.ayv,A.aDW,A.an4,A.NV,A.aaa,A.vj,A.awO,A.awN,A.amV,A.aqq,A.f7,A.aqn,A.aqp,A.auR,A.arf,A.azb,A.aqo,A.aq3,A.aqm,A.aDA,A.bov,A.aDD,A.amS,A.pf,A.aqj,A.aqk,A.xu,A.i4,A.as7,A.asa,A.an0,A.ane,A.an1,A.aql,A.asd,A.asb,A.ayu,A.awM,A.aRs,A.as9,A.xd,A.a5p,A.ask,A.a5A,A.baa])
u(B.wC,[A.rY,A.xi,A.yj,A.aGB,A.aHK,A.pA,A.Fe,A.pB])
u(B.pm,[A.aLx,A.aLy,A.aLz,A.aLR,A.bCB,A.bCC,A.bEV,A.bCD,A.bCA,A.bCz,A.aLG,A.aLM,A.aLF,A.aRd,A.bob,A.boc,A.bod,A.boe,A.bof,A.bog,A.boh,A.boi,A.boj,A.bok,A.bol,A.bBk,A.bwU,A.bek,A.bf9,A.bfa,A.boV,A.byD,A.bcN,A.bcQ,A.bcR,A.bBi,A.bcT,A.aDU,A.aDX,A.aDC,A.b6l,A.b6m,A.b6n,A.b6o,A.b6p,A.b1u,A.b1v,A.b1w,A.b1y,A.b1z,A.b1B,A.b1C,A.b1D,A.b1E,A.b1F,A.b1G,A.boA,A.boB,A.aRr,A.bCq,A.bCp,A.bCn,A.aRt,A.aRu,A.aDN,A.aHa])
t(A.AB,B.hj)
u(B.zW,[A.aLw,A.aLv,A.aLP,A.aLH,A.aLI,A.aLJ,A.aLK,A.aLL,A.aLO,A.aLC,A.aLD,A.aLE,A.brl,A.brm,A.brn,A.aRf,A.bon,A.boo,A.bBj,A.bop,A.bcP,A.bcH,A.bcI,A.bcL,A.bcM,A.bBh,A.bcB,A.bcC,A.bcD,A.bcF,A.bcE,A.bcG,A.bcS,A.aE_,A.b1x,A.b1A,A.boy,A.boz,A.aRw,A.aRx,A.aDR])
u(B.A5,[A.AC,A.atJ,A.abr,A.an_])
u(B.zX,[A.aLN,A.brk,A.bxm,A.aRe,A.bom,A.bwS,A.bwT,A.bej,A.bel,A.bem,A.bfb,A.bfc,A.boW,A.byE,A.bcO,A.bcJ,A.bcK,A.aDV,A.aDZ,A.aDB,A.box,A.aRy,A.aRz,A.aDO,A.aDS,A.aDP,A.aDQ,A.aOb])
u(B.P,[A.DG,A.V1])
u(B.a1,[A.Xe,A.a0T])
u(B.QN,[A.NR,A.Rw])
u(B.wd,[A.Xf,A.ZA])
t(A.a4Y,A.and)
t(A.amR,A.a4Y)
t(A.a4J,A.amR)
u(A.a4J,[A.an2,A.as8])
t(A.pg,A.an2)
u(B.KT,[A.aDL,A.ajp,A.Fw,A.aKM,A.aRg,A.Qw])
t(A.hs,A.an3)
t(A.jb,A.an5)
t(A.nS,A.an6)
t(A.a4Q,A.amW)
t(A.Q3,A.aqr)
u(A.Q3,[A.an8,A.asc])
t(A.a4U,A.an8)
t(A.a4V,A.an9)
t(A.Fy,A.an7)
u(A.aE8,[A.NS,A.Ry])
t(A.ajr,A.ayv)
t(A.ana,A.ajr)
t(A.a4W,A.ana)
u(B.be,[A.zF,A.Bu])
t(A.wj,A.an4)
t(A.NL,A.NV)
u(A.NL,[A.aDY,A.aRv])
u(B.Rs,[A.a4S,A.abF])
u(B.L,[A.IU,A.amT])
u(A.IU,[A.agf,A.ags])
t(A.rM,A.awO)
t(A.ahN,A.awN)
t(A.qL,A.amV)
t(A.wH,A.aqq)
t(A.AE,A.aqn)
t(A.rc,A.aqp)
t(A.TB,A.auR)
t(A.ob,A.arf)
t(A.oM,A.azb)
u(A.rc,[A.are,A.aza])
t(A.lR,A.are)
t(A.mk,A.aza)
t(A.a9p,A.aqo)
u(A.a9p,[A.ard,A.az9])
t(A.aal,A.ard)
t(A.ajV,A.az9)
t(A.PQ,A.aq3)
t(A.wG,A.aqm)
t(A.PX,A.wG)
t(A.ahO,B.hx)
t(A.amU,A.amT)
t(A.Xc,A.amU)
t(A.a4K,A.Xc)
t(A.kL,A.amS)
t(A.a9m,A.aqj)
t(A.a9o,A.aqk)
u(A.i4,[A.a9s,A.a9t,A.a9u,A.PZ,A.Q_,A.a9x,A.Q1,A.Q2,A.a9r,A.a9q,A.PY,A.a9v,A.a9w,A.Q0])
t(A.ro,A.as8)
t(A.eE,A.as7)
t(A.Rx,A.asa)
t(A.a4R,A.an0)
t(A.nT,A.ane)
t(A.NQ,A.an1)
t(A.AD,A.aql)
t(A.HB,A.asc)
t(A.abG,A.asd)
t(A.as6,A.f7)
t(A.oi,A.as6)
t(A.rW,A.oi)
t(A.uh,A.asb)
t(A.vk,A.ayu)
t(A.Jm,A.awM)
t(A.Bv,A.as9)
t(A.Bz,A.ask)
w(A.amW,A.bm)
w(A.an2,A.bm)
w(A.an3,A.bm)
w(A.an5,A.bm)
w(A.an6,A.bm)
w(A.an7,A.bm)
w(A.an8,A.bm)
w(A.an9,A.bm)
w(A.ana,A.bm)
w(A.an4,A.bm)
w(A.amR,A.bm)
w(A.amV,A.bm)
w(A.aq3,A.bm)
w(A.aqm,A.bm)
w(A.aqn,A.bm)
w(A.aqp,A.bm)
w(A.aqq,A.bm)
w(A.are,A.bm)
w(A.ard,A.bm)
w(A.arf,A.bm)
w(A.auR,A.bm)
w(A.awN,A.bm)
w(A.awO,A.bm)
w(A.ayv,A.bm)
w(A.aza,A.bm)
w(A.az9,A.bm)
w(A.azb,A.bm)
w(A.amS,A.bm)
v(A.amT,B.aE)
w(A.amU,B.ey)
v(A.Xc,B.a8f)
w(A.and,A.bm)
w(A.aqj,A.bm)
w(A.aqk,A.bm)
w(A.aqr,A.bm)
w(A.an0,A.bm)
w(A.an1,A.bm)
w(A.ane,A.bm)
w(A.aql,A.bm)
w(A.aqo,A.bm)
w(A.as6,A.bm)
w(A.as7,A.bm)
w(A.as8,A.bm)
w(A.asa,A.bm)
w(A.asb,A.bm)
w(A.asc,A.bm)
w(A.asd,A.bm)
w(A.awM,A.bm)
w(A.ayu,A.bm)
w(A.as9,A.bm)
w(A.ask,A.bm)})()
B.byR(b.typeUniverse,JSON.parse('{"abq":{"V":[],"c":[]},"GV":{"aLB":[]},"AB":{"hj":["bg<~>"],"hj.T":"bg<~>"},"Me":{"V":[],"c":[]},"KU":{"V":[],"c":[]},"AC":{"bh":[],"P":[],"c":[]},"am6":{"V":[],"c":[]},"aro":{"V":[],"c":[]},"atJ":{"bh":[],"P":[],"c":[]},"LN":{"V":[],"c":[]},"am4":{"V":[],"c":[]},"Le":{"V":[],"c":[]},"yG":{"V":[],"c":[]},"DG":{"P":[],"c":[]},"abr":{"bh":[],"P":[],"c":[]},"aqI":{"V":[],"c":[]},"as_":{"V":[],"c":[]},"Yn":{"V":[],"c":[]},"a13":{"V":[],"c":[]},"XB":{"V":[],"c":[]},"XM":{"V":[],"c":[]},"ast":{"V":[],"c":[]},"aoJ":{"V":[],"c":[]},"EI":{"V":[],"c":[]},"ayr":{"V":[],"c":[]},"an_":{"bh":[],"P":[],"c":[]},"Xe":{"a1":["DG"]},"NR":{"P":[],"c":[]},"Xf":{"a1":["NR"]},"pg":{"bm":[]},"hs":{"bm":[]},"jb":{"bm":[]},"nS":{"bm":[]},"Fy":{"bm":[]},"zF":{"be":["pg"],"ba":["pg"],"ba.T":"pg","be.T":"pg"},"a4Q":{"bm":[]},"a4U":{"bm":[]},"a4V":{"bm":[]},"a4W":{"bm":[]},"wj":{"bm":[]},"a4S":{"aY":[],"c":[]},"agf":{"L":[],"O":[],"kl":[],"aV":[]},"rc":{"bm":[]},"ob":{"bm":[]},"oM":{"bm":[]},"lR":{"bm":[]},"mk":{"bm":[]},"wG":{"bm":[]},"a4J":{"bm":[]},"rM":{"bm":[]},"ahN":{"bm":[]},"qL":{"bm":[]},"wH":{"bm":[]},"AE":{"bm":[]},"ajr":{"bm":[]},"TB":{"bm":[]},"aal":{"bm":[]},"ajV":{"bm":[]},"PQ":{"bm":[]},"PX":{"bm":[]},"NM":{"V":[],"c":[]},"V1":{"P":[],"c":[]},"a0T":{"a1":["V1"]},"kL":{"bm":[]},"ahO":{"hx":[],"aY":[],"c":[]},"a4K":{"ey":["L","i5"],"L":[],"aE":["L","i5"],"O":[],"aV":[],"aE.1":"i5","ey.1":"i5","aE.0":"L"},"D6":{"V":[],"c":[]},"a4Y":{"bm":[]},"a9m":{"bm":[]},"Q3":{"bm":[]},"a9o":{"bm":[]},"a9s":{"i4":[]},"a9t":{"i4":[]},"a9u":{"i4":[]},"PZ":{"i4":[]},"Q_":{"i4":[]},"a9x":{"i4":[]},"Q1":{"i4":[]},"Q2":{"i4":[]},"a9r":{"i4":[]},"a9q":{"i4":[]},"PY":{"i4":[]},"a9v":{"i4":[]},"a9w":{"i4":[]},"Q0":{"i4":[]},"IU":{"L":[],"O":[],"kl":[],"aV":[]},"Rw":{"P":[],"c":[]},"ZA":{"a1":["Rw"]},"ro":{"bm":[]},"eE":{"bm":[]},"nT":{"bm":[]},"oi":{"f7":[],"bm":[]},"rW":{"oi":[],"f7":[],"bm":[]},"uh":{"bm":[]},"vk":{"bm":[]},"Jm":{"bm":[]},"Bu":{"be":["ro"],"ba":["ro"],"ba.T":"ro","be.T":"ro"},"Rx":{"bm":[]},"a4R":{"bm":[]},"NQ":{"bm":[]},"AD":{"bm":[]},"a9p":{"bm":[]},"HB":{"bm":[]},"abG":{"bm":[]},"Bv":{"bm":[]},"abF":{"aY":[],"c":[]},"ags":{"L":[],"O":[],"kl":[],"aV":[]},"Bz":{"bm":[]}}'))
B.bK1(b.typeUniverse,JSON.parse('{"NL":1,"Q3":1,"NV":1,"IU":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ak
return{_:w("Fe"),e:w("bg<pA>"),aN:w("bg<pB>"),fM:w("bg<a3<f,@>?>"),b:w("bg<~>"),W:w("kL"),B:w("pg"),dB:w("hs"),gF:w("wj"),fj:w("jb"),G:w("nS"),bO:w("nT"),k:w("av"),C:w("a5A<J>"),dO:w("wq"),R:w("a5<f,@>"),g:w("is"),bz:w("mO<b_>"),f0:w("mP"),f4:w("bm"),F:w("AB"),X:w("pA"),P:w("mU"),D:w("wF"),a:w("aLB"),d:w("pB"),cw:w("f7"),L:w("i5"),m:w("cl<u,I>"),cm:w("lR"),dv:w("ob"),M:w("B<pf>"),I:w("B<bO_>"),O:w("B<hs>"),Y:w("B<jb>"),U:w("B<f7>"),K:w("B<aaa>"),u:w("B<eE>"),bC:w("B<xd>"),aA:w("B<x<f7>>"),v:w("B<eH>"),r:w("B<Jm>"),s:w("B<f>"),eg:w("B<rU>"),df:w("B<rW>"),p:w("B<c>"),n:w("B<J>"),t:w("B<u>"),eF:w("bo<a1<P>>"),Z:w("oi"),cz:w("eE"),hf:w("ro"),dj:w("Bv"),fT:w("uh"),c_:w("je<qu<bg<~>>>"),x:w("Bz<hs>"),y:w("Bz<eE>"),J:w("x<u>"),ef:w("xi"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<J,J>"),w:w("l1"),aU:w("G"),Q:w("xu<pg>"),o:w("xu<ro>"),dc:w("eH"),eo:w("rD"),gJ:w("rE"),V:w("oC<mU>"),N:w("f"),A:w("oD"),bP:w("bz"),er:w("rU"),j:w("yj"),dw:w("rW"),bY:w("vk"),cZ:w("rY"),E:w("el"),es:w("mk"),bN:w("oM"),l:w("c"),q:w("yZ"),g4:w("j6<J>"),cJ:w("E"),i:w("J"),z:w("@"),S:w("u"),bn:w("zF?"),f3:w("Bu?"),T:w("x<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("G?"),aD:w("el?"),h6:w("u?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.GU=new B.qG(C.G,B.ak("qG<I>"))
D.H0=new A.Fw(0,"left")
D.p9=new A.Fw(1,"top")
D.H1=new A.Fw(2,"right")
D.eU=new A.Fw(3,"bottom")
D.bAr=new A.rM(!1,A.bKA(),22,null)
D.my=new A.qL(16,null,D.bAr,!0)
D.an3=new A.rc(C.a4,null,2,null)
D.A6=new A.NQ(!1,D.an3,A.ck5(),!0)
D.acT=new A.aDL(3,"spaceEvenly")
D.ad2=new B.ty(6,"dstIn")
D.a8Y=new B.aZ(3,3)
D.H5=new B.dp(D.a8Y,D.a8Y,C.aA,C.aA)
D.adp=new B.bp(C.a4,0,C.ak,-1)
D.HI=new A.a9o()
D.af9=new A.PZ()
D.afa=new A.Q1()
D.bTh=new A.ahN()
D.bja=w([],B.ak("B<lR>"))
D.bjb=w([],B.ak("B<mk>"))
D.K3=new A.PQ(D.bja,D.bjb,!0)
D.amJ=new B.ew("Zeitraum",!1,null)
D.amN=new B.ew("Konten (SKR 03)",!1,null)
D.C2=new A.aKM(0,"center")
D.bTt=new A.AD(!0,A.bL4(),A.bX1())
D.K8=new A.AD(!1,A.bL4(),A.bX1())
D.K9=new A.AE(!1,!0,null,A.aB6(),A.a3c(),!0,null,A.aB6(),A.a3c())
D.bTu=new A.AE(!0,!0,null,A.aB6(),A.a3c(),!0,null,A.aB6(),A.a3c())
D.ahJ=new B.I(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.y)
D.ahv=new B.I(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.y)
D.ahS=new B.I(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.y)
D.ahN=new B.I(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.y)
D.ahe=new B.I(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.y)
D.ahd=new B.I(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.y)
D.aia=new B.I(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.y)
D.ahD=new B.I(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.y)
D.aif=new B.I(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.y)
D.ai7=new B.I(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.y)
D.bro=new B.cl([50,D.ahJ,100,D.ahv,200,D.ahS,300,D.ahN,400,D.ahe,500,D.ahd,600,D.aia,700,D.ahD,800,D.aif,900,D.ai7],x.m)
D.eu=new B.um(D.bro,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.y)
D.b9h=w([8,4],x.t)
D.an1=new A.rc(D.eu,null,0.4,D.b9h)
D.an2=new A.rc(C.aY,null,0.5,null)
D.ie=new A.f7(0/0,0/0)
D.bAt=new A.rM(!0,A.bKA(),44,null)
D.pa=new A.qL(16,null,D.bAt,!0)
D.bAs=new A.rM(!0,A.bKA(),30,null)
D.pb=new A.qL(16,null,D.bAs,!0)
D.an4=new A.wH(!1,D.pa,D.pb,D.pa,D.pb)
D.bTv=new A.wH(!0,D.pa,D.pb,D.pa,D.pb)
D.Kk=new A.Qw(0,"left")
D.anS=new A.Qw(1,"center")
D.Kl=new A.Qw(2,"right")
D.anZ=new B.a6(57495,"MaterialIcons",null,!1)
D.Cn=new B.a6(58927,"MaterialIcons",null,!1)
D.aoH=new B.a6(59005,"MaterialIcons",null,!0)
D.aoI=new B.a6(59007,"MaterialIcons",null,!0)
D.aoJ=new B.a6(59011,"MaterialIcons",null,!1)
D.aoZ=new B.a6(61349,"MaterialIcons",null,!1)
D.aq7=new B.aF(D.aoZ,20,C.D,null,null)
D.ap4=new B.a6(61487,"MaterialIcons",null,!1)
D.aqp=new B.aF(D.ap4,18,null,null,null)
D.aqq=new B.aF(D.Cn,18,null,null,null)
D.ar7=new B.aF(C.ng,null,C.M,null,null)
D.arh=new B.aF(C.ni,16,null,null,null)
D.arp=new B.aF(C.KV,16,null,null,null)
D.ars=new B.aF(C.jD,null,C.D,null,null)
D.apD=new B.a6(62584,"MaterialIcons",null,!1)
D.arC=new B.aF(D.apD,16,null,null,null)
D.arI=new B.aF(D.Cn,16,null,null,null)
D.arO=new B.aF(F.Kv,null,C.aU,null,null)
D.atJ=new A.abr(null)
D.bTz=new A.aRg(0,"horizontal")
D.CQ=new A.Bv(0,0,0,0,!1)
D.LN=new A.Rx(0.5)
D.HO=new A.abG()
D.atO=new A.HB(D.HO,A.bX5(),10,A.bX2(),!0,A.bX4(),A.bX3(),!1,null,null,null)
D.bTA=new A.HB(D.HO,A.bX5(),10,A.bX2(),!0,A.bX4(),A.bX3(),!0,null,null,null)
D.aYM=w([4,3],x.t)
D.byx=new B.an("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.byf=new B.an("receivables","Forderungen (kurzfristig)")
D.bxZ=new B.an("inventory_value","Vorr\xe4te (Warenbestand)")
D.bxU=new B.an("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.bxy=new B.an("fixed_assets","Anlageverm\xf6gen")
D.bxM=new B.an("current_liabilities","Kurzfristige Verbindlichkeiten")
D.byp=new B.an("long_term_liabilities","Langfristige Verbindlichkeiten")
D.bye=new B.an("equity","Eigenkapital")
D.uo=w([D.byx,D.byf,D.bxZ,D.bxU,D.bxy,D.bxM,D.byp,D.bye],B.ak("B<+(f,f)>"))
D.bTE=w([],x.M)
D.biX=w([],x.O)
D.biY=w([],x.Y)
D.biZ=w([],B.ak("B<nS>"))
D.bj_=w([],B.ak("B<nT>"))
D.bTF=w([],x.U)
D.bTG=w([],x.u)
D.bj0=w([],x.r)
D.bs2={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.a43={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.Eh=new B.a5(D.a43,[0,0,0,0,0,0,0,C.cd],B.ak("a5<f,G>"))
D.bs0={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.brg=new B.a5(D.bs0,[0,0,0,0],B.ak("a5<f,u>"))
D.bsh={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.boM=new B.a5(D.bsh,[0,0,0,0,null,null,null,null],B.ak("a5<f,u?>"))
D.boD=new B.a5(D.bs2,[D.Eh,D.Eh,D.Eh,C.cd,C.cd,C.cd,D.brg,D.boM],x.R)
D.bp0=new B.a5(D.a43,[0,0,0,0,0,0,0,C.dn],x.R)
D.bs3={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.bp2=new B.a5(D.bs3,[8500,1200,3400,300,22e3,4200,9000,22200],B.ak("a5<f,J>"))
D.bs_={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.brh=new B.a5(D.bs_,[0,0,0,0,0,0,0,C.dn],x.R)
D.bsu={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.brj=new B.a5(D.bsu,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ak("a5<f,f>"))
D.aik=new B.I(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.y)
D.ais=new B.I(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.y)
D.ahh=new B.I(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.y)
D.ahF=new B.I(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.y)
D.ahP=new B.I(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.y)
D.aiF=new B.I(1,0,0.7372549019607844,0.8313725490196079,C.y)
D.ah2=new B.I(1,0,0.6745098039215687,0.7568627450980392,C.y)
D.ahH=new B.I(1,0,0.592156862745098,0.6549019607843137,C.y)
D.ahR=new B.I(1,0,0.5137254901960784,0.5607843137254902,C.y)
D.ai8=new B.I(1,0,0.3764705882352941,0.39215686274509803,C.y)
D.brp=new B.cl([50,D.aik,100,D.ais,200,D.ahh,300,D.ahF,400,D.ahP,500,D.aiF,600,D.ah2,700,D.ahH,800,D.ahR,900,D.ai8],x.m)
D.a3U=new B.um(D.brp,1,0,0.7372549019607844,0.8313725490196079,C.y)
D.alQ=new B.al(32,32,32,32)
D.btp=new B.ai(D.alQ,C.cu,null)
D.btx=new B.ai(C.aS,C.cu,null)
D.bjc=w([],B.ak("B<ob>"))
D.bjd=w([],B.ak("B<oM>"))
D.a8Z=new A.TB(D.bjc,D.bjd)
D.bzp=new B.fW("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.bzq=new B.fW("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.bzu=new B.fW("Automaten-Business","Umsatz je Automat",null,null)
D.bzw=new B.fW("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.bzy=new B.fW("Top","Meistverkaufte Produkte",null,null)
D.bzC=new B.fW("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.bzD=new B.fW("Kennzahlen","Rentabilit\xe4t",null,null)
D.a9I=new B.v2(C.a5,C.P,0)
D.bI7=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.bC2=new B.e6(D.bI7,null,null,null,null,null,null,null,null,null,null,null,null,C.ab,!1,null,null,null,C.K,null)
D.bKl=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.bC5=new B.e6(D.bKl,null,null,null,null,null,null,null,null,null,null,null,null,C.ab,!1,null,null,null,C.K,null)
D.bIj=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.bC6=new B.e6(D.bIj,null,null,null,null,null,null,null,null,null,null,null,null,C.ab,!1,null,null,null,C.K,null)
D.bJH=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.bC8=new B.e6(D.bJH,null,null,null,null,null,null,null,null,null,null,null,null,C.ab,!1,null,null,null,C.K,null)
D.bJE=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.bCt=new B.e6(D.bJE,null,null,null,null,null,null,null,null,null,null,null,null,C.ab,!1,null,null,null,C.K,null)
D.bTQ=new B.S(!0,C.a4,null,null,null,null,14,C.ai,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bIg=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.bIs=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.bJl=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.bJu=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.bJL=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.bKy=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ab6=new A.ajp(0,"auto")
D.bLB=new A.ajp(1,"top")
D.bQl=new A.yG("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.bQm=new A.yG("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cuh","c0w",()=>B.iC(new A.bCB(),x.D))
w($,"cui","aBN",()=>B.iC(new A.bCC(),x.a))
w($,"cvg","zn",()=>B.b7f(new A.bEV(),x.P))
w($,"cuj","bFY",()=>C.bo.$1$1(new A.bCD(),x.d))
w($,"cug","c0v",()=>C.bo.$1$1(new A.bCA(),x.X))
w($,"cuf","bFX",()=>C.bo.$1$1(new A.bCz(),x.h))
w($,"cue","bFW",()=>B.b7c(A.cj4(),x.F,x.b))
w($,"cmR","bFo",()=>new A.aDA())
v($,"cqd","mF",()=>new A.baa())})()};
(a=>{a["24ZsDudWQ5WYMrx+yWuiA8SEnNU="]=a.current})($__dart_deferred_initializers__);