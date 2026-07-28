((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Od(d,e,f,g,h){return new A.a79(f,g,d,h,e,null)},
a79:function a79(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uV:function uV(d){this.a=d},
Ed:function Ed(d){this.a=d},
bTs(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z7
w=x.f
v=x.N
u=x.z
t=A.aFu(B.dd(w.a(e.h(a0,"current")),v,u))
s=A.aFu(B.dd(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFu(B.dd(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ce
p=J.cX(p,new A.aFc(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ce
o=J.cX(o,new A.aFd(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ce
q=J.cX(q,new A.aFe(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.dd(w.a(e.h(a0,"customer")),v,u)
m=B.bi(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.p1(n.h(0,"app_gross"))
k=B.bi(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.p1(n.h(0,"avg_basket"))
u=B.dd(w.a(e.h(a0,"derived")),v,u)
v=A.p1(u.h(0,"gross_margin_pct"))
e=A.p1(u.h(0,"net_margin_pct"))
w=A.p1(u.h(0,"ebitda_margin_pct"))
j=A.p1(u.h(0,"cashflow_operating"))
i=A.bsI(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsI(u.h(0,"revenue_growth_mom_pct"))
g=A.bsI(u.h(0,"result_growth_yoy_pct"))
u=A.bsI(u.h(0,"result_growth_mom_pct"))
f=B.bi(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.o4(t,s,r,p,o,q,new A.aAB(m,l,k,n),new A.aBJ(v,e,w,j,i,h,g,u),f)},
p1(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.ju(J.am(d))
return w==null?0:w},
bsI(d){if(d==null)return null
if(typeof d=="number")return d
return B.ju(J.am(d))},
qj:function qj(d,e,f,g){var _=this
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
aBJ:function aBJ(d,e,f,g,h,i,j,k){var _=this
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
aFc:function aFc(){},
aFd:function aFd(){},
aFe:function aFe(){},
aFu(d){var w=J.Y(d),v=A.ud(w.h(d,"revenue_net_7")),u=A.ud(w.h(d,"revenue_net_19")),t=A.ud(w.h(d,"revenue_net")),s=A.ud(w.h(d,"expense_net")),r=A.ud(w.h(d,"result_net")),q=A.ud(w.h(d,"vat_collected")),p=A.ud(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.ce
w=J.cX(w,new A.aFv(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.o5(v,u,t,s,r,q,p,w)},
ud(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.ju(J.am(d))
return w==null?0:w},
CN:function CN(d,e,f,g,h,i){var _=this
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
aFv:function aFv(){},
bTr(d){return new A.yw(d,new B.io(x.c_),C.dM)},
btw:function btw(){},
btx:function btx(){},
bvo:function bvo(){},
bty:function bty(){},
btv:function btv(){},
btu:function btu(){},
yw:function yw(d,e,f){this.r=d
this.a=e
this.f=f},
aFb:function aFb(d,e,f){this.a=d
this.b=e
this.c=f},
aFa:function aFa(d,e,f){this.a=d
this.b=e
this.c=f},
bTt(){return new A.yx(null)},
alZ(d,e,f,g,h){return new A.alY(e,h,g,f,d,null)},
yx:function yx(d){this.a=d},
aFt:function aFt(d){this.a=d},
aFl:function aFl(d,e,f){this.a=d
this.b=e
this.c=f},
aFm:function aFm(d,e,f){this.a=d
this.b=e
this.c=f},
aFn:function aFn(d){this.a=d},
aFk:function aFk(){},
aFo:function aFo(d){this.a=d},
aFp:function aFp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFs:function aFs(){},
aFr:function aFr(){},
aFq:function aFq(){},
aFj:function aFj(d,e){this.a=d
this.b=e},
aFh:function aFh(d){this.a=d},
aFi:function aFi(d){this.a=d},
agC:function agC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alY:function alY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aod:function aod(d,e){this.e=d
this.a=e},
bhS:function bhS(d){this.a=d},
bhT:function bhT(d){this.a=d},
bhU:function bhU(d,e,f){this.a=d
this.b=e
this.c=f},
bhR:function bhR(){},
J_:function J_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jr:function Jr(d,e){this.c=d
this.a=e},
box:function box(d){this.a=d},
agA:function agA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I6:function I6(d,e){this.c=d
this.a=e},
bA9(d,e,f,g,h){var w=null
return B.j8(w,w,!0,w,new A.bsD(h,g,e,f),d,w,!0,!0,x.H)},
jH(d,e,f,g,h,i,j,k,l,m,n){return new A.amv(g,n,i,e,d,m,f,k,l,j,null)},
avg(d,e){return A.c2Z(d,e)},
c2Z(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avg=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bm(D.ay4)
t=4
o=e.aJ(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$avg)
case 7:r=g
q=B.dd(x.f.a(r.a),x.N,n)
l.Mk()
if(J.d(J.a3(q,"configured"),!1)){l.bm(D.ay8)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bwc()
if(e.e==null)B.T(B.Z(y.b))
e.gco().ci(o)
l.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Mk()
l.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avg,v)},
avj(d,e,f){var w=0,v=B.q(x.H)
var $async$avj=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j8(null,null,!0,null,new A.bsB(f,e,e.aJ(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$avj)
case 2:return B.o(null,v)}})
return B.p($async$avj,v)},
a7a:function a7a(d){this.a=d},
aKn:function aKn(){},
aKm:function aKm(){},
aKl:function aKl(){},
Iq:function Iq(d,e){this.c=d
this.a=e},
beZ:function beZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
beO:function beO(){},
beP:function beP(){},
beQ:function beQ(){},
beR:function beR(){},
beS:function beS(){},
beT:function beT(){},
beU:function beU(){},
beV:function beV(){},
beW:function beW(d){this.a=d},
beX:function beX(d){this.a=d},
beY:function beY(d){this.a=d},
bf_:function bf_(d,e){this.a=d
this.b=e},
bf0:function bf0(d,e){this.a=d
this.b=e},
bsD:function bsD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsC:function bsC(d){this.a=d},
ali:function ali(d){this.a=d},
amv:function amv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bf1:function bf1(d,e){this.a=d
this.b=e},
UU:function UU(d,e,f){this.c=d
this.d=e
this.a=f},
Yw:function Yw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bny:function bny(){},
bnz:function bnz(){},
bnA:function bnA(d){this.a=d},
U6:function U6(d,e,f){this.c=d
this.d=e
this.a=f},
b5F:function b5F(){},
b5H:function b5H(d){this.a=d},
b5I:function b5I(d){this.a=d},
b5G:function b5G(){},
Uj:function Uj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6z:function b6z(){},
b6A:function b6A(){},
b6B:function b6B(){},
b6C:function b6C(d){this.a=d},
amZ:function amZ(d,e){this.c=d
this.a=e},
bfy:function bfy(){},
bfz:function bfz(){},
aji:function aji(d,e){this.c=d
this.a=e},
Cf:function Cf(d,e,f){this.c=d
this.d=e
this.a=f},
asK:function asK(d,e){this.c=d
this.a=e},
bpP:function bpP(){},
bpQ:function bpQ(){},
wO:function wO(d,e){this.c=d
this.a=e},
ahv:function ahv(d,e){this.e=d
this.a=e},
b45:function b45(){},
b44:function b44(){},
b43:function b43(d,e,f){this.a=d
this.b=e
this.c=f},
b3Y:function b3Y(d,e){this.a=d
this.b=e},
b3Z:function b3Z(d,e){this.a=d
this.b=e},
b46:function b46(d){this.a=d},
b47:function b47(d){this.a=d},
b4_:function b4_(){},
b40:function b40(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b41:function b41(d,e){this.a=d
this.b=e},
b42:function b42(d,e,f){this.a=d
this.b=e
this.c=f},
bsB:function bsB(d,e,f){this.a=d
this.b=e
this.c=f},
bsA:function bsA(d){this.a=d},
Bf:function Bf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TJ:function TJ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3S:function b3S(){},
b3T:function b3T(d){this.a=d},
b3U:function b3U(d){this.a=d},
b3W:function b3W(d,e){this.a=d
this.b=e},
b3V:function b3V(d,e){this.a=d
this.b=e},
b3X:function b3X(d){this.a=d},
bg:function bg(){},
bDu(d){return new A.KY(d,C.al,C.bW,null,null)},
KY:function KY(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TK:function TK(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c4$=g
_.c=_.a=null},
b48:function b48(d,e){this.a=d
this.b=e},
b49:function b49(d){this.a=d},
axU(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.am9:f,p=a0==null?16:a0,o=d==null?D.a0c:d,n=g==null,m=n?A.bwE(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yf:a3
n=n?A.bwE(r,r,r,r,r,r,r,r):g
w=j==null?D.DZ:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.H:e
return new A.nO(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BT,s,w,i,n)},
ay0(d,e,f,g,h){var w=d==null?D.ama:d,v=e==null?2:e,u=g==null?C.ls:g
return new A.fE(h,f===!0,w,v,u)},
bQL(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.ay0(A.ky(d.c,e.c,f,A.c3J(),x.fj),B.ac(d.d,e.d,f),!1,A.ky(d.e,e.e,f,A.a_O(),x.S),w)},
a1c(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TD
else w=h
v=m==null
u=v?8:m
t=$.lA()
s=t.aX3(f,v?8:m)
t=t.aX4(g,v?8:m)
v=d==null?A.bDs(r,r,r,r,r):d
return new A.ik(q,l,w,j,u,s,e,t,v,k==null?D.amb:k)},
bQM(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mG(d.f,e.f,f),p=A.ky(d.r,e.r,f,A.a_O(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a1c(A.bDs(v,u,null,!1,t),p,q,o,s,n,null,A.ky(d.y,e.y,f,A.c3K(),x.G),m,r)},
bQN(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mE(u,w,v,B.bX(d.d,e.d,f))},
bDs(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dq
else w=d
return new A.a18(g===!0,v,u,w,f)},
bwE(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1e(4,C.hN,16,D.xK,0,120,A.c3M(),!1,!1,D.a_a,0,C.K,A.c3L())
else w=k
v=j==null?C.kZ:j
return new A.a1d(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c4x(d,e,f,g){var w=null,v=B.j0(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.I,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D3(C.d.j(f.b),v)},
c4w(d){return A.aA1(D.dq,15)},
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
axT:function axT(d,e){this.a=d
this.b=e},
fE:function fE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ay1:function ay1(){},
ay2:function ay2(){},
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
mE:function mE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a18:function a18(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1d:function a1d(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ae4:function ae4(d,e){this.a=d
this.b=e},
a1e:function a1e(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
KZ:function KZ(d){this.a=d},
a1f:function a1f(d,e,f,g,h,i,j,k){var _=this
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
ahr:function ahr(){},
ahy:function ahy(){},
ahz:function ahz(){},
ahB:function ahB(){},
ahC:function ahC(){},
ahD:function ahD(){},
ahE:function ahE(){},
ahF:function ahF(){},
ahG:function ahG(){},
ay3:function ay3(d){this.a=d},
ay4:function ay4(){},
uz:function uz(d,e,f){this.a=d
this.b=e
this.c=f},
ahA:function ahA(){},
ay5:function ay5(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ay6:function ay6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay7:function ay7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6b:function a6b(d){this.b=d},
a1b:function a1b(d,e,f){this.d=d
this.e=e
this.a=f},
abe:function abe(d,e,f,g,h,i,j,k){var _=this
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
c4y(d,e){var w=null
return new A.RF(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axN(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.pg(t,e.b,new A.q9(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bER(d,e,f){var w=A.axN(d.b,e.b,f),v=A.axN(d.d,e.d,f),u=A.axN(d.e,e.e,f)
return new A.uX(e.a,w,A.axN(d.c,e.c,f),v,u)},
bTv(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ey(w,v)},
bEP(d,e,f){return new A.yz(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c6X(d){return!0},
c4B(d){return D.a9D},
bEQ(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pD(w,f,g,e)},
bGK(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c3F(),x.dv)
v.toString
w=A.ky(d.b,e.b,f,A.c3H(),x.bN)
w.toString
return new A.Qe(v,w)},
bUh(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.mY(t,w,v,u)},
bZu(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.nm(t,w,v,u)},
bUg(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bUe(B.bww(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_O(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kQ(r,e.f,e.r,t,e.x,u,v,w,s)},
bZt(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bZr(B.bww(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_O(),x.S)
if(u==null)u=v==null?C.C:null
return new A.lh(r,e.f,e.r,t,e.x,u,v,w,s)},
bUe(d,e,f,g,h,i){return new A.a6m(f,!1,g,i,d,e)},
bUf(d){return C.d.aj(d.e,1)},
bZr(d,e,f,g,h,i){return new A.aet(f,!1,g,i,d,e)},
bZs(d){return C.d.aj(d.e,1)},
bEM(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c3E(),x.cm)
v.toString
w=A.ky(d.b,e.b,f,A.c3G(),x.es)
w.toString
return new A.MS(v,w,!0)},
bTu(d,e,f){return new A.N2(d,e==null?4:e,f)},
a11:function a11(){},
D2:function D2(d,e){this.a=d
this.b=e},
ty:function ty(d,e){this.r=d
this.w=e},
q9:function q9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acD:function acD(){},
pg:function pg(d,e,f,g){var _=this
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
pD:function pD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae6:function ae6(){},
Qe:function Qe(d,e){this.a=d
this.b=e},
mY:function mY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nm:function nm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kQ:function kQ(d,e,f,g,h,i,j,k,l){var _=this
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
a6m:function a6m(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aet:function aet(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MS:function MS(d,e,f){this.a=d
this.b=e
this.c=f},
uW:function uW(){},
N2:function N2(d,e,f){this.a=d
this.b=e
this.c=f},
ahm:function ahm(){},
ahq:function ahq(){},
akF:function akF(){},
akY:function akY(){},
akZ:function akZ(){},
al0:function al0(){},
al1:function al1(){},
alO:function alO(){},
alN:function alN(){},
alP:function alP(){},
apm:function apm(){},
ar9:function ar9(){},
ara:function ara(){},
asO:function asO(){},
atr:function atr(){},
atq:function atq(){},
ats:function ats(){},
axJ:function axJ(){},
KS:function KS(){},
KT:function KT(d,e,f){this.c=d
this.d=e
this.a=f},
axL:function axL(d){this.a=d},
axK:function axK(d){this.a=d},
RF:function RF(d,e,f){this.c=d
this.e=e
this.a=f},
Yl:function Yl(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bY0(d,e,f){var w=B.ae(f),v=w.i("ab<1,jR>")
v=B.Q(new B.ab(f,new A.aZn(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZo(),w),w.i("av.E"))
return new A.acE(e,d,v,w,null)},
bQJ(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a70(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tw(v,C.at,C.w,new B.kt(1),v,v,v,v,C.bA,v)
u=new A.a12(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aJ(x.v))
u.bj()
return u},
acE:function acE(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZn:function aZn(){},
aZo:function aZo(){},
a12:function a12(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W3$=h
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
bf7:function bf7(d,e){this.a=d
this.b=e},
axM:function axM(){},
jR:function jR(d,e){this.a=d
this.b=e},
nN:function nN(d,e){this.a=d
this.b=e},
ahn:function ahn(){},
aho:function aho(){},
ahp:function ahp(){},
TH:function TH(){},
AG:function AG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZp:function aZp(d){this.a=d},
aZq:function aZq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZr:function aZr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5v(d,e){var w=d==null?B.cp(C.C,1):d
return new A.a5u(e!==!1,w)},
a1h:function a1h(){},
a5u:function a5u(d,e){this.a=d
this.b=e},
N9:function N9(){},
a5w:function a5w(){},
ayg:function ayg(){},
aEB:function aEB(d,e){this.a=d
this.b=e},
ahJ:function ahJ(){},
akV:function akV(){},
akW:function akW(){},
al2:function al2(){},
L1:function L1(){},
vM:function vM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hp:function hp(){},
a5A:function a5A(d){this.a=d},
a5B:function a5B(d){this.a=d},
a5C:function a5C(d){this.a=d},
N4:function N4(){},
N5:function N5(){},
a5F:function a5F(d){this.a=d},
N7:function N7(){},
N8:function N8(d){this.a=d},
a5z:function a5z(d){this.a=d},
a5y:function a5y(d){this.a=d},
N3:function N3(d){this.a=d},
a5D:function a5D(d){this.a=d},
a5E:function a5E(d){this.a=d},
N6:function N6(d){this.a=d},
Gc:function Gc(){},
aUH:function aUH(d){this.a=d},
aUI:function aUI(d){this.a=d},
aUJ:function aUJ(d){this.a=d},
aUK:function aUK(d){this.a=d},
aUL:function aUL(d){this.a=d},
aUM:function aUM(d){this.a=d},
aUN:function aUN(d){this.a=d},
aUO:function aUO(d){this.a=d},
aUP:function aUP(d){this.a=d},
aUQ:function aUQ(d){this.a=d},
aUR:function aUR(d){this.a=d},
aUS:function aUS(d){this.a=d},
aUT:function aUT(d){this.a=d},
Os:function Os(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
W6:function W6(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c4$=h
_.c=_.a=null},
bfc:function bfc(d,e){this.a=d
this.b=e},
bfa:function bfa(d){this.a=d},
bfb:function bfb(d,e){this.a=d
this.b=e},
bf9:function bf9(){},
bfd:function bfd(d){this.a=d},
bxV(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.H:d
return new A.pQ(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TD:u
else w=g
v=f==null?A.axS(!1,u,0,u,!1,D.w9):f
w=new A.ed(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axS(!1,u,0,u,!1,D.w9):d,j,a0,i,s,!1,p)
w.aqW(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bUJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bDt(d.ay,e.ay,f)
v=A.bDt(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.ky(d.cy,e.cy,f,A.a_O(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rk(d.w,e.w,f)
p=A.ky(d.a,e.a,f,A.c3D(),x.cw)
p.toString
o=B.bHf(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKC(v,m,w,r,e.z,s,new A.yy(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ot(n),!1,u,o,!0,e.cx,p)},
axS(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dq.A()>>>16&255,D.dq.A()>>>8&255,D.dq.A()&255):null
else w=e
return new A.a1a(h,w,g,i,f,!1)},
bDt(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rk(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bEQ(t,A.ky(v.d,u.d,f,A.a_O(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rk(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axS(!1,s,v,u,e.a,new A.KX(!1,r,w.c,!0))},
bQP(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rk(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dq.A()>>>16&255,D.dq.A()>>>8&255,D.dq.A()&255):null
return new A.mF(e.a,e.b,w,v)},
c6Y(d){return!0},
bzY(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k7)return A.bAJ(w.a,A.bxx(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dq:w},
c1h(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k7)w=A.bAJ(v.a,A.bxx(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dq}return A.aA1(w,40)},
bJL(d,e,f,g,h){var w,v=A.bzY(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k7)w=A.bAJ(u.a,A.bxx(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dq}u=A.aA1(w,40)
return new A.N2(v,h==null?4:h,u)},
c6W(d,e){return!0},
c3q(d,e){return Math.abs(d.a-e.a)},
c4E(d,e){var w=J.cX(e,new A.btk(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c4A(d,e){return-1/0},
c4z(d,e){return d.a[e].b},
bKW(d){var w=J.cX(d,new A.bth(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bKV(d){return A.aA1(D.dq,15)},
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
aKD:function aKD(){},
Ot:function Ot(d){this.a=d},
a1a:function a1a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mF:function mF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KX:function KX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yy:function yy(d,e,f){this.a=d
this.b=e
this.c=f},
aKo:function aKo(d,e){this.a=d
this.b=e},
a5x:function a5x(){},
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
btk:function btk(d){this.a=d},
btj:function btj(d){this.a=d},
a7n:function a7n(){},
bth:function bth(){},
n0:function n0(){},
qh:function qh(d,e,f,g,h,i){var _=this
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
Ou:function Ou(d){this.a=d},
zi:function zi(d,e){this.a=d
this.b=e},
ahw:function ahw(){},
ahx:function ahx(){},
ahK:function ahK(){},
akX:function akX(){},
al_:function al_(){},
amC:function amC(){},
amD:function amD(){},
amE:function amE(){},
amG:function amG(){},
amH:function amH(){},
amI:function amI(){},
amJ:function amJ(){},
ar8:function ar8(){},
asN:function asN(){},
aKE:function aKE(d){this.a=d},
aKF:function aKF(){},
aKG:function aKG(){},
zj:function zj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amF:function amF(){},
aKH:function aKH(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aKK:function aKK(){},
aKI:function aKI(d,e,f){this.a=d
this.b=e
this.c=f},
aKJ:function aKJ(d,e,f){this.a=d
this.b=e
this.c=f},
aKL:function aKL(){},
vv:function vv(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7m:function a7m(d,e,f){this.d=d
this.e=e
this.a=f},
abr:function abr(d,e,f,g,h,i,j,k){var _=this
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
bwD(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.ae(o),l=new B.ab(o,new A.axV(),m.i("ab<1,F>")).jI(0,new A.axW()),k=e-l,j=new A.axZ(k,d,n)
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
new B.iR(o,m.i("iR<1>")).aw(0,new A.axX(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iR(o,m.i("iR<1>")).aw(0,new A.axY(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axV:function axV(){},
axW:function axW(){},
axZ:function axZ(d,e,f){this.a=d
this.b=e
this.c=f},
ay_:function ay_(d,e,f){this.a=d
this.b=e
this.c=f},
axX:function axX(d,e,f){this.a=d
this.b=e
this.c=f},
axY:function axY(d,e,f){this.a=d
this.b=e
this.c=f},
bxx(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iR(w,B.ae(w).i("iR<1>")).aw(0,new A.aHI(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHI:function aHI(d,e){this.a=d
this.b=e},
aBc(d,e){var w,v
if(e!=null){w=B.ae(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aBd(),w),w.i("av.E"))
return A.c4s(d,new A.a1Q(v,x.cX))}else return d},
aBd:function aBd(){},
bYC(d,e){var w=!0
if(d!==C.fx)if(!(d===C.at&&e===C.w))w=d===C.iv&&e===C.b_
if(w)return D.Eb
else{w=!0
if(d!==C.iu)if(!(d===C.iv&&e===C.w))w=d===C.at&&e===C.b_
if(w)return D.Ec
else return D.aai}},
Nz:function Nz(d,e){this.a=d
this.b=e},
a1G:function a1G(d,e){this.a=d
this.b=e},
zm:function zm(d,e){this.a=d
this.$ti=e},
amQ:function amQ(){},
c4s(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cH($.an().r)
for(w=B.b([],x.C),v=new B.Ol(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.T(B.fw('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ok(v,s)
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
if(o){q=new B.Ke(d.aSO(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.il(m)}p+=n
o=!o}}return l},
a1Q:function a1Q(d,e){this.a=d
this.b=0
this.$ti=e},
b1V:function b1V(){},
bxl(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bQS(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aA1(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNO()*w),C.d.aP(d.gG0()*w),C.d.aP(d.gKc()*w))},
bEO(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
bxm(d){var w=d.a,v=w?A.aZm(d.b):0,u=w?A.aZm(d.c):0,t=w?A.aZm(d.d):0
return new B.ag(v,u,t,w?A.aZm(d.e):0)},
bVY(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
byh(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mQ(0,g))}else{w=e==null?C.H:e
d.r=w.gp(w)
d.seU(null)}},
aZm(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ky(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k5(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k5(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c5L(d,e,f){return C.d.aP(d+(e-d)*f)},
bAJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k5(m,x.i)
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
A.a79.prototype={
q(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.m
r=r?C.n:C.a5
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.ca(t.x,C.n,s,18),C.aQ],w))
v.push(B.ax(new B.dL(t.c,!1,s),1))
v=B.aj(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.i(t.d,s,1,C.ac,s,B.bB(u==null?C.h:u,22,C.I),s,s,s)],w)
return B.by(r,B.a9(w,C.z,C.ic,C.i),q,s,C.ai,s,3)}}
A.uV.prototype={
LD(d){return this.aSR(d)},
aSR(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.el("finance_summary",B.a5(["p_from",E.re(d.a),"p_to",E.re(d.b)],s,r),r),$async$LD)
case 3:q=f
if(q==null){u=D.aq0
w=1
break}if(x.f.b(q)){u=B.dd(q,s,r)
w=1
break}u=D.aqs
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
break}u=D.apH
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LC,v)},
pE(d){return this.aqE(d)},
aqE(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pE=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a5(["from",E.re(d.a),"to",E.re(d.b)],s,s)),$async$pE)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a3(B.fC(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pE,v)},
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
break}throw B.e(B.dK("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Ly,v)}}
A.Ed.prototype={
FV(d){return this.ajH(d)},
ajH(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FV=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LD(d),$async$FV)
case 7:q=f
o=A.aFu(q)
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
FR(d){return this.ajs(d)},
ajs(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FR=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LC(d),$async$FR)
case 7:q=f
o=A.bTs(q)
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
pE(d){return this.aqF(d)},
aqF(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pE=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pE(d),$async$pE)
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
return B.p($async$pE,v)},
Lx(d){return this.aSF(d)},
aSF(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lx=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ly(d),$async$Lx)
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
if(d instanceof B.ma){if(d.b==="42501")return new B.vQ(d.a)
return new B.tf(d.a)}if(d instanceof B.Nn)return new B.tf("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B7("Unerwarteter Fehler: "+B.j(d))},
$iaFg:1}
A.qj.prototype={
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
A.aBJ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o4.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CN.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o5.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yw.prototype={
GR(d){return this.aqD(0)},
aqD(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GR=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dw)
s=t.r
r=s.aJ(0,$.xr(),x.P)
p.a=null
w=3
return B.k(B.pf(new A.aFb(p,t,r),x.H),$async$GR)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bwd()
s=s.e
s===$&&B.a()
s.ci(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GR,v)},
Lw(){return this.aSE()},
aSE(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lw=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dw)
s=t.r.aJ(0,$.xr(),x.P)
q.a=null
w=3
return B.k(B.pf(new A.aFa(q,t,s),x.H),$async$Lw)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)}}
A.yx.prototype={
du(d,e){var w=null,v=e.ao($.xr(),x.P),u=e.ao($.bwd(),x.aN)
return B.t5(B.dt(B.b([new B.fx("Finanzen","Dashboard",new A.agC(e.ao($.bwb(),x.b).gjc(),new A.aFl(this,d,e),new A.aFm(this,d,e),new A.aFn(d),new A.aFo(d),new A.aFp(this,d,e,v),w),w),C.az,new A.aod(v,w),C.c6,D.agd,C.c6,B.dc(u,new A.aFq(),new A.aFr(),new A.aFs(),!1,!0,!1,x.d,x.l)],x.p),w,C.cN,w,C.E,!1),C.n,new A.aFt(e))},
Jl(d,e){return this.aL9(d,e)},
aL9(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jl=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwb()
w=3
return B.k(e.aJ(0,s.ghP(),x.F).GR(0),$async$Jl)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.bm(B.c5(null,null,null,null,null,C.t,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jl,v)},
Bi(d,e){return this.awC(d,e)},
awC(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bi=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bwb().ghP(),x.F).Lw(),$async$Bi)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bm(D.aya)
w=1
break}t=B.ou(C.u,10)
w=4
return B.k($.bN3().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bi)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bi,v)},
Bj(d,e,f){return this.aIQ(d,e,f)},
aIQ(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bj=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j8(null,null,!0,null,new A.aFj(f,d),d,null,!0,!0,x.cJ),$async$Bj)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nI(e.aJ(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dR()
m=n.aq(p)
n=n.aq(o)
w=8
return B.k(r.zy("finance_period",p,o,B.a5(["period_from",p.eg()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bj)
case 8:if(d.e!=null)d.P(x.q).f.bm(F.vd)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bj,v)}}
A.agC.prototype={
q(d){var w=this,v=null,u=A.alZ(C.n,F.hU,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.alZ(v,D.ac7,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.alZ(v,D.y0,v,s?v:w.d,"sevDesk synchronisieren"),q=A.alZ(C.a8,C.jj,C.a8,s?v:w.e,"PDF-Export")
return B.aj(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.alZ(C.ae,C.fO,C.ae,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.G,0,v,v)}}
A.alY.prototype={
q(d){var w,v=this,u=null,t=B.az(12),s=B.az(12),r=B.az(12),q=v.w
if(q==null)q=C.a5
q=B.cp(q,1)
w=v.r
if(w==null)w=C.h
return B.B3(B.dC(!1,C.W,!0,t,B.es(!1,s,!0,B.aS(u,B.ca(v.c,w,u,20),C.p,u,u,new B.aL(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a9,0,u,u,u,u,u,C.bk),u,v.d,u,u)}}
A.aod.prototype={
du(d,e){var w=null,v=this.e,u=$.dR(),t=x.p
return B.by(w,B.a9(B.b([D.a9m,C.D,B.aj(B.b([D.acZ,C.aC,B.ax(B.i(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,w,B.y(C.h,16,C.I),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.v,B.kr(C.cj,B.b([new A.J_("Monat",new A.bhS(e),w,w),new A.J_("Jahr (YTD)",new A.bhT(e),w,w),new A.J_("Zeitraum w\xe4hlen \u2026",new A.bhU(this,d,e),D.abd,w)],t),C.du,6,8)],t),C.z,C.f,C.i),w,w,C.F,w,3)},
IH(d,e){return this.aHJ(d,e)},
aHJ(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IH=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bc(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avC(new A.bhR(),d,B.bN(B.aY(t)-5,1,1,0,0,0,0),new B.lK(s.a,s.b,x.bz),B.bN(B.aY(t)+1,1,1,0,0,0,0),C.e3),$async$IH)
case 2:r=g
if(r!=null)e.aJ(0,$.xr().ghP(),x.V).ue(0,new E.lQ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IH,v)}}
A.J_.prototype={
q(d){var w=null,v=B.az(9999),u=B.az(9999),t=B.az(9999),s=B.cp(C.a5,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.ca(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.I),w,w,w))
return B.dC(!1,C.W,!0,v,B.es(!1,u,!0,B.aS(w,B.aj(q,C.k,w,C.f,C.G,0,w,w),C.p,w,w,new B.aL(w,w,s,t,w,w,C.B),w,w,w,w,C.j6,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a9,0,w,w,w,w,w,C.bk)}}
A.Jr.prototype={
q(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.k6(new A.box(this)),C.c6,D.a9q,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.aj(B.b([D.adp,C.as,B.ax(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.q,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a9,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agA(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a9(w,C.k,C.f,C.i))}return B.a9(q,C.aa,C.f,C.i)}}
A.agA.prototype={
q(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a9,s=B.cp(u?C.n:C.a5,1),r=B.az(4),q=w.c
r=B.aS(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bB(C.h,14,C.o),v,v,v),C.p,v,v,new B.aL(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ac,v,B.y(C.h,14,C.I),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.ax(B.a9(B.b([q,B.i(t,v,v,v,v,B.y(C.q,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dz().aq(w.f)
return B.by(v,B.aj(B.b([r,C.as,t,B.i(q,v,v,v,v,B.y(u?C.ae:C.h,15,C.I),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.dU,v,3)}}
A.I6.prototype={
q(d){var w=null
return B.by(C.a8,B.aj(B.b([D.adY,C.as,B.ax(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fK,w,C.F,w,3)}}
A.a7a.prototype={
du(d,e){return B.dc(e.ao($.bPv(),x.e),new A.aKl(),new A.aKm(),new A.aKn(),!1,!0,!1,x.X,x.l)}}
A.Iq.prototype={
q(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.avs,C.v,B.k6(new A.beZ(v,q,100-t.w.a,w,p)),C.v,new A.ali(u),C.az,D.avr,C.v,new A.ahv(t,u),C.az,D.avm,C.v,B.bz(u,!0,u,B.k2(u,B.by(u,new A.U6(t,220,u),u,u,C.F,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf_(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.avg,C.v,B.bz(u,!0,u,B.k2(u,new A.Uj(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf0(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.az,D.avk,C.v,new A.amZ(t,u),C.az,D.avh,C.v,new A.aji(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.az,D.avo,C.v,new A.asK(t,u)],s))
return B.a9(r,C.aa,C.f,C.i)}}
A.ali.prototype={
q(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.q,11,C.l).de(1.35),w,w,w)}}
A.amv.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.a8:C.ae
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bf1(m,d):l
r=x.p
q=B.b([B.ax(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.q,10,C.o).fj(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cp(C.a8,0.8)
n=B.az(4)
q.push(B.aS(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a8,9,C.o),l,l,l),C.p,l,l,new B.aL(l,l,o,n,l,l,C.B),l,l,l,l,C.nr,l,l,l))}q=B.b([B.aj(q,C.k,l,C.f,C.i,0,l,l),C.aY,B.a5p(C.dc,B.i(m.d,l,l,l,l,B.bB(w,22,C.o),l,l,l),C.iQ)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ac,l,B.y(C.q,10,C.aE),l,l,l))
q.push(C.cz)
q.push(B.aj(B.b([new A.UU("Vormonat",m.r,l),C.cg,new A.UU("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.cz)
q.push(B.ax(new A.Yw(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.k2(l,B.by(l,B.a9(q,C.z,C.f,C.i),l,l,C.cp,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.UU.prototype={
q(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.az(4)
return B.aS(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.q,9,C.o),r,r,r),C.p,r,r,new B.aL(C.a5,r,r,q,r,r,C.B),r,r,r,r,C.nr,r,r,r)}w=q>=0
v=w?C.ae:C.a8
u=v.es(0.12)
t=B.cp(v,0.7)
s=B.az(4)
return B.aS(r,B.aj(B.b([B.ca(w?F.aao:D.aan,v,r,10),C.Zs,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.G,0,r,r),C.p,r,r,new B.aL(u,r,t,s,r,r,C.B),r,r,r,r,C.nr,r,r,r)}}
A.Yw.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ey(v,j[v]))
u=C.b.jI(j,new A.bny())
t=C.b.jI(j,new A.bnz())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bnA(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5v(k,!1)
w=B.b([A.aKC(k,2,A.axS(!1,C.n.es(0.16),0,k,!0,D.w9),C.n,0.35,k,D.E2,k,!0,!1,!0,!1,D.Fr,!1,10,D.YV,!0,C.ls,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Os(A.bxV(k,k,k,D.amc,l,D.BT,D.DZ,D.E3,w,D.agh,k,m,k,n,D.Yf,D.amd,D.a9G),C.al,C.a2,k,k)}}
A.U6.prototype={
q(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aKZ
w=C.b.fA(p,0,new A.b5F())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ay0(B.b([A.a1c(q,q,D.Bk,q,C.n,q,q,q,r.b,6),A.a1c(q,q,D.Bk,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bQ(A.bDu(A.axU(q,q,u,q,q,A.a5v(q,!1),q,new A.yz(!0,!0,q,new A.b5G(),A.a_J(),!1,q,A.avm(),A.a_J()),q,v,q,q,new A.uX(!0,new A.pg(16,q,new A.q9(!0,new A.b5H(this),46,q),!0),D.ks,D.ks,new A.pg(16,q,new A.q9(!0,new A.b5I(p),26,q),!0)))),this.d,q)},
aKp(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Uj.prototype={
q(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6z(),w),x.i)
C.b.K(o,new B.ab(u,new A.b6A(),w))
t=C.b.fA(o,0,new A.b6B())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ay0(B.b([A.a1c(q,q,q,q,C.n,q,q,q,v[s],14),A.a1c(q,q,q,q,C.ae,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bQ(A.bDu(A.axU(q,q,n,q,q,A.a5v(q,!1),q,D.E3,q,o,q,q,new A.uX(!0,D.ks,D.ks,D.ks,new A.pg(16,q,new A.q9(!0,new A.b6C(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.F,q,3)}}
A.amZ.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aKY
w=new B.ab(l,new A.bfy(),B.ae(l).i("ab<1,F>")).jI(0,new A.bfz())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dz()
o=r.d
n=new B.aV(4,4)
o=B.b([new B.iq(C.ak,C.f,C.i,C.k,m,C.b1,m,0,B.b([new B.jX(1,C.dB,B.a9(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,m,B.y(C.q,12,C.aE),m,m,m)],v),C.z,C.f,C.i),m),C.aC,B.i(p.aq(o),m,m,m,m,B.bB(C.h,16,C.o),m,m,m)],v),m),C.cz,new B.Dt(new B.d1(n,n,n,n),C.bw,B.ER(C.a5,8,C.d.bp(o/w,0,1),D.B8),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_M(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.K(u,o)}return B.by(m,B.a9(u,C.k,C.f,C.i),m,m,C.F,m,3)}}
A.aji.prototype={
q(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.ax(new A.Cf("Aktive Kunden",""+s,u),1)
w=B.ax(new A.Cf("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.by(u,B.aj(B.b([s,w,B.ax(new A.Cf("\xd8-Warenkorb",v.aq(t.d),u),1),B.ax(new A.Cf("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.F,u,3)}}
A.Cf.prototype={
q(d){var w=null
return B.a9(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.q,10,C.o).fj(0.6),w,w,w),C.bl,B.i(this.d,w,w,w,w,B.bB(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.G)}}
A.asK.prototype={
q(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bpP(),B.ae(q).i("ab<1,F>")).jI(0,new A.bpQ()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([new B.iq(C.ak,C.f,C.i,C.k,r,C.b1,r,0,B.b([new B.jX(1,C.dB,B.i(u.b,r,1,C.ac,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.q,12,C.I),r,r,r),B.i($.dz().aq(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aY,new B.Dt(new B.d1(s,s,s,s),C.bw,B.ER(C.a5,6,C.d.bp(t/p,0,1),D.B8),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.K(u)===B.K(s)&&B.a_M(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.by(r,B.a9(n,C.k,C.f,C.i),r,r,C.F,r,3)}}
A.wO.prototype={
q(d){var w=null
return B.by(w,B.i(this.c,w,w,w,w,B.y(C.q,13,C.l),w,w,w),C.a9,w,C.F,w,3)}}
A.ahv.prototype={
du(d,e){return B.dc(e.ao($.bwc(),x.fM),new A.b43(this,d,e),new A.b44(),new A.b45(),!1,!0,!1,x.h,x.l)}}
A.Bf.prototype={
W(){return new A.TJ()},
aXH(){return this.d.$0()}}
A.TJ.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.bc(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fi(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pD[t].a
if(v)r=""
else{r=B.bi(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bL(new B.cV(r,C.bJ,C.aR),$.ah()))}q.e!==$&&B.b3()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c8(v,v.r,v.e,B.l(v).i("c8<2>"))
while(v.u()){w=v.d
w.S$=$.ah()
w.T$=0}this.al()},
rj(d){var w=this.e
w===$&&B.a()
w=C.c.b6(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.ju(B.b0(w,",","."))
return w==null?0:w},
a3T(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pD[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b0(s,".",",")
t.ku(0,t.a.y0(C.aR,C.bJ,s))}}this.J(new A.b3S())},
aEl(){this.a3T(D.aq2)
this.c.P(x.q).f.bm(D.ayu)},
HX(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HX=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b9(a1)
for(e=0;e<8;++e)a2.E(0,D.pD[e].a)
q=a2
t=4
w=7
return B.k($.aF4.ck().ze(B.b(["csv","txt"],x.s),C.xN,!0),$async$HX)
case 7:p=a5
a2=p
o=a2==null?null:J.Kb(a2.a).c
if(o==null){w=1
break}n=C.aG.ad7(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BY.cN(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.awe(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ch(k)<2)continue
j=C.c.b6(J.a3(k,0)).toLowerCase()
i=J.CJ(q,j)?j:D.aqt.h(0,j)
if(i==null)continue
d=C.c.b6(C.b.n7(J.bQi(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.ju(h)
if(g!=null)J.fq(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bm(D.ay7)
w=1
break}r.a3T(m)
r.c.P(x.q).f.bm(B.c5(null,null,null,null,null,C.t,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HX,v)},
I7(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I7=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b3T(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_9("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eg(),0,10),"p_cash_and_bank",q.rj("cash_and_bank"),"p_receivables",q.rj("receivables"),"p_inventory_value",q.rj("inventory_value"),"p_other_current_assets",q.rj("other_current_assets"),"p_fixed_assets",q.rj("fixed_assets"),"p_current_liabilities",q.rj("current_liabilities"),"p_long_term_liabilities",q.rj("long_term_liabilities"),"p_equity",q.rj("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I7)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXH()
o=q.c
o.toString
B.ba(o,!1).f2()
q.c.P(x.q).f.bm(D.ayb)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bm(B.c5(null,null,null,null,null,C.t,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.N,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b3U(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I7,v)},
q(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bB(C.h,18,C.o),r,r,r),p=s.f?r:new A.b3W(s,d),o=s.d
o===$&&B.a()
p=B.hv(D.ad0,B.i("Stichtag: "+C.c.a0(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.ax(B.hv(D.ae6,D.aEc,o?r:s.gaDn(),r),1)
v=x.p
w=B.b([p,C.D,B.aj(B.b([w,C.aC,B.ax(B.hv(D.adW,D.aE1,o?r:s.gaEk(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pD[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f3(r,C.aV,!1,r,!0,C.t,r,B.fg(),o.h(0,p.a),r,r,r,r,r,2,new B.cg(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.iw,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.at,r,C.a3,r,r,r,r),C.D],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.q,11,C.l),r,r,r))
p=B.bQ(B.fb(B.a9(w,C.aa,C.f,C.G),r,C.E),r,380)
o=s.f
w=B.dF(C.cZ,r,r,o?r:new A.b3X(d),r,r)
o=o?r:s.gaE4()
t=B.dM(C.n,C.h,r,r,r,r,r)
return B.lD(B.b([w,B.dZ(s.f?F.Zv:C.ey,o,t)],v),C.m,p,q)}}
A.bg.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_M(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.eC(B.K(this))^B.bLq(this.gbD()))>>>0},
j(d){B.bEK()
return B.K(this).j(0)}}
A.KY.prototype={
W(){return new A.TK(B.A(x.S,x.I),new A.ay3(B.A(x.x,x.T)),null,null)}}
A.TK.prototype={
q(d){var w,v=this,u=v.a1R(),t=v.CW
t.toString
t=v.a1S(t.au(0,v.gft().gp(0)))
w=v.a1S(u)
v.a.toString
return new A.KT(new A.a1b(t,w,null),u,null)},
a1S(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ay0(s.c,s.d,!1,r,s.a))}return d.aPH(w)},
a1R(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UF(t.ch)
if(r)s=w.a
r=t.y
t=t.aQC(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPI(A.bwE(!1,!0,!0,v.d,v.c,u.gas9(),v.f,v.e))}return t},
asa(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafx()||e==null||e.a==null){w=v.cy
v.J(w.gaP6(w))
return}v.J(new A.b48(v,e))},
lw(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1R(),new A.b49(w)))}}
A.nO.prototype={
Ve(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axU(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQC(d,e){return this.Ve(null,null,d,e)},
aPI(d){return this.Ve(null,d,null,null)},
aPH(d){return this.Ve(d,null,null,null)},
Xa(d,e,f){var w,v,u,t=A.ky(d.ch,e.ch,f,A.c3I(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bER(d.d,e.d,f),q=A.bGK(d.e,e.e,f),p=A.bEP(d.c,e.c,f),o=e.a
o=A.a5v(B.a1t(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axU(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bEM(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axT.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fE.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ay1(),B.ae(v).i("ab<1,F>")).jI(0,new A.ay2())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ik.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mE.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a18.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1d.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ae4.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1e.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D3.prototype={
gbD(){return[this.a,this.b,C.bI,C.w,null]}}
A.KZ.prototype={}
A.a1f.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xG.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.ahr.prototype={}
A.ahy.prototype={}
A.ahz.prototype={}
A.ahB.prototype={}
A.ahC.prototype={}
A.ahD.prototype={}
A.ahE.prototype={}
A.ahF.prototype={}
A.ahG.prototype={}
A.ay3.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uz(0,0,!1)
v=new A.zm(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uz(t,u,!0)}w=null
try{w=C.b.oV(d,new A.ay4())}catch(s){return new A.uz(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ahA.prototype={}
A.ay5.prototype={
ia(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_W(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac8(t,A.bwD(w,t.a),u)
l.y=u
l.aRY(e,u,f)
l.alH(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aS6(d,e,m,t,r,s,n,o,f)}}},
ac8(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dK("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iR(p,B.ae(p).i("iR<1>")).aw(0,new A.ay6(t,q,r,s))
w.push(new A.a6b(q))}return w},
aRY(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
a4=B.Qa(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qa(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.H:f).gp(0)
k.seU(null)
a6=b3.f.em()
u.drawRRect(B.ly(a4),a6)
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
u.clipRect(B.dQ(b1),$.p5()[1],!0)
a6=b3.f.em()
u.drawRRect(B.ly(a4),a6)
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
n=new B.hg(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.il(k)
v.fW(A.aBc(b2,o.r),b3.r)}}}},
aS6(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AW(a5,a5,a5,a5,B.d3(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lA().ZW(a8,a7.b),a7.a),C.bI,C.w,a5,b6.c,C.bA)
w.afR(b1.f)
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
m=v+4+(o.gd_(0)+o.gd3(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aGA)j=v===D.a_a&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZX(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.G0(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lA().Kn(new B.G(v,t),d).b
s=$.lA()
q=w.b
p=q.c
q=q.a.c
a0=s.Kn(new B.G(p,q.gbU(q)),d)
q=g.gca()
p=w.b.c
s=g.gai6()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VQ(d,new A.ay7(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aS4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Qa(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a1:new B.aV(i.z,i.Q)
p=v?C.a1:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a1
q=B.Qa(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a1)}else q=B.byB(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Ww(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac8(b2,A.bwD(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1f(d,q,a0,o,a2,a1,new A.ey(d.a,v),new B.r(n,t))}}return null}}
A.a6b.prototype={}
A.a1b.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.ay5()
t.a18()
$.an()
w=B.aZ()
w.b=C.bf
t.f=w
w=B.aZ()
w.b=C.aX
t.r=w
w=B.aZ()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.aZ()
w.b=C.aX
w.r=C.H.gp(0)
w.c=1
t.x=w
t=new A.abe(this.d,v,u,t,d,C.bp,new B.bp(),B.aJ(x.v))
t.bj()
t.YS(v.cy)
t.aeZ()
return t},
by(d,e){e.sio(0,this.d)
e.sYD(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bg()}}
A.abe.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bg()},
sYD(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0G(d.cy)
w.bg()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bg()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1G(t,v),new A.vM(u.aC,u.i4,u.cW,x.Q))
s.restore()},
ZQ(d){var w=this,v=w.gC(0)
return new A.KZ(w.fX.Ww(d,v,new A.vM(w.aC,w.i4,w.cW,x.Q)))}}
A.a11.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D2.prototype={
L(){return"AxisSide."+this.b}}
A.ty.prototype={}
A.q9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acD.prototype={
gbD(){return[!1,0,0,0]}}
A.pg.prototype={
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
A.pD.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ae6.prototype={
gbD(){return[this.a,this.b]}}
A.Qe.prototype={
gbD(){return[this.a,this.b]}}
A.mY.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nm.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kQ.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lh.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6m.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aet.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MS.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uW.prototype={}
A.N2.prototype={
adz(d,e,f){var w,v
$.an()
w=B.aZ()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iT(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahm.prototype={}
A.ahq.prototype={}
A.akF.prototype={}
A.akY.prototype={}
A.akZ.prototype={}
A.al0.prototype={}
A.al1.prototype={}
A.alO.prototype={}
A.alN.prototype={}
A.alP.prototype={}
A.apm.prototype={}
A.ar9.prototype={}
A.ara.prototype={}
A.asO.prototype={}
A.atr.prototype={}
A.atq.prototype={}
A.ats.prototype={}
A.axJ.prototype={
MB(d,e,f,g,h,i){return new B.ie(this.aVM(d,e,f,g,h,i),x.g4)},
aVL(d,e,f,g){return this.MB(d,e,f,!0,g,!0)},
aVM(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MB(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lA().aje(s,u,v,w)
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
A.KS.prototype={
a18(){var w,v=this
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
w.a_X(d,e,f)
w.aRU(e,f)
w.aS3(e,f)
w.aS2(e,f)},
aS2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lA().OF(w.a,a1.r-a1.f)
u=$.bvP().MB(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.ff(u.a(),u.$ti.i("ff<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.l4(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mQ(0,i))}else{if(k==null)k=C.H
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dy(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lA().OF(w.b,a1.y-a1.x)
u=$.bvP().MB(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.ff(u.a(),u.$ti.i("ff<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dG(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.l4(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mQ(0,i))}else{if(p==null)p=C.H
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dy(n,m,d.a,f.d)}},
aRU(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aS3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l4(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mQ(0,s))}else{r.r=(q==null?C.H:q).gp(0)
r.seU(null)}o=n.e.em()
w.drawRect(B.dQ(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.l4(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mQ(0,s))}else{v.r=(r==null?C.H:r).gp(0)
v.seU(null)}o=n.e.em()
j.drawRect(B.dQ(s),o)
o.delete()}},
aS1(d,e,f){var w,v
this.a_X(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adA(d,e,f,w)
if(v.b.length!==0)this.aS8(d,e,f,w)},
adA(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l4(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mQ(0,i))}else{if(k==null)k=C.H
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
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
s.adB(0,n,new B.r(h,o),k)}}},
aS8(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l4(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mQ(0,i))}else{if(k==null)k=C.H
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
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
s.adB(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZX(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KT.prototype={
gakZ(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal_(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal0(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakX(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alk(d){var w,v=this,u=null,t=v.d,s=A.bxm(t.d),r=t.a
r=r.a&&A.bQS(r.b)?r.b:u
w=B.b([B.aS(u,v.c,C.p,u,u,new B.aL(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.axL(w)
if(v.gakZ())C.b.hz(w,s.$1(!0),new A.AG(D.Bf,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal0())C.b.hz(w,s.$1(!0),new A.AG(D.mE,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal_())C.b.hz(w,s.$1(!0),new A.AG(D.Bg,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakX())C.b.hz(w,s.$1(!0),new A.AG(D.dN,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
q(d){return B.k6(new A.axK(this))}}
A.RF.prototype={
W(){return new A.Yl(new B.bk(null,x.eF))}}
A.Yl.prototype={
axC(){switch(this.a.c.a){case 0:return C.ec
case 1:return C.fE
case 2:return C.dc
case 3:return C.dL}},
ay7(){switch(this.a.c.a){case 0:return new B.ag(0,0,8,0)
case 1:return new B.ag(0,0,0,8)
case 2:return new B.ag(8,0,0,0)
case 3:return new B.ag(0,8,0,0)}},
axE(d){this.a.toString
return},
ap(){this.aI()
$.cB.x1$.push(this.ga4m())},
bc(d){this.bE(d)
$.cB.x1$.push(this.ga4m())},
q(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay7()
return B.Hf(B.b1s(0,B.aS(v.axC(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.acE.prototype={
bn(d){return A.bQJ(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a12.prototype={
hn(d){if(!(d.b instanceof B.hq))d.b=new B.hq(null,null,C.u)},
hY(d){if(this.B===C.ak)return this.y9(d)
return this.adb(d)},
aKB(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a91(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a90(d,B.hF())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a90(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hi(u,null)
break
case 1:q=B.hi(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a91(p)
t=Math.max(t,o.aKB(p))
m=r.aG$}return new A.bf7(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a90(o,B.mA()),m=n.a,l=n.b
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
q=s.b-p.a91(r==null?B.T(B.Z("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.ya(d,e)},
aM(d,e){if(this.gC(0).gZ(0))return
this.a4.sbi(0,null)
this.v2(d,e)},
l(){this.a4.sbi(0,null)
this.aoh()}}
A.bf7.prototype={}
A.axM.prototype={}
A.jR.prototype={
gbD(){return[this.a,this.b]}}
A.nN.prototype={}
A.ahn.prototype={}
A.aho.prototype={
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
A.ahp.prototype={}
A.TH.prototype={
l(){var w,v,u
for(w=this.W3$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AG.prototype={
goA(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dc
case 1:return C.dL
case 2:return C.ec
case 3:return C.fE}},
gb_m(){var w=this.d,v=A.bxm(w.d),u=A.bEO(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).af(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).af(0,new B.ag(u.a,0,u.c,0))}},
gahV(){var w=this.d,v=A.bEO(w.a),u=A.bxm(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd3(0)+(v.gd_(0)+v.gd3(0))
case 1:case 3:return u.gew()+v.gew()}},
aWu(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goA().c.d
if(o==null)o=$.lA().OF(d,f-e)
w=p.c
v=w!==D.mE
if((!v||w===D.dN)&&p.d instanceof A.nO){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bwD(u,d)
w=new B.iR(t,B.ae(t).i("iR<1>"))
s=w.giG(w).f1(0,new A.aZp(u),x.W).fZ(0)}else{r=$.bvP()
w=!v||w===D.dN
v=p.d
q=r.aVL(w?v.w:v.z,o,f,e)
v=B.oj(q,new A.aZq(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ae(s).i("ab<1,nN>")
w=B.Q(new B.ab(s,new A.aZr(p,e,f,o,g,d),w),w.i("av.E"))
return w},
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goA()
w=j.goA()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aS(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mE
u=!v
t=!u||w===D.dN
s=j.e
r=t?s.a:s.b
t=j.ghJ()
s=!u||w===D.dN?C.E:C.ak
q=B.b([],x.p)
if(w===D.Bf||v)j.goA()
if(j.goA().c.a){v=!u||w===D.dN?r:j.goA().c.c
p=!u||w===D.dN?j.goA().c.c:r
o=j.gb_m()
n=!u||w===D.dN?C.ak:C.E
j.gahV()
m=j.gahV()
l=!u||w===D.dN
k=j.d
l=l?k.f:k.x
u=!u||w===D.dN?k.r:k.y
q.push(B.aS(i,A.bY0(new A.axM(),n,j.aWu(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bg||w===D.dN)j.goA()
return new B.e5(t,i,i,B.bTw(q,C.k,s,i,C.f,C.G,0,i,i,C.b1),i)}}
A.a1h.prototype={
gbD(){return[this.a,this.b]}}
A.a5u.prototype={
gbD(){return[this.a,this.b]}}
A.N9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5w.prototype={
gabt(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayg.prototype={}
A.aEB.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahJ.prototype={}
A.akV.prototype={}
A.akW.prototype={}
A.al2.prototype={}
A.L1.prototype={
ia(d,e,f){}}
A.vM.prototype={}
A.hp.prototype={
gdL(){return null},
gafx(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.N8
if(w)return!0
return!(v instanceof A.N5)&&!(v instanceof A.N4)&&!(v instanceof A.N6)&&!(v instanceof A.N3)&&!w&&!(v instanceof A.N7)}}
A.a5A.prototype={
gdL(){return this.a.b}}
A.a5B.prototype={
gdL(){return this.a.b}}
A.a5C.prototype={
gdL(){return this.a.b}}
A.N4.prototype={}
A.N5.prototype={}
A.a5F.prototype={
gdL(){return this.a.b}}
A.N7.prototype={}
A.N8.prototype={
gdL(){return this.a.b}}
A.a5z.prototype={
gdL(){return this.a.b}}
A.a5y.prototype={
gdL(){return this.a.b}}
A.N3.prototype={
gdL(){return this.a.b}}
A.a5D.prototype={
gdL(){return this.a.gdL()}}
A.a5E.prototype={
gdL(){return this.a.gdL()}}
A.N6.prototype={
gdL(){return this.a.gdL()}}
A.Gc.prototype={
YS(d){this.V=d.b
this.U=d.c
this.a4=d.d},
aeZ(){var w=this,v=null,u=w.ai=B.byi(v,v)
u.ay=new A.aUH(w)
u.ch=new A.aUI(w)
u.CW=new A.aUJ(w)
u.cy=new A.aUK(w)
u.cx=new A.aUL(w)
u=w.aE=B.H_(v,-1,v)
u.B=new A.aUM(w)
u.Y=new A.aUN(w)
u.V=new A.aUO(w)
u=w.bC=B.a7u(v,w.a4,v)
u.p3=new A.aUP(w)
u.p4=new A.aUQ(w)
u.RG=new A.aUR(w)},
cz(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kK(d){return!0},
n_(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bC
w===$&&B.a()
w.rG(d)
w=v.aE
w===$&&B.a()
w.rG(d)
w=v.ai
w===$&&B.a()
w.rG(d)}else if(x.gJ.b(d))v.l7(new A.a5E(d))},
gN4(d){return new A.aUS(this)},
gN6(d){return new A.aUT(this)},
l7(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZQ(w):null
u.V.$2(d,v)
u.Y=C.bp},
gKT(d){return this.Y},
gFu(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fs(d)
this.ar=!0},
aF(d){this.ar=!1
this.fi(0)},
$ijp:1}
A.Os.prototype={
W(){return new A.W6(B.b([],x.r),B.A(x.S,x.I),new A.aKE(B.A(x.y,x.dj)),null,null)}}
A.W6.prototype={
q(d){var w,v=this,u=v.a4o(),t=v.CW
t.toString
t=v.ab2(t.au(0,v.gft().gp(0)))
w=v.ab2(u)
v.a.toString
return new A.KT(new A.a7m(t,w,null),u,null)},
ab2(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ae(w).i("ab<1,ed>")
w=B.Q(new B.ab(w,new A.bfc(this,d),v),v.i("av.E"))
return d.aQz(w,this.cy)},
a4o(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UF(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQO(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQd(new A.EQ(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayW(),t.c,t.d))}return r},
ayX(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafx())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfa(v))
return}v.J(new A.bfb(v,e))},
lw(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4o(),new A.bfd(w)))}}
A.pQ.prototype={
Xa(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5v(B.a1t(d.a.b,j.b,f),j.a)
w=A.bEM(d.at,e.at,f)
v=A.bEP(d.c,e.c,f)
u=A.bER(d.d,e.d,f)
t=A.bGK(d.e,e.e,f)
s=A.ky(d.ch,e.ch,f,A.c5N(),x.cz)
s.toString
r=A.ky(d.CW,e.CW,f,A.c5M(),x.J)
r.toString
u=A.bxV(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vf(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bxV(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQO(d,e,f,g){return this.Vf(null,null,d,e,f,g,null)},
aQd(d){var w=null
return this.Vf(w,d,w,w,w,w,w)},
aQz(d,e){var w=null
return this.Vf(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ed.prototype={
aqW(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oV(n.a,new A.aKD())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
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
acR(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKC(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQk(d){return this.acR(d,null)},
aQm(d){return this.acR(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ot.prototype={
gbD(){return[this.a]}}
A.a1a.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mF.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KX.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yy.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKo.prototype={
L(){return"LabelDirection."+this.b}}
A.a5x.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EQ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7n.prototype={
gbD(){return[4,C.hN,16,D.xK,0,120,A.c5P(),!1,!1,!1,0,C.K,A.c5O()]}}
A.n0.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qh.prototype={}
A.rz.prototype={
gbD(){return[this.a,this.b,C.bI,C.w,null]}}
A.tz.prototype={
gbD(){return[this.a,this.b]}}
A.GE.prototype={
gbD(){return[this.a]}}
A.Ou.prototype={}
A.zi.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.ahw.prototype={}
A.ahx.prototype={}
A.ahK.prototype={}
A.akX.prototype={}
A.al_.prototype={}
A.amC.prototype={}
A.amD.prototype={}
A.amE.prototype={}
A.amG.prototype={}
A.amH.prototype={}
A.amI.prototype={}
A.amJ.prototype={}
A.ar8.prototype={}
A.asN.prototype={}
A.aKE.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yk
u=new A.zm(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zj(s,r,q,t,!0)}w=null
try{w=C.b.oV(d,new A.aKF())}catch(p){return D.yk}v=null
try{v=C.b.oV(w.a,new A.aKG())}catch(p){return D.yk}o=v.a
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
A.amF.prototype={}
A.aKH.prototype={
ia(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabt(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aZ())
a3.aPd(new B.H(0,0,u,v))}d.a_W(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aS_(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRW(a3,q,a4)
d.aS0(a3,q,a4)
d.alG(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dK("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vv(q,i,j,k))}}d.aS7(a3,s,a4)
if(w.gabt(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aS5(a2,a3,v,f,new A.GE(g),a4)}},
aRW(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxl(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zp(o,e,u,f)
s=p.aj6(o,e,t,u,f)
r=p.Zr(o,e,t,u,f,!0)
q=p.aj5(o,e,t,u,f)
p.aRZ(d,s,p.Zo(o,e,t,u,f,!0),f,e)
p.aRT(d,q,r,f,e)
p.aRX(d,t,e)
p.aRV(d,t,e,f)}},
aS_(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bxl(a6.a),a9=A.bxl(a7.a)
if(a8.length!==a9.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ae(m).i("cI<1>")
k=B.Q(new B.cI(m,l),l.i("av.E"))
j=a3.Zp(a4,a6,n,b3)
i=a3.Zq(a4,a7.aQm(k),k,b3,j)
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
a1.seU(u.mQ(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.H:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mI(C.dx,C.bf,C.e6,C.ew,C.dV).em()
m=B.dQ(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.T(B.vs(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aS0(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zv(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adz(s,q,new B.r(p,o))}}},
aS7(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKK())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Zv(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.ry(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lw(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lw(q.$2(m,k))))
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
b0=B.l4(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mQ(0,b0))}else{if(a4==null)a4=C.H
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dy(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.ry(d.a))
f.adz(t,j,new B.r(h,g))}}},
Zq(d,e,f,g,h){var w=this.aj7(d,e,f,g,h)
return w},
Zp(d,e,f,g){return this.Zq(d,e,f,g,null)},
aj7(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cH($.an().r):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f9(d,a0))
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
s=new B.LX(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.il(r)}return g},
Zr(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bxT(f)
v=J.Y(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.po())
return w},
aj6(d,e,f,g,h){return this.Zr(d,e,f,g,h,!1)},
Zo(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bxT(f)
v=J.Y(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.po())
return w},
aj5(d,e,f,g,h){return this.Zo(d,e,f,g,h,!1)},
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
A.byh(s,q.b,q.c,new B.H(v,u,t,w.b))
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
A.byh(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRX(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Ol(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.is:C.e6
u.e=C.ew
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lA()
u.z=new B.zr(C.aA,w.c*0.57735+0.5)
d.a.fW(B.bxU(A.aBc(e,f.cy),w.b),this.f)},
aRV(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.is:C.e6
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
A.byh(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bVY(t)
d.a.fW(A.aBc(e,f.cy),s.f)},
aS5(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bKW(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dK("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lA().ZW(b4,u.b)
s=u.a
r=w.k(0,C.iW)?new B.kt(1):w
q=new B.tw(new B.hA(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.bI,C.w,r,a8,a8,a8,a8,C.bA,a8)
q.afR(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.hN.gew()
k=o+(w-1)*4+(C.hN.gd_(0)+C.hN.gd3(0))
j=t-k-16
i=a7.ZX(b3,l,D.xK,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.G0(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bKV(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lA().Kn(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lA().Kn(new B.G(t,w),0)
if(!C.K.k(0,C.K)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VQ(0,new A.aKI(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bYC(q.r,q.w)
A:{if(D.Eb===a5){a6=a3
break A}if(D.Ec===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VQ(0,new A.aKJ(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zv(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Ww(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajy(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKL())
return t.length===0?null:t},
ajy(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qh(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vv.prototype={}
A.a7m.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcQ(),t=new A.aKH()
t.a18()
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
w.r=C.H.gp(0)
w.a=D.a0l
t.x=w
w=B.aZ()
w.b=C.aX
w.r=C.C.gp(0)
t.y=w
w=B.aZ()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.aZ()
w.b=C.aX
w.r=C.H.gp(0)
w.c=1
t.Q=w
t=new A.abr(this.d,v,u,t,d,C.bp,new B.bp(),B.aJ(x.v))
t.bj()
t.YS(v.cx)
t.aeZ()
return t},
by(d,e){e.sio(0,this.d)
e.sYD(this.e)
e.scQ(B.bu(d,null,x.w).w.gcQ())
e.B=d
e.bg()}}
A.abr.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bg()},
sYD(d){var w=this
if(w.i4.k(0,d))return
w.i4=d
w.a0G(d.cx)
w.bg()},
scQ(d){if(this.cW.k(0,d))return
this.cW=d
this.bg()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ia(w,new A.a1G(t,v),new A.vM(u.aC,u.i4,u.cW,x.o))
s.restore()},
ZQ(d){var w=this,v=w.gC(0)
return new A.Ou(w.fX.Ww(d,v,new A.vM(w.aC,w.i4,w.cW,x.o)))}}
A.Nz.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1G.prototype={
aPd(d){this.a.a.clipRect(B.dQ(d),$.p5()[1],!0)
return null},
adH(d,e){d.aM(this.a,e)},
VQ(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lA()
s.YB(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dy(d,e,f,g){var w=B.cH($.an().r)
w.aA(new B.f9(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fW(A.aBc(w,g),f)}}
A.zm.prototype={
gbD(){return[this.a]}}
A.amQ.prototype={}
A.a1Q.prototype={}
A.b1V.prototype={
Kn(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aX3(d,e){var w,v,u,t,s
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
aX4(d,e){var w,v
if(d==null)return D.a0w
w=d.b
v=e/2
return d.aQp(w>v?v:w)},
OF(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_6(w)},
b_6(d){if(d<1)return this.aJa(d)
return this.a85(d)},
aJa(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a85(d*q)/q},
a85(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajm(d){if(d>=1)return 1
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
ZW(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j1
w=e.a?u.w.c5(e):e
v=B.b6(d,C.vH)
v=v==null?null:v.ay
return v===!0?w.c5(C.mk):w},
aje(d,e,f,g){var w=C.d.ae(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qj)","D(ey)","~(v,fE)","F(ed,v)","R<~>()","F(F,qj)","bP(F,ty)","pD(F)","v(qh,qh)","Iq(o4)","I6(C,bI)","Jr(o5)","vA(@)","wv(@)","ed(F)","CN(@)","ai(F,ty)","uV(dD<uV>)","Ed(dD<aFg>)","F(vA)","F(wv)","wO(C,bI)","Bf(z)","~()","qj(@)","~(hp,KZ?)","xG(@)","F(ik)","D(fE)","~(v,ik)","~(@)","jR(nN)","c(nN)","jR(bH<v,F>)","jR(F)","nN(jR)","~(hp,Ou?)","ed(ed)","lQ(wl<lQ>)","zi(@)","R<o5>(ce<o5>)","tz(v)","uW(ey,F,ed,v)","rz(n0)","D(ed)","v(vv,vv)","F(fE)","R<o4>(ce<o4>)","v(v,v,F)","fE(fE,fE,F)","ik(ik,ik,F)","mE(mE,mE,F)","D3?(fE,v,ik,v)","E(fE)","c(F,ty)","ey(ey,ey,F)","D(F)","mY(mY,mY,F)","nm(nm,nm,F)","kQ(kQ,kQ,F)","lh(lh,lh,F)","f(kQ)","f(lh)","ed(ed,ed,F)","mF(mF,mF,F)","uW(ey,F,ed,v{size:F?})","D(ey,ed)","F(r,r)","u<tz>(ed,u<v>)","y9(z)","u<rz>(u<n0>)","E(n0)","yw(eE<C?>)"])
A.aFc.prototype={
$1(d){var w=B.dd(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qj(J.am(v==null?"":v),A.p1(w.h(0,"revenue_net")),A.p1(w.h(0,"expense_net")),A.p1(w.h(0,"result_net")))},
$S:z+24}
A.aFd.prototype={
$1(d){var w,v,u,t=B.dd(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.p1(t.h(0,"gross"))
u=B.bi(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vA(s,r,w,v,u,A.p1(t.h(0,"avg_basket")))},
$S:z+12}
A.aFe.prototype={
$1(d){var w,v=B.dd(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bi(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.wv(u,t,w,A.p1(v.h(0,"gross")))},
$S:z+13}
A.aFv.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CN(v,u,J.am(t==null?"expense":t),A.ud(w.h(d,"net")),A.ud(w.h(d,"tax")),A.ud(w.h(d,"gross")))},
$S:z+15}
A.btw.prototype={
$1(d){return new A.uV(d.ao($.c0(),x.A))},
$S:z+17}
A.btx.prototype={
$1(d){return new A.Ed(d.ao($.bPw(),x.D))},
$S:z+18}
A.bvo.prototype={
$1(d){return E.aFf()},
$S:z+38}
A.bty.prototype={
$1(d){var w=d.ao($.xr(),x.P)
return d.ao($.aw0(),x.a).FV(w)},
$S:z+40}
A.btv.prototype={
$1(d){var w=d.ao($.xr(),x.P)
return d.ao($.aw0(),x.a).FR(w)},
$S:z+47}
A.btu.prototype={
$1(d){return this.aiY(d)},
aiY(d){var w=0,v=B.q(x.h),u,t,s,r,q
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
$S:320}
A.aFb.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.aw0(),x.a).pE(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFa.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.aw0(),x.a).Lx(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFt.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwd()
if(s.e==null)B.T(B.Z(y.b))
s.gco().ci(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFl.prototype={
$0(){return this.a.Jl(this.b,this.c)},
$S:0}
A.aFm.prototype={
$0(){return this.a.Bi(this.b,this.c)},
$S:0}
A.aFn.prototype={
$0(){var w=x.z
return B.ba(this.a,!1).dV(B.dO(new A.aFk(),null,w),w)},
$S:0}
A.aFk.prototype={
$1(d){return F.Da},
$S:z+69}
A.aFo.prototype={
$0(){return B.oa(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFp.prototype={
$0(){var w=this
return w.a.Bj(w.b,w.c,w.d)},
$S:0}
A.aFs.prototype={
$0(){return D.asu},
$S:97}
A.aFr.prototype={
$2(d,e){return new A.I6(B.j(d),null)},
$S:z+10}
A.aFq.prototype={
$1(d){return new A.Jr(d,null)},
$S:z+11}
A.aFj.prototype={
$1(d){var w=null,v=this.a,u=$.dR()
v=B.i("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lD(B.b([B.dF(C.cZ,w,w,new A.aFh(u),w,w),B.dZ(F.vj,new A.aFi(u),B.dM(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vk)},
$S:53}
A.aFh.prototype={
$0(){B.ba(this.a,!1).di(!1)
return null},
$S:0}
A.aFi.prototype={
$0(){B.ba(this.a,!1).di(!0)
return null},
$S:0}
A.bhS.prototype={
$0(){var w=this.a.aJ(0,$.xr().ghP(),x.V),v=E.aFf()
w.ue(0,v)
return v},
$S:0}
A.bhT.prototype={
$0(){var w=this.a.aJ(0,$.xr().ghP(),x.V),v=new B.bc(Date.now(),0,!1),u=new E.lQ(B.bN(B.aY(v),1,1,0,0,0,0),v)
w.ue(0,u)
return u},
$S:0}
A.bhU.prototype={
$0(){return this.a.IH(this.b,this.c)},
$S:0}
A.bhR.prototype={
$2(d,e){return new B.oI(B.W(d).aPL(B.W(d).ax.aQE(C.h,C.n)),e,null)},
$S:1017}
A.box.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.Od(!1,C.o1,"Umsatz 7 %",t.aq(u.a),w),r=A.Od(!1,C.o1,"Umsatz 19 %",t.aq(u.b),w),q=A.Od(!0,D.abc,"Umsatz netto",t.aq(u.c),w),p=A.Od(!1,D.abb,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return E.aHJ(1.7,B.b([s,r,q,p,A.Od(!0,C.nS,"Ergebnis",n,o<0?C.a8:C.ae),A.Od(!1,C.fO,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.ie,!0)},
$S:123}
A.aKn.prototype={
$0(){return D.asr},
$S:97}
A.aKm.prototype={
$2(d,e){var w=null
return B.by(C.a8,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fK,w,C.F,w,3)},
$S:304}
A.aKl.prototype={
$1(d){return new A.Iq(d,null)},
$S:z+9}
A.beZ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ae(g).i("ab<1,F>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.beO(),f),e)
i=A.jH(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.ab(g,new A.beP(),f),e)
d=A.jH(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.ab(g,new A.beQ(),f),e)
k=A.jH(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.beR(),f),e)
w=A.jH(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.beS(),f),e)
v=A.jH(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.beT(),f),e)
u=A.jH(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.beU(),f),e)
t=A.jH(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.ab(g,new A.beV(),f),e)
h=A.jH(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.ab(g,new A.beW(m),f),e)
m=A.jH(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.ab(g,new A.beX(l),f),e)
l=A.jH(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.beY(j),f),e)
return E.aHJ(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jH(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ie,!0)},
$S:123}
A.beO.prototype={
$1(d){return d.b},
$S:z+0}
A.beP.prototype={
$1(d){return d.b/30},
$S:z+0}
A.beQ.prototype={
$1(d){return d.d},
$S:z+0}
A.beR.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beS.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.beT.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.beU.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.beV.prototype={
$1(d){return d.d},
$S:z+0}
A.beW.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.beX.prototype={
$1(d){return this.a},
$S:z+0}
A.beY.prototype={
$1(d){return this.a},
$S:z+0}
A.bf_.prototype={
$0(){return A.bA9(this.b,1.45,new A.U6(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bf0.prototype={
$0(){return A.bA9(this.b,1.6,new A.Uj(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsD.prototype={
$1(d){var w=this,v=null,u=B.az(16),t=x.p,s=B.b([B.aj(B.b([B.ax(B.i(w.a,v,v,v,v,B.bB(C.h,18,C.o),v,v,v),1),B.fj(v,v,D.ado,v,v,new A.bsC(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.q,12,C.aE),v,v,v),C.D],t))
s.push(C.v)
s.push(B.bQ(new B.lF(w.c,w.d,v),v,17976931348623157e292))
return B.a4K(v,C.m,new B.ad(C.ai,B.a9(s,C.z,C.f,C.G),v),v,v,v,C.fL,C.v2,v,new B.d6(u,C.K),v)},
$S:1018}
A.bsC.prototype={
$0(){return B.ba(this.a,!1).f2()},
$S:0}
A.bf1.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bA9(this.b,2.4,new A.Yw(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bny.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bnz.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bnA.prototype={
$1(d){return A.aKC(null,1.4,null,C.a8,0.35,D.ahF,D.E2,null,!1,!1,!1,!1,D.Fr,!1,10,D.YV,!0,C.ls,B.b([new A.ey(0,d),new A.ey(this.a,d)],x.U))},
$S:z+14}
A.b5F.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5H.prototype={
$2(d,e){var w=null
return B.i(this.a.aKp(d),w,w,w,w,B.y(C.q,10,C.I),w,w,w)},
$S:z+16}
A.b5I.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.vb
return new B.ad(C.kY,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.q,9,C.I),w,w,w),w)},
$S:z+6}
A.b5G.prototype={
$1(d){return D.a9E},
$S:z+7}
A.b6z.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6A.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6B.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b6C.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=3)return C.vb
return new B.ad(C.kY,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bfy.prototype={
$1(d){return d.d},
$S:z+19}
A.bfz.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bpP.prototype={
$1(d){return d.d},
$S:z+20}
A.bpQ.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b45.prototype={
$0(){return D.asA},
$S:97}
A.b44.prototype={
$2(d,e){return new A.wO("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b43.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.a9(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.I),m,m,m),C.D,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.q,12.5,C.l),m,m,m),C.v,B.kr(C.cj,B.b([B.hv(C.EZ,D.aFZ,new A.b3Y(w,v),m),B.hv(D.ad1,D.aEU,new A.b3Z(w,v),m)],u),C.du,8,8)],u),C.z,C.f,C.i),C.a9,m,C.F,m,3)}w=new A.b46(d)
t=C.b.fA(n.a.e.d,0,new A.b4_())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.k6(new A.b40(new A.b47(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a9(B.b([w,C.D,B.aj(B.b([B.ax(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.q,11,C.l),m,m,m),1),B.oF(D.aeb,D.aFe,new A.b41(q,p),m),B.oF(D.adQ,D.aF_,new A.b42(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:289}
A.b3Y.prototype={
$0(){return A.avj(this.a,this.b,null)},
$S:0}
A.b3Z.prototype={
$0(){return A.avg(this.a,this.b)},
$S:0}
A.b46.prototype={
$1(d){var w=B.bi(J.a3(this.a,d))
return w==null?null:w},
$S:1019}
A.b47.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:34}
A.b4_.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b40.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jH(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i_,o.$1("liquidity1_pct")),m=A.jH(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i_,o.$1("liquidity2_pct")),l=A.jH(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i_,o.$1("liquidity3_pct"))
o=A.jH(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i_,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b0(w,".",",")+" %"}w=A.jH(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i_,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.aq(v)
return E.aHJ(p,B.b([n,m,l,o,w,A.jH(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.i_,v)],x.p),q,12,12,C.ie,!0)},
$S:123}
A.b41.prototype={
$0(){return A.avg(this.a,this.b)},
$S:0}
A.b42.prototype={
$0(){return A.avj(this.a,this.b,this.c)},
$S:0}
A.bsB.prototype={
$1(d){return new A.Bf(this.a,new A.bsA(this.b),this.c,null)},
$S:z+22}
A.bsA.prototype={
$0(){var w=this.a,v=$.bwc()
if(w.e==null)B.T(B.Z(y.b))
w.gco().ci(v)},
$S:0}
A.b3S.prototype={
$0(){},
$S:0}
A.b3T.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3U.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3W.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uk(u.b,B.bN(2024,1,1,0,0,0,0),null,r,new B.bc(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3V(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3V.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3X.prototype={
$0(){return B.ba(this.a,!1).f2()},
$S:0}
A.b48.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b49.prototype={
$1(d){return new A.xG(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ay1.prototype={
$1(d){return d.e},
$S:z+27}
A.ay2.prototype={
$2(d,e){return d+e},
$S:44}
A.ay4.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ay6.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ay7.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adH(v.d,v.e)},
$S:0}
A.axL.prototype={
$1(d){return 0},
$S:1020}
A.axK.prototype={
$2(d,e){return B.f2(C.bR,this.a.alk(e),C.t,C.bm,null)},
$S:1021}
A.aZn.prototype={
$1(d){return d.a},
$S:z+31}
A.aZo.prototype={
$1(d){return d.b},
$S:z+32}
A.aZp.prototype={
$1(d){return new A.jR(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZq.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mE||v===D.dN))t=1-t
return new A.jR(d,t*w.d)},
$S:z+34}
A.aZr.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goA(),p=d.a
r.goA()
r=$.lA()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajm(Math.abs(s.b-s.c)))
t=""}if(C.c.hL(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nN(d,q.c.b.$2(p,new A.ty(u+t,s.e)))},
$S:z+35}
A.aUH.prototype={
$1(d){this.a.l7(new A.a5A(d))},
$S:172}
A.aUI.prototype={
$1(d){this.a.l7(new A.a5B(d))},
$S:40}
A.aUJ.prototype={
$1(d){this.a.l7(new A.a5C(d))},
$S:27}
A.aUK.prototype={
$0(){this.a.l7(D.a2b)},
$S:0}
A.aUL.prototype={
$1(d){this.a.l7(new A.N5())},
$S:43}
A.aUM.prototype={
$1(d){this.a.l7(new A.a5F(d))},
$S:42}
A.aUN.prototype={
$0(){this.a.l7(D.a2c)},
$S:0}
A.aUO.prototype={
$1(d){this.a.l7(new A.N8(d))},
$S:79}
A.aUP.prototype={
$1(d){this.a.l7(new A.a5z(d))},
$S:176}
A.aUQ.prototype={
$1(d){this.a.l7(new A.a5y(d))},
$S:177}
A.aUR.prototype={
$1(d){return this.a.l7(new A.N3(d))},
$S:195}
A.aUS.prototype={
$1(d){return this.a.l7(new A.a5D(d))},
$S:65}
A.aUT.prototype={
$1(d){return this.a.l7(new A.N6(d))},
$S:56}
A.bfc.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQk(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfa.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.bfb.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.bf9())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.GE(w))},
$S:0}
A.bf9.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+8}
A.bfd.prototype={
$1(d){return new A.zi(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKD.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.btk.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bEQ(t?A.bzY(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tz(w,new A.yy(!0,A.bAK(),new A.btj(v)))},
$S:z+41}
A.btj.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bTu(A.bzY(d,e,f),w,A.c1h(d,e,f))},
$S:z+42}
A.bth.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j0(v,v,u==null?D.dq:u,v,v,v,v,v,v,v,v,14,v,v,C.I,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rz(C.d.j(d.b),w)},
$S:z+43}
A.aKF.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKG.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aKK.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+45}
A.aKI.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKJ.prototype={
$0(){this.a.adH(this.b,this.c)},
$S:0}
A.aKL.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+8}
A.axV.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axW.prototype={
$2(d,e){return d+e},
$S:44}
A.axZ.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iR(v,B.ae(v).i("iR<1>")).aw(0,new A.ay_(w,this.a/(u+1),this.c))},
$S:0}
A.ay_.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axX.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axY.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHI.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1022}
A.aBd.prototype={
$1(d){return d},
$S:1023};(function aliases(){var w=A.KS.prototype
w.a_W=w.ia
w.alG=w.aS1
w.alH=w.adA
w=A.TH.prototype
w.aoh=w.l
w=A.L1.prototype
w.a_X=w.ia
w=A.Gc.prototype
w.a0G=w.YS})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c4U","bTr",72)
var q
v(q=A.TJ.prototype,"gaEk","aEl",23)
v(q,"gaDn","HX",4)
v(q,"gaE4","I7",4)
u(A.TK.prototype,"gas9","asa",25)
t(A,"c3I",3,null,["$3"],["bQL"],49,0)
t(A,"c3J",3,null,["$3"],["bQM"],50,0)
t(A,"c3K",3,null,["$3"],["bQN"],51,0)
t(A,"c3M",4,null,["$4"],["c4x"],52,0)
w(A,"c3L","c4w",53)
s(A,"bAd","c4y",54)
t(A,"c3D",3,null,["$3"],["bTv"],55,0)
w(A,"a_J","c6X",56)
w(A,"avm","c4B",7)
t(A,"c3F",3,null,["$3"],["bUh"],57,0)
t(A,"c3H",3,null,["$3"],["bZu"],58,0)
t(A,"c3E",3,null,["$3"],["bUg"],59,0)
t(A,"c3G",3,null,["$3"],["bZt"],60,0)
w(A,"ce6","bUf",61)
w(A,"ce7","bZs",62)
r(A.Yl.prototype,"ga4m","axE",30)
u(A.W6.prototype,"gayW","ayX",36)
t(A,"c5N",3,null,["$3"],["bUJ"],63,0)
t(A,"c5M",3,null,["$3"],["bQP"],64,0)
w(A,"c5Q","c6Y",1)
t(A,"bLi",4,null,["$5$size","$4"],["bJL",function(d,e,f,g){return A.bJL(d,e,f,g,null)}],65,0)
s(A,"bAK","c6W",66)
s(A,"bLj","c3q",67)
s(A,"bLm","c4E",68)
s(A,"bLl","c4A",3)
s(A,"bLk","c4z",3)
w(A,"c5P","bKW",70)
w(A,"c5O","bKV",71)
t(A,"a_O",3,null,["$3"],["c5L"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.N,[A.a79,A.agC,A.alY,A.J_,A.Jr,A.agA,A.I6,A.Iq,A.ali,A.amv,A.UU,A.Yw,A.U6,A.Uj,A.amZ,A.aji,A.Cf,A.asK,A.wO,A.KT,A.AG])
u(B.C,[A.uV,A.Ed,A.bg,A.ahJ,A.ahz,A.ahB,A.ahC,A.ahr,A.al2,A.ahF,A.ahD,A.ayg,A.asO,A.ay3,A.ahA,A.L1,A.a6b,A.ty,A.ara,A.ar9,A.ahq,A.al1,A.ey,A.akZ,A.al0,A.apm,A.alP,A.ats,A.al_,A.akF,A.akY,A.axJ,A.bf7,A.axM,A.ahn,A.nN,A.akV,A.akW,A.vM,A.hp,A.amD,A.amG,A.ahw,A.ahK,A.ahx,A.akX,A.amJ,A.amH,A.asN,A.ar8,A.aKE,A.amF,A.vv,A.a1G,A.amQ,A.a1Q,A.b1V])
u(B.uT,[A.qj,A.vA,A.wv,A.aAB,A.aBJ,A.o4,A.CN,A.o5])
u(B.nS,[A.aFc,A.aFd,A.aFe,A.aFv,A.btw,A.btx,A.bvo,A.bty,A.btv,A.btu,A.aFk,A.aFq,A.aFj,A.aKl,A.beO,A.beP,A.beQ,A.beR,A.beS,A.beT,A.beU,A.beV,A.beW,A.beX,A.beY,A.bsD,A.bnA,A.b5G,A.b6z,A.b6A,A.bfy,A.bpP,A.b43,A.b46,A.b47,A.bsB,A.b49,A.ay1,A.ay4,A.axL,A.aZn,A.aZo,A.aZp,A.aZq,A.aZr,A.aUH,A.aUI,A.aUJ,A.aUL,A.aUM,A.aUO,A.aUP,A.aUQ,A.aUR,A.aUS,A.aUT,A.bfc,A.bfd,A.aKD,A.btk,A.btj,A.bth,A.aKF,A.aKG,A.axV,A.aBd])
t(A.yw,B.fA)
u(B.xW,[A.aFb,A.aFa,A.aFt,A.aFl,A.aFm,A.aFn,A.aFo,A.aFp,A.aFs,A.aFh,A.aFi,A.bhS,A.bhT,A.bhU,A.aKn,A.bf_,A.bf0,A.bsC,A.bf1,A.b45,A.b3Y,A.b3Z,A.b41,A.b42,A.bsA,A.b3S,A.b3T,A.b3U,A.b3W,A.b3V,A.b3X,A.b48,A.ay7,A.aUK,A.aUN,A.bfa,A.bfb,A.aKI,A.aKJ,A.axZ])
u(B.y3,[A.yx,A.aod,A.a7a,A.ahv])
u(B.xX,[A.aFr,A.bhR,A.box,A.aKm,A.beZ,A.bny,A.bnz,A.b5F,A.b5H,A.b5I,A.b6B,A.b6C,A.bfz,A.bpQ,A.b44,A.b4_,A.b40,A.ay2,A.ay6,A.axK,A.bf9,A.aKK,A.aKL,A.axW,A.ay_,A.axX,A.axY,A.aHI])
u(B.M,[A.Bf,A.RF])
u(B.a0,[A.TJ,A.Yl])
u(B.NM,[A.KY,A.Os])
u(B.ut,[A.TK,A.W6])
t(A.a1h,A.ahJ)
t(A.ahm,A.a1h)
t(A.a11,A.ahm)
u(A.a11,[A.ahy,A.amE])
t(A.nO,A.ahy)
u(B.I5,[A.axT,A.ae4,A.D2,A.aEB,A.aKo,A.Nz])
t(A.fE,A.ahz)
t(A.ik,A.ahB)
t(A.mE,A.ahC)
t(A.a18,A.ahr)
t(A.N9,A.al2)
u(A.N9,[A.ahE,A.amI])
t(A.a1d,A.ahE)
t(A.a1e,A.ahF)
t(A.D3,A.ahD)
u(A.ayg,[A.KZ,A.Ou])
t(A.ae6,A.asO)
t(A.ahG,A.ae6)
t(A.a1f,A.ahG)
u(B.b2,[A.xG,A.zi])
t(A.uz,A.ahA)
t(A.KS,A.L1)
u(A.KS,[A.ay5,A.aKH])
u(B.On,[A.a1b,A.a7m])
u(B.J,[A.Gc,A.aho])
u(A.Gc,[A.abe,A.abr])
t(A.q9,A.ara)
t(A.acD,A.ar9)
t(A.pg,A.ahq)
t(A.uX,A.al1)
t(A.yz,A.akZ)
t(A.pD,A.al0)
t(A.Qe,A.apm)
t(A.mY,A.alP)
t(A.nm,A.ats)
u(A.pD,[A.alO,A.atr])
t(A.kQ,A.alO)
t(A.lh,A.atr)
t(A.a5x,A.al_)
u(A.a5x,[A.alN,A.atq])
t(A.a6m,A.alN)
t(A.aet,A.atq)
t(A.MS,A.akF)
t(A.uW,A.akY)
t(A.N2,A.uW)
t(A.acE,B.h4)
t(A.ahp,A.aho)
t(A.TH,A.ahp)
t(A.a12,A.TH)
t(A.jR,A.ahn)
t(A.a5u,A.akV)
t(A.a5w,A.akW)
u(A.hp,[A.a5A,A.a5B,A.a5C,A.N4,A.N5,A.a5F,A.N7,A.N8,A.a5z,A.a5y,A.N3,A.a5D,A.a5E,A.N6])
t(A.pQ,A.amE)
t(A.ed,A.amD)
t(A.Ot,A.amG)
t(A.a1a,A.ahw)
t(A.mF,A.ahK)
t(A.KX,A.ahx)
t(A.yy,A.akX)
t(A.EQ,A.amI)
t(A.a7n,A.amJ)
t(A.amC,A.ey)
t(A.n0,A.amC)
t(A.qh,A.n0)
t(A.rz,A.amH)
t(A.tz,A.asN)
t(A.GE,A.ar8)
t(A.zj,A.amF)
t(A.zm,A.amQ)
w(A.ahr,A.bg)
w(A.ahy,A.bg)
w(A.ahz,A.bg)
w(A.ahB,A.bg)
w(A.ahC,A.bg)
w(A.ahD,A.bg)
w(A.ahE,A.bg)
w(A.ahF,A.bg)
w(A.ahG,A.bg)
w(A.ahA,A.bg)
w(A.ahm,A.bg)
w(A.ahq,A.bg)
w(A.akF,A.bg)
w(A.akY,A.bg)
w(A.akZ,A.bg)
w(A.al0,A.bg)
w(A.al1,A.bg)
w(A.alO,A.bg)
w(A.alN,A.bg)
w(A.alP,A.bg)
w(A.apm,A.bg)
w(A.ar9,A.bg)
w(A.ara,A.bg)
w(A.asO,A.bg)
w(A.atr,A.bg)
w(A.atq,A.bg)
w(A.ats,A.bg)
w(A.ahn,A.bg)
v(A.aho,B.aD)
w(A.ahp,B.ea)
v(A.TH,B.a4t)
w(A.ahJ,A.bg)
w(A.akV,A.bg)
w(A.akW,A.bg)
w(A.al2,A.bg)
w(A.ahw,A.bg)
w(A.ahx,A.bg)
w(A.ahK,A.bg)
w(A.akX,A.bg)
w(A.al_,A.bg)
w(A.amC,A.bg)
w(A.amD,A.bg)
w(A.amE,A.bg)
w(A.amG,A.bg)
w(A.amH,A.bg)
w(A.amI,A.bg)
w(A.amJ,A.bg)
w(A.ar8,A.bg)
w(A.asN,A.bg)
w(A.amF,A.bg)
w(A.amQ,A.bg)})()
B.bq3(b.typeUniverse,JSON.parse('{"a79":{"N":[],"c":[]},"Ed":{"aFg":[]},"yw":{"fA":["bf<~>"],"fA.T":"bf<~>"},"Jr":{"N":[],"c":[]},"I6":{"N":[],"c":[]},"yx":{"bh":[],"M":[],"c":[]},"agC":{"N":[],"c":[]},"alY":{"N":[],"c":[]},"aod":{"bh":[],"M":[],"c":[]},"J_":{"N":[],"c":[]},"agA":{"N":[],"c":[]},"Iq":{"N":[],"c":[]},"wO":{"N":[],"c":[]},"Bf":{"M":[],"c":[]},"a7a":{"bh":[],"M":[],"c":[]},"ali":{"N":[],"c":[]},"amv":{"N":[],"c":[]},"UU":{"N":[],"c":[]},"Yw":{"N":[],"c":[]},"U6":{"N":[],"c":[]},"Uj":{"N":[],"c":[]},"amZ":{"N":[],"c":[]},"aji":{"N":[],"c":[]},"Cf":{"N":[],"c":[]},"asK":{"N":[],"c":[]},"ahv":{"bh":[],"M":[],"c":[]},"TJ":{"a0":["Bf"]},"KY":{"M":[],"c":[]},"TK":{"a0":["KY"]},"nO":{"bg":[]},"fE":{"bg":[]},"ik":{"bg":[]},"mE":{"bg":[]},"D3":{"bg":[]},"xG":{"b2":["nO"],"b4":["nO"],"b4.T":"nO","b2.T":"nO"},"a18":{"bg":[]},"a1d":{"bg":[]},"a1e":{"bg":[]},"a1f":{"bg":[]},"uz":{"bg":[]},"a1b":{"aW":[],"c":[]},"abe":{"J":[],"L":[],"jp":[],"aU":[]},"pD":{"bg":[]},"mY":{"bg":[]},"nm":{"bg":[]},"kQ":{"bg":[]},"lh":{"bg":[]},"uW":{"bg":[]},"a11":{"bg":[]},"q9":{"bg":[]},"acD":{"bg":[]},"pg":{"bg":[]},"uX":{"bg":[]},"yz":{"bg":[]},"ae6":{"bg":[]},"Qe":{"bg":[]},"a6m":{"bg":[]},"aet":{"bg":[]},"MS":{"bg":[]},"N2":{"bg":[]},"KT":{"N":[],"c":[]},"RF":{"M":[],"c":[]},"Yl":{"a0":["RF"]},"jR":{"bg":[]},"acE":{"h4":[],"aW":[],"c":[]},"a12":{"ea":["J","hq"],"J":[],"aD":["J","hq"],"L":[],"aU":[],"aD.1":"hq","ea.1":"hq","aD.0":"J"},"AG":{"N":[],"c":[]},"a1h":{"bg":[]},"a5u":{"bg":[]},"N9":{"bg":[]},"a5w":{"bg":[]},"a5A":{"hp":[]},"a5B":{"hp":[]},"a5C":{"hp":[]},"N4":{"hp":[]},"N5":{"hp":[]},"a5F":{"hp":[]},"N7":{"hp":[]},"N8":{"hp":[]},"a5z":{"hp":[]},"a5y":{"hp":[]},"N3":{"hp":[]},"a5D":{"hp":[]},"a5E":{"hp":[]},"N6":{"hp":[]},"Gc":{"J":[],"L":[],"jp":[],"aU":[]},"Os":{"M":[],"c":[]},"W6":{"a0":["Os"]},"pQ":{"bg":[]},"ed":{"bg":[]},"mF":{"bg":[]},"n0":{"ey":[],"bg":[]},"qh":{"n0":[],"ey":[],"bg":[]},"rz":{"bg":[]},"tz":{"bg":[]},"GE":{"bg":[]},"zi":{"b2":["pQ"],"b4":["pQ"],"b4.T":"pQ","b2.T":"pQ"},"Ot":{"bg":[]},"a1a":{"bg":[]},"KX":{"bg":[]},"yy":{"bg":[]},"a5x":{"bg":[]},"EQ":{"bg":[]},"a7n":{"bg":[]},"zj":{"bg":[]},"a7m":{"aW":[],"c":[]},"abr":{"J":[],"L":[],"jp":[],"aU":[]},"zm":{"bg":[]}}'))
B.bJf(b.typeUniverse,JSON.parse('{"KS":1,"N9":1,"L1":1,"Gc":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("CN"),e:w("bf<o4>"),aN:w("bf<o5>"),fM:w("bf<a1<f,@>?>"),b:w("bf<~>"),W:w("jR"),B:w("nO"),dB:w("fE"),T:w("uz"),fj:w("ik"),G:w("mE"),J:w("mF"),k:w("at"),cX:w("a1Q<F>"),dO:w("uH"),R:w("al<f,@>"),v:w("hK"),bz:w("lK<bc>"),f0:w("nY"),E:w("bg"),F:w("yw"),X:w("o4"),P:w("lQ"),D:w("uV"),a:w("aFg"),d:w("o5"),cw:w("ey"),L:w("hq"),m:w("dr<v,E>"),cm:w("kQ"),dv:w("mY"),g:w("B<nN>"),O:w("B<fE>"),Y:w("B<ik>"),C:w("B<bx7>"),U:w("B<ey>"),K:w("B<a6b>"),u:w("B<ed>"),bC:w("B<vv>"),aA:w("B<u<ey>>"),r:w("B<GE>"),s:w("B<f>"),eg:w("B<tw>"),df:w("B<qh>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bk<a0<M>>"),Z:w("n0"),cz:w("ed"),hf:w("pQ"),dj:w("zj"),fT:w("rz"),c_:w("io<oV<bf<~>>>"),x:w("zm<fE>"),y:w("zm<ed>"),I:w("u<v>"),ef:w("vA"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("k8"),aU:w("C"),Q:w("vM<nO>"),o:w("vM<pQ>"),eo:w("q_"),gJ:w("q0"),V:w("kj<lQ>"),N:w("f"),A:w("nh"),bO:w("bL"),er:w("tw"),j:w("wv"),dw:w("qh"),bY:w("tz"),cZ:w("qj"),gc:w("kq"),es:w("lh"),bN:w("nm"),l:w("c"),q:w("x6"),g4:w("ie<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xG?"),f3:w("zi?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("C?"),aD:w("kq?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.B8=new B.lE(C.n,B.au("lE<E>"))
D.Bf=new A.D2(0,"left")
D.mE=new A.D2(1,"top")
D.Bg=new A.D2(2,"right")
D.dN=new A.D2(3,"bottom")
D.awl=new A.q9(!1,A.bAd(),22,null)
D.ks=new A.pg(16,null,D.awl,!0)
D.a9F=new A.pD(C.C,null,2,null)
D.w9=new A.KX(!1,D.a9F,A.c5Q(),!0)
D.a0c=new A.axT(3,"spaceEvenly")
D.a0l=new B.xK(6,"dstIn")
D.Yd=new B.aV(3,3)
D.Bk=new B.d1(D.Yd,D.Yd,C.a1,C.a1)
D.a0w=new B.bm(C.C,0,C.T,-1)
D.BT=new A.a5w()
D.a2b=new A.N4()
D.a2c=new A.N7()
D.aO0=new A.acD()
D.amn=w([],B.au("B<kQ>"))
D.amo=w([],B.au("B<lh>"))
D.DZ=new A.MS(D.amn,D.amo,!0)
D.a9m=new B.dL("Zeitraum",!1,null)
D.a9q=new B.dL("Konten (SKR 03)",!1,null)
D.xK=new A.aEB(0,"center")
D.aOc=new A.yy(!0,A.bAK(),A.bLi())
D.E2=new A.yy(!1,A.bAK(),A.bLi())
D.E3=new A.yz(!1,!0,null,A.avm(),A.a_J(),!0,null,A.avm(),A.a_J())
D.aOd=new A.yz(!0,!0,null,A.avm(),A.a_J(),!0,null,A.avm(),A.a_J())
D.a4w=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a4h=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4G=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a4A=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a40=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a4_=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a52=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a4p=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a55=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a5_=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aqx=new B.dr([50,D.a4w,100,D.a4h,200,D.a4G,300,D.a4A,400,D.a40,500,D.a4_,600,D.a52,700,D.a4p,800,D.a55,900,D.a5_],x.m)
D.dq=new B.rF(D.aqx,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aiB=w([8,4],x.t)
D.a9D=new A.pD(D.dq,null,0.4,D.aiB)
D.a9E=new A.pD(C.a5,null,0.5,null)
D.fM=new A.ey(0/0,0/0)
D.awn=new A.q9(!0,A.bAd(),44,null)
D.mF=new A.pg(16,null,D.awn,!0)
D.awm=new A.q9(!0,A.bAd(),30,null)
D.mG=new A.pg(16,null,D.awm,!0)
D.a9G=new A.uX(!1,D.mF,D.mG,D.mF,D.mG)
D.aOe=new A.uX(!0,D.mF,D.mG,D.mF,D.mG)
D.Eb=new A.Nz(0,"left")
D.aai=new A.Nz(1,"center")
D.Ec=new A.Nz(2,"right")
D.aan=new B.a4(57495,"MaterialIcons",null,!1)
D.y0=new B.a4(58927,"MaterialIcons",null,!1)
D.abb=new B.a4(59005,"MaterialIcons",null,!0)
D.abc=new B.a4(59007,"MaterialIcons",null,!0)
D.abd=new B.a4(59011,"MaterialIcons",null,!1)
D.ac7=new B.a4(62589,"MaterialIcons",null,!1)
D.abq=new B.a4(61349,"MaterialIcons",null,!1)
D.acZ=new B.aC(D.abq,20,C.h,null,null)
D.abx=new B.a4(61487,"MaterialIcons",null,!1)
D.ad0=new B.aC(D.abx,18,null,null,null)
D.ad1=new B.aC(D.y0,18,null,null,null)
D.ado=new B.aC(C.hS,null,C.h,null,null)
D.adp=new B.aC(C.la,null,C.q,null,null)
D.adQ=new B.aC(C.nX,16,null,null,null)
D.adW=new B.aC(C.y7,16,null,null,null)
D.aay=new B.a4(57912,"MaterialIcons",null,!1)
D.adY=new B.aC(D.aay,null,C.a8,null,null)
D.ac5=new B.a4(62584,"MaterialIcons",null,!1)
D.ae6=new B.aC(D.ac5,16,null,null,null)
D.aeb=new B.aC(D.y0,16,null,null,null)
D.agd=new A.a7a(null)
D.aOj=new A.aKo(0,"horizontal")
D.yk=new A.zj(0,0,0,0,!1)
D.Fr=new A.Ot(0.5)
D.BZ=new A.a7n()
D.agh=new A.EQ(D.BZ,A.bLm(),10,A.bLj(),!0,A.bLl(),A.bLk(),!1,null,null,null)
D.aOl=new A.EQ(D.BZ,A.bLm(),10,A.bLj(),!0,A.bLl(),A.bLk(),!0,null,null,null)
D.ahF=w([4,3],x.t)
D.auz=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.aup=new B.aG("receivables","Forderungen (kurzfristig)")
D.aue=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.auc=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.au0=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.au6=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.auw=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.auo=new B.aG("equity","Eigenkapital")
D.pD=w([D.auz,D.aup,D.aue,D.auc,D.au0,D.au6,D.auw,D.auo],B.au("B<+(f,f)>"))
D.aOo=w([],x.g)
D.am9=w([],x.O)
D.ama=w([],x.Y)
D.amb=w([],B.au("B<mE>"))
D.amc=w([],B.au("B<mF>"))
D.aOp=w([],x.U)
D.aOq=w([],x.u)
D.amd=w([],x.r)
D.ar8={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TR={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yZ=new B.al(D.TR,[0,0,0,0,0,0,0,C.ce],B.au("al<f,C>"))
D.ar5={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqr=new B.al(D.ar5,[0,0,0,0],B.au("al<f,v>"))
D.arn={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apO=new B.al(D.arn,[0,0,0,0,null,null,null,null],B.au("al<f,v?>"))
D.apH=new B.al(D.ar8,[D.yZ,D.yZ,D.yZ,C.ce,C.ce,C.ce,D.aqr,D.apO],x.R)
D.aq0=new B.al(D.TR,[0,0,0,0,0,0,0,C.cv],x.R)
D.ar9={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aq2=new B.al(D.ar9,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("al<f,F>"))
D.ar4={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqs=new B.al(D.ar4,[0,0,0,0,0,0,0,C.cv],x.R)
D.ary={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqt=new B.al(D.ary,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("al<f,f>"))
D.a5b=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a5j=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a43=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a4s=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4C=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a5x=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3P=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a4u=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4F=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a50=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aqy=new B.dr([50,D.a5b,100,D.a5j,200,D.a43,300,D.a4s,400,D.a4C,500,D.a5x,600,D.a3P,700,D.a4u,800,D.a4F,900,D.a50],x.m)
D.TD=new B.rF(D.aqy,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8E=new B.ag(32,32,32,32)
D.asr=new B.ad(D.a8E,C.bH,null)
D.a8G=new B.ag(48,48,48,48)
D.asu=new B.ad(D.a8G,C.bH,null)
D.asA=new B.ad(C.ai,C.bH,null)
D.amp=w([],B.au("B<mY>"))
D.amq=w([],B.au("B<nm>"))
D.Yf=new A.Qe(D.amp,D.amq)
D.avg=new B.fx("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avh=new B.fx("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avk=new B.fx("Automaten-Business","Umsatz je Automat",null,null)
D.avm=new B.fx("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.avo=new B.fx("Top","Meistverkaufte Produkte",null,null)
D.avr=new B.fx("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.avs=new B.fx("Kennzahlen","Rentabilit\xe4t",null,null)
D.YV=new B.tg(C.H,C.u,0)
D.aDS=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ay4=new B.e3(D.aDS,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFN=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ay7=new B.e3(D.aFN,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aE4=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ay8=new B.e3(D.aE4,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFH=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aya=new B.e3(D.aFH,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFa=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.ayb=new B.e3(D.aFa,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aF7=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayu=new B.e3(D.aF7,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aOA=new B.S(!0,C.C,null,null,null,null,14,C.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aE1=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEc=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aEU=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aF_=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFe=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aFZ=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_a=new A.ae4(0,"auto")
D.aGA=new A.ae4(1,"top")
D.aKY=new A.wO("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aKZ=new A.wO("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cew","bPw",()=>B.iT(new A.btw(),x.D))
w($,"cex","aw0",()=>B.iT(new A.btx(),x.a))
w($,"cfx","xr",()=>B.byX(new A.bvo(),x.P))
w($,"cey","bwd",()=>C.aI.$1$1(new A.bty(),x.d))
w($,"cev","bPv",()=>C.aI.$1$1(new A.btv(),x.X))
w($,"ceu","bwc",()=>C.aI.$1$1(new A.btu(),x.h))
w($,"cet","bwb",()=>B.b_f(A.c4U(),x.F,x.b))
w($,"c7K","bvP",()=>new A.axJ())
v($,"cb0","lA",()=>new A.b1V())})()};
(a=>{a["mKkt+iPkcMkW6UEH3EjNvx7WWqI="]=a.current})($__dart_deferred_initializers__);