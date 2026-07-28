((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Oe(d,e,f,g,h){return new A.a7a(f,g,d,h,e,null)},
a7a:function a7a(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uV:function uV(d){this.a=d},
Ed:function Ed(d){this.a=d},
bTu(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.z8
w=x.f
v=x.N
u=x.z
t=A.aFw(B.dd(w.a(e.h(a0,"current")),v,u))
s=A.aFw(B.dd(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFw(B.dd(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.ce
p=J.cX(p,new A.aFe(),x.cZ)
p=B.Q(p,p.$ti.i("au.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.ce
o=J.cX(o,new A.aFf(),x.ef)
o=B.Q(o,o.$ti.i("au.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.ce
q=J.cX(q,new A.aFg(),x.j)
q=B.Q(q,q.$ti.i("au.E"))
n=B.dd(w.a(e.h(a0,"customer")),v,u)
m=B.bh(n.h(0,"purchases_count"))
m=m==null?null:C.d.a3(m)
if(m==null)m=0
l=A.p3(n.h(0,"app_gross"))
k=B.bh(n.h(0,"active_customers"))
k=k==null?null:C.d.a3(k)
if(k==null)k=0
n=A.p3(n.h(0,"avg_basket"))
u=B.dd(w.a(e.h(a0,"derived")),v,u)
v=A.p3(u.h(0,"gross_margin_pct"))
e=A.p3(u.h(0,"net_margin_pct"))
w=A.p3(u.h(0,"ebitda_margin_pct"))
j=A.p3(u.h(0,"cashflow_operating"))
i=A.bsK(u.h(0,"revenue_growth_yoy_pct"))
h=A.bsK(u.h(0,"revenue_growth_mom_pct"))
g=A.bsK(u.h(0,"result_growth_yoy_pct"))
u=A.bsK(u.h(0,"result_growth_mom_pct"))
f=B.bh(J.a3(d,"days"))
f=f==null?null:C.d.a3(f)
if(f==null)f=1
return new A.o7(t,s,r,p,o,q,new A.aAD(m,l,k,n),new A.aBL(v,e,w,j,i,h,g,u),f)},
p3(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jv(J.am(d))
return w==null?0:w},
bsK(d){if(d==null)return null
if(typeof d=="number")return d
return B.jv(J.am(d))},
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
aAD:function aAD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBL:function aBL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o7:function o7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFe:function aFe(){},
aFf:function aFf(){},
aFg:function aFg(){},
aFw(d){var w=J.Y(d),v=A.ud(w.h(d,"revenue_net_7")),u=A.ud(w.h(d,"revenue_net_19")),t=A.ud(w.h(d,"revenue_net")),s=A.ud(w.h(d,"expense_net")),r=A.ud(w.h(d,"result_net")),q=A.ud(w.h(d,"vat_collected")),p=A.ud(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.ce
w=J.cX(w,new A.aFx(),x._)
w=B.Q(w,w.$ti.i("au.E"))
return new A.o8(v,u,t,s,r,q,p,w)},
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
o8:function o8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFx:function aFx(){},
bTt(d){return new A.yv(d,new B.io(x.c_),C.dM)},
bty:function bty(){},
btz:function btz(){},
bvq:function bvq(){},
btA:function btA(){},
btx:function btx(){},
btw:function btw(){},
yv:function yv(d,e,f){this.r=d
this.a=e
this.f=f},
aFd:function aFd(d,e,f){this.a=d
this.b=e
this.c=f},
aFc:function aFc(d,e,f){this.a=d
this.b=e
this.c=f},
bTv(){return new A.yw(null)},
am0(d,e,f,g,h){return new A.am_(e,h,g,f,d,null)},
yw:function yw(d){this.a=d},
aFv:function aFv(d){this.a=d},
aFn:function aFn(d,e,f){this.a=d
this.b=e
this.c=f},
aFo:function aFo(d,e,f){this.a=d
this.b=e
this.c=f},
aFp:function aFp(d){this.a=d},
aFm:function aFm(){},
aFq:function aFq(d){this.a=d},
aFr:function aFr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFu:function aFu(){},
aFt:function aFt(){},
aFs:function aFs(){},
aFl:function aFl(d,e){this.a=d
this.b=e},
aFj:function aFj(d){this.a=d},
aFk:function aFk(d){this.a=d},
agF:function agF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
am_:function am_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aof:function aof(d,e){this.e=d
this.a=e},
bhR:function bhR(d){this.a=d},
bhS:function bhS(d){this.a=d},
bhT:function bhT(d,e,f){this.a=d
this.b=e
this.c=f},
bhQ:function bhQ(){},
IZ:function IZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jq:function Jq(d,e){this.c=d
this.a=e},
boz:function boz(d){this.a=d},
agD:function agD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I5:function I5(d,e){this.c=d
this.a=e},
bAa(d,e,f,g,h){var w=null
return B.j8(w,w,!0,w,new A.bsF(h,g,e,f),d,w,!0,!0,x.H)},
jI(d,e,f,g,h,i,j,k,l,m,n){return new A.amx(g,n,i,e,d,m,f,k,l,j,null)},
avi(d,e){return A.c30(d,e)},
c30(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avi=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bm(D.ayf)
t=4
o=e.aJ(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$avi)
case 7:r=g
q=B.dd(x.f.a(r.a),x.N,n)
l.Mk()
if(J.d(J.a3(q,"configured"),!1)){l.bm(D.ayj)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bwe()
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
return B.p($async$avi,v)},
avl(d,e,f){var w=0,v=B.q(x.H)
var $async$avl=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j8(null,null,!0,null,new A.bsD(f,e,e.aJ(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$avl)
case 2:return B.o(null,v)}})
return B.p($async$avl,v)},
a7b:function a7b(d){this.a=d},
aKp:function aKp(){},
aKo:function aKo(){},
aKn:function aKn(){},
Ip:function Ip(d,e){this.c=d
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
bsF:function bsF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsE:function bsE(d){this.a=d},
alk:function alk(d){this.a=d},
amx:function amx(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
UV:function UV(d,e,f){this.c=d
this.d=e
this.a=f},
Yx:function Yx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnA:function bnA(){},
bnB:function bnB(){},
bnC:function bnC(d){this.a=d},
U7:function U7(d,e,f){this.c=d
this.d=e
this.a=f},
b5H:function b5H(){},
b5J:function b5J(d){this.a=d},
b5K:function b5K(d){this.a=d},
b5I:function b5I(){},
Ul:function Ul(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b6B:function b6B(){},
b6C:function b6C(){},
b6D:function b6D(){},
b6E:function b6E(d){this.a=d},
an0:function an0(d,e){this.c=d
this.a=e},
bfy:function bfy(){},
bfz:function bfz(){},
ajl:function ajl(d,e){this.c=d
this.a=e},
Ce:function Ce(d,e,f){this.c=d
this.d=e
this.a=f},
asN:function asN(d,e){this.c=d
this.a=e},
bpR:function bpR(){},
bpS:function bpS(){},
wO:function wO(d,e){this.c=d
this.a=e},
ahy:function ahy(d,e){this.e=d
this.a=e},
b47:function b47(){},
b46:function b46(){},
b45:function b45(d,e,f){this.a=d
this.b=e
this.c=f},
b4_:function b4_(d,e){this.a=d
this.b=e},
b40:function b40(d,e){this.a=d
this.b=e},
b48:function b48(d){this.a=d},
b49:function b49(d){this.a=d},
b41:function b41(){},
b42:function b42(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b43:function b43(d,e){this.a=d
this.b=e},
b44:function b44(d,e,f){this.a=d
this.b=e
this.c=f},
bsD:function bsD(d,e,f){this.a=d
this.b=e
this.c=f},
bsC:function bsC(d){this.a=d},
Be:function Be(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TK:function TK(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b3U:function b3U(){},
b3V:function b3V(d){this.a=d},
b3W:function b3W(d){this.a=d},
b3Y:function b3Y(d,e){this.a=d
this.b=e},
b3X:function b3X(d,e){this.a=d
this.b=e},
b3Z:function b3Z(d){this.a=d},
bf:function bf(){},
bDw(d){return new A.KY(d,C.al,C.bW,null,null)},
KY:function KY(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TL:function TL(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c4$=g
_.c=_.a=null},
b4a:function b4a(d,e){this.a=d
this.b=e},
b4b:function b4b(d){this.a=d},
axW(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amh:f,p=a0==null?16:a0,o=d==null?D.a0b:d,n=g==null,m=n?A.bwF(r,r,r,r,r,r,r,r):g,l=a3==null?D.Ye:a3
n=n?A.bwF(r,r,r,r,r,r,r,r):g
w=j==null?D.E0:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.nQ(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BV,s,w,i,n)},
ay2(d,e,f,g,h){var w=d==null?D.ami:d,v=e==null?2:e,u=g==null?C.ls:g
return new A.fE(h,f===!0,w,v,u)},
bQN(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.ay2(A.ky(d.c,e.c,f,A.c3L(),x.fj),B.ac(d.d,e.d,f),!1,A.ky(d.e,e.e,f,A.a_P(),x.S),w)},
a1d(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TD
else w=h
v=m==null
u=v?8:m
t=$.lB()
s=t.aX2(f,v?8:m)
t=t.aX3(g,v?8:m)
v=d==null?A.bDu(r,r,r,r,r):d
return new A.ik(q,l,w,j,u,s,e,t,v,k==null?D.amj:k)},
bQO(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ac(d.e,e.e,f),q=B.mI(d.f,e.f,f),p=A.ky(d.r,e.r,f,A.a_P(),x.S),o=B.bX(d.w,e.w,f),n=B.ac(d.a,e.a,f),m=B.ac(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ac(w.b,v.b,f)
t=B.ac(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a1d(A.bDu(v,u,null,!1,t),p,q,o,s,n,null,A.ky(d.y,e.y,f,A.c3M(),x.G),m,r)},
bQP(d,e,f){var w,v,u=B.ac(d.a,e.a,f)
u.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mG(u,w,v,B.bX(d.d,e.d,f))},
bDu(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dr
else w=d
return new A.a19(g===!0,v,u,w,f)},
bwF(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1f(4,C.hN,16,D.xL,0,120,A.c3O(),!1,!1,D.a_9,0,C.K,A.c3N())
else w=k
v=j==null?C.kZ:j
return new A.a1e(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c4z(d,e,f,g){var w=null,v=B.j0(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D3(C.d.j(f.b),v)},
c4y(d){return A.aA3(D.dr,15)},
nQ:function nQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
axV:function axV(d,e){this.a=d
this.b=e},
fE:function fE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ay3:function ay3(){},
ay4:function ay4(){},
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
mG:function mG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a19:function a19(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1e:function a1e(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
ae7:function ae7(d,e){this.a=d
this.b=e},
a1f:function a1f(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1g:function a1g(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xF:function xF(d,e){this.a=d
this.b=e},
ahu:function ahu(){},
ahB:function ahB(){},
ahC:function ahC(){},
ahE:function ahE(){},
ahF:function ahF(){},
ahG:function ahG(){},
ahH:function ahH(){},
ahI:function ahI(){},
ahJ:function ahJ(){},
ay5:function ay5(d){this.a=d},
ay6:function ay6(){},
uz:function uz(d,e,f){this.a=d
this.b=e
this.c=f},
ahD:function ahD(){},
ay7:function ay7(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ay8:function ay8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ay9:function ay9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6c:function a6c(d){this.b=d},
a1c:function a1c(d,e,f){this.d=d
this.e=e
this.a=f},
abh:function abh(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i5=e
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
c4A(d,e){var w=null
return new A.RG(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
axP(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ac(w.c,v.c,f)
u.toString
return new A.ph(t,e.b,new A.q9(v.a,v.b,u,B.ac(w.d,v.d,f)),!0)},
bET(d,e,f){var w=A.axP(d.b,e.b,f),v=A.axP(d.d,e.d,f),u=A.axP(d.e,e.e,f)
return new A.uX(e.a,w,A.axP(d.c,e.c,f),v,u)},
bTx(d,e,f){var w,v
if(d.k(0,D.fK))return e
if(e.k(0,D.fK))return d
w=B.ac(d.a,e.a,f)
w.toString
v=B.ac(d.b,e.b,f)
v.toString
return new A.ey(w,v)},
bER(d,e,f){return new A.yy(e.a,!0,B.ac(d.c,e.c,f),e.d,e.e,e.f,B.ac(d.r,e.r,f),e.w,e.x)},
c6Z(d){return!0},
c4D(d){return D.a9K},
bES(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pD(w,f,g,e)},
bGM(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c3H(),x.dv)
v.toString
w=A.ky(d.b,e.b,f,A.c3J(),x.bN)
w.toString
return new A.Qf(v,w)},
bUj(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.n_(t,w,v,u)},
bZw(d,e,f){var w,v,u,t=B.ac(d.a,e.a,f)
t.toString
w=B.ac(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.rk(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.no(t,w,v,u)},
bUi(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bUg(B.bwx(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_P(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kQ(r,e.f,e.r,t,e.x,u,v,w,s)},
bZv(d,e,f){var w,v,u,t,s,r=B.ac(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bZt(B.bwx(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.rk(d.b,e.b,f)
w=B.ac(d.c,e.c,f)
w.toString
s=A.ky(d.d,e.d,f,A.a_P(),x.S)
if(u==null)u=v==null?C.C:null
return new A.li(r,e.f,e.r,t,e.x,u,v,w,s)},
bUg(d,e,f,g,h,i){return new A.a6n(f,!1,g,i,d,e)},
bUh(d){return C.d.aj(d.e,1)},
bZt(d,e,f,g,h,i){return new A.aew(f,!1,g,i,d,e)},
bZu(d){return C.d.aj(d.e,1)},
bEO(d,e,f){var w,v=A.ky(d.a,e.a,f,A.c3G(),x.cm)
v.toString
w=A.ky(d.b,e.b,f,A.c3I(),x.es)
w.toString
return new A.MS(v,w,!0)},
bTw(d,e,f){return new A.N2(d,e==null?4:e,f)},
a12:function a12(){},
D2:function D2(d,e){this.a=d
this.b=e},
ty:function ty(d,e){this.r=d
this.w=e},
q9:function q9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acG:function acG(){},
ph:function ph(d,e,f,g){var _=this
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
ae9:function ae9(){},
Qf:function Qf(d,e){this.a=d
this.b=e},
n_:function n_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
no:function no(d,e,f,g){var _=this
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
a6n:function a6n(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aew:function aew(d,e,f,g,h,i){var _=this
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
ahp:function ahp(){},
aht:function aht(){},
akH:function akH(){},
al_:function al_(){},
al0:function al0(){},
al2:function al2(){},
al3:function al3(){},
alQ:function alQ(){},
alP:function alP(){},
alR:function alR(){},
apo:function apo(){},
arb:function arb(){},
arc:function arc(){},
asR:function asR(){},
atu:function atu(){},
att:function att(){},
atv:function atv(){},
axL:function axL(){},
KS:function KS(){},
KT:function KT(d,e,f){this.c=d
this.d=e
this.a=f},
axN:function axN(d){this.a=d},
axM:function axM(d){this.a=d},
RG:function RG(d,e,f){this.c=d
this.e=e
this.a=f},
Ym:function Ym(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bY2(d,e,f){var w=B.ae(f),v=w.i("ab<1,jS>")
v=B.Q(new B.ab(f,new A.aZp(),v),v.i("au.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.aZq(),w),w.i("au.E"))
return new A.acH(e,d,v,w,null)},
bQL(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a71(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tw(v,C.as,C.w,new B.kt(1),v,v,v,v,C.bz,v)
u=new A.a13(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aK(x.v))
u.bk()
return u},
acH:function acH(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aZp:function aZp(){},
aZq:function aZq(){},
a13:function a13(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a4=g
_.W3$=h
_.aSR$=i
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
axO:function axO(){},
jS:function jS(d,e){this.a=d
this.b=e},
nP:function nP(d,e){this.a=d
this.b=e},
ahq:function ahq(){},
ahr:function ahr(){},
ahs:function ahs(){},
TI:function TI(){},
AF:function AF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aZr:function aZr(d){this.a=d},
aZs:function aZs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZt:function aZt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5w(d,e){var w=d==null?B.cr(C.C,1):d
return new A.a5v(e!==!1,w)},
a1i:function a1i(){},
a5v:function a5v(d,e){this.a=d
this.b=e},
N9:function N9(){},
a5x:function a5x(){},
ayi:function ayi(){},
aED:function aED(d,e){this.a=d
this.b=e},
ahM:function ahM(){},
akX:function akX(){},
akY:function akY(){},
al4:function al4(){},
L1:function L1(){},
vM:function vM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hp:function hp(){},
a5B:function a5B(d){this.a=d},
a5C:function a5C(d){this.a=d},
a5D:function a5D(d){this.a=d},
N4:function N4(){},
N5:function N5(){},
a5G:function a5G(d){this.a=d},
N7:function N7(){},
N8:function N8(d){this.a=d},
a5A:function a5A(d){this.a=d},
a5z:function a5z(d){this.a=d},
N3:function N3(d){this.a=d},
a5E:function a5E(d){this.a=d},
a5F:function a5F(d){this.a=d},
N6:function N6(d){this.a=d},
Gb:function Gb(){},
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
aUU:function aUU(d){this.a=d},
aUV:function aUV(d){this.a=d},
Ot:function Ot(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
W7:function W7(d,e,f,g,h){var _=this
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
bxW(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pQ(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aKE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TD:u
else w=g
v=f==null?A.axU(!1,u,0,u,!1,D.wa):f
w=new A.ed(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.axU(!1,u,0,u,!1,D.wa):d,j,a0,i,s,!1,p)
w.aqV(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bUL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ac(d.x,e.x,f)
m.toString
w=A.bDv(d.ay,e.ay,f)
v=A.bDv(d.ch,e.ch,f)
u=B.ac(d.as,e.as,f)
u.toString
t=e.CW
s=A.ky(d.cy,e.cy,f,A.a_P(),x.S)
r=B.a_(d.r,e.r,f)
q=B.rk(d.w,e.w,f)
p=A.ky(d.a,e.a,f,A.c3F(),x.cw)
p.toString
o=B.bHh(d.db,e.db,f)
o.toString
n=B.ac(d.dy.a,e.dy.a,f)
n.toString
return A.aKE(v,m,w,r,e.z,s,new A.yx(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ou(n),!1,u,o,!0,e.cx,p)},
axU(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dr.A()>>>16&255,D.dr.A()>>>8&255,D.dr.A()&255):null
else w=e
return new A.a1b(h,w,g,i,f,!1)},
bDv(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.rk(v.b,u.b,f),r=B.ac(v.c,u.c,f)
r.toString
r=A.bES(t,A.ky(v.d,u.d,f,A.a_P(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.rk(d.c,e.c,f)
v=B.ac(d.e,e.e,f)
v.toString
return A.axU(!1,s,v,u,e.a,new A.KX(!1,r,w.c,!0))},
bQR(d,e,f){var w=B.a_(d.c,e.c,f),v=B.rk(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dr.A()>>>16&255,D.dr.A()>>>8&255,D.dr.A()&255):null
return new A.mH(e.a,e.b,w,v)},
c7_(d){return!0},
bzZ(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.k7)return A.bAK(w.a,A.bxy(w),e/100)
w=v?null:C.b.ga2(w.a)
if(w==null)w=f.r
return w==null?D.dr:w},
c1j(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.k7)w=A.bAK(v.a,A.bxy(v),e/100)
else{v=u?null:C.b.ga2(v.a)
w=v==null?f.r:v
if(w==null)w=D.dr}return A.aA3(w,40)},
bJN(d,e,f,g,h){var w,v=A.bzZ(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.k7)w=A.bAK(u.a,A.bxy(u),e/100)
else{u=t?null:C.b.ga2(u.a)
w=u==null?f.r:u
if(w==null)w=D.dr}u=A.aA3(w,40)
return new A.N2(v,h==null?4:h,u)},
c6Y(d,e){return!0},
c3s(d,e){return Math.abs(d.a-e.a)},
c4G(d,e){var w=J.cX(e,new A.btm(d),x.bY)
w=B.Q(w,w.$ti.i("au.E"))
return w},
c4C(d,e){return-1/0},
c4B(d,e){return d.a[e].b},
bKY(d){var w=J.cX(d,new A.btj(),x.fT)
w=B.Q(w,w.$ti.i("au.E"))
return w},
bKX(d){return A.aA3(D.dr,15)},
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
aKF:function aKF(){},
Ou:function Ou(d){this.a=d},
a1b:function a1b(d,e,f,g,h,i){var _=this
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
KX:function KX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yx:function yx(d,e,f){this.a=d
this.b=e
this.c=f},
aKq:function aKq(d,e){this.a=d
this.b=e},
a5y:function a5y(){},
EP:function EP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btm:function btm(d){this.a=d},
btl:function btl(d){this.a=d},
a7o:function a7o(){},
btj:function btj(){},
n2:function n2(){},
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
GD:function GD(d){this.a=d},
Ov:function Ov(d){this.a=d},
zh:function zh(d,e){this.a=d
this.b=e},
ahz:function ahz(){},
ahA:function ahA(){},
ahN:function ahN(){},
akZ:function akZ(){},
al1:function al1(){},
amE:function amE(){},
amF:function amF(){},
amG:function amG(){},
amI:function amI(){},
amJ:function amJ(){},
amK:function amK(){},
amL:function amL(){},
ara:function ara(){},
asQ:function asQ(){},
aKG:function aKG(d){this.a=d},
aKH:function aKH(){},
aKI:function aKI(){},
zi:function zi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amH:function amH(){},
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
vv:function vv(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7n:function a7n(d,e,f){this.d=d
this.e=e
this.a=f},
abu:function abu(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i5=e
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
bwE(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.ae(o),l=new B.ab(o,new A.axX(),m.i("ab<1,F>")).jI(0,new A.axY()),k=e-l,j=new A.ay0(k,d,n)
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
new B.iR(o,m.i("iR<1>")).aw(0,new A.axZ(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iR(o,m.i("iR<1>")).aw(0,new A.ay_(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
axX:function axX(){},
axY:function axY(){},
ay0:function ay0(d,e,f){this.a=d
this.b=e
this.c=f},
ay1:function ay1(d,e,f){this.a=d
this.b=e
this.c=f},
axZ:function axZ(d,e,f){this.a=d
this.b=e
this.c=f},
ay_:function ay_(d,e,f){this.a=d
this.b=e
this.c=f},
bxy(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iR(w,B.ae(w).i("iR<1>")).aw(0,new A.aHK(v,d))
else throw B.e(B.bJ('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aHK:function aHK(d,e){this.a=d
this.b=e},
aBe(d,e){var w,v
if(e!=null){w=B.ae(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aBf(),w),w.i("au.E"))
return A.c4u(d,new A.a1R(v,x.cX))}else return d},
aBf:function aBf(){},
bYE(d,e){var w=!0
if(d!==C.fx)if(!(d===C.as&&e===C.w))w=d===C.iv&&e===C.b_
if(w)return D.Ed
else{w=!0
if(d!==C.iu)if(!(d===C.iv&&e===C.w))w=d===C.as&&e===C.b_
if(w)return D.Ee
else return D.aap}},
Nz:function Nz(d,e){this.a=d
this.b=e},
a1H:function a1H(d,e){this.a=d
this.b=e},
zl:function zl(d,e){this.a=d
this.$ti=e},
amS:function amS(){},
c4u(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cH($.an().r)
for(w=B.b([],x.C),v=new B.Om(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.T(B.fw('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ol(v,s)
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
if(o){q=new B.Ke(d.aSN(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.im(m)}p+=n
o=!o}}return l},
a1R:function a1R(d,e){this.a=d
this.b=0
this.$ti=e},
b1X:function b1X(){},
bxm(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fK))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bQU(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gek(v)===0){v=d.a.a
if(v.gek(v)===0){v=d.b.a
if(v.gek(v)===0){v=d.c.a
v=v.gek(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aA3(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNO()*w),C.d.aP(d.gG0()*w),C.d.aP(d.gKc()*w))},
bEQ(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
bxn(d){var w=d.a,v=w?A.aZo(d.b):0,u=w?A.aZo(d.c):0,t=w?A.aZo(d.d):0
return new B.ag(v,u,t,w?A.aZo(d.e):0)},
bW_(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
byi(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mQ(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seU(null)}},
aZo(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
ky(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k6(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k6(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c5N(d,e,f){return C.d.aP(d+(e-d)*f)},
bAK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k6(m,x.i)
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
A.a7a.prototype={
q(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.m
r=r?C.n:C.a5
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.c8(t.x,C.n,s,18),C.aQ],w))
v.push(B.az(new B.dL(t.c,!1,s),1))
v=B.aj(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.D,B.i(t.d,s,1,C.ad,s,B.bA(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.by(r,B.a9(w,C.z,C.ic,C.i),q,s,C.ai,s,3)}}
A.uV.prototype={
LD(d){return this.aSQ(d)},
aSQ(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LD=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.el("finance_summary",B.a5(["p_from",E.re(d.a),"p_to",E.re(d.b)],s,r),r),$async$LD)
case 3:q=f
if(q==null){u=D.aq9
w=1
break}if(x.f.b(q)){u=B.dd(q,s,r)
w=1
break}u=D.aqB
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LD,v)},
LC(d){return this.aSP(d)},
aSP(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LC=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.el("finance_kpis",B.a5(["p_from",E.re(d.a),"p_to",E.re(d.b)],s,r),r),$async$LC)
case 3:q=f
if(x.f.b(q)){u=B.dd(q,s,r)
w=1
break}u=D.apQ
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LC,v)},
pE(d){return this.aqD(d)},
aqD(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
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
Ly(d){return this.aSF(d)},
aSF(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
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
FV(d){return this.ajG(d)},
ajG(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FV=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LD(d),$async$FV)
case 7:q=f
o=A.aFw(q)
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
FR(d){return this.ajr(d)},
ajr(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FR=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LC(d),$async$FR)
case 7:q=f
o=A.bTu(q)
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
pE(d){return this.aqE(d)},
aqE(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
Lx(d){return this.aSE(d)},
aSE(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lx=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Ly(d),$async$Lx)
case 7:q=f
o=C.iR.cO(q)
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
Hv(d){if(d instanceof B.ys)return d
if(d instanceof B.ma){if(d.b==="42501")return new B.vQ(d.a)
return new B.tf(d.a)}if(d instanceof B.Nn)return new B.tf("Edge Function fehlgeschlagen ("+d.a+")")
return new B.B6("Unerwarteter Fehler: "+B.j(d))},
$iaFi:1}
A.qj.prototype={
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
A.aBL.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o7.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CM.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o8.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yv.prototype={
GR(d){return this.aqC(0)},
aqC(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GR=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dx)
s=t.r
r=s.aJ(0,$.xr(),x.P)
p.a=null
w=3
return B.k(B.pg(new A.aFd(p,t,r),x.H),$async$GR)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bwf()
s=s.e
s===$&&B.a()
s.ci(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GR,v)},
Lw(){return this.aSD()},
aSD(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lw=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dx)
s=t.r.aJ(0,$.xr(),x.P)
q.a=null
w=3
return B.k(B.pg(new A.aFc(q,t,s),x.H),$async$Lw)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)}}
A.yw.prototype={
dw(d,e){var w=null,v=e.ao($.xr(),x.P),u=e.ao($.bwf(),x.aN)
return B.t5(B.dt(B.b([new B.fx("Finanzen","Dashboard",new A.agF(e.ao($.bwd(),x.b).gjc(),new A.aFn(this,d,e),new A.aFo(this,d,e),new A.aFp(d),new A.aFq(d),new A.aFr(this,d,e,v),w),w),C.aB,new A.aof(v,w),C.c6,D.agk,C.c6,B.dc(u,new A.aFs(),new A.aFt(),new A.aFu(),!1,!0,!1,x.d,x.l)],x.p),w,C.cM,w,C.E,!1),C.n,new A.aFv(e))},
Jl(d,e){return this.aL8(d,e)},
aL8(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jl=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwd()
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
Bi(d,e){return this.awB(d,e)},
awB(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bi=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bwd().ghP(),x.F).Lw(),$async$Bi)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bm(D.ayl)
w=1
break}t=B.ox(C.u,10)
w=4
return B.k($.bN5().u_(s,"finanzauswertung.pdf",t,null,null,null),$async$Bi)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bi,v)},
Bj(d,e,f){return this.aIP(d,e,f)},
aIP(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bj=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j8(null,null,!0,null,new A.aFl(f,d),d,null,!0,!0,x.cJ),$async$Bj)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nK(e.aJ(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dQ()
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
A.agF.prototype={
q(d){var w=this,v=null,u=A.am0(C.n,F.hU,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.am0(v,D.ace,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.am0(v,D.y1,v,s?v:w.d,"sevDesk synchronisieren"),q=A.am0(C.a8,C.ji,C.a8,s?v:w.e,"PDF-Export")
return B.aj(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.am0(C.ae,C.fM,C.ae,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.G,0,v,v)}}
A.am_.prototype={
q(d){var w,v=this,u=null,t=B.ay(12),s=B.ay(12),r=B.ay(12),q=v.w
if(q==null)q=C.a5
q=B.cr(q,1)
w=v.r
if(w==null)w=C.h
return B.B2(B.dC(!1,C.W,!0,t,B.es(!1,s,!0,B.aS(u,B.c8(v.c,w,u,20),C.p,u,u,new B.aJ(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.a9,0,u,u,u,u,u,C.bl),u,v.d,u,u)}}
A.aof.prototype={
dw(d,e){var w=null,v=this.e,u=$.dQ(),t=x.p
return B.by(w,B.a9(B.b([D.a9t,C.D,B.aj(B.b([D.ad5,C.aA,B.az(B.i(u.aq(v.a)+" \u2013 "+u.aq(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.k,w,C.f,C.i,0,w,w),C.v,B.kr(C.cj,B.b([new A.IZ("Monat",new A.bhR(e),w,w),new A.IZ("Jahr (YTD)",new A.bhS(e),w,w),new A.IZ("Zeitraum w\xe4hlen \u2026",new A.bhT(this,d,e),D.abk,w)],t),C.dv,6,8)],t),C.z,C.f,C.i),w,w,C.F,w,3)},
IH(d,e){return this.aHI(d,e)},
aHI(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IH=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avE(new A.bhQ(),d,B.bN(B.aZ(t)-5,1,1,0,0,0,0),new B.lK(s.a,s.b,x.bz),B.bN(B.aZ(t)+1,1,1,0,0,0,0),C.e3),$async$IH)
case 2:r=g
if(r!=null)e.aJ(0,$.xr().ghP(),x.V).ue(0,new E.lQ(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IH,v)}}
A.IZ.prototype={
q(d){var w=null,v=B.ay(9999),u=B.ay(9999),t=B.ay(9999),s=B.cr(C.a5,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.c8(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dC(!1,C.W,!0,v,B.es(!1,u,!0,B.aS(w,B.aj(q,C.k,w,C.f,C.G,0,w,w),C.p,w,w,new B.aJ(w,w,s,t,w,w,C.A),w,w,w,w,C.hL,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.a9,0,w,w,w,w,w,C.bl)}}
A.Jq.prototype={
q(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jo(new A.boz(this)),C.c6,D.a9x,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.aj(B.b([D.adw,C.au,B.az(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.q,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.i,0,s,s),C.a9,s,C.F,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agD(t.a,t.b,t.c==="revenue",t.d,s),C.D],r))}q.push(B.a9(w,C.k,C.f,C.i))}return B.a9(q,C.ab,C.f,C.i)}}
A.agD.prototype={
q(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a9,s=B.cr(u?C.n:C.a5,1),r=B.ay(4),q=w.c
r=B.aS(C.U,B.i(C.c.a0(q,0,1),v,v,v,v,B.bA(C.h,14,C.o),v,v,v),C.p,v,v,new B.aJ(t,v,s,r,v,v,C.A),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ad,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.az(B.a9(B.b([q,B.i(t,v,v,v,v,B.y(C.q,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dz().aq(w.f)
return B.by(v,B.aj(B.b([r,C.au,t,B.i(q,v,v,v,v,B.y(u?C.ae:C.h,15,C.H),v,v,v)],s),C.k,v,C.f,C.i,0,v,v),v,v,C.dU,v,3)}}
A.I5.prototype={
q(d){var w=null
return B.by(C.a8,B.aj(B.b([D.ae4,C.au,B.az(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.i,0,w,w),C.fJ,w,C.F,w,3)}}
A.a7b.prototype={
dw(d,e){return B.dc(e.ao($.bPx(),x.e),new A.aKn(),new A.aKo(),new A.aKp(),!1,!0,!1,x.X,x.l)}}
A.Ip.prototype={
q(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.avC,C.v,B.jo(new A.beZ(v,q,100-t.w.a,w,p)),C.v,new A.alk(u),C.aB,D.avB,C.v,new A.ahy(t,u),C.aB,D.avw,C.v,B.bz(u,!0,u,B.k3(u,B.by(u,new A.U7(t,220,u),u,u,C.F,u,3),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf_(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aB,D.avq,C.v,B.bz(u,!0,u,B.k3(u,new A.Ul(t,200,!1,u),C.aa,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bf0(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.M,u),C.aB,D.avu,C.v,new A.an0(t,u),C.aB,D.avr,C.v,new A.ajl(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aB,D.avy,C.v,new A.asN(t,u)],s))
return B.a9(r,C.ab,C.f,C.i)}}
A.alk.prototype={
q(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.q,11,C.l).d6(1.35),w,w,w)}}
A.amx.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cI(m.d,"-")?C.a8:C.ae
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bf1(m,d):l
r=x.p
q=B.b([B.az(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.q,10,C.o).fw(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cr(C.a8,0.8)
n=B.ay(4)
q.push(B.aS(l,B.i("Ziel "+p,l,l,l,l,B.y(C.a8,9,C.o),l,l,l),C.p,l,l,new B.aJ(l,l,o,n,l,l,C.A),l,l,l,l,C.nr,l,l,l))}q=B.b([B.aj(q,C.k,l,C.f,C.i,0,l,l),C.aY,B.a5q(C.dd,B.i(m.d,l,l,l,l,B.bA(w,22,C.o),l,l,l),C.iQ)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ad,l,B.y(C.q,10,C.aE),l,l,l))
q.push(C.cX)
q.push(B.aj(B.b([new A.UV("Vormonat",m.r,l),C.cg,new A.UV("Vorjahr",m.f,l)],r),C.k,l,C.f,C.i,0,l,l))
q.push(C.cX)
q.push(B.az(new A.Yx(v,m.y,m.z,l),1))
return B.bz(l,u,l,B.k3(l,B.by(l,B.a9(q,C.z,C.f,C.i),l,l,C.cp,l,3),C.aa,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.M,l)}}
A.UV.prototype={
q(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ay(4)
return B.aS(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.q,9,C.o),r,r,r),C.p,r,r,new B.aJ(C.a5,r,r,q,r,r,C.A),r,r,r,r,C.nr,r,r,r)}w=q>=0
v=w?C.ae:C.a8
u=v.es(0.12)
t=B.cr(v,0.7)
s=B.ay(4)
return B.aS(r,B.aj(B.b([B.c8(w?F.aav:D.aau,v,r,10),C.Zr,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.k,r,C.f,C.G,0,r,r),C.p,r,r,new B.aJ(u,r,t,s,r,r,C.A),r,r,r,r,C.nr,r,r,r)}}
A.Yx.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ao
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ey(v,j[v]))
u=C.b.jI(j,new A.bnA())
t=C.b.jI(j,new A.bnB())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bnC(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5w(k,!1)
w=B.b([A.aKE(k,2,A.axU(!1,C.n.es(0.16),0,k,!0,D.wa),C.n,0.35,k,D.E4,k,!0,!1,!0,!1,D.Fs,!1,10,D.YU,!0,C.ls,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Ot(A.bxW(k,k,k,D.amk,l,D.BV,D.E0,D.E5,w,D.ago,k,m,k,n,D.Ye,D.aml,D.a9N),C.al,C.a2,k,k)}}
A.U7.prototype={
q(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLa
w=C.b.fA(p,0,new A.b5H())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ay2(B.b([A.a1d(q,q,D.Bm,q,C.n,q,q,q,r.b,6),A.a1d(q,q,D.Bm,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bQ(A.bDw(A.axW(q,q,u,q,q,A.a5w(q,!1),q,new A.yy(!0,!0,q,new A.b5I(),A.a_K(),!1,q,A.avo(),A.a_K()),q,v,q,q,new A.uX(!0,new A.ph(16,q,new A.q9(!0,new A.b5J(this),46,q),!0),D.ks,D.ks,new A.ph(16,q,new A.q9(!0,new A.b5K(p),26,q),!0)))),this.d,q)},
aKo(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Ul.prototype={
q(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b6B(),w),x.i)
C.b.K(o,new B.ab(u,new A.b6C(),w))
t=C.b.fA(o,0,new A.b6D())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ay2(B.b([A.a1d(q,q,q,q,C.n,q,q,q,v[s],14),A.a1d(q,q,q,q,C.ae,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bQ(A.bDw(A.axW(q,q,n,q,q,A.a5w(q,!1),q,D.E5,q,o,q,q,new A.uX(!0,D.ks,D.ks,D.ks,new A.ph(16,q,new A.q9(!0,new A.b6E(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.F,q,3)}}
A.an0.prototype={
q(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aL9
w=new B.ab(l,new A.bfy(),B.ae(l).i("ab<1,F>")).jI(0,new A.bfz())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dz()
o=r.d
n=new B.aV(4,4)
o=B.b([new B.iq(C.ak,C.f,C.i,C.k,m,C.b1,m,0,B.b([new B.jY(1,C.dB,B.a9(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.aq(r.f),m,m,m,m,B.y(C.q,12,C.aE),m,m,m)],v),C.z,C.f,C.i),m),C.aA,B.i(p.aq(o),m,m,m,m,B.bA(C.h,16,C.o),m,m,m)],v),m),C.cX,new B.Dt(new B.d1(n,n,n,n),C.bD,B.EQ(C.a5,8,C.d.bo(o/w,0,1),D.Ba),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.K(r)===B.K(q)&&B.a_N(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.K(u,o)}return B.by(m,B.a9(u,C.k,C.f,C.i),m,m,C.F,m,3)}}
A.ajl.prototype={
q(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.az(new A.Ce("Aktive Kunden",""+s,u),1)
w=B.az(new A.Ce("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.by(u,B.aj(B.b([s,w,B.az(new A.Ce("\xd8-Warenkorb",v.aq(t.d),u),1),B.az(new A.Ce("Umsatz/Kunde",v.aq(r),u),1)],x.p),C.k,u,C.f,C.i,0,u,u),u,u,C.F,u,3)}}
A.Ce.prototype={
q(d){var w=null
return B.a9(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.q,10,C.o).fw(0.6),w,w,w),C.bh,B.i(this.d,w,w,w,w,B.bA(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.G)}}
A.asN.prototype={
q(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bpR(),B.ae(q).i("ab<1,F>")).jI(0,new A.bpS()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aV(4,4)
t=B.b([new B.iq(C.ak,C.f,C.i,C.k,r,C.b1,r,0,B.b([new B.jY(1,C.dB,B.i(u.b,r,1,C.ad,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.q,12,C.H),r,r,r),B.i($.dz().aq(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aY,new B.Dt(new B.d1(s,s,s,s),C.bD,B.EQ(C.a5,6,C.d.bo(t/p,0,1),D.Ba),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.K(u)===B.K(s)&&B.a_N(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.D)
C.b.K(n,t)}return B.by(r,B.a9(n,C.k,C.f,C.i),r,r,C.F,r,3)}}
A.wO.prototype={
q(d){var w=null
return B.by(w,B.i(this.c,w,w,w,w,B.y(C.q,13,C.l),w,w,w),C.a9,w,C.F,w,3)}}
A.ahy.prototype={
dw(d,e){return B.dc(e.ao($.bwe(),x.fM),new A.b45(this,d,e),new A.b46(),new A.b47(),!1,!0,!1,x.h,x.l)}}
A.Be.prototype={
W(){return new A.TK()},
aXG(){return this.d.$0()}}
A.TK.prototype={
ap(){var w,v,u,t,s,r,q=this
q.aI()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.f7(J.am(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pE[t].a
if(v)r=""
else{r=B.bh(J.a3(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b0(r,".",",")}u.m(0,s,new B.bL(new B.cV(r,C.bJ,C.aR),$.ah()))}q.e!==$&&B.b3()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c9(v,v.r,v.e,B.l(v).i("c9<2>"))
while(v.u()){w=v.d
w.S$=$.ah()
w.T$=0}this.al()},
rj(d){var w=this.e
w===$&&B.a()
w=C.c.b6(w.h(0,d).a.a)
w=B.b0(w,".","")
w=B.jv(B.b0(w,",","."))
return w==null?0:w},
a3T(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pE[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b0(s,".",",")
t.ku(0,t.a.y0(C.aR,C.bJ,s))}}this.J(new A.b3U())},
aEk(){this.a3T(D.aqb)
this.c.P(x.q).f.bm(D.ayF)},
HX(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HX=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pE[e].a)
q=a2
t=4
w=7
return B.k($.aF6.ck().ze(B.b(["csv","txt"],x.s),C.xO,!0),$async$HX)
case 7:p=a5
a2=p
o=a2==null?null:J.Kb(a2.a).c
if(o==null){w=1
break}n=C.aG.ad6(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C_.cO(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.awg(l,B.bT("[;,\t]",!0,!1,!1))
if(J.cg(k)<2)continue
j=C.c.b6(J.a3(k,0)).toLowerCase()
i=J.CI(q,j)?j:D.aqC.h(0,j)
if(i==null)continue
d=C.c.b6(C.b.n7(J.bQk(k,1)))
d=B.b0(d,"\u20ac","")
d=B.b0(d," ","")
d=B.b0(d,".","")
h=B.b0(d,",",".")
g=B.jv(h)
if(g!=null)J.fq(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bm(D.ayi)
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
w=t}for(;;)switch(w){case 0:q.J(new A.b3V(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_8("upsert_finance_balance",B.a5(["p_as_of",C.c.a0(n.eg(),0,10),"p_cash_and_bank",q.rj("cash_and_bank"),"p_receivables",q.rj("receivables"),"p_inventory_value",q.rj("inventory_value"),"p_other_current_assets",q.rj("other_current_assets"),"p_fixed_assets",q.rj("fixed_assets"),"p_current_liabilities",q.rj("current_liabilities"),"p_long_term_liabilities",q.rj("long_term_liabilities"),"p_equity",q.rj("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I7)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXG()
o=q.c
o.toString
B.bc(o,!1).f2()
q.c.P(x.q).f.bm(D.aym)
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
if(q.c!=null)q.J(new A.b3W(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I7,v)},
q(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bA(C.h,18,C.o),r,r,r),p=s.f?r:new A.b3Y(s,d),o=s.d
o===$&&B.a()
p=B.hv(D.ad7,B.i("Stichtag: "+C.c.a0(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.az(B.hv(D.aed,D.aEn,o?r:s.gaDm(),r),1)
v=x.p
w=B.b([p,C.D,B.aj(B.b([w,C.aA,B.az(B.hv(D.ae2,D.aEc,o?r:s.gaEj(),r),1)],v),C.k,r,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pE[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f3(r,C.aV,!1,r,!0,C.t,r,B.fh(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.aa,!0,r,!0,r,!1,r,C.b0,r,r,r,r,C.iw,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.F,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.as,r,C.a3,r,r,r,r),C.D],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.q,11,C.l),r,r,r))
p=B.bQ(B.fc(B.a9(w,C.ab,C.f,C.G),r,C.E),r,380)
o=s.f
w=B.dF(C.cY,r,r,o?r:new A.b3Z(d),r,r)
o=o?r:s.gaE3()
t=B.dM(C.n,C.h,r,r,r,r,r)
return B.lE(B.b([w,B.dY(s.f?F.Zu:C.ey,o,t)],v),C.m,p,q)}}
A.bf.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.K(this)===B.K(e)&&B.a_N(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.eC(B.K(this))^B.bLs(this.gbD()))>>>0},
j(d){B.bEM()
return B.K(this).j(0)}}
A.KY.prototype={
W(){return new A.TL(B.A(x.S,x.I),new A.ay5(B.A(x.x,x.T)),null,null)}}
A.TL.prototype={
q(d){var w,v=this,u=v.a1R(),t=v.CW
t.toString
t=v.a1S(t.au(0,v.gfs().gp(0)))
w=v.a1S(u)
v.a.toString
return new A.KT(new A.a1c(t,w,null),u,null)},
a1S(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ay2(s.c,s.d,!1,r,s.a))}return d.aPG(w)},
a1R(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UF(t.ch)
if(r)s=w.a
r=t.y
t=t.aQB(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPH(A.bwF(!1,!0,!0,v.d,v.c,u.gas8(),v.f,v.e))}return t},
as9(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafw()||e==null||e.a==null){w=v.cy
v.J(w.gaP5(w))
return}v.J(new A.b4a(v,e))},
lx(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1R(),new A.b4b(w)))}}
A.nQ.prototype={
Ve(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.axW(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQB(d,e){return this.Ve(null,null,d,e)},
aPH(d){return this.Ve(null,d,null,null)},
aPG(d){return this.Ve(d,null,null,null)},
Xa(d,e,f){var w,v,u,t=A.ky(d.ch,e.ch,f,A.c3K(),x.dB),s=B.ac(d.CW,e.CW,f),r=A.bET(d.d,e.d,f),q=A.bGM(d.e,e.e,f),p=A.bER(d.c,e.c,f),o=e.a
o=A.a5w(B.a1u(d.a.b,o.b,f),o.a)
w=B.ac(d.y,e.y,f)
v=B.ac(d.x,e.x,f)
u=B.ac(d.z,e.z,f)
r=A.axW(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bEO(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.axV.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fE.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ay3(),B.ae(v).i("ab<1,F>")).jI(0,new A.ay4())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ik.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mG.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a19.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1e.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.ae7.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1f.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D3.prototype={
gbD(){return[this.a,this.b,C.bI,C.w,null]}}
A.KZ.prototype={}
A.a1g.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xF.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.ahu.prototype={}
A.ahB.prototype={}
A.ahC.prototype={}
A.ahE.prototype={}
A.ahF.prototype={}
A.ahG.prototype={}
A.ahH.prototype={}
A.ahI.prototype={}
A.ahJ.prototype={}
A.ay5.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uz(0,0,!1)
v=new A.zl(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uz(t,u,!0)}w=null
try{w=C.b.oV(d,new A.ay6())}catch(s){return new A.uz(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
A.ahD.prototype={}
A.ay7.prototype={
ib(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_W(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ac7(t,A.bwE(w,t.a),u)
l.y=u
l.aRX(e,u,f)
l.alG(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aS5(d,e,m,t,r,s,n,o,f)}}},
ac7(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dK("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iR(p,B.ae(p).i("iR<1>")).aw(0,new A.ay8(t,q,r,s))
w.push(new A.a6c(q))}return w},
aRX(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
a4=B.Qb(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qb(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seU(null)
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
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dP(b1),$.p7()[1],!0)
a6=b3.f.em()
u.drawRRect(B.lz(a4),a6)
a6.delete()
u.restore()
b3.aS3(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
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
if(k!=null)n.im(k)
v.fW(A.aBe(b2,o.r),b3.r)}}}},
aS5(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AV(a5,a5,a5,a5,B.d3(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lB().ZW(a8,a7.b),a7.a),C.bI,C.w,a5,b6.c,C.bz)
w.afQ(b1.f)
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
if(v!==D.aGL)j=v===D.a_9&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZX(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aV(s,s)
e=B.G_(g,f,f,f,f)
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
s=g.gai5()
a1=b1.Q
if(!a1.k(0,C.K)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VQ(d,new A.ay9(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aS3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Qb(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a1:new B.aV(i.z,i.Q)
p=v?C.a1:new B.aV(i.x,i.y)
o=v?new B.aV(i.e,i.f):C.a1
q=B.Qb(w,s,u,r,t,p,o,v?new B.aV(i.r,i.w):C.a1)}else q=B.byC(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Ww(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ac7(b2,A.bwE(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1g(d,q,a0,o,a2,a1,new A.ey(d.a,v),new B.r(n,t))}}return null}}
A.a6c.prototype={}
A.a1c.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcL(),t=new A.ay7()
t.a18()
$.an()
w=B.aY()
w.b=C.bf
t.f=w
w=B.aY()
w.b=C.aX
t.r=w
w=B.aY()
w.b=C.bf
w.r=C.m.gp(0)
t.w=w
w=B.aY()
w.b=C.aX
w.r=C.I.gp(0)
w.c=1
t.x=w
t=new A.abh(this.d,v,u,t,d,C.bp,new B.bp(),B.aK(x.v))
t.bk()
t.YS(v.cy)
t.aeY()
return t},
by(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scL(B.bu(d,null,x.w).w.gcL())
e.B=d
e.bg()}}
A.abh.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bg()},
sYD(d){var w=this
if(w.i5.k(0,d))return
w.i5=d
w.a0G(d.cy)
w.bg()},
scL(d){if(this.cW.k(0,d))return
this.cW=d
this.bg()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ib(w,new A.a1H(t,v),new A.vM(u.aC,u.i5,u.cW,x.Q))
s.restore()},
ZQ(d){var w=this,v=w.gC(0)
return new A.KZ(w.fX.Ww(d,v,new A.vM(w.aC,w.i5,w.cW,x.Q)))}}
A.a12.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D2.prototype={
L(){return"AxisSide."+this.b}}
A.ty.prototype={}
A.q9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acG.prototype={
gbD(){return[!1,0,0,0]}}
A.ph.prototype={
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
A.yy.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pD.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ae9.prototype={
gbD(){return[this.a,this.b]}}
A.Qf.prototype={
gbD(){return[this.a,this.b]}}
A.n_.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.no.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kQ.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.li.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6n.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aew.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MS.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uW.prototype={}
A.N2.prototype={
ady(d,e,f){var w,v
$.an()
w=B.aY()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iT(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.ahp.prototype={}
A.aht.prototype={}
A.akH.prototype={}
A.al_.prototype={}
A.al0.prototype={}
A.al2.prototype={}
A.al3.prototype={}
A.alQ.prototype={}
A.alP.prototype={}
A.alR.prototype={}
A.apo.prototype={}
A.arb.prototype={}
A.arc.prototype={}
A.asR.prototype={}
A.atu.prototype={}
A.att.prototype={}
A.atv.prototype={}
A.axL.prototype={
MB(d,e,f,g,h,i){return new B.ie(this.aVL(d,e,f,g,h,i),x.g4)},
aVK(d,e,f,g){return this.MB(d,e,f,!0,g,!0)},
aVL(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MB(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lB().ajd(s,u,v,w)
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
w=B.aY()
w.b=C.aX
v.a=w
w=B.aY()
w.b=C.bf
v.b=w
w=B.aY()
w.b=C.bf
v.e=w
w=B.aY()
w.b=C.aX
v.c=w
v.d=B.aY()},
ib(d,e,f){var w=this
w.a_X(d,e,f)
w.aRT(e,f)
w.aS2(e,f)
w.aS1(e,f)},
aS1(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lB().OF(w.a,a1.r-a1.f)
u=$.bvR().MB(a1.w,v,a1.r,!1,a1.f,!1)
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
p.seU(j.mQ(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dy(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lB().OF(w.b,a1.y-a1.x)
u=$.bvR().MB(a1.z,h,a1.y,!1,a1.x,!1)
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
q.seU(k.mQ(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dy(n,m,d.a,f.d)}},
aRT(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aS2(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.l5(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mQ(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seU(null)}o=n.e.em()
w.drawRect(B.dP(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.l5(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mQ(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seU(null)}o=n.e.em()
j.drawRect(B.dP(s),o)
o.delete()}},
aS0(d,e,f){var w,v
this.a_X(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adz(d,e,f,w)
if(v.b.length!==0)this.aS7(d,e,f,w)},
adz(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
i=B.l5(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mQ(0,i))}else{if(k==null)k=C.I
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
s.adA(0,n,new B.r(h,o),k)}}},
aS7(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.l5(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mQ(0,i))}else{if(k==null)k=C.I
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
s.adA(0,n,new B.r(o,k),j)}}},
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
gakY(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakZ(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal_(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakW(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alj(d){var w,v=this,u=null,t=v.d,s=A.bxn(t.d),r=t.a
r=r.a&&A.bQU(r.b)?r.b:u
w=B.b([B.aS(u,v.c,C.p,u,u,new B.aJ(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.axN(w)
if(v.gakY())C.b.hz(w,s.$1(!0),new A.AF(D.Bh,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal_())C.b.hz(w,s.$1(!0),new A.AF(D.mE,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakZ())C.b.hz(w,s.$1(!0),new A.AF(D.Bi,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gakW())C.b.hz(w,s.$1(!0),new A.AF(D.dN,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
q(d){return B.jo(new A.axM(this))}}
A.RG.prototype={
W(){return new A.Ym(new B.bk(null,x.eF))}}
A.Ym.prototype={
axB(){switch(this.a.c.a){case 0:return C.ed
case 1:return C.fE
case 2:return C.dd
case 3:return C.dL}},
ay6(){switch(this.a.c.a){case 0:return new B.ag(0,0,8,0)
case 1:return new B.ag(0,0,0,8)
case 2:return new B.ag(8,0,0,0)
case 3:return new B.ag(0,8,0,0)}},
axD(d){this.a.toString
return},
ap(){this.aI()
$.cB.x1$.push(this.ga4m())},
bc(d){this.bE(d)
$.cB.x1$.push(this.ga4m())},
q(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ay6()
return B.He(B.b1u(0,B.aS(v.axB(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.acH.prototype={
bn(d){return A.bQL(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a13.prototype={
hn(d){if(!(d.b instanceof B.hq))d.b=new B.hq(null,null,C.u)},
hY(d){if(this.B===C.ak)return this.y9(d)
return this.ada(d)},
aKA(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a90(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a9_(d,B.hF())
switch(this.B.a){case 0:return d.c2(new B.G(w.a,w.b))
case 1:return d.c2(new B.G(w.b,w.a))}},
a9_(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ak?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.hi(u,null)
break
case 1:q=B.hi(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a90(p)
t=Math.max(t,o.aKA(p))
m=r.aG$}return new A.bf7(n<1/0?n:s,t)},
cz(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a9_(o,B.mA()),m=n.a,l=n.b
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
q=s.b-p.a90(r==null?B.T(B.Z("RenderBox was not laid out: "+B.K(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.ya(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbi(0,null)
this.v2(d,e)},
l(){this.a4.sbi(0,null)
this.aog()}}
A.bf7.prototype={}
A.axO.prototype={}
A.jS.prototype={
gbD(){return[this.a,this.b]}}
A.nP.prototype={}
A.ahq.prototype={}
A.ahr.prototype={
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
A.ahs.prototype={}
A.TI.prototype={
l(){var w,v,u
for(w=this.W3$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AF.prototype={
goA(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghJ(){switch(this.c.a){case 0:return C.dd
case 1:return C.dL
case 2:return C.ed
case 3:return C.fE}},
gb_l(){var w=this.d,v=A.bxn(w.d),u=A.bEQ(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).af(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).af(0,new B.ag(u.a,0,u.c,0))}},
gahU(){var w=this.d,v=A.bEQ(w.a),u=A.bxn(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd3(0)+(v.gd_(0)+v.gd3(0))
case 1:case 3:return u.gew()+v.gew()}},
aWt(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goA().c.d
if(o==null)o=$.lB().OF(d,f-e)
w=p.c
v=w!==D.mE
if((!v||w===D.dN)&&p.d instanceof A.nQ){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bwE(u,d)
w=new B.iR(t,B.ae(t).i("iR<1>"))
s=w.giG(w).f1(0,new A.aZr(u),x.W).fZ(0)}else{r=$.bvR()
w=!v||w===D.dN
v=p.d
q=r.aVK(w?v.w:v.z,o,f,e)
v=B.om(q,new A.aZs(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ae(s).i("ab<1,nP>")
w=B.Q(new B.ab(s,new A.aZt(p,e,f,o,g,d),w),w.i("au.E"))
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
if(w===D.Bh||v)j.goA()
if(j.goA().c.a){v=!u||w===D.dN?r:j.goA().c.c
p=!u||w===D.dN?j.goA().c.c:r
o=j.gb_l()
n=!u||w===D.dN?C.ak:C.E
j.gahU()
m=j.gahU()
l=!u||w===D.dN
k=j.d
l=l?k.f:k.x
u=!u||w===D.dN?k.r:k.y
q.push(B.aS(i,A.bY2(new A.axO(),n,j.aWt(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bi||w===D.dN)j.goA()
return new B.eb(t,i,i,B.bTy(q,C.k,s,i,C.f,C.G,0,i,i,C.b1),i)}}
A.a1i.prototype={
gbD(){return[this.a,this.b]}}
A.a5v.prototype={
gbD(){return[this.a,this.b]}}
A.N9.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5x.prototype={
gabs(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.ayi.prototype={}
A.aED.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahM.prototype={}
A.akX.prototype={}
A.akY.prototype={}
A.al4.prototype={}
A.L1.prototype={
ib(d,e,f){}}
A.vM.prototype={}
A.hp.prototype={
gdL(){return null},
gafw(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.N8
if(w)return!0
return!(v instanceof A.N5)&&!(v instanceof A.N4)&&!(v instanceof A.N6)&&!(v instanceof A.N3)&&!w&&!(v instanceof A.N7)}}
A.a5B.prototype={
gdL(){return this.a.b}}
A.a5C.prototype={
gdL(){return this.a.b}}
A.a5D.prototype={
gdL(){return this.a.b}}
A.N4.prototype={}
A.N5.prototype={}
A.a5G.prototype={
gdL(){return this.a.b}}
A.N7.prototype={}
A.N8.prototype={
gdL(){return this.a.b}}
A.a5A.prototype={
gdL(){return this.a.b}}
A.a5z.prototype={
gdL(){return this.a.b}}
A.N3.prototype={
gdL(){return this.a.b}}
A.a5E.prototype={
gdL(){return this.a.gdL()}}
A.a5F.prototype={
gdL(){return this.a.gdL()}}
A.N6.prototype={
gdL(){return this.a.gdL()}}
A.Gb.prototype={
YS(d){this.V=d.b
this.U=d.c
this.a4=d.d},
aeY(){var w=this,v=null,u=w.ai=B.byj(v,v)
u.ay=new A.aUJ(w)
u.ch=new A.aUK(w)
u.CW=new A.aUL(w)
u.cy=new A.aUM(w)
u.cx=new A.aUN(w)
u=w.aE=B.GZ(v,-1,v)
u.B=new A.aUO(w)
u.Y=new A.aUP(w)
u.V=new A.aUQ(w)
u=w.bC=B.a7v(v,w.a4,v)
u.p3=new A.aUR(w)
u.p4=new A.aUS(w)
u.RG=new A.aUT(w)},
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
w.rG(d)}else if(x.gJ.b(d))v.l8(new A.a5F(d))},
gN4(d){return new A.aUU(this)},
gN6(d){return new A.aUV(this)},
l8(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZQ(w):null
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
A.Ot.prototype={
W(){return new A.W7(B.b([],x.r),B.A(x.S,x.I),new A.aKG(B.A(x.y,x.dj)),null,null)}}
A.W7.prototype={
q(d){var w,v=this,u=v.a4o(),t=v.CW
t.toString
t=v.ab1(t.au(0,v.gfs().gp(0)))
w=v.ab1(u)
v.a.toString
return new A.KT(new A.a7n(t,w,null),u,null)},
ab1(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ae(w).i("ab<1,ed>")
w=B.Q(new B.ab(w,new A.bfc(this,d),v),v.i("au.E"))
return d.aQy(w,this.cy)},
a4o(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UF(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQN(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQc(new A.EP(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayV(),t.c,t.d))}return r},
ayW(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafw())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfa(v))
return}v.J(new A.bfb(v,e))},
lx(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4o(),new A.bfd(w)))}}
A.pQ.prototype={
Xa(d,e,f){var w,v,u,t,s,r,q=B.ac(d.f,e.f,f),p=B.ac(d.r,e.r,f),o=B.ac(d.w,e.w,f),n=B.ac(d.x,e.x,f),m=B.ac(d.y,e.y,f),l=B.ac(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a5w(B.a1u(d.a.b,j.b,f),j.a)
w=A.bEO(d.at,e.at,f)
v=A.bER(d.c,e.c,f)
u=A.bET(d.d,e.d,f)
t=A.bGM(d.e,e.e,f)
s=A.ky(d.ch,e.ch,f,A.c5P(),x.cz)
s.toString
r=A.ky(d.CW,e.CW,f,A.c5O(),x.J)
r.toString
u=A.bxW(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vf(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bxW(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQN(d,e,f,g){return this.Vf(null,null,d,e,f,g,null)},
aQc(d){var w=null
return this.Vf(w,d,w,w,w,w,w)},
aQy(d,e){var w=null
return this.Vf(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ed.prototype={
aqV(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oV(n.a,new A.aKF())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
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
acQ(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aKE(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQj(d){return this.acQ(d,null)},
aQl(d){return this.acQ(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ou.prototype={
gbD(){return[this.a]}}
A.a1b.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mH.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KX.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yx.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aKq.prototype={
L(){return"LabelDirection."+this.b}}
A.a5y.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EP.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7o.prototype={
gbD(){return[4,C.hN,16,D.xL,0,120,A.c5R(),!1,!1,!1,0,C.K,A.c5Q()]}}
A.n2.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qh.prototype={}
A.rz.prototype={
gbD(){return[this.a,this.b,C.bI,C.w,null]}}
A.tz.prototype={
gbD(){return[this.a,this.b]}}
A.GD.prototype={
gbD(){return[this.a]}}
A.Ov.prototype={}
A.zh.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xa(v,w,d)}}
A.ahz.prototype={}
A.ahA.prototype={}
A.ahN.prototype={}
A.akZ.prototype={}
A.al1.prototype={}
A.amE.prototype={}
A.amF.prototype={}
A.amG.prototype={}
A.amI.prototype={}
A.amJ.prototype={}
A.amK.prototype={}
A.amL.prototype={}
A.ara.prototype={}
A.asQ.prototype={}
A.aKG.prototype={
UF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yl
u=new A.zl(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zi(s,r,q,t,!0)}w=null
try{w=C.b.oV(d,new A.aKH())}catch(p){return D.yl}v=null
try{v=C.b.oV(w.a,new A.aKI())}catch(p){return D.yl}o=v.a
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
if(f<m)m=f}e=new A.zi(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amH.prototype={}
A.aKJ.prototype={
ib(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabs(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.aY())
a3.aPc(new B.H(0,0,u,v))}d.a_W(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRZ(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRV(a3,q,a4)
d.aS_(a3,q,a4)
d.alF(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gt(o)!==p.length)throw B.e(B.dK("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vv(q,i,j,k))}}d.aS6(a3,s,a4)
if(w.gabs(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aS4(a2,a3,v,f,new A.GD(g),a4)}},
aRV(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bxm(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Zp(o,e,u,f)
s=p.aj5(o,e,t,u,f)
r=p.Zr(o,e,t,u,f,!0)
q=p.aj4(o,e,t,u,f)
p.aRY(d,s,p.Zo(o,e,t,u,f,!0),f,e)
p.aRS(d,q,r,f,e)
p.aRW(d,t,e)
p.aRU(d,t,e,f)}},
aRZ(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bxm(a6.a),a9=A.bxm(a7.a)
if(a8.length!==a9.length)throw B.e(B.bJ("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ae(m).i("cI<1>")
k=B.Q(new B.cI(m,l),l.i("au.E"))
j=a3.Zp(a4,a6,n,b3)
i=a3.Zq(a4,a7.aQl(k),k,b3,j)
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
a1.seU(u.mQ(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.I:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mK(C.dy,C.bf,C.e7,C.ew,C.dV).em()
m=B.dP(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.T(B.vs(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aS_(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zv(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fK)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).ady(s,q,new B.r(p,o))}}},
aS6(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aKM())
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
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.T(B.ry(d.a))
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
f.seU(a6.mQ(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dy(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.T(B.ry(d.a))
f.ady(t,j,new B.r(h,g))}}},
Zq(d,e,f,g,h){var w=this.aj6(d,e,f,g,h)
return w},
Zp(d,e,f,g){return this.Zq(d,e,f,g,null)},
aj6(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cH($.an().r):a5,f=J.Y(a3),e=f.gt(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
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
s=new B.LX(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.im(r)}return g},
Zr(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bxU(f)
v=J.Y(g)
u=s.fd(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fd(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pp())
return w},
aj5(d,e,f,g,h){return this.Zr(d,e,f,g,h,!1)},
Zo(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bxU(f)
v=J.Y(g)
u=t.fd(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fd(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pp())
return w},
aj4(d,e,f,g,h){return this.Zo(d,e,f,g,h,!1)},
aRY(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.byi(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fW(e,r.r)},
aRS(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.byi(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRW(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Om(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.is:C.e7
u.e=C.ew
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lB()
u.z=new B.zq(C.at,w.c*0.57735+0.5)
d.a.fW(B.bxV(A.aBe(e,f.cy),w.b),this.f)},
aRU(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.is:C.e7
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
A.byi(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bW_(t)
d.a.fW(A.aBe(e,f.cy),s.f)},
aS4(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bKY(b1),b3=J.Y(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dK("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lB().ZW(b4,u.b)
s=u.a
r=w.k(0,C.iW)?new B.kt(1):w
q=new B.tw(new B.hA(s,a8,a8,C.bp,a8,a8,a8,a8,a8,a8,t),C.bI,C.w,r,a8,a8,a8,a8,C.bz,a8)
q.afQ(120)
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
i=a7.ZX(b3,l,D.xL,0)
b3=i+l
w=j+k
h=new B.aV(4,4)
g=B.G_(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bKX(f)
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
s.c=0}b5.VQ(0,new A.aKK(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bYE(q.r,q.w)
A:{if(D.Ed===a5){a6=a3
break A}if(D.Ee===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VQ(0,new A.aKL(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zv(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Ww(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajx(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aKN())
return t.length===0?null:t},
ajx(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fK))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qh(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vv.prototype={}
A.a7n.prototype={
bn(d){var w,v=this.e,u=B.bu(d,null,x.w).w.gcL(),t=new A.aKJ()
t.a18()
$.an()
w=B.aY()
w.b=C.aX
t.f=w
w=B.aY()
w.b=C.bf
t.r=w
w=B.aY()
w.b=C.aX
t.w=w
w=B.aY()
w.b=C.bf
w.r=C.I.gp(0)
w.a=D.a0k
t.x=w
w=B.aY()
w.b=C.aX
w.r=C.C.gp(0)
t.y=w
w=B.aY()
w.b=C.bf
w.r=C.m.gp(0)
t.z=w
w=B.aY()
w.b=C.aX
w.r=C.I.gp(0)
w.c=1
t.Q=w
t=new A.abu(this.d,v,u,t,d,C.bp,new B.bp(),B.aK(x.v))
t.bk()
t.YS(v.cx)
t.aeY()
return t},
by(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scL(B.bu(d,null,x.w).w.gcL())
e.B=d
e.bg()}}
A.abu.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bg()},
sYD(d){var w=this
if(w.i5.k(0,d))return
w.i5=d
w.a0G(d.cx)
w.bg()},
scL(d){if(this.cW.k(0,d))return
this.cW=d
this.bg()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.ib(w,new A.a1H(t,v),new A.vM(u.aC,u.i5,u.cW,x.o))
s.restore()},
ZQ(d){var w=this,v=w.gC(0)
return new A.Ov(w.fX.Ww(d,v,new A.vM(w.aC,w.i5,w.cW,x.o)))}}
A.Nz.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1H.prototype={
aPc(d){this.a.a.clipRect(B.dP(d),$.p7()[1],!0)
return null},
adG(d,e){d.aM(this.a,e)},
VQ(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lB()
s.YB(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dy(d,e,f,g){var w=B.cH($.an().r)
w.aA(new B.fa(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fW(A.aBe(w,g),f)}}
A.zl.prototype={
gbD(){return[this.a]}}
A.amS.prototype={}
A.a1R.prototype={}
A.b1X.prototype={
Kn(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aX2(d,e){var w,v,u,t,s
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
aX3(d,e){var w,v
if(d==null)return D.a0v
w=d.b
v=e/2
return d.aQo(w>v?v:w)},
OF(d,e){var w,v=Math.max(C.d.cA(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_5(w)},
b_5(d){if(d<1)return this.aJ9(d)
return this.a84(d)},
aJ9(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a84(d*q)/q},
a84(d){var w,v=C.e.j(C.d.a3(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a3(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a3(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a3(Math.pow(10,v))
else return C.d.a3(Math.pow(10,v))},
ajl(d){if(d>=1)return 1
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
v=B.b5(d,C.vH)
v=v==null?null:v.ay
return v===!0?w.c5(C.ml):w},
ajd(d,e,f,g){var w=C.d.ae(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qj)","D(ey)","~(v,fE)","F(ed,v)","R<~>()","F(F,qj)","bP(F,ty)","pD(F)","v(qh,qh)","Ip(o7)","I5(B,bI)","Jq(o8)","vA(@)","wv(@)","ed(F)","CM(@)","ai(F,ty)","uV(dD<uV>)","Ed(dD<aFi>)","F(vA)","F(wv)","wO(B,bI)","Be(z)","~()","qj(@)","~(hp,KZ?)","xF(@)","F(ik)","D(fE)","~(v,ik)","~(@)","jS(nP)","c(nP)","jS(bH<v,F>)","jS(F)","nP(jS)","~(hp,Ov?)","ed(ed)","lQ(wl<lQ>)","zh(@)","R<o8>(ce<o8>)","tz(v)","uW(ey,F,ed,v)","rz(n2)","D(ed)","v(vv,vv)","F(fE)","R<o7>(ce<o7>)","v(v,v,F)","fE(fE,fE,F)","ik(ik,ik,F)","mG(mG,mG,F)","D3?(fE,v,ik,v)","E(fE)","c(F,ty)","ey(ey,ey,F)","D(F)","n_(n_,n_,F)","no(no,no,F)","kQ(kQ,kQ,F)","li(li,li,F)","f(kQ)","f(li)","ed(ed,ed,F)","mH(mH,mH,F)","uW(ey,F,ed,v{size:F?})","D(ey,ed)","F(r,r)","u<tz>(ed,u<v>)","y8(z)","u<rz>(u<n2>)","E(n2)","yv(eE<B?>)"])
A.aFe.prototype={
$1(d){var w=B.dd(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qj(J.am(v==null?"":v),A.p3(w.h(0,"revenue_net")),A.p3(w.h(0,"expense_net")),A.p3(w.h(0,"result_net")))},
$S:z+24}
A.aFf.prototype={
$1(d){var w,v,u,t=B.dd(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.p3(t.h(0,"gross"))
u=B.bh(t.h(0,"purchases_count"))
u=u==null?null:C.d.a3(u)
if(u==null)u=0
return new A.vA(s,r,w,v,u,A.p3(t.h(0,"avg_basket")))},
$S:z+12}
A.aFg.prototype={
$1(d){var w,v=B.dd(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.bh(v.h(0,"quantity"))
w=w==null?null:C.d.a3(w)
if(w==null)w=0
return new A.wv(u,t,w,A.p3(v.h(0,"gross")))},
$S:z+13}
A.aFx.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.CM(v,u,J.am(t==null?"expense":t),A.ud(w.h(d,"net")),A.ud(w.h(d,"tax")),A.ud(w.h(d,"gross")))},
$S:z+15}
A.bty.prototype={
$1(d){return new A.uV(d.ao($.c0(),x.A))},
$S:z+17}
A.btz.prototype={
$1(d){return new A.Ed(d.ao($.bPy(),x.D))},
$S:z+18}
A.bvq.prototype={
$1(d){return E.aFh()},
$S:z+38}
A.btA.prototype={
$1(d){var w=d.ao($.xr(),x.P)
return d.ao($.aw2(),x.a).FV(w)},
$S:z+40}
A.btx.prototype={
$1(d){var w=d.ao($.xr(),x.P)
return d.ao($.aw2(),x.a).FR(w)},
$S:z+47}
A.btw.prototype={
$1(d){return this.aiX(d)},
aiX(d){var w=0,v=B.q(x.h),u,t,s,r,q
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
A.aFd.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.aw2(),x.a).pE(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFc.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.aw2(),x.a).Lx(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFv.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwf()
if(s.e==null)B.T(B.Z(y.b))
s.gco().ci(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFn.prototype={
$0(){return this.a.Jl(this.b,this.c)},
$S:0}
A.aFo.prototype={
$0(){return this.a.Bi(this.b,this.c)},
$S:0}
A.aFp.prototype={
$0(){var w=x.z
return B.bc(this.a,!1).dX(B.dT(new A.aFm(),null,w),w)},
$S:0}
A.aFm.prototype={
$1(d){return F.Dc},
$S:z+69}
A.aFq.prototype={
$0(){return B.od(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFr.prototype={
$0(){var w=this
return w.a.Bj(w.b,w.c,w.d)},
$S:0}
A.aFu.prototype={
$0(){return D.asE},
$S:97}
A.aFt.prototype={
$2(d,e){return new A.I5(B.j(d),null)},
$S:z+10}
A.aFs.prototype={
$1(d){return new A.Jq(d,null)},
$S:z+11}
A.aFl.prototype={
$1(d){var w=null,v=this.a,u=$.dQ()
v=B.i("Die Finanzauswertung f\xfcr "+u.aq(v.a)+" \u2013 "+u.aq(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lE(B.b([B.dF(C.cY,w,w,new A.aFj(u),w,w),B.dY(F.vj,new A.aFk(u),B.dM(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.vk)},
$S:53}
A.aFj.prototype={
$0(){B.bc(this.a,!1).di(!1)
return null},
$S:0}
A.aFk.prototype={
$0(){B.bc(this.a,!1).di(!0)
return null},
$S:0}
A.bhR.prototype={
$0(){var w=this.a.aJ(0,$.xr().ghP(),x.V),v=E.aFh()
w.ue(0,v)
return v},
$S:0}
A.bhS.prototype={
$0(){var w=this.a.aJ(0,$.xr().ghP(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lQ(B.bN(B.aZ(v),1,1,0,0,0,0),v)
w.ue(0,u)
return u},
$S:0}
A.bhT.prototype={
$0(){return this.a.IH(this.b,this.c)},
$S:0}
A.bhQ.prototype={
$2(d,e){return new B.oK(B.W(d).aPK(B.W(d).ax.aQD(C.h,C.n)),e,null)},
$S:1019}
A.boz.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.Oe(!1,C.o2,"Umsatz 7 %",t.aq(u.a),w),r=A.Oe(!1,C.o2,"Umsatz 19 %",t.aq(u.b),w),q=A.Oe(!0,D.abj,"Umsatz netto",t.aq(u.c),w),p=A.Oe(!1,D.abi,"Aufwand",t.aq(u.d),w),o=u.e,n=t.aq(o)
return E.aHL(1.7,B.b([s,r,q,p,A.Oe(!0,C.nS,"Ergebnis",n,o<0?C.a8:C.ae),A.Oe(!1,C.fM,"USt-Saldo",t.aq(u.f-u.r),w)],x.p),v,12,12,C.ie,!0)},
$S:123}
A.aKp.prototype={
$0(){return D.asB},
$S:97}
A.aKo.prototype={
$2(d,e){var w=null
return B.by(C.a8,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fJ,w,C.F,w,3)},
$S:304}
A.aKn.prototype={
$1(d){return new A.Ip(d,null)},
$S:z+9}
A.beZ.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.aq(k.c),h=l.w,g=l.d,f=B.ae(g).i("ab<1,F>"),e=f.i("au.E"),d=B.Q(new B.ab(g,new A.beO(),f),e)
i=A.jI(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.aq(r.b)
w=B.Q(new B.ab(g,new A.beP(),f),e)
d=A.jI(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.aq(k.e)
w=B.Q(new B.ab(g,new A.beQ(),f),e)
k=A.jI(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.beR(),f),e)
w=A.jI(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.beS(),f),e)
v=A.jI(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.beT(),f),e)
u=A.jI(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.beU(),f),e)
t=A.jI(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.aq(h.d)
s=B.Q(new B.ab(g,new A.beV(),f),e)
h=A.jI(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.aq(l.r.d)
m=B.Q(new B.ab(g,new A.beW(m),f),e)
m=A.jI(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.aq(l)
l=B.Q(new B.ab(g,new A.beX(l),f),e)
l=A.jI(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.beY(j),f),e)
return E.aHL(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jI(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ie,!0)},
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
$0(){return A.bAa(this.b,1.45,new A.U7(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bf0.prototype={
$0(){return A.bAa(this.b,1.6,new A.Ul(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bsF.prototype={
$1(d){var w=this,v=null,u=B.ay(16),t=x.p,s=B.b([B.aj(B.b([B.az(B.i(w.a,v,v,v,v,B.bA(C.h,18,C.o),v,v,v),1),B.fj(v,v,D.adv,v,v,new A.bsE(d),v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.q,12,C.aE),v,v,v),C.D],t))
s.push(C.v)
s.push(B.bQ(new B.mE(w.c,w.d,v),v,17976931348623157e292))
return B.a4L(v,C.m,new B.ad(C.ai,B.a9(s,C.z,C.f,C.G),v),v,v,v,C.hO,C.v2,v,new B.d6(u,C.K),v)},
$S:1020}
A.bsE.prototype={
$0(){return B.bc(this.a,!1).f2()},
$S:0}
A.bf1.prototype={
$0(){var w=this.a,v=B.b0(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAa(this.b,2.4,new A.Yx(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.bnA.prototype={
$2(d,e){return d<e?d:e},
$S:44}
A.bnB.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.bnC.prototype={
$1(d){return A.aKE(null,1.4,null,C.a8,0.35,D.ahM,D.E4,null,!1,!1,!1,!1,D.Fs,!1,10,D.YU,!0,C.ls,B.b([new A.ey(0,d),new A.ey(this.a,d)],x.U))},
$S:z+14}
A.b5H.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b5J.prototype={
$2(d,e){var w=null
return B.i(this.a.aKo(d),w,w,w,w,B.y(C.q,10,C.H),w,w,w)},
$S:z+16}
A.b5K.prototype={
$2(d,e){var w=null,v=C.d.a3(d)
if(v<0||v>=this.a.length)return C.vb
return new B.ad(C.kY,B.i(C.c.cV(this.a[v].a,5),w,w,w,w,B.y(C.q,9,C.H),w,w,w),w)},
$S:z+6}
A.b5I.prototype={
$1(d){return D.a9L},
$S:z+7}
A.b6B.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6C.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b6D.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b6E.prototype={
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
A.bpR.prototype={
$1(d){return d.d},
$S:z+20}
A.bpS.prototype={
$2(d,e){return d>e?d:e},
$S:44}
A.b47.prototype={
$0(){return D.asK},
$S:97}
A.b46.prototype={
$2(d,e){return new A.wO("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b45.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.a9(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.D,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.q,12.5,C.l),m,m,m),C.v,B.kr(C.cj,B.b([B.hv(C.F_,D.aG9,new A.b4_(w,v),m),B.hv(D.ad8,D.aF4,new A.b40(w,v),m)],u),C.dv,8,8)],u),C.z,C.f,C.i),C.a9,m,C.F,m,3)}w=new A.b48(d)
t=C.b.fA(n.a.e.d,0,new A.b41())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jo(new A.b42(new A.b49(w),r,w,s))
v=J.Y(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a9(B.b([w,C.D,B.aj(B.b([B.az(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.q,11,C.l),m,m,m),1),B.oH(D.aei,D.aFp,new A.b43(q,p),m),B.oH(D.adX,D.aFa,new A.b44(q,p,d),m)],o),C.k,m,C.f,C.i,0,m,m)],o),C.ab,C.f,C.i)},
$S:290}
A.b4_.prototype={
$0(){return A.avl(this.a,this.b,null)},
$S:0}
A.b40.prototype={
$0(){return A.avi(this.a,this.b)},
$S:0}
A.b48.prototype={
$1(d){var w=B.bh(J.a3(this.a,d))
return w==null?null:w},
$S:1021}
A.b49.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b0(w,".",",")+" %"}return w},
$S:34}
A.b41.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b42.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jI(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i_,o.$1("liquidity1_pct")),m=A.jI(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i_,o.$1("liquidity2_pct")),l=A.jI(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i_,o.$1("liquidity3_pct"))
o=A.jI(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i_,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b0(w,".",",")+" %"}w=A.jI(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i_,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.aq(v)
return E.aHL(p,B.b([n,m,l,o,w,A.jI(s,s,!1,"Bilanzsumme",!1,"EK "+u.aq(t.d),s,s,s,C.i_,v)],x.p),q,12,12,C.ie,!0)},
$S:123}
A.b43.prototype={
$0(){return A.avi(this.a,this.b)},
$S:0}
A.b44.prototype={
$0(){return A.avl(this.a,this.b,this.c)},
$S:0}
A.bsD.prototype={
$1(d){return new A.Be(this.a,new A.bsC(this.b),this.c,null)},
$S:z+22}
A.bsC.prototype={
$0(){var w=this.a,v=$.bwe()
if(w.e==null)B.T(B.Z(y.b))
w.gco().ci(v)},
$S:0}
A.b3U.prototype={
$0(){},
$S:0}
A.b3V.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b3W.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b3Y.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.uk(u.b,B.bN(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3X(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3X.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b3Z.prototype={
$0(){return B.bc(this.a,!1).f2()},
$S:0}
A.b4a.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4b.prototype={
$1(d){return new A.xF(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ay3.prototype={
$1(d){return d.e},
$S:z+27}
A.ay4.prototype={
$2(d,e){return d+e},
$S:44}
A.ay6.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ay8.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ay9.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adG(v.d,v.e)},
$S:0}
A.axN.prototype={
$1(d){return 0},
$S:1022}
A.axM.prototype={
$2(d,e){return B.f2(C.bR,this.a.alj(e),C.t,C.bm,null)},
$S:1023}
A.aZp.prototype={
$1(d){return d.a},
$S:z+31}
A.aZq.prototype={
$1(d){return d.b},
$S:z+32}
A.aZr.prototype={
$1(d){return new A.jS(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aZs.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mE||v===D.dN))t=1-t
return new A.jS(d,t*w.d)},
$S:z+34}
A.aZt.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goA(),p=d.a
r.goA()
r=$.lB()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajl(Math.abs(s.b-s.c)))
t=""}if(C.c.hL(u,".0"))u=C.c.a0(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nP(d,q.c.b.$2(p,new A.ty(u+t,s.e)))},
$S:z+35}
A.aUJ.prototype={
$1(d){this.a.l8(new A.a5B(d))},
$S:172}
A.aUK.prototype={
$1(d){this.a.l8(new A.a5C(d))},
$S:40}
A.aUL.prototype={
$1(d){this.a.l8(new A.a5D(d))},
$S:27}
A.aUM.prototype={
$0(){this.a.l8(D.a2e)},
$S:0}
A.aUN.prototype={
$1(d){this.a.l8(new A.N5())},
$S:43}
A.aUO.prototype={
$1(d){this.a.l8(new A.a5G(d))},
$S:42}
A.aUP.prototype={
$0(){this.a.l8(D.a2f)},
$S:0}
A.aUQ.prototype={
$1(d){this.a.l8(new A.N8(d))},
$S:79}
A.aUR.prototype={
$1(d){this.a.l8(new A.a5A(d))},
$S:176}
A.aUS.prototype={
$1(d){this.a.l8(new A.a5z(d))},
$S:177}
A.aUT.prototype={
$1(d){return this.a.l8(new A.N3(d))},
$S:195}
A.aUU.prototype={
$1(d){return this.a.l8(new A.a5E(d))},
$S:65}
A.aUV.prototype={
$1(d){return this.a.l8(new A.N6(d))},
$S:56}
A.bfc.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aQj(w==null?B.b([],x.t):w)},
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
q.push(new A.GD(w))},
$S:0}
A.bf9.prototype={
$2(d,e){return C.d.cB(e.b,d.b)},
$S:z+8}
A.bfd.prototype={
$1(d){return new A.zh(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aKF.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.btm.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bES(t?A.bzZ(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tz(w,new A.yx(!0,A.bAL(),new A.btl(v)))},
$S:z+41}
A.btl.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bTw(A.bzZ(d,e,f),w,A.c1j(d,e,f))},
$S:z+42}
A.btj.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.j0(v,v,u==null?D.dr:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rz(C.d.j(d.b),w)},
$S:z+43}
A.aKH.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aKI.prototype={
$1(d){return!d.k(0,D.fK)},
$S:z+1}
A.aKM.prototype={
$2(d,e){return C.d.cB(e.c.b,d.c.b)},
$S:z+45}
A.aKK.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aKL.prototype={
$0(){this.a.adG(this.b,this.c)},
$S:0}
A.aKN.prototype={
$2(d,e){return C.d.cB(d.w,e.w)},
$S:z+8}
A.axX.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axY.prototype={
$2(d,e){return d+e},
$S:44}
A.ay0.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iR(v,B.ae(v).i("iR<1>")).aw(0,new A.ay1(w,this.a/(u+1),this.c))},
$S:0}
A.ay1.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axZ.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.ay_.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aHK.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1024}
A.aBf.prototype={
$1(d){return d},
$S:1025};(function aliases(){var w=A.KS.prototype
w.a_W=w.ib
w.alF=w.aS0
w.alG=w.adz
w=A.TI.prototype
w.aog=w.l
w=A.L1.prototype
w.a_X=w.ib
w=A.Gb.prototype
w.a0G=w.YS})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c4W","bTt",72)
var q
v(q=A.TK.prototype,"gaEj","aEk",23)
v(q,"gaDm","HX",4)
v(q,"gaE3","I7",4)
u(A.TL.prototype,"gas8","as9",25)
t(A,"c3K",3,null,["$3"],["bQN"],49,0)
t(A,"c3L",3,null,["$3"],["bQO"],50,0)
t(A,"c3M",3,null,["$3"],["bQP"],51,0)
t(A,"c3O",4,null,["$4"],["c4z"],52,0)
w(A,"c3N","c4y",53)
s(A,"bAe","c4A",54)
t(A,"c3F",3,null,["$3"],["bTx"],55,0)
w(A,"a_K","c6Z",56)
w(A,"avo","c4D",7)
t(A,"c3H",3,null,["$3"],["bUj"],57,0)
t(A,"c3J",3,null,["$3"],["bZw"],58,0)
t(A,"c3G",3,null,["$3"],["bUi"],59,0)
t(A,"c3I",3,null,["$3"],["bZv"],60,0)
w(A,"ce8","bUh",61)
w(A,"ce9","bZu",62)
r(A.Ym.prototype,"ga4m","axD",30)
u(A.W7.prototype,"gayV","ayW",36)
t(A,"c5P",3,null,["$3"],["bUL"],63,0)
t(A,"c5O",3,null,["$3"],["bQR"],64,0)
w(A,"c5S","c7_",1)
t(A,"bLk",4,null,["$5$size","$4"],["bJN",function(d,e,f,g){return A.bJN(d,e,f,g,null)}],65,0)
s(A,"bAL","c6Y",66)
s(A,"bLl","c3s",67)
s(A,"bLo","c4G",68)
s(A,"bLn","c4C",3)
s(A,"bLm","c4B",3)
w(A,"c5R","bKY",70)
w(A,"c5Q","bKX",71)
t(A,"a_P",3,null,["$3"],["c5N"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.N,[A.a7a,A.agF,A.am_,A.IZ,A.Jq,A.agD,A.I5,A.Ip,A.alk,A.amx,A.UV,A.Yx,A.U7,A.Ul,A.an0,A.ajl,A.Ce,A.asN,A.wO,A.KT,A.AF])
u(B.B,[A.uV,A.Ed,A.bf,A.ahM,A.ahC,A.ahE,A.ahF,A.ahu,A.al4,A.ahI,A.ahG,A.ayi,A.asR,A.ay5,A.ahD,A.L1,A.a6c,A.ty,A.arc,A.arb,A.aht,A.al3,A.ey,A.al0,A.al2,A.apo,A.alR,A.atv,A.al1,A.akH,A.al_,A.axL,A.bf7,A.axO,A.ahq,A.nP,A.akX,A.akY,A.vM,A.hp,A.amF,A.amI,A.ahz,A.ahN,A.ahA,A.akZ,A.amL,A.amJ,A.asQ,A.ara,A.aKG,A.amH,A.vv,A.a1H,A.amS,A.a1R,A.b1X])
u(B.uT,[A.qj,A.vA,A.wv,A.aAD,A.aBL,A.o7,A.CM,A.o8])
u(B.nV,[A.aFe,A.aFf,A.aFg,A.aFx,A.bty,A.btz,A.bvq,A.btA,A.btx,A.btw,A.aFm,A.aFs,A.aFl,A.aKn,A.beO,A.beP,A.beQ,A.beR,A.beS,A.beT,A.beU,A.beV,A.beW,A.beX,A.beY,A.bsF,A.bnC,A.b5I,A.b6B,A.b6C,A.bfy,A.bpR,A.b45,A.b48,A.b49,A.bsD,A.b4b,A.ay3,A.ay6,A.axN,A.aZp,A.aZq,A.aZr,A.aZs,A.aZt,A.aUJ,A.aUK,A.aUL,A.aUN,A.aUO,A.aUQ,A.aUR,A.aUS,A.aUT,A.aUU,A.aUV,A.bfc,A.bfd,A.aKF,A.btm,A.btl,A.btj,A.aKH,A.aKI,A.axX,A.aBf])
t(A.yv,B.fA)
u(B.xV,[A.aFd,A.aFc,A.aFv,A.aFn,A.aFo,A.aFp,A.aFq,A.aFr,A.aFu,A.aFj,A.aFk,A.bhR,A.bhS,A.bhT,A.aKp,A.bf_,A.bf0,A.bsE,A.bf1,A.b47,A.b4_,A.b40,A.b43,A.b44,A.bsC,A.b3U,A.b3V,A.b3W,A.b3Y,A.b3X,A.b3Z,A.b4a,A.ay9,A.aUM,A.aUP,A.bfa,A.bfb,A.aKK,A.aKL,A.ay0])
u(B.y2,[A.yw,A.aof,A.a7b,A.ahy])
u(B.xW,[A.aFt,A.bhQ,A.boz,A.aKo,A.beZ,A.bnA,A.bnB,A.b5H,A.b5J,A.b5K,A.b6D,A.b6E,A.bfz,A.bpS,A.b46,A.b41,A.b42,A.ay4,A.ay8,A.axM,A.bf9,A.aKM,A.aKN,A.axY,A.ay1,A.axZ,A.ay_,A.aHK])
u(B.M,[A.Be,A.RG])
u(B.a0,[A.TK,A.Ym])
u(B.NM,[A.KY,A.Ot])
u(B.ut,[A.TL,A.W7])
t(A.a1i,A.ahM)
t(A.ahp,A.a1i)
t(A.a12,A.ahp)
u(A.a12,[A.ahB,A.amG])
t(A.nQ,A.ahB)
u(B.I4,[A.axV,A.ae7,A.D2,A.aED,A.aKq,A.Nz])
t(A.fE,A.ahC)
t(A.ik,A.ahE)
t(A.mG,A.ahF)
t(A.a19,A.ahu)
t(A.N9,A.al4)
u(A.N9,[A.ahH,A.amK])
t(A.a1e,A.ahH)
t(A.a1f,A.ahI)
t(A.D3,A.ahG)
u(A.ayi,[A.KZ,A.Ov])
t(A.ae9,A.asR)
t(A.ahJ,A.ae9)
t(A.a1g,A.ahJ)
u(B.b2,[A.xF,A.zh])
t(A.uz,A.ahD)
t(A.KS,A.L1)
u(A.KS,[A.ay7,A.aKJ])
u(B.Oo,[A.a1c,A.a7n])
u(B.J,[A.Gb,A.ahr])
u(A.Gb,[A.abh,A.abu])
t(A.q9,A.arc)
t(A.acG,A.arb)
t(A.ph,A.aht)
t(A.uX,A.al3)
t(A.yy,A.al0)
t(A.pD,A.al2)
t(A.Qf,A.apo)
t(A.n_,A.alR)
t(A.no,A.atv)
u(A.pD,[A.alQ,A.atu])
t(A.kQ,A.alQ)
t(A.li,A.atu)
t(A.a5y,A.al1)
u(A.a5y,[A.alP,A.att])
t(A.a6n,A.alP)
t(A.aew,A.att)
t(A.MS,A.akH)
t(A.uW,A.al_)
t(A.N2,A.uW)
t(A.acH,B.h3)
t(A.ahs,A.ahr)
t(A.TI,A.ahs)
t(A.a13,A.TI)
t(A.jS,A.ahq)
t(A.a5v,A.akX)
t(A.a5x,A.akY)
u(A.hp,[A.a5B,A.a5C,A.a5D,A.N4,A.N5,A.a5G,A.N7,A.N8,A.a5A,A.a5z,A.N3,A.a5E,A.a5F,A.N6])
t(A.pQ,A.amG)
t(A.ed,A.amF)
t(A.Ou,A.amI)
t(A.a1b,A.ahz)
t(A.mH,A.ahN)
t(A.KX,A.ahA)
t(A.yx,A.akZ)
t(A.EP,A.amK)
t(A.a7o,A.amL)
t(A.amE,A.ey)
t(A.n2,A.amE)
t(A.qh,A.n2)
t(A.rz,A.amJ)
t(A.tz,A.asQ)
t(A.GD,A.ara)
t(A.zi,A.amH)
t(A.zl,A.amS)
w(A.ahu,A.bf)
w(A.ahB,A.bf)
w(A.ahC,A.bf)
w(A.ahE,A.bf)
w(A.ahF,A.bf)
w(A.ahG,A.bf)
w(A.ahH,A.bf)
w(A.ahI,A.bf)
w(A.ahJ,A.bf)
w(A.ahD,A.bf)
w(A.ahp,A.bf)
w(A.aht,A.bf)
w(A.akH,A.bf)
w(A.al_,A.bf)
w(A.al0,A.bf)
w(A.al2,A.bf)
w(A.al3,A.bf)
w(A.alQ,A.bf)
w(A.alP,A.bf)
w(A.alR,A.bf)
w(A.apo,A.bf)
w(A.arb,A.bf)
w(A.arc,A.bf)
w(A.asR,A.bf)
w(A.atu,A.bf)
w(A.att,A.bf)
w(A.atv,A.bf)
w(A.ahq,A.bf)
v(A.ahr,B.aD)
w(A.ahs,B.e9)
v(A.TI,B.a4u)
w(A.ahM,A.bf)
w(A.akX,A.bf)
w(A.akY,A.bf)
w(A.al4,A.bf)
w(A.ahz,A.bf)
w(A.ahA,A.bf)
w(A.ahN,A.bf)
w(A.akZ,A.bf)
w(A.al1,A.bf)
w(A.amE,A.bf)
w(A.amF,A.bf)
w(A.amG,A.bf)
w(A.amI,A.bf)
w(A.amJ,A.bf)
w(A.amK,A.bf)
w(A.amL,A.bf)
w(A.ara,A.bf)
w(A.asQ,A.bf)
w(A.amH,A.bf)
w(A.amS,A.bf)})()
B.bq5(b.typeUniverse,JSON.parse('{"a7a":{"N":[],"c":[]},"Ed":{"aFi":[]},"yv":{"fA":["be<~>"],"fA.T":"be<~>"},"Jq":{"N":[],"c":[]},"I5":{"N":[],"c":[]},"yw":{"bj":[],"M":[],"c":[]},"agF":{"N":[],"c":[]},"am_":{"N":[],"c":[]},"aof":{"bj":[],"M":[],"c":[]},"IZ":{"N":[],"c":[]},"agD":{"N":[],"c":[]},"Ip":{"N":[],"c":[]},"wO":{"N":[],"c":[]},"Be":{"M":[],"c":[]},"a7b":{"bj":[],"M":[],"c":[]},"alk":{"N":[],"c":[]},"amx":{"N":[],"c":[]},"UV":{"N":[],"c":[]},"Yx":{"N":[],"c":[]},"U7":{"N":[],"c":[]},"Ul":{"N":[],"c":[]},"an0":{"N":[],"c":[]},"ajl":{"N":[],"c":[]},"Ce":{"N":[],"c":[]},"asN":{"N":[],"c":[]},"ahy":{"bj":[],"M":[],"c":[]},"TK":{"a0":["Be"]},"KY":{"M":[],"c":[]},"TL":{"a0":["KY"]},"nQ":{"bf":[]},"fE":{"bf":[]},"ik":{"bf":[]},"mG":{"bf":[]},"D3":{"bf":[]},"xF":{"b2":["nQ"],"b4":["nQ"],"b4.T":"nQ","b2.T":"nQ"},"a19":{"bf":[]},"a1e":{"bf":[]},"a1f":{"bf":[]},"a1g":{"bf":[]},"uz":{"bf":[]},"a1c":{"aW":[],"c":[]},"abh":{"J":[],"L":[],"jq":[],"aU":[]},"pD":{"bf":[]},"n_":{"bf":[]},"no":{"bf":[]},"kQ":{"bf":[]},"li":{"bf":[]},"uW":{"bf":[]},"a12":{"bf":[]},"q9":{"bf":[]},"acG":{"bf":[]},"ph":{"bf":[]},"uX":{"bf":[]},"yy":{"bf":[]},"ae9":{"bf":[]},"Qf":{"bf":[]},"a6n":{"bf":[]},"aew":{"bf":[]},"MS":{"bf":[]},"N2":{"bf":[]},"KT":{"N":[],"c":[]},"RG":{"M":[],"c":[]},"Ym":{"a0":["RG"]},"jS":{"bf":[]},"acH":{"h3":[],"aW":[],"c":[]},"a13":{"e9":["J","hq"],"J":[],"aD":["J","hq"],"L":[],"aU":[],"aD.1":"hq","e9.1":"hq","aD.0":"J"},"AF":{"N":[],"c":[]},"a1i":{"bf":[]},"a5v":{"bf":[]},"N9":{"bf":[]},"a5x":{"bf":[]},"a5B":{"hp":[]},"a5C":{"hp":[]},"a5D":{"hp":[]},"N4":{"hp":[]},"N5":{"hp":[]},"a5G":{"hp":[]},"N7":{"hp":[]},"N8":{"hp":[]},"a5A":{"hp":[]},"a5z":{"hp":[]},"N3":{"hp":[]},"a5E":{"hp":[]},"a5F":{"hp":[]},"N6":{"hp":[]},"Gb":{"J":[],"L":[],"jq":[],"aU":[]},"Ot":{"M":[],"c":[]},"W7":{"a0":["Ot"]},"pQ":{"bf":[]},"ed":{"bf":[]},"mH":{"bf":[]},"n2":{"ey":[],"bf":[]},"qh":{"n2":[],"ey":[],"bf":[]},"rz":{"bf":[]},"tz":{"bf":[]},"GD":{"bf":[]},"zh":{"b2":["pQ"],"b4":["pQ"],"b4.T":"pQ","b2.T":"pQ"},"Ou":{"bf":[]},"a1b":{"bf":[]},"KX":{"bf":[]},"yx":{"bf":[]},"a5y":{"bf":[]},"EP":{"bf":[]},"a7o":{"bf":[]},"zi":{"bf":[]},"a7n":{"aW":[],"c":[]},"abu":{"J":[],"L":[],"jq":[],"aU":[]},"zl":{"bf":[]}}'))
B.bJh(b.typeUniverse,JSON.parse('{"KS":1,"N9":1,"L1":1,"Gb":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.av
return{_:w("CM"),e:w("be<o7>"),aN:w("be<o8>"),fM:w("be<a1<f,@>?>"),b:w("be<~>"),W:w("jS"),B:w("nQ"),dB:w("fE"),T:w("uz"),fj:w("ik"),G:w("mG"),J:w("mH"),k:w("ar"),cX:w("a1R<F>"),dO:w("uH"),R:w("al<f,@>"),v:w("hK"),bz:w("lK<b9>"),f0:w("o0"),E:w("bf"),F:w("yv"),X:w("o7"),P:w("lQ"),D:w("uV"),a:w("aFi"),d:w("o8"),cw:w("ey"),L:w("hq"),m:w("dr<v,E>"),cm:w("kQ"),dv:w("n_"),g:w("C<nP>"),O:w("C<fE>"),Y:w("C<ik>"),C:w("C<bx8>"),U:w("C<ey>"),K:w("C<a6c>"),u:w("C<ed>"),bC:w("C<vv>"),aA:w("C<u<ey>>"),r:w("C<GD>"),s:w("C<f>"),eg:w("C<tw>"),df:w("C<qh>"),p:w("C<c>"),n:w("C<F>"),t:w("C<v>"),eF:w("bk<a0<M>>"),Z:w("n2"),cz:w("ed"),hf:w("pQ"),dj:w("zi"),fT:w("rz"),c_:w("io<oX<be<~>>>"),x:w("zl<fE>"),y:w("zl<ed>"),I:w("u<v>"),ef:w("vA"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("ab<F,F>"),w:w("k8"),aU:w("B"),Q:w("vM<nQ>"),o:w("vM<pQ>"),eo:w("q_"),gJ:w("q0"),V:w("kj<lQ>"),N:w("f"),A:w("nj"),bO:w("bL"),er:w("tw"),j:w("wv"),dw:w("qh"),bY:w("tz"),cZ:w("qj"),gc:w("kq"),es:w("li"),bN:w("no"),l:w("c"),q:w("x6"),g4:w("ie<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xF?"),f3:w("zh?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("B?"),aD:w("kq?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Ba=new B.lF(C.n,B.av("lF<E>"))
D.Bh=new A.D2(0,"left")
D.mE=new A.D2(1,"top")
D.Bi=new A.D2(2,"right")
D.dN=new A.D2(3,"bottom")
D.awv=new A.q9(!1,A.bAe(),22,null)
D.ks=new A.ph(16,null,D.awv,!0)
D.a9M=new A.pD(C.C,null,2,null)
D.wa=new A.KX(!1,D.a9M,A.c5S(),!0)
D.a0b=new A.axV(3,"spaceEvenly")
D.a0k=new B.xJ(6,"dstIn")
D.Yc=new B.aV(3,3)
D.Bm=new B.d1(D.Yc,D.Yc,C.a1,C.a1)
D.a0v=new B.bm(C.C,0,C.T,-1)
D.BV=new A.a5x()
D.a2e=new A.N4()
D.a2f=new A.N7()
D.aOc=new A.acG()
D.amu=w([],B.av("C<kQ>"))
D.amw=w([],B.av("C<li>"))
D.E0=new A.MS(D.amu,D.amw,!0)
D.a9t=new B.dL("Zeitraum",!1,null)
D.a9x=new B.dL("Konten (SKR 03)",!1,null)
D.xL=new A.aED(0,"center")
D.aOo=new A.yx(!0,A.bAL(),A.bLk())
D.E4=new A.yx(!1,A.bAL(),A.bLk())
D.E5=new A.yy(!1,!0,null,A.avo(),A.a_K(),!0,null,A.avo(),A.a_K())
D.aOp=new A.yy(!0,!0,null,A.avo(),A.a_K(),!0,null,A.avo(),A.a_K())
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
D.aqG=new B.dr([50,D.a4C,100,D.a4m,200,D.a4M,300,D.a4G,400,D.a44,500,D.a43,600,D.a58,700,D.a4v,800,D.a5b,900,D.a55],x.m)
D.dr=new B.rF(D.aqG,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.aiI=w([8,4],x.t)
D.a9K=new A.pD(D.dr,null,0.4,D.aiI)
D.a9L=new A.pD(C.a5,null,0.5,null)
D.fK=new A.ey(0/0,0/0)
D.awx=new A.q9(!0,A.bAe(),44,null)
D.mF=new A.ph(16,null,D.awx,!0)
D.aww=new A.q9(!0,A.bAe(),30,null)
D.mG=new A.ph(16,null,D.aww,!0)
D.a9N=new A.uX(!1,D.mF,D.mG,D.mF,D.mG)
D.aOq=new A.uX(!0,D.mF,D.mG,D.mF,D.mG)
D.Ed=new A.Nz(0,"left")
D.aap=new A.Nz(1,"center")
D.Ee=new A.Nz(2,"right")
D.aau=new B.a4(57495,"MaterialIcons",null,!1)
D.y1=new B.a4(58927,"MaterialIcons",null,!1)
D.abi=new B.a4(59005,"MaterialIcons",null,!0)
D.abj=new B.a4(59007,"MaterialIcons",null,!0)
D.abk=new B.a4(59011,"MaterialIcons",null,!1)
D.ace=new B.a4(62589,"MaterialIcons",null,!1)
D.abx=new B.a4(61349,"MaterialIcons",null,!1)
D.ad5=new B.aC(D.abx,20,C.h,null,null)
D.abE=new B.a4(61487,"MaterialIcons",null,!1)
D.ad7=new B.aC(D.abE,18,null,null,null)
D.ad8=new B.aC(D.y1,18,null,null,null)
D.adv=new B.aC(C.hT,null,C.h,null,null)
D.adw=new B.aC(C.la,null,C.q,null,null)
D.adX=new B.aC(C.nX,16,null,null,null)
D.ae2=new B.aC(C.y7,16,null,null,null)
D.aaF=new B.a4(57912,"MaterialIcons",null,!1)
D.ae4=new B.aC(D.aaF,null,C.a8,null,null)
D.acc=new B.a4(62584,"MaterialIcons",null,!1)
D.aed=new B.aC(D.acc,16,null,null,null)
D.aei=new B.aC(D.y1,16,null,null,null)
D.agk=new A.a7b(null)
D.aOv=new A.aKq(0,"horizontal")
D.yl=new A.zi(0,0,0,0,!1)
D.Fs=new A.Ou(0.5)
D.C0=new A.a7o()
D.ago=new A.EP(D.C0,A.bLo(),10,A.bLl(),!0,A.bLn(),A.bLm(),!1,null,null,null)
D.aOx=new A.EP(D.C0,A.bLo(),10,A.bLl(),!0,A.bLn(),A.bLm(),!0,null,null,null)
D.ahM=w([4,3],x.t)
D.auJ=new B.aG("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.auz=new B.aG("receivables","Forderungen (kurzfristig)")
D.auo=new B.aG("inventory_value","Vorr\xe4te (Warenbestand)")
D.aum=new B.aG("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aua=new B.aG("fixed_assets","Anlageverm\xf6gen")
D.aug=new B.aG("current_liabilities","Kurzfristige Verbindlichkeiten")
D.auG=new B.aG("long_term_liabilities","Langfristige Verbindlichkeiten")
D.auy=new B.aG("equity","Eigenkapital")
D.pE=w([D.auJ,D.auz,D.auo,D.aum,D.aua,D.aug,D.auG,D.auy],B.av("C<+(f,f)>"))
D.aOA=w([],x.g)
D.amh=w([],x.O)
D.ami=w([],x.Y)
D.amj=w([],B.av("C<mG>"))
D.amk=w([],B.av("C<mH>"))
D.aOB=w([],x.U)
D.aOC=w([],x.u)
D.aml=w([],x.r)
D.arh={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TR={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z_=new B.al(D.TR,[0,0,0,0,0,0,0,C.ce],B.av("al<f,B>"))
D.are={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqA=new B.al(D.are,[0,0,0,0],B.av("al<f,v>"))
D.arw={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apX=new B.al(D.arw,[0,0,0,0,null,null,null,null],B.av("al<f,v?>"))
D.apQ=new B.al(D.arh,[D.z_,D.z_,D.z_,C.ce,C.ce,C.ce,D.aqA,D.apX],x.R)
D.aq9=new B.al(D.TR,[0,0,0,0,0,0,0,C.cv],x.R)
D.ari={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqb=new B.al(D.ari,[8500,1200,3400,300,22e3,4200,9000,22200],B.av("al<f,F>"))
D.ard={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqB=new B.al(D.ard,[0,0,0,0,0,0,0,C.cv],x.R)
D.arH={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aqC=new B.al(D.arH,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.av("al<f,f>"))
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
D.aqH=new B.dr([50,D.a5h,100,D.a5p,200,D.a47,300,D.a4y,400,D.a4I,500,D.a5E,600,D.a3T,700,D.a4A,800,D.a4L,900,D.a56],x.m)
D.TD=new B.rF(D.aqH,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a8L=new B.ag(32,32,32,32)
D.asB=new B.ad(D.a8L,C.bH,null)
D.a8N=new B.ag(48,48,48,48)
D.asE=new B.ad(D.a8N,C.bH,null)
D.asK=new B.ad(C.ai,C.bH,null)
D.amx=w([],B.av("C<n_>"))
D.amy=w([],B.av("C<no>"))
D.Ye=new A.Qf(D.amx,D.amy)
D.avq=new B.fx("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.avr=new B.fx("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.avu=new B.fx("Automaten-Business","Umsatz je Automat",null,null)
D.avw=new B.fx("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.avy=new B.fx("Top","Meistverkaufte Produkte",null,null)
D.avB=new B.fx("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.avC=new B.fx("Kennzahlen","Rentabilit\xe4t",null,null)
D.YU=new B.tg(C.I,C.u,0)
D.aE2=new B.ai("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayf=new B.e2(D.aE2,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFY=new B.ai('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.ayi=new B.e2(D.aFY,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aEf=new B.ai("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.ayj=new B.e2(D.aEf,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFS=new B.ai("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.ayl=new B.e2(D.aFS,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFl=new B.ai("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aym=new B.e2(D.aFl,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aFi=new B.ai("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.ayF=new B.e2(D.aFi,null,null,null,null,null,null,null,null,null,null,null,null,C.N,!1,null,null,null,C.t,null)
D.aOM=new B.S(!0,C.C,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEc=new B.ai("Demo",null,null,null,null,null,null,null,null,null)
D.aEn=new B.ai("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aF4=new B.ai("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFa=new B.ai("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aFp=new B.ai("sevDesk",null,null,null,null,null,null,null,null,null)
D.aG9=new B.ai("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_9=new A.ae7(0,"auto")
D.aGL=new A.ae7(1,"top")
D.aL9=new A.wO("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLa=new A.wO("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cey","bPy",()=>B.iT(new A.bty(),x.D))
w($,"cez","aw2",()=>B.iT(new A.btz(),x.a))
w($,"cfz","xr",()=>B.byY(new A.bvq(),x.P))
w($,"ceA","bwf",()=>C.aI.$1$1(new A.btA(),x.d))
w($,"cex","bPx",()=>C.aI.$1$1(new A.btx(),x.X))
w($,"cew","bwe",()=>C.aI.$1$1(new A.btw(),x.h))
w($,"cev","bwd",()=>B.b_h(A.c4W(),x.F,x.b))
w($,"c7M","bvR",()=>new A.axL())
v($,"cb2","lB",()=>new A.b1X())})()};
(a=>{a["X/yjBf0rAvnyv0P7sGorFGO0XB4="]=a.current})($__dart_deferred_initializers__);