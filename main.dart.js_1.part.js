((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Ov(d,e,f,g,h){return new A.a7d(f,g,d,h,e,null)},
a7d:function a7d(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
v6:function v6(d){this.a=d},
En:function En(d){this.a=d},
bVf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.S(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SR
w=x.f
v=x.N
u=x.z
t=A.aGl(B.cT(w.a(e.h(a0,"current")),v,u))
s=A.aGl(B.cT(w.a(e.h(a0,"prior_year")),v,u))
r=A.aGl(B.cT(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cb
p=J.d3(p,new A.aG3(),x.cZ)
p=B.R(p,p.$ti.i("ar.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cb
o=J.d3(o,new A.aG4(),x.ef)
o=B.R(o,o.$ti.i("ar.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cb
q=J.d3(q,new A.aG5(),x.j)
q=B.R(q,q.$ti.i("ar.E"))
n=B.cT(w.a(e.h(a0,"customer")),v,u)
m=B.bk(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.pd(n.h(0,"app_gross"))
k=B.bk(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.pd(n.h(0,"avg_basket"))
u=B.cT(w.a(e.h(a0,"derived")),v,u)
v=A.pd(u.h(0,"gross_margin_pct"))
e=A.pd(u.h(0,"net_margin_pct"))
w=A.pd(u.h(0,"ebitda_margin_pct"))
j=A.pd(u.h(0,"cashflow_operating"))
i=A.btI(u.h(0,"revenue_growth_yoy_pct"))
h=A.btI(u.h(0,"revenue_growth_mom_pct"))
g=A.btI(u.h(0,"result_growth_yoy_pct"))
u=A.btI(u.h(0,"result_growth_mom_pct"))
f=B.bk(J.a2(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.oh(t,s,r,p,o,q,new A.aBa(m,l,k,n),new A.aCh(v,e,w,j,i,h,g,u),f)},
pd(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hy(J.a6(d))
return w==null?0:w},
btI(d){if(d==null)return null
if(typeof d=="number")return d
return B.hy(J.a6(d))},
qw:function qw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wB:function wB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBa:function aBa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCh:function aCh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oh:function oh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aG3:function aG3(){},
aG4:function aG4(){},
aG5:function aG5(){},
aGl(d){var w=J.S(d),v=A.uk(w.h(d,"revenue_net_7")),u=A.uk(w.h(d,"revenue_net_19")),t=A.uk(w.h(d,"revenue_net")),s=A.uk(w.h(d,"expense_net")),r=A.uk(w.h(d,"result_net")),q=A.uk(w.h(d,"vat_collected")),p=A.uk(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cb
w=J.d3(w,new A.aGm(),x._)
w=B.R(w,w.$ti.i("ar.E"))
return new A.oi(v,u,t,s,r,q,p,w)},
uk(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hy(J.a6(d))
return w==null?0:w},
CT:function CT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oi:function oi(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aGm:function aGm(){},
bVe(d){return new A.yE(d,new B.i5(x.c_),C.bS)},
buL:function buL(){},
buM:function buM(){},
bwA:function bwA(){},
buN:function buN(){},
buK:function buK(){},
buJ:function buJ(){},
yE:function yE(d,e,f){this.r=d
this.a=e
this.f=f},
aG2:function aG2(d,e,f){this.a=d
this.b=e
this.c=f},
aG1:function aG1(d,e,f){this.a=d
this.b=e
this.c=f},
bVg(){return new A.yF(null)},
am_(d,e,f,g,h){return new A.alZ(e,h,g,f,d,null)},
yF:function yF(d){this.a=d},
aGk:function aGk(d){this.a=d},
aGc:function aGc(d,e,f){this.a=d
this.b=e
this.c=f},
aGd:function aGd(d,e,f){this.a=d
this.b=e
this.c=f},
aGe:function aGe(d){this.a=d},
aGb:function aGb(){},
aGf:function aGf(d){this.a=d},
aGg:function aGg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGj:function aGj(){},
aGi:function aGi(){},
aGh:function aGh(){},
aGa:function aGa(d,e){this.a=d
this.b=e},
aG8:function aG8(d){this.a=d},
aG9:function aG9(d){this.a=d},
agM:function agM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alZ:function alZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aoj:function aoj(d,e){this.e=d
this.a=e},
bje:function bje(d){this.a=d},
bjf:function bjf(d){this.a=d},
bjg:function bjg(d,e,f){this.a=d
this.b=e
this.c=f},
bjd:function bjd(){},
J9:function J9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
JD:function JD(d,e){this.c=d
this.a=e},
bpC:function bpC(d){this.a=d},
agK:function agK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
If:function If(d,e){this.c=d
this.a=e},
bBB(d,e,f,g,h){var w=null
return B.fK(w,w,!0,w,new A.btD(h,g,e,f),d,w,!0,!0,x.H)},
jV(d,e,f,g,h,i,j,k,l,m,n){return new A.amA(g,n,i,e,d,m,f,k,l,j,null)},
avo(d,e){return A.c4K(d,e)},
c4K(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avo=B.l(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aR(D.azC)
t=4
o=e.a9(0,$.bK(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hk("finance-balance-sync",B.A(n,n)),$async$avo)
case 7:r=g
q=B.cT(x.f.a(r.a),x.N,n)
l.XD()
if(J.d(J.a2(q,"configured"),!1)){l.aR(D.azG)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bxx()
if(e.e==null)B.P(B.U(y.b))
e.gc6().br(o)
l.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.XD()
l.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$avo,v)},
avr(d,e,f){var w=0,v=B.q(x.H)
var $async$avr=B.l(function(g,h){if(g===1)return B.m(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.fK(null,null,!0,null,new A.btB(f,e,e.a9(0,$.bK(),x.A)),d,null,!0,!0,x.H),$async$avr)
case 2:return B.n(null,v)}})
return B.o($async$avr,v)},
a7e:function a7e(d){this.a=d},
aLh:function aLh(){},
aLg:function aLg(){},
aLf:function aLf(){},
IA:function IA(d,e){this.c=d
this.a=e},
bgn:function bgn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgc:function bgc(){},
bgd:function bgd(){},
bge:function bge(){},
bgf:function bgf(){},
bgg:function bgg(){},
bgh:function bgh(){},
bgi:function bgi(){},
bgj:function bgj(){},
bgk:function bgk(d){this.a=d},
bgl:function bgl(d){this.a=d},
bgm:function bgm(d){this.a=d},
bgo:function bgo(d,e){this.a=d
this.b=e},
bgp:function bgp(d,e){this.a=d
this.b=e},
btD:function btD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btC:function btC(d){this.a=d},
alh:function alh(d){this.a=d},
amA:function amA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bgq:function bgq(d,e){this.a=d
this.b=e},
V_:function V_(d,e,f){this.c=d
this.d=e
this.a=f},
YB:function YB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boL:function boL(){},
boM:function boM(){},
boN:function boN(d){this.a=d},
Uc:function Uc(d,e,f){this.c=d
this.d=e
this.a=f},
b71:function b71(){},
b73:function b73(d){this.a=d},
b74:function b74(d){this.a=d},
b72:function b72(){},
Uo:function Uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7S:function b7S(){},
b7T:function b7T(){},
b7U:function b7U(){},
b7V:function b7V(d){this.a=d},
an5:function an5(d,e){this.c=d
this.a=e},
bgZ:function bgZ(){},
bh_:function bh_(){},
ajm:function ajm(d,e){this.c=d
this.a=e},
Cj:function Cj(d,e,f){this.c=d
this.d=e
this.a=f},
asS:function asS(d,e){this.c=d
this.a=e},
bqZ:function bqZ(){},
br_:function br_(){},
wU:function wU(d,e){this.c=d
this.a=e},
ahC:function ahC(d,e){this.e=d
this.a=e},
b5n:function b5n(){},
b5m:function b5m(){},
b5l:function b5l(d,e,f){this.a=d
this.b=e
this.c=f},
b5f:function b5f(d,e){this.a=d
this.b=e},
b5g:function b5g(d,e){this.a=d
this.b=e},
b5o:function b5o(d){this.a=d},
b5p:function b5p(d){this.a=d},
b5h:function b5h(){},
b5i:function b5i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5j:function b5j(d,e){this.a=d
this.b=e},
b5k:function b5k(d,e,f){this.a=d
this.b=e
this.c=f},
btB:function btB(d,e,f){this.a=d
this.b=e
this.c=f},
btA:function btA(d){this.a=d},
Bk:function Bk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TP:function TP(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b59:function b59(){},
b5a:function b5a(d){this.a=d},
b5b:function b5b(d){this.a=d},
b5d:function b5d(d,e){this.a=d
this.b=e},
b5c:function b5c(d,e){this.a=d
this.b=e},
b5e:function b5e(d){this.a=d},
bh:function bh(){},
bF4(d){return new A.La(d,C.az,C.dA,null,null)},
La:function La(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TQ:function TQ(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fA$=f
_.cW$=g
_.c=_.a=null},
b5q:function b5q(d,e){this.a=d
this.b=e},
b5r:function b5r(d){this.a=d},
ayl(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alJ:f,p=a0==null?16:a0,o=d==null?D.a_E:d,n=g==null,m=n?A.by0(r,r,r,r,r,r,r,r):g,l=a3==null?D.XB:a3
n=n?A.by0(r,r,r,r,r,r,r,r):g
w=j==null?D.DU:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.o_(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BM,s,w,i,n)},
ays(d,e,f,g,h){var w=d==null?D.alK:d,v=e==null?2:e,u=g==null?C.lw:g
return new A.fL(h,f===!0,w,v,u)},
bSw(d,e,f){var w=d.a
w=C.d.aV(w+(e.a-w)*f)
return A.ays(A.kB(d.c,e.c,f,A.c5z(),x.fj),B.ah(d.d,e.d,f),!1,A.kB(d.e,e.e,f,A.a_M(),x.S),w)},
a1g(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T_
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aYv(f,v?8:m)
t=t.aYw(g,v?8:m)
v=d==null?A.bF2(r,r,r,r,r):d
return new A.it(q,l,w,j,u,s,e,t,v,k==null?D.alL:k)},
bSx(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.mM(d.f,e.f,f),p=A.kB(d.r,e.r,f,A.a_M(),x.S),o=B.bZ(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1g(A.bF2(v,u,null,!1,t),p,q,o,s,n,null,A.kB(d.y,e.y,f,A.c5A(),x.G),m,r)},
bSy(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mK(u,w,v,B.bZ(d.d,e.d,f))},
bF2(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a1c(g===!0,v,u,w,f)},
by0(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1i(4,C.hO,16,D.xx,0,120,A.c5C(),!1,!1,D.Zx,0,C.J,A.c5B())
else w=k
v=j==null?C.l3:j
return new A.a1h(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c6q(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Da(C.d.j(f.b),v)},
c6p(d){return A.aAy(D.dp,15)},
o_:function o_(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayk:function ayk(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayt:function ayt(){},
ayu:function ayu(){},
it:function it(d,e,f,g,h,i,j,k,l,m){var _=this
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
a1c:function a1c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1h:function a1h(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aed:function aed(d,e){this.a=d
this.b=e},
a1i:function a1i(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Da:function Da(d,e){this.a=d
this.b=e},
Lb:function Lb(d){this.a=d},
a1j:function a1j(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xQ:function xQ(d,e){this.a=d
this.b=e},
ahy:function ahy(){},
ahF:function ahF(){},
ahG:function ahG(){},
ahI:function ahI(){},
ahJ:function ahJ(){},
ahK:function ahK(){},
ahL:function ahL(){},
ahM:function ahM(){},
ahN:function ahN(){},
ayv:function ayv(d){this.a=d},
ayw:function ayw(){},
uI:function uI(d,e,f){this.a=d
this.b=e
this.c=f},
ahH:function ahH(){},
ayx:function ayx(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayy:function ayy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayz:function ayz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6i:function a6i(d){this.b=d},
a1f:function a1f(d,e,f){this.d=d
this.e=e
this.a=f},
abl:function abl(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.h0=f
_.fC=g
_.A=h
_.a2=_.U=_.V=null
_.a4=i
_.bA=_.aJ=_.ai=_.av=$
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
c6r(d,e){var w=null
return new A.RO(e.w,B.h(e.r,w,w,w,w,w,w,w),w)},
ayd(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.po(t,e.b,new A.qn(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bGr(d,e,f){var w=A.ayd(d.b,e.b,f),v=A.ayd(d.d,e.d,f),u=A.ayd(d.e,e.e,f)
return new A.v8(e.a,w,A.ayd(d.c,e.c,f),v,u)},
bVi(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.eD(w,v)},
bGp(d,e,f){return new A.yH(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
c8Q(d){return!0},
c6u(d){return D.a8S},
bGq(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pL(w,f,g,e)},
bIn(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c5v(),x.dv)
v.toString
w=A.kB(d.b,e.b,f,A.c5x(),x.bN)
w.toString
return new A.Qn(v,w)},
bW2(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.n4(t,w,v,u)},
c0j(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rv(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.nu(t,w,v,u)},
bW1(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.od(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bW_(B.bxU(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_M(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kT(r,e.f,e.r,t,e.x,u,v,w,s)},
c0i(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.od(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.c0g(B.bxU(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rv(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_M(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lg(r,e.f,e.r,t,e.x,u,v,w,s)},
bW_(d,e,f,g,h,i){return new A.a6t(f,!1,g,i,d,e)},
bW0(d){return C.d.am(d.e,1)},
c0g(d,e,f,g,h,i){return new A.aeC(f,!1,g,i,d,e)},
c0h(d){return C.d.am(d.e,1)},
bGk(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c5u(),x.cm)
v.toString
w=A.kB(d.b,e.b,f,A.c5w(),x.es)
w.toString
return new A.N9(v,w,!0)},
bVh(d,e,f){return new A.Ng(d,e==null?4:e,f)},
a15:function a15(){},
D9:function D9(d,e){this.a=d
this.b=e},
tF:function tF(d,e){this.r=d
this.w=e},
qn:function qn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acN:function acN(){},
po:function po(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v8:function v8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eD:function eD(d,e){this.a=d
this.b=e},
yH:function yH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pL:function pL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aef:function aef(){},
Qn:function Qn(d,e){this.a=d
this.b=e},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nu:function nu(d,e,f,g){var _=this
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
lg:function lg(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6t:function a6t(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeC:function aeC(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N9:function N9(d,e,f){this.a=d
this.b=e
this.c=f},
v7:function v7(){},
Ng:function Ng(d,e,f){this.a=d
this.b=e
this.c=f},
aht:function aht(){},
ahx:function ahx(){},
akI:function akI(){},
akX:function akX(){},
akY:function akY(){},
al_:function al_(){},
al0:function al0(){},
alP:function alP(){},
alO:function alO(){},
alQ:function alQ(){},
app:function app(){},
arg:function arg(){},
arh:function arh(){},
asW:function asW(){},
atA:function atA(){},
atz:function atz(){},
atB:function atB(){},
ay9:function ay9(){},
L4:function L4(){},
L5:function L5(d,e,f){this.c=d
this.d=e
this.a=f},
ayb:function ayb(d){this.a=d},
aya:function aya(d){this.a=d},
RO:function RO(d,e,f){this.c=d
this.e=e
this.a=f},
Yq:function Yq(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZN(d,e,f){var w=B.ai(f),v=w.i("af<1,k1>")
v=B.R(new B.af(f,new A.b_I(),v),v.i("ar.E"))
w=w.i("af<1,c>")
w=B.R(new B.af(f,new A.b_J(),w),w.i("ar.E"))
return new A.acO(e,d,v,w,null)},
bSt(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a74(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tC(v,C.aj,C.x,new B.ku(1),v,v,v,v,C.bm,v)
u=new A.a16(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.g))
u.bl()
return u},
acO:function acO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_I:function b_I(){},
b_J:function b_J(){},
a16:function a16(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.V=e
_.U=f
_.a2=g
_.WX$=h
_.aUg$=i
_.dm$=j
_.aa$=k
_.dG$=l
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
bgw:function bgw(d,e){this.a=d
this.b=e},
ayc:function ayc(){},
k1:function k1(d,e){this.a=d
this.b=e},
nZ:function nZ(d,e){this.a=d
this.b=e},
ahu:function ahu(){},
ahv:function ahv(){},
ahw:function ahw(){},
TN:function TN(){},
AN:function AN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_K:function b_K(d){this.a=d},
b_L:function b_L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_M:function b_M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5B(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a5A(e!==!1,w)},
a1l:function a1l(){},
a5A:function a5A(d,e){this.a=d
this.b=e},
Nn:function Nn(){},
a5C:function a5C(){},
ayI:function ayI(){},
aFi:function aFi(d,e){this.a=d
this.b=e},
ahQ:function ahQ(){},
akU:function akU(){},
akV:function akV(){},
al1:function al1(){},
Le:function Le(){},
vR:function vR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ho:function ho(){},
a5G:function a5G(d){this.a=d},
a5H:function a5H(d){this.a=d},
a5I:function a5I(d){this.a=d},
Ni:function Ni(){},
Nj:function Nj(){},
a5L:function a5L(d){this.a=d},
Nl:function Nl(){},
Nm:function Nm(d){this.a=d},
a5F:function a5F(d){this.a=d},
a5E:function a5E(d){this.a=d},
Nh:function Nh(d){this.a=d},
a5J:function a5J(d){this.a=d},
a5K:function a5K(d){this.a=d},
Nk:function Nk(d){this.a=d},
Gm:function Gm(){},
aVL:function aVL(d){this.a=d},
aVM:function aVM(d){this.a=d},
aVN:function aVN(d){this.a=d},
aVO:function aVO(d){this.a=d},
aVP:function aVP(d){this.a=d},
aVQ:function aVQ(d){this.a=d},
aVR:function aVR(d){this.a=d},
aVS:function aVS(d){this.a=d},
aVT:function aVT(d){this.a=d},
aVU:function aVU(d){this.a=d},
aVV:function aVV(d){this.a=d},
aVW:function aVW(d){this.a=d},
aVX:function aVX(d){this.a=d},
OH:function OH(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wc:function Wc(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fA$=g
_.cW$=h
_.c=_.a=null},
bgF:function bgF(d,e){this.a=d
this.b=e},
bgD:function bgD(d){this.a=d},
bgE:function bgE(d,e){this.a=d
this.b=e},
bgC:function bgC(){},
bgG:function bgG(d){this.a=d},
bzg(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pX(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T_:u
else w=g
v=f==null?A.ayj(!1,u,0,u,!1,D.vS):f
w=new A.ed(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayj(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.arQ(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bWv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bF3(d.ay,e.ay,f)
v=A.bF3(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.kB(d.cy,e.cy,f,A.a_M(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rv(d.w,e.w,f)
p=A.kB(d.a,e.a,f,A.c5t(),x.cw)
p.toString
o=B.bIT(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aLw(v,m,w,r,e.z,s,new A.yG(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OI(n),!1,u,o,!0,e.cx,p)},
ayj(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a1e(h,w,g,i,f,!1)},
bF3(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rv(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bGq(t,A.kB(v.d,u.d,f,A.a_M(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rv(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.ayj(!1,s,v,u,e.a,new A.L9(!1,r,w.c,!0))},
bSz(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rv(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mL(e.a,e.b,w,v)},
c8R(d){return!0},
bBm(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jB)return A.bC8(w.a,A.byX(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c37(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jB)w=A.bC8(v.a,A.byX(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.aAy(w,40)},
bLo(d,e,f,g,h){var w,v=A.bBm(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jB)w=A.bC8(u.a,A.byX(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.aAy(w,40)
return new A.Ng(v,h==null?4:h,u)},
c8P(d,e){return!0},
c5c(d,e){return Math.abs(d.a-e.a)},
c6x(d,e){var w=J.d3(e,new A.bux(d),x.bY)
w=B.R(w,w.$ti.i("ar.E"))
return w},
c6t(d,e){return-1/0},
c6s(d,e){return d.a[e].b},
bMC(d){var w=J.d3(d,new A.buu(),x.fT)
w=B.R(w,w.$ti.i("ar.E"))
return w},
bMB(d){return A.aAy(D.dp,15)},
pX:function pX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aLx:function aLx(){},
OI:function OI(d){this.a=d},
a1e:function a1e(d,e,f,g,h,i){var _=this
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
L9:function L9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yG:function yG(d,e,f){this.a=d
this.b=e
this.c=f},
aLi:function aLi(d,e){this.a=d
this.b=e},
a5D:function a5D(){},
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
bux:function bux(d){this.a=d},
buw:function buw(d){this.a=d},
a7t:function a7t(){},
buu:function buu(){},
n8:function n8(){},
qu:function qu(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rJ:function rJ(d,e){this.a=d
this.b=e},
tG:function tG(d,e){this.a=d
this.b=e},
GN:function GN(d){this.a=d},
OJ:function OJ(d){this.a=d},
zt:function zt(d,e){this.a=d
this.b=e},
ahD:function ahD(){},
ahE:function ahE(){},
ahR:function ahR(){},
akW:function akW(){},
akZ:function akZ(){},
amI:function amI(){},
amJ:function amJ(){},
amK:function amK(){},
amM:function amM(){},
amN:function amN(){},
amO:function amO(){},
amP:function amP(){},
arf:function arf(){},
asV:function asV(){},
aLy:function aLy(d){this.a=d},
aLz:function aLz(){},
aLA:function aLA(){},
zu:function zu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amL:function amL(){},
aLB:function aLB(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLE:function aLE(){},
aLC:function aLC(d,e,f){this.a=d
this.b=e
this.c=f},
aLD:function aLD(d,e,f){this.a=d
this.b=e
this.c=f},
aLF:function aLF(){},
vC:function vC(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7s:function a7s(d,e,f){this.d=d
this.e=e
this.a=f},
aby:function aby(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.h0=f
_.fC=g
_.A=h
_.a2=_.U=_.V=null
_.a4=i
_.bA=_.aJ=_.ai=_.av=$
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
by_(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bC(o.length,0,!1,x.i),m=B.ai(o),l=new B.af(o,new A.aym(),m.i("af<1,L>")).kr(0,new A.ayn()),k=e-l,j=new A.ayq(k,d,n)
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
new B.iY(o,m.i("iY<1>")).aD(0,new A.ayo(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iY(o,m.i("iY<1>")).aD(0,new A.ayp(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
aym:function aym(){},
ayn:function ayn(){},
ayq:function ayq(d,e,f){this.a=d
this.b=e
this.c=f},
ayr:function ayr(d,e,f){this.a=d
this.b=e
this.c=f},
ayo:function ayo(d,e,f){this.a=d
this.b=e
this.c=f},
ayp:function ayp(d,e,f){this.a=d
this.b=e
this.c=f},
byX(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iY(w,B.ai(w).i("iY<1>")).aD(0,new A.aIz(v,d))
else throw B.e(B.bI('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIz:function aIz(d,e){this.a=d
this.b=e},
aBL(d,e){var w,v
if(e!=null){w=B.ai(e).i("af<1,L>")
v=B.R(new B.af(e,new A.aBM(),w),w.i("ar.E"))
return A.c6k(d,new A.a1X(v,x.C))}else return d},
aBM:function aBM(){},
c_o(d,e){var w=!0
if(d!==C.f6)if(!(d===C.aj&&e===C.x))w=d===C.io&&e===C.b_
if(w)return D.E6
else{w=!0
if(d!==C.im)if(!(d===C.io&&e===C.x))w=d===C.aj&&e===C.b_
if(w)return D.E7
else return D.a9y}},
NM:function NM(d,e){this.a=d
this.b=e},
a1M:function a1M(d,e){this.a=d
this.b=e},
zx:function zx(d,e){this.a=d
this.$ti=e},
amW:function amW(){},
c6k(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.ai,k,k,h)
for(j=B.N3(d),w=B.b([],x.I),v=new B.N5(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.P(B.fB('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.N4(v,r)
v.DC()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.DC()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.e2(B.b([],i),!0,s)
p=new B.Kw(new B.cl(t,p,k,new B.apM([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1X:function a1X(d,e){this.a=d
this.b=0
this.$ti=e},
b3d:function b3d(){},
byL(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.H)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gah(s).push(u)
else if(C.b.gah(s).length!==0)s.push(B.b([],t))}if(C.b.gah(s).length===0)s.pop()
return s},
bSD(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAy(d,e){var w=1-e/100
return B.aD(d.gfO(d),C.d.aV(d.gOt()*w),C.d.aV(d.gGy()*w),C.d.aV(d.gKO()*w))},
bGo(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
byM(d){var w=d.a,v=w?A.b_H(d.b):0,u=w?A.b_H(d.c):0,t=w?A.b_H(d.d):0
return new B.al(v,u,t,w?A.b_H(d.e):0)},
bXJ(d){var w
if(d.c===0){d.seX(null)
w=B.c3(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gp(0)}},
bzD(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.seX(f.mL(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seX(null)}},
b_H(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kB(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kZ(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kZ(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c7D(d,e,f){return C.d.aV(d+(e-d)*f)},
bC8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kZ(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gah(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7d.prototype={
t(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aT:C.p
r=r?C.n:C.am
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.ci(t.x,C.n,s,18),C.aX],w))
v.push(B.ay(new B.dG(t.c,!1,s),1))
v=B.ak(v,C.z,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.h(t.d,1,C.ac,s,B.bx(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bi(r,B.a7(w,C.z,C.i9,C.i),q,s,C.ad,s,3)}}
A.v6.prototype={
Mf(d){return this.aUf(d)},
aUf(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Mf=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_summary",B.a5(["p_from",E.rq(d.a),"p_to",E.rq(d.b)],s,r),r),$async$Mf)
case 3:q=f
if(q==null){u=D.apH
w=1
break}if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.arW
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Mf,v)},
Me(d){return this.aUe(d)},
aUe(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Me=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_kpis",B.a5(["p_from",E.rq(d.a),"p_to",E.rq(d.b)],s,r),r),$async$Me)
case 3:q=f
if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.app
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Me,v)},
pN(d){return this.ary(d)},
ary(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pN=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hk("sevdesk-sync",B.a5(["from",E.rq(d.a),"to",E.rq(d.b)],s,s)),$async$pN)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.a1(B.fI(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$pN,v)},
Ma(d){return this.aU5(d)},
aU5(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Ma=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hk("finance-export-pdf",B.a5(["from",E.rq(d.a),"to",E.rq(d.b)],s,s)),$async$Ma)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aH(J.a2(r,"base64"))
w=1
break}throw B.e(B.e9("PDF-Export fehlgeschlagen"))
case 1:return B.n(u,v)}})
return B.o($async$Ma,v)}}
A.En.prototype={
Gs(d){return this.akG(d)},
akG(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gs=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Mf(d),$async$Gs)
case 7:q=f
o=A.aGl(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.I4(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$Gs,v)},
Gn(d){return this.akr(d)},
akr(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gn=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Me(d),$async$Gn)
case 7:q=f
o=A.bVf(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.I4(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$Gn,v)},
pN(d){return this.arz(d)},
arz(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pN=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pN(d),$async$pN)
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
p=r.I4(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$pN,v)},
M9(d){return this.aU4(d)},
aU4(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$M9=B.l(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ma(d),$async$M9)
case 7:q=f
o=C.iM.cE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.I4(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$M9,v)},
I4(d){if(d instanceof B.yB)return d
if(d instanceof B.m5){if(d.b==="42501")return new B.vV(d.a)
return new B.tl(d.a)}if(d instanceof B.NB)return new B.tl("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bc("Unerwarteter Fehler: "+B.j(d))},
$iaG7:1}
A.qw.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vG.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wB.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBa.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CT.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yE.prototype={
Hn(d){return this.arx(0)},
arx(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hn=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:p={}
t.se0(0,C.db)
s=t.r
r=s.a9(0,$.xB(),x.P)
p.a=null
w=3
return B.k(B.pn(new A.aG2(p,t,r),x.H),$async$Hn)
case 3:t.se0(0,f)
q=t.f
if(q.gh_(q)==null){q=$.bxy()
s=s.e
s===$&&B.a()
s.br(q)}u=p.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$Hn,v)},
M8(){return this.aU3()},
aU3(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$M8=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:q={}
t.se0(0,C.db)
s=t.r.a9(0,$.xB(),x.P)
q.a=null
w=3
return B.k(B.pn(new A.aG1(q,t,s),x.H),$async$M8)
case 3:t.se0(0,e)
r=t.f
u=r.gh_(r)!=null?null:q.a
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$M8,v)}}
A.yF.prototype={
cw(d,e){var w=null,v=e.a5($.xB(),x.P),u=e.a5($.bxy(),x.aN)
return B.ia(B.dE(B.b([new B.fC("Finanzen","Dashboard",new A.agM(e.a5($.bxw(),x.b).gjc(),new A.aGc(this,d,e),new A.aGd(this,d,e),new A.aGe(d),new A.aGf(d),new A.aGg(this,d,e,v),w),w),C.at,new A.aoj(v,w),C.cd,D.afv,C.cd,B.dd(u,new A.aGh(),new A.aGi(),new A.aGj(),!1,!0,!1,x.d,x.l)],x.p),C.cD,w,C.H,!1),C.n,new A.aGk(e))},
JX(d,e){return this.aMp(d,e)},
aMp(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$JX=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:s=$.bxw()
w=3
return B.k(e.a9(0,s.geP(),x.F).Hn(0),$async$JX)
case 3:r=g
if(d.e==null){w=1
break}s=e.a9(0,s,x.b)
s=s.gh_(s)
t=d.O(x.q).f
t.aR(B.bY(null,null,null,null,null,C.q,null,B.h(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
case 1:return B.n(u,v)}})
return B.o($async$JX,v)},
BK(d,e){return this.axG(d,e)},
axG(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BK=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.a9(0,$.bxw().geP(),x.F).M8(),$async$BK)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aR(D.azI)
w=1
break}t=B.qg(C.v,10)
w=4
return B.k($.bOO().uh(s,"finanzauswertung.pdf",t,null,null,null),$async$BK)
case 4:case 1:return B.n(u,v)}})
return B.o($async$BK,v)},
BL(d,e,f){return this.aJV(d,e,f)},
aJV(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BL=B.l(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.fK(null,null,!0,null,new A.aGa(f,d),d,null,!0,!0,x.cJ),$async$BL)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nT(e.a9(0,$.bK(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zN("finance_period",p,o,B.a5(["period_from",p.e5()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BL)
case 8:if(d.e!=null)d.O(x.q).f.aR(F.uU)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.O(x.q).f.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Fehler: "+B.j(q),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$BL,v)}}
A.agM.prototype={
t(d){var w=this,v=null,u=A.am_(C.n,F.hS,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.am_(v,C.EQ,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.am_(v,D.xP,v,s?v:w.d,"sevDesk synchronisieren"),q=A.am_(C.a8,C.jg,C.a8,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aX,t,C.aX,r,C.aX,q,C.aX,A.am_(C.al,C.fN,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.L,0,v,v)}}
A.alZ.prototype={
t(d){var w,v=this,u=null,t=B.aM(12),s=B.aM(12),r=B.aM(12),q=v.w
if(q==null)q=C.am
q=B.cU(q,1)
w=v.r
if(w==null)w=C.h
return B.Ho(B.dV(!1,C.a_,!0,t,B.eF(!1,s,!0,B.b3(u,B.ci(v.c,w,u,20),C.u,u,u,new B.b0(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.u,C.a9,0,u,u,u,u,u,C.bE),u,v.d,u,u)}}
A.aoj.prototype={
cw(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.bi(w,B.a7(B.b([D.a8D,C.D,B.ak(B.b([D.ac4,C.aR,B.ay(B.h(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,B.y(C.h,16,C.N),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.r,B.jT(C.c5,B.b([new A.J9("Monat",new A.bje(e),w,w),new A.J9("Jahr (YTD)",new A.bjf(e),w,w),new A.J9("Zeitraum w\xe4hlen \u2026",new A.bjg(this,d,e),D.aan,w)],t),C.d7,6,8)],t),C.z,C.f,C.i),w,w,C.A,w,3)},
Jh(d,e){return this.aIN(d,e)},
aIN(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Jh=B.l(function(f,g){if(f===1)return B.m(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avJ(new A.bjd(),d,B.bL(B.aU(t)-5,1,1,0,0,0,0),new B.lF(s.a,s.b,x.bz),B.bL(B.aU(t)+1,1,1,0,0,0,0),C.e1),$async$Jh)
case 2:r=g
if(r!=null)e.a9(0,$.xB().geP(),x.V).rk(0,new E.lK(r.a,r.b))
return B.n(null,v)}})
return B.o($async$Jh,v)}}
A.J9.prototype={
t(d){var w=null,v=B.aM(9999),u=B.aM(9999),t=B.aM(9999),s=B.cU(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.ci(p,C.h,w,14),C.aX],r))
q.push(B.h(this.c,w,w,w,B.y(C.h,13,C.N),w,w,w))
return B.dV(!1,C.a_,!0,v,B.eF(!1,u,!0,B.b3(w,B.ak(q,C.l,C.f,C.L,0,w,w),C.u,w,w,new B.b0(w,w,s,t,w,w,C.F),w,w,w,w,C.l2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.u,C.a9,0,w,w,w,w,w,C.bE)}}
A.JD.prototype={
t(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jA(new A.bpC(this)),C.cd,D.a8H,C.r],r),p=this.c.w
if(p.length===0)q.push(B.bi(s,B.ak(B.b([D.acu,C.ax,B.ay(B.h("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.o,14,C.j),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.a9,s,C.A,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.H)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agK(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a7(w,C.l,C.f,C.i))}return B.a7(q,C.aa,C.f,C.i)}}
A.agK.prototype={
t(d){var w=this,v=null,u=w.e,t=u?C.aT:C.a9,s=B.cU(u?C.n:C.am,1),r=B.aM(4),q=w.c
r=B.b3(C.a1,B.h(C.c.a_(q,0,1),v,v,v,B.bx(C.h,14,C.m),v,v,v),C.u,v,v,new B.b0(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.h(q+" \xb7 "+w.d,1,C.ac,v,B.y(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.a7(B.b([q,B.h(t,v,v,v,B.y(C.o,12,C.j),v,v,v)],s),C.z,C.f,C.i),1)
q=$.du().aq(w.f)
return B.bi(v,B.ak(B.b([r,C.ax,t,B.h(q,v,v,v,B.y(u?C.al:C.h,15,C.N),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.eh,v,3)}}
A.If.prototype={
t(d){var w=null
return B.bi(C.a8,B.ak(B.b([D.ad7,C.ax,B.ay(B.h(this.c,w,w,w,B.y(C.h,14,C.j),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.eE,w,C.A,w,3)}}
A.a7e.prototype={
cw(d,e){return B.dd(e.a5($.bRi(),x.e),new A.aLf(),new A.aLg(),new A.aLh(),!1,!0,!1,x.X,x.l)}}
A.IA.prototype={
t(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.axb,C.r,B.jA(new A.bgn(v,q,100-t.w.a,w,p)),C.r,new A.alh(u),C.at,D.axa,C.r,new A.ahC(t,u),C.at,D.ax5,C.r,B.bD(u,!0,u,B.n3(u,B.bi(u,new A.Uc(t,220,u),u,u,C.A,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgo(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.at,D.ax_,C.r,B.bD(u,!0,u,B.n3(u,new A.Uo(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgp(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.at,D.ax3,C.r,new A.an5(t,u),C.at,D.ax0,C.r,new A.ajm(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.at,D.ax7,C.r,new A.asS(t,u)],s))
return B.a7(r,C.aa,C.f,C.i)}}
A.alh.prototype={
t(d){var w=null
return B.h("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.o,11,C.j).dt(1.35),w,w,w)}}
A.amA.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cv(m.d,"-")?C.a8:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgq(m,d):l
r=x.p
q=B.b([B.ay(B.h(m.c.toUpperCase(),l,l,l,B.y(C.o,10,C.m).f9(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.a8,0.8)
n=B.aM(4)
q.push(B.b3(l,B.h("Ziel "+p,l,l,l,B.y(C.a8,9,C.m),l,l,l),C.u,l,l,new B.b0(l,l,o,n,l,l,C.F),l,l,l,l,C.nl,l,l,l))}q=B.b([B.ak(q,C.l,C.f,C.i,0,l,l),C.aN,B.bGn(C.dI,B.h(m.d,l,l,l,B.bx(w,22,C.m),l,l,l),C.vY)],r)
p=m.e
if(p!=null)q.push(B.h(p,2,C.ac,l,B.y(C.o,10,C.aP),l,l,l))
q.push(C.cu)
q.push(B.ak(B.b([new A.V_("Vormonat",m.r,l),C.ct,new A.V_("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cu)
q.push(B.ay(new A.YB(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.n3(l,B.bi(l,B.a7(q,C.z,C.f,C.i),l,l,C.dd,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.Q,l)}}
A.V_.prototype={
t(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aM(4)
return B.b3(r,B.h(this.c+" \u2014",r,r,r,B.y(C.o,9,C.m),r,r,r),C.u,r,r,new B.b0(C.am,r,r,q,r,r,C.F),r,r,r,r,C.nl,r,r,r)}w=q>=0
v=w?C.al:C.a8
u=v.fo(0.12)
t=B.cU(v,0.7)
s=B.aM(4)
return B.b3(r,B.ak(B.b([B.ci(w?F.a9D:D.a9C,v,r,10),F.azl,B.h(this.c+" "+C.d.am(q,1)+" %",r,r,r,B.y(v,9,C.m),r,r,r)],x.p),C.l,C.f,C.L,0,r,r),C.u,r,r,new B.b0(u,r,t,s,r,r,C.F),r,r,r,r,C.nl,r,r,r)}}
A.YB.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ag
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eD(v,j[v]))
u=C.b.kr(j,new A.boL())
t=C.b.kr(j,new A.boM())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boN(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5B(k,!1)
w=B.b([A.aLw(k,2,A.ayj(!1,C.n.fo(0.16),0,k,!0,D.vS),C.n,0.35,k,D.DY,k,!0,!1,!0,!1,D.Fv,!1,10,D.Yh,!0,C.lw,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OH(A.bzg(k,k,k,D.alM,l,D.BM,D.DU,D.DZ,w,D.afA,k,m,k,n,D.XB,D.alN,D.a8V),C.az,C.an,k,k)}}
A.Uc.prototype={
t(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aN_
w=C.b.fQ(p,0,new A.b71())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ays(B.b([A.a1g(q,q,D.Bd,q,C.n,q,q,q,r.b,6),A.a1g(q,q,D.Bd,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c5(A.bF4(A.ayl(q,q,u,q,q,A.a5B(q,!1),q,new A.yH(!0,!0,q,new A.b72(),A.a_F(),!1,q,A.avt(),A.a_F()),q,v,q,q,new A.v8(!0,new A.po(16,q,new A.qn(!0,new A.b73(this),46,q),!0),D.kw,D.kw,new A.po(16,q,new A.qn(!0,new A.b74(p),26,q),!0)))),this.d,q)},
aLD(d){if(Math.abs(d)>=1000)return C.d.am(d/1000,1)+" k"
return C.d.am(d,0)}}
A.Uo.prototype={
t(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.R(new B.af(v,new A.b7S(),w),x.i)
C.b.K(o,new B.af(u,new A.b7T(),w))
t=C.b.fQ(o,0,new A.b7U())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ays(B.b([A.a1g(q,q,q,q,C.n,q,q,q,v[s],14),A.a1g(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c5(A.bF4(A.ayl(q,q,n,q,q,A.a5B(q,!1),q,D.DZ,q,o,q,q,new A.v8(!0,D.kw,D.kw,D.kw,new A.po(16,q,new A.qn(!0,new A.b7V(p),26,q),!0)))),this.d,q)
return this.e?r:B.bi(q,r,q,q,C.A,q,3)}}
A.an5.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aMZ
w=new B.af(l,new A.bgZ(),B.ai(l).i("af<1,L>")).kr(0,new A.bh_())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.H)(l),++s){r=l[s]
q=B.h(r.b,m,m,m,B.y(C.h,14,C.m),m,m,m)
p=$.du()
o=r.d
n=new B.aX(4,4)
o=B.b([B.ak(B.b([new B.iR(1,C.d_,B.a7(B.b([q,B.h(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,B.y(C.o,12,C.aP),m,m,m)],v),C.z,C.f,C.i),m),C.aR,B.h(p.aq(o),m,m,m,B.bx(C.h,16,C.m),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cu,new B.DC(new B.da(n,n,n,n),C.bH,B.F1(C.am,8,C.d.c2(o/w,0,1),D.B0),m)],v)
q=C.b.gah(l)
if(r!==q)q=B.G(r)===B.G(q)&&B.a_K(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.r)
C.b.K(u,o)}return B.bi(m,B.a7(u,C.l,C.f,C.i),m,m,C.A,m,3)}}
A.ajm.prototype={
t(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.Cj("Aktive Kunden",""+s,u),1)
w=B.ay(new A.Cj("K\xe4ufe",""+t.a,u),1)
v=$.du()
return B.bi(u,B.ak(B.b([s,w,B.ay(new A.Cj("\xd8-Warenkorb",v.aq(t.d),u),1),B.ay(new A.Cj("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.A,u,3)}}
A.Cj.prototype={
t(d){var w=null
return B.a7(B.b([B.h(this.c.toUpperCase(),w,w,w,B.y(C.o,10,C.m).f9(0.6),w,w,w),C.be,B.h(this.d,w,w,w,B.bx(C.h,20,C.m),w,w,w)],x.p),C.z,C.f,C.L)}}
A.asS.prototype={
t(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.bqZ(),B.ai(q).i("af<1,L>")).kr(0,new A.br_()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.H)(q),++v){u=q[v]
t=u.d
s=new B.aX(4,4)
t=B.b([B.ak(B.b([new B.iR(1,C.d_,B.h(u.b,1,C.ac,r,B.y(C.h,13,C.m),r,r,r),r),B.h(""+u.c+"\xd7 ",r,r,r,B.y(C.o,12,C.N),r,r,r),B.h($.du().aq(t),r,r,r,B.y(C.h,13,C.m),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.aN,new B.DC(new B.da(s,s,s,s),C.bH,B.F1(C.am,6,C.d.c2(t/p,0,1),D.B0),r)],o)
s=C.b.gah(q)
if(u!==s)s=B.G(u)===B.G(s)&&B.a_K(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.bi(r,B.a7(n,C.l,C.f,C.i),r,r,C.A,r,3)}}
A.wU.prototype={
t(d){var w=null
return B.bi(w,B.h(this.c,w,w,w,B.y(C.o,13,C.j),w,w,w),C.a9,w,C.A,w,3)}}
A.ahC.prototype={
cw(d,e){return B.dd(e.a5($.bxx(),x.fM),new A.b5l(this,d,e),new A.b5m(),new A.b5n(),!1,!0,!1,x.h,x.l)}}
A.Bk.prototype={
W(){return new A.TP()},
aZ9(){return this.d.$0()}}
A.TP.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aM()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.fd(J.a6(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pt[t].a
if(v)r=""
else{r=B.bk(J.a2(w,s))
if(r==null)r=null
r=C.d.am(r==null?0:r,2)
r=B.b5(r,".",",")}u.m(0,s,new B.bw(new B.cE(r,C.bl,C.aJ),$.ag()))}q.e!==$&&B.aZ()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ce(v,v.r,v.e,B.p(v).i("ce<2>"))
while(v.u()){w=v.d
w.T$=$.ag()
w.R$=0}this.ar()},
rG(d){var w=this.e
w===$&&B.a()
w=C.c.ba(w.h(0,d).a.a)
w=B.b5(w,".","")
w=B.hy(B.b5(w,",","."))
return w==null?0:w},
a4F(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pt[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.am(u,2)
s=B.b5(s,".",",")
t.lK(0,t.a.yc(C.aJ,C.bl,s))}}this.J(new A.b59())},
aFq(){this.a4F(D.apJ)
this.c.O(x.q).f.aR(D.aA6)},
Iy(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Iy=B.l(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b4(a1)
for(e=0;e<8;++e)a2.E(0,D.pt[e].a)
q=a2
t=4
w=7
return B.k($.aFW.cj().zv(B.b(["csv","txt"],x.s),C.xA,!0),$async$Iy)
case 7:p=a5
a2=p
o=a2==null?null:J.Kr(a2.a).c
if(o==null){w=1
break}n=C.aH.ae7(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BR.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.H)(a1),++e){l=a1[e]
k=J.awi(l,B.bR("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.ba(J.a2(k,0)).toLowerCase()
i=J.xD(q,j)?j:D.arZ.h(0,j)
if(i==null)continue
d=C.c.ba(C.b.n4(J.bRZ(k,1)))
d=B.b5(d,"\u20ac","")
d=B.b5(d," ","")
d=B.b5(d,".","")
h=B.b5(d,",",".")
g=B.hy(h)
if(g!=null)J.fu(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aR(D.azF)
w=1
break}r.a4F(m)
r.c.O(x.q).f.aR(B.bY(null,null,null,null,null,C.q,null,B.h(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$Iy,v)},
IJ(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IJ=B.l(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b5a(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0J("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.e5(),0,10),"p_cash_and_bank",q.rG("cash_and_bank"),"p_receivables",q.rG("receivables"),"p_inventory_value",q.rG("inventory_value"),"p_other_current_assets",q.rG("other_current_assets"),"p_fixed_assets",q.rG("fixed_assets"),"p_current_liabilities",q.rG("current_liabilities"),"p_long_term_liabilities",q.rG("long_term_liabilities"),"p_equity",q.rG("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZ9()
o=q.c
o.toString
B.aW(o,!1).eq()
q.c.O(x.q).f.aR(D.azJ)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aR(B.bY(null,null,null,null,null,C.q,null,B.h("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b5b(q))
w=r.pop()
break
case 6:case 1:return B.n(u,v)
case 2:return B.m(s.at(-1),v)}})
return B.o($async$IJ,v)},
t(d){var w,v,u,t,s=this,r=null,q=B.h("Bilanzwerte erfassen",r,r,r,B.bx(C.h,18,C.m),r,r,r),p=s.f?r:new A.b5d(s,d),o=s.d
o===$&&B.a()
p=B.f5(D.ac6,B.h("Stichtag: "+C.c.a_(o.e5(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.f5(D.adg,D.aG4,o?r:s.gaEt(),r),1)
v=x.p
w=B.b([p,C.D,B.ak(B.b([w,C.aR,B.ay(B.f5(D.ad5,D.aFP,o?r:s.gaFp(),r),1)],v),C.l,C.f,C.i,0,r,r),C.r],v)
for(u=0;u<8;++u){p=D.pt[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dX(r,C.aF,!1,r,!0,C.q,r,B.e5(),o.h(0,p.a),r,r,r,r,r,2,new B.c1(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aI,r,r,r,r,C.iq,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.A,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aj,r,C.W,r,r,r,r),C.D],v))}w.push(B.h("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.o,11,C.j),r,r,r))
p=B.c5(B.ez(B.a7(w,C.aa,C.f,C.L),r,C.H),r,380)
o=s.f
w=B.cY(C.bR,r,r,o?r:new A.b5e(d),r,r)
o=o?r:s.gaF9()
t=B.dM(C.n,C.h,r,r,r,r,r)
return B.hY(B.b([w,B.dj(s.f?F.YO:C.dv,o,t)],v),C.p,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.G(this)===B.G(e)&&B.a_K(this.gbD(),e.gbD())
else w=!0
return w},
gB(d){return(B.f6(B.G(this))^B.bN7(this.gbD()))>>>0},
j(d){B.bGi()
return B.G(this).j(0)}}
A.La.prototype={
W(){return new A.TQ(B.A(x.S,x.J),new A.ayv(B.A(x.x,x.gF)),null,null)}}
A.TQ.prototype={
t(d){var w,v=this,u=v.a2C(),t=v.CW
t.toString
t=v.a2D(t.aB(0,v.ghK().gp(0)))
w=v.a2D(u)
v.a.toString
return new A.L5(new A.a1f(t,w,null),u,null)},
a2D(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ays(s.c,s.d,!1,r,s.a))}return d.aR4(w)},
a2C(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vt(t.ch)
if(r)s=w.a
r=t.y
t=t.aS0(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aR5(A.by0(!1,!0,!0,v.d,v.c,u.gata(),v.f,v.e))}return t},
atb(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagA()||e==null||e.a==null){w=v.cy
v.J(w.gaQs(w))
return}v.J(new A.b5q(v,e))},
o_(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2C(),new A.b5r(w)))}}
A.o_.prototype={
W4(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayl(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aS0(d,e){return this.W4(null,null,d,e)},
aR5(d){return this.W4(null,d,null,null)},
aR4(d){return this.W4(d,null,null,null)},
Y4(d,e,f){var w,v,u,t=A.kB(d.ch,e.ch,f,A.c5y(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bGr(d.d,e.d,f),q=A.bIn(d.e,e.e,f),p=A.bGp(d.c,e.c,f),o=e.a
o=A.a5B(B.a1w(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.ayl(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bGk(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayk.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.ayt(),B.ai(v).i("af<1,L>")).kr(0,new A.ayu())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.it.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mK.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1c.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1h.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aed.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1i.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Da.prototype={
gbD(){return[this.a,this.b,C.cG,C.x,null]}}
A.Lb.prototype={}
A.a1j.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xQ.prototype={
hl(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Y4(v,w,d)}}
A.ahy.prototype={}
A.ahF.prototype={}
A.ahG.prototype={}
A.ahI.prototype={}
A.ahJ.prototype={}
A.ahK.prototype={}
A.ahL.prototype={}
A.ahM.prototype={}
A.ahN.prototype={}
A.ayv.prototype={
Vt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uI(0,0,!1)
v=new A.zx(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uI(t,u,!0)}w=null
try{w=C.b.qw(d,new A.ayw())}catch(s){return new A.uI(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uI(q,r,!1)
u.m(0,v,j)
return j}}
A.uI.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahH.prototype={}
A.ayx.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0J(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ad5(t,A.by_(w,t.a),u)
l.y=u
l.aTn(e,u,f)
l.amH(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTw(d,e,m,t,r,s,n,o,f)}}},
ad5(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e9("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iY(p,B.ai(p).i("iY<1>")).aD(0,new A.ayy(t,q,r,s))
w.push(new A.a6i(q))}return w},
aTn(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aX(m,m)
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
if(a1!==a2){if(a1>a2){a3=b2.dI(Math.max(t,a2),b4,b7)
a4=B.Qj(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.Qj(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seX(null)
a6=b2.f.e6()
v.drawRRect(B.mF(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gp(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.ba(v.save())
v.clipRect(B.dK(b1),$.nO()[1],!0)
a6=b2.f.e6()
v.drawRRect(B.mF(a4),a6)
a6.delete()
v.restore()
b2.aTu(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.hf(a4))
n=A.aBL(new B.cl(n.r,C.ai,null,null,k),o.r)
a6=b2.r.e6()
k=n.e
v.drawPath((k==null?n.e=new B.mP(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTw(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B1(a5,a5,a5,a5,B.dl(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().a_L(a8,a7.b),a7.a),C.cG,C.x,a5,b6.c,C.bm)
w.agU(b1.f)
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
n=u+o.gex()
m=v+4+(o.gd3(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aIF)j=v===D.Zx&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_M(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aX(s,s)
e=B.Ga(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lw().L0(new B.F(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.L0(new B.F(p,q.gbT(q)),d)
q=g.gc7()
p=w.b.c
s=g.gaj5()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.WK(d,new A.ayz(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aTu(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.geo(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aX(i.z,i.Q):C.a3
s=w?new B.aX(i.x,i.y):C.a3
r=w?C.a3:new B.aX(i.e,i.f)
w=w?C.a3:new B.aX(i.r,i.w)
q=B.Qj(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a3:new B.aX(i.z,i.Q)
p=v?C.a3:new B.aX(i.x,i.y)
o=v?new B.aX(i.e,i.f):C.a3
q=B.Qj(w,s,u,r,t,p,o,v?new B.aX(i.r,i.w):C.a3)}else q=B.bA_(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
Xo(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ad5(b2,A.by_(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1j(d,q,a0,o,a2,a1,new A.eD(d.a,v),new B.r(n,t))}}return null}}
A.a6i.prototype={}
A.a1f.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.ayx()
t.a1U()
$.an()
w=B.b_()
w.b=C.bk
t.f=w
w=B.b_()
w.b=C.b3
t.r=w
w=B.b_()
w.b=C.bk
w.r=C.p.gp(0)
t.w=w
w=B.b_()
w.b=C.b3
w.r=C.I.gp(0)
w.c=1
t.x=w
t=new A.abl(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.ZE(v.cy)
t.ag3()
return t},
bx(d,e){e.sih(0,this.d)
e.sZo(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.abl.prototype={
sih(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZo(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a1t(d.cy)
w.bf()},
scN(d){if(this.h0.k(0,d))return
this.h0=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1M(t,v),new A.vR(u.fB,u.aI,u.h0,x.Q))
s.restore()},
a_E(d){var w=this,v=w.gC(0)
return new A.Lb(w.fC.Xo(d,v,new A.vR(w.fB,w.aI,w.h0,x.Q)))}}
A.a15.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D9.prototype={
L(){return"AxisSide."+this.b}}
A.tF.prototype={}
A.qn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acN.prototype={
gbD(){return[!1,0,0,0]}}
A.po.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.v8.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eD.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eD))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gB(d){return C.d.gB(this.a)^C.d.gB(this.b)}}
A.yH.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aef.prototype={
gbD(){return[this.a,this.b]}}
A.Qn.prototype={
gbD(){return[this.a,this.b]}}
A.n4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nu.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kT.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lg.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6t.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeC.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N9.prototype={
gbD(){return[this.a,this.b,!0]}}
A.v7.prototype={}
A.Ng.prototype={
aew(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bk
d.iP(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.aht.prototype={}
A.ahx.prototype={}
A.akI.prototype={}
A.akX.prototype={}
A.akY.prototype={}
A.al_.prototype={}
A.al0.prototype={}
A.alP.prototype={}
A.alO.prototype={}
A.alQ.prototype={}
A.app.prototype={}
A.arg.prototype={}
A.arh.prototype={}
A.asW.prototype={}
A.atA.prototype={}
A.atz.prototype={}
A.atB.prototype={}
A.ay9.prototype={
Ne(d,e,f,g,h,i){return new B.il(this.aX9(d,e,f,g,h,i),x.g4)},
aX8(d,e,f,g){return this.Ne(d,e,f,!0,g,!0)},
aX9(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Ne(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().akd(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h7(u-s,v)*v===u
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
A.L4.prototype={
a1U(){var w,v=this
$.an()
w=B.b_()
w.b=C.b3
v.a=w
w=B.b_()
w.b=C.bk
v.b=w
w=B.b_()
w.b=C.bk
v.e=w
w=B.b_()
w.b=C.b3
v.c=w
v.d=B.b_()},
i5(d,e,f){var w=this
w.a0K(d,e,f)
w.aTj(e,f)
w.aTt(e,f)
w.aTs(e,f)},
aTs(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().Pj(w.a,a1.r-a1.f)
u=$.bx2().Ne(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l6(n,m)
if(j!=null){p.r=C.E.gp(0)
p.seX(j.mL(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c3(p.r)
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}a3.E3(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lw().Pj(w.b,a1.y-a1.x)
u=$.bx2().Ne(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l6(n,m)
if(k!=null){q.r=C.E.gp(0)
q.seX(k.mL(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c3(q.r)
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gp(0)}a3.E3(n,m,d.a,f.d)}},
aTj(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hg(new B.I(0,0,0+w.a,0+w.b),this.b)},
aTt(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.H)(k),++u){t=k[u]
s=B.l6(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.seX(p.mL(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seX(null)}o=n.e.e6()
w.drawRect(B.dK(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.H)(l),++u){t=l[u]
s=B.l6(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.seX(q.mL(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seX(null)}o=n.e.e6()
j.drawRect(B.dK(s),o)
o.delete()}},
aTr(d,e,f){var w,v
this.a0K(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aex(d,e,f,w)
if(v.b.length!==0)this.aTy(d,e,f,w)},
aex(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.H)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l6(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seX(j.mL(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
e.E3(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=C.d.ap(o,n.gbT(n).eF(0,2))
J.ba(r.save())
r.translate(h,g)
n=n.gOc().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
o=C.d.ap(o,n.gbT(n).eF(0,2))
k=f.d
k===$&&B.a()
s.aey(0,n,new B.r(h,o),k)}}},
aTy(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.H)(w),++q){p=w[q]
o=p.e
n=d.ff(o,a3,a2)
m=new B.r(n,0)
o=d.ff(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l6(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seX(j.mL(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
a1.E3(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=n.gbT(n).eF(0,2)
f=C.d.ap(o,h)
e=C.d.ap(u,g)
J.ba(r.save())
r.translate(f,e)
n=n.gOc().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
g=n.gbT(n).ag(0,2)
o=C.d.ap(o,h)
k=C.d.ap(u,g)
j=d.d
j===$&&B.a()
s.aey(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_M(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.L5.prototype={
gam4(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gam5(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gam6(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gam2(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amo(d){var w,v=this,u=null,t=v.d,s=A.byM(t.d),r=t.a
r=r.a&&A.bSD(r.b)?r.b:u
w=B.b([B.b3(u,v.c,C.u,u,u,new B.b0(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayb(w)
if(v.gam4())C.b.hA(w,s.$1(!0),new A.AN(D.B7,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gam6())C.b.hA(w,s.$1(!0),new A.AN(D.mz,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gam5())C.b.hA(w,s.$1(!0),new A.AN(D.B8,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gam2())C.b.hA(w,s.$1(!0),new A.AN(D.dJ,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
t(d){return B.jA(new A.aya(this))}}
A.RO.prototype={
W(){return new A.Yq(new B.bj(null,x.eF))}}
A.Yq.prototype={
ayI(){switch(this.a.c.a){case 0:return C.ea
case 1:return C.fF
case 2:return C.dI
case 3:return C.fG}},
azd(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayK(d){this.a.toString
return},
aA(){this.aM()
$.cy.x2$.push(this.ga56())},
bd(d){this.bG(d)
$.cy.x2$.push(this.ga56())},
t(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azd()
return B.bAy(B.b2N(0,B.b3(v.ayI(),t.e,C.u,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.acO.prototype={
bm(d){return A.bSt(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a8()}w=this.f
if(e.V!==w){e.V=w
e.a8()}w=this.r
if(e.U!==w){e.U=w
e.a8()}}}
A.a16.prototype={
h6(d){if(!(d.b instanceof B.hp))d.b=new B.hp(null,null,C.v)},
hM(d){if(this.A===C.aG)return this.yl(d)
return this.Wh(d)},
aLR(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
a9X(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dB(d){var w=this.a9W(d,B.hG())
switch(this.A.a){case 0:return d.bC(new B.F(w.a,w.b))
case 1:return d.bC(new B.F(w.b,w.a))}},
a9W(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.aG?d.b:d.d,m=o.aa$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.ev(u,null)
break
case 1:q=B.ev(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9X(p)
t=Math.max(t,o.aLR(p))
m=r.aw$}return new A.bgw(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.M.prototype.ga7.call(p)),n=p.a9W(o,B.mE()),m=n.a,l=n.b
switch(p.A.a){case 0:p.fy=o.bC(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.bC(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.aa$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a9X(r==null?B.P(B.U("RenderBox was not laid out: "+B.G(w).j(0)+"#"+B.c0(w))):r)/2
switch(p.A.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aw$;++u}},
ed(d,e){return this.vm(d,e)},
aQ(d,e){if(this.gC(0).gX(0))return
this.a2.sbk(0,null)
this.tb(d,e)},
l(){this.a2.sbk(0,null)
this.aph()}}
A.bgw.prototype={}
A.ayc.prototype={}
A.k1.prototype={
gbD(){return[this.a,this.b]}}
A.nZ.prototype={}
A.ahu.prototype={}
A.ahv.prototype={
aL(d){var w,v,u
this.fj(d)
w=this.aa$
for(v=x.L;w!=null;){w.aL(d)
u=w.b
u.toString
w=v.a(u).aw$}},
aG(d){var w,v,u
this.f7(0)
w=this.aa$
for(v=x.L;w!=null;){w.aG(0)
u=w.b
u.toString
w=v.a(u).aw$}}}
A.ahw.prototype={}
A.TN.prototype={
l(){var w,v,u
for(w=this.WX$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AN.prototype={
goN(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.dI
case 1:return C.fG
case 2:return C.ea
case 3:return C.fF}},
gb0V(){var w=this.d,v=A.byM(w.d),u=A.bGo(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ag(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ag(0,new B.al(u.a,0,u.c,0))}},
gaiU(){var w=this.d,v=A.bGo(w.a),u=A.byM(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd4(0)+(v.gd3(0)+v.gd4(0))
case 1:case 3:return u.gex()+v.gex()}},
aXV(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goN().c.d
if(o==null)o=$.lw().Pj(d,f-e)
w=p.c
v=w!==D.mz
if((!v||w===D.dJ)&&p.d instanceof A.o_){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.by_(u,d)
w=new B.iY(t,B.ai(t).i("iY<1>"))
s=w.ghv(w).f2(0,new A.b_K(u),x.W).h2(0)}else{r=$.bx2()
w=!v||w===D.dJ
v=p.d
q=r.aX8(w?v.w:v.z,o,f,e)
v=B.kc(q,new A.b_L(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.R(v,B.p(v).i("t.E"))}w=B.ai(s).i("af<1,nZ>")
w=B.R(new B.af(s,new A.b_M(p,e,f,o,g,d),w),w.i("ar.E"))
return w},
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goN()
w=j.goN()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b3(i,i,C.u,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mz
u=!v
t=!u||w===D.dJ
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dJ?C.H:C.aG
q=B.b([],x.p)
if(w===D.B7||v)j.goN()
if(j.goN().c.a){v=!u||w===D.dJ?r:j.goN().c.c
p=!u||w===D.dJ?j.goN().c.c:r
o=j.gb0V()
n=!u||w===D.dJ?C.aG:C.H
j.gaiU()
m=j.gaiU()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.b3(i,A.bZN(new A.ayc(),n,j.aXV(r-m,l,u,w)),C.u,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B8||w===D.dJ)j.goN()
return new B.eO(t,i,i,B.bVj(q,C.l,s,i,C.f,C.L,0,i,i,C.bY),i)}}
A.a1l.prototype={
gbD(){return[this.a,this.b]}}
A.a5A.prototype={
gbD(){return[this.a,this.b]}}
A.Nn.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5C.prototype={
gacq(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayI.prototype={}
A.aFi.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahQ.prototype={}
A.akU.prototype={}
A.akV.prototype={}
A.al1.prototype={}
A.Le.prototype={
i5(d,e,f){}}
A.vR.prototype={}
A.ho.prototype={
gdN(){return null},
gagA(){var w,v=this
B.bz()
B.bz()
B.bz()
w=v instanceof A.Nm
if(w)return!0
return!(v instanceof A.Nj)&&!(v instanceof A.Ni)&&!(v instanceof A.Nk)&&!(v instanceof A.Nh)&&!w&&!(v instanceof A.Nl)}}
A.a5G.prototype={
gdN(){return this.a.b}}
A.a5H.prototype={
gdN(){return this.a.b}}
A.a5I.prototype={
gdN(){return this.a.b}}
A.Ni.prototype={}
A.Nj.prototype={}
A.a5L.prototype={
gdN(){return this.a.b}}
A.Nl.prototype={}
A.Nm.prototype={
gdN(){return this.a.b}}
A.a5F.prototype={
gdN(){return this.a.b}}
A.a5E.prototype={
gdN(){return this.a.b}}
A.Nh.prototype={
gdN(){return this.a.b}}
A.a5J.prototype={
gdN(){return this.a.gdN()}}
A.a5K.prototype={
gdN(){return this.a.gdN()}}
A.Nk.prototype={
gdN(){return this.a.gdN()}}
A.Gm.prototype={
ZE(d){this.V=d.b
this.U=d.c
this.a2=d.d},
ag3(){var w=this,v=null,u=w.ai=B.bzE(v,v)
u.ay=new A.aVL(w)
u.ch=new A.aVM(w)
u.CW=new A.aVN(w)
u.cy=new A.aVO(w)
u.cx=new A.aVP(w)
u=w.aJ=B.Ha(v,-1,v)
u.A=new A.aVQ(w)
u.a4=new A.aVR(w)
u.V=new A.aVS(w)
u=w.bA=B.a7C(v,w.a2,v)
u.p3=new A.aVT(w)
u.p4=new A.aVU(w)
u.RG=new A.aVV(w)},
cA(){var w=x.k.a(B.M.prototype.ga7.call(this))
this.fy=new B.F(w.b,w.d)},
dB(d){return new B.F(d.b,d.d)},
kL(d){return!0},
mW(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.oK(d)
w=v.aJ
w===$&&B.a()
w.oK(d)
w=v.ai
w===$&&B.a()
w.oK(d)}else if(x.gJ.b(d))v.l8(new A.a5K(d))},
gNK(d){return new A.aVW(this)},
gNM(d){return new A.aVX(this)},
l8(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_E(w):null
u.V.$2(d,v)
u.a4=C.bv},
gLx(d){return this.a4},
gG0(){var w=this.av
w===$&&B.a()
return w},
aL(d){this.fj(d)
this.av=!0},
aG(d){this.av=!1
this.f7(0)},
$ijD:1}
A.OH.prototype={
W(){return new A.Wc(B.b([],x.r),B.A(x.S,x.J),new A.aLy(B.A(x.y,x.dj)),null,null)}}
A.Wc.prototype={
t(d){var w,v=this,u=v.a58(),t=v.CW
t.toString
t=v.abW(t.aB(0,v.ghK().gp(0)))
w=v.abW(u)
v.a.toString
return new A.L5(new A.a7s(t,w,null),u,null)},
abW(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ai(w).i("af<1,ed>")
w=B.R(new B.af(w,new A.bgF(this,d),v),v.i("ar.E"))
return d.aRY(w,this.cy)},
a58(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vt(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSc(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRC(new A.F0(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaA2(),t.c,t.d))}return r},
aA3(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagA())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bgD(v))
return}v.J(new A.bgE(v,e))},
o_(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a58(),new A.bgG(w)))}}
A.pX.prototype={
Y4(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5B(B.a1w(d.a.b,j.b,f),j.a)
w=A.bGk(d.at,e.at,f)
v=A.bGp(d.c,e.c,f)
u=A.bGr(d.d,e.d,f)
t=A.bIn(d.e,e.e,f)
s=A.kB(d.ch,e.ch,f,A.c7F(),x.cz)
s.toString
r=A.kB(d.CW,e.CW,f,A.c7E(),x.bO)
r.toString
u=A.bzg(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
W5(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bzg(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSc(d,e,f,g){return this.W5(null,null,d,e,f,g,null)},
aRC(d){var w=null
return this.W5(w,d,w,w,w,w,w)},
aRY(d,e){var w=null
return this.W5(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ed.prototype={
arQ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qw(n.a,new A.aLx())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.H)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.aZ()
n.b=q
r.toString
n.c!==$&&B.aZ()
n.c=r
s.toString
n.d!==$&&B.aZ()
n.d=s
t.toString
n.e!==$&&B.aZ()
n.e=t}},
adQ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLw(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRJ(d){return this.adQ(d,null)},
aRL(d){return this.adQ(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OI.prototype={
gbD(){return[this.a]}}
A.a1e.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.L9.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yG.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aLi.prototype={
L(){return"LabelDirection."+this.b}}
A.a5D.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.F0.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7t.prototype={
gbD(){return[4,C.hO,16,D.xx,0,120,A.c7H(),!1,!1,!1,0,C.J,A.c7G()]}}
A.n8.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qu.prototype={}
A.rJ.prototype={
gbD(){return[this.a,this.b,C.cG,C.x,null]}}
A.tG.prototype={
gbD(){return[this.a,this.b]}}
A.GN.prototype={
gbD(){return[this.a]}}
A.OJ.prototype={}
A.zt.prototype={
hl(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Y4(v,w,d)}}
A.ahD.prototype={}
A.ahE.prototype={}
A.ahR.prototype={}
A.akW.prototype={}
A.akZ.prototype={}
A.amI.prototype={}
A.amJ.prototype={}
A.amK.prototype={}
A.amM.prototype={}
A.amN.prototype={}
A.amO.prototype={}
A.amP.prototype={}
A.arf.prototype={}
A.asV.prototype={}
A.aLy.prototype={
Vt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.y8
u=new A.zx(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zu(s,r,q,t,!0)}w=null
try{w=C.b.qw(d,new A.aLz())}catch(p){return D.y8}v=null
try{v=C.b.qw(w.a,new A.aLA())}catch(p){return D.y8}o=v.a
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
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amL.prototype={}
A.aLB.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gacq(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.I(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aQz(new B.I(0,0,u,v))}d.a0J(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.H)(v),++t)d.aTp(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTl(a3,q,a4)
d.aTq(a3,q,a4)
d.amG(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.S(o)
if(n.gq(o)!==p.length)throw B.e(B.e9("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vC(q,i,j,k))}}d.aTx(a3,s,a4)
if(w.gacq(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.R(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTv(a2,a3,v,f,new A.GN(g),a4)}},
aTl(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.byL(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.H)(n),++v){u=n[v]
t=p.a_d(o,e,u,f)
s=p.ak5(o,e,t,u,f)
r=p.a_f(o,e,t,u,f,!0)
q=p.ak4(o,e,t,u,f)
p.aTo(d,s,p.a_c(o,e,t,u,f,!0),f,e)
p.aTi(d,q,r,f,e)
p.aTm(d,t,e)
p.aTk(d,t,e,f)}},
aTp(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.byL(a5.a),a8=A.byL(a6.a)
if(a7.length!==a8.length)throw B.e(B.bI("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bV.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ai(n).i("cx<1>")
l=B.R(new B.cx(n,m),m.i("ar.E"))
k=a2.a_d(a3,a5,o,b2)
j=a2.a_e(a3,a6.aRL(l),l,b2,k)
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
if(q){a0.r=C.E.gp(0)
a0.seX(v.mL(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.I:w).gp(0)
a0.seX(null)}$.an()
a1=new B.mO(C.dx,C.bk,C.e5,C.et,C.dT).e6()
n=B.dK(new B.I(0,0,t,s))
m=$.bV.b
if(m===$.bV)B.P(B.vB(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e6()
n=j.e
a4.drawPath((n==null?j.e=new B.mP(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTq(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_j(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aew(s,q,new B.r(p,o))}}},
aTx(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fM(b3,new A.aLE())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.H)(b3),++o){n=b3[o]
m=n.a
l=b1.a_j(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.P(B.rI(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.kz(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kz(q.$2(m,k))))
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
b0=B.l6(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.seX(a6.mL(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c3(f.r)
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gp(0)}b2.E3(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.P(B.rI(d.a))
f.aew(t,j,new B.r(h,g))}}},
a_e(d,e,f,g,h){var w=this.ak6(d,e,f,g,h)
return w},
a_d(d,e,f,g){return this.a_e(d,e,f,g,null)},
ak6(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.an().r,C.ai,null,null,B.b([],x.v)):a5,f=J.S(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.aE(new B.fo(d,a0))
if(e===1)g.aE(new B.cw(d,a0))}else g.aE(new B.cw(d,a0))
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
s=new B.Ma(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_f(d,e,f,g,h,i){var w=this,v=B.N3(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aE(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,s))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.px())
return v},
ak5(d,e,f,g,h){return this.a_f(d,e,f,g,h,!1)},
a_c(d,e,f,g,h,i){var w=this,v=B.N3(f),u=J.S(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aE(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,0))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.px())
return v},
ak4(d,e,f,g,h){return this.a_c(d,e,f,g,h,!1)},
aTo(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bzD(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.ik(e,r.r)},
aTi(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bzD(s,q.b,q.c,new B.I(v,0,u,t))
d.a.ik(e,r.r)},
aTm(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.N5(B.N3(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kd:C.e5
u.e=C.et
u.r=v.gp(0)
u.seX(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zC(C.aL,w.c*0.57735+0.5)
d.a.ik(A.aBL(e,f.cy).ef(w.b),this.f)},
aTk(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kd:C.e5
q.e=C.et
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
A.bzD(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bXJ(t)
d.a.ik(A.aBL(e,f.cy),s.f)},
aTv(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bMC(b1),b3=J.S(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e9("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().a_L(b4,u.b)
s=u.a
r=w.k(0,C.iR)?new B.ku(1):w
q=new B.tC(new B.hS(s,a8,a8,C.bv,a8,a8,a8,a8,a8,a8,t),C.cG,C.x,r,a8,a8,a8,a8,C.bm,a8)
q.agU(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.H)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hO.gex()
k=o+(w-1)*4+(C.hO.gd3(0)+C.hO.gd4(0))
j=t-k-16
i=a7.a_M(b3,l,D.xx,0)
b3=i+l
w=j+k
h=new B.aX(4,4)
g=B.Ga(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bMB(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().L0(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().L0(new B.F(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b5.WK(0,new A.aLC(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.H)(b0),++n){q=b0[n]
a5=A.c_o(q.r,q.w)
A:{if(D.E6===a5){a6=a3
break A}if(D.E7===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.WK(0,new A.aLD(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
a_j(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
Xo(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akw(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fM(t,new A.aLF())
return t.length===0?null:t},
akw(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.H)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hA(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qu(s,f,g,C.b.hz(w,v),v.a,v.b)}else return null}}
A.vC.prototype={}
A.a7s.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aLB()
t.a1U()
$.an()
w=B.b_()
w.b=C.b3
t.f=w
w=B.b_()
w.b=C.bk
t.r=w
w=B.b_()
w.b=C.b3
t.w=w
w=B.b_()
w.b=C.bk
w.r=C.I.gp(0)
w.a=D.a_P
t.x=w
w=B.b_()
w.b=C.b3
w.r=C.E.gp(0)
t.y=w
w=B.b_()
w.b=C.bk
w.r=C.p.gp(0)
t.z=w
w=B.b_()
w.b=C.b3
w.r=C.I.gp(0)
w.c=1
t.Q=w
t=new A.aby(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.ZE(v.cx)
t.ag3()
return t},
bx(d,e){e.sih(0,this.d)
e.sZo(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.aby.prototype={
sih(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZo(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a1t(d.cx)
w.bf()},
scN(d){if(this.h0.k(0,d))return
this.h0=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1M(t,v),new A.vR(u.fB,u.aI,u.h0,x.o))
s.restore()},
a_E(d){var w=this,v=w.gC(0)
return new A.OJ(w.fC.Xo(d,v,new A.vR(w.fB,w.aI,w.h0,x.o)))}}
A.NM.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1M.prototype={
aQz(d){this.a.a.clipRect(B.dK(d),$.nO()[1],!0)
return null},
aeE(d,e){d.aQ(this.a,e)},
WK(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.ba(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lw()
s.Zm(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
E3(d,e,f,g){var w=new B.cl($.an().r,C.ai,null,null,B.b([],x.v))
w.aE(new B.fo(d.a,d.b))
w.aE(new B.cw(e.a,e.b))
this.a.ik(A.aBL(w,g),f)}}
A.zx.prototype={
gbD(){return[this.a]}}
A.amW.prototype={}
A.a1X.prototype={}
A.b3d.prototype={
L0(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYv(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aX(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aX(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aX(v,v)
s=d.d
return new B.da(w,u,t,s.a>v||s.b>v?new B.aX(v,v):s)},
aYw(d,e){var w,v
if(d==null)return D.a0_
w=d.b
v=e/2
return d.aRO(w>v?v:w)},
Pj(d,e){var w,v=Math.max(C.d.cF(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0G(w)},
b0G(d){if(d<1)return this.aKi(d)
return this.a8Z(d)},
aKi(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8Z(d*q)/q},
a8Z(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aV(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
akl(d){if(d>=1)return 1
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
a_L(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.iW
w=e.a?u.w.c4(e):e
v=B.bN(d,C.vr)
v=v==null?null:v.ay
return v===!0?w.c4(C.mh):w},
akd(d,e,f,g){var w=C.d.aj(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["L(qw)","D(eD)","~(v,fL)","L(ed,v)","T<~>()","L(L,qw)","bS(L,tF)","pL(L)","v(qu,qu)","IA(oh)","If(B,bE)","JD(oi)","vG(@)","wB(@)","ed(L)","CT(@)","ac(L,tF)","v6(cW<v6>)","En(cW<aG7>)","L(vG)","L(wB)","wU(B,bE)","Bk(z)","~()","qw(@)","~(ho,Lb?)","xQ(@)","L(it)","D(fL)","~(v,it)","~(@)","k1(nZ)","c(nZ)","k1(bH<v,L>)","k1(L)","nZ(k1)","~(ho,OJ?)","ed(ed)","lK(wr<lK>)","zt(@)","T<oi>(cg<oi>)","tG(v)","v7(eD,L,ed,v)","rJ(n8)","D(ed)","v(vC,vC)","L(fL)","T<oh>(cg<oh>)","v(v,v,L)","fL(fL,fL,L)","it(it,it,L)","mK(mK,mK,L)","Da?(fL,v,it,v)","E(fL)","c(L,tF)","eD(eD,eD,L)","D(L)","n4(n4,n4,L)","nu(nu,nu,L)","kT(kT,kT,L)","lg(lg,lg,L)","f(kT)","f(lg)","ed(ed,ed,L)","mL(mL,mL,L)","v7(eD,L,ed,v{size:L?})","D(eD,ed)","L(r,r)","u<tG>(ed,u<v>)","yf(z)","u<rJ>(u<n8>)","E(n8)","yE(eq<B?>)"])
A.aG3.prototype={
$1(d){var w=B.cT(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qw(J.a6(v==null?"":v),A.pd(w.h(0,"revenue_net")),A.pd(w.h(0,"expense_net")),A.pd(w.h(0,"result_net")))},
$S:z+24}
A.aG4.prototype={
$1(d){var w,v,u,t=B.cT(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.a6(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.pd(t.h(0,"gross"))
u=B.bk(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vG(s,r,w,v,u,A.pd(t.h(0,"avg_basket")))},
$S:z+12}
A.aG5.prototype={
$1(d){var w,v=B.cT(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.a6(t==null?"unbekannt":t)
w=B.bk(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wB(u,t,w,A.pd(v.h(0,"gross")))},
$S:z+13}
A.aGm.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.S(d)
v=w.h(d,"code")
v=J.a6(v==null?"":v)
u=w.h(d,"name")
u=J.a6(u==null?"":u)
t=w.h(d,"direction")
return new A.CT(v,u,J.a6(t==null?"expense":t),A.uk(w.h(d,"net")),A.uk(w.h(d,"tax")),A.uk(w.h(d,"gross")))},
$S:z+15}
A.buL.prototype={
$1(d){return new A.v6(d.a5($.bK(),x.A))},
$S:z+17}
A.buM.prototype={
$1(d){return new A.En(d.a5($.bRj(),x.D))},
$S:z+18}
A.bwA.prototype={
$1(d){return E.aG6()},
$S:z+38}
A.buN.prototype={
$1(d){var w=d.a5($.xB(),x.P)
return d.a5($.aw6(),x.a).Gs(w)},
$S:z+40}
A.buK.prototype={
$1(d){var w=d.a5($.xB(),x.P)
return d.a5($.aw6(),x.a).Gn(w)},
$S:z+47}
A.buJ.prototype={
$1(d){return this.ajX(d)},
ajX(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.l(function(e,f){if(e===1)return B.m(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.a5($.bK(),x.A).fH("finance_balance_kpis",t),$async$$1)
case 3:s=r.cT(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$1,v)},
$S:212}
A.aG2.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.a9(0,$.aw6(),x.a).pN(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.aG1.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.a9(0,$.aw6(),x.a).M9(u.c),$async$$0)
case 2:t.a=e
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.aGk.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bxy()
if(s.e==null)B.P(B.U(y.b))
s.gc6().br(r)
u=null
w=1
break
case 1:return B.n(u,v)}})
return B.o($async$$0,v)},
$S:2}
A.aGc.prototype={
$0(){return this.a.JX(this.b,this.c)},
$S:0}
A.aGd.prototype={
$0(){return this.a.BK(this.b,this.c)},
$S:0}
A.aGe.prototype={
$0(){var w=x.z
return B.aW(this.a,!1).dV(B.e3(new A.aGb(),null,w),w)},
$S:0}
A.aGb.prototype={
$1(d){return F.D3},
$S:z+69}
A.aGf.prototype={
$0(){return B.om(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aGg.prototype={
$0(){var w=this
return w.a.BL(w.b,w.c,w.d)},
$S:0}
A.aGj.prototype={
$0(){return D.aua},
$S:62}
A.aGi.prototype={
$2(d,e){return new A.If(B.j(d),null)},
$S:z+10}
A.aGh.prototype={
$1(d){return new A.JD(d,null)},
$S:z+11}
A.aGa.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.h("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.hY(B.b([B.cY(C.bR,w,w,new A.aG8(u),w,w),B.dj(F.v4,new A.aG9(u),B.dM(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.v5)},
$S:45}
A.aG8.prototype={
$0(){B.aW(this.a,!1).cJ(!1)
return null},
$S:0}
A.aG9.prototype={
$0(){B.aW(this.a,!1).cJ(!0)
return null},
$S:0}
A.bje.prototype={
$0(){var w=this.a.a9(0,$.xB().geP(),x.V),v=E.aG6()
w.rk(0,v)
return v},
$S:0}
A.bjf.prototype={
$0(){var w=this.a.a9(0,$.xB().geP(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lK(B.bL(B.aU(v),1,1,0,0,0,0),v)
w.rk(0,u)
return u},
$S:0}
A.bjg.prototype={
$0(){return this.a.Jh(this.b,this.c)},
$S:0}
A.bjd.prototype={
$2(d,e){return new B.oV(B.V(d).aR8(B.V(d).ax.aS2(C.h,C.n)),e,null)},
$S:1017}
A.bpC.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.du(),s=A.Ov(!1,C.nV,"Umsatz 7 %",t.aq(u.a),w),r=A.Ov(!1,C.nV,"Umsatz 19 %",t.aq(u.b),w),q=A.Ov(!0,D.aam,"Umsatz netto",t.aq(u.c),w),p=A.Ov(!1,D.aal,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return B.a6h(1.7,B.b([s,r,q,p,A.Ov(!0,C.nM,"Ergebnis",n,o<0?C.a8:C.al),A.Ov(!1,C.fN,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.jV,!0)},
$S:104}
A.aLh.prototype={
$0(){return F.Tn},
$S:62}
A.aLg.prototype={
$2(d,e){var w=null
return B.bi(C.a8,B.h("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,B.y(C.h,13,C.j),w,w,w),C.eE,w,C.A,w,3)},
$S:222}
A.aLf.prototype={
$1(d){return new A.IA(d,null)},
$S:z+9}
A.bgn.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.du(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ai(g).i("af<1,L>"),e=f.i("ar.E"),d=B.R(new B.af(g,new A.bgc(),f),e)
i=A.jV(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.R(new B.af(g,new A.bgd(),f),e)
d=A.jV(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.R(new B.af(g,new A.bge(),f),e)
k=A.jV(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.am(h.b,1)
v=B.R(new B.af(g,new A.bgf(),f),e)
w=A.jV(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.am(h.a,1)
u=B.R(new B.af(g,new A.bgg(),f),e)
v=A.jV(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.am(r.c,1)
t=B.R(new B.af(g,new A.bgh(),f),e)
u=A.jV(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.am(h.c,1)
s=B.R(new B.af(g,new A.bgi(),f),e)
t=A.jV(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.R(new B.af(g,new A.bgj(),f),e)
h=A.jV(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.R(new B.af(g,new A.bgk(m),f),e)
m=A.jV(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.R(new B.af(g,new A.bgl(l),f),e)
l=A.jV(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.am(j,1)
j=B.R(new B.af(g,new A.bgm(j),f),e)
return B.a6h(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jV(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jV,!0)},
$S:104}
A.bgc.prototype={
$1(d){return d.b},
$S:z+0}
A.bgd.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bge.prototype={
$1(d){return d.d},
$S:z+0}
A.bgf.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgg.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bgh.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgi.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgj.prototype={
$1(d){return d.d},
$S:z+0}
A.bgk.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgl.prototype={
$1(d){return this.a},
$S:z+0}
A.bgm.prototype={
$1(d){return this.a},
$S:z+0}
A.bgo.prototype={
$0(){return A.bBB(this.b,1.45,new A.Uc(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgp.prototype={
$0(){return A.bBB(this.b,1.6,new A.Uo(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.btD.prototype={
$1(d){var w=this,v=null,u=B.aM(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.h(w.a,v,v,v,B.bx(C.h,18,C.m),v,v,v),1),B.f4(v,v,D.act,v,v,new A.btC(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.h(w.b,v,v,v,B.y(C.o,12,C.aP),v,v,v),C.D],t))
s.push(C.r)
s.push(B.c5(new B.mJ(w.c,w.d,v),v,17976931348623157e292))
return B.MD(v,C.p,new B.ad(C.ad,B.a7(s,C.z,C.f,C.L),v),v,v,v,C.fn,C.m2,v,new B.df(u,C.J),v)},
$S:1018}
A.btC.prototype={
$0(){return B.aW(this.a,!1).eq()},
$S:0}
A.bgq.prototype={
$0(){var w=this.a,v=B.b5(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bBB(this.b,2.4,new A.YB(w.w,w.y,w.z,null),C.b.ce(u," \xb7 "),v)
return null},
$S:0}
A.boL.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.boM.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.boN.prototype={
$1(d){return A.aLw(null,1.4,null,C.a8,0.35,D.ah1,D.DY,null,!1,!1,!1,!1,D.Fv,!1,10,D.Yh,!0,C.lw,B.b([new A.eD(0,d),new A.eD(this.a,d)],x.U))},
$S:z+14}
A.b71.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b73.prototype={
$2(d,e){var w=null
return B.h(this.a.aLD(d),w,w,w,B.y(C.o,10,C.N),w,w,w)},
$S:z+16}
A.b74.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.uT
return new B.ad(C.l1,B.h(C.c.cP(this.a[v].a,5),w,w,w,B.y(C.o,9,C.N),w,w,w),w)},
$S:z+6}
A.b72.prototype={
$1(d){return D.a8T},
$S:z+7}
A.b7S.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7T.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7U.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b7V.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.uT
return new B.ad(C.l1,B.h(this.a[v],w,w,w,B.y(C.h,12,C.m),w,w,w),w)},
$S:z+6}
A.bgZ.prototype={
$1(d){return d.d},
$S:z+19}
A.bh_.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bqZ.prototype={
$1(d){return d.d},
$S:z+20}
A.br_.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b5n.prototype={
$0(){return D.aug},
$S:62}
A.b5m.prototype={
$2(d,e){return new A.wU("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b5l.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bi(m,B.a7(B.b([B.h("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.N),m,m,m),C.D,B.h("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.o,12.5,C.j),m,m,m),C.r,B.jT(C.c5,B.b([B.f5(C.y_,D.aI2,new A.b5f(w,v),m),B.f5(D.ac7,D.aGU,new A.b5g(w,v),m)],u),C.d7,8,8)],u),C.z,C.f,C.i),C.a9,m,C.A,m,3)}w=new A.b5o(d)
t=C.b.fQ(n.a.e.d,0,new A.b5h())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jA(new A.b5i(new A.b5p(w),r,w,s))
v=J.S(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.D,B.ak(B.b([B.ay(B.h("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.o,11,C.j),m,m,m),1),B.np(D.adl,D.aHg,new A.b5j(q,p),m),B.np(D.acY,D.aH0,new A.b5k(q,p,d),m)],o),C.l,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:220}
A.b5f.prototype={
$0(){return A.avr(this.a,this.b,null)},
$S:0}
A.b5g.prototype={
$0(){return A.avo(this.a,this.b)},
$S:0}
A.b5o.prototype={
$1(d){var w=B.bk(J.a2(this.a,d))
return w==null?null:w},
$S:1019}
A.b5p.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.am(v,1)
w=B.b5(w,".",",")+" %"}return w},
$S:35}
A.b5h.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b5i.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jV(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hX,o.$1("liquidity1_pct")),m=A.jV(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hX,o.$1("liquidity2_pct")),l=A.jV(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hX,o.$1("liquidity3_pct"))
o=A.jV(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hX,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.am(w,1)
w=B.b5(w,".",",")+" %"}w=A.jV(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hX,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.du()
v=u.aq(v)
return B.a6h(p,B.b([n,m,l,o,w,A.jV(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.hX,v)],x.p),q,12,12,C.jV,!0)},
$S:104}
A.b5j.prototype={
$0(){return A.avo(this.a,this.b)},
$S:0}
A.b5k.prototype={
$0(){return A.avr(this.a,this.b,this.c)},
$S:0}
A.btB.prototype={
$1(d){return new A.Bk(this.a,new A.btA(this.b),this.c,null)},
$S:z+22}
A.btA.prototype={
$0(){var w=this.a,v=$.bxx()
if(w.e==null)B.P(B.U(y.b))
w.gc6().br(v)},
$S:0}
A.b59.prototype={
$0(){},
$S:0}
A.b5a.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b5b.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b5d.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.l(function(d,e){if(d===1)return B.m(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.qS(u.b,B.bL(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b5c(s,t))
return B.n(null,v)}})
return B.o($async$$0,v)},
$S:2}
A.b5c.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b5e.prototype={
$0(){return B.aW(this.a,!1).eq()},
$S:0}
A.b5q.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.ab(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b5r.prototype={
$1(d){return new A.xQ(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayt.prototype={
$1(d){return d.e},
$S:z+27}
A.ayu.prototype={
$2(d,e){return d+e},
$S:49}
A.ayw.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayy.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayz.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.aeE(v.d,v.e)},
$S:0}
A.ayb.prototype={
$1(d){return 0},
$S:1020}
A.aya.prototype={
$2(d,e){return B.fr(C.c_,this.a.amo(e),C.q,C.bA,null)},
$S:1021}
A.b_I.prototype={
$1(d){return d.a},
$S:z+31}
A.b_J.prototype={
$1(d){return d.b},
$S:z+32}
A.b_K.prototype={
$1(d){return new A.k1(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_L.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mz||v===D.dJ))t=1-t
return new A.k1(d,t*w.d)},
$S:z+34}
A.b_M.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goN(),p=d.a
r.goN()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.am(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.am(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.am(v/1000,1)
t="K"}else{u=C.d.am(v,r.akl(Math.abs(s.b-s.c)))
t=""}if(C.c.fz(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nZ(d,q.c.b.$2(p,new A.tF(u+t,s.e)))},
$S:z+35}
A.aVL.prototype={
$1(d){this.a.l8(new A.a5G(d))},
$S:161}
A.aVM.prototype={
$1(d){this.a.l8(new A.a5H(d))},
$S:44}
A.aVN.prototype={
$1(d){this.a.l8(new A.a5I(d))},
$S:28}
A.aVO.prototype={
$0(){this.a.l8(D.a1B)},
$S:0}
A.aVP.prototype={
$1(d){this.a.l8(new A.Nj())},
$S:47}
A.aVQ.prototype={
$1(d){this.a.l8(new A.a5L(d))},
$S:46}
A.aVR.prototype={
$0(){this.a.l8(D.a1C)},
$S:0}
A.aVS.prototype={
$1(d){this.a.l8(new A.Nm(d))},
$S:98}
A.aVT.prototype={
$1(d){this.a.l8(new A.a5F(d))},
$S:164}
A.aVU.prototype={
$1(d){this.a.l8(new A.a5E(d))},
$S:165}
A.aVV.prototype={
$1(d){return this.a.l8(new A.Nh(d))},
$S:145}
A.aVW.prototype={
$1(d){return this.a.l8(new A.a5J(d))},
$S:63}
A.aVX.prototype={
$1(d){return this.a.l8(new A.Nk(d))},
$S:56}
A.bgF.prototype={
$1(d){var w=this.a.db.h(0,C.b.hz(this.b.ch,d))
return d.aRJ(w==null?B.b([],x.t):w)},
$S:z+37}
A.bgD.prototype={
$0(){var w=this.a
C.b.ab(w.cy)
w.db.ab(0)},
$S:0}
A.bgE.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.R(q,x.dw)
C.b.fM(w,new A.bgC())
v=this.a
u=v.db
u.ab(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.ab(q)
q.push(new A.GN(w))},
$S:0}
A.bgC.prototype={
$2(d,e){return C.d.cz(e.b,d.b)},
$S:z+8}
A.bgG.prototype={
$1(d){return new A.zt(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aLx.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.bux.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bGq(t?A.bBm(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tG(w,new A.yG(!0,A.bC9(),new A.buw(v)))},
$S:z+41}
A.buw.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bVh(A.bBm(d,e,f),w,A.c37(d,e,f))},
$S:z+42}
A.buu.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rJ(C.d.j(d.b),w)},
$S:z+43}
A.aLz.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLA.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aLE.prototype={
$2(d,e){return C.d.cz(e.c.b,d.c.b)},
$S:z+45}
A.aLC.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aLD.prototype={
$0(){this.a.aeE(this.b,this.c)},
$S:0}
A.aLF.prototype={
$2(d,e){return C.d.cz(d.w,e.w)},
$S:z+8}
A.aym.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.ayn.prototype={
$2(d,e){return d+e},
$S:49}
A.ayq.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iY(v,B.ai(v).i("iY<1>")).aD(0,new A.ayr(w,this.a/(u+1),this.c))},
$S:0}
A.ayr.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.ayo.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.ayp.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIz.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1022}
A.aBM.prototype={
$1(d){return d},
$S:1023};(function aliases(){var w=A.L4.prototype
w.a0J=w.i5
w.amG=w.aTr
w.amH=w.aex
w=A.TN.prototype
w.aph=w.l
w=A.Le.prototype
w.a0K=w.i5
w=A.Gm.prototype
w.a1t=w.ZE})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c6O","bVe",72)
var q
v(q=A.TP.prototype,"gaFp","aFq",23)
v(q,"gaEt","Iy",4)
v(q,"gaF9","IJ",4)
u(A.TQ.prototype,"gata","atb",25)
t(A,"c5y",3,null,["$3"],["bSw"],49,0)
t(A,"c5z",3,null,["$3"],["bSx"],50,0)
t(A,"c5A",3,null,["$3"],["bSy"],51,0)
t(A,"c5C",4,null,["$4"],["c6q"],52,0)
w(A,"c5B","c6p",53)
s(A,"bBF","c6r",54)
t(A,"c5t",3,null,["$3"],["bVi"],55,0)
w(A,"a_F","c8Q",56)
w(A,"avt","c6u",7)
t(A,"c5v",3,null,["$3"],["bW2"],57,0)
t(A,"c5x",3,null,["$3"],["c0j"],58,0)
t(A,"c5u",3,null,["$3"],["bW1"],59,0)
t(A,"c5w",3,null,["$3"],["c0i"],60,0)
w(A,"cg7","bW0",61)
w(A,"cg8","c0h",62)
r(A.Yq.prototype,"ga56","ayK",30)
u(A.Wc.prototype,"gaA2","aA3",36)
t(A,"c7F",3,null,["$3"],["bWv"],63,0)
t(A,"c7E",3,null,["$3"],["bSz"],64,0)
w(A,"c7I","c8R",1)
t(A,"bN_",4,null,["$5$size","$4"],["bLo",function(d,e,f,g){return A.bLo(d,e,f,g,null)}],65,0)
s(A,"bC9","c8P",66)
s(A,"bN0","c5c",67)
s(A,"bN3","c6x",68)
s(A,"bN2","c6t",3)
s(A,"bN1","c6s",3)
w(A,"c7H","bMC",70)
w(A,"c7G","bMB",71)
t(A,"a_M",3,null,["$3"],["c7D"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.Q,[A.a7d,A.agM,A.alZ,A.J9,A.JD,A.agK,A.If,A.IA,A.alh,A.amA,A.V_,A.YB,A.Uc,A.Uo,A.an5,A.ajm,A.Cj,A.asS,A.wU,A.L5,A.AN])
u(B.B,[A.v6,A.En,A.bh,A.ahQ,A.ahG,A.ahI,A.ahJ,A.ahy,A.al1,A.ahM,A.ahK,A.ayI,A.asW,A.ayv,A.ahH,A.Le,A.a6i,A.tF,A.arh,A.arg,A.ahx,A.al0,A.eD,A.akY,A.al_,A.app,A.alQ,A.atB,A.akZ,A.akI,A.akX,A.ay9,A.bgw,A.ayc,A.ahu,A.nZ,A.akU,A.akV,A.vR,A.ho,A.amJ,A.amM,A.ahD,A.ahR,A.ahE,A.akW,A.amP,A.amN,A.asV,A.arf,A.aLy,A.amL,A.vC,A.a1M,A.amW,A.a1X,A.b3d])
u(B.v4,[A.qw,A.vG,A.wB,A.aBa,A.aCh,A.oh,A.CT,A.oi])
u(B.o4,[A.aG3,A.aG4,A.aG5,A.aGm,A.buL,A.buM,A.bwA,A.buN,A.buK,A.buJ,A.aGb,A.aGh,A.aGa,A.aLf,A.bgc,A.bgd,A.bge,A.bgf,A.bgg,A.bgh,A.bgi,A.bgj,A.bgk,A.bgl,A.bgm,A.btD,A.boN,A.b72,A.b7S,A.b7T,A.bgZ,A.bqZ,A.b5l,A.b5o,A.b5p,A.btB,A.b5r,A.ayt,A.ayw,A.ayb,A.b_I,A.b_J,A.b_K,A.b_L,A.b_M,A.aVL,A.aVM,A.aVN,A.aVP,A.aVQ,A.aVS,A.aVT,A.aVU,A.aVV,A.aVW,A.aVX,A.bgF,A.bgG,A.aLx,A.bux,A.buw,A.buu,A.aLz,A.aLA,A.aym,A.aBM])
t(A.yE,B.fh)
u(B.y2,[A.aG2,A.aG1,A.aGk,A.aGc,A.aGd,A.aGe,A.aGf,A.aGg,A.aGj,A.aG8,A.aG9,A.bje,A.bjf,A.bjg,A.aLh,A.bgo,A.bgp,A.btC,A.bgq,A.b5n,A.b5f,A.b5g,A.b5j,A.b5k,A.btA,A.b59,A.b5a,A.b5b,A.b5d,A.b5c,A.b5e,A.b5q,A.ayz,A.aVO,A.aVR,A.bgD,A.bgE,A.aLC,A.aLD,A.ayq])
u(B.ya,[A.yF,A.aoj,A.a7e,A.ahC])
u(B.y3,[A.aGi,A.bjd,A.bpC,A.aLg,A.bgn,A.boL,A.boM,A.b71,A.b73,A.b74,A.b7U,A.b7V,A.bh_,A.br_,A.b5m,A.b5h,A.b5i,A.ayu,A.ayy,A.aya,A.bgC,A.aLE,A.aLF,A.ayn,A.ayr,A.ayo,A.ayp,A.aIz])
u(B.K,[A.Bk,A.RO])
u(B.a3,[A.TP,A.Yq])
u(B.O2,[A.La,A.OH])
u(B.xI,[A.TQ,A.Wc])
t(A.a1l,A.ahQ)
t(A.aht,A.a1l)
t(A.a15,A.aht)
u(A.a15,[A.ahF,A.amK])
t(A.o_,A.ahF)
u(B.Ie,[A.ayk,A.aed,A.D9,A.aFi,A.aLi,A.NM])
t(A.fL,A.ahG)
t(A.it,A.ahI)
t(A.mK,A.ahJ)
t(A.a1c,A.ahy)
t(A.Nn,A.al1)
u(A.Nn,[A.ahL,A.amO])
t(A.a1h,A.ahL)
t(A.a1i,A.ahM)
t(A.Da,A.ahK)
u(A.ayI,[A.Lb,A.OJ])
t(A.aef,A.asW)
t(A.ahN,A.aef)
t(A.a1j,A.ahN)
u(B.bf,[A.xQ,A.zt])
t(A.uI,A.ahH)
t(A.L4,A.Le)
u(A.L4,[A.ayx,A.aLB])
u(B.OD,[A.a1f,A.a7s])
u(B.J,[A.Gm,A.ahv])
u(A.Gm,[A.abl,A.aby])
t(A.qn,A.arh)
t(A.acN,A.arg)
t(A.po,A.ahx)
t(A.v8,A.al0)
t(A.yH,A.akY)
t(A.pL,A.al_)
t(A.Qn,A.app)
t(A.n4,A.alQ)
t(A.nu,A.atB)
u(A.pL,[A.alP,A.atA])
t(A.kT,A.alP)
t(A.lg,A.atA)
t(A.a5D,A.akZ)
u(A.a5D,[A.alO,A.atz])
t(A.a6t,A.alO)
t(A.aeC,A.atz)
t(A.N9,A.akI)
t(A.v7,A.akX)
t(A.Ng,A.v7)
t(A.acO,B.fA)
t(A.ahw,A.ahv)
t(A.TN,A.ahw)
t(A.a16,A.TN)
t(A.k1,A.ahu)
t(A.a5A,A.akU)
t(A.a5C,A.akV)
u(A.ho,[A.a5G,A.a5H,A.a5I,A.Ni,A.Nj,A.a5L,A.Nl,A.Nm,A.a5F,A.a5E,A.Nh,A.a5J,A.a5K,A.Nk])
t(A.pX,A.amK)
t(A.ed,A.amJ)
t(A.OI,A.amM)
t(A.a1e,A.ahD)
t(A.mL,A.ahR)
t(A.L9,A.ahE)
t(A.yG,A.akW)
t(A.F0,A.amO)
t(A.a7t,A.amP)
t(A.amI,A.eD)
t(A.n8,A.amI)
t(A.qu,A.n8)
t(A.rJ,A.amN)
t(A.tG,A.asV)
t(A.GN,A.arf)
t(A.zu,A.amL)
t(A.zx,A.amW)
w(A.ahy,A.bh)
w(A.ahF,A.bh)
w(A.ahG,A.bh)
w(A.ahI,A.bh)
w(A.ahJ,A.bh)
w(A.ahK,A.bh)
w(A.ahL,A.bh)
w(A.ahM,A.bh)
w(A.ahN,A.bh)
w(A.ahH,A.bh)
w(A.aht,A.bh)
w(A.ahx,A.bh)
w(A.akI,A.bh)
w(A.akX,A.bh)
w(A.akY,A.bh)
w(A.al_,A.bh)
w(A.al0,A.bh)
w(A.alP,A.bh)
w(A.alO,A.bh)
w(A.alQ,A.bh)
w(A.app,A.bh)
w(A.arg,A.bh)
w(A.arh,A.bh)
w(A.asW,A.bh)
w(A.atA,A.bh)
w(A.atz,A.bh)
w(A.atB,A.bh)
w(A.ahu,A.bh)
v(A.ahv,B.az)
w(A.ahw,B.dO)
v(A.TN,B.a4y)
w(A.ahQ,A.bh)
w(A.akU,A.bh)
w(A.akV,A.bh)
w(A.al1,A.bh)
w(A.ahD,A.bh)
w(A.ahE,A.bh)
w(A.ahR,A.bh)
w(A.akW,A.bh)
w(A.akZ,A.bh)
w(A.amI,A.bh)
w(A.amJ,A.bh)
w(A.amK,A.bh)
w(A.amM,A.bh)
w(A.amN,A.bh)
w(A.amO,A.bh)
w(A.amP,A.bh)
w(A.arf,A.bh)
w(A.asV,A.bh)
w(A.amL,A.bh)
w(A.amW,A.bh)})()
B.brb(b.typeUniverse,JSON.parse('{"a7d":{"Q":[],"c":[]},"En":{"aG7":[]},"yE":{"fh":["bb<~>"],"fh.T":"bb<~>"},"JD":{"Q":[],"c":[]},"If":{"Q":[],"c":[]},"yF":{"aT":[],"K":[],"c":[]},"agM":{"Q":[],"c":[]},"alZ":{"Q":[],"c":[]},"aoj":{"aT":[],"K":[],"c":[]},"J9":{"Q":[],"c":[]},"agK":{"Q":[],"c":[]},"IA":{"Q":[],"c":[]},"wU":{"Q":[],"c":[]},"Bk":{"K":[],"c":[]},"a7e":{"aT":[],"K":[],"c":[]},"alh":{"Q":[],"c":[]},"amA":{"Q":[],"c":[]},"V_":{"Q":[],"c":[]},"YB":{"Q":[],"c":[]},"Uc":{"Q":[],"c":[]},"Uo":{"Q":[],"c":[]},"an5":{"Q":[],"c":[]},"ajm":{"Q":[],"c":[]},"Cj":{"Q":[],"c":[]},"asS":{"Q":[],"c":[]},"ahC":{"aT":[],"K":[],"c":[]},"TP":{"a3":["Bk"]},"La":{"K":[],"c":[]},"TQ":{"a3":["La"]},"o_":{"bh":[]},"fL":{"bh":[]},"it":{"bh":[]},"mK":{"bh":[]},"Da":{"bh":[]},"xQ":{"bf":["o_"],"b9":["o_"],"b9.T":"o_","bf.T":"o_"},"a1c":{"bh":[]},"a1h":{"bh":[]},"a1i":{"bh":[]},"a1j":{"bh":[]},"uI":{"bh":[]},"a1f":{"aV":[],"c":[]},"abl":{"J":[],"M":[],"jD":[],"aS":[]},"pL":{"bh":[]},"n4":{"bh":[]},"nu":{"bh":[]},"kT":{"bh":[]},"lg":{"bh":[]},"v7":{"bh":[]},"a15":{"bh":[]},"qn":{"bh":[]},"acN":{"bh":[]},"po":{"bh":[]},"v8":{"bh":[]},"yH":{"bh":[]},"aef":{"bh":[]},"Qn":{"bh":[]},"a6t":{"bh":[]},"aeC":{"bh":[]},"N9":{"bh":[]},"Ng":{"bh":[]},"L5":{"Q":[],"c":[]},"RO":{"K":[],"c":[]},"Yq":{"a3":["RO"]},"k1":{"bh":[]},"acO":{"fA":[],"aV":[],"c":[]},"a16":{"dO":["J","hp"],"J":[],"az":["J","hp"],"M":[],"aS":[],"az.1":"hp","dO.1":"hp","az.0":"J"},"AN":{"Q":[],"c":[]},"a1l":{"bh":[]},"a5A":{"bh":[]},"Nn":{"bh":[]},"a5C":{"bh":[]},"a5G":{"ho":[]},"a5H":{"ho":[]},"a5I":{"ho":[]},"Ni":{"ho":[]},"Nj":{"ho":[]},"a5L":{"ho":[]},"Nl":{"ho":[]},"Nm":{"ho":[]},"a5F":{"ho":[]},"a5E":{"ho":[]},"Nh":{"ho":[]},"a5J":{"ho":[]},"a5K":{"ho":[]},"Nk":{"ho":[]},"Gm":{"J":[],"M":[],"jD":[],"aS":[]},"OH":{"K":[],"c":[]},"Wc":{"a3":["OH"]},"pX":{"bh":[]},"ed":{"bh":[]},"mL":{"bh":[]},"n8":{"eD":[],"bh":[]},"qu":{"n8":[],"eD":[],"bh":[]},"rJ":{"bh":[]},"tG":{"bh":[]},"GN":{"bh":[]},"zt":{"bf":["pX"],"b9":["pX"],"b9.T":"pX","bf.T":"pX"},"OI":{"bh":[]},"a1e":{"bh":[]},"L9":{"bh":[]},"yG":{"bh":[]},"a5D":{"bh":[]},"F0":{"bh":[]},"a7t":{"bh":[]},"zu":{"bh":[]},"a7s":{"aV":[],"c":[]},"aby":{"J":[],"M":[],"jD":[],"aS":[]},"zx":{"bh":[]}}'))
B.bKS(b.typeUniverse,JSON.parse('{"L4":1,"Nn":1,"Le":1,"Gm":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CT"),e:w("bb<oh>"),aN:w("bb<oi>"),fM:w("bb<Z<f,@>?>"),b:w("bb<~>"),W:w("k1"),B:w("o_"),dB:w("fL"),gF:w("uI"),fj:w("it"),G:w("mK"),bO:w("mL"),k:w("av"),C:w("a1X<L>"),dO:w("uQ"),R:w("a4<f,@>"),g:w("hK"),bz:w("lF<b8>"),f0:w("oa"),E:w("bh"),F:w("yE"),X:w("oh"),P:w("lK"),D:w("v6"),a:w("aG7"),d:w("oi"),cw:w("eD"),L:w("hp"),m:w("dq<v,E>"),cm:w("kT"),dv:w("n4"),M:w("C<nZ>"),I:w("C<bF1>"),O:w("C<fL>"),Y:w("C<it>"),U:w("C<eD>"),K:w("C<a6i>"),u:w("C<ed>"),bC:w("C<vC>"),aA:w("C<u<eD>>"),v:w("C<ef>"),r:w("C<GN>"),s:w("C<f>"),eg:w("C<tC>"),df:w("C<qu>"),p:w("C<c>"),n:w("C<L>"),t:w("C<v>"),eF:w("bj<a3<K>>"),Z:w("n8"),cz:w("ed"),hf:w("pX"),dj:w("zu"),fT:w("rJ"),c_:w("i5<p7<bb<~>>>"),x:w("zx<fL>"),y:w("zx<ed>"),J:w("u<v>"),ef:w("vG"),c:w("Z<f,@>"),f:w("Z<@,@>"),gj:w("af<L,L>"),w:w("kd"),aU:w("B"),Q:w("vR<o_>"),o:w("vR<pX>"),dc:w("ef"),eo:w("qb"),gJ:w("qc"),V:w("mi<lK>"),N:w("f"),A:w("no"),bP:w("bw"),er:w("tC"),j:w("wB"),dw:w("qu"),bY:w("tG"),cZ:w("qw"),gc:w("jc"),es:w("lg"),bN:w("nu"),l:w("c"),q:w("xb"),g4:w("il<L>"),cJ:w("D"),i:w("L"),z:w("@"),S:w("v"),bn:w("xQ?"),f3:w("zt?"),T:w("u<@>?"),h:w("Z<f,@>?"),fF:w("Z<@,@>?"),cK:w("B?"),aD:w("jc?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B0=new B.nR(C.n,B.au("nR<E>"))
D.B7=new A.D9(0,"left")
D.mz=new A.D9(1,"top")
D.B8=new A.D9(2,"right")
D.dJ=new A.D9(3,"bottom")
D.ay0=new A.qn(!1,A.bBF(),22,null)
D.kw=new A.po(16,null,D.ay0,!0)
D.a8U=new A.pL(C.E,null,2,null)
D.vS=new A.L9(!1,D.a8U,A.c7I(),!0)
D.a_E=new A.ayk(3,"spaceEvenly")
D.a_P=new B.xT(6,"dstIn")
D.XA=new B.aX(3,3)
D.Bd=new B.da(D.XA,D.XA,C.a3,C.a3)
D.a0_=new B.bl(C.E,0,C.S,-1)
D.BM=new A.a5C()
D.a1B=new A.Ni()
D.a1C=new A.Nl()
D.aQ6=new A.acN()
D.alX=w([],B.au("C<kT>"))
D.alY=w([],B.au("C<lg>"))
D.DU=new A.N9(D.alX,D.alY,!0)
D.a8D=new B.dG("Zeitraum",!1,null)
D.a8H=new B.dG("Konten (SKR 03)",!1,null)
D.xx=new A.aFi(0,"center")
D.aQl=new A.yG(!0,A.bC9(),A.bN_())
D.DY=new A.yG(!1,A.bC9(),A.bN_())
D.DZ=new A.yH(!1,!0,null,A.avt(),A.a_F(),!0,null,A.avt(),A.a_F())
D.aQm=new A.yH(!0,!0,null,A.avt(),A.a_F(),!0,null,A.avt(),A.a_F())
D.a3X=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3I=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a46=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a40=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a3s=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a3r=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a4s=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a3Q=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4v=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a4p=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.as2=new B.dq([50,D.a3X,100,D.a3I,200,D.a46,300,D.a40,400,D.a3s,500,D.a3r,600,D.a4s,700,D.a3Q,800,D.a4v,900,D.a4p],x.m)
D.dp=new B.rQ(D.as2,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.ai2=w([8,4],x.t)
D.a8S=new A.pL(D.dp,null,0.4,D.ai2)
D.a8T=new A.pL(C.am,null,0.5,null)
D.fK=new A.eD(0/0,0/0)
D.ay2=new A.qn(!0,A.bBF(),44,null)
D.mA=new A.po(16,null,D.ay2,!0)
D.ay1=new A.qn(!0,A.bBF(),30,null)
D.mB=new A.po(16,null,D.ay1,!0)
D.a8V=new A.v8(!1,D.mA,D.mB,D.mA,D.mB)
D.aQn=new A.v8(!0,D.mA,D.mB,D.mA,D.mB)
D.E6=new A.NM(0,"left")
D.a9y=new A.NM(1,"center")
D.E7=new A.NM(2,"right")
D.a9C=new B.a9(57495,"MaterialIcons",null,!1)
D.xP=new B.a9(58927,"MaterialIcons",null,!1)
D.aal=new B.a9(59005,"MaterialIcons",null,!0)
D.aam=new B.a9(59007,"MaterialIcons",null,!0)
D.aan=new B.a9(59011,"MaterialIcons",null,!1)
D.aaB=new B.a9(61349,"MaterialIcons",null,!1)
D.ac4=new B.aA(D.aaB,20,C.h,null,null)
D.aaI=new B.a9(61487,"MaterialIcons",null,!1)
D.ac6=new B.aA(D.aaI,18,null,null,null)
D.ac7=new B.aA(D.xP,18,null,null,null)
D.act=new B.aA(C.jf,null,C.h,null,null)
D.acu=new B.aA(C.lc,null,C.o,null,null)
D.acY=new B.aA(C.nR,16,null,null,null)
D.ad5=new B.aA(C.xW,16,null,null,null)
D.a9N=new B.a9(57912,"MaterialIcons",null,!1)
D.ad7=new B.aA(D.a9N,null,C.a8,null,null)
D.abg=new B.a9(62584,"MaterialIcons",null,!1)
D.adg=new B.aA(D.abg,16,null,null,null)
D.adl=new B.aA(D.xP,16,null,null,null)
D.afv=new A.a7e(null)
D.aQt=new A.aLi(0,"horizontal")
D.y8=new A.zu(0,0,0,0,!1)
D.Fv=new A.OI(0.5)
D.BS=new A.a7t()
D.afA=new A.F0(D.BS,A.bN3(),10,A.bN0(),!0,A.bN2(),A.bN1(),!1,null,null,null)
D.aQv=new A.F0(D.BS,A.bN3(),10,A.bN0(),!0,A.bN2(),A.bN1(),!0,null,null,null)
D.ah1=w([4,3],x.t)
D.awi=new B.aF("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aw8=new B.aF("receivables","Forderungen (kurzfristig)")
D.avY=new B.aF("inventory_value","Vorr\xe4te (Warenbestand)")
D.avW=new B.aF("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avM=new B.aF("fixed_assets","Anlageverm\xf6gen")
D.avR=new B.aF("current_liabilities","Kurzfristige Verbindlichkeiten")
D.awf=new B.aF("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aw7=new B.aF("equity","Eigenkapital")
D.pt=w([D.awi,D.aw8,D.avY,D.avW,D.avM,D.avR,D.awf,D.aw7],B.au("C<+(f,f)>"))
D.aQz=w([],x.M)
D.alJ=w([],x.O)
D.alK=w([],x.Y)
D.alL=w([],B.au("C<mK>"))
D.alM=w([],B.au("C<mL>"))
D.aQA=w([],x.U)
D.aQB=w([],x.u)
D.alN=w([],x.r)
D.asK={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ta={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yO=new B.a4(D.Ta,[0,0,0,0,0,0,0,C.cb],B.au("a4<f,B>"))
D.asH={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.arV=new B.a4(D.asH,[0,0,0,0],B.au("a4<f,v>"))
D.at1={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apv=new B.a4(D.at1,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.app=new B.a4(D.asK,[D.yO,D.yO,D.yO,C.cb,C.cb,C.cb,D.arV,D.apv],x.R)
D.apH=new B.a4(D.Ta,[0,0,0,0,0,0,0,C.cE],x.R)
D.asM={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apJ=new B.a4(D.asM,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,L>"))
D.asG={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.arW=new B.a4(D.asG,[0,0,0,0,0,0,0,C.cE],x.R)
D.ate={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arZ=new B.a4(D.ate,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a4A=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4I=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3v=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a3T=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a42=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a4X=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a3h=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a3V=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a45=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a4q=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.as3=new B.dq([50,D.a4A,100,D.a4I,200,D.a3v,300,D.a3T,400,D.a42,500,D.a4X,600,D.a3h,700,D.a3V,800,D.a45,900,D.a4q],x.m)
D.T_=new B.rQ(D.as3,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a7S=new B.al(48,48,48,48)
D.aua=new B.ad(D.a7S,C.bo,null)
D.aug=new B.ad(C.ad,C.bo,null)
D.alZ=w([],B.au("C<n4>"))
D.am_=w([],B.au("C<nu>"))
D.XB=new A.Qn(D.alZ,D.am_)
D.ax_=new B.fC("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ax0=new B.fC("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ax3=new B.fC("Automaten-Business","Umsatz je Automat",null,null)
D.ax5=new B.fC("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ax7=new B.fC("Top","Meistverkaufte Produkte",null,null)
D.axa=new B.fC("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.axb=new B.fC("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yh=new B.tm(C.I,C.v,0)
D.aFy=new B.ac("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.azC=new B.dg(D.aFy,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHQ=new B.ac('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azF=new B.dg(D.aHQ,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aFU=new B.ac("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.azG=new B.dg(D.aFU,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHK=new B.ac("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azI=new B.dg(D.aHK,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHc=new B.ac("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azJ=new B.dg(D.aHc,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aH9=new B.ac("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aA6=new B.dg(D.aH9,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aQK=new B.W(!0,C.E,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFP=new B.ac("Demo",null,null,null,null,null,null,null,null,null)
D.aG4=new B.ac("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGU=new B.ac("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aH0=new B.ac("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aHg=new B.ac("sevDesk",null,null,null,null,null,null,null,null,null)
D.aI2=new B.ac("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.aed(0,"auto")
D.aIF=new A.aed(1,"top")
D.aMZ=new A.wU("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aN_=new A.wU("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cgO","bRj",()=>B.fS(new A.buL(),x.D))
w($,"cgP","aw6",()=>B.fS(new A.buM(),x.a))
w($,"chO","xB",()=>B.b0B(new A.bwA(),x.P))
w($,"cgQ","bxy",()=>C.aq.$1$1(new A.buN(),x.d))
w($,"cgN","bRi",()=>C.aq.$1$1(new A.buK(),x.X))
w($,"cgM","bxx",()=>C.aq.$1$1(new A.buJ(),x.h))
w($,"cgL","bxw",()=>B.adv(A.c6O(),x.F,x.b))
w($,"c9B","bx2",()=>new A.ay9())
v($,"ccX","lw",()=>new A.b3d())})()};
(a=>{a["pjM/ChOKHPUtQe+evr8ZcDWfeps="]=a.current})($__dart_deferred_initializers__);