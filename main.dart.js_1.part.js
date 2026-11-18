((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Op(d,e,f,g,h){return new A.a79(f,g,d,h,e,null)},
a79:function a79(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uW:function uW(d){this.a=d},
Er:function Er(d){this.a=d},
bUB(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.V(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T_
w=x.f
v=x.N
u=x.z
t=A.aFU(B.dh(w.a(e.h(a0,"current")),v,u))
s=A.aFU(B.dh(w.a(e.h(a0,"prior_year")),v,u))
r=A.aFU(B.dh(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bn
p=J.cW(p,new A.aFC(),x.cZ)
p=B.Q(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bn
o=J.cW(o,new A.aFD(),x.ef)
o=B.Q(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bn
q=J.cW(q,new A.aFE(),x.j)
q=B.Q(q,q.$ti.i("ax.E"))
n=B.dh(w.a(e.h(a0,"customer")),v,u)
m=B.b4(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.pc(n.h(0,"app_gross"))
k=B.b4(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.pc(n.h(0,"avg_basket"))
u=B.dh(w.a(e.h(a0,"derived")),v,u)
v=A.pc(u.h(0,"gross_margin_pct"))
e=A.pc(u.h(0,"net_margin_pct"))
w=A.pc(u.h(0,"ebitda_margin_pct"))
j=A.pc(u.h(0,"cashflow_operating"))
i=A.bta(u.h(0,"revenue_growth_yoy_pct"))
h=A.bta(u.h(0,"revenue_growth_mom_pct"))
g=A.bta(u.h(0,"result_growth_yoy_pct"))
u=A.bta(u.h(0,"result_growth_mom_pct"))
f=B.b4(J.a_(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.oj(t,s,r,p,o,q,new A.aAP(m,l,k,n),new A.aBX(v,e,w,j,i,h,g,u),f)},
pc(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fW(J.am(d))
return w==null?0:w},
bta(d){if(d==null)return null
if(typeof d=="number")return d
return B.fW(J.am(d))},
qu:function qu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vw:function vw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wt:function wt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAP:function aAP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBX:function aBX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
oj:function oj(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFC:function aFC(){},
aFD:function aFD(){},
aFE:function aFE(){},
aFU(d){var w=J.V(d),v=A.ui(w.h(d,"revenue_net_7")),u=A.ui(w.h(d,"revenue_net_19")),t=A.ui(w.h(d,"revenue_net")),s=A.ui(w.h(d,"expense_net")),r=A.ui(w.h(d,"result_net")),q=A.ui(w.h(d,"vat_collected")),p=A.ui(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.bn
w=J.cW(w,new A.aFV(),x._)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.ok(v,u,t,s,r,q,p,w)},
ui(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fW(J.am(d))
return w==null?0:w},
D_:function D_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ok:function ok(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aFV:function aFV(){},
bUA(d){return new A.yA(d,new B.iy(x.c_),C.dM)},
btX:function btX(){},
btY:function btY(){},
bvN:function bvN(){},
btZ:function btZ(){},
btW:function btW(){},
btV:function btV(){},
yA:function yA(d,e,f){this.r=d
this.a=e
this.f=f},
aFB:function aFB(d,e,f){this.a=d
this.b=e
this.c=f},
aFA:function aFA(d,e,f){this.a=d
this.b=e
this.c=f},
bUC(){return new A.yB(null)},
am8(d,e,f,g,h){return new A.am7(e,h,g,f,d,null)},
yB:function yB(d){this.a=d},
aFT:function aFT(d){this.a=d},
aFL:function aFL(d,e,f){this.a=d
this.b=e
this.c=f},
aFM:function aFM(d,e,f){this.a=d
this.b=e
this.c=f},
aFN:function aFN(d){this.a=d},
aFK:function aFK(){},
aFO:function aFO(d){this.a=d},
aFP:function aFP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFS:function aFS(){},
aFR:function aFR(){},
aFQ:function aFQ(){},
aFJ:function aFJ(d,e){this.a=d
this.b=e},
aFH:function aFH(d){this.a=d},
aFI:function aFI(d){this.a=d},
agS:function agS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
am7:function am7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aop:function aop(d,e){this.e=d
this.a=e},
bja:function bja(d){this.a=d},
bjb:function bjb(d){this.a=d},
bjc:function bjc(d,e,f){this.a=d
this.b=e
this.c=f},
bj9:function bj9(){},
J0:function J0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Jr:function Jr(d,e){this.c=d
this.a=e},
bp5:function bp5(d){this.a=d},
agQ:function agQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
I9:function I9(d,e){this.c=d
this.a=e},
bAV(d,e,f,g,h){var w=null
return B.hj(w,w,!0,w,new A.bt3(h,g,e,f),d,w,!0,!0,x.H)},
jP(d,e,f,g,h,i,j,k,l,m,n){return new A.amJ(g,n,i,e,d,m,f,k,l,j,null)},
avA(d,e){return A.c4d(d,e)},
c4d(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avA=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.b2(D.aAk)
t=4
o=e.aE(0,$.bL(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.hA("finance-balance-sync",B.z(n,n)),$async$avA)
case 7:r=g
q=B.dh(x.f.a(r.a),x.N,n)
l.Xj()
if(J.d(J.a_(q,"configured"),!1)){l.b2(D.aAo)
w=1
break}if(J.d(J.a_(q,"ok"),!0)){o=$.bwL()
if(e.e==null)B.U(B.Z(y.b))
e.gcw().cs(o)
l.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a_(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}else{o=J.a_(q,"error")
l.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Xj()
l.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avA,v)},
avD(d,e,f){var w=0,v=B.q(x.H)
var $async$avD=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.hj(null,null,!0,null,new A.bt1(f,e,e.aE(0,$.bL(),x.A)),d,null,!0,!0,x.H),$async$avD)
case 2:return B.o(null,v)}})
return B.p($async$avD,v)},
a7a:function a7a(d){this.a=d},
aKT:function aKT(){},
aKS:function aKS(){},
aKR:function aKR(){},
It:function It(d,e){this.c=d
this.a=e},
bgk:function bgk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bg9:function bg9(){},
bga:function bga(){},
bgb:function bgb(){},
bgc:function bgc(){},
bgd:function bgd(){},
bge:function bge(){},
bgf:function bgf(){},
bgg:function bgg(){},
bgh:function bgh(d){this.a=d},
bgi:function bgi(d){this.a=d},
bgj:function bgj(d){this.a=d},
bgl:function bgl(d,e){this.a=d
this.b=e},
bgm:function bgm(d,e){this.a=d
this.b=e},
bt3:function bt3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bt2:function bt2(d){this.a=d},
alr:function alr(d){this.a=d},
amJ:function amJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bgn:function bgn(d,e){this.a=d
this.b=e},
UV:function UV(d,e,f){this.c=d
this.d=e
this.a=f},
Yu:function Yu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boC:function boC(){},
boD:function boD(){},
boE:function boE(d){this.a=d},
U8:function U8(d,e,f){this.c=d
this.d=e
this.a=f},
b6n:function b6n(){},
b6p:function b6p(d){this.a=d},
b6q:function b6q(d){this.a=d},
b6o:function b6o(){},
Uj:function Uj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7d:function b7d(){},
b7e:function b7e(){},
b7f:function b7f(){},
b7g:function b7g(d){this.a=d},
anc:function anc(d,e){this.c=d
this.a=e},
bgS:function bgS(){},
bgT:function bgT(){},
ajt:function ajt(d,e){this.c=d
this.a=e},
Cs:function Cs(d,e,f){this.c=d
this.d=e
this.a=f},
at2:function at2(d,e){this.c=d
this.a=e},
bqm:function bqm(){},
bqn:function bqn(){},
wN:function wN(d,e){this.c=d
this.a=e},
ahL:function ahL(d,e){this.e=d
this.a=e},
b4U:function b4U(){},
b4T:function b4T(){},
b4S:function b4S(d,e,f){this.a=d
this.b=e
this.c=f},
b4M:function b4M(d,e){this.a=d
this.b=e},
b4N:function b4N(d,e){this.a=d
this.b=e},
b4V:function b4V(d){this.a=d},
b4W:function b4W(d){this.a=d},
b4O:function b4O(){},
b4P:function b4P(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4Q:function b4Q(d,e){this.a=d
this.b=e},
b4R:function b4R(d,e,f){this.a=d
this.b=e
this.c=f},
bt1:function bt1(d,e,f){this.a=d
this.b=e
this.c=f},
bt0:function bt0(d){this.a=d},
Bs:function Bs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TM:function TM(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4G:function b4G(){},
b4H:function b4H(d){this.a=d},
b4I:function b4I(d){this.a=d},
b4K:function b4K(d,e){this.a=d
this.b=e},
b4J:function b4J(d,e){this.a=d
this.b=e},
b4L:function b4L(d){this.a=d},
bk:function bk(){},
bEq(d){return new A.L0(d,C.av,C.dB,null,null)},
L0:function L0(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TN:function TN(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eP$=f
_.cu$=g
_.c=_.a=null},
b4X:function b4X(d,e){this.a=d
this.b=e},
b4Y:function b4Y(d){this.a=d},
aya(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alO:f,p=a0==null?16:a0,o=d==null?D.a05:d,n=g==null,m=n?A.bxh(r,r,r,r,r,r,r,r):g,l=a3==null?D.XL:a3
n=n?A.bxh(r,r,r,r,r,r,r,r):g
w=j==null?D.E9:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.o3(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C_,s,w,i,n)},
ayh(d,e,f,g,h){var w=d==null?D.alP:d,v=e==null?2:e,u=g==null?C.lz:g
return new A.fN(h,f===!0,w,v,u)},
bRR(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.ayh(A.kB(d.c,e.c,f,A.c51(),x.fj),B.ah(d.d,e.d,f),!1,A.kB(d.e,e.e,f,A.a_I(),x.S),w)},
a1c(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T9
else w=h
v=m==null
u=v?8:m
t=$.lH()
s=t.aYr(f,v?8:m)
t=t.aYs(g,v?8:m)
v=d==null?A.bEn(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.alQ:k)},
bRS(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.mP(d.f,e.f,f),p=A.kB(d.r,e.r,f,A.a_I(),x.S),o=B.bX(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1c(A.bEn(v,u,null,!1,t),p,q,o,s,n,null,A.kB(d.y,e.y,f,A.c52(),x.G),m,r)},
bRT(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mN(u,w,v,B.bX(d.d,e.d,f))},
bEn(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a19(g===!0,v,u,w,f)},
bxh(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1e(4,C.hY,16,D.xO,0,120,A.c54(),!1,!1,D.ZL,0,C.N,A.c53())
else w=k
v=j==null?C.nt:j
return new A.a1d(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5Q(d,e,f,g){var w=null,v=B.jb(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.S,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Di(C.d.j(f.b),v)},
c5P(d){return A.aAe(D.dp,15)},
o3:function o3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ay9:function ay9(d,e){this.a=d
this.b=e},
fN:function fN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayi:function ayi(){},
ayj:function ayj(){},
iv:function iv(d,e,f,g,h,i,j,k,l,m){var _=this
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
a19:function a19(d,e,f,g,h){var _=this
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
aem:function aem(d,e){this.a=d
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
Di:function Di(d,e){this.a=d
this.b=e},
L1:function L1(d){this.a=d},
a1f:function a1f(d,e,f,g,h,i,j,k){var _=this
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
ahH:function ahH(){},
ahO:function ahO(){},
ahP:function ahP(){},
ahR:function ahR(){},
ahS:function ahS(){},
ahT:function ahT(){},
ahU:function ahU(){},
ahV:function ahV(){},
ahW:function ahW(){},
ayk:function ayk(d){this.a=d},
ayl:function ayl(){},
uB:function uB(d,e,f){this.a=d
this.b=e
this.c=f},
ahQ:function ahQ(){},
aym:function aym(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayn:function ayn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayo:function ayo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6c:function a6c(d){this.b=d},
a1b:function a1b(d,e,f){this.d=d
this.e=e
this.a=f},
abo:function abo(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.i8=e
_.cX=f
_.fO=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aG=_.ak=_.aq=$
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
c5R(d,e){var w=null
return new A.RI(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
ay2(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.pn(t,e.b,new A.qi(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bFN(d,e,f){var w=A.ay2(d.b,e.b,f),v=A.ay2(d.d,e.d,f),u=A.ay2(d.e,e.e,f)
return new A.uY(e.a,w,A.ay2(d.c,e.c,f),v,u)},
bUE(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.eD(w,v)},
bFL(d,e,f){return new A.yD(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
c8i(d){return!0},
c5U(d){return D.a91},
bFM(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pL(w,f,g,e)},
bHK(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c4Y(),x.dv)
v.toString
w=A.kB(d.b,e.b,f,A.c5_(),x.bN)
w.toString
return new A.Qj(v,w)},
bVo(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rs(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.n6(t,w,v,u)},
c_E(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rs(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.nB(t,w,v,u)},
bVn(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.of(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bVl(B.bx8(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rs(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_I(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c_D(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.of(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.c_B(B.bx8(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rs(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_I(),x.S)
if(u==null)u=v==null?C.E:null
return new A.ln(r,e.f,e.r,t,e.x,u,v,w,s)},
bVl(d,e,f,g,h,i){return new A.a6n(f,!1,g,i,d,e)},
bVm(d){return C.d.ae(d.e,1)},
c_B(d,e,f,g,h,i){return new A.aeJ(f,!1,g,i,d,e)},
c_C(d){return C.d.ae(d.e,1)},
bFH(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c4X(),x.cm)
v.toString
w=A.kB(d.b,e.b,f,A.c4Z(),x.es)
w.toString
return new A.N1(v,w,!0)},
bUD(d,e,f){return new A.N8(d,e==null?4:e,f)},
a12:function a12(){},
Dg:function Dg(d,e){this.a=d
this.b=e},
tB:function tB(d,e){this.r=d
this.w=e},
qi:function qi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acU:function acU(){},
pn:function pn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uY:function uY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eD:function eD(d,e){this.a=d
this.b=e},
yD:function yD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pL:function pL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeo:function aeo(){},
Qj:function Qj(d,e){this.a=d
this.b=e},
n6:function n6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nB:function nB(d,e,f,g){var _=this
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
ln:function ln(d,e,f,g,h,i,j,k,l){var _=this
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
aeJ:function aeJ(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N1:function N1(d,e,f){this.a=d
this.b=e
this.c=f},
uX:function uX(){},
N8:function N8(d,e,f){this.a=d
this.b=e
this.c=f},
ahC:function ahC(){},
ahG:function ahG(){},
akO:function akO(){},
al6:function al6(){},
al7:function al7(){},
al9:function al9(){},
ala:function ala(){},
alY:function alY(){},
alX:function alX(){},
alZ:function alZ(){},
apw:function apw(){},
arr:function arr(){},
ars:function ars(){},
at6:function at6(){},
atM:function atM(){},
atL:function atL(){},
atN:function atN(){},
axZ:function axZ(){},
KV:function KV(){},
KW:function KW(d,e,f){this.c=d
this.d=e
this.a=f},
ay0:function ay0(d){this.a=d},
ay_:function ay_(d){this.a=d},
RI:function RI(d,e,f){this.c=d
this.e=e
this.a=f},
Yj:function Yj(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZa(d,e,f){var w=B.aa(f),v=w.i("ae<1,jW>")
v=B.Q(new B.ae(f,new A.b_9(),v),v.i("ax.E"))
w=w.i("ae<1,c>")
w=B.Q(new B.ae(f,new A.b_a(),w),w.i("ax.E"))
return new A.acV(e,d,v,w,null)},
bRO(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a70(4,x.er)
for(w=0;w<4;++w)t[w]=new B.qq(v,C.ab,C.w,new B.jQ(1),v,v,v,v,C.bj,v)
u=new A.a13(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aJ(x.g))
u.bf()
return u},
acV:function acV(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_9:function b_9(){},
b_a:function b_a(){},
a13:function a13(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.WF$=h
_.aUb$=i
_.dn$=j
_.ag$=k
_.dN$=l
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
bgt:function bgt(d,e){this.a=d
this.b=e},
ay1:function ay1(){},
jW:function jW(d,e){this.a=d
this.b=e},
o2:function o2(d,e){this.a=d
this.b=e},
ahD:function ahD(){},
ahE:function ahE(){},
ahF:function ahF(){},
TK:function TK(){},
AX:function AX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_b:function b_b(d){this.a=d},
b_c:function b_c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_d:function b_d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5v(d,e){var w=d==null?B.cP(C.E,1):d
return new A.a5u(e!==!1,w)},
a1h:function a1h(){},
a5u:function a5u(d,e){this.a=d
this.b=e},
Nf:function Nf(){},
a5w:function a5w(){},
ayx:function ayx(){},
aER:function aER(d,e){this.a=d
this.b=e},
ahZ:function ahZ(){},
al3:function al3(){},
al4:function al4(){},
alb:function alb(){},
L4:function L4(){},
vH:function vH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hr:function hr(){},
a5A:function a5A(d){this.a=d},
a5B:function a5B(d){this.a=d},
a5C:function a5C(d){this.a=d},
Na:function Na(){},
Nb:function Nb(){},
a5F:function a5F(d){this.a=d},
Nd:function Nd(){},
Ne:function Ne(d){this.a=d},
a5z:function a5z(d){this.a=d},
a5y:function a5y(d){this.a=d},
N9:function N9(d){this.a=d},
a5D:function a5D(d){this.a=d},
a5E:function a5E(d){this.a=d},
Nc:function Nc(d){this.a=d},
Ge:function Ge(){},
aVl:function aVl(d){this.a=d},
aVm:function aVm(d){this.a=d},
aVn:function aVn(d){this.a=d},
aVo:function aVo(d){this.a=d},
aVp:function aVp(d){this.a=d},
aVq:function aVq(d){this.a=d},
aVr:function aVr(d){this.a=d},
aVs:function aVs(d){this.a=d},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(d){this.a=d},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
OB:function OB(d,e,f,g,h){var _=this
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
_.eP$=g
_.cu$=h
_.c=_.a=null},
bgy:function bgy(d,e){this.a=d
this.b=e},
bgw:function bgw(d){this.a=d},
bgx:function bgx(d,e){this.a=d
this.b=e},
bgv:function bgv(){},
bgz:function bgz(d){this.a=d},
byx(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pV(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aL3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T9:u
else w=g
v=f==null?A.ay8(!1,u,0,u,!1,D.vX):f
w=new A.ee(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ay8(!1,u,0,u,!1,D.vX):d,j,a0,i,s,!1,p)
w.arU(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bEp(d.ay,e.ay,f)
v=A.bEp(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.kB(d.cy,e.cy,f,A.a_I(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rs(d.w,e.w,f)
p=A.kB(d.a,e.a,f,A.c4W(),x.cw)
p.toString
o=B.bIg(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aL3(v,m,w,r,e.z,s,new A.yC(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OC(n),!1,u,o,!0,e.cx,p)},
ay8(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aP(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a1a(h,w,g,i,f,!1)},
bEp(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rs(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bFM(t,A.kB(v.d,u.d,f,A.a_I(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rs(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.ay8(!1,s,v,u,e.a,new A.L_(!1,r,w.c,!0))},
bRU(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rs(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aP(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mO(e.a,e.b,w,v)},
c8j(d){return!0},
bAE(d,e,f){var w=f.w
if(w!=null)return A.bBu(w.a,A.byd(w),e/100)
w=f.r
w=w
return w==null?D.dp:w},
c2z(d,e,f){var w,v=f.w
if(v!=null)w=A.bBu(v.a,A.byd(v),e/100)
else{v=f.r
w=v
if(w==null)w=D.dp}return A.aAe(w,40)},
bKN(d,e,f,g,h){var w,v=A.bAE(d,e,f),u=f.w
if(u!=null)w=A.bBu(u.a,A.byd(u),e/100)
else{u=f.r
w=u
if(w==null)w=D.dp}u=A.aAe(w,40)
return new A.N8(v,h==null?4:h,u)},
c8h(d,e){return!0},
c4I(d,e){return Math.abs(d.a-e.a)},
c5X(d,e){var w=J.cW(e,new A.btM(d),x.bY)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
c5T(d,e){return-1/0},
c5S(d,e){return d.a[e].b},
bLY(d){var w=J.cW(d,new A.btJ(),x.fT)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
bLX(d){return A.aAe(D.dp,15)},
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
ee:function ee(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aL4:function aL4(){},
OC:function OC(d){this.a=d},
a1a:function a1a(d,e,f,g,h,i){var _=this
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
L_:function L_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yC:function yC(d,e,f){this.a=d
this.b=e
this.c=f},
aKU:function aKU(d,e){this.a=d
this.b=e},
a5x:function a5x(){},
F4:function F4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
btM:function btM(d){this.a=d},
btL:function btL(d){this.a=d},
a7o:function a7o(){},
btJ:function btJ(){},
nc:function nc(){},
qs:function qs(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rH:function rH(d,e){this.a=d
this.b=e},
tC:function tC(d,e){this.a=d
this.b=e},
GG:function GG(d){this.a=d},
OD:function OD(d){this.a=d},
zp:function zp(d,e){this.a=d
this.b=e},
ahM:function ahM(){},
ahN:function ahN(){},
ai_:function ai_(){},
al5:function al5(){},
al8:function al8(){},
amQ:function amQ(){},
amR:function amR(){},
amS:function amS(){},
amU:function amU(){},
amV:function amV(){},
amW:function amW(){},
amX:function amX(){},
arq:function arq(){},
at5:function at5(){},
aL5:function aL5(d){this.a=d},
aL6:function aL6(){},
aL7:function aL7(){},
zq:function zq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amT:function amT(){},
aL8:function aL8(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLb:function aLb(){},
aL9:function aL9(d,e,f){this.a=d
this.b=e
this.c=f},
aLa:function aLa(d,e,f){this.a=d
this.b=e
this.c=f},
aLc:function aLc(){},
vs:function vs(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7n:function a7n(d,e,f){this.d=d
this.e=e
this.a=f},
abB:function abB(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.i8=e
_.cX=f
_.fO=g
_.B=h
_.a3=_.V=_.U=null
_.a4=i
_.bx=_.aG=_.ak=_.aq=$
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
bxg(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bI(o.length,0,!1,x.i),m=B.aa(o),l=new B.ae(o,new A.ayb(),m.i("ae<1,F>")).kx(0,new A.ayc()),k=e-l,j=new A.ayf(k,d,n)
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
new B.j1(o,m.i("j1<1>")).aC(0,new A.ayd(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aC(0,new A.aye(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayb:function ayb(){},
ayc:function ayc(){},
ayf:function ayf(d,e,f){this.a=d
this.b=e
this.c=f},
ayg:function ayg(d,e,f){this.a=d
this.b=e
this.c=f},
ayd:function ayd(d,e,f){this.a=d
this.b=e
this.c=f},
aye:function aye(d,e,f){this.a=d
this.b=e
this.c=f},
byd(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.aa(w).i("j1<1>")).aC(0,new A.aIa(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIa:function aIa(d,e){this.a=d
this.b=e},
aBn(d,e){var w,v
if(e!=null){w=B.aa(e).i("ae<1,F>")
v=B.Q(new B.ae(e,new A.aBo(),w),w.i("ax.E"))
return A.c5L(d,new A.a1R(v,x.C))}else return d},
aBo:function aBo(){},
bZL(d,e){var w=!0
if(d!==C.fd)if(!(d===C.ab&&e===C.w))w=d===C.iD&&e===C.b0
if(w)return D.En
else{w=!0
if(d!==C.iC)if(!(d===C.iD&&e===C.w))w=d===C.ab&&e===C.b0
if(w)return D.Eo
else return D.a9I}},
NF:function NF(d,e){this.a=d
this.b=e},
a1G:function a1G(d,e){this.a=d
this.b=e},
zv:function zv(d,e){this.a=d
this.$ti=e},
an3:function an3(){},
c5L(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ao(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.af,k,k,h)
for(j=B.MW(d),w=B.b([],x.I),v=new B.MY(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.U(B.fB('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.MX(v,r)
v.Dr()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dr()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eq(B.b([],i),!0,s)
p=new B.Kl(new B.cl(t,p,k,new B.apT([q,o,o+m,!0]),l),C.t,k)
h.push(p)
l=g.f
if(l!=null)p.iI(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1R:function a1R(d,e){this.a=d
this.b=0
this.$ti=e},
b2E:function b2E(){},
by3(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bRX(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gem(v)===0){v=d.a.a
if(v.gem(v)===0){v=d.b.a
if(v.gem(v)===0){v=d.c.a
v=v.gem(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAe(d,e){var w=1-e/100
return B.aD(d.gfL(d),C.d.aP(d.gO8()*w),C.d.aP(d.gGm()*w),C.d.aP(d.gKH()*w))},
bFK(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
by4(d){var w=d.a,v=w?A.b_8(d.b):0,u=w?A.b_8(d.c):0,t=w?A.b_8(d.d):0
return new B.al(v,u,t,w?A.b_8(d.e):0)},
bX3(d){var w
if(d.c===0){d.sf0(null)
w=B.c0(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gq(0)}},
byS(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.sf0(f.nQ(0,g))}else{w=e==null?C.F:e
d.r=w.gq(w)
d.sf0(null)}},
b_8(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kB(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.l1(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.l1(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c74(d,e,f){return C.d.aP(d+(e-d)*f)},
bBu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.l1(m,x.i)
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
A.a79.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bt:C.A
r=r?C.m:C.am
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.co(t.x,C.m,s,18),C.aZ],w))
v.push(B.aB(new B.e8(t.c,!1,s),1))
v=B.ap(v,C.D,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.M,B.j(t.d,1,C.ak,s,B.c8(u==null?C.j:u,22,C.S),s,s,s)],w)
return B.by(r,B.ad(w,C.D,s,C.ip,C.h,0),q,s,C.ai,s,3)}}
A.uW.prototype={
M0(d){return this.aUa(d)},
aUa(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$M0=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ev("finance_summary",B.a5(["p_from",E.ro(d.a),"p_to",E.ro(d.b)],s,r),r),$async$M0)
case 3:q=f
if(q==null){u=D.apY
w=1
break}if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.asb
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M0,v)},
M_(d){return this.aU9(d)},
aU9(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$M_=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.ev("finance_kpis",B.a5(["p_from",E.ro(d.a),"p_to",E.ro(d.b)],s,r),r),$async$M_)
case 3:q=f
if(x.f.b(q)){u=B.dh(q,s,r)
w=1
break}u=D.apF
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M_,v)},
pN(d){return this.arC(d)},
arC(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pN=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("sevdesk-sync",B.a5(["from",E.ro(d.a),"to",E.ro(d.b)],s,s)),$async$pN)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a_(r,"upserted")=="number"){u=C.d.a0(B.fK(J.a_(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pN,v)},
LW(d){return this.aU0(d)},
aU0(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LW=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.hA("finance-export-pdf",B.a5(["from",E.ro(d.a),"to",E.ro(d.b)],s,s)),$async$LW)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a_(r,"base64")=="string"){u=B.aI(J.a_(r,"base64"))
w=1
break}throw B.e(B.e7("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LW,v)}}
A.Er.prototype={
Gf(d){return this.akN(d)},
akN(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gf=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M0(d),$async$Gf)
case 7:q=f
o=A.aFU(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HX(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gf,v)},
Ga(d){return this.aky(d)},
aky(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ga=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.M_(d),$async$Ga)
case 7:q=f
o=A.bUB(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HX(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ga,v)},
pN(d){return this.arD(d)},
arD(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pN=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.pN(d),$async$pN)
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
p=r.HX(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pN,v)},
LV(d){return this.aU_(d)},
aU_(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LV=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LW(d),$async$LV)
case 7:q=f
o=C.iV.cG(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.HX(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LV,v)},
HX(d){if(d instanceof B.yx)return d
if(d instanceof B.la){if(d.b==="42501")return new B.vL(d.a)
return new B.tj(d.a)}if(d instanceof B.Nt)return new B.tj("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bl("Unerwarteter Fehler: "+B.i(d))},
$iaFG:1}
A.qu.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vw.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wt.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAP.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBX.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.oj.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.D_.prototype={
gbE(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ok.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yA.prototype={
Hd(d){return this.arB(0)},
arB(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hd=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se9(0,C.dw)
s=t.r
r=s.aE(0,$.xt(),x.P)
p.a=null
w=3
return B.k(B.pm(new A.aFB(p,t,r),x.H),$async$Hd)
case 3:t.se9(0,f)
q=t.f
if(q.ght(q)==null){q=$.bwM()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hd,v)},
LU(){return this.aTZ()},
aTZ(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$LU=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se9(0,C.dw)
s=t.r.aE(0,$.xt(),x.P)
q.a=null
w=3
return B.k(B.pm(new A.aFA(q,t,s),x.H),$async$LU)
case 3:t.se9(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LU,v)}}
A.yB.prototype={
dg(d,e){var w=null,v=e.ap($.xt(),x.P),u=e.ap($.bwM(),x.aN)
return B.ig(B.dF(B.b([new B.fj("Finanzen","Dashboard",new A.agS(e.ap($.bwK(),x.b).gj3(),new A.aFL(this,d,e),new A.aFM(this,d,e),new A.aFN(d),new A.aFO(d),new A.aFP(this,d,e,v),w),w),C.aQ,new A.aop(v,w),C.bJ,D.afx,C.bJ,B.dz(u,new A.aFQ(),new A.aFR(),new A.aFS(),!1,!0,!1,x.d,x.l)],x.p),C.cj,w,C.K,!1),C.m,new A.aFT(e))},
JN(d,e){return this.aMz(d,e)},
aMz(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$JN=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwK()
w=3
return B.k(e.aE(0,s.ghR(),x.F).Hd(0),$async$JN)
case 3:r=g
if(d.e==null){w=1
break}s=e.aE(0,s,x.b)
s=s.ght(s)
t=d.O(x.q).f
t.b2(B.c5(null,null,null,null,null,C.n,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JN,v)},
BG(d,e){return this.axN(d,e)},
axN(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BG=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aE(0,$.bwK().ghR(),x.F).LU(),$async$BG)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.b2(D.aAq)
w=1
break}t=B.qb(C.t,10)
w=4
return B.k($.bO8().u9(s,"finanzauswertung.pdf",t,null,null,null),$async$BG)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BG,v)},
BH(d,e,f){return this.aK9(d,e,f)},
aK9(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BH=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.hj(null,null,!0,null,new A.aFJ(f,d),d,null,!0,!0,x.cJ),$async$BH)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mL(e.aE(0,$.bL(),x.A))
p=f.a
o=f.b
n=$.dp()
m=n.am(p)
n=n.am(o)
w=8
return B.k(r.wi("finance_period",p,o,B.a5(["period_from",p.dV()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BH)
case 8:if(d.e!=null)d.O(x.q).f.b2(F.mi)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BH,v)}}
A.agS.prototype={
u(d){var w=this,v=null,u=A.am8(C.m,C.fw,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.am8(v,C.F0,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.am8(v,D.y6,v,s?v:w.d,"sevDesk synchronisieren"),q=A.am8(C.an,C.i5,C.an,s?v:w.e,"PDF-Export")
return B.ap(B.b([u,C.aZ,t,C.aZ,r,C.aZ,q,C.aZ,A.am8(C.aE,C.fv,C.aE,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.H,0,v,v)}}
A.am7.prototype={
u(d){var w,v=this,u=null,t=B.aR(12),s=B.aR(12),r=B.aR(12),q=v.w
if(q==null)q=C.am
q=B.cP(q,1)
w=v.r
if(w==null)w=C.j
return B.Hh(B.dT(!1,C.a0,!0,t,B.eF(!1,s,!0,B.b9(u,B.co(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.ae,0,u,u,u,u,u,C.bz),u,v.d,u,u)}}
A.aop.prototype={
dg(d,e){var w=null,v=this.e,u=$.dp(),t=x.p
return B.by(w,B.ad(B.b([D.a8O,C.M,B.ap(B.b([D.abT,C.aV,B.aB(B.j(u.am(v.a)+" \u2013 "+u.am(v.b),w,w,w,B.D(C.j,16,C.S),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.u,B.lo(C.cx,B.b([new A.J0("Monat",new A.bja(e),w,w),new A.J0("Jahr (YTD)",new A.bjb(e),w,w),new A.J0("Zeitraum w\xe4hlen \u2026",new A.bjc(this,d,e),D.aaw,w)],t),C.dI,6,8)],t),C.D,w,C.f,C.h,0),w,w,C.C,w,3)},
J8(d,e){return this.aJ3(d,e)},
aJ3(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$J8=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b_(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.avU(new A.bj9(),d,B.bB(B.aW(t)-5,1,1,0,0,0,0),new B.lP(s.a,s.b,x.bz),B.bB(B.aW(t)+1,1,1,0,0,0,0),C.eq),$async$J8)
case 2:r=g
if(r!=null)e.aE(0,$.xt().ghR(),x.V).wR(0,new E.lV(r.a,r.b))
return B.o(null,v)}})
return B.p($async$J8,v)}}
A.J0.prototype={
u(d){var w=null,v=B.aR(9999),u=B.aR(9999),t=B.aR(9999),s=B.cP(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.co(p,C.j,w,14),C.aZ],r))
q.push(B.j(this.c,w,w,w,B.D(C.j,13,C.S),w,w,w))
return B.dT(!1,C.a0,!0,v,B.eF(!1,u,!0,B.b9(w,B.ap(q,C.k,w,C.f,C.H,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l1,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.ae,0,w,w,w,w,w,C.bz)}}
A.Jr.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.i9(new A.bp5(this)),C.bJ,D.a8S,C.u],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ap(B.b([D.acS,C.aF,B.aB(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.p,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.ae,s,C.C,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agQ(t.a,t.b,t.c==="revenue",t.d,s),C.M],r))}q.push(B.ad(w,C.k,s,C.f,C.h,0))}return B.ad(q,C.a8,s,C.f,C.h,0)}}
A.agQ.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bt:C.ae,s=B.cP(u?C.m:C.am,1),r=B.aR(4),q=w.c
r=B.b9(C.W,B.j(C.c.a_(q,0,1),v,v,v,B.c8(C.j,14,C.q),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.ak,v,B.D(C.j,14,C.S),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aB(B.ad(B.b([q,B.j(t,v,v,v,B.D(C.p,12,C.l),v,v,v)],s),C.D,v,C.f,C.h,0),1)
q=$.d3().am(w.f)
return B.by(v,B.ap(B.b([r,C.aF,t,B.j(q,v,v,v,B.D(u?C.aE:C.j,15,C.S),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eO,v,3)}}
A.I9.prototype={
u(d){var w=null
return B.by(C.an,B.ap(B.b([D.adx,C.aF,B.aB(B.j(this.c,w,w,w,B.D(C.j,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eJ,w,C.C,w,3)}}
A.a7a.prototype={
dg(d,e){return B.dz(e.ap($.bQE(),x.e),new A.aKR(),new A.aKS(),new A.aKT(),!1,!0,!1,x.X,x.l)}}
A.It.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.axX,C.u,B.i9(new A.bgk(v,q,100-t.w.a,w,p)),C.u,new A.alr(u),C.aQ,D.axW,C.u,new A.ahL(t,u),C.aQ,D.axQ,C.u,B.bC(u,!0,u,B.n5(u,B.by(u,new A.U8(t,220,u),u,u,C.C,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgl(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.axJ,C.u,B.bC(u,!0,u,B.n5(u,new A.Uj(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgm(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.axO,C.u,new A.anc(t,u),C.aQ,D.axK,C.u,new A.ajt(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aQ,D.axS,C.u,new A.at2(t,u)],s))
return B.ad(r,C.a8,u,C.f,C.h,0)}}
A.alr.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.p,11,C.l).ep(1.35),w,w,w)}}
A.amJ.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cE(m.d,"-")?C.an:C.aE
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgn(m,d):l
r=x.p
q=B.b([B.aB(B.j(m.c.toUpperCase(),l,l,l,B.D(C.p,10,C.q).fZ(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cP(C.hR,0.8)
n=B.aR(4)
q.push(B.b9(l,B.j("Ziel "+p,l,l,l,B.D(C.an,9,C.q),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nu,l,l,l))}q=B.b([B.ap(q,C.k,l,C.f,C.h,0,l,l),C.b3,B.by2(C.dK,B.j(m.d,l,l,l,B.c8(w,22,C.q),l,l,l),C.mN)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.ak,l,B.D(C.p,10,C.aK),l,l,l))
q.push(C.d6)
q.push(B.ap(B.b([new A.UV("Vormonat",m.r,l),C.cE,new A.UV("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.d6)
q.push(B.aB(new A.Yu(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.n5(l,B.by(l,B.ad(q,C.D,l,C.f,C.h,0),l,l,C.dC,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.UV.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aR(4)
return B.b9(r,B.j(this.c+" \u2014",r,r,r,B.D(C.p,9,C.q),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nu,r,r,r)}w=q>=0
v=w?C.aE:C.an
u=v.f_(0.12)
t=B.cP(v,0.7)
s=B.aR(4)
return B.b9(r,B.ap(B.b([B.co(w?F.a9M:D.a9L,v,r,10),F.aA0,B.j(this.c+" "+C.d.ae(q,1)+" %",r,r,r,B.D(v,9,C.q),r,r,r)],x.p),C.k,r,C.f,C.H,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nu,r,r,r)}}
A.Yu.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ar
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eD(v,j[v]))
u=C.b.kx(j,new A.boC())
t=C.b.kx(j,new A.boD())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boE(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5v(k,!1)
w=B.b([A.aL3(k,2,A.ay8(!1,C.m.f_(0.16),0,k,!0,D.vX),C.m,0.35,k,D.Ed,k,!0,!1,!0,!1,D.FI,!1,10,D.Yu,!0,C.lz,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OB(A.byx(k,k,k,D.alR,l,D.C_,D.E9,D.Ee,w,D.afC,k,m,k,n,D.XL,D.alS,D.a94),C.av,C.ah,k,k)}}
A.U8.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aNu
w=C.b.fn(p,0,new A.b6n())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayh(B.b([A.a1c(q,q,D.Bq,q,C.m,q,q,q,r.b,6),A.a1c(q,q,D.Bq,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.cg(A.bEq(A.aya(q,q,u,q,q,A.a5v(q,!1),q,new A.yD(!0,!0,q,new A.b6o(),A.a_C(),!1,q,A.avF(),A.a_C()),q,v,q,q,new A.uY(!0,new A.pn(16,q,new A.qi(!0,new A.b6p(this),46,q),!0),D.kx,D.kx,new A.pn(16,q,new A.qi(!0,new A.b6q(p),26,q),!0)))),this.d,q)},
aLQ(d){if(Math.abs(d)>=1000)return C.d.ae(d/1000,1)+" k"
return C.d.ae(d,0)}}
A.Uj.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ae(v,new A.b7d(),w),x.i)
C.b.K(o,new B.ae(u,new A.b7e(),w))
t=C.b.fn(o,0,new A.b7f())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayh(B.b([A.a1c(q,q,q,q,C.m,q,q,q,v[s],14),A.a1c(q,q,q,q,C.aE,q,q,q,u[s],14)],m),4,q,q,s))
r=B.cg(A.bEq(A.aya(q,q,n,q,q,A.a5v(q,!1),q,D.Ee,q,o,q,q,new A.uY(!0,D.kx,D.kx,D.kx,new A.pn(16,q,new A.qi(!0,new A.b7g(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.C,q,3)}}
A.anc.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aNt
w=new B.ae(k,new A.bgS(),B.aa(k).i("ae<1,F>")).kx(0,new A.bgT())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.j(r.b,m,m,m,new B.P(!0,C.j,m,l,C.by,m,14,C.q,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.d3()
o=p.am(r.f)
q=B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.p,m,l,C.by,m,12,C.aK,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.D,m,C.f,C.h,0)
o=r.d
p=p.am(o)
n=new B.aX(4,4)
o=B.b([new B.iC(C.ay,C.f,C.h,C.k,m,C.bA,m,0,B.b([new B.kR(1,C.dX,q,m),C.aV,B.j(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.by,m,16,C.q,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.d6,new B.DH(new B.d8(n,n,n,n),C.bM,B.OE(C.am,8,C.d.bS(o/w,0,1),D.Bf),m)],v)
q=C.b.gaf(k)
if(r!==q)q=B.L(r)===B.L(q)&&B.a_G(r.gbE(),q.gbE())
else q=!0
if(!q)o.push(C.u)
C.b.K(u,o)}return B.by(m,B.ad(u,C.k,m,C.f,C.h,0),m,m,C.C,m,3)}}
A.ajt.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aB(new A.Cs("Aktive Kunden",""+s,u),1)
w=B.aB(new A.Cs("K\xe4ufe",""+t.a,u),1)
v=$.d3()
return B.by(u,B.ap(B.b([s,w,B.aB(new A.Cs("\xd8-Warenkorb",v.am(t.d),u),1),B.aB(new A.Cs("Umsatz/Kunde",v.am(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.C,u,3)}}
A.Cs.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.D(C.p,10,C.q).fZ(0.6),w,w,w),C.bW,B.j(this.d,w,w,w,B.c8(C.j,20,C.q),w,w,w)],x.p),C.D,w,C.f,C.H,0)}}
A.at2.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ae(m,new A.bqm(),B.aa(m).i("ae<1,F>")).kx(0,new A.bqn()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.j(u.b,1,C.ak,o,new B.P(!0,C.j,o,n,C.by,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.j(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.p,o,n,C.by,o,12,C.S,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.d3().am(r)
p=new B.aX(4,4)
r=B.b([new B.iC(C.ay,C.f,C.h,C.k,o,C.bA,o,0,B.b([new B.kR(1,C.dX,t,o),s,B.j(q,o,o,o,new B.P(!0,C.j,o,n,C.by,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b3,new B.DH(new B.d8(p,p,p,p),C.bM,B.OE(C.am,6,C.d.bS(r/l,0,1),D.Bf),o)],k)
t=C.b.gaf(m)
if(u!==t)t=B.L(u)===B.L(t)&&B.a_G(u.gbE(),t.gbE())
else t=!0
if(!t)r.push(C.M)
C.b.K(j,r)}return B.by(o,B.ad(j,C.k,o,C.f,C.h,0),o,o,C.C,o,3)}}
A.wN.prototype={
u(d){var w=null
return B.by(w,B.j(this.c,w,w,w,B.D(C.p,13,C.l),w,w,w),C.ae,w,C.C,w,3)}}
A.ahL.prototype={
dg(d,e){return B.dz(e.ap($.bwL(),x.fM),new A.b4S(this,d,e),new A.b4T(),new A.b4U(),!1,!0,!1,x.h,x.l)}}
A.Bs.prototype={
W(){return new A.TM()},
aZ7(){return this.d.$0()}}
A.TM.prototype={
au(){var w,v,u,t,s,r,q=this
q.aM()
q.d=new B.b_(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a_(w,"as_of"))!=null){w.toString
u=B.eT(J.am(J.a_(w,"as_of")))
q.d=u==null?q.d:u}u=B.z(x.N,x.bP)
for(t=0;t<8;++t){s=D.pB[t].a
if(v)r=""
else{r=B.b4(J.a_(w,s))
if(r==null)r=null
r=C.d.ae(r==null?0:r,2)
r=B.ay(r,".",",")}u.m(0,s,new B.bw(new B.cz(r,C.bb,C.aG),$.af()))}q.e!==$&&B.b2()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ce(v,v.r,v.e,B.l(v).i("ce<2>"))
while(v.t()){w=v.d
w.R$=$.af()
w.S$=0}this.ao()},
rz(d){var w=this.e
w===$&&B.a()
w=C.c.aL(w.h(0,d).a.a)
w=B.ay(w,".","")
w=B.fW(B.ay(w,",","."))
return w==null?0:w},
a4z(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pB[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ae(u,2)
s=B.ay(s,".",",")
t.lS(0,t.a.yk(C.aG,C.bb,s))}}this.J(new A.b4G())},
aFI(){this.a4z(D.aq_)
this.c.O(x.q).f.b2(D.aAM)},
Io(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Io=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b3(a1)
for(e=0;e<8;++e)a2.E(0,D.pB[e].a)
q=a2
t=4
w=7
return B.k($.aFu.cd().zD(B.b(["csv","txt"],x.s),C.xR,!0),$async$Io)
case 7:p=a5
a2=p
o=a2==null?null:J.Kh(a2.a).c
if(o==null){w=1
break}n=C.aB.ae3(0,o,!0)
m=B.z(a1,x.i)
for(a1=C.C4.cG(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.awn(l,B.bO("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.aL(J.a_(k,0)).toLowerCase()
i=J.CV(q,j)?j:D.asc.h(0,j)
if(i==null)continue
d=C.c.aL(C.b.na(J.bRm(k,1)))
d=B.ay(d,"\u20ac","")
d=B.ay(d," ","")
d=B.ay(d,".","")
h=B.ay(d,",",".")
g=B.fW(h)
if(g!=null)J.ft(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.b2(D.aAn)
w=1
break}r.a4z(m)
r.c.O(x.q).f.b2(B.c5(null,null,null,null,null,C.n,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Io,v)},
IA(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IA=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4H(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0D("upsert_finance_balance",B.a5(["p_as_of",C.c.a_(n.dV(),0,10),"p_cash_and_bank",q.rz("cash_and_bank"),"p_receivables",q.rz("receivables"),"p_inventory_value",q.rz("inventory_value"),"p_other_current_assets",q.rz("other_current_assets"),"p_fixed_assets",q.rz("fixed_assets"),"p_current_liabilities",q.rz("current_liabilities"),"p_long_term_liabilities",q.rz("long_term_liabilities"),"p_equity",q.rz("equity")],x.N,x.aU))
w=7
return B.k(n,$async$IA)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZ7()
o=q.c
o.toString
B.b6(o,!1).fg()
q.c.O(x.q).f.b2(D.aAr)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.b2(B.c5(null,null,null,null,null,C.n,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.J,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4I(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IA,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.c8(C.j,18,C.q),r,r,r),p=s.f?r:new A.b4K(s,d),o=s.d
o===$&&B.a()
p=B.fU(D.aca,B.j("Stichtag: "+C.c.a_(o.dV(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aB(B.fU(D.adl,D.aGB,o?r:s.gaEC(),r),1)
v=x.p
w=B.b([p,C.M,B.ap(B.b([w,C.aV,B.aB(B.fU(D.ad9,D.aGo,o?r:s.gaFH(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.pB[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dH(r,C.aw,!1,r,!0,C.n,r,B.dN(),o.h(0,p.a),r,r,r,r,r,2,new B.c_(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,C.ez,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ab,r,C.X,r,r,r,r),C.M],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.p,11,C.l),r,r,r))
p=B.cg(B.et(B.ad(w,C.a8,r,C.f,C.H,0),r,r,r,C.K),r,380)
o=s.f
w=B.da(C.bZ,r,r,o?r:new A.b4L(d),r,r)
o=o?r:s.gaFp()
t=B.dJ(C.m,C.A,r,r,r,r,r)
return B.iu(B.b([w,B.dk(s.f?F.Z0:C.dt,o,t)],v),C.A,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a_G(this.gbE(),e.gbE())
else w=!0
return w},
gA(d){return(B.ea(B.L(this))^B.bMu(this.gbE()))>>>0},
j(d){B.bFF()
return B.L(this).j(0)}}
A.L0.prototype={
W(){return new A.TN(B.z(x.S,x.J),new A.ayk(B.z(x.x,x.gF)),null,null)}}
A.TN.prototype={
u(d){var w,v=this,u=v.a2t(),t=v.CW
t.toString
t=v.a2u(t.aw(0,v.gh9().gq(0)))
w=v.a2u(u)
v.a.toString
return new A.KW(new A.a1b(t,w,null),u,null)},
a2u(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayh(s.c,s.d,!1,r,s.a))}return d.aR_(w)},
a2t(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vb(t.ch)
if(r)s=w.a
r=t.y
t=t.aRW(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aR0(A.bxh(!1,!0,!0,v.d,v.c,u.gatc(),v.f,v.e))}return t},
atd(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagB()||e==null||e.a==null){w=v.cy
v.J(w.gaQn(w))
return}v.J(new A.b4X(v,e))},
m8(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2t(),new A.b4Y(w)))}}
A.o3.prototype={
VO(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.aya(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aRW(d,e){return this.VO(null,null,d,e)},
aR0(d){return this.VO(null,d,null,null)},
aR_(d){return this.VO(d,null,null,null)},
XL(d,e,f){var w,v,u,t=A.kB(d.ch,e.ch,f,A.c50(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bFN(d.d,e.d,f),q=A.bHK(d.e,e.e,f),p=A.bFL(d.c,e.c,f),o=e.a
o=A.a5v(B.a1t(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.aya(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bFH(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbE(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ay9.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fN.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.ayi(),B.aa(v).i("ae<1,F>")).kx(0,new A.ayj())
v=v.length
return w+(v-1)*this.d},
gbE(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iv.prototype={
gbE(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mN.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a19.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1d.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aem.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1e.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Di.prototype={
gbE(){return[this.a,this.b,C.cF,C.w,null]}}
A.L1.prototype={}
A.a1f.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xJ.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XL(v,w,d)}}
A.ahH.prototype={}
A.ahO.prototype={}
A.ahP.prototype={}
A.ahR.prototype={}
A.ahS.prototype={}
A.ahT.prototype={}
A.ahU.prototype={}
A.ahV.prototype={}
A.ahW.prototype={}
A.ayk.prototype={
Vb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uB(0,0,!1)
v=new A.zv(d,x.x)
u=this.a
if(u.aF(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uB(t,u,!0)}w=null
try{w=C.b.qr(d,new A.ayl())}catch(s){return new A.uB(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
gbE(){return[this.a,this.b,this.c]}}
A.ahQ.prototype={}
A.aym.prototype={
ih(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0w(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ad1(t,A.bxg(w,t.a),u)
l.y=u
l.aTh(e,u,f)
l.amJ(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTq(d,e,m,t,r,s,n,o,f)}}},
ad1(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e7("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.aa(p).i("j1<1>")).aC(0,new A.ayn(t,q,r,s))
w.push(new A.a6c(q))}return w},
aTh(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aX(m,m)
l=new B.d8(k,k,k,k)}j=o.w
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
a4=B.Qf(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.Qf(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gq(0)
k.sf0(null)
a6=b2.f.e2()
v.drawRRect(B.mI(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b2.dI(f,b4,b7)
e=a8.b
b0=b2.dI(e,b4,b7)
b2.f.r=a8.c.gq(0)
b1=e<f?new B.I(h,a9,g,b0):new B.I(h,b0,g,a9)
J.bc(v.save())
v.clipRect(B.dO(b1),$.nT()[1],!0)
a6=b2.f.e2()
v.drawRRect(B.mI(a4),a6)
a6.delete()
v.restore()
b2.aTo(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gem(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.ao()
k=B.b([],s)
k.push(new B.hl(a4))
n=A.aBn(new B.cl(n.r,C.af,null,null,k),o.r)
a6=b2.r.e2()
k=n.e
v.drawPath((k==null?n.e=new B.mS(n.gjD().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTq(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Ba(a5,a5,a5,a5,B.dj(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lH().a_w(a8,a7.b),a7.a),C.cF,C.w,a5,b6.c,C.bj)
w.agU(b1.f)
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
n=u+o.geB()
m=v+4+(o.gd4(0)+o.gd7(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aJc)j=v===D.ZL&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_x(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aX(s,s)
e=B.G1(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lH().KQ(new B.J(v,t),d).b
s=$.lH()
q=w.b
p=q.c
q=q.a.c
a0=s.KQ(new B.J(p,q.gbT(q)),d)
q=g.gc6()
p=w.b.c
s=g.gaj4()
a1=b1.Q
if(!a1.k(0,C.N)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.Wr(d,new A.ayo(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.J(v,t))},
aTo(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gem(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dI(w,j,k)
u=e.a
t=n.dI(u,j,k)
w=u<w
u=w?new B.aX(i.z,i.Q):C.a3
s=w?new B.aX(i.x,i.y):C.a3
r=w?C.a3:new B.aX(i.e,i.f)
w=w?C.a3:new B.aX(i.r,i.w)
q=B.Qf(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a3:new B.aX(i.z,i.Q)
p=v?C.a3:new B.aX(i.x,i.y)
o=v?new B.aX(i.e,i.f):C.a3
q=B.Qf(w,s,u,r,t,p,o,v?new B.aX(i.r,i.w):C.a3)}else q=B.bze(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eV(q,n.r)},
X3(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ad1(b2,A.bxg(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1f(d,q,a0,o,a2,a1,new A.eD(d.a,v),new B.r(n,t))}}return null}}
A.a6c.prototype={}
A.a1b.prototype={
bj(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcQ(),t=new A.aym()
t.a1L()
$.ao()
w=B.aZ()
w.b=C.bd
t.f=w
w=B.aZ()
w.b=C.aY
t.r=w
w=B.aZ()
w.b=C.bd
w.r=C.y.gq(0)
t.w=w
w=B.aZ()
w.b=C.aY
w.r=C.F.gq(0)
w.c=1
t.x=w
t=new A.abo(this.d,v,u,t,d,C.bl,new B.bs(),B.aJ(x.g))
t.bf()
t.Zn(v.cy)
t.ag4()
return t},
by(d,e){e.sir(0,this.d)
e.sZ7(this.e)
e.scQ(B.bD(d,null,x.w).w.gcQ())
e.B=d
e.bb()}}
A.abo.prototype={
sir(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bb()},
sZ7(d){var w=this
if(w.i8.k(0,d))return
w.i8=d
w.a1f(d.cy)
w.bb()},
scQ(d){if(this.cX.k(0,d))return
this.cX=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fO.ih(w,new A.a1G(t,v),new A.vH(u.aB,u.i8,u.cX,x.Q))
s.restore()},
a_p(d){var w=this,v=w.gC(0)
return new A.L1(w.fO.X3(d,v,new A.vH(w.aB,w.i8,w.cX,x.Q)))}}
A.a12.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Dg.prototype={
L(){return"AxisSide."+this.b}}
A.tB.prototype={}
A.qi.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acU.prototype={
gbE(){return[!1,0,0,0]}}
A.pn.prototype={
gbE(){return[this.b,this.a,this.c,!0]}}
A.uY.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.eD.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.eD))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gA(d){return C.d.gA(this.a)^C.d.gA(this.b)}}
A.yD.prototype={
gbE(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pL.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aeo.prototype={
gbE(){return[this.a,this.b]}}
A.Qj.prototype={
gbE(){return[this.a,this.b]}}
A.n6.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nB.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ln.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6n.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeJ.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N1.prototype={
gbE(){return[this.a,this.b,!0]}}
A.uX.prototype={}
A.N8.prototype={
aet(d,e,f){var w,v
$.ao()
w=B.aZ()
v=this.a
w.r=v.gq(v)
w.b=C.bd
d.iY(f,this.b,w)},
gbE(){return[this.a,this.b,this.c,0]}}
A.ahC.prototype={}
A.ahG.prototype={}
A.akO.prototype={}
A.al6.prototype={}
A.al7.prototype={}
A.al9.prototype={}
A.ala.prototype={}
A.alY.prototype={}
A.alX.prototype={}
A.alZ.prototype={}
A.apw.prototype={}
A.arr.prototype={}
A.ars.prototype={}
A.at6.prototype={}
A.atM.prototype={}
A.atL.prototype={}
A.atN.prototype={}
A.axZ.prototype={
MZ(d,e,f,g,h,i){return new B.ir(this.aX7(d,e,f,g,h,i),x.g4)},
aX6(d,e,f,g){return this.MZ(d,e,f,!0,g,!0)},
aX7(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$MZ(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lH().akk(s,u,v,w)
l=m===s
k=!r&&l?m+v:m
j=m+C.d.h8(u-s,v)*v===u
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
A.KV.prototype={
a1L(){var w,v=this
$.ao()
w=B.aZ()
w.b=C.aY
v.a=w
w=B.aZ()
w.b=C.bd
v.b=w
w=B.aZ()
w.b=C.bd
v.e=w
w=B.aZ()
w.b=C.aY
v.c=w
v.d=B.aZ()},
ih(d,e,f){var w=this
w.a0y(d,e,f)
w.aTd(e,f)
w.aTn(e,f)
w.aTm(e,f)},
aTm(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lH().P1(w.a,a1.r-a1.f)
u=$.bwg().MZ(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fl(u.a(),u.$ti.i("fl<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fh(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.lb(n,m)
if(j!=null){p.r=C.E.gq(0)
p.sf0(j.nQ(0,i))}else{if(k==null)k=C.F
p.r=k.gq(k)
p.sf0(a0)}k=l.c
p.c=k
if(k===0){p.sf0(a0)
k=B.c0(p.r)
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}a3.DU(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lH().P1(w.b,a1.y-a1.x)
u=$.bwg().MZ(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fl(u.a(),u.$ti.i("fl<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dI(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.lb(n,m)
if(k!=null){q.r=C.E.gq(0)
q.sf0(k.nQ(0,i))}else{if(p==null)p=C.F
q.r=p.gq(p)
q.sf0(a0)}p=f.c
q.c=p
if(p===0){q.sf0(a0)
p=B.c0(q.r)
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gq(0)}a3.DU(n,m,d.a,f.d)}},
aTd(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hg(new B.I(0,0,0+w.a,0+w.b),this.b)},
aTn(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.G)(k),++u){t=k[u]
s=B.lb(new B.r(n.fh(t.a,m,e),0),new B.r(n.fh(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.sf0(p.nQ(0,s))}else{r.r=(q==null?C.F:q).gq(0)
r.sf0(null)}o=n.e.e2()
w.drawRect(B.dO(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.G)(l),++u){t=l[u]
s=B.lb(new B.r(0,n.dI(t.a,m,e)),new B.r(w,n.dI(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.E.gq(0)
v.sf0(q.nQ(0,s))}else{v.r=(r==null?C.F:r).gq(0)
v.sf0(null)}o=n.e.e2()
j.drawRect(B.dO(s),o)
o.delete()}},
aTl(d,e,f){var w,v
this.a0y(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeu(d,e,f,w)
if(v.b.length!==0)this.aTs(d,e,f,w)},
aeu(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=f.dI(o,a1,a0)
m=new B.r(0,n)
o=f.dI(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lb(m,l)
if(j!=null){n.r=C.E.gq(0)
n.sf0(j.nQ(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.sf0(null)}k=p.c
n.c=k
if(k===0){n.sf0(null)
k=B.c0(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
e.DU(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eK(0,2)
g=C.d.an(o,n.gbT(n).eK(0,2))
J.bc(r.save())
r.translate(h,g)
n=n.gNT().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eK(0,2)
o=C.d.an(o,n.gbT(n).eK(0,2))
k=f.d
k===$&&B.a()
s.aev(0,n,new B.r(h,o),k)}}},
aTs(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.G)(w),++q){p=w[q]
o=p.e
n=d.fh(o,a3,a2)
m=new B.r(n,0)
o=d.fh(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.lb(m,l)
if(j!=null){n.r=C.E.gq(0)
n.sf0(j.nQ(0,i))}else{if(k==null)k=C.F
n.r=k.gq(k)
n.sf0(null)}k=p.c
n.c=k
if(k===0){n.sf0(null)
k=B.c0(n.r)
n.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}n.d=p.x
a1.DU(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eK(0,2)
g=n.gbT(n).eK(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.bc(r.save())
r.translate(f,e)
n=n.gNT().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eK(0,2)
g=n.gbT(n).ad(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.aev(0,n,new B.r(o,k),j)}}},
fh(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_x(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KW.prototype={
gam4(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gam5(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gam6(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gam2(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amo(d){var w,v=this,u=null,t=v.d,s=A.by4(t.d),r=t.a
r=r.a&&A.bRX(r.b)?r.b:u
w=B.b([B.b9(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.ay0(w)
if(v.gam4())C.b.hz(w,s.$1(!0),new A.AX(D.Bm,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gam6())C.b.hz(w,s.$1(!0),new A.AX(D.mJ,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gam5())C.b.hz(w,s.$1(!0),new A.AX(D.Bn,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gam2())C.b.hz(w,s.$1(!0),new A.AX(D.dN,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
u(d){return B.i9(new A.ay_(this))}}
A.RI.prototype={
W(){return new A.Yj(new B.bl(null,x.eF))}}
A.Yj.prototype={
ayP(){switch(this.a.c.a){case 0:return C.hG
case 1:return C.fi
case 2:return C.dK
case 3:return C.fj}},
azk(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayR(d){this.a.toString
return},
au(){this.aM()
$.cx.x1$.push(this.ga51())},
bd(d){this.bD(d)
$.cx.x1$.push(this.ga51())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azk()
return B.SV(B.b2c(0,B.b9(v.ayP(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.t)}}
A.acV.prototype={
bj(d){return A.bRO(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a13.prototype={
h7(d){if(!(d.b instanceof B.hs))d.b=new B.hs(null,null,C.t)},
i0(d){if(this.B===C.ay)return this.ys(d)
return this.ae7(d)},
aM0(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9O(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a9N(d,B.hI())
switch(this.B.a){case 0:return d.c2(new B.J(w.a,w.b))
case 1:return d.c2(new B.J(w.b,w.a))}},
a9N(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h5(u,null)
break
case 1:q=B.h5(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9O(p)
t=Math.max(t,o.aM0(p))
m=r.aH$}return new A.bgt(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga5.call(p)),n=p.a9N(o,B.mH()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.J(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.J(l,m))
p.gC(0)
p.gC(0)
break}w=p.ag$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.V[u]
r=w.fy
q=s.b-p.a9O(r==null?B.U(B.Z("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c7(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aH$;++u}},
ee(d,e){return this.yt(d,e)},
aO(d,e){if(this.gC(0).gZ(0))return
this.a3.sbh(0,null)
this.vl(d,e)},
l(){this.a3.sbh(0,null)
this.aph()}}
A.bgt.prototype={}
A.ay1.prototype={}
A.jW.prototype={
gbE(){return[this.a,this.b]}}
A.o2.prototype={}
A.ahD.prototype={}
A.ahE.prototype={
aJ(d){var w,v,u
this.fl(d)
w=this.ag$
for(v=x.L;w!=null;){w.aJ(d)
u=w.b
u.toString
w=v.a(u).aH$}},
aD(d){var w,v,u
this.f9(0)
w=this.ag$
for(v=x.L;w!=null;){w.aD(0)
u=w.b
u.toString
w=v.a(u).aH$}}}
A.ahF.prototype={}
A.TK.prototype={
l(){var w,v,u
for(w=this.WF$,v=w.length,u=0;u<v;++u)w[u].l()
this.iA()}}
A.AX.prototype={
goO(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.dK
case 1:return C.fj
case 2:return C.hG
case 3:return C.fi}},
gb0P(){var w=this.d,v=A.by4(w.d),u=A.bFK(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ad(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ad(0,new B.al(u.a,0,u.c,0))}},
gaiS(){var w=this.d,v=A.bFK(w.a),u=A.by4(w.d)
switch(this.c.a){case 2:case 0:return u.gd4(0)+u.gd7(0)+(v.gd4(0)+v.gd7(0))
case 1:case 3:return u.geB()+v.geB()}},
aXR(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goO().c.d
if(o==null)o=$.lH().P1(d,f-e)
w=p.c
v=w!==D.mJ
if((!v||w===D.dN)&&p.d instanceof A.o3){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bxg(u,d)
w=new B.j1(t,B.aa(t).i("j1<1>"))
s=w.gi2(w).eQ(0,new A.b_b(u),x.W).fH(0)}else{r=$.bwg()
w=!v||w===D.dN
v=p.d
q=r.aX6(w?v.w:v.z,o,f,e)
v=B.ne(q,new A.b_c(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.aa(s).i("ae<1,o2>")
w=B.Q(new B.ae(s,new A.b_d(p,e,f,o,g,d),w),w.i("ax.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goO()
w=j.goO()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b9(i,i,C.r,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mJ
u=!v
t=!u||w===D.dN
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dN?C.K:C.ay
q=B.b([],x.p)
if(w===D.Bm||v)j.goO()
if(j.goO().c.a){v=!u||w===D.dN?r:j.goO().c.c
p=!u||w===D.dN?j.goO().c.c:r
o=j.gb0P()
n=!u||w===D.dN?C.ay:C.K
j.gaiS()
m=j.gaiS()
l=!u||w===D.dN
k=j.d
l=l?k.f:k.x
u=!u||w===D.dN?k.r:k.y
q.push(B.b9(i,A.bZa(new A.ay1(),n,j.aXR(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bn||w===D.dN)j.goO()
return new B.eQ(t,i,i,B.bUF(q,C.k,s,i,C.f,C.H,0,i,i,C.bA),i)}}
A.a1h.prototype={
gbE(){return[this.a,this.b]}}
A.a5u.prototype={
gbE(){return[this.a,this.b]}}
A.Nf.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5w.prototype={
gaci(d){return!1},
gbE(){return[!1,!1,!1,!1]}}
A.ayx.prototype={}
A.aER.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ahZ.prototype={}
A.al3.prototype={}
A.al4.prototype={}
A.alb.prototype={}
A.L4.prototype={
ih(d,e,f){}}
A.vH.prototype={}
A.hr.prototype={
gdQ(){return null},
gagB(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.Ne
if(w)return!0
return!(v instanceof A.Nb)&&!(v instanceof A.Na)&&!(v instanceof A.Nc)&&!(v instanceof A.N9)&&!w&&!(v instanceof A.Nd)}}
A.a5A.prototype={
gdQ(){return this.a.b}}
A.a5B.prototype={
gdQ(){return this.a.b}}
A.a5C.prototype={
gdQ(){return this.a.b}}
A.Na.prototype={}
A.Nb.prototype={}
A.a5F.prototype={
gdQ(){return this.a.b}}
A.Nd.prototype={}
A.Ne.prototype={
gdQ(){return this.a.b}}
A.a5z.prototype={
gdQ(){return this.a.b}}
A.a5y.prototype={
gdQ(){return this.a.b}}
A.N9.prototype={
gdQ(){return this.a.b}}
A.a5D.prototype={
gdQ(){return this.a.gdQ()}}
A.a5E.prototype={
gdQ(){return this.a.gdQ()}}
A.Nc.prototype={
gdQ(){return this.a.gdQ()}}
A.Ge.prototype={
Zn(d){this.U=d.b
this.V=d.c
this.a3=d.d},
ag4(){var w=this,v=null,u=w.ak=B.byT(v,v)
u.ay=new A.aVl(w)
u.ch=new A.aVm(w)
u.CW=new A.aVn(w)
u.cy=new A.aVo(w)
u.cx=new A.aVp(w)
u=w.aG=B.H3(v,-1,v)
u.B=new A.aVq(w)
u.a4=new A.aVr(w)
u.U=new A.aVs(w)
u=w.bx=B.a7w(v,w.a3,v)
u.p3=new A.aVt(w)
u.p4=new A.aVu(w)
u.RG=new A.aVv(w)},
cv(){var w=x.k.a(B.K.prototype.ga5.call(this))
this.fy=new B.J(w.b,w.d)},
dE(d){return new B.J(d.b,d.d)},
kP(d){return!0},
n1(d,e){var w,v=this
if(v.U==null)return
if(x.eo.b(d)){w=v.bx
w===$&&B.a()
w.oL(d)
w=v.aG
w===$&&B.a()
w.oL(d)
w=v.ak
w===$&&B.a()
w.oL(d)}else if(x.gJ.b(d))v.lg(new A.a5E(d))},
gNq(d){return new A.aVw(this)},
gNs(d){return new A.aVx(this)},
lg(d){var w,v,u=this
if(u.U==null)return
w=d.gdQ()
v=w!=null?u.a_p(w):null
u.U.$2(d,v)
u.a4=C.bl},
gLj(d){return this.a4},
gFO(){var w=this.aq
w===$&&B.a()
return w},
aJ(d){this.fl(d)
this.aq=!0},
aD(d){this.aq=!1
this.f9(0)},
$ijC:1}
A.OB.prototype={
W(){return new A.W6(B.b([],x.r),B.z(x.S,x.J),new A.aL5(B.z(x.y,x.dj)),null,null)}}
A.W6.prototype={
u(d){var w,v=this,u=v.a53(),t=v.CW
t.toString
t=v.abO(t.aw(0,v.gh9().gq(0)))
w=v.abO(u)
v.a.toString
return new A.KW(new A.a7n(t,w,null),u,null)},
abO(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.aa(w).i("ae<1,ee>")
w=B.Q(new B.ae(w,new A.bgy(this,d),v),v.i("ax.E"))
return d.aRT(w,this.cy)},
a53(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vb(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aS7(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRw(new A.F4(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaA9(),t.c,t.d))}return r},
aAa(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagB())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bgw(v))
return}v.J(new A.bgx(v,e))},
m8(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a53(),new A.bgz(w)))}}
A.pV.prototype={
XL(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5v(B.a1t(d.a.b,j.b,f),j.a)
w=A.bFH(d.at,e.at,f)
v=A.bFL(d.c,e.c,f)
u=A.bFN(d.d,e.d,f)
t=A.bHK(d.e,e.e,f)
s=A.kB(d.ch,e.ch,f,A.c77(),x.cz)
s.toString
r=A.kB(d.CW,e.CW,f,A.c76(),x.bO)
r.toString
u=A.byx(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VP(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byx(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aS7(d,e,f,g){return this.VP(null,null,d,e,f,g,null)},
aRw(d){var w=null
return this.VP(w,d,w,w,w,w,w)},
aRT(d,e){var w=null
return this.VP(d,w,w,w,w,w,e)},
gbE(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ee.prototype={
arU(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qr(n.a,new A.aL4())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
if(o.k(0,D.fS))continue
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
adL(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aL3(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRD(d){return this.adL(d,null)},
aRF(d){return this.adL(null,d)},
gbE(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OC.prototype={
gbE(){return[this.a]}}
A.a1a.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mO.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.L_.prototype={
gbE(){return[!1,this.b,this.c,!0]}}
A.yC.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.aKU.prototype={
L(){return"LabelDirection."+this.b}}
A.a5x.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.F4.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7o.prototype={
gbE(){return[4,C.hY,16,D.xO,0,120,A.c79(),!1,!1,!1,0,C.N,A.c78()]}}
A.nc.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qs.prototype={}
A.rH.prototype={
gbE(){return[this.a,this.b,C.cF,C.w,null]}}
A.tC.prototype={
gbE(){return[this.a,this.b]}}
A.GG.prototype={
gbE(){return[this.a]}}
A.OD.prototype={}
A.zp.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XL(v,w,d)}}
A.ahM.prototype={}
A.ahN.prototype={}
A.ai_.prototype={}
A.al5.prototype={}
A.al8.prototype={}
A.amQ.prototype={}
A.amR.prototype={}
A.amS.prototype={}
A.amU.prototype={}
A.amV.prototype={}
A.amW.prototype={}
A.amX.prototype={}
A.arq.prototype={}
A.at5.prototype={}
A.aL5.prototype={
Vb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yu
u=new A.zv(d,x.y)
t=this.a
if(t.aF(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zq(s,r,q,t,!0)}w=null
try{w=C.b.qr(d,new A.aL6())}catch(p){return D.yu}v=null
try{v=C.b.qr(w.a,new A.aL7())}catch(p){return D.yu}o=v.a
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
if(f<m)m=f}e=new A.zq(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zq.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.amT.prototype={}
A.aL8.prototype={
ih(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaci(0)){v=a3.b
u=v.a
v=v.b
$.ao()
a3.a.jz(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aZ())
a3.aQu(new B.I(0,0,u,v))}d.a0w(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aTj(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTf(a3,q,a4)
d.aTk(a3,q,a4)
d.amI(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.V(o)
if(n.gp(o)!==p.length)throw B.e(B.e7("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vs(q,i,j,k))}}d.aTr(a3,s,a4)
if(w.gaci(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTp(a2,a3,v,f,new A.GG(g),a4)}},
aTf(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.by3(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.ZZ(o,e,u,f)
s=p.akb(o,e,t,u,f)
r=p.a_0(o,e,t,u,f,!0)
q=p.aka(o,e,t,u,f)
p.aTi(d,s,p.ZY(o,e,t,u,f,!0),f,e)
p.aTc(d,q,r,f,e)
p.aTg(d,t,e)
p.aTe(d,t,e,f)}},
aTj(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.by3(a5.a),a8=A.by3(a6.a)
if(a7.length!==a8.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bT.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.aa(n).i("cE<1>")
l=B.Q(new B.cE(n,m),m.i("ax.E"))
k=a2.ZZ(a3,a5,o,b2)
j=a2.a__(a3,a6.aRF(l),l,b2,k)
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
n=a2.fh(i,a3,b2)
m=a2.dI(h,a3,b2)
e=a2.fh(g,a3,b2)
d=a2.dI(f,a3,b2)
a0=a2.r
a0===$&&B.a()
if(q){a0.r=C.E.gq(0)
a0.sf0(v.nQ(0,new B.I(n,m,e,d)))}else{a0.r=(r?C.F:w).gq(0)
a0.sf0(null)}$.ao()
a1=new B.mR(C.dx,C.bd,C.ea,C.ey,C.dW).e2()
n=B.dO(new B.I(0,0,t,s))
m=$.bT.b
if(m===$.bT)B.U(B.vq(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e2()
n=j.e
a4.drawPath((n==null?j.e=new B.mS(j.gjD().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTk(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_4(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fS)&&t.$2(q,e)){p=this.fh(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aet(s,q,new B.r(p,o))}}},
aTr(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fU(b3,new A.aLb())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.a_4(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fh(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.ct()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rG(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lD(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lD(q.$2(m,k))))
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
b0=B.lb(a3,a5)
if(a6!=null){f.r=C.E.gq(0)
f.sf0(a6.nQ(0,b0))}else{if(a4==null)a4=C.F
f.r=a4.gq(a4)
f.sf0(null)}a4=a9.c
f.c=a4
if(a4===0){f.sf0(null)
a4=B.c0(f.r)
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gq(0)}b2.DU(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rG(d.a))
f.aet(t,j,new B.r(h,g))}}},
a__(d,e,f,g,h){var w=this.akc(d,e,f,g,h)
return w},
ZZ(d,e,f,g){return this.a__(d,e,f,g,null)},
akc(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.ao().r,C.af,null,null,B.b([],x.v)):a5,f=J.V(a3),e=f.gp(a3),d=i.fh(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.ar(new B.fh(d,a0))
if(e===1)g.ar(new B.ca(d,a0))}else g.ar(new B.ca(d,a0))
for(h=g.r,w=a2.y,v=a2.z,u=C.t,t=1;t<e;t=o,u=j){s=i.fh(f.h(a3,t).a,a1,a4)
r=i.dI(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fh(f.h(a3,q).a,a1,a4)
q=i.dI(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fh(f.h(a3,n?o:t).a,a1,a4)
l=i.dI(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.M2(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iI(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_0(d,e,f,g,h,i){var w=this,v=B.MW(f),u=J.V(g),t=w.fh(u.h(g,u.gp(g)-1).a,d,h),s=d.b
v.ar(new B.ca(t,s))
t=w.fh(u.h(g,0).a,d,h)
v.ar(new B.ca(t,s))
v.ar(new B.ca(w.fh(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.ar(new B.o7())
return v},
akb(d,e,f,g,h){return this.a_0(d,e,f,g,h,!1)},
ZY(d,e,f,g,h,i){var w=this,v=B.MW(f),u=J.V(g),t=w.fh(u.h(g,u.gp(g)-1).a,d,h)
v.ar(new B.ca(t,0))
t=w.fh(u.h(g,0).a,d,h)
v.ar(new B.ca(t,0))
v.ar(new B.ca(w.fh(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.ar(new B.o7())
return v},
aka(d,e,f,g,h){return this.ZY(d,e,f,g,h,!1)},
aTi(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fh(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dI(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fh(t.a,w,g)
s=r.r
s===$&&B.a()
A.byS(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.hN(e,r.r)},
aTc(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fh(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fh(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dI(t.b,w,g)
s=r.r
s===$&&B.a()
A.byS(s,q.b,q.c,new B.I(v,0,u,t))
d.a.hN(e,r.r)},
aTg(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.MY(B.MW(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ke:C.ea
u.e=C.ey
u.r=v.gq(0)
u.sf0(null)
u.c=f.x
u.r=v.gq(0)
$.lH()
u.z=new B.zB(C.aJ,w.c*0.57735+0.5)
d.a.hN(A.aBn(e,f.cy).e8(w.b),this.f)},
aTe(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.ke:C.ea
q.e=C.ey
q=f.b
q===$&&B.a()
q=s.fh(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dI(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fh(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dI(u.b,r,g)
t=s.f
A.byS(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bX3(t)
d.a.hN(A.aBn(e,f.cy),s.f)},
aTp(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLY(b1),b3=J.V(b2)
if(b3.gp(b2)!==b1.length)throw B.e(B.e7("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lH().a_w(b4,u.b)
s=u.a
r=w.k(0,C.j_)?new B.jQ(1):w
q=new B.qq(new B.hD(s,a8,a8,C.bl,a8,a8,a8,a8,a8,a8,t),C.cF,C.w,r,a8,a8,a8,a8,C.bj,a8)
q.agU(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.G)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fh(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hY.geB()
k=o+(w-1)*4+(C.hY.gd4(0)+C.hY.gd7(0))
j=t-k-16
i=a7.a_x(b3,l,D.xO,0)
b3=i+l
w=j+k
h=new B.aX(4,4)
g=B.G1(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLX(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lH().KQ(new B.J(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lH().KQ(new B.J(t,w),0)
if(!C.N.k(0,C.N)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.Wr(0,new A.aL9(a7,b5,g),a0,d,new B.J(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.G)(b0),++n){q=b0[n]
a5=A.bZL(q.r,q.w)
A:{if(D.En===a5){a6=a3
break A}if(D.Eo===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wr(0,new A.aLa(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.J(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
a_4(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fh(v[0].a,e,f)
return this.fh(v[v.length-1].a,e,f)-w},
X3(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akD(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fU(t,new A.aLc())
return t.length===0?null:t},
akD(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fS))continue
p=u.$2(e,new B.r(this.fh(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qs(s,f,g,C.b.hy(w,v),v.a,v.b)}else return null}}
A.vs.prototype={}
A.a7n.prototype={
bj(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcQ(),t=new A.aL8()
t.a1L()
$.ao()
w=B.aZ()
w.b=C.aY
t.f=w
w=B.aZ()
w.b=C.bd
t.r=w
w=B.aZ()
w.b=C.aY
t.w=w
w=B.aZ()
w.b=C.bd
w.r=C.F.gq(0)
w.a=D.a0g
t.x=w
w=B.aZ()
w.b=C.aY
w.r=C.E.gq(0)
t.y=w
w=B.aZ()
w.b=C.bd
w.r=C.y.gq(0)
t.z=w
w=B.aZ()
w.b=C.aY
w.r=C.F.gq(0)
w.c=1
t.Q=w
t=new A.abB(this.d,v,u,t,d,C.bl,new B.bs(),B.aJ(x.g))
t.bf()
t.Zn(v.cx)
t.ag4()
return t},
by(d,e){e.sir(0,this.d)
e.sZ7(this.e)
e.scQ(B.bD(d,null,x.w).w.gcQ())
e.B=d
e.bb()}}
A.abB.prototype={
sir(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bb()},
sZ7(d){var w=this
if(w.i8.k(0,d))return
w.i8=d
w.a1f(d.cx)
w.bb()},
scQ(d){if(this.cX.k(0,d))return
this.cX=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdw(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fO.ih(w,new A.a1G(t,v),new A.vH(u.aB,u.i8,u.cX,x.o))
s.restore()},
a_p(d){var w=this,v=w.gC(0)
return new A.OD(w.fO.X3(d,v,new A.vH(w.aB,w.i8,w.cX,x.o)))}}
A.NF.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1G.prototype={
aQu(d){this.a.a.clipRect(B.dO(d),$.nT()[1],!0)
return null},
aeB(d,e){d.aO(this.a,e)},
Wr(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bc(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lH()
s.Z5(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
DU(d,e,f,g){var w=new B.cl($.ao().r,C.af,null,null,B.b([],x.v))
w.ar(new B.fh(d.a,d.b))
w.ar(new B.ca(e.a,e.b))
this.a.hN(A.aBn(w,g),f)}}
A.zv.prototype={
gbE(){return[this.a]}}
A.an3.prototype={}
A.a1R.prototype={}
A.b2E.prototype={
KQ(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYr(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aX(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aX(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aX(v,v)
s=d.d
return new B.d8(w,u,t,s.a>v||s.b>v?new B.aX(v,v):s)},
aYs(d,e){var w,v
if(d==null)return D.a0r
w=d.b
v=e/2
return d.aRI(w>v?v:w)},
P1(d,e){var w,v=Math.max(C.d.cF(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0A(w)},
b0A(d){if(d<1)return this.aKv(d)
return this.a8Q(d)},
aKv(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8Q(d*q)/q},
a8Q(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
aks(d){if(d>=1)return 1
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
a_w(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.j6
w=e.a?u.w.c3(e):e
v=B.bN(d,C.vu)
v=v==null?null:v.ay
return v===!0?w.c3(C.mp):w},
akk(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qu)","A(eD)","~(v,fN)","F(ee,v)","S<~>()","F(F,qu)","bQ(F,tB)","pL(F)","v(qs,qs)","It(oj)","I9(C,bJ)","Jr(ok)","vw(@)","wt(@)","ee(F)","D_(@)","ab(F,tB)","uW(dl<uW>)","Er(dl<aFG>)","F(vw)","F(wt)","wN(C,bJ)","Bs(y)","~()","qu(@)","~(hr,L1?)","xJ(@)","F(iv)","A(fN)","~(v,iv)","~(@)","jW(o2)","c(o2)","jW(bt<v,F>)","jW(F)","o2(jW)","~(hr,OD?)","ee(ee)","lV(GS<lV>)","zp(@)","S<ok>(ck<ok>)","tC(v)","uX(eD,F,ee,v)","rH(nc)","A(ee)","v(vs,vs)","F(fN)","S<oj>(ck<oj>)","v(v,v,F)","fN(fN,fN,F)","iv(iv,iv,F)","mN(mN,mN,F)","Di?(fN,v,iv,v)","E(fN)","c(F,tB)","eD(eD,eD,F)","A(F)","n6(n6,n6,F)","nB(nB,nB,F)","kW(kW,kW,F)","ln(ln,ln,F)","f(kW)","f(ln)","ee(ee,ee,F)","mO(mO,mO,F)","uX(eD,F,ee,v{size:F?})","A(eD,ee)","F(r,r)","u<tC>(ee,u<v>)","yb(y)","u<rH>(u<nc>)","E(nc)","yA(f5<C?>)"])
A.aFC.prototype={
$1(d){var w=B.dh(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qu(J.am(v==null?"":v),A.pc(w.h(0,"revenue_net")),A.pc(w.h(0,"expense_net")),A.pc(w.h(0,"result_net")))},
$S:z+24}
A.aFD.prototype={
$1(d){var w,v,u,t=B.dh(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.pc(t.h(0,"gross"))
u=B.b4(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vw(s,r,w,v,u,A.pc(t.h(0,"avg_basket")))},
$S:z+12}
A.aFE.prototype={
$1(d){var w,v=B.dh(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b4(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wt(u,t,w,A.pc(v.h(0,"gross")))},
$S:z+13}
A.aFV.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.V(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.D_(v,u,J.am(t==null?"expense":t),A.ui(w.h(d,"net")),A.ui(w.h(d,"tax")),A.ui(w.h(d,"gross")))},
$S:z+15}
A.btX.prototype={
$1(d){return new A.uW(d.ap($.bL(),x.A))},
$S:z+17}
A.btY.prototype={
$1(d){return new A.Er(d.ap($.bQF(),x.D))},
$S:z+18}
A.bvN.prototype={
$1(d){return E.aFF()},
$S:z+38}
A.btZ.prototype={
$1(d){var w=d.ap($.xt(),x.P)
return d.ap($.awe(),x.a).Gf(w)},
$S:z+40}
A.btW.prototype={
$1(d){var w=d.ap($.xt(),x.P)
return d.ap($.awe(),x.a).Ga(w)},
$S:z+47}
A.btV.prototype={
$1(d){return this.ak_(d)},
ak_(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.ap($.bL(),x.A).h4("finance_balance_kpis",t),$async$$1)
case 3:s=r.dh(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:213}
A.aFB.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aE(0,$.awe(),x.a).pN(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFA.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aE(0,$.awe(),x.a).LV(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFT.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwM()
if(s.e==null)B.U(B.Z(y.b))
s.gcw().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFL.prototype={
$0(){return this.a.JN(this.b,this.c)},
$S:0}
A.aFM.prototype={
$0(){return this.a.BG(this.b,this.c)},
$S:0}
A.aFN.prototype={
$0(){var w=x.z
return B.b6(this.a,!1).es(B.eH(new A.aFK(),null,w),w)},
$S:0}
A.aFK.prototype={
$1(d){return F.Di},
$S:z+69}
A.aFO.prototype={
$0(){return B.op(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFP.prototype={
$0(){var w=this
return w.a.BH(w.b,w.c,w.d)},
$S:0}
A.aFS.prototype={
$0(){return F.Tw},
$S:138}
A.aFR.prototype={
$2(d,e){return new A.I9(B.i(d),null)},
$S:z+10}
A.aFQ.prototype={
$1(d){return new A.Jr(d,null)},
$S:z+11}
A.aFJ.prototype={
$1(d){var w=null,v=this.a,u=$.dp()
v=B.j("Die Finanzauswertung f\xfcr "+u.am(v.a)+" \u2013 "+u.am(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.iu(B.b([B.da(C.bZ,w,w,new A.aFH(u),w,w),B.dk(F.mq,new A.aFI(u),B.dJ(C.m,C.A,w,w,w,w,w))],x.p),w,v,F.mr)},
$S:43}
A.aFH.prototype={
$0(){B.b6(this.a,!1).cD(!1)
return null},
$S:0}
A.aFI.prototype={
$0(){B.b6(this.a,!1).cD(!0)
return null},
$S:0}
A.bja.prototype={
$0(){var w=this.a.aE(0,$.xt().ghR(),x.V),v=E.aFF()
w.wR(0,v)
return v},
$S:0}
A.bjb.prototype={
$0(){var w=this.a.aE(0,$.xt().ghR(),x.V),v=new B.b_(Date.now(),0,!1),u=new E.lV(B.bB(B.aW(v),1,1,0,0,0,0),v)
w.wR(0,u)
return u},
$S:0}
A.bjc.prototype={
$0(){return this.a.J8(this.b,this.c)},
$S:0}
A.bj9.prototype={
$2(d,e){return new B.oT(B.W(d).aR3(B.W(d).ax.aRY(C.j,C.m)),e,null)},
$S:1022}
A.bp5.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.d3(),s=A.Op(!1,C.o1,"Umsatz 7 %",t.am(u.a),w),r=A.Op(!1,C.o1,"Umsatz 19 %",t.am(u.b),w),q=A.Op(!0,D.aav,"Umsatz netto",t.am(u.c),w),p=A.Op(!1,D.aau,"Aufwand",t.am(u.d),w),o=u.e,n=t.am(o)
return B.a6b(1.7,B.b([s,r,q,p,A.Op(!0,C.y2,"Ergebnis",n,o<0?C.an:C.aE),A.Op(!1,C.fv,"USt-Saldo",t.am(u.f-u.r),w)],x.p),v,12,12,C.jX,!0)},
$S:103}
A.aKT.prototype={
$0(){return D.auh},
$S:138}
A.aKS.prototype={
$2(d,e){var w=null
return B.by(C.an,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.j,13,C.l),w,w,w),C.eJ,w,C.C,w,3)},
$S:220}
A.aKR.prototype={
$1(d){return new A.It(d,null)},
$S:z+9}
A.bgk.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.d3(),i=j.am(k.c),h=l.w,g=l.d,f=B.aa(g).i("ae<1,F>"),e=f.i("ax.E"),d=B.Q(new B.ae(g,new A.bg9(),f),e)
i=A.jP(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.am(r.b)
w=B.Q(new B.ae(g,new A.bga(),f),e)
d=A.jP(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.am(k.e)
w=B.Q(new B.ae(g,new A.bgb(),f),e)
k=A.jP(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ae(h.b,1)
v=B.Q(new B.ae(g,new A.bgc(),f),e)
w=A.jP(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ae(h.a,1)
u=B.Q(new B.ae(g,new A.bgd(),f),e)
v=A.jP(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ae(r.c,1)
t=B.Q(new B.ae(g,new A.bge(),f),e)
u=A.jP(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ae(h.c,1)
s=B.Q(new B.ae(g,new A.bgf(),f),e)
t=A.jP(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.am(h.d)
s=B.Q(new B.ae(g,new A.bgg(),f),e)
h=A.jP(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.am(l.r.d)
m=B.Q(new B.ae(g,new A.bgh(m),f),e)
m=A.jP(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.am(l)
l=B.Q(new B.ae(g,new A.bgi(l),f),e)
l=A.jP(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ae(j,1)
j=B.Q(new B.ae(g,new A.bgj(j),f),e)
return B.a6b(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jP(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jX,!0)},
$S:103}
A.bg9.prototype={
$1(d){return d.b},
$S:z+0}
A.bga.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bgb.prototype={
$1(d){return d.d},
$S:z+0}
A.bgc.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgd.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bge.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgf.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgg.prototype={
$1(d){return d.d},
$S:z+0}
A.bgh.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgi.prototype={
$1(d){return this.a},
$S:z+0}
A.bgj.prototype={
$1(d){return this.a},
$S:z+0}
A.bgl.prototype={
$0(){return A.bAV(this.b,1.45,new A.U8(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgm.prototype={
$0(){return A.bAV(this.b,1.6,new A.Uj(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bt3.prototype={
$1(d){var w=this,v=null,u=B.aR(16),t=x.p,s=B.b([B.ap(B.b([B.aB(B.j(w.a,v,v,v,B.c8(C.j,18,C.q),v,v,v),1),B.fn(v,v,D.adc,v,v,new A.bt2(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.K(s,B.b([B.j(w.b,v,v,v,B.D(C.p,12,C.aK),v,v,v),C.M],t))
s.push(C.u)
s.push(B.cg(new B.mM(w.c,w.d,v),v,17976931348623157e292))
return B.a4L(v,C.A,new B.aj(C.ai,B.ad(s,C.D,v,C.f,C.H,0),v),v,v,v,C.fu,C.uU,v,new B.dd(u,C.N),v)},
$S:1023}
A.bt2.prototype={
$0(){return B.b6(this.a,!1).fg()},
$S:0}
A.bgn.prototype={
$0(){var w=this.a,v=B.ay(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAV(this.b,2.4,new A.Yu(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.boC.prototype={
$2(d,e){return d<e?d:e},
$S:47}
A.boD.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.boE.prototype={
$1(d){return A.aL3(null,1.4,null,C.an,0.35,D.ah6,D.Ed,null,!1,!1,!1,!1,D.FI,!1,10,D.Yu,!0,C.lz,B.b([new A.eD(0,d),new A.eD(this.a,d)],x.U))},
$S:z+14}
A.b6n.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6p.prototype={
$2(d,e){var w=null
return B.j(this.a.aLQ(d),w,w,w,B.D(C.p,10,C.S),w,w,w)},
$S:z+16}
A.b6q.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.Aj
return new B.aj(C.hX,B.j(C.c.cR(this.a[v].a,5),w,w,w,B.D(C.p,9,C.S),w,w,w),w)},
$S:z+6}
A.b6o.prototype={
$1(d){return D.a92},
$S:z+7}
A.b7d.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7e.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7f.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.b7g.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.Aj
return new B.aj(C.hX,B.j(this.a[v],w,w,w,B.D(C.j,12,C.q),w,w,w),w)},
$S:z+6}
A.bgS.prototype={
$1(d){return d.d},
$S:z+19}
A.bgT.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.bqm.prototype={
$1(d){return d.d},
$S:z+20}
A.bqn.prototype={
$2(d,e){return d>e?d:e},
$S:47}
A.b4U.prototype={
$0(){return D.auo},
$S:138}
A.b4T.prototype={
$2(d,e){return new A.wN("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b4S.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.D(C.j,14,C.S),m,m,m),C.M,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.D(C.p,12.5,C.l),m,m,m),C.u,B.lo(C.cx,B.b([B.fU(C.Fa,D.aID,new A.b4M(w,v),m),B.fU(D.acb,D.aHr,new A.b4N(w,v),m)],u),C.dI,8,8)],u),C.D,m,C.f,C.h,0),C.ae,m,C.C,m,3)}w=new A.b4V(d)
t=C.b.fn(n.a.e.d,0,new A.b4O())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.i9(new A.b4P(new A.b4W(w),r,w,s))
v=J.V(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.M,B.ap(B.b([B.aB(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.D(C.p,11,C.l),m,m,m),1),B.nv(D.adr,D.aHP,new A.b4Q(q,p),m),B.nv(D.ad1,D.aHA,new A.b4R(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.a8,m,C.f,C.h,0)},
$S:218}
A.b4M.prototype={
$0(){return A.avD(this.a,this.b,null)},
$S:0}
A.b4N.prototype={
$0(){return A.avA(this.a,this.b)},
$S:0}
A.b4V.prototype={
$1(d){var w=B.b4(J.a_(this.a,d))
return w==null?null:w},
$S:1024}
A.b4W.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ae(v,1)
w=B.ay(w,".",",")+" %"}return w},
$S:34}
A.b4O.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4P.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jP(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ia,o.$1("liquidity1_pct")),m=A.jP(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ia,o.$1("liquidity2_pct")),l=A.jP(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ia,o.$1("liquidity3_pct"))
o=A.jP(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ia,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ae(w,1)
w=B.ay(w,".",",")+" %"}w=A.jP(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ia,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.d3()
v=u.am(v)
return B.a6b(p,B.b([n,m,l,o,w,A.jP(s,s,!1,"Bilanzsumme",!1,"EK "+u.am(t.d),s,s,s,C.ia,v)],x.p),q,12,12,C.jX,!0)},
$S:103}
A.b4Q.prototype={
$0(){return A.avA(this.a,this.b)},
$S:0}
A.b4R.prototype={
$0(){return A.avD(this.a,this.b,this.c)},
$S:0}
A.bt1.prototype={
$1(d){return new A.Bs(this.a,new A.bt0(this.b),this.c,null)},
$S:z+22}
A.bt0.prototype={
$0(){var w=this.a,v=$.bwL()
if(w.e==null)B.U(B.Z(y.b))
w.gcw().cs(v)},
$S:0}
A.b4G.prototype={
$0(){},
$S:0}
A.b4H.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4I.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4K.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.pe(u.b,B.bB(2024,1,1,0,0,0,0),null,r,new B.b_(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4J(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4J.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4L.prototype={
$0(){return B.b6(this.a,!1).fg()},
$S:0}
A.b4X.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4Y.prototype={
$1(d){return new A.xJ(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayi.prototype={
$1(d){return d.e},
$S:z+27}
A.ayj.prototype={
$2(d,e){return d+e},
$S:47}
A.ayl.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayn.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayo.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eV(t,r)
s=s.x
s===$&&B.a()
w.eV(t,s)
u.aeB(v.d,v.e)},
$S:0}
A.ay0.prototype={
$1(d){return 0},
$S:1025}
A.ay_.prototype={
$2(d,e){return B.fE(C.c1,this.a.amo(e),C.n,C.bK,null)},
$S:1026}
A.b_9.prototype={
$1(d){return d.a},
$S:z+31}
A.b_a.prototype={
$1(d){return d.b},
$S:z+32}
A.b_b.prototype={
$1(d){return new A.jW(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_c.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mJ||v===D.dN))t=1-t
return new A.jW(d,t*w.d)},
$S:z+34}
A.b_d.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goO(),p=d.a
r.goO()
r=$.lH()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ae(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ae(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ae(v/1000,1)
t="K"}else{u=C.d.ae(v,r.aks(Math.abs(s.b-s.c)))
t=""}if(C.c.hs(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o2(d,q.c.b.$2(p,new A.tB(u+t,s.e)))},
$S:z+35}
A.aVl.prototype={
$1(d){this.a.lg(new A.a5A(d))},
$S:162}
A.aVm.prototype={
$1(d){this.a.lg(new A.a5B(d))},
$S:42}
A.aVn.prototype={
$1(d){this.a.lg(new A.a5C(d))},
$S:28}
A.aVo.prototype={
$0(){this.a.lg(D.a1X)},
$S:0}
A.aVp.prototype={
$1(d){this.a.lg(new A.Nb())},
$S:46}
A.aVq.prototype={
$1(d){this.a.lg(new A.a5F(d))},
$S:44}
A.aVr.prototype={
$0(){this.a.lg(D.a1Y)},
$S:0}
A.aVs.prototype={
$1(d){this.a.lg(new A.Ne(d))},
$S:96}
A.aVt.prototype={
$1(d){this.a.lg(new A.a5z(d))},
$S:165}
A.aVu.prototype={
$1(d){this.a.lg(new A.a5y(d))},
$S:166}
A.aVv.prototype={
$1(d){return this.a.lg(new A.N9(d))},
$S:167}
A.aVw.prototype={
$1(d){return this.a.lg(new A.a5D(d))},
$S:60}
A.aVx.prototype={
$1(d){return this.a.lg(new A.Nc(d))},
$S:58}
A.bgy.prototype={
$1(d){var w=this.a.db.h(0,C.b.hy(this.b.ch,d))
return d.aRD(w==null?B.b([],x.t):w)},
$S:z+37}
A.bgw.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bgx.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fU(w,new A.bgv())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.GG(w))},
$S:0}
A.bgv.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.bgz.prototype={
$1(d){return new A.zp(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aL4.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+1}
A.btM.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFM(t?A.bAE(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tC(w,new A.yC(!0,A.bBv(),new A.btL(v)))},
$S:z+41}
A.btL.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUD(A.bAE(d,e,f),w,A.c2z(d,e,f))},
$S:z+42}
A.btJ.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.jb(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.S,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rH(C.d.j(d.b),w)},
$S:z+43}
A.aL6.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aL7.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+1}
A.aLb.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aL9.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eV(v,t)
u=u.Q
u===$&&B.a()
w.eV(v,u)},
$S:0}
A.aLa.prototype={
$0(){this.a.aeB(this.b,this.c)},
$S:0}
A.aLc.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.ayb.prototype={
$1(d){return d.gdt(0)},
$S:z+46}
A.ayc.prototype={
$2(d,e){return d+e},
$S:47}
A.ayf.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.aa(v).i("j1<1>")).aC(0,new A.ayg(w,this.a/(u+1),this.c))},
$S:0}
A.ayg.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+2}
A.ayd.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+2}
A.aye.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIa.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1027}
A.aBo.prototype={
$1(d){return d},
$S:1028};(function aliases(){var w=A.KV.prototype
w.a0w=w.ih
w.amI=w.aTl
w.amJ=w.aeu
w=A.TK.prototype
w.aph=w.l
w=A.L4.prototype
w.a0y=w.ih
w=A.Ge.prototype
w.a1f=w.Zn})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c6c","bUA",72)
var q
v(q=A.TM.prototype,"gaFH","aFI",23)
v(q,"gaEC","Io",4)
v(q,"gaFp","IA",4)
u(A.TN.prototype,"gatc","atd",25)
t(A,"c50",3,null,["$3"],["bRR"],49,0)
t(A,"c51",3,null,["$3"],["bRS"],50,0)
t(A,"c52",3,null,["$3"],["bRT"],51,0)
t(A,"c54",4,null,["$4"],["c5Q"],52,0)
w(A,"c53","c5P",53)
s(A,"bB_","c5R",54)
t(A,"c4W",3,null,["$3"],["bUE"],55,0)
w(A,"a_C","c8i",56)
w(A,"avF","c5U",7)
t(A,"c4Y",3,null,["$3"],["bVo"],57,0)
t(A,"c5_",3,null,["$3"],["c_E"],58,0)
t(A,"c4X",3,null,["$3"],["bVn"],59,0)
t(A,"c4Z",3,null,["$3"],["c_D"],60,0)
w(A,"cfI","bVm",61)
w(A,"cfJ","c_C",62)
r(A.Yj.prototype,"ga51","ayR",30)
u(A.W6.prototype,"gaA9","aAa",36)
t(A,"c77",3,null,["$3"],["bVQ"],63,0)
t(A,"c76",3,null,["$3"],["bRU"],64,0)
w(A,"c7a","c8j",1)
t(A,"bMm",4,null,["$5$size","$4"],["bKN",function(d,e,f,g){return A.bKN(d,e,f,g,null)}],65,0)
s(A,"bBv","c8h",66)
s(A,"bMn","c4I",67)
s(A,"bMq","c5X",68)
s(A,"bMp","c5T",3)
s(A,"bMo","c5S",3)
w(A,"c79","bLY",70)
w(A,"c78","bLX",71)
t(A,"a_I",3,null,["$3"],["c74"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.R,[A.a79,A.agS,A.am7,A.J0,A.Jr,A.agQ,A.I9,A.It,A.alr,A.amJ,A.UV,A.Yu,A.U8,A.Uj,A.anc,A.ajt,A.Cs,A.at2,A.wN,A.KW,A.AX])
u(B.C,[A.uW,A.Er,A.bk,A.ahZ,A.ahP,A.ahR,A.ahS,A.ahH,A.alb,A.ahV,A.ahT,A.ayx,A.at6,A.ayk,A.ahQ,A.L4,A.a6c,A.tB,A.ars,A.arr,A.ahG,A.ala,A.eD,A.al7,A.al9,A.apw,A.alZ,A.atN,A.al8,A.akO,A.al6,A.axZ,A.bgt,A.ay1,A.ahD,A.o2,A.al3,A.al4,A.vH,A.hr,A.amR,A.amU,A.ahM,A.ai_,A.ahN,A.al5,A.amX,A.amV,A.at5,A.arq,A.aL5,A.amT,A.vs,A.a1G,A.an3,A.a1R,A.b2E])
u(B.uU,[A.qu,A.vw,A.wt,A.aAP,A.aBX,A.oj,A.D_,A.ok])
u(B.o8,[A.aFC,A.aFD,A.aFE,A.aFV,A.btX,A.btY,A.bvN,A.btZ,A.btW,A.btV,A.aFK,A.aFQ,A.aFJ,A.aKR,A.bg9,A.bga,A.bgb,A.bgc,A.bgd,A.bge,A.bgf,A.bgg,A.bgh,A.bgi,A.bgj,A.bt3,A.boE,A.b6o,A.b7d,A.b7e,A.bgS,A.bqm,A.b4S,A.b4V,A.b4W,A.bt1,A.b4Y,A.ayi,A.ayl,A.ay0,A.b_9,A.b_a,A.b_b,A.b_c,A.b_d,A.aVl,A.aVm,A.aVn,A.aVp,A.aVq,A.aVs,A.aVt,A.aVu,A.aVv,A.aVw,A.aVx,A.bgy,A.bgz,A.aL4,A.btM,A.btL,A.btJ,A.aL6,A.aL7,A.ayb,A.aBo])
t(A.yA,B.fF)
u(B.xZ,[A.aFB,A.aFA,A.aFT,A.aFL,A.aFM,A.aFN,A.aFO,A.aFP,A.aFS,A.aFH,A.aFI,A.bja,A.bjb,A.bjc,A.aKT,A.bgl,A.bgm,A.bt2,A.bgn,A.b4U,A.b4M,A.b4N,A.b4Q,A.b4R,A.bt0,A.b4G,A.b4H,A.b4I,A.b4K,A.b4J,A.b4L,A.b4X,A.ayo,A.aVo,A.aVr,A.bgw,A.bgx,A.aL9,A.aLa,A.ayf])
u(B.y7,[A.yB,A.aop,A.a7a,A.ahL])
u(B.y_,[A.aFR,A.bj9,A.bp5,A.aKS,A.bgk,A.boC,A.boD,A.b6n,A.b6p,A.b6q,A.b7f,A.b7g,A.bgT,A.bqn,A.b4T,A.b4O,A.b4P,A.ayj,A.ayn,A.ay_,A.bgv,A.aLb,A.aLc,A.ayc,A.ayg,A.ayd,A.aye,A.aIa])
u(B.M,[A.Bs,A.RI])
u(B.a1,[A.TM,A.Yj])
u(B.NW,[A.L0,A.OB])
u(B.uv,[A.TN,A.W6])
t(A.a1h,A.ahZ)
t(A.ahC,A.a1h)
t(A.a12,A.ahC)
u(A.a12,[A.ahO,A.amS])
t(A.o3,A.ahO)
u(B.I8,[A.ay9,A.aem,A.Dg,A.aER,A.aKU,A.NF])
t(A.fN,A.ahP)
t(A.iv,A.ahR)
t(A.mN,A.ahS)
t(A.a19,A.ahH)
t(A.Nf,A.alb)
u(A.Nf,[A.ahU,A.amW])
t(A.a1d,A.ahU)
t(A.a1e,A.ahV)
t(A.Di,A.ahT)
u(A.ayx,[A.L1,A.OD])
t(A.aeo,A.at6)
t(A.ahW,A.aeo)
t(A.a1f,A.ahW)
u(B.bb,[A.xJ,A.zp])
t(A.uB,A.ahQ)
t(A.KV,A.L4)
u(A.KV,[A.aym,A.aL8])
u(B.Ox,[A.a1b,A.a7n])
u(B.H,[A.Ge,A.ahE])
u(A.Ge,[A.abo,A.abB])
t(A.qi,A.ars)
t(A.acU,A.arr)
t(A.pn,A.ahG)
t(A.uY,A.ala)
t(A.yD,A.al7)
t(A.pL,A.al9)
t(A.Qj,A.apw)
t(A.n6,A.alZ)
t(A.nB,A.atN)
u(A.pL,[A.alY,A.atM])
t(A.kW,A.alY)
t(A.ln,A.atM)
t(A.a5x,A.al8)
u(A.a5x,[A.alX,A.atL])
t(A.a6n,A.alX)
t(A.aeJ,A.atL)
t(A.N1,A.akO)
t(A.uX,A.al6)
t(A.N8,A.uX)
t(A.acV,B.fT)
t(A.ahF,A.ahE)
t(A.TK,A.ahF)
t(A.a13,A.TK)
t(A.jW,A.ahD)
t(A.a5u,A.al3)
t(A.a5w,A.al4)
u(A.hr,[A.a5A,A.a5B,A.a5C,A.Na,A.Nb,A.a5F,A.Nd,A.Ne,A.a5z,A.a5y,A.N9,A.a5D,A.a5E,A.Nc])
t(A.pV,A.amS)
t(A.ee,A.amR)
t(A.OC,A.amU)
t(A.a1a,A.ahM)
t(A.mO,A.ai_)
t(A.L_,A.ahN)
t(A.yC,A.al5)
t(A.F4,A.amW)
t(A.a7o,A.amX)
t(A.amQ,A.eD)
t(A.nc,A.amQ)
t(A.qs,A.nc)
t(A.rH,A.amV)
t(A.tC,A.at5)
t(A.GG,A.arq)
t(A.zq,A.amT)
t(A.zv,A.an3)
w(A.ahH,A.bk)
w(A.ahO,A.bk)
w(A.ahP,A.bk)
w(A.ahR,A.bk)
w(A.ahS,A.bk)
w(A.ahT,A.bk)
w(A.ahU,A.bk)
w(A.ahV,A.bk)
w(A.ahW,A.bk)
w(A.ahQ,A.bk)
w(A.ahC,A.bk)
w(A.ahG,A.bk)
w(A.akO,A.bk)
w(A.al6,A.bk)
w(A.al7,A.bk)
w(A.al9,A.bk)
w(A.ala,A.bk)
w(A.alY,A.bk)
w(A.alX,A.bk)
w(A.alZ,A.bk)
w(A.apw,A.bk)
w(A.arr,A.bk)
w(A.ars,A.bk)
w(A.at6,A.bk)
w(A.atM,A.bk)
w(A.atL,A.bk)
w(A.atN,A.bk)
w(A.ahD,A.bk)
v(A.ahE,B.aE)
w(A.ahF,B.eb)
v(A.TK,B.a4u)
w(A.ahZ,A.bk)
w(A.al3,A.bk)
w(A.al4,A.bk)
w(A.alb,A.bk)
w(A.ahM,A.bk)
w(A.ahN,A.bk)
w(A.ai_,A.bk)
w(A.al5,A.bk)
w(A.al8,A.bk)
w(A.amQ,A.bk)
w(A.amR,A.bk)
w(A.amS,A.bk)
w(A.amU,A.bk)
w(A.amV,A.bk)
w(A.amW,A.bk)
w(A.amX,A.bk)
w(A.arq,A.bk)
w(A.at5,A.bk)
w(A.amT,A.bk)
w(A.an3,A.bk)})()
B.bqA(b.typeUniverse,JSON.parse('{"a79":{"R":[],"c":[]},"Er":{"aFG":[]},"yA":{"fF":["be<~>"],"fF.T":"be<~>"},"Jr":{"R":[],"c":[]},"I9":{"R":[],"c":[]},"yB":{"bf":[],"M":[],"c":[]},"agS":{"R":[],"c":[]},"am7":{"R":[],"c":[]},"aop":{"bf":[],"M":[],"c":[]},"J0":{"R":[],"c":[]},"agQ":{"R":[],"c":[]},"It":{"R":[],"c":[]},"wN":{"R":[],"c":[]},"Bs":{"M":[],"c":[]},"a7a":{"bf":[],"M":[],"c":[]},"alr":{"R":[],"c":[]},"amJ":{"R":[],"c":[]},"UV":{"R":[],"c":[]},"Yu":{"R":[],"c":[]},"U8":{"R":[],"c":[]},"Uj":{"R":[],"c":[]},"anc":{"R":[],"c":[]},"ajt":{"R":[],"c":[]},"Cs":{"R":[],"c":[]},"at2":{"R":[],"c":[]},"ahL":{"bf":[],"M":[],"c":[]},"TM":{"a1":["Bs"]},"L0":{"M":[],"c":[]},"TN":{"a1":["L0"]},"o3":{"bk":[]},"fN":{"bk":[]},"iv":{"bk":[]},"mN":{"bk":[]},"Di":{"bk":[]},"xJ":{"bb":["o3"],"b8":["o3"],"b8.T":"o3","bb.T":"o3"},"a19":{"bk":[]},"a1d":{"bk":[]},"a1e":{"bk":[]},"a1f":{"bk":[]},"uB":{"bk":[]},"a1b":{"aV":[],"c":[]},"abo":{"H":[],"K":[],"jC":[],"aT":[]},"pL":{"bk":[]},"n6":{"bk":[]},"nB":{"bk":[]},"kW":{"bk":[]},"ln":{"bk":[]},"uX":{"bk":[]},"a12":{"bk":[]},"qi":{"bk":[]},"acU":{"bk":[]},"pn":{"bk":[]},"uY":{"bk":[]},"yD":{"bk":[]},"aeo":{"bk":[]},"Qj":{"bk":[]},"a6n":{"bk":[]},"aeJ":{"bk":[]},"N1":{"bk":[]},"N8":{"bk":[]},"KW":{"R":[],"c":[]},"RI":{"M":[],"c":[]},"Yj":{"a1":["RI"]},"jW":{"bk":[]},"acV":{"fT":[],"aV":[],"c":[]},"a13":{"eb":["H","hs"],"H":[],"aE":["H","hs"],"K":[],"aT":[],"aE.1":"hs","eb.1":"hs","aE.0":"H"},"AX":{"R":[],"c":[]},"a1h":{"bk":[]},"a5u":{"bk":[]},"Nf":{"bk":[]},"a5w":{"bk":[]},"a5A":{"hr":[]},"a5B":{"hr":[]},"a5C":{"hr":[]},"Na":{"hr":[]},"Nb":{"hr":[]},"a5F":{"hr":[]},"Nd":{"hr":[]},"Ne":{"hr":[]},"a5z":{"hr":[]},"a5y":{"hr":[]},"N9":{"hr":[]},"a5D":{"hr":[]},"a5E":{"hr":[]},"Nc":{"hr":[]},"Ge":{"H":[],"K":[],"jC":[],"aT":[]},"OB":{"M":[],"c":[]},"W6":{"a1":["OB"]},"pV":{"bk":[]},"ee":{"bk":[]},"mO":{"bk":[]},"nc":{"eD":[],"bk":[]},"qs":{"nc":[],"eD":[],"bk":[]},"rH":{"bk":[]},"tC":{"bk":[]},"GG":{"bk":[]},"zp":{"bb":["pV"],"b8":["pV"],"b8.T":"pV","bb.T":"pV"},"OC":{"bk":[]},"a1a":{"bk":[]},"L_":{"bk":[]},"yC":{"bk":[]},"a5x":{"bk":[]},"F4":{"bk":[]},"a7o":{"bk":[]},"zq":{"bk":[]},"a7n":{"aV":[],"c":[]},"abB":{"H":[],"K":[],"jC":[],"aT":[]},"zv":{"bk":[]}}'))
B.bKg(b.typeUniverse,JSON.parse('{"KV":1,"Nf":1,"L4":1,"Ge":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("D_"),e:w("be<oj>"),aN:w("be<ok>"),fM:w("be<a3<f,@>?>"),b:w("be<~>"),W:w("jW"),B:w("o3"),dB:w("fN"),gF:w("uB"),fj:w("iv"),G:w("mN"),bO:w("mO"),k:w("at"),C:w("a1R<F>"),dO:w("uI"),R:w("a4<f,@>"),g:w("hN"),bz:w("lP<b_>"),f0:w("lQ"),E:w("bk"),F:w("yA"),X:w("oj"),P:w("lV"),D:w("uW"),a:w("aFG"),d:w("ok"),cw:w("eD"),L:w("hs"),m:w("dg<v,E>"),cm:w("kW"),dv:w("n6"),M:w("B<o2>"),I:w("B<bEm>"),O:w("B<fN>"),Y:w("B<iv>"),U:w("B<eD>"),K:w("B<a6c>"),u:w("B<ee>"),bC:w("B<vs>"),aA:w("B<u<eD>>"),v:w("B<eg>"),r:w("B<GG>"),s:w("B<f>"),eg:w("B<qq>"),df:w("B<qs>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bl<a1<M>>"),Z:w("nc"),cz:w("ee"),hf:w("pV"),dj:w("zq"),fT:w("rH"),c_:w("iy<p6<be<~>>>"),x:w("zv<fN>"),y:w("zv<ee>"),J:w("u<v>"),ef:w("vw"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ae<F,F>"),w:w("ka"),aU:w("C"),Q:w("vH<o3>"),o:w("vH<pV>"),dc:w("eg"),eo:w("q8"),gJ:w("q9"),V:w("nt<lV>"),N:w("f"),A:w("nu"),bP:w("bw"),er:w("qq"),j:w("wt"),dw:w("qs"),bY:w("tC"),cZ:w("qu"),gc:w("ip"),es:w("ln"),bN:w("nB"),l:w("c"),q:w("x5"),g4:w("ir<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xJ?"),f3:w("zp?"),T:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("C?"),aD:w("ip?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bf=new B.pi(C.m,B.au("pi<E>"))
D.Bm=new A.Dg(0,"left")
D.mJ=new A.Dg(1,"top")
D.Bn=new A.Dg(2,"right")
D.dN=new A.Dg(3,"bottom")
D.ayK=new A.qi(!1,A.bB_(),22,null)
D.kx=new A.pn(16,null,D.ayK,!0)
D.a93=new A.pL(C.E,null,2,null)
D.vX=new A.L_(!1,D.a93,A.c7a(),!0)
D.a05=new A.ay9(3,"spaceEvenly")
D.a0g=new B.r2(6,"dstIn")
D.XK=new B.aX(3,3)
D.Bq=new B.d8(D.XK,D.XK,C.a3,C.a3)
D.a0r=new B.bm(C.E,0,C.U,-1)
D.C_=new A.a5w()
D.a1X=new A.Na()
D.a1Y=new A.Nd()
D.aQn=new A.acU()
D.am1=w([],B.au("B<kW>"))
D.am2=w([],B.au("B<ln>"))
D.E9=new A.N1(D.am1,D.am2,!0)
D.a8O=new B.e8("Zeitraum",!1,null)
D.a8S=new B.e8("Konten (SKR 03)",!1,null)
D.xO=new A.aER(0,"center")
D.aQz=new A.yC(!0,A.bBv(),A.bMm())
D.Ed=new A.yC(!1,A.bBv(),A.bMm())
D.Ee=new A.yD(!1,!0,null,A.avF(),A.a_C(),!0,null,A.avF(),A.a_C())
D.aQA=new A.yD(!0,!0,null,A.avF(),A.a_C(),!0,null,A.avF(),A.a_C())
D.a4j=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a45=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a4s=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a4n=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a3P=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a3O=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a4L=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a4d=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a4Q=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a4I=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.asg=new B.dg([50,D.a4j,100,D.a45,200,D.a4s,300,D.a4n,400,D.a3P,500,D.a3O,600,D.a4L,700,D.a4d,800,D.a4Q,900,D.a4I],x.m)
D.dp=new B.rN(D.asg,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.ai9=w([8,4],x.t)
D.a91=new A.pL(D.dp,null,0.4,D.ai9)
D.a92=new A.pL(C.am,null,0.5,null)
D.fS=new A.eD(0/0,0/0)
D.ayM=new A.qi(!0,A.bB_(),44,null)
D.mK=new A.pn(16,null,D.ayM,!0)
D.ayL=new A.qi(!0,A.bB_(),30,null)
D.mL=new A.pn(16,null,D.ayL,!0)
D.a94=new A.uY(!1,D.mK,D.mL,D.mK,D.mL)
D.aQB=new A.uY(!0,D.mK,D.mL,D.mK,D.mL)
D.En=new A.NF(0,"left")
D.a9I=new A.NF(1,"center")
D.Eo=new A.NF(2,"right")
D.a9L=new B.a6(57495,"MaterialIcons",null,!1)
D.y6=new B.a6(58927,"MaterialIcons",null,!1)
D.aau=new B.a6(59005,"MaterialIcons",null,!0)
D.aav=new B.a6(59007,"MaterialIcons",null,!0)
D.aaw=new B.a6(59011,"MaterialIcons",null,!1)
D.aaM=new B.a6(61349,"MaterialIcons",null,!1)
D.abT=new B.aF(D.aaM,20,C.j,null,null)
D.aaS=new B.a6(61487,"MaterialIcons",null,!1)
D.aca=new B.aF(D.aaS,18,null,null,null)
D.acb=new B.aF(D.y6,18,null,null,null)
D.acS=new B.aF(C.lf,null,C.p,null,null)
D.ad1=new B.aF(C.lh,16,null,null,null)
D.ad9=new B.aF(C.EX,16,null,null,null)
D.adc=new B.aF(C.i4,null,C.j,null,null)
D.abp=new B.a6(62584,"MaterialIcons",null,!1)
D.adl=new B.aF(D.abp,16,null,null,null)
D.adr=new B.aF(D.y6,16,null,null,null)
D.adx=new B.aF(F.Ex,null,C.an,null,null)
D.afx=new A.a7a(null)
D.aQG=new A.aKU(0,"horizontal")
D.yu=new A.zq(0,0,0,0,!1)
D.FI=new A.OC(0.5)
D.C5=new A.a7o()
D.afC=new A.F4(D.C5,A.bMq(),10,A.bMn(),!0,A.bMp(),A.bMo(),!1,null,null,null)
D.aQH=new A.F4(D.C5,A.bMq(),10,A.bMn(),!0,A.bMp(),A.bMo(),!0,null,null,null)
D.ah6=w([4,3],x.t)
D.awS=new B.an("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.awA=new B.an("receivables","Forderungen (kurzfristig)")
D.awj=new B.an("inventory_value","Vorr\xe4te (Warenbestand)")
D.awe=new B.an("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.avT=new B.an("fixed_assets","Anlageverm\xf6gen")
D.aw6=new B.an("current_liabilities","Kurzfristige Verbindlichkeiten")
D.awK=new B.an("long_term_liabilities","Langfristige Verbindlichkeiten")
D.awz=new B.an("equity","Eigenkapital")
D.pB=w([D.awS,D.awA,D.awj,D.awe,D.avT,D.aw6,D.awK,D.awz],B.au("B<+(f,f)>"))
D.aQJ=w([],x.M)
D.alO=w([],x.O)
D.alP=w([],x.Y)
D.alQ=w([],B.au("B<mN>"))
D.alR=w([],B.au("B<mO>"))
D.aQK=w([],x.U)
D.aQL=w([],x.u)
D.alS=w([],x.r)
D.asV={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Tk={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z7=new B.a4(D.Tk,[0,0,0,0,0,0,0,C.bn],B.au("a4<f,C>"))
D.asT={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.asa=new B.a4(D.asT,[0,0,0,0],B.au("a4<f,v>"))
D.at9={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apL=new B.a4(D.at9,[0,0,0,0,null,null,null,null],B.au("a4<f,v?>"))
D.apF=new B.a4(D.asV,[D.z7,D.z7,D.z7,C.bn,C.bn,C.bn,D.asa,D.apL],x.R)
D.apY=new B.a4(D.Tk,[0,0,0,0,0,0,0,C.cp],x.R)
D.asW={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aq_=new B.a4(D.asW,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a4<f,F>"))
D.asS={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.asb=new B.a4(D.asS,[0,0,0,0,0,0,0,C.cp],x.R)
D.atm={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.asc=new B.a4(D.atm,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a4<f,f>"))
D.a4V=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a52=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3S=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a4f=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a4p=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a5f=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a3D=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a4h=new B.E(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a4r=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a4J=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.ash=new B.dg([50,D.a4V,100,D.a52,200,D.a3S,300,D.a4f,400,D.a4p,500,D.a5f,600,D.a3D,700,D.a4h,800,D.a4r,900,D.a4J],x.m)
D.T9=new B.rN(D.ash,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a8d=new B.al(32,32,32,32)
D.auh=new B.aj(D.a8d,C.bF,null)
D.auo=new B.aj(C.ai,C.bF,null)
D.am3=w([],B.au("B<n6>"))
D.am4=w([],B.au("B<nB>"))
D.XL=new A.Qj(D.am3,D.am4)
D.axJ=new B.fj("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.axK=new B.fj("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.axO=new B.fj("Automaten-Business","Umsatz je Automat",null,null)
D.axQ=new B.fj("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.axS=new B.fj("Top","Meistverkaufte Produkte",null,null)
D.axW=new B.fj("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.axX=new B.fj("Kennzahlen","Rentabilit\xe4t",null,null)
D.Yu=new B.tk(C.F,C.t,0)
D.aGf=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aAk=new B.dG(D.aGf,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aIq=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aAn=new B.dG(D.aIq,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aGr=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aAo=new B.dG(D.aGr,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aIk=new B.ab("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aAq=new B.dG(D.aIk,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHL=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aAr=new B.dG(D.aHL,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aHI=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aAM=new B.dG(D.aHI,null,null,null,null,null,null,null,null,null,null,null,null,C.J,!1,null,null,null,C.n,null)
D.aQV=new B.P(!0,C.E,null,null,null,null,14,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGo=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.aGB=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aHr=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aHA=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aHP=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.aID=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZL=new A.aem(0,"auto")
D.aJc=new A.aem(1,"top")
D.aNt=new A.wN("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aNu=new A.wN("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cg9","bQF",()=>B.id(new A.btX(),x.D))
w($,"cga","awe",()=>B.id(new A.btY(),x.a))
w($,"ch6","xt",()=>B.bzB(new A.bvN(),x.P))
w($,"cgb","bwM",()=>C.aM.$1$1(new A.btZ(),x.d))
w($,"cg8","bQE",()=>C.aM.$1$1(new A.btW(),x.X))
w($,"cg7","bwL",()=>C.aM.$1$1(new A.btV(),x.h))
w($,"cg6","bwK",()=>B.b0_(A.c6c(),x.F,x.b))
w($,"c97","bwg",()=>new A.axZ())
v($,"ccq","lH",()=>new A.b2E())})()};
(a=>{a["UPpTjAz/KY4kV4mh7v4fFQp67SA="]=a.current})($__dart_deferred_initializers__);