((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={vm:function vm(d){this.a=d},
caH(d){var w
if(x.f.b(d)){w=J.T(d,"error")
if(typeof w=="string"&&C.c.av(w).length!==0)return C.c.av(w)}if(typeof d=="string"&&C.c.av(d).length!==0)return C.c.av(d)
return null},
ES:function ES(d){this.a=d},
bYP(d){var w=J.U(d),v=B.b3(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.ba
w=J.cO(w,new A.aHl(),x.aI)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.op(v,w)},
bxi(d){var w
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
aHl:function aHl(){},
bye(d,e,f){var w,v=new A.byf(f<0)
if(d==="expense")return v.$1(D.fu)
if(d==="revenue")return v.$1(D.li)
w=B.ig(C.c.av(e),null)
if(w!=null&&w>=1800&&w<=1999)return v.$1(C.e.ai(w,100)>=90?D.li:D.fu)
return D.aax},
bFU(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rB:function rB(d,e){this.a=d
this.b=e},
byf:function byf(d){this.a=d},
bYQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.U(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.m4
w=x.f
v=x.N
u=x.z
t=A.aHG(B.cF(w.a(e.h(a0,"current")),v,u))
s=A.aHG(B.cF(w.a(e.h(a0,"prior_year")),v,u))
r=A.aHG(B.cF(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ba
p=J.cO(p,new A.aHm(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ba
o=J.cO(o,new A.aHn(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ba
q=J.cO(q,new A.aHo(),x.fB)
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
i=A.bxj(u.h(0,"revenue_growth_yoy_pct"))
h=A.bxj(u.h(0,"revenue_growth_mom_pct"))
g=A.bxj(u.h(0,"result_growth_yoy_pct"))
u=A.bxj(u.h(0,"result_growth_mom_pct"))
f=B.b3(J.T(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.oq(t,s,r,p,o,q,new A.aCt(m,l,k,n),new A.aDE(v,e,w,j,i,h,g,u),f)},
pm(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.ak(d))
return w==null?0:w},
bxj(d){if(d==null)return null
if(typeof d=="number")return d
return B.fJ(J.ak(d))},
qA:function qA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vY:function vY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wW:function wW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCt:function aCt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDE:function aDE(d,e,f,g,h,i,j,k){var _=this
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
aHm:function aHm(){},
aHn:function aHn(){},
aHo:function aHo(){},
aHG(d){var w=J.U(d),v=A.uD(w.h(d,"revenue_net_7")),u=A.uD(w.h(d,"revenue_net_19")),t=A.uD(w.h(d,"revenue_net")),s=A.uD(w.h(d,"expense_net")),r=A.uD(w.h(d,"result_net")),q=A.uD(w.h(d,"vat_collected")),p=A.uD(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.ba
w=J.cO(w,new A.aHH(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.os(v,u,t,s,r,q,p,w)},
uD(d){var w
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
aHH:function aHH(){},
bYO(d){return new A.yX(d,new B.iz(x.c_),C.dS)},
by8:function by8(){},
by9:function by9(){},
bA5:function bA5(){},
bya:function bya(){},
by6:function by6(){},
by7:function by7(){},
by5:function by5(){},
yX:function yX(d,e,f){this.r=d
this.a=e
this.f=f},
aHk:function aHk(d,e,f){this.a=d
this.b=e
this.c=f},
aHj:function aHj(d,e,f){this.a=d
this.b=e
this.c=f},
vl:function vl(d,e){this.d=d
this.a=e},
xf:function xf(d,e){this.a=d
this.b=e},
ami:function ami(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bfh:function bfh(d){this.a=d},
bfc:function bfc(d){this.a=d},
bfb:function bfb(d,e){this.a=d
this.b=e},
bfd:function bfd(d){this.a=d},
bfa:function bfa(d){this.a=d},
bfg:function bfg(){},
bff:function bff(){},
bfe:function bfe(d){this.a=d},
bf9:function bf9(d){this.a=d},
amh:function amh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bf5:function bf5(d){this.a=d},
bf6:function bf6(d){this.a=d},
bf7:function bf7(d){this.a=d},
bf8:function bf8(d){this.a=d},
x9:function x9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jh:function Jh(d,e,f){this.c=d
this.d=e
this.a=f},
bj7:function bj7(){},
bj8:function bj8(){},
bj9:function bj9(){},
bja:function bja(){},
bjb:function bjb(){},
bjc:function bjc(){},
bjd:function bjd(){},
ajm:function ajm(d,e){this.c=d
this.a=e},
xi:function xi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bYR(){return new A.yY(null)},
WU(d,e,f,g,h){return new A.anr(e,h,g,f,d,null)},
yY:function yY(d){this.a=d},
aHF:function aHF(d){this.a=d},
aHw:function aHw(d,e,f){this.a=d
this.b=e
this.c=f},
aHx:function aHx(d,e,f){this.a=d
this.b=e
this.c=f},
aHy:function aHy(d){this.a=d},
aHv:function aHv(){},
aHz:function aHz(d){this.a=d},
aHA:function aHA(d){this.a=d},
aHu:function aHu(){},
aHB:function aHB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHE:function aHE(){},
aHD:function aHD(){},
aHC:function aHC(){},
aHt:function aHt(d,e){this.a=d
this.b=e},
aHr:function aHr(d){this.a=d},
aHs:function aHs(d){this.a=d},
ahU:function ahU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anr:function anr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
apP:function apP(d,e){this.e=d
this.a=e},
bmq:function bmq(d){this.a=d},
bmr:function bmr(d){this.a=d},
bms:function bms(d,e,f){this.a=d
this.b=e
this.c=f},
bmp:function bmp(){},
JN:function JN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Kc:function Kc(d,e){this.c=d
this.a=e},
btb:function btb(d){this.a=d},
btc:function btc(d,e){this.a=d
this.b=e},
bta:function bta(d){this.a=d},
ahS:function ahS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
IS:function IS(d,e){this.c=d
this.a=e},
bIz(d,e,f){return new A.a2F(e,f,d,null)},
bF8(d,e){var w=$.cU().a5(Math.abs(d))
return e===D.fu?"-"+w:w},
bPV(d,e){var w
if(e===D.fu)return d==="revenue"||d==="expense"?C.Y:C.m
if(e===D.li)w=d==="revenue"||d==="expense"
else w=!1
if(w)return C.al
return C.m},
cax(d,e){if(d==="expense")return e===D.fu?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fu?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fu)return"Privatentnahme"
if(e===D.li)return"Privateinlage"
return A.bFU(d)},
a2F:function a2F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bF3(d,e,f,g,h){var w=null
return B.h3(w,w,!0,w,new A.bxd(h,g,e,f),d,w,!0,!0,x.H)},
jV(d,e,f,g,h,i,j,k,l,m,n){return new A.ao4(g,n,i,e,d,m,f,k,l,j,null)},
ax7(d,e){return A.c8t(d,e)},
c8t(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$ax7=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aN(D.aCM)
t=4
o=e.aC(0,$.bH(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.h_("finance-balance-sync",B.A(n,n)),$async$ax7)
case 7:r=g
q=B.cF(x.f.a(r.a),x.N,n)
l.MO()
if(J.d(J.T(q,"configured"),!1)){l.aN(D.aCQ)
w=1
break}if(J.d(J.T(q,"ok"),!0)){o=$.bB_()
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
return B.p($async$ax7,v)},
axa(d,e,f){var w=0,v=B.q(x.H)
var $async$axa=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.h3(null,null,!0,null,new A.bxb(f,e,e.aC(0,$.bH(),x.A)),d,null,!0,!0,x.H),$async$axa)
case 2:return B.o(null,v)}})
return B.p($async$axa,v)},
a8p:function a8p(d){this.a=d},
aMu:function aMu(){},
aMt:function aMt(){},
aMs:function aMs(){},
Jc:function Jc(d,e){this.c=d
this.a=e},
biI:function biI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bix:function bix(){},
biy:function biy(){},
biz:function biz(){},
biA:function biA(){},
biB:function biB(){},
biC:function biC(){},
biD:function biD(){},
biE:function biE(){},
biF:function biF(d){this.a=d},
biG:function biG(d){this.a=d},
biH:function biH(d){this.a=d},
biJ:function biJ(d,e){this.a=d
this.b=e},
biK:function biK(d,e){this.a=d
this.b=e},
bxd:function bxd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bxc:function bxc(d){this.a=d},
amJ:function amJ(d){this.a=d},
ao4:function ao4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
biL:function biL(d,e){this.a=d
this.b=e},
VW:function VW(d,e,f){this.c=d
this.d=e
this.a=f},
ZI:function ZI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bsd:function bsd(){},
bse:function bse(){},
bsf:function bsf(d){this.a=d},
V4:function V4(d,e,f){this.c=d
this.d=e
this.a=f},
b8n:function b8n(){},
b8p:function b8p(d){this.a=d},
b8q:function b8q(d){this.a=d},
b8o:function b8o(){},
Vl:function Vl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9q:function b9q(){},
b9r:function b9r(){},
b9s:function b9s(){},
b9t:function b9t(d){this.a=d},
aoB:function aoB(d,e){this.c=d
this.a=e},
bjr:function bjr(){},
bjs:function bjs(){},
akG:function akG(d,e){this.c=d
this.a=e},
CJ:function CJ(d,e,f){this.c=d
this.d=e
this.a=f},
auv:function auv(d,e){this.c=d
this.a=e},
buu:function buu(){},
buv:function buv(){},
xd:function xd(d,e){this.c=d
this.a=e},
aiO:function aiO(d,e){this.e=d
this.a=e},
b6j:function b6j(){},
b6i:function b6i(){},
b6h:function b6h(d,e,f){this.a=d
this.b=e
this.c=f},
b6b:function b6b(d,e){this.a=d
this.b=e},
b6c:function b6c(d,e){this.a=d
this.b=e},
b6k:function b6k(d){this.a=d},
b6l:function b6l(d){this.a=d},
b6d:function b6d(){},
b6e:function b6e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6f:function b6f(d,e){this.a=d
this.b=e},
b6g:function b6g(d,e,f){this.a=d
this.b=e
this.c=f},
bxb:function bxb(d,e,f){this.a=d
this.b=e
this.c=f},
bxa:function bxa(d){this.a=d},
BI:function BI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UF:function UF(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b65:function b65(){},
b66:function b66(d){this.a=d},
b67:function b67(d){this.a=d},
b69:function b69(d,e){this.a=d
this.b=e},
b68:function b68(d,e){this.a=d
this.b=e},
b6a:function b6a(d){this.a=d},
bm:function bm(){},
bIx(d){return new A.LQ(d,C.ap,C.c1,null,null)},
LQ:function LQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
UG:function UG(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c5$=g
_.c=_.a=null},
b6m:function b6m(d,e){this.a=d
this.b=e},
b6n:function b6n(d){this.a=d},
azK(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ao9:f,p=a0==null?16:a0,o=d==null?D.a0l:d,n=g==null,m=n?A.bBt(r,r,r,r,r,r,r,r):g,l=a3==null?D.Ye:a3
n=n?A.bBt(r,r,r,r,r,r,r,r):g
w=j==null?D.Ev:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.L:e
return new A.o7(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Ck,s,w,i,n)},
azR(d,e,f,g,h){var w=d==null?D.aoa:d,v=e==null?2:e,u=g==null?C.lG:g
return new A.fS(h,f===!0,w,v,u)},
bW5(d,e,f){var w=d.a
w=C.d.aM(w+(e.a-w)*f)
return A.azR(A.kI(d.c,e.c,f,A.c9f(),x.fj),B.aj(d.d,e.d,f),!1,A.kI(d.e,e.e,f,A.a12(),x.S),w)},
a2w(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TC
else w=h
v=m==null
u=v?8:m
t=$.lK()
s=t.aYz(f,v?8:m)
t=t.aYA(g,v?8:m)
v=d==null?A.bIv(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.aob:k)},
bW6(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.aj(d.e,e.e,f),q=B.mU(d.f,e.f,f),p=A.kI(d.r,e.r,f,A.a12(),x.S),o=B.c1(d.w,e.w,f),n=B.aj(d.a,e.a,f),m=B.aj(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.aj(w.b,v.b,f)
t=B.aj(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2w(A.bIv(v,u,null,!1,t),p,q,o,s,n,null,A.kI(d.y,e.y,f,A.c9g(),x.G),m,r)},
bW7(d,e,f){var w,v,u=B.aj(d.a,e.a,f)
u.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mS(u,w,v,B.c1(d.d,e.d,f))},
bIv(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dy
else w=d
return new A.a2s(g===!0,v,u,w,f)},
bBt(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2y(4,C.fR,16,D.y3,0,120,A.c9i(),!1,!1,D.a_9,0,C.J,A.c9h())
else w=k
v=j==null?C.l9:j
return new A.a2x(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
ca5(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w)
return new A.DB(C.d.j(f.b),v)},
ca4(d){return A.aBS(D.dy,15)},
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
azJ:function azJ(d,e){this.a=d
this.b=e},
fS:function fS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azS:function azS(){},
azT:function azT(){},
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
a2s:function a2s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2x:function a2x(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
afl:function afl(d,e){this.a=d
this.b=e},
a2y:function a2y(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2z:function a2z(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
y7:function y7(d,e){this.a=d
this.b=e},
aiK:function aiK(){},
aiR:function aiR(){},
aiS:function aiS(){},
aiU:function aiU(){},
aiV:function aiV(){},
aiW:function aiW(){},
aiX:function aiX(){},
aiY:function aiY(){},
aiZ:function aiZ(){},
azU:function azU(d){this.a=d},
azV:function azV(){},
uZ:function uZ(d,e,f){this.a=d
this.b=e
this.c=f},
aiT:function aiT(){},
azW:function azW(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
azX:function azX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azY:function azY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7s:function a7s(d){this.b=d},
a2v:function a2v(d,e,f){this.d=d
this.e=e
this.a=f},
acv:function acv(d,e,f,g,h,i,j,k){var _=this
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
ca6(d,e){var w=null
return new A.SB(e.w,B.f(e.r,w,w,w,w,w,w,w,w),w)},
azC(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.aj(w.c,v.c,f)
u.toString
return new A.pu(t,e.b,new A.qq(v.a,v.b,u,B.aj(w.d,v.d,f)),!0)},
bJW(d,e,f){var w=A.azC(d.b,e.b,f),v=A.azC(d.d,e.d,f),u=A.azC(d.e,e.e,f)
return new A.vo(e.a,w,A.azC(d.c,e.c,f),v,u)},
bYT(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.aj(d.a,e.a,f)
w.toString
v=B.aj(d.b,e.b,f)
v.toString
return new A.eF(w,v)},
bJU(d,e,f){return new A.z_(e.a,!0,B.aj(d.c,e.c,f),e.d,e.e,e.f,B.aj(d.r,e.r,f),e.w,e.x)},
ccw(d){return!0},
ca9(d){return D.aal},
bJV(d,e,f,g){var w
if(d==null)w=f==null?C.I:null
else w=d
return new A.pR(w,f,g,e)},
bLT(d,e,f){var w,v=A.kI(d.a,e.a,f,A.c9b(),x.dv)
v.toString
w=A.kI(d.b,e.b,f,A.c9d(),x.bN)
w.toString
return new A.R9(v,w)},
bZF(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rD(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nb(t,w,v,u)},
c3X(d,e,f){var w,v,u,t=B.aj(d.a,e.a,f)
t.toString
w=B.aj(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rD(d.d,e.d,f)
if(v==null)v=u==null?C.o:null
return new A.nB(t,w,v,u)},
bZE(d,e,f){var w,v,u,t,s,r=B.aj(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ol(w.b,v.b,f)
u.toString
t=B.cw(w.c,v.c,f)
t=A.bZC(B.bBl(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rD(d.b,e.b,f)
w=B.aj(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a12(),x.S)
if(u==null)u=v==null?C.I:null
return new A.l0(r,e.f,e.r,t,e.x,u,v,w,s)},
c3W(d,e,f){var w,v,u,t,s,r=B.aj(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ol(w.b,v.b,f)
u.toString
t=B.cw(w.c,v.c,f)
t=A.c3U(B.bBl(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rD(d.b,e.b,f)
w=B.aj(d.c,e.c,f)
w.toString
s=A.kI(d.d,e.d,f,A.a12(),x.S)
if(u==null)u=v==null?C.I:null
return new A.ls(r,e.f,e.r,t,e.x,u,v,w,s)},
bZC(d,e,f,g,h,i){return new A.a7D(f,!1,g,i,d,e)},
bZD(d){return C.d.ab(d.e,1)},
c3U(d,e,f,g,h,i){return new A.afL(f,!1,g,i,d,e)},
c3V(d){return C.d.ab(d.e,1)},
bJQ(d,e,f){var w,v=A.kI(d.a,e.a,f,A.c9a(),x.cm)
v.toString
w=A.kI(d.b,e.b,f,A.c9c(),x.es)
w.toString
return new A.NK(v,w,!0)},
bYS(d,e,f){return new A.NT(d,e==null?4:e,f)},
a2l:function a2l(){},
DA:function DA(d,e){this.a=d
this.b=e},
tT:function tT(d,e){this.r=d
this.w=e},
qq:function qq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adW:function adW(){},
pu:function pu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vo:function vo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eF:function eF(d,e){this.a=d
this.b=e},
z_:function z_(d,e,f,g,h,i,j,k,l){var _=this
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
afn:function afn(){},
R9:function R9(d,e){this.a=d
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
l0:function l0(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ls:function ls(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7D:function a7D(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afL:function afL(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
NK:function NK(d,e,f){this.a=d
this.b=e
this.c=f},
vn:function vn(){},
NT:function NT(d,e,f){this.a=d
this.b=e
this.c=f},
aiF:function aiF(){},
aiJ:function aiJ(){},
am_:function am_(){},
amo:function amo(){},
amp:function amp(){},
amr:function amr(){},
ams:function ams(){},
anh:function anh(){},
ang:function ang(){},
ani:function ani(){},
ar_:function ar_(){},
asU:function asU(){},
asV:function asV(){},
auz:function auz(){},
avh:function avh(){},
avg:function avg(){},
avi:function avi(){},
azy:function azy(){},
LL:function LL(){},
LM:function LM(d,e,f){this.c=d
this.d=e
this.a=f},
azA:function azA(d){this.a=d},
azz:function azz(d){this.a=d},
SB:function SB(d,e,f){this.c=d
this.e=e
this.a=f},
Zw:function Zw(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c2s(d,e,f){var w=B.ah(f),v=w.i("af<1,k1>")
v=B.Q(new B.af(f,new A.b0r(),v),v.i("aw.E"))
w=w.i("af<1,c>")
w=B.Q(new B.af(f,new A.b0s(),w),w.i("aw.E"))
return new A.adX(e,d,v,w,null)},
bW3(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a8f(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tQ(v,C.ac,C.x,new B.kB(1),v,v,v,v,C.by,v)
u=new A.a2m(f,d,e,u,t,!0,0,v,v,new B.bu(),B.aM(x.j))
u.bl()
return u},
adX:function adX(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b0r:function b0r(){},
b0s:function b0s(){},
a2m:function a2m(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
biR:function biR(d,e){this.a=d
this.b=e},
azB:function azB(){},
k1:function k1(d,e){this.a=d
this.b=e},
o6:function o6(d,e){this.a=d
this.b=e},
aiG:function aiG(){},
aiH:function aiH(){},
aiI:function aiI(){},
UD:function UD(){},
B5:function B5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b0t:function b0t(d){this.a=d},
b0u:function b0u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b0v:function b0v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6L(d,e){var w=d==null?B.cf(C.I,1):d
return new A.a6K(e!==!1,w)},
a2B:function a2B(){},
a6K:function a6K(d,e){this.a=d
this.b=e},
O_:function O_(){},
a6M:function a6M(){},
aA6:function aA6(){},
aGA:function aGA(d,e){this.a=d
this.b=e},
aj1:function aj1(){},
aml:function aml(){},
amm:function amm(){},
amt:function amt(){},
LU:function LU(){},
wb:function wb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hz:function hz(){},
a6Q:function a6Q(d){this.a=d},
a6R:function a6R(d){this.a=d},
a6S:function a6S(d){this.a=d},
NV:function NV(){},
NW:function NW(){},
a6V:function a6V(d){this.a=d},
NY:function NY(){},
NZ:function NZ(d){this.a=d},
a6P:function a6P(d){this.a=d},
a6O:function a6O(d){this.a=d},
NU:function NU(d){this.a=d},
a6T:function a6T(d){this.a=d},
a6U:function a6U(d){this.a=d},
NX:function NX(d){this.a=d},
GW:function GW(){},
aWF:function aWF(d){this.a=d},
aWG:function aWG(d){this.a=d},
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
Pj:function Pj(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Xe:function Xe(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c5$=h
_.c=_.a=null},
biX:function biX(d,e){this.a=d
this.b=e},
biV:function biV(d){this.a=d},
biW:function biW(d,e){this.a=d
this.b=e},
biU:function biU(){},
biY:function biY(d){this.a=d},
bCL(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.L:d
return new A.q4(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aMF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TC:u
else w=g
v=f==null?A.azI(!1,u,0,u,!1,D.wp):f
w=new A.eh(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.azI(!1,u,0,u,!1,D.wp):d,j,a0,i,s,!1,p)
w.as1(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
c_6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.aj(d.x,e.x,f)
m.toString
w=A.bIw(d.ay,e.ay,f)
v=A.bIw(d.ch,e.ch,f)
u=B.aj(d.as,e.as,f)
u.toString
t=e.CW
s=A.kI(d.cy,e.cy,f,A.a12(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rD(d.w,e.w,f)
p=A.kI(d.a,e.a,f,A.c99(),x.cw)
p.toString
o=B.bMq(d.db,e.db,f)
o.toString
n=B.aj(d.dy.a,e.dy.a,f)
n.toString
return A.aMF(v,m,w,r,e.z,s,new A.yZ(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Pk(n),!1,u,o,!0,e.cx,p)},
azI(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aM(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
else w=e
return new A.a2u(h,w,g,i,f,!1)},
bIw(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rD(v.b,u.b,f),r=B.aj(v.c,u.c,f)
r.toString
r=A.bJV(t,A.kI(v.d,u.d,f,A.a12(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rD(d.c,e.c,f)
v=B.aj(d.e,e.e,f)
v.toString
return A.azI(!1,s,v,u,e.a,new A.LP(!1,r,w.c,!0))},
bW8(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rD(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aM(127.5),D.dy.v()>>>16&255,D.dy.v()>>>8&255,D.dy.v()&255):null
return new A.mT(e.a,e.b,w,v)},
ccx(d){return!0},
bEO(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jA)return A.bFE(w.a,A.bCp(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dy:w},
c6R(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jA)w=A.bFE(v.a,A.bCp(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dy}return A.aBS(w,40)},
bOZ(d,e,f,g,h){var w,v=A.bEO(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jA)w=A.bFE(u.a,A.bCp(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dy}u=A.aBS(w,40)
return new A.NT(v,h==null?4:h,u)},
ccv(d,e){return!0},
c8X(d,e){return Math.abs(d.a-e.a)},
cac(d,e){var w=J.cO(e,new A.bxX(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
ca8(d,e){return-1/0},
ca7(d,e){return d.a[e].b},
bQb(d){var w=J.cO(d,new A.bxU(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bQa(d){return A.aBS(D.dy,15)},
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
aMG:function aMG(){},
Pk:function Pk(d){this.a=d},
a2u:function a2u(d,e,f,g,h,i){var _=this
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
yZ:function yZ(d,e,f){this.a=d
this.b=e
this.c=f},
aMv:function aMv(d,e){this.a=d
this.b=e},
a6N:function a6N(){},
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
bxX:function bxX(d){this.a=d},
bxW:function bxW(d){this.a=d},
a8C:function a8C(){},
bxU:function bxU(){},
ne:function ne(){},
qy:function qy(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rR:function rR(d,e){this.a=d
this.b=e},
tV:function tV(d,e){this.a=d
this.b=e},
Hn:function Hn(d){this.a=d},
Pl:function Pl(d){this.a=d},
zN:function zN(d,e){this.a=d
this.b=e},
aiP:function aiP(){},
aiQ:function aiQ(){},
aj3:function aj3(){},
amn:function amn(){},
amq:function amq(){},
aod:function aod(){},
aoe:function aoe(){},
aof:function aof(){},
aoh:function aoh(){},
aoi:function aoi(){},
aoj:function aoj(){},
aok:function aok(){},
asT:function asT(){},
auy:function auy(){},
aMH:function aMH(d){this.a=d},
aMI:function aMI(){},
aMJ:function aMJ(){},
zO:function zO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aog:function aog(){},
aMK:function aMK(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aMN:function aMN(){},
aML:function aML(d,e,f){this.a=d
this.b=e
this.c=f},
aMM:function aMM(d,e,f){this.a=d
this.b=e
this.c=f},
aMO:function aMO(){},
vU:function vU(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8B:function a8B(d,e,f){this.d=d
this.e=e
this.a=f},
acI:function acI(d,e,f,g,h,i,j,k){var _=this
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
bBs(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ah(o),l=new B.af(o,new A.azL(),m.i("af<1,G>")).jM(0,new A.azM()),k=e-l,j=new A.azP(k,d,n)
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
new B.j0(o,m.i("j0<1>")).aD(0,new A.azN(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j0(o,m.i("j0<1>")).aD(0,new A.azO(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
azL:function azL(){},
azM:function azM(){},
azP:function azP(d,e,f){this.a=d
this.b=e
this.c=f},
azQ:function azQ(d,e,f){this.a=d
this.b=e
this.c=f},
azN:function azN(d,e,f){this.a=d
this.b=e
this.c=f},
azO:function azO(d,e,f){this.a=d
this.b=e
this.c=f},
bCp(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j0(w,B.ah(w).i("j0<1>")).aD(0,new A.aJS(v,d))
else throw B.e(B.bM('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aJS:function aJS(d,e){this.a=d
this.b=e},
aD4(d,e){var w,v
if(e!=null){w=B.ah(e).i("af<1,G>")
v=B.Q(new B.af(e,new A.aD5(),w),w.i("aw.E"))
return A.ca_(d,new A.a3a(v,x.cX))}else return d},
aD5:function aD5(){},
c33(d,e){var w=!0
if(d!==C.fc)if(!(d===C.ac&&e===C.x))w=d===C.iF&&e===C.b5
if(w)return D.EI
else{w=!0
if(d!==C.hD)if(!(d===C.iF&&e===C.x))w=d===C.ac&&e===C.b5
if(w)return D.EJ
else return D.ab5}},
Op:function Op(d,e){this.a=d
this.b=e},
a30:function a30(d,e){this.a=d
this.b=e},
zS:function zS(d,e){this.a=d
this.$ti=e},
aor:function aor(){},
ca_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ap(),i=x.v,h=B.b([],i),g=new B.cp(j.r,C.aj,k,k,h)
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
p=new B.L5(new B.cp(t,p,k,new B.aro([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iF(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a3a:function a3a(d,e){this.a=d
this.b=0
this.$ti=e},
b3X:function b3X(){},
bCd(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bWb(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gep(v)===0){v=d.a.a
if(v.gep(v)===0){v=d.b.a
if(v.gep(v)===0){v=d.c.a
v=v.gep(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aBS(d,e){var w=1-e/100
return B.aF(d.gfJ(d),C.d.aM(d.gOi()*w),C.d.aM(d.gGw()*w),C.d.aM(d.gKJ()*w))},
bJT(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
bCe(d){var w=d.a,v=w?A.b0q(d.b):0,u=w?A.b0q(d.c):0,t=w?A.b0q(d.d):0
return new B.ag(v,u,t,w?A.b0q(d.e):0)},
c0l(d){var w
if(d.c===0){d.seY(null)
w=B.c5(d.r)
d.r=B.aF(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bD7(d,e,f,g){var w
if(f!=null){d.r=C.I.gt(0)
d.seY(f.mP(0,g))}else{w=e==null?C.L:e
d.r=w.gt(w)
d.seY(null)}},
b0q(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kI(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
cbj(d,e,f){return C.d.aM(d+(e-d)*f)},
bFE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.vm.prototype={
M4(d){return this.aUq(d)},
aUq(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M4=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e3("finance_summary",B.a6(["p_from",E.or(d.a),"p_to",E.or(d.b)],s,r),r),$async$M4)
case 3:q=f
if(q==null){u=D.asq
w=1
break}if(x.f.b(q)){u=B.cF(q,s,r)
w=1
break}u=D.auF
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
break}u=D.as6
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
break}u=D.asv
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
o=A.aHG(q)
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
o=A.bYQ(q)
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
o=A.bYP(q)
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
if(d instanceof B.vk)return d
if(d instanceof B.mk){if(d.b==="42501")return new B.wf(d.a)
return new B.ty(d.a)}if(d instanceof B.Od){w=A.caH(d.b)
v=""+d.a
return new B.ty(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.By("Unerwarteter Fehler: "+B.h(d))},
$iaHq:1}
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
A.vY.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wW.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCt.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDE.prototype={
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
A.yX.prototype={
Hk(d){return this.arJ(0)},
arJ(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.see(0,C.dF)
s=t.r
r=s.aC(0,$.r_(),x.P)
p.a=null
w=3
return B.k(B.pt(new A.aHk(p,t,r),x.H),$async$Hk)
case 3:t.see(0,f)
q=t.f
if(q.ghf(q)==null){q=$.bB1()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bHn())
s.c_($.bB0())}u=p.a
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
return B.k(B.pt(new A.aHj(q,t,s),x.H),$async$LX)
case 3:t.see(0,e)
r=t.f
u=r.ghf(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LX,v)}}
A.vl.prototype={
U(){return new A.ami(D.Bj)}}
A.xf.prototype={
L(){return"_Filter."+this.b}}
A.ami.prototype={
gSH(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbD(),t=u.ak($.r_(),x.P),s=u.ak($.bB0(),x.e)
u=$.cZ()
return B.db(D.aaW,v,B.nq(B.da(B.b([new B.f9("Zeitraum",u.a5(t.a)+" \u2013 "+u.a5(t.b),v,v),C.M,new A.amh(w.w,w.gSH(),new A.bfc(w),new A.bfd(w),v),C.aD,B.di(s,new A.bfe(w),new A.bff(),new A.bfg(),!1,!0,!1,x.m,x.l)],x.p),v,C.ck,v,C.G,!1),C.n,new A.bfh(w)),v,v,v)},
at5(d){var w=B.ah(d).i("b_<1>")
w=B.Q(new B.b_(d,new A.bf9(this),w),w.i("t.E"))
return w}}
A.amh.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.x9("Alle",t===D.Bj,new A.bf5(v),u),new A.x9("Ausgaben",t===D.a_z,new A.bf6(v),u),new A.x9("Erl\xf6se",t===D.a_A,new A.bf7(v),u),new A.x9("Privat",t===D.a_B,new A.bf8(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.x9("Konto "+w+" \xd7",!0,v.f,u))
return B.jh(C.c7,t,C.d1,6,8)}}
A.x9.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aM:C.a7,s=B.ar(9999),r=B.ar(9999),q=B.ar(9999),p=B.cf(v?C.n:C.a8,1)
return B.bt(w,!0,w,B.dr(!1,C.V,!0,s,B.dS(!1,r,!0,B.aG(w,B.f(u,w,w,w,w,B.w(C.h,13,C.E),w,w,w),C.q,w,w,new B.aC(w,w,p,q,w,w,C.B),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.bb),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.N,w)}}
A.Jh.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aRk
w=this.d
if(w.length===0)return D.aRl
v=B.ah(w).i("b_<1>")
u=new B.b_(w,new A.bj7(),v).f1(0,0,new A.bj8())
t=new B.b_(w,new A.bj9(),v).f1(0,0,new A.bja())
s=new B.b_(w,new A.bjb(),v).f1(0,0,new A.bjc())
r=new B.b_(w,new A.bjd(),v).gq(0)
v=w.length
q=$.cU()
p=q.a5(t)
o=A.bF8(u,A.bye("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a5(s)
n=x.p
q=B.b([B.f(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.w(C.h,14,C.E),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.J(q,B.b([C.aK,B.f(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.w(C.m,12,C.k),l,l,l)],n))
if(r>0)C.b.J(q,B.b([C.aK,B.f(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.w(C.Y,12,C.k),l,l,l)],n))
k=B.b([B.be(l,B.a5(q,C.z,C.f,C.i),C.a7,l,C.A,l,l,3),C.M],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.J(k,B.b([new A.ajm(w[m],l),C.F],n))
return B.a5(k,C.a9,C.f,C.i)}}
A.ajm.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.av(n).length!==0)===!0){n.toString
n=C.c.av(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.ad(B.b([B.ao(B.f(n,p,2,C.ae,p,B.w(C.h,14,C.E),p,p,p),1),C.ah,A.bIz(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.f($.cZ().a5(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bFU(w),p,1,C.ae,p,B.w(C.m,12,C.k),p,p,p)
v=C.d.ab(o.y,1)
t=$.cU()
s=t.a5(o.w)
t=t.a5(o.x)
r=o.gamp()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aK,w,C.b3,B.f("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ae,p,B.w(C.m,12,C.k),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.J(q,B.b([C.aK,B.ad(B.b([D.aer,C.c3,B.ao(B.f("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.w(C.Y,11,C.k),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.be(p,B.a5(q,C.z,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xi.prototype={
p(d){var w=null
return B.be(w,B.ad(B.b([B.bN(this.e,this.d,w,w),C.ah,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a7,w,C.A,w,w,3)}}
A.yY.prototype={
d9(d,e){var w=null,v=e.ak($.r_(),x.P),u=e.ak($.bB1(),x.aN)
return B.nq(B.da(B.b([new B.f9("Finanzen","Dashboard",new A.ahU(e.ak($.bAZ(),x.c).gjg(),new A.aHw(this,d,e),new A.aHx(this,d,e),new A.aHy(d),new A.aHz(d),new A.aHA(d),new A.aHB(this,d,e,v),w),w),C.aD,new A.apP(v,w),C.c4,D.ahG,C.c4,B.di(u,new A.aHC(),new A.aHD(),new A.aHE(),!1,!0,!1,x.d,x.l)],x.p),w,C.ck,w,C.G,!1),C.n,new A.aHF(e))},
JQ(d,e){return this.aMP(d,e)},
aMP(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$JQ=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bAZ()
w=3
return B.k(e.aC(0,n.ghQ(),x.F).Hk(0),$async$JQ)
case 3:m=g
if(d.e==null){w=1
break}t=e.aC(0,n,x.c)
s=t.ghf(t)==null
r=t.ghf(t)
if(r instanceof B.vk)q=r.a
else q=r==null?null:J.ak(r)
if(s)p="sevDesk synchronisiert: "+B.h(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.O(x.q).f
o=s?C.K:D.a8k
n.aN(B.bZ(null,null,null,null,null,C.r,null,B.f(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JQ,v)},
BK(d,e){return this.axZ(d,e)},
axZ(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BK=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aC(0,$.bAZ().ghQ(),x.F).LX(),$async$BK)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aN(D.aCS)
w=1
break}t=B.oS(C.v,10)
w=4
return B.k($.bSo().u6(s,"finanzauswertung.pdf",t,null,null,null),$async$BK)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BK,v)},
BL(d,e,f){return this.aKm(d,e,f)},
aKm(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BL=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.h3(null,null,!0,null,new A.aHt(f,d),d,null,!0,!0,x.cJ),$async$BL)
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
A.ahU.prototype={
p(d){var w=this,v=null,u=A.WU(C.n,F.fW,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.WU(v,D.ad8,v,w.r,"Gesellschafter-Freigaben"),s=A.WU(v,D.abo,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.WU(v,D.yk,v,r?v:w.d,"sevDesk synchronisieren"),p=A.WU(C.Y,C.fU,C.Y,r?v:w.e,"PDF-Export")
return B.ad(B.b([u,C.aS,t,C.aS,s,C.aS,q,C.aS,p,C.aS,A.WU(C.al,C.fV,C.al,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.anr.prototype={
p(d){var w,v=this,u=null,t=B.ar(12),s=B.ar(12),r=B.ar(12),q=v.w
if(q==null)q=C.a8
q=B.cf(q,1)
w=v.r
if(w==null)w=C.h
return B.tU(B.dr(!1,C.V,!0,t,B.dS(!1,s,!0,B.aG(u,B.bN(v.c,w,u,20),C.q,u,u,new B.aC(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a7,0,u,u,u,u,u,C.bb),u,v.d,u,u)}}
A.apP.prototype={
d9(d,e){var w=null,v=this.e,u=$.cZ(),t=x.p
return B.be(w,B.a5(B.b([D.aa1,C.F,B.ad(B.b([D.ae3,C.ao,B.ao(B.f(u.a5(v.a)+" \u2013 "+u.a5(v.b),w,w,w,w,B.w(C.h,16,C.E),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jh(C.c7,B.b([new A.JN("Monat",new A.bmq(e),w,w),new A.JN("Jahr (YTD)",new A.bmr(e),w,w),new A.JN("Zeitraum w\xe4hlen \u2026",new A.bms(this,d,e),D.ac2,w)],t),C.d1,6,8)],t),C.z,C.f,C.i),w,w,C.A,w,w,3)},
Ja(d,e){return this.aJg(d,e)},
aJg(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Ja=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aW(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.axt(new A.bmp(),d,B.bE(B.b1(t)-5,1,1,0,0,0,0),new B.lU(s.a,s.b,x.bz),B.bE(B.b1(t)+1,1,1,0,0,0,0),C.ec),$async$Ja)
case 2:r=g
if(r!=null)e.aC(0,$.r_().ghQ(),x.V).uo(0,new E.m_(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Ja,v)}}
A.JN.prototype={
p(d){var w=null,v=B.ar(9999),u=B.ar(9999),t=B.ar(9999),s=B.cf(C.a8,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.J(q,B.b([B.bN(p,C.h,w,14),C.aS],r))
q.push(B.f(this.c,w,w,w,w,B.w(C.h,13,C.E),w,w,w))
return B.dr(!1,C.V,!0,v,B.dS(!1,u,!0,B.aG(w,B.ad(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aC(w,w,s,t,w,w,C.B),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a7,0,w,w,w,w,w,C.bb)}}
A.Kc.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jz(new A.btb(this)),C.c4,D.aa7,C.t],q),o=this.c.w
if(o.length===0)p.push(B.be(r,B.ad(B.b([D.aex,C.ah,B.ao(B.f("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.w(C.m,14,C.k),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a7,r,C.A,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.J(w,B.b([new A.ahS(t.a,t.b,s,A.bFU(s),t.d,new A.btc(d,t),r),C.F],q))}p.push(B.a5(w,C.j,C.f,C.i))}return B.a5(p,C.a9,C.f,C.i)}}
A.ahS.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aM:C.a7,q=B.cf(s?C.n:C.a8,1),p=B.ar(4),o=v.c,n=x.p
t=B.b([B.aG(C.T,B.f(C.c.a1(o,0,1),u,u,u,u,B.bC(C.h,14,C.p),u,u,u),C.q,u,u,new B.aC(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.ah,B.ao(B.a5(B.b([B.f(o+" \xb7 "+v.d,u,1,C.ae,u,B.w(C.h,14,C.E),u,u,u),B.f(v.f,u,u,u,u,B.w(C.m,12,C.k),u,u,u)],n),C.z,C.f,C.i),1),A.bIz(o,v.r,t)],n)
C.b.J(t,B.b([C.c3,C.Fy],n))
w=B.be(u,B.ad(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.bt(u,!0,u,B.dS(!1,B.ar(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u)}}
A.IS.prototype={
p(d){var w=null
return B.be(C.Y,B.ad(B.b([D.af8,C.ah,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fm,w,C.A,w,w,3)}}
A.a2F.prototype={
p(d){var w=null,v=this.d,u=this.c,t=A.bye(v,this.e,u),s=A.bF8(u,t),r=B.w(A.bPV(v,t),15,C.E)
return B.f(s,w,w,w,A.cax(v,t)+" "+$.cU().a5(Math.abs(u)),r,w,w,w)}}
A.a8p.prototype={
d9(d,e){return B.di(e.ak($.bHn(),x.cn),new A.aMs(),new A.aMt(),new A.aMu(),!1,!0,!1,x.X,x.l)}}
A.Jc.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aAa,C.t,B.jz(new A.biI(v,q,100-t.w.a,w,p)),C.t,new A.amJ(u),C.aD,D.aA9,C.t,new A.aiO(t,u),C.aD,D.aA4,C.t,B.bt(u,!0,u,B.kd(u,B.be(u,new A.V4(t,220,u),u,u,C.A,u,u,3),C.a_,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.biJ(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aD,D.azW,C.t,B.bt(u,!0,u,B.kd(u,new A.Vl(t,200,!1,u),C.a_,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.biK(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aD,D.aA1,C.t,new A.aoB(t,u),C.aD,D.azY,C.t,new A.akG(t,u)],s)
if(t.f.length!==0)C.b.J(r,B.b([C.aD,D.aA6,C.t,new A.auv(t,u)],s))
return B.a5(r,C.a9,C.f,C.i)}}
A.amJ.prototype={
p(d){var w=null
return B.f("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.w(C.m,11,C.k).cC(1.35),w,w,w)}}
A.ao4.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.Y:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.biL(m,d):l
r=x.p
q=B.b([B.ao(B.f(m.c.toUpperCase(),l,l,l,l,B.w(C.m,10,C.p).fA(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cf(C.Y,0.8)
n=B.ar(4)
q.push(B.aG(l,B.f("Ziel "+p,l,l,l,l,B.w(C.Y,9,C.p),l,l,l),C.q,l,l,new B.aC(l,l,o,n,l,l,C.B),l,l,l,l,C.nN,l,l,l))}q=B.b([B.ad(q,C.j,l,C.f,C.i,0,l,l),C.aK,B.NR(C.d4,B.f(m.d,l,l,l,l,B.bC(w,22,C.p),l,l,l),C.hP)],r)
p=m.e
if(p!=null)q.push(B.f(p,l,2,C.ae,l,B.w(C.m,10,C.aG),l,l,l))
q.push(C.d_)
q.push(B.ad(B.b([new A.VW("Vormonat",m.r,l),C.c3,new A.VW("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.d_)
q.push(B.ao(new A.ZI(v,m.y,m.z,l),1))
return B.bt(l,u,l,B.kd(l,B.be(l,B.a5(q,C.z,C.f,C.i),l,l,C.bP,l,l,3),C.a_,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.VW.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ar(4)
return B.aG(r,B.f(this.c+" \u2014",r,r,r,r,B.w(C.m,9,C.p),r,r,r),C.q,r,r,new B.aC(C.a8,r,r,q,r,r,C.B),r,r,r,r,C.nN,r,r,r)}w=q>=0
v=w?C.al:C.Y
u=v.e1(0.12)
t=B.cf(v,0.7)
s=B.ar(4)
return B.aG(r,B.ad(B.b([B.bN(w?F.aba:D.ab9,v,r,10),C.Zq,B.f(this.c+" "+C.d.ab(q,1)+" %",r,r,r,r,B.w(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aC(u,r,t,s,r,r,C.B),r,r,r,r,C.nN,r,r,r)}}
A.ZI.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eF(v,j[v]))
u=C.b.jM(j,new A.bsd())
t=C.b.jM(j,new A.bse())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bsf(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6L(k,!1)
w=B.b([A.aMF(k,2,A.azI(!1,C.n.e1(0.16),0,k,!0,D.wp),C.n,0.35,k,D.Ez,k,!0,!1,!0,!1,D.G6,!1,10,D.YT,!0,C.lG,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Pj(A.bCL(k,k,k,D.aoc,l,D.Ck,D.Ev,D.EA,w,D.ahT,k,m,k,n,D.Ye,D.aod,D.aao),C.ap,C.a5,k,k)}}
A.V4.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aQq
w=C.b.f1(p,0,new A.b8n())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.azR(B.b([A.a2w(q,q,D.BL,q,C.n,q,q,q,r.b,6),A.a2w(q,q,D.BL,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bP(A.bIx(A.azK(q,q,u,q,q,A.a6L(q,!1),q,new A.z_(!0,!0,q,new A.b8o(),A.a0X(),!1,q,A.axd(),A.a0X()),q,v,q,q,new A.vo(!0,new A.pu(16,q,new A.qq(!0,new A.b8p(this),46,q),!0),D.kD,D.kD,new A.pu(16,q,new A.qq(!0,new A.b8q(p),26,q),!0)))),this.d,q)},
aM2(d){if(Math.abs(d)>=1000)return C.d.ab(d/1000,1)+" k"
return C.d.ab(d,0)}}
A.Vl.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.af(v,new A.b9q(),w),x.i)
C.b.J(o,new B.af(u,new A.b9r(),w))
t=C.b.f1(o,0,new A.b9s())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.azR(B.b([A.a2w(q,q,q,q,C.n,q,q,q,v[s],14),A.a2w(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bP(A.bIx(A.azK(q,q,n,q,q,A.a6L(q,!1),q,D.EA,q,o,q,q,new A.vo(!0,D.kD,D.kD,D.kD,new A.pu(16,q,new A.qq(!0,new A.b9t(p),26,q),!0)))),this.d,q)
return this.e?r:B.be(q,r,q,q,C.A,q,q,3)}}
A.aoB.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aQp
w=new B.af(l,new A.bjr(),B.ah(l).i("af<1,G>")).jM(0,new A.bjs())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.f(r.b,m,m,m,m,B.w(C.h,14,C.p),m,m,m)
p=$.cU()
o=r.d
n=new B.b0(4,4)
o=B.b([new B.i_(C.ai,C.f,C.i,C.j,m,C.aW,m,0,B.b([new B.ix(1,C.cR,B.a5(B.b([q,B.f(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a5(r.f),m,m,m,m,B.w(C.m,12,C.aG),m,m,m)],v),C.z,C.f,C.i),m),C.ao,B.f(p.a5(o),m,m,m,m,B.bC(C.h,16,C.p),m,m,m)],v),m),C.d_,new B.E_(new B.d4(n,n,n,n),C.bu,B.zP(C.a8,m,8,C.d.bo(o/w,0,1),D.BA),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a10(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.J(u,o)}return B.be(m,B.a5(u,C.j,C.f,C.i),m,m,C.A,m,m,3)}}
A.akG.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ao(new A.CJ("Aktive Kunden",""+s,u),1)
w=B.ao(new A.CJ("K\xe4ufe",""+t.a,u),1)
v=$.cU()
return B.be(u,B.ad(B.b([s,w,B.ao(new A.CJ("\xd8-Warenkorb",v.a5(t.d),u),1),B.ao(new A.CJ("Umsatz/Kunde",v.a5(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.A,u,u,3)}}
A.CJ.prototype={
p(d){var w=null
return B.a5(B.b([B.f(this.c.toUpperCase(),w,w,w,w,B.w(C.m,10,C.p).fA(0.6),w,w,w),C.b3,B.f(this.d,w,w,w,w,B.bC(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.auv.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.buu(),B.ah(q).i("af<1,G>")).jM(0,new A.buv()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.b0(4,4)
t=B.b([new B.i_(C.ai,C.f,C.i,C.j,r,C.aW,r,0,B.b([new B.ix(1,C.cR,B.f(u.b,r,1,C.ae,r,B.w(C.h,13,C.p),r,r,r),r),B.f(""+u.c+"\xd7 ",r,r,r,r,B.w(C.m,12,C.E),r,r,r),B.f($.cU().a5(t),r,r,r,r,B.w(C.h,13,C.p),r,r,r)],o),r),C.aK,new B.E_(new B.d4(s,s,s,s),C.bu,B.zP(C.a8,r,6,C.d.bo(t/p,0,1),D.BA),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a10(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.F)
C.b.J(n,t)}return B.be(r,B.a5(n,C.j,C.f,C.i),r,r,C.A,r,r,3)}}
A.xd.prototype={
p(d){var w=null
return B.be(w,B.f(this.c,w,w,w,w,B.w(C.m,13,C.k),w,w,w),C.a7,w,C.A,w,w,3)}}
A.aiO.prototype={
d9(d,e){return B.di(e.ak($.bB_(),x.fM),new A.b6h(this,d,e),new A.b6i(),new A.b6j(),!1,!0,!1,x.h,x.l)}}
A.BI.prototype={
U(){return new A.UF()},
aZc(){return this.d.$0()}}
A.UF.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aG()
q.d=new B.aW(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.T(w,"as_of"))!=null){w.toString
u=B.du(J.ak(J.T(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.q0[t].a
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
for(w=0;w<8;++w){v=D.q0[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ab(u,2)
s=B.an(s,".",",")
t.jY(0,t.a.yg(C.ax,C.aV,s))}}this.H(new A.b65())},
aFR(){this.a4z(D.ass)
this.c.O(x.q).f.aN(D.aDe)},
Ir(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ir=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.q0[e].a)
q=a2
t=4
w=7
return B.k($.a6D.cg().w2(B.b(["csv","txt"],x.s),C.nX,!0),$async$Ir)
case 7:p=a5
a2=p
o=a2==null?null:J.L1(a2.a).c
if(o==null){w=1
break}n=C.aL.ae7(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Cp.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ay0(l,B.bS("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.av(J.T(k,0)).toLowerCase()
i=J.Dd(q,j)?j:D.auG.h(0,j)
if(i==null)continue
d=C.c.av(C.b.mb(J.bVB(k,1)))
d=B.an(d,"\u20ac","")
d=B.an(d," ","")
d=B.an(d,".","")
h=B.an(d,",",".")
g=B.fJ(h)
if(g!=null)J.fx(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aN(D.aCP)
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
w=t}for(;;)switch(w){case 0:q.H(new A.b66(q))
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
q.c.O(x.q).f.aN(D.aCT)
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
if(q.c!=null)q.H(new A.b67(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IC,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.f("Bilanzwerte erfassen",r,r,r,r,B.bC(C.h,18,C.p),r,r,r),p=s.f?r:new A.b69(s,d),o=s.d
o===$&&B.a()
p=B.f6(D.ae5,B.f("Stichtag: "+C.c.a1(o.dP(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ao(B.f6(D.afj,D.aJ6,o?r:s.gaEN(),r),1)
v=x.p
w=B.b([p,C.F,B.ad(B.b([w,C.ao,B.ao(B.f6(D.af4,D.aIT,o?r:s.gaFQ(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.q0[u]
o=s.e
o===$&&B.a()
C.b.J(w,B.b([B.dj(r,C.ar,!1,r,!0,C.r,r,B.dq(),o.h(0,p.a),r,r,r,r,r,2,new B.bO(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a_,!0,r,!0,r,!1,r,C.aw,r,r,r,r,C.eD,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.A,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ac,r,C.X,r,r,r,r),C.F],v))}w.push(B.f("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.w(C.m,11,C.k),r,r,r))
p=B.bP(B.eA(B.a5(w,C.a9,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.d9(C.bY,r,r,o?r:new A.b6a(d),r,r)
o=o?r:s.gaFz()
t=B.dJ(C.n,C.h,r,r,r,r,r)
return B.i8(B.b([w,B.dw(s.f?F.Zt:C.di,o,t)],v),C.o,p,q)}}
A.bm.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a10(this.gbs(),e.gbs())
else w=!0
return w},
gA(d){return(B.f7(B.N(this))^B.bQI(this.gbs()))>>>0},
j(d){B.bJO()
return B.N(this).j(0)}}
A.LQ.prototype={
U(){return new A.UG(B.A(x.S,x.J),new A.azU(B.A(x.x,x.T)),null,null)}}
A.UG.prototype={
p(d){var w,v=this,u=v.a2q(),t=v.CW
t.toString
t=v.a2r(t.au(0,v.gfl().gt(0)))
w=v.a2r(u)
v.a.toString
return new A.LM(new A.a2v(t,w,null),u,null)},
a2r(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.azR(s.c,s.d,!1,r,s.a))}return d.aRh(w)},
a2q(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vi(t.ch)
if(r)s=w.a
r=t.y
t=t.aSb(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aRi(A.bBt(!1,!0,!0,v.d,v.c,u.gatm(),v.f,v.e))}return t},
atn(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagA()||e==null||e.a==null){w=v.cy
v.H(w.gaQG(w))
return}v.H(new A.b6m(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2q(),new A.b6n(w)))}}
A.o7.prototype={
VW(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.azK(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aSb(d,e){return this.VW(null,null,d,e)},
aRi(d){return this.VW(null,d,null,null)},
aRh(d){return this.VW(d,null,null,null)},
XR(d,e,f){var w,v,u,t=A.kI(d.ch,e.ch,f,A.c9e(),x.dB),s=B.aj(d.CW,e.CW,f),r=A.bJW(d.d,e.d,f),q=A.bLT(d.e,e.e,f),p=A.bJU(d.c,e.c,f),o=e.a
o=A.a6L(B.a2N(d.a.b,o.b,f),o.a)
w=B.aj(d.y,e.y,f)
v=B.aj(d.x,e.x,f)
u=B.aj(d.z,e.z,f)
r=A.azK(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bJQ(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.azJ.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fS.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.azS(),B.ah(v).i("af<1,G>")).jM(0,new A.azT())
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
A.a2s.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2x.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.afl.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2y.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.DB.prototype={
gbs(){return[this.a,this.b,C.bs,C.x,null]}}
A.LR.prototype={}
A.a2z.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.y7.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.aiK.prototype={}
A.aiR.prototype={}
A.aiS.prototype={}
A.aiU.prototype={}
A.aiV.prototype={}
A.aiW.prototype={}
A.aiX.prototype={}
A.aiY.prototype={}
A.aiZ.prototype={}
A.azU.prototype={
Vi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uZ(0,0,!1)
v=new A.zS(d,x.x)
u=this.a
if(u.aF(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uZ(t,u,!0)}w=null
try{w=C.b.oZ(d,new A.azV())}catch(s){return new A.uZ(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uZ(q,r,!1)
u.m(0,v,j)
return j}}
A.uZ.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aiT.prototype={}
A.azW.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0y(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ad4(t,A.bBs(w,t.a),u)
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
new B.j0(p,B.ah(p).i("j0<1>")).aD(0,new A.azX(t,q,r,s))
w.push(new A.a7s(q))}return w},
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
a4=B.R5(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.R5(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.L:f).gt(0)
k.seY(null)
a6=b2.f.e0()
v.drawRRect(B.lI(a4),a6)
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
v.drawRRect(B.lI(a4),a6)
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
n=$.ap()
k=B.b([],s)
k.push(new B.hq(a4))
n=A.aD4(new B.cp(n.r,C.aj,null,null,k),o.r)
a6=b2.r.e0()
k=n.e
v.drawPath((k==null?n.e=new B.mX(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTG(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bm(a5,a5,a5,a5,B.cL(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lK().a_B(a8,a7.b),a7.a),C.bs,C.x,a5,b6.c,C.by)
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
if(v!==D.aLV)j=v===D.a_9&&s>=q
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
r=$.lK().KU(new B.I(v,t),d).b
s=$.lK()
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
a2.c=a1.b}a9.Wy(d,new A.azY(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
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
q=B.R5(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a6:new B.b0(i.z,i.Q)
p=v?C.a6:new B.b0(i.x,i.y)
o=v?new B.b0(i.e,i.f):C.a6
q=B.R5(w,s,u,r,t,p,o,v?new B.b0(i.r,i.w):C.a6)}else q=B.bDs(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a6)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xc(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ad4(b2,A.bBs(a8,b2.a),a8.ch)
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
break}++a3}return new A.a2z(d,q,a0,o,a2,a1,new A.eF(d.a,v),new B.r(n,t))}}return null}}
A.a7s.prototype={}
A.a2v.prototype={
bn(d){var w,v=this.e,u=B.bA(d,null,x.w).w.gcO(),t=new A.azW()
t.a1K()
$.ap()
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
t=new A.acv(this.d,v,u,t,d,C.bc,new B.bu(),B.aM(x.j))
t.bl()
t.Zt(v.cy)
t.ag3()
return t},
bx(d,e){e.sip(0,this.d)
e.sZd(this.e)
e.scO(B.bA(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acv.prototype={
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
u.fZ.ih(w,new A.a30(t,v),new A.wb(u.aE,u.i9,u.d3,x.Q))
s.restore()},
a_u(d){var w=this,v=w.gC(0)
return new A.LR(w.fZ.Xc(d,v,new A.wb(w.aE,w.i9,w.d3,x.Q)))}}
A.a2l.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.DA.prototype={
L(){return"AxisSide."+this.b}}
A.tT.prototype={}
A.qq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adW.prototype={
gbs(){return[!1,0,0,0]}}
A.pu.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vo.prototype={
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
A.z_.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pR.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afn.prototype={
gbs(){return[this.a,this.b]}}
A.R9.prototype={
gbs(){return[this.a,this.b]}}
A.nb.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nB.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l0.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ls.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7D.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afL.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.NK.prototype={
gbs(){return[this.a,this.b,!0]}}
A.vn.prototype={}
A.NT.prototype={
aex(d,e,f){var w,v
$.ap()
w=B.b2()
v=this.a
w.r=v.gt(v)
w.b=C.bl
d.iU(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.aiF.prototype={}
A.aiJ.prototype={}
A.am_.prototype={}
A.amo.prototype={}
A.amp.prototype={}
A.amr.prototype={}
A.ams.prototype={}
A.anh.prototype={}
A.ang.prototype={}
A.ani.prototype={}
A.ar_.prototype={}
A.asU.prototype={}
A.asV.prototype={}
A.auz.prototype={}
A.avh.prototype={}
A.avg.prototype={}
A.avi.prototype={}
A.azy.prototype={
N4(d,e,f,g,h,i){return new B.io(this.aXj(d,e,f,g,h,i),x.g4)},
aXi(d,e,f,g){return this.N4(d,e,f,!0,g,!0)},
aXj(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$N4(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lK().akh(s,u,v,w)
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
$.ap()
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
if(v==null)v=$.lK().P6(w.a,a1.r-a1.f)
u=$.bAw().N4(a1.w,v,a1.r,!1,a1.f,!1)
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
i=B.lh(n,m)
if(j!=null){p.r=C.I.gt(0)
p.seY(j.mP(0,i))}else{if(k==null)k=C.L
p.r=k.gt(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c5(p.r)
p.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.E2(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lK().P6(w.b,a1.y-a1.x)
u=$.bAw().N4(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.lh(n,m)
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
s=B.lh(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
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
s=B.lh(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
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
i=B.lh(m,l)
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
i=B.lh(m,l)
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
amr(d){var w,v=this,u=null,t=v.d,s=A.bCe(t.d),r=t.a
r=r.a&&A.bWb(r.b)?r.b:u
w=B.b([B.aG(u,v.c,C.q,u,u,new B.aC(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.azA(w)
if(v.gam5())C.b.hB(w,s.$1(!0),new A.B5(D.BH,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam7())C.b.hB(w,s.$1(!0),new A.B5(D.mW,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam6())C.b.hB(w,s.$1(!0),new A.B5(D.BI,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam3())C.b.hB(w,s.$1(!0),new A.B5(D.dT,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jz(new A.azz(this))}}
A.SB.prototype={
U(){return new A.Zw(new B.bo(null,x.eF))}}
A.Zw.prototype={
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
return B.Bv(B.b3v(0,B.aG(v.az2(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adX.prototype={
bn(d){return A.bW3(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.W!==w){e.W=w
e.a8()}}}
A.a2m.prototype={
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
m=r.aJ$}return new A.biR(n<1/0?n:s,t)},
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
A.biR.prototype={}
A.azB.prototype={}
A.k1.prototype={
gbs(){return[this.a,this.b]}}
A.o6.prototype={}
A.aiG.prototype={}
A.aiH.prototype={
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
A.aiI.prototype={}
A.UD.prototype={
l(){var w,v,u
for(w=this.WL$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.B5.prototype={
goE(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d4
case 1:return C.dE
case 2:return C.em
case 3:return C.fh}},
gb0W(){var w=this.d,v=A.bCe(w.d),u=A.bJT(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).ah(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).ah(0,new B.ag(u.a,0,u.c,0))}},
gaiW(){var w=this.d,v=A.bJT(w.a),u=A.bCe(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aY_(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goE().c.d
if(o==null)o=$.lK().P6(d,f-e)
w=p.c
v=w!==D.mW
if((!v||w===D.dT)&&p.d instanceof A.o7){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bBs(u,d)
w=new B.j0(t,B.ah(t).i("j0<1>"))
s=w.gi2(w).eQ(0,new A.b0t(u),x.W).fP(0)}else{r=$.bAw()
w=!v||w===D.dT
v=p.d
q=r.aXi(w?v.w:v.z,o,f,e)
v=B.oI(q,new A.b0u(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ah(s).i("af<1,o6>")
w=B.Q(new B.af(s,new A.b0v(p,e,f,o,g,d),w),w.i("aw.E"))
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
if(w===D.BH||v)j.goE()
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
q.push(B.aG(i,A.c2s(new A.azB(),n,j.aY_(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BI||w===D.dT)j.goE()
return new B.ee(t,i,i,B.bYU(q,C.j,s,i,C.f,C.H,0,i,i,C.aW),i)}}
A.a2B.prototype={
gbs(){return[this.a,this.b]}}
A.a6K.prototype={
gbs(){return[this.a,this.b]}}
A.O_.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6M.prototype={
gacp(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.aA6.prototype={}
A.aGA.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aj1.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.amt.prototype={}
A.LU.prototype={
ih(d,e,f){}}
A.wb.prototype={}
A.hz.prototype={
gdN(){return null},
gagA(){var w,v=this
B.bG()
B.bG()
B.bG()
w=v instanceof A.NZ
if(w)return!0
return!(v instanceof A.NW)&&!(v instanceof A.NV)&&!(v instanceof A.NX)&&!(v instanceof A.NU)&&!w&&!(v instanceof A.NY)}}
A.a6Q.prototype={
gdN(){return this.a.b}}
A.a6R.prototype={
gdN(){return this.a.b}}
A.a6S.prototype={
gdN(){return this.a.b}}
A.NV.prototype={}
A.NW.prototype={}
A.a6V.prototype={
gdN(){return this.a.b}}
A.NY.prototype={}
A.NZ.prototype={
gdN(){return this.a.b}}
A.a6P.prototype={
gdN(){return this.a.b}}
A.a6O.prototype={
gdN(){return this.a.b}}
A.NU.prototype={
gdN(){return this.a.b}}
A.a6T.prototype={
gdN(){return this.a.gdN()}}
A.a6U.prototype={
gdN(){return this.a.gdN()}}
A.NX.prototype={
gdN(){return this.a.gdN()}}
A.GW.prototype={
Zt(d){this.V=d.b
this.W=d.c
this.a4=d.d},
ag3(){var w=this,v=null,u=w.al=B.bD8(v,v)
u.ay=new A.aWF(w)
u.ch=new A.aWG(w)
u.CW=new A.aWH(w)
u.cy=new A.aWI(w)
u.cx=new A.aWJ(w)
u=w.aI=B.HK(v,-1,v)
u.B=new A.aWK(w)
u.a_=new A.aWL(w)
u.V=new A.aWM(w)
u=w.bE=B.a8K(v,w.a4,v)
u.p3=new A.aWN(w)
u.p4=new A.aWO(w)
u.RG=new A.aWP(w)},
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
w.oC(d)}else if(x.gJ.b(d))v.la(new A.a6U(d))},
gNy(d){return new A.aWQ(this)},
gNA(d){return new A.aWR(this)},
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
A.Pj.prototype={
U(){return new A.Xe(B.b([],x.r),B.A(x.S,x.J),new A.aMH(B.A(x.y,x.dj)),null,null)}}
A.Xe.prototype={
p(d){var w,v=this,u=v.a54(),t=v.CW
t.toString
t=v.abW(t.au(0,v.gfl().gt(0)))
w=v.abW(u)
v.a.toString
return new A.LM(new A.a8B(t,w,null),u,null)},
abW(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ah(w).i("af<1,eh>")
w=B.Q(new B.af(w,new A.biX(this,d),v),v.i("aw.E"))
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
if(w){v.H(new A.biV(v))
return}v.H(new A.biW(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a54(),new A.biY(w)))}}
A.q4.prototype={
XR(d,e,f){var w,v,u,t,s,r,q=B.aj(d.f,e.f,f),p=B.aj(d.r,e.r,f),o=B.aj(d.w,e.w,f),n=B.aj(d.x,e.x,f),m=B.aj(d.y,e.y,f),l=B.aj(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a6L(B.a2N(d.a.b,j.b,f),j.a)
w=A.bJQ(d.at,e.at,f)
v=A.bJU(d.c,e.c,f)
u=A.bJW(d.d,e.d,f)
t=A.bLT(d.e,e.e,f)
s=A.kI(d.ch,e.ch,f,A.cbl(),x.cz)
s.toString
r=A.kI(d.CW,e.CW,f,A.cbk(),x.bO)
r.toString
u=A.bCL(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VX(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bCL(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSn(d,e,f,g){return this.VX(null,null,d,e,f,g,null)},
aRN(d){var w=null
return this.VX(w,d,w,w,w,w,w)},
aS8(d,e){var w=null
return this.VX(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eh.prototype={
as1(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oZ(n.a,new A.aMG())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
return A.aMF(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRU(d){return this.adQ(d,null)},
aRW(d){return this.adQ(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Pk.prototype={
gbs(){return[this.a]}}
A.a2u.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mT.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.LP.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yZ.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aMv.prototype={
L(){return"LabelDirection."+this.b}}
A.a6N.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ft.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8C.prototype={
gbs(){return[4,C.fR,16,D.y3,0,120,A.cbn(),!1,!1,!1,0,C.J,A.cbm()]}}
A.ne.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qy.prototype={}
A.rR.prototype={
gbs(){return[this.a,this.b,C.bs,C.x,null]}}
A.tV.prototype={
gbs(){return[this.a,this.b]}}
A.Hn.prototype={
gbs(){return[this.a]}}
A.Pl.prototype={}
A.zN.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.aiP.prototype={}
A.aiQ.prototype={}
A.aj3.prototype={}
A.amn.prototype={}
A.amq.prototype={}
A.aod.prototype={}
A.aoe.prototype={}
A.aof.prototype={}
A.aoh.prototype={}
A.aoi.prototype={}
A.aoj.prototype={}
A.aok.prototype={}
A.asT.prototype={}
A.auy.prototype={}
A.aMH.prototype={
Vi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yG
u=new A.zS(d,x.y)
t=this.a
if(t.aF(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zO(s,r,q,t,!0)}w=null
try{w=C.b.oZ(d,new A.aMI())}catch(p){return D.yG}v=null
try{v=C.b.oZ(w.a,new A.aMJ())}catch(p){return D.yG}o=v.a
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
if(f<m)m=f}e=new A.zO(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zO.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.aog.prototype={}
A.aMK.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacp(0)){v=a3.b
u=v.a
v=v.b
$.ap()
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
s.push(new A.vU(q,i,j,k))}}d.aTH(a3,s,a4)
if(w.gacp(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTF(a2,a3,v,f,new A.Hn(g),a4)}},
aTv(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bCd(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.a_3(o,e,u,f)
s=p.ak9(o,e,t,u,f)
r=p.a_5(o,e,t,u,f,!0)
q=p.ak8(o,e,t,u,f)
p.aTy(d,s,p.a_2(o,e,t,u,f,!0),f,e)
p.aTs(d,q,r,f,e)
p.aTw(d,t,e)
p.aTu(d,t,e,f)}},
aTz(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bCd(a5.a),a8=A.bCd(a6.a)
if(a7.length!==a8.length)throw B.e(B.bM("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
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
a0.seY(null)}$.ap()
a1=new B.mW(C.dG,C.bl,C.eg,C.eC,C.e4).e0()
n=B.dR(new B.K(0,0,t,s))
m=$.bX.b
if(m===$.bX)B.S(B.vS(u))
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
C.b.fV(b3,new A.aMN())
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
if(f===d)B.S(B.rQ(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lG(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lG(q.$2(m,k))))
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
b0=B.lh(a3,a5)
if(a6!=null){f.r=C.I.gt(0)
f.seY(a6.mP(0,b0))}else{if(a4==null)a4=C.L
f.r=a4.gt(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c5(f.r)
f.r=B.aF(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.E2(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rQ(d.a))
f.aex(t,j,new B.r(h,g))}}},
a_4(d,e,f,g,h){var w=this.aka(d,e,f,g,h)
return w},
a_3(d,e,f,g){return this.a_4(d,e,f,g,null)},
aka(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cp($.ap().r,C.aj,null,null,B.b([],x.v)):a5,f=J.U(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
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
A.bD7(s,q.b,q.c,new B.K(v,u,t,w.b))
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
A.bD7(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i1(e,r.r)},
aTw(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.NG(B.NE(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iD:C.eg
u.e=C.eC
u.r=v.gt(0)
u.seY(null)
u.c=f.x
u.r=v.gt(0)
$.lK()
u.z=new B.zW(C.az,w.c*0.57735+0.5)
d.a.i1(A.aD4(e,f.cy).ed(w.b),this.f)},
aTu(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iD:C.eg
q.e=C.eC
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
A.bD7(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c0l(t)
d.a.i1(A.aD4(e,f.cy),s.f)},
aTF(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bQb(b1),b3=J.U(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e2("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lK().a_B(b4,u.b)
s=u.a
r=w.k(0,C.j4)?new B.kB(1):w
q=new B.tQ(new B.fu(s,a8,a8,C.bc,a8,a8,a8,a8,a8,a8,t),C.bs,C.x,r,a8,a8,a8,a8,C.by,a8)
q.agU(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.fR.gey()
k=o+(w-1)*4+(C.fR.gd5(0)+C.fR.gd8(0))
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
t=A.bQa(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lK().KU(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lK().KU(new B.I(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.I.gt(0)
s.c=0}b5.Wy(0,new A.aML(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c33(q.r,q.w)
A:{if(D.EI===a5){a6=a3
break A}if(D.EJ===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wy(0,new A.aMM(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_9(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xc(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akB(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fV(t,new A.aMO())
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
A.vU.prototype={}
A.a8B.prototype={
bn(d){var w,v=this.e,u=B.bA(d,null,x.w).w.gcO(),t=new A.aMK()
t.a1K()
$.ap()
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
w.a=D.a0v
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
t=new A.acI(this.d,v,u,t,d,C.bc,new B.bu(),B.aM(x.j))
t.bl()
t.Zt(v.cx)
t.ag3()
return t},
bx(d,e){e.sip(0,this.d)
e.sZd(this.e)
e.scO(B.bA(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acI.prototype={
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
u.fZ.ih(w,new A.a30(t,v),new A.wb(u.aE,u.i9,u.d3,x.C))
s.restore()},
a_u(d){var w=this,v=w.gC(0)
return new A.Pl(w.fZ.Xc(d,v,new A.wb(w.aE,w.i9,w.d3,x.C)))}}
A.Op.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a30.prototype={
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
$.lK()
s.Zb(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
E2(d,e,f,g){var w=new B.cp($.ap().r,C.aj,null,null,B.b([],x.v))
w.aA(new B.fi(d.a,d.b))
w.aA(new B.cu(e.a,e.b))
this.a.i1(A.aD4(w,g),f)}}
A.zS.prototype={
gbs(){return[this.a]}}
A.aor.prototype={}
A.a3a.prototype={}
A.b3X.prototype={
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
if(d==null)return D.a0H
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
v=B.b7(d,C.vY)
v=v==null?null:v.ay
return v===!0?w.c6(C.mC):w},
akh(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qA)","C(pQ)","G(G,pQ)","C(eF)","~(v,fS)","G(eh,v)","pR(G)","vl(z)","G(G,qA)","bU(G,tT)","R<~>()","v(qy,qy)","xi(B,bJ)","rB(rB)","Jh(op)","qA(@)","vY(@)","rl(z)","wW(@)","IS(B,bJ)","Kc(os)","Jc(oq)","Di(@)","eh(G)","vm(dO<vm>)","a9(G,tT)","ES(dO<aHq>)","pQ(@)","G(vY)","G(wW)","xd(B,bJ)","BI(z)","~()","m_(wM<m_>)","~(hz,LR?)","y7(@)","G(iv)","C(fS)","~(v,iv)","~(@)","k1(o6)","c(o6)","k1(by<v,G>)","k1(G)","o6(k1)","~(hz,Pl?)","eh(eh)","R<os>(c4<os>)","zN(@)","R<op>(c4<op>)","tV(v)","vn(eF,G,eh,v)","rR(ne)","v(v,v,G)","v(vU,vU)","G(fS)","R<oq>(c4<oq>)","yX(eu<B?>)","fS(fS,fS,G)","iv(iv,iv,G)","mS(mS,mS,G)","DB?(fS,v,iv,v)","F(fS)","c(G,tT)","eF(eF,eF,G)","C(G)","nb(nb,nb,G)","nB(nB,nB,G)","l0(l0,l0,G)","ls(ls,ls,G)","i(l0)","i(ls)","eh(eh,eh,G)","mT(mT,mT,G)","vn(eF,G,eh,v{size:G?})","C(eF,eh)","G(r,r)","u<tV>(eh,u<v>)","~(xf)","u<rR>(u<ne>)","F(ne)","C(eh)"])
A.aHl.prototype={
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
r=A.bxi(l.h(0,"amount_net"))
q=A.bxi(l.h(0,"amount_tax"))
p=A.bxi(l.h(0,"amount_gross"))
o=A.bxi(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.ak(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.ak(m)
l=l.h(0,"source_account_code")
return new A.pQ(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.ak(l))},
$S:z+27}
A.byf.prototype={
$1(d){if(!this.a)return d
return d===D.fu?D.li:D.fu},
$S:z+13}
A.aHm.prototype={
$1(d){var w=B.cF(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qA(J.ak(v==null?"":v),A.pm(w.h(0,"revenue_net")),A.pm(w.h(0,"expense_net")),A.pm(w.h(0,"result_net")))},
$S:z+15}
A.aHn.prototype={
$1(d){var w,v,u,t=B.cF(x.f.a(d),x.N,x.z),s=B.ai(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.ai(t.h(0,"code"))
v=A.pm(t.h(0,"gross"))
u=B.b3(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.vY(s,r,w,v,u,A.pm(t.h(0,"avg_basket")))},
$S:z+16}
A.aHo.prototype={
$1(d){var w,v=B.cF(x.f.a(d),x.N,x.z),u=B.ai(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.b3(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wW(u,t,w,A.pm(v.h(0,"gross")))},
$S:z+18}
A.aHH.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.U(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.Di(v,u,J.ak(t==null?"expense":t),A.uD(w.h(d,"net")),A.uD(w.h(d,"tax")),A.uD(w.h(d,"gross")))},
$S:z+22}
A.by8.prototype={
$1(d){return new A.vm(d.ak($.bH(),x.A))},
$S:z+24}
A.by9.prototype={
$1(d){return new A.ES(d.ak($.bUS(),x.D))},
$S:z+26}
A.bA5.prototype={
$1(d){return E.aHp()},
$S:z+33}
A.bya.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1u(),x.a).Gq(w)},
$S:z+47}
A.by6.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1u(),x.a).Gb(w)},
$S:z+49}
A.by7.prototype={
$1(d){var w=d.ak($.r_(),x.P)
return d.ak($.a1u(),x.a).Gl(w)},
$S:z+56}
A.by5.prototype={
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
A.aHk.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1u(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHj.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1u(),x.a).LY(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfh.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbD()
r=$.bB0()
if(s.e==null)B.S(B.a_(y.b))
s.gcf().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bfc.prototype={
$1(d){var w=this.a
return w.H(new A.bfb(w,d))},
$S:z+78}
A.bfb.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bfd.prototype={
$0(){var w=this.a
return w.H(new A.bfa(w))},
$S:0}
A.bfa.prototype={
$0(){return this.a.x=null},
$S:0}
A.bfg.prototype={
$0(){return F.uU},
$S:88}
A.bff.prototype={
$2(d,e){return new A.xi("Buchungen konnten nicht geladen werden: "+B.h(d),C.Y,F.oe,null)},
$S:z+12}
A.bfe.prototype={
$1(d){return new A.Jh(d,this.a.at5(d.b),null)},
$S:z+14}
A.bf9.prototype={
$1(d){var w=this.a
if(w.gSH()!=null&&d.c!==w.gSH())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bf5.prototype={
$0(){return this.a.e.$1(D.Bj)},
$S:0}
A.bf6.prototype={
$0(){return this.a.e.$1(D.a_z)},
$S:0}
A.bf7.prototype={
$0(){return this.a.e.$1(D.a_A)},
$S:0}
A.bf8.prototype={
$0(){return this.a.e.$1(D.a_B)},
$S:0}
A.bj7.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bj8.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bj9.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bja.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bjb.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bjc.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bjd.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aHF.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bB1()
if(s.e==null)B.S(B.a_(y.b))
s.gcf().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHw.prototype={
$0(){return this.a.JQ(this.b,this.c)},
$S:0}
A.aHx.prototype={
$0(){return this.a.BK(this.b,this.c)},
$S:0}
A.aHy.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.aHv(),null,w),w)},
$S:0}
A.aHv.prototype={
$1(d){return F.DC},
$S:z+17}
A.aHz.prototype={
$0(){return B.pW(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aHA.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.aHu(),null,w),w)},
$S:0}
A.aHu.prototype={
$1(d){return D.aai},
$S:z+7}
A.aHB.prototype={
$0(){var w=this
return w.a.BL(w.b,w.c,w.d)},
$S:0}
A.aHE.prototype={
$0(){return F.uU},
$S:88}
A.aHD.prototype={
$2(d,e){return new A.IS(B.h(d),null)},
$S:z+19}
A.aHC.prototype={
$1(d){return new A.Kc(d,null)},
$S:z+20}
A.aHt.prototype={
$1(d){var w=null,v=this.a,u=$.cZ()
v=B.f("Die Finanzauswertung f\xfcr "+u.a5(v.a)+" \u2013 "+u.a5(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.i8(B.b([B.d9(C.bY,w,w,new A.aHr(u),w,w),B.dw(F.mD,new A.aHs(u),B.dJ(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mE)},
$S:46}
A.aHr.prototype={
$0(){B.aU(this.a,!1).cu(!1)
return null},
$S:0}
A.aHs.prototype={
$0(){B.aU(this.a,!1).cu(!0)
return null},
$S:0}
A.bmq.prototype={
$0(){var w=this.a.aC(0,$.r_().ghQ(),x.V),v=E.aHp()
w.uo(0,v)
return v},
$S:0}
A.bmr.prototype={
$0(){var w=this.a.aC(0,$.r_().ghQ(),x.V),v=new B.aW(Date.now(),0,!1),u=new E.m_(B.bE(B.b1(v),1,1,0,0,0,0),v)
w.uo(0,u)
return u},
$S:0}
A.bms.prototype={
$0(){return this.a.Ja(this.b,this.c)},
$S:0}
A.bmp.prototype={
$2(d,e){return new B.p3(B.W(d).aRl(B.W(d).ax.aSd(C.h,C.n)),e,null)},
$S:1034}
A.btb.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cU(),p=E.rP(!1,C.lp,"Umsatz 7 %",q.a5(r.a),u),o=E.rP(!1,C.lp,"Umsatz 19 %",q.a5(r.b),u),n=E.rP(!0,D.ac1,"Umsatz netto",q.a5(r.c),u),m=r.d
m=E.rP(!1,D.ac0,"Aufwand",A.bF8(m,A.bye(t,"",m)),A.bPV(t,A.bye(t,"",m)))
w=r.e
v=q.a5(w)
return E.aJT(1.7,B.b([p,o,n,m,E.rP(!0,C.of,"Ergebnis",v,w<0?C.Y:C.al),E.rP(!1,C.fV,"USt-Saldo",q.a5(r.f-r.r),u)],x.p),s,12,12,C.ir,!0)},
$S:142}
A.btc.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dF(new A.bta(this.b),null,w),w)},
$S:0}
A.bta.prototype={
$1(d){return new A.vl(this.a.a,null)},
$S:z+7}
A.aMu.prototype={
$0(){return D.awN},
$S:88}
A.aMt.prototype={
$2(d,e){var w=null
return B.be(C.Y,B.f("KPIs konnten nicht geladen werden: "+B.h(d),w,w,w,w,B.w(C.h,13,C.k),w,w,w),C.fm,w,C.A,w,w,3)},
$S:168}
A.aMs.prototype={
$1(d){return new A.Jc(d,null)},
$S:z+21}
A.biI.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cU(),i=j.a5(k.c),h=l.w,g=l.d,f=B.ah(g).i("af<1,G>"),e=f.i("aw.E"),d=B.Q(new B.af(g,new A.bix(),f),e)
i=A.jV(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a5(r.b)
w=B.Q(new B.af(g,new A.biy(),f),e)
d=A.jV(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a5(k.e)
w=B.Q(new B.af(g,new A.biz(),f),e)
k=A.jV(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ab(h.b,1)
v=B.Q(new B.af(g,new A.biA(),f),e)
w=A.jV(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ab(h.a,1)
u=B.Q(new B.af(g,new A.biB(),f),e)
v=A.jV(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ab(r.c,1)
t=B.Q(new B.af(g,new A.biC(),f),e)
u=A.jV(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ab(h.c,1)
s=B.Q(new B.af(g,new A.biD(),f),e)
t=A.jV(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a5(h.d)
s=B.Q(new B.af(g,new A.biE(),f),e)
h=A.jV(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a5(l.r.d)
m=B.Q(new B.af(g,new A.biF(m),f),e)
m=A.jV(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a5(l)
l=B.Q(new B.af(g,new A.biG(l),f),e)
l=A.jV(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ab(j,1)
j=B.Q(new B.af(g,new A.biH(j),f),e)
return E.aJT(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jV(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ir,!0)},
$S:142}
A.bix.prototype={
$1(d){return d.b},
$S:z+0}
A.biy.prototype={
$1(d){return d.b/30},
$S:z+0}
A.biz.prototype={
$1(d){return d.d},
$S:z+0}
A.biA.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.biB.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.biC.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.biD.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.biE.prototype={
$1(d){return d.d},
$S:z+0}
A.biF.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.biG.prototype={
$1(d){return this.a},
$S:z+0}
A.biH.prototype={
$1(d){return this.a},
$S:z+0}
A.biJ.prototype={
$0(){return A.bF3(this.b,1.45,new A.V4(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.biK.prototype={
$0(){return A.bF3(this.b,1.6,new A.Vl(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bxd.prototype={
$1(d){var w=this,v=null,u=B.ar(16),t=x.p,s=B.b([B.ad(B.b([B.ao(B.f(w.a,v,v,v,v,B.bC(C.h,18,C.p),v,v,v),1),B.fg(v,v,D.aew,v,v,new A.bxc(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.J(s,B.b([B.f(w.b,v,v,v,v,B.w(C.m,12,C.aG),v,v,v),C.F],t))
s.push(C.t)
s.push(B.bP(new B.mR(w.c,w.d,v),v,17976931348623157e292))
return B.a62(v,C.o,new B.ac(C.am,B.a5(s,C.z,C.f,C.H),v),v,v,v,C.ft,C.vj,v,new B.d1(u,C.J),v)},
$S:1035}
A.bxc.prototype={
$0(){return B.aU(this.a,!1).eV()},
$S:0}
A.biL.prototype={
$0(){var w=this.a,v=B.an(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bF3(this.b,2.4,new A.ZI(w.w,w.y,w.z,null),C.b.cb(u," \xb7 "),v)
return null},
$S:0}
A.bsd.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.bse.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bsf.prototype={
$1(d){return A.aMF(null,1.4,null,C.Y,0.35,D.ajk,D.Ez,null,!1,!1,!1,!1,D.G6,!1,10,D.YT,!0,C.lG,B.b([new A.eF(0,d),new A.eF(this.a,d)],x.U))},
$S:z+23}
A.b8n.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+8}
A.b8p.prototype={
$2(d,e){var w=null
return B.f(this.a.aM2(d),w,w,w,w,B.w(C.m,10,C.E),w,w,w)},
$S:z+25}
A.b8q.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vs
return new B.ac(C.l7,B.f(C.c.cP(this.a[v].a,5),w,w,w,w,B.w(C.m,9,C.E),w,w,w),w)},
$S:z+9}
A.b8o.prototype={
$1(d){return D.aam},
$S:z+6}
A.b9q.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b9r.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b9s.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b9t.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vs
return new B.ac(C.l7,B.f(this.a[v],w,w,w,w,B.w(C.h,12,C.p),w,w,w),w)},
$S:z+9}
A.bjr.prototype={
$1(d){return d.d},
$S:z+28}
A.bjs.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.buu.prototype={
$1(d){return d.d},
$S:z+29}
A.buv.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b6j.prototype={
$0(){return D.awV},
$S:88}
A.b6i.prototype={
$2(d,e){return new A.xd("Bilanzdaten nicht verf\xfcgbar: "+B.h(d),null)},
$S:z+30}
A.b6h.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.be(m,B.a5(B.b([B.f("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.w(C.h,14,C.E),m,m,m),C.F,B.f("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.w(C.m,12.5,C.k),m,m,m),C.t,B.jh(C.c7,B.b([B.f6(C.Fx,D.aLg,new A.b6b(w,v),m),B.f6(D.ae6,D.aK3,new A.b6c(w,v),m)],u),C.d1,8,8)],u),C.z,C.f,C.i),C.a7,m,C.A,m,m,3)}w=new A.b6k(d)
t=C.b.f1(n.a.e.d,0,new A.b6d())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jz(new A.b6e(new A.b6l(w),r,w,s))
v=J.U(d)
u=B.h(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a5(B.b([w,C.F,B.ad(B.b([B.ao(B.f("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.w(C.m,11,C.k),m,m,m),1),B.p1(D.afq,D.aKr,new A.b6f(q,p),m),B.p1(D.aeY,D.aKa,new A.b6g(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:225}
A.b6b.prototype={
$0(){return A.axa(this.a,this.b,null)},
$S:0}
A.b6c.prototype={
$0(){return A.ax7(this.a,this.b)},
$S:0}
A.b6k.prototype={
$1(d){var w=B.b3(J.T(this.a,d))
return w==null?null:w},
$S:1036}
A.b6l.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ab(v,1)
w=B.an(w,".",",")+" %"}return w},
$S:33}
A.b6d.prototype={
$2(d,e){return d+e.d},
$S:z+8}
A.b6e.prototype={
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
return E.aJT(p,B.b([n,m,l,o,w,A.jV(s,s,!1,"Bilanzsumme",!1,"EK "+u.a5(t.d),s,s,s,C.ia,v)],x.p),q,12,12,C.ir,!0)},
$S:142}
A.b6f.prototype={
$0(){return A.ax7(this.a,this.b)},
$S:0}
A.b6g.prototype={
$0(){return A.axa(this.a,this.b,this.c)},
$S:0}
A.bxb.prototype={
$1(d){return new A.BI(this.a,new A.bxa(this.b),this.c,null)},
$S:z+31}
A.bxa.prototype={
$0(){var w=this.a,v=$.bB_()
if(w.e==null)B.S(B.a_(y.b))
w.gcf().c_(v)},
$S:0}
A.b65.prototype={
$0(){},
$S:0}
A.b66.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b67.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b69.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.nX(u.b,B.bE(2024,1,1,0,0,0,0),null,r,new B.aW(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.H(new A.b68(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b68.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b6a.prototype={
$0(){return B.aU(this.a,!1).eV()},
$S:0}
A.b6m.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b6n.prototype={
$1(d){return new A.y7(x.B.a(d),this.a.a.r)},
$S:z+35}
A.azS.prototype={
$1(d){return d.e},
$S:z+36}
A.azT.prototype={
$2(d,e){return d+e},
$S:49}
A.azV.prototype={
$1(d){return d.c.length!==0},
$S:z+37}
A.azX.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+38}
A.azY.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.aeF(v.d,v.e)},
$S:0}
A.azA.prototype={
$1(d){return 0},
$S:1037}
A.azz.prototype={
$2(d,e){return B.eY(C.bZ,this.a.amr(e),C.r,C.bn,null)},
$S:1038}
A.b0r.prototype={
$1(d){return d.a},
$S:z+40}
A.b0s.prototype={
$1(d){return d.b},
$S:z+41}
A.b0t.prototype={
$1(d){return new A.k1(this.a.ch[d.a].a,d.b)},
$S:z+42}
A.b0u.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mW||v===D.dT))t=1-t
return new A.k1(d,t*w.d)},
$S:z+43}
A.b0v.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goE(),p=d.a
r.goE()
r=$.lK()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ab(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ab(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ab(v/1000,1)
t="K"}else{u=C.d.ab(v,r.akq(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o6(d,q.c.b.$2(p,new A.tT(u+t,s.e)))},
$S:z+44}
A.aWF.prototype={
$1(d){this.a.la(new A.a6Q(d))},
$S:170}
A.aWG.prototype={
$1(d){this.a.la(new A.a6R(d))},
$S:43}
A.aWH.prototype={
$1(d){this.a.la(new A.a6S(d))},
$S:30}
A.aWI.prototype={
$0(){this.a.la(D.a2w)},
$S:0}
A.aWJ.prototype={
$1(d){this.a.la(new A.NW())},
$S:48}
A.aWK.prototype={
$1(d){this.a.la(new A.a6V(d))},
$S:44}
A.aWL.prototype={
$0(){this.a.la(D.a2x)},
$S:0}
A.aWM.prototype={
$1(d){this.a.la(new A.NZ(d))},
$S:91}
A.aWN.prototype={
$1(d){this.a.la(new A.a6P(d))},
$S:173}
A.aWO.prototype={
$1(d){this.a.la(new A.a6O(d))},
$S:174}
A.aWP.prototype={
$1(d){return this.a.la(new A.NU(d))},
$S:175}
A.aWQ.prototype={
$1(d){return this.a.la(new A.a6T(d))},
$S:67}
A.aWR.prototype={
$1(d){return this.a.la(new A.NX(d))},
$S:60}
A.biX.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aRU(w==null?B.b([],x.t):w)},
$S:z+46}
A.biV.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.biW.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fV(w,new A.biU())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.Hn(w))},
$S:0}
A.biU.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.biY.prototype={
$1(d){return new A.zN(x.hf.a(d),this.a.a.r)},
$S:z+48}
A.aMG.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.bxX.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bJV(t?A.bEO(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tV(w,new A.yZ(!0,A.bFF(),new A.bxW(v)))},
$S:z+50}
A.bxW.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bYS(A.bEO(d,e,f),w,A.c6R(d,e,f))},
$S:z+51}
A.bxU.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.dy:u,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rR(C.d.j(d.b),w)},
$S:z+52}
A.aMI.prototype={
$1(d){return d.a.length!==0},
$S:z+81}
A.aMJ.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.aMN.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+54}
A.aML.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aMM.prototype={
$0(){this.a.aeF(this.b,this.c)},
$S:0}
A.aMO.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.azL.prototype={
$1(d){return d.gdu(0)},
$S:z+55}
A.azM.prototype={
$2(d,e){return d+e},
$S:49}
A.azP.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j0(v,B.ah(v).i("j0<1>")).aD(0,new A.azQ(w,this.a/(u+1),this.c))},
$S:0}
A.azQ.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.azN.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.azO.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aJS.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1039}
A.aD5.prototype={
$1(d){return d},
$S:1040};(function aliases(){var w=A.LL.prototype
w.a0y=w.ih
w.amK=w.aTB
w.amL=w.aey
w=A.UD.prototype
w.apm=w.l
w=A.LU.prototype
w.a0z=w.ih
w=A.GW.prototype
w.a1i=w.Zt})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"cas","bYO",57)
var q
v(q=A.UF.prototype,"gaFQ","aFR",32)
v(q,"gaEN","Ir",10)
v(q,"gaFz","IC",10)
u(A.UG.prototype,"gatm","atn",34)
t(A,"c9e",3,null,["$3"],["bW5"],58,0)
t(A,"c9f",3,null,["$3"],["bW6"],59,0)
t(A,"c9g",3,null,["$3"],["bW7"],60,0)
t(A,"c9i",4,null,["$4"],["ca5"],61,0)
w(A,"c9h","ca4",62)
s(A,"bF7","ca6",63)
t(A,"c99",3,null,["$3"],["bYT"],64,0)
w(A,"a0X","ccw",65)
w(A,"axd","ca9",6)
t(A,"c9b",3,null,["$3"],["bZF"],66,0)
t(A,"c9d",3,null,["$3"],["c3X"],67,0)
t(A,"c9a",3,null,["$3"],["bZE"],68,0)
t(A,"c9c",3,null,["$3"],["c3W"],69,0)
w(A,"cjO","bZD",70)
w(A,"cjP","c3V",71)
r(A.Zw.prototype,"ga52","az4",39)
u(A.Xe.prototype,"gaAl","aAm",45)
t(A,"cbl",3,null,["$3"],["c_6"],72,0)
t(A,"cbk",3,null,["$3"],["bW8"],73,0)
w(A,"cbo","ccx",3)
t(A,"bQA",4,null,["$5$size","$4"],["bOZ",function(d,e,f,g){return A.bOZ(d,e,f,g,null)}],74,0)
s(A,"bFF","ccv",75)
s(A,"bQB","c8X",76)
s(A,"bQE","cac",77)
s(A,"bQD","ca8",5)
s(A,"bQC","ca7",5)
w(A,"cbn","bQb",79)
w(A,"cbm","bQa",80)
t(A,"a12",3,null,["$3"],["cbj"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.B,[A.vm,A.ES,A.bm,A.aj1,A.aiS,A.aiU,A.aiV,A.aiK,A.amt,A.aiY,A.aiW,A.aA6,A.auz,A.azU,A.aiT,A.LU,A.a7s,A.tT,A.asV,A.asU,A.aiJ,A.ams,A.eF,A.amp,A.amr,A.ar_,A.ani,A.avi,A.amq,A.am_,A.amo,A.azy,A.biR,A.azB,A.aiG,A.o6,A.aml,A.amm,A.wb,A.hz,A.aoe,A.aoh,A.aiP,A.aj3,A.aiQ,A.amn,A.aok,A.aoi,A.auy,A.asT,A.aMH,A.aog,A.vU,A.a30,A.aor,A.a3a,A.b3X])
u(B.vi,[A.pQ,A.op,A.qA,A.vY,A.wW,A.aCt,A.aDE,A.oq,A.Di,A.os])
u(B.oc,[A.aHl,A.byf,A.aHm,A.aHn,A.aHo,A.aHH,A.by8,A.by9,A.bA5,A.bya,A.by6,A.by7,A.by5,A.bfc,A.bfe,A.bf9,A.bj7,A.bj9,A.bjb,A.bjd,A.aHv,A.aHu,A.aHC,A.aHt,A.bta,A.aMs,A.bix,A.biy,A.biz,A.biA,A.biB,A.biC,A.biD,A.biE,A.biF,A.biG,A.biH,A.bxd,A.bsf,A.b8o,A.b9q,A.b9r,A.bjr,A.buu,A.b6h,A.b6k,A.b6l,A.bxb,A.b6n,A.azS,A.azV,A.azA,A.b0r,A.b0s,A.b0t,A.b0u,A.b0v,A.aWF,A.aWG,A.aWH,A.aWJ,A.aWK,A.aWM,A.aWN,A.aWO,A.aWP,A.aWQ,A.aWR,A.biX,A.biY,A.aMG,A.bxX,A.bxW,A.bxU,A.aMI,A.aMJ,A.azL,A.aD5])
u(B.IR,[A.rB,A.xf,A.azJ,A.afl,A.DA,A.aGA,A.aMv,A.Op])
t(A.yX,B.fN)
u(B.yo,[A.aHk,A.aHj,A.bfh,A.bfb,A.bfd,A.bfa,A.bfg,A.bf5,A.bf6,A.bf7,A.bf8,A.aHF,A.aHw,A.aHx,A.aHy,A.aHz,A.aHA,A.aHB,A.aHE,A.aHr,A.aHs,A.bmq,A.bmr,A.bms,A.btc,A.aMu,A.biJ,A.biK,A.bxc,A.biL,A.b6j,A.b6b,A.b6c,A.b6f,A.b6g,A.bxa,A.b65,A.b66,A.b67,A.b69,A.b68,A.b6a,A.b6m,A.azY,A.aWI,A.aWL,A.biV,A.biW,A.aML,A.aMM,A.azP])
t(A.vl,B.b8)
t(A.ami,B.v9)
u(B.yp,[A.bff,A.bj8,A.bja,A.bjc,A.aHD,A.bmp,A.btb,A.aMt,A.biI,A.bsd,A.bse,A.b8n,A.b8p,A.b8q,A.b9s,A.b9t,A.bjs,A.buv,A.b6i,A.b6d,A.b6e,A.azT,A.azX,A.azz,A.biU,A.aMN,A.aMO,A.azM,A.azQ,A.azN,A.azO,A.aJS])
u(B.E,[A.amh,A.x9,A.Jh,A.ajm,A.xi,A.ahU,A.anr,A.JN,A.Kc,A.ahS,A.IS,A.a2F,A.Jc,A.amJ,A.ao4,A.VW,A.ZI,A.V4,A.Vl,A.aoB,A.akG,A.CJ,A.auv,A.xd,A.LM,A.B5])
u(B.yw,[A.yY,A.apP,A.a8p,A.aiO])
u(B.H,[A.BI,A.SB])
u(B.Z,[A.UF,A.Zw])
u(B.Fi,[A.LQ,A.Pj])
u(B.uT,[A.UG,A.Xe])
t(A.a2B,A.aj1)
t(A.aiF,A.a2B)
t(A.a2l,A.aiF)
u(A.a2l,[A.aiR,A.aof])
t(A.o7,A.aiR)
t(A.fS,A.aiS)
t(A.iv,A.aiU)
t(A.mS,A.aiV)
t(A.a2s,A.aiK)
t(A.O_,A.amt)
u(A.O_,[A.aiX,A.aoj])
t(A.a2x,A.aiX)
t(A.a2y,A.aiY)
t(A.DB,A.aiW)
u(A.aA6,[A.LR,A.Pl])
t(A.afn,A.auz)
t(A.aiZ,A.afn)
t(A.a2z,A.aiZ)
u(B.b5,[A.y7,A.zN])
t(A.uZ,A.aiT)
t(A.LL,A.LU)
u(A.LL,[A.azW,A.aMK])
u(B.Pe,[A.a2v,A.a8B])
u(B.L,[A.GW,A.aiH])
u(A.GW,[A.acv,A.acI])
t(A.qq,A.asV)
t(A.adW,A.asU)
t(A.pu,A.aiJ)
t(A.vo,A.ams)
t(A.z_,A.amp)
t(A.pR,A.amr)
t(A.R9,A.ar_)
t(A.nb,A.ani)
t(A.nB,A.avi)
u(A.pR,[A.anh,A.avh])
t(A.l0,A.anh)
t(A.ls,A.avh)
t(A.a6N,A.amq)
u(A.a6N,[A.ang,A.avg])
t(A.a7D,A.ang)
t(A.afL,A.avg)
t(A.NK,A.am_)
t(A.vn,A.amo)
t(A.NT,A.vn)
t(A.adX,B.he)
t(A.aiI,A.aiH)
t(A.UD,A.aiI)
t(A.a2m,A.UD)
t(A.k1,A.aiG)
t(A.a6K,A.aml)
t(A.a6M,A.amm)
u(A.hz,[A.a6Q,A.a6R,A.a6S,A.NV,A.NW,A.a6V,A.NY,A.NZ,A.a6P,A.a6O,A.NU,A.a6T,A.a6U,A.NX])
t(A.q4,A.aof)
t(A.eh,A.aoe)
t(A.Pk,A.aoh)
t(A.a2u,A.aiP)
t(A.mT,A.aj3)
t(A.LP,A.aiQ)
t(A.yZ,A.amn)
t(A.Ft,A.aoj)
t(A.a8C,A.aok)
t(A.aod,A.eF)
t(A.ne,A.aod)
t(A.qy,A.ne)
t(A.rR,A.aoi)
t(A.tV,A.auy)
t(A.Hn,A.asT)
t(A.zO,A.aog)
t(A.zS,A.aor)
w(A.aiK,A.bm)
w(A.aiR,A.bm)
w(A.aiS,A.bm)
w(A.aiU,A.bm)
w(A.aiV,A.bm)
w(A.aiW,A.bm)
w(A.aiX,A.bm)
w(A.aiY,A.bm)
w(A.aiZ,A.bm)
w(A.aiT,A.bm)
w(A.aiF,A.bm)
w(A.aiJ,A.bm)
w(A.am_,A.bm)
w(A.amo,A.bm)
w(A.amp,A.bm)
w(A.amr,A.bm)
w(A.ams,A.bm)
w(A.anh,A.bm)
w(A.ang,A.bm)
w(A.ani,A.bm)
w(A.ar_,A.bm)
w(A.asU,A.bm)
w(A.asV,A.bm)
w(A.auz,A.bm)
w(A.avh,A.bm)
w(A.avg,A.bm)
w(A.avi,A.bm)
w(A.aiG,A.bm)
v(A.aiH,B.aH)
w(A.aiI,B.ed)
v(A.UD,B.a5M)
w(A.aj1,A.bm)
w(A.aml,A.bm)
w(A.amm,A.bm)
w(A.amt,A.bm)
w(A.aiP,A.bm)
w(A.aiQ,A.bm)
w(A.aj3,A.bm)
w(A.amn,A.bm)
w(A.amq,A.bm)
w(A.aod,A.bm)
w(A.aoe,A.bm)
w(A.aof,A.bm)
w(A.aoh,A.bm)
w(A.aoi,A.bm)
w(A.aoj,A.bm)
w(A.aok,A.bm)
w(A.asT,A.bm)
w(A.auy,A.bm)
w(A.aog,A.bm)
w(A.aor,A.bm)})()
B.buJ(b.typeUniverse,JSON.parse('{"ES":{"aHq":[]},"yX":{"fN":["bi<~>"],"fN.T":"bi<~>"},"vl":{"b8":[],"H":[],"c":[]},"Jh":{"E":[],"c":[]},"xi":{"E":[],"c":[]},"ami":{"Z":["vl"]},"amh":{"E":[],"c":[]},"x9":{"E":[],"c":[]},"ajm":{"E":[],"c":[]},"Kc":{"E":[],"c":[]},"IS":{"E":[],"c":[]},"yY":{"b8":[],"H":[],"c":[]},"ahU":{"E":[],"c":[]},"anr":{"E":[],"c":[]},"apP":{"b8":[],"H":[],"c":[]},"JN":{"E":[],"c":[]},"ahS":{"E":[],"c":[]},"a2F":{"E":[],"c":[]},"Jc":{"E":[],"c":[]},"xd":{"E":[],"c":[]},"BI":{"H":[],"c":[]},"a8p":{"b8":[],"H":[],"c":[]},"amJ":{"E":[],"c":[]},"ao4":{"E":[],"c":[]},"VW":{"E":[],"c":[]},"ZI":{"E":[],"c":[]},"V4":{"E":[],"c":[]},"Vl":{"E":[],"c":[]},"aoB":{"E":[],"c":[]},"akG":{"E":[],"c":[]},"CJ":{"E":[],"c":[]},"auv":{"E":[],"c":[]},"aiO":{"b8":[],"H":[],"c":[]},"UF":{"Z":["BI"]},"LQ":{"H":[],"c":[]},"UG":{"Z":["LQ"]},"o7":{"bm":[]},"fS":{"bm":[]},"iv":{"bm":[]},"mS":{"bm":[]},"DB":{"bm":[]},"y7":{"b5":["o7"],"bb":["o7"],"bb.T":"o7","b5.T":"o7"},"a2s":{"bm":[]},"a2x":{"bm":[]},"a2y":{"bm":[]},"a2z":{"bm":[]},"uZ":{"bm":[]},"a2v":{"aZ":[],"c":[]},"acv":{"L":[],"M":[],"jC":[],"aY":[]},"pR":{"bm":[]},"nb":{"bm":[]},"nB":{"bm":[]},"l0":{"bm":[]},"ls":{"bm":[]},"vn":{"bm":[]},"a2l":{"bm":[]},"qq":{"bm":[]},"adW":{"bm":[]},"pu":{"bm":[]},"vo":{"bm":[]},"z_":{"bm":[]},"afn":{"bm":[]},"R9":{"bm":[]},"a7D":{"bm":[]},"afL":{"bm":[]},"NK":{"bm":[]},"NT":{"bm":[]},"LM":{"E":[],"c":[]},"SB":{"H":[],"c":[]},"Zw":{"Z":["SB"]},"k1":{"bm":[]},"adX":{"he":[],"aZ":[],"c":[]},"a2m":{"ed":["L","hA"],"L":[],"aH":["L","hA"],"M":[],"aY":[],"aH.1":"hA","ed.1":"hA","aH.0":"L"},"B5":{"E":[],"c":[]},"a2B":{"bm":[]},"a6K":{"bm":[]},"O_":{"bm":[]},"a6M":{"bm":[]},"a6Q":{"hz":[]},"a6R":{"hz":[]},"a6S":{"hz":[]},"NV":{"hz":[]},"NW":{"hz":[]},"a6V":{"hz":[]},"NY":{"hz":[]},"NZ":{"hz":[]},"a6P":{"hz":[]},"a6O":{"hz":[]},"NU":{"hz":[]},"a6T":{"hz":[]},"a6U":{"hz":[]},"NX":{"hz":[]},"GW":{"L":[],"M":[],"jC":[],"aY":[]},"Pj":{"H":[],"c":[]},"Xe":{"Z":["Pj"]},"q4":{"bm":[]},"eh":{"bm":[]},"mT":{"bm":[]},"ne":{"eF":[],"bm":[]},"qy":{"ne":[],"eF":[],"bm":[]},"rR":{"bm":[]},"tV":{"bm":[]},"Hn":{"bm":[]},"zN":{"b5":["q4"],"bb":["q4"],"bb.T":"q4","b5.T":"q4"},"Pk":{"bm":[]},"a2u":{"bm":[]},"LP":{"bm":[]},"yZ":{"bm":[]},"a6N":{"bm":[]},"Ft":{"bm":[]},"a8C":{"bm":[]},"zO":{"bm":[]},"a8B":{"aZ":[],"c":[]},"acI":{"L":[],"M":[],"jC":[],"aY":[]},"zS":{"bm":[]}}'))
B.bOr(b.typeUniverse,JSON.parse('{"LL":1,"O_":1,"LU":1,"GW":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ax
return{_:w("Di"),e:w("bi<op>"),cn:w("bi<oq>"),aN:w("bi<os>"),fM:w("bi<a4<i,@>?>"),c:w("bi<~>"),W:w("k1"),B:w("o7"),dB:w("fS"),T:w("uZ"),fj:w("iv"),G:w("mS"),bO:w("mT"),k:w("av"),cX:w("a3a<G>"),dO:w("v5"),R:w("a7<i,@>"),j:w("hv"),bz:w("lU<aW>"),f0:w("oi"),E:w("bm"),F:w("yX"),aI:w("pQ"),m:w("op"),X:w("oq"),P:w("m_"),D:w("vm"),a:w("aHq"),d:w("os"),cw:w("eF"),L:w("hA"),o:w("dD<v,F>"),cm:w("l0"),dv:w("nb"),M:w("D<o6>"),I:w("D<bIu>"),O:w("D<fS>"),Y:w("D<iv>"),U:w("D<eF>"),K:w("D<a7s>"),u:w("D<eh>"),bC:w("D<vU>"),aA:w("D<u<eF>>"),v:w("D<ej>"),r:w("D<Hn>"),s:w("D<i>"),eg:w("D<tQ>"),df:w("D<qy>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bo<Z<H>>"),Z:w("ne"),cz:w("eh"),hf:w("q4"),dj:w("zO"),fT:w("rR"),c_:w("iz<pg<bi<~>>>"),x:w("zS<fS>"),y:w("zS<eh>"),J:w("u<v>"),ef:w("vY"),b:w("a4<i,@>"),f:w("a4<@,@>"),gj:w("af<G,G>"),w:w("kh"),aU:w("B"),Q:w("wb<o7>"),C:w("wb<q4>"),dc:w("ej"),eo:w("qf"),gJ:w("qg"),V:w("kt<m_>"),N:w("i"),A:w("nw"),bP:w("br"),er:w("tQ"),fB:w("wW"),dw:w("qy"),bY:w("tV"),cZ:w("qA"),gc:w("jd"),es:w("ls"),bN:w("nB"),l:w("c"),q:w("xy"),g4:w("io<G>"),cJ:w("C"),i:w("G"),z:w("@"),S:w("v"),bn:w("y7?"),f3:w("zN?"),g:w("u<@>?"),h:w("a4<i,@>?"),fF:w("a4<@,@>?"),cK:w("B?"),aD:w("jd?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.BA=new B.lN(C.n,B.ax("lN<F>"))
D.BH=new A.DA(0,"left")
D.mW=new A.DA(1,"top")
D.BI=new A.DA(2,"right")
D.dT=new A.DA(3,"bottom")
D.aAZ=new A.qq(!1,A.bF7(),22,null)
D.kD=new A.pu(16,null,D.aAZ,!0)
D.aan=new A.pR(C.I,null,2,null)
D.wp=new A.LP(!1,D.aan,A.cbo(),!0)
D.a0l=new A.azJ(3,"spaceEvenly")
D.a0v=new B.yc(6,"dstIn")
D.Yc=new B.b0(3,3)
D.BL=new B.d4(D.Yc,D.Yc,C.a6,C.a6)
D.a0H=new B.bl(C.I,0,C.S,-1)
D.Ck=new A.a6M()
D.a2w=new A.NV()
D.a2x=new A.NY()
D.aTM=new A.adW()
D.a8k=new B.bx(8e6)
D.aom=w([],B.ax("D<l0>"))
D.aon=w([],B.ax("D<ls>"))
D.Ev=new A.NK(D.aom,D.aon,!0)
D.aa1=new B.dC("Zeitraum",!1,null)
D.aa7=new B.dC("Konten (SKR 03)",!1,null)
D.y3=new A.aGA(0,"center")
D.aai=new A.vl(null,null)
D.aTZ=new A.yZ(!0,A.bFF(),A.bQA())
D.Ez=new A.yZ(!1,A.bFF(),A.bQA())
D.EA=new A.z_(!1,!0,null,A.axd(),A.a0X(),!0,null,A.axd(),A.a0X())
D.aU_=new A.z_(!0,!0,null,A.axd(),A.a0X(),!0,null,A.axd(),A.a0X())
D.a4V=new B.F(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.l)
D.a4F=new B.F(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.l)
D.a54=new B.F(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.l)
D.a4Z=new B.F(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.l)
D.a4l=new B.F(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.l)
D.a4k=new B.F(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.a5t=new B.F(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.l)
D.a4O=new B.F(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.l)
D.a5w=new B.F(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.l)
D.a5q=new B.F(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.l)
D.auK=new B.dD([50,D.a4V,100,D.a4F,200,D.a54,300,D.a4Z,400,D.a4l,500,D.a4k,600,D.a5t,700,D.a4O,800,D.a5w,900,D.a5q],x.o)
D.dy=new B.rY(D.auK,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.akm=w([8,4],x.t)
D.aal=new A.pR(D.dy,null,0.4,D.akm)
D.aam=new A.pR(C.a8,null,0.5,null)
D.fS=new A.eF(0/0,0/0)
D.aB0=new A.qq(!0,A.bF7(),44,null)
D.mX=new A.pu(16,null,D.aB0,!0)
D.aB_=new A.qq(!0,A.bF7(),30,null)
D.mY=new A.pu(16,null,D.aB_,!0)
D.aao=new A.vo(!1,D.mX,D.mY,D.mX,D.mY)
D.aU0=new A.vo(!0,D.mX,D.mY,D.mX,D.mY)
D.fu=new A.rB(0,"hinaus")
D.li=new A.rB(1,"herein")
D.aax=new A.rB(2,"weder")
D.aKA=new B.a9("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.aaW=new B.e6(D.aKA,null,null)
D.EI=new A.Op(0,"left")
D.ab5=new A.Op(1,"center")
D.EJ=new A.Op(2,"right")
D.ab9=new B.a3(57495,"MaterialIcons",null,!1)
D.abo=new B.a3(58040,"MaterialIcons",null,!0)
D.yk=new B.a3(58927,"MaterialIcons",null,!1)
D.ac0=new B.a3(59005,"MaterialIcons",null,!0)
D.ac1=new B.a3(59007,"MaterialIcons",null,!0)
D.ac2=new B.a3(59011,"MaterialIcons",null,!1)
D.ad8=new B.a3(62589,"MaterialIcons",null,!1)
D.acl=new B.a3(61349,"MaterialIcons",null,!1)
D.ae3=new B.aA(D.acl,20,C.h,null,null)
D.ae5=new B.aA(F.Fc,18,null,null,null)
D.ae6=new B.aA(D.yk,18,null,null,null)
D.aer=new B.aA(C.og,14,C.Y,null,null)
D.aew=new B.aA(C.i5,null,C.h,null,null)
D.aex=new B.aA(C.ll,null,C.m,null,null)
D.aeY=new B.aA(C.lm,16,null,null,null)
D.af4=new B.aA(C.yv,16,null,null,null)
D.af8=new B.aA(F.oe,null,C.Y,null,null)
D.afj=new B.aA(F.Fn,16,null,null,null)
D.afq=new B.aA(D.yk,16,null,null,null)
D.ahG=new A.a8p(null)
D.aU5=new A.aMv(0,"horizontal")
D.yG=new A.zO(0,0,0,0,!1)
D.G6=new A.Pk(0.5)
D.Cq=new A.a8C()
D.ahT=new A.Ft(D.Cq,A.bQE(),10,A.bQB(),!0,A.bQD(),A.bQC(),!1,null,null,null)
D.aU7=new A.Ft(D.Cq,A.bQE(),10,A.bQB(),!0,A.bQD(),A.bQC(),!0,null,null,null)
D.ajk=w([4,3],x.t)
D.az7=new B.aL("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ayX=new B.aL("receivables","Forderungen (kurzfristig)")
D.ayL=new B.aL("inventory_value","Vorr\xe4te (Warenbestand)")
D.ayJ=new B.aL("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.ayw=new B.aL("fixed_assets","Anlageverm\xf6gen")
D.ayD=new B.aL("current_liabilities","Kurzfristige Verbindlichkeiten")
D.az3=new B.aL("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ayW=new B.aL("equity","Eigenkapital")
D.q0=w([D.az7,D.ayX,D.ayL,D.ayJ,D.ayw,D.ayD,D.az3,D.ayW],B.ax("D<+(i,i)>"))
D.aUa=w([],x.M)
D.ao9=w([],x.O)
D.aoa=w([],x.Y)
D.aob=w([],B.ax("D<mS>"))
D.aoc=w([],B.ax("D<mT>"))
D.aUb=w([],x.U)
D.aUc=w([],x.u)
D.aod=w([],x.r)
D.avp={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TR={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zm=new B.a7(D.TR,[0,0,0,0,0,0,0,C.ba],B.ax("a7<i,B>"))
D.avm={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.auE=new B.a7(D.avm,[0,0,0,0],B.ax("a7<i,v>"))
D.avE={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.asd=new B.a7(D.avE,[0,0,0,0,null,null,null,null],B.ax("a7<i,v?>"))
D.as6=new B.a7(D.avp,[D.zm,D.zm,D.zm,C.ba,C.ba,C.ba,D.auE,D.asd],x.R)
D.asq=new B.a7(D.TR,[0,0,0,0,0,0,0,C.cc],x.R)
D.avq={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ass=new B.a7(D.avq,[8500,1200,3400,300,22e3,4200,9000,22200],B.ax("a7<i,G>"))
D.avO={total:0,rows:1}
D.asv=new B.a7(D.avO,[0,C.cc],x.R)
D.avl={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.auF=new B.a7(D.avl,[0,0,0,0,0,0,0,C.cc],x.R)
D.avS={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.auG=new B.a7(D.avS,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ax("a7<i,i>"))
D.a5C=new B.F(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.l)
D.a5K=new B.F(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.l)
D.a4o=new B.F(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.l)
D.a4R=new B.F(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.l)
D.a50=new B.F(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.l)
D.a6_=new B.F(1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a49=new B.F(1,0,0.6745098039215687,0.7568627450980392,C.l)
D.a4T=new B.F(1,0,0.592156862745098,0.6549019607843137,C.l)
D.a53=new B.F(1,0,0.5137254901960784,0.5607843137254902,C.l)
D.a5r=new B.F(1,0,0.3764705882352941,0.39215686274509803,C.l)
D.auL=new B.dD([50,D.a5C,100,D.a5K,200,D.a4o,300,D.a4R,400,D.a50,500,D.a6_,600,D.a49,700,D.a4T,800,D.a53,900,D.a5r],x.o)
D.TC=new B.rY(D.auL,1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a9f=new B.ag(32,32,32,32)
D.awN=new B.ac(D.a9f,C.bC,null)
D.awV=new B.ac(C.am,C.bC,null)
D.aoo=w([],B.ax("D<nb>"))
D.aop=w([],B.ax("D<nB>"))
D.Ye=new A.R9(D.aoo,D.aop)
D.azW=new B.f9("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.azY=new B.f9("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aA1=new B.f9("Automaten-Business","Umsatz je Automat",null,null)
D.aA4=new B.f9("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aA6=new B.f9("Top","Meistverkaufte Produkte",null,null)
D.aA9=new B.f9("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aAa=new B.f9("Kennzahlen","Rentabilit\xe4t",null,null)
D.YT=new B.tz(C.L,C.v,0)
D.aII=new B.a9("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aCM=new B.dL(D.aII,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aL3=new B.a9('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aCP=new B.dL(D.aL3,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aIX=new B.a9("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aCQ=new B.dL(D.aIX,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKX=new B.a9("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aCS=new B.dL(D.aKX,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKn=new B.a9("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aCT=new B.dL(D.aKn,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aKk=new B.a9("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aDe=new B.dL(D.aKk,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.r,null)
D.aUm=new B.V(!0,C.I,null,null,null,null,14,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIT=new B.a9("Demo",null,null,null,null,null,null,null,null,null)
D.aJ6=new B.a9("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aK3=new B.a9("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aKa=new B.a9("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aKr=new B.a9("sevDesk",null,null,null,null,null,null,null,null,null)
D.aLg=new B.a9("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_9=new A.afl(0,"auto")
D.aLV=new A.afl(1,"top")
D.aQp=new A.xd("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aQq=new A.xd("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Bj=new A.xf(0,"alle")
D.a_z=new A.xf(1,"aufwand")
D.a_A=new A.xf(2,"erloes")
D.a_B=new A.xf(3,"privat")
D.aRk=new A.xi('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.m,C.ll,null)
D.adk=new B.a3(984570,"MaterialIcons",null,!1)
D.aRl=new A.xi("Keine Buchung passt zu dieser Auswahl.",C.m,D.adk,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ckh","bUS",()=>B.j2(new A.by8(),x.D))
w($,"cki","a1u",()=>B.j2(new A.by9(),x.a))
w($,"cli","r_",()=>B.bDN(new A.bA5(),x.P))
w($,"ckj","bB1",()=>C.aJ.$1$1(new A.bya(),x.d))
w($,"ckf","bB0",()=>C.aJ.$1$1(new A.by6(),x.m))
w($,"ckg","bHn",()=>C.aJ.$1$1(new A.by7(),x.X))
w($,"cke","bB_",()=>C.aJ.$1$1(new A.by5(),x.h))
w($,"ckd","bAZ",()=>B.b1h(A.cas(),x.F,x.c))
w($,"cdj","bAw",()=>new A.azy())
v($,"cgF","lK",()=>new A.b3X())})()};
(a=>{a["FkVC3KXCc9po2lPtzjXtYhL9yVE="]=a.current})($__dart_deferred_initializers__);