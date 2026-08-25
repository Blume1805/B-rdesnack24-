((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
OE(d,e,f,g,h){return new A.a7P(f,g,d,h,e,null)},
a7P:function a7P(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vd:function vd(d){this.a=d},
c7i(d){var w
if(x.f.b(d)){w=J.a2(d,"error")
if(typeof w=="string"&&C.c.aL(w).length!==0)return C.c.aL(w)}if(typeof d=="string"&&C.c.aL(d).length!==0)return C.c.aL(d)
return null},
Eo:function Eo(d){this.a=d},
bVw(d){var w=J.Y(d),v=B.b_(w.h(d,"total"))
v=v==null?null:C.d.Y(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.c_
w=J.cP(w,new A.aGn(),x.aI)
w=B.Q(w,w.$ti.i("as.E"))
return new A.oj(v,w)},
bud(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.am(d))
return w==null?0:w},
pL:function pL(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
oj:function oj(d,e){this.a=d
this.b=e},
aGn:function aGn(){},
bVx(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z8
w=x.f
v=x.N
u=x.z
t=A.aGI(B.cW(w.a(e.h(a0,"current")),v,u))
s=A.aGI(B.cW(w.a(e.h(a0,"prior_year")),v,u))
r=A.aGI(B.cW(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c_
p=J.cP(p,new A.aGo(),x.cZ)
p=B.Q(p,p.$ti.i("as.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c_
o=J.cP(o,new A.aGp(),x.ef)
o=B.Q(o,o.$ti.i("as.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c_
q=J.cP(q,new A.aGq(),x.fB)
q=B.Q(q,q.$ti.i("as.E"))
n=B.cW(w.a(e.h(a0,"customer")),v,u)
m=B.b_(n.h(0,"purchases_count"))
m=m==null?null:C.d.Y(m)
if(m==null)m=0
l=A.pf(n.h(0,"app_gross"))
k=B.b_(n.h(0,"active_customers"))
k=k==null?null:C.d.Y(k)
if(k==null)k=0
n=A.pf(n.h(0,"avg_basket"))
u=B.cW(w.a(e.h(a0,"derived")),v,u)
v=A.pf(u.h(0,"gross_margin_pct"))
e=A.pf(u.h(0,"net_margin_pct"))
w=A.pf(u.h(0,"ebitda_margin_pct"))
j=A.pf(u.h(0,"cashflow_operating"))
i=A.bue(u.h(0,"revenue_growth_yoy_pct"))
h=A.bue(u.h(0,"revenue_growth_mom_pct"))
g=A.bue(u.h(0,"result_growth_yoy_pct"))
u=A.bue(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.a2(d,"days"))
f=f==null?null:C.d.Y(f)
if(f==null)f=1
return new A.ok(t,s,r,p,o,q,new A.aBx(m,l,k,n),new A.aCF(v,e,w,j,i,h,g,u),f)},
pf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.am(d))
return w==null?0:w},
bue(d){if(d==null)return null
if(typeof d=="number")return d
return B.it(J.am(d))},
qw:function qw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vP:function vP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wL:function wL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBx:function aBx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCF:function aCF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ok:function ok(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aGo:function aGo(){},
aGp:function aGp(){},
aGq:function aGq(){},
aGI(d){var w=J.Y(d),v=A.ut(w.h(d,"revenue_net_7")),u=A.ut(w.h(d,"revenue_net_19")),t=A.ut(w.h(d,"revenue_net")),s=A.ut(w.h(d,"expense_net")),r=A.ut(w.h(d,"result_net")),q=A.ut(w.h(d,"vat_collected")),p=A.ut(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.c_
w=J.cP(w,new A.aGJ(),x._)
w=B.Q(w,w.$ti.i("as.E"))
return new A.om(v,u,t,s,r,q,p,w)},
ut(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.am(d))
return w==null?0:w},
CV:function CV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
om:function om(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aGJ:function aGJ(){},
bVv(d){return new A.yD(d,new B.is(x.c_),C.dP)},
bv2:function bv2(){},
bv3:function bv3(){},
bwV:function bwV(){},
bv4:function bv4(){},
bv0:function bv0(){},
bv1:function bv1(){},
bv_:function bv_(){},
yD:function yD(d,e,f){this.r=d
this.a=e
this.f=f},
aGm:function aGm(d,e,f){this.a=d
this.b=e
this.c=f},
aGl:function aGl(d,e,f){this.a=d
this.b=e
this.c=f},
vc:function vc(d,e){this.d=d
this.a=e},
BK:function BK(d,e){this.a=d
this.b=e},
alG:function alG(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bd7:function bd7(d){this.a=d},
bd2:function bd2(d){this.a=d},
bd1:function bd1(d,e){this.a=d
this.b=e},
bd3:function bd3(d){this.a=d},
bd0:function bd0(d){this.a=d},
bd6:function bd6(){},
bd5:function bd5(){},
bd4:function bd4(d){this.a=d},
bd_:function bd_(d){this.a=d},
alF:function alF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcX:function bcX(d){this.a=d},
bcY:function bcY(d){this.a=d},
bcZ:function bcZ(d){this.a=d},
Bq:function Bq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IN:function IN(d,e,f){this.c=d
this.d=e
this.a=f},
bgR:function bgR(){},
bgS:function bgS(){},
bgT:function bgT(){},
bgU:function bgU(){},
bgV:function bgV(){},
aiM:function aiM(d,e){this.c=d
this.a=e},
x5:function x5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVy(){return new A.yE(null)},
Wi(d,e,f,g,h){return new A.amP(e,h,g,f,d,null)},
yE:function yE(d){this.a=d},
aGH:function aGH(d){this.a=d},
aGy:function aGy(d,e,f){this.a=d
this.b=e
this.c=f},
aGz:function aGz(d,e,f){this.a=d
this.b=e
this.c=f},
aGA:function aGA(d){this.a=d},
aGx:function aGx(){},
aGB:function aGB(d){this.a=d},
aGC:function aGC(d){this.a=d},
aGw:function aGw(){},
aGD:function aGD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGG:function aGG(){},
aGF:function aGF(){},
aGE:function aGE(){},
aGv:function aGv(d,e){this.a=d
this.b=e},
aGt:function aGt(d){this.a=d},
aGu:function aGu(d){this.a=d},
ahm:function ahm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amP:function amP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ap4:function ap4(d,e){this.e=d
this.a=e},
bjt:function bjt(d){this.a=d},
bju:function bju(d){this.a=d},
bjv:function bjv(d,e,f){this.a=d
this.b=e
this.c=f},
bjs:function bjs(){},
Jh:function Jh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JH:function JH(d,e){this.c=d
this.a=e},
bqb:function bqb(d){this.a=d},
bqc:function bqc(d,e){this.a=d
this.b=e},
bqa:function bqa(d){this.a=d},
ahk:function ahk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
In:function In(d,e){this.c=d
this.a=e},
bBT(d,e,f,g,h){var w=null
return B.jc(w,w,!0,w,new A.bu8(h,g,e,f),d,w,!0,!0,x.H)},
jR(d,e,f,g,h,i,j,k,l,m,n){return new A.anl(g,n,i,e,d,m,f,k,l,j,null)},
awg(d,e){return A.c56(d,e)},
c56(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$awg=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.aAW)
t=4
o=e.aI(0,$.bX(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fY("finance-balance-sync",B.A(n,n)),$async$awg)
case 7:r=g
q=B.cW(x.f.a(r.a),x.N,n)
l.Mw()
if(J.d(J.a2(q,"configured"),!1)){l.be(D.aB_)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bxP()
if(e.e==null)B.S(B.X(y.b))
e.gcd().c_(o)
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Mw()
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$awg,v)},
awj(d,e,f){var w=0,v=B.q(x.H)
var $async$awj=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jc(null,null,!0,null,new A.bu6(f,e,e.aI(0,$.bX(),x.A)),d,null,!0,!0,x.H),$async$awj)
case 2:return B.o(null,v)}})
return B.p($async$awj,v)},
a7Q:function a7Q(d){this.a=d},
aLE:function aLE(){},
aLD:function aLD(){},
aLC:function aLC(){},
II:function II(d,e){this.c=d
this.a=e},
bgr:function bgr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgg:function bgg(){},
bgh:function bgh(){},
bgi:function bgi(){},
bgj:function bgj(){},
bgk:function bgk(){},
bgl:function bgl(){},
bgm:function bgm(){},
bgn:function bgn(){},
bgo:function bgo(d){this.a=d},
bgp:function bgp(d){this.a=d},
bgq:function bgq(d){this.a=d},
bgs:function bgs(d,e){this.a=d
this.b=e},
bgt:function bgt(d,e){this.a=d
this.b=e},
bu8:function bu8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu7:function bu7(d){this.a=d},
am6:function am6(d){this.a=d},
anl:function anl(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bgu:function bgu(d,e){this.a=d
this.b=e},
Vn:function Vn(d,e,f){this.c=d
this.d=e
this.a=f},
Z5:function Z5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bpf:function bpf(){},
bpg:function bpg(){},
bph:function bph(d){this.a=d},
Ux:function Ux(d,e,f){this.c=d
this.d=e
this.a=f},
b6T:function b6T(){},
b6V:function b6V(d){this.a=d},
b6W:function b6W(d){this.a=d},
b6U:function b6U(){},
UO:function UO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7T:function b7T(){},
b7U:function b7U(){},
b7V:function b7V(){},
b7W:function b7W(d){this.a=d},
anR:function anR(d,e){this.c=d
this.a=e},
bh8:function bh8(){},
bh9:function bh9(){},
ak4:function ak4(d,e){this.c=d
this.a=e},
Cm:function Cm(d,e,f){this.c=d
this.d=e
this.a=f},
atI:function atI(d,e){this.c=d
this.a=e},
bru:function bru(){},
brv:function brv(){},
x1:function x1(d,e){this.c=d
this.a=e},
aif:function aif(d,e){this.e=d
this.a=e},
b5j:function b5j(){},
b5i:function b5i(){},
b5h:function b5h(d,e,f){this.a=d
this.b=e
this.c=f},
b5b:function b5b(d,e){this.a=d
this.b=e},
b5c:function b5c(d,e){this.a=d
this.b=e},
b5k:function b5k(d){this.a=d},
b5l:function b5l(d){this.a=d},
b5d:function b5d(){},
b5e:function b5e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5f:function b5f(d,e){this.a=d
this.b=e},
b5g:function b5g(d,e,f){this.a=d
this.b=e
this.c=f},
bu6:function bu6(d,e,f){this.a=d
this.b=e
this.c=f},
bu5:function bu5(d){this.a=d},
Bk:function Bk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U9:function U9(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b55:function b55(){},
b56:function b56(d){this.a=d},
b57:function b57(d){this.a=d},
b59:function b59(d,e){this.a=d
this.b=e},
b58:function b58(d,e){this.a=d
this.b=e},
b5a:function b5a(d){this.a=d},
bk:function bk(){},
bFk(d){return new A.Lj(d,C.am,C.bX,null,null)},
Lj:function Lj(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ua:function Ua(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ef$=f
_.c5$=g
_.c=_.a=null},
b5m:function b5m(d,e){this.a=d
this.b=e},
b5n:function b5n(d){this.a=d},
ayP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amD:f,p=a0==null?16:a0,o=d==null?D.a_G:d,n=g==null,m=n?A.byg(r,r,r,r,r,r,r,r):g,l=a3==null?D.XB:a3
n=n?A.byg(r,r,r,r,r,r,r,r):g
w=j==null?D.E3:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.K:e
return new A.o1(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BW,s,w,i,n)},
ayW(d,e,f,g,h){var w=d==null?D.amE:d,v=e==null?2:e,u=g==null?C.lz:g
return new A.fL(h,f===!0,w,v,u)},
bSN(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.ayW(A.kE(d.c,e.c,f,A.c5S(),x.fj),B.af(d.d,e.d,f),!1,A.kE(d.e,e.e,f,A.a0p(),x.S),w)},
a1T(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T_
else w=h
v=m==null
u=v?8:m
t=$.lF()
s=t.aXQ(f,v?8:m)
t=t.aXR(g,v?8:m)
v=d==null?A.bFi(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.amF:k)},
bSO(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.af(d.e,e.e,f),q=B.mR(d.f,e.f,f),p=A.kE(d.r,e.r,f,A.a0p(),x.S),o=B.bZ(d.w,e.w,f),n=B.af(d.a,e.a,f),m=B.af(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.af(w.b,v.b,f)
t=B.af(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1T(A.bFi(v,u,null,!1,t),p,q,o,s,n,null,A.kE(d.y,e.y,f,A.c5T(),x.G),m,r)},
bSP(d,e,f){var w,v,u=B.af(d.a,e.a,f)
u.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mP(u,w,v,B.bZ(d.d,e.d,f))},
bFi(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dw
else w=d
return new A.a1P(g===!0,v,u,w,f)},
byg(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1V(4,C.fO,16,D.xN,0,120,A.c5V(),!1,!1,D.Zx,0,C.J,A.c5U())
else w=k
v=j==null?C.l3:j
return new A.a1U(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c6I(d,e,f,g){var w=null,v=B.j2(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dc(C.d.j(f.b),v)},
c6H(d){return A.aAW(D.dw,15)},
o1:function o1(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayO:function ayO(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayX:function ayX(){},
ayY:function ayY(){},
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
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1P:function a1P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1U:function a1U(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aeO:function aeO(d,e){this.a=d
this.b=e},
a1V:function a1V(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Dc:function Dc(d,e){this.a=d
this.b=e},
Lk:function Lk(d){this.a=d},
a1W:function a1W(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xS:function xS(d,e){this.a=d
this.b=e},
aib:function aib(){},
aii:function aii(){},
aij:function aij(){},
ail:function ail(){},
aim:function aim(){},
ain:function ain(){},
aio:function aio(){},
aip:function aip(){},
aiq:function aiq(){},
ayZ:function ayZ(d){this.a=d},
az_:function az_(){},
uP:function uP(d,e,f){this.a=d
this.b=e
this.c=f},
aik:function aik(){},
az0:function az0(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
az1:function az1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az2:function az2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6T:function a6T(d){this.b=d},
a1S:function a1S(d,e,f){this.d=d
this.e=e
this.a=f},
abY:function abY(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aF=_.ak=_.ar=$
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
c6J(d,e){var w=null
return new A.S6(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ayH(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.af(w.c,v.c,f)
u.toString
return new A.po(t,e.b,new A.ql(v.a,v.b,u,B.af(w.d,v.d,f)),!0)},
bGH(d,e,f){var w=A.ayH(d.b,e.b,f),v=A.ayH(d.d,e.d,f),u=A.ayH(d.e,e.e,f)
return new A.vf(e.a,w,A.ayH(d.c,e.c,f),v,u)},
bVA(d,e,f){var w,v
if(d.k(0,D.fQ))return e
if(e.k(0,D.fQ))return d
w=B.af(d.a,e.a,f)
w.toString
v=B.af(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bGF(d,e,f){return new A.yG(e.a,!0,B.af(d.c,e.c,f),e.d,e.e,e.f,B.af(d.r,e.r,f),e.w,e.x)},
c97(d){return!0},
c6M(d){return D.a9l},
bGG(d,e,f,g){var w
if(d==null)w=f==null?C.F:null
else w=d
return new A.pM(w,f,g,e)},
bIE(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5O(),x.dv)
v.toString
w=A.kE(d.b,e.b,f,A.c5Q(),x.bN)
w.toString
return new A.QF(v,w)},
bWm(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n8(t,w,v,u)},
c0D(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nw(t,w,v,u)},
bWl(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pF(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bWj(B.by9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0p(),x.S)
if(u==null)u=v==null?C.F:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c0C(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pF(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c0A(B.by9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0p(),x.S)
if(u==null)u=v==null?C.F:null
return new A.ln(r,e.f,e.r,t,e.x,u,v,w,s)},
bWj(d,e,f,g,h,i){return new A.a73(f,!1,g,i,d,e)},
bWk(d){return C.d.ai(d.e,1)},
c0A(d,e,f,g,h,i){return new A.afd(f,!1,g,i,d,e)},
c0B(d){return C.d.ai(d.e,1)},
bGB(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5N(),x.cm)
v.toString
w=A.kE(d.b,e.b,f,A.c5P(),x.es)
w.toString
return new A.Ng(v,w,!0)},
bVz(d,e,f){return new A.Np(d,e==null?4:e,f)},
a1I:function a1I(){},
Db:function Db(d,e){this.a=d
this.b=e},
tK:function tK(d,e){this.r=d
this.w=e},
ql:function ql(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adn:function adn(){},
po:function po(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vf:function vf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB:function eB(d,e){this.a=d
this.b=e},
yG:function yG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pM:function pM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeQ:function aeQ(){},
QF:function QF(d,e){this.a=d
this.b=e},
n8:function n8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kW:function kW(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ln:function ln(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a73:function a73(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afd:function afd(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Ng:function Ng(d,e,f){this.a=d
this.b=e
this.c=f},
ve:function ve(){},
Np:function Np(d,e,f){this.a=d
this.b=e
this.c=f},
ai6:function ai6(){},
aia:function aia(){},
alq:function alq(){},
alM:function alM(){},
alN:function alN(){},
alP:function alP(){},
alQ:function alQ(){},
amF:function amF(){},
amE:function amE(){},
amG:function amG(){},
aqf:function aqf(){},
as7:function as7(){},
as8:function as8(){},
atM:function atM(){},
aut:function aut(){},
aus:function aus(){},
auu:function auu(){},
ayD:function ayD(){},
Ld:function Ld(){},
Le:function Le(d,e,f){this.c=d
this.d=e
this.a=f},
ayF:function ayF(d){this.a=d},
ayE:function ayE(d){this.a=d},
S6:function S6(d,e,f){this.c=d
this.e=e
this.a=f},
YU:function YU(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c_7(d,e,f){var w=B.ag(f),v=w.i("ac<1,jZ>")
v=B.Q(new B.ac(f,new A.b_A(),v),v.i("as.E"))
w=w.i("ac<1,c>")
w=B.Q(new B.ac(f,new A.b_B(),w),w.i("as.E"))
return new A.ado(e,d,v,w,null)},
bSL(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7G(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tH(v,C.av,C.x,new B.kx(1),v,v,v,v,C.bD,v)
u=new A.a1J(f,d,e,u,t,!0,0,v,v,new B.br(),B.aK(x.j))
u.bl()
return u},
ado:function ado(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_A:function b_A(){},
b_B:function b_B(){},
a1J:function a1J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.W=f
_.a4=g
_.Wr$=h
_.aTI$=i
_.dq$=j
_.ah$=k
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
bgA:function bgA(d,e){this.a=d
this.b=e},
ayG:function ayG(){},
jZ:function jZ(d,e){this.a=d
this.b=e},
o0:function o0(d,e){this.a=d
this.b=e},
ai7:function ai7(){},
ai8:function ai8(){},
ai9:function ai9(){},
U7:function U7(){},
AL:function AL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_C:function b_C(d){this.a=d},
b_D:function b_D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_E:function b_E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6a(d,e){var w=d==null?B.cj(C.F,1):d
return new A.a69(e!==!1,w)},
a1Y:function a1Y(){},
a69:function a69(d,e){this.a=d
this.b=e},
Nw:function Nw(){},
a6b:function a6b(){},
azb:function azb(){},
aFB:function aFB(d,e){this.a=d
this.b=e},
ait:function ait(){},
alJ:function alJ(){},
alK:function alK(){},
alR:function alR(){},
Ln:function Ln(){},
w_:function w_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hw:function hw(){},
a6f:function a6f(d){this.a=d},
a6g:function a6g(d){this.a=d},
a6h:function a6h(d){this.a=d},
Nr:function Nr(){},
Ns:function Ns(){},
a6k:function a6k(d){this.a=d},
Nu:function Nu(){},
Nv:function Nv(d){this.a=d},
a6e:function a6e(d){this.a=d},
a6d:function a6d(d){this.a=d},
Nq:function Nq(d){this.a=d},
a6i:function a6i(d){this.a=d},
a6j:function a6j(d){this.a=d},
Nt:function Nt(d){this.a=d},
Gt:function Gt(){},
aVP:function aVP(d){this.a=d},
aVQ:function aVQ(d){this.a=d},
aVR:function aVR(d){this.a=d},
aVS:function aVS(d){this.a=d},
aVT:function aVT(d){this.a=d},
aVU:function aVU(d){this.a=d},
aVV:function aVV(d){this.a=d},
aVW:function aVW(d){this.a=d},
aVX:function aVX(d){this.a=d},
aVY:function aVY(d){this.a=d},
aVZ:function aVZ(d){this.a=d},
aW_:function aW_(d){this.a=d},
aW0:function aW0(d){this.a=d},
OR:function OR(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
WD:function WD(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ef$=g
_.c5$=h
_.c=_.a=null},
bgG:function bgG(d,e){this.a=d
this.b=e},
bgE:function bgE(d){this.a=d},
bgF:function bgF(d,e){this.a=d
this.b=e},
bgD:function bgD(){},
bgH:function bgH(d){this.a=d},
bzz(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.K:d
return new A.q_(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T_:u
else w=g
v=f==null?A.ayN(!1,u,0,u,!1,D.w8):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayN(!1,u,0,u,!1,D.w8):d,j,a0,i,s,!1,p)
w.arF(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bWN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.af(d.x,e.x,f)
m.toString
w=A.bFj(d.ay,e.ay,f)
v=A.bFj(d.ch,e.ch,f)
u=B.af(d.as,e.as,f)
u.toString
t=e.CW
s=A.kE(d.cy,e.cy,f,A.a0p(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rv(d.w,e.w,f)
p=A.kE(d.a,e.a,f,A.c5M(),x.cw)
p.toString
o=B.bJc(d.db,e.db,f)
o.toString
n=B.af(d.dy.a,e.dy.a,f)
n.toString
return A.aLP(v,m,w,r,e.z,s,new A.yF(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OS(n),!1,u,o,!0,e.cx,p)},
ayN(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
else w=e
return new A.a1R(h,w,g,i,f,!1)},
bFj(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rv(v.b,u.b,f),r=B.af(v.c,u.c,f)
r.toString
r=A.bGG(t,A.kE(v.d,u.d,f,A.a0p(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rv(d.c,e.c,f)
v=B.af(d.e,e.e,f)
v.toString
return A.ayN(!1,s,v,u,e.a,new A.Li(!1,r,w.c,!0))},
bSQ(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rv(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
return new A.mQ(e.a,e.b,w,v)},
c98(d){return!0},
bBE(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jv)return A.bCs(w.a,A.bzd(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dw:w},
c3v(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jv)w=A.bCs(v.a,A.bzd(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dw}return A.aAW(w,40)},
bLJ(d,e,f,g,h){var w,v=A.bBE(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jv)w=A.bCs(u.a,A.bzd(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dw}u=A.aAW(w,40)
return new A.Np(v,h==null?4:h,u)},
c96(d,e){return!0},
c5z(d,e){return Math.abs(d.a-e.a)},
c6P(d,e){var w=J.cP(e,new A.buR(d),x.bY)
w=B.Q(w,w.$ti.i("as.E"))
return w},
c6L(d,e){return-1/0},
c6K(d,e){return d.a[e].b},
bMT(d){var w=J.cP(d,new A.buO(),x.fT)
w=B.Q(w,w.$ti.i("as.E"))
return w},
bMS(d){return A.aAW(D.dw,15)},
q_:function q_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ec:function ec(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aLQ:function aLQ(){},
OS:function OS(d){this.a=d},
a1R:function a1R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mQ:function mQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Li:function Li(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yF:function yF(d,e,f){this.a=d
this.b=e
this.c=f},
aLF:function aLF(d,e){this.a=d
this.b=e},
a6c:function a6c(){},
F0:function F0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
buR:function buR(d){this.a=d},
buQ:function buQ(d){this.a=d},
a82:function a82(){},
buO:function buO(){},
nb:function nb(){},
qu:function qu(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rI:function rI(d,e){this.a=d
this.b=e},
tL:function tL(d,e){this.a=d
this.b=e},
GV:function GV(d){this.a=d},
OT:function OT(d){this.a=d},
zr:function zr(d,e){this.a=d
this.b=e},
aig:function aig(){},
aih:function aih(){},
aiu:function aiu(){},
alL:function alL(){},
alO:function alO(){},
ant:function ant(){},
anu:function anu(){},
anv:function anv(){},
anx:function anx(){},
any:function any(){},
anz:function anz(){},
anA:function anA(){},
as6:function as6(){},
atL:function atL(){},
aLR:function aLR(d){this.a=d},
aLS:function aLS(){},
aLT:function aLT(){},
zs:function zs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
anw:function anw(){},
aLU:function aLU(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLX:function aLX(){},
aLV:function aLV(d,e,f){this.a=d
this.b=e
this.c=f},
aLW:function aLW(d,e,f){this.a=d
this.b=e
this.c=f},
aLY:function aLY(){},
vL:function vL(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a81:function a81(d,e,f){this.d=d
this.e=e
this.a=f},
aca:function aca(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aF=_.ak=_.ar=$
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
byf(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ag(o),l=new B.ac(o,new A.ayQ(),m.i("ac<1,F>")).jJ(0,new A.ayR()),k=e-l,j=new A.ayU(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gds(0)/2
s=u===o.length-1?0:w
v+=t.gds(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iV(o,m.i("iV<1>")).aB(0,new A.ayS(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iV(o,m.i("iV<1>")).aB(0,new A.ayT(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayQ:function ayQ(){},
ayR:function ayR(){},
ayU:function ayU(d,e,f){this.a=d
this.b=e
this.c=f},
ayV:function ayV(d,e,f){this.a=d
this.b=e
this.c=f},
ayS:function ayS(d,e,f){this.a=d
this.b=e
this.c=f},
ayT:function ayT(d,e,f){this.a=d
this.b=e
this.c=f},
bzd(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iV(w,B.ag(w).i("iV<1>")).aB(0,new A.aIU(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIU:function aIU(d,e){this.a=d
this.b=e},
aC8(d,e){var w,v
if(e!=null){w=B.ag(e).i("ac<1,F>")
v=B.Q(new B.ac(e,new A.aC9(),w),w.i("as.E"))
return A.c6C(d,new A.a2w(v,x.cX))}else return d},
aC9:function aC9(){},
c_K(d,e){var w=!0
if(d!==C.f8)if(!(d===C.av&&e===C.x))w=d===C.iz&&e===C.b1
if(w)return D.Eg
else{w=!0
if(d!==C.hy)if(!(d===C.iz&&e===C.x))w=d===C.av&&e===C.b1
if(w)return D.Eh
else return D.aa2}},
NV:function NV(d,e){this.a=d
this.b=e},
a2m:function a2m(d,e){this.a=d
this.b=e},
zw:function zw(d,e){this.a=d
this.$ti=e},
anH:function anH(){},
c6C(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.cm(j.r,C.ah,k,k,h)
for(j=B.Na(d),w=B.b([],x.I),v=new B.Nc(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.S(B.fC('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Nb(v,r)
v.De()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.De()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eq(B.b([],i),!0,s)
p=new B.Kz(new B.cm(t,p,k,new B.aqC([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2w:function a2w(d,e){this.a=d
this.b=0
this.$ti=e},
b36:function b36(){},
bz1(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fQ))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bST(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAW(d,e){var w=1-e/100
return B.aH(d.gfI(d),C.d.aN(d.gNZ()*w),C.d.aN(d.gGd()*w),C.d.aN(d.gKq()*w))},
bGE(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bz2(d){var w=d.a,v=w?A.b_z(d.b):0,u=w?A.b_z(d.c):0,t=w?A.b_z(d.d):0
return new B.ai(v,u,t,w?A.b_z(d.e):0)},
bY0(d){var w
if(d.c===0){d.seX(null)
w=B.c4(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bzW(d,e,f,g){var w
if(f!=null){d.r=C.F.gq(0)
d.seX(f.mM(0,g))}else{w=e==null?C.K:e
d.r=w.gq(w)
d.seX(null)}},
b_z(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kE(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kd(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kd(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c7V(d,e,f){return C.d.aN(d+(e-d)*f)},
bCs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kd(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7P.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.m:C.a4
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bW(t.x,C.m,s,18),C.aM],w))
v.push(B.at(new B.dK(t.c,!1,s),1))
v=B.ah(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.i(t.d,s,1,C.af,s,B.bA(u==null?C.h:u,22,C.E),s,s,s)],w)
return B.bj(r,B.a7(w,C.z,C.ij,C.i),q,s,C.al,s,s,3)}}
A.vd.prototype={
LN(d){return this.aTH(d)},
aTH(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LN=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ek("finance_summary",B.a6(["p_from",E.ol(d.a),"p_to",E.ol(d.b)],s,r),r),$async$LN)
case 3:q=f
if(q==null){u=D.aqM
w=1
break}if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.at0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LN,v)},
LM(d){return this.aTG(d)},
aTG(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LM=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ek("finance_kpis",B.a6(["p_from",E.ol(d.a),"p_to",E.ol(d.b)],s,r),r),$async$LM)
case 3:q=f
if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.aqs
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LM,v)},
LL(d){return this.aTF(d)},
aTF(d){var w=0,v=B.q(x.b),u,t=this,s,r,q
var $async$LL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ek("finance_bookings_list",B.a6(["p_from",E.ol(d.a),"p_to",E.ol(d.b),"p_limit",500,"p_offset",0],s,r),r),$async$LL)
case 3:q=f
if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.aqR
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LL,v)},
pG(d){return this.arn(d)},
arn(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("sevdesk-sync",B.a6(["from",E.ol(d.a),"to",E.ol(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.Y(B.fr(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LH(d){return this.aTw(d)},
aTw(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LH=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fY("finance-export-pdf",B.a6(["from",E.ol(d.a),"to",E.ol(d.b)],s,s)),$async$LH)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aF(J.a2(r,"base64"))
w=1
break}throw B.e(B.dW("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LH,v)}}
A.Eo.prototype={
G7(d){return this.ako(d)},
ako(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G7=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LN(d),$async$G7)
case 7:q=f
o=A.aGI(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G7,v)},
G2(d){return this.ak9(d)},
ak9(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G2=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LM(d),$async$G2)
case 7:q=f
o=A.bVx(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G2,v)},
FT(d){return this.ajW(d)},
ajW(d){var w=0,v=B.q(x.m),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FT=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LL(d),$async$FT)
case 7:q=f
o=A.bVw(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FT,v)},
pG(d){return this.aro(d)},
aro(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a1(n)
p=r.Bp(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LG(d){return this.aTv(d)},
aTv(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LG=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LH(d),$async$LG)
case 7:q=f
o=C.iV.cG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Bp(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LG,v)},
Bp(d){var w,v
if(d instanceof B.vb)return d
if(d instanceof B.mh){if(d.b==="42501")return new B.w3(d.a)
return new B.tp(d.a)}if(d instanceof B.NJ){w=A.c7i(d.b)
v=""+d.a
return new B.tp(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Bc("Unerwarteter Fehler: "+B.j(d))},
$iaGs:1}
A.pL.prototype={
gam2(){var w=this.z
switch(w){case"sevdesk":return"sevDesk"
case"manual":return"manuell"
case"bwa_upload":return"BWA-Import"
default:return w}},
gbs(){var w=this
return[w.a,w.b,w.c,w.r,w.w]}}
A.oj.prototype={
gbs(){return[this.a,this.b]}}
A.qw.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vP.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wL.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBx.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCF.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ok.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CV.prototype={
gbs(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.om.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yD.prototype={
H3(d){return this.arm(0)},
arm(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H3=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sea(0,C.dC)
s=t.r
r=s.aI(0,$.qV(),x.P)
p.a=null
w=3
return B.k(B.pn(new A.aGm(p,t,r),x.H),$async$H3)
case 3:t.sea(0,f)
q=t.f
if(q.ghd(q)==null){q=$.bxR()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bE8())
s.c_($.bxQ())}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H3,v)},
LF(){return this.aTu()},
aTu(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LF=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sea(0,C.dC)
s=t.r.aI(0,$.qV(),x.P)
q.a=null
w=3
return B.k(B.pn(new A.aGl(q,t,s),x.H),$async$LF)
case 3:t.sea(0,e)
r=t.f
u=r.ghd(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LF,v)}}
A.vc.prototype={
U(){return new A.alG(D.AW)}}
A.BK.prototype={
L(){return"_Filter."+this.b}}
A.alG.prototype={
gSn(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbU(),t=u.aj($.qV(),x.P),s=u.aj($.bxQ(),x.e)
u=$.dC()
return B.de(D.a9U,v,B.qf(B.dl(B.b([new B.fD("Zeitraum",u.al(t.a)+" \u2013 "+u.al(t.b),v,v),C.O,new A.alF(w.w,w.gSn(),new A.bd2(w),new A.bd3(w),v),C.aD,B.dd(s,new A.bd4(w),new A.bd5(),new A.bd6(),!1,!0,!1,x.m,x.l)],x.p),v,C.cH,v,C.G,!1),C.m,new A.bd7(w)),v,v,v)},
asG(d){var w=B.ag(d).i("b5<1>")
w=B.Q(new B.b5(d,new A.bd_(this),w),w.i("t.E"))
return w}}
A.alF.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.Bq("Alle",t===D.AW,new A.bcX(v),u),new A.Bq("Ausgaben",t===D.ZX,new A.bcY(v),u),new A.Bq("Erl\xf6se",t===D.ZY,new A.bcZ(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.Bq("Konto "+w+" \xd7",!0,v.f,u))
return B.jP(C.cb,t,C.df,6,8)}}
A.Bq.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aK:C.a7,s=B.au(9999),r=B.au(9999),q=B.au(9999),p=B.cj(v?C.m:C.a4,1)
return B.bx(w,!0,w,B.dA(!1,C.W,!0,s,B.eb(!1,r,!0,B.aO(w,B.i(u,w,w,w,w,B.y(C.h,13,C.E),w,w,w),C.q,w,w,new B.aD(w,w,p,q,w,w,C.B),w,w,w,w,C.fN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.bi),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.IN.prototype={
p(d){var w,v,u,t,s,r,q,p,o=null,n=this.c,m=n.b
if(m.length===0)return D.aOV
w=this.d
if(w.length===0)return D.aOW
v=B.ag(w).i("b5<1>")
u=new B.b5(w,new A.bgR(),v).fl(0,0,new A.bgS())
t=new B.b5(w,new A.bgT(),v).fl(0,0,new A.bgU())
s=new B.b5(w,new A.bgV(),v).gt(0)
v=w.length
r=$.dk()
q=x.p
r=B.b([B.i(""+v+" Buchungen \xb7 Erl\xf6se "+r.al(t)+" \xb7 Aufwand "+r.al(u),o,o,o,o,B.y(C.h,14,C.E),o,o,o)],q)
n=n.a-m.length
if(n>0)C.b.K(r,B.b([C.aN,B.i(""+n+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",o,o,o,o,B.y(C.o,12,C.l),o,o,o)],q))
if(s>0)C.b.K(r,B.b([C.aN,B.i(""+s+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",o,o,o,o,B.y(C.a6,12,C.l),o,o,o)],q))
n=B.b([B.bj(o,B.a7(r,C.z,C.f,C.i),C.a7,o,C.D,o,o,3),C.O],q)
for(m=w.length,p=0;p<w.length;w.length===m||(0,B.J)(w),++p)C.b.K(n,B.b([new A.aiM(w[p],o),C.I],q))
return B.a7(n,C.aa,C.f,C.i)}}
A.aiM.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aL(n).length!==0)===!0){n.toString
n=C.c.aL(n)}else n="Ohne Bezeichnung"
n=B.at(B.i(n,p,2,C.af,p,B.y(C.h,14,C.E),p,p,p),1)
w=$.dk()
v=w.al(o.r)
u=x.p
v=B.ah(B.b([n,C.an,B.i(v,p,p,p,p,B.y(o.e==="revenue"?C.ac:C.h,15,C.E),p,p,p)],u),C.z,p,C.f,C.i,0,p,p)
n=B.i($.dC().al(o.b)+" \xb7 "+o.c+" "+o.d,p,1,C.af,p,B.y(C.o,12,C.l),p,p,p)
t=C.d.ai(o.y,1)
s=w.al(o.w)
w=w.al(o.x)
r=o.gam2()
q=o.Q
q=q==null?"":" #"+q
q=B.b([v,C.aN,n,C.b6,B.i("USt "+t+" % ("+s+") \xb7 brutto "+w+" \xb7 "+r+q,p,1,C.af,p,B.y(C.o,12,C.l),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.K(q,B.b([C.aN,B.ah(B.b([D.adc,C.c9,B.at(B.i("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.y(C.a6,11,C.l),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.bj(p,B.a7(q,C.z,C.f,C.i),p,p,C.cP,p,p,3)}}
A.x5.prototype={
p(d){var w=null
return B.bj(w,B.ah(B.b([B.bW(this.e,this.d,w,w),C.an,B.at(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a7,w,C.D,w,w,3)}}
A.yE.prototype={
dg(d,e){var w=null,v=e.aj($.qV(),x.P),u=e.aj($.bxR(),x.aN)
return B.qf(B.dl(B.b([new B.fD("Finanzen","Dashboard",new A.ahm(e.aj($.bxO(),x.c).gje(),new A.aGy(this,d,e),new A.aGz(this,d,e),new A.aGA(d),new A.aGB(d),new A.aGC(d),new A.aGD(this,d,e,v),w),w),C.aD,new A.ap4(v,w),C.ca,D.agb,C.ca,B.dd(u,new A.aGE(),new A.aGF(),new A.aGG(),!1,!0,!1,x.d,x.l)],x.p),w,C.cH,w,C.G,!1),C.m,new A.aGH(e))},
Jy(d,e){return this.aM6(d,e)},
aM6(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$Jy=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bxO()
w=3
return B.k(e.aI(0,n.ghP(),x.F).H3(0),$async$Jy)
case 3:m=g
if(d.e==null){w=1
break}t=e.aI(0,n,x.c)
s=t.ghd(t)==null
r=t.ghd(t)
if(r instanceof B.vb)q=r.a
else q=r==null?null:J.am(r)
if(s)p="sevDesk synchronisiert: "+B.j(m)+" Buchungen."
else p=q==null?"Synchronisierung fehlgeschlagen.":"Synchronisierung fehlgeschlagen: "+q
n=d.P(x.q).f
o=s?C.L:D.a7v
n.be(B.c2(null,null,null,null,null,C.r,null,B.i(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jy,v)},
Bq(d,e){return this.axt(d,e)},
axt(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bq=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bxO().ghP(),x.F).LF(),$async$Bq)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.aB1)
w=1
break}t=B.oL(C.v,10)
w=4
return B.k($.bP5().u2(s,"finanzauswertung.pdf",t,null,null,null),$async$Bq)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bq,v)},
Br(d,e,f){return this.aJG(d,e,f)},
aJG(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Br=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jc(null,null,!0,null,new A.aGv(f,d),d,null,!0,!0,x.cJ),$async$Br)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nW(e.aI(0,$.bX(),x.A))
p=f.a
o=f.b
n=$.dC()
m=n.al(p)
n=n.al(o)
w=8
return B.k(r.zB("finance_period",p,o,B.a6(["period_from",p.el()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Br)
case 8:if(d.e!=null)d.P(x.q).f.be(F.va)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Br,v)}}
A.ahm.prototype={
p(d){var w=this,v=null,u=A.Wi(C.m,F.i0,C.m,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Wi(v,D.abY,v,w.r,"Gesellschafter-Freigaben"),s=A.Wi(v,D.aak,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Wi(v,D.y4,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Wi(C.a6,C.jl,C.a6,r?v:w.e,"PDF-Export")
return B.ah(B.b([u,C.aM,t,C.aM,s,C.aM,q,C.aM,p,C.aM,A.Wi(C.ac,C.fS,C.ac,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.amP.prototype={
p(d){var w,v=this,u=null,t=B.au(12),s=B.au(12),r=B.au(12),q=v.w
if(q==null)q=C.a4
q=B.cj(q,1)
w=v.r
if(w==null)w=C.h
return B.wK(B.dA(!1,C.W,!0,t,B.eb(!1,s,!0,B.aO(u,B.bW(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a7,0,u,u,u,u,u,C.bi),u,v.d,u,u)}}
A.ap4.prototype={
dg(d,e){var w=null,v=this.e,u=$.dC(),t=x.p
return B.bj(w,B.a7(B.b([D.a91,C.I,B.ah(B.b([D.acQ,C.at,B.at(B.i(u.al(v.a)+" \u2013 "+u.al(v.b),w,w,w,w,B.y(C.h,16,C.E),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jP(C.cb,B.b([new A.Jh("Monat",new A.bjt(e),w,w),new A.Jh("Jahr (YTD)",new A.bju(e),w,w),new A.Jh("Zeitraum w\xe4hlen \u2026",new A.bjv(this,d,e),D.aaZ,w)],t),C.df,6,8)],t),C.z,C.f,C.i),w,w,C.D,w,w,3)},
IT(d,e){return this.aIA(d,e)},
aIA(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.ba(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awC(new A.bjs(),d,B.bR(B.b0(t)-5,1,1,0,0,0,0),new B.lQ(s.a,s.b,x.bz),B.bR(B.b0(t)+1,1,1,0,0,0,0),C.e5),$async$IT)
case 2:r=g
if(r!=null)e.aI(0,$.qV().ghP(),x.V).uk(0,new E.lW(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IT,v)}}
A.Jh.prototype={
p(d){var w=null,v=B.au(9999),u=B.au(9999),t=B.au(9999),s=B.cj(C.a4,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bW(p,C.h,w,14),C.aM],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.E),w,w,w))
return B.dA(!1,C.W,!0,v,B.eb(!1,u,!0,B.aO(w,B.ah(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.B),w,w,w,w,C.fN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a7,0,w,w,w,w,w,C.bi)}}
A.JH.prototype={
p(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ju(new A.bqb(this)),C.ca,D.a97,C.t],r),p=this.c.w
if(p.length===0)q.push(B.bj(s,B.ah(B.b([D.adi,C.an,B.at(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.o,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.i,0,s,s),C.a7,s,C.D,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.K(w,B.b([new A.ahk(t.a,t.b,t.c==="revenue",t.d,new A.bqc(d,t),s),C.I],r))}q.push(B.a7(w,C.j,C.f,C.i))}return B.a7(q,C.aa,C.f,C.i)}}
A.ahk.prototype={
p(d){var w,v,u=this,t=null,s=u.e,r=s?C.aK:C.a7,q=B.cj(s?C.m:C.a4,1),p=B.au(4),o=u.c
p=B.aO(C.U,B.i(C.c.a1(o,0,1),t,t,t,t,B.bA(C.h,14,C.p),t,t,t),C.q,t,t,new B.aD(r,t,q,p,t,t,C.B),t,36,t,t,t,t,t,36)
q=B.i(o+" \xb7 "+u.d,t,1,C.af,t,B.y(C.h,14,C.E),t,t,t)
r=s?"Erl\xf6s":"Aufwand"
w=x.p
r=B.at(B.a7(B.b([q,B.i(r,t,t,t,t,B.y(C.o,12,C.l),t,t,t)],w),C.z,C.f,C.i),1)
q=$.dk().al(u.f)
r=B.b([p,C.an,r,B.i(q,t,t,t,t,B.y(s?C.ac:C.h,15,C.E),t,t,t)],w)
C.b.K(r,B.b([C.c9,C.F3],w))
v=B.bj(t,B.ah(r,C.j,t,C.f,C.i,0,t,t),t,t,C.cP,t,t,3)
return B.bx(t,!0,t,B.eb(!1,B.au(12),!0,v,t,!0,t,t,t,t,t,t,t,t,t,t,t,u.r,t,t,t,t,t,t,t),!1,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Einzelbuchungen zu Konto "+o+" anzeigen",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.M,t)}}
A.In.prototype={
p(d){var w=null
return B.bj(C.a6,B.ah(B.b([D.adR,C.an,B.at(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fi,w,C.D,w,w,3)}}
A.a7Q.prototype={
dg(d,e){return B.dd(e.aj($.bE8(),x.cn),new A.aLC(),new A.aLD(),new A.aLE(),!1,!0,!1,x.X,x.l)}}
A.II.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aym,C.t,B.ju(new A.bgr(v,q,100-t.w.a,w,p)),C.t,new A.am6(u),C.aD,D.ayl,C.t,new A.aif(t,u),C.aD,D.ayf,C.t,B.bx(u,!0,u,B.ka(u,B.bj(u,new A.Ux(t,220,u),u,u,C.D,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgs(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.ay8,C.t,B.bx(u,!0,u,B.ka(u,new A.UO(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgt(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.ayc,C.t,new A.anR(t,u),C.aD,D.aya,C.t,new A.ak4(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aD,D.ayh,C.t,new A.atI(t,u)],s))
return B.a7(r,C.aa,C.f,C.i)}}
A.am6.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.o,11,C.l).cB(1.35),w,w,w)}}
A.anl.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.a6:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgu(m,d):l
r=x.p
q=B.b([B.at(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.o,10,C.p).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cj(C.a6,0.8)
n=B.au(4)
q.push(B.aO(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a6,9,C.p),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.B),l,l,l,l,C.nv,l,l,l))}q=B.b([B.ah(q,C.j,l,C.f,C.i,0,l,l),C.aN,B.Nn(C.d1,B.i(m.d,l,l,l,l,B.bA(w,22,C.p),l,l,l),C.hJ)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.af,l,B.y(C.o,10,C.aG),l,l,l))
q.push(C.cY)
q.push(B.ah(B.b([new A.Vn("Vormonat",m.r,l),C.c9,new A.Vn("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cY)
q.push(B.at(new A.Z5(v,m.y,m.z,l),1))
return B.bx(l,u,l,B.ka(l,B.bj(l,B.a7(q,C.z,C.f,C.i),l,l,C.bY,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.Vn.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.au(4)
return B.aO(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.o,9,C.p),r,r,r),C.q,r,r,new B.aD(C.a4,r,r,q,r,r,C.B),r,r,r,r,C.nv,r,r,r)}w=q>=0
v=w?C.ac:C.a6
u=v.em(0.12)
t=B.cj(v,0.7)
s=B.au(4)
return B.aO(r,B.ah(B.b([B.bW(w?F.aa8:D.aa7,v,r,10),C.YP,B.i(this.c+" "+C.d.ai(q,1)+" %",r,r,r,r,B.y(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.B),r,r,r,r,C.nv,r,r,r)}}
A.Z5.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.jJ(j,new A.bpf())
t=C.b.jJ(j,new A.bpg())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bph(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6a(k,!1)
w=B.b([A.aLP(k,2,A.ayN(!1,C.m.em(0.16),0,k,!0,D.w8),C.m,0.35,k,D.E7,k,!0,!1,!0,!1,D.Fv,!1,10,D.Yh,!0,C.lz,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OR(A.bzz(k,k,k,D.amG,l,D.BW,D.E3,D.E8,w,D.ago,k,m,k,n,D.XB,D.amH,D.a9o),C.am,C.a1,k,k)}}
A.Ux.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aO1
w=C.b.fl(p,0,new A.b6T())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayW(B.b([A.a1T(q,q,D.Bn,q,C.m,q,q,q,r.b,6),A.a1T(q,q,D.Bn,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bFk(A.ayP(q,q,u,q,q,A.a6a(q,!1),q,new A.yG(!0,!0,q,new A.b6U(),A.a0j(),!1,q,A.awm(),A.a0j()),q,v,q,q,new A.vf(!0,new A.po(16,q,new A.ql(!0,new A.b6V(this),46,q),!0),D.kw,D.kw,new A.po(16,q,new A.ql(!0,new A.b6W(p),26,q),!0)))),this.d,q)},
aLm(d){if(Math.abs(d)>=1000)return C.d.ai(d/1000,1)+" k"
return C.d.ai(d,0)}}
A.UO.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ac(v,new A.b7T(),w),x.i)
C.b.K(o,new B.ac(u,new A.b7U(),w))
t=C.b.fl(o,0,new A.b7V())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayW(B.b([A.a1T(q,q,q,q,C.m,q,q,q,v[s],14),A.a1T(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bFk(A.ayP(q,q,n,q,q,A.a6a(q,!1),q,D.E8,q,o,q,q,new A.vf(!0,D.kw,D.kw,D.kw,new A.po(16,q,new A.ql(!0,new A.b7W(p),26,q),!0)))),this.d,q)
return this.e?r:B.bj(q,r,q,q,C.D,q,q,3)}}
A.anR.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aO0
w=new B.ac(l,new A.bh8(),B.ag(l).i("ac<1,F>")).jJ(0,new A.bh9())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.p),m,m,m)
p=$.dk()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hW(C.aj,C.f,C.i,C.j,m,C.aR,m,0,B.b([new B.jq(1,C.dk,B.a7(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.al(r.f),m,m,m,m,B.y(C.o,12,C.aG),m,m,m)],v),C.z,C.f,C.i),m),C.at,B.i(p.al(o),m,m,m,m,B.bA(C.h,16,C.p),m,m,m)],v),m),C.cY,new B.DA(new B.d5(n,n,n,n),C.by,B.zt(C.a4,m,8,C.d.bo(o/w,0,1),D.Bc),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.M(r)===B.M(q)&&B.a0n(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bj(m,B.a7(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.ak4.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.at(new A.Cm("Aktive Kunden",""+s,u),1)
w=B.at(new A.Cm("K\xe4ufe",""+t.a,u),1)
v=$.dk()
return B.bj(u,B.ah(B.b([s,w,B.at(new A.Cm("\xd8-Warenkorb",v.al(t.d),u),1),B.at(new A.Cm("Umsatz/Kunde",v.al(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.Cm.prototype={
p(d){var w=null
return B.a7(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.o,10,C.p).fw(0.6),w,w,w),C.b6,B.i(this.d,w,w,w,w,B.bA(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.atI.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ac(q,new A.bru(),B.ag(q).i("ac<1,F>")).jJ(0,new A.brv()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hW(C.aj,C.f,C.i,C.j,r,C.aR,r,0,B.b([new B.jq(1,C.dk,B.i(u.b,r,1,C.af,r,B.y(C.h,13,C.p),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.o,12,C.E),r,r,r),B.i($.dk().al(t),r,r,r,r,B.y(C.h,13,C.p),r,r,r)],o),r),C.aN,new B.DA(new B.d5(s,s,s,s),C.by,B.zt(C.a4,r,6,C.d.bo(t/p,0,1),D.Bc),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.M(u)===B.M(s)&&B.a0n(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.I)
C.b.K(n,t)}return B.bj(r,B.a7(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.x1.prototype={
p(d){var w=null
return B.bj(w,B.i(this.c,w,w,w,w,B.y(C.o,13,C.l),w,w,w),C.a7,w,C.D,w,w,3)}}
A.aif.prototype={
dg(d,e){return B.dd(e.aj($.bxP(),x.fM),new A.b5h(this,d,e),new A.b5i(),new A.b5j(),!1,!0,!1,x.h,x.l)}}
A.Bk.prototype={
U(){return new A.U9()},
aYt(){return this.d.$0()}}
A.U9.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.ba(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.ek(J.am(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pI[t].a
if(v)r=""
else{r=B.b_(J.a2(w,s))
if(r==null)r=null
r=C.d.ai(r==null?0:r,2)
r=B.b6(r,".",",")}u.m(0,s,new B.bK(new B.cX(r,C.bL,C.aV),$.al()))}q.e!==$&&B.aY()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ci(v,v.r,v.e,B.l(v).i("ci<2>"))
while(v.u()){w=v.d
w.T$=$.al()
w.S$=0}this.ao()},
rv(d){var w=this.e
w===$&&B.a()
w=C.c.aL(w.h(0,d).a.a)
w=B.b6(w,".","")
w=B.it(B.b6(w,",","."))
return w==null?0:w},
a4e(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pI[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ai(u,2)
s=B.b6(s,".",",")
t.kt(0,t.a.y0(C.aV,C.bL,s))}}this.J(new A.b55())},
aFa(){this.a4e(D.aqO)
this.c.P(x.q).f.be(D.aBl)},
I9(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I9=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b7(a1)
for(e=0;e<8;++e)a2.E(0,D.pI[e].a)
q=a2
t=4
w=7
return B.k($.aGf.cf().zi(B.b(["csv","txt"],x.s),C.xQ,!0),$async$I9)
case 7:p=a5
a2=p
o=a2==null?null:J.Kv(a2.a).c
if(o==null){w=1
break}n=C.aH.adM(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C0.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.ax9(l,B.bP("[;,\t]",!0,!1,!1))
if(J.cd(k)<2)continue
j=C.c.aL(J.a2(k,0)).toLowerCase()
i=J.CQ(q,j)?j:D.at1.h(0,j)
if(i==null)continue
d=C.c.aL(C.b.n4(J.bSi(k,1)))
d=B.b6(d,"\u20ac","")
d=B.b6(d," ","")
d=B.b6(d,".","")
h=B.b6(d,",",".")
g=B.it(h)
if(g!=null)J.fs(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.aAZ)
w=1
break}r.a4e(m)
r.c.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I9,v)},
Ik(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ik=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b56(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b00("upsert_finance_balance",B.a6(["p_as_of",C.c.a1(n.el(),0,10),"p_cash_and_bank",q.rv("cash_and_bank"),"p_receivables",q.rv("receivables"),"p_inventory_value",q.rv("inventory_value"),"p_other_current_assets",q.rv("other_current_assets"),"p_fixed_assets",q.rv("fixed_assets"),"p_current_liabilities",q.rv("current_liabilities"),"p_long_term_liabilities",q.rv("long_term_liabilities"),"p_equity",q.rv("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ik)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYt()
o=q.c
o.toString
B.bb(o,!1).eU()
q.c.P(x.q).f.be(D.aB2)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b57(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ik,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bA(C.h,18,C.p),r,r,r),p=s.f?r:new A.b59(s,d),o=s.d
o===$&&B.a()
p=B.fR(D.acS,B.i("Stichtag: "+C.c.a1(o.el(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.at(B.fR(D.ae1,D.aH7,o?r:s.gaEc(),r),1)
v=x.p
w=B.b([p,C.I,B.ah(B.b([w,C.at,B.at(B.fR(D.adO,D.aGX,o?r:s.gaF9(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pI[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f6(r,C.aX,!1,r,!0,C.r,r,B.fj(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.iB,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.av,r,C.a5,r,r,r,r),C.I],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.o,11,C.l),r,r,r))
p=B.bN(B.f5(B.a7(w,C.aa,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.dM(C.cZ,r,r,o?r:new A.b5a(d),r,r)
o=o?r:s.gaEU()
t=B.dF(C.m,C.h,r,r,r,r,r)
return B.lI(B.b([w,B.dY(s.f?F.YS:C.eB,o,t)],v),C.n,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.M(this)===B.M(e)&&B.a0n(this.gbs(),e.gbs())
else w=!0
return w},
gv(d){return(B.f3(B.M(this))^B.bNp(this.gbs()))>>>0},
j(d){B.bGz()
return B.M(this).j(0)}}
A.Lj.prototype={
U(){return new A.Ua(B.A(x.S,x.J),new A.ayZ(B.A(x.x,x.T)),null,null)}}
A.Ua.prototype={
p(d){var w,v=this,u=v.a27(),t=v.CW
t.toString
t=v.a28(t.au(0,v.gfs().gq(0)))
w=v.a28(u)
v.a.toString
return new A.Le(new A.a1S(t,w,null),u,null)},
a28(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayW(s.c,s.d,!1,r,s.a))}return d.aQy(w)},
a27(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UZ(t.ch)
if(r)s=w.a
r=t.y
t=t.aRs(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQz(A.byg(!1,!0,!0,v.d,v.c,u.gasX(),v.f,v.e))}return t},
asY(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gage()||e==null||e.a==null){w=v.cy
v.J(w.gaPX(w))
return}v.J(new A.b5m(v,e))},
lv(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a27(),new A.b5n(w)))}}
A.o1.prototype={
VC(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayP(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRs(d,e){return this.VC(null,null,d,e)},
aQz(d){return this.VC(null,d,null,null)},
aQy(d){return this.VC(d,null,null,null)},
Xx(d,e,f){var w,v,u,t=A.kE(d.ch,e.ch,f,A.c5R(),x.dB),s=B.af(d.CW,e.CW,f),r=A.bGH(d.d,e.d,f),q=A.bIE(d.e,e.e,f),p=A.bGF(d.c,e.c,f),o=e.a
o=A.a6a(B.a28(d.a.b,o.b,f),o.a)
w=B.af(d.y,e.y,f)
v=B.af(d.x,e.x,f)
u=B.af(d.z,e.z,f)
r=A.ayP(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bGB(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayO.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.ayX(),B.ag(v).i("ac<1,F>")).jJ(0,new A.ayY())
v=v.length
return w+(v-1)*this.d},
gbs(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbs(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mP.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1P.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1U.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aeO.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1V.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dc.prototype={
gbs(){return[this.a,this.b,C.bu,C.x,null]}}
A.Lk.prototype={}
A.a1W.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xS.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xx(v,w,d)}}
A.aib.prototype={}
A.aii.prototype={}
A.aij.prototype={}
A.ail.prototype={}
A.aim.prototype={}
A.ain.prototype={}
A.aio.prototype={}
A.aip.prototype={}
A.aiq.prototype={}
A.ayZ.prototype={
UZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uP(0,0,!1)
v=new A.zw(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uP(t,u,!0)}w=null
try{w=C.b.oY(d,new A.az_())}catch(s){return new A.uP(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uP(q,r,!1)
u.m(0,v,j)
return j}}
A.uP.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aik.prototype={}
A.az0.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0f(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acJ(t,A.byf(w,t.a),u)
l.y=u
l.aSO(e,u,f)
l.amo(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSX(d,e,m,t,r,s,n,o,f)}}},
acJ(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dW("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iV(p,B.ag(p).i("iV<1>")).aB(0,new A.az1(t,q,r,s))
w.push(new A.a6T(q))}return w},
aSO(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
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
if(a1!==a2){if(a1>a2){a3=b2.dI(Math.max(t,a2),b4,b7)
a4=B.QB(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.QB(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.K:f).gq(0)
k.seX(null)
a6=b2.f.e_()
v.drawRRect(B.lD(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.bd(v.save())
v.clipRect(B.dJ(b1),$.mK()[1],!0)
a6=b2.f.e_()
v.drawRRect(B.lD(a4),a6)
a6.delete()
v.restore()
b2.aSV(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.hm(a4))
n=A.aC8(new B.cm(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mU(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSX(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B0(a5,a5,a5,a5,B.cS(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lF().a_i(a8,a7.b),a7.a),C.bu,C.x,a5,b6.c,C.bD)
w.agy(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbT(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dI(s,a6,b6)
q=b4.a
p=a4.dI(q,a6,b6)
o=b1.b
n=u+o.gew()
m=v+4+(o.gd3(0)+o.gd6(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aJB)j=v===D.Zx&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_j(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Gc(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lF().KB(new B.H(v,t),d).b
s=$.lF()
q=w.b
p=q.c
q=q.a.c
a0=s.KB(new B.H(p,q.gbT(q)),d)
q=g.gc8()
p=w.b.c
s=g.gaiL()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.We(d,new A.az2(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSV(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geo(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a2
s=w?new B.aW(i.x,i.y):C.a2
r=w?C.a2:new B.aW(i.e,i.f)
w=w?C.a2:new B.aW(i.r,i.w)
q=B.QB(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.QB(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bAg(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WT(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acJ(b2,A.byf(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1W(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a6T.prototype={}
A.a1S.prototype={
bn(d){var w,v=this.e,u=B.bz(d,null,x.w).w.gcP(),t=new A.az0()
t.a1r()
$.an()
w=B.aX()
w.b=C.bj
t.f=w
w=B.aX()
w.b=C.b_
t.r=w
w=B.aX()
w.b=C.bj
w.r=C.n.gq(0)
t.w=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.x=w
t=new A.abY(this.d,v,u,t,d,C.b8,new B.br(),B.aK(x.j))
t.bl()
t.Za(v.cy)
t.afI()
return t},
bx(d,e){e.sij(0,this.d)
e.sYV(this.e)
e.scP(B.bz(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.abY.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYV(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a1_(d.cy)
w.bc()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bd(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2m(t,v),new A.w_(u.aC,u.i6,u.d0,x.Q))
s.restore()},
a_b(d){var w=this,v=w.gC(0)
return new A.Lk(w.fX.WT(d,v,new A.w_(w.aC,w.i6,w.d0,x.Q)))}}
A.a1I.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Db.prototype={
L(){return"AxisSide."+this.b}}
A.tK.prototype={}
A.ql.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adn.prototype={
gbs(){return[!1,0,0,0]}}
A.po.prototype={
gbs(){return[this.b,this.a,this.c,!0]}}
A.vf.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eB.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eB))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yG.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pM.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeQ.prototype={
gbs(){return[this.a,this.b]}}
A.QF.prototype={
gbs(){return[this.a,this.b]}}
A.n8.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nw.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ln.prototype={
gbs(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a73.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afd.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Ng.prototype={
gbs(){return[this.a,this.b,!0]}}
A.ve.prototype={}
A.Np.prototype={
aeb(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bj
d.iR(f,this.b,w)},
gbs(){return[this.a,this.b,this.c,0]}}
A.ai6.prototype={}
A.aia.prototype={}
A.alq.prototype={}
A.alM.prototype={}
A.alN.prototype={}
A.alP.prototype={}
A.alQ.prototype={}
A.amF.prototype={}
A.amE.prototype={}
A.amG.prototype={}
A.aqf.prototype={}
A.as7.prototype={}
A.as8.prototype={}
A.atM.prototype={}
A.aut.prototype={}
A.aus.prototype={}
A.auu.prototype={}
A.ayD.prototype={
MN(d,e,f,g,h,i){return new B.ii(this.aWA(d,e,f,g,h,i),x.g4)},
aWz(d,e,f,g){return this.MN(d,e,f,!0,g,!0)},
aWA(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MN(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lF().ajV(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h2(u-s,v)*v===u
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
A.Ld.prototype={
a1r(){var w,v=this
$.an()
w=B.aX()
w.b=C.b_
v.a=w
w=B.aX()
w.b=C.bj
v.b=w
w=B.aX()
w.b=C.bj
v.e=w
w=B.aX()
w.b=C.b_
v.c=w
v.d=B.aX()},
ic(d,e,f){var w=this
w.a0g(d,e,f)
w.aSK(e,f)
w.aSU(e,f)
w.aST(e,f)},
aST(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lF().ON(w.a,a1.r-a1.f)
u=$.bxl().MN(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lc(n,m)
if(j!=null){p.r=C.F.gq(0)
p.seX(j.mM(0,i))}else{if(k==null)k=C.K
p.r=k.gq(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c4(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.DI(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lF().ON(w.b,a1.y-a1.x)
u=$.bxl().MN(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.lc(n,m)
if(k!=null){q.r=C.F.gq(0)
q.seX(k.mM(0,i))}else{if(p==null)p=C.K
q.r=p.gq(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c4(q.r)
q.r=B.aH(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.DI(n,m,d.a,f.d)}},
aSK(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hc(new B.I(0,0,0+w.a,0+w.b),this.b)},
aSU(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.lc(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.F.gq(0)
r.seX(p.mM(0,s))}else{r.r=(q==null?C.K:q).gq(0)
r.seX(null)}o=n.e.e_()
w.drawRect(B.dJ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.lc(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.F.gq(0)
v.seX(q.mM(0,s))}else{v.r=(r==null?C.K:r).gq(0)
v.seX(null)}o=n.e.e_()
j.drawRect(B.dJ(s),o)
o.delete()}},
aSS(d,e,f){var w,v
this.a0g(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aec(d,e,f,w)
if(v.b.length!==0)this.aSZ(d,e,f,w)},
aec(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.lc(m,l)
if(j!=null){n.r=C.F.gq(0)
n.seX(j.mM(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c4(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.DI(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=C.d.an(o,n.gbT(n).eI(0,2))
J.bd(r.save())
r.translate(h,g)
n=n.gNJ().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eI(0,2)
o=C.d.an(o,n.gbT(n).eI(0,2))
k=f.d
k===$&&B.a()
s.aed(0,n,new B.r(h,o),k)}}},
aSZ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.lc(m,l)
if(j!=null){n.r=C.F.gq(0)
n.seX(j.mM(0,i))}else{if(k==null)k=C.K
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c4(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.DI(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.bd(r.save())
r.translate(f,e)
n=n.gNJ().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eI(0,2)
g=n.gbT(n).ae(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.aed(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_j(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Le.prototype={
galJ(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galK(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galL(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galH(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am4(d){var w,v=this,u=null,t=v.d,s=A.bz2(t.d),r=t.a
r=r.a&&A.bST(r.b)?r.b:u
w=B.b([B.aO(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayF(w)
if(v.galJ())C.b.hA(w,s.$1(!0),new A.AL(D.Bj,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galL())C.b.hA(w,s.$1(!0),new A.AL(D.mH,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galK())C.b.hA(w,s.$1(!0),new A.AL(D.Bk,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galH())C.b.hA(w,s.$1(!0),new A.AL(D.dQ,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.ju(new A.ayE(this))}}
A.S6.prototype={
U(){return new A.YU(new B.bl(null,x.eF))}}
A.YU.prototype={
ays(){switch(this.a.c.a){case 0:return C.eg
case 1:return C.fd
case 2:return C.d1
case 3:return C.dO}},
ayY(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
ayu(d){this.a.toString
return},
aq(){this.aJ()
$.cC.x1$.push(this.ga4H())},
bb(d){this.bE(d)
$.cC.x1$.push(this.ga4H())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayY()
return B.B9(B.b2F(0,B.aO(v.ays(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ado.prototype={
bn(d){return A.bSL(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.W!==w){e.W=w
e.a7()}}}
A.a1J.prototype={
hn(d){if(!(d.b instanceof B.hx))d.b=new B.hx(null,null,C.v)},
hZ(d){if(this.B===C.aj)return this.ya(d)
return this.adQ(d)},
aLy(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9y(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dF(d){var w=this.a9x(d,B.hL())
switch(this.B.a){case 0:return d.c4(new B.H(w.a,w.b))
case 1:return d.c4(new B.H(w.b,w.a))}},
a9x(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aj?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ho(u,null)
break
case 1:q=B.ho(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9y(p)
t=Math.max(t,o.aLy(p))
m=r.aG$}return new A.bgA(n<1/0?n:s,t)},
cD(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9x(o,B.mJ()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c4(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c4(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.W[u]
r=w.fy
q=s.b-p.a9y(r==null?B.S(B.X("RenderBox was not laid out: "+B.M(w).j(0)+"#"+B.c9(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eg(d,e){return this.yb(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v9(d,e)},
l(){this.a4.sbh(0,null)
this.ap_()}}
A.bgA.prototype={}
A.ayG.prototype={}
A.jZ.prototype={
gbs(){return[this.a,this.b]}}
A.o0.prototype={}
A.ai7.prototype={}
A.ai8.prototype={
aO(d){var w,v,u
this.fq(d)
w=this.ah$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fi(0)
w=this.ah$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ai9.prototype={}
A.U7.prototype={
l(){var w,v,u
for(w=this.Wr$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AL.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d1
case 1:return C.dO
case 2:return C.eg
case 3:return C.fd}},
gb0c(){var w=this.d,v=A.bz2(w.d),u=A.bGE(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ae(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ae(0,new B.ai(u.a,0,u.c,0))}},
gaiz(){var w=this.d,v=A.bGE(w.a),u=A.bz2(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gew()+v.gew()}},
aXg(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lF().ON(d,f-e)
w=p.c
v=w!==D.mH
if((!v||w===D.dQ)&&p.d instanceof A.o1){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.byf(u,d)
w=new B.iV(t,B.ag(t).i("iV<1>"))
s=w.giE(w).f2(0,new A.b_C(u),x.W).fZ(0)}else{r=$.bxl()
w=!v||w===D.dQ
v=p.d
q=r.aWz(w?v.w:v.z,o,f,e)
v=B.oB(q,new A.b_D(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ag(s).i("ac<1,o0>")
w=B.Q(new B.ac(s,new A.b_E(p,e,f,o,g,d),w),w.i("as.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aO(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mH
u=!v
t=!u||w===D.dQ
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dQ?C.G:C.aj
q=B.b([],x.p)
if(w===D.Bj||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dQ?r:j.goD().c.c
p=!u||w===D.dQ?j.goD().c.c:r
o=j.gb0c()
n=!u||w===D.dQ?C.aj:C.G
j.gaiz()
m=j.gaiz()
l=!u||w===D.dQ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dQ?k.r:k.y
q.push(B.aO(i,A.c_7(new A.ayG(),n,j.aXg(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bk||w===D.dQ)j.goD()
return new B.e8(t,i,i,B.bVB(q,C.j,s,i,C.f,C.H,0,i,i,C.aR),i)}}
A.a1Y.prototype={
gbs(){return[this.a,this.b]}}
A.a69.prototype={
gbs(){return[this.a,this.b]}}
A.Nw.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6b.prototype={
gac3(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.azb.prototype={}
A.aFB.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ait.prototype={}
A.alJ.prototype={}
A.alK.prototype={}
A.alR.prototype={}
A.Ln.prototype={
ic(d,e,f){}}
A.w_.prototype={}
A.hw.prototype={
gdN(){return null},
gage(){var w,v=this
B.bC()
B.bC()
B.bC()
w=v instanceof A.Nv
if(w)return!0
return!(v instanceof A.Ns)&&!(v instanceof A.Nr)&&!(v instanceof A.Nt)&&!(v instanceof A.Nq)&&!w&&!(v instanceof A.Nu)}}
A.a6f.prototype={
gdN(){return this.a.b}}
A.a6g.prototype={
gdN(){return this.a.b}}
A.a6h.prototype={
gdN(){return this.a.b}}
A.Nr.prototype={}
A.Ns.prototype={}
A.a6k.prototype={
gdN(){return this.a.b}}
A.Nu.prototype={}
A.Nv.prototype={
gdN(){return this.a.b}}
A.a6e.prototype={
gdN(){return this.a.b}}
A.a6d.prototype={
gdN(){return this.a.b}}
A.Nq.prototype={
gdN(){return this.a.b}}
A.a6i.prototype={
gdN(){return this.a.gdN()}}
A.a6j.prototype={
gdN(){return this.a.gdN()}}
A.Nt.prototype={
gdN(){return this.a.gdN()}}
A.Gt.prototype={
Za(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afI(){var w=this,v=null,u=w.ak=B.bzX(v,v)
u.ay=new A.aVP(w)
u.ch=new A.aVQ(w)
u.CW=new A.aVR(w)
u.cy=new A.aVS(w)
u.cx=new A.aVT(w)
u=w.aF=B.Hh(v,-1,v)
u.B=new A.aVU(w)
u.Z=new A.aVV(w)
u.V=new A.aVW(w)
u=w.bD=B.a8a(v,w.a4,v)
u.p3=new A.aVX(w)
u.p4=new A.aVY(w)
u.RG=new A.aVZ(w)},
cD(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dF(d){return new B.H(d.b,d.d)},
kJ(d){return!0},
mW(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.oB(d)
w=v.aF
w===$&&B.a()
w.oB(d)
w=v.ak
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l8(new A.a6j(d))},
gNg(d){return new A.aW_(this)},
gNi(d){return new A.aW0(this)},
l8(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_b(w):null
u.V.$2(d,v)
u.Z=C.b8},
gL3(d){return this.Z},
gFF(){var w=this.ar
w===$&&B.a()
return w},
aO(d){this.fq(d)
this.ar=!0},
aE(d){this.ar=!1
this.fi(0)},
$ijx:1}
A.OR.prototype={
U(){return new A.WD(B.b([],x.r),B.A(x.S,x.J),new A.aLR(B.A(x.y,x.dj)),null,null)}}
A.WD.prototype={
p(d){var w,v=this,u=v.a4J(),t=v.CW
t.toString
t=v.abA(t.au(0,v.gfs().gq(0)))
w=v.abA(u)
v.a.toString
return new A.Le(new A.a81(t,w,null),u,null)},
abA(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ag(w).i("ac<1,ec>")
w=B.Q(new B.ac(w,new A.bgG(this,d),v),v.i("as.E"))
return d.aRp(w,this.cy)},
a4J(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UZ(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRE(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aR3(new A.F0(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazL(),t.c,t.d))}return r},
azM(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gage())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bgE(v))
return}v.J(new A.bgF(v,e))},
lv(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4J(),new A.bgH(w)))}}
A.q_.prototype={
Xx(d,e,f){var w,v,u,t,s,r,q=B.af(d.f,e.f,f),p=B.af(d.r,e.r,f),o=B.af(d.w,e.w,f),n=B.af(d.x,e.x,f),m=B.af(d.y,e.y,f),l=B.af(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a6a(B.a28(d.a.b,j.b,f),j.a)
w=A.bGB(d.at,e.at,f)
v=A.bGF(d.c,e.c,f)
u=A.bGH(d.d,e.d,f)
t=A.bIE(d.e,e.e,f)
s=A.kE(d.ch,e.ch,f,A.c7X(),x.cz)
s.toString
r=A.kE(d.CW,e.CW,f,A.c7W(),x.bO)
r.toString
u=A.bzz(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VD(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bzz(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRE(d,e,f,g){return this.VD(null,null,d,e,f,g,null)},
aR3(d){var w=null
return this.VD(w,d,w,w,w,w,w)},
aRp(d,e){var w=null
return this.VD(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
arF(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oY(n.a,new A.aLQ())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fQ))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aY()
n.b=q
r.toString
n.c!==$&&B.aY()
n.c=r
s.toString
n.d!==$&&B.aY()
n.d=s
t.toString
n.e!==$&&B.aY()
n.e=t}},
adu(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLP(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRa(d){return this.adu(d,null)},
aRc(d){return this.adu(null,d)},
gbs(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OS.prototype={
gbs(){return[this.a]}}
A.a1R.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mQ.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Li.prototype={
gbs(){return[!1,this.b,this.c,!0]}}
A.yF.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aLF.prototype={
L(){return"LabelDirection."+this.b}}
A.a6c.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.F0.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a82.prototype={
gbs(){return[4,C.fO,16,D.xN,0,120,A.c7Z(),!1,!1,!1,0,C.J,A.c7Y()]}}
A.nb.prototype={
gbs(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qu.prototype={}
A.rI.prototype={
gbs(){return[this.a,this.b,C.bu,C.x,null]}}
A.tL.prototype={
gbs(){return[this.a,this.b]}}
A.GV.prototype={
gbs(){return[this.a]}}
A.OT.prototype={}
A.zr.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xx(v,w,d)}}
A.aig.prototype={}
A.aih.prototype={}
A.aiu.prototype={}
A.alL.prototype={}
A.alO.prototype={}
A.ant.prototype={}
A.anu.prototype={}
A.anv.prototype={}
A.anx.prototype={}
A.any.prototype={}
A.anz.prototype={}
A.anA.prototype={}
A.as6.prototype={}
A.atL.prototype={}
A.aLR.prototype={
UZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yn
u=new A.zw(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zs(s,r,q,t,!0)}w=null
try{w=C.b.oY(d,new A.aLS())}catch(p){return D.yn}v=null
try{v=C.b.oY(w.a,new A.aLT())}catch(p){return D.yn}o=v.a
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
if(f<m)m=f}e=new A.zs(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zs.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.anw.prototype={}
A.aLU.prototype={
ic(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac3(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iM(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aQ3(new B.I(0,0,u,v))}d.a0f(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aSQ(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSM(a3,q,a4)
d.aSR(a3,q,a4)
d.amn(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dW("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vL(q,i,j,k))}}d.aSY(a3,s,a4)
if(w.gac3(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSW(a2,a3,v,f,new A.GV(g),a4)}},
aSM(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bz1(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.ZL(o,e,u,f)
s=p.ajN(o,e,t,u,f)
r=p.ZN(o,e,t,u,f,!0)
q=p.ajM(o,e,t,u,f)
p.aSP(d,s,p.ZK(o,e,t,u,f,!0),f,e)
p.aSJ(d,q,r,f,e)
p.aSN(d,t,e)
p.aSL(d,t,e,f)}},
aSQ(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bz1(a5.a),a8=A.bz1(a6.a)
if(a7.length!==a8.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bU.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ag(n).i("cB<1>")
l=B.Q(new B.cB(n,m),m.i("as.E"))
k=a2.ZL(a3,a5,o,b2)
j=a2.ZM(a3,a6.aRc(l),l,b2,k)
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
m=a2.dI(h,a3,b2)
e=a2.fd(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.F.gq(0)
a0.seX(v.mM(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.K:w).gq(0)
a0.seX(null)}$.an()
a1=new B.mT(C.dD,C.bj,C.e9,C.ez,C.dY).e_()
n=B.dJ(new B.I(0,0,t,s))
m=$.bU.b
if(m===$.bU)B.S(B.vJ(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e_()
n=j.e
a4.drawPath((n==null?j.e=new B.mU(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSR(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZR(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fQ)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aeb(s,q,new B.r(p,o))}}},
aSY(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fT(b3,new A.aLX())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.ZR(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rH(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lB(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lB(q.$2(m,k))))
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
b0=B.lc(a3,a5)
if(a6!=null){f.r=C.F.gq(0)
f.seX(a6.mM(0,b0))}else{if(a4==null)a4=C.K
f.r=a4.gq(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c4(f.r)
f.r=B.aH(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.DI(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rH(d.a))
f.aeb(t,j,new B.r(h,g))}}},
ZM(d,e,f,g,h){var w=this.ajO(d,e,f,g,h)
return w},
ZL(d,e,f,g){return this.ZM(d,e,f,g,null)},
ajO(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cm($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.fe(d,a0))
if(e===1)g.az(new B.ct(d,a0))}else g.az(new B.ct(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fd(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fd(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Ml(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZN(d,e,f,g,h,i){var w=this,v=B.Na(f),u=J.Y(g),t=w.fd(u.h(g,u.gt(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fd(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fd(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pw())
return v},
ajN(d,e,f,g,h){return this.ZN(d,e,f,g,h,!1)},
ZK(d,e,f,g,h,i){var w=this,v=B.Na(f),u=J.Y(g),t=w.fd(u.h(g,u.gt(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fd(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fd(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pw())
return v},
ajM(d,e,f,g,h){return this.ZK(d,e,f,g,h,!1)},
aSP(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fd(t.a,w,g)
s=r.r
s===$&&B.a()
A.bzW(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.i0(e,r.r)},
aSJ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.bzW(s,q.b,q.c,new B.I(v,0,u,t))
d.a.i0(e,r.r)},
aSN(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Nc(B.Na(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ix:C.e9
u.e=C.ez
u.r=v.gq(0)
u.seX(null)
u.c=f.x
u.r=v.gq(0)
$.lF()
u.z=new B.zB(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aC8(e,f.cy).e9(w.b),this.f)},
aSL(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ix:C.e9
q.e=C.ez
q=f.b
q===$&&B.a()
q=s.fd(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fd(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.bzW(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bY0(t)
d.a.i0(A.aC8(e,f.cy),s.f)},
aSW(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bMT(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dW("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lF().a_i(b4,u.b)
s=u.a
r=w.k(0,C.j_)?new B.kx(1):w
q=new B.tH(new B.fp(s,a8,a8,C.b8,a8,a8,a8,a8,a8,a8,t),C.bu,C.x,r,a8,a8,a8,a8,C.bD,a8)
q.agy(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.fO.gew()
k=o+(w-1)*4+(C.fO.gd3(0)+C.fO.gd6(0))
j=t-k-16
i=a7.a_j(b3,l,D.xN,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Gc(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bMS(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lF().KB(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lF().KB(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.F.gq(0)
s.c=0}b5.We(0,new A.aLV(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c_K(q.r,q.w)
A:{if(D.Eg===a5){a6=a3
break A}if(D.Eh===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.We(0,new A.aLW(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZR(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
WT(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ake(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fT(t,new A.aLY())
return t.length===0?null:t},
ake(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fQ))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hA(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qu(s,f,g,C.b.hz(w,v),v.a,v.b)}else return null}}
A.vL.prototype={}
A.a81.prototype={
bn(d){var w,v=this.e,u=B.bz(d,null,x.w).w.gcP(),t=new A.aLU()
t.a1r()
$.an()
w=B.aX()
w.b=C.b_
t.f=w
w=B.aX()
w.b=C.bj
t.r=w
w=B.aX()
w.b=C.b_
t.w=w
w=B.aX()
w.b=C.bj
w.r=C.K.gq(0)
w.a=D.a_P
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.F.gq(0)
t.y=w
w=B.aX()
w.b=C.bj
w.r=C.n.gq(0)
t.z=w
w=B.aX()
w.b=C.b_
w.r=C.K.gq(0)
w.c=1
t.Q=w
t=new A.aca(this.d,v,u,t,d,C.b8,new B.br(),B.aK(x.j))
t.bl()
t.Za(v.cx)
t.afI()
return t},
bx(d,e){e.sij(0,this.d)
e.sYV(this.e)
e.scP(B.bz(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.aca.prototype={
sij(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYV(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a1_(d.cx)
w.bc()},
scP(d){if(this.d0.k(0,d))return
this.d0=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bd(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a2m(t,v),new A.w_(u.aC,u.i6,u.d0,x.C))
s.restore()},
a_b(d){var w=this,v=w.gC(0)
return new A.OT(w.fX.WT(d,v,new A.w_(w.aC,w.i6,w.d0,x.C)))}}
A.NV.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2m.prototype={
aQ3(d){this.a.a.clipRect(B.dJ(d),$.mK()[1],!0)
return null},
aej(d,e){d.aM(this.a,e)},
We(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bd(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lF()
s.YT(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DI(d,e,f,g){var w=new B.cm($.an().r,C.ah,null,null,B.b([],x.v))
w.az(new B.fe(d.a,d.b))
w.az(new B.ct(e.a,e.b))
this.a.i0(A.aC8(w,g),f)}}
A.zw.prototype={
gbs(){return[this.a]}}
A.anH.prototype={}
A.a2w.prototype={}
A.b36.prototype={
KB(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXQ(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d5(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXR(d,e){var w,v
if(d==null)return D.a0_
w=d.b
v=e/2
return d.aRf(w>v?v:w)},
ON(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_Y(w)},
b_Y(d){if(d<1)return this.aK1(d)
return this.a8A(d)},
aK1(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8A(d*q)/q},
a8A(d){var w,v=C.e.j(C.d.Y(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aN(d)/10:d
if(w>=7.6)return 10*C.d.Y(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.Y(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.Y(Math.pow(10,v))
else return C.d.Y(Math.pow(10,v))},
ak3(d){if(d>=1)return 1
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
a_i(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j4
w=e.a?u.w.c6(e):e
v=B.b2(d,C.vH)
v=v==null?null:v.ay
return v===!0?w.c6(C.mp):w},
ajV(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qw)","C(pL)","C(eB)","~(v,fL)","F(ec,v)","F(F,pL)","vc(z)","F(F,qw)","bQ(F,tK)","pM(F)","R<~>()","v(qu,qu)","F(vP)","IN(oj)","qw(@)","vP(@)","yh(z)","wL(@)","In(B,bE)","JH(om)","II(ok)","CV(@)","ec(F)","vd(dH<vd>)","aj(F,tK)","Eo(dH<aGs>)","lW(wB<lW>)","pL(@)","F(wL)","x1(B,bE)","Bk(z)","~()","R<om>(c3<om>)","~(hw,Lk?)","xS(@)","F(ip)","C(fL)","~(v,ip)","~(@)","jZ(o0)","c(o0)","jZ(bH<v,F>)","jZ(F)","o0(jZ)","~(hw,OT?)","ec(ec)","R<oj>(c3<oj>)","zr(@)","R<ok>(c3<ok>)","tL(v)","ve(eB,F,ec,v)","rI(nb)","C(ec)","v(v,v,F)","F(fL)","~(BK)","yD(es<B?>)","fL(fL,fL,F)","ip(ip,ip,F)","mP(mP,mP,F)","Dc?(fL,v,ip,v)","E(fL)","c(F,tK)","eB(eB,eB,F)","C(F)","n8(n8,n8,F)","nw(nw,nw,F)","kW(kW,kW,F)","ln(ln,ln,F)","f(kW)","f(ln)","ec(ec,ec,F)","mQ(mQ,mQ,F)","ve(eB,F,ec,v{size:F?})","C(eB,ec)","F(r,r)","u<tL>(ec,u<v>)","x5(B,bE)","u<rI>(u<nb>)","E(nb)","v(vL,vL)"])
A.aGn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l=B.cW(x.f.a(d),x.N,x.z),k=l.h(0,"id")
k=J.am(k==null?"":k)
w=l.h(0,"booking_date")
w=B.ek(J.am(w==null?"":w))
if(w==null)w=B.bR(1970,1,1,0,0,0,0)
v=l.h(0,"account_code")
v=J.am(v==null?"":v)
u=l.h(0,"account_name")
u=J.am(u==null?"":u)
t=l.h(0,"direction")
t=J.am(t==null?"expense":t)
s=l.h(0,"description")
s=s==null?null:J.am(s)
r=A.bud(l.h(0,"amount_net"))
q=A.bud(l.h(0,"amount_tax"))
p=A.bud(l.h(0,"amount_gross"))
o=A.bud(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.am(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.am(m)
l=l.h(0,"source_account_code")
return new A.pL(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.am(l))},
$S:z+27}
A.aGo.prototype={
$1(d){var w=B.cW(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qw(J.am(v==null?"":v),A.pf(w.h(0,"revenue_net")),A.pf(w.h(0,"expense_net")),A.pf(w.h(0,"result_net")))},
$S:z+14}
A.aGp.prototype={
$1(d){var w,v,u,t=B.cW(x.f.a(d),x.N,x.z),s=B.ae(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ae(t.h(0,"code"))
v=A.pf(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.d.Y(u)
if(u==null)u=0
return new A.vP(s,r,w,v,u,A.pf(t.h(0,"avg_basket")))},
$S:z+15}
A.aGq.prototype={
$1(d){var w,v=B.cW(x.f.a(d),x.N,x.z),u=B.ae(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.d.Y(w)
if(w==null)w=0
return new A.wL(u,t,w,A.pf(v.h(0,"gross")))},
$S:z+17}
A.aGJ.prototype={
$1(d){var w,v,u,t
x.b.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CV(v,u,J.am(t==null?"expense":t),A.ut(w.h(d,"net")),A.ut(w.h(d,"tax")),A.ut(w.h(d,"gross")))},
$S:z+21}
A.bv2.prototype={
$1(d){return new A.vd(d.aj($.bX(),x.A))},
$S:z+23}
A.bv3.prototype={
$1(d){return new A.Eo(d.aj($.bRz(),x.D))},
$S:z+25}
A.bwV.prototype={
$1(d){return E.aGr()},
$S:z+26}
A.bv4.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).G7(w)},
$S:z+32}
A.bv0.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).FT(w)},
$S:z+46}
A.bv1.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).G2(w)},
$S:z+48}
A.bv_.prototype={
$1(d){return this.ajD(d)},
ajD(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aj($.bX(),x.A).fE("finance_balance_kpis",t),$async$$1)
case 3:s=r.cW(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:335}
A.aGm.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.a0R(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGl.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.a0R(),x.a).LG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bd7.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbU()
r=$.bxQ()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bd2.prototype={
$1(d){var w=this.a
return w.J(new A.bd1(w,d))},
$S:z+55}
A.bd1.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bd3.prototype={
$0(){var w=this.a
return w.J(new A.bd0(w))},
$S:0}
A.bd0.prototype={
$0(){return this.a.x=null},
$S:0}
A.bd6.prototype={
$0(){return D.To},
$S:88}
A.bd5.prototype={
$2(d,e){return new A.x5("Buchungen konnten nicht geladen werden: "+B.j(d),C.a6,D.Er,null)},
$S:z+77}
A.bd4.prototype={
$1(d){return new A.IN(d,this.a.asG(d.b),null)},
$S:z+13}
A.bd_.prototype={
$1(d){var w=this.a
if(w.gSn()!=null&&d.c!==w.gSn())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"}},
$S:z+1}
A.bcX.prototype={
$0(){return this.a.e.$1(D.AW)},
$S:0}
A.bcY.prototype={
$0(){return this.a.e.$1(D.ZX)},
$S:0}
A.bcZ.prototype={
$0(){return this.a.e.$1(D.ZY)},
$S:0}
A.bgR.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bgS.prototype={
$2(d,e){return d+e.r},
$S:z+5}
A.bgT.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bgU.prototype={
$2(d,e){return d+e.r},
$S:z+5}
A.bgV.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aGH.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bxR()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGy.prototype={
$0(){return this.a.Jy(this.b,this.c)},
$S:0}
A.aGz.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
A.aGA.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.aGx(),null,w),w)},
$S:0}
A.aGx.prototype={
$1(d){return F.Dc},
$S:z+16}
A.aGB.prototype={
$0(){return B.pR(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aGC.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.aGw(),null,w),w)},
$S:0}
A.aGw.prototype={
$1(d){return D.a9i},
$S:z+6}
A.aGD.prototype={
$0(){var w=this
return w.a.Br(w.b,w.c,w.d)},
$S:0}
A.aGG.prototype={
$0(){return D.To},
$S:88}
A.aGF.prototype={
$2(d,e){return new A.In(B.j(d),null)},
$S:z+18}
A.aGE.prototype={
$1(d){return new A.JH(d,null)},
$S:z+19}
A.aGv.prototype={
$1(d){var w=null,v=this.a,u=$.dC()
v=B.i("Die Finanzauswertung f\xfcr "+u.al(v.a)+" \u2013 "+u.al(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lI(B.b([B.dM(C.cZ,w,w,new A.aGt(u),w,w),B.dY(F.vj,new A.aGu(u),B.dF(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vk)},
$S:56}
A.aGt.prototype={
$0(){B.bb(this.a,!1).dk(!1)
return null},
$S:0}
A.aGu.prototype={
$0(){B.bb(this.a,!1).dk(!0)
return null},
$S:0}
A.bjt.prototype={
$0(){var w=this.a.aI(0,$.qV().ghP(),x.V),v=E.aGr()
w.uk(0,v)
return v},
$S:0}
A.bju.prototype={
$0(){var w=this.a.aI(0,$.qV().ghP(),x.V),v=new B.ba(Date.now(),0,!1),u=new E.lW(B.bR(B.b0(v),1,1,0,0,0,0),v)
w.uk(0,u)
return u},
$S:0}
A.bjv.prototype={
$0(){return this.a.IT(this.b,this.c)},
$S:0}
A.bjs.prototype={
$2(d,e){return new B.oX(B.V(d).aQC(B.V(d).ax.aRu(C.h,C.m)),e,null)},
$S:1032}
A.bqb.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dk(),s=A.OE(!1,C.li,"Umsatz 7 %",t.al(u.a),w),r=A.OE(!1,C.li,"Umsatz 19 %",t.al(u.b),w),q=A.OE(!0,D.aaY,"Umsatz netto",t.al(u.c),w),p=A.OE(!1,D.aaX,"Aufwand",t.al(u.d),w),o=u.e,n=t.al(o)
return E.aIV(1.7,B.b([s,r,q,p,A.OE(!0,C.nV,"Ergebnis",n,o<0?C.a6:C.ac),A.OE(!1,C.fS,"USt-Saldo",t.al(u.f-u.r),w)],x.p),v,12,12,C.il,!0)},
$S:131}
A.bqc.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.bqa(this.b),null,w),w)},
$S:0}
A.bqa.prototype={
$1(d){return new A.vc(this.a.a,null)},
$S:z+6}
A.aLE.prototype={
$0(){return D.av1},
$S:88}
A.aLD.prototype={
$2(d,e){var w=null
return B.bj(C.a6,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fi,w,C.D,w,w,3)},
$S:199}
A.aLC.prototype={
$1(d){return new A.II(d,null)},
$S:z+20}
A.bgr.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dk(),i=j.al(k.c),h=l.w,g=l.d,f=B.ag(g).i("ac<1,F>"),e=f.i("as.E"),d=B.Q(new B.ac(g,new A.bgg(),f),e)
i=A.jR(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.al(r.b)
w=B.Q(new B.ac(g,new A.bgh(),f),e)
d=A.jR(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.al(k.e)
w=B.Q(new B.ac(g,new A.bgi(),f),e)
k=A.jR(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ai(h.b,1)
v=B.Q(new B.ac(g,new A.bgj(),f),e)
w=A.jR(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ai(h.a,1)
u=B.Q(new B.ac(g,new A.bgk(),f),e)
v=A.jR(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ai(r.c,1)
t=B.Q(new B.ac(g,new A.bgl(),f),e)
u=A.jR(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ai(h.c,1)
s=B.Q(new B.ac(g,new A.bgm(),f),e)
t=A.jR(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.al(h.d)
s=B.Q(new B.ac(g,new A.bgn(),f),e)
h=A.jR(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.al(l.r.d)
m=B.Q(new B.ac(g,new A.bgo(m),f),e)
m=A.jR(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.al(l)
l=B.Q(new B.ac(g,new A.bgp(l),f),e)
l=A.jR(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ai(j,1)
j=B.Q(new B.ac(g,new A.bgq(j),f),e)
return E.aIV(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jR(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.il,!0)},
$S:131}
A.bgg.prototype={
$1(d){return d.b},
$S:z+0}
A.bgh.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bgi.prototype={
$1(d){return d.d},
$S:z+0}
A.bgj.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgk.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bgl.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgm.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgn.prototype={
$1(d){return d.d},
$S:z+0}
A.bgo.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgp.prototype={
$1(d){return this.a},
$S:z+0}
A.bgq.prototype={
$1(d){return this.a},
$S:z+0}
A.bgs.prototype={
$0(){return A.bBT(this.b,1.45,new A.Ux(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgt.prototype={
$0(){return A.bBT(this.b,1.6,new A.UO(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bu8.prototype={
$1(d){var w=this,v=null,u=B.au(16),t=x.p,s=B.b([B.ah(B.b([B.at(B.i(w.a,v,v,v,v,B.bA(C.h,18,C.p),v,v,v),1),B.fc(v,v,D.adh,v,v,new A.bu7(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.o,12,C.aG),v,v,v),C.I],t))
s.push(C.t)
s.push(B.bN(new B.mO(w.c,w.d,v),v,17976931348623157e292))
return B.a5p(v,C.n,new B.ad(C.al,B.a7(s,C.z,C.f,C.H),v),v,v,v,C.fP,C.v_,v,new B.d_(u,C.J),v)},
$S:1033}
A.bu7.prototype={
$0(){return B.bb(this.a,!1).eU()},
$S:0}
A.bgu.prototype={
$0(){var w=this.a,v=B.b6(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bBT(this.b,2.4,new A.Z5(w.w,w.y,w.z,null),C.b.cn(u," \xb7 "),v)
return null},
$S:0}
A.bpf.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bpg.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bph.prototype={
$1(d){return A.aLP(null,1.4,null,C.a6,0.35,D.ahQ,D.E7,null,!1,!1,!1,!1,D.Fv,!1,10,D.Yh,!0,C.lz,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+22}
A.b6T.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b6V.prototype={
$2(d,e){var w=null
return B.i(this.a.aLm(d),w,w,w,w,B.y(C.o,10,C.E),w,w,w)},
$S:z+24}
A.b6W.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=this.a.length)return C.v7
return new B.ad(C.l1,B.i(C.c.cM(this.a[v].a,5),w,w,w,w,B.y(C.o,9,C.E),w,w,w),w)},
$S:z+8}
A.b6U.prototype={
$1(d){return D.a9m},
$S:z+9}
A.b7T.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7U.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7V.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b7W.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=3)return C.v7
return new B.ad(C.l1,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.p),w,w,w),w)},
$S:z+8}
A.bh8.prototype={
$1(d){return d.d},
$S:z+12}
A.bh9.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bru.prototype={
$1(d){return d.d},
$S:z+28}
A.brv.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5j.prototype={
$0(){return D.av9},
$S:88}
A.b5i.prototype={
$2(d,e){return new A.x1("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+29}
A.b5h.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bj(m,B.a7(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.E),m,m,m),C.I,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.o,12.5,C.l),m,m,m),C.t,B.jP(C.cb,B.b([B.fR(C.F2,D.aIY,new A.b5b(w,v),m),B.fR(D.acT,D.aHT,new A.b5c(w,v),m)],u),C.df,8,8)],u),C.z,C.f,C.i),C.a7,m,C.D,m,m,3)}w=new A.b5k(d)
t=C.b.fl(n.a.e.d,0,new A.b5d())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.ju(new A.b5e(new A.b5l(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.I,B.ah(B.b([B.at(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.o,11,C.l),m,m,m),1),B.qr(D.ae7,D.aId,new A.b5f(q,p),m),B.qr(D.adI,D.aHZ,new A.b5g(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:223}
A.b5b.prototype={
$0(){return A.awj(this.a,this.b,null)},
$S:0}
A.b5c.prototype={
$0(){return A.awg(this.a,this.b)},
$S:0}
A.b5k.prototype={
$1(d){var w=B.b_(J.a2(this.a,d))
return w==null?null:w},
$S:1034}
A.b5l.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ai(v,1)
w=B.b6(w,".",",")+" %"}return w},
$S:33}
A.b5d.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b5e.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jR(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jR(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jR(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jR(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ai(w,1)
w=B.b6(w,".",",")+" %"}w=A.jR(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dk()
v=u.al(v)
return E.aIV(p,B.b([n,m,l,o,w,A.jR(s,s,!1,"Bilanzsumme",!1,"EK "+u.al(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.il,!0)},
$S:131}
A.b5f.prototype={
$0(){return A.awg(this.a,this.b)},
$S:0}
A.b5g.prototype={
$0(){return A.awj(this.a,this.b,this.c)},
$S:0}
A.bu6.prototype={
$1(d){return new A.Bk(this.a,new A.bu5(this.b),this.c,null)},
$S:z+30}
A.bu5.prototype={
$0(){var w=this.a,v=$.bxP()
if(w.e==null)B.S(B.X(y.b))
w.gcd().c_(v)},
$S:0}
A.b55.prototype={
$0(){},
$S:0}
A.b56.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b57.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b59.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uA(u.b,B.bR(2024,1,1,0,0,0,0),null,r,new B.ba(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b58(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b58.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5a.prototype={
$0(){return B.bb(this.a,!1).eU()},
$S:0}
A.b5m.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5n.prototype={
$1(d){return new A.xS(x.B.a(d),this.a.a.r)},
$S:z+34}
A.ayX.prototype={
$1(d){return d.e},
$S:z+35}
A.ayY.prototype={
$2(d,e){return d+e},
$S:45}
A.az_.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.az1.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.az2.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aej(v.d,v.e)},
$S:0}
A.ayF.prototype={
$1(d){return 0},
$S:1035}
A.ayE.prototype={
$2(d,e){return B.eV(C.bW,this.a.am4(e),C.r,C.bl,null)},
$S:1036}
A.b_A.prototype={
$1(d){return d.a},
$S:z+39}
A.b_B.prototype={
$1(d){return d.b},
$S:z+40}
A.b_C.prototype={
$1(d){return new A.jZ(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b_D.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mH||v===D.dQ))t=1-t
return new A.jZ(d,t*w.d)},
$S:z+42}
A.b_E.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lF()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ai(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ai(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ai(v/1000,1)
t="K"}else{u=C.d.ai(v,r.ak3(Math.abs(s.b-s.c)))
t=""}if(C.c.hu(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o0(d,q.c.b.$2(p,new A.tK(u+t,s.e)))},
$S:z+43}
A.aVP.prototype={
$1(d){this.a.l8(new A.a6f(d))},
$S:187}
A.aVQ.prototype={
$1(d){this.a.l8(new A.a6g(d))},
$S:42}
A.aVR.prototype={
$1(d){this.a.l8(new A.a6h(d))},
$S:28}
A.aVS.prototype={
$0(){this.a.l8(D.a1J)},
$S:0}
A.aVT.prototype={
$1(d){this.a.l8(new A.Ns())},
$S:46}
A.aVU.prototype={
$1(d){this.a.l8(new A.a6k(d))},
$S:40}
A.aVV.prototype={
$0(){this.a.l8(D.a1K)},
$S:0}
A.aVW.prototype={
$1(d){this.a.l8(new A.Nv(d))},
$S:94}
A.aVX.prototype={
$1(d){this.a.l8(new A.a6e(d))},
$S:197}
A.aVY.prototype={
$1(d){this.a.l8(new A.a6d(d))},
$S:184}
A.aVZ.prototype={
$1(d){return this.a.l8(new A.Nq(d))},
$S:183}
A.aW_.prototype={
$1(d){return this.a.l8(new A.a6i(d))},
$S:63}
A.aW0.prototype={
$1(d){return this.a.l8(new A.Nt(d))},
$S:54}
A.bgG.prototype={
$1(d){var w=this.a.db.h(0,C.b.hz(this.b.ch,d))
return d.aRa(w==null?B.b([],x.t):w)},
$S:z+45}
A.bgE.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bgF.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fT(w,new A.bgD())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.GV(w))},
$S:0}
A.bgD.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+11}
A.bgH.prototype={
$1(d){return new A.zr(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aLQ.prototype={
$1(d){return!d.k(0,D.fQ)},
$S:z+2}
A.buR.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bGG(t?A.bBE(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tL(w,new A.yF(!0,A.bCt(),new A.buQ(v)))},
$S:z+49}
A.buQ.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bVz(A.bBE(d,e,f),w,A.c3v(d,e,f))},
$S:z+50}
A.buO.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j2(v,v,u==null?D.dw:u,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rI(C.d.j(d.b),w)},
$S:z+51}
A.aLS.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aLT.prototype={
$1(d){return!d.k(0,D.fQ)},
$S:z+2}
A.aLX.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+80}
A.aLV.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aLW.prototype={
$0(){this.a.aej(this.b,this.c)},
$S:0}
A.aLY.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+11}
A.ayQ.prototype={
$1(d){return d.gds(0)},
$S:z+54}
A.ayR.prototype={
$2(d,e){return d+e},
$S:45}
A.ayU.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iV(v,B.ag(v).i("iV<1>")).aB(0,new A.ayV(w,this.a/(u+1),this.c))},
$S:0}
A.ayV.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+3}
A.ayS.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+3}
A.ayT.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+3}
A.aIU.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1037}
A.aC9.prototype={
$1(d){return d},
$S:1038};(function aliases(){var w=A.Ld.prototype
w.a0f=w.ic
w.amn=w.aSS
w.amo=w.aec
w=A.U7.prototype
w.ap_=w.l
w=A.Ln.prototype
w.a0g=w.ic
w=A.Gt.prototype
w.a1_=w.Za})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c74","bVv",56)
var q
v(q=A.U9.prototype,"gaF9","aFa",31)
v(q,"gaEc","I9",10)
v(q,"gaEU","Ik",10)
u(A.Ua.prototype,"gasX","asY",33)
t(A,"c5R",3,null,["$3"],["bSN"],57,0)
t(A,"c5S",3,null,["$3"],["bSO"],58,0)
t(A,"c5T",3,null,["$3"],["bSP"],59,0)
t(A,"c5V",4,null,["$4"],["c6I"],60,0)
w(A,"c5U","c6H",61)
s(A,"bBX","c6J",62)
t(A,"c5M",3,null,["$3"],["bVA"],63,0)
w(A,"a0j","c97",64)
w(A,"awm","c6M",9)
t(A,"c5O",3,null,["$3"],["bWm"],65,0)
t(A,"c5Q",3,null,["$3"],["c0D"],66,0)
t(A,"c5N",3,null,["$3"],["bWl"],67,0)
t(A,"c5P",3,null,["$3"],["c0C"],68,0)
w(A,"cgp","bWk",69)
w(A,"cgq","c0B",70)
r(A.YU.prototype,"ga4H","ayu",38)
u(A.WD.prototype,"gazL","azM",44)
t(A,"c7X",3,null,["$3"],["bWN"],71,0)
t(A,"c7W",3,null,["$3"],["bSQ"],72,0)
w(A,"c8_","c98",2)
t(A,"bNh",4,null,["$5$size","$4"],["bLJ",function(d,e,f,g){return A.bLJ(d,e,f,g,null)}],73,0)
s(A,"bCt","c96",74)
s(A,"bNi","c5z",75)
s(A,"bNl","c6P",76)
s(A,"bNk","c6L",4)
s(A,"bNj","c6K",4)
w(A,"c7Z","bMT",78)
w(A,"c7Y","bMS",79)
t(A,"a0p",3,null,["$3"],["c7V"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.G,[A.a7P,A.alF,A.Bq,A.IN,A.aiM,A.x5,A.ahm,A.amP,A.Jh,A.JH,A.ahk,A.In,A.II,A.am6,A.anl,A.Vn,A.Z5,A.Ux,A.UO,A.anR,A.ak4,A.Cm,A.atI,A.x1,A.Le,A.AL])
u(B.B,[A.vd,A.Eo,A.bk,A.ait,A.aij,A.ail,A.aim,A.aib,A.alR,A.aip,A.ain,A.azb,A.atM,A.ayZ,A.aik,A.Ln,A.a6T,A.tK,A.as8,A.as7,A.aia,A.alQ,A.eB,A.alN,A.alP,A.aqf,A.amG,A.auu,A.alO,A.alq,A.alM,A.ayD,A.bgA,A.ayG,A.ai7,A.o0,A.alJ,A.alK,A.w_,A.hw,A.anu,A.anx,A.aig,A.aiu,A.aih,A.alL,A.anA,A.any,A.atL,A.as6,A.aLR,A.anw,A.vL,A.a2m,A.anH,A.a2w,A.b36])
u(B.v9,[A.pL,A.oj,A.qw,A.vP,A.wL,A.aBx,A.aCF,A.ok,A.CV,A.om])
u(B.o6,[A.aGn,A.aGo,A.aGp,A.aGq,A.aGJ,A.bv2,A.bv3,A.bwV,A.bv4,A.bv0,A.bv1,A.bv_,A.bd2,A.bd4,A.bd_,A.bgR,A.bgT,A.bgV,A.aGx,A.aGw,A.aGE,A.aGv,A.bqa,A.aLC,A.bgg,A.bgh,A.bgi,A.bgj,A.bgk,A.bgl,A.bgm,A.bgn,A.bgo,A.bgp,A.bgq,A.bu8,A.bph,A.b6U,A.b7T,A.b7U,A.bh8,A.bru,A.b5h,A.b5k,A.b5l,A.bu6,A.b5n,A.ayX,A.az_,A.ayF,A.b_A,A.b_B,A.b_C,A.b_D,A.b_E,A.aVP,A.aVQ,A.aVR,A.aVT,A.aVU,A.aVW,A.aVX,A.aVY,A.aVZ,A.aW_,A.aW0,A.bgG,A.bgH,A.aLQ,A.buR,A.buQ,A.buO,A.aLS,A.aLT,A.ayQ,A.aC9])
t(A.yD,B.fG)
u(B.y5,[A.aGm,A.aGl,A.bd7,A.bd1,A.bd3,A.bd0,A.bd6,A.bcX,A.bcY,A.bcZ,A.aGH,A.aGy,A.aGz,A.aGA,A.aGB,A.aGC,A.aGD,A.aGG,A.aGt,A.aGu,A.bjt,A.bju,A.bjv,A.bqc,A.aLE,A.bgs,A.bgt,A.bu7,A.bgu,A.b5j,A.b5b,A.b5c,A.b5f,A.b5g,A.bu5,A.b55,A.b56,A.b57,A.b59,A.b58,A.b5a,A.b5m,A.az2,A.aVS,A.aVV,A.bgE,A.bgF,A.aLV,A.aLW,A.ayU])
t(A.vc,B.be)
u(B.Im,[A.BK,A.ayO,A.aeO,A.Db,A.aFB,A.aLF,A.NV])
t(A.alG,B.v_)
u(B.y6,[A.bd5,A.bgS,A.bgU,A.aGF,A.bjs,A.bqb,A.aLD,A.bgr,A.bpf,A.bpg,A.b6T,A.b6V,A.b6W,A.b7V,A.b7W,A.bh9,A.brv,A.b5i,A.b5d,A.b5e,A.ayY,A.az1,A.ayE,A.bgD,A.aLX,A.aLY,A.ayR,A.ayV,A.ayS,A.ayT,A.aIU])
u(B.yc,[A.yE,A.ap4,A.a7Q,A.aif])
u(B.N,[A.Bk,A.S6])
u(B.a_,[A.U9,A.YU])
u(B.Ob,[A.Lj,A.OR])
u(B.uJ,[A.Ua,A.WD])
t(A.a1Y,A.ait)
t(A.ai6,A.a1Y)
t(A.a1I,A.ai6)
u(A.a1I,[A.aii,A.anv])
t(A.o1,A.aii)
t(A.fL,A.aij)
t(A.ip,A.ail)
t(A.mP,A.aim)
t(A.a1P,A.aib)
t(A.Nw,A.alR)
u(A.Nw,[A.aio,A.anz])
t(A.a1U,A.aio)
t(A.a1V,A.aip)
t(A.Dc,A.ain)
u(A.azb,[A.Lk,A.OT])
t(A.aeQ,A.atM)
t(A.aiq,A.aeQ)
t(A.a1W,A.aiq)
u(B.b4,[A.xS,A.zr])
t(A.uP,A.aik)
t(A.Ld,A.Ln)
u(A.Ld,[A.az0,A.aLU])
u(B.OM,[A.a1S,A.a81])
u(B.K,[A.Gt,A.ai8])
u(A.Gt,[A.abY,A.aca])
t(A.ql,A.as8)
t(A.adn,A.as7)
t(A.po,A.aia)
t(A.vf,A.alQ)
t(A.yG,A.alN)
t(A.pM,A.alP)
t(A.QF,A.aqf)
t(A.n8,A.amG)
t(A.nw,A.auu)
u(A.pM,[A.amF,A.aut])
t(A.kW,A.amF)
t(A.ln,A.aut)
t(A.a6c,A.alO)
u(A.a6c,[A.amE,A.aus])
t(A.a73,A.amE)
t(A.afd,A.aus)
t(A.Ng,A.alq)
t(A.ve,A.alM)
t(A.Np,A.ve)
t(A.ado,B.ha)
t(A.ai9,A.ai8)
t(A.U7,A.ai9)
t(A.a1J,A.U7)
t(A.jZ,A.ai7)
t(A.a69,A.alJ)
t(A.a6b,A.alK)
u(A.hw,[A.a6f,A.a6g,A.a6h,A.Nr,A.Ns,A.a6k,A.Nu,A.Nv,A.a6e,A.a6d,A.Nq,A.a6i,A.a6j,A.Nt])
t(A.q_,A.anv)
t(A.ec,A.anu)
t(A.OS,A.anx)
t(A.a1R,A.aig)
t(A.mQ,A.aiu)
t(A.Li,A.aih)
t(A.yF,A.alL)
t(A.F0,A.anz)
t(A.a82,A.anA)
t(A.ant,A.eB)
t(A.nb,A.ant)
t(A.qu,A.nb)
t(A.rI,A.any)
t(A.tL,A.atL)
t(A.GV,A.as6)
t(A.zs,A.anw)
t(A.zw,A.anH)
w(A.aib,A.bk)
w(A.aii,A.bk)
w(A.aij,A.bk)
w(A.ail,A.bk)
w(A.aim,A.bk)
w(A.ain,A.bk)
w(A.aio,A.bk)
w(A.aip,A.bk)
w(A.aiq,A.bk)
w(A.aik,A.bk)
w(A.ai6,A.bk)
w(A.aia,A.bk)
w(A.alq,A.bk)
w(A.alM,A.bk)
w(A.alN,A.bk)
w(A.alP,A.bk)
w(A.alQ,A.bk)
w(A.amF,A.bk)
w(A.amE,A.bk)
w(A.amG,A.bk)
w(A.aqf,A.bk)
w(A.as7,A.bk)
w(A.as8,A.bk)
w(A.atM,A.bk)
w(A.aut,A.bk)
w(A.aus,A.bk)
w(A.auu,A.bk)
w(A.ai7,A.bk)
v(A.ai8,B.aE)
w(A.ai9,B.e7)
v(A.U7,B.a58)
w(A.ait,A.bk)
w(A.alJ,A.bk)
w(A.alK,A.bk)
w(A.alR,A.bk)
w(A.aig,A.bk)
w(A.aih,A.bk)
w(A.aiu,A.bk)
w(A.alL,A.bk)
w(A.alO,A.bk)
w(A.ant,A.bk)
w(A.anu,A.bk)
w(A.anv,A.bk)
w(A.anx,A.bk)
w(A.any,A.bk)
w(A.anz,A.bk)
w(A.anA,A.bk)
w(A.as6,A.bk)
w(A.atL,A.bk)
w(A.anw,A.bk)
w(A.anH,A.bk)})()
B.brJ(b.typeUniverse,JSON.parse('{"a7P":{"G":[],"c":[]},"Eo":{"aGs":[]},"yD":{"fG":["bg<~>"],"fG.T":"bg<~>"},"vc":{"be":[],"N":[],"c":[]},"IN":{"G":[],"c":[]},"x5":{"G":[],"c":[]},"alG":{"a_":["vc"]},"alF":{"G":[],"c":[]},"Bq":{"G":[],"c":[]},"aiM":{"G":[],"c":[]},"JH":{"G":[],"c":[]},"In":{"G":[],"c":[]},"yE":{"be":[],"N":[],"c":[]},"ahm":{"G":[],"c":[]},"amP":{"G":[],"c":[]},"ap4":{"be":[],"N":[],"c":[]},"Jh":{"G":[],"c":[]},"ahk":{"G":[],"c":[]},"II":{"G":[],"c":[]},"x1":{"G":[],"c":[]},"Bk":{"N":[],"c":[]},"a7Q":{"be":[],"N":[],"c":[]},"am6":{"G":[],"c":[]},"anl":{"G":[],"c":[]},"Vn":{"G":[],"c":[]},"Z5":{"G":[],"c":[]},"Ux":{"G":[],"c":[]},"UO":{"G":[],"c":[]},"anR":{"G":[],"c":[]},"ak4":{"G":[],"c":[]},"Cm":{"G":[],"c":[]},"atI":{"G":[],"c":[]},"aif":{"be":[],"N":[],"c":[]},"U9":{"a_":["Bk"]},"Lj":{"N":[],"c":[]},"Ua":{"a_":["Lj"]},"o1":{"bk":[]},"fL":{"bk":[]},"ip":{"bk":[]},"mP":{"bk":[]},"Dc":{"bk":[]},"xS":{"b4":["o1"],"b8":["o1"],"b8.T":"o1","b4.T":"o1"},"a1P":{"bk":[]},"a1U":{"bk":[]},"a1V":{"bk":[]},"a1W":{"bk":[]},"uP":{"bk":[]},"a1S":{"aV":[],"c":[]},"abY":{"K":[],"L":[],"jx":[],"aU":[]},"pM":{"bk":[]},"n8":{"bk":[]},"nw":{"bk":[]},"kW":{"bk":[]},"ln":{"bk":[]},"ve":{"bk":[]},"a1I":{"bk":[]},"ql":{"bk":[]},"adn":{"bk":[]},"po":{"bk":[]},"vf":{"bk":[]},"yG":{"bk":[]},"aeQ":{"bk":[]},"QF":{"bk":[]},"a73":{"bk":[]},"afd":{"bk":[]},"Ng":{"bk":[]},"Np":{"bk":[]},"Le":{"G":[],"c":[]},"S6":{"N":[],"c":[]},"YU":{"a_":["S6"]},"jZ":{"bk":[]},"ado":{"ha":[],"aV":[],"c":[]},"a1J":{"e7":["K","hx"],"K":[],"aE":["K","hx"],"L":[],"aU":[],"aE.1":"hx","e7.1":"hx","aE.0":"K"},"AL":{"G":[],"c":[]},"a1Y":{"bk":[]},"a69":{"bk":[]},"Nw":{"bk":[]},"a6b":{"bk":[]},"a6f":{"hw":[]},"a6g":{"hw":[]},"a6h":{"hw":[]},"Nr":{"hw":[]},"Ns":{"hw":[]},"a6k":{"hw":[]},"Nu":{"hw":[]},"Nv":{"hw":[]},"a6e":{"hw":[]},"a6d":{"hw":[]},"Nq":{"hw":[]},"a6i":{"hw":[]},"a6j":{"hw":[]},"Nt":{"hw":[]},"Gt":{"K":[],"L":[],"jx":[],"aU":[]},"OR":{"N":[],"c":[]},"WD":{"a_":["OR"]},"q_":{"bk":[]},"ec":{"bk":[]},"mQ":{"bk":[]},"nb":{"eB":[],"bk":[]},"qu":{"nb":[],"eB":[],"bk":[]},"rI":{"bk":[]},"tL":{"bk":[]},"GV":{"bk":[]},"zr":{"b4":["q_"],"b8":["q_"],"b8.T":"q_","b4.T":"q_"},"OS":{"bk":[]},"a1R":{"bk":[]},"Li":{"bk":[]},"yF":{"bk":[]},"a6c":{"bk":[]},"F0":{"bk":[]},"a82":{"bk":[]},"zs":{"bk":[]},"a81":{"aV":[],"c":[]},"aca":{"K":[],"L":[],"jx":[],"aU":[]},"zw":{"bk":[]}}'))
B.bLc(b.typeUniverse,JSON.parse('{"Ld":1,"Nw":1,"Ln":1,"Gt":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ax
return{_:w("CV"),e:w("bg<oj>"),cn:w("bg<ok>"),aN:w("bg<om>"),fM:w("bg<a3<f,@>?>"),c:w("bg<~>"),W:w("jZ"),B:w("o1"),dB:w("fL"),T:w("uP"),fj:w("ip"),G:w("mP"),bO:w("mQ"),k:w("ar"),cX:w("a2w<F>"),dO:w("uW"),R:w("a4<f,@>"),j:w("hr"),bz:w("lQ<ba>"),f0:w("oc"),E:w("bk"),F:w("yD"),aI:w("pL"),m:w("oj"),X:w("ok"),P:w("lW"),D:w("vd"),a:w("aGs"),d:w("om"),cw:w("eB"),L:w("hx"),o:w("dv<v,E>"),cm:w("kW"),dv:w("n8"),M:w("D<o0>"),I:w("D<bFh>"),O:w("D<fL>"),Y:w("D<ip>"),U:w("D<eB>"),K:w("D<a6T>"),u:w("D<ec>"),bC:w("D<vL>"),aA:w("D<u<eB>>"),v:w("D<ee>"),r:w("D<GV>"),s:w("D<f>"),eg:w("D<tH>"),df:w("D<qu>"),p:w("D<c>"),n:w("D<F>"),t:w("D<v>"),eF:w("bl<a_<N>>"),Z:w("nb"),cz:w("ec"),hf:w("q_"),dj:w("zs"),fT:w("rI"),c_:w("is<p9<bg<~>>>"),x:w("zw<fL>"),y:w("zw<ec>"),J:w("u<v>"),ef:w("vP"),b:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<F,F>"),w:w("ke"),aU:w("B"),Q:w("w_<o1>"),C:w("w_<q_>"),dc:w("ee"),eo:w("qa"),gJ:w("qb"),V:w("kq<lW>"),N:w("f"),A:w("nr"),bP:w("bK"),er:w("tH"),fB:w("wL"),dw:w("qu"),bY:w("tL"),cZ:w("qw"),gc:w("j7"),es:w("ln"),bN:w("nw"),l:w("c"),q:w("xl"),g4:w("ii<F>"),cJ:w("C"),i:w("F"),z:w("@"),S:w("v"),bn:w("xS?"),f3:w("zr?"),g:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("j7?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bc=new B.lJ(C.m,B.ax("lJ<E>"))
D.Bj=new A.Db(0,"left")
D.mH=new A.Db(1,"top")
D.Bk=new A.Db(2,"right")
D.dQ=new A.Db(3,"bottom")
D.aza=new A.ql(!1,A.bBX(),22,null)
D.kw=new A.po(16,null,D.aza,!0)
D.a9n=new A.pM(C.F,null,2,null)
D.w8=new A.Li(!1,D.a9n,A.c8_(),!0)
D.a_G=new A.ayO(3,"spaceEvenly")
D.a_P=new B.xW(6,"dstIn")
D.Xz=new B.aW(3,3)
D.Bn=new B.d5(D.Xz,D.Xz,C.a2,C.a2)
D.a0_=new B.bo(C.F,0,C.S,-1)
D.BW=new A.a6b()
D.a1J=new A.Nr()
D.a1K=new A.Nu()
D.aRe=new A.adn()
D.a7v=new B.bu(8e6)
D.amQ=w([],B.ax("D<kW>"))
D.amR=w([],B.ax("D<ln>"))
D.E3=new A.Ng(D.amQ,D.amR,!0)
D.a91=new B.dK("Zeitraum",!1,null)
D.a97=new B.dK("Konten (SKR 03)",!1,null)
D.xN=new A.aFB(0,"center")
D.a9i=new A.vc(null,null)
D.aRr=new A.yF(!0,A.bCt(),A.bNh())
D.E7=new A.yF(!1,A.bCt(),A.bNh())
D.E8=new A.yG(!1,!0,null,A.awm(),A.a0j(),!0,null,A.awm(),A.a0j())
D.aRs=new A.yG(!0,!0,null,A.awm(),A.a0j(),!0,null,A.awm(),A.a0j())
D.a46=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3R=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4g=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4a=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3y=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3x=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a4F=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a4_=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4I=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4C=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.at5=new B.dv([50,D.a46,100,D.a3R,200,D.a4g,300,D.a4a,400,D.a3y,500,D.a3x,600,D.a4F,700,D.a4_,800,D.a4I,900,D.a4C],x.o)
D.dw=new B.rP(D.at5,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aiR=w([8,4],x.t)
D.a9l=new A.pM(D.dw,null,0.4,D.aiR)
D.a9m=new A.pM(C.a4,null,0.5,null)
D.fQ=new A.eB(0/0,0/0)
D.azc=new A.ql(!0,A.bBX(),44,null)
D.mI=new A.po(16,null,D.azc,!0)
D.azb=new A.ql(!0,A.bBX(),30,null)
D.mJ=new A.po(16,null,D.azb,!0)
D.a9o=new A.vf(!1,D.mI,D.mJ,D.mI,D.mJ)
D.aRt=new A.vf(!0,D.mI,D.mJ,D.mI,D.mJ)
D.aIl=new B.aj("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.a9U=new B.ea(D.aIl,null,null)
D.Eg=new A.NV(0,"left")
D.aa2=new A.NV(1,"center")
D.Eh=new A.NV(2,"right")
D.aa7=new B.a5(57495,"MaterialIcons",null,!1)
D.Er=new B.a5(57912,"MaterialIcons",null,!1)
D.aak=new B.a5(58040,"MaterialIcons",null,!0)
D.y4=new B.a5(58927,"MaterialIcons",null,!1)
D.aaX=new B.a5(59005,"MaterialIcons",null,!0)
D.aaY=new B.a5(59007,"MaterialIcons",null,!0)
D.aaZ=new B.a5(59011,"MaterialIcons",null,!1)
D.abY=new B.a5(62589,"MaterialIcons",null,!1)
D.abf=new B.a5(61349,"MaterialIcons",null,!1)
D.acQ=new B.aA(D.abf,20,C.h,null,null)
D.abl=new B.a5(61487,"MaterialIcons",null,!1)
D.acS=new B.aA(D.abl,18,null,null,null)
D.acT=new B.aA(D.y4,18,null,null,null)
D.adc=new B.aA(C.nW,14,C.a6,null,null)
D.adh=new B.aA(C.hZ,null,C.h,null,null)
D.adi=new B.aA(C.lf,null,C.o,null,null)
D.adI=new B.aA(C.o2,16,null,null,null)
D.adO=new B.aA(C.yd,16,null,null,null)
D.adR=new B.aA(D.Er,null,C.a6,null,null)
D.abW=new B.a5(62584,"MaterialIcons",null,!1)
D.ae1=new B.aA(D.abW,16,null,null,null)
D.ae7=new B.aA(D.y4,16,null,null,null)
D.agb=new A.a7Q(null)
D.aRy=new A.aLF(0,"horizontal")
D.yn=new A.zs(0,0,0,0,!1)
D.Fv=new A.OS(0.5)
D.C1=new A.a82()
D.ago=new A.F0(D.C1,A.bNl(),10,A.bNi(),!0,A.bNk(),A.bNj(),!1,null,null,null)
D.aRA=new A.F0(D.C1,A.bNl(),10,A.bNi(),!0,A.bNk(),A.bNj(),!0,null,null,null)
D.ahQ=w([4,3],x.t)
D.axm=new B.aJ("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.axb=new B.aJ("receivables","Forderungen (kurzfristig)")
D.ax_=new B.aJ("inventory_value","Vorr\xe4te (Warenbestand)")
D.awY=new B.aJ("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.awL=new B.aJ("fixed_assets","Anlageverm\xf6gen")
D.awS=new B.aJ("current_liabilities","Kurzfristige Verbindlichkeiten")
D.axi=new B.aJ("long_term_liabilities","Langfristige Verbindlichkeiten")
D.axa=new B.aJ("equity","Eigenkapital")
D.pI=w([D.axm,D.axb,D.ax_,D.awY,D.awL,D.awS,D.axi,D.axa],B.ax("D<+(f,f)>"))
D.aRD=w([],x.M)
D.amD=w([],x.O)
D.amE=w([],x.Y)
D.amF=w([],B.ax("D<mP>"))
D.amG=w([],B.ax("D<mQ>"))
D.aRE=w([],x.U)
D.aRF=w([],x.u)
D.amH=w([],x.r)
D.atG={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Td={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z3=new B.a4(D.Td,[0,0,0,0,0,0,0,C.c_],B.ax("a4<f,B>"))
D.atD={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.at_=new B.a4(D.atD,[0,0,0,0],B.ax("a4<f,v>"))
D.atV={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqz=new B.a4(D.atV,[0,0,0,0,null,null,null,null],B.ax("a4<f,v?>"))
D.aqs=new B.a4(D.atG,[D.z3,D.z3,D.z3,C.c_,C.c_,C.c_,D.at_,D.aqz],x.R)
D.aqM=new B.a4(D.Td,[0,0,0,0,0,0,0,C.ci],x.R)
D.atH={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqO=new B.a4(D.atH,[8500,1200,3400,300,22e3,4200,9000,22200],B.ax("a4<f,F>"))
D.au4={total:0,rows:1}
D.aqR=new B.a4(D.au4,[0,C.ci],x.R)
D.atC={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.at0=new B.a4(D.atC,[0,0,0,0,0,0,0,C.ci],x.R)
D.au7={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.at1=new B.a4(D.au7,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ax("a4<f,f>"))
D.a4O=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4W=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3B=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a42=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4c=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5a=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3l=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a44=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4f=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a4D=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.at6=new B.dv([50,D.a4O,100,D.a4W,200,D.a3B,300,D.a42,400,D.a4c,500,D.a5a,600,D.a3l,700,D.a44,800,D.a4f,900,D.a4D],x.o)
D.T_=new B.rP(D.at6,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8j=new B.ai(32,32,32,32)
D.av1=new B.ad(D.a8j,C.bK,null)
D.a8l=new B.ai(48,48,48,48)
D.To=new B.ad(D.a8l,C.bK,null)
D.av9=new B.ad(C.al,C.bK,null)
D.amS=w([],B.ax("D<n8>"))
D.amT=w([],B.ax("D<nw>"))
D.XB=new A.QF(D.amS,D.amT)
D.ay8=new B.fD("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aya=new B.fD("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ayc=new B.fD("Automaten-Business","Umsatz je Automat",null,null)
D.ayf=new B.fD("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ayh=new B.fD("Top","Meistverkaufte Produkte",null,null)
D.ayl=new B.fD("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aym=new B.fD("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yh=new B.tq(C.K,C.v,0)
D.aGN=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aAW=new B.e2(D.aGN,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIM=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aAZ=new B.e2(D.aIM,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aH_=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aB_=new B.e2(D.aH_,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIF=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aB1=new B.e2(D.aIF,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aI9=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aB2=new B.e2(D.aI9,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aI6=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aBl=new B.e2(D.aI6,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aRP=new B.T(!0,C.F,null,null,null,null,14,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGX=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aH7=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aHT=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aHZ=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aId=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aIY=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.aeO(0,"auto")
D.aJB=new A.aeO(1,"top")
D.aO0=new A.x1("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aO1=new A.x1("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.AW=new A.BK(0,"alle")
D.ZX=new A.BK(1,"aufwand")
D.ZY=new A.BK(2,"erloes")
D.aOV=new A.x5('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.o,C.lf,null)
D.ac9=new B.a5(984570,"MaterialIcons",null,!1)
D.aOW=new A.x5("Keine Buchung passt zu dieser Auswahl.",C.o,D.ac9,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cgT","bRz",()=>B.iX(new A.bv2(),x.D))
w($,"cgU","a0R",()=>B.iX(new A.bv3(),x.a))
w($,"chU","qV",()=>B.bAC(new A.bwV(),x.P))
w($,"cgV","bxR",()=>C.aF.$1$1(new A.bv4(),x.d))
w($,"cgR","bxQ",()=>C.aF.$1$1(new A.bv0(),x.m))
w($,"cgS","bE8",()=>C.aF.$1$1(new A.bv1(),x.X))
w($,"cgQ","bxP",()=>C.aF.$1$1(new A.bv_(),x.h))
w($,"cgP","bxO",()=>B.b0q(A.c74(),x.F,x.c))
w($,"c9V","bxl",()=>new A.ayD())
v($,"cdg","lF",()=>new A.b36())})()};
(a=>{a["aVClRxvwIrc5ZZOBE611A0Hc0mg="]=a.current})($__dart_deferred_initializers__);