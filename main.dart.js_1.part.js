((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
O2(d,e,f,g,h){return new A.a6O(f,g,d,h,e,null)},
a6O:function a6O(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uN:function uN(d){this.a=d},
E0:function E0(d){this.a=d},
bSn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.yZ
w=x.f
v=x.N
u=x.z
t=A.aF1(B.db(w.a(e.h(a0,"current")),v,u))
s=A.aF1(B.db(w.a(e.h(a0,"prior_year")),v,u))
r=A.aF1(B.db(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.cc
p=J.cZ(p,new A.aEK(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.cc
o=J.cZ(o,new A.aEL(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.cc
q=J.cZ(q,new A.aEM(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.db(w.a(e.h(a0,"customer")),v,u)
m=B.bp(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.oY(n.h(0,"app_gross"))
k=B.bp(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.oY(n.h(0,"avg_basket"))
u=B.db(w.a(e.h(a0,"derived")),v,u)
v=A.oY(u.h(0,"gross_margin_pct"))
e=A.oY(u.h(0,"net_margin_pct"))
w=A.oY(u.h(0,"ebitda_margin_pct"))
j=A.oY(u.h(0,"cashflow_operating"))
i=A.brN(u.h(0,"revenue_growth_yoy_pct"))
h=A.brN(u.h(0,"revenue_growth_mom_pct"))
g=A.brN(u.h(0,"result_growth_yoy_pct"))
u=A.brN(u.h(0,"result_growth_mom_pct"))
f=B.bp(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.o1(t,s,r,p,o,q,new A.aAa(m,l,k,n),new A.aBg(v,e,w,j,i,h,g,u),f)},
oY(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
brN(d){if(d==null)return null
if(typeof d=="number")return d
return B.js(J.al(d))},
qd:function qd(d,e,f,g){var _=this
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
wm:function wm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAa:function aAa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBg:function aBg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o1:function o1(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEK:function aEK(){},
aEL:function aEL(){},
aEM:function aEM(){},
aF1(d){var w=J.Z(d),v=A.u5(w.h(d,"revenue_net_7")),u=A.u5(w.h(d,"revenue_net_19")),t=A.u5(w.h(d,"revenue_net")),s=A.u5(w.h(d,"expense_net")),r=A.u5(w.h(d,"result_net")),q=A.u5(w.h(d,"vat_collected")),p=A.u5(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.cc
w=J.cZ(w,new A.aF2(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.o2(v,u,t,s,r,q,p,w)},
u5(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.js(J.al(d))
return w==null?0:w},
CA:function CA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o2:function o2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aF2:function aF2(){},
bSm(d){return new A.yo(d,new B.im(x.c_),C.dL)},
bsB:function bsB(){},
bsC:function bsC(){},
buq:function buq(){},
bsD:function bsD(){},
bsA:function bsA(){},
bsz:function bsz(){},
yo:function yo(d,e,f){this.r=d
this.a=e
this.f=f},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
aEI:function aEI(d,e,f){this.a=d
this.b=e
this.c=f},
bSo(){return new A.yp(null)},
alD(d,e,f,g,h){return new A.alC(e,h,g,f,d,null)},
yp:function yp(d){this.a=d},
aF0:function aF0(d){this.a=d},
aET:function aET(d,e,f){this.a=d
this.b=e
this.c=f},
aEU:function aEU(d,e,f){this.a=d
this.b=e
this.c=f},
aEV:function aEV(d){this.a=d},
aES:function aES(){},
aEW:function aEW(d){this.a=d},
aEX:function aEX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF_:function aF_(){},
aEZ:function aEZ(){},
aEY:function aEY(){},
aER:function aER(d,e){this.a=d
this.b=e},
aEP:function aEP(d){this.a=d},
aEQ:function aEQ(d){this.a=d},
agi:function agi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alC:function alC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anR:function anR(d,e){this.e=d
this.a=e},
bhd:function bhd(d){this.a=d},
bhe:function bhe(d){this.a=d},
bhf:function bhf(d,e,f){this.a=d
this.b=e
this.c=f},
bhc:function bhc(){},
IO:function IO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jg:function Jg(d,e){this.c=d
this.a=e},
bnC:function bnC(d){this.a=d},
agg:function agg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HV:function HV(d,e){this.c=d
this.a=e},
bz9(d,e,f,g,h){var w=null
return B.j6(w,w,!0,w,new A.brI(h,g,e,f),d,w,!0,!0,x.H)},
jE(d,e,f,g,h,i,j,k,l,m,n){return new A.am9(g,n,i,e,d,m,f,k,l,j,null)},
auR(d,e){return A.c1R(d,e)},
c1R(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auR=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bi(D.axx)
t=4
o=e.aK(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$auR)
case 7:r=g
q=B.db(x.f.a(r.a),x.N,n)
l.Mf()
if(J.d(J.a3(q,"configured"),!1)){l.bi(D.axB)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bvd()
if(e.e==null)B.U(B.Y(y.b))
e.gcq().ck(o)
l.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mf()
l.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auR,v)},
auU(d,e,f){var w=0,v=B.q(x.H)
var $async$auU=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j6(null,null,!0,null,new A.brG(f,e,e.aK(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$auU)
case 2:return B.o(null,v)}})
return B.p($async$auU,v)},
a6P:function a6P(d){this.a=d},
aJT:function aJT(){},
aJS:function aJS(){},
aJR:function aJR(){},
If:function If(d,e){this.c=d
this.a=e},
ben:function ben(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bec:function bec(){},
bed:function bed(){},
bee:function bee(){},
bef:function bef(){},
beg:function beg(){},
beh:function beh(){},
bei:function bei(){},
bej:function bej(){},
bek:function bek(d){this.a=d},
bel:function bel(d){this.a=d},
bem:function bem(d){this.a=d},
beo:function beo(d,e){this.a=d
this.b=e},
bep:function bep(d,e){this.a=d
this.b=e},
brI:function brI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brH:function brH(d){this.a=d},
akX:function akX(d){this.a=d},
am9:function am9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
beq:function beq(d,e){this.a=d
this.b=e},
UH:function UH(d,e,f){this.c=d
this.d=e
this.a=f},
Ye:function Ye(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmJ:function bmJ(){},
bmK:function bmK(){},
bmL:function bmL(d){this.a=d},
TU:function TU(d,e,f){this.c=d
this.d=e
this.a=f},
b54:function b54(){},
b56:function b56(d){this.a=d},
b57:function b57(d){this.a=d},
b55:function b55(){},
U6:function U6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5Z:function b5Z(){},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(d){this.a=d},
amD:function amD(d,e){this.c=d
this.a=e},
beU:function beU(){},
beV:function beV(){},
aiY:function aiY(d,e){this.c=d
this.a=e},
C4:function C4(d,e,f){this.c=d
this.d=e
this.a=f},
ask:function ask(d,e){this.c=d
this.a=e},
boU:function boU(){},
boV:function boV(){},
wF:function wF(d,e){this.c=d
this.a=e},
aha:function aha(d,e){this.e=d
this.a=e},
b3v:function b3v(){},
b3u:function b3u(){},
b3t:function b3t(d,e,f){this.a=d
this.b=e
this.c=f},
b3n:function b3n(d,e){this.a=d
this.b=e},
b3o:function b3o(d,e){this.a=d
this.b=e},
b3w:function b3w(d){this.a=d},
b3x:function b3x(d){this.a=d},
b3p:function b3p(){},
b3q:function b3q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3r:function b3r(d,e){this.a=d
this.b=e},
b3s:function b3s(d,e,f){this.a=d
this.b=e
this.c=f},
brG:function brG(d,e,f){this.a=d
this.b=e
this.c=f},
brF:function brF(d){this.a=d},
B6:function B6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tw:function Tw(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3h:function b3h(){},
b3i:function b3i(d){this.a=d},
b3j:function b3j(d){this.a=d},
b3l:function b3l(d,e){this.a=d
this.b=e},
b3k:function b3k(d,e){this.a=d
this.b=e},
b3m:function b3m(d){this.a=d},
bg:function bg(){},
bCr(d){return new A.KM(d,C.ak,C.bV,null,null)},
KM:function KM(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tx:function Tx(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.e8$=f
_.c4$=g
_.c=_.a=null},
b3y:function b3y(d,e){this.a=d
this.b=e},
b3z:function b3z(d){this.a=d},
axt(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alN:f,p=a0==null?16:a0,o=d==null?D.a00:d,n=g==null,m=n?A.bvH(r,r,r,r,r,r,r,r):g,l=a3==null?D.Y0:a3
n=n?A.bvH(r,r,r,r,r,r,r,r):g
w=j==null?D.DN:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nL(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BJ,s,w,i,n)},
axA(d,e,f,g,h){var w=d==null?D.alO:d,v=e==null?2:e,u=g==null?C.lq:g
return new A.fC(h,f===!0,w,v,u)},
bPH(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.axA(A.ks(d.c,e.c,f,A.c2B(),x.fj),B.ac(d.d,e.d,f),!1,A.ks(d.e,e.e,f,A.a_v(),x.S),w)},
a0T(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.To
else w=h
v=m==null
u=v?8:m
t=$.lt()
s=t.aWX(f,v?8:m)
t=t.aWY(g,v?8:m)
v=d==null?A.bCp(r,r,r,r,r):d
return new A.ij(q,l,w,j,u,s,e,t,v,k==null?D.alP:k)},
bPI(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mA(d.f,e.f,f),p=A.ks(d.r,e.r,f,A.a_v(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0T(A.bCp(v,u,null,!1,t),p,q,o,s,n,null,A.ks(d.y,e.y,f,A.c2C(),x.G),m,r)},
bPJ(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.my(u,w,v,B.bX(d.d,e.d,f))},
bCp(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dq
else w=d
return new A.a0P(g===!0,v,u,w,f)},
bvH(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0V(4,C.hN,16,D.xy,0,120,A.c2E(),!1,!1,D.ZZ,0,C.I,A.c2D())
else w=k
v=j==null?C.kX:j
return new A.a0U(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3p(d,e,f,g){var w=null,v=B.iY(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.L,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CR(C.d.j(f.b),v)},
c3o(d){return A.azB(D.dq,15)},
nL:function nL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axs:function axs(d,e){this.a=d
this.b=e},
fC:function fC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axB:function axB(){},
axC:function axC(){},
ij:function ij(d,e,f,g,h,i,j,k,l,m){var _=this
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
a0P:function a0P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0U:function a0U(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adL:function adL(d,e){this.a=d
this.b=e},
a0V:function a0V(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CR:function CR(d,e){this.a=d
this.b=e},
KN:function KN(d){this.a=d},
a0W:function a0W(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xy:function xy(d,e){this.a=d
this.b=e},
ah6:function ah6(){},
ahd:function ahd(){},
ahe:function ahe(){},
ahg:function ahg(){},
ahh:function ahh(){},
ahi:function ahi(){},
ahj:function ahj(){},
ahk:function ahk(){},
ahl:function ahl(){},
axD:function axD(d){this.a=d},
axE:function axE(){},
ur:function ur(d,e,f){this.a=d
this.b=e
this.c=f},
ahf:function ahf(){},
axF:function axF(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axG:function axG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axH:function axH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5R:function a5R(d){this.b=d},
a0S:function a0S(d,e,f){this.d=d
this.e=e
this.a=f},
aaV:function aaV(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bB=_.aE=_.ai=_.ap=$
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
c3q(d,e){var w=null
return new A.Rt(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axm(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pb(t,e.b,new A.q3(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bDO(d,e,f){var w=A.axm(d.b,e.b,f),v=A.axm(d.d,e.d,f),u=A.axm(d.e,e.e,f)
return new A.uP(e.a,w,A.axm(d.c,e.c,f),v,u)},
bSq(d,e,f){var w,v
if(d.k(0,D.fN))return e
if(e.k(0,D.fN))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ev(w,v)},
bDM(d,e,f){return new A.yr(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5P(d){return!0},
c3t(d){return D.a9n},
bDN(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.py(w,f,g,e)},
bFK(d,e,f){var w,v=A.ks(d.a,e.a,f,A.c2x(),x.dv)
v.toString
w=A.ks(d.b,e.b,f,A.c2z(),x.bN)
w.toString
return new A.Q2(v,w)},
bTc(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.re(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.mT(t,w,v,u)},
bYn(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.re(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.ni(t,w,v,u)},
bTb(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ps(w.b,v.b,f)
u.toString
t=B.cr(w.c,v.c,f)
t=A.bT9(B.bvy(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.re(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ks(d.d,e.d,f,A.a_v(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kL(r,e.f,e.r,t,e.x,u,v,w,s)},
bYm(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.ps(w.b,v.b,f)
u.toString
t=B.cr(w.c,v.c,f)
t=A.bYk(B.bvy(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.re(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ks(d.d,e.d,f,A.a_v(),x.S)
if(u==null)u=v==null?C.C:null
return new A.la(r,e.f,e.r,t,e.x,u,v,w,s)},
bT9(d,e,f,g,h,i){return new A.a61(f,!1,g,i,d,e)},
bTa(d){return C.d.ak(d.e,1)},
bYk(d,e,f,g,h,i){return new A.ae9(f,!1,g,i,d,e)},
bYl(d){return C.d.ak(d.e,1)},
bDJ(d,e,f){var w,v=A.ks(d.a,e.a,f,A.c2w(),x.cm)
v.toString
w=A.ks(d.b,e.b,f,A.c2y(),x.es)
w.toString
return new A.MG(v,w,!0)},
bSp(d,e,f){return new A.MR(d,e==null?4:e,f)},
a0I:function a0I(){},
CQ:function CQ(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.r=d
this.w=e},
q3:function q3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acj:function acj(){},
pb:function pb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uP:function uP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev:function ev(d,e){this.a=d
this.b=e},
yr:function yr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
py:function py(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adN:function adN(){},
Q2:function Q2(d,e){this.a=d
this.b=e},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ni:function ni(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kL:function kL(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
la:function la(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a61:function a61(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae9:function ae9(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MG:function MG(d,e,f){this.a=d
this.b=e
this.c=f},
uO:function uO(){},
MR:function MR(d,e,f){this.a=d
this.b=e
this.c=f},
ah1:function ah1(){},
ah5:function ah5(){},
akk:function akk(){},
akC:function akC(){},
akD:function akD(){},
akF:function akF(){},
akG:function akG(){},
als:function als(){},
alr:function alr(){},
alt:function alt(){},
aoZ:function aoZ(){},
aqL:function aqL(){},
aqM:function aqM(){},
aso:function aso(){},
at1:function at1(){},
at0:function at0(){},
at2:function at2(){},
axi:function axi(){},
KG:function KG(){},
KH:function KH(d,e,f){this.c=d
this.d=e
this.a=f},
axk:function axk(d){this.a=d},
axj:function axj(d){this.a=d},
Rt:function Rt(d,e,f){this.c=d
this.e=e
this.a=f},
Y3:function Y3(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWV(d,e,f){var w=B.ad(f),v=w.i("aa<1,jP>")
v=B.Q(new B.aa(f,new A.aYO(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.Q(new B.aa(f,new A.aYP(),w),w.i("aw.E"))
return new A.ack(e,d,v,w,null)},
bPF(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6F(4,x.er)
for(w=0;w<4;++w)t[w]=new B.to(v,C.ar,C.w,new B.kn(1),v,v,v,v,C.bA,v)
u=new A.a0J(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aK(x.v))
u.bl()
return u},
ack:function ack(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aYO:function aYO(){},
aYP:function aYP(){},
a0J:function a0J(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W_$=h
_.aSK$=i
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
bew:function bew(d,e){this.a=d
this.b=e},
axl:function axl(){},
jP:function jP(d,e){this.a=d
this.b=e},
nK:function nK(d,e){this.a=d
this.b=e},
ah2:function ah2(){},
ah3:function ah3(){},
ah4:function ah4(){},
Tu:function Tu(){},
Ay:function Ay(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYQ:function aYQ(d){this.a=d},
aYR:function aYR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aYS:function aYS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5a(d,e){var w=d==null?B.ct(C.C,1):d
return new A.a59(e!==!1,w)},
a0Y:function a0Y(){},
a59:function a59(d,e){this.a=d
this.b=e},
MY:function MY(){},
a5b:function a5b(){},
axQ:function axQ(){},
aE8:function aE8(d,e){this.a=d
this.b=e},
aho:function aho(){},
akz:function akz(){},
akA:function akA(){},
akH:function akH(){},
KQ:function KQ(){},
vF:function vF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hk:function hk(){},
a5f:function a5f(d){this.a=d},
a5g:function a5g(d){this.a=d},
a5h:function a5h(d){this.a=d},
MT:function MT(){},
MU:function MU(){},
a5k:function a5k(d){this.a=d},
MW:function MW(){},
MX:function MX(d){this.a=d},
a5e:function a5e(d){this.a=d},
a5d:function a5d(d){this.a=d},
MS:function MS(d){this.a=d},
a5i:function a5i(d){this.a=d},
a5j:function a5j(d){this.a=d},
MV:function MV(d){this.a=d},
FZ:function FZ(){},
aU7:function aU7(d){this.a=d},
aU8:function aU8(d){this.a=d},
aU9:function aU9(d){this.a=d},
aUa:function aUa(d){this.a=d},
aUb:function aUb(d){this.a=d},
aUc:function aUc(d){this.a=d},
aUd:function aUd(d){this.a=d},
aUe:function aUe(d){this.a=d},
aUf:function aUf(d){this.a=d},
aUg:function aUg(d){this.a=d},
aUh:function aUh(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
Oh:function Oh(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VR:function VR(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.e8$=g
_.c4$=h
_.c=_.a=null},
beB:function beB(d,e){this.a=d
this.b=e},
bez:function bez(d){this.a=d},
beA:function beA(d,e){this.a=d
this.b=e},
bey:function bey(){},
beC:function beC(d){this.a=d},
bwV(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pK(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aK7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.To:u
else w=g
v=f==null?A.axr(!1,u,0,u,!1,D.w0):f
w=new A.ea(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axr(!1,u,0,u,!1,D.w0):d,j,a0,i,s,!1,p)
w.aqN(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bCq(d.ay,e.ay,f)
v=A.bCq(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.ks(d.cy,e.cy,f,A.a_v(),x.S)
r=B.a_(d.r,e.r,f)
q=B.re(d.w,e.w,f)
p=A.ks(d.a,e.a,f,A.c2v(),x.cw)
p.toString
o=B.bGf(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aK7(v,m,w,r,e.z,s,new A.yq(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Oi(n),!1,u,o,!0,e.cx,p)},
axr(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dq.A()>>>16&255,D.dq.A()>>>8&255,D.dq.A()&255):null
else w=e
return new A.a0R(h,w,g,i,f,!1)},
bCq(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.re(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bDN(t,A.ks(v.d,u.d,f,A.a_v(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.re(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axr(!1,s,v,u,e.a,new A.KL(!1,r,w.c,!0))},
bPL(d,e,f){var w=B.a_(d.c,e.c,f),v=B.re(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dq.A()>>>16&255,D.dq.A()>>>8&255,D.dq.A()&255):null
return new A.mz(e.a,e.b,w,v)},
c5Q(d){return!0},
byY(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k2)return A.bzJ(w.a,A.bwz(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dq:w},
c08(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k2)w=A.bzJ(v.a,A.bwz(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dq}return A.azB(w,40)},
bIL(d,e,f,g,h){var w,v=A.byY(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k2)w=A.bzJ(u.a,A.bwz(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dq}u=A.azB(w,40)
return new A.MR(v,h==null?4:h,u)},
c5O(d,e){return!0},
c2i(d,e){return Math.abs(d.a-e.a)},
c3w(d,e){var w=J.cZ(e,new A.bsp(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c3s(d,e){return-1/0},
c3r(d,e){return d.a[e].b},
bJV(d){var w=J.cZ(d,new A.bsm(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bJU(d){return A.azB(D.dq,15)},
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
ea:function ea(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aK8:function aK8(){},
Oi:function Oi(d){this.a=d},
a0R:function a0R(d,e,f,g,h,i){var _=this
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
KL:function KL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yq:function yq(d,e,f){this.a=d
this.b=e
this.c=f},
aJU:function aJU(d,e){this.a=d
this.b=e},
a5c:function a5c(){},
ED:function ED(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bsp:function bsp(d){this.a=d},
bso:function bso(d){this.a=d},
a71:function a71(){},
bsm:function bsm(){},
mW:function mW(){},
qb:function qb(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rt:function rt(d,e){this.a=d
this.b=e},
tr:function tr(d,e){this.a=d
this.b=e},
Gq:function Gq(d){this.a=d},
Oj:function Oj(d){this.a=d},
za:function za(d,e){this.a=d
this.b=e},
ahb:function ahb(){},
ahc:function ahc(){},
ahp:function ahp(){},
akB:function akB(){},
akE:function akE(){},
amg:function amg(){},
amh:function amh(){},
ami:function ami(){},
amk:function amk(){},
aml:function aml(){},
amm:function amm(){},
amn:function amn(){},
aqK:function aqK(){},
asn:function asn(){},
aK9:function aK9(d){this.a=d},
aKa:function aKa(){},
aKb:function aKb(){},
zb:function zb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amj:function amj(){},
aKc:function aKc(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKf:function aKf(){},
aKd:function aKd(d,e,f){this.a=d
this.b=e
this.c=f},
aKe:function aKe(d,e,f){this.a=d
this.b=e
this.c=f},
aKg:function aKg(){},
vo:function vo(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a70:function a70(d,e,f){this.d=d
this.e=e
this.a=f},
ab7:function ab7(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a4=_.U=_.V=null
_.Y=i
_.bB=_.aE=_.ai=_.ap=$
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
bvG(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bG(o.length,0,!1,x.i),m=B.ad(o),l=new B.aa(o,new A.axu(),m.i("aa<1,F>")).km(0,new A.axv()),k=e-l,j=new A.axy(k,d,n)
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
new B.iO(o,m.i("iO<1>")).aw(0,new A.axw(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iO(o,m.i("iO<1>")).aw(0,new A.axx(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axu:function axu(){},
axv:function axv(){},
axy:function axy(d,e,f){this.a=d
this.b=e
this.c=f},
axz:function axz(d,e,f){this.a=d
this.b=e
this.c=f},
axw:function axw(d,e,f){this.a=d
this.b=e
this.c=f},
axx:function axx(d,e,f){this.a=d
this.b=e
this.c=f},
bwz(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iO(w,B.ad(w).i("iO<1>")).aw(0,new A.aHg(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHg:function aHg(d,e){this.a=d
this.b=e},
aAK(d,e){var w,v
if(e!=null){w=B.ad(e).i("aa<1,F>")
v=B.Q(new B.aa(e,new A.aAL(),w),w.i("aw.E"))
return A.c3k(d,new A.a1w(v,x.cX))}else return d},
aAL:function aAL(){},
bXv(d,e){var w=!0
if(d!==C.fw)if(!(d===C.ar&&e===C.w))w=d===C.is&&e===C.aZ
if(w)return D.E_
else{w=!0
if(d!==C.ir)if(!(d===C.is&&e===C.w))w=d===C.ar&&e===C.aZ
if(w)return D.E0
else return D.aa1}},
No:function No(d,e){this.a=d
this.b=e},
a1m:function a1m(d,e){this.a=d
this.b=e},
ze:function ze(d,e){this.a=d
this.$ti=e},
amu:function amu(){},
c3k(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cG($.an().r)
for(w=B.b([],x.C),v=new B.Oa(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.U(B.fu('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.O9(v,s)
v.D1()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D1()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.K4(d.aSG(r,p,p+n,!0),C.v,null)
t.push(q)
m=l.d
if(m!=null)q.ik(m)}p+=n
o=!o}}return l},
a1w:function a1w(d,e){this.a=d
this.b=0
this.$ti=e},
b1l:function b1l(){},
bwn(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fN))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bPO(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azB(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNJ()*w),C.d.aP(d.gFX()*w),C.d.aP(d.gK7()*w))},
bDL(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bwo(d){var w=d.a,v=w?A.aYN(d.b):0,u=w?A.aYN(d.c):0,t=w?A.aYN(d.d):0
return new B.ai(v,u,t,w?A.aYN(d.e):0)},
bUT(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bxh(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mO(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seU(null)}},
aYN(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ks(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k1(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k1(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4D(d,e,f){return C.d.aP(d+(e-d)*f)},
bzJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
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
A.a6O.prototype={
t(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aJ:C.m
r=r?C.n:C.a7
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ci(t.x,C.n,s,18),C.aQ],w))
v.push(B.aA(new B.dJ(t.c,!1,s),1))
v=B.ak(v,C.A,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.E,B.i(t.d,s,1,C.ag,s,B.bE(u==null?C.h:u,22,C.L),s,s,s)],w)
return B.by(r,B.ab(w,C.A,C.hm,C.i),q,s,C.ah,s,3)}}
A.uN.prototype={
Ly(d){return this.aSJ(d)},
aSJ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Ly=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_summary",B.a4(["p_from",E.r8(d.a),"p_to",E.r8(d.b)],s,r),r),$async$Ly)
case 3:q=f
if(q==null){u=D.apD
w=1
break}if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.aq4
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ly,v)},
Lx(d){return this.aSI(d)},
aSI(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lx=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_kpis",B.a4(["p_from",E.r8(d.a),"p_to",E.r8(d.b)],s,r),r),$async$Lx)
case 3:q=f
if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.apk
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lx,v)},
pB(d){return this.aqv(d)},
aqv(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pB=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a4(["from",E.r8(d.a),"to",E.r8(d.b)],s,s)),$async$pB)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fA(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pB,v)},
Lt(d){return this.aSy(d)},
aSy(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lt=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("finance-export-pdf",B.a4(["from",E.r8(d.a),"to",E.r8(d.b)],s,s)),$async$Lt)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aH(J.a3(r,"base64"))
w=1
break}throw B.e(B.dI("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lt,v)}}
A.E0.prototype={
FR(d){return this.ajA(d)},
ajA(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FR=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ly(d),$async$FR)
case 7:q=f
o=A.aF1(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FR,v)},
FN(d){return this.ajl(d)},
ajl(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FN=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lx(d),$async$FN)
case 7:q=f
o=A.bSn(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FN,v)},
pB(d){return this.aqw(d)},
aqw(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pB=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pB(d),$async$pB)
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
p=r.Hr(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pB,v)},
Ls(d){return this.aSx(d)},
aSx(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ls=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lt(d),$async$Ls)
case 7:q=f
o=C.iO.cN(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hr(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ls,v)},
Hr(d){if(d instanceof B.yl)return d
if(d instanceof B.m2){if(d.b==="42501")return new B.vJ(d.a)
return new B.t8(d.a)}if(d instanceof B.Nb)return new B.t8("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AZ("Unerwarteter Fehler: "+B.j(d))},
$iaEO:1}
A.qd.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vt.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wm.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAa.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBg.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o1.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CA.prototype={
gbE(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o2.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yo.prototype={
GN(d){return this.aqu(0)},
aqu(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GN=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dw)
s=t.r
r=s.aK(0,$.xj(),x.P)
p.a=null
w=3
return B.k(B.pa(new A.aEJ(p,t,r),x.H),$async$GN)
case 3:t.se4(0,f)
q=t.f
if(q.ght(q)==null){q=$.bve()
s=s.e
s===$&&B.a()
s.ck(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GN,v)},
Lr(){return this.aSw()},
aSw(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lr=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dw)
s=t.r.aK(0,$.xj(),x.P)
q.a=null
w=3
return B.k(B.pa(new A.aEI(q,t,s),x.H),$async$Lr)
case 3:t.se4(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lr,v)}}
A.yp.prototype={
dA(d,e){var w=null,v=e.au($.xj(),x.P),u=e.au($.bve(),x.aN)
return B.rZ(B.dB(B.b([new B.fv("Finanzen","Dashboard",new A.agi(e.au($.bvc(),x.b).gjc(),new A.aET(this,d,e),new A.aEU(this,d,e),new A.aEV(d),new A.aEW(d),new A.aEX(this,d,e,v),w),w),C.az,new A.anR(v,w),C.c4,D.afU,C.c4,B.dl(u,new A.aEY(),new A.aEZ(),new A.aF_(),!1,!0,!1,x.d,x.l)],x.p),w,C.cM,w,C.F,!1),C.n,new A.aF0(e))},
Jh(d,e){return this.aL3(d,e)},
aL3(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jh=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bvc()
w=3
return B.k(e.aK(0,s.ghP(),x.F).GN(0),$async$Jh)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bi(B.c5(null,null,null,null,null,C.t,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jh,v)},
Bf(d,e){return this.awt(d,e)},
awt(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bf=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aK(0,$.bvc().ghP(),x.F).Lr(),$async$Bf)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bi(D.axD)
w=1
break}t=B.or(C.v,10)
w=4
return B.k($.bM1().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bf)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bf,v)},
Bg(d,e,f){return this.aIJ(d,e,f)},
aIJ(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bg=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j6(null,null,!0,null,new A.aER(f,d),d,null,!0,!0,x.cJ),$async$Bg)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nE(e.aK(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dP()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zu("finance_period",p,o,B.a4(["period_from",p.ee()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bg)
case 8:if(d.e!=null)d.P(x.q).f.bi(F.v4)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bg,v)}}
A.agi.prototype={
t(d){var w=this,v=null,u=A.alD(C.n,F.hT,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alD(v,D.abN,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alD(v,D.xQ,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alD(C.ac,C.jf,C.ac,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.alD(C.aj,C.fP,C.aj,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.K,0,v,v)}}
A.alC.prototype={
t(d){var w,v=this,u=null,t=B.aB(12),s=B.aB(12),r=B.aB(12),q=v.w
if(q==null)q=C.a7
q=B.ct(q,1)
w=v.r
if(w==null)w=C.h
return B.H2(B.dC(!1,C.X,!0,t,B.ey(!1,s,!0,B.aV(u,B.ci(v.c,w,u,20),C.p,u,u,new B.aS(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a9,0,u,u,u,u,u,C.bq),u,v.d,u,u)}}
A.anR.prototype={
dA(d,e){var w=null,v=this.e,u=$.dP(),t=x.p
return B.by(w,B.ab(B.b([D.a97,C.E,B.ak(B.b([D.acF,C.aG,B.aA(B.i(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,w,B.y(C.h,16,C.L),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.u,B.kl(C.ch,B.b([new A.IO("Monat",new A.bhd(e),w,w),new A.IO("Jahr (YTD)",new A.bhe(e),w,w),new A.IO("Zeitraum w\xe4hlen \u2026",new A.bhf(this,d,e),D.aaV,w)],t),C.du,6,8)],t),C.A,C.f,C.i),w,w,C.D,w,3)},
ID(d,e){return this.aHD(d,e)},
aHD(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$ID=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avc(new A.bhc(),d,B.bO(B.aZ(t)-5,1,1,0,0,0,0),new B.lC(s.a,s.b,x.bz),B.bO(B.aZ(t)+1,1,1,0,0,0,0),C.e1),$async$ID)
case 2:r=g
if(r!=null)e.aK(0,$.xj().ghP(),x.V).wu(0,new E.lI(r.a,r.b))
return B.o(null,v)}})
return B.p($async$ID,v)}}
A.IO.prototype={
t(d){var w=null,v=B.aB(9999),u=B.aB(9999),t=B.aB(9999),s=B.ct(C.a7,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ci(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.L),w,w,w))
return B.dC(!1,C.X,!0,v,B.ey(!1,u,!0,B.aV(w,B.ak(q,C.k,w,C.f,C.K,0,w,w),C.p,w,w,new B.aS(w,w,s,t,w,w,C.B),w,w,w,w,C.j2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a9,0,w,w,w,w,w,C.bq)}}
A.Jg.prototype={
t(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jl(new A.bnC(this)),C.c4,D.a9b,C.u],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ak(B.b([D.ad5,C.at,B.aA(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.q,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a9,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.L(w,B.b([new A.agg(t.a,t.b,t.c==="revenue",t.d,s),C.E],r))}q.push(B.ab(w,C.k,C.f,C.i))}return B.ab(q,C.aa,C.f,C.i)}}
A.agg.prototype={
t(d){var w=this,v=null,u=w.e,t=u?C.aJ:C.a9,s=B.ct(u?C.n:C.a7,1),r=B.aB(4),q=w.c
r=B.aV(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bE(C.h,14,C.o),v,v,v),C.p,v,v,new B.aS(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ag,v,B.y(C.h,14,C.L),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aA(B.ab(B.b([q,B.i(t,v,v,v,v,B.y(C.q,12,C.l),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dA().aq(w.f)
return B.by(v,B.ak(B.b([r,C.at,t,B.i(q,v,v,v,v,B.y(u?C.aj:C.h,15,C.L),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.eg,v,3)}}
A.HV.prototype={
t(d){var w=null
return B.by(C.ac,B.ak(B.b([D.adE,C.at,B.aA(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fK,w,C.D,w,3)}}
A.a6P.prototype={
dA(d,e){return B.dl(e.au($.bOt(),x.e),new A.aJR(),new A.aJS(),new A.aJT(),!1,!0,!1,x.X,x.l)}}
A.If.prototype={
t(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.auX,C.u,B.jl(new A.ben(v,q,100-t.w.a,w,p)),C.u,new A.akX(u),C.az,D.auW,C.u,new A.aha(t,u),C.az,D.auR,C.u,B.bA(u,!0,u,B.kK(u,B.by(u,new A.TU(t,220,u),u,u,C.D,u,3),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.beo(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.az,D.auL,C.u,B.bA(u,!0,u,B.kK(u,new A.U6(t,200,!1,u),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bep(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.az,D.auP,C.u,new A.amD(t,u),C.az,D.auM,C.u,new A.aiY(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.az,D.auT,C.u,new A.ask(t,u)],s))
return B.ab(r,C.aa,C.f,C.i)}}
A.akX.prototype={
t(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.q,11,C.l).dm(1.35),w,w,w)}}
A.am9.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.ac:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.beq(m,d):l
r=x.p
q=B.b([B.aA(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.q,10,C.o).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.ct(C.ac,0.8)
n=B.aB(4)
q.push(B.aV(l,B.i("Ziel "+p,l,l,l,l,B.y(C.ac,9,C.o),l,l,l),C.p,l,l,new B.aS(l,l,o,n,l,l,C.B),l,l,l,l,C.nn,l,l,l))}q=B.b([B.ak(q,C.k,l,C.f,C.i,0,l,l),C.ba,B.aF5(C.dc,B.i(m.d,l,l,l,l,B.bE(w,22,C.o),l,l,l),C.ks)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ag,l,B.y(C.q,10,C.aF),l,l,l))
q.push(C.ce)
q.push(B.ak(B.b([new A.UH("Vormonat",m.r,l),C.cx,new A.UH("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.ce)
q.push(B.aA(new A.Ye(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.kK(l,B.by(l,B.ab(q,C.A,C.f,C.i),l,l,C.cE,l,3),C.a8,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.UH.prototype={
t(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aB(4)
return B.aV(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.q,9,C.o),r,r,r),C.p,r,r,new B.aS(C.a7,r,r,q,r,r,C.B),r,r,r,r,C.nn,r,r,r)}w=q>=0
v=w?C.aj:C.ac
u=v.ez(0.12)
t=B.ct(v,0.7)
s=B.aB(4)
return B.aV(r,B.ak(B.b([B.ci(w?F.aa7:D.aa6,v,r,10),C.Zf,B.i(this.c+" "+C.d.ak(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.K,0,r,r),C.p,r,r,new B.aS(u,r,t,s,r,r,C.B),r,r,r,r,C.nn,r,r,r)}}
A.Ye.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ev(v,j[v]))
u=C.b.km(j,new A.bmJ())
t=C.b.km(j,new A.bmK())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bmL(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5a(k,!1)
w=B.b([A.aK7(k,2,A.axr(!1,C.n.ez(0.16),0,k,!0,D.w0),C.n,0.35,k,D.DR,k,!0,!1,!0,!1,D.Fc,!1,10,D.YI,!0,C.lq,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oh(A.bwV(k,k,k,D.alQ,l,D.BJ,D.DN,D.DS,w,D.afY,k,m,k,n,D.Y0,D.alR,D.a9q),C.ak,C.a1,k,k)}}
A.TU.prototype={
t(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aKp
w=C.b.fA(p,0,new A.b54())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axA(B.b([A.a0T(q,q,D.Ba,q,C.n,q,q,q,r.b,6),A.a0T(q,q,D.Ba,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return new B.aR(q,this.d,A.bCr(A.axt(q,q,u,q,q,A.a5a(q,!1),q,new A.yr(!0,!0,q,new A.b55(),A.a_q(),!1,q,A.auX(),A.a_q()),q,v,q,q,new A.uP(!0,new A.pb(16,q,new A.q3(!0,new A.b56(this),46,q),!0),D.kp,D.kp,new A.pb(16,q,new A.q3(!0,new A.b57(p),26,q),!0)))),q)},
aKk(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.U6.prototype={
t(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.aa(v,new A.b5Z(),w),x.i)
C.b.L(o,new B.aa(u,new A.b6_(),w))
t=C.b.fA(o,0,new A.b60())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axA(B.b([A.a0T(q,q,q,q,C.n,q,q,q,v[s],14),A.a0T(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=new B.aR(q,this.d,A.bCr(A.axt(q,q,n,q,q,A.a5a(q,!1),q,D.DS,q,o,q,q,new A.uP(!0,D.kp,D.kp,D.kp,new A.pb(16,q,new A.q3(!0,new A.b61(p),26,q),!0)))),q)
return this.e?r:B.by(q,r,q,q,C.D,q,3)}}
A.amD.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aKo
w=new B.aa(l,new A.beU(),B.ad(l).i("aa<1,F>")).km(0,new A.beV())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dA()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.i8(C.as,C.f,C.i,C.k,m,C.b2,m,0,B.b([new B.jU(1,C.dB,B.ab(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,m,B.y(C.q,12,C.aF),m,m,m)],v),C.A,C.f,C.i),m),C.aG,B.i(p.aq(o),m,m,m,m,B.bE(C.h,16,C.o),m,m,m)],v),m),C.ce,new B.Dg(new B.d_(n,n,n,n),C.bv,B.EE(C.a7,8,C.d.bt(o/w,0,1),D.AZ),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.I(r)===B.I(q)&&B.a_t(r.gbE(),q.gbE())
else q=!0
if(!q)o.push(C.u)
C.b.L(u,o)}return B.by(m,B.ab(u,C.k,C.f,C.i),m,m,C.D,m,3)}}
A.aiY.prototype={
t(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aA(new A.C4("Aktive Kunden",""+s,u),1)
w=B.aA(new A.C4("K\xe4ufe",""+t.a,u),1)
v=$.dA()
return B.by(u,B.ak(B.b([s,w,B.aA(new A.C4("\xd8-Warenkorb",v.aq(t.d),u),1),B.aA(new A.C4("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.C4.prototype={
t(d){var w=null
return B.ab(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.q,10,C.o).fw(0.6),w,w,w),C.bj,B.i(this.d,w,w,w,w,B.bE(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.K)}}
A.ask.prototype={
t(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.boU(),B.ad(q).i("aa<1,F>")).km(0,new A.boV()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.i8(C.as,C.f,C.i,C.k,r,C.b2,r,0,B.b([new B.jU(1,C.dB,B.i(u.b,r,1,C.ag,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.q,12,C.L),r,r,r),B.i($.dA().aq(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.ba,new B.Dg(new B.d_(s,s,s,s),C.bv,B.EE(C.a7,6,C.d.bt(t/p,0,1),D.AZ),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.I(u)===B.I(s)&&B.a_t(u.gbE(),s.gbE())
else s=!0
if(!s)t.push(C.E)
C.b.L(n,t)}return B.by(r,B.ab(n,C.k,C.f,C.i),r,r,C.D,r,3)}}
A.wF.prototype={
t(d){var w=null
return B.by(w,B.i(this.c,w,w,w,w,B.y(C.q,13,C.l),w,w,w),C.a9,w,C.D,w,3)}}
A.aha.prototype={
dA(d,e){return B.dl(e.au($.bvd(),x.fM),new A.b3t(this,d,e),new A.b3u(),new A.b3v(),!1,!0,!1,x.h,x.l)}}
A.B6.prototype={
W(){return new A.Tw()},
aXA(){return this.d.$0()}}
A.Tw.prototype={
ao(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fg(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pw[t].a
if(v)r=""
else{r=B.bp(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b1(r,".",",")}u.m(0,s,new B.bM(new B.cT(r,C.bH,C.aR),$.ag()))}q.e!==$&&B.b6()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c8(v,v.r,v.e,B.l(v).i("c8<2>"))
while(v.u()){w=v.d
w.S$=$.ag()
w.T$=0}this.an()},
rh(d){var w=this.e
w===$&&B.a()
w=C.c.bm(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.js(B.b1(w,",","."))
return w==null?0:w},
a3N(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pw[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b1(s,".",",")
t.ku(0,t.a.xX(C.aR,C.bH,s))}}this.J(new A.b3h())},
aEc(){this.a3N(D.apF)
this.c.P(x.q).f.bi(D.axX)},
HT(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HT=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pw[e].a)
q=a2
t=4
w=7
return B.k($.aEC.ci().zb(B.b(["csv","txt"],x.s),C.xB,!0),$async$HT)
case 7:p=a5
a2=p
o=a2==null?null:J.K1(a2.a).c
if(o==null){w=1
break}n=C.aE.acZ(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BO.cN(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.avO(l,B.bS("[;,\t]",!0,!1,!1))
if(J.ch(k)<2)continue
j=C.c.bm(J.a3(k,0)).toLowerCase()
i=J.Cw(q,j)?j:D.aq5.h(0,j)
if(i==null)continue
d=C.c.bm(C.b.n5(J.bPe(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.js(h)
if(g!=null)J.fo(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bi(D.axA)
w=1
break}r.a3N(m)
r.c.P(x.q).f.bi(B.c5(null,null,null,null,null,C.t,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HT,v)},
I3(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I3=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3i(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_1("upsert_finance_balance",B.a4(["p_as_of",C.c.a0(n.ee(),0,10),"p_cash_and_bank",q.rh("cash_and_bank"),"p_receivables",q.rh("receivables"),"p_inventory_value",q.rh("inventory_value"),"p_other_current_assets",q.rh("other_current_assets"),"p_fixed_assets",q.rh("fixed_assets"),"p_current_liabilities",q.rh("current_liabilities"),"p_long_term_liabilities",q.rh("long_term_liabilities"),"p_equity",q.rh("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I3)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXA()
o=q.c
o.toString
B.be(o,!1).f2()
q.c.P(x.q).f.bi(D.axE)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bi(B.c5(null,null,null,null,null,C.t,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.M,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b3j(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I3,v)},
t(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bE(C.h,18,C.o),r,r,r),p=s.f?r:new A.b3l(s,d),o=s.d
o===$&&B.a()
p=B.hq(D.acH,B.i("Stichtag: "+C.c.a0(o.ee(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aA(B.hq(D.adN,D.aDE,o?r:s.gaDe(),r),1)
v=x.p
w=B.b([p,C.E,B.ak(B.b([w,C.aG,B.aA(B.hq(D.adC,D.aDt,o?r:s.gaEb(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.pw[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.f1(r,C.aW,!1,r,!0,C.t,r,B.fe(),o.h(0,p.a),r,r,r,r,r,2,new B.ce(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a8,!0,r,!0,r,!1,r,C.b_,r,r,r,r,C.iu,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ar,r,C.a3,r,r,r,r),C.E],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.q,11,C.l),r,r,r))
p=B.f9(B.ab(w,C.aa,C.f,C.K),r,C.F)
o=s.f
w=B.dM(C.cZ,r,r,o?r:new A.b3m(d),r,r)
o=o?r:s.gaDW()
t=B.dK(C.n,C.h,r,r,r,r,r)
return B.lw(B.b([w,B.dW(s.f?F.Zi:C.ev,o,t)],v),C.m,new B.aR(380,r,p,r),q)}}
A.bg.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.I(this)===B.I(e)&&B.a_t(this.gbE(),e.gbE())
else w=!0
return w},
gv(d){return(B.eB(B.I(this))^B.bKp(this.gbE()))>>>0},
j(d){B.bDH()
return B.I(this).j(0)}}
A.KM.prototype={
W(){return new A.Tx(B.A(x.S,x.I),new A.axD(B.A(x.x,x.T)),null,null)}}
A.Tx.prototype={
t(d){var w,v=this,u=v.a1L(),t=v.CW
t.toString
t=v.a1M(t.ar(0,v.gfs().gp(0)))
w=v.a1M(u)
v.a.toString
return new A.KH(new A.a0S(t,w,null),u,null)},
a1M(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axA(s.c,s.d,!1,r,s.a))}return d.aPz(w)},
a1L(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UB(t.ch)
if(r)s=w.a
r=t.y
t=t.aQu(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPA(A.bvH(!1,!0,!0,v.d,v.c,u.gas0(),v.f,v.e))}return t},
as1(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafq()||e==null||e.a==null){w=v.cy
v.J(w.gaOZ(w))
return}v.J(new A.b3y(v,e))},
lw(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1L(),new A.b3z(w)))}}
A.nL.prototype={
Va(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axt(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQu(d,e){return this.Va(null,null,d,e)},
aPA(d){return this.Va(null,d,null,null)},
aPz(d){return this.Va(d,null,null,null)},
X5(d,e,f){var w,v,u,t=A.ks(d.ch,e.ch,f,A.c2A(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bDO(d.d,e.d,f),q=A.bFK(d.e,e.e,f),p=A.bDM(d.c,e.c,f),o=e.a
o=A.a5a(B.a19(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axt(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bDJ(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbE(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axs.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fC.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.axB(),B.ad(v).i("aa<1,F>")).km(0,new A.axC())
v=v.length
return w+(v-1)*this.d},
gbE(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ij.prototype={
gbE(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.my.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0P.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0U.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adL.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0V.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CR.prototype={
gbE(){return[this.a,this.b,C.c5,C.w,null]}}
A.KN.prototype={}
A.a0W.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xy.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X5(v,w,d)}}
A.ah6.prototype={}
A.ahd.prototype={}
A.ahe.prototype={}
A.ahg.prototype={}
A.ahh.prototype={}
A.ahi.prototype={}
A.ahj.prototype={}
A.ahk.prototype={}
A.ahl.prototype={}
A.axD.prototype={
UB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.ur(0,0,!1)
v=new A.ze(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.ur(t,u,!0)}w=null
try{w=C.b.oS(d,new A.axE())}catch(s){return new A.ur(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.ur(q,r,!1)
u.m(0,v,j)
return j}}
A.ur.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.ahf.prototype={}
A.axF.prototype={
i9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_Q(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac0(t,A.bvG(w,t.a),u)
l.y=u
l.aRQ(e,u,f)
l.alz(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRZ(d,e,m,t,r,s,n,o,f)}}},
ac0(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dI("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iO(p,B.ad(p).i("iO<1>")).aw(0,new A.axG(t,q,r,s))
w.push(new A.a5R(q))}return w},
aRQ(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d_(k,k,k,k)}j=o.w
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
a4=B.PZ(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.PZ(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seU(null)
a6=b3.f.el()
u.drawRRect(B.lr(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.b0(u.save())
u.clipRect(B.dO(b1),$.p1()[1],!0)
a6=b3.f.el()
u.drawRRect(B.lr(a4),a6)
a6.delete()
u.restore()
b3.aRX(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gek(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cG($.an().r)
n=new B.hc(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.ik(k)
v.fW(A.aAK(b2,o.r),b3.r)}}}},
aRZ(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AO(a5,a5,a5,a5,B.d9(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lt().ZQ(a8,a7.b),a7.a),C.c5,C.w,a5,b6.c,C.bA)
w.afJ(b1.f)
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
n=u+o.geu()
m=v+4+(o.gd_(0)+o.gd3(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aG0)j=v===D.ZZ&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZR(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FN(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lt().Ki(new B.G(v,t),d).b
s=$.lt()
q=w.b
p=q.c
q=q.a.c
a0=s.Ki(new B.G(p,q.gbU(q)),d)
q=g.gc9()
p=w.b.c
s=g.gai_()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VM(d,new A.axH(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aRX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gek(w)===0}else w=!0
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
q=B.PZ(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.PZ(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bxB(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Wr(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac0(b2,A.bvG(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0W(d,q,a0,o,a2,a1,new A.ev(d.a,v),new B.r(n,t))}}return null}}
A.a5R.prototype={}
A.a0S.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.axF()
t.a12()
$.an()
w=B.b_()
w.b=C.bf
t.f=w
w=B.b_()
w.b=C.aX
t.r=w
w=B.b_()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.b_()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aaV(this.d,v,u,t,d,C.bu,new B.bs(),B.aK(x.v))
t.bl()
t.YM(v.cy)
t.aeS()
return t},
bz(d,e){e.sio(0,this.d)
e.sYx(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.aaV.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYx(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0A(d.cy)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a1m(t,v),new A.vF(u.aC,u.i3,u.cW,x.Q))
s.restore()},
ZK(d){var w=this,v=w.gC(0)
return new A.KN(w.fX.Wr(d,v,new A.vF(w.aC,w.i3,w.cW,x.Q)))}}
A.a0I.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CQ.prototype={
K(){return"AxisSide."+this.b}}
A.tq.prototype={}
A.q3.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acj.prototype={
gbE(){return[!1,0,0,0]}}
A.pb.prototype={
gbE(){return[this.b,this.a,this.c,!0]}}
A.uP.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ev.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ev))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yr.prototype={
gbE(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.py.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adN.prototype={
gbE(){return[this.a,this.b]}}
A.Q2.prototype={
gbE(){return[this.a,this.b]}}
A.mT.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ni.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kL.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.la.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a61.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae9.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MG.prototype={
gbE(){return[this.a,this.b,!0]}}
A.uO.prototype={}
A.MR.prototype={
adq(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iT(f,this.b,w)},
gbE(){return[this.a,this.b,this.c,0]}}
A.ah1.prototype={}
A.ah5.prototype={}
A.akk.prototype={}
A.akC.prototype={}
A.akD.prototype={}
A.akF.prototype={}
A.akG.prototype={}
A.als.prototype={}
A.alr.prototype={}
A.alt.prototype={}
A.aoZ.prototype={}
A.aqL.prototype={}
A.aqM.prototype={}
A.aso.prototype={}
A.at1.prototype={}
A.at0.prototype={}
A.at2.prototype={}
A.axi.prototype={
Mw(d,e,f,g,h,i){return new B.id(this.aVE(d,e,f,g,h,i),x.g4)},
aVD(d,e,f,g){return this.Mw(d,e,f,!0,g,!0)},
aVE(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mw(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lt().aj7(s,u,v,w)
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
A.KG.prototype={
a12(){var w,v=this
$.an()
w=B.b_()
w.b=C.aX
v.a=w
w=B.b_()
w.b=C.bf
v.b=w
w=B.b_()
w.b=C.bf
v.e=w
w=B.b_()
w.b=C.aX
v.c=w
v.d=B.b_()},
i9(d,e,f){var w=this
w.a_R(d,e,f)
w.aRM(e,f)
w.aRW(e,f)
w.aRV(e,f)},
aRV(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lt().OA(w.a,a1.r-a1.f)
u=$.buQ().Mw(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l_(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mO(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Du(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lt().OA(w.b,a1.y-a1.x)
u=$.buQ().Mw(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fd(u.a(),u.$ti.i("fd<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l_(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mO(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Du(n,m,d.a,f.d)}},
aRM(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aRW(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.l_(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mO(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seU(null)}o=n.e.el()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.l_(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mO(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seU(null)}o=n.e.el()
j.drawRect(B.dO(s),o)
o.delete()}},
aRU(d,e,f){var w,v
this.a_R(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adr(d,e,f,w)
if(v.b.length!==0)this.aS0(d,e,f,w)},
adr(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l_(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Du(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=C.d.al(o,n.gbU(n).eG(0,2))
J.b0(r.save())
r.translate(h,g)
n=n.gNt().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
o=C.d.al(o,n.gbU(n).eG(0,2))
k=f.d
k===$&&B.a()
s.ads(0,n,new B.r(h,o),k)}}},
aS0(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l_(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Du(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eG(0,2)
g=n.gbU(n).eG(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.b0(r.save())
r.translate(f,e)
n=n.gNt().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eG(0,2)
g=n.gbU(n).ae(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.ads(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZR(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KH.prototype={
gakR(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakS(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakT(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakP(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alc(d){var w,v=this,u=null,t=v.d,s=A.bwo(t.d),r=t.a
r=r.a&&A.bPO(r.b)?r.b:u
w=B.b([B.aV(u,v.c,C.p,u,u,new B.aS(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.axk(w)
if(v.gakR())C.b.hz(w,s.$1(!0),new A.Ay(D.B5,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakT())C.b.hz(w,s.$1(!0),new A.Ay(D.mB,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakS())C.b.hz(w,s.$1(!0),new A.Ay(D.B6,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakP())C.b.hz(w,s.$1(!0),new A.Ay(D.dM,t,new B.G(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
t(d){return B.jl(new A.axj(this))}}
A.Rt.prototype={
W(){return new A.Y3(new B.bi(null,x.eF))}}
A.Y3.prototype={
axt(){switch(this.a.c.a){case 0:return C.ea
case 1:return C.fD
case 2:return C.dc
case 3:return C.fa}},
axZ(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
axv(d){this.a.toString
return},
ao(){this.aI()
$.cA.x1$.push(this.ga4g())},
bb(d){this.bD(d)
$.cA.x1$.push(this.ga4g())},
t(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axZ()
return B.SJ(B.b0T(0,B.aV(v.axt(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ack.prototype={
bn(d){return A.bPF(this.f,this.r,this.e)},
bz(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a0J.prototype={
hn(d){if(!(d.b instanceof B.hl))d.b=new B.hl(null,null,C.v)},
hX(d){if(this.B===C.as)return this.y6(d)
return this.ad2(d)},
aKw(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8W(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a8V(d,B.hB())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a8V(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.as?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hd(u,null)
break
case 1:q=B.hd(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8W(p)
t=Math.max(t,o.aKw(p))
m=r.aG$}return new A.bew(n<1/0?n:s,t)},
cw(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a8V(o,B.mu()),m=n.a,l=n.b
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
q=s.b-p.a8W(r==null?B.U(B.Y("RenderBox was not laid out: "+B.I(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e9(d,e){return this.y7(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v0(d,e)},
l(){this.a4.sbh(0,null)
this.ao8()}}
A.bew.prototype={}
A.axl.prototype={}
A.jP.prototype={
gbE(){return[this.a,this.b]}}
A.nK.prototype={}
A.ah2.prototype={}
A.ah3.prototype={
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
A.ah4.prototype={}
A.Tu.prototype={
l(){var w,v,u
for(w=this.W_$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.Ay.prototype={
goz(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dc
case 1:return C.fa
case 2:return C.ea
case 3:return C.fD}},
gb_e(){var w=this.d,v=A.bwo(w.d),u=A.bDL(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ae(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ae(0,new B.ai(u.a,0,u.c,0))}},
gahO(){var w=this.d,v=A.bDL(w.a),u=A.bwo(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd3(0)+(v.gd_(0)+v.gd3(0))
case 1:case 3:return u.geu()+v.geu()}},
aWn(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goz().c.d
if(o==null)o=$.lt().OA(d,f-e)
w=p.c
v=w!==D.mB
if((!v||w===D.dM)&&p.d instanceof A.nL){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bvG(u,d)
w=new B.iO(t,B.ad(t).i("iO<1>"))
s=w.giF(w).f1(0,new A.aYQ(u),x.W).fZ(0)}else{r=$.buQ()
w=!v||w===D.dM
v=p.d
q=r.aVD(w?v.w:v.z,o,f,e)
v=B.og(q,new A.aYR(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("aa<1,nK>")
w=B.Q(new B.aa(s,new A.aYS(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goz()
w=j.goz()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aV(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mB
u=!v
t=!u||w===D.dM
s=j.e
r=t?s.a:s.b
t=j.ghJ()
s=!u||w===D.dM?C.F:C.as
q=B.b([],x.p)
if(w===D.B5||v)j.goz()
if(j.goz().c.a){v=!u||w===D.dM?r:j.goz().c.c
p=!u||w===D.dM?j.goz().c.c:r
o=j.gb_e()
n=!u||w===D.dM?C.as:C.F
j.gahO()
m=j.gahO()
l=!u||w===D.dM
k=j.d
l=l?k.f:k.x
u=!u||w===D.dM?k.r:k.y
q.push(B.aV(i,A.bWV(new A.axl(),n,j.aWn(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B6||w===D.dM)j.goz()
return new B.er(t,i,i,B.bSr(q,C.k,s,i,C.f,C.K,0,i,i,C.b2),i)}}
A.a0Y.prototype={
gbE(){return[this.a,this.b]}}
A.a59.prototype={
gbE(){return[this.a,this.b]}}
A.MY.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5b.prototype={
gabl(d){return!1},
gbE(){return[!1,!1,!1,!1]}}
A.axQ.prototype={}
A.aE8.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.aho.prototype={}
A.akz.prototype={}
A.akA.prototype={}
A.akH.prototype={}
A.KQ.prototype={
i9(d,e,f){}}
A.vF.prototype={}
A.hk.prototype={
gdL(){return null},
gafq(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.MX
if(w)return!0
return!(v instanceof A.MU)&&!(v instanceof A.MT)&&!(v instanceof A.MV)&&!(v instanceof A.MS)&&!w&&!(v instanceof A.MW)}}
A.a5f.prototype={
gdL(){return this.a.b}}
A.a5g.prototype={
gdL(){return this.a.b}}
A.a5h.prototype={
gdL(){return this.a.b}}
A.MT.prototype={}
A.MU.prototype={}
A.a5k.prototype={
gdL(){return this.a.b}}
A.MW.prototype={}
A.MX.prototype={
gdL(){return this.a.b}}
A.a5e.prototype={
gdL(){return this.a.b}}
A.a5d.prototype={
gdL(){return this.a.b}}
A.MS.prototype={
gdL(){return this.a.b}}
A.a5i.prototype={
gdL(){return this.a.gdL()}}
A.a5j.prototype={
gdL(){return this.a.gdL()}}
A.MV.prototype={
gdL(){return this.a.gdL()}}
A.FZ.prototype={
YM(d){this.V=d.b
this.U=d.c
this.a4=d.d},
aeS(){var w=this,v=null,u=w.ai=B.bxi(v,v)
u.ay=new A.aU7(w)
u.ch=new A.aU8(w)
u.CW=new A.aU9(w)
u.cy=new A.aUa(w)
u.cx=new A.aUb(w)
u=w.aE=B.GO(v,-1,v)
u.B=new A.aUc(w)
u.Y=new A.aUd(w)
u.V=new A.aUe(w)
u=w.bB=B.a78(v,w.a4,v)
u.p3=new A.aUf(w)
u.p4=new A.aUg(w)
u.RG=new A.aUh(w)},
cw(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kK(d){return!0},
mY(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bB
w===$&&B.a()
w.rE(d)
w=v.aE
w===$&&B.a()
w.rE(d)
w=v.ai
w===$&&B.a()
w.rE(d)}else if(x.gJ.b(d))v.l7(new A.a5j(d))},
gN_(d){return new A.aUi(this)},
gN1(d){return new A.aUj(this)},
l7(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZK(w):null
u.V.$2(d,v)
u.Y=C.bu},
gKO(d){return this.Y},
gFq(){var w=this.ap
w===$&&B.a()
return w},
aQ(d){this.fq(d)
this.ap=!0},
aF(d){this.ap=!1
this.fi(0)},
$ijn:1}
A.Oh.prototype={
W(){return new A.VR(B.b([],x.r),B.A(x.S,x.I),new A.aK9(B.A(x.y,x.dj)),null,null)}}
A.VR.prototype={
t(d){var w,v=this,u=v.a4i(),t=v.CW
t.toString
t=v.aaV(t.ar(0,v.gfs().gp(0)))
w=v.aaV(u)
v.a.toString
return new A.KH(new A.a70(t,w,null),u,null)},
aaV(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("aa<1,ea>")
w=B.Q(new B.aa(w,new A.beB(this,d),v),v.i("aw.E"))
return d.aQr(w,this.cy)},
a4i(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UB(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQG(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQ5(new A.ED(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayN(),t.c,t.d))}return r},
ayO(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafq())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bez(v))
return}v.J(new A.beA(v,e))},
lw(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4i(),new A.beC(w)))}}
A.pK.prototype={
X5(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5a(B.a19(d.a.b,j.b,f),j.a)
w=A.bDJ(d.at,e.at,f)
v=A.bDM(d.c,e.c,f)
u=A.bDO(d.d,e.d,f)
t=A.bFK(d.e,e.e,f)
s=A.ks(d.ch,e.ch,f,A.c4F(),x.cz)
s.toString
r=A.ks(d.CW,e.CW,f,A.c4E(),x.J)
r.toString
u=A.bwV(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vb(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bwV(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQG(d,e,f,g){return this.Vb(null,null,d,e,f,g,null)},
aQ5(d){var w=null
return this.Vb(w,d,w,w,w,w,w)},
aQr(d,e){var w=null
return this.Vb(d,w,w,w,w,w,e)},
gbE(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ea.prototype={
aqN(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oS(n.a,new A.aK8())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fN))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b6()
n.b=q
r.toString
n.c!==$&&B.b6()
n.c=r
s.toString
n.d!==$&&B.b6()
n.d=s
t.toString
n.e!==$&&B.b6()
n.e=t}},
acI(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aK7(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQc(d){return this.acI(d,null)},
aQe(d){return this.acI(null,d)},
gbE(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Oi.prototype={
gbE(){return[this.a]}}
A.a0R.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mz.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KL.prototype={
gbE(){return[!1,this.b,this.c,!0]}}
A.yq.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.aJU.prototype={
K(){return"LabelDirection."+this.b}}
A.a5c.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.ED.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a71.prototype={
gbE(){return[4,C.hN,16,D.xy,0,120,A.c4H(),!1,!1,!1,0,C.I,A.c4G()]}}
A.mW.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qb.prototype={}
A.rt.prototype={
gbE(){return[this.a,this.b,C.c5,C.w,null]}}
A.tr.prototype={
gbE(){return[this.a,this.b]}}
A.Gq.prototype={
gbE(){return[this.a]}}
A.Oj.prototype={}
A.za.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X5(v,w,d)}}
A.ahb.prototype={}
A.ahc.prototype={}
A.ahp.prototype={}
A.akB.prototype={}
A.akE.prototype={}
A.amg.prototype={}
A.amh.prototype={}
A.ami.prototype={}
A.amk.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.amn.prototype={}
A.aqK.prototype={}
A.asn.prototype={}
A.aK9.prototype={
UB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ya
u=new A.ze(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zb(s,r,q,t,!0)}w=null
try{w=C.b.oS(d,new A.aKa())}catch(p){return D.ya}v=null
try{v=C.b.oS(w.a,new A.aKb())}catch(p){return D.ya}o=v.a
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
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amj.prototype={}
A.aKc.prototype={
i9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabl(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aP5(new B.H(0,0,u,v))}d.a_Q(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aRS(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRO(a3,q,a4)
d.aRT(a3,q,a4)
d.aly(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gq(o)!==p.length)throw B.e(B.dI("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vo(q,i,j,k))}}d.aS_(a3,s,a4)
if(w.gabl(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRY(a2,a3,v,f,new A.Gq(g),a4)}},
aRO(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bwn(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Zj(o,e,u,f)
s=p.aj_(o,e,t,u,f)
r=p.Zl(o,e,t,u,f,!0)
q=p.aiZ(o,e,t,u,f)
p.aRR(d,s,p.Zi(o,e,t,u,f,!0),f,e)
p.aRL(d,q,r,f,e)
p.aRP(d,t,e)
p.aRN(d,t,e,f)}},
aRS(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bwn(a6.a),a9=A.bwn(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cH<1>")
k=B.Q(new B.cH(m,l),l.i("aw.E"))
j=a3.Zj(a4,a6,n,b3)
i=a3.Zk(a4,a7.aQe(k),k,b3,j)
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
a1.seU(u.mO(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mC(C.dx,C.bf,C.e4,C.et,C.dT).el()
m=B.dO(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.U(B.vl(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aRT(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zp(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fN)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adq(s,q,new B.r(p,o))}}},
aS_(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKf())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Zp(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rs(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lp(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lp(q.$2(m,k))))
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
b0=B.l_(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mO(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Du(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rs(d.a))
f.adq(t,j,new B.r(h,g))}}},
Zk(d,e,f,g,h){var w=this.aj0(d,e,f,g,h)
return w},
Zj(d,e,f,g){return this.Zk(d,e,f,g,null)},
aj0(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cG($.an().r):a5,f=J.Z(a3),e=f.gq(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f8(d,a0))
if(e===1)g.aA(new B.cq(d,a0))}else g.aA(new B.cq(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
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
s=new B.LL(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.ik(r)}return g},
Zl(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bwT(f)
v=J.Z(g)
u=s.fd(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aA(new B.cq(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cq(u,t))
w.aA(new B.cq(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pj())
return w},
aj_(d,e,f,g,h){return this.Zl(d,e,f,g,h,!1)},
Zi(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bwT(f)
v=J.Z(g)
u=t.fd(v.h(g,v.gq(g)-1).a,d,h)
w.aA(new B.cq(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cq(u,0))
w.aA(new B.cq(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pj())
return w},
aiZ(d,e,f,g,h){return this.Zi(d,e,f,g,h,!1)},
aRR(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bxh(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fW(e,r.r)},
aRL(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bxh(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRP(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Oa(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ip:C.e4
u.e=C.et
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lt()
u.z=new B.zj(C.aA,w.c*0.57735+0.5)
d.a.fW(B.bwU(A.aAK(e,f.cy),w.b),this.f)},
aRN(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ip:C.e4
q.e=C.et
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
A.bxh(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bUT(t)
d.a.fW(A.aAK(e,f.cy),s.f)},
aRY(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bJV(b1),b3=J.Z(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dI("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lt().ZQ(b4,u.b)
s=u.a
r=w.k(0,C.iT)?new B.kn(1):w
q=new B.to(new B.hS(s,a8,a8,C.bu,a8,a8,a8,a8,a8,a8,t),C.c5,C.w,r,a8,a8,a8,a8,C.bA,a8)
q.afJ(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hN.geu()
k=o+(w-1)*4+(C.hN.gd_(0)+C.hN.gd3(0))
j=t-k-16
i=a7.ZR(b3,l,D.xy,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FN(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bJU(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lt().Ki(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lt().Ki(new B.G(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VM(0,new A.aKd(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bXv(q.r,q.w)
A:{if(D.E_===a5){a6=a3
break A}if(D.E0===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VM(0,new A.aKe(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zp(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Wr(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajr(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKg())
return t.length===0?null:t},
ajr(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fN))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qb(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vo.prototype={}
A.a70.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.aKc()
t.a12()
$.an()
w=B.b_()
w.b=C.aX
t.f=w
w=B.b_()
w.b=C.bf
t.r=w
w=B.b_()
w.b=C.aX
t.w=w
w=B.b_()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a09
t.x=w
w=B.b_()
w.b=C.aX
w.r=C.C.gp(0)
t.y=w
w=B.b_()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.b_()
w.b=C.aX
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.ab7(this.d,v,u,t,d,C.bu,new B.bs(),B.aK(x.v))
t.bl()
t.YM(v.cx)
t.aeS()
return t},
bz(d,e){e.sio(0,this.d)
e.sYx(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bf()}}
A.ab7.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYx(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0A(d.cx)
w.bf()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a1m(t,v),new A.vF(u.aC,u.i3,u.cW,x.o))
s.restore()},
ZK(d){var w=this,v=w.gC(0)
return new A.Oj(w.fX.Wr(d,v,new A.vF(w.aC,w.i3,w.cW,x.o)))}}
A.No.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a1m.prototype={
aP5(d){this.a.a.clipRect(B.dO(d),$.p1()[1],!0)
return null},
ady(d,e){d.aM(this.a,e)},
VM(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b0(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lt()
s.Yv(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Du(d,e,f,g){var w=B.cG($.an().r)
w.aA(new B.f8(d.a,d.b))
w.aA(new B.cq(e.a,e.b))
this.a.fW(A.aAK(w,g),f)}}
A.ze.prototype={
gbE(){return[this.a]}}
A.amu.prototype={}
A.a1w.prototype={}
A.b1l.prototype={
Ki(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWX(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d_(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aWY(d,e){var w,v
if(d==null)return D.a0k
w=d.b
v=e/2
return d.aQh(w>v?v:w)},
OA(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZZ(w)},
aZZ(d){if(d<1)return this.aJ3(d)
return this.a8_(d)},
aJ3(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8_(d*q)/q},
a8_(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajf(d){if(d>=1)return 1
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
ZQ(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iZ
w=e.a?u.w.c5(e):e
v=B.b7(d,C.vy)
v=v==null?null:v.ay
return v===!0?w.c5(C.mh):w},
aj7(d,e,f,g){var w=C.d.ad(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qd)","D(ev)","~(w,fC)","F(ea,w)","R<~>()","F(F,qd)","bT(F,tq)","py(F)","w(qb,qb)","If(o1)","HV(C,bJ)","Jg(o2)","vt(@)","wm(@)","ea(F)","CA(@)","ah(F,tq)","uN(dy<uN>)","E0(dy<aEO>)","F(vt)","F(wm)","wF(C,bJ)","B6(z)","~()","qd(@)","~(hk,KN?)","xy(@)","F(ij)","D(fC)","~(w,ij)","~(@)","jP(nK)","c(nK)","jP(bI<w,F>)","jP(F)","nK(jP)","~(hk,Oj?)","ea(ea)","lI(GB<lI>)","za(@)","R<o2>(ck<o2>)","tr(w)","uO(ev,F,ea,w)","rt(mW)","D(ea)","w(vo,vo)","F(fC)","R<o1>(ck<o1>)","w(w,w,F)","fC(fC,fC,F)","ij(ij,ij,F)","my(my,my,F)","CR?(fC,w,ij,w)","E(fC)","c(F,tq)","ev(ev,ev,F)","D(F)","mT(mT,mT,F)","ni(ni,ni,F)","kL(kL,kL,F)","la(la,la,F)","f(kL)","f(la)","ea(ea,ea,F)","mz(mz,mz,F)","uO(ev,F,ea,w{size:F?})","D(ev,ea)","F(r,r)","u<tr>(ea,u<w>)","y1(z)","u<rt>(u<mW>)","E(mW)","yo(eZ<C?>)"])
A.aEK.prototype={
$1(d){var w=B.db(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qd(J.al(v==null?"":v),A.oY(w.h(0,"revenue_net")),A.oY(w.h(0,"expense_net")),A.oY(w.h(0,"result_net")))},
$S:z+24}
A.aEL.prototype={
$1(d){var w,v,u,t=B.db(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.oY(t.h(0,"gross"))
u=B.bp(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vt(s,r,w,v,u,A.oY(t.h(0,"avg_basket")))},
$S:z+12}
A.aEM.prototype={
$1(d){var w,v=B.db(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bp(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.wm(u,t,w,A.oY(v.h(0,"gross")))},
$S:z+13}
A.aF2.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CA(v,u,J.al(t==null?"expense":t),A.u5(w.h(d,"net")),A.u5(w.h(d,"tax")),A.u5(w.h(d,"gross")))},
$S:z+15}
A.bsB.prototype={
$1(d){return new A.uN(d.au($.c0(),x.A))},
$S:z+17}
A.bsC.prototype={
$1(d){return new A.E0(d.au($.bOu(),x.D))},
$S:z+18}
A.buq.prototype={
$1(d){return E.aEN()},
$S:z+38}
A.bsD.prototype={
$1(d){var w=d.au($.xj(),x.P)
return d.au($.avB(),x.a).FR(w)},
$S:z+40}
A.bsA.prototype={
$1(d){var w=d.au($.xj(),x.P)
return d.au($.avB(),x.a).FN(w)},
$S:z+47}
A.bsz.prototype={
$1(d){return this.aiR(d)},
aiR(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.au($.c0(),x.A).hm("finance_balance_kpis",t),$async$$1)
case 3:s=r.db(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:213}
A.aEJ.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avB(),x.a).pB(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEI.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aK(0,$.avB(),x.a).Ls(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aF0.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bve()
if(s.e==null)B.U(B.Y(y.b))
s.gcq().ck(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aET.prototype={
$0(){return this.a.Jh(this.b,this.c)},
$S:0}
A.aEU.prototype={
$0(){return this.a.Bf(this.b,this.c)},
$S:0}
A.aEV.prototype={
$0(){var w=x.z
return B.be(this.a,!1).dZ(B.e6(new A.aES(),null,w),w)},
$S:0}
A.aES.prototype={
$1(d){return F.D1},
$S:z+69}
A.aEW.prototype={
$0(){return B.o7(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEX.prototype={
$0(){var w=this
return w.a.Bg(w.b,w.c,w.d)},
$S:0}
A.aF_.prototype={
$0(){return D.as5},
$S:139}
A.aEZ.prototype={
$2(d,e){return new A.HV(B.j(d),null)},
$S:z+10}
A.aEY.prototype={
$1(d){return new A.Jg(d,null)},
$S:z+11}
A.aER.prototype={
$1(d){var w=null,v=this.a,u=$.dP()
v=B.i("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lw(B.b([B.dM(C.cZ,w,w,new A.aEP(u),w,w),B.dW(F.vb,new A.aEQ(u),B.dK(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vc)},
$S:60}
A.aEP.prototype={
$0(){B.be(this.a,!1).dh(!1)
return null},
$S:0}
A.aEQ.prototype={
$0(){B.be(this.a,!1).dh(!0)
return null},
$S:0}
A.bhd.prototype={
$0(){var w=this.a.aK(0,$.xj().ghP(),x.V),v=E.aEN()
w.wu(0,v)
return v},
$S:0}
A.bhe.prototype={
$0(){var w=this.a.aK(0,$.xj().ghP(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.lI(B.bO(B.aZ(v),1,1,0,0,0,0),v)
w.wu(0,u)
return u},
$S:0}
A.bhf.prototype={
$0(){return this.a.ID(this.b,this.c)},
$S:0}
A.bhc.prototype={
$2(d,e){return new B.oE(B.W(d).aPD(B.W(d).ax.aQw(C.h,C.n)),e,null)},
$S:1006}
A.bnC.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dA(),s=A.O2(!1,C.nV,"Umsatz 7 %",t.aq(u.a),w),r=A.O2(!1,C.nV,"Umsatz 19 %",t.aq(u.b),w),q=A.O2(!0,D.aaU,"Umsatz netto",t.aq(u.c),w),p=A.O2(!1,D.aaT,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return B.Nk(1.7,B.b([s,r,q,p,A.O2(!0,C.nO,"Ergebnis",n,o<0?C.ac:C.aj),A.O2(!1,C.fP,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.fs,!0)},
$S:113}
A.aJT.prototype={
$0(){return D.as2},
$S:139}
A.aJS.prototype={
$2(d,e){var w=null
return B.by(C.ac,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fK,w,C.D,w,3)},
$S:224}
A.aJR.prototype={
$1(d){return new A.If(d,null)},
$S:z+9}
A.ben.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dA(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ad(g).i("aa<1,F>"),e=f.i("aw.E"),d=B.Q(new B.aa(g,new A.bec(),f),e)
i=A.jE(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.aa(g,new A.bed(),f),e)
d=A.jE(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.aa(g,new A.bee(),f),e)
k=A.jE(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.aa(g,new A.bef(),f),e)
w=A.jE(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.aa(g,new A.beg(),f),e)
v=A.jE(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.aa(g,new A.beh(),f),e)
u=A.jE(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.aa(g,new A.bei(),f),e)
t=A.jE(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.aa(g,new A.bej(),f),e)
h=A.jE(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.aa(g,new A.bek(m),f),e)
m=A.jE(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.aa(g,new A.bel(l),f),e)
l=A.jE(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.aa(g,new A.bem(j),f),e)
return B.Nk(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jE(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.fs,!0)},
$S:113}
A.bec.prototype={
$1(d){return d.b},
$S:z+0}
A.bed.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bee.prototype={
$1(d){return d.d},
$S:z+0}
A.bef.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beg.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.beh.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bei.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bej.prototype={
$1(d){return d.d},
$S:z+0}
A.bek.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bel.prototype={
$1(d){return this.a},
$S:z+0}
A.bem.prototype={
$1(d){return this.a},
$S:z+0}
A.beo.prototype={
$0(){return A.bz9(this.b,1.45,new A.TU(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bep.prototype={
$0(){return A.bz9(this.b,1.6,new A.U6(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.brI.prototype={
$1(d){var w=this,v=null,u=B.aB(16),t=x.p,s=B.b([B.ak(B.b([B.aA(B.i(w.a,v,v,v,v,B.bE(C.h,18,C.o),v,v,v),1),B.fh(v,v,D.ad4,v,v,new A.brH(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.L(s,B.b([B.i(w.b,v,v,v,v,B.y(C.q,12,C.aF),v,v,v),C.E],t))
s.push(C.u)
s.push(new B.aR(17976931348623157e292,v,new B.ly(w.c,w.d,v),v))
return B.a4q(v,C.m,new B.ae(C.ah,B.ab(s,C.A,C.f,C.K),v),v,v,v,C.fM,C.uV,v,new B.d4(u,C.I),v)},
$S:1007}
A.brH.prototype={
$0(){return B.be(this.a,!1).f2()},
$S:0}
A.beq.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bz9(this.b,2.4,new A.Ye(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bmJ.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bmK.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bmL.prototype={
$1(d){return A.aK7(null,1.4,null,C.ac,0.35,D.ahk,D.DR,null,!1,!1,!1,!1,D.Fc,!1,10,D.YI,!0,C.lq,B.b([new A.ev(0,d),new A.ev(this.a,d)],x.U))},
$S:z+14}
A.b54.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b56.prototype={
$2(d,e){var w=null
return B.i(this.a.aKk(d),w,w,w,w,B.y(C.q,10,C.L),w,w,w)},
$S:z+16}
A.b57.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.v2
return new B.ae(C.kW,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.q,9,C.L),w,w,w),w)},
$S:z+6}
A.b55.prototype={
$1(d){return D.a9o},
$S:z+7}
A.b5Z.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6_.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b60.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b61.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.v2
return new B.ae(C.kW,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.beU.prototype={
$1(d){return d.d},
$S:z+19}
A.beV.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.boU.prototype={
$1(d){return d.d},
$S:z+20}
A.boV.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b3v.prototype={
$0(){return D.as9},
$S:139}
A.b3u.prototype={
$2(d,e){return new A.wF("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b3t.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.ab(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.L),m,m,m),C.E,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.q,12.5,C.l),m,m,m),C.u,B.kl(C.ch,B.b([B.hq(C.EL,D.aFp,new A.b3n(w,v),m),B.hq(D.acI,D.aEl,new A.b3o(w,v),m)],u),C.du,8,8)],u),C.A,C.f,C.i),C.a9,m,C.D,m,3)}w=new A.b3w(d)
t=C.b.fA(n.a.e.d,0,new A.b3p())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jl(new A.b3q(new A.b3x(w),r,w,s))
v=J.Z(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ab(B.b([w,C.E,B.ak(B.b([B.aA(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.q,11,C.l),m,m,m),1),B.oC(D.adS,D.aEG,new A.b3r(q,p),m),B.oC(D.adw,D.aEr,new A.b3s(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:222}
A.b3n.prototype={
$0(){return A.auU(this.a,this.b,null)},
$S:0}
A.b3o.prototype={
$0(){return A.auR(this.a,this.b)},
$S:0}
A.b3w.prototype={
$1(d){var w=B.bp(J.a3(this.a,d))
return w==null?null:w},
$S:1008}
A.b3x.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:34}
A.b3p.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jE(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hZ,o.$1("liquidity1_pct")),m=A.jE(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hZ,o.$1("liquidity2_pct")),l=A.jE(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hZ,o.$1("liquidity3_pct"))
o=A.jE(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hZ,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b1(w,".",",")+" %"}w=A.jE(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hZ,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dA()
v=u.aq(v)
return B.Nk(p,B.b([n,m,l,o,w,A.jE(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.hZ,v)],x.p),q,12,12,C.fs,!0)},
$S:113}
A.b3r.prototype={
$0(){return A.auR(this.a,this.b)},
$S:0}
A.b3s.prototype={
$0(){return A.auU(this.a,this.b,this.c)},
$S:0}
A.brG.prototype={
$1(d){return new A.B6(this.a,new A.brF(this.b),this.c,null)},
$S:z+22}
A.brF.prototype={
$0(){var w=this.a,v=$.bvd()
if(w.e==null)B.U(B.Y(y.b))
w.gcq().ck(v)},
$S:0}
A.b3h.prototype={
$0(){},
$S:0}
A.b3i.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3j.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3l.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.ub(u.b,B.bO(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3k(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3k.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3m.prototype={
$0(){return B.be(this.a,!1).f2()},
$S:0}
A.b3y.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3z.prototype={
$1(d){return new A.xy(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axB.prototype={
$1(d){return d.e},
$S:z+27}
A.axC.prototype={
$2(d,e){return d+e},
$S:44}
A.axE.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axG.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axH.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.ady(v.d,v.e)},
$S:0}
A.axk.prototype={
$1(d){return 0},
$S:1009}
A.axj.prototype={
$2(d,e){return B.f0(C.bR,this.a.alc(e),C.t,C.bk,null)},
$S:1010}
A.aYO.prototype={
$1(d){return d.a},
$S:z+31}
A.aYP.prototype={
$1(d){return d.b},
$S:z+32}
A.aYQ.prototype={
$1(d){return new A.jP(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aYR.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mB||v===D.dM))t=1-t
return new A.jP(d,t*w.d)},
$S:z+34}
A.aYS.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goz(),p=d.a
r.goz()
r=$.lt()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.ajf(Math.abs(s.b-s.c)))
t=""}if(C.c.hL(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nK(d,q.c.b.$2(p,new A.tq(u+t,s.e)))},
$S:z+35}
A.aU7.prototype={
$1(d){this.a.l7(new A.a5f(d))},
$S:164}
A.aU8.prototype={
$1(d){this.a.l7(new A.a5g(d))},
$S:40}
A.aU9.prototype={
$1(d){this.a.l7(new A.a5h(d))},
$S:28}
A.aUa.prototype={
$0(){this.a.l7(D.a1Z)},
$S:0}
A.aUb.prototype={
$1(d){this.a.l7(new A.MU())},
$S:45}
A.aUc.prototype={
$1(d){this.a.l7(new A.a5k(d))},
$S:42}
A.aUd.prototype={
$0(){this.a.l7(D.a2_)},
$S:0}
A.aUe.prototype={
$1(d){this.a.l7(new A.MX(d))},
$S:80}
A.aUf.prototype={
$1(d){this.a.l7(new A.a5e(d))},
$S:168}
A.aUg.prototype={
$1(d){this.a.l7(new A.a5d(d))},
$S:169}
A.aUh.prototype={
$1(d){return this.a.l7(new A.MS(d))},
$S:170}
A.aUi.prototype={
$1(d){return this.a.l7(new A.a5i(d))},
$S:65}
A.aUj.prototype={
$1(d){return this.a.l7(new A.MV(d))},
$S:54}
A.beB.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQc(w==null?B.b([],x.t):w)},
$S:z+37}
A.bez.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.beA.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.bey())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.Gq(w))},
$S:0}
A.bey.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.beC.prototype={
$1(d){return new A.za(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aK8.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.bsp.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bDN(t?A.byY(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tr(w,new A.yq(!0,A.bzK(),new A.bso(v)))},
$S:z+41}
A.bso.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bSp(A.byY(d,e,f),w,A.c08(d,e,f))},
$S:z+42}
A.bsm.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.iY(v,v,u==null?D.dq:u,v,v,v,v,v,v,v,v,14,v,v,C.L,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rt(C.d.j(d.b),w)},
$S:z+43}
A.aKa.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKb.prototype={
$1(d){return!d.k(0,D.fN)},
$S:z+1}
A.aKf.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aKd.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKe.prototype={
$0(){this.a.ady(this.b,this.c)},
$S:0}
A.aKg.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.axu.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axv.prototype={
$2(d,e){return d+e},
$S:44}
A.axy.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iO(v,B.ad(v).i("iO<1>")).aw(0,new A.axz(w,this.a/(u+1),this.c))},
$S:0}
A.axz.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axw.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axx.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHg.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1011}
A.aAL.prototype={
$1(d){return d},
$S:1012};(function aliases(){var w=A.KG.prototype
w.a_Q=w.i9
w.aly=w.aRU
w.alz=w.adr
w=A.Tu.prototype
w.ao8=w.l
w=A.KQ.prototype
w.a_R=w.i9
w=A.FZ.prototype
w.a0A=w.YM})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3M","bSm",72)
var q
v(q=A.Tw.prototype,"gaEb","aEc",23)
v(q,"gaDe","HT",4)
v(q,"gaDW","I3",4)
u(A.Tx.prototype,"gas0","as1",25)
t(A,"c2A",3,null,["$3"],["bPH"],49,0)
t(A,"c2B",3,null,["$3"],["bPI"],50,0)
t(A,"c2C",3,null,["$3"],["bPJ"],51,0)
t(A,"c2E",4,null,["$4"],["c3p"],52,0)
w(A,"c2D","c3o",53)
s(A,"bzd","c3q",54)
t(A,"c2v",3,null,["$3"],["bSq"],55,0)
w(A,"a_q","c5P",56)
w(A,"auX","c3t",7)
t(A,"c2x",3,null,["$3"],["bTc"],57,0)
t(A,"c2z",3,null,["$3"],["bYn"],58,0)
t(A,"c2w",3,null,["$3"],["bTb"],59,0)
t(A,"c2y",3,null,["$3"],["bYm"],60,0)
w(A,"ccY","bTa",61)
w(A,"ccZ","bYl",62)
r(A.Y3.prototype,"ga4g","axv",30)
u(A.VR.prototype,"gayN","ayO",36)
t(A,"c4F",3,null,["$3"],["bTE"],63,0)
t(A,"c4E",3,null,["$3"],["bPL"],64,0)
w(A,"c4I","c5Q",1)
t(A,"bKh",4,null,["$5$size","$4"],["bIL",function(d,e,f,g){return A.bIL(d,e,f,g,null)}],65,0)
s(A,"bzK","c5O",66)
s(A,"bKi","c2i",67)
s(A,"bKl","c3w",68)
s(A,"bKk","c3s",3)
s(A,"bKj","c3r",3)
w(A,"c4H","bJV",70)
w(A,"c4G","bJU",71)
t(A,"a_v",3,null,["$3"],["c4D"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.P,[A.a6O,A.agi,A.alC,A.IO,A.Jg,A.agg,A.HV,A.If,A.akX,A.am9,A.UH,A.Ye,A.TU,A.U6,A.amD,A.aiY,A.C4,A.ask,A.wF,A.KH,A.Ay])
u(B.C,[A.uN,A.E0,A.bg,A.aho,A.ahe,A.ahg,A.ahh,A.ah6,A.akH,A.ahk,A.ahi,A.axQ,A.aso,A.axD,A.ahf,A.KQ,A.a5R,A.tq,A.aqM,A.aqL,A.ah5,A.akG,A.ev,A.akD,A.akF,A.aoZ,A.alt,A.at2,A.akE,A.akk,A.akC,A.axi,A.bew,A.axl,A.ah2,A.nK,A.akz,A.akA,A.vF,A.hk,A.amh,A.amk,A.ahb,A.ahp,A.ahc,A.akB,A.amn,A.aml,A.asn,A.aqK,A.aK9,A.amj,A.vo,A.a1m,A.amu,A.a1w,A.b1l])
u(B.uL,[A.qd,A.vt,A.wm,A.aAa,A.aBg,A.o1,A.CA,A.o2])
u(B.nP,[A.aEK,A.aEL,A.aEM,A.aF2,A.bsB,A.bsC,A.buq,A.bsD,A.bsA,A.bsz,A.aES,A.aEY,A.aER,A.aJR,A.bec,A.bed,A.bee,A.bef,A.beg,A.beh,A.bei,A.bej,A.bek,A.bel,A.bem,A.brI,A.bmL,A.b55,A.b5Z,A.b6_,A.beU,A.boU,A.b3t,A.b3w,A.b3x,A.brG,A.b3z,A.axB,A.axE,A.axk,A.aYO,A.aYP,A.aYQ,A.aYR,A.aYS,A.aU7,A.aU8,A.aU9,A.aUb,A.aUc,A.aUe,A.aUf,A.aUg,A.aUh,A.aUi,A.aUj,A.beB,A.beC,A.aK8,A.bsp,A.bso,A.bsm,A.aKa,A.aKb,A.axu,A.aAL])
t(A.yo,B.fy)
u(B.xO,[A.aEJ,A.aEI,A.aF0,A.aET,A.aEU,A.aEV,A.aEW,A.aEX,A.aF_,A.aEP,A.aEQ,A.bhd,A.bhe,A.bhf,A.aJT,A.beo,A.bep,A.brH,A.beq,A.b3v,A.b3n,A.b3o,A.b3r,A.b3s,A.brF,A.b3h,A.b3i,A.b3j,A.b3l,A.b3k,A.b3m,A.b3y,A.axH,A.aUa,A.aUd,A.bez,A.beA,A.aKd,A.aKe,A.axy])
u(B.xW,[A.yp,A.anR,A.a6P,A.aha])
u(B.xP,[A.aEZ,A.bhc,A.bnC,A.aJS,A.ben,A.bmJ,A.bmK,A.b54,A.b56,A.b57,A.b60,A.b61,A.beV,A.boV,A.b3u,A.b3p,A.b3q,A.axC,A.axG,A.axj,A.bey,A.aKf,A.aKg,A.axv,A.axz,A.axw,A.axx,A.aHg])
u(B.M,[A.B6,A.Rt])
u(B.a0,[A.Tw,A.Y3])
u(B.NB,[A.KM,A.Oh])
u(B.ul,[A.Tx,A.VR])
t(A.a0Y,A.aho)
t(A.ah1,A.a0Y)
t(A.a0I,A.ah1)
u(A.a0I,[A.ahd,A.ami])
t(A.nL,A.ahd)
u(B.HU,[A.axs,A.adL,A.CQ,A.aE8,A.aJU,A.No])
t(A.fC,A.ahe)
t(A.ij,A.ahg)
t(A.my,A.ahh)
t(A.a0P,A.ah6)
t(A.MY,A.akH)
u(A.MY,[A.ahj,A.amm])
t(A.a0U,A.ahj)
t(A.a0V,A.ahk)
t(A.CR,A.ahi)
u(A.axQ,[A.KN,A.Oj])
t(A.adN,A.aso)
t(A.ahl,A.adN)
t(A.a0W,A.ahl)
u(B.b3,[A.xy,A.za])
t(A.ur,A.ahf)
t(A.KG,A.KQ)
u(A.KG,[A.axF,A.aKc])
u(B.Oc,[A.a0S,A.a70])
u(B.K,[A.FZ,A.ah3])
u(A.FZ,[A.aaV,A.ab7])
t(A.q3,A.aqM)
t(A.acj,A.aqL)
t(A.pb,A.ah5)
t(A.uP,A.akG)
t(A.yr,A.akD)
t(A.py,A.akF)
t(A.Q2,A.aoZ)
t(A.mT,A.alt)
t(A.ni,A.at2)
u(A.py,[A.als,A.at1])
t(A.kL,A.als)
t(A.la,A.at1)
t(A.a5c,A.akE)
u(A.a5c,[A.alr,A.at0])
t(A.a61,A.alr)
t(A.ae9,A.at0)
t(A.MG,A.akk)
t(A.uO,A.akC)
t(A.MR,A.uO)
t(A.ack,B.h2)
t(A.ah4,A.ah3)
t(A.Tu,A.ah4)
t(A.a0J,A.Tu)
t(A.jP,A.ah2)
t(A.a59,A.akz)
t(A.a5b,A.akA)
u(A.hk,[A.a5f,A.a5g,A.a5h,A.MT,A.MU,A.a5k,A.MW,A.MX,A.a5e,A.a5d,A.MS,A.a5i,A.a5j,A.MV])
t(A.pK,A.ami)
t(A.ea,A.amh)
t(A.Oi,A.amk)
t(A.a0R,A.ahb)
t(A.mz,A.ahp)
t(A.KL,A.ahc)
t(A.yq,A.akB)
t(A.ED,A.amm)
t(A.a71,A.amn)
t(A.amg,A.ev)
t(A.mW,A.amg)
t(A.qb,A.mW)
t(A.rt,A.aml)
t(A.tr,A.asn)
t(A.Gq,A.aqK)
t(A.zb,A.amj)
t(A.ze,A.amu)
w(A.ah6,A.bg)
w(A.ahd,A.bg)
w(A.ahe,A.bg)
w(A.ahg,A.bg)
w(A.ahh,A.bg)
w(A.ahi,A.bg)
w(A.ahj,A.bg)
w(A.ahk,A.bg)
w(A.ahl,A.bg)
w(A.ahf,A.bg)
w(A.ah1,A.bg)
w(A.ah5,A.bg)
w(A.akk,A.bg)
w(A.akC,A.bg)
w(A.akD,A.bg)
w(A.akF,A.bg)
w(A.akG,A.bg)
w(A.als,A.bg)
w(A.alr,A.bg)
w(A.alt,A.bg)
w(A.aoZ,A.bg)
w(A.aqL,A.bg)
w(A.aqM,A.bg)
w(A.aso,A.bg)
w(A.at1,A.bg)
w(A.at0,A.bg)
w(A.at2,A.bg)
w(A.ah2,A.bg)
v(A.ah3,B.aD)
w(A.ah4,B.e7)
v(A.Tu,B.a49)
w(A.aho,A.bg)
w(A.akz,A.bg)
w(A.akA,A.bg)
w(A.akH,A.bg)
w(A.ahb,A.bg)
w(A.ahc,A.bg)
w(A.ahp,A.bg)
w(A.akB,A.bg)
w(A.akE,A.bg)
w(A.amg,A.bg)
w(A.amh,A.bg)
w(A.ami,A.bg)
w(A.amk,A.bg)
w(A.aml,A.bg)
w(A.amm,A.bg)
w(A.amn,A.bg)
w(A.aqK,A.bg)
w(A.asn,A.bg)
w(A.amj,A.bg)
w(A.amu,A.bg)})()
B.bp8(b.typeUniverse,JSON.parse('{"a6O":{"P":[],"c":[]},"E0":{"aEO":[]},"yo":{"fy":["bh<~>"],"fy.T":"bh<~>"},"Jg":{"P":[],"c":[]},"HV":{"P":[],"c":[]},"yp":{"bk":[],"M":[],"c":[]},"agi":{"P":[],"c":[]},"alC":{"P":[],"c":[]},"anR":{"bk":[],"M":[],"c":[]},"IO":{"P":[],"c":[]},"agg":{"P":[],"c":[]},"If":{"P":[],"c":[]},"wF":{"P":[],"c":[]},"B6":{"M":[],"c":[]},"a6P":{"bk":[],"M":[],"c":[]},"akX":{"P":[],"c":[]},"am9":{"P":[],"c":[]},"UH":{"P":[],"c":[]},"Ye":{"P":[],"c":[]},"TU":{"P":[],"c":[]},"U6":{"P":[],"c":[]},"amD":{"P":[],"c":[]},"aiY":{"P":[],"c":[]},"C4":{"P":[],"c":[]},"ask":{"P":[],"c":[]},"aha":{"bk":[],"M":[],"c":[]},"Tw":{"a0":["B6"]},"KM":{"M":[],"c":[]},"Tx":{"a0":["KM"]},"nL":{"bg":[]},"fC":{"bg":[]},"ij":{"bg":[]},"my":{"bg":[]},"CR":{"bg":[]},"xy":{"b3":["nL"],"b4":["nL"],"b4.T":"nL","b3.T":"nL"},"a0P":{"bg":[]},"a0U":{"bg":[]},"a0V":{"bg":[]},"a0W":{"bg":[]},"ur":{"bg":[]},"a0S":{"aX":[],"c":[]},"aaV":{"K":[],"L":[],"jn":[],"aU":[]},"py":{"bg":[]},"mT":{"bg":[]},"ni":{"bg":[]},"kL":{"bg":[]},"la":{"bg":[]},"uO":{"bg":[]},"a0I":{"bg":[]},"q3":{"bg":[]},"acj":{"bg":[]},"pb":{"bg":[]},"uP":{"bg":[]},"yr":{"bg":[]},"adN":{"bg":[]},"Q2":{"bg":[]},"a61":{"bg":[]},"ae9":{"bg":[]},"MG":{"bg":[]},"MR":{"bg":[]},"KH":{"P":[],"c":[]},"Rt":{"M":[],"c":[]},"Y3":{"a0":["Rt"]},"jP":{"bg":[]},"ack":{"h2":[],"aX":[],"c":[]},"a0J":{"e7":["K","hl"],"K":[],"aD":["K","hl"],"L":[],"aU":[],"aD.1":"hl","e7.1":"hl","aD.0":"K"},"Ay":{"P":[],"c":[]},"a0Y":{"bg":[]},"a59":{"bg":[]},"MY":{"bg":[]},"a5b":{"bg":[]},"a5f":{"hk":[]},"a5g":{"hk":[]},"a5h":{"hk":[]},"MT":{"hk":[]},"MU":{"hk":[]},"a5k":{"hk":[]},"MW":{"hk":[]},"MX":{"hk":[]},"a5e":{"hk":[]},"a5d":{"hk":[]},"MS":{"hk":[]},"a5i":{"hk":[]},"a5j":{"hk":[]},"MV":{"hk":[]},"FZ":{"K":[],"L":[],"jn":[],"aU":[]},"Oh":{"M":[],"c":[]},"VR":{"a0":["Oh"]},"pK":{"bg":[]},"ea":{"bg":[]},"mz":{"bg":[]},"mW":{"ev":[],"bg":[]},"qb":{"mW":[],"ev":[],"bg":[]},"rt":{"bg":[]},"tr":{"bg":[]},"Gq":{"bg":[]},"za":{"b3":["pK"],"b4":["pK"],"b4.T":"pK","b3.T":"pK"},"Oi":{"bg":[]},"a0R":{"bg":[]},"KL":{"bg":[]},"yq":{"bg":[]},"a5c":{"bg":[]},"ED":{"bg":[]},"a71":{"bg":[]},"zb":{"bg":[]},"a70":{"aX":[],"c":[]},"ab7":{"K":[],"L":[],"jn":[],"aU":[]},"ze":{"bg":[]}}'))
B.bIf(b.typeUniverse,JSON.parse('{"KG":1,"MY":1,"KQ":1,"FZ":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CA"),e:w("bh<o1>"),aN:w("bh<o2>"),fM:w("bh<a1<f,@>?>"),b:w("bh<~>"),W:w("jP"),B:w("nL"),dB:w("fC"),T:w("ur"),fj:w("ij"),G:w("my"),J:w("mz"),k:w("at"),cX:w("a1w<F>"),dO:w("uz"),R:w("aj<f,@>"),v:w("hH"),bz:w("lC<bc>"),f0:w("nV"),E:w("bg"),F:w("yo"),X:w("o1"),P:w("lI"),D:w("uN"),a:w("aEO"),d:w("o2"),cw:w("ev"),L:w("hl"),m:w("dp<w,E>"),cm:w("kL"),dv:w("mT"),g:w("B<nK>"),O:w("B<fC>"),Y:w("B<ij>"),C:w("B<bw9>"),U:w("B<ev>"),K:w("B<a5R>"),u:w("B<ea>"),bC:w("B<vo>"),aA:w("B<u<ev>>"),r:w("B<Gq>"),s:w("B<f>"),eg:w("B<to>"),df:w("B<qb>"),p:w("B<c>"),n:w("B<F>"),t:w("B<w>"),eF:w("bi<a0<M>>"),Z:w("mW"),cz:w("ea"),hf:w("pK"),dj:w("zb"),fT:w("rt"),c_:w("im<oR<bh<~>>>"),x:w("ze<fC>"),y:w("ze<ea>"),I:w("u<w>"),ef:w("vt"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("aa<F,F>"),w:w("k3"),aU:w("C"),Q:w("vF<nL>"),o:w("vF<pK>"),eo:w("pU"),gJ:w("pV"),V:w("nb<lI>"),N:w("f"),A:w("nd"),bO:w("bM"),er:w("to"),j:w("wm"),dw:w("qb"),bY:w("tr"),cZ:w("qd"),gc:w("kk"),es:w("la"),bN:w("ni"),l:w("c"),q:w("wY"),g4:w("id<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("w"),bn:w("xy?"),f3:w("za?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("C?"),aD:w("kk?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AZ=new B.lx(C.n,B.au("lx<E>"))
D.B5=new A.CQ(0,"left")
D.mB=new A.CQ(1,"top")
D.B6=new A.CQ(2,"right")
D.dM=new A.CQ(3,"bottom")
D.avQ=new A.q3(!1,A.bzd(),22,null)
D.kp=new A.pb(16,null,D.avQ,!0)
D.a9p=new A.py(C.C,null,2,null)
D.w0=new A.KL(!1,D.a9p,A.c4I(),!0)
D.a00=new A.axs(3,"spaceEvenly")
D.a09=new B.xC(6,"dstIn")
D.XZ=new B.aW(3,3)
D.Ba=new B.d_(D.XZ,D.XZ,C.a2,C.a2)
D.a0k=new B.bm(C.C,0,C.T,-1)
D.BJ=new A.a5b()
D.a1Z=new A.MT()
D.a2_=new A.MW()
D.aNp=new A.acj()
D.am0=w([],B.au("B<kL>"))
D.am1=w([],B.au("B<la>"))
D.DN=new A.MG(D.am0,D.am1,!0)
D.a97=new B.dJ("Zeitraum",!1,null)
D.a9b=new B.dJ("Konten (SKR 03)",!1,null)
D.xy=new A.aE8(0,"center")
D.aNB=new A.yq(!0,A.bzK(),A.bKh())
D.DR=new A.yq(!1,A.bzK(),A.bKh())
D.DS=new A.yr(!1,!0,null,A.auX(),A.a_q(),!0,null,A.auX(),A.a_q())
D.aNC=new A.yr(!0,!0,null,A.auX(),A.a_q(),!0,null,A.auX(),A.a_q())
D.a4j=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a44=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4t=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a4n=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3O=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3N=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4Q=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a4c=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4T=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4N=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aq9=new B.dp([50,D.a4j,100,D.a44,200,D.a4t,300,D.a4n,400,D.a3O,500,D.a3N,600,D.a4Q,700,D.a4c,800,D.a4T,900,D.a4N],x.m)
D.dq=new B.rz(D.aq9,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aig=w([8,4],x.t)
D.a9n=new A.py(D.dq,null,0.4,D.aig)
D.a9o=new A.py(C.a7,null,0.5,null)
D.fN=new A.ev(0/0,0/0)
D.avS=new A.q3(!0,A.bzd(),44,null)
D.mC=new A.pb(16,null,D.avS,!0)
D.avR=new A.q3(!0,A.bzd(),30,null)
D.mD=new A.pb(16,null,D.avR,!0)
D.a9q=new A.uP(!1,D.mC,D.mD,D.mC,D.mD)
D.aND=new A.uP(!0,D.mC,D.mD,D.mC,D.mD)
D.E_=new A.No(0,"left")
D.aa1=new A.No(1,"center")
D.E0=new A.No(2,"right")
D.aa6=new B.a6(57495,"MaterialIcons",null,!1)
D.xQ=new B.a6(58927,"MaterialIcons",null,!1)
D.aaT=new B.a6(59005,"MaterialIcons",null,!0)
D.aaU=new B.a6(59007,"MaterialIcons",null,!0)
D.aaV=new B.a6(59011,"MaterialIcons",null,!1)
D.abN=new B.a6(62589,"MaterialIcons",null,!1)
D.ab7=new B.a6(61349,"MaterialIcons",null,!1)
D.acF=new B.aC(D.ab7,20,C.h,null,null)
D.abe=new B.a6(61487,"MaterialIcons",null,!1)
D.acH=new B.aC(D.abe,18,null,null,null)
D.acI=new B.aC(D.xQ,18,null,null,null)
D.ad4=new B.aC(C.hS,null,C.h,null,null)
D.ad5=new B.aC(C.l8,null,C.q,null,null)
D.adw=new B.aC(C.nS,16,null,null,null)
D.adC=new B.aC(C.xY,16,null,null,null)
D.aah=new B.a6(57912,"MaterialIcons",null,!1)
D.adE=new B.aC(D.aah,null,C.ac,null,null)
D.abL=new B.a6(62584,"MaterialIcons",null,!1)
D.adN=new B.aC(D.abL,16,null,null,null)
D.adS=new B.aC(D.xQ,16,null,null,null)
D.afU=new A.a6P(null)
D.aNI=new A.aJU(0,"horizontal")
D.ya=new A.zb(0,0,0,0,!1)
D.Fc=new A.Oi(0.5)
D.BP=new A.a71()
D.afY=new A.ED(D.BP,A.bKl(),10,A.bKi(),!0,A.bKk(),A.bKj(),!1,null,null,null)
D.aNK=new A.ED(D.BP,A.bKl(),10,A.bKi(),!0,A.bKk(),A.bKj(),!0,null,null,null)
D.ahk=w([4,3],x.t)
D.au3=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.atU=new B.aI("receivables","Forderungen (kurzfristig)")
D.atJ=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.atH=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.atx=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.atC=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.au0=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.atT=new B.aI("equity","Eigenkapital")
D.pw=w([D.au3,D.atU,D.atJ,D.atH,D.atx,D.atC,D.au0,D.atT],B.au("B<+(f,f)>"))
D.aNN=w([],x.g)
D.alN=w([],x.O)
D.alO=w([],x.Y)
D.alP=w([],B.au("B<my>"))
D.alQ=w([],B.au("B<mz>"))
D.aNO=w([],x.U)
D.aNP=w([],x.u)
D.alR=w([],x.r)
D.aqK={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TC={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yQ=new B.aj(D.TC,[0,0,0,0,0,0,0,C.cc],B.au("aj<f,C>"))
D.aqI={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aq3=new B.aj(D.aqI,[0,0,0,0],B.au("aj<f,w>"))
D.aqZ={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apq=new B.aj(D.aqZ,[0,0,0,0,null,null,null,null],B.au("aj<f,w?>"))
D.apk=new B.aj(D.aqK,[D.yQ,D.yQ,D.yQ,C.cc,C.cc,C.cc,D.aq3,D.apq],x.R)
D.apD=new B.aj(D.TC,[0,0,0,0,0,0,0,C.cR],x.R)
D.aqL={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apF=new B.aj(D.aqL,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("aj<f,F>"))
D.aqH={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aq4=new B.aj(D.aqH,[0,0,0,0,0,0,0,C.cR],x.R)
D.ar9={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aq5=new B.aj(D.ar9,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("aj<f,f>"))
D.a4Z=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a56=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3R=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a4f=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4p=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a5k=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3C=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a4h=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4s=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4O=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqa=new B.dp([50,D.a4Z,100,D.a56,200,D.a3R,300,D.a4f,400,D.a4p,500,D.a5k,600,D.a3C,700,D.a4h,800,D.a4s,900,D.a4O],x.m)
D.To=new B.rz(D.aqa,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8n=new B.ai(32,32,32,32)
D.as2=new B.ae(D.a8n,C.bJ,null)
D.a8p=new B.ai(48,48,48,48)
D.as5=new B.ae(D.a8p,C.bJ,null)
D.as9=new B.ae(C.ah,C.bJ,null)
D.am2=w([],B.au("B<mT>"))
D.am3=w([],B.au("B<ni>"))
D.Y0=new A.Q2(D.am2,D.am3)
D.auL=new B.fv("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.auM=new B.fv("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.auP=new B.fv("Automaten-Business","Umsatz je Automat",null,null)
D.auR=new B.fv("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.auT=new B.fv("Top","Meistverkaufte Produkte",null,null)
D.auW=new B.fv("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.auX=new B.fv("Kennzahlen","Rentabilit\xe4t",null,null)
D.YI=new B.t9(C.G,C.v,0)
D.aDj=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.axx=new B.e0(D.aDj,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aFd=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.axA=new B.e0(D.aFd,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aDw=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.axB=new B.e0(D.aDw,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aF7=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.axD=new B.e0(D.aF7,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aEC=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.axE=new B.e0(D.aEC,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aEz=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.axX=new B.e0(D.aEz,null,null,null,null,null,null,null,null,null,null,null,null,C.M,!1,null,null,null,C.t,null)
D.aNZ=new B.S(!0,C.C,null,null,null,null,14,C.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDt=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aDE=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aEl=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aEr=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aEG=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aFp=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZZ=new A.adL(0,"auto")
D.aG0=new A.adL(1,"top")
D.aKo=new A.wF("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aKp=new A.wF("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdn","bOu",()=>B.iP(new A.bsB(),x.D))
w($,"cdo","avB",()=>B.iP(new A.bsC(),x.a))
w($,"cel","xj",()=>B.bxX(new A.buq(),x.P))
w($,"cdp","bve",()=>C.aL.$1$1(new A.bsD(),x.d))
w($,"cdm","bOt",()=>C.aL.$1$1(new A.bsA(),x.X))
w($,"cdl","bvd",()=>C.aL.$1$1(new A.bsz(),x.h))
w($,"cdk","bvc",()=>B.aZG(A.c3M(),x.F,x.b))
w($,"c6B","buQ",()=>new A.axi())
v($,"c9S","lt",()=>new A.b1l())})()};
(a=>{a["BmdmZKbIrH1B/Z7ev/GkI3mlHwE="]=a.current})($__dart_deferred_initializers__);