((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
OE(d,e,f,g,h){return new A.a7Q(f,g,d,h,e,null)},
a7Q:function a7Q(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
vd:function vd(d){this.a=d},
c7p(d){var w
if(x.f.b(d)){w=J.a2(d,"error")
if(typeof w=="string"&&C.c.aL(w).length!==0)return C.c.aL(w)}if(typeof d=="string"&&C.c.aL(d).length!==0)return C.c.aL(d)
return null},
Eo:function Eo(d){this.a=d},
bVC(d){var w=J.Y(d),v=B.b_(w.h(d,"total"))
v=v==null?null:C.d.Y(v)
if(v==null)v=0
w=x.g.a(w.h(d,"rows"))
if(w==null)w=C.c_
w=J.cP(w,new A.aGo(),x.aI)
w=B.Q(w,w.$ti.i("as.E"))
return new A.oj(v,w)},
buh(d){var w
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
aGo:function aGo(){},
bVD(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z8
w=x.f
v=x.N
u=x.z
t=A.aGJ(B.cW(w.a(e.h(a0,"current")),v,u))
s=A.aGJ(B.cW(w.a(e.h(a0,"prior_year")),v,u))
r=A.aGJ(B.cW(w.a(e.h(a0,"prior_period")),v,u))
q=x.g
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c_
p=J.cP(p,new A.aGp(),x.cZ)
p=B.Q(p,p.$ti.i("as.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c_
o=J.cP(o,new A.aGq(),x.ef)
o=B.Q(o,o.$ti.i("as.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c_
q=J.cP(q,new A.aGr(),x.fB)
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
i=A.bui(u.h(0,"revenue_growth_yoy_pct"))
h=A.bui(u.h(0,"revenue_growth_mom_pct"))
g=A.bui(u.h(0,"result_growth_yoy_pct"))
u=A.bui(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.a2(d,"days"))
f=f==null?null:C.d.Y(f)
if(f==null)f=1
return new A.ok(t,s,r,p,o,q,new A.aBy(m,l,k,n),new A.aCG(v,e,w,j,i,h,g,u),f)},
pf(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.am(d))
return w==null?0:w},
bui(d){if(d==null)return null
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
aBy:function aBy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCG:function aCG(d,e,f,g,h,i,j,k){var _=this
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
aGp:function aGp(){},
aGq:function aGq(){},
aGr:function aGr(){},
aGJ(d){var w=J.Y(d),v=A.ut(w.h(d,"revenue_net_7")),u=A.ut(w.h(d,"revenue_net_19")),t=A.ut(w.h(d,"revenue_net")),s=A.ut(w.h(d,"expense_net")),r=A.ut(w.h(d,"result_net")),q=A.ut(w.h(d,"vat_collected")),p=A.ut(w.h(d,"vat_paid"))
w=x.g.a(w.h(d,"accounts"))
if(w==null)w=C.c_
w=J.cP(w,new A.aGK(),x._)
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
aGK:function aGK(){},
bVB(d){return new A.yF(d,new B.is(x.c_),C.dP)},
bv6:function bv6(){},
bv7:function bv7(){},
bwZ:function bwZ(){},
bv8:function bv8(){},
bv4:function bv4(){},
bv5:function bv5(){},
bv3:function bv3(){},
yF:function yF(d,e,f){this.r=d
this.a=e
this.f=f},
aGn:function aGn(d,e,f){this.a=d
this.b=e
this.c=f},
aGm:function aGm(d,e,f){this.a=d
this.b=e
this.c=f},
vc:function vc(d,e){this.d=d
this.a=e},
x4:function x4(d,e){this.a=d
this.b=e},
alH:function alH(d){var _=this
_.w=d
_.d=_.x=$
_.c=_.a=null},
bd9:function bd9(d){this.a=d},
bd4:function bd4(d){this.a=d},
bd3:function bd3(d,e){this.a=d
this.b=e},
bd5:function bd5(d){this.a=d},
bd2:function bd2(d){this.a=d},
bd8:function bd8(){},
bd7:function bd7(){},
bd6:function bd6(d){this.a=d},
bd1:function bd1(d){this.a=d},
alG:function alG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bcY:function bcY(d){this.a=d},
bcZ:function bcZ(d){this.a=d},
bd_:function bd_(d){this.a=d},
bd0:function bd0(d){this.a=d},
wZ:function wZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IN:function IN(d,e,f){this.c=d
this.d=e
this.a=f},
bgT:function bgT(){},
bgU:function bgU(){},
bgV:function bgV(){},
bgW:function bgW(){},
bgX:function bgX(){},
bgY:function bgY(){},
bgZ:function bgZ(){},
aiN:function aiN(d,e){this.c=d
this.a=e},
x7:function x7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVE(){return new A.yG(null)},
Wi(d,e,f,g,h){return new A.amQ(e,h,g,f,d,null)},
yG:function yG(d){this.a=d},
aGI:function aGI(d){this.a=d},
aGz:function aGz(d,e,f){this.a=d
this.b=e
this.c=f},
aGA:function aGA(d,e,f){this.a=d
this.b=e
this.c=f},
aGB:function aGB(d){this.a=d},
aGy:function aGy(){},
aGC:function aGC(d){this.a=d},
aGD:function aGD(d){this.a=d},
aGx:function aGx(){},
aGE:function aGE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGH:function aGH(){},
aGG:function aGG(){},
aGF:function aGF(){},
aGw:function aGw(d,e){this.a=d
this.b=e},
aGu:function aGu(d){this.a=d},
aGv:function aGv(d){this.a=d},
ahn:function ahn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amQ:function amQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ap5:function ap5(d,e){this.e=d
this.a=e},
bjx:function bjx(d){this.a=d},
bjy:function bjy(d){this.a=d},
bjz:function bjz(d,e,f){this.a=d
this.b=e
this.c=f},
bjw:function bjw(){},
Jh:function Jh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JH:function JH(d,e){this.c=d
this.a=e},
bqf:function bqf(d){this.a=d},
bqg:function bqg(d,e){this.a=d
this.b=e},
bqe:function bqe(d){this.a=d},
ahl:function ahl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
In:function In(d,e){this.c=d
this.a=e},
bFr(d,e,f){return new A.a21(e,f,d,null)},
c64(d){switch(d){case"revenue":return C.ac
case"expense":return C.a5
default:return C.o}},
a21:function a21(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bBX(d,e,f,g,h){var w=null
return B.jd(w,w,!0,w,new A.buc(h,g,e,f),d,w,!0,!0,x.H)},
jR(d,e,f,g,h,i,j,k,l,m,n){return new A.anm(g,n,i,e,d,m,f,k,l,j,null)},
awh(d,e){return A.c5c(d,e)},
c5c(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$awh=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.aAX)
t=4
o=e.aI(0,$.bX(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fY("finance-balance-sync",B.A(n,n)),$async$awh)
case 7:r=g
q=B.cW(x.f.a(r.a),x.N,n)
l.Mw()
if(J.d(J.a2(q,"configured"),!1)){l.be(D.aB0)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bxT()
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
return B.p($async$awh,v)},
awk(d,e,f){var w=0,v=B.q(x.H)
var $async$awk=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jd(null,null,!0,null,new A.bua(f,e,e.aI(0,$.bX(),x.A)),d,null,!0,!0,x.H),$async$awk)
case 2:return B.o(null,v)}})
return B.p($async$awk,v)},
a7R:function a7R(d){this.a=d},
aLF:function aLF(){},
aLE:function aLE(){},
aLD:function aLD(){},
II:function II(d,e){this.c=d
this.a=e},
bgt:function bgt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgi:function bgi(){},
bgj:function bgj(){},
bgk:function bgk(){},
bgl:function bgl(){},
bgm:function bgm(){},
bgn:function bgn(){},
bgo:function bgo(){},
bgp:function bgp(){},
bgq:function bgq(d){this.a=d},
bgr:function bgr(d){this.a=d},
bgs:function bgs(d){this.a=d},
bgu:function bgu(d,e){this.a=d
this.b=e},
bgv:function bgv(d,e){this.a=d
this.b=e},
buc:function buc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bub:function bub(d){this.a=d},
am7:function am7(d){this.a=d},
anm:function anm(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bgw:function bgw(d,e){this.a=d
this.b=e},
Vn:function Vn(d,e,f){this.c=d
this.d=e
this.a=f},
Z5:function Z5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bpj:function bpj(){},
bpk:function bpk(){},
bpl:function bpl(d){this.a=d},
Ux:function Ux(d,e,f){this.c=d
this.d=e
this.a=f},
b6U:function b6U(){},
b6W:function b6W(d){this.a=d},
b6X:function b6X(d){this.a=d},
b6V:function b6V(){},
UO:function UO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7U:function b7U(){},
b7V:function b7V(){},
b7W:function b7W(){},
b7X:function b7X(d){this.a=d},
anS:function anS(d,e){this.c=d
this.a=e},
bhc:function bhc(){},
bhd:function bhd(){},
ak5:function ak5(d,e){this.c=d
this.a=e},
Cm:function Cm(d,e,f){this.c=d
this.d=e
this.a=f},
atJ:function atJ(d,e){this.c=d
this.a=e},
bry:function bry(){},
brz:function brz(){},
x2:function x2(d,e){this.c=d
this.a=e},
aig:function aig(d,e){this.e=d
this.a=e},
b5k:function b5k(){},
b5j:function b5j(){},
b5i:function b5i(d,e,f){this.a=d
this.b=e
this.c=f},
b5c:function b5c(d,e){this.a=d
this.b=e},
b5d:function b5d(d,e){this.a=d
this.b=e},
b5l:function b5l(d){this.a=d},
b5m:function b5m(d){this.a=d},
b5e:function b5e(){},
b5f:function b5f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5g:function b5g(d,e){this.a=d
this.b=e},
b5h:function b5h(d,e,f){this.a=d
this.b=e
this.c=f},
bua:function bua(d,e,f){this.a=d
this.b=e
this.c=f},
bu9:function bu9(d){this.a=d},
Bm:function Bm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
U9:function U9(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b56:function b56(){},
b57:function b57(d){this.a=d},
b58:function b58(d){this.a=d},
b5a:function b5a(d,e){this.a=d
this.b=e},
b59:function b59(d,e){this.a=d
this.b=e},
b5b:function b5b(d){this.a=d},
bk:function bk(){},
bFp(d){return new A.Lj(d,C.am,C.bX,null,null)},
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
b5n:function b5n(d,e){this.a=d
this.b=e},
b5o:function b5o(d){this.a=d},
ayQ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amE:f,p=a0==null?16:a0,o=d==null?D.a_H:d,n=g==null,m=n?A.byk(r,r,r,r,r,r,r,r):g,l=a3==null?D.XB:a3
n=n?A.byk(r,r,r,r,r,r,r,r):g
w=j==null?D.E3:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.K:e
return new A.o1(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BW,s,w,i,n)},
ayX(d,e,f,g,h){var w=d==null?D.amF:d,v=e==null?2:e,u=g==null?C.lz:g
return new A.fL(h,f===!0,w,v,u)},
bST(d,e,f){var w=d.a
w=C.d.aN(w+(e.a-w)*f)
return A.ayX(A.kE(d.c,e.c,f,A.c5Y(),x.fj),B.af(d.d,e.d,f),!1,A.kE(d.e,e.e,f,A.a0p(),x.S),w)},
a1T(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T_
else w=h
v=m==null
u=v?8:m
t=$.lF()
s=t.aXQ(f,v?8:m)
t=t.aXR(g,v?8:m)
v=d==null?A.bFn(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.amG:k)},
bSU(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.af(d.e,e.e,f),q=B.mR(d.f,e.f,f),p=A.kE(d.r,e.r,f,A.a0p(),x.S),o=B.bZ(d.w,e.w,f),n=B.af(d.a,e.a,f),m=B.af(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.af(w.b,v.b,f)
t=B.af(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1T(A.bFn(v,u,null,!1,t),p,q,o,s,n,null,A.kE(d.y,e.y,f,A.c5Z(),x.G),m,r)},
bSV(d,e,f){var w,v,u=B.af(d.a,e.a,f)
u.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mP(u,w,v,B.bZ(d.d,e.d,f))},
bFn(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dw
else w=d
return new A.a1P(g===!0,v,u,w,f)},
byk(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1V(4,C.fO,16,D.xN,0,120,A.c60(),!1,!1,D.Zx,0,C.J,A.c6_())
else w=k
v=j==null?C.l3:j
return new A.a1U(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c6P(d,e,f,g){var w=null,v=B.j3(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dc(C.d.j(f.b),v)},
c6O(d){return A.aAX(D.dw,15)},
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
ayP:function ayP(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayY:function ayY(){},
ayZ:function ayZ(){},
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
aeP:function aeP(d,e){this.a=d
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
xU:function xU(d,e){this.a=d
this.b=e},
aic:function aic(){},
aij:function aij(){},
aik:function aik(){},
aim:function aim(){},
ain:function ain(){},
aio:function aio(){},
aip:function aip(){},
aiq:function aiq(){},
air:function air(){},
az_:function az_(d){this.a=d},
az0:function az0(){},
uP:function uP(d,e,f){this.a=d
this.b=e
this.c=f},
ail:function ail(){},
az1:function az1(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
az2:function az2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az3:function az3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6U:function a6U(d){this.b=d},
a1S:function a1S(d,e,f){this.d=d
this.e=e
this.a=f},
abZ:function abZ(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aF=_.al=_.ar=$
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
c6Q(d,e){var w=null
return new A.S6(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ayI(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.af(w.c,v.c,f)
u.toString
return new A.po(t,e.b,new A.ql(v.a,v.b,u,B.af(w.d,v.d,f)),!0)},
bGN(d,e,f){var w=A.ayI(d.b,e.b,f),v=A.ayI(d.d,e.d,f),u=A.ayI(d.e,e.e,f)
return new A.vf(e.a,w,A.ayI(d.c,e.c,f),v,u)},
bVG(d,e,f){var w,v
if(d.k(0,D.fQ))return e
if(e.k(0,D.fQ))return d
w=B.af(d.a,e.a,f)
w.toString
v=B.af(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bGL(d,e,f){return new A.yI(e.a,!0,B.af(d.c,e.c,f),e.d,e.e,e.f,B.af(d.r,e.r,f),e.w,e.x)},
c9f(d){return!0},
c6T(d){return D.a9m},
bGM(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pM(w,f,g,e)},
bIK(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5U(),x.dv)
v.toString
w=A.kE(d.b,e.b,f,A.c5W(),x.bN)
w.toString
return new A.QF(v,w)},
bWs(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n8(t,w,v,u)},
c0J(d,e,f){var w,v,u,t=B.af(d.a,e.a,f)
t.toString
w=B.af(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nw(t,w,v,u)},
bWr(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pF(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.bWp(B.byd(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0p(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c0I(d,e,f){var w,v,u,t,s,r=B.af(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pF(w.b,v.b,f)
u.toString
t=B.cv(w.c,v.c,f)
t=A.c0G(B.byd(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.af(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a0p(),x.S)
if(u==null)u=v==null?C.E:null
return new A.ln(r,e.f,e.r,t,e.x,u,v,w,s)},
bWp(d,e,f,g,h,i){return new A.a74(f,!1,g,i,d,e)},
bWq(d){return C.d.ai(d.e,1)},
c0G(d,e,f,g,h,i){return new A.afe(f,!1,g,i,d,e)},
c0H(d){return C.d.ai(d.e,1)},
bGH(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c5T(),x.cm)
v.toString
w=A.kE(d.b,e.b,f,A.c5V(),x.es)
w.toString
return new A.Ng(v,w,!0)},
bVF(d,e,f){return new A.Np(d,e==null?4:e,f)},
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
ado:function ado(){},
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
yI:function yI(d,e,f,g,h,i,j,k,l){var _=this
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
aeR:function aeR(){},
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
a74:function a74(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
afe:function afe(d,e,f,g,h,i){var _=this
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
ai7:function ai7(){},
aib:function aib(){},
alr:function alr(){},
alN:function alN(){},
alO:function alO(){},
alQ:function alQ(){},
alR:function alR(){},
amG:function amG(){},
amF:function amF(){},
amH:function amH(){},
aqg:function aqg(){},
as8:function as8(){},
as9:function as9(){},
atN:function atN(){},
auu:function auu(){},
aut:function aut(){},
auv:function auv(){},
ayE:function ayE(){},
Ld:function Ld(){},
Le:function Le(d,e,f){this.c=d
this.d=e
this.a=f},
ayG:function ayG(d){this.a=d},
ayF:function ayF(d){this.a=d},
S6:function S6(d,e,f){this.c=d
this.e=e
this.a=f},
YU:function YU(d){var _=this
_.d=d
_.c=_.a=_.e=null},
c_d(d,e,f){var w=B.ag(f),v=w.i("ac<1,jZ>")
v=B.Q(new B.ac(f,new A.b_B(),v),v.i("as.E"))
w=w.i("ac<1,c>")
w=B.Q(new B.ac(f,new A.b_C(),w),w.i("as.E"))
return new A.adp(e,d,v,w,null)},
bSR(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7H(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tH(v,C.av,C.x,new B.kx(1),v,v,v,v,C.bD,v)
u=new A.a1J(f,d,e,u,t,!0,0,v,v,new B.br(),B.aK(x.j))
u.bl()
return u},
adp:function adp(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_B:function b_B(){},
b_C:function b_C(){},
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
bgC:function bgC(d,e){this.a=d
this.b=e},
ayH:function ayH(){},
jZ:function jZ(d,e){this.a=d
this.b=e},
o0:function o0(d,e){this.a=d
this.b=e},
ai8:function ai8(){},
ai9:function ai9(){},
aia:function aia(){},
U7:function U7(){},
AN:function AN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_D:function b_D(d){this.a=d},
b_E:function b_E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_F:function b_F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a6b(d,e){var w=d==null?B.cj(C.E,1):d
return new A.a6a(e!==!1,w)},
a1Y:function a1Y(){},
a6a:function a6a(d,e){this.a=d
this.b=e},
Nw:function Nw(){},
a6c:function a6c(){},
azc:function azc(){},
aFC:function aFC(d,e){this.a=d
this.b=e},
aiu:function aiu(){},
alK:function alK(){},
alL:function alL(){},
alS:function alS(){},
Ln:function Ln(){},
w_:function w_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hw:function hw(){},
a6g:function a6g(d){this.a=d},
a6h:function a6h(d){this.a=d},
a6i:function a6i(d){this.a=d},
Nr:function Nr(){},
Ns:function Ns(){},
a6l:function a6l(d){this.a=d},
Nu:function Nu(){},
Nv:function Nv(d){this.a=d},
a6f:function a6f(d){this.a=d},
a6e:function a6e(d){this.a=d},
Nq:function Nq(d){this.a=d},
a6j:function a6j(d){this.a=d},
a6k:function a6k(d){this.a=d},
Nt:function Nt(d){this.a=d},
Gt:function Gt(){},
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
aW1:function aW1(d){this.a=d},
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
bgI:function bgI(d,e){this.a=d
this.b=e},
bgG:function bgG(d){this.a=d},
bgH:function bgH(d,e){this.a=d
this.b=e},
bgF:function bgF(){},
bgJ:function bgJ(d){this.a=d},
bzD(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.K:d
return new A.q_(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T_:u
else w=g
v=f==null?A.ayO(!1,u,0,u,!1,D.w8):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayO(!1,u,0,u,!1,D.w8):d,j,a0,i,s,!1,p)
w.arF(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bWT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.af(d.x,e.x,f)
m.toString
w=A.bFo(d.ay,e.ay,f)
v=A.bFo(d.ch,e.ch,f)
u=B.af(d.as,e.as,f)
u.toString
t=e.CW
s=A.kE(d.cy,e.cy,f,A.a0p(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rv(d.w,e.w,f)
p=A.kE(d.a,e.a,f,A.c5S(),x.cw)
p.toString
o=B.bJi(d.db,e.db,f)
o.toString
n=B.af(d.dy.a,e.dy.a,f)
n.toString
return A.aLQ(v,m,w,r,e.z,s,new A.yH(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OS(n),!1,u,o,!0,e.cx,p)},
ayO(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
else w=e
return new A.a1R(h,w,g,i,f,!1)},
bFo(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rv(v.b,u.b,f),r=B.af(v.c,u.c,f)
r.toString
r=A.bGM(t,A.kE(v.d,u.d,f,A.a0p(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rv(d.c,e.c,f)
v=B.af(d.e,e.e,f)
v.toString
return A.ayO(!1,s,v,u,e.a,new A.Li(!1,r,w.c,!0))},
bSW(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rv(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aN(127.5),D.dw.A()>>>16&255,D.dw.A()>>>8&255,D.dw.A()&255):null
return new A.mQ(e.a,e.b,w,v)},
c9g(d){return!0},
bBI(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jw)return A.bCw(w.a,A.bzh(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dw:w},
c3B(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jw)w=A.bCw(v.a,A.bzh(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dw}return A.aAX(w,40)},
bLP(d,e,f,g,h){var w,v=A.bBI(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jw)w=A.bCw(u.a,A.bzh(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dw}u=A.aAX(w,40)
return new A.Np(v,h==null?4:h,u)},
c9e(d,e){return!0},
c5F(d,e){return Math.abs(d.a-e.a)},
c6W(d,e){var w=J.cP(e,new A.buV(d),x.bY)
w=B.Q(w,w.$ti.i("as.E"))
return w},
c6S(d,e){return-1/0},
c6R(d,e){return d.a[e].b},
bMZ(d){var w=J.cP(d,new A.buS(),x.fT)
w=B.Q(w,w.$ti.i("as.E"))
return w},
bMY(d){return A.aAX(D.dw,15)},
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
aLR:function aLR(){},
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
yH:function yH(d,e,f){this.a=d
this.b=e
this.c=f},
aLG:function aLG(d,e){this.a=d
this.b=e},
a6d:function a6d(){},
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
buV:function buV(d){this.a=d},
buU:function buU(d){this.a=d},
a83:function a83(){},
buS:function buS(){},
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
zt:function zt(d,e){this.a=d
this.b=e},
aih:function aih(){},
aii:function aii(){},
aiv:function aiv(){},
alM:function alM(){},
alP:function alP(){},
anu:function anu(){},
anv:function anv(){},
anw:function anw(){},
any:function any(){},
anz:function anz(){},
anA:function anA(){},
anB:function anB(){},
as7:function as7(){},
atM:function atM(){},
aLS:function aLS(d){this.a=d},
aLT:function aLT(){},
aLU:function aLU(){},
zu:function zu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
anx:function anx(){},
aLV:function aLV(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLY:function aLY(){},
aLW:function aLW(d,e,f){this.a=d
this.b=e
this.c=f},
aLX:function aLX(d,e,f){this.a=d
this.b=e
this.c=f},
aLZ:function aLZ(){},
vL:function vL(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a82:function a82(d,e,f){this.d=d
this.e=e
this.a=f},
acb:function acb(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.d0=f
_.fX=g
_.B=h
_.a4=_.W=_.V=null
_.Z=i
_.bD=_.aF=_.al=_.ar=$
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
byj(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ag(o),l=new B.ac(o,new A.ayR(),m.i("ac<1,G>")).jJ(0,new A.ayS()),k=e-l,j=new A.ayV(k,d,n)
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
new B.iV(o,m.i("iV<1>")).aB(0,new A.ayT(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iV(o,m.i("iV<1>")).aB(0,new A.ayU(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayR:function ayR(){},
ayS:function ayS(){},
ayV:function ayV(d,e,f){this.a=d
this.b=e
this.c=f},
ayW:function ayW(d,e,f){this.a=d
this.b=e
this.c=f},
ayT:function ayT(d,e,f){this.a=d
this.b=e
this.c=f},
ayU:function ayU(d,e,f){this.a=d
this.b=e
this.c=f},
bzh(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iV(w,B.ag(w).i("iV<1>")).aB(0,new A.aIV(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIV:function aIV(d,e){this.a=d
this.b=e},
aC9(d,e){var w,v
if(e!=null){w=B.ag(e).i("ac<1,G>")
v=B.Q(new B.ac(e,new A.aCa(),w),w.i("as.E"))
return A.c6J(d,new A.a2x(v,x.cX))}else return d},
aCa:function aCa(){},
c_Q(d,e){var w=!0
if(d!==C.f8)if(!(d===C.av&&e===C.x))w=d===C.iz&&e===C.b1
if(w)return D.Eg
else{w=!0
if(d!==C.hy)if(!(d===C.iz&&e===C.x))w=d===C.av&&e===C.b1
if(w)return D.Eh
else return D.aa3}},
NV:function NV(d,e){this.a=d
this.b=e},
a2n:function a2n(d,e){this.a=d
this.b=e},
zy:function zy(d,e){this.a=d
this.$ti=e},
anI:function anI(){},
c6J(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.cm(j.r,C.ah,k,k,h)
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
p=new B.Kz(new B.cm(t,p,k,new B.aqD([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a2x:function a2x(d,e){this.a=d
this.b=0
this.$ti=e},
b37:function b37(){},
c7r(d,e){var w
if(d==="expense")return!0
if(d==="revenue")return!1
w=B.iW(C.c.aL(e),null)
if(w!=null&&w>=1800&&w<=1999)return C.e.af(w,100)<90
return!1},
bCK(d){switch(d){case"revenue":return"Erl\xf6s"
case"expense":return"Aufwand"
case"liability":return"Privat/Kapital"
case"asset":return"Bestand"
default:return d}},
bz5(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fQ))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bSZ(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAX(d,e){var w=1-e/100
return B.aH(d.gfI(d),C.d.aN(d.gNZ()*w),C.d.aN(d.gGd()*w),C.d.aN(d.gKq()*w))},
bGK(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bz6(d){var w=d.a,v=w?A.b_A(d.b):0,u=w?A.b_A(d.c):0,t=w?A.b_A(d.d):0
return new B.ai(v,u,t,w?A.b_A(d.e):0)},
bY6(d){var w
if(d.c===0){d.seX(null)
w=B.c4(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bA_(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.seX(f.mM(0,g))}else{w=e==null?C.K:e
d.r=w.gq(w)
d.seX(null)}},
b_A(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kE(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kd(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kd(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c82(d,e,f){return C.d.aN(d+(e-d)*f)},
bCw(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7Q.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.m:C.a4
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bW(t.x,C.m,s,18),C.aM],w))
v.push(B.at(new B.dK(t.c,!1,s),1))
v=B.ah(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.I,B.i(t.d,s,1,C.af,s,B.bA(u==null?C.h:u,22,C.F),s,s,s)],w)
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
if(q==null){u=D.aqN
w=1
break}if(x.f.b(q)){u=B.cW(q,s,r)
w=1
break}u=D.at1
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
break}u=D.aqt
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
break}u=D.aqS
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
o=A.aGJ(q)
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
o=A.bVD(q)
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
o=A.bVC(q)
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
return new B.tp(d.a)}if(d instanceof B.NJ){w=A.c7p(d.b)
v=""+d.a
return new B.tp(w==null?"Edge Function fehlgeschlagen ("+v+")":w+" ("+v+")")}return new B.Be("Unerwarteter Fehler: "+B.j(d))},
$iaGt:1}
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
A.aBy.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCG.prototype={
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
A.yF.prototype={
H3(d){return this.arm(0)},
arm(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H3=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sea(0,C.dC)
s=t.r
r=s.aI(0,$.qV(),x.P)
p.a=null
w=3
return B.k(B.pn(new A.aGn(p,t,r),x.H),$async$H3)
case 3:t.sea(0,f)
q=t.f
if(q.ghd(q)==null){q=$.bxV()
s=s.e
s===$&&B.a()
s.c_(q)
s.c_($.bEd())
s.c_($.bxU())}u=p.a
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
return B.k(B.pn(new A.aGm(q,t,s),x.H),$async$LF)
case 3:t.sea(0,e)
r=t.f
u=r.ghd(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LF,v)}}
A.vc.prototype={
U(){return new A.alH(D.AW)}}
A.x4.prototype={
L(){return"_Filter."+this.b}}
A.alH.prototype={
gSn(){var w=this.x
return w===$?this.x=this.a.d:w},
p(d){var w=this,v=null,u=w.gbU(),t=u.aj($.qV(),x.P),s=u.aj($.bxU(),x.e)
u=$.dC()
return B.de(D.a9V,v,B.qf(B.dl(B.b([new B.fD("Zeitraum",u.ak(t.a)+" \u2013 "+u.ak(t.b),v,v),C.O,new A.alG(w.w,w.gSn(),new A.bd4(w),new A.bd5(w),v),C.aD,B.dd(s,new A.bd6(w),new A.bd7(),new A.bd8(),!1,!0,!1,x.m,x.l)],x.p),v,C.cH,v,C.G,!1),C.m,new A.bd9(w)),v,v,v)},
asG(d){var w=B.ag(d).i("b4<1>")
w=B.Q(new B.b4(d,new A.bd1(this),w),w.i("t.E"))
return w}}
A.alG.prototype={
p(d){var w,v=this,u=null,t=v.c
t=B.b([new A.wZ("Alle",t===D.AW,new A.bcY(v),u),new A.wZ("Ausgaben",t===D.ZX,new A.bcZ(v),u),new A.wZ("Erl\xf6se",t===D.ZY,new A.bd_(v),u),new A.wZ("Privat",t===D.ZZ,new A.bd0(v),u)],x.p)
w=v.d
if(w!=null)t.push(new A.wZ("Konto "+w+" \xd7",!0,v.f,u))
return B.jP(C.cb,t,C.df,6,8)}}
A.wZ.prototype={
p(d){var w=null,v=this.d,u=this.c,t=v?C.aK:C.a7,s=B.au(9999),r=B.au(9999),q=B.au(9999),p=B.cj(v?C.m:C.a4,1)
return B.bx(w,!0,w,B.dA(!1,C.W,!0,s,B.eb(!1,r,!0,B.aO(w,B.i(u,w,w,w,w,B.y(C.h,13,C.F),w,w,w),C.q,w,w,new B.aD(w,w,p,q,w,w,C.B),w,w,w,w,C.fN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,w),C.q,t,0,w,w,w,w,w,C.bi),!1,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,"Filter "+u,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.M,w)}}
A.IN.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.c,j=k.b
if(j.length===0)return D.aOW
w=this.d
if(w.length===0)return D.aOX
v=B.ag(w).i("b4<1>")
u=new B.b4(w,new A.bgT(),v).fa(0,0,new A.bgU())
t=new B.b4(w,new A.bgV(),v).fa(0,0,new A.bgW())
s=new B.b4(w,new A.bgX(),v).fa(0,0,new A.bgY())
r=new B.b4(w,new A.bgZ(),v).gt(0)
v=w.length
q=$.dk()
p=q.ak(t)
o=q.ak(Math.abs(u))
q=s===0?"":" \xb7 Privat "+q.ak(s)
n=x.p
q=B.b([B.i(""+v+" Buchungen \xb7 Erl\xf6se "+p+" \xb7 Aufwand "+("-"+o)+q,l,l,l,l,B.y(C.h,14,C.F),l,l,l)],n)
k=k.a-j.length
if(k>0)C.b.K(q,B.b([C.aN,B.i(""+k+" weitere Buchungen im Zeitraum werden nicht angezeigt \u2014 die Liste ist serverseitig begrenzt. Zeitraum eingrenzen, um sie zu sehen.",l,l,l,l,B.y(C.o,12,C.l),l,l,l)],n))
if(r>0)C.b.K(q,B.b([C.aN,B.i(""+r+" Buchungen sitzen auf einem Sammelkonto: sevDesk hat zu ihnen kein Konto mitgeliefert, das im Kontenstamm steht. Das Konto ist dort nach Steuersatz gesetzt, nicht \xfcbernommen.",l,l,l,l,B.y(C.a5,12,C.l),l,l,l)],n))
k=B.b([B.bj(l,B.a7(q,C.z,C.f,C.i),C.a7,l,C.D,l,l,3),C.O],n)
for(j=w.length,m=0;m<w.length;w.length===j||(0,B.J)(w),++m)C.b.K(k,B.b([new A.aiN(w[m],l),C.I],n))
return B.a7(k,C.aa,C.f,C.i)}}
A.aiN.prototype={
p(d){var w,v,u,t,s,r,q,p=null,o=this.c,n=o.f
if((n==null?p:C.c.aL(n).length!==0)===!0){n.toString
n=C.c.aL(n)}else n="Ohne Bezeichnung"
w=o.e
v=o.c
u=x.p
n=B.ah(B.b([B.at(B.i(n,p,2,C.af,p,B.y(C.h,14,C.F),p,p,p),1),C.an,A.bFr(v,o.r,w)],u),C.z,p,C.f,C.i,0,p,p)
w=B.i($.dC().ak(o.b)+" \xb7 "+v+" "+o.d+" \xb7 "+A.bCK(w),p,1,C.af,p,B.y(C.o,12,C.l),p,p,p)
v=C.d.ai(o.y,1)
t=$.dk()
s=t.ak(o.w)
t=t.ak(o.x)
r=o.gam2()
q=o.Q
q=q==null?"":" #"+q
q=B.b([n,C.aN,w,C.b6,B.i("USt "+v+" % ("+s+") \xb7 brutto "+t+" \xb7 "+r+q,p,1,C.af,p,B.y(C.o,12,C.l),p,p,p)],u)
if(o.z==="sevdesk"&&o.as==null)C.b.K(q,B.b([C.aN,B.ah(B.b([D.add,C.c9,B.at(B.i("Konto nach Steuersatz gesetzt, nicht aus sevDesk \xfcbernommen.",p,p,p,p,B.y(C.a5,11,C.l),p,p,p),1)],u),C.j,p,C.f,C.i,0,p,p)],u))
return B.bj(p,B.a7(q,C.z,C.f,C.i),p,p,C.cP,p,p,3)}}
A.x7.prototype={
p(d){var w=null
return B.bj(w,B.ah(B.b([B.bW(this.e,this.d,w,w),C.an,B.at(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.z,w,C.f,C.i,0,w,w),C.a7,w,C.D,w,w,3)}}
A.yG.prototype={
dg(d,e){var w=null,v=e.aj($.qV(),x.P),u=e.aj($.bxV(),x.aN)
return B.qf(B.dl(B.b([new B.fD("Finanzen","Dashboard",new A.ahn(e.aj($.bxS(),x.c).gje(),new A.aGz(this,d,e),new A.aGA(this,d,e),new A.aGB(d),new A.aGC(d),new A.aGD(d),new A.aGE(this,d,e,v),w),w),C.aD,new A.ap5(v,w),C.ca,D.agc,C.ca,B.dd(u,new A.aGF(),new A.aGG(),new A.aGH(),!1,!0,!1,x.d,x.l)],x.p),w,C.cH,w,C.G,!1),C.m,new A.aGI(e))},
Jy(d,e){return this.aM6(d,e)},
aM6(d,e){var w=0,v=B.q(x.H),u,t,s,r,q,p,o,n,m
var $async$Jy=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:n=$.bxS()
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
o=s?C.L:D.a7w
n.be(B.c2(null,null,null,null,null,C.r,null,B.i(p,null,null,null,null,null,null,null,null),null,o,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jy,v)},
Bq(d,e){return this.axt(d,e)},
axt(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bq=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bxS().ghP(),x.F).LF(),$async$Bq)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.aB2)
w=1
break}t=B.oL(C.v,10)
w=4
return B.k($.bPb().u2(s,"finanzauswertung.pdf",t,null,null,null),$async$Bq)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bq,v)},
Br(d,e,f){return this.aJG(d,e,f)},
aJG(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Br=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jd(null,null,!0,null,new A.aGw(f,d),d,null,!0,!0,x.cJ),$async$Br)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nW(e.aI(0,$.bX(),x.A))
p=f.a
o=f.b
n=$.dC()
m=n.ak(p)
n=n.ak(o)
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
A.ahn.prototype={
p(d){var w=this,v=null,u=A.Wi(C.m,F.i0,C.m,w.x,"Freigabe f\xfcr Auswertung anfordern"),t=A.Wi(v,D.abZ,v,w.r,"Gesellschafter-Freigaben"),s=A.Wi(v,D.aal,v,w.w,"Einzelbuchungen ansehen"),r=w.c,q=A.Wi(v,D.y4,v,r?v:w.d,"sevDesk synchronisieren"),p=A.Wi(C.a5,C.jl,C.a5,r?v:w.e,"PDF-Export")
return B.ah(B.b([u,C.aM,t,C.aM,s,C.aM,q,C.aM,p,C.aM,A.Wi(C.ac,C.fS,C.ac,r?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.H,0,v,v)}}
A.amQ.prototype={
p(d){var w,v=this,u=null,t=B.au(12),s=B.au(12),r=B.au(12),q=v.w
if(q==null)q=C.a4
q=B.cj(q,1)
w=v.r
if(w==null)w=C.h
return B.wK(B.dA(!1,C.W,!0,t,B.eb(!1,s,!0,B.aO(u,B.bW(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a7,0,u,u,u,u,u,C.bi),u,v.d,u,u)}}
A.ap5.prototype={
dg(d,e){var w=null,v=this.e,u=$.dC(),t=x.p
return B.bj(w,B.a7(B.b([D.a92,C.I,B.ah(B.b([D.acR,C.at,B.at(B.i(u.ak(v.a)+" \u2013 "+u.ak(v.b),w,w,w,w,B.y(C.h,16,C.F),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.jP(C.cb,B.b([new A.Jh("Monat",new A.bjx(e),w,w),new A.Jh("Jahr (YTD)",new A.bjy(e),w,w),new A.Jh("Zeitraum w\xe4hlen \u2026",new A.bjz(this,d,e),D.ab_,w)],t),C.df,6,8)],t),C.z,C.f,C.i),w,w,C.D,w,w,3)},
IT(d,e){return this.aIA(d,e)},
aIA(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.ba(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awD(new A.bjw(),d,B.bR(B.b0(t)-5,1,1,0,0,0,0),new B.lQ(s.a,s.b,x.bz),B.bR(B.b0(t)+1,1,1,0,0,0,0),C.e5),$async$IT)
case 2:r=g
if(r!=null)e.aI(0,$.qV().ghP(),x.V).uk(0,new E.lW(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IT,v)}}
A.Jh.prototype={
p(d){var w=null,v=B.au(9999),u=B.au(9999),t=B.au(9999),s=B.cj(C.a4,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bW(p,C.h,w,14),C.aM],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.F),w,w,w))
return B.dA(!1,C.W,!0,v,B.eb(!1,u,!0,B.aO(w,B.ah(q,C.j,w,C.f,C.H,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.B),w,w,w,w,C.fN,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a7,0,w,w,w,w,w,C.bi)}}
A.JH.prototype={
p(d){var w,v,u,t,s,r=null,q=x.p,p=B.b([B.jv(new A.bqf(this)),C.ca,D.a98,C.t],q),o=this.c.w
if(o.length===0)p.push(B.bj(r,B.ah(B.b([D.adj,C.an,B.at(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",r,r,r,r,B.y(C.o,14,C.l),r,r,r),1)],q),C.j,r,C.f,C.i,0,r,r),C.a7,r,C.D,r,r,3))
else{w=B.b([],q)
for(v=o.length,u=0;u<o.length;o.length===v||(0,B.J)(o),++u){t=o[u]
s=t.c
C.b.K(w,B.b([new A.ahl(t.a,t.b,s,A.bCK(s),t.d,new A.bqg(d,t),r),C.I],q))}p.push(B.a7(w,C.j,C.f,C.i))}return B.a7(p,C.aa,C.f,C.i)}}
A.ahl.prototype={
p(d){var w,v=this,u=null,t=v.e,s=t==="revenue",r=s?C.aK:C.a7,q=B.cj(s?C.m:C.a4,1),p=B.au(4),o=v.c,n=x.p
t=B.b([B.aO(C.U,B.i(C.c.a1(o,0,1),u,u,u,u,B.bA(C.h,14,C.p),u,u,u),C.q,u,u,new B.aD(r,u,q,p,u,u,C.B),u,36,u,u,u,u,u,36),C.an,B.at(B.a7(B.b([B.i(o+" \xb7 "+v.d,u,1,C.af,u,B.y(C.h,14,C.F),u,u,u),B.i(v.f,u,u,u,u,B.y(C.o,12,C.l),u,u,u)],n),C.z,C.f,C.i),1),A.bFr(o,v.r,t)],n)
C.b.K(t,B.b([C.c9,C.F3],n))
w=B.bj(u,B.ah(t,C.j,u,C.f,C.i,0,u,u),u,u,C.cP,u,u,3)
return B.bx(u,!0,u,B.eb(!1,B.au(12),!0,w,u,!0,u,u,u,u,u,u,u,u,u,u,u,v.w,u,u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Einzelbuchungen zu Konto "+o+" anzeigen",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u)}}
A.In.prototype={
p(d){var w=null
return B.bj(C.a5,B.ah(B.b([D.adS,C.an,B.at(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fi,w,C.D,w,w,3)}}
A.a21.prototype={
p(d){var w=null,v=this.d,u=A.c7r(v,this.e),t=Math.abs(this.c),s=$.dk(),r=s.ak(t),q=u?"-"+r:r,p=B.y(A.c64(v),15,C.F)
return B.i(q,w,w,w,u?"Ausgabe "+s.ak(t):A.bCK(v)+" "+s.ak(t),p,w,w,w)}}
A.a7R.prototype={
dg(d,e){return B.dd(e.aj($.bEd(),x.cn),new A.aLD(),new A.aLE(),new A.aLF(),!1,!0,!1,x.X,x.l)}}
A.II.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ayn,C.t,B.jv(new A.bgt(v,q,100-t.w.a,w,p)),C.t,new A.am7(u),C.aD,D.aym,C.t,new A.aig(t,u),C.aD,D.ayg,C.t,B.bx(u,!0,u,B.ka(u,B.bj(u,new A.Ux(t,220,u),u,u,C.D,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgu(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.ay9,C.t,B.bx(u,!0,u,B.ka(u,new A.UO(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgv(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aD,D.ayd,C.t,new A.anS(t,u),C.aD,D.ayb,C.t,new A.ak5(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aD,D.ayi,C.t,new A.atJ(t,u)],s))
return B.a7(r,C.aa,C.f,C.i)}}
A.am7.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.o,11,C.l).cB(1.35),w,w,w)}}
A.anm.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.a5:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgw(m,d):l
r=x.p
q=B.b([B.at(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.o,10,C.p).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cj(C.a5,0.8)
n=B.au(4)
q.push(B.aO(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a5,9,C.p),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.B),l,l,l,l,C.nv,l,l,l))}q=B.b([B.ah(q,C.j,l,C.f,C.i,0,l,l),C.aN,B.Nn(C.d1,B.i(m.d,l,l,l,l,B.bA(w,22,C.p),l,l,l),C.hJ)],r)
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
v=w?C.ac:C.a5
u=v.em(0.12)
t=B.cj(v,0.7)
s=B.au(4)
return B.aO(r,B.ah(B.b([B.bW(w?F.aa9:D.aa8,v,r,10),C.YP,B.i(this.c+" "+C.d.ai(q,1)+" %",r,r,r,r,B.y(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.H,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.B),r,r,r,r,C.nv,r,r,r)}}
A.Z5.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.jJ(j,new A.bpj())
t=C.b.jJ(j,new A.bpk())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bpl(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a6b(k,!1)
w=B.b([A.aLQ(k,2,A.ayO(!1,C.m.em(0.16),0,k,!0,D.w8),C.m,0.35,k,D.E7,k,!0,!1,!0,!1,D.Fv,!1,10,D.Yh,!0,C.lz,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OR(A.bzD(k,k,k,D.amH,l,D.BW,D.E3,D.E8,w,D.agp,k,m,k,n,D.XB,D.amI,D.a9p),C.am,C.a1,k,k)}}
A.Ux.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aO2
w=C.b.fa(p,0,new A.b6U())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayX(B.b([A.a1T(q,q,D.Bn,q,C.m,q,q,q,r.b,6),A.a1T(q,q,D.Bn,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bFp(A.ayQ(q,q,u,q,q,A.a6b(q,!1),q,new A.yI(!0,!0,q,new A.b6V(),A.a0j(),!1,q,A.awn(),A.a0j()),q,v,q,q,new A.vf(!0,new A.po(16,q,new A.ql(!0,new A.b6W(this),46,q),!0),D.kw,D.kw,new A.po(16,q,new A.ql(!0,new A.b6X(p),26,q),!0)))),this.d,q)},
aLm(d){if(Math.abs(d)>=1000)return C.d.ai(d/1000,1)+" k"
return C.d.ai(d,0)}}
A.UO.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ac(v,new A.b7U(),w),x.i)
C.b.K(o,new B.ac(u,new A.b7V(),w))
t=C.b.fa(o,0,new A.b7W())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayX(B.b([A.a1T(q,q,q,q,C.m,q,q,q,v[s],14),A.a1T(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bFp(A.ayQ(q,q,n,q,q,A.a6b(q,!1),q,D.E8,q,o,q,q,new A.vf(!0,D.kw,D.kw,D.kw,new A.po(16,q,new A.ql(!0,new A.b7X(p),26,q),!0)))),this.d,q)
return this.e?r:B.bj(q,r,q,q,C.D,q,q,3)}}
A.anS.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aO1
w=new B.ac(l,new A.bhc(),B.ag(l).i("ac<1,G>")).jJ(0,new A.bhd())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.p),m,m,m)
p=$.dk()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hW(C.aj,C.f,C.i,C.j,m,C.aR,m,0,B.b([new B.jr(1,C.dk,B.a7(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ak(r.f),m,m,m,m,B.y(C.o,12,C.aG),m,m,m)],v),C.z,C.f,C.i),m),C.at,B.i(p.ak(o),m,m,m,m,B.bA(C.h,16,C.p),m,m,m)],v),m),C.cY,new B.DA(new B.d5(n,n,n,n),C.by,B.zv(C.a4,m,8,C.d.bo(o/w,0,1),D.Bc),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.M(r)===B.M(q)&&B.a0n(r.gbs(),q.gbs())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bj(m,B.a7(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.ak5.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.at(new A.Cm("Aktive Kunden",""+s,u),1)
w=B.at(new A.Cm("K\xe4ufe",""+t.a,u),1)
v=$.dk()
return B.bj(u,B.ah(B.b([s,w,B.at(new A.Cm("\xd8-Warenkorb",v.ak(t.d),u),1),B.at(new A.Cm("Umsatz/Kunde",v.ak(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.Cm.prototype={
p(d){var w=null
return B.a7(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.o,10,C.p).fw(0.6),w,w,w),C.b6,B.i(this.d,w,w,w,w,B.bA(C.h,20,C.p),w,w,w)],x.p),C.z,C.f,C.H)}}
A.atJ.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ac(q,new A.bry(),B.ag(q).i("ac<1,G>")).jJ(0,new A.brz()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hW(C.aj,C.f,C.i,C.j,r,C.aR,r,0,B.b([new B.jr(1,C.dk,B.i(u.b,r,1,C.af,r,B.y(C.h,13,C.p),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.o,12,C.F),r,r,r),B.i($.dk().ak(t),r,r,r,r,B.y(C.h,13,C.p),r,r,r)],o),r),C.aN,new B.DA(new B.d5(s,s,s,s),C.by,B.zv(C.a4,r,6,C.d.bo(t/p,0,1),D.Bc),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.M(u)===B.M(s)&&B.a0n(u.gbs(),s.gbs())
else s=!0
if(!s)t.push(C.I)
C.b.K(n,t)}return B.bj(r,B.a7(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.x2.prototype={
p(d){var w=null
return B.bj(w,B.i(this.c,w,w,w,w,B.y(C.o,13,C.l),w,w,w),C.a7,w,C.D,w,w,3)}}
A.aig.prototype={
dg(d,e){return B.dd(e.aj($.bxT(),x.fM),new A.b5i(this,d,e),new A.b5j(),new A.b5k(),!1,!0,!1,x.h,x.l)}}
A.Bm.prototype={
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
t.kt(0,t.a.y0(C.aV,C.bL,s))}}this.J(new A.b56())},
aFa(){this.a4e(D.aqP)
this.c.P(x.q).f.be(D.aBm)},
I9(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I9=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b7(a1)
for(e=0;e<8;++e)a2.E(0,D.pI[e].a)
q=a2
t=4
w=7
return B.k($.aGg.cf().zi(B.b(["csv","txt"],x.s),C.xQ,!0),$async$I9)
case 7:p=a5
a2=p
o=a2==null?null:J.Kv(a2.a).c
if(o==null){w=1
break}n=C.aH.adM(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C0.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.axa(l,B.bP("[;,\t]",!0,!1,!1))
if(J.cd(k)<2)continue
j=C.c.aL(J.a2(k,0)).toLowerCase()
i=J.CQ(q,j)?j:D.at2.h(0,j)
if(i==null)continue
d=C.c.aL(C.b.n4(J.bSo(k,1)))
d=B.b6(d,"\u20ac","")
d=B.b6(d," ","")
d=B.b6(d,".","")
h=B.b6(d,",",".")
g=B.it(h)
if(g!=null)J.fs(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.aB_)
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
w=t}for(;;)switch(w){case 0:q.J(new A.b57(q))
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
q.c.P(x.q).f.be(D.aB3)
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
if(q.c!=null)q.J(new A.b58(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ik,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bA(C.h,18,C.p),r,r,r),p=s.f?r:new A.b5a(s,d),o=s.d
o===$&&B.a()
p=B.fR(D.acT,B.i("Stichtag: "+C.c.a1(o.el(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.at(B.fR(D.ae2,D.aH8,o?r:s.gaEc(),r),1)
v=x.p
w=B.b([p,C.I,B.ah(B.b([w,C.at,B.at(B.fR(D.adP,D.aGY,o?r:s.gaF9(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pI[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f6(r,C.aX,!1,r,!0,C.r,r,B.fj(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b2,r,r,r,r,C.iB,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.av,r,C.a6,r,r,r,r),C.I],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.o,11,C.l),r,r,r))
p=B.bN(B.f5(B.a7(w,C.aa,C.f,C.H),r,C.G),r,380)
o=s.f
w=B.dM(C.cZ,r,r,o?r:new A.b5b(d),r,r)
o=o?r:s.gaEU()
t=B.dF(C.m,C.h,r,r,r,r,r)
return B.lI(B.b([w,B.dY(s.f?F.YS:C.eB,o,t)],v),C.n,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.M(this)===B.M(e)&&B.a0n(this.gbs(),e.gbs())
else w=!0
return w},
gv(d){return(B.f3(B.M(this))^B.bNv(this.gbs()))>>>0},
j(d){B.bGF()
return B.M(this).j(0)}}
A.Lj.prototype={
U(){return new A.Ua(B.A(x.S,x.J),new A.az_(B.A(x.x,x.T)),null,null)}}
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
w.push(A.ayX(s.c,s.d,!1,r,s.a))}return d.aQy(w)},
a27(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UZ(t.ch)
if(r)s=w.a
r=t.y
t=t.aRs(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQz(A.byk(!1,!0,!0,v.d,v.c,u.gasX(),v.f,v.e))}return t},
asY(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gage()||e==null||e.a==null){w=v.cy
v.J(w.gaPX(w))
return}v.J(new A.b5n(v,e))},
lv(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a27(),new A.b5o(w)))}}
A.o1.prototype={
VC(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayQ(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRs(d,e){return this.VC(null,null,d,e)},
aQz(d){return this.VC(null,d,null,null)},
aQy(d){return this.VC(d,null,null,null)},
Xx(d,e,f){var w,v,u,t=A.kE(d.ch,e.ch,f,A.c5X(),x.dB),s=B.af(d.CW,e.CW,f),r=A.bGN(d.d,e.d,f),q=A.bIK(d.e,e.e,f),p=A.bGL(d.c,e.c,f),o=e.a
o=A.a6b(B.a29(d.a.b,o.b,f),o.a)
w=B.af(d.y,e.y,f)
v=B.af(d.x,e.x,f)
u=B.af(d.z,e.z,f)
r=A.ayQ(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bGH(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbs(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayP.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.ayY(),B.ag(v).i("ac<1,G>")).jJ(0,new A.ayZ())
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
A.aeP.prototype={
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
A.xU.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xx(v,w,d)}}
A.aic.prototype={}
A.aij.prototype={}
A.aik.prototype={}
A.aim.prototype={}
A.ain.prototype={}
A.aio.prototype={}
A.aip.prototype={}
A.aiq.prototype={}
A.air.prototype={}
A.az_.prototype={
UZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uP(0,0,!1)
v=new A.zy(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uP(t,u,!0)}w=null
try{w=C.b.oY(d,new A.az0())}catch(s){return new A.uP(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ail.prototype={}
A.az1.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0f(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acJ(t,A.byj(w,t.a),u)
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
new B.iV(p,B.ag(p).i("iV<1>")).aB(0,new A.az2(t,q,r,s))
w.push(new A.a6U(q))}return w},
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
n=A.aC9(new B.cm(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e_()
k=n.e
v.drawPath((k==null?n.e=new B.mU(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSX(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B2(a5,a5,a5,a5,B.cS(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lF().a_i(a8,a7.b),a7.a),C.bu,C.x,a5,b6.c,C.bD)
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
if(v!==D.aJC)j=v===D.Zx&&s>=q
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
a2.c=a1.b}a9.We(d,new A.az3(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
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
q=B.QB(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bAk(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WT(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acJ(b2,A.byj(a8,b2.a),a8.ch)
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
A.a6U.prototype={}
A.a1S.prototype={
bn(d){var w,v=this.e,u=B.bz(d,null,x.w).w.gcP(),t=new A.az1()
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
t=new A.abZ(this.d,v,u,t,d,C.b8,new B.br(),B.aK(x.j))
t.bl()
t.Za(v.cy)
t.afI()
return t},
bx(d,e){e.sij(0,this.d)
e.sYV(this.e)
e.scP(B.bz(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.abZ.prototype={
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
u.fX.ic(w,new A.a2n(t,v),new A.w_(u.aC,u.i6,u.d0,x.Q))
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
A.ado.prototype={
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
A.yI.prototype={
gbs(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pM.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeR.prototype={
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
A.a74.prototype={
gbs(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.afe.prototype={
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
A.ai7.prototype={}
A.aib.prototype={}
A.alr.prototype={}
A.alN.prototype={}
A.alO.prototype={}
A.alQ.prototype={}
A.alR.prototype={}
A.amG.prototype={}
A.amF.prototype={}
A.amH.prototype={}
A.aqg.prototype={}
A.as8.prototype={}
A.as9.prototype={}
A.atN.prototype={}
A.auu.prototype={}
A.aut.prototype={}
A.auv.prototype={}
A.ayE.prototype={
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
u=$.bxp().MN(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fe(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lc(n,m)
if(j!=null){p.r=C.E.gq(0)
p.seX(j.mM(0,i))}else{if(k==null)k=C.K
p.r=k.gq(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c4(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.DI(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lF().ON(w.b,a1.y-a1.x)
u=$.bxp().MN(a1.z,h,a1.y,!1,a1.x,!1)
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
if(k!=null){q.r=C.E.gq(0)
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
s=B.lc(new B.r(n.fe(t.a,m,e),0),new B.r(n.fe(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
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
if(q!=null){v.r=C.E.gq(0)
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
if(j!=null){n.r=C.E.gq(0)
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
n=d.fe(o,a3,a2)
m=new B.r(n,0)
o=d.fe(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lc(m,l)
if(j!=null){n.r=C.E.gq(0)
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
fe(d,e,f){var w=f.a,v=w.f,u=w.r-v
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
am4(d){var w,v=this,u=null,t=v.d,s=A.bz6(t.d),r=t.a
r=r.a&&A.bSZ(r.b)?r.b:u
w=B.b([B.aO(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayG(w)
if(v.galJ())C.b.hA(w,s.$1(!0),new A.AN(D.Bj,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galL())C.b.hA(w,s.$1(!0),new A.AN(D.mH,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galK())C.b.hA(w,s.$1(!0),new A.AN(D.Bk,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galH())C.b.hA(w,s.$1(!0),new A.AN(D.dQ,t,new B.H(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
p(d){return B.jv(new A.ayF(this))}}
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
return B.Bb(B.b2G(0,B.aO(v.ays(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.adp.prototype={
bn(d){return A.bSR(this.f,this.r,this.e)},
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
m=r.aG$}return new A.bgC(n<1/0?n:s,t)},
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
A.bgC.prototype={}
A.ayH.prototype={}
A.jZ.prototype={
gbs(){return[this.a,this.b]}}
A.o0.prototype={}
A.ai8.prototype={}
A.ai9.prototype={
aO(d){var w,v,u
this.fq(d)
w=this.ah$
for(v=x.L;w!=null;){w.aO(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aE(d){var w,v,u
this.fj(0)
w=this.ah$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.aia.prototype={}
A.U7.prototype={
l(){var w,v,u
for(w=this.Wr$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AN.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d1
case 1:return C.dO
case 2:return C.eg
case 3:return C.fd}},
gb0c(){var w=this.d,v=A.bz6(w.d),u=A.bGK(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ae(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ae(0,new B.ai(u.a,0,u.c,0))}},
gaiz(){var w=this.d,v=A.bGK(w.a),u=A.bz6(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gew()+v.gew()}},
aXg(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lF().ON(d,f-e)
w=p.c
v=w!==D.mH
if((!v||w===D.dQ)&&p.d instanceof A.o1){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.byj(u,d)
w=new B.iV(t,B.ag(t).i("iV<1>"))
s=w.giE(w).f2(0,new A.b_D(u),x.W).fZ(0)}else{r=$.bxp()
w=!v||w===D.dQ
v=p.d
q=r.aWz(w?v.w:v.z,o,f,e)
v=B.oB(q,new A.b_E(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ag(s).i("ac<1,o0>")
w=B.Q(new B.ac(s,new A.b_F(p,e,f,o,g,d),w),w.i("as.E"))
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
q.push(B.aO(i,A.c_d(new A.ayH(),n,j.aXg(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bk||w===D.dQ)j.goD()
return new B.e8(t,i,i,B.bVH(q,C.j,s,i,C.f,C.H,0,i,i,C.aR),i)}}
A.a1Y.prototype={
gbs(){return[this.a,this.b]}}
A.a6a.prototype={
gbs(){return[this.a,this.b]}}
A.Nw.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a6c.prototype={
gac3(d){return!1},
gbs(){return[!1,!1,!1,!1]}}
A.azc.prototype={}
A.aFC.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aiu.prototype={}
A.alK.prototype={}
A.alL.prototype={}
A.alS.prototype={}
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
A.a6g.prototype={
gdN(){return this.a.b}}
A.a6h.prototype={
gdN(){return this.a.b}}
A.a6i.prototype={
gdN(){return this.a.b}}
A.Nr.prototype={}
A.Ns.prototype={}
A.a6l.prototype={
gdN(){return this.a.b}}
A.Nu.prototype={}
A.Nv.prototype={
gdN(){return this.a.b}}
A.a6f.prototype={
gdN(){return this.a.b}}
A.a6e.prototype={
gdN(){return this.a.b}}
A.Nq.prototype={
gdN(){return this.a.b}}
A.a6j.prototype={
gdN(){return this.a.gdN()}}
A.a6k.prototype={
gdN(){return this.a.gdN()}}
A.Nt.prototype={
gdN(){return this.a.gdN()}}
A.Gt.prototype={
Za(d){this.V=d.b
this.W=d.c
this.a4=d.d},
afI(){var w=this,v=null,u=w.al=B.bA0(v,v)
u.ay=new A.aVQ(w)
u.ch=new A.aVR(w)
u.CW=new A.aVS(w)
u.cy=new A.aVT(w)
u.cx=new A.aVU(w)
u=w.aF=B.Hh(v,-1,v)
u.B=new A.aVV(w)
u.Z=new A.aVW(w)
u.V=new A.aVX(w)
u=w.bD=B.a8b(v,w.a4,v)
u.p3=new A.aVY(w)
u.p4=new A.aVZ(w)
u.RG=new A.aW_(w)},
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
w=v.al
w===$&&B.a()
w.oB(d)}else if(x.gJ.b(d))v.l8(new A.a6k(d))},
gNg(d){return new A.aW0(this)},
gNi(d){return new A.aW1(this)},
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
this.fj(0)},
$ijy:1}
A.OR.prototype={
U(){return new A.WD(B.b([],x.r),B.A(x.S,x.J),new A.aLS(B.A(x.y,x.dj)),null,null)}}
A.WD.prototype={
p(d){var w,v=this,u=v.a4J(),t=v.CW
t.toString
t=v.abA(t.au(0,v.gfs().gq(0)))
w=v.abA(u)
v.a.toString
return new A.Le(new A.a82(t,w,null),u,null)},
abA(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ag(w).i("ac<1,ec>")
w=B.Q(new B.ac(w,new A.bgI(this,d),v),v.i("as.E"))
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
if(w){v.J(new A.bgG(v))
return}v.J(new A.bgH(v,e))},
lv(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4J(),new A.bgJ(w)))}}
A.q_.prototype={
Xx(d,e,f){var w,v,u,t,s,r,q=B.af(d.f,e.f,f),p=B.af(d.r,e.r,f),o=B.af(d.w,e.w,f),n=B.af(d.x,e.x,f),m=B.af(d.y,e.y,f),l=B.af(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a6b(B.a29(d.a.b,j.b,f),j.a)
w=A.bGH(d.at,e.at,f)
v=A.bGL(d.c,e.c,f)
u=A.bGN(d.d,e.d,f)
t=A.bIK(d.e,e.e,f)
s=A.kE(d.ch,e.ch,f,A.c84(),x.cz)
s.toString
r=A.kE(d.CW,e.CW,f,A.c83(),x.bO)
r.toString
u=A.bzD(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VD(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bzD(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRE(d,e,f,g){return this.VD(null,null,d,e,f,g,null)},
aR3(d){var w=null
return this.VD(w,d,w,w,w,w,w)},
aRp(d,e){var w=null
return this.VD(d,w,w,w,w,w,e)},
gbs(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
arF(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oY(n.a,new A.aLR())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
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
return A.aLQ(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
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
A.yH.prototype={
gbs(){return[this.a,this.b,this.c]}}
A.aLG.prototype={
L(){return"LabelDirection."+this.b}}
A.a6d.prototype={
gbs(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.F0.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a83.prototype={
gbs(){return[4,C.fO,16,D.xN,0,120,A.c86(),!1,!1,!1,0,C.J,A.c85()]}}
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
A.zt.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xx(v,w,d)}}
A.aih.prototype={}
A.aii.prototype={}
A.aiv.prototype={}
A.alM.prototype={}
A.alP.prototype={}
A.anu.prototype={}
A.anv.prototype={}
A.anw.prototype={}
A.any.prototype={}
A.anz.prototype={}
A.anA.prototype={}
A.anB.prototype={}
A.as7.prototype={}
A.atM.prototype={}
A.aLS.prototype={
UZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yn
u=new A.zy(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zu(s,r,q,t,!0)}w=null
try{w=C.b.oY(d,new A.aLT())}catch(p){return D.yn}v=null
try{v=C.b.oY(w.a,new A.aLU())}catch(p){return D.yn}o=v.a
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
if(f<m)m=f}e=new A.zu(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zu.prototype={
gbs(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.anx.prototype={}
A.aLV.prototype={
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
aSM(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bz5(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.ZL(o,e,u,f)
s=p.ajN(o,e,t,u,f)
r=p.ZN(o,e,t,u,f,!0)
q=p.ajM(o,e,t,u,f)
p.aSP(d,s,p.ZK(o,e,t,u,f,!0),f,e)
p.aSJ(d,q,r,f,e)
p.aSN(d,t,e)
p.aSL(d,t,e,f)}},
aSQ(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bz5(a5.a),a8=A.bz5(a6.a)
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
n=a2.fe(i,a3,b2)
m=a2.dI(h,a3,b2)
e=a2.fe(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gq(0)
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
if(!q.k(0,D.fQ)&&t.$2(q,e)){p=this.fe(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aeb(s,q,new B.r(p,o))}}},
aSY(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fT(b3,new A.aLY())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.ZR(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fe(j.a,w,b4)
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
if(a6!=null){f.r=C.E.gq(0)
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
ajO(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cm($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.Y(a3),e=f.gt(a3),d=i.fe(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.az(new B.fe(d,a0))
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
s=new B.Ml(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZN(d,e,f,g,h,i){var w=this,v=B.Na(f),u=J.Y(g),t=w.fe(u.h(g,u.gt(g)-1).a,d,h),s=d.b
v.az(new B.ct(t,s))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,s))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pw())
return v},
ajN(d,e,f,g,h){return this.ZN(d,e,f,g,h,!1)},
ZK(d,e,f,g,h,i){var w=this,v=B.Na(f),u=J.Y(g),t=w.fe(u.h(g,u.gt(g)-1).a,d,h)
v.az(new B.ct(t,0))
t=w.fe(u.h(g,0).a,d,h)
v.az(new B.ct(t,0))
v.az(new B.ct(w.fe(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.az(new B.pw())
return v},
ajM(d,e,f,g,h){return this.ZK(d,e,f,g,h,!1)},
aSP(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bA_(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.i0(e,r.r)},
aSJ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bA_(s,q.b,q.c,new B.I(v,0,u,t))
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
u.z=new B.zD(C.aw,w.c*0.57735+0.5)
d.a.i0(A.aC9(e,f.cy).e9(w.b),this.f)},
aSL(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ix:C.e9
q.e=C.ez
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
A.bA_(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bY6(t)
d.a.i0(A.aC9(e,f.cy),s.f)},
aSW(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bMZ(b1),b3=J.Y(b2)
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
o+=w.gbT(w)}b3=a7.fe(b7.a,a9,b9)
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
t=A.bMY(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lF().KB(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lF().KB(new B.H(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.We(0,new A.aLW(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.c_Q(q.r,q.w)
A:{if(D.Eg===a5){a6=a3
break A}if(D.Eh===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.We(0,new A.aLX(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZR(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fe(v[0].a,e,f)
return this.fe(v[v.length-1].a,e,f)-w},
WT(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ake(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fT(t,new A.aLZ())
return t.length===0?null:t},
ake(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fQ))continue
p=u.$2(e,new B.r(this.fe(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hA(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qu(s,f,g,C.b.hz(w,v),v.a,v.b)}else return null}}
A.vL.prototype={}
A.a82.prototype={
bn(d){var w,v=this.e,u=B.bz(d,null,x.w).w.gcP(),t=new A.aLV()
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
w.a=D.a_Q
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.E.gq(0)
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
t=new A.acb(this.d,v,u,t,d,C.b8,new B.br(),B.aK(x.j))
t.bl()
t.Za(v.cx)
t.afI()
return t},
bx(d,e){e.sij(0,this.d)
e.sYV(this.e)
e.scP(B.bz(d,null,x.w).w.gcP())
e.B=d
e.bc()}}
A.acb.prototype={
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
u.fX.ic(w,new A.a2n(t,v),new A.w_(u.aC,u.i6,u.d0,x.C))
s.restore()},
a_b(d){var w=this,v=w.gC(0)
return new A.OT(w.fX.WT(d,v,new A.w_(w.aC,w.i6,w.d0,x.C)))}}
A.NV.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a2n.prototype={
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
this.a.i0(A.aC9(w,g),f)}}
A.zy.prototype={
gbs(){return[this.a]}}
A.anI.prototype={}
A.a2x.prototype={}
A.b37.prototype={
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
if(d==null)return D.a00
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
ajV(d,e,f,g){var w=C.d.af(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qw)","C(pL)","G(G,pL)","C(eB)","~(v,fL)","G(ec,v)","vc(z)","G(G,qw)","bQ(G,tK)","pM(G)","R<~>()","v(qu,qu)","G(vP)","IN(oj)","qw(@)","vP(@)","yj(z)","wL(@)","In(B,bE)","JH(om)","II(ok)","CV(@)","ec(G)","vd(dH<vd>)","aj(G,tK)","Eo(dH<aGt>)","lW(wB<lW>)","pL(@)","G(wL)","x2(B,bE)","Bm(z)","~()","R<om>(c3<om>)","~(hw,Lk?)","xU(@)","G(ip)","C(fL)","~(v,ip)","~(@)","jZ(o0)","c(o0)","jZ(bH<v,G>)","jZ(G)","o0(jZ)","~(hw,OT?)","ec(ec)","R<oj>(c3<oj>)","zt(@)","R<ok>(c3<ok>)","tL(v)","ve(eB,G,ec,v)","rI(nb)","C(ec)","v(v,v,G)","G(fL)","~(x4)","yF(es<B?>)","fL(fL,fL,G)","ip(ip,ip,G)","mP(mP,mP,G)","Dc?(fL,v,ip,v)","E(fL)","c(G,tK)","eB(eB,eB,G)","C(G)","n8(n8,n8,G)","nw(nw,nw,G)","kW(kW,kW,G)","ln(ln,ln,G)","f(kW)","f(ln)","ec(ec,ec,G)","mQ(mQ,mQ,G)","ve(eB,G,ec,v{size:G?})","C(eB,ec)","G(r,r)","u<tL>(ec,u<v>)","x7(B,bE)","u<rI>(u<nb>)","E(nb)","v(vL,vL)"])
A.aGo.prototype={
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
r=A.buh(l.h(0,"amount_net"))
q=A.buh(l.h(0,"amount_tax"))
p=A.buh(l.h(0,"amount_gross"))
o=A.buh(l.h(0,"tax_rate"))
n=l.h(0,"source")
n=J.am(n==null?"manual":n)
m=l.h(0,"source_ref")
m=m==null?null:J.am(m)
l=l.h(0,"source_account_code")
return new A.pL(k,w,v,u,t,s,r,q,p,o,n,m,l==null?null:J.am(l))},
$S:z+27}
A.aGp.prototype={
$1(d){var w=B.cW(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qw(J.am(v==null?"":v),A.pf(w.h(0,"revenue_net")),A.pf(w.h(0,"expense_net")),A.pf(w.h(0,"result_net")))},
$S:z+14}
A.aGq.prototype={
$1(d){var w,v,u,t=B.cW(x.f.a(d),x.N,x.z),s=B.ae(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ae(t.h(0,"code"))
v=A.pf(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.d.Y(u)
if(u==null)u=0
return new A.vP(s,r,w,v,u,A.pf(t.h(0,"avg_basket")))},
$S:z+15}
A.aGr.prototype={
$1(d){var w,v=B.cW(x.f.a(d),x.N,x.z),u=B.ae(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.d.Y(w)
if(w==null)w=0
return new A.wL(u,t,w,A.pf(v.h(0,"gross")))},
$S:z+17}
A.aGK.prototype={
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
A.bv6.prototype={
$1(d){return new A.vd(d.aj($.bX(),x.A))},
$S:z+23}
A.bv7.prototype={
$1(d){return new A.Eo(d.aj($.bRF(),x.D))},
$S:z+25}
A.bwZ.prototype={
$1(d){return E.aGs()},
$S:z+26}
A.bv8.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).G7(w)},
$S:z+32}
A.bv4.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).FT(w)},
$S:z+46}
A.bv5.prototype={
$1(d){var w=d.aj($.qV(),x.P)
return d.aj($.a0R(),x.a).G2(w)},
$S:z+48}
A.bv3.prototype={
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
A.aGn.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.a0R(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGm.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.a0R(),x.a).LG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.bd9.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a.gbU()
r=$.bxU()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.bd4.prototype={
$1(d){var w=this.a
return w.J(new A.bd3(w,d))},
$S:z+55}
A.bd3.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.bd5.prototype={
$0(){var w=this.a
return w.J(new A.bd2(w))},
$S:0}
A.bd2.prototype={
$0(){return this.a.x=null},
$S:0}
A.bd8.prototype={
$0(){return D.To},
$S:88}
A.bd7.prototype={
$2(d,e){return new A.x7("Buchungen konnten nicht geladen werden: "+B.j(d),C.a5,D.Er,null)},
$S:z+77}
A.bd6.prototype={
$1(d){return new A.IN(d,this.a.asG(d.b),null)},
$S:z+13}
A.bd1.prototype={
$1(d){var w=this.a
if(w.gSn()!=null&&d.c!==w.gSn())return!1
switch(w.w.a){case 0:return!0
case 1:return d.e==="expense"
case 2:return d.e==="revenue"
case 3:w=d.e
return w!=="revenue"&&w!=="expense"}},
$S:z+1}
A.bcY.prototype={
$0(){return this.a.e.$1(D.AW)},
$S:0}
A.bcZ.prototype={
$0(){return this.a.e.$1(D.ZX)},
$S:0}
A.bd_.prototype={
$0(){return this.a.e.$1(D.ZY)},
$S:0}
A.bd0.prototype={
$0(){return this.a.e.$1(D.ZZ)},
$S:0}
A.bgT.prototype={
$1(d){return d.e==="expense"},
$S:z+1}
A.bgU.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bgV.prototype={
$1(d){return d.e==="revenue"},
$S:z+1}
A.bgW.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bgX.prototype={
$1(d){var w=d.e
return w!=="revenue"&&w!=="expense"},
$S:z+1}
A.bgY.prototype={
$2(d,e){return d+e.r},
$S:z+2}
A.bgZ.prototype={
$1(d){return d.z==="sevdesk"&&d.as==null},
$S:z+1}
A.aGI.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bxV()
if(s.e==null)B.S(B.X(y.b))
s.gcd().c_(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aGz.prototype={
$0(){return this.a.Jy(this.b,this.c)},
$S:0}
A.aGA.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
A.aGB.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.aGy(),null,w),w)},
$S:0}
A.aGy.prototype={
$1(d){return F.Dc},
$S:z+16}
A.aGC.prototype={
$0(){return B.pR(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aGD.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.aGx(),null,w),w)},
$S:0}
A.aGx.prototype={
$1(d){return D.a9j},
$S:z+6}
A.aGE.prototype={
$0(){var w=this
return w.a.Br(w.b,w.c,w.d)},
$S:0}
A.aGH.prototype={
$0(){return D.To},
$S:88}
A.aGG.prototype={
$2(d,e){return new A.In(B.j(d),null)},
$S:z+18}
A.aGF.prototype={
$1(d){return new A.JH(d,null)},
$S:z+19}
A.aGw.prototype={
$1(d){var w=null,v=this.a,u=$.dC()
v=B.i("Die Finanzauswertung f\xfcr "+u.ak(v.a)+" \u2013 "+u.ak(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lI(B.b([B.dM(C.cZ,w,w,new A.aGu(u),w,w),B.dY(F.vj,new A.aGv(u),B.dF(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vk)},
$S:56}
A.aGu.prototype={
$0(){B.bb(this.a,!1).dk(!1)
return null},
$S:0}
A.aGv.prototype={
$0(){B.bb(this.a,!1).dk(!0)
return null},
$S:0}
A.bjx.prototype={
$0(){var w=this.a.aI(0,$.qV().ghP(),x.V),v=E.aGs()
w.uk(0,v)
return v},
$S:0}
A.bjy.prototype={
$0(){var w=this.a.aI(0,$.qV().ghP(),x.V),v=new B.ba(Date.now(),0,!1),u=new E.lW(B.bR(B.b0(v),1,1,0,0,0,0),v)
w.uk(0,u)
return u},
$S:0}
A.bjz.prototype={
$0(){return this.a.IT(this.b,this.c)},
$S:0}
A.bjw.prototype={
$2(d,e){return new B.oX(B.V(d).aQC(B.V(d).ax.aRu(C.h,C.m)),e,null)},
$S:1032}
A.bqf.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dk(),s=A.OE(!1,C.li,"Umsatz 7 %",t.ak(u.a),w),r=A.OE(!1,C.li,"Umsatz 19 %",t.ak(u.b),w),q=A.OE(!0,D.aaZ,"Umsatz netto",t.ak(u.c),w),p=t.ak(Math.abs(u.d)),o=A.OE(!1,D.aaY,"Aufwand","-"+p,C.a5),n=u.e,m=t.ak(n)
return E.aIW(1.7,B.b([s,r,q,o,A.OE(!0,C.nV,"Ergebnis",m,n<0?C.a5:C.ac),A.OE(!1,C.fS,"USt-Saldo",t.ak(u.f-u.r),w)],x.p),v,12,12,C.il,!0)},
$S:131}
A.bqg.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dH(B.dB(new A.bqe(this.b),null,w),w)},
$S:0}
A.bqe.prototype={
$1(d){return new A.vc(this.a.a,null)},
$S:z+6}
A.aLF.prototype={
$0(){return D.av2},
$S:88}
A.aLE.prototype={
$2(d,e){var w=null
return B.bj(C.a5,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fi,w,C.D,w,w,3)},
$S:199}
A.aLD.prototype={
$1(d){return new A.II(d,null)},
$S:z+20}
A.bgt.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dk(),i=j.ak(k.c),h=l.w,g=l.d,f=B.ag(g).i("ac<1,G>"),e=f.i("as.E"),d=B.Q(new B.ac(g,new A.bgi(),f),e)
i=A.jR(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ak(r.b)
w=B.Q(new B.ac(g,new A.bgj(),f),e)
d=A.jR(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ak(k.e)
w=B.Q(new B.ac(g,new A.bgk(),f),e)
k=A.jR(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ai(h.b,1)
v=B.Q(new B.ac(g,new A.bgl(),f),e)
w=A.jR(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ai(h.a,1)
u=B.Q(new B.ac(g,new A.bgm(),f),e)
v=A.jR(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ai(r.c,1)
t=B.Q(new B.ac(g,new A.bgn(),f),e)
u=A.jR(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ai(h.c,1)
s=B.Q(new B.ac(g,new A.bgo(),f),e)
t=A.jR(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ak(h.d)
s=B.Q(new B.ac(g,new A.bgp(),f),e)
h=A.jR(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ak(l.r.d)
m=B.Q(new B.ac(g,new A.bgq(m),f),e)
m=A.jR(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ak(l)
l=B.Q(new B.ac(g,new A.bgr(l),f),e)
l=A.jR(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ai(j,1)
j=B.Q(new B.ac(g,new A.bgs(j),f),e)
return E.aIW(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jR(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.il,!0)},
$S:131}
A.bgi.prototype={
$1(d){return d.b},
$S:z+0}
A.bgj.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bgk.prototype={
$1(d){return d.d},
$S:z+0}
A.bgl.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgm.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bgn.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgo.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgp.prototype={
$1(d){return d.d},
$S:z+0}
A.bgq.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgr.prototype={
$1(d){return this.a},
$S:z+0}
A.bgs.prototype={
$1(d){return this.a},
$S:z+0}
A.bgu.prototype={
$0(){return A.bBX(this.b,1.45,new A.Ux(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgv.prototype={
$0(){return A.bBX(this.b,1.6,new A.UO(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.buc.prototype={
$1(d){var w=this,v=null,u=B.au(16),t=x.p,s=B.b([B.ah(B.b([B.at(B.i(w.a,v,v,v,v,B.bA(C.h,18,C.p),v,v,v),1),B.fc(v,v,D.adi,v,v,new A.bub(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.o,12,C.aG),v,v,v),C.I],t))
s.push(C.t)
s.push(B.bN(new B.mO(w.c,w.d,v),v,17976931348623157e292))
return B.a5q(v,C.n,new B.ad(C.al,B.a7(s,C.z,C.f,C.H),v),v,v,v,C.fP,C.v_,v,new B.d_(u,C.J),v)},
$S:1033}
A.bub.prototype={
$0(){return B.bb(this.a,!1).eU()},
$S:0}
A.bgw.prototype={
$0(){var w=this.a,v=B.b6(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bBX(this.b,2.4,new A.Z5(w.w,w.y,w.z,null),C.b.cn(u," \xb7 "),v)
return null},
$S:0}
A.bpj.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bpk.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bpl.prototype={
$1(d){return A.aLQ(null,1.4,null,C.a5,0.35,D.ahR,D.E7,null,!1,!1,!1,!1,D.Fv,!1,10,D.Yh,!0,C.lz,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+22}
A.b6U.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+7}
A.b6W.prototype={
$2(d,e){var w=null
return B.i(this.a.aLm(d),w,w,w,w,B.y(C.o,10,C.F),w,w,w)},
$S:z+24}
A.b6X.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=this.a.length)return C.v7
return new B.ad(C.l1,B.i(C.c.cM(this.a[v].a,5),w,w,w,w,B.y(C.o,9,C.F),w,w,w),w)},
$S:z+8}
A.b6V.prototype={
$1(d){return D.a9n},
$S:z+9}
A.b7U.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7V.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7W.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b7X.prototype={
$2(d,e){var w=null,v=C.d.Y(d)
if(v<0||v>=3)return C.v7
return new B.ad(C.l1,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.p),w,w,w),w)},
$S:z+8}
A.bhc.prototype={
$1(d){return d.d},
$S:z+12}
A.bhd.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bry.prototype={
$1(d){return d.d},
$S:z+28}
A.brz.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b5k.prototype={
$0(){return D.ava},
$S:88}
A.b5j.prototype={
$2(d,e){return new A.x2("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+29}
A.b5i.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bj(m,B.a7(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.F),m,m,m),C.I,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.o,12.5,C.l),m,m,m),C.t,B.jP(C.cb,B.b([B.fR(C.F2,D.aIZ,new A.b5c(w,v),m),B.fR(D.acU,D.aHU,new A.b5d(w,v),m)],u),C.df,8,8)],u),C.z,C.f,C.i),C.a7,m,C.D,m,m,3)}w=new A.b5l(d)
t=C.b.fa(n.a.e.d,0,new A.b5e())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jv(new A.b5f(new A.b5m(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.I,B.ah(B.b([B.at(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.o,11,C.l),m,m,m),1),B.qr(D.ae8,D.aIe,new A.b5g(q,p),m),B.qr(D.adJ,D.aI_,new A.b5h(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:223}
A.b5c.prototype={
$0(){return A.awk(this.a,this.b,null)},
$S:0}
A.b5d.prototype={
$0(){return A.awh(this.a,this.b)},
$S:0}
A.b5l.prototype={
$1(d){var w=B.b_(J.a2(this.a,d))
return w==null?null:w},
$S:1034}
A.b5m.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ai(v,1)
w=B.b6(w,".",",")+" %"}return w},
$S:33}
A.b5e.prototype={
$2(d,e){return d+e.d},
$S:z+7}
A.b5f.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jR(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i5,o.$1("liquidity1_pct")),m=A.jR(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i5,o.$1("liquidity2_pct")),l=A.jR(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i5,o.$1("liquidity3_pct"))
o=A.jR(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i5,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ai(w,1)
w=B.b6(w,".",",")+" %"}w=A.jR(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i5,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dk()
v=u.ak(v)
return E.aIW(p,B.b([n,m,l,o,w,A.jR(s,s,!1,"Bilanzsumme",!1,"EK "+u.ak(t.d),s,s,s,C.i5,v)],x.p),q,12,12,C.il,!0)},
$S:131}
A.b5g.prototype={
$0(){return A.awh(this.a,this.b)},
$S:0}
A.b5h.prototype={
$0(){return A.awk(this.a,this.b,this.c)},
$S:0}
A.bua.prototype={
$1(d){return new A.Bm(this.a,new A.bu9(this.b),this.c,null)},
$S:z+30}
A.bu9.prototype={
$0(){var w=this.a,v=$.bxT()
if(w.e==null)B.S(B.X(y.b))
w.gcd().c_(v)},
$S:0}
A.b56.prototype={
$0(){},
$S:0}
A.b57.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b58.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b5a.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uA(u.b,B.bR(2024,1,1,0,0,0,0),null,r,new B.ba(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b59(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b59.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5b.prototype={
$0(){return B.bb(this.a,!1).eU()},
$S:0}
A.b5n.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5o.prototype={
$1(d){return new A.xU(x.B.a(d),this.a.a.r)},
$S:z+34}
A.ayY.prototype={
$1(d){return d.e},
$S:z+35}
A.ayZ.prototype={
$2(d,e){return d+e},
$S:45}
A.az0.prototype={
$1(d){return d.c.length!==0},
$S:z+36}
A.az2.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+37}
A.az3.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aej(v.d,v.e)},
$S:0}
A.ayG.prototype={
$1(d){return 0},
$S:1035}
A.ayF.prototype={
$2(d,e){return B.eV(C.bW,this.a.am4(e),C.r,C.bl,null)},
$S:1036}
A.b_B.prototype={
$1(d){return d.a},
$S:z+39}
A.b_C.prototype={
$1(d){return d.b},
$S:z+40}
A.b_D.prototype={
$1(d){return new A.jZ(this.a.ch[d.a].a,d.b)},
$S:z+41}
A.b_E.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mH||v===D.dQ))t=1-t
return new A.jZ(d,t*w.d)},
$S:z+42}
A.b_F.prototype={
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
A.aVQ.prototype={
$1(d){this.a.l8(new A.a6g(d))},
$S:187}
A.aVR.prototype={
$1(d){this.a.l8(new A.a6h(d))},
$S:42}
A.aVS.prototype={
$1(d){this.a.l8(new A.a6i(d))},
$S:28}
A.aVT.prototype={
$0(){this.a.l8(D.a1K)},
$S:0}
A.aVU.prototype={
$1(d){this.a.l8(new A.Ns())},
$S:46}
A.aVV.prototype={
$1(d){this.a.l8(new A.a6l(d))},
$S:40}
A.aVW.prototype={
$0(){this.a.l8(D.a1L)},
$S:0}
A.aVX.prototype={
$1(d){this.a.l8(new A.Nv(d))},
$S:94}
A.aVY.prototype={
$1(d){this.a.l8(new A.a6f(d))},
$S:197}
A.aVZ.prototype={
$1(d){this.a.l8(new A.a6e(d))},
$S:184}
A.aW_.prototype={
$1(d){return this.a.l8(new A.Nq(d))},
$S:183}
A.aW0.prototype={
$1(d){return this.a.l8(new A.a6j(d))},
$S:63}
A.aW1.prototype={
$1(d){return this.a.l8(new A.Nt(d))},
$S:54}
A.bgI.prototype={
$1(d){var w=this.a.db.h(0,C.b.hz(this.b.ch,d))
return d.aRa(w==null?B.b([],x.t):w)},
$S:z+45}
A.bgG.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bgH.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fT(w,new A.bgF())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.GV(w))},
$S:0}
A.bgF.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+11}
A.bgJ.prototype={
$1(d){return new A.zt(x.hf.a(d),this.a.a.r)},
$S:z+47}
A.aLR.prototype={
$1(d){return!d.k(0,D.fQ)},
$S:z+3}
A.buV.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bGM(t?A.bBI(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tL(w,new A.yH(!0,A.bCx(),new A.buU(v)))},
$S:z+49}
A.buU.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bVF(A.bBI(d,e,f),w,A.c3B(d,e,f))},
$S:z+50}
A.buS.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j3(v,v,u==null?D.dw:u,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rI(C.d.j(d.b),w)},
$S:z+51}
A.aLT.prototype={
$1(d){return d.a.length!==0},
$S:z+52}
A.aLU.prototype={
$1(d){return!d.k(0,D.fQ)},
$S:z+3}
A.aLY.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+80}
A.aLW.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aLX.prototype={
$0(){this.a.aej(this.b,this.c)},
$S:0}
A.aLZ.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+11}
A.ayR.prototype={
$1(d){return d.gds(0)},
$S:z+54}
A.ayS.prototype={
$2(d,e){return d+e},
$S:45}
A.ayV.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iV(v,B.ag(v).i("iV<1>")).aB(0,new A.ayW(w,this.a/(u+1),this.c))},
$S:0}
A.ayW.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+4}
A.ayT.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+4}
A.ayU.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+4}
A.aIV.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1037}
A.aCa.prototype={
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
w(A,"c7b","bVB",56)
var q
v(q=A.U9.prototype,"gaF9","aFa",31)
v(q,"gaEc","I9",10)
v(q,"gaEU","Ik",10)
u(A.Ua.prototype,"gasX","asY",33)
t(A,"c5X",3,null,["$3"],["bST"],57,0)
t(A,"c5Y",3,null,["$3"],["bSU"],58,0)
t(A,"c5Z",3,null,["$3"],["bSV"],59,0)
t(A,"c60",4,null,["$4"],["c6P"],60,0)
w(A,"c6_","c6O",61)
s(A,"bC0","c6Q",62)
t(A,"c5S",3,null,["$3"],["bVG"],63,0)
w(A,"a0j","c9f",64)
w(A,"awn","c6T",9)
t(A,"c5U",3,null,["$3"],["bWs"],65,0)
t(A,"c5W",3,null,["$3"],["c0J"],66,0)
t(A,"c5T",3,null,["$3"],["bWr"],67,0)
t(A,"c5V",3,null,["$3"],["c0I"],68,0)
w(A,"cgx","bWq",69)
w(A,"cgy","c0H",70)
r(A.YU.prototype,"ga4H","ayu",38)
u(A.WD.prototype,"gazL","azM",44)
t(A,"c84",3,null,["$3"],["bWT"],71,0)
t(A,"c83",3,null,["$3"],["bSW"],72,0)
w(A,"c87","c9g",3)
t(A,"bNn",4,null,["$5$size","$4"],["bLP",function(d,e,f,g){return A.bLP(d,e,f,g,null)}],73,0)
s(A,"bCx","c9e",74)
s(A,"bNo","c5F",75)
s(A,"bNr","c6W",76)
s(A,"bNq","c6S",5)
s(A,"bNp","c6R",5)
w(A,"c86","bMZ",78)
w(A,"c85","bMY",79)
t(A,"a0p",3,null,["$3"],["c82"],53,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.F,[A.a7Q,A.alG,A.wZ,A.IN,A.aiN,A.x7,A.ahn,A.amQ,A.Jh,A.JH,A.ahl,A.In,A.a21,A.II,A.am7,A.anm,A.Vn,A.Z5,A.Ux,A.UO,A.anS,A.ak5,A.Cm,A.atJ,A.x2,A.Le,A.AN])
u(B.B,[A.vd,A.Eo,A.bk,A.aiu,A.aik,A.aim,A.ain,A.aic,A.alS,A.aiq,A.aio,A.azc,A.atN,A.az_,A.ail,A.Ln,A.a6U,A.tK,A.as9,A.as8,A.aib,A.alR,A.eB,A.alO,A.alQ,A.aqg,A.amH,A.auv,A.alP,A.alr,A.alN,A.ayE,A.bgC,A.ayH,A.ai8,A.o0,A.alK,A.alL,A.w_,A.hw,A.anv,A.any,A.aih,A.aiv,A.aii,A.alM,A.anB,A.anz,A.atM,A.as7,A.aLS,A.anx,A.vL,A.a2n,A.anI,A.a2x,A.b37])
u(B.v9,[A.pL,A.oj,A.qw,A.vP,A.wL,A.aBy,A.aCG,A.ok,A.CV,A.om])
u(B.o6,[A.aGo,A.aGp,A.aGq,A.aGr,A.aGK,A.bv6,A.bv7,A.bwZ,A.bv8,A.bv4,A.bv5,A.bv3,A.bd4,A.bd6,A.bd1,A.bgT,A.bgV,A.bgX,A.bgZ,A.aGy,A.aGx,A.aGF,A.aGw,A.bqe,A.aLD,A.bgi,A.bgj,A.bgk,A.bgl,A.bgm,A.bgn,A.bgo,A.bgp,A.bgq,A.bgr,A.bgs,A.buc,A.bpl,A.b6V,A.b7U,A.b7V,A.bhc,A.bry,A.b5i,A.b5l,A.b5m,A.bua,A.b5o,A.ayY,A.az0,A.ayG,A.b_B,A.b_C,A.b_D,A.b_E,A.b_F,A.aVQ,A.aVR,A.aVS,A.aVU,A.aVV,A.aVX,A.aVY,A.aVZ,A.aW_,A.aW0,A.aW1,A.bgI,A.bgJ,A.aLR,A.buV,A.buU,A.buS,A.aLT,A.aLU,A.ayR,A.aCa])
t(A.yF,B.fG)
u(B.y7,[A.aGn,A.aGm,A.bd9,A.bd3,A.bd5,A.bd2,A.bd8,A.bcY,A.bcZ,A.bd_,A.bd0,A.aGI,A.aGz,A.aGA,A.aGB,A.aGC,A.aGD,A.aGE,A.aGH,A.aGu,A.aGv,A.bjx,A.bjy,A.bjz,A.bqg,A.aLF,A.bgu,A.bgv,A.bub,A.bgw,A.b5k,A.b5c,A.b5d,A.b5g,A.b5h,A.bu9,A.b56,A.b57,A.b58,A.b5a,A.b59,A.b5b,A.b5n,A.az3,A.aVT,A.aVW,A.bgG,A.bgH,A.aLW,A.aLX,A.ayV])
t(A.vc,B.be)
u(B.Im,[A.x4,A.ayP,A.aeP,A.Db,A.aFC,A.aLG,A.NV])
t(A.alH,B.v_)
u(B.y8,[A.bd7,A.bgU,A.bgW,A.bgY,A.aGG,A.bjw,A.bqf,A.aLE,A.bgt,A.bpj,A.bpk,A.b6U,A.b6W,A.b6X,A.b7W,A.b7X,A.bhd,A.brz,A.b5j,A.b5e,A.b5f,A.ayZ,A.az2,A.ayF,A.bgF,A.aLY,A.aLZ,A.ayS,A.ayW,A.ayT,A.ayU,A.aIV])
u(B.ye,[A.yG,A.ap5,A.a7R,A.aig])
u(B.N,[A.Bm,A.S6])
u(B.a_,[A.U9,A.YU])
u(B.Ob,[A.Lj,A.OR])
u(B.uJ,[A.Ua,A.WD])
t(A.a1Y,A.aiu)
t(A.ai7,A.a1Y)
t(A.a1I,A.ai7)
u(A.a1I,[A.aij,A.anw])
t(A.o1,A.aij)
t(A.fL,A.aik)
t(A.ip,A.aim)
t(A.mP,A.ain)
t(A.a1P,A.aic)
t(A.Nw,A.alS)
u(A.Nw,[A.aip,A.anA])
t(A.a1U,A.aip)
t(A.a1V,A.aiq)
t(A.Dc,A.aio)
u(A.azc,[A.Lk,A.OT])
t(A.aeR,A.atN)
t(A.air,A.aeR)
t(A.a1W,A.air)
u(B.b5,[A.xU,A.zt])
t(A.uP,A.ail)
t(A.Ld,A.Ln)
u(A.Ld,[A.az1,A.aLV])
u(B.OM,[A.a1S,A.a82])
u(B.K,[A.Gt,A.ai9])
u(A.Gt,[A.abZ,A.acb])
t(A.ql,A.as9)
t(A.ado,A.as8)
t(A.po,A.aib)
t(A.vf,A.alR)
t(A.yI,A.alO)
t(A.pM,A.alQ)
t(A.QF,A.aqg)
t(A.n8,A.amH)
t(A.nw,A.auv)
u(A.pM,[A.amG,A.auu])
t(A.kW,A.amG)
t(A.ln,A.auu)
t(A.a6d,A.alP)
u(A.a6d,[A.amF,A.aut])
t(A.a74,A.amF)
t(A.afe,A.aut)
t(A.Ng,A.alr)
t(A.ve,A.alN)
t(A.Np,A.ve)
t(A.adp,B.ha)
t(A.aia,A.ai9)
t(A.U7,A.aia)
t(A.a1J,A.U7)
t(A.jZ,A.ai8)
t(A.a6a,A.alK)
t(A.a6c,A.alL)
u(A.hw,[A.a6g,A.a6h,A.a6i,A.Nr,A.Ns,A.a6l,A.Nu,A.Nv,A.a6f,A.a6e,A.Nq,A.a6j,A.a6k,A.Nt])
t(A.q_,A.anw)
t(A.ec,A.anv)
t(A.OS,A.any)
t(A.a1R,A.aih)
t(A.mQ,A.aiv)
t(A.Li,A.aii)
t(A.yH,A.alM)
t(A.F0,A.anA)
t(A.a83,A.anB)
t(A.anu,A.eB)
t(A.nb,A.anu)
t(A.qu,A.nb)
t(A.rI,A.anz)
t(A.tL,A.atM)
t(A.GV,A.as7)
t(A.zu,A.anx)
t(A.zy,A.anI)
w(A.aic,A.bk)
w(A.aij,A.bk)
w(A.aik,A.bk)
w(A.aim,A.bk)
w(A.ain,A.bk)
w(A.aio,A.bk)
w(A.aip,A.bk)
w(A.aiq,A.bk)
w(A.air,A.bk)
w(A.ail,A.bk)
w(A.ai7,A.bk)
w(A.aib,A.bk)
w(A.alr,A.bk)
w(A.alN,A.bk)
w(A.alO,A.bk)
w(A.alQ,A.bk)
w(A.alR,A.bk)
w(A.amG,A.bk)
w(A.amF,A.bk)
w(A.amH,A.bk)
w(A.aqg,A.bk)
w(A.as8,A.bk)
w(A.as9,A.bk)
w(A.atN,A.bk)
w(A.auu,A.bk)
w(A.aut,A.bk)
w(A.auv,A.bk)
w(A.ai8,A.bk)
v(A.ai9,B.aE)
w(A.aia,B.e7)
v(A.U7,B.a59)
w(A.aiu,A.bk)
w(A.alK,A.bk)
w(A.alL,A.bk)
w(A.alS,A.bk)
w(A.aih,A.bk)
w(A.aii,A.bk)
w(A.aiv,A.bk)
w(A.alM,A.bk)
w(A.alP,A.bk)
w(A.anu,A.bk)
w(A.anv,A.bk)
w(A.anw,A.bk)
w(A.any,A.bk)
w(A.anz,A.bk)
w(A.anA,A.bk)
w(A.anB,A.bk)
w(A.as7,A.bk)
w(A.atM,A.bk)
w(A.anx,A.bk)
w(A.anI,A.bk)})()
B.brN(b.typeUniverse,JSON.parse('{"a7Q":{"F":[],"c":[]},"Eo":{"aGt":[]},"yF":{"fG":["bg<~>"],"fG.T":"bg<~>"},"vc":{"be":[],"N":[],"c":[]},"IN":{"F":[],"c":[]},"x7":{"F":[],"c":[]},"alH":{"a_":["vc"]},"alG":{"F":[],"c":[]},"wZ":{"F":[],"c":[]},"aiN":{"F":[],"c":[]},"JH":{"F":[],"c":[]},"In":{"F":[],"c":[]},"yG":{"be":[],"N":[],"c":[]},"ahn":{"F":[],"c":[]},"amQ":{"F":[],"c":[]},"ap5":{"be":[],"N":[],"c":[]},"Jh":{"F":[],"c":[]},"ahl":{"F":[],"c":[]},"a21":{"F":[],"c":[]},"II":{"F":[],"c":[]},"x2":{"F":[],"c":[]},"Bm":{"N":[],"c":[]},"a7R":{"be":[],"N":[],"c":[]},"am7":{"F":[],"c":[]},"anm":{"F":[],"c":[]},"Vn":{"F":[],"c":[]},"Z5":{"F":[],"c":[]},"Ux":{"F":[],"c":[]},"UO":{"F":[],"c":[]},"anS":{"F":[],"c":[]},"ak5":{"F":[],"c":[]},"Cm":{"F":[],"c":[]},"atJ":{"F":[],"c":[]},"aig":{"be":[],"N":[],"c":[]},"U9":{"a_":["Bm"]},"Lj":{"N":[],"c":[]},"Ua":{"a_":["Lj"]},"o1":{"bk":[]},"fL":{"bk":[]},"ip":{"bk":[]},"mP":{"bk":[]},"Dc":{"bk":[]},"xU":{"b5":["o1"],"b8":["o1"],"b8.T":"o1","b5.T":"o1"},"a1P":{"bk":[]},"a1U":{"bk":[]},"a1V":{"bk":[]},"a1W":{"bk":[]},"uP":{"bk":[]},"a1S":{"aV":[],"c":[]},"abZ":{"K":[],"L":[],"jy":[],"aU":[]},"pM":{"bk":[]},"n8":{"bk":[]},"nw":{"bk":[]},"kW":{"bk":[]},"ln":{"bk":[]},"ve":{"bk":[]},"a1I":{"bk":[]},"ql":{"bk":[]},"ado":{"bk":[]},"po":{"bk":[]},"vf":{"bk":[]},"yI":{"bk":[]},"aeR":{"bk":[]},"QF":{"bk":[]},"a74":{"bk":[]},"afe":{"bk":[]},"Ng":{"bk":[]},"Np":{"bk":[]},"Le":{"F":[],"c":[]},"S6":{"N":[],"c":[]},"YU":{"a_":["S6"]},"jZ":{"bk":[]},"adp":{"ha":[],"aV":[],"c":[]},"a1J":{"e7":["K","hx"],"K":[],"aE":["K","hx"],"L":[],"aU":[],"aE.1":"hx","e7.1":"hx","aE.0":"K"},"AN":{"F":[],"c":[]},"a1Y":{"bk":[]},"a6a":{"bk":[]},"Nw":{"bk":[]},"a6c":{"bk":[]},"a6g":{"hw":[]},"a6h":{"hw":[]},"a6i":{"hw":[]},"Nr":{"hw":[]},"Ns":{"hw":[]},"a6l":{"hw":[]},"Nu":{"hw":[]},"Nv":{"hw":[]},"a6f":{"hw":[]},"a6e":{"hw":[]},"Nq":{"hw":[]},"a6j":{"hw":[]},"a6k":{"hw":[]},"Nt":{"hw":[]},"Gt":{"K":[],"L":[],"jy":[],"aU":[]},"OR":{"N":[],"c":[]},"WD":{"a_":["OR"]},"q_":{"bk":[]},"ec":{"bk":[]},"mQ":{"bk":[]},"nb":{"eB":[],"bk":[]},"qu":{"nb":[],"eB":[],"bk":[]},"rI":{"bk":[]},"tL":{"bk":[]},"GV":{"bk":[]},"zt":{"b5":["q_"],"b8":["q_"],"b8.T":"q_","b5.T":"q_"},"OS":{"bk":[]},"a1R":{"bk":[]},"Li":{"bk":[]},"yH":{"bk":[]},"a6d":{"bk":[]},"F0":{"bk":[]},"a83":{"bk":[]},"zu":{"bk":[]},"a82":{"aV":[],"c":[]},"acb":{"K":[],"L":[],"jy":[],"aU":[]},"zy":{"bk":[]}}'))
B.bLi(b.typeUniverse,JSON.parse('{"Ld":1,"Nw":1,"Ln":1,"Gt":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ax
return{_:w("CV"),e:w("bg<oj>"),cn:w("bg<ok>"),aN:w("bg<om>"),fM:w("bg<a3<f,@>?>"),c:w("bg<~>"),W:w("jZ"),B:w("o1"),dB:w("fL"),T:w("uP"),fj:w("ip"),G:w("mP"),bO:w("mQ"),k:w("ar"),cX:w("a2x<G>"),dO:w("uW"),R:w("a4<f,@>"),j:w("hr"),bz:w("lQ<ba>"),f0:w("oc"),E:w("bk"),F:w("yF"),aI:w("pL"),m:w("oj"),X:w("ok"),P:w("lW"),D:w("vd"),a:w("aGt"),d:w("om"),cw:w("eB"),L:w("hx"),o:w("dv<v,E>"),cm:w("kW"),dv:w("n8"),M:w("D<o0>"),I:w("D<bFm>"),O:w("D<fL>"),Y:w("D<ip>"),U:w("D<eB>"),K:w("D<a6U>"),u:w("D<ec>"),bC:w("D<vL>"),aA:w("D<u<eB>>"),v:w("D<ee>"),r:w("D<GV>"),s:w("D<f>"),eg:w("D<tH>"),df:w("D<qu>"),p:w("D<c>"),n:w("D<G>"),t:w("D<v>"),eF:w("bl<a_<N>>"),Z:w("nb"),cz:w("ec"),hf:w("q_"),dj:w("zu"),fT:w("rI"),c_:w("is<p9<bg<~>>>"),x:w("zy<fL>"),y:w("zy<ec>"),J:w("u<v>"),ef:w("vP"),b:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<G,G>"),w:w("ke"),aU:w("B"),Q:w("w_<o1>"),C:w("w_<q_>"),dc:w("ee"),eo:w("qa"),gJ:w("qb"),V:w("kq<lW>"),N:w("f"),A:w("nr"),bP:w("bK"),er:w("tH"),fB:w("wL"),dw:w("qu"),bY:w("tL"),cZ:w("qw"),gc:w("j8"),es:w("ln"),bN:w("nw"),l:w("c"),q:w("xn"),g4:w("ii<G>"),cJ:w("C"),i:w("G"),z:w("@"),S:w("v"),bn:w("xU?"),f3:w("zt?"),g:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("j8?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bc=new B.lJ(C.m,B.ax("lJ<E>"))
D.Bj=new A.Db(0,"left")
D.mH=new A.Db(1,"top")
D.Bk=new A.Db(2,"right")
D.dQ=new A.Db(3,"bottom")
D.azb=new A.ql(!1,A.bC0(),22,null)
D.kw=new A.po(16,null,D.azb,!0)
D.a9o=new A.pM(C.E,null,2,null)
D.w8=new A.Li(!1,D.a9o,A.c87(),!0)
D.a_H=new A.ayP(3,"spaceEvenly")
D.a_Q=new B.xY(6,"dstIn")
D.Xz=new B.aW(3,3)
D.Bn=new B.d5(D.Xz,D.Xz,C.a2,C.a2)
D.a00=new B.bo(C.E,0,C.S,-1)
D.BW=new A.a6c()
D.a1K=new A.Nr()
D.a1L=new A.Nu()
D.aRf=new A.ado()
D.a7w=new B.bu(8e6)
D.amR=w([],B.ax("D<kW>"))
D.amS=w([],B.ax("D<ln>"))
D.E3=new A.Ng(D.amR,D.amS,!0)
D.a92=new B.dK("Zeitraum",!1,null)
D.a98=new B.dK("Konten (SKR 03)",!1,null)
D.xN=new A.aFC(0,"center")
D.a9j=new A.vc(null,null)
D.aRs=new A.yH(!0,A.bCx(),A.bNn())
D.E7=new A.yH(!1,A.bCx(),A.bNn())
D.E8=new A.yI(!1,!0,null,A.awn(),A.a0j(),!0,null,A.awn(),A.a0j())
D.aRt=new A.yI(!0,!0,null,A.awn(),A.a0j(),!0,null,A.awn(),A.a0j())
D.a47=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3S=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4h=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4b=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3z=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3y=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a4G=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a40=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4J=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4D=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.at6=new B.dv([50,D.a47,100,D.a3S,200,D.a4h,300,D.a4b,400,D.a3z,500,D.a3y,600,D.a4G,700,D.a40,800,D.a4J,900,D.a4D],x.o)
D.dw=new B.rP(D.at6,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aiS=w([8,4],x.t)
D.a9m=new A.pM(D.dw,null,0.4,D.aiS)
D.a9n=new A.pM(C.a4,null,0.5,null)
D.fQ=new A.eB(0/0,0/0)
D.azd=new A.ql(!0,A.bC0(),44,null)
D.mI=new A.po(16,null,D.azd,!0)
D.azc=new A.ql(!0,A.bC0(),30,null)
D.mJ=new A.po(16,null,D.azc,!0)
D.a9p=new A.vf(!1,D.mI,D.mJ,D.mI,D.mJ)
D.aRu=new A.vf(!0,D.mI,D.mJ,D.mI,D.mJ)
D.aIm=new B.aj("Einzelbuchungen",null,null,null,null,null,null,null,null,null)
D.a9V=new B.ea(D.aIm,null,null)
D.Eg=new A.NV(0,"left")
D.aa3=new A.NV(1,"center")
D.Eh=new A.NV(2,"right")
D.aa8=new B.a5(57495,"MaterialIcons",null,!1)
D.Er=new B.a5(57912,"MaterialIcons",null,!1)
D.aal=new B.a5(58040,"MaterialIcons",null,!0)
D.y4=new B.a5(58927,"MaterialIcons",null,!1)
D.aaY=new B.a5(59005,"MaterialIcons",null,!0)
D.aaZ=new B.a5(59007,"MaterialIcons",null,!0)
D.ab_=new B.a5(59011,"MaterialIcons",null,!1)
D.abZ=new B.a5(62589,"MaterialIcons",null,!1)
D.abg=new B.a5(61349,"MaterialIcons",null,!1)
D.acR=new B.aA(D.abg,20,C.h,null,null)
D.abm=new B.a5(61487,"MaterialIcons",null,!1)
D.acT=new B.aA(D.abm,18,null,null,null)
D.acU=new B.aA(D.y4,18,null,null,null)
D.add=new B.aA(C.nW,14,C.a5,null,null)
D.adi=new B.aA(C.hZ,null,C.h,null,null)
D.adj=new B.aA(C.lf,null,C.o,null,null)
D.adJ=new B.aA(C.o2,16,null,null,null)
D.adP=new B.aA(C.yd,16,null,null,null)
D.adS=new B.aA(D.Er,null,C.a5,null,null)
D.abX=new B.a5(62584,"MaterialIcons",null,!1)
D.ae2=new B.aA(D.abX,16,null,null,null)
D.ae8=new B.aA(D.y4,16,null,null,null)
D.agc=new A.a7R(null)
D.aRz=new A.aLG(0,"horizontal")
D.yn=new A.zu(0,0,0,0,!1)
D.Fv=new A.OS(0.5)
D.C1=new A.a83()
D.agp=new A.F0(D.C1,A.bNr(),10,A.bNo(),!0,A.bNq(),A.bNp(),!1,null,null,null)
D.aRB=new A.F0(D.C1,A.bNr(),10,A.bNo(),!0,A.bNq(),A.bNp(),!0,null,null,null)
D.ahR=w([4,3],x.t)
D.axn=new B.aJ("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.axc=new B.aJ("receivables","Forderungen (kurzfristig)")
D.ax0=new B.aJ("inventory_value","Vorr\xe4te (Warenbestand)")
D.awZ=new B.aJ("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.awM=new B.aJ("fixed_assets","Anlageverm\xf6gen")
D.awT=new B.aJ("current_liabilities","Kurzfristige Verbindlichkeiten")
D.axj=new B.aJ("long_term_liabilities","Langfristige Verbindlichkeiten")
D.axb=new B.aJ("equity","Eigenkapital")
D.pI=w([D.axn,D.axc,D.ax0,D.awZ,D.awM,D.awT,D.axj,D.axb],B.ax("D<+(f,f)>"))
D.aRE=w([],x.M)
D.amE=w([],x.O)
D.amF=w([],x.Y)
D.amG=w([],B.ax("D<mP>"))
D.amH=w([],B.ax("D<mQ>"))
D.aRF=w([],x.U)
D.aRG=w([],x.u)
D.amI=w([],x.r)
D.atH={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Td={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z3=new B.a4(D.Td,[0,0,0,0,0,0,0,C.c_],B.ax("a4<f,B>"))
D.atE={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.at0=new B.a4(D.atE,[0,0,0,0],B.ax("a4<f,v>"))
D.atW={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqA=new B.a4(D.atW,[0,0,0,0,null,null,null,null],B.ax("a4<f,v?>"))
D.aqt=new B.a4(D.atH,[D.z3,D.z3,D.z3,C.c_,C.c_,C.c_,D.at0,D.aqA],x.R)
D.aqN=new B.a4(D.Td,[0,0,0,0,0,0,0,C.ci],x.R)
D.atI={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqP=new B.a4(D.atI,[8500,1200,3400,300,22e3,4200,9000,22200],B.ax("a4<f,G>"))
D.au5={total:0,rows:1}
D.aqS=new B.a4(D.au5,[0,C.ci],x.R)
D.atD={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.at1=new B.a4(D.atD,[0,0,0,0,0,0,0,C.ci],x.R)
D.au8={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.at2=new B.a4(D.au8,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ax("a4<f,f>"))
D.a4P=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4X=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3C=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a43=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4d=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5b=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3m=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a45=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4g=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a4E=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.at7=new B.dv([50,D.a4P,100,D.a4X,200,D.a3C,300,D.a43,400,D.a4d,500,D.a5b,600,D.a3m,700,D.a45,800,D.a4g,900,D.a4E],x.o)
D.T_=new B.rP(D.at7,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8k=new B.ai(32,32,32,32)
D.av2=new B.ad(D.a8k,C.bK,null)
D.a8m=new B.ai(48,48,48,48)
D.To=new B.ad(D.a8m,C.bK,null)
D.ava=new B.ad(C.al,C.bK,null)
D.amT=w([],B.ax("D<n8>"))
D.amU=w([],B.ax("D<nw>"))
D.XB=new A.QF(D.amT,D.amU)
D.ay9=new B.fD("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ayb=new B.fD("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ayd=new B.fD("Automaten-Business","Umsatz je Automat",null,null)
D.ayg=new B.fD("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ayi=new B.fD("Top","Meistverkaufte Produkte",null,null)
D.aym=new B.fD("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ayn=new B.fD("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yh=new B.tq(C.K,C.v,0)
D.aGO=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aAX=new B.e2(D.aGO,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIN=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aB_=new B.e2(D.aIN,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aH0=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aB0=new B.e2(D.aH0,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIG=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aB2=new B.e2(D.aIG,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aIa=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aB3=new B.e2(D.aIa,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aI7=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aBm=new B.e2(D.aI7,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aRQ=new B.T(!0,C.E,null,null,null,null,14,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGY=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aH8=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aHU=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aI_=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aIe=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aIZ=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.aeP(0,"auto")
D.aJC=new A.aeP(1,"top")
D.aO1=new A.x2("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aO2=new A.x2("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)
D.AW=new A.x4(0,"alle")
D.ZX=new A.x4(1,"aufwand")
D.ZY=new A.x4(2,"erloes")
D.ZZ=new A.x4(3,"privat")
D.aOW=new A.x7('Im gew\xe4hlten Zeitraum ist keine Buchung erfasst. \xdcber die Aktion \u201esevDesk synchronisieren" im Dashboard werden Belege aus sevDesk \xfcbernommen.',C.o,C.lf,null)
D.aca=new B.a5(984570,"MaterialIcons",null,!1)
D.aOX=new A.x7("Keine Buchung passt zu dieser Auswahl.",C.o,D.aca,null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ch0","bRF",()=>B.iY(new A.bv6(),x.D))
w($,"ch1","a0R",()=>B.iY(new A.bv7(),x.a))
w($,"ci1","qV",()=>B.bAG(new A.bwZ(),x.P))
w($,"ch2","bxV",()=>C.aF.$1$1(new A.bv8(),x.d))
w($,"cgZ","bxU",()=>C.aF.$1$1(new A.bv4(),x.m))
w($,"ch_","bEd",()=>C.aF.$1$1(new A.bv5(),x.X))
w($,"cgY","bxT",()=>C.aF.$1$1(new A.bv3(),x.h))
w($,"cgX","bxS",()=>B.b0r(A.c7b(),x.F,x.c))
w($,"ca2","bxp",()=>new A.ayE())
v($,"cdo","lF",()=>new A.b37())})()};
(a=>{a["jeeAY78b54Z4AtI57UQ5hSwk4bo="]=a.current})($__dart_deferred_initializers__);