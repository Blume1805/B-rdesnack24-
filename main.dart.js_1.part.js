((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NX(d,e,f,g,h){return new A.a6F(f,g,d,h,e,null)},
a6F:function a6F(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uM:function uM(d){this.a=d},
E8:function E8(d){this.a=d},
bSk(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.Sv
w=x.f
v=x.N
u=x.z
t=A.aET(B.di(w.a(e.h(a0,"current")),v,u))
s=A.aET(B.di(w.a(e.h(a0,"prior_year")),v,u))
r=A.aET(B.di(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ce
p=J.cX(p,new A.aEB(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ce
o=J.cX(o,new A.aEC(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ce
q=J.cX(q,new A.aED(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.di(w.a(e.h(a0,"customer")),v,u)
m=B.b_(n.h(0,"purchases_count"))
m=m==null?null:C.e.a1(m)
if(m==null)m=0
l=A.p_(n.h(0,"app_gross"))
k=B.b_(n.h(0,"active_customers"))
k=k==null?null:C.e.a1(k)
if(k==null)k=0
n=A.p_(n.h(0,"avg_basket"))
u=B.di(w.a(e.h(a0,"derived")),v,u)
v=A.p_(u.h(0,"gross_margin_pct"))
e=A.p_(u.h(0,"net_margin_pct"))
w=A.p_(u.h(0,"ebitda_margin_pct"))
j=A.p_(u.h(0,"cashflow_operating"))
i=A.bqW(u.h(0,"revenue_growth_yoy_pct"))
h=A.bqW(u.h(0,"revenue_growth_mom_pct"))
g=A.bqW(u.h(0,"result_growth_yoy_pct"))
u=A.bqW(u.h(0,"result_growth_mom_pct"))
f=B.b_(J.a3(d,"days"))
f=f==null?null:C.e.a1(f)
if(f==null)f=1
return new A.o6(t,s,r,p,o,q,new A.azN(m,l,k,n),new A.aAT(v,e,w,j,i,h,g,u),f)},
p_(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iu(J.an(d))
return w==null?0:w},
bqW(d){if(d==null)return null
if(typeof d=="number")return d
return B.iu(J.an(d))},
qi:function qi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vq:function vq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wk:function wk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azN:function azN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAT:function aAT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o6:function o6(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEB:function aEB(){},
aEC:function aEC(){},
aED:function aED(){},
aET(d){var w=J.Z(d),v=A.u3(w.h(d,"revenue_net_7")),u=A.u3(w.h(d,"revenue_net_19")),t=A.u3(w.h(d,"revenue_net")),s=A.u3(w.h(d,"expense_net")),r=A.u3(w.h(d,"result_net")),q=A.u3(w.h(d,"vat_collected")),p=A.u3(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.ce
w=J.cX(w,new A.aEU(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.o7(v,u,t,s,r,q,p,w)},
u3(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iu(J.an(d))
return w==null?0:w},
CI:function CI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o7:function o7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aEU:function aEU(){},
bSj(d){return new A.ys(d,new B.ir(x.c_),C.dL)},
brG:function brG(){},
brH:function brH(){},
btw:function btw(){},
brI:function brI(){},
brF:function brF(){},
brE:function brE(){},
ys:function ys(d,e,f){this.r=d
this.a=e
this.f=f},
aEA:function aEA(d,e,f){this.a=d
this.b=e
this.c=f},
aEz:function aEz(d,e,f){this.a=d
this.b=e
this.c=f},
bSl(){return new A.yt(null)},
alo(d,e,f,g,h){return new A.aln(e,h,g,f,d,null)},
yt:function yt(d){this.a=d},
aES:function aES(d){this.a=d},
aEK:function aEK(d,e,f){this.a=d
this.b=e
this.c=f},
aEL:function aEL(d,e,f){this.a=d
this.b=e
this.c=f},
aEM:function aEM(d){this.a=d},
aEJ:function aEJ(){},
aEN:function aEN(d){this.a=d},
aEO:function aEO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aER:function aER(){},
aEQ:function aEQ(){},
aEP:function aEP(){},
aEI:function aEI(d,e){this.a=d
this.b=e},
aEG:function aEG(d){this.a=d},
aEH:function aEH(d){this.a=d},
agf:function agf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aln:function aln(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anz:function anz(d,e){this.e=d
this.a=e},
bh0:function bh0(d){this.a=d},
bh1:function bh1(d){this.a=d},
bh2:function bh2(d,e,f){this.a=d
this.b=e
this.c=f},
bh_:function bh_(){},
IF:function IF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
J5:function J5(d,e){this.c=d
this.a=e},
bmP:function bmP(d){this.a=d},
agd:function agd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HO:function HO(d,e){this.c=d
this.a=e},
byv(d,e,f,g,h){var w=null
return B.jW(w,w,!0,w,new A.bqP(h,g,e,f),d,w,!0,!0,x.H)},
jR(d,e,f,g,h,i,j,k,l,m,n){return new A.alV(g,n,i,e,d,m,f,k,l,j,null)},
auH(d,e){return A.c21(d,e)},
c21(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$auH=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bk(D.azi)
t=4
o=e.aI(0,$.c_(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hA("finance-balance-sync",B.y(n,n)),$async$auH)
case 7:r=g
q=B.di(x.f.a(r.a),x.N,n)
l.WW()
if(J.d(J.a3(q,"configured"),!1)){l.bk(D.azm)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.buq()
if(e.e==null)B.Y(B.W(y.b))
e.gcz().cs(o)
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.WW()
l.bk(B.c9(null,null,null,null,null,C.p,null,B.l("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$auH,v)},
auK(d,e,f){var w=0,v=B.q(x.H)
var $async$auK=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.jW(null,null,!0,null,new A.bqN(f,e,e.aI(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$auK)
case 2:return B.o(null,v)}})
return B.p($async$auK,v)},
a6G:function a6G(d){this.a=d},
aJM:function aJM(){},
aJL:function aJL(){},
aJK:function aJK(){},
I7:function I7(d,e){this.c=d
this.a=e},
ber:function ber(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beg:function beg(){},
beh:function beh(){},
bei:function bei(){},
bej:function bej(){},
bek:function bek(){},
bel:function bel(){},
bem:function bem(){},
ben:function ben(){},
beo:function beo(d){this.a=d},
bep:function bep(d){this.a=d},
beq:function beq(d){this.a=d},
bes:function bes(d,e){this.a=d
this.b=e},
bet:function bet(d,e){this.a=d
this.b=e},
bqP:function bqP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqO:function bqO(d){this.a=d},
akI:function akI(d){this.a=d},
alV:function alV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
beu:function beu(d,e){this.a=d
this.b=e},
Uk:function Uk(d,e,f){this.c=d
this.d=e
this.a=f},
XQ:function XQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmn:function bmn(){},
bmo:function bmo(){},
bmp:function bmp(d){this.a=d},
TB:function TB(d,e,f){this.c=d
this.d=e
this.a=f},
b5e:function b5e(){},
b5g:function b5g(d){this.a=d},
b5h:function b5h(d){this.a=d},
b5f:function b5f(){},
TJ:function TJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6_:function b6_(){},
b60:function b60(){},
b61:function b61(){},
b62:function b62(d){this.a=d},
amo:function amo(d,e){this.c=d
this.a=e},
beZ:function beZ(){},
bf_:function bf_(){},
aiO:function aiO(d,e){this.c=d
this.a=e},
Ca:function Ca(d,e,f){this.c=d
this.d=e
this.a=f},
asb:function asb(d,e){this.c=d
this.a=e},
bo6:function bo6(){},
bo7:function bo7(){},
wF:function wF(d,e){this.c=d
this.a=e},
ah6:function ah6(d,e){this.e=d
this.a=e},
b3J:function b3J(){},
b3I:function b3I(){},
b3H:function b3H(d,e,f){this.a=d
this.b=e
this.c=f},
b3B:function b3B(d,e){this.a=d
this.b=e},
b3C:function b3C(d,e){this.a=d
this.b=e},
b3K:function b3K(d){this.a=d},
b3L:function b3L(d){this.a=d},
b3D:function b3D(){},
b3E:function b3E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b3F:function b3F(d,e){this.a=d
this.b=e},
b3G:function b3G(d,e,f){this.a=d
this.b=e
this.c=f},
bqN:function bqN(d,e,f){this.a=d
this.b=e
this.c=f},
bqM:function bqM(d){this.a=d},
Bd:function Bd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Td:function Td(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3v:function b3v(){},
b3w:function b3w(d){this.a=d},
b3x:function b3x(d){this.a=d},
b3z:function b3z(d,e){this.a=d
this.b=e},
b3y:function b3y(d,e){this.a=d
this.b=e},
b3A:function b3A(d){this.a=d},
bd:function bd(){},
bC1(d){return new A.KC(d,C.aw,C.dB,null,null)},
KC:function KC(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Te:function Te(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eP$=f
_.cu$=g
_.c=_.a=null},
b3M:function b3M(d,e){this.a=d
this.b=e},
b3N:function b3N(d){this.a=d},
axc(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.al6:f,p=a0==null?16:a0,o=d==null?D.a_D:d,n=g==null,m=n?A.buW(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xe:a3
n=n?A.buW(r,r,r,r,r,r,r,r):g
w=j==null?D.DS:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nR(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BK,s,w,i,n)},
axj(d,e,f,g,h){var w=d==null?D.al7:d,v=e==null?2:e,u=g==null?C.lw:g
return new A.fJ(h,f===!0,w,v,u)},
bPz(d,e,f){var w=d.a
w=C.e.aT(w+(e.a-w)*f)
return A.axj(A.kB(d.c,e.c,f,A.c2O(),x.fj),B.ac(d.d,e.d,f),!1,A.kB(d.e,e.e,f,A.a_2(),x.S),w)},
a0x(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SD
else w=h
v=m==null
u=v?8:m
t=$.lA()
s=t.aY9(f,v?8:m)
t=t.aYa(g,v?8:m)
v=d==null?A.bC_(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.al8:k)},
bPA(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mB(d.f,e.f,f),p=A.kB(d.r,e.r,f,A.a_2(),x.S),o=B.bT(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0x(A.bC_(v,u,null,!1,t),p,q,o,s,n,null,A.kB(d.y,e.y,f,A.c2P(),x.G),m,r)},
bPB(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mz(u,w,v,B.bT(d.d,e.d,f))},
bC_(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a0t(g===!0,v,u,w,f)},
buW(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0z(4,C.hY,16,D.xE,0,120,A.c2R(),!1,!1,D.Zm,0,C.J,A.c2Q())
else w=k
v=j==null?C.l1:j
return new A.a0y(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c3A(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.Q,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D0(C.e.j(f.b),v)},
c3z(d){return A.azb(D.dp,15)},
nR:function nR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axb:function axb(d,e){this.a=d
this.b=e},
fJ:function fJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axk:function axk(){},
axl:function axl(){},
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
mz:function mz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0t:function a0t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0y:function a0y(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adK:function adK(d,e){this.a=d
this.b=e},
a0z:function a0z(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D0:function D0(d,e){this.a=d
this.b=e},
KD:function KD(d){this.a=d},
a0A:function a0A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xD:function xD(d,e){this.a=d
this.b=e},
ah2:function ah2(){},
ah9:function ah9(){},
aha:function aha(){},
ahc:function ahc(){},
ahd:function ahd(){},
ahe:function ahe(){},
ahf:function ahf(){},
ahg:function ahg(){},
ahh:function ahh(){},
axm:function axm(d){this.a=d},
axn:function axn(){},
un:function un(d,e,f){this.a=d
this.b=e
this.c=f},
ahb:function ahb(){},
axo:function axo(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axp:function axp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axq:function axq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5C:function a5C(d){this.b=d},
a0w:function a0w(d,e,f){this.d=d
this.e=e
this.a=f},
aaT:function aaT(d,e,f,g,h,i,j,k){var _=this
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
c3B(d,e){var w=null
return new A.Rf(e.w,B.l(e.r,w,w,w,w,w,w,w),w)},
ax3(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pb(t,e.b,new A.q6(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bDn(d,e,f){var w=A.ax3(d.b,e.b,f),v=A.ax3(d.d,e.d,f),u=A.ax3(d.e,e.e,f)
return new A.uO(e.a,w,A.ax3(d.c,e.c,f),v,u)},
bSo(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ez(w,v)},
bDl(d,e,f){return new A.yv(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c5Y(d){return!0},
c3E(d){return D.a8q},
bDm(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pB(w,f,g,e)},
bFl(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c2K(),x.dv)
v.toString
w=A.kB(d.b,e.b,f,A.c2M(),x.bN)
w.toString
return new A.PM(v,w)},
bTa(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rg(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.mV(t,w,v,u)},
bYt(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rg(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.nm(t,w,v,u)},
bT9(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bT7(B.buO(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rg(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_2(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
bYs(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pu(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bYq(B.buO(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rg(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_2(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lh(r,e.f,e.r,t,e.x,u,v,w,s)},
bT7(d,e,f,g,h,i){return new A.a5N(f,!1,g,i,d,e)},
bT8(d){return C.e.ak(d.e,1)},
bYq(d,e,f,g,h,i){return new A.ae8(f,!1,g,i,d,e)},
bYr(d){return C.e.ak(d.e,1)},
bDi(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c2J(),x.cm)
v.toString
w=A.kB(d.b,e.b,f,A.c2L(),x.es)
w.toString
return new A.MC(v,w,!0)},
bSn(d,e,f){return new A.MJ(d,e==null?4:e,f)},
a0k:function a0k(){},
CZ:function CZ(d,e){this.a=d
this.b=e},
tq:function tq(d,e){this.r=d
this.w=e},
q6:function q6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aci:function aci(){},
pb:function pb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uO:function uO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez:function ez(d,e){this.a=d
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
pB:function pB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adM:function adM(){},
PM:function PM(d,e){this.a=d
this.b=e},
mV:function mV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nm:function nm(d,e,f,g){var _=this
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
lh:function lh(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a5N:function a5N(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
ae8:function ae8(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MC:function MC(d,e,f){this.a=d
this.b=e
this.c=f},
uN:function uN(){},
MJ:function MJ(d,e,f){this.a=d
this.b=e
this.c=f},
agY:function agY(){},
ah1:function ah1(){},
ak8:function ak8(){},
ako:function ako(){},
akp:function akp(){},
akr:function akr(){},
aks:function aks(){},
ald:function ald(){},
alc:function alc(){},
ale:function ale(){},
aoF:function aoF(){},
aqA:function aqA(){},
aqB:function aqB(){},
asf:function asf(){},
asU:function asU(){},
asT:function asT(){},
asV:function asV(){},
ax_:function ax_(){},
Kv:function Kv(){},
Kw:function Kw(d,e,f){this.c=d
this.d=e
this.a=f},
ax1:function ax1(d){this.a=d},
ax0:function ax0(d){this.a=d},
Rf:function Rf(d,e,f){this.c=d
this.e=e
this.a=f},
XF:function XF(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bWY(d,e,f){var w=B.ad(f),v=w.i("ab<1,jY>")
v=B.Q(new B.ab(f,new A.aZ3(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZ4(),w),w.i("av.E"))
return new A.acj(e,d,v,w,null)},
bPw(d,e,f){var w,v=null,u=B.aL(x.dO),t=J.a6v(4,x.er)
for(w=0;w<4;++w)t[w]=new B.to(v,C.ap,C.x,new B.ku(1),v,v,v,v,C.by,v,C.dD)
u=new A.a0l(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aL(x.g))
u.bl()
return u},
acj:function acj(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZ3:function aZ3(){},
aZ4:function aZ4(){},
a0l:function a0l(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.v=d
_.U=e
_.V=f
_.a3=g
_.We$=h
_.aU_$=i
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
beA:function beA(d,e){this.a=d
this.b=e},
ax2:function ax2(){},
jY:function jY(d,e){this.a=d
this.b=e},
nQ:function nQ(d,e){this.a=d
this.b=e},
agZ:function agZ(){},
ah_:function ah_(){},
ah0:function ah0(){},
Tb:function Tb(){},
AK:function AK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZ5:function aZ5(d){this.a=d},
aZ6:function aZ6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZ7:function aZ7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4T(d,e){var w=d==null?B.cS(C.E,1):d
return new A.a4S(e!==!1,w)},
a0C:function a0C(){},
a4S:function a4S(d,e){this.a=d
this.b=e},
MQ:function MQ(){},
a4U:function a4U(){},
axz:function axz(){},
aDT:function aDT(d,e){this.a=d
this.b=e},
ahk:function ahk(){},
akl:function akl(){},
akm:function akm(){},
akt:function akt(){},
KG:function KG(){},
vA:function vA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hp:function hp(){},
a4Y:function a4Y(d){this.a=d},
a4Z:function a4Z(d){this.a=d},
a5_:function a5_(d){this.a=d},
ML:function ML(){},
MM:function MM(){},
a52:function a52(d){this.a=d},
MO:function MO(){},
MP:function MP(d){this.a=d},
a4X:function a4X(d){this.a=d},
a4W:function a4W(d){this.a=d},
MK:function MK(d){this.a=d},
a50:function a50(d){this.a=d},
a51:function a51(d){this.a=d},
MN:function MN(d){this.a=d},
FV:function FV(){},
aUe:function aUe(d){this.a=d},
aUf:function aUf(d){this.a=d},
aUg:function aUg(d){this.a=d},
aUh:function aUh(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
aUk:function aUk(d){this.a=d},
aUl:function aUl(d){this.a=d},
aUm:function aUm(d){this.a=d},
aUn:function aUn(d){this.a=d},
aUo:function aUo(d){this.a=d},
aUp:function aUp(d){this.a=d},
aUq:function aUq(d){this.a=d},
O8:function O8(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Vv:function Vv(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eP$=g
_.cu$=h
_.c=_.a=null},
beF:function beF(d,e){this.a=d
this.b=e},
beD:function beD(d){this.a=d},
beE:function beE(d,e){this.a=d
this.b=e},
beC:function beC(){},
beG:function beG(d){this.a=d},
bwa(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pL(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aJX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SD:u
else w=g
v=f==null?A.axa(!1,u,0,u,!1,D.vS):f
w=new A.e7(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axa(!1,u,0,u,!1,D.vS):d,j,a0,i,s,!1,p)
w.arL(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bTD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bC0(d.ay,e.ay,f)
v=A.bC0(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.kB(d.cy,e.cy,f,A.a_2(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rg(d.w,e.w,f)
p=A.kB(d.a,e.a,f,A.c2I(),x.cw)
p.toString
o=B.bFT(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aJX(v,m,w,r,e.z,s,new A.yu(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.O9(n),!1,u,o,!0,e.cx,p)},
axa(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.e.aT(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
else w=e
return new A.a0v(h,w,g,i,f,!1)},
bC0(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rg(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bDm(t,A.kB(v.d,u.d,f,A.a_2(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rg(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axa(!1,s,v,u,e.a,new A.KB(!1,r,w.c,!0))},
bPC(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rg(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.e.aT(127.5),D.dp.A()>>>16&255,D.dp.A()>>>8&255,D.dp.A()&255):null
return new A.mA(e.a,e.b,w,v)},
c5Z(d){return!0},
byg(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.iY)return A.bz5(w.a,A.bvS(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dp:w},
c0l(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.iY)w=A.bz5(v.a,A.bvS(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dp}return A.azb(w,40)},
bIm(d,e,f,g,h){var w,v=A.byg(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.iY)w=A.bz5(u.a,A.bvS(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dp}u=A.azb(w,40)
return new A.MJ(v,h==null?4:h,u)},
c5X(d,e){return!0},
c2v(d,e){return Math.abs(d.a-e.a)},
c3H(d,e){var w=J.cX(e,new A.brv(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c3D(d,e){return-1/0},
c3C(d,e){return d.a[e].b},
bJv(d){var w=J.cX(d,new A.brs(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bJu(d){return A.azb(D.dp,15)},
pL:function pL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aJY:function aJY(){},
O9:function O9(d){this.a=d},
a0v:function a0v(d,e,f,g,h,i){var _=this
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
KB:function KB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yu:function yu(d,e,f){this.a=d
this.b=e
this.c=f},
aJN:function aJN(d,e){this.a=d
this.b=e},
a4V:function a4V(){},
EN:function EN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brv:function brv(d){this.a=d},
bru:function bru(d){this.a=d},
a6U:function a6U(){},
brs:function brs(){},
n1:function n1(){},
qg:function qg(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
ru:function ru(d,e){this.a=d
this.b=e},
tr:function tr(d,e){this.a=d
this.b=e},
Gl:function Gl(d){this.a=d},
Oa:function Oa(d){this.a=d},
zc:function zc(d,e){this.a=d
this.b=e},
ah7:function ah7(){},
ah8:function ah8(){},
ahl:function ahl(){},
akn:function akn(){},
akq:function akq(){},
am1:function am1(){},
am2:function am2(){},
am3:function am3(){},
am5:function am5(){},
am6:function am6(){},
am7:function am7(){},
am8:function am8(){},
aqz:function aqz(){},
ase:function ase(){},
aJZ:function aJZ(d){this.a=d},
aK_:function aK_(){},
aK0:function aK0(){},
zd:function zd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
am4:function am4(){},
aK1:function aK1(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aK4:function aK4(){},
aK2:function aK2(d,e,f){this.a=d
this.b=e
this.c=f},
aK3:function aK3(d,e,f){this.a=d
this.b=e
this.c=f},
aK5:function aK5(){},
vk:function vk(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6T:function a6T(d,e,f){this.d=d
this.e=e
this.a=f},
ab5:function ab5(d,e,f,g,h,i,j,k){var _=this
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
buV(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bF(o.length,0,!1,x.i),m=B.ad(o),l=new B.ab(o,new A.axd(),m.i("ab<1,F>")).kk(0,new A.axe()),k=e-l,j=new A.axh(k,d,n)
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
new B.iZ(o,m.i("iZ<1>")).aB(0,new A.axf(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iZ(o,m.i("iZ<1>")).aB(0,new A.axg(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axd:function axd(){},
axe:function axe(){},
axh:function axh(d,e,f){this.a=d
this.b=e
this.c=f},
axi:function axi(d,e,f){this.a=d
this.b=e
this.c=f},
axf:function axf(d,e,f){this.a=d
this.b=e
this.c=f},
axg:function axg(d,e,f){this.a=d
this.b=e
this.c=f},
bvS(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iZ(w,B.ad(w).i("iZ<1>")).aB(0,new A.aH6(v,d))
else throw B.e(B.bx('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aH6:function aH6(d,e){this.a=d
this.b=e},
aAl(d,e){var w,v
if(e!=null){w=B.ad(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aAm(),w),w.i("av.E"))
return A.c3v(d,new A.a1a(v,x.C))}else return d},
aAm:function aAm(){},
bXA(d,e){var w=!0
if(d!==C.fb)if(!(d===C.ap&&e===C.x))w=d===C.iD&&e===C.aV
if(w)return D.a93
else{w=!0
if(d!==C.iC)if(!(d===C.iD&&e===C.x))w=d===C.ap&&e===C.aV
if(w)return D.a95
else return D.a94}},
Nf:function Nf(d,e){this.a=d
this.b=e},
a10:function a10(d,e){this.a=d
this.b=e},
zi:function zi(d,e){this.a=d
this.$ti=e},
amf:function amf(){},
c3v(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ai(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.ad,k,k,h)
for(j=B.Mv(d),w=B.b([],x.I),v=new B.Mx(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.Y(B.fz('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.Mw(v,r)
v.Da()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Da()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.ei(B.b([],i),!0,s)
p=new B.JW(new B.cl(t,p,k,new B.ap3([q,o,o+m,!0]),l),C.q,k)
h.push(p)
l=g.f
if(l!=null)p.iy(l)
g.rs()}o+=m
n=!n}}return g},
a1a:function a1a(d,e){this.a=d
this.b=0
this.$ti=e},
b1v:function b1v(){},
bvH(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.ga9(s).push(u)
else if(C.b.ga9(s).length!==0)s.push(B.b([],t))}if(C.b.ga9(s).length===0)s.pop()
return s},
bPF(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gej(v)===0){v=d.a.a
if(v.gej(v)===0){v=d.b.a
if(v.gej(v)===0){v=d.c.a
v=v.gej(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azb(d,e){var w=1-e/100
return B.aD(d.gfI(d),C.e.aT(d.gNH()*w),C.e.aT(d.gG0()*w),C.e.aT(d.gKd()*w))},
bDk(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
bvI(d){var w=d.a,v=w?A.aZ2(d.b):0,u=w?A.aZ2(d.c):0,t=w?A.aZ2(d.d):0
return new B.al(v,u,t,w?A.aZ2(d.e):0)},
bUQ(d){var w
if(d.c===0){d.sf_(null)
w=B.c0(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwx(d,e,f,g){var w
if(f!=null){d.r=C.E.gp(0)
d.sf_(f.mN(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.sf_(null)}},
aZ2(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kB(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.lS(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.lS(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c4O(d,e,f){return C.e.aT(d+(e-d)*f)},
bz5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.lS(m,x.i)
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
A.a6F.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bG:C.C
r=r?C.m:C.an
w=x.p
v=B.b([],w)
C.b.L(v,B.b([B.ct(t.x,C.m,s,18),C.b2],w))
v.push(B.aC(new B.eq(t.c,!1,s),1))
v=B.ap(v,C.D,s,C.h,C.i,0,s,s)
u=t.w
w=B.b([v,C.V,B.l(t.d,1,C.ai,s,B.c2(u==null?C.k:u,22,C.Q),s,s,s)],w)
return B.bA(r,B.ae(w,C.D,s,C.ip,C.i),q,s,C.aj,s,3)}}
A.uM.prototype={
Lw(d){return this.aTZ(d)},
aTZ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lw=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_summary",B.a5(["p_from",E.rb(d.a),"p_to",E.rb(d.b)],s,r),r),$async$Lw)
case 3:q=f
if(q==null){u=D.ap6
w=1
break}if(x.f.b(q)){u=B.di(q,s,r)
w=1
break}u=D.ark
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)},
Lv(d){return this.aTY(d)},
aTY(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lv=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_kpis",B.a5(["p_from",E.rb(d.a),"p_to",E.rb(d.b)],s,r),r),$async$Lv)
case 3:q=f
if(x.f.b(q)){u=B.di(q,s,r)
w=1
break}u=D.aoR
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lv,v)},
pP(d){return this.ars(d)},
ars(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pP=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("sevdesk-sync",B.a5(["from",E.rb(d.a),"to",E.rb(d.b)],s,s)),$async$pP)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.e.a1(B.fG(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pP,v)},
Lr(d){return this.aTP(d)},
aTP(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lr=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("finance-export-pdf",B.a5(["from",E.rb(d.a),"to",E.rb(d.b)],s,s)),$async$Lr)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aF(J.a3(r,"base64"))
w=1
break}throw B.e(B.dX("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lr,v)}}
A.E8.prototype={
FV(d){return this.akv(d)},
akv(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FV=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lw(d),$async$FV)
case 7:q=f
o=A.aET(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hx(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FV,v)},
FQ(d){return this.akj(d)},
akj(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FQ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lv(d),$async$FQ)
case 7:q=f
o=A.bSk(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.Hx(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FQ,v)},
pP(d){return this.art(d)},
art(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pP=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pP(d),$async$pP)
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
p=r.Hx(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pP,v)},
Lq(d){return this.aTO(d)},
aTO(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lq=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lr(d),$async$Lq)
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
o=r.Hx(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lq,v)},
Hx(d){if(d instanceof B.yp)return d
if(d instanceof B.l8){if(d.b==="42501")return new B.vE(d.a)
return new B.t8(d.a)}if(d instanceof B.N3)return new B.t8("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B7("Unerwarteter Fehler: "+B.i(d))},
$iaEF:1}
A.qi.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vq.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wk.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azN.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAT.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o6.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CI.prototype={
gbF(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o7.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ys.prototype={
GQ(d){return this.arr(0)},
arr(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GQ=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dw)
s=t.r
r=s.aI(0,$.xp(),x.P)
p.a=null
w=3
return B.k(B.pa(new A.aEA(p,t,r),x.H),$async$GQ)
case 3:t.se4(0,f)
q=t.f
if(q.ghv(q)==null){q=$.bur()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GQ,v)},
Lp(){return this.aTN()},
aTN(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lp=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dw)
s=t.r.aI(0,$.xp(),x.P)
q.a=null
w=3
return B.k(B.pa(new A.aEz(q,t,s),x.H),$async$Lp)
case 3:t.se4(0,e)
r=t.f
u=r.ghv(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lp,v)}}
A.yt.prototype={
ds(d,e){var w=null,v=e.ao($.xp(),x.P),u=e.ao($.bur(),x.aN)
return B.iw(B.dT(B.b([new B.fA("Finanzen","Dashboard",new A.agf(e.ao($.bup(),x.b).giR(),new A.aEK(this,d,e),new A.aEL(this,d,e),new A.aEM(d),new A.aEN(d),new A.aEO(this,d,e,v),w),w),C.aQ,new A.anz(v,w),C.c1,D.aeP,C.c1,B.ds(u,new A.aEP(),new A.aEQ(),new A.aER(),!1,!0,!1,x.d,x.l)],x.p),C.cN,w,C.R,!1),C.m,new A.aES(e))},
Jn(d,e){return this.aMh(d,e)},
aMh(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jn=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bup()
w=3
return B.k(e.aI(0,s.ghR(),x.F).GQ(0),$async$Jn)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ghv(s)
t=d.P(x.q).f
t.bk(B.c9(null,null,null,null,null,C.p,null,B.l(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.K,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jn,v)},
Bm(d,e){return this.axF(d,e)},
axF(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bm=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bup().ghR(),x.F).Lp(),$async$Bm)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bk(D.azo)
w=1
break}t=B.q0(C.q,10)
w=4
return B.k($.bLM().u7(s,"finanzauswertung.pdf",t,null,null,null),$async$Bm)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bm,v)},
Bn(d,e,f){return this.aJS(d,e,f)},
aJS(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bn=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.jW(null,null,!0,null,new A.aEI(f,d),d,null,!0,!0,x.cJ),$async$Bn)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nK(e.aI(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dN()
m=n.ar(p)
n=n.ar(o)
w=8
return B.k(r.zG("finance_period",p,o,B.a5(["period_from",p.ed()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bn)
case 8:if(d.e!=null)d.P(x.q).f.bk(F.uT)
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
A.agf.prototype={
u(d){var w=this,v=null,u=A.alo(C.m,F.i3,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alo(v,D.aaR,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alo(v,D.xW,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alo(C.ax,C.jk,C.ax,s?v:w.e,"PDF-Export")
return B.ap(B.b([u,C.b2,t,C.b2,r,C.b2,q,C.b2,A.alo(C.aD,C.fR,C.aD,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.l,v,C.h,C.O,0,v,v)}}
A.aln.prototype={
u(d){var w,v=this,u=null,t=B.aP(12),s=B.aP(12),r=B.aP(12),q=v.w
if(q==null)q=C.an
q=B.cS(q,1)
w=v.r
if(w==null)w=C.k
return B.GX(B.dJ(!1,C.a0,!0,t,B.eS(!1,s,!0,B.b7(u,B.ct(v.c,w,u,20),C.t,u,u,new B.b4(u,u,q,r,u,u,C.H),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ag,0,u,u,u,u,u,C.bw),u,v.d,u,u)}}
A.anz.prototype={
ds(d,e){var w=null,v=this.e,u=$.dN(),t=x.p
return B.bA(w,B.ae(B.b([D.a8b,C.V,B.ap(B.b([D.abk,C.aU,B.aC(B.l(u.ar(v.a)+" \u2013 "+u.ar(v.b),w,w,w,B.E(C.k,16,C.Q),w,w,w),1)],t),C.l,w,C.h,C.i,0,w,w),C.w,B.mm(C.cH,B.b([new A.IF("Monat",new A.bh0(e),w,w),new A.IF("Jahr (YTD)",new A.bh1(e),w,w),new A.IF("Zeitraum w\xe4hlen \u2026",new A.bh2(this,d,e),D.a9V,w)],t),C.ec,6,8)],t),C.D,w,C.h,C.i),w,w,C.F,w,3)},
IK(d,e){return this.aII(d,e)},
aII(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IK=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b8(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.av1(new A.bh_(),d,B.bO(B.aX(t)-5,1,1,0,0,0,0),new B.lG(s.a,s.b,x.bz),B.bO(B.aX(t)+1,1,1,0,0,0,0),C.er),$async$IK)
case 2:r=g
if(r!=null)e.aI(0,$.xp().ghR(),x.V).wK(0,new E.lK(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IK,v)}}
A.IF.prototype={
u(d){var w=null,v=B.aP(9999),u=B.aP(9999),t=B.aP(9999),s=B.cS(C.an,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.L(q,B.b([B.ct(p,C.k,w,14),C.b2],r))
q.push(B.l(this.c,w,w,w,B.E(C.k,13,C.Q),w,w,w))
return B.dJ(!1,C.a0,!0,v,B.eS(!1,u,!0,B.b7(w,B.ap(q,C.l,w,C.h,C.O,0,w,w),C.t,w,w,new B.b4(w,w,s,t,w,w,C.H),w,w,w,w,C.l0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ag,0,w,w,w,w,w,C.bw)}}
A.J5.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iX(new A.bmP(this)),C.c1,D.a8f,C.w],r),p=this.c.w
if(p.length===0)q.push(B.bA(s,B.ap(B.b([D.acf,C.aL,B.aC(B.l("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.E(C.u,14,C.n),s,s,s),1)],r),C.l,s,C.h,C.i,0,s,s),C.ag,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.L(w,B.b([new A.agd(t.a,t.b,t.c==="revenue",t.d,s),C.V],r))}q.push(B.ae(w,C.l,s,C.h,C.i))}return B.ae(q,C.ac,s,C.h,C.i)}}
A.agd.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bG:C.ag,s=B.cS(u?C.m:C.an,1),r=B.aP(4),q=w.c
r=B.b7(C.X,B.l(C.d.a_(q,0,1),v,v,v,B.c2(C.k,14,C.r),v,v,v),C.t,v,v,new B.b4(t,v,s,r,v,v,C.H),v,36,v,v,v,v,v,36)
q=B.l(q+" \xb7 "+w.d,1,C.ai,v,B.E(C.k,14,C.Q),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aC(B.ae(B.b([q,B.l(t,v,v,v,B.E(C.u,12,C.n),v,v,v)],s),C.D,v,C.h,C.i),1)
q=$.dw().ar(w.f)
return B.bA(v,B.ap(B.b([r,C.aL,t,B.l(q,v,v,v,B.E(u?C.aD:C.k,15,C.Q),v,v,v)],s),C.l,v,C.h,C.i,0,v,v),v,v,C.eM,v,3)}}
A.HO.prototype={
u(d){var w=null
return B.bA(C.ax,B.ap(B.b([D.acR,C.aL,B.aC(B.l(this.c,w,w,w,B.E(C.k,14,C.n),w,w,w),1)],x.p),C.l,w,C.h,C.i,0,w,w),C.eH,w,C.F,w,3)}}
A.a6G.prototype={
ds(d,e){return B.ds(e.ao($.bOn(),x.e),new A.aJK(),new A.aJL(),new A.aJM(),!1,!0,!1,x.X,x.l)}}
A.I7.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awv,C.w,B.iX(new A.ber(v,q,100-t.w.a,w,p)),C.w,new A.akI(u),C.aQ,D.awu,C.w,new A.ah6(t,u),C.aQ,D.awo,C.w,B.bz(u,!0,u,B.mT(u,B.bA(u,new A.TB(t,220,u),u,u,C.F,u,3),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bes(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.awi,C.w,B.bz(u,!0,u,B.mT(u,new A.TJ(t,200,!1,u),C.a8,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bet(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.awm,C.w,new A.amo(t,u),C.aQ,D.awj,C.w,new A.aiO(t,u)],s)
if(t.f.length!==0)C.b.L(r,B.b([C.aQ,D.awq,C.w,new A.asb(t,u)],s))
return B.ae(r,C.ac,u,C.h,C.i)}}
A.akI.prototype={
u(d){var w=null
return B.l("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.E(C.u,11,C.n).eg(1.35),w,w,w)}}
A.alV.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.d.cD(m.d,"-")?C.ax:C.aD
else w=C.k
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.beu(m,d):l
r=x.p
q=B.b([B.aC(B.l(m.c.toUpperCase(),l,l,l,B.E(C.u,10,C.r).fZ(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cS(C.hQ,0.8)
n=B.aP(4)
q.push(B.b7(l,B.l("Ziel "+p,l,l,l,B.E(C.ax,9,C.r),l,l,l),C.t,l,l,new B.b4(l,l,o,n,l,l,C.H),l,l,l,l,C.np,l,l,l))}q=B.b([B.ap(q,C.l,l,C.h,C.i,0,l,l),C.bb,B.bvG(C.dv,B.l(m.d,l,l,l,B.c2(w,22,C.r),l,l,l),C.mJ)],r)
p=m.e
if(p!=null)q.push(B.l(p,2,C.ai,l,B.E(C.u,10,C.aJ),l,l,l))
q.push(C.cX)
q.push(B.ap(B.b([new A.Uk("Vormonat",m.r,l),C.cW,new A.Uk("Vorjahr",m.f,l)],r),C.l,l,C.h,C.i,0,l,l))
q.push(C.cX)
q.push(B.aC(new A.XQ(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.mT(l,B.bA(l,B.ae(q,C.D,l,C.h,C.i),l,l,C.dC,l,3),C.a8,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.Uk.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aP(4)
return B.b7(r,B.l(this.c+" \u2014",r,r,r,B.E(C.u,9,C.r),r,r,r),C.t,r,r,new B.b4(C.an,r,r,q,r,r,C.H),r,r,r,r,C.np,r,r,r)}w=q>=0
v=w?C.aD:C.ax
u=v.fm(0.12)
t=B.cS(v,0.7)
s=B.aP(4)
return B.b7(r,B.ap(B.b([B.ct(w?F.a9a:D.a99,v,r,10),F.az0,B.l(this.c+" "+C.e.ak(q,1)+" %",r,r,r,B.E(v,9,C.r),r,r,r)],x.p),C.l,r,C.h,C.O,0,r,r),C.t,r,r,new B.b4(u,r,t,s,r,r,C.H),r,r,r,r,C.np,r,r,r)}}
A.XQ.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ez(v,j[v]))
u=C.b.kk(j,new A.bmn())
t=C.b.kk(j,new A.bmo())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bmp(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4T(k,!1)
w=B.b([A.aJX(k,2,A.axa(!1,C.m.fm(0.16),0,k,!0,D.vS),C.m,0.35,k,D.DV,k,!0,!1,!0,!1,D.Fd,!1,10,D.Y9,!0,C.lw,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.O8(A.bwa(k,k,k,D.al9,l,D.BK,D.DS,D.DW,w,D.aeT,k,m,k,n,D.Xe,D.ala,D.a8t),C.aw,C.ah,k,k)}}
A.TB.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMa
w=C.b.fO(p,0,new A.b5e())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axj(B.b([A.a0x(q,q,D.Bb,q,C.m,q,q,q,r.b,6),A.a0x(q,q,D.Bb,q,C.k,q,q,q,r.c,6)],t),2,q,q,s))}return B.cf(A.bC1(A.axc(q,q,u,q,q,A.a4T(q,!1),q,new A.yv(!0,!0,q,new A.b5f(),A.ZY(),!1,q,A.auM(),A.ZY()),q,v,q,q,new A.uO(!0,new A.pb(16,q,new A.q6(!0,new A.b5g(this),46,q),!0),D.kv,D.kv,new A.pb(16,q,new A.q6(!0,new A.b5h(p),26,q),!0)))),this.d,q)},
aLy(d){if(Math.abs(d)>=1000)return C.e.ak(d/1000,1)+" k"
return C.e.ak(d,0)}}
A.TJ.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6_(),w),x.i)
C.b.L(o,new B.ab(u,new A.b60(),w))
t=C.b.fO(o,0,new A.b61())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axj(B.b([A.a0x(q,q,q,q,C.m,q,q,q,v[s],14),A.a0x(q,q,q,q,C.aD,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cf(A.bC1(A.axc(q,q,n,q,q,A.a4T(q,!1),q,D.DW,q,o,q,q,new A.uO(!0,D.kv,D.kv,D.kv,new A.pb(16,q,new A.q6(!0,new A.b62(p),26,q),!0)))),this.d,q)
return this.e?r:B.bA(q,r,q,q,C.F,q,3)}}
A.amo.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aM9
w=new B.ab(k,new A.beZ(),B.ad(k).i("ab<1,F>")).kk(0,new A.bf_())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.l(r.b,m,m,m,new B.O(!0,C.k,m,l,C.bH,m,14,C.r,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.dw()
o=p.ar(r.f)
q=B.ae(B.b([q,B.l(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.O(!0,C.u,m,l,C.bH,m,12,C.aJ,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.D,m,C.h,C.i)
o=r.d
p=p.ar(o)
n=new B.aS(4,4)
o=B.b([new B.ix(C.aA,C.h,C.i,C.l,m,C.bz,m,0,B.b([new B.mP(1,C.eN,q,m),C.aU,B.l(p,m,m,m,new B.O(!0,C.k,m,"Bricolage Grotesque",C.bH,m,16,C.r,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.cX,new B.Dq(new B.d4(n,n,n,n),C.bM,B.Ob(C.an,8,C.e.bI(o/w,0,1),D.B_),m)],v)
q=C.b.ga9(k)
if(r!==q)q=B.L(r)===B.L(q)&&B.a_0(r.gbF(),q.gbF())
else q=!0
if(!q)o.push(C.w)
C.b.L(u,o)}return B.bA(m,B.ae(u,C.l,m,C.h,C.i),m,m,C.F,m,3)}}
A.aiO.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aC(new A.Ca("Aktive Kunden",""+s,u),1)
w=B.aC(new A.Ca("K\xe4ufe",""+t.a,u),1)
v=$.dw()
return B.bA(u,B.ap(B.b([s,w,B.aC(new A.Ca("\xd8-Warenkorb",v.ar(t.d),u),1),B.aC(new A.Ca("Umsatz/Kunde",v.ar(r),u),1)],x.p),C.l,u,C.h,C.i,0,u,u),u,u,C.F,u,3)}}
A.Ca.prototype={
u(d){var w=null
return B.ae(B.b([B.l(this.c.toUpperCase(),w,w,w,B.E(C.u,10,C.r).fZ(0.6),w,w,w),C.bW,B.l(this.d,w,w,w,B.c2(C.k,20,C.r),w,w,w)],x.p),C.D,w,C.h,C.O)}}
A.asb.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ab(m,new A.bo6(),B.ad(m).i("ab<1,F>")).kk(0,new A.bo7()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.l(u.b,1,C.ai,o,new B.O(!0,C.k,o,n,C.bH,o,13,C.r,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.l(""+u.c+"\xd7 ",o,o,o,new B.O(!0,C.u,o,n,C.bH,o,12,C.Q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.dw().ar(r)
p=new B.aS(4,4)
r=B.b([new B.ix(C.aA,C.h,C.i,C.l,o,C.bz,o,0,B.b([new B.mP(1,C.eN,t,o),s,B.l(q,o,o,o,new B.O(!0,C.k,o,n,C.bH,o,13,C.r,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.bb,new B.Dq(new B.d4(p,p,p,p),C.bM,B.Ob(C.an,6,C.e.bI(r/l,0,1),D.B_),o)],k)
t=C.b.ga9(m)
if(u!==t)t=B.L(u)===B.L(t)&&B.a_0(u.gbF(),t.gbF())
else t=!0
if(!t)r.push(C.V)
C.b.L(j,r)}return B.bA(o,B.ae(j,C.l,o,C.h,C.i),o,o,C.F,o,3)}}
A.wF.prototype={
u(d){var w=null
return B.bA(w,B.l(this.c,w,w,w,B.E(C.u,13,C.n),w,w,w),C.ag,w,C.F,w,3)}}
A.ah6.prototype={
ds(d,e){return B.ds(e.ao($.buq(),x.fM),new A.b3H(this,d,e),new A.b3I(),new A.b3J(),!1,!0,!1,x.h,x.l)}}
A.Bd.prototype={
W(){return new A.Td()},
aYQ(){return this.d.$0()}}
A.Td.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aP()
q.d=new B.b8(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fw(J.an(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.y(x.N,x.bP)
for(t=0;t<8;++t){s=D.px[t].a
if(v)r=""
else{r=B.b_(J.a3(w,s))
if(r==null)r=null
r=C.e.ak(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bH(new B.cQ(r,C.bJ,C.aR),$.ag()))}q.e!==$&&B.b2()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c7(v,v.r,v.e,B.j(v).i("c7<2>"))
while(v.t()){w=v.d
w.T$=$.ag()
w.R$=0}this.an()},
ru(d){var w=this.e
w===$&&B.a()
w=C.d.bc(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.iu(B.b0(w,",","."))
return w==null?0:w},
a4d(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.px[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.e.ak(u,2)
s=B.b0(s,".",",")
t.lI(0,t.a.y4(C.aR,C.bJ,s))}}this.J(new A.b3v())},
aFn(){this.a4d(D.ap8)
this.c.P(x.q).f.bk(D.azJ)},
HZ(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HZ=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.aT(a1)
for(e=0;e<8;++e)a2.E(0,D.px[e].a)
q=a2
t=4
w=7
return B.k($.aEt.cv().zq(B.b(["csv","txt"],x.s),C.xH,!0),$async$HZ)
case 7:p=a5
a2=p
o=a2==null?null:J.JT(a2.a).c
if(o==null){w=1
break}n=C.aq.adQ(0,o,!0)
m=B.y(a1,x.i)
for(a1=C.BP.ce(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.avv(l,B.bJ("[;,\t]",!0,!1,!1))
if(J.c4(k)<2)continue
j=C.d.bc(J.a3(k,0)).toLowerCase()
i=J.CD(q,j)?j:D.arl.h(0,j)
if(i==null)continue
d=C.d.bc(C.b.n6(J.bP4(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.iu(h)
if(g!=null)J.eL(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bk(D.azl)
w=1
break}r.a4d(m)
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
return B.p($async$HZ,v)},
Ia(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ia=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3w(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0o("upsert_finance_balance",B.a5(["p_as_of",C.d.a_(n.ed(),0,10),"p_cash_and_bank",q.ru("cash_and_bank"),"p_receivables",q.ru("receivables"),"p_inventory_value",q.ru("inventory_value"),"p_other_current_assets",q.ru("other_current_assets"),"p_fixed_assets",q.ru("fixed_assets"),"p_current_liabilities",q.ru("current_liabilities"),"p_long_term_liabilities",q.ru("long_term_liabilities"),"p_equity",q.ru("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ia)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYQ()
o=q.c
o.toString
B.bm(o,!1).fc()
q.c.P(x.q).f.bk(D.azp)
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
if(q.c!=null)q.J(new A.b3x(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ia,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.l("Bilanzwerte erfassen",r,r,r,B.c2(C.k,18,C.r),r,r,r),p=s.f?r:new A.b3z(s,d),o=s.d
o===$&&B.a()
p=B.i6(D.abC,B.l("Stichtag: "+C.d.a_(o.ed(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aC(B.i6(D.acH,D.aFt,o?r:s.gaEi(),r),1)
v=x.p
w=B.b([p,C.V,B.ap(B.b([w,C.aU,B.aC(B.i6(D.acw,D.aFi,o?r:s.gaFm(),r),1)],v),C.l,r,C.h,C.i,0,r,r),C.w],v)
for(u=0;u<8;++u){p=D.px[u]
o=s.e
o===$&&B.a()
C.b.L(w,B.b([B.eX(r,C.aT,!1,r,!0,C.p,r,B.fa(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a8,!0,r,!0,r,!1,r,C.aW,r,r,r,r,r,C.iE,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a4,r,r,r,r),C.V],v))}w.push(B.l("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.E(C.u,11,C.n),r,r,r))
p=B.cf(B.f5(B.ae(w,C.ac,r,C.h,C.O),r,r,r,C.R),r,380)
o=s.f
w=B.dK(C.d9,r,r,o?r:new A.b3A(d),r,r)
o=o?r:s.gaF5()
t=B.dH(C.m,C.C,r,r,r,r,r)
return B.mw(B.b([w,B.dR(s.f?F.YG:C.ez,o,t)],v),C.C,p,q)}}
A.bd.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a_0(this.gbF(),e.gbF())
else w=!0
return w},
gB(d){return(B.fi(B.L(this))^B.bK2(this.gbF()))>>>0},
j(d){B.bDh()
return B.L(this).j(0)}}
A.KC.prototype={
W(){return new A.Te(B.y(x.S,x.J),new A.axm(B.y(x.x,x.gF)),null,null)}}
A.Te.prototype={
u(d){var w,v=this,u=v.a20(),t=v.CW
t.toString
t=v.a21(t.aw(0,v.gh6().gp(0)))
w=v.a21(u)
v.a.toString
return new A.Kw(new A.a0w(t,w,null),u,null)},
a21(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axj(s.c,s.d,!1,r,s.a))}return d.aQM(w)},
a20(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UO(t.ch)
if(r)s=w.a
r=t.y
t=t.aRI(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQN(A.buW(!1,!0,!0,v.d,v.c,u.gat5(),v.f,v.e))}return t},
at6(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagk()||e==null||e.a==null){w=v.cy
v.J(w.gaQc(w))
return}v.J(new A.b3M(v,e))},
m1(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a20(),new A.b3N(w)))}}
A.nR.prototype={
Vp(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axc(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRI(d,e){return this.Vp(null,null,d,e)},
aQN(d){return this.Vp(null,d,null,null)},
aQM(d){return this.Vp(d,null,null,null)},
Xl(d,e,f){var w,v,u,t=A.kB(d.ch,e.ch,f,A.c2N(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bDn(d.d,e.d,f),q=A.bFl(d.e,e.e,f),p=A.bDl(d.c,e.c,f),o=e.a
o=A.a4T(B.a0O(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axc(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bDi(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbF(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axb.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fJ.prototype={
gd4(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.axk(),B.ad(v).i("ab<1,F>")).kk(0,new A.axl())
v=v.length
return w+(v-1)*this.d},
gbF(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbF(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mz.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0t.prototype={
gbF(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0y.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adK.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0z.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D0.prototype={
gbF(){return[this.a,this.b,C.cZ,C.x,null]}}
A.KD.prototype={}
A.a0A.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xD.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xl(v,w,d)}}
A.ah2.prototype={}
A.ah9.prototype={}
A.aha.prototype={}
A.ahc.prototype={}
A.ahd.prototype={}
A.ahe.prototype={}
A.ahf.prototype={}
A.ahg.prototype={}
A.ahh.prototype={}
A.axm.prototype={
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.un(0,0,!1)
v=new A.zi(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.un(t,u,!0)}w=null
try{w=C.b.p8(d,new A.axn())}catch(s){return new A.un(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.un(q,r,!1)
u.m(0,v,j)
return j}}
A.un.prototype={
gbF(){return[this.a,this.b,this.c]}}
A.ahb.prototype={}
A.axo.prototype={
i8(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0b(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acK(t,A.buV(w,t.a),u)
l.y=u
l.aT4(e,u,f)
l.amu(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTd(d,e,m,t,r,s,n,o,f)}}},
acK(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dX("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iZ(p,B.ad(p).i("iZ<1>")).aB(0,new A.axp(t,q,r,s))
w.push(new A.a5C(q))}return w},
aT4(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=b4.y,t=b4.x,s=v.c,r=x.v,q=0;q<w.length;++q)for(p=w[q].c,o=0;o<p.length;++o){n=p[o]
m=n.e
l=m/2
k=n.f
if(k==null){j=new B.aS(l,l)
k=new B.d4(j,j,j,j)}i=n.w
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
a5=B.PI(g,Math.min(b3.dG(a2,b5,b8),a4-a1),f,a4,d,a0,j,e)}else{a6=b3.dG(Math.min(u,a3),b5,b8)
a5=B.PI(g,a6,f,Math.max(b3.dG(a2,b5,b8),a6+a1),d,a0,j,e)}j=b3.f
j===$&&B.a()
e=n.c
j.r=(e==null?C.G:e).gp(0)
j.sf_(null)
v.ei(a5,b3.f)
j=n.y
if(j.length!==0)for(a7=0;a7<j.length;++a7){a8=j[a7]
e=a8.a
a9=b3.dG(e,b5,b8)
d=a8.b
b0=b3.dG(d,b5,b8)
b3.f.r=a8.c.gp(0)
b1=d<e?new B.H(g,a9,f,b0):new B.H(g,b0,f,a9)
J.bj(s.save())
s.clipRect(B.et(b1),$.nH()[1],!0)
v.ei(a5,b3.f)
s.restore()
b3.aTb(b6,a8,a7,j.length,m,a5,b5,b8)}m=i.b
if(m>0){j=i.a
j=j.gej(j)>0}else j=!1
if(j){j=b3.r
j===$&&B.a()
e=i.a
j.r=e.gp(e)
j.c=m
m=$.ai()
j=B.b([],r)
b2=new B.cl(m.r,C.ad,null,null,j)
j.push(new B.hj(a5))
b2.rs()
v.fL(A.aAl(b2,n.r),b3.r)}}}},
aTd(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AY(a5,C.dD,a5,a5,a5,B.de(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lA().a_c(a8,a7.b),a7.a),C.cZ,C.x,a5,b6.c,C.by)
w.agC(b1.f)
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
if(v!==D.aHQ)j=v===D.Zm&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_d(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aS(s,s)
e=B.FJ(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lA().Kp(new B.I(v,t),d).b
s=$.lA()
q=w.b
p=q.c
q=q.a.c
a0=s.Kp(new B.I(p,q.gbD(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaiR()
a1=b1.Q
if(!a1.k(0,C.J)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.W1(d,new A.axq(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aTb(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gej(w)===0}else w=!0
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
q=B.PI(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a3:new B.aS(i.z,i.Q)
p=v?C.a3:new B.aS(i.x,i.y)
o=v?new B.aS(i.e,i.f):C.a3
q=B.PI(w,s,u,r,t,p,o,v?new B.aS(i.r,i.w):C.a3)}else q=B.bwT(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.ei(q,n.r)},
WG(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acK(b2,A.buV(a8,b2.a),a8.ch)
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
break}++a3}return new A.a0A(d,q,a0,o,a2,a1,new A.ez(d.a,v),new B.r(n,t))}}return null}}
A.a5C.prototype={}
A.a0w.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcS(),t=new A.axo()
t.a1j()
$.ai()
w=B.aW()
w.b=C.bf
t.f=w
w=B.aW()
w.b=C.aY
t.r=w
w=B.aW()
w.b=C.bf
w.r=C.y.gp(0)
t.w=w
w=B.aW()
w.b=C.aY
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aaT(this.d,v,u,t,d,C.b6,new B.bq(),B.aL(x.g))
t.bl()
t.Z1(v.cy)
t.afQ()
return t},
bz(d,e){e.sih(0,this.d)
e.sYN(this.e)
e.scS(B.bu(d,null,x.w).w.gcS())
e.v=d
e.bb()}}
A.aaT.prototype={
sih(d,e){if(this.av.k(0,e))return
this.av=e
this.bb()},
sYN(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0U(d.cy)
w.bb()},
scS(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.c
J.bj(s.save())
s.translate(e.a,e.b)
w=u.v
v=u.gC(0)
u.h0.i8(w,new A.a10(t,v),new A.vA(u.av,u.i4,u.cZ,x.Q))
s.restore()},
a_4(d){var w=this,v=w.gC(0)
return new A.KD(w.h0.WG(d,v,new A.vA(w.av,w.i4,w.cZ,x.Q)))}}
A.a0k.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CZ.prototype={
K(){return"AxisSide."+this.b}}
A.tq.prototype={}
A.q6.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aci.prototype={
gbF(){return[!1,0,0,0]}}
A.pb.prototype={
gbF(){return[this.b,this.a,this.c,!0]}}
A.uO.prototype={
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
A.yv.prototype={
gbF(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pB.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.adM.prototype={
gbF(){return[this.a,this.b]}}
A.PM.prototype={
gbF(){return[this.a,this.b]}}
A.mV.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nm.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbF(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lh.prototype={
gbF(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5N.prototype={
gbF(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.ae8.prototype={
gbF(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MC.prototype={
gbF(){return[this.a,this.b,!0]}}
A.uN.prototype={}
A.MJ.prototype={
aee(d,e,f){var w,v
$.ai()
w=B.aW()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iA(f,this.b,w)},
gbF(){return[this.a,this.b,this.c,0]}}
A.agY.prototype={}
A.ah1.prototype={}
A.ak8.prototype={}
A.ako.prototype={}
A.akp.prototype={}
A.akr.prototype={}
A.aks.prototype={}
A.ald.prototype={}
A.alc.prototype={}
A.ale.prototype={}
A.aoF.prototype={}
A.aqA.prototype={}
A.aqB.prototype={}
A.asf.prototype={}
A.asU.prototype={}
A.asT.prototype={}
A.asV.prototype={}
A.ax_.prototype={
Mt(d,e,f,g,h,i){return new B.ii(this.aWQ(d,e,f,g,h,i),x.g4)},
aWP(d,e,f,g){return this.Mt(d,e,f,!0,g,!0)},
aWQ(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mt(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lA().ak3(s,u,v,w)
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
A.Kv.prototype={
a1j(){var w,v=this
$.ai()
w=B.aW()
w.b=C.aY
v.a=w
w=B.aW()
w.b=C.bf
v.b=w
w=B.aW()
w.b=C.bf
v.e=w
w=B.aW()
w.b=C.aY
v.c=w
v.d=B.aW()},
i8(d,e,f){var w=this
w.a0c(d,e,f)
w.aT0(e,f)
w.aTa(e,f)
w.aT9(e,f)},
aT9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lA().OB(w.a,a1.r-a1.f)
u=$.btX().Mt(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fl(u.a(),u.$ti.i("fl<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.ff(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l9(n,m)
if(j!=null){p.r=C.E.gp(0)
p.sf_(j.mN(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.sf_(a0)}k=l.c
p.c=k
if(k===0){p.sf_(a0)
k=B.c0(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.DE(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lA().OB(w.b,a1.y-a1.x)
u=$.btX().Mt(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fl(u.a(),u.$ti.i("fl<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l9(n,m)
if(k!=null){q.r=C.E.gp(0)
q.sf_(k.mN(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.sf_(a0)}p=f.c
q.c=p
if(p===0){q.sf_(a0)
p=B.c0(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.DE(n,m,d.a,f.d)}},
aT0(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.eV(new B.H(0,0,0+w.a,0+w.b),this.b)},
aTa(d,e){var w,v,u,t,s,r,q,p,o=this,n=d.b,m=e.a.e,l=m.b,k=l.length
if(k!==0)for(w=d.a,v=n.b,u=0;u<l.length;l.length===k||(0,B.G)(l),++u){t=l[u]
s=B.l9(new B.r(o.ff(t.a,n,e),0),new B.r(o.ff(t.b,n,e),v))
r=o.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gp(0)
r.sf_(p.mN(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.sf_(null)}w.eV(s,o.e)}m=m.a
l=m.length
if(l!==0)for(k=d.a,w=n.a,u=0;u<m.length;m.length===l||(0,B.G)(m),++u){t=m[u]
s=B.l9(new B.r(0,o.dG(t.a,n,e)),new B.r(w,o.dG(t.b,n,e)))
v=o.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gp(0)
v.sf_(q.mN(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.sf_(null)}k.eV(s,o.e)}},
aT8(d,e,f){var w,v
this.a0c(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aef(d,e,f,w)
if(v.b.length!==0)this.aTf(d,e,f,w)},
aef(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l9(m,l)
if(j!=null){n.r=C.E.gp(0)
n.sf_(j.mN(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.sf_(null)}k=p.c
n.c=k
if(k===0){n.sf_(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.DE(m,l,f.c,p.d)
n=p.r
h=n.gd4(n).eM(0,2)
g=C.e.al(o,n.gbD(n).eM(0,2))
J.bj(r.save())
r.translate(h,g)
s.vt(n.gNo())
r.restore()
n=p.f
h=n.gd4(n).eM(0,2)
o=C.e.al(o,n.gbD(n).eM(0,2))
k=f.d
k===$&&B.a()
s.aeg(0,n,new B.r(h,o),k)}}},
aTf(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l9(m,l)
if(j!=null){n.r=C.E.gp(0)
n.sf_(j.mN(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.sf_(null)}k=p.c
n.c=k
if(k===0){n.sf_(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.DE(m,l,d.c,p.d)
n=p.r
h=n.gd4(n).eM(0,2)
g=n.gbD(n).eM(0,2)
f=C.e.al(o,h)
e=C.e.al(u,g)
J.bj(r.save())
r.translate(f,e)
s.vt(n.gNo())
r.restore()
n=p.f
h=n.gd4(n).eM(0,2)
g=n.gbD(n).ad(0,2)
o=C.e.al(o,h)
k=C.e.al(u,g)
j=d.d
j===$&&B.a()
s.aeg(0,n,new B.r(o,k),j)}}},
ff(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_d(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kw.prototype={
galP(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
galQ(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galR(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galN(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
am9(d){var w,v=this,u=null,t=v.d,s=A.bvI(t.d),r=t.a
r=r.a&&A.bPF(r.b)?r.b:u
w=B.b([B.b7(u,v.c,C.t,u,u,new B.b4(u,u,r,u,u,u,C.H),u,u,u,s,u,u,u,u)],x.p)
s=new A.ax1(w)
if(v.galP())C.b.hf(w,s.$1(!0),new A.AK(D.B7,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galR())C.b.hf(w,s.$1(!0),new A.AK(D.mF,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galQ())C.b.hf(w,s.$1(!0),new A.AK(D.B8,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galN())C.b.hf(w,s.$1(!0),new A.AK(D.dM,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
u(d){return B.iX(new A.ax0(this))}}
A.Rf.prototype={
W(){return new A.XF(new B.be(null,x.eF))}}
A.XF.prototype={
ayD(){switch(this.a.c.a){case 0:return C.ef
case 1:return C.fH
case 2:return C.dv
case 3:return C.fh}},
az8(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayF(d){this.a.toString
return},
aA(){this.aP()
$.cB.x1$.push(this.ga4I())},
ba(d){this.bE(d)
$.cB.x1$.push(this.ga4I())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.az8()
return B.Sr(B.b12(0,B.b7(v.ayD(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.q)}}
A.acj.prototype={
bm(d){return A.bPw(this.f,this.r,this.e)},
bz(d,e){var w=this.e
if(e.v!==w){e.v=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0l.prototype={
hq(d){if(!(d.b instanceof B.hq))d.b=new B.hq(null,null,C.q)},
hX(d){if(this.v===C.aA)return this.ye(d)
return this.adT(d)},
aLJ(d){switch(this.v.a){case 0:return d.b
case 1:return d.a}},
a9A(d){switch(this.v.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a9z(d,B.hD())
switch(this.v.a){case 0:return d.c1(new B.I(w.a,w.b))
case 1:return d.c1(new B.I(w.b,w.a))}},
a9z(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.v===C.aA?d.b:d.d,m=o.af$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.v.a){case 0:q=B.h3(u,null)
break
case 1:q=B.h3(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9A(p)
t=Math.max(t,o.aLJ(p))
m=r.aG$}return new A.beA(n<1/0?n:s,t)},
cC(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a9z(o,B.mu()),m=n.a,l=n.b
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
q=s.b-p.a9A(r==null?B.Y(B.W("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.cb(w))):r)/2
switch(p.v.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e8(d,e){return this.yf(d,e)},
aO(d,e){if(this.gC(0).gZ(0))return
this.a3.sbg(0,null)
this.vj(d,e)},
l(){this.a3.sbg(0,null)
this.ap8()}}
A.beA.prototype={}
A.ax2.prototype={}
A.jY.prototype={
gbF(){return[this.a,this.b]}}
A.nQ.prototype={}
A.agZ.prototype={}
A.ah_.prototype={
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
A.ah0.prototype={}
A.Tb.prototype={
l(){var w,v,u
for(w=this.We$,v=w.length,u=0;u<v;++u)w[u].l()
this.ir()}}
A.AK.prototype={
goL(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghK(){switch(this.c.a){case 0:return C.dv
case 1:return C.fh
case 2:return C.ef
case 3:return C.fH}},
gb0y(){var w=this.d,v=A.bvI(w.d),u=A.bDk(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ad(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ad(0,new B.al(u.a,0,u.c,0))}},
gaiE(){var w=this.d,v=A.bDk(w.a),u=A.bvI(w.d)
switch(this.c.a){case 2:case 0:return u.gd1(0)+u.gd5(0)+(v.gd1(0)+v.gd5(0))
case 1:case 3:return u.geu()+v.geu()}},
aXz(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goL().c.d
if(o==null)o=$.lA().OB(d,f-e)
w=p.c
v=w!==D.mF
if((!v||w===D.dM)&&p.d instanceof A.nR){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.buV(u,d)
w=new B.iZ(t,B.ad(t).i("iZ<1>"))
s=w.giB(w).eQ(0,new A.aZ5(u),x.W).fQ(0)}else{r=$.btX()
w=!v||w===D.dM
v=p.d
q=r.aWP(w?v.w:v.z,o,f,e)
v=B.ok(q,new A.aZ6(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.j(v).i("t.E"))}w=B.ad(s).i("ab<1,nQ>")
w=B.Q(new B.ab(s,new A.aZ7(p,e,f,o,g,d),w),w.i("av.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goL()
w=j.goL()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b7(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mF
u=!v
t=!u||w===D.dM
s=j.e
r=t?s.a:s.b
t=j.ghK()
s=!u||w===D.dM?C.R:C.aA
q=B.b([],x.p)
if(w===D.B7||v)j.goL()
if(j.goL().c.a){v=!u||w===D.dM?r:j.goL().c.c
p=!u||w===D.dM?j.goL().c.c:r
o=j.gb0y()
n=!u||w===D.dM?C.aA:C.R
j.gaiE()
m=j.gaiE()
l=!u||w===D.dM
k=j.d
l=l?k.f:k.x
u=!u||w===D.dM?k.r:k.y
q.push(B.b7(i,A.bWY(new A.ax2(),n,j.aXz(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B8||w===D.dM)j.goL()
return new B.f0(t,i,i,B.bSp(q,C.l,s,i,C.h,C.O,0,i,i,C.bz),i)}}
A.a0C.prototype={
gbF(){return[this.a,this.b]}}
A.a4S.prototype={
gbF(){return[this.a,this.b]}}
A.MQ.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4U.prototype={
gac1(d){return!1},
gbF(){return[!1,!1,!1,!1]}}
A.axz.prototype={}
A.aDT.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ahk.prototype={}
A.akl.prototype={}
A.akm.prototype={}
A.akt.prototype={}
A.KG.prototype={
i8(d,e,f){}}
A.vA.prototype={}
A.hp.prototype={
gdM(){return null},
gagk(){var w,v=this
B.bv()
B.bv()
B.bv()
w=v instanceof A.MP
if(w)return!0
return!(v instanceof A.MM)&&!(v instanceof A.ML)&&!(v instanceof A.MN)&&!(v instanceof A.MK)&&!w&&!(v instanceof A.MO)}}
A.a4Y.prototype={
gdM(){return this.a.b}}
A.a4Z.prototype={
gdM(){return this.a.b}}
A.a5_.prototype={
gdM(){return this.a.b}}
A.ML.prototype={}
A.MM.prototype={}
A.a52.prototype={
gdM(){return this.a.b}}
A.MO.prototype={}
A.MP.prototype={
gdM(){return this.a.b}}
A.a4X.prototype={
gdM(){return this.a.b}}
A.a4W.prototype={
gdM(){return this.a.b}}
A.MK.prototype={
gdM(){return this.a.b}}
A.a50.prototype={
gdM(){return this.a.gdM()}}
A.a51.prototype={
gdM(){return this.a.gdM()}}
A.MN.prototype={
gdM(){return this.a.gdM()}}
A.FV.prototype={
Z1(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afQ(){var w=this,v=null,u=w.aj=B.bwy(v,v)
u.ay=new A.aUe(w)
u.ch=new A.aUf(w)
u.CW=new A.aUg(w)
u.cy=new A.aUh(w)
u.cx=new A.aUi(w)
u=w.aE=B.GJ(v,-1,v)
u.v=new A.aUj(w)
u.a4=new A.aUk(w)
u.U=new A.aUl(w)
u=w.bx=B.a71(v,w.a3,v)
u.p3=new A.aUm(w)
u.p4=new A.aUn(w)
u.RG=new A.aUo(w)},
cC(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.I(w.b,w.d)},
dC(d){return new B.I(d.b,d.d)},
kG(d){return!0},
mY(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bx
w===$&&B.a()
w.oI(d)
w=v.aE
w===$&&B.a()
w.oI(d)
w=v.aj
w===$&&B.a()
w.oI(d)}else if(x.gJ.b(d))v.l6(new A.a51(d))},
gMW(d){return new A.aUp(this)},
gMY(d){return new A.aUq(this)},
l6(d){var w,v,u=this
if(u.U==null)return
w=d.gdM()
v=w!=null?u.a_4(w):null
u.U.$2(d,v)
u.a4=C.b6},
gKQ(d){return this.a4},
gFv(){var w=this.aq
w===$&&B.a()
return w},
aK(d){this.ft(d)
this.aq=!0},
aF(d){this.aq=!1
this.fj(0)},
$ijC:1}
A.O8.prototype={
W(){return new A.Vv(B.b([],x.r),B.y(x.S,x.J),new A.aJZ(B.y(x.y,x.dj)),null,null)}}
A.Vv.prototype={
u(d){var w,v=this,u=v.a4K(),t=v.CW
t.toString
t=v.abz(t.aw(0,v.gh6().gp(0)))
w=v.abz(u)
v.a.toString
return new A.Kw(new A.a6T(t,w,null),u,null)},
abz(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("ab<1,e7>")
w=B.Q(new B.ab(w,new A.beF(this,d),v),v.i("av.E"))
return d.aRF(w,this.cy)},
a4K(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UO(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRU(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRi(new A.EN(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazY(),t.c,t.d))}return r},
azZ(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagk())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.beD(v))
return}v.J(new A.beE(v,e))},
m1(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4K(),new A.beG(w)))}}
A.pL.prototype={
Xl(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a4T(B.a0O(d.a.b,j.b,f),j.a)
w=A.bDi(d.at,e.at,f)
v=A.bDl(d.c,e.c,f)
u=A.bDn(d.d,e.d,f)
t=A.bFl(d.e,e.e,f)
s=A.kB(d.ch,e.ch,f,A.c4Q(),x.cz)
s.toString
r=A.kB(d.CW,e.CW,f,A.c4P(),x.bO)
r.toString
u=A.bwa(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vq(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bwa(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRU(d,e,f,g){return this.Vq(null,null,d,e,f,g,null)},
aRi(d){var w=null
return this.Vq(w,d,w,w,w,w,w)},
aRF(d,e){var w=null
return this.Vq(d,w,w,w,w,w,e)},
gbF(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e7.prototype={
arL(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.p8(n.a,new A.aJY())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
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
adx(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aJX(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRp(d){return this.adx(d,null)},
aRr(d){return this.adx(null,d)},
gbF(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.O9.prototype={
gbF(){return[this.a]}}
A.a0v.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mA.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KB.prototype={
gbF(){return[!1,this.b,this.c,!0]}}
A.yu.prototype={
gbF(){return[this.a,this.b,this.c]}}
A.aJN.prototype={
K(){return"LabelDirection."+this.b}}
A.a4V.prototype={
gbF(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EN.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6U.prototype={
gbF(){return[4,C.hY,16,D.xE,0,120,A.c4S(),!1,!1,!1,0,C.J,A.c4R()]}}
A.n1.prototype={
gbF(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qg.prototype={}
A.ru.prototype={
gbF(){return[this.a,this.b,C.cZ,C.x,null]}}
A.tr.prototype={
gbF(){return[this.a,this.b]}}
A.Gl.prototype={
gbF(){return[this.a]}}
A.Oa.prototype={}
A.zc.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xl(v,w,d)}}
A.ah7.prototype={}
A.ah8.prototype={}
A.ahl.prototype={}
A.akn.prototype={}
A.akq.prototype={}
A.am1.prototype={}
A.am2.prototype={}
A.am3.prototype={}
A.am5.prototype={}
A.am6.prototype={}
A.am7.prototype={}
A.am8.prototype={}
A.aqz.prototype={}
A.ase.prototype={}
A.aJZ.prototype={
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yd
u=new A.zi(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zd(s,r,q,t,!0)}w=null
try{w=C.b.p8(d,new A.aK_())}catch(p){return D.yd}v=null
try{v=C.b.p8(w.a,new A.aK0())}catch(p){return D.yd}o=v.a
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
if(f<m)m=f}e=new A.zd(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zd.prototype={
gbF(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.am4.prototype={}
A.aK1.prototype={
i8(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gac1(0)){v=a3.b
u=v.a
v=v.b
$.ai()
a3.a.jn(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aW())
a3.aQj(new B.H(0,0,u,v))}d.a0b(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aT6(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aT2(a3,q,a4)
d.aT7(a3,q,a4)
d.amt(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gq(o)!==p.length)throw B.e(B.dX("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vk(q,i,j,k))}}d.aTe(a3,s,a4)
if(w.gac1(0))a3.a.c.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTc(a2,a3,v,f,new A.Gl(g),a4)}},
aT2(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvH(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.ZD(o,e,u,f)
s=p.ajV(o,e,t,u,f)
r=p.ZF(o,e,t,u,f,!0)
q=p.ajU(o,e,t,u,f)
p.aT5(d,s,p.ZC(o,e,t,u,f,!0),f,e)
p.aT_(d,q,r,f,e)
p.aT3(d,t,e)
p.aT1(d,t,e,f)}},
aT6(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bvH(a6.a),a9=A.bvH(a7.a)
if(a8.length!==a9.length)throw B.e(B.bx("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.c,v=b2.c,u=b2.d,t=$.bZ.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cA<1>")
k=B.Q(new B.cA(m,l),l.i("av.E"))
j=a3.ZD(a4,a6,n,b3)
i=a3.ZE(a4,a7.aRr(k),k,b3,j)
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
m=new B.mE(C.dd,C.bf,C.e6,C.ex,C.dT)
l=a5.b
if(l!=null)l.kj(m)
a2=m.jk()
m=B.et(new B.H(0,0,s,r))
l=$.bZ.b
if(l===$.bZ)B.Y(B.vi(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fL(i,a3.r)
w.restore()}},
aT7(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZJ(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.ff(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).aee(s,q,new B.r(p,o))}}},
aTe(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fV(b3,new A.aK4())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.ZJ(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.ff(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cr()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.Y(B.rt(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lv(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lv(q.$2(m,k))))
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
b0=B.l9(a3,a5)
if(a6!=null){f.r=C.E.gp(0)
f.sf_(a6.mN(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.sf_(null)}a4=a9.c
f.c=a4
if(a4===0){f.sf_(null)
a4=B.c0(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.DE(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.Y(B.rt(d.a))
f.aee(t,j,new B.r(h,g))}}},
ZE(d,e,f,g,h){var w=this.ajW(d,e,f,g,h)
return w},
ZD(d,e,f,g){return this.ZE(d,e,f,g,null)},
ajW(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.ai().r,C.ad,null,null,B.b([],x.v)):a5,f=J.Z(a3),e=f.gq(a3),d=i.ff(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.ap(new B.fh(d,a0))
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
s=new B.Lz(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iy(r)
g.rs()}return g},
ZF(d,e,f,g,h,i){var w=this,v=B.Mv(f),u=J.Z(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h),s=d.b
v.ap(new B.c8(t,s))
t=w.ff(u.h(g,0).a,d,h)
v.ap(new B.c8(t,s))
v.ap(new B.c8(w.ff(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nV())
return v},
ajV(d,e,f,g,h){return this.ZF(d,e,f,g,h,!1)},
ZC(d,e,f,g,h,i){var w=this,v=B.Mv(f),u=J.Z(g),t=w.ff(u.h(g,u.gq(g)-1).a,d,h)
v.ap(new B.c8(t,0))
t=w.ff(u.h(g,0).a,d,h)
v.ap(new B.c8(t,0))
v.ap(new B.c8(w.ff(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.ap(new B.nV())
return v},
ajU(d,e,f,g,h){return this.ZC(d,e,f,g,h,!1)},
aT5(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bwx(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fL(e,r.r)},
aT_(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bwx(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fL(e,r.r)},
aT3(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Mx(B.Mv(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kd:C.e6
u.e=C.ex
u.r=v.gp(0)
u.sf_(null)
u.c=f.x
u.r=v.gp(0)
$.lA()
u.y=new B.yi(C.aF,w.c*0.57735+0.5)
d.a.fL(A.aAl(e,f.cy).e3(w.b),this.f)},
aT1(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kd:C.e6
q.e=C.ex
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
A.bwx(t,f.r,f.w,new B.H(q,w,v,u))
t.y=null
t.c=f.x
A.bUQ(t)
d.a.fL(A.aAl(e,f.cy),s.f)},
aTc(b3,b4,b5,b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=b4.b,a9=B.b([],x.eg),b0=b7.a,b1=A.bJv(b0),b2=J.Z(b1)
if(b2.gq(b1)!==b0.length)throw B.e(B.dX("tooltipItems and touchedSpots size should be same"))
for(w=b8.c,v=0;v<b0.length;++v){u=b2.h(b1,v)
if(u==null)continue
t=$.lA().a_c(b3,u.b)
s=u.a
r=w.k(0,C.j_)?new B.ku(1):w
q=new B.to(new B.hS(s,a7,a7,C.b6,a7,a7,a7,a7,a7,a7,t),C.cZ,C.x,r,a7,a7,a7,a7,C.by,a7,C.dD)
q.agC(120)
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
i=a6.a_d(b2,l,D.xE,0)
b2=i+l
w=j+k
h=new B.aS(4,4)
g=B.FJ(new B.H(i,j,b2,w),h,h,h,h)
f=b0[0]
for(t=b0.length,n=0;n<t;++n){e=b0[n]
if(e.b>f.b)f=e}b0=a6.z
b0===$&&B.a()
t=A.bJu(f)
b0.r=t.gp(t)
t=b2-i
w-=j
b0=$.lA().Kp(new B.I(t,w),0).b
d=new B.r(0,b0)
a0=new B.r(g.a,g.b)
a1=$.lA().Kp(new B.I(t,w),0)
if(!C.J.k(0,C.J)){s=a6.Q
s===$&&B.a()
s.r=C.E.gp(0)
s.c=0}b4.W1(0,new A.aK2(a6,b4,g),a0,d,new B.I(t,w))
for(s=a9.length,r=i+t/2,a2=a1.b,b2-=16,a3=i+16,a4=8,n=0;n<a9.length;a9.length===s||(0,B.G)(a9),++n){q=a9[n]
switch(A.bXA(q.r,q.w).a){case 0:a5=a3
break
case 2:a5=b2-q.b.c
break
default:a5=r-q.b.c/2
break}b4.W1(0,new A.aK3(b4,q,new B.r(a5,j+a4-a2+b0)),a0,d,new B.I(t,w))
a5=q.b.a.c
a4=a4+a5.gbD(a5)+4}},
ZJ(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.ff(v[0].a,e,f)
return this.ff(v[v.length-1].a,e,f)-w},
WG(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akn(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fV(t,new A.aK5())
return t.length===0?null:t},
akn(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.ff(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hf(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qg(s,f,g,C.b.he(w,v),v.a,v.b)}else return null}}
A.vk.prototype={}
A.a6T.prototype={
bm(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcS(),t=new A.aK1()
t.a1j()
$.ai()
w=B.aW()
w.b=C.aY
t.f=w
w=B.aW()
w.b=C.bf
t.r=w
w=B.aW()
w.b=C.aY
t.w=w
w=B.aW()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a_M
t.x=w
w=B.aW()
w.b=C.aY
w.r=C.E.gp(0)
t.y=w
w=B.aW()
w.b=C.bf
w.r=C.y.gp(0)
t.z=w
w=B.aW()
w.b=C.aY
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.ab5(this.d,v,u,t,d,C.b6,new B.bq(),B.aL(x.g))
t.bl()
t.Z1(v.cx)
t.afQ()
return t},
bz(d,e){e.sih(0,this.d)
e.sYN(this.e)
e.scS(B.bu(d,null,x.w).w.gcS())
e.v=d
e.bb()}}
A.ab5.prototype={
sih(d,e){if(this.av.k(0,e))return
this.av=e
this.bb()},
sYN(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0U(d.cx)
w.bb()},
scS(d){if(this.cZ.k(0,d))return
this.cZ=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.c
J.bj(s.save())
s.translate(e.a,e.b)
w=u.v
v=u.gC(0)
u.h0.i8(w,new A.a10(t,v),new A.vA(u.av,u.i4,u.cZ,x.o))
s.restore()},
a_4(d){var w=this,v=w.gC(0)
return new A.Oa(w.h0.WG(d,v,new A.vA(w.av,w.i4,w.cZ,x.o)))}}
A.Nf.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a10.prototype={
aQj(d){this.a.c.clipRect(B.et(d),$.nH()[1],!0)
return null},
aem(d,e){d.aO(this.a,e)},
W1(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.c
J.bj(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lA()
s.YL(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DE(d,e,f,g){var w=new B.cl($.ai().r,C.ad,null,null,B.b([],x.v))
w.ap(new B.fh(d.a,d.b))
w.ap(new B.c8(e.a,e.b))
this.a.fL(A.aAl(w,g),f)}}
A.zi.prototype={
gbF(){return[this.a]}}
A.amf.prototype={}
A.a1a.prototype={}
A.b1v.prototype={
Kp(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aY9(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aS(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aS(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aS(v,v)
s=d.d
return new B.d4(w,u,t,s.a>v||s.b>v?new B.aS(v,v):s)},
aYa(d,e){var w,v
if(d==null)return D.a_X
w=d.b
v=e/2
return d.aRu(w>v?v:w)},
OB(d,e){var w,v=Math.max(C.e.cw(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0l(w)},
b0l(d){if(d<1)return this.aKc(d)
return this.a8A(d)},
aKc(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.e.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8A(d*q)/q},
a8A(d){var w,v=C.f.j(C.e.a1(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.e.aT(d)/10:d
if(w>=7.6)return 10*C.e.a1(Math.pow(10,v))
else if(w>=2.6)return 5*C.e.a1(Math.pow(10,v))
else if(w>=1.6)return 2*C.e.a1(Math.pow(10,v))
else return C.e.a1(Math.pow(10,v))},
akd(d){if(d>=1)return 1
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
a_c(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j5
w=e.a?u.w.bY(e):e
v=B.bM(d,C.vp)
v=v==null?null:v.ch
return v===!0?w.bY(C.mo):w},
ak3(d,e,f,g){var w=C.e.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qi)","z(ez)","~(u,fJ)","F(e7,u)","S<~>()","F(F,qi)","bR(F,tq)","pB(F)","u(qg,qg)","I7(o6)","HO(B,bE)","J5(o7)","vq(@)","wk(@)","e7(F)","CI(@)","ah(F,tq)","uM(dz<uM>)","E8(dz<aEF>)","F(vq)","F(wk)","wF(B,bE)","Bd(A)","~()","qi(@)","~(hp,KD?)","xD(@)","F(ip)","z(fJ)","~(u,ip)","~(@)","jY(nQ)","c(nQ)","jY(bD<u,F>)","jY(F)","nQ(jY)","~(hp,Oa?)","e7(e7)","lK(Gx<lK>)","zc(@)","S<o7>(ck<o7>)","tr(u)","uN(ez,F,e7,u)","ru(n1)","z(e7)","u(vk,vk)","F(fJ)","S<o6>(ck<o6>)","u(u,u,F)","fJ(fJ,fJ,F)","ip(ip,ip,F)","mz(mz,mz,F)","D0?(fJ,u,ip,u)","D(fJ)","c(F,tq)","ez(ez,ez,F)","z(F)","mV(mV,mV,F)","nm(nm,nm,F)","kW(kW,kW,F)","lh(lh,lh,F)","f(kW)","f(lh)","e7(e7,e7,F)","mA(mA,mA,F)","uN(ez,F,e7,u{size:F?})","z(ez,e7)","F(r,r)","v<tr>(e7,v<u>)","y5(A)","v<ru>(v<n1>)","D(n1)","ys(f2<B?>)"])
A.aEB.prototype={
$1(d){var w=B.di(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qi(J.an(v==null?"":v),A.p_(w.h(0,"revenue_net")),A.p_(w.h(0,"expense_net")),A.p_(w.h(0,"result_net")))},
$S:z+24}
A.aEC.prototype={
$1(d){var w,v,u,t=B.di(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.an(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.p_(t.h(0,"gross"))
u=B.b_(t.h(0,"purchases_count"))
u=u==null?null:C.e.a1(u)
if(u==null)u=0
return new A.vq(s,r,w,v,u,A.p_(t.h(0,"avg_basket")))},
$S:z+12}
A.aED.prototype={
$1(d){var w,v=B.di(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.an(t==null?"unbekannt":t)
w=B.b_(v.h(0,"quantity"))
w=w==null?null:C.e.a1(w)
if(w==null)w=0
return new A.wk(u,t,w,A.p_(v.h(0,"gross")))},
$S:z+13}
A.aEU.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.an(v==null?"":v)
u=w.h(d,"name")
u=J.an(u==null?"":u)
t=w.h(d,"direction")
return new A.CI(v,u,J.an(t==null?"expense":t),A.u3(w.h(d,"net")),A.u3(w.h(d,"tax")),A.u3(w.h(d,"gross")))},
$S:z+15}
A.brG.prototype={
$1(d){return new A.uM(d.ao($.c_(),x.A))},
$S:z+17}
A.brH.prototype={
$1(d){return new A.E8(d.ao($.bOo(),x.D))},
$S:z+18}
A.btw.prototype={
$1(d){return E.aEE()},
$S:z+38}
A.brI.prototype={
$1(d){var w=d.ao($.xp(),x.P)
return d.ao($.avl(),x.a).FV(w)},
$S:z+40}
A.brF.prototype={
$1(d){var w=d.ao($.xp(),x.P)
return d.ao($.avl(),x.a).FQ(w)},
$S:z+47}
A.brE.prototype={
$1(d){return this.ajK(d)},
ajK(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ao($.c_(),x.A).hl("finance_balance_kpis",t),$async$$1)
case 3:s=r.di(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:245}
A.aEA.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.avl(),x.a).pP(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEz.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.avl(),x.a).Lq(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aES.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bur()
if(s.e==null)B.Y(B.W(y.b))
s.gcz().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEK.prototype={
$0(){return this.a.Jn(this.b,this.c)},
$S:0}
A.aEL.prototype={
$0(){return this.a.Bm(this.b,this.c)},
$S:0}
A.aEM.prototype={
$0(){var w=x.z
return B.bm(this.a,!1).eL(B.eU(new A.aEJ(),null,w),w)},
$S:0}
A.aEJ.prototype={
$1(d){return F.D3},
$S:z+69}
A.aEN.prototype={
$0(){return B.oc(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEO.prototype={
$0(){var w=this
return w.a.Bn(w.b,w.c,w.d)},
$S:0}
A.aER.prototype={
$0(){return D.ats},
$S:135}
A.aEQ.prototype={
$2(d,e){return new A.HO(B.i(d),null)},
$S:z+10}
A.aEP.prototype={
$1(d){return new A.J5(d,null)},
$S:z+11}
A.aEI.prototype={
$1(d){var w=null,v=this.a,u=$.dN()
v=B.l("Die Finanzauswertung f\xfcr "+u.ar(v.a)+" \u2013 "+u.ar(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.mw(B.b([B.dK(C.d9,w,w,new A.aEG(u),w,w),B.dR(F.v1,new A.aEH(u),B.dH(C.m,C.C,w,w,w,w,w))],x.p),w,v,F.v2)},
$S:54}
A.aEG.prototype={
$0(){B.bm(this.a,!1).dn(!1)
return null},
$S:0}
A.aEH.prototype={
$0(){B.bm(this.a,!1).dn(!0)
return null},
$S:0}
A.bh0.prototype={
$0(){var w=this.a.aI(0,$.xp().ghR(),x.V),v=E.aEE()
w.wK(0,v)
return v},
$S:0}
A.bh1.prototype={
$0(){var w=this.a.aI(0,$.xp().ghR(),x.V),v=new B.b8(Date.now(),0,!1),u=new E.lK(B.bO(B.aX(v),1,1,0,0,0,0),v)
w.wK(0,u)
return u},
$S:0}
A.bh2.prototype={
$0(){return this.a.IK(this.b,this.c)},
$S:0}
A.bh_.prototype={
$2(d,e){return new B.oH(B.U(d).aQQ(B.U(d).ax.aRK(C.k,C.m)),e,null)},
$S:1012}
A.bmP.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dw(),s=A.NX(!1,C.nZ,"Umsatz 7 %",t.ar(u.a),w),r=A.NX(!1,C.nZ,"Umsatz 19 %",t.ar(u.b),w),q=A.NX(!0,D.a9U,"Umsatz netto",t.ar(u.c),w),p=A.NX(!1,D.a9T,"Aufwand",t.ar(u.d),w),o=u.e,n=t.ar(o)
return B.a5B(1.7,B.b([s,r,q,p,A.NX(!0,C.xT,"Ergebnis",n,o<0?C.ax:C.aD),A.NX(!1,C.fR,"USt-Saldo",t.ar(u.f-u.r),w)],x.p),v,12,12,C.jV,!0)},
$S:107}
A.aJM.prototype={
$0(){return D.atq},
$S:135}
A.aJL.prototype={
$2(d,e){var w=null
return B.bA(C.ax,B.l("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.E(C.k,13,C.n),w,w,w),C.eH,w,C.F,w,3)},
$S:295}
A.aJK.prototype={
$1(d){return new A.I7(d,null)},
$S:z+9}
A.ber.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dw(),i=j.ar(k.c),h=l.w,g=l.d,f=B.ad(g).i("ab<1,F>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.beg(),f),e)
i=A.jR(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ar(r.b)
w=B.Q(new B.ab(g,new A.beh(),f),e)
d=A.jR(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ar(k.e)
w=B.Q(new B.ab(g,new A.bei(),f),e)
k=A.jR(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.e.ak(h.b,1)
v=B.Q(new B.ab(g,new A.bej(),f),e)
w=A.jR(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.e.ak(h.a,1)
u=B.Q(new B.ab(g,new A.bek(),f),e)
v=A.jR(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.e.ak(r.c,1)
t=B.Q(new B.ab(g,new A.bel(),f),e)
u=A.jR(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.e.ak(h.c,1)
s=B.Q(new B.ab(g,new A.bem(),f),e)
t=A.jR(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ar(h.d)
s=B.Q(new B.ab(g,new A.ben(),f),e)
h=A.jR(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ar(l.r.d)
m=B.Q(new B.ab(g,new A.beo(m),f),e)
m=A.jR(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ar(l)
l=B.Q(new B.ab(g,new A.bep(l),f),e)
l=A.jR(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.e.ak(j,1)
j=B.Q(new B.ab(g,new A.beq(j),f),e)
return B.a5B(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jR(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jV,!0)},
$S:107}
A.beg.prototype={
$1(d){return d.b},
$S:z+0}
A.beh.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bei.prototype={
$1(d){return d.d},
$S:z+0}
A.bej.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bek.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bel.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bem.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.ben.prototype={
$1(d){return d.d},
$S:z+0}
A.beo.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bep.prototype={
$1(d){return this.a},
$S:z+0}
A.beq.prototype={
$1(d){return this.a},
$S:z+0}
A.bes.prototype={
$0(){return A.byv(this.b,1.45,new A.TB(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bet.prototype={
$0(){return A.byv(this.b,1.6,new A.TJ(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqP.prototype={
$1(d){var w=this,v=null,u=B.aP(16),t=x.p,s=B.b([B.ap(B.b([B.aC(B.l(w.a,v,v,v,B.c2(C.k,18,C.r),v,v,v),1),B.fP(v,v,D.acz,v,v,new A.bqO(d),v,v,v,"Schlie\xdfen",v)],t),C.l,v,C.h,C.i,0,v,v)],t)
C.b.L(s,B.b([B.l(w.b,v,v,v,B.E(C.u,12,C.aJ),v,v,v),C.V],t))
s.push(C.w)
s.push(B.cf(new B.my(w.c,w.d,v),v,17976931348623157e292))
return B.a44(v,C.C,new B.af(C.aj,B.ae(s,C.D,v,C.h,C.O),v),v,v,v,C.fO,C.uJ,v,new B.da(u,C.J),v)},
$S:1013}
A.bqO.prototype={
$0(){return B.bm(this.a,!1).fc()},
$S:0}
A.beu.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byv(this.b,2.4,new A.XQ(w.w,w.y,w.z,null),C.b.cg(u," \xb7 "),v)
return null},
$S:0}
A.bmn.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bmo.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmp.prototype={
$1(d){return A.aJX(null,1.4,null,C.ax,0.35,D.agp,D.DV,null,!1,!1,!1,!1,D.Fd,!1,10,D.Y9,!0,C.lw,B.b([new A.ez(0,d),new A.ez(this.a,d)],x.U))},
$S:z+14}
A.b5e.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5g.prototype={
$2(d,e){var w=null
return B.l(this.a.aLy(d),w,w,w,B.E(C.u,10,C.Q),w,w,w)},
$S:z+16}
A.b5h.prototype={
$2(d,e){var w=null,v=C.e.a1(d)
if(v<0||v>=this.a.length)return C.A5
return new B.af(C.hX,B.l(C.d.cP(this.a[v].a,5),w,w,w,B.E(C.u,9,C.Q),w,w,w),w)},
$S:z+6}
A.b5f.prototype={
$1(d){return D.a8r},
$S:z+7}
A.b6_.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b60.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b61.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b62.prototype={
$2(d,e){var w=null,v=C.e.a1(d)
if(v<0||v>=3)return C.A5
return new B.af(C.hX,B.l(this.a[v],w,w,w,B.E(C.k,12,C.r),w,w,w),w)},
$S:z+6}
A.beZ.prototype={
$1(d){return d.d},
$S:z+19}
A.bf_.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bo6.prototype={
$1(d){return d.d},
$S:z+20}
A.bo7.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b3J.prototype={
$0(){return D.aty},
$S:135}
A.b3I.prototype={
$2(d,e){return new A.wF("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b3H.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bA(m,B.ae(B.b([B.l("Noch keine Bilanzdaten erfasst.",m,m,m,B.E(C.k,14,C.Q),m,m,m),C.V,B.l("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.E(C.u,12.5,C.n),m,m,m),C.w,B.mm(C.cH,B.b([B.i6(C.EO,D.aHi,new A.b3B(w,v),m),B.i6(D.abD,D.aGb,new A.b3C(w,v),m)],u),C.ec,8,8)],u),C.D,m,C.h,C.i),C.ag,m,C.F,m,3)}w=new A.b3K(d)
t=C.b.fO(n.a.e.d,0,new A.b3D())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iX(new A.b3E(new A.b3L(w),r,w,s))
v=J.Z(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ae(B.b([w,C.V,B.ap(B.b([B.aC(B.l("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.E(C.u,11,C.n),m,m,m),1),B.oF(D.acN,D.aGx,new A.b3F(q,p),m),B.oF(D.aco,D.aGk,new A.b3G(q,p,d),m)],o),C.l,m,C.h,C.i,0,m,m)],o),C.ac,m,C.h,C.i)},
$S:281}
A.b3B.prototype={
$0(){return A.auK(this.a,this.b,null)},
$S:0}
A.b3C.prototype={
$0(){return A.auH(this.a,this.b)},
$S:0}
A.b3K.prototype={
$1(d){var w=B.b_(J.a3(this.a,d))
return w==null?null:w},
$S:1014}
A.b3L.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.e.ak(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:34}
A.b3D.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b3E.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jR(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i9,o.$1("liquidity1_pct")),m=A.jR(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i9,o.$1("liquidity2_pct")),l=A.jR(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i9,o.$1("liquidity3_pct"))
o=A.jR(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i9,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.e.ak(w,1)
w=B.b0(w,".",",")+" %"}w=A.jR(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i9,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dw()
v=u.ar(v)
return B.a5B(p,B.b([n,m,l,o,w,A.jR(s,s,!1,"Bilanzsumme",!1,"EK "+u.ar(t.d),s,s,s,C.i9,v)],x.p),q,12,12,C.jV,!0)},
$S:107}
A.b3F.prototype={
$0(){return A.auH(this.a,this.b)},
$S:0}
A.b3G.prototype={
$0(){return A.auK(this.a,this.b,this.c)},
$S:0}
A.bqN.prototype={
$1(d){return new A.Bd(this.a,new A.bqM(this.b),this.c,null)},
$S:z+22}
A.bqM.prototype={
$0(){var w=this.a,v=$.buq()
if(w.e==null)B.Y(B.W(y.b))
w.gcz().cs(v)},
$S:0}
A.b3v.prototype={
$0(){},
$S:0}
A.b3w.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3x.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3z.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u8(u.b,B.bO(2024,1,1,0,0,0,0),null,r,new B.b8(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3y(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3y.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3A.prototype={
$0(){return B.bm(this.a,!1).fc()},
$S:0}
A.b3M.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3N.prototype={
$1(d){return new A.xD(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axk.prototype={
$1(d){return d.e},
$S:z+27}
A.axl.prototype={
$2(d,e){return d+e},
$S:45}
A.axn.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axp.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gd4(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axq.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.ei(t,r)
s=s.x
s===$&&B.a()
w.ei(t,s)
u.aem(v.d,v.e)},
$S:0}
A.ax1.prototype={
$1(d){return 0},
$S:1015}
A.ax0.prototype={
$2(d,e){return B.fo(C.bZ,this.a.am9(e),C.p,C.bx,null)},
$S:1016}
A.aZ3.prototype={
$1(d){return d.a},
$S:z+31}
A.aZ4.prototype={
$1(d){return d.b},
$S:z+32}
A.aZ5.prototype={
$1(d){return new A.jY(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZ6.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mF||v===D.dM))t=1-t
return new A.jY(d,t*w.d)},
$S:z+34}
A.aZ7.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goL(),p=d.a
r.goL()
r=$.lA()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.e.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.e.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.e.ak(v/1000,1)
t="K"}else{u=C.e.ak(v,r.akd(Math.abs(s.b-s.c)))
t=""}if(C.d.hu(u,".0"))u=C.d.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nQ(d,q.c.b.$2(p,new A.tq(u+t,s.e)))},
$S:z+35}
A.aUe.prototype={
$1(d){this.a.l6(new A.a4Y(d))},
$S:174}
A.aUf.prototype={
$1(d){this.a.l6(new A.a4Z(d))},
$S:42}
A.aUg.prototype={
$1(d){this.a.l6(new A.a5_(d))},
$S:27}
A.aUh.prototype={
$0(){this.a.l6(D.a1s)},
$S:0}
A.aUi.prototype={
$1(d){this.a.l6(new A.MM())},
$S:46}
A.aUj.prototype={
$1(d){this.a.l6(new A.a52(d))},
$S:44}
A.aUk.prototype={
$0(){this.a.l6(D.a1t)},
$S:0}
A.aUl.prototype={
$1(d){this.a.l6(new A.MP(d))},
$S:95}
A.aUm.prototype={
$1(d){this.a.l6(new A.a4X(d))},
$S:173}
A.aUn.prototype={
$1(d){this.a.l6(new A.a4W(d))},
$S:172}
A.aUo.prototype={
$1(d){return this.a.l6(new A.MK(d))},
$S:171}
A.aUp.prototype={
$1(d){return this.a.l6(new A.a50(d))},
$S:60}
A.aUq.prototype={
$1(d){return this.a.l6(new A.MN(d))},
$S:58}
A.beF.prototype={
$1(d){var w=this.a.db.h(0,C.b.he(this.b.ch,d))
return d.aRp(w==null?B.b([],x.t):w)},
$S:z+37}
A.beD.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.beE.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fV(w,new A.beC())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gl(w))},
$S:0}
A.beC.prototype={
$2(d,e){return C.e.cA(e.b,d.b)},
$S:z+8}
A.beG.prototype={
$1(d){return new A.zc(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aJY.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.brv.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bDm(t?A.byg(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tr(w,new A.yu(!0,A.bz6(),new A.bru(v)))},
$S:z+41}
A.bru.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bSn(A.byg(d,e,f),w,A.c0l(d,e,f))},
$S:z+42}
A.brs.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.Q,v,v,!0,v,v,v,v,v,v,v,v)
return new A.ru(C.e.j(d.b),w)},
$S:z+43}
A.aK_.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aK0.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aK4.prototype={
$2(d,e){return C.e.cA(e.c.b,d.c.b)},
$S:z+45}
A.aK2.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.ei(v,t)
u=u.Q
u===$&&B.a()
w.ei(v,u)},
$S:0}
A.aK3.prototype={
$0(){this.a.aem(this.b,this.c)},
$S:0}
A.aK5.prototype={
$2(d,e){return C.e.cA(d.w,e.w)},
$S:z+8}
A.axd.prototype={
$1(d){return d.gd4(0)},
$S:z+46}
A.axe.prototype={
$2(d,e){return d+e},
$S:45}
A.axh.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iZ(v,B.ad(v).i("iZ<1>")).aB(0,new A.axi(w,this.a/(u+1),this.c))},
$S:0}
A.axi.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gd4(0)/2
this.c[d]=v
w.a=v+e.gd4(0)/2},
$S:z+2}
A.axf.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gd4(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gd4(0)/2},
$S:z+2}
A.axg.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gd4(0)/2
this.c[d]=u
u+=e.gd4(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aH6.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1017}
A.aAm.prototype={
$1(d){return d},
$S:1018};(function aliases(){var w=A.Kv.prototype
w.a0b=w.i8
w.amt=w.aT8
w.amu=w.aef
w=A.Tb.prototype
w.ap8=w.l
w=A.KG.prototype
w.a0c=w.i8
w=A.FV.prototype
w.a0U=w.Z1})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c3X","bSj",72)
var q
v(q=A.Td.prototype,"gaFm","aFn",23)
v(q,"gaEi","HZ",4)
v(q,"gaF5","Ia",4)
u(A.Te.prototype,"gat5","at6",25)
t(A,"c2N",3,null,["$3"],["bPz"],49,0)
t(A,"c2O",3,null,["$3"],["bPA"],50,0)
t(A,"c2P",3,null,["$3"],["bPB"],51,0)
t(A,"c2R",4,null,["$4"],["c3A"],52,0)
w(A,"c2Q","c3z",53)
s(A,"byA","c3B",54)
t(A,"c2I",3,null,["$3"],["bSo"],55,0)
w(A,"ZY","c5Y",56)
w(A,"auM","c3E",7)
t(A,"c2K",3,null,["$3"],["bTa"],57,0)
t(A,"c2M",3,null,["$3"],["bYt"],58,0)
t(A,"c2J",3,null,["$3"],["bT9"],59,0)
t(A,"c2L",3,null,["$3"],["bYs"],60,0)
w(A,"cdw","bT8",61)
w(A,"cdx","bYr",62)
r(A.XF.prototype,"ga4I","ayF",30)
u(A.Vv.prototype,"gazY","azZ",36)
t(A,"c4Q",3,null,["$3"],["bTD"],63,0)
t(A,"c4P",3,null,["$3"],["bPC"],64,0)
w(A,"c4T","c5Z",1)
t(A,"bJV",4,null,["$5$size","$4"],["bIm",function(d,e,f,g){return A.bIm(d,e,f,g,null)}],65,0)
s(A,"bz6","c5X",66)
s(A,"bJW","c2v",67)
s(A,"bJZ","c3H",68)
s(A,"bJY","c3D",3)
s(A,"bJX","c3C",3)
w(A,"c4S","bJv",70)
w(A,"c4R","bJu",71)
t(A,"a_2",3,null,["$3"],["c4O"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.X,[A.a6F,A.agf,A.aln,A.IF,A.J5,A.agd,A.HO,A.I7,A.akI,A.alV,A.Uk,A.XQ,A.TB,A.TJ,A.amo,A.aiO,A.Ca,A.asb,A.wF,A.Kw,A.AK])
u(B.B,[A.uM,A.E8,A.bd,A.ahk,A.aha,A.ahc,A.ahd,A.ah2,A.akt,A.ahg,A.ahe,A.axz,A.asf,A.axm,A.ahb,A.KG,A.a5C,A.tq,A.aqB,A.aqA,A.ah1,A.aks,A.ez,A.akp,A.akr,A.aoF,A.ale,A.asV,A.akq,A.ak8,A.ako,A.ax_,A.beA,A.ax2,A.agZ,A.nQ,A.akl,A.akm,A.vA,A.hp,A.am2,A.am5,A.ah7,A.ahl,A.ah8,A.akn,A.am8,A.am6,A.ase,A.aqz,A.aJZ,A.am4,A.vk,A.a10,A.amf,A.a1a,A.b1v])
u(B.uJ,[A.qi,A.vq,A.wk,A.azN,A.aAT,A.o6,A.CI,A.o7])
u(B.nW,[A.aEB,A.aEC,A.aED,A.aEU,A.brG,A.brH,A.btw,A.brI,A.brF,A.brE,A.aEJ,A.aEP,A.aEI,A.aJK,A.beg,A.beh,A.bei,A.bej,A.bek,A.bel,A.bem,A.ben,A.beo,A.bep,A.beq,A.bqP,A.bmp,A.b5f,A.b6_,A.b60,A.beZ,A.bo6,A.b3H,A.b3K,A.b3L,A.bqN,A.b3N,A.axk,A.axn,A.ax1,A.aZ3,A.aZ4,A.aZ5,A.aZ6,A.aZ7,A.aUe,A.aUf,A.aUg,A.aUi,A.aUj,A.aUl,A.aUm,A.aUn,A.aUo,A.aUp,A.aUq,A.beF,A.beG,A.aJY,A.brv,A.bru,A.brs,A.aK_,A.aK0,A.axd,A.aAm])
t(A.ys,B.fC)
u(B.xU,[A.aEA,A.aEz,A.aES,A.aEK,A.aEL,A.aEM,A.aEN,A.aEO,A.aER,A.aEG,A.aEH,A.bh0,A.bh1,A.bh2,A.aJM,A.bes,A.bet,A.bqO,A.beu,A.b3J,A.b3B,A.b3C,A.b3F,A.b3G,A.bqM,A.b3v,A.b3w,A.b3x,A.b3z,A.b3y,A.b3A,A.b3M,A.axq,A.aUh,A.aUk,A.beD,A.beE,A.aK2,A.aK3,A.axh])
u(B.y1,[A.yt,A.anz,A.a6G,A.ah6])
u(B.xV,[A.aEQ,A.bh_,A.bmP,A.aJL,A.ber,A.bmn,A.bmo,A.b5e,A.b5g,A.b5h,A.b61,A.b62,A.bf_,A.bo7,A.b3I,A.b3D,A.b3E,A.axl,A.axp,A.ax0,A.beC,A.aK4,A.aK5,A.axe,A.axi,A.axf,A.axg,A.aH6])
u(B.N,[A.Bd,A.Rf])
u(B.a0,[A.Td,A.XF])
u(B.Nt,[A.KC,A.O8])
u(B.uh,[A.Te,A.Vv])
t(A.a0C,A.ahk)
t(A.agY,A.a0C)
t(A.a0k,A.agY)
u(A.a0k,[A.ah9,A.am3])
t(A.nR,A.ah9)
u(B.HN,[A.axb,A.adK,A.CZ,A.aDT,A.aJN,A.Nf])
t(A.fJ,A.aha)
t(A.ip,A.ahc)
t(A.mz,A.ahd)
t(A.a0t,A.ah2)
t(A.MQ,A.akt)
u(A.MQ,[A.ahf,A.am7])
t(A.a0y,A.ahf)
t(A.a0z,A.ahg)
t(A.D0,A.ahe)
u(A.axz,[A.KD,A.Oa])
t(A.adM,A.asf)
t(A.ahh,A.adM)
t(A.a0A,A.ahh)
u(B.b5,[A.xD,A.zc])
t(A.un,A.ahb)
t(A.Kv,A.KG)
u(A.Kv,[A.axo,A.aK1])
u(B.O4,[A.a0w,A.a6T])
u(B.J,[A.FV,A.ah_])
u(A.FV,[A.aaT,A.ab5])
t(A.q6,A.aqB)
t(A.aci,A.aqA)
t(A.pb,A.ah1)
t(A.uO,A.aks)
t(A.yv,A.akp)
t(A.pB,A.akr)
t(A.PM,A.aoF)
t(A.mV,A.ale)
t(A.nm,A.asV)
u(A.pB,[A.ald,A.asU])
t(A.kW,A.ald)
t(A.lh,A.asU)
t(A.a4V,A.akq)
u(A.a4V,[A.alc,A.asT])
t(A.a5N,A.alc)
t(A.ae8,A.asT)
t(A.MC,A.ak8)
t(A.uN,A.ako)
t(A.MJ,A.uN)
t(A.acj,B.h9)
t(A.ah0,A.ah_)
t(A.Tb,A.ah0)
t(A.a0l,A.Tb)
t(A.jY,A.agZ)
t(A.a4S,A.akl)
t(A.a4U,A.akm)
u(A.hp,[A.a4Y,A.a4Z,A.a5_,A.ML,A.MM,A.a52,A.MO,A.MP,A.a4X,A.a4W,A.MK,A.a50,A.a51,A.MN])
t(A.pL,A.am3)
t(A.e7,A.am2)
t(A.O9,A.am5)
t(A.a0v,A.ah7)
t(A.mA,A.ahl)
t(A.KB,A.ah8)
t(A.yu,A.akn)
t(A.EN,A.am7)
t(A.a6U,A.am8)
t(A.am1,A.ez)
t(A.n1,A.am1)
t(A.qg,A.n1)
t(A.ru,A.am6)
t(A.tr,A.ase)
t(A.Gl,A.aqz)
t(A.zd,A.am4)
t(A.zi,A.amf)
w(A.ah2,A.bd)
w(A.ah9,A.bd)
w(A.aha,A.bd)
w(A.ahc,A.bd)
w(A.ahd,A.bd)
w(A.ahe,A.bd)
w(A.ahf,A.bd)
w(A.ahg,A.bd)
w(A.ahh,A.bd)
w(A.ahb,A.bd)
w(A.agY,A.bd)
w(A.ah1,A.bd)
w(A.ak8,A.bd)
w(A.ako,A.bd)
w(A.akp,A.bd)
w(A.akr,A.bd)
w(A.aks,A.bd)
w(A.ald,A.bd)
w(A.alc,A.bd)
w(A.ale,A.bd)
w(A.aoF,A.bd)
w(A.aqA,A.bd)
w(A.aqB,A.bd)
w(A.asf,A.bd)
w(A.asU,A.bd)
w(A.asT,A.bd)
w(A.asV,A.bd)
w(A.agZ,A.bd)
v(A.ah_,B.aA)
w(A.ah0,B.e3)
v(A.Tb,B.a3N)
w(A.ahk,A.bd)
w(A.akl,A.bd)
w(A.akm,A.bd)
w(A.akt,A.bd)
w(A.ah7,A.bd)
w(A.ah8,A.bd)
w(A.ahl,A.bd)
w(A.akn,A.bd)
w(A.akq,A.bd)
w(A.am1,A.bd)
w(A.am2,A.bd)
w(A.am3,A.bd)
w(A.am5,A.bd)
w(A.am6,A.bd)
w(A.am7,A.bd)
w(A.am8,A.bd)
w(A.aqz,A.bd)
w(A.ase,A.bd)
w(A.am4,A.bd)
w(A.amf,A.bd)})()
B.bok(b.typeUniverse,JSON.parse('{"a6F":{"X":[],"c":[]},"E8":{"aEF":[]},"ys":{"fC":["ba<~>"],"fC.T":"ba<~>"},"J5":{"X":[],"c":[]},"HO":{"X":[],"c":[]},"yt":{"bh":[],"N":[],"c":[]},"agf":{"X":[],"c":[]},"aln":{"X":[],"c":[]},"anz":{"bh":[],"N":[],"c":[]},"IF":{"X":[],"c":[]},"agd":{"X":[],"c":[]},"I7":{"X":[],"c":[]},"wF":{"X":[],"c":[]},"Bd":{"N":[],"c":[]},"a6G":{"bh":[],"N":[],"c":[]},"akI":{"X":[],"c":[]},"alV":{"X":[],"c":[]},"Uk":{"X":[],"c":[]},"XQ":{"X":[],"c":[]},"TB":{"X":[],"c":[]},"TJ":{"X":[],"c":[]},"amo":{"X":[],"c":[]},"aiO":{"X":[],"c":[]},"Ca":{"X":[],"c":[]},"asb":{"X":[],"c":[]},"ah6":{"bh":[],"N":[],"c":[]},"Td":{"a0":["Bd"]},"KC":{"N":[],"c":[]},"Te":{"a0":["KC"]},"nR":{"bd":[]},"fJ":{"bd":[]},"ip":{"bd":[]},"mz":{"bd":[]},"D0":{"bd":[]},"xD":{"b5":["nR"],"b3":["nR"],"b3.T":"nR","b5.T":"nR"},"a0t":{"bd":[]},"a0y":{"bd":[]},"a0z":{"bd":[]},"a0A":{"bd":[]},"un":{"bd":[]},"a0w":{"aV":[],"c":[]},"aaT":{"J":[],"K":[],"jC":[],"aR":[]},"pB":{"bd":[]},"mV":{"bd":[]},"nm":{"bd":[]},"kW":{"bd":[]},"lh":{"bd":[]},"uN":{"bd":[]},"a0k":{"bd":[]},"q6":{"bd":[]},"aci":{"bd":[]},"pb":{"bd":[]},"uO":{"bd":[]},"yv":{"bd":[]},"adM":{"bd":[]},"PM":{"bd":[]},"a5N":{"bd":[]},"ae8":{"bd":[]},"MC":{"bd":[]},"MJ":{"bd":[]},"Kw":{"X":[],"c":[]},"Rf":{"N":[],"c":[]},"XF":{"a0":["Rf"]},"jY":{"bd":[]},"acj":{"h9":[],"aV":[],"c":[]},"a0l":{"e3":["J","hq"],"J":[],"aA":["J","hq"],"K":[],"aR":[],"aA.1":"hq","e3.1":"hq","aA.0":"J"},"AK":{"X":[],"c":[]},"a0C":{"bd":[]},"a4S":{"bd":[]},"MQ":{"bd":[]},"a4U":{"bd":[]},"a4Y":{"hp":[]},"a4Z":{"hp":[]},"a5_":{"hp":[]},"ML":{"hp":[]},"MM":{"hp":[]},"a52":{"hp":[]},"MO":{"hp":[]},"MP":{"hp":[]},"a4X":{"hp":[]},"a4W":{"hp":[]},"MK":{"hp":[]},"a50":{"hp":[]},"a51":{"hp":[]},"MN":{"hp":[]},"FV":{"J":[],"K":[],"jC":[],"aR":[]},"O8":{"N":[],"c":[]},"Vv":{"a0":["O8"]},"pL":{"bd":[]},"e7":{"bd":[]},"mA":{"bd":[]},"n1":{"ez":[],"bd":[]},"qg":{"n1":[],"ez":[],"bd":[]},"ru":{"bd":[]},"tr":{"bd":[]},"Gl":{"bd":[]},"zc":{"b5":["pL"],"b3":["pL"],"b3.T":"pL","b5.T":"pL"},"O9":{"bd":[]},"a0v":{"bd":[]},"KB":{"bd":[]},"yu":{"bd":[]},"a4V":{"bd":[]},"EN":{"bd":[]},"a6U":{"bd":[]},"zd":{"bd":[]},"a6T":{"aV":[],"c":[]},"ab5":{"J":[],"K":[],"jC":[],"aR":[]},"zi":{"bd":[]}}'))
B.bHP(b.typeUniverse,JSON.parse('{"Kv":1,"MQ":1,"KG":1,"FV":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.ar
return{_:w("CI"),e:w("ba<o6>"),aN:w("ba<o7>"),fM:w("ba<a2<f,@>?>"),b:w("ba<~>"),W:w("jY"),B:w("nR"),dB:w("fJ"),gF:w("un"),fj:w("ip"),G:w("mz"),bO:w("mA"),k:w("at"),C:w("a1a<F>"),dO:w("uv"),R:w("a4<f,@>"),g:w("hH"),bz:w("lG<b8>"),f0:w("o0"),E:w("bd"),F:w("ys"),X:w("o6"),P:w("lK"),D:w("uM"),a:w("aEF"),d:w("o7"),cw:w("ez"),L:w("hq"),m:w("d6<u,D>"),cm:w("kW"),dv:w("mV"),M:w("C<nQ>"),I:w("C<bBZ>"),O:w("C<fJ>"),Y:w("C<ip>"),U:w("C<ez>"),K:w("C<a5C>"),u:w("C<e7>"),bC:w("C<vk>"),aA:w("C<v<ez>>"),v:w("C<e9>"),r:w("C<Gl>"),s:w("C<f>"),eg:w("C<to>"),df:w("C<qg>"),p:w("C<c>"),n:w("C<F>"),t:w("C<u>"),eF:w("be<a0<N>>"),Z:w("n1"),cz:w("e7"),hf:w("pL"),dj:w("zd"),fT:w("ru"),c_:w("ir<oU<ba<~>>>"),x:w("zi<fJ>"),y:w("zi<e7>"),J:w("v<u>"),ef:w("vq"),c:w("a2<f,@>"),f:w("a2<@,@>"),gj:w("ab<F,F>"),w:w("k9"),aU:w("B"),Q:w("vA<nR>"),o:w("vA<pL>"),dc:w("e9"),eo:w("pX"),gJ:w("pY"),V:w("ng<lK>"),N:w("f"),A:w("nh"),bP:w("bH"),er:w("to"),j:w("wk"),dw:w("qg"),bY:w("tr"),cZ:w("qi"),gc:w("ih"),es:w("lh"),bN:w("nm"),l:w("c"),q:w("wY"),g4:w("ii<F>"),cJ:w("z"),i:w("F"),z:w("@"),S:w("u"),bn:w("xD?"),f3:w("zc?"),T:w("v<@>?"),h:w("a2<f,@>?"),fF:w("a2<@,@>?"),cK:w("B?"),aD:w("ih?"),h6:w("u?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B_=new B.p5(C.m,B.ar("p5<D>"))
D.B7=new A.CZ(0,"left")
D.mF=new A.CZ(1,"top")
D.B8=new A.CZ(2,"right")
D.dM=new A.CZ(3,"bottom")
D.axH=new A.q6(!1,A.byA(),22,null)
D.kv=new A.pb(16,null,D.axH,!0)
D.a8s=new A.pB(C.E,null,2,null)
D.vS=new A.KB(!1,D.a8s,A.c4T(),!0)
D.a_D=new A.axb(3,"spaceEvenly")
D.a_M=new B.xH(6,"dstIn")
D.Xd=new B.aS(3,3)
D.Bb=new B.d4(D.Xd,D.Xd,C.a3,C.a3)
D.a_X=new B.bk(C.E,0,C.W,-1)
D.BK=new A.a4U()
D.a1s=new A.ML()
D.a1t=new A.MO()
D.aOR=new A.aci()
D.alj=w([],B.ar("C<kW>"))
D.alk=w([],B.ar("C<lh>"))
D.DS=new A.MC(D.alj,D.alk,!0)
D.a8b=new B.eq("Zeitraum",!1,null)
D.a8f=new B.eq("Konten (SKR 03)",!1,null)
D.xE=new A.aDT(0,"center")
D.aP2=new A.yu(!0,A.bz6(),A.bJV())
D.DV=new A.yu(!1,A.bz6(),A.bJV())
D.DW=new A.yv(!1,!0,null,A.auM(),A.ZY(),!0,null,A.auM(),A.ZY())
D.aP3=new A.yv(!0,!0,null,A.auM(),A.ZY(),!0,null,A.auM(),A.ZY())
D.a3J=new B.D(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3v=new B.D(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3T=new B.D(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3N=new B.D(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3g=new B.D(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3f=new B.D(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4c=new B.D(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3D=new B.D(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4f=new B.D(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a49=new B.D(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.arp=new B.d6([50,D.a3J,100,D.a3v,200,D.a3T,300,D.a3N,400,D.a3g,500,D.a3f,600,D.a4c,700,D.a3D,800,D.a4f,900,D.a49],x.m)
D.dp=new B.rB(D.arp,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ahr=w([8,4],x.t)
D.a8q=new A.pB(D.dp,null,0.4,D.ahr)
D.a8r=new A.pB(C.an,null,0.5,null)
D.fP=new A.ez(0/0,0/0)
D.axJ=new A.q6(!0,A.byA(),44,null)
D.mG=new A.pb(16,null,D.axJ,!0)
D.axI=new A.q6(!0,A.byA(),30,null)
D.mH=new A.pb(16,null,D.axI,!0)
D.a8t=new A.uO(!1,D.mG,D.mH,D.mG,D.mH)
D.aP4=new A.uO(!0,D.mG,D.mH,D.mG,D.mH)
D.a93=new A.Nf(0,"left")
D.a94=new A.Nf(1,"center")
D.a95=new A.Nf(2,"right")
D.a99=new B.a8(57495,"MaterialIcons",null,!1)
D.xW=new B.a8(58927,"MaterialIcons",null,!1)
D.a9T=new B.a8(59005,"MaterialIcons",null,!0)
D.a9U=new B.a8(59007,"MaterialIcons",null,!0)
D.a9V=new B.a8(59011,"MaterialIcons",null,!1)
D.aaR=new B.a8(62589,"MaterialIcons",null,!1)
D.aaa=new B.a8(61349,"MaterialIcons",null,!1)
D.abk=new B.aI(D.aaa,20,C.k,null,null)
D.aah=new B.a8(61487,"MaterialIcons",null,!1)
D.abC=new B.aI(D.aah,18,null,null,null)
D.abD=new B.aI(D.xW,18,null,null,null)
D.acf=new B.aI(C.nQ,null,C.u,null,null)
D.aco=new B.aI(C.nV,16,null,null,null)
D.acw=new B.aI(C.EC,16,null,null,null)
D.acz=new B.aI(C.i2,null,C.k,null,null)
D.aaP=new B.a8(62584,"MaterialIcons",null,!1)
D.acH=new B.aI(D.aaP,16,null,null,null)
D.acN=new B.aI(D.xW,16,null,null,null)
D.a9m=new B.a8(57912,"MaterialIcons",null,!1)
D.acR=new B.aI(D.a9m,null,C.ax,null,null)
D.aeP=new A.a6G(null)
D.aP9=new A.aJN(0,"horizontal")
D.yd=new A.zd(0,0,0,0,!1)
D.Fd=new A.O9(0.5)
D.BQ=new A.a6U()
D.aeT=new A.EN(D.BQ,A.bJZ(),10,A.bJW(),!0,A.bJY(),A.bJX(),!1,null,null,null)
D.aPb=new A.EN(D.BQ,A.bJZ(),10,A.bJW(),!0,A.bJY(),A.bJX(),!0,null,null,null)
D.agp=w([4,3],x.t)
D.avB=new B.aE("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.avr=new B.aE("receivables","Forderungen (kurzfristig)")
D.avg=new B.aE("inventory_value","Vorr\xe4te (Warenbestand)")
D.ave=new B.aE("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.av4=new B.aE("fixed_assets","Anlageverm\xf6gen")
D.av9=new B.aE("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avy=new B.aE("long_term_liabilities","Langfristige Verbindlichkeiten")
D.avq=new B.aE("equity","Eigenkapital")
D.px=w([D.avB,D.avr,D.avg,D.ave,D.av4,D.av9,D.avy,D.avq],B.ar("C<+(f,f)>"))
D.aPe=w([],x.M)
D.al6=w([],x.O)
D.al7=w([],x.Y)
D.al8=w([],B.ar("C<mz>"))
D.al9=w([],B.ar("C<mA>"))
D.aPf=w([],x.U)
D.aPg=w([],x.u)
D.ala=w([],x.r)
D.as1={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.SO={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yS=new B.a4(D.SO,[0,0,0,0,0,0,0,C.ce],B.ar("a4<f,B>"))
D.arZ={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.arj=new B.a4(D.arZ,[0,0,0,0],B.ar("a4<f,u>"))
D.asi={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aoW=new B.a4(D.asi,[0,0,0,0,null,null,null,null],B.ar("a4<f,u?>"))
D.aoR=new B.a4(D.as1,[D.yS,D.yS,D.yS,C.ce,C.ce,C.ce,D.arj,D.aoW],x.R)
D.ap6=new B.a4(D.SO,[0,0,0,0,0,0,0,C.cE],x.R)
D.as3={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ap8=new B.a4(D.as3,[8500,1200,3400,300,22e3,4200,9000,22200],B.ar("a4<f,F>"))
D.arY={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ark=new B.a4(D.arY,[0,0,0,0,0,0,0,C.cE],x.R)
D.asu={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.arl=new B.a4(D.asu,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.ar("a4<f,f>"))
D.a4k=new B.D(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4s=new B.D(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3j=new B.D(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3F=new B.D(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3P=new B.D(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4F=new B.D(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a34=new B.D(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3H=new B.D(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3S=new B.D(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4a=new B.D(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.arq=new B.d6([50,D.a4k,100,D.a4s,200,D.a3j,300,D.a3F,400,D.a3P,500,D.a4F,600,D.a34,700,D.a3H,800,D.a3S,900,D.a4a],x.m)
D.SD=new B.rB(D.arq,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7C=new B.al(32,32,32,32)
D.atq=new B.af(D.a7C,C.bD,null)
D.a7E=new B.al(48,48,48,48)
D.ats=new B.af(D.a7E,C.bD,null)
D.aty=new B.af(C.aj,C.bD,null)
D.all=w([],B.ar("C<mV>"))
D.alm=w([],B.ar("C<nm>"))
D.Xe=new A.PM(D.all,D.alm)
D.awi=new B.fA("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.awj=new B.fA("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awm=new B.fA("Automaten-Business","Umsatz je Automat",null,null)
D.awo=new B.fA("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awq=new B.fA("Top","Meistverkaufte Produkte",null,null)
D.awu=new B.fA("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awv=new B.fA("Kennzahlen","Rentabilit\xe4t",null,null)
D.Y9=new B.t9(C.G,C.q,0)
D.aF9=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.azi=new B.dV(D.aF9,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aH6=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azl=new B.dV(D.aH6,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aFk=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.azm=new B.dV(D.aFk,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aH0=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azo=new B.dV(D.aH0,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aGu=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azp=new B.dV(D.aGu,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aGr=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azJ=new B.dV(D.aGr,null,null,null,null,null,null,null,null,null,null,null,null,C.K,!1,null,null,null,C.p,null)
D.aPq=new B.O(!0,C.E,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFi=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aFt=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGb=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGk=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGx=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aHi=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zm=new A.adK(0,"auto")
D.aHQ=new A.adK(1,"top")
D.aM9=new A.wF("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMa=new A.wF("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cdY","bOo",()=>B.j0(new A.brG(),x.D))
w($,"cdZ","avl",()=>B.j0(new A.brH(),x.a))
w($,"ceV","xp",()=>B.bxe(new A.btw(),x.P))
w($,"ce_","bur",()=>C.aI.$1$1(new A.brI(),x.d))
w($,"cdX","bOn",()=>C.aI.$1$1(new A.brF(),x.X))
w($,"cdW","buq",()=>C.aI.$1$1(new A.brE(),x.h))
w($,"cdV","bup",()=>B.aZS(A.c3X(),x.F,x.b))
w($,"c6J","btX",()=>new A.ax_())
v($,"ca5","lA",()=>new A.b1v())})()};
(a=>{a["k1dwBRHfWEIpmfg4i8hlLJfLQzo="]=a.current})($__dart_deferred_initializers__);