((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Od(d,e,f,g,h){return new A.a6X(f,g,d,h,e,null)},
a6X:function a6X(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uU:function uU(d){this.a=d},
Ek:function Ek(d){this.a=d},
bU_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.V(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SP
w=x.f
v=x.N
u=x.z
t=A.aFA(B.dh(w.a(e.h(a0,"current")),v,u))
s=A.aFA(B.dh(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFA(B.dh(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bl
p=J.cV(p,new A.aFi(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bl
o=J.cV(o,new A.aFj(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bl
q=J.cV(q,new A.aFk(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.dh(w.a(e.h(a0,"customer")),v,u)
m=B.b3(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p9(n.h(0,"app_gross"))
k=B.b3(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p9(n.h(0,"avg_basket"))
u=B.dh(w.a(e.h(a0,"derived")),v,u)
v=A.p9(u.h(0,"gross_margin_pct"))
e=A.p9(u.h(0,"net_margin_pct"))
w=A.p9(u.h(0,"ebitda_margin_pct"))
j=A.p9(u.h(0,"cashflow_operating"))
i=A.bsE(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsE(u.h(0,"revenue_growth_mom_pct"))
g=A.bsE(u.h(0,"result_growth_yoy_pct"))
u=A.bsE(u.h(0,"result_growth_mom_pct"))
f=B.b3(J.Z(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.og(t,s,r,p,o,q,new A.aAu(m,l,k,n),new A.aBC(v,e,w,j,i,h,g,u),f)},
p9(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fT(J.al(d))
return w==null?0:w},
bsE(d){if(d==null)return null
if(typeof d=="number")return d
return B.fT(J.al(d))},
qp:function qp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vt:function vt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wp:function wp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAu:function aAu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBC:function aBC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
og:function og(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFi:function aFi(){},
aFj:function aFj(){},
aFk:function aFk(){},
aFA(d){var w=J.V(d),v=A.ue(w.h(d,"revenue_net_7")),u=A.ue(w.h(d,"revenue_net_19")),t=A.ue(w.h(d,"revenue_net")),s=A.ue(w.h(d,"expense_net")),r=A.ue(w.h(d,"result_net")),q=A.ue(w.h(d,"vat_collected")),p=A.ue(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.bl
w=J.cV(w,new A.aFB(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.oh(v,u,t,s,r,q,p,w)},
ue(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fT(J.al(d))
return w==null?0:w},
CV:function CV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oh:function oh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFB:function aFB(){},
bTZ(d){return new A.yt(d,new B.iw(x.c_),C.dL)},
btq:function btq(){},
btr:function btr(){},
bvg:function bvg(){},
bts:function bts(){},
btp:function btp(){},
bto:function bto(){},
yt:function yt(d,e,f){this.r=d
this.a=e
this.f=f},
aFh:function aFh(d,e,f){this.a=d
this.b=e
this.c=f},
aFg:function aFg(d,e,f){this.a=d
this.b=e
this.c=f},
bU0(){return new A.yu(null)},
alO(d,e,f,g,h){return new A.alN(e,h,g,f,d,null)},
yu:function yu(d){this.a=d},
aFz:function aFz(d){this.a=d},
aFr:function aFr(d,e,f){this.a=d
this.b=e
this.c=f},
aFs:function aFs(d,e,f){this.a=d
this.b=e
this.c=f},
aFt:function aFt(d){this.a=d},
aFq:function aFq(){},
aFu:function aFu(d){this.a=d},
aFv:function aFv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFy:function aFy(){},
aFx:function aFx(){},
aFw:function aFw(){},
aFp:function aFp(d,e){this.a=d
this.b=e},
aFn:function aFn(d){this.a=d},
aFo:function aFo(d){this.a=d},
agx:function agx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alN:function alN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ao3:function ao3(d,e){this.e=d
this.a=e},
biG:function biG(d){this.a=d},
biH:function biH(d){this.a=d},
biI:function biI(d,e,f){this.a=d
this.b=e
this.c=f},
biF:function biF(){},
IR:function IR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jh:function Jh(d,e){this.c=d
this.a=e},
boB:function boB(d){this.a=d},
agv:function agv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I_:function I_(d,e){this.c=d
this.a=e},
bAm(d,e,f,g,h){var w=null
return B.hi(w,w,!0,w,new A.bsz(h,g,e,f),d,w,!0,!0,x.H)},
jP(d,e,f,g,h,i,j,k,l,m,n){return new A.amn(g,n,i,e,d,m,f,k,l,j,null)},
av9(d,e){return A.c3y(d,e)},
c3y(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$av9=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.b2(D.azF)
t=4
o=e.aD(0,$.bL(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hx("finance-balance-sync",B.z(n,n)),$async$av9)
case 7:r=g
q=B.dh(x.f.a(r.a),x.N,n)
l.WZ()
if(J.d(J.Z(q,"configured"),!1)){l.b2(D.azJ)
w=1
break}if(J.d(J.Z(q,"ok"),!0)){o=$.bwd()
if(e.e==null)B.T(B.a0(y.b))
e.gcv().cs(o)
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.Z(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}else{o=J.Z(q,"error")
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.WZ()
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$av9,v)},
avc(d,e,f){var w=0,v=B.q(x.H)
var $async$avc=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.hi(null,null,!0,null,new A.bsx(f,e,e.aD(0,$.bL(),x.A)),d,null,!0,!0,x.H),$async$avc)
case 2:return B.o(null,v)}})
return B.p($async$avc,v)},
a6Y:function a6Y(d){this.a=d},
aKz:function aKz(){},
aKy:function aKy(){},
aKx:function aKx(){},
Ij:function Ij(d,e){this.c=d
this.a=e},
bfZ:function bfZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfO:function bfO(){},
bfP:function bfP(){},
bfQ:function bfQ(){},
bfR:function bfR(){},
bfS:function bfS(){},
bfT:function bfT(){},
bfU:function bfU(){},
bfV:function bfV(){},
bfW:function bfW(d){this.a=d},
bfX:function bfX(d){this.a=d},
bfY:function bfY(d){this.a=d},
bg_:function bg_(d,e){this.a=d
this.b=e},
bg0:function bg0(d,e){this.a=d
this.b=e},
bsz:function bsz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsy:function bsy(d){this.a=d},
al6:function al6(d){this.a=d},
amn:function amn(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bg1:function bg1(d,e){this.a=d
this.b=e},
UG:function UG(d,e,f){this.c=d
this.d=e
this.a=f},
Ye:function Ye(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bo7:function bo7(){},
bo8:function bo8(){},
bo9:function bo9(d){this.a=d},
TU:function TU(d,e,f){this.c=d
this.d=e
this.a=f},
b61:function b61(){},
b63:function b63(d){this.a=d},
b64:function b64(d){this.a=d},
b62:function b62(){},
U4:function U4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6S:function b6S(){},
b6T:function b6T(){},
b6U:function b6U(){},
b6V:function b6V(d){this.a=d},
amR:function amR(d,e){this.c=d
this.a=e},
bgw:function bgw(){},
bgx:function bgx(){},
aj8:function aj8(d,e){this.c=d
this.a=e},
Cm:function Cm(d,e,f){this.c=d
this.d=e
this.a=f},
asC:function asC(d,e){this.c=d
this.a=e},
bpS:function bpS(){},
bpT:function bpT(){},
wJ:function wJ(d,e){this.c=d
this.a=e},
ahq:function ahq(d,e){this.e=d
this.a=e},
b4x:function b4x(){},
b4w:function b4w(){},
b4v:function b4v(d,e,f){this.a=d
this.b=e
this.c=f},
b4p:function b4p(d,e){this.a=d
this.b=e},
b4q:function b4q(d,e){this.a=d
this.b=e},
b4y:function b4y(d){this.a=d},
b4z:function b4z(d){this.a=d},
b4r:function b4r(){},
b4s:function b4s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4t:function b4t(d,e){this.a=d
this.b=e},
b4u:function b4u(d,e,f){this.a=d
this.b=e
this.c=f},
bsx:function bsx(d,e,f){this.a=d
this.b=e
this.c=f},
bsw:function bsw(d){this.a=d},
Bn:function Bn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tx:function Tx(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4j:function b4j(){},
b4k:function b4k(d){this.a=d},
b4l:function b4l(d){this.a=d},
b4n:function b4n(d,e){this.a=d
this.b=e},
b4m:function b4m(d,e){this.a=d
this.b=e},
b4o:function b4o(d){this.a=d},
bk:function bk(){},
bDR(d){return new A.KQ(d,C.av,C.dC,null,null)},
KQ:function KQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ty:function Ty(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eN$=f
_.cu$=g
_.c=_.a=null},
b4A:function b4A(d,e){this.a=d
this.b=e},
b4B:function b4B(d){this.a=d},
axN(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alH:f,p=a0==null?16:a0,o=d==null?D.a_T:d,n=g==null,m=n?A.bwK(r,r,r,r,r,r,r,r):g,l=a3==null?D.XA:a3
n=n?A.bwK(r,r,r,r,r,r,r,r):g
w=j==null?D.DY:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.o_(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BO,s,w,i,n)},
axU(d,e,f,g,h){var w=d==null?D.alI:d,v=e==null?2:e,u=g==null?C.lA:g
return new A.fK(h,f===!0,w,v,u)},
bRg(d,e,f){var w=d.a
w=C.d.aO(w+(e.a-w)*f)
return A.axU(A.kz(d.c,e.c,f,A.c4l(),x.fj),B.ae(d.d,e.d,f),!1,A.kz(d.e,e.e,f,A.a_s(),x.S),w)},
a0Y(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SY
else w=h
v=m==null
u=v?8:m
t=$.lC()
s=t.aXV(f,v?8:m)
t=t.aXW(g,v?8:m)
v=d==null?A.bDP(r,r,r,r,r):d
return new A.it(q,l,w,j,u,s,e,t,v,k==null?D.alJ:k)},
bRh(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ae(d.e,e.e,f),q=B.mL(d.f,e.f,f),p=A.kz(d.r,e.r,f,A.a_s(),x.S),o=B.bX(d.w,e.w,f),n=B.ae(d.a,e.a,f),m=B.ae(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ae(w.b,v.b,f)
t=B.ae(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0Y(A.bDP(v,u,null,!1,t),p,q,o,s,n,null,A.kz(d.y,e.y,f,A.c4m(),x.G),m,r)},
bRi(d,e,f){var w,v,u=B.ae(d.a,e.a,f)
u.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mJ(u,w,v,B.bX(d.d,e.d,f))},
bDP(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0U(g===!0,v,u,w,f)},
bwK(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1_(4,C.hX,16,D.xI,0,120,A.c4o(),!1,!1,D.Zz,0,C.L,A.c4n())
else w=k
v=j==null?C.l1:j
return new A.a0Z(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c58(d,e,f,g){var w=null,v=B.ja(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dc(C.d.j(f.b),v)},
c57(d){return A.azT(D.dp,15)},
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
axM:function axM(d,e){this.a=d
this.b=e},
fK:function fK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axV:function axV(){},
axW:function axW(){},
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
mJ:function mJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0U:function a0U(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0Z:function a0Z(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ae0:function ae0(d,e){this.a=d
this.b=e},
a1_:function a1_(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KR:function KR(d){this.a=d},
a10:function a10(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xE:function xE(d,e){this.a=d
this.b=e},
ahm:function ahm(){},
aht:function aht(){},
ahu:function ahu(){},
ahw:function ahw(){},
ahx:function ahx(){},
ahy:function ahy(){},
ahz:function ahz(){},
ahA:function ahA(){},
ahB:function ahB(){},
axX:function axX(d){this.a=d},
axY:function axY(){},
uy:function uy(d,e,f){this.a=d
this.b=e
this.c=f},
ahv:function ahv(){},
axZ:function axZ(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ay_:function ay_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay0:function ay0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6_:function a6_(d){this.b=d},
a0X:function a0X(d,e,f){this.d=d
this.e=e
this.a=f},
ab8:function ab8(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.d1=f
_.fX=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bC=_.aG=_.ak=_.ar=$
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
c59(d,e){var w=null
return new A.Rw(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
axF(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ae(w.c,v.c,f)
u.toString
return new A.pk(t,e.b,new A.qf(v.a,v.b,u,B.ae(w.d,v.d,f)),!0)},
bFd(d,e,f){var w=A.axF(d.b,e.b,f),v=A.axF(d.d,e.d,f),u=A.axF(d.e,e.e,f)
return new A.uW(e.a,w,A.axF(d.c,e.c,f),v,u)},
bU2(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ae(d.a,e.a,f)
w.toString
v=B.ae(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bFb(d,e,f){return new A.yw(e.a,!0,B.ae(d.c,e.c,f),e.d,e.e,e.f,B.ae(d.r,e.r,f),e.w,e.x)},
c7B(d){return!0},
c5c(d){return D.a8S},
bFc(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pH(w,f,g,e)},
bHb(d,e,f){var w,v=A.kz(d.a,e.a,f,A.c4h(),x.dv)
v.toString
w=A.kz(d.b,e.b,f,A.c4j(),x.bN)
w.toString
return new A.Q5(v,w)},
bUO(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.n2(t,w,v,u)},
c_2(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nw(t,w,v,u)},
bUN(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oc(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bUL(B.bwB(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kz(d.d,e.d,f,A.a_s(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c_1(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oc(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.c__(B.bwB(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kz(d.d,e.d,f,A.a_s(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lk(r,e.f,e.r,t,e.x,u,v,w,s)},
bUL(d,e,f,g,h,i){return new A.a6a(f,!1,g,i,d,e)},
bUM(d){return C.d.ae(d.e,1)},
c__(d,e,f,g,h,i){return new A.aeo(f,!1,g,i,d,e)},
c_0(d){return C.d.ae(d.e,1)},
bF7(d,e,f){var w,v=A.kz(d.a,e.a,f,A.c4g(),x.cm)
v.toString
w=A.kz(d.b,e.b,f,A.c4i(),x.es)
w.toString
return new A.MQ(v,w,!0)},
bU1(d,e,f){return new A.MX(d,e==null?4:e,f)},
a0N:function a0N(){},
Db:function Db(d,e){this.a=d
this.b=e},
ty:function ty(d,e){this.r=d
this.w=e},
qf:function qf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acA:function acA(){},
pk:function pk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uW:function uW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB:function eB(d,e){this.a=d
this.b=e},
yw:function yw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pH:function pH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae2:function ae2(){},
Q5:function Q5(d,e){this.a=d
this.b=e},
n2:function n2(d,e,f,g){var _=this
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
lk:function lk(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6a:function a6a(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeo:function aeo(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MQ:function MQ(d,e,f){this.a=d
this.b=e
this.c=f},
uV:function uV(){},
MX:function MX(d,e,f){this.a=d
this.b=e
this.c=f},
ahh:function ahh(){},
ahl:function ahl(){},
akt:function akt(){},
akM:function akM(){},
akN:function akN(){},
akP:function akP(){},
akQ:function akQ(){},
alD:function alD(){},
alC:function alC(){},
alE:function alE(){},
ap9:function ap9(){},
ar1:function ar1(){},
ar2:function ar2(){},
asG:function asG(){},
atl:function atl(){},
atk:function atk(){},
atm:function atm(){},
axB:function axB(){},
KK:function KK(){},
KL:function KL(d,e,f){this.c=d
this.d=e
this.a=f},
axD:function axD(d){this.a=d},
axC:function axC(d){this.a=d},
Rw:function Rw(d,e,f){this.c=d
this.e=e
this.a=f},
Y3:function Y3(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYz(d,e,f){var w=B.af(f),v=w.i("ac<1,jW>")
v=B.Q(new B.ac(f,new A.aZM(),v),v.i("aw.E"))
w=w.i("ac<1,c>")
w=B.Q(new B.ac(f,new A.aZN(),w),w.i("aw.E"))
return new A.acB(e,d,v,w,null)},
bRd(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a6O(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tv(v,C.ad,C.w,new B.kr(1),v,v,v,v,C.bz,v)
u=new A.a0O(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aM(x.g))
u.bk()
return u},
acB:function acB(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZM:function aZM(){},
aZN:function aZN(){},
a0O:function a0O(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.Wi$=h
_.aTG$=i
_.dq$=j
_.ag$=k
_.dR$=l
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
bg7:function bg7(d,e){this.a=d
this.b=e},
axE:function axE(){},
jW:function jW(d,e){this.a=d
this.b=e},
nZ:function nZ(d,e){this.a=d
this.b=e},
ahi:function ahi(){},
ahj:function ahj(){},
ahk:function ahk(){},
Tv:function Tv(){},
AR:function AR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZO:function aZO(d){this.a=d},
aZP:function aZP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZQ:function aZQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5h(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a5g(e!==!1,w)},
a12:function a12(){},
a5g:function a5g(d,e){this.a=d
this.b=e},
N3:function N3(){},
a5i:function a5i(){},
ay9:function ay9(){},
aEx:function aEx(d,e){this.a=d
this.b=e},
ahE:function ahE(){},
akJ:function akJ(){},
akK:function akK(){},
akR:function akR(){},
KU:function KU(){},
vE:function vE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hq:function hq(){},
a5m:function a5m(d){this.a=d},
a5n:function a5n(d){this.a=d},
a5o:function a5o(d){this.a=d},
MZ:function MZ(){},
N_:function N_(){},
a5r:function a5r(d){this.a=d},
N1:function N1(){},
N2:function N2(d){this.a=d},
a5l:function a5l(d){this.a=d},
a5k:function a5k(d){this.a=d},
MY:function MY(d){this.a=d},
a5p:function a5p(d){this.a=d},
a5q:function a5q(d){this.a=d},
N0:function N0(d){this.a=d},
G4:function G4(){},
aUX:function aUX(d){this.a=d},
aUY:function aUY(d){this.a=d},
aUZ:function aUZ(d){this.a=d},
aV_:function aV_(d){this.a=d},
aV0:function aV0(d){this.a=d},
aV1:function aV1(d){this.a=d},
aV2:function aV2(d){this.a=d},
aV3:function aV3(d){this.a=d},
aV4:function aV4(d){this.a=d},
aV5:function aV5(d){this.a=d},
aV6:function aV6(d){this.a=d},
aV7:function aV7(d){this.a=d},
aV8:function aV8(d){this.a=d},
Op:function Op(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VS:function VS(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eN$=g
_.cu$=h
_.c=_.a=null},
bgc:function bgc(d,e){this.a=d
this.b=e},
bga:function bga(d){this.a=d},
bgb:function bgb(d,e){this.a=d
this.b=e},
bg9:function bg9(){},
bgd:function bgd(d){this.a=d},
by_(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pT(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SY:u
else w=g
v=f==null?A.axL(!1,u,0,u,!1,D.vT):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axL(!1,u,0,u,!1,D.vT):d,j,a0,i,s,!1,p)
w.arp(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ae(d.x,e.x,f)
m.toString
w=A.bDQ(d.ay,e.ay,f)
v=A.bDQ(d.ch,e.ch,f)
u=B.ae(d.as,e.as,f)
u.toString
t=e.CW
s=A.kz(d.cy,e.cy,f,A.a_s(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rn(d.w,e.w,f)
p=A.kz(d.a,e.a,f,A.c4f(),x.cw)
p.toString
o=B.bHH(d.db,e.db,f)
o.toString
n=B.ae(d.dy.a,e.dy.a,f)
n.toString
return A.aKK(v,m,w,r,e.z,s,new A.yv(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Oq(n),!1,u,o,!0,e.cx,p)},
axL(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aO(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a0W(h,w,g,i,f,!1)},
bDQ(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rn(v.b,u.b,f),r=B.ae(v.c,u.c,f)
r.toString
r=A.bFc(t,A.kz(v.d,u.d,f,A.a_s(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rn(d.c,e.c,f)
v=B.ae(d.e,e.e,f)
v.toString
return A.axL(!1,s,v,u,e.a,new A.KP(!1,r,w.c,!0))},
bRj(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rn(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aO(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mK(e.a,e.b,w,v)},
c7C(d){return!0},
bA6(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.j0)return A.bAW(w.a,A.bxG(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c1W(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.j0)w=A.bAW(v.a,A.bxG(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.azT(w,40)},
bKc(d,e,f,g,h){var w,v=A.bA6(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.j0)w=A.bAW(u.a,A.bxG(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.azT(w,40)
return new A.MX(v,h==null?4:h,u)},
c7A(d,e){return!0},
c41(d,e){return Math.abs(d.a-e.a)},
c5f(d,e){var w=J.cV(e,new A.btf(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c5b(d,e){return-1/0},
c5a(d,e){return d.a[e].b},
bLp(d){var w=J.cV(d,new A.btc(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bLo(d){return A.azT(D.dp,15)},
pT:function pT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKL:function aKL(){},
Oq:function Oq(d){this.a=d},
a0W:function a0W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mK:function mK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KP:function KP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yv:function yv(d,e,f){this.a=d
this.b=e
this.c=f},
aKA:function aKA(d,e){this.a=d
this.b=e},
a5j:function a5j(){},
EW:function EW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btf:function btf(d){this.a=d},
bte:function bte(d){this.a=d},
a7b:function a7b(){},
btc:function btc(){},
n8:function n8(){},
qn:function qn(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rB:function rB(d,e){this.a=d
this.b=e},
tz:function tz(d,e){this.a=d
this.b=e},
Gw:function Gw(d){this.a=d},
Or:function Or(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ahr:function ahr(){},
ahs:function ahs(){},
ahF:function ahF(){},
akL:function akL(){},
akO:function akO(){},
amu:function amu(){},
amv:function amv(){},
amw:function amw(){},
amy:function amy(){},
amz:function amz(){},
amA:function amA(){},
amB:function amB(){},
ar0:function ar0(){},
asF:function asF(){},
aKM:function aKM(d){this.a=d},
aKN:function aKN(){},
aKO:function aKO(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amx:function amx(){},
aKP:function aKP(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKS:function aKS(){},
aKQ:function aKQ(d,e,f){this.a=d
this.b=e
this.c=f},
aKR:function aKR(d,e,f){this.a=d
this.b=e
this.c=f},
aKT:function aKT(){},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7a:function a7a(d,e,f){this.d=d
this.e=e
this.a=f},
abl:function abl(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.d1=f
_.fX=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bC=_.aG=_.ak=_.ar=$
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
bwJ(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bH(o.length,0,!1,x.i),m=B.af(o),l=new B.ac(o,new A.axO(),m.i("ac<1,F>")).kp(0,new A.axP()),k=e-l,j=new A.axS(k,d,n)
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
new B.j1(o,m.i("j1<1>")).aB(0,new A.axQ(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aB(0,new A.axR(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axO:function axO(){},
axP:function axP(){},
axS:function axS(d,e,f){this.a=d
this.b=e
this.c=f},
axT:function axT(d,e,f){this.a=d
this.b=e
this.c=f},
axQ:function axQ(d,e,f){this.a=d
this.b=e
this.c=f},
axR:function axR(d,e,f){this.a=d
this.b=e
this.c=f},
bxG(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.af(w).i("j1<1>")).aB(0,new A.aHP(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHP:function aHP(d,e){this.a=d
this.b=e},
aB2(d,e){var w,v
if(e!=null){w=B.af(e).i("ac<1,F>")
v=B.Q(new B.ac(e,new A.aB3(),w),w.i("aw.E"))
return A.c53(d,new A.a1C(v,x.C))}else return d},
aB3:function aB3(){},
bZ9(d,e){var w=!0
if(d!==C.fb)if(!(d===C.ad&&e===C.w))w=d===C.iC&&e===C.b_
if(w)return D.Eb
else{w=!0
if(d!==C.iB)if(!(d===C.iC&&e===C.w))w=d===C.ad&&e===C.b_
if(w)return D.Ec
else return D.a9y}},
Nt:function Nt(d,e){this.a=d
this.b=e},
a1r:function a1r(d,e){this.a=d
this.b=e},
zp:function zp(d,e){this.a=d
this.$ti=e},
amI:function amI(){},
c53(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.am(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.af,k,k,h)
for(j=B.MK(d),w=B.b([],x.I),v=new B.MM(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.T(B.fz('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.ML(v,r)
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
l=B.en(B.b([],i),!0,s)
p=new B.Ka(new B.cl(t,p,k,new B.apw([q,o,o+m,!0]),l),C.r,k)
h.push(p)
l=g.f
if(l!=null)p.iC(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1C:function a1C(d,e){this.a=d
this.b=0
this.$ti=e},
b2g:function b2g(){},
bxv(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bRm(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gem(v)===0){v=d.a.a
if(v.gem(v)===0){v=d.b.a
if(v.gem(v)===0){v=d.c.a
v=v.gem(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azT(d,e){var w=1-e/100
return B.aC(d.gfI(d),C.d.aO(d.gNQ()*w),C.d.aO(d.gG8()*w),C.d.aO(d.gKm()*w))},
bFa(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bxw(d){var w=d.a,v=w?A.aZL(d.b):0,u=w?A.aZL(d.c):0,t=w?A.aZL(d.d):0
return new B.aj(v,u,t,w?A.aZL(d.e):0)},
bWt(d){var w
if(d.c===0){d.seY(null)
w=B.c1(d.r)
d.r=B.aC(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gq(0)}},
byl(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.seY(f.mK(0,g))}else{w=e==null?C.F:e
d.r=w.gq(w)
d.seY(null)}},
aZL(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kz(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.l1(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.l1(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6n(d,e,f){return C.d.aO(d+(e-d)*f)},
bAW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.l1(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6X.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.z
r=r?C.m:C.ao
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.cp(t.x,C.m,s,18),C.b2],w))
v.push(B.az(new B.e6(t.c,!1,s),1))
v=B.an(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.Q,B.j(t.d,1,C.ah,s,B.c0(u==null?C.k:u,22,C.N),s,s,s)],w)
return B.bz(r,B.ad(w,C.C,s,C.io,C.h),q,s,C.aj,s,3)}}
A.uU.prototype={
LH(d){return this.aTF(d)},
aTF(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LH=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.er("finance_summary",B.a4(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LH)
case 3:q=f
if(q==null){u=D.apS
w=1
break}if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.as5
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LH,v)},
LG(d){return this.aTE(d)},
aTE(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.er("finance_kpis",B.a4(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LG)
case 3:q=f
if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.apA
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LG,v)},
pF(d){return this.ar6(d)},
ar6(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pF=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hx("sevdesk-sync",B.a4(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$pF)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Z(r,"upserted")=="number"){u=C.d.a0(B.fH(J.Z(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pF,v)},
LC(d){return this.aTv(d)},
aTv(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hx("finance-export-pdf",B.a4(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$LC)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Z(r,"base64")=="string"){u=B.aG(J.Z(r,"base64"))
w=1
break}throw B.e(B.e5("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LC,v)}}
A.Ek.prototype={
G2(d){return this.akd(d)},
akd(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G2=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LH(d),$async$G2)
case 7:q=f
o=A.aFA(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G2,v)},
FY(d){return this.ajZ(d)},
ajZ(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FY=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LG(d),$async$FY)
case 7:q=f
o=A.bU_(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FY,v)},
pF(d){return this.ar7(d)},
ar7(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pF=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pF(d),$async$pF)
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
p=r.HG(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pF,v)},
LB(d){return this.aTu(d)},
aTu(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LB=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LC(d),$async$LB)
case 7:q=f
o=C.iV.cF(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HG(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LB,v)},
HG(d){if(d instanceof B.yq)return d
if(d instanceof B.l9){if(d.b==="42501")return new B.vI(d.a)
return new B.te(d.a)}if(d instanceof B.Nh)return new B.te("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bf("Unerwarteter Fehler: "+B.i(d))},
$iaFm:1}
A.qp.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vt.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wp.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAu.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBC.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.og.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CV.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yt.prototype={
GY(d){return this.ar5(0)},
ar5(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GY=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se8(0,C.dx)
s=t.r
r=s.aD(0,$.xp(),x.P)
p.a=null
w=3
return B.k(B.pj(new A.aFh(p,t,r),x.H),$async$GY)
case 3:t.se8(0,f)
q=t.f
if(q.ghq(q)==null){q=$.bwe()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GY,v)},
LA(){return this.aTt()},
aTt(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LA=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se8(0,C.dx)
s=t.r.aD(0,$.xp(),x.P)
q.a=null
w=3
return B.k(B.pj(new A.aFg(q,t,s),x.H),$async$LA)
case 3:t.se8(0,e)
r=t.f
u=r.ghq(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LA,v)}}
A.yu.prototype={
df(d,e){var w=null,v=e.ao($.xp(),x.P),u=e.ao($.bwe(),x.aN)
return B.ie(B.dF(B.b([new B.fh("Finanzen","Dashboard",new A.agx(e.ao($.bwc(),x.b).giX(),new A.aFr(this,d,e),new A.aFs(this,d,e),new A.aFt(d),new A.aFu(d),new A.aFv(this,d,e,v),w),w),C.aQ,new A.ao3(v,w),C.bK,D.afo,C.bK,B.dz(u,new A.aFw(),new A.aFx(),new A.aFy(),!1,!0,!1,x.d,x.l)],x.p),C.ci,w,C.M,!1),C.m,new A.aFz(e))},
Jw(d,e){return this.aM0(d,e)},
aM0(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jw=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwc()
w=3
return B.k(e.aD(0,s.ghQ(),x.F).GY(0),$async$Jw)
case 3:r=g
if(d.e==null){w=1
break}s=e.aD(0,s,x.b)
s=s.ghq(s)
t=d.O(x.q).f
t.b2(B.c6(null,null,null,null,null,C.n,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jw,v)},
Bq(d,e){return this.axg(d,e)},
axg(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bq=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aD(0,$.bwc().ghQ(),x.F).LA(),$async$Bq)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.b2(D.azL)
w=1
break}t=B.q9(C.r,10)
w=4
return B.k($.bNy().u3(s,"finanzauswertung.pdf",t,null,null,null),$async$Bq)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bq,v)},
Br(d,e,f){return this.aJB(d,e,f)},
aJB(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Br=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.hi(null,null,!0,null,new A.aFp(f,d),d,null,!0,!0,x.cJ),$async$Br)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mH(e.aD(0,$.bL(),x.A))
p=f.a
o=f.b
n=$.dp()
m=n.al(p)
n=n.al(o)
w=8
return B.k(r.w7("finance_period",p,o,B.a4(["period_from",p.dU()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Br)
case 8:if(d.e!=null)d.O(x.q).f.b2(F.mh)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Br,v)}}
A.agx.prototype={
u(d){var w=this,v=null,u=A.alO(C.m,F.fS,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alO(v,D.abk,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alO(v,D.xZ,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alO(C.ak,C.i4,C.ak,s?v:w.e,"PDF-Export")
return B.an(B.b([u,C.b2,t,C.b2,r,C.b2,q,C.b2,A.alO(C.aE,C.fR,C.aE,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.J,0,v,v)}}
A.alN.prototype={
u(d){var w,v=this,u=null,t=B.aR(12),s=B.aR(12),r=B.aR(12),q=v.w
if(q==null)q=C.ao
q=B.cU(q,1)
w=v.r
if(w==null)w=C.k
return B.H7(B.dS(!1,C.a0,!0,t,B.eD(!1,s,!0,B.ba(u,B.cp(v.c,w,u,20),C.t,u,u,new B.b7(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ae,0,u,u,u,u,u,C.bx),u,v.d,u,u)}}
A.ao3.prototype={
df(d,e){var w=null,v=this.e,u=$.dp(),t=x.p
return B.bz(w,B.ad(B.b([D.a8E,C.Q,B.an(B.b([D.abP,C.aT,B.az(B.j(u.al(v.a)+" \u2013 "+u.al(v.b),w,w,w,B.C(C.k,16,C.N),w,w,w),1)],t),C.j,w,C.f,C.h,0,w,w),C.u,B.ll(C.cw,B.b([new A.IR("Monat",new A.biG(e),w,w),new A.IR("Jahr (YTD)",new A.biH(e),w,w),new A.IR("Zeitraum w\xe4hlen \u2026",new A.biI(this,d,e),D.aan,w)],t),C.dI,6,8)],t),C.C,w,C.f,C.h),w,w,C.D,w,3)},
IS(d,e){return this.aIv(d,e)},
aIv(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IS=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aZ(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avt(new A.biF(),d,B.bC(B.aU(t)-5,1,1,0,0,0,0),new B.lK(s.a,s.b,x.bz),B.bC(B.aU(t)+1,1,1,0,0,0,0),C.er),$async$IS)
case 2:r=g
if(r!=null)e.aD(0,$.xp().ghQ(),x.V).wF(0,new E.lP(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IS,v)}}
A.IR.prototype={
u(d){var w=null,v=B.aR(9999),u=B.aR(9999),t=B.aR(9999),s=B.cU(C.ao,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.cp(p,C.k,w,14),C.b2],r))
q.push(B.j(this.c,w,w,w,B.C(C.k,13,C.N),w,w,w))
return B.dS(!1,C.a0,!0,v,B.eD(!1,u,!0,B.ba(w,B.an(q,C.j,w,C.f,C.J,0,w,w),C.t,w,w,new B.b7(w,w,s,t,w,w,C.G),w,w,w,w,C.l0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ae,0,w,w,w,w,w,C.bx)}}
A.Jh.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.j_(new A.boB(this)),C.bK,D.a8I,C.u],r),p=this.c.w
if(p.length===0)q.push(B.bz(s,B.an(B.b([D.acL,C.aF,B.az(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.C(C.q,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.h,0,s,s),C.ae,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agv(t.a,t.b,t.c==="revenue",t.d,s),C.Q],r))}q.push(B.ad(w,C.j,s,C.f,C.h))}return B.ad(q,C.a9,s,C.f,C.h)}}
A.agv.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.ae,s=B.cU(u?C.m:C.ao,1),r=B.aR(4),q=w.c
r=B.ba(C.W,B.j(C.c.a_(q,0,1),v,v,v,B.c0(C.k,14,C.p),v,v,v),C.t,v,v,new B.b7(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ah,v,B.C(C.k,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.az(B.ad(B.b([q,B.j(t,v,v,v,B.C(C.q,12,C.l),v,v,v)],s),C.C,v,C.f,C.h),1)
q=$.d2().al(w.f)
return B.bz(v,B.an(B.b([r,C.aF,t,B.j(q,v,v,v,B.C(u?C.aE:C.k,15,C.N),v,v,v)],s),C.j,v,C.f,C.h,0,v,v),v,v,C.eN,v,3)}}
A.I_.prototype={
u(d){var w=null
return B.bz(C.ak,B.an(B.b([D.ado,C.aF,B.az(B.j(this.c,w,w,w,B.C(C.k,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.h,0,w,w),C.eI,w,C.D,w,3)}}
A.a6Y.prototype={
df(d,e){return B.dz(e.ao($.bQ3(),x.e),new A.aKx(),new A.aKy(),new A.aKz(),!1,!0,!1,x.X,x.l)}}
A.Ij.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.axf,C.u,B.j_(new A.bfZ(v,q,100-t.w.a,w,p)),C.u,new A.al6(u),C.aQ,D.axe,C.u,new A.ahq(t,u),C.aQ,D.ax8,C.u,B.bD(u,!0,u,B.n1(u,B.bz(u,new A.TU(t,220,u),u,u,C.D,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bg_(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.ax1,C.u,B.bD(u,!0,u,B.n1(u,new A.U4(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bg0(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.ax6,C.u,new A.amR(t,u),C.aQ,D.ax2,C.u,new A.aj8(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aQ,D.axa,C.u,new A.asC(t,u)],s))
return B.ad(r,C.a9,u,C.f,C.h)}}
A.al6.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.C(C.q,11,C.l).ek(1.35),w,w,w)}}
A.amn.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cD(m.d,"-")?C.ak:C.aE
else w=C.k
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bg1(m,d):l
r=x.p
q=B.b([B.az(B.j(m.c.toUpperCase(),l,l,l,B.C(C.q,10,C.p).fV(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.hQ,0.8)
n=B.aR(4)
q.push(B.ba(l,B.j("Ziel "+p,l,l,l,B.C(C.ak,9,C.p),l,l,l),C.t,l,l,new B.b7(l,l,o,n,l,l,C.G),l,l,l,l,C.ns,l,l,l))}q=B.b([B.an(q,C.j,l,C.f,C.h,0,l,l),C.b6,B.bxu(C.dw,B.j(m.d,l,l,l,B.c0(w,22,C.p),l,l,l),C.mM)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ah,l,B.C(C.q,10,C.aI),l,l,l))
q.push(C.cX)
q.push(B.an(B.b([new A.UG("Vormonat",m.r,l),C.cE,new A.UG("Vorjahr",m.f,l)],r),C.j,l,C.f,C.h,0,l,l))
q.push(C.cX)
q.push(B.az(new A.Ye(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.n1(l,B.bz(l,B.ad(q,C.C,l,C.f,C.h),l,l,C.dD,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.UG.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aR(4)
return B.ba(r,B.j(this.c+" \u2014",r,r,r,B.C(C.q,9,C.p),r,r,r),C.t,r,r,new B.b7(C.ao,r,r,q,r,r,C.G),r,r,r,r,C.ns,r,r,r)}w=q>=0
v=w?C.aE:C.ak
u=v.fl(0.12)
t=B.cU(v,0.7)
s=B.aR(4)
return B.ba(r,B.an(B.b([B.cp(w?F.a9C:D.a9B,v,r,10),F.azn,B.j(this.c+" "+C.d.ae(q,1)+" %",r,r,r,B.C(v,9,C.p),r,r,r)],x.p),C.j,r,C.f,C.J,0,r,r),C.t,r,r,new B.b7(u,r,t,s,r,r,C.G),r,r,r,r,C.ns,r,r,r)}}
A.Ye.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ar
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.kp(j,new A.bo7())
t=C.b.kp(j,new A.bo8())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bo9(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5h(k,!1)
w=B.b([A.aKK(k,2,A.axL(!1,C.m.fl(0.16),0,k,!0,D.vT),C.m,0.35,k,D.E1,k,!0,!1,!0,!1,D.Fy,!1,10,D.Yh,!0,C.lA,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Op(A.by_(k,k,k,D.alK,l,D.BO,D.DY,D.E2,w,D.aft,k,m,k,n,D.XA,D.alL,D.a8V),C.av,C.ai,k,k)}}
A.TU.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMM
w=C.b.fA(p,0,new A.b61())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axU(B.b([A.a0Y(q,q,D.Bd,q,C.m,q,q,q,r.b,6),A.a0Y(q,q,D.Bd,q,C.k,q,q,q,r.c,6)],t),2,q,q,s))}return B.ce(A.bDR(A.axN(q,q,u,q,q,A.a5h(q,!1),q,new A.yw(!0,!0,q,new A.b62(),A.a_m(),!1,q,A.ave(),A.a_m()),q,v,q,q,new A.uW(!0,new A.pk(16,q,new A.qf(!0,new A.b63(this),46,q),!0),D.kv,D.kv,new A.pk(16,q,new A.qf(!0,new A.b64(p),26,q),!0)))),this.d,q)},
aLh(d){if(Math.abs(d)>=1000)return C.d.ae(d/1000,1)+" k"
return C.d.ae(d,0)}}
A.U4.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ac(v,new A.b6S(),w),x.i)
C.b.K(o,new B.ac(u,new A.b6T(),w))
t=C.b.fA(o,0,new A.b6U())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axU(B.b([A.a0Y(q,q,q,q,C.m,q,q,q,v[s],14),A.a0Y(q,q,q,q,C.aE,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ce(A.bDR(A.axN(q,q,n,q,q,A.a5h(q,!1),q,D.E2,q,o,q,q,new A.uW(!0,D.kv,D.kv,D.kv,new A.pk(16,q,new A.qf(!0,new A.b6V(p),26,q),!0)))),this.d,q)
return this.e?r:B.bz(q,r,q,q,C.D,q,3)}}
A.amR.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aML
w=new B.ac(k,new A.bgw(),B.af(k).i("ac<1,F>")).kp(0,new A.bgx())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.j(r.b,m,m,m,new B.O(!0,C.k,m,l,C.bw,m,14,C.p,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.d2()
o=p.al(r.f)
q=B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.O(!0,C.q,m,l,C.bw,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h)
o=r.d
p=p.al(o)
n=new B.aV(4,4)
o=B.b([new B.iB(C.ay,C.f,C.h,C.j,m,C.bA,m,0,B.b([new B.kQ(1,C.dW,q,m),C.aT,B.j(p,m,m,m,new B.O(!0,C.k,m,"Bricolage Grotesque",C.bw,m,16,C.p,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cX,new B.DB(new B.d7(n,n,n,n),C.bM,B.Os(C.ao,8,C.d.bS(o/w,0,1),D.B2),m)],v)
q=C.b.gaf(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_q(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.u)
C.b.K(u,o)}return B.bz(m,B.ad(u,C.j,m,C.f,C.h),m,m,C.D,m,3)}}
A.aj8.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.az(new A.Cm("Aktive Kunden",""+s,u),1)
w=B.az(new A.Cm("K\xe4ufe",""+t.a,u),1)
v=$.d2()
return B.bz(u,B.an(B.b([s,w,B.az(new A.Cm("\xd8-Warenkorb",v.al(t.d),u),1),B.az(new A.Cm("Umsatz/Kunde",v.al(r),u),1)],x.p),C.j,u,C.f,C.h,0,u,u),u,u,C.D,u,3)}}
A.Cm.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.C(C.q,10,C.p).fV(0.6),w,w,w),C.bV,B.j(this.d,w,w,w,B.c0(C.k,20,C.p),w,w,w)],x.p),C.C,w,C.f,C.J)}}
A.asC.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ac(m,new A.bpS(),B.af(m).i("ac<1,F>")).kp(0,new A.bpT()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.j(u.b,1,C.ah,o,new B.O(!0,C.k,o,n,C.bw,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.j(""+u.c+"\xd7 ",o,o,o,new B.O(!0,C.q,o,n,C.bw,o,12,C.N,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.d2().al(r)
p=new B.aV(4,4)
r=B.b([new B.iB(C.ay,C.f,C.h,C.j,o,C.bA,o,0,B.b([new B.kQ(1,C.dW,t,o),s,B.j(q,o,o,o,new B.O(!0,C.k,o,n,C.bw,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b6,new B.DB(new B.d7(p,p,p,p),C.bM,B.Os(C.ao,6,C.d.bS(r/l,0,1),D.B2),o)],k)
t=C.b.gaf(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_q(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.Q)
C.b.K(j,r)}return B.bz(o,B.ad(j,C.j,o,C.f,C.h),o,o,C.D,o,3)}}
A.wJ.prototype={
u(d){var w=null
return B.bz(w,B.j(this.c,w,w,w,B.C(C.q,13,C.l),w,w,w),C.ae,w,C.D,w,3)}}
A.ahq.prototype={
df(d,e){return B.dz(e.ao($.bwd(),x.fM),new A.b4v(this,d,e),new A.b4w(),new A.b4x(),!1,!0,!1,x.h,x.l)}}
A.Bn.prototype={
W(){return new A.Tx()},
aYB(){return this.d.$0()}}
A.Tx.prototype={
av(){var w,v,u,t,s,r,q=this
q.aL()
q.d=new B.aZ(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.Z(w,"as_of"))!=null){w.toString
u=B.eQ(J.al(J.Z(w,"as_of")))
q.d=u==null?q.d:u}u=B.z(x.N,x.bP)
for(t=0;t<8;++t){s=D.px[t].a
if(v)r=""
else{r=B.b3(J.Z(w,s))
if(r==null)r=null
r=C.d.ae(r==null?0:r,2)
r=B.ax(r,".",",")}u.m(0,s,new B.bv(new B.cx(r,C.bb,C.aG),$.ag()))}q.e!==$&&B.b1()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.cd(v,v.r,v.e,B.l(v).i("cd<2>"))
while(v.t()){w=v.d
w.R$=$.ag()
w.S$=0}this.ap()},
rs(d){var w=this.e
w===$&&B.a()
w=C.c.aK(w.h(0,d).a.a)
w=B.ax(w,".","")
w=B.fT(B.ax(w,",","."))
return w==null?0:w},
a4a(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.px[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ae(u,2)
s=B.ax(s,".",",")
t.lM(0,t.a.y5(C.aG,C.bb,s))}}this.J(new A.b4j())},
aF9(){this.a4a(D.apU)
this.c.O(x.q).f.b2(D.aA6)},
I7(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I7=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b2(a1)
for(e=0;e<8;++e)a2.E(0,D.px[e].a)
q=a2
t=4
w=7
return B.k($.aFa.cc().zo(B.b(["csv","txt"],x.s),C.xL,!0),$async$I7)
case 7:p=a5
a2=p
o=a2==null?null:J.K6(a2.a).c
if(o==null){w=1
break}n=C.aB.adA(0,o,!0)
m=B.z(a1,x.i)
for(a1=C.BT.cF(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.aw_(l,B.bP("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.aK(J.Z(k,0)).toLowerCase()
i=J.CQ(q,j)?j:D.as6.h(0,j)
if(i==null)continue
d=C.c.aK(C.b.n3(J.bQM(k,1)))
d=B.ax(d,"\u20ac","")
d=B.ax(d," ","")
d=B.ax(d,".","")
h=B.ax(d,",",".")
g=B.fT(h)
if(g!=null)J.fr(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.b2(D.azI)
w=1
break}r.a4a(m)
r.c.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I7,v)},
Ij(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ij=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4k(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b05("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.dU(),0,10),"p_cash_and_bank",q.rs("cash_and_bank"),"p_receivables",q.rs("receivables"),"p_inventory_value",q.rs("inventory_value"),"p_other_current_assets",q.rs("other_current_assets"),"p_fixed_assets",q.rs("fixed_assets"),"p_current_liabilities",q.rs("current_liabilities"),"p_long_term_liabilities",q.rs("long_term_liabilities"),"p_equity",q.rs("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ij)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYB()
o=q.c
o.toString
B.b4(o,!1).fc()
q.c.O(x.q).f.b2(D.azM)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4l(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ij,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.c0(C.k,18,C.p),r,r,r),p=s.f?r:new A.b4n(s,d),o=s.d
o===$&&B.a()
p=B.fR(D.ac6,B.j("Stichtag: "+C.c.a_(o.dU(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.az(B.fR(D.adc,D.aFT,o?r:s.gaE3(),r),1)
v=x.p
w=B.b([p,C.Q,B.an(B.b([w,C.aT,B.az(B.fR(D.ad1,D.aFG,o?r:s.gaF8(),r),1)],v),C.j,r,C.f,C.h,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.px[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dH(r,C.aw,!1,r,!0,C.n,r,B.dO(),o.h(0,p.a),r,r,r,r,r,2,new B.c_(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,C.ez,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ad,r,C.X,r,r,r,r),C.Q],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.C(C.q,11,C.l),r,r,r))
p=B.ce(B.ev(B.ad(w,C.a9,r,C.f,C.J),r,r,r,C.M),r,380)
o=s.f
w=B.d9(C.c_,r,r,o?r:new A.b4o(d),r,r)
o=o?r:s.gaER()
t=B.dK(C.m,C.z,r,r,r,r,r)
return B.is(B.b([w,B.dk(s.f?F.YO:C.dt,o,t)],v),C.z,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_q(this.gbD(),e.gbD())
else w=!0
return w},
gA(d){return(B.e8(B.K(this))^B.bLW(this.gbD()))>>>0},
j(d){B.bF5()
return B.K(this).j(0)}}
A.KQ.prototype={
W(){return new A.Ty(B.z(x.S,x.J),new A.axX(B.z(x.x,x.gF)),null,null)}}
A.Ty.prototype={
u(d){var w,v=this,u=v.a24(),t=v.CW
t.toString
t=v.a25(t.aw(0,v.gh3().gq(0)))
w=v.a25(u)
v.a.toString
return new A.KL(new A.a0X(t,w,null),u,null)},
a25(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axU(s.c,s.d,!1,r,s.a))}return d.aQu(w)},
a24(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UR(t.ch)
if(r)s=w.a
r=t.y
t=t.aRq(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQv(A.bwK(!1,!0,!0,v.d,v.c,u.gasH(),v.f,v.e))}return t},
asI(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gag4()||e==null||e.a==null){w=v.cy
v.J(w.gaPS(w))
return}v.J(new A.b4A(v,e))},
m2(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a24(),new A.b4B(w)))}}
A.o_.prototype={
Vs(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axN(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRq(d,e){return this.Vs(null,null,d,e)},
aQv(d){return this.Vs(null,d,null,null)},
aQu(d){return this.Vs(d,null,null,null)},
Xr(d,e,f){var w,v,u,t=A.kz(d.ch,e.ch,f,A.c4k(),x.dB),s=B.ae(d.CW,e.CW,f),r=A.bFd(d.d,e.d,f),q=A.bHb(d.e,e.e,f),p=A.bFb(d.c,e.c,f),o=e.a
o=A.a5h(B.a1e(d.a.b,o.b,f),o.a)
w=B.ae(d.y,e.y,f)
v=B.ae(d.x,e.x,f)
u=B.ae(d.z,e.z,f)
r=A.axN(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bF7(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axM.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fK.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ac(v,new A.axV(),B.af(v).i("ac<1,F>")).kp(0,new A.axW())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.it.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mJ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0U.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0Z.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ae0.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1_.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dc.prototype={
gbD(){return[this.a,this.b,C.cF,C.w,null]}}
A.KR.prototype={}
A.a10.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xE.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xr(v,w,d)}}
A.ahm.prototype={}
A.aht.prototype={}
A.ahu.prototype={}
A.ahw.prototype={}
A.ahx.prototype={}
A.ahy.prototype={}
A.ahz.prototype={}
A.ahA.prototype={}
A.ahB.prototype={}
A.axX.prototype={
UR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uy(0,0,!1)
v=new A.zp(d,x.x)
u=this.a
if(u.aE(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uy(t,u,!0)}w=null
try{w=C.b.qm(d,new A.axY())}catch(s){return new A.uy(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uy(q,r,!1)
u.m(0,v,j)
return j}}
A.uy.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahv.prototype={}
A.axZ.prototype={
ia(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0c(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acz(t,A.bwJ(w,t.a),u)
l.y=u
l.aSM(e,u,f)
l.amb(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSV(d,e,m,t,r,s,n,o,f)}}},
acz(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e5("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.af(p).i("j1<1>")).aB(0,new A.ay_(t,q,r,s))
w.push(new A.a6_(q))}return w},
aSM(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aV(m,m)
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
if(a1!==a2){if(a1>a2){a3=b2.dG(Math.max(t,a2),b4,b7)
a4=B.Q1(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.Q1(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gq(0)
k.seY(null)
a6=b2.f.e1()
v.drawRRect(B.mE(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dG(f,b4,b7)
e=a8.b
b0=b2.dG(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.bc(v.save())
v.clipRect(B.dP(b1),$.nP()[1],!0)
a6=b2.f.e1()
v.drawRRect(B.mE(a4),a6)
a6.delete()
v.restore()
b2.aST(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gem(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.am()
k=B.b([],s)
k.push(new B.hk(a4))
n=A.aB2(new B.cl(n.r,C.af,null,null,k),o.r)
a6=b2.r.e1()
k=n.e
v.drawPath((k==null?n.e=new B.mO(n.gju().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSV(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B4(a5,a5,a5,a5,B.dj(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lC().a_d(a8,a7.b),a7.a),C.cF,C.w,a5,b6.c,C.bz)
w.agn(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbT(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dG(s,a6,b6)
q=b4.a
p=a4.dG(q,a6,b6)
o=b1.b
n=u+o.gey()
m=v+4+(o.gd3(0)+o.gd6(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aIu)j=v===D.Zz&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_e(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.FT(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lC().Kw(new B.I(v,t),d).b
s=$.lC()
q=w.b
p=q.c
q=q.a.c
a0=s.Kw(new B.I(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiz()
a1=b1.Q
if(!a1.k(0,C.L)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.W5(d,new A.ay0(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aST(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gem(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aV(i.z,i.Q):C.a3
s=w?new B.aV(i.x,i.y):C.a3
r=w?C.a3:new B.aV(i.e,i.f)
w=w?C.a3:new B.aV(i.r,i.w)
q=B.Q1(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a3:new B.aV(i.z,i.Q)
p=v?C.a3:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a3
q=B.Q1(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a3)}else q=B.byH(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eT(q,n.r)},
WJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acz(b2,A.bwJ(a8,b2.a),a8.ch)
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
break}++a3}return new A.a10(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a6_.prototype={}
A.a0X.prototype={
bl(d){var w,v=this.e,u=B.bx(d,null,x.w).w.gcP(),t=new A.axZ()
t.a1n()
$.am()
w=B.aY()
w.b=C.bd
t.f=w
w=B.aY()
w.b=C.aY
t.r=w
w=B.aY()
w.b=C.bd
w.r=C.x.gq(0)
t.w=w
w=B.aY()
w.b=C.aY
w.r=C.F.gq(0)
w.c=1
t.x=w
t=new A.ab8(this.d,v,u,t,d,C.br,new B.bs(),B.aM(x.g))
t.bk()
t.Z4(v.cy)
t.afy()
return t},
by(d,e){e.sil(0,this.d)
e.sYP(this.e)
e.scP(B.bx(d,null,x.w).w.gcP())
e.B=d
e.be()}}
A.ab8.prototype={
sil(d,e){if(this.aC.k(0,e))return
this.aC=e
this.be()},
sYP(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0X(d.cy)
w.be()},
scP(d){if(this.d1.k(0,d))return
this.d1=d
this.be()},
aR(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1r(t,v),new A.vE(u.aC,u.i4,u.d1,x.Q))
s.restore()},
a_6(d){var w=this,v=w.gC(0)
return new A.KR(w.fX.WJ(d,v,new A.vE(w.aC,w.i4,w.d1,x.Q)))}}
A.a0N.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Db.prototype={
L(){return"AxisSide."+this.b}}
A.ty.prototype={}
A.qf.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acA.prototype={
gbD(){return[!1,0,0,0]}}
A.pk.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uW.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eB.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eB))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.yw.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pH.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ae2.prototype={
gbD(){return[this.a,this.b]}}
A.Q5.prototype={
gbD(){return[this.a,this.b]}}
A.n2.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nw.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lk.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6a.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeo.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MQ.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uV.prototype={}
A.MX.prototype={
ae_(d,e,f){var w,v
$.am()
w=B.aY()
v=this.a
w.r=v.gq(v)
w.b=C.bd
d.iR(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahh.prototype={}
A.ahl.prototype={}
A.akt.prototype={}
A.akM.prototype={}
A.akN.prototype={}
A.akP.prototype={}
A.akQ.prototype={}
A.alD.prototype={}
A.alC.prototype={}
A.alE.prototype={}
A.ap9.prototype={}
A.ar1.prototype={}
A.ar2.prototype={}
A.asG.prototype={}
A.atl.prototype={}
A.atk.prototype={}
A.atm.prototype={}
A.axB.prototype={
MF(d,e,f,g,h,i){return new B.iq(this.aWB(d,e,f,g,h,i),x.g4)},
aWA(d,e,f,g){return this.MF(d,e,f,!0,g,!0)},
aWB(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MF(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lC().ajL(s,u,v,w)
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
A.KK.prototype={
a1n(){var w,v=this
$.am()
w=B.aY()
w.b=C.aY
v.a=w
w=B.aY()
w.b=C.bd
v.b=w
w=B.aY()
w.b=C.bd
v.e=w
w=B.aY()
w.b=C.aY
v.c=w
v.d=B.aY()},
ia(d,e,f){var w=this
w.a0d(d,e,f)
w.aSI(e,f)
w.aSS(e,f)
w.aSR(e,f)},
aSR(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lC().OI(w.a,a1.r-a1.f)
u=$.bvK().MF(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.la(n,m)
if(j!=null){p.r=C.E.gq(0)
p.seY(j.mK(0,i))}else{if(k==null)k=C.F
p.r=k.gq(k)
p.seY(a0)}k=l.c
p.c=k
if(k===0){p.seY(a0)
k=B.c1(p.r)
p.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}a3.DH(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lC().OI(w.b,a1.y-a1.x)
u=$.bvK().MF(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fj(u.a(),u.$ti.i("fj<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.la(n,m)
if(k!=null){q.r=C.E.gq(0)
q.seY(k.mK(0,i))}else{if(p==null)p=C.F
q.r=p.gq(p)
q.seY(a0)}p=f.c
q.c=p
if(p===0){q.seY(a0)
p=B.c1(q.r)
q.r=B.aC(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gq(0)}a3.DH(n,m,d.a,f.d)}},
aSI(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hb(new B.H(0,0,0+w.a,0+w.b),this.b)},
aSS(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.G)(k),++u){t=k[u]
s=B.la(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.seY(p.mK(0,s))}else{r.r=(q==null?C.F:q).gq(0)
r.seY(null)}o=n.e.e1()
w.drawRect(B.dP(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.G)(l),++u){t=l[u]
s=B.la(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gq(0)
v.seY(q.mK(0,s))}else{v.r=(r==null?C.F:r).gq(0)
v.seY(null)}o=n.e.e1()
j.drawRect(B.dP(s),o)
o.delete()}},
aSQ(d,e,f){var w,v
this.a0d(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ae0(d,e,f,w)
if(v.b.length!==0)this.aSX(d,e,f,w)},
ae0(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.la(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seY(j.mK(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c1(n.r)
n.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
e.DH(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=C.d.an(o,n.gbT(n).eI(0,2))
J.bc(r.save())
r.translate(h,g)
n=n.gNA().b
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
s.ae1(0,n,new B.r(h,o),k)}}},
aSX(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=d.fd(o,a3,a2)
m=new B.r(n,0)
o=d.fd(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.la(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seY(j.mK(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.seY(null)}k=p.c
n.c=k
if(k===0){n.seY(null)
k=B.c1(n.r)
n.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
a1.DH(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eI(0,2)
g=n.gbT(n).eI(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.bc(r.save())
r.translate(f,e)
n=n.gNA().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eI(0,2)
g=n.gbT(n).ad(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.ae1(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_e(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KL.prototype={
galx(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galy(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galz(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galv(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alR(d){var w,v=this,u=null,t=v.d,s=A.bxw(t.d),r=t.a
r=r.a&&A.bRm(r.b)?r.b:u
w=B.b([B.ba(u,v.c,C.t,u,u,new B.b7(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.axD(w)
if(v.galx())C.b.hw(w,s.$1(!0),new A.AR(D.B9,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galz())C.b.hw(w,s.$1(!0),new A.AR(D.mI,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galy())C.b.hw(w,s.$1(!0),new A.AR(D.Ba,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galv())C.b.hw(w,s.$1(!0),new A.AR(D.dM,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
u(d){return B.j_(new A.axC(this))}}
A.Rw.prototype={
W(){return new A.Y3(new B.bl(null,x.eF))}}
A.Y3.prototype={
ayi(){switch(this.a.c.a){case 0:return C.eg
case 1:return C.fJ
case 2:return C.dw
case 3:return C.fg}},
ayO(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
ayk(d){this.a.toString
return},
av(){this.aL()
$.cB.x1$.push(this.ga4D())},
bc(d){this.bG(d)
$.cB.x1$.push(this.ga4D())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayO()
return B.SI(B.b1P(0,B.ba(v.ayi(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.r)}}
A.acB.prototype={
bl(d){return A.bRd(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0O.prototype={
hk(d){if(!(d.b instanceof B.hr))d.b=new B.hr(null,null,C.r)},
hX(d){if(this.B===C.ay)return this.ye(d)
return this.adE(d)},
aLs(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9o(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a9n(d,B.hH())
switch(this.B.a){case 0:return d.c2(new B.I(w.a,w.b))
case 1:return d.c2(new B.I(w.b,w.a))}},
a9n(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h3(u,null)
break
case 1:q=B.h3(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9o(p)
t=Math.max(t,o.aLs(p))
m=r.aH$}return new A.bg7(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9n(o,B.mD()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.I(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.I(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.V[u]
r=w.fy
q=s.b-p.a9o(r==null?B.T(B.a0("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c8(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aH$;++u}},
ed(d,e){return this.yf(d,e)},
aR(d,e){if(this.gC(0).gZ(0))return
this.a3.sbg(0,null)
this.ve(d,e)},
l(){this.a3.sbg(0,null)
this.aoN()}}
A.bg7.prototype={}
A.axE.prototype={}
A.jW.prototype={
gbD(){return[this.a,this.b]}}
A.nZ.prototype={}
A.ahi.prototype={}
A.ahj.prototype={
aM(d){var w,v,u
this.fq(d)
w=this.ag$
for(v=x.L;w!=null;){w.aM(d)
u=w.b
u.toString
w=v.a(u).aH$}},
aF(d){var w,v,u
this.fh(0)
w=this.ag$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aH$}}}
A.ahk.prototype={}
A.Tv.prototype={
l(){var w,v,u
for(w=this.Wi$,v=w.length,u=0;u<v;++u)w[u].l()
this.iv()}}
A.AR.prototype={
goF(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dw
case 1:return C.fg
case 2:return C.eg
case 3:return C.fJ}},
gb0h(){var w=this.d,v=A.bxw(w.d),u=A.bFa(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ad(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ad(0,new B.aj(u.a,0,u.c,0))}},
gail(){var w=this.d,v=A.bFa(w.a),u=A.bxw(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gey()+v.gey()}},
aXk(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goF().c.d
if(o==null)o=$.lC().OI(d,f-e)
w=p.c
v=w!==D.mI
if((!v||w===D.dM)&&p.d instanceof A.o_){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bwJ(u,d)
w=new B.j1(t,B.af(t).i("j1<1>"))
s=w.ghZ(w).eQ(0,new A.aZO(u),x.W).fM(0)}else{r=$.bvK()
w=!v||w===D.dM
v=p.d
q=r.aWA(w?v.w:v.z,o,f,e)
v=B.n9(q,new A.aZP(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.af(s).i("ac<1,nZ>")
w=B.Q(new B.ac(s,new A.aZQ(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goF()
w=j.goF()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.ba(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mI
u=!v
t=!u||w===D.dM
s=j.e
r=t?s.a:s.b
t=j.ghJ()
s=!u||w===D.dM?C.M:C.ay
q=B.b([],x.p)
if(w===D.B9||v)j.goF()
if(j.goF().c.a){v=!u||w===D.dM?r:j.goF().c.c
p=!u||w===D.dM?j.goF().c.c:r
o=j.gb0h()
n=!u||w===D.dM?C.ay:C.M
j.gail()
m=j.gail()
l=!u||w===D.dM
k=j.d
l=l?k.f:k.x
u=!u||w===D.dM?k.r:k.y
q.push(B.ba(i,A.bYz(new A.axE(),n,j.aXk(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Ba||w===D.dM)j.goF()
return new B.f_(t,i,i,B.bU3(q,C.j,s,i,C.f,C.J,0,i,i,C.bA),i)}}
A.a12.prototype={
gbD(){return[this.a,this.b]}}
A.a5g.prototype={
gbD(){return[this.a,this.b]}}
A.N3.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5i.prototype={
gabS(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ay9.prototype={}
A.aEx.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahE.prototype={}
A.akJ.prototype={}
A.akK.prototype={}
A.akR.prototype={}
A.KU.prototype={
ia(d,e,f){}}
A.vE.prototype={}
A.hq.prototype={
gdN(){return null},
gag4(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.N2
if(w)return!0
return!(v instanceof A.N_)&&!(v instanceof A.MZ)&&!(v instanceof A.N0)&&!(v instanceof A.MY)&&!w&&!(v instanceof A.N1)}}
A.a5m.prototype={
gdN(){return this.a.b}}
A.a5n.prototype={
gdN(){return this.a.b}}
A.a5o.prototype={
gdN(){return this.a.b}}
A.MZ.prototype={}
A.N_.prototype={}
A.a5r.prototype={
gdN(){return this.a.b}}
A.N1.prototype={}
A.N2.prototype={
gdN(){return this.a.b}}
A.a5l.prototype={
gdN(){return this.a.b}}
A.a5k.prototype={
gdN(){return this.a.b}}
A.MY.prototype={
gdN(){return this.a.b}}
A.a5p.prototype={
gdN(){return this.a.gdN()}}
A.a5q.prototype={
gdN(){return this.a.gdN()}}
A.N0.prototype={
gdN(){return this.a.gdN()}}
A.G4.prototype={
Z4(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afy(){var w=this,v=null,u=w.ak=B.bym(v,v)
u.ay=new A.aUX(w)
u.ch=new A.aUY(w)
u.CW=new A.aUZ(w)
u.cy=new A.aV_(w)
u.cx=new A.aV0(w)
u=w.aG=B.GU(v,-1,v)
u.B=new A.aV1(w)
u.a4=new A.aV2(w)
u.U=new A.aV3(w)
u=w.bC=B.a7j(v,w.a3,v)
u.p3=new A.aV4(w)
u.p4=new A.aV5(w)
u.RG=new A.aV6(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.I(w.b,w.d)},
dD(d){return new B.I(d.b,d.d)},
kJ(d){return!0},
mV(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.oD(d)
w=v.aG
w===$&&B.a()
w.oD(d)
w=v.ak
w===$&&B.a()
w.oD(d)}else if(x.gJ.b(d))v.l9(new A.a5q(d))},
gN7(d){return new A.aV7(this)},
gN9(d){return new A.aV8(this)},
l9(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.a_6(w):null
u.U.$2(d,v)
u.a4=C.br},
gKZ(d){return this.a4},
gFB(){var w=this.ar
w===$&&B.a()
return w},
aM(d){this.fq(d)
this.ar=!0},
aF(d){this.ar=!1
this.fh(0)},
$ijB:1}
A.Op.prototype={
W(){return new A.VS(B.b([],x.r),B.z(x.S,x.J),new A.aKM(B.z(x.y,x.dj)),null,null)}}
A.VS.prototype={
u(d){var w,v=this,u=v.a4F(),t=v.CW
t.toString
t=v.abo(t.aw(0,v.gh3().gq(0)))
w=v.abo(u)
v.a.toString
return new A.KL(new A.a7a(t,w,null),u,null)},
abo(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.af(w).i("ac<1,ec>")
w=B.Q(new B.ac(w,new A.bgc(this,d),v),v.i("aw.E"))
return d.aRn(w,this.cy)},
a4F(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UR(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRC(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aR0(new A.EW(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazD(),t.c,t.d))}return r},
azE(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gag4())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bga(v))
return}v.J(new A.bgb(v,e))},
m2(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4F(),new A.bgd(w)))}}
A.pT.prototype={
Xr(d,e,f){var w,v,u,t,s,r,q=B.ae(d.f,e.f,f),p=B.ae(d.r,e.r,f),o=B.ae(d.w,e.w,f),n=B.ae(d.x,e.x,f),m=B.ae(d.y,e.y,f),l=B.ae(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5h(B.a1e(d.a.b,j.b,f),j.a)
w=A.bF7(d.at,e.at,f)
v=A.bFb(d.c,e.c,f)
u=A.bFd(d.d,e.d,f)
t=A.bHb(d.e,e.e,f)
s=A.kz(d.ch,e.ch,f,A.c6q(),x.cz)
s.toString
r=A.kz(d.CW,e.CW,f,A.c6p(),x.bO)
r.toString
u=A.by_(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vt(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.by_(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRC(d,e,f,g){return this.Vt(null,null,d,e,f,g,null)},
aR0(d){var w=null
return this.Vt(w,d,w,w,w,w,w)},
aRn(d,e){var w=null
return this.Vt(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
arp(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qm(n.a,new A.aKL())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
if(o.k(0,D.fP))continue
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
adi(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKK(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aR7(d){return this.adi(d,null)},
aR9(d){return this.adi(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Oq.prototype={
gbD(){return[this.a]}}
A.a0W.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mK.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KP.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yv.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKA.prototype={
L(){return"LabelDirection."+this.b}}
A.a5j.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EW.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7b.prototype={
gbD(){return[4,C.hX,16,D.xI,0,120,A.c6s(),!1,!1,!1,0,C.L,A.c6r()]}}
A.n8.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qn.prototype={}
A.rB.prototype={
gbD(){return[this.a,this.b,C.cF,C.w,null]}}
A.tz.prototype={
gbD(){return[this.a,this.b]}}
A.Gw.prototype={
gbD(){return[this.a]}}
A.Or.prototype={}
A.zj.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xr(v,w,d)}}
A.ahr.prototype={}
A.ahs.prototype={}
A.ahF.prototype={}
A.akL.prototype={}
A.akO.prototype={}
A.amu.prototype={}
A.amv.prototype={}
A.amw.prototype={}
A.amy.prototype={}
A.amz.prototype={}
A.amA.prototype={}
A.amB.prototype={}
A.ar0.prototype={}
A.asF.prototype={}
A.aKM.prototype={
UR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yg
u=new A.zp(d,x.y)
t=this.a
if(t.aE(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.qm(d,new A.aKN())}catch(p){return D.yg}v=null
try{v=C.b.qm(w.a,new A.aKO())}catch(p){return D.yg}o=v.a
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
if(f<m)m=f}e=new A.zk(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zk.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amx.prototype={}
A.aKP.prototype={
ia(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabS(0)){v=a3.b
u=v.a
v=v.b
$.am()
a3.a.jq(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aY())
a3.aPZ(new B.H(0,0,u,v))}d.a0c(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aSO(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSK(a3,q,a4)
d.aSP(a3,q,a4)
d.ama(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.V(o)
if(n.gp(o)!==p.length)throw B.e(B.e5("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vp(q,i,j,k))}}d.aSW(a3,s,a4)
if(w.gabS(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSU(a2,a3,v,f,new A.Gw(g),a4)}},
aSK(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxv(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.ZG(o,e,u,f)
s=p.ajC(o,e,t,u,f)
r=p.ZI(o,e,t,u,f,!0)
q=p.ajB(o,e,t,u,f)
p.aSN(d,s,p.ZF(o,e,t,u,f,!0),f,e)
p.aSH(d,q,r,f,e)
p.aSL(d,t,e)
p.aSJ(d,t,e,f)}},
aSO(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bxv(a5.a),a8=A.bxv(a6.a)
if(a7.length!==a8.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bS.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.af(n).i("cA<1>")
l=B.Q(new B.cA(n,m),m.i("aw.E"))
k=a2.ZG(a3,a5,o,b2)
j=a2.ZH(a3,a6.aR9(l),l,b2,k)
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
m=a2.dG(h,a3,b2)
e=a2.fd(g,a3,b2)
d=a2.dG(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gq(0)
a0.seY(v.mK(0,new B.H(n,m,e,d)))}else{a0.r=(r?C.F:w).gq(0)
a0.seY(null)}$.am()
a1=new B.mN(C.dy,C.bd,C.e9,C.ey,C.dV).e1()
n=B.dP(new B.H(0,0,t,s))
m=$.bS.b
if(m===$.bS)B.T(B.vn(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e1()
n=j.e
a4.drawPath((n==null?j.e=new B.mO(j.gju().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSP(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZM(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).ae_(s,q,new B.r(p,o))}}},
aSW(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fR(b3,new A.aKS())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.ZM(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.ct()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.rA(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lz(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lz(q.$2(m,k))))
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
b0=B.la(a3,a5)
if(a6!=null){f.r=C.E.gq(0)
f.seY(a6.mK(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gq(a4)
f.seY(null)}a4=a9.c
f.c=a4
if(a4===0){f.seY(null)
a4=B.c1(f.r)
f.r=B.aC(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gq(0)}b2.DH(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.rA(d.a))
f.ae_(t,j,new B.r(h,g))}}},
ZH(d,e,f,g,h){var w=this.ajD(d,e,f,g,h)
return w},
ZG(d,e,f,g){return this.ZH(d,e,f,g,null)},
ajD(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.am().r,C.af,null,null,B.b([],x.v)):a5,f=J.V(a3),e=f.gp(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aq(new B.ff(d,a0))
if(e===1)g.aq(new B.ca(d,a0))}else g.aq(new B.ca(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.r,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
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
s=new B.LR(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iC(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZI(d,e,f,g,h,i){var w=this,v=B.MK(f),u=J.V(g),t=w.fd(u.h(g,u.gp(g)-1).a,d,h),s=d.b
v.aq(new B.ca(t,s))
t=w.fd(u.h(g,0).a,d,h)
v.aq(new B.ca(t,s))
v.aq(new B.ca(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.aq(new B.o3())
return v},
ajC(d,e,f,g,h){return this.ZI(d,e,f,g,h,!1)},
ZF(d,e,f,g,h,i){var w=this,v=B.MK(f),u=J.V(g),t=w.fd(u.h(g,u.gp(g)-1).a,d,h)
v.aq(new B.ca(t,0))
t=w.fd(u.h(g,0).a,d,h)
v.aq(new B.ca(t,0))
v.aq(new B.ca(w.fd(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.aq(new B.o3())
return v},
ajB(d,e,f,g,h){return this.ZF(d,e,f,g,h,!1)},
aSN(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.byl(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.hL(e,r.r)},
aSH(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.byl(s,q.b,q.c,new B.H(v,0,u,t))
d.a.hL(e,r.r)},
aSL(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MM(B.MK(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kc:C.e9
u.e=C.ey
u.r=v.gq(0)
u.seY(null)
u.c=f.x
u.r=v.gq(0)
$.lC()
u.z=new B.zv(C.aK,w.c*0.57735+0.5)
d.a.hL(A.aB2(e,f.cy).e7(w.b),this.f)},
aSJ(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kc:C.e9
q.e=C.ey
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
A.byl(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bWt(t)
d.a.hL(A.aB2(e,f.cy),s.f)},
aSU(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLp(b1),b3=J.V(b2)
if(b3.gp(b2)!==b1.length)throw B.e(B.e5("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lC().a_d(b4,u.b)
s=u.a
r=w.k(0,C.j_)?new B.kr(1):w
q=new B.tv(new B.hW(s,a8,a8,C.br,a8,a8,a8,a8,a8,a8,t),C.cF,C.w,r,a8,a8,a8,a8,C.bz,a8)
q.agn(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.G)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hX.gey()
k=o+(w-1)*4+(C.hX.gd3(0)+C.hX.gd6(0))
j=t-k-16
i=a7.a_e(b3,l,D.xI,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.FT(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLo(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lC().Kw(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lC().Kw(new B.I(t,w),0)
if(!C.L.k(0,C.L)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.W5(0,new A.aKQ(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.G)(b0),++n){q=b0[n]
a5=A.bZ9(q.r,q.w)
A:{if(D.Eb===a5){a6=a3
break A}if(D.Ec===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.W5(0,new A.aKR(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZM(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
WJ(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ak3(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fR(t,new A.aKT())
return t.length===0?null:t},
ak3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hw(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qn(s,f,g,C.b.hv(w,v),v.a,v.b)}else return null}}
A.vp.prototype={}
A.a7a.prototype={
bl(d){var w,v=this.e,u=B.bx(d,null,x.w).w.gcP(),t=new A.aKP()
t.a1n()
$.am()
w=B.aY()
w.b=C.aY
t.f=w
w=B.aY()
w.b=C.bd
t.r=w
w=B.aY()
w.b=C.aY
t.w=w
w=B.aY()
w.b=C.bd
w.r=C.F.gq(0)
w.a=D.a01
t.x=w
w=B.aY()
w.b=C.aY
w.r=C.E.gq(0)
t.y=w
w=B.aY()
w.b=C.bd
w.r=C.x.gq(0)
t.z=w
w=B.aY()
w.b=C.aY
w.r=C.F.gq(0)
w.c=1
t.Q=w
t=new A.abl(this.d,v,u,t,d,C.br,new B.bs(),B.aM(x.g))
t.bk()
t.Z4(v.cx)
t.afy()
return t},
by(d,e){e.sil(0,this.d)
e.sYP(this.e)
e.scP(B.bx(d,null,x.w).w.gcP())
e.B=d
e.be()}}
A.abl.prototype={
sil(d,e){if(this.aC.k(0,e))return
this.aC=e
this.be()},
sYP(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0X(d.cx)
w.be()},
scP(d){if(this.d1.k(0,d))return
this.d1=d
this.be()},
aR(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1r(t,v),new A.vE(u.aC,u.i4,u.d1,x.o))
s.restore()},
a_6(d){var w=this,v=w.gC(0)
return new A.Or(w.fX.WJ(d,v,new A.vE(w.aC,w.i4,w.d1,x.o)))}}
A.Nt.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1r.prototype={
aPZ(d){this.a.a.clipRect(B.dP(d),$.nP()[1],!0)
return null},
ae7(d,e){d.aR(this.a,e)},
W5(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bc(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lC()
s.YN(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DH(d,e,f,g){var w=new B.cl($.am().r,C.af,null,null,B.b([],x.v))
w.aq(new B.ff(d.a,d.b))
w.aq(new B.ca(e.a,e.b))
this.a.hL(A.aB2(w,g),f)}}
A.zp.prototype={
gbD(){return[this.a]}}
A.amI.prototype={}
A.a1C.prototype={}
A.b2g.prototype={
Kw(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXV(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aV(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aV(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aV(v,v)
s=d.d
return new B.d7(w,u,t,s.a>v||s.b>v?new B.aV(v,v):s)},
aXW(d,e){var w,v
if(d==null)return D.a0c
w=d.b
v=e/2
return d.aRc(w>v?v:w)},
OI(d,e){var w,v=Math.max(C.d.cE(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b02(w)},
b02(d){if(d<1)return this.aJX(d)
return this.a8r(d)},
aJX(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8r(d*q)/q},
a8r(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aO(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajT(d){if(d>=1)return 1
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
a_d(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.j6
w=e.a?u.w.c3(e):e
v=B.bN(d,C.vq)
v=v==null?null:v.ay
return v===!0?w.c3(C.mo):w},
ajL(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qp)","A(eB)","~(u,fK)","F(ec,u)","R<~>()","F(F,qp)","bV(F,ty)","pH(F)","u(qn,qn)","Ij(og)","I_(D,bJ)","Jh(oh)","vt(@)","wp(@)","ec(F)","CV(@)","ab(F,ty)","uU(dl<uU>)","Ek(dl<aFm>)","F(vt)","F(wp)","wJ(D,bJ)","Bn(y)","~()","qp(@)","~(hq,KR?)","xE(@)","F(it)","A(fK)","~(u,it)","~(@)","jW(nZ)","c(nZ)","jW(bt<u,F>)","jW(F)","nZ(jW)","~(hq,Or?)","ec(ec)","lP(GI<lP>)","zj(@)","R<oh>(ck<oh>)","tz(u)","uV(eB,F,ec,u)","rB(n8)","A(ec)","u(vp,vp)","F(fK)","R<og>(ck<og>)","u(u,u,F)","fK(fK,fK,F)","it(it,it,F)","mJ(mJ,mJ,F)","Dc?(fK,u,it,u)","E(fK)","c(F,ty)","eB(eB,eB,F)","A(F)","n2(n2,n2,F)","nw(nw,nw,F)","kW(kW,kW,F)","lk(lk,lk,F)","f(kW)","f(lk)","ec(ec,ec,F)","mK(mK,mK,F)","uV(eB,F,ec,u{size:F?})","A(eB,ec)","F(r,r)","v<tz>(ec,v<u>)","y6(y)","v<rB>(v<n8>)","E(n8)","yt(f3<D?>)"])
A.aFi.prototype={
$1(d){var w=B.dh(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qp(J.al(v==null?"":v),A.p9(w.h(0,"revenue_net")),A.p9(w.h(0,"expense_net")),A.p9(w.h(0,"result_net")))},
$S:z+24}
A.aFj.prototype={
$1(d){var w,v,u,t=B.dh(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.p9(t.h(0,"gross"))
u=B.b3(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vt(s,r,w,v,u,A.p9(t.h(0,"avg_basket")))},
$S:z+12}
A.aFk.prototype={
$1(d){var w,v=B.dh(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.b3(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wp(u,t,w,A.p9(v.h(0,"gross")))},
$S:z+13}
A.aFB.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.V(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CV(v,u,J.al(t==null?"expense":t),A.ue(w.h(d,"net")),A.ue(w.h(d,"tax")),A.ue(w.h(d,"gross")))},
$S:z+15}
A.btq.prototype={
$1(d){return new A.uU(d.ao($.bL(),x.A))},
$S:z+17}
A.btr.prototype={
$1(d){return new A.Ek(d.ao($.bQ4(),x.D))},
$S:z+18}
A.bvg.prototype={
$1(d){return E.aFl()},
$S:z+38}
A.bts.prototype={
$1(d){var w=d.ao($.xp(),x.P)
return d.ao($.avR(),x.a).G2(w)},
$S:z+40}
A.btp.prototype={
$1(d){var w=d.ao($.xp(),x.P)
return d.ao($.avR(),x.a).FY(w)},
$S:z+47}
A.bto.prototype={
$1(d){return this.ajq(d)},
ajq(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.bL(),x.A).h_("finance_balance_kpis",t),$async$$1)
case 3:s=r.dh(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:240}
A.aFh.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aD(0,$.avR(),x.a).pF(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFg.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aD(0,$.avR(),x.a).LB(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFz.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwe()
if(s.e==null)B.T(B.a0(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFr.prototype={
$0(){return this.a.Jw(this.b,this.c)},
$S:0}
A.aFs.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
A.aFt.prototype={
$0(){var w=x.z
return B.b4(this.a,!1).ep(B.eF(new A.aFq(),null,w),w)},
$S:0}
A.aFq.prototype={
$1(d){return F.D7},
$S:z+69}
A.aFu.prototype={
$0(){return B.om(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFv.prototype={
$0(){var w=this
return w.a.Br(w.b,w.c,w.d)},
$S:0}
A.aFy.prototype={
$0(){return F.Tk},
$S:135}
A.aFx.prototype={
$2(d,e){return new A.I_(B.i(d),null)},
$S:z+10}
A.aFw.prototype={
$1(d){return new A.Jh(d,null)},
$S:z+11}
A.aFp.prototype={
$1(d){var w=null,v=this.a,u=$.dp()
v=B.j("Die Finanzauswertung f\xfcr "+u.al(v.a)+" \u2013 "+u.al(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.is(B.b([B.d9(C.c_,w,w,new A.aFn(u),w,w),B.dk(F.mp,new A.aFo(u),B.dK(C.m,C.z,w,w,w,w,w))],x.p),w,v,F.mq)},
$S:44}
A.aFn.prototype={
$0(){B.b4(this.a,!1).cC(!1)
return null},
$S:0}
A.aFo.prototype={
$0(){B.b4(this.a,!1).cC(!0)
return null},
$S:0}
A.biG.prototype={
$0(){var w=this.a.aD(0,$.xp().ghQ(),x.V),v=E.aFl()
w.wF(0,v)
return v},
$S:0}
A.biH.prototype={
$0(){var w=this.a.aD(0,$.xp().ghQ(),x.V),v=new B.aZ(Date.now(),0,!1),u=new E.lP(B.bC(B.aU(v),1,1,0,0,0,0),v)
w.wF(0,u)
return u},
$S:0}
A.biI.prototype={
$0(){return this.a.IS(this.b,this.c)},
$S:0}
A.biF.prototype={
$2(d,e){return new B.oQ(B.W(d).aQy(B.W(d).ax.aRs(C.k,C.m)),e,null)},
$S:1013}
A.boB.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.d2(),s=A.Od(!1,C.nZ,"Umsatz 7 %",t.al(u.a),w),r=A.Od(!1,C.nZ,"Umsatz 19 %",t.al(u.b),w),q=A.Od(!0,D.aam,"Umsatz netto",t.al(u.c),w),p=A.Od(!1,D.aal,"Aufwand",t.al(u.d),w),o=u.e,n=t.al(o)
return B.a5Z(1.7,B.b([s,r,q,p,A.Od(!0,C.xW,"Ergebnis",n,o<0?C.ak:C.aE),A.Od(!1,C.fR,"USt-Saldo",t.al(u.f-u.r),w)],x.p),v,12,12,C.jU,!0)},
$S:104}
A.aKz.prototype={
$0(){return D.au9},
$S:135}
A.aKy.prototype={
$2(d,e){var w=null
return B.bz(C.ak,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.C(C.k,13,C.l),w,w,w),C.eI,w,C.D,w,3)},
$S:290}
A.aKx.prototype={
$1(d){return new A.Ij(d,null)},
$S:z+9}
A.bfZ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.d2(),i=j.al(k.c),h=l.w,g=l.d,f=B.af(g).i("ac<1,F>"),e=f.i("aw.E"),d=B.Q(new B.ac(g,new A.bfO(),f),e)
i=A.jP(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.al(r.b)
w=B.Q(new B.ac(g,new A.bfP(),f),e)
d=A.jP(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.al(k.e)
w=B.Q(new B.ac(g,new A.bfQ(),f),e)
k=A.jP(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ae(h.b,1)
v=B.Q(new B.ac(g,new A.bfR(),f),e)
w=A.jP(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ae(h.a,1)
u=B.Q(new B.ac(g,new A.bfS(),f),e)
v=A.jP(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ae(r.c,1)
t=B.Q(new B.ac(g,new A.bfT(),f),e)
u=A.jP(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ae(h.c,1)
s=B.Q(new B.ac(g,new A.bfU(),f),e)
t=A.jP(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.al(h.d)
s=B.Q(new B.ac(g,new A.bfV(),f),e)
h=A.jP(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.al(l.r.d)
m=B.Q(new B.ac(g,new A.bfW(m),f),e)
m=A.jP(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.al(l)
l=B.Q(new B.ac(g,new A.bfX(l),f),e)
l=A.jP(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ae(j,1)
j=B.Q(new B.ac(g,new A.bfY(j),f),e)
return B.a5Z(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jP(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jU,!0)},
$S:104}
A.bfO.prototype={
$1(d){return d.b},
$S:z+0}
A.bfP.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfQ.prototype={
$1(d){return d.d},
$S:z+0}
A.bfR.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfS.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfT.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfU.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfV.prototype={
$1(d){return d.d},
$S:z+0}
A.bfW.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfX.prototype={
$1(d){return this.a},
$S:z+0}
A.bfY.prototype={
$1(d){return this.a},
$S:z+0}
A.bg_.prototype={
$0(){return A.bAm(this.b,1.45,new A.TU(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bg0.prototype={
$0(){return A.bAm(this.b,1.6,new A.U4(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsz.prototype={
$1(d){var w=this,v=null,u=B.aR(16),t=x.p,s=B.b([B.an(B.b([B.az(B.j(w.a,v,v,v,B.c0(C.k,18,C.p),v,v,v),1),B.fO(v,v,D.ad4,v,v,new A.bsy(d),v,v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.h,0,v,v)],t)
C.b.K(s,B.b([B.j(w.b,v,v,v,B.C(C.q,12,C.aI),v,v,v),C.Q],t))
s.push(C.u)
s.push(B.ce(new B.mI(w.c,w.d,v),v,17976931348623157e292))
return B.a4w(v,C.z,new B.ah(C.aj,B.ad(s,C.C,v,C.f,C.J),v),v,v,v,C.fs,C.uP,v,new B.dc(u,C.L),v)},
$S:1014}
A.bsy.prototype={
$0(){return B.b4(this.a,!1).fc()},
$S:0}
A.bg1.prototype={
$0(){var w=this.a,v=B.ax(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAm(this.b,2.4,new A.Ye(w.w,w.y,w.z,null),C.b.cg(u," \xb7 "),v)
return null},
$S:0}
A.bo7.prototype={
$2(d,e){return d<e?d:e},
$S:47}
A.bo8.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.bo9.prototype={
$1(d){return A.aKK(null,1.4,null,C.ak,0.35,D.agZ,D.E1,null,!1,!1,!1,!1,D.Fy,!1,10,D.Yh,!0,C.lA,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+14}
A.b61.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b63.prototype={
$2(d,e){var w=null
return B.j(this.a.aLh(d),w,w,w,B.C(C.q,10,C.N),w,w,w)},
$S:z+16}
A.b64.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.A8
return new B.ah(C.hW,B.j(C.c.cQ(this.a[v].a,5),w,w,w,B.C(C.q,9,C.N),w,w,w),w)},
$S:z+6}
A.b62.prototype={
$1(d){return D.a8T},
$S:z+7}
A.b6S.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6T.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6U.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.b6V.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.A8
return new B.ah(C.hW,B.j(this.a[v],w,w,w,B.C(C.k,12,C.p),w,w,w),w)},
$S:z+6}
A.bgw.prototype={
$1(d){return d.d},
$S:z+19}
A.bgx.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.bpS.prototype={
$1(d){return d.d},
$S:z+20}
A.bpT.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.b4x.prototype={
$0(){return D.aug},
$S:135}
A.b4w.prototype={
$2(d,e){return new A.wJ("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b4v.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bz(m,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.C(C.k,14,C.N),m,m,m),C.Q,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.C(C.q,12.5,C.l),m,m,m),C.u,B.ll(C.cw,B.b([B.fR(C.F0,D.aHV,new A.b4p(w,v),m),B.fR(D.ac7,D.aGI,new A.b4q(w,v),m)],u),C.dI,8,8)],u),C.C,m,C.f,C.h),C.ae,m,C.D,m,3)}w=new A.b4y(d)
t=C.b.fA(n.a.e.d,0,new A.b4r())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.j_(new A.b4s(new A.b4z(w),r,w,s))
v=J.V(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.Q,B.an(B.b([B.az(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.C(C.q,11,C.l),m,m,m),1),B.nq(D.adi,D.aH6,new A.b4t(q,p),m),B.nq(D.acU,D.aGS,new A.b4u(q,p,d),m)],o),C.j,m,C.f,C.h,0,m,m)],o),C.a9,m,C.f,C.h)},
$S:276}
A.b4p.prototype={
$0(){return A.avc(this.a,this.b,null)},
$S:0}
A.b4q.prototype={
$0(){return A.av9(this.a,this.b)},
$S:0}
A.b4y.prototype={
$1(d){var w=B.b3(J.Z(this.a,d))
return w==null?null:w},
$S:1015}
A.b4z.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ae(v,1)
w=B.ax(w,".",",")+" %"}return w},
$S:35}
A.b4r.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4s.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jP(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i9,o.$1("liquidity1_pct")),m=A.jP(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i9,o.$1("liquidity2_pct")),l=A.jP(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i9,o.$1("liquidity3_pct"))
o=A.jP(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i9,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ae(w,1)
w=B.ax(w,".",",")+" %"}w=A.jP(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i9,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.d2()
v=u.al(v)
return B.a5Z(p,B.b([n,m,l,o,w,A.jP(s,s,!1,"Bilanzsumme",!1,"EK "+u.al(t.d),s,s,s,C.i9,v)],x.p),q,12,12,C.jU,!0)},
$S:104}
A.b4t.prototype={
$0(){return A.av9(this.a,this.b)},
$S:0}
A.b4u.prototype={
$0(){return A.avc(this.a,this.b,this.c)},
$S:0}
A.bsx.prototype={
$1(d){return new A.Bn(this.a,new A.bsw(this.b),this.c,null)},
$S:z+22}
A.bsw.prototype={
$0(){var w=this.a,v=$.bwd()
if(w.e==null)B.T(B.a0(y.b))
w.gcv().cs(v)},
$S:0}
A.b4j.prototype={
$0(){},
$S:0}
A.b4k.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4l.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4n.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.pb(u.b,B.bC(2024,1,1,0,0,0,0),null,r,new B.aZ(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4m(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4m.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4o.prototype={
$0(){return B.b4(this.a,!1).fc()},
$S:0}
A.b4A.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4B.prototype={
$1(d){return new A.xE(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axV.prototype={
$1(d){return d.e},
$S:z+27}
A.axW.prototype={
$2(d,e){return d+e},
$S:47}
A.axY.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ay_.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ay0.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eT(t,r)
s=s.x
s===$&&B.a()
w.eT(t,s)
u.ae7(v.d,v.e)},
$S:0}
A.axD.prototype={
$1(d){return 0},
$S:1016}
A.axC.prototype={
$2(d,e){return B.fo(C.bY,this.a.alR(e),C.n,C.by,null)},
$S:1017}
A.aZM.prototype={
$1(d){return d.a},
$S:z+31}
A.aZN.prototype={
$1(d){return d.b},
$S:z+32}
A.aZO.prototype={
$1(d){return new A.jW(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZP.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mI||v===D.dM))t=1-t
return new A.jW(d,t*w.d)},
$S:z+34}
A.aZQ.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goF(),p=d.a
r.goF()
r=$.lC()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ae(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ae(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ae(v/1000,1)
t="K"}else{u=C.d.ae(v,r.ajT(Math.abs(s.b-s.c)))
t=""}if(C.c.hp(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nZ(d,q.c.b.$2(p,new A.ty(u+t,s.e)))},
$S:z+35}
A.aUX.prototype={
$1(d){this.a.l9(new A.a5m(d))},
$S:200}
A.aUY.prototype={
$1(d){this.a.l9(new A.a5n(d))},
$S:42}
A.aUZ.prototype={
$1(d){this.a.l9(new A.a5o(d))},
$S:27}
A.aV_.prototype={
$0(){this.a.l9(D.a1J)},
$S:0}
A.aV0.prototype={
$1(d){this.a.l9(new A.N_())},
$S:43}
A.aV1.prototype={
$1(d){this.a.l9(new A.a5r(d))},
$S:45}
A.aV2.prototype={
$0(){this.a.l9(D.a1K)},
$S:0}
A.aV3.prototype={
$1(d){this.a.l9(new A.N2(d))},
$S:99}
A.aV4.prototype={
$1(d){this.a.l9(new A.a5l(d))},
$S:202}
A.aV5.prototype={
$1(d){this.a.l9(new A.a5k(d))},
$S:204}
A.aV6.prototype={
$1(d){return this.a.l9(new A.MY(d))},
$S:205}
A.aV7.prototype={
$1(d){return this.a.l9(new A.a5p(d))},
$S:64}
A.aV8.prototype={
$1(d){return this.a.l9(new A.N0(d))},
$S:56}
A.bgc.prototype={
$1(d){var w=this.a.db.h(0,C.b.hv(this.b.ch,d))
return d.aR7(w==null?B.b([],x.t):w)},
$S:z+37}
A.bga.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bgb.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fR(w,new A.bg9())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gw(w))},
$S:0}
A.bg9.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bgd.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKL.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.btf.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFc(t?A.bA6(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tz(w,new A.yv(!0,A.bAX(),new A.bte(v)))},
$S:z+41}
A.bte.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bU1(A.bA6(d,e,f),w,A.c1W(d,e,f))},
$S:z+42}
A.btc.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.ja(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rB(C.d.j(d.b),w)},
$S:z+43}
A.aKN.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKO.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aKS.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aKQ.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eT(v,t)
u=u.Q
u===$&&B.a()
w.eT(v,u)},
$S:0}
A.aKR.prototype={
$0(){this.a.ae7(this.b,this.c)},
$S:0}
A.aKT.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.axO.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axP.prototype={
$2(d,e){return d+e},
$S:47}
A.axS.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.af(v).i("j1<1>")).aB(0,new A.axT(w,this.a/(u+1),this.c))},
$S:0}
A.axT.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axQ.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axR.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHP.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1018}
A.aB3.prototype={
$1(d){return d},
$S:1019};(function aliases(){var w=A.KK.prototype
w.a0c=w.ia
w.ama=w.aSQ
w.amb=w.ae0
w=A.Tv.prototype
w.aoN=w.l
w=A.KU.prototype
w.a0d=w.ia
w=A.G4.prototype
w.a0X=w.Z4})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5v","bTZ",72)
var q
v(q=A.Tx.prototype,"gaF8","aF9",23)
v(q,"gaE3","I7",4)
v(q,"gaER","Ij",4)
u(A.Ty.prototype,"gasH","asI",25)
t(A,"c4k",3,null,["$3"],["bRg"],49,0)
t(A,"c4l",3,null,["$3"],["bRh"],50,0)
t(A,"c4m",3,null,["$3"],["bRi"],51,0)
t(A,"c4o",4,null,["$4"],["c58"],52,0)
w(A,"c4n","c57",53)
s(A,"bAr","c59",54)
t(A,"c4f",3,null,["$3"],["bU2"],55,0)
w(A,"a_m","c7B",56)
w(A,"ave","c5c",7)
t(A,"c4h",3,null,["$3"],["bUO"],57,0)
t(A,"c4j",3,null,["$3"],["c_2"],58,0)
t(A,"c4g",3,null,["$3"],["bUN"],59,0)
t(A,"c4i",3,null,["$3"],["c_1"],60,0)
w(A,"ceZ","bUM",61)
w(A,"cf_","c_0",62)
r(A.Y3.prototype,"ga4D","ayk",30)
u(A.VS.prototype,"gazD","azE",36)
t(A,"c6q",3,null,["$3"],["bVf"],63,0)
t(A,"c6p",3,null,["$3"],["bRj"],64,0)
w(A,"c6t","c7C",1)
t(A,"bLO",4,null,["$5$size","$4"],["bKc",function(d,e,f,g){return A.bKc(d,e,f,g,null)}],65,0)
s(A,"bAX","c7A",66)
s(A,"bLP","c41",67)
s(A,"bLS","c5f",68)
s(A,"bLR","c5b",3)
s(A,"bLQ","c5a",3)
w(A,"c6s","bLp",70)
w(A,"c6r","bLo",71)
t(A,"a_s",3,null,["$3"],["c6n"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.U,[A.a6X,A.agx,A.alN,A.IR,A.Jh,A.agv,A.I_,A.Ij,A.al6,A.amn,A.UG,A.Ye,A.TU,A.U4,A.amR,A.aj8,A.Cm,A.asC,A.wJ,A.KL,A.AR])
u(B.D,[A.uU,A.Ek,A.bk,A.ahE,A.ahu,A.ahw,A.ahx,A.ahm,A.akR,A.ahA,A.ahy,A.ay9,A.asG,A.axX,A.ahv,A.KU,A.a6_,A.ty,A.ar2,A.ar1,A.ahl,A.akQ,A.eB,A.akN,A.akP,A.ap9,A.alE,A.atm,A.akO,A.akt,A.akM,A.axB,A.bg7,A.axE,A.ahi,A.nZ,A.akJ,A.akK,A.vE,A.hq,A.amv,A.amy,A.ahr,A.ahF,A.ahs,A.akL,A.amB,A.amz,A.asF,A.ar0,A.aKM,A.amx,A.vp,A.a1r,A.amI,A.a1C,A.b2g])
u(B.uS,[A.qp,A.vt,A.wp,A.aAu,A.aBC,A.og,A.CV,A.oh])
u(B.o4,[A.aFi,A.aFj,A.aFk,A.aFB,A.btq,A.btr,A.bvg,A.bts,A.btp,A.bto,A.aFq,A.aFw,A.aFp,A.aKx,A.bfO,A.bfP,A.bfQ,A.bfR,A.bfS,A.bfT,A.bfU,A.bfV,A.bfW,A.bfX,A.bfY,A.bsz,A.bo9,A.b62,A.b6S,A.b6T,A.bgw,A.bpS,A.b4v,A.b4y,A.b4z,A.bsx,A.b4B,A.axV,A.axY,A.axD,A.aZM,A.aZN,A.aZO,A.aZP,A.aZQ,A.aUX,A.aUY,A.aUZ,A.aV0,A.aV1,A.aV3,A.aV4,A.aV5,A.aV6,A.aV7,A.aV8,A.bgc,A.bgd,A.aKL,A.btf,A.bte,A.btc,A.aKN,A.aKO,A.axO,A.aB3])
t(A.yt,B.fC)
u(B.xV,[A.aFh,A.aFg,A.aFz,A.aFr,A.aFs,A.aFt,A.aFu,A.aFv,A.aFy,A.aFn,A.aFo,A.biG,A.biH,A.biI,A.aKz,A.bg_,A.bg0,A.bsy,A.bg1,A.b4x,A.b4p,A.b4q,A.b4t,A.b4u,A.bsw,A.b4j,A.b4k,A.b4l,A.b4n,A.b4m,A.b4o,A.b4A,A.ay0,A.aV_,A.aV2,A.bga,A.bgb,A.aKQ,A.aKR,A.axS])
u(B.y2,[A.yu,A.ao3,A.a6Y,A.ahq])
u(B.xW,[A.aFx,A.biF,A.boB,A.aKy,A.bfZ,A.bo7,A.bo8,A.b61,A.b63,A.b64,A.b6U,A.b6V,A.bgx,A.bpT,A.b4w,A.b4r,A.b4s,A.axW,A.ay_,A.axC,A.bg9,A.aKS,A.aKT,A.axP,A.axT,A.axQ,A.axR,A.aHP])
u(B.M,[A.Bn,A.Rw])
u(B.a1,[A.Tx,A.Y3])
u(B.NK,[A.KQ,A.Op])
u(B.us,[A.Ty,A.VS])
t(A.a12,A.ahE)
t(A.ahh,A.a12)
t(A.a0N,A.ahh)
u(A.a0N,[A.aht,A.amw])
t(A.o_,A.aht)
u(B.HZ,[A.axM,A.ae0,A.Db,A.aEx,A.aKA,A.Nt])
t(A.fK,A.ahu)
t(A.it,A.ahw)
t(A.mJ,A.ahx)
t(A.a0U,A.ahm)
t(A.N3,A.akR)
u(A.N3,[A.ahz,A.amA])
t(A.a0Z,A.ahz)
t(A.a1_,A.ahA)
t(A.Dc,A.ahy)
u(A.ay9,[A.KR,A.Or])
t(A.ae2,A.asG)
t(A.ahB,A.ae2)
t(A.a10,A.ahB)
u(B.bb,[A.xE,A.zj])
t(A.uy,A.ahv)
t(A.KK,A.KU)
u(A.KK,[A.axZ,A.aKP])
u(B.Ol,[A.a0X,A.a7a])
u(B.J,[A.G4,A.ahj])
u(A.G4,[A.ab8,A.abl])
t(A.qf,A.ar2)
t(A.acA,A.ar1)
t(A.pk,A.ahl)
t(A.uW,A.akQ)
t(A.yw,A.akN)
t(A.pH,A.akP)
t(A.Q5,A.ap9)
t(A.n2,A.alE)
t(A.nw,A.atm)
u(A.pH,[A.alD,A.atl])
t(A.kW,A.alD)
t(A.lk,A.atl)
t(A.a5j,A.akO)
u(A.a5j,[A.alC,A.atk])
t(A.a6a,A.alC)
t(A.aeo,A.atk)
t(A.MQ,A.akt)
t(A.uV,A.akM)
t(A.MX,A.uV)
t(A.acB,B.h9)
t(A.ahk,A.ahj)
t(A.Tv,A.ahk)
t(A.a0O,A.Tv)
t(A.jW,A.ahi)
t(A.a5g,A.akJ)
t(A.a5i,A.akK)
u(A.hq,[A.a5m,A.a5n,A.a5o,A.MZ,A.N_,A.a5r,A.N1,A.N2,A.a5l,A.a5k,A.MY,A.a5p,A.a5q,A.N0])
t(A.pT,A.amw)
t(A.ec,A.amv)
t(A.Oq,A.amy)
t(A.a0W,A.ahr)
t(A.mK,A.ahF)
t(A.KP,A.ahs)
t(A.yv,A.akL)
t(A.EW,A.amA)
t(A.a7b,A.amB)
t(A.amu,A.eB)
t(A.n8,A.amu)
t(A.qn,A.n8)
t(A.rB,A.amz)
t(A.tz,A.asF)
t(A.Gw,A.ar0)
t(A.zk,A.amx)
t(A.zp,A.amI)
w(A.ahm,A.bk)
w(A.aht,A.bk)
w(A.ahu,A.bk)
w(A.ahw,A.bk)
w(A.ahx,A.bk)
w(A.ahy,A.bk)
w(A.ahz,A.bk)
w(A.ahA,A.bk)
w(A.ahB,A.bk)
w(A.ahv,A.bk)
w(A.ahh,A.bk)
w(A.ahl,A.bk)
w(A.akt,A.bk)
w(A.akM,A.bk)
w(A.akN,A.bk)
w(A.akP,A.bk)
w(A.akQ,A.bk)
w(A.alD,A.bk)
w(A.alC,A.bk)
w(A.alE,A.bk)
w(A.ap9,A.bk)
w(A.ar1,A.bk)
w(A.ar2,A.bk)
w(A.asG,A.bk)
w(A.atl,A.bk)
w(A.atk,A.bk)
w(A.atm,A.bk)
w(A.ahi,A.bk)
v(A.ahj,B.aD)
w(A.ahk,B.e9)
v(A.Tv,B.a4f)
w(A.ahE,A.bk)
w(A.akJ,A.bk)
w(A.akK,A.bk)
w(A.akR,A.bk)
w(A.ahr,A.bk)
w(A.ahs,A.bk)
w(A.ahF,A.bk)
w(A.akL,A.bk)
w(A.akO,A.bk)
w(A.amu,A.bk)
w(A.amv,A.bk)
w(A.amw,A.bk)
w(A.amy,A.bk)
w(A.amz,A.bk)
w(A.amA,A.bk)
w(A.amB,A.bk)
w(A.ar0,A.bk)
w(A.asF,A.bk)
w(A.amx,A.bk)
w(A.amI,A.bk)})()
B.bq5(b.typeUniverse,JSON.parse('{"a6X":{"U":[],"c":[]},"Ek":{"aFm":[]},"yt":{"fC":["be<~>"],"fC.T":"be<~>"},"Jh":{"U":[],"c":[]},"I_":{"U":[],"c":[]},"yu":{"bf":[],"M":[],"c":[]},"agx":{"U":[],"c":[]},"alN":{"U":[],"c":[]},"ao3":{"bf":[],"M":[],"c":[]},"IR":{"U":[],"c":[]},"agv":{"U":[],"c":[]},"Ij":{"U":[],"c":[]},"wJ":{"U":[],"c":[]},"Bn":{"M":[],"c":[]},"a6Y":{"bf":[],"M":[],"c":[]},"al6":{"U":[],"c":[]},"amn":{"U":[],"c":[]},"UG":{"U":[],"c":[]},"Ye":{"U":[],"c":[]},"TU":{"U":[],"c":[]},"U4":{"U":[],"c":[]},"amR":{"U":[],"c":[]},"aj8":{"U":[],"c":[]},"Cm":{"U":[],"c":[]},"asC":{"U":[],"c":[]},"ahq":{"bf":[],"M":[],"c":[]},"Tx":{"a1":["Bn"]},"KQ":{"M":[],"c":[]},"Ty":{"a1":["KQ"]},"o_":{"bk":[]},"fK":{"bk":[]},"it":{"bk":[]},"mJ":{"bk":[]},"Dc":{"bk":[]},"xE":{"bb":["o_"],"b6":["o_"],"b6.T":"o_","bb.T":"o_"},"a0U":{"bk":[]},"a0Z":{"bk":[]},"a1_":{"bk":[]},"a10":{"bk":[]},"uy":{"bk":[]},"a0X":{"aX":[],"c":[]},"ab8":{"J":[],"L":[],"jB":[],"aT":[]},"pH":{"bk":[]},"n2":{"bk":[]},"nw":{"bk":[]},"kW":{"bk":[]},"lk":{"bk":[]},"uV":{"bk":[]},"a0N":{"bk":[]},"qf":{"bk":[]},"acA":{"bk":[]},"pk":{"bk":[]},"uW":{"bk":[]},"yw":{"bk":[]},"ae2":{"bk":[]},"Q5":{"bk":[]},"a6a":{"bk":[]},"aeo":{"bk":[]},"MQ":{"bk":[]},"MX":{"bk":[]},"KL":{"U":[],"c":[]},"Rw":{"M":[],"c":[]},"Y3":{"a1":["Rw"]},"jW":{"bk":[]},"acB":{"h9":[],"aX":[],"c":[]},"a0O":{"e9":["J","hr"],"J":[],"aD":["J","hr"],"L":[],"aT":[],"aD.1":"hr","e9.1":"hr","aD.0":"J"},"AR":{"U":[],"c":[]},"a12":{"bk":[]},"a5g":{"bk":[]},"N3":{"bk":[]},"a5i":{"bk":[]},"a5m":{"hq":[]},"a5n":{"hq":[]},"a5o":{"hq":[]},"MZ":{"hq":[]},"N_":{"hq":[]},"a5r":{"hq":[]},"N1":{"hq":[]},"N2":{"hq":[]},"a5l":{"hq":[]},"a5k":{"hq":[]},"MY":{"hq":[]},"a5p":{"hq":[]},"a5q":{"hq":[]},"N0":{"hq":[]},"G4":{"J":[],"L":[],"jB":[],"aT":[]},"Op":{"M":[],"c":[]},"VS":{"a1":["Op"]},"pT":{"bk":[]},"ec":{"bk":[]},"mK":{"bk":[]},"n8":{"eB":[],"bk":[]},"qn":{"n8":[],"eB":[],"bk":[]},"rB":{"bk":[]},"tz":{"bk":[]},"Gw":{"bk":[]},"zj":{"bb":["pT"],"b6":["pT"],"b6.T":"pT","bb.T":"pT"},"Oq":{"bk":[]},"a0W":{"bk":[]},"KP":{"bk":[]},"yv":{"bk":[]},"a5j":{"bk":[]},"EW":{"bk":[]},"a7b":{"bk":[]},"zk":{"bk":[]},"a7a":{"aX":[],"c":[]},"abl":{"J":[],"L":[],"jB":[],"aT":[]},"zp":{"bk":[]}}'))
B.bJG(b.typeUniverse,JSON.parse('{"KK":1,"N3":1,"KU":1,"G4":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.at
return{_:w("CV"),e:w("be<og>"),aN:w("be<oh>"),fM:w("be<a3<f,@>?>"),b:w("be<~>"),W:w("jW"),B:w("o_"),dB:w("fK"),gF:w("uy"),fj:w("it"),G:w("mJ"),bO:w("mK"),k:w("av"),C:w("a1C<F>"),dO:w("uF"),R:w("a5<f,@>"),g:w("hM"),bz:w("lK<aZ>"),f0:w("o9"),E:w("bk"),F:w("yt"),X:w("og"),P:w("lP"),D:w("uU"),a:w("aFm"),d:w("oh"),cw:w("eB"),L:w("hr"),m:w("dg<u,E>"),cm:w("kW"),dv:w("n2"),M:w("B<nZ>"),I:w("B<bDO>"),O:w("B<fK>"),Y:w("B<it>"),U:w("B<eB>"),K:w("B<a6_>"),u:w("B<ec>"),bC:w("B<vp>"),aA:w("B<v<eB>>"),v:w("B<ee>"),r:w("B<Gw>"),s:w("B<f>"),eg:w("B<tv>"),df:w("B<qn>"),p:w("B<c>"),n:w("B<F>"),t:w("B<u>"),eF:w("bl<a1<M>>"),Z:w("n8"),cz:w("ec"),hf:w("pT"),dj:w("zk"),fT:w("rB"),c_:w("iw<p3<be<~>>>"),x:w("zp<fK>"),y:w("zp<ec>"),J:w("v<u>"),ef:w("vt"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ac<F,F>"),w:w("k8"),aU:w("D"),Q:w("vE<o_>"),o:w("vE<pT>"),dc:w("ee"),eo:w("q5"),gJ:w("q6"),V:w("no<lP>"),N:w("f"),A:w("np"),bP:w("bv"),er:w("tv"),j:w("wp"),dw:w("qn"),bY:w("tz"),cZ:w("qp"),gc:w("io"),es:w("lk"),bN:w("nw"),l:w("c"),q:w("x1"),g4:w("iq<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("u"),bn:w("xE?"),f3:w("zj?"),T:w("v<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("D?"),aD:w("io?"),h6:w("u?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B2=new B.pf(C.m,B.at("pf<E>"))
D.B9=new A.Db(0,"left")
D.mI=new A.Db(1,"top")
D.Ba=new A.Db(2,"right")
D.dM=new A.Db(3,"bottom")
D.ay3=new A.qf(!1,A.bAr(),22,null)
D.kv=new A.pk(16,null,D.ay3,!0)
D.a8U=new A.pH(C.E,null,2,null)
D.vT=new A.KP(!1,D.a8U,A.c6t(),!0)
D.a_T=new A.axM(3,"spaceEvenly")
D.a01=new B.xI(6,"dstIn")
D.Xz=new B.aV(3,3)
D.Bd=new B.d7(D.Xz,D.Xz,C.a3,C.a3)
D.a0c=new B.bm(C.E,0,C.U,-1)
D.BO=new A.a5i()
D.a1J=new A.MZ()
D.a1K=new A.N1()
D.aPD=new A.acA()
D.alV=w([],B.at("B<kW>"))
D.alW=w([],B.at("B<lk>"))
D.DY=new A.MQ(D.alV,D.alW,!0)
D.a8E=new B.e6("Zeitraum",!1,null)
D.a8I=new B.e6("Konten (SKR 03)",!1,null)
D.xI=new A.aEx(0,"center")
D.aPQ=new A.yv(!0,A.bAX(),A.bLO())
D.E1=new A.yv(!1,A.bAX(),A.bLO())
D.E2=new A.yw(!1,!0,null,A.ave(),A.a_m(),!0,null,A.ave(),A.a_m())
D.aPR=new A.yw(!0,!0,null,A.ave(),A.a_m(),!0,null,A.ave(),A.a_m())
D.a44=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3R=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a4e=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a48=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a3A=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a3z=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a4y=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a3Z=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a4D=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a4v=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.asa=new B.dg([50,D.a44,100,D.a3R,200,D.a4e,300,D.a48,400,D.a3A,500,D.a3z,600,D.a4y,700,D.a3Z,800,D.a4D,900,D.a4v],x.m)
D.dp=new B.rI(D.asa,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ai1=w([8,4],x.t)
D.a8S=new A.pH(D.dp,null,0.4,D.ai1)
D.a8T=new A.pH(C.ao,null,0.5,null)
D.fP=new A.eB(0/0,0/0)
D.ay5=new A.qf(!0,A.bAr(),44,null)
D.mJ=new A.pk(16,null,D.ay5,!0)
D.ay4=new A.qf(!0,A.bAr(),30,null)
D.mK=new A.pk(16,null,D.ay4,!0)
D.a8V=new A.uW(!1,D.mJ,D.mK,D.mJ,D.mK)
D.aPS=new A.uW(!0,D.mJ,D.mK,D.mJ,D.mK)
D.Eb=new A.Nt(0,"left")
D.a9y=new A.Nt(1,"center")
D.Ec=new A.Nt(2,"right")
D.a9B=new B.a7(57495,"MaterialIcons",null,!1)
D.xZ=new B.a7(58927,"MaterialIcons",null,!1)
D.aal=new B.a7(59005,"MaterialIcons",null,!0)
D.aam=new B.a7(59007,"MaterialIcons",null,!0)
D.aan=new B.a7(59011,"MaterialIcons",null,!1)
D.abk=new B.a7(62589,"MaterialIcons",null,!1)
D.aaD=new B.a7(61349,"MaterialIcons",null,!1)
D.abP=new B.aH(D.aaD,20,C.k,null,null)
D.aaK=new B.a7(61487,"MaterialIcons",null,!1)
D.ac6=new B.aH(D.aaK,18,null,null,null)
D.ac7=new B.aH(D.xZ,18,null,null,null)
D.acL=new B.aH(C.nS,null,C.q,null,null)
D.acU=new B.aH(C.lh,16,null,null,null)
D.ad1=new B.aH(C.EP,16,null,null,null)
D.ad4=new B.aH(C.i3,null,C.k,null,null)
D.abi=new B.a7(62584,"MaterialIcons",null,!1)
D.adc=new B.aH(D.abi,16,null,null,null)
D.adi=new B.aH(D.xZ,16,null,null,null)
D.ado=new B.aH(F.Em,null,C.ak,null,null)
D.afo=new A.a6Y(null)
D.aPX=new A.aKA(0,"horizontal")
D.yg=new A.zk(0,0,0,0,!1)
D.Fy=new A.Oq(0.5)
D.BU=new A.a7b()
D.aft=new A.EW(D.BU,A.bLS(),10,A.bLP(),!0,A.bLR(),A.bLQ(),!1,null,null,null)
D.aPY=new A.EW(D.BU,A.bLS(),10,A.bLP(),!0,A.bLR(),A.bLQ(),!0,null,null,null)
D.agZ=w([4,3],x.t)
D.awj=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aw9=new B.aI("receivables","Forderungen (kurzfristig)")
D.avZ=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.avX=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avN=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.avS=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.awg=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.aw8=new B.aI("equity","Eigenkapital")
D.px=w([D.awj,D.aw9,D.avZ,D.avX,D.avN,D.avS,D.awg,D.aw8],B.at("B<+(f,f)>"))
D.aQ_=w([],x.M)
D.alH=w([],x.O)
D.alI=w([],x.Y)
D.alJ=w([],B.at("B<mJ>"))
D.alK=w([],B.at("B<mK>"))
D.aQ0=w([],x.U)
D.aQ1=w([],x.u)
D.alL=w([],x.r)
D.asO={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T8={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yV=new B.a5(D.T8,[0,0,0,0,0,0,0,C.bl],B.at("a5<f,D>"))
D.asM={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.as4=new B.a5(D.asM,[0,0,0,0],B.at("a5<f,u>"))
D.at2={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apF=new B.a5(D.at2,[0,0,0,0,null,null,null,null],B.at("a5<f,u?>"))
D.apA=new B.a5(D.asO,[D.yV,D.yV,D.yV,C.bl,C.bl,C.bl,D.as4,D.apF],x.R)
D.apS=new B.a5(D.T8,[0,0,0,0,0,0,0,C.co],x.R)
D.asP={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apU=new B.a5(D.asP,[8500,1200,3400,300,22e3,4200,9000,22200],B.at("a5<f,F>"))
D.asL={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.as5=new B.a5(D.asL,[0,0,0,0,0,0,0,C.co],x.R)
D.ate={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.as6=new B.a5(D.ate,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.at("a5<f,f>"))
D.a4I=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4R=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3D=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a40=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a4a=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a53=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a3o=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a42=new B.E(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a4d=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a4w=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.asb=new B.dg([50,D.a4I,100,D.a4R,200,D.a3D,300,D.a40,400,D.a4a,500,D.a53,600,D.a3o,700,D.a42,800,D.a4d,900,D.a4w],x.m)
D.SY=new B.rI(D.asb,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a82=new B.aj(32,32,32,32)
D.au9=new B.ah(D.a82,C.bF,null)
D.aug=new B.ah(C.aj,C.bF,null)
D.alX=w([],B.at("B<n2>"))
D.alY=w([],B.at("B<nw>"))
D.XA=new A.Q5(D.alX,D.alY)
D.ax1=new B.fh("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ax2=new B.fh("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ax6=new B.fh("Automaten-Business","Umsatz je Automat",null,null)
D.ax8=new B.fh("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.axa=new B.fh("Top","Meistverkaufte Produkte",null,null)
D.axe=new B.fh("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.axf=new B.fh("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yh=new B.tf(C.F,C.r,0)
D.aFx=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.azF=new B.dG(D.aFx,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHI=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azI=new B.dG(D.aHI,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aFJ=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.azJ=new B.dG(D.aFJ,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHC=new B.ab("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azL=new B.dG(D.aHC,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aH2=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azM=new B.dG(D.aH2,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aH_=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aA6=new B.dG(D.aH_,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aQb=new B.O(!0,C.E,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFG=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.aFT=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGI=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGS=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aH6=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.aHV=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zz=new A.ae0(0,"auto")
D.aIu=new A.ae0(1,"top")
D.aML=new A.wJ("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMM=new A.wJ("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfq","bQ4",()=>B.ic(new A.btq(),x.D))
w($,"cfr","avR",()=>B.ic(new A.btr(),x.a))
w($,"cgn","xp",()=>B.bz3(new A.bvg(),x.P))
w($,"cfs","bwe",()=>C.aM.$1$1(new A.bts(),x.d))
w($,"cfp","bQ3",()=>C.aM.$1$1(new A.btp(),x.X))
w($,"cfo","bwd",()=>C.aM.$1$1(new A.bto(),x.h))
w($,"cfn","bwc",()=>B.b_C(A.c5v(),x.F,x.b))
w($,"c8o","bvK",()=>new A.axB())
v($,"cbH","lC",()=>new A.b2g())})()};
(a=>{a["yjv3R9SXcSDBE9DMYsA5f+QNkGo="]=a.current})($__dart_deferred_initializers__);