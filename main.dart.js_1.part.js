((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NT(d,e,f,g,h){return new A.a6z(f,g,d,h,e,null)},
a6z:function a6z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uK:function uK(d){this.a=d},
E4:function E4(d){this.a=d},
bS0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Sq
w=x.f
v=x.N
u=x.z
t=A.aEK(B.dn(w.a(e.h(a0,"current")),v,u))
s=A.aEK(B.dn(w.a(e.h(a0,"prior_year")),v,u))
r=A.aEK(B.dn(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ce
p=J.d_(p,new A.aEs(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ce
o=J.d_(o,new A.aEt(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ce
q=J.d_(q,new A.aEu(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.dn(w.a(e.h(a0,"customer")),v,u)
m=B.b_(n.h(0,"purchases_count"))
m=m==null?null:C.e.a1(m)
if(m==null)m=0
l=A.oZ(n.h(0,"app_gross"))
k=B.b_(n.h(0,"active_customers"))
k=k==null?null:C.e.a1(k)
if(k==null)k=0
n=A.oZ(n.h(0,"avg_basket"))
u=B.dn(w.a(e.h(a0,"derived")),v,u)
v=A.oZ(u.h(0,"gross_margin_pct"))
e=A.oZ(u.h(0,"net_margin_pct"))
w=A.oZ(u.h(0,"ebitda_margin_pct"))
j=A.oZ(u.h(0,"cashflow_operating"))
i=A.bqF(u.h(0,"revenue_growth_yoy_pct"))
h=A.bqF(u.h(0,"revenue_growth_mom_pct"))
g=A.bqF(u.h(0,"result_growth_yoy_pct"))
u=A.bqF(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.a3(d,"days"))
f=f==null?null:C.e.a1(f)
if(f==null)f=1
return new A.o4(t,s,r,p,o,q,new A.azE(m,l,k,n),new A.aAK(v,e,w,j,i,h,g,u),f)},
oZ(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.an(d))
return w==null?0:w},
bqF(d){if(d==null)return null
if(typeof d=="number")return d
return B.it(J.an(d))},
qh:function qh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vp:function vp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wj:function wj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azE:function azE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAK:function aAK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o4:function o4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEs:function aEs(){},
aEt:function aEt(){},
aEu:function aEu(){},
aEK(d){var w=J.Z(d),v=A.u0(w.h(d,"revenue_net_7")),u=A.u0(w.h(d,"revenue_net_19")),t=A.u0(w.h(d,"revenue_net")),s=A.u0(w.h(d,"expense_net")),r=A.u0(w.h(d,"result_net")),q=A.u0(w.h(d,"vat_collected")),p=A.u0(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.ce
w=J.d_(w,new A.aEL(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.o5(v,u,t,s,r,q,p,w)},
u0(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.it(J.an(d))
return w==null?0:w},
CE:function CE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o5:function o5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aEL:function aEL(){},
bS_(d){return new A.yq(d,new B.iq(x.c_),C.dL)},
brp:function brp(){},
brq:function brq(){},
bte:function bte(){},
brr:function brr(){},
bro:function bro(){},
brn:function brn(){},
yq:function yq(d,e,f){this.r=d
this.a=e
this.f=f},
aEr:function aEr(d,e,f){this.a=d
this.b=e
this.c=f},
aEq:function aEq(d,e,f){this.a=d
this.b=e
this.c=f},
bS1(){return new A.yr(null)},
alh(d,e,f,g,h){return new A.alg(e,h,g,f,d,null)},
yr:function yr(d){this.a=d},
aEJ:function aEJ(d){this.a=d},
aEB:function aEB(d,e,f){this.a=d
this.b=e
this.c=f},
aEC:function aEC(d,e,f){this.a=d
this.b=e
this.c=f},
aED:function aED(d){this.a=d},
aEA:function aEA(){},
aEE:function aEE(d){this.a=d},
aEF:function aEF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEI:function aEI(){},
aEH:function aEH(){},
aEG:function aEG(){},
aEz:function aEz(d,e){this.a=d
this.b=e},
aEx:function aEx(d){this.a=d},
aEy:function aEy(d){this.a=d},
ag8:function ag8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alg:function alg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
ans:function ans(d,e){this.e=d
this.a=e},
bgK:function bgK(d){this.a=d},
bgL:function bgL(d){this.a=d},
bgM:function bgM(d,e,f){this.a=d
this.b=e
this.c=f},
bgJ:function bgJ(){},
IA:function IA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J0:function J0(d,e){this.c=d
this.a=e},
bmy:function bmy(d){this.a=d},
ag6:function ag6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HJ:function HJ(d,e){this.c=d
this.a=e},
byd(d,e,f,g,h){var w=null
return B.jV(w,w,!0,w,new A.bqy(h,g,e,f),d,w,!0,!0,x.H)},
jQ(d,e,f,g,h,i,j,k,l,m,n){return new A.alO(g,n,i,e,d,m,f,k,l,j,null)},
auA(d,e){return A.c1I(d,e)},
c1I(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auA=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bk(D.ayW)
t=4
o=e.aJ(0,$.c3(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hA("finance-balance-sync",B.y(n,n)),$async$auA)
case 7:r=g
q=B.dn(x.f.a(r.a),x.N,n)
l.WV()
if(J.d(J.a3(q,"configured"),!1)){l.bk(D.az_)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bu8()
if(e.e==null)B.Y(B.W(y.b))
e.gcz().cr(o)
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.WV()
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auA,v)},
auD(d,e,f){var w=0,v=B.q(x.H)
var $async$auD=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jV(null,null,!0,null,new A.bqw(f,e,e.aJ(0,$.c3(),x.A)),d,null,!0,!0,x.H),$async$auD)
case 2:return B.o(null,v)}})
return B.p($async$auD,v)},
a6A:function a6A(d){this.a=d},
aJA:function aJA(){},
aJz:function aJz(){},
aJy:function aJy(){},
I2:function I2(d,e){this.c=d
this.a=e},
beg:function beg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
be5:function be5(){},
be6:function be6(){},
be7:function be7(){},
be8:function be8(){},
be9:function be9(){},
bea:function bea(){},
beb:function beb(){},
bec:function bec(){},
bed:function bed(d){this.a=d},
bee:function bee(d){this.a=d},
bef:function bef(d){this.a=d},
beh:function beh(d,e){this.a=d
this.b=e},
bei:function bei(d,e){this.a=d
this.b=e},
bqy:function bqy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqx:function bqx(d){this.a=d},
akB:function akB(d){this.a=d},
alO:function alO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bej:function bej(d,e){this.a=d
this.b=e},
Ug:function Ug(d,e,f){this.c=d
this.d=e
this.a=f},
XL:function XL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm6:function bm6(){},
bm7:function bm7(){},
bm8:function bm8(d){this.a=d},
Tx:function Tx(d,e,f){this.c=d
this.d=e
this.a=f},
b53:function b53(){},
b55:function b55(d){this.a=d},
b56:function b56(d){this.a=d},
b54:function b54(){},
TF:function TF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5P:function b5P(){},
b5Q:function b5Q(){},
b5R:function b5R(){},
b5S:function b5S(d){this.a=d},
amh:function amh(d,e){this.c=d
this.a=e},
beO:function beO(){},
beP:function beP(){},
aiH:function aiH(d,e){this.c=d
this.a=e},
C7:function C7(d,e,f){this.c=d
this.d=e
this.a=f},
as4:function as4(d,e){this.c=d
this.a=e},
bnQ:function bnQ(){},
bnR:function bnR(){},
wE:function wE(d,e){this.c=d
this.a=e},
ah_:function ah_(d,e){this.e=d
this.a=e},
b3y:function b3y(){},
b3x:function b3x(){},
b3w:function b3w(d,e,f){this.a=d
this.b=e
this.c=f},
b3q:function b3q(d,e){this.a=d
this.b=e},
b3r:function b3r(d,e){this.a=d
this.b=e},
b3z:function b3z(d){this.a=d},
b3A:function b3A(d){this.a=d},
b3s:function b3s(){},
b3t:function b3t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3u:function b3u(d,e){this.a=d
this.b=e},
b3v:function b3v(d,e,f){this.a=d
this.b=e
this.c=f},
bqw:function bqw(d,e,f){this.a=d
this.b=e
this.c=f},
bqv:function bqv(d){this.a=d},
Ba:function Ba(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
T9:function T9(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3k:function b3k(){},
b3l:function b3l(d){this.a=d},
b3m:function b3m(d){this.a=d},
b3o:function b3o(d,e){this.a=d
this.b=e},
b3n:function b3n(d,e){this.a=d
this.b=e},
b3p:function b3p(d){this.a=d},
bd:function bd(){},
bBK(d){return new A.Kx(d,C.aw,C.dA,null,null)},
Kx:function Kx(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Ta:function Ta(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eP$=f
_.cu$=g
_.c=_.a=null},
b3B:function b3B(d,e){this.a=d
this.b=e},
b3C:function b3C(d){this.a=d},
ax3(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akM:f,p=a0==null?16:a0,o=d==null?D.a_i:d,n=g==null,m=n?A.buE(r,r,r,r,r,r,r,r):g,l=a3==null?D.X9:a3
n=n?A.buE(r,r,r,r,r,r,r,r):g
w=j==null?D.DN:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nO(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BF,s,w,i,n)},
axa(d,e,f,g,h){var w=d==null?D.akN:d,v=e==null?2:e,u=g==null?C.lv:g
return new A.fI(h,f===!0,w,v,u)},
bPf(d,e,f){var w=d.a
w=C.e.aT(w+(e.a-w)*f)
return A.axa(A.kA(d.c,e.c,f,A.c2u(),x.fj),B.ac(d.d,e.d,f),!1,A.kA(d.e,e.e,f,A.ZY(),x.S),w)},
a0r(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Sy
else w=h
v=m==null
u=v?8:m
t=$.lz()
s=t.aY5(f,v?8:m)
t=t.aY6(g,v?8:m)
v=d==null?A.bBI(r,r,r,r,r):d
return new A.io(q,l,w,j,u,s,e,t,v,k==null?D.akO:k)},
bPg(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mA(d.f,e.f,f),p=A.kA(d.r,e.r,f,A.ZY(),x.S),o=B.bT(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0r(A.bBI(v,u,null,!1,t),p,q,o,s,n,null,A.kA(d.y,e.y,f,A.c2v(),x.G),m,r)},
bPh(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.my(u,w,v,B.bT(d.d,e.d,f))},
bBI(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0n(g===!0,v,u,w,f)},
buE(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0t(4,C.hY,16,D.xB,0,120,A.c2x(),!1,!1,D.Zh,0,C.J,A.c2w())
else w=k
v=j==null?C.l_:j
return new A.a0s(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3h(d,e,f,g){var w=null,v=B.j7(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CX(C.e.j(f.b),v)},
c3g(d){return A.az2(D.dp,15)},
nO:function nO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ax2:function ax2(d,e){this.a=d
this.b=e},
fI:function fI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axb:function axb(){},
axc:function axc(){},
io:function io(d,e,f,g,h,i,j,k,l,m){var _=this
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
my:function my(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0n:function a0n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0s:function a0s(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adD:function adD(d,e){this.a=d
this.b=e},
a0t:function a0t(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CX:function CX(d,e){this.a=d
this.b=e},
Ky:function Ky(d){this.a=d},
a0u:function a0u(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xB:function xB(d,e){this.a=d
this.b=e},
agW:function agW(){},
ah2:function ah2(){},
ah3:function ah3(){},
ah5:function ah5(){},
ah6:function ah6(){},
ah7:function ah7(){},
ah8:function ah8(){},
ah9:function ah9(){},
aha:function aha(){},
axd:function axd(d){this.a=d},
axe:function axe(){},
ul:function ul(d,e,f){this.a=d
this.b=e
this.c=f},
ah4:function ah4(){},
axf:function axf(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axg:function axg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axh:function axh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5w:function a5w(d){this.b=d},
a0q:function a0q(d,e,f){this.d=d
this.e=e
this.a=f},
aaM:function aaM(d,e,f,g,h,i,j,k){var _=this
_.av=d
_.i4=e
_.cZ=f
_.h0=g
_.v=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aE=_.aj=_.aq=$
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
c3i(d,e){var w=null
return new A.Rb(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
awV(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pa(t,e.b,new A.q5(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bD5(d,e,f){var w=A.awV(d.b,e.b,f),v=A.awV(d.d,e.d,f),u=A.awV(d.e,e.e,f)
return new A.uM(e.a,w,A.awV(d.c,e.c,f),v,u)},
bS4(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ez(w,v)},
bD3(d,e,f){return new A.yt(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5F(d){return!0},
c3l(d){return D.a86},
bD4(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pA(w,f,g,e)},
bF3(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c2q(),x.dv)
v.toString
w=A.kA(d.b,e.b,f,A.c2s(),x.bN)
w.toString
return new A.PI(v,w)},
bSR(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.re(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.mS(t,w,v,u)},
bY9(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.re(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.nj(t,w,v,u)},
bSQ(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pt(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bSO(B.buw(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.re(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.ZY(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kV(r,e.f,e.r,t,e.x,u,v,w,s)},
bY8(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pt(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bY6(B.buw(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.re(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kA(d.d,e.d,f,A.ZY(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lg(r,e.f,e.r,t,e.x,u,v,w,s)},
bSO(d,e,f,g,h,i){return new A.a5H(f,!1,g,i,d,e)},
bSP(d){return C.e.ak(d.e,1)},
bY6(d,e,f,g,h,i){return new A.ae1(f,!1,g,i,d,e)},
bY7(d){return C.e.ak(d.e,1)},
bD0(d,e,f){var w,v=A.kA(d.a,e.a,f,A.c2p(),x.cm)
v.toString
w=A.kA(d.b,e.b,f,A.c2r(),x.es)
w.toString
return new A.Mx(v,w,!0)},
bS3(d,e,f){return new A.ME(d,e==null?4:e,f)},
a0e:function a0e(){},
CV:function CV(d,e){this.a=d
this.b=e},
tn:function tn(d,e){this.r=d
this.w=e},
q5:function q5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acb:function acb(){},
pa:function pa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uM:function uM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez:function ez(d,e){this.a=d
this.b=e},
yt:function yt(d,e,f,g,h,i,j,k,l){var _=this
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
adF:function adF(){},
PI:function PI(d,e){this.a=d
this.b=e},
mS:function mS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kV:function kV(d,e,f,g,h,i,j,k,l){var _=this
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
a5H:function a5H(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae1:function ae1(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mx:function Mx(d,e,f){this.a=d
this.b=e
this.c=f},
uL:function uL(){},
ME:function ME(d,e,f){this.a=d
this.b=e
this.c=f},
agR:function agR(){},
agV:function agV(){},
ak1:function ak1(){},
akh:function akh(){},
aki:function aki(){},
akk:function akk(){},
akl:function akl(){},
al6:function al6(){},
al5:function al5(){},
al7:function al7(){},
aoy:function aoy(){},
aqt:function aqt(){},
aqu:function aqu(){},
as8:function as8(){},
asN:function asN(){},
asM:function asM(){},
asO:function asO(){},
awR:function awR(){},
Kq:function Kq(){},
Kr:function Kr(d,e,f){this.c=d
this.d=e
this.a=f},
awT:function awT(d){this.a=d},
awS:function awS(d){this.a=d},
Rb:function Rb(d,e,f){this.c=d
this.e=e
this.a=f},
XA:function XA(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWE(d,e,f){var w=B.ad(f),v=w.i("ab<1,jX>")
v=B.Q(new B.ab(f,new A.aYT(),v),v.i("aw.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aYU(),w),w.i("aw.E"))
return new A.acc(e,d,v,w,null)},
bPc(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6p(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tl(v,C.ar,C.x,new B.kt(1),v,v,v,v,C.by,v,C.dC)
u=new A.a0f(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aL(x.g))
u.bl()
return u},
acc:function acc(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aYT:function aYT(){},
aYU:function aYU(){},
a0f:function a0f(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.v=d
_.U=e
_.V=f
_.a3=g
_.Wd$=h
_.aTW$=i
_.dl$=j
_.af$=k
_.dP$=l
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
bep:function bep(d,e){this.a=d
this.b=e},
awU:function awU(){},
jX:function jX(d,e){this.a=d
this.b=e},
nN:function nN(d,e){this.a=d
this.b=e},
agS:function agS(){},
agT:function agT(){},
agU:function agU(){},
T7:function T7(){},
AH:function AH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYV:function aYV(d){this.a=d},
aYW:function aYW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aYX:function aYX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4N(d,e){var w=d==null?B.cS(C.E,1):d
return new A.a4M(e!==!1,w)},
a0w:function a0w(){},
a4M:function a4M(d,e){this.a=d
this.b=e},
ML:function ML(){},
a4O:function a4O(){},
axq:function axq(){},
aDK:function aDK(d,e){this.a=d
this.b=e},
ahd:function ahd(){},
ake:function ake(){},
akf:function akf(){},
akm:function akm(){},
KB:function KB(){},
vz:function vz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
ho:function ho(){},
a4S:function a4S(d){this.a=d},
a4T:function a4T(d){this.a=d},
a4U:function a4U(d){this.a=d},
MG:function MG(){},
MH:function MH(){},
a4X:function a4X(d){this.a=d},
MJ:function MJ(){},
MK:function MK(d){this.a=d},
a4R:function a4R(d){this.a=d},
a4Q:function a4Q(d){this.a=d},
MF:function MF(d){this.a=d},
a4V:function a4V(d){this.a=d},
a4W:function a4W(d){this.a=d},
MI:function MI(d){this.a=d},
FQ:function FQ(){},
aU3:function aU3(d){this.a=d},
aU4:function aU4(d){this.a=d},
aU5:function aU5(d){this.a=d},
aU6:function aU6(d){this.a=d},
aU7:function aU7(d){this.a=d},
aU8:function aU8(d){this.a=d},
aU9:function aU9(d){this.a=d},
aUa:function aUa(d){this.a=d},
aUb:function aUb(d){this.a=d},
aUc:function aUc(d){this.a=d},
aUd:function aUd(d){this.a=d},
aUe:function aUe(d){this.a=d},
aUf:function aUf(d){this.a=d},
O4:function O4(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vr:function Vr(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eP$=g
_.cu$=h
_.c=_.a=null},
beu:function beu(d,e){this.a=d
this.b=e},
bes:function bes(d){this.a=d},
bet:function bet(d,e){this.a=d
this.b=e},
ber:function ber(){},
bev:function bev(d){this.a=d},
bvT(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pK(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aJL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Sy:u
else w=g
v=f==null?A.ax1(!1,u,0,u,!1,D.vP):f
w=new A.e7(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ax1(!1,u,0,u,!1,D.vP):d,j,a0,i,s,!1,p)
w.arJ(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bBJ(d.ay,e.ay,f)
v=A.bBJ(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kA(d.cy,e.cy,f,A.ZY(),x.S)
r=B.a_(d.r,e.r,f)
q=B.re(d.w,e.w,f)
p=A.kA(d.a,e.a,f,A.c2o(),x.cw)
p.toString
o=B.bFB(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aJL(v,m,w,r,e.z,s,new A.ys(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.O5(n),!1,u,o,!0,e.cx,p)},
ax1(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.e.aT(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
else w=e
return new A.a0p(h,w,g,i,f,!1)},
bBJ(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.re(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bD4(t,A.kA(v.d,u.d,f,A.ZY(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.re(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.ax1(!1,s,v,u,e.a,new A.Kw(!1,r,w.c,!0))},
bPi(d,e,f){var w=B.a_(d.c,e.c,f),v=B.re(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.e.aT(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
return new A.mz(e.a,e.b,w,v)},
c5G(d){return!0},
bxZ(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iX)return A.byO(w.a,A.bvA(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c01(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iX)w=A.byO(v.a,A.bvA(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.az2(w,40)},
bI4(d,e,f,g,h){var w,v=A.bxZ(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iX)w=A.byO(u.a,A.bvA(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.az2(w,40)
return new A.ME(v,h==null?4:h,u)},
c5E(d,e){return!0},
c2b(d,e){return Math.abs(d.a-e.a)},
c3o(d,e){var w=J.d_(e,new A.bre(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c3k(d,e){return-1/0},
c3j(d,e){return d.a[e].b},
bJc(d){var w=J.d_(d,new A.brb(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bJb(d){return A.az2(D.dp,15)},
pK:function pK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e7:function e7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aJM:function aJM(){},
O5:function O5(d){this.a=d},
a0p:function a0p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mz:function mz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kw:function Kw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ys:function ys(d,e,f){this.a=d
this.b=e
this.c=f},
aJB:function aJB(d,e){this.a=d
this.b=e},
a4P:function a4P(){},
EI:function EI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bre:function bre(d){this.a=d},
brd:function brd(d){this.a=d},
a6O:function a6O(){},
brb:function brb(){},
mZ:function mZ(){},
qf:function qf(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rr:function rr(d,e){this.a=d
this.b=e},
to:function to(d,e){this.a=d
this.b=e},
Gg:function Gg(d){this.a=d},
O6:function O6(d){this.a=d},
za:function za(d,e){this.a=d
this.b=e},
ah0:function ah0(){},
ah1:function ah1(){},
ahe:function ahe(){},
akg:function akg(){},
akj:function akj(){},
alV:function alV(){},
alW:function alW(){},
alX:function alX(){},
alZ:function alZ(){},
am_:function am_(){},
am0:function am0(){},
am1:function am1(){},
aqs:function aqs(){},
as7:function as7(){},
aJN:function aJN(d){this.a=d},
aJO:function aJO(){},
aJP:function aJP(){},
zb:function zb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alY:function alY(){},
aJQ:function aJQ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aJT:function aJT(){},
aJR:function aJR(d,e,f){this.a=d
this.b=e
this.c=f},
aJS:function aJS(d,e,f){this.a=d
this.b=e
this.c=f},
aJU:function aJU(){},
vj:function vj(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6N:function a6N(d,e,f){this.d=d
this.e=e
this.a=f},
aaZ:function aaZ(d,e,f,g,h,i,j,k){var _=this
_.av=d
_.i4=e
_.cZ=f
_.h0=g
_.v=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aE=_.aj=_.aq=$
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
buD(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.ax4(),m.i("ab<1,F>")).kk(0,new A.ax5()),k=e-l,j=new A.ax8(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gd4(0)/2
s=u===o.length-1?0:w
v+=t.gd4(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gd4(0)/2
s=u===o.length-1?0:w
v+=t.gd4(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gd4(0)/2
s=u===o.length-1?0:w
v+=t.gd4(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iY(o,m.i("iY<1>")).aB(0,new A.ax6(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iY(o,m.i("iY<1>")).aB(0,new A.ax7(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ax4:function ax4(){},
ax5:function ax5(){},
ax8:function ax8(d,e,f){this.a=d
this.b=e
this.c=f},
ax9:function ax9(d,e,f){this.a=d
this.b=e
this.c=f},
ax6:function ax6(d,e,f){this.a=d
this.b=e
this.c=f},
ax7:function ax7(d,e,f){this.a=d
this.b=e
this.c=f},
bvA(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iY(w,B.ad(w).i("iY<1>")).aB(0,new A.aGV(v,d))
else throw B.e(B.bx('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aGV:function aGV(d,e){this.a=d
this.b=e},
aAc(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAd(),w),w.i("aw.E"))
return A.c3b(d,new A.a14(v,x.C))}else return d},
aAd:function aAd(){},
bXg(d,e){var w=!0
if(d!==C.fb)if(!(d===C.ar&&e===C.x))w=d===C.iD&&e===C.aV
if(w)return D.a8K
else{w=!0
if(d!==C.iC)if(!(d===C.iD&&e===C.x))w=d===C.ar&&e===C.aV
if(w)return D.a8M
else return D.a8L}},
Na:function Na(d,e){this.a=d
this.b=e},
a0V:function a0V(d,e){this.a=d
this.b=e},
zg:function zg(d,e){this.a=d
this.$ti=e},
am8:function am8(){},
c3b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ai(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.ac,k,k,h)
for(j=B.Mq(d),w=B.b([],x.I),v=new B.Ms(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.Y(B.fz('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Mr(v,r)
v.D9()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.D9()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ei(B.b([],i),!0,s)
p=new B.JR(new B.cl(t,p,k,new B.aoX([q,o,o+m,!0]),l),C.q,k)
h.push(p)
l=g.f
if(l!=null)p.iy(l)
g.rr()}o+=m
n=!n}}return g},
a14:function a14(d,e){this.a=d
this.b=0
this.$ti=e},
b1k:function b1k(){},
bvp(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.ga9(s).push(u)
else if(C.b.ga9(s).length!==0)s.push(B.b([],t))}if(C.b.ga9(s).length===0)s.pop()
return s},
bPl(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gei(v)===0){v=d.a.a
if(v.gei(v)===0){v=d.b.a
if(v.gei(v)===0){v=d.c.a
v=v.gei(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
az2(d,e){var w=1-e/100
return B.aD(d.gfI(d),C.e.aT(d.gNG()*w),C.e.aT(d.gFZ()*w),C.e.aT(d.gKb()*w))},
bD2(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
bvq(d){var w=d.a,v=w?A.aYS(d.b):0,u=w?A.aYS(d.c):0,t=w?A.aYS(d.d):0
return new B.al(v,u,t,w?A.aYS(d.e):0)},
bUw(d){var w
if(d.c===0){d.sf_(null)
w=B.c_(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwf(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.sf_(f.mN(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.sf_(null)}},
aYS(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kA(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.lR(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.lR(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4v(d,e,f){return C.e.aT(d+(e-d)*f)},
byO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.lR(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.ga9(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6z.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.C
r=r?C.m:C.an
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ct(t.x,C.m,s,18),C.b2],w))
v.push(B.aC(new B.eq(t.c,!1,s),1))
v=B.ap(v,C.D,s,C.h,C.i,0,s,s)
u=t.w
w=B.b([v,C.W,B.l(t.d,1,C.ai,s,B.c1(u==null?C.k:u,22,C.Q),s,s,s)],w)
return B.bA(r,B.af(w,C.D,s,C.ip,C.i),q,s,C.aj,s,3)}}
A.uK.prototype={
Lv(d){return this.aTV(d)},
aTV(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lv=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_summary",B.a5(["p_from",E.r9(d.a),"p_to",E.r9(d.b)],s,r),r),$async$Lv)
case 3:q=f
if(q==null){u=D.aoL
w=1
break}if(x.f.b(q)){u=B.dn(q,s,r)
w=1
break}u=D.aqZ
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lv,v)},
Lu(d){return this.aTU(d)},
aTU(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lu=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_kpis",B.a5(["p_from",E.r9(d.a),"p_to",E.r9(d.b)],s,r),r),$async$Lu)
case 3:q=f
if(x.f.b(q)){u=B.dn(q,s,r)
w=1
break}u=D.aov
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lu,v)},
pO(d){return this.arq(d)},
arq(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pO=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("sevdesk-sync",B.a5(["from",E.r9(d.a),"to",E.r9(d.b)],s,s)),$async$pO)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.e.a1(B.fG(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pO,v)},
Lq(d){return this.aTL(d)},
aTL(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lq=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("finance-export-pdf",B.a5(["from",E.r9(d.a),"to",E.r9(d.b)],s,s)),$async$Lq)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.dW("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lq,v)}}
A.E4.prototype={
FT(d){return this.akt(d)},
akt(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FT=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lv(d),$async$FT)
case 7:q=f
o=A.aEK(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FT,v)},
FO(d){return this.akh(d)},
akh(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lu(d),$async$FO)
case 7:q=f
o=A.bS0(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FO,v)},
pO(d){return this.arr(d)},
arr(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pO(d),$async$pO)
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
p=r.Hv(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pO,v)},
Lp(d){return this.aTK(d)},
aTK(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lp=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lq(d),$async$Lp)
case 7:q=f
o=C.hI.ce(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hv(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lp,v)},
Hv(d){if(d instanceof B.yn)return d
if(d instanceof B.l7){if(d.b==="42501")return new B.vD(d.a)
return new B.t5(d.a)}if(d instanceof B.MZ)return new B.t5("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B4("Unerwarteter Fehler: "+B.i(d))},
$iaEw:1}
A.qh.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vp.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wj.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azE.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAK.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o4.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CE.prototype={
gbF(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o5.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yq.prototype={
GO(d){return this.arp(0)},
arp(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GO=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dv)
s=t.r
r=s.aJ(0,$.xo(),x.P)
p.a=null
w=3
return B.k(B.p9(new A.aEr(p,t,r),x.H),$async$GO)
case 3:t.se4(0,f)
q=t.f
if(q.ghv(q)==null){q=$.bu9()
s=s.e
s===$&&B.a()
s.cr(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GO,v)},
Lo(){return this.aTJ()},
aTJ(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lo=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dv)
s=t.r.aJ(0,$.xo(),x.P)
q.a=null
w=3
return B.k(B.p9(new A.aEq(q,t,s),x.H),$async$Lo)
case 3:t.se4(0,e)
r=t.f
u=r.ghv(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lo,v)}}
A.yr.prototype={
ds(d,e){var w=null,v=e.ao($.xo(),x.P),u=e.ao($.bu9(),x.aN)
return B.iv(B.dQ(B.b([new B.fA("Finanzen","Dashboard",new A.ag8(e.ao($.bu7(),x.b).giR(),new A.aEB(this,d,e),new A.aEC(this,d,e),new A.aED(d),new A.aEE(d),new A.aEF(this,d,e,v),w),w),C.aQ,new A.ans(v,w),C.c1,D.aev,C.c1,B.ds(u,new A.aEG(),new A.aEH(),new A.aEI(),!1,!0,!1,x.d,x.l)],x.p),C.cN,w,C.S,!1),C.m,new A.aEJ(e))},
Jl(d,e){return this.aMd(d,e)},
aMd(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jl=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bu7()
w=3
return B.k(e.aJ(0,s.ghR(),x.F).GO(0),$async$Jl)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghv(s)
t=d.P(x.q).f
t.bk(B.c9(null,null,null,null,null,C.p,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jl,v)},
Bm(d,e){return this.axD(d,e)},
axD(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bm=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bu7().ghR(),x.F).Lo(),$async$Bm)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bk(D.az1)
w=1
break}t=B.q_(C.q,10)
w=4
return B.k($.bLt().u7(s,"finanzauswertung.pdf",t,null,null,null),$async$Bm)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bm,v)},
Bn(d,e,f){return this.aJO(d,e,f)},
aJO(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bn=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jV(null,null,!0,null,new A.aEz(f,d),d,null,!0,!0,x.cJ),$async$Bn)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nH(e.aJ(0,$.c3(),x.A))
p=f.a
o=f.b
n=$.dM()
m=n.ar(p)
n=n.ar(o)
w=8
return B.k(r.zG("finance_period",p,o,B.a5(["period_from",p.ec()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bn)
case 8:if(d.e!=null)d.P(x.q).f.bk(F.uQ)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bn,v)}}
A.ag8.prototype={
u(d){var w=this,v=null,u=A.alh(C.m,F.i3,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alh(v,D.aax,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alh(v,D.xT,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alh(C.ax,C.jj,C.ax,s?v:w.e,"PDF-Export")
return B.ap(B.b([u,C.b2,t,C.b2,r,C.b2,q,C.b2,A.alh(C.aD,C.fR,C.aD,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,v,C.h,C.O,0,v,v)}}
A.alg.prototype={
u(d){var w,v=this,u=null,t=B.aP(12),s=B.aP(12),r=B.aP(12),q=v.w
if(q==null)q=C.an
q=B.cS(q,1)
w=v.r
if(w==null)w=C.k
return B.GS(B.dJ(!1,C.a0,!0,t,B.eR(!1,s,!0,B.b7(u,B.ct(v.c,w,u,20),C.t,u,u,new B.b4(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ag,0,u,u,u,u,u,C.bw),u,v.d,u,u)}}
A.ans.prototype={
ds(d,e){var w=null,v=this.e,u=$.dM(),t=x.p
return B.bA(w,B.af(B.b([D.a7S,C.W,B.ap(B.b([D.ab0,C.aU,B.aC(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.k,16,C.Q),w,w,w),1)],t),C.l,w,C.h,C.i,0,w,w),C.w,B.ml(C.cH,B.b([new A.IA("Monat",new A.bgK(e),w,w),new A.IA("Jahr (YTD)",new A.bgL(e),w,w),new A.IA("Zeitraum w\xe4hlen \u2026",new A.bgM(this,d,e),D.a9B,w)],t),C.ea,6,8)],t),C.D,w,C.h,C.i),w,w,C.F,w,3)},
II(d,e){return this.aIF(d,e)},
aIF(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$II=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.auV(new A.bgJ(),d,B.bO(B.aX(t)-5,1,1,0,0,0,0),new B.lF(s.a,s.b,x.bz),B.bO(B.aX(t)+1,1,1,0,0,0,0),C.eq),$async$II)
case 2:r=g
if(r!=null)e.aJ(0,$.xo().ghR(),x.V).wK(0,new E.lJ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$II,v)}}
A.IA.prototype={
u(d){var w=null,v=B.aP(9999),u=B.aP(9999),t=B.aP(9999),s=B.cS(C.an,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ct(p,C.k,w,14),C.b2],r))
q.push(B.l(this.c,w,w,w,B.E(C.k,13,C.Q),w,w,w))
return B.dJ(!1,C.a0,!0,v,B.eR(!1,u,!0,B.b7(w,B.ap(q,C.l,w,C.h,C.O,0,w,w),C.t,w,w,new B.b4(w,w,s,t,w,w,C.H),w,w,w,w,C.kZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ag,0,w,w,w,w,w,C.bw)}}
A.J0.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iW(new A.bmy(this)),C.c1,D.a7W,C.w],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.ap(B.b([D.abW,C.aL,B.aC(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.u,14,C.n),s,s,s),1)],r),C.l,s,C.h,C.i,0,s,s),C.ag,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.L(w,B.b([new A.ag6(t.a,t.b,t.c==="revenue",t.d,s),C.W],r))}q.push(B.af(w,C.l,s,C.h,C.i))}return B.af(q,C.ae,s,C.h,C.i)}}
A.ag6.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.ag,s=B.cS(u?C.m:C.an,1),r=B.aP(4),q=w.c
r=B.b7(C.X,B.l(C.d.a_(q,0,1),v,v,v,B.c1(C.k,14,C.r),v,v,v),C.t,v,v,new B.b4(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.ai,v,B.E(C.k,14,C.Q),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aC(B.af(B.b([q,B.l(t,v,v,v,B.E(C.u,12,C.n),v,v,v)],s),C.D,v,C.h,C.i),1)
q=$.dw().ar(w.f)
return B.bA(v,B.ap(B.b([r,C.aL,t,B.l(q,v,v,v,B.E(u?C.aD:C.k,15,C.Q),v,v,v)],s),C.l,v,C.h,C.i,0,v,v),v,v,C.eM,v,3)}}
A.HJ.prototype={
u(d){var w=null
return B.bA(C.ax,B.ap(B.b([D.acx,C.aL,B.aC(B.l(this.c,w,w,w,B.E(C.k,14,C.n),w,w,w),1)],x.p),C.l,w,C.h,C.i,0,w,w),C.eH,w,C.F,w,3)}}
A.a6A.prototype={
ds(d,e){return B.ds(e.ao($.bO4(),x.e),new A.aJy(),new A.aJz(),new A.aJA(),!1,!0,!1,x.X,x.l)}}
A.I2.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.aw8,C.w,B.iW(new A.beg(v,q,100-t.w.a,w,p)),C.w,new A.akB(u),C.aQ,D.aw7,C.w,new A.ah_(t,u),C.aQ,D.aw1,C.w,B.bz(u,!0,u,B.mR(u,B.bA(u,new A.Tx(t,220,u),u,u,C.F,u,3),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beh(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.avW,C.w,B.bz(u,!0,u,B.mR(u,new A.TF(t,200,!1,u),C.a9,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bei(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.aw_,C.w,new A.amh(t,u),C.aQ,D.avX,C.w,new A.aiH(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aQ,D.aw3,C.w,new A.as4(t,u)],s))
return B.af(r,C.ae,u,C.h,C.i)}}
A.akB.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.u,11,C.n).ef(1.35),w,w,w)}}
A.alO.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.d.cD(m.d,"-")?C.ax:C.aD
else w=C.k
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bej(m,d):l
r=x.p
q=B.b([B.aC(B.l(m.c.toUpperCase(),l,l,l,B.E(C.u,10,C.r).fZ(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cS(C.hQ,0.8)
n=B.aP(4)
q.push(B.b7(l,B.l("Ziel "+p,l,l,l,B.E(C.ax,9,C.r),l,l,l),C.t,l,l,new B.b4(l,l,o,n,l,l,C.H),l,l,l,l,C.no,l,l,l))}q=B.b([B.ap(q,C.l,l,C.h,C.i,0,l,l),C.bb,B.bvo(C.du,B.l(m.d,l,l,l,B.c1(w,22,C.r),l,l,l),C.mI)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.ai,l,B.E(C.u,10,C.aJ),l,l,l))
q.push(C.cX)
q.push(B.ap(B.b([new A.Ug("Vormonat",m.r,l),C.cW,new A.Ug("Vorjahr",m.f,l)],r),C.l,l,C.h,C.i,0,l,l))
q.push(C.cX)
q.push(B.aC(new A.XL(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.mR(l,B.bA(l,B.af(q,C.D,l,C.h,C.i),l,l,C.dB,l,3),C.a9,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.Ug.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aP(4)
return B.b7(r,B.l(this.c+" \u2014",r,r,r,B.E(C.u,9,C.r),r,r,r),C.t,r,r,new B.b4(C.an,r,r,q,r,r,C.H),r,r,r,r,C.no,r,r,r)}w=q>=0
v=w?C.aD:C.ax
u=v.fm(0.12)
t=B.cS(v,0.7)
s=B.aP(4)
return B.b7(r,B.ap(B.b([B.ct(w?F.a8R:D.a8Q,v,r,10),F.ayE,B.l(this.c+" "+C.e.ak(q,1)+" %",r,r,r,B.E(v,9,C.r),r,r,r)],x.p),C.l,r,C.h,C.O,0,r,r),C.t,r,r,new B.b4(u,r,t,s,r,r,C.H),r,r,r,r,C.no,r,r,r)}}
A.XL.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ez(v,j[v]))
u=C.b.kk(j,new A.bm6())
t=C.b.kk(j,new A.bm7())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bm8(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4N(k,!1)
w=B.b([A.aJL(k,2,A.ax1(!1,C.m.fm(0.16),0,k,!0,D.vP),C.m,0.35,k,D.DR,k,!0,!1,!0,!1,D.F9,!1,10,D.Y4,!0,C.lv,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.O4(A.bvT(k,k,k,D.akP,l,D.BF,D.DN,D.DS,w,D.aez,k,m,k,n,D.X9,D.akQ,D.a89),C.aw,C.ah,k,k)}}
A.Tx.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLM
w=C.b.fO(p,0,new A.b53())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axa(B.b([A.a0r(q,q,D.B7,q,C.m,q,q,q,r.b,6),A.a0r(q,q,D.B7,q,C.k,q,q,q,r.c,6)],t),2,q,q,s))}return B.cf(A.bBK(A.ax3(q,q,u,q,q,A.a4N(q,!1),q,new A.yt(!0,!0,q,new A.b54(),A.ZT(),!1,q,A.auF(),A.ZT()),q,v,q,q,new A.uM(!0,new A.pa(16,q,new A.q5(!0,new A.b55(this),46,q),!0),D.kt,D.kt,new A.pa(16,q,new A.q5(!0,new A.b56(p),26,q),!0)))),this.d,q)},
aLu(d){if(Math.abs(d)>=1000)return C.e.ak(d/1000,1)+" k"
return C.e.ak(d,0)}}
A.TF.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b5P(),w),x.i)
C.b.L(o,new B.ab(u,new A.b5Q(),w))
t=C.b.fO(o,0,new A.b5R())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axa(B.b([A.a0r(q,q,q,q,C.m,q,q,q,v[s],14),A.a0r(q,q,q,q,C.aD,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cf(A.bBK(A.ax3(q,q,n,q,q,A.a4N(q,!1),q,D.DS,q,o,q,q,new A.uM(!0,D.kt,D.kt,D.kt,new A.pa(16,q,new A.q5(!0,new A.b5S(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.F,q,3)}}
A.amh.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aLL
w=new B.ab(k,new A.beO(),B.ad(k).i("ab<1,F>")).kk(0,new A.beP())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.l(r.b,m,m,m,new B.O(!0,C.k,m,l,C.bH,m,14,C.r,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dw()
o=p.ar(r.f)
q=B.af(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.O(!0,C.u,m,l,C.bH,m,12,C.aJ,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.D,m,C.h,C.i)
o=r.d
p=p.ar(o)
n=new B.aS(4,4)
o=B.b([new B.iw(C.aA,C.h,C.i,C.l,m,C.bz,m,0,B.b([new B.mN(1,C.eN,q,m),C.aU,B.l(p,m,m,m,new B.O(!0,C.k,m,"Bricolage Grotesque",C.bH,m,16,C.r,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cX,new B.Dm(new B.d3(n,n,n,n),C.bM,B.O7(C.an,8,C.e.bI(o/w,0,1),D.AW),m)],v)
q=C.b.ga9(k)
if(r!==q)q=B.L(r)===B.L(q)&&B.ZW(r.gbF(),q.gbF())
else q=!0
if(!q)o.push(C.w)
C.b.L(u,o)}return B.bA(m,B.af(u,C.l,m,C.h,C.i),m,m,C.F,m,3)}}
A.aiH.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aC(new A.C7("Aktive Kunden",""+s,u),1)
w=B.aC(new A.C7("K\xe4ufe",""+t.a,u),1)
v=$.dw()
return B.bA(u,B.ap(B.b([s,w,B.aC(new A.C7("\xd8-Warenkorb",v.ar(t.d),u),1),B.aC(new A.C7("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.l,u,C.h,C.i,0,u,u),u,u,C.F,u,3)}}
A.C7.prototype={
u(d){var w=null
return B.af(B.b([B.l(this.c.toUpperCase(),w,w,w,B.E(C.u,10,C.r).fZ(0.6),w,w,w),C.bW,B.l(this.d,w,w,w,B.c1(C.k,20,C.r),w,w,w)],x.p),C.D,w,C.h,C.O)}}
A.as4.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.bnQ(),B.ad(m).i("ab<1,F>")).kk(0,new A.bnR()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.l(u.b,1,C.ai,o,new B.O(!0,C.k,o,n,C.bH,o,13,C.r,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.l(""+u.c+"\xd7 ",o,o,o,new B.O(!0,C.u,o,n,C.bH,o,12,C.Q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dw().ar(r)
p=new B.aS(4,4)
r=B.b([new B.iw(C.aA,C.h,C.i,C.l,o,C.bz,o,0,B.b([new B.mN(1,C.eN,t,o),s,B.l(q,o,o,o,new B.O(!0,C.k,o,n,C.bH,o,13,C.r,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.bb,new B.Dm(new B.d3(p,p,p,p),C.bM,B.O7(C.an,6,C.e.bI(r/l,0,1),D.AW),o)],k)
t=C.b.ga9(m)
if(u!==t)t=B.L(u)===B.L(t)&&B.ZW(u.gbF(),t.gbF())
else t=!0
if(!t)r.push(C.W)
C.b.L(j,r)}return B.bA(o,B.af(j,C.l,o,C.h,C.i),o,o,C.F,o,3)}}
A.wE.prototype={
u(d){var w=null
return B.bA(w,B.l(this.c,w,w,w,B.E(C.u,13,C.n),w,w,w),C.ag,w,C.F,w,3)}}
A.ah_.prototype={
ds(d,e){return B.ds(e.ao($.bu8(),x.fM),new A.b3w(this,d,e),new A.b3x(),new A.b3y(),!1,!0,!1,x.h,x.l)}}
A.Ba.prototype={
W(){return new A.T9()},
aYM(){return this.d.$0()}}
A.T9.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aP()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fw(J.an(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bP)
for(t=0;t<8;++t){s=D.pv[t].a
if(v)r=""
else{r=B.b_(J.a3(w,s))
if(r==null)r=null
r=C.e.ak(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bJ(new B.cQ(r,C.bJ,C.aR),$.ag()))}q.e!==$&&B.b2()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c7(v,v.r,v.e,B.j(v).i("c7<2>"))
while(v.t()){w=v.d
w.T$=$.ag()
w.R$=0}this.an()},
rt(d){var w=this.e
w===$&&B.a()
w=C.d.bd(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.it(B.b0(w,",","."))
return w==null?0:w},
a4a(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pv[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.e.ak(u,2)
s=B.b0(s,".",",")
t.lI(0,t.a.y4(C.aR,C.bJ,s))}}this.J(new A.b3k())},
aFk(){this.a4a(D.aoN)
this.c.P(x.q).f.bk(D.azm)},
HX(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HX=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.aT(a1)
for(e=0;e<8;++e)a2.E(0,D.pv[e].a)
q=a2
t=4
w=7
return B.k($.aEk.cv().zq(B.b(["csv","txt"],x.s),C.xE,!0),$async$HX)
case 7:p=a5
a2=p
o=a2==null?null:J.JO(a2.a).c
if(o==null){w=1
break}n=C.ap.adN(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BK.ce(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.avo(l,B.bI("[;,\t]",!0,!1,!1))
if(J.c5(k)<2)continue
j=C.d.bd(J.a3(k,0)).toLowerCase()
i=J.CA(q,j)?j:D.ar_.h(0,j)
if(i==null)continue
d=C.d.bd(C.b.n6(J.bOM(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.it(h)
if(g!=null)J.eK(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bk(D.ayZ)
w=1
break}r.a4a(m)
r.c.P(x.q).f.bk(B.c9(null,null,null,null,null,C.p,null,B.l(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HX,v)},
I8(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I8=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3l(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0k("upsert_finance_balance",B.a5(["p_as_of",C.d.a_(n.ec(),0,10),"p_cash_and_bank",q.rt("cash_and_bank"),"p_receivables",q.rt("receivables"),"p_inventory_value",q.rt("inventory_value"),"p_other_current_assets",q.rt("other_current_assets"),"p_fixed_assets",q.rt("fixed_assets"),"p_current_liabilities",q.rt("current_liabilities"),"p_long_term_liabilities",q.rt("long_term_liabilities"),"p_equity",q.rt("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I8)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYM()
o=q.c
o.toString
B.bm(o,!1).fc()
q.c.P(x.q).f.bk(D.az2)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b3m(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I8,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c1(C.k,18,C.r),r,r,r),p=s.f?r:new A.b3o(s,d),o=s.d
o===$&&B.a()
p=B.i5(D.abi,B.l("Stichtag: "+C.d.a_(o.ec(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aC(B.i5(D.acn,D.aF6,o?r:s.gaEf(),r),1)
v=x.p
w=B.b([p,C.W,B.ap(B.b([w,C.aU,B.aC(B.i5(D.acc,D.aEW,o?r:s.gaFj(),r),1)],v),C.l,r,C.h,C.i,0,r,r),C.w],v)
for(u=0;u<8;++u){p=D.pv[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.f4(r,C.aT,!1,r,!0,C.p,r,B.fl(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a9,!0,r,!0,r,!1,r,C.aZ,r,r,r,r,C.iE,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ar,r,C.a4,r,r,r,r),C.W],v))}w.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.u,11,C.n),r,r,r))
p=B.cf(B.fi(B.af(w,C.ae,r,C.h,C.O),r,r,r,C.S),r,380)
o=s.f
w=B.dT(C.d9,r,r,o?r:new A.b3p(d),r,r)
o=o?r:s.gaF2()
t=B.dH(C.m,C.C,r,r,r,r,r)
return B.mv(B.b([w,B.dX(s.f?F.YC:C.ey,o,t)],v),C.C,p,q)}}
A.bd.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.ZW(this.gbF(),e.gbF())
else w=!0
return w},
gB(d){return(B.fg(B.L(this))^B.bJK(this.gbF()))>>>0},
j(d){B.bD_()
return B.L(this).j(0)}}
A.Kx.prototype={
W(){return new A.Ta(B.y(x.S,x.J),new A.axd(B.y(x.x,x.gF)),null,null)}}
A.Ta.prototype={
u(d){var w,v=this,u=v.a1Y(),t=v.CW
t.toString
t=v.a1Z(t.aw(0,v.gh6().gp(0)))
w=v.a1Z(u)
v.a.toString
return new A.Kr(new A.a0q(t,w,null),u,null)},
a1Z(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axa(s.c,s.d,!1,r,s.a))}return d.aQI(w)},
a1Y(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UN(t.ch)
if(r)s=w.a
r=t.y
t=t.aRE(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQJ(A.buE(!1,!0,!0,v.d,v.c,u.gat3(),v.f,v.e))}return t},
at4(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagh()||e==null||e.a==null){w=v.cy
v.J(w.gaQ8(w))
return}v.J(new A.b3B(v,e))},
m1(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1Y(),new A.b3C(w)))}}
A.nO.prototype={
Vo(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ax3(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRE(d,e){return this.Vo(null,null,d,e)},
aQJ(d){return this.Vo(null,d,null,null)},
aQI(d){return this.Vo(d,null,null,null)},
Xk(d,e,f){var w,v,u,t=A.kA(d.ch,e.ch,f,A.c2t(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bD5(d.d,e.d,f),q=A.bF3(d.e,e.e,f),p=A.bD3(d.c,e.c,f),o=e.a
o=A.a4N(B.a0I(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.ax3(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bD0(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbF(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ax2.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fI.prototype={
gd4(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axb(),B.ad(v).i("ab<1,F>")).kk(0,new A.axc())
v=v.length
return w+(v-1)*this.d},
gbF(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.io.prototype={
gbF(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.my.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0n.prototype={
gbF(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0s.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adD.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0t.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CX.prototype={
gbF(){return[this.a,this.b,C.cZ,C.x,null]}}
A.Ky.prototype={}
A.a0u.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xB.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xk(v,w,d)}}
A.agW.prototype={}
A.ah2.prototype={}
A.ah3.prototype={}
A.ah5.prototype={}
A.ah6.prototype={}
A.ah7.prototype={}
A.ah8.prototype={}
A.ah9.prototype={}
A.aha.prototype={}
A.axd.prototype={
UN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ul(0,0,!1)
v=new A.zg(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ul(t,u,!0)}w=null
try{w=C.b.p7(d,new A.axe())}catch(s){return new A.ul(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ul(q,r,!1)
u.m(0,v,j)
return j}}
A.ul.prototype={
gbF(){return[this.a,this.b,this.c]}}
A.ah4.prototype={}
A.axf.prototype={
i8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a08(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acH(t,A.buD(w,t.a),u)
l.y=u
l.aT0(e,u,f)
l.ams(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aT9(d,e,m,t,r,s,n,o,f)}}},
acH(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dW("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iY(p,B.ad(p).i("iY<1>")).aB(0,new A.axg(t,q,r,s))
w.push(new A.a5w(q))}return w},
aT0(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=b4.y,t=b4.x,s=v.c,r=x.v,q=0;q<w.length;++q)for(p=w[q].c,o=0;o<p.length;++o){n=p[o]
m=n.e
l=m/2
k=n.f
if(k==null){j=new B.aS(l,l)
k=new B.d3(j,j,j,j)}i=n.w
h=b7[q].b[o]
g=h-l
f=h+l
j=k.a
e=k.b
d=k.c
a0=k.d
a1=Math.max(j.b,e.b)+Math.max(d.b,a0.b)
a2=n.b
a3=n.a
if(a2!==a3){if(a2>a3){a4=b3.dG(Math.max(t,a3),b5,b8)
a5=B.PE(g,Math.min(b3.dG(a2,b5,b8),a4-a1),f,a4,d,a0,j,e)}else{a6=b3.dG(Math.min(u,a3),b5,b8)
a5=B.PE(g,a6,f,Math.max(b3.dG(a2,b5,b8),a6+a1),d,a0,j,e)}j=b3.f
j===$&&B.a()
e=n.c
j.r=(e==null?C.G:e).gp(0)
j.sf_(null)
v.eh(a5,b3.f)
j=n.y
if(j.length!==0)for(a7=0;a7<j.length;++a7){a8=j[a7]
e=a8.a
a9=b3.dG(e,b5,b8)
d=a8.b
b0=b3.dG(d,b5,b8)
b3.f.r=a8.c.gp(0)
b1=d<e?new B.H(g,a9,f,b0):new B.H(g,b0,f,a9)
J.bi(s.save())
s.clipRect(B.et(b1),$.nE()[1],!0)
v.eh(a5,b3.f)
s.restore()
b3.aT7(b6,a8,a7,j.length,m,a5,b5,b8)}m=i.b
if(m>0){j=i.a
j=j.gei(j)>0}else j=!1
if(j){j=b3.r
j===$&&B.a()
e=i.a
j.r=e.gp(e)
j.c=m
m=$.ai()
j=B.b([],r)
b2=new B.cl(m.r,C.ac,null,null,j)
j.push(new B.hi(a5))
b2.rr()
v.fL(A.aAc(b2,n.r),b3.r)}}}},
aT9(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AV(a5,C.dC,a5,a5,a5,B.de(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lz().a_9(a8,a7.b),a7.a),C.cZ,C.x,a5,b6.c,C.by)
w.agz(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbD(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dG(s,a6,b6)
q=b4.a
p=a4.dG(q,a6,b6)
o=b1.b
n=u+o.geu()
m=v+4+(o.gd1(0)+o.gd5(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aHs)j=v===D.Zh&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_a(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aS(s,s)
e=B.FE(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lz().Kn(new B.I(v,t),d).b
s=$.lz()
q=w.b
p=q.c
q=q.a.c
a0=s.Kn(new B.I(p,q.gbD(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiQ()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.W0(d,new A.axh(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aT7(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gei(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dG(w,j,k)
u=e.a
t=n.dG(u,j,k)
w=u<w
u=w?new B.aS(i.z,i.Q):C.a3
s=w?new B.aS(i.x,i.y):C.a3
r=w?C.a3:new B.aS(i.e,i.f)
w=w?C.a3:new B.aS(i.r,i.w)
q=B.PE(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a3:new B.aS(i.z,i.Q)
p=v?C.a3:new B.aS(i.x,i.y)
o=v?new B.aS(i.e,i.f):C.a3
q=B.PE(w,s,u,r,t,p,o,v?new B.aS(i.r,i.w):C.a3)}else q=B.bwB(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eh(q,n.r)},
WF(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acH(b2,A.buD(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0u(d,q,a0,o,a2,a1,new A.ez(d.a,v),new B.r(n,t))}}return null}}
A.a5w.prototype={}
A.a0q.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcS(),t=new A.axf()
t.a1g()
$.ai()
w=B.aW()
w.b=C.bf
t.f=w
w=B.aW()
w.b=C.aX
t.r=w
w=B.aW()
w.b=C.bf
w.r=C.y.gp(0)
t.w=w
w=B.aW()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aaM(this.d,v,u,t,d,C.b6,new B.bq(),B.aL(x.g))
t.bl()
t.YZ(v.cy)
t.afN()
return t},
bz(d,e){e.sih(0,this.d)
e.sYK(this.e)
e.scS(B.bu(d,null,x.w).w.gcS())
e.v=d
e.bb()}}
A.aaM.prototype={
sih(d,e){if(this.av.k(0,e))return
this.av=e
this.bb()},
sYK(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0R(d.cy)
w.bb()},
scS(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.c
J.bi(s.save())
s.translate(e.a,e.b)
w=u.v
v=u.gC(0)
u.h0.i8(w,new A.a0V(t,v),new A.vz(u.av,u.i4,u.cZ,x.Q))
s.restore()},
a_1(d){var w=this,v=w.gC(0)
return new A.Ky(w.h0.WF(d,v,new A.vz(w.av,w.i4,w.cZ,x.Q)))}}
A.a0e.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CV.prototype={
K(){return"AxisSide."+this.b}}
A.tn.prototype={}
A.q5.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acb.prototype={
gbF(){return[!1,0,0,0]}}
A.pa.prototype={
gbF(){return[this.b,this.a,this.c,!0]}}
A.uM.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ez.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ez))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gB(d){return C.e.gB(this.a)^C.e.gB(this.b)}}
A.yt.prototype={
gbF(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pA.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adF.prototype={
gbF(){return[this.a,this.b]}}
A.PI.prototype={
gbF(){return[this.a,this.b]}}
A.mS.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nj.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kV.prototype={
gbF(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lg.prototype={
gbF(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5H.prototype={
gbF(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae1.prototype={
gbF(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mx.prototype={
gbF(){return[this.a,this.b,!0]}}
A.uL.prototype={}
A.ME.prototype={
aeb(d,e,f){var w,v
$.ai()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iA(f,this.b,w)},
gbF(){return[this.a,this.b,this.c,0]}}
A.agR.prototype={}
A.agV.prototype={}
A.ak1.prototype={}
A.akh.prototype={}
A.aki.prototype={}
A.akk.prototype={}
A.akl.prototype={}
A.al6.prototype={}
A.al5.prototype={}
A.al7.prototype={}
A.aoy.prototype={}
A.aqt.prototype={}
A.aqu.prototype={}
A.as8.prototype={}
A.asN.prototype={}
A.asM.prototype={}
A.asO.prototype={}
A.awR.prototype={
Ms(d,e,f,g,h,i){return new B.ih(this.aWM(d,e,f,g,h,i),x.g4)},
aWL(d,e,f,g){return this.Ms(d,e,f,!0,g,!0)},
aWM(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Ms(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lz().ak1(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.e.h5(u-s,v)*v===u
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
A.Kq.prototype={
a1g(){var w,v=this
$.ai()
w=B.aW()
w.b=C.aX
v.a=w
w=B.aW()
w.b=C.bf
v.b=w
w=B.aW()
w.b=C.bf
v.e=w
w=B.aW()
w.b=C.aX
v.c=w
v.d=B.aW()},
i8(d,e,f){var w=this
w.a09(d,e,f)
w.aSX(e,f)
w.aT6(e,f)
w.aT5(e,f)},
aT5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lz().OA(w.a,a1.r-a1.f)
u=$.btF().Ms(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fk(u.a(),u.$ti.i("fk<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l8(n,m)
if(j!=null){p.r=C.E.gp(0)
p.sf_(j.mN(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.sf_(a0)}k=l.c
p.c=k
if(k===0){p.sf_(a0)
k=B.c_(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.DC(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lz().OA(w.b,a1.y-a1.x)
u=$.btF().Ms(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fk(u.a(),u.$ti.i("fk<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l8(n,m)
if(k!=null){q.r=C.E.gp(0)
q.sf_(k.mN(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.sf_(a0)}p=f.c
q.c=p
if(p===0){q.sf_(a0)
p=B.c_(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.DC(n,m,d.a,f.d)}},
aSX(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.eV(new B.H(0,0,0+w.a,0+w.b),this.b)},
aT6(d,e){var w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(w=d.a,v=n.b,u=0;u<l.length;l.length===k||(0,B.G)(l),++u){t=l[u]
s=B.l8(new B.r(o.ff(t.a,n,e),0),new B.r(o.ff(t.b,n,e),v))
r=o.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.sf_(p.mN(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.sf_(null)}w.eV(s,o.e)}m=m.a
l=m.length
if(l!==0)for(k=d.a,w=n.a,u=0;u<m.length;m.length===l||(0,B.G)(m),++u){t=m[u]
s=B.l8(new B.r(0,o.dG(t.a,n,e)),new B.r(w,o.dG(t.b,n,e)))
v=o.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.sf_(q.mN(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.sf_(null)}k.eV(s,o.e)}},
aT4(d,e,f){var w,v
this.a09(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aec(d,e,f,w)
if(v.b.length!==0)this.aTb(d,e,f,w)},
aec(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.c,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=f.dG(o,a1,a0)
m=new B.r(0,n)
o=f.dG(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l8(m,l)
if(j!=null){n.r=C.E.gp(0)
n.sf_(j.mN(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.sf_(null)}k=p.c
n.c=k
if(k===0){n.sf_(null)
k=B.c_(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.DC(m,l,f.c,p.d)
n=p.r
h=n.gd4(n).eM(0,2)
g=C.e.al(o,n.gbD(n).eM(0,2))
J.bi(r.save())
r.translate(h,g)
s.vt(n.gNn())
r.restore()
n=p.f
h=n.gd4(n).eM(0,2)
o=C.e.al(o,n.gbD(n).eM(0,2))
k=f.d
k===$&&B.a()
s.aed(0,n,new B.r(h,o),k)}}},
aTb(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.c,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=d.ff(o,a3,a2)
m=new B.r(n,0)
o=d.ff(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.l8(m,l)
if(j!=null){n.r=C.E.gp(0)
n.sf_(j.mN(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.sf_(null)}k=p.c
n.c=k
if(k===0){n.sf_(null)
k=B.c_(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.DC(m,l,d.c,p.d)
n=p.r
h=n.gd4(n).eM(0,2)
g=n.gbD(n).eM(0,2)
f=C.e.al(o,h)
e=C.e.al(u,g)
J.bi(r.save())
r.translate(f,e)
s.vt(n.gNn())
r.restore()
n=p.f
h=n.gd4(n).eM(0,2)
g=n.gbD(n).ad(0,2)
o=C.e.al(o,h)
k=C.e.al(u,g)
j=d.d
j===$&&B.a()
s.aed(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_a(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kr.prototype={
galN(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galO(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galP(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galL(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am7(d){var w,v=this,u=null,t=v.d,s=A.bvq(t.d),r=t.a
r=r.a&&A.bPl(r.b)?r.b:u
w=B.b([B.b7(u,v.c,C.t,u,u,new B.b4(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.awT(w)
if(v.galN())C.b.hf(w,s.$1(!0),new A.AH(D.B3,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galP())C.b.hf(w,s.$1(!0),new A.AH(D.mE,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galO())C.b.hf(w,s.$1(!0),new A.AH(D.B4,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galL())C.b.hf(w,s.$1(!0),new A.AH(D.dM,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
u(d){return B.iW(new A.awS(this))}}
A.Rb.prototype={
W(){return new A.XA(new B.be(null,x.eF))}}
A.XA.prototype={
ayA(){switch(this.a.c.a){case 0:return C.ed
case 1:return C.fH
case 2:return C.du
case 3:return C.fh}},
az5(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayC(d){this.a.toString
return},
aA(){this.aP()
$.cB.x1$.push(this.ga4F())},
ba(d){this.bE(d)
$.cB.x1$.push(this.ga4F())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.az5()
return B.Sn(B.b0S(0,B.b7(v.ayA(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.acc.prototype={
bm(d){return A.bPc(this.f,this.r,this.e)},
bz(d,e){var w=this.e
if(e.v!==w){e.v=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0f.prototype={
hq(d){if(!(d.b instanceof B.hp))d.b=new B.hp(null,null,C.q)},
hX(d){if(this.v===C.aA)return this.ye(d)
return this.adQ(d)},
aLF(d){switch(this.v.a){case 0:return d.b
case 1:return d.a}},
a9x(d){switch(this.v.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a9w(d,B.hC())
switch(this.v.a){case 0:return d.c1(new B.I(w.a,w.b))
case 1:return d.c1(new B.I(w.b,w.a))}},
a9w(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.v===C.aA?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.v.a){case 0:q=B.h2(u,null)
break
case 1:q=B.h2(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9x(p)
t=Math.max(t,o.aLF(p))
m=r.aG$}return new A.bep(n<1/0?n:s,t)},
cC(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a9w(o,B.mt()),m=n.a,l=n.b
switch(p.v.a){case 0:p.fy=o.c1(new B.I(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c1(new B.I(l,m))
p.gC(0)
p.gC(0)
break}w=p.af$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.V[u]
r=w.fy
q=s.b-p.a9x(r==null?B.Y(B.W("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.v.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e7(d,e){return this.yf(d,e)},
aO(d,e){if(this.gC(0).gZ(0))return
this.a3.sbg(0,null)
this.vj(d,e)},
l(){this.a3.sbg(0,null)
this.ap6()}}
A.bep.prototype={}
A.awU.prototype={}
A.jX.prototype={
gbF(){return[this.a,this.b]}}
A.nN.prototype={}
A.agS.prototype={}
A.agT.prototype={
aK(d){var w,v,u
this.ft(d)
w=this.af$
for(v=x.L;w!=null;){w.aK(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fj(0)
w=this.af$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.agU.prototype={}
A.T7.prototype={
l(){var w,v,u
for(w=this.Wd$,v=w.length,u=0;u<v;++u)w[u].l()
this.ir()}}
A.AH.prototype={
goK(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.du
case 1:return C.fh
case 2:return C.ed
case 3:return C.fH}},
gb0u(){var w=this.d,v=A.bvq(w.d),u=A.bD2(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ad(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ad(0,new B.al(u.a,0,u.c,0))}},
gaiD(){var w=this.d,v=A.bD2(w.a),u=A.bvq(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd5(0)+(v.gd1(0)+v.gd5(0))
case 1:case 3:return u.geu()+v.geu()}},
aXv(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goK().c.d
if(o==null)o=$.lz().OA(d,f-e)
w=p.c
v=w!==D.mE
if((!v||w===D.dM)&&p.d instanceof A.nO){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.buD(u,d)
w=new B.iY(t,B.ad(t).i("iY<1>"))
s=w.giB(w).eQ(0,new A.aYV(u),x.W).fQ(0)}else{r=$.btF()
w=!v||w===D.dM
v=p.d
q=r.aWL(w?v.w:v.z,o,f,e)
v=B.oj(q,new A.aYW(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.j(v).i("t.E"))}w=B.ad(s).i("ab<1,nN>")
w=B.Q(new B.ab(s,new A.aYX(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goK()
w=j.goK()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b7(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mE
u=!v
t=!u||w===D.dM
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dM?C.S:C.aA
q=B.b([],x.p)
if(w===D.B3||v)j.goK()
if(j.goK().c.a){v=!u||w===D.dM?r:j.goK().c.c
p=!u||w===D.dM?j.goK().c.c:r
o=j.gb0u()
n=!u||w===D.dM?C.aA:C.S
j.gaiD()
m=j.gaiD()
l=!u||w===D.dM
k=j.d
l=l?k.f:k.x
u=!u||w===D.dM?k.r:k.y
q.push(B.b7(i,A.bWE(new A.awU(),n,j.aXv(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B4||w===D.dM)j.goK()
return new B.f_(t,i,i,B.bS5(q,C.l,s,i,C.h,C.O,0,i,i,C.bz),i)}}
A.a0w.prototype={
gbF(){return[this.a,this.b]}}
A.a4M.prototype={
gbF(){return[this.a,this.b]}}
A.ML.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4O.prototype={
gabZ(d){return!1},
gbF(){return[!1,!1,!1,!1]}}
A.axq.prototype={}
A.aDK.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahd.prototype={}
A.ake.prototype={}
A.akf.prototype={}
A.akm.prototype={}
A.KB.prototype={
i8(d,e,f){}}
A.vz.prototype={}
A.ho.prototype={
gdM(){return null},
gagh(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.MK
if(w)return!0
return!(v instanceof A.MH)&&!(v instanceof A.MG)&&!(v instanceof A.MI)&&!(v instanceof A.MF)&&!w&&!(v instanceof A.MJ)}}
A.a4S.prototype={
gdM(){return this.a.b}}
A.a4T.prototype={
gdM(){return this.a.b}}
A.a4U.prototype={
gdM(){return this.a.b}}
A.MG.prototype={}
A.MH.prototype={}
A.a4X.prototype={
gdM(){return this.a.b}}
A.MJ.prototype={}
A.MK.prototype={
gdM(){return this.a.b}}
A.a4R.prototype={
gdM(){return this.a.b}}
A.a4Q.prototype={
gdM(){return this.a.b}}
A.MF.prototype={
gdM(){return this.a.b}}
A.a4V.prototype={
gdM(){return this.a.gdM()}}
A.a4W.prototype={
gdM(){return this.a.gdM()}}
A.MI.prototype={
gdM(){return this.a.gdM()}}
A.FQ.prototype={
YZ(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afN(){var w=this,v=null,u=w.aj=B.bwg(v,v)
u.ay=new A.aU3(w)
u.ch=new A.aU4(w)
u.CW=new A.aU5(w)
u.cy=new A.aU6(w)
u.cx=new A.aU7(w)
u=w.aE=B.GE(v,-1,v)
u.v=new A.aU8(w)
u.a4=new A.aU9(w)
u.U=new A.aUa(w)
u=w.bx=B.a6W(v,w.a3,v)
u.p3=new A.aUb(w)
u.p4=new A.aUc(w)
u.RG=new A.aUd(w)},
cC(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.I(w.b,w.d)},
dC(d){return new B.I(d.b,d.d)},
kG(d){return!0},
mY(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bx
w===$&&B.a()
w.oH(d)
w=v.aE
w===$&&B.a()
w.oH(d)
w=v.aj
w===$&&B.a()
w.oH(d)}else if(x.gJ.b(d))v.l6(new A.a4W(d))},
gMV(d){return new A.aUe(this)},
gMX(d){return new A.aUf(this)},
l6(d){var w,v,u=this
if(u.U==null)return
w=d.gdM()
v=w!=null?u.a_1(w):null
u.U.$2(d,v)
u.a4=C.b6},
gKP(d){return this.a4},
gFt(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.ft(d)
this.aq=!0},
aF(d){this.aq=!1
this.fj(0)},
$ijB:1}
A.O4.prototype={
W(){return new A.Vr(B.b([],x.r),B.y(x.S,x.J),new A.aJN(B.y(x.y,x.dj)),null,null)}}
A.Vr.prototype={
u(d){var w,v=this,u=v.a4H(),t=v.CW
t.toString
t=v.abw(t.aw(0,v.gh6().gp(0)))
w=v.abw(u)
v.a.toString
return new A.Kr(new A.a6N(t,w,null),u,null)},
abw(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e7>")
w=B.Q(new B.ab(w,new A.beu(this,d),v),v.i("aw.E"))
return d.aRB(w,this.cy)},
a4H(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UN(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRQ(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRe(new A.EI(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazV(),t.c,t.d))}return r},
azW(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagh())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bes(v))
return}v.J(new A.bet(v,e))},
m1(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4H(),new A.bev(w)))}}
A.pK.prototype={
Xk(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a4N(B.a0I(d.a.b,j.b,f),j.a)
w=A.bD0(d.at,e.at,f)
v=A.bD3(d.c,e.c,f)
u=A.bD5(d.d,e.d,f)
t=A.bF3(d.e,e.e,f)
s=A.kA(d.ch,e.ch,f,A.c4x(),x.cz)
s.toString
r=A.kA(d.CW,e.CW,f,A.c4w(),x.bO)
r.toString
u=A.bvT(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vp(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bvT(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRQ(d,e,f,g){return this.Vp(null,null,d,e,f,g,null)},
aRe(d){var w=null
return this.Vp(w,d,w,w,w,w,w)},
aRB(d,e){var w=null
return this.Vp(d,w,w,w,w,w,e)},
gbF(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e7.prototype={
arJ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p7(n.a,new A.aJM())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
if(o.k(0,D.fP))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b2()
n.b=q
r.toString
n.c!==$&&B.b2()
n.c=r
s.toString
n.d!==$&&B.b2()
n.d=s
t.toString
n.e!==$&&B.b2()
n.e=t}},
adu(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aJL(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRl(d){return this.adu(d,null)},
aRn(d){return this.adu(null,d)},
gbF(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.O5.prototype={
gbF(){return[this.a]}}
A.a0p.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mz.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kw.prototype={
gbF(){return[!1,this.b,this.c,!0]}}
A.ys.prototype={
gbF(){return[this.a,this.b,this.c]}}
A.aJB.prototype={
K(){return"LabelDirection."+this.b}}
A.a4P.prototype={
gbF(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EI.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6O.prototype={
gbF(){return[4,C.hY,16,D.xB,0,120,A.c4z(),!1,!1,!1,0,C.J,A.c4y()]}}
A.mZ.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qf.prototype={}
A.rr.prototype={
gbF(){return[this.a,this.b,C.cZ,C.x,null]}}
A.to.prototype={
gbF(){return[this.a,this.b]}}
A.Gg.prototype={
gbF(){return[this.a]}}
A.O6.prototype={}
A.za.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xk(v,w,d)}}
A.ah0.prototype={}
A.ah1.prototype={}
A.ahe.prototype={}
A.akg.prototype={}
A.akj.prototype={}
A.alV.prototype={}
A.alW.prototype={}
A.alX.prototype={}
A.alZ.prototype={}
A.am_.prototype={}
A.am0.prototype={}
A.am1.prototype={}
A.aqs.prototype={}
A.as7.prototype={}
A.aJN.prototype={
UN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ya
u=new A.zg(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zb(s,r,q,t,!0)}w=null
try{w=C.b.p7(d,new A.aJO())}catch(p){return D.ya}v=null
try{v=C.b.p7(w.a,new A.aJP())}catch(p){return D.ya}o=v.a
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
if(f<m)m=f}e=new A.zb(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zb.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.alY.prototype={}
A.aJQ.prototype={
i8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabZ(0)){v=a3.b
u=v.a
v=v.b
$.ai()
a3.a.jn(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aQf(new B.H(0,0,u,v))}d.a08(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aT2(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSZ(a3,q,a4)
d.aT3(a3,q,a4)
d.amr(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gq(o)!==p.length)throw B.e(B.dW("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vj(q,i,j,k))}}d.aTa(a3,s,a4)
if(w.gabZ(0))a3.a.c.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aT8(a2,a3,v,f,new A.Gg(g),a4)}},
aSZ(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvp(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.ZA(o,e,u,f)
s=p.ajU(o,e,t,u,f)
r=p.ZC(o,e,t,u,f,!0)
q=p.ajT(o,e,t,u,f)
p.aT1(d,s,p.Zz(o,e,t,u,f,!0),f,e)
p.aSW(d,q,r,f,e)
p.aT_(d,t,e)
p.aSY(d,t,e,f)}},
aT2(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bvp(a6.a),a9=A.bvp(a7.a)
if(a8.length!==a9.length)throw B.e(B.bx("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.c,v=b2.c,u=b2.d,t=$.bZ.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cA<1>")
k=B.Q(new B.cA(m,l),l.i("aw.E"))
j=a3.ZA(a4,a6,n,b3)
i=a3.ZB(a4,a7.aRn(k),k,b3,j)
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
m=a3.ff(h,a4,b3)
l=a3.dG(g,a4,b3)
d=a3.ff(f,a4,b3)
a0=a3.dG(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.E.gp(0)
a1.sf_(u.mN(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.sf_(null)}$.ai()
m=new B.mD(C.dd,C.bf,C.e5,C.ew,C.dS)
l=a5.b
if(l!=null)l.kj(m)
a2=m.jk()
m=B.et(new B.H(0,0,s,r))
l=$.bZ.b
if(l===$.bZ)B.Y(B.vh(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fL(i,a3.r)
w.restore()}},
aT3(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZG(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).aeb(s,q,new B.r(p,o))}}},
aTa(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fV(b3,new A.aJT())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.ZG(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.Y(B.rq(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lu(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lu(q.$2(m,k))))
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
b0=B.l8(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.sf_(a6.mN(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.sf_(null)}a4=a9.c
f.c=a4
if(a4===0){f.sf_(null)
a4=B.c_(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.DC(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.Y(B.rq(d.a))
f.aeb(t,j,new B.r(h,g))}}},
ZB(d,e,f,g,h){var w=this.ajV(d,e,f,g,h)
return w},
ZA(d,e,f,g){return this.ZB(d,e,f,g,null)},
ajV(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.ai().r,C.ac,null,null,B.b([],x.v)):a5,f=J.Z(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.ap(new B.ff(d,a0))
if(e===1)g.ap(new B.c8(d,a0))}else g.ap(new B.c8(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.q,t=1;t<e;t=o,u=j){s=i.ff(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.ff(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.ff(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Lu(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iy(r)
g.rr()}return g},
ZC(d,e,f,g,h,i){var w=this,v=B.Mq(f),u=J.Z(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.ff(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nS())
return v},
ajU(d,e,f,g,h){return this.ZC(d,e,f,g,h,!1)},
Zz(d,e,f,g,h,i){var w=this,v=B.Mq(f),u=J.Z(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.ff(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nS())
return v},
ajT(d,e,f,g,h){return this.Zz(d,e,f,g,h,!1)},
aT1(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.ff(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.ff(t.a,w,g)
s=r.r
s===$&&B.a()
A.bwf(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fL(e,r.r)},
aSW(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.bwf(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fL(e,r.r)},
aT_(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Ms(B.Mq(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kb:C.e5
u.e=C.ew
u.r=v.gp(0)
u.sf_(null)
u.c=f.x
u.r=v.gp(0)
$.lz()
u.y=new B.yg(C.aF,w.c*0.57735+0.5)
d.a.fL(A.aAc(e,f.cy).e3(w.b),this.f)},
aSY(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kb:C.e5
q.e=C.ew
q=f.b
q===$&&B.a()
q=s.ff(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.ff(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.bwf(t,f.r,f.w,new B.H(q,w,v,u))
t.y=null
t.c=f.x
A.bUw(t)
d.a.fL(A.aAc(e,f.cy),s.f)},
aT8(b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],x.eg),b0=b7.a,b1=A.bJc(b0),b2=J.Z(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dW("tooltipItems and touchedSpots size should be same"))
for(w=b8.c,v=0;v<b0.length;++v){u=b2.h(b1,v)
if(u==null)continue
t=$.lz().a_9(b3,u.b)
s=u.a
r=w.k(0,C.j_)?new B.kt(1):w
q=new B.tl(new B.hR(s,a7,a7,C.b6,a7,a7,a7,a7,a7,a7,t),C.cZ,C.x,r,a7,a7,a7,a7,C.by,a7,C.dC)
q.agz(120)
a9.push(q)}b2=a9.length
if(b2===0)return
for(p=0,o=0,n=0;w=a9.length,n<w;a9.length===b2||(0,B.G)(a9),++n){w=a9[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbD(w)}b2=a6.ff(b6.a,a8,b8)
t=a6.dG(b6.b,a8,b8)
l=p+C.hY.geu()
k=o+(w-1)*4+(C.hY.gd1(0)+C.hY.gd5(0))
j=t-k-16
i=a6.a_a(b2,l,D.xB,0)
b2=i+l
w=j+k
h=new B.aS(4,4)
g=B.FE(new B.H(i,j,b2,w),h,h,h,h)
f=b0[0]
for(t=b0.length,n=0;n<t;++n){e=b0[n]
if(e.b>f.b)f=e}b0=a6.z
b0===$&&B.a()
t=A.bJb(f)
b0.r=t.gp(t)
t=b2-i
w-=j
b0=$.lz().Kn(new B.I(t,w),0).b
d=new B.r(0,b0)
a0=new B.r(g.a,g.b)
a1=$.lz().Kn(new B.I(t,w),0)
if(!C.J.k(0,C.J)){s=a6.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b4.W0(0,new A.aJR(a6,b4,g),a0,d,new B.I(t,w))
for(s=a9.length,r=i+t/2,a2=a1.b,b2-=16,a3=i+16,a4=8,n=0;n<a9.length;a9.length===s||(0,B.G)(a9),++n){q=a9[n]
switch(A.bXg(q.r,q.w).a){case 0:a5=a3
break
case 2:a5=b2-q.b.c
break
default:a5=r-q.b.c/2
break}b4.W0(0,new A.aJS(b4,q,new B.r(a5,j+a4-a2+b0)),a0,d,new B.I(t,w))
a5=q.b.a.c
a4=a4+a5.gbD(a5)+4}},
ZG(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
WF(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akl(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fV(t,new A.aJU())
return t.length===0?null:t},
akl(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hf(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qf(s,f,g,C.b.he(w,v),v.a,v.b)}else return null}}
A.vj.prototype={}
A.a6N.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcS(),t=new A.aJQ()
t.a1g()
$.ai()
w=B.aW()
w.b=C.aX
t.f=w
w=B.aW()
w.b=C.bf
t.r=w
w=B.aW()
w.b=C.aX
t.w=w
w=B.aW()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a_r
t.x=w
w=B.aW()
w.b=C.aX
w.r=C.E.gp(0)
t.y=w
w=B.aW()
w.b=C.bf
w.r=C.y.gp(0)
t.z=w
w=B.aW()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.aaZ(this.d,v,u,t,d,C.b6,new B.bq(),B.aL(x.g))
t.bl()
t.YZ(v.cx)
t.afN()
return t},
bz(d,e){e.sih(0,this.d)
e.sYK(this.e)
e.scS(B.bu(d,null,x.w).w.gcS())
e.v=d
e.bb()}}
A.aaZ.prototype={
sih(d,e){if(this.av.k(0,e))return
this.av=e
this.bb()},
sYK(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0R(d.cx)
w.bb()},
scS(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.c
J.bi(s.save())
s.translate(e.a,e.b)
w=u.v
v=u.gC(0)
u.h0.i8(w,new A.a0V(t,v),new A.vz(u.av,u.i4,u.cZ,x.o))
s.restore()},
a_1(d){var w=this,v=w.gC(0)
return new A.O6(w.h0.WF(d,v,new A.vz(w.av,w.i4,w.cZ,x.o)))}}
A.Na.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a0V.prototype={
aQf(d){this.a.c.clipRect(B.et(d),$.nE()[1],!0)
return null},
aej(d,e){d.aO(this.a,e)},
W0(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.c
J.bi(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lz()
s.YI(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DC(d,e,f,g){var w=new B.cl($.ai().r,C.ac,null,null,B.b([],x.v))
w.ap(new B.ff(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.fL(A.aAc(w,g),f)}}
A.zg.prototype={
gbF(){return[this.a]}}
A.am8.prototype={}
A.a14.prototype={}
A.b1k.prototype={
Kn(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aY5(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aS(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aS(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aS(v,v)
s=d.d
return new B.d3(w,u,t,s.a>v||s.b>v?new B.aS(v,v):s)},
aY6(d,e){var w,v
if(d==null)return D.a_C
w=d.b
v=e/2
return d.aRq(w>v?v:w)},
OA(d,e){var w,v=Math.max(C.e.cw(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0h(w)},
b0h(d){if(d<1)return this.aK8(d)
return this.a8x(d)},
aK8(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.e.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8x(d*q)/q},
a8x(d){var w,v=C.f.j(C.e.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.e.aT(d)/10:d
if(w>=7.6)return 10*C.e.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.e.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.e.a1(Math.pow(10,v))
else return C.e.a1(Math.pow(10,v))},
akb(d){if(d>=1)return 1
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
a_9(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j5
w=e.a?u.w.bY(e):e
v=B.bM(d,C.vm)
v=v==null?null:v.ch
return v===!0?w.bY(C.mo):w},
ak1(d,e,f,g){var w=C.e.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qh)","A(ez)","~(u,fI)","F(e7,u)","S<~>()","F(F,qh)","bR(F,tn)","pA(F)","u(qf,qf)","I2(o4)","HJ(B,bE)","J0(o5)","vp(@)","wj(@)","e7(F)","CE(@)","ah(F,tn)","uK(dz<uK>)","E4(dz<aEw>)","F(vp)","F(wj)","wE(B,bE)","Ba(z)","~()","qh(@)","~(ho,Ky?)","xB(@)","F(io)","A(fI)","~(u,io)","~(@)","jX(nN)","c(nN)","jX(bD<u,F>)","jX(F)","nN(jX)","~(ho,O6?)","e7(e7)","lJ(Gs<lJ>)","za(@)","S<o5>(cj<o5>)","to(u)","uL(ez,F,e7,u)","rr(mZ)","A(e7)","u(vj,vj)","F(fI)","S<o4>(cj<o4>)","u(u,u,F)","fI(fI,fI,F)","io(io,io,F)","my(my,my,F)","CX?(fI,u,io,u)","D(fI)","c(F,tn)","ez(ez,ez,F)","A(F)","mS(mS,mS,F)","nj(nj,nj,F)","kV(kV,kV,F)","lg(lg,lg,F)","f(kV)","f(lg)","e7(e7,e7,F)","mz(mz,mz,F)","uL(ez,F,e7,u{size:F?})","A(ez,e7)","F(r,r)","v<to>(e7,v<u>)","y3(z)","v<rr>(v<mZ>)","D(mZ)","yq(f1<B?>)"])
A.aEs.prototype={
$1(d){var w=B.dn(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qh(J.an(v==null?"":v),A.oZ(w.h(0,"revenue_net")),A.oZ(w.h(0,"expense_net")),A.oZ(w.h(0,"result_net")))},
$S:z+24}
A.aEt.prototype={
$1(d){var w,v,u,t=B.dn(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.an(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.oZ(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.e.a1(u)
if(u==null)u=0
return new A.vp(s,r,w,v,u,A.oZ(t.h(0,"avg_basket")))},
$S:z+12}
A.aEu.prototype={
$1(d){var w,v=B.dn(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.an(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.e.a1(w)
if(w==null)w=0
return new A.wj(u,t,w,A.oZ(v.h(0,"gross")))},
$S:z+13}
A.aEL.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.an(v==null?"":v)
u=w.h(d,"name")
u=J.an(u==null?"":u)
t=w.h(d,"direction")
return new A.CE(v,u,J.an(t==null?"expense":t),A.u0(w.h(d,"net")),A.u0(w.h(d,"tax")),A.u0(w.h(d,"gross")))},
$S:z+15}
A.brp.prototype={
$1(d){return new A.uK(d.ao($.c3(),x.A))},
$S:z+17}
A.brq.prototype={
$1(d){return new A.E4(d.ao($.bO5(),x.D))},
$S:z+18}
A.bte.prototype={
$1(d){return E.aEv()},
$S:z+38}
A.brr.prototype={
$1(d){var w=d.ao($.xo(),x.P)
return d.ao($.ave(),x.a).FT(w)},
$S:z+40}
A.bro.prototype={
$1(d){var w=d.ao($.xo(),x.P)
return d.ao($.ave(),x.a).FO(w)},
$S:z+47}
A.brn.prototype={
$1(d){return this.ajJ(d)},
ajJ(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.c3(),x.A).hl("finance_balance_kpis",t),$async$$1)
case 3:s=r.dn(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:211}
A.aEr.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.ave(),x.a).pO(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEq.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.ave(),x.a).Lp(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEJ.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bu9()
if(s.e==null)B.Y(B.W(y.b))
s.gcz().cr(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEB.prototype={
$0(){return this.a.Jl(this.b,this.c)},
$S:0}
A.aEC.prototype={
$0(){return this.a.Bm(this.b,this.c)},
$S:0}
A.aED.prototype={
$0(){var w=x.z
return B.bm(this.a,!1).eL(B.eU(new A.aEA(),null,w),w)},
$S:0}
A.aEA.prototype={
$1(d){return F.CZ},
$S:z+69}
A.aEE.prototype={
$0(){return B.ob(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEF.prototype={
$0(){var w=this
return w.a.Bn(w.b,w.c,w.d)},
$S:0}
A.aEI.prototype={
$0(){return D.at5},
$S:137}
A.aEH.prototype={
$2(d,e){return new A.HJ(B.i(d),null)},
$S:z+10}
A.aEG.prototype={
$1(d){return new A.J0(d,null)},
$S:z+11}
A.aEz.prototype={
$1(d){var w=null,v=this.a,u=$.dM()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mv(B.b([B.dT(C.d9,w,w,new A.aEx(u),w,w),B.dX(F.uZ,new A.aEy(u),B.dH(C.m,C.C,w,w,w,w,w))],x.p),w,v,F.v_)},
$S:54}
A.aEx.prototype={
$0(){B.bm(this.a,!1).dn(!1)
return null},
$S:0}
A.aEy.prototype={
$0(){B.bm(this.a,!1).dn(!0)
return null},
$S:0}
A.bgK.prototype={
$0(){var w=this.a.aJ(0,$.xo().ghR(),x.V),v=E.aEv()
w.wK(0,v)
return v},
$S:0}
A.bgL.prototype={
$0(){var w=this.a.aJ(0,$.xo().ghR(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lJ(B.bO(B.aX(v),1,1,0,0,0,0),v)
w.wK(0,u)
return u},
$S:0}
A.bgM.prototype={
$0(){return this.a.II(this.b,this.c)},
$S:0}
A.bgJ.prototype={
$2(d,e){return new B.oG(B.U(d).aQM(B.U(d).ax.aRG(C.k,C.m)),e,null)},
$S:1007}
A.bmy.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dw(),s=A.NT(!1,C.nX,"Umsatz 7 %",t.ar(u.a),w),r=A.NT(!1,C.nX,"Umsatz 19 %",t.ar(u.b),w),q=A.NT(!0,D.a9A,"Umsatz netto",t.ar(u.c),w),p=A.NT(!1,D.a9z,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5v(1.7,B.b([s,r,q,p,A.NT(!0,C.xQ,"Ergebnis",n,o<0?C.ax:C.aD),A.NT(!1,C.fR,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jU,!0)},
$S:94}
A.aJA.prototype={
$0(){return D.at3},
$S:137}
A.aJz.prototype={
$2(d,e){var w=null
return B.bA(C.ax,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.k,13,C.n),w,w,w),C.eH,w,C.F,w,3)},
$S:219}
A.aJy.prototype={
$1(d){return new A.I2(d,null)},
$S:z+9}
A.beg.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dw(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("aw.E"),d=B.Q(new B.ab(g,new A.be5(),f),e)
i=A.jQ(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.be6(),f),e)
d=A.jQ(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.be7(),f),e)
k=A.jQ(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.e.ak(h.b,1)
v=B.Q(new B.ab(g,new A.be8(),f),e)
w=A.jQ(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.e.ak(h.a,1)
u=B.Q(new B.ab(g,new A.be9(),f),e)
v=A.jQ(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.e.ak(r.c,1)
t=B.Q(new B.ab(g,new A.bea(),f),e)
u=A.jQ(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.e.ak(h.c,1)
s=B.Q(new B.ab(g,new A.beb(),f),e)
t=A.jQ(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.bec(),f),e)
h=A.jQ(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.bed(m),f),e)
m=A.jQ(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.bee(l),f),e)
l=A.jQ(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.e.ak(j,1)
j=B.Q(new B.ab(g,new A.bef(j),f),e)
return B.a5v(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jQ(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jU,!0)},
$S:94}
A.be5.prototype={
$1(d){return d.b},
$S:z+0}
A.be6.prototype={
$1(d){return d.b/30},
$S:z+0}
A.be7.prototype={
$1(d){return d.d},
$S:z+0}
A.be8.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.be9.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bea.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.beb.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bec.prototype={
$1(d){return d.d},
$S:z+0}
A.bed.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bee.prototype={
$1(d){return this.a},
$S:z+0}
A.bef.prototype={
$1(d){return this.a},
$S:z+0}
A.beh.prototype={
$0(){return A.byd(this.b,1.45,new A.Tx(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bei.prototype={
$0(){return A.byd(this.b,1.6,new A.TF(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqy.prototype={
$1(d){var w=this,v=null,u=B.aP(16),t=x.p,s=B.b([B.ap(B.b([B.aC(B.l(w.a,v,v,v,B.c1(C.k,18,C.r),v,v,v),1),B.fO(v,v,D.acf,v,v,new A.bqx(d),v,v,v,"Schlie\xdfen",v)],t),C.l,v,C.h,C.i,0,v,v)],t)
C.b.L(s,B.b([B.l(w.b,v,v,v,B.E(C.u,12,C.aJ),v,v,v),C.W],t))
s.push(C.w)
s.push(B.cf(new B.mx(w.c,w.d,v),v,17976931348623157e292))
return B.a3Z(v,C.C,new B.ae(C.aj,B.af(s,C.D,v,C.h,C.O),v),v,v,v,C.fO,C.uH,v,new B.da(u,C.J),v)},
$S:1008}
A.bqx.prototype={
$0(){return B.bm(this.a,!1).fc()},
$S:0}
A.bej.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byd(this.b,2.4,new A.XL(w.w,w.y,w.z,null),C.b.cg(u," \xb7 "),v)
return null},
$S:0}
A.bm6.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.bm7.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bm8.prototype={
$1(d){return A.aJL(null,1.4,null,C.ax,0.35,D.ag5,D.DR,null,!1,!1,!1,!1,D.F9,!1,10,D.Y4,!0,C.lv,B.b([new A.ez(0,d),new A.ez(this.a,d)],x.U))},
$S:z+14}
A.b53.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b55.prototype={
$2(d,e){var w=null
return B.l(this.a.aLu(d),w,w,w,B.E(C.u,10,C.Q),w,w,w)},
$S:z+16}
A.b56.prototype={
$2(d,e){var w=null,v=C.e.a1(d)
if(v<0||v>=this.a.length)return C.A2
return new B.ae(C.hX,B.l(C.d.cP(this.a[v].a,5),w,w,w,B.E(C.u,9,C.Q),w,w,w),w)},
$S:z+6}
A.b54.prototype={
$1(d){return D.a87},
$S:z+7}
A.b5P.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5Q.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5R.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b5S.prototype={
$2(d,e){var w=null,v=C.e.a1(d)
if(v<0||v>=3)return C.A2
return new B.ae(C.hX,B.l(this.a[v],w,w,w,B.E(C.k,12,C.r),w,w,w),w)},
$S:z+6}
A.beO.prototype={
$1(d){return d.d},
$S:z+19}
A.beP.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bnQ.prototype={
$1(d){return d.d},
$S:z+20}
A.bnR.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b3y.prototype={
$0(){return D.atb},
$S:137}
A.b3x.prototype={
$2(d,e){return new A.wE("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b3w.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.af(B.b([B.l("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.k,14,C.Q),m,m,m),C.W,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.u,12.5,C.n),m,m,m),C.w,B.ml(C.cH,B.b([B.i5(C.EK,D.aGV,new A.b3q(w,v),m),B.i5(D.abj,D.aFP,new A.b3r(w,v),m)],u),C.ea,8,8)],u),C.D,m,C.h,C.i),C.ag,m,C.F,m,3)}w=new A.b3z(d)
t=C.b.fO(n.a.e.d,0,new A.b3s())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iW(new A.b3t(new A.b3A(w),r,w,s))
v=J.Z(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.af(B.b([w,C.W,B.ap(B.b([B.aC(B.l("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.u,11,C.n),m,m,m),1),B.oE(D.act,D.aGa,new A.b3u(q,p),m),B.oE(D.ac4,D.aFX,new A.b3v(q,p,d),m)],o),C.l,m,C.h,C.i,0,m,m)],o),C.ae,m,C.h,C.i)},
$S:216}
A.b3q.prototype={
$0(){return A.auD(this.a,this.b,null)},
$S:0}
A.b3r.prototype={
$0(){return A.auA(this.a,this.b)},
$S:0}
A.b3z.prototype={
$1(d){var w=B.b_(J.a3(this.a,d))
return w==null?null:w},
$S:1009}
A.b3A.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.e.ak(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:35}
A.b3s.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3t.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jQ(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i9,o.$1("liquidity1_pct")),m=A.jQ(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i9,o.$1("liquidity2_pct")),l=A.jQ(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i9,o.$1("liquidity3_pct"))
o=A.jQ(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i9,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.e.ak(w,1)
w=B.b0(w,".",",")+" %"}w=A.jQ(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i9,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dw()
v=u.ar(v)
return B.a5v(p,B.b([n,m,l,o,w,A.jQ(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i9,v)],x.p),q,12,12,C.jU,!0)},
$S:94}
A.b3u.prototype={
$0(){return A.auA(this.a,this.b)},
$S:0}
A.b3v.prototype={
$0(){return A.auD(this.a,this.b,this.c)},
$S:0}
A.bqw.prototype={
$1(d){return new A.Ba(this.a,new A.bqv(this.b),this.c,null)},
$S:z+22}
A.bqv.prototype={
$0(){var w=this.a,v=$.bu8()
if(w.e==null)B.Y(B.W(y.b))
w.gcz().cr(v)},
$S:0}
A.b3k.prototype={
$0(){},
$S:0}
A.b3l.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3m.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3o.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u5(u.b,B.bO(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3n(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3n.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3p.prototype={
$0(){return B.bm(this.a,!1).fc()},
$S:0}
A.b3B.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3C.prototype={
$1(d){return new A.xB(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axb.prototype={
$1(d){return d.e},
$S:z+27}
A.axc.prototype={
$2(d,e){return d+e},
$S:46}
A.axe.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axg.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gd4(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axh.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eh(t,r)
s=s.x
s===$&&B.a()
w.eh(t,s)
u.aej(v.d,v.e)},
$S:0}
A.awT.prototype={
$1(d){return 0},
$S:1010}
A.awS.prototype={
$2(d,e){return B.fo(C.bZ,this.a.am7(e),C.p,C.bx,null)},
$S:1011}
A.aYT.prototype={
$1(d){return d.a},
$S:z+31}
A.aYU.prototype={
$1(d){return d.b},
$S:z+32}
A.aYV.prototype={
$1(d){return new A.jX(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aYW.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mE||v===D.dM))t=1-t
return new A.jX(d,t*w.d)},
$S:z+34}
A.aYX.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goK(),p=d.a
r.goK()
r=$.lz()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.e.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.e.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.e.ak(v/1000,1)
t="K"}else{u=C.e.ak(v,r.akb(Math.abs(s.b-s.c)))
t=""}if(C.d.hu(u,".0"))u=C.d.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nN(d,q.c.b.$2(p,new A.tn(u+t,s.e)))},
$S:z+35}
A.aU3.prototype={
$1(d){this.a.l6(new A.a4S(d))},
$S:162}
A.aU4.prototype={
$1(d){this.a.l6(new A.a4T(d))},
$S:42}
A.aU5.prototype={
$1(d){this.a.l6(new A.a4U(d))},
$S:28}
A.aU6.prototype={
$0(){this.a.l6(D.a18)},
$S:0}
A.aU7.prototype={
$1(d){this.a.l6(new A.MH())},
$S:44}
A.aU8.prototype={
$1(d){this.a.l6(new A.a4X(d))},
$S:43}
A.aU9.prototype={
$0(){this.a.l6(D.a19)},
$S:0}
A.aUa.prototype={
$1(d){this.a.l6(new A.MK(d))},
$S:107}
A.aUb.prototype={
$1(d){this.a.l6(new A.a4R(d))},
$S:165}
A.aUc.prototype={
$1(d){this.a.l6(new A.a4Q(d))},
$S:203}
A.aUd.prototype={
$1(d){return this.a.l6(new A.MF(d))},
$S:167}
A.aUe.prototype={
$1(d){return this.a.l6(new A.a4V(d))},
$S:62}
A.aUf.prototype={
$1(d){return this.a.l6(new A.MI(d))},
$S:58}
A.beu.prototype={
$1(d){var w=this.a.db.h(0,C.b.he(this.b.ch,d))
return d.aRl(w==null?B.b([],x.t):w)},
$S:z+37}
A.bes.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bet.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fV(w,new A.ber())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gg(w))},
$S:0}
A.ber.prototype={
$2(d,e){return C.e.cA(e.b,d.b)},
$S:z+8}
A.bev.prototype={
$1(d){return new A.za(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aJM.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.bre.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bD4(t?A.bxZ(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.to(w,new A.ys(!0,A.byP(),new A.brd(v)))},
$S:z+41}
A.brd.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bS3(A.bxZ(d,e,f),w,A.c01(d,e,f))},
$S:z+42}
A.brb.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j7(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rr(C.e.j(d.b),w)},
$S:z+43}
A.aJO.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aJP.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aJT.prototype={
$2(d,e){return C.e.cA(e.c.b,d.c.b)},
$S:z+45}
A.aJR.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eh(v,t)
u=u.Q
u===$&&B.a()
w.eh(v,u)},
$S:0}
A.aJS.prototype={
$0(){this.a.aej(this.b,this.c)},
$S:0}
A.aJU.prototype={
$2(d,e){return C.e.cA(d.w,e.w)},
$S:z+8}
A.ax4.prototype={
$1(d){return d.gd4(0)},
$S:z+46}
A.ax5.prototype={
$2(d,e){return d+e},
$S:46}
A.ax8.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iY(v,B.ad(v).i("iY<1>")).aB(0,new A.ax9(w,this.a/(u+1),this.c))},
$S:0}
A.ax9.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gd4(0)/2
this.c[d]=v
w.a=v+e.gd4(0)/2},
$S:z+2}
A.ax6.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gd4(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gd4(0)/2},
$S:z+2}
A.ax7.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gd4(0)/2
this.c[d]=u
u+=e.gd4(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aGV.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1012}
A.aAd.prototype={
$1(d){return d},
$S:1013};(function aliases(){var w=A.Kq.prototype
w.a08=w.i8
w.amr=w.aT4
w.ams=w.aec
w=A.T7.prototype
w.ap6=w.l
w=A.KB.prototype
w.a09=w.i8
w=A.FQ.prototype
w.a0R=w.YZ})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3E","bS_",72)
var q
v(q=A.T9.prototype,"gaFj","aFk",23)
v(q,"gaEf","HX",4)
v(q,"gaF2","I8",4)
u(A.Ta.prototype,"gat3","at4",25)
t(A,"c2t",3,null,["$3"],["bPf"],49,0)
t(A,"c2u",3,null,["$3"],["bPg"],50,0)
t(A,"c2v",3,null,["$3"],["bPh"],51,0)
t(A,"c2x",4,null,["$4"],["c3h"],52,0)
w(A,"c2w","c3g",53)
s(A,"byi","c3i",54)
t(A,"c2o",3,null,["$3"],["bS4"],55,0)
w(A,"ZT","c5F",56)
w(A,"auF","c3l",7)
t(A,"c2q",3,null,["$3"],["bSR"],57,0)
t(A,"c2s",3,null,["$3"],["bY9"],58,0)
t(A,"c2p",3,null,["$3"],["bSQ"],59,0)
t(A,"c2r",3,null,["$3"],["bY8"],60,0)
w(A,"cdd","bSP",61)
w(A,"cde","bY7",62)
r(A.XA.prototype,"ga4F","ayC",30)
u(A.Vr.prototype,"gazV","azW",36)
t(A,"c4x",3,null,["$3"],["bTj"],63,0)
t(A,"c4w",3,null,["$3"],["bPi"],64,0)
w(A,"c4A","c5G",1)
t(A,"bJC",4,null,["$5$size","$4"],["bI4",function(d,e,f,g){return A.bI4(d,e,f,g,null)}],65,0)
s(A,"byP","c5E",66)
s(A,"bJD","c2b",67)
s(A,"bJG","c3o",68)
s(A,"bJF","c3k",3)
s(A,"bJE","c3j",3)
w(A,"c4z","bJc",70)
w(A,"c4y","bJb",71)
t(A,"ZY",3,null,["$3"],["c4v"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.X,[A.a6z,A.ag8,A.alg,A.IA,A.J0,A.ag6,A.HJ,A.I2,A.akB,A.alO,A.Ug,A.XL,A.Tx,A.TF,A.amh,A.aiH,A.C7,A.as4,A.wE,A.Kr,A.AH])
u(B.B,[A.uK,A.E4,A.bd,A.ahd,A.ah3,A.ah5,A.ah6,A.agW,A.akm,A.ah9,A.ah7,A.axq,A.as8,A.axd,A.ah4,A.KB,A.a5w,A.tn,A.aqu,A.aqt,A.agV,A.akl,A.ez,A.aki,A.akk,A.aoy,A.al7,A.asO,A.akj,A.ak1,A.akh,A.awR,A.bep,A.awU,A.agS,A.nN,A.ake,A.akf,A.vz,A.ho,A.alW,A.alZ,A.ah0,A.ahe,A.ah1,A.akg,A.am1,A.am_,A.as7,A.aqs,A.aJN,A.alY,A.vj,A.a0V,A.am8,A.a14,A.b1k])
u(B.uH,[A.qh,A.vp,A.wj,A.azE,A.aAK,A.o4,A.CE,A.o5])
u(B.nT,[A.aEs,A.aEt,A.aEu,A.aEL,A.brp,A.brq,A.bte,A.brr,A.bro,A.brn,A.aEA,A.aEG,A.aEz,A.aJy,A.be5,A.be6,A.be7,A.be8,A.be9,A.bea,A.beb,A.bec,A.bed,A.bee,A.bef,A.bqy,A.bm8,A.b54,A.b5P,A.b5Q,A.beO,A.bnQ,A.b3w,A.b3z,A.b3A,A.bqw,A.b3C,A.axb,A.axe,A.awT,A.aYT,A.aYU,A.aYV,A.aYW,A.aYX,A.aU3,A.aU4,A.aU5,A.aU7,A.aU8,A.aUa,A.aUb,A.aUc,A.aUd,A.aUe,A.aUf,A.beu,A.bev,A.aJM,A.bre,A.brd,A.brb,A.aJO,A.aJP,A.ax4,A.aAd])
t(A.yq,B.fC)
u(B.xS,[A.aEr,A.aEq,A.aEJ,A.aEB,A.aEC,A.aED,A.aEE,A.aEF,A.aEI,A.aEx,A.aEy,A.bgK,A.bgL,A.bgM,A.aJA,A.beh,A.bei,A.bqx,A.bej,A.b3y,A.b3q,A.b3r,A.b3u,A.b3v,A.bqv,A.b3k,A.b3l,A.b3m,A.b3o,A.b3n,A.b3p,A.b3B,A.axh,A.aU6,A.aU9,A.bes,A.bet,A.aJR,A.aJS,A.ax8])
u(B.y_,[A.yr,A.ans,A.a6A,A.ah_])
u(B.xT,[A.aEH,A.bgJ,A.bmy,A.aJz,A.beg,A.bm6,A.bm7,A.b53,A.b55,A.b56,A.b5R,A.b5S,A.beP,A.bnR,A.b3x,A.b3s,A.b3t,A.axc,A.axg,A.awS,A.ber,A.aJT,A.aJU,A.ax5,A.ax9,A.ax6,A.ax7,A.aGV])
u(B.N,[A.Ba,A.Rb])
u(B.a0,[A.T9,A.XA])
u(B.No,[A.Kx,A.O4])
u(B.uf,[A.Ta,A.Vr])
t(A.a0w,A.ahd)
t(A.agR,A.a0w)
t(A.a0e,A.agR)
u(A.a0e,[A.ah2,A.alX])
t(A.nO,A.ah2)
u(B.HI,[A.ax2,A.adD,A.CV,A.aDK,A.aJB,A.Na])
t(A.fI,A.ah3)
t(A.io,A.ah5)
t(A.my,A.ah6)
t(A.a0n,A.agW)
t(A.ML,A.akm)
u(A.ML,[A.ah8,A.am0])
t(A.a0s,A.ah8)
t(A.a0t,A.ah9)
t(A.CX,A.ah7)
u(A.axq,[A.Ky,A.O6])
t(A.adF,A.as8)
t(A.aha,A.adF)
t(A.a0u,A.aha)
u(B.b5,[A.xB,A.za])
t(A.ul,A.ah4)
t(A.Kq,A.KB)
u(A.Kq,[A.axf,A.aJQ])
u(B.O0,[A.a0q,A.a6N])
u(B.J,[A.FQ,A.agT])
u(A.FQ,[A.aaM,A.aaZ])
t(A.q5,A.aqu)
t(A.acb,A.aqt)
t(A.pa,A.agV)
t(A.uM,A.akl)
t(A.yt,A.aki)
t(A.pA,A.akk)
t(A.PI,A.aoy)
t(A.mS,A.al7)
t(A.nj,A.asO)
u(A.pA,[A.al6,A.asN])
t(A.kV,A.al6)
t(A.lg,A.asN)
t(A.a4P,A.akj)
u(A.a4P,[A.al5,A.asM])
t(A.a5H,A.al5)
t(A.ae1,A.asM)
t(A.Mx,A.ak1)
t(A.uL,A.akh)
t(A.ME,A.uL)
t(A.acc,B.h8)
t(A.agU,A.agT)
t(A.T7,A.agU)
t(A.a0f,A.T7)
t(A.jX,A.agS)
t(A.a4M,A.ake)
t(A.a4O,A.akf)
u(A.ho,[A.a4S,A.a4T,A.a4U,A.MG,A.MH,A.a4X,A.MJ,A.MK,A.a4R,A.a4Q,A.MF,A.a4V,A.a4W,A.MI])
t(A.pK,A.alX)
t(A.e7,A.alW)
t(A.O5,A.alZ)
t(A.a0p,A.ah0)
t(A.mz,A.ahe)
t(A.Kw,A.ah1)
t(A.ys,A.akg)
t(A.EI,A.am0)
t(A.a6O,A.am1)
t(A.alV,A.ez)
t(A.mZ,A.alV)
t(A.qf,A.mZ)
t(A.rr,A.am_)
t(A.to,A.as7)
t(A.Gg,A.aqs)
t(A.zb,A.alY)
t(A.zg,A.am8)
w(A.agW,A.bd)
w(A.ah2,A.bd)
w(A.ah3,A.bd)
w(A.ah5,A.bd)
w(A.ah6,A.bd)
w(A.ah7,A.bd)
w(A.ah8,A.bd)
w(A.ah9,A.bd)
w(A.aha,A.bd)
w(A.ah4,A.bd)
w(A.agR,A.bd)
w(A.agV,A.bd)
w(A.ak1,A.bd)
w(A.akh,A.bd)
w(A.aki,A.bd)
w(A.akk,A.bd)
w(A.akl,A.bd)
w(A.al6,A.bd)
w(A.al5,A.bd)
w(A.al7,A.bd)
w(A.aoy,A.bd)
w(A.aqt,A.bd)
w(A.aqu,A.bd)
w(A.as8,A.bd)
w(A.asN,A.bd)
w(A.asM,A.bd)
w(A.asO,A.bd)
w(A.agS,A.bd)
v(A.agT,B.aA)
w(A.agU,B.e3)
v(A.T7,B.a3H)
w(A.ahd,A.bd)
w(A.ake,A.bd)
w(A.akf,A.bd)
w(A.akm,A.bd)
w(A.ah0,A.bd)
w(A.ah1,A.bd)
w(A.ahe,A.bd)
w(A.akg,A.bd)
w(A.akj,A.bd)
w(A.alV,A.bd)
w(A.alW,A.bd)
w(A.alX,A.bd)
w(A.alZ,A.bd)
w(A.am_,A.bd)
w(A.am0,A.bd)
w(A.am1,A.bd)
w(A.aqs,A.bd)
w(A.as7,A.bd)
w(A.alY,A.bd)
w(A.am8,A.bd)})()
B.bo3(b.typeUniverse,JSON.parse('{"a6z":{"X":[],"c":[]},"E4":{"aEw":[]},"yq":{"fC":["ba<~>"],"fC.T":"ba<~>"},"J0":{"X":[],"c":[]},"HJ":{"X":[],"c":[]},"yr":{"bj":[],"N":[],"c":[]},"ag8":{"X":[],"c":[]},"alg":{"X":[],"c":[]},"ans":{"bj":[],"N":[],"c":[]},"IA":{"X":[],"c":[]},"ag6":{"X":[],"c":[]},"I2":{"X":[],"c":[]},"wE":{"X":[],"c":[]},"Ba":{"N":[],"c":[]},"a6A":{"bj":[],"N":[],"c":[]},"akB":{"X":[],"c":[]},"alO":{"X":[],"c":[]},"Ug":{"X":[],"c":[]},"XL":{"X":[],"c":[]},"Tx":{"X":[],"c":[]},"TF":{"X":[],"c":[]},"amh":{"X":[],"c":[]},"aiH":{"X":[],"c":[]},"C7":{"X":[],"c":[]},"as4":{"X":[],"c":[]},"ah_":{"bj":[],"N":[],"c":[]},"T9":{"a0":["Ba"]},"Kx":{"N":[],"c":[]},"Ta":{"a0":["Kx"]},"nO":{"bd":[]},"fI":{"bd":[]},"io":{"bd":[]},"my":{"bd":[]},"CX":{"bd":[]},"xB":{"b5":["nO"],"b3":["nO"],"b3.T":"nO","b5.T":"nO"},"a0n":{"bd":[]},"a0s":{"bd":[]},"a0t":{"bd":[]},"a0u":{"bd":[]},"ul":{"bd":[]},"a0q":{"aV":[],"c":[]},"aaM":{"J":[],"K":[],"jB":[],"aR":[]},"pA":{"bd":[]},"mS":{"bd":[]},"nj":{"bd":[]},"kV":{"bd":[]},"lg":{"bd":[]},"uL":{"bd":[]},"a0e":{"bd":[]},"q5":{"bd":[]},"acb":{"bd":[]},"pa":{"bd":[]},"uM":{"bd":[]},"yt":{"bd":[]},"adF":{"bd":[]},"PI":{"bd":[]},"a5H":{"bd":[]},"ae1":{"bd":[]},"Mx":{"bd":[]},"ME":{"bd":[]},"Kr":{"X":[],"c":[]},"Rb":{"N":[],"c":[]},"XA":{"a0":["Rb"]},"jX":{"bd":[]},"acc":{"h8":[],"aV":[],"c":[]},"a0f":{"e3":["J","hp"],"J":[],"aA":["J","hp"],"K":[],"aR":[],"aA.1":"hp","e3.1":"hp","aA.0":"J"},"AH":{"X":[],"c":[]},"a0w":{"bd":[]},"a4M":{"bd":[]},"ML":{"bd":[]},"a4O":{"bd":[]},"a4S":{"ho":[]},"a4T":{"ho":[]},"a4U":{"ho":[]},"MG":{"ho":[]},"MH":{"ho":[]},"a4X":{"ho":[]},"MJ":{"ho":[]},"MK":{"ho":[]},"a4R":{"ho":[]},"a4Q":{"ho":[]},"MF":{"ho":[]},"a4V":{"ho":[]},"a4W":{"ho":[]},"MI":{"ho":[]},"FQ":{"J":[],"K":[],"jB":[],"aR":[]},"O4":{"N":[],"c":[]},"Vr":{"a0":["O4"]},"pK":{"bd":[]},"e7":{"bd":[]},"mz":{"bd":[]},"mZ":{"ez":[],"bd":[]},"qf":{"mZ":[],"ez":[],"bd":[]},"rr":{"bd":[]},"to":{"bd":[]},"Gg":{"bd":[]},"za":{"b5":["pK"],"b3":["pK"],"b3.T":"pK","b5.T":"pK"},"O5":{"bd":[]},"a0p":{"bd":[]},"Kw":{"bd":[]},"ys":{"bd":[]},"a4P":{"bd":[]},"EI":{"bd":[]},"a6O":{"bd":[]},"zb":{"bd":[]},"a6N":{"aV":[],"c":[]},"aaZ":{"J":[],"K":[],"jB":[],"aR":[]},"zg":{"bd":[]}}'))
B.bHx(b.typeUniverse,JSON.parse('{"Kq":1,"ML":1,"KB":1,"FQ":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ar
return{_:w("CE"),e:w("ba<o4>"),aN:w("ba<o5>"),fM:w("ba<a2<f,@>?>"),b:w("ba<~>"),W:w("jX"),B:w("nO"),dB:w("fI"),gF:w("ul"),fj:w("io"),G:w("my"),bO:w("mz"),k:w("at"),C:w("a14<F>"),dO:w("ut"),R:w("a4<f,@>"),g:w("hG"),bz:w("lF<b8>"),f0:w("nZ"),E:w("bd"),F:w("yq"),X:w("o4"),P:w("lJ"),D:w("uK"),a:w("aEw"),d:w("o5"),cw:w("ez"),L:w("hp"),m:w("d6<u,D>"),cm:w("kV"),dv:w("mS"),M:w("C<nN>"),I:w("C<bBH>"),O:w("C<fI>"),Y:w("C<io>"),U:w("C<ez>"),K:w("C<a5w>"),u:w("C<e7>"),bC:w("C<vj>"),aA:w("C<v<ez>>"),v:w("C<e9>"),r:w("C<Gg>"),s:w("C<f>"),eg:w("C<tl>"),df:w("C<qf>"),p:w("C<c>"),n:w("C<F>"),t:w("C<u>"),eF:w("be<a0<N>>"),Z:w("mZ"),cz:w("e7"),hf:w("pK"),dj:w("zb"),fT:w("rr"),c_:w("iq<oT<ba<~>>>"),x:w("zg<fI>"),y:w("zg<e7>"),J:w("v<u>"),ef:w("vp"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k8"),aU:w("B"),Q:w("vz<nO>"),o:w("vz<pK>"),dc:w("e9"),eo:w("pW"),gJ:w("pX"),V:w("nd<lJ>"),N:w("f"),A:w("ne"),bP:w("bJ"),er:w("tl"),j:w("wj"),dw:w("qf"),bY:w("to"),cZ:w("qh"),gc:w("ig"),es:w("lg"),bN:w("nj"),l:w("c"),q:w("wX"),g4:w("ih<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("u"),bn:w("xB?"),f3:w("za?"),T:w("v<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("B?"),aD:w("ig?"),h6:w("u?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AW=new B.p4(C.m,B.ar("p4<D>"))
D.B3=new A.CV(0,"left")
D.mE=new A.CV(1,"top")
D.B4=new A.CV(2,"right")
D.dM=new A.CV(3,"bottom")
D.axk=new A.q5(!1,A.byi(),22,null)
D.kt=new A.pa(16,null,D.axk,!0)
D.a88=new A.pA(C.E,null,2,null)
D.vP=new A.Kw(!1,D.a88,A.c4A(),!0)
D.a_i=new A.ax2(3,"spaceEvenly")
D.a_r=new B.xF(6,"dstIn")
D.X8=new B.aS(3,3)
D.B7=new B.d3(D.X8,D.X8,C.a3,C.a3)
D.a_C=new B.bk(C.E,0,C.V,-1)
D.BF=new A.a4O()
D.a18=new A.MG()
D.a19=new A.MJ()
D.aOs=new A.acb()
D.akZ=w([],B.ar("C<kV>"))
D.al_=w([],B.ar("C<lg>"))
D.DN=new A.Mx(D.akZ,D.al_,!0)
D.a7S=new B.eq("Zeitraum",!1,null)
D.a7W=new B.eq("Konten (SKR 03)",!1,null)
D.xB=new A.aDK(0,"center")
D.aOE=new A.ys(!0,A.byP(),A.bJC())
D.DR=new A.ys(!1,A.byP(),A.bJC())
D.DS=new A.yt(!1,!0,null,A.auF(),A.ZT(),!0,null,A.auF(),A.ZT())
D.aOF=new A.yt(!0,!0,null,A.auF(),A.ZT(),!0,null,A.auF(),A.ZT())
D.a3p=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3b=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3z=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3t=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a2X=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a2W=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a3T=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3j=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a3W=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a3Q=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.ar3=new B.d6([50,D.a3p,100,D.a3b,200,D.a3z,300,D.a3t,400,D.a2X,500,D.a2W,600,D.a3T,700,D.a3j,800,D.a3W,900,D.a3Q],x.m)
D.dp=new B.ry(D.ar3,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ah6=w([8,4],x.t)
D.a86=new A.pA(D.dp,null,0.4,D.ah6)
D.a87=new A.pA(C.an,null,0.5,null)
D.fP=new A.ez(0/0,0/0)
D.axm=new A.q5(!0,A.byi(),44,null)
D.mF=new A.pa(16,null,D.axm,!0)
D.axl=new A.q5(!0,A.byi(),30,null)
D.mG=new A.pa(16,null,D.axl,!0)
D.a89=new A.uM(!1,D.mF,D.mG,D.mF,D.mG)
D.aOG=new A.uM(!0,D.mF,D.mG,D.mF,D.mG)
D.a8K=new A.Na(0,"left")
D.a8L=new A.Na(1,"center")
D.a8M=new A.Na(2,"right")
D.a8Q=new B.a8(57495,"MaterialIcons",null,!1)
D.xT=new B.a8(58927,"MaterialIcons",null,!1)
D.a9z=new B.a8(59005,"MaterialIcons",null,!0)
D.a9A=new B.a8(59007,"MaterialIcons",null,!0)
D.a9B=new B.a8(59011,"MaterialIcons",null,!1)
D.aax=new B.a8(62589,"MaterialIcons",null,!1)
D.a9R=new B.a8(61349,"MaterialIcons",null,!1)
D.ab0=new B.aI(D.a9R,20,C.k,null,null)
D.a9Y=new B.a8(61487,"MaterialIcons",null,!1)
D.abi=new B.aI(D.a9Y,18,null,null,null)
D.abj=new B.aI(D.xT,18,null,null,null)
D.abW=new B.aI(C.nO,null,C.u,null,null)
D.ac4=new B.aI(C.nT,16,null,null,null)
D.acc=new B.aI(C.Ey,16,null,null,null)
D.acf=new B.aI(C.i2,null,C.k,null,null)
D.aav=new B.a8(62584,"MaterialIcons",null,!1)
D.acn=new B.aI(D.aav,16,null,null,null)
D.act=new B.aI(D.xT,16,null,null,null)
D.a92=new B.a8(57912,"MaterialIcons",null,!1)
D.acx=new B.aI(D.a92,null,C.ax,null,null)
D.aev=new A.a6A(null)
D.aOL=new A.aJB(0,"horizontal")
D.ya=new A.zb(0,0,0,0,!1)
D.F9=new A.O5(0.5)
D.BL=new A.a6O()
D.aez=new A.EI(D.BL,A.bJG(),10,A.bJD(),!0,A.bJF(),A.bJE(),!1,null,null,null)
D.aON=new A.EI(D.BL,A.bJG(),10,A.bJD(),!0,A.bJF(),A.bJE(),!0,null,null,null)
D.ag5=w([4,3],x.t)
D.ave=new B.aE("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.av4=new B.aE("receivables","Forderungen (kurzfristig)")
D.auU=new B.aE("inventory_value","Vorr\xe4te (Warenbestand)")
D.auS=new B.aE("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auI=new B.aE("fixed_assets","Anlageverm\xf6gen")
D.auN=new B.aE("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avb=new B.aE("long_term_liabilities","Langfristige Verbindlichkeiten")
D.av3=new B.aE("equity","Eigenkapital")
D.pv=w([D.ave,D.av4,D.auU,D.auS,D.auI,D.auN,D.avb,D.av3],B.ar("C<+(f,f)>"))
D.aOQ=w([],x.M)
D.akM=w([],x.O)
D.akN=w([],x.Y)
D.akO=w([],B.ar("C<my>"))
D.akP=w([],B.ar("C<mz>"))
D.aOR=w([],x.U)
D.aOS=w([],x.u)
D.akQ=w([],x.r)
D.arF={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SJ={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yP=new B.a4(D.SJ,[0,0,0,0,0,0,0,C.ce],B.ar("a4<f,B>"))
D.arC={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqY=new B.a4(D.arC,[0,0,0,0],B.ar("a4<f,u>"))
D.arW={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoA=new B.a4(D.arW,[0,0,0,0,null,null,null,null],B.ar("a4<f,u?>"))
D.aov=new B.a4(D.arF,[D.yP,D.yP,D.yP,C.ce,C.ce,C.ce,D.aqY,D.aoA],x.R)
D.aoL=new B.a4(D.SJ,[0,0,0,0,0,0,0,C.cE],x.R)
D.arH={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoN=new B.a4(D.arH,[8500,1200,3400,300,22e3,4200,9000,22200],B.ar("a4<f,F>"))
D.arB={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqZ=new B.a4(D.arB,[0,0,0,0,0,0,0,C.cE],x.R)
D.as7={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar_=new B.a4(D.as7,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ar("a4<f,f>"))
D.a40=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a48=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3_=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3l=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3v=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4l=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a2L=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3n=new B.D(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3y=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a3R=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.ar4=new B.d6([50,D.a40,100,D.a48,200,D.a3_,300,D.a3l,400,D.a3v,500,D.a4l,600,D.a2L,700,D.a3n,800,D.a3y,900,D.a3R],x.m)
D.Sy=new B.ry(D.ar4,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7i=new B.al(32,32,32,32)
D.at3=new B.ae(D.a7i,C.bD,null)
D.a7k=new B.al(48,48,48,48)
D.at5=new B.ae(D.a7k,C.bD,null)
D.atb=new B.ae(C.aj,C.bD,null)
D.al0=w([],B.ar("C<mS>"))
D.al1=w([],B.ar("C<nj>"))
D.X9=new A.PI(D.al0,D.al1)
D.avW=new B.fA("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avX=new B.fA("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.aw_=new B.fA("Automaten-Business","Umsatz je Automat",null,null)
D.aw1=new B.fA("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.aw3=new B.fA("Top","Meistverkaufte Produkte",null,null)
D.aw7=new B.fA("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.aw8=new B.fA("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y4=new B.t6(C.G,C.q,0)
D.aEN=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayW=new B.dS(D.aEN,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aGJ=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayZ=new B.dS(D.aGJ,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aEY=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.az_=new B.dS(D.aEY,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aGD=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.az1=new B.dS(D.aGD,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aG6=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.az2=new B.dS(D.aG6,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aG3=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azm=new B.dS(D.aG3,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aP1=new B.O(!0,C.E,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEW=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aF6=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFP=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFX=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGa=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGV=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zh=new A.adD(0,"auto")
D.aHs=new A.adD(1,"top")
D.aLL=new A.wE("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLM=new A.wE("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdF","bO5",()=>B.j_(new A.brp(),x.D))
w($,"cdG","ave",()=>B.j_(new A.brq(),x.a))
w($,"ceC","xo",()=>B.bwX(new A.bte(),x.P))
w($,"cdH","bu9",()=>C.aI.$1$1(new A.brr(),x.d))
w($,"cdE","bO4",()=>C.aI.$1$1(new A.bro(),x.X))
w($,"cdD","bu8",()=>C.aI.$1$1(new A.brn(),x.h))
w($,"cdC","bu7",()=>B.aZH(A.c3E(),x.F,x.b))
w($,"c6q","btF",()=>new A.awR())
v($,"c9N","lz",()=>new A.b1k())})()};
(a=>{a["kTCcbZAOeAZfcoReXJy8/arkcls="]=a.current})($__dart_deferred_initializers__);