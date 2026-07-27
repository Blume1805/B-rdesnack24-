((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O8(d,e,f,g,h){return new A.a71(f,g,d,h,e,null)},
a71:function a71(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uR:function uR(d){this.a=d},
E7:function E7(d){this.a=d},
bT0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z2
w=x.f
v=x.N
u=x.z
t=A.aFh(B.dc(w.a(e.h(a0,"current")),v,u))
s=A.aFh(B.dc(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFh(B.dc(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cd
p=J.cY(p,new A.aF_(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cd
o=J.cY(o,new A.aF0(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cd
q=J.cY(q,new A.aF1(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.dc(w.a(e.h(a0,"customer")),v,u)
m=B.bo(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.p_(n.h(0,"app_gross"))
k=B.bo(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.p_(n.h(0,"avg_basket"))
u=B.dc(w.a(e.h(a0,"derived")),v,u)
v=A.p_(u.h(0,"gross_margin_pct"))
e=A.p_(u.h(0,"net_margin_pct"))
w=A.p_(u.h(0,"ebitda_margin_pct"))
j=A.p_(u.h(0,"cashflow_operating"))
i=A.bsm(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsm(u.h(0,"revenue_growth_mom_pct"))
g=A.bsm(u.h(0,"result_growth_yoy_pct"))
u=A.bsm(u.h(0,"result_growth_mom_pct"))
f=B.bo(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.o2(t,s,r,p,o,q,new A.aAp(m,l,k,n),new A.aBw(v,e,w,j,i,h,g,u),f)},
p_(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
bsm(d){if(d==null)return null
if(typeof d=="number")return d
return B.js(J.al(d))},
qg:function qg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vw:function vw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wq:function wq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAp:function aAp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBw:function aBw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o2:function o2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aF_:function aF_(){},
aF0:function aF0(){},
aF1:function aF1(){},
aFh(d){var w=J.Y(d),v=A.ua(w.h(d,"revenue_net_7")),u=A.ua(w.h(d,"revenue_net_19")),t=A.ua(w.h(d,"revenue_net")),s=A.ua(w.h(d,"expense_net")),r=A.ua(w.h(d,"result_net")),q=A.ua(w.h(d,"vat_collected")),p=A.ua(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cd
w=J.cY(w,new A.aFi(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.o3(v,u,t,s,r,q,p,w)},
ua(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
CH:function CH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o3:function o3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFi:function aFi(){},
bT_(d){return new A.ys(d,new B.io(x.c_),C.dK)},
bta:function bta(){},
btb:function btb(){},
bv0:function bv0(){},
btc:function btc(){},
bt9:function bt9(){},
bt8:function bt8(){},
ys:function ys(d,e,f){this.r=d
this.a=e
this.f=f},
aEZ:function aEZ(d,e,f){this.a=d
this.b=e
this.c=f},
aEY:function aEY(d,e,f){this.a=d
this.b=e
this.c=f},
bT1(){return new A.yt(null)},
alP(d,e,f,g,h){return new A.alO(e,h,g,f,d,null)},
yt:function yt(d){this.a=d},
aFg:function aFg(d){this.a=d},
aF8:function aF8(d,e,f){this.a=d
this.b=e
this.c=f},
aF9:function aF9(d,e,f){this.a=d
this.b=e
this.c=f},
aFa:function aFa(d){this.a=d},
aF7:function aF7(){},
aFb:function aFb(d){this.a=d},
aFc:function aFc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFf:function aFf(){},
aFe:function aFe(){},
aFd:function aFd(){},
aF6:function aF6(d,e){this.a=d
this.b=e},
aF4:function aF4(d){this.a=d},
aF5:function aF5(d){this.a=d},
agu:function agu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alO:function alO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ao2:function ao2(d,e){this.e=d
this.a=e},
bhw:function bhw(d){this.a=d},
bhx:function bhx(d){this.a=d},
bhy:function bhy(d,e,f){this.a=d
this.b=e
this.c=f},
bhv:function bhv(){},
IW:function IW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jo:function Jo(d,e){this.c=d
this.a=e},
bob:function bob(d){this.a=d},
ags:function ags(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I2:function I2(d,e){this.c=d
this.a=e},
bzM(d,e,f,g,h){var w=null
return B.j7(w,w,!0,w,new A.bsh(h,g,e,f),d,w,!0,!0,x.H)},
jE(d,e,f,g,h,i,j,k,l,m,n){return new A.aml(g,n,i,e,d,m,f,k,l,j,null)},
av5(d,e){return A.c2v(d,e)},
c2v(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$av5=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bl(D.axR)
t=4
o=e.aK(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$av5)
case 7:r=g
q=B.dc(x.f.a(r.a),x.N,n)
l.Mj()
if(J.d(J.a3(q,"configured"),!1)){l.bl(D.axV)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bvO()
if(e.e==null)B.U(B.Z(y.b))
e.gcq().ck(o)
l.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mj()
l.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$av5,v)},
av8(d,e,f){var w=0,v=B.q(x.H)
var $async$av8=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j7(null,null,!0,null,new A.bsf(f,e,e.aK(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$av8)
case 2:return B.o(null,v)}})
return B.p($async$av8,v)},
a72:function a72(d){this.a=d},
aKa:function aKa(){},
aK9:function aK9(){},
aK8:function aK8(){},
In:function In(d,e){this.c=d
this.a=e},
beG:function beG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bev:function bev(){},
bew:function bew(){},
bex:function bex(){},
bey:function bey(){},
bez:function bez(){},
beA:function beA(){},
beB:function beB(){},
beC:function beC(){},
beD:function beD(d){this.a=d},
beE:function beE(d){this.a=d},
beF:function beF(d){this.a=d},
beH:function beH(d,e){this.a=d
this.b=e},
beI:function beI(d,e){this.a=d
this.b=e},
bsh:function bsh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsg:function bsg(d){this.a=d},
al8:function al8(d){this.a=d},
aml:function aml(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
beJ:function beJ(d,e){this.a=d
this.b=e},
UO:function UO(d,e,f){this.c=d
this.d=e
this.a=f},
Yp:function Yp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnc:function bnc(){},
bnd:function bnd(){},
bne:function bne(d){this.a=d},
U0:function U0(d,e,f){this.c=d
this.d=e
this.a=f},
b5p:function b5p(){},
b5r:function b5r(d){this.a=d},
b5s:function b5s(d){this.a=d},
b5q:function b5q(){},
Ud:function Ud(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6j:function b6j(){},
b6k:function b6k(){},
b6l:function b6l(){},
b6m:function b6m(d){this.a=d},
amP:function amP(d,e){this.c=d
this.a=e},
bfc:function bfc(){},
bfd:function bfd(){},
aj9:function aj9(d,e){this.c=d
this.a=e},
Ca:function Ca(d,e,f){this.c=d
this.d=e
this.a=f},
asz:function asz(d,e){this.c=d
this.a=e},
bpt:function bpt(){},
bpu:function bpu(){},
wJ:function wJ(d,e){this.c=d
this.a=e},
ahm:function ahm(d,e){this.e=d
this.a=e},
b3Q:function b3Q(){},
b3P:function b3P(){},
b3O:function b3O(d,e,f){this.a=d
this.b=e
this.c=f},
b3I:function b3I(d,e){this.a=d
this.b=e},
b3J:function b3J(d,e){this.a=d
this.b=e},
b3R:function b3R(d){this.a=d},
b3S:function b3S(d){this.a=d},
b3K:function b3K(){},
b3L:function b3L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3M:function b3M(d,e){this.a=d
this.b=e},
b3N:function b3N(d,e,f){this.a=d
this.b=e
this.c=f},
bsf:function bsf(d,e,f){this.a=d
this.b=e
this.c=f},
bse:function bse(d){this.a=d},
Bb:function Bb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TD:function TD(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3C:function b3C(){},
b3D:function b3D(d){this.a=d},
b3E:function b3E(d){this.a=d},
b3G:function b3G(d,e){this.a=d
this.b=e},
b3F:function b3F(d,e){this.a=d
this.b=e},
b3H:function b3H(d){this.a=d},
bf:function bf(){},
bD5(d){return new A.KT(d,C.al,C.c0,null,null)},
KT:function KT(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TE:function TE(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c4$=g
_.c=_.a=null},
b3T:function b3T(d,e){this.a=d
this.b=e},
b3U:function b3U(d){this.a=d},
axI(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.am2:f,p=a0==null?16:a0,o=d==null?D.a04:d,n=g==null,m=n?A.bwf(r,r,r,r,r,r,r,r):g,l=a3==null?D.Y7:a3
n=n?A.bwf(r,r,r,r,r,r,r,r):g
w=j==null?D.DT:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nM(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BO,s,w,i,n)},
axP(d,e,f,g,h){var w=d==null?D.am3:d,v=e==null?2:e,u=g==null?C.lr:g
return new A.fD(h,f===!0,w,v,u)},
bQk(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.axP(A.kt(d.c,e.c,f,A.c3f(),x.fj),B.ac(d.d,e.d,f),!1,A.kt(d.e,e.e,f,A.a_H(),x.S),w)},
a14(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tv
else w=h
v=m==null
u=v?8:m
t=$.lw()
s=t.aWZ(f,v?8:m)
t=t.aX_(g,v?8:m)
v=d==null?A.bD3(r,r,r,r,r):d
return new A.ik(q,l,w,j,u,s,e,t,v,k==null?D.am4:k)},
bQl(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mB(d.f,e.f,f),p=A.kt(d.r,e.r,f,A.a_H(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a14(A.bD3(v,u,null,!1,t),p,q,o,s,n,null,A.kt(d.y,e.y,f,A.c3g(),x.G),m,r)},
bQm(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mz(u,w,v,B.bX(d.d,e.d,f))},
bD3(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a10(g===!0,v,u,w,f)},
bwf(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a16(4,C.hL,16,D.xE,0,120,A.c3i(),!1,!1,D.a_2,0,C.I,A.c3h())
else w=k
v=j==null?C.kY:j
return new A.a15(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c43(d,e,f,g){var w=null,v=B.iZ(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.J,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CY(C.d.j(f.b),v)},
c42(d){return A.azQ(D.dp,15)},
nM:function nM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axH:function axH(d,e){this.a=d
this.b=e},
fD:function fD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axQ:function axQ(){},
axR:function axR(){},
ik:function ik(d,e,f,g,h,i,j,k,l,m){var _=this
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
mz:function mz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a10:function a10(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a15:function a15(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adX:function adX(d,e){this.a=d
this.b=e},
a16:function a16(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CY:function CY(d,e){this.a=d
this.b=e},
KU:function KU(d){this.a=d},
a17:function a17(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xC:function xC(d,e){this.a=d
this.b=e},
ahi:function ahi(){},
ahp:function ahp(){},
ahq:function ahq(){},
ahs:function ahs(){},
aht:function aht(){},
ahu:function ahu(){},
ahv:function ahv(){},
ahw:function ahw(){},
ahx:function ahx(){},
axS:function axS(d){this.a=d},
axT:function axT(){},
uv:function uv(d,e,f){this.a=d
this.b=e
this.c=f},
ahr:function ahr(){},
axU:function axU(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axV:function axV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axW:function axW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a63:function a63(d){this.b=d},
a13:function a13(d,e,f){this.d=d
this.e=e
this.a=f},
ab6:function ab6(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bC=_.aE=_.ai=_.ar=$
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
c44(d,e){var w=null
return new A.RA(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axB(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pd(t,e.b,new A.q6(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bEs(d,e,f){var w=A.axB(d.b,e.b,f),v=A.axB(d.d,e.d,f),u=A.axB(d.e,e.e,f)
return new A.uT(e.a,w,A.axB(d.c,e.c,f),v,u)},
bT3(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ey(w,v)},
bEq(d,e,f){return new A.yv(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c6s(d){return!0},
c47(d){return D.a9x},
bEr(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pA(w,f,g,e)},
bGl(d,e,f){var w,v=A.kt(d.a,e.a,f,A.c3b(),x.dv)
v.toString
w=A.kt(d.b,e.b,f,A.c3d(),x.bN)
w.toString
return new A.Q9(v,w)},
bTQ(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.ri(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.mU(t,w,v,u)},
bZ0(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.ri(d.d,e.d,f)
if(v==null)v=u==null?C.l:null
return new A.nj(t,w,v,u)},
bTP(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.ct(w.c,v.c,f)
t=A.bTN(B.bw7(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.ri(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kt(d.d,e.d,f,A.a_H(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kN(r,e.f,e.r,t,e.x,u,v,w,s)},
bZ_(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.ct(w.c,v.c,f)
t=A.bYY(B.bw7(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.ri(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kt(d.d,e.d,f,A.a_H(),x.S)
if(u==null)u=v==null?C.C:null
return new A.ld(r,e.f,e.r,t,e.x,u,v,w,s)},
bTN(d,e,f,g,h,i){return new A.a6e(f,!1,g,i,d,e)},
bTO(d){return C.d.aj(d.e,1)},
bYY(d,e,f,g,h,i){return new A.ael(f,!1,g,i,d,e)},
bYZ(d){return C.d.aj(d.e,1)},
bEn(d,e,f){var w,v=A.kt(d.a,e.a,f,A.c3a(),x.cm)
v.toString
w=A.kt(d.b,e.b,f,A.c3c(),x.es)
w.toString
return new A.MN(v,w,!0)},
bT2(d,e,f){return new A.MY(d,e==null?4:e,f)},
a0U:function a0U(){},
CX:function CX(d,e){this.a=d
this.b=e},
tv:function tv(d,e){this.r=d
this.w=e},
q6:function q6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acv:function acv(){},
pd:function pd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uT:function uT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ey:function ey(d,e){this.a=d
this.b=e},
yv:function yv(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pA:function pA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adZ:function adZ(){},
Q9:function Q9(d,e){this.a=d
this.b=e},
mU:function mU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kN:function kN(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
ld:function ld(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6e:function a6e(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ael:function ael(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MN:function MN(d,e,f){this.a=d
this.b=e
this.c=f},
uS:function uS(){},
MY:function MY(d,e,f){this.a=d
this.b=e
this.c=f},
ahd:function ahd(){},
ahh:function ahh(){},
akw:function akw(){},
akO:function akO(){},
akP:function akP(){},
akR:function akR(){},
akS:function akS(){},
alE:function alE(){},
alD:function alD(){},
alF:function alF(){},
apb:function apb(){},
aqZ:function aqZ(){},
ar_:function ar_(){},
asD:function asD(){},
atg:function atg(){},
atf:function atf(){},
ath:function ath(){},
axx:function axx(){},
KN:function KN(){},
KO:function KO(d,e,f){this.c=d
this.d=e
this.a=f},
axz:function axz(d){this.a=d},
axy:function axy(d){this.a=d},
RA:function RA(d,e,f){this.c=d
this.e=e
this.a=f},
Ye:function Ye(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bXy(d,e,f){var w=B.ad(f),v=w.i("ab<1,jP>")
v=B.Q(new B.ab(f,new A.aZ8(),v),v.i("aw.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZ9(),w),w.i("aw.E"))
return new A.acw(e,d,v,w,null)},
bQi(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a6T(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tt(v,C.as,C.w,new B.ko(1),v,v,v,v,C.bA,v)
u=new A.a0V(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aJ(x.v))
u.bi()
return u},
acw:function acw(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZ8:function aZ8(){},
aZ9:function aZ9(){},
a0V:function a0V(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W2$=h
_.aSN$=i
_.dn$=j
_.ah$=k
_.dQ$=l
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
beP:function beP(d,e){this.a=d
this.b=e},
axA:function axA(){},
jP:function jP(d,e){this.a=d
this.b=e},
nL:function nL(d,e){this.a=d
this.b=e},
ahe:function ahe(){},
ahf:function ahf(){},
ahg:function ahg(){},
TB:function TB(){},
AC:function AC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZa:function aZa(d){this.a=d},
aZb:function aZb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZc:function aZc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5n(d,e){var w=d==null?B.cp(C.C,1):d
return new A.a5m(e!==!1,w)},
a19:function a19(){},
a5m:function a5m(d,e){this.a=d
this.b=e},
N4:function N4(){},
a5o:function a5o(){},
ay4:function ay4(){},
aEo:function aEo(d,e){this.a=d
this.b=e},
ahA:function ahA(){},
akL:function akL(){},
akM:function akM(){},
akT:function akT(){},
KX:function KX(){},
vI:function vI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hm:function hm(){},
a5s:function a5s(d){this.a=d},
a5t:function a5t(d){this.a=d},
a5u:function a5u(d){this.a=d},
N_:function N_(){},
N0:function N0(){},
a5x:function a5x(d){this.a=d},
N2:function N2(){},
N3:function N3(d){this.a=d},
a5r:function a5r(d){this.a=d},
a5q:function a5q(d){this.a=d},
MZ:function MZ(d){this.a=d},
a5v:function a5v(d){this.a=d},
a5w:function a5w(d){this.a=d},
N1:function N1(d){this.a=d},
G6:function G6(){},
aUs:function aUs(d){this.a=d},
aUt:function aUt(d){this.a=d},
aUu:function aUu(d){this.a=d},
aUv:function aUv(d){this.a=d},
aUw:function aUw(d){this.a=d},
aUx:function aUx(d){this.a=d},
aUy:function aUy(d){this.a=d},
aUz:function aUz(d){this.a=d},
aUA:function aUA(d){this.a=d},
aUB:function aUB(d){this.a=d},
aUC:function aUC(d){this.a=d},
aUD:function aUD(d){this.a=d},
aUE:function aUE(d){this.a=d},
On:function On(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
W_:function W_(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c4$=h
_.c=_.a=null},
beU:function beU(d,e){this.a=d
this.b=e},
beS:function beS(d){this.a=d},
beT:function beT(d,e){this.a=d
this.b=e},
beR:function beR(){},
beV:function beV(d){this.a=d},
bxw(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pN(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tv:u
else w=g
v=f==null?A.axG(!1,u,0,u,!1,D.w5):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axG(!1,u,0,u,!1,D.w5):d,j,a0,i,s,!1,p)
w.aqS(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bUh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bD4(d.ay,e.ay,f)
v=A.bD4(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kt(d.cy,e.cy,f,A.a_H(),x.S)
r=B.a_(d.r,e.r,f)
q=B.ri(d.w,e.w,f)
p=A.kt(d.a,e.a,f,A.c39(),x.cw)
p.toString
o=B.bGR(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKp(v,m,w,r,e.z,s,new A.yu(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Oo(n),!1,u,o,!0,e.cx,p)},
axG(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
else w=e
return new A.a12(h,w,g,i,f,!1)},
bD4(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.ri(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bEr(t,A.kt(v.d,u.d,f,A.a_H(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.ri(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axG(!1,s,v,u,e.a,new A.KS(!1,r,w.c,!0))},
bQo(d,e,f){var w=B.a_(d.c,e.c,f),v=B.ri(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
return new A.mA(e.a,e.b,w,v)},
c6t(d){return!0},
bzA(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k3)return A.bAl(w.a,A.bx8(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c0N(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k3)w=A.bAl(v.a,A.bx8(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.azQ(w,40)},
bJm(d,e,f,g,h){var w,v=A.bzA(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k3)w=A.bAl(u.a,A.bx8(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.azQ(w,40)
return new A.MY(v,h==null?4:h,u)},
c6r(d,e){return!0},
c2X(d,e){return Math.abs(d.a-e.a)},
c4a(d,e){var w=J.cY(e,new A.bsZ(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c46(d,e){return-1/0},
c45(d,e){return d.a[e].b},
bKw(d){var w=J.cY(d,new A.bsW(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bKv(d){return A.azQ(D.dp,15)},
pN:function pN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKq:function aKq(){},
Oo:function Oo(d){this.a=d},
a12:function a12(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mA:function mA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yu:function yu(d,e,f){this.a=d
this.b=e
this.c=f},
aKb:function aKb(d,e){this.a=d
this.b=e},
a5p:function a5p(){},
EK:function EK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsZ:function bsZ(d){this.a=d},
bsY:function bsY(d){this.a=d},
a7f:function a7f(){},
bsW:function bsW(){},
mX:function mX(){},
qe:function qe(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rx:function rx(d,e){this.a=d
this.b=e},
tw:function tw(d,e){this.a=d
this.b=e},
Gy:function Gy(d){this.a=d},
Op:function Op(d){this.a=d},
ze:function ze(d,e){this.a=d
this.b=e},
ahn:function ahn(){},
aho:function aho(){},
ahB:function ahB(){},
akN:function akN(){},
akQ:function akQ(){},
ams:function ams(){},
amt:function amt(){},
amu:function amu(){},
amw:function amw(){},
amx:function amx(){},
amy:function amy(){},
amz:function amz(){},
aqY:function aqY(){},
asC:function asC(){},
aKr:function aKr(d){this.a=d},
aKs:function aKs(){},
aKt:function aKt(){},
zf:function zf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amv:function amv(){},
aKu:function aKu(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKx:function aKx(){},
aKv:function aKv(d,e,f){this.a=d
this.b=e
this.c=f},
aKw:function aKw(d,e,f){this.a=d
this.b=e
this.c=f},
aKy:function aKy(){},
vr:function vr(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7e:function a7e(d,e,f){this.d=d
this.e=e
this.a=f},
abj:function abj(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bC=_.aE=_.ai=_.ar=$
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
bwe(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.axJ(),m.i("ab<1,F>")).jI(0,new A.axK()),k=e-l,j=new A.axN(k,d,n)
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
new B.iQ(o,m.i("iQ<1>")).aw(0,new A.axL(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iQ(o,m.i("iQ<1>")).aw(0,new A.axM(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axJ:function axJ(){},
axK:function axK(){},
axN:function axN(d,e,f){this.a=d
this.b=e
this.c=f},
axO:function axO(d,e,f){this.a=d
this.b=e
this.c=f},
axL:function axL(d,e,f){this.a=d
this.b=e
this.c=f},
axM:function axM(d,e,f){this.a=d
this.b=e
this.c=f},
bx8(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iQ(w,B.ad(w).i("iQ<1>")).aw(0,new A.aHv(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHv:function aHv(d,e){this.a=d
this.b=e},
aB_(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aB0(),w),w.i("aw.E"))
return A.c3Z(d,new A.a1I(v,x.cX))}else return d},
aB0:function aB0(){},
bY8(d,e){var w=!0
if(d!==C.fx)if(!(d===C.as&&e===C.w))w=d===C.it&&e===C.aZ
if(w)return D.E5
else{w=!0
if(d!==C.is)if(!(d===C.it&&e===C.w))w=d===C.as&&e===C.aZ
if(w)return D.E6
else return D.aac}},
Nu:function Nu(d,e){this.a=d
this.b=e},
a1y:function a1y(d,e){this.a=d
this.b=e},
zi:function zi(d,e){this.a=d
this.$ti=e},
amG:function amG(){},
c3Z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cH($.an().r)
for(w=B.b([],x.C),v=new B.Og(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.U(B.fv('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Of(v,s)
v.D4()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D4()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.Kb(d.aSJ(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.il(m)}p+=n
o=!o}}return l},
a1I:function a1I(d,e){this.a=d
this.b=0
this.$ti=e},
b1G:function b1G(){},
bwX(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bQr(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azQ(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNN()*w),C.d.aP(d.gG_()*w),C.d.aP(d.gKb()*w))},
bEp(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ah(v,u,t,w?d.b.c.b:0)},
bwY(d){var w=d.a,v=w?A.aZ7(d.b):0,u=w?A.aZ7(d.c):0,t=w?A.aZ7(d.d):0
return new B.ah(v,u,t,w?A.aZ7(d.e):0)},
bVw(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bxT(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mP(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seU(null)}},
aZ7(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kt(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k1(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k1(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c5h(d,e,f){return C.d.aP(d+(e-d)*f)},
bAl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k1(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a71.prototype={
q(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.l
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ce(t.x,C.n,s,18),C.aQ],w))
v.push(B.ay(new B.dL(t.c,!1,s),1))
v=B.ak(v,C.A,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.F,B.i(t.d,s,1,C.ac,s,B.bC(u==null?C.h:u,22,C.J),s,s,s)],w)
return B.by(r,B.aa(w,C.A,C.ia,C.i),q,s,C.ah,s,3)}}
A.uR.prototype={
LC(d){return this.aSM(d)},
aSM(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eq("finance_summary",B.a5(["p_from",E.rc(d.a),"p_to",E.rc(d.b)],s,r),r),$async$LC)
case 3:q=f
if(q==null){u=D.apT
w=1
break}if(x.f.b(q)){u=B.dc(q,s,r)
w=1
break}u=D.aqk
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LC,v)},
LB(d){return this.aSL(d)},
aSL(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LB=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.eq("finance_kpis",B.a5(["p_from",E.rc(d.a),"p_to",E.rc(d.b)],s,r),r),$async$LB)
case 3:q=f
if(x.f.b(q)){u=B.dc(q,s,r)
w=1
break}u=D.apA
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LB,v)},
pD(d){return this.aqA(d)},
aqA(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a5(["from",E.rc(d.a),"to",E.rc(d.b)],s,s)),$async$pD)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fB(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pD,v)},
Lx(d){return this.aSB(d)},
aSB(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lx=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("finance-export-pdf",B.a5(["from",E.rc(d.a),"to",E.rc(d.b)],s,s)),$async$Lx)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aI(J.a3(r,"base64"))
w=1
break}throw B.e(B.dK("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lx,v)}}
A.E7.prototype={
FU(d){return this.ajE(d)},
ajE(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FU=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LC(d),$async$FU)
case 7:q=f
o=A.aFh(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FU,v)},
FQ(d){return this.ajp(d)},
ajp(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FQ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LB(d),$async$FQ)
case 7:q=f
o=A.bT0(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FQ,v)},
pD(d){return this.aqB(d)},
aqB(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pD=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pD(d),$async$pD)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=B.a2(n)
p=r.Hu(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pD,v)},
Lw(d){return this.aSA(d)},
aSA(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lw=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lx(d),$async$Lw)
case 7:q=f
o=C.iR.cN(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hu(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lw,v)},
Hu(d){if(d instanceof B.yp)return d
if(d instanceof B.m4){if(d.b==="42501")return new B.vM(d.a)
return new B.td(d.a)}if(d instanceof B.Ni)return new B.td("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B3("Unerwarteter Fehler: "+B.j(d))},
$iaF3:1}
A.qg.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vw.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wq.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAp.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBw.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o2.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CH.prototype={
gbE(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o3.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ys.prototype={
GQ(d){return this.aqz(0)},
aqz(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GQ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se5(0,C.dv)
s=t.r
r=s.aK(0,$.xn(),x.P)
p.a=null
w=3
return B.k(B.pc(new A.aEZ(p,t,r),x.H),$async$GQ)
case 3:t.se5(0,f)
q=t.f
if(q.ght(q)==null){q=$.bvP()
s=s.e
s===$&&B.a()
s.ck(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GQ,v)},
Lv(){return this.aSz()},
aSz(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lv=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se5(0,C.dv)
s=t.r.aK(0,$.xn(),x.P)
q.a=null
w=3
return B.k(B.pc(new A.aEY(q,t,s),x.H),$async$Lv)
case 3:t.se5(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lv,v)}}
A.yt.prototype={
dA(d,e){var w=null,v=e.ap($.xn(),x.P),u=e.ap($.bvP(),x.aN)
return B.t3(B.dB(B.b([new B.fw("Finanzen","Dashboard",new A.agu(e.ap($.bvN(),x.b).gjc(),new A.aF8(this,d,e),new A.aF9(this,d,e),new A.aFa(d),new A.aFb(d),new A.aFc(this,d,e,v),w),w),C.az,new A.ao2(v,w),C.c5,D.ag8,C.c5,B.di(u,new A.aFd(),new A.aFe(),new A.aFf(),!1,!0,!1,x.d,x.l)],x.p),w,C.cN,w,C.D,!1),C.n,new A.aFg(e))},
Jk(d,e){return this.aL5(d,e)},
aL5(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jk=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bvN()
w=3
return B.k(e.aK(0,s.ghP(),x.F).GQ(0),$async$Jk)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bl(B.c5(null,null,null,null,null,C.t,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jk,v)},
Bh(d,e){return this.awy(d,e)},
awy(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bh=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.bvN().ghP(),x.F).Lv(),$async$Bh)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bl(D.axX)
w=1
break}t=B.os(C.u,10)
w=4
return B.k($.bME().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bh)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bh,v)},
Bi(d,e,f){return this.aIM(d,e,f)},
aIM(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bi=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j7(null,null,!0,null,new A.aF6(f,d),d,null,!0,!0,x.cJ),$async$Bi)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nF(e.aK(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zx("finance_period",p,o,B.a5(["period_from",p.eg()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bi)
case 8:if(d.e!=null)d.P(x.q).f.bl(F.v8)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bi,v)}}
A.agu.prototype={
q(d){var w=this,v=null,u=A.alP(C.n,F.hS,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alP(v,D.ac1,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alP(v,D.xV,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alP(C.ad,C.jj,C.ad,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.alP(C.aj,C.fO,C.aj,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.K,0,v,v)}}
A.alO.prototype={
q(d){var w,v=this,u=null,t=B.aB(12),s=B.aB(12),r=B.aB(12),q=v.w
if(q==null)q=C.a7
q=B.cp(q,1)
w=v.r
if(w==null)w=C.h
return B.B_(B.dC(!1,C.W,!0,t,B.es(!1,s,!0,B.aU(u,B.ce(v.c,w,u,20),C.p,u,u,new B.aR(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a9,0,u,u,u,u,u,C.bj),u,v.d,u,u)}}
A.ao2.prototype={
dA(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.by(w,B.aa(B.b([D.a9g,C.F,B.ak(B.b([D.acU,C.aD,B.ay(B.i(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,w,B.y(C.h,16,C.J),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.v,B.km(C.ci,B.b([new A.IW("Monat",new A.bhw(e),w,w),new A.IW("Jahr (YTD)",new A.bhx(e),w,w),new A.IW("Zeitraum w\xe4hlen \u2026",new A.bhy(this,d,e),D.ab7,w)],t),C.dt,6,8)],t),C.A,C.f,C.i),w,w,C.E,w,3)},
IG(d,e){return this.aHF(d,e)},
aHF(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IG=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avr(new A.bhv(),d,B.bN(B.aY(t)-5,1,1,0,0,0,0),new B.lF(s.a,s.b,x.bz),B.bN(B.aY(t)+1,1,1,0,0,0,0),C.e2),$async$IG)
case 2:r=g
if(r!=null)e.aK(0,$.xn().ghP(),x.V).ww(0,new E.lK(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IG,v)}}
A.IW.prototype={
q(d){var w=null,v=B.aB(9999),u=B.aB(9999),t=B.aB(9999),s=B.cp(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ce(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.J),w,w,w))
return B.dC(!1,C.W,!0,v,B.es(!1,u,!0,B.aU(w,B.ak(q,C.k,w,C.f,C.K,0,w,w),C.p,w,w,new B.aR(w,w,s,t,w,w,C.B),w,w,w,w,C.j6,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a9,0,w,w,w,w,w,C.bj)}}
A.Jo.prototype={
q(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.k2(new A.bob(this)),C.c5,D.a9k,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ak(B.b([D.adk,C.at,B.ay(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.q,14,C.m),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a9,s,C.E,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.L(w,B.b([new A.ags(t.a,t.b,t.c==="revenue",t.d,s),C.F],r))}q.push(B.aa(w,C.k,C.f,C.i))}return B.aa(q,C.a8,C.f,C.i)}}
A.ags.prototype={
q(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a9,s=B.cp(u?C.n:C.a7,1),r=B.aB(4),q=w.c
r=B.aU(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bC(C.h,14,C.o),v,v,v),C.p,v,v,new B.aR(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ac,v,B.y(C.h,14,C.J),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.aa(B.b([q,B.i(t,v,v,v,v,B.y(C.q,12,C.m),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dy().aq(w.f)
return B.by(v,B.ak(B.b([r,C.at,t,B.i(q,v,v,v,v,B.y(u?C.aj:C.h,15,C.J),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.dT,v,3)}}
A.I2.prototype={
q(d){var w=null
return B.by(C.ad,B.ak(B.b([D.adT,C.at,B.ay(B.i(this.c,w,w,w,w,B.y(C.h,14,C.m),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fK,w,C.E,w,3)}}
A.a72.prototype={
dA(d,e){return B.di(e.ap($.bP5(),x.e),new A.aK8(),new A.aK9(),new A.aKa(),!1,!0,!1,x.X,x.l)}}
A.In.prototype={
q(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ave,C.v,B.k2(new A.beG(v,q,100-t.w.a,w,p)),C.v,new A.al8(u),C.az,D.avd,C.v,new A.ahm(t,u),C.az,D.av8,C.v,B.bz(u,!0,u,B.kM(u,B.by(u,new A.U0(t,220,u),u,u,C.E,u,3),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beH(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.av2,C.v,B.bz(u,!0,u,B.kM(u,new A.Ud(t,200,!1,u),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beI(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.av6,C.v,new A.amP(t,u),C.az,D.av3,C.v,new A.aj9(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.az,D.ava,C.v,new A.asz(t,u)],s))
return B.aa(r,C.a8,C.f,C.i)}}
A.al8.prototype={
q(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.q,11,C.m).di(1.35),w,w,w)}}
A.aml.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.ad:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.beJ(m,d):l
r=x.p
q=B.b([B.ay(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.q,10,C.o).fj(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cp(C.ad,0.8)
n=B.aB(4)
q.push(B.aU(l,B.i("Ziel "+p,l,l,l,l,B.y(C.ad,9,C.o),l,l,l),C.p,l,l,new B.aR(l,l,o,n,l,l,C.B),l,l,l,l,C.np,l,l,l))}q=B.b([B.ak(q,C.k,l,C.f,C.i,0,l,l),C.b5,B.a5h(C.dc,B.i(m.d,l,l,l,l,B.bC(w,22,C.o),l,l,l),C.iQ)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ac,l,B.y(C.q,10,C.aE),l,l,l))
q.push(C.cy)
q.push(B.ak(B.b([new A.UO("Vormonat",m.r,l),C.cf,new A.UO("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.cy)
q.push(B.ay(new A.Yp(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.kM(l,B.by(l,B.aa(q,C.A,C.f,C.i),l,l,C.co,l,3),C.aa,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.UO.prototype={
q(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aB(4)
return B.aU(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.q,9,C.o),r,r,r),C.p,r,r,new B.aR(C.a7,r,r,q,r,r,C.B),r,r,r,r,C.np,r,r,r)}w=q>=0
v=w?C.aj:C.ad
u=v.ez(0.12)
t=B.cp(v,0.7)
s=B.aB(4)
return B.aU(r,B.ak(B.b([B.ce(w?F.aai:D.aah,v,r,10),C.Zk,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.K,0,r,r),C.p,r,r,new B.aR(u,r,t,s,r,r,C.B),r,r,r,r,C.np,r,r,r)}}
A.Yp.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ey(v,j[v]))
u=C.b.jI(j,new A.bnc())
t=C.b.jI(j,new A.bnd())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bne(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5n(k,!1)
w=B.b([A.aKp(k,2,A.axG(!1,C.n.ez(0.16),0,k,!0,D.w5),C.n,0.35,k,D.DX,k,!0,!1,!0,!1,D.Fj,!1,10,D.YN,!0,C.lr,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.On(A.bxw(k,k,k,D.am5,l,D.BO,D.DT,D.DY,w,D.agc,k,m,k,n,D.Y7,D.am6,D.a9A),C.al,C.a2,k,k)}}
A.U0.prototype={
q(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aKL
w=C.b.fA(p,0,new A.b5p())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axP(B.b([A.a14(q,q,D.Bf,q,C.n,q,q,q,r.b,6),A.a14(q,q,D.Bf,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bV(A.bD5(A.axI(q,q,u,q,q,A.a5n(q,!1),q,new A.yv(!0,!0,q,new A.b5q(),A.a_C(),!1,q,A.avb(),A.a_C()),q,v,q,q,new A.uT(!0,new A.pd(16,q,new A.q6(!0,new A.b5r(this),46,q),!0),D.kr,D.kr,new A.pd(16,q,new A.q6(!0,new A.b5s(p),26,q),!0)))),this.d,q)},
aKl(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Ud.prototype={
q(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6j(),w),x.i)
C.b.L(o,new B.ab(u,new A.b6k(),w))
t=C.b.fA(o,0,new A.b6l())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axP(B.b([A.a14(q,q,q,q,C.n,q,q,q,v[s],14),A.a14(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bV(A.bD5(A.axI(q,q,n,q,q,A.a5n(q,!1),q,D.DY,q,o,q,q,new A.uT(!0,D.kr,D.kr,D.kr,new A.pd(16,q,new A.q6(!0,new A.b6m(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.E,q,3)}}
A.amP.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aKK
w=new B.ab(l,new A.bfc(),B.ad(l).i("ab<1,F>")).jI(0,new A.bfd())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dy()
o=r.d
n=new B.aV(4,4)
o=B.b([new B.iq(C.ak,C.f,C.i,C.k,m,C.b0,m,0,B.b([new B.jU(1,C.dA,B.aa(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,m,B.y(C.q,12,C.aE),m,m,m)],v),C.A,C.f,C.i),m),C.aD,B.i(p.aq(o),m,m,m,m,B.bC(C.h,16,C.o),m,m,m)],v),m),C.cy,new B.Dn(new B.d1(n,n,n,n),C.bw,B.EL(C.a7,8,C.d.bp(o/w,0,1),D.B3),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_F(r.gbE(),q.gbE())
else q=!0
if(!q)o.push(C.v)
C.b.L(u,o)}return B.by(m,B.aa(u,C.k,C.f,C.i),m,m,C.E,m,3)}}
A.aj9.prototype={
q(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.Ca("Aktive Kunden",""+s,u),1)
w=B.ay(new A.Ca("K\xe4ufe",""+t.a,u),1)
v=$.dy()
return B.by(u,B.ak(B.b([s,w,B.ay(new A.Ca("\xd8-Warenkorb",v.aq(t.d),u),1),B.ay(new A.Ca("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.E,u,3)}}
A.Ca.prototype={
q(d){var w=null
return B.aa(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.q,10,C.o).fj(0.6),w,w,w),C.bs,B.i(this.d,w,w,w,w,B.bC(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.K)}}
A.asz.prototype={
q(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bpt(),B.ad(q).i("ab<1,F>")).jI(0,new A.bpu()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([new B.iq(C.ak,C.f,C.i,C.k,r,C.b0,r,0,B.b([new B.jU(1,C.dA,B.i(u.b,r,1,C.ac,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.q,12,C.J),r,r,r),B.i($.dy().aq(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.b5,new B.Dn(new B.d1(s,s,s,s),C.bw,B.EL(C.a7,6,C.d.bp(t/p,0,1),D.B3),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.K(u)===B.K(s)&&B.a_F(u.gbE(),s.gbE())
else s=!0
if(!s)t.push(C.F)
C.b.L(n,t)}return B.by(r,B.aa(n,C.k,C.f,C.i),r,r,C.E,r,3)}}
A.wJ.prototype={
q(d){var w=null
return B.by(w,B.i(this.c,w,w,w,w,B.y(C.q,13,C.m),w,w,w),C.a9,w,C.E,w,3)}}
A.ahm.prototype={
dA(d,e){return B.di(e.ap($.bvO(),x.fM),new A.b3O(this,d,e),new A.b3P(),new A.b3Q(),!1,!0,!1,x.h,x.l)}}
A.Bb.prototype={
W(){return new A.TD()},
aXC(){return this.d.$0()}}
A.TD.prototype={
ao(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fh(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pz[t].a
if(v)r=""
else{r=B.bo(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bL(new B.cV(r,C.bI,C.aR),$.ag()))}q.e!==$&&B.b3()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c8(v,v.r,v.e,B.l(v).i("c8<2>"))
while(v.u()){w=v.d
w.S$=$.ag()
w.T$=0}this.al()},
rj(d){var w=this.e
w===$&&B.a()
w=C.c.bn(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.js(B.b0(w,",","."))
return w==null?0:w},
a3R(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pz[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b0(s,".",",")
t.ku(0,t.a.xZ(C.aR,C.bI,s))}}this.J(new A.b3C())},
aEh(){this.a3R(D.apV)
this.c.P(x.q).f.bl(D.ayg)},
HW(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HW=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b9(a1)
for(e=0;e<8;++e)a2.E(0,D.pz[e].a)
q=a2
t=4
w=7
return B.k($.aES.ci().ze(B.b(["csv","txt"],x.s),C.xH,!0),$async$HW)
case 7:p=a5
a2=p
o=a2==null?null:J.K8(a2.a).c
if(o==null){w=1
break}n=C.aG.ad3(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BT.cN(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.aw3(l,B.bS("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.bn(J.a3(k,0)).toLowerCase()
i=J.CD(q,j)?j:D.aql.h(0,j)
if(i==null)continue
d=C.c.bn(C.b.n6(J.bPS(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.js(h)
if(g!=null)J.fp(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bl(D.axU)
w=1
break}r.a3R(m)
r.c.P(x.q).f.bl(B.c5(null,null,null,null,null,C.t,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HW,v)},
I6(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I6=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3D(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_3("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eg(),0,10),"p_cash_and_bank",q.rj("cash_and_bank"),"p_receivables",q.rj("receivables"),"p_inventory_value",q.rj("inventory_value"),"p_other_current_assets",q.rj("other_current_assets"),"p_fixed_assets",q.rj("fixed_assets"),"p_current_liabilities",q.rj("current_liabilities"),"p_long_term_liabilities",q.rj("long_term_liabilities"),"p_equity",q.rj("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I6)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXC()
o=q.c
o.toString
B.ba(o,!1).f2()
q.c.P(x.q).f.bl(D.axY)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bl(B.c5(null,null,null,null,null,C.t,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b3E(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I6,v)},
q(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bC(C.h,18,C.o),r,r,r),p=s.f?r:new A.b3G(s,d),o=s.d
o===$&&B.a()
p=B.hs(D.acW,B.i("Stichtag: "+C.c.a0(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.hs(D.ae1,D.aDZ,o?r:s.gaDj(),r),1)
v=x.p
w=B.b([p,C.F,B.ak(B.b([w,C.aD,B.ay(B.hs(D.adR,D.aDO,o?r:s.gaEg(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pz[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.f2(r,C.aW,!1,r,!0,C.t,r,B.ff(),o.h(0,p.a),r,r,r,r,r,2,new B.cf(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.aa,!0,r,!0,r,!1,r,C.b_,r,r,r,r,C.iv,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.E,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.as,r,C.a3,r,r,r,r),C.F],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.q,11,C.m),r,r,r))
p=B.bV(B.fa(B.aa(w,C.a8,C.f,C.K),r,C.D),r,380)
o=s.f
w=B.dF(C.cZ,r,r,o?r:new A.b3H(d),r,r)
o=o?r:s.gaE0()
t=B.dM(C.n,C.h,r,r,r,r,r)
return B.lz(B.b([w,B.dZ(s.f?F.Zn:C.ey,o,t)],v),C.l,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_F(this.gbE(),e.gbE())
else w=!0
return w},
gv(d){return(B.eC(B.K(this))^B.bL0(this.gbE()))>>>0},
j(d){B.bEl()
return B.K(this).j(0)}}
A.KT.prototype={
W(){return new A.TE(B.A(x.S,x.I),new A.axS(B.A(x.x,x.T)),null,null)}}
A.TE.prototype={
q(d){var w,v=this,u=v.a1P(),t=v.CW
t.toString
t=v.a1Q(t.au(0,v.gft().gp(0)))
w=v.a1Q(u)
v.a.toString
return new A.KO(new A.a13(t,w,null),u,null)},
a1Q(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axP(s.c,s.d,!1,r,s.a))}return d.aPC(w)},
a1P(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UE(t.ch)
if(r)s=w.a
r=t.y
t=t.aQx(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPD(A.bwf(!1,!0,!0,v.d,v.c,u.gas5(),v.f,v.e))}return t},
as6(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafu()||e==null||e.a==null){w=v.cy
v.J(w.gaP1(w))
return}v.J(new A.b3T(v,e))},
lw(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1P(),new A.b3U(w)))}}
A.nM.prototype={
Vd(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axI(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQx(d,e){return this.Vd(null,null,d,e)},
aPD(d){return this.Vd(null,d,null,null)},
aPC(d){return this.Vd(d,null,null,null)},
X8(d,e,f){var w,v,u,t=A.kt(d.ch,e.ch,f,A.c3e(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bEs(d.d,e.d,f),q=A.bGl(d.e,e.e,f),p=A.bEq(d.c,e.c,f),o=e.a
o=A.a5n(B.a1l(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axI(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bEn(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbE(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axH.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fD.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axQ(),B.ad(v).i("ab<1,F>")).jI(0,new A.axR())
v=v.length
return w+(v-1)*this.d},
gbE(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ik.prototype={
gbE(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mz.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a10.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a15.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adX.prototype={
K(){return"TooltipDirection."+this.b}}
A.a16.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CY.prototype={
gbE(){return[this.a,this.b,C.bH,C.w,null]}}
A.KU.prototype={}
A.a17.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xC.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X8(v,w,d)}}
A.ahi.prototype={}
A.ahp.prototype={}
A.ahq.prototype={}
A.ahs.prototype={}
A.aht.prototype={}
A.ahu.prototype={}
A.ahv.prototype={}
A.ahw.prototype={}
A.ahx.prototype={}
A.axS.prototype={
UE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uv(0,0,!1)
v=new A.zi(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uv(t,u,!0)}w=null
try{w=C.b.oU(d,new A.axT())}catch(s){return new A.uv(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uv(q,r,!1)
u.m(0,v,j)
return j}}
A.uv.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.ahr.prototype={}
A.axU.prototype={
ia(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_U(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac5(t,A.bwe(w,t.a),u)
l.y=u
l.aRT(e,u,f)
l.alE(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aS1(d,e,m,t,r,s,n,o,f)}}},
ac5(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dK("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iQ(p,B.ad(p).i("iQ<1>")).aw(0,new A.axV(t,q,r,s))
w.push(new A.a63(q))}return w},
aRT(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aV(m,m)
l=new B.d1(k,k,k,k)}j=o.w
i=b7[r].b[p]
h=i-m
g=i+m
k=l.a
f=l.b
e=l.c
d=l.d
a0=Math.max(k.b,f.b)+Math.max(e.b,d.b)
a1=o.b
a2=o.a
if(a1!==a2){if(a1>a2){a3=b3.dG(Math.max(s,a2),b5,b8)
a4=B.Q5(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Q5(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seU(null)
a6=b3.f.el()
u.drawRRect(B.lu(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dQ(b1),$.p3()[1],!0)
a6=b3.f.el()
u.drawRRect(B.lu(a4),a6)
a6.delete()
u.restore()
b3.aS_(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gek(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cH($.an().r)
n=new B.hd(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.il(k)
v.fW(A.aB_(b2,o.r),b3.r)}}}},
aS1(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AS(a5,a5,a5,a5,B.d3(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lw().ZU(a8,a7.b),a7.a),C.bH,C.w,a5,b6.c,C.bA)
w.afO(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dG(s,a6,b6)
q=b4.a
p=a4.dG(q,a6,b6)
o=b1.b
n=u+o.gev()
m=v+4+(o.gd_(0)+o.gd2(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aGm)j=v===D.a_2&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZV(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.FV(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lw().Km(new B.G(v,t),d).b
s=$.lw()
q=w.b
p=q.c
q=q.a.c
a0=s.Km(new B.G(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gai3()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VP(d,new A.axW(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aS_(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gek(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aV(i.z,i.Q):C.a1
s=w?new B.aV(i.x,i.y):C.a1
r=w?C.a1:new B.aV(i.e,i.f)
w=w?C.a1:new B.aV(i.r,i.w)
q=B.Q5(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a1:new B.aV(i.z,i.Q)
p=v?C.a1:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a1
q=B.Q5(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a1)}else q=B.byd(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Wu(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac5(b2,A.bwe(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dG(k,b2,b3)
m=b0[q].c[o]
g=a7.dG(m.a+m.x.b,b2,b3)}else{h=a7.dG(j+m.x.b,b2,b3)
g=a7.dG(b0[q].c[o].b,b2,b3)}a7.dG(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dG(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dG(a4.a,b2,b3)
a6=a7.dG(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a17(d,q,a0,o,a2,a1,new A.ey(d.a,v),new B.r(n,t))}}return null}}
A.a63.prototype={}
A.a13.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.axU()
t.a16()
$.an()
w=B.aZ()
w.b=C.bf
t.f=w
w=B.aZ()
w.b=C.aX
t.r=w
w=B.aZ()
w.b=C.bf
w.r=C.l.gp(0)
t.w=w
w=B.aZ()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.ab6(this.d,v,u,t,d,C.bn,new B.bp(),B.aJ(x.v))
t.bi()
t.YQ(v.cy)
t.aeW()
return t},
by(d,e){e.sio(0,this.d)
e.sYB(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.ab6.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYB(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0E(d.cy)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1y(t,v),new A.vI(u.aC,u.i4,u.cW,x.Q))
s.restore()},
ZO(d){var w=this,v=w.gC(0)
return new A.KU(w.fX.Wu(d,v,new A.vI(w.aC,w.i4,w.cW,x.Q)))}}
A.a0U.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CX.prototype={
K(){return"AxisSide."+this.b}}
A.tv.prototype={}
A.q6.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acv.prototype={
gbE(){return[!1,0,0,0]}}
A.pd.prototype={
gbE(){return[this.b,this.a,this.c,!0]}}
A.uT.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ey.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ey))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yv.prototype={
gbE(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pA.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adZ.prototype={
gbE(){return[this.a,this.b]}}
A.Q9.prototype={
gbE(){return[this.a,this.b]}}
A.mU.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nj.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kN.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ld.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6e.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ael.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MN.prototype={
gbE(){return[this.a,this.b,!0]}}
A.uS.prototype={}
A.MY.prototype={
adv(d,e,f){var w,v
$.an()
w=B.aZ()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iT(f,this.b,w)},
gbE(){return[this.a,this.b,this.c,0]}}
A.ahd.prototype={}
A.ahh.prototype={}
A.akw.prototype={}
A.akO.prototype={}
A.akP.prototype={}
A.akR.prototype={}
A.akS.prototype={}
A.alE.prototype={}
A.alD.prototype={}
A.alF.prototype={}
A.apb.prototype={}
A.aqZ.prototype={}
A.ar_.prototype={}
A.asD.prototype={}
A.atg.prototype={}
A.atf.prototype={}
A.ath.prototype={}
A.axx.prototype={
MA(d,e,f,g,h,i){return new B.ie(this.aVH(d,e,f,g,h,i),x.g4)},
aVG(d,e,f,g){return this.MA(d,e,f,!0,g,!0)},
aVH(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MA(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lw().ajb(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fS(u-s,v)*v===u
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
A.KN.prototype={
a16(){var w,v=this
$.an()
w=B.aZ()
w.b=C.aX
v.a=w
w=B.aZ()
w.b=C.bf
v.b=w
w=B.aZ()
w.b=C.bf
v.e=w
w=B.aZ()
w.b=C.aX
v.c=w
v.d=B.aZ()},
ia(d,e,f){var w=this
w.a_V(d,e,f)
w.aRP(e,f)
w.aRZ(e,f)
w.aRY(e,f)},
aRY(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lw().OE(w.a,a1.r-a1.f)
u=$.bvq().MA(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fe(u.a(),u.$ti.i("fe<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l1(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mP(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dx(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lw().OE(w.b,a1.y-a1.x)
u=$.bvq().MA(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fe(u.a(),u.$ti.i("fe<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l1(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mP(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dx(n,m,d.a,f.d)}},
aRP(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aRZ(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l1(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mP(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seU(null)}o=n.e.el()
w.drawRect(B.dQ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.l1(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mP(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seU(null)}o=n.e.el()
j.drawRect(B.dQ(s),o)
o.delete()}},
aRX(d,e,f){var w,v
this.a_V(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adw(d,e,f,w)
if(v.b.length!==0)this.aS3(d,e,f,w)},
adw(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l1(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mP(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dx(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=C.d.am(o,n.gbU(n).eG(0,2))
J.b_(r.save())
r.translate(h,g)
n=n.gNx().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
o=C.d.am(o,n.gbU(n).eG(0,2))
k=f.d
k===$&&B.a()
s.adx(0,n,new B.r(h,o),k)}}},
aS3(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fd(o,a3,a2)
m=new B.r(n,0)
o=d.fd(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l1(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mP(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dx(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=n.gbU(n).eG(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b_(r.save())
r.translate(f,e)
n=n.gNx().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
g=n.gbU(n).af(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.adx(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZV(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KO.prototype={
gakW(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakX(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakY(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakU(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alh(d){var w,v=this,u=null,t=v.d,s=A.bwY(t.d),r=t.a
r=r.a&&A.bQr(r.b)?r.b:u
w=B.b([B.aU(u,v.c,C.p,u,u,new B.aR(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.axz(w)
if(v.gakW())C.b.hz(w,s.$1(!0),new A.AC(D.Ba,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakY())C.b.hz(w,s.$1(!0),new A.AC(D.mD,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakX())C.b.hz(w,s.$1(!0),new A.AC(D.Bb,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakU())C.b.hz(w,s.$1(!0),new A.AC(D.dL,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
q(d){return B.k2(new A.axy(this))}}
A.RA.prototype={
W(){return new A.Ye(new B.bi(null,x.eF))}}
A.Ye.prototype={
axy(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fE
case 2:return C.dc
case 3:return C.eb}},
ay3(){switch(this.a.c.a){case 0:return new B.ah(0,0,8,0)
case 1:return new B.ah(0,0,0,8)
case 2:return new B.ah(8,0,0,0)
case 3:return new B.ah(0,8,0,0)}},
axA(d){this.a.toString
return},
ao(){this.aI()
$.cB.x1$.push(this.ga4k())},
bb(d){this.bD(d)
$.cB.x1$.push(this.ga4k())},
q(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay3()
return B.Hb(B.b1d(0,B.aU(v.axy(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.acw.prototype={
bm(d){return A.bQi(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a0V.prototype={
hn(d){if(!(d.b instanceof B.hn))d.b=new B.hn(null,null,C.u)},
hY(d){if(this.B===C.ak)return this.y8(d)
return this.ad7(d)},
aKx(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9_(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a8Z(d,B.hE())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a8Z(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hf(u,null)
break
case 1:q=B.hf(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9_(p)
t=Math.max(t,o.aKx(p))
m=r.aG$}return new A.beP(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a8Z(o,B.mv()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.G(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.G(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a9_(r==null?B.U(B.Z("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.y9(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a4.sbh(0,null)
this.v0(d,e)},
l(){this.a4.sbh(0,null)
this.aod()}}
A.beP.prototype={}
A.axA.prototype={}
A.jP.prototype={
gbE(){return[this.a,this.b]}}
A.nL.prototype={}
A.ahe.prototype={}
A.ahf.prototype={
aQ(d){var w,v,u
this.fs(d)
w=this.ah$
for(v=x.L;w!=null;){w.aQ(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fi(0)
w=this.ah$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ahg.prototype={}
A.TB.prototype={
l(){var w,v,u
for(w=this.W2$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AC.prototype={
goA(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dc
case 1:return C.eb
case 2:return C.ec
case 3:return C.fE}},
gb_g(){var w=this.d,v=A.bwY(w.d),u=A.bEp(w.a)
switch(this.c.a){case 2:case 0:return new B.ah(0,v.b,0,v.d).af(0,new B.ah(0,u.b,0,u.d))
case 1:case 3:return new B.ah(v.a,0,v.c,0).af(0,new B.ah(u.a,0,u.c,0))}},
gahS(){var w=this.d,v=A.bEp(w.a),u=A.bwY(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd2(0)+(v.gd_(0)+v.gd2(0))
case 1:case 3:return u.gev()+v.gev()}},
aWp(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goA().c.d
if(o==null)o=$.lw().OE(d,f-e)
w=p.c
v=w!==D.mD
if((!v||w===D.dL)&&p.d instanceof A.nM){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bwe(u,d)
w=new B.iQ(t,B.ad(t).i("iQ<1>"))
s=w.giG(w).f1(0,new A.aZa(u),x.W).fZ(0)}else{r=$.bvq()
w=!v||w===D.dL
v=p.d
q=r.aVG(w?v.w:v.z,o,f,e)
v=B.oh(q,new A.aZb(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("ab<1,nL>")
w=B.Q(new B.ab(s,new A.aZc(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goA()
w=j.goA()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aU(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mD
u=!v
t=!u||w===D.dL
s=j.e
r=t?s.a:s.b
t=j.ghJ()
s=!u||w===D.dL?C.D:C.ak
q=B.b([],x.p)
if(w===D.Ba||v)j.goA()
if(j.goA().c.a){v=!u||w===D.dL?r:j.goA().c.c
p=!u||w===D.dL?j.goA().c.c:r
o=j.gb_g()
n=!u||w===D.dL?C.ak:C.D
j.gahS()
m=j.gahS()
l=!u||w===D.dL
k=j.d
l=l?k.f:k.x
u=!u||w===D.dL?k.r:k.y
q.push(B.aU(i,A.bXy(new A.axA(),n,j.aWp(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bb||w===D.dL)j.goA()
return new B.ea(t,i,i,B.bT4(q,C.k,s,i,C.f,C.K,0,i,i,C.b0),i)}}
A.a19.prototype={
gbE(){return[this.a,this.b]}}
A.a5m.prototype={
gbE(){return[this.a,this.b]}}
A.N4.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5o.prototype={
gabq(d){return!1},
gbE(){return[!1,!1,!1,!1]}}
A.ay4.prototype={}
A.aEo.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahA.prototype={}
A.akL.prototype={}
A.akM.prototype={}
A.akT.prototype={}
A.KX.prototype={
ia(d,e,f){}}
A.vI.prototype={}
A.hm.prototype={
gdL(){return null},
gafu(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.N3
if(w)return!0
return!(v instanceof A.N0)&&!(v instanceof A.N_)&&!(v instanceof A.N1)&&!(v instanceof A.MZ)&&!w&&!(v instanceof A.N2)}}
A.a5s.prototype={
gdL(){return this.a.b}}
A.a5t.prototype={
gdL(){return this.a.b}}
A.a5u.prototype={
gdL(){return this.a.b}}
A.N_.prototype={}
A.N0.prototype={}
A.a5x.prototype={
gdL(){return this.a.b}}
A.N2.prototype={}
A.N3.prototype={
gdL(){return this.a.b}}
A.a5r.prototype={
gdL(){return this.a.b}}
A.a5q.prototype={
gdL(){return this.a.b}}
A.MZ.prototype={
gdL(){return this.a.b}}
A.a5v.prototype={
gdL(){return this.a.gdL()}}
A.a5w.prototype={
gdL(){return this.a.gdL()}}
A.N1.prototype={
gdL(){return this.a.gdL()}}
A.G6.prototype={
YQ(d){this.V=d.b
this.U=d.c
this.a4=d.d},
aeW(){var w=this,v=null,u=w.ai=B.bxU(v,v)
u.ay=new A.aUs(w)
u.ch=new A.aUt(w)
u.CW=new A.aUu(w)
u.cy=new A.aUv(w)
u.cx=new A.aUw(w)
u=w.aE=B.GW(v,-1,v)
u.B=new A.aUx(w)
u.Y=new A.aUy(w)
u.V=new A.aUz(w)
u=w.bC=B.a7m(v,w.a4,v)
u.p3=new A.aUA(w)
u.p4=new A.aUB(w)
u.RG=new A.aUC(w)},
cz(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kK(d){return!0},
mZ(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.rG(d)
w=v.aE
w===$&&B.a()
w.rG(d)
w=v.ai
w===$&&B.a()
w.rG(d)}else if(x.gJ.b(d))v.l7(new A.a5w(d))},
gN3(d){return new A.aUD(this)},
gN5(d){return new A.aUE(this)},
l7(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZO(w):null
u.V.$2(d,v)
u.Y=C.bn},
gKS(d){return this.Y},
gFt(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fs(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijn:1}
A.On.prototype={
W(){return new A.W_(B.b([],x.r),B.A(x.S,x.I),new A.aKr(B.A(x.y,x.dj)),null,null)}}
A.W_.prototype={
q(d){var w,v=this,u=v.a4m(),t=v.CW
t.toString
t=v.ab_(t.au(0,v.gft().gp(0)))
w=v.ab_(u)
v.a.toString
return new A.KO(new A.a7e(t,w,null),u,null)},
ab_(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,ec>")
w=B.Q(new B.ab(w,new A.beU(this,d),v),v.i("aw.E"))
return d.aQu(w,this.cy)},
a4m(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UE(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQJ(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQ8(new A.EK(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayS(),t.c,t.d))}return r},
ayT(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafu())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beS(v))
return}v.J(new A.beT(v,e))},
lw(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4m(),new A.beV(w)))}}
A.pN.prototype={
X8(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5n(B.a1l(d.a.b,j.b,f),j.a)
w=A.bEn(d.at,e.at,f)
v=A.bEq(d.c,e.c,f)
u=A.bEs(d.d,e.d,f)
t=A.bGl(d.e,e.e,f)
s=A.kt(d.ch,e.ch,f,A.c5j(),x.cz)
s.toString
r=A.kt(d.CW,e.CW,f,A.c5i(),x.J)
r.toString
u=A.bxw(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Ve(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bxw(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQJ(d,e,f,g){return this.Ve(null,null,d,e,f,g,null)},
aQ8(d){var w=null
return this.Ve(w,d,w,w,w,w,w)},
aQu(d,e){var w=null
return this.Ve(d,w,w,w,w,w,e)},
gbE(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
aqS(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oU(n.a,new A.aKq())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fM))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b3()
n.b=q
r.toString
n.c!==$&&B.b3()
n.c=r
s.toString
n.d!==$&&B.b3()
n.d=s
t.toString
n.e!==$&&B.b3()
n.e=t}},
acN(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKp(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQf(d){return this.acN(d,null)},
aQh(d){return this.acN(null,d)},
gbE(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Oo.prototype={
gbE(){return[this.a]}}
A.a12.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mA.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KS.prototype={
gbE(){return[!1,this.b,this.c,!0]}}
A.yu.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.aKb.prototype={
K(){return"LabelDirection."+this.b}}
A.a5p.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EK.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7f.prototype={
gbE(){return[4,C.hL,16,D.xE,0,120,A.c5l(),!1,!1,!1,0,C.I,A.c5k()]}}
A.mX.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qe.prototype={}
A.rx.prototype={
gbE(){return[this.a,this.b,C.bH,C.w,null]}}
A.tw.prototype={
gbE(){return[this.a,this.b]}}
A.Gy.prototype={
gbE(){return[this.a]}}
A.Op.prototype={}
A.ze.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X8(v,w,d)}}
A.ahn.prototype={}
A.aho.prototype={}
A.ahB.prototype={}
A.akN.prototype={}
A.akQ.prototype={}
A.ams.prototype={}
A.amt.prototype={}
A.amu.prototype={}
A.amw.prototype={}
A.amx.prototype={}
A.amy.prototype={}
A.amz.prototype={}
A.aqY.prototype={}
A.asC.prototype={}
A.aKr.prototype={
UE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yf
u=new A.zi(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zf(s,r,q,t,!0)}w=null
try{w=C.b.oU(d,new A.aKs())}catch(p){return D.yf}v=null
try{v=C.b.oU(w.a,new A.aKt())}catch(p){return D.yf}o=v.a
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
if(f<m)m=f}e=new A.zf(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zf.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amv.prototype={}
A.aKu.prototype={
ia(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabq(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aZ())
a3.aP8(new B.H(0,0,u,v))}d.a_U(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRV(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRR(a3,q,a4)
d.aRW(a3,q,a4)
d.alD(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dK("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vr(q,i,j,k))}}d.aS2(a3,s,a4)
if(w.gabq(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aS0(a2,a3,v,f,new A.Gy(g),a4)}},
aRR(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bwX(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zn(o,e,u,f)
s=p.aj3(o,e,t,u,f)
r=p.Zp(o,e,t,u,f,!0)
q=p.aj2(o,e,t,u,f)
p.aRU(d,s,p.Zm(o,e,t,u,f,!0),f,e)
p.aRO(d,q,r,f,e)
p.aRS(d,t,e)
p.aRQ(d,t,e,f)}},
aRV(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bwX(a6.a),a9=A.bwX(a7.a)
if(a8.length!==a9.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cI<1>")
k=B.Q(new B.cI(m,l),l.i("aw.E"))
j=a3.Zn(a4,a6,n,b3)
i=a3.Zo(a4,a7.aQh(k),k,b3,j)
m=a6.b
m===$&&B.a()
l=a7.b
l===$&&B.a()
h=Math.min(m.a,l.a)
l=a6.c
l===$&&B.a()
m=a7.c
m===$&&B.a()
g=Math.max(l.b,m.b)
m=a6.d
m===$&&B.a()
l=a7.d
l===$&&B.a()
f=Math.max(m.a,l.a)
l=a6.e
l===$&&B.a()
m=a7.e
m===$&&B.a()
e=Math.min(l.b,m.b)
m=a3.fd(h,a4,b3)
l=a3.dG(g,a4,b3)
d=a3.fd(f,a4,b3)
a0=a3.dG(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gp(0)
a1.seU(u.mP(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mD(C.dw,C.bf,C.e5,C.ew,C.dU).el()
m=B.dQ(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.U(B.vo(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aRW(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zt(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adv(s,q,new B.r(p,o))}}},
aS2(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKx())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zt(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rw(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.ls(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.ls(q.$2(m,k))))
f=b1.dG(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dG(a2,w,b4)
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
b0=B.l1(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mP(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dx(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rw(d.a))
f.adv(t,j,new B.r(h,g))}}},
Zo(d,e,f,g,h){var w=this.aj4(d,e,f,g,h)
return w},
Zn(d,e,f,g){return this.Zo(d,e,f,g,null)},
aj4(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cH($.an().r):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f9(d,a0))
if(e===1)g.aA(new B.cr(d,a0))}else g.aA(new B.cr(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.u,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fd(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fd(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LS(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.il(r)}return g},
Zp(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bxu(f)
v=J.Y(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cr(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cr(u,t))
w.aA(new B.cr(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pl())
return w},
aj3(d,e,f,g,h){return this.Zp(d,e,f,g,h,!1)},
Zm(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bxu(f)
v=J.Y(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cr(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cr(u,0))
w.aA(new B.cr(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pl())
return w},
aj2(d,e,f,g,h){return this.Zm(d,e,f,g,h,!1)},
aRU(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fd(t.a,w,g)
s=r.r
s===$&&B.a()
A.bxT(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fW(e,r.r)},
aRO(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.bxT(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRS(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Og(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iq:C.e5
u.e=C.ew
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lw()
u.z=new B.zn(C.aA,w.c*0.57735+0.5)
d.a.fW(B.bxv(A.aB_(e,f.cy),w.b),this.f)},
aRQ(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iq:C.e5
q.e=C.ew
q=f.b
q===$&&B.a()
q=s.fd(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fd(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.bxT(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bVw(t)
d.a.fW(A.aB_(e,f.cy),s.f)},
aS0(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bKw(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dK("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lw().ZU(b4,u.b)
s=u.a
r=w.k(0,C.iW)?new B.ko(1):w
q=new B.tt(new B.hz(s,a8,a8,C.bn,a8,a8,a8,a8,a8,a8,t),C.bH,C.w,r,a8,a8,a8,a8,C.bA,a8)
q.afO(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hL.gev()
k=o+(w-1)*4+(C.hL.gd_(0)+C.hL.gd2(0))
j=t-k-16
i=a7.ZV(b3,l,D.xE,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.FV(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bKv(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lw().Km(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lw().Km(new B.G(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VP(0,new A.aKv(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bY8(q.r,q.w)
A:{if(D.E5===a5){a6=a3
break A}if(D.E6===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VP(0,new A.aKw(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zt(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Wu(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajv(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKy())
return t.length===0?null:t},
ajv(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qe(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vr.prototype={}
A.a7e.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.aKu()
t.a16()
$.an()
w=B.aZ()
w.b=C.aX
t.f=w
w=B.aZ()
w.b=C.bf
t.r=w
w=B.aZ()
w.b=C.aX
t.w=w
w=B.aZ()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a0d
t.x=w
w=B.aZ()
w.b=C.aX
w.r=C.C.gp(0)
t.y=w
w=B.aZ()
w.b=C.bf
w.r=C.l.gp(0)
t.z=w
w=B.aZ()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.abj(this.d,v,u,t,d,C.bn,new B.bp(),B.aJ(x.v))
t.bi()
t.YQ(v.cx)
t.aeW()
return t},
by(d,e){e.sio(0,this.d)
e.sYB(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.abj.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYB(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0E(d.cx)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1y(t,v),new A.vI(u.aC,u.i4,u.cW,x.o))
s.restore()},
ZO(d){var w=this,v=w.gC(0)
return new A.Op(w.fX.Wu(d,v,new A.vI(w.aC,w.i4,w.cW,x.o)))}}
A.Nu.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a1y.prototype={
aP8(d){this.a.a.clipRect(B.dQ(d),$.p3()[1],!0)
return null},
adD(d,e){d.aM(this.a,e)},
VP(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lw()
s.Yz(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dx(d,e,f,g){var w=B.cH($.an().r)
w.aA(new B.f9(d.a,d.b))
w.aA(new B.cr(e.a,e.b))
this.a.fW(A.aB_(w,g),f)}}
A.zi.prototype={
gbE(){return[this.a]}}
A.amG.prototype={}
A.a1I.prototype={}
A.b1G.prototype={
Km(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWZ(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aV(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aV(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aV(v,v)
s=d.d
return new B.d1(w,u,t,s.a>v||s.b>v?new B.aV(v,v):s)},
aX_(d,e){var w,v
if(d==null)return D.a0o
w=d.b
v=e/2
return d.aQk(w>v?v:w)},
OE(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_0(w)},
b_0(d){if(d<1)return this.aJ6(d)
return this.a83(d)},
aJ6(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a83(d*q)/q},
a83(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajj(d){if(d>=1)return 1
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
ZU(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j1
w=e.a?u.w.c5(e):e
v=B.b6(d,C.vD)
v=v==null?null:v.ay
return v===!0?w.c5(C.mj):w},
ajb(d,e,f,g){var w=C.d.ae(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qg)","D(ey)","~(v,fD)","F(ec,v)","R<~>()","F(F,qg)","bP(F,tv)","pA(F)","v(qe,qe)","In(o2)","I2(C,bI)","Jo(o3)","vw(@)","wq(@)","ec(F)","CH(@)","ai(F,tv)","uR(dD<uR>)","E7(dD<aF3>)","F(vw)","F(wq)","wJ(C,bI)","Bb(z)","~()","qg(@)","~(hm,KU?)","xC(@)","F(ik)","D(fD)","~(v,ik)","~(@)","jP(nL)","c(nL)","jP(bH<v,F>)","jP(F)","nL(jP)","~(hm,Op?)","ec(ec)","lK(GJ<lK>)","ze(@)","R<o3>(ck<o3>)","tw(v)","uS(ey,F,ec,v)","rx(mX)","D(ec)","v(vr,vr)","F(fD)","R<o2>(ck<o2>)","v(v,v,F)","fD(fD,fD,F)","ik(ik,ik,F)","mz(mz,mz,F)","CY?(fD,v,ik,v)","E(fD)","c(F,tv)","ey(ey,ey,F)","D(F)","mU(mU,mU,F)","nj(nj,nj,F)","kN(kN,kN,F)","ld(ld,ld,F)","f(kN)","f(ld)","ec(ec,ec,F)","mA(mA,mA,F)","uS(ey,F,ec,v{size:F?})","D(ey,ec)","F(r,r)","u<tw>(ec,u<v>)","y5(z)","u<rx>(u<mX>)","E(mX)","ys(f_<C?>)"])
A.aF_.prototype={
$1(d){var w=B.dc(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qg(J.al(v==null?"":v),A.p_(w.h(0,"revenue_net")),A.p_(w.h(0,"expense_net")),A.p_(w.h(0,"result_net")))},
$S:z+24}
A.aF0.prototype={
$1(d){var w,v,u,t=B.dc(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.p_(t.h(0,"gross"))
u=B.bo(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vw(s,r,w,v,u,A.p_(t.h(0,"avg_basket")))},
$S:z+12}
A.aF1.prototype={
$1(d){var w,v=B.dc(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bo(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.wq(u,t,w,A.p_(v.h(0,"gross")))},
$S:z+13}
A.aFi.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CH(v,u,J.al(t==null?"expense":t),A.ua(w.h(d,"net")),A.ua(w.h(d,"tax")),A.ua(w.h(d,"gross")))},
$S:z+15}
A.bta.prototype={
$1(d){return new A.uR(d.ap($.c0(),x.A))},
$S:z+17}
A.btb.prototype={
$1(d){return new A.E7(d.ap($.bP6(),x.D))},
$S:z+18}
A.bv0.prototype={
$1(d){return E.aF2()},
$S:z+38}
A.btc.prototype={
$1(d){var w=d.ap($.xn(),x.P)
return d.ap($.avQ(),x.a).FU(w)},
$S:z+40}
A.bt9.prototype={
$1(d){var w=d.ap($.xn(),x.P)
return d.ap($.avQ(),x.a).FQ(w)},
$S:z+47}
A.bt8.prototype={
$1(d){return this.aiV(d)},
aiV(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ap($.c0(),x.A).hm("finance_balance_kpis",t),$async$$1)
case 3:s=r.dc(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:340}
A.aEZ.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avQ(),x.a).pD(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEY.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avQ(),x.a).Lw(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFg.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bvP()
if(s.e==null)B.U(B.Z(y.b))
s.gcq().ck(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF8.prototype={
$0(){return this.a.Jk(this.b,this.c)},
$S:0}
A.aF9.prototype={
$0(){return this.a.Bh(this.b,this.c)},
$S:0}
A.aFa.prototype={
$0(){var w=x.z
return B.ba(this.a,!1).dV(B.dO(new A.aF7(),null,w),w)},
$S:0}
A.aF7.prototype={
$1(d){return F.D5},
$S:z+69}
A.aFb.prototype={
$0(){return B.o8(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFc.prototype={
$0(){var w=this
return w.a.Bi(w.b,w.c,w.d)},
$S:0}
A.aFf.prototype={
$0(){return D.asl},
$S:138}
A.aFe.prototype={
$2(d,e){return new A.I2(B.j(d),null)},
$S:z+10}
A.aFd.prototype={
$1(d){return new A.Jo(d,null)},
$S:z+11}
A.aF6.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.i("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lz(B.b([B.dF(C.cZ,w,w,new A.aF4(u),w,w),B.dZ(F.vf,new A.aF5(u),B.dM(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vg)},
$S:56}
A.aF4.prototype={
$0(){B.ba(this.a,!1).dh(!1)
return null},
$S:0}
A.aF5.prototype={
$0(){B.ba(this.a,!1).dh(!0)
return null},
$S:0}
A.bhw.prototype={
$0(){var w=this.a.aK(0,$.xn().ghP(),x.V),v=E.aF2()
w.ww(0,v)
return v},
$S:0}
A.bhx.prototype={
$0(){var w=this.a.aK(0,$.xn().ghP(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.lK(B.bN(B.aY(v),1,1,0,0,0,0),v)
w.ww(0,u)
return u},
$S:0}
A.bhy.prototype={
$0(){return this.a.IG(this.b,this.c)},
$S:0}
A.bhv.prototype={
$2(d,e){return new B.oG(B.W(d).aPG(B.W(d).ax.aQz(C.h,C.n)),e,null)},
$S:1010}
A.bob.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dy(),s=A.O8(!1,C.nY,"Umsatz 7 %",t.aq(u.a),w),r=A.O8(!1,C.nY,"Umsatz 19 %",t.aq(u.b),w),q=A.O8(!0,D.ab6,"Umsatz netto",t.aq(u.c),w),p=A.O8(!1,D.ab5,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return E.aHw(1.7,B.b([s,r,q,p,A.O8(!0,C.nQ,"Ergebnis",n,o<0?C.ad:C.aj),A.O8(!1,C.fO,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.ic,!0)},
$S:131}
A.aKa.prototype={
$0(){return D.asi},
$S:138}
A.aK9.prototype={
$2(d,e){var w=null
return B.by(C.ad,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.m),w,w,w),C.fK,w,C.E,w,3)},
$S:256}
A.aK8.prototype={
$1(d){return new A.In(d,null)},
$S:z+9}
A.beG.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dy(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("aw.E"),d=B.Q(new B.ab(g,new A.bev(),f),e)
i=A.jE(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.ab(g,new A.bew(),f),e)
d=A.jE(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.ab(g,new A.bex(),f),e)
k=A.jE(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.bey(),f),e)
w=A.jE(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.bez(),f),e)
v=A.jE(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.beA(),f),e)
u=A.jE(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.beB(),f),e)
t=A.jE(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.ab(g,new A.beC(),f),e)
h=A.jE(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.ab(g,new A.beD(m),f),e)
m=A.jE(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.ab(g,new A.beE(l),f),e)
l=A.jE(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.beF(j),f),e)
return E.aHw(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jE(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ic,!0)},
$S:131}
A.bev.prototype={
$1(d){return d.b},
$S:z+0}
A.bew.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bex.prototype={
$1(d){return d.d},
$S:z+0}
A.bey.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bez.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.beA.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.beB.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beC.prototype={
$1(d){return d.d},
$S:z+0}
A.beD.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.beE.prototype={
$1(d){return this.a},
$S:z+0}
A.beF.prototype={
$1(d){return this.a},
$S:z+0}
A.beH.prototype={
$0(){return A.bzM(this.b,1.45,new A.U0(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.beI.prototype={
$0(){return A.bzM(this.b,1.6,new A.Ud(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsh.prototype={
$1(d){var w=this,v=null,u=B.aB(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.i(w.a,v,v,v,v,B.bC(C.h,18,C.o),v,v,v),1),B.fi(v,v,D.adj,v,v,new A.bsg(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.L(s,B.b([B.i(w.b,v,v,v,v,B.y(C.q,12,C.aE),v,v,v),C.F],t))
s.push(C.v)
s.push(B.bV(new B.lB(w.c,w.d,v),v,17976931348623157e292))
return B.a4C(v,C.l,new B.ae(C.ah,B.aa(s,C.A,C.f,C.K),v),v,v,v,C.fL,C.uZ,v,new B.d6(u,C.I),v)},
$S:1011}
A.bsg.prototype={
$0(){return B.ba(this.a,!1).f2()},
$S:0}
A.beJ.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bzM(this.b,2.4,new A.Yp(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bnc.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.bnd.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bne.prototype={
$1(d){return A.aKp(null,1.4,null,C.ad,0.35,D.ahz,D.DX,null,!1,!1,!1,!1,D.Fj,!1,10,D.YN,!0,C.lr,B.b([new A.ey(0,d),new A.ey(this.a,d)],x.U))},
$S:z+14}
A.b5p.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5r.prototype={
$2(d,e){var w=null
return B.i(this.a.aKl(d),w,w,w,w,B.y(C.q,10,C.J),w,w,w)},
$S:z+16}
A.b5s.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.v6
return new B.ae(C.kX,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.q,9,C.J),w,w,w),w)},
$S:z+6}
A.b5q.prototype={
$1(d){return D.a9y},
$S:z+7}
A.b6j.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6k.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6l.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b6m.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.v6
return new B.ae(C.kX,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bfc.prototype={
$1(d){return d.d},
$S:z+19}
A.bfd.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bpt.prototype={
$1(d){return d.d},
$S:z+20}
A.bpu.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b3Q.prototype={
$0(){return D.asq},
$S:138}
A.b3P.prototype={
$2(d,e){return new A.wJ("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b3O.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.aa(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.J),m,m,m),C.F,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.q,12.5,C.m),m,m,m),C.v,B.km(C.ci,B.b([B.hs(C.ER,D.aFL,new A.b3I(w,v),m),B.hs(D.acX,D.aEG,new A.b3J(w,v),m)],u),C.dt,8,8)],u),C.A,C.f,C.i),C.a9,m,C.E,m,3)}w=new A.b3R(d)
t=C.b.fA(n.a.e.d,0,new A.b3K())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.k2(new A.b3L(new A.b3S(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.aa(B.b([w,C.F,B.ak(B.b([B.ay(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.q,11,C.m),m,m,m),1),B.oD(D.ae6,D.aF0,new A.b3M(q,p),m),B.oD(D.adL,D.aEM,new A.b3N(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.a8,C.f,C.i)},
$S:235}
A.b3I.prototype={
$0(){return A.av8(this.a,this.b,null)},
$S:0}
A.b3J.prototype={
$0(){return A.av5(this.a,this.b)},
$S:0}
A.b3R.prototype={
$1(d){var w=B.bo(J.a3(this.a,d))
return w==null?null:w},
$S:1012}
A.b3S.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:33}
A.b3K.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3L.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jE(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hY,o.$1("liquidity1_pct")),m=A.jE(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hY,o.$1("liquidity2_pct")),l=A.jE(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hY,o.$1("liquidity3_pct"))
o=A.jE(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hY,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b0(w,".",",")+" %"}w=A.jE(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hY,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dy()
v=u.aq(v)
return E.aHw(p,B.b([n,m,l,o,w,A.jE(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.hY,v)],x.p),q,12,12,C.ic,!0)},
$S:131}
A.b3M.prototype={
$0(){return A.av5(this.a,this.b)},
$S:0}
A.b3N.prototype={
$0(){return A.av8(this.a,this.b,this.c)},
$S:0}
A.bsf.prototype={
$1(d){return new A.Bb(this.a,new A.bse(this.b),this.c,null)},
$S:z+22}
A.bse.prototype={
$0(){var w=this.a,v=$.bvO()
if(w.e==null)B.U(B.Z(y.b))
w.gcq().ck(v)},
$S:0}
A.b3C.prototype={
$0(){},
$S:0}
A.b3D.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3E.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3G.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.ug(u.b,B.bN(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3F(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3F.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3H.prototype={
$0(){return B.ba(this.a,!1).f2()},
$S:0}
A.b3T.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3U.prototype={
$1(d){return new A.xC(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axQ.prototype={
$1(d){return d.e},
$S:z+27}
A.axR.prototype={
$2(d,e){return d+e},
$S:43}
A.axT.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axV.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axW.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adD(v.d,v.e)},
$S:0}
A.axz.prototype={
$1(d){return 0},
$S:1013}
A.axy.prototype={
$2(d,e){return B.f1(C.bR,this.a.alh(e),C.t,C.bk,null)},
$S:1014}
A.aZ8.prototype={
$1(d){return d.a},
$S:z+31}
A.aZ9.prototype={
$1(d){return d.b},
$S:z+32}
A.aZa.prototype={
$1(d){return new A.jP(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZb.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mD||v===D.dL))t=1-t
return new A.jP(d,t*w.d)},
$S:z+34}
A.aZc.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goA(),p=d.a
r.goA()
r=$.lw()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajj(Math.abs(s.b-s.c)))
t=""}if(C.c.hL(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nL(d,q.c.b.$2(p,new A.tv(u+t,s.e)))},
$S:z+35}
A.aUs.prototype={
$1(d){this.a.l7(new A.a5s(d))},
$S:188}
A.aUt.prototype={
$1(d){this.a.l7(new A.a5t(d))},
$S:42}
A.aUu.prototype={
$1(d){this.a.l7(new A.a5u(d))},
$S:29}
A.aUv.prototype={
$0(){this.a.l7(D.a22)},
$S:0}
A.aUw.prototype={
$1(d){this.a.l7(new A.N0())},
$S:45}
A.aUx.prototype={
$1(d){this.a.l7(new A.a5x(d))},
$S:40}
A.aUy.prototype={
$0(){this.a.l7(D.a23)},
$S:0}
A.aUz.prototype={
$1(d){this.a.l7(new A.N3(d))},
$S:92}
A.aUA.prototype={
$1(d){this.a.l7(new A.a5r(d))},
$S:186}
A.aUB.prototype={
$1(d){this.a.l7(new A.a5q(d))},
$S:184}
A.aUC.prototype={
$1(d){return this.a.l7(new A.MZ(d))},
$S:181}
A.aUD.prototype={
$1(d){return this.a.l7(new A.a5v(d))},
$S:62}
A.aUE.prototype={
$1(d){return this.a.l7(new A.N1(d))},
$S:58}
A.beU.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQf(w==null?B.b([],x.t):w)},
$S:z+37}
A.beS.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.beT.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.beR())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.Gy(w))},
$S:0}
A.beR.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+8}
A.beV.prototype={
$1(d){return new A.ze(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKq.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.bsZ.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bEr(t?A.bzA(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tw(w,new A.yu(!0,A.bAm(),new A.bsY(v)))},
$S:z+41}
A.bsY.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bT2(A.bzA(d,e,f),w,A.c0N(d,e,f))},
$S:z+42}
A.bsW.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.iZ(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rx(C.d.j(d.b),w)},
$S:z+43}
A.aKs.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKt.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aKx.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+45}
A.aKv.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKw.prototype={
$0(){this.a.adD(this.b,this.c)},
$S:0}
A.aKy.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+8}
A.axJ.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axK.prototype={
$2(d,e){return d+e},
$S:43}
A.axN.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iQ(v,B.ad(v).i("iQ<1>")).aw(0,new A.axO(w,this.a/(u+1),this.c))},
$S:0}
A.axO.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axL.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axM.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHv.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1015}
A.aB0.prototype={
$1(d){return d},
$S:1016};(function aliases(){var w=A.KN.prototype
w.a_U=w.ia
w.alD=w.aRX
w.alE=w.adw
w=A.TB.prototype
w.aod=w.l
w=A.KX.prototype
w.a_V=w.ia
w=A.G6.prototype
w.a0E=w.YQ})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c4q","bT_",72)
var q
v(q=A.TD.prototype,"gaEg","aEh",23)
v(q,"gaDj","HW",4)
v(q,"gaE0","I6",4)
u(A.TE.prototype,"gas5","as6",25)
t(A,"c3e",3,null,["$3"],["bQk"],49,0)
t(A,"c3f",3,null,["$3"],["bQl"],50,0)
t(A,"c3g",3,null,["$3"],["bQm"],51,0)
t(A,"c3i",4,null,["$4"],["c43"],52,0)
w(A,"c3h","c42",53)
s(A,"bzQ","c44",54)
t(A,"c39",3,null,["$3"],["bT3"],55,0)
w(A,"a_C","c6s",56)
w(A,"avb","c47",7)
t(A,"c3b",3,null,["$3"],["bTQ"],57,0)
t(A,"c3d",3,null,["$3"],["bZ0"],58,0)
t(A,"c3a",3,null,["$3"],["bTP"],59,0)
t(A,"c3c",3,null,["$3"],["bZ_"],60,0)
w(A,"cdB","bTO",61)
w(A,"cdC","bYZ",62)
r(A.Ye.prototype,"ga4k","axA",30)
u(A.W_.prototype,"gayS","ayT",36)
t(A,"c5j",3,null,["$3"],["bUh"],63,0)
t(A,"c5i",3,null,["$3"],["bQo"],64,0)
w(A,"c5m","c6t",1)
t(A,"bKT",4,null,["$5$size","$4"],["bJm",function(d,e,f,g){return A.bJm(d,e,f,g,null)}],65,0)
s(A,"bAm","c6r",66)
s(A,"bKU","c2X",67)
s(A,"bKX","c4a",68)
s(A,"bKW","c46",3)
s(A,"bKV","c45",3)
w(A,"c5l","bKw",70)
w(A,"c5k","bKv",71)
t(A,"a_H",3,null,["$3"],["c5h"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.N,[A.a71,A.agu,A.alO,A.IW,A.Jo,A.ags,A.I2,A.In,A.al8,A.aml,A.UO,A.Yp,A.U0,A.Ud,A.amP,A.aj9,A.Ca,A.asz,A.wJ,A.KO,A.AC])
u(B.C,[A.uR,A.E7,A.bf,A.ahA,A.ahq,A.ahs,A.aht,A.ahi,A.akT,A.ahw,A.ahu,A.ay4,A.asD,A.axS,A.ahr,A.KX,A.a63,A.tv,A.ar_,A.aqZ,A.ahh,A.akS,A.ey,A.akP,A.akR,A.apb,A.alF,A.ath,A.akQ,A.akw,A.akO,A.axx,A.beP,A.axA,A.ahe,A.nL,A.akL,A.akM,A.vI,A.hm,A.amt,A.amw,A.ahn,A.ahB,A.aho,A.akN,A.amz,A.amx,A.asC,A.aqY,A.aKr,A.amv,A.vr,A.a1y,A.amG,A.a1I,A.b1G])
u(B.uP,[A.qg,A.vw,A.wq,A.aAp,A.aBw,A.o2,A.CH,A.o3])
u(B.nQ,[A.aF_,A.aF0,A.aF1,A.aFi,A.bta,A.btb,A.bv0,A.btc,A.bt9,A.bt8,A.aF7,A.aFd,A.aF6,A.aK8,A.bev,A.bew,A.bex,A.bey,A.bez,A.beA,A.beB,A.beC,A.beD,A.beE,A.beF,A.bsh,A.bne,A.b5q,A.b6j,A.b6k,A.bfc,A.bpt,A.b3O,A.b3R,A.b3S,A.bsf,A.b3U,A.axQ,A.axT,A.axz,A.aZ8,A.aZ9,A.aZa,A.aZb,A.aZc,A.aUs,A.aUt,A.aUu,A.aUw,A.aUx,A.aUz,A.aUA,A.aUB,A.aUC,A.aUD,A.aUE,A.beU,A.beV,A.aKq,A.bsZ,A.bsY,A.bsW,A.aKs,A.aKt,A.axJ,A.aB0])
t(A.ys,B.fz)
u(B.xS,[A.aEZ,A.aEY,A.aFg,A.aF8,A.aF9,A.aFa,A.aFb,A.aFc,A.aFf,A.aF4,A.aF5,A.bhw,A.bhx,A.bhy,A.aKa,A.beH,A.beI,A.bsg,A.beJ,A.b3Q,A.b3I,A.b3J,A.b3M,A.b3N,A.bse,A.b3C,A.b3D,A.b3E,A.b3G,A.b3F,A.b3H,A.b3T,A.axW,A.aUv,A.aUy,A.beS,A.beT,A.aKv,A.aKw,A.axN])
u(B.y_,[A.yt,A.ao2,A.a72,A.ahm])
u(B.xT,[A.aFe,A.bhv,A.bob,A.aK9,A.beG,A.bnc,A.bnd,A.b5p,A.b5r,A.b5s,A.b6l,A.b6m,A.bfd,A.bpu,A.b3P,A.b3K,A.b3L,A.axR,A.axV,A.axy,A.beR,A.aKx,A.aKy,A.axK,A.axO,A.axL,A.axM,A.aHv])
u(B.M,[A.Bb,A.RA])
u(B.a0,[A.TD,A.Ye])
u(B.NH,[A.KT,A.On])
u(B.up,[A.TE,A.W_])
t(A.a19,A.ahA)
t(A.ahd,A.a19)
t(A.a0U,A.ahd)
u(A.a0U,[A.ahp,A.amu])
t(A.nM,A.ahp)
u(B.I1,[A.axH,A.adX,A.CX,A.aEo,A.aKb,A.Nu])
t(A.fD,A.ahq)
t(A.ik,A.ahs)
t(A.mz,A.aht)
t(A.a10,A.ahi)
t(A.N4,A.akT)
u(A.N4,[A.ahv,A.amy])
t(A.a15,A.ahv)
t(A.a16,A.ahw)
t(A.CY,A.ahu)
u(A.ay4,[A.KU,A.Op])
t(A.adZ,A.asD)
t(A.ahx,A.adZ)
t(A.a17,A.ahx)
u(B.b2,[A.xC,A.ze])
t(A.uv,A.ahr)
t(A.KN,A.KX)
u(A.KN,[A.axU,A.aKu])
u(B.Oi,[A.a13,A.a7e])
u(B.J,[A.G6,A.ahf])
u(A.G6,[A.ab6,A.abj])
t(A.q6,A.ar_)
t(A.acv,A.aqZ)
t(A.pd,A.ahh)
t(A.uT,A.akS)
t(A.yv,A.akP)
t(A.pA,A.akR)
t(A.Q9,A.apb)
t(A.mU,A.alF)
t(A.nj,A.ath)
u(A.pA,[A.alE,A.atg])
t(A.kN,A.alE)
t(A.ld,A.atg)
t(A.a5p,A.akQ)
u(A.a5p,[A.alD,A.atf])
t(A.a6e,A.alD)
t(A.ael,A.atf)
t(A.MN,A.akw)
t(A.uS,A.akO)
t(A.MY,A.uS)
t(A.acw,B.h3)
t(A.ahg,A.ahf)
t(A.TB,A.ahg)
t(A.a0V,A.TB)
t(A.jP,A.ahe)
t(A.a5m,A.akL)
t(A.a5o,A.akM)
u(A.hm,[A.a5s,A.a5t,A.a5u,A.N_,A.N0,A.a5x,A.N2,A.N3,A.a5r,A.a5q,A.MZ,A.a5v,A.a5w,A.N1])
t(A.pN,A.amu)
t(A.ec,A.amt)
t(A.Oo,A.amw)
t(A.a12,A.ahn)
t(A.mA,A.ahB)
t(A.KS,A.aho)
t(A.yu,A.akN)
t(A.EK,A.amy)
t(A.a7f,A.amz)
t(A.ams,A.ey)
t(A.mX,A.ams)
t(A.qe,A.mX)
t(A.rx,A.amx)
t(A.tw,A.asC)
t(A.Gy,A.aqY)
t(A.zf,A.amv)
t(A.zi,A.amG)
w(A.ahi,A.bf)
w(A.ahp,A.bf)
w(A.ahq,A.bf)
w(A.ahs,A.bf)
w(A.aht,A.bf)
w(A.ahu,A.bf)
w(A.ahv,A.bf)
w(A.ahw,A.bf)
w(A.ahx,A.bf)
w(A.ahr,A.bf)
w(A.ahd,A.bf)
w(A.ahh,A.bf)
w(A.akw,A.bf)
w(A.akO,A.bf)
w(A.akP,A.bf)
w(A.akR,A.bf)
w(A.akS,A.bf)
w(A.alE,A.bf)
w(A.alD,A.bf)
w(A.alF,A.bf)
w(A.apb,A.bf)
w(A.aqZ,A.bf)
w(A.ar_,A.bf)
w(A.asD,A.bf)
w(A.atg,A.bf)
w(A.atf,A.bf)
w(A.ath,A.bf)
w(A.ahe,A.bf)
v(A.ahf,B.aD)
w(A.ahg,B.e8)
v(A.TB,B.a4l)
w(A.ahA,A.bf)
w(A.akL,A.bf)
w(A.akM,A.bf)
w(A.akT,A.bf)
w(A.ahn,A.bf)
w(A.aho,A.bf)
w(A.ahB,A.bf)
w(A.akN,A.bf)
w(A.akQ,A.bf)
w(A.ams,A.bf)
w(A.amt,A.bf)
w(A.amu,A.bf)
w(A.amw,A.bf)
w(A.amx,A.bf)
w(A.amy,A.bf)
w(A.amz,A.bf)
w(A.aqY,A.bf)
w(A.asC,A.bf)
w(A.amv,A.bf)
w(A.amG,A.bf)})()
B.bpI(b.typeUniverse,JSON.parse('{"a71":{"N":[],"c":[]},"E7":{"aF3":[]},"ys":{"fz":["bg<~>"],"fz.T":"bg<~>"},"Jo":{"N":[],"c":[]},"I2":{"N":[],"c":[]},"yt":{"bj":[],"M":[],"c":[]},"agu":{"N":[],"c":[]},"alO":{"N":[],"c":[]},"ao2":{"bj":[],"M":[],"c":[]},"IW":{"N":[],"c":[]},"ags":{"N":[],"c":[]},"In":{"N":[],"c":[]},"wJ":{"N":[],"c":[]},"Bb":{"M":[],"c":[]},"a72":{"bj":[],"M":[],"c":[]},"al8":{"N":[],"c":[]},"aml":{"N":[],"c":[]},"UO":{"N":[],"c":[]},"Yp":{"N":[],"c":[]},"U0":{"N":[],"c":[]},"Ud":{"N":[],"c":[]},"amP":{"N":[],"c":[]},"aj9":{"N":[],"c":[]},"Ca":{"N":[],"c":[]},"asz":{"N":[],"c":[]},"ahm":{"bj":[],"M":[],"c":[]},"TD":{"a0":["Bb"]},"KT":{"M":[],"c":[]},"TE":{"a0":["KT"]},"nM":{"bf":[]},"fD":{"bf":[]},"ik":{"bf":[]},"mz":{"bf":[]},"CY":{"bf":[]},"xC":{"b2":["nM"],"b4":["nM"],"b4.T":"nM","b2.T":"nM"},"a10":{"bf":[]},"a15":{"bf":[]},"a16":{"bf":[]},"a17":{"bf":[]},"uv":{"bf":[]},"a13":{"aW":[],"c":[]},"ab6":{"J":[],"L":[],"jn":[],"aT":[]},"pA":{"bf":[]},"mU":{"bf":[]},"nj":{"bf":[]},"kN":{"bf":[]},"ld":{"bf":[]},"uS":{"bf":[]},"a0U":{"bf":[]},"q6":{"bf":[]},"acv":{"bf":[]},"pd":{"bf":[]},"uT":{"bf":[]},"yv":{"bf":[]},"adZ":{"bf":[]},"Q9":{"bf":[]},"a6e":{"bf":[]},"ael":{"bf":[]},"MN":{"bf":[]},"MY":{"bf":[]},"KO":{"N":[],"c":[]},"RA":{"M":[],"c":[]},"Ye":{"a0":["RA"]},"jP":{"bf":[]},"acw":{"h3":[],"aW":[],"c":[]},"a0V":{"e8":["J","hn"],"J":[],"aD":["J","hn"],"L":[],"aT":[],"aD.1":"hn","e8.1":"hn","aD.0":"J"},"AC":{"N":[],"c":[]},"a19":{"bf":[]},"a5m":{"bf":[]},"N4":{"bf":[]},"a5o":{"bf":[]},"a5s":{"hm":[]},"a5t":{"hm":[]},"a5u":{"hm":[]},"N_":{"hm":[]},"N0":{"hm":[]},"a5x":{"hm":[]},"N2":{"hm":[]},"N3":{"hm":[]},"a5r":{"hm":[]},"a5q":{"hm":[]},"MZ":{"hm":[]},"a5v":{"hm":[]},"a5w":{"hm":[]},"N1":{"hm":[]},"G6":{"J":[],"L":[],"jn":[],"aT":[]},"On":{"M":[],"c":[]},"W_":{"a0":["On"]},"pN":{"bf":[]},"ec":{"bf":[]},"mA":{"bf":[]},"mX":{"ey":[],"bf":[]},"qe":{"mX":[],"ey":[],"bf":[]},"rx":{"bf":[]},"tw":{"bf":[]},"Gy":{"bf":[]},"ze":{"b2":["pN"],"b4":["pN"],"b4.T":"pN","b2.T":"pN"},"Oo":{"bf":[]},"a12":{"bf":[]},"KS":{"bf":[]},"yu":{"bf":[]},"a5p":{"bf":[]},"EK":{"bf":[]},"a7f":{"bf":[]},"zf":{"bf":[]},"a7e":{"aW":[],"c":[]},"abj":{"J":[],"L":[],"jn":[],"aT":[]},"zi":{"bf":[]}}'))
B.bIR(b.typeUniverse,JSON.parse('{"KN":1,"N4":1,"KX":1,"G6":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CH"),e:w("bg<o2>"),aN:w("bg<o3>"),fM:w("bg<a1<f,@>?>"),b:w("bg<~>"),W:w("jP"),B:w("nM"),dB:w("fD"),T:w("uv"),fj:w("ik"),G:w("mz"),J:w("mA"),k:w("at"),cX:w("a1I<F>"),dO:w("uD"),R:w("aj<f,@>"),v:w("hJ"),bz:w("lF<bc>"),f0:w("nW"),E:w("bf"),F:w("ys"),X:w("o2"),P:w("lK"),D:w("uR"),a:w("aF3"),d:w("o3"),cw:w("ey"),L:w("hn"),m:w("dq<v,E>"),cm:w("kN"),dv:w("mU"),g:w("B<nL>"),O:w("B<fD>"),Y:w("B<ik>"),C:w("B<bwJ>"),U:w("B<ey>"),K:w("B<a63>"),u:w("B<ec>"),bC:w("B<vr>"),aA:w("B<u<ey>>"),r:w("B<Gy>"),s:w("B<f>"),eg:w("B<tt>"),df:w("B<qe>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bi<a0<M>>"),Z:w("mX"),cz:w("ec"),hf:w("pN"),dj:w("zf"),fT:w("rx"),c_:w("io<oT<bg<~>>>"),x:w("zi<fD>"),y:w("zi<ec>"),I:w("u<v>"),ef:w("vw"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("k4"),aU:w("C"),Q:w("vI<nM>"),o:w("vI<pN>"),eo:w("pX"),gJ:w("pY"),V:w("nc<lK>"),N:w("f"),A:w("ne"),bO:w("bL"),er:w("tt"),j:w("wq"),dw:w("qe"),bY:w("tw"),cZ:w("qg"),gc:w("kl"),es:w("ld"),bN:w("nj"),l:w("c"),q:w("x1"),g4:w("ie<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xC?"),f3:w("ze?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("C?"),aD:w("kl?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B3=new B.lA(C.n,B.au("lA<E>"))
D.Ba=new A.CX(0,"left")
D.mD=new A.CX(1,"top")
D.Bb=new A.CX(2,"right")
D.dL=new A.CX(3,"bottom")
D.aw7=new A.q6(!1,A.bzQ(),22,null)
D.kr=new A.pd(16,null,D.aw7,!0)
D.a9z=new A.pA(C.C,null,2,null)
D.w5=new A.KS(!1,D.a9z,A.c5m(),!0)
D.a04=new A.axH(3,"spaceEvenly")
D.a0d=new B.xG(6,"dstIn")
D.Y5=new B.aV(3,3)
D.Bf=new B.d1(D.Y5,D.Y5,C.a1,C.a1)
D.a0o=new B.bl(C.C,0,C.T,-1)
D.BO=new A.a5o()
D.a22=new A.N_()
D.a23=new A.N2()
D.aNM=new A.acv()
D.amg=w([],B.au("B<kN>"))
D.amh=w([],B.au("B<ld>"))
D.DT=new A.MN(D.amg,D.amh,!0)
D.a9g=new B.dL("Zeitraum",!1,null)
D.a9k=new B.dL("Konten (SKR 03)",!1,null)
D.xE=new A.aEo(0,"center")
D.aNY=new A.yu(!0,A.bAm(),A.bKT())
D.DX=new A.yu(!1,A.bAm(),A.bKT())
D.DY=new A.yv(!1,!0,null,A.avb(),A.a_C(),!0,null,A.avb(),A.a_C())
D.aNZ=new A.yv(!0,!0,null,A.avb(),A.a_C(),!0,null,A.avb(),A.a_C())
D.a4n=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a48=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4x=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a4r=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3S=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3R=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4U=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a4g=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4X=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4R=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aqp=new B.dq([50,D.a4n,100,D.a48,200,D.a4x,300,D.a4r,400,D.a3S,500,D.a3R,600,D.a4U,700,D.a4g,800,D.a4X,900,D.a4R],x.m)
D.dp=new B.rD(D.aqp,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aiv=w([8,4],x.t)
D.a9x=new A.pA(D.dp,null,0.4,D.aiv)
D.a9y=new A.pA(C.a7,null,0.5,null)
D.fM=new A.ey(0/0,0/0)
D.aw9=new A.q6(!0,A.bzQ(),44,null)
D.mE=new A.pd(16,null,D.aw9,!0)
D.aw8=new A.q6(!0,A.bzQ(),30,null)
D.mF=new A.pd(16,null,D.aw8,!0)
D.a9A=new A.uT(!1,D.mE,D.mF,D.mE,D.mF)
D.aO_=new A.uT(!0,D.mE,D.mF,D.mE,D.mF)
D.E5=new A.Nu(0,"left")
D.aac=new A.Nu(1,"center")
D.E6=new A.Nu(2,"right")
D.aah=new B.a4(57495,"MaterialIcons",null,!1)
D.xV=new B.a4(58927,"MaterialIcons",null,!1)
D.ab5=new B.a4(59005,"MaterialIcons",null,!0)
D.ab6=new B.a4(59007,"MaterialIcons",null,!0)
D.ab7=new B.a4(59011,"MaterialIcons",null,!1)
D.ac1=new B.a4(62589,"MaterialIcons",null,!1)
D.abl=new B.a4(61349,"MaterialIcons",null,!1)
D.acU=new B.aC(D.abl,20,C.h,null,null)
D.abs=new B.a4(61487,"MaterialIcons",null,!1)
D.acW=new B.aC(D.abs,18,null,null,null)
D.acX=new B.aC(D.xV,18,null,null,null)
D.adj=new B.aC(C.hQ,null,C.h,null,null)
D.adk=new B.aC(C.l9,null,C.q,null,null)
D.adL=new B.aC(C.nV,16,null,null,null)
D.adR=new B.aC(C.y2,16,null,null,null)
D.aas=new B.a4(57912,"MaterialIcons",null,!1)
D.adT=new B.aC(D.aas,null,C.ad,null,null)
D.ac_=new B.a4(62584,"MaterialIcons",null,!1)
D.ae1=new B.aC(D.ac_,16,null,null,null)
D.ae6=new B.aC(D.xV,16,null,null,null)
D.ag8=new A.a72(null)
D.aO4=new A.aKb(0,"horizontal")
D.yf=new A.zf(0,0,0,0,!1)
D.Fj=new A.Oo(0.5)
D.BU=new A.a7f()
D.agc=new A.EK(D.BU,A.bKX(),10,A.bKU(),!0,A.bKW(),A.bKV(),!1,null,null,null)
D.aO6=new A.EK(D.BU,A.bKX(),10,A.bKU(),!0,A.bKW(),A.bKV(),!0,null,null,null)
D.ahz=w([4,3],x.t)
D.aul=new B.aH("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aub=new B.aH("receivables","Forderungen (kurzfristig)")
D.au0=new B.aH("inventory_value","Vorr\xe4te (Warenbestand)")
D.atZ=new B.aH("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.atP=new B.aH("fixed_assets","Anlageverm\xf6gen")
D.atU=new B.aH("current_liabilities","Kurzfristige Verbindlichkeiten")
D.aui=new B.aH("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aua=new B.aH("equity","Eigenkapital")
D.pz=w([D.aul,D.aub,D.au0,D.atZ,D.atP,D.atU,D.aui,D.aua],B.au("B<+(f,f)>"))
D.aO9=w([],x.g)
D.am2=w([],x.O)
D.am3=w([],x.Y)
D.am4=w([],B.au("B<mz>"))
D.am5=w([],B.au("B<mA>"))
D.aOa=w([],x.U)
D.aOb=w([],x.u)
D.am6=w([],x.r)
D.ar_={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TJ={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yU=new B.aj(D.TJ,[0,0,0,0,0,0,0,C.cd],B.au("aj<f,C>"))
D.aqY={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqj=new B.aj(D.aqY,[0,0,0,0],B.au("aj<f,v>"))
D.are={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apG=new B.aj(D.are,[0,0,0,0,null,null,null,null],B.au("aj<f,v?>"))
D.apA=new B.aj(D.ar_,[D.yU,D.yU,D.yU,C.cd,C.cd,C.cd,D.aqj,D.apG],x.R)
D.apT=new B.aj(D.TJ,[0,0,0,0,0,0,0,C.cF],x.R)
D.ar0={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apV=new B.aj(D.ar0,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("aj<f,F>"))
D.aqX={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqk=new B.aj(D.aqX,[0,0,0,0,0,0,0,C.cF],x.R)
D.arp={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aql=new B.aj(D.arp,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("aj<f,f>"))
D.a52=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a5a=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3V=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a4j=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4t=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a5o=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3G=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a4l=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4w=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4S=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqq=new B.dq([50,D.a52,100,D.a5a,200,D.a3V,300,D.a4j,400,D.a4t,500,D.a5o,600,D.a3G,700,D.a4l,800,D.a4w,900,D.a4S],x.m)
D.Tv=new B.rD(D.aqq,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8x=new B.ah(32,32,32,32)
D.asi=new B.ae(D.a8x,C.bK,null)
D.a8z=new B.ah(48,48,48,48)
D.asl=new B.ae(D.a8z,C.bK,null)
D.asq=new B.ae(C.ah,C.bK,null)
D.ami=w([],B.au("B<mU>"))
D.amj=w([],B.au("B<nj>"))
D.Y7=new A.Q9(D.ami,D.amj)
D.av2=new B.fw("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.av3=new B.fw("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.av6=new B.fw("Automaten-Business","Umsatz je Automat",null,null)
D.av8=new B.fw("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ava=new B.fw("Top","Meistverkaufte Produkte",null,null)
D.avd=new B.fw("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ave=new B.fw("Kennzahlen","Rentabilit\xe4t",null,null)
D.YN=new B.te(C.G,C.u,0)
D.aDE=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.axR=new B.e3(D.aDE,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFz=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.axU=new B.e3(D.aFz,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aDR=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.axV=new B.e3(D.aDR,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFt=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.axX=new B.e3(D.aFt,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aEX=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.axY=new B.e3(D.aEX,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aEU=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayg=new B.e3(D.aEU,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aOl=new B.S(!0,C.C,null,null,null,null,14,C.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDO=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aDZ=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aEG=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aEM=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aF0=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aFL=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_2=new A.adX(0,"auto")
D.aGm=new A.adX(1,"top")
D.aKK=new A.wJ("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aKL=new A.wJ("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ce0","bP6",()=>B.iR(new A.bta(),x.D))
w($,"ce1","avQ",()=>B.iR(new A.btb(),x.a))
w($,"cf_","xn",()=>B.byz(new A.bv0(),x.P))
w($,"ce2","bvP",()=>C.aJ.$1$1(new A.btc(),x.d))
w($,"ce_","bP5",()=>C.aJ.$1$1(new A.bt9(),x.X))
w($,"cdZ","bvO",()=>C.aJ.$1$1(new A.bt8(),x.h))
w($,"cdY","bvN",()=>B.b_0(A.c4q(),x.F,x.b))
w($,"c7e","bvq",()=>new A.axx())
v($,"cav","lw",()=>new A.b1G())})()};
(a=>{a["SfO5EiJfvPfdGlbX+CQx+WyE3pg="]=a.current})($__dart_deferred_initializers__);