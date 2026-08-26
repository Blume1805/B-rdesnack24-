((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
P7(d,e,f,g,h){return new A.a8r(f,g,d,h,e,null)},
a8r:function a8r(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vl:function vl(d){this.a=d},
caJ(d){var w
if(x.f.b(d)){w=J.T(d,"error")
if(typeof w=="string"&&C.c.av(w).length!==0)return C.c.av(w)}if(typeof d=="string"&&C.c.av(d).length!==0)return C.c.av(d)
return null},
ES:function ES(d){this.a=d},
bYR(d){var w=J.U(d),v=B.b3(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.ba
w=J.cO(w,new A.aHn(),x.aI)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.op(v,w)},
bxk(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.ak(d))
return w==null?0:w},
pQ:function pQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
op:function op(d,e){this.a=d
this.b=e},
aHn:function aHn(){},
byg(d,e,f){var w,v=new A.byh(f<0)
if(d==="expense")return v.$1(D.fv)
if(d==="revenue")return v.$1(D.li)
w=B.ig(C.c.av(e),null)
if(w!=null&&w>=1800&&w<=1999)return v.$1(C.e.ai(w,100)>=90?D.li:D.fv)
return D.aaz},
bFW(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rB:function rB(d,e){this.a=d
this.b=e},
byh:function byh(d){this.a=d},
bYS(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.U(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.m4
w=x.f
v=x.N
u=x.z
t=A.aHI(B.cF(w.a(e.h(a0,"current")),v,u))
s=A.aHI(B.cF(w.a(e.h(a0,"prior_year")),v,u))
r=A.aHI(B.cF(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ba
p=J.cO(p,new A.aHo(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ba
o=J.cO(o,new A.aHp(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ba
q=J.cO(q,new A.aHq(),x.fB)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.cF(w.a(e.h(a0,"customer")),v,u)
m=B.b3(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pm(n.h(0,"app_gross"))
k=B.b3(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pm(n.h(0,"avg_basket"))
u=B.cF(w.a(e.h(a0,"derived")),v,u)
v=A.pm(u.h(0,"gross_margin_pct"))
e=A.pm(u.h(0,"net_margin_pct"))
w=A.pm(u.h(0,"ebitda_margin_pct"))
j=A.pm(u.h(0,"cashflow_operating"))
i=A.bxl(u.h(0,"revenue_growth_yoy_pct"))
h=A.bxl(u.h(0,"revenue_growth_mom_pct"))
g=A.bxl(u.h(0,"result_growth_yoy_pct"))
u=A.bxl(u.h(0,"result_growth_mom_pct"))
f=B.b3(J.T(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.oq(t,s,r,p,o,q,new A.aCv(m,l,k,n),new A.aDG(v,e,w,j,i,h,g,u),f)},
pm(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.ak(d))
return w==null?0:w},
bxl(d){if(d==null)return null
if(typeof d=="number")return d
return B.fJ(J.ak(d))},
qA:function qA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vX:function vX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wV:function wV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCv:function aCv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDG:function aDG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oq:function oq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aHo:function aHo(){},
aHp:function aHp(){},
aHq:function aHq(){},
aHI(d){var w=J.U(d),v=A.uC(w.h(d,"revenue_net_7")),u=A.uC(w.h(d,"revenue_net_19")),t=A.uC(w.h(d,"revenue_net")),s=A.uC(w.h(d,"expense_net")),r=A.uC(w.h(d,"result_net")),q=A.uC(w.h(d,"vat_collected")),p=A.uC(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.ba
w=J.cO(w,new A.aHJ(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.os(v,u,t,s,r,q,p,w)},
uC(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.ak(d))
return w==null?0:w},
Di:function Di(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
os:function os(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHJ:function aHJ(){},
bYQ(d){return new A.yW(d,new B.iz(x.c_),C.dS)},
bya:function bya(){},
byb:function byb(){},
bA7:function bA7(){},
byc:function byc(){},
by8:function by8(){},
by9:function by9(){},
by7:function by7(){},
yW:function yW(d,e,f){this.r=d
this.a=e
this.f=f},
aHm:function aHm(d,e,f){this.a=d
this.b=e
this.c=f},
aHl:function aHl(d,e,f){this.a=d
this.b=e
this.c=f},
vk:function vk(d,e){this.d=d
this.a=e},
xe:function xe(d,e){this.a=d
this.b=e},
amk:function amk(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bfj:function bfj(d){this.a=d},
bfe:function bfe(d){this.a=d},
bfd:function bfd(d,e){this.a=d
this.b=e},
bff:function bff(d){this.a=d},
bfc:function bfc(d){this.a=d},
bfi:function bfi(){},
bfh:function bfh(){},
bfg:function bfg(d){this.a=d},
bfb:function bfb(d){this.a=d},
amj:function amj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bf7:function bf7(d){this.a=d},
bf8:function bf8(d){this.a=d},
bf9:function bf9(d){this.a=d},
bfa:function bfa(d){this.a=d},
x8:function x8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jh:function Jh(d,e,f){this.c=d
this.d=e
this.a=f},
bj9:function bj9(){},
bja:function bja(){},
bjb:function bjb(){},
bjc:function bjc(){},
bjd:function bjd(){},
bje:function bje(){},
bjf:function bjf(){},
ajo:function ajo(d,e){this.c=d
this.a=e},
xh:function xh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bYT(){return new A.yX(null)},
WV(d,e,f,g,h){return new A.ant(e,h,g,f,d,null)},
yX:function yX(d){this.a=d},
aHH:function aHH(d){this.a=d},
aHy:function aHy(d,e,f){this.a=d
this.b=e
this.c=f},
aHz:function aHz(d,e,f){this.a=d
this.b=e
this.c=f},
aHA:function aHA(d){this.a=d},
aHx:function aHx(){},
aHB:function aHB(d){this.a=d},
aHC:function aHC(d){this.a=d},
aHw:function aHw(){},
aHD:function aHD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHG:function aHG(){},
aHF:function aHF(){},
aHE:function aHE(){},
aHv:function aHv(d,e){this.a=d
this.b=e},
aHt:function aHt(d){this.a=d},
aHu:function aHu(d){this.a=d},
ahX:function ahX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ant:function ant(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
apQ:function apQ(d,e){this.e=d
this.a=e},
bms:function bms(d){this.a=d},
bmt:function bmt(d){this.a=d},
bmu:function bmu(d,e,f){this.a=d
this.b=e
this.c=f},
bmr:function bmr(){},
JN:function JN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Kc:function Kc(d,e){this.c=d
this.a=e},
btd:function btd(d){this.a=d},
bte:function bte(d,e){this.a=d
this.b=e},
btc:function btc(d){this.a=d},
ahV:function ahV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
IS:function IS(d,e){this.c=d
this.a=e},
bIB(d,e,f){return new A.a2G(e,f,d,null)},
bFa(d,e){var w=$.cU().a5(Math.abs(d))
return e===D.fv?"-"+w:w},
bPX(d,e){var w
if(e===D.fv)return d==="revenue"||d==="expense"?C.Y:C.n
if(e===D.li)w=d==="revenue"||d==="expense"
else w=!1
if(w)return C.al
return C.n},
caz(d,e){if(d==="expense")return e===D.fv?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fv?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fv)return"Privatentnahme"
if(e===D.li)return"Privateinlage"
return A.bFW(d)},
a2G:function a2G(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bF5(d,e,f,g,h){var w=null
return B.h3(w,w,!0,w,new A.bxf(h,g,e,f),d,w,!0,!0,x.H)},
jV(d,e,f,g,h,i,j,k,l,m,n){return new A.ao5(g,n,i,e,d,m,f,k,l,j,null)},
ax9(d,e){return A.c8v(d,e)},
c8v(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$ax9=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aN(D.aCO)
t=4
o=e.aC(0,$.bH(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.h_("finance-balance-sync",B.A(n,n)),$async$ax9)
case 7:r=g
q=B.cF(x.f.a(r.a),x.N,n)
l.MO()
if(J.d(J.T(q,"configured"),!1)){l.aN(D.aCS)
w=1
break}if(J.d(J.T(q,"ok"),!0)){o=$.bB1()
if(e.e==null)B.S(B.a_(y.b))
e.gcf().c_(o)
l.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Bilanz aus sevDesk \xfcbernommen ("+B.h(J.T(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}else{o=J.T(q,"error")
l.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Sync-Fehler: "+B.h(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a0(k)
l.MO()
l.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Sync fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$ax9,v)},
axc(d,e,f){var w=0,v=B.q(x.H)
var $async$axc=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.h3(null,null,!0,null,new A.bxd(f,e,e.aC(0,$.bH(),x.A)),d,null,!0,!0,x.H),$async$axc)
case 2:return B.o(null,v)}})
return B.p($async$axc,v)},
a8s:function a8s(d){this.a=d},
aMw:function aMw(){},
aMv:function aMv(){},
aMu:function aMu(){},
Jc:function Jc(d,e){this.c=d
this.a=e},
biK:function biK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biz:function biz(){},
biA:function biA(){},
biB:function biB(){},
biC:function biC(){},
biD:function biD(){},
biE:function biE(){},
biF:function biF(){},
biG:function biG(){},
biH:function biH(d){this.a=d},
biI:function biI(d){this.a=d},
biJ:function biJ(d){this.a=d},
biL:function biL(d,e){this.a=d
this.b=e},
biM:function biM(d,e){this.a=d
this.b=e},
bxf:function bxf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bxe:function bxe(d){this.a=d},
amL:function amL(d){this.a=d},
ao5:function ao5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
biN:function biN(d,e){this.a=d
this.b=e},
VX:function VX(d,e,f){this.c=d
this.d=e
this.a=f},
ZJ:function ZJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bsf:function bsf(){},
bsg:function bsg(){},
bsh:function bsh(d){this.a=d},
V5:function V5(d,e,f){this.c=d
this.d=e
this.a=f},
b8p:function b8p(){},
b8r:function b8r(d){this.a=d},
b8s:function b8s(d){this.a=d},
b8q:function b8q(){},
Vm:function Vm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9s:function b9s(){},
b9t:function b9t(){},
b9u:function b9u(){},
b9v:function b9v(d){this.a=d},
aoC:function aoC(d,e){this.c=d
this.a=e},
bjt:function bjt(){},
bju:function bju(){},
akI:function akI(d,e){this.c=d
this.a=e},
CJ:function CJ(d,e,f){this.c=d
this.d=e
this.a=f},
auw:function auw(d,e){this.c=d
this.a=e},
buw:function buw(){},
bux:function bux(){},
xc:function xc(d,e){this.c=d
this.a=e},
aiR:function aiR(d,e){this.e=d
this.a=e},
b6l:function b6l(){},
b6k:function b6k(){},
b6j:function b6j(d,e,f){this.a=d
this.b=e
this.c=f},
b6d:function b6d(d,e){this.a=d
this.b=e},
b6e:function b6e(d,e){this.a=d
this.b=e},
b6m:function b6m(d){this.a=d},
b6n:function b6n(d){this.a=d},
b6f:function b6f(){},
b6g:function b6g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6h:function b6h(d,e){this.a=d
this.b=e},
b6i:function b6i(d,e,f){this.a=d
this.b=e
this.c=f},
bxd:function bxd(d,e,f){this.a=d
this.b=e
this.c=f},
bxc:function bxc(d){this.a=d},
BH:function BH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UG:function UG(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b67:function b67(){},
b68:function b68(d){this.a=d},
b69:function b69(d){this.a=d},
b6b:function b6b(d,e){this.a=d
this.b=e},
b6a:function b6a(d,e){this.a=d
this.b=e},
b6c:function b6c(d){this.a=d},
bm:function bm(){},
bIz(d){return new A.LQ(d,C.ao,C.c0,null,null)},
LQ:function LQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UH:function UH(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c5$=g
_.c=_.a=null},
b6o:function b6o(d,e){this.a=d
this.b=e},
b6p:function b6p(d){this.a=d},
azM(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.aob:f,p=a0==null?16:a0,o=d==null?D.a0n:d,n=g==null,m=n?A.bBv(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yg:a3
n=n?A.bBv(r,r,r,r,r,r,r,r):g
w=j==null?D.Ex:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.L:e
return new A.o7(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cl,s,w,i,n)},
azT(d,e,f,g,h){var w=d==null?D.aoc:d,v=e==null?2:e,u=g==null?C.lG:g
return new A.fS(h,f===!0,w,v,u)},
bW7(d,e,f){var w=d.a
w=C.d.aM(w+(e.a-w)*f)
return A.azT(A.kI(d.c,e.c,f,A.c9h(),x.fj),B.aj(d.d,e.d,f),!1,A.kI(d.e,e.e,f,A.a13(),x.S),w)},
a2x(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TE
else w=h
v=m==null
u=v?8:m
t=$.lL()
s=t.aYz(f,v?8:m)
t=t.aYA(g,v?8:m)
v=d==null?A.bIx(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.aod:k)},
bW8(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.aj(d.e,e.e,f),q=B.mU(d.f,e.f,f),p=A.kI(d.r,e.r,f,A.a13(),x.S),o=B.c1(d.w,e.w,f),n=B.aj(d.a,e.a,f),m=B.aj(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aj(w.b,v.b,f)
t=B.aj(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2x(A.bIx(v,u,null,!1,t),p,q,o,s,n,null,A.kI(d.y,e.y,f,A.c9i(),x.G),m,r)},
bW9(d,e,f){var w,v,u=B.aj(d.a,e.a,f)
u.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mS(u,w,v,B.c1(d.d,e.d,f))},
bIx(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dy
else w=d
return new A.a2t(g===!0,v,u,w,f)},
bBv(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2z(4,C.ft,16,D.y3,0,120,A.c9k(),!1,!1,D.a_b,0,C.J,A.c9j())
else w=k
v=j==null?C.l9:j
return new A.a2y(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
ca7(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DB(C.d.j(f.b),v)},
ca6(d){return A.aBU(D.dy,15)},
o7:function o7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
azL:function azL(d,e){this.a=d
this.b=e},
fS:function fS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azU:function azU(){},
azV:function azV(){},
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
mS:function mS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2t:function a2t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2y:function a2y(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
afo:function afo(d,e){this.a=d
this.b=e},
a2z:function a2z(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
DB:function DB(d,e){this.a=d
this.b=e},
LR:function LR(d){this.a=d},
a2A:function a2A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
y6:function y6(d,e){this.a=d
this.b=e},
aiN:function aiN(){},
aiU:function aiU(){},
aiV:function aiV(){},
aiX:function aiX(){},
aiY:function aiY(){},
aiZ:function aiZ(){},
aj_:function aj_(){},
aj0:function aj0(){},
aj1:function aj1(){},
azW:function azW(d){this.a=d},
azX:function azX(){},
uY:function uY(d,e,f){this.a=d
this.b=e
this.c=f},
aiW:function aiW(){},
azY:function azY(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
azZ:function azZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA_:function aA_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7v:function a7v(d){this.b=d},
a2w:function a2w(d,e,f){this.d=d
this.e=e
this.a=f},
acy:function acy(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.fZ=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bE=_.aI=_.al=_.ar=$
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
ca8(d,e){var w=null
return new A.SC(e.w,B.f(e.r,w,w,w,w,w,w,w,w),w)},
azE(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aj(w.c,v.c,f)
u.toString
return new A.pu(t,e.b,new A.qq(v.a,v.b,u,B.aj(w.d,v.d,f)),!0)},
bJY(d,e,f){var w=A.azE(d.b,e.b,f),v=A.azE(d.d,e.d,f),u=A.azE(d.e,e.e,f)
return new A.vn(e.a,w,A.azE(d.c,e.c,f),v,u)},
bYV(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.aj(d.a,e.a,f)
w.toString
v=B.aj(d.b,e.b,f)
v.toString
return new A.eF(w,v)},
bJW(d,e,f){return new A.yZ(e.a,!0,B.aj(d.c,e.c,f),e.d,e.e,e.f,B.aj(d.r,e.r,f),e.w,e.x)},
ccy(d){return!0},
cab(d){return D.aan},
bJX(d,e,f,g){var w
if(d==null)w=f==null?C.I:null
else w=d
return new A.pR(w,f,g,e)},
bLV(d,e,f){var w,v=A.kI(d.a,e.a,f,A.c9d(),x.dv)
v.toString
w=A.kI(d.b,e.b,f,A.c9f(),x.bN)
w.toString
return new A.Ra(v,w)},
bZH(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rD(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nb(t,w,v,u)},
c3Z(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rD(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nB(t,w,v,u)},
bZG(d,e,f){var w,v,u,t,s,r=B.aj(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ol(w.b,v.b,f)
u.toString
t=B.cw(w.c,v.c,f)
t=A.bZE(B.bBn(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rD(d.b,e.b,f)
w=B.aj(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a13(),x.S)
if(u==null)u=v==null?C.I:null
return new A.l1(r,e.f,e.r,t,e.x,u,v,w,s)},
c3Y(d,e,f){var w,v,u,t,s,r=B.aj(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ol(w.b,v.b,f)
u.toString
t=B.cw(w.c,v.c,f)
t=A.c3W(B.bBn(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rD(d.b,e.b,f)
w=B.aj(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a13(),x.S)
if(u==null)u=v==null?C.I:null
return new A.lt(r,e.f,e.r,t,e.x,u,v,w,s)},
bZE(d,e,f,g,h,i){return new A.a7G(f,!1,g,i,d,e)},
bZF(d){return C.d.ab(d.e,1)},
c3W(d,e,f,g,h,i){return new A.afO(f,!1,g,i,d,e)},
c3X(d){return C.d.ab(d.e,1)},
bJS(d,e,f){var w,v=A.kI(d.a,e.a,f,A.c9c(),x.cm)
v.toString
w=A.kI(d.b,e.b,f,A.c9e(),x.es)
w.toString
return new A.NK(v,w,!0)},
bYU(d,e,f){return new A.NT(d,e==null?4:e,f)},
a2m:function a2m(){},
DA:function DA(d,e){this.a=d
this.b=e},
tS:function tS(d,e){this.r=d
this.w=e},
qq:function qq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adZ:function adZ(){},
pu:function pu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vn:function vn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eF:function eF(d,e){this.a=d
this.b=e},
yZ:function yZ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pR:function pR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afq:function afq(){},
Ra:function Ra(d,e){this.a=d
this.b=e},
nb:function nb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nB:function nB(d,e,f,g){var _=this
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
lt:function lt(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7G:function a7G(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afO:function afO(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
NK:function NK(d,e,f){this.a=d
this.b=e
this.c=f},
vm:function vm(){},
NT:function NT(d,e,f){this.a=d
this.b=e
this.c=f},
aiI:function aiI(){},
aiM:function aiM(){},
am1:function am1(){},
amq:function amq(){},
amr:function amr(){},
amt:function amt(){},
amu:function amu(){},
anj:function anj(){},
ani:function ani(){},
ank:function ank(){},
ar0:function ar0(){},
asV:function asV(){},
asW:function asW(){},
auA:function auA(){},
avj:function avj(){},
avi:function avi(){},
avk:function avk(){},
azA:function azA(){},
LL:function LL(){},
LM:function LM(d,e,f){this.c=d
this.d=e
this.a=f},
azC:function azC(d){this.a=d},
azB:function azB(d){this.a=d},
SC:function SC(d,e,f){this.c=d
this.e=e
this.a=f},
Zx:function Zx(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c2u(d,e,f){var w=B.ah(f),v=w.i("af<1,k1>")
v=B.Q(new B.af(f,new A.b0t(),v),v.i("aw.E"))
w=w.i("af<1,c>")
w=B.Q(new B.af(f,new A.b0u(),w),w.i("aw.E"))
return new A.ae_(e,d,v,w,null)},
bW5(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a8i(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tP(v,C.ac,C.x,new B.kB(1),v,v,v,v,C.by,v)
u=new A.a2n(f,d,e,u,t,!0,0,v,v,new B.bu(),B.aM(x.j))
u.bl()
return u},
ae_:function ae_(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b0t:function b0t(){},
b0u:function b0u(){},
a2n:function a2n(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.WL$=h
_.aUr$=i
_.ds$=j
_.aj$=k
_.dT$=l
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
biT:function biT(d,e){this.a=d
this.b=e},
azD:function azD(){},
k1:function k1(d,e){this.a=d
this.b=e},
o6:function o6(d,e){this.a=d
this.b=e},
aiJ:function aiJ(){},
aiK:function aiK(){},
aiL:function aiL(){},
UE:function UE(){},
B4:function B4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b0v:function b0v(d){this.a=d},
b0w:function b0w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b0x:function b0x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6O(d,e){var w=d==null?B.cf(C.I,1):d
return new A.a6N(e!==!1,w)},
a2C:function a2C(){},
a6N:function a6N(d,e){this.a=d
this.b=e},
O_:function O_(){},
a6P:function a6P(){},
aA8:function aA8(){},
aGC:function aGC(d,e){this.a=d
this.b=e},
aj4:function aj4(){},
amn:function amn(){},
amo:function amo(){},
amv:function amv(){},
LU:function LU(){},
wa:function wa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hz:function hz(){},
a6T:function a6T(d){this.a=d},
a6U:function a6U(d){this.a=d},
a6V:function a6V(d){this.a=d},
NV:function NV(){},
NW:function NW(){},
a6Y:function a6Y(d){this.a=d},
NY:function NY(){},
NZ:function NZ(d){this.a=d},
a6S:function a6S(d){this.a=d},
a6R:function a6R(d){this.a=d},
NU:function NU(d){this.a=d},
a6W:function a6W(d){this.a=d},
a6X:function a6X(d){this.a=d},
NX:function NX(d){this.a=d},
GW:function GW(){},
aWH:function aWH(d){this.a=d},
aWI:function aWI(d){this.a=d},
aWJ:function aWJ(d){this.a=d},
aWK:function aWK(d){this.a=d},
aWL:function aWL(d){this.a=d},
aWM:function aWM(d){this.a=d},
aWN:function aWN(d){this.a=d},
aWO:function aWO(d){this.a=d},
aWP:function aWP(d){this.a=d},
aWQ:function aWQ(d){this.a=d},
aWR:function aWR(d){this.a=d},
aWS:function aWS(d){this.a=d},
aWT:function aWT(d){this.a=d},
Pk:function Pk(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xf:function Xf(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c5$=h
_.c=_.a=null},
biZ:function biZ(d,e){this.a=d
this.b=e},
biX:function biX(d){this.a=d},
biY:function biY(d,e){this.a=d
this.b=e},
biW:function biW(){},
bj_:function bj_(d){this.a=d},
bCN(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.L:d
return new A.q4(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aMH(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TE:u
else w=g
v=f==null?A.azK(!1,u,0,u,!1,D.wo):f
w=new A.eh(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.azK(!1,u,0,u,!1,D.wo):d,j,a0,i,s,!1,p)
w.as1(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c_8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aj(d.x,e.x,f)
m.toString
w=A.bIy(d.ay,e.ay,f)
v=A.bIy(d.ch,e.ch,f)
u=B.aj(d.as,e.as,f)
u.toString
t=e.CW
s=A.kI(d.cy,e.cy,f,A.a13(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rD(d.w,e.w,f)
p=A.kI(d.a,e.a,f,A.c9b(),x.cw)
p.toString
o=B.bMs(d.db,e.db,f)
o.toString
n=B.aj(d.dy.a,e.dy.a,f)
n.toString
return A.aMH(v,m,w,r,e.z,s,new A.yY(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Pl(n),!1,u,o,!0,e.cx,p)},
azK(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aM(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
else w=e
return new A.a2v(h,w,g,i,f,!1)},
bIy(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rD(v.b,u.b,f),r=B.aj(v.c,u.c,f)
r.toString
r=A.bJX(t,A.kI(v.d,u.d,f,A.a13(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rD(d.c,e.c,f)
v=B.aj(d.e,e.e,f)
v.toString
return A.azK(!1,s,v,u,e.a,new A.LP(!1,r,w.c,!0))},
bWa(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rD(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aM(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
return new A.mT(e.a,e.b,w,v)},
ccz(d){return!0},
bEQ(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jA)return A.bFG(w.a,A.bCr(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dy:w},
c6T(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jA)w=A.bFG(v.a,A.bCr(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dy}return A.aBU(w,40)},
bP0(d,e,f,g,h){var w,v=A.bEQ(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jA)w=A.bFG(u.a,A.bCr(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dy}u=A.aBU(w,40)
return new A.NT(v,h==null?4:h,u)},
ccx(d,e){return!0},
c8Z(d,e){return Math.abs(d.a-e.a)},
cae(d,e){var w=J.cO(e,new A.bxZ(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
caa(d,e){return-1/0},
ca9(d,e){return d.a[e].b},
bQd(d){var w=J.cO(d,new A.bxW(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bQc(d){return A.aBU(D.dy,15)},
q4:function q4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aMI:function aMI(){},
Pl:function Pl(d){this.a=d},
a2v:function a2v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LP:function LP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yY:function yY(d,e,f){this.a=d
this.b=e
this.c=f},
aMx:function aMx(d,e){this.a=d
this.b=e},
a6Q:function a6Q(){},
Ft:function Ft(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bxZ:function bxZ(d){this.a=d},
bxY:function bxY(d){this.a=d},
a8F:function a8F(){},
bxW:function bxW(){},
ne:function ne(){},
qy:function qy(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rQ:function rQ(d,e){this.a=d
this.b=e},
tU:function tU(d,e){this.a=d
this.b=e},
Hn:function Hn(d){this.a=d},
Pm:function Pm(d){this.a=d},
zM:function zM(d,e){this.a=d
this.b=e},
aiS:function aiS(){},
aiT:function aiT(){},
aj6:function aj6(){},
amp:function amp(){},
ams:function ams(){},
aoe:function aoe(){},
aof:function aof(){},
aog:function aog(){},
aoi:function aoi(){},
aoj:function aoj(){},
aok:function aok(){},
aol:function aol(){},
asU:function asU(){},
auz:function auz(){},
aMJ:function aMJ(d){this.a=d},
aMK:function aMK(){},
aML:function aML(){},
zN:function zN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aoh:function aoh(){},
aMM:function aMM(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aMP:function aMP(){},
aMN:function aMN(d,e,f){this.a=d
this.b=e
this.c=f},
aMO:function aMO(d,e,f){this.a=d
this.b=e
this.c=f},
aMQ:function aMQ(){},
vT:function vT(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8E:function a8E(d,e,f){this.d=d
this.e=e
this.a=f},
acL:function acL(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i9=e
_.d3=f
_.fZ=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bE=_.aI=_.al=_.ar=$
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
bBu(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ah(o),l=new B.af(o,new A.azN(),m.i("af<1,G>")).jM(0,new A.azO()),k=e-l,j=new A.azR(k,d,n)
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
new B.j0(o,m.i("j0<1>")).aD(0,new A.azP(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j0(o,m.i("j0<1>")).aD(0,new A.azQ(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
azN:function azN(){},
azO:function azO(){},
azR:function azR(d,e,f){this.a=d
this.b=e
this.c=f},
azS:function azS(d,e,f){this.a=d
this.b=e
this.c=f},
azP:function azP(d,e,f){this.a=d
this.b=e
this.c=f},
azQ:function azQ(d,e,f){this.a=d
this.b=e
this.c=f},
bCr(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j0(w,B.ah(w).i("j0<1>")).aD(0,new A.aJU(v,d))
else throw B.e(B.bN('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aJU:function aJU(d,e){this.a=d
this.b=e},
aD6(d,e){var w,v
if(e!=null){w=B.ah(e).i("af<1,G>")
v=B.Q(new B.af(e,new A.aD7(),w),w.i("aw.E"))
return A.ca1(d,new A.a3d(v,x.cX))}else return d},
aD7:function aD7(){},
c35(d,e){var w=!0
if(d!==C.fc)if(!(d===C.ac&&e===C.x))w=d===C.iF&&e===C.b5
if(w)return D.EK
else{w=!0
if(d!==C.hD)if(!(d===C.iF&&e===C.x))w=d===C.ac&&e===C.b5
if(w)return D.EL
else return D.ab7}},
Op:function Op(d,e){this.a=d
this.b=e},
a33:function a33(d,e){this.a=d
this.b=e},
zR:function zR(d,e){this.a=d
this.$ti=e},
aos:function aos(){},
ca1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ao(),i=x.v,h=B.b([],i),g=new B.cp(j.r,C.aj,k,k,h)
for(j=B.NE(d),w=B.b([],x.I),v=new B.NG(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fK('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.NF(v,r)
v.Dz()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dz()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.es(B.b([],i),!0,s)
p=new B.L5(new B.cp(t,p,k,new B.arp([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3d:function a3d(d,e){this.a=d
this.b=0
this.$ti=e},
b3Z:function b3Z(){},
bCf(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bWd(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aBU(d,e){var w=1-e/100
return B.aF(d.gfJ(d),C.d.aM(d.gOi()*w),C.d.aM(d.gGw()*w),C.d.aM(d.gKJ()*w))},
bJV(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
bCg(d){var w=d.a,v=w?A.b0s(d.b):0,u=w?A.b0s(d.c):0,t=w?A.b0s(d.d):0
return new B.ag(v,u,t,w?A.b0s(d.e):0)},
c0n(d){var w
if(d.c===0){d.seY(null)
w=B.c5(d.r)
d.r=B.aF(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bD9(d,e,f,g){var w
if(f!=null){d.r=C.I.gt(0)
d.seY(f.mP(0,g))}else{w=e==null?C.L:e
d.r=w.gt(w)
d.seY(null)}},
b0s(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kI(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
cbl(d,e,f){return C.d.aM(d+(e-d)*f)},
bFG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a8r.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aM:C.o
r=r?C.m:C.a8
w=x.p
v=B.b([],w)
C.b.J(v,B.b([B.bM(t.x,C.m,s,18),C.aS],w))
v.push(B.ap(new B.dC(t.c,!1,s),1))
v=B.ad(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.F,B.f(t.d,s,1,C.ae,s,B.bA(u==null?C.h:u,22,C.E),s,s,s)],w)
return B.be(r,B.a3(w,C.z,C.ip,C.i),q,s,C.am,s,s,3)}}
A.vl.prototype={
M4(d){return this.aUq(d)},
aUq(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M4=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e3("finance_summary",B.a6(["p_from",E.or(d.a),"p_to",E.or(d.b)],s,r),r),$async$M4)
case 3:q=f
if(q==null){u=D.ass
w=1
break}if(x.f.b(q)){u=B.cF(q,s,r)
w=1
break}u=D.auH
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M4,v)},
M3(d){return this.aUp(d)},
aUp(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M3=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e3("finance_kpis",B.a6(["p_from",E.or(d.a),"p_to",E.or(d.b)],s,r),r),$async$M3)
case 3:q=f
if(x.f.b(q)){u=B.cF(q,s,r)
w=1
break}u=D.as8
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M3,v)},
M2(d){return this.aUo(d)},
aUo(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M2=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e3("finance_bookings_list",B.a6(["p_from",E.or(d.a),"p_to",E.or(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$M2)
case 3:q=f
if(x.f.b(q)){u=B.cF(q,s,r)
w=1
break}u=D.asx
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M2,v)},
pI(d){return this.arK(d)},
arK(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.h_("sevdesk-sync",B.a6(["from",E.or(d.a),"to",E.or(d.b)],s,s)),$async$pI)
case 3:r=f.a
if(x.f.b(r)&&typeof J.T(r,"upserted")=="number"){u=C.d.X(B.fw(J.T(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pI,v)},
LZ(d){return this.aUf(d)},
aUf(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LZ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.h_("finance-export-pdf",B.a6(["from",E.or(d.a),"to",E.or(d.b)],s,s)),$async$LZ)
case 3:r=f.a
if(x.f.b(r)&&typeof J.T(r,"base64")=="string"){u=B.aI(J.T(r,"base64"))
w=1
break}throw B.e(B.e2("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LZ,v)}}
A.ES.prototype={
Gq(d){return this.akL(d)},
akL(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gq=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M4(d),$async$Gq)
case 7:q=f
o=A.aHI(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gq,v)},
Gl(d){return this.akw(d)},
akw(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gl=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M3(d),$async$Gl)
case 7:q=f
o=A.bYS(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gl,v)},
Gb(d){return this.aki(d)},
aki(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gb=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M2(d),$async$Gb)
case 7:q=f
o=A.bYR(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gb,v)},
pI(d){return this.arL(d)},
arL(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pI=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pI(d),$async$pI)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a0(n)
p=r.BJ(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pI,v)},
LY(d){return this.aUe(d)},
aUe(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LY=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LZ(d),$async$LY)
case 7:q=f
o=C.j_.cH(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a0(m)
o=r.BJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LY,v)},
BJ(d){var w,v
if(d instanceof B.vj)return d
if(d instanceof B.mk){if(d.b==="42501")return new B.we(d.a)
return new B.tx(d.a)}if(d instanceof B.Od){w=A.caJ(d.b)
v=""+d.a
return new B.tx(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Bx("Unerwarteter Fehler: "+B.h(d))},
$iaHs:1}
A.pQ.prototype={
gamp(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbs(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.op.prototype={
gbs(){return[this.a,this.b]}}
A.rB.prototype={
L(){return"Geldfluss."+this.b}}
A.qA.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vX.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wV.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCv.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDG.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Di.prototype={
gbs(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.os.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yW.prototype={
Hk(d){return this.arJ(0)},
arJ(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.see(0,C.dF)
s=t.r
r=s.aC(0,$.r_(),x.P)
p.a=null
w=3
return B.k(B.pt(new A.aHm(p,t,r),x.H),$async$Hk)
case 3:t.see(0,f)
q=t.f
if(q.ghf(q)==null){q=$.bB3()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bHp())
s.c_($.bB2())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hk,v)},
LX(){return this.aUd()},
aUd(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LX=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.see(0,C.dF)
s=t.r.aC(0,$.r_(),x.P)
q.a=null
w=3
return B.k(B.pt(new A.aHl(q,t,s),x.H),$async$LX)
case 3:t.see(0,e)
r=t.f
u=r.ghf(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LX,v)}}
A.vk.prototype={
U(){return new A.amk(D.Bj)}}
A.xe.prototype={
L(){return"_Filter."+this.b}}
A.amk.prototype={
gSH(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbD(),t=u.ak($.r_(),x.P),s=u.ak($.bB2(),x.e)
u=$.cZ()
return B.db(D.aaY,v,B.nq(B.da(B.b([new B.f9("Zeitraum",u.a5(t.a)+" \u2013 "+u.a5(t.b),v,v),C.N,new A.amj(w.w,w.gSH(),new A.bfe(w),new A.bff(w),v),C.aD,B.di(s,new A.bfg(w),new A.bfh(),new A.bfi(),!1,!0,!1,x.m,x.l)],x.p),v,C.ck,v,C.G,!1),C.m,new A.bfj(w)),v,v,v)},
at5(d){var w=B.ah(d).i("b_<1>")
w=B.Q(new B.b_(d,new A.bfb(this),w),w.i("t.E"))
return w}}
A.amj.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.x8("Alle",t===D.Bj,new A.bf7(v),u),new A.x8("Ausgaben",t===D.a_B,new A.bf8(v),u),new A.x8("Erl\xf6se",t===D.a_C,new A.bf9(v),u),new A.x8("Privat",t===D.a_D,new A.bfa(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.x8("Konto "+w+" \xd7",!0,v.f,u))
return B.jh(C.c7,t,C.d1,6,8)}}
A.x8.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aM:C.a7,s=B.ar(9999),r=B.ar(9999),q=B.ar(9999),p=B.cf(v?C.m:C.a8,1)
return B.bt(w,!0,w,B.dr(!1,C.V,!0,s,B.dS(!1,r,!0,B.aG(w,B.f(u,w,w,w,w,B.w(C.h,13,C.E),w,w,w),C.q,w,w,new B.aC(w,w,p,q,w,w,C.B),w,w,w,w,C.fR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.Jh.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aRm
w=this.d
if(w.length===0)return D.aRn
v=B.ah(w).i("b_<1>")
u=new B.b_(w,new A.bj9(),v).f1(0,0,new A.bja())
t=new B.b_(w,new A.bjb(),v).f1(0,0,new A.bjc())
s=new B.b_(w,new A.bjd(),v).f1(0,0,new A.bje())
r=new B.b_(w,new A.bjf(),v).gq(0)
v=w.length
q=$.cU()
p=q.a5(t)
o=A.bFa(u,A.byg("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a5(s)
n=x.p
q=B.b([B.f(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.w(C.h,14,C.E),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.J(q,B.b([C.aK,B.f(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.w(C.n,12,C.k),l,l,l)],n))
if(r>0)C.b.J(q,B.b([C.aK,B.f(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.w(C.Y,12,C.k),l,l,l)],n))
k=B.b([B.be(l,B.a3(q,C.z,C.f,C.i),C.a7,l,C.A,l,l,3),C.N],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.J(k,B.b([new A.ajo(w[m],l),C.F],n))
return B.a3(k,C.a9,C.f,C.i)}}
A.ajo.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.av(n).length!==0)===!0){n.toString
n=C.c.av(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.ad(B.b([B.ap(B.f(n,p,2,C.ae,p,B.w(C.h,14,C.E),p,p,p),1),C.af,A.bIB(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.f($.cZ().a5(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bFW(w),p,1,C.ae,p,B.w(C.n,12,C.k),p,p,p)
v=C.d.ab(o.y,1)
t=$.cU()
s=t.a5(o.w)
t=t.a5(o.x)
r=o.gamp()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aK,w,C.b3,B.f("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ae,p,B.w(C.n,12,C.k),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.J(q,B.b([C.aK,B.ad(B.b([D.aet,C.c2,B.ap(B.f("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.w(C.Y,11,C.k),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.be(p,B.a3(q,C.z,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xh.prototype={
p(d){var w=null
return B.be(w,B.ad(B.b([B.bM(this.e,this.d,w,w),C.af,B.ap(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a7,w,C.A,w,w,3)}}
A.yX.prototype={
d9(d,e){var w=null,v=e.ak($.r_(),x.P),u=e.ak($.bB3(),x.aN)
return B.nq(B.da(B.b([new B.f9("Finanzen","Dashboard",new A.ahX(e.ak($.bB0(),x.c).gjg(),new A.aHy(this,d,e),new A.aHz(this,d,e),new A.aHA(d),new A.aHB(d),new A.aHC(d),new A.aHD(this,d,e,v),w),w),C.aD,new A.apQ(v,w),C.c3,D.ahI,C.c3,B.di(u,new A.aHE(),new A.aHF(),new A.aHG(),!1,!0,!1,x.d,x.l)],x.p),w,C.ck,w,C.G,!1),C.m,new A.aHH(e))},
JQ(d,e){return this.aMP(d,e)},
aMP(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$JQ=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bB0()
w=3
return B.k(e.aC(0,n.ghQ(),x.F).Hk(0),$async$JQ)
case 3:m=g
if(d.e==null){w=1
break}t=e.aC(0,n,x.c)
s=t.ghf(t)==null
r=t.ghf(t)
if(r instanceof B.vj)q=r.a
else q=r==null?null:J.ak(r)
if(s)p="sevDesk synchronisiert: "+B.h(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.O(x.q).f
o=s?C.K:D.a8n
n.aN(B.bZ(null,null,null,null,null,C.r,null,B.f(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JQ,v)},
BK(d,e){return this.axZ(d,e)},
axZ(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BK=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aC(0,$.bB0().ghQ(),x.F).LX(),$async$BK)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aN(D.aCU)
w=1
break}t=B.oS(C.v,10)
w=4
return B.k($.bSq().u6(s,"finanzauswertung.pdf",t,null,null,null),$async$BK)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BK,v)},
BL(d,e,f){return this.aKm(d,e,f)},
aKm(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BL=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.h3(null,null,!0,null,new A.aHv(f,d),d,null,!0,!0,x.cJ),$async$BL)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mQ(e.aC(0,$.bH(),x.A))
p=f.a
o=f.b
n=$.cZ()
m=n.a5(p)
n=n.a5(o)
w=8
return B.k(r.wd("finance_period",p,o,B.a6(["period_from",p.dP()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BL)
case 8:if(d.e!=null)d.O(x.q).f.aN(F.mu)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a0(k)
if(d.e!=null)d.O(x.q).f.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Fehler: "+B.h(q),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BL,v)}}
A.ahX.prototype={
p(d){var w=this,v=null,u=A.WV(C.m,F.fW,C.m,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.WV(v,D.ada,v,w.r,"Gesellschafter-Freigaben"),s=A.WV(v,D.abq,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.WV(v,D.yk,v,r?v:w.d,"sevDesk synchronisieren"),p=A.WV(C.Y,C.fU,C.Y,r?v:w.e,"PDF-Export")
return B.ad(B.b([u,C.aS,t,C.aS,s,C.aS,q,C.aS,p,C.aS,A.WV(C.al,C.fV,C.al,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.ant.prototype={
p(d){var w,v=this,u=null,t=B.ar(12),s=B.ar(12),r=B.ar(12),q=v.w
if(q==null)q=C.a8
q=B.cf(q,1)
w=v.r
if(w==null)w=C.h
return B.tT(B.dr(!1,C.V,!0,t,B.dS(!1,s,!0,B.aG(u,B.bM(v.c,w,u,20),C.q,u,u,new B.aC(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a7,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.apQ.prototype={
d9(d,e){var w=null,v=this.e,u=$.cZ(),t=x.p
return B.be(w,B.a3(B.b([D.aa3,C.F,B.ad(B.b([D.ae5,C.ap,B.ap(B.f(u.a5(v.a)+" \u2013 "+u.a5(v.b),w,w,w,w,B.w(C.h,16,C.E),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jh(C.c7,B.b([new A.JN("Monat",new A.bms(e),w,w),new A.JN("Jahr (YTD)",new A.bmt(e),w,w),new A.JN("Zeitraum w\xe4hlen \u2026",new A.bmu(this,d,e),D.ac4,w)],t),C.d1,6,8)],t),C.z,C.f,C.i),w,w,C.A,w,w,3)},
Ja(d,e){return this.aJg(d,e)},
aJg(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Ja=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aW(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.axv(new A.bmr(),d,B.bE(B.b1(t)-5,1,1,0,0,0,0),new B.lV(s.a,s.b,x.bz),B.bE(B.b1(t)+1,1,1,0,0,0,0),C.ec),$async$Ja)
case 2:r=g
if(r!=null)e.aC(0,$.r_().ghQ(),x.V).uo(0,new E.m_(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Ja,v)}}
A.JN.prototype={
p(d){var w=null,v=B.ar(9999),u=B.ar(9999),t=B.ar(9999),s=B.cf(C.a8,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.J(q,B.b([B.bM(p,C.h,w,14),C.aS],r))
q.push(B.f(this.c,w,w,w,w,B.w(C.h,13,C.E),w,w,w))
return B.dr(!1,C.V,!0,v,B.dS(!1,u,!0,B.aG(w,B.ad(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aC(w,w,s,t,w,w,C.B),w,w,w,w,C.fR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a7,0,w,w,w,w,w,C.bb)}}
A.Kc.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jz(new A.btd(this)),C.c3,D.aa9,C.t],q),o=this.c.w
if(o.length===0)p.push(B.be(r,B.ad(B.b([D.aez,C.af,B.ap(B.f("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.w(C.n,14,C.k),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a7,r,C.A,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.J(w,B.b([new A.ahV(t.a,t.b,s,A.bFW(s),t.d,new A.bte(d,t),r),C.F],q))}p.push(B.a3(w,C.j,C.f,C.i))}return B.a3(p,C.a9,C.f,C.i)}}
A.ahV.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aM:C.a7,q=B.cf(s?C.m:C.a8,1),p=B.ar(4),o=v.c,n=x.p
t=B.b([B.aG(C.T,B.f(C.c.a1(o,0,1),u,u,u,u,B.bA(C.h,14,C.p),u,u,u),C.q,u,u,new B.aC(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.af,B.ap(B.a3(B.b([B.f(o+" \xb7 "+v.d,u,1,C.ae,u,B.w(C.h,14,C.E),u,u,u),B.f(v.f,u,u,u,u,B.w(C.n,12,C.k),u,u,u)],n),C.z,C.f,C.i),1),A.bIB(o,v.r,t)],n)
C.b.J(t,B.b([C.c2,C.FA],n))
w=B.be(u,B.ad(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.bt(u,!0,u,B.dS(!1,B.ar(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.IS.prototype={
p(d){var w=null
return B.be(C.Y,B.ad(B.b([D.afa,C.af,B.ap(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fm,w,C.A,w,w,3)}}
A.a2G.prototype={
p(d){var w=null,v=this.d,u=this.c,t=A.byg(v,this.e,u),s=A.bFa(u,t),r=B.w(A.bPX(v,t),15,C.E)
return B.f(s,w,w,w,A.caz(v,t)+" "+$.cU().a5(Math.abs(u)),r,w,w,w)}}
A.a8s.prototype={
d9(d,e){return B.di(e.ak($.bHp(),x.cn),new A.aMu(),new A.aMv(),new A.aMw(),!1,!0,!1,x.X,x.l)}}
A.Jc.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aAc,C.t,B.jz(new A.biK(v,q,100-t.w.a,w,p)),C.t,new A.amL(u),C.aD,D.aAb,C.t,new A.aiR(t,u),C.aD,D.aA6,C.t,B.bt(u,!0,u,B.kd(u,B.be(u,new A.V5(t,220,u),u,u,C.A,u,u,3),C.a_,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.biL(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.azY,C.t,B.bt(u,!0,u,B.kd(u,new A.Vm(t,200,!1,u),C.a_,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.biM(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.aA3,C.t,new A.aoC(t,u),C.aD,D.aA_,C.t,new A.akI(t,u)],s)
if(t.f.length!==0)C.b.J(r,B.b([C.aD,D.aA8,C.t,new A.auw(t,u)],s))
return B.a3(r,C.a9,C.f,C.i)}}
A.amL.prototype={
p(d){var w=null
return B.f("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.w(C.n,11,C.k).cC(1.35),w,w,w)}}
A.ao5.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.Y:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.biN(m,d):l
r=x.p
q=B.b([B.ap(B.f(m.c.toUpperCase(),l,l,l,l,B.w(C.n,10,C.p).fA(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cf(C.Y,0.8)
n=B.ar(4)
q.push(B.aG(l,B.f("Ziel "+p,l,l,l,l,B.w(C.Y,9,C.p),l,l,l),C.q,l,l,new B.aC(l,l,o,n,l,l,C.B),l,l,l,l,C.nM,l,l,l))}q=B.b([B.ad(q,C.j,l,C.f,C.i,0,l,l),C.aK,B.NR(C.d4,B.f(m.d,l,l,l,l,B.bA(w,22,C.p),l,l,l),C.hP)],r)
p=m.e
if(p!=null)q.push(B.f(p,l,2,C.ae,l,B.w(C.n,10,C.aG),l,l,l))
q.push(C.d_)
q.push(B.ad(B.b([new A.VX("Vormonat",m.r,l),C.c2,new A.VX("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.d_)
q.push(B.ap(new A.ZJ(v,m.y,m.z,l),1))
return B.bt(l,u,l,B.kd(l,B.be(l,B.a3(q,C.z,C.f,C.i),l,l,C.bP,l,l,3),C.a_,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.VX.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ar(4)
return B.aG(r,B.f(this.c+" \u2014",r,r,r,r,B.w(C.n,9,C.p),r,r,r),C.q,r,r,new B.aC(C.a8,r,r,q,r,r,C.B),r,r,r,r,C.nM,r,r,r)}w=q>=0
v=w?C.al:C.Y
u=v.e1(0.12)
t=B.cf(v,0.7)
s=B.ar(4)
return B.aG(r,B.ad(B.b([B.bM(w?F.abc:D.abb,v,r,10),C.Zs,B.f(this.c+" "+C.d.ab(q,1)+" %",r,r,r,r,B.w(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aC(u,r,t,s,r,r,C.B),r,r,r,r,C.nM,r,r,r)}}
A.ZJ.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eF(v,j[v]))
u=C.b.jM(j,new A.bsf())
t=C.b.jM(j,new A.bsg())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bsh(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6O(k,!1)
w=B.b([A.aMH(k,2,A.azK(!1,C.m.e1(0.16),0,k,!0,D.wo),C.m,0.35,k,D.EB,k,!0,!1,!0,!1,D.G8,!1,10,D.YV,!0,C.lG,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Pk(A.bCN(k,k,k,D.aoe,l,D.Cl,D.Ex,D.EC,w,D.ahV,k,m,k,n,D.Yg,D.aof,D.aaq),C.ao,C.a5,k,k)}}
A.V5.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aQs
w=C.b.f1(p,0,new A.b8p())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.azT(B.b([A.a2x(q,q,D.BM,q,C.m,q,q,q,r.b,6),A.a2x(q,q,D.BM,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bS(A.bIz(A.azM(q,q,u,q,q,A.a6O(q,!1),q,new A.yZ(!0,!0,q,new A.b8q(),A.a0Y(),!1,q,A.axf(),A.a0Y()),q,v,q,q,new A.vn(!0,new A.pu(16,q,new A.qq(!0,new A.b8r(this),46,q),!0),D.kD,D.kD,new A.pu(16,q,new A.qq(!0,new A.b8s(p),26,q),!0)))),this.d,q)},
aM2(d){if(Math.abs(d)>=1000)return C.d.ab(d/1000,1)+" k"
return C.d.ab(d,0)}}
A.Vm.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.af(v,new A.b9s(),w),x.i)
C.b.J(o,new B.af(u,new A.b9t(),w))
t=C.b.f1(o,0,new A.b9u())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.azT(B.b([A.a2x(q,q,q,q,C.m,q,q,q,v[s],14),A.a2x(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bS(A.bIz(A.azM(q,q,n,q,q,A.a6O(q,!1),q,D.EC,q,o,q,q,new A.vn(!0,D.kD,D.kD,D.kD,new A.pu(16,q,new A.qq(!0,new A.b9v(p),26,q),!0)))),this.d,q)
return this.e?r:B.be(q,r,q,q,C.A,q,q,3)}}
A.aoC.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aQr
w=new B.af(l,new A.bjt(),B.ah(l).i("af<1,G>")).jM(0,new A.bju())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.f(r.b,m,m,m,m,B.w(C.h,14,C.p),m,m,m)
p=$.cU()
o=r.d
n=new B.b0(4,4)
o=B.b([new B.i_(C.ai,C.f,C.i,C.j,m,C.aW,m,0,B.b([new B.ix(1,C.cR,B.a3(B.b([q,B.f(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a5(r.f),m,m,m,m,B.w(C.n,12,C.aG),m,m,m)],v),C.z,C.f,C.i),m),C.ap,B.f(p.a5(o),m,m,m,m,B.bA(C.h,16,C.p),m,m,m)],v),m),C.d_,new B.E_(new B.d4(n,n,n,n),C.bu,B.zO(C.a8,m,8,C.d.bo(o/w,0,1),D.BB),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a11(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.J(u,o)}return B.be(m,B.a3(u,C.j,C.f,C.i),m,m,C.A,m,m,3)}}
A.akI.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ap(new A.CJ("Aktive Kunden",""+s,u),1)
w=B.ap(new A.CJ("K\xe4ufe",""+t.a,u),1)
v=$.cU()
return B.be(u,B.ad(B.b([s,w,B.ap(new A.CJ("\xd8-Warenkorb",v.a5(t.d),u),1),B.ap(new A.CJ("Umsatz/Kunde",v.a5(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.A,u,u,3)}}
A.CJ.prototype={
p(d){var w=null
return B.a3(B.b([B.f(this.c.toUpperCase(),w,w,w,w,B.w(C.n,10,C.p).fA(0.6),w,w,w),C.b3,B.f(this.d,w,w,w,w,B.bA(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.auw.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.buw(),B.ah(q).i("af<1,G>")).jM(0,new A.bux()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.b0(4,4)
t=B.b([new B.i_(C.ai,C.f,C.i,C.j,r,C.aW,r,0,B.b([new B.ix(1,C.cR,B.f(u.b,r,1,C.ae,r,B.w(C.h,13,C.p),r,r,r),r),B.f(""+u.c+"\xd7 ",r,r,r,r,B.w(C.n,12,C.E),r,r,r),B.f($.cU().a5(t),r,r,r,r,B.w(C.h,13,C.p),r,r,r)],o),r),C.aK,new B.E_(new B.d4(s,s,s,s),C.bu,B.zO(C.a8,r,6,C.d.bo(t/p,0,1),D.BB),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a11(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.F)
C.b.J(n,t)}return B.be(r,B.a3(n,C.j,C.f,C.i),r,r,C.A,r,r,3)}}
A.xc.prototype={
p(d){var w=null
return B.be(w,B.f(this.c,w,w,w,w,B.w(C.n,13,C.k),w,w,w),C.a7,w,C.A,w,w,3)}}
A.aiR.prototype={
d9(d,e){return B.di(e.ak($.bB1(),x.fM),new A.b6j(this,d,e),new A.b6k(),new A.b6l(),!1,!0,!1,x.h,x.l)}}
A.BH.prototype={
U(){return new A.UG()},
aZc(){return this.d.$0()}}
A.UG.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aG()
q.d=new B.aW(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.T(w,"as_of"))!=null){w.toString
u=B.du(J.ak(J.T(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.q_[t].a
if(v)r=""
else{r=B.b3(J.T(w,s))
if(r==null)r=null
r=C.d.ab(r==null?0:r,2)
r=B.an(r,".",",")}u.m(0,s,new B.br(new B.ck(r,C.aV,C.ax),$.al()))}q.e!==$&&B.aV()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cj(v,v.r,v.e,B.l(v).i("cj<2>"))
while(v.u()){w=v.d
w.T$=$.al()
w.S$=0}this.an()},
rB(d){var w=this.e
w===$&&B.a()
w=C.c.av(w.h(0,d).a.a)
w=B.an(w,".","")
w=B.fJ(B.an(w,",","."))
return w==null?0:w},
a4z(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.q_[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ab(u,2)
s=B.an(s,".",",")
t.jY(0,t.a.yg(C.ax,C.aV,s))}}this.H(new A.b67())},
aFR(){this.a4z(D.asu)
this.c.O(x.q).f.aN(D.aDg)},
Ir(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ir=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.q_[e].a)
q=a2
t=4
w=7
return B.k($.a6G.cg().w2(B.b(["csv","txt"],x.s),C.nW,!0),$async$Ir)
case 7:p=a5
a2=p
o=a2==null?null:J.L1(a2.a).c
if(o==null){w=1
break}n=C.aL.ae7(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Cq.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ay2(l,B.bR("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.av(J.T(k,0)).toLowerCase()
i=J.Dd(q,j)?j:D.auI.h(0,j)
if(i==null)continue
d=C.c.av(C.b.mb(J.bVD(k,1)))
d=B.an(d,"\u20ac","")
d=B.an(d," ","")
d=B.an(d,".","")
h=B.an(d,",",".")
g=B.fJ(h)
if(g!=null)J.fx(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aN(D.aCR)
w=1
break}r.a4z(m)
r.c.O(x.q).f.aN(B.bZ(null,null,null,null,null,C.r,null,B.f(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a0(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Import fehlgeschlagen: "+B.h(f),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ir,v)},
IC(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IC=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.H(new A.b68(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0K("upsert_finance_balance",B.a6(["p_as_of",C.c.a1(n.dP(),0,10),"p_cash_and_bank",q.rB("cash_and_bank"),"p_receivables",q.rB("receivables"),"p_inventory_value",q.rB("inventory_value"),"p_other_current_assets",q.rB("other_current_assets"),"p_fixed_assets",q.rB("fixed_assets"),"p_current_liabilities",q.rB("current_liabilities"),"p_long_term_liabilities",q.rB("long_term_liabilities"),"p_equity",q.rB("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IC)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZc()
o=q.c
o.toString
B.aU(o,!1).eV()
q.c.O(x.q).f.aN(D.aCV)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a0(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aN(B.bZ(null,null,null,null,null,C.r,null,B.f("Speichern fehlgeschlagen: "+B.h(p),null,null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.H(new A.b69(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IC,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.f("Bilanzwerte erfassen",r,r,r,r,B.bA(C.h,18,C.p),r,r,r),p=s.f?r:new A.b6b(s,d),o=s.d
o===$&&B.a()
p=B.f6(D.ae7,B.f("Stichtag: "+C.c.a1(o.dP(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ap(B.f6(D.afl,D.aJ8,o?r:s.gaEN(),r),1)
v=x.p
w=B.b([p,C.F,B.ad(B.b([w,C.ap,B.ap(B.f6(D.af6,D.aIV,o?r:s.gaFQ(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q_[u]
o=s.e
o===$&&B.a()
C.b.J(w,B.b([B.dj(r,C.ar,!1,r,!0,C.r,r,B.dq(),o.h(0,p.a),r,r,r,r,r,2,new B.bO(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a_,!0,r,!0,r,!1,r,C.aw,r,r,r,r,C.eE,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.A,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ac,r,C.X,r,r,r,r),C.F],v))}w.push(B.f("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.w(C.n,11,C.k),r,r,r))
p=B.bS(B.eA(B.a3(w,C.a9,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.d9(C.bY,r,r,o?r:new A.b6c(d),r,r)
o=o?r:s.gaFz()
t=B.dJ(C.m,C.h,r,r,r,r,r)
return B.i8(B.b([w,B.dw(s.f?F.Zv:C.di,o,t)],v),C.o,p,q)}}
A.bm.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a11(this.gbs(),e.gbs())
else w=!0
return w},
gA(d){return(B.f7(B.N(this))^B.bQK(this.gbs()))>>>0},
j(d){B.bJQ()
return B.N(this).j(0)}}
A.LQ.prototype={
U(){return new A.UH(B.A(x.S,x.J),new A.azW(B.A(x.x,x.T)),null,null)}}
A.UH.prototype={
p(d){var w,v=this,u=v.a2q(),t=v.CW
t.toString
t=v.a2r(t.au(0,v.gfl().gt(0)))
w=v.a2r(u)
v.a.toString
return new A.LM(new A.a2w(t,w,null),u,null)},
a2r(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.azT(s.c,s.d,!1,r,s.a))}return d.aRh(w)},
a2q(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vi(t.ch)
if(r)s=w.a
r=t.y
t=t.aSb(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aRi(A.bBv(!1,!0,!0,v.d,v.c,u.gatm(),v.f,v.e))}return t},
atn(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagA()||e==null||e.a==null){w=v.cy
v.H(w.gaQG(w))
return}v.H(new A.b6o(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2q(),new A.b6p(w)))}}
A.o7.prototype={
VW(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.azM(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aSb(d,e){return this.VW(null,null,d,e)},
aRi(d){return this.VW(null,d,null,null)},
aRh(d){return this.VW(d,null,null,null)},
XR(d,e,f){var w,v,u,t=A.kI(d.ch,e.ch,f,A.c9g(),x.dB),s=B.aj(d.CW,e.CW,f),r=A.bJY(d.d,e.d,f),q=A.bLV(d.e,e.e,f),p=A.bJW(d.c,e.c,f),o=e.a
o=A.a6O(B.a2Q(d.a.b,o.b,f),o.a)
w=B.aj(d.y,e.y,f)
v=B.aj(d.x,e.x,f)
u=B.aj(d.z,e.z,f)
r=A.azM(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bJS(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.azL.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fS.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.azU(),B.ah(v).i("af<1,G>")).jM(0,new A.azV())
v=v.length
return w+(v-1)*this.d},
gbs(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iv.prototype={
gbs(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a2t.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2y.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.afo.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2z.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DB.prototype={
gbs(){return[this.a,this.b,C.bs,C.x,null]}}
A.LR.prototype={}
A.a2A.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.y6.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.aiN.prototype={}
A.aiU.prototype={}
A.aiV.prototype={}
A.aiX.prototype={}
A.aiY.prototype={}
A.aiZ.prototype={}
A.aj_.prototype={}
A.aj0.prototype={}
A.aj1.prototype={}
A.azW.prototype={
Vi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uY(0,0,!1)
v=new A.zR(d,x.x)
u=this.a
if(u.aF(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uY(t,u,!0)}w=null
try{w=C.b.oZ(d,new A.azX())}catch(s){return new A.uY(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uY(q,r,!1)
u.m(0,v,j)
return j}}
A.uY.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aiW.prototype={}
A.azY.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0y(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ad4(t,A.bBu(w,t.a),u)
l.y=u
l.aTx(e,u,f)
l.amL(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTG(d,e,m,t,r,s,n,o,f)}}},
ad4(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e2("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j0(p,B.ah(p).i("j0<1>")).aD(0,new A.azZ(t,q,r,s))
w.push(new A.a7v(q))}return w},
aTx(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.b0(m,m)
l=new B.d4(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b2.dI(Math.max(t,a2),b4,b7)
a4=B.R6(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.R6(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.L:f).gt(0)
k.seY(null)
a6=b2.f.e0()
v.drawRRect(B.lJ(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.K(h,a9,g,b0):new B.K(h,b0,g,a9)
J.bg(v.save())
v.clipRect(B.dR(b1),$.mM()[1],!0)
a6=b2.f.e0()
v.drawRRect(B.lJ(a4),a6)
a6.delete()
v.restore()
b2.aTE(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gep(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gt(f)
k.c=n
n=$.ao()
k=B.b([],s)
k.push(new B.hq(a4))
n=A.aD6(new B.cp(n.r,C.aj,null,null,k),o.r)
a6=b2.r.e0()
k=n.e
v.drawPath((k==null?n.e=new B.mX(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTG(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bl(a5,a5,a5,a5,B.cL(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lL().a_B(a8,a7.b),a7.a),C.bs,C.x,a5,b6.c,C.by)
w.agU(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dI(s,a6,b6)
q=b4.a
p=a4.dI(q,a6,b6)
o=b1.b
n=u+o.gey()
m=v+4+(o.gd5(0)+o.gd8(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aLX)j=v===D.a_b&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_C(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.K(h,i,v,t)
s=b1.a
f=new B.b0(s,s)
e=B.GF(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lL().KU(new B.I(v,t),d).b
s=$.lL()
q=w.b
p=q.c
q=q.a.c
a0=s.KU(new B.I(p,q.gbU(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaj7()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.Wy(d,new A.aA_(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aTE(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gep(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.b0(i.z,i.Q):C.a6
s=w?new B.b0(i.x,i.y):C.a6
r=w?C.a6:new B.b0(i.e,i.f)
w=w?C.a6:new B.b0(i.r,i.w)
q=B.R6(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a6:new B.b0(i.z,i.Q)
p=v?C.a6:new B.b0(i.x,i.y)
o=v?new B.b0(i.e,i.f):C.a6
q=B.R6(w,s,u,r,t,p,o,v?new B.b0(i.r,i.w):C.a6)}else q=B.bDu(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a6)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xc(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ad4(b2,A.bBu(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dI(k,b2,b3)
m=b0[q].c[o]
g=a7.dI(m.a+m.x.b,b2,b3)}else{h=a7.dI(j+m.x.b,b2,b3)
g=a7.dI(b0[q].c[o].b,b2,b3)}a7.dI(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dI(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dI(a4.a,b2,b3)
a6=a7.dI(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a2A(d,q,a0,o,a2,a1,new A.eF(d.a,v),new B.r(n,t))}}return null}}
A.a7v.prototype={}
A.a2w.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.azY()
t.a1K()
$.ao()
w=B.b2()
w.b=C.bl
t.f=w
w=B.b2()
w.b=C.b2
t.r=w
w=B.b2()
w.b=C.bl
w.r=C.o.gt(0)
t.w=w
w=B.b2()
w.b=C.b2
w.r=C.L.gt(0)
w.c=1
t.x=w
t=new A.acy(this.d,v,u,t,d,C.bc,new B.bu(),B.aM(x.j))
t.bl()
t.Zt(v.cy)
t.ag3()
return t},
bx(d,e){e.sip(0,this.d)
e.sZd(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acy.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZd(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1i(d.cy)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bg(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fZ.ih(w,new A.a33(t,v),new A.wa(u.aE,u.i9,u.d3,x.Q))
s.restore()},
a_u(d){var w=this,v=w.gC(0)
return new A.LR(w.fZ.Xc(d,v,new A.wa(w.aE,w.i9,w.d3,x.Q)))}}
A.a2m.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DA.prototype={
L(){return"AxisSide."+this.b}}
A.tS.prototype={}
A.qq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adZ.prototype={
gbs(){return[!1,0,0,0]}}
A.pu.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vn.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eF.prototype={
j(d){return"("+B.h(this.a)+", "+B.h(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eF))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.yZ.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pR.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afq.prototype={
gbs(){return[this.a,this.b]}}
A.Ra.prototype={
gbs(){return[this.a,this.b]}}
A.nb.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nB.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l1.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lt.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7G.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afO.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.NK.prototype={
gbs(){return[this.a,this.b,!0]}}
A.vm.prototype={}
A.NT.prototype={
aex(d,e,f){var w,v
$.ao()
w=B.b2()
v=this.a
w.r=v.gt(v)
w.b=C.bl
d.iU(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.aiI.prototype={}
A.aiM.prototype={}
A.am1.prototype={}
A.amq.prototype={}
A.amr.prototype={}
A.amt.prototype={}
A.amu.prototype={}
A.anj.prototype={}
A.ani.prototype={}
A.ank.prototype={}
A.ar0.prototype={}
A.asV.prototype={}
A.asW.prototype={}
A.auA.prototype={}
A.avj.prototype={}
A.avi.prototype={}
A.avk.prototype={}
A.azA.prototype={
N4(d,e,f,g,h,i){return new B.io(this.aXj(d,e,f,g,h,i),x.g4)},
aXi(d,e,f,g){return this.N4(d,e,f,!0,g,!0)},
aXj(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$N4(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lL().akh(s,u,v,w)
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
A.LL.prototype={
a1K(){var w,v=this
$.ao()
w=B.b2()
w.b=C.b2
v.a=w
w=B.b2()
w.b=C.bl
v.b=w
w=B.b2()
w.b=C.bl
v.e=w
w=B.b2()
w.b=C.b2
v.c=w
v.d=B.b2()},
ih(d,e,f){var w=this
w.a0z(d,e,f)
w.aTt(e,f)
w.aTD(e,f)
w.aTC(e,f)},
aTC(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lL().P6(w.a,a1.r-a1.f)
u=$.bAy().N4(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
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
if(j!=null){p.r=C.I.gt(0)
p.seY(j.mP(0,i))}else{if(k==null)k=C.L
p.r=k.gt(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c5(p.r)
p.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.E2(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lL().P6(w.b,a1.y-a1.x)
u=$.bAy().N4(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.li(n,m)
if(k!=null){q.r=C.I.gt(0)
q.seY(k.mP(0,i))}else{if(p==null)p=C.L
q.r=p.gt(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c5(q.r)
q.r=B.aF(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.E2(n,m,d.a,f.d)}},
aTt(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.he(new B.K(0,0,0+w.a,0+w.b),this.b)},
aTD(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.li(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.I.gt(0)
r.seY(p.mP(0,s))}else{r.r=(q==null?C.L:q).gt(0)
r.seY(null)}o=n.e.e0()
w.drawRect(B.dR(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.li(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.I.gt(0)
v.seY(q.mP(0,s))}else{v.r=(r==null?C.L:r).gt(0)
v.seY(null)}o=n.e.e0()
j.drawRect(B.dR(s),o)
o.delete()}},
aTB(d,e,f){var w,v
this.a0z(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aey(d,e,f,w)
if(v.b.length!==0)this.aTI(d,e,f,w)},
aey(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.li(m,l)
if(j!=null){n.r=C.I.gt(0)
n.seY(j.mP(0,i))}else{if(k==null)k=C.L
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
e.E2(m,l,f.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=C.d.ao(o,n.gbU(n).eI(0,2))
J.bg(r.save())
r.translate(h,g)
n=n.gO1().b
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
s.aez(0,n,new B.r(h,o),k)}}},
aTI(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
if(j!=null){n.r=C.I.gt(0)
n.seY(j.mP(0,i))}else{if(k==null)k=C.L
n.r=k.gt(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
a1.E2(m,l,d.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.bg(r.save())
r.translate(f,e)
n=n.gO1().b
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
s.aez(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_C(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.LM.prototype={
gam5(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gam6(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gam7(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gam3(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amr(d){var w,v=this,u=null,t=v.d,s=A.bCg(t.d),r=t.a
r=r.a&&A.bWd(r.b)?r.b:u
w=B.b([B.aG(u,v.c,C.q,u,u,new B.aC(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.azC(w)
if(v.gam5())C.b.hB(w,s.$1(!0),new A.B4(D.BI,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam7())C.b.hB(w,s.$1(!0),new A.B4(D.mW,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam6())C.b.hB(w,s.$1(!0),new A.B4(D.BJ,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam3())C.b.hB(w,s.$1(!0),new A.B4(D.dT,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jz(new A.azB(this))}}
A.SC.prototype={
U(){return new A.Zx(new B.bo(null,x.eF))}}
A.Zx.prototype={
az2(){switch(this.a.c.a){case 0:return C.em
case 1:return C.fh
case 2:return C.d4
case 3:return C.dE}},
azy(){switch(this.a.c.a){case 0:return new B.ag(0,0,8,0)
case 1:return new B.ag(0,0,0,8)
case 2:return new B.ag(8,0,0,0)
case 3:return new B.ag(0,8,0,0)}},
az4(d){this.a.toString
return},
aq(){this.aG()
$.cH.x1$.push(this.ga52())},
bc(d){this.bF(d)
$.cH.x1$.push(this.ga52())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azy()
return B.Bu(B.b3x(0,B.aG(v.az2(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ae_.prototype={
bn(d){return A.bW5(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2n.prototype={
ho(d){if(!(d.b instanceof B.hA))d.b=new B.hA(null,null,C.v)},
i_(d){if(this.B===C.ai)return this.yo(d)
return this.aeb(d)},
aMe(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9U(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dG(d){var w=this.a9T(d,B.hP())
switch(this.B.a){case 0:return d.c4(new B.I(w.a,w.b))
case 1:return d.c4(new B.I(w.b,w.a))}},
a9T(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ai?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hs(u,null)
break
case 1:q=B.hs(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9U(p)
t=Math.max(t,o.aMe(p))
m=r.aJ$}return new A.biT(n<1/0?n:s,t)},
cE(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga7.call(p)),n=p.a9T(o,B.mL()),m=n.a,l=n.b
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
q=s.b-p.a9U(r==null?B.S(B.a_("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.ca(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aJ$;++u}},
ej(d,e){return this.yp(d,e)},
aO(d,e){if(this.gC(0).gY(0))return
this.a4.sbh(0,null)
this.vi(d,e)},
l(){this.a4.sbh(0,null)
this.apm()}}
A.biT.prototype={}
A.azD.prototype={}
A.k1.prototype={
gbs(){return[this.a,this.b]}}
A.o6.prototype={}
A.aiJ.prototype={}
A.aiK.prototype={
aP(d){var w,v,u
this.fu(d)
w=this.aj$
for(v=x.L;w!=null;){w.aP(d)
u=w.b
u.toString
w=v.a(u).aJ$}},
aH(d){var w,v,u
this.fk(0)
w=this.aj$
for(v=x.L;w!=null;){w.aH(0)
u=w.b
u.toString
w=v.a(u).aJ$}}}
A.aiL.prototype={}
A.UE.prototype={
l(){var w,v,u
for(w=this.WL$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.B4.prototype={
goE(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d4
case 1:return C.dE
case 2:return C.em
case 3:return C.fh}},
gb0W(){var w=this.d,v=A.bCg(w.d),u=A.bJV(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).ah(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).ah(0,new B.ag(u.a,0,u.c,0))}},
gaiW(){var w=this.d,v=A.bJV(w.a),u=A.bCg(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aY_(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goE().c.d
if(o==null)o=$.lL().P6(d,f-e)
w=p.c
v=w!==D.mW
if((!v||w===D.dT)&&p.d instanceof A.o7){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bBu(u,d)
w=new B.j0(t,B.ah(t).i("j0<1>"))
s=w.gi2(w).eQ(0,new A.b0v(u),x.W).fP(0)}else{r=$.bAy()
w=!v||w===D.dT
v=p.d
q=r.aXi(w?v.w:v.z,o,f,e)
v=B.oI(q,new A.b0w(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ah(s).i("af<1,o6>")
w=B.Q(new B.af(s,new A.b0x(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goE()
w=j.goE()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aG(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mW
u=!v
t=!u||w===D.dT
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dT?C.G:C.ai
q=B.b([],x.p)
if(w===D.BI||v)j.goE()
if(j.goE().c.a){v=!u||w===D.dT?r:j.goE().c.c
p=!u||w===D.dT?j.goE().c.c:r
o=j.gb0W()
n=!u||w===D.dT?C.ai:C.G
j.gaiW()
m=j.gaiW()
l=!u||w===D.dT
k=j.d
l=l?k.f:k.x
u=!u||w===D.dT?k.r:k.y
q.push(B.aG(i,A.c2u(new A.azD(),n,j.aY_(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BJ||w===D.dT)j.goE()
return new B.ee(t,i,i,B.bYW(q,C.j,s,i,C.f,C.H,0,i,i,C.aW),i)}}
A.a2C.prototype={
gbs(){return[this.a,this.b]}}
A.a6N.prototype={
gbs(){return[this.a,this.b]}}
A.O_.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6P.prototype={
gacp(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.aA8.prototype={}
A.aGC.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aj4.prototype={}
A.amn.prototype={}
A.amo.prototype={}
A.amv.prototype={}
A.LU.prototype={
ih(d,e,f){}}
A.wa.prototype={}
A.hz.prototype={
gdN(){return null},
gagA(){var w,v=this
B.bG()
B.bG()
B.bG()
w=v instanceof A.NZ
if(w)return!0
return!(v instanceof A.NW)&&!(v instanceof A.NV)&&!(v instanceof A.NX)&&!(v instanceof A.NU)&&!w&&!(v instanceof A.NY)}}
A.a6T.prototype={
gdN(){return this.a.b}}
A.a6U.prototype={
gdN(){return this.a.b}}
A.a6V.prototype={
gdN(){return this.a.b}}
A.NV.prototype={}
A.NW.prototype={}
A.a6Y.prototype={
gdN(){return this.a.b}}
A.NY.prototype={}
A.NZ.prototype={
gdN(){return this.a.b}}
A.a6S.prototype={
gdN(){return this.a.b}}
A.a6R.prototype={
gdN(){return this.a.b}}
A.NU.prototype={
gdN(){return this.a.b}}
A.a6W.prototype={
gdN(){return this.a.gdN()}}
A.a6X.prototype={
gdN(){return this.a.gdN()}}
A.NX.prototype={
gdN(){return this.a.gdN()}}
A.GW.prototype={
Zt(d){this.V=d.b
this.W=d.c
this.a4=d.d},
ag3(){var w=this,v=null,u=w.al=B.bDa(v,v)
u.ay=new A.aWH(w)
u.ch=new A.aWI(w)
u.CW=new A.aWJ(w)
u.cy=new A.aWK(w)
u.cx=new A.aWL(w)
u=w.aI=B.HK(v,-1,v)
u.B=new A.aWM(w)
u.a_=new A.aWN(w)
u.V=new A.aWO(w)
u=w.bE=B.a8N(v,w.a4,v)
u.p3=new A.aWP(w)
u.p4=new A.aWQ(w)
u.RG=new A.aWR(w)},
cE(){var w=x.k.a(B.M.prototype.ga7.call(this))
this.fy=new B.I(w.b,w.d)},
dG(d){return new B.I(d.b,d.d)},
kM(d){return!0},
mZ(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bE
w===$&&B.a()
w.oC(d)
w=v.aI
w===$&&B.a()
w.oC(d)
w=v.al
w===$&&B.a()
w.oC(d)}else if(x.gJ.b(d))v.la(new A.a6X(d))},
gNy(d){return new A.aWS(this)},
gNA(d){return new A.aWT(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_u(w):null
u.V.$2(d,v)
u.a_=C.bc},
gLm(d){return this.a_},
gFY(){var w=this.ar
w===$&&B.a()
return w},
aP(d){this.fu(d)
this.ar=!0},
aH(d){this.ar=!1
this.fk(0)},
$ijC:1}
A.Pk.prototype={
U(){return new A.Xf(B.b([],x.r),B.A(x.S,x.J),new A.aMJ(B.A(x.y,x.dj)),null,null)}}
A.Xf.prototype={
p(d){var w,v=this,u=v.a54(),t=v.CW
t.toString
t=v.abW(t.au(0,v.gfl().gt(0)))
w=v.abW(u)
v.a.toString
return new A.LM(new A.a8E(t,w,null),u,null)},
abW(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ah(w).i("af<1,eh>")
w=B.Q(new B.af(w,new A.biZ(this,d),v),v.i("aw.E"))
return d.aS8(w,this.cy)},
a54(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vi(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSn(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRN(new A.Ft(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAl(),t.c,t.d))}return r},
aAm(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagA())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.H(new A.biX(v))
return}v.H(new A.biY(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a54(),new A.bj_(w)))}}
A.q4.prototype={
XR(d,e,f){var w,v,u,t,s,r,q=B.aj(d.f,e.f,f),p=B.aj(d.r,e.r,f),o=B.aj(d.w,e.w,f),n=B.aj(d.x,e.x,f),m=B.aj(d.y,e.y,f),l=B.aj(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a6O(B.a2Q(d.a.b,j.b,f),j.a)
w=A.bJS(d.at,e.at,f)
v=A.bJW(d.c,e.c,f)
u=A.bJY(d.d,e.d,f)
t=A.bLV(d.e,e.e,f)
s=A.kI(d.ch,e.ch,f,A.cbn(),x.cz)
s.toString
r=A.kI(d.CW,e.CW,f,A.cbm(),x.bO)
r.toString
u=A.bCN(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VX(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bCN(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSn(d,e,f,g){return this.VX(null,null,d,e,f,g,null)},
aRN(d){var w=null
return this.VX(w,d,w,w,w,w,w)},
aS8(d,e){var w=null
return this.VX(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eh.prototype={
as1(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oZ(n.a,new A.aMI())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fS))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aV()
n.b=q
r.toString
n.c!==$&&B.aV()
n.c=r
s.toString
n.d!==$&&B.aV()
n.d=s
t.toString
n.e!==$&&B.aV()
n.e=t}},
adQ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aMH(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRU(d){return this.adQ(d,null)},
aRW(d){return this.adQ(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Pl.prototype={
gbs(){return[this.a]}}
A.a2v.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mT.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.LP.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yY.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aMx.prototype={
L(){return"LabelDirection."+this.b}}
A.a6Q.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ft.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8F.prototype={
gbs(){return[4,C.ft,16,D.y3,0,120,A.cbp(),!1,!1,!1,0,C.J,A.cbo()]}}
A.ne.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qy.prototype={}
A.rQ.prototype={
gbs(){return[this.a,this.b,C.bs,C.x,null]}}
A.tU.prototype={
gbs(){return[this.a,this.b]}}
A.Hn.prototype={
gbs(){return[this.a]}}
A.Pm.prototype={}
A.zM.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.aiS.prototype={}
A.aiT.prototype={}
A.aj6.prototype={}
A.amp.prototype={}
A.ams.prototype={}
A.aoe.prototype={}
A.aof.prototype={}
A.aog.prototype={}
A.aoi.prototype={}
A.aoj.prototype={}
A.aok.prototype={}
A.aol.prototype={}
A.asU.prototype={}
A.auz.prototype={}
A.aMJ.prototype={
Vi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yG
u=new A.zR(d,x.y)
t=this.a
if(t.aF(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zN(s,r,q,t,!0)}w=null
try{w=C.b.oZ(d,new A.aMK())}catch(p){return D.yG}v=null
try{v=C.b.oZ(w.a,new A.aML())}catch(p){return D.yG}o=v.a
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
if(f<m)m=f}e=new A.zN(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zN.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.aoh.prototype={}
A.aMM.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacp(0)){v=a3.b
u=v.a
v=v.b
$.ao()
a3.a.iP(new B.K(0,-40,0+(u+40),-40+(v+40)),B.b2())
a3.aQN(new B.K(0,0,u,v))}d.a0y(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aTz(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTv(a3,q,a4)
d.aTA(a3,q,a4)
d.amK(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.U(o)
if(n.gq(o)!==p.length)throw B.e(B.e2("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vT(q,i,j,k))}}d.aTH(a3,s,a4)
if(w.gacp(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTF(a2,a3,v,f,new A.Hn(g),a4)}},
aTv(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bCf(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.a_3(o,e,u,f)
s=p.ak9(o,e,t,u,f)
r=p.a_5(o,e,t,u,f,!0)
q=p.ak8(o,e,t,u,f)
p.aTy(d,s,p.a_2(o,e,t,u,f,!0),f,e)
p.aTs(d,q,r,f,e)
p.aTw(d,t,e)
p.aTu(d,t,e,f)}},
aTz(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bCf(a5.a),a8=A.bCf(a6.a)
if(a7.length!==a8.length)throw B.e(B.bN("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bX.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ah(n).i("cG<1>")
l=B.Q(new B.cG(n,m),m.i("aw.E"))
k=a2.a_3(a3,a5,o,b2)
j=a2.a_4(a3,a6.aRW(l),l,b2,k)
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
m=a2.dI(h,a3,b2)
e=a2.ff(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.I.gt(0)
a0.seY(v.mP(0,new B.K(n,m,e,d)))}else{a0.r=(r?C.L:w).gt(0)
a0.seY(null)}$.ao()
a1=new B.mW(C.dG,C.bl,C.eg,C.eD,C.e4).e0()
n=B.dR(new B.K(0,0,t,s))
m=$.bX.b
if(m===$.bX)B.S(B.vR(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e0()
n=j.e
a4.drawPath((n==null?j.e=new B.mX(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTA(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_9(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fS)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aex(s,q,new B.r(p,o))}}},
aTH(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fV(b3,new A.aMP())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.a_9(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cs()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rP(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lH(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lH(q.$2(m,k))))
f=b1.dI(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dI(a2,w,b4)
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
if(a6!=null){f.r=C.I.gt(0)
f.seY(a6.mP(0,b0))}else{if(a4==null)a4=C.L
f.r=a4.gt(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c5(f.r)
f.r=B.aF(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.E2(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rP(d.a))
f.aex(t,j,new B.r(h,g))}}},
a_4(d,e,f,g,h){var w=this.aka(d,e,f,g,h)
return w},
a_3(d,e,f,g){return this.a_4(d,e,f,g,null)},
aka(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cp($.ao().r,C.aj,null,null,B.b([],x.v)):a5,f=J.U(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.fi(d,a0))
if(e===1)g.aA(new B.cu(d,a0))}else g.aA(new B.cu(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.ff(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.ff(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.ff(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.MQ(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iF(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_5(d,e,f,g,h,i){var w=this,v=B.NE(f),u=J.U(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aA(new B.cu(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aA(new B.cu(t,s))
v.aA(new B.cu(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aA(new B.pC())
return v},
ak9(d,e,f,g,h){return this.a_5(d,e,f,g,h,!1)},
a_2(d,e,f,g,h,i){var w=this,v=B.NE(f),u=J.U(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aA(new B.cu(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aA(new B.cu(t,0))
v.aA(new B.cu(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aA(new B.pC())
return v},
ak8(d,e,f,g,h){return this.a_2(d,e,f,g,h,!1)},
aTy(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.ff(t.a,w,g)
s=r.r
s===$&&B.a()
A.bD9(s,q.b,q.c,new B.K(v,u,t,w.b))
d.a.i1(e,r.r)},
aTs(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.bD9(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i1(e,r.r)},
aTw(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.NG(B.NE(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iD:C.eg
u.e=C.eD
u.r=v.gt(0)
u.seY(null)
u.c=f.x
u.r=v.gt(0)
$.lL()
u.z=new B.zV(C.az,w.c*0.57735+0.5)
d.a.i1(A.aD6(e,f.cy).ed(w.b),this.f)},
aTu(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iD:C.eg
q.e=C.eD
q=f.b
q===$&&B.a()
q=s.ff(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.ff(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.bD9(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c0n(t)
d.a.i1(A.aD6(e,f.cy),s.f)},
aTF(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bQd(b1),b3=J.U(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e2("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lL().a_B(b4,u.b)
s=u.a
r=w.k(0,C.j4)?new B.kB(1):w
q=new B.tP(new B.fu(s,a8,a8,C.bc,a8,a8,a8,a8,a8,a8,t),C.bs,C.x,r,a8,a8,a8,a8,C.by,a8)
q.agU(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.ft.gey()
k=o+(w-1)*4+(C.ft.gd5(0)+C.ft.gd8(0))
j=t-k-16
i=a7.a_C(b3,l,D.y3,0)
b3=i+l
w=j+k
h=new B.b0(4,4)
g=B.GF(new B.K(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bQc(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lL().KU(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lL().KU(new B.I(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.I.gt(0)
s.c=0}b5.Wy(0,new A.aMN(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c35(q.r,q.w)
A:{if(D.EK===a5){a6=a3
break A}if(D.EL===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wy(0,new A.aMO(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_9(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xc(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akB(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fV(t,new A.aMQ())
return t.length===0?null:t},
akB(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fS))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qy(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vT.prototype={}
A.a8E.prototype={
bn(d){var w,v=this.e,u=B.bB(d,null,x.w).w.gcO(),t=new A.aMM()
t.a1K()
$.ao()
w=B.b2()
w.b=C.b2
t.f=w
w=B.b2()
w.b=C.bl
t.r=w
w=B.b2()
w.b=C.b2
t.w=w
w=B.b2()
w.b=C.bl
w.r=C.L.gt(0)
w.a=D.a0x
t.x=w
w=B.b2()
w.b=C.b2
w.r=C.I.gt(0)
t.y=w
w=B.b2()
w.b=C.bl
w.r=C.o.gt(0)
t.z=w
w=B.b2()
w.b=C.b2
w.r=C.L.gt(0)
w.c=1
t.Q=w
t=new A.acL(this.d,v,u,t,d,C.bc,new B.bu(),B.aM(x.j))
t.bl()
t.Zt(v.cx)
t.ag3()
return t},
bx(d,e){e.sip(0,this.d)
e.sZd(this.e)
e.scO(B.bB(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acL.prototype={
sip(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZd(d){var w=this
if(w.i9.k(0,d))return
w.i9=d
w.a1i(d.cx)
w.bd()},
scO(d){if(this.d3.k(0,d))return
this.d3=d
this.bd()},
aO(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.bg(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fZ.ih(w,new A.a33(t,v),new A.wa(u.aE,u.i9,u.d3,x.C))
s.restore()},
a_u(d){var w=this,v=w.gC(0)
return new A.Pm(w.fZ.Xc(d,v,new A.wa(w.aE,w.i9,w.d3,x.C)))}}
A.Op.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a33.prototype={
aQN(d){this.a.a.clipRect(B.dR(d),$.mM()[1],!0)
return null},
aeF(d,e){d.aO(this.a,e)},
Wy(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bg(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lL()
s.Zb(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
E2(d,e,f,g){var w=new B.cp($.ao().r,C.aj,null,null,B.b([],x.v))
w.aA(new B.fi(d.a,d.b))
w.aA(new B.cu(e.a,e.b))
this.a.i1(A.aD6(w,g),f)}}
A.zR.prototype={
gbs(){return[this.a]}}
A.aos.prototype={}
A.a3d.prototype={}
A.b3Z.prototype={
KU(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYz(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.b0(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.b0(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.b0(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.b0(v,v):s)},
aYA(d,e){var w,v
if(d==null)return D.a0J
w=d.b
v=e/2
return d.aRZ(w>v?v:w)},
P6(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0H(w)},
b0H(d){if(d<1)return this.aKI(d)
return this.a8W(d)},
aKI(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8W(d*q)/q},
a8W(d){var w,v=C.e.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aM(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akq(d){if(d>=1)return 1
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
a_B(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.jb
w=e.a?u.w.c6(e):e
v=B.b7(d,C.vX)
v=v==null?null:v.ay
return v===!0?w.c6(C.mC):w},
akh(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qA)","C(pQ)","G(G,pQ)","C(eF)","~(v,fS)","G(eh,v)","pR(G)","vk(z)","G(G,qA)","bU(G,tS)","R<~>()","v(qy,qy)","xh(B,bJ)","rB(rB)","Jh(op)","qA(@)","vX(@)","rl(z)","wV(@)","IS(B,bJ)","Kc(os)","Jc(oq)","Di(@)","eh(G)","vl(dO<vl>)","a9(G,tS)","ES(dO<aHs>)","pQ(@)","G(vX)","G(wV)","xc(B,bJ)","BH(z)","~()","m_(wL<m_>)","~(hz,LR?)","y6(@)","G(iv)","C(fS)","~(v,iv)","~(@)","k1(o6)","c(o6)","k1(by<v,G>)","k1(G)","o6(k1)","~(hz,Pm?)","eh(eh)","R<os>(c4<os>)","zM(@)","R<op>(c4<op>)","tU(v)","vm(eF,G,eh,v)","rQ(ne)","v(v,v,G)","v(vT,vT)","G(fS)","R<oq>(c4<oq>)","yW(eu<B?>)","fS(fS,fS,G)","iv(iv,iv,G)","mS(mS,mS,G)","DB?(fS,v,iv,v)","F(fS)","c(G,tS)","eF(eF,eF,G)","C(G)","nb(nb,nb,G)","nB(nB,nB,G)","l1(l1,l1,G)","lt(lt,lt,G)","i(l1)","i(lt)","eh(eh,eh,G)","mT(mT,mT,G)","vm(eF,G,eh,v{size:G?})","C(eF,eh)","G(r,r)","u<tU>(eh,u<v>)","~(xe)","u<rQ>(u<ne>)","F(ne)","C(eh)"])
A.aHn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cF(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.ak(k==null?"":k)
w=l.h(0,"booking_date")
w=B.du(J.ak(w==null?"":w))
if(w==null)w=B.bE(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.ak(v==null?"":v)
u=l.h(0,"account_name")
u=J.ak(u==null?"":u)
t=l.h(0,"direction")
t=J.ak(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.ak(s)
r=A.bxk(l.h(0,"amount_net"))
q=A.bxk(l.h(0,"amount_tax"))
p=A.bxk(l.h(0,"amount_gross"))
o=A.bxk(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.ak(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.ak(m)
l=l.h(0,"source_account_code")
return new A.pQ(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.ak(l))},
$S:z+27}
A.byh.prototype={
$1(d){if(!this.a)return d
return d===D.fv?D.li:D.fv},
$S:z+13}
A.aHo.prototype={
$1(d){var w=B.cF(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qA(J.ak(v==null?"":v),A.pm(w.h(0,"revenue_net")),A.pm(w.h(0,"expense_net")),A.pm(w.h(0,"result_net")))},
$S:z+15}
A.aHp.prototype={
$1(d){var w,v,u,t=B.cF(x.f.a(d),x.N,x.z),s=B.ai(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ai(t.h(0,"code"))
v=A.pm(t.h(0,"gross"))
u=B.b3(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.vX(s,r,w,v,u,A.pm(t.h(0,"avg_basket")))},
$S:z+16}
A.aHq.prototype={
$1(d){var w,v=B.cF(x.f.a(d),x.N,x.z),u=B.ai(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.b3(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wV(u,t,w,A.pm(v.h(0,"gross")))},
$S:z+18}
A.aHJ.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.U(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.Di(v,u,J.ak(t==null?"expense":t),A.uC(w.h(d,"net")),A.uC(w.h(d,"tax")),A.uC(w.h(d,"gross")))},
$S:z+22}
A.bya.prototype={
$1(d){return new A.vl(d.ak($.bH(),x.A))},
$S:z+24}
A.byb.prototype={
$1(d){return new A.ES(d.ak($.bUU(),x.D))},
$S:z+26}
A.bA7.prototype={
$1(d){return E.aHr()},
$S:z+33}
A.byc.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1v(),x.a).Gq(w)},
$S:z+47}
A.by8.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1v(),x.a).Gb(w)},
$S:z+49}
A.by9.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1v(),x.a).Gl(w)},
$S:z+56}
A.by7.prototype={
$1(d){return this.ak_(d)},
ak_(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bH(),x.A).fd("finance_balance_kpis",t),$async$$1)
case 3:s=r.cF(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aHm.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1v(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHl.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1v(),x.a).LY(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfj.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbD()
r=$.bB2()
if(s.e==null)B.S(B.a_(y.b))
s.gcf().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfe.prototype={
$1(d){var w=this.a
return w.H(new A.bfd(w,d))},
$S:z+78}
A.bfd.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bff.prototype={
$0(){var w=this.a
return w.H(new A.bfc(w))},
$S:0}
A.bfc.prototype={
$0(){return this.a.x=null},
$S:0}
A.bfi.prototype={
$0(){return F.uT},
$S:88}
A.bfh.prototype={
$2(d,e){return new A.xh("Buchungen konnten nicht geladen werden: "+B.h(d),C.Y,F.od,null)},
$S:z+12}
A.bfg.prototype={
$1(d){return new A.Jh(d,this.a.at5(d.b),null)},
$S:z+14}
A.bfb.prototype={
$1(d){var w=this.a
if(w.gSH()!=null&&d.c!==w.gSH())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bf7.prototype={
$0(){return this.a.e.$1(D.Bj)},
$S:0}
A.bf8.prototype={
$0(){return this.a.e.$1(D.a_B)},
$S:0}
A.bf9.prototype={
$0(){return this.a.e.$1(D.a_C)},
$S:0}
A.bfa.prototype={
$0(){return this.a.e.$1(D.a_D)},
$S:0}
A.bj9.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bja.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bjb.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bjc.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bjd.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bje.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bjf.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aHH.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bB3()
if(s.e==null)B.S(B.a_(y.b))
s.gcf().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHy.prototype={
$0(){return this.a.JQ(this.b,this.c)},
$S:0}
A.aHz.prototype={
$0(){return this.a.BK(this.b,this.c)},
$S:0}
A.aHA.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.aHx(),null,w),w)},
$S:0}
A.aHx.prototype={
$1(d){return F.DD},
$S:z+17}
A.aHB.prototype={
$0(){return B.pW(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aHC.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.aHw(),null,w),w)},
$S:0}
A.aHw.prototype={
$1(d){return D.aak},
$S:z+7}
A.aHD.prototype={
$0(){var w=this
return w.a.BL(w.b,w.c,w.d)},
$S:0}
A.aHG.prototype={
$0(){return F.uT},
$S:88}
A.aHF.prototype={
$2(d,e){return new A.IS(B.h(d),null)},
$S:z+19}
A.aHE.prototype={
$1(d){return new A.Kc(d,null)},
$S:z+20}
A.aHv.prototype={
$1(d){var w=null,v=this.a,u=$.cZ()
v=B.f("Die Finanzauswertung f\xfcr "+u.a5(v.a)+" \u2013 "+u.a5(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.i8(B.b([B.d9(C.bY,w,w,new A.aHt(u),w,w),B.dw(F.mD,new A.aHu(u),B.dJ(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.mE)},
$S:46}
A.aHt.prototype={
$0(){B.aU(this.a,!1).cu(!1)
return null},
$S:0}
A.aHu.prototype={
$0(){B.aU(this.a,!1).cu(!0)
return null},
$S:0}
A.bms.prototype={
$0(){var w=this.a.aC(0,$.r_().ghQ(),x.V),v=E.aHr()
w.uo(0,v)
return v},
$S:0}
A.bmt.prototype={
$0(){var w=this.a.aC(0,$.r_().ghQ(),x.V),v=new B.aW(Date.now(),0,!1),u=new E.m_(B.bE(B.b1(v),1,1,0,0,0,0),v)
w.uo(0,u)
return u},
$S:0}
A.bmu.prototype={
$0(){return this.a.Ja(this.b,this.c)},
$S:0}
A.bmr.prototype={
$2(d,e){return new B.p3(B.W(d).aRl(B.W(d).ax.aSd(C.h,C.m)),e,null)},
$S:1034}
A.btd.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cU(),p=A.P7(!1,C.lp,"Umsatz 7 %",q.a5(r.a),u),o=A.P7(!1,C.lp,"Umsatz 19 %",q.a5(r.b),u),n=A.P7(!0,D.ac3,"Umsatz netto",q.a5(r.c),u),m=r.d
m=A.P7(!1,D.ac2,"Aufwand",A.bFa(m,A.byg(t,"",m)),A.bPX(t,A.byg(t,"",m)))
w=r.e
v=q.a5(w)
return E.aJV(1.7,B.b([p,o,n,m,A.P7(!0,C.oe,"Ergebnis",v,w<0?C.Y:C.al),A.P7(!1,C.fV,"USt-Saldo",q.a5(r.f-r.r),u)],x.p),s,12,12,C.ir,!0)},
$S:142}
A.bte.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.btc(this.b),null,w),w)},
$S:0}
A.btc.prototype={
$1(d){return new A.vk(this.a.a,null)},
$S:z+7}
A.aMw.prototype={
$0(){return D.awP},
$S:88}
A.aMv.prototype={
$2(d,e){var w=null
return B.be(C.Y,B.f("KPIs konnten nicht geladen werden: "+B.h(d),w,w,w,w,B.w(C.h,13,C.k),w,w,w),C.fm,w,C.A,w,w,3)},
$S:168}
A.aMu.prototype={
$1(d){return new A.Jc(d,null)},
$S:z+21}
A.biK.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cU(),i=j.a5(k.c),h=l.w,g=l.d,f=B.ah(g).i("af<1,G>"),e=f.i("aw.E"),d=B.Q(new B.af(g,new A.biz(),f),e)
i=A.jV(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a5(r.b)
w=B.Q(new B.af(g,new A.biA(),f),e)
d=A.jV(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a5(k.e)
w=B.Q(new B.af(g,new A.biB(),f),e)
k=A.jV(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ab(h.b,1)
v=B.Q(new B.af(g,new A.biC(),f),e)
w=A.jV(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ab(h.a,1)
u=B.Q(new B.af(g,new A.biD(),f),e)
v=A.jV(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ab(r.c,1)
t=B.Q(new B.af(g,new A.biE(),f),e)
u=A.jV(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ab(h.c,1)
s=B.Q(new B.af(g,new A.biF(),f),e)
t=A.jV(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a5(h.d)
s=B.Q(new B.af(g,new A.biG(),f),e)
h=A.jV(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a5(l.r.d)
m=B.Q(new B.af(g,new A.biH(m),f),e)
m=A.jV(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a5(l)
l=B.Q(new B.af(g,new A.biI(l),f),e)
l=A.jV(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ab(j,1)
j=B.Q(new B.af(g,new A.biJ(j),f),e)
return E.aJV(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jV(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ir,!0)},
$S:142}
A.biz.prototype={
$1(d){return d.b},
$S:z+0}
A.biA.prototype={
$1(d){return d.b/30},
$S:z+0}
A.biB.prototype={
$1(d){return d.d},
$S:z+0}
A.biC.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.biD.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.biE.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.biF.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.biG.prototype={
$1(d){return d.d},
$S:z+0}
A.biH.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.biI.prototype={
$1(d){return this.a},
$S:z+0}
A.biJ.prototype={
$1(d){return this.a},
$S:z+0}
A.biL.prototype={
$0(){return A.bF5(this.b,1.45,new A.V5(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.biM.prototype={
$0(){return A.bF5(this.b,1.6,new A.Vm(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bxf.prototype={
$1(d){var w=this,v=null,u=B.ar(16),t=x.p,s=B.b([B.ad(B.b([B.ap(B.f(w.a,v,v,v,v,B.bA(C.h,18,C.p),v,v,v),1),B.fg(v,v,D.aey,v,v,new A.bxe(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.J(s,B.b([B.f(w.b,v,v,v,v,B.w(C.n,12,C.aG),v,v,v),C.F],t))
s.push(C.t)
s.push(B.bS(new B.mR(w.c,w.d,v),v,17976931348623157e292))
return B.a65(v,C.o,new B.ab(C.am,B.a3(s,C.z,C.f,C.H),v),v,v,v,C.fu,C.vi,v,new B.d1(u,C.J),v)},
$S:1035}
A.bxe.prototype={
$0(){return B.aU(this.a,!1).eV()},
$S:0}
A.biN.prototype={
$0(){var w=this.a,v=B.an(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bF5(this.b,2.4,new A.ZJ(w.w,w.y,w.z,null),C.b.cb(u," \xb7 "),v)
return null},
$S:0}
A.bsf.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.bsg.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bsh.prototype={
$1(d){return A.aMH(null,1.4,null,C.Y,0.35,D.ajm,D.EB,null,!1,!1,!1,!1,D.G8,!1,10,D.YV,!0,C.lG,B.b([new A.eF(0,d),new A.eF(this.a,d)],x.U))},
$S:z+23}
A.b8p.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+8}
A.b8r.prototype={
$2(d,e){var w=null
return B.f(this.a.aM2(d),w,w,w,w,B.w(C.n,10,C.E),w,w,w)},
$S:z+25}
A.b8s.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vr
return new B.ab(C.l7,B.f(C.c.cP(this.a[v].a,5),w,w,w,w,B.w(C.n,9,C.E),w,w,w),w)},
$S:z+9}
A.b8q.prototype={
$1(d){return D.aao},
$S:z+6}
A.b9s.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b9t.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b9u.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b9v.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vr
return new B.ab(C.l7,B.f(this.a[v],w,w,w,w,B.w(C.h,12,C.p),w,w,w),w)},
$S:z+9}
A.bjt.prototype={
$1(d){return d.d},
$S:z+28}
A.bju.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.buw.prototype={
$1(d){return d.d},
$S:z+29}
A.bux.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b6l.prototype={
$0(){return D.awX},
$S:88}
A.b6k.prototype={
$2(d,e){return new A.xc("Bilanzdaten nicht verf\xfcgbar: "+B.h(d),null)},
$S:z+30}
A.b6j.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.be(m,B.a3(B.b([B.f("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.w(C.h,14,C.E),m,m,m),C.F,B.f("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.w(C.n,12.5,C.k),m,m,m),C.t,B.jh(C.c7,B.b([B.f6(C.Fz,D.aLi,new A.b6d(w,v),m),B.f6(D.ae8,D.aK5,new A.b6e(w,v),m)],u),C.d1,8,8)],u),C.z,C.f,C.i),C.a7,m,C.A,m,m,3)}w=new A.b6m(d)
t=C.b.f1(n.a.e.d,0,new A.b6f())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jz(new A.b6g(new A.b6n(w),r,w,s))
v=J.U(d)
u=B.h(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a3(B.b([w,C.F,B.ad(B.b([B.ap(B.f("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.w(C.n,11,C.k),m,m,m),1),B.p1(D.afs,D.aKt,new A.b6h(q,p),m),B.p1(D.af_,D.aKc,new A.b6i(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:225}
A.b6d.prototype={
$0(){return A.axc(this.a,this.b,null)},
$S:0}
A.b6e.prototype={
$0(){return A.ax9(this.a,this.b)},
$S:0}
A.b6m.prototype={
$1(d){var w=B.b3(J.T(this.a,d))
return w==null?null:w},
$S:1036}
A.b6n.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ab(v,1)
w=B.an(w,".",",")+" %"}return w},
$S:33}
A.b6f.prototype={
$2(d,e){return d+e.d},
$S:z+8}
A.b6g.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jV(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ia,o.$1("liquidity1_pct")),m=A.jV(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ia,o.$1("liquidity2_pct")),l=A.jV(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ia,o.$1("liquidity3_pct"))
o=A.jV(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ia,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ab(w,1)
w=B.an(w,".",",")+" %"}w=A.jV(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ia,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cU()
v=u.a5(v)
return E.aJV(p,B.b([n,m,l,o,w,A.jV(s,s,!1,"Bilanzsumme",!1,"EK "+u.a5(t.d),s,s,s,C.ia,v)],x.p),q,12,12,C.ir,!0)},
$S:142}
A.b6h.prototype={
$0(){return A.ax9(this.a,this.b)},
$S:0}
A.b6i.prototype={
$0(){return A.axc(this.a,this.b,this.c)},
$S:0}
A.bxd.prototype={
$1(d){return new A.BH(this.a,new A.bxc(this.b),this.c,null)},
$S:z+31}
A.bxc.prototype={
$0(){var w=this.a,v=$.bB1()
if(w.e==null)B.S(B.a_(y.b))
w.gcf().c_(v)},
$S:0}
A.b67.prototype={
$0(){},
$S:0}
A.b68.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b69.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b6b.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.nX(u.b,B.bE(2024,1,1,0,0,0,0),null,r,new B.aW(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.H(new A.b6a(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b6a.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b6c.prototype={
$0(){return B.aU(this.a,!1).eV()},
$S:0}
A.b6o.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b6p.prototype={
$1(d){return new A.y6(x.B.a(d),this.a.a.r)},
$S:z+35}
A.azU.prototype={
$1(d){return d.e},
$S:z+36}
A.azV.prototype={
$2(d,e){return d+e},
$S:49}
A.azX.prototype={
$1(d){return d.c.length!==0},
$S:z+37}
A.azZ.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+38}
A.aA_.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.aeF(v.d,v.e)},
$S:0}
A.azC.prototype={
$1(d){return 0},
$S:1037}
A.azB.prototype={
$2(d,e){return B.eY(C.bZ,this.a.amr(e),C.r,C.bn,null)},
$S:1038}
A.b0t.prototype={
$1(d){return d.a},
$S:z+40}
A.b0u.prototype={
$1(d){return d.b},
$S:z+41}
A.b0v.prototype={
$1(d){return new A.k1(this.a.ch[d.a].a,d.b)},
$S:z+42}
A.b0w.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mW||v===D.dT))t=1-t
return new A.k1(d,t*w.d)},
$S:z+43}
A.b0x.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goE(),p=d.a
r.goE()
r=$.lL()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ab(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ab(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ab(v/1000,1)
t="K"}else{u=C.d.ab(v,r.akq(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o6(d,q.c.b.$2(p,new A.tS(u+t,s.e)))},
$S:z+44}
A.aWH.prototype={
$1(d){this.a.la(new A.a6T(d))},
$S:170}
A.aWI.prototype={
$1(d){this.a.la(new A.a6U(d))},
$S:43}
A.aWJ.prototype={
$1(d){this.a.la(new A.a6V(d))},
$S:30}
A.aWK.prototype={
$0(){this.a.la(D.a2y)},
$S:0}
A.aWL.prototype={
$1(d){this.a.la(new A.NW())},
$S:48}
A.aWM.prototype={
$1(d){this.a.la(new A.a6Y(d))},
$S:44}
A.aWN.prototype={
$0(){this.a.la(D.a2z)},
$S:0}
A.aWO.prototype={
$1(d){this.a.la(new A.NZ(d))},
$S:91}
A.aWP.prototype={
$1(d){this.a.la(new A.a6S(d))},
$S:173}
A.aWQ.prototype={
$1(d){this.a.la(new A.a6R(d))},
$S:174}
A.aWR.prototype={
$1(d){return this.a.la(new A.NU(d))},
$S:175}
A.aWS.prototype={
$1(d){return this.a.la(new A.a6W(d))},
$S:67}
A.aWT.prototype={
$1(d){return this.a.la(new A.NX(d))},
$S:60}
A.biZ.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aRU(w==null?B.b([],x.t):w)},
$S:z+46}
A.biX.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.biY.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fV(w,new A.biW())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.Hn(w))},
$S:0}
A.biW.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.bj_.prototype={
$1(d){return new A.zM(x.hf.a(d),this.a.a.r)},
$S:z+48}
A.aMI.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.bxZ.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bJX(t?A.bEQ(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tU(w,new A.yY(!0,A.bFH(),new A.bxY(v)))},
$S:z+50}
A.bxY.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bYU(A.bEQ(d,e,f),w,A.c6T(d,e,f))},
$S:z+51}
A.bxW.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.dy:u,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rQ(C.d.j(d.b),w)},
$S:z+52}
A.aMK.prototype={
$1(d){return d.a.length!==0},
$S:z+81}
A.aML.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.aMP.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+54}
A.aMN.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aMO.prototype={
$0(){this.a.aeF(this.b,this.c)},
$S:0}
A.aMQ.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.azN.prototype={
$1(d){return d.gdu(0)},
$S:z+55}
A.azO.prototype={
$2(d,e){return d+e},
$S:49}
A.azR.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j0(v,B.ah(v).i("j0<1>")).aD(0,new A.azS(w,this.a/(u+1),this.c))},
$S:0}
A.azS.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.azP.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.azQ.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aJU.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aD7.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.LL.prototype
w.a0y=w.ih
w.amK=w.aTB
w.amL=w.aey
w=A.UE.prototype
w.apm=w.l
w=A.LU.prototype
w.a0z=w.ih
w=A.GW.prototype
w.a1i=w.Zt})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cau","bYQ",57)
var q
v(q=A.UG.prototype,"gaFQ","aFR",32)
v(q,"gaEN","Ir",10)
v(q,"gaFz","IC",10)
u(A.UH.prototype,"gatm","atn",34)
t(A,"c9g",3,null,["$3"],["bW7"],58,0)
t(A,"c9h",3,null,["$3"],["bW8"],59,0)
t(A,"c9i",3,null,["$3"],["bW9"],60,0)
t(A,"c9k",4,null,["$4"],["ca7"],61,0)
w(A,"c9j","ca6",62)
s(A,"bF9","ca8",63)
t(A,"c9b",3,null,["$3"],["bYV"],64,0)
w(A,"a0Y","ccy",65)
w(A,"axf","cab",6)
t(A,"c9d",3,null,["$3"],["bZH"],66,0)
t(A,"c9f",3,null,["$3"],["c3Z"],67,0)
t(A,"c9c",3,null,["$3"],["bZG"],68,0)
t(A,"c9e",3,null,["$3"],["c3Y"],69,0)
w(A,"cjQ","bZF",70)
w(A,"cjR","c3X",71)
r(A.Zx.prototype,"ga52","az4",39)
u(A.Xf.prototype,"gaAl","aAm",45)
t(A,"cbn",3,null,["$3"],["c_8"],72,0)
t(A,"cbm",3,null,["$3"],["bWa"],73,0)
w(A,"cbq","ccz",3)
t(A,"bQC",4,null,["$5$size","$4"],["bP0",function(d,e,f,g){return A.bP0(d,e,f,g,null)}],74,0)
s(A,"bFH","ccx",75)
s(A,"bQD","c8Z",76)
s(A,"bQG","cae",77)
s(A,"bQF","caa",5)
s(A,"bQE","ca9",5)
w(A,"cbp","bQd",79)
w(A,"cbo","bQc",80)
t(A,"a13",3,null,["$3"],["cbl"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.E,[A.a8r,A.amj,A.x8,A.Jh,A.ajo,A.xh,A.ahX,A.ant,A.JN,A.Kc,A.ahV,A.IS,A.a2G,A.Jc,A.amL,A.ao5,A.VX,A.ZJ,A.V5,A.Vm,A.aoC,A.akI,A.CJ,A.auw,A.xc,A.LM,A.B4])
u(B.B,[A.vl,A.ES,A.bm,A.aj4,A.aiV,A.aiX,A.aiY,A.aiN,A.amv,A.aj0,A.aiZ,A.aA8,A.auA,A.azW,A.aiW,A.LU,A.a7v,A.tS,A.asW,A.asV,A.aiM,A.amu,A.eF,A.amr,A.amt,A.ar0,A.ank,A.avk,A.ams,A.am1,A.amq,A.azA,A.biT,A.azD,A.aiJ,A.o6,A.amn,A.amo,A.wa,A.hz,A.aof,A.aoi,A.aiS,A.aj6,A.aiT,A.amp,A.aol,A.aoj,A.auz,A.asU,A.aMJ,A.aoh,A.vT,A.a33,A.aos,A.a3d,A.b3Z])
u(B.vh,[A.pQ,A.op,A.qA,A.vX,A.wV,A.aCv,A.aDG,A.oq,A.Di,A.os])
u(B.oc,[A.aHn,A.byh,A.aHo,A.aHp,A.aHq,A.aHJ,A.bya,A.byb,A.bA7,A.byc,A.by8,A.by9,A.by7,A.bfe,A.bfg,A.bfb,A.bj9,A.bjb,A.bjd,A.bjf,A.aHx,A.aHw,A.aHE,A.aHv,A.btc,A.aMu,A.biz,A.biA,A.biB,A.biC,A.biD,A.biE,A.biF,A.biG,A.biH,A.biI,A.biJ,A.bxf,A.bsh,A.b8q,A.b9s,A.b9t,A.bjt,A.buw,A.b6j,A.b6m,A.b6n,A.bxd,A.b6p,A.azU,A.azX,A.azC,A.b0t,A.b0u,A.b0v,A.b0w,A.b0x,A.aWH,A.aWI,A.aWJ,A.aWL,A.aWM,A.aWO,A.aWP,A.aWQ,A.aWR,A.aWS,A.aWT,A.biZ,A.bj_,A.aMI,A.bxZ,A.bxY,A.bxW,A.aMK,A.aML,A.azN,A.aD7])
u(B.IR,[A.rB,A.xe,A.azL,A.afo,A.DA,A.aGC,A.aMx,A.Op])
t(A.yW,B.fN)
u(B.yn,[A.aHm,A.aHl,A.bfj,A.bfd,A.bff,A.bfc,A.bfi,A.bf7,A.bf8,A.bf9,A.bfa,A.aHH,A.aHy,A.aHz,A.aHA,A.aHB,A.aHC,A.aHD,A.aHG,A.aHt,A.aHu,A.bms,A.bmt,A.bmu,A.bte,A.aMw,A.biL,A.biM,A.bxe,A.biN,A.b6l,A.b6d,A.b6e,A.b6h,A.b6i,A.bxc,A.b67,A.b68,A.b69,A.b6b,A.b6a,A.b6c,A.b6o,A.aA_,A.aWK,A.aWN,A.biX,A.biY,A.aMN,A.aMO,A.azR])
t(A.vk,B.b8)
t(A.amk,B.v8)
u(B.yo,[A.bfh,A.bja,A.bjc,A.bje,A.aHF,A.bmr,A.btd,A.aMv,A.biK,A.bsf,A.bsg,A.b8p,A.b8r,A.b8s,A.b9u,A.b9v,A.bju,A.bux,A.b6k,A.b6f,A.b6g,A.azV,A.azZ,A.azB,A.biW,A.aMP,A.aMQ,A.azO,A.azS,A.azP,A.azQ,A.aJU])
u(B.yv,[A.yX,A.apQ,A.a8s,A.aiR])
u(B.H,[A.BH,A.SC])
u(B.Z,[A.UG,A.Zx])
u(B.Fi,[A.LQ,A.Pk])
u(B.uS,[A.UH,A.Xf])
t(A.a2C,A.aj4)
t(A.aiI,A.a2C)
t(A.a2m,A.aiI)
u(A.a2m,[A.aiU,A.aog])
t(A.o7,A.aiU)
t(A.fS,A.aiV)
t(A.iv,A.aiX)
t(A.mS,A.aiY)
t(A.a2t,A.aiN)
t(A.O_,A.amv)
u(A.O_,[A.aj_,A.aok])
t(A.a2y,A.aj_)
t(A.a2z,A.aj0)
t(A.DB,A.aiZ)
u(A.aA8,[A.LR,A.Pm])
t(A.afq,A.auA)
t(A.aj1,A.afq)
t(A.a2A,A.aj1)
u(B.b5,[A.y6,A.zM])
t(A.uY,A.aiW)
t(A.LL,A.LU)
u(A.LL,[A.azY,A.aMM])
u(B.Pf,[A.a2w,A.a8E])
u(B.L,[A.GW,A.aiK])
u(A.GW,[A.acy,A.acL])
t(A.qq,A.asW)
t(A.adZ,A.asV)
t(A.pu,A.aiM)
t(A.vn,A.amu)
t(A.yZ,A.amr)
t(A.pR,A.amt)
t(A.Ra,A.ar0)
t(A.nb,A.ank)
t(A.nB,A.avk)
u(A.pR,[A.anj,A.avj])
t(A.l1,A.anj)
t(A.lt,A.avj)
t(A.a6Q,A.ams)
u(A.a6Q,[A.ani,A.avi])
t(A.a7G,A.ani)
t(A.afO,A.avi)
t(A.NK,A.am1)
t(A.vm,A.amq)
t(A.NT,A.vm)
t(A.ae_,B.he)
t(A.aiL,A.aiK)
t(A.UE,A.aiL)
t(A.a2n,A.UE)
t(A.k1,A.aiJ)
t(A.a6N,A.amn)
t(A.a6P,A.amo)
u(A.hz,[A.a6T,A.a6U,A.a6V,A.NV,A.NW,A.a6Y,A.NY,A.NZ,A.a6S,A.a6R,A.NU,A.a6W,A.a6X,A.NX])
t(A.q4,A.aog)
t(A.eh,A.aof)
t(A.Pl,A.aoi)
t(A.a2v,A.aiS)
t(A.mT,A.aj6)
t(A.LP,A.aiT)
t(A.yY,A.amp)
t(A.Ft,A.aok)
t(A.a8F,A.aol)
t(A.aoe,A.eF)
t(A.ne,A.aoe)
t(A.qy,A.ne)
t(A.rQ,A.aoj)
t(A.tU,A.auz)
t(A.Hn,A.asU)
t(A.zN,A.aoh)
t(A.zR,A.aos)
w(A.aiN,A.bm)
w(A.aiU,A.bm)
w(A.aiV,A.bm)
w(A.aiX,A.bm)
w(A.aiY,A.bm)
w(A.aiZ,A.bm)
w(A.aj_,A.bm)
w(A.aj0,A.bm)
w(A.aj1,A.bm)
w(A.aiW,A.bm)
w(A.aiI,A.bm)
w(A.aiM,A.bm)
w(A.am1,A.bm)
w(A.amq,A.bm)
w(A.amr,A.bm)
w(A.amt,A.bm)
w(A.amu,A.bm)
w(A.anj,A.bm)
w(A.ani,A.bm)
w(A.ank,A.bm)
w(A.ar0,A.bm)
w(A.asV,A.bm)
w(A.asW,A.bm)
w(A.auA,A.bm)
w(A.avj,A.bm)
w(A.avi,A.bm)
w(A.avk,A.bm)
w(A.aiJ,A.bm)
v(A.aiK,B.aH)
w(A.aiL,B.ed)
v(A.UE,B.a5P)
w(A.aj4,A.bm)
w(A.amn,A.bm)
w(A.amo,A.bm)
w(A.amv,A.bm)
w(A.aiS,A.bm)
w(A.aiT,A.bm)
w(A.aj6,A.bm)
w(A.amp,A.bm)
w(A.ams,A.bm)
w(A.aoe,A.bm)
w(A.aof,A.bm)
w(A.aog,A.bm)
w(A.aoi,A.bm)
w(A.aoj,A.bm)
w(A.aok,A.bm)
w(A.aol,A.bm)
w(A.asU,A.bm)
w(A.auz,A.bm)
w(A.aoh,A.bm)
w(A.aos,A.bm)})()
B.buL(b.typeUniverse,JSON.parse('{"a8r":{"E":[],"c":[]},"ES":{"aHs":[]},"yW":{"fN":["bi<~>"],"fN.T":"bi<~>"},"vk":{"b8":[],"H":[],"c":[]},"Jh":{"E":[],"c":[]},"xh":{"E":[],"c":[]},"amk":{"Z":["vk"]},"amj":{"E":[],"c":[]},"x8":{"E":[],"c":[]},"ajo":{"E":[],"c":[]},"Kc":{"E":[],"c":[]},"IS":{"E":[],"c":[]},"yX":{"b8":[],"H":[],"c":[]},"ahX":{"E":[],"c":[]},"ant":{"E":[],"c":[]},"apQ":{"b8":[],"H":[],"c":[]},"JN":{"E":[],"c":[]},"ahV":{"E":[],"c":[]},"a2G":{"E":[],"c":[]},"Jc":{"E":[],"c":[]},"xc":{"E":[],"c":[]},"BH":{"H":[],"c":[]},"a8s":{"b8":[],"H":[],"c":[]},"amL":{"E":[],"c":[]},"ao5":{"E":[],"c":[]},"VX":{"E":[],"c":[]},"ZJ":{"E":[],"c":[]},"V5":{"E":[],"c":[]},"Vm":{"E":[],"c":[]},"aoC":{"E":[],"c":[]},"akI":{"E":[],"c":[]},"CJ":{"E":[],"c":[]},"auw":{"E":[],"c":[]},"aiR":{"b8":[],"H":[],"c":[]},"UG":{"Z":["BH"]},"LQ":{"H":[],"c":[]},"UH":{"Z":["LQ"]},"o7":{"bm":[]},"fS":{"bm":[]},"iv":{"bm":[]},"mS":{"bm":[]},"DB":{"bm":[]},"y6":{"b5":["o7"],"bb":["o7"],"bb.T":"o7","b5.T":"o7"},"a2t":{"bm":[]},"a2y":{"bm":[]},"a2z":{"bm":[]},"a2A":{"bm":[]},"uY":{"bm":[]},"a2w":{"aZ":[],"c":[]},"acy":{"L":[],"M":[],"jC":[],"aY":[]},"pR":{"bm":[]},"nb":{"bm":[]},"nB":{"bm":[]},"l1":{"bm":[]},"lt":{"bm":[]},"vm":{"bm":[]},"a2m":{"bm":[]},"qq":{"bm":[]},"adZ":{"bm":[]},"pu":{"bm":[]},"vn":{"bm":[]},"yZ":{"bm":[]},"afq":{"bm":[]},"Ra":{"bm":[]},"a7G":{"bm":[]},"afO":{"bm":[]},"NK":{"bm":[]},"NT":{"bm":[]},"LM":{"E":[],"c":[]},"SC":{"H":[],"c":[]},"Zx":{"Z":["SC"]},"k1":{"bm":[]},"ae_":{"he":[],"aZ":[],"c":[]},"a2n":{"ed":["L","hA"],"L":[],"aH":["L","hA"],"M":[],"aY":[],"aH.1":"hA","ed.1":"hA","aH.0":"L"},"B4":{"E":[],"c":[]},"a2C":{"bm":[]},"a6N":{"bm":[]},"O_":{"bm":[]},"a6P":{"bm":[]},"a6T":{"hz":[]},"a6U":{"hz":[]},"a6V":{"hz":[]},"NV":{"hz":[]},"NW":{"hz":[]},"a6Y":{"hz":[]},"NY":{"hz":[]},"NZ":{"hz":[]},"a6S":{"hz":[]},"a6R":{"hz":[]},"NU":{"hz":[]},"a6W":{"hz":[]},"a6X":{"hz":[]},"NX":{"hz":[]},"GW":{"L":[],"M":[],"jC":[],"aY":[]},"Pk":{"H":[],"c":[]},"Xf":{"Z":["Pk"]},"q4":{"bm":[]},"eh":{"bm":[]},"mT":{"bm":[]},"ne":{"eF":[],"bm":[]},"qy":{"ne":[],"eF":[],"bm":[]},"rQ":{"bm":[]},"tU":{"bm":[]},"Hn":{"bm":[]},"zM":{"b5":["q4"],"bb":["q4"],"bb.T":"q4","b5.T":"q4"},"Pl":{"bm":[]},"a2v":{"bm":[]},"LP":{"bm":[]},"yY":{"bm":[]},"a6Q":{"bm":[]},"Ft":{"bm":[]},"a8F":{"bm":[]},"zN":{"bm":[]},"a8E":{"aZ":[],"c":[]},"acL":{"L":[],"M":[],"jC":[],"aY":[]},"zR":{"bm":[]}}'))
B.bOt(b.typeUniverse,JSON.parse('{"LL":1,"O_":1,"LU":1,"GW":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ax
return{_:w("Di"),e:w("bi<op>"),cn:w("bi<oq>"),aN:w("bi<os>"),fM:w("bi<a5<i,@>?>"),c:w("bi<~>"),W:w("k1"),B:w("o7"),dB:w("fS"),T:w("uY"),fj:w("iv"),G:w("mS"),bO:w("mT"),k:w("av"),cX:w("a3d<G>"),dO:w("v4"),R:w("a7<i,@>"),j:w("hv"),bz:w("lV<aW>"),f0:w("oi"),E:w("bm"),F:w("yW"),aI:w("pQ"),m:w("op"),X:w("oq"),P:w("m_"),D:w("vl"),a:w("aHs"),d:w("os"),cw:w("eF"),L:w("hA"),o:w("dD<v,F>"),cm:w("l1"),dv:w("nb"),M:w("D<o6>"),I:w("D<bIw>"),O:w("D<fS>"),Y:w("D<iv>"),U:w("D<eF>"),K:w("D<a7v>"),u:w("D<eh>"),bC:w("D<vT>"),aA:w("D<u<eF>>"),v:w("D<ej>"),r:w("D<Hn>"),s:w("D<i>"),eg:w("D<tP>"),df:w("D<qy>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bo<Z<H>>"),Z:w("ne"),cz:w("eh"),hf:w("q4"),dj:w("zN"),fT:w("rQ"),c_:w("iz<pg<bi<~>>>"),x:w("zR<fS>"),y:w("zR<eh>"),J:w("u<v>"),ef:w("vX"),b:w("a5<i,@>"),f:w("a5<@,@>"),gj:w("af<G,G>"),w:w("kh"),aU:w("B"),Q:w("wa<o7>"),C:w("wa<q4>"),dc:w("ej"),eo:w("qf"),gJ:w("qg"),V:w("kt<m_>"),N:w("i"),A:w("nw"),bP:w("br"),er:w("tP"),fB:w("wV"),dw:w("qy"),bY:w("tU"),cZ:w("qA"),gc:w("jd"),es:w("lt"),bN:w("nB"),l:w("c"),q:w("xx"),g4:w("io<G>"),cJ:w("C"),i:w("G"),z:w("@"),S:w("v"),bn:w("y6?"),f3:w("zM?"),g:w("u<@>?"),h:w("a5<i,@>?"),fF:w("a5<@,@>?"),cK:w("B?"),aD:w("jd?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BB=new B.lO(C.m,B.ax("lO<F>"))
D.BI=new A.DA(0,"left")
D.mW=new A.DA(1,"top")
D.BJ=new A.DA(2,"right")
D.dT=new A.DA(3,"bottom")
D.aB0=new A.qq(!1,A.bF9(),22,null)
D.kD=new A.pu(16,null,D.aB0,!0)
D.aap=new A.pR(C.I,null,2,null)
D.wo=new A.LP(!1,D.aap,A.cbq(),!0)
D.a0n=new A.azL(3,"spaceEvenly")
D.a0x=new B.yb(6,"dstIn")
D.Ye=new B.b0(3,3)
D.BM=new B.d4(D.Ye,D.Ye,C.a6,C.a6)
D.a0J=new B.bl(C.I,0,C.S,-1)
D.Cl=new A.a6P()
D.a2y=new A.NV()
D.a2z=new A.NY()
D.aTO=new A.adZ()
D.a8n=new B.bx(8e6)
D.aoo=w([],B.ax("D<l1>"))
D.aop=w([],B.ax("D<lt>"))
D.Ex=new A.NK(D.aoo,D.aop,!0)
D.aa3=new B.dC("Zeitraum",!1,null)
D.aa9=new B.dC("Konten (SKR 03)",!1,null)
D.y3=new A.aGC(0,"center")
D.aak=new A.vk(null,null)
D.aU0=new A.yY(!0,A.bFH(),A.bQC())
D.EB=new A.yY(!1,A.bFH(),A.bQC())
D.EC=new A.yZ(!1,!0,null,A.axf(),A.a0Y(),!0,null,A.axf(),A.a0Y())
D.aU1=new A.yZ(!0,!0,null,A.axf(),A.a0Y(),!0,null,A.axf(),A.a0Y())
D.a4X=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.l)
D.a4H=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.l)
D.a56=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.l)
D.a50=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.l)
D.a4n=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.l)
D.a4m=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.a5v=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.l)
D.a4Q=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.l)
D.a5y=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.l)
D.a5s=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.l)
D.auM=new B.dD([50,D.a4X,100,D.a4H,200,D.a56,300,D.a50,400,D.a4n,500,D.a4m,600,D.a5v,700,D.a4Q,800,D.a5y,900,D.a5s],x.o)
D.dy=new B.rX(D.auM,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.ako=w([8,4],x.t)
D.aan=new A.pR(D.dy,null,0.4,D.ako)
D.aao=new A.pR(C.a8,null,0.5,null)
D.fS=new A.eF(0/0,0/0)
D.aB2=new A.qq(!0,A.bF9(),44,null)
D.mX=new A.pu(16,null,D.aB2,!0)
D.aB1=new A.qq(!0,A.bF9(),30,null)
D.mY=new A.pu(16,null,D.aB1,!0)
D.aaq=new A.vn(!1,D.mX,D.mY,D.mX,D.mY)
D.aU2=new A.vn(!0,D.mX,D.mY,D.mX,D.mY)
D.fv=new A.rB(0,"hinaus")
D.li=new A.rB(1,"herein")
D.aaz=new A.rB(2,"weder")
D.aKC=new B.a9("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.aaY=new B.e6(D.aKC,null,null)
D.EK=new A.Op(0,"left")
D.ab7=new A.Op(1,"center")
D.EL=new A.Op(2,"right")
D.abb=new B.a4(57495,"MaterialIcons",null,!1)
D.abq=new B.a4(58040,"MaterialIcons",null,!0)
D.yk=new B.a4(58927,"MaterialIcons",null,!1)
D.ac2=new B.a4(59005,"MaterialIcons",null,!0)
D.ac3=new B.a4(59007,"MaterialIcons",null,!0)
D.ac4=new B.a4(59011,"MaterialIcons",null,!1)
D.ada=new B.a4(62589,"MaterialIcons",null,!1)
D.acn=new B.a4(61349,"MaterialIcons",null,!1)
D.ae5=new B.aA(D.acn,20,C.h,null,null)
D.ae7=new B.aA(F.Fe,18,null,null,null)
D.ae8=new B.aA(D.yk,18,null,null,null)
D.aet=new B.aA(C.of,14,C.Y,null,null)
D.aey=new B.aA(C.i5,null,C.h,null,null)
D.aez=new B.aA(C.ll,null,C.n,null,null)
D.af_=new B.aA(C.lm,16,null,null,null)
D.af6=new B.aA(C.yv,16,null,null,null)
D.afa=new B.aA(F.od,null,C.Y,null,null)
D.afl=new B.aA(F.Fp,16,null,null,null)
D.afs=new B.aA(D.yk,16,null,null,null)
D.ahI=new A.a8s(null)
D.aU7=new A.aMx(0,"horizontal")
D.yG=new A.zN(0,0,0,0,!1)
D.G8=new A.Pl(0.5)
D.Cr=new A.a8F()
D.ahV=new A.Ft(D.Cr,A.bQG(),10,A.bQD(),!0,A.bQF(),A.bQE(),!1,null,null,null)
D.aU9=new A.Ft(D.Cr,A.bQG(),10,A.bQD(),!0,A.bQF(),A.bQE(),!0,null,null,null)
D.ajm=w([4,3],x.t)
D.az9=new B.aL("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ayZ=new B.aL("receivables","Forderungen (kurzfristig)")
D.ayN=new B.aL("inventory_value","Vorr\xe4te (Warenbestand)")
D.ayL=new B.aL("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ayy=new B.aL("fixed_assets","Anlageverm\xf6gen")
D.ayF=new B.aL("current_liabilities","Kurzfristige Verbindlichkeiten")
D.az5=new B.aL("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ayY=new B.aL("equity","Eigenkapital")
D.q_=w([D.az9,D.ayZ,D.ayN,D.ayL,D.ayy,D.ayF,D.az5,D.ayY],B.ax("D<+(i,i)>"))
D.aUc=w([],x.M)
D.aob=w([],x.O)
D.aoc=w([],x.Y)
D.aod=w([],B.ax("D<mS>"))
D.aoe=w([],B.ax("D<mT>"))
D.aUd=w([],x.U)
D.aUe=w([],x.u)
D.aof=w([],x.r)
D.avr={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TT={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zm=new B.a7(D.TT,[0,0,0,0,0,0,0,C.ba],B.ax("a7<i,B>"))
D.avo={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.auG=new B.a7(D.avo,[0,0,0,0],B.ax("a7<i,v>"))
D.avG={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.asf=new B.a7(D.avG,[0,0,0,0,null,null,null,null],B.ax("a7<i,v?>"))
D.as8=new B.a7(D.avr,[D.zm,D.zm,D.zm,C.ba,C.ba,C.ba,D.auG,D.asf],x.R)
D.ass=new B.a7(D.TT,[0,0,0,0,0,0,0,C.cc],x.R)
D.avs={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.asu=new B.a7(D.avs,[8500,1200,3400,300,22e3,4200,9000,22200],B.ax("a7<i,G>"))
D.avQ={total:0,rows:1}
D.asx=new B.a7(D.avQ,[0,C.cc],x.R)
D.avn={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.auH=new B.a7(D.avn,[0,0,0,0,0,0,0,C.cc],x.R)
D.avU={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.auI=new B.a7(D.avU,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ax("a7<i,i>"))
D.a5E=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.l)
D.a5M=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.l)
D.a4q=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.l)
D.a4T=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.l)
D.a52=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.l)
D.a61=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a4b=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.l)
D.a4V=new B.F(1,0,0.592156862745098,0.6549019607843137,C.l)
D.a55=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.l)
D.a5t=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.l)
D.auN=new B.dD([50,D.a5E,100,D.a5M,200,D.a4q,300,D.a4T,400,D.a52,500,D.a61,600,D.a4b,700,D.a4V,800,D.a55,900,D.a5t],x.o)
D.TE=new B.rX(D.auN,1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a9h=new B.ag(32,32,32,32)
D.awP=new B.ab(D.a9h,C.bC,null)
D.awX=new B.ab(C.am,C.bC,null)
D.aoq=w([],B.ax("D<nb>"))
D.aor=w([],B.ax("D<nB>"))
D.Yg=new A.Ra(D.aoq,D.aor)
D.azY=new B.f9("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aA_=new B.f9("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aA3=new B.f9("Automaten-Business","Umsatz je Automat",null,null)
D.aA6=new B.f9("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aA8=new B.f9("Top","Meistverkaufte Produkte",null,null)
D.aAb=new B.f9("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aAc=new B.f9("Kennzahlen","Rentabilit\xe4t",null,null)
D.YV=new B.ty(C.L,C.v,0)
D.aIK=new B.a9("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aCO=new B.dL(D.aIK,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aL5=new B.a9('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aCR=new B.dL(D.aL5,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aIZ=new B.a9("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aCS=new B.dL(D.aIZ,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKZ=new B.a9("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aCU=new B.dL(D.aKZ,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKp=new B.a9("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aCV=new B.dL(D.aKp,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKm=new B.a9("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aDg=new B.dL(D.aKm,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aUo=new B.V(!0,C.I,null,null,null,null,14,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIV=new B.a9("Demo",null,null,null,null,null,null,null,null,null)
D.aJ8=new B.a9("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aK5=new B.a9("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aKc=new B.a9("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aKt=new B.a9("sevDesk",null,null,null,null,null,null,null,null,null)
D.aLi=new B.a9("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_b=new A.afo(0,"auto")
D.aLX=new A.afo(1,"top")
D.aQr=new A.xc("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aQs=new A.xc("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bj=new A.xe(0,"alle")
D.a_B=new A.xe(1,"aufwand")
D.a_C=new A.xe(2,"erloes")
D.a_D=new A.xe(3,"privat")
D.aRm=new A.xh('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.n,C.ll,null)
D.adm=new B.a4(984570,"MaterialIcons",null,!1)
D.aRn=new A.xh("Keine Buchung passt zu dieser Auswahl.",C.n,D.adm,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ckj","bUU",()=>B.j2(new A.bya(),x.D))
w($,"ckk","a1v",()=>B.j2(new A.byb(),x.a))
w($,"clk","r_",()=>B.bDP(new A.bA7(),x.P))
w($,"ckl","bB3",()=>C.aJ.$1$1(new A.byc(),x.d))
w($,"ckh","bB2",()=>C.aJ.$1$1(new A.by8(),x.m))
w($,"cki","bHp",()=>C.aJ.$1$1(new A.by9(),x.X))
w($,"ckg","bB1",()=>C.aJ.$1$1(new A.by7(),x.h))
w($,"ckf","bB0",()=>B.b1j(A.cau(),x.F,x.c))
w($,"cdl","bAy",()=>new A.azA())
v($,"cgH","lL",()=>new A.b3Z())})()};
(a=>{a["5UVOZAf19Dm+Y3gtCT5C1P8lIVY="]=a.current})($__dart_deferred_initializers__);