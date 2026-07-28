((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Og(d,e,f,g,h){return new A.a7g(f,g,d,h,e,null)},
a7g:function a7g(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uV:function uV(d){this.a=d},
Ee:function Ee(d){this.a=d},
bTG(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z9
w=x.f
v=x.N
u=x.z
t=A.aFE(B.dd(w.a(e.h(a0,"current")),v,u))
s=A.aFE(B.dd(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFE(B.dd(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cf
p=J.cX(p,new A.aFm(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cf
o=J.cX(o,new A.aFn(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cf
q=J.cX(q,new A.aFo(),x.j)
q=B.Q(q,q.$ti.i("au.E"))
n=B.dd(w.a(e.h(a0,"customer")),v,u)
m=B.bi(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.p5(n.h(0,"app_gross"))
k=B.bi(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.p5(n.h(0,"avg_basket"))
u=B.dd(w.a(e.h(a0,"derived")),v,u)
v=A.p5(u.h(0,"gross_margin_pct"))
e=A.p5(u.h(0,"net_margin_pct"))
w=A.p5(u.h(0,"ebitda_margin_pct"))
j=A.p5(u.h(0,"cashflow_operating"))
i=A.bsT(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsT(u.h(0,"revenue_growth_mom_pct"))
g=A.bsT(u.h(0,"result_growth_yoy_pct"))
u=A.bsT(u.h(0,"result_growth_mom_pct"))
f=B.bi(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.oa(t,s,r,p,o,q,new A.aAL(m,l,k,n),new A.aBT(v,e,w,j,i,h,g,u),f)},
p5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jv(J.am(d))
return w==null?0:w},
bsT(d){if(d==null)return null
if(typeof d=="number")return d
return B.jv(J.am(d))},
qk:function qk(d,e,f,g){var _=this
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
ww:function ww(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAL:function aAL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBT:function aBT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oa:function oa(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFm:function aFm(){},
aFn:function aFn(){},
aFo:function aFo(){},
aFE(d){var w=J.Z(d),v=A.ud(w.h(d,"revenue_net_7")),u=A.ud(w.h(d,"revenue_net_19")),t=A.ud(w.h(d,"revenue_net")),s=A.ud(w.h(d,"expense_net")),r=A.ud(w.h(d,"result_net")),q=A.ud(w.h(d,"vat_collected")),p=A.ud(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cf
w=J.cX(w,new A.aFF(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.ob(v,u,t,s,r,q,p,w)},
ud(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jv(J.am(d))
return w==null?0:w},
CM:function CM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ob:function ob(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFF:function aFF(){},
bTF(d){return new A.yw(d,new B.io(x.c_),C.dM)},
btH:function btH(){},
btI:function btI(){},
bvz:function bvz(){},
btJ:function btJ(){},
btG:function btG(){},
btF:function btF(){},
yw:function yw(d,e,f){this.r=d
this.a=e
this.f=f},
aFl:function aFl(d,e,f){this.a=d
this.b=e
this.c=f},
aFk:function aFk(d,e,f){this.a=d
this.b=e
this.c=f},
bTH(){return new A.yx(null)},
am7(d,e,f,g,h){return new A.am6(e,h,g,f,d,null)},
yx:function yx(d){this.a=d},
aFD:function aFD(d){this.a=d},
aFv:function aFv(d,e,f){this.a=d
this.b=e
this.c=f},
aFw:function aFw(d,e,f){this.a=d
this.b=e
this.c=f},
aFx:function aFx(d){this.a=d},
aFu:function aFu(){},
aFy:function aFy(d){this.a=d},
aFz:function aFz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFC:function aFC(){},
aFB:function aFB(){},
aFA:function aFA(){},
aFt:function aFt(d,e){this.a=d
this.b=e},
aFr:function aFr(d){this.a=d},
aFs:function aFs(d){this.a=d},
agM:function agM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
am6:function am6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aon:function aon(d,e){this.e=d
this.a=e},
bi3:function bi3(d){this.a=d},
bi4:function bi4(d){this.a=d},
bi5:function bi5(d,e,f){this.a=d
this.b=e
this.c=f},
bi2:function bi2(){},
J0:function J0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Js:function Js(d,e){this.c=d
this.a=e},
boI:function boI(d){this.a=d},
agK:function agK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I7:function I7(d,e){this.c=d
this.a=e},
bAk(d,e,f,g,h){var w=null
return B.j8(w,w,!0,w,new A.bsO(h,g,e,f),d,w,!0,!0,x.H)},
jI(d,e,f,g,h,i,j,k,l,m,n){return new A.amE(g,n,i,e,d,m,f,k,l,j,null)},
avq(d,e){return A.c3c(d,e)},
c3c(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avq=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bn(D.ayk)
t=4
o=e.aJ(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$avq)
case 7:r=g
q=B.dd(x.f.a(r.a),x.N,n)
l.Mk()
if(J.d(J.a3(q,"configured"),!1)){l.bn(D.ayo)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bwn()
if(e.e==null)B.S(B.Y(y.b))
e.gck().cc(o)
l.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mk()
l.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avq,v)},
avt(d,e,f){var w=0,v=B.q(x.H)
var $async$avt=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j8(null,null,!0,null,new A.bsM(f,e,e.aJ(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$avt)
case 2:return B.o(null,v)}})
return B.p($async$avt,v)},
a7h:function a7h(d){this.a=d},
aKx:function aKx(){},
aKw:function aKw(){},
aKv:function aKv(){},
Ir:function Ir(d,e){this.c=d
this.a=e},
bf7:function bf7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beX:function beX(){},
beY:function beY(){},
beZ:function beZ(){},
bf_:function bf_(){},
bf0:function bf0(){},
bf1:function bf1(){},
bf2:function bf2(){},
bf3:function bf3(){},
bf4:function bf4(d){this.a=d},
bf5:function bf5(d){this.a=d},
bf6:function bf6(d){this.a=d},
bf8:function bf8(d,e){this.a=d
this.b=e},
bf9:function bf9(d,e){this.a=d
this.b=e},
bsO:function bsO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsN:function bsN(d){this.a=d},
alr:function alr(d){this.a=d},
amE:function amE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfa:function bfa(d,e){this.a=d
this.b=e},
UZ:function UZ(d,e,f){this.c=d
this.d=e
this.a=f},
YB:function YB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnN:function bnN(){},
bnO:function bnO(){},
bnP:function bnP(d){this.a=d},
Ua:function Ua(d,e,f){this.c=d
this.d=e
this.a=f},
b5O:function b5O(){},
b5Q:function b5Q(d){this.a=d},
b5R:function b5R(d){this.a=d},
b5P:function b5P(){},
Up:function Up(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6K:function b6K(){},
b6L:function b6L(){},
b6M:function b6M(){},
b6N:function b6N(d){this.a=d},
an8:function an8(d,e){this.c=d
this.a=e},
bfJ:function bfJ(){},
bfK:function bfK(){},
ajs:function ajs(d,e){this.c=d
this.a=e},
Ce:function Ce(d,e,f){this.c=d
this.d=e
this.a=f},
asU:function asU(d,e){this.c=d
this.a=e},
bq_:function bq_(){},
bq0:function bq0(){},
wP:function wP(d,e){this.c=d
this.a=e},
ahF:function ahF(d,e){this.e=d
this.a=e},
b4e:function b4e(){},
b4d:function b4d(){},
b4c:function b4c(d,e,f){this.a=d
this.b=e
this.c=f},
b46:function b46(d,e){this.a=d
this.b=e},
b47:function b47(d,e){this.a=d
this.b=e},
b4f:function b4f(d){this.a=d},
b4g:function b4g(d){this.a=d},
b48:function b48(){},
b49:function b49(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4a:function b4a(d,e){this.a=d
this.b=e},
b4b:function b4b(d,e,f){this.a=d
this.b=e
this.c=f},
bsM:function bsM(d,e,f){this.a=d
this.b=e
this.c=f},
bsL:function bsL(d){this.a=d},
Be:function Be(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TN:function TN(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b40:function b40(){},
b41:function b41(d){this.a=d},
b42:function b42(d){this.a=d},
b44:function b44(d,e){this.a=d
this.b=e},
b43:function b43(d,e){this.a=d
this.b=e},
b45:function b45(d){this.a=d},
bf:function bf(){},
bDG(d){return new A.L_(d,C.al,C.bW,null,null)},
L_:function L_(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TO:function TO(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c4$=g
_.c=_.a=null},
b4h:function b4h(d,e){this.a=d
this.b=e},
b4i:function b4i(d){this.a=d},
ay3(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.ami:f,p=a0==null?16:a0,o=d==null?D.a0b:d,n=g==null,m=n?A.bwO(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yf:a3
n=n?A.bwO(r,r,r,r,r,r,r,r):g
w=j==null?D.E0:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.nT(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BW,s,w,i,n)},
aya(d,e,f,g,h){var w=d==null?D.amj:d,v=e==null?2:e,u=g==null?C.lu:g
return new A.fE(h,f===!0,w,v,u)},
bQZ(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.aya(A.kz(d.c,e.c,f,A.c3X(),x.fj),B.ac(d.d,e.d,f),!1,A.kz(d.e,e.e,f,A.a_T(),x.S),w)},
a1h(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TE
else w=h
v=m==null
u=v?8:m
t=$.lB()
s=t.aX3(f,v?8:m)
t=t.aX4(g,v?8:m)
v=d==null?A.bDE(r,r,r,r,r):d
return new A.ik(q,l,w,j,u,s,e,t,v,k==null?D.amk:k)},
bR_(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mL(d.f,e.f,f),p=A.kz(d.r,e.r,f,A.a_T(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a1h(A.bDE(v,u,null,!1,t),p,q,o,s,n,null,A.kz(d.y,e.y,f,A.c3Y(),x.G),m,r)},
bR0(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mJ(u,w,v,B.bX(d.d,e.d,f))},
bDE(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dr
else w=d
return new A.a1d(g===!0,v,u,w,f)},
bwO(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1j(4,C.hN,16,D.xM,0,120,A.c4_(),!1,!1,D.a_9,0,C.K,A.c3Z())
else w=k
v=j==null?C.l1:j
return new A.a1i(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c4L(d,e,f,g){var w=null,v=B.j0(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D3(C.d.j(f.b),v)},
c4K(d){return A.aAb(D.dr,15)},
nT:function nT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ay2:function ay2(d,e){this.a=d
this.b=e},
fE:function fE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayb:function ayb(){},
ayc:function ayc(){},
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
mJ:function mJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1d:function a1d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1i:function a1i(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aee:function aee(d,e){this.a=d
this.b=e},
a1j:function a1j(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D3:function D3(d,e){this.a=d
this.b=e},
L0:function L0(d){this.a=d},
a1k:function a1k(d,e,f,g,h,i,j,k){var _=this
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
ahB:function ahB(){},
ahI:function ahI(){},
ahJ:function ahJ(){},
ahL:function ahL(){},
ahM:function ahM(){},
ahN:function ahN(){},
ahO:function ahO(){},
ahP:function ahP(){},
ahQ:function ahQ(){},
ayd:function ayd(d){this.a=d},
aye:function aye(){},
uz:function uz(d,e,f){this.a=d
this.b=e
this.c=f},
ahK:function ahK(){},
ayf:function ayf(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayg:function ayg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayh:function ayh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6i:function a6i(d){this.b=d},
a1g:function a1g(d,e,f){this.d=d
this.e=e
this.a=f},
abo:function abo(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i7=e
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
c4M(d,e){var w=null
return new A.RJ(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axX(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pi(t,e.b,new A.qa(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bF3(d,e,f){var w=A.axX(d.b,e.b,f),v=A.axX(d.d,e.d,f),u=A.axX(d.e,e.e,f)
return new A.uX(e.a,w,A.axX(d.c,e.c,f),v,u)},
bTJ(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ey(w,v)},
bF1(d,e,f){return new A.yz(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c7a(d){return!0},
c4P(d){return D.a9M},
bF2(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pE(w,f,g,e)},
bGY(d,e,f){var w,v=A.kz(d.a,e.a,f,A.c3T(),x.dv)
v.toString
w=A.kz(d.b,e.b,f,A.c3V(),x.bN)
w.toString
return new A.Qi(v,w)},
bUv(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.n1(t,w,v,u)},
bZI(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.nq(t,w,v,u)},
bUu(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bUs(B.bwG(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kz(d.d,e.d,f,A.a_T(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kR(r,e.f,e.r,t,e.x,u,v,w,s)},
bZH(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.py(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bZF(B.bwG(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kz(d.d,e.d,f,A.a_T(),x.S)
if(u==null)u=v==null?C.C:null
return new A.li(r,e.f,e.r,t,e.x,u,v,w,s)},
bUs(d,e,f,g,h,i){return new A.a6t(f,!1,g,i,d,e)},
bUt(d){return C.d.aj(d.e,1)},
bZF(d,e,f,g,h,i){return new A.aeD(f,!1,g,i,d,e)},
bZG(d){return C.d.aj(d.e,1)},
bEZ(d,e,f){var w,v=A.kz(d.a,e.a,f,A.c3S(),x.cm)
v.toString
w=A.kz(d.b,e.b,f,A.c3U(),x.es)
w.toString
return new A.MU(v,w,!0)},
bTI(d,e,f){return new A.N4(d,e==null?4:e,f)},
a16:function a16(){},
D2:function D2(d,e){this.a=d
this.b=e},
ty:function ty(d,e){this.r=d
this.w=e},
qa:function qa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acN:function acN(){},
pi:function pi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uX:function uX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ey:function ey(d,e){this.a=d
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
aeg:function aeg(){},
Qi:function Qi(d,e){this.a=d
this.b=e},
n1:function n1(d,e,f,g){var _=this
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
li:function li(d,e,f,g,h,i,j,k,l){var _=this
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
aeD:function aeD(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MU:function MU(d,e,f){this.a=d
this.b=e
this.c=f},
uW:function uW(){},
N4:function N4(d,e,f){this.a=d
this.b=e
this.c=f},
ahw:function ahw(){},
ahA:function ahA(){},
akO:function akO(){},
al6:function al6(){},
al7:function al7(){},
al9:function al9(){},
ala:function ala(){},
alX:function alX(){},
alW:function alW(){},
alY:function alY(){},
apw:function apw(){},
arj:function arj(){},
ark:function ark(){},
asY:function asY(){},
atB:function atB(){},
atA:function atA(){},
atC:function atC(){},
axT:function axT(){},
KU:function KU(){},
KV:function KV(d,e,f){this.c=d
this.d=e
this.a=f},
axV:function axV(d){this.a=d},
axU:function axU(d){this.a=d},
RJ:function RJ(d,e,f){this.c=d
this.e=e
this.a=f},
Yq:function Yq(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYe(d,e,f){var w=B.ae(f),v=w.i("ab<1,jS>")
v=B.Q(new B.ab(f,new A.aZw(),v),v.i("au.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZx(),w),w.i("au.E"))
return new A.acO(e,d,v,w,null)},
bQX(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a77(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tw(v,C.as,C.w,new B.ku(1),v,v,v,v,C.bz,v)
u=new A.a17(f,d,e,u,t,!0,0,v,v,new B.bo(),B.aJ(x.v))
u.bi()
return u},
acO:function acO(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZw:function aZw(){},
aZx:function aZx(){},
a17:function a17(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W5$=h
_.aSS$=i
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
bfg:function bfg(d,e){this.a=d
this.b=e},
axW:function axW(){},
jS:function jS(d,e){this.a=d
this.b=e},
nS:function nS(d,e){this.a=d
this.b=e},
ahx:function ahx(){},
ahy:function ahy(){},
ahz:function ahz(){},
TL:function TL(){},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZy:function aZy(d){this.a=d},
aZz:function aZz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZA:function aZA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5C(d,e){var w=d==null?B.cr(C.C,1):d
return new A.a5B(e!==!1,w)},
a1m:function a1m(){},
a5B:function a5B(d,e){this.a=d
this.b=e},
Nb:function Nb(){},
a5D:function a5D(){},
ayq:function ayq(){},
aEL:function aEL(d,e){this.a=d
this.b=e},
ahT:function ahT(){},
al3:function al3(){},
al4:function al4(){},
alb:function alb(){},
L3:function L3(){},
vM:function vM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hs:function hs(){},
a5H:function a5H(d){this.a=d},
a5I:function a5I(d){this.a=d},
a5J:function a5J(d){this.a=d},
N6:function N6(){},
N7:function N7(){},
a5M:function a5M(d){this.a=d},
N9:function N9(){},
Na:function Na(d){this.a=d},
a5G:function a5G(d){this.a=d},
a5F:function a5F(d){this.a=d},
N5:function N5(d){this.a=d},
a5K:function a5K(d){this.a=d},
a5L:function a5L(d){this.a=d},
N8:function N8(d){this.a=d},
Gc:function Gc(){},
aUQ:function aUQ(d){this.a=d},
aUR:function aUR(d){this.a=d},
aUS:function aUS(d){this.a=d},
aUT:function aUT(d){this.a=d},
aUU:function aUU(d){this.a=d},
aUV:function aUV(d){this.a=d},
aUW:function aUW(d){this.a=d},
aUX:function aUX(d){this.a=d},
aUY:function aUY(d){this.a=d},
aUZ:function aUZ(d){this.a=d},
aV_:function aV_(d){this.a=d},
aV0:function aV0(d){this.a=d},
aV1:function aV1(d){this.a=d},
Ov:function Ov(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wb:function Wb(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c4$=h
_.c=_.a=null},
bfl:function bfl(d,e){this.a=d
this.b=e},
bfj:function bfj(d){this.a=d},
bfk:function bfk(d,e){this.a=d
this.b=e},
bfi:function bfi(){},
bfm:function bfm(d){this.a=d},
by4(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pR(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TE:u
else w=g
v=f==null?A.ay1(!1,u,0,u,!1,D.wa):f
w=new A.ed(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ay1(!1,u,0,u,!1,D.wa):d,j,a0,i,s,!1,p)
w.aqX(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bUX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bDF(d.ay,e.ay,f)
v=A.bDF(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kz(d.cy,e.cy,f,A.a_T(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rk(d.w,e.w,f)
p=A.kz(d.a,e.a,f,A.c3R(),x.cw)
p.toString
o=B.bHt(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKM(v,m,w,r,e.z,s,new A.yy(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ow(n),!1,u,o,!0,e.cx,p)},
ay1(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dr.A()>>>16&255,D.dr.A()>>>8&255,D.dr.A()&255):null
else w=e
return new A.a1f(h,w,g,i,f,!1)},
bDF(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rk(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bF2(t,A.kz(v.d,u.d,f,A.a_T(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rk(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.ay1(!1,s,v,u,e.a,new A.KZ(!1,r,w.c,!0))},
bR2(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rk(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dr.A()>>>16&255,D.dr.A()>>>8&255,D.dr.A()&255):null
return new A.mK(e.a,e.b,w,v)},
c7b(d){return!0},
bA8(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k8)return A.bAU(w.a,A.bxH(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dr:w},
c1v(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k8)w=A.bAU(v.a,A.bxH(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dr}return A.aAb(w,40)},
bJZ(d,e,f,g,h){var w,v=A.bA8(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k8)w=A.bAU(u.a,A.bxH(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dr}u=A.aAb(w,40)
return new A.N4(v,h==null?4:h,u)},
c79(d,e){return!0},
c3E(d,e){return Math.abs(d.a-e.a)},
c4S(d,e){var w=J.cX(e,new A.btv(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c4O(d,e){return-1/0},
c4N(d,e){return d.a[e].b},
bL9(d){var w=J.cX(d,new A.bts(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bL8(d){return A.aAb(D.dr,15)},
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
aKN:function aKN(){},
Ow:function Ow(d){this.a=d},
a1f:function a1f(d,e,f,g,h,i){var _=this
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
KZ:function KZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yy:function yy(d,e,f){this.a=d
this.b=e
this.c=f},
aKy:function aKy(d,e){this.a=d
this.b=e},
a5E:function a5E(){},
EQ:function EQ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btv:function btv(d){this.a=d},
btu:function btu(d){this.a=d},
a7u:function a7u(){},
bts:function bts(){},
n4:function n4(){},
qi:function qi(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rz:function rz(d,e){this.a=d
this.b=e},
tz:function tz(d,e){this.a=d
this.b=e},
GE:function GE(d){this.a=d},
Ox:function Ox(d){this.a=d},
zi:function zi(d,e){this.a=d
this.b=e},
ahG:function ahG(){},
ahH:function ahH(){},
ahU:function ahU(){},
al5:function al5(){},
al8:function al8(){},
amL:function amL(){},
amM:function amM(){},
amN:function amN(){},
amP:function amP(){},
amQ:function amQ(){},
amR:function amR(){},
amS:function amS(){},
ari:function ari(){},
asX:function asX(){},
aKO:function aKO(d){this.a=d},
aKP:function aKP(){},
aKQ:function aKQ(){},
zj:function zj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amO:function amO(){},
aKR:function aKR(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKU:function aKU(){},
aKS:function aKS(d,e,f){this.a=d
this.b=e
this.c=f},
aKT:function aKT(d,e,f){this.a=d
this.b=e
this.c=f},
aKV:function aKV(){},
vv:function vv(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7t:function a7t(d,e,f){this.d=d
this.e=e
this.a=f},
abB:function abB(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i7=e
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
bwN(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.ae(o),l=new B.ab(o,new A.ay4(),m.i("ab<1,F>")).jJ(0,new A.ay5()),k=e-l,j=new A.ay8(k,d,n)
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
new B.iR(o,m.i("iR<1>")).aw(0,new A.ay6(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iR(o,m.i("iR<1>")).aw(0,new A.ay7(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ay4:function ay4(){},
ay5:function ay5(){},
ay8:function ay8(d,e,f){this.a=d
this.b=e
this.c=f},
ay9:function ay9(d,e,f){this.a=d
this.b=e
this.c=f},
ay6:function ay6(d,e,f){this.a=d
this.b=e
this.c=f},
ay7:function ay7(d,e,f){this.a=d
this.b=e
this.c=f},
bxH(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iR(w,B.ae(w).i("iR<1>")).aw(0,new A.aHS(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHS:function aHS(d,e){this.a=d
this.b=e},
aBm(d,e){var w,v
if(e!=null){w=B.ae(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aBn(),w),w.i("au.E"))
return A.c4G(d,new A.a1V(v,x.cX))}else return d},
aBn:function aBn(){},
bYQ(d,e){var w=!0
if(d!==C.fy)if(!(d===C.as&&e===C.w))w=d===C.iw&&e===C.b_
if(w)return D.Ed
else{w=!0
if(d!==C.iv)if(!(d===C.iw&&e===C.w))w=d===C.as&&e===C.b_
if(w)return D.Ee
else return D.aar}},
NB:function NB(d,e){this.a=d
this.b=e},
a1L:function a1L(d,e){this.a=d
this.b=e},
zm:function zm(d,e){this.a=d
this.$ti=e},
amZ:function amZ(){},
c4G(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cH($.an().r)
for(w=B.b([],x.C),v=new B.Oo(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.S(B.fw('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.On(v,s)
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
if(o){q=new B.Kg(d.aSO(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.im(m)}p+=n
o=!o}}return l},
a1V:function a1V(d,e){this.a=d
this.b=0
this.$ti=e},
b23:function b23(){},
bxv(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bR5(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAb(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNO()*w),C.d.aP(d.gG0()*w),C.d.aP(d.gKc()*w))},
bF0(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.af(v,u,t,w?d.b.c.b:0)},
bxw(d){var w=d.a,v=w?A.aZv(d.b):0,u=w?A.aZv(d.c):0,t=w?A.aZv(d.d):0
return new B.af(v,u,t,w?A.aZv(d.e):0)},
bWb(d){var w
if(d.c===0){d.seV(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
byr(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seV(f.mR(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seV(null)}},
aZv(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kz(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k7(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k7(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c5Z(d,e,f){return C.d.aP(d+(e-d)*f)},
bAU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k7(m,x.i)
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
A.a7g.prototype={
q(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aP:C.m
r=r?C.n:C.a5
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.c3(t.x,C.n,s,18),C.aO],w))
v.push(B.az(new B.dM(t.c,!1,s),1))
v=B.aj(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.i(t.d,s,1,C.ad,s,B.bB(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.bx(r,B.a9(w,C.z,C.id,C.i),q,s,C.ai,s,s,3)}}
A.uV.prototype={
LD(d){return this.aSR(d)},
aSR(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.el("finance_summary",B.a5(["p_from",E.re(d.a),"p_to",E.re(d.b)],s,r),r),$async$LD)
case 3:q=f
if(q==null){u=D.aqe
w=1
break}if(x.f.b(q)){u=B.dd(q,s,r)
w=1
break}u=D.aqG
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LD,v)},
LC(d){return this.aSQ(d)},
aSQ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.el("finance_kpis",B.a5(["p_from",E.re(d.a),"p_to",E.re(d.b)],s,r),r),$async$LC)
case 3:q=f
if(x.f.b(q)){u=B.dd(q,s,r)
w=1
break}u=D.apV
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LC,v)},
pG(d){return this.aqF(d)},
aqF(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a5(["from",E.re(d.a),"to",E.re(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fC(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
Ly(d){return this.aSG(d)},
aSG(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Ly=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("finance-export-pdf",B.a5(["from",E.re(d.a),"to",E.re(d.b)],s,s)),$async$Ly)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aI(J.a3(r,"base64"))
w=1
break}throw B.e(B.dL("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Ly,v)}}
A.Ee.prototype={
FV(d){return this.ajI(d)},
ajI(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FV=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LD(d),$async$FV)
case 7:q=f
o=A.aFE(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FV,v)},
FR(d){return this.ajt(d)},
ajt(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FR=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LC(d),$async$FR)
case 7:q=f
o=A.bTG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FR,v)},
pG(d){return this.aqG(d)},
aqG(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a2(n)
p=r.Hv(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
Lx(d){return this.aSF(d)},
aSF(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lx=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ly(d),$async$Lx)
case 7:q=f
o=C.iS.cO(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lx,v)},
Hv(d){if(d instanceof B.yt)return d
if(d instanceof B.md){if(d.b==="42501")return new B.vQ(d.a)
return new B.tf(d.a)}if(d instanceof B.Np)return new B.tf("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B6("Unerwarteter Fehler: "+B.j(d))},
$iaFq:1}
A.qk.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vA.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.ww.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBT.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oa.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CM.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ob.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yw.prototype={
GR(d){return this.aqE(0)},
aqE(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GR=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dx)
s=t.r
r=s.aJ(0,$.xs(),x.P)
p.a=null
w=3
return B.k(B.ph(new A.aFl(p,t,r),x.H),$async$GR)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bwo()
s=s.e
s===$&&B.a()
s.cc(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GR,v)},
Lw(){return this.aSE()},
aSE(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lw=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dx)
s=t.r.aJ(0,$.xs(),x.P)
q.a=null
w=3
return B.k(B.ph(new A.aFk(q,t,s),x.H),$async$Lw)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)}}
A.yx.prototype={
du(d,e){var w=null,v=e.ao($.xs(),x.P),u=e.ao($.bwo(),x.aN)
return B.t5(B.dt(B.b([new B.fx("Finanzen","Dashboard",new A.agM(e.ao($.bwm(),x.b).gje(),new A.aFv(this,d,e),new A.aFw(this,d,e),new A.aFx(d),new A.aFy(d),new A.aFz(this,d,e,v),w),w),C.aA,new A.aon(v,w),C.c6,D.agn,C.c6,B.dc(u,new A.aFA(),new A.aFB(),new A.aFC(),!1,!0,!1,x.d,x.l)],x.p),w,C.cN,w,C.F,!1),C.n,new A.aFD(e))},
Jl(d,e){return this.aLa(d,e)},
aLa(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jl=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwm()
w=3
return B.k(e.aJ(0,s.ghR(),x.F).GR(0),$async$Jl)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bn(B.c6(null,null,null,null,null,C.t,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jl,v)},
Bi(d,e){return this.awD(d,e)},
awD(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bi=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bwm().ghR(),x.F).Lw(),$async$Bi)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bn(D.ayq)
w=1
break}t=B.oz(C.u,10)
w=4
return B.k($.bNh().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bi)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bi,v)},
Bj(d,e,f){return this.aIR(d,e,f)},
aIR(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bj=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j8(null,null,!0,null,new A.aFt(f,d),d,null,!0,!0,x.cJ),$async$Bj)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nN(e.aJ(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zy("finance_period",p,o,B.a5(["period_from",p.eg()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bj)
case 8:if(d.e!=null)d.P(x.q).f.bn(F.vd)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bj,v)}}
A.agM.prototype={
q(d){var w=this,v=null,u=A.am7(C.n,F.hV,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.am7(v,D.ach,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.am7(v,D.y2,v,s?v:w.d,"sevDesk synchronisieren"),q=A.am7(C.a9,C.jj,C.a9,s?v:w.e,"PDF-Export")
return B.aj(B.b([u,C.aO,t,C.aO,r,C.aO,q,C.aO,A.am7(C.ae,C.fM,C.ae,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.E,0,v,v)}}
A.am6.prototype={
q(d){var w,v=this,u=null,t=B.ay(12),s=B.ay(12),r=B.ay(12),q=v.w
if(q==null)q=C.a5
q=B.cr(q,1)
w=v.r
if(w==null)w=C.h
return B.wv(B.dC(!1,C.W,!0,t,B.es(!1,s,!0,B.aS(u,B.c3(v.c,w,u,20),C.q,u,u,new B.aK(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a8,0,u,u,u,u,u,C.bm),u,v.d,u,u)}}
A.aon.prototype={
du(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.bx(w,B.a9(B.b([D.a9v,C.D,B.aj(B.b([D.ad8,C.aC,B.az(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.v,B.ks(C.cl,B.b([new A.J0("Monat",new A.bi3(e),w,w),new A.J0("Jahr (YTD)",new A.bi4(e),w,w),new A.J0("Zeitraum w\xe4hlen \u2026",new A.bi5(this,d,e),D.abm,w)],t),C.dv,6,8)],t),C.z,C.f,C.i),w,w,C.G,w,w,3)},
IH(d,e){return this.aHK(d,e)},
aHK(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IH=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avM(new A.bi2(),d,B.bP(B.aZ(t)-5,1,1,0,0,0,0),new B.lL(s.a,s.b,x.bz),B.bP(B.aZ(t)+1,1,1,0,0,0,0),C.e3),$async$IH)
case 2:r=g
if(r!=null)e.aJ(0,$.xs().ghR(),x.V).ue(0,new E.lS(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IH,v)}}
A.J0.prototype={
q(d){var w=null,v=B.ay(9999),u=B.ay(9999),t=B.ay(9999),s=B.cr(C.a5,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.c3(p,C.h,w,14),C.aO],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dC(!1,C.W,!0,v,B.es(!1,u,!0,B.aS(w,B.aj(q,C.k,w,C.f,C.E,0,w,w),C.q,w,w,new B.aK(w,w,s,t,w,w,C.A),w,w,w,w,C.hL,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a8,0,w,w,w,w,w,C.bm)}}
A.Js.prototype={
q(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jo(new A.boI(this)),C.c6,D.a9z,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bx(s,B.aj(B.b([D.adz,C.au,B.az(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.p,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a8,s,C.G,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agK(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a9(w,C.k,C.f,C.i))}return B.a9(q,C.ab,C.f,C.i)}}
A.agK.prototype={
q(d){var w=this,v=null,u=w.e,t=u?C.aP:C.a8,s=B.cr(u?C.n:C.a5,1),r=B.ay(4),q=w.c
r=B.aS(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bB(C.h,14,C.o),v,v,v),C.q,v,v,new B.aK(t,v,s,r,v,v,C.A),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ad,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.az(B.a9(B.b([q,B.i(t,v,v,v,v,B.y(C.p,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dz().ap(w.f)
return B.bx(v,B.aj(B.b([r,C.au,t,B.i(q,v,v,v,v,B.y(u?C.ae:C.h,15,C.H),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.dU,v,v,3)}}
A.I7.prototype={
q(d){var w=null
return B.bx(C.a9,B.aj(B.b([D.ae6,C.au,B.az(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fJ,w,C.G,w,w,3)}}
A.a7h.prototype={
du(d,e){return B.dc(e.ao($.bPJ(),x.e),new A.aKv(),new A.aKw(),new A.aKx(),!1,!0,!1,x.X,x.l)}}
A.Ir.prototype={
q(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.avH,C.v,B.jo(new A.bf7(v,q,100-t.w.a,w,p)),C.v,new A.alr(u),C.aA,D.avG,C.v,new A.ahF(t,u),C.aA,D.avB,C.v,B.bz(u,!0,u,B.k3(u,B.bx(u,new A.Ua(t,220,u),u,u,C.G,u,u,3),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf8(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aA,D.avv,C.v,B.bz(u,!0,u,B.k3(u,new A.Up(t,200,!1,u),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf9(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aA,D.avz,C.v,new A.an8(t,u),C.aA,D.avw,C.v,new A.ajs(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aA,D.avD,C.v,new A.asU(t,u)],s))
return B.a9(r,C.ab,C.f,C.i)}}
A.alr.prototype={
q(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.p,11,C.l).d0(1.35),w,w,w)}}
A.amE.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.a9:C.ae
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfa(m,d):l
r=x.p
q=B.b([B.az(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.p,10,C.o).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cr(C.a9,0.8)
n=B.ay(4)
q.push(B.aS(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a9,9,C.o),l,l,l),C.q,l,l,new B.aK(l,l,o,n,l,l,C.A),l,l,l,l,C.nr,l,l,l))}q=B.b([B.aj(q,C.k,l,C.f,C.i,0,l,l),C.aY,B.a5w(C.d0,B.i(m.d,l,l,l,l,B.bB(w,22,C.o),l,l,l),C.iR)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ad,l,B.y(C.p,10,C.aE),l,l,l))
q.push(C.cG)
q.push(B.aj(B.b([new A.UZ("Vormonat",m.r,l),C.ci,new A.UZ("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.cG)
q.push(B.az(new A.YB(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.k3(l,B.bx(l,B.a9(q,C.z,C.f,C.i),l,l,C.cc,l,l,3),C.aa,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.UZ.prototype={
q(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ay(4)
return B.aS(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.p,9,C.o),r,r,r),C.q,r,r,new B.aK(C.a5,r,r,q,r,r,C.A),r,r,r,r,C.nr,r,r,r)}w=q>=0
v=w?C.ae:C.a9
u=v.es(0.12)
t=B.cr(v,0.7)
s=B.ay(4)
return B.aS(r,B.aj(B.b([B.c3(w?F.aax:D.aaw,v,r,10),C.Zs,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.E,0,r,r),C.q,r,r,new B.aK(u,r,t,s,r,r,C.A),r,r,r,r,C.nr,r,r,r)}}
A.YB.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ey(v,j[v]))
u=C.b.jJ(j,new A.bnN())
t=C.b.jJ(j,new A.bnO())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bnP(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5C(k,!1)
w=B.b([A.aKM(k,2,A.ay1(!1,C.n.es(0.16),0,k,!0,D.wa),C.n,0.35,k,D.E4,k,!0,!1,!0,!1,D.Fs,!1,10,D.YV,!0,C.lu,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Ov(A.by4(k,k,k,D.aml,l,D.BW,D.E0,D.E5,w,D.agr,k,m,k,n,D.Yf,D.amm,D.a9P),C.al,C.a2,k,k)}}
A.Ua.prototype={
q(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLj
w=C.b.fA(p,0,new A.b5O())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.aya(B.b([A.a1h(q,q,D.Bn,q,C.n,q,q,q,r.b,6),A.a1h(q,q,D.Bn,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bM(A.bDG(A.ay3(q,q,u,q,q,A.a5C(q,!1),q,new A.yz(!0,!0,q,new A.b5P(),A.a_O(),!1,q,A.avw(),A.a_O()),q,v,q,q,new A.uX(!0,new A.pi(16,q,new A.qa(!0,new A.b5Q(this),46,q),!0),D.ku,D.ku,new A.pi(16,q,new A.qa(!0,new A.b5R(p),26,q),!0)))),this.d,q)},
aKq(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Up.prototype={
q(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6K(),w),x.i)
C.b.K(o,new B.ab(u,new A.b6L(),w))
t=C.b.fA(o,0,new A.b6M())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.aya(B.b([A.a1h(q,q,q,q,C.n,q,q,q,v[s],14),A.a1h(q,q,q,q,C.ae,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bM(A.bDG(A.ay3(q,q,n,q,q,A.a5C(q,!1),q,D.E5,q,o,q,q,new A.uX(!0,D.ku,D.ku,D.ku,new A.pi(16,q,new A.qa(!0,new A.b6N(p),26,q),!0)))),this.d,q)
return this.e?r:B.bx(q,r,q,q,C.G,q,q,3)}}
A.an8.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aLi
w=new B.ab(l,new A.bfJ(),B.ae(l).i("ab<1,F>")).jJ(0,new A.bfK())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dz()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.iq(C.ak,C.f,C.i,C.k,m,C.b1,m,0,B.b([new B.jY(1,C.dB,B.a9(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,m,B.y(C.p,12,C.aE),m,m,m)],v),C.z,C.f,C.i),m),C.aC,B.i(p.ap(o),m,m,m,m,B.bB(C.h,16,C.o),m,m,m)],v),m),C.cG,new B.Dt(new B.d1(n,n,n,n),C.bD,B.ER(C.a5,8,C.d.bo(o/w,0,1),D.Bb),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.L(r)===B.L(q)&&B.a_R(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.K(u,o)}return B.bx(m,B.a9(u,C.k,C.f,C.i),m,m,C.G,m,m,3)}}
A.ajs.prototype={
q(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.az(new A.Ce("Aktive Kunden",""+s,u),1)
w=B.az(new A.Ce("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.bx(u,B.aj(B.b([s,w,B.az(new A.Ce("\xd8-Warenkorb",v.ap(t.d),u),1),B.az(new A.Ce("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.G,u,u,3)}}
A.Ce.prototype={
q(d){var w=null
return B.a9(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.p,10,C.o).fw(0.6),w,w,w),C.bh,B.i(this.d,w,w,w,w,B.bB(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.E)}}
A.asU.prototype={
q(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bq_(),B.ae(q).i("ab<1,F>")).jJ(0,new A.bq0()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.iq(C.ak,C.f,C.i,C.k,r,C.b1,r,0,B.b([new B.jY(1,C.dB,B.i(u.b,r,1,C.ad,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.p,12,C.H),r,r,r),B.i($.dz().ap(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aY,new B.Dt(new B.d1(s,s,s,s),C.bD,B.ER(C.a5,6,C.d.bo(t/p,0,1),D.Bb),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.L(u)===B.L(s)&&B.a_R(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.bx(r,B.a9(n,C.k,C.f,C.i),r,r,C.G,r,r,3)}}
A.wP.prototype={
q(d){var w=null
return B.bx(w,B.i(this.c,w,w,w,w,B.y(C.p,13,C.l),w,w,w),C.a8,w,C.G,w,w,3)}}
A.ahF.prototype={
du(d,e){return B.dc(e.ao($.bwn(),x.fM),new A.b4c(this,d,e),new A.b4d(),new A.b4e(),!1,!0,!1,x.h,x.l)}}
A.Be.prototype={
W(){return new A.TN()},
aXH(){return this.d.$0()}}
A.TN.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.f7(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pE[t].a
if(v)r=""
else{r=B.bi(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bN(new B.cV(r,C.bJ,C.aR),$.ah()))}q.e!==$&&B.b3()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c9(v,v.r,v.e,B.l(v).i("c9<2>"))
while(v.u()){w=v.d
w.S$=$.ah()
w.T$=0}this.al()},
rm(d){var w=this.e
w===$&&B.a()
w=C.c.b6(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.jv(B.b0(w,",","."))
return w==null?0:w},
a3W(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pE[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b0(s,".",",")
t.ku(0,t.a.y0(C.aR,C.bJ,s))}}this.J(new A.b40())},
aEm(){this.a3W(D.aqg)
this.c.P(x.q).f.bn(D.ayK)},
HX(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HX=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pE[e].a)
q=a2
t=4
w=7
return B.k($.aFe.cl().ze(B.b(["csv","txt"],x.s),C.xP,!0),$async$HX)
case 7:p=a5
a2=p
o=a2==null?null:J.Kd(a2.a).c
if(o==null){w=1
break}n=C.aG.ad8(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C0.cO(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.awo(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.b6(J.a3(k,0)).toLowerCase()
i=J.CI(q,j)?j:D.aqH.h(0,j)
if(i==null)continue
d=C.c.b6(C.b.n8(J.bQw(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.jv(h)
if(g!=null)J.fq(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bn(D.ayn)
w=1
break}r.a3W(m)
r.c.P(x.q).f.bn(B.c6(null,null,null,null,null,C.t,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HX,v)},
I7(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I7=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b41(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_9("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eg(),0,10),"p_cash_and_bank",q.rm("cash_and_bank"),"p_receivables",q.rm("receivables"),"p_inventory_value",q.rm("inventory_value"),"p_other_current_assets",q.rm("other_current_assets"),"p_fixed_assets",q.rm("fixed_assets"),"p_current_liabilities",q.rm("current_liabilities"),"p_long_term_liabilities",q.rm("long_term_liabilities"),"p_equity",q.rm("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I7)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXH()
o=q.c
o.toString
B.bb(o,!1).eS()
q.c.P(x.q).f.bn(D.ayr)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bn(B.c6(null,null,null,null,null,C.t,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b42(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I7,v)},
q(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bB(C.h,18,C.o),r,r,r),p=s.f?r:new A.b44(s,d),o=s.d
o===$&&B.a()
p=B.h5(D.ada,B.i("Stichtag: "+C.c.a0(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.az(B.h5(D.aeg,D.aEu,o?r:s.gaDo(),r),1)
v=x.p
w=B.b([p,C.D,B.aj(B.b([w,C.aC,B.az(B.h5(D.ae4,D.aEj,o?r:s.gaEl(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pE[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f3(r,C.aV,!1,r,!0,C.t,r,B.fh(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.aa,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.ix,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.G,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.as,r,C.a4,r,r,r,r),C.D],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.p,11,C.l),r,r,r))
p=B.bM(B.fc(B.a9(w,C.ab,C.f,C.E),r,C.F),r,380)
o=s.f
w=B.dF(C.cY,r,r,o?r:new A.b45(d),r,r)
o=o?r:s.gaE5()
t=B.dN(C.n,C.h,r,r,r,r,r)
return B.lF(B.b([w,B.dZ(s.f?F.Zv:C.ey,o,t)],v),C.m,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a_R(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.eC(B.L(this))^B.bLE(this.gbD()))>>>0},
j(d){B.bEX()
return B.L(this).j(0)}}
A.L_.prototype={
W(){return new A.TO(B.A(x.S,x.I),new A.ayd(B.A(x.x,x.T)),null,null)}}
A.TO.prototype={
q(d){var w,v=this,u=v.a1U(),t=v.CW
t.toString
t=v.a1V(t.au(0,v.gfs().gp(0)))
w=v.a1V(u)
v.a.toString
return new A.KV(new A.a1g(t,w,null),u,null)},
a1V(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.aya(s.c,s.d,!1,r,s.a))}return d.aPH(w)},
a1U(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UF(t.ch)
if(r)s=w.a
r=t.y
t=t.aQC(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPI(A.bwO(!1,!0,!0,v.d,v.c,u.gasa(),v.f,v.e))}return t},
asb(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafy()||e==null||e.a==null){w=v.cy
v.J(w.gaP7(w))
return}v.J(new A.b4h(v,e))},
ly(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1U(),new A.b4i(w)))}}
A.nT.prototype={
Vg(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ay3(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQC(d,e){return this.Vg(null,null,d,e)},
aPI(d){return this.Vg(null,d,null,null)},
aPH(d){return this.Vg(d,null,null,null)},
Xc(d,e,f){var w,v,u,t=A.kz(d.ch,e.ch,f,A.c3W(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bF3(d.d,e.d,f),q=A.bGY(d.e,e.e,f),p=A.bF1(d.c,e.c,f),o=e.a
o=A.a5C(B.a1y(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.ay3(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bEZ(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ay2.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fE.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ayb(),B.ae(v).i("ab<1,F>")).jJ(0,new A.ayc())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ik.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mJ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1d.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1i.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aee.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1j.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D3.prototype={
gbD(){return[this.a,this.b,C.bF,C.w,null]}}
A.L0.prototype={}
A.a1k.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xG.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.ahB.prototype={}
A.ahI.prototype={}
A.ahJ.prototype={}
A.ahL.prototype={}
A.ahM.prototype={}
A.ahN.prototype={}
A.ahO.prototype={}
A.ahP.prototype={}
A.ahQ.prototype={}
A.ayd.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uz(0,0,!1)
v=new A.zm(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uz(t,u,!0)}w=null
try{w=C.b.oW(d,new A.aye())}catch(s){return new A.uz(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uz(q,r,!1)
u.m(0,v,j)
return j}}
A.uz.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ahK.prototype={}
A.ayf.prototype={
ic(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_Z(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.aca(t,A.bwN(w,t.a),u)
l.y=u
l.aRY(e,u,f)
l.alI(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aS6(d,e,m,t,r,s,n,o,f)}}},
aca(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dL("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iR(p,B.ae(p).i("iR<1>")).aw(0,new A.ayg(t,q,r,s))
w.push(new A.a6i(q))}return w},
aRY(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
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
a4=B.Qe(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qe(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seV(null)
a6=b3.f.em()
u.drawRRect(B.lz(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dJ(b1),$.nK()[1],!0)
a6=b3.f.em()
u.drawRRect(B.lz(a4),a6)
a6.delete()
u.restore()
b3.aS4(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gek(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cH($.an().r)
n=new B.hi(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.im(k)
v.fW(A.aBm(b2,o.r),b3.r)}}}},
aS6(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AW(a5,a5,a5,a5,B.d3(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lB().ZZ(a8,a7.b),a7.a),C.bF,C.w,a5,b6.c,C.bz)
w.afS(b1.f)
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
n=u+o.gew()
m=v+4+(o.gd_(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aGU)j=v===D.a_9&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a__(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.G0(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lB().Kn(new B.G(v,t),d).b
s=$.lB()
q=w.b
p=q.c
q=q.a.c
a0=s.Kn(new B.G(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gai7()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VS(d,new A.ayh(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aS4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gek(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a1
s=w?new B.aW(i.x,i.y):C.a1
r=w?C.a1:new B.aW(i.e,i.f)
w=w?C.a1:new B.aW(i.r,i.w)
q=B.Qe(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a1:new B.aW(i.z,i.Q)
p=v?C.a1:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a1
q=B.Qe(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a1)}else q=B.byL(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Wy(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.aca(b2,A.bwN(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1k(d,q,a0,o,a2,a1,new A.ey(d.a,v),new B.r(n,t))}}return null}}
A.a6i.prototype={}
A.a1g.prototype={
bl(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcL(),t=new A.ayf()
t.a1b()
$.an()
w=B.aX()
w.b=C.bf
t.f=w
w=B.aX()
w.b=C.aX
t.r=w
w=B.aX()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.aX()
w.b=C.aX
w.r=C.I.gp(0)
w.c=1
t.x=w
t=new A.abo(this.d,v,u,t,d,C.bp,new B.bo(),B.aJ(x.v))
t.bi()
t.YU(v.cy)
t.af_()
return t},
bw(d,e){e.sip(0,this.d)
e.sYF(this.e)
e.scL(B.bv(d,null,x.w).w.gcL())
e.B=d
e.bd()}}
A.abo.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYF(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a0J(d.cy)
w.bd()},
scL(d){if(this.cW.k(0,d))return
this.cW=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a1L(t,v),new A.vM(u.aC,u.i7,u.cW,x.Q))
s.restore()},
ZT(d){var w=this,v=w.gC(0)
return new A.L0(w.fX.Wy(d,v,new A.vM(w.aC,w.i7,w.cW,x.Q)))}}
A.a16.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D2.prototype={
L(){return"AxisSide."+this.b}}
A.ty.prototype={}
A.qa.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acN.prototype={
gbD(){return[!1,0,0,0]}}
A.pi.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uX.prototype={
gbD(){var w=this
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
A.yz.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pE.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeg.prototype={
gbD(){return[this.a,this.b]}}
A.Qi.prototype={
gbD(){return[this.a,this.b]}}
A.n1.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nq.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kR.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.li.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6t.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeD.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MU.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uW.prototype={}
A.N4.prototype={
adA(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iU(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahw.prototype={}
A.ahA.prototype={}
A.akO.prototype={}
A.al6.prototype={}
A.al7.prototype={}
A.al9.prototype={}
A.ala.prototype={}
A.alX.prototype={}
A.alW.prototype={}
A.alY.prototype={}
A.apw.prototype={}
A.arj.prototype={}
A.ark.prototype={}
A.asY.prototype={}
A.atB.prototype={}
A.atA.prototype={}
A.atC.prototype={}
A.axT.prototype={
MB(d,e,f,g,h,i){return new B.ie(this.aVM(d,e,f,g,h,i),x.g4)},
aVL(d,e,f,g){return this.MB(d,e,f,!0,g,!0)},
aVM(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MB(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lB().ajf(s,u,v,w)
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
A.KU.prototype={
a1b(){var w,v=this
$.an()
w=B.aX()
w.b=C.aX
v.a=w
w=B.aX()
w.b=C.bf
v.b=w
w=B.aX()
w.b=C.bf
v.e=w
w=B.aX()
w.b=C.aX
v.c=w
v.d=B.aX()},
ic(d,e,f){var w=this
w.a0_(d,e,f)
w.aRU(e,f)
w.aS3(e,f)
w.aS2(e,f)},
aS2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lB().OF(w.a,a1.r-a1.f)
u=$.bw_().MB(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l5(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seV(j.mR(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seV(a0)}k=l.c
p.c=k
if(k===0){p.seV(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dy(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lB().OF(w.b,a1.y-a1.x)
u=$.bw_().MB(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.l5(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seV(k.mR(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seV(a0)}p=f.c
q.c=p
if(p===0){q.seV(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dy(n,m,d.a,f.d)}},
aRU(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.I(0,0,0+w.a,0+w.b),this.b)},
aS3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.l5(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seV(p.mR(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seV(null)}o=n.e.em()
w.drawRect(B.dJ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.l5(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seV(q.mR(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seV(null)}o=n.e.em()
j.drawRect(B.dJ(s),o)
o.delete()}},
aS1(d,e,f){var w,v
this.a0_(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adB(d,e,f,w)
if(v.b.length!==0)this.aS8(d,e,f,w)},
adB(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l5(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seV(j.mR(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seV(null)}k=p.c
n.c=k
if(k===0){n.seV(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dy(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=C.d.am(o,n.gbU(n).eG(0,2))
J.b_(r.save())
r.translate(h,g)
n=n.gNy().b
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
s.adC(0,n,new B.r(h,o),k)}}},
aS8(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l5(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seV(j.mR(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seV(null)}k=p.c
n.c=k
if(k===0){n.seV(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dy(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=n.gbU(n).eG(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.b_(r.save())
r.translate(f,e)
n=n.gNy().b
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
s.adC(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a__(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KV.prototype={
gal_(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal0(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal1(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakY(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alm(d){var w,v=this,u=null,t=v.d,s=A.bxw(t.d),r=t.a
r=r.a&&A.bR5(r.b)?r.b:u
w=B.b([B.aS(u,v.c,C.q,u,u,new B.aK(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.axV(w)
if(v.gal_())C.b.hz(w,s.$1(!0),new A.AG(D.Bi,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal1())C.b.hz(w,s.$1(!0),new A.AG(D.mF,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal0())C.b.hz(w,s.$1(!0),new A.AG(D.Bj,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakY())C.b.hz(w,s.$1(!0),new A.AG(D.dN,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
q(d){return B.jo(new A.axU(this))}}
A.RJ.prototype={
W(){return new A.Yq(new B.bk(null,x.eF))}}
A.Yq.prototype={
axD(){switch(this.a.c.a){case 0:return C.ed
case 1:return C.fb
case 2:return C.d0
case 3:return C.dL}},
ay8(){switch(this.a.c.a){case 0:return new B.af(0,0,8,0)
case 1:return new B.af(0,0,0,8)
case 2:return new B.af(8,0,0,0)
case 3:return new B.af(0,8,0,0)}},
axF(d){this.a.toString
return},
aq(){this.aI()
$.cB.x1$.push(this.ga4p())},
bc(d){this.bE(d)
$.cB.x1$.push(this.ga4p())},
q(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay8()
return B.Hg(B.b1B(0,B.aS(v.axD(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.acO.prototype={
bl(d){return A.bQX(this.f,this.r,this.e)},
bw(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a17.prototype={
hn(d){if(!(d.b instanceof B.ht))d.b=new B.ht(null,null,C.u)},
i_(d){if(this.B===C.ak)return this.y9(d)
return this.adc(d)},
aKC(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a93(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a92(d,B.hG())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a92(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hk(u,null)
break
case 1:q=B.hk(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a93(p)
t=Math.max(t,o.aKC(p))
m=r.aG$}return new A.bfg(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a92(o,B.mD()),m=n.a,l=n.b
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
q=s.b-p.a93(r==null?B.S(B.Y("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c7(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.ya(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v2(d,e)},
l(){this.a4.sbh(0,null)
this.aoi()}}
A.bfg.prototype={}
A.axW.prototype={}
A.jS.prototype={
gbD(){return[this.a,this.b]}}
A.nS.prototype={}
A.ahx.prototype={}
A.ahy.prototype={
aQ(d){var w,v,u
this.fq(d)
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
A.ahz.prototype={}
A.TL.prototype={
l(){var w,v,u
for(w=this.W5$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AG.prototype={
goB(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.d0
case 1:return C.dL
case 2:return C.ed
case 3:return C.fb}},
gb_m(){var w=this.d,v=A.bxw(w.d),u=A.bF0(w.a)
switch(this.c.a){case 2:case 0:return new B.af(0,v.b,0,v.d).af(0,new B.af(0,u.b,0,u.d))
case 1:case 3:return new B.af(v.a,0,v.c,0).af(0,new B.af(u.a,0,u.c,0))}},
gahW(){var w=this.d,v=A.bF0(w.a),u=A.bxw(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd4(0)+(v.gd_(0)+v.gd4(0))
case 1:case 3:return u.gew()+v.gew()}},
aWu(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goB().c.d
if(o==null)o=$.lB().OF(d,f-e)
w=p.c
v=w!==D.mF
if((!v||w===D.dN)&&p.d instanceof A.nT){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bwN(u,d)
w=new B.iR(t,B.ae(t).i("iR<1>"))
s=w.giG(w).f2(0,new A.aZy(u),x.W).fZ(0)}else{r=$.bw_()
w=!v||w===D.dN
v=p.d
q=r.aVL(w?v.w:v.z,o,f,e)
v=B.op(q,new A.aZz(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ae(s).i("ab<1,nS>")
w=B.Q(new B.ab(s,new A.aZA(p,e,f,o,g,d),w),w.i("au.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goB()
w=j.goB()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aS(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mF
u=!v
t=!u||w===D.dN
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dN?C.F:C.ak
q=B.b([],x.p)
if(w===D.Bi||v)j.goB()
if(j.goB().c.a){v=!u||w===D.dN?r:j.goB().c.c
p=!u||w===D.dN?j.goB().c.c:r
o=j.gb_m()
n=!u||w===D.dN?C.ak:C.F
j.gahW()
m=j.gahW()
l=!u||w===D.dN
k=j.d
l=l?k.f:k.x
u=!u||w===D.dN?k.r:k.y
q.push(B.aS(i,A.bYe(new A.axW(),n,j.aWu(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bj||w===D.dN)j.goB()
return new B.e5(t,i,i,B.bTK(q,C.k,s,i,C.f,C.E,0,i,i,C.b1),i)}}
A.a1m.prototype={
gbD(){return[this.a,this.b]}}
A.a5B.prototype={
gbD(){return[this.a,this.b]}}
A.Nb.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5D.prototype={
gabv(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayq.prototype={}
A.aEL.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahT.prototype={}
A.al3.prototype={}
A.al4.prototype={}
A.alb.prototype={}
A.L3.prototype={
ic(d,e,f){}}
A.vM.prototype={}
A.hs.prototype={
gdL(){return null},
gafy(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.Na
if(w)return!0
return!(v instanceof A.N7)&&!(v instanceof A.N6)&&!(v instanceof A.N8)&&!(v instanceof A.N5)&&!w&&!(v instanceof A.N9)}}
A.a5H.prototype={
gdL(){return this.a.b}}
A.a5I.prototype={
gdL(){return this.a.b}}
A.a5J.prototype={
gdL(){return this.a.b}}
A.N6.prototype={}
A.N7.prototype={}
A.a5M.prototype={
gdL(){return this.a.b}}
A.N9.prototype={}
A.Na.prototype={
gdL(){return this.a.b}}
A.a5G.prototype={
gdL(){return this.a.b}}
A.a5F.prototype={
gdL(){return this.a.b}}
A.N5.prototype={
gdL(){return this.a.b}}
A.a5K.prototype={
gdL(){return this.a.gdL()}}
A.a5L.prototype={
gdL(){return this.a.gdL()}}
A.N8.prototype={
gdL(){return this.a.gdL()}}
A.Gc.prototype={
YU(d){this.V=d.b
this.U=d.c
this.a4=d.d},
af_(){var w=this,v=null,u=w.ai=B.bys(v,v)
u.ay=new A.aUQ(w)
u.ch=new A.aUR(w)
u.CW=new A.aUS(w)
u.cy=new A.aUT(w)
u.cx=new A.aUU(w)
u=w.aE=B.H0(v,-1,v)
u.B=new A.aUV(w)
u.Y=new A.aUW(w)
u.V=new A.aUX(w)
u=w.bC=B.a7B(v,w.a4,v)
u.p3=new A.aUY(w)
u.p4=new A.aUZ(w)
u.RG=new A.aV_(w)},
cz(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kL(d){return!0},
n0(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.rJ(d)
w=v.aE
w===$&&B.a()
w.rJ(d)
w=v.ai
w===$&&B.a()
w.rJ(d)}else if(x.gJ.b(d))v.l9(new A.a5L(d))},
gN4(d){return new A.aV0(this)},
gN6(d){return new A.aV1(this)},
l9(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZT(w):null
u.V.$2(d,v)
u.Y=C.bp},
gKT(d){return this.Y},
gFu(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fq(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijq:1}
A.Ov.prototype={
W(){return new A.Wb(B.b([],x.r),B.A(x.S,x.I),new A.aKO(B.A(x.y,x.dj)),null,null)}}
A.Wb.prototype={
q(d){var w,v=this,u=v.a4r(),t=v.CW
t.toString
t=v.ab4(t.au(0,v.gfs().gp(0)))
w=v.ab4(u)
v.a.toString
return new A.KV(new A.a7t(t,w,null),u,null)},
ab4(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ae(w).i("ab<1,ed>")
w=B.Q(new B.ab(w,new A.bfl(this,d),v),v.i("au.E"))
return d.aQz(w,this.cy)},
a4r(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UF(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQO(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQd(new A.EQ(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayX(),t.c,t.d))}return r},
ayY(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafy())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfj(v))
return}v.J(new A.bfk(v,e))},
ly(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4r(),new A.bfm(w)))}}
A.pR.prototype={
Xc(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5C(B.a1y(d.a.b,j.b,f),j.a)
w=A.bEZ(d.at,e.at,f)
v=A.bF1(d.c,e.c,f)
u=A.bF3(d.d,e.d,f)
t=A.bGY(d.e,e.e,f)
s=A.kz(d.ch,e.ch,f,A.c60(),x.cz)
s.toString
r=A.kz(d.CW,e.CW,f,A.c6_(),x.J)
r.toString
u=A.by4(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vh(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.by4(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQO(d,e,f,g){return this.Vh(null,null,d,e,f,g,null)},
aQd(d){var w=null
return this.Vh(w,d,w,w,w,w,w)},
aQz(d,e){var w=null
return this.Vh(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ed.prototype={
aqX(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oW(n.a,new A.aKN())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fK))continue
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
acS(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKM(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQk(d){return this.acS(d,null)},
aQm(d){return this.acS(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ow.prototype={
gbD(){return[this.a]}}
A.a1f.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mK.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KZ.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yy.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKy.prototype={
L(){return"LabelDirection."+this.b}}
A.a5E.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EQ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7u.prototype={
gbD(){return[4,C.hN,16,D.xM,0,120,A.c62(),!1,!1,!1,0,C.K,A.c61()]}}
A.n4.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qi.prototype={}
A.rz.prototype={
gbD(){return[this.a,this.b,C.bF,C.w,null]}}
A.tz.prototype={
gbD(){return[this.a,this.b]}}
A.GE.prototype={
gbD(){return[this.a]}}
A.Ox.prototype={}
A.zi.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xc(v,w,d)}}
A.ahG.prototype={}
A.ahH.prototype={}
A.ahU.prototype={}
A.al5.prototype={}
A.al8.prototype={}
A.amL.prototype={}
A.amM.prototype={}
A.amN.prototype={}
A.amP.prototype={}
A.amQ.prototype={}
A.amR.prototype={}
A.amS.prototype={}
A.ari.prototype={}
A.asX.prototype={}
A.aKO.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ym
u=new A.zm(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zj(s,r,q,t,!0)}w=null
try{w=C.b.oW(d,new A.aKP())}catch(p){return D.ym}v=null
try{v=C.b.oW(w.a,new A.aKQ())}catch(p){return D.ym}o=v.a
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
if(f<m)m=f}e=new A.zj(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zj.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amO.prototype={}
A.aKR.prototype={
ic(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabv(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iP(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aPe(new B.I(0,0,u,v))}d.a_Z(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aS_(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRW(a3,q,a4)
d.aS0(a3,q,a4)
d.alH(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gt(o)!==p.length)throw B.e(B.dL("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vv(q,i,j,k))}}d.aS7(a3,s,a4)
if(w.gabv(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aS5(a2,a3,v,f,new A.GE(g),a4)}},
aRW(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxv(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Zs(o,e,u,f)
s=p.aj7(o,e,t,u,f)
r=p.Zu(o,e,t,u,f,!0)
q=p.aj6(o,e,t,u,f)
p.aRZ(d,s,p.Zr(o,e,t,u,f,!0),f,e)
p.aRT(d,q,r,f,e)
p.aRX(d,t,e)
p.aRV(d,t,e,f)}},
aS_(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bxv(a6.a),a9=A.bxv(a7.a)
if(a8.length!==a9.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ae(m).i("cI<1>")
k=B.Q(new B.cI(m,l),l.i("au.E"))
j=a3.Zs(a4,a6,n,b3)
i=a3.Zt(a4,a7.aQm(k),k,b3,j)
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
a1.seV(u.mR(0,new B.I(m,l,d,a0)))}else{a1.r=(q?C.I:v).gp(0)
a1.seV(null)}$.an()
a2=new B.mN(C.dy,C.bf,C.e7,C.ew,C.dV).em()
m=B.dJ(new B.I(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.S(B.vs(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aS0(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zy(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adA(s,q,new B.r(p,o))}}},
aS7(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKU())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Zy(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.ry(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lx(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lx(q.$2(m,k))))
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
b0=B.l5(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seV(a6.mR(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seV(null)}a4=a9.c
f.c=a4
if(a4===0){f.seV(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dy(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.ry(d.a))
f.adA(t,j,new B.r(h,g))}}},
Zt(d,e,f,g,h){var w=this.aj8(d,e,f,g,h)
return w},
Zs(d,e,f,g){return this.Zt(d,e,f,g,null)},
aj8(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cH($.an().r):a5,f=J.Z(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.fa(d,a0))
if(e===1)g.aA(new B.cs(d,a0))}else g.aA(new B.cs(d,a0))
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
s=new B.M_(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.im(r)}return g},
Zu(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.by2(f)
v=J.Z(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pq())
return w},
aj7(d,e,f,g,h){return this.Zu(d,e,f,g,h,!1)},
Zr(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.by2(f)
v=J.Z(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pq())
return w},
aj6(d,e,f,g,h){return this.Zr(d,e,f,g,h,!1)},
aRZ(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.byr(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.fW(e,r.r)},
aRT(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.byr(s,q.b,q.c,new B.I(v,0,u,t))
d.a.fW(e,r.r)},
aRX(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Oo(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.it:C.e7
u.e=C.ew
u.r=v.gp(0)
u.seV(null)
u.c=f.x
u.r=v.gp(0)
$.lB()
u.z=new B.zr(C.at,w.c*0.57735+0.5)
d.a.fW(B.by3(A.aBm(e,f.cy),w.b),this.f)},
aRV(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.it:C.e7
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
A.byr(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bWb(t)
d.a.fW(A.aBm(e,f.cy),s.f)},
aS5(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bL9(b1),b3=J.Z(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dL("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lB().ZZ(b4,u.b)
s=u.a
r=w.k(0,C.iX)?new B.ku(1):w
q=new B.tw(new B.hB(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.bF,C.w,r,a8,a8,a8,a8,C.bz,a8)
q.afS(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hN.gew()
k=o+(w-1)*4+(C.hN.gd_(0)+C.hN.gd4(0))
j=t-k-16
i=a7.a__(b3,l,D.xM,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.G0(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bL8(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lB().Kn(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lB().Kn(new B.G(t,w),0)
if(!C.K.k(0,C.K)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VS(0,new A.aKS(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bYQ(q.r,q.w)
A:{if(D.Ed===a5){a6=a3
break A}if(D.Ee===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VS(0,new A.aKT(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zy(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Wy(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajz(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKV())
return t.length===0?null:t},
ajz(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qi(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vv.prototype={}
A.a7t.prototype={
bl(d){var w,v=this.e,u=B.bv(d,null,x.w).w.gcL(),t=new A.aKR()
t.a1b()
$.an()
w=B.aX()
w.b=C.aX
t.f=w
w=B.aX()
w.b=C.bf
t.r=w
w=B.aX()
w.b=C.aX
t.w=w
w=B.aX()
w.b=C.bf
w.r=C.I.gp(0)
w.a=D.a0k
t.x=w
w=B.aX()
w.b=C.aX
w.r=C.C.gp(0)
t.y=w
w=B.aX()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.aX()
w.b=C.aX
w.r=C.I.gp(0)
w.c=1
t.Q=w
t=new A.abB(this.d,v,u,t,d,C.bp,new B.bo(),B.aJ(x.v))
t.bi()
t.YU(v.cx)
t.af_()
return t},
bw(d,e){e.sip(0,this.d)
e.sYF(this.e)
e.scL(B.bv(d,null,x.w).w.gcL())
e.B=d
e.bd()}}
A.abB.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bd()},
sYF(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a0J(d.cx)
w.bd()},
scL(d){if(this.cW.k(0,d))return
this.cW=d
this.bd()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ic(w,new A.a1L(t,v),new A.vM(u.aC,u.i7,u.cW,x.o))
s.restore()},
ZT(d){var w=this,v=w.gC(0)
return new A.Ox(w.fX.Wy(d,v,new A.vM(w.aC,w.i7,w.cW,x.o)))}}
A.NB.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1L.prototype={
aPe(d){this.a.a.clipRect(B.dJ(d),$.nK()[1],!0)
return null},
adI(d,e){d.aM(this.a,e)},
VS(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lB()
s.YD(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dy(d,e,f,g){var w=B.cH($.an().r)
w.aA(new B.fa(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fW(A.aBm(w,g),f)}}
A.zm.prototype={
gbD(){return[this.a]}}
A.amZ.prototype={}
A.a1V.prototype={}
A.b23.prototype={
Kn(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aX3(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d1(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aX4(d,e){var w,v
if(d==null)return D.a0v
w=d.b
v=e/2
return d.aQp(w>v?v:w)},
OF(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_6(w)},
b_6(d){if(d<1)return this.aJb(d)
return this.a87(d)},
aJb(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a87(d*q)/q},
a87(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajn(d){if(d>=1)return 1
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
ZZ(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j2
w=e.a?u.w.c5(e):e
v=B.b5(d,C.vH)
v=v==null?null:v.ay
return v===!0?w.c5(C.mm):w},
ajf(d,e,f,g){var w=C.d.ae(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qk)","D(ey)","~(v,fE)","F(ed,v)","R<~>()","F(F,qk)","bL(F,ty)","pE(F)","v(qi,qi)","Ir(oa)","I7(B,bI)","Js(ob)","vA(@)","ww(@)","ed(F)","CM(@)","ai(F,ty)","uV(dD<uV>)","Ee(dD<aFq>)","F(vA)","F(ww)","wP(B,bI)","Be(z)","~()","qk(@)","~(hs,L0?)","xG(@)","F(ik)","D(fE)","~(v,ik)","~(@)","jS(nS)","c(nS)","jS(bH<v,F>)","jS(F)","nS(jS)","~(hs,Ox?)","ed(ed)","lS(wl<lS>)","zi(@)","R<ob>(ce<ob>)","tz(v)","uW(ey,F,ed,v)","rz(n4)","D(ed)","v(vv,vv)","F(fE)","R<oa>(ce<oa>)","v(v,v,F)","fE(fE,fE,F)","ik(ik,ik,F)","mJ(mJ,mJ,F)","D3?(fE,v,ik,v)","E(fE)","c(F,ty)","ey(ey,ey,F)","D(F)","n1(n1,n1,F)","nq(nq,nq,F)","kR(kR,kR,F)","li(li,li,F)","f(kR)","f(li)","ed(ed,ed,F)","mK(mK,mK,F)","uW(ey,F,ed,v{size:F?})","D(ey,ed)","F(r,r)","u<tz>(ed,u<v>)","y9(z)","u<rz>(u<n4>)","E(n4)","yw(eE<B?>)"])
A.aFm.prototype={
$1(d){var w=B.dd(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qk(J.am(v==null?"":v),A.p5(w.h(0,"revenue_net")),A.p5(w.h(0,"expense_net")),A.p5(w.h(0,"result_net")))},
$S:z+24}
A.aFn.prototype={
$1(d){var w,v,u,t=B.dd(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.p5(t.h(0,"gross"))
u=B.bi(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vA(s,r,w,v,u,A.p5(t.h(0,"avg_basket")))},
$S:z+12}
A.aFo.prototype={
$1(d){var w,v=B.dd(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bi(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.ww(u,t,w,A.p5(v.h(0,"gross")))},
$S:z+13}
A.aFF.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CM(v,u,J.am(t==null?"expense":t),A.ud(w.h(d,"net")),A.ud(w.h(d,"tax")),A.ud(w.h(d,"gross")))},
$S:z+15}
A.btH.prototype={
$1(d){return new A.uV(d.ao($.c0(),x.A))},
$S:z+17}
A.btI.prototype={
$1(d){return new A.Ee(d.ao($.bPK(),x.D))},
$S:z+18}
A.bvz.prototype={
$1(d){return E.aFp()},
$S:z+38}
A.btJ.prototype={
$1(d){var w=d.ao($.xs(),x.P)
return d.ao($.awa(),x.a).FV(w)},
$S:z+40}
A.btG.prototype={
$1(d){var w=d.ao($.xs(),x.P)
return d.ao($.awa(),x.a).FR(w)},
$S:z+47}
A.btF.prototype={
$1(d){return this.aiZ(d)},
aiZ(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.c0(),x.A).hm("finance_balance_kpis",t),$async$$1)
case 3:s=r.dd(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:331}
A.aFl.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.awa(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFk.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.awa(),x.a).Lx(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFD.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwo()
if(s.e==null)B.S(B.Y(y.b))
s.gck().cc(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFv.prototype={
$0(){return this.a.Jl(this.b,this.c)},
$S:0}
A.aFw.prototype={
$0(){return this.a.Bi(this.b,this.c)},
$S:0}
A.aFx.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dV(B.dP(new A.aFu(),null,w),w)},
$S:0}
A.aFu.prototype={
$1(d){return F.Dd},
$S:z+69}
A.aFy.prototype={
$0(){return B.og(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFz.prototype={
$0(){var w=this
return w.a.Bj(w.b,w.c,w.d)},
$S:0}
A.aFC.prototype={
$0(){return D.asJ},
$S:98}
A.aFB.prototype={
$2(d,e){return new A.I7(B.j(d),null)},
$S:z+10}
A.aFA.prototype={
$1(d){return new A.Js(d,null)},
$S:z+11}
A.aFt.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lF(B.b([B.dF(C.cY,w,w,new A.aFr(u),w,w),B.dZ(F.vj,new A.aFs(u),B.dN(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vk)},
$S:53}
A.aFr.prototype={
$0(){B.bb(this.a,!1).di(!1)
return null},
$S:0}
A.aFs.prototype={
$0(){B.bb(this.a,!1).di(!0)
return null},
$S:0}
A.bi3.prototype={
$0(){var w=this.a.aJ(0,$.xs().ghR(),x.V),v=E.aFp()
w.ue(0,v)
return v},
$S:0}
A.bi4.prototype={
$0(){var w=this.a.aJ(0,$.xs().ghR(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lS(B.bP(B.aZ(v),1,1,0,0,0,0),v)
w.ue(0,u)
return u},
$S:0}
A.bi5.prototype={
$0(){return this.a.IH(this.b,this.c)},
$S:0}
A.bi2.prototype={
$2(d,e){return new B.oM(B.W(d).aPL(B.W(d).ax.aQE(C.h,C.n)),e,null)},
$S:1019}
A.boI.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.Og(!1,C.lf,"Umsatz 7 %",t.ap(u.a),w),r=A.Og(!1,C.lf,"Umsatz 19 %",t.ap(u.b),w),q=A.Og(!0,D.abl,"Umsatz netto",t.ap(u.c),w),p=A.Og(!1,D.abk,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aHT(1.7,B.b([s,r,q,p,A.Og(!0,C.nS,"Ergebnis",n,o<0?C.a9:C.ae),A.Og(!1,C.fM,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.ig,!0)},
$S:124}
A.aKx.prototype={
$0(){return D.asG},
$S:98}
A.aKw.prototype={
$2(d,e){var w=null
return B.bx(C.a9,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fJ,w,C.G,w,w,3)},
$S:317}
A.aKv.prototype={
$1(d){return new A.Ir(d,null)},
$S:z+9}
A.bf7.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ae(g).i("ab<1,F>"),e=f.i("au.E"),d=B.Q(new B.ab(g,new A.beX(),f),e)
i=A.jI(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.ab(g,new A.beY(),f),e)
d=A.jI(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.ab(g,new A.beZ(),f),e)
k=A.jI(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.bf_(),f),e)
w=A.jI(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.bf0(),f),e)
v=A.jI(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.bf1(),f),e)
u=A.jI(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.bf2(),f),e)
t=A.jI(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.ab(g,new A.bf3(),f),e)
h=A.jI(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.ab(g,new A.bf4(m),f),e)
m=A.jI(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.ab(g,new A.bf5(l),f),e)
l=A.jI(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.bf6(j),f),e)
return E.aHT(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jI(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ig,!0)},
$S:124}
A.beX.prototype={
$1(d){return d.b},
$S:z+0}
A.beY.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beZ.prototype={
$1(d){return d.d},
$S:z+0}
A.bf_.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bf0.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bf1.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bf2.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bf3.prototype={
$1(d){return d.d},
$S:z+0}
A.bf4.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bf5.prototype={
$1(d){return this.a},
$S:z+0}
A.bf6.prototype={
$1(d){return this.a},
$S:z+0}
A.bf8.prototype={
$0(){return A.bAk(this.b,1.45,new A.Ua(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bf9.prototype={
$0(){return A.bAk(this.b,1.6,new A.Up(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsO.prototype={
$1(d){var w=this,v=null,u=B.ay(16),t=x.p,s=B.b([B.aj(B.b([B.az(B.i(w.a,v,v,v,v,B.bB(C.h,18,C.o),v,v,v),1),B.fj(v,v,D.ady,v,v,new A.bsN(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.p,12,C.aE),v,v,v),C.D],t))
s.push(C.v)
s.push(B.bM(new B.mH(w.c,w.d,v),v,17976931348623157e292))
return B.a4R(v,C.m,new B.ad(C.ai,B.a9(s,C.z,C.f,C.E),v),v,v,v,C.hO,C.v2,v,new B.d6(u,C.K),v)},
$S:1020}
A.bsN.prototype={
$0(){return B.bb(this.a,!1).eS()},
$S:0}
A.bfa.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAk(this.b,2.4,new A.YB(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bnN.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bnO.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bnP.prototype={
$1(d){return A.aKM(null,1.4,null,C.a9,0.35,D.ahP,D.E4,null,!1,!1,!1,!1,D.Fs,!1,10,D.YV,!0,C.lu,B.b([new A.ey(0,d),new A.ey(this.a,d)],x.U))},
$S:z+14}
A.b5O.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5Q.prototype={
$2(d,e){var w=null
return B.i(this.a.aKq(d),w,w,w,w,B.y(C.p,10,C.H),w,w,w)},
$S:z+16}
A.b5R.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.vb
return new B.ad(C.l_,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.p,9,C.H),w,w,w),w)},
$S:z+6}
A.b5P.prototype={
$1(d){return D.a9N},
$S:z+7}
A.b6K.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6L.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6M.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b6N.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.vb
return new B.ad(C.l_,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bfJ.prototype={
$1(d){return d.d},
$S:z+19}
A.bfK.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bq_.prototype={
$1(d){return d.d},
$S:z+20}
A.bq0.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b4e.prototype={
$0(){return D.asP},
$S:98}
A.b4d.prototype={
$2(d,e){return new A.wP("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4c.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bx(m,B.a9(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.D,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.p,12.5,C.l),m,m,m),C.v,B.ks(C.cl,B.b([B.h5(C.F_,D.aGi,new A.b46(w,v),m),B.h5(D.adb,D.aFc,new A.b47(w,v),m)],u),C.dv,8,8)],u),C.z,C.f,C.i),C.a8,m,C.G,m,m,3)}w=new A.b4f(d)
t=C.b.fA(n.a.e.d,0,new A.b48())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jo(new A.b49(new A.b4g(w),r,w,s))
v=J.Z(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a9(B.b([w,C.D,B.aj(B.b([B.az(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.p,11,C.l),m,m,m),1),B.oJ(D.ael,D.aFx,new A.b4a(q,p),m),B.oJ(D.adZ,D.aFi,new A.b4b(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.ab,C.f,C.i)},
$S:292}
A.b46.prototype={
$0(){return A.avt(this.a,this.b,null)},
$S:0}
A.b47.prototype={
$0(){return A.avq(this.a,this.b)},
$S:0}
A.b4f.prototype={
$1(d){var w=B.bi(J.a3(this.a,d))
return w==null?null:w},
$S:1021}
A.b4g.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:34}
A.b48.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b49.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jI(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i0,o.$1("liquidity1_pct")),m=A.jI(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i0,o.$1("liquidity2_pct")),l=A.jI(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i0,o.$1("liquidity3_pct"))
o=A.jI(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i0,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b0(w,".",",")+" %"}w=A.jI(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i0,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.ap(v)
return E.aHT(p,B.b([n,m,l,o,w,A.jI(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.i0,v)],x.p),q,12,12,C.ig,!0)},
$S:124}
A.b4a.prototype={
$0(){return A.avq(this.a,this.b)},
$S:0}
A.b4b.prototype={
$0(){return A.avt(this.a,this.b,this.c)},
$S:0}
A.bsM.prototype={
$1(d){return new A.Be(this.a,new A.bsL(this.b),this.c,null)},
$S:z+22}
A.bsL.prototype={
$0(){var w=this.a,v=$.bwn()
if(w.e==null)B.S(B.Y(y.b))
w.gck().cc(v)},
$S:0}
A.b40.prototype={
$0(){},
$S:0}
A.b41.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b42.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b44.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uk(u.b,B.bP(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b43(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b43.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b45.prototype={
$0(){return B.bb(this.a,!1).eS()},
$S:0}
A.b4h.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4i.prototype={
$1(d){return new A.xG(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayb.prototype={
$1(d){return d.e},
$S:z+27}
A.ayc.prototype={
$2(d,e){return d+e},
$S:44}
A.aye.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayg.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayh.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adI(v.d,v.e)},
$S:0}
A.axV.prototype={
$1(d){return 0},
$S:1022}
A.axU.prototype={
$2(d,e){return B.eT(C.bR,this.a.alm(e),C.t,C.bi,null)},
$S:1023}
A.aZw.prototype={
$1(d){return d.a},
$S:z+31}
A.aZx.prototype={
$1(d){return d.b},
$S:z+32}
A.aZy.prototype={
$1(d){return new A.jS(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZz.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mF||v===D.dN))t=1-t
return new A.jS(d,t*w.d)},
$S:z+34}
A.aZA.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goB(),p=d.a
r.goB()
r=$.lB()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajn(Math.abs(s.b-s.c)))
t=""}if(C.c.hN(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nS(d,q.c.b.$2(p,new A.ty(u+t,s.e)))},
$S:z+35}
A.aUQ.prototype={
$1(d){this.a.l9(new A.a5H(d))},
$S:172}
A.aUR.prototype={
$1(d){this.a.l9(new A.a5I(d))},
$S:40}
A.aUS.prototype={
$1(d){this.a.l9(new A.a5J(d))},
$S:27}
A.aUT.prototype={
$0(){this.a.l9(D.a2f)},
$S:0}
A.aUU.prototype={
$1(d){this.a.l9(new A.N7())},
$S:43}
A.aUV.prototype={
$1(d){this.a.l9(new A.a5M(d))},
$S:42}
A.aUW.prototype={
$0(){this.a.l9(D.a2g)},
$S:0}
A.aUX.prototype={
$1(d){this.a.l9(new A.Na(d))},
$S:80}
A.aUY.prototype={
$1(d){this.a.l9(new A.a5G(d))},
$S:176}
A.aUZ.prototype={
$1(d){this.a.l9(new A.a5F(d))},
$S:177}
A.aV_.prototype={
$1(d){return this.a.l9(new A.N5(d))},
$S:178}
A.aV0.prototype={
$1(d){return this.a.l9(new A.a5K(d))},
$S:65}
A.aV1.prototype={
$1(d){return this.a.l9(new A.N8(d))},
$S:56}
A.bfl.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQk(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfj.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.bfk.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.bfi())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.GE(w))},
$S:0}
A.bfi.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+8}
A.bfm.prototype={
$1(d){return new A.zi(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKN.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.btv.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bF2(t?A.bA8(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tz(w,new A.yy(!0,A.bAV(),new A.btu(v)))},
$S:z+41}
A.btu.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bTI(A.bA8(d,e,f),w,A.c1v(d,e,f))},
$S:z+42}
A.bts.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j0(v,v,u==null?D.dr:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rz(C.d.j(d.b),w)},
$S:z+43}
A.aKP.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKQ.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aKU.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+45}
A.aKS.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKT.prototype={
$0(){this.a.adI(this.b,this.c)},
$S:0}
A.aKV.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+8}
A.ay4.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.ay5.prototype={
$2(d,e){return d+e},
$S:44}
A.ay8.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iR(v,B.ae(v).i("iR<1>")).aw(0,new A.ay9(w,this.a/(u+1),this.c))},
$S:0}
A.ay9.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.ay6.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.ay7.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHS.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1024}
A.aBn.prototype={
$1(d){return d},
$S:1025};(function aliases(){var w=A.KU.prototype
w.a_Z=w.ic
w.alH=w.aS1
w.alI=w.adB
w=A.TL.prototype
w.aoi=w.l
w=A.L3.prototype
w.a0_=w.ic
w=A.Gc.prototype
w.a0J=w.YU})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c57","bTF",72)
var q
v(q=A.TN.prototype,"gaEl","aEm",23)
v(q,"gaDo","HX",4)
v(q,"gaE5","I7",4)
u(A.TO.prototype,"gasa","asb",25)
t(A,"c3W",3,null,["$3"],["bQZ"],49,0)
t(A,"c3X",3,null,["$3"],["bR_"],50,0)
t(A,"c3Y",3,null,["$3"],["bR0"],51,0)
t(A,"c4_",4,null,["$4"],["c4L"],52,0)
w(A,"c3Z","c4K",53)
s(A,"bAo","c4M",54)
t(A,"c3R",3,null,["$3"],["bTJ"],55,0)
w(A,"a_O","c7a",56)
w(A,"avw","c4P",7)
t(A,"c3T",3,null,["$3"],["bUv"],57,0)
t(A,"c3V",3,null,["$3"],["bZI"],58,0)
t(A,"c3S",3,null,["$3"],["bUu"],59,0)
t(A,"c3U",3,null,["$3"],["bZH"],60,0)
w(A,"cek","bUt",61)
w(A,"cel","bZG",62)
r(A.Yq.prototype,"ga4p","axF",30)
u(A.Wb.prototype,"gayX","ayY",36)
t(A,"c60",3,null,["$3"],["bUX"],63,0)
t(A,"c6_",3,null,["$3"],["bR2"],64,0)
w(A,"c63","c7b",1)
t(A,"bLw",4,null,["$5$size","$4"],["bJZ",function(d,e,f,g){return A.bJZ(d,e,f,g,null)}],65,0)
s(A,"bAV","c79",66)
s(A,"bLx","c3E",67)
s(A,"bLA","c4S",68)
s(A,"bLz","c4O",3)
s(A,"bLy","c4N",3)
w(A,"c62","bL9",70)
w(A,"c61","bL8",71)
t(A,"a_T",3,null,["$3"],["c5Z"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.N,[A.a7g,A.agM,A.am6,A.J0,A.Js,A.agK,A.I7,A.Ir,A.alr,A.amE,A.UZ,A.YB,A.Ua,A.Up,A.an8,A.ajs,A.Ce,A.asU,A.wP,A.KV,A.AG])
u(B.B,[A.uV,A.Ee,A.bf,A.ahT,A.ahJ,A.ahL,A.ahM,A.ahB,A.alb,A.ahP,A.ahN,A.ayq,A.asY,A.ayd,A.ahK,A.L3,A.a6i,A.ty,A.ark,A.arj,A.ahA,A.ala,A.ey,A.al7,A.al9,A.apw,A.alY,A.atC,A.al8,A.akO,A.al6,A.axT,A.bfg,A.axW,A.ahx,A.nS,A.al3,A.al4,A.vM,A.hs,A.amM,A.amP,A.ahG,A.ahU,A.ahH,A.al5,A.amS,A.amQ,A.asX,A.ari,A.aKO,A.amO,A.vv,A.a1L,A.amZ,A.a1V,A.b23])
u(B.uT,[A.qk,A.vA,A.ww,A.aAL,A.aBT,A.oa,A.CM,A.ob])
u(B.nY,[A.aFm,A.aFn,A.aFo,A.aFF,A.btH,A.btI,A.bvz,A.btJ,A.btG,A.btF,A.aFu,A.aFA,A.aFt,A.aKv,A.beX,A.beY,A.beZ,A.bf_,A.bf0,A.bf1,A.bf2,A.bf3,A.bf4,A.bf5,A.bf6,A.bsO,A.bnP,A.b5P,A.b6K,A.b6L,A.bfJ,A.bq_,A.b4c,A.b4f,A.b4g,A.bsM,A.b4i,A.ayb,A.aye,A.axV,A.aZw,A.aZx,A.aZy,A.aZz,A.aZA,A.aUQ,A.aUR,A.aUS,A.aUU,A.aUV,A.aUX,A.aUY,A.aUZ,A.aV_,A.aV0,A.aV1,A.bfl,A.bfm,A.aKN,A.btv,A.btu,A.bts,A.aKP,A.aKQ,A.ay4,A.aBn])
t(A.yw,B.fA)
u(B.xW,[A.aFl,A.aFk,A.aFD,A.aFv,A.aFw,A.aFx,A.aFy,A.aFz,A.aFC,A.aFr,A.aFs,A.bi3,A.bi4,A.bi5,A.aKx,A.bf8,A.bf9,A.bsN,A.bfa,A.b4e,A.b46,A.b47,A.b4a,A.b4b,A.bsL,A.b40,A.b41,A.b42,A.b44,A.b43,A.b45,A.b4h,A.ayh,A.aUT,A.aUW,A.bfj,A.bfk,A.aKS,A.aKT,A.ay8])
u(B.y3,[A.yx,A.aon,A.a7h,A.ahF])
u(B.xX,[A.aFB,A.bi2,A.boI,A.aKw,A.bf7,A.bnN,A.bnO,A.b5O,A.b5Q,A.b5R,A.b6M,A.b6N,A.bfK,A.bq0,A.b4d,A.b48,A.b49,A.ayc,A.ayg,A.axU,A.bfi,A.aKU,A.aKV,A.ay5,A.ay9,A.ay6,A.ay7,A.aHS])
u(B.M,[A.Be,A.RJ])
u(B.a0,[A.TN,A.Yq])
u(B.NO,[A.L_,A.Ov])
u(B.ut,[A.TO,A.Wb])
t(A.a1m,A.ahT)
t(A.ahw,A.a1m)
t(A.a16,A.ahw)
u(A.a16,[A.ahI,A.amN])
t(A.nT,A.ahI)
u(B.I6,[A.ay2,A.aee,A.D2,A.aEL,A.aKy,A.NB])
t(A.fE,A.ahJ)
t(A.ik,A.ahL)
t(A.mJ,A.ahM)
t(A.a1d,A.ahB)
t(A.Nb,A.alb)
u(A.Nb,[A.ahO,A.amR])
t(A.a1i,A.ahO)
t(A.a1j,A.ahP)
t(A.D3,A.ahN)
u(A.ayq,[A.L0,A.Ox])
t(A.aeg,A.asY)
t(A.ahQ,A.aeg)
t(A.a1k,A.ahQ)
u(B.b2,[A.xG,A.zi])
t(A.uz,A.ahK)
t(A.KU,A.L3)
u(A.KU,[A.ayf,A.aKR])
u(B.Oq,[A.a1g,A.a7t])
u(B.H,[A.Gc,A.ahy])
u(A.Gc,[A.abo,A.abB])
t(A.qa,A.ark)
t(A.acN,A.arj)
t(A.pi,A.ahA)
t(A.uX,A.ala)
t(A.yz,A.al7)
t(A.pE,A.al9)
t(A.Qi,A.apw)
t(A.n1,A.alY)
t(A.nq,A.atC)
u(A.pE,[A.alX,A.atB])
t(A.kR,A.alX)
t(A.li,A.atB)
t(A.a5E,A.al8)
u(A.a5E,[A.alW,A.atA])
t(A.a6t,A.alW)
t(A.aeD,A.atA)
t(A.MU,A.akO)
t(A.uW,A.al6)
t(A.N4,A.uW)
t(A.acO,B.h4)
t(A.ahz,A.ahy)
t(A.TL,A.ahz)
t(A.a17,A.TL)
t(A.jS,A.ahx)
t(A.a5B,A.al3)
t(A.a5D,A.al4)
u(A.hs,[A.a5H,A.a5I,A.a5J,A.N6,A.N7,A.a5M,A.N9,A.Na,A.a5G,A.a5F,A.N5,A.a5K,A.a5L,A.N8])
t(A.pR,A.amN)
t(A.ed,A.amM)
t(A.Ow,A.amP)
t(A.a1f,A.ahG)
t(A.mK,A.ahU)
t(A.KZ,A.ahH)
t(A.yy,A.al5)
t(A.EQ,A.amR)
t(A.a7u,A.amS)
t(A.amL,A.ey)
t(A.n4,A.amL)
t(A.qi,A.n4)
t(A.rz,A.amQ)
t(A.tz,A.asX)
t(A.GE,A.ari)
t(A.zj,A.amO)
t(A.zm,A.amZ)
w(A.ahB,A.bf)
w(A.ahI,A.bf)
w(A.ahJ,A.bf)
w(A.ahL,A.bf)
w(A.ahM,A.bf)
w(A.ahN,A.bf)
w(A.ahO,A.bf)
w(A.ahP,A.bf)
w(A.ahQ,A.bf)
w(A.ahK,A.bf)
w(A.ahw,A.bf)
w(A.ahA,A.bf)
w(A.akO,A.bf)
w(A.al6,A.bf)
w(A.al7,A.bf)
w(A.al9,A.bf)
w(A.ala,A.bf)
w(A.alX,A.bf)
w(A.alW,A.bf)
w(A.alY,A.bf)
w(A.apw,A.bf)
w(A.arj,A.bf)
w(A.ark,A.bf)
w(A.asY,A.bf)
w(A.atB,A.bf)
w(A.atA,A.bf)
w(A.atC,A.bf)
w(A.ahx,A.bf)
v(A.ahy,B.aD)
w(A.ahz,B.ea)
v(A.TL,B.a4A)
w(A.ahT,A.bf)
w(A.al3,A.bf)
w(A.al4,A.bf)
w(A.alb,A.bf)
w(A.ahG,A.bf)
w(A.ahH,A.bf)
w(A.ahU,A.bf)
w(A.al5,A.bf)
w(A.al8,A.bf)
w(A.amL,A.bf)
w(A.amM,A.bf)
w(A.amN,A.bf)
w(A.amP,A.bf)
w(A.amQ,A.bf)
w(A.amR,A.bf)
w(A.amS,A.bf)
w(A.ari,A.bf)
w(A.asX,A.bf)
w(A.amO,A.bf)
w(A.amZ,A.bf)})()
B.bqe(b.typeUniverse,JSON.parse('{"a7g":{"N":[],"c":[]},"Ee":{"aFq":[]},"yw":{"fA":["be<~>"],"fA.T":"be<~>"},"Js":{"N":[],"c":[]},"I7":{"N":[],"c":[]},"yx":{"bh":[],"M":[],"c":[]},"agM":{"N":[],"c":[]},"am6":{"N":[],"c":[]},"aon":{"bh":[],"M":[],"c":[]},"J0":{"N":[],"c":[]},"agK":{"N":[],"c":[]},"Ir":{"N":[],"c":[]},"wP":{"N":[],"c":[]},"Be":{"M":[],"c":[]},"a7h":{"bh":[],"M":[],"c":[]},"alr":{"N":[],"c":[]},"amE":{"N":[],"c":[]},"UZ":{"N":[],"c":[]},"YB":{"N":[],"c":[]},"Ua":{"N":[],"c":[]},"Up":{"N":[],"c":[]},"an8":{"N":[],"c":[]},"ajs":{"N":[],"c":[]},"Ce":{"N":[],"c":[]},"asU":{"N":[],"c":[]},"ahF":{"bh":[],"M":[],"c":[]},"TN":{"a0":["Be"]},"L_":{"M":[],"c":[]},"TO":{"a0":["L_"]},"nT":{"bf":[]},"fE":{"bf":[]},"ik":{"bf":[]},"mJ":{"bf":[]},"D3":{"bf":[]},"xG":{"b2":["nT"],"b4":["nT"],"b4.T":"nT","b2.T":"nT"},"a1d":{"bf":[]},"a1i":{"bf":[]},"a1j":{"bf":[]},"a1k":{"bf":[]},"uz":{"bf":[]},"a1g":{"aV":[],"c":[]},"abo":{"H":[],"K":[],"jq":[],"aU":[]},"pE":{"bf":[]},"n1":{"bf":[]},"nq":{"bf":[]},"kR":{"bf":[]},"li":{"bf":[]},"uW":{"bf":[]},"a16":{"bf":[]},"qa":{"bf":[]},"acN":{"bf":[]},"pi":{"bf":[]},"uX":{"bf":[]},"yz":{"bf":[]},"aeg":{"bf":[]},"Qi":{"bf":[]},"a6t":{"bf":[]},"aeD":{"bf":[]},"MU":{"bf":[]},"N4":{"bf":[]},"KV":{"N":[],"c":[]},"RJ":{"M":[],"c":[]},"Yq":{"a0":["RJ"]},"jS":{"bf":[]},"acO":{"h4":[],"aV":[],"c":[]},"a17":{"ea":["H","ht"],"H":[],"aD":["H","ht"],"K":[],"aU":[],"aD.1":"ht","ea.1":"ht","aD.0":"H"},"AG":{"N":[],"c":[]},"a1m":{"bf":[]},"a5B":{"bf":[]},"Nb":{"bf":[]},"a5D":{"bf":[]},"a5H":{"hs":[]},"a5I":{"hs":[]},"a5J":{"hs":[]},"N6":{"hs":[]},"N7":{"hs":[]},"a5M":{"hs":[]},"N9":{"hs":[]},"Na":{"hs":[]},"a5G":{"hs":[]},"a5F":{"hs":[]},"N5":{"hs":[]},"a5K":{"hs":[]},"a5L":{"hs":[]},"N8":{"hs":[]},"Gc":{"H":[],"K":[],"jq":[],"aU":[]},"Ov":{"M":[],"c":[]},"Wb":{"a0":["Ov"]},"pR":{"bf":[]},"ed":{"bf":[]},"mK":{"bf":[]},"n4":{"ey":[],"bf":[]},"qi":{"n4":[],"ey":[],"bf":[]},"rz":{"bf":[]},"tz":{"bf":[]},"GE":{"bf":[]},"zi":{"b2":["pR"],"b4":["pR"],"b4.T":"pR","b2.T":"pR"},"Ow":{"bf":[]},"a1f":{"bf":[]},"KZ":{"bf":[]},"yy":{"bf":[]},"a5E":{"bf":[]},"EQ":{"bf":[]},"a7u":{"bf":[]},"zj":{"bf":[]},"a7t":{"aV":[],"c":[]},"abB":{"H":[],"K":[],"jq":[],"aU":[]},"zm":{"bf":[]}}'))
B.bJt(b.typeUniverse,JSON.parse('{"KU":1,"Nb":1,"L3":1,"Gc":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.av
return{_:w("CM"),e:w("be<oa>"),aN:w("be<ob>"),fM:w("be<a1<f,@>?>"),b:w("be<~>"),W:w("jS"),B:w("nT"),dB:w("fE"),T:w("uz"),fj:w("ik"),G:w("mJ"),J:w("mK"),k:w("ar"),cX:w("a1V<F>"),dO:w("uH"),R:w("al<f,@>"),v:w("hn"),bz:w("lL<b9>"),f0:w("o3"),E:w("bf"),F:w("yw"),X:w("oa"),P:w("lS"),D:w("uV"),a:w("aFq"),d:w("ob"),cw:w("ey"),L:w("ht"),m:w("dr<v,E>"),cm:w("kR"),dv:w("n1"),g:w("C<nS>"),O:w("C<fE>"),Y:w("C<ik>"),C:w("C<bxh>"),U:w("C<ey>"),K:w("C<a6i>"),u:w("C<ed>"),bC:w("C<vv>"),aA:w("C<u<ey>>"),r:w("C<GE>"),s:w("C<f>"),eg:w("C<tw>"),df:w("C<qi>"),p:w("C<c>"),n:w("C<F>"),t:w("C<v>"),eF:w("bk<a0<M>>"),Z:w("n4"),cz:w("ed"),hf:w("pR"),dj:w("zj"),fT:w("rz"),c_:w("io<oZ<be<~>>>"),x:w("zm<fE>"),y:w("zm<ed>"),I:w("u<v>"),ef:w("vA"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("k9"),aU:w("B"),Q:w("vM<nT>"),o:w("vM<pR>"),eo:w("q0"),gJ:w("q1"),V:w("kk<lS>"),N:w("f"),A:w("nl"),bO:w("bN"),er:w("tw"),j:w("ww"),dw:w("qi"),bY:w("tz"),cZ:w("qk"),gc:w("kr"),es:w("li"),bN:w("nq"),l:w("c"),q:w("x7"),g4:w("ie<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xG?"),f3:w("zi?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("B?"),aD:w("kr?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bb=new B.lG(C.n,B.av("lG<E>"))
D.Bi=new A.D2(0,"left")
D.mF=new A.D2(1,"top")
D.Bj=new A.D2(2,"right")
D.dN=new A.D2(3,"bottom")
D.awA=new A.qa(!1,A.bAo(),22,null)
D.ku=new A.pi(16,null,D.awA,!0)
D.a9O=new A.pE(C.C,null,2,null)
D.wa=new A.KZ(!1,D.a9O,A.c63(),!0)
D.a0b=new A.ay2(3,"spaceEvenly")
D.a0k=new B.xK(6,"dstIn")
D.Yd=new B.aW(3,3)
D.Bn=new B.d1(D.Yd,D.Yd,C.a1,C.a1)
D.a0v=new B.bm(C.C,0,C.T,-1)
D.BW=new A.a5D()
D.a2f=new A.N6()
D.a2g=new A.N9()
D.aOk=new A.acN()
D.amv=w([],B.av("C<kR>"))
D.amx=w([],B.av("C<li>"))
D.E0=new A.MU(D.amv,D.amx,!0)
D.a9v=new B.dM("Zeitraum",!1,null)
D.a9z=new B.dM("Konten (SKR 03)",!1,null)
D.xM=new A.aEL(0,"center")
D.aOw=new A.yy(!0,A.bAV(),A.bLw())
D.E4=new A.yy(!1,A.bAV(),A.bLw())
D.E5=new A.yz(!1,!0,null,A.avw(),A.a_O(),!0,null,A.avw(),A.a_O())
D.aOx=new A.yz(!0,!0,null,A.avw(),A.a_O(),!0,null,A.avw(),A.a_O())
D.a4C=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a4m=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4M=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a4G=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a44=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a43=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a58=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a4v=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a5b=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a55=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aqL=new B.dr([50,D.a4C,100,D.a4m,200,D.a4M,300,D.a4G,400,D.a44,500,D.a43,600,D.a58,700,D.a4v,800,D.a5b,900,D.a55],x.m)
D.dr=new B.rF(D.aqL,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aiL=w([8,4],x.t)
D.a9M=new A.pE(D.dr,null,0.4,D.aiL)
D.a9N=new A.pE(C.a5,null,0.5,null)
D.fK=new A.ey(0/0,0/0)
D.awC=new A.qa(!0,A.bAo(),44,null)
D.mG=new A.pi(16,null,D.awC,!0)
D.awB=new A.qa(!0,A.bAo(),30,null)
D.mH=new A.pi(16,null,D.awB,!0)
D.a9P=new A.uX(!1,D.mG,D.mH,D.mG,D.mH)
D.aOy=new A.uX(!0,D.mG,D.mH,D.mG,D.mH)
D.Ed=new A.NB(0,"left")
D.aar=new A.NB(1,"center")
D.Ee=new A.NB(2,"right")
D.aaw=new B.a4(57495,"MaterialIcons",null,!1)
D.y2=new B.a4(58927,"MaterialIcons",null,!1)
D.abk=new B.a4(59005,"MaterialIcons",null,!0)
D.abl=new B.a4(59007,"MaterialIcons",null,!0)
D.abm=new B.a4(59011,"MaterialIcons",null,!1)
D.ach=new B.a4(62589,"MaterialIcons",null,!1)
D.abA=new B.a4(61349,"MaterialIcons",null,!1)
D.ad8=new B.aC(D.abA,20,C.h,null,null)
D.abH=new B.a4(61487,"MaterialIcons",null,!1)
D.ada=new B.aC(D.abH,18,null,null,null)
D.adb=new B.aC(D.y2,18,null,null,null)
D.ady=new B.aC(C.hT,null,C.h,null,null)
D.adz=new B.aC(C.ld,null,C.p,null,null)
D.adZ=new B.aC(C.nX,16,null,null,null)
D.ae4=new B.aC(C.y8,16,null,null,null)
D.aaH=new B.a4(57912,"MaterialIcons",null,!1)
D.ae6=new B.aC(D.aaH,null,C.a9,null,null)
D.acf=new B.a4(62584,"MaterialIcons",null,!1)
D.aeg=new B.aC(D.acf,16,null,null,null)
D.ael=new B.aC(D.y2,16,null,null,null)
D.agn=new A.a7h(null)
D.aOD=new A.aKy(0,"horizontal")
D.ym=new A.zj(0,0,0,0,!1)
D.Fs=new A.Ow(0.5)
D.C1=new A.a7u()
D.agr=new A.EQ(D.C1,A.bLA(),10,A.bLx(),!0,A.bLz(),A.bLy(),!1,null,null,null)
D.aOF=new A.EQ(D.C1,A.bLA(),10,A.bLx(),!0,A.bLz(),A.bLy(),!0,null,null,null)
D.ahP=w([4,3],x.t)
D.auO=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.auE=new B.aG("receivables","Forderungen (kurzfristig)")
D.aut=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.aur=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auf=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.aul=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.auL=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.auD=new B.aG("equity","Eigenkapital")
D.pE=w([D.auO,D.auE,D.aut,D.aur,D.auf,D.aul,D.auL,D.auD],B.av("C<+(f,f)>"))
D.aOI=w([],x.g)
D.ami=w([],x.O)
D.amj=w([],x.Y)
D.amk=w([],B.av("C<mJ>"))
D.aml=w([],B.av("C<mK>"))
D.aOJ=w([],x.U)
D.aOK=w([],x.u)
D.amm=w([],x.r)
D.arm={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TS={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z0=new B.al(D.TS,[0,0,0,0,0,0,0,C.cf],B.av("al<f,B>"))
D.arj={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqF=new B.al(D.arj,[0,0,0,0],B.av("al<f,v>"))
D.arB={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aq1=new B.al(D.arB,[0,0,0,0,null,null,null,null],B.av("al<f,v?>"))
D.apV=new B.al(D.arm,[D.z0,D.z0,D.z0,C.cf,C.cf,C.cf,D.aqF,D.aq1],x.R)
D.aqe=new B.al(D.TS,[0,0,0,0,0,0,0,C.cw],x.R)
D.arn={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqg=new B.al(D.arn,[8500,1200,3400,300,22e3,4200,9000,22200],B.av("al<f,F>"))
D.ari={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqG=new B.al(D.ari,[0,0,0,0,0,0,0,C.cw],x.R)
D.arM={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqH=new B.al(D.arM,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.av("al<f,f>"))
D.a5h=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a5p=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a47=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a4y=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4I=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a5E=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3T=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a4A=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4L=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a56=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqM=new B.dr([50,D.a5h,100,D.a5p,200,D.a47,300,D.a4y,400,D.a4I,500,D.a5E,600,D.a3T,700,D.a4A,800,D.a4L,900,D.a56],x.m)
D.TE=new B.rF(D.aqM,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8M=new B.af(32,32,32,32)
D.asG=new B.ad(D.a8M,C.bI,null)
D.a8O=new B.af(48,48,48,48)
D.asJ=new B.ad(D.a8O,C.bI,null)
D.asP=new B.ad(C.ai,C.bI,null)
D.amy=w([],B.av("C<n1>"))
D.amz=w([],B.av("C<nq>"))
D.Yf=new A.Qi(D.amy,D.amz)
D.avv=new B.fx("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avw=new B.fx("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avz=new B.fx("Automaten-Business","Umsatz je Automat",null,null)
D.avB=new B.fx("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.avD=new B.fx("Top","Meistverkaufte Produkte",null,null)
D.avG=new B.fx("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.avH=new B.fx("Kennzahlen","Rentabilit\xe4t",null,null)
D.YV=new B.tg(C.I,C.u,0)
D.aE9=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayk=new B.e3(D.aE9,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aG6=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayn=new B.e3(D.aG6,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aEm=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayo=new B.e3(D.aEm,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aG0=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayq=new B.e3(D.aG0,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFt=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayr=new B.e3(D.aFt,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFq=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayK=new B.e3(D.aFq,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aOU=new B.T(!0,C.C,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEj=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEu=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFc=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFi=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFx=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGi=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_9=new A.aee(0,"auto")
D.aGU=new A.aee(1,"top")
D.aLi=new A.wP("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLj=new A.wP("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ceK","bPK",()=>B.iT(new A.btH(),x.D))
w($,"ceL","awa",()=>B.iT(new A.btI(),x.a))
w($,"cfL","xs",()=>B.bz6(new A.bvz(),x.P))
w($,"ceM","bwo",()=>C.aI.$1$1(new A.btJ(),x.d))
w($,"ceJ","bPJ",()=>C.aI.$1$1(new A.btG(),x.X))
w($,"ceI","bwn",()=>C.aI.$1$1(new A.btF(),x.h))
w($,"ceH","bwm",()=>B.b_o(A.c57(),x.F,x.b))
w($,"c7Y","bw_",()=>new A.axT())
v($,"cbe","lB",()=>new A.b23())})()};
(a=>{a["NEOqMkHTDkyfVf2eqodOuIF0c8E="]=a.current})($__dart_deferred_initializers__);