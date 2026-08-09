((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oq(d,e,f,g,h){return new A.a7B(f,g,d,h,e,null)},
a7B:function a7B(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uY:function uY(d){this.a=d},
Ef:function Ef(d){this.a=d},
bUq(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.X(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zj
w=x.f
v=x.N
u=x.z
t=A.aG7(B.d_(w.a(e.h(a0,"current")),v,u))
s=A.aG7(B.d_(w.a(e.h(a0,"prior_year")),v,u))
r=A.aG7(B.d_(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bZ
p=J.cT(p,new A.aFQ(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bZ
o=J.cT(o,new A.aFR(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bZ
q=J.cT(q,new A.aFS(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.d_(w.a(e.h(a0,"customer")),v,u)
m=B.b5(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p7(n.h(0,"app_gross"))
k=B.b5(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p7(n.h(0,"avg_basket"))
u=B.d_(w.a(e.h(a0,"derived")),v,u)
v=A.p7(u.h(0,"gross_margin_pct"))
e=A.p7(u.h(0,"net_margin_pct"))
w=A.p7(u.h(0,"ebitda_margin_pct"))
j=A.p7(u.h(0,"cashflow_operating"))
i=A.btw(u.h(0,"revenue_growth_yoy_pct"))
h=A.btw(u.h(0,"revenue_growth_mom_pct"))
g=A.btw(u.h(0,"result_growth_yoy_pct"))
u=A.btw(u.h(0,"result_growth_mom_pct"))
f=B.b5(J.a2(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.of(t,s,r,p,o,q,new A.aBg(m,l,k,n),new A.aCo(v,e,w,j,i,h,g,u),f)},
p7(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.al(d))
return w==null?0:w},
btw(d){if(d==null)return null
if(typeof d=="number")return d
return B.iV(J.al(d))},
ql:function ql(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vC:function vC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wz:function wz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBg:function aBg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCo:function aCo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
of:function of(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFQ:function aFQ(){},
aFR:function aFR(){},
aFS:function aFS(){},
aG7(d){var w=J.X(d),v=A.uh(w.h(d,"revenue_net_7")),u=A.uh(w.h(d,"revenue_net_19")),t=A.uh(w.h(d,"revenue_net")),s=A.uh(w.h(d,"expense_net")),r=A.uh(w.h(d,"result_net")),q=A.uh(w.h(d,"vat_collected")),p=A.uh(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.bZ
w=J.cT(w,new A.aG8(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.og(v,u,t,s,r,q,p,w)},
uh(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.al(d))
return w==null?0:w},
CO:function CO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
og:function og(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aG8:function aG8(){},
bUp(d){return new A.yw(d,new B.is(x.c_),C.dN)},
buk:function buk(){},
bul:function bul(){},
bwb:function bwb(){},
bum:function bum(){},
buj:function buj(){},
bui:function bui(){},
yw:function yw(d,e,f){this.r=d
this.a=e
this.f=f},
aFP:function aFP(d,e,f){this.a=d
this.b=e
this.c=f},
aFO:function aFO(d,e,f){this.a=d
this.b=e
this.c=f},
bUr(){return new A.yx(null)},
amy(d,e,f,g,h){return new A.amx(e,h,g,f,d,null)},
yx:function yx(d){this.a=d},
aG6:function aG6(d){this.a=d},
aFZ:function aFZ(d,e,f){this.a=d
this.b=e
this.c=f},
aG_:function aG_(d,e,f){this.a=d
this.b=e
this.c=f},
aG0:function aG0(d){this.a=d},
aFY:function aFY(){},
aG1:function aG1(d){this.a=d},
aG2:function aG2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG5:function aG5(){},
aG4:function aG4(){},
aG3:function aG3(){},
aFX:function aFX(d,e){this.a=d
this.b=e},
aFV:function aFV(d){this.a=d},
aFW:function aFW(d){this.a=d},
ah7:function ah7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amx:function amx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aoN:function aoN(d,e){this.e=d
this.a=e},
biO:function biO(d){this.a=d},
biP:function biP(d){this.a=d},
biQ:function biQ(d,e,f){this.a=d
this.b=e
this.c=f},
biN:function biN(){},
J8:function J8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jy:function Jy(d,e){this.c=d
this.a=e},
bpu:function bpu(d){this.a=d},
ah5:function ah5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
If:function If(d,e){this.c=d
this.a=e},
bB_(d,e,f,g,h){var w=null
return B.ja(w,w,!0,w,new A.btr(h,g,e,f),d,w,!0,!0,x.H)},
jO(d,e,f,g,h,i,j,k,l,m,n){return new A.an4(g,n,i,e,d,m,f,k,l,j,null)},
avZ(d,e){return A.c40(d,e)},
c40(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avZ=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.az1)
t=4
o=e.aI(0,$.bW(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fX("finance-balance-sync",B.A(n,n)),$async$avZ)
case 7:r=g
q=B.d_(x.f.a(r.a),x.N,n)
l.Mn()
if(J.d(J.a2(q,"configured"),!1)){l.be(D.az5)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bx1()
if(e.e==null)B.S(B.a_(y.b))
e.gce().c7(o)
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Mn()
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avZ,v)},
aw1(d,e,f){var w=0,v=B.q(x.H)
var $async$aw1=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.ja(null,null,!0,null,new A.btp(f,e,e.aI(0,$.bW(),x.A)),d,null,!0,!0,x.H),$async$aw1)
case 2:return B.o(null,v)}})
return B.p($async$aw1,v)},
a7C:function a7C(d){this.a=d},
aL1:function aL1(){},
aL0:function aL0(){},
aL_:function aL_(){},
IA:function IA(d,e){this.c=d
this.a=e},
bfS:function bfS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfH:function bfH(){},
bfI:function bfI(){},
bfJ:function bfJ(){},
bfK:function bfK(){},
bfL:function bfL(){},
bfM:function bfM(){},
bfN:function bfN(){},
bfO:function bfO(){},
bfP:function bfP(d){this.a=d},
bfQ:function bfQ(d){this.a=d},
bfR:function bfR(d){this.a=d},
bfT:function bfT(d,e){this.a=d
this.b=e},
bfU:function bfU(d,e){this.a=d
this.b=e},
btr:function btr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btq:function btq(d){this.a=d},
alP:function alP(d){this.a=d},
an4:function an4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfV:function bfV(d,e){this.a=d
this.b=e},
Vb:function Vb(d,e,f){this.c=d
this.d=e
this.a=f},
YR:function YR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boz:function boz(){},
boA:function boA(){},
boB:function boB(d){this.a=d},
Ul:function Ul(d,e,f){this.c=d
this.d=e
this.a=f},
b6r:function b6r(){},
b6t:function b6t(d){this.a=d},
b6u:function b6u(d){this.a=d},
b6s:function b6s(){},
UC:function UC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7r:function b7r(){},
b7s:function b7s(){},
b7t:function b7t(){},
b7u:function b7u(d){this.a=d},
anz:function anz(d,e){this.c=d
this.a=e},
bgt:function bgt(){},
bgu:function bgu(){},
ajP:function ajP(d,e){this.c=d
this.a=e},
Ci:function Ci(d,e,f){this.c=d
this.d=e
this.a=f},
atp:function atp(d,e){this.c=d
this.a=e},
bqM:function bqM(){},
bqN:function bqN(){},
wQ:function wQ(d,e){this.c=d
this.a=e},
ai0:function ai0(d,e){this.e=d
this.a=e},
b4S:function b4S(){},
b4R:function b4R(){},
b4Q:function b4Q(d,e,f){this.a=d
this.b=e
this.c=f},
b4K:function b4K(d,e){this.a=d
this.b=e},
b4L:function b4L(d,e){this.a=d
this.b=e},
b4T:function b4T(d){this.a=d},
b4U:function b4U(d){this.a=d},
b4M:function b4M(){},
b4N:function b4N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4O:function b4O(d,e){this.a=d
this.b=e},
b4P:function b4P(d,e,f){this.a=d
this.b=e
this.c=f},
btp:function btp(d,e,f){this.a=d
this.b=e
this.c=f},
bto:function bto(d){this.a=d},
Bj:function Bj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TY:function TY(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4E:function b4E(){},
b4F:function b4F(d){this.a=d},
b4G:function b4G(d){this.a=d},
b4I:function b4I(d,e){this.a=d
this.b=e},
b4H:function b4H(d,e){this.a=d
this.b=e},
b4J:function b4J(d){this.a=d},
bh:function bh(){},
bEo(d){return new A.Lb(d,C.al,C.bV,null,null)},
Lb:function Lb(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TZ:function TZ(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c5$=g
_.c=_.a=null},
b4V:function b4V(d,e){this.a=d
this.b=e},
b4W:function b4W(d){this.a=d},
ayz(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amK:f,p=a0==null?16:a0,o=d==null?D.a0l:d,n=g==null,m=n?A.bxt(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yl:a3
n=n?A.bxt(r,r,r,r,r,r,r,r):g
w=j==null?D.E8:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.J:e
return new A.nY(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C4,s,w,i,n)},
ayG(d,e,f,g,h){var w=d==null?D.amL:d,v=e==null?2:e,u=g==null?C.lw:g
return new A.fG(h,f===!0,w,v,u)},
bRL(d,e,f){var w=d.a
w=C.d.aO(w+(e.a-w)*f)
return A.ayG(A.kE(d.c,e.c,f,A.c4L(),x.fj),B.ae(d.d,e.d,f),!1,A.kE(d.e,e.e,f,A.a09(),x.S),w)},
a1B(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TL
else w=h
v=m==null
u=v?8:m
t=$.lH()
s=t.aX9(f,v?8:m)
t=t.aXa(g,v?8:m)
v=d==null?A.bEm(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.amM:k)},
bRM(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ae(d.e,e.e,f),q=B.mP(d.f,e.f,f),p=A.kE(d.r,e.r,f,A.a09(),x.S),o=B.bY(d.w,e.w,f),n=B.ae(d.a,e.a,f),m=B.ae(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ae(w.b,v.b,f)
t=B.ae(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1B(A.bEm(v,u,null,!1,t),p,q,o,s,n,null,A.kE(d.y,e.y,f,A.c4M(),x.G),m,r)},
bRN(d,e,f){var w,v,u=B.ae(d.a,e.a,f)
u.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mN(u,w,v,B.bY(d.d,e.d,f))},
bEm(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.du
else w=d
return new A.a1x(g===!0,v,u,w,f)},
bxt(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1D(4,C.fN,16,D.xU,0,120,A.c4O(),!1,!1,D.a_i,0,C.I,A.c4N())
else w=k
v=j==null?C.l2:j
return new A.a1C(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5B(d,e,f,g){var w=null,v=B.j3(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D5(C.d.j(f.b),v)},
c5A(d){return A.aAH(D.du,15)},
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
ayy:function ayy(d,e){this.a=d
this.b=e},
fG:function fG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayH:function ayH(){},
ayI:function ayI(){},
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
mN:function mN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1x:function a1x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1C:function a1C(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aey:function aey(d,e){this.a=d
this.b=e},
a1D:function a1D(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D5:function D5(d,e){this.a=d
this.b=e},
Lc:function Lc(d){this.a=d},
a1E:function a1E(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xG:function xG(d,e){this.a=d
this.b=e},
ahX:function ahX(){},
ai3:function ai3(){},
ai4:function ai4(){},
ai6:function ai6(){},
ai7:function ai7(){},
ai8:function ai8(){},
ai9:function ai9(){},
aia:function aia(){},
aib:function aib(){},
ayJ:function ayJ(d){this.a=d},
ayK:function ayK(){},
uD:function uD(d,e,f){this.a=d
this.b=e
this.c=f},
ai5:function ai5(){},
ayL:function ayL(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayM:function ayM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayN:function ayN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6D:function a6D(d){this.b=d},
a1A:function a1A(d,e,f){this.d=d
this.e=e
this.a=f},
abI:function abI(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.cX=f
_.fW=g
_.B=h
_.a4=_.U=_.W=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
c5C(d,e){var w=null
return new A.RV(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ays(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ae(w.c,v.c,f)
u.toString
return new A.pj(t,e.b,new A.qa(v.a,v.b,u,B.ae(w.d,v.d,f)),!0)},
bFL(d,e,f){var w=A.ays(d.b,e.b,f),v=A.ays(d.d,e.d,f),u=A.ays(d.e,e.e,f)
return new A.v_(e.a,w,A.ays(d.c,e.c,f),v,u)},
bUt(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ae(d.a,e.a,f)
w.toString
v=B.ae(d.b,e.b,f)
v.toString
return new A.ez(w,v)},
bFJ(d,e,f){return new A.yz(e.a,!0,B.ae(d.c,e.c,f),e.d,e.e,e.f,B.ae(d.r,e.r,f),e.w,e.x)},
c7W(d){return!0},
c5F(d){return D.a9Z},
bFK(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pE(w,f,g,e)},
bHG(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c4H(),x.dv)
v.toString
w=A.kE(d.b,e.b,f,A.c4J(),x.bN)
w.toString
return new A.Qs(v,w)},
bVg(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rm(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n6(t,w,v,u)},
c_x(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rm(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nt(t,w,v,u)},
bVf(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bVd(B.bxm(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rm(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a09(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kX(r,e.f,e.r,t,e.x,u,v,w,s)},
c_w(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.c_u(B.bxm(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rm(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kE(d.d,e.d,f,A.a09(),x.S)
if(u==null)u=v==null?C.C:null
return new A.lo(r,e.f,e.r,t,e.x,u,v,w,s)},
bVd(d,e,f,g,h,i){return new A.a6O(f,!1,g,i,d,e)},
bVe(d){return C.d.aj(d.e,1)},
c_u(d,e,f,g,h,i){return new A.aeY(f,!1,g,i,d,e)},
c_v(d){return C.d.aj(d.e,1)},
bFG(d,e,f){var w,v=A.kE(d.a,e.a,f,A.c4G(),x.cm)
v.toString
w=A.kE(d.b,e.b,f,A.c4I(),x.es)
w.toString
return new A.N4(v,w,!0)},
bUs(d,e,f){return new A.Nf(d,e==null?4:e,f)},
a1q:function a1q(){},
D4:function D4(d,e){this.a=d
this.b=e},
tA:function tA(d,e){this.r=d
this.w=e},
qa:function qa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad7:function ad7(){},
pj:function pj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v_:function v_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez:function ez(d,e){this.a=d
this.b=e},
yz:function yz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pE:function pE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeA:function aeA(){},
Qs:function Qs(d,e){this.a=d
this.b=e},
n6:function n6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nt:function nt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kX:function kX(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
lo:function lo(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6O:function a6O(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeY:function aeY(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N4:function N4(d,e,f){this.a=d
this.b=e
this.c=f},
uZ:function uZ(){},
Nf:function Nf(d,e,f){this.a=d
this.b=e
this.c=f},
ahS:function ahS(){},
ahW:function ahW(){},
al9:function al9(){},
alu:function alu(){},
alv:function alv(){},
alx:function alx(){},
aly:function aly(){},
amn:function amn(){},
amm:function amm(){},
amo:function amo(){},
apY:function apY(){},
arP:function arP(){},
arQ:function arQ(){},
att:function att(){},
aua:function aua(){},
au9:function au9(){},
aub:function aub(){},
ayo:function ayo(){},
L5:function L5(){},
L6:function L6(d,e,f){this.c=d
this.d=e
this.a=f},
ayq:function ayq(d){this.a=d},
ayp:function ayp(d){this.a=d},
RV:function RV(d,e,f){this.c=d
this.e=e
this.a=f},
YF:function YF(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZ2(d,e,f){var w=B.af(f),v=w.i("ab<1,jW>")
v=B.Q(new B.ab(f,new A.b_a(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.b_b(),w),w.i("av.E"))
return new A.ad8(e,d,v,w,null)},
bRJ(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7s(4,x.er)
for(w=0;w<4;++w)t[w]=new B.ty(v,C.au,C.w,new B.ky(1),v,v,v,v,C.bC,v)
u=new A.a1r(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aK(x.v))
u.bi()
return u},
ad8:function ad8(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_a:function b_a(){},
b_b:function b_b(){},
a1r:function a1r(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.W=e
_.U=f
_.a4=g
_.Wb$=h
_.aSZ$=i
_.dq$=j
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
bg0:function bg0(d,e){this.a=d
this.b=e},
ayr:function ayr(){},
jW:function jW(d,e){this.a=d
this.b=e},
nX:function nX(d,e){this.a=d
this.b=e},
ahT:function ahT(){},
ahU:function ahU(){},
ahV:function ahV(){},
TW:function TW(){},
AJ:function AJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_c:function b_c(d){this.a=d},
b_d:function b_d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_e:function b_e(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5U(d,e){var w=d==null?B.cn(C.C,1):d
return new A.a5T(e!==!1,w)},
a1G:function a1G(){},
a5T:function a5T(d,e){this.a=d
this.b=e},
Nm:function Nm(){},
a5V:function a5V(){},
ayW:function ayW(){},
aFf:function aFf(d,e){this.a=d
this.b=e},
aie:function aie(){},
alr:function alr(){},
als:function als(){},
alz:function alz(){},
Lf:function Lf(){},
vO:function vO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hv:function hv(){},
a5Z:function a5Z(d){this.a=d},
a6_:function a6_(d){this.a=d},
a60:function a60(d){this.a=d},
Nh:function Nh(){},
Ni:function Ni(){},
a63:function a63(d){this.a=d},
Nk:function Nk(){},
Nl:function Nl(d){this.a=d},
a5Y:function a5Y(d){this.a=d},
a5X:function a5X(d){this.a=d},
Ng:function Ng(d){this.a=d},
a61:function a61(d){this.a=d},
a62:function a62(d){this.a=d},
Nj:function Nj(d){this.a=d},
Gj:function Gj(){},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(d){this.a=d},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
aVy:function aVy(d){this.a=d},
aVz:function aVz(d){this.a=d},
aVA:function aVA(d){this.a=d},
aVB:function aVB(d){this.a=d},
aVC:function aVC(d){this.a=d},
aVD:function aVD(d){this.a=d},
aVE:function aVE(d){this.a=d},
aVF:function aVF(d){this.a=d},
OF:function OF(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wp:function Wp(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c5$=h
_.c=_.a=null},
bg5:function bg5(d,e){this.a=d
this.b=e},
bg3:function bg3(d){this.a=d},
bg4:function bg4(d,e){this.a=d
this.b=e},
bg2:function bg2(){},
bg6:function bg6(d){this.a=d},
byL(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.J:d
return new A.pR(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TL:u
else w=g
v=f==null?A.ayx(!1,u,0,u,!1,D.wf):f
w=new A.eb(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayx(!1,u,0,u,!1,D.wf):d,j,a0,i,s,!1,p)
w.ar_(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ae(d.x,e.x,f)
m.toString
w=A.bEn(d.ay,e.ay,f)
v=A.bEn(d.ch,e.ch,f)
u=B.ae(d.as,e.as,f)
u.toString
t=e.CW
s=A.kE(d.cy,e.cy,f,A.a09(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rm(d.w,e.w,f)
p=A.kE(d.a,e.a,f,A.c4F(),x.cw)
p.toString
o=B.bIe(d.db,e.db,f)
o.toString
n=B.ae(d.dy.a,e.dy.a,f)
n.toString
return A.aLg(v,m,w,r,e.z,s,new A.yy(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OG(n),!1,u,o,!0,e.cx,p)},
ayx(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aO(127.5),D.du.A()>>>16&255,D.du.A()>>>8&255,D.du.A()&255):null
else w=e
return new A.a1z(h,w,g,i,f,!1)},
bEn(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rm(v.b,u.b,f),r=B.ae(v.c,u.c,f)
r.toString
r=A.bFK(t,A.kE(v.d,u.d,f,A.a09(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rm(d.c,e.c,f)
v=B.ae(d.e,e.e,f)
v.toString
return A.ayx(!1,s,v,u,e.a,new A.La(!1,r,w.c,!0))},
bRO(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rm(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aO(127.5),D.du.A()>>>16&255,D.du.A()>>>8&255,D.du.A()&255):null
return new A.mO(e.a,e.b,w,v)},
c7X(d){return!0},
bAO(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kc)return A.bBz(w.a,A.byn(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.du:w},
c2l(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kc)w=A.bBz(v.a,A.byn(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.du}return A.aAH(w,40)},
bKK(d,e,f,g,h){var w,v=A.bAO(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kc)w=A.bBz(u.a,A.byn(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.du}u=A.aAH(w,40)
return new A.Nf(v,h==null?4:h,u)},
c7V(d,e){return!0},
c4s(d,e){return Math.abs(d.a-e.a)},
c5I(d,e){var w=J.cT(e,new A.bu9(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c5E(d,e){return-1/0},
c5D(d,e){return d.a[e].b},
bLV(d){var w=J.cT(d,new A.bu6(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bLU(d){return A.aAH(D.du,15)},
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
eb:function eb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aLh:function aLh(){},
OG:function OG(d){this.a=d},
a1z:function a1z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mO:function mO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
La:function La(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yy:function yy(d,e,f){this.a=d
this.b=e
this.c=f},
aL2:function aL2(d,e){this.a=d
this.b=e},
a5W:function a5W(){},
ER:function ER(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bu9:function bu9(d){this.a=d},
bu8:function bu8(d){this.a=d},
a7P:function a7P(){},
bu6:function bu6(){},
n9:function n9(){},
qj:function qj(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rB:function rB(d,e){this.a=d
this.b=e},
tB:function tB(d,e){this.a=d
this.b=e},
GL:function GL(d){this.a=d},
OH:function OH(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ai1:function ai1(){},
ai2:function ai2(){},
aif:function aif(){},
alt:function alt(){},
alw:function alw(){},
anb:function anb(){},
anc:function anc(){},
and:function and(){},
anf:function anf(){},
ang:function ang(){},
anh:function anh(){},
ani:function ani(){},
arO:function arO(){},
ats:function ats(){},
aLi:function aLi(d){this.a=d},
aLj:function aLj(){},
aLk:function aLk(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ane:function ane(){},
aLl:function aLl(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLo:function aLo(){},
aLm:function aLm(d,e,f){this.a=d
this.b=e
this.c=f},
aLn:function aLn(d,e,f){this.a=d
this.b=e
this.c=f},
aLp:function aLp(){},
vx:function vx(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7O:function a7O(d,e,f){this.d=d
this.e=e
this.a=f},
abV:function abV(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.cX=f
_.fW=g
_.B=h
_.a4=_.U=_.W=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
bxs(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.af(o),l=new B.ab(o,new A.ayA(),m.i("ab<1,G>")).jG(0,new A.ayB()),k=e-l,j=new A.ayE(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdt(0)/2
s=u===o.length-1?0:w
v+=t.gdt(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iU(o,m.i("iU<1>")).aw(0,new A.ayC(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iU(o,m.i("iU<1>")).aw(0,new A.ayD(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayA:function ayA(){},
ayB:function ayB(){},
ayE:function ayE(d,e,f){this.a=d
this.b=e
this.c=f},
ayF:function ayF(d,e,f){this.a=d
this.b=e
this.c=f},
ayC:function ayC(d,e,f){this.a=d
this.b=e
this.c=f},
ayD:function ayD(d,e,f){this.a=d
this.b=e
this.c=f},
byn(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iU(w,B.af(w).i("iU<1>")).aw(0,new A.aIl(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIl:function aIl(d,e){this.a=d
this.b=e},
aBS(d,e){var w,v
if(e!=null){w=B.af(e).i("ab<1,G>")
v=B.Q(new B.ab(e,new A.aBT(),w),w.i("av.E"))
return A.c5v(d,new A.a2e(v,x.cX))}else return d},
aBT:function aBT(){},
bZE(d,e){var w=!0
if(d!==C.fC)if(!(d===C.au&&e===C.w))w=d===C.ix&&e===C.b0
if(w)return D.El
else{w=!0
if(d!==C.hv)if(!(d===C.ix&&e===C.w))w=d===C.au&&e===C.b0
if(w)return D.Em
else return D.aaE}},
NL:function NL(d,e){this.a=d
this.b=e},
a24:function a24(d,e){this.a=d
this.b=e},
zo:function zo(d,e){this.a=d
this.$ti=e},
anp:function anp(){},
c5v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cG($.an().r)
for(w=B.b([],x.C),v=new B.Oy(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.S(B.fy('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ox(v,s)
v.D5()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D5()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.Kr(d.aSV(r,p,p+n,!0),C.v,null)
t.push(q)
m=l.d
if(m!=null)q.il(m)}p+=n
o=!o}}return l},
a2e:function a2e(d,e){this.a=d
this.b=0
this.$ti=e},
b2H:function b2H(){},
byb(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRR(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAH(d,e){var w=1-e/100
return B.aH(d.gfF(d),C.d.aO(d.gNS()*w),C.d.aO(d.gG3()*w),C.d.aO(d.gKg()*w))},
bFI(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
byc(d){var w=d.a,v=w?A.b_9(d.b):0,u=w?A.b_9(d.c):0,t=w?A.b_9(d.d):0
return new B.ag(v,u,t,w?A.b_9(d.e):0)},
bWW(d){var w
if(d.c===0){d.seT(null)
w=B.c3(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
bz6(d,e,f,g){var w
if(f!=null){d.r=C.C.gq(0)
d.seT(f.mP(0,g))}else{w=e==null?C.J:e
d.r=w.gq(w)
d.seT(null)}},
b_9(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kE(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kb(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kb(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6K(d,e,f){return C.d.aO(d+(e-d)*f)},
bBz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kb(m,x.i)
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
A.a7B.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.m:C.a3
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bZ(t.x,C.m,s,18),C.aN],w))
v.push(B.au(new B.dG(t.c,!1,s),1))
v=B.ah(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.G,B.i(t.d,s,1,C.ai,s,B.bz(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.bm(r,B.a6(w,C.z,C.ig,C.i),q,s,C.aj,s,s,3)}}
A.uY.prototype={
LG(d){return this.aSY(d)},
aSY(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.em("finance_summary",B.a5(["p_from",E.rg(d.a),"p_to",E.rg(d.b)],s,r),r),$async$LG)
case 3:q=f
if(q==null){u=D.aqG
w=1
break}if(x.f.b(q)){u=B.d_(q,s,r)
w=1
break}u=D.ar2
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LG,v)},
LF(d){return this.aSX(d)},
aSX(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LF=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.em("finance_kpis",B.a5(["p_from",E.rg(d.a),"p_to",E.rg(d.b)],s,r),r),$async$LF)
case 3:q=f
if(x.f.b(q)){u=B.d_(q,s,r)
w=1
break}u=D.aqm
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LF,v)},
pG(d){return this.aqI(d)},
aqI(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fX("sevdesk-sync",B.a5(["from",E.rg(d.a),"to",E.rg(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.a0(B.fp(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LB(d){return this.aSN(d)},
aSN(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LB=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fX("finance-export-pdf",B.a5(["from",E.rg(d.a),"to",E.rg(d.b)],s,s)),$async$LB)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aF(J.a2(r,"base64"))
w=1
break}throw B.e(B.dQ("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LB,v)}}
A.Ef.prototype={
FY(d){return this.ajL(d)},
ajL(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FY=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LG(d),$async$FY)
case 7:q=f
o=A.aG7(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FY,v)},
FT(d){return this.ajw(d)},
ajw(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FT=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LF(d),$async$FT)
case 7:q=f
o=A.bUq(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FT,v)},
pG(d){return this.aqJ(d)},
aqJ(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.HA(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LA(d){return this.aSM(d)},
aSM(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LA=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LB(d),$async$LA)
case 7:q=f
o=C.iT.cF(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LA,v)},
HA(d){if(d instanceof B.yt)return d
if(d instanceof B.mh){if(d.b==="42501")return new B.vS(d.a)
return new B.th(d.a)}if(d instanceof B.Nz)return new B.th("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bb("Unerwarteter Fehler: "+B.j(d))},
$iaFU:1}
A.ql.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vC.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wz.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBg.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCo.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.of.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CO.prototype={
gbw(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.og.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yw.prototype={
GU(d){return this.aqH(0)},
aqH(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GU=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dA)
s=t.r
r=s.aI(0,$.xs(),x.P)
p.a=null
w=3
return B.k(B.pi(new A.aFP(p,t,r),x.H),$async$GU)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bx2()
s=s.e
s===$&&B.a()
s.c7(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GU,v)},
Lz(){return this.aSL()},
aSL(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lz=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dA)
s=t.r.aI(0,$.xs(),x.P)
q.a=null
w=3
return B.k(B.pi(new A.aFO(q,t,s),x.H),$async$Lz)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lz,v)}}
A.yx.prototype={
de(d,e){var w=null,v=e.al($.xs(),x.P),u=e.al($.bx2(),x.aN)
return B.t7(B.dv(B.b([new B.fS("Finanzen","Dashboard",new A.ah7(e.al($.bx0(),x.b).gje(),new A.aFZ(this,d,e),new A.aG_(this,d,e),new A.aG0(d),new A.aG1(d),new A.aG2(this,d,e,v),w),w),C.aE,new A.aoN(v,w),C.c8,D.agN,C.c8,B.dc(u,new A.aG3(),new A.aG4(),new A.aG5(),!1,!0,!1,x.d,x.l)],x.p),w,C.cM,w,C.F,!1),C.m,new A.aG6(e))},
Jp(d,e){return this.aLg(d,e)},
aLg(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jp=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bx0()
w=3
return B.k(e.aI(0,s.ghR(),x.F).GU(0),$async$Jp)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.be(B.c2(null,null,null,null,null,C.r,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jp,v)},
Bj(d,e){return this.awK(d,e)},
awK(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bj=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bx0().ghR(),x.F).Lz(),$async$Bj)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.az7)
w=1
break}t=B.oC(C.v,10)
w=4
return B.k($.bO4().tX(s,"finanzauswertung.pdf",t,null,null,null),$async$Bj)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bj,v)},
Bk(d,e,f){return this.aIV(d,e,f)},
aIV(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bk=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.ja(null,null,!0,null,new A.aFX(f,d),d,null,!0,!0,x.cJ),$async$Bk)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nS(e.aI(0,$.bW(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zy("finance_period",p,o,B.a5(["period_from",p.eg()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bk)
case 8:if(d.e!=null)d.P(x.q).f.be(F.vg)
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
return B.p($async$Bk,v)}}
A.ah7.prototype={
p(d){var w=this,v=null,u=A.amy(C.m,F.hX,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.amy(v,D.acz,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.amy(v,D.yc,v,s?v:w.d,"sevDesk synchronisieren"),q=A.amy(C.aa,C.jk,C.aa,s?v:w.e,"PDF-Export")
return B.ah(B.b([u,C.aN,t,C.aN,r,C.aN,q,C.aN,A.amy(C.ac,C.fR,C.ac,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.E,0,v,v)}}
A.amx.prototype={
p(d){var w,v=this,u=null,t=B.ax(12),s=B.ax(12),r=B.ax(12),q=v.w
if(q==null)q=C.a3
q=B.cn(q,1)
w=v.r
if(w==null)w=C.h
return B.wy(B.dE(!1,C.X,!0,t,B.eB(!1,s,!0,B.aQ(u,B.bZ(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a8,0,u,u,u,u,u,C.bn),u,v.d,u,u)}}
A.aoN.prototype={
de(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bm(w,B.a6(B.b([D.a9G,C.G,B.ah(B.b([D.adr,C.ao,B.au(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.kw(C.cj,B.b([new A.J8("Monat",new A.biO(e),w,w),new A.J8("Jahr (YTD)",new A.biP(e),w,w),new A.J8("Zeitraum w\xe4hlen \u2026",new A.biQ(this,d,e),D.abA,w)],t),C.dy,6,8)],t),C.z,C.f,C.i),w,w,C.D,w,w,3)},
IM(d,e){return this.aHO(d,e)},
aHO(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IM=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awk(new A.biN(),d,B.bP(B.aZ(t)-5,1,1,0,0,0,0),new B.lQ(s.a,s.b,x.bz),B.bP(B.aZ(t)+1,1,1,0,0,0,0),C.e3),$async$IM)
case 2:r=g
if(r!=null)e.aI(0,$.xs().ghR(),x.V).uc(0,new E.lX(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IM,v)}}
A.J8.prototype={
p(d){var w=null,v=B.ax(9999),u=B.ax(9999),t=B.ax(9999),s=B.cn(C.a3,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bZ(p,C.h,w,14),C.aN],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dE(!1,C.X,!0,v,B.eB(!1,u,!0,B.aQ(w,B.ah(q,C.j,w,C.f,C.E,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.A),w,w,w,w,C.hQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a8,0,w,w,w,w,w,C.bn)}}
A.Jy.prototype={
p(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jt(new A.bpu(this)),C.c8,D.a9M,C.t],r),p=this.c.w
if(p.length===0)q.push(B.bm(s,B.ah(B.b([D.adT,C.aq,B.au(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.p,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.i,0,s,s),C.a8,s,C.D,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.M)(p),++u){t=p[u]
C.b.K(w,B.b([new A.ah5(t.a,t.b,t.c==="revenue",t.d,s),C.G],r))}q.push(B.a6(w,C.j,C.f,C.i))}return B.a6(q,C.a9,C.f,C.i)}}
A.ah5.prototype={
p(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a8,s=B.cn(u?C.m:C.a3,1),r=B.ax(4),q=w.c
r=B.aQ(C.U,B.i(C.c.a1(q,0,1),v,v,v,v,B.bz(C.h,14,C.o),v,v,v),C.q,v,v,new B.aD(t,v,s,r,v,v,C.A),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ai,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.au(B.a6(B.b([q,B.i(t,v,v,v,v,B.y(C.p,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dr().ap(w.f)
return B.bm(v,B.ah(B.b([r,C.aq,t,B.i(q,v,v,v,v,B.y(u?C.ac:C.h,15,C.H),v,v,v)],s),C.j,v,C.f,C.i,0,v,v),v,v,C.dh,v,v,3)}}
A.If.prototype={
p(d){var w=null
return B.bm(C.aa,B.ah(B.b([D.aes,C.aq,B.au(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fg,w,C.D,w,w,3)}}
A.a7C.prototype={
de(d,e){return B.dc(e.al($.bQx(),x.e),new A.aL_(),new A.aL0(),new A.aL1(),!1,!0,!1,x.X,x.l)}}
A.IA.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awp,C.t,B.jt(new A.bfS(v,q,100-t.w.a,w,p)),C.t,new A.alP(u),C.aE,D.awo,C.t,new A.ai0(t,u),C.aE,D.awi,C.t,B.bA(u,!0,u,B.k6(u,B.bm(u,new A.Ul(t,220,u),u,u,C.D,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfT(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aE,D.awb,C.t,B.bA(u,!0,u,B.k6(u,new A.UC(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfU(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aE,D.awf,C.t,new A.anz(t,u),C.aE,D.awd,C.t,new A.ajP(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aE,D.awk,C.t,new A.atp(t,u)],s))
return B.a6(r,C.a9,C.f,C.i)}}
A.alP.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.p,11,C.l).cA(1.35),w,w,w)}}
A.an4.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cv(m.d,"-")?C.aa:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfV(m,d):l
r=x.p
q=B.b([B.au(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.p,10,C.o).fu(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cn(C.aa,0.8)
n=B.ax(4)
q.push(B.aQ(l,B.i("Ziel "+p,l,l,l,l,B.y(C.aa,9,C.o),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.A),l,l,l,l,C.nt,l,l,l))}q=B.b([B.ah(q,C.j,l,C.f,C.i,0,l,l),C.aV,B.Nd(C.d0,B.i(m.d,l,l,l,l,B.bz(w,22,C.o),l,l,l),C.hF)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ai,l,B.y(C.p,10,C.aD),l,l,l))
q.push(C.cX)
q.push(B.ah(B.b([new A.Vb("Vormonat",m.r,l),C.cx,new A.Vb("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cX)
q.push(B.au(new A.YR(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.k6(l,B.bm(l,B.a6(q,C.z,C.f,C.i),l,l,C.bW,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.Vb.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ax(4)
return B.aQ(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.p,9,C.o),r,r,r),C.q,r,r,new B.aD(C.a3,r,r,q,r,r,C.A),r,r,r,r,C.nt,r,r,r)}w=q>=0
v=w?C.ac:C.aa
u=v.eh(0.12)
t=B.cn(v,0.7)
s=B.ax(4)
return B.aQ(r,B.ah(B.b([B.bZ(w?F.aaK:D.aaJ,v,r,10),C.ZA,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.j,r,C.f,C.E,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.A),r,r,r,r,C.nt,r,r,r)}}
A.YR.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.am
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ez(v,j[v]))
u=C.b.jG(j,new A.boz())
t=C.b.jG(j,new A.boA())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boB(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5U(k,!1)
w=B.b([A.aLg(k,2,A.ayx(!1,C.m.eh(0.16),0,k,!0,D.wf),C.m,0.35,k,D.Ec,k,!0,!1,!0,!1,D.Fz,!1,10,D.Z2,!0,C.lw,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OF(A.byL(k,k,k,D.amN,l,D.C4,D.E8,D.Ed,w,D.agR,k,m,k,n,D.Yl,D.amO,D.aa1),C.al,C.a1,k,k)}}
A.Ul.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aM4
w=C.b.fI(p,0,new A.b6r())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayG(B.b([A.a1B(q,q,D.Bw,q,C.m,q,q,q,r.b,6),A.a1B(q,q,D.Bw,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bEo(A.ayz(q,q,u,q,q,A.a5U(q,!1),q,new A.yz(!0,!0,q,new A.b6s(),A.a04(),!1,q,A.aw4(),A.a04()),q,v,q,q,new A.v_(!0,new A.pj(16,q,new A.qa(!0,new A.b6t(this),46,q),!0),D.kv,D.kv,new A.pj(16,q,new A.qa(!0,new A.b6u(p),26,q),!0)))),this.d,q)},
aKy(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.UC.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b7r(),w),x.i)
C.b.K(o,new B.ab(u,new A.b7s(),w))
t=C.b.fI(o,0,new A.b7t())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayG(B.b([A.a1B(q,q,q,q,C.m,q,q,q,v[s],14),A.a1B(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bEo(A.ayz(q,q,n,q,q,A.a5U(q,!1),q,D.Ed,q,o,q,q,new A.v_(!0,D.kv,D.kv,D.kv,new A.pj(16,q,new A.qa(!0,new A.b7u(p),26,q),!0)))),this.d,q)
return this.e?r:B.bm(q,r,q,q,C.D,q,q,3)}}
A.anz.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aM3
w=new B.ab(l,new A.bgt(),B.af(l).i("ab<1,G>")).jG(0,new A.bgu())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.M)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dr()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hU(C.ah,C.f,C.i,C.j,m,C.aQ,m,0,B.b([new B.jo(1,C.di,B.a6(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,m,B.y(C.p,12,C.aD),m,m,m)],v),C.z,C.f,C.i),m),C.ao,B.i(p.ap(o),m,m,m,m,B.bz(C.h,16,C.o),m,m,m)],v),m),C.cX,new B.Du(new B.d4(n,n,n,n),C.bx,B.zl(C.a3,m,8,C.d.bo(o/w,0,1),D.Bl),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.L(r)===B.L(q)&&B.a07(r.gbw(),q.gbw())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bm(m,B.a6(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.ajP.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.au(new A.Ci("Aktive Kunden",""+s,u),1)
w=B.au(new A.Ci("K\xe4ufe",""+t.a,u),1)
v=$.dr()
return B.bm(u,B.ah(B.b([s,w,B.au(new A.Ci("\xd8-Warenkorb",v.ap(t.d),u),1),B.au(new A.Ci("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.Ci.prototype={
p(d){var w=null
return B.a6(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.p,10,C.o).fu(0.6),w,w,w),C.b8,B.i(this.d,w,w,w,w,B.bz(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.E)}}
A.atp.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bqM(),B.af(q).i("ab<1,G>")).jG(0,new A.bqN()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.M)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hU(C.ah,C.f,C.i,C.j,r,C.aQ,r,0,B.b([new B.jo(1,C.di,B.i(u.b,r,1,C.ai,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.p,12,C.H),r,r,r),B.i($.dr().ap(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aV,new B.Du(new B.d4(s,s,s,s),C.bx,B.zl(C.a3,r,6,C.d.bo(t/p,0,1),D.Bl),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.L(u)===B.L(s)&&B.a07(u.gbw(),s.gbw())
else s=!0
if(!s)t.push(C.G)
C.b.K(n,t)}return B.bm(r,B.a6(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.wQ.prototype={
p(d){var w=null
return B.bm(w,B.i(this.c,w,w,w,w,B.y(C.p,13,C.l),w,w,w),C.a8,w,C.D,w,w,3)}}
A.ai0.prototype={
de(d,e){return B.dc(e.al($.bx1(),x.fM),new A.b4Q(this,d,e),new A.b4R(),new A.b4S(),!1,!0,!1,x.h,x.l)}}
A.Bj.prototype={
V(){return new A.TY()},
aXN(){return this.d.$0()}}
A.TY.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.es(J.al(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pH[t].a
if(v)r=""
else{r=B.b5(J.a2(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b4(r,".",",")}u.m(0,s,new B.bJ(new B.cW(r,C.bK,C.aT),$.ak()))}q.e!==$&&B.b1()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ca(v,v.r,v.e,B.l(v).i("ca<2>"))
while(v.u()){w=v.d
w.S$=$.ak()
w.T$=0}this.am()},
ro(d){var w=this.e
w===$&&B.a()
w=C.c.aS(w.h(0,d).a.a)
w=B.b4(w,".","")
w=B.iV(B.b4(w,",","."))
return w==null?0:w},
a3T(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pH[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b4(s,".",",")
t.ks(0,t.a.xY(C.aT,C.bK,s))}}this.J(new A.b4E())},
aEr(){this.a3T(D.aqI)
this.c.P(x.q).f.be(D.azr)},
I1(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I1=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pH[e].a)
q=a2
t=4
w=7
return B.k($.aFI.ck().zd(B.b(["csv","txt"],x.s),C.xX,!0),$async$I1)
case 7:p=a5
a2=p
o=a2==null?null:J.Kn(a2.a).c
if(o==null){w=1
break}n=C.aG.ade(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C9.cF(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.M)(a1),++e){l=a1[e]
k=J.awV(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.aS(J.a2(k,0)).toLowerCase()
i=J.CJ(q,j)?j:D.ar3.h(0,j)
if(i==null)continue
d=C.c.aS(C.b.n6(J.bRh(k,1)))
d=B.b4(d,"\u20ac","")
d=B.b4(d," ","")
d=B.b4(d,".","")
h=B.b4(d,",",".")
g=B.iV(h)
if(g!=null)J.fr(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.az4)
w=1
break}r.a3T(m)
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
return B.p($async$I1,v)},
Ic(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ic=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4F(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_g("upsert_finance_balance",B.a5(["p_as_of",C.c.a1(n.eg(),0,10),"p_cash_and_bank",q.ro("cash_and_bank"),"p_receivables",q.ro("receivables"),"p_inventory_value",q.ro("inventory_value"),"p_other_current_assets",q.ro("other_current_assets"),"p_fixed_assets",q.ro("fixed_assets"),"p_current_liabilities",q.ro("current_liabilities"),"p_long_term_liabilities",q.ro("long_term_liabilities"),"p_equity",q.ro("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ic)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXN()
o=q.c
o.toString
B.bb(o,!1).eQ()
q.c.P(x.q).f.be(D.az8)
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
if(q.c!=null)q.J(new A.b4G(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ic,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bz(C.h,18,C.o),r,r,r),p=s.f?r:new A.b4I(s,d),o=s.d
o===$&&B.a()
p=B.fP(D.adt,B.i("Stichtag: "+C.c.a1(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.au(B.fP(D.aeD,D.aFc,o?r:s.gaDt(),r),1)
v=x.p
w=B.b([p,C.G,B.ah(B.b([w,C.ao,B.au(B.fP(D.aep,D.aF1,o?r:s.gaEq(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pH[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f5(r,C.aX,!1,r,!0,C.r,r,B.fh(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b1,r,r,r,r,C.iz,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.au,r,C.a5,r,r,r,r),C.G],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.p,11,C.l),r,r,r))
p=B.bN(B.f4(B.a6(w,C.a9,C.f,C.E),r,C.F),r,380)
o=s.f
w=B.dJ(C.cY,r,r,o?r:new A.b4J(d),r,r)
o=o?r:s.gaEa()
t=B.dC(C.m,C.h,r,r,r,r,r)
return B.lK(B.b([w,B.dY(s.f?F.ZD:C.ez,o,t)],v),C.n,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a07(this.gbw(),e.gbw())
else w=!0
return w},
gv(d){return(B.f2(B.L(this))^B.bMp(this.gbw()))>>>0},
j(d){B.bFE()
return B.L(this).j(0)}}
A.Lb.prototype={
V(){return new A.TZ(B.A(x.S,x.I),new A.ayJ(B.A(x.x,x.T)),null,null)}}
A.TZ.prototype={
p(d){var w,v=this,u=v.a1Q(),t=v.CW
t.toString
t=v.a1R(t.au(0,v.gfp().gq(0)))
w=v.a1R(u)
v.a.toString
return new A.L6(new A.a1A(t,w,null),u,null)},
a1R(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayG(s.c,s.d,!1,r,s.a))}return d.aPN(w)},
a1Q(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UL(t.ch)
if(r)s=w.a
r=t.y
t=t.aQI(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPO(A.bxt(!1,!0,!0,v.d,v.c,u.gase(),v.f,v.e))}return t},
asf(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafC()||e==null||e.a==null){w=v.cy
v.J(w.gaPc(w))
return}v.J(new A.b4V(v,e))},
lu(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1Q(),new A.b4W(w)))}}
A.nY.prototype={
Vm(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayz(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQI(d,e){return this.Vm(null,null,d,e)},
aPO(d){return this.Vm(null,d,null,null)},
aPN(d){return this.Vm(d,null,null,null)},
Xh(d,e,f){var w,v,u,t=A.kE(d.ch,e.ch,f,A.c4K(),x.dB),s=B.ae(d.CW,e.CW,f),r=A.bFL(d.d,e.d,f),q=A.bHG(d.e,e.e,f),p=A.bFJ(d.c,e.c,f),o=e.a
o=A.a5U(B.a1R(d.a.b,o.b,f),o.a)
w=B.ae(d.y,e.y,f)
v=B.ae(d.x,e.x,f)
u=B.ae(d.z,e.z,f)
r=A.ayz(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bFG(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbw(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayy.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fG.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ayH(),B.af(v).i("ab<1,G>")).jG(0,new A.ayI())
v=v.length
return w+(v-1)*this.d},
gbw(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbw(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mN.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1x.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1C.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aey.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1D.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D5.prototype={
gbw(){return[this.a,this.b,C.bs,C.w,null]}}
A.Lc.prototype={}
A.a1E.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xG.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ahX.prototype={}
A.ai3.prototype={}
A.ai4.prototype={}
A.ai6.prototype={}
A.ai7.prototype={}
A.ai8.prototype={}
A.ai9.prototype={}
A.aia.prototype={}
A.aib.prototype={}
A.ayJ.prototype={
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uD(0,0,!1)
v=new A.zo(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uD(t,u,!0)}w=null
try{w=C.b.oX(d,new A.ayK())}catch(s){return new A.uD(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uD(q,r,!1)
u.m(0,v,j)
return j}}
A.uD.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.ai5.prototype={}
A.ayL.prototype={
ie(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_W(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ace(t,A.bxs(w,t.a),u)
l.y=u
l.aS4(e,u,f)
l.alL(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSd(d,e,m,t,r,s,n,o,f)}}},
ace(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dQ("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iU(p,B.af(p).i("iU<1>")).aw(0,new A.ayM(t,q,r,s))
w.push(new A.a6D(q))}return w},
aS4(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d4(k,k,k,k)}j=o.w
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
a4=B.Qo(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qo(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.J:f).gq(0)
k.seT(null)
a6=b3.f.en()
u.drawRRect(B.lF(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gq(0)
b1=e<f?new B.J(h,a9,g,b0):new B.J(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dN(b1),$.nO()[1],!0)
a6=b3.f.en()
u.drawRRect(B.lF(a4),a6)
a6.delete()
u.restore()
b3.aSb(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
b2=B.cG($.an().r)
n=new B.hm(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.il(k)
v.fV(A.aBS(b2,o.r),b3.r)}}}},
aSd(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AZ(a5,a5,a5,a5,B.cX(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lH().ZX(a8,a7.b),a7.a),C.bs,C.w,a5,b6.c,C.bC)
w.afW(b1.f)
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
m=v+4+(o.gd0(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aHE)j=v===D.a_i&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZY(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.J(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.G2(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lH().Kr(new B.H(v,t),d).b
s=$.lH()
q=w.b
p=q.c
q=q.a.c
a0=s.Kr(new B.H(p,q.gbU(q)),d)
q=g.gcb()
p=w.b.c
s=g.gai7()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.VY(d,new A.ayN(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.H(v,t))},
aSb(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gel(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a2
s=w?new B.aW(i.x,i.y):C.a2
r=w?C.a2:new B.aW(i.e,i.f)
w=w?C.a2:new B.aW(i.r,i.w)
q=B.Qo(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.Qo(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bzq(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
WE(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ace(b2,A.bxs(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1E(d,q,a0,o,a2,a1,new A.ez(d.a,v),new B.r(n,t))}}return null}}
A.a6D.prototype={}
A.a1A.prototype={
bm(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcO(),t=new A.ayL()
t.a18()
$.an()
w=B.aX()
w.b=C.bh
t.f=w
w=B.aX()
w.b=C.aZ
t.r=w
w=B.aX()
w.b=C.bh
w.r=C.n.gq(0)
t.w=w
w=B.aX()
w.b=C.aZ
w.r=C.J.gq(0)
w.c=1
t.x=w
t=new A.abI(this.d,v,u,t,d,C.bg,new B.bp(),B.aK(x.v))
t.bi()
t.YS(v.cy)
t.af3()
return t},
bx(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scO(B.by(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.abI.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYD(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0G(d.cy)
w.bc()},
scO(d){if(this.cX.k(0,d))return
this.cX=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.ie(w,new A.a24(t,v),new A.vO(u.aC,u.i6,u.cX,x.Q))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.Lc(w.fW.WE(d,v,new A.vO(w.aC,w.i6,w.cX,x.Q)))}}
A.a1q.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D4.prototype={
L(){return"AxisSide."+this.b}}
A.tA.prototype={}
A.qa.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad7.prototype={
gbw(){return[!1,0,0,0]}}
A.pj.prototype={
gbw(){return[this.b,this.a,this.c,!0]}}
A.v_.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ez.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ez))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yz.prototype={
gbw(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pE.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeA.prototype={
gbw(){return[this.a,this.b]}}
A.Qs.prototype={
gbw(){return[this.a,this.b]}}
A.n6.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nt.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kX.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lo.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6O.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeY.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N4.prototype={
gbw(){return[this.a,this.b,!0]}}
A.uZ.prototype={}
A.Nf.prototype={
adF(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bh
d.iU(f,this.b,w)},
gbw(){return[this.a,this.b,this.c,0]}}
A.ahS.prototype={}
A.ahW.prototype={}
A.al9.prototype={}
A.alu.prototype={}
A.alv.prototype={}
A.alx.prototype={}
A.aly.prototype={}
A.amn.prototype={}
A.amm.prototype={}
A.amo.prototype={}
A.apY.prototype={}
A.arP.prototype={}
A.arQ.prototype={}
A.att.prototype={}
A.aua.prototype={}
A.au9.prototype={}
A.aub.prototype={}
A.ayo.prototype={
ME(d,e,f,g,h,i){return new B.ih(this.aVS(d,e,f,g,h,i),x.g4)},
aVR(d,e,f,g){return this.ME(d,e,f,!0,g,!0)},
aVS(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$ME(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lH().aji(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.fR(u-s,v)*v===u
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
A.L5.prototype={
a18(){var w,v=this
$.an()
w=B.aX()
w.b=C.aZ
v.a=w
w=B.aX()
w.b=C.bh
v.b=w
w=B.aX()
w.b=C.bh
v.e=w
w=B.aX()
w.b=C.aZ
v.c=w
v.d=B.aX()},
ie(d,e,f){var w=this
w.a_X(d,e,f)
w.aS0(e,f)
w.aSa(e,f)
w.aS9(e,f)},
aS9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lH().OH(w.a,a1.r-a1.f)
u=$.bwC().ME(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lc(n,m)
if(j!=null){p.r=C.C.gq(0)
p.seT(j.mP(0,i))}else{if(k==null)k=C.J
p.r=k.gq(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.c3(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.Dz(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lH().OH(w.b,a1.y-a1.x)
u=$.bwC().ME(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.lc(n,m)
if(k!=null){q.r=C.C.gq(0)
q.seT(k.mP(0,i))}else{if(p==null)p=C.J
q.r=p.gq(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.c3(q.r)
q.r=B.aH(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.Dz(n,m,d.a,f.d)}},
aS0(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.he(new B.J(0,0,0+w.a,0+w.b),this.b)},
aSa(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.M)(k),++u){t=k[u]
s=B.lc(new B.r(n.fc(t.a,m,e),0),new B.r(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gq(0)
r.seT(p.mP(0,s))}else{r.r=(q==null?C.J:q).gq(0)
r.seT(null)}o=n.e.en()
w.drawRect(B.dN(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.M)(l),++u){t=l[u]
s=B.lc(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gq(0)
v.seT(q.mP(0,s))}else{v.r=(r==null?C.J:r).gq(0)
v.seT(null)}o=n.e.en()
j.drawRect(B.dN(s),o)
o.delete()}},
aS8(d,e,f){var w,v
this.a_X(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adG(d,e,f,w)
if(v.b.length!==0)this.aSf(d,e,f,w)},
adG(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lc(m,l)
if(j!=null){n.r=C.C.gq(0)
n.seT(j.mP(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.Dz(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eF(0,2)
g=C.d.an(o,n.gbU(n).eF(0,2))
J.b_(r.save())
r.translate(h,g)
n=n.gNC().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eF(0,2)
o=C.d.an(o,n.gbU(n).eF(0,2))
k=f.d
k===$&&B.a()
s.adH(0,n,new B.r(h,o),k)}}},
aSf(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.r(n,0)
o=d.fc(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lc(m,l)
if(j!=null){n.r=C.C.gq(0)
n.seT(j.mP(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.Dz(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eF(0,2)
g=n.gbU(n).eF(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.b_(r.save())
r.translate(f,e)
n=n.gNC().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eF(0,2)
g=n.gbU(n).ae(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.adH(0,n,new B.r(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZY(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.L6.prototype={
gal2(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal3(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal4(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gal0(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alp(d){var w,v=this,u=null,t=v.d,s=A.byc(t.d),r=t.a
r=r.a&&A.bRR(r.b)?r.b:u
w=B.b([B.aQ(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.ayq(w)
if(v.gal2())C.b.hz(w,s.$1(!0),new A.AJ(D.Bs,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal4())C.b.hz(w,s.$1(!0),new A.AJ(D.mG,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal3())C.b.hz(w,s.$1(!0),new A.AJ(D.Bt,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal0())C.b.hz(w,s.$1(!0),new A.AJ(D.dO,t,new B.H(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
p(d){return B.jt(new A.ayp(this))}}
A.RV.prototype={
V(){return new A.YF(new B.bk(null,x.eF))}}
A.YF.prototype={
axK(){switch(this.a.c.a){case 0:return C.ee
case 1:return C.fb
case 2:return C.d0
case 3:return C.dM}},
ayf(){switch(this.a.c.a){case 0:return new B.ag(0,0,8,0)
case 1:return new B.ag(0,0,0,8)
case 2:return new B.ag(8,0,0,0)
case 3:return new B.ag(0,8,0,0)}},
axM(d){this.a.toString
return},
aq(){this.aJ()
$.cA.x1$.push(this.ga4m())},
bb(d){this.bE(d)
$.cA.x1$.push(this.ga4m())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayf()
return B.B8(B.b2f(0,B.aQ(v.axK(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ad8.prototype={
bm(d){return A.bRJ(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.W!==w){e.W=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a1r.prototype={
hm(d){if(!(d.b instanceof B.hw))d.b=new B.hw(null,null,C.v)},
hZ(d){if(this.B===C.ah)return this.y7(d)
return this.adi(d)},
aKK(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a94(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a93(d,B.hJ())
switch(this.B.a){case 0:return d.c3(new B.H(w.a,w.b))
case 1:return d.c3(new B.H(w.b,w.a))}},
a93(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ah?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ho(u,null)
break
case 1:q=B.ho(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a94(p)
t=Math.max(t,o.aKK(p))
m=r.aG$}return new A.bg0(n<1/0?n:s,t)},
cC(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a93(o,B.mI()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c3(new B.H(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c3(new B.H(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a94(r==null?B.S(B.a_("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c8(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.y8(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v0(d,e)},
l(){this.a4.sbh(0,null)
this.aol()}}
A.bg0.prototype={}
A.ayr.prototype={}
A.jW.prototype={
gbw(){return[this.a,this.b]}}
A.nX.prototype={}
A.ahT.prototype={}
A.ahU.prototype={
aQ(d){var w,v,u
this.fo(d)
w=this.ah$
for(v=x.L;w!=null;){w.aQ(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fh(0)
w=this.ah$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ahV.prototype={}
A.TW.prototype={
l(){var w,v,u
for(w=this.Wb$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.AJ.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d0
case 1:return C.dM
case 2:return C.ee
case 3:return C.fb}},
gb_t(){var w=this.d,v=A.byc(w.d),u=A.bFI(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).ae(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).ae(0,new B.ag(u.a,0,u.c,0))}},
gahW(){var w=this.d,v=A.bFI(w.a),u=A.byc(w.d)
switch(this.c.a){case 2:case 0:return u.gd0(0)+u.gd4(0)+(v.gd0(0)+v.gd4(0))
case 1:case 3:return u.gev()+v.gev()}},
aWA(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lH().OH(d,f-e)
w=p.c
v=w!==D.mG
if((!v||w===D.dO)&&p.d instanceof A.nY){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bxs(u,d)
w=new B.iU(t,B.af(t).i("iU<1>"))
s=w.giG(w).f0(0,new A.b_c(u),x.W).h_(0)}else{r=$.bwC()
w=!v||w===D.dO
v=p.d
q=r.aVR(w?v.w:v.z,o,f,e)
v=B.os(q,new A.b_d(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.af(s).i("ab<1,nX>")
w=B.Q(new B.ab(s,new A.b_e(p,e,f,o,g,d),w),w.i("av.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aQ(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mG
u=!v
t=!u||w===D.dO
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dO?C.F:C.ah
q=B.b([],x.p)
if(w===D.Bs||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dO?r:j.goD().c.c
p=!u||w===D.dO?j.goD().c.c:r
o=j.gb_t()
n=!u||w===D.dO?C.ah:C.F
j.gahW()
m=j.gahW()
l=!u||w===D.dO
k=j.d
l=l?k.f:k.x
u=!u||w===D.dO?k.r:k.y
q.push(B.aQ(i,A.bZ2(new A.ayr(),n,j.aWA(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bt||w===D.dO)j.goD()
return new B.e9(t,i,i,B.bUu(q,C.j,s,i,C.f,C.E,0,i,i,C.aQ),i)}}
A.a1G.prototype={
gbw(){return[this.a,this.b]}}
A.a5T.prototype={
gbw(){return[this.a,this.b]}}
A.Nm.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5V.prototype={
gabz(d){return!1},
gbw(){return[!1,!1,!1,!1]}}
A.ayW.prototype={}
A.aFf.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aie.prototype={}
A.alr.prototype={}
A.als.prototype={}
A.alz.prototype={}
A.Lf.prototype={
ie(d,e,f){}}
A.vO.prototype={}
A.hv.prototype={
gdL(){return null},
gafC(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.Nl
if(w)return!0
return!(v instanceof A.Ni)&&!(v instanceof A.Nh)&&!(v instanceof A.Nj)&&!(v instanceof A.Ng)&&!w&&!(v instanceof A.Nk)}}
A.a5Z.prototype={
gdL(){return this.a.b}}
A.a6_.prototype={
gdL(){return this.a.b}}
A.a60.prototype={
gdL(){return this.a.b}}
A.Nh.prototype={}
A.Ni.prototype={}
A.a63.prototype={
gdL(){return this.a.b}}
A.Nk.prototype={}
A.Nl.prototype={
gdL(){return this.a.b}}
A.a5Y.prototype={
gdL(){return this.a.b}}
A.a5X.prototype={
gdL(){return this.a.b}}
A.Ng.prototype={
gdL(){return this.a.b}}
A.a61.prototype={
gdL(){return this.a.gdL()}}
A.a62.prototype={
gdL(){return this.a.gdL()}}
A.Nj.prototype={
gdL(){return this.a.gdL()}}
A.Gj.prototype={
YS(d){this.W=d.b
this.U=d.c
this.a4=d.d},
af3(){var w=this,v=null,u=w.ai=B.bz7(v,v)
u.ay=new A.aVt(w)
u.ch=new A.aVu(w)
u.CW=new A.aVv(w)
u.cy=new A.aVw(w)
u.cx=new A.aVx(w)
u=w.aE=B.H7(v,-1,v)
u.B=new A.aVy(w)
u.Y=new A.aVz(w)
u.W=new A.aVA(w)
u=w.bD=B.a7W(v,w.a4,v)
u.p3=new A.aVB(w)
u.p4=new A.aVC(w)
u.RG=new A.aVD(w)},
cC(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.H(w.b,w.d)},
dE(d){return new B.H(d.b,d.d)},
kK(d){return!0},
mZ(d,e){var w,v=this
if(v.W==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.rL(d)
w=v.aE
w===$&&B.a()
w.rL(d)
w=v.ai
w===$&&B.a()
w.rL(d)}else if(x.gJ.b(d))v.l6(new A.a62(d))},
gN8(d){return new A.aVE(this)},
gNa(d){return new A.aVF(this)},
l6(d){var w,v,u=this
if(u.W==null)return
w=d.gdL()
v=w!=null?u.ZR(w):null
u.W.$2(d,v)
u.Y=C.bg},
gKW(d){return this.Y},
gFw(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fo(d)
this.ar=!0},
aF(d){this.ar=!1
this.fh(0)},
$ijv:1}
A.OF.prototype={
V(){return new A.Wp(B.b([],x.r),B.A(x.S,x.I),new A.aLi(B.A(x.y,x.dj)),null,null)}}
A.Wp.prototype={
p(d){var w,v=this,u=v.a4o(),t=v.CW
t.toString
t=v.ab6(t.au(0,v.gfp().gq(0)))
w=v.ab6(u)
v.a.toString
return new A.L6(new A.a7O(t,w,null),u,null)},
ab6(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.af(w).i("ab<1,eb>")
w=B.Q(new B.ab(w,new A.bg5(this,d),v),v.i("av.E"))
return d.aQF(w,this.cy)},
a4o(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UL(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQU(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQj(new A.ER(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaz1(),t.c,t.d))}return r},
az2(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafC())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bg3(v))
return}v.J(new A.bg4(v,e))},
lu(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4o(),new A.bg6(w)))}}
A.pR.prototype={
Xh(d,e,f){var w,v,u,t,s,r,q=B.ae(d.f,e.f,f),p=B.ae(d.r,e.r,f),o=B.ae(d.w,e.w,f),n=B.ae(d.x,e.x,f),m=B.ae(d.y,e.y,f),l=B.ae(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5U(B.a1R(d.a.b,j.b,f),j.a)
w=A.bFG(d.at,e.at,f)
v=A.bFJ(d.c,e.c,f)
u=A.bFL(d.d,e.d,f)
t=A.bHG(d.e,e.e,f)
s=A.kE(d.ch,e.ch,f,A.c6M(),x.cz)
s.toString
r=A.kE(d.CW,e.CW,f,A.c6L(),x.J)
r.toString
u=A.byL(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vn(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byL(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQU(d,e,f,g){return this.Vn(null,null,d,e,f,g,null)},
aQj(d){var w=null
return this.Vn(w,d,w,w,w,w,w)},
aQF(d,e){var w=null
return this.Vn(d,w,w,w,w,w,e)},
gbw(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eb.prototype={
ar_(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oX(n.a,new A.aLh())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.M)(v),++p){o=v[p]
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
acX(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLg(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQq(d){return this.acX(d,null)},
aQs(d){return this.acX(null,d)},
gbw(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OG.prototype={
gbw(){return[this.a]}}
A.a1z.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mO.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.La.prototype={
gbw(){return[!1,this.b,this.c,!0]}}
A.yy.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.aL2.prototype={
L(){return"LabelDirection."+this.b}}
A.a5W.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.ER.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7P.prototype={
gbw(){return[4,C.fN,16,D.xU,0,120,A.c6O(),!1,!1,!1,0,C.I,A.c6N()]}}
A.n9.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qj.prototype={}
A.rB.prototype={
gbw(){return[this.a,this.b,C.bs,C.w,null]}}
A.tB.prototype={
gbw(){return[this.a,this.b]}}
A.GL.prototype={
gbw(){return[this.a]}}
A.OH.prototype={}
A.zj.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ai1.prototype={}
A.ai2.prototype={}
A.aif.prototype={}
A.alt.prototype={}
A.alw.prototype={}
A.anb.prototype={}
A.anc.prototype={}
A.and.prototype={}
A.anf.prototype={}
A.ang.prototype={}
A.anh.prototype={}
A.ani.prototype={}
A.arO.prototype={}
A.ats.prototype={}
A.aLi.prototype={
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yv
u=new A.zo(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.oX(d,new A.aLj())}catch(p){return D.yv}v=null
try{v=C.b.oX(w.a,new A.aLk())}catch(p){return D.yv}o=v.a
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
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ane.prototype={}
A.aLl.prototype={
ie(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabz(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iP(new B.J(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aPj(new B.J(0,0,u,v))}d.a_W(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t)d.aS6(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aS2(a3,q,a4)
d.aS7(a3,q,a4)
d.alK(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.X(o)
if(n.gt(o)!==p.length)throw B.e(B.dQ("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vx(q,i,j,k))}}d.aSe(a3,s,a4)
if(w.gabz(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSc(a2,a3,v,f,new A.GL(g),a4)}},
aS2(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.byb(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.M)(n),++v){u=n[v]
t=p.Zq(o,e,u,f)
s=p.aja(o,e,t,u,f)
r=p.Zs(o,e,t,u,f,!0)
q=p.aj9(o,e,t,u,f)
p.aS5(d,s,p.Zp(o,e,t,u,f,!0),f,e)
p.aS_(d,q,r,f,e)
p.aS3(d,t,e)
p.aS1(d,t,e,f)}},
aS6(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.byb(a6.a),a9=A.byb(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bX.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.af(m).i("cH<1>")
k=B.Q(new B.cH(m,l),l.i("av.E"))
j=a3.Zq(a4,a6,n,b3)
i=a3.Zr(a4,a7.aQs(k),k,b3,j)
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
m=a3.fc(h,a4,b3)
l=a3.dG(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dG(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gq(0)
a1.seT(u.mP(0,new B.J(m,l,d,a0)))}else{a1.r=(q?C.J:v).gq(0)
a1.seT(null)}$.an()
a2=new B.mR(C.dB,C.bh,C.e7,C.ex,C.dV).en()
m=B.dN(new B.J(0,0,s,r))
l=$.bX.b
if(l===$.bX)B.S(B.vu(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fV(i,a3.r)
w.restore()}},
aS7(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zw(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adF(s,q,new B.r(p,o))}}},
aSe(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h4(b3,new A.aLo())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.M)(b3),++o){n=b3[o]
m=n.a
l=b1.Zw(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.co()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rA(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lD(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lD(q.$2(m,k))))
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
b0=B.lc(a3,a5)
if(a6!=null){f.r=C.C.gq(0)
f.seT(a6.mP(0,b0))}else{if(a4==null)a4=C.J
f.r=a4.gq(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.c3(f.r)
f.r=B.aH(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.Dz(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rA(d.a))
f.adF(t,j,new B.r(h,g))}}},
Zr(d,e,f,g,h){var w=this.ajb(d,e,f,g,h)
return w},
Zq(d,e,f,g){return this.Zr(d,e,f,g,null)},
ajb(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cG($.an().r):a5,f=J.X(a3),e=f.gt(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.fc(d,a0))
if(e===1)g.aA(new B.cs(d,a0))}else g.aA(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Mb(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.il(r)}return g},
Zs(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.byJ(f)
v=J.X(g)
u=s.fc(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fc(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pq())
return w},
aja(d,e,f,g,h){return this.Zs(d,e,f,g,h,!1)},
Zp(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.byJ(f)
v=J.X(g)
u=t.fc(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fc(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pq())
return w},
aj9(d,e,f,g,h){return this.Zp(d,e,f,g,h,!1)},
aS5(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.bz6(s,q.b,q.c,new B.J(v,u,t,w.b))
d.a.fV(e,r.r)},
aS_(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fc(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.bz6(s,q.b,q.c,new B.J(v,0,u,t))
d.a.fV(e,r.r)},
aS3(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Oy(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iv:C.e7
u.e=C.ex
u.r=v.gq(0)
u.seT(null)
u.c=f.x
u.r=v.gq(0)
$.lH()
u.z=new B.zt(C.av,w.c*0.57735+0.5)
d.a.fV(B.byK(A.aBS(e,f.cy),w.b),this.f)},
aS1(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iv:C.e7
q.e=C.ex
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.bz6(t,f.r,f.w,new B.J(q,w,v,u))
t.z=null
t.c=f.x
A.bWW(t)
d.a.fV(A.aBS(e,f.cy),s.f)},
aSc(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLV(b1),b3=J.X(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dQ("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lH().ZX(b4,u.b)
s=u.a
r=w.k(0,C.iY)?new B.ky(1):w
q=new B.ty(new B.fT(s,a8,a8,C.bg,a8,a8,a8,a8,a8,a8,t),C.bs,C.w,r,a8,a8,a8,a8,C.bC,a8)
q.afW(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.M)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.fN.gev()
k=o+(w-1)*4+(C.fN.gd0(0)+C.fN.gd4(0))
j=t-k-16
i=a7.ZY(b3,l,D.xU,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.G2(new B.J(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLU(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lH().Kr(new B.H(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lH().Kr(new B.H(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.C.gq(0)
s.c=0}b5.VY(0,new A.aLm(a7,b5,g),a0,d,new B.H(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.M)(b0),++n){q=b0[n]
a5=A.bZE(q.r,q.w)
A:{if(D.El===a5){a6=a3
break A}if(D.Em===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VY(0,new A.aLn(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.H(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zw(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
WE(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajC(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h4(t,new A.aLp())
return t.length===0?null:t},
ajC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.fc(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qj(s,f,g,C.b.i8(w,v),v.a,v.b)}else return null}}
A.vx.prototype={}
A.a7O.prototype={
bm(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcO(),t=new A.aLl()
t.a18()
$.an()
w=B.aX()
w.b=C.aZ
t.f=w
w=B.aX()
w.b=C.bh
t.r=w
w=B.aX()
w.b=C.aZ
t.w=w
w=B.aX()
w.b=C.bh
w.r=C.J.gq(0)
w.a=D.a0u
t.x=w
w=B.aX()
w.b=C.aZ
w.r=C.C.gq(0)
t.y=w
w=B.aX()
w.b=C.bh
w.r=C.n.gq(0)
t.z=w
w=B.aX()
w.b=C.aZ
w.r=C.J.gq(0)
w.c=1
t.Q=w
t=new A.abV(this.d,v,u,t,d,C.bg,new B.bp(),B.aK(x.v))
t.bi()
t.YS(v.cx)
t.af3()
return t},
bx(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scO(B.by(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.abV.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYD(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0G(d.cx)
w.bc()},
scO(d){if(this.cX.k(0,d))return
this.cX=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.ie(w,new A.a24(t,v),new A.vO(u.aC,u.i6,u.cX,x.o))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.OH(w.fW.WE(d,v,new A.vO(w.aC,w.i6,w.cX,x.o)))}}
A.NL.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a24.prototype={
aPj(d){this.a.a.clipRect(B.dN(d),$.nO()[1],!0)
return null},
adN(d,e){d.aM(this.a,e)},
VY(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lH()
s.YB(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dz(d,e,f,g){var w=B.cG($.an().r)
w.aA(new B.fc(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fV(A.aBS(w,g),f)}}
A.zo.prototype={
gbw(){return[this.a]}}
A.anp.prototype={}
A.a2e.prototype={}
A.b2H.prototype={
Kr(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aX9(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXa(d,e){var w,v
if(d==null)return D.a0F
w=d.b
v=e/2
return d.aQv(w>v?v:w)},
OH(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_d(w)},
b_d(d){if(d<1)return this.aJf(d)
return this.a87(d)},
aJf(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a87(d*q)/q},
a87(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aO(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajq(d){if(d>=1)return 1
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
ZX(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j2
w=e.a?u.w.c6(e):e
v=B.b2(d,C.vM)
v=v==null?null:v.ay
return v===!0?w.c6(C.mn):w},
aji(d,e,f,g){var w=C.d.af(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(ql)","D(ez)","~(v,fG)","G(eb,v)","R<~>()","G(G,ql)","bM(G,tA)","pE(G)","v(qj,qj)","IA(of)","If(B,bH)","Jy(og)","vC(@)","wz(@)","eb(G)","CO(@)","aj(G,tA)","uY(dF<uY>)","Ef(dF<aFU>)","G(vC)","G(wz)","wQ(B,bH)","Bj(z)","~()","ql(@)","~(hv,Lc?)","xG(@)","G(ip)","D(fG)","~(v,ip)","~(@)","jW(nX)","c(nX)","jW(bG<v,G>)","jW(G)","nX(jW)","~(hv,OH?)","eb(eb)","lX(wo<lX>)","zj(@)","R<og>(c5<og>)","tB(v)","uZ(ez,G,eb,v)","rB(n9)","D(eb)","v(vx,vx)","G(fG)","R<of>(c5<of>)","v(v,v,G)","fG(fG,fG,G)","ip(ip,ip,G)","mN(mN,mN,G)","D5?(fG,v,ip,v)","E(fG)","c(G,tA)","ez(ez,ez,G)","D(G)","n6(n6,n6,G)","nt(nt,nt,G)","kX(kX,kX,G)","lo(lo,lo,G)","f(kX)","f(lo)","eb(eb,eb,G)","mO(mO,mO,G)","uZ(ez,G,eb,v{size:G?})","D(ez,eb)","G(r,r)","u<tB>(eb,u<v>)","y9(z)","u<rB>(u<n9>)","E(n9)","yw(en<B?>)"])
A.aFQ.prototype={
$1(d){var w=B.d_(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.ql(J.al(v==null?"":v),A.p7(w.h(0,"revenue_net")),A.p7(w.h(0,"expense_net")),A.p7(w.h(0,"result_net")))},
$S:z+24}
A.aFR.prototype={
$1(d){var w,v,u,t=B.d_(x.f.a(d),x.N,x.z),s=B.ac(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ac(t.h(0,"code"))
v=A.p7(t.h(0,"gross"))
u=B.b5(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vC(s,r,w,v,u,A.p7(t.h(0,"avg_basket")))},
$S:z+12}
A.aFS.prototype={
$1(d){var w,v=B.d_(x.f.a(d),x.N,x.z),u=B.ac(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.b5(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wz(u,t,w,A.p7(v.h(0,"gross")))},
$S:z+13}
A.aG8.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.X(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CO(v,u,J.al(t==null?"expense":t),A.uh(w.h(d,"net")),A.uh(w.h(d,"tax")),A.uh(w.h(d,"gross")))},
$S:z+15}
A.buk.prototype={
$1(d){return new A.uY(d.al($.bW(),x.A))},
$S:z+17}
A.bul.prototype={
$1(d){return new A.Ef(d.al($.bQy(),x.D))},
$S:z+18}
A.bwb.prototype={
$1(d){return E.aFT()},
$S:z+38}
A.bum.prototype={
$1(d){var w=d.al($.xs(),x.P)
return d.al($.awI(),x.a).FY(w)},
$S:z+40}
A.buj.prototype={
$1(d){var w=d.al($.xs(),x.P)
return d.al($.awI(),x.a).FT(w)},
$S:z+47}
A.bui.prototype={
$1(d){return this.aj0(d)},
aj0(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.al($.bW(),x.A).fB("finance_balance_kpis",t),$async$$1)
case 3:s=r.d_(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:217}
A.aFP.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awI(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFO.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awI(),x.a).LA(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aG6.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bx2()
if(s.e==null)B.S(B.a_(y.b))
s.gce().c7(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFZ.prototype={
$0(){return this.a.Jp(this.b,this.c)},
$S:0}
A.aG_.prototype={
$0(){return this.a.Bj(this.b,this.c)},
$S:0}
A.aG0.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dT(B.dH(new A.aFY(),null,w),w)},
$S:0}
A.aFY.prototype={
$1(d){return F.Dj},
$S:z+69}
A.aG1.prototype={
$0(){return B.k7(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aG2.prototype={
$0(){var w=this
return w.a.Bk(w.b,w.c,w.d)},
$S:0}
A.aG5.prototype={
$0(){return D.at5},
$S:110}
A.aG4.prototype={
$2(d,e){return new A.If(B.j(d),null)},
$S:z+10}
A.aG3.prototype={
$1(d){return new A.Jy(d,null)},
$S:z+11}
A.aFX.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lK(B.b([B.dJ(C.cY,w,w,new A.aFV(u),w,w),B.dY(F.vo,new A.aFW(u),B.dC(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vp)},
$S:54}
A.aFV.prototype={
$0(){B.bb(this.a,!1).dj(!1)
return null},
$S:0}
A.aFW.prototype={
$0(){B.bb(this.a,!1).dj(!0)
return null},
$S:0}
A.biO.prototype={
$0(){var w=this.a.aI(0,$.xs().ghR(),x.V),v=E.aFT()
w.uc(0,v)
return v},
$S:0}
A.biP.prototype={
$0(){var w=this.a.aI(0,$.xs().ghR(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lX(B.bP(B.aZ(v),1,1,0,0,0,0),v)
w.uc(0,u)
return u},
$S:0}
A.biQ.prototype={
$0(){return this.a.IM(this.b,this.c)},
$S:0}
A.biN.prototype={
$2(d,e){return new B.oO(B.V(d).aPR(B.V(d).ax.aQK(C.h,C.m)),e,null)},
$S:1027}
A.bpu.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dr(),s=A.Oq(!1,C.lh,"Umsatz 7 %",t.ap(u.a),w),r=A.Oq(!1,C.lh,"Umsatz 19 %",t.ap(u.b),w),q=A.Oq(!0,D.abz,"Umsatz netto",t.ap(u.c),w),p=A.Oq(!1,D.aby,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aIm(1.7,B.b([s,r,q,p,A.Oq(!0,C.nT,"Ergebnis",n,o<0?C.aa:C.ac),A.Oq(!1,C.fR,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.ii,!0)},
$S:122}
A.aL1.prototype={
$0(){return D.at2},
$S:110}
A.aL0.prototype={
$2(d,e){var w=null
return B.bm(C.aa,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fg,w,C.D,w,w,3)},
$S:180}
A.aL_.prototype={
$1(d){return new A.IA(d,null)},
$S:z+9}
A.bfS.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dr(),i=j.ap(k.c),h=l.w,g=l.d,f=B.af(g).i("ab<1,G>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.bfH(),f),e)
i=A.jO(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.ab(g,new A.bfI(),f),e)
d=A.jO(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.ab(g,new A.bfJ(),f),e)
k=A.jO(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.bfK(),f),e)
w=A.jO(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.bfL(),f),e)
v=A.jO(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.bfM(),f),e)
u=A.jO(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.bfN(),f),e)
t=A.jO(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.ab(g,new A.bfO(),f),e)
h=A.jO(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.ab(g,new A.bfP(m),f),e)
m=A.jO(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.ab(g,new A.bfQ(l),f),e)
l=A.jO(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.bfR(j),f),e)
return E.aIm(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jO(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ii,!0)},
$S:122}
A.bfH.prototype={
$1(d){return d.b},
$S:z+0}
A.bfI.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfJ.prototype={
$1(d){return d.d},
$S:z+0}
A.bfK.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfL.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfM.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfN.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfO.prototype={
$1(d){return d.d},
$S:z+0}
A.bfP.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfQ.prototype={
$1(d){return this.a},
$S:z+0}
A.bfR.prototype={
$1(d){return this.a},
$S:z+0}
A.bfT.prototype={
$0(){return A.bB_(this.b,1.45,new A.Ul(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfU.prototype={
$0(){return A.bB_(this.b,1.6,new A.UC(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.btr.prototype={
$1(d){var w=this,v=null,u=B.ax(16),t=x.p,s=B.b([B.ah(B.b([B.au(B.i(w.a,v,v,v,v,B.bz(C.h,18,C.o),v,v,v),1),B.fa(v,v,D.adS,v,v,new A.btq(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.p,12,C.aD),v,v,v),C.G],t))
s.push(C.t)
s.push(B.bN(new B.mM(w.c,w.d,v),v,17976931348623157e292))
return B.a59(v,C.n,new B.ad(C.aj,B.a6(s,C.z,C.f,C.E),v),v,v,v,C.fO,C.v5,v,new B.d0(u,C.I),v)},
$S:1028}
A.btq.prototype={
$0(){return B.bb(this.a,!1).eQ()},
$S:0}
A.bfV.prototype={
$0(){var w=this.a,v=B.b4(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bB_(this.b,2.4,new A.YR(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.boz.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.boA.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.boB.prototype={
$1(d){return A.aLg(null,1.4,null,C.aa,0.35,D.aie,D.Ec,null,!1,!1,!1,!1,D.Fz,!1,10,D.Z2,!0,C.lw,B.b([new A.ez(0,d),new A.ez(this.a,d)],x.U))},
$S:z+14}
A.b6r.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6t.prototype={
$2(d,e){var w=null
return B.i(this.a.aKy(d),w,w,w,w,B.y(C.p,10,C.H),w,w,w)},
$S:z+16}
A.b6u.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.vd
return new B.ad(C.l0,B.i(C.c.cU(this.a[v].a,5),w,w,w,w,B.y(C.p,9,C.H),w,w,w),w)},
$S:z+6}
A.b6s.prototype={
$1(d){return D.aa_},
$S:z+7}
A.b7r.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7s.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7t.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b7u.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.vd
return new B.ad(C.l0,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bgt.prototype={
$1(d){return d.d},
$S:z+19}
A.bgu.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bqM.prototype={
$1(d){return d.d},
$S:z+20}
A.bqN.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b4S.prototype={
$0(){return D.atb},
$S:110}
A.b4R.prototype={
$2(d,e){return new A.wQ("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4Q.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bm(m,B.a6(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.G,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.p,12.5,C.l),m,m,m),C.t,B.kw(C.cj,B.b([B.fP(C.F7,D.aH0,new A.b4K(w,v),m),B.fP(D.adu,D.aFX,new A.b4L(w,v),m)],u),C.dy,8,8)],u),C.z,C.f,C.i),C.a8,m,C.D,m,m,3)}w=new A.b4T(d)
t=C.b.fI(n.a.e.d,0,new A.b4M())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jt(new A.b4N(new A.b4U(w),r,w,s))
v=J.X(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a6(B.b([w,C.G,B.ah(B.b([B.au(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.p,11,C.l),m,m,m),1),B.qg(D.aeJ,D.aGh,new A.b4O(q,p),m),B.qg(D.aej,D.aG2,new A.b4P(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:225}
A.b4K.prototype={
$0(){return A.aw1(this.a,this.b,null)},
$S:0}
A.b4L.prototype={
$0(){return A.avZ(this.a,this.b)},
$S:0}
A.b4T.prototype={
$1(d){var w=B.b5(J.a2(this.a,d))
return w==null?null:w},
$S:1029}
A.b4U.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b4(w,".",",")+" %"}return w},
$S:34}
A.b4M.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4N.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jO(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i2,o.$1("liquidity1_pct")),m=A.jO(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i2,o.$1("liquidity2_pct")),l=A.jO(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i2,o.$1("liquidity3_pct"))
o=A.jO(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i2,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b4(w,".",",")+" %"}w=A.jO(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i2,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dr()
v=u.ap(v)
return E.aIm(p,B.b([n,m,l,o,w,A.jO(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.i2,v)],x.p),q,12,12,C.ii,!0)},
$S:122}
A.b4O.prototype={
$0(){return A.avZ(this.a,this.b)},
$S:0}
A.b4P.prototype={
$0(){return A.aw1(this.a,this.b,this.c)},
$S:0}
A.btp.prototype={
$1(d){return new A.Bj(this.a,new A.bto(this.b),this.c,null)},
$S:z+22}
A.bto.prototype={
$0(){var w=this.a,v=$.bx1()
if(w.e==null)B.S(B.a_(y.b))
w.gce().c7(v)},
$S:0}
A.b4E.prototype={
$0(){},
$S:0}
A.b4F.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4G.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4I.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uo(u.b,B.bP(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4H(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4H.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4J.prototype={
$0(){return B.bb(this.a,!1).eQ()},
$S:0}
A.b4V.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4W.prototype={
$1(d){return new A.xG(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayH.prototype={
$1(d){return d.e},
$S:z+27}
A.ayI.prototype={
$2(d,e){return d+e},
$S:46}
A.ayK.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayM.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayN.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.adN(v.d,v.e)},
$S:0}
A.ayq.prototype={
$1(d){return 0},
$S:1030}
A.ayp.prototype={
$2(d,e){return B.eU(C.bU,this.a.alp(e),C.r,C.bj,null)},
$S:1031}
A.b_a.prototype={
$1(d){return d.a},
$S:z+31}
A.b_b.prototype={
$1(d){return d.b},
$S:z+32}
A.b_c.prototype={
$1(d){return new A.jW(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_d.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mG||v===D.dO))t=1-t
return new A.jW(d,t*w.d)},
$S:z+34}
A.b_e.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lH()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajq(Math.abs(s.b-s.c)))
t=""}if(C.c.hs(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nX(d,q.c.b.$2(p,new A.tA(u+t,s.e)))},
$S:z+35}
A.aVt.prototype={
$1(d){this.a.l6(new A.a5Z(d))},
$S:169}
A.aVu.prototype={
$1(d){this.a.l6(new A.a6_(d))},
$S:42}
A.aVv.prototype={
$1(d){this.a.l6(new A.a60(d))},
$S:29}
A.aVw.prototype={
$0(){this.a.l6(D.a2o)},
$S:0}
A.aVx.prototype={
$1(d){this.a.l6(new A.Ni())},
$S:45}
A.aVy.prototype={
$1(d){this.a.l6(new A.a63(d))},
$S:41}
A.aVz.prototype={
$0(){this.a.l6(D.a2p)},
$S:0}
A.aVA.prototype={
$1(d){this.a.l6(new A.Nl(d))},
$S:89}
A.aVB.prototype={
$1(d){this.a.l6(new A.a5Y(d))},
$S:173}
A.aVC.prototype={
$1(d){this.a.l6(new A.a5X(d))},
$S:174}
A.aVD.prototype={
$1(d){return this.a.l6(new A.Ng(d))},
$S:175}
A.aVE.prototype={
$1(d){return this.a.l6(new A.a61(d))},
$S:64}
A.aVF.prototype={
$1(d){return this.a.l6(new A.Nj(d))},
$S:52}
A.bg5.prototype={
$1(d){var w=this.a.db.h(0,C.b.i8(this.b.ch,d))
return d.aQq(w==null?B.b([],x.t):w)},
$S:z+37}
A.bg3.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.bg4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h4(w,new A.bg2())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.GL(w))},
$S:0}
A.bg2.prototype={
$2(d,e){return C.d.cD(e.b,d.b)},
$S:z+8}
A.bg6.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aLh.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.bu9.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFK(t?A.bAO(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tB(w,new A.yy(!0,A.bBA(),new A.bu8(v)))},
$S:z+41}
A.bu8.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUs(A.bAO(d,e,f),w,A.c2l(d,e,f))},
$S:z+42}
A.bu6.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j3(v,v,u==null?D.du:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rB(C.d.j(d.b),w)},
$S:z+43}
A.aLj.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLk.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aLo.prototype={
$2(d,e){return C.d.cD(e.c.b,d.c.b)},
$S:z+45}
A.aLm.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aLn.prototype={
$0(){this.a.adN(this.b,this.c)},
$S:0}
A.aLp.prototype={
$2(d,e){return C.d.cD(d.w,e.w)},
$S:z+8}
A.ayA.prototype={
$1(d){return d.gdt(0)},
$S:z+46}
A.ayB.prototype={
$2(d,e){return d+e},
$S:46}
A.ayE.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iU(v,B.af(v).i("iU<1>")).aw(0,new A.ayF(w,this.a/(u+1),this.c))},
$S:0}
A.ayF.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+2}
A.ayC.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+2}
A.ayD.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIl.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1032}
A.aBT.prototype={
$1(d){return d},
$S:1033};(function aliases(){var w=A.L5.prototype
w.a_W=w.ie
w.alK=w.aS8
w.alL=w.adG
w=A.TW.prototype
w.aol=w.l
w=A.Lf.prototype
w.a_X=w.ie
w=A.Gj.prototype
w.a0G=w.YS})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5Y","bUp",72)
var q
v(q=A.TY.prototype,"gaEq","aEr",23)
v(q,"gaDt","I1",4)
v(q,"gaEa","Ic",4)
u(A.TZ.prototype,"gase","asf",25)
t(A,"c4K",3,null,["$3"],["bRL"],49,0)
t(A,"c4L",3,null,["$3"],["bRM"],50,0)
t(A,"c4M",3,null,["$3"],["bRN"],51,0)
t(A,"c4O",4,null,["$4"],["c5B"],52,0)
w(A,"c4N","c5A",53)
s(A,"bB3","c5C",54)
t(A,"c4F",3,null,["$3"],["bUt"],55,0)
w(A,"a04","c7W",56)
w(A,"aw4","c5F",7)
t(A,"c4H",3,null,["$3"],["bVg"],57,0)
t(A,"c4J",3,null,["$3"],["c_x"],58,0)
t(A,"c4G",3,null,["$3"],["bVf"],59,0)
t(A,"c4I",3,null,["$3"],["c_w"],60,0)
w(A,"cf8","bVe",61)
w(A,"cf9","c_v",62)
r(A.YF.prototype,"ga4m","axM",30)
u(A.Wp.prototype,"gaz1","az2",36)
t(A,"c6M",3,null,["$3"],["bVH"],63,0)
t(A,"c6L",3,null,["$3"],["bRO"],64,0)
w(A,"c6P","c7X",1)
t(A,"bMh",4,null,["$5$size","$4"],["bKK",function(d,e,f,g){return A.bKK(d,e,f,g,null)}],65,0)
s(A,"bBA","c7V",66)
s(A,"bMi","c4s",67)
s(A,"bMl","c5I",68)
s(A,"bMk","c5E",3)
s(A,"bMj","c5D",3)
w(A,"c6O","bLV",70)
w(A,"c6N","bLU",71)
t(A,"a09",3,null,["$3"],["c6K"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.F,[A.a7B,A.ah7,A.amx,A.J8,A.Jy,A.ah5,A.If,A.IA,A.alP,A.an4,A.Vb,A.YR,A.Ul,A.UC,A.anz,A.ajP,A.Ci,A.atp,A.wQ,A.L6,A.AJ])
u(B.B,[A.uY,A.Ef,A.bh,A.aie,A.ai4,A.ai6,A.ai7,A.ahX,A.alz,A.aia,A.ai8,A.ayW,A.att,A.ayJ,A.ai5,A.Lf,A.a6D,A.tA,A.arQ,A.arP,A.ahW,A.aly,A.ez,A.alv,A.alx,A.apY,A.amo,A.aub,A.alw,A.al9,A.alu,A.ayo,A.bg0,A.ayr,A.ahT,A.nX,A.alr,A.als,A.vO,A.hv,A.anc,A.anf,A.ai1,A.aif,A.ai2,A.alt,A.ani,A.ang,A.ats,A.arO,A.aLi,A.ane,A.vx,A.a24,A.anp,A.a2e,A.b2H])
u(B.uW,[A.ql,A.vC,A.wz,A.aBg,A.aCo,A.of,A.CO,A.og])
u(B.o2,[A.aFQ,A.aFR,A.aFS,A.aG8,A.buk,A.bul,A.bwb,A.bum,A.buj,A.bui,A.aFY,A.aG3,A.aFX,A.aL_,A.bfH,A.bfI,A.bfJ,A.bfK,A.bfL,A.bfM,A.bfN,A.bfO,A.bfP,A.bfQ,A.bfR,A.btr,A.boB,A.b6s,A.b7r,A.b7s,A.bgt,A.bqM,A.b4Q,A.b4T,A.b4U,A.btp,A.b4W,A.ayH,A.ayK,A.ayq,A.b_a,A.b_b,A.b_c,A.b_d,A.b_e,A.aVt,A.aVu,A.aVv,A.aVx,A.aVy,A.aVA,A.aVB,A.aVC,A.aVD,A.aVE,A.aVF,A.bg5,A.bg6,A.aLh,A.bu9,A.bu8,A.bu6,A.aLj,A.aLk,A.ayA,A.aBT])
t(A.yw,B.fB)
u(B.xW,[A.aFP,A.aFO,A.aG6,A.aFZ,A.aG_,A.aG0,A.aG1,A.aG2,A.aG5,A.aFV,A.aFW,A.biO,A.biP,A.biQ,A.aL1,A.bfT,A.bfU,A.btq,A.bfV,A.b4S,A.b4K,A.b4L,A.b4O,A.b4P,A.bto,A.b4E,A.b4F,A.b4G,A.b4I,A.b4H,A.b4J,A.b4V,A.ayN,A.aVw,A.aVz,A.bg3,A.bg4,A.aLm,A.aLn,A.ayE])
u(B.y3,[A.yx,A.aoN,A.a7C,A.ai0])
u(B.xX,[A.aG4,A.biN,A.bpu,A.aL0,A.bfS,A.boz,A.boA,A.b6r,A.b6t,A.b6u,A.b7t,A.b7u,A.bgu,A.bqN,A.b4R,A.b4M,A.b4N,A.ayI,A.ayM,A.ayp,A.bg2,A.aLo,A.aLp,A.ayB,A.ayF,A.ayC,A.ayD,A.aIl])
u(B.N,[A.Bj,A.RV])
u(B.Z,[A.TY,A.YF])
u(B.NY,[A.Lb,A.OF])
u(B.ux,[A.TZ,A.Wp])
t(A.a1G,A.aie)
t(A.ahS,A.a1G)
t(A.a1q,A.ahS)
u(A.a1q,[A.ai3,A.and])
t(A.nY,A.ai3)
u(B.Ie,[A.ayy,A.aey,A.D4,A.aFf,A.aL2,A.NL])
t(A.fG,A.ai4)
t(A.ip,A.ai6)
t(A.mN,A.ai7)
t(A.a1x,A.ahX)
t(A.Nm,A.alz)
u(A.Nm,[A.ai9,A.anh])
t(A.a1C,A.ai9)
t(A.a1D,A.aia)
t(A.D5,A.ai8)
u(A.ayW,[A.Lc,A.OH])
t(A.aeA,A.att)
t(A.aib,A.aeA)
t(A.a1E,A.aib)
u(B.b3,[A.xG,A.zj])
t(A.uD,A.ai5)
t(A.L5,A.Lf)
u(A.L5,[A.ayL,A.aLl])
u(B.OA,[A.a1A,A.a7O])
u(B.I,[A.Gj,A.ahU])
u(A.Gj,[A.abI,A.abV])
t(A.qa,A.arQ)
t(A.ad7,A.arP)
t(A.pj,A.ahW)
t(A.v_,A.aly)
t(A.yz,A.alv)
t(A.pE,A.alx)
t(A.Qs,A.apY)
t(A.n6,A.amo)
t(A.nt,A.aub)
u(A.pE,[A.amn,A.aua])
t(A.kX,A.amn)
t(A.lo,A.aua)
t(A.a5W,A.alw)
u(A.a5W,[A.amm,A.au9])
t(A.a6O,A.amm)
t(A.aeY,A.au9)
t(A.N4,A.al9)
t(A.uZ,A.alu)
t(A.Nf,A.uZ)
t(A.ad8,B.h9)
t(A.ahV,A.ahU)
t(A.TW,A.ahV)
t(A.a1r,A.TW)
t(A.jW,A.ahT)
t(A.a5T,A.alr)
t(A.a5V,A.als)
u(A.hv,[A.a5Z,A.a6_,A.a60,A.Nh,A.Ni,A.a63,A.Nk,A.Nl,A.a5Y,A.a5X,A.Ng,A.a61,A.a62,A.Nj])
t(A.pR,A.and)
t(A.eb,A.anc)
t(A.OG,A.anf)
t(A.a1z,A.ai1)
t(A.mO,A.aif)
t(A.La,A.ai2)
t(A.yy,A.alt)
t(A.ER,A.anh)
t(A.a7P,A.ani)
t(A.anb,A.ez)
t(A.n9,A.anb)
t(A.qj,A.n9)
t(A.rB,A.ang)
t(A.tB,A.ats)
t(A.GL,A.arO)
t(A.zk,A.ane)
t(A.zo,A.anp)
w(A.ahX,A.bh)
w(A.ai3,A.bh)
w(A.ai4,A.bh)
w(A.ai6,A.bh)
w(A.ai7,A.bh)
w(A.ai8,A.bh)
w(A.ai9,A.bh)
w(A.aia,A.bh)
w(A.aib,A.bh)
w(A.ai5,A.bh)
w(A.ahS,A.bh)
w(A.ahW,A.bh)
w(A.al9,A.bh)
w(A.alu,A.bh)
w(A.alv,A.bh)
w(A.alx,A.bh)
w(A.aly,A.bh)
w(A.amn,A.bh)
w(A.amm,A.bh)
w(A.amo,A.bh)
w(A.apY,A.bh)
w(A.arP,A.bh)
w(A.arQ,A.bh)
w(A.att,A.bh)
w(A.aua,A.bh)
w(A.au9,A.bh)
w(A.aub,A.bh)
w(A.ahT,A.bh)
v(A.ahU,B.aE)
w(A.ahV,B.e8)
v(A.TW,B.a4T)
w(A.aie,A.bh)
w(A.alr,A.bh)
w(A.als,A.bh)
w(A.alz,A.bh)
w(A.ai1,A.bh)
w(A.ai2,A.bh)
w(A.aif,A.bh)
w(A.alt,A.bh)
w(A.alw,A.bh)
w(A.anb,A.bh)
w(A.anc,A.bh)
w(A.and,A.bh)
w(A.anf,A.bh)
w(A.ang,A.bh)
w(A.anh,A.bh)
w(A.ani,A.bh)
w(A.arO,A.bh)
w(A.ats,A.bh)
w(A.ane,A.bh)
w(A.anp,A.bh)})()
B.br0(b.typeUniverse,JSON.parse('{"a7B":{"F":[],"c":[]},"Ef":{"aFU":[]},"yw":{"fB":["bg<~>"],"fB.T":"bg<~>"},"Jy":{"F":[],"c":[]},"If":{"F":[],"c":[]},"yx":{"bf":[],"N":[],"c":[]},"ah7":{"F":[],"c":[]},"amx":{"F":[],"c":[]},"aoN":{"bf":[],"N":[],"c":[]},"J8":{"F":[],"c":[]},"ah5":{"F":[],"c":[]},"IA":{"F":[],"c":[]},"wQ":{"F":[],"c":[]},"Bj":{"N":[],"c":[]},"a7C":{"bf":[],"N":[],"c":[]},"alP":{"F":[],"c":[]},"an4":{"F":[],"c":[]},"Vb":{"F":[],"c":[]},"YR":{"F":[],"c":[]},"Ul":{"F":[],"c":[]},"UC":{"F":[],"c":[]},"anz":{"F":[],"c":[]},"ajP":{"F":[],"c":[]},"Ci":{"F":[],"c":[]},"atp":{"F":[],"c":[]},"ai0":{"bf":[],"N":[],"c":[]},"TY":{"Z":["Bj"]},"Lb":{"N":[],"c":[]},"TZ":{"Z":["Lb"]},"nY":{"bh":[]},"fG":{"bh":[]},"ip":{"bh":[]},"mN":{"bh":[]},"D5":{"bh":[]},"xG":{"b3":["nY"],"b6":["nY"],"b6.T":"nY","b3.T":"nY"},"a1x":{"bh":[]},"a1C":{"bh":[]},"a1D":{"bh":[]},"a1E":{"bh":[]},"uD":{"bh":[]},"a1A":{"aV":[],"c":[]},"abI":{"I":[],"K":[],"jv":[],"aU":[]},"pE":{"bh":[]},"n6":{"bh":[]},"nt":{"bh":[]},"kX":{"bh":[]},"lo":{"bh":[]},"uZ":{"bh":[]},"a1q":{"bh":[]},"qa":{"bh":[]},"ad7":{"bh":[]},"pj":{"bh":[]},"v_":{"bh":[]},"yz":{"bh":[]},"aeA":{"bh":[]},"Qs":{"bh":[]},"a6O":{"bh":[]},"aeY":{"bh":[]},"N4":{"bh":[]},"Nf":{"bh":[]},"L6":{"F":[],"c":[]},"RV":{"N":[],"c":[]},"YF":{"Z":["RV"]},"jW":{"bh":[]},"ad8":{"h9":[],"aV":[],"c":[]},"a1r":{"e8":["I","hw"],"I":[],"aE":["I","hw"],"K":[],"aU":[],"aE.1":"hw","e8.1":"hw","aE.0":"I"},"AJ":{"F":[],"c":[]},"a1G":{"bh":[]},"a5T":{"bh":[]},"Nm":{"bh":[]},"a5V":{"bh":[]},"a5Z":{"hv":[]},"a6_":{"hv":[]},"a60":{"hv":[]},"Nh":{"hv":[]},"Ni":{"hv":[]},"a63":{"hv":[]},"Nk":{"hv":[]},"Nl":{"hv":[]},"a5Y":{"hv":[]},"a5X":{"hv":[]},"Ng":{"hv":[]},"a61":{"hv":[]},"a62":{"hv":[]},"Nj":{"hv":[]},"Gj":{"I":[],"K":[],"jv":[],"aU":[]},"OF":{"N":[],"c":[]},"Wp":{"Z":["OF"]},"pR":{"bh":[]},"eb":{"bh":[]},"mO":{"bh":[]},"n9":{"ez":[],"bh":[]},"qj":{"n9":[],"ez":[],"bh":[]},"rB":{"bh":[]},"tB":{"bh":[]},"GL":{"bh":[]},"zj":{"b3":["pR"],"b6":["pR"],"b6.T":"pR","b3.T":"pR"},"OG":{"bh":[]},"a1z":{"bh":[]},"La":{"bh":[]},"yy":{"bh":[]},"a5W":{"bh":[]},"ER":{"bh":[]},"a7P":{"bh":[]},"zk":{"bh":[]},"a7O":{"aV":[],"c":[]},"abV":{"I":[],"K":[],"jv":[],"aU":[]},"zo":{"bh":[]}}'))
B.bKe(b.typeUniverse,JSON.parse('{"L5":1,"Nm":1,"Lf":1,"Gj":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("CO"),e:w("bg<of>"),aN:w("bg<og>"),fM:w("bg<a3<f,@>?>"),b:w("bg<~>"),W:w("jW"),B:w("nY"),dB:w("fG"),T:w("uD"),fj:w("ip"),G:w("mN"),J:w("mO"),k:w("ar"),cX:w("a2e<G>"),dO:w("uL"),R:w("am<f,@>"),v:w("hq"),bz:w("lQ<b9>"),f0:w("o8"),E:w("bh"),F:w("yw"),X:w("of"),P:w("lX"),D:w("uY"),a:w("aFU"),d:w("og"),cw:w("ez"),L:w("hw"),m:w("du<v,E>"),cm:w("kX"),dv:w("n6"),g:w("C<nX>"),O:w("C<fG>"),Y:w("C<ip>"),C:w("C<bxX>"),U:w("C<ez>"),K:w("C<a6D>"),u:w("C<eb>"),bC:w("C<vx>"),aA:w("C<u<ez>>"),r:w("C<GL>"),s:w("C<f>"),eg:w("C<ty>"),df:w("C<qj>"),p:w("C<c>"),n:w("C<G>"),t:w("C<v>"),eF:w("bk<Z<N>>"),Z:w("n9"),cz:w("eb"),hf:w("pR"),dj:w("zk"),fT:w("rB"),c_:w("is<p0<bg<~>>>"),x:w("zo<fG>"),y:w("zo<eb>"),I:w("u<v>"),ef:w("vC"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ab<G,G>"),w:w("kd"),aU:w("B"),Q:w("vO<nY>"),o:w("vO<pR>"),eo:w("q0"),gJ:w("q1"),V:w("ko<lX>"),N:w("f"),A:w("no"),bO:w("bJ"),er:w("ty"),j:w("wz"),dw:w("qj"),bY:w("tB"),cZ:w("ql"),gc:w("kv"),es:w("lo"),bN:w("nt"),l:w("c"),q:w("x7"),g4:w("ih<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("v"),bn:w("xG?"),f3:w("zj?"),M:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("kv?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bl=new B.lL(C.m,B.aw("lL<E>"))
D.Bs=new A.D4(0,"left")
D.mG=new A.D4(1,"top")
D.Bt=new A.D4(2,"right")
D.dO=new A.D4(3,"bottom")
D.axg=new A.qa(!1,A.bB3(),22,null)
D.kv=new A.pj(16,null,D.axg,!0)
D.aa0=new A.pE(C.C,null,2,null)
D.wf=new A.La(!1,D.aa0,A.c6P(),!0)
D.a0l=new A.ayy(3,"spaceEvenly")
D.a0u=new B.xK(6,"dstIn")
D.Yj=new B.aW(3,3)
D.Bw=new B.d4(D.Yj,D.Yj,C.a2,C.a2)
D.a0F=new B.bn(C.C,0,C.T,-1)
D.C4=new A.a5V()
D.a2o=new A.Nh()
D.a2p=new A.Nk()
D.aPb=new A.ad7()
D.amX=w([],B.aw("C<kX>"))
D.amY=w([],B.aw("C<lo>"))
D.E8=new A.N4(D.amX,D.amY,!0)
D.a9G=new B.dG("Zeitraum",!1,null)
D.a9M=new B.dG("Konten (SKR 03)",!1,null)
D.xU=new A.aFf(0,"center")
D.aPo=new A.yy(!0,A.bBA(),A.bMh())
D.Ec=new A.yy(!1,A.bBA(),A.bMh())
D.Ed=new A.yz(!1,!0,null,A.aw4(),A.a04(),!0,null,A.aw4(),A.a04())
D.aPp=new A.yz(!0,!0,null,A.aw4(),A.a04(),!0,null,A.aw4(),A.a04())
D.a4L=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a4v=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4V=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4P=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a4c=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a4b=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a5j=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a4E=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a5m=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a5g=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.ar7=new B.du([50,D.a4L,100,D.a4v,200,D.a4V,300,D.a4P,400,D.a4c,500,D.a4b,600,D.a5j,700,D.a4E,800,D.a5m,900,D.a5g],x.m)
D.du=new B.rH(D.ar7,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aja=w([8,4],x.t)
D.a9Z=new A.pE(D.du,null,0.4,D.aja)
D.aa_=new A.pE(C.a3,null,0.5,null)
D.fP=new A.ez(0/0,0/0)
D.axi=new A.qa(!0,A.bB3(),44,null)
D.mH=new A.pj(16,null,D.axi,!0)
D.axh=new A.qa(!0,A.bB3(),30,null)
D.mI=new A.pj(16,null,D.axh,!0)
D.aa1=new A.v_(!1,D.mH,D.mI,D.mH,D.mI)
D.aPq=new A.v_(!0,D.mH,D.mI,D.mH,D.mI)
D.El=new A.NL(0,"left")
D.aaE=new A.NL(1,"center")
D.Em=new A.NL(2,"right")
D.aaJ=new B.a4(57495,"MaterialIcons",null,!1)
D.yc=new B.a4(58927,"MaterialIcons",null,!1)
D.aby=new B.a4(59005,"MaterialIcons",null,!0)
D.abz=new B.a4(59007,"MaterialIcons",null,!0)
D.abA=new B.a4(59011,"MaterialIcons",null,!1)
D.acz=new B.a4(62589,"MaterialIcons",null,!1)
D.abR=new B.a4(61349,"MaterialIcons",null,!1)
D.adr=new B.aA(D.abR,20,C.h,null,null)
D.abX=new B.a4(61487,"MaterialIcons",null,!1)
D.adt=new B.aA(D.abX,18,null,null,null)
D.adu=new B.aA(D.yc,18,null,null,null)
D.adS=new B.aA(C.hV,null,C.h,null,null)
D.adT=new B.aA(C.nU,null,C.p,null,null)
D.aej=new B.aA(C.o_,16,null,null,null)
D.aep=new B.aA(C.yk,16,null,null,null)
D.aaU=new B.a4(57912,"MaterialIcons",null,!1)
D.aes=new B.aA(D.aaU,null,C.aa,null,null)
D.acx=new B.a4(62584,"MaterialIcons",null,!1)
D.aeD=new B.aA(D.acx,16,null,null,null)
D.aeJ=new B.aA(D.yc,16,null,null,null)
D.agN=new A.a7C(null)
D.aPv=new A.aL2(0,"horizontal")
D.yv=new A.zk(0,0,0,0,!1)
D.Fz=new A.OG(0.5)
D.Ca=new A.a7P()
D.agR=new A.ER(D.Ca,A.bMl(),10,A.bMi(),!0,A.bMk(),A.bMj(),!1,null,null,null)
D.aPx=new A.ER(D.Ca,A.bMl(),10,A.bMi(),!0,A.bMk(),A.bMj(),!0,null,null,null)
D.aie=w([4,3],x.t)
D.avp=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.ave=new B.aI("receivables","Forderungen (kurzfristig)")
D.av2=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.av0=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auO=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.auV=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avl=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avd=new B.aI("equity","Eigenkapital")
D.pH=w([D.avp,D.ave,D.av2,D.av0,D.auO,D.auV,D.avl,D.avd],B.aw("C<+(f,f)>"))
D.aPA=w([],x.g)
D.amK=w([],x.O)
D.amL=w([],x.Y)
D.amM=w([],B.aw("C<mN>"))
D.amN=w([],B.aw("C<mO>"))
D.aPB=w([],x.U)
D.aPC=w([],x.u)
D.amO=w([],x.r)
D.arJ={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TZ={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.za=new B.am(D.TZ,[0,0,0,0,0,0,0,C.bZ],B.aw("am<f,B>"))
D.arG={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.ar1=new B.am(D.arG,[0,0,0,0],B.aw("am<f,v>"))
D.arY={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqt=new B.am(D.arY,[0,0,0,0,null,null,null,null],B.aw("am<f,v?>"))
D.aqm=new B.am(D.arJ,[D.za,D.za,D.za,C.bZ,C.bZ,C.bZ,D.ar1,D.aqt],x.R)
D.aqG=new B.am(D.TZ,[0,0,0,0,0,0,0,C.cu],x.R)
D.arK={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqI=new B.am(D.arK,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("am<f,G>"))
D.arF={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ar2=new B.am(D.arF,[0,0,0,0,0,0,0,C.cu],x.R)
D.as8={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar3=new B.am(D.as8,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("am<f,f>"))
D.a5s=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a5A=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a4f=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a4H=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4R=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5P=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a40=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a4J=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4U=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a5h=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.ar8=new B.du([50,D.a5s,100,D.a5A,200,D.a4f,300,D.a4H,400,D.a4R,500,D.a5P,600,D.a40,700,D.a4J,800,D.a4U,900,D.a5h],x.m)
D.TL=new B.rH(D.ar8,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8Z=new B.ag(32,32,32,32)
D.at2=new B.ad(D.a8Z,C.bJ,null)
D.a90=new B.ag(48,48,48,48)
D.at5=new B.ad(D.a90,C.bJ,null)
D.atb=new B.ad(C.aj,C.bJ,null)
D.amZ=w([],B.aw("C<n6>"))
D.an_=w([],B.aw("C<nt>"))
D.Yl=new A.Qs(D.amZ,D.an_)
D.awb=new B.fS("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awd=new B.fS("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awf=new B.fS("Automaten-Business","Umsatz je Automat",null,null)
D.awi=new B.fS("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awk=new B.fS("Top","Meistverkaufte Produkte",null,null)
D.awo=new B.fS("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awp=new B.fS("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z2=new B.ti(C.J,C.v,0)
D.aES=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.az1=new B.e2(D.aES,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGP=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.az4=new B.e2(D.aGP,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aF4=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.az5=new B.e2(D.aF4,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGI=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.az7=new B.e2(D.aGI,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGd=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.az8=new B.e2(D.aGd,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGa=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azr=new B.e2(D.aGa,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aPM=new B.T(!0,C.C,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aF1=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aFc=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFX=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aG2=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGh=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aH0=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_i=new A.aey(0,"auto")
D.aHE=new A.aey(1,"top")
D.aM3=new A.wQ("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aM4=new A.wQ("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfA","bQy",()=>B.iX(new A.buk(),x.D))
w($,"cfB","awI",()=>B.iX(new A.bul(),x.a))
w($,"cgD","xs",()=>B.bzM(new A.bwb(),x.P))
w($,"cfC","bx2",()=>C.aF.$1$1(new A.bum(),x.d))
w($,"cfz","bQx",()=>C.aF.$1$1(new A.buj(),x.X))
w($,"cfy","bx1",()=>C.aF.$1$1(new A.bui(),x.h))
w($,"cfx","bx0",()=>B.b00(A.c5Y(),x.F,x.b))
w($,"c8K","bwC",()=>new A.ayo())
v($,"cc3","lH",()=>new A.b2H())})()};
(a=>{a["5wFu67hnyF8Z3kgSDGzGjke2thc="]=a.current})($__dart_deferred_initializers__);