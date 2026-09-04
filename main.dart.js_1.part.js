((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Od(d,e,f,g,h){return new A.a6Q(f,g,d,h,e,null)},
a6Q:function a6Q(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
v_:function v_(d){this.a=d},
E7:function E7(d){this.a=d},
bUb(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.R(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SE
w=x.f
v=x.N
u=x.z
t=A.aFO(B.cT(w.a(e.h(a0,"current")),v,u))
s=A.aFO(B.cT(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFO(B.cT(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cb
p=J.d2(p,new A.aFw(),x.cZ)
p=B.Q(p,p.$ti.i("ar.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cb
o=J.d2(o,new A.aFx(),x.ef)
o=B.Q(o,o.$ti.i("ar.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cb
q=J.d2(q,new A.aFy(),x.j)
q=B.Q(q,q.$ti.i("ar.E"))
n=B.cT(w.a(e.h(a0,"customer")),v,u)
m=B.bk(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.p5(n.h(0,"app_gross"))
k=B.bk(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.p5(n.h(0,"avg_basket"))
u=B.cT(w.a(e.h(a0,"derived")),v,u)
v=A.p5(u.h(0,"gross_margin_pct"))
e=A.p5(u.h(0,"net_margin_pct"))
w=A.p5(u.h(0,"ebitda_margin_pct"))
j=A.p5(u.h(0,"cashflow_operating"))
i=A.bsR(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsR(u.h(0,"revenue_growth_mom_pct"))
g=A.bsR(u.h(0,"result_growth_yoy_pct"))
u=A.bsR(u.h(0,"result_growth_mom_pct"))
f=B.bk(J.a2(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.oe(t,s,r,p,o,q,new A.aAD(m,l,k,n),new A.aBK(v,e,w,j,i,h,g,u),f)},
p5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
bsR(d){if(d==null)return null
if(typeof d=="number")return d
return B.hx(J.a6(d))},
qr:function qr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vA:function vA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wv:function wv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAD:function aAD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBK:function aBK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oe:function oe(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFw:function aFw(){},
aFx:function aFx(){},
aFy:function aFy(){},
aFO(d){var w=J.R(d),v=A.ud(w.h(d,"revenue_net_7")),u=A.ud(w.h(d,"revenue_net_19")),t=A.ud(w.h(d,"revenue_net")),s=A.ud(w.h(d,"expense_net")),r=A.ud(w.h(d,"result_net")),q=A.ud(w.h(d,"vat_collected")),p=A.ud(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cb
w=J.d2(w,new A.aFP(),x._)
w=B.Q(w,w.$ti.i("ar.E"))
return new A.of(v,u,t,s,r,q,p,w)},
ud(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
CH:function CH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
of:function of(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFP:function aFP(){},
bUa(d){return new A.yv(d,new B.i4(x.c_),C.bS)},
btP:function btP(){},
btQ:function btQ(){},
bvD:function bvD(){},
btR:function btR(){},
btO:function btO(){},
btN:function btN(){},
yv:function yv(d,e,f){this.r=d
this.a=e
this.f=f},
aFv:function aFv(d,e,f){this.a=d
this.b=e
this.c=f},
aFu:function aFu(d,e,f){this.a=d
this.b=e
this.c=f},
bUc(){return new A.yw(null)},
alA(d,e,f,g,h){return new A.alz(e,h,g,f,d,null)},
yw:function yw(d){this.a=d},
aFN:function aFN(d){this.a=d},
aFF:function aFF(d,e,f){this.a=d
this.b=e
this.c=f},
aFG:function aFG(d,e,f){this.a=d
this.b=e
this.c=f},
aFH:function aFH(d){this.a=d},
aFE:function aFE(){},
aFI:function aFI(d){this.a=d},
aFJ:function aFJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFM:function aFM(){},
aFL:function aFL(){},
aFK:function aFK(){},
aFD:function aFD(d,e){this.a=d
this.b=e},
aFB:function aFB(d){this.a=d},
aFC:function aFC(d){this.a=d},
ago:function ago(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alz:function alz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anU:function anU(d,e){this.e=d
this.a=e},
biq:function biq(d){this.a=d},
bir:function bir(d){this.a=d},
bis:function bis(d,e,f){this.a=d
this.b=e
this.c=f},
bip:function bip(){},
IU:function IU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jn:function Jn(d,e){this.c=d
this.a=e},
boL:function boL(d){this.a=d},
agm:function agm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I_:function I_(d,e){this.c=d
this.a=e},
bAE(d,e,f,g,h){var w=null
return B.fK(w,w,!0,w,new A.bsM(h,g,e,f),d,w,!0,!0,x.H)},
jQ(d,e,f,g,h,i,j,k,l,m,n){return new A.ama(g,n,i,e,d,m,f,k,l,j,null)},
auY(d,e){return A.c3E(d,e)},
c3E(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auY=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aR(D.aza)
t=4
o=e.ar(0,$.bX(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hi("finance-balance-sync",B.A(n,n)),$async$auY)
case 7:r=g
q=B.cT(x.f.a(r.a),x.N,n)
l.Xf()
if(J.d(J.a2(q,"configured"),!1)){l.aR(D.aze)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bwx()
if(e.e==null)B.P(B.T(y.b))
e.gc5().bA(o)
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Xf()
l.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auY,v)},
av0(d,e,f){var w=0,v=B.q(x.H)
var $async$av0=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.fK(null,null,!0,null,new A.bsK(f,e,e.ar(0,$.bX(),x.A)),d,null,!0,!0,x.H),$async$av0)
case 2:return B.o(null,v)}})
return B.p($async$av0,v)},
a6R:function a6R(d){this.a=d},
aKH:function aKH(){},
aKG:function aKG(){},
aKF:function aKF(){},
Ik:function Ik(d,e){this.c=d
this.a=e},
bfF:function bfF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfu:function bfu(){},
bfv:function bfv(){},
bfw:function bfw(){},
bfx:function bfx(){},
bfy:function bfy(){},
bfz:function bfz(){},
bfA:function bfA(){},
bfB:function bfB(){},
bfC:function bfC(d){this.a=d},
bfD:function bfD(d){this.a=d},
bfE:function bfE(d){this.a=d},
bfG:function bfG(d,e){this.a=d
this.b=e},
bfH:function bfH(d,e){this.a=d
this.b=e},
bsM:function bsM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsL:function bsL(d){this.a=d},
akT:function akT(d){this.a=d},
ama:function ama(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfI:function bfI(d,e){this.a=d
this.b=e},
UE:function UE(d,e,f){this.c=d
this.d=e
this.a=f},
Yc:function Yc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnU:function bnU(){},
bnV:function bnV(){},
bnW:function bnW(d){this.a=d},
TR:function TR(d,e,f){this.c=d
this.d=e
this.a=f},
b6j:function b6j(){},
b6l:function b6l(d){this.a=d},
b6m:function b6m(d){this.a=d},
b6k:function b6k(){},
U2:function U2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b79:function b79(){},
b7a:function b7a(){},
b7b:function b7b(){},
b7c:function b7c(d){this.a=d},
amG:function amG(d,e){this.c=d
this.a=e},
bgg:function bgg(){},
bgh:function bgh(){},
aiY:function aiY(d,e){this.c=d
this.a=e},
C7:function C7(d,e,f){this.c=d
this.d=e
this.a=f},
asr:function asr(d,e){this.c=d
this.a=e},
bq7:function bq7(){},
bq8:function bq8(){},
wO:function wO(d,e){this.c=d
this.a=e},
ahe:function ahe(d,e){this.e=d
this.a=e},
b4I:function b4I(){},
b4H:function b4H(){},
b4G:function b4G(d,e,f){this.a=d
this.b=e
this.c=f},
b4A:function b4A(d,e){this.a=d
this.b=e},
b4B:function b4B(d,e){this.a=d
this.b=e},
b4J:function b4J(d){this.a=d},
b4K:function b4K(d){this.a=d},
b4C:function b4C(){},
b4D:function b4D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4E:function b4E(d,e){this.a=d
this.b=e},
b4F:function b4F(d,e,f){this.a=d
this.b=e
this.c=f},
bsK:function bsK(d,e,f){this.a=d
this.b=e
this.c=f},
bsJ:function bsJ(d){this.a=d},
B8:function B8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tu:function Tu(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4u:function b4u(){},
b4v:function b4v(d){this.a=d},
b4w:function b4w(d){this.a=d},
b4y:function b4y(d,e){this.a=d
this.b=e},
b4x:function b4x(d,e){this.a=d
this.b=e},
b4z:function b4z(d){this.a=d},
bh:function bh(){},
bE3(d){return new A.KV(d,C.az,C.dA,null,null)},
KV:function KV(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tv:function Tv(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fA$=f
_.cW$=g
_.c=_.a=null},
b4L:function b4L(d,e){this.a=d
this.b=e},
b4M:function b4M(d){this.a=d},
axR(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alk:f,p=a0==null?16:a0,o=d==null?D.a_o:d,n=g==null,m=n?A.bx2(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xn:a3
n=n?A.bx2(r,r,r,r,r,r,r,r):g
w=j==null?D.DK:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.nY(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BG,s,w,i,n)},
axY(d,e,f,g,h){var w=d==null?D.all:d,v=e==null?2:e,u=g==null?C.lu:g
return new A.fL(h,f===!0,w,v,u)},
bRt(d,e,f){var w=d.a
w=C.d.aV(w+(e.a-w)*f)
return A.axY(A.kA(d.c,e.c,f,A.c4r(),x.fj),B.ah(d.d,e.d,f),!1,A.kA(d.e,e.e,f,A.a_n(),x.S),w)},
a0R(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SN
else w=h
v=m==null
u=v?8:m
t=$.lv()
s=t.aXW(f,v?8:m)
t=t.aXX(g,v?8:m)
v=d==null?A.bE1(r,r,r,r,r):d
return new A.is(q,l,w,j,u,s,e,t,v,k==null?D.alm:k)},
bRu(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.mJ(d.f,e.f,f),p=A.kA(d.r,e.r,f,A.a_n(),x.S),o=B.bY(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a0R(A.bE1(v,u,null,!1,t),p,q,o,s,n,null,A.kA(d.y,e.y,f,A.c4s(),x.G),m,r)},
bRv(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mH(u,w,v,B.bY(d.d,e.d,f))},
bE1(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0N(g===!0,v,u,w,f)},
bx2(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0T(4,C.hN,16,D.xx,0,120,A.c4u(),!1,!1,D.Zk,0,C.J,A.c4t())
else w=k
v=j==null?C.l2:j
return new A.a0S(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5h(d,e,f,g){var w=null,v=B.j6(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CZ(C.d.j(f.b),v)},
c5g(d){return A.aA1(D.dp,15)},
nY:function nY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axQ:function axQ(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axZ:function axZ(){},
ay_:function ay_(){},
is:function is(d,e,f,g,h,i,j,k,l,m){var _=this
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
mH:function mH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0N:function a0N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0S:function a0S(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adS:function adS(d,e){this.a=d
this.b=e},
a0T:function a0T(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CZ:function CZ(d,e){this.a=d
this.b=e},
KW:function KW(d){this.a=d},
a0U:function a0U(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xJ:function xJ(d,e){this.a=d
this.b=e},
aha:function aha(){},
ahh:function ahh(){},
ahi:function ahi(){},
ahk:function ahk(){},
ahl:function ahl(){},
ahm:function ahm(){},
ahn:function ahn(){},
aho:function aho(){},
ahp:function ahp(){},
ay0:function ay0(d){this.a=d},
ay1:function ay1(){},
uB:function uB(d,e,f){this.a=d
this.b=e
this.c=f},
ahj:function ahj(){},
ay2:function ay2(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ay3:function ay3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay4:function ay4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5V:function a5V(d){this.b=d},
a0Q:function a0Q(d,e,f){this.d=d
this.e=e
this.a=f},
ab_:function ab_(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.fZ=f
_.fC=g
_.A=h
_.a2=_.T=_.V=null
_.a4=i
_.bz=_.aJ=_.ah=_.av=$
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
c5i(d,e){var w=null
return new A.Ru(e.w,B.h(e.r,w,w,w,w,w,w,w),w)},
axJ(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.pg(t,e.b,new A.qi(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bFr(d,e,f){var w=A.axJ(d.b,e.b,f),v=A.axJ(d.d,e.d,f),u=A.axJ(d.e,e.e,f)
return new A.v1(e.a,w,A.axJ(d.c,e.c,f),v,u)},
bUe(d,e,f){var w,v
if(d.k(0,D.fI))return e
if(e.k(0,D.fI))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bFp(d,e,f){return new A.yy(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
c7G(d){return!0},
c5l(d){return D.a8t},
bFq(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pD(w,f,g,e)},
bHn(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c4n(),x.dv)
v.toString
w=A.kA(d.b,e.b,f,A.c4p(),x.bN)
w.toString
return new A.Q3(v,w)},
bUZ(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rp(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.n2(t,w,v,u)},
c_d(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rp(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.ns(t,w,v,u)},
bUY(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oa(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bUW(B.bwV(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rp(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.a_n(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kS(r,e.f,e.r,t,e.x,u,v,w,s)},
c_c(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oa(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.c_a(B.bwV(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rp(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.a_n(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bUW(d,e,f,g,h,i){return new A.a65(f,!1,g,i,d,e)},
bUX(d){return C.d.al(d.e,1)},
c_a(d,e,f,g,h,i){return new A.aef(f,!1,g,i,d,e)},
c_b(d){return C.d.al(d.e,1)},
bFk(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c4m(),x.cm)
v.toString
w=A.kA(d.b,e.b,f,A.c4o(),x.es)
w.toString
return new A.MT(v,w,!0)},
bUd(d,e,f){return new A.N_(d,e==null?4:e,f)},
a0G:function a0G(){},
CY:function CY(d,e){this.a=d
this.b=e},
tz:function tz(d,e){this.r=d
this.w=e},
qi:function qi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acq:function acq(){},
pg:function pg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v1:function v1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB:function eB(d,e){this.a=d
this.b=e},
yy:function yy(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pD:function pD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adU:function adU(){},
Q3:function Q3(d,e){this.a=d
this.b=e},
n2:function n2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ns:function ns(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kS:function kS(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lf:function lf(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a65:function a65(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aef:function aef(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MT:function MT(d,e,f){this.a=d
this.b=e
this.c=f},
v0:function v0(){},
N_:function N_(d,e,f){this.a=d
this.b=e
this.c=f},
ah5:function ah5(){},
ah9:function ah9(){},
akj:function akj(){},
aky:function aky(){},
akz:function akz(){},
akB:function akB(){},
akC:function akC(){},
alp:function alp(){},
alo:function alo(){},
alq:function alq(){},
ap_:function ap_(){},
aqQ:function aqQ(){},
aqR:function aqR(){},
asv:function asv(){},
at9:function at9(){},
at8:function at8(){},
ata:function ata(){},
axF:function axF(){},
KP:function KP(){},
KQ:function KQ(d,e,f){this.c=d
this.d=e
this.a=f},
axH:function axH(d){this.a=d},
axG:function axG(d){this.a=d},
Ru:function Ru(d,e,f){this.c=d
this.e=e
this.a=f},
Y1:function Y1(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYI(d,e,f){var w=B.ai(f),v=w.i("af<1,jZ>")
v=B.Q(new B.af(f,new A.b_4(),v),v.i("ar.E"))
w=w.i("af<1,c>")
w=B.Q(new B.af(f,new A.b_5(),w),w.i("ar.E"))
return new A.acr(e,d,v,w,null)},
bRq(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6H(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tw(v,C.aj,C.x,new B.ks(1),v,v,v,v,C.bm,v)
u=new A.a0H(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.g))
u.bl()
return u},
acr:function acr(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_4:function b_4(){},
b_5:function b_5(){},
a0H:function a0H(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.V=e
_.T=f
_.a2=g
_.Wz$=h
_.aTJ$=i
_.dm$=j
_.a8$=k
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
bfO:function bfO(d,e){this.a=d
this.b=e},
axI:function axI(){},
jZ:function jZ(d,e){this.a=d
this.b=e},
nX:function nX(d,e){this.a=d
this.b=e},
ah6:function ah6(){},
ah7:function ah7(){},
ah8:function ah8(){},
Ts:function Ts(){},
AB:function AB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_6:function b_6(d){this.a=d},
b_7:function b_7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_8:function b_8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5b(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a5a(e!==!1,w)},
a0W:function a0W(){},
a5a:function a5a(d,e){this.a=d
this.b=e},
N6:function N6(){},
a5c:function a5c(){},
ayd:function ayd(){},
aEL:function aEL(d,e){this.a=d
this.b=e},
ahs:function ahs(){},
akv:function akv(){},
akw:function akw(){},
akD:function akD(){},
KZ:function KZ(){},
vL:function vL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hn:function hn(){},
a5g:function a5g(d){this.a=d},
a5h:function a5h(d){this.a=d},
a5i:function a5i(d){this.a=d},
N1:function N1(){},
N2:function N2(){},
a5l:function a5l(d){this.a=d},
N4:function N4(){},
N5:function N5(d){this.a=d},
a5f:function a5f(d){this.a=d},
a5e:function a5e(d){this.a=d},
N0:function N0(d){this.a=d},
a5j:function a5j(d){this.a=d},
a5k:function a5k(d){this.a=d},
N3:function N3(d){this.a=d},
G7:function G7(){},
aV6:function aV6(d){this.a=d},
aV7:function aV7(d){this.a=d},
aV8:function aV8(d){this.a=d},
aV9:function aV9(d){this.a=d},
aVa:function aVa(d){this.a=d},
aVb:function aVb(d){this.a=d},
aVc:function aVc(d){this.a=d},
aVd:function aVd(d){this.a=d},
aVe:function aVe(d){this.a=d},
aVf:function aVf(d){this.a=d},
aVg:function aVg(d){this.a=d},
aVh:function aVh(d){this.a=d},
aVi:function aVi(d){this.a=d},
Op:function Op(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VQ:function VQ(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fA$=g
_.cW$=h
_.c=_.a=null},
bfX:function bfX(d,e){this.a=d
this.b=e},
bfV:function bfV(d){this.a=d},
bfW:function bfW(d,e){this.a=d
this.b=e},
bfU:function bfU(){},
bfY:function bfY(d){this.a=d},
byi(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pR(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SN:u
else w=g
v=f==null?A.axP(!1,u,0,u,!1,D.vS):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axP(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.arp(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bE2(d.ay,e.ay,f)
v=A.bE2(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.kA(d.cy,e.cy,f,A.a_n(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rp(d.w,e.w,f)
p=A.kA(d.a,e.a,f,A.c4l(),x.cw)
p.toString
o=B.bHT(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aKW(v,m,w,r,e.z,s,new A.yx(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Oq(n),!1,u,o,!0,e.cx,p)},
axP(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a0P(h,w,g,i,f,!1)},
bE2(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rp(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bFq(t,A.kA(v.d,u.d,f,A.a_n(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rp(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.axP(!1,s,v,u,e.a,new A.KU(!1,r,w.c,!0))},
bRw(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rp(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mI(e.a,e.b,w,v)},
c7H(d){return!0},
bAp(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jx)return A.bBb(w.a,A.bxZ(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c21(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jx)w=A.bBb(v.a,A.bxZ(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.aA1(w,40)},
bKo(d,e,f,g,h){var w,v=A.bAp(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jx)w=A.bBb(u.a,A.bxZ(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.aA1(w,40)
return new A.N_(v,h==null?4:h,u)},
c7F(d,e){return!0},
c46(d,e){return Math.abs(d.a-e.a)},
c5o(d,e){var w=J.d2(e,new A.btB(d),x.bY)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
c5k(d,e){return-1/0},
c5j(d,e){return d.a[e].b},
bLC(d){var w=J.d2(d,new A.bty(),x.fT)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
bLB(d){return A.aA1(D.dp,15)},
pR:function pR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKX:function aKX(){},
Oq:function Oq(d){this.a=d},
a0P:function a0P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mI:function mI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KU:function KU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yx:function yx(d,e,f){this.a=d
this.b=e
this.c=f},
aKI:function aKI(d,e){this.a=d
this.b=e},
a5d:function a5d(){},
EL:function EL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btB:function btB(d){this.a=d},
btA:function btA(d){this.a=d},
a75:function a75(){},
bty:function bty(){},
n6:function n6(){},
qp:function qp(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rD:function rD(d,e){this.a=d
this.b=e},
tA:function tA(d,e){this.a=d
this.b=e},
Gy:function Gy(d){this.a=d},
Or:function Or(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ahf:function ahf(){},
ahg:function ahg(){},
aht:function aht(){},
akx:function akx(){},
akA:function akA(){},
ami:function ami(){},
amj:function amj(){},
amk:function amk(){},
amm:function amm(){},
amn:function amn(){},
amo:function amo(){},
amp:function amp(){},
aqP:function aqP(){},
asu:function asu(){},
aKY:function aKY(d){this.a=d},
aKZ:function aKZ(){},
aL_:function aL_(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aml:function aml(){},
aL0:function aL0(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aL3:function aL3(){},
aL1:function aL1(d,e,f){this.a=d
this.b=e
this.c=f},
aL2:function aL2(d,e,f){this.a=d
this.b=e
this.c=f},
aL4:function aL4(){},
vw:function vw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a74:function a74(d,e,f){this.d=d
this.e=e
this.a=f},
abc:function abc(d,e,f,g,h,i,j,k){var _=this
_.fB=d
_.aI=e
_.fZ=f
_.fC=g
_.A=h
_.a2=_.T=_.V=null
_.a4=i
_.bz=_.aJ=_.ah=_.av=$
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
bx1(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bC(o.length,0,!1,x.i),m=B.ai(o),l=new B.af(o,new A.axS(),m.i("af<1,K>")).kr(0,new A.axT()),k=e-l,j=new A.axW(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aD(0,new A.axU(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aD(0,new A.axV(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axS:function axS(){},
axT:function axT(){},
axW:function axW(d,e,f){this.a=d
this.b=e
this.c=f},
axX:function axX(d,e,f){this.a=d
this.b=e
this.c=f},
axU:function axU(d,e,f){this.a=d
this.b=e
this.c=f},
axV:function axV(d,e,f){this.a=d
this.b=e
this.c=f},
bxZ(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ai(w).i("iX<1>")).aD(0,new A.aI_(v,d))
else throw B.e(B.bI('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aI_:function aI_(d,e){this.a=d
this.b=e},
aBd(d,e){var w,v
if(e!=null){w=B.ai(e).i("af<1,K>")
v=B.Q(new B.af(e,new A.aBe(),w),w.i("ar.E"))
return A.c5b(d,new A.a1x(v,x.C))}else return d},
aBe:function aBe(){},
bZj(d,e){var w=!0
if(d!==C.f5)if(!(d===C.aj&&e===C.x))w=d===C.im&&e===C.b_
if(w)return D.DX
else{w=!0
if(d!==C.il)if(!(d===C.im&&e===C.x))w=d===C.aj&&e===C.b_
if(w)return D.DY
else return D.a99}},
Nu:function Nu(d,e){this.a=d
this.b=e},
a1m:function a1m(d,e){this.a=d
this.b=e},
zn:function zn(d,e){this.a=d
this.$ti=e},
amw:function amw(){},
c5b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ah,k,k,h)
for(j=B.MN(d),w=B.b([],x.I),v=new B.MP(j,!1,w),u=e.a,t=j.a,s=x.dc;v.u();){r=v.c
if(r===0||v.f)B.P(B.fB('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MO(v,r)
v.Dj()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dj()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.e2(B.b([],i),!0,s)
p=new B.Kg(new B.ck(t,p,k,new B.apl([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1x:function a1x(d,e){this.a=d
this.b=0
this.$ti=e},
b2z:function b2z(){},
bxN(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.H)(d),++v){u=d[v]
if(!u.k(0,D.fI))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRz(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.geo(v)===0){v=d.a.a
if(v.geo(v)===0){v=d.b.a
if(v.geo(v)===0){v=d.c.a
v=v.geo(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aA1(d,e){var w=1-e/100
return B.aD(d.gfN(d),C.d.aV(d.gO7()*w),C.d.aV(d.gGc()*w),C.d.aV(d.gKs()*w))},
bFo(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
bxO(d){var w=d.a,v=w?A.b_3(d.b):0,u=w?A.b_3(d.c):0,t=w?A.b_3(d.d):0
return new B.al(v,u,t,w?A.b_3(d.e):0)},
bWE(d){var w
if(d.c===0){d.seW(null)
w=B.c3(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gp(0)}},
byF(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.seW(f.mK(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seW(null)}},
b_3(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kA(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kY(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kY(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6t(d,e,f){return C.d.aV(d+(e-d)*f)},
bBb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kY(m,x.i)
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
A.a6Q.prototype={
t(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aT:C.p
r=r?C.m:C.am
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.cl(t.x,C.m,s,18),C.aX],w))
v.push(B.ay(new B.dF(t.c,!1,s),1))
v=B.ak(v,C.z,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.h(t.d,1,C.aa,s,B.bz(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bi(r,B.a7(w,C.z,C.i8,C.i),q,s,C.ae,s,3)}}
A.v_.prototype={
LU(d){return this.aTI(d)},
aTI(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LU=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_summary",B.a5(["p_from",E.rk(d.a),"p_to",E.rk(d.b)],s,r),r),$async$LU)
case 3:q=f
if(q==null){u=D.api
w=1
break}if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.arx
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LU,v)},
LT(d){return this.aTH(d)},
aTH(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LT=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_kpis",B.a5(["p_from",E.rk(d.a),"p_to",E.rk(d.b)],s,r),r),$async$LT)
case 3:q=f
if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.ap0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LT,v)},
pI(d){return this.ar6(d)},
ar6(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pI=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hi("sevdesk-sync",B.a5(["from",E.rk(d.a),"to",E.rk(d.b)],s,s)),$async$pI)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.a1(B.fI(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pI,v)},
LP(d){return this.aTy(d)},
aTy(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LP=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hi("finance-export-pdf",B.a5(["from",E.rk(d.a),"to",E.rk(d.b)],s,s)),$async$LP)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aH(J.a2(r,"base64"))
w=1
break}throw B.e(B.e8("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LP,v)}}
A.E7.prototype={
G6(d){return this.akg(d)},
akg(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G6=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LU(d),$async$G6)
case 7:q=f
o=A.aFO(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G6,v)},
G1(d){return this.ak1(d)},
ak1(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G1=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LT(d),$async$G1)
case 7:q=f
o=A.bUb(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G1,v)},
pI(d){return this.ar7(d)},
ar7(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.HJ(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pI,v)},
LO(d){return this.aTx(d)},
aTx(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LP(d),$async$LO)
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
o=r.HJ(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LO,v)},
HJ(d){if(d instanceof B.ys)return d
if(d instanceof B.m3){if(d.b==="42501")return new B.vP(d.a)
return new B.tf(d.a)}if(d instanceof B.Nj)return new B.tf("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B0("Unerwarteter Fehler: "+B.j(d))},
$iaFA:1}
A.qr.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vA.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wv.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAD.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBK.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oe.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CH.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.of.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yv.prototype={
H2(d){return this.ar5(0)},
ar5(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H2=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sdZ(0,C.db)
s=t.r
r=s.ar(0,$.xv(),x.P)
p.a=null
w=3
return B.k(B.pf(new A.aFv(p,t,r),x.H),$async$H2)
case 3:t.sdZ(0,f)
q=t.f
if(q.ghu(q)==null){q=$.bwy()
s=s.e
s===$&&B.a()
s.bA(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H2,v)},
LN(){return this.aTw()},
aTw(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LN=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sdZ(0,C.db)
s=t.r.ar(0,$.xv(),x.P)
q.a=null
w=3
return B.k(B.pf(new A.aFu(q,t,s),x.H),$async$LN)
case 3:t.sdZ(0,e)
r=t.f
u=r.ghu(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LN,v)}}
A.yw.prototype={
cw(d,e){var w=null,v=e.a9($.xv(),x.P),u=e.a9($.bwy(),x.aN)
return B.i9(B.dE(B.b([new B.fC("Finanzen","Dashboard",new A.ago(e.a9($.bww(),x.b).gjc(),new A.aFF(this,d,e),new A.aFG(this,d,e),new A.aFH(d),new A.aFI(d),new A.aFJ(this,d,e,v),w),w),C.ay,new A.anU(v,w),C.cd,D.af6,C.cd,B.db(u,new A.aFK(),new A.aFL(),new A.aFM(),!1,!0,!1,x.d,x.l)],x.p),C.cD,w,C.H,!1),C.m,new A.aFN(e))},
JB(d,e){return this.aLX(d,e)},
aLX(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$JB=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bww()
w=3
return B.k(e.ar(0,s.geP(),x.F).H2(0),$async$JB)
case 3:r=g
if(d.e==null){w=1
break}s=e.ar(0,s,x.b)
s=s.ghu(s)
t=d.O(x.q).f
t.aR(B.c1(null,null,null,null,null,C.q,null,B.h(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JB,v)},
Bu(d,e){return this.axe(d,e)},
axe(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bu=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.ar(0,$.bww().geP(),x.F).LN(),$async$Bu)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aR(D.azg)
w=1
break}t=B.qb(C.v,10)
w=4
return B.k($.bNM().u6(s,"finanzauswertung.pdf",t,null,null,null),$async$Bu)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bu,v)},
Bv(d,e,f){return this.aJs(d,e,f)},
aJs(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bv=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.fK(null,null,!0,null,new A.aFD(f,d),d,null,!0,!0,x.cJ),$async$Bv)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nR(e.ar(0,$.bX(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zz("finance_period",p,o,B.a5(["period_from",p.e4()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bv)
case 8:if(d.e!=null)d.O(x.q).f.aR(F.uS)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Fehler: "+B.j(q),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bv,v)}}
A.ago.prototype={
t(d){var w=this,v=null,u=A.alA(C.m,F.hR,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alA(v,D.aaT,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alA(v,D.xP,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alA(C.a8,C.jf,C.a8,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aX,t,C.aX,r,C.aX,q,C.aX,A.alA(C.al,C.fL,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.M,0,v,v)}}
A.alz.prototype={
t(d){var w,v=this,u=null,t=B.aM(12),s=B.aM(12),r=B.aM(12),q=v.w
if(q==null)q=C.am
q=B.cU(q,1)
w=v.r
if(w==null)w=C.h
return B.H9(B.dV(!1,C.a_,!0,t,B.eD(!1,s,!0,B.b3(u,B.cl(v.c,w,u,20),C.u,u,u,new B.b0(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.u,C.ab,0,u,u,u,u,u,C.bE),u,v.d,u,u)}}
A.anU.prototype={
cw(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.bi(w,B.a7(B.b([D.a8e,C.D,B.ak(B.b([D.abH,C.aR,B.ay(B.h(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.y(C.h,16,C.N),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.r,B.jO(C.c5,B.b([new A.IU("Monat",new A.biq(e),w,w),new A.IU("Jahr (YTD)",new A.bir(e),w,w),new A.IU("Zeitraum w\xe4hlen \u2026",new A.bis(this,d,e),D.a9Z,w)],t),C.d7,6,8)],t),C.z,C.f,C.i),w,w,C.A,w,3)},
IW(d,e){return this.aIk(d,e)},
aIk(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IW=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b7(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avi(new A.bip(),d,B.bK(B.aT(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bK(B.aT(t)+1,1,1,0,0,0,0),C.e0),$async$IW)
case 2:r=g
if(r!=null)e.ar(0,$.xv().geP(),x.V).ra(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IW,v)}}
A.IU.prototype={
t(d){var w=null,v=B.aM(9999),u=B.aM(9999),t=B.aM(9999),s=B.cU(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.cl(p,C.h,w,14),C.aX],r))
q.push(B.h(this.c,w,w,w,B.y(C.h,13,C.N),w,w,w))
return B.dV(!1,C.a_,!0,v,B.eD(!1,u,!0,B.b3(w,B.ak(q,C.l,C.f,C.M,0,w,w),C.u,w,w,new B.b0(w,w,s,t,w,w,C.F),w,w,w,w,C.l1,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.u,C.ab,0,w,w,w,w,w,C.bE)}}
A.Jn.prototype={
t(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jw(new A.boL(this)),C.cd,D.a8i,C.r],r),p=this.c.w
if(p.length===0)q.push(B.bi(s,B.ak(B.b([D.ac6,C.aw,B.ay(B.h("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.o,14,C.j),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ab,s,C.A,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.H)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agm(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a7(w,C.l,C.f,C.i))}return B.a7(q,C.ad,C.f,C.i)}}
A.agm.prototype={
t(d){var w=this,v=null,u=w.e,t=u?C.aT:C.ab,s=B.cU(u?C.m:C.am,1),r=B.aM(4),q=w.c
r=B.b3(C.a1,B.h(C.c.a_(q,0,1),v,v,v,B.bz(C.h,14,C.n),v,v,v),C.u,v,v,new B.b0(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.h(q+" \xb7 "+w.d,1,C.aa,v,B.y(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.a7(B.b([q,B.h(t,v,v,v,B.y(C.o,12,C.j),v,v,v)],s),C.z,C.f,C.i),1)
q=$.ds().ap(w.f)
return B.bi(v,B.ak(B.b([r,C.aw,t,B.h(q,v,v,v,B.y(u?C.al:C.h,15,C.N),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.eg,v,3)}}
A.I_.prototype={
t(d){var w=null
return B.bi(C.a8,B.ak(B.b([D.acJ,C.aw,B.ay(B.h(this.c,w,w,w,B.y(C.h,14,C.j),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.eE,w,C.A,w,3)}}
A.a6R.prototype={
cw(d,e){return B.db(e.a9($.bQf(),x.e),new A.aKF(),new A.aKG(),new A.aKH(),!1,!0,!1,x.X,x.l)}}
A.Ik.prototype={
t(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awK,C.r,B.jw(new A.bfF(v,q,100-t.w.a,w,p)),C.r,new A.akT(u),C.ay,D.awJ,C.r,new A.ahe(t,u),C.ay,D.awE,C.r,B.bD(u,!0,u,B.n0(u,B.bi(u,new A.TR(t,220,u),u,u,C.A,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfG(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.ay,D.awy,C.r,B.bD(u,!0,u,B.n0(u,new A.U2(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfH(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.ay,D.awC,C.r,new A.amG(t,u),C.ay,D.awz,C.r,new A.aiY(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.ay,D.awG,C.r,new A.asr(t,u)],s))
return B.a7(r,C.ad,C.f,C.i)}}
A.akT.prototype={
t(d){var w=null
return B.h("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.o,11,C.j).dt(1.35),w,w,w)}}
A.ama.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cv(m.d,"-")?C.a8:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfI(m,d):l
r=x.p
q=B.b([B.ay(B.h(m.c.toUpperCase(),l,l,l,B.y(C.o,10,C.n).f8(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.a8,0.8)
n=B.aM(4)
q.push(B.b3(l,B.h("Ziel "+p,l,l,l,B.y(C.a8,9,C.n),l,l,l),C.u,l,l,new B.b0(l,l,o,n,l,l,C.F),l,l,l,l,C.ni,l,l,l))}q=B.b([B.ak(q,C.l,C.f,C.i,0,l,l),C.aN,B.bFn(C.dI,B.h(m.d,l,l,l,B.bz(w,22,C.n),l,l,l),C.vY)],r)
p=m.e
if(p!=null)q.push(B.h(p,2,C.aa,l,B.y(C.o,10,C.aP),l,l,l))
q.push(C.cu)
q.push(B.ak(B.b([new A.UE("Vormonat",m.r,l),C.ct,new A.UE("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cu)
q.push(B.ay(new A.Yc(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.n0(l,B.bi(l,B.a7(q,C.z,C.f,C.i),l,l,C.dd,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.Q,l)}}
A.UE.prototype={
t(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aM(4)
return B.b3(r,B.h(this.c+" \u2014",r,r,r,B.y(C.o,9,C.n),r,r,r),C.u,r,r,new B.b0(C.am,r,r,q,r,r,C.F),r,r,r,r,C.ni,r,r,r)}w=q>=0
v=w?C.al:C.a8
u=v.fo(0.12)
t=B.cU(v,0.7)
s=B.aM(4)
return B.b3(r,B.ak(B.b([B.cl(w?F.a9e:D.a9d,v,r,10),F.ayU,B.h(this.c+" "+C.d.al(q,1)+" %",r,r,r,B.y(v,9,C.n),r,r,r)],x.p),C.l,C.f,C.M,0,r,r),C.u,r,r,new B.b0(u,r,t,s,r,r,C.F),r,r,r,r,C.ni,r,r,r)}}
A.Yc.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ai
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.kr(j,new A.bnU())
t=C.b.kr(j,new A.bnV())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bnW(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5b(k,!1)
w=B.b([A.aKW(k,2,A.axP(!1,C.m.fo(0.16),0,k,!0,D.vS),C.m,0.35,k,D.DO,k,!0,!1,!0,!1,D.Fi,!1,10,D.Y3,!0,C.lu,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Op(A.byi(k,k,k,D.aln,l,D.BG,D.DK,D.DP,w,D.afb,k,m,k,n,D.Xn,D.alo,D.a8w),C.az,C.an,k,k)}}
A.TR.prototype={
t(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMt
w=C.b.fP(p,0,new A.b6j())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axY(B.b([A.a0R(q,q,D.B7,q,C.m,q,q,q,r.b,6),A.a0R(q,q,D.B7,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c5(A.bE3(A.axR(q,q,u,q,q,A.a5b(q,!1),q,new A.yy(!0,!0,q,new A.b6k(),A.a_g(),!1,q,A.av2(),A.a_g()),q,v,q,q,new A.v1(!0,new A.pg(16,q,new A.qi(!0,new A.b6l(this),46,q),!0),D.ku,D.ku,new A.pg(16,q,new A.qi(!0,new A.b6m(p),26,q),!0)))),this.d,q)},
aLa(d){if(Math.abs(d)>=1000)return C.d.al(d/1000,1)+" k"
return C.d.al(d,0)}}
A.U2.prototype={
t(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.af(v,new A.b79(),w),x.i)
C.b.K(o,new B.af(u,new A.b7a(),w))
t=C.b.fP(o,0,new A.b7b())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axY(B.b([A.a0R(q,q,q,q,C.m,q,q,q,v[s],14),A.a0R(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c5(A.bE3(A.axR(q,q,n,q,q,A.a5b(q,!1),q,D.DP,q,o,q,q,new A.v1(!0,D.ku,D.ku,D.ku,new A.pg(16,q,new A.qi(!0,new A.b7c(p),26,q),!0)))),this.d,q)
return this.e?r:B.bi(q,r,q,q,C.A,q,3)}}
A.amG.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aMs
w=new B.af(l,new A.bgg(),B.ai(l).i("af<1,K>")).kr(0,new A.bgh())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.H)(l),++s){r=l[s]
q=B.h(r.b,m,m,m,B.y(C.h,14,C.n),m,m,m)
p=$.ds()
o=r.d
n=new B.aW(4,4)
o=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.a7(B.b([q,B.h(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.y(C.o,12,C.aP),m,m,m)],v),C.z,C.f,C.i),m),C.aR,B.h(p.ap(o),m,m,m,B.bz(C.h,16,C.n),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cu,new B.Dn(new B.d8(n,n,n,n),C.bH,B.EM(C.am,8,C.d.c2(o/w,0,1),D.AX),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.G(r)===B.G(q)&&B.a_l(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.r)
C.b.K(u,o)}return B.bi(m,B.a7(u,C.l,C.f,C.i),m,m,C.A,m,3)}}
A.aiY.prototype={
t(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.C7("Aktive Kunden",""+s,u),1)
w=B.ay(new A.C7("K\xe4ufe",""+t.a,u),1)
v=$.ds()
return B.bi(u,B.ak(B.b([s,w,B.ay(new A.C7("\xd8-Warenkorb",v.ap(t.d),u),1),B.ay(new A.C7("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.A,u,3)}}
A.C7.prototype={
t(d){var w=null
return B.a7(B.b([B.h(this.c.toUpperCase(),w,w,w,B.y(C.o,10,C.n).f8(0.6),w,w,w),C.be,B.h(this.d,w,w,w,B.bz(C.h,20,C.n),w,w,w)],x.p),C.z,C.f,C.M)}}
A.asr.prototype={
t(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.bq7(),B.ai(q).i("af<1,K>")).kr(0,new A.bq8()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.H)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.h(u.b,1,C.aa,r,B.y(C.h,13,C.n),r,r,r),r),B.h(""+u.c+"\xd7 ",r,r,r,B.y(C.o,12,C.N),r,r,r),B.h($.ds().ap(t),r,r,r,B.y(C.h,13,C.n),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.aN,new B.Dn(new B.d8(s,s,s,s),C.bH,B.EM(C.am,6,C.d.c2(t/p,0,1),D.AX),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.G(u)===B.G(s)&&B.a_l(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.bi(r,B.a7(n,C.l,C.f,C.i),r,r,C.A,r,3)}}
A.wO.prototype={
t(d){var w=null
return B.bi(w,B.h(this.c,w,w,w,B.y(C.o,13,C.j),w,w,w),C.ab,w,C.A,w,3)}}
A.ahe.prototype={
cw(d,e){return B.db(e.a9($.bwx(),x.fM),new A.b4G(this,d,e),new A.b4H(),new A.b4I(),!1,!0,!1,x.h,x.l)}}
A.B8.prototype={
X(){return new A.Tu()},
aYA(){return this.d.$0()}}
A.Tu.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b7(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.fc(J.a6(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pr[t].a
if(v)r=""
else{r=B.bk(J.a2(w,s))
if(r==null)r=null
r=C.d.al(r==null?0:r,2)
r=B.b5(r,".",",")}u.m(0,s,new B.bw(new B.cE(r,C.bl,C.aJ),$.ag()))}q.e!==$&&B.aZ()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ce(v,v.r,v.e,B.l(v).i("ce<2>"))
while(v.u()){w=v.d
w.U$=$.ag()
w.R$=0}this.aq()},
rw(d){var w=this.e
w===$&&B.a()
w=C.c.ba(w.h(0,d).a.a)
w=B.b5(w,".","")
w=B.hx(B.b5(w,",","."))
return w==null?0:w},
a4i(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pr[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.al(u,2)
s=B.b5(s,".",",")
t.lK(0,t.a.xW(C.aJ,C.bl,s))}}this.J(new A.b4u())},
aF_(){this.a4i(D.apk)
this.c.O(x.q).f.aR(D.azF)},
Ic(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ic=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b4(a1)
for(e=0;e<8;++e)a2.E(0,D.pr[e].a)
q=a2
t=4
w=7
return B.k($.aFo.cj().zg(B.b(["csv","txt"],x.s),C.xA,!0),$async$Ic)
case 7:p=a5
a2=p
o=a2==null?null:J.Kb(a2.a).c
if(o==null){w=1
break}n=C.aF.adJ(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BL.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.H)(a1),++e){l=a1[e]
k=J.avQ(l,B.bQ("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.ba(J.a2(k,0)).toLowerCase()
i=J.CD(q,j)?j:D.arA.h(0,j)
if(i==null)continue
d=C.c.ba(C.b.n2(J.bQX(k,1)))
d=B.b5(d,"\u20ac","")
d=B.b5(d," ","")
d=B.b5(d,".","")
h=B.b5(d,",",".")
g=B.hx(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aR(D.azd)
w=1
break}r.a4i(m)
r.c.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ic,v)},
In(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$In=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4v(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b07("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.e4(),0,10),"p_cash_and_bank",q.rw("cash_and_bank"),"p_receivables",q.rw("receivables"),"p_inventory_value",q.rw("inventory_value"),"p_other_current_assets",q.rw("other_current_assets"),"p_fixed_assets",q.rw("fixed_assets"),"p_current_liabilities",q.rw("current_liabilities"),"p_long_term_liabilities",q.rw("long_term_liabilities"),"p_equity",q.rw("equity")],x.N,x.aU))
w=7
return B.k(n,$async$In)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYA()
o=q.c
o.toString
B.aV(o,!1).eq()
q.c.O(x.q).f.aR(D.azh)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aR(B.c1(null,null,null,null,null,C.q,null,B.h("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4w(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$In,v)},
t(d){var w,v,u,t,s=this,r=null,q=B.h("Bilanzwerte erfassen",r,r,r,B.bz(C.h,18,C.n),r,r,r),p=s.f?r:new A.b4y(s,d),o=s.d
o===$&&B.a()
p=B.f4(D.abJ,B.h("Stichtag: "+C.c.a_(o.e4(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.f4(D.acR,D.aFB,o?r:s.gaE2(),r),1)
v=x.p
w=B.b([p,C.D,B.ak(B.b([w,C.aR,B.ay(B.f4(D.acH,D.aFm,o?r:s.gaEZ(),r),1)],v),C.l,C.f,C.i,0,r,r),C.r],v)
for(u=0;u<8;++u){p=D.pr[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dX(r,C.aD,!1,r,!0,C.q,r,B.e4(),o.h(0,p.a),r,r,r,r,r,2,new B.c0(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aH,r,r,r,r,C.ip,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.A,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aj,r,C.W,r,r,r,r),C.D],v))}w.push(B.h("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.o,11,C.j),r,r,r))
p=B.c5(B.ex(B.a7(w,C.ad,C.f,C.M),r,C.H),r,380)
o=s.f
w=B.cX(C.bR,r,r,o?r:new A.b4z(d),r,r)
o=o?r:s.gaEJ()
t=B.dM(C.m,C.h,r,r,r,r,r)
return B.hX(B.b([w,B.dj(s.f?F.YB:C.dv,o,t)],v),C.p,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.G(this)===B.G(e)&&B.a_l(this.gbD(),e.gbD())
else w=!0
return w},
gB(d){return(B.f5(B.G(this))^B.bM6(this.gbD()))>>>0},
j(d){B.bFi()
return B.G(this).j(0)}}
A.KV.prototype={
X(){return new A.Tv(B.A(x.S,x.J),new A.ay0(B.A(x.x,x.gF)),null,null)}}
A.Tv.prototype={
t(d){var w,v=this,u=v.a2f(),t=v.CW
t.toString
t=v.a2g(t.aB(0,v.ghJ().gp(0)))
w=v.a2g(u)
v.a.toString
return new A.KQ(new A.a0Q(t,w,null),u,null)},
a2g(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axY(s.c,s.d,!1,r,s.a))}return d.aQx(w)},
a2f(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.V5(t.ch)
if(r)s=w.a
r=t.y
t=t.aRt(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQy(A.bx2(!1,!0,!0,v.d,v.c,u.gasJ(),v.f,v.e))}return t},
asK(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagb()||e==null||e.a==null){w=v.cy
v.J(w.gaPV(w))
return}v.J(new A.b4L(v,e))},
nX(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2f(),new A.b4M(w)))}}
A.nY.prototype={
VH(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axR(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRt(d,e){return this.VH(null,null,d,e)},
aQy(d){return this.VH(null,d,null,null)},
aQx(d){return this.VH(d,null,null,null)},
XH(d,e,f){var w,v,u,t=A.kA(d.ch,e.ch,f,A.c4q(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bFr(d.d,e.d,f),q=A.bHn(d.e,e.e,f),p=A.bFp(d.c,e.c,f),o=e.a
o=A.a5b(B.a16(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.axR(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bFk(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axQ.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.axZ(),B.ai(v).i("af<1,K>")).kr(0,new A.ay_())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.is.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mH.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0N.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0S.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adS.prototype={
L(){return"TooltipDirection."+this.b}}
A.a0T.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CZ.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.KW.prototype={}
A.a0U.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xJ.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XH(v,w,d)}}
A.aha.prototype={}
A.ahh.prototype={}
A.ahi.prototype={}
A.ahk.prototype={}
A.ahl.prototype={}
A.ahm.prototype={}
A.ahn.prototype={}
A.aho.prototype={}
A.ahp.prototype={}
A.ay0.prototype={
V5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uB(0,0,!1)
v=new A.zn(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uB(t,u,!0)}w=null
try{w=C.b.qo(d,new A.ay1())}catch(s){return new A.uB(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uB(q,r,!1)
u.m(0,v,j)
return j}}
A.uB.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahj.prototype={}
A.ay2.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0m(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acH(t,A.bx1(w,t.a),u)
l.y=u
l.aSQ(e,u,f)
l.amg(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSZ(d,e,m,t,r,s,n,o,f)}}},
acH(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e8("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ai(p).i("iX<1>")).aD(0,new A.ay3(t,q,r,s))
w.push(new A.a5V(q))}return w},
aSQ(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d8(k,k,k,k)}j=o.w
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
a4=B.Q_(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.Q_(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seW(null)
a6=b2.f.e5()
v.drawRRect(B.mC(a4),a6)
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
v.clipRect(B.dJ(b1),$.nM()[1],!0)
a6=b2.f.e5()
v.drawRRect(B.mC(a4),a6)
a6.delete()
v.restore()
b2.aSX(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.geo(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.he(a4))
n=A.aBd(new B.ck(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e5()
k=n.e
v.drawPath((k==null?n.e=new B.mM(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSZ(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AQ(a5,a5,a5,a5,B.di(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lv().a_o(a8,a7.b),a7.a),C.cV,C.x,a5,b6.c,C.bm)
w.agv(b1.f)
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
if(v!==D.aI9)j=v===D.Zk&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_p(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FW(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lv().KF(new B.F(v,t),d).b
s=$.lv()
q=w.b
p=q.c
q=q.a.c
a0=s.KF(new B.F(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiG()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Wm(d,new A.ay4(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aSX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Q_(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.Q_(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bz1(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
X0(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acH(b2,A.bx1(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0U(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a5V.prototype={}
A.a0Q.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.ay2()
t.a1x()
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
t=new A.ab_(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zh(v.cy)
t.afF()
return t},
bw(d,e){e.sig(0,this.d)
e.sZ1(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.ab_.prototype={
sig(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZ1(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a16(d.cy)
w.bf()},
scN(d){if(this.fZ.k(0,d))return
this.fZ=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1m(t,v),new A.vL(u.fB,u.aI,u.fZ,x.Q))
s.restore()},
a_h(d){var w=this,v=w.gC(0)
return new A.KW(w.fC.X0(d,v,new A.vL(w.fB,w.aI,w.fZ,x.Q)))}}
A.a0G.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CY.prototype={
L(){return"AxisSide."+this.b}}
A.tz.prototype={}
A.qi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acq.prototype={
gbD(){return[!1,0,0,0]}}
A.pg.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.v1.prototype={
gbD(){var w=this
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
gB(d){return C.d.gB(this.a)^C.d.gB(this.b)}}
A.yy.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pD.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adU.prototype={
gbD(){return[this.a,this.b]}}
A.Q3.prototype={
gbD(){return[this.a,this.b]}}
A.n2.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ns.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kS.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a65.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aef.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MT.prototype={
gbD(){return[this.a,this.b,!0]}}
A.v0.prototype={}
A.N_.prototype={
ae7(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bk
d.iP(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ah5.prototype={}
A.ah9.prototype={}
A.akj.prototype={}
A.aky.prototype={}
A.akz.prototype={}
A.akB.prototype={}
A.akC.prototype={}
A.alp.prototype={}
A.alo.prototype={}
A.alq.prototype={}
A.ap_.prototype={}
A.aqQ.prototype={}
A.aqR.prototype={}
A.asv.prototype={}
A.at9.prototype={}
A.at8.prototype={}
A.ata.prototype={}
A.axF.prototype={
MU(d,e,f,g,h,i){return new B.ik(this.aWC(d,e,f,g,h,i),x.g4)},
aWB(d,e,f,g){return this.MU(d,e,f,!0,g,!0)},
aWC(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MU(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lv().ajO(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h5(u-s,v)*v===u
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
A.KP.prototype={
a1x(){var w,v=this
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
w.a0n(d,e,f)
w.aSM(e,f)
w.aSW(e,f)
w.aSV(e,f)},
aSV(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lv().OX(w.a,a1.r-a1.f)
u=$.bw2().MU(a1.w,v,a1.r,!1,a1.f,!1)
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
i=B.l5(n,m)
if(j!=null){p.r=C.E.gp(0)
p.seW(j.mK(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seW(a0)}k=l.c
p.c=k
if(k===0){p.seW(a0)
k=B.c3(p.r)
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}a3.DL(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lv().OX(w.b,a1.y-a1.x)
u=$.bw2().MU(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.l5(n,m)
if(k!=null){q.r=C.E.gp(0)
q.seW(k.mK(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seW(a0)}p=f.c
q.c=p
if(p===0){q.seW(a0)
p=B.c3(q.r)
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gp(0)}a3.DL(n,m,d.a,f.d)}},
aSM(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.he(new B.I(0,0,0+w.a,0+w.b),this.b)},
aSW(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.H)(k),++u){t=k[u]
s=B.l5(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.seW(p.mK(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seW(null)}o=n.e.e5()
w.drawRect(B.dJ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.H)(l),++u){t=l[u]
s=B.l5(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.seW(q.mK(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seW(null)}o=n.e.e5()
j.drawRect(B.dJ(s),o)
o.delete()}},
aSU(d,e,f){var w,v
this.a0n(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ae8(d,e,f,w)
if(v.b.length!==0)this.aT0(d,e,f,w)},
ae8(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l5(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mK(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
e.DL(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=C.d.ao(o,n.gbT(n).eF(0,2))
J.ba(r.save())
r.translate(h,g)
n=n.gNS().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
o=C.d.ao(o,n.gbT(n).eF(0,2))
k=f.d
k===$&&B.a()
s.ae9(0,n,new B.r(h,o),k)}}},
aT0(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l5(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mK(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
a1.DL(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=n.gbT(n).eF(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.ba(r.save())
r.translate(f,e)
n=n.gNS().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
g=n.gbT(n).af(0,2)
o=C.d.ao(o,h)
k=C.d.ao(u,g)
j=d.d
j===$&&B.a()
s.ae9(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_p(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KQ.prototype={
galE(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galF(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galG(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galC(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alY(d){var w,v=this,u=null,t=v.d,s=A.bxO(t.d),r=t.a
r=r.a&&A.bRz(r.b)?r.b:u
w=B.b([B.b3(u,v.c,C.u,u,u,new B.b0(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.axH(w)
if(v.galE())C.b.hz(w,s.$1(!0),new A.AB(D.B3,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galG())C.b.hz(w,s.$1(!0),new A.AB(D.mw,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galF())C.b.hz(w,s.$1(!0),new A.AB(D.B4,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galC())C.b.hz(w,s.$1(!0),new A.AB(D.dJ,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
t(d){return B.jw(new A.axG(this))}}
A.Ru.prototype={
X(){return new A.Y1(new B.bj(null,x.eF))}}
A.Y1.prototype={
ayg(){switch(this.a.c.a){case 0:return C.e9
case 1:return C.fF
case 2:return C.dI
case 3:return C.fG}},
ayM(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayi(d){this.a.toString
return},
aA(){this.aO()
$.cy.x2$.push(this.ga4K())},
bd(d){this.bG(d)
$.cy.x2$.push(this.ga4K())},
t(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayM()
return B.bzA(B.b28(0,B.b3(v.ayg(),t.e,C.u,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.acr.prototype={
bm(d){return A.bRq(this.f,this.r,this.e)},
bw(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.T!==w){e.T=w
e.a7()}}}
A.a0H.prototype={
h4(d){if(!(d.b instanceof B.ho))d.b=new B.ho(null,null,C.v)},
hL(d){if(this.A===C.aE)return this.y6(d)
return this.VU(d)},
aLo(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
a9z(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dB(d){var w=this.a9y(d,B.hF())
switch(this.A.a){case 0:return d.bC(new B.F(w.a,w.b))
case 1:return d.bC(new B.F(w.b,w.a))}},
a9y(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.aE?d.b:d.d,m=o.a8$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.et(u,null)
break
case 1:q=B.et(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9z(p)
t=Math.max(t,o.aLo(p))
m=r.aw$}return new A.bfO(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9y(o,B.mB()),m=n.a,l=n.b
switch(p.A.a){case 0:p.fy=o.bC(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.bC(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.a8$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.T[u]
r=w.fy
q=s.b-p.a9z(r==null?B.P(B.T("RenderBox was not laid out: "+B.G(w).j(0)+"#"+B.c_(w))):r)/2
switch(p.A.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aw$;++u}},
eb(d,e){return this.va(d,e)},
aQ(d,e){if(this.gC(0).gW(0))return
this.a2.sbk(0,null)
this.t4(d,e)},
l(){this.a2.sbk(0,null)
this.aoR()}}
A.bfO.prototype={}
A.axI.prototype={}
A.jZ.prototype={
gbD(){return[this.a,this.b]}}
A.nX.prototype={}
A.ah6.prototype={}
A.ah7.prototype={
aL(d){var w,v,u
this.fj(d)
w=this.a8$
for(v=x.L;w!=null;){w.aL(d)
u=w.b
u.toString
w=v.a(u).aw$}},
aG(d){var w,v,u
this.f6(0)
w=this.a8$
for(v=x.L;w!=null;){w.aG(0)
u=w.b
u.toString
w=v.a(u).aw$}}}
A.ah8.prototype={}
A.Ts.prototype={
l(){var w,v,u
for(w=this.Wz$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AB.prototype={
goH(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.dI
case 1:return C.fG
case 2:return C.e9
case 3:return C.fF}},
gb0j(){var w=this.d,v=A.bxO(w.d),u=A.bFo(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).af(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).af(0,new B.al(u.a,0,u.c,0))}},
gaiu(){var w=this.d,v=A.bFo(w.a),u=A.bxO(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd4(0)+(v.gd3(0)+v.gd4(0))
case 1:case 3:return u.gex()+v.gex()}},
aXl(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goH().c.d
if(o==null)o=$.lv().OX(d,f-e)
w=p.c
v=w!==D.mw
if((!v||w===D.dJ)&&p.d instanceof A.nY){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bx1(u,d)
w=new B.iX(t,B.ai(t).i("iX<1>"))
s=w.ght(w).f1(0,new A.b_6(u),x.W).h0(0)}else{r=$.bw2()
w=!v||w===D.dJ
v=p.d
q=r.aWB(w?v.w:v.z,o,f,e)
v=B.k9(q,new A.b_7(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ai(s).i("af<1,nX>")
w=B.Q(new B.af(s,new A.b_8(p,e,f,o,g,d),w),w.i("ar.E"))
return w},
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goH()
w=j.goH()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b3(i,i,C.u,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mw
u=!v
t=!u||w===D.dJ
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dJ?C.H:C.aE
q=B.b([],x.p)
if(w===D.B3||v)j.goH()
if(j.goH().c.a){v=!u||w===D.dJ?r:j.goH().c.c
p=!u||w===D.dJ?j.goH().c.c:r
o=j.gb0j()
n=!u||w===D.dJ?C.aE:C.H
j.gaiu()
m=j.gaiu()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.b3(i,A.bYI(new A.axI(),n,j.aXl(r-m,l,u,w)),C.u,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B4||w===D.dJ)j.goH()
return new B.eO(t,i,i,B.bUf(q,C.l,s,i,C.f,C.M,0,i,i,C.bY),i)}}
A.a0W.prototype={
gbD(){return[this.a,this.b]}}
A.a5a.prototype={
gbD(){return[this.a,this.b]}}
A.N6.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5c.prototype={
gac1(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayd.prototype={}
A.aEL.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahs.prototype={}
A.akv.prototype={}
A.akw.prototype={}
A.akD.prototype={}
A.KZ.prototype={
i5(d,e,f){}}
A.vL.prototype={}
A.hn.prototype={
gdN(){return null},
gagb(){var w,v=this
B.by()
B.by()
B.by()
w=v instanceof A.N5
if(w)return!0
return!(v instanceof A.N2)&&!(v instanceof A.N1)&&!(v instanceof A.N3)&&!(v instanceof A.N0)&&!w&&!(v instanceof A.N4)}}
A.a5g.prototype={
gdN(){return this.a.b}}
A.a5h.prototype={
gdN(){return this.a.b}}
A.a5i.prototype={
gdN(){return this.a.b}}
A.N1.prototype={}
A.N2.prototype={}
A.a5l.prototype={
gdN(){return this.a.b}}
A.N4.prototype={}
A.N5.prototype={
gdN(){return this.a.b}}
A.a5f.prototype={
gdN(){return this.a.b}}
A.a5e.prototype={
gdN(){return this.a.b}}
A.N0.prototype={
gdN(){return this.a.b}}
A.a5j.prototype={
gdN(){return this.a.gdN()}}
A.a5k.prototype={
gdN(){return this.a.gdN()}}
A.N3.prototype={
gdN(){return this.a.gdN()}}
A.G7.prototype={
Zh(d){this.V=d.b
this.T=d.c
this.a2=d.d},
afF(){var w=this,v=null,u=w.ah=B.byG(v,v)
u.ay=new A.aV6(w)
u.ch=new A.aV7(w)
u.CW=new A.aV8(w)
u.cy=new A.aV9(w)
u.cx=new A.aVa(w)
u=w.aJ=B.GW(v,-1,v)
u.A=new A.aVb(w)
u.a4=new A.aVc(w)
u.V=new A.aVd(w)
u=w.bz=B.a7e(v,w.a2,v)
u.p3=new A.aVe(w)
u.p4=new A.aVf(w)
u.RG=new A.aVg(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dB(d){return new B.F(d.b,d.d)},
kK(d){return!0},
mU(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bz
w===$&&B.a()
w.oE(d)
w=v.aJ
w===$&&B.a()
w.oE(d)
w=v.ah
w===$&&B.a()
w.oE(d)}else if(x.gJ.b(d))v.l6(new A.a5k(d))},
gNp(d){return new A.aVh(this)},
gNr(d){return new A.aVi(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdN()
v=w!=null?u.a_h(w):null
u.V.$2(d,v)
u.a4=C.bv},
gLb(d){return this.a4},
gFG(){var w=this.av
w===$&&B.a()
return w},
aL(d){this.fj(d)
this.av=!0},
aG(d){this.av=!1
this.f6(0)},
$ijz:1}
A.Op.prototype={
X(){return new A.VQ(B.b([],x.r),B.A(x.S,x.J),new A.aKY(B.A(x.y,x.dj)),null,null)}}
A.VQ.prototype={
t(d){var w,v=this,u=v.a4M(),t=v.CW
t.toString
t=v.aby(t.aB(0,v.ghJ().gp(0)))
w=v.aby(u)
v.a.toString
return new A.KQ(new A.a74(t,w,null),u,null)},
aby(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ai(w).i("af<1,ec>")
w=B.Q(new B.af(w,new A.bfX(this,d),v),v.i("ar.E"))
return d.aRq(w,this.cy)},
a4M(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.V5(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRF(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aR4(new A.EL(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazB(),t.c,t.d))}return r},
azC(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagb())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfV(v))
return}v.J(new A.bfW(v,e))},
nX(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4M(),new A.bfY(w)))}}
A.pR.prototype={
XH(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5b(B.a16(d.a.b,j.b,f),j.a)
w=A.bFk(d.at,e.at,f)
v=A.bFp(d.c,e.c,f)
u=A.bFr(d.d,e.d,f)
t=A.bHn(d.e,e.e,f)
s=A.kA(d.ch,e.ch,f,A.c6v(),x.cz)
s.toString
r=A.kA(d.CW,e.CW,f,A.c6u(),x.bO)
r.toString
u=A.byi(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VI(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byi(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRF(d,e,f,g){return this.VI(null,null,d,e,f,g,null)},
aR4(d){var w=null
return this.VI(w,d,w,w,w,w,w)},
aRq(d,e){var w=null
return this.VI(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
arp(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qo(n.a,new A.aKX())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.H)(v),++p){o=v[p]
if(o.k(0,D.fI))continue
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
adr(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKW(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRb(d){return this.adr(d,null)},
aRd(d){return this.adr(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Oq.prototype={
gbD(){return[this.a]}}
A.a0P.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mI.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KU.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yx.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKI.prototype={
L(){return"LabelDirection."+this.b}}
A.a5d.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a75.prototype={
gbD(){return[4,C.hN,16,D.xx,0,120,A.c6x(),!1,!1,!1,0,C.J,A.c6w()]}}
A.n6.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qp.prototype={}
A.rD.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.tA.prototype={
gbD(){return[this.a,this.b]}}
A.Gy.prototype={
gbD(){return[this.a]}}
A.Or.prototype={}
A.zj.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XH(v,w,d)}}
A.ahf.prototype={}
A.ahg.prototype={}
A.aht.prototype={}
A.akx.prototype={}
A.akA.prototype={}
A.ami.prototype={}
A.amj.prototype={}
A.amk.prototype={}
A.amm.prototype={}
A.amn.prototype={}
A.amo.prototype={}
A.amp.prototype={}
A.aqP.prototype={}
A.asu.prototype={}
A.aKY.prototype={
V5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.y7
u=new A.zn(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.qo(d,new A.aKZ())}catch(p){return D.y7}v=null
try{v=C.b.qo(w.a,new A.aL_())}catch(p){return D.y7}o=v.a
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
A.aml.prototype={}
A.aL0.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac1(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.I(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aQ1(new B.I(0,0,u,v))}d.a0m(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.H)(v),++t)d.aSS(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSO(a3,q,a4)
d.aST(a3,q,a4)
d.amf(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.R(o)
if(n.gq(o)!==p.length)throw B.e(B.e8("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vw(q,i,j,k))}}d.aT_(a3,s,a4)
if(w.gac1(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSY(a2,a3,v,f,new A.Gy(g),a4)}},
aSO(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxN(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.H)(n),++v){u=n[v]
t=p.ZR(o,e,u,f)
s=p.ajG(o,e,t,u,f)
r=p.ZT(o,e,t,u,f,!0)
q=p.ajF(o,e,t,u,f)
p.aSR(d,s,p.ZQ(o,e,t,u,f,!0),f,e)
p.aSL(d,q,r,f,e)
p.aSP(d,t,e)
p.aSN(d,t,e,f)}},
aSS(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bxN(a5.a),a8=A.bxN(a6.a)
if(a7.length!==a8.length)throw B.e(B.bI("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bU.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ai(n).i("cx<1>")
l=B.Q(new B.cx(n,m),m.i("ar.E"))
k=a2.ZR(a3,a5,o,b2)
j=a2.ZS(a3,a6.aRd(l),l,b2,k)
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
a0.seW(v.mK(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.I:w).gp(0)
a0.seW(null)}$.an()
a1=new B.mL(C.dx,C.bk,C.e4,C.et,C.dS).e5()
n=B.dJ(new B.I(0,0,t,s))
m=$.bU.b
if(m===$.bU)B.P(B.vu(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e5()
n=j.e
a4.drawPath((n==null?j.e=new B.mM(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aST(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZX(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fI)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).ae7(s,q,new B.r(p,o))}}},
aT_(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fL(b3,new A.aL3())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.H)(b3),++o){n=b3[o]
m=n.a
l=b1.ZX(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.P(B.rC(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.kx(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kx(q.$2(m,k))))
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
b0=B.l5(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.seW(a6.mK(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seW(null)}a4=a9.c
f.c=a4
if(a4===0){f.seW(null)
a4=B.c3(f.r)
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gp(0)}b2.DL(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.P(B.rC(d.a))
f.ae7(t,j,new B.r(h,g))}}},
ZS(d,e,f,g,h){var w=this.ajH(d,e,f,g,h)
return w},
ZR(d,e,f,g){return this.ZS(d,e,f,g,null)},
ajH(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.R(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.aE(new B.fn(d,a0))
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
s=new B.LU(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZT(d,e,f,g,h,i){var w=this,v=B.MN(f),u=J.R(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aE(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,s))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pp())
return v},
ajG(d,e,f,g,h){return this.ZT(d,e,f,g,h,!1)},
ZQ(d,e,f,g,h,i){var w=this,v=B.MN(f),u=J.R(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aE(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,0))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pp())
return v},
ajF(d,e,f,g,h){return this.ZQ(d,e,f,g,h,!1)},
aSR(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.byF(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.ij(e,r.r)},
aSL(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.byF(s,q.b,q.c,new B.I(v,0,u,t))
d.a.ij(e,r.r)},
aSP(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MP(B.MN(e),!1,B.b([],x.I)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kb:C.e4
u.e=C.et
u.r=v.gp(0)
u.seW(null)
u.c=f.x
u.r=v.gp(0)
$.lv()
u.z=new B.zs(C.aL,w.c*0.57735+0.5)
d.a.ij(A.aBd(e,f.cy).ed(w.b),this.f)},
aSN(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kb:C.e4
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
A.byF(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bWE(t)
d.a.ij(A.aBd(e,f.cy),s.f)},
aSY(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLC(b1),b3=J.R(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e8("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lv().a_o(b4,u.b)
s=u.a
r=w.k(0,C.iR)?new B.ks(1):w
q=new B.tw(new B.hR(s,a8,a8,C.bv,a8,a8,a8,a8,a8,a8,t),C.cV,C.x,r,a8,a8,a8,a8,C.bm,a8)
q.agv(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.H)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hN.gex()
k=o+(w-1)*4+(C.hN.gd3(0)+C.hN.gd4(0))
j=t-k-16
i=a7.a_p(b3,l,D.xx,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FW(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLB(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lv().KF(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lv().KF(new B.F(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b5.Wm(0,new A.aL1(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.H)(b0),++n){q=b0[n]
a5=A.bZj(q.r,q.w)
A:{if(D.DX===a5){a6=a3
break A}if(D.DY===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wm(0,new A.aL2(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZX(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
X0(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ak6(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fL(t,new A.aL4())
return t.length===0?null:t},
ak6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.H)(w),++r){q=w[r]
if(q.k(0,D.fI))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qp(s,f,g,C.b.hy(w,v),v.a,v.b)}else return null}}
A.vw.prototype={}
A.a74.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aL0()
t.a1x()
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
w.a=D.a_x
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
t=new A.abc(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zh(v.cx)
t.afF()
return t},
bw(d,e){e.sig(0,this.d)
e.sZ1(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.abc.prototype={
sig(d,e){if(this.fB.k(0,e))return
this.fB=e
this.bf()},
sZ1(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a16(d.cx)
w.bf()},
scN(d){if(this.fZ.k(0,d))return
this.fZ=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fC.i5(w,new A.a1m(t,v),new A.vL(u.fB,u.aI,u.fZ,x.o))
s.restore()},
a_h(d){var w=this,v=w.gC(0)
return new A.Or(w.fC.X0(d,v,new A.vL(w.fB,w.aI,w.fZ,x.o)))}}
A.Nu.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1m.prototype={
aQ1(d){this.a.a.clipRect(B.dJ(d),$.nM()[1],!0)
return null},
aef(d,e){d.aQ(this.a,e)},
Wm(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.ba(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lv()
s.Z_(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DL(d,e,f,g){var w=new B.ck($.an().r,C.ah,null,null,B.b([],x.v))
w.aE(new B.fn(d.a,d.b))
w.aE(new B.cw(e.a,e.b))
this.a.ij(A.aBd(w,g),f)}}
A.zn.prototype={
gbD(){return[this.a]}}
A.amw.prototype={}
A.a1x.prototype={}
A.b2z.prototype={
KF(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXW(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d8(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXX(d,e){var w,v
if(d==null)return D.a_I
w=d.b
v=e/2
return d.aRg(w>v?v:w)},
OX(d,e){var w,v=Math.max(C.d.cF(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b04(w)},
b04(d){if(d<1)return this.aJQ(d)
return this.a8B(d)},
aJQ(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8B(d*q)/q},
a8B(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aV(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
ajW(d){if(d>=1)return 1
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
a_o(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.iW
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vq)
v=v==null?null:v.ay
return v===!0?w.c3(C.mg):w},
ajO(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["K(qr)","D(eB)","~(v,fL)","K(ec,v)","U<~>()","K(K,qr)","bR(K,tz)","pD(K)","v(qp,qp)","Ik(oe)","I_(B,bE)","Jn(of)","vA(@)","wv(@)","ec(K)","CH(@)","ac(K,tz)","v_(dx<v_>)","E7(dx<aFA>)","K(vA)","K(wv)","wO(B,bE)","B8(z)","~()","qr(@)","~(hn,KW?)","xJ(@)","K(is)","D(fL)","~(v,is)","~(@)","jZ(nX)","c(nX)","jZ(bH<v,K>)","jZ(K)","nX(jZ)","~(hn,Or?)","ec(ec)","lJ(wl<lJ>)","zj(@)","U<of>(cg<of>)","tA(v)","v0(eB,K,ec,v)","rD(n6)","D(ec)","v(vw,vw)","K(fL)","U<oe>(cg<oe>)","v(v,v,K)","fL(fL,fL,K)","is(is,is,K)","mH(mH,mH,K)","CZ?(fL,v,is,v)","E(fL)","c(K,tz)","eB(eB,eB,K)","D(K)","n2(n2,n2,K)","ns(ns,ns,K)","kS(kS,kS,K)","lf(lf,lf,K)","f(kS)","f(lf)","ec(ec,ec,K)","mI(mI,mI,K)","v0(eB,K,ec,v{size:K?})","D(eB,ec)","K(r,r)","u<tA>(ec,u<v>)","y8(z)","u<rD>(u<n6>)","E(n6)","yv(eI<B?>)"])
A.aFw.prototype={
$1(d){var w=B.cT(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qr(J.a6(v==null?"":v),A.p5(w.h(0,"revenue_net")),A.p5(w.h(0,"expense_net")),A.p5(w.h(0,"result_net")))},
$S:z+24}
A.aFx.prototype={
$1(d){var w,v,u,t=B.cT(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.a6(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.p5(t.h(0,"gross"))
u=B.bk(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vA(s,r,w,v,u,A.p5(t.h(0,"avg_basket")))},
$S:z+12}
A.aFy.prototype={
$1(d){var w,v=B.cT(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.a6(t==null?"unbekannt":t)
w=B.bk(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wv(u,t,w,A.p5(v.h(0,"gross")))},
$S:z+13}
A.aFP.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.R(d)
v=w.h(d,"code")
v=J.a6(v==null?"":v)
u=w.h(d,"name")
u=J.a6(u==null?"":u)
t=w.h(d,"direction")
return new A.CH(v,u,J.a6(t==null?"expense":t),A.ud(w.h(d,"net")),A.ud(w.h(d,"tax")),A.ud(w.h(d,"gross")))},
$S:z+15}
A.btP.prototype={
$1(d){return new A.v_(d.a9($.bX(),x.A))},
$S:z+17}
A.btQ.prototype={
$1(d){return new A.E7(d.a9($.bQg(),x.D))},
$S:z+18}
A.bvD.prototype={
$1(d){return E.aFz()},
$S:z+38}
A.btR.prototype={
$1(d){var w=d.a9($.xv(),x.P)
return d.a9($.avF(),x.a).G6(w)},
$S:z+40}
A.btO.prototype={
$1(d){var w=d.a9($.xv(),x.P)
return d.a9($.avF(),x.a).G1(w)},
$S:z+47}
A.btN.prototype={
$1(d){return this.ajx(d)},
ajx(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.a9($.bX(),x.A).fG("finance_balance_kpis",t),$async$$1)
case 3:s=r.cT(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:212}
A.aFv.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.ar(0,$.avF(),x.a).pI(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFu.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.ar(0,$.avF(),x.a).LO(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFN.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwy()
if(s.e==null)B.P(B.T(y.b))
s.gc5().bA(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFF.prototype={
$0(){return this.a.JB(this.b,this.c)},
$S:0}
A.aFG.prototype={
$0(){return this.a.Bu(this.b,this.c)},
$S:0}
A.aFH.prototype={
$0(){var w=x.z
return B.aV(this.a,!1).e3(B.e9(new A.aFE(),null,w),w)},
$S:0}
A.aFE.prototype={
$1(d){return F.CY},
$S:z+69}
A.aFI.prototype={
$0(){return B.oj(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFJ.prototype={
$0(){var w=this
return w.a.Bv(w.b,w.c,w.d)},
$S:0}
A.aFM.prototype={
$0(){return D.atK},
$S:61}
A.aFL.prototype={
$2(d,e){return new A.I_(B.j(d),null)},
$S:z+10}
A.aFK.prototype={
$1(d){return new A.Jn(d,null)},
$S:z+11}
A.aFD.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.h("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.hX(B.b([B.cX(C.bR,w,w,new A.aFB(u),w,w),B.dj(F.v2,new A.aFC(u),B.dM(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.v3)},
$S:45}
A.aFB.prototype={
$0(){B.aV(this.a,!1).cJ(!1)
return null},
$S:0}
A.aFC.prototype={
$0(){B.aV(this.a,!1).cJ(!0)
return null},
$S:0}
A.biq.prototype={
$0(){var w=this.a.ar(0,$.xv().geP(),x.V),v=E.aFz()
w.ra(0,v)
return v},
$S:0}
A.bir.prototype={
$0(){var w=this.a.ar(0,$.xv().geP(),x.V),v=new B.b7(Date.now(),0,!1),u=new E.lJ(B.bK(B.aT(v),1,1,0,0,0,0),v)
w.ra(0,u)
return u},
$S:0}
A.bis.prototype={
$0(){return this.a.IW(this.b,this.c)},
$S:0}
A.bip.prototype={
$2(d,e){return new B.oN(B.V(d).aQB(B.V(d).ax.aRv(C.h,C.m)),e,null)},
$S:1009}
A.boL.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.ds(),s=A.Od(!1,C.nT,"Umsatz 7 %",t.ap(u.a),w),r=A.Od(!1,C.nT,"Umsatz 19 %",t.ap(u.b),w),q=A.Od(!0,D.a9Y,"Umsatz netto",t.ap(u.c),w),p=A.Od(!1,D.a9X,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return B.a5U(1.7,B.b([s,r,q,p,A.Od(!0,C.nJ,"Ergebnis",n,o<0?C.a8:C.al),A.Od(!1,C.fL,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.jU,!0)},
$S:109}
A.aKH.prototype={
$0(){return F.T9},
$S:61}
A.aKG.prototype={
$2(d,e){var w=null
return B.bi(C.a8,B.h("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,B.y(C.h,13,C.j),w,w,w),C.eE,w,C.A,w,3)},
$S:223}
A.aKF.prototype={
$1(d){return new A.Ik(d,null)},
$S:z+9}
A.bfF.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.ds(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ai(g).i("af<1,K>"),e=f.i("ar.E"),d=B.Q(new B.af(g,new A.bfu(),f),e)
i=A.jQ(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.af(g,new A.bfv(),f),e)
d=A.jQ(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.af(g,new A.bfw(),f),e)
k=A.jQ(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.al(h.b,1)
v=B.Q(new B.af(g,new A.bfx(),f),e)
w=A.jQ(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.al(h.a,1)
u=B.Q(new B.af(g,new A.bfy(),f),e)
v=A.jQ(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.al(r.c,1)
t=B.Q(new B.af(g,new A.bfz(),f),e)
u=A.jQ(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.al(h.c,1)
s=B.Q(new B.af(g,new A.bfA(),f),e)
t=A.jQ(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.af(g,new A.bfB(),f),e)
h=A.jQ(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.af(g,new A.bfC(m),f),e)
m=A.jQ(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.af(g,new A.bfD(l),f),e)
l=A.jQ(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.al(j,1)
j=B.Q(new B.af(g,new A.bfE(j),f),e)
return B.a5U(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jQ(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jU,!0)},
$S:109}
A.bfu.prototype={
$1(d){return d.b},
$S:z+0}
A.bfv.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfw.prototype={
$1(d){return d.d},
$S:z+0}
A.bfx.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfy.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfz.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfA.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfB.prototype={
$1(d){return d.d},
$S:z+0}
A.bfC.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfD.prototype={
$1(d){return this.a},
$S:z+0}
A.bfE.prototype={
$1(d){return this.a},
$S:z+0}
A.bfG.prototype={
$0(){return A.bAE(this.b,1.45,new A.TR(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfH.prototype={
$0(){return A.bAE(this.b,1.6,new A.U2(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsM.prototype={
$1(d){var w=this,v=null,u=B.aM(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.h(w.a,v,v,v,B.bz(C.h,18,C.n),v,v,v),1),B.ff(v,v,D.ac5,v,v,new A.bsL(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.h(w.b,v,v,v,B.y(C.o,12,C.aP),v,v,v),C.D],t))
s.push(C.r)
s.push(B.c5(new B.mG(w.c,w.d,v),v,17976931348623157e292))
return B.Mm(v,C.p,new B.ad(C.ae,B.a7(s,C.z,C.f,C.M),v),v,v,v,C.fm,C.m0,v,new B.dc(u,C.J),v)},
$S:1010}
A.bsL.prototype={
$0(){return B.aV(this.a,!1).eq()},
$S:0}
A.bfI.prototype={
$0(){var w=this.a,v=B.b5(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAE(this.b,2.4,new A.Yc(w.w,w.y,w.z,null),C.b.cd(u," \xb7 "),v)
return null},
$S:0}
A.bnU.prototype={
$2(d,e){return d<e?d:e},
$S:49}
A.bnV.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bnW.prototype={
$1(d){return A.aKW(null,1.4,null,C.a8,0.35,D.agD,D.DO,null,!1,!1,!1,!1,D.Fi,!1,10,D.Y3,!0,C.lu,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+14}
A.b6j.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6l.prototype={
$2(d,e){var w=null
return B.h(this.a.aLa(d),w,w,w,B.y(C.o,10,C.N),w,w,w)},
$S:z+16}
A.b6m.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.uR
return new B.ad(C.l0,B.h(C.c.cP(this.a[v].a,5),w,w,w,B.y(C.o,9,C.N),w,w,w),w)},
$S:z+6}
A.b6k.prototype={
$1(d){return D.a8u},
$S:z+7}
A.b79.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7a.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7b.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b7c.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.uR
return new B.ad(C.l0,B.h(this.a[v],w,w,w,B.y(C.h,12,C.n),w,w,w),w)},
$S:z+6}
A.bgg.prototype={
$1(d){return d.d},
$S:z+19}
A.bgh.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.bq7.prototype={
$1(d){return d.d},
$S:z+20}
A.bq8.prototype={
$2(d,e){return d>e?d:e},
$S:49}
A.b4I.prototype={
$0(){return D.atP},
$S:61}
A.b4H.prototype={
$2(d,e){return new A.wO("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4G.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bi(m,B.a7(B.b([B.h("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.N),m,m,m),C.D,B.h("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.o,12.5,C.j),m,m,m),C.r,B.jO(C.c5,B.b([B.f4(C.xZ,D.aHx,new A.b4A(w,v),m),B.f4(D.abK,D.aGo,new A.b4B(w,v),m)],u),C.d7,8,8)],u),C.z,C.f,C.i),C.ab,m,C.A,m,3)}w=new A.b4J(d)
t=C.b.fP(n.a.e.d,0,new A.b4C())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jw(new A.b4D(new A.b4K(w),r,w,s))
v=J.R(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.D,B.ak(B.b([B.ay(B.h("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.o,11,C.j),m,m,m),1),B.nn(D.acW,D.aGL,new A.b4E(q,p),m),B.nn(D.acz,D.aGv,new A.b4F(q,p,d),m)],o),C.l,C.f,C.i,0,m,m)],o),C.ad,C.f,C.i)},
$S:221}
A.b4A.prototype={
$0(){return A.av0(this.a,this.b,null)},
$S:0}
A.b4B.prototype={
$0(){return A.auY(this.a,this.b)},
$S:0}
A.b4J.prototype={
$1(d){var w=B.bk(J.a2(this.a,d))
return w==null?null:w},
$S:1011}
A.b4K.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.al(v,1)
w=B.b5(w,".",",")+" %"}return w},
$S:34}
A.b4C.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4D.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jQ(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hW,o.$1("liquidity1_pct")),m=A.jQ(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hW,o.$1("liquidity2_pct")),l=A.jQ(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hW,o.$1("liquidity3_pct"))
o=A.jQ(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hW,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.al(w,1)
w=B.b5(w,".",",")+" %"}w=A.jQ(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hW,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.ds()
v=u.ap(v)
return B.a5U(p,B.b([n,m,l,o,w,A.jQ(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.hW,v)],x.p),q,12,12,C.jU,!0)},
$S:109}
A.b4E.prototype={
$0(){return A.auY(this.a,this.b)},
$S:0}
A.b4F.prototype={
$0(){return A.av0(this.a,this.b,this.c)},
$S:0}
A.bsK.prototype={
$1(d){return new A.B8(this.a,new A.bsJ(this.b),this.c,null)},
$S:z+22}
A.bsJ.prototype={
$0(){var w=this.a,v=$.bwx()
if(w.e==null)B.P(B.T(y.b))
w.gc5().bA(v)},
$S:0}
A.b4u.prototype={
$0(){},
$S:0}
A.b4v.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4w.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4y.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.qN(u.b,B.bK(2024,1,1,0,0,0,0),null,r,new B.b7(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4x(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4x.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4z.prototype={
$0(){return B.aV(this.a,!1).eq()},
$S:0}
A.b4L.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4M.prototype={
$1(d){return new A.xJ(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axZ.prototype={
$1(d){return d.e},
$S:z+27}
A.ay_.prototype={
$2(d,e){return d+e},
$S:49}
A.ay1.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ay3.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ay4.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aef(v.d,v.e)},
$S:0}
A.axH.prototype={
$1(d){return 0},
$S:1012}
A.axG.prototype={
$2(d,e){return B.fq(C.c_,this.a.alY(e),C.q,C.bA,null)},
$S:1013}
A.b_4.prototype={
$1(d){return d.a},
$S:z+31}
A.b_5.prototype={
$1(d){return d.b},
$S:z+32}
A.b_6.prototype={
$1(d){return new A.jZ(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_7.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mw||v===D.dJ))t=1-t
return new A.jZ(d,t*w.d)},
$S:z+34}
A.b_8.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goH(),p=d.a
r.goH()
r=$.lv()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.al(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.al(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.al(v/1000,1)
t="K"}else{u=C.d.al(v,r.ajW(Math.abs(s.b-s.c)))
t=""}if(C.c.fz(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nX(d,q.c.b.$2(p,new A.tz(u+t,s.e)))},
$S:z+35}
A.aV6.prototype={
$1(d){this.a.l6(new A.a5g(d))},
$S:161}
A.aV7.prototype={
$1(d){this.a.l6(new A.a5h(d))},
$S:44}
A.aV8.prototype={
$1(d){this.a.l6(new A.a5i(d))},
$S:28}
A.aV9.prototype={
$0(){this.a.l6(D.a1j)},
$S:0}
A.aVa.prototype={
$1(d){this.a.l6(new A.N2())},
$S:47}
A.aVb.prototype={
$1(d){this.a.l6(new A.a5l(d))},
$S:46}
A.aVc.prototype={
$0(){this.a.l6(D.a1k)},
$S:0}
A.aVd.prototype={
$1(d){this.a.l6(new A.N5(d))},
$S:105}
A.aVe.prototype={
$1(d){this.a.l6(new A.a5f(d))},
$S:164}
A.aVf.prototype={
$1(d){this.a.l6(new A.a5e(d))},
$S:165}
A.aVg.prototype={
$1(d){return this.a.l6(new A.N0(d))},
$S:145}
A.aVh.prototype={
$1(d){return this.a.l6(new A.a5j(d))},
$S:63}
A.aVi.prototype={
$1(d){return this.a.l6(new A.N3(d))},
$S:57}
A.bfX.prototype={
$1(d){var w=this.a.db.h(0,C.b.hy(this.b.ch,d))
return d.aRb(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfV.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bfW.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fL(w,new A.bfU())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.Gy(w))},
$S:0}
A.bfU.prototype={
$2(d,e){return C.d.cz(e.b,d.b)},
$S:z+8}
A.bfY.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKX.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.btB.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFq(t?A.bAp(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tA(w,new A.yx(!0,A.bBc(),new A.btA(v)))},
$S:z+41}
A.btA.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUd(A.bAp(d,e,f),w,A.c21(d,e,f))},
$S:z+42}
A.bty.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j6(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rD(C.d.j(d.b),w)},
$S:z+43}
A.aKZ.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aL_.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.aL3.prototype={
$2(d,e){return C.d.cz(e.c.b,d.c.b)},
$S:z+45}
A.aL1.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aL2.prototype={
$0(){this.a.aef(this.b,this.c)},
$S:0}
A.aL4.prototype={
$2(d,e){return C.d.cz(d.w,e.w)},
$S:z+8}
A.axS.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axT.prototype={
$2(d,e){return d+e},
$S:49}
A.axW.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ai(v).i("iX<1>")).aD(0,new A.axX(w,this.a/(u+1),this.c))},
$S:0}
A.axX.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axU.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axV.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aI_.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1014}
A.aBe.prototype={
$1(d){return d},
$S:1015};(function aliases(){var w=A.KP.prototype
w.a0m=w.i5
w.amf=w.aSU
w.amg=w.ae8
w=A.Ts.prototype
w.aoR=w.l
w=A.KZ.prototype
w.a0n=w.i5
w=A.G7.prototype
w.a16=w.Zh})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5E","bUa",72)
var q
v(q=A.Tu.prototype,"gaEZ","aF_",23)
v(q,"gaE2","Ic",4)
v(q,"gaEJ","In",4)
u(A.Tv.prototype,"gasJ","asK",25)
t(A,"c4q",3,null,["$3"],["bRt"],49,0)
t(A,"c4r",3,null,["$3"],["bRu"],50,0)
t(A,"c4s",3,null,["$3"],["bRv"],51,0)
t(A,"c4u",4,null,["$4"],["c5h"],52,0)
w(A,"c4t","c5g",53)
s(A,"bAI","c5i",54)
t(A,"c4l",3,null,["$3"],["bUe"],55,0)
w(A,"a_g","c7G",56)
w(A,"av2","c5l",7)
t(A,"c4n",3,null,["$3"],["bUZ"],57,0)
t(A,"c4p",3,null,["$3"],["c_d"],58,0)
t(A,"c4m",3,null,["$3"],["bUY"],59,0)
t(A,"c4o",3,null,["$3"],["c_c"],60,0)
w(A,"ceX","bUX",61)
w(A,"ceY","c_b",62)
r(A.Y1.prototype,"ga4K","ayi",30)
u(A.VQ.prototype,"gazB","azC",36)
t(A,"c6v",3,null,["$3"],["bVq"],63,0)
t(A,"c6u",3,null,["$3"],["bRw"],64,0)
w(A,"c6y","c7H",1)
t(A,"bLZ",4,null,["$5$size","$4"],["bKo",function(d,e,f,g){return A.bKo(d,e,f,g,null)}],65,0)
s(A,"bBc","c7F",66)
s(A,"bM_","c46",67)
s(A,"bM2","c5o",68)
s(A,"bM1","c5k",3)
s(A,"bM0","c5j",3)
w(A,"c6x","bLC",70)
w(A,"c6w","bLB",71)
t(A,"a_n",3,null,["$3"],["c6t"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.S,[A.a6Q,A.ago,A.alz,A.IU,A.Jn,A.agm,A.I_,A.Ik,A.akT,A.ama,A.UE,A.Yc,A.TR,A.U2,A.amG,A.aiY,A.C7,A.asr,A.wO,A.KQ,A.AB])
u(B.B,[A.v_,A.E7,A.bh,A.ahs,A.ahi,A.ahk,A.ahl,A.aha,A.akD,A.aho,A.ahm,A.ayd,A.asv,A.ay0,A.ahj,A.KZ,A.a5V,A.tz,A.aqR,A.aqQ,A.ah9,A.akC,A.eB,A.akz,A.akB,A.ap_,A.alq,A.ata,A.akA,A.akj,A.aky,A.axF,A.bfO,A.axI,A.ah6,A.nX,A.akv,A.akw,A.vL,A.hn,A.amj,A.amm,A.ahf,A.aht,A.ahg,A.akx,A.amp,A.amn,A.asu,A.aqP,A.aKY,A.aml,A.vw,A.a1m,A.amw,A.a1x,A.b2z])
u(B.uY,[A.qr,A.vA,A.wv,A.aAD,A.aBK,A.oe,A.CH,A.of])
u(B.o1,[A.aFw,A.aFx,A.aFy,A.aFP,A.btP,A.btQ,A.bvD,A.btR,A.btO,A.btN,A.aFE,A.aFK,A.aFD,A.aKF,A.bfu,A.bfv,A.bfw,A.bfx,A.bfy,A.bfz,A.bfA,A.bfB,A.bfC,A.bfD,A.bfE,A.bsM,A.bnW,A.b6k,A.b79,A.b7a,A.bgg,A.bq7,A.b4G,A.b4J,A.b4K,A.bsK,A.b4M,A.axZ,A.ay1,A.axH,A.b_4,A.b_5,A.b_6,A.b_7,A.b_8,A.aV6,A.aV7,A.aV8,A.aVa,A.aVb,A.aVd,A.aVe,A.aVf,A.aVg,A.aVh,A.aVi,A.bfX,A.bfY,A.aKX,A.btB,A.btA,A.bty,A.aKZ,A.aL_,A.axS,A.aBe])
t(A.yv,B.fh)
u(B.xW,[A.aFv,A.aFu,A.aFN,A.aFF,A.aFG,A.aFH,A.aFI,A.aFJ,A.aFM,A.aFB,A.aFC,A.biq,A.bir,A.bis,A.aKH,A.bfG,A.bfH,A.bsL,A.bfI,A.b4I,A.b4A,A.b4B,A.b4E,A.b4F,A.bsJ,A.b4u,A.b4v,A.b4w,A.b4y,A.b4x,A.b4z,A.b4L,A.ay4,A.aV9,A.aVc,A.bfV,A.bfW,A.aL1,A.aL2,A.axW])
u(B.y3,[A.yw,A.anU,A.a6R,A.ahe])
u(B.xX,[A.aFL,A.bip,A.boL,A.aKG,A.bfF,A.bnU,A.bnV,A.b6j,A.b6l,A.b6m,A.b7b,A.b7c,A.bgh,A.bq8,A.b4H,A.b4C,A.b4D,A.ay_,A.ay3,A.axG,A.bfU,A.aL3,A.aL4,A.axT,A.axX,A.axU,A.axV,A.aI_])
u(B.M,[A.B8,A.Ru])
u(B.a3,[A.Tu,A.Y1])
u(B.NL,[A.KV,A.Op])
u(B.xB,[A.Tv,A.VQ])
t(A.a0W,A.ahs)
t(A.ah5,A.a0W)
t(A.a0G,A.ah5)
u(A.a0G,[A.ahh,A.amk])
t(A.nY,A.ahh)
u(B.HZ,[A.axQ,A.adS,A.CY,A.aEL,A.aKI,A.Nu])
t(A.fL,A.ahi)
t(A.is,A.ahk)
t(A.mH,A.ahl)
t(A.a0N,A.aha)
t(A.N6,A.akD)
u(A.N6,[A.ahn,A.amo])
t(A.a0S,A.ahn)
t(A.a0T,A.aho)
t(A.CZ,A.ahm)
u(A.ayd,[A.KW,A.Or])
t(A.adU,A.asv)
t(A.ahp,A.adU)
t(A.a0U,A.ahp)
u(B.bf,[A.xJ,A.zj])
t(A.uB,A.ahj)
t(A.KP,A.KZ)
u(A.KP,[A.ay2,A.aL0])
u(B.Ol,[A.a0Q,A.a74])
u(B.J,[A.G7,A.ah7])
u(A.G7,[A.ab_,A.abc])
t(A.qi,A.aqR)
t(A.acq,A.aqQ)
t(A.pg,A.ah9)
t(A.v1,A.akC)
t(A.yy,A.akz)
t(A.pD,A.akB)
t(A.Q3,A.ap_)
t(A.n2,A.alq)
t(A.ns,A.ata)
u(A.pD,[A.alp,A.at9])
t(A.kS,A.alp)
t(A.lf,A.at9)
t(A.a5d,A.akA)
u(A.a5d,[A.alo,A.at8])
t(A.a65,A.alo)
t(A.aef,A.at8)
t(A.MT,A.akj)
t(A.v0,A.aky)
t(A.N_,A.v0)
t(A.acr,B.fA)
t(A.ah8,A.ah7)
t(A.Ts,A.ah8)
t(A.a0H,A.Ts)
t(A.jZ,A.ah6)
t(A.a5a,A.akv)
t(A.a5c,A.akw)
u(A.hn,[A.a5g,A.a5h,A.a5i,A.N1,A.N2,A.a5l,A.N4,A.N5,A.a5f,A.a5e,A.N0,A.a5j,A.a5k,A.N3])
t(A.pR,A.amk)
t(A.ec,A.amj)
t(A.Oq,A.amm)
t(A.a0P,A.ahf)
t(A.mI,A.aht)
t(A.KU,A.ahg)
t(A.yx,A.akx)
t(A.EL,A.amo)
t(A.a75,A.amp)
t(A.ami,A.eB)
t(A.n6,A.ami)
t(A.qp,A.n6)
t(A.rD,A.amn)
t(A.tA,A.asu)
t(A.Gy,A.aqP)
t(A.zk,A.aml)
t(A.zn,A.amw)
w(A.aha,A.bh)
w(A.ahh,A.bh)
w(A.ahi,A.bh)
w(A.ahk,A.bh)
w(A.ahl,A.bh)
w(A.ahm,A.bh)
w(A.ahn,A.bh)
w(A.aho,A.bh)
w(A.ahp,A.bh)
w(A.ahj,A.bh)
w(A.ah5,A.bh)
w(A.ah9,A.bh)
w(A.akj,A.bh)
w(A.aky,A.bh)
w(A.akz,A.bh)
w(A.akB,A.bh)
w(A.akC,A.bh)
w(A.alp,A.bh)
w(A.alo,A.bh)
w(A.alq,A.bh)
w(A.ap_,A.bh)
w(A.aqQ,A.bh)
w(A.aqR,A.bh)
w(A.asv,A.bh)
w(A.at9,A.bh)
w(A.at8,A.bh)
w(A.ata,A.bh)
w(A.ah6,A.bh)
v(A.ah7,B.az)
w(A.ah8,B.dO)
v(A.Ts,B.a48)
w(A.ahs,A.bh)
w(A.akv,A.bh)
w(A.akw,A.bh)
w(A.akD,A.bh)
w(A.ahf,A.bh)
w(A.ahg,A.bh)
w(A.aht,A.bh)
w(A.akx,A.bh)
w(A.akA,A.bh)
w(A.ami,A.bh)
w(A.amj,A.bh)
w(A.amk,A.bh)
w(A.amm,A.bh)
w(A.amn,A.bh)
w(A.amo,A.bh)
w(A.amp,A.bh)
w(A.aqP,A.bh)
w(A.asu,A.bh)
w(A.aml,A.bh)
w(A.amw,A.bh)})()
B.bqk(b.typeUniverse,JSON.parse('{"a6Q":{"S":[],"c":[]},"E7":{"aFA":[]},"yv":{"fh":["be<~>"],"fh.T":"be<~>"},"Jn":{"S":[],"c":[]},"I_":{"S":[],"c":[]},"yw":{"aX":[],"M":[],"c":[]},"ago":{"S":[],"c":[]},"alz":{"S":[],"c":[]},"anU":{"aX":[],"M":[],"c":[]},"IU":{"S":[],"c":[]},"agm":{"S":[],"c":[]},"Ik":{"S":[],"c":[]},"wO":{"S":[],"c":[]},"B8":{"M":[],"c":[]},"a6R":{"aX":[],"M":[],"c":[]},"akT":{"S":[],"c":[]},"ama":{"S":[],"c":[]},"UE":{"S":[],"c":[]},"Yc":{"S":[],"c":[]},"TR":{"S":[],"c":[]},"U2":{"S":[],"c":[]},"amG":{"S":[],"c":[]},"aiY":{"S":[],"c":[]},"C7":{"S":[],"c":[]},"asr":{"S":[],"c":[]},"ahe":{"aX":[],"M":[],"c":[]},"Tu":{"a3":["B8"]},"KV":{"M":[],"c":[]},"Tv":{"a3":["KV"]},"nY":{"bh":[]},"fL":{"bh":[]},"is":{"bh":[]},"mH":{"bh":[]},"CZ":{"bh":[]},"xJ":{"bf":["nY"],"b9":["nY"],"b9.T":"nY","bf.T":"nY"},"a0N":{"bh":[]},"a0S":{"bh":[]},"a0T":{"bh":[]},"a0U":{"bh":[]},"uB":{"bh":[]},"a0Q":{"aU":[],"c":[]},"ab_":{"J":[],"L":[],"jz":[],"aS":[]},"pD":{"bh":[]},"n2":{"bh":[]},"ns":{"bh":[]},"kS":{"bh":[]},"lf":{"bh":[]},"v0":{"bh":[]},"a0G":{"bh":[]},"qi":{"bh":[]},"acq":{"bh":[]},"pg":{"bh":[]},"v1":{"bh":[]},"yy":{"bh":[]},"adU":{"bh":[]},"Q3":{"bh":[]},"a65":{"bh":[]},"aef":{"bh":[]},"MT":{"bh":[]},"N_":{"bh":[]},"KQ":{"S":[],"c":[]},"Ru":{"M":[],"c":[]},"Y1":{"a3":["Ru"]},"jZ":{"bh":[]},"acr":{"fA":[],"aU":[],"c":[]},"a0H":{"dO":["J","ho"],"J":[],"az":["J","ho"],"L":[],"aS":[],"az.1":"ho","dO.1":"ho","az.0":"J"},"AB":{"S":[],"c":[]},"a0W":{"bh":[]},"a5a":{"bh":[]},"N6":{"bh":[]},"a5c":{"bh":[]},"a5g":{"hn":[]},"a5h":{"hn":[]},"a5i":{"hn":[]},"N1":{"hn":[]},"N2":{"hn":[]},"a5l":{"hn":[]},"N4":{"hn":[]},"N5":{"hn":[]},"a5f":{"hn":[]},"a5e":{"hn":[]},"N0":{"hn":[]},"a5j":{"hn":[]},"a5k":{"hn":[]},"N3":{"hn":[]},"G7":{"J":[],"L":[],"jz":[],"aS":[]},"Op":{"M":[],"c":[]},"VQ":{"a3":["Op"]},"pR":{"bh":[]},"ec":{"bh":[]},"mI":{"bh":[]},"n6":{"eB":[],"bh":[]},"qp":{"n6":[],"eB":[],"bh":[]},"rD":{"bh":[]},"tA":{"bh":[]},"Gy":{"bh":[]},"zj":{"bf":["pR"],"b9":["pR"],"b9.T":"pR","bf.T":"pR"},"Oq":{"bh":[]},"a0P":{"bh":[]},"KU":{"bh":[]},"yx":{"bh":[]},"a5d":{"bh":[]},"EL":{"bh":[]},"a75":{"bh":[]},"zk":{"bh":[]},"a74":{"aU":[],"c":[]},"abc":{"J":[],"L":[],"jz":[],"aS":[]},"zn":{"bh":[]}}'))
B.bJS(b.typeUniverse,JSON.parse('{"KP":1,"N6":1,"KZ":1,"G7":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CH"),e:w("be<oe>"),aN:w("be<of>"),fM:w("be<Z<f,@>?>"),b:w("be<~>"),W:w("jZ"),B:w("nY"),dB:w("fL"),gF:w("uB"),fj:w("is"),G:w("mH"),bO:w("mI"),k:w("av"),C:w("a1x<K>"),dO:w("uJ"),R:w("a4<f,@>"),g:w("hJ"),bz:w("lE<b7>"),f0:w("o7"),E:w("bh"),F:w("yv"),X:w("oe"),P:w("lJ"),D:w("v_"),a:w("aFA"),d:w("of"),cw:w("eB"),L:w("ho"),m:w("dn<v,E>"),cm:w("kS"),dv:w("n2"),M:w("C<nX>"),I:w("C<bE0>"),O:w("C<fL>"),Y:w("C<is>"),U:w("C<eB>"),K:w("C<a5V>"),u:w("C<ec>"),bC:w("C<vw>"),aA:w("C<u<eB>>"),v:w("C<ee>"),r:w("C<Gy>"),s:w("C<f>"),eg:w("C<tw>"),df:w("C<qp>"),p:w("C<c>"),n:w("C<K>"),t:w("C<v>"),eF:w("bj<a3<M>>"),Z:w("n6"),cz:w("ec"),hf:w("pR"),dj:w("zk"),fT:w("rD"),c_:w("i4<p_<be<~>>>"),x:w("zn<fL>"),y:w("zn<ec>"),J:w("u<v>"),ef:w("vA"),c:w("Z<f,@>"),f:w("Z<@,@>"),gj:w("af<K,K>"),w:w("ka"),aU:w("B"),Q:w("vL<nY>"),o:w("vL<pR>"),dc:w("ee"),eo:w("q6"),gJ:w("q7"),V:w("mg<lJ>"),N:w("f"),A:w("nm"),bP:w("bw"),er:w("tw"),j:w("wv"),dw:w("qp"),bY:w("tA"),cZ:w("qr"),gc:w("jb"),es:w("lf"),bN:w("ns"),l:w("c"),q:w("x6"),g4:w("ik<K>"),cJ:w("D"),i:w("K"),z:w("@"),S:w("v"),bn:w("xJ?"),f3:w("zj?"),T:w("u<@>?"),h:w("Z<f,@>?"),fF:w("Z<@,@>?"),cK:w("B?"),aD:w("jb?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AX=new B.nP(C.m,B.au("nP<E>"))
D.B3=new A.CY(0,"left")
D.mw=new A.CY(1,"top")
D.B4=new A.CY(2,"right")
D.dJ=new A.CY(3,"bottom")
D.axz=new A.qi(!1,A.bAI(),22,null)
D.ku=new A.pg(16,null,D.axz,!0)
D.a8v=new A.pD(C.E,null,2,null)
D.vS=new A.KU(!1,D.a8v,A.c6y(),!0)
D.a_o=new A.axQ(3,"spaceEvenly")
D.a_x=new B.xM(6,"dstIn")
D.Xm=new B.aW(3,3)
D.B7=new B.d8(D.Xm,D.Xm,C.a2,C.a2)
D.a_I=new B.bl(C.E,0,C.S,-1)
D.BG=new A.a5c()
D.a1j=new A.N1()
D.a1k=new A.N4()
D.aPz=new A.acq()
D.aly=w([],B.au("C<kS>"))
D.alz=w([],B.au("C<lf>"))
D.DK=new A.MT(D.aly,D.alz,!0)
D.a8e=new B.dF("Zeitraum",!1,null)
D.a8i=new B.dF("Konten (SKR 03)",!1,null)
D.xx=new A.aEL(0,"center")
D.aPO=new A.yx(!0,A.bBc(),A.bLZ())
D.DO=new A.yx(!1,A.bBc(),A.bLZ())
D.DP=new A.yy(!1,!0,null,A.av2(),A.a_g(),!0,null,A.av2(),A.a_g())
D.aPP=new A.yy(!0,!0,null,A.av2(),A.a_g(),!0,null,A.av2(),A.a_g())
D.a3E=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3p=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a3O=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a3I=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a39=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a38=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a49=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a3x=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a4c=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a46=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.arE=new B.dn([50,D.a3E,100,D.a3p,200,D.a3O,300,D.a3I,400,D.a39,500,D.a38,600,D.a49,700,D.a3x,800,D.a4c,900,D.a46],x.m)
D.dp=new B.rK(D.arE,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.ahE=w([8,4],x.t)
D.a8t=new A.pD(D.dp,null,0.4,D.ahE)
D.a8u=new A.pD(C.am,null,0.5,null)
D.fI=new A.eB(0/0,0/0)
D.axB=new A.qi(!0,A.bAI(),44,null)
D.mx=new A.pg(16,null,D.axB,!0)
D.axA=new A.qi(!0,A.bAI(),30,null)
D.my=new A.pg(16,null,D.axA,!0)
D.a8w=new A.v1(!1,D.mx,D.my,D.mx,D.my)
D.aPQ=new A.v1(!0,D.mx,D.my,D.mx,D.my)
D.DX=new A.Nu(0,"left")
D.a99=new A.Nu(1,"center")
D.DY=new A.Nu(2,"right")
D.a9d=new B.a9(57495,"MaterialIcons",null,!1)
D.xP=new B.a9(58927,"MaterialIcons",null,!1)
D.a9X=new B.a9(59005,"MaterialIcons",null,!0)
D.a9Y=new B.a9(59007,"MaterialIcons",null,!0)
D.a9Z=new B.a9(59011,"MaterialIcons",null,!1)
D.aaT=new B.a9(62589,"MaterialIcons",null,!1)
D.aac=new B.a9(61349,"MaterialIcons",null,!1)
D.abH=new B.aB(D.aac,20,C.h,null,null)
D.aaj=new B.a9(61487,"MaterialIcons",null,!1)
D.abJ=new B.aB(D.aaj,18,null,null,null)
D.abK=new B.aB(D.xP,18,null,null,null)
D.ac5=new B.aB(C.je,null,C.h,null,null)
D.ac6=new B.aB(C.lb,null,C.o,null,null)
D.acz=new B.aB(C.nO,16,null,null,null)
D.acH=new B.aB(C.xV,16,null,null,null)
D.a9o=new B.a9(57912,"MaterialIcons",null,!1)
D.acJ=new B.aB(D.a9o,null,C.a8,null,null)
D.aaS=new B.a9(62584,"MaterialIcons",null,!1)
D.acR=new B.aB(D.aaS,16,null,null,null)
D.acW=new B.aB(D.xP,16,null,null,null)
D.af6=new A.a6R(null)
D.aPV=new A.aKI(0,"horizontal")
D.y7=new A.zk(0,0,0,0,!1)
D.Fi=new A.Oq(0.5)
D.BM=new A.a75()
D.afb=new A.EL(D.BM,A.bM2(),10,A.bM_(),!0,A.bM1(),A.bM0(),!1,null,null,null)
D.aPX=new A.EL(D.BM,A.bM2(),10,A.bM_(),!0,A.bM1(),A.bM0(),!0,null,null,null)
D.agD=w([4,3],x.t)
D.avR=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.avH=new B.aG("receivables","Forderungen (kurzfristig)")
D.avw=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.avu=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avk=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.avp=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avO=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avG=new B.aG("equity","Eigenkapital")
D.pr=w([D.avR,D.avH,D.avw,D.avu,D.avk,D.avp,D.avO,D.avG],B.au("C<+(f,f)>"))
D.aQ0=w([],x.M)
D.alk=w([],x.O)
D.all=w([],x.Y)
D.alm=w([],B.au("C<mH>"))
D.aln=w([],B.au("C<mI>"))
D.aQ1=w([],x.U)
D.aQ2=w([],x.u)
D.alo=w([],x.r)
D.asj={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SY={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yN=new B.a4(D.SY,[0,0,0,0,0,0,0,C.cb],B.au("a4<f,B>"))
D.asg={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.arw=new B.a4(D.asg,[0,0,0,0],B.au("a4<f,v>"))
D.asB={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ap6=new B.a4(D.asB,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.ap0=new B.a4(D.asj,[D.yN,D.yN,D.yN,C.cb,C.cb,C.cb,D.arw,D.ap6],x.R)
D.api=new B.a4(D.SY,[0,0,0,0,0,0,0,C.cE],x.R)
D.asl={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apk=new B.a4(D.asl,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,K>"))
D.asf={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.arx=new B.a4(D.asf,[0,0,0,0,0,0,0,C.cE],x.R)
D.asO={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arA=new B.a4(D.asO,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a4h=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4p=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a3c=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a3A=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a3K=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a4E=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a2Z=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a3C=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a3N=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a47=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.arF=new B.dn([50,D.a4h,100,D.a4p,200,D.a3c,300,D.a3A,400,D.a3K,500,D.a4E,600,D.a2Z,700,D.a3C,800,D.a3N,900,D.a47],x.m)
D.SN=new B.rK(D.arF,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a7z=new B.al(48,48,48,48)
D.atK=new B.ad(D.a7z,C.bo,null)
D.atP=new B.ad(C.ae,C.bo,null)
D.alA=w([],B.au("C<n2>"))
D.alB=w([],B.au("C<ns>"))
D.Xn=new A.Q3(D.alA,D.alB)
D.awy=new B.fC("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awz=new B.fC("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awC=new B.fC("Automaten-Business","Umsatz je Automat",null,null)
D.awE=new B.fC("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awG=new B.fC("Top","Meistverkaufte Produkte",null,null)
D.awJ=new B.fC("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awK=new B.fC("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y3=new B.tg(C.I,C.v,0)
D.aF6=new B.ac("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aza=new B.de(D.aF6,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHk=new B.ac('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azd=new B.de(D.aHk,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aFq=new B.ac("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aze=new B.de(D.aFq,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHe=new B.ac("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azg=new B.de(D.aHe,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGH=new B.ac("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azh=new B.de(D.aGH,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGE=new B.ac("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azF=new B.de(D.aGE,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aQb=new B.W(!0,C.E,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFm=new B.ac("Demo",null,null,null,null,null,null,null,null,null)
D.aFB=new B.ac("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGo=new B.ac("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGv=new B.ac("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGL=new B.ac("sevDesk",null,null,null,null,null,null,null,null,null)
D.aHx=new B.ac("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zk=new A.adS(0,"auto")
D.aI9=new A.adS(1,"top")
D.aMs=new A.wO("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMt=new A.wO("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfx","bQg",()=>B.iv(new A.btP(),x.D))
w($,"cfy","avF",()=>B.iv(new A.btQ(),x.a))
w($,"cgx","xv",()=>B.b_X(new A.bvD(),x.P))
w($,"cfz","bwy",()=>C.aq.$1$1(new A.btR(),x.d))
w($,"cfw","bQf",()=>C.aq.$1$1(new A.btO(),x.X))
w($,"cfv","bwx",()=>C.aq.$1$1(new A.btN(),x.h))
w($,"cfu","bww",()=>B.ad8(A.c5E(),x.F,x.b))
w($,"c8r","bw2",()=>new A.axF())
v($,"cbM","lv",()=>new A.b2z())})()};
(a=>{a["3iwlOfY9GreGT4/RGYYQGNPJ2gU="]=a.current})($__dart_deferred_initializers__);