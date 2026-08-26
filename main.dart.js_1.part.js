((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
P_(d,e,f,g,h){return new A.a8c(f,g,d,h,e,null)},
a8c:function a8c(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vl:function vl(d){this.a=d},
c9T(d){var w
if(x.f.b(d)){w=J.Y(d,"error")
if(typeof w=="string"&&C.c.aD(w).length!==0)return C.c.aD(w)}if(typeof d=="string"&&C.c.aD(d).length!==0)return C.c.aD(d)
return null},
EM:function EM(d){this.a=d},
bY1(d){var w=J.T(d),v=B.b4(w.h(d,"total"))
v=v==null?null:C.d.X(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.be
w=J.cM(w,new A.aH3(),x.aI)
w=B.Q(w,w.$ti.i("av.E"))
return new A.on(v,w)},
bwx(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.al(d))
return w==null?0:w},
pP:function pP(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
on:function on(d,e){this.a=d
this.b=e},
aH3:function aH3(){},
bxt(d,e,f){var w,v=new A.bxu(f<0)
if(d==="expense")return v.$1(D.fu)
if(d==="revenue")return v.$1(D.lh)
w=B.ig(C.c.aD(e),null)
if(w!=null&&w>=1800&&w<=1999)return v.$1(C.e.ai(w,100)>=90?D.lh:D.fu)
return D.aan},
bF9(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
rA:function rA(d,e){this.a=d
this.b=e},
bxu:function bxu(d){this.a=d},
bY2(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.T(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zn
w=x.f
v=x.N
u=x.z
t=A.aHo(B.cP(w.a(e.h(a0,"current")),v,u))
s=A.aHo(B.cP(w.a(e.h(a0,"prior_year")),v,u))
r=A.aHo(B.cP(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.be
p=J.cM(p,new A.aH4(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.be
o=J.cM(o,new A.aH5(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.be
q=J.cM(q,new A.aH6(),x.fB)
q=B.Q(q,q.$ti.i("av.E"))
n=B.cP(w.a(e.h(a0,"customer")),v,u)
m=B.b4(n.h(0,"purchases_count"))
m=m==null?null:C.d.X(m)
if(m==null)m=0
l=A.pk(n.h(0,"app_gross"))
k=B.b4(n.h(0,"active_customers"))
k=k==null?null:C.d.X(k)
if(k==null)k=0
n=A.pk(n.h(0,"avg_basket"))
u=B.cP(w.a(e.h(a0,"derived")),v,u)
v=A.pk(u.h(0,"gross_margin_pct"))
e=A.pk(u.h(0,"net_margin_pct"))
w=A.pk(u.h(0,"ebitda_margin_pct"))
j=A.pk(u.h(0,"cashflow_operating"))
i=A.bwy(u.h(0,"revenue_growth_yoy_pct"))
h=A.bwy(u.h(0,"revenue_growth_mom_pct"))
g=A.bwy(u.h(0,"result_growth_yoy_pct"))
u=A.bwy(u.h(0,"result_growth_mom_pct"))
f=B.b4(J.Y(d,"days"))
f=f==null?null:C.d.X(f)
if(f==null)f=1
return new A.oo(t,s,r,p,o,q,new A.aCb(m,l,k,n),new A.aDm(v,e,w,j,i,h,g,u),f)},
pk(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.al(d))
return w==null?0:w},
bwy(d){if(d==null)return null
if(typeof d=="number")return d
return B.fJ(J.al(d))},
qA:function qA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vW:function vW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wT:function wT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCb:function aCb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDm:function aDm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oo:function oo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aH4:function aH4(){},
aH5:function aH5(){},
aH6:function aH6(){},
aHo(d){var w=J.T(d),v=A.uC(w.h(d,"revenue_net_7")),u=A.uC(w.h(d,"revenue_net_19")),t=A.uC(w.h(d,"revenue_net")),s=A.uC(w.h(d,"expense_net")),r=A.uC(w.h(d,"result_net")),q=A.uC(w.h(d,"vat_collected")),p=A.uC(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.be
w=J.cM(w,new A.aHp(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.oq(v,u,t,s,r,q,p,w)},
uC(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fJ(J.al(d))
return w==null?0:w},
Dc:function Dc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oq:function oq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aHp:function aHp(){},
bY0(d){return new A.yS(d,new B.iy(x.c_),C.dR)},
bxn:function bxn(){},
bxo:function bxo(){},
bzj:function bzj(){},
bxp:function bxp(){},
bxl:function bxl(){},
bxm:function bxm(){},
bxk:function bxk(){},
yS:function yS(d,e,f){this.r=d
this.a=e
this.f=f},
aH2:function aH2(d,e,f){this.a=d
this.b=e
this.c=f},
aH1:function aH1(d,e,f){this.a=d
this.b=e
this.c=f},
vk:function vk(d,e){this.d=d
this.a=e},
xc:function xc(d,e){this.a=d
this.b=e},
am5:function am5(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bez:function bez(d){this.a=d},
beu:function beu(d){this.a=d},
bet:function bet(d,e){this.a=d
this.b=e},
bev:function bev(d){this.a=d},
bes:function bes(d){this.a=d},
bey:function bey(){},
bex:function bex(){},
bew:function bew(d){this.a=d},
ber:function ber(d){this.a=d},
am4:function am4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ben:function ben(d){this.a=d},
beo:function beo(d){this.a=d},
bep:function bep(d){this.a=d},
beq:function beq(d){this.a=d},
x6:function x6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jb:function Jb(d,e,f){this.c=d
this.d=e
this.a=f},
bip:function bip(){},
biq:function biq(){},
bir:function bir(){},
bis:function bis(){},
bit:function bit(){},
biu:function biu(){},
biv:function biv(){},
aj9:function aj9(d,e){this.c=d
this.a=e},
xf:function xf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bY3(){return new A.yT(null)},
WI(d,e,f,g,h){return new A.ane(e,h,g,f,d,null)},
yT:function yT(d){this.a=d},
aHn:function aHn(d){this.a=d},
aHe:function aHe(d,e,f){this.a=d
this.b=e
this.c=f},
aHf:function aHf(d,e,f){this.a=d
this.b=e
this.c=f},
aHg:function aHg(d){this.a=d},
aHd:function aHd(){},
aHh:function aHh(d){this.a=d},
aHi:function aHi(d){this.a=d},
aHc:function aHc(){},
aHj:function aHj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aHm:function aHm(){},
aHl:function aHl(){},
aHk:function aHk(){},
aHb:function aHb(d,e){this.a=d
this.b=e},
aH9:function aH9(d){this.a=d},
aHa:function aHa(d){this.a=d},
ahI:function ahI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ane:function ane(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
apA:function apA(d,e){this.e=d
this.a=e},
blG:function blG(d){this.a=d},
blH:function blH(d){this.a=d},
blI:function blI(d,e,f){this.a=d
this.b=e
this.c=f},
blF:function blF(){},
JG:function JG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
K5:function K5(d,e){this.c=d
this.a=e},
bsr:function bsr(d){this.a=d},
bss:function bss(d,e){this.a=d
this.b=e},
bsq:function bsq(d){this.a=d},
ahG:function ahG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
IM:function IM(d,e){this.c=d
this.a=e},
bHP(d,e,f){return new A.a2s(e,f,d,null)},
bEp(d,e){var w=$.cT().a9(Math.abs(d))
return e===D.fu?"-"+w:w},
bP7(d,e){var w
if(e===D.fu)return d==="revenue"||d==="expense"?C.a0:C.m
if(e===D.lh)w=d==="revenue"||d==="expense"
else w=!1
if(w)return C.an
return C.m},
c9J(d,e){if(d==="expense")return e===D.fu?"Ausgabe":"Erstattung"
if(d==="revenue")return e===D.fu?"Erl\xf6sminderung":"Erl\xf6s"
if(e===D.fu)return"Privatentnahme"
if(e===D.lh)return"Privateinlage"
return A.bF9(d)},
a2s:function a2s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bEk(d,e,f,g,h){var w=null
return B.h3(w,w,!0,w,new A.bws(h,g,e,f),d,w,!0,!0,x.H)},
jV(d,e,f,g,h,i,j,k,l,m,n){return new A.anR(g,n,i,e,d,m,f,k,l,j,null)},
awR(d,e){return A.c7F(d,e)},
c7F(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$awR=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aR(D.aCo)
t=4
o=e.aC(0,$.bK(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fZ("finance-balance-sync",B.A(n,n)),$async$awR)
case 7:r=g
q=B.cP(x.f.a(r.a),x.N,n)
l.MK()
if(J.d(J.Y(q,"configured"),!1)){l.aR(D.aCs)
w=1
break}if(J.d(J.Y(q,"ok"),!0)){o=$.bAd()
if(e.e==null)B.S(B.Z(y.b))
e.gce().c_(o)
l.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.Y(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.Y(q,"error")
l.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.MK()
l.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$awR,v)},
awU(d,e,f){var w=0,v=B.q(x.H)
var $async$awU=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.h3(null,null,!0,null,new A.bwq(f,e,e.aC(0,$.bK(),x.A)),d,null,!0,!0,x.H),$async$awU)
case 2:return B.o(null,v)}})
return B.p($async$awU,v)},
a8d:function a8d(d){this.a=d},
aMc:function aMc(){},
aMb:function aMb(){},
aMa:function aMa(){},
J6:function J6(d,e){this.c=d
this.a=e},
bi_:function bi_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhP:function bhP(){},
bhQ:function bhQ(){},
bhR:function bhR(){},
bhS:function bhS(){},
bhT:function bhT(){},
bhU:function bhU(){},
bhV:function bhV(){},
bhW:function bhW(){},
bhX:function bhX(d){this.a=d},
bhY:function bhY(d){this.a=d},
bhZ:function bhZ(d){this.a=d},
bi0:function bi0(d,e){this.a=d
this.b=e},
bi1:function bi1(d,e){this.a=d
this.b=e},
bws:function bws(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bwr:function bwr(d){this.a=d},
amw:function amw(d){this.a=d},
anR:function anR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bi2:function bi2(d,e){this.a=d
this.b=e},
VM:function VM(d,e,f){this.c=d
this.d=e
this.a=f},
Zv:function Zv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
brt:function brt(){},
bru:function bru(){},
brv:function brv(d){this.a=d},
UW:function UW(d,e,f){this.c=d
this.d=e
this.a=f},
b7F:function b7F(){},
b7H:function b7H(d){this.a=d},
b7I:function b7I(d){this.a=d},
b7G:function b7G(){},
Vc:function Vc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8I:function b8I(){},
b8J:function b8J(){},
b8K:function b8K(){},
b8L:function b8L(d){this.a=d},
aom:function aom(d,e){this.c=d
this.a=e},
biJ:function biJ(){},
biK:function biK(){},
akt:function akt(d,e){this.c=d
this.a=e},
CD:function CD(d,e,f){this.c=d
this.d=e
this.a=f},
auf:function auf(d,e){this.c=d
this.a=e},
btK:function btK(){},
btL:function btL(){},
xa:function xa(d,e){this.c=d
this.a=e},
aiC:function aiC(d,e){this.e=d
this.a=e},
b5Z:function b5Z(){},
b5Y:function b5Y(){},
b5X:function b5X(d,e,f){this.a=d
this.b=e
this.c=f},
b5R:function b5R(d,e){this.a=d
this.b=e},
b5S:function b5S(d,e){this.a=d
this.b=e},
b6_:function b6_(d){this.a=d},
b60:function b60(d){this.a=d},
b5T:function b5T(){},
b5U:function b5U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5V:function b5V(d,e){this.a=d
this.b=e},
b5W:function b5W(d,e,f){this.a=d
this.b=e
this.c=f},
bwq:function bwq(d,e,f){this.a=d
this.b=e
this.c=f},
bwp:function bwp(d){this.a=d},
BD:function BD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uy:function Uy(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b5L:function b5L(){},
b5M:function b5M(d){this.a=d},
b5N:function b5N(d){this.a=d},
b5P:function b5P(d,e){this.a=d
this.b=e},
b5O:function b5O(d,e){this.a=d
this.b=e},
b5Q:function b5Q(d){this.a=d},
bm:function bm(){},
bHN(d){return new A.LJ(d,C.ao,C.bZ,null,null)},
LJ:function LJ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Uz:function Uz(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e7$=f
_.c5$=g
_.c=_.a=null},
b61:function b61(d,e){this.a=d
this.b=e},
b62:function b62(d){this.a=d},
azt(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.anO:f,p=a0==null?16:a0,o=d==null?D.a0g:d,n=g==null,m=n?A.bAH(r,r,r,r,r,r,r,r):g,l=a3==null?D.Y5:a3
n=n?A.bAH(r,r,r,r,r,r,r,r):g
w=j==null?D.Eq:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.K:e
return new A.o5(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Cf,s,w,i,n)},
azA(d,e,f,g,h){var w=d==null?D.anP:d,v=e==null?2:e,u=g==null?C.lF:g
return new A.fS(h,f===!0,w,v,u)},
bVi(d,e,f){var w=d.a
w=C.d.aM(w+(e.a-w)*f)
return A.azA(A.kH(d.c,e.c,f,A.c8r(),x.fj),B.ai(d.d,e.d,f),!1,A.kH(d.e,e.e,f,A.a0Q(),x.S),w)},
a2j(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tu
else w=h
v=m==null
u=v?8:m
t=$.lI()
s=t.aYm(f,v?8:m)
t=t.aYn(g,v?8:m)
v=d==null?A.bHL(r,r,r,r,r):d
return new A.iu(q,l,w,j,u,s,e,t,v,k==null?D.anQ:k)},
bVj(d,e,f){var w,v,u,t,s=B.a2(d.c,e.c,f),r=B.ai(d.e,e.e,f),q=B.mT(d.f,e.f,f),p=A.kH(d.r,e.r,f,A.a0Q(),x.S),o=B.bZ(d.w,e.w,f),n=B.ai(d.a,e.a,f),m=B.ai(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ai(w.b,v.b,f)
t=B.ai(w.c,v.c,f)
v=B.a2(w.d,v.d,f)
return A.a2j(A.bHL(v,u,null,!1,t),p,q,o,s,n,null,A.kH(d.y,e.y,f,A.c8s(),x.G),m,r)},
bVk(d,e,f){var w,v,u=B.ai(d.a,e.a,f)
u.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
v.toString
return new A.mR(u,w,v,B.bZ(d.d,e.d,f))},
bHL(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dx
else w=d
return new A.a2f(g===!0,v,u,w,f)},
bAH(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a2l(4,C.fR,16,D.xZ,0,120,A.c8u(),!1,!1,D.a_3,0,C.J,A.c8t())
else w=k
v=j==null?C.l7:j
return new A.a2k(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c9h(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dv(C.d.j(f.b),v)},
c9g(d){return A.aBA(D.dx,15)},
o5:function o5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
azs:function azs(d,e){this.a=d
this.b=e},
fS:function fS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azB:function azB(){},
azC:function azC(){},
iu:function iu(d,e,f,g,h,i,j,k,l,m){var _=this
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
mR:function mR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2f:function a2f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a2k:function a2k(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
af9:function af9(d,e){this.a=d
this.b=e},
a2l:function a2l(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Dv:function Dv(d,e){this.a=d
this.b=e},
LK:function LK(d){this.a=d},
a2m:function a2m(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
y3:function y3(d,e){this.a=d
this.b=e},
aiy:function aiy(){},
aiF:function aiF(){},
aiG:function aiG(){},
aiI:function aiI(){},
aiJ:function aiJ(){},
aiK:function aiK(){},
aiL:function aiL(){},
aiM:function aiM(){},
aiN:function aiN(){},
azD:function azD(d){this.a=d},
azE:function azE(){},
uY:function uY(d,e,f){this.a=d
this.b=e
this.c=f},
aiH:function aiH(){},
azF:function azF(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
azG:function azG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azH:function azH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7g:function a7g(d){this.b=d},
a2i:function a2i(d,e,f){this.d=d
this.e=e
this.a=f},
acj:function acj(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i7=e
_.d2=f
_.fY=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bD=_.aH=_.al=_.ar=$
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
c9i(d,e){var w=null
return new A.Su(e.w,B.f(e.r,w,w,w,w,w,w,w,w),w)},
azl(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ai(w.c,v.c,f)
u.toString
return new A.pt(t,e.b,new A.qq(v.a,v.b,u,B.ai(w.d,v.d,f)),!0)},
bJa(d,e,f){var w=A.azl(d.b,e.b,f),v=A.azl(d.d,e.d,f),u=A.azl(d.e,e.e,f)
return new A.vn(e.a,w,A.azl(d.c,e.c,f),v,u)},
bY5(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.ai(d.a,e.a,f)
w.toString
v=B.ai(d.b,e.b,f)
v.toString
return new A.eF(w,v)},
bJ8(d,e,f){return new A.yV(e.a,!0,B.ai(d.c,e.c,f),e.d,e.e,e.f,B.ai(d.r,e.r,f),e.w,e.x)},
cbI(d){return!0},
c9l(d){return D.aab},
bJ9(d,e,f,g){var w
if(d==null)w=f==null?C.I:null
else w=d
return new A.pQ(w,f,g,e)},
bL7(d,e,f){var w,v=A.kH(d.a,e.a,f,A.c8n(),x.dv)
v.toString
w=A.kH(d.b,e.b,f,A.c8p(),x.bN)
w.toString
return new A.R2(v,w)},
bYS(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rC(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.na(t,w,v,u)},
c39(d,e,f){var w,v,u,t=B.ai(d.a,e.a,f)
t.toString
w=B.ai(d.b,e.b,f)
w.toString
v=B.a2(d.c,e.c,f)
u=B.rC(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.nA(t,w,v,u)},
bYR(d,e,f){var w,v,u,t,s,r=B.ai(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oj(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bYP(B.bAz(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rC(d.b,e.b,f)
w=B.ai(d.c,e.c,f)
w.toString
s=A.kH(d.d,e.d,f,A.a0Q(),x.S)
if(u==null)u=v==null?C.I:null
return new A.l_(r,e.f,e.r,t,e.x,u,v,w,s)},
c38(d,e,f){var w,v,u,t,s,r=B.ai(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oj(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c36(B.bAz(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a2(d.a,e.a,f)
v=B.rC(d.b,e.b,f)
w=B.ai(d.c,e.c,f)
w.toString
s=A.kH(d.d,e.d,f,A.a0Q(),x.S)
if(u==null)u=v==null?C.I:null
return new A.lq(r,e.f,e.r,t,e.x,u,v,w,s)},
bYP(d,e,f,g,h,i){return new A.a7r(f,!1,g,i,d,e)},
bYQ(d){return C.d.ab(d.e,1)},
c36(d,e,f,g,h,i){return new A.afz(f,!1,g,i,d,e)},
c37(d){return C.d.ab(d.e,1)},
bJ4(d,e,f){var w,v=A.kH(d.a,e.a,f,A.c8m(),x.cm)
v.toString
w=A.kH(d.b,e.b,f,A.c8o(),x.es)
w.toString
return new A.ND(v,w,!0)},
bY4(d,e,f){return new A.NM(d,e==null?4:e,f)},
a28:function a28(){},
Du:function Du(d,e){this.a=d
this.b=e},
tR:function tR(d,e){this.r=d
this.w=e},
qq:function qq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adK:function adK(){},
pt:function pt(d,e,f,g){var _=this
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
yV:function yV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pQ:function pQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afb:function afb(){},
R2:function R2(d,e){this.a=d
this.b=e},
na:function na(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nA:function nA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
l_:function l_(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lq:function lq(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a7r:function a7r(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afz:function afz(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ND:function ND(d,e,f){this.a=d
this.b=e
this.c=f},
vm:function vm(){},
NM:function NM(d,e,f){this.a=d
this.b=e
this.c=f},
ait:function ait(){},
aix:function aix(){},
alN:function alN(){},
amb:function amb(){},
amc:function amc(){},
ame:function ame(){},
amf:function amf(){},
an4:function an4(){},
an3:function an3(){},
an5:function an5(){},
aqL:function aqL(){},
asE:function asE(){},
asF:function asF(){},
auj:function auj(){},
av1:function av1(){},
av0:function av0(){},
av2:function av2(){},
azh:function azh(){},
LE:function LE(){},
LF:function LF(d,e,f){this.c=d
this.d=e
this.a=f},
azj:function azj(d){this.a=d},
azi:function azi(d){this.a=d},
Su:function Su(d,e,f){this.c=d
this.e=e
this.a=f},
Zj:function Zj(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c1F(d,e,f){var w=B.ag(f),v=w.i("ae<1,k1>")
v=B.Q(new B.ae(f,new A.b05(),v),v.i("av.E"))
w=w.i("ae<1,c>")
w=B.Q(new B.ae(f,new A.b06(),w),w.i("av.E"))
return new A.adL(e,d,v,w,null)},
bVg(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a83(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tO(v,C.ak,C.x,new B.kA(1),v,v,v,v,C.bG,v)
u=new A.a29(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aM(x.j))
u.bl()
return u},
adL:function adL(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b05:function b05(){},
b06:function b06(){},
a29:function a29(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.WG$=h
_.aUe$=i
_.ds$=j
_.aj$=k
_.dS$=l
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
bi8:function bi8(d,e){this.a=d
this.b=e},
azk:function azk(){},
k1:function k1(d,e){this.a=d
this.b=e},
o4:function o4(d,e){this.a=d
this.b=e},
aiu:function aiu(){},
aiv:function aiv(){},
aiw:function aiw(){},
Uw:function Uw(){},
B1:function B1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b07:function b07(d){this.a=d},
b08:function b08(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b09:function b09(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6y(d,e){var w=d==null?B.cj(C.I,1):d
return new A.a6x(e!==!1,w)},
a2o:function a2o(){},
a6x:function a6x(d,e){this.a=d
this.b=e},
NT:function NT(){},
a6z:function a6z(){},
azQ:function azQ(){},
aGi:function aGi(d,e){this.a=d
this.b=e},
aiQ:function aiQ(){},
am8:function am8(){},
am9:function am9(){},
amg:function amg(){},
LN:function LN(){},
w9:function w9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hz:function hz(){},
a6D:function a6D(d){this.a=d},
a6E:function a6E(d){this.a=d},
a6F:function a6F(d){this.a=d},
NO:function NO(){},
NP:function NP(){},
a6I:function a6I(d){this.a=d},
NR:function NR(){},
NS:function NS(d){this.a=d},
a6C:function a6C(d){this.a=d},
a6B:function a6B(d){this.a=d},
NN:function NN(d){this.a=d},
a6G:function a6G(d){this.a=d},
a6H:function a6H(d){this.a=d},
NQ:function NQ(d){this.a=d},
GQ:function GQ(){},
aWk:function aWk(d){this.a=d},
aWl:function aWl(d){this.a=d},
aWm:function aWm(d){this.a=d},
aWn:function aWn(d){this.a=d},
aWo:function aWo(d){this.a=d},
aWp:function aWp(d){this.a=d},
aWq:function aWq(d){this.a=d},
aWr:function aWr(d){this.a=d},
aWs:function aWs(d){this.a=d},
aWt:function aWt(d){this.a=d},
aWu:function aWu(d){this.a=d},
aWv:function aWv(d){this.a=d},
aWw:function aWw(d){this.a=d},
Pc:function Pc(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
X2:function X2(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e7$=g
_.c5$=h
_.c=_.a=null},
bie:function bie(d,e){this.a=d
this.b=e},
bic:function bic(d){this.a=d},
bid:function bid(d,e){this.a=d
this.b=e},
bib:function bib(){},
bif:function bif(d){this.a=d},
bC_(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.K:d
return new A.q4(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aMn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tu:u
else w=g
v=f==null?A.azr(!1,u,0,u,!1,D.wj):f
w=new A.eh(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.azr(!1,u,0,u,!1,D.wj):d,j,a0,i,s,!1,p)
w.arW(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bZj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ai(d.x,e.x,f)
m.toString
w=A.bHM(d.ay,e.ay,f)
v=A.bHM(d.ch,e.ch,f)
u=B.ai(d.as,e.as,f)
u.toString
t=e.CW
s=A.kH(d.cy,e.cy,f,A.a0Q(),x.S)
r=B.a2(d.r,e.r,f)
q=B.rC(d.w,e.w,f)
p=A.kH(d.a,e.a,f,A.c8l(),x.cw)
p.toString
o=B.bLF(d.db,e.db,f)
o.toString
n=B.ai(d.dy.a,e.dy.a,f)
n.toString
return A.aMn(v,m,w,r,e.z,s,new A.yU(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Pd(n),!1,u,o,!0,e.cx,p)},
azr(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aM(127.5),D.dx.v()>>>16&255,D.dx.v()>>>8&255,D.dx.v()&255):null
else w=e
return new A.a2h(h,w,g,i,f,!1)},
bHM(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a2(v.a,u.a,f),s=B.rC(v.b,u.b,f),r=B.ai(v.c,u.c,f)
r.toString
r=A.bJ9(t,A.kH(v.d,u.d,f,A.a0Q(),x.S),s,r)
s=B.a2(d.b,e.b,f)
u=B.rC(d.c,e.c,f)
v=B.ai(d.e,e.e,f)
v.toString
return A.azr(!1,s,v,u,e.a,new A.LI(!1,r,w.c,!0))},
bVl(d,e,f){var w=B.a2(d.c,e.c,f),v=B.rC(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aM(127.5),D.dx.v()>>>16&255,D.dx.v()>>>8&255,D.dx.v()&255):null
return new A.mS(e.a,e.b,w,v)},
cbJ(d){return!0},
bE4(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jA)return A.bEV(w.a,A.bBE(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dx:w},
c63(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jA)w=A.bEV(v.a,A.bBE(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dx}return A.aBA(w,40)},
bOc(d,e,f,g,h){var w,v=A.bE4(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jA)w=A.bEV(u.a,A.bBE(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dx}u=A.aBA(w,40)
return new A.NM(v,h==null?4:h,u)},
cbH(d,e){return!0},
c88(d,e){return Math.abs(d.a-e.a)},
c9o(d,e){var w=J.cM(e,new A.bxb(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c9k(d,e){return-1/0},
c9j(d,e){return d.a[e].b},
bPo(d){var w=J.cM(d,new A.bx8(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bPn(d){return A.aBA(D.dx,15)},
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
aMo:function aMo(){},
Pd:function Pd(d){this.a=d},
a2h:function a2h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mS:function mS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
LI:function LI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yU:function yU(d,e,f){this.a=d
this.b=e
this.c=f},
aMd:function aMd(d,e){this.a=d
this.b=e},
a6A:function a6A(){},
Fn:function Fn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bxb:function bxb(d){this.a=d},
bxa:function bxa(d){this.a=d},
a8q:function a8q(){},
bx8:function bx8(){},
nd:function nd(){},
qy:function qy(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rP:function rP(d,e){this.a=d
this.b=e},
tT:function tT(d,e){this.a=d
this.b=e},
Hh:function Hh(d){this.a=d},
Pe:function Pe(d){this.a=d},
zJ:function zJ(d,e){this.a=d
this.b=e},
aiD:function aiD(){},
aiE:function aiE(){},
aiS:function aiS(){},
ama:function ama(){},
amd:function amd(){},
anZ:function anZ(){},
ao_:function ao_(){},
ao0:function ao0(){},
ao2:function ao2(){},
ao3:function ao3(){},
ao4:function ao4(){},
ao5:function ao5(){},
asD:function asD(){},
aui:function aui(){},
aMp:function aMp(d){this.a=d},
aMq:function aMq(){},
aMr:function aMr(){},
zK:function zK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ao1:function ao1(){},
aMs:function aMs(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aMv:function aMv(){},
aMt:function aMt(d,e,f){this.a=d
this.b=e
this.c=f},
aMu:function aMu(d,e,f){this.a=d
this.b=e
this.c=f},
aMw:function aMw(){},
vS:function vS(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a8p:function a8p(d,e,f){this.d=d
this.e=e
this.a=f},
acw:function acw(d,e,f,g,h,i,j,k){var _=this
_.aE=d
_.i7=e
_.d2=f
_.fY=g
_.B=h
_.a4=_.W=_.V=null
_.a_=i
_.bD=_.aH=_.al=_.ar=$
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
bAG(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ag(o),l=new B.ae(o,new A.azu(),m.i("ae<1,G>")).jM(0,new A.azv()),k=e-l,j=new A.azy(k,d,n)
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
new B.j0(o,m.i("j0<1>")).aB(0,new A.azw(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j0(o,m.i("j0<1>")).aB(0,new A.azx(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
azu:function azu(){},
azv:function azv(){},
azy:function azy(d,e,f){this.a=d
this.b=e
this.c=f},
azz:function azz(d,e,f){this.a=d
this.b=e
this.c=f},
azw:function azw(d,e,f){this.a=d
this.b=e
this.c=f},
azx:function azx(d,e,f){this.a=d
this.b=e
this.c=f},
bBE(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j0(w,B.ag(w).i("j0<1>")).aB(0,new A.aJA(v,d))
else throw B.e(B.bM('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aJA:function aJA(d,e){this.a=d
this.b=e},
aCN(d,e){var w,v
if(e!=null){w=B.ag(e).i("ae<1,G>")
v=B.Q(new B.ae(e,new A.aCO(),w),w.i("av.E"))
return A.c9b(d,new A.a2Y(v,x.cX))}else return d},
aCO:function aCO(){},
c2g(d,e){var w=!0
if(d!==C.fb)if(!(d===C.ak&&e===C.x))w=d===C.iE&&e===C.b4
if(w)return D.ED
else{w=!0
if(d!==C.hB)if(!(d===C.iE&&e===C.x))w=d===C.ak&&e===C.b4
if(w)return D.EE
else return D.aaV}},
Oh:function Oh(d,e){this.a=d
this.b=e},
a2O:function a2O(d,e){this.a=d
this.b=e},
zO:function zO(d,e){this.a=d
this.$ti=e},
aoc:function aoc(){},
c9b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.co(j.r,C.ai,k,k,h)
for(j=B.Nx(d),w=B.b([],x.I),v=new B.Nz(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fK('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Ny(v,r)
v.Dw()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dw()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.es(B.b([],i),!0,s)
p=new B.KZ(new B.co(t,p,k,new B.ar8([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iE(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2Y:function a2Y(d,e){this.a=d
this.b=0
this.$ti=e},
b3C:function b3C(){},
bBs(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bVo(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aBA(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aM(d.gOe()*w),C.d.aM(d.gGt()*w),C.d.aM(d.gKF()*w))},
bJ7(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bBt(d){var w=d.a,v=w?A.b04(d.b):0,u=w?A.b04(d.c):0,t=w?A.b04(d.d):0
return new B.aj(v,u,t,w?A.b04(d.e):0)},
c_y(d){var w
if(d.c===0){d.seX(null)
w=B.c5(d.r)
d.r=B.aF(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gt(0)}},
bCm(d,e,f,g){var w
if(f!=null){d.r=C.I.gt(0)
d.seX(f.mP(0,g))}else{w=e==null?C.K:e
d.r=w.gt(w)
d.seX(null)}},
b04(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kH(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kg(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kg(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
cav(d,e,f){return C.d.aM(d+(e-d)*f)},
bEV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a8c.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aL:C.p
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bP(t.x,C.n,s,18),C.aQ],w))
v.push(B.ao(new B.dy(t.c,!1,s),1))
v=B.af(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.F,B.f(t.d,s,1,C.ad,s,B.bB(u==null?C.h:u,22,C.E),s,s,s)],w)
return B.bh(r,B.a4(w,C.z,C.im,C.i),q,s,C.al,s,s,3)}}
A.vl.prototype={
M0(d){return this.aUd(d)},
aUd(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M0=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e2("finance_summary",B.a6(["p_from",E.op(d.a),"p_to",E.op(d.b)],s,r),r),$async$M0)
case 3:q=f
if(q==null){u=D.as4
w=1
break}if(x.f.b(q)){u=B.cP(q,s,r)
w=1
break}u=D.auj
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M0,v)},
M_(d){return this.aUc(d)},
aUc(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$M_=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e2("finance_kpis",B.a6(["p_from",E.op(d.a),"p_to",E.op(d.b)],s,r),r),$async$M_)
case 3:q=f
if(x.f.b(q)){u=B.cP(q,s,r)
w=1
break}u=D.arL
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M_,v)},
LZ(d){return this.aUb(d)},
aUb(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LZ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.e2("finance_bookings_list",B.a6(["p_from",E.op(d.a),"p_to",E.op(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$LZ)
case 3:q=f
if(x.f.b(q)){u=B.cP(q,s,r)
w=1
break}u=D.as9
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LZ,v)},
pI(d){return this.arE(d)},
arE(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fZ("sevdesk-sync",B.a6(["from",E.op(d.a),"to",E.op(d.b)],s,s)),$async$pI)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Y(r,"upserted")=="number"){u=C.d.X(B.fw(J.Y(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pI,v)},
LV(d){return this.aU2(d)},
aU2(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LV=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fZ("finance-export-pdf",B.a6(["from",E.op(d.a),"to",E.op(d.b)],s,s)),$async$LV)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Y(r,"base64")=="string"){u=B.aH(J.Y(r,"base64"))
w=1
break}throw B.e(B.e2("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LV,v)}}
A.EM.prototype={
Gn(d){return this.akF(d)},
akF(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gn=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M0(d),$async$Gn)
case 7:q=f
o=A.aHo(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.BG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gn,v)},
Gi(d){return this.akq(d)},
akq(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gi=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M_(d),$async$Gi)
case 7:q=f
o=A.bY2(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.BG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gi,v)},
G8(d){return this.akc(d)},
akc(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G8=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LZ(d),$async$G8)
case 7:q=f
o=A.bY1(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.BG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G8,v)},
pI(d){return this.arF(d)},
arF(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a1(n)
p=r.BG(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pI,v)},
LU(d){return this.aU1(d)},
aU1(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LU=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LV(d),$async$LU)
case 7:q=f
o=C.iZ.cH(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.BG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LU,v)},
BG(d){var w,v
if(d instanceof B.vj)return d
if(d instanceof B.mi){if(d.b==="42501")return new B.wd(d.a)
return new B.tw(d.a)}if(d instanceof B.O5){w=A.c9T(d.b)
v=""+d.a
return new B.tw(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Bu("Unerwarteter Fehler: "+B.i(d))},
$iaH8:1}
A.pP.prototype={
gamj(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbs(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.on.prototype={
gbs(){return[this.a,this.b]}}
A.rA.prototype={
L(){return"Geldfluss."+this.b}}
A.qA.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vW.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wT.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCb.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aDm.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oo.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Dc.prototype={
gbs(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yS.prototype={
Hh(d){return this.arD(0)},
arD(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hh=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sed(0,C.dF)
s=t.r
r=s.aC(0,$.qZ(),x.P)
p.a=null
w=3
return B.k(B.ps(new A.aH2(p,t,r),x.H),$async$Hh)
case 3:t.sed(0,f)
q=t.f
if(q.ghe(q)==null){q=$.bAf()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bGD())
s.c_($.bAe())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hh,v)},
LT(){return this.aU0()},
aU0(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LT=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sed(0,C.dF)
s=t.r.aC(0,$.qZ(),x.P)
q.a=null
w=3
return B.k(B.ps(new A.aH1(q,t,s),x.H),$async$LT)
case 3:t.sed(0,e)
r=t.f
u=r.ghe(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LT,v)}}
A.vk.prototype={
U(){return new A.am5(D.Be)}}
A.xc.prototype={
L(){return"_Filter."+this.b}}
A.am5.prototype={
gSC(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbE(),t=u.ak($.qZ(),x.P),s=u.ak($.bAe(),x.e)
u=$.dg()
return B.de(D.aaL,v,B.oR(B.di(B.b([new B.fi("Zeitraum",u.a9(t.a)+" \u2013 "+u.a9(t.b),v,v),C.O,new A.am4(w.w,w.gSC(),new A.beu(w),new A.bev(w),v),C.aC,B.dh(s,new A.bew(w),new A.bex(),new A.bey(),!1,!0,!1,x.m,x.l)],x.p),v,C.cj,v,C.H,!1),C.n,new A.bez(w)),v,v,v)},
at_(d){var w=B.ag(d).i("aY<1>")
w=B.Q(new B.aY(d,new A.ber(this),w),w.i("t.E"))
return w}}
A.am4.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.x6("Alle",t===D.Be,new A.ben(v),u),new A.x6("Ausgaben",t===D.a_u,new A.beo(v),u),new A.x6("Erl\xf6se",t===D.a_v,new A.bep(v),u),new A.x6("Privat",t===D.a_w,new A.beq(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.x6("Konto "+w+" \xd7",!0,v.f,u))
return B.jh(C.c6,t,C.d0,6,8)}}
A.x6.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aL:C.a4,s=B.aq(9999),r=B.aq(9999),q=B.aq(9999),p=B.cj(v?C.n:C.a7,1)
return B.bw(w,!0,w,B.dp(!1,C.V,!0,s,B.dV(!1,r,!0,B.aL(w,B.f(u,w,w,w,w,B.w(C.h,13,C.E),w,w,w),C.q,w,w,new B.aC(w,w,p,q,w,w,C.A),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.b9),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.Jb.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aQH
w=this.d
if(w.length===0)return D.aQI
v=B.ag(w).i("aY<1>")
u=new B.aY(w,new A.bip(),v).f0(0,0,new A.biq())
t=new B.aY(w,new A.bir(),v).f0(0,0,new A.bis())
s=new B.aY(w,new A.bit(),v).f0(0,0,new A.biu())
r=new B.aY(w,new A.biv(),v).gq(0)
v=w.length
q=$.cT()
p=q.a9(t)
o=A.bEp(u,A.bxt("expense","",u))
q=s===0?"":" \xb7 Privat "+q.a9(s)
n=x.p
q=B.b([B.f(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+o+q,l,l,l,l,B.w(C.h,14,C.E),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.K(q,B.b([C.aM,B.f(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.w(C.m,12,C.k),l,l,l)],n))
if(r>0)C.b.K(q,B.b([C.aM,B.f(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.w(C.a0,12,C.k),l,l,l)],n))
k=B.b([B.bh(l,B.a4(q,C.z,C.f,C.i),C.a4,l,C.B,l,l,3),C.O],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.I)(w),++m)C.b.K(k,B.b([new A.aj9(w[m],l),C.F],n))
return B.a4(k,C.a9,C.f,C.i)}}
A.aj9.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aD(n).length!==0)===!0){n.toString
n=C.c.aD(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.af(B.b([B.ao(B.f(n,p,2,C.ad,p,B.w(C.h,14,C.E),p,p,p),1),C.ag,A.bHP(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.f($.dg().a9(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bF9(w),p,1,C.ad,p,B.w(C.m,12,C.k),p,p,p)
v=C.d.ab(o.y,1)
t=$.cT()
s=t.a9(o.w)
t=t.a9(o.x)
r=o.gamj()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aM,w,C.b2,B.f("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.ad,p,B.w(C.m,12,C.k),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.K(q,B.b([C.aM,B.af(B.b([D.aef,C.c1,B.ao(B.f("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.w(C.a0,11,C.k),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.bh(p,B.a4(q,C.z,C.f,C.i),p,p,C.cJ,p,p,3)}}
A.xf.prototype={
p(d){var w=null
return B.bh(w,B.af(B.b([B.bP(this.e,this.d,w,w),C.ag,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a4,w,C.B,w,w,3)}}
A.yT.prototype={
d9(d,e){var w=null,v=e.ak($.qZ(),x.P),u=e.ak($.bAf(),x.aN)
return B.oR(B.di(B.b([new B.fi("Finanzen","Dashboard",new A.ahI(e.ak($.bAc(),x.c).gjg(),new A.aHe(this,d,e),new A.aHf(this,d,e),new A.aHg(d),new A.aHh(d),new A.aHi(d),new A.aHj(this,d,e,v),w),w),C.aC,new A.apA(v,w),C.c2,D.ahk,C.c2,B.dh(u,new A.aHk(),new A.aHl(),new A.aHm(),!1,!0,!1,x.d,x.l)],x.p),w,C.cj,w,C.H,!1),C.n,new A.aHn(e))},
JN(d,e){return this.aMC(d,e)},
aMC(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$JN=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bAc()
w=3
return B.k(e.aC(0,n.ghP(),x.F).Hh(0),$async$JN)
case 3:m=g
if(d.e==null){w=1
break}t=e.aC(0,n,x.c)
s=t.ghe(t)==null
r=t.ghe(t)
if(r instanceof B.vj)q=r.a
else q=r==null?null:J.al(r)
if(s)p="sevDesk synchronisiert: "+B.i(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.O(x.q).f
o=s?C.L:D.a8d
n.aR(B.c0(null,null,null,null,null,C.r,null,B.f(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JN,v)},
BH(d,e){return this.axO(d,e)},
axO(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BH=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aC(0,$.bAc().ghP(),x.F).LT(),$async$BH)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aR(D.aCu)
w=1
break}t=B.oP(C.v,10)
w=4
return B.k($.bRB().u5(s,"finanzauswertung.pdf",t,null,null,null),$async$BH)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BH,v)},
BI(d,e,f){return this.aKb(d,e,f)},
aKb(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BI=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.h3(null,null,!0,null,new A.aHb(f,d),d,null,!0,!0,x.cJ),$async$BI)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mP(e.aC(0,$.bK(),x.A))
p=f.a
o=f.b
n=$.dg()
m=n.a9(p)
n=n.a9(o)
w=8
return B.k(r.wb("finance_period",p,o,B.a6(["period_from",p.dV()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BI)
case 8:if(d.e!=null)d.O(x.q).f.aR(F.mt)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.O(x.q).f.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Fehler: "+B.i(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BI,v)}}
A.ahI.prototype={
p(d){var w=this,v=null,u=A.WI(C.n,F.fV,C.n,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.WI(v,D.acY,v,w.r,"Gesellschafter-Freigaben"),s=A.WI(v,D.abd,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.WI(v,D.yg,v,r?v:w.d,"sevDesk synchronisieren"),p=A.WI(C.a0,C.i3,C.a0,r?v:w.e,"PDF-Export")
return B.af(B.b([u,C.aQ,t,C.aQ,s,C.aQ,q,C.aQ,p,C.aQ,A.WI(C.an,C.fU,C.an,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.G,0,v,v)}}
A.ane.prototype={
p(d){var w,v=this,u=null,t=B.aq(12),s=B.aq(12),r=B.aq(12),q=v.w
if(q==null)q=C.a7
q=B.cj(q,1)
w=v.r
if(w==null)w=C.h
return B.tS(B.dp(!1,C.V,!0,t,B.dV(!1,s,!0,B.aL(u,B.bP(v.c,w,u,20),C.q,u,u,new B.aC(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a4,0,u,u,u,u,u,C.b9),u,v.d,u,u)}}
A.apA.prototype={
d9(d,e){var w=null,v=this.e,u=$.dg(),t=x.p
return B.bh(w,B.a4(B.b([D.a9S,C.F,B.af(B.b([D.adT,C.at,B.ao(B.f(u.a9(v.a)+" \u2013 "+u.a9(v.b),w,w,w,w,B.w(C.h,16,C.E),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jh(C.c6,B.b([new A.JG("Monat",new A.blG(e),w,w),new A.JG("Jahr (YTD)",new A.blH(e),w,w),new A.JG("Zeitraum w\xe4hlen \u2026",new A.blI(this,d,e),D.abS,w)],t),C.d0,6,8)],t),C.z,C.f,C.i),w,w,C.B,w,w,3)},
J7(d,e){return this.aJ5(d,e)},
aJ5(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$J7=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b0(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.axc(new A.blF(),d,B.bE(B.b3(t)-5,1,1,0,0,0,0),new B.lS(s.a,s.b,x.bz),B.bE(B.b3(t)+1,1,1,0,0,0,0),C.ea),$async$J7)
case 2:r=g
if(r!=null)e.aC(0,$.qZ().ghP(),x.V).un(0,new E.lY(r.a,r.b))
return B.o(null,v)}})
return B.p($async$J7,v)}}
A.JG.prototype={
p(d){var w=null,v=B.aq(9999),u=B.aq(9999),t=B.aq(9999),s=B.cj(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bP(p,C.h,w,14),C.aQ],r))
q.push(B.f(this.c,w,w,w,w,B.w(C.h,13,C.E),w,w,w))
return B.dp(!1,C.V,!0,v,B.dV(!1,u,!0,B.aL(w,B.af(q,C.j,w,C.f,C.G,0,w,w),C.q,w,w,new B.aC(w,w,s,t,w,w,C.A),w,w,w,w,C.fQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a4,0,w,w,w,w,w,C.b9)}}
A.K5.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jz(new A.bsr(this)),C.c2,D.a9Y,C.t],q),o=this.c.w
if(o.length===0)p.push(B.bh(r,B.af(B.b([D.ael,C.ag,B.ao(B.f("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.w(C.m,14,C.k),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a4,r,C.B,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.I)(o),++u){t=o[u]
s=t.c
C.b.K(w,B.b([new A.ahG(t.a,t.b,s,A.bF9(s),t.d,new A.bss(d,t),r),C.F],q))}p.push(B.a4(w,C.j,C.f,C.i))}return B.a4(p,C.a9,C.f,C.i)}}
A.ahG.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aL:C.a4,q=B.cj(s?C.n:C.a7,1),p=B.aq(4),o=v.c,n=x.p
t=B.b([B.aL(C.T,B.f(C.c.a1(o,0,1),u,u,u,u,B.bB(C.h,14,C.o),u,u,u),C.q,u,u,new B.aC(r,u,q,p,u,u,C.A),u,36,u,u,u,u,u,36),C.ag,B.ao(B.a4(B.b([B.f(o+" \xb7 "+v.d,u,1,C.ad,u,B.w(C.h,14,C.E),u,u,u),B.f(v.f,u,u,u,u,B.w(C.m,12,C.k),u,u,u)],n),C.z,C.f,C.i),1),A.bHP(o,v.r,t)],n)
C.b.K(t,B.b([C.c1,C.Fq],n))
w=B.bh(u,B.af(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cJ,u,u,3)
return B.bw(u,!0,u,B.dV(!1,B.aq(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.IM.prototype={
p(d){var w=null
return B.bh(C.a0,B.af(B.b([D.aeV,C.ag,B.ao(B.f(this.c,w,w,w,w,B.w(C.h,14,C.k),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fl,w,C.B,w,w,3)}}
A.a2s.prototype={
p(d){var w=null,v=this.d,u=this.c,t=A.bxt(v,this.e,u),s=A.bEp(u,t),r=B.w(A.bP7(v,t),15,C.E)
return B.f(s,w,w,w,A.c9J(v,t)+" "+$.cT().a9(Math.abs(u)),r,w,w,w)}}
A.a8d.prototype={
d9(d,e){return B.dh(e.ak($.bGD(),x.cn),new A.aMa(),new A.aMb(),new A.aMc(),!1,!0,!1,x.X,x.l)}}
A.J6.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.azN,C.t,B.jz(new A.bi_(v,q,100-t.w.a,w,p)),C.t,new A.amw(u),C.aC,D.azM,C.t,new A.aiC(t,u),C.aC,D.azH,C.t,B.bw(u,!0,u,B.kd(u,B.bh(u,new A.UW(t,220,u),u,u,C.B,u,u,3),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bi0(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aC,D.azz,C.t,B.bw(u,!0,u,B.kd(u,new A.Vc(t,200,!1,u),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bi1(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aC,D.azE,C.t,new A.aom(t,u),C.aC,D.azB,C.t,new A.akt(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aC,D.azJ,C.t,new A.auf(t,u)],s))
return B.a4(r,C.a9,C.f,C.i)}}
A.amw.prototype={
p(d){var w=null
return B.f("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.w(C.m,11,C.k).cC(1.35),w,w,w)}}
A.anR.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.a0:C.an
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bi2(m,d):l
r=x.p
q=B.b([B.ao(B.f(m.c.toUpperCase(),l,l,l,l,B.w(C.m,10,C.o).fI(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cj(C.a0,0.8)
n=B.aq(4)
q.push(B.aL(l,B.f("Ziel "+p,l,l,l,l,B.w(C.a0,9,C.o),l,l,l),C.q,l,l,new B.aC(l,l,o,n,l,l,C.A),l,l,l,l,C.nJ,l,l,l))}q=B.b([B.af(q,C.j,l,C.f,C.i,0,l,l),C.aM,B.NK(C.d3,B.f(m.d,l,l,l,l,B.bB(w,22,C.o),l,l,l),C.hN)],r)
p=m.e
if(p!=null)q.push(B.f(p,l,2,C.ad,l,B.w(C.m,10,C.aE),l,l,l))
q.push(C.d_)
q.push(B.af(B.b([new A.VM("Vormonat",m.r,l),C.c1,new A.VM("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.d_)
q.push(B.ao(new A.Zv(v,m.y,m.z,l),1))
return B.bw(l,u,l,B.kd(l,B.bh(l,B.a4(q,C.z,C.f,C.i),l,l,C.c_,l,l,3),C.a8,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.VM.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aq(4)
return B.aL(r,B.f(this.c+" \u2014",r,r,r,r,B.w(C.m,9,C.o),r,r,r),C.q,r,r,new B.aC(C.a7,r,r,q,r,r,C.A),r,r,r,r,C.nJ,r,r,r)}w=q>=0
v=w?C.an:C.a0
u=v.es(0.12)
t=B.cj(v,0.7)
s=B.aq(4)
return B.aL(r,B.af(B.b([B.bP(w?F.ab_:D.aaZ,v,r,10),C.Zh,B.f(this.c+" "+C.d.ab(q,1)+" %",r,r,r,r,B.w(v,9,C.o),r,r,r)],x.p),C.j,r,C.f,C.G,0,r,r),C.q,r,r,new B.aC(u,r,t,s,r,r,C.A),r,r,r,r,C.nJ,r,r,r)}}
A.Zv.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eF(v,j[v]))
u=C.b.jM(j,new A.brt())
t=C.b.jM(j,new A.bru())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.brv(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6y(k,!1)
w=B.b([A.aMn(k,2,A.azr(!1,C.n.es(0.16),0,k,!0,D.wj),C.n,0.35,k,D.Eu,k,!0,!1,!0,!1,D.FZ,!1,10,D.YK,!0,C.lF,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Pc(A.bC_(k,k,k,D.anR,l,D.Cf,D.Eq,D.Ev,w,D.ahx,k,m,k,n,D.Y5,D.anS,D.aae),C.ao,C.a3,k,k)}}
A.UW.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aPO
w=C.b.f0(p,0,new A.b7F())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.azA(B.b([A.a2j(q,q,D.BG,q,C.n,q,q,q,r.b,6),A.a2j(q,q,D.BG,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bR(A.bHN(A.azt(q,q,u,q,q,A.a6y(q,!1),q,new A.yV(!0,!0,q,new A.b7G(),A.a0K(),!1,q,A.awX(),A.a0K()),q,v,q,q,new A.vn(!0,new A.pt(16,q,new A.qq(!0,new A.b7H(this),46,q),!0),D.kB,D.kB,new A.pt(16,q,new A.qq(!0,new A.b7I(p),26,q),!0)))),this.d,q)},
aLS(d){if(Math.abs(d)>=1000)return C.d.ab(d/1000,1)+" k"
return C.d.ab(d,0)}}
A.Vc.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ae(v,new A.b8I(),w),x.i)
C.b.K(o,new B.ae(u,new A.b8J(),w))
t=C.b.f0(o,0,new A.b8K())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.azA(B.b([A.a2j(q,q,q,q,C.n,q,q,q,v[s],14),A.a2j(q,q,q,q,C.an,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bR(A.bHN(A.azt(q,q,n,q,q,A.a6y(q,!1),q,D.Ev,q,o,q,q,new A.vn(!0,D.kB,D.kB,D.kB,new A.pt(16,q,new A.qq(!0,new A.b8L(p),26,q),!0)))),this.d,q)
return this.e?r:B.bh(q,r,q,q,C.B,q,q,3)}}
A.aom.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aPN
w=new B.ae(l,new A.biJ(),B.ag(l).i("ae<1,G>")).jM(0,new A.biK())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.f(r.b,m,m,m,m,B.w(C.h,14,C.o),m,m,m)
p=$.cT()
o=r.d
n=new B.aZ(4,4)
o=B.b([new B.i_(C.ah,C.f,C.i,C.j,m,C.aV,m,0,B.b([new B.iw(1,C.cR,B.a4(B.b([q,B.f(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.a9(r.f),m,m,m,m,B.w(C.m,12,C.aE),m,m,m)],v),C.z,C.f,C.i),m),C.at,B.f(p.a9(o),m,m,m,m,B.bB(C.h,16,C.o),m,m,m)],v),m),C.d_,new B.DU(new B.d7(n,n,n,n),C.bt,B.zL(C.a7,m,8,C.d.bo(o/w,0,1),D.Bv),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.N(r)===B.N(q)&&B.a0O(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bh(m,B.a4(u,C.j,C.f,C.i),m,m,C.B,m,m,3)}}
A.akt.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ao(new A.CD("Aktive Kunden",""+s,u),1)
w=B.ao(new A.CD("K\xe4ufe",""+t.a,u),1)
v=$.cT()
return B.bh(u,B.af(B.b([s,w,B.ao(new A.CD("\xd8-Warenkorb",v.a9(t.d),u),1),B.ao(new A.CD("Umsatz/Kunde",v.a9(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.B,u,u,3)}}
A.CD.prototype={
p(d){var w=null
return B.a4(B.b([B.f(this.c.toUpperCase(),w,w,w,w,B.w(C.m,10,C.o).fI(0.6),w,w,w),C.b2,B.f(this.d,w,w,w,w,B.bB(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.G)}}
A.auf.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ae(q,new A.btK(),B.ag(q).i("ae<1,G>")).jM(0,new A.btL()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aZ(4,4)
t=B.b([new B.i_(C.ah,C.f,C.i,C.j,r,C.aV,r,0,B.b([new B.iw(1,C.cR,B.f(u.b,r,1,C.ad,r,B.w(C.h,13,C.o),r,r,r),r),B.f(""+u.c+"\xd7 ",r,r,r,r,B.w(C.m,12,C.E),r,r,r),B.f($.cT().a9(t),r,r,r,r,B.w(C.h,13,C.o),r,r,r)],o),r),C.aM,new B.DU(new B.d7(s,s,s,s),C.bt,B.zL(C.a7,r,6,C.d.bo(t/p,0,1),D.Bv),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.N(u)===B.N(s)&&B.a0O(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.F)
C.b.K(n,t)}return B.bh(r,B.a4(n,C.j,C.f,C.i),r,r,C.B,r,r,3)}}
A.xa.prototype={
p(d){var w=null
return B.bh(w,B.f(this.c,w,w,w,w,B.w(C.m,13,C.k),w,w,w),C.a4,w,C.B,w,w,3)}}
A.aiC.prototype={
d9(d,e){return B.dh(e.ak($.bAd(),x.fM),new A.b5X(this,d,e),new A.b5Y(),new A.b5Z(),!1,!0,!1,x.h,x.l)}}
A.BD.prototype={
U(){return new A.Uy()},
aZ_(){return this.d.$0()}}
A.Uy.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.b0(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.Y(w,"as_of"))!=null){w.toString
u=B.dZ(J.al(J.Y(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pV[t].a
if(v)r=""
else{r=B.b4(J.Y(w,s))
if(r==null)r=null
r=C.d.ab(r==null?0:r,2)
r=B.aA(r,".",",")}u.m(0,s,new B.bA(new B.cB(r,C.bj,C.aJ),$.ak()))}q.e!==$&&B.b1()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ci(v,v.r,v.e,B.l(v).i("ci<2>"))
while(v.u()){w=v.d
w.T$=$.ak()
w.S$=0}this.ao()},
rA(d){var w=this.e
w===$&&B.a()
w=C.c.aD(w.h(0,d).a.a)
w=B.aA(w,".","")
w=B.fJ(B.aA(w,",","."))
return w==null?0:w},
a4s(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pV[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ab(u,2)
s=B.aA(s,".",",")
t.kv(0,t.a.ye(C.aJ,C.bj,s))}}this.I(new A.b5L())},
aFG(){this.a4s(D.as6)
this.c.O(x.q).f.aR(D.aCQ)},
Io(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Io=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pV[e].a)
q=a2
t=4
w=7
return B.k($.a6q.cf().w0(B.b(["csv","txt"],x.s),C.nT,!0),$async$Io)
case 7:p=a5
a2=p
o=a2==null?null:J.KV(a2.a).c
if(o==null){w=1
break}n=C.aK.ae0(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Ck.cH(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.axK(l,B.bQ("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.aD(J.Y(k,0)).toLowerCase()
i=J.D7(q,j)?j:D.auk.h(0,j)
if(i==null)continue
d=C.c.aD(C.b.mb(J.bUO(k,1)))
d=B.aA(d,"\u20ac","")
d=B.aA(d," ","")
d=B.aA(d,".","")
h=B.aA(d,",",".")
g=B.fJ(h)
if(g!=null)J.fx(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aR(D.aCr)
w=1
break}r.a4s(m)
r.c.O(x.q).f.aR(B.c0(null,null,null,null,null,C.r,null,B.f(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Io,v)},
Iz(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Iz=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.I(new A.b5M(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0x("upsert_finance_balance",B.a6(["p_as_of",C.c.a1(n.dV(),0,10),"p_cash_and_bank",q.rA("cash_and_bank"),"p_receivables",q.rA("receivables"),"p_inventory_value",q.rA("inventory_value"),"p_other_current_assets",q.rA("other_current_assets"),"p_fixed_assets",q.rA("fixed_assets"),"p_current_liabilities",q.rA("current_liabilities"),"p_long_term_liabilities",q.rA("long_term_liabilities"),"p_equity",q.rA("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Iz)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZ_()
o=q.c
o.toString
B.aU(o,!1).eU()
q.c.O(x.q).f.aR(D.aCv)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aR(B.c0(null,null,null,null,null,C.r,null,B.f("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.I(new A.b5N(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Iz,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.f("Bilanzwerte erfassen",r,r,r,r,B.bB(C.h,18,C.o),r,r,r),p=s.f?r:new A.b5P(s,d),o=s.d
o===$&&B.a()
p=B.f6(D.adV,B.f("Stichtag: "+C.c.a1(o.dV(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ao(B.f6(D.af5,D.aIG,o?r:s.gaEC(),r),1)
v=x.p
w=B.b([p,C.F,B.af(B.b([w,C.at,B.ao(B.f6(D.aeR,D.aIt,o?r:s.gaFF(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pV[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dQ(r,C.aB,!1,r,!0,C.r,r,B.dX(),o.h(0,p.a),r,r,r,r,r,2,new B.c2(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a8,!0,r,!0,r,!1,r,C.aG,r,r,r,r,C.eC,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.B,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ak,r,C.Y,r,r,r,r),C.F],v))}w.push(B.f("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.w(C.m,11,C.k),r,r,r))
p=B.bR(B.eA(B.a4(w,C.a9,C.f,C.G),r,C.H),r,380)
o=s.f
w=B.df(C.c3,r,r,o?r:new A.b5Q(d),r,r)
o=o?r:s.gaFo()
t=B.dG(C.n,C.h,r,r,r,r,r)
return B.i8(B.b([w,B.dz(s.f?F.Zk:C.dC,o,t)],v),C.p,p,q)}}
A.bm.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.N(this)===B.N(e)&&B.a0O(this.gbs(),e.gbs())
else w=!0
return w},
gA(d){return(B.f7(B.N(this))^B.bPV(this.gbs()))>>>0},
j(d){B.bJ2()
return B.N(this).j(0)}}
A.LJ.prototype={
U(){return new A.Uz(B.A(x.S,x.J),new A.azD(B.A(x.x,x.T)),null,null)}}
A.Uz.prototype={
p(d){var w,v=this,u=v.a2k(),t=v.CW
t.toString
t=v.a2l(t.au(0,v.gfk().gt(0)))
w=v.a2l(u)
v.a.toString
return new A.LF(new A.a2i(t,w,null),u,null)},
a2l(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.azA(s.c,s.d,!1,r,s.a))}return d.aR4(w)},
a2k(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vd(t.ch)
if(r)s=w.a
r=t.y
t=t.aRZ(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aR5(A.bAH(!1,!0,!0,v.d,v.c,u.gatg(),v.f,v.e))}return t},
ath(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagt()||e==null||e.a==null){w=v.cy
v.I(w.gaQt(w))
return}v.I(new A.b61(v,e))},
kJ(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2k(),new A.b62(w)))}}
A.o5.prototype={
VR(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.azt(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRZ(d,e){return this.VR(null,null,d,e)},
aR5(d){return this.VR(null,d,null,null)},
aR4(d){return this.VR(d,null,null,null)},
XM(d,e,f){var w,v,u,t=A.kH(d.ch,e.ch,f,A.c8q(),x.dB),s=B.ai(d.CW,e.CW,f),r=A.bJa(d.d,e.d,f),q=A.bL7(d.e,e.e,f),p=A.bJ8(d.c,e.c,f),o=e.a
o=A.a6y(B.a2A(d.a.b,o.b,f),o.a)
w=B.ai(d.y,e.y,f)
v=B.ai(d.x,e.x,f)
u=B.ai(d.z,e.z,f)
r=A.azt(e.cx,B.a2(d.as,e.as,f),t,e.cy,u,o,A.bJ4(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.azs.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fS.prototype={
gdu(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.azB(),B.ag(v).i("ae<1,G>")).jM(0,new A.azC())
v=v.length
return w+(v-1)*this.d},
gbs(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iu.prototype={
gbs(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mR.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a2f.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a2k.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.af9.prototype={
L(){return"TooltipDirection."+this.b}}
A.a2l.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dv.prototype={
gbs(){return[this.a,this.b,C.bx,C.x,null]}}
A.LK.prototype={}
A.a2m.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.y3.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XM(v,w,d)}}
A.aiy.prototype={}
A.aiF.prototype={}
A.aiG.prototype={}
A.aiI.prototype={}
A.aiJ.prototype={}
A.aiK.prototype={}
A.aiL.prototype={}
A.aiM.prototype={}
A.aiN.prototype={}
A.azD.prototype={
Vd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uY(0,0,!1)
v=new A.zO(d,x.x)
u=this.a
if(u.aF(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uY(t,u,!0)}w=null
try{w=C.b.oZ(d,new A.azE())}catch(s){return new A.uY(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.aiH.prototype={}
A.azF.prototype={
ig(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0s(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acY(t,A.bAG(w,t.a),u)
l.y=u
l.aTk(e,u,f)
l.amF(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTt(d,e,m,t,r,s,n,o,f)}}},
acY(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e2("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j0(p,B.ag(p).i("j0<1>")).aB(0,new A.azG(t,q,r,s))
w.push(new A.a7g(q))}return w},
aTk(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aZ(m,m)
l=new B.d7(k,k,k,k)}j=o.w
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
a4=B.QZ(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.QZ(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.K:f).gt(0)
k.seX(null)
a6=b2.f.e0()
v.drawRRect(B.lG(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gt(0)
b1=e<f?new B.K(h,a9,g,b0):new B.K(h,b0,g,a9)
J.be(v.save())
v.clipRect(B.dO(b1),$.mL()[1],!0)
a6=b2.f.e0()
v.drawRRect(B.lG(a4),a6)
a6.delete()
v.restore()
b2.aTr(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gt(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.hq(a4))
n=A.aCN(new B.co(n.r,C.ai,null,null,k),o.r)
a6=b2.r.e0()
k=n.e
v.drawPath((k==null?n.e=new B.mW(n.gjv().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTt(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bi(a5,a5,a5,a5,B.cW(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lI().a_v(a8,a7.b),a7.a),C.bx,C.x,a5,b6.c,C.bG)
w.agN(b1.f)
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
if(v!==D.aLm)j=v===D.a_3&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_w(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.K(h,i,v,t)
s=b1.a
f=new B.aZ(s,s)
e=B.Gz(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gt(r)
d=b1.z
v-=h
t-=i
r=$.lI().KQ(new B.H(v,t),d).b
s=$.lI()
q=w.b
p=q.c
q=q.a.c
a0=s.KQ(new B.H(p,q.gbU(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaj1()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gt(a3)
a2.c=a1.b}a9.Wt(d,new A.azH(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aTr(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geo(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aZ(i.z,i.Q):C.a6
s=w?new B.aZ(i.x,i.y):C.a6
r=w?C.a6:new B.aZ(i.e,i.f)
w=w?C.a6:new B.aZ(i.r,i.w)
q=B.QZ(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a6:new B.aZ(i.z,i.Q)
p=v?C.a6:new B.aZ(i.x,i.y)
o=v?new B.aZ(i.e,i.f):C.a6
q=B.QZ(w,s,u,r,t,p,o,v?new B.aZ(i.r,i.w):C.a6)}else q=B.bCH(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a6)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gt(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
X7(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acY(b2,A.bAG(a8,b2.a),a8.ch)
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
break}++a3}return new A.a2m(d,q,a0,o,a2,a1,new A.eF(d.a,v),new B.r(n,t))}}return null}}
A.a7g.prototype={}
A.a2i.prototype={
bn(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcO(),t=new A.azF()
t.a1E()
$.an()
w=B.b_()
w.b=C.bl
t.f=w
w=B.b_()
w.b=C.b1
t.r=w
w=B.b_()
w.b=C.bl
w.r=C.p.gt(0)
t.w=w
w=B.b_()
w.b=C.b1
w.r=C.K.gt(0)
w.c=1
t.x=w
t=new A.acj(this.d,v,u,t,d,C.ba,new B.bs(),B.aM(x.j))
t.bl()
t.Zn(v.cy)
t.afX()
return t},
bx(d,e){e.sio(0,this.d)
e.sZ7(this.e)
e.scO(B.bD(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acj.prototype={
sio(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZ7(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1c(d.cy)
w.bd()},
scO(d){if(this.d2.k(0,d))return
this.d2=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ig(w,new A.a2O(t,v),new A.w9(u.aE,u.i7,u.d2,x.Q))
s.restore()},
a_o(d){var w=this,v=w.gC(0)
return new A.LK(w.fY.X7(d,v,new A.w9(w.aE,w.i7,w.d2,x.Q)))}}
A.a28.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Du.prototype={
L(){return"AxisSide."+this.b}}
A.tR.prototype={}
A.qq.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adK.prototype={
gbs(){return[!1,0,0,0]}}
A.pt.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vn.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eF.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eF))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.yV.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pQ.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.afb.prototype={
gbs(){return[this.a,this.b]}}
A.R2.prototype={
gbs(){return[this.a,this.b]}}
A.na.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nA.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.l_.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lq.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a7r.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afz.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ND.prototype={
gbs(){return[this.a,this.b,!0]}}
A.vm.prototype={}
A.NM.prototype={
aeq(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gt(v)
w.b=C.bl
d.iU(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.ait.prototype={}
A.aix.prototype={}
A.alN.prototype={}
A.amb.prototype={}
A.amc.prototype={}
A.ame.prototype={}
A.amf.prototype={}
A.an4.prototype={}
A.an3.prototype={}
A.an5.prototype={}
A.aqL.prototype={}
A.asE.prototype={}
A.asF.prototype={}
A.auj.prototype={}
A.av1.prototype={}
A.av0.prototype={}
A.av2.prototype={}
A.azh.prototype={
N0(d,e,f,g,h,i){return new B.io(this.aX6(d,e,f,g,h,i),x.g4)},
aX5(d,e,f,g){return this.N0(d,e,f,!0,g,!0)},
aX6(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$N0(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lI().akb(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h3(u-s,v)*v===u
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
A.LE.prototype={
a1E(){var w,v=this
$.an()
w=B.b_()
w.b=C.b1
v.a=w
w=B.b_()
w.b=C.bl
v.b=w
w=B.b_()
w.b=C.bl
v.e=w
w=B.b_()
w.b=C.b1
v.c=w
v.d=B.b_()},
ig(d,e,f){var w=this
w.a0t(d,e,f)
w.aTg(e,f)
w.aTq(e,f)
w.aTp(e,f)},
aTp(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lI().P2(w.a,a1.r-a1.f)
u=$.bzK().N0(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fe(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lf(n,m)
if(j!=null){p.r=C.I.gt(0)
p.seX(j.mP(0,i))}else{if(k==null)k=C.K
p.r=k.gt(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c5(p.r)
p.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}a3.E_(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lI().P2(w.b,a1.y-a1.x)
u=$.bzK().N0(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.lf(n,m)
if(k!=null){q.r=C.I.gt(0)
q.seX(k.mP(0,i))}else{if(p==null)p=C.K
q.r=p.gt(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c5(q.r)
q.r=B.aF(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gt(0)}a3.E_(n,m,d.a,f.d)}},
aTg(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gt(0)
d.a.hd(new B.K(0,0,0+w.a,0+w.b),this.b)},
aTq(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.lf(new B.r(n.fe(t.a,m,e),0),new B.r(n.fe(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.I.gt(0)
r.seX(p.mP(0,s))}else{r.r=(q==null?C.K:q).gt(0)
r.seX(null)}o=n.e.e0()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.lf(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.I.gt(0)
v.seX(q.mP(0,s))}else{v.r=(r==null?C.K:r).gt(0)
v.seX(null)}o=n.e.e0()
j.drawRect(B.dO(s),o)
o.delete()}},
aTo(d,e,f){var w,v
this.a0t(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aer(d,e,f,w)
if(v.b.length!==0)this.aTv(d,e,f,w)},
aer(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lf(m,l)
if(j!=null){n.r=C.I.gt(0)
n.seX(j.mP(0,i))}else{if(k==null)k=C.K
n.r=k.gt(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
e.E_(m,l,f.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=C.d.an(o,n.gbU(n).eI(0,2))
J.be(r.save())
r.translate(h,g)
n=n.gNY().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdu(n).eI(0,2)
o=C.d.an(o,n.gbU(n).eI(0,2))
k=f.d
k===$&&B.a()
s.aes(0,n,new B.r(h,o),k)}}},
aTv(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fe(o,a3,a2)
m=new B.r(n,0)
o=d.fe(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lf(m,l)
if(j!=null){n.r=C.I.gt(0)
n.seX(j.mP(0,i))}else{if(k==null)k=C.K
n.r=k.gt(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c5(n.r)
n.r=B.aF(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gt(0)}n.d=p.x
a1.E_(m,l,d.c,p.d)
n=p.r
h=n.gdu(n).eI(0,2)
g=n.gbU(n).eI(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.be(r.save())
r.translate(f,e)
n=n.gNY().b
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
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.aes(0,n,new B.r(o,k),j)}}},
fe(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_w(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.LF.prototype={
gam_(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gam0(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gam1(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galY(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
aml(d){var w,v=this,u=null,t=v.d,s=A.bBt(t.d),r=t.a
r=r.a&&A.bVo(r.b)?r.b:u
w=B.b([B.aL(u,v.c,C.q,u,u,new B.aC(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.azj(w)
if(v.gam_())C.b.hB(w,s.$1(!0),new A.B1(D.BC,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam1())C.b.hB(w,s.$1(!0),new A.B1(D.mT,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gam0())C.b.hB(w,s.$1(!0),new A.B1(D.BD,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galY())C.b.hB(w,s.$1(!0),new A.B1(D.dS,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jz(new A.azi(this))}}
A.Su.prototype={
U(){return new A.Zj(new B.bo(null,x.eF))}}
A.Zj.prototype={
ayS(){switch(this.a.c.a){case 0:return C.el
case 1:return C.fg
case 2:return C.d3
case 3:return C.dE}},
azn(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
ayU(d){this.a.toString
return},
aq(){this.aI()
$.cE.x1$.push(this.ga4W())},
bc(d){this.bF(d)
$.cE.x1$.push(this.ga4W())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azn()
return B.Br(B.b3a(0,B.aL(v.ayS(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adL.prototype={
bn(d){return A.bVg(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.W!==w){e.W=w
e.a7()}}}
A.a29.prototype={
ho(d){if(!(d.b instanceof B.hA))d.b=new B.hA(null,null,C.v)},
hZ(d){if(this.B===C.ah)return this.ym(d)
return this.ae4(d)},
aM3(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9N(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dG(d){var w=this.a9M(d,B.hO())
switch(this.B.a){case 0:return d.c4(new B.H(w.a,w.b))
case 1:return d.c4(new B.H(w.b,w.a))}},
a9M(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ah?d.b:d.d,m=o.aj$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hs(u,null)
break
case 1:q=B.hs(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9N(p)
t=Math.max(t,o.aM3(p))
m=r.aJ$}return new A.bi8(n<1/0?n:s,t)},
cE(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga6.call(p)),n=p.a9M(o,B.mK()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c4(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c4(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.aj$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.a9N(r==null?B.S(B.Z("RenderBox was not laid out: "+B.N(w).j(0)+"#"+B.ca(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aJ$;++u}},
ei(d,e){return this.yn(d,e)},
aN(d,e){if(this.gC(0).gY(0))return
this.a4.sbh(0,null)
this.vg(d,e)},
l(){this.a4.sbh(0,null)
this.apg()}}
A.bi8.prototype={}
A.azk.prototype={}
A.k1.prototype={
gbs(){return[this.a,this.b]}}
A.o4.prototype={}
A.aiu.prototype={}
A.aiv.prototype={
aO(d){var w,v,u
this.fu(d)
w=this.aj$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aJ$}},
aG(d){var w,v,u
this.fj(0)
w=this.aj$
for(v=x.L;w!=null;){w.aG(0)
u=w.b
u.toString
w=v.a(u).aJ$}}}
A.aiw.prototype={}
A.Uw.prototype={
l(){var w,v,u
for(w=this.WG$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.B1.prototype={
goE(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d3
case 1:return C.dE
case 2:return C.el
case 3:return C.fg}},
gb0J(){var w=this.d,v=A.bBt(w.d),u=A.bJ7(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ah(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ah(0,new B.aj(u.a,0,u.c,0))}},
gaiQ(){var w=this.d,v=A.bJ7(w.a),u=A.bBt(w.d)
switch(this.c.a){case 2:case 0:return u.gd5(0)+u.gd8(0)+(v.gd5(0)+v.gd8(0))
case 1:case 3:return u.gey()+v.gey()}},
aXN(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goE().c.d
if(o==null)o=$.lI().P2(d,f-e)
w=p.c
v=w!==D.mT
if((!v||w===D.dS)&&p.d instanceof A.o5){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bAG(u,d)
w=new B.j0(t,B.ag(t).i("j0<1>"))
s=w.gi1(w).f3(0,new A.b07(u),x.W).fO(0)}else{r=$.bzK()
w=!v||w===D.dS
v=p.d
q=r.aX5(w?v.w:v.z,o,f,e)
v=B.oF(q,new A.b08(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ag(s).i("ae<1,o4>")
w=B.Q(new B.ae(s,new A.b09(p,e,f,o,g,d),w),w.i("av.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goE()
w=j.goE()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aL(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mT
u=!v
t=!u||w===D.dS
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dS?C.H:C.ah
q=B.b([],x.p)
if(w===D.BC||v)j.goE()
if(j.goE().c.a){v=!u||w===D.dS?r:j.goE().c.c
p=!u||w===D.dS?j.goE().c.c:r
o=j.gb0J()
n=!u||w===D.dS?C.ah:C.H
j.gaiQ()
m=j.gaiQ()
l=!u||w===D.dS
k=j.d
l=l?k.f:k.x
u=!u||w===D.dS?k.r:k.y
q.push(B.aL(i,A.c1F(new A.azk(),n,j.aXN(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.BD||w===D.dS)j.goE()
return new B.ee(t,i,i,B.bY6(q,C.j,s,i,C.f,C.G,0,i,i,C.aV),i)}}
A.a2o.prototype={
gbs(){return[this.a,this.b]}}
A.a6x.prototype={
gbs(){return[this.a,this.b]}}
A.NT.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6z.prototype={
gaci(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.azQ.prototype={}
A.aGi.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aiQ.prototype={}
A.am8.prototype={}
A.am9.prototype={}
A.amg.prototype={}
A.LN.prototype={
ig(d,e,f){}}
A.w9.prototype={}
A.hz.prototype={
gdN(){return null},
gagt(){var w,v=this
B.bG()
B.bG()
B.bG()
w=v instanceof A.NS
if(w)return!0
return!(v instanceof A.NP)&&!(v instanceof A.NO)&&!(v instanceof A.NQ)&&!(v instanceof A.NN)&&!w&&!(v instanceof A.NR)}}
A.a6D.prototype={
gdN(){return this.a.b}}
A.a6E.prototype={
gdN(){return this.a.b}}
A.a6F.prototype={
gdN(){return this.a.b}}
A.NO.prototype={}
A.NP.prototype={}
A.a6I.prototype={
gdN(){return this.a.b}}
A.NR.prototype={}
A.NS.prototype={
gdN(){return this.a.b}}
A.a6C.prototype={
gdN(){return this.a.b}}
A.a6B.prototype={
gdN(){return this.a.b}}
A.NN.prototype={
gdN(){return this.a.b}}
A.a6G.prototype={
gdN(){return this.a.gdN()}}
A.a6H.prototype={
gdN(){return this.a.gdN()}}
A.NQ.prototype={
gdN(){return this.a.gdN()}}
A.GQ.prototype={
Zn(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afX(){var w=this,v=null,u=w.al=B.bCn(v,v)
u.ay=new A.aWk(w)
u.ch=new A.aWl(w)
u.CW=new A.aWm(w)
u.cy=new A.aWn(w)
u.cx=new A.aWo(w)
u=w.aH=B.HE(v,-1,v)
u.B=new A.aWp(w)
u.a_=new A.aWq(w)
u.V=new A.aWr(w)
u=w.bD=B.a8y(v,w.a4,v)
u.p3=new A.aWs(w)
u.p4=new A.aWt(w)
u.RG=new A.aWu(w)},
cE(){var w=x.k.a(B.M.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dG(d){return new B.H(d.b,d.d)},
kM(d){return!0},
mZ(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.oC(d)
w=v.aH
w===$&&B.a()
w.oC(d)
w=v.al
w===$&&B.a()
w.oC(d)}else if(x.gJ.b(d))v.la(new A.a6H(d))},
gNu(d){return new A.aWv(this)},
gNw(d){return new A.aWw(this)},
la(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_o(w):null
u.V.$2(d,v)
u.a_=C.ba},
gLi(d){return this.a_},
gFV(){var w=this.ar
w===$&&B.a()
return w},
aO(d){this.fu(d)
this.ar=!0},
aG(d){this.ar=!1
this.fj(0)},
$ijC:1}
A.Pc.prototype={
U(){return new A.X2(B.b([],x.r),B.A(x.S,x.J),new A.aMp(B.A(x.y,x.dj)),null,null)}}
A.X2.prototype={
p(d){var w,v=this,u=v.a4Y(),t=v.CW
t.toString
t=v.abP(t.au(0,v.gfk().gt(0)))
w=v.abP(u)
v.a.toString
return new A.LF(new A.a8p(t,w,null),u,null)},
abP(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ag(w).i("ae<1,eh>")
w=B.Q(new B.ae(w,new A.bie(this,d),v),v.i("av.E"))
return d.aRW(w,this.cy)},
a4Y(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vd(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSa(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRA(new A.Fn(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAa(),t.c,t.d))}return r},
aAb(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagt())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.I(new A.bic(v))
return}v.I(new A.bid(v,e))},
kJ(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4Y(),new A.bif(w)))}}
A.q4.prototype={
XM(d,e,f){var w,v,u,t,s,r,q=B.ai(d.f,e.f,f),p=B.ai(d.r,e.r,f),o=B.ai(d.w,e.w,f),n=B.ai(d.x,e.x,f),m=B.ai(d.y,e.y,f),l=B.ai(d.z,e.z,f),k=B.a2(d.as,e.as,f),j=e.a
j=A.a6y(B.a2A(d.a.b,j.b,f),j.a)
w=A.bJ4(d.at,e.at,f)
v=A.bJ8(d.c,e.c,f)
u=A.bJa(d.d,e.d,f)
t=A.bL7(d.e,e.e,f)
s=A.kH(d.ch,e.ch,f,A.cax(),x.cz)
s.toString
r=A.kH(d.CW,e.CW,f,A.caw(),x.bO)
r.toString
u=A.bC_(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VS(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bC_(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSa(d,e,f,g){return this.VS(null,null,d,e,f,g,null)},
aRA(d){var w=null
return this.VS(w,d,w,w,w,w,w)},
aRW(d,e){var w=null
return this.VS(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eh.prototype={
arW(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oZ(n.a,new A.aMo())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fS))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b1()
n.b=q
r.toString
n.c!==$&&B.b1()
n.c=r
s.toString
n.d!==$&&B.b1()
n.d=s
t.toString
n.e!==$&&B.b1()
n.e=t}},
adJ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aMn(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRH(d){return this.adJ(d,null)},
aRJ(d){return this.adJ(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Pd.prototype={
gbs(){return[this.a]}}
A.a2h.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mS.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.LI.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yU.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aMd.prototype={
L(){return"LabelDirection."+this.b}}
A.a6A.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Fn.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a8q.prototype={
gbs(){return[4,C.fR,16,D.xZ,0,120,A.caz(),!1,!1,!1,0,C.J,A.cay()]}}
A.nd.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qy.prototype={}
A.rP.prototype={
gbs(){return[this.a,this.b,C.bx,C.x,null]}}
A.tT.prototype={
gbs(){return[this.a,this.b]}}
A.Hh.prototype={
gbs(){return[this.a]}}
A.Pe.prototype={}
A.zJ.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XM(v,w,d)}}
A.aiD.prototype={}
A.aiE.prototype={}
A.aiS.prototype={}
A.ama.prototype={}
A.amd.prototype={}
A.anZ.prototype={}
A.ao_.prototype={}
A.ao0.prototype={}
A.ao2.prototype={}
A.ao3.prototype={}
A.ao4.prototype={}
A.ao5.prototype={}
A.asD.prototype={}
A.aui.prototype={}
A.aMp.prototype={
Vd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yC
u=new A.zO(d,x.y)
t=this.a
if(t.aF(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zK(s,r,q,t,!0)}w=null
try{w=C.b.oZ(d,new A.aMq())}catch(p){return D.yC}v=null
try{v=C.b.oZ(w.a,new A.aMr())}catch(p){return D.yC}o=v.a
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
if(f<m)m=f}e=new A.zK(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zK.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ao1.prototype={}
A.aMs.prototype={
ig(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaci(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iP(new B.K(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aQA(new B.K(0,0,u,v))}d.a0s(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aTm(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTi(a3,q,a4)
d.aTn(a3,q,a4)
d.amE(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.T(o)
if(n.gq(o)!==p.length)throw B.e(B.e2("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vS(q,i,j,k))}}d.aTu(a3,s,a4)
if(w.gaci(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTs(a2,a3,v,f,new A.Hh(g),a4)}},
aTi(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bBs(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.ZY(o,e,u,f)
s=p.ak3(o,e,t,u,f)
r=p.a__(o,e,t,u,f,!0)
q=p.ak2(o,e,t,u,f)
p.aTl(d,s,p.ZX(o,e,t,u,f,!0),f,e)
p.aTf(d,q,r,f,e)
p.aTj(d,t,e)
p.aTh(d,t,e,f)}},
aTm(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bBs(a5.a),a8=A.bBs(a6.a)
if(a7.length!==a8.length)throw B.e(B.bM("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bW.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ag(n).i("cD<1>")
l=B.Q(new B.cD(n,m),m.i("av.E"))
k=a2.ZY(a3,a5,o,b2)
j=a2.ZZ(a3,a6.aRJ(l),l,b2,k)
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
n=a2.fe(i,a3,b2)
m=a2.dI(h,a3,b2)
e=a2.fe(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.I.gt(0)
a0.seX(v.mP(0,new B.K(n,m,e,d)))}else{a0.r=(r?C.K:w).gt(0)
a0.seX(null)}$.an()
a1=new B.mV(C.dG,C.bl,C.ee,C.eB,C.e2).e0()
n=B.dO(new B.K(0,0,t,s))
m=$.bW.b
if(m===$.bW)B.S(B.vQ(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e0()
n=j.e
a4.drawPath((n==null?j.e=new B.mW(j.gjv().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTn(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_3(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fS)&&t.$2(q,e)){p=this.fe(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aeq(s,q,new B.r(p,o))}}},
aTu(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fU(b3,new A.aMv())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.a_3(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fe(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rO(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lE(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lE(q.$2(m,k))))
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
b0=B.lf(a3,a5)
if(a6!=null){f.r=C.I.gt(0)
f.seX(a6.mP(0,b0))}else{if(a4==null)a4=C.K
f.r=a4.gt(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c5(f.r)
f.r=B.aF(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gt(0)}b2.E_(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rO(d.a))
f.aeq(t,j,new B.r(h,g))}}},
ZZ(d,e,f,g,h){var w=this.ak4(d,e,f,g,h)
return w},
ZY(d,e,f,g){return this.ZZ(d,e,f,g,null)},
ak4(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.co($.an().r,C.ai,null,null,B.b([],x.v)):a5,f=J.T(a3),e=f.gq(a3),d=i.fe(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.fg(d,a0))
if(e===1)g.az(new B.ct(d,a0))}else g.az(new B.ct(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fe(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fe(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fe(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.MJ(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iE(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a__(d,e,f,g,h,i){var w=this,v=B.Nx(f),u=J.T(g),t=w.fe(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pB())
return v},
ak3(d,e,f,g,h){return this.a__(d,e,f,g,h,!1)},
ZX(d,e,f,g,h,i){var w=this,v=B.Nx(f),u=J.T(g),t=w.fe(u.h(g,u.gq(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pB())
return v},
ak2(d,e,f,g,h){return this.ZX(d,e,f,g,h,!1)},
aTl(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fe(t.a,w,g)
s=r.r
s===$&&B.a()
A.bCm(s,q.b,q.c,new B.K(v,u,t,w.b))
d.a.i0(e,r.r)},
aTf(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fe(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.bCm(s,q.b,q.c,new B.K(v,0,u,t))
d.a.i0(e,r.r)},
aTj(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.Nz(B.Nx(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iC:C.ee
u.e=C.eB
u.r=v.gt(0)
u.seX(null)
u.c=f.x
u.r=v.gt(0)
$.lI()
u.z=new B.zS(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aCN(e,f.cy).ec(w.b),this.f)},
aTh(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iC:C.ee
q.e=C.eB
q=f.b
q===$&&B.a()
q=s.fe(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fe(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.bCm(t,f.r,f.w,new B.K(q,w,v,u))
t.z=null
t.c=f.x
A.c_y(t)
d.a.i0(A.aCN(e,f.cy),s.f)},
aTs(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bPo(b1),b3=J.T(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e2("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lI().a_v(b4,u.b)
s=u.a
r=w.k(0,C.j3)?new B.kA(1):w
q=new B.tO(new B.fu(s,a8,a8,C.ba,a8,a8,a8,a8,a8,a8,t),C.bx,C.x,r,a8,a8,a8,a8,C.bG,a8)
q.agN(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fe(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.fR.gey()
k=o+(w-1)*4+(C.fR.gd5(0)+C.fR.gd8(0))
j=t-k-16
i=a7.a_w(b3,l,D.xZ,0)
b3=i+l
w=j+k
h=new B.aZ(4,4)
g=B.Gz(new B.K(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bPn(f)
b1.r=t.gt(t)
t=b3-i
w-=j
b1=$.lI().KQ(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lI().KQ(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.I.gt(0)
s.c=0}b5.Wt(0,new A.aMt(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.c2g(q.r,q.w)
A:{if(D.ED===a5){a6=a3
break A}if(D.EE===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wt(0,new A.aMu(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
a_3(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fe(v[0].a,e,f)
return this.fe(v[v.length-1].a,e,f)-w},
X7(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akv(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fU(t,new A.aMw())
return t.length===0?null:t},
akv(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fS))continue
p=u.$2(e,new B.r(this.fe(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hB(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qy(s,f,g,C.b.hA(w,v),v.a,v.b)}else return null}}
A.vS.prototype={}
A.a8p.prototype={
bn(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcO(),t=new A.aMs()
t.a1E()
$.an()
w=B.b_()
w.b=C.b1
t.f=w
w=B.b_()
w.b=C.bl
t.r=w
w=B.b_()
w.b=C.b1
t.w=w
w=B.b_()
w.b=C.bl
w.r=C.K.gt(0)
w.a=D.a0p
t.x=w
w=B.b_()
w.b=C.b1
w.r=C.I.gt(0)
t.y=w
w=B.b_()
w.b=C.bl
w.r=C.p.gt(0)
t.z=w
w=B.b_()
w.b=C.b1
w.r=C.K.gt(0)
w.c=1
t.Q=w
t=new A.acw(this.d,v,u,t,d,C.ba,new B.bs(),B.aM(x.j))
t.bl()
t.Zn(v.cx)
t.afX()
return t},
bx(d,e){e.sio(0,this.d)
e.sZ7(this.e)
e.scO(B.bD(d,null,x.w).w.gcO())
e.B=d
e.bd()}}
A.acw.prototype={
sio(d,e){if(this.aE.k(0,e))return
this.aE=e
this.bd()},
sZ7(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1c(d.cx)
w.bd()},
scO(d){if(this.d2.k(0,d))return
this.d2=d
this.bd()},
aN(d,e){var w,v,u=this,t=d.gdA(0),s=t.a
J.be(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fY.ig(w,new A.a2O(t,v),new A.w9(u.aE,u.i7,u.d2,x.C))
s.restore()},
a_o(d){var w=this,v=w.gC(0)
return new A.Pe(w.fY.X7(d,v,new A.w9(w.aE,w.i7,w.d2,x.C)))}}
A.Oh.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2O.prototype={
aQA(d){this.a.a.clipRect(B.dO(d),$.mL()[1],!0)
return null},
aey(d,e){d.aN(this.a,e)},
Wt(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.be(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lI()
s.Z5(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
E_(d,e,f,g){var w=new B.co($.an().r,C.ai,null,null,B.b([],x.v))
w.az(new B.fg(d.a,d.b))
w.az(new B.ct(e.a,e.b))
this.a.i0(A.aCN(w,g),f)}}
A.zO.prototype={
gbs(){return[this.a]}}
A.aoc.prototype={}
A.a2Y.prototype={}
A.b3C.prototype={
KQ(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYm(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aZ(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aZ(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aZ(v,v)
s=d.d
return new B.d7(w,u,t,s.a>v||s.b>v?new B.aZ(v,v):s)},
aYn(d,e){var w,v
if(d==null)return D.a0A
w=d.b
v=e/2
return d.aRM(w>v?v:w)},
P2(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0u(w)},
b0u(d){if(d<1)return this.aKx(d)
return this.a8P(d)},
aKx(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8P(d*q)/q},
a8P(d){var w,v=C.e.j(C.d.X(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aM(d)/10:d
if(w>=7.6)return 10*C.d.X(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.X(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.X(Math.pow(10,v))
else return C.d.X(Math.pow(10,v))},
akk(d){if(d>=1)return 1
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
a_v(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.ja
w=e.a?u.w.c6(e):e
v=B.b7(d,C.vS)
v=v==null?null:v.ay
return v===!0?w.c6(C.mz):w},
akb(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qA)","C(pP)","G(G,pP)","C(eF)","~(v,fS)","G(eh,v)","pQ(G)","vk(z)","G(G,qA)","bT(G,tR)","R<~>()","v(qy,qy)","xf(B,bI)","rA(rA)","Jb(on)","qA(@)","vW(@)","rk(z)","wT(@)","IM(B,bI)","K5(oq)","J6(oo)","Dc(@)","eh(G)","vl(dK<vl>)","ab(G,tR)","EM(dK<aH8>)","pP(@)","G(vW)","G(wT)","xa(B,bI)","BD(z)","~()","lY(wK<lY>)","~(hz,LK?)","y3(@)","G(iu)","C(fS)","~(v,iu)","~(@)","k1(o4)","c(o4)","k1(bx<v,G>)","k1(G)","o4(k1)","~(hz,Pe?)","eh(eh)","R<oq>(c4<oq>)","zJ(@)","R<on>(c4<on>)","tT(v)","vm(eF,G,eh,v)","rP(nd)","v(v,v,G)","v(vS,vS)","G(fS)","R<oo>(c4<oo>)","yS(eu<B?>)","fS(fS,fS,G)","iu(iu,iu,G)","mR(mR,mR,G)","Dv?(fS,v,iu,v)","E(fS)","c(G,tR)","eF(eF,eF,G)","C(G)","na(na,na,G)","nA(nA,nA,G)","l_(l_,l_,G)","lq(lq,lq,G)","h(l_)","h(lq)","eh(eh,eh,G)","mS(mS,mS,G)","vm(eF,G,eh,v{size:G?})","C(eF,eh)","G(r,r)","u<tT>(eh,u<v>)","~(xc)","u<rP>(u<nd>)","E(nd)","C(eh)"])
A.aH3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cP(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.al(k==null?"":k)
w=l.h(0,"booking_date")
w=B.dZ(J.al(w==null?"":w))
if(w==null)w=B.bE(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.al(v==null?"":v)
u=l.h(0,"account_name")
u=J.al(u==null?"":u)
t=l.h(0,"direction")
t=J.al(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.al(s)
r=A.bwx(l.h(0,"amount_net"))
q=A.bwx(l.h(0,"amount_tax"))
p=A.bwx(l.h(0,"amount_gross"))
o=A.bwx(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.al(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.al(m)
l=l.h(0,"source_account_code")
return new A.pP(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.al(l))},
$S:z+27}
A.bxu.prototype={
$1(d){if(!this.a)return d
return d===D.fu?D.lh:D.fu},
$S:z+13}
A.aH4.prototype={
$1(d){var w=B.cP(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qA(J.al(v==null?"":v),A.pk(w.h(0,"revenue_net")),A.pk(w.h(0,"expense_net")),A.pk(w.h(0,"result_net")))},
$S:z+15}
A.aH5.prototype={
$1(d){var w,v,u,t=B.cP(x.f.a(d),x.N,x.z),s=B.ah(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ah(t.h(0,"code"))
v=A.pk(t.h(0,"gross"))
u=B.b4(t.h(0,"purchases_count"))
u=u==null?null:C.d.X(u)
if(u==null)u=0
return new A.vW(s,r,w,v,u,A.pk(t.h(0,"avg_basket")))},
$S:z+16}
A.aH6.prototype={
$1(d){var w,v=B.cP(x.f.a(d),x.N,x.z),u=B.ah(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.b4(v.h(0,"quantity"))
w=w==null?null:C.d.X(w)
if(w==null)w=0
return new A.wT(u,t,w,A.pk(v.h(0,"gross")))},
$S:z+18}
A.aHp.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.T(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.Dc(v,u,J.al(t==null?"expense":t),A.uC(w.h(d,"net")),A.uC(w.h(d,"tax")),A.uC(w.h(d,"gross")))},
$S:z+22}
A.bxn.prototype={
$1(d){return new A.vl(d.ak($.bK(),x.A))},
$S:z+24}
A.bxo.prototype={
$1(d){return new A.EM(d.ak($.bU4(),x.D))},
$S:z+26}
A.bzj.prototype={
$1(d){return E.aH7()},
$S:z+33}
A.bxp.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).Gn(w)},
$S:z+47}
A.bxl.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).G8(w)},
$S:z+49}
A.bxm.prototype={
$1(d){var w=d.ak($.qZ(),x.P)
return d.ak($.a1h(),x.a).Gi(w)},
$S:z+56}
A.bxk.prototype={
$1(d){return this.ajU(d)},
ajU(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ak($.bK(),x.A).fo("finance_balance_kpis",t),$async$$1)
case 3:s=r.cP(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:218}
A.aH2.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1h(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aH1.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aC(0,$.a1h(),x.a).LU(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bez.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbE()
r=$.bAe()
if(s.e==null)B.S(B.Z(y.b))
s.gce().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.beu.prototype={
$1(d){var w=this.a
return w.I(new A.bet(w,d))},
$S:z+78}
A.bet.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bev.prototype={
$0(){var w=this.a
return w.I(new A.bes(w))},
$S:0}
A.bes.prototype={
$0(){return this.a.x=null},
$S:0}
A.bey.prototype={
$0(){return F.zG},
$S:98}
A.bex.prototype={
$2(d,e){return new A.xf("Buchungen konnten nicht geladen werden: "+B.i(d),C.a0,F.yd,null)},
$S:z+12}
A.bew.prototype={
$1(d){return new A.Jb(d,this.a.at_(d.b),null)},
$S:z+14}
A.ber.prototype={
$1(d){var w=this.a
if(w.gSC()!=null&&d.c!==w.gSC())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.ben.prototype={
$0(){return this.a.e.$1(D.Be)},
$S:0}
A.beo.prototype={
$0(){return this.a.e.$1(D.a_u)},
$S:0}
A.bep.prototype={
$0(){return this.a.e.$1(D.a_v)},
$S:0}
A.beq.prototype={
$0(){return this.a.e.$1(D.a_w)},
$S:0}
A.bip.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.biq.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bir.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bis.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bit.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.biu.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.biv.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aHn.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bAf()
if(s.e==null)B.S(B.Z(y.b))
s.gce().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aHe.prototype={
$0(){return this.a.JN(this.b,this.c)},
$S:0}
A.aHf.prototype={
$0(){return this.a.BH(this.b,this.c)},
$S:0}
A.aHg.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dC(new A.aHd(),null,w),w)},
$S:0}
A.aHd.prototype={
$1(d){return F.Dx},
$S:z+17}
A.aHh.prototype={
$0(){return B.pV(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aHi.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dC(new A.aHc(),null,w),w)},
$S:0}
A.aHc.prototype={
$1(d){return D.aa8},
$S:z+7}
A.aHj.prototype={
$0(){var w=this
return w.a.BI(w.b,w.c,w.d)},
$S:0}
A.aHm.prototype={
$0(){return F.zG},
$S:98}
A.aHl.prototype={
$2(d,e){return new A.IM(B.i(d),null)},
$S:z+19}
A.aHk.prototype={
$1(d){return new A.K5(d,null)},
$S:z+20}
A.aHb.prototype={
$1(d){var w=null,v=this.a,u=$.dg()
v=B.f("Die Finanzauswertung f\xfcr "+u.a9(v.a)+" \u2013 "+u.a9(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.i8(B.b([B.df(C.c3,w,w,new A.aH9(u),w,w),B.dz(F.mA,new A.aHa(u),B.dG(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.mB)},
$S:46}
A.aH9.prototype={
$0(){B.aU(this.a,!1).cw(!1)
return null},
$S:0}
A.aHa.prototype={
$0(){B.aU(this.a,!1).cw(!0)
return null},
$S:0}
A.blG.prototype={
$0(){var w=this.a.aC(0,$.qZ().ghP(),x.V),v=E.aH7()
w.un(0,v)
return v},
$S:0}
A.blH.prototype={
$0(){var w=this.a.aC(0,$.qZ().ghP(),x.V),v=new B.b0(Date.now(),0,!1),u=new E.lY(B.bE(B.b3(v),1,1,0,0,0,0),v)
w.un(0,u)
return u},
$S:0}
A.blI.prototype={
$0(){return this.a.J7(this.b,this.c)},
$S:0}
A.blF.prototype={
$2(d,e){return new B.p1(B.V(d).aR8(B.V(d).ax.aS0(C.h,C.n)),e,null)},
$S:1033}
A.bsr.prototype={
$2(d,e){var w,v,u=null,t="expense",s=e.b<380?1:2,r=this.a.c,q=$.cT(),p=A.P_(!1,C.lo,"Umsatz 7 %",q.a9(r.a),u),o=A.P_(!1,C.lo,"Umsatz 19 %",q.a9(r.b),u),n=A.P_(!0,D.abR,"Umsatz netto",q.a9(r.c),u),m=r.d
m=A.P_(!1,D.abQ,"Aufwand",A.bEp(m,A.bxt(t,"",m)),A.bP7(t,A.bxt(t,"",m)))
w=r.e
v=q.a9(w)
return E.aJB(1.7,B.b([p,o,n,m,A.P_(!0,C.oa,"Ergebnis",v,w<0?C.a0:C.an),A.P_(!1,C.fU,"USt-Saldo",q.a9(r.f-r.r),u)],x.p),s,12,12,C.iq,!0)},
$S:119}
A.bss.prototype={
$0(){var w=x.z
return B.aU(this.a,!1).dE(B.dC(new A.bsq(this.b),null,w),w)},
$S:0}
A.bsq.prototype={
$1(d){return new A.vk(this.a.a,null)},
$S:z+7}
A.aMc.prototype={
$0(){return D.awr},
$S:98}
A.aMb.prototype={
$2(d,e){var w=null
return B.bh(C.a0,B.f("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,w,B.w(C.h,13,C.k),w,w,w),C.fl,w,C.B,w,w,3)},
$S:177}
A.aMa.prototype={
$1(d){return new A.J6(d,null)},
$S:z+21}
A.bi_.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.cT(),i=j.a9(k.c),h=l.w,g=l.d,f=B.ag(g).i("ae<1,G>"),e=f.i("av.E"),d=B.Q(new B.ae(g,new A.bhP(),f),e)
i=A.jV(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.a9(r.b)
w=B.Q(new B.ae(g,new A.bhQ(),f),e)
d=A.jV(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.a9(k.e)
w=B.Q(new B.ae(g,new A.bhR(),f),e)
k=A.jV(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ab(h.b,1)
v=B.Q(new B.ae(g,new A.bhS(),f),e)
w=A.jV(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ab(h.a,1)
u=B.Q(new B.ae(g,new A.bhT(),f),e)
v=A.jV(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ab(r.c,1)
t=B.Q(new B.ae(g,new A.bhU(),f),e)
u=A.jV(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ab(h.c,1)
s=B.Q(new B.ae(g,new A.bhV(),f),e)
t=A.jV(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.a9(h.d)
s=B.Q(new B.ae(g,new A.bhW(),f),e)
h=A.jV(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.a9(l.r.d)
m=B.Q(new B.ae(g,new A.bhX(m),f),e)
m=A.jV(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.a9(l)
l=B.Q(new B.ae(g,new A.bhY(l),f),e)
l=A.jV(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ab(j,1)
j=B.Q(new B.ae(g,new A.bhZ(j),f),e)
return E.aJB(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jV(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.iq,!0)},
$S:119}
A.bhP.prototype={
$1(d){return d.b},
$S:z+0}
A.bhQ.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bhR.prototype={
$1(d){return d.d},
$S:z+0}
A.bhS.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bhT.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bhU.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bhV.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bhW.prototype={
$1(d){return d.d},
$S:z+0}
A.bhX.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bhY.prototype={
$1(d){return this.a},
$S:z+0}
A.bhZ.prototype={
$1(d){return this.a},
$S:z+0}
A.bi0.prototype={
$0(){return A.bEk(this.b,1.45,new A.UW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bi1.prototype={
$0(){return A.bEk(this.b,1.6,new A.Vc(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bws.prototype={
$1(d){var w=this,v=null,u=B.aq(16),t=x.p,s=B.b([B.af(B.b([B.ao(B.f(w.a,v,v,v,v,B.bB(C.h,18,C.o),v,v,v),1),B.fe(v,v,D.aek,v,v,new A.bwr(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.f(w.b,v,v,v,v,B.w(C.m,12,C.aE),v,v,v),C.F],t))
s.push(C.t)
s.push(B.bR(new B.mQ(w.c,w.d,v),v,17976931348623157e292))
return B.a5Q(v,C.p,new B.ac(C.al,B.a4(s,C.z,C.f,C.G),v),v,v,v,C.ft,C.vc,v,new B.d0(u,C.J),v)},
$S:1034}
A.bwr.prototype={
$0(){return B.aU(this.a,!1).eU()},
$S:0}
A.bi2.prototype={
$0(){var w=this.a,v=B.aA(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bEk(this.b,2.4,new A.Zv(w.w,w.y,w.z,null),C.b.cg(u," \xb7 "),v)
return null},
$S:0}
A.brt.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bru.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.brv.prototype={
$1(d){return A.aMn(null,1.4,null,C.a0,0.35,D.aiZ,D.Eu,null,!1,!1,!1,!1,D.FZ,!1,10,D.YK,!0,C.lF,B.b([new A.eF(0,d),new A.eF(this.a,d)],x.U))},
$S:z+23}
A.b7F.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+8}
A.b7H.prototype={
$2(d,e){var w=null
return B.f(this.a.aLS(d),w,w,w,w,B.w(C.m,10,C.E),w,w,w)},
$S:z+25}
A.b7I.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=this.a.length)return C.vl
return new B.ac(C.l5,B.f(C.c.cP(this.a[v].a,5),w,w,w,w,B.w(C.m,9,C.E),w,w,w),w)},
$S:z+9}
A.b7G.prototype={
$1(d){return D.aac},
$S:z+6}
A.b8I.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8J.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b8K.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b8L.prototype={
$2(d,e){var w=null,v=C.d.X(d)
if(v<0||v>=3)return C.vl
return new B.ac(C.l5,B.f(this.a[v],w,w,w,w,B.w(C.h,12,C.o),w,w,w),w)},
$S:z+9}
A.biJ.prototype={
$1(d){return d.d},
$S:z+28}
A.biK.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.btK.prototype={
$1(d){return d.d},
$S:z+29}
A.btL.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5Z.prototype={
$0(){return D.awz},
$S:98}
A.b5Y.prototype={
$2(d,e){return new A.xa("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+30}
A.b5X.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bh(m,B.a4(B.b([B.f("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.w(C.h,14,C.E),m,m,m),C.F,B.f("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.w(C.m,12.5,C.k),m,m,m),C.t,B.jh(C.c6,B.b([B.f6(C.Fp,D.aKI,new A.b5R(w,v),m),B.f6(D.adW,D.aJy,new A.b5S(w,v),m)],u),C.d0,8,8)],u),C.z,C.f,C.i),C.a4,m,C.B,m,m,3)}w=new A.b6_(d)
t=C.b.f0(n.a.e.d,0,new A.b5T())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jz(new A.b5U(new A.b60(w),r,w,s))
v=J.T(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a4(B.b([w,C.F,B.af(B.b([B.ao(B.f("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.w(C.m,11,C.k),m,m,m),1),B.p_(D.afc,D.aJV,new A.b5V(q,p),m),B.p_(D.aeL,D.aJF,new A.b5W(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:225}
A.b5R.prototype={
$0(){return A.awU(this.a,this.b,null)},
$S:0}
A.b5S.prototype={
$0(){return A.awR(this.a,this.b)},
$S:0}
A.b6_.prototype={
$1(d){var w=B.b4(J.Y(this.a,d))
return w==null?null:w},
$S:1035}
A.b60.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ab(v,1)
w=B.aA(w,".",",")+" %"}return w},
$S:31}
A.b5T.prototype={
$2(d,e){return d+e.d},
$S:z+8}
A.b5U.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jV(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i8,o.$1("liquidity1_pct")),m=A.jV(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i8,o.$1("liquidity2_pct")),l=A.jV(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i8,o.$1("liquidity3_pct"))
o=A.jV(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i8,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ab(w,1)
w=B.aA(w,".",",")+" %"}w=A.jV(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i8,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.cT()
v=u.a9(v)
return E.aJB(p,B.b([n,m,l,o,w,A.jV(s,s,!1,"Bilanzsumme",!1,"EK "+u.a9(t.d),s,s,s,C.i8,v)],x.p),q,12,12,C.iq,!0)},
$S:119}
A.b5V.prototype={
$0(){return A.awR(this.a,this.b)},
$S:0}
A.b5W.prototype={
$0(){return A.awU(this.a,this.b,this.c)},
$S:0}
A.bwq.prototype={
$1(d){return new A.BD(this.a,new A.bwp(this.b),this.c,null)},
$S:z+31}
A.bwp.prototype={
$0(){var w=this.a,v=$.bAd()
if(w.e==null)B.S(B.Z(y.b))
w.gce().c_(v)},
$S:0}
A.b5L.prototype={
$0(){},
$S:0}
A.b5M.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b5N.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b5P.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.pm(u.b,B.bE(2024,1,1,0,0,0,0),null,r,new B.b0(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.I(new A.b5O(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b5O.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5Q.prototype={
$0(){return B.aU(this.a,!1).eU()},
$S:0}
A.b61.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ac(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b62.prototype={
$1(d){return new A.y3(x.B.a(d),this.a.a.r)},
$S:z+35}
A.azB.prototype={
$1(d){return d.e},
$S:z+36}
A.azC.prototype={
$2(d,e){return d+e},
$S:45}
A.azE.prototype={
$1(d){return d.c.length!==0},
$S:z+37}
A.azG.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdu(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+38}
A.azH.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aey(v.d,v.e)},
$S:0}
A.azj.prototype={
$1(d){return 0},
$S:1036}
A.azi.prototype={
$2(d,e){return B.eY(C.bX,this.a.aml(e),C.r,C.bn,null)},
$S:1037}
A.b05.prototype={
$1(d){return d.a},
$S:z+40}
A.b06.prototype={
$1(d){return d.b},
$S:z+41}
A.b07.prototype={
$1(d){return new A.k1(this.a.ch[d.a].a,d.b)},
$S:z+42}
A.b08.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mT||v===D.dS))t=1-t
return new A.k1(d,t*w.d)},
$S:z+43}
A.b09.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goE(),p=d.a
r.goE()
r=$.lI()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ab(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ab(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ab(v/1000,1)
t="K"}else{u=C.d.ab(v,r.akk(Math.abs(s.b-s.c)))
t=""}if(C.c.hv(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o4(d,q.c.b.$2(p,new A.tR(u+t,s.e)))},
$S:z+44}
A.aWk.prototype={
$1(d){this.a.la(new A.a6D(d))},
$S:169}
A.aWl.prototype={
$1(d){this.a.la(new A.a6E(d))},
$S:43}
A.aWm.prototype={
$1(d){this.a.la(new A.a6F(d))},
$S:29}
A.aWn.prototype={
$0(){this.a.la(D.a2p)},
$S:0}
A.aWo.prototype={
$1(d){this.a.la(new A.NP())},
$S:49}
A.aWp.prototype={
$1(d){this.a.la(new A.a6I(d))},
$S:42}
A.aWq.prototype={
$0(){this.a.la(D.a2q)},
$S:0}
A.aWr.prototype={
$1(d){this.a.la(new A.NS(d))},
$S:96}
A.aWs.prototype={
$1(d){this.a.la(new A.a6C(d))},
$S:172}
A.aWt.prototype={
$1(d){this.a.la(new A.a6B(d))},
$S:173}
A.aWu.prototype={
$1(d){return this.a.la(new A.NN(d))},
$S:174}
A.aWv.prototype={
$1(d){return this.a.la(new A.a6G(d))},
$S:68}
A.aWw.prototype={
$1(d){return this.a.la(new A.NQ(d))},
$S:62}
A.bie.prototype={
$1(d){var w=this.a.db.h(0,C.b.hA(this.b.ch,d))
return d.aRH(w==null?B.b([],x.t):w)},
$S:z+46}
A.bic.prototype={
$0(){var w=this.a
C.b.ac(w.cy)
w.db.ac(0)},
$S:0}
A.bid.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fU(w,new A.bib())
v=this.a
u=v.db
u.ac(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ac(q)
q.push(new A.Hh(w))},
$S:0}
A.bib.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+11}
A.bif.prototype={
$1(d){return new A.zJ(x.hf.a(d),this.a.a.r)},
$S:z+48}
A.aMo.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.bxb.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bJ9(t?A.bE4(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tT(w,new A.yU(!0,A.bEW(),new A.bxa(v)))},
$S:z+50}
A.bxa.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bY4(A.bE4(d,e,f),w,A.c63(d,e,f))},
$S:z+51}
A.bx8.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.dx:u,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rP(C.d.j(d.b),w)},
$S:z+52}
A.aMq.prototype={
$1(d){return d.a.length!==0},
$S:z+81}
A.aMr.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+3}
A.aMv.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+54}
A.aMt.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aMu.prototype={
$0(){this.a.aey(this.b,this.c)},
$S:0}
A.aMw.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+11}
A.azu.prototype={
$1(d){return d.gdu(0)},
$S:z+55}
A.azv.prototype={
$2(d,e){return d+e},
$S:45}
A.azy.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j0(v,B.ag(v).i("j0<1>")).aB(0,new A.azz(w,this.a/(u+1),this.c))},
$S:0}
A.azz.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdu(0)/2
this.c[d]=v
w.a=v+e.gdu(0)/2},
$S:z+4}
A.azw.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdu(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdu(0)/2},
$S:z+4}
A.azx.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdu(0)/2
this.c[d]=u
u+=e.gdu(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aJA.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1038}
A.aCO.prototype={
$1(d){return d},
$S:1039};(function aliases(){var w=A.LE.prototype
w.a0s=w.ig
w.amE=w.aTo
w.amF=w.aer
w=A.Uw.prototype
w.apg=w.l
w=A.LN.prototype
w.a0t=w.ig
w=A.GQ.prototype
w.a1c=w.Zn})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c9E","bY0",57)
var q
v(q=A.Uy.prototype,"gaFF","aFG",32)
v(q,"gaEC","Io",10)
v(q,"gaFo","Iz",10)
u(A.Uz.prototype,"gatg","ath",34)
t(A,"c8q",3,null,["$3"],["bVi"],58,0)
t(A,"c8r",3,null,["$3"],["bVj"],59,0)
t(A,"c8s",3,null,["$3"],["bVk"],60,0)
t(A,"c8u",4,null,["$4"],["c9h"],61,0)
w(A,"c8t","c9g",62)
s(A,"bEo","c9i",63)
t(A,"c8l",3,null,["$3"],["bY5"],64,0)
w(A,"a0K","cbI",65)
w(A,"awX","c9l",6)
t(A,"c8n",3,null,["$3"],["bYS"],66,0)
t(A,"c8p",3,null,["$3"],["c39"],67,0)
t(A,"c8m",3,null,["$3"],["bYR"],68,0)
t(A,"c8o",3,null,["$3"],["c38"],69,0)
w(A,"cj_","bYQ",70)
w(A,"cj0","c37",71)
r(A.Zj.prototype,"ga4W","ayU",39)
u(A.X2.prototype,"gaAa","aAb",45)
t(A,"cax",3,null,["$3"],["bZj"],72,0)
t(A,"caw",3,null,["$3"],["bVl"],73,0)
w(A,"caA","cbJ",3)
t(A,"bPN",4,null,["$5$size","$4"],["bOc",function(d,e,f,g){return A.bOc(d,e,f,g,null)}],74,0)
s(A,"bEW","cbH",75)
s(A,"bPO","c88",76)
s(A,"bPR","c9o",77)
s(A,"bPQ","c9k",5)
s(A,"bPP","c9j",5)
w(A,"caz","bPo",79)
w(A,"cay","bPn",80)
t(A,"a0Q",3,null,["$3"],["cav"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.F,[A.a8c,A.am4,A.x6,A.Jb,A.aj9,A.xf,A.ahI,A.ane,A.JG,A.K5,A.ahG,A.IM,A.a2s,A.J6,A.amw,A.anR,A.VM,A.Zv,A.UW,A.Vc,A.aom,A.akt,A.CD,A.auf,A.xa,A.LF,A.B1])
u(B.B,[A.vl,A.EM,A.bm,A.aiQ,A.aiG,A.aiI,A.aiJ,A.aiy,A.amg,A.aiM,A.aiK,A.azQ,A.auj,A.azD,A.aiH,A.LN,A.a7g,A.tR,A.asF,A.asE,A.aix,A.amf,A.eF,A.amc,A.ame,A.aqL,A.an5,A.av2,A.amd,A.alN,A.amb,A.azh,A.bi8,A.azk,A.aiu,A.o4,A.am8,A.am9,A.w9,A.hz,A.ao_,A.ao2,A.aiD,A.aiS,A.aiE,A.ama,A.ao5,A.ao3,A.aui,A.asD,A.aMp,A.ao1,A.vS,A.a2O,A.aoc,A.a2Y,A.b3C])
u(B.vh,[A.pP,A.on,A.qA,A.vW,A.wT,A.aCb,A.aDm,A.oo,A.Dc,A.oq])
u(B.oa,[A.aH3,A.bxu,A.aH4,A.aH5,A.aH6,A.aHp,A.bxn,A.bxo,A.bzj,A.bxp,A.bxl,A.bxm,A.bxk,A.beu,A.bew,A.ber,A.bip,A.bir,A.bit,A.biv,A.aHd,A.aHc,A.aHk,A.aHb,A.bsq,A.aMa,A.bhP,A.bhQ,A.bhR,A.bhS,A.bhT,A.bhU,A.bhV,A.bhW,A.bhX,A.bhY,A.bhZ,A.bws,A.brv,A.b7G,A.b8I,A.b8J,A.biJ,A.btK,A.b5X,A.b6_,A.b60,A.bwq,A.b62,A.azB,A.azE,A.azj,A.b05,A.b06,A.b07,A.b08,A.b09,A.aWk,A.aWl,A.aWm,A.aWo,A.aWp,A.aWr,A.aWs,A.aWt,A.aWu,A.aWv,A.aWw,A.bie,A.bif,A.aMo,A.bxb,A.bxa,A.bx8,A.aMq,A.aMr,A.azu,A.aCO])
u(B.IL,[A.rA,A.xc,A.azs,A.af9,A.Du,A.aGi,A.aMd,A.Oh])
t(A.yS,B.fN)
u(B.yj,[A.aH2,A.aH1,A.bez,A.bet,A.bev,A.bes,A.bey,A.ben,A.beo,A.bep,A.beq,A.aHn,A.aHe,A.aHf,A.aHg,A.aHh,A.aHi,A.aHj,A.aHm,A.aH9,A.aHa,A.blG,A.blH,A.blI,A.bss,A.aMc,A.bi0,A.bi1,A.bwr,A.bi2,A.b5Z,A.b5R,A.b5S,A.b5V,A.b5W,A.bwp,A.b5L,A.b5M,A.b5N,A.b5P,A.b5O,A.b5Q,A.b61,A.azH,A.aWn,A.aWq,A.bic,A.bid,A.aMt,A.aMu,A.azy])
t(A.vk,B.b9)
t(A.am5,B.v8)
u(B.yk,[A.bex,A.biq,A.bis,A.biu,A.aHl,A.blF,A.bsr,A.aMb,A.bi_,A.brt,A.bru,A.b7F,A.b7H,A.b7I,A.b8K,A.b8L,A.biK,A.btL,A.b5Y,A.b5T,A.b5U,A.azC,A.azG,A.azi,A.bib,A.aMv,A.aMw,A.azv,A.azz,A.azw,A.azx,A.aJA])
u(B.yr,[A.yT,A.apA,A.a8d,A.aiC])
u(B.J,[A.BD,A.Su])
u(B.a_,[A.Uy,A.Zj])
u(B.Fc,[A.LJ,A.Pc])
u(B.uS,[A.Uz,A.X2])
t(A.a2o,A.aiQ)
t(A.ait,A.a2o)
t(A.a28,A.ait)
u(A.a28,[A.aiF,A.ao0])
t(A.o5,A.aiF)
t(A.fS,A.aiG)
t(A.iu,A.aiI)
t(A.mR,A.aiJ)
t(A.a2f,A.aiy)
t(A.NT,A.amg)
u(A.NT,[A.aiL,A.ao4])
t(A.a2k,A.aiL)
t(A.a2l,A.aiM)
t(A.Dv,A.aiK)
u(A.azQ,[A.LK,A.Pe])
t(A.afb,A.auj)
t(A.aiN,A.afb)
t(A.a2m,A.aiN)
u(B.b5,[A.y3,A.zJ])
t(A.uY,A.aiH)
t(A.LE,A.LN)
u(A.LE,[A.azF,A.aMs])
u(B.P7,[A.a2i,A.a8p])
u(B.L,[A.GQ,A.aiv])
u(A.GQ,[A.acj,A.acw])
t(A.qq,A.asF)
t(A.adK,A.asE)
t(A.pt,A.aix)
t(A.vn,A.amf)
t(A.yV,A.amc)
t(A.pQ,A.ame)
t(A.R2,A.aqL)
t(A.na,A.an5)
t(A.nA,A.av2)
u(A.pQ,[A.an4,A.av1])
t(A.l_,A.an4)
t(A.lq,A.av1)
t(A.a6A,A.amd)
u(A.a6A,[A.an3,A.av0])
t(A.a7r,A.an3)
t(A.afz,A.av0)
t(A.ND,A.alN)
t(A.vm,A.amb)
t(A.NM,A.vm)
t(A.adL,B.he)
t(A.aiw,A.aiv)
t(A.Uw,A.aiw)
t(A.a29,A.Uw)
t(A.k1,A.aiu)
t(A.a6x,A.am8)
t(A.a6z,A.am9)
u(A.hz,[A.a6D,A.a6E,A.a6F,A.NO,A.NP,A.a6I,A.NR,A.NS,A.a6C,A.a6B,A.NN,A.a6G,A.a6H,A.NQ])
t(A.q4,A.ao0)
t(A.eh,A.ao_)
t(A.Pd,A.ao2)
t(A.a2h,A.aiD)
t(A.mS,A.aiS)
t(A.LI,A.aiE)
t(A.yU,A.ama)
t(A.Fn,A.ao4)
t(A.a8q,A.ao5)
t(A.anZ,A.eF)
t(A.nd,A.anZ)
t(A.qy,A.nd)
t(A.rP,A.ao3)
t(A.tT,A.aui)
t(A.Hh,A.asD)
t(A.zK,A.ao1)
t(A.zO,A.aoc)
w(A.aiy,A.bm)
w(A.aiF,A.bm)
w(A.aiG,A.bm)
w(A.aiI,A.bm)
w(A.aiJ,A.bm)
w(A.aiK,A.bm)
w(A.aiL,A.bm)
w(A.aiM,A.bm)
w(A.aiN,A.bm)
w(A.aiH,A.bm)
w(A.ait,A.bm)
w(A.aix,A.bm)
w(A.alN,A.bm)
w(A.amb,A.bm)
w(A.amc,A.bm)
w(A.ame,A.bm)
w(A.amf,A.bm)
w(A.an4,A.bm)
w(A.an3,A.bm)
w(A.an5,A.bm)
w(A.aqL,A.bm)
w(A.asE,A.bm)
w(A.asF,A.bm)
w(A.auj,A.bm)
w(A.av1,A.bm)
w(A.av0,A.bm)
w(A.av2,A.bm)
w(A.aiu,A.bm)
v(A.aiv,B.aG)
w(A.aiw,B.ed)
v(A.Uw,B.a5z)
w(A.aiQ,A.bm)
w(A.am8,A.bm)
w(A.am9,A.bm)
w(A.amg,A.bm)
w(A.aiD,A.bm)
w(A.aiE,A.bm)
w(A.aiS,A.bm)
w(A.ama,A.bm)
w(A.amd,A.bm)
w(A.anZ,A.bm)
w(A.ao_,A.bm)
w(A.ao0,A.bm)
w(A.ao2,A.bm)
w(A.ao3,A.bm)
w(A.ao4,A.bm)
w(A.ao5,A.bm)
w(A.asD,A.bm)
w(A.aui,A.bm)
w(A.ao1,A.bm)
w(A.aoc,A.bm)})()
B.btZ(b.typeUniverse,JSON.parse('{"a8c":{"F":[],"c":[]},"EM":{"aH8":[]},"yS":{"fN":["bi<~>"],"fN.T":"bi<~>"},"vk":{"b9":[],"J":[],"c":[]},"Jb":{"F":[],"c":[]},"xf":{"F":[],"c":[]},"am5":{"a_":["vk"]},"am4":{"F":[],"c":[]},"x6":{"F":[],"c":[]},"aj9":{"F":[],"c":[]},"K5":{"F":[],"c":[]},"IM":{"F":[],"c":[]},"yT":{"b9":[],"J":[],"c":[]},"ahI":{"F":[],"c":[]},"ane":{"F":[],"c":[]},"apA":{"b9":[],"J":[],"c":[]},"JG":{"F":[],"c":[]},"ahG":{"F":[],"c":[]},"a2s":{"F":[],"c":[]},"J6":{"F":[],"c":[]},"xa":{"F":[],"c":[]},"BD":{"J":[],"c":[]},"a8d":{"b9":[],"J":[],"c":[]},"amw":{"F":[],"c":[]},"anR":{"F":[],"c":[]},"VM":{"F":[],"c":[]},"Zv":{"F":[],"c":[]},"UW":{"F":[],"c":[]},"Vc":{"F":[],"c":[]},"aom":{"F":[],"c":[]},"akt":{"F":[],"c":[]},"CD":{"F":[],"c":[]},"auf":{"F":[],"c":[]},"aiC":{"b9":[],"J":[],"c":[]},"Uy":{"a_":["BD"]},"LJ":{"J":[],"c":[]},"Uz":{"a_":["LJ"]},"o5":{"bm":[]},"fS":{"bm":[]},"iu":{"bm":[]},"mR":{"bm":[]},"Dv":{"bm":[]},"y3":{"b5":["o5"],"bb":["o5"],"bb.T":"o5","b5.T":"o5"},"a2f":{"bm":[]},"a2k":{"bm":[]},"a2l":{"bm":[]},"a2m":{"bm":[]},"uY":{"bm":[]},"a2i":{"aX":[],"c":[]},"acj":{"L":[],"M":[],"jC":[],"aW":[]},"pQ":{"bm":[]},"na":{"bm":[]},"nA":{"bm":[]},"l_":{"bm":[]},"lq":{"bm":[]},"vm":{"bm":[]},"a28":{"bm":[]},"qq":{"bm":[]},"adK":{"bm":[]},"pt":{"bm":[]},"vn":{"bm":[]},"yV":{"bm":[]},"afb":{"bm":[]},"R2":{"bm":[]},"a7r":{"bm":[]},"afz":{"bm":[]},"ND":{"bm":[]},"NM":{"bm":[]},"LF":{"F":[],"c":[]},"Su":{"J":[],"c":[]},"Zj":{"a_":["Su"]},"k1":{"bm":[]},"adL":{"he":[],"aX":[],"c":[]},"a29":{"ed":["L","hA"],"L":[],"aG":["L","hA"],"M":[],"aW":[],"aG.1":"hA","ed.1":"hA","aG.0":"L"},"B1":{"F":[],"c":[]},"a2o":{"bm":[]},"a6x":{"bm":[]},"NT":{"bm":[]},"a6z":{"bm":[]},"a6D":{"hz":[]},"a6E":{"hz":[]},"a6F":{"hz":[]},"NO":{"hz":[]},"NP":{"hz":[]},"a6I":{"hz":[]},"NR":{"hz":[]},"NS":{"hz":[]},"a6C":{"hz":[]},"a6B":{"hz":[]},"NN":{"hz":[]},"a6G":{"hz":[]},"a6H":{"hz":[]},"NQ":{"hz":[]},"GQ":{"L":[],"M":[],"jC":[],"aW":[]},"Pc":{"J":[],"c":[]},"X2":{"a_":["Pc"]},"q4":{"bm":[]},"eh":{"bm":[]},"mS":{"bm":[]},"nd":{"eF":[],"bm":[]},"qy":{"nd":[],"eF":[],"bm":[]},"rP":{"bm":[]},"tT":{"bm":[]},"Hh":{"bm":[]},"zJ":{"b5":["q4"],"bb":["q4"],"bb.T":"q4","b5.T":"q4"},"Pd":{"bm":[]},"a2h":{"bm":[]},"LI":{"bm":[]},"yU":{"bm":[]},"a6A":{"bm":[]},"Fn":{"bm":[]},"a8q":{"bm":[]},"zK":{"bm":[]},"a8p":{"aX":[],"c":[]},"acw":{"L":[],"M":[],"jC":[],"aW":[]},"zO":{"bm":[]}}'))
B.bNG(b.typeUniverse,JSON.parse('{"LE":1,"NT":1,"LN":1,"GQ":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("Dc"),e:w("bi<on>"),cn:w("bi<oo>"),aN:w("bi<oq>"),fM:w("bi<a3<h,@>?>"),c:w("bi<~>"),W:w("k1"),B:w("o5"),dB:w("fS"),T:w("uY"),fj:w("iu"),G:w("mR"),bO:w("mS"),k:w("au"),cX:w("a2Y<G>"),dO:w("v4"),R:w("a7<h,@>"),j:w("hv"),bz:w("lS<b0>"),f0:w("og"),E:w("bm"),F:w("yS"),aI:w("pP"),m:w("on"),X:w("oo"),P:w("lY"),D:w("vl"),a:w("aH8"),d:w("oq"),cw:w("eF"),L:w("hA"),o:w("dA<v,E>"),cm:w("l_"),dv:w("na"),M:w("D<o4>"),I:w("D<bHK>"),O:w("D<fS>"),Y:w("D<iu>"),U:w("D<eF>"),K:w("D<a7g>"),u:w("D<eh>"),bC:w("D<vS>"),aA:w("D<u<eF>>"),v:w("D<ej>"),r:w("D<Hh>"),s:w("D<h>"),eg:w("D<tO>"),df:w("D<qy>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bo<a_<J>>"),Z:w("nd"),cz:w("eh"),hf:w("q4"),dj:w("zK"),fT:w("rP"),c_:w("iy<pe<bi<~>>>"),x:w("zO<fS>"),y:w("zO<eh>"),J:w("u<v>"),ef:w("vW"),b:w("a3<h,@>"),f:w("a3<@,@>"),gj:w("ae<G,G>"),w:w("kh"),aU:w("B"),Q:w("w9<o5>"),C:w("w9<q4>"),dc:w("ej"),eo:w("qf"),gJ:w("qg"),V:w("ks<lY>"),N:w("h"),A:w("nv"),bP:w("bA"),er:w("tO"),fB:w("wT"),dw:w("qy"),bY:w("tT"),cZ:w("qA"),gc:w("jd"),es:w("lq"),bN:w("nA"),l:w("c"),q:w("xv"),g4:w("io<G>"),cJ:w("C"),i:w("G"),z:w("@"),S:w("v"),bn:w("y3?"),f3:w("zJ?"),g:w("u<@>?"),h:w("a3<h,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("jd?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bv=new B.lL(C.n,B.aw("lL<E>"))
D.BC=new A.Du(0,"left")
D.mT=new A.Du(1,"top")
D.BD=new A.Du(2,"right")
D.dS=new A.Du(3,"bottom")
D.aAB=new A.qq(!1,A.bEo(),22,null)
D.kB=new A.pt(16,null,D.aAB,!0)
D.aad=new A.pQ(C.I,null,2,null)
D.wj=new A.LI(!1,D.aad,A.caA(),!0)
D.a0g=new A.azs(3,"spaceEvenly")
D.a0p=new B.y7(6,"dstIn")
D.Y3=new B.aZ(3,3)
D.BG=new B.d7(D.Y3,D.Y3,C.a6,C.a6)
D.a0A=new B.bl(C.I,0,C.S,-1)
D.Cf=new A.a6z()
D.a2p=new A.NO()
D.a2q=new A.NR()
D.aT0=new A.adK()
D.a8d=new B.bv(8e6)
D.ao0=w([],B.aw("D<l_>"))
D.ao1=w([],B.aw("D<lq>"))
D.Eq=new A.ND(D.ao0,D.ao1,!0)
D.a9S=new B.dy("Zeitraum",!1,null)
D.a9Y=new B.dy("Konten (SKR 03)",!1,null)
D.xZ=new A.aGi(0,"center")
D.aa8=new A.vk(null,null)
D.aTd=new A.yU(!0,A.bEW(),A.bPN())
D.Eu=new A.yU(!1,A.bEW(),A.bPN())
D.Ev=new A.yV(!1,!0,null,A.awX(),A.a0K(),!0,null,A.awX(),A.a0K())
D.aTe=new A.yV(!0,!0,null,A.awX(),A.a0K(),!0,null,A.awX(),A.a0K())
D.a4O=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.l)
D.a4y=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.l)
D.a4Y=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.l)
D.a4S=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.l)
D.a4e=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.l)
D.a4d=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.a5m=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.l)
D.a4H=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.l)
D.a5p=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.l)
D.a5j=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.l)
D.auo=new B.dA([50,D.a4O,100,D.a4y,200,D.a4Y,300,D.a4S,400,D.a4e,500,D.a4d,600,D.a5m,700,D.a4H,800,D.a5p,900,D.a5j],x.o)
D.dx=new B.rW(D.auo,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.l)
D.ak0=w([8,4],x.t)
D.aab=new A.pQ(D.dx,null,0.4,D.ak0)
D.aac=new A.pQ(C.a7,null,0.5,null)
D.fS=new A.eF(0/0,0/0)
D.aAD=new A.qq(!0,A.bEo(),44,null)
D.mU=new A.pt(16,null,D.aAD,!0)
D.aAC=new A.qq(!0,A.bEo(),30,null)
D.mV=new A.pt(16,null,D.aAC,!0)
D.aae=new A.vn(!1,D.mU,D.mV,D.mU,D.mV)
D.aTf=new A.vn(!0,D.mU,D.mV,D.mU,D.mV)
D.fu=new A.rA(0,"hinaus")
D.lh=new A.rA(1,"herein")
D.aan=new A.rA(2,"weder")
D.aK3=new B.ab("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.aaL=new B.ea(D.aK3,null,null)
D.ED=new A.Oh(0,"left")
D.aaV=new A.Oh(1,"center")
D.EE=new A.Oh(2,"right")
D.aaZ=new B.a5(57495,"MaterialIcons",null,!1)
D.abd=new B.a5(58040,"MaterialIcons",null,!0)
D.yg=new B.a5(58927,"MaterialIcons",null,!1)
D.abQ=new B.a5(59005,"MaterialIcons",null,!0)
D.abR=new B.a5(59007,"MaterialIcons",null,!0)
D.abS=new B.a5(59011,"MaterialIcons",null,!1)
D.acY=new B.a5(62589,"MaterialIcons",null,!1)
D.ac9=new B.a5(61349,"MaterialIcons",null,!1)
D.adT=new B.az(D.ac9,20,C.h,null,null)
D.acg=new B.a5(61487,"MaterialIcons",null,!1)
D.adV=new B.az(D.acg,18,null,null,null)
D.adW=new B.az(D.yg,18,null,null,null)
D.aef=new B.az(C.ob,14,C.a0,null,null)
D.aek=new B.az(C.i2,null,C.h,null,null)
D.ael=new B.az(C.lk,null,C.m,null,null)
D.aeL=new B.az(C.ll,16,null,null,null)
D.aeR=new B.az(C.yr,16,null,null,null)
D.aeV=new B.az(F.yd,null,C.a0,null,null)
D.af5=new B.az(F.Ff,16,null,null,null)
D.afc=new B.az(D.yg,16,null,null,null)
D.ahk=new A.a8d(null)
D.aTk=new A.aMd(0,"horizontal")
D.yC=new A.zK(0,0,0,0,!1)
D.FZ=new A.Pd(0.5)
D.Cl=new A.a8q()
D.ahx=new A.Fn(D.Cl,A.bPR(),10,A.bPO(),!0,A.bPQ(),A.bPP(),!1,null,null,null)
D.aTm=new A.Fn(D.Cl,A.bPR(),10,A.bPO(),!0,A.bPQ(),A.bPP(),!0,null,null,null)
D.aiZ=w([4,3],x.t)
D.ayM=new B.aK("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ayB=new B.aK("receivables","Forderungen (kurzfristig)")
D.ayp=new B.aK("inventory_value","Vorr\xe4te (Warenbestand)")
D.ayn=new B.aK("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aya=new B.aK("fixed_assets","Anlageverm\xf6gen")
D.ayh=new B.aK("current_liabilities","Kurzfristige Verbindlichkeiten")
D.ayI=new B.aK("long_term_liabilities","Langfristige Verbindlichkeiten")
D.ayA=new B.aK("equity","Eigenkapital")
D.pV=w([D.ayM,D.ayB,D.ayp,D.ayn,D.aya,D.ayh,D.ayI,D.ayA],B.aw("D<+(h,h)>"))
D.aTp=w([],x.M)
D.anO=w([],x.O)
D.anP=w([],x.Y)
D.anQ=w([],B.aw("D<mR>"))
D.anR=w([],B.aw("D<mS>"))
D.aTq=w([],x.U)
D.aTr=w([],x.u)
D.anS=w([],x.r)
D.av3={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TJ={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.zi=new B.a7(D.TJ,[0,0,0,0,0,0,0,C.be],B.aw("a7<h,B>"))
D.av0={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aui=new B.a7(D.av0,[0,0,0,0],B.aw("a7<h,v>"))
D.avi={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.arS=new B.a7(D.avi,[0,0,0,0,null,null,null,null],B.aw("a7<h,v?>"))
D.arL=new B.a7(D.av3,[D.zi,D.zi,D.zi,C.be,C.be,C.be,D.aui,D.arS],x.R)
D.as4=new B.a7(D.TJ,[0,0,0,0,0,0,0,C.cb],x.R)
D.av4={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.as6=new B.a7(D.av4,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("a7<h,G>"))
D.avs={total:0,rows:1}
D.as9=new B.a7(D.avs,[0,C.cb],x.R)
D.av_={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.auj=new B.a7(D.av_,[0,0,0,0,0,0,0,C.cb],x.R)
D.avw={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.auk=new B.a7(D.avw,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("a7<h,h>"))
D.a5v=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.l)
D.a5D=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.l)
D.a4h=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.l)
D.a4K=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.l)
D.a4U=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.l)
D.a5T=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a42=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.l)
D.a4M=new B.E(1,0,0.592156862745098,0.6549019607843137,C.l)
D.a4X=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.l)
D.a5k=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.l)
D.aup=new B.dA([50,D.a5v,100,D.a5D,200,D.a4h,300,D.a4K,400,D.a4U,500,D.a5T,600,D.a42,700,D.a4M,800,D.a4X,900,D.a5k],x.o)
D.Tu=new B.rW(D.aup,1,0,0.7372549019607844,0.8313725490196079,C.l)
D.a95=new B.aj(32,32,32,32)
D.awr=new B.ac(D.a95,C.bB,null)
D.awz=new B.ac(C.al,C.bB,null)
D.ao2=w([],B.aw("D<na>"))
D.ao3=w([],B.aw("D<nA>"))
D.Y5=new A.R2(D.ao2,D.ao3)
D.azz=new B.fi("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.azB=new B.fi("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.azE=new B.fi("Automaten-Business","Umsatz je Automat",null,null)
D.azH=new B.fi("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.azJ=new B.fi("Top","Meistverkaufte Produkte",null,null)
D.azM=new B.fi("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.azN=new B.fi("Kennzahlen","Rentabilit\xe4t",null,null)
D.YK=new B.tx(C.K,C.v,0)
D.aIi=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aCo=new B.dL(D.aIi,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aKv=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aCr=new B.dL(D.aKv,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIx=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aCs=new B.dL(D.aIx,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aKo=new B.ab("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aCu=new B.dL(D.aKo,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aJR=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aCv=new B.dL(D.aJR,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aJO=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aCQ=new B.dL(D.aJO,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aTB=new B.U(!0,C.I,null,null,null,null,14,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIt=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.aIG=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aJy=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aJF=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aJV=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.aKI=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_3=new A.af9(0,"auto")
D.aLm=new A.af9(1,"top")
D.aPN=new A.xa("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aPO=new A.xa("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.Be=new A.xc(0,"alle")
D.a_u=new A.xc(1,"aufwand")
D.a_v=new A.xc(2,"erloes")
D.a_w=new A.xc(3,"privat")
D.aQH=new A.xf('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.m,C.lk,null)
D.ad9=new B.a5(984570,"MaterialIcons",null,!1)
D.aQI=new A.xf("Keine Buchung passt zu dieser Auswahl.",C.m,D.ad9,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cjt","bU4",()=>B.j2(new A.bxn(),x.D))
w($,"cju","a1h",()=>B.j2(new A.bxo(),x.a))
w($,"cku","qZ",()=>B.bD2(new A.bzj(),x.P))
w($,"cjv","bAf",()=>C.aI.$1$1(new A.bxp(),x.d))
w($,"cjr","bAe",()=>C.aI.$1$1(new A.bxl(),x.m))
w($,"cjs","bGD",()=>C.aI.$1$1(new A.bxm(),x.X))
w($,"cjq","bAd",()=>C.aI.$1$1(new A.bxk(),x.h))
w($,"cjp","bAc",()=>B.b0W(A.c9E(),x.F,x.c))
w($,"ccv","bzK",()=>new A.azh())
v($,"cfR","lI",()=>new A.b3C())})()};
(a=>{a["zNXhRWGKKeTD22QSJBvW4DVppgI="]=a.current})($__dart_deferred_initializers__);