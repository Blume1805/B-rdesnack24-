((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oc(d,e,f,g,h){return new A.a6N(f,g,d,h,e,null)},
a6N:function a6N(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
v_:function v_(d){this.a=d},
E6:function E6(d){this.a=d},
bTY(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.R(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SB
w=x.f
v=x.N
u=x.z
t=A.aFM(B.cT(w.a(e.h(a0,"current")),v,u))
s=A.aFM(B.cT(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFM(B.cT(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cb
p=J.d1(p,new A.aFu(),x.cZ)
p=B.Q(p,p.$ti.i("ar.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cb
o=J.d1(o,new A.aFv(),x.ef)
o=B.Q(o,o.$ti.i("ar.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cb
q=J.d1(q,new A.aFw(),x.j)
q=B.Q(q,q.$ti.i("ar.E"))
n=B.cT(w.a(e.h(a0,"customer")),v,u)
m=B.bj(n.h(0,"purchases_count"))
m=m==null?null:C.d.a1(m)
if(m==null)m=0
l=A.p5(n.h(0,"app_gross"))
k=B.bj(n.h(0,"active_customers"))
k=k==null?null:C.d.a1(k)
if(k==null)k=0
n=A.p5(n.h(0,"avg_basket"))
u=B.cT(w.a(e.h(a0,"derived")),v,u)
v=A.p5(u.h(0,"gross_margin_pct"))
e=A.p5(u.h(0,"net_margin_pct"))
w=A.p5(u.h(0,"ebitda_margin_pct"))
j=A.p5(u.h(0,"cashflow_operating"))
i=A.bsG(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsG(u.h(0,"revenue_growth_mom_pct"))
g=A.bsG(u.h(0,"result_growth_yoy_pct"))
u=A.bsG(u.h(0,"result_growth_mom_pct"))
f=B.bj(J.a1(d,"days"))
f=f==null?null:C.d.a1(f)
if(f==null)f=1
return new A.oc(t,s,r,p,o,q,new A.aAB(m,l,k,n),new A.aBI(v,e,w,j,i,h,g,u),f)},
p5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
bsG(d){if(d==null)return null
if(typeof d=="number")return d
return B.hx(J.a6(d))},
qq:function qq(d,e,f,g){var _=this
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
aAB:function aAB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBI:function aBI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oc:function oc(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFu:function aFu(){},
aFv:function aFv(){},
aFw:function aFw(){},
aFM(d){var w=J.R(d),v=A.ud(w.h(d,"revenue_net_7")),u=A.ud(w.h(d,"revenue_net_19")),t=A.ud(w.h(d,"revenue_net")),s=A.ud(w.h(d,"expense_net")),r=A.ud(w.h(d,"result_net")),q=A.ud(w.h(d,"vat_collected")),p=A.ud(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.cb
w=J.d1(w,new A.aFN(),x._)
w=B.Q(w,w.$ti.i("ar.E"))
return new A.od(v,u,t,s,r,q,p,w)},
ud(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.hx(J.a6(d))
return w==null?0:w},
CG:function CG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
od:function od(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFN:function aFN(){},
bTX(d){return new A.yv(d,new B.i4(x.c_),C.bS)},
btE:function btE(){},
btF:function btF(){},
bvr:function bvr(){},
btG:function btG(){},
btD:function btD(){},
btC:function btC(){},
yv:function yv(d,e,f){this.r=d
this.a=e
this.f=f},
aFt:function aFt(d,e,f){this.a=d
this.b=e
this.c=f},
aFs:function aFs(d,e,f){this.a=d
this.b=e
this.c=f},
bTZ(){return new A.yw(null)},
aly(d,e,f,g,h){return new A.alx(e,h,g,f,d,null)},
yw:function yw(d){this.a=d},
aFL:function aFL(d){this.a=d},
aFD:function aFD(d,e,f){this.a=d
this.b=e
this.c=f},
aFE:function aFE(d,e,f){this.a=d
this.b=e
this.c=f},
aFF:function aFF(d){this.a=d},
aFC:function aFC(){},
aFG:function aFG(d){this.a=d},
aFH:function aFH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFK:function aFK(){},
aFJ:function aFJ(){},
aFI:function aFI(){},
aFB:function aFB(d,e){this.a=d
this.b=e},
aFz:function aFz(d){this.a=d},
aFA:function aFA(d){this.a=d},
agm:function agm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alx:function alx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anS:function anS(d,e){this.e=d
this.a=e},
bif:function bif(d){this.a=d},
big:function big(d){this.a=d},
bih:function bih(d,e,f){this.a=d
this.b=e
this.c=f},
bie:function bie(){},
IT:function IT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jm:function Jm(d,e){this.c=d
this.a=e},
boA:function boA(d){this.a=d},
agk:function agk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HZ:function HZ(d,e){this.c=d
this.a=e},
bAr(d,e,f,g,h){var w=null
return B.fK(w,w,!0,w,new A.bsB(h,g,e,f),d,w,!0,!0,x.H)},
jP(d,e,f,g,h,i,j,k,l,m,n){return new A.am8(g,n,i,e,d,m,f,k,l,j,null)},
auW(d,e){return A.c3q(d,e)},
c3q(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auW=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aT(D.az5)
t=4
o=e.au(0,$.c_(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hi("finance-balance-sync",B.A(n,n)),$async$auW)
case 7:r=g
q=B.cT(x.f.a(r.a),x.N,n)
l.Xd()
if(J.d(J.a1(q,"configured"),!1)){l.aT(D.az9)
w=1
break}if(J.d(J.a1(q,"ok"),!0)){o=$.bwl()
if(e.e==null)B.P(B.X(y.b))
e.gc5().bA(o)
l.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a1(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}else{o=J.a1(q,"error")
l.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Xd()
l.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auW,v)},
auZ(d,e,f){var w=0,v=B.q(x.H)
var $async$auZ=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.fK(null,null,!0,null,new A.bsz(f,e,e.au(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$auZ)
case 2:return B.o(null,v)}})
return B.p($async$auZ,v)},
a6O:function a6O(d){this.a=d},
aKF:function aKF(){},
aKE:function aKE(){},
aKD:function aKD(){},
Ij:function Ij(d,e){this.c=d
this.a=e},
bfD:function bfD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfs:function bfs(){},
bft:function bft(){},
bfu:function bfu(){},
bfv:function bfv(){},
bfw:function bfw(){},
bfx:function bfx(){},
bfy:function bfy(){},
bfz:function bfz(){},
bfA:function bfA(d){this.a=d},
bfB:function bfB(d){this.a=d},
bfC:function bfC(d){this.a=d},
bfE:function bfE(d,e){this.a=d
this.b=e},
bfF:function bfF(d,e){this.a=d
this.b=e},
bsB:function bsB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsA:function bsA(d){this.a=d},
akR:function akR(d){this.a=d},
am8:function am8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfG:function bfG(d,e){this.a=d
this.b=e},
UC:function UC(d,e,f){this.c=d
this.d=e
this.a=f},
Y9:function Y9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnJ:function bnJ(){},
bnK:function bnK(){},
bnL:function bnL(d){this.a=d},
TP:function TP(d,e,f){this.c=d
this.d=e
this.a=f},
b6h:function b6h(){},
b6j:function b6j(d){this.a=d},
b6k:function b6k(d){this.a=d},
b6i:function b6i(){},
U0:function U0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b77:function b77(){},
b78:function b78(){},
b79:function b79(){},
b7a:function b7a(d){this.a=d},
amE:function amE(d,e){this.c=d
this.a=e},
bge:function bge(){},
bgf:function bgf(){},
aiW:function aiW(d,e){this.c=d
this.a=e},
C6:function C6(d,e,f){this.c=d
this.d=e
this.a=f},
asp:function asp(d,e){this.c=d
this.a=e},
bpX:function bpX(){},
bpY:function bpY(){},
wO:function wO(d,e){this.c=d
this.a=e},
ahc:function ahc(d,e){this.e=d
this.a=e},
b4G:function b4G(){},
b4F:function b4F(){},
b4E:function b4E(d,e,f){this.a=d
this.b=e
this.c=f},
b4y:function b4y(d,e){this.a=d
this.b=e},
b4z:function b4z(d,e){this.a=d
this.b=e},
b4H:function b4H(d){this.a=d},
b4I:function b4I(d){this.a=d},
b4A:function b4A(){},
b4B:function b4B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4C:function b4C(d,e){this.a=d
this.b=e},
b4D:function b4D(d,e,f){this.a=d
this.b=e
this.c=f},
bsz:function bsz(d,e,f){this.a=d
this.b=e
this.c=f},
bsy:function bsy(d){this.a=d},
B7:function B7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ts:function Ts(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4s:function b4s(){},
b4t:function b4t(d){this.a=d},
b4u:function b4u(d){this.a=d},
b4w:function b4w(d,e){this.a=d
this.b=e},
b4v:function b4v(d,e){this.a=d
this.b=e},
b4x:function b4x(d){this.a=d},
bh:function bh(){},
bDR(d){return new A.KU(d,C.ay,C.dA,null,null)},
KU:function KU(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tt:function Tt(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.fz$=f
_.cW$=g
_.c=_.a=null},
b4J:function b4J(d,e){this.a=d
this.b=e},
b4K:function b4K(d){this.a=d},
axP(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alh:f,p=a0==null?16:a0,o=d==null?D.a_l:d,n=g==null,m=n?A.bwR(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xk:a3
n=n?A.bwR(r,r,r,r,r,r,r,r):g
w=j==null?D.DK:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.nW(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BF,s,w,i,n)},
axW(d,e,f,g,h){var w=d==null?D.ali:d,v=e==null?2:e,u=g==null?C.lu:g
return new A.fL(h,f===!0,w,v,u)},
bRf(d,e,f){var w=d.a
w=C.d.aV(w+(e.a-w)*f)
return A.axW(A.ky(d.c,e.c,f,A.c4d(),x.fj),B.ag(d.d,e.d,f),!1,A.ky(d.e,e.e,f,A.a_k(),x.S),w)},
a0O(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SK
else w=h
v=m==null
u=v?8:m
t=$.lv()
s=t.aXS(f,v?8:m)
t=t.aXT(g,v?8:m)
v=d==null?A.bDP(r,r,r,r,r):d
return new A.is(q,l,w,j,u,s,e,t,v,k==null?D.alj:k)},
bRg(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ag(d.e,e.e,f),q=B.mI(d.f,e.f,f),p=A.ky(d.r,e.r,f,A.a_k(),x.S),o=B.bX(d.w,e.w,f),n=B.ag(d.a,e.a,f),m=B.ag(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ag(w.b,v.b,f)
t=B.ag(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a0O(A.bDP(v,u,null,!1,t),p,q,o,s,n,null,A.ky(d.y,e.y,f,A.c4e(),x.G),m,r)},
bRh(d,e,f){var w,v,u=B.ag(d.a,e.a,f)
u.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mG(u,w,v,B.bX(d.d,e.d,f))},
bDP(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0K(g===!0,v,u,w,f)},
bwR(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0Q(4,C.hM,16,D.xv,0,120,A.c4g(),!1,!1,D.Zh,0,C.J,A.c4f())
else w=k
v=j==null?C.l1:j
return new A.a0P(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c53(d,e,f,g){var w=null,v=B.j6(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.N,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CY(C.d.j(f.b),v)},
c52(d){return A.aA_(D.dp,15)},
nW:function nW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axO:function axO(d,e){this.a=d
this.b=e},
fL:function fL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axX:function axX(){},
axY:function axY(){},
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
mG:function mG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0K:function a0K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0P:function a0P(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adP:function adP(d,e){this.a=d
this.b=e},
a0Q:function a0Q(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KV:function KV(d){this.a=d},
a0R:function a0R(d,e,f,g,h,i,j,k){var _=this
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
ah8:function ah8(){},
ahf:function ahf(){},
ahg:function ahg(){},
ahi:function ahi(){},
ahj:function ahj(){},
ahk:function ahk(){},
ahl:function ahl(){},
ahm:function ahm(){},
ahn:function ahn(){},
axZ:function axZ(d){this.a=d},
ay_:function ay_(){},
uB:function uB(d,e,f){this.a=d
this.b=e
this.c=f},
ahh:function ahh(){},
ay0:function ay0(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ay1:function ay1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay2:function ay2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5S:function a5S(d){this.b=d},
a0N:function a0N(d,e,f){this.d=d
this.e=e
this.a=f},
aaX:function aaX(d,e,f,g,h,i,j,k){var _=this
_.fA=d
_.aI=e
_.fZ=f
_.fB=g
_.A=h
_.a2=_.T=_.U=null
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
c54(d,e){var w=null
return new A.Rt(e.w,B.h(e.r,w,w,w,w,w,w,w),w)},
axH(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ag(w.c,v.c,f)
u.toString
return new A.pg(t,e.b,new A.qh(v.a,v.b,u,B.ag(w.d,v.d,f)),!0)},
bFe(d,e,f){var w=A.axH(d.b,e.b,f),v=A.axH(d.d,e.d,f),u=A.axH(d.e,e.e,f)
return new A.v1(e.a,w,A.axH(d.c,e.c,f),v,u)},
bU0(d,e,f){var w,v
if(d.k(0,D.fH))return e
if(e.k(0,D.fH))return d
w=B.ag(d.a,e.a,f)
w.toString
v=B.ag(d.b,e.b,f)
v.toString
return new A.eA(w,v)},
bFc(d,e,f){return new A.yy(e.a,!0,B.ag(d.c,e.c,f),e.d,e.e,e.f,B.ag(d.r,e.r,f),e.w,e.x)},
c7s(d){return!0},
c57(d){return D.a8q},
bFd(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pD(w,f,g,e)},
bHb(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c49(),x.dv)
v.toString
w=A.ky(d.b,e.b,f,A.c4b(),x.bN)
w.toString
return new A.Q2(v,w)},
bUL(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rp(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.n0(t,w,v,u)},
c__(d,e,f){var w,v,u,t=B.ag(d.a,e.a,f)
t.toString
w=B.ag(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rp(d.d,e.d,f)
if(v==null)v=u==null?C.p:null
return new A.nq(t,w,v,u)},
bUK(d,e,f){var w,v,u,t,s,r=B.ag(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.o8(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bUI(B.bwJ(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rp(d.b,e.b,f)
w=B.ag(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_k(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kR(r,e.f,e.r,t,e.x,u,v,w,s)},
bZZ(d,e,f){var w,v,u,t,s,r=B.ag(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.o8(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bZX(B.bwJ(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rp(d.b,e.b,f)
w=B.ag(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_k(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lf(r,e.f,e.r,t,e.x,u,v,w,s)},
bUI(d,e,f,g,h,i){return new A.a62(f,!1,g,i,d,e)},
bUJ(d){return C.d.al(d.e,1)},
bZX(d,e,f,g,h,i){return new A.aed(f,!1,g,i,d,e)},
bZY(d){return C.d.al(d.e,1)},
bF7(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c48(),x.cm)
v.toString
w=A.ky(d.b,e.b,f,A.c4a(),x.es)
w.toString
return new A.MS(v,w,!0)},
bU_(d,e,f){return new A.MZ(d,e==null?4:e,f)},
a0D:function a0D(){},
CX:function CX(d,e){this.a=d
this.b=e},
tz:function tz(d,e){this.r=d
this.w=e},
qh:function qh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acn:function acn(){},
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
eA:function eA(d,e){this.a=d
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
adR:function adR(){},
Q2:function Q2(d,e){this.a=d
this.b=e},
n0:function n0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kR:function kR(d,e,f,g,h,i,j,k,l){var _=this
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
a62:function a62(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aed:function aed(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MS:function MS(d,e,f){this.a=d
this.b=e
this.c=f},
v0:function v0(){},
MZ:function MZ(d,e,f){this.a=d
this.b=e
this.c=f},
ah3:function ah3(){},
ah7:function ah7(){},
akh:function akh(){},
akw:function akw(){},
akx:function akx(){},
akz:function akz(){},
akA:function akA(){},
aln:function aln(){},
alm:function alm(){},
alo:function alo(){},
aoY:function aoY(){},
aqO:function aqO(){},
aqP:function aqP(){},
ast:function ast(){},
at7:function at7(){},
at6:function at6(){},
at8:function at8(){},
axD:function axD(){},
KO:function KO(){},
KP:function KP(d,e,f){this.c=d
this.d=e
this.a=f},
axF:function axF(d){this.a=d},
axE:function axE(d){this.a=d},
Rt:function Rt(d,e,f){this.c=d
this.e=e
this.a=f},
XZ:function XZ(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYu(d,e,f){var w=B.ai(f),v=w.i("af<1,jX>")
v=B.Q(new B.af(f,new A.b_2(),v),v.i("ar.E"))
w=w.i("af<1,c>")
w=B.Q(new B.af(f,new A.b_3(),w),w.i("ar.E"))
return new A.aco(e,d,v,w,null)},
bRc(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6E(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tw(v,C.aj,C.x,new B.kq(1),v,v,v,v,C.bm,v)
u=new A.a0E(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.g))
u.bl()
return u},
aco:function aco(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_2:function b_2(){},
b_3:function b_3(){},
a0E:function a0E(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.A=d
_.U=e
_.T=f
_.a2=g
_.Wx$=h
_.aTE$=i
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
bfM:function bfM(d,e){this.a=d
this.b=e},
axG:function axG(){},
jX:function jX(d,e){this.a=d
this.b=e},
nV:function nV(d,e){this.a=d
this.b=e},
ah4:function ah4(){},
ah5:function ah5(){},
ah6:function ah6(){},
Tq:function Tq(){},
AA:function AA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_4:function b_4(d){this.a=d},
b_5:function b_5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_6:function b_6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a58(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a57(e!==!1,w)},
a0T:function a0T(){},
a57:function a57(d,e){this.a=d
this.b=e},
N5:function N5(){},
a59:function a59(){},
ayb:function ayb(){},
aEJ:function aEJ(d,e){this.a=d
this.b=e},
ahq:function ahq(){},
akt:function akt(){},
aku:function aku(){},
akB:function akB(){},
KY:function KY(){},
vL:function vL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hn:function hn(){},
a5d:function a5d(d){this.a=d},
a5e:function a5e(d){this.a=d},
a5f:function a5f(d){this.a=d},
N0:function N0(){},
N1:function N1(){},
a5i:function a5i(d){this.a=d},
N3:function N3(){},
N4:function N4(d){this.a=d},
a5c:function a5c(d){this.a=d},
a5b:function a5b(d){this.a=d},
N_:function N_(d){this.a=d},
a5g:function a5g(d){this.a=d},
a5h:function a5h(d){this.a=d},
N2:function N2(d){this.a=d},
G6:function G6(){},
aV4:function aV4(d){this.a=d},
aV5:function aV5(d){this.a=d},
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
Oo:function Oo(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VO:function VO(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.fz$=g
_.cW$=h
_.c=_.a=null},
bfV:function bfV(d,e){this.a=d
this.b=e},
bfT:function bfT(d){this.a=d},
bfU:function bfU(d,e){this.a=d
this.b=e},
bfS:function bfS(){},
bfW:function bfW(d){this.a=d},
by6(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pQ(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SK:u
else w=g
v=f==null?A.axN(!1,u,0,u,!1,D.vS):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axN(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.arn(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ag(d.x,e.x,f)
m.toString
w=A.bDQ(d.ay,e.ay,f)
v=A.bDQ(d.ch,e.ch,f)
u=B.ag(d.as,e.as,f)
u.toString
t=e.CW
s=A.ky(d.cy,e.cy,f,A.a_k(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rp(d.w,e.w,f)
p=A.ky(d.a,e.a,f,A.c47(),x.cw)
p.toString
o=B.bHH(d.db,e.db,f)
o.toString
n=B.ag(d.dy.a,e.dy.a,f)
n.toString
return A.aKU(v,m,w,r,e.z,s,new A.yx(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Op(n),!1,u,o,!0,e.cx,p)},
axN(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a0M(h,w,g,i,f,!1)},
bDQ(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rp(v.b,u.b,f),r=B.ag(v.c,u.c,f)
r.toString
r=A.bFd(t,A.ky(v.d,u.d,f,A.a_k(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rp(d.c,e.c,f)
v=B.ag(d.e,e.e,f)
v.toString
return A.axN(!1,s,v,u,e.a,new A.KT(!1,r,w.c,!0))},
bRi(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rp(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aV(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mH(e.a,e.b,w,v)},
c7t(d){return!0},
bAc(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jw)return A.bAZ(w.a,A.bxN(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c1O(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jw)w=A.bAZ(v.a,A.bxN(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.aA_(w,40)},
bKb(d,e,f,g,h){var w,v=A.bAc(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jw)w=A.bAZ(u.a,A.bxN(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.aA_(w,40)
return new A.MZ(v,h==null?4:h,u)},
c7r(d,e){return!0},
c3T(d,e){return Math.abs(d.a-e.a)},
c5a(d,e){var w=J.d1(e,new A.btq(d),x.bY)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
c56(d,e){return-1/0},
c55(d,e){return d.a[e].b},
bLo(d){var w=J.d1(d,new A.btn(),x.fT)
w=B.Q(w,w.$ti.i("ar.E"))
return w},
bLn(d){return A.aA_(D.dp,15)},
pQ:function pQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKV:function aKV(){},
Op:function Op(d){this.a=d},
a0M:function a0M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mH:function mH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yx:function yx(d,e,f){this.a=d
this.b=e
this.c=f},
aKG:function aKG(d,e){this.a=d
this.b=e},
a5a:function a5a(){},
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
btq:function btq(d){this.a=d},
btp:function btp(d){this.a=d},
a72:function a72(){},
btn:function btn(){},
n4:function n4(){},
qo:function qo(d,e,f,g,h,i){var _=this
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
Gx:function Gx(d){this.a=d},
Oq:function Oq(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ahd:function ahd(){},
ahe:function ahe(){},
ahr:function ahr(){},
akv:function akv(){},
aky:function aky(){},
amg:function amg(){},
amh:function amh(){},
ami:function ami(){},
amk:function amk(){},
aml:function aml(){},
amm:function amm(){},
amn:function amn(){},
aqN:function aqN(){},
ass:function ass(){},
aKW:function aKW(d){this.a=d},
aKX:function aKX(){},
aKY:function aKY(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amj:function amj(){},
aKZ:function aKZ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aL1:function aL1(){},
aL_:function aL_(d,e,f){this.a=d
this.b=e
this.c=f},
aL0:function aL0(d,e,f){this.a=d
this.b=e
this.c=f},
aL2:function aL2(){},
vw:function vw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a71:function a71(d,e,f){this.d=d
this.e=e
this.a=f},
ab9:function ab9(d,e,f,g,h,i,j,k){var _=this
_.fA=d
_.aI=e
_.fZ=f
_.fB=g
_.A=h
_.a2=_.T=_.U=null
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
bwQ(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bC(o.length,0,!1,x.i),m=B.ai(o),l=new B.af(o,new A.axQ(),m.i("af<1,K>")).kr(0,new A.axR()),k=e-l,j=new A.axU(k,d,n)
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
new B.iX(o,m.i("iX<1>")).aD(0,new A.axS(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iX(o,m.i("iX<1>")).aD(0,new A.axT(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axQ:function axQ(){},
axR:function axR(){},
axU:function axU(d,e,f){this.a=d
this.b=e
this.c=f},
axV:function axV(d,e,f){this.a=d
this.b=e
this.c=f},
axS:function axS(d,e,f){this.a=d
this.b=e
this.c=f},
axT:function axT(d,e,f){this.a=d
this.b=e
this.c=f},
bxN(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iX(w,B.ai(w).i("iX<1>")).aD(0,new A.aHY(v,d))
else throw B.e(B.bI('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHY:function aHY(d,e){this.a=d
this.b=e},
aBb(d,e){var w,v
if(e!=null){w=B.ai(e).i("af<1,K>")
v=B.Q(new B.af(e,new A.aBc(),w),w.i("ar.E"))
return A.c4Y(d,new A.a1u(v,x.C))}else return d},
aBc:function aBc(){},
bZ5(d,e){var w=!0
if(d!==C.f5)if(!(d===C.aj&&e===C.x))w=d===C.il&&e===C.b_
if(w)return D.DX
else{w=!0
if(d!==C.ik)if(!(d===C.il&&e===C.x))w=d===C.aj&&e===C.b_
if(w)return D.DY
else return D.a95}},
Nt:function Nt(d,e){this.a=d
this.b=e},
a1j:function a1j(d,e){this.a=d
this.b=e},
zn:function zn(d,e){this.a=d
this.$ti=e},
amu:function amu(){},
c4Y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.an(),i=x.v,h=B.b([],i),g=new B.ck(j.r,C.ah,k,k,h)
for(j=B.MM(d),w=B.b([],x.I),v=new B.MO(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.P(B.fB('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MN(v,r)
v.Di()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Di()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.e2(B.b([],i),!0,s)
p=new B.Kf(new B.ck(t,p,k,new B.apj([q,o,o+m,!0]),l),C.v,k)
h.push(p)
l=g.f
if(l!=null)p.iB(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1u:function a1u(d,e){this.a=d
this.b=0
this.$ti=e},
b2x:function b2x(){},
bxB(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.H)(d),++v){u=d[v]
if(!u.k(0,D.fH))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRl(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gen(v)===0){v=d.a.a
if(v.gen(v)===0){v=d.b.a
if(v.gen(v)===0){v=d.c.a
v=v.gen(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aA_(d,e){var w=1-e/100
return B.aD(d.gfL(d),C.d.aV(d.gO4()*w),C.d.aV(d.gG9()*w),C.d.aV(d.gKp()*w))},
bFb(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
bxC(d){var w=d.a,v=w?A.b_1(d.b):0,u=w?A.b_1(d.c):0,t=w?A.b_1(d.d):0
return new B.al(v,u,t,w?A.b_1(d.e):0)},
bWq(d){var w
if(d.c===0){d.seW(null)
w=B.c3(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gp(0)}},
byt(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.seW(f.mK(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seW(null)}},
b_1(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ky(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kX(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kX(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6f(d,e,f){return C.d.aV(d+(e-d)*f)},
bAZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kX(m,x.i)
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
A.a6N.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aT:C.p
r=r?C.m:C.am
w=x.p
v=B.b([],w)
C.b.J(v,B.b([B.cm(t.x,C.m,s,18),C.aX],w))
v.push(B.ay(new B.dF(t.c,!1,s),1))
v=B.ak(v,C.z,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.h(t.d,1,C.aa,s,B.bz(u==null?C.h:u,22,C.N),s,s,s)],w)
return B.bi(r,B.a7(w,C.z,C.i7,C.i),q,s,C.ad,s,3)}}
A.v_.prototype={
LR(d){return this.aTD(d)},
aTD(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LR=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_summary",B.a5(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LR)
case 3:q=f
if(q==null){u=D.apf
w=1
break}if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.aru
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LR,v)},
LQ(d){return this.aTC(d)},
aTC(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LQ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.dD("finance_kpis",B.a5(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LQ)
case 3:q=f
if(x.f.b(q)){u=B.cT(q,s,r)
w=1
break}u=D.aoY
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LQ,v)},
pH(d){return this.ar4(d)},
ar4(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pH=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hi("sevdesk-sync",B.a5(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$pH)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a1(r,"upserted")=="number"){u=C.d.a1(B.fI(J.a1(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pH,v)},
LM(d){return this.aTt(d)},
aTt(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LM=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hi("finance-export-pdf",B.a5(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$LM)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a1(r,"base64")=="string"){u=B.aH(J.a1(r,"base64"))
w=1
break}throw B.e(B.e8("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LM,v)}}
A.E6.prototype={
G3(d){return this.ake(d)},
ake(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G3=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LR(d),$async$G3)
case 7:q=f
o=A.aFM(q)
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
return B.p($async$G3,v)},
FZ(d){return this.ak_(d)},
ak_(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FZ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LQ(d),$async$FZ)
case 7:q=f
o=A.bTY(q)
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
return B.p($async$FZ,v)},
pH(d){return this.ar5(d)},
ar5(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pH=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pH(d),$async$pH)
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
return B.p($async$pH,v)},
LL(d){return this.aTs(d)},
aTs(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LM(d),$async$LL)
case 7:q=f
o=C.iK.cE(q)
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
return B.p($async$LL,v)},
HG(d){if(d instanceof B.ys)return d
if(d instanceof B.m3){if(d.b==="42501")return new B.vP(d.a)
return new B.tf(d.a)}if(d instanceof B.Ni)return new B.tf("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B_("Unerwarteter Fehler: "+B.j(d))},
$iaFy:1}
A.qq.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vA.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wv.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAB.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBI.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oc.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CG.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.od.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yv.prototype={
H_(d){return this.ar3(0)},
ar3(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$H_=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.sdY(0,C.db)
s=t.r
r=s.au(0,$.xv(),x.P)
p.a=null
w=3
return B.k(B.pf(new A.aFt(p,t,r),x.H),$async$H_)
case 3:t.sdY(0,f)
q=t.f
if(q.ghu(q)==null){q=$.bwm()
s=s.e
s===$&&B.a()
s.bA(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$H_,v)},
LK(){return this.aTr()},
aTr(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LK=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.sdY(0,C.db)
s=t.r.au(0,$.xv(),x.P)
q.a=null
w=3
return B.k(B.pf(new A.aFs(q,t,s),x.H),$async$LK)
case 3:t.sdY(0,e)
r=t.f
u=r.ghu(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LK,v)}}
A.yw.prototype={
cv(d,e){var w=null,v=e.a9($.xv(),x.P),u=e.a9($.bwm(),x.aN)
return B.i9(B.dE(B.b([new B.fC("Finanzen","Dashboard",new A.agm(e.a9($.bwk(),x.b).gjc(),new A.aFD(this,d,e),new A.aFE(this,d,e),new A.aFF(d),new A.aFG(d),new A.aFH(this,d,e,v),w),w),C.aD,new A.anS(v,w),C.cd,D.af3,C.cd,B.db(u,new A.aFI(),new A.aFJ(),new A.aFK(),!1,!0,!1,x.d,x.l)],x.p),C.cD,w,C.H,!1),C.m,new A.aFL(e))},
Jy(d,e){return this.aLS(d,e)},
aLS(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jy=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwk()
w=3
return B.k(e.au(0,s.geP(),x.F).H_(0),$async$Jy)
case 3:r=g
if(d.e==null){w=1
break}s=e.au(0,s,x.b)
s=s.ghu(s)
t=d.O(x.q).f
t.aT(B.c0(null,null,null,null,null,C.q,null,B.h(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jy,v)},
Bt(d,e){return this.axc(d,e)},
axc(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bt=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.au(0,$.bwk().geP(),x.F).LK(),$async$Bt)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aT(D.azb)
w=1
break}t=B.qa(C.v,10)
w=4
return B.k($.bNy().u6(s,"finanzauswertung.pdf",t,null,null,null),$async$Bt)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bt,v)},
Bu(d,e,f){return this.aJo(d,e,f)},
aJo(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bu=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.fK(null,null,!0,null,new A.aFB(f,d),d,null,!0,!0,x.cJ),$async$Bu)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nP(e.au(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dQ()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zy("finance_period",p,o,B.a5(["period_from",p.e3()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bu)
case 8:if(d.e!=null)d.O(x.q).f.aT(F.uS)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Fehler: "+B.j(q),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bu,v)}}
A.agm.prototype={
u(d){var w=this,v=null,u=A.aly(C.m,F.hQ,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.aly(v,D.aaP,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.aly(v,D.xN,v,s?v:w.d,"sevDesk synchronisieren"),q=A.aly(C.a8,C.jd,C.a8,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aX,t,C.aX,r,C.aX,q,C.aX,A.aly(C.al,C.fK,C.al,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,C.f,C.M,0,v,v)}}
A.alx.prototype={
u(d){var w,v=this,u=null,t=B.aM(12),s=B.aM(12),r=B.aM(12),q=v.w
if(q==null)q=C.am
q=B.cU(q,1)
w=v.r
if(w==null)w=C.h
return B.H8(B.dU(!1,C.a_,!0,t,B.eC(!1,s,!0,B.b3(u,B.cm(v.c,w,u,20),C.u,u,u,new B.b0(u,u,q,r,u,u,C.F),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.u,C.ac,0,u,u,u,u,u,C.bE),u,v.d,u,u)}}
A.anS.prototype={
cv(d,e){var w=null,v=this.e,u=$.dQ(),t=x.p
return B.bi(w,B.a7(B.b([D.a8b,C.D,B.ak(B.b([D.abF,C.aR,B.ay(B.h(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.y(C.h,16,C.N),w,w,w),1)],t),C.l,C.f,C.i,0,w,w),C.r,B.jN(C.c5,B.b([new A.IT("Monat",new A.bif(e),w,w),new A.IT("Jahr (YTD)",new A.big(e),w,w),new A.IT("Zeitraum w\xe4hlen \u2026",new A.bih(this,d,e),D.a9V,w)],t),C.d7,6,8)],t),C.z,C.f,C.i),w,w,C.B,w,3)},
IT(d,e){return this.aIi(d,e)},
aIi(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IT=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b7(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avg(new A.bie(),d,B.bK(B.aT(t)-5,1,1,0,0,0,0),new B.lE(s.a,s.b,x.bz),B.bK(B.aT(t)+1,1,1,0,0,0,0),C.e0),$async$IT)
case 2:r=g
if(r!=null)e.au(0,$.xv().geP(),x.V).ra(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IT,v)}}
A.IT.prototype={
u(d){var w=null,v=B.aM(9999),u=B.aM(9999),t=B.aM(9999),s=B.cU(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.J(q,B.b([B.cm(p,C.h,w,14),C.aX],r))
q.push(B.h(this.c,w,w,w,B.y(C.h,13,C.N),w,w,w))
return B.dU(!1,C.a_,!0,v,B.eC(!1,u,!0,B.b3(w,B.ak(q,C.l,C.f,C.M,0,w,w),C.u,w,w,new B.b0(w,w,s,t,w,w,C.F),w,w,w,w,C.l0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.u,C.ac,0,w,w,w,w,w,C.bE)}}
A.Jm.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jv(new A.boA(this)),C.cd,D.a8f,C.r],r),p=this.c.w
if(p.length===0)q.push(B.bi(s,B.ak(B.b([D.ac4,C.aw,B.ay(B.h("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.o,14,C.j),s,s,s),1)],r),C.l,C.f,C.i,0,s,s),C.ac,s,C.B,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.H)(p),++u){t=p[u]
C.b.J(w,B.b([new A.agk(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a7(w,C.l,C.f,C.i))}return B.a7(q,C.af,C.f,C.i)}}
A.agk.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aT:C.ac,s=B.cU(u?C.m:C.am,1),r=B.aM(4),q=w.c
r=B.b3(C.a1,B.h(C.c.a_(q,0,1),v,v,v,B.bz(C.h,14,C.n),v,v,v),C.u,v,v,new B.b0(t,v,s,r,v,v,C.F),v,36,v,v,v,v,v,36)
q=B.h(q+" \xb7 "+w.d,1,C.aa,v,B.y(C.h,14,C.N),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ay(B.a7(B.b([q,B.h(t,v,v,v,B.y(C.o,12,C.j),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dr().ap(w.f)
return B.bi(v,B.ak(B.b([r,C.aw,t,B.h(q,v,v,v,B.y(u?C.al:C.h,15,C.N),v,v,v)],s),C.l,C.f,C.i,0,v,v),v,v,C.eg,v,3)}}
A.HZ.prototype={
u(d){var w=null
return B.bi(C.a8,B.ak(B.b([D.acH,C.aw,B.ay(B.h(this.c,w,w,w,B.y(C.h,14,C.j),w,w,w),1)],x.p),C.l,C.f,C.i,0,w,w),C.eE,w,C.B,w,3)}}
A.a6O.prototype={
cv(d,e){return B.db(e.a9($.bQ1(),x.e),new A.aKD(),new A.aKE(),new A.aKF(),!1,!0,!1,x.X,x.l)}}
A.Ij.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awG,C.r,B.jv(new A.bfD(v,q,100-t.w.a,w,p)),C.r,new A.akR(u),C.aD,D.awF,C.r,new A.ahc(t,u),C.aD,D.awA,C.r,B.bD(u,!0,u,B.n_(u,B.bi(u,new A.TP(t,220,u),u,u,C.B,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfE(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.aD,D.awu,C.r,B.bD(u,!0,u,B.n_(u,new A.U0(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfF(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.Q,u),C.aD,D.awy,C.r,new A.amE(t,u),C.aD,D.awv,C.r,new A.aiW(t,u)],s)
if(t.f.length!==0)C.b.J(r,B.b([C.aD,D.awC,C.r,new A.asp(t,u)],s))
return B.a7(r,C.af,C.f,C.i)}}
A.akR.prototype={
u(d){var w=null
return B.h("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.o,11,C.j).dt(1.35),w,w,w)}}
A.am8.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cD(m.d,"-")?C.a8:C.al
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfG(m,d):l
r=x.p
q=B.b([B.ay(B.h(m.c.toUpperCase(),l,l,l,B.y(C.o,10,C.n).f8(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.a8,0.8)
n=B.aM(4)
q.push(B.b3(l,B.h("Ziel "+p,l,l,l,B.y(C.a8,9,C.n),l,l,l),C.u,l,l,new B.b0(l,l,o,n,l,l,C.F),l,l,l,l,C.ni,l,l,l))}q=B.b([B.ak(q,C.l,C.f,C.i,0,l,l),C.aN,B.bFa(C.dI,B.h(m.d,l,l,l,B.bz(w,22,C.n),l,l,l),C.vX)],r)
p=m.e
if(p!=null)q.push(B.h(p,2,C.aa,l,B.y(C.o,10,C.aP),l,l,l))
q.push(C.cu)
q.push(B.ak(B.b([new A.UC("Vormonat",m.r,l),C.ct,new A.UC("Vorjahr",m.f,l)],r),C.l,C.f,C.i,0,l,l))
q.push(C.cu)
q.push(B.ay(new A.Y9(v,m.y,m.z,l),1))
return B.bD(l,u,l,B.n_(l,B.bi(l,B.a7(q,C.z,C.f,C.i),l,l,C.dd,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.Q,l)}}
A.UC.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aM(4)
return B.b3(r,B.h(this.c+" \u2014",r,r,r,B.y(C.o,9,C.n),r,r,r),C.u,r,r,new B.b0(C.am,r,r,q,r,r,C.F),r,r,r,r,C.ni,r,r,r)}w=q>=0
v=w?C.al:C.a8
u=v.fo(0.12)
t=B.cU(v,0.7)
s=B.aM(4)
return B.b3(r,B.ak(B.b([B.cm(w?F.a9a:D.a99,v,r,10),F.ayQ,B.h(this.c+" "+C.d.al(q,1)+" %",r,r,r,B.y(v,9,C.n),r,r,r)],x.p),C.l,C.f,C.M,0,r,r),C.u,r,r,new B.b0(u,r,t,s,r,r,C.F),r,r,r,r,C.ni,r,r,r)}}
A.Y9.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ai
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eA(v,j[v]))
u=C.b.kr(j,new A.bnJ())
t=C.b.kr(j,new A.bnK())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bnL(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a58(k,!1)
w=B.b([A.aKU(k,2,A.axN(!1,C.m.fo(0.16),0,k,!0,D.vS),C.m,0.35,k,D.DO,k,!0,!1,!0,!1,D.Fg,!1,10,D.Y0,!0,C.lu,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oo(A.by6(k,k,k,D.alk,l,D.BF,D.DK,D.DP,w,D.af8,k,m,k,n,D.Xk,D.all,D.a8t),C.ay,C.an,k,k)}}
A.TP.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMk
w=C.b.fO(p,0,new A.b6h())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axW(B.b([A.a0O(q,q,D.B5,q,C.m,q,q,q,r.b,6),A.a0O(q,q,D.B5,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c5(A.bDR(A.axP(q,q,u,q,q,A.a58(q,!1),q,new A.yy(!0,!0,q,new A.b6i(),A.a_d(),!1,q,A.av0(),A.a_d()),q,v,q,q,new A.v1(!0,new A.pg(16,q,new A.qh(!0,new A.b6j(this),46,q),!0),D.kt,D.kt,new A.pg(16,q,new A.qh(!0,new A.b6k(p),26,q),!0)))),this.d,q)},
aL6(d){if(Math.abs(d)>=1000)return C.d.al(d/1000,1)+" k"
return C.d.al(d,0)}}
A.U0.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.af(v,new A.b77(),w),x.i)
C.b.J(o,new B.af(u,new A.b78(),w))
t=C.b.fO(o,0,new A.b79())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axW(B.b([A.a0O(q,q,q,q,C.m,q,q,q,v[s],14),A.a0O(q,q,q,q,C.al,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c5(A.bDR(A.axP(q,q,n,q,q,A.a58(q,!1),q,D.DP,q,o,q,q,new A.v1(!0,D.kt,D.kt,D.kt,new A.pg(16,q,new A.qh(!0,new A.b7a(p),26,q),!0)))),this.d,q)
return this.e?r:B.bi(q,r,q,q,C.B,q,3)}}
A.amE.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aMj
w=new B.af(l,new A.bge(),B.ai(l).i("af<1,K>")).kr(0,new A.bgf())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.H)(l),++s){r=l[s]
q=B.h(r.b,m,m,m,B.y(C.h,14,C.n),m,m,m)
p=$.dr()
o=r.d
n=new B.aW(4,4)
o=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.a7(B.b([q,B.h(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.y(C.o,12,C.aP),m,m,m)],v),C.z,C.f,C.i),m),C.aR,B.h(p.ap(o),m,m,m,B.bz(C.h,16,C.n),m,m,m)],v),C.l,C.f,C.i,0,m,m),C.cu,new B.Dm(new B.d7(n,n,n,n),C.bH,B.EL(C.am,8,C.d.c2(o/w,0,1),D.AV),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.G(r)===B.G(q)&&B.a_i(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.r)
C.b.J(u,o)}return B.bi(m,B.a7(u,C.l,C.f,C.i),m,m,C.B,m,3)}}
A.aiW.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ay(new A.C6("Aktive Kunden",""+s,u),1)
w=B.ay(new A.C6("K\xe4ufe",""+t.a,u),1)
v=$.dr()
return B.bi(u,B.ak(B.b([s,w,B.ay(new A.C6("\xd8-Warenkorb",v.ap(t.d),u),1),B.ay(new A.C6("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.l,C.f,C.i,0,u,u),u,u,C.B,u,3)}}
A.C6.prototype={
u(d){var w=null
return B.a7(B.b([B.h(this.c.toUpperCase(),w,w,w,B.y(C.o,10,C.n).f8(0.6),w,w,w),C.be,B.h(this.d,w,w,w,B.bz(C.h,20,C.n),w,w,w)],x.p),C.z,C.f,C.M)}}
A.asp.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.af(q,new A.bpX(),B.ai(q).i("af<1,K>")).kr(0,new A.bpY()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.H)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.ak(B.b([new B.iQ(1,C.d_,B.h(u.b,1,C.aa,r,B.y(C.h,13,C.n),r,r,r),r),B.h(""+u.c+"\xd7 ",r,r,r,B.y(C.o,12,C.N),r,r,r),B.h($.dr().ap(t),r,r,r,B.y(C.h,13,C.n),r,r,r)],o),C.l,C.f,C.i,0,r,r),C.aN,new B.Dm(new B.d7(s,s,s,s),C.bH,B.EL(C.am,6,C.d.c2(t/p,0,1),D.AV),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.G(u)===B.G(s)&&B.a_i(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.J(n,t)}return B.bi(r,B.a7(n,C.l,C.f,C.i),r,r,C.B,r,3)}}
A.wO.prototype={
u(d){var w=null
return B.bi(w,B.h(this.c,w,w,w,B.y(C.o,13,C.j),w,w,w),C.ac,w,C.B,w,3)}}
A.ahc.prototype={
cv(d,e){return B.db(e.a9($.bwl(),x.fM),new A.b4E(this,d,e),new A.b4F(),new A.b4G(),!1,!0,!1,x.h,x.l)}}
A.B7.prototype={
X(){return new A.Ts()},
aYw(){return this.d.$0()}}
A.Ts.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b7(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a1(w,"as_of"))!=null){w.toString
u=B.fc(J.a6(J.a1(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bP)
for(t=0;t<8;++t){s=D.pr[t].a
if(v)r=""
else{r=B.bj(J.a1(w,s))
if(r==null)r=null
r=C.d.al(r==null?0:r,2)
r=B.b5(r,".",",")}u.m(0,s,new B.by(new B.cE(r,C.bl,C.aJ),$.ah()))}q.e!==$&&B.aZ()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ce(v,v.r,v.e,B.l(v).i("ce<2>"))
while(v.t()){w=v.d
w.V$=$.ah()
w.R$=0}this.aq()},
rw(d){var w=this.e
w===$&&B.a()
w=C.c.ba(w.h(0,d).a.a)
w=B.b5(w,".","")
w=B.hx(B.b5(w,",","."))
return w==null?0:w},
a4h(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pr[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.al(u,2)
s=B.b5(s,".",",")
t.lK(0,t.a.xV(C.aJ,C.bl,s))}}this.K(new A.b4s())},
aEY(){this.a4h(D.aph)
this.c.O(x.q).f.aT(D.azz)},
I9(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I9=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b4(a1)
for(e=0;e<8;++e)a2.E(0,D.pr[e].a)
q=a2
t=4
w=7
return B.k($.aFm.ci().zf(B.b(["csv","txt"],x.s),C.xy,!0),$async$I9)
case 7:p=a5
a2=p
o=a2==null?null:J.Ka(a2.a).c
if(o==null){w=1
break}n=C.aF.adH(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BK.cE(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.H)(a1),++e){l=a1[e]
k=J.avO(l,B.bV("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.ba(J.a1(k,0)).toLowerCase()
i=J.CC(q,j)?j:D.arx.h(0,j)
if(i==null)continue
d=C.c.ba(C.b.n2(J.bQJ(k,1)))
d=B.b5(d,"\u20ac","")
d=B.b5(d," ","")
d=B.b5(d,".","")
h=B.b5(d,",",".")
g=B.hx(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aT(D.az8)
w=1
break}r.a4h(m)
r.c.O(x.q).f.aT(B.c0(null,null,null,null,null,C.q,null,B.h(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I9,v)},
Ik(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ik=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.K(new A.b4t(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b03("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.e3(),0,10),"p_cash_and_bank",q.rw("cash_and_bank"),"p_receivables",q.rw("receivables"),"p_inventory_value",q.rw("inventory_value"),"p_other_current_assets",q.rw("other_current_assets"),"p_fixed_assets",q.rw("fixed_assets"),"p_current_liabilities",q.rw("current_liabilities"),"p_long_term_liabilities",q.rw("long_term_liabilities"),"p_equity",q.rw("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ik)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYw()
o=q.c
o.toString
B.aV(o,!1).eq()
q.c.O(x.q).f.aT(D.azc)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aT(B.c0(null,null,null,null,null,C.q,null,B.h("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.G,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.K(new A.b4u(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ik,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.h("Bilanzwerte erfassen",r,r,r,B.bz(C.h,18,C.n),r,r,r),p=s.f?r:new A.b4w(s,d),o=s.d
o===$&&B.a()
p=B.f4(D.abH,B.h("Stichtag: "+C.c.a_(o.e3(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ay(B.f4(D.acP,D.aFu,o?r:s.gaE0(),r),1)
v=x.p
w=B.b([p,C.D,B.ak(B.b([w,C.aR,B.ay(B.f4(D.acF,D.aFf,o?r:s.gaEX(),r),1)],v),C.l,C.f,C.i,0,r,r),C.r],v)
for(u=0;u<8;++u){p=D.pr[u]
o=s.e
o===$&&B.a()
C.b.J(w,B.b([B.dW(r,C.aC,!1,r,!0,C.q,r,B.e4(),o.h(0,p.a),r,r,r,r,r,2,new B.c2(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aG,r,r,r,r,C.io,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.B,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.aj,r,C.Z,r,r,r,r),C.D],v))}w.push(B.h("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.o,11,C.j),r,r,r))
p=B.c5(B.eI(B.a7(w,C.af,C.f,C.M),r,C.H),r,380)
o=s.f
w=B.cW(C.bR,r,r,o?r:new A.b4x(d),r,r)
o=o?r:s.gaEH()
t=B.dL(C.m,C.h,r,r,r,r,r)
return B.hX(B.b([w,B.dl(s.f?F.Yy:C.dv,o,t)],v),C.p,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.G(this)===B.G(e)&&B.a_i(this.gbD(),e.gbD())
else w=!0
return w},
gB(d){return(B.f5(B.G(this))^B.bLT(this.gbD()))>>>0},
j(d){B.bF5()
return B.G(this).j(0)}}
A.KU.prototype={
X(){return new A.Tt(B.A(x.S,x.J),new A.axZ(B.A(x.x,x.gF)),null,null)}}
A.Tt.prototype={
u(d){var w,v=this,u=v.a2d(),t=v.CW
t.toString
t=v.a2e(t.aB(0,v.ghI().gp(0)))
w=v.a2e(u)
v.a.toString
return new A.KP(new A.a0N(t,w,null),u,null)},
a2e(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axW(s.c,s.d,!1,r,s.a))}return d.aQs(w)},
a2d(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.V3(t.ch)
if(r)s=w.a
r=t.y
t=t.aRo(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQt(A.bwR(!1,!0,!0,v.d,v.c,u.gasH(),v.f,v.e))}return t},
asI(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gag9()||e==null||e.a==null){w=v.cy
v.K(w.gaPQ(w))
return}v.K(new A.b4J(v,e))},
nX(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2d(),new A.b4K(w)))}}
A.nW.prototype={
VF(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axP(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRo(d,e){return this.VF(null,null,d,e)},
aQt(d){return this.VF(null,d,null,null)},
aQs(d){return this.VF(d,null,null,null)},
XF(d,e,f){var w,v,u,t=A.ky(d.ch,e.ch,f,A.c4c(),x.dB),s=B.ag(d.CW,e.CW,f),r=A.bFe(d.d,e.d,f),q=A.bHb(d.e,e.e,f),p=A.bFc(d.c,e.c,f),o=e.a
o=A.a58(B.a13(d.a.b,o.b,f),o.a)
w=B.ag(d.y,e.y,f)
v=B.ag(d.x,e.x,f)
u=B.ag(d.z,e.z,f)
r=A.axP(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bF7(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axO.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fL.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.af(v,new A.axX(),B.ai(v).i("af<1,K>")).kr(0,new A.axY())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.is.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mG.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0K.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0P.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adP.prototype={
L(){return"TooltipDirection."+this.b}}
A.a0Q.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CY.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.KV.prototype={}
A.a0R.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xJ.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XF(v,w,d)}}
A.ah8.prototype={}
A.ahf.prototype={}
A.ahg.prototype={}
A.ahi.prototype={}
A.ahj.prototype={}
A.ahk.prototype={}
A.ahl.prototype={}
A.ahm.prototype={}
A.ahn.prototype={}
A.axZ.prototype={
V3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uB(0,0,!1)
v=new A.zn(d,x.x)
u=this.a
if(u.aH(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uB(t,u,!0)}w=null
try{w=C.b.qn(d,new A.ay_())}catch(s){return new A.uB(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ahh.prototype={}
A.ay0.prototype={
i5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0k(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acF(t,A.bwQ(w,t.a),u)
l.y=u
l.aSL(e,u,f)
l.ame(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSU(d,e,m,t,r,s,n,o,f)}}},
acF(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e8("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iX(p,B.ai(p).i("iX<1>")).aD(0,new A.ay1(t,q,r,s))
w.push(new A.a5S(q))}return w},
aSL(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
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
a4=B.PZ(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.PZ(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seW(null)
a6=b2.f.e4()
v.drawRRect(B.mB(a4),a6)
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
v.clipRect(B.dJ(b1),$.nK()[1],!0)
a6=b2.f.e4()
v.drawRRect(B.mB(a4),a6)
a6.delete()
v.restore()
b2.aSS(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gen(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
n=$.an()
k=B.b([],s)
k.push(new B.he(a4))
n=A.aBb(new B.ck(n.r,C.ah,null,null,k),o.r)
a6=b2.r.e4()
k=n.e
v.drawPath((k==null?n.e=new B.mL(n.gjt().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSU(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AP(a5,a5,a5,a5,B.di(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lv().a_m(a8,a7.b),a7.a),C.cV,C.x,a5,b6.c,C.bm)
w.ags(b1.f)
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
if(v!==D.aI0)j=v===D.Zh&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_n(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FV(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lv().KC(new B.F(v,t),d).b
s=$.lv()
q=w.b
p=q.c
q=q.a.c
a0=s.KC(new B.F(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiE()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Wk(d,new A.ay2(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aSS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gen(w)===0}else w=!0
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
q=B.PZ(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.PZ(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.byP(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WZ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acF(b2,A.bwQ(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0R(d,q,a0,o,a2,a1,new A.eA(d.a,v),new B.r(n,t))}}return null}}
A.a5S.prototype={}
A.a0N.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.ay0()
t.a1v()
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
t=new A.aaX(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zf(v.cy)
t.afD()
return t},
bw(d,e){e.sig(0,this.d)
e.sZ_(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.aaX.prototype={
sig(d,e){if(this.fA.k(0,e))return
this.fA=e
this.bf()},
sZ_(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a14(d.cy)
w.bf()},
scN(d){if(this.fZ.k(0,d))return
this.fZ=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fB.i5(w,new A.a1j(t,v),new A.vL(u.fA,u.aI,u.fZ,x.Q))
s.restore()},
a_f(d){var w=this,v=w.gC(0)
return new A.KV(w.fB.WZ(d,v,new A.vL(w.fA,w.aI,w.fZ,x.Q)))}}
A.a0D.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CX.prototype={
L(){return"AxisSide."+this.b}}
A.tz.prototype={}
A.qh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acn.prototype={
gbD(){return[!1,0,0,0]}}
A.pg.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.v1.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eA.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eA))return!1
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
A.adR.prototype={
gbD(){return[this.a,this.b]}}
A.Q2.prototype={
gbD(){return[this.a,this.b]}}
A.n0.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nq.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kR.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lf.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a62.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aed.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MS.prototype={
gbD(){return[this.a,this.b,!0]}}
A.v0.prototype={}
A.MZ.prototype={
ae5(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bk
d.iP(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ah3.prototype={}
A.ah7.prototype={}
A.akh.prototype={}
A.akw.prototype={}
A.akx.prototype={}
A.akz.prototype={}
A.akA.prototype={}
A.aln.prototype={}
A.alm.prototype={}
A.alo.prototype={}
A.aoY.prototype={}
A.aqO.prototype={}
A.aqP.prototype={}
A.ast.prototype={}
A.at7.prototype={}
A.at6.prototype={}
A.at8.prototype={}
A.axD.prototype={
MR(d,e,f,g,h,i){return new B.ik(this.aWy(d,e,f,g,h,i),x.g4)},
aWx(d,e,f,g){return this.MR(d,e,f,!0,g,!0)},
aWy(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MR(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lv().ajM(s,u,v,w)
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
A.KO.prototype={
a1v(){var w,v=this
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
w.a0l(d,e,f)
w.aSH(e,f)
w.aSR(e,f)
w.aSQ(e,f)},
aSQ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lv().OV(w.a,a1.r-a1.f)
u=$.bvR().MR(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l4(n,m)
if(j!=null){p.r=C.E.gp(0)
p.seW(j.mK(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seW(a0)}k=l.c
p.c=k
if(k===0){p.seW(a0)
k=B.c3(p.r)
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}a3.DK(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lv().OV(w.b,a1.y-a1.x)
u=$.bvR().MR(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fi(u.a(),u.$ti.i("fi<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l4(n,m)
if(k!=null){q.r=C.E.gp(0)
q.seW(k.mK(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seW(a0)}p=f.c
q.c=p
if(p===0){q.seW(a0)
p=B.c3(q.r)
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gp(0)}a3.DK(n,m,d.a,f.d)}},
aSH(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.he(new B.I(0,0,0+w.a,0+w.b),this.b)},
aSR(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.H)(k),++u){t=k[u]
s=B.l4(new B.r(n.ff(t.a,m,e),0),new B.r(n.ff(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.seW(p.mK(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seW(null)}o=n.e.e4()
w.drawRect(B.dJ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.H)(l),++u){t=l[u]
s=B.l4(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.seW(q.mK(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seW(null)}o=n.e.e4()
j.drawRect(B.dJ(s),o)
o.delete()}},
aSP(d,e,f){var w,v
this.a0l(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ae6(d,e,f,w)
if(v.b.length!==0)this.aSW(d,e,f,w)},
ae6(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l4(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mK(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
e.DK(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=C.d.ao(o,n.gbT(n).eF(0,2))
J.ba(r.save())
r.translate(h,g)
n=n.gNP().b
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
s.ae7(0,n,new B.r(h,o),k)}}},
aSW(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l4(m,l)
if(j!=null){n.r=C.E.gp(0)
n.seW(j.mK(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seW(null)}k=p.c
n.c=k
if(k===0){n.seW(null)
k=B.c3(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gp(0)}n.d=p.x
a1.DK(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=n.gbT(n).eF(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.ba(r.save())
r.translate(f,e)
n=n.gNP().b
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
s.ae7(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_n(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KP.prototype={
galC(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galD(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galE(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galA(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alW(d){var w,v=this,u=null,t=v.d,s=A.bxC(t.d),r=t.a
r=r.a&&A.bRl(r.b)?r.b:u
w=B.b([B.b3(u,v.c,C.u,u,u,new B.b0(u,u,r,u,u,u,C.F),u,u,u,s,u,u,u,u)],x.p)
s=new A.axF(w)
if(v.galC())C.b.hz(w,s.$1(!0),new A.AA(D.B1,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galE())C.b.hz(w,s.$1(!0),new A.AA(D.mw,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galD())C.b.hz(w,s.$1(!0),new A.AA(D.B2,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.galA())C.b.hz(w,s.$1(!0),new A.AA(D.dJ,t,new B.F(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
u(d){return B.jv(new A.axE(this))}}
A.Rt.prototype={
X(){return new A.XZ(new B.bl(null,x.eF))}}
A.XZ.prototype={
aye(){switch(this.a.c.a){case 0:return C.e9
case 1:return C.fE
case 2:return C.dI
case 3:return C.fF}},
ayK(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayg(d){this.a.toString
return},
aA(){this.aO()
$.cy.x2$.push(this.ga4J())},
bd(d){this.bG(d)
$.cy.x2$.push(this.ga4J())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayK()
return B.bzn(B.b26(0,B.b3(v.aye(),t.e,C.u,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.aco.prototype={
bm(d){return A.bRc(this.f,this.r,this.e)},
bw(d,e){var w=this.e
if(e.A!==w){e.A=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.T!==w){e.T=w
e.a7()}}}
A.a0E.prototype={
h4(d){if(!(d.b instanceof B.ho))d.b=new B.ho(null,null,C.v)},
hK(d){if(this.A===C.aE)return this.y5(d)
return this.VS(d)},
aLk(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
a9x(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
dB(d){var w=this.a9w(d,B.hF())
switch(this.A.a){case 0:return d.bC(new B.F(w.a,w.b))
case 1:return d.bC(new B.F(w.b,w.a))}},
a9w(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.A===C.aE?d.b:d.d,m=o.a8$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.A.a){case 0:q=B.es(u,null)
break
case 1:q=B.es(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9x(p)
t=Math.max(t,o.aLk(p))
m=r.aw$}return new A.bfM(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9w(o,B.mA()),m=n.a,l=n.b
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
q=s.b-p.a9x(r==null?B.P(B.X("RenderBox was not laid out: "+B.G(w).j(0)+"#"+B.bZ(w))):r)/2
switch(p.A.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aw$;++u}},
ea(d,e){return this.va(d,e)},
aQ(d,e){if(this.gC(0).gW(0))return
this.a2.sbk(0,null)
this.t4(d,e)},
l(){this.a2.sbk(0,null)
this.aoP()}}
A.bfM.prototype={}
A.axG.prototype={}
A.jX.prototype={
gbD(){return[this.a,this.b]}}
A.nV.prototype={}
A.ah4.prototype={}
A.ah5.prototype={
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
A.ah6.prototype={}
A.Tq.prototype={
l(){var w,v,u
for(w=this.Wx$,v=w.length,u=0;u<v;++u)w[u].l()
this.iw()}}
A.AA.prototype={
goH(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dI
case 1:return C.fF
case 2:return C.e9
case 3:return C.fE}},
gb0f(){var w=this.d,v=A.bxC(w.d),u=A.bFb(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).af(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).af(0,new B.al(u.a,0,u.c,0))}},
gais(){var w=this.d,v=A.bFb(w.a),u=A.bxC(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd4(0)+(v.gd3(0)+v.gd4(0))
case 1:case 3:return u.gex()+v.gex()}},
aXh(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goH().c.d
if(o==null)o=$.lv().OV(d,f-e)
w=p.c
v=w!==D.mw
if((!v||w===D.dJ)&&p.d instanceof A.nW){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bwQ(u,d)
w=new B.iX(t,B.ai(t).i("iX<1>"))
s=w.ght(w).f1(0,new A.b_4(u),x.W).h0(0)}else{r=$.bvR()
w=!v||w===D.dJ
v=p.d
q=r.aWx(w?v.w:v.z,o,f,e)
v=B.k8(q,new A.b_5(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ai(s).i("af<1,nV>")
w=B.Q(new B.af(s,new A.b_6(p,e,f,o,g,d),w),w.i("ar.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
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
t=j.ghJ()
s=!u||w===D.dJ?C.H:C.aE
q=B.b([],x.p)
if(w===D.B1||v)j.goH()
if(j.goH().c.a){v=!u||w===D.dJ?r:j.goH().c.c
p=!u||w===D.dJ?j.goH().c.c:r
o=j.gb0f()
n=!u||w===D.dJ?C.aE:C.H
j.gais()
m=j.gais()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.b3(i,A.bYu(new A.axG(),n,j.aXh(r-m,l,u,w)),C.u,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B2||w===D.dJ)j.goH()
return new B.eN(t,i,i,B.bU1(q,C.l,s,i,C.f,C.M,0,i,i,C.bY),i)}}
A.a0T.prototype={
gbD(){return[this.a,this.b]}}
A.a57.prototype={
gbD(){return[this.a,this.b]}}
A.N5.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a59.prototype={
gac_(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayb.prototype={}
A.aEJ.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahq.prototype={}
A.akt.prototype={}
A.aku.prototype={}
A.akB.prototype={}
A.KY.prototype={
i5(d,e,f){}}
A.vL.prototype={}
A.hn.prototype={
gdM(){return null},
gag9(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.N4
if(w)return!0
return!(v instanceof A.N1)&&!(v instanceof A.N0)&&!(v instanceof A.N2)&&!(v instanceof A.N_)&&!w&&!(v instanceof A.N3)}}
A.a5d.prototype={
gdM(){return this.a.b}}
A.a5e.prototype={
gdM(){return this.a.b}}
A.a5f.prototype={
gdM(){return this.a.b}}
A.N0.prototype={}
A.N1.prototype={}
A.a5i.prototype={
gdM(){return this.a.b}}
A.N3.prototype={}
A.N4.prototype={
gdM(){return this.a.b}}
A.a5c.prototype={
gdM(){return this.a.b}}
A.a5b.prototype={
gdM(){return this.a.b}}
A.N_.prototype={
gdM(){return this.a.b}}
A.a5g.prototype={
gdM(){return this.a.gdM()}}
A.a5h.prototype={
gdM(){return this.a.gdM()}}
A.N2.prototype={
gdM(){return this.a.gdM()}}
A.G6.prototype={
Zf(d){this.U=d.b
this.T=d.c
this.a2=d.d},
afD(){var w=this,v=null,u=w.ah=B.byu(v,v)
u.ay=new A.aV4(w)
u.ch=new A.aV5(w)
u.CW=new A.aV6(w)
u.cy=new A.aV7(w)
u.cx=new A.aV8(w)
u=w.aJ=B.GV(v,-1,v)
u.A=new A.aV9(w)
u.a4=new A.aVa(w)
u.U=new A.aVb(w)
u=w.bz=B.a7b(v,w.a2,v)
u.p3=new A.aVc(w)
u.p4=new A.aVd(w)
u.RG=new A.aVe(w)},
cz(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dB(d){return new B.F(d.b,d.d)},
kK(d){return!0},
mU(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bz
w===$&&B.a()
w.oE(d)
w=v.aJ
w===$&&B.a()
w.oE(d)
w=v.ah
w===$&&B.a()
w.oE(d)}else if(x.gJ.b(d))v.l6(new A.a5h(d))},
gNm(d){return new A.aVf(this)},
gNo(d){return new A.aVg(this)},
l6(d){var w,v,u=this
if(u.U==null)return
w=d.gdM()
v=w!=null?u.a_f(w):null
u.U.$2(d,v)
u.a4=C.bv},
gL8(d){return this.a4},
gFD(){var w=this.av
w===$&&B.a()
return w},
aL(d){this.fj(d)
this.av=!0},
aG(d){this.av=!1
this.f6(0)},
$ijy:1}
A.Oo.prototype={
X(){return new A.VO(B.b([],x.r),B.A(x.S,x.J),new A.aKW(B.A(x.y,x.dj)),null,null)}}
A.VO.prototype={
u(d){var w,v=this,u=v.a4L(),t=v.CW
t.toString
t=v.abw(t.aB(0,v.ghI().gp(0)))
w=v.abw(u)
v.a.toString
return new A.KP(new A.a71(t,w,null),u,null)},
abw(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ai(w).i("af<1,ec>")
w=B.Q(new B.af(w,new A.bfV(this,d),v),v.i("ar.E"))
return d.aRl(w,this.cy)},
a4L(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.V3(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRA(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aR_(new A.EK(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazz(),t.c,t.d))}return r},
azA(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gag9())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.K(new A.bfT(v))
return}v.K(new A.bfU(v,e))},
nX(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4L(),new A.bfW(w)))}}
A.pQ.prototype={
XF(d,e,f){var w,v,u,t,s,r,q=B.ag(d.f,e.f,f),p=B.ag(d.r,e.r,f),o=B.ag(d.w,e.w,f),n=B.ag(d.x,e.x,f),m=B.ag(d.y,e.y,f),l=B.ag(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a58(B.a13(d.a.b,j.b,f),j.a)
w=A.bF7(d.at,e.at,f)
v=A.bFc(d.c,e.c,f)
u=A.bFe(d.d,e.d,f)
t=A.bHb(d.e,e.e,f)
s=A.ky(d.ch,e.ch,f,A.c6h(),x.cz)
s.toString
r=A.ky(d.CW,e.CW,f,A.c6g(),x.bO)
r.toString
u=A.by6(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VG(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.by6(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRA(d,e,f,g){return this.VG(null,null,d,e,f,g,null)},
aR_(d){var w=null
return this.VG(w,d,w,w,w,w,w)},
aRl(d,e){var w=null
return this.VG(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
arn(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qn(n.a,new A.aKV())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.H)(v),++p){o=v[p]
if(o.k(0,D.fH))continue
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
adp(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKU(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aR6(d){return this.adp(d,null)},
aR8(d){return this.adp(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Op.prototype={
gbD(){return[this.a]}}
A.a0M.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mH.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KT.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yx.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKG.prototype={
L(){return"LabelDirection."+this.b}}
A.a5a.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EK.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a72.prototype={
gbD(){return[4,C.hM,16,D.xv,0,120,A.c6j(),!1,!1,!1,0,C.J,A.c6i()]}}
A.n4.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qo.prototype={}
A.rD.prototype={
gbD(){return[this.a,this.b,C.cV,C.x,null]}}
A.tA.prototype={
gbD(){return[this.a,this.b]}}
A.Gx.prototype={
gbD(){return[this.a]}}
A.Oq.prototype={}
A.zj.prototype={
hj(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XF(v,w,d)}}
A.ahd.prototype={}
A.ahe.prototype={}
A.ahr.prototype={}
A.akv.prototype={}
A.aky.prototype={}
A.amg.prototype={}
A.amh.prototype={}
A.ami.prototype={}
A.amk.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.amn.prototype={}
A.aqN.prototype={}
A.ass.prototype={}
A.aKW.prototype={
V3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.y5
u=new A.zn(d,x.y)
t=this.a
if(t.aH(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.qn(d,new A.aKX())}catch(p){return D.y5}v=null
try{v=C.b.qn(w.a,new A.aKY())}catch(p){return D.y5}o=v.a
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
A.amj.prototype={}
A.aKZ.prototype={
i5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac_(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.I(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aPX(new B.I(0,0,u,v))}d.a0k(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.H)(v),++t)d.aSN(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSJ(a3,q,a4)
d.aSO(a3,q,a4)
d.amd(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.R(o)
if(n.gq(o)!==p.length)throw B.e(B.e8("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vw(q,i,j,k))}}d.aSV(a3,s,a4)
if(w.gac_(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aST(a2,a3,v,f,new A.Gx(g),a4)}},
aSJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxB(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.H)(n),++v){u=n[v]
t=p.ZP(o,e,u,f)
s=p.ajE(o,e,t,u,f)
r=p.ZR(o,e,t,u,f,!0)
q=p.ajD(o,e,t,u,f)
p.aSM(d,s,p.ZO(o,e,t,u,f,!0),f,e)
p.aSG(d,q,r,f,e)
p.aSK(d,t,e)
p.aSI(d,t,e,f)}},
aSN(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bxB(a5.a),a8=A.bxB(a6.a)
if(a7.length!==a8.length)throw B.e(B.bI("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bT.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.ai(n).i("cx<1>")
l=B.Q(new B.cx(n,m),m.i("ar.E"))
k=a2.ZP(a3,a5,o,b2)
j=a2.ZQ(a3,a6.aR8(l),l,b2,k)
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
a1=new B.mK(C.dx,C.bk,C.e4,C.et,C.dS).e4()
n=B.dJ(new B.I(0,0,t,s))
m=$.bT.b
if(m===$.bT)B.P(B.vu(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e4()
n=j.e
a4.drawPath((n==null?j.e=new B.mL(j.gjt().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSO(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZV(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fH)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).ae5(s,q,new B.r(p,o))}}},
aSV(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fJ(b3,new A.aL1())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.H)(b3),++o){n=b3[o]
m=n.a
l=b1.ZV(m,w,b4)
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
a1=Math.min(s,Math.max(r,B.kv(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.kv(q.$2(m,k))))
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
b0=B.l4(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.seW(a6.mK(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seW(null)}a4=a9.c
f.c=a4
if(a4===0){f.seW(null)
a4=B.c3(f.r)
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gp(0)}b2.DK(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.P(B.rC(d.a))
f.ae5(t,j,new B.r(h,g))}}},
ZQ(d,e,f,g,h){var w=this.ajF(d,e,f,g,h)
return w},
ZP(d,e,f,g){return this.ZQ(d,e,f,g,null)},
ajF(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.ck($.an().r,C.ah,null,null,B.b([],x.v)):a5,f=J.R(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
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
s=new B.LT(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iB(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZR(d,e,f,g,h,i){var w=this,v=B.MM(f),u=J.R(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.aE(new B.cw(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,s))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pp())
return v},
ajE(d,e,f,g,h){return this.ZR(d,e,f,g,h,!1)},
ZO(d,e,f,g,h,i){var w=this,v=B.MM(f),u=J.R(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.aE(new B.cw(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.aE(new B.cw(t,0))
v.aE(new B.cw(w.ff(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.aE(new B.pp())
return v},
ajD(d,e,f,g,h){return this.ZO(d,e,f,g,h,!1)},
aSM(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.byt(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.ij(e,r.r)},
aSG(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.byt(s,q.b,q.c,new B.I(v,0,u,t))
d.a.ij(e,r.r)},
aSK(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MO(B.MM(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k9:C.e4
u.e=C.et
u.r=v.gp(0)
u.seW(null)
u.c=f.x
u.r=v.gp(0)
$.lv()
u.z=new B.zs(C.aL,w.c*0.57735+0.5)
d.a.ij(A.aBb(e,f.cy).ed(w.b),this.f)},
aSI(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k9:C.e4
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
A.byt(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bWq(t)
d.a.ij(A.aBb(e,f.cy),s.f)},
aST(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLo(b1),b3=J.R(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.e8("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lv().a_m(b4,u.b)
s=u.a
r=w.k(0,C.iP)?new B.kq(1):w
q=new B.tw(new B.hR(s,a8,a8,C.bv,a8,a8,a8,a8,a8,a8,t),C.cV,C.x,r,a8,a8,a8,a8,C.bm,a8)
q.ags(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.H)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.ff(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hM.gex()
k=o+(w-1)*4+(C.hM.gd3(0)+C.hM.gd4(0))
j=t-k-16
i=a7.a_n(b3,l,D.xv,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FV(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLn(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lv().KC(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lv().KC(new B.F(t,w),0)
if(!C.J.k(0,C.J)){s=a7.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b5.Wk(0,new A.aL_(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.H)(b0),++n){q=b0[n]
a5=A.bZ5(q.r,q.w)
A:{if(D.DX===a5){a6=a3
break A}if(D.DY===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wk(0,new A.aL0(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZV(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
WZ(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ak4(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fJ(t,new A.aL2())
return t.length===0?null:t},
ak4(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.H)(w),++r){q=w[r]
if(q.k(0,D.fH))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qo(s,f,g,C.b.hy(w,v),v.a,v.b)}else return null}}
A.vw.prototype={}
A.a71.prototype={
bm(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcN(),t=new A.aKZ()
t.a1v()
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
w.a=D.a_u
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
t=new A.ab9(this.d,v,u,t,d,C.bv,new B.bs(),B.aK(x.g))
t.bl()
t.Zf(v.cx)
t.afD()
return t},
bw(d,e){e.sig(0,this.d)
e.sZ_(this.e)
e.scN(B.bv(d,null,x.w).w.gcN())
e.A=d
e.bf()}}
A.ab9.prototype={
sig(d,e){if(this.fA.k(0,e))return
this.fA=e
this.bf()},
sZ_(d){var w=this
if(w.aI.k(0,d))return
w.aI=d
w.a14(d.cx)
w.bf()},
scN(d){if(this.fZ.k(0,d))return
this.fZ=d
this.bf()},
aQ(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.ba(s.save())
s.translate(e.a,e.b)
w=u.A
v=u.gC(0)
u.fB.i5(w,new A.a1j(t,v),new A.vL(u.fA,u.aI,u.fZ,x.o))
s.restore()},
a_f(d){var w=this,v=w.gC(0)
return new A.Oq(w.fB.WZ(d,v,new A.vL(w.fA,w.aI,w.fZ,x.o)))}}
A.Nt.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1j.prototype={
aPX(d){this.a.a.clipRect(B.dJ(d),$.nK()[1],!0)
return null},
aed(d,e){d.aQ(this.a,e)},
Wk(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.ba(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lv()
s.YY(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DK(d,e,f,g){var w=new B.ck($.an().r,C.ah,null,null,B.b([],x.v))
w.aE(new B.fn(d.a,d.b))
w.aE(new B.cw(e.a,e.b))
this.a.ij(A.aBb(w,g),f)}}
A.zn.prototype={
gbD(){return[this.a]}}
A.amu.prototype={}
A.a1u.prototype={}
A.b2x.prototype={
KC(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXS(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d7(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXT(d,e){var w,v
if(d==null)return D.a_F
w=d.b
v=e/2
return d.aRb(w>v?v:w)},
OV(d,e){var w,v=Math.max(C.d.cF(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b00(w)},
b00(d){if(d<1)return this.aJM(d)
return this.a8z(d)},
aJM(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8z(d*q)/q},
a8z(d){var w,v=C.e.j(C.d.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aV(d)/10:d
if(w>=7.6)return 10*C.d.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a1(Math.pow(10,v))
else return C.d.a1(Math.pow(10,v))},
ajU(d){if(d>=1)return 1
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
a_m(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.iU
w=e.a?u.w.c3(e):e
v=B.bM(d,C.vq)
v=v==null?null:v.ay
return v===!0?w.c3(C.mg):w},
ajM(d,e,f,g){var w=C.d.ai(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["K(qq)","D(eA)","~(v,fL)","K(ec,v)","T<~>()","K(K,qq)","bQ(K,tz)","pD(K)","v(qo,qo)","Ij(oc)","HZ(B,bE)","Jm(od)","vA(@)","wv(@)","ec(K)","CG(@)","ad(K,tz)","v_(dx<v_>)","E6(dx<aFy>)","K(vA)","K(wv)","wO(B,bE)","B7(z)","~()","qq(@)","~(hn,KV?)","xJ(@)","K(is)","D(fL)","~(v,is)","~(@)","jX(nV)","c(nV)","jX(bH<v,K>)","jX(K)","nV(jX)","~(hn,Oq?)","ec(ec)","lJ(wl<lJ>)","zj(@)","T<od>(cg<od>)","tA(v)","v0(eA,K,ec,v)","rD(n4)","D(ec)","v(vw,vw)","K(fL)","T<oc>(cg<oc>)","v(v,v,K)","fL(fL,fL,K)","is(is,is,K)","mG(mG,mG,K)","CY?(fL,v,is,v)","E(fL)","c(K,tz)","eA(eA,eA,K)","D(K)","n0(n0,n0,K)","nq(nq,nq,K)","kR(kR,kR,K)","lf(lf,lf,K)","f(kR)","f(lf)","ec(ec,ec,K)","mH(mH,mH,K)","v0(eA,K,ec,v{size:K?})","D(eA,ec)","K(r,r)","u<tA>(ec,u<v>)","y8(z)","u<rD>(u<n4>)","E(n4)","yv(eG<B?>)"])
A.aFu.prototype={
$1(d){var w=B.cT(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qq(J.a6(v==null?"":v),A.p5(w.h(0,"revenue_net")),A.p5(w.h(0,"expense_net")),A.p5(w.h(0,"result_net")))},
$S:z+24}
A.aFv.prototype={
$1(d){var w,v,u,t=B.cT(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.a6(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.p5(t.h(0,"gross"))
u=B.bj(t.h(0,"purchases_count"))
u=u==null?null:C.d.a1(u)
if(u==null)u=0
return new A.vA(s,r,w,v,u,A.p5(t.h(0,"avg_basket")))},
$S:z+12}
A.aFw.prototype={
$1(d){var w,v=B.cT(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.a6(t==null?"unbekannt":t)
w=B.bj(v.h(0,"quantity"))
w=w==null?null:C.d.a1(w)
if(w==null)w=0
return new A.wv(u,t,w,A.p5(v.h(0,"gross")))},
$S:z+13}
A.aFN.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.R(d)
v=w.h(d,"code")
v=J.a6(v==null?"":v)
u=w.h(d,"name")
u=J.a6(u==null?"":u)
t=w.h(d,"direction")
return new A.CG(v,u,J.a6(t==null?"expense":t),A.ud(w.h(d,"net")),A.ud(w.h(d,"tax")),A.ud(w.h(d,"gross")))},
$S:z+15}
A.btE.prototype={
$1(d){return new A.v_(d.a9($.c_(),x.A))},
$S:z+17}
A.btF.prototype={
$1(d){return new A.E6(d.a9($.bQ2(),x.D))},
$S:z+18}
A.bvr.prototype={
$1(d){return E.aFx()},
$S:z+38}
A.btG.prototype={
$1(d){var w=d.a9($.xv(),x.P)
return d.a9($.avD(),x.a).G3(w)},
$S:z+40}
A.btD.prototype={
$1(d){var w=d.a9($.xv(),x.P)
return d.a9($.avD(),x.a).FZ(w)},
$S:z+47}
A.btC.prototype={
$1(d){return this.ajv(d)},
ajv(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.a9($.c_(),x.A).fF("finance_balance_kpis",t),$async$$1)
case 3:s=r.cT(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:220}
A.aFt.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.au(0,$.avD(),x.a).pH(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFs.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.au(0,$.avD(),x.a).LL(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFL.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwm()
if(s.e==null)B.P(B.X(y.b))
s.gc5().bA(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFD.prototype={
$0(){return this.a.Jy(this.b,this.c)},
$S:0}
A.aFE.prototype={
$0(){return this.a.Bt(this.b,this.c)},
$S:0}
A.aFF.prototype={
$0(){var w=x.z
return B.aV(this.a,!1).e2(B.e9(new A.aFC(),null,w),w)},
$S:0}
A.aFC.prototype={
$1(d){return F.CY},
$S:z+69}
A.aFG.prototype={
$0(){return B.oi(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFH.prototype={
$0(){var w=this
return w.a.Bu(w.b,w.c,w.d)},
$S:0}
A.aFK.prototype={
$0(){return D.atG},
$S:62}
A.aFJ.prototype={
$2(d,e){return new A.HZ(B.j(d),null)},
$S:z+10}
A.aFI.prototype={
$1(d){return new A.Jm(d,null)},
$S:z+11}
A.aFB.prototype={
$1(d){var w=null,v=this.a,u=$.dQ()
v=B.h("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.hX(B.b([B.cW(C.bR,w,w,new A.aFz(u),w,w),B.dl(F.v2,new A.aFA(u),B.dL(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.v3)},
$S:45}
A.aFz.prototype={
$0(){B.aV(this.a,!1).cJ(!1)
return null},
$S:0}
A.aFA.prototype={
$0(){B.aV(this.a,!1).cJ(!0)
return null},
$S:0}
A.bif.prototype={
$0(){var w=this.a.au(0,$.xv().geP(),x.V),v=E.aFx()
w.ra(0,v)
return v},
$S:0}
A.big.prototype={
$0(){var w=this.a.au(0,$.xv().geP(),x.V),v=new B.b7(Date.now(),0,!1),u=new E.lJ(B.bK(B.aT(v),1,1,0,0,0,0),v)
w.ra(0,u)
return u},
$S:0}
A.bih.prototype={
$0(){return this.a.IT(this.b,this.c)},
$S:0}
A.bie.prototype={
$2(d,e){return new B.oM(B.U(d).aQw(B.U(d).ax.aRq(C.h,C.m)),e,null)},
$S:1008}
A.boA.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dr(),s=A.Oc(!1,C.nT,"Umsatz 7 %",t.ap(u.a),w),r=A.Oc(!1,C.nT,"Umsatz 19 %",t.ap(u.b),w),q=A.Oc(!0,D.a9U,"Umsatz netto",t.ap(u.c),w),p=A.Oc(!1,D.a9T,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return B.a5R(1.7,B.b([s,r,q,p,A.Oc(!0,C.nJ,"Ergebnis",n,o<0?C.a8:C.al),A.Oc(!1,C.fK,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.jS,!0)},
$S:111}
A.aKF.prototype={
$0(){return F.T6},
$S:62}
A.aKE.prototype={
$2(d,e){var w=null
return B.bi(C.a8,B.h("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,B.y(C.h,13,C.j),w,w,w),C.eE,w,C.B,w,3)},
$S:272}
A.aKD.prototype={
$1(d){return new A.Ij(d,null)},
$S:z+9}
A.bfD.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dr(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ai(g).i("af<1,K>"),e=f.i("ar.E"),d=B.Q(new B.af(g,new A.bfs(),f),e)
i=A.jP(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.af(g,new A.bft(),f),e)
d=A.jP(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.af(g,new A.bfu(),f),e)
k=A.jP(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.al(h.b,1)
v=B.Q(new B.af(g,new A.bfv(),f),e)
w=A.jP(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.al(h.a,1)
u=B.Q(new B.af(g,new A.bfw(),f),e)
v=A.jP(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.al(r.c,1)
t=B.Q(new B.af(g,new A.bfx(),f),e)
u=A.jP(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.al(h.c,1)
s=B.Q(new B.af(g,new A.bfy(),f),e)
t=A.jP(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.af(g,new A.bfz(),f),e)
h=A.jP(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.af(g,new A.bfA(m),f),e)
m=A.jP(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.af(g,new A.bfB(l),f),e)
l=A.jP(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.al(j,1)
j=B.Q(new B.af(g,new A.bfC(j),f),e)
return B.a5R(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jP(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jS,!0)},
$S:111}
A.bfs.prototype={
$1(d){return d.b},
$S:z+0}
A.bft.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfu.prototype={
$1(d){return d.d},
$S:z+0}
A.bfv.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfw.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfx.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfy.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfz.prototype={
$1(d){return d.d},
$S:z+0}
A.bfA.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfB.prototype={
$1(d){return this.a},
$S:z+0}
A.bfC.prototype={
$1(d){return this.a},
$S:z+0}
A.bfE.prototype={
$0(){return A.bAr(this.b,1.45,new A.TP(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfF.prototype={
$0(){return A.bAr(this.b,1.6,new A.U0(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsB.prototype={
$1(d){var w=this,v=null,u=B.aM(16),t=x.p,s=B.b([B.ak(B.b([B.ay(B.h(w.a,v,v,v,B.bz(C.h,18,C.n),v,v,v),1),B.fk(v,v,D.ac3,v,v,new A.bsA(d),v,v,v,"Schlie\xdfen",v)],t),C.l,C.f,C.i,0,v,v)],t)
C.b.J(s,B.b([B.h(w.b,v,v,v,B.y(C.o,12,C.aP),v,v,v),C.D],t))
s.push(C.r)
s.push(B.c5(new B.mF(w.c,w.d,v),v,17976931348623157e292))
return B.Ml(v,C.p,new B.ac(C.ad,B.a7(s,C.z,C.f,C.M),v),v,v,v,C.fm,C.m0,v,new B.dc(u,C.J),v)},
$S:1009}
A.bsA.prototype={
$0(){return B.aV(this.a,!1).eq()},
$S:0}
A.bfG.prototype={
$0(){var w=this.a,v=B.b5(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAr(this.b,2.4,new A.Y9(w.w,w.y,w.z,null),C.b.cd(u," \xb7 "),v)
return null},
$S:0}
A.bnJ.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.bnK.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bnL.prototype={
$1(d){return A.aKU(null,1.4,null,C.a8,0.35,D.agA,D.DO,null,!1,!1,!1,!1,D.Fg,!1,10,D.Y0,!0,C.lu,B.b([new A.eA(0,d),new A.eA(this.a,d)],x.U))},
$S:z+14}
A.b6h.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6j.prototype={
$2(d,e){var w=null
return B.h(this.a.aL6(d),w,w,w,B.y(C.o,10,C.N),w,w,w)},
$S:z+16}
A.b6k.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=this.a.length)return C.uR
return new B.ac(C.l_,B.h(C.c.cP(this.a[v].a,5),w,w,w,B.y(C.o,9,C.N),w,w,w),w)},
$S:z+6}
A.b6i.prototype={
$1(d){return D.a8r},
$S:z+7}
A.b77.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b78.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b79.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b7a.prototype={
$2(d,e){var w=null,v=C.d.a1(d)
if(v<0||v>=3)return C.uR
return new B.ac(C.l_,B.h(this.a[v],w,w,w,B.y(C.h,12,C.n),w,w,w),w)},
$S:z+6}
A.bge.prototype={
$1(d){return d.d},
$S:z+19}
A.bgf.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bpX.prototype={
$1(d){return d.d},
$S:z+20}
A.bpY.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b4G.prototype={
$0(){return D.atL},
$S:62}
A.b4F.prototype={
$2(d,e){return new A.wO("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4E.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bi(m,B.a7(B.b([B.h("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.N),m,m,m),C.D,B.h("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.o,12.5,C.j),m,m,m),C.r,B.jN(C.c5,B.b([B.f4(C.xX,D.aHp,new A.b4y(w,v),m),B.f4(D.abI,D.aGg,new A.b4z(w,v),m)],u),C.d7,8,8)],u),C.z,C.f,C.i),C.ac,m,C.B,m,3)}w=new A.b4H(d)
t=C.b.fO(n.a.e.d,0,new A.b4A())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jv(new A.b4B(new A.b4I(w),r,w,s))
v=J.R(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a7(B.b([w,C.D,B.ak(B.b([B.ay(B.h("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.o,11,C.j),m,m,m),1),B.nl(D.acU,D.aGD,new A.b4C(q,p),m),B.nl(D.acx,D.aGn,new A.b4D(q,p,d),m)],o),C.l,C.f,C.i,0,m,m)],o),C.af,C.f,C.i)},
$S:259}
A.b4y.prototype={
$0(){return A.auZ(this.a,this.b,null)},
$S:0}
A.b4z.prototype={
$0(){return A.auW(this.a,this.b)},
$S:0}
A.b4H.prototype={
$1(d){var w=B.bj(J.a1(this.a,d))
return w==null?null:w},
$S:1010}
A.b4I.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.al(v,1)
w=B.b5(w,".",",")+" %"}return w},
$S:32}
A.b4A.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4B.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jP(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hV,o.$1("liquidity1_pct")),m=A.jP(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hV,o.$1("liquidity2_pct")),l=A.jP(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hV,o.$1("liquidity3_pct"))
o=A.jP(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hV,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.al(w,1)
w=B.b5(w,".",",")+" %"}w=A.jP(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hV,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dr()
v=u.ap(v)
return B.a5R(p,B.b([n,m,l,o,w,A.jP(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.hV,v)],x.p),q,12,12,C.jS,!0)},
$S:111}
A.b4C.prototype={
$0(){return A.auW(this.a,this.b)},
$S:0}
A.b4D.prototype={
$0(){return A.auZ(this.a,this.b,this.c)},
$S:0}
A.bsz.prototype={
$1(d){return new A.B7(this.a,new A.bsy(this.b),this.c,null)},
$S:z+22}
A.bsy.prototype={
$0(){var w=this.a,v=$.bwl()
if(w.e==null)B.P(B.X(y.b))
w.gc5().bA(v)},
$S:0}
A.b4s.prototype={
$0(){},
$S:0}
A.b4t.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4u.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4w.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.qM(u.b,B.bK(2024,1,1,0,0,0,0),null,r,new B.b7(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.K(new A.b4v(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4v.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4x.prototype={
$0(){return B.aV(this.a,!1).eq()},
$S:0}
A.b4J.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.aa(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4K.prototype={
$1(d){return new A.xJ(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axX.prototype={
$1(d){return d.e},
$S:z+27}
A.axY.prototype={
$2(d,e){return d+e},
$S:46}
A.ay_.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ay1.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ay2.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.aed(v.d,v.e)},
$S:0}
A.axF.prototype={
$1(d){return 0},
$S:1011}
A.axE.prototype={
$2(d,e){return B.fq(C.c_,this.a.alW(e),C.q,C.bA,null)},
$S:1012}
A.b_2.prototype={
$1(d){return d.a},
$S:z+31}
A.b_3.prototype={
$1(d){return d.b},
$S:z+32}
A.b_4.prototype={
$1(d){return new A.jX(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_5.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mw||v===D.dJ))t=1-t
return new A.jX(d,t*w.d)},
$S:z+34}
A.b_6.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goH(),p=d.a
r.goH()
r=$.lv()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.al(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.al(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.al(v/1000,1)
t="K"}else{u=C.d.al(v,r.ajU(Math.abs(s.b-s.c)))
t=""}if(C.c.fN(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nV(d,q.c.b.$2(p,new A.tz(u+t,s.e)))},
$S:z+35}
A.aV4.prototype={
$1(d){this.a.l6(new A.a5d(d))},
$S:205}
A.aV5.prototype={
$1(d){this.a.l6(new A.a5e(d))},
$S:44}
A.aV6.prototype={
$1(d){this.a.l6(new A.a5f(d))},
$S:27}
A.aV7.prototype={
$0(){this.a.l6(D.a1g)},
$S:0}
A.aV8.prototype={
$1(d){this.a.l6(new A.N1())},
$S:49}
A.aV9.prototype={
$1(d){this.a.l6(new A.a5i(d))},
$S:48}
A.aVa.prototype={
$0(){this.a.l6(D.a1h)},
$S:0}
A.aVb.prototype={
$1(d){this.a.l6(new A.N4(d))},
$S:102}
A.aVc.prototype={
$1(d){this.a.l6(new A.a5c(d))},
$S:206}
A.aVd.prototype={
$1(d){this.a.l6(new A.a5b(d))},
$S:207}
A.aVe.prototype={
$1(d){return this.a.l6(new A.N_(d))},
$S:172}
A.aVf.prototype={
$1(d){return this.a.l6(new A.a5g(d))},
$S:66}
A.aVg.prototype={
$1(d){return this.a.l6(new A.N2(d))},
$S:59}
A.bfV.prototype={
$1(d){var w=this.a.db.h(0,C.b.hy(this.b.ch,d))
return d.aR6(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfT.prototype={
$0(){var w=this.a
C.b.aa(w.cy)
w.db.aa(0)},
$S:0}
A.bfU.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fJ(w,new A.bfS())
v=this.a
u=v.db
u.aa(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.aa(q)
q.push(new A.Gx(w))},
$S:0}
A.bfS.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bfW.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKV.prototype={
$1(d){return!d.k(0,D.fH)},
$S:z+1}
A.btq.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFd(t?A.bAc(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tA(w,new A.yx(!0,A.bB_(),new A.btp(v)))},
$S:z+41}
A.btp.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bU_(A.bAc(d,e,f),w,A.c1O(d,e,f))},
$S:z+42}
A.btn.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j6(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rD(C.d.j(d.b),w)},
$S:z+43}
A.aKX.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKY.prototype={
$1(d){return!d.k(0,D.fH)},
$S:z+1}
A.aL1.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aL_.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aL0.prototype={
$0(){this.a.aed(this.b,this.c)},
$S:0}
A.aL2.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.axQ.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axR.prototype={
$2(d,e){return d+e},
$S:46}
A.axU.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iX(v,B.ai(v).i("iX<1>")).aD(0,new A.axV(w,this.a/(u+1),this.c))},
$S:0}
A.axV.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axS.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axT.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHY.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1013}
A.aBc.prototype={
$1(d){return d},
$S:1014};(function aliases(){var w=A.KO.prototype
w.a0k=w.i5
w.amd=w.aSP
w.ame=w.ae6
w=A.Tq.prototype
w.aoP=w.l
w=A.KY.prototype
w.a0l=w.i5
w=A.G6.prototype
w.a14=w.Zf})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5q","bTX",72)
var q
v(q=A.Ts.prototype,"gaEX","aEY",23)
v(q,"gaE0","I9",4)
v(q,"gaEH","Ik",4)
u(A.Tt.prototype,"gasH","asI",25)
t(A,"c4c",3,null,["$3"],["bRf"],49,0)
t(A,"c4d",3,null,["$3"],["bRg"],50,0)
t(A,"c4e",3,null,["$3"],["bRh"],51,0)
t(A,"c4g",4,null,["$4"],["c53"],52,0)
w(A,"c4f","c52",53)
s(A,"bAv","c54",54)
t(A,"c47",3,null,["$3"],["bU0"],55,0)
w(A,"a_d","c7s",56)
w(A,"av0","c57",7)
t(A,"c49",3,null,["$3"],["bUL"],57,0)
t(A,"c4b",3,null,["$3"],["c__"],58,0)
t(A,"c48",3,null,["$3"],["bUK"],59,0)
t(A,"c4a",3,null,["$3"],["bZZ"],60,0)
w(A,"ceJ","bUJ",61)
w(A,"ceK","bZY",62)
r(A.XZ.prototype,"ga4J","ayg",30)
u(A.VO.prototype,"gazz","azA",36)
t(A,"c6h",3,null,["$3"],["bVc"],63,0)
t(A,"c6g",3,null,["$3"],["bRi"],64,0)
w(A,"c6k","c7t",1)
t(A,"bLL",4,null,["$5$size","$4"],["bKb",function(d,e,f,g){return A.bKb(d,e,f,g,null)}],65,0)
s(A,"bB_","c7r",66)
s(A,"bLM","c3T",67)
s(A,"bLP","c5a",68)
s(A,"bLO","c56",3)
s(A,"bLN","c55",3)
w(A,"c6j","bLo",70)
w(A,"c6i","bLn",71)
t(A,"a_k",3,null,["$3"],["c6f"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.S,[A.a6N,A.agm,A.alx,A.IT,A.Jm,A.agk,A.HZ,A.Ij,A.akR,A.am8,A.UC,A.Y9,A.TP,A.U0,A.amE,A.aiW,A.C6,A.asp,A.wO,A.KP,A.AA])
u(B.B,[A.v_,A.E6,A.bh,A.ahq,A.ahg,A.ahi,A.ahj,A.ah8,A.akB,A.ahm,A.ahk,A.ayb,A.ast,A.axZ,A.ahh,A.KY,A.a5S,A.tz,A.aqP,A.aqO,A.ah7,A.akA,A.eA,A.akx,A.akz,A.aoY,A.alo,A.at8,A.aky,A.akh,A.akw,A.axD,A.bfM,A.axG,A.ah4,A.nV,A.akt,A.aku,A.vL,A.hn,A.amh,A.amk,A.ahd,A.ahr,A.ahe,A.akv,A.amn,A.aml,A.ass,A.aqN,A.aKW,A.amj,A.vw,A.a1j,A.amu,A.a1u,A.b2x])
u(B.uY,[A.qq,A.vA,A.wv,A.aAB,A.aBI,A.oc,A.CG,A.od])
u(B.o_,[A.aFu,A.aFv,A.aFw,A.aFN,A.btE,A.btF,A.bvr,A.btG,A.btD,A.btC,A.aFC,A.aFI,A.aFB,A.aKD,A.bfs,A.bft,A.bfu,A.bfv,A.bfw,A.bfx,A.bfy,A.bfz,A.bfA,A.bfB,A.bfC,A.bsB,A.bnL,A.b6i,A.b77,A.b78,A.bge,A.bpX,A.b4E,A.b4H,A.b4I,A.bsz,A.b4K,A.axX,A.ay_,A.axF,A.b_2,A.b_3,A.b_4,A.b_5,A.b_6,A.aV4,A.aV5,A.aV6,A.aV8,A.aV9,A.aVb,A.aVc,A.aVd,A.aVe,A.aVf,A.aVg,A.bfV,A.bfW,A.aKV,A.btq,A.btp,A.btn,A.aKX,A.aKY,A.axQ,A.aBc])
t(A.yv,B.fg)
u(B.xW,[A.aFt,A.aFs,A.aFL,A.aFD,A.aFE,A.aFF,A.aFG,A.aFH,A.aFK,A.aFz,A.aFA,A.bif,A.big,A.bih,A.aKF,A.bfE,A.bfF,A.bsA,A.bfG,A.b4G,A.b4y,A.b4z,A.b4C,A.b4D,A.bsy,A.b4s,A.b4t,A.b4u,A.b4w,A.b4v,A.b4x,A.b4J,A.ay2,A.aV7,A.aVa,A.bfT,A.bfU,A.aL_,A.aL0,A.axU])
u(B.y3,[A.yw,A.anS,A.a6O,A.ahc])
u(B.xX,[A.aFJ,A.bie,A.boA,A.aKE,A.bfD,A.bnJ,A.bnK,A.b6h,A.b6j,A.b6k,A.b79,A.b7a,A.bgf,A.bpY,A.b4F,A.b4A,A.b4B,A.axY,A.ay1,A.axE,A.bfS,A.aL1,A.aL2,A.axR,A.axV,A.axS,A.axT,A.aHY])
u(B.M,[A.B7,A.Rt])
u(B.a3,[A.Ts,A.XZ])
u(B.NK,[A.KU,A.Oo])
u(B.xB,[A.Tt,A.VO])
t(A.a0T,A.ahq)
t(A.ah3,A.a0T)
t(A.a0D,A.ah3)
u(A.a0D,[A.ahf,A.ami])
t(A.nW,A.ahf)
u(B.HY,[A.axO,A.adP,A.CX,A.aEJ,A.aKG,A.Nt])
t(A.fL,A.ahg)
t(A.is,A.ahi)
t(A.mG,A.ahj)
t(A.a0K,A.ah8)
t(A.N5,A.akB)
u(A.N5,[A.ahl,A.amm])
t(A.a0P,A.ahl)
t(A.a0Q,A.ahm)
t(A.CY,A.ahk)
u(A.ayb,[A.KV,A.Oq])
t(A.adR,A.ast)
t(A.ahn,A.adR)
t(A.a0R,A.ahn)
u(B.bf,[A.xJ,A.zj])
t(A.uB,A.ahh)
t(A.KO,A.KY)
u(A.KO,[A.ay0,A.aKZ])
u(B.Ok,[A.a0N,A.a71])
u(B.J,[A.G6,A.ah5])
u(A.G6,[A.aaX,A.ab9])
t(A.qh,A.aqP)
t(A.acn,A.aqO)
t(A.pg,A.ah7)
t(A.v1,A.akA)
t(A.yy,A.akx)
t(A.pD,A.akz)
t(A.Q2,A.aoY)
t(A.n0,A.alo)
t(A.nq,A.at8)
u(A.pD,[A.aln,A.at7])
t(A.kR,A.aln)
t(A.lf,A.at7)
t(A.a5a,A.aky)
u(A.a5a,[A.alm,A.at6])
t(A.a62,A.alm)
t(A.aed,A.at6)
t(A.MS,A.akh)
t(A.v0,A.akw)
t(A.MZ,A.v0)
t(A.aco,B.fA)
t(A.ah6,A.ah5)
t(A.Tq,A.ah6)
t(A.a0E,A.Tq)
t(A.jX,A.ah4)
t(A.a57,A.akt)
t(A.a59,A.aku)
u(A.hn,[A.a5d,A.a5e,A.a5f,A.N0,A.N1,A.a5i,A.N3,A.N4,A.a5c,A.a5b,A.N_,A.a5g,A.a5h,A.N2])
t(A.pQ,A.ami)
t(A.ec,A.amh)
t(A.Op,A.amk)
t(A.a0M,A.ahd)
t(A.mH,A.ahr)
t(A.KT,A.ahe)
t(A.yx,A.akv)
t(A.EK,A.amm)
t(A.a72,A.amn)
t(A.amg,A.eA)
t(A.n4,A.amg)
t(A.qo,A.n4)
t(A.rD,A.aml)
t(A.tA,A.ass)
t(A.Gx,A.aqN)
t(A.zk,A.amj)
t(A.zn,A.amu)
w(A.ah8,A.bh)
w(A.ahf,A.bh)
w(A.ahg,A.bh)
w(A.ahi,A.bh)
w(A.ahj,A.bh)
w(A.ahk,A.bh)
w(A.ahl,A.bh)
w(A.ahm,A.bh)
w(A.ahn,A.bh)
w(A.ahh,A.bh)
w(A.ah3,A.bh)
w(A.ah7,A.bh)
w(A.akh,A.bh)
w(A.akw,A.bh)
w(A.akx,A.bh)
w(A.akz,A.bh)
w(A.akA,A.bh)
w(A.aln,A.bh)
w(A.alm,A.bh)
w(A.alo,A.bh)
w(A.aoY,A.bh)
w(A.aqO,A.bh)
w(A.aqP,A.bh)
w(A.ast,A.bh)
w(A.at7,A.bh)
w(A.at6,A.bh)
w(A.at8,A.bh)
w(A.ah4,A.bh)
v(A.ah5,B.az)
w(A.ah6,B.dN)
v(A.Tq,B.a45)
w(A.ahq,A.bh)
w(A.akt,A.bh)
w(A.aku,A.bh)
w(A.akB,A.bh)
w(A.ahd,A.bh)
w(A.ahe,A.bh)
w(A.ahr,A.bh)
w(A.akv,A.bh)
w(A.aky,A.bh)
w(A.amg,A.bh)
w(A.amh,A.bh)
w(A.ami,A.bh)
w(A.amk,A.bh)
w(A.aml,A.bh)
w(A.amm,A.bh)
w(A.amn,A.bh)
w(A.aqN,A.bh)
w(A.ass,A.bh)
w(A.amj,A.bh)
w(A.amu,A.bh)})()
B.bq9(b.typeUniverse,JSON.parse('{"a6N":{"S":[],"c":[]},"E6":{"aFy":[]},"yv":{"fg":["be<~>"],"fg.T":"be<~>"},"Jm":{"S":[],"c":[]},"HZ":{"S":[],"c":[]},"yw":{"aY":[],"M":[],"c":[]},"agm":{"S":[],"c":[]},"alx":{"S":[],"c":[]},"anS":{"aY":[],"M":[],"c":[]},"IT":{"S":[],"c":[]},"agk":{"S":[],"c":[]},"Ij":{"S":[],"c":[]},"wO":{"S":[],"c":[]},"B7":{"M":[],"c":[]},"a6O":{"aY":[],"M":[],"c":[]},"akR":{"S":[],"c":[]},"am8":{"S":[],"c":[]},"UC":{"S":[],"c":[]},"Y9":{"S":[],"c":[]},"TP":{"S":[],"c":[]},"U0":{"S":[],"c":[]},"amE":{"S":[],"c":[]},"aiW":{"S":[],"c":[]},"C6":{"S":[],"c":[]},"asp":{"S":[],"c":[]},"ahc":{"aY":[],"M":[],"c":[]},"Ts":{"a3":["B7"]},"KU":{"M":[],"c":[]},"Tt":{"a3":["KU"]},"nW":{"bh":[]},"fL":{"bh":[]},"is":{"bh":[]},"mG":{"bh":[]},"CY":{"bh":[]},"xJ":{"bf":["nW"],"b9":["nW"],"b9.T":"nW","bf.T":"nW"},"a0K":{"bh":[]},"a0P":{"bh":[]},"a0Q":{"bh":[]},"a0R":{"bh":[]},"uB":{"bh":[]},"a0N":{"aU":[],"c":[]},"aaX":{"J":[],"L":[],"jy":[],"aS":[]},"pD":{"bh":[]},"n0":{"bh":[]},"nq":{"bh":[]},"kR":{"bh":[]},"lf":{"bh":[]},"v0":{"bh":[]},"a0D":{"bh":[]},"qh":{"bh":[]},"acn":{"bh":[]},"pg":{"bh":[]},"v1":{"bh":[]},"yy":{"bh":[]},"adR":{"bh":[]},"Q2":{"bh":[]},"a62":{"bh":[]},"aed":{"bh":[]},"MS":{"bh":[]},"MZ":{"bh":[]},"KP":{"S":[],"c":[]},"Rt":{"M":[],"c":[]},"XZ":{"a3":["Rt"]},"jX":{"bh":[]},"aco":{"fA":[],"aU":[],"c":[]},"a0E":{"dN":["J","ho"],"J":[],"az":["J","ho"],"L":[],"aS":[],"az.1":"ho","dN.1":"ho","az.0":"J"},"AA":{"S":[],"c":[]},"a0T":{"bh":[]},"a57":{"bh":[]},"N5":{"bh":[]},"a59":{"bh":[]},"a5d":{"hn":[]},"a5e":{"hn":[]},"a5f":{"hn":[]},"N0":{"hn":[]},"N1":{"hn":[]},"a5i":{"hn":[]},"N3":{"hn":[]},"N4":{"hn":[]},"a5c":{"hn":[]},"a5b":{"hn":[]},"N_":{"hn":[]},"a5g":{"hn":[]},"a5h":{"hn":[]},"N2":{"hn":[]},"G6":{"J":[],"L":[],"jy":[],"aS":[]},"Oo":{"M":[],"c":[]},"VO":{"a3":["Oo"]},"pQ":{"bh":[]},"ec":{"bh":[]},"mH":{"bh":[]},"n4":{"eA":[],"bh":[]},"qo":{"n4":[],"eA":[],"bh":[]},"rD":{"bh":[]},"tA":{"bh":[]},"Gx":{"bh":[]},"zj":{"bf":["pQ"],"b9":["pQ"],"b9.T":"pQ","bf.T":"pQ"},"Op":{"bh":[]},"a0M":{"bh":[]},"KT":{"bh":[]},"yx":{"bh":[]},"a5a":{"bh":[]},"EK":{"bh":[]},"a72":{"bh":[]},"zk":{"bh":[]},"a71":{"aU":[],"c":[]},"ab9":{"J":[],"L":[],"jy":[],"aS":[]},"zn":{"bh":[]}}'))
B.bJF(b.typeUniverse,JSON.parse('{"KO":1,"N5":1,"KY":1,"G6":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CG"),e:w("be<oc>"),aN:w("be<od>"),fM:w("be<Z<f,@>?>"),b:w("be<~>"),W:w("jX"),B:w("nW"),dB:w("fL"),gF:w("uB"),fj:w("is"),G:w("mG"),bO:w("mH"),k:w("av"),C:w("a1u<K>"),dO:w("uJ"),R:w("a4<f,@>"),g:w("hJ"),bz:w("lE<b7>"),f0:w("o5"),E:w("bh"),F:w("yv"),X:w("oc"),P:w("lJ"),D:w("v_"),a:w("aFy"),d:w("od"),cw:w("eA"),L:w("ho"),m:w("dm<v,E>"),cm:w("kR"),dv:w("n0"),M:w("C<nV>"),I:w("C<bDO>"),O:w("C<fL>"),Y:w("C<is>"),U:w("C<eA>"),K:w("C<a5S>"),u:w("C<ec>"),bC:w("C<vw>"),aA:w("C<u<eA>>"),v:w("C<ee>"),r:w("C<Gx>"),s:w("C<f>"),eg:w("C<tw>"),df:w("C<qo>"),p:w("C<c>"),n:w("C<K>"),t:w("C<v>"),eF:w("bl<a3<M>>"),Z:w("n4"),cz:w("ec"),hf:w("pQ"),dj:w("zk"),fT:w("rD"),c_:w("i4<p_<be<~>>>"),x:w("zn<fL>"),y:w("zn<ec>"),J:w("u<v>"),ef:w("vA"),c:w("Z<f,@>"),f:w("Z<@,@>"),gj:w("af<K,K>"),w:w("k9"),aU:w("B"),Q:w("vL<nW>"),o:w("vL<pQ>"),dc:w("ee"),eo:w("q5"),gJ:w("q6"),V:w("mg<lJ>"),N:w("f"),A:w("nk"),bP:w("by"),er:w("tw"),j:w("wv"),dw:w("qo"),bY:w("tA"),cZ:w("qq"),gc:w("jb"),es:w("lf"),bN:w("nq"),l:w("c"),q:w("x6"),g4:w("ik<K>"),cJ:w("D"),i:w("K"),z:w("@"),S:w("v"),bn:w("xJ?"),f3:w("zj?"),T:w("u<@>?"),h:w("Z<f,@>?"),fF:w("Z<@,@>?"),cK:w("B?"),aD:w("jb?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AV=new B.nN(C.m,B.au("nN<E>"))
D.B1=new A.CX(0,"left")
D.mw=new A.CX(1,"top")
D.B2=new A.CX(2,"right")
D.dJ=new A.CX(3,"bottom")
D.axv=new A.qh(!1,A.bAv(),22,null)
D.kt=new A.pg(16,null,D.axv,!0)
D.a8s=new A.pD(C.E,null,2,null)
D.vS=new A.KT(!1,D.a8s,A.c6k(),!0)
D.a_l=new A.axO(3,"spaceEvenly")
D.a_u=new B.xM(6,"dstIn")
D.Xj=new B.aW(3,3)
D.B5=new B.d7(D.Xj,D.Xj,C.a2,C.a2)
D.a_F=new B.bk(C.E,0,C.S,-1)
D.BF=new A.a59()
D.a1g=new A.N0()
D.a1h=new A.N3()
D.aPo=new A.acn()
D.alv=w([],B.au("C<kR>"))
D.alw=w([],B.au("C<lf>"))
D.DK=new A.MS(D.alv,D.alw,!0)
D.a8b=new B.dF("Zeitraum",!1,null)
D.a8f=new B.dF("Konten (SKR 03)",!1,null)
D.xv=new A.aEJ(0,"center")
D.aPD=new A.yx(!0,A.bB_(),A.bLL())
D.DO=new A.yx(!1,A.bB_(),A.bLL())
D.DP=new A.yy(!1,!0,null,A.av0(),A.a_d(),!0,null,A.av0(),A.a_d())
D.aPE=new A.yy(!0,!0,null,A.av0(),A.a_d(),!0,null,A.av0(),A.a_d())
D.a3B=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a3m=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a3L=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a3F=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a36=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a35=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a46=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a3u=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a49=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a43=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.arB=new B.dm([50,D.a3B,100,D.a3m,200,D.a3L,300,D.a3F,400,D.a36,500,D.a35,600,D.a46,700,D.a3u,800,D.a49,900,D.a43],x.m)
D.dp=new B.rK(D.arB,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.ahB=w([8,4],x.t)
D.a8q=new A.pD(D.dp,null,0.4,D.ahB)
D.a8r=new A.pD(C.am,null,0.5,null)
D.fH=new A.eA(0/0,0/0)
D.axx=new A.qh(!0,A.bAv(),44,null)
D.mx=new A.pg(16,null,D.axx,!0)
D.axw=new A.qh(!0,A.bAv(),30,null)
D.my=new A.pg(16,null,D.axw,!0)
D.a8t=new A.v1(!1,D.mx,D.my,D.mx,D.my)
D.aPF=new A.v1(!0,D.mx,D.my,D.mx,D.my)
D.DX=new A.Nt(0,"left")
D.a95=new A.Nt(1,"center")
D.DY=new A.Nt(2,"right")
D.a99=new B.a9(57495,"MaterialIcons",null,!1)
D.xN=new B.a9(58927,"MaterialIcons",null,!1)
D.a9T=new B.a9(59005,"MaterialIcons",null,!0)
D.a9U=new B.a9(59007,"MaterialIcons",null,!0)
D.a9V=new B.a9(59011,"MaterialIcons",null,!1)
D.aaP=new B.a9(62589,"MaterialIcons",null,!1)
D.aa8=new B.a9(61349,"MaterialIcons",null,!1)
D.abF=new B.aB(D.aa8,20,C.h,null,null)
D.aaf=new B.a9(61487,"MaterialIcons",null,!1)
D.abH=new B.aB(D.aaf,18,null,null,null)
D.abI=new B.aB(D.xN,18,null,null,null)
D.ac3=new B.aB(C.jc,null,C.h,null,null)
D.ac4=new B.aB(C.lb,null,C.o,null,null)
D.acx=new B.aB(C.nO,16,null,null,null)
D.acF=new B.aB(C.xT,16,null,null,null)
D.a9k=new B.a9(57912,"MaterialIcons",null,!1)
D.acH=new B.aB(D.a9k,null,C.a8,null,null)
D.aaO=new B.a9(62584,"MaterialIcons",null,!1)
D.acP=new B.aB(D.aaO,16,null,null,null)
D.acU=new B.aB(D.xN,16,null,null,null)
D.af3=new A.a6O(null)
D.aPK=new A.aKG(0,"horizontal")
D.y5=new A.zk(0,0,0,0,!1)
D.Fg=new A.Op(0.5)
D.BL=new A.a72()
D.af8=new A.EK(D.BL,A.bLP(),10,A.bLM(),!0,A.bLO(),A.bLN(),!1,null,null,null)
D.aPM=new A.EK(D.BL,A.bLP(),10,A.bLM(),!0,A.bLO(),A.bLN(),!0,null,null,null)
D.agA=w([4,3],x.t)
D.avN=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.avD=new B.aG("receivables","Forderungen (kurzfristig)")
D.avs=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.avq=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avg=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.avl=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avK=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avC=new B.aG("equity","Eigenkapital")
D.pr=w([D.avN,D.avD,D.avs,D.avq,D.avg,D.avl,D.avK,D.avC],B.au("C<+(f,f)>"))
D.aPQ=w([],x.M)
D.alh=w([],x.O)
D.ali=w([],x.Y)
D.alj=w([],B.au("C<mG>"))
D.alk=w([],B.au("C<mH>"))
D.aPR=w([],x.U)
D.aPS=w([],x.u)
D.all=w([],x.r)
D.asf={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SV={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yL=new B.a4(D.SV,[0,0,0,0,0,0,0,C.cb],B.au("a4<f,B>"))
D.asc={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.art=new B.a4(D.asc,[0,0,0,0],B.au("a4<f,v>"))
D.asy={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ap3=new B.a4(D.asy,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.aoY=new B.a4(D.asf,[D.yL,D.yL,D.yL,C.cb,C.cb,C.cb,D.art,D.ap3],x.R)
D.apf=new B.a4(D.SV,[0,0,0,0,0,0,0,C.cE],x.R)
D.ash={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aph=new B.a4(D.ash,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,K>"))
D.asb={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aru=new B.a4(D.asb,[0,0,0,0,0,0,0,C.cE],x.R)
D.asK={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arx=new B.a4(D.asK,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a4e=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a4m=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a39=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a3x=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a3H=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a4B=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a2W=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a3z=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a3K=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a44=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.arC=new B.dm([50,D.a4e,100,D.a4m,200,D.a39,300,D.a3x,400,D.a3H,500,D.a4B,600,D.a2W,700,D.a3z,800,D.a3K,900,D.a44],x.m)
D.SK=new B.rK(D.arC,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a7w=new B.al(48,48,48,48)
D.atG=new B.ac(D.a7w,C.bo,null)
D.atL=new B.ac(C.ad,C.bo,null)
D.alx=w([],B.au("C<n0>"))
D.aly=w([],B.au("C<nq>"))
D.Xk=new A.Q2(D.alx,D.aly)
D.awu=new B.fC("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awv=new B.fC("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awy=new B.fC("Automaten-Business","Umsatz je Automat",null,null)
D.awA=new B.fC("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awC=new B.fC("Top","Meistverkaufte Produkte",null,null)
D.awF=new B.fC("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awG=new B.fC("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y0=new B.tg(C.I,C.v,0)
D.aF0=new B.ad("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.az5=new B.dg(D.aF0,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aHc=new B.ad('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.az8=new B.dg(D.aHc,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aFj=new B.ad("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.az9=new B.dg(D.aFj,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aH6=new B.ad("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azb=new B.dg(D.aH6,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGz=new B.ad("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azc=new B.dg(D.aGz,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aGw=new B.ad("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azz=new B.dg(D.aGw,null,null,null,null,null,null,null,null,null,null,null,null,C.G,!1,null,null,null,C.q,null)
D.aQ0=new B.V(!0,C.E,null,null,null,null,14,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFf=new B.ad("Demo",null,null,null,null,null,null,null,null,null)
D.aFu=new B.ad("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGg=new B.ad("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGn=new B.ad("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGD=new B.ad("sevDesk",null,null,null,null,null,null,null,null,null)
D.aHp=new B.ad("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zh=new A.adP(0,"auto")
D.aI0=new A.adP(1,"top")
D.aMj=new A.wO("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMk=new A.wO("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfj","bQ2",()=>B.iv(new A.btE(),x.D))
w($,"cfk","avD",()=>B.iv(new A.btF(),x.a))
w($,"cgj","xv",()=>B.b_V(new A.bvr(),x.P))
w($,"cfl","bwm",()=>C.aq.$1$1(new A.btG(),x.d))
w($,"cfi","bQ1",()=>C.aq.$1$1(new A.btD(),x.X))
w($,"cfh","bwl",()=>C.aq.$1$1(new A.btC(),x.h))
w($,"cfg","bwk",()=>B.ad5(A.c5q(),x.F,x.b))
w($,"c8d","bvR",()=>new A.axD())
v($,"cby","lv",()=>new A.b2x())})()};
(a=>{a["ahEn8pCz8fmAch3Nmrau+4fUdtU="]=a.current})($__dart_deferred_initializers__);