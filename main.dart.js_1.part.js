((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NX(d,e,f,g,h){return new A.a6A(f,g,d,h,e,null)},
a6A:function a6A(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uK:function uK(d){this.a=d},
DW:function DW(d){this.a=d},
bRC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Z(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.yR
w=x.f
v=x.N
u=x.z
t=A.aEG(B.db(w.a(e.h(a0,"current")),v,u))
s=A.aEG(B.db(w.a(e.h(a0,"prior_year")),v,u))
r=A.aEG(B.db(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c6
p=J.cZ(p,new A.aEo(),x.cZ)
p=B.Q(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c6
o=J.cZ(o,new A.aEp(),x.ef)
o=B.Q(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c6
q=J.cZ(q,new A.aEq(),x.j)
q=B.Q(q,q.$ti.i("aw.E"))
n=B.db(w.a(e.h(a0,"customer")),v,u)
m=B.bo(n.h(0,"purchases_count"))
m=m==null?null:C.d.a2(m)
if(m==null)m=0
l=A.oV(n.h(0,"app_gross"))
k=B.bo(n.h(0,"active_customers"))
k=k==null?null:C.d.a2(k)
if(k==null)k=0
n=A.oV(n.h(0,"avg_basket"))
u=B.db(w.a(e.h(a0,"derived")),v,u)
v=A.oV(u.h(0,"gross_margin_pct"))
e=A.oV(u.h(0,"net_margin_pct"))
w=A.oV(u.h(0,"ebitda_margin_pct"))
j=A.oV(u.h(0,"cashflow_operating"))
i=A.br3(u.h(0,"revenue_growth_yoy_pct"))
h=A.br3(u.h(0,"revenue_growth_mom_pct"))
g=A.br3(u.h(0,"result_growth_yoy_pct"))
u=A.br3(u.h(0,"result_growth_mom_pct"))
f=B.bo(J.a3(d,"days"))
f=f==null?null:C.d.a2(f)
if(f==null)f=1
return new A.o0(t,s,r,p,o,q,new A.azQ(m,l,k,n),new A.aAW(v,e,w,j,i,h,g,u),f)},
oV(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jr(J.al(d))
return w==null?0:w},
br3(d){if(d==null)return null
if(typeof d=="number")return d
return B.jr(J.al(d))},
qb:function qb(d,e,f,g){var _=this
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
wi:function wi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azQ:function azQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAW:function aAW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
o0:function o0(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aEo:function aEo(){},
aEp:function aEp(){},
aEq:function aEq(){},
aEG(d){var w=J.Z(d),v=A.u2(w.h(d,"revenue_net_7")),u=A.u2(w.h(d,"revenue_net_19")),t=A.u2(w.h(d,"revenue_net")),s=A.u2(w.h(d,"expense_net")),r=A.u2(w.h(d,"result_net")),q=A.u2(w.h(d,"vat_collected")),p=A.u2(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.c6
w=J.cZ(w,new A.aEH(),x._)
w=B.Q(w,w.$ti.i("aw.E"))
return new A.o1(v,u,t,s,r,q,p,w)},
u2(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jr(J.al(d))
return w==null?0:w},
Cv:function Cv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
o1:function o1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aEH:function aEH(){},
bRB(d){return new A.yj(d,new B.il(x.c_),C.dI)},
brR:function brR(){},
brS:function brS(){},
btG:function btG(){},
brT:function brT(){},
brQ:function brQ(){},
brP:function brP(){},
yj:function yj(d,e,f){this.r=d
this.a=e
this.f=f},
aEn:function aEn(d,e,f){this.a=d
this.b=e
this.c=f},
aEm:function aEm(d,e,f){this.a=d
this.b=e
this.c=f},
bRD(){return new A.yk(null)},
all(d,e,f,g,h){return new A.alk(e,h,g,f,d,null)},
yk:function yk(d){this.a=d},
aEF:function aEF(d){this.a=d},
aEx:function aEx(d,e,f){this.a=d
this.b=e
this.c=f},
aEy:function aEy(d,e,f){this.a=d
this.b=e
this.c=f},
aEz:function aEz(d){this.a=d},
aEw:function aEw(){},
aEA:function aEA(d){this.a=d},
aEB:function aEB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aEE:function aEE(){},
aED:function aED(){},
aEC:function aEC(){},
aEv:function aEv(d,e){this.a=d
this.b=e},
aEt:function aEt(d){this.a=d},
aEu:function aEu(d){this.a=d},
ag2:function ag2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
alk:function alk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
anz:function anz(d,e){this.e=d
this.a=e},
bgA:function bgA(d){this.a=d},
bgB:function bgB(d){this.a=d},
bgC:function bgC(d,e,f){this.a=d
this.b=e
this.c=f},
bgz:function bgz(){},
II:function II(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jb:function Jb(d,e){this.c=d
this.a=e},
bmU:function bmU(d){this.a=d},
ag0:function ag0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HO:function HO(d,e){this.c=d
this.a=e},
byo(d,e,f,g,h){var w=null
return B.j5(w,w,!0,w,new A.bqZ(h,g,e,f),d,w,!0,!0,x.H)},
jD(d,e,f,g,h,i,j,k,l,m,n){return new A.alS(g,n,i,e,d,m,f,k,l,j,null)},
aux(d,e){return A.c15(d,e)},
c15(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aux=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bc(D.ax8)
t=4
o=e.aJ(0,$.c0(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.k(o.hg("finance-balance-sync",B.A(n,n)),$async$aux)
case 7:r=g
q=B.db(x.f.a(r.a),x.N,n)
l.Md()
if(J.d(J.a3(q,"configured"),!1)){l.bc(D.axc)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bus()
if(e.e==null)B.U(B.Y(y.b))
e.gcq().ck(o)
l.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Md()
l.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$aux,v)},
auA(d,e,f){var w=0,v=B.q(x.H)
var $async$auA=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.j5(null,null,!0,null,new A.bqX(f,e,e.aJ(0,$.c0(),x.A)),d,null,!0,!0,x.H),$async$auA)
case 2:return B.o(null,v)}})
return B.p($async$auA,v)},
a6B:function a6B(d){this.a=d},
aJx:function aJx(){},
aJw:function aJw(){},
aJv:function aJv(){},
I9:function I9(d,e){this.c=d
this.a=e},
bdR:function bdR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdG:function bdG(){},
bdH:function bdH(){},
bdI:function bdI(){},
bdJ:function bdJ(){},
bdK:function bdK(){},
bdL:function bdL(){},
bdM:function bdM(){},
bdN:function bdN(){},
bdO:function bdO(d){this.a=d},
bdP:function bdP(d){this.a=d},
bdQ:function bdQ(d){this.a=d},
bdS:function bdS(d,e){this.a=d
this.b=e},
bdT:function bdT(d,e){this.a=d
this.b=e},
bqZ:function bqZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqY:function bqY(d){this.a=d},
akE:function akE(d){this.a=d},
alS:function alS(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bdU:function bdU(d,e){this.a=d
this.b=e},
Uu:function Uu(d,e,f){this.c=d
this.d=e
this.a=f},
Y0:function Y0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm3:function bm3(){},
bm4:function bm4(){},
bm5:function bm5(d){this.a=d},
TI:function TI(d,e,f){this.c=d
this.d=e
this.a=f},
b4K:function b4K(){},
b4M:function b4M(d){this.a=d},
b4N:function b4N(d){this.a=d},
b4L:function b4L(){},
TU:function TU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b5x:function b5x(){},
b5y:function b5y(){},
b5z:function b5z(){},
b5A:function b5A(d){this.a=d},
aml:function aml(d,e){this.c=d
this.a=e},
ben:function ben(){},
beo:function beo(){},
aiG:function aiG(d,e){this.c=d
this.a=e},
C_:function C_(d,e,f){this.c=d
this.d=e
this.a=f},
as1:function as1(d,e){this.c=d
this.a=e},
bob:function bob(){},
boc:function boc(){},
wB:function wB(d,e){this.c=d
this.a=e},
agV:function agV(d,e){this.e=d
this.a=e},
b3a:function b3a(){},
b39:function b39(){},
b38:function b38(d,e,f){this.a=d
this.b=e
this.c=f},
b32:function b32(d,e){this.a=d
this.b=e},
b33:function b33(d,e){this.a=d
this.b=e},
b3b:function b3b(d){this.a=d},
b3c:function b3c(d){this.a=d},
b34:function b34(){},
b35:function b35(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b36:function b36(d,e){this.a=d
this.b=e},
b37:function b37(d,e,f){this.a=d
this.b=e
this.c=f},
bqX:function bqX(d,e,f){this.a=d
this.b=e
this.c=f},
bqW:function bqW(d){this.a=d},
B2:function B2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tk:function Tk(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b2X:function b2X(){},
b2Y:function b2Y(d){this.a=d},
b2Z:function b2Z(d){this.a=d},
b30:function b30(d,e){this.a=d
this.b=e},
b3_:function b3_(d,e){this.a=d
this.b=e},
b31:function b31(d){this.a=d},
be:function be(){},
bBH(d){return new A.KH(d,C.as,C.d0,null,null)},
KH:function KH(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Tl:function Tl(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ep$=f
_.cf$=g
_.c=_.a=null},
b3d:function b3d(d,e){this.a=d
this.b=e},
b3e:function b3e(d){this.a=d},
ax8(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alo:f,p=a0==null?16:a0,o=d==null?D.a_R:d,n=g==null,m=n?A.buW(r,r,r,r,r,r,r,r):g,l=a3==null?D.XU:a3
n=n?A.buW(r,r,r,r,r,r,r,r):g
w=j==null?D.DK:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.I:e
return new A.nK(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.BE,s,w,i,n)},
axf(d,e,f,g,h){var w=d==null?D.alp:d,v=e==null?2:e,u=g==null?C.lo:g
return new A.fC(h,f===!0,w,v,u)},
bOW(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.axf(A.kp(d.c,e.c,f,A.c1Q(),x.fj),B.ab(d.d,e.d,f),!1,A.kp(d.e,e.e,f,A.a_f(),x.S),w)},
a0E(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Tk
else w=h
v=m==null
u=v?8:m
t=$.lr()
s=t.aWG(f,v?8:m)
t=t.aWH(g,v?8:m)
v=d==null?A.bBF(r,r,r,r,r):d
return new A.ii(q,l,w,j,u,s,e,t,v,k==null?D.alq:k)},
bOX(d,e,f){var w,v,u,t,s=B.a_(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.my(d.f,e.f,f),p=A.kp(d.r,e.r,f,A.a_f(),x.S),o=B.bX(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.a_(w.d,v.d,f)
return A.a0E(A.bBF(v,u,null,!1,t),p,q,o,s,n,null,A.kp(d.y,e.y,f,A.c1R(),x.G),m,r)},
bOY(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
v.toString
return new A.mw(u,w,v,B.bX(d.d,e.d,f))},
bBF(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dm
else w=d
return new A.a0A(g===!0,v,u,w,f)},
buW(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a0G(4,C.hL,16,D.xs,0,120,A.c1T(),!1,!1,D.ZR,0,C.H,A.c1S())
else w=k
v=j==null?C.kV:j
return new A.a0F(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c2E(d,e,f,g){var w=null,v=B.iX(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.L,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CM(C.d.j(f.b),v)},
c2D(d){return A.azg(D.dm,15)},
nK:function nK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ax7:function ax7(d,e){this.a=d
this.b=e},
fC:function fC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
axg:function axg(){},
axh:function axh(){},
ii:function ii(d,e,f,g,h,i,j,k,l,m){var _=this
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
mw:function mw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0A:function a0A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a0F:function a0F(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
adw:function adw(d,e){this.a=d
this.b=e},
a0G:function a0G(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CM:function CM(d,e){this.a=d
this.b=e},
KI:function KI(d){this.a=d},
a0H:function a0H(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xt:function xt(d,e){this.a=d
this.b=e},
agR:function agR(){},
agY:function agY(){},
agZ:function agZ(){},
ah0:function ah0(){},
ah1:function ah1(){},
ah2:function ah2(){},
ah3:function ah3(){},
ah4:function ah4(){},
ah5:function ah5(){},
axi:function axi(d){this.a=d},
axj:function axj(){},
uo:function uo(d,e,f){this.a=d
this.b=e
this.c=f},
ah_:function ah_(){},
axk:function axk(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
axl:function axl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axm:function axm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a5D:function a5D(d){this.b=d},
a0D:function a0D(d,e,f){this.d=d
this.e=e
this.a=f},
aaF:function aaF(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bB=_.aE=_.ai=_.ao=$
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
c2F(d,e){var w=null
return new A.Rj(e.w,B.i(e.r,w,w,w,w,w,w,w),w)},
ax1(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p8(t,e.b,new A.q1(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bD3(d,e,f){var w=A.ax1(d.b,e.b,f),v=A.ax1(d.d,e.d,f),u=A.ax1(d.e,e.e,f)
return new A.uM(e.a,w,A.ax1(d.c,e.c,f),v,u)},
bRF(d,e,f){var w,v
if(d.k(0,D.fM))return e
if(e.k(0,D.fM))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.eu(w,v)},
bD1(d,e,f){return new A.ym(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c52(d){return!0},
c2I(d){return D.a94},
bD2(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pv(w,f,g,e)},
bF_(d,e,f){var w,v=A.kp(d.a,e.a,f,A.c1M(),x.dv)
v.toString
w=A.kp(d.b,e.b,f,A.c1O(),x.bN)
w.toString
return new A.PU(v,w)},
bSr(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.ra(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.mQ(t,w,v,u)},
bXC(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.a_(d.c,e.c,f)
u=B.ra(d.d,e.d,f)
if(v==null)v=u==null?C.m:null
return new A.nh(t,w,v,u)},
bSq(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pp(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bSo(B.buN(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.ra(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kp(d.d,e.d,f,A.a_f(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kJ(r,e.f,e.r,t,e.x,u,v,w,s)},
bXB(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pp(w.b,v.b,f)
u.toString
t=B.cq(w.c,v.c,f)
t=A.bXz(B.buN(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a_(d.a,e.a,f)
v=B.ra(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.kp(d.d,e.d,f,A.a_f(),x.S)
if(u==null)u=v==null?C.C:null
return new A.l8(r,e.f,e.r,t,e.x,u,v,w,s)},
bSo(d,e,f,g,h,i){return new A.a5O(f,!1,g,i,d,e)},
bSp(d){return C.d.ak(d.e,1)},
bXz(d,e,f,g,h,i){return new A.adU(f,!1,g,i,d,e)},
bXA(d){return C.d.ak(d.e,1)},
bCZ(d,e,f){var w,v=A.kp(d.a,e.a,f,A.c1L(),x.cm)
v.toString
w=A.kp(d.b,e.b,f,A.c1N(),x.es)
w.toString
return new A.MA(v,w,!0)},
bRE(d,e,f){return new A.MK(d,e==null?4:e,f)},
a0t:function a0t(){},
CL:function CL(d,e){this.a=d
this.b=e},
tn:function tn(d,e){this.r=d
this.w=e},
q1:function q1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ac5:function ac5(){},
p8:function p8(d,e,f,g){var _=this
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
eu:function eu(d,e){this.a=d
this.b=e},
ym:function ym(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pv:function pv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ady:function ady(){},
PU:function PU(d,e){this.a=d
this.b=e},
mQ:function mQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nh:function nh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kJ:function kJ(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
l8:function l8(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a5O:function a5O(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
adU:function adU(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
MA:function MA(d,e,f){this.a=d
this.b=e
this.c=f},
uL:function uL(){},
MK:function MK(d,e,f){this.a=d
this.b=e
this.c=f},
agM:function agM(){},
agQ:function agQ(){},
ak2:function ak2(){},
akj:function akj(){},
akk:function akk(){},
akm:function akm(){},
akn:function akn(){},
ala:function ala(){},
al9:function al9(){},
alb:function alb(){},
aoH:function aoH(){},
aqt:function aqt(){},
aqu:function aqu(){},
as5:function as5(){},
asI:function asI(){},
asH:function asH(){},
asJ:function asJ(){},
awY:function awY(){},
KB:function KB(){},
KC:function KC(d,e,f){this.c=d
this.d=e
this.a=f},
ax_:function ax_(d){this.a=d},
awZ:function awZ(d){this.a=d},
Rj:function Rj(d,e,f){this.c=d
this.e=e
this.a=f},
XQ:function XQ(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bW9(d,e,f){var w=B.ad(f),v=w.i("aa<1,jO>")
v=B.Q(new B.aa(f,new A.aYs(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.Q(new B.aa(f,new A.aYt(),w),w.i("aw.E"))
return new A.ac6(e,d,v,w,null)},
bOU(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a6r(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tl(v,C.ap,C.w,new B.kk(1),v,v,v,v,C.bx,v)
u=new A.a0u(f,d,e,u,t,!0,0,v,v,new B.br(),B.aK(x.v))
u.bk()
return u},
ac6:function ac6(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aYs:function aYs(){},
aYt:function aYt(){},
a0u:function a0u(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a3=g
_.VV$=h
_.aSs$=i
_.dn$=j
_.ag$=k
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
be_:function be_(d,e){this.a=d
this.b=e},
ax0:function ax0(){},
jO:function jO(d,e){this.a=d
this.b=e},
nJ:function nJ(d,e){this.a=d
this.b=e},
agN:function agN(){},
agO:function agO(){},
agP:function agP(){},
Ti:function Ti(){},
Au:function Au(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aYu:function aYu(d){this.a=d},
aYv:function aYv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aYw:function aYw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4X(d,e){var w=d==null?B.cz(C.C,1):d
return new A.a4W(e!==!1,w)},
a0J:function a0J(){},
a4W:function a4W(d,e){this.a=d
this.b=e},
MR:function MR(){},
a4Y:function a4Y(){},
axv:function axv(){},
aDN:function aDN(d,e){this.a=d
this.b=e},
ah8:function ah8(){},
akg:function akg(){},
akh:function akh(){},
ako:function ako(){},
KL:function KL(){},
vB:function vB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hj:function hj(){},
a51:function a51(d){this.a=d},
a52:function a52(d){this.a=d},
a53:function a53(d){this.a=d},
MM:function MM(){},
MN:function MN(){},
a56:function a56(d){this.a=d},
MP:function MP(){},
MQ:function MQ(d){this.a=d},
a50:function a50(d){this.a=d},
a5_:function a5_(d){this.a=d},
ML:function ML(d){this.a=d},
a54:function a54(d){this.a=d},
a55:function a55(d){this.a=d},
MO:function MO(d){this.a=d},
FS:function FS(){},
aTM:function aTM(d){this.a=d},
aTN:function aTN(d){this.a=d},
aTO:function aTO(d){this.a=d},
aTP:function aTP(d){this.a=d},
aTQ:function aTQ(d){this.a=d},
aTR:function aTR(d){this.a=d},
aTS:function aTS(d){this.a=d},
aTT:function aTT(d){this.a=d},
aTU:function aTU(d){this.a=d},
aTV:function aTV(d){this.a=d},
aTW:function aTW(d){this.a=d},
aTX:function aTX(d){this.a=d},
aTY:function aTY(d){this.a=d},
Oa:function Oa(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
VE:function VE(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ep$=g
_.cf$=h
_.c=_.a=null},
be4:function be4(d,e){this.a=d
this.b=e},
be2:function be2(d){this.a=d},
be3:function be3(d,e){this.a=d
this.b=e},
be1:function be1(){},
be5:function be5(d){this.a=d},
bw9(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.I:d
return new A.pI(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aJM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Tk:u
else w=g
v=f==null?A.ax6(!1,u,0,u,!1,D.vX):f
w=new A.e9(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ax6(!1,u,0,u,!1,D.vX):d,j,a0,i,s,!1,p)
w.aqD(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bST(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bBG(d.ay,e.ay,f)
v=A.bBG(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.kp(d.cy,e.cy,f,A.a_f(),x.S)
r=B.a_(d.r,e.r,f)
q=B.ra(d.w,e.w,f)
p=A.kp(d.a,e.a,f,A.c1K(),x.cw)
p.toString
o=B.bFu(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aJM(v,m,w,r,e.z,s,new A.yl(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.Ob(n),!1,u,o,!0,e.cx,p)},
ax6(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aF(C.d.aP(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
else w=e
return new A.a0C(h,w,g,i,f,!1)},
bBG(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a_(v.a,u.a,f),s=B.ra(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bD2(t,A.kp(v.d,u.d,f,A.a_f(),x.S),s,r)
s=B.a_(d.b,e.b,f)
u=B.ra(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.ax6(!1,s,v,u,e.a,new A.KG(!1,r,w.c,!0))},
bP_(d,e,f){var w=B.a_(d.c,e.c,f),v=B.ra(d.d,e.d,f)
if(w==null)w=v==null?B.aF(C.d.aP(127.5),D.dm.A()>>>16&255,D.dm.A()>>>8&255,D.dm.A()&255):null
return new A.mx(e.a,e.b,w,v)},
c53(d){return!0},
byc(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.jk)return A.bz_(w.a,A.bvO(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.dm:w},
c_n(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.jk)w=A.bz_(v.a,A.bvO(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.dm}return A.azg(w,40)},
bI_(d,e,f,g,h){var w,v=A.byc(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.jk)w=A.bz_(u.a,A.bvO(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.dm}u=A.azg(w,40)
return new A.MK(v,h==null?4:h,u)},
c51(d,e){return!0},
c1x(d,e){return Math.abs(d.a-e.a)},
c2L(d,e){var w=J.cZ(e,new A.brF(d),x.bY)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
c2H(d,e){return-1/0},
c2G(d,e){return d.a[e].b},
bJ9(d){var w=J.cZ(d,new A.brC(),x.fT)
w=B.Q(w,w.$ti.i("aw.E"))
return w},
bJ8(d){return A.azg(D.dm,15)},
pI:function pI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
e9:function e9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aJN:function aJN(){},
Ob:function Ob(d){this.a=d},
a0C:function a0C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
KG:function KG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yl:function yl(d,e,f){this.a=d
this.b=e
this.c=f},
aJy:function aJy(d,e){this.a=d
this.b=e},
a4Z:function a4Z(){},
Ex:function Ex(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
brF:function brF(d){this.a=d},
brE:function brE(d){this.a=d},
a6P:function a6P(){},
brC:function brC(){},
mU:function mU(){},
q9:function q9(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rp:function rp(d,e){this.a=d
this.b=e},
to:function to(d,e){this.a=d
this.b=e},
Gi:function Gi(d){this.a=d},
Oc:function Oc(d){this.a=d},
z6:function z6(d,e){this.a=d
this.b=e},
agW:function agW(){},
agX:function agX(){},
ah9:function ah9(){},
aki:function aki(){},
akl:function akl(){},
alZ:function alZ(){},
am_:function am_(){},
am0:function am0(){},
am2:function am2(){},
am3:function am3(){},
am4:function am4(){},
am5:function am5(){},
aqs:function aqs(){},
as4:function as4(){},
aJO:function aJO(d){this.a=d},
aJP:function aJP(){},
aJQ:function aJQ(){},
z7:function z7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
am1:function am1(){},
aJR:function aJR(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aJU:function aJU(){},
aJS:function aJS(d,e,f){this.a=d
this.b=e
this.c=f},
aJT:function aJT(d,e,f){this.a=d
this.b=e
this.c=f},
aJV:function aJV(){},
vk:function vk(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6O:function a6O(d,e,f){this.d=d
this.e=e
this.a=f},
aaS:function aaS(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i3=e
_.cW=f
_.fX=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bB=_.aE=_.ai=_.ao=$
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
buV(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bG(o.length,0,!1,x.i),m=B.ad(o),l=new B.aa(o,new A.ax9(),m.i("aa<1,G>")).km(0,new A.axa()),k=e-l,j=new A.axd(k,d,n)
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
new B.iN(o,m.i("iN<1>")).aw(0,new A.axb(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iN(o,m.i("iN<1>")).aw(0,new A.axc(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ax9:function ax9(){},
axa:function axa(){},
axd:function axd(d,e,f){this.a=d
this.b=e
this.c=f},
axe:function axe(d,e,f){this.a=d
this.b=e
this.c=f},
axb:function axb(d,e,f){this.a=d
this.b=e
this.c=f},
axc:function axc(d,e,f){this.a=d
this.b=e
this.c=f},
bvO(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iN(w,B.ad(w).i("iN<1>")).aw(0,new A.aGV(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aGV:function aGV(d,e){this.a=d
this.b=e},
aAp(d,e){var w,v
if(e!=null){w=B.ad(e).i("aa<1,G>")
v=B.Q(new B.aa(e,new A.aAq(),w),w.i("aw.E"))
return A.c2z(d,new A.a1h(v,x.cX))}else return d},
aAq:function aAq(){},
bWK(d,e){var w=!0
if(d!==C.fw)if(!(d===C.ap&&e===C.w))w=d===C.ip&&e===C.aY
if(w)return D.DX
else{w=!0
if(d!==C.io)if(!(d===C.ip&&e===C.w))w=d===C.ap&&e===C.aY
if(w)return D.DY
else return D.a9J}},
Nh:function Nh(d,e){this.a=d
this.b=e},
a17:function a17(d,e){this.a=d
this.b=e},
za:function za(d,e){this.a=d
this.$ti=e},
amc:function amc(){},
c2z(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cG($.an().r)
for(w=B.b([],x.C),v=new B.O4(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.U(B.ft('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.O3(v,s)
v.D_()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.D_()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.K1(d.aSo(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.ik(m)}p+=n
o=!o}}return l},
a1h:function a1h(d,e){this.a=d
this.b=0
this.$ti=e},
b10:function b10(){},
bvC(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
if(!u.k(0,D.fM))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bP2(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gej(v)===0){v=d.a.a
if(v.gej(v)===0){v=d.b.a
if(v.gej(v)===0){v=d.c.a
v=v.gej(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
azg(d,e){var w=1-e/100
return B.aF(d.gfH(d),C.d.aP(d.gNG()*w),C.d.aP(d.gFV()*w),C.d.aP(d.gK6()*w))},
bD0(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ai(v,u,t,w?d.b.c.b:0)},
bvD(d){var w=d.a,v=w?A.aYr(d.b):0,u=w?A.aYr(d.c):0,t=w?A.aYr(d.d):0
return new B.ai(v,u,t,w?A.aYr(d.e):0)},
bU7(d){var w
if(d.c===0){d.seU(null)
w=B.c1(d.r)
d.r=B.aF(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
bwv(d,e,f,g){var w
if(f!=null){d.r=C.C.gp(0)
d.seU(f.mO(0,g))}else{w=e==null?C.I:e
d.r=w.gp(w)
d.seU(null)}},
aYr(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kp(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k_(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k_(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c3S(d,e,f){return C.d.aP(d+(e-d)*f)},
bz_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k_(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a_(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a6A.prototype={
t(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aH:C.m
r=r?C.n:C.a6
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.ck(t.x,C.n,s,18),C.aQ],w))
v.push(B.az(new B.dI(t.c,!1,s),1))
v=B.ak(v,C.A,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.E,B.i(t.d,1,C.ag,s,B.bE(u==null?C.h:u,22,C.L),s,s,s)],w)
return B.by(r,B.ac(w,C.A,C.i7,C.i),q,s,C.af,s,3)}}
A.uK.prototype={
Lw(d){return this.aSr(d)},
aSr(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lw=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_summary",B.a4(["p_from",E.r4(d.a),"p_to",E.r4(d.b)],s,r),r),$async$Lw)
case 3:q=f
if(q==null){u=D.apc
w=1
break}if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.apE
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lw,v)},
Lv(d){return this.aSq(d)},
aSq(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lv=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ey("finance_kpis",B.a4(["p_from",E.r4(d.a),"p_to",E.r4(d.b)],s,r),r),$async$Lv)
case 3:q=f
if(x.f.b(q)){u=B.db(q,s,r)
w=1
break}u=D.aoU
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lv,v)},
pz(d){return this.aql(d)},
aql(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pz=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("sevdesk-sync",B.a4(["from",E.r4(d.a),"to",E.r4(d.b)],s,s)),$async$pz)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a2(B.fA(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pz,v)},
Lr(d){return this.aSg(d)},
aSg(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lr=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.k(q.hg("finance-export-pdf",B.a4(["from",E.r4(d.a),"to",E.r4(d.b)],s,s)),$async$Lr)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aH(J.a3(r,"base64"))
w=1
break}throw B.e(B.dH("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lr,v)}}
A.DW.prototype={
FP(d){return this.ajs(d)},
ajs(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FP=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lw(d),$async$FP)
case 7:q=f
o=A.aEG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hq(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FP,v)},
FL(d){return this.ajd(d)},
ajd(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FL=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lv(d),$async$FL)
case 7:q=f
o=A.bRC(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hq(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FL,v)},
pz(d){return this.aqm(d)},
aqm(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pz=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pz(d),$async$pz)
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
p=r.Hq(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pz,v)},
Lq(d){return this.aSf(d)},
aSf(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Lq=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.Lr(d),$async$Lq)
case 7:q=f
o=C.iL.cM(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hq(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Lq,v)},
Hq(d){if(d instanceof B.yg)return d
if(d instanceof B.m_){if(d.b==="42501")return new B.vF(d.a)
return new B.t5(d.a)}if(d instanceof B.N4)return new B.t5("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AV("Unerwarteter Fehler: "+B.j(d))},
$iaEs:1}
A.qb.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vp.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wi.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.azQ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAW.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o0.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Cv.prototype={
gbD(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o1.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yj.prototype={
GL(d){return this.aqk(0)},
aqk(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GL=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se3(0,C.dv)
s=t.r
r=s.aJ(0,$.xe(),x.P)
p.a=null
w=3
return B.k(B.p7(new A.aEn(p,t,r),x.H),$async$GL)
case 3:t.se3(0,f)
q=t.f
if(q.ghr(q)==null){q=$.but()
s=s.e
s===$&&B.a()
s.ck(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GL,v)},
Lp(){return this.aSe()},
aSe(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lp=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se3(0,C.dv)
s=t.r.aJ(0,$.xe(),x.P)
q.a=null
w=3
return B.k(B.p7(new A.aEm(q,t,s),x.H),$async$Lp)
case 3:t.se3(0,e)
r=t.f
u=r.ghr(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lp,v)}}
A.yk.prototype={
dw(d,e){var w=null,v=e.aq($.xe(),x.P),u=e.aq($.but(),x.aN)
return B.rW(B.dA(B.b([new B.fu("Finanzen","Dashboard",new A.ag2(e.aq($.bur(),x.b).gjc(),new A.aEx(this,d,e),new A.aEy(this,d,e),new A.aEz(d),new A.aEA(d),new A.aEB(this,d,e,v),w),w),C.az,new A.anz(v,w),C.c8,D.afr,C.c8,B.dk(u,new A.aEC(),new A.aED(),new A.aEE(),!1,!0,!1,x.d,x.l)],x.p),w,C.cz,w,C.F,!1),C.n,new A.aEF(e))},
Jh(d,e){return this.aKL(d,e)},
aKL(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jh=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bur()
w=3
return B.k(e.aJ(0,s.ghN(),x.F).GL(0),$async$Jh)
case 3:r=g
if(d.e==null){w=1
break}s=e.aJ(0,s,x.b)
s=s.ghr(s)
t=d.P(x.q).f
t.bc(B.c2(null,null,null,null,null,C.q,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jh,v)},
Bd(d,e){return this.awh(d,e)},
awh(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bd=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aJ(0,$.bur().ghN(),x.F).Lp(),$async$Bd)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bc(D.axe)
w=1
break}t=B.oo(C.u,10)
w=4
return B.k($.bLg().tZ(s,"finanzauswertung.pdf",t,null,null,null),$async$Bd)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bd,v)},
Be(d,e,f){return this.aIq(d,e,f)},
aIq(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Be=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.j5(null,null,!0,null,new A.aEv(f,d),d,null,!0,!0,x.cJ),$async$Be)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nD(e.aJ(0,$.c0(),x.A))
p=f.a
o=f.b
n=$.dP()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zs("finance_period",p,o,B.a4(["period_from",p.ed()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Be)
case 8:if(d.e!=null)d.P(x.q).f.bc(F.v_)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Be,v)}}
A.ag2.prototype={
t(d){var w=this,v=null,u=A.all(C.n,F.hP,C.n,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.all(v,D.abo,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.all(v,D.xK,v,s?v:w.d,"sevDesk synchronisieren"),q=A.all(C.ah,C.jf,C.ah,s?v:w.e,"PDF-Export")
return B.ak(B.b([u,C.aQ,t,C.aQ,r,C.aQ,q,C.aQ,A.all(C.aj,C.fO,C.aj,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,C.f,C.N,0,v,v)}}
A.alk.prototype={
t(d){var w,v=this,u=null,t=B.aB(12),s=B.aB(12),r=B.aB(12),q=v.w
if(q==null)q=C.a6
q=B.cz(q,1)
w=v.r
if(w==null)w=C.h
return B.GV(B.dL(!1,C.Y,!0,t,B.eM(!1,s,!0,B.aV(u,B.ck(v.c,w,u,20),C.p,u,u,new B.aT(u,u,q,r,u,u,C.B),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.p,C.ad,0,u,u,u,u,u,C.bw),u,v.d,u,u)}}
A.anz.prototype={
dw(d,e){var w=null,v=this.e,u=$.dP(),t=x.p
return B.by(w,B.ac(B.b([D.a8Q,C.E,B.ak(B.b([D.ace,C.aN,B.az(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,B.z(C.h,16,C.L),w,w,w),1)],t),C.k,C.f,C.i,0,w,w),C.v,B.ki(C.cb,B.b([new A.II("Monat",new A.bgA(e),w,w),new A.II("Jahr (YTD)",new A.bgB(e),w,w),new A.II("Zeitraum w\xe4hlen \u2026",new A.bgC(this,d,e),D.aaw,w)],t),C.ds,6,8)],t),C.A,C.f,C.i),w,w,C.D,w,3)},
IC(d,e){return this.aHk(d,e)},
aHk(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IC=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.bb(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.auS(new A.bgz(),d,B.bO(B.aZ(t)-5,1,1,0,0,0,0),new B.lA(s.a,s.b,x.bz),B.bO(B.aZ(t)+1,1,1,0,0,0,0),C.ej),$async$IC)
case 2:r=g
if(r!=null)e.aJ(0,$.xe().ghN(),x.V).ws(0,new E.lF(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IC,v)}}
A.II.prototype={
t(d){var w=null,v=B.aB(9999),u=B.aB(9999),t=B.aB(9999),s=B.cz(C.a6,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.ck(p,C.h,w,14),C.aQ],r))
q.push(B.i(this.c,w,w,w,B.z(C.h,13,C.L),w,w,w))
return B.dL(!1,C.Y,!0,v,B.eM(!1,u,!0,B.aV(w,B.ak(q,C.k,C.f,C.N,0,w,w),C.p,w,w,new B.aT(w,w,s,t,w,w,C.B),w,w,w,w,C.j0,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.p,C.ad,0,w,w,w,w,w,C.bw)}}
A.Jb.prototype={
t(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.jj(new A.bmU(this)),C.c8,D.a8U,C.v],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ak(B.b([D.acE,C.ar,B.az(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.z(C.t,14,C.l),s,s,s),1)],r),C.k,C.f,C.i,0,s,s),C.ad,s,C.D,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.J)(p),++u){t=p[u]
C.b.M(w,B.b([new A.ag0(t.a,t.b,t.c==="revenue",t.d,s),C.E],r))}q.push(B.ac(w,C.k,C.f,C.i))}return B.ac(q,C.aa,C.f,C.i)}}
A.ag0.prototype={
t(d){var w=this,v=null,u=w.e,t=u?C.aH:C.ad,s=B.cz(u?C.n:C.a6,1),r=B.aB(4),q=w.c
r=B.aV(C.V,B.i(C.c.a_(q,0,1),v,v,v,B.bE(C.h,14,C.o),v,v,v),C.p,v,v,new B.aT(t,v,s,r,v,v,C.B),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,1,C.ag,v,B.z(C.h,14,C.L),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.az(B.ac(B.b([q,B.i(t,v,v,v,B.z(C.t,12,C.l),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dz().ap(w.f)
return B.by(v,B.ak(B.b([r,C.ar,t,B.i(q,v,v,v,B.z(u?C.aj:C.h,15,C.L),v,v,v)],s),C.k,C.f,C.i,0,v,v),v,v,C.ed,v,3)}}
A.HO.prototype={
t(d){var w=null
return B.by(C.ah,B.ak(B.b([D.add,C.ar,B.az(B.i(this.c,w,w,w,B.z(C.h,14,C.l),w,w,w),1)],x.p),C.k,C.f,C.i,0,w,w),C.fJ,w,C.D,w,3)}}
A.a6B.prototype={
dw(d,e){return B.dk(e.aq($.bNI(),x.e),new A.aJv(),new A.aJw(),new A.aJx(),!1,!0,!1,x.X,x.l)}}
A.I9.prototype={
t(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.auy,C.v,B.jj(new A.bdR(v,q,100-t.w.a,w,p)),C.v,new A.akE(u),C.az,D.aux,C.v,new A.agV(t,u),C.az,D.aus,C.v,B.bC(u,!0,u,B.lI(u,B.by(u,new A.TI(t,220,u),u,u,C.D,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bdS(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.az,D.aum,C.v,B.bC(u,!0,u,B.lI(u,new A.TU(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bdT(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.az,D.auq,C.v,new A.aml(t,u),C.az,D.aun,C.v,new A.aiG(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.az,D.auu,C.v,new A.as1(t,u)],s))
return B.ac(r,C.aa,C.f,C.i)}}
A.akE.prototype={
t(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.z(C.t,11,C.l).dm(1.35),w,w,w)}}
A.alS.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cH(m.d,"-")?C.ah:C.aj
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bdU(m,d):l
r=x.p
q=B.b([B.az(B.i(m.c.toUpperCase(),l,l,l,B.z(C.t,10,C.o).fj(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cz(C.ah,0.8)
n=B.aB(4)
q.push(B.aV(l,B.i("Ziel "+p,l,l,l,B.z(C.ah,9,C.o),l,l,l),C.p,l,l,new B.aT(l,l,o,n,l,l,C.B),l,l,l,l,C.nh,l,l,l))}q=B.b([B.ak(q,C.k,C.f,C.i,0,l,l),C.b8,B.aEK(C.du,B.i(m.d,l,l,l,B.bE(w,22,C.o),l,l,l),C.kq)],r)
p=m.e
if(p!=null)q.push(B.i(p,2,C.ag,l,B.z(C.t,10,C.aK),l,l,l))
q.push(C.cr)
q.push(B.ak(B.b([new A.Uu("Vormonat",m.r,l),C.cq,new A.Uu("Vorjahr",m.f,l)],r),C.k,C.f,C.i,0,l,l))
q.push(C.cr)
q.push(B.az(new A.Y0(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.lI(l,B.by(l,B.ac(q,C.A,C.f,C.i),l,l,C.cy,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.Uu.prototype={
t(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aB(4)
return B.aV(r,B.i(this.c+" \u2014",r,r,r,B.z(C.t,9,C.o),r,r,r),C.p,r,r,new B.aT(C.a6,r,r,q,r,r,C.B),r,r,r,r,C.nh,r,r,r)}w=q>=0
v=w?C.aj:C.ah
u=v.eM(0.12)
t=B.cz(v,0.7)
s=B.aB(4)
return B.aV(r,B.ak(B.b([B.ck(w?F.a9P:D.a9O,v,r,10),F.awK,B.i(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.z(v,9,C.o),r,r,r)],x.p),C.k,C.f,C.N,0,r,r),C.p,r,r,new B.aT(u,r,t,s,r,r,C.B),r,r,r,r,C.nh,r,r,r)}}
A.Y0.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.aq
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eu(v,j[v]))
u=C.b.km(j,new A.bm3())
t=C.b.km(j,new A.bm4())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bm5(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4X(k,!1)
w=B.b([A.aJM(k,2,A.ax6(!1,C.n.eM(0.16),0,k,!0,D.vX),C.n,0.35,k,D.DO,k,!0,!1,!0,!1,D.Fb,!1,10,D.YB,!0,C.lo,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.Oa(A.bw9(k,k,k,D.alr,l,D.BE,D.DK,D.DP,w,D.afv,k,m,k,n,D.XU,D.als,D.a97),C.as,C.a8,k,k)}}
A.TI.prototype={
t(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aJZ
w=C.b.fA(p,0,new A.b4K())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.axf(B.b([A.a0E(q,q,D.B5,q,C.n,q,q,q,r.b,6),A.a0E(q,q,D.B5,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return new B.aS(q,this.d,A.bBH(A.ax8(q,q,u,q,q,A.a4X(q,!1),q,new A.ym(!0,!0,q,new A.b4L(),A.a_a(),!1,q,A.auC(),A.a_a()),q,v,q,q,new A.uM(!0,new A.p8(16,q,new A.q1(!0,new A.b4M(this),46,q),!0),D.kn,D.kn,new A.p8(16,q,new A.q1(!0,new A.b4N(p),26,q),!0)))),q)},
aK1(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.TU.prototype={
t(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.aa(v,new A.b5x(),w),x.i)
C.b.M(o,new B.aa(u,new A.b5y(),w))
t=C.b.fA(o,0,new A.b5z())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.axf(B.b([A.a0E(q,q,q,q,C.n,q,q,q,v[s],14),A.a0E(q,q,q,q,C.aj,q,q,q,u[s],14)],m),4,q,q,s))
r=new B.aS(q,this.d,A.bBH(A.ax8(q,q,n,q,q,A.a4X(q,!1),q,D.DP,q,o,q,q,new A.uM(!0,D.kn,D.kn,D.kn,new A.p8(16,q,new A.q1(!0,new A.b5A(p),26,q),!0)))),q)
return this.e?r:B.by(q,r,q,q,C.D,q,3)}}
A.aml.prototype={
t(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aJY
w=new B.aa(l,new A.ben(),B.ad(l).i("aa<1,G>")).km(0,new A.beo())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.J)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,B.z(C.h,14,C.o),m,m,m)
p=$.dz()
o=r.d
n=new B.aW(4,4)
o=B.b([B.ak(B.b([new B.kD(1,C.dQ,B.ac(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,B.z(C.t,12,C.aK),m,m,m)],v),C.A,C.f,C.i),m),C.aN,B.i(p.ap(o),m,m,m,B.bE(C.h,16,C.o),m,m,m)],v),C.k,C.f,C.i,0,m,m),C.cr,new B.Dc(new B.d2(n,n,n,n),C.bC,B.Ey(C.a6,8,C.d.bx(o/w,0,1),D.AU),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.I(r)===B.I(q)&&B.a_d(r.gbD(),q.gbD())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.by(m,B.ac(u,C.k,C.f,C.i),m,m,C.D,m,3)}}
A.aiG.prototype={
t(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.az(new A.C_("Aktive Kunden",""+s,u),1)
w=B.az(new A.C_("K\xe4ufe",""+t.a,u),1)
v=$.dz()
return B.by(u,B.ak(B.b([s,w,B.az(new A.C_("\xd8-Warenkorb",v.ap(t.d),u),1),B.az(new A.C_("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.k,C.f,C.i,0,u,u),u,u,C.D,u,3)}}
A.C_.prototype={
t(d){var w=null
return B.ac(B.b([B.i(this.c.toUpperCase(),w,w,w,B.z(C.t,10,C.o).fj(0.6),w,w,w),C.bg,B.i(this.d,w,w,w,B.bE(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.N)}}
A.as1.prototype={
t(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bob(),B.ad(q).i("aa<1,G>")).km(0,new A.boc()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.J)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.ak(B.b([new B.kD(1,C.dQ,B.i(u.b,1,C.ag,r,B.z(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,B.z(C.t,12,C.L),r,r,r),B.i($.dz().ap(t),r,r,r,B.z(C.h,13,C.o),r,r,r)],o),C.k,C.f,C.i,0,r,r),C.b8,new B.Dc(new B.d2(s,s,s,s),C.bC,B.Ey(C.a6,6,C.d.bx(t/p,0,1),D.AU),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.I(u)===B.I(s)&&B.a_d(u.gbD(),s.gbD())
else s=!0
if(!s)t.push(C.E)
C.b.M(n,t)}return B.by(r,B.ac(n,C.k,C.f,C.i),r,r,C.D,r,3)}}
A.wB.prototype={
t(d){var w=null
return B.by(w,B.i(this.c,w,w,w,B.z(C.t,13,C.l),w,w,w),C.ad,w,C.D,w,3)}}
A.agV.prototype={
dw(d,e){return B.dk(e.aq($.bus(),x.fM),new A.b38(this,d,e),new A.b39(),new A.b3a(),!1,!0,!1,x.h,x.l)}}
A.B2.prototype={
W(){return new A.Tk()},
aXj(){return this.d.$0()}}
A.Tk.prototype={
ar(){var w,v,u,t,s,r,q=this
q.aL()
q.d=new B.bb(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.ff(J.al(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pr[t].a
if(v)r=""
else{r=B.bo(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b1(r,".",",")}u.m(0,s,new B.bM(new B.cT(r,C.bG,C.aR),$.ag()))}q.e!==$&&B.b8()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c7(v,v.r,v.e,B.l(v).i("c7<2>"))
while(v.u()){w=v.d
w.S$=$.ag()
w.T$=0}this.an()},
ri(d){var w=this.e
w===$&&B.a()
w=C.c.bm(w.h(0,d).a.a)
w=B.b1(w,".","")
w=B.jr(B.b1(w,",","."))
return w==null?0:w},
a3H(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pr[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b1(s,".",",")
t.lL(0,t.a.xT(C.aR,C.bG,s))}}this.J(new A.b2X())},
aE_(){this.a3H(D.ape)
this.c.P(x.q).f.bc(D.axz)},
HS(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HS=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b9(a1)
for(e=0;e<8;++e)a2.E(0,D.pr[e].a)
q=a2
t=4
w=7
return B.k($.aEg.ci().z8(B.b(["csv","txt"],x.s),C.xv,!0),$async$HS)
case 7:p=a5
a2=p
o=a2==null?null:J.JZ(a2.a).c
if(o==null){w=1
break}n=C.aE.acR(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.BJ.cM(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.J)(a1),++e){l=a1[e]
k=J.avt(l,B.bU("[;,\t]",!0,!1,!1))
if(J.ci(k)<2)continue
j=C.c.bm(J.a3(k,0)).toLowerCase()
i=J.Cr(q,j)?j:D.apF.h(0,j)
if(i==null)continue
d=C.c.bm(C.b.n5(J.bOt(k,1)))
d=B.b1(d,"\u20ac","")
d=B.b1(d," ","")
d=B.b1(d,".","")
h=B.b1(d,",",".")
g=B.jr(h)
if(g!=null)J.fn(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bc(D.axb)
w=1
break}r.a3H(m)
r.c.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HS,v)},
I2(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$I2=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b2Y(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZL("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ed(),0,10),"p_cash_and_bank",q.ri("cash_and_bank"),"p_receivables",q.ri("receivables"),"p_inventory_value",q.ri("inventory_value"),"p_other_current_assets",q.ri("other_current_assets"),"p_fixed_assets",q.ri("fixed_assets"),"p_current_liabilities",q.ri("current_liabilities"),"p_long_term_liabilities",q.ri("long_term_liabilities"),"p_equity",q.ri("equity")],x.N,x.aU))
w=7
return B.k(n,$async$I2)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXj()
o=q.c
o.toString
B.bf(o,!1).f2()
q.c.P(x.q).f.bc(D.axf)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b2Z(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I2,v)},
t(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,B.bE(C.h,18,C.o),r,r,r),p=s.f?r:new A.b30(s,d),o=s.d
o===$&&B.a()
p=B.hq(D.acg,B.i("Stichtag: "+C.c.a_(o.ed(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.az(B.hq(D.adl,D.aDg,o?r:s.gaD2(),r),1)
v=x.p
w=B.b([p,C.E,B.ak(B.b([w,C.aN,B.az(B.hq(D.adb,D.aD4,o?r:s.gaDZ(),r),1)],v),C.k,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pr[u]
o=s.e
o===$&&B.a()
C.b.M(w,B.b([B.f0(r,C.aU,!1,r,!0,C.q,r,B.fd(),o.h(0,p.a),r,r,r,r,r,2,new B.cf(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aZ,r,r,r,r,C.ir,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a2,r,r,r,r),C.E],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.z(C.t,11,C.l),r,r,r))
p=B.f8(B.ac(w,C.aa,C.f,C.N),r,C.F)
o=s.f
w=B.dM(C.cW,r,r,o?r:new A.b31(d),r,r)
o=o?r:s.gaDJ()
t=B.dJ(C.n,C.h,r,r,r,r,r)
return B.lu(B.b([w,B.dS(s.f?F.Z9:C.es,o,t)],v),C.m,new B.aS(380,r,p,r),q)}}
A.be.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.I(this)===B.I(e)&&B.a_d(this.gbD(),e.gbD())
else w=!0
return w},
gv(d){return(B.ez(B.I(this))^B.bJE(this.gbD()))>>>0},
j(d){B.bCX()
return B.I(this).j(0)}}
A.KH.prototype={
W(){return new A.Tl(B.A(x.S,x.I),new A.axi(B.A(x.x,x.T)),null,null)}}
A.Tl.prototype={
t(d){var w,v=this,u=v.a1G(),t=v.CW
t.toString
t=v.a1H(t.au(0,v.gft().gp(0)))
w=v.a1H(u)
v.a.toString
return new A.KC(new A.a0D(t,w,null),u,null)},
a1H(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.axf(s.c,s.d,!1,r,s.a))}return d.aPh(w)},
a1G(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uw(t.ch)
if(r)s=w.a
r=t.y
t=t.aQc(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPi(A.buW(!1,!0,!0,v.d,v.c,u.garR(),v.f,v.e))}return t},
arS(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafi()||e==null||e.a==null){w=v.cy
v.J(w.gaOH(w))
return}v.J(new A.b3d(v,e))},
lv(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1G(),new A.b3e(w)))}}
A.nK.prototype={
V5(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ax8(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQc(d,e){return this.V5(null,null,d,e)},
aPi(d){return this.V5(null,d,null,null)},
aPh(d){return this.V5(d,null,null,null)},
X0(d,e,f){var w,v,u,t=A.kp(d.ch,e.ch,f,A.c1P(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bD3(d.d,e.d,f),q=A.bF_(d.e,e.e,f),p=A.bD1(d.c,e.c,f),o=e.a
o=A.a4X(B.a0V(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.ax8(e.cx,B.a_(d.as,e.as,f),t,e.cy,u,o,A.bCZ(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbD(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ax7.prototype={
K(){return"BarChartAlignment."+this.b}}
A.fC.prototype={
gds(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.axg(),B.ad(v).i("aa<1,G>")).km(0,new A.axh())
v=v.length
return w+(v-1)*this.d},
gbD(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ii.prototype={
gbD(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mw.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a0A.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a0F.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.adw.prototype={
K(){return"TooltipDirection."+this.b}}
A.a0G.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CM.prototype={
gbD(){return[this.a,this.b,C.cC,C.w,null]}}
A.KI.prototype={}
A.a0H.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xt.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X0(v,w,d)}}
A.agR.prototype={}
A.agY.prototype={}
A.agZ.prototype={}
A.ah0.prototype={}
A.ah1.prototype={}
A.ah2.prototype={}
A.ah3.prototype={}
A.ah4.prototype={}
A.ah5.prototype={}
A.axi.prototype={
Uw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uo(0,0,!1)
v=new A.za(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uo(t,u,!0)}w=null
try{w=C.b.qg(d,new A.axj())}catch(s){return new A.uo(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uo(q,r,!1)
u.m(0,v,j)
return j}}
A.uo.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.ah_.prototype={}
A.axk.prototype={
i9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_L(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abT(t,A.buV(w,t.a),u)
l.y=u
l.aRy(e,u,f)
l.alq(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRH(d,e,m,t,r,s,n,o,f)}}},
abT(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dH("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iN(p,B.ad(p).i("iN<1>")).aw(0,new A.axl(t,q,r,s))
w.push(new A.a5D(q))}return w},
aRy(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d2(k,k,k,k)}j=o.w
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
if(a1!==a2){if(a1>a2){a3=b3.dF(Math.max(s,a2),b5,b8)
a4=B.PQ(h,Math.min(b3.dF(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dF(Math.min(t,a2),b5,b8)
a4=B.PQ(h,a5,g,Math.max(b3.dF(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.I:f).gp(0)
k.seU(null)
a6=b3.f.ek()
u.drawRRect(B.lp(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dF(f,b5,b8)
e=a8.b
b0=b3.dF(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.H(h,a9,g,b0):new B.H(h,b0,g,a9)
J.b0(u.save())
u.clipRect(B.dO(b1),$.oZ()[1],!0)
a6=b3.f.ek()
u.drawRRect(B.lp(a4),a6)
a6.delete()
u.restore()
b3.aRF(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gej(k)>0}else k=!1
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
v.fW(A.aAp(b2,o.r),b3.r)}}}},
aRH(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AK(a5,a5,a5,a5,B.d9(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lr().ZL(a8,a7.b),a7.a),C.cC,C.w,a5,b6.c,C.bx)
w.afB(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbU(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dF(s,a6,b6)
q=b4.a
p=a4.dF(q,a6,b6)
o=b1.b
n=u+o.geu()
m=v+4+(o.gd_(0)+o.gd1(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aFD)j=v===D.ZR&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZM(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.H(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FG(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lr().Kh(new B.F(v,t),d).b
s=$.lr()
q=w.b
p=q.c
q=q.a.c
a0=s.Kh(new B.F(p,q.gbU(q)),d)
q=g.gc8()
p=w.b.c
s=g.gahS()
a1=b1.Q
if(!a1.k(0,C.H)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.VH(d,new A.axm(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aRF(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gej(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dF(w,j,k)
u=e.a
t=n.dF(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a1
s=w?new B.aW(i.x,i.y):C.a1
r=w?C.a1:new B.aW(i.e,i.f)
w=w?C.a1:new B.aW(i.r,i.w)
q=B.PQ(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dF(v,j,k),i.b)
r=n.dF(t,j,k)
v=t<v
t=v?C.a1:new B.aW(i.z,i.Q)
p=v?C.a1:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a1
q=B.PQ(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a1)}else q=B.bwQ(w,n.dF(v,j,k),u,n.dF(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eP(q,n.r)},
Wm(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abT(b2,A.buV(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dF(k,b2,b3)
m=b0[q].c[o]
g=a7.dF(m.a+m.x.b,b2,b3)}else{h=a7.dF(j+m.x.b,b2,b3)
g=a7.dF(b0[q].c[o].b,b2,b3)}a7.dF(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dF(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dF(a4.a,b2,b3)
a6=a7.dF(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a0H(d,q,a0,o,a2,a1,new A.eu(d.a,v),new B.r(n,t))}}return null}}
A.a5D.prototype={}
A.a0D.prototype={
bn(d){var w,v=this.e,u=B.bx(d,null,x.w).w.gcP(),t=new A.axk()
t.a0Y()
$.an()
w=B.b_()
w.b=C.bc
t.f=w
w=B.b_()
w.b=C.aW
t.r=w
w=B.b_()
w.b=C.bc
w.r=C.m.gp(0)
t.w=w
w=B.b_()
w.b=C.aW
w.r=C.I.gp(0)
w.c=1
t.x=w
t=new A.aaF(this.d,v,u,t,d,C.bq,new B.br(),B.aK(x.v))
t.bk()
t.YH(v.cy)
t.aeK()
return t},
bz(d,e){e.sio(0,this.d)
e.sYs(this.e)
e.scP(B.bx(d,null,x.w).w.gcP())
e.B=d
e.bf()}}
A.aaF.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYs(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0v(d.cy)
w.bf()},
scP(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a17(t,v),new A.vB(u.aC,u.i3,u.cW,x.Q))
s.restore()},
ZF(d){var w=this,v=w.gC(0)
return new A.KI(w.fX.Wm(d,v,new A.vB(w.aC,w.i3,w.cW,x.Q)))}}
A.a0t.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CL.prototype={
K(){return"AxisSide."+this.b}}
A.tn.prototype={}
A.q1.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ac5.prototype={
gbD(){return[!1,0,0,0]}}
A.p8.prototype={
gbD(){return[this.b,this.a,this.c,!0]}}
A.uM.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eu.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eu))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.ym.prototype={
gbD(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pv.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ady.prototype={
gbD(){return[this.a,this.b]}}
A.PU.prototype={
gbD(){return[this.a,this.b]}}
A.mQ.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nh.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kJ.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l8.prototype={
gbD(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5O.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.adU.prototype={
gbD(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.MA.prototype={
gbD(){return[this.a,this.b,!0]}}
A.uL.prototype={}
A.MK.prototype={
adi(d,e,f){var w,v
$.an()
w=B.b_()
v=this.a
w.r=v.gp(v)
w.b=C.bc
d.iT(f,this.b,w)},
gbD(){return[this.a,this.b,this.c,0]}}
A.agM.prototype={}
A.agQ.prototype={}
A.ak2.prototype={}
A.akj.prototype={}
A.akk.prototype={}
A.akm.prototype={}
A.akn.prototype={}
A.ala.prototype={}
A.al9.prototype={}
A.alb.prototype={}
A.aoH.prototype={}
A.aqt.prototype={}
A.aqu.prototype={}
A.as5.prototype={}
A.asI.prototype={}
A.asH.prototype={}
A.asJ.prototype={}
A.awY.prototype={
Mt(d,e,f,g,h,i){return new B.ic(this.aVn(d,e,f,g,h,i),x.g4)},
aVm(d,e,f,g){return this.Mt(d,e,f,!0,g,!0)},
aVn(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mt(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lr().aj_(s,u,v,w)
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
A.KB.prototype={
a0Y(){var w,v=this
$.an()
w=B.b_()
w.b=C.aW
v.a=w
w=B.b_()
w.b=C.bc
v.b=w
w=B.b_()
w.b=C.bc
v.e=w
w=B.b_()
w.b=C.aW
v.c=w
v.d=B.b_()},
i9(d,e,f){var w=this
w.a_M(d,e,f)
w.aRu(e,f)
w.aRE(e,f)
w.aRD(e,f)},
aRD(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lr().Oy(w.a,a1.r-a1.f)
u=$.bu4().Mt(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fc(u.a(),u.$ti.i("fc<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fd(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kY(n,m)
if(j!=null){p.r=C.C.gp(0)
p.seU(j.mO(0,i))}else{if(k==null)k=C.I
p.r=k.gp(k)
p.seU(a0)}k=l.c
p.c=k
if(k===0){p.seU(a0)
k=B.c1(p.r)
p.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Ds(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lr().Oy(w.b,a1.y-a1.x)
u=$.bu4().Mt(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fc(u.a(),u.$ti.i("fc<1>")),r=a2.d,g=w.a,a2=a2.e;t.u();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dF(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kY(n,m)
if(k!=null){q.r=C.C.gp(0)
q.seU(k.mO(0,i))}else{if(p==null)p=C.I
q.r=p.gp(p)
q.seU(a0)}p=f.c
q.c=p
if(p===0){q.seU(a0)
p=B.c1(q.r)
q.r=B.aF(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Ds(n,m,d.a,f.d)}},
aRu(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hc(new B.H(0,0,0+w.a,0+w.b),this.b)},
aRE(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.J)(k),++u){t=k[u]
s=B.kY(new B.r(n.fd(t.a,m,e),0),new B.r(n.fd(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gp(0)
r.seU(p.mO(0,s))}else{r.r=(q==null?C.I:q).gp(0)
r.seU(null)}o=n.e.ek()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.J)(l),++u){t=l[u]
s=B.kY(new B.r(0,n.dF(t.a,m,e)),new B.r(w,n.dF(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gp(0)
v.seU(q.mO(0,s))}else{v.r=(r==null?C.I:r).gp(0)
v.seU(null)}o=n.e.ek()
j.drawRect(B.dO(s),o)
o.delete()}},
aRC(d,e,f){var w,v
this.a_M(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adj(d,e,f,w)
if(v.b.length!==0)this.aRJ(d,e,f,w)},
adj(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.e
n=f.dF(o,a1,a0)
m=new B.r(0,n)
o=f.dF(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kY(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Ds(m,l,f.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=C.d.al(o,n.gbU(n).eF(0,2))
J.b0(r.save())
r.translate(h,g)
n=n.gNq().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
o=C.d.al(o,n.gbU(n).eF(0,2))
k=f.d
k===$&&B.a()
s.adk(0,n,new B.r(h,o),k)}}},
aRJ(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
i=B.kY(m,l)
if(j!=null){n.r=C.C.gp(0)
n.seU(j.mO(0,i))}else{if(k==null)k=C.I
n.r=k.gp(k)
n.seU(null)}k=p.c
n.c=k
if(k===0){n.seU(null)
k=B.c1(n.r)
n.r=B.aF(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Ds(m,l,d.c,p.d)
n=p.r
h=n.gds(n).eF(0,2)
g=n.gbU(n).eF(0,2)
f=C.d.al(o,h)
e=C.d.al(u,g)
J.b0(r.save())
r.translate(f,e)
n=n.gNq().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gds(n).eF(0,2)
g=n.gbU(n).ac(0,2)
o=C.d.al(o,h)
k=C.d.al(u,g)
j=d.d
j===$&&B.a()
s.adk(0,n,new B.r(o,k),j)}}},
fd(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dF(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZM(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KC.prototype={
gakJ(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gakK(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakL(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakH(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
al4(d){var w,v=this,u=null,t=v.d,s=A.bvD(t.d),r=t.a
r=r.a&&A.bP2(r.b)?r.b:u
w=B.b([B.aV(u,v.c,C.p,u,u,new B.aT(u,u,r,u,u,u,C.B),u,u,u,s,u,u,u,u)],x.p)
s=new A.ax_(w)
if(v.gakJ())C.b.hx(w,s.$1(!0),new A.Au(D.B0,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakL())C.b.hx(w,s.$1(!0),new A.Au(D.mw,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakK())C.b.hx(w,s.$1(!0),new A.Au(D.B1,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gakH())C.b.hx(w,s.$1(!0),new A.Au(D.dJ,t,new B.F(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
t(d){return B.jj(new A.awZ(this))}}
A.Rj.prototype={
W(){return new A.XQ(new B.bh(null,x.eF))}}
A.XQ.prototype={
axh(){switch(this.a.c.a){case 0:return C.e6
case 1:return C.fD
case 2:return C.du
case 3:return C.f7}},
axN(){switch(this.a.c.a){case 0:return new B.ai(0,0,8,0)
case 1:return new B.ai(0,0,0,8)
case 2:return new B.ai(8,0,0,0)
case 3:return new B.ai(0,8,0,0)}},
axj(d){this.a.toString
return},
ar(){this.aL()
$.cA.x1$.push(this.ga4a())},
bd(d){this.bG(d)
$.cA.x1$.push(this.ga4a())},
t(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axN()
return B.b0z(B.b0y(0,B.aV(v.axh(),t.e,C.p,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.ac6.prototype={
bn(d){return A.bOU(this.f,this.r,this.e)},
bz(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a0u.prototype={
hn(d){if(!(d.b instanceof B.hk))d.b=new B.hk(null,null,C.u)},
hX(d){if(this.B===C.aB)return this.y0(d)
return this.acV(d)},
aKd(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8O(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dD(d){var w=this.a8N(d,B.hB())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8N(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aB?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fX(u,null)
break
case 1:q=B.fX(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8O(p)
t=Math.max(t,o.aKd(p))
m=r.aG$}return new A.be_(n<1/0?n:s,t)},
cw(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.L.prototype.ga6.call(p)),n=p.a8N(o,B.ms()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8O(r==null?B.U(B.Y("RenderBox was not laid out: "+B.I(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e7(d,e){return this.y3(d,e)},
aM(d,e){if(this.gC(0).gY(0))return
this.a3.sbi(0,null)
this.v_(d,e)},
l(){this.a3.sbi(0,null)
this.ao0()}}
A.be_.prototype={}
A.ax0.prototype={}
A.jO.prototype={
gbD(){return[this.a,this.b]}}
A.nJ.prototype={}
A.agN.prototype={}
A.agO.prototype={
aQ(d){var w,v,u
this.fs(d)
w=this.ag$
for(v=x.L;w!=null;){w.aQ(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fi(0)
w=this.ag$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.agP.prototype={}
A.Ti.prototype={
l(){var w,v,u
for(w=this.VV$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.Au.prototype={
gox(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.du
case 1:return C.f7
case 2:return C.e6
case 3:return C.fD}},
gaZY(){var w=this.d,v=A.bvD(w.d),u=A.bD0(w.a)
switch(this.c.a){case 2:case 0:return new B.ai(0,v.b,0,v.d).ac(0,new B.ai(0,u.b,0,u.d))
case 1:case 3:return new B.ai(v.a,0,v.c,0).ac(0,new B.ai(u.a,0,u.c,0))}},
gahG(){var w=this.d,v=A.bD0(w.a),u=A.bvD(w.d)
switch(this.c.a){case 2:case 0:return u.gd_(0)+u.gd1(0)+(v.gd_(0)+v.gd1(0))
case 1:case 3:return u.geu()+v.geu()}},
aW6(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gox().c.d
if(o==null)o=$.lr().Oy(d,f-e)
w=p.c
v=w!==D.mw
if((!v||w===D.dJ)&&p.d instanceof A.nK){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.buV(u,d)
w=new B.iN(t,B.ad(t).i("iN<1>"))
s=w.giF(w).f1(0,new A.aYu(u),x.W).fZ(0)}else{r=$.bu4()
w=!v||w===D.dJ
v=p.d
q=r.aVm(w?v.w:v.z,o,f,e)
v=B.oe(q,new A.aYv(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.ad(s).i("aa<1,nJ>")
w=B.Q(new B.aa(s,new A.aYw(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
t(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gox()
w=j.gox()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aV(i,i,C.p,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mw
u=!v
t=!u||w===D.dJ
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dJ?C.F:C.aB
q=B.b([],x.p)
if(w===D.B0||v)j.gox()
if(j.gox().c.a){v=!u||w===D.dJ?r:j.gox().c.c
p=!u||w===D.dJ?j.gox().c.c:r
o=j.gaZY()
n=!u||w===D.dJ?C.aB:C.F
j.gahG()
m=j.gahG()
l=!u||w===D.dJ
k=j.d
l=l?k.f:k.x
u=!u||w===D.dJ?k.r:k.y
q.push(B.aV(i,A.bW9(new A.ax0(),n,j.aW6(r-m,l,u,w)),C.p,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.B1||w===D.dJ)j.gox()
return new B.eF(t,i,i,B.bRG(q,C.k,s,i,C.f,C.N,0,i,i,C.by),i)}}
A.a0J.prototype={
gbD(){return[this.a,this.b]}}
A.a4W.prototype={
gbD(){return[this.a,this.b]}}
A.MR.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4Y.prototype={
gabd(d){return!1},
gbD(){return[!1,!1,!1,!1]}}
A.axv.prototype={}
A.aDN.prototype={
K(){return"FLHorizontalAlignment."+this.b}}
A.ah8.prototype={}
A.akg.prototype={}
A.akh.prototype={}
A.ako.prototype={}
A.KL.prototype={
i9(d,e,f){}}
A.vB.prototype={}
A.hj.prototype={
gdL(){return null},
gafi(){var w,v=this
B.bz()
B.bz()
B.bz()
w=v instanceof A.MQ
if(w)return!0
return!(v instanceof A.MN)&&!(v instanceof A.MM)&&!(v instanceof A.MO)&&!(v instanceof A.ML)&&!w&&!(v instanceof A.MP)}}
A.a51.prototype={
gdL(){return this.a.b}}
A.a52.prototype={
gdL(){return this.a.b}}
A.a53.prototype={
gdL(){return this.a.b}}
A.MM.prototype={}
A.MN.prototype={}
A.a56.prototype={
gdL(){return this.a.b}}
A.MP.prototype={}
A.MQ.prototype={
gdL(){return this.a.b}}
A.a50.prototype={
gdL(){return this.a.b}}
A.a5_.prototype={
gdL(){return this.a.b}}
A.ML.prototype={
gdL(){return this.a.b}}
A.a54.prototype={
gdL(){return this.a.gdL()}}
A.a55.prototype={
gdL(){return this.a.gdL()}}
A.MO.prototype={
gdL(){return this.a.gdL()}}
A.FS.prototype={
YH(d){this.V=d.b
this.U=d.c
this.a3=d.d},
aeK(){var w=this,v=null,u=w.ai=B.bww(v,v)
u.ay=new A.aTM(w)
u.ch=new A.aTN(w)
u.CW=new A.aTO(w)
u.cy=new A.aTP(w)
u.cx=new A.aTQ(w)
u=w.aE=B.GG(v,-1,v)
u.B=new A.aTR(w)
u.a4=new A.aTS(w)
u.V=new A.aTT(w)
u=w.bB=B.a6W(v,w.a3,v)
u.p3=new A.aTU(w)
u.p4=new A.aTV(w)
u.RG=new A.aTW(w)},
cw(){var w=x.k.a(B.L.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dD(d){return new B.F(d.b,d.d)},
kJ(d){return!0},
mY(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bB
w===$&&B.a()
w.rF(d)
w=v.aE
w===$&&B.a()
w.rF(d)
w=v.ai
w===$&&B.a()
w.rF(d)}else if(x.gJ.b(d))v.l6(new A.a55(d))},
gMX(d){return new A.aTX(this)},
gMZ(d){return new A.aTY(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdL()
v=w!=null?u.ZF(w):null
u.V.$2(d,v)
u.a4=C.bq},
gKN(d){return this.a4},
gFo(){var w=this.ao
w===$&&B.a()
return w},
aQ(d){this.fs(d)
this.ao=!0},
aF(d){this.ao=!1
this.fi(0)},
$ijm:1}
A.Oa.prototype={
W(){return new A.VE(B.b([],x.r),B.A(x.S,x.I),new A.aJO(B.A(x.y,x.dj)),null,null)}}
A.VE.prototype={
t(d){var w,v=this,u=v.a4c(),t=v.CW
t.toString
t=v.aaN(t.au(0,v.gft().gp(0)))
w=v.aaN(u)
v.a.toString
return new A.KC(new A.a6O(t,w,null),u,null)},
aaN(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ad(w).i("aa<1,e9>")
w=B.Q(new B.aa(w,new A.be4(this,d),v),v.i("aw.E"))
return d.aQ9(w,this.cy)},
a4c(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uw(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQo(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPO(new A.Ex(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayB(),t.c,t.d))}return r},
ayC(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafi())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.be2(v))
return}v.J(new A.be3(v,e))},
lv(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4c(),new A.be5(w)))}}
A.pI.prototype={
X0(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.a_(d.as,e.as,f),j=e.a
j=A.a4X(B.a0V(d.a.b,j.b,f),j.a)
w=A.bCZ(d.at,e.at,f)
v=A.bD1(d.c,e.c,f)
u=A.bD3(d.d,e.d,f)
t=A.bF_(d.e,e.e,f)
s=A.kp(d.ch,e.ch,f,A.c3U(),x.cz)
s.toString
r=A.kp(d.CW,e.CW,f,A.c3T(),x.J)
r.toString
u=A.bw9(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
V6(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.bw9(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQo(d,e,f,g){return this.V6(null,null,d,e,f,g,null)},
aPO(d){var w=null
return this.V6(w,d,w,w,w,w,w)},
aQ9(d,e){var w=null
return this.V6(d,w,w,w,w,w,e)},
gbD(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.e9.prototype={
aqD(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qg(n.a,new A.aJN())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.J)(v),++p){o=v[p]
if(o.k(0,D.fM))continue
if(q==null||o.a<q.a)q=o
if(s==null||o.a>s.a)s=o
if(r==null||o.b>r.b)r=o
if(t==null||o.b<t.b)t=o}q.toString
n.b!==$&&B.b8()
n.b=q
r.toString
n.c!==$&&B.b8()
n.c=r
s.toString
n.d!==$&&B.b8()
n.d=s
t.toString
n.e!==$&&B.b8()
n.e=t}},
acA(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aJM(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPV(d){return this.acA(d,null)},
aPX(d){return this.acA(null,d)},
gbD(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.Ob.prototype={
gbD(){return[this.a]}}
A.a0C.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mx.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.KG.prototype={
gbD(){return[!1,this.b,this.c,!0]}}
A.yl.prototype={
gbD(){return[this.a,this.b,this.c]}}
A.aJy.prototype={
K(){return"LabelDirection."+this.b}}
A.a4Z.prototype={
gbD(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Ex.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6P.prototype={
gbD(){return[4,C.hL,16,D.xs,0,120,A.c3W(),!1,!1,!1,0,C.H,A.c3V()]}}
A.mU.prototype={
gbD(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q9.prototype={}
A.rp.prototype={
gbD(){return[this.a,this.b,C.cC,C.w,null]}}
A.to.prototype={
gbD(){return[this.a,this.b]}}
A.Gi.prototype={
gbD(){return[this.a]}}
A.Oc.prototype={}
A.z6.prototype={
hh(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.X0(v,w,d)}}
A.agW.prototype={}
A.agX.prototype={}
A.ah9.prototype={}
A.aki.prototype={}
A.akl.prototype={}
A.alZ.prototype={}
A.am_.prototype={}
A.am0.prototype={}
A.am2.prototype={}
A.am3.prototype={}
A.am4.prototype={}
A.am5.prototype={}
A.aqs.prototype={}
A.as4.prototype={}
A.aJO.prototype={
Uw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.y3
u=new A.za(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.z7(s,r,q,t,!0)}w=null
try{w=C.b.qg(d,new A.aJP())}catch(p){return D.y3}v=null
try{v=C.b.qg(w.a,new A.aJQ())}catch(p){return D.y3}o=v.a
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
if(f<m)m=f}e=new A.z7(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.z7.prototype={
gbD(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.am1.prototype={}
A.aJR.prototype={
i9(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabd(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.jp(new B.H(0,-40,0+(u+40),-40+(v+40)),B.b_())
a3.aOO(new B.H(0,0,u,v))}d.a_L(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t)d.aRA(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aRw(a3,q,a4)
d.aRB(a3,q,a4)
d.alp(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Z(o)
if(n.gq(o)!==p.length)throw B.e(B.dH("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vk(q,i,j,k))}}d.aRI(a3,s,a4)
if(w.gabd(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRG(a2,a3,v,f,new A.Gi(g),a4)}},
aRw(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bvC(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.J)(n),++v){u=n[v]
t=p.Ze(o,e,u,f)
s=p.aiS(o,e,t,u,f)
r=p.Zg(o,e,t,u,f,!0)
q=p.aiR(o,e,t,u,f)
p.aRz(d,s,p.Zd(o,e,t,u,f,!0),f,e)
p.aRt(d,q,r,f,e)
p.aRx(d,t,e)
p.aRv(d,t,e,f)}},
aRA(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.bvC(a6.a),a9=A.bvC(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bW.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ad(m).i("cH<1>")
k=B.Q(new B.cH(m,l),l.i("aw.E"))
j=a3.Ze(a4,a6,n,b3)
i=a3.Zf(a4,a7.aPX(k),k,b3,j)
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
l=a3.dF(g,a4,b3)
d=a3.fd(f,a4,b3)
a0=a3.dF(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gp(0)
a1.seU(u.mO(0,new B.H(m,l,d,a0)))}else{a1.r=(q?C.I:v).gp(0)
a1.seU(null)}$.an()
a2=new B.mA(C.dw,C.bc,C.e0,C.eq,C.dP).ek()
m=B.dO(new B.H(0,0,s,r))
l=$.bW.b
if(l===$.bW)B.U(B.vh(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fW(i,a3.r)
w.restore()}},
aRB(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zk(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fM)&&t.$2(q,e)){p=this.fd(q.a,w,f)
o=this.dF(q.b,w,f)
n.$4(q,p/v*100,e,r).adi(s,q,new B.r(p,o))}}},
aRI(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h3(b3,new A.aJU())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.J)(b3),++o){n=b3[o]
m=n.a
l=b1.Zk(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fd(j.a,w,b4)
g=b1.dF(j.b,w,b4)
f=i.b
e=f.a
d=B.cl()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.ro(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.ln(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.ln(q.$2(m,k))))
f=b1.dF(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dF(a2,w,b4)
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
b0=B.kY(a3,a5)
if(a6!=null){f.r=C.C.gp(0)
f.seU(a6.mO(0,b0))}else{if(a4==null)a4=C.I
f.r=a4.gp(a4)
f.seU(null)}a4=a9.c
f.c=a4
if(a4===0){f.seU(null)
a4=B.c1(f.r)
f.r=B.aF(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Ds(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.ro(d.a))
f.adi(t,j,new B.r(h,g))}}},
Zf(d,e,f,g,h){var w=this.aiT(d,e,f,g,h)
return w},
Ze(d,e,f,g){return this.Zf(d,e,f,g,null)},
aiT(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cG($.an().r):a5,f=J.Z(a3),e=f.gq(a3),d=i.fd(f.h(a3,0).a,a1,a4),a0=i.dF(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.f7(d,a0))
if(e===1)g.aA(new B.cp(d,a0))}else g.aA(new B.cp(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.u,t=1;t<e;t=o,u=j){s=i.fd(f.h(a3,t).a,a1,a4)
r=i.dF(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fd(f.h(a3,q).a,a1,a4)
q=i.dF(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fd(f.h(a3,n?o:t).a,a1,a4)
l=i.dF(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.LE(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.ik(r)}return g},
Zg(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.bw7(f)
v=J.Z(g)
u=s.fd(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aA(new B.cp(u,t))
u=s.fd(v.h(g,0).a,d,h)
w.aA(new B.cp(u,t))
w.aA(new B.cp(s.fd(v.h(g,0).a,d,h),s.dF(v.h(g,0).b,d,h)))
w.aA(new B.pg())
return w},
aiS(d,e,f,g,h){return this.Zg(d,e,f,g,h,!1)},
Zd(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.bw7(f)
v=J.Z(g)
u=t.fd(v.h(g,v.gq(g)-1).a,d,h)
w.aA(new B.cp(u,0))
u=t.fd(v.h(g,0).a,d,h)
w.aA(new B.cp(u,0))
w.aA(new B.cp(t.fd(v.h(g,0).a,d,h),t.dF(v.h(g,0).b,d,h)))
w.aA(new B.pg())
return w},
aiR(d,e,f,g,h){return this.Zd(d,e,f,g,h,!1)},
aRz(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fd(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dF(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fd(t.a,w,g)
s=r.r
s===$&&B.a()
A.bwv(s,q.b,q.c,new B.H(v,u,t,w.b))
d.a.fW(e,r.r)},
aRt(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
t=r.dF(t.b,w,g)
s=r.r
s===$&&B.a()
A.bwv(s,q.b,q.c,new B.H(v,0,u,t))
d.a.fW(e,r.r)},
aRx(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.O4(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.il:C.e0
u.e=C.eq
u.r=v.gp(0)
u.seU(null)
u.c=f.x
u.r=v.gp(0)
$.lr()
u.z=new B.zf(C.aC,w.c*0.57735+0.5)
d.a.fW(B.bw8(A.aAp(e,f.cy),w.b),this.f)},
aRv(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.il:C.e0
q.e=C.eq
q=f.b
q===$&&B.a()
q=s.fd(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dF(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fd(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dF(u.b,r,g)
t=s.f
A.bwv(t,f.r,f.w,new B.H(q,w,v,u))
t.z=null
t.c=f.x
A.bU7(t)
d.a.fW(A.aAp(e,f.cy),s.f)},
aRG(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bJ9(b1),b3=J.Z(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dH("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lr().ZL(b4,u.b)
s=u.a
r=w.k(0,C.iQ)?new B.kk(1):w
q=new B.tl(new B.hR(s,a8,a8,C.bq,a8,a8,a8,a8,a8,a8,t),C.cC,C.w,r,a8,a8,a8,a8,C.bx,a8)
q.afB(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.J)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fd(b7.a,a9,b9)
t=a7.dF(b7.b,a9,b9)
l=p+C.hL.geu()
k=o+(w-1)*4+(C.hL.gd_(0)+C.hL.gd1(0))
j=t-k-16
i=a7.ZM(b3,l,D.xs,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FG(new B.H(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bJ8(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lr().Kh(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lr().Kh(new B.F(t,w),0)
if(!C.H.k(0,C.H)){s=a7.Q
s===$&&B.a()
s.r=C.C.gp(0)
s.c=0}b5.VH(0,new A.aJS(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.J)(b0),++n){q=b0[n]
a5=A.bWK(q.r,q.w)
A:{if(D.DX===a5){a6=a3
break A}if(D.DY===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VH(0,new A.aJT(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zk(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fd(v[0].a,e,f)
return this.fd(v[v.length-1].a,e,f)-w},
Wm(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajj(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h3(t,new A.aJV())
return t.length===0?null:t},
ajj(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.J)(w),++r){q=w[r]
if(q.k(0,D.fM))continue
p=u.$2(e,new B.r(this.fd(q.a,d,h),this.dF(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hx(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q9(s,f,g,C.b.it(w,v),v.a,v.b)}else return null}}
A.vk.prototype={}
A.a6O.prototype={
bn(d){var w,v=this.e,u=B.bx(d,null,x.w).w.gcP(),t=new A.aJR()
t.a0Y()
$.an()
w=B.b_()
w.b=C.aW
t.f=w
w=B.b_()
w.b=C.bc
t.r=w
w=B.b_()
w.b=C.aW
t.w=w
w=B.b_()
w.b=C.bc
w.r=C.I.gp(0)
w.a=D.a0_
t.x=w
w=B.b_()
w.b=C.aW
w.r=C.C.gp(0)
t.y=w
w=B.b_()
w.b=C.bc
w.r=C.m.gp(0)
t.z=w
w=B.b_()
w.b=C.aW
w.r=C.I.gp(0)
w.c=1
t.Q=w
t=new A.aaS(this.d,v,u,t,d,C.bq,new B.br(),B.aK(x.v))
t.bk()
t.YH(v.cx)
t.aeK()
return t},
bz(d,e){e.sio(0,this.d)
e.sYs(this.e)
e.scP(B.bx(d,null,x.w).w.gcP())
e.B=d
e.bf()}}
A.aaS.prototype={
sio(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYs(d){var w=this
if(w.i3.k(0,d))return
w.i3=d
w.a0v(d.cx)
w.bf()},
scP(d){if(this.cW.k(0,d))return
this.cW=d
this.bf()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b0(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fX.i9(w,new A.a17(t,v),new A.vB(u.aC,u.i3,u.cW,x.o))
s.restore()},
ZF(d){var w=this,v=w.gC(0)
return new A.Oc(w.fX.Wm(d,v,new A.vB(w.aC,w.i3,w.cW,x.o)))}}
A.Nh.prototype={
K(){return"HorizontalAlignment."+this.b}}
A.a17.prototype={
aOO(d){this.a.a.clipRect(B.dO(d),$.oZ()[1],!0)
return null},
adq(d,e){d.aM(this.a,e)},
VH(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b0(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lr()
s.Yq(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Ds(d,e,f,g){var w=B.cG($.an().r)
w.aA(new B.f7(d.a,d.b))
w.aA(new B.cp(e.a,e.b))
this.a.fW(A.aAp(w,g),f)}}
A.za.prototype={
gbD(){return[this.a]}}
A.amc.prototype={}
A.a1h.prototype={}
A.b10.prototype={
Kh(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWG(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d2(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aWH(d,e){var w,v
if(d==null)return D.a0a
w=d.b
v=e/2
return d.aQ_(w>v?v:w)},
Oy(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZI(w)},
aZI(d){if(d<1)return this.aIL(d)
return this.a7S(d)},
aIL(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7S(d*q)/q},
a7S(d){var w,v=C.e.j(C.d.a2(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a2(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a2(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a2(Math.pow(10,v))
else return C.d.a2(Math.pow(10,v))},
aj7(d){if(d>=1)return 1
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
ZL(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iW
w=e.a?u.w.c4(e):e
v=B.bs(d,C.vt)
v=v==null?null:v.ay
return v===!0?w.c4(C.md):w},
aj_(d,e,f,g){var w=C.d.ad(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["G(qb)","D(eu)","~(v,fC)","G(e9,v)","R<~>()","G(G,qb)","bS(G,tn)","pv(G)","v(q9,q9)","I9(o0)","HO(C,bJ)","Jb(o1)","vp(@)","wi(@)","e9(G)","Cv(@)","ah(G,tn)","uK(dx<uK>)","DW(dx<aEs>)","G(vp)","G(wi)","wB(C,bJ)","B2(y)","~()","qb(@)","~(hj,KI?)","xt(@)","G(ii)","D(fC)","~(v,ii)","~(@)","jO(nJ)","c(nJ)","jO(bI<v,G>)","jO(G)","nJ(jO)","~(hj,Oc?)","e9(e9)","lF(Gt<lF>)","z6(@)","R<o1>(cj<o1>)","to(v)","uL(eu,G,e9,v)","rp(mU)","D(e9)","v(vk,vk)","G(fC)","R<o0>(cj<o0>)","v(v,v,G)","fC(fC,fC,G)","ii(ii,ii,G)","mw(mw,mw,G)","CM?(fC,v,ii,v)","E(fC)","c(G,tn)","eu(eu,eu,G)","D(G)","mQ(mQ,mQ,G)","nh(nh,nh,G)","kJ(kJ,kJ,G)","l8(l8,l8,G)","f(kJ)","f(l8)","e9(e9,e9,G)","mx(mx,mx,G)","uL(eu,G,e9,v{size:G?})","D(eu,e9)","G(r,r)","u<to>(e9,u<v>)","xX(y)","u<rp>(u<mU>)","E(mU)","yj(eZ<C?>)"])
A.aEo.prototype={
$1(d){var w=B.db(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qb(J.al(v==null?"":v),A.oV(w.h(0,"revenue_net")),A.oV(w.h(0,"expense_net")),A.oV(w.h(0,"result_net")))},
$S:z+24}
A.aEp.prototype={
$1(d){var w,v,u,t=B.db(x.f.a(d),x.N,x.z),s=B.am(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.am(t.h(0,"code"))
v=A.oV(t.h(0,"gross"))
u=B.bo(t.h(0,"purchases_count"))
u=u==null?null:C.d.a2(u)
if(u==null)u=0
return new A.vp(s,r,w,v,u,A.oV(t.h(0,"avg_basket")))},
$S:z+12}
A.aEq.prototype={
$1(d){var w,v=B.db(x.f.a(d),x.N,x.z),u=B.am(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.bo(v.h(0,"quantity"))
w=w==null?null:C.d.a2(w)
if(w==null)w=0
return new A.wi(u,t,w,A.oV(v.h(0,"gross")))},
$S:z+13}
A.aEH.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Z(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.Cv(v,u,J.al(t==null?"expense":t),A.u2(w.h(d,"net")),A.u2(w.h(d,"tax")),A.u2(w.h(d,"gross")))},
$S:z+15}
A.brR.prototype={
$1(d){return new A.uK(d.aq($.c0(),x.A))},
$S:z+17}
A.brS.prototype={
$1(d){return new A.DW(d.aq($.bNJ(),x.D))},
$S:z+18}
A.btG.prototype={
$1(d){return E.aEr()},
$S:z+38}
A.brT.prototype={
$1(d){var w=d.aq($.xe(),x.P)
return d.aq($.avg(),x.a).FP(w)},
$S:z+40}
A.brQ.prototype={
$1(d){var w=d.aq($.xe(),x.P)
return d.aq($.avg(),x.a).FL(w)},
$S:z+47}
A.brP.prototype={
$1(d){return this.aiJ(d)},
aiJ(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.aq($.c0(),x.A).hm("finance_balance_kpis",t),$async$$1)
case 3:s=r.db(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:226}
A.aEn.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.avg(),x.a).pz(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEm.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aJ(0,$.avg(),x.a).Lq(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEF.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.but()
if(s.e==null)B.U(B.Y(y.b))
s.gcq().ck(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aEx.prototype={
$0(){return this.a.Jh(this.b,this.c)},
$S:0}
A.aEy.prototype={
$0(){return this.a.Bd(this.b,this.c)},
$S:0}
A.aEz.prototype={
$0(){var w=x.z
return B.bf(this.a,!1).ec(B.ej(new A.aEw(),null,w),w)},
$S:0}
A.aEw.prototype={
$1(d){return F.CZ},
$S:z+69}
A.aEA.prototype={
$0(){return B.o6(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aEB.prototype={
$0(){var w=this
return w.a.Be(w.b,w.c,w.d)},
$S:0}
A.aEE.prototype={
$0(){return D.arG},
$S:138}
A.aED.prototype={
$2(d,e){return new A.HO(B.j(d),null)},
$S:z+10}
A.aEC.prototype={
$1(d){return new A.Jb(d,null)},
$S:z+11}
A.aEv.prototype={
$1(d){var w=null,v=this.a,u=$.dP()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.lu(B.b([B.dM(C.cW,w,w,new A.aEt(u),w,w),B.dS(F.v6,new A.aEu(u),B.dJ(C.n,C.h,w,w,w,w,w))],x.p),w,v,F.v7)},
$S:55}
A.aEt.prototype={
$0(){B.bf(this.a,!1).dh(!1)
return null},
$S:0}
A.aEu.prototype={
$0(){B.bf(this.a,!1).dh(!0)
return null},
$S:0}
A.bgA.prototype={
$0(){var w=this.a.aJ(0,$.xe().ghN(),x.V),v=E.aEr()
w.ws(0,v)
return v},
$S:0}
A.bgB.prototype={
$0(){var w=this.a.aJ(0,$.xe().ghN(),x.V),v=new B.bb(Date.now(),0,!1),u=new E.lF(B.bO(B.aZ(v),1,1,0,0,0,0),v)
w.ws(0,u)
return u},
$S:0}
A.bgC.prototype={
$0(){return this.a.IC(this.b,this.c)},
$S:0}
A.bgz.prototype={
$2(d,e){return new B.oB(B.W(d).aPl(B.W(d).ax.aQe(C.h,C.n)),e,null)},
$S:1004}
A.bmU.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dz(),s=A.NX(!1,C.nQ,"Umsatz 7 %",t.ap(u.a),w),r=A.NX(!1,C.nQ,"Umsatz 19 %",t.ap(u.b),w),q=A.NX(!0,D.aav,"Umsatz netto",t.ap(u.c),w),p=A.NX(!1,D.aau,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return B.Nd(1.7,B.b([s,r,q,p,A.NX(!0,C.nI,"Ergebnis",n,o<0?C.ah:C.aj),A.NX(!1,C.fO,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.fs,!0)},
$S:98}
A.aJx.prototype={
$0(){return D.arD},
$S:138}
A.aJw.prototype={
$2(d,e){var w=null
return B.by(C.ah,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,B.z(C.h,13,C.l),w,w,w),C.fJ,w,C.D,w,3)},
$S:279}
A.aJv.prototype={
$1(d){return new A.I9(d,null)},
$S:z+9}
A.bdR.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dz(),i=j.ap(k.c),h=l.w,g=l.d,f=B.ad(g).i("aa<1,G>"),e=f.i("aw.E"),d=B.Q(new B.aa(g,new A.bdG(),f),e)
i=A.jD(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.aa(g,new A.bdH(),f),e)
d=A.jD(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.aa(g,new A.bdI(),f),e)
k=A.jD(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.Q(new B.aa(g,new A.bdJ(),f),e)
w=A.jD(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.Q(new B.aa(g,new A.bdK(),f),e)
v=A.jD(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.Q(new B.aa(g,new A.bdL(),f),e)
u=A.jD(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.Q(new B.aa(g,new A.bdM(),f),e)
t=A.jD(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.aa(g,new A.bdN(),f),e)
h=A.jD(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.aa(g,new A.bdO(m),f),e)
m=A.jD(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.aa(g,new A.bdP(l),f),e)
l=A.jD(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.Q(new B.aa(g,new A.bdQ(j),f),e)
return B.Nd(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jD(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.fs,!0)},
$S:98}
A.bdG.prototype={
$1(d){return d.b},
$S:z+0}
A.bdH.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bdI.prototype={
$1(d){return d.d},
$S:z+0}
A.bdJ.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bdK.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bdL.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bdM.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bdN.prototype={
$1(d){return d.d},
$S:z+0}
A.bdO.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bdP.prototype={
$1(d){return this.a},
$S:z+0}
A.bdQ.prototype={
$1(d){return this.a},
$S:z+0}
A.bdS.prototype={
$0(){return A.byo(this.b,1.45,new A.TI(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bdT.prototype={
$0(){return A.byo(this.b,1.6,new A.TU(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bqZ.prototype={
$1(d){var w=this,v=null,u=B.aB(16),t=x.p,s=B.b([B.ak(B.b([B.az(B.i(w.a,v,v,v,B.bE(C.h,18,C.o),v,v,v),1),B.fg(v,v,D.acD,v,v,new A.bqY(d),v,v,v,"Schlie\xdfen",v)],t),C.k,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.i(w.b,v,v,v,B.z(C.t,12,C.aK),v,v,v),C.E],t))
s.push(C.v)
s.push(new B.aS(17976931348623157e292,v,new B.lw(w.c,w.d,v),v))
return B.a4b(v,C.m,new B.ae(C.af,B.ac(s,C.A,C.f,C.N),v),v,v,v,C.fL,C.uQ,v,new B.d4(u,C.H),v)},
$S:1005}
A.bqY.prototype={
$0(){return B.bf(this.a,!1).f2()},
$S:0}
A.bdU.prototype={
$0(){var w=this.a,v=B.b1(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.byo(this.b,2.4,new A.Y0(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bm3.prototype={
$2(d,e){return d<e?d:e},
$S:43}
A.bm4.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bm5.prototype={
$1(d){return A.aJM(null,1.4,null,C.ah,0.35,D.agT,D.DO,null,!1,!1,!1,!1,D.Fb,!1,10,D.YB,!0,C.lo,B.b([new A.eu(0,d),new A.eu(this.a,d)],x.U))},
$S:z+14}
A.b4K.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b4M.prototype={
$2(d,e){var w=null
return B.i(this.a.aK1(d),w,w,w,B.z(C.t,10,C.L),w,w,w)},
$S:z+16}
A.b4N.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=this.a.length)return C.uY
return new B.ae(C.kU,B.i(C.c.cV(this.a[v].a,5),w,w,w,B.z(C.t,9,C.L),w,w,w),w)},
$S:z+6}
A.b4L.prototype={
$1(d){return D.a95},
$S:z+7}
A.b5x.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5y.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b5z.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b5A.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=3)return C.uY
return new B.ae(C.kU,B.i(this.a[v],w,w,w,B.z(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.ben.prototype={
$1(d){return d.d},
$S:z+19}
A.beo.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.bob.prototype={
$1(d){return d.d},
$S:z+20}
A.boc.prototype={
$2(d,e){return d>e?d:e},
$S:43}
A.b3a.prototype={
$0(){return D.arL},
$S:138}
A.b39.prototype={
$2(d,e){return new A.wB("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b38.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.ac(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,B.z(C.h,14,C.L),m,m,m),C.E,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.z(C.t,12.5,C.l),m,m,m),C.v,B.ki(C.cb,B.b([B.hq(C.EK,D.aF1,new A.b32(w,v),m),B.hq(D.ach,D.aDY,new A.b33(w,v),m)],u),C.ds,8,8)],u),C.A,C.f,C.i),C.ad,m,C.D,m,3)}w=new A.b3b(d)
t=C.b.fA(n.a.e.d,0,new A.b34())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.jj(new A.b35(new A.b3c(w),r,w,s))
v=J.Z(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ac(B.b([w,C.E,B.ak(B.b([B.az(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.z(C.t,11,C.l),m,m,m),1),B.oz(D.adq,D.aEi,new A.b36(q,p),m),B.oz(D.ad5,D.aE3,new A.b37(q,p,d),m)],o),C.k,C.f,C.i,0,m,m)],o),C.aa,C.f,C.i)},
$S:265}
A.b32.prototype={
$0(){return A.auA(this.a,this.b,null)},
$S:0}
A.b33.prototype={
$0(){return A.aux(this.a,this.b)},
$S:0}
A.b3b.prototype={
$1(d){var w=B.bo(J.a3(this.a,d))
return w==null?null:w},
$S:1006}
A.b3c.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b1(w,".",",")+" %"}return w},
$S:34}
A.b34.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b35.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jD(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hV,o.$1("liquidity1_pct")),m=A.jD(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hV,o.$1("liquidity2_pct")),l=A.jD(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hV,o.$1("liquidity3_pct"))
o=A.jD(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hV,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b1(w,".",",")+" %"}w=A.jD(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hV,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dz()
v=u.ap(v)
return B.Nd(p,B.b([n,m,l,o,w,A.jD(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.hV,v)],x.p),q,12,12,C.fs,!0)},
$S:98}
A.b36.prototype={
$0(){return A.aux(this.a,this.b)},
$S:0}
A.b37.prototype={
$0(){return A.auA(this.a,this.b,this.c)},
$S:0}
A.bqX.prototype={
$1(d){return new A.B2(this.a,new A.bqW(this.b),this.c,null)},
$S:z+22}
A.bqW.prototype={
$0(){var w=this.a,v=$.bus()
if(w.e==null)B.U(B.Y(y.b))
w.gcq().ck(v)},
$S:0}
A.b2X.prototype={
$0(){},
$S:0}
A.b2Y.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b2Z.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b30.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.u8(u.b,B.bO(2024,1,1,0,0,0,0),null,r,new B.bb(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b3_(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b3_.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b31.prototype={
$0(){return B.bf(this.a,!1).f2()},
$S:0}
A.b3d.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b3e.prototype={
$1(d){return new A.xt(x.B.a(d),this.a.a.r)},
$S:z+26}
A.axg.prototype={
$1(d){return d.e},
$S:z+27}
A.axh.prototype={
$2(d,e){return d+e},
$S:43}
A.axj.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.axl.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gds(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.axm.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eP(t,r)
s=s.x
s===$&&B.a()
w.eP(t,s)
u.adq(v.d,v.e)},
$S:0}
A.ax_.prototype={
$1(d){return 0},
$S:1007}
A.awZ.prototype={
$2(d,e){return B.f9(C.bR,this.a.al4(e),C.q,C.bm,null)},
$S:1008}
A.aYs.prototype={
$1(d){return d.a},
$S:z+31}
A.aYt.prototype={
$1(d){return d.b},
$S:z+32}
A.aYu.prototype={
$1(d){return new A.jO(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aYv.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mw||v===D.dJ))t=1-t
return new A.jO(d,t*w.d)},
$S:z+34}
A.aYw.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gox(),p=d.a
r.gox()
r=$.lr()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aj7(Math.abs(s.b-s.c)))
t=""}if(C.c.hJ(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nJ(d,q.c.b.$2(p,new A.tn(u+t,s.e)))},
$S:z+35}
A.aTM.prototype={
$1(d){this.a.l6(new A.a51(d))},
$S:172}
A.aTN.prototype={
$1(d){this.a.l6(new A.a52(d))},
$S:42}
A.aTO.prototype={
$1(d){this.a.l6(new A.a53(d))},
$S:29}
A.aTP.prototype={
$0(){this.a.l6(D.a1N)},
$S:0}
A.aTQ.prototype={
$1(d){this.a.l6(new A.MN())},
$S:45}
A.aTR.prototype={
$1(d){this.a.l6(new A.a56(d))},
$S:41}
A.aTS.prototype={
$0(){this.a.l6(D.a1O)},
$S:0}
A.aTT.prototype={
$1(d){this.a.l6(new A.MQ(d))},
$S:84}
A.aTU.prototype={
$1(d){this.a.l6(new A.a50(d))},
$S:171}
A.aTV.prototype={
$1(d){this.a.l6(new A.a5_(d))},
$S:170}
A.aTW.prototype={
$1(d){return this.a.l6(new A.ML(d))},
$S:169}
A.aTX.prototype={
$1(d){return this.a.l6(new A.a54(d))},
$S:65}
A.aTY.prototype={
$1(d){return this.a.l6(new A.MO(d))},
$S:60}
A.be4.prototype={
$1(d){var w=this.a.db.h(0,C.b.it(this.b.ch,d))
return d.aPV(w==null?B.b([],x.t):w)},
$S:z+37}
A.be2.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.be3.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h3(w,new A.be1())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.Gi(w))},
$S:0}
A.be1.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.be5.prototype={
$1(d){return new A.z6(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aJN.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.brF.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bD2(t?A.byc(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.to(w,new A.yl(!0,A.bz0(),new A.brE(v)))},
$S:z+41}
A.brE.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bRE(A.byc(d,e,f),w,A.c_n(d,e,f))},
$S:z+42}
A.brC.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iX(v,v,u==null?D.dm:u,v,v,v,v,v,v,v,v,14,v,v,C.L,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rp(C.d.j(d.b),w)},
$S:z+43}
A.aJP.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aJQ.prototype={
$1(d){return!d.k(0,D.fM)},
$S:z+1}
A.aJU.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aJS.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eP(v,t)
u=u.Q
u===$&&B.a()
w.eP(v,u)},
$S:0}
A.aJT.prototype={
$0(){this.a.adq(this.b,this.c)},
$S:0}
A.aJV.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.ax9.prototype={
$1(d){return d.gds(0)},
$S:z+46}
A.axa.prototype={
$2(d,e){return d+e},
$S:43}
A.axd.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iN(v,B.ad(v).i("iN<1>")).aw(0,new A.axe(w,this.a/(u+1),this.c))},
$S:0}
A.axe.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gds(0)/2
this.c[d]=v
w.a=v+e.gds(0)/2},
$S:z+2}
A.axb.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gds(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gds(0)/2},
$S:z+2}
A.axc.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gds(0)/2
this.c[d]=u
u+=e.gds(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aGV.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1009}
A.aAq.prototype={
$1(d){return d},
$S:1010};(function aliases(){var w=A.KB.prototype
w.a_L=w.i9
w.alp=w.aRC
w.alq=w.adj
w=A.Ti.prototype
w.ao0=w.l
w=A.KL.prototype
w.a_M=w.i9
w=A.FS.prototype
w.a0v=w.YH})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c30","bRB",72)
var q
v(q=A.Tk.prototype,"gaDZ","aE_",23)
v(q,"gaD2","HS",4)
v(q,"gaDJ","I2",4)
u(A.Tl.prototype,"garR","arS",25)
t(A,"c1P",3,null,["$3"],["bOW"],49,0)
t(A,"c1Q",3,null,["$3"],["bOX"],50,0)
t(A,"c1R",3,null,["$3"],["bOY"],51,0)
t(A,"c1T",4,null,["$4"],["c2E"],52,0)
w(A,"c1S","c2D",53)
s(A,"byu","c2F",54)
t(A,"c1K",3,null,["$3"],["bRF"],55,0)
w(A,"a_a","c52",56)
w(A,"auC","c2I",7)
t(A,"c1M",3,null,["$3"],["bSr"],57,0)
t(A,"c1O",3,null,["$3"],["bXC"],58,0)
t(A,"c1L",3,null,["$3"],["bSq"],59,0)
t(A,"c1N",3,null,["$3"],["bXB"],60,0)
w(A,"cc9","bSp",61)
w(A,"cca","bXA",62)
r(A.XQ.prototype,"ga4a","axj",30)
u(A.VE.prototype,"gayB","ayC",36)
t(A,"c3U",3,null,["$3"],["bST"],63,0)
t(A,"c3T",3,null,["$3"],["bP_"],64,0)
w(A,"c3X","c53",1)
t(A,"bJw",4,null,["$5$size","$4"],["bI_",function(d,e,f,g){return A.bI_(d,e,f,g,null)}],65,0)
s(A,"bz0","c51",66)
s(A,"bJx","c1x",67)
s(A,"bJA","c2L",68)
s(A,"bJz","c2H",3)
s(A,"bJy","c2G",3)
w(A,"c3W","bJ9",70)
w(A,"c3V","bJ8",71)
t(A,"a_f",3,null,["$3"],["c3S"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.P,[A.a6A,A.ag2,A.alk,A.II,A.Jb,A.ag0,A.HO,A.I9,A.akE,A.alS,A.Uu,A.Y0,A.TI,A.TU,A.aml,A.aiG,A.C_,A.as1,A.wB,A.KC,A.Au])
u(B.C,[A.uK,A.DW,A.be,A.ah8,A.agZ,A.ah0,A.ah1,A.agR,A.ako,A.ah4,A.ah2,A.axv,A.as5,A.axi,A.ah_,A.KL,A.a5D,A.tn,A.aqu,A.aqt,A.agQ,A.akn,A.eu,A.akk,A.akm,A.aoH,A.alb,A.asJ,A.akl,A.ak2,A.akj,A.awY,A.be_,A.ax0,A.agN,A.nJ,A.akg,A.akh,A.vB,A.hj,A.am_,A.am2,A.agW,A.ah9,A.agX,A.aki,A.am5,A.am3,A.as4,A.aqs,A.aJO,A.am1,A.vk,A.a17,A.amc,A.a1h,A.b10])
u(B.uI,[A.qb,A.vp,A.wi,A.azQ,A.aAW,A.o0,A.Cv,A.o1])
u(B.nO,[A.aEo,A.aEp,A.aEq,A.aEH,A.brR,A.brS,A.btG,A.brT,A.brQ,A.brP,A.aEw,A.aEC,A.aEv,A.aJv,A.bdG,A.bdH,A.bdI,A.bdJ,A.bdK,A.bdL,A.bdM,A.bdN,A.bdO,A.bdP,A.bdQ,A.bqZ,A.bm5,A.b4L,A.b5x,A.b5y,A.ben,A.bob,A.b38,A.b3b,A.b3c,A.bqX,A.b3e,A.axg,A.axj,A.ax_,A.aYs,A.aYt,A.aYu,A.aYv,A.aYw,A.aTM,A.aTN,A.aTO,A.aTQ,A.aTR,A.aTT,A.aTU,A.aTV,A.aTW,A.aTX,A.aTY,A.be4,A.be5,A.aJN,A.brF,A.brE,A.brC,A.aJP,A.aJQ,A.ax9,A.aAq])
t(A.yj,B.fy)
u(B.xJ,[A.aEn,A.aEm,A.aEF,A.aEx,A.aEy,A.aEz,A.aEA,A.aEB,A.aEE,A.aEt,A.aEu,A.bgA,A.bgB,A.bgC,A.aJx,A.bdS,A.bdT,A.bqY,A.bdU,A.b3a,A.b32,A.b33,A.b36,A.b37,A.bqW,A.b2X,A.b2Y,A.b2Z,A.b30,A.b3_,A.b31,A.b3d,A.axm,A.aTP,A.aTS,A.be2,A.be3,A.aJS,A.aJT,A.axd])
u(B.xR,[A.yk,A.anz,A.a6B,A.agV])
u(B.xK,[A.aED,A.bgz,A.bmU,A.aJw,A.bdR,A.bm3,A.bm4,A.b4K,A.b4M,A.b4N,A.b5z,A.b5A,A.beo,A.boc,A.b39,A.b34,A.b35,A.axh,A.axl,A.awZ,A.be1,A.aJU,A.aJV,A.axa,A.axe,A.axb,A.axc,A.aGV])
u(B.M,[A.B2,A.Rj])
u(B.a0,[A.Tk,A.XQ])
u(B.Nu,[A.KH,A.Oa])
u(B.ui,[A.Tl,A.VE])
t(A.a0J,A.ah8)
t(A.agM,A.a0J)
t(A.a0t,A.agM)
u(A.a0t,[A.agY,A.am0])
t(A.nK,A.agY)
u(B.HN,[A.ax7,A.adw,A.CL,A.aDN,A.aJy,A.Nh])
t(A.fC,A.agZ)
t(A.ii,A.ah0)
t(A.mw,A.ah1)
t(A.a0A,A.agR)
t(A.MR,A.ako)
u(A.MR,[A.ah3,A.am4])
t(A.a0F,A.ah3)
t(A.a0G,A.ah4)
t(A.CM,A.ah2)
u(A.axv,[A.KI,A.Oc])
t(A.ady,A.as5)
t(A.ah5,A.ady)
t(A.a0H,A.ah5)
u(B.b4,[A.xt,A.z6])
t(A.uo,A.ah_)
t(A.KB,A.KL)
u(A.KB,[A.axk,A.aJR])
u(B.O6,[A.a0D,A.a6O])
u(B.K,[A.FS,A.agO])
u(A.FS,[A.aaF,A.aaS])
t(A.q1,A.aqu)
t(A.ac5,A.aqt)
t(A.p8,A.agQ)
t(A.uM,A.akn)
t(A.ym,A.akk)
t(A.pv,A.akm)
t(A.PU,A.aoH)
t(A.mQ,A.alb)
t(A.nh,A.asJ)
u(A.pv,[A.ala,A.asI])
t(A.kJ,A.ala)
t(A.l8,A.asI)
t(A.a4Z,A.akl)
u(A.a4Z,[A.al9,A.asH])
t(A.a5O,A.al9)
t(A.adU,A.asH)
t(A.MA,A.ak2)
t(A.uL,A.akj)
t(A.MK,A.uL)
t(A.ac6,B.h2)
t(A.agP,A.agO)
t(A.Ti,A.agP)
t(A.a0u,A.Ti)
t(A.jO,A.agN)
t(A.a4W,A.akg)
t(A.a4Y,A.akh)
u(A.hj,[A.a51,A.a52,A.a53,A.MM,A.MN,A.a56,A.MP,A.MQ,A.a50,A.a5_,A.ML,A.a54,A.a55,A.MO])
t(A.pI,A.am0)
t(A.e9,A.am_)
t(A.Ob,A.am2)
t(A.a0C,A.agW)
t(A.mx,A.ah9)
t(A.KG,A.agX)
t(A.yl,A.aki)
t(A.Ex,A.am4)
t(A.a6P,A.am5)
t(A.alZ,A.eu)
t(A.mU,A.alZ)
t(A.q9,A.mU)
t(A.rp,A.am3)
t(A.to,A.as4)
t(A.Gi,A.aqs)
t(A.z7,A.am1)
t(A.za,A.amc)
w(A.agR,A.be)
w(A.agY,A.be)
w(A.agZ,A.be)
w(A.ah0,A.be)
w(A.ah1,A.be)
w(A.ah2,A.be)
w(A.ah3,A.be)
w(A.ah4,A.be)
w(A.ah5,A.be)
w(A.ah_,A.be)
w(A.agM,A.be)
w(A.agQ,A.be)
w(A.ak2,A.be)
w(A.akj,A.be)
w(A.akk,A.be)
w(A.akm,A.be)
w(A.akn,A.be)
w(A.ala,A.be)
w(A.al9,A.be)
w(A.alb,A.be)
w(A.aoH,A.be)
w(A.aqt,A.be)
w(A.aqu,A.be)
w(A.as5,A.be)
w(A.asI,A.be)
w(A.asH,A.be)
w(A.asJ,A.be)
w(A.agN,A.be)
v(A.agO,B.aC)
w(A.agP,B.e6)
v(A.Ti,B.a3V)
w(A.ah8,A.be)
w(A.akg,A.be)
w(A.akh,A.be)
w(A.ako,A.be)
w(A.agW,A.be)
w(A.agX,A.be)
w(A.ah9,A.be)
w(A.aki,A.be)
w(A.akl,A.be)
w(A.alZ,A.be)
w(A.am_,A.be)
w(A.am0,A.be)
w(A.am2,A.be)
w(A.am3,A.be)
w(A.am4,A.be)
w(A.am5,A.be)
w(A.aqs,A.be)
w(A.as4,A.be)
w(A.am1,A.be)
w(A.amc,A.be)})()
B.bop(b.typeUniverse,JSON.parse('{"a6A":{"P":[],"c":[]},"DW":{"aEs":[]},"yj":{"fy":["bg<~>"],"fy.T":"bg<~>"},"Jb":{"P":[],"c":[]},"HO":{"P":[],"c":[]},"yk":{"bj":[],"M":[],"c":[]},"ag2":{"P":[],"c":[]},"alk":{"P":[],"c":[]},"anz":{"bj":[],"M":[],"c":[]},"II":{"P":[],"c":[]},"ag0":{"P":[],"c":[]},"I9":{"P":[],"c":[]},"wB":{"P":[],"c":[]},"B2":{"M":[],"c":[]},"a6B":{"bj":[],"M":[],"c":[]},"akE":{"P":[],"c":[]},"alS":{"P":[],"c":[]},"Uu":{"P":[],"c":[]},"Y0":{"P":[],"c":[]},"TI":{"P":[],"c":[]},"TU":{"P":[],"c":[]},"aml":{"P":[],"c":[]},"aiG":{"P":[],"c":[]},"C_":{"P":[],"c":[]},"as1":{"P":[],"c":[]},"agV":{"bj":[],"M":[],"c":[]},"Tk":{"a0":["B2"]},"KH":{"M":[],"c":[]},"Tl":{"a0":["KH"]},"nK":{"be":[]},"fC":{"be":[]},"ii":{"be":[]},"mw":{"be":[]},"CM":{"be":[]},"xt":{"b4":["nK"],"b5":["nK"],"b5.T":"nK","b4.T":"nK"},"a0A":{"be":[]},"a0F":{"be":[]},"a0G":{"be":[]},"a0H":{"be":[]},"uo":{"be":[]},"a0D":{"aX":[],"c":[]},"aaF":{"K":[],"L":[],"jm":[],"aU":[]},"pv":{"be":[]},"mQ":{"be":[]},"nh":{"be":[]},"kJ":{"be":[]},"l8":{"be":[]},"uL":{"be":[]},"a0t":{"be":[]},"q1":{"be":[]},"ac5":{"be":[]},"p8":{"be":[]},"uM":{"be":[]},"ym":{"be":[]},"ady":{"be":[]},"PU":{"be":[]},"a5O":{"be":[]},"adU":{"be":[]},"MA":{"be":[]},"MK":{"be":[]},"KC":{"P":[],"c":[]},"Rj":{"M":[],"c":[]},"XQ":{"a0":["Rj"]},"jO":{"be":[]},"ac6":{"h2":[],"aX":[],"c":[]},"a0u":{"e6":["K","hk"],"K":[],"aC":["K","hk"],"L":[],"aU":[],"aC.1":"hk","e6.1":"hk","aC.0":"K"},"Au":{"P":[],"c":[]},"a0J":{"be":[]},"a4W":{"be":[]},"MR":{"be":[]},"a4Y":{"be":[]},"a51":{"hj":[]},"a52":{"hj":[]},"a53":{"hj":[]},"MM":{"hj":[]},"MN":{"hj":[]},"a56":{"hj":[]},"MP":{"hj":[]},"MQ":{"hj":[]},"a50":{"hj":[]},"a5_":{"hj":[]},"ML":{"hj":[]},"a54":{"hj":[]},"a55":{"hj":[]},"MO":{"hj":[]},"FS":{"K":[],"L":[],"jm":[],"aU":[]},"Oa":{"M":[],"c":[]},"VE":{"a0":["Oa"]},"pI":{"be":[]},"e9":{"be":[]},"mx":{"be":[]},"mU":{"eu":[],"be":[]},"q9":{"mU":[],"eu":[],"be":[]},"rp":{"be":[]},"to":{"be":[]},"Gi":{"be":[]},"z6":{"b4":["pI"],"b5":["pI"],"b5.T":"pI","b4.T":"pI"},"Ob":{"be":[]},"a0C":{"be":[]},"KG":{"be":[]},"yl":{"be":[]},"a4Z":{"be":[]},"Ex":{"be":[]},"a6P":{"be":[]},"z7":{"be":[]},"a6O":{"aX":[],"c":[]},"aaS":{"K":[],"L":[],"jm":[],"aU":[]},"za":{"be":[]}}'))
B.bHu(b.typeUniverse,JSON.parse('{"KB":1,"MR":1,"KL":1,"FS":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("Cv"),e:w("bg<o0>"),aN:w("bg<o1>"),fM:w("bg<a1<f,@>?>"),b:w("bg<~>"),W:w("jO"),B:w("nK"),dB:w("fC"),T:w("uo"),fj:w("ii"),G:w("mw"),J:w("mx"),k:w("at"),cX:w("a1h<G>"),dO:w("uw"),R:w("aj<f,@>"),v:w("hG"),bz:w("lA<bb>"),f0:w("nU"),E:w("be"),F:w("yj"),X:w("o0"),P:w("lF"),D:w("uK"),a:w("aEs"),d:w("o1"),cw:w("eu"),L:w("hk"),m:w("dn<v,E>"),cm:w("kJ"),dv:w("mQ"),g:w("B<nJ>"),O:w("B<fC>"),Y:w("B<ii>"),C:w("B<bvo>"),U:w("B<eu>"),K:w("B<a5D>"),u:w("B<e9>"),bC:w("B<vk>"),aA:w("B<u<eu>>"),r:w("B<Gi>"),s:w("B<f>"),eg:w("B<tl>"),df:w("B<q9>"),p:w("B<c>"),n:w("B<G>"),t:w("B<v>"),eF:w("bh<a0<M>>"),Z:w("mU"),cz:w("e9"),hf:w("pI"),dj:w("z7"),fT:w("rp"),c_:w("il<oO<bg<~>>>"),x:w("za<fC>"),y:w("za<e9>"),I:w("u<v>"),ef:w("vp"),c:w("a1<f,@>"),f:w("a1<@,@>"),gj:w("aa<G,G>"),w:w("k0"),aU:w("C"),Q:w("vB<nK>"),o:w("vB<pI>"),eo:w("pS"),gJ:w("pT"),V:w("na<lF>"),N:w("f"),A:w("nc"),bO:w("bM"),er:w("tl"),j:w("wi"),dw:w("q9"),bY:w("to"),cZ:w("qb"),gc:w("kh"),es:w("l8"),bN:w("nh"),l:w("c"),q:w("wU"),g4:w("ic<G>"),cJ:w("D"),i:w("G"),z:w("@"),S:w("v"),bn:w("xt?"),f3:w("z6?"),M:w("u<@>?"),h:w("a1<f,@>?"),fF:w("a1<@,@>?"),cK:w("C?"),aD:w("kh?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AU=new B.lv(C.n,B.au("lv<E>"))
D.B0=new A.CL(0,"left")
D.mw=new A.CL(1,"top")
D.B1=new A.CL(2,"right")
D.dJ=new A.CL(3,"bottom")
D.avr=new A.q1(!1,A.byu(),22,null)
D.kn=new A.p8(16,null,D.avr,!0)
D.a96=new A.pv(C.C,null,2,null)
D.vX=new A.KG(!1,D.a96,A.c3X(),!0)
D.a_R=new A.ax7(3,"spaceEvenly")
D.a0_=new B.xx(6,"dstIn")
D.XS=new B.aW(3,3)
D.B5=new B.d2(D.XS,D.XS,C.a1,C.a1)
D.a0a=new B.bl(C.C,0,C.T,-1)
D.BE=new A.a4Y()
D.a1N=new A.MM()
D.a1O=new A.MP()
D.aMV=new A.ac5()
D.alC=w([],B.au("B<kJ>"))
D.alD=w([],B.au("B<l8>"))
D.DK=new A.MA(D.alC,D.alD,!0)
D.a8Q=new B.dI("Zeitraum",!1,null)
D.a8U=new B.dI("Konten (SKR 03)",!1,null)
D.xs=new A.aDN(0,"center")
D.aN6=new A.yl(!0,A.bz0(),A.bJw())
D.DO=new A.yl(!1,A.bz0(),A.bJw())
D.DP=new A.ym(!1,!0,null,A.auC(),A.a_a(),!0,null,A.auC(),A.a_a())
D.aN7=new A.ym(!0,!0,null,A.auC(),A.a_a(),!0,null,A.auC(),A.a_a())
D.a45=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3R=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a4f=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a49=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3B=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3A=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4B=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3Z=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4E=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a4y=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.apJ=new B.dn([50,D.a45,100,D.a3R,200,D.a4f,300,D.a49,400,D.a3B,500,D.a3A,600,D.a4B,700,D.a3Z,800,D.a4E,900,D.a4y],x.m)
D.dm=new B.rv(D.apJ,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ahP=w([8,4],x.t)
D.a94=new A.pv(D.dm,null,0.4,D.ahP)
D.a95=new A.pv(C.a6,null,0.5,null)
D.fM=new A.eu(0/0,0/0)
D.avt=new A.q1(!0,A.byu(),44,null)
D.mx=new A.p8(16,null,D.avt,!0)
D.avs=new A.q1(!0,A.byu(),30,null)
D.my=new A.p8(16,null,D.avs,!0)
D.a97=new A.uM(!1,D.mx,D.my,D.mx,D.my)
D.aN8=new A.uM(!0,D.mx,D.my,D.mx,D.my)
D.DX=new A.Nh(0,"left")
D.a9J=new A.Nh(1,"center")
D.DY=new A.Nh(2,"right")
D.a9O=new B.a8(57495,"MaterialIcons",null,!1)
D.xK=new B.a8(58927,"MaterialIcons",null,!1)
D.aau=new B.a8(59005,"MaterialIcons",null,!0)
D.aav=new B.a8(59007,"MaterialIcons",null,!0)
D.aaw=new B.a8(59011,"MaterialIcons",null,!1)
D.abo=new B.a8(62589,"MaterialIcons",null,!1)
D.aaJ=new B.a8(61349,"MaterialIcons",null,!1)
D.ace=new B.aD(D.aaJ,20,C.h,null,null)
D.aaQ=new B.a8(61487,"MaterialIcons",null,!1)
D.acg=new B.aD(D.aaQ,18,null,null,null)
D.ach=new B.aD(D.xK,18,null,null,null)
D.acD=new B.aD(C.je,null,C.h,null,null)
D.acE=new B.aD(C.l6,null,C.t,null,null)
D.ad5=new B.aD(C.nM,16,null,null,null)
D.adb=new B.aD(C.xS,16,null,null,null)
D.a9Z=new B.a8(57912,"MaterialIcons",null,!1)
D.add=new B.aD(D.a9Z,null,C.ah,null,null)
D.abm=new B.a8(62584,"MaterialIcons",null,!1)
D.adl=new B.aD(D.abm,16,null,null,null)
D.adq=new B.aD(D.xK,16,null,null,null)
D.afr=new A.a6B(null)
D.aNd=new A.aJy(0,"horizontal")
D.y3=new A.z7(0,0,0,0,!1)
D.Fb=new A.Ob(0.5)
D.BK=new A.a6P()
D.afv=new A.Ex(D.BK,A.bJA(),10,A.bJx(),!0,A.bJz(),A.bJy(),!1,null,null,null)
D.aNf=new A.Ex(D.BK,A.bJA(),10,A.bJx(),!0,A.bJz(),A.bJy(),!0,null,null,null)
D.agT=w([4,3],x.t)
D.atF=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.atv=new B.aI("receivables","Forderungen (kurzfristig)")
D.atk=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.ati=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.at8=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.atd=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.atC=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.atu=new B.aI("equity","Eigenkapital")
D.pr=w([D.atF,D.atv,D.atk,D.ati,D.at8,D.atd,D.atC,D.atu],B.au("B<+(f,f)>"))
D.aNi=w([],x.g)
D.alo=w([],x.O)
D.alp=w([],x.Y)
D.alq=w([],B.au("B<mw>"))
D.alr=w([],B.au("B<mx>"))
D.aNj=w([],x.U)
D.aNk=w([],x.u)
D.als=w([],x.r)
D.aqk={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tv={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yI=new B.aj(D.Tv,[0,0,0,0,0,0,0,C.c6],B.au("aj<f,C>"))
D.aqi={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.apD=new B.aj(D.aqi,[0,0,0,0],B.au("aj<f,v>"))
D.aqz={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ap_=new B.aj(D.aqz,[0,0,0,0,null,null,null,null],B.au("aj<f,v?>"))
D.aoU=new B.aj(D.aqk,[D.yI,D.yI,D.yI,C.c6,C.c6,C.c6,D.apD,D.ap_],x.R)
D.apc=new B.aj(D.Tv,[0,0,0,0,0,0,0,C.cO],x.R)
D.aql={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.ape=new B.aj(D.aql,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("aj<f,G>"))
D.aqh={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.apE=new B.aj(D.aqh,[0,0,0,0,0,0,0,C.cO],x.R)
D.aqK={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.apF=new B.aj(D.aqK,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("aj<f,f>"))
D.a4J=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4R=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3E=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a41=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a4b=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a55=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a3q=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a43=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a4e=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a4z=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.apK=new B.dn([50,D.a4J,100,D.a4R,200,D.a3E,300,D.a41,400,D.a4b,500,D.a55,600,D.a3q,700,D.a43,800,D.a4e,900,D.a4z],x.m)
D.Tk=new B.rv(D.apK,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a86=new B.ai(32,32,32,32)
D.arD=new B.ae(D.a86,C.bI,null)
D.a88=new B.ai(48,48,48,48)
D.arG=new B.ae(D.a88,C.bI,null)
D.arL=new B.ae(C.af,C.bI,null)
D.alE=w([],B.au("B<mQ>"))
D.alF=w([],B.au("B<nh>"))
D.XU=new A.PU(D.alE,D.alF)
D.aum=new B.fu("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aun=new B.fu("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.auq=new B.fu("Automaten-Business","Umsatz je Automat",null,null)
D.aus=new B.fu("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.auu=new B.fu("Top","Meistverkaufte Produkte",null,null)
D.aux=new B.fu("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.auy=new B.fu("Kennzahlen","Rentabilit\xe4t",null,null)
D.YB=new B.t6(C.I,C.u,0)
D.aCV=new B.ah("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ax8=new B.dT(D.aCV,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aEQ=new B.ah('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.axb=new B.dT(D.aEQ,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aD7=new B.ah("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.axc=new B.dT(D.aD7,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aEK=new B.ah("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.axe=new B.dT(D.aEK,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aEe=new B.ah("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.axf=new B.dT(D.aEe,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aEb=new B.ah("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.axz=new B.dT(D.aEb,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.q,null)
D.aNu=new B.S(!0,C.C,null,null,null,null,14,C.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aD4=new B.ah("Demo",null,null,null,null,null,null,null,null,null)
D.aDg=new B.ah("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aDY=new B.ah("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aE3=new B.ah("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aEi=new B.ah("sevDesk",null,null,null,null,null,null,null,null,null)
D.aF1=new B.ah("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZR=new A.adw(0,"auto")
D.aFD=new A.adw(1,"top")
D.aJY=new A.wB("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aJZ=new A.wB("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"ccz","bNJ",()=>B.iO(new A.brR(),x.D))
w($,"ccA","avg",()=>B.iO(new A.brS(),x.a))
w($,"cdx","xe",()=>B.bxb(new A.btG(),x.P))
w($,"ccB","but",()=>C.aJ.$1$1(new A.brT(),x.d))
w($,"ccy","bNI",()=>C.aJ.$1$1(new A.brQ(),x.X))
w($,"ccx","bus",()=>C.aJ.$1$1(new A.brP(),x.h))
w($,"ccw","bur",()=>B.aZk(A.c30(),x.F,x.b))
w($,"c5P","bu4",()=>new A.awY())
v($,"c93","lr",()=>new A.b10())})()};
(a=>{a["hGRlOwL/lhr6s9LZAYQUr165Vhg="]=a.current})($__dart_deferred_initializers__);