((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oe(d,e,f,g,h){return new A.a6Z(f,g,d,h,e,null)},
a6Z:function a6Z(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uU:function uU(d){this.a=d},
Ek:function Ek(d){this.a=d},
bTT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.V(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.SN
w=x.f
v=x.N
u=x.z
t=A.aFv(B.dh(w.a(e.h(a0,"current")),v,u))
s=A.aFv(B.dh(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFv(B.dh(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bm
p=J.cV(p,new A.aFd(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bm
o=J.cV(o,new A.aFe(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bm
q=J.cV(q,new A.aFf(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.dh(w.a(e.h(a0,"customer")),v,u)
m=B.b3(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.pb(n.h(0,"app_gross"))
k=B.b3(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.pb(n.h(0,"avg_basket"))
u=B.dh(w.a(e.h(a0,"derived")),v,u)
v=A.pb(u.h(0,"gross_margin_pct"))
e=A.pb(u.h(0,"net_margin_pct"))
w=A.pb(u.h(0,"ebitda_margin_pct"))
j=A.pb(u.h(0,"cashflow_operating"))
i=A.bsx(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsx(u.h(0,"revenue_growth_mom_pct"))
g=A.bsx(u.h(0,"result_growth_yoy_pct"))
u=A.bsx(u.h(0,"result_growth_mom_pct"))
f=B.b3(J.Z(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.oi(t,s,r,p,o,q,new A.aAp(m,l,k,n),new A.aBx(v,e,w,j,i,h,g,u),f)},
pb(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fT(J.al(d))
return w==null?0:w},
bsx(d){if(d==null)return null
if(typeof d=="number")return d
return B.fT(J.al(d))},
qq:function qq(d,e,f,g){var _=this
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
wo:function wo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAp:function aAp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBx:function aBx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oi:function oi(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFd:function aFd(){},
aFe:function aFe(){},
aFf:function aFf(){},
aFv(d){var w=J.V(d),v=A.ue(w.h(d,"revenue_net_7")),u=A.ue(w.h(d,"revenue_net_19")),t=A.ue(w.h(d,"revenue_net")),s=A.ue(w.h(d,"expense_net")),r=A.ue(w.h(d,"result_net")),q=A.ue(w.h(d,"vat_collected")),p=A.ue(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.bm
w=J.cV(w,new A.aFw(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.oj(v,u,t,s,r,q,p,w)},
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
oj:function oj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFw:function aFw(){},
bTS(d){return new A.yt(d,new B.iw(x.c_),C.dO)},
btj:function btj(){},
btk:function btk(){},
bv9:function bv9(){},
btl:function btl(){},
bti:function bti(){},
bth:function bth(){},
yt:function yt(d,e,f){this.r=d
this.a=e
this.f=f},
aFc:function aFc(d,e,f){this.a=d
this.b=e
this.c=f},
aFb:function aFb(d,e,f){this.a=d
this.b=e
this.c=f},
bTU(){return new A.yu(null)},
alP(d,e,f,g,h){return new A.alO(e,h,g,f,d,null)},
yu:function yu(d){this.a=d},
aFu:function aFu(d){this.a=d},
aFm:function aFm(d,e,f){this.a=d
this.b=e
this.c=f},
aFn:function aFn(d,e,f){this.a=d
this.b=e
this.c=f},
aFo:function aFo(d){this.a=d},
aFl:function aFl(){},
aFp:function aFp(d){this.a=d},
aFq:function aFq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFt:function aFt(){},
aFs:function aFs(){},
aFr:function aFr(){},
aFk:function aFk(d,e){this.a=d
this.b=e},
aFi:function aFi(d){this.a=d},
aFj:function aFj(d){this.a=d},
agy:function agy(d,e,f,g,h,i,j){var _=this
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
ao4:function ao4(d,e){this.e=d
this.a=e},
biz:function biz(d){this.a=d},
biA:function biA(d){this.a=d},
biB:function biB(d,e,f){this.a=d
this.b=e
this.c=f},
biy:function biy(){},
IS:function IS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ji:function Ji(d,e){this.c=d
this.a=e},
bou:function bou(d){this.a=d},
agw:function agw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I0:function I0(d,e){this.c=d
this.a=e},
bAh(d,e,f,g,h){var w=null
return B.hh(w,w,!0,w,new A.bss(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.amo(g,n,i,e,d,m,f,k,l,j,null)},
ava(d,e){return A.c3t(d,e)},
c3t(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$ava=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.b2(D.azJ)
t=4
o=e.aD(0,$.bL(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hw("finance-balance-sync",B.z(n,n)),$async$ava)
case 7:r=g
q=B.dh(x.f.a(r.a),x.N,n)
l.WU()
if(J.d(J.Z(q,"configured"),!1)){l.b2(D.azN)
w=1
break}if(J.d(J.Z(q,"ok"),!0)){o=$.bw7()
if(e.e==null)B.U(B.a_(y.b))
e.gcv().cs(o)
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.Z(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.Z(q,"error")
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.WU()
l.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$ava,v)},
avd(d,e,f){var w=0,v=B.q(x.H)
var $async$avd=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.hh(null,null,!0,null,new A.bsq(f,e,e.aD(0,$.bL(),x.A)),d,null,!0,!0,x.H),$async$avd)
case 2:return B.o(null,v)}})
return B.p($async$avd,v)},
a7_:function a7_(d){this.a=d},
aKt:function aKt(){},
aKs:function aKs(){},
aKr:function aKr(){},
Ik:function Ik(d,e){this.c=d
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
bss:function bss(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsr:function bsr(d){this.a=d},
al7:function al7(d){this.a=d},
amo:function amo(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
UI:function UI(d,e,f){this.c=d
this.d=e
this.a=f},
Yg:function Yg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bo0:function bo0(){},
bo1:function bo1(){},
bo2:function bo2(d){this.a=d},
TW:function TW(d,e,f){this.c=d
this.d=e
this.a=f},
b5V:function b5V(){},
b5X:function b5X(d){this.a=d},
b5Y:function b5Y(d){this.a=d},
b5W:function b5W(){},
U6:function U6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6L:function b6L(){},
b6M:function b6M(){},
b6N:function b6N(){},
b6O:function b6O(d){this.a=d},
amS:function amS(d,e){this.c=d
this.a=e},
bgp:function bgp(){},
bgq:function bgq(){},
aj9:function aj9(d,e){this.c=d
this.a=e},
Cm:function Cm(d,e,f){this.c=d
this.d=e
this.a=f},
asD:function asD(d,e){this.c=d
this.a=e},
bpL:function bpL(){},
bpM:function bpM(){},
wI:function wI(d,e){this.c=d
this.a=e},
ahr:function ahr(d,e){this.e=d
this.a=e},
b4r:function b4r(){},
b4q:function b4q(){},
b4p:function b4p(d,e,f){this.a=d
this.b=e
this.c=f},
b4j:function b4j(d,e){this.a=d
this.b=e},
b4k:function b4k(d,e){this.a=d
this.b=e},
b4s:function b4s(d){this.a=d},
b4t:function b4t(d){this.a=d},
b4l:function b4l(){},
b4m:function b4m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4n:function b4n(d,e){this.a=d
this.b=e},
b4o:function b4o(d,e,f){this.a=d
this.b=e
this.c=f},
bsq:function bsq(d,e,f){this.a=d
this.b=e
this.c=f},
bsp:function bsp(d){this.a=d},
Bn:function Bn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tz:function Tz(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4d:function b4d(){},
b4e:function b4e(d){this.a=d},
b4f:function b4f(d){this.a=d},
b4h:function b4h(d,e){this.a=d
this.b=e},
b4g:function b4g(d,e){this.a=d
this.b=e},
b4i:function b4i(d){this.a=d},
bk:function bk(){},
bDM(d){return new A.KR(d,C.av,C.dE,null,null)},
KR:function KR(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TA:function TA(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eO$=f
_.cu$=g
_.c=_.a=null},
b4u:function b4u(d,e){this.a=d
this.b=e},
b4v:function b4v(d){this.a=d},
axL(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alE:f,p=a0==null?16:a0,o=d==null?D.a_R:d,n=g==null,m=n?A.bwE(r,r,r,r,r,r,r,r):g,l=a3==null?D.Xy:a3
n=n?A.bwE(r,r,r,r,r,r,r,r):g
w=j==null?D.DV:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.o0(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BL,s,w,i,n)},
axS(d,e,f,g,h){var w=d==null?D.alF:d,v=e==null?2:e,u=g==null?C.ly:g
return new A.fK(h,f===!0,w,v,u)},
bR9(d,e,f){var w=d.a
w=C.d.aO(w+(e.a-w)*f)
return A.axS(A.kx(d.c,e.c,f,A.c4g(),x.fj),B.ae(d.d,e.d,f),!1,A.kx(d.e,e.e,f,A.a_u(),x.S),w)},
a1_(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.SW
else w=h
v=m==null
u=v?8:m
t=$.lD()
s=t.aXQ(f,v?8:m)
t=t.aXR(g,v?8:m)
v=d==null?A.bDK(r,r,r,r,r):d
return new A.it(q,l,w,j,u,s,e,t,v,k==null?D.alG:k)},
bRa(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ae(d.e,e.e,f),q=B.mN(d.f,e.f,f),p=A.kx(d.r,e.r,f,A.a_u(),x.S),o=B.bX(d.w,e.w,f),n=B.ae(d.a,e.a,f),m=B.ae(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ae(w.b,v.b,f)
t=B.ae(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1_(A.bDK(v,u,null,!1,t),p,q,o,s,n,null,A.kx(d.y,e.y,f,A.c4h(),x.G),m,r)},
bRb(d,e,f){var w,v,u=B.ae(d.a,e.a,f)
u.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mL(u,w,v,B.bX(d.d,e.d,f))},
bDK(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.ds
else w=d
return new A.a0W(g===!0,v,u,w,f)},
bwE(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a11(4,C.hX,16,D.xH,0,120,A.c4j(),!1,!1,D.Zx,0,C.L,A.c4i())
else w=k
v=j==null?C.l_:j
return new A.a10(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c54(d,e,f,g){var w=null,v=B.j8(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.S,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dc(C.d.j(f.b),v)},
c53(d){return A.azP(D.ds,15)},
o0:function o0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axK:function axK(d,e){this.a=d
this.b=e},
fK:function fK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axT:function axT(){},
axU:function axU(){},
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
mL:function mL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0W:function a0W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a10:function a10(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ae1:function ae1(d,e){this.a=d
this.b=e},
a11:function a11(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KS:function KS(d){this.a=d},
a12:function a12(d,e,f,g,h,i,j,k){var _=this
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
ahn:function ahn(){},
ahu:function ahu(){},
ahv:function ahv(){},
ahx:function ahx(){},
ahy:function ahy(){},
ahz:function ahz(){},
ahA:function ahA(){},
ahB:function ahB(){},
ahC:function ahC(){},
axV:function axV(d){this.a=d},
axW:function axW(){},
uy:function uy(d,e,f){this.a=d
this.b=e
this.c=f},
ahw:function ahw(){},
axX:function axX(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axY:function axY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axZ:function axZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a61:function a61(d){this.b=d},
a0Z:function a0Z(d,e,f){this.d=d
this.e=e
this.a=f},
aba:function aba(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.d1=f
_.fX=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aG=_.ak=_.ar=$
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
c55(d,e){var w=null
return new A.Rx(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
axD(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ae(w.c,v.c,f)
u.toString
return new A.pm(t,e.b,new A.qg(v.a,v.b,u,B.ae(w.d,v.d,f)),!0)},
bF8(d,e,f){var w=A.axD(d.b,e.b,f),v=A.axD(d.d,e.d,f),u=A.axD(d.e,e.e,f)
return new A.uW(e.a,w,A.axD(d.c,e.c,f),v,u)},
bTW(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ae(d.a,e.a,f)
w.toString
v=B.ae(d.b,e.b,f)
v.toString
return new A.eB(w,v)},
bF6(d,e,f){return new A.yw(e.a,!0,B.ae(d.c,e.c,f),e.d,e.e,e.f,B.ae(d.r,e.r,f),e.w,e.x)},
c7x(d){return!0},
c58(d){return D.a8R},
bF7(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pJ(w,f,g,e)},
bH5(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c4c(),x.dv)
v.toString
w=A.kx(d.b,e.b,f,A.c4e(),x.bN)
w.toString
return new A.Q6(v,w)},
bUG(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.n4(t,w,v,u)},
bZV(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rn(d.d,e.d,f)
if(v==null)v=u==null?C.x:null
return new A.nx(t,w,v,u)},
bUF(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oe(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bUD(B.bwv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_u(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kU(r,e.f,e.r,t,e.x,u,v,w,s)},
bZU(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.oe(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bZS(B.bwv(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rn(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kx(d.d,e.d,f,A.a_u(),x.S)
if(u==null)u=v==null?C.E:null
return new A.lk(r,e.f,e.r,t,e.x,u,v,w,s)},
bUD(d,e,f,g,h,i){return new A.a6c(f,!1,g,i,d,e)},
bUE(d){return C.d.ae(d.e,1)},
bZS(d,e,f,g,h,i){return new A.aep(f,!1,g,i,d,e)},
bZT(d){return C.d.ae(d.e,1)},
bF2(d,e,f){var w,v=A.kx(d.a,e.a,f,A.c4b(),x.cm)
v.toString
w=A.kx(d.b,e.b,f,A.c4d(),x.es)
w.toString
return new A.MR(v,w,!0)},
bTV(d,e,f){return new A.MY(d,e==null?4:e,f)},
a0P:function a0P(){},
Db:function Db(d,e){this.a=d
this.b=e},
ty:function ty(d,e){this.r=d
this.w=e},
qg:function qg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acC:function acC(){},
pm:function pm(d,e,f,g){var _=this
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
pJ:function pJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae3:function ae3(){},
Q6:function Q6(d,e){this.a=d
this.b=e},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kU:function kU(d,e,f,g,h,i,j,k,l){var _=this
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
a6c:function a6c(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aep:function aep(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MR:function MR(d,e,f){this.a=d
this.b=e
this.c=f},
uV:function uV(){},
MY:function MY(d,e,f){this.a=d
this.b=e
this.c=f},
ahi:function ahi(){},
ahm:function ahm(){},
aku:function aku(){},
akN:function akN(){},
akO:function akO(){},
akQ:function akQ(){},
akR:function akR(){},
alE:function alE(){},
alD:function alD(){},
alF:function alF(){},
apa:function apa(){},
ar2:function ar2(){},
ar3:function ar3(){},
asH:function asH(){},
atm:function atm(){},
atl:function atl(){},
atn:function atn(){},
axz:function axz(){},
KL:function KL(){},
KM:function KM(d,e,f){this.c=d
this.d=e
this.a=f},
axB:function axB(d){this.a=d},
axA:function axA(d){this.a=d},
Rx:function Rx(d,e,f){this.c=d
this.e=e
this.a=f},
Y5:function Y5(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYr(d,e,f){var w=B.af(f),v=w.i("ad<1,jT>")
v=B.Q(new B.ad(f,new A.aZG(),v),v.i("aw.E"))
w=w.i("ad<1,c>")
w=B.Q(new B.ad(f,new A.aZH(),w),w.i("aw.E"))
return new A.acD(e,d,v,w,null)},
bR6(d,e,f){var w,v=null,u=B.aM(x.dO),t=J.a6Q(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tv(v,C.ad,C.w,new B.kp(1),v,v,v,v,C.by,v)
u=new A.a0Q(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aM(x.g))
u.bj()
return u},
acD:function acD(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZG:function aZG(){},
aZH:function aZH(){},
a0Q:function a0Q(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.We$=h
_.aTB$=i
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
bg0:function bg0(d,e){this.a=d
this.b=e},
axC:function axC(){},
jT:function jT(d,e){this.a=d
this.b=e},
o_:function o_(d,e){this.a=d
this.b=e},
ahj:function ahj(){},
ahk:function ahk(){},
ahl:function ahl(){},
Tx:function Tx(){},
AR:function AR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZI:function aZI(d){this.a=d},
aZJ:function aZJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZK:function aZK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5k(d,e){var w=d==null?B.cU(C.E,1):d
return new A.a5j(e!==!1,w)},
a14:function a14(){},
a5j:function a5j(d,e){this.a=d
this.b=e},
N4:function N4(){},
a5l:function a5l(){},
ay7:function ay7(){},
aEs:function aEs(d,e){this.a=d
this.b=e},
ahF:function ahF(){},
akK:function akK(){},
akL:function akL(){},
akS:function akS(){},
KV:function KV(){},
vE:function vE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hq:function hq(){},
a5p:function a5p(d){this.a=d},
a5q:function a5q(d){this.a=d},
a5r:function a5r(d){this.a=d},
N_:function N_(){},
N0:function N0(){},
a5u:function a5u(d){this.a=d},
N2:function N2(){},
N3:function N3(d){this.a=d},
a5o:function a5o(d){this.a=d},
a5n:function a5n(d){this.a=d},
MZ:function MZ(d){this.a=d},
a5s:function a5s(d){this.a=d},
a5t:function a5t(d){this.a=d},
N1:function N1(d){this.a=d},
G5:function G5(){},
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
aV2:function aV2(d){this.a=d},
Oq:function Oq(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VU:function VU(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eO$=g
_.cu$=h
_.c=_.a=null},
bg5:function bg5(d,e){this.a=d
this.b=e},
bg3:function bg3(d){this.a=d},
bg4:function bg4(d,e){this.a=d
this.b=e},
bg2:function bg2(){},
bg6:function bg6(d){this.a=d},
bxU(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pV(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.SW:u
else w=g
v=f==null?A.axJ(!1,u,0,u,!1,D.vR):f
w=new A.ec(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axJ(!1,u,0,u,!1,D.vR):d,j,a0,i,s,!1,p)
w.ark(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bV7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ae(d.x,e.x,f)
m.toString
w=A.bDL(d.ay,e.ay,f)
v=A.bDL(d.ch,e.ch,f)
u=B.ae(d.as,e.as,f)
u.toString
t=e.CW
s=A.kx(d.cy,e.cy,f,A.a_u(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rn(d.w,e.w,f)
p=A.kx(d.a,e.a,f,A.c4a(),x.cw)
p.toString
o=B.bHB(d.db,e.db,f)
o.toString
n=B.ae(d.dy.a,e.dy.a,f)
n.toString
return A.aKE(v,m,w,r,e.z,s,new A.yv(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Or(n),!1,u,o,!0,e.cx,p)},
axJ(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aC(C.d.aO(127.5),D.ds.v()>>>16&255,D.ds.v()>>>8&255,D.ds.v()&255):null
else w=e
return new A.a0Y(h,w,g,i,f,!1)},
bDL(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rn(v.b,u.b,f),r=B.ae(v.c,u.c,f)
r.toString
r=A.bF7(t,A.kx(v.d,u.d,f,A.a_u(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rn(d.c,e.c,f)
v=B.ae(d.e,e.e,f)
v.toString
return A.axJ(!1,s,v,u,e.a,new A.KQ(!1,r,w.c,!0))},
bRc(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rn(d.d,e.d,f)
if(w==null)w=v==null?B.aC(C.d.aO(127.5),D.ds.v()>>>16&255,D.ds.v()>>>8&255,D.ds.v()&255):null
return new A.mM(e.a,e.b,w,v)},
c7y(d){return!0},
bA0(d,e,f){var w=f.w
if(w!=null)return A.bAR(w.a,A.bxA(w),e/100)
w=f.r
w=w
return w==null?D.ds:w},
c1P(d,e,f){var w,v=f.w
if(v!=null)w=A.bAR(v.a,A.bxA(v),e/100)
else{v=f.r
w=v
if(w==null)w=D.ds}return A.azP(w,40)},
bK6(d,e,f,g,h){var w,v=A.bA0(d,e,f),u=f.w
if(u!=null)w=A.bAR(u.a,A.bxA(u),e/100)
else{u=f.r
w=u
if(w==null)w=D.ds}u=A.azP(w,40)
return new A.MY(v,h==null?4:h,u)},
c7w(d,e){return!0},
c3X(d,e){return Math.abs(d.a-e.a)},
c5b(d,e){var w=J.cV(e,new A.bt8(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c57(d,e){return-1/0},
c56(d,e){return d.a[e].b},
bLh(d){var w=J.cV(d,new A.bt5(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bLg(d){return A.azP(D.ds,15)},
pV:function pV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aKF:function aKF(){},
Or:function Or(d){this.a=d},
a0Y:function a0Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KQ:function KQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yv:function yv(d,e,f){this.a=d
this.b=e
this.c=f},
aKu:function aKu(d,e){this.a=d
this.b=e},
a5m:function a5m(){},
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
bt8:function bt8(d){this.a=d},
bt7:function bt7(d){this.a=d},
a7d:function a7d(){},
bt5:function bt5(){},
n9:function n9(){},
qo:function qo(d,e,f,g,h,i){var _=this
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
Gx:function Gx(d){this.a=d},
Os:function Os(d){this.a=d},
zj:function zj(d,e){this.a=d
this.b=e},
ahs:function ahs(){},
aht:function aht(){},
ahG:function ahG(){},
akM:function akM(){},
akP:function akP(){},
amv:function amv(){},
amw:function amw(){},
amx:function amx(){},
amz:function amz(){},
amA:function amA(){},
amB:function amB(){},
amC:function amC(){},
ar1:function ar1(){},
asG:function asG(){},
aKG:function aKG(d){this.a=d},
aKH:function aKH(){},
aKI:function aKI(){},
zk:function zk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amy:function amy(){},
aKJ:function aKJ(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKM:function aKM(){},
aKK:function aKK(d,e,f){this.a=d
this.b=e
this.c=f},
aKL:function aKL(d,e,f){this.a=d
this.b=e
this.c=f},
aKN:function aKN(){},
vp:function vp(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7c:function a7c(d,e,f){this.d=d
this.e=e
this.a=f},
abn:function abn(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i4=e
_.d1=f
_.fX=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aG=_.ak=_.ar=$
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
bwD(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bI(o.length,0,!1,x.i),m=B.af(o),l=new B.ad(o,new A.axM(),m.i("ad<1,F>")).kp(0,new A.axN()),k=e-l,j=new A.axQ(k,d,n)
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
new B.j_(o,m.i("j_<1>")).aB(0,new A.axO(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j_(o,m.i("j_<1>")).aB(0,new A.axP(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axM:function axM(){},
axN:function axN(){},
axQ:function axQ(d,e,f){this.a=d
this.b=e
this.c=f},
axR:function axR(d,e,f){this.a=d
this.b=e
this.c=f},
axO:function axO(d,e,f){this.a=d
this.b=e
this.c=f},
axP:function axP(d,e,f){this.a=d
this.b=e
this.c=f},
bxA(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j_(w,B.af(w).i("j_<1>")).aB(0,new A.aHL(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHL:function aHL(d,e){this.a=d
this.b=e},
aAY(d,e){var w,v
if(e!=null){w=B.af(e).i("ad<1,F>")
v=B.Q(new B.ad(e,new A.aAZ(),w),w.i("aw.E"))
return A.c5_(d,new A.a1E(v,x.C))}else return d},
aAZ:function aAZ(){},
bZ1(d,e){var w=!0
if(d!==C.fc)if(!(d===C.ad&&e===C.w))w=d===C.iC&&e===C.b_
if(w)return D.E8
else{w=!0
if(d!==C.iB)if(!(d===C.iC&&e===C.w))w=d===C.ad&&e===C.b_
if(w)return D.E9
else return D.a9x}},
Nu:function Nu(d,e){this.a=d
this.b=e},
a1t:function a1t(d,e){this.a=d
this.b=e},
zp:function zp(d,e){this.a=d
this.$ti=e},
amJ:function amJ(){},
c5_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.am(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.af,k,k,h)
for(j=B.ML(d),w=B.b([],x.I),v=new B.MN(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.U(B.fz('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MM(v,r)
v.Dd()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dd()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.en(B.b([],i),!0,s)
p=new B.Kb(new B.cl(t,p,k,new B.apx([q,o,o+m,!0]),l),C.r,k)
h.push(p)
l=g.f
if(l!=null)p.iC(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1E:function a1E(d,e){this.a=d
this.b=0
this.$ti=e},
b2a:function b2a(){},
bxp(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bRf(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azP(d,e){var w=1-e/100
return B.aC(d.gfI(d),C.d.aO(d.gNN()*w),C.d.aO(d.gG6()*w),C.d.aO(d.gKk()*w))},
bF5(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ak(v,u,t,w?d.b.c.b:0)},
bxq(d){var w=d.a,v=w?A.aZF(d.b):0,u=w?A.aZF(d.c):0,t=w?A.aZF(d.d):0
return new B.ak(v,u,t,w?A.aZF(d.e):0)},
bWl(d){var w
if(d.c===0){d.seX(null)
w=B.c0(d.r)
d.r=B.aC(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gq(0)}},
byf(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.seX(f.nJ(0,g))}else{w=e==null?C.F:e
d.r=w.gq(w)
d.seX(null)}},
aZF(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kx(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.l0(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.l0(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6j(d,e,f){return C.d.aO(d+(e-d)*f)},
bAR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.l0(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6Z.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bF:C.B
r=r?C.m:C.ao
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.cp(t.x,C.m,s,18),C.b2],w))
v.push(B.aA(new B.e6(t.c,!1,s),1))
v=B.ao(v,C.C,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.P,B.j(t.d,1,C.ai,s,B.c3(u==null?C.j:u,22,C.S),s,s,s)],w)
return B.by(r,B.ac(w,C.C,s,C.io,C.h,0),q,s,C.aj,s,3)}}
A.uU.prototype={
LE(d){return this.aTA(d)},
aTA(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LE=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.er("finance_summary",B.a4(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LE)
case 3:q=f
if(q==null){u=D.apQ
w=1
break}if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.as3
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LE,v)},
LD(d){return this.aTz(d)},
aTz(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.er("finance_kpis",B.a4(["p_from",E.rj(d.a),"p_to",E.rj(d.b)],s,r),r),$async$LD)
case 3:q=f
if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.apy
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LD,v)},
pF(d){return this.ar1(d)},
ar1(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pF=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hw("sevdesk-sync",B.a4(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$pF)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Z(r,"upserted")=="number"){u=C.d.a0(B.fH(J.Z(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pF,v)},
Lz(d){return this.aTq(d)},
aTq(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hw("finance-export-pdf",B.a4(["from",E.rj(d.a),"to",E.rj(d.b)],s,s)),$async$Lz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.Z(r,"base64")=="string"){u=B.aG(J.Z(r,"base64"))
w=1
break}throw B.e(B.e5("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lz,v)}}
A.Ek.prototype={
G0(d){return this.ak8(d)},
ak8(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$G0=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LE(d),$async$G0)
case 7:q=f
o=A.aFv(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HE(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$G0,v)},
FW(d){return this.ajU(d)},
ajU(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FW=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LD(d),$async$FW)
case 7:q=f
o=A.bTT(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HE(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FW,v)},
pF(d){return this.ar2(d)},
ar2(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
p=r.HE(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pF,v)},
Ly(d){return this.aTp(d)},
aTp(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ly=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lz(d),$async$Ly)
case 7:q=f
o=C.iU.cF(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HE(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ly,v)},
HE(d){if(d instanceof B.yq)return d
if(d instanceof B.l9){if(d.b==="42501")return new B.vI(d.a)
return new B.te(d.a)}if(d instanceof B.Ni)return new B.te("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bf("Unerwarteter Fehler: "+B.i(d))},
$iaFh:1}
A.qq.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vt.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wo.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAp.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBx.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CV.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oj.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yt.prototype={
GW(d){return this.ar0(0)},
ar0(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GW=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se8(0,C.dz)
s=t.r
r=s.aD(0,$.xo(),x.P)
p.a=null
w=3
return B.k(B.pl(new A.aFc(p,t,r),x.H),$async$GW)
case 3:t.se8(0,f)
q=t.f
if(q.ghp(q)==null){q=$.bw8()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GW,v)},
Lx(){return this.aTo()},
aTo(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lx=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se8(0,C.dz)
s=t.r.aD(0,$.xo(),x.P)
q.a=null
w=3
return B.k(B.pl(new A.aFb(q,t,s),x.H),$async$Lx)
case 3:t.se8(0,e)
r=t.f
u=r.ghp(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lx,v)}}
A.yu.prototype={
df(d,e){var w=null,v=e.ao($.xo(),x.P),u=e.ao($.bw8(),x.aN)
return B.id(B.dF(B.b([new B.fi("Finanzen","Dashboard",new A.agy(e.ao($.bw6(),x.b).giX(),new A.aFm(this,d,e),new A.aFn(this,d,e),new A.aFo(d),new A.aFp(d),new A.aFq(this,d,e,v),w),w),C.aQ,new A.ao4(v,w),C.bL,D.afn,C.bL,B.dz(u,new A.aFr(),new A.aFs(),new A.aFt(),!1,!0,!1,x.d,x.l)],x.p),C.cj,w,C.M,!1),C.m,new A.aFu(e))},
Ju(d,e){return this.aLX(d,e)},
aLX(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Ju=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bw6()
w=3
return B.k(e.aD(0,s.ghP(),x.F).GW(0),$async$Ju)
case 3:r=g
if(d.e==null){w=1
break}s=e.aD(0,s,x.b)
s=s.ghp(s)
t=d.O(x.q).f
t.b2(B.c6(null,null,null,null,null,C.n,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Ju,v)},
Bq(d,e){return this.axc(d,e)},
axc(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bq=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aD(0,$.bw6().ghP(),x.F).Lx(),$async$Bq)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.b2(D.azP)
w=1
break}t=B.qa(C.r,10)
w=4
return B.k($.bNr().u3(s,"finanzauswertung.pdf",t,null,null,null),$async$Bq)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bq,v)},
Br(d,e,f){return this.aJx(d,e,f)},
aJx(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Br=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.hh(null,null,!0,null,new A.aFk(f,d),d,null,!0,!0,x.cJ),$async$Br)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mJ(e.aD(0,$.bL(),x.A))
p=f.a
o=f.b
n=$.dp()
m=n.al(p)
n=n.al(o)
w=8
return B.k(r.w7("finance_period",p,o,B.a4(["period_from",p.dU()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Br)
case 8:if(d.e!=null)d.O(x.q).f.b2(F.mf)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Br,v)}}
A.agy.prototype={
u(d){var w=this,v=null,u=A.alP(C.m,F.fS,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alP(v,D.abj,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alP(v,D.xY,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alP(C.ak,C.i4,C.ak,s?v:w.e,"PDF-Export")
return B.ao(B.b([u,C.b2,t,C.b2,r,C.b2,q,C.b2,A.alP(C.aE,C.fR,C.aE,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.H,0,v,v)}}
A.alO.prototype={
u(d){var w,v=this,u=null,t=B.aR(12),s=B.aR(12),r=B.aR(12),q=v.w
if(q==null)q=C.ao
q=B.cU(q,1)
w=v.r
if(w==null)w=C.j
return B.H8(B.dR(!1,C.a0,!0,t,B.eD(!1,s,!0,B.bf(u,B.cp(v.c,w,u,20),C.t,u,u,new B.b4(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ae,0,u,u,u,u,u,C.bx),u,v.d,u,u)}}
A.ao4.prototype={
df(d,e){var w=null,v=this.e,u=$.dp(),t=x.p
return B.by(w,B.ac(B.b([D.a8D,C.P,B.ao(B.b([D.abO,C.aV,B.aA(B.j(u.al(v.a)+" \u2013 "+u.al(v.b),w,w,w,B.D(C.j,16,C.S),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.v,B.ll(C.cx,B.b([new A.IS("Monat",new A.biz(e),w,w),new A.IS("Jahr (YTD)",new A.biA(e),w,w),new A.IS("Zeitraum w\xe4hlen \u2026",new A.biB(this,d,e),D.aam,w)],t),C.dK,6,8)],t),C.C,w,C.f,C.h,0),w,w,C.D,w,3)},
IQ(d,e){return this.aIr(d,e)},
aIr(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IQ=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.aZ(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avu(new A.biy(),d,B.bB(B.aU(t)-5,1,1,0,0,0,0),new B.lL(s.a,s.b,x.bz),B.bB(B.aU(t)+1,1,1,0,0,0,0),C.er),$async$IQ)
case 2:r=g
if(r!=null)e.aD(0,$.xo().ghP(),x.V).wF(0,new E.lQ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IQ,v)}}
A.IS.prototype={
u(d){var w=null,v=B.aR(9999),u=B.aR(9999),t=B.aR(9999),s=B.cU(C.ao,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.cp(p,C.j,w,14),C.b2],r))
q.push(B.j(this.c,w,w,w,B.D(C.j,13,C.S),w,w,w))
return B.dR(!1,C.a0,!0,v,B.eD(!1,u,!0,B.bf(w,B.ao(q,C.k,w,C.f,C.H,0,w,w),C.t,w,w,new B.b4(w,w,s,t,w,w,C.G),w,w,w,w,C.kZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ae,0,w,w,w,w,w,C.bx)}}
A.Ji.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.iZ(new A.bou(this)),C.bL,D.a8H,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ao(B.b([D.acK,C.aF,B.aA(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.q,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.ae,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agw(t.a,t.b,t.c==="revenue",t.d,s),C.P],r))}q.push(B.ac(w,C.k,s,C.f,C.h,0))}return B.ac(q,C.a9,s,C.f,C.h,0)}}
A.agw.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bF:C.ae,s=B.cU(u?C.m:C.ao,1),r=B.aR(4),q=w.c
r=B.bf(C.W,B.j(C.c.a_(q,0,1),v,v,v,B.c3(C.j,14,C.p),v,v,v),C.t,v,v,new B.b4(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ai,v,B.D(C.j,14,C.S),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aA(B.ac(B.b([q,B.j(t,v,v,v,B.D(C.q,12,C.l),v,v,v)],s),C.C,v,C.f,C.h,0),1)
q=$.d2().al(w.f)
return B.by(v,B.ao(B.b([r,C.aF,t,B.j(q,v,v,v,B.D(u?C.aE:C.j,15,C.S),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eO,v,3)}}
A.I0.prototype={
u(d){var w=null
return B.by(C.ak,B.ao(B.b([D.adn,C.aF,B.aA(B.j(this.c,w,w,w,B.D(C.j,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eJ,w,C.D,w,3)}}
A.a7_.prototype={
df(d,e){return B.dz(e.ao($.bPX(),x.e),new A.aKr(),new A.aKs(),new A.aKt(),!1,!0,!1,x.X,x.l)}}
A.Ik.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.axi,C.v,B.iZ(new A.bfS(v,q,100-t.w.a,w,p)),C.v,new A.al7(u),C.aQ,D.axh,C.v,new A.ahr(t,u),C.aQ,D.axb,C.v,B.bC(u,!0,u,B.n3(u,B.by(u,new A.TW(t,220,u),u,u,C.D,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfT(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aQ,D.ax4,C.v,B.bC(u,!0,u,B.n3(u,new A.U6(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfU(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aQ,D.ax9,C.v,new A.amS(t,u),C.aQ,D.ax5,C.v,new A.aj9(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aQ,D.axd,C.v,new A.asD(t,u)],s))
return B.ac(r,C.a9,u,C.f,C.h,0)}}
A.al7.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.q,11,C.l).en(1.35),w,w,w)}}
A.amo.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cD(m.d,"-")?C.ak:C.aE
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfV(m,d):l
r=x.p
q=B.b([B.aA(B.j(m.c.toUpperCase(),l,l,l,B.D(C.q,10,C.p).fV(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cU(C.hQ,0.8)
n=B.aR(4)
q.push(B.bf(l,B.j("Ziel "+p,l,l,l,B.D(C.ak,9,C.p),l,l,l),C.t,l,l,new B.b4(l,l,o,n,l,l,C.G),l,l,l,l,C.nq,l,l,l))}q=B.b([B.ao(q,C.k,l,C.f,C.h,0,l,l),C.b6,B.bxo(C.dy,B.j(m.d,l,l,l,B.c3(w,22,C.p),l,l,l),C.mK)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ai,l,B.D(C.q,10,C.aI),l,l,l))
q.push(C.d7)
q.push(B.ao(B.b([new A.UI("Vormonat",m.r,l),C.cF,new A.UI("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.d7)
q.push(B.aA(new A.Yg(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.n3(l,B.by(l,B.ac(q,C.C,l,C.f,C.h,0),l,l,C.dF,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.UI.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aR(4)
return B.bf(r,B.j(this.c+" \u2014",r,r,r,B.D(C.q,9,C.p),r,r,r),C.t,r,r,new B.b4(C.ao,r,r,q,r,r,C.G),r,r,r,r,C.nq,r,r,r)}w=q>=0
v=w?C.aE:C.ak
u=v.eI(0.12)
t=B.cU(v,0.7)
s=B.aR(4)
return B.bf(r,B.ao(B.b([B.cp(w?F.a9B:D.a9A,v,r,10),F.azq,B.j(this.c+" "+C.d.ae(q,1)+" %",r,r,r,B.D(v,9,C.p),r,r,r)],x.p),C.k,r,C.f,C.H,0,r,r),C.t,r,r,new B.b4(u,r,t,s,r,r,C.G),r,r,r,r,C.nq,r,r,r)}}
A.Yg.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ar
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eB(v,j[v]))
u=C.b.kp(j,new A.bo0())
t=C.b.kp(j,new A.bo1())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bo2(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5k(k,!1)
w=B.b([A.aKE(k,2,A.axJ(!1,C.m.eI(0.16),0,k,!0,D.vR),C.m,0.35,k,D.DZ,k,!0,!1,!0,!1,D.Fw,!1,10,D.Yf,!0,C.ly,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oq(A.bxU(k,k,k,D.alH,l,D.BL,D.DV,D.E_,w,D.afs,k,m,k,n,D.Xy,D.alI,D.a8U),C.av,C.ah,k,k)}}
A.TW.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aMR
w=C.b.fA(p,0,new A.b5V())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axS(B.b([A.a1_(q,q,D.Bb,q,C.m,q,q,q,r.b,6),A.a1_(q,q,D.Bb,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.ce(A.bDM(A.axL(q,q,u,q,q,A.a5k(q,!1),q,new A.yw(!0,!0,q,new A.b5W(),A.a_o(),!1,q,A.avf(),A.a_o()),q,v,q,q,new A.uW(!0,new A.pm(16,q,new A.qg(!0,new A.b5X(this),46,q),!0),D.ku,D.ku,new A.pm(16,q,new A.qg(!0,new A.b5Y(p),26,q),!0)))),this.d,q)},
aLd(d){if(Math.abs(d)>=1000)return C.d.ae(d/1000,1)+" k"
return C.d.ae(d,0)}}
A.U6.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ad(v,new A.b6L(),w),x.i)
C.b.K(o,new B.ad(u,new A.b6M(),w))
t=C.b.fA(o,0,new A.b6N())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axS(B.b([A.a1_(q,q,q,q,C.m,q,q,q,v[s],14),A.a1_(q,q,q,q,C.aE,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ce(A.bDM(A.axL(q,q,n,q,q,A.a5k(q,!1),q,D.E_,q,o,q,q,new A.uW(!0,D.ku,D.ku,D.ku,new A.pm(16,q,new A.qg(!0,new A.b6O(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.D,q,3)}}
A.amS.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aMQ
w=new B.ad(k,new A.bgp(),B.af(k).i("ad<1,F>")).kp(0,new A.bgq())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.j(r.b,m,m,m,new B.O(!0,C.j,m,l,C.bw,m,14,C.p,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.d2()
o=p.al(r.f)
q=B.ac(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.O(!0,C.q,m,l,C.bw,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.C,m,C.f,C.h,0)
o=r.d
p=p.al(o)
n=new B.aV(4,4)
o=B.b([new B.iA(C.ay,C.f,C.h,C.k,m,C.bz,m,0,B.b([new B.kO(1,C.dY,q,m),C.aV,B.j(p,m,m,m,new B.O(!0,C.j,m,"Bricolage Grotesque",C.bw,m,16,C.p,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.d7,new B.DB(new B.d7(n,n,n,n),C.bO,B.Ot(C.ao,8,C.d.bS(o/w,0,1),D.B0),m)],v)
q=C.b.gaf(k)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_s(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.K(u,o)}return B.by(m,B.ac(u,C.k,m,C.f,C.h,0),m,m,C.D,m,3)}}
A.aj9.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aA(new A.Cm("Aktive Kunden",""+s,u),1)
w=B.aA(new A.Cm("K\xe4ufe",""+t.a,u),1)
v=$.d2()
return B.by(u,B.ao(B.b([s,w,B.aA(new A.Cm("\xd8-Warenkorb",v.al(t.d),u),1),B.aA(new A.Cm("Umsatz/Kunde",v.al(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.D,u,3)}}
A.Cm.prototype={
u(d){var w=null
return B.ac(B.b([B.j(this.c.toUpperCase(),w,w,w,B.D(C.q,10,C.p).fV(0.6),w,w,w),C.bM,B.j(this.d,w,w,w,B.c3(C.j,20,C.p),w,w,w)],x.p),C.C,w,C.f,C.H,0)}}
A.asD.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ad(m,new A.bpL(),B.af(m).i("ad<1,F>")).kp(0,new A.bpM()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.j(u.b,1,C.ai,o,new B.O(!0,C.j,o,n,C.bw,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.j(""+u.c+"\xd7 ",o,o,o,new B.O(!0,C.q,o,n,C.bw,o,12,C.S,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.d2().al(r)
p=new B.aV(4,4)
r=B.b([new B.iA(C.ay,C.f,C.h,C.k,o,C.bz,o,0,B.b([new B.kO(1,C.dY,t,o),s,B.j(q,o,o,o,new B.O(!0,C.j,o,n,C.bw,o,13,C.p,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b6,new B.DB(new B.d7(p,p,p,p),C.bO,B.Ot(C.ao,6,C.d.bS(r/l,0,1),D.B0),o)],k)
t=C.b.gaf(m)
if(u!==t)t=B.K(u)===B.K(t)&&B.a_s(u.gbD(),t.gbD())
else t=!0
if(!t)r.push(C.P)
C.b.K(j,r)}return B.by(o,B.ac(j,C.k,o,C.f,C.h,0),o,o,C.D,o,3)}}
A.wI.prototype={
u(d){var w=null
return B.by(w,B.j(this.c,w,w,w,B.D(C.q,13,C.l),w,w,w),C.ae,w,C.D,w,3)}}
A.ahr.prototype={
df(d,e){return B.dz(e.ao($.bw7(),x.fM),new A.b4p(this,d,e),new A.b4q(),new A.b4r(),!1,!0,!1,x.h,x.l)}}
A.Bn.prototype={
W(){return new A.Tz()},
aYw(){return this.d.$0()}}
A.Tz.prototype={
av(){var w,v,u,t,s,r,q=this
q.aL()
q.d=new B.aZ(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.Z(w,"as_of"))!=null){w.toString
u=B.eR(J.al(J.Z(w,"as_of")))
q.d=u==null?q.d:u}u=B.z(x.N,x.bP)
for(t=0;t<8;++t){s=D.pv[t].a
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
a43(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pv[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ae(u,2)
s=B.ax(s,".",",")
t.lM(0,t.a.y5(C.aG,C.bb,s))}}this.J(new A.b4d())},
aF5(){this.a43(D.apS)
this.c.O(x.q).f.b2(D.aAa)},
I5(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I5=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b2(a1)
for(e=0;e<8;++e)a2.E(0,D.pv[e].a)
q=a2
t=4
w=7
return B.k($.aF5.cd().zo(B.b(["csv","txt"],x.s),C.xK,!0),$async$I5)
case 7:p=a5
a2=p
o=a2==null?null:J.K7(a2.a).c
if(o==null){w=1
break}n=C.aB.adt(0,o,!0)
m=B.z(a1,x.i)
for(a1=C.BQ.cF(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.avY(l,B.bP("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.aK(J.Z(k,0)).toLowerCase()
i=J.CQ(q,j)?j:D.as4.h(0,j)
if(i==null)continue
d=C.c.aK(C.b.n2(J.bQF(k,1)))
d=B.ax(d,"\u20ac","")
d=B.ax(d," ","")
d=B.ax(d,".","")
h=B.ax(d,",",".")
g=B.fT(h)
if(g!=null)J.fr(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.b2(D.azM)
w=1
break}r.a43(m)
r.c.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I5,v)},
Ih(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ih=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4e(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b00("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.dU(),0,10),"p_cash_and_bank",q.rs("cash_and_bank"),"p_receivables",q.rs("receivables"),"p_inventory_value",q.rs("inventory_value"),"p_other_current_assets",q.rs("other_current_assets"),"p_fixed_assets",q.rs("fixed_assets"),"p_current_liabilities",q.rs("current_liabilities"),"p_long_term_liabilities",q.rs("long_term_liabilities"),"p_equity",q.rs("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ih)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aYw()
o=q.c
o.toString
B.b5(o,!1).fd()
q.c.O(x.q).f.b2(D.azQ)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.b2(B.c6(null,null,null,null,null,C.n,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4f(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ih,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.c3(C.j,18,C.p),r,r,r),p=s.f?r:new A.b4h(s,d),o=s.d
o===$&&B.a()
p=B.fR(D.ac5,B.j("Stichtag: "+C.c.a_(o.dU(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aA(B.fR(D.adb,D.aFY,o?r:s.gaE_(),r),1)
v=x.p
w=B.b([p,C.P,B.ao(B.b([w,C.aV,B.aA(B.fR(D.ad0,D.aFL,o?r:s.gaF4(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pv[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dH(r,C.aw,!1,r,!0,C.n,r,B.dN(),o.h(0,p.a),r,r,r,r,r,2,new B.c_(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,C.eA,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ad,r,C.X,r,r,r,r),C.P],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.q,11,C.l),r,r,r))
p=B.ce(B.ev(B.ac(w,C.a9,r,C.f,C.H,0),r,r,r,C.M),r,380)
o=s.f
w=B.d9(C.c_,r,r,o?r:new A.b4i(d),r,r)
o=o?r:s.gaEN()
t=B.dK(C.m,C.B,r,r,r,r,r)
return B.is(B.b([w,B.dk(s.f?F.YM:C.dw,o,t)],v),C.B,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_s(this.gbD(),e.gbD())
else w=!0
return w},
gA(d){return(B.e8(B.K(this))^B.bLO(this.gbD()))>>>0},
j(d){B.bF0()
return B.K(this).j(0)}}
A.KR.prototype={
W(){return new A.TA(B.z(x.S,x.J),new A.axV(B.z(x.x,x.gF)),null,null)}}
A.TA.prototype={
u(d){var w,v=this,u=v.a1Y(),t=v.CW
t.toString
t=v.a1Z(t.aw(0,v.gh3().gq(0)))
w=v.a1Z(u)
v.a.toString
return new A.KM(new A.a0Z(t,w,null),u,null)},
a1Z(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axS(s.c,s.d,!1,r,s.a))}return d.aQp(w)},
a1Y(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UO(t.ch)
if(r)s=w.a
r=t.y
t=t.aRl(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aQq(A.bwE(!1,!0,!0,v.d,v.c,u.gasD(),v.f,v.e))}return t},
asE(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafZ()||e==null||e.a==null){w=v.cy
v.J(w.gaPN(w))
return}v.J(new A.b4u(v,e))},
m2(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1Y(),new A.b4v(w)))}}
A.o0.prototype={
Vp(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axL(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRl(d,e){return this.Vp(null,null,d,e)},
aQq(d){return this.Vp(null,d,null,null)},
aQp(d){return this.Vp(d,null,null,null)},
Xm(d,e,f){var w,v,u,t=A.kx(d.ch,e.ch,f,A.c4f(),x.dB),s=B.ae(d.CW,e.CW,f),r=A.bF8(d.d,e.d,f),q=A.bH5(d.e,e.e,f),p=A.bF6(d.c,e.c,f),o=e.a
o=A.a5k(B.a1g(d.a.b,o.b,f),o.a)
w=B.ae(d.y,e.y,f)
v=B.ae(d.x,e.x,f)
u=B.ae(d.z,e.z,f)
r=A.axL(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bF2(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axK.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fK.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ad(v,new A.axT(),B.af(v).i("ad<1,F>")).kp(0,new A.axU())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.it.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0W.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a10.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ae1.prototype={
L(){return"TooltipDirection."+this.b}}
A.a11.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dc.prototype={
gbD(){return[this.a,this.b,C.cG,C.w,null]}}
A.KS.prototype={}
A.a12.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xE.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xm(v,w,d)}}
A.ahn.prototype={}
A.ahu.prototype={}
A.ahv.prototype={}
A.ahx.prototype={}
A.ahy.prototype={}
A.ahz.prototype={}
A.ahA.prototype={}
A.ahB.prototype={}
A.ahC.prototype={}
A.axV.prototype={
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uy(0,0,!1)
v=new A.zp(d,x.x)
u=this.a
if(u.aE(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uy(t,u,!0)}w=null
try{w=C.b.qm(d,new A.axW())}catch(s){return new A.uy(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ahw.prototype={}
A.axX.prototype={
ia(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a07(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.acr(t,A.bwD(w,t.a),u)
l.y=u
l.aSH(e,u,f)
l.am6(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSQ(d,e,m,t,r,s,n,o,f)}}},
acr(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e5("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j_(p,B.af(p).i("j_<1>")).aB(0,new A.axY(t,q,r,s))
w.push(new A.a61(q))}return w},
aSH(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
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
a4=B.Q2(h,Math.min(b2.dG(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dG(Math.min(u,a2),b4,b7)
a4=B.Q2(h,a5,g,Math.max(b2.dG(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gq(0)
k.seX(null)
a6=b2.f.e1()
v.drawRRect(B.mG(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dG(f,b4,b7)
e=a8.b
b0=b2.dG(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.bb(v.save())
v.clipRect(B.dO(b1),$.nQ()[1],!0)
a6=b2.f.e1()
v.drawRRect(B.mG(a4),a6)
a6.delete()
v.restore()
b2.aSO(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.am()
k=B.b([],s)
k.push(new B.hj(a4))
n=A.aAY(new B.cl(n.r,C.af,null,null,k),o.r)
a6=b2.r.e1()
k=n.e
v.drawPath((k==null?n.e=new B.mQ(n.gju().a.snapshot()):k).a,a6)
a6.delete()}}}},
aSQ(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.B4(a5,a5,a5,a5,B.dj(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lD().a_8(a8,a7.b),a7.a),C.cG,C.w,a5,b6.c,C.by)
w.agh(b1.f)
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
if(v!==D.aIz)j=v===D.Zx&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_9(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.FU(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lD().Ku(new B.I(v,t),d).b
s=$.lD()
q=w.b
p=q.c
q=q.a.c
a0=s.Ku(new B.I(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gait()
a1=b1.Q
if(!a1.k(0,C.L)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.W1(d,new A.axZ(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.I(v,t))},
aSO(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gel(w)===0}else w=!0
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
q=B.Q2(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a3:new B.aV(i.z,i.Q)
p=v?C.a3:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a3
q=B.Q2(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a3)}else q=B.byB(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eS(q,n.r)},
WE(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.acr(b2,A.bwD(a8,b2.a),a8.ch)
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
break}++a3}return new A.a12(d,q,a0,o,a2,a1,new A.eB(d.a,v),new B.r(n,t))}}return null}}
A.a61.prototype={}
A.a0Z.prototype={
bk(d){var w,v=this.e,u=B.bF(d,null,x.w).w.gcP(),t=new A.axX()
t.a1g()
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
t=new A.aba(this.d,v,u,t,d,C.bs,new B.bs(),B.aM(x.g))
t.bj()
t.Z_(v.cy)
t.afs()
return t},
bz(d,e){e.sil(0,this.d)
e.sYK(this.e)
e.scP(B.bF(d,null,x.w).w.gcP())
e.B=d
e.bb()}}
A.aba.prototype={
sil(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bb()},
sYK(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0Q(d.cy)
w.bb()},
scP(d){if(this.d1.k(0,d))return
this.d1=d
this.bb()},
aR(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.bb(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1t(t,v),new A.vE(u.aC,u.i4,u.d1,x.Q))
s.restore()},
a_1(d){var w=this,v=w.gC(0)
return new A.KS(w.fX.WE(d,v,new A.vE(w.aC,w.i4,w.d1,x.Q)))}}
A.a0P.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Db.prototype={
L(){return"AxisSide."+this.b}}
A.ty.prototype={}
A.qg.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acC.prototype={
gbD(){return[!1,0,0,0]}}
A.pm.prototype={
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
A.pJ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ae3.prototype={
gbD(){return[this.a,this.b]}}
A.Q6.prototype={
gbD(){return[this.a,this.b]}}
A.n4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nx.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kU.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lk.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6c.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aep.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MR.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uV.prototype={}
A.MY.prototype={
adT(d,e,f){var w,v
$.am()
w=B.aY()
v=this.a
w.r=v.gq(v)
w.b=C.bd
d.iR(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahi.prototype={}
A.ahm.prototype={}
A.aku.prototype={}
A.akN.prototype={}
A.akO.prototype={}
A.akQ.prototype={}
A.akR.prototype={}
A.alE.prototype={}
A.alD.prototype={}
A.alF.prototype={}
A.apa.prototype={}
A.ar2.prototype={}
A.ar3.prototype={}
A.asH.prototype={}
A.atm.prototype={}
A.atl.prototype={}
A.atn.prototype={}
A.axz.prototype={
MC(d,e,f,g,h,i){return new B.ip(this.aWw(d,e,f,g,h,i),x.g4)},
aWv(d,e,f,g){return this.MC(d,e,f,!0,g,!0)},
aWw(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MC(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lD().ajG(s,u,v,w)
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
A.KL.prototype={
a1g(){var w,v=this
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
w.a08(d,e,f)
w.aSD(e,f)
w.aSN(e,f)
w.aSM(e,f)},
aSM(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lD().OE(w.a,a1.r-a1.f)
u=$.bvD().MC(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fk(u.a(),u.$ti.i("fk<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fe(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.la(n,m)
if(j!=null){p.r=C.E.gq(0)
p.seX(j.nJ(0,i))}else{if(k==null)k=C.F
p.r=k.gq(k)
p.seX(a0)}k=l.c
p.c=k
if(k===0){p.seX(a0)
k=B.c0(p.r)
p.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}a3.DF(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lD().OE(w.b,a1.y-a1.x)
u=$.bvD().MC(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.la(n,m)
if(k!=null){q.r=C.E.gq(0)
q.seX(k.nJ(0,i))}else{if(p==null)p=C.F
q.r=p.gq(p)
q.seX(a0)}p=f.c
q.c=p
if(p===0){q.seX(a0)
p=B.c0(q.r)
q.r=B.aC(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gq(0)}a3.DF(n,m,d.a,f.d)}},
aSD(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hb(new B.H(0,0,0+w.a,0+w.b),this.b)},
aSN(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.G)(k),++u){t=k[u]
s=B.la(new B.r(n.fe(t.a,m,e),0),new B.r(n.fe(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.seX(p.nJ(0,s))}else{r.r=(q==null?C.F:q).gq(0)
r.seX(null)}o=n.e.e1()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.G)(l),++u){t=l[u]
s=B.la(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gq(0)
v.seX(q.nJ(0,s))}else{v.r=(r==null?C.F:r).gq(0)
v.seX(null)}o=n.e.e1()
j.drawRect(B.dO(s),o)
o.delete()}},
aSL(d,e,f){var w,v
this.a08(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adU(d,e,f,w)
if(v.b.length!==0)this.aSS(d,e,f,w)},
adU(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
n.seX(j.nJ(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c0(n.r)
n.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
e.DF(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eJ(0,2)
g=C.d.an(o,n.gbT(n).eJ(0,2))
J.bb(r.save())
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
h=n.gds(n).eJ(0,2)
o=C.d.an(o,n.gbT(n).eJ(0,2))
k=f.d
k===$&&B.a()
s.adV(0,n,new B.r(h,o),k)}}},
aSS(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=d.fe(o,a3,a2)
m=new B.r(n,0)
o=d.fe(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.la(m,l)
if(j!=null){n.r=C.E.gq(0)
n.seX(j.nJ(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.seX(null)}k=p.c
n.c=k
if(k===0){n.seX(null)
k=B.c0(n.r)
n.r=B.aC(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
a1.DF(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eJ(0,2)
g=n.gbT(n).eJ(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.bb(r.save())
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
h=n.gds(n).eJ(0,2)
g=n.gbT(n).ad(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.adV(0,n,new B.r(o,k),j)}}},
fe(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_9(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KM.prototype={
galr(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gals(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
galu(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
galp(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alM(d){var w,v=this,u=null,t=v.d,s=A.bxq(t.d),r=t.a
r=r.a&&A.bRf(r.b)?r.b:u
w=B.b([B.bf(u,v.c,C.t,u,u,new B.b4(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.axB(w)
if(v.galr())C.b.hv(w,s.$1(!0),new A.AR(D.B7,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galu())C.b.hv(w,s.$1(!0),new A.AR(D.mG,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.gals())C.b.hv(w,s.$1(!0),new A.AR(D.B8,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
if(v.galp())C.b.hv(w,s.$1(!0),new A.AR(D.dP,t,new B.I(B.P(1/0,d.a,d.b),B.P(1/0,d.c,d.d)),u))
return w},
u(d){return B.iZ(new A.axA(this))}}
A.Rx.prototype={
W(){return new A.Y5(new B.bl(null,x.eF))}}
A.Y5.prototype={
aye(){switch(this.a.c.a){case 0:return C.fJ
case 1:return C.eh
case 2:return C.dy
case 3:return C.dM}},
ayK(){switch(this.a.c.a){case 0:return new B.ak(0,0,8,0)
case 1:return new B.ak(0,0,0,8)
case 2:return new B.ak(8,0,0,0)
case 3:return new B.ak(0,8,0,0)}},
ayg(d){this.a.toString
return},
av(){this.aL()
$.cB.x1$.push(this.ga4w())},
bd(d){this.bG(d)
$.cB.x1$.push(this.ga4w())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayK()
return B.SK(B.b1J(0,B.bf(v.aye(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.r)}}
A.acD.prototype={
bk(d){return A.bR6(this.f,this.r,this.e)},
bz(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a0Q.prototype={
hk(d){if(!(d.b instanceof B.hr))d.b=new B.hr(null,null,C.r)},
hX(d){if(this.B===C.ay)return this.ye(d)
return this.adx(d)},
aLo(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9g(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a9f(d,B.hG())
switch(this.B.a){case 0:return d.c2(new B.I(w.a,w.b))
case 1:return d.c2(new B.I(w.b,w.a))}},
a9f(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h2(u,null)
break
case 1:q=B.h2(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9g(p)
t=Math.max(t,o.aLo(p))
m=r.aH$}return new A.bg0(n<1/0?n:s,t)},
cA(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9f(o,B.mF()),m=n.a,l=n.b
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
q=s.b-p.a9g(r==null?B.U(B.a_("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c8(w))):r)/2
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
this.aoI()}}
A.bg0.prototype={}
A.axC.prototype={}
A.jT.prototype={
gbD(){return[this.a,this.b]}}
A.o_.prototype={}
A.ahj.prototype={}
A.ahk.prototype={
aM(d){var w,v,u
this.fq(d)
w=this.ag$
for(v=x.L;w!=null;){w.aM(d)
u=w.b
u.toString
w=v.a(u).aH$}},
aF(d){var w,v,u
this.fi(0)
w=this.ag$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aH$}}}
A.ahl.prototype={}
A.Tx.prototype={
l(){var w,v,u
for(w=this.We$,v=w.length,u=0;u<v;++u)w[u].l()
this.iv()}}
A.AR.prototype={
goF(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghI(){switch(this.c.a){case 0:return C.dy
case 1:return C.dM
case 2:return C.fJ
case 3:return C.eh}},
gb0c(){var w=this.d,v=A.bxq(w.d),u=A.bF5(w.a)
switch(this.c.a){case 2:case 0:return new B.ak(0,v.b,0,v.d).ad(0,new B.ak(0,u.b,0,u.d))
case 1:case 3:return new B.ak(v.a,0,v.c,0).ad(0,new B.ak(u.a,0,u.c,0))}},
gaif(){var w=this.d,v=A.bF5(w.a),u=A.bxq(w.d)
switch(this.c.a){case 2:case 0:return u.gd3(0)+u.gd6(0)+(v.gd3(0)+v.gd6(0))
case 1:case 3:return u.gey()+v.gey()}},
aXf(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goF().c.d
if(o==null)o=$.lD().OE(d,f-e)
w=p.c
v=w!==D.mG
if((!v||w===D.dP)&&p.d instanceof A.o0){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bwD(u,d)
w=new B.j_(t,B.af(t).i("j_<1>"))
s=w.ghZ(w).eP(0,new A.aZI(u),x.W).fM(0)}else{r=$.bvD()
w=!v||w===D.dP
v=p.d
q=r.aWv(w?v.w:v.z,o,f,e)
v=B.na(q,new A.aZJ(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.af(s).i("ad<1,o_>")
w=B.Q(new B.ad(s,new A.aZK(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goF()
w=j.goF()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.bf(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mG
u=!v
t=!u||w===D.dP
s=j.e
r=t?s.a:s.b
t=j.ghI()
s=!u||w===D.dP?C.M:C.ay
q=B.b([],x.p)
if(w===D.B7||v)j.goF()
if(j.goF().c.a){v=!u||w===D.dP?r:j.goF().c.c
p=!u||w===D.dP?j.goF().c.c:r
o=j.gb0c()
n=!u||w===D.dP?C.ay:C.M
j.gaif()
m=j.gaif()
l=!u||w===D.dP
k=j.d
l=l?k.f:k.x
u=!u||w===D.dP?k.r:k.y
q.push(B.bf(i,A.bYr(new A.axC(),n,j.aXf(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B8||w===D.dP)j.goF()
return new B.eO(t,i,i,B.bTX(q,C.k,s,i,C.f,C.H,0,i,i,C.bz),i)}}
A.a14.prototype={
gbD(){return[this.a,this.b]}}
A.a5j.prototype={
gbD(){return[this.a,this.b]}}
A.N4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5l.prototype={
gabK(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ay7.prototype={}
A.aEs.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahF.prototype={}
A.akK.prototype={}
A.akL.prototype={}
A.akS.prototype={}
A.KV.prototype={
ia(d,e,f){}}
A.vE.prototype={}
A.hq.prototype={
gdN(){return null},
gafZ(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.N3
if(w)return!0
return!(v instanceof A.N0)&&!(v instanceof A.N_)&&!(v instanceof A.N1)&&!(v instanceof A.MZ)&&!w&&!(v instanceof A.N2)}}
A.a5p.prototype={
gdN(){return this.a.b}}
A.a5q.prototype={
gdN(){return this.a.b}}
A.a5r.prototype={
gdN(){return this.a.b}}
A.N_.prototype={}
A.N0.prototype={}
A.a5u.prototype={
gdN(){return this.a.b}}
A.N2.prototype={}
A.N3.prototype={
gdN(){return this.a.b}}
A.a5o.prototype={
gdN(){return this.a.b}}
A.a5n.prototype={
gdN(){return this.a.b}}
A.MZ.prototype={
gdN(){return this.a.b}}
A.a5s.prototype={
gdN(){return this.a.gdN()}}
A.a5t.prototype={
gdN(){return this.a.gdN()}}
A.N1.prototype={
gdN(){return this.a.gdN()}}
A.G5.prototype={
Z_(d){this.U=d.b
this.V=d.c
this.a3=d.d},
afs(){var w=this,v=null,u=w.ak=B.byg(v,v)
u.ay=new A.aUR(w)
u.ch=new A.aUS(w)
u.CW=new A.aUT(w)
u.cy=new A.aUU(w)
u.cx=new A.aUV(w)
u=w.aG=B.GV(v,-1,v)
u.B=new A.aUW(w)
u.a4=new A.aUX(w)
u.U=new A.aUY(w)
u=w.bx=B.a7l(v,w.a3,v)
u.p3=new A.aUZ(w)
u.p4=new A.aV_(w)
u.RG=new A.aV0(w)},
cA(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.I(w.b,w.d)},
dD(d){return new B.I(d.b,d.d)},
kJ(d){return!0},
mU(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bx
w===$&&B.a()
w.oD(d)
w=v.aG
w===$&&B.a()
w.oD(d)
w=v.ak
w===$&&B.a()
w.oD(d)}else if(x.gJ.b(d))v.l9(new A.a5t(d))},
gN4(d){return new A.aV1(this)},
gN6(d){return new A.aV2(this)},
l9(d){var w,v,u=this
if(u.U==null)return
w=d.gdN()
v=w!=null?u.a_1(w):null
u.U.$2(d,v)
u.a4=C.bs},
gKW(d){return this.a4},
gFz(){var w=this.ar
w===$&&B.a()
return w},
aM(d){this.fq(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijz:1}
A.Oq.prototype={
W(){return new A.VU(B.b([],x.r),B.z(x.S,x.J),new A.aKG(B.z(x.y,x.dj)),null,null)}}
A.VU.prototype={
u(d){var w,v=this,u=v.a4y(),t=v.CW
t.toString
t=v.abg(t.aw(0,v.gh3().gq(0)))
w=v.abg(u)
v.a.toString
return new A.KM(new A.a7c(t,w,null),u,null)},
abg(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.af(w).i("ad<1,ec>")
w=B.Q(new B.ad(w,new A.bg5(this,d),v),v.i("aw.E"))
return d.aRi(w,this.cy)},
a4y(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UO(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aRx(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQW(new A.EW(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gazz(),t.c,t.d))}return r},
azA(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafZ())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bg3(v))
return}v.J(new A.bg4(v,e))},
m2(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4y(),new A.bg6(w)))}}
A.pV.prototype={
Xm(d,e,f){var w,v,u,t,s,r,q=B.ae(d.f,e.f,f),p=B.ae(d.r,e.r,f),o=B.ae(d.w,e.w,f),n=B.ae(d.x,e.x,f),m=B.ae(d.y,e.y,f),l=B.ae(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5k(B.a1g(d.a.b,j.b,f),j.a)
w=A.bF2(d.at,e.at,f)
v=A.bF6(d.c,e.c,f)
u=A.bF8(d.d,e.d,f)
t=A.bH5(d.e,e.e,f)
s=A.kx(d.ch,e.ch,f,A.c6m(),x.cz)
s.toString
r=A.kx(d.CW,e.CW,f,A.c6l(),x.bO)
r.toString
u=A.bxU(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vq(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bxU(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aRx(d,e,f,g){return this.Vq(null,null,d,e,f,g,null)},
aQW(d){var w=null
return this.Vq(w,d,w,w,w,w,w)},
aRi(d,e){var w=null
return this.Vq(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ec.prototype={
ark(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qm(n.a,new A.aKF())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
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
ada(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKE(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aR2(d){return this.ada(d,null)},
aR4(d){return this.ada(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Or.prototype={
gbD(){return[this.a]}}
A.a0Y.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mM.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KQ.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yv.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKu.prototype={
L(){return"LabelDirection."+this.b}}
A.a5m.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EW.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7d.prototype={
gbD(){return[4,C.hX,16,D.xH,0,120,A.c6o(),!1,!1,!1,0,C.L,A.c6n()]}}
A.n9.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qo.prototype={}
A.rB.prototype={
gbD(){return[this.a,this.b,C.cG,C.w,null]}}
A.tz.prototype={
gbD(){return[this.a,this.b]}}
A.Gx.prototype={
gbD(){return[this.a]}}
A.Os.prototype={}
A.zj.prototype={
hf(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xm(v,w,d)}}
A.ahs.prototype={}
A.aht.prototype={}
A.ahG.prototype={}
A.akM.prototype={}
A.akP.prototype={}
A.amv.prototype={}
A.amw.prototype={}
A.amx.prototype={}
A.amz.prototype={}
A.amA.prototype={}
A.amB.prototype={}
A.amC.prototype={}
A.ar1.prototype={}
A.asG.prototype={}
A.aKG.prototype={
UO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.ye
u=new A.zp(d,x.y)
t=this.a
if(t.aE(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zk(s,r,q,t,!0)}w=null
try{w=C.b.qm(d,new A.aKH())}catch(p){return D.ye}v=null
try{v=C.b.qm(w.a,new A.aKI())}catch(p){return D.ye}o=v.a
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
A.amy.prototype={}
A.aKJ.prototype={
ia(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabK(0)){v=a3.b
u=v.a
v=v.b
$.am()
a3.a.jq(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aY())
a3.aPU(new B.H(0,0,u,v))}d.a07(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aSJ(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aSF(a3,q,a4)
d.aSK(a3,q,a4)
d.am5(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.V(o)
if(n.gp(o)!==p.length)throw B.e(B.e5("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vp(q,i,j,k))}}d.aSR(a3,s,a4)
if(w.gabK(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSP(a2,a3,v,f,new A.Gx(g),a4)}},
aSF(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxp(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.ZB(o,e,u,f)
s=p.ajx(o,e,t,u,f)
r=p.ZD(o,e,t,u,f,!0)
q=p.ajw(o,e,t,u,f)
p.aSI(d,s,p.ZA(o,e,t,u,f,!0),f,e)
p.aSC(d,q,r,f,e)
p.aSG(d,t,e)
p.aSE(d,t,e,f)}},
aSJ(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bxp(a5.a),a8=A.bxp(a6.a)
if(a7.length!==a8.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bS.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.af(n).i("cA<1>")
l=B.Q(new B.cA(n,m),m.i("aw.E"))
k=a2.ZB(a3,a5,o,b2)
j=a2.ZC(a3,a6.aR4(l),l,b2,k)
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
n=a2.fe(i,a3,b2)
m=a2.dG(h,a3,b2)
e=a2.fe(g,a3,b2)
d=a2.dG(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gq(0)
a0.seX(v.nJ(0,new B.H(n,m,e,d)))}else{a0.r=(r?C.F:w).gq(0)
a0.seX(null)}$.am()
a1=new B.mP(C.dA,C.bd,C.ea,C.ez,C.dX).e1()
n=B.dO(new B.H(0,0,t,s))
m=$.bS.b
if(m===$.bS)B.U(B.vn(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e1()
n=j.e
a4.drawPath((n==null?j.e=new B.mQ(j.gju().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aSK(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.ZH(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.fe(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adT(s,q,new B.r(p,o))}}},
aSR(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fR(b3,new A.aKM())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.ZH(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fe(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.ct()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rA(d.a))
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
f.seX(a6.nJ(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gq(a4)
f.seX(null)}a4=a9.c
f.c=a4
if(a4===0){f.seX(null)
a4=B.c0(f.r)
f.r=B.aC(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gq(0)}b2.DF(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rA(d.a))
f.adT(t,j,new B.r(h,g))}}},
ZC(d,e,f,g,h){var w=this.ajy(d,e,f,g,h)
return w},
ZB(d,e,f,g){return this.ZC(d,e,f,g,null)},
ajy(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.am().r,C.af,null,null,B.b([],x.v)):a5,f=J.V(a3),e=f.gp(a3),d=i.fe(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aq(new B.fg(d,a0))
if(e===1)g.aq(new B.ca(d,a0))}else g.aq(new B.ca(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.r,t=1;t<e;t=o,u=j){s=i.fe(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fe(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fe(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LT(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iC(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
ZD(d,e,f,g,h,i){var w=this,v=B.ML(f),u=J.V(g),t=w.fe(u.h(g,u.gp(g)-1).a,d,h),s=d.b
v.aq(new B.ca(t,s))
t=w.fe(u.h(g,0).a,d,h)
v.aq(new B.ca(t,s))
v.aq(new B.ca(w.fe(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.aq(new B.o4())
return v},
ajx(d,e,f,g,h){return this.ZD(d,e,f,g,h,!1)},
ZA(d,e,f,g,h,i){var w=this,v=B.ML(f),u=J.V(g),t=w.fe(u.h(g,u.gp(g)-1).a,d,h)
v.aq(new B.ca(t,0))
t=w.fe(u.h(g,0).a,d,h)
v.aq(new B.ca(t,0))
v.aq(new B.ca(w.fe(u.h(g,0).a,d,h),w.dG(u.h(g,0).b,d,h)))
v.aq(new B.o4())
return v},
ajw(d,e,f,g,h){return this.ZA(d,e,f,g,h,!1)},
aSI(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fe(t.a,w,g)
s=r.r
s===$&&B.a()
A.byf(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.hK(e,r.r)},
aSC(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fe(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fe(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.byf(s,q.b,q.c,new B.H(v,0,u,t))
d.a.hK(e,r.r)},
aSG(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MN(B.ML(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.kb:C.ea
u.e=C.ez
u.r=v.gq(0)
u.seX(null)
u.c=f.x
u.r=v.gq(0)
$.lD()
u.z=new B.zv(C.aK,w.c*0.57735+0.5)
d.a.hK(A.aAY(e,f.cy).e7(w.b),this.f)},
aSE(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.kb:C.ea
q.e=C.ez
q=f.b
q===$&&B.a()
q=s.fe(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fe(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.byf(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bWl(t)
d.a.hK(A.aAY(e,f.cy),s.f)},
aSP(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLh(b1),b3=J.V(b2)
if(b3.gp(b2)!==b1.length)throw B.e(B.e5("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lD().a_8(b4,u.b)
s=u.a
r=w.k(0,C.iZ)?new B.kp(1):w
q=new B.tv(new B.hV(s,a8,a8,C.bs,a8,a8,a8,a8,a8,a8,t),C.cG,C.w,r,a8,a8,a8,a8,C.by,a8)
q.agh(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.G)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fe(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hX.gey()
k=o+(w-1)*4+(C.hX.gd3(0)+C.hX.gd6(0))
j=t-k-16
i=a7.a_9(b3,l,D.xH,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.FU(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLg(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lD().Ku(new B.I(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lD().Ku(new B.I(t,w),0)
if(!C.L.k(0,C.L)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.W1(0,new A.aKK(a7,b5,g),a0,d,new B.I(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.G)(b0),++n){q=b0[n]
a5=A.bZ1(q.r,q.w)
A:{if(D.E8===a5){a6=a3
break A}if(D.E9===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.W1(0,new A.aKL(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.I(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
ZH(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fe(v[0].a,e,f)
return this.fe(v[v.length-1].a,e,f)-w},
WE(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajZ(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fR(t,new A.aKN())
return t.length===0?null:t},
ajZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.fe(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hv(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qo(s,f,g,C.b.hu(w,v),v.a,v.b)}else return null}}
A.vp.prototype={}
A.a7c.prototype={
bk(d){var w,v=this.e,u=B.bF(d,null,x.w).w.gcP(),t=new A.aKJ()
t.a1g()
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
t=new A.abn(this.d,v,u,t,d,C.bs,new B.bs(),B.aM(x.g))
t.bj()
t.Z_(v.cx)
t.afs()
return t},
bz(d,e){e.sil(0,this.d)
e.sYK(this.e)
e.scP(B.bF(d,null,x.w).w.gcP())
e.B=d
e.bb()}}
A.abn.prototype={
sil(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bb()},
sYK(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0Q(d.cx)
w.bb()},
scP(d){if(this.d1.k(0,d))return
this.d1=d
this.bb()},
aR(d,e){var w,v,u=this,t=d.gdv(0),s=t.a
J.bb(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1t(t,v),new A.vE(u.aC,u.i4,u.d1,x.o))
s.restore()},
a_1(d){var w=this,v=w.gC(0)
return new A.Os(w.fX.WE(d,v,new A.vE(w.aC,w.i4,w.d1,x.o)))}}
A.Nu.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1t.prototype={
aPU(d){this.a.a.clipRect(B.dO(d),$.nQ()[1],!0)
return null},
ae0(d,e){d.aR(this.a,e)},
W1(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bb(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lD()
s.YI(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DF(d,e,f,g){var w=new B.cl($.am().r,C.af,null,null,B.b([],x.v))
w.aq(new B.fg(d.a,d.b))
w.aq(new B.ca(e.a,e.b))
this.a.hK(A.aAY(w,g),f)}}
A.zp.prototype={
gbD(){return[this.a]}}
A.amJ.prototype={}
A.a1E.prototype={}
A.b2a.prototype={
Ku(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aXQ(d,e){var w,v,u,t,s
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
aXR(d,e){var w,v
if(d==null)return D.a0c
w=d.b
v=e/2
return d.aR7(w>v?v:w)},
OE(d,e){var w,v=Math.max(C.d.cE(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_Y(w)},
b_Y(d){if(d<1)return this.aJT(d)
return this.a8j(d)},
aJT(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8j(d*q)/q},
a8j(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aO(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajO(d){if(d>=1)return 1
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
a_8(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.j5
w=e.a?u.w.c3(e):e
v=B.bN(d,C.vo)
v=v==null?null:v.ay
return v===!0?w.c3(C.mm):w},
ajG(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qq)","A(eB)","~(u,fK)","F(ec,u)","R<~>()","F(F,qq)","bV(F,ty)","pJ(F)","u(qo,qo)","Ik(oi)","I0(C,bJ)","Ji(oj)","vt(@)","wo(@)","ec(F)","CV(@)","ab(F,ty)","uU(dl<uU>)","Ek(dl<aFh>)","F(vt)","F(wo)","wI(C,bJ)","Bn(y)","~()","qq(@)","~(hq,KS?)","xE(@)","F(it)","A(fK)","~(u,it)","~(@)","jT(o_)","c(o_)","jT(bt<u,F>)","jT(F)","o_(jT)","~(hq,Os?)","ec(ec)","lQ(GJ<lQ>)","zj(@)","R<oj>(ck<oj>)","tz(u)","uV(eB,F,ec,u)","rB(n9)","A(ec)","u(vp,vp)","F(fK)","R<oi>(ck<oi>)","u(u,u,F)","fK(fK,fK,F)","it(it,it,F)","mL(mL,mL,F)","Dc?(fK,u,it,u)","E(fK)","c(F,ty)","eB(eB,eB,F)","A(F)","n4(n4,n4,F)","nx(nx,nx,F)","kU(kU,kU,F)","lk(lk,lk,F)","f(kU)","f(lk)","ec(ec,ec,F)","mM(mM,mM,F)","uV(eB,F,ec,u{size:F?})","A(eB,ec)","F(r,r)","v<tz>(ec,v<u>)","y6(y)","v<rB>(v<n9>)","E(n9)","yt(f4<C?>)"])
A.aFd.prototype={
$1(d){var w=B.dh(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qq(J.al(v==null?"":v),A.pb(w.h(0,"revenue_net")),A.pb(w.h(0,"expense_net")),A.pb(w.h(0,"result_net")))},
$S:z+24}
A.aFe.prototype={
$1(d){var w,v,u,t=B.dh(x.f.a(d),x.N,x.z),s=B.aj(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.aj(t.h(0,"code"))
v=A.pb(t.h(0,"gross"))
u=B.b3(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vt(s,r,w,v,u,A.pb(t.h(0,"avg_basket")))},
$S:z+12}
A.aFf.prototype={
$1(d){var w,v=B.dh(x.f.a(d),x.N,x.z),u=B.aj(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.b3(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wo(u,t,w,A.pb(v.h(0,"gross")))},
$S:z+13}
A.aFw.prototype={
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
A.btj.prototype={
$1(d){return new A.uU(d.ao($.bL(),x.A))},
$S:z+17}
A.btk.prototype={
$1(d){return new A.Ek(d.ao($.bPY(),x.D))},
$S:z+18}
A.bv9.prototype={
$1(d){return E.aFg()},
$S:z+38}
A.btl.prototype={
$1(d){var w=d.ao($.xo(),x.P)
return d.ao($.avP(),x.a).G0(w)},
$S:z+40}
A.bti.prototype={
$1(d){var w=d.ao($.xo(),x.P)
return d.ao($.avP(),x.a).FW(w)},
$S:z+47}
A.bth.prototype={
$1(d){return this.ajl(d)},
ajl(d){var w=0,v=B.q(x.h),u,t,s,r,q
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
A.aFc.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aD(0,$.avP(),x.a).pF(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFb.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aD(0,$.avP(),x.a).Ly(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFu.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bw8()
if(s.e==null)B.U(B.a_(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFm.prototype={
$0(){return this.a.Ju(this.b,this.c)},
$S:0}
A.aFn.prototype={
$0(){return this.a.Bq(this.b,this.c)},
$S:0}
A.aFo.prototype={
$0(){var w=x.z
return B.b5(this.a,!1).ep(B.eF(new A.aFl(),null,w),w)},
$S:0}
A.aFl.prototype={
$1(d){return F.D4},
$S:z+69}
A.aFp.prototype={
$0(){return B.oo(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFq.prototype={
$0(){var w=this
return w.a.Br(w.b,w.c,w.d)},
$S:0}
A.aFt.prototype={
$0(){return F.Ti},
$S:135}
A.aFs.prototype={
$2(d,e){return new A.I0(B.i(d),null)},
$S:z+10}
A.aFr.prototype={
$1(d){return new A.Ji(d,null)},
$S:z+11}
A.aFk.prototype={
$1(d){var w=null,v=this.a,u=$.dp()
v=B.j("Die Finanzauswertung f\xfcr "+u.al(v.a)+" \u2013 "+u.al(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.is(B.b([B.d9(C.c_,w,w,new A.aFi(u),w,w),B.dk(F.mn,new A.aFj(u),B.dK(C.m,C.B,w,w,w,w,w))],x.p),w,v,F.mo)},
$S:45}
A.aFi.prototype={
$0(){B.b5(this.a,!1).cC(!1)
return null},
$S:0}
A.aFj.prototype={
$0(){B.b5(this.a,!1).cC(!0)
return null},
$S:0}
A.biz.prototype={
$0(){var w=this.a.aD(0,$.xo().ghP(),x.V),v=E.aFg()
w.wF(0,v)
return v},
$S:0}
A.biA.prototype={
$0(){var w=this.a.aD(0,$.xo().ghP(),x.V),v=new B.aZ(Date.now(),0,!1),u=new E.lQ(B.bB(B.aU(v),1,1,0,0,0,0),v)
w.wF(0,u)
return u},
$S:0}
A.biB.prototype={
$0(){return this.a.IQ(this.b,this.c)},
$S:0}
A.biy.prototype={
$2(d,e){return new B.oS(B.W(d).aQt(B.W(d).ax.aRn(C.j,C.m)),e,null)},
$S:1013}
A.bou.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.d2(),s=A.Oe(!1,C.nX,"Umsatz 7 %",t.al(u.a),w),r=A.Oe(!1,C.nX,"Umsatz 19 %",t.al(u.b),w),q=A.Oe(!0,D.aal,"Umsatz netto",t.al(u.c),w),p=A.Oe(!1,D.aak,"Aufwand",t.al(u.d),w),o=u.e,n=t.al(o)
return B.a60(1.7,B.b([s,r,q,p,A.Oe(!0,C.xV,"Ergebnis",n,o<0?C.ak:C.aE),A.Oe(!1,C.fR,"USt-Saldo",t.al(u.f-u.r),w)],x.p),v,12,12,C.jT,!0)},
$S:101}
A.aKt.prototype={
$0(){return D.aua},
$S:135}
A.aKs.prototype={
$2(d,e){var w=null
return B.by(C.ak,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.j,13,C.l),w,w,w),C.eJ,w,C.D,w,3)},
$S:290}
A.aKr.prototype={
$1(d){return new A.Ik(d,null)},
$S:z+9}
A.bfS.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.d2(),i=j.al(k.c),h=l.w,g=l.d,f=B.af(g).i("ad<1,F>"),e=f.i("aw.E"),d=B.Q(new B.ad(g,new A.bfH(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.al(r.b)
w=B.Q(new B.ad(g,new A.bfI(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.al(k.e)
w=B.Q(new B.ad(g,new A.bfJ(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ae(h.b,1)
v=B.Q(new B.ad(g,new A.bfK(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ae(h.a,1)
u=B.Q(new B.ad(g,new A.bfL(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ae(r.c,1)
t=B.Q(new B.ad(g,new A.bfM(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ae(h.c,1)
s=B.Q(new B.ad(g,new A.bfN(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.al(h.d)
s=B.Q(new B.ad(g,new A.bfO(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.al(l.r.d)
m=B.Q(new B.ad(g,new A.bfP(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.al(l)
l=B.Q(new B.ad(g,new A.bfQ(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ae(j,1)
j=B.Q(new B.ad(g,new A.bfR(j),f),e)
return B.a60(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jT,!0)},
$S:101}
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
$0(){return A.bAh(this.b,1.45,new A.TW(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfU.prototype={
$0(){return A.bAh(this.b,1.6,new A.U6(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bss.prototype={
$1(d){var w=this,v=null,u=B.aR(16),t=x.p,s=B.b([B.ao(B.b([B.aA(B.j(w.a,v,v,v,B.c3(C.j,18,C.p),v,v,v),1),B.fO(v,v,D.ad3,v,v,new A.bsr(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.K(s,B.b([B.j(w.b,v,v,v,B.D(C.q,12,C.aI),v,v,v),C.P],t))
s.push(C.v)
s.push(B.ce(new B.mK(w.c,w.d,v),v,17976931348623157e292))
return B.a4z(v,C.B,new B.ah(C.aj,B.ac(s,C.C,v,C.f,C.H,0),v),v,v,v,C.fs,C.uN,v,new B.dc(u,C.L),v)},
$S:1014}
A.bsr.prototype={
$0(){return B.b5(this.a,!1).fd()},
$S:0}
A.bfV.prototype={
$0(){var w=this.a,v=B.ax(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAh(this.b,2.4,new A.Yg(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bo0.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.bo1.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bo2.prototype={
$1(d){return A.aKE(null,1.4,null,C.ak,0.35,D.agY,D.DZ,null,!1,!1,!1,!1,D.Fw,!1,10,D.Yf,!0,C.ly,B.b([new A.eB(0,d),new A.eB(this.a,d)],x.U))},
$S:z+14}
A.b5V.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5X.prototype={
$2(d,e){var w=null
return B.j(this.a.aLd(d),w,w,w,B.D(C.q,10,C.S),w,w,w)},
$S:z+16}
A.b5Y.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.A6
return new B.ah(C.hW,B.j(C.c.cQ(this.a[v].a,5),w,w,w,B.D(C.q,9,C.S),w,w,w),w)},
$S:z+6}
A.b5W.prototype={
$1(d){return D.a8S},
$S:z+7}
A.b6L.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6M.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6N.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b6O.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.A6
return new B.ah(C.hW,B.j(this.a[v],w,w,w,B.D(C.j,12,C.p),w,w,w),w)},
$S:z+6}
A.bgp.prototype={
$1(d){return d.d},
$S:z+19}
A.bgq.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bpL.prototype={
$1(d){return d.d},
$S:z+20}
A.bpM.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b4r.prototype={
$0(){return D.auh},
$S:135}
A.b4q.prototype={
$2(d,e){return new A.wI("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b4p.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.ac(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.D(C.j,14,C.S),m,m,m),C.P,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.D(C.q,12.5,C.l),m,m,m),C.v,B.ll(C.cx,B.b([B.fR(C.EY,D.aI_,new A.b4j(w,v),m),B.fR(D.ac6,D.aGO,new A.b4k(w,v),m)],u),C.dK,8,8)],u),C.C,m,C.f,C.h,0),C.ae,m,C.D,m,3)}w=new A.b4s(d)
t=C.b.fA(n.a.e.d,0,new A.b4l())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.iZ(new A.b4m(new A.b4t(w),r,w,s))
v=J.V(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ac(B.b([w,C.P,B.ao(B.b([B.aA(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.D(C.q,11,C.l),m,m,m),1),B.nr(D.adh,D.aHb,new A.b4n(q,p),m),B.nr(D.acT,D.aGX,new A.b4o(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.a9,m,C.f,C.h,0)},
$S:276}
A.b4j.prototype={
$0(){return A.avd(this.a,this.b,null)},
$S:0}
A.b4k.prototype={
$0(){return A.ava(this.a,this.b)},
$S:0}
A.b4s.prototype={
$1(d){var w=B.b3(J.Z(this.a,d))
return w==null?null:w},
$S:1015}
A.b4t.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ae(v,1)
w=B.ax(w,".",",")+" %"}return w},
$S:33}
A.b4l.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4m.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i9,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i9,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i9,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i9,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ae(w,1)
w=B.ax(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i9,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.d2()
v=u.al(v)
return B.a60(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.al(t.d),s,s,s,C.i9,v)],x.p),q,12,12,C.jT,!0)},
$S:101}
A.b4n.prototype={
$0(){return A.ava(this.a,this.b)},
$S:0}
A.b4o.prototype={
$0(){return A.avd(this.a,this.b,this.c)},
$S:0}
A.bsq.prototype={
$1(d){return new A.Bn(this.a,new A.bsp(this.b),this.c,null)},
$S:z+22}
A.bsp.prototype={
$0(){var w=this.a,v=$.bw7()
if(w.e==null)B.U(B.a_(y.b))
w.gcv().cs(v)},
$S:0}
A.b4d.prototype={
$0(){},
$S:0}
A.b4e.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4f.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4h.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.pd(u.b,B.bB(2024,1,1,0,0,0,0),null,r,new B.aZ(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4g(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4g.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4i.prototype={
$0(){return B.b5(this.a,!1).fd()},
$S:0}
A.b4u.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4v.prototype={
$1(d){return new A.xE(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axT.prototype={
$1(d){return d.e},
$S:z+27}
A.axU.prototype={
$2(d,e){return d+e},
$S:43}
A.axW.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axY.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axZ.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eS(t,r)
s=s.x
s===$&&B.a()
w.eS(t,s)
u.ae0(v.d,v.e)},
$S:0}
A.axB.prototype={
$1(d){return 0},
$S:1016}
A.axA.prototype={
$2(d,e){return B.eY(C.bJ,this.a.alM(e),C.n,C.bj,null)},
$S:1017}
A.aZG.prototype={
$1(d){return d.a},
$S:z+31}
A.aZH.prototype={
$1(d){return d.b},
$S:z+32}
A.aZI.prototype={
$1(d){return new A.jT(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZJ.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mG||v===D.dP))t=1-t
return new A.jT(d,t*w.d)},
$S:z+34}
A.aZK.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goF(),p=d.a
r.goF()
r=$.lD()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ae(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ae(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ae(v/1000,1)
t="K"}else{u=C.d.ae(v,r.ajO(Math.abs(s.b-s.c)))
t=""}if(C.c.ho(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o_(d,q.c.b.$2(p,new A.ty(u+t,s.e)))},
$S:z+35}
A.aUR.prototype={
$1(d){this.a.l9(new A.a5p(d))},
$S:200}
A.aUS.prototype={
$1(d){this.a.l9(new A.a5q(d))},
$S:42}
A.aUT.prototype={
$1(d){this.a.l9(new A.a5r(d))},
$S:27}
A.aUU.prototype={
$0(){this.a.l9(D.a1J)},
$S:0}
A.aUV.prototype={
$1(d){this.a.l9(new A.N0())},
$S:46}
A.aUW.prototype={
$1(d){this.a.l9(new A.a5u(d))},
$S:47}
A.aUX.prototype={
$0(){this.a.l9(D.a1K)},
$S:0}
A.aUY.prototype={
$1(d){this.a.l9(new A.N3(d))},
$S:99}
A.aUZ.prototype={
$1(d){this.a.l9(new A.a5o(d))},
$S:203}
A.aV_.prototype={
$1(d){this.a.l9(new A.a5n(d))},
$S:204}
A.aV0.prototype={
$1(d){return this.a.l9(new A.MZ(d))},
$S:205}
A.aV1.prototype={
$1(d){return this.a.l9(new A.a5s(d))},
$S:71}
A.aV2.prototype={
$1(d){return this.a.l9(new A.N1(d))},
$S:58}
A.bg5.prototype={
$1(d){var w=this.a.db.h(0,C.b.hu(this.b.ch,d))
return d.aR2(w==null?B.b([],x.t):w)},
$S:z+37}
A.bg3.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bg4.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fR(w,new A.bg2())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gx(w))},
$S:0}
A.bg2.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bg6.prototype={
$1(d){return new A.zj(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKF.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.bt8.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bF7(t?A.bA0(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tz(w,new A.yv(!0,A.bAS(),new A.bt7(v)))},
$S:z+41}
A.bt7.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bTV(A.bA0(d,e,f),w,A.c1P(d,e,f))},
$S:z+42}
A.bt5.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j8(v,v,u==null?D.ds:u,v,v,v,v,v,v,v,v,14,v,v,C.S,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rB(C.d.j(d.b),w)},
$S:z+43}
A.aKH.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKI.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aKM.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aKK.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eS(v,t)
u=u.Q
u===$&&B.a()
w.eS(v,u)},
$S:0}
A.aKL.prototype={
$0(){this.a.ae0(this.b,this.c)},
$S:0}
A.aKN.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.axM.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axN.prototype={
$2(d,e){return d+e},
$S:43}
A.axQ.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j_(v,B.af(v).i("j_<1>")).aB(0,new A.axR(w,this.a/(u+1),this.c))},
$S:0}
A.axR.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axO.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axP.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHL.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1018}
A.aAZ.prototype={
$1(d){return d},
$S:1019};(function aliases(){var w=A.KL.prototype
w.a07=w.ia
w.am5=w.aSL
w.am6=w.adU
w=A.Tx.prototype
w.aoI=w.l
w=A.KV.prototype
w.a08=w.ia
w=A.G5.prototype
w.a0Q=w.Z_})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5r","bTS",72)
var q
v(q=A.Tz.prototype,"gaF4","aF5",23)
v(q,"gaE_","I5",4)
v(q,"gaEN","Ih",4)
u(A.TA.prototype,"gasD","asE",25)
t(A,"c4f",3,null,["$3"],["bR9"],49,0)
t(A,"c4g",3,null,["$3"],["bRa"],50,0)
t(A,"c4h",3,null,["$3"],["bRb"],51,0)
t(A,"c4j",4,null,["$4"],["c54"],52,0)
w(A,"c4i","c53",53)
s(A,"bAm","c55",54)
t(A,"c4a",3,null,["$3"],["bTW"],55,0)
w(A,"a_o","c7x",56)
w(A,"avf","c58",7)
t(A,"c4c",3,null,["$3"],["bUG"],57,0)
t(A,"c4e",3,null,["$3"],["bZV"],58,0)
t(A,"c4b",3,null,["$3"],["bUF"],59,0)
t(A,"c4d",3,null,["$3"],["bZU"],60,0)
w(A,"ceX","bUE",61)
w(A,"ceY","bZT",62)
r(A.Y5.prototype,"ga4w","ayg",30)
u(A.VU.prototype,"gazz","azA",36)
t(A,"c6m",3,null,["$3"],["bV7"],63,0)
t(A,"c6l",3,null,["$3"],["bRc"],64,0)
w(A,"c6p","c7y",1)
t(A,"bLG",4,null,["$5$size","$4"],["bK6",function(d,e,f,g){return A.bK6(d,e,f,g,null)}],65,0)
s(A,"bAS","c7w",66)
s(A,"bLH","c3X",67)
s(A,"bLK","c5b",68)
s(A,"bLJ","c57",3)
s(A,"bLI","c56",3)
w(A,"c6o","bLh",70)
w(A,"c6n","bLg",71)
t(A,"a_u",3,null,["$3"],["c6j"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.T,[A.a6Z,A.agy,A.alO,A.IS,A.Ji,A.agw,A.I0,A.Ik,A.al7,A.amo,A.UI,A.Yg,A.TW,A.U6,A.amS,A.aj9,A.Cm,A.asD,A.wI,A.KM,A.AR])
u(B.C,[A.uU,A.Ek,A.bk,A.ahF,A.ahv,A.ahx,A.ahy,A.ahn,A.akS,A.ahB,A.ahz,A.ay7,A.asH,A.axV,A.ahw,A.KV,A.a61,A.ty,A.ar3,A.ar2,A.ahm,A.akR,A.eB,A.akO,A.akQ,A.apa,A.alF,A.atn,A.akP,A.aku,A.akN,A.axz,A.bg0,A.axC,A.ahj,A.o_,A.akK,A.akL,A.vE,A.hq,A.amw,A.amz,A.ahs,A.ahG,A.aht,A.akM,A.amC,A.amA,A.asG,A.ar1,A.aKG,A.amy,A.vp,A.a1t,A.amJ,A.a1E,A.b2a])
u(B.uS,[A.qq,A.vt,A.wo,A.aAp,A.aBx,A.oi,A.CV,A.oj])
u(B.o5,[A.aFd,A.aFe,A.aFf,A.aFw,A.btj,A.btk,A.bv9,A.btl,A.bti,A.bth,A.aFl,A.aFr,A.aFk,A.aKr,A.bfH,A.bfI,A.bfJ,A.bfK,A.bfL,A.bfM,A.bfN,A.bfO,A.bfP,A.bfQ,A.bfR,A.bss,A.bo2,A.b5W,A.b6L,A.b6M,A.bgp,A.bpL,A.b4p,A.b4s,A.b4t,A.bsq,A.b4v,A.axT,A.axW,A.axB,A.aZG,A.aZH,A.aZI,A.aZJ,A.aZK,A.aUR,A.aUS,A.aUT,A.aUV,A.aUW,A.aUY,A.aUZ,A.aV_,A.aV0,A.aV1,A.aV2,A.bg5,A.bg6,A.aKF,A.bt8,A.bt7,A.bt5,A.aKH,A.aKI,A.axM,A.aAZ])
t(A.yt,B.fC)
u(B.xU,[A.aFc,A.aFb,A.aFu,A.aFm,A.aFn,A.aFo,A.aFp,A.aFq,A.aFt,A.aFi,A.aFj,A.biz,A.biA,A.biB,A.aKt,A.bfT,A.bfU,A.bsr,A.bfV,A.b4r,A.b4j,A.b4k,A.b4n,A.b4o,A.bsp,A.b4d,A.b4e,A.b4f,A.b4h,A.b4g,A.b4i,A.b4u,A.axZ,A.aUU,A.aUX,A.bg3,A.bg4,A.aKK,A.aKL,A.axQ])
u(B.y2,[A.yu,A.ao4,A.a7_,A.ahr])
u(B.xV,[A.aFs,A.biy,A.bou,A.aKs,A.bfS,A.bo0,A.bo1,A.b5V,A.b5X,A.b5Y,A.b6N,A.b6O,A.bgq,A.bpM,A.b4q,A.b4l,A.b4m,A.axU,A.axY,A.axA,A.bg2,A.aKM,A.aKN,A.axN,A.axR,A.axO,A.axP,A.aHL])
u(B.M,[A.Bn,A.Rx])
u(B.a1,[A.Tz,A.Y5])
u(B.NL,[A.KR,A.Oq])
u(B.us,[A.TA,A.VU])
t(A.a14,A.ahF)
t(A.ahi,A.a14)
t(A.a0P,A.ahi)
u(A.a0P,[A.ahu,A.amx])
t(A.o0,A.ahu)
u(B.I_,[A.axK,A.ae1,A.Db,A.aEs,A.aKu,A.Nu])
t(A.fK,A.ahv)
t(A.it,A.ahx)
t(A.mL,A.ahy)
t(A.a0W,A.ahn)
t(A.N4,A.akS)
u(A.N4,[A.ahA,A.amB])
t(A.a10,A.ahA)
t(A.a11,A.ahB)
t(A.Dc,A.ahz)
u(A.ay7,[A.KS,A.Os])
t(A.ae3,A.asH)
t(A.ahC,A.ae3)
t(A.a12,A.ahC)
u(B.ba,[A.xE,A.zj])
t(A.uy,A.ahw)
t(A.KL,A.KV)
u(A.KL,[A.axX,A.aKJ])
u(B.Om,[A.a0Z,A.a7c])
u(B.J,[A.G5,A.ahk])
u(A.G5,[A.aba,A.abn])
t(A.qg,A.ar3)
t(A.acC,A.ar2)
t(A.pm,A.ahm)
t(A.uW,A.akR)
t(A.yw,A.akO)
t(A.pJ,A.akQ)
t(A.Q6,A.apa)
t(A.n4,A.alF)
t(A.nx,A.atn)
u(A.pJ,[A.alE,A.atm])
t(A.kU,A.alE)
t(A.lk,A.atm)
t(A.a5m,A.akP)
u(A.a5m,[A.alD,A.atl])
t(A.a6c,A.alD)
t(A.aep,A.atl)
t(A.MR,A.aku)
t(A.uV,A.akN)
t(A.MY,A.uV)
t(A.acD,B.h8)
t(A.ahl,A.ahk)
t(A.Tx,A.ahl)
t(A.a0Q,A.Tx)
t(A.jT,A.ahj)
t(A.a5j,A.akK)
t(A.a5l,A.akL)
u(A.hq,[A.a5p,A.a5q,A.a5r,A.N_,A.N0,A.a5u,A.N2,A.N3,A.a5o,A.a5n,A.MZ,A.a5s,A.a5t,A.N1])
t(A.pV,A.amx)
t(A.ec,A.amw)
t(A.Or,A.amz)
t(A.a0Y,A.ahs)
t(A.mM,A.ahG)
t(A.KQ,A.aht)
t(A.yv,A.akM)
t(A.EW,A.amB)
t(A.a7d,A.amC)
t(A.amv,A.eB)
t(A.n9,A.amv)
t(A.qo,A.n9)
t(A.rB,A.amA)
t(A.tz,A.asG)
t(A.Gx,A.ar1)
t(A.zk,A.amy)
t(A.zp,A.amJ)
w(A.ahn,A.bk)
w(A.ahu,A.bk)
w(A.ahv,A.bk)
w(A.ahx,A.bk)
w(A.ahy,A.bk)
w(A.ahz,A.bk)
w(A.ahA,A.bk)
w(A.ahB,A.bk)
w(A.ahC,A.bk)
w(A.ahw,A.bk)
w(A.ahi,A.bk)
w(A.ahm,A.bk)
w(A.aku,A.bk)
w(A.akN,A.bk)
w(A.akO,A.bk)
w(A.akQ,A.bk)
w(A.akR,A.bk)
w(A.alE,A.bk)
w(A.alD,A.bk)
w(A.alF,A.bk)
w(A.apa,A.bk)
w(A.ar2,A.bk)
w(A.ar3,A.bk)
w(A.asH,A.bk)
w(A.atm,A.bk)
w(A.atl,A.bk)
w(A.atn,A.bk)
w(A.ahj,A.bk)
v(A.ahk,B.aD)
w(A.ahl,B.e9)
v(A.Tx,B.a4i)
w(A.ahF,A.bk)
w(A.akK,A.bk)
w(A.akL,A.bk)
w(A.akS,A.bk)
w(A.ahs,A.bk)
w(A.aht,A.bk)
w(A.ahG,A.bk)
w(A.akM,A.bk)
w(A.akP,A.bk)
w(A.amv,A.bk)
w(A.amw,A.bk)
w(A.amx,A.bk)
w(A.amz,A.bk)
w(A.amA,A.bk)
w(A.amB,A.bk)
w(A.amC,A.bk)
w(A.ar1,A.bk)
w(A.asG,A.bk)
w(A.amy,A.bk)
w(A.amJ,A.bk)})()
B.bpZ(b.typeUniverse,JSON.parse('{"a6Z":{"T":[],"c":[]},"Ek":{"aFh":[]},"yt":{"fC":["bd<~>"],"fC.T":"bd<~>"},"Ji":{"T":[],"c":[]},"I0":{"T":[],"c":[]},"yu":{"be":[],"M":[],"c":[]},"agy":{"T":[],"c":[]},"alO":{"T":[],"c":[]},"ao4":{"be":[],"M":[],"c":[]},"IS":{"T":[],"c":[]},"agw":{"T":[],"c":[]},"Ik":{"T":[],"c":[]},"wI":{"T":[],"c":[]},"Bn":{"M":[],"c":[]},"a7_":{"be":[],"M":[],"c":[]},"al7":{"T":[],"c":[]},"amo":{"T":[],"c":[]},"UI":{"T":[],"c":[]},"Yg":{"T":[],"c":[]},"TW":{"T":[],"c":[]},"U6":{"T":[],"c":[]},"amS":{"T":[],"c":[]},"aj9":{"T":[],"c":[]},"Cm":{"T":[],"c":[]},"asD":{"T":[],"c":[]},"ahr":{"be":[],"M":[],"c":[]},"Tz":{"a1":["Bn"]},"KR":{"M":[],"c":[]},"TA":{"a1":["KR"]},"o0":{"bk":[]},"fK":{"bk":[]},"it":{"bk":[]},"mL":{"bk":[]},"Dc":{"bk":[]},"xE":{"ba":["o0"],"b7":["o0"],"b7.T":"o0","ba.T":"o0"},"a0W":{"bk":[]},"a10":{"bk":[]},"a11":{"bk":[]},"a12":{"bk":[]},"uy":{"bk":[]},"a0Z":{"aX":[],"c":[]},"aba":{"J":[],"L":[],"jz":[],"aT":[]},"pJ":{"bk":[]},"n4":{"bk":[]},"nx":{"bk":[]},"kU":{"bk":[]},"lk":{"bk":[]},"uV":{"bk":[]},"a0P":{"bk":[]},"qg":{"bk":[]},"acC":{"bk":[]},"pm":{"bk":[]},"uW":{"bk":[]},"yw":{"bk":[]},"ae3":{"bk":[]},"Q6":{"bk":[]},"a6c":{"bk":[]},"aep":{"bk":[]},"MR":{"bk":[]},"MY":{"bk":[]},"KM":{"T":[],"c":[]},"Rx":{"M":[],"c":[]},"Y5":{"a1":["Rx"]},"jT":{"bk":[]},"acD":{"h8":[],"aX":[],"c":[]},"a0Q":{"e9":["J","hr"],"J":[],"aD":["J","hr"],"L":[],"aT":[],"aD.1":"hr","e9.1":"hr","aD.0":"J"},"AR":{"T":[],"c":[]},"a14":{"bk":[]},"a5j":{"bk":[]},"N4":{"bk":[]},"a5l":{"bk":[]},"a5p":{"hq":[]},"a5q":{"hq":[]},"a5r":{"hq":[]},"N_":{"hq":[]},"N0":{"hq":[]},"a5u":{"hq":[]},"N2":{"hq":[]},"N3":{"hq":[]},"a5o":{"hq":[]},"a5n":{"hq":[]},"MZ":{"hq":[]},"a5s":{"hq":[]},"a5t":{"hq":[]},"N1":{"hq":[]},"G5":{"J":[],"L":[],"jz":[],"aT":[]},"Oq":{"M":[],"c":[]},"VU":{"a1":["Oq"]},"pV":{"bk":[]},"ec":{"bk":[]},"mM":{"bk":[]},"n9":{"eB":[],"bk":[]},"qo":{"n9":[],"eB":[],"bk":[]},"rB":{"bk":[]},"tz":{"bk":[]},"Gx":{"bk":[]},"zj":{"ba":["pV"],"b7":["pV"],"b7.T":"pV","ba.T":"pV"},"Or":{"bk":[]},"a0Y":{"bk":[]},"KQ":{"bk":[]},"yv":{"bk":[]},"a5m":{"bk":[]},"EW":{"bk":[]},"a7d":{"bk":[]},"zk":{"bk":[]},"a7c":{"aX":[],"c":[]},"abn":{"J":[],"L":[],"jz":[],"aT":[]},"zp":{"bk":[]}}'))
B.bJA(b.typeUniverse,JSON.parse('{"KL":1,"N4":1,"KV":1,"G5":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.at
return{_:w("CV"),e:w("bd<oi>"),aN:w("bd<oj>"),fM:w("bd<a3<f,@>?>"),b:w("bd<~>"),W:w("jT"),B:w("o0"),dB:w("fK"),gF:w("uy"),fj:w("it"),G:w("mL"),bO:w("mM"),k:w("av"),C:w("a1E<F>"),dO:w("uF"),R:w("a5<f,@>"),g:w("hL"),bz:w("lL<aZ>"),f0:w("ob"),E:w("bk"),F:w("yt"),X:w("oi"),P:w("lQ"),D:w("uU"),a:w("aFh"),d:w("oj"),cw:w("eB"),L:w("hr"),m:w("dg<u,E>"),cm:w("kU"),dv:w("n4"),M:w("B<o_>"),I:w("B<bDJ>"),O:w("B<fK>"),Y:w("B<it>"),U:w("B<eB>"),K:w("B<a61>"),u:w("B<ec>"),bC:w("B<vp>"),aA:w("B<v<eB>>"),v:w("B<ee>"),r:w("B<Gx>"),s:w("B<f>"),eg:w("B<tv>"),df:w("B<qo>"),p:w("B<c>"),n:w("B<F>"),t:w("B<u>"),eF:w("bl<a1<M>>"),Z:w("n9"),cz:w("ec"),hf:w("pV"),dj:w("zk"),fT:w("rB"),c_:w("iw<p5<bd<~>>>"),x:w("zp<fK>"),y:w("zp<ec>"),J:w("v<u>"),ef:w("vt"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ad<F,F>"),w:w("k6"),aU:w("C"),Q:w("vE<o0>"),o:w("vE<pV>"),dc:w("ee"),eo:w("q7"),gJ:w("q8"),V:w("np<lQ>"),N:w("f"),A:w("nq"),bP:w("bv"),er:w("tv"),j:w("wo"),dw:w("qo"),bY:w("tz"),cZ:w("qq"),gc:w("im"),es:w("lk"),bN:w("nx"),l:w("c"),q:w("x0"),g4:w("ip<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("u"),bn:w("xE?"),f3:w("zj?"),T:w("v<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("C?"),aD:w("im?"),h6:w("u?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B0=new B.ph(C.m,B.at("ph<E>"))
D.B7=new A.Db(0,"left")
D.mG=new A.Db(1,"top")
D.B8=new A.Db(2,"right")
D.dP=new A.Db(3,"bottom")
D.ay6=new A.qg(!1,A.bAm(),22,null)
D.ku=new A.pm(16,null,D.ay6,!0)
D.a8T=new A.pJ(C.E,null,2,null)
D.vR=new A.KQ(!1,D.a8T,A.c6p(),!0)
D.a_R=new A.axK(3,"spaceEvenly")
D.a01=new B.qY(6,"dstIn")
D.Xx=new B.aV(3,3)
D.Bb=new B.d7(D.Xx,D.Xx,C.a3,C.a3)
D.a0c=new B.bm(C.E,0,C.U,-1)
D.BL=new A.a5l()
D.a1J=new A.N_()
D.a1K=new A.N2()
D.aPI=new A.acC()
D.alS=w([],B.at("B<kU>"))
D.alT=w([],B.at("B<lk>"))
D.DV=new A.MR(D.alS,D.alT,!0)
D.a8D=new B.e6("Zeitraum",!1,null)
D.a8H=new B.e6("Konten (SKR 03)",!1,null)
D.xH=new A.aEs(0,"center")
D.aPV=new A.yv(!0,A.bAS(),A.bLG())
D.DZ=new A.yv(!1,A.bAS(),A.bLG())
D.E_=new A.yw(!1,!0,null,A.avf(),A.a_o(),!0,null,A.avf(),A.a_o())
D.aPW=new A.yw(!0,!0,null,A.avf(),A.a_o(),!0,null,A.avf(),A.a_o())
D.a46=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a3T=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a4f=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a4a=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a3B=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a3A=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a4y=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a40=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a4D=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a4v=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.as8=new B.dg([50,D.a46,100,D.a3T,200,D.a4f,300,D.a4a,400,D.a3B,500,D.a3A,600,D.a4y,700,D.a40,800,D.a4D,900,D.a4v],x.m)
D.ds=new B.rI(D.as8,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ai0=w([8,4],x.t)
D.a8R=new A.pJ(D.ds,null,0.4,D.ai0)
D.a8S=new A.pJ(C.ao,null,0.5,null)
D.fP=new A.eB(0/0,0/0)
D.ay8=new A.qg(!0,A.bAm(),44,null)
D.mH=new A.pm(16,null,D.ay8,!0)
D.ay7=new A.qg(!0,A.bAm(),30,null)
D.mI=new A.pm(16,null,D.ay7,!0)
D.a8U=new A.uW(!1,D.mH,D.mI,D.mH,D.mI)
D.aPX=new A.uW(!0,D.mH,D.mI,D.mH,D.mI)
D.E8=new A.Nu(0,"left")
D.a9x=new A.Nu(1,"center")
D.E9=new A.Nu(2,"right")
D.a9A=new B.a7(57495,"MaterialIcons",null,!1)
D.xY=new B.a7(58927,"MaterialIcons",null,!1)
D.aak=new B.a7(59005,"MaterialIcons",null,!0)
D.aal=new B.a7(59007,"MaterialIcons",null,!0)
D.aam=new B.a7(59011,"MaterialIcons",null,!1)
D.abj=new B.a7(62589,"MaterialIcons",null,!1)
D.aaC=new B.a7(61349,"MaterialIcons",null,!1)
D.abO=new B.aH(D.aaC,20,C.j,null,null)
D.aaJ=new B.a7(61487,"MaterialIcons",null,!1)
D.ac5=new B.aH(D.aaJ,18,null,null,null)
D.ac6=new B.aH(D.xY,18,null,null,null)
D.acK=new B.aH(C.nQ,null,C.q,null,null)
D.acT=new B.aH(C.lf,16,null,null,null)
D.ad0=new B.aH(C.EM,16,null,null,null)
D.ad3=new B.aH(C.i3,null,C.j,null,null)
D.abh=new B.a7(62584,"MaterialIcons",null,!1)
D.adb=new B.aH(D.abh,16,null,null,null)
D.adh=new B.aH(D.xY,16,null,null,null)
D.adn=new B.aH(F.Ej,null,C.ak,null,null)
D.afn=new A.a7_(null)
D.aQ1=new A.aKu(0,"horizontal")
D.ye=new A.zk(0,0,0,0,!1)
D.Fw=new A.Or(0.5)
D.BR=new A.a7d()
D.afs=new A.EW(D.BR,A.bLK(),10,A.bLH(),!0,A.bLJ(),A.bLI(),!1,null,null,null)
D.aQ2=new A.EW(D.BR,A.bLK(),10,A.bLH(),!0,A.bLJ(),A.bLI(),!0,null,null,null)
D.agY=w([4,3],x.t)
D.awm=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.awc=new B.aI("receivables","Forderungen (kurzfristig)")
D.aw1=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.aw_=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avQ=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.avV=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.awj=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.awb=new B.aI("equity","Eigenkapital")
D.pv=w([D.awm,D.awc,D.aw1,D.aw_,D.avQ,D.avV,D.awj,D.awb],B.at("B<+(f,f)>"))
D.aQ4=w([],x.M)
D.alE=w([],x.O)
D.alF=w([],x.Y)
D.alG=w([],B.at("B<mL>"))
D.alH=w([],B.at("B<mM>"))
D.aQ5=w([],x.U)
D.aQ6=w([],x.u)
D.alI=w([],x.r)
D.asP={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.T6={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yT=new B.a5(D.T6,[0,0,0,0,0,0,0,C.bm],B.at("a5<f,C>"))
D.asN={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.as2=new B.a5(D.asN,[0,0,0,0],B.at("a5<f,u>"))
D.at3={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apD=new B.a5(D.at3,[0,0,0,0,null,null,null,null],B.at("a5<f,u?>"))
D.apy=new B.a5(D.asP,[D.yT,D.yT,D.yT,C.bm,C.bm,C.bm,D.as2,D.apD],x.R)
D.apQ=new B.a5(D.T6,[0,0,0,0,0,0,0,C.cp],x.R)
D.asQ={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.apS=new B.a5(D.asQ,[8500,1200,3400,300,22e3,4200,9000,22200],B.at("a5<f,F>"))
D.asM={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.as3=new B.a5(D.asM,[0,0,0,0,0,0,0,C.cp],x.R)
D.atf={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.as4=new B.a5(D.atf,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.at("a5<f,f>"))
D.a4I=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a4Q=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3E=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a42=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a4c=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a52=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a3p=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a44=new B.E(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a4e=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a4w=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.as9=new B.dg([50,D.a4I,100,D.a4Q,200,D.a3E,300,D.a42,400,D.a4c,500,D.a52,600,D.a3p,700,D.a44,800,D.a4e,900,D.a4w],x.m)
D.SW=new B.rI(D.as9,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a81=new B.ak(32,32,32,32)
D.aua=new B.ah(D.a81,C.bE,null)
D.auh=new B.ah(C.aj,C.bE,null)
D.alU=w([],B.at("B<n4>"))
D.alV=w([],B.at("B<nx>"))
D.Xy=new A.Q6(D.alU,D.alV)
D.ax4=new B.fi("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.ax5=new B.fi("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.ax9=new B.fi("Automaten-Business","Umsatz je Automat",null,null)
D.axb=new B.fi("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.axd=new B.fi("Top","Meistverkaufte Produkte",null,null)
D.axh=new B.fi("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.axi=new B.fi("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yf=new B.tf(C.F,C.r,0)
D.aFC=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.azJ=new B.dG(D.aFC,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHN=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.azM=new B.dG(D.aHN,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aFO=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.azN=new B.dG(D.aFO,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHH=new B.ab("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.azP=new B.dG(D.aHH,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aH7=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.azQ=new B.dG(D.aH7,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aH4=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aAa=new B.dG(D.aH4,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aQg=new B.O(!0,C.E,null,null,null,null,14,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFL=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.aFY=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aGO=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aGX=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aHb=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.aI_=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zx=new A.ae1(0,"auto")
D.aIz=new A.ae1(1,"top")
D.aMQ=new A.wI("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aMR=new A.wI("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfo","bPY",()=>B.ib(new A.btj(),x.D))
w($,"cfp","avP",()=>B.ib(new A.btk(),x.a))
w($,"cgl","xo",()=>B.byY(new A.bv9(),x.P))
w($,"cfq","bw8",()=>C.aM.$1$1(new A.btl(),x.d))
w($,"cfn","bPX",()=>C.aM.$1$1(new A.bti(),x.X))
w($,"cfm","bw7",()=>C.aM.$1$1(new A.bth(),x.h))
w($,"cfl","bw6",()=>B.b_w(A.c5r(),x.F,x.b))
w($,"c8m","bvD",()=>new A.axz())
v($,"cbF","lD",()=>new A.b2a())})()};
(a=>{a["B1FIPeStssZYG5fRGpyOAWoAn4E="]=a.current})($__dart_deferred_initializers__);