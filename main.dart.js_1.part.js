((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
NC(d,e,f,g,h){return new A.a5Y(f,g,d,h,e,null)},
a5Y:function a5Y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uC:function uC(d){this.a=d},
DJ:function DJ(d){this.a=d},
bPT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.Y(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=D.aoK
w=x.f
v=x.N
u=x.z
t=A.aDL(B.dx(w.a(e.h(a0,"current")),v,u))
s=A.aDL(B.dx(w.a(e.h(a0,"prior_year")),v,u))
r=A.aDL(B.dx(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.c6
p=J.cZ(p,new A.aDt(),x.cZ)
p=B.P(p,p.$ti.i("aw.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.c6
o=J.cZ(o,new A.aDu(),x.ef)
o=B.P(o,o.$ti.i("aw.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.c6
q=J.cZ(q,new A.aDv(),x.j)
q=B.P(q,q.$ti.i("aw.E"))
n=B.dx(w.a(e.h(a0,"customer")),v,u)
m=B.bn(n.h(0,"purchases_count"))
m=m==null?null:C.d.a2(m)
if(m==null)m=0
l=A.oR(n.h(0,"app_gross"))
k=B.bn(n.h(0,"active_customers"))
k=k==null?null:C.d.a2(k)
if(k==null)k=0
n=A.oR(n.h(0,"avg_basket"))
u=B.dx(w.a(e.h(a0,"derived")),v,u)
v=A.oR(u.h(0,"gross_margin_pct"))
e=A.oR(u.h(0,"net_margin_pct"))
w=A.oR(u.h(0,"ebitda_margin_pct"))
j=A.oR(u.h(0,"cashflow_operating"))
i=A.bpt(u.h(0,"revenue_growth_yoy_pct"))
h=A.bpt(u.h(0,"revenue_growth_mom_pct"))
g=A.bpt(u.h(0,"result_growth_yoy_pct"))
u=A.bpt(u.h(0,"result_growth_mom_pct"))
f=B.bn(J.a3(d,"days"))
f=f==null?null:C.d.a2(f)
if(f==null)f=1
return new A.o0(t,s,r,p,o,q,new A.ayW(m,l,k,n),new A.aA1(v,e,w,j,i,h,g,u),f)},
oR(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jp(J.ak(d))
return w==null?0:w},
bpt(d){if(d==null)return null
if(typeof d=="number")return d
return B.jp(J.ak(d))},
q6:function q6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vg:function vg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
w9:function w9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayW:function ayW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA1:function aA1(d,e,f,g,h,i,j,k){var _=this
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
aDt:function aDt(){},
aDu:function aDu(){},
aDv:function aDv(){},
aDL(d){var w=J.Y(d),v=A.tU(w.h(d,"revenue_net_7")),u=A.tU(w.h(d,"revenue_net_19")),t=A.tU(w.h(d,"revenue_net")),s=A.tU(w.h(d,"expense_net")),r=A.tU(w.h(d,"result_net")),q=A.tU(w.h(d,"vat_collected")),p=A.tU(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.c6
w=J.cZ(w,new A.aDM(),x._)
w=B.P(w,w.$ti.i("aw.E"))
return new A.o1(v,u,t,s,r,q,p,w)},
tU(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.jp(J.ak(d))
return w==null?0:w},
Ck:function Ck(d,e,f,g,h,i){var _=this
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
aDM:function aDM(){},
bPS(d){return new A.yb(d,new B.ij(x.c_),C.dD)},
bqg:function bqg(){},
bqh:function bqh(){},
bs5:function bs5(){},
bqi:function bqi(){},
bqf:function bqf(){},
bqe:function bqe(){},
yb:function yb(d,e,f){this.r=d
this.a=e
this.f=f},
aDs:function aDs(d,e,f){this.a=d
this.b=e
this.c=f},
aDr:function aDr(d,e,f){this.a=d
this.b=e
this.c=f},
bPU(){return new A.yc(null)},
akD(d,e,f,g,h){return new A.akC(e,h,g,f,d,null)},
yc:function yc(d){this.a=d},
aDK:function aDK(d){this.a=d},
aDC:function aDC(d,e,f){this.a=d
this.b=e
this.c=f},
aDD:function aDD(d,e,f){this.a=d
this.b=e
this.c=f},
aDE:function aDE(d){this.a=d},
aDB:function aDB(){},
aDF:function aDF(d){this.a=d},
aDG:function aDG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDJ:function aDJ(){},
aDI:function aDI(){},
aDH:function aDH(){},
aDA:function aDA(d,e){this.a=d
this.b=e},
aDy:function aDy(d){this.a=d},
aDz:function aDz(d){this.a=d},
afr:function afr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
akC:function akC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
amN:function amN(d,e){this.e=d
this.a=e},
bfl:function bfl(d){this.a=d},
bfm:function bfm(d){this.a=d},
bfn:function bfn(d,e,f){this.a=d
this.b=e
this.c=f},
bfk:function bfk(){},
It:function It(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
IW:function IW(d,e){this.c=d
this.a=e},
bll:function bll(d){this.a=d},
afp:function afp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
HC:function HC(d,e){this.c=d
this.a=e},
bwM(d,e,f,g,h){var w=null
return B.j4(w,w,!0,w,new A.bpo(h,g,e,f),d,w,!0,!0,x.H)},
jB(d,e,f,g,h,i,j,k,l,m,n){return new A.al7(g,n,i,e,d,m,f,k,l,j,null)},
atG(d,e){return A.c_m(d,e)},
c_m(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$atG=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.bc(D.awl)
t=4
o=e.aK(0,$.c_(),x.A).as
o===$&&B.a()
n=x.z
w=7
return B.l(o.hf("finance-balance-sync",B.A(n,n)),$async$atG)
case 7:r=g
q=B.dx(x.f.a(r.a),x.N,n)
l.Wq()
if(J.d(J.a3(q,"configured"),!1)){l.bc(D.awp)
w=1
break}if(J.d(J.a3(q,"ok"),!0)){o=$.bsP()
if(e.e==null)B.W(B.a_(y.b))
e.gcq().ck(o)
l.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a3(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}else{o=J.a3(q,"error")
l.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Wq()
l.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$atG,v)},
atJ(d,e,f){var w=0,v=B.q(x.H)
var $async$atJ=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.l(B.j4(null,null,!0,null,new A.bpm(f,e,e.aK(0,$.c_(),x.A)),d,null,!0,!0,x.H),$async$atJ)
case 2:return B.o(null,v)}})
return B.p($async$atJ,v)},
a5Z:function a5Z(d){this.a=d},
aIB:function aIB(){},
aIA:function aIA(){},
aIz:function aIz(){},
HW:function HW(d,e){this.c=d
this.a=e},
bcU:function bcU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcJ:function bcJ(){},
bcK:function bcK(){},
bcL:function bcL(){},
bcM:function bcM(){},
bcN:function bcN(){},
bcO:function bcO(){},
bcP:function bcP(){},
bcQ:function bcQ(){},
bcR:function bcR(d){this.a=d},
bcS:function bcS(d){this.a=d},
bcT:function bcT(d){this.a=d},
bcV:function bcV(d,e){this.a=d
this.b=e},
bcW:function bcW(d,e){this.a=d
this.b=e},
bpo:function bpo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpn:function bpn(d){this.a=d},
ajW:function ajW(d){this.a=d},
al7:function al7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bcX:function bcX(d,e){this.a=d
this.b=e},
TZ:function TZ(d,e,f){this.c=d
this.d=e
this.a=f},
Xv:function Xv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkA:function bkA(){},
bkB:function bkB(){},
bkC:function bkC(d){this.a=d},
Tc:function Tc(d,e,f){this.c=d
this.d=e
this.a=f},
b3U:function b3U(){},
b3W:function b3W(d){this.a=d},
b3X:function b3X(d){this.a=d},
b3V:function b3V(){},
To:function To(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b4H:function b4H(){},
b4I:function b4I(){},
b4J:function b4J(){},
b4K:function b4K(d){this.a=d},
alB:function alB(d,e){this.c=d
this.a=e},
bdq:function bdq(){},
bdr:function bdr(){},
ahZ:function ahZ(d,e){this.c=d
this.a=e},
BP:function BP(d,e,f){this.c=d
this.d=e
this.a=f},
arb:function arb(d,e){this.c=d
this.a=e},
bmC:function bmC(){},
bmD:function bmD(){},
wr:function wr(d,e){this.c=d
this.a=e},
agg:function agg(d,e){this.e=d
this.a=e},
b2o:function b2o(){},
b2n:function b2n(){},
b2m:function b2m(d,e,f){this.a=d
this.b=e
this.c=f},
b2g:function b2g(d,e){this.a=d
this.b=e},
b2h:function b2h(d,e){this.a=d
this.b=e},
b2p:function b2p(d){this.a=d},
b2q:function b2q(d){this.a=d},
b2i:function b2i(){},
b2j:function b2j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b2k:function b2k(d,e){this.a=d
this.b=e},
b2l:function b2l(d,e,f){this.a=d
this.b=e
this.c=f},
bpm:function bpm(d,e,f){this.a=d
this.b=e
this.c=f},
bpl:function bpl(d){this.a=d},
AU:function AU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SQ:function SQ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b2a:function b2a(){},
b2b:function b2b(d){this.a=d},
b2c:function b2c(d){this.a=d},
b2e:function b2e(d,e){this.a=d
this.b=e},
b2d:function b2d(d,e){this.a=d
this.b=e},
b2f:function b2f(d){this.a=d},
bd:function bd(){},
bA1(d){return new A.Km(d,C.au,C.ds,null,null)},
Km:function Km(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
SR:function SR(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ft$=f
_.cS$=g
_.c=_.a=null},
b2r:function b2r(d,e){this.a=d
this.b=e},
b2s:function b2s(d){this.a=d},
awe(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.akF:f,p=a0==null?16:a0,o=d==null?D.a_x:d,n=g==null,m=n?A.bti(r,r,r,r,r,r,r,r):g,l=a3==null?D.XG:a3
n=n?A.bti(r,r,r,r,r,r,r,r):g
w=j==null?D.Du:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.G:e
return new A.nK(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.Bp,s,w,i,n)},
awl(d,e,f,g,h){var w=d==null?D.akG:d,v=e==null?2:e,u=g==null?C.li:g
return new A.fA(h,f===!0,w,v,u)},
bNc(d,e,f){var w=d.a
w=C.d.b0(w+(e.a-w)*f)
return A.awl(A.km(d.c,e.c,f,A.c06(),x.fj),B.ab(d.d,e.d,f),!1,A.km(d.e,e.e,f,A.ZD(),x.S),w)},
a00(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.T7
else w=h
v=m==null
u=v?8:m
t=$.lr()
s=t.aWi(f,v?8:m)
t=t.aWj(g,v?8:m)
v=d==null?A.bA_(r,r,r,r,r):d
return new A.ig(q,l,w,j,u,s,e,t,v,k==null?D.akH:k)},
bNd(d,e,f){var w,v,u,t,s=B.Z(d.c,e.c,f),r=B.ab(d.e,e.e,f),q=B.mx(d.f,e.f,f),p=A.km(d.r,e.r,f,A.ZD(),x.S),o=B.bW(d.w,e.w,f),n=B.ab(d.a,e.a,f),m=B.ab(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ab(w.b,v.b,f)
t=B.ab(w.c,v.c,f)
v=B.Z(w.d,v.d,f)
return A.a00(A.bA_(v,u,null,!1,t),p,q,o,s,n,null,A.km(d.y,e.y,f,A.c07(),x.G),m,r)},
bNe(d,e,f){var w,v,u=B.ab(d.a,e.a,f)
u.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
v.toString
return new A.mv(u,w,v,B.bW(d.d,e.d,f))},
bA_(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.di
else w=d
return new A.a_X(g===!0,v,u,w,f)},
bti(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a02(4,C.hF,16,D.xn,0,120,A.c09(),!1,!1,D.Zz,0,C.F,A.c08())
else w=k
v=j==null?C.kP:j
return new A.a01(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c0V(d,e,f,g){var w=null,v=B.iW(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.P,w,w,!0,w,w,w,w,w,w,w,w)
return new A.CC(C.d.j(f.b),v)},
c0U(d){return A.aym(D.di,15)},
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
awd:function awd(d,e){this.a=d
this.b=e},
fA:function fA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
awm:function awm(){},
awn:function awn(){},
ig:function ig(d,e,f,g,h,i,j,k,l,m){var _=this
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
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_X:function a_X(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a01:function a01(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
acU:function acU(d,e){this.a=d
this.b=e},
a02:function a02(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
CC:function CC(d,e){this.a=d
this.b=e},
Kn:function Kn(d){this.a=d},
a03:function a03(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xn:function xn(d,e){this.a=d
this.b=e},
agc:function agc(){},
agj:function agj(){},
agk:function agk(){},
agm:function agm(){},
agn:function agn(){},
ago:function ago(){},
agp:function agp(){},
agq:function agq(){},
agr:function agr(){},
awo:function awo(d){this.a=d},
awp:function awp(){},
uf:function uf(d,e,f){this.a=d
this.b=e
this.c=f},
agl:function agl(){},
awq:function awq(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
awr:function awr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aws:function aws(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a50:function a50(d){this.b=d},
a0_:function a0_(d,e,f){this.d=d
this.e=e
this.a=f},
aa4:function aa4(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ah=_.an=$
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
c0W(d,e){var w=null
return new A.QS(e.w,B.j(e.r,w,w,w,w,w,w,w),w)},
aw7(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ab(w.c,v.c,f)
u.toString
return new A.p3(t,e.b,new A.pY(v.a,v.b,u,B.ab(w.d,v.d,f)),!0)},
bBo(d,e,f){var w=A.aw7(d.b,e.b,f),v=A.aw7(d.d,e.d,f),u=A.aw7(d.e,e.e,f)
return new A.uE(e.a,w,A.aw7(d.c,e.c,f),v,u)},
bPW(d,e,f){var w,v
if(d.k(0,D.fI))return e
if(e.k(0,D.fI))return d
w=B.ab(d.a,e.a,f)
w.toString
v=B.ab(d.b,e.b,f)
v.toString
return new A.ew(w,v)},
bBm(d,e,f){return new A.ye(e.a,!0,B.ab(d.c,e.c,f),e.d,e.e,e.f,B.ab(d.r,e.r,f),e.w,e.x)},
c3j(d){return!0},
c0Z(d){return D.a8q},
bBn(d,e,f,g){var w
if(d==null)w=f==null?C.B:null
else w=d
return new A.pp(w,f,g,e)},
bDh(d,e,f){var w,v=A.km(d.a,e.a,f,A.c02(),x.dv)
v.toString
w=A.km(d.b,e.b,f,A.c04(),x.bN)
w.toString
return new A.Pr(v,w)},
bQH(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r4(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.mP(t,w,v,u)},
bVU(d,e,f){var w,v,u,t=B.ab(d.a,e.a,f)
t.toString
w=B.ab(d.b,e.b,f)
w.toString
v=B.Z(d.c,e.c,f)
u=B.r4(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.ng(t,w,v,u)},
bQG(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pj(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bQE(B.bt9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r4(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.km(d.d,e.d,f,A.ZD(),x.S)
if(u==null)u=v==null?C.B:null
return new A.kI(r,e.f,e.r,t,e.x,u,v,w,s)},
bVT(d,e,f){var w,v,u,t,s,r=B.ab(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.pj(w.b,v.b,f)
u.toString
t=B.cp(w.c,v.c,f)
t=A.bVR(B.bt9(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.Z(d.a,e.a,f)
v=B.r4(d.b,e.b,f)
w=B.ab(d.c,e.c,f)
w.toString
s=A.km(d.d,e.d,f,A.ZD(),x.S)
if(u==null)u=v==null?C.B:null
return new A.l7(r,e.f,e.r,t,e.x,u,v,w,s)},
bQE(d,e,f,g,h,i){return new A.a5b(f,!1,g,i,d,e)},
bQF(d){return C.d.ak(d.e,1)},
bVR(d,e,f,g,h,i){return new A.adi(f,!1,g,i,d,e)},
bVS(d){return C.d.ak(d.e,1)},
bBj(d,e,f){var w,v=A.km(d.a,e.a,f,A.c01(),x.cm)
v.toString
w=A.km(d.b,e.b,f,A.c03(),x.es)
w.toString
return new A.Mh(v,w,!0)},
bPV(d,e,f){return new A.Mr(d,e==null?4:e,f)},
a_Q:function a_Q(){},
CB:function CB(d,e){this.a=d
this.b=e},
tf:function tf(d,e){this.r=d
this.w=e},
pY:function pY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abt:function abt(){},
p3:function p3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uE:function uE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ew:function ew(d,e){this.a=d
this.b=e},
ye:function ye(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pp:function pp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acW:function acW(){},
Pr:function Pr(d,e){this.a=d
this.b=e},
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ng:function ng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kI:function kI(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
l7:function l7(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a5b:function a5b(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
adi:function adi(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
Mh:function Mh(d,e,f){this.a=d
this.b=e
this.c=f},
uD:function uD(){},
Mr:function Mr(d,e,f){this.a=d
this.b=e
this.c=f},
ag7:function ag7(){},
agb:function agb(){},
ajl:function ajl(){},
ajB:function ajB(){},
ajC:function ajC(){},
ajE:function ajE(){},
ajF:function ajF(){},
aks:function aks(){},
akr:function akr(){},
akt:function akt(){},
anT:function anT(){},
apE:function apE(){},
apF:function apF(){},
arf:function arf(){},
arS:function arS(){},
arR:function arR(){},
arT:function arT(){},
aw3:function aw3(){},
Kg:function Kg(){},
Kh:function Kh(d,e,f){this.c=d
this.d=e
this.a=f},
aw5:function aw5(d){this.a=d},
aw4:function aw4(d){this.a=d},
QS:function QS(d,e,f){this.c=d
this.e=e
this.a=f},
Xk:function Xk(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bUq(d,e,f){var w=B.ac(f),v=w.i("aa<1,jL>")
v=B.P(new B.aa(f,new A.aXQ(),v),v.i("aw.E"))
w=w.i("aa<1,c>")
w=B.P(new B.aa(f,new A.aXR(),w),w.i("aw.E"))
return new A.abu(e,d,v,w,null)},
bN9(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a5P(4,x.er)
for(w=0;w<4;++w)t[w]=new B.td(v,C.ap,C.w,new B.kg(1),v,v,v,v,C.bu,v)
u=new A.a_R(f,d,e,u,t,!0,0,v,v,new B.bq(),B.aJ(x.v))
u.bk()
return u},
abu:function abu(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
aXQ:function aXQ(){},
aXR:function aXR(){},
a_R:function a_R(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.V=e
_.U=f
_.a3=g
_.VK$=h
_.aS3$=i
_.dl$=j
_.ae$=k
_.dO$=l
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
bd2:function bd2(d,e){this.a=d
this.b=e},
aw6:function aw6(){},
jL:function jL(d,e){this.a=d
this.b=e},
nJ:function nJ(d,e){this.a=d
this.b=e},
ag8:function ag8(){},
ag9:function ag9(){},
aga:function aga(){},
SO:function SO(){},
Al:function Al(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXS:function aXS(d){this.a=d},
aXT:function aXT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aXU:function aXU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a4j(d,e){var w=d==null?B.d5(C.B,1):d
return new A.a4i(e!==!1,w)},
a05:function a05(){},
a4i:function a4i(d,e){this.a=d
this.b=e},
My:function My(){},
a4k:function a4k(){},
awB:function awB(){},
aCT:function aCT(d,e){this.a=d
this.b=e},
agu:function agu(){},
ajy:function ajy(){},
ajz:function ajz(){},
ajG:function ajG(){},
Kq:function Kq(){},
vs:function vs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hi:function hi(){},
a4o:function a4o(d){this.a=d},
a4p:function a4p(d){this.a=d},
a4q:function a4q(d){this.a=d},
Mt:function Mt(){},
Mu:function Mu(){},
a4t:function a4t(d){this.a=d},
Mw:function Mw(){},
Mx:function Mx(d){this.a=d},
a4n:function a4n(d){this.a=d},
a4m:function a4m(d){this.a=d},
Ms:function Ms(d){this.a=d},
a4r:function a4r(d){this.a=d},
a4s:function a4s(d){this.a=d},
Mv:function Mv(d){this.a=d},
FI:function FI(){},
aT4:function aT4(d){this.a=d},
aT5:function aT5(d){this.a=d},
aT6:function aT6(d){this.a=d},
aT7:function aT7(d){this.a=d},
aT8:function aT8(d){this.a=d},
aT9:function aT9(d){this.a=d},
aTa:function aTa(d){this.a=d},
aTb:function aTb(d){this.a=d},
aTc:function aTc(d){this.a=d},
aTd:function aTd(d){this.a=d},
aTe:function aTe(d){this.a=d},
aTf:function aTf(d){this.a=d},
aTg:function aTg(d){this.a=d},
NQ:function NQ(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
V8:function V8(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ft$=g
_.cS$=h
_.c=_.a=null},
bd7:function bd7(d,e){this.a=d
this.b=e},
bd5:function bd5(d){this.a=d},
bd6:function bd6(d,e){this.a=d
this.b=e},
bd4:function bd4(){},
bd8:function bd8(d){this.a=d},
buw(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.G:d
return new A.pC(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aIQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.T7:u
else w=g
v=f==null?A.awc(!1,u,0,u,!1,D.vR):f
w=new A.ea(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.awc(!1,u,0,u,!1,D.vR):d,j,a0,i,s,!1,p)
w.aqi(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bRa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ab(d.x,e.x,f)
m.toString
w=A.bA0(d.ay,e.ay,f)
v=A.bA0(d.ch,e.ch,f)
u=B.ab(d.as,e.as,f)
u.toString
t=e.CW
s=A.km(d.cy,e.cy,f,A.ZD(),x.S)
r=B.Z(d.r,e.r,f)
q=B.r4(d.w,e.w,f)
p=A.km(d.a,e.a,f,A.c00(),x.cw)
p.toString
o=B.bDL(d.db,e.db,f)
o.toString
n=B.ab(d.dy.a,e.dy.a,f)
n.toString
return A.aIQ(v,m,w,r,e.z,s,new A.yd(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.NR(n),!1,u,o,!0,e.cx,p)},
awc(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
else w=e
return new A.a_Z(h,w,g,i,f,!1)},
bA0(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.Z(v.a,u.a,f),s=B.r4(v.b,u.b,f),r=B.ab(v.c,u.c,f)
r.toString
r=A.bBn(t,A.km(v.d,u.d,f,A.ZD(),x.S),s,r)
s=B.Z(d.b,e.b,f)
u=B.r4(d.c,e.c,f)
v=B.ab(d.e,e.e,f)
v.toString
return A.awc(!1,s,v,u,e.a,new A.Kl(!1,r,w.c,!0))},
bNg(d,e,f){var w=B.Z(d.c,e.c,f),v=B.r4(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.b0(127.5),D.di.A()>>>16&255,D.di.A()>>>8&255,D.di.A()&255):null
return new A.mw(e.a,e.b,w,v)},
c3k(d){return!0},
bwA(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.kQ)return A.bxk(w.a,A.bua(w),e/100)
w=v?null:C.b.ga1(w.a)
if(w==null)w=f.r
return w==null?D.di:w},
bYE(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.kQ)w=A.bxk(v.a,A.bua(v),e/100)
else{v=u?null:C.b.ga1(v.a)
w=v==null?f.r:v
if(w==null)w=D.di}return A.aym(w,40)},
bGe(d,e,f,g,h){var w,v=A.bwA(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.kQ)w=A.bxk(u.a,A.bua(u),e/100)
else{u=t?null:C.b.ga1(u.a)
w=u==null?f.r:u
if(w==null)w=D.di}u=A.aym(w,40)
return new A.Mr(v,h==null?4:h,u)},
c3i(d,e){return!0},
c_O(d,e){return Math.abs(d.a-e.a)},
c11(d,e){var w=J.cZ(e,new A.bq4(d),x.bY)
w=B.P(w,w.$ti.i("aw.E"))
return w},
c0Y(d,e){return-1/0},
c0X(d,e){return d.a[e].b},
bHq(d){var w=J.cZ(d,new A.bq1(),x.fT)
w=B.P(w,w.$ti.i("aw.E"))
return w},
bHp(d){return A.aym(D.di,15)},
pC:function pC(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aIR:function aIR(){},
NR:function NR(d){this.a=d},
a_Z:function a_Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mw:function mw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Kl:function Kl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yd:function yd(d,e,f){this.a=d
this.b=e
this.c=f},
aIC:function aIC(d,e){this.a=d
this.b=e},
a4l:function a4l(){},
Em:function Em(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bq4:function bq4(d){this.a=d},
bq3:function bq3(d){this.a=d},
a6c:function a6c(){},
bq1:function bq1(){},
mU:function mU(){},
q4:function q4(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rj:function rj(d,e){this.a=d
this.b=e},
tg:function tg(d,e){this.a=d
this.b=e},
G9:function G9(d){this.a=d},
NS:function NS(d){this.a=d},
yY:function yY(d,e){this.a=d
this.b=e},
agh:function agh(){},
agi:function agi(){},
agw:function agw(){},
ajA:function ajA(){},
ajD:function ajD(){},
ale:function ale(){},
alf:function alf(){},
alg:function alg(){},
ali:function ali(){},
alj:function alj(){},
alk:function alk(){},
all:function all(){},
apD:function apD(){},
are:function are(){},
aIS:function aIS(d){this.a=d},
aIT:function aIT(){},
aIU:function aIU(){},
yZ:function yZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
alh:function alh(){},
aIV:function aIV(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aIY:function aIY(){},
aIW:function aIW(d,e,f){this.a=d
this.b=e
this.c=f},
aIX:function aIX(d,e,f){this.a=d
this.b=e
this.c=f},
aIZ:function aIZ(){},
vb:function vb(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a6b:function a6b(d,e,f){this.d=d
this.e=e
this.a=f},
aah:function aah(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i0=e
_.cV=f
_.fV=g
_.B=h
_.a3=_.U=_.V=null
_.a4=i
_.bA=_.aE=_.ah=_.an=$
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
bth(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bB(o.length,0,!1,x.i),m=B.ac(o),l=new B.aa(o,new A.awf(),m.i("aa<1,L>")).km(0,new A.awg()),k=e-l,j=new A.awj(k,d,n)
switch(d.cx.a){case 0:for(w=d.CW,v=0,u=0;u<o.length;++u){t=o[u]
n[u]=v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 1:w=d.CW
r=e-(l+w*(o.length-1))
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 2:w=d.CW
r=(e-(l+w*(o.length-1)))/2
for(v=0,u=0;u<o.length;++u){t=o[u]
n[u]=r+v+t.gdq(0)/2
s=u===o.length-1?0:w
v+=t.gdq(0)+s}if(v>e)j.$0()
break
case 5:q={}
p=o.length
q.a=0
new B.iM(o,m.i("iM<1>")).au(0,new A.awh(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iM(o,m.i("iM<1>")).au(0,new A.awi(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
awf:function awf(){},
awg:function awg(){},
awj:function awj(d,e,f){this.a=d
this.b=e
this.c=f},
awk:function awk(d,e,f){this.a=d
this.b=e
this.c=f},
awh:function awh(d,e,f){this.a=d
this.b=e
this.c=f},
awi:function awi(d,e,f){this.a=d
this.b=e
this.c=f},
bua(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iM(w,B.ac(w).i("iM<1>")).au(0,new A.aFZ(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aFZ:function aFZ(d,e){this.a=d
this.b=e},
azv(d,e){var w,v
if(e!=null){w=B.ac(e).i("aa<1,L>")
v=B.P(new B.aa(e,new A.azw(),w),w.i("aw.E"))
return A.c0Q(d,new A.a0E(v,x.cX))}else return d},
azw:function azw(){},
bV0(d,e){var w=!0
if(d!==C.fr)if(!(d===C.ap&&e===C.w))w=d===C.ii&&e===C.aW
if(w)return D.DH
else{w=!0
if(d!==C.ih)if(!(d===C.ii&&e===C.w))w=d===C.ap&&e===C.aW
if(w)return D.DI
else return D.a95}},
MX:function MX(d,e){this.a=d
this.b=e},
a0u:function a0u(d,e){this.a=d
this.b=e},
z1:function z1(d,e){this.a=d
this.$ti=e},
als:function als(){},
c0Q(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cF($.am().r)
for(w=B.b([],x.C),v=new B.NK(d,!1,w),u=e.a,t=l.e;v.t();){s=v.c
if(s===0||v.f)B.W(B.fs('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.NJ(v,s)
v.CT()
q=w[s].b
q===$&&B.a()
q.a.length()
p=0
o=!0
for(;;){v.CT()
q=w[s].b
q===$&&B.a()
if(!(p<q.a.length()))break
q=e.b
if(q>=u.length)q=e.b=0
e.b=q+1
n=u[q]
if(o){q=new B.JK(d.aS_(r,p,p+n,!0),C.u,null)
t.push(q)
m=l.d
if(m!=null)q.ih(m)}p+=n
o=!o}}return l},
a0E:function a0E(d,e){this.a=d
this.b=0
this.$ti=e},
b0j:function b0j(){},
PL:function PL(d,e,f,g,h,i,j){var _=this
_.G=null
_.ad=d
_.aH=e
_.dr=f
_.cQ=_.D=null
_.eW=g
_.D$=h
_.dy=i
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aTp:function aTp(d){this.a=d},
a4d:function a4d(d,e,f,g){var _=this
_.e=d
_.f=e
_.c=f
_.a=g},
btZ(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
if(!u.k(0,D.fI))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bNj(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gei(v)===0){v=d.a.a
if(v.gei(v)===0){v=d.b.a
if(v.gei(v)===0){v=d.c.a
v=v.gei(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aym(d,e){var w=1-e/100
return B.aD(d.gfF(d),C.d.b0(d.gNt()*w),C.d.b0(d.gFP()*w),C.d.b0(d.gJY()*w))},
bBl(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.aj(v,u,t,w?d.b.c.b:0)},
bu_(d){var w=d.a,v=w?A.aXP(d.b):0,u=w?A.aXP(d.c):0,t=w?A.aXP(d.d):0
return new B.aj(v,u,t,w?A.aXP(d.e):0)},
bSp(d){var w
if(d.c===0){d.seS(null)
w=B.c0(d.r)
d.r=B.aD(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gp(0)}},
buS(d,e,f,g){var w
if(f!=null){d.r=C.B.gp(0)
d.seS(f.mK(0,g))}else{w=e==null?C.G:e
d.r=w.gp(w)
d.seS(null)}},
aXP(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
km(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.kO(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.kO(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c28(d,e,f){return C.d.b0(d+(e-d)*f)},
bxk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.kO(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.Z(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a5Y.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aN:C.n
r=r?C.l:C.ai
w=x.p
v=B.b([],w)
C.b.M(v,B.b([B.cq(t.x,C.l,s,18),C.aS],w))
v.push(B.aE(new B.e3(t.c,!1,s),1))
v=B.al(v,C.A,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.J,B.j(t.d,1,C.al,s,B.bQ(u==null?C.h:u,22,C.P),s,s,s)],w)
return B.bv(r,B.ad(w,C.A,C.i3,C.i),q,s,C.aa,s,3)}}
A.uC.prototype={
Lk(d){return this.aS2(d)},
aS2(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lk=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_summary",B.a4(["p_from",E.qZ(d.a),"p_to",E.qZ(d.b)],s,r),r),$async$Lk)
case 3:q=f
if(q==null){u=D.aom
w=1
break}if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.aoP
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lk,v)},
Lj(d){return this.aS1(d)},
aS1(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$Lj=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.l(t.a.ew("finance_kpis",B.a4(["p_from",E.qZ(d.a),"p_to",E.qZ(d.b)],s,r),r),$async$Lj)
case 3:q=f
if(x.f.b(q)){u=B.dx(q,s,r)
w=1
break}u=D.ao5
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lj,v)},
py(d){return this.aq0(d)},
aq0(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$py=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hf("sevdesk-sync",B.a4(["from",E.qZ(d.a),"to",E.qZ(d.b)],s,s)),$async$py)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"upserted")=="number"){u=C.d.a2(B.fy(J.a3(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$py,v)},
Lf(d){return this.aRS(d)},
aRS(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$Lf=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.as
q===$&&B.a()
s=x.N
w=3
return B.l(q.hf("finance-export-pdf",B.a4(["from",E.qZ(d.a),"to",E.qZ(d.b)],s,s)),$async$Lf)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a3(r,"base64")=="string"){u=B.aH(J.a3(r,"base64"))
w=1
break}throw B.e(B.dz("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$Lf,v)}}
A.DJ.prototype={
FJ(d){return this.ajc(d)},
ajc(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FJ=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lk(d),$async$FJ)
case 7:q=f
o=A.aDL(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FJ,v)},
FF(d){return this.aiY(d)},
aiY(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FF=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lj(d),$async$FF)
case 7:q=f
o=A.bPT(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FF,v)},
py(d){return this.aq1(d)},
aq1(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$py=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.py(d),$async$py)
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
p=r.Hk(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$py,v)},
Le(d){return this.aRR(d)},
aRR(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Le=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.l(r.a.Lf(d),$async$Le)
case 7:q=f
o=C.iF.cL(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.Hk(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Le,v)},
Hk(d){if(d instanceof B.y8)return d
if(d instanceof B.lX){if(d.b==="42501")return new B.vw(d.a)
return new B.rY(d.a)}if(d instanceof B.MM)return new B.rY("Edge Function fehlgeschlagen ("+d.a+")")
return new B.AM("Unerwarteter Fehler: "+B.i(d))},
$iaDx:1}
A.q6.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vg.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.w9.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ayW.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aA1.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.o0.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.Ck.prototype={
gbC(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.o1.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yb.prototype={
GF(d){return this.aq_(0)},
aq_(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GF=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se4(0,C.dn)
s=t.r
r=s.aK(0,$.x7(),x.P)
p.a=null
w=3
return B.l(B.p2(new A.aDs(p,t,r),x.H),$async$GF)
case 3:t.se4(0,f)
q=t.f
if(q.ghp(q)==null){q=$.bsQ()
s=s.e
s===$&&B.a()
s.ck(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GF,v)},
Ld(){return this.aRQ()},
aRQ(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Ld=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se4(0,C.dn)
s=t.r.aK(0,$.x7(),x.P)
q.a=null
w=3
return B.l(B.p2(new A.aDr(q,t,s),x.H),$async$Ld)
case 3:t.se4(0,e)
r=t.f
u=r.ghp(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Ld,v)}}
A.yc.prototype={
du(d,e){var w=null,v=e.aq($.x7(),x.P),u=e.aq($.bsQ(),x.aN)
return B.il(B.dA(B.b([new B.ft("Finanzen","Dashboard",new A.afr(e.aq($.bsO(),x.b).gja(),new A.aDC(this,d,e),new A.aDD(this,d,e),new A.aDE(d),new A.aDF(d),new A.aDG(this,d,e,v),w),w),C.aB,new A.amN(v,w),C.c8,D.aeP,C.c8,B.dk(u,new A.aDH(),new A.aDI(),new A.aDJ(),!1,!0,!1,x.d,x.l)],x.p),C.cy,w,C.I,!1),C.l,new A.aDK(e))},
J8(d,e){return this.aKm(d,e)},
aKm(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$J8=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bsO()
w=3
return B.l(e.aK(0,s.ghN(),x.F).GF(0),$async$J8)
case 3:r=g
if(d.e==null){w=1
break}s=e.aK(0,s,x.b)
s=s.ghp(s)
t=d.P(x.q).f
t.bc(B.c2(null,null,null,null,null,C.q,null,B.j(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$J8,v)},
B6(d,e){return this.avY(d,e)},
avY(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$B6=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.l(e.aK(0,$.bsO().ghN(),x.F).Ld(),$async$B6)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.bc(D.awr)
w=1
break}t=B.pS(C.u,10)
w=4
return B.l($.bJw().tV(s,"finanzauswertung.pdf",t,null,null,null),$async$B6)
case 4:case 1:return B.o(u,v)}})
return B.p($async$B6,v)},
B7(d,e,f){return this.aI2(d,e,f)},
aI2(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$B7=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.l(B.j4(null,null,!0,null,new A.aDA(f,d),d,null,!0,!0,x.cJ),$async$B7)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nD(e.aK(0,$.c_(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ao(p)
n=n.ao(o)
w=8
return B.l(r.zm("finance_period",p,o,B.a4(["period_from",p.ej()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$B7)
case 8:if(d.e!=null)d.P(x.q).f.bc(F.uT)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$B7,v)}}
A.afr.prototype={
u(d){var w=this,v=null,u=A.akD(C.l,F.hL,C.l,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.akD(v,D.aaP,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.akD(v,D.xD,v,s?v:w.d,"sevDesk synchronisieren"),q=A.akD(C.ac,C.j6,C.ac,s?v:w.e,"PDF-Export")
return B.al(B.b([u,C.aS,t,C.aS,r,C.aS,q,C.aS,A.akD(C.ak,C.ff,C.ak,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.m,C.f,C.R,0,v,v)}}
A.akC.prototype={
u(d){var w,v=this,u=null,t=B.aP(12),s=B.aP(12),r=B.aP(12),q=v.w
if(q==null)q=C.ai
q=B.d5(q,1)
w=v.r
if(w==null)w=C.h
return B.GM(B.dR(!1,C.Z,!0,t,B.eL(!1,s,!0,B.b2(u,B.cq(v.c,w,u,20),C.t,u,u,new B.b1(u,u,q,r,u,u,C.D),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.t,C.ad,0,u,u,u,u,u,C.bz),u,v.d,u,u)}}
A.amN.prototype={
du(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bv(w,B.ad(B.b([D.a8b,C.J,B.al(B.b([D.abC,C.b0,B.aE(B.j(u.ao(v.a)+" \u2013 "+u.ao(v.b),w,w,w,B.y(C.h,16,C.P),w,w,w),1)],t),C.m,C.f,C.i,0,w,w),C.v,B.l8(C.cr,B.b([new A.It("Monat",new A.bfl(e),w,w),new A.It("Jahr (YTD)",new A.bfm(e),w,w),new A.It("Zeitraum w\xe4hlen \u2026",new A.bfn(this,d,e),D.a9V,w)],t),C.dB,6,8)],t),C.A,C.f,C.i),w,w,C.C,w,3)},
Iw(d,e){return this.aGX(d,e)},
aGX(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Iw=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.l(E.au0(new A.bfk(),d,B.bK(B.aV(t)-5,1,1,0,0,0,0),new B.ly(s.a,s.b,x.bz),B.bK(B.aV(t)+1,1,1,0,0,0,0),C.eh),$async$Iw)
case 2:r=g
if(r!=null)e.aK(0,$.x7().ghN(),x.V).wn(0,new E.lD(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Iw,v)}}
A.It.prototype={
u(d){var w=null,v=B.aP(9999),u=B.aP(9999),t=B.aP(9999),s=B.d5(C.ai,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.M(q,B.b([B.cq(p,C.h,w,14),C.aS],r))
q.push(B.j(this.c,w,w,w,B.y(C.h,13,C.P),w,w,w))
return B.dR(!1,C.Z,!0,v,B.eL(!1,u,!0,B.b2(w,B.al(q,C.m,C.f,C.R,0,w,w),C.t,w,w,new B.b1(w,w,s,t,w,w,C.D),w,w,w,w,C.kO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.t,C.ad,0,w,w,w,w,w,C.bz)}}
A.IW.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ji(new A.bll(this)),C.c8,D.a8f,C.v],r),p=this.c.w
if(p.length===0)q.push(B.bv(s,B.al(B.b([D.ac0,C.ay,B.aE(B.j("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.y(C.r,14,C.k),s,s,s),1)],r),C.m,C.f,C.i,0,s,s),C.ad,s,C.C,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.I)(p),++u){t=p[u]
C.b.M(w,B.b([new A.afp(t.a,t.b,t.c==="revenue",t.d,s),C.J],r))}q.push(B.ad(w,C.m,C.f,C.i))}return B.ad(q,C.ae,C.f,C.i)}}
A.afp.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.aN:C.ad,s=B.d5(u?C.l:C.ai,1),r=B.aP(4),q=w.c
r=B.b2(C.a0,B.j(C.c.a_(q,0,1),v,v,v,B.bQ(C.h,14,C.o),v,v,v),C.t,v,v,new B.b1(t,v,s,r,v,v,C.D),v,36,v,v,v,v,v,36)
q=B.j(q+" \xb7 "+w.d,1,C.al,v,B.y(C.h,14,C.P),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.aE(B.ad(B.b([q,B.j(t,v,v,v,B.y(C.r,12,C.k),v,v,v)],s),C.A,C.f,C.i),1)
q=$.dD().ao(w.f)
return B.bv(v,B.al(B.b([r,C.ay,t,B.j(q,v,v,v,B.y(u?C.ak:C.h,15,C.P),v,v,v)],s),C.m,C.f,C.i,0,v,v),v,v,C.ea,v,3)}}
A.HC.prototype={
u(d){var w=null
return B.bv(C.ac,B.al(B.b([D.acB,C.ay,B.aE(B.j(this.c,w,w,w,B.y(C.h,14,C.k),w,w,w),1)],x.p),C.m,C.f,C.i,0,w,w),C.fF,w,C.C,w,3)}}
A.a5Z.prototype={
du(d,e){return B.dk(e.aq($.bLZ(),x.e),new A.aIz(),new A.aIA(),new A.aIB(),!1,!0,!1,x.X,x.l)}}
A.HW.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.atS,C.v,B.ji(new A.bcU(v,q,100-t.w.a,w,p)),C.v,new A.ajW(u),C.aB,D.atR,C.v,new A.agg(t,u),C.aB,D.atM,C.v,B.bE(u,!0,u,B.mO(u,B.bv(u,new A.Tc(t,220,u),u,u,C.C,u,3),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcV(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aB,D.atG,C.v,B.bE(u,!0,u,B.mO(u,new A.To(t,200,!1,u),C.a7,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bcW(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.O,u),C.aB,D.atK,C.v,new A.alB(t,u),C.aB,D.atH,C.v,new A.ahZ(t,u)],s)
if(t.f.length!==0)C.b.M(r,B.b([C.aB,D.atO,C.v,new A.arb(t,u)],s))
return B.ad(r,C.ae,C.f,C.i)}}
A.ajW.prototype={
u(d){var w=null
return B.j("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.y(C.r,11,C.k).dk(1.35),w,w,w)}}
A.al7.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cG(m.d,"-")?C.ac:C.ak
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bcX(m,d):l
r=x.p
q=B.b([B.aE(B.j(m.c.toUpperCase(),l,l,l,B.y(C.r,10,C.o).fq(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.d5(C.ac,0.8)
n=B.aP(4)
q.push(B.b2(l,B.j("Ziel "+p,l,l,l,B.y(C.ac,9,C.o),l,l,l),C.t,l,l,new B.b1(l,l,o,n,l,l,C.D),l,l,l,l,C.n8,l,l,l))}q=B.b([B.al(q,C.m,C.f,C.i,0,l,l),C.b3,new A.a4d(C.Bb,C.eu,B.j(m.d,l,l,l,B.bQ(w,22,C.o),l,l,l),l)],r)
p=m.e
if(p!=null)q.push(B.j(p,2,C.al,l,B.y(C.r,10,C.aA),l,l,l))
q.push(C.cn)
q.push(B.al(B.b([new A.TZ("Vormonat",m.r,l),C.cm,new A.TZ("Vorjahr",m.f,l)],r),C.m,C.f,C.i,0,l,l))
q.push(C.cn)
q.push(B.aE(new A.Xv(v,m.y,m.z,l),1))
return B.bE(l,u,l,B.mO(l,B.bv(l,B.ad(q,C.A,C.f,C.i),l,l,C.d8,l,3),C.a7,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.O,l)}}
A.TZ.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aP(4)
return B.b2(r,B.j(this.c+" \u2014",r,r,r,B.y(C.r,9,C.o),r,r,r),C.t,r,r,new B.b1(C.ai,r,r,q,r,r,C.D),r,r,r,r,C.n8,r,r,r)}w=q>=0
v=w?C.ak:C.ac
u=v.fi(0.12)
t=B.d5(v,0.7)
s=B.aP(4)
return B.b2(r,B.al(B.b([B.cq(w?F.a9b:D.a9a,v,r,10),F.aw5,B.j(this.c+" "+C.d.ak(q,1)+" %",r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.m,C.f,C.R,0,r,r),C.t,r,r,new B.b1(u,r,t,s,r,r,C.D),r,r,r,r,C.n8,r,r,r)}}
A.Xv.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.as
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ew(v,j[v]))
u=C.b.km(j,new A.bkA())
t=C.b.km(j,new A.bkB())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bkC(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a4j(k,!1)
w=B.b([A.aIQ(k,2,A.awc(!1,C.l.fi(0.16),0,k,!0,D.vR),C.l,0.35,k,D.Dy,k,!0,!1,!0,!1,D.EZ,!1,10,D.Ym,!0,C.li,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.NQ(A.buw(k,k,k,D.akI,l,D.Bp,D.Du,D.Dz,w,D.aeT,k,m,k,n,D.XG,D.akJ,D.a8t),C.au,C.ag,k,k)}}
A.Tc.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aJh
w=C.b.fv(p,0,new A.b3U())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.awl(B.b([A.a00(q,q,D.AQ,q,C.l,q,q,q,r.b,6),A.a00(q,q,D.AQ,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.c5(A.bA1(A.awe(q,q,u,q,q,A.a4j(q,!1),q,new A.ye(!0,!0,q,new A.b3V(),A.Zy(),!1,q,A.atL(),A.Zy()),q,v,q,q,new A.uE(!0,new A.p3(16,q,new A.pY(!0,new A.b3W(this),46,q),!0),D.kh,D.kh,new A.p3(16,q,new A.pY(!0,new A.b3X(p),26,q),!0)))),this.d,q)},
aJE(d){if(Math.abs(d)>=1000)return C.d.ak(d/1000,1)+" k"
return C.d.ak(d,0)}}
A.To.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.P(new B.aa(v,new A.b4H(),w),x.i)
C.b.M(o,new B.aa(u,new A.b4I(),w))
t=C.b.fv(o,0,new A.b4J())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.awl(B.b([A.a00(q,q,q,q,C.l,q,q,q,v[s],14),A.a00(q,q,q,q,C.ak,q,q,q,u[s],14)],m),4,q,q,s))
r=B.c5(A.bA1(A.awe(q,q,n,q,q,A.a4j(q,!1),q,D.Dz,q,o,q,q,new A.uE(!0,D.kh,D.kh,D.kh,new A.p3(16,q,new A.pY(!0,new A.b4K(p),26,q),!0)))),this.d,q)
return this.e?r:B.bv(q,r,q,q,C.C,q,3)}}
A.alB.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aJg
w=new B.aa(l,new A.bdq(),B.ac(l).i("aa<1,L>")).km(0,new A.bdr())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.I)(l),++s){r=l[s]
q=B.j(r.b,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dD()
o=r.d
n=new B.aW(4,4)
o=B.b([B.al(B.b([new B.kC(1,C.dM,B.ad(B.b([q,B.j(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ao(r.f),m,m,m,B.y(C.r,12,C.aA),m,m,m)],v),C.A,C.f,C.i),m),C.b0,B.j(p.ao(o),m,m,m,B.bQ(C.h,16,C.o),m,m,m)],v),C.m,C.f,C.i,0,m,m),C.cn,new B.D2(new B.d4(n,n,n,n),C.bD,B.En(C.ai,8,C.d.c1(o/w,0,1),D.AE),m)],v)
q=C.b.gaf(l)
if(r!==q)q=B.H(r)===B.H(q)&&B.ZB(r.gbC(),q.gbC())
else q=!0
if(!q)o.push(C.v)
C.b.M(u,o)}return B.bv(m,B.ad(u,C.m,C.f,C.i),m,m,C.C,m,3)}}
A.ahZ.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.aE(new A.BP("Aktive Kunden",""+s,u),1)
w=B.aE(new A.BP("K\xe4ufe",""+t.a,u),1)
v=$.dD()
return B.bv(u,B.al(B.b([s,w,B.aE(new A.BP("\xd8-Warenkorb",v.ao(t.d),u),1),B.aE(new A.BP("Umsatz/Kunde",v.ao(r),u),1)],x.p),C.m,C.f,C.i,0,u,u),u,u,C.C,u,3)}}
A.BP.prototype={
u(d){var w=null
return B.ad(B.b([B.j(this.c.toUpperCase(),w,w,w,B.y(C.r,10,C.o).fq(0.6),w,w,w),C.bN,B.j(this.d,w,w,w,B.bQ(C.h,20,C.o),w,w,w)],x.p),C.A,C.f,C.R)}}
A.arb.prototype={
u(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.aa(q,new A.bmC(),B.ac(q).i("aa<1,L>")).km(0,new A.bmD()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.I)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([B.al(B.b([new B.kC(1,C.dM,B.j(u.b,1,C.al,r,B.y(C.h,13,C.o),r,r,r),r),B.j(""+u.c+"\xd7 ",r,r,r,B.y(C.r,12,C.P),r,r,r),B.j($.dD().ao(t),r,r,r,B.y(C.h,13,C.o),r,r,r)],o),C.m,C.f,C.i,0,r,r),C.b3,new B.D2(new B.d4(s,s,s,s),C.bD,B.En(C.ai,6,C.d.c1(t/p,0,1),D.AE),r)],o)
s=C.b.gaf(q)
if(u!==s)s=B.H(u)===B.H(s)&&B.ZB(u.gbC(),s.gbC())
else s=!0
if(!s)t.push(C.J)
C.b.M(n,t)}return B.bv(r,B.ad(n,C.m,C.f,C.i),r,r,C.C,r,3)}}
A.wr.prototype={
u(d){var w=null
return B.bv(w,B.j(this.c,w,w,w,B.y(C.r,13,C.k),w,w,w),C.ad,w,C.C,w,3)}}
A.agg.prototype={
du(d,e){return B.dk(e.aq($.bsP(),x.fM),new A.b2m(this,d,e),new A.b2n(),new A.b2o(),!1,!0,!1,x.h,x.l)}}
A.AU.prototype={
X(){return new A.SQ()},
aWX(){return this.d.$0()}}
A.SQ.prototype={
aA(){var w,v,u,t,s,r,q=this
q.aO()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a3(w,"as_of"))!=null){w.toString
u=B.fo(J.ak(J.a3(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pk[t].a
if(v)r=""
else{r=B.bn(J.a3(w,s))
if(r==null)r=null
r=C.d.ak(r==null?0:r,2)
r=B.b_(r,".",",")}u.m(0,s,new B.bI(new B.cS(r,C.bE,C.aP),$.ah()))}q.e!==$&&B.b8()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.c7(v,v.r,v.e,B.k(v).i("c7<2>"))
while(v.t()){w=v.d
w.R$=$.ah()
w.S$=0}this.ap()},
re(d){var w=this.e
w===$&&B.a()
w=C.c.bm(w.h(0,d).a.a)
w=B.b_(w,".","")
w=B.jp(B.b_(w,",","."))
return w==null?0:w},
a3t(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pk[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ak(u,2)
s=B.b_(s,".",",")
t.lK(0,t.a.xO(C.aP,C.bE,s))}}this.J(new A.b2a())},
aDG(){this.a3t(D.aoo)
this.c.P(x.q).f.bc(D.awN)},
HM(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$HM=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b5(a1)
for(e=0;e<8;++e)a2.E(0,D.pk[e].a)
q=a2
t=4
w=7
return B.l($.aDl.cf().z4(B.b(["csv","txt"],x.s),C.xq,!0),$async$HM)
case 7:p=a5
a2=p
o=a2==null?null:J.JH(a2.a).c
if(o==null){w=1
break}n=C.aC.acC(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.Bu.cL(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.I)(a1),++e){l=a1[e]
k=J.auB(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ci(k)<2)continue
j=C.c.bm(J.a3(k,0)).toLowerCase()
i=J.Cg(q,j)?j:D.aoQ.h(0,j)
if(i==null)continue
d=C.c.bm(C.b.n1(J.bMJ(k,1)))
d=B.b_(d,"\u20ac","")
d=B.b_(d," ","")
d=B.b_(d,".","")
h=B.b_(d,",",".")
g=B.jp(h)
if(g!=null)J.fl(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.bc(D.awo)
w=1
break}r.a3t(m)
r.c.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.j(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HM,v)},
HX(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$HX=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b2b(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.aZn("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.ej(),0,10),"p_cash_and_bank",q.re("cash_and_bank"),"p_receivables",q.re("receivables"),"p_inventory_value",q.re("inventory_value"),"p_other_current_assets",q.re("other_current_assets"),"p_fixed_assets",q.re("fixed_assets"),"p_current_liabilities",q.re("current_liabilities"),"p_long_term_liabilities",q.re("long_term_liabilities"),"p_equity",q.re("equity")],x.N,x.aU))
w=7
return B.l(n,$async$HX)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aWX()
o=q.c
o.toString
B.ba(o,!1).f0()
q.c.P(x.q).f.bc(D.aws)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.bc(B.c2(null,null,null,null,null,C.q,null,B.j("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.H,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b2c(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$HX,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.j("Bilanzwerte erfassen",r,r,r,B.bQ(C.h,18,C.o),r,r,r),p=s.f?r:new A.b2e(s,d),o=s.d
o===$&&B.a()
p=B.hp(D.abE,B.j("Stichtag: "+C.c.a_(o.ej(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.aE(B.hp(D.acJ,D.aCy,o?r:s.gaCJ(),r),1)
v=x.p
w=B.b([p,C.J,B.al(B.b([w,C.b0,B.aE(B.hp(D.acz,D.aCl,o?r:s.gaDF(),r),1)],v),C.m,C.f,C.i,0,r,r),C.v],v)
for(u=0;u<8;++u){p=D.pk[u]
o=s.e
o===$&&B.a()
C.b.M(w,B.b([B.f_(r,C.aR,!1,r,!0,C.q,r,B.fc(),o.h(0,p.a),r,r,r,r,r,2,new B.ce(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a7,!0,r,!0,r,!1,r,C.aX,r,r,r,r,C.ik,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ap,r,C.a2,r,r,r,r),C.J],v))}w.push(B.j("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.y(C.r,11,C.k),r,r,r))
p=B.c5(B.f8(B.ad(w,C.ae,C.f,C.R),r,C.I),r,380)
o=s.f
w=B.dJ(C.cT,r,r,o?r:new A.b2f(d),r,r)
o=o?r:s.gaDp()
t=B.dF(C.l,C.h,r,r,r,r,r)
return B.lu(B.b([w,B.dQ(s.f?F.YT:C.eq,o,t)],v),C.n,p,q)}}
A.bd.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.H(this)===B.H(e)&&B.ZB(this.gbC(),e.gbC())
else w=!0
return w},
gv(d){return(B.eA(B.H(this))^B.bHV(this.gbC()))>>>0},
j(d){B.bBh()
return B.H(this).j(0)}}
A.Km.prototype={
X(){return new A.SR(B.A(x.S,x.I),new A.awo(B.A(x.x,x.T)),null,null)}}
A.SR.prototype={
u(d){var w,v=this,u=v.a1u(),t=v.CW
t.toString
t=v.a1v(t.av(0,v.ghF().gp(0)))
w=v.a1v(u)
v.a.toString
return new A.Kh(new A.a0_(t,w,null),u,null)},
a1v(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.awl(s.c,s.d,!1,r,s.a))}return d.aOT(w)},
a1u(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Uj(t.ch)
if(r)s=w.a
r=t.y
t=t.aPO(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aOU(A.bti(!1,!0,!0,v.d,v.c,u.garx(),v.f,v.e))}return t},
ary(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gaf3()||e==null||e.a==null){w=v.cy
v.J(w.gaOi(w))
return}v.J(new A.b2r(v,e))},
nP(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1u(),new A.b2s(w)))}}
A.nK.prototype={
UT(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.awe(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aPO(d,e){return this.UT(null,null,d,e)},
aOU(d){return this.UT(null,d,null,null)},
aOT(d){return this.UT(d,null,null,null)},
WR(d,e,f){var w,v,u,t=A.km(d.ch,e.ch,f,A.c05(),x.dB),s=B.ab(d.CW,e.CW,f),r=A.bBo(d.d,e.d,f),q=A.bDh(d.e,e.e,f),p=A.bBm(d.c,e.c,f),o=e.a
o=A.a4j(B.a0h(d.a.b,o.b,f),o.a)
w=B.ab(d.y,e.y,f)
v=B.ab(d.x,e.x,f)
u=B.ab(d.z,e.z,f)
r=A.awe(e.cx,B.Z(d.as,e.as,f),t,e.cy,u,o,A.bBj(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbC(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.awd.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fA.prototype={
gdq(d){var w,v=this.c
if(v.length===0)return 0
w=new B.aa(v,new A.awm(),B.ac(v).i("aa<1,L>")).km(0,new A.awn())
v=v.length
return w+(v-1)*this.d},
gbC(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ig.prototype={
gbC(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mv.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a_X.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a01.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.acU.prototype={
L(){return"TooltipDirection."+this.b}}
A.a02.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.CC.prototype={
gbC(){return[this.a,this.b,C.cS,C.w,null]}}
A.Kn.prototype={}
A.a03.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xn.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WR(v,w,d)}}
A.agc.prototype={}
A.agj.prototype={}
A.agk.prototype={}
A.agm.prototype={}
A.agn.prototype={}
A.ago.prototype={}
A.agp.prototype={}
A.agq.prototype={}
A.agr.prototype={}
A.awo.prototype={
Uj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uf(0,0,!1)
v=new A.z1(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uf(t,u,!0)}w=null
try{w=C.b.qd(d,new A.awp())}catch(s){return new A.uf(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uf(q,r,!1)
u.m(0,v,j)
return j}}
A.uf.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.agl.prototype={}
A.awq.prototype={
i6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_A(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.abE(t,A.bth(w,t.a),u)
l.y=u
l.aR9(e,u,f)
l.al8(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aRi(d,e,m,t,r,s,n,o,f)}}},
abE(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dz("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iM(p,B.ac(p).i("iM<1>")).au(0,new A.awr(t,q,r,s))
w.push(new A.a50(q))}return w},
aR9(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
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
if(a1!==a2){if(a1>a2){a3=b3.dE(Math.max(s,a2),b5,b8)
a4=B.Pn(h,Math.min(b3.dE(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dE(Math.min(t,a2),b5,b8)
a4=B.Pn(h,a5,g,Math.max(b3.dE(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.G:f).gp(0)
k.seS(null)
a6=b3.f.eo()
u.drawRRect(B.mq(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dE(f,b5,b8)
e=a8.b
b0=b3.dE(e,b5,b8)
b3.f.r=a8.c.gp(0)
b1=e<f?new B.G(h,a9,g,b0):new B.G(h,b0,g,a9)
J.aY(u.save())
u.clipRect(B.dN(b1),$.oV()[1],!0)
a6=b3.f.eo()
u.drawRRect(B.mq(a4),a6)
a6.delete()
u.restore()
b3.aRg(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gei(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gp(f)
k.c=n
b2=B.cF($.am().r)
n=new B.hb(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.ih(k)
v.ha(A.azv(b2,o.r),b3.r)}}}},
aRi(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AB(a5,a5,a5,a5,B.da(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lr().ZA(a8,a7.b),a7.a),C.cS,C.w,a5,b6.c,C.bu)
w.afm(b1.f)
v=w.b
u=v.c
v=v.a.c
v=v.gbS(v)
t=b0[b3].b[b5]
s=b4.b
r=a4.dE(s,a6,b6)
q=b4.a
p=a4.dE(q,a6,b6)
o=b1.b
n=u+o.ger()
m=v+4+(o.gcZ(0)+o.gd0(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aEX)j=v===D.Zz&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZB(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.G(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.Fw(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gp(r)
d=b1.z
v-=h
t-=i
r=$.lr().K7(new B.F(v,t),d).b
s=$.lr()
q=w.b
p=q.c
q=q.a.c
a0=s.K7(new B.F(p,q.gbS(q)),d)
q=g.gc7()
p=w.b.c
s=g.gahC()
a1=b1.Q
if(!a1.k(0,C.F)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gp(a3)
a2.c=a1.b}a9.Vw(d,new A.aws(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.F(v,t))},
aRg(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gei(w)===0}else w=!0
if(w)return
if(f===0){w=e.b
v=n.dE(w,j,k)
u=e.a
t=n.dE(u,j,k)
w=u<w
u=w?new B.aW(i.z,i.Q):C.a1
s=w?new B.aW(i.x,i.y):C.a1
r=w?C.a1:new B.aW(i.e,i.f)
w=w?C.a1:new B.aW(i.r,i.w)
q=B.Pn(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dE(v,j,k),i.b)
r=n.dE(t,j,k)
v=t<v
t=v?C.a1:new B.aW(i.z,i.Q)
p=v?C.a1:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a1
q=B.Pn(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a1)}else q=B.bvc(w,n.dE(v,j,k),u,n.dE(t,j,k),C.a1)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gp(m)
w.c=Math.min(l,h/2)
d.a.eN(q,n.r)},
Wb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.abE(b2,A.bth(a8,b2.a),a8.ch)
for(w=b1.b,v=b1.a,u=a9.cy.f,t=u.a,s=u.d,r=u.b,q=0;p=a7.y,q<p.length;++q)for(p=p[q].b,o=0;o<p.length;++o){n=p[o]
m=b0[q].c[o]
l=m.e/2
k=m.b
j=m.a
i=k>=j
if(i){h=a7.dE(k,b2,b3)
m=b0[q].c[o]
g=a7.dE(m.a+m.x.b,b2,b3)}else{h=a7.dE(j+m.x.b,b2,b3)
g=a7.dE(b0[q].c[o].b,b2,b3)}a7.dE(b0[q].c[o].x.c,b2,b3)
f=v<=n+l+u.c&&v>=n-l-t
if(i)e=w<=g+s&&w>=h-r
else e=w>=h-r&&w<=g+s
if(f&&e){d=b0[q]
a0=d.c[o]
v=a0.b
t=a7.dE(v,b2,b3)
b0=a0.y
a3=0
for(;;){if(!(a3<b0.length)){a1=-1
a2=null
break}a4=b0[a3]
a5=a7.dE(a4.a,b2,b3)
a6=a7.dE(a4.b,b2,b3)
if(w<=a5&&w>=a6){a2=a4
a1=a3
break}++a3}return new A.a03(d,q,a0,o,a2,a1,new A.ew(d.a,v),new B.r(n,t))}}return null}}
A.a50.prototype={}
A.a0_.prototype={
bn(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcO(),t=new A.awq()
t.a0M()
$.am()
w=B.aX()
w.b=C.bf
t.f=w
w=B.aX()
w.b=C.b_
t.r=w
w=B.aX()
w.b=C.bf
w.r=C.n.gp(0)
t.w=w
w=B.aX()
w.b=C.b_
w.r=C.G.gp(0)
w.c=1
t.x=w
t=new A.aa4(this.d,v,u,t,d,C.bn,new B.bq(),B.aJ(x.v))
t.bk()
t.Yw(v.cy)
t.aev()
return t},
by(d,e){e.sik(0,this.d)
e.sYh(this.e)
e.scO(B.bw(d,null,x.w).w.gcO())
e.B=d
e.bf()}}
A.aa4.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYh(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
w.a0k(d.cy)
w.bf()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bf()},
aN(d,e){var w,v,u=this,t=d.gdF(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i6(w,new A.a0u(t,v),new A.vs(u.aC,u.i0,u.cV,x.Q))
s.restore()},
Zu(d){var w=this,v=w.gC(0)
return new A.Kn(w.fV.Wb(d,v,new A.vs(w.aC,w.i0,w.cV,x.Q)))}}
A.a_Q.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.CB.prototype={
L(){return"AxisSide."+this.b}}
A.tf.prototype={}
A.pY.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.abt.prototype={
gbC(){return[!1,0,0,0]}}
A.p3.prototype={
gbC(){return[this.b,this.a,this.c,!0]}}
A.uE.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ew.prototype={
j(d){return"("+B.i(this.a)+", "+B.i(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ew))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.ye.prototype={
gbC(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pp.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.acW.prototype={
gbC(){return[this.a,this.b]}}
A.Pr.prototype={
gbC(){return[this.a,this.b]}}
A.mP.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ng.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kI.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.l7.prototype={
gbC(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a5b.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.adi.prototype={
gbC(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.Mh.prototype={
gbC(){return[this.a,this.b,!0]}}
A.uD.prototype={}
A.Mr.prototype={
ad2(d,e,f){var w,v
$.am()
w=B.aX()
v=this.a
w.r=v.gp(v)
w.b=C.bf
d.iP(f,this.b,w)},
gbC(){return[this.a,this.b,this.c,0]}}
A.ag7.prototype={}
A.agb.prototype={}
A.ajl.prototype={}
A.ajB.prototype={}
A.ajC.prototype={}
A.ajE.prototype={}
A.ajF.prototype={}
A.aks.prototype={}
A.akr.prototype={}
A.akt.prototype={}
A.anT.prototype={}
A.apE.prototype={}
A.apF.prototype={}
A.arf.prototype={}
A.arS.prototype={}
A.arR.prototype={}
A.arT.prototype={}
A.aw3.prototype={
Mg(d,e,f,g,h,i){return new B.ia(this.aUZ(d,e,f,g,h,i),x.g4)},
aUY(d,e,f,g){return this.Mg(d,e,f,!0,g,!0)},
aUZ(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$Mg(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lr().aiK(s,u,v,w)
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
A.Kg.prototype={
a0M(){var w,v=this
$.am()
w=B.aX()
w.b=C.b_
v.a=w
w=B.aX()
w.b=C.bf
v.b=w
w=B.aX()
w.b=C.bf
v.e=w
w=B.aX()
w.b=C.b_
v.c=w
v.d=B.aX()},
i6(d,e,f){var w=this
w.a_B(d,e,f)
w.aR5(e,f)
w.aRf(e,f)
w.aRe(e,f)},
aRe(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lr().Om(w.a,a1.r-a1.f)
u=$.bsr().Mg(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
if(!q.$1(p))continue
o=d.fb(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.kX(n,m)
if(j!=null){p.r=C.B.gp(0)
p.seS(j.mK(0,i))}else{if(k==null)k=C.G
p.r=k.gp(k)
p.seS(a0)}k=l.c
p.c=k
if(k===0){p.seS(a0)
k=B.c0(p.r)
p.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}a3.Dm(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lr().Om(w.b,a1.y-a1.x)
u=$.bsr().Mg(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fb(u.a(),u.$ti.i("fb<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
if(!a2.$1(q))continue
f=r.$1(q)
e=d.dE(q,w,a4)
n=new B.r(0,e)
m=new B.r(g,e)
q=d.a
q===$&&B.a()
p=f.a
k=f.b
i=B.kX(n,m)
if(k!=null){q.r=C.B.gp(0)
q.seS(k.mK(0,i))}else{if(p==null)p=C.G
q.r=p.gp(p)
q.seS(a0)}p=f.c
q.c=p
if(p===0){q.seS(a0)
p=B.c0(q.r)
q.r=B.aD(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gp(0)}a3.Dm(n,m,d.a,f.d)}},
aR5(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gp(0)
d.a.hb(new B.G(0,0,0+w.a,0+w.b),this.b)},
aRf(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.I)(k),++u){t=k[u]
s=B.kX(new B.r(n.fb(t.a,m,e),0),new B.r(n.fb(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.B.gp(0)
r.seS(p.mK(0,s))}else{r.r=(q==null?C.G:q).gp(0)
r.seS(null)}o=n.e.eo()
w.drawRect(B.dN(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.I)(l),++u){t=l[u]
s=B.kX(new B.r(0,n.dE(t.a,m,e)),new B.r(w,n.dE(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.B.gp(0)
v.seS(q.mK(0,s))}else{v.r=(r==null?C.G:r).gp(0)
v.seS(null)}o=n.e.eo()
j.drawRect(B.dN(s),o)
o.delete()}},
aRd(d,e,f){var w,v
this.a_B(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.ad3(d,e,f,w)
if(v.b.length!==0)this.aRk(d,e,f,w)},
ad3(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=f.dE(o,a1,a0)
m=new B.r(0,n)
o=f.dE(o,a1,a0)
l=new B.r(u,o)
if(!(n<0||o<0||n>t||o>t)){n=f.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kX(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seS(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
e.Dm(m,l,f.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=C.d.am(o,n.gbS(n).eE(0,2))
J.aY(r.save())
r.translate(h,g)
n=n.gNd().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eE(0,2)
o=C.d.am(o,n.gbS(n).eE(0,2))
k=f.d
k===$&&B.a()
s.ad4(0,n,new B.r(h,o),k)}}},
aRk(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.e
n=d.fb(o,a3,a2)
m=new B.r(n,0)
o=d.fb(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.kX(m,l)
if(j!=null){n.r=C.B.gp(0)
n.seS(j.mK(0,i))}else{if(k==null)k=C.G
n.r=k.gp(k)
n.seS(null)}k=p.c
n.c=k
if(k===0){n.seS(null)
k=B.c0(n.r)
n.r=B.aD(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gp(0)}n.d=p.x
a1.Dm(m,l,d.c,p.d)
n=p.r
h=n.gdq(n).eE(0,2)
g=n.gbS(n).eE(0,2)
f=C.d.am(o,h)
e=C.d.am(u,g)
J.aY(r.save())
r.translate(f,e)
n=n.gNd().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdq(n).eE(0,2)
g=n.gbS(n).ac(0,2)
o=C.d.am(o,h)
k=C.d.am(u,g)
j=d.d
j===$&&B.a()
s.ad4(0,n,new B.r(o,k),j)}}},
fb(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dE(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZB(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.Kh.prototype={
gakt(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gaku(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gakv(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gakr(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
akP(d){var w,v=this,u=null,t=v.d,s=A.bu_(t.d),r=t.a
r=r.a&&A.bNj(r.b)?r.b:u
w=B.b([B.b2(u,v.c,C.t,u,u,new B.b1(u,u,r,u,u,u,C.D),u,u,u,s,u,u,u,u)],x.p)
s=new A.aw5(w)
if(v.gakt())C.b.hv(w,s.$1(!0),new A.Al(D.AL,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakv())C.b.hv(w,s.$1(!0),new A.Al(D.mp,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gaku())C.b.hv(w,s.$1(!0),new A.Al(D.AM,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
if(v.gakr())C.b.hv(w,s.$1(!0),new A.Al(D.dE,t,new B.F(B.M(1/0,d.a,d.b),B.M(1/0,d.c,d.d)),u))
return w},
u(d){return B.ji(new A.aw4(this))}}
A.QS.prototype={
X(){return new A.Xk(new B.bf(null,x.eF))}}
A.Xk.prototype={
awY(){switch(this.a.c.a){case 0:return C.e3
case 1:return C.fy
case 2:return C.eu
case 3:return C.fz}},
axt(){switch(this.a.c.a){case 0:return new B.aj(0,0,8,0)
case 1:return new B.aj(0,0,0,8)
case 2:return new B.aj(8,0,0,0)
case 3:return new B.aj(0,8,0,0)}},
ax_(d){this.a.toString
return},
aA(){this.aO()
$.cx.x1$.push(this.ga3X())},
bd(d){this.bF(d)
$.cx.x1$.push(this.ga3X())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.axt()
return B.bvM(B.b_T(0,B.b2(v.awY(),t.e,C.t,u,u,u,u,u,v.d,w,u,u,u,u)),C.u)}}
A.abu.prototype={
bn(d){return A.bN9(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.V!==w){e.V=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a_R.prototype={
hl(d){if(!(d.b instanceof B.hj))d.b=new B.hj(null,null,C.u)},
hU(d){if(this.B===C.aE)return this.xX(d)
return this.acG(d)},
aJP(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a8z(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dC(d){var w=this.a8y(d,B.hz())
switch(this.B.a){case 0:return d.c2(new B.F(w.a,w.b))
case 1:return d.c2(new B.F(w.b,w.a))}},
a8y(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.aE?d.b:d.d,m=o.ae$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.fW(u,null)
break
case 1:q=B.fW(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a8z(p)
t=Math.max(t,o.aJP(p))
m=r.aG$}return new A.bd2(n<1/0?n:s,t)},
cv(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a8y(o,B.mp()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c2(new B.F(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c2(new B.F(l,m))
p.gC(0)
p.gC(0)
break}w=p.ae$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a8z(r==null?B.W(B.a_("RenderBox was not laid out: "+B.H(w).j(0)+"#"+B.c6(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
e8(d,e){return this.xY(d,e)},
aN(d,e){if(this.gC(0).gY(0))return
this.a3.sbi(0,null)
this.uT(d,e)},
l(){this.a3.sbi(0,null)
this.anL()}}
A.bd2.prototype={}
A.aw6.prototype={}
A.jL.prototype={
gbC(){return[this.a,this.b]}}
A.nJ.prototype={}
A.ag8.prototype={}
A.ag9.prototype={
aP(d){var w,v,u
this.fm(d)
w=this.ae$
for(v=x.L;w!=null;){w.aP(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.ff(0)
w=this.ae$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.aga.prototype={}
A.SO.prototype={
l(){var w,v,u
for(w=this.VK$,v=w.length,u=0;u<v;++u)w[u].l()
this.ix()}}
A.Al.prototype={
gov(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghH(){switch(this.c.a){case 0:return C.eu
case 1:return C.fz
case 2:return C.e3
case 3:return C.fy}},
gaZA(){var w=this.d,v=A.bu_(w.d),u=A.bBl(w.a)
switch(this.c.a){case 2:case 0:return new B.aj(0,v.b,0,v.d).ac(0,new B.aj(0,u.b,0,u.d))
case 1:case 3:return new B.aj(v.a,0,v.c,0).ac(0,new B.aj(u.a,0,u.c,0))}},
gahq(){var w=this.d,v=A.bBl(w.a),u=A.bu_(w.d)
switch(this.c.a){case 2:case 0:return u.gcZ(0)+u.gd0(0)+(v.gcZ(0)+v.gd0(0))
case 1:case 3:return u.ger()+v.ger()}},
aVI(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.gov().c.d
if(o==null)o=$.lr().Om(d,f-e)
w=p.c
v=w!==D.mp
if((!v||w===D.dE)&&p.d instanceof A.nK){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bth(u,d)
w=new B.iM(t,B.ac(t).i("iM<1>"))
s=w.giD(w).f_(0,new A.aXS(u),x.W).fX(0)}else{r=$.bsr()
w=!v||w===D.dE
v=p.d
q=r.aUY(w?v.w:v.z,o,f,e)
v=B.od(q,new A.aXT(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.P(v,B.k(v).i("t.E"))}w=B.ac(s).i("aa<1,nJ>")
w=B.P(new B.aa(s,new A.aXU(p,e,f,o,g,d),w),w.i("aw.E"))
return w},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.gov()
w=j.gov()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.b2(i,i,C.t,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mp
u=!v
t=!u||w===D.dE
s=j.e
r=t?s.a:s.b
t=j.ghH()
s=!u||w===D.dE?C.I:C.aE
q=B.b([],x.p)
if(w===D.AL||v)j.gov()
if(j.gov().c.a){v=!u||w===D.dE?r:j.gov().c.c
p=!u||w===D.dE?j.gov().c.c:r
o=j.gaZA()
n=!u||w===D.dE?C.aE:C.I
j.gahq()
m=j.gahq()
l=!u||w===D.dE
k=j.d
l=l?k.f:k.x
u=!u||w===D.dE?k.r:k.y
q.push(B.b2(i,A.bUq(new A.aw6(),n,j.aVI(r-m,l,u,w)),C.t,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.AM||w===D.dE)j.gov()
return new B.f3(t,i,i,B.bPX(q,C.m,s,i,C.f,C.R,0,i,i,C.bT),i)}}
A.a05.prototype={
gbC(){return[this.a,this.b]}}
A.a4i.prototype={
gbC(){return[this.a,this.b]}}
A.My.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a4k.prototype={
gaaZ(d){return!1},
gbC(){return[!1,!1,!1,!1]}}
A.awB.prototype={}
A.aCT.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.agu.prototype={}
A.ajy.prototype={}
A.ajz.prototype={}
A.ajG.prototype={}
A.Kq.prototype={
i6(d,e,f){}}
A.vs.prototype={}
A.hi.prototype={
gdJ(){return null},
gaf3(){var w,v=this
B.bx()
B.bx()
B.bx()
w=v instanceof A.Mx
if(w)return!0
return!(v instanceof A.Mu)&&!(v instanceof A.Mt)&&!(v instanceof A.Mv)&&!(v instanceof A.Ms)&&!w&&!(v instanceof A.Mw)}}
A.a4o.prototype={
gdJ(){return this.a.b}}
A.a4p.prototype={
gdJ(){return this.a.b}}
A.a4q.prototype={
gdJ(){return this.a.b}}
A.Mt.prototype={}
A.Mu.prototype={}
A.a4t.prototype={
gdJ(){return this.a.b}}
A.Mw.prototype={}
A.Mx.prototype={
gdJ(){return this.a.b}}
A.a4n.prototype={
gdJ(){return this.a.b}}
A.a4m.prototype={
gdJ(){return this.a.b}}
A.Ms.prototype={
gdJ(){return this.a.b}}
A.a4r.prototype={
gdJ(){return this.a.gdJ()}}
A.a4s.prototype={
gdJ(){return this.a.gdJ()}}
A.Mv.prototype={
gdJ(){return this.a.gdJ()}}
A.FI.prototype={
Yw(d){this.V=d.b
this.U=d.c
this.a3=d.d},
aev(){var w=this,v=null,u=w.ah=B.buT(v,v)
u.ay=new A.aT4(w)
u.ch=new A.aT5(w)
u.CW=new A.aT6(w)
u.cy=new A.aT7(w)
u.cx=new A.aT8(w)
u=w.aE=B.Gx(v,-1,v)
u.B=new A.aT9(w)
u.a4=new A.aTa(w)
u.V=new A.aTb(w)
u=w.bA=B.a6j(v,w.a3,v)
u.p3=new A.aTc(w)
u.p4=new A.aTd(w)
u.RG=new A.aTe(w)},
cv(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.F(w.b,w.d)},
dC(d){return new B.F(d.b,d.d)},
kJ(d){return!0},
mU(d,e){var w,v=this
if(v.V==null)return
if(x.eo.b(d)){w=v.bA
w===$&&B.a()
w.rB(d)
w=v.aE
w===$&&B.a()
w.rB(d)
w=v.ah
w===$&&B.a()
w.rB(d)}else if(x.gJ.b(d))v.l6(new A.a4s(d))},
gMK(d){return new A.aTf(this)},
gMM(d){return new A.aTg(this)},
l6(d){var w,v,u=this
if(u.V==null)return
w=d.gdJ()
v=w!=null?u.Zu(w):null
u.V.$2(d,v)
u.a4=C.bn},
gKD(d){return this.a4},
gFi(){var w=this.an
w===$&&B.a()
return w},
aP(d){this.fm(d)
this.an=!0},
aF(d){this.an=!1
this.ff(0)},
$ijk:1}
A.NQ.prototype={
X(){return new A.V8(B.b([],x.r),B.A(x.S,x.I),new A.aIS(B.A(x.y,x.dj)),null,null)}}
A.V8.prototype={
u(d){var w,v=this,u=v.a3Z(),t=v.CW
t.toString
t=v.aay(t.av(0,v.ghF().gp(0)))
w=v.aay(u)
v.a.toString
return new A.Kh(new A.a6b(t,w,null),u,null)},
aay(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.ac(w).i("aa<1,ea>")
w=B.P(new B.aa(w,new A.bd7(this,d),v),v.i("aw.E"))
return d.aPL(w,this.cy)},
a3Z(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Uj(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQ_(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aPp(new A.Em(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gayh(),t.c,t.d))}return r},
ayi(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gaf3())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bd5(v))
return}v.J(new A.bd6(v,e))},
nP(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a3Z(),new A.bd8(w)))}}
A.pC.prototype={
WR(d,e,f){var w,v,u,t,s,r,q=B.ab(d.f,e.f,f),p=B.ab(d.r,e.r,f),o=B.ab(d.w,e.w,f),n=B.ab(d.x,e.x,f),m=B.ab(d.y,e.y,f),l=B.ab(d.z,e.z,f),k=B.Z(d.as,e.as,f),j=e.a
j=A.a4j(B.a0h(d.a.b,j.b,f),j.a)
w=A.bBj(d.at,e.at,f)
v=A.bBm(d.c,e.c,f)
u=A.bBo(d.d,e.d,f)
t=A.bDh(d.e,e.e,f)
s=A.km(d.ch,e.ch,f,A.c2a(),x.cz)
s.toString
r=A.km(d.CW,e.CW,f,A.c29(),x.J)
r.toString
u=A.buw(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
UU(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.buw(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQ_(d,e,f,g){return this.UU(null,null,d,e,f,g,null)},
aPp(d){var w=null
return this.UU(w,d,w,w,w,w,w)},
aPL(d,e){var w=null
return this.UU(d,w,w,w,w,w,e)},
gbC(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ea.prototype={
aqi(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qd(n.a,new A.aIR())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.I)(v),++p){o=v[p]
if(o.k(0,D.fI))continue
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
acl(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aIQ(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aPw(d){return this.acl(d,null)},
aPy(d){return this.acl(null,d)},
gbC(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.NR.prototype={
gbC(){return[this.a]}}
A.a_Z.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mw.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.Kl.prototype={
gbC(){return[!1,this.b,this.c,!0]}}
A.yd.prototype={
gbC(){return[this.a,this.b,this.c]}}
A.aIC.prototype={
L(){return"LabelDirection."+this.b}}
A.a4l.prototype={
gbC(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.Em.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a6c.prototype={
gbC(){return[4,C.hF,16,D.xn,0,120,A.c2c(),!1,!1,!1,0,C.F,A.c2b()]}}
A.mU.prototype={
gbC(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.q4.prototype={}
A.rj.prototype={
gbC(){return[this.a,this.b,C.cS,C.w,null]}}
A.tg.prototype={
gbC(){return[this.a,this.b]}}
A.G9.prototype={
gbC(){return[this.a]}}
A.NS.prototype={}
A.yY.prototype={
hg(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.WR(v,w,d)}}
A.agh.prototype={}
A.agi.prototype={}
A.agw.prototype={}
A.ajA.prototype={}
A.ajD.prototype={}
A.ale.prototype={}
A.alf.prototype={}
A.alg.prototype={}
A.ali.prototype={}
A.alj.prototype={}
A.alk.prototype={}
A.all.prototype={}
A.apD.prototype={}
A.are.prototype={}
A.aIS.prototype={
Uj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.xU
u=new A.z1(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.yZ(s,r,q,t,!0)}w=null
try{w=C.b.qd(d,new A.aIT())}catch(p){return D.xU}v=null
try{v=C.b.qd(w.a,new A.aIU())}catch(p){return D.xU}o=v.a
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
if(f<m)m=f}e=new A.yZ(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.yZ.prototype={
gbC(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.alh.prototype={}
A.aIV.prototype={
i6(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaaZ(0)){v=a3.b
u=v.a
v=v.b
$.am()
a3.a.jn(new B.G(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aOp(new B.G(0,0,u,v))}d.a_A(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t)d.aRb(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aR7(a3,q,a4)
d.aRc(a3,q,a4)
d.al7(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.Y(o)
if(n.gq(o)!==p.length)throw B.e(B.dz("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vb(q,i,j,k))}}d.aRj(a3,s,a4)
if(w.gaaZ(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.P(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aRh(a2,a3,v,f,new A.G9(g),a4)}},
aR7(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.btZ(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.I)(n),++v){u=n[v]
t=p.Z3(o,e,u,f)
s=p.aiC(o,e,t,u,f)
r=p.Z5(o,e,t,u,f,!0)
q=p.aiB(o,e,t,u,f)
p.aRa(d,s,p.Z2(o,e,t,u,f,!0),f,e)
p.aR4(d,q,r,f,e)
p.aR8(d,t,e)
p.aR6(d,t,e,f)}},
aRb(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.btZ(a6.a),a9=A.btZ(a7.a)
if(a8.length!==a9.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bV.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.ac(m).i("cG<1>")
k=B.P(new B.cG(m,l),l.i("aw.E"))
j=a3.Z3(a4,a6,n,b3)
i=a3.Z4(a4,a7.aPy(k),k,b3,j)
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
m=a3.fb(h,a4,b3)
l=a3.dE(g,a4,b3)
d=a3.fb(f,a4,b3)
a0=a3.dE(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.B.gp(0)
a1.seS(u.mK(0,new B.G(m,l,d,a0)))}else{a1.r=(q?C.G:v).gp(0)
a1.seS(null)}$.am()
a2=new B.mz(C.dp,C.bf,C.dX,C.eo,C.dL).eo()
m=B.dN(new B.G(0,0,s,r))
l=$.bV.b
if(l===$.bV)B.W(B.v8(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.ha(i,a3.r)
w.restore()}},
aRc(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Z9(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fI)&&t.$2(q,e)){p=this.fb(q.a,w,f)
o=this.dE(q.b,w,f)
n.$4(q,p/v*100,e,r).ad2(s,q,new B.r(p,o))}}},
aRj(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h1(b3,new A.aIY())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.I)(b3),++o){n=b3[o]
m=n.a
l=b1.Z9(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fb(j.a,w,b4)
g=b1.dE(j.b,w,b4)
f=i.b
e=f.a
d=B.cm()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.W(B.ri(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.ln(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.ln(q.$2(m,k))))
f=b1.dE(a1,w,b4)
a3=new B.r(h,f)
a4=b1.dE(a2,w,b4)
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
b0=B.kX(a3,a5)
if(a6!=null){f.r=C.B.gp(0)
f.seS(a6.mK(0,b0))}else{if(a4==null)a4=C.G
f.r=a4.gp(a4)
f.seS(null)}a4=a9.c
f.c=a4
if(a4===0){f.seS(null)
a4=B.c0(f.r)
f.r=B.aD(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gp(0)}b2.Dm(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.W(B.ri(d.a))
f.ad2(t,j,new B.r(h,g))}}},
Z4(d,e,f,g,h){var w=this.aiD(d,e,f,g,h)
return w},
Z3(d,e,f,g){return this.Z4(d,e,f,g,null)},
aiD(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cF($.am().r):a5,f=J.Y(a3),e=f.gq(a3),d=i.fb(f.h(a3,0).a,a1,a4),a0=i.dE(f.h(a3,0).b,a1,a4)
if(h){g.aB(new B.ff(d,a0))
if(e===1)g.aB(new B.cw(d,a0))}else g.aB(new B.cw(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.u,t=1;t<e;t=o,u=j){s=i.fb(f.h(a3,t).a,a1,a4)
r=i.dE(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fb(f.h(a3,q).a,a1,a4)
q=i.dE(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fb(f.h(a3,n?o:t).a,a1,a4)
l=i.dE(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.Lk(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.ih(r)}return g},
Z5(d,e,f,g,h,i){var w,v,u,t,s=this
$.am()
w=B.buu(f)
v=J.Y(g)
u=s.fb(v.h(g,v.gq(g)-1).a,d,h)
t=d.b
w.aB(new B.cw(u,t))
u=s.fb(v.h(g,0).a,d,h)
w.aB(new B.cw(u,t))
w.aB(new B.cw(s.fb(v.h(g,0).a,d,h),s.dE(v.h(g,0).b,d,h)))
w.aB(new B.pb())
return w},
aiC(d,e,f,g,h){return this.Z5(d,e,f,g,h,!1)},
Z2(d,e,f,g,h,i){var w,v,u,t=this
$.am()
w=B.buu(f)
v=J.Y(g)
u=t.fb(v.h(g,v.gq(g)-1).a,d,h)
w.aB(new B.cw(u,0))
u=t.fb(v.h(g,0).a,d,h)
w.aB(new B.cw(u,0))
w.aB(new B.cw(t.fb(v.h(g,0).a,d,h),t.dE(v.h(g,0).b,d,h)))
w.aB(new B.pb())
return w},
aiB(d,e,f,g,h){return this.Z2(d,e,f,g,h,!1)},
aRa(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fb(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dE(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fb(t.a,w,g)
s=r.r
s===$&&B.a()
A.buS(s,q.b,q.c,new B.G(v,u,t,w.b))
d.a.ha(e,r.r)},
aR4(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fb(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fb(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dE(t.b,w,g)
s=r.r
s===$&&B.a()
A.buS(s,q.b,q.c,new B.G(v,0,u,t))
d.a.ha(e,r.r)},
aR8(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.NK(e,!1,B.b([],x.C)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.k1:C.dX
u.e=C.eo
u.r=v.gp(0)
u.seS(null)
u.c=f.x
u.r=v.gp(0)
$.lr()
u.z=new B.z6(C.aG,w.c*0.57735+0.5)
d.a.ha(B.buv(A.azv(e,f.cy),w.b),this.f)},
aR6(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.k1:C.dX
q.e=C.eo
q=f.b
q===$&&B.a()
q=s.fb(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dE(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fb(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dE(u.b,r,g)
t=s.f
A.buS(t,f.r,f.w,new B.G(q,w,v,u))
t.z=null
t.c=f.x
A.bSp(t)
d.a.ha(A.azv(e,f.cy),s.f)},
aRh(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bHq(b1),b3=J.Y(b2)
if(b3.gq(b2)!==b1.length)throw B.e(B.dz("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lr().ZA(b4,u.b)
s=u.a
r=w.k(0,C.iK)?new B.kg(1):w
q=new B.td(new B.hO(s,a8,a8,C.bn,a8,a8,a8,a8,a8,a8,t),C.cS,C.w,r,a8,a8,a8,a8,C.bu,a8)
q.afm(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.I)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbS(w)}b3=a7.fb(b7.a,a9,b9)
t=a7.dE(b7.b,a9,b9)
l=p+C.hF.ger()
k=o+(w-1)*4+(C.hF.gcZ(0)+C.hF.gd0(0))
j=t-k-16
i=a7.ZB(b3,l,D.xn,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.Fw(new B.G(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bHp(f)
b1.r=t.gp(t)
t=b3-i
w-=j
b1=$.lr().K7(new B.F(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lr().K7(new B.F(t,w),0)
if(!C.F.k(0,C.F)){s=a7.Q
s===$&&B.a()
s.r=C.B.gp(0)
s.c=0}b5.Vw(0,new A.aIW(a7,b5,g),a0,d,new B.F(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.I)(b0),++n){q=b0[n]
a5=A.bV0(q.r,q.w)
A:{if(D.DH===a5){a6=a3
break A}if(D.DI===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Vw(0,new A.aIX(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.F(t,w))
a6=q.b.a.c
a4=a4+a6.gbS(a6)+4}},
Z9(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fb(v[0].a,e,f)
return this.fb(v[v.length-1].a,e,f)-w},
Wb(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.aj3(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h1(t,new A.aIZ())
return t.length===0?null:t},
aj3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
if(q.k(0,D.fI))continue
p=u.$2(e,new B.r(this.fb(q.a,d,h),this.dE(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hv(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga1(o)
s.toString
return new A.q4(s,f,g,C.b.iq(w,v),v.a,v.b)}else return null}}
A.vb.prototype={}
A.a6b.prototype={
bn(d){var w,v=this.e,u=B.bw(d,null,x.w).w.gcO(),t=new A.aIV()
t.a0M()
$.am()
w=B.aX()
w.b=C.b_
t.f=w
w=B.aX()
w.b=C.bf
t.r=w
w=B.aX()
w.b=C.b_
t.w=w
w=B.aX()
w.b=C.bf
w.r=C.G.gp(0)
w.a=D.a_G
t.x=w
w=B.aX()
w.b=C.b_
w.r=C.B.gp(0)
t.y=w
w=B.aX()
w.b=C.bf
w.r=C.n.gp(0)
t.z=w
w=B.aX()
w.b=C.b_
w.r=C.G.gp(0)
w.c=1
t.Q=w
t=new A.aah(this.d,v,u,t,d,C.bn,new B.bq(),B.aJ(x.v))
t.bk()
t.Yw(v.cx)
t.aev()
return t},
by(d,e){e.sik(0,this.d)
e.sYh(this.e)
e.scO(B.bw(d,null,x.w).w.gcO())
e.B=d
e.bf()}}
A.aah.prototype={
sik(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bf()},
sYh(d){var w=this
if(w.i0.k(0,d))return
w.i0=d
w.a0k(d.cx)
w.bf()},
scO(d){if(this.cV.k(0,d))return
this.cV=d
this.bf()},
aN(d,e){var w,v,u=this,t=d.gdF(0),s=t.a
J.aY(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fV.i6(w,new A.a0u(t,v),new A.vs(u.aC,u.i0,u.cV,x.o))
s.restore()},
Zu(d){var w=this,v=w.gC(0)
return new A.NS(w.fV.Wb(d,v,new A.vs(w.aC,w.i0,w.cV,x.o)))}}
A.MX.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a0u.prototype={
aOp(d){this.a.a.clipRect(B.dN(d),$.oV()[1],!0)
return null},
ada(d,e){d.aN(this.a,e)},
Vw(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.aY(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lr()
s.Yf(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dm(d,e,f,g){var w=B.cF($.am().r)
w.aB(new B.ff(d.a,d.b))
w.aB(new B.cw(e.a,e.b))
this.a.ha(A.azv(w,g),f)}}
A.z1.prototype={
gbC(){return[this.a]}}
A.als.prototype={}
A.a0E.prototype={}
A.b0j.prototype={
K7(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aWi(d,e){var w,v,u,t,s
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
aWj(d,e){var w,v
if(d==null)return D.a_R
w=d.b
v=e/2
return d.aPB(w>v?v:w)},
Om(d,e){var w,v=Math.max(C.d.cD(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.aZk(w)},
aZk(d){if(d<1)return this.aIn(d)
return this.a7D(d)},
aIn(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a7D(d*q)/q},
a7D(d){var w,v=C.e.j(C.d.a2(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.b0(d)/10:d
if(w>=7.6)return 10*C.d.a2(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a2(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a2(Math.pow(10,v))
else return C.d.a2(Math.pow(10,v))},
aiS(d){if(d>=1)return 1
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
ZA(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.iQ
w=e.a?u.w.c3(e):e
v=B.bS(d,C.vn)
v=v==null?null:v.ay
return v===!0?w.c3(C.m7):w},
aiK(d,e,f,g){var w=C.d.ag(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
A.PL.prototype={
a3B(d){switch(d.a){case 6:return!0
case 1:case 2:case 0:case 4:case 3:case 5:return!1}},
st3(d){var w=this,v=w.ad
if(v===d)return
w.ad=d
if(w.a3B(v)||w.a3B(d))w.a7()
else{w.cQ=w.D=null
w.bf()}},
shH(d){var w=this
if(w.aH.k(0,d))return
w.aH=d
w.G=w.cQ=w.D=null
w.bf()},
scC(d){var w=this
if(w.dr==d)return
w.dr=d
w.G=w.cQ=w.D=null
w.bf()},
dC(d){var w,v=this.D$
if(v!=null){w=v.ar(C.ah,C.iD,v.gdi())
switch(this.ad.a){case 6:return d.c2(new B.at(0,d.b,0,d.d).xI(w))
case 1:case 2:case 0:case 4:case 3:case 5:return d.xI(w)}}else return new B.F(B.M(0,d.a,d.b),B.M(0,d.c,d.d))},
e6(d,e){var w=this.D$
return w==null?null:w.fM(C.iD,e)},
cv(){var w,v,u=this,t=u.D$
if(t!=null){t.dI(C.iD,!0)
switch(u.ad.a){case 6:t=x.k
w=t.a(B.K.prototype.ga6.call(u))
v=new B.at(0,w.b,0,w.d).xI(u.D$.gC(0))
u.fy=t.a(B.K.prototype.ga6.call(u)).c2(v)
break
case 1:case 2:case 0:case 4:case 3:case 5:u.fy=x.k.a(B.K.prototype.ga6.call(u)).xI(u.D$.gC(0))
break}u.cQ=u.D=null}else{t=x.k.a(B.K.prototype.ga6.call(u))
u.fy=new B.F(B.M(0,t.a,t.b),B.M(0,t.c,t.d))}},
Tw(){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.cQ!=null)return
w=m.D$
if(w==null){m.D=!1
w=new B.c4(new Float64Array(16))
w.h_()
m.cQ=w}else{v=m.G
if(v==null)v=m.G=m.aH
u=w.gC(0)
t=B.bwP(m.ad,u,m.gC(0))
w=t.b
s=t.a
r=u.a
q=u.b
p=v.yB(s,new B.G(0,0,0+r,0+q))
o=m.gC(0)
n=v.yB(w,new B.G(0,0,0+o.a,0+o.b))
o=p.a
m.D=p.c-o<r||p.d-p.b<q
q=B.pG(n.a,n.b,0)
q.qO(w.a/s.a,w.b/s.b,1,1)
q.fY(-o,-p.b,0,1)
m.cQ=q}},
a6y(d,e){var w,v,u,t,s=this,r=s.cQ
r.toString
w=B.zg(r)
if(w==null){r=s.cx
r===$&&B.a()
v=s.cQ
v.toString
u=B.i4.prototype.gi5.call(s)
t=s.ch.a
return d.za(r,e,v,u,t instanceof B.q5?t:null)}else s.ks(d,e.ac(0,w))
return null},
aN(d,e){var w,v,u,t,s=this
if(s.D$==null||s.gC(0).gY(0)||s.D$.gC(0).gY(0))return
s.Tw()
w=s.D
w.toString
if(w&&s.eW!==C.t){w=s.cx
w===$&&B.a()
v=s.gC(0)
u=s.ch
t=u.a
t=t instanceof B.un?t:null
u.sbi(0,d.o_(w,e,new B.G(0,0,0+v.a,0+v.b),s.gaG0(),s.eW,t))}else s.ch.sbi(0,s.a6y(d,e))},
e8(d,e){var w,v=this
if(!v.gC(0).gY(0)){w=v.D$
w=w==null?null:w.gC(0).gY(0)
w=w===!0}else w=!0
if(w)return!1
v.Tw()
return d.JR(new A.aTp(v),e,v.cQ)},
tq(d){return!this.gC(0).gY(0)&&!d.gC(0).gY(0)},
eU(d,e){var w
if(!(!this.gC(0).gY(0)&&!d.gC(0).gY(0)))e.OP()
else{this.Tw()
w=this.cQ
w.toString
e.fW(0,w)}}}
A.a4d.prototype={
bn(d){var w=new A.PL(this.e,this.f,B.e8(d),C.t,null,new B.bq(),B.aJ(x.v))
w.bk()
w.sc8(null)
return w},
by(d,e){e.st3(this.e)
e.shH(this.f)
e.scC(B.e8(d))
if(C.t!==e.eW){e.eW=C.t
e.bf()
e.cu()}}}
var z=a.updateTypes(["L(q6)","D(ew)","~(w,fA)","L(ea,w)","Q<~>()","L(L,q6)","bM(L,tf)","pp(L)","w(q4,q4)","HW(o0)","HC(B,bF)","IW(o1)","vg(@)","w9(@)","ea(L)","Ck(@)","ag(L,tf)","uC(dH<uC>)","DJ(dH<aDx>)","L(vg)","L(w9)","wr(B,bF)","AU(z)","~()","q6(@)","~(hi,Kn?)","xn(@)","L(ig)","D(fA)","~(w,ig)","~(@)","jL(nJ)","c(nJ)","jL(bD<w,L>)","jL(L)","nJ(jL)","~(hi,NS?)","ea(ea)","lD(Gk<lD>)","yY(@)","Q<o1>(ch<o1>)","tg(w)","uD(ew,L,ea,w)","rj(mU)","D(ea)","w(vb,vb)","L(fA)","Q<o0>(ch<o0>)","w(w,w,L)","yb(eY<B?>)","fA(fA,fA,L)","ig(ig,ig,L)","mv(mv,mv,L)","CC?(fA,w,ig,w)","E(fA)","c(L,tf)","ew(ew,ew,L)","D(L)","mP(mP,mP,L)","ng(ng,ng,L)","kI(kI,kI,L)","l7(l7,l7,L)","f(kI)","f(l7)","ea(ea,ea,L)","mw(mw,mw,L)","uD(ew,L,ea,w{size:L?})","D(ew,ea)","L(r,r)","u<tg>(ea,u<w>)","xP(z)","u<rj>(u<mU>)","E(mU)","q5?(rz,r)"])
A.aDt.prototype={
$1(d){var w=B.dx(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.q6(J.ak(v==null?"":v),A.oR(w.h(0,"revenue_net")),A.oR(w.h(0,"expense_net")),A.oR(w.h(0,"result_net")))},
$S:z+24}
A.aDu.prototype={
$1(d){var w,v,u,t=B.dx(x.f.a(d),x.N,x.z),s=B.an(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.ak(r==null?"unbekannt":r)
w=B.an(t.h(0,"code"))
v=A.oR(t.h(0,"gross"))
u=B.bn(t.h(0,"purchases_count"))
u=u==null?null:C.d.a2(u)
if(u==null)u=0
return new A.vg(s,r,w,v,u,A.oR(t.h(0,"avg_basket")))},
$S:z+12}
A.aDv.prototype={
$1(d){var w,v=B.dx(x.f.a(d),x.N,x.z),u=B.an(v.h(0,"product_id")),t=v.h(0,"name")
t=J.ak(t==null?"unbekannt":t)
w=B.bn(v.h(0,"quantity"))
w=w==null?null:C.d.a2(w)
if(w==null)w=0
return new A.w9(u,t,w,A.oR(v.h(0,"gross")))},
$S:z+13}
A.aDM.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.Y(d)
v=w.h(d,"code")
v=J.ak(v==null?"":v)
u=w.h(d,"name")
u=J.ak(u==null?"":u)
t=w.h(d,"direction")
return new A.Ck(v,u,J.ak(t==null?"expense":t),A.tU(w.h(d,"net")),A.tU(w.h(d,"tax")),A.tU(w.h(d,"gross")))},
$S:z+15}
A.bqg.prototype={
$1(d){return new A.uC(d.aq($.c_(),x.A))},
$S:z+17}
A.bqh.prototype={
$1(d){return new A.DJ(d.aq($.bM_(),x.D))},
$S:z+18}
A.bs5.prototype={
$1(d){return E.aDw()},
$S:z+38}
A.bqi.prototype={
$1(d){var w=d.aq($.x7(),x.P)
return d.aq($.aup(),x.a).FJ(w)},
$S:z+40}
A.bqf.prototype={
$1(d){var w=d.aq($.x7(),x.P)
return d.aq($.aup(),x.a).FF(w)},
$S:z+47}
A.bqe.prototype={
$1(d){return this.ait(d)},
ait(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.l(d.aq($.c_(),x.A).hA("finance_balance_kpis",t),$async$$1)
case 3:s=r.dx(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:214}
A.aDs.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aK(0,$.aup(),x.a).py(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDr.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.l(u.b.r.aK(0,$.aup(),x.a).Le(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDK.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bsQ()
if(s.e==null)B.W(B.a_(y.b))
s.gcq().ck(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aDC.prototype={
$0(){return this.a.J8(this.b,this.c)},
$S:0}
A.aDD.prototype={
$0(){return this.a.B6(this.b,this.c)},
$S:0}
A.aDE.prototype={
$0(){var w=x.z
return B.ba(this.a,!1).e3(B.eb(new A.aDB(),null,w),w)},
$S:0}
A.aDB.prototype={
$1(d){return F.CM},
$S:z+70}
A.aDF.prototype={
$0(){return B.o6(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aDG.prototype={
$0(){var w=this
return w.a.B7(w.b,w.c,w.d)},
$S:0}
A.aDJ.prototype={
$0(){return D.aqS},
$S:92}
A.aDI.prototype={
$2(d,e){return new A.HC(B.i(d),null)},
$S:z+10}
A.aDH.prototype={
$1(d){return new A.IW(d,null)},
$S:z+11}
A.aDA.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.j("Die Finanzauswertung f\xfcr "+u.ao(v.a)+" \u2013 "+u.ao(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.lu(B.b([B.dJ(C.cT,w,w,new A.aDy(u),w,w),B.dQ(F.v_,new A.aDz(u),B.dF(C.l,C.h,w,w,w,w,w))],x.p),w,v,F.v0)},
$S:56}
A.aDy.prototype={
$0(){B.ba(this.a,!1).df(!1)
return null},
$S:0}
A.aDz.prototype={
$0(){B.ba(this.a,!1).df(!0)
return null},
$S:0}
A.bfl.prototype={
$0(){var w=this.a.aK(0,$.x7().ghN(),x.V),v=E.aDw()
w.wn(0,v)
return v},
$S:0}
A.bfm.prototype={
$0(){var w=this.a.aK(0,$.x7().ghN(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lD(B.bK(B.aV(v),1,1,0,0,0,0),v)
w.wn(0,u)
return u},
$S:0}
A.bfn.prototype={
$0(){return this.a.Iw(this.b,this.c)},
$S:0}
A.bfk.prototype={
$2(d,e){return new B.ox(B.U(d).aOX(B.U(d).ax.aPQ(C.h,C.l)),e,null)},
$S:991}
A.bll.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dD(),s=A.NC(!1,C.l2,"Umsatz 7 %",t.ao(u.a),w),r=A.NC(!1,C.l2,"Umsatz 19 %",t.ao(u.b),w),q=A.NC(!0,D.a9U,"Umsatz netto",t.ao(u.c),w),p=A.NC(!1,D.a9T,"Aufwand",t.ao(u.d),w),o=u.e,n=t.ao(o)
return B.a5_(1.7,B.b([s,r,q,p,A.NC(!0,C.nA,"Ergebnis",n,o<0?C.ac:C.ak),A.NC(!1,C.ff,"USt-Saldo",t.ao(u.f-u.r),w)],x.p),v,12,12,C.jK,!0)},
$S:111}
A.aIB.prototype={
$0(){return D.aqP},
$S:92}
A.aIA.prototype={
$2(d,e){var w=null
return B.bv(C.ac,B.j("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.y(C.h,13,C.k),w,w,w),C.fF,w,C.C,w,3)},
$S:264}
A.aIz.prototype={
$1(d){return new A.HW(d,null)},
$S:z+9}
A.bcU.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dD(),i=j.ao(k.c),h=l.w,g=l.d,f=B.ac(g).i("aa<1,L>"),e=f.i("aw.E"),d=B.P(new B.aa(g,new A.bcJ(),f),e)
i=A.jB(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ao(r.b)
w=B.P(new B.aa(g,new A.bcK(),f),e)
d=A.jB(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ao(k.e)
w=B.P(new B.aa(g,new A.bcL(),f),e)
k=A.jB(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ak(h.b,1)
v=B.P(new B.aa(g,new A.bcM(),f),e)
w=A.jB(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ak(h.a,1)
u=B.P(new B.aa(g,new A.bcN(),f),e)
v=A.jB(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ak(r.c,1)
t=B.P(new B.aa(g,new A.bcO(),f),e)
u=A.jB(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ak(h.c,1)
s=B.P(new B.aa(g,new A.bcP(),f),e)
t=A.jB(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ao(h.d)
s=B.P(new B.aa(g,new A.bcQ(),f),e)
h=A.jB(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ao(l.r.d)
m=B.P(new B.aa(g,new A.bcR(m),f),e)
m=A.jB(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ao(l)
l=B.P(new B.aa(g,new A.bcS(l),f),e)
l=A.jB(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ak(j,1)
j=B.P(new B.aa(g,new A.bcT(j),f),e)
return B.a5_(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jB(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jK,!0)},
$S:111}
A.bcJ.prototype={
$1(d){return d.b},
$S:z+0}
A.bcK.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bcL.prototype={
$1(d){return d.d},
$S:z+0}
A.bcM.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcN.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bcO.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bcP.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bcQ.prototype={
$1(d){return d.d},
$S:z+0}
A.bcR.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bcS.prototype={
$1(d){return this.a},
$S:z+0}
A.bcT.prototype={
$1(d){return this.a},
$S:z+0}
A.bcV.prototype={
$0(){return A.bwM(this.b,1.45,new A.Tc(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bcW.prototype={
$0(){return A.bwM(this.b,1.6,new A.To(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bpo.prototype={
$1(d){var w=this,v=null,u=B.aP(16),t=x.p,s=B.b([B.al(B.b([B.aE(B.j(w.a,v,v,v,B.bQ(C.h,18,C.o),v,v,v),1),B.fp(v,v,D.ac_,v,v,new A.bpn(d),v,v,v,"Schlie\xdfen",v)],t),C.m,C.f,C.i,0,v,v)],t)
C.b.M(s,B.b([B.j(w.b,v,v,v,B.y(C.r,12,C.aA),v,v,v),C.J],t))
s.push(C.v)
s.push(B.c5(new B.mt(w.c,w.d,v),v,17976931348623157e292))
return B.a3z(v,C.n,new B.ae(C.aa,B.ad(s,C.A,C.f,C.R),v),v,v,v,C.fH,C.uK,v,new B.d6(u,C.F),v)},
$S:992}
A.bpn.prototype={
$0(){return B.ba(this.a,!1).f0()},
$S:0}
A.bcX.prototype={
$0(){var w=this.a,v=B.b_(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bwM(this.b,2.4,new A.Xv(w.w,w.y,w.z,null),C.b.cl(u," \xb7 "),v)
return null},
$S:0}
A.bkA.prototype={
$2(d,e){return d<e?d:e},
$S:45}
A.bkB.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bkC.prototype={
$1(d){return A.aIQ(null,1.4,null,C.ac,0.35,D.agh,D.Dy,null,!1,!1,!1,!1,D.EZ,!1,10,D.Ym,!0,C.li,B.b([new A.ew(0,d),new A.ew(this.a,d)],x.U))},
$S:z+14}
A.b3U.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b3W.prototype={
$2(d,e){var w=null
return B.j(this.a.aJE(d),w,w,w,B.y(C.r,10,C.P),w,w,w)},
$S:z+16}
A.b3X.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=this.a.length)return C.uS
return new B.ae(C.kN,B.j(C.c.cU(this.a[v].a,5),w,w,w,B.y(C.r,9,C.P),w,w,w),w)},
$S:z+6}
A.b3V.prototype={
$1(d){return D.a8r},
$S:z+7}
A.b4H.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4I.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b4J.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b4K.prototype={
$2(d,e){var w=null,v=C.d.a2(d)
if(v<0||v>=3)return C.uS
return new B.ae(C.kN,B.j(this.a[v],w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bdq.prototype={
$1(d){return d.d},
$S:z+19}
A.bdr.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.bmC.prototype={
$1(d){return d.d},
$S:z+20}
A.bmD.prototype={
$2(d,e){return d>e?d:e},
$S:45}
A.b2o.prototype={
$0(){return D.aqX},
$S:92}
A.b2n.prototype={
$2(d,e){return new A.wr("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b2m.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bv(m,B.ad(B.b([B.j("Noch keine Bilanzdaten erfasst.",m,m,m,B.y(C.h,14,C.P),m,m,m),C.J,B.j("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.y(C.r,12.5,C.k),m,m,m),C.v,B.l8(C.cr,B.b([B.hp(C.Ew,D.aEl,new A.b2g(w,v),m),B.hp(D.abF,D.aDg,new A.b2h(w,v),m)],u),C.dB,8,8)],u),C.A,C.f,C.i),C.ad,m,C.C,m,3)}w=new A.b2p(d)
t=C.b.fv(n.a.e.d,0,new A.b2i())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.ji(new A.b2j(new A.b2q(w),r,w,s))
v=J.Y(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.J,B.al(B.b([B.aE(B.j("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.y(C.r,11,C.k),m,m,m),1),B.mc(D.acO,D.aDB,new A.b2k(q,p),m),B.mc(D.act,D.aDm,new A.b2l(q,p,d),m)],o),C.m,C.f,C.i,0,m,m)],o),C.ae,C.f,C.i)},
$S:250}
A.b2g.prototype={
$0(){return A.atJ(this.a,this.b,null)},
$S:0}
A.b2h.prototype={
$0(){return A.atG(this.a,this.b)},
$S:0}
A.b2p.prototype={
$1(d){var w=B.bn(J.a3(this.a,d))
return w==null?null:w},
$S:993}
A.b2q.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ak(v,1)
w=B.b_(w,".",",")+" %"}return w},
$S:34}
A.b2i.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b2j.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jB(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.hR,o.$1("liquidity1_pct")),m=A.jB(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.hR,o.$1("liquidity2_pct")),l=A.jB(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.hR,o.$1("liquidity3_pct"))
o=A.jB(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.hR,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ak(w,1)
w=B.b_(w,".",",")+" %"}w=A.jB(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.hR,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dD()
v=u.ao(v)
return B.a5_(p,B.b([n,m,l,o,w,A.jB(s,s,!1,"Bilanzsumme",!1,"EK "+u.ao(t.d),s,s,s,C.hR,v)],x.p),q,12,12,C.jK,!0)},
$S:111}
A.b2k.prototype={
$0(){return A.atG(this.a,this.b)},
$S:0}
A.b2l.prototype={
$0(){return A.atJ(this.a,this.b,this.c)},
$S:0}
A.bpm.prototype={
$1(d){return new A.AU(this.a,new A.bpl(this.b),this.c,null)},
$S:z+22}
A.bpl.prototype={
$0(){var w=this.a,v=$.bsP()
if(w.e==null)B.W(B.a_(y.b))
w.gcq().ck(v)},
$S:0}
A.b2a.prototype={
$0(){},
$S:0}
A.b2b.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b2c.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b2e.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.l(B.u_(u.b,B.bK(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b2d(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b2d.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b2f.prototype={
$0(){return B.ba(this.a,!1).f0()},
$S:0}
A.b2r.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b2s.prototype={
$1(d){return new A.xn(x.B.a(d),this.a.a.r)},
$S:z+26}
A.awm.prototype={
$1(d){return d.e},
$S:z+27}
A.awn.prototype={
$2(d,e){return d+e},
$S:45}
A.awp.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.awr.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdq(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.aws.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eN(t,r)
s=s.x
s===$&&B.a()
w.eN(t,s)
u.ada(v.d,v.e)},
$S:0}
A.aw5.prototype={
$1(d){return 0},
$S:994}
A.aw4.prototype={
$2(d,e){return B.fi(C.bV,this.a.akP(e),C.q,C.bt,null)},
$S:995}
A.aXQ.prototype={
$1(d){return d.a},
$S:z+31}
A.aXR.prototype={
$1(d){return d.b},
$S:z+32}
A.aXS.prototype={
$1(d){return new A.jL(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.aXT.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mp||v===D.dE))t=1-t
return new A.jL(d,t*w.d)},
$S:z+34}
A.aXU.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.gov(),p=d.a
r.gov()
r=$.lr()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ak(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ak(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ak(v/1000,1)
t="K"}else{u=C.d.ak(v,r.aiS(Math.abs(s.b-s.c)))
t=""}if(C.c.hJ(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nJ(d,q.c.b.$2(p,new A.tf(u+t,s.e)))},
$S:z+35}
A.aT4.prototype={
$1(d){this.a.l6(new A.a4o(d))},
$S:201}
A.aT5.prototype={
$1(d){this.a.l6(new A.a4p(d))},
$S:41}
A.aT6.prototype={
$1(d){this.a.l6(new A.a4q(d))},
$S:28}
A.aT7.prototype={
$0(){this.a.l6(D.a1r)},
$S:0}
A.aT8.prototype={
$1(d){this.a.l6(new A.Mu())},
$S:44}
A.aT9.prototype={
$1(d){this.a.l6(new A.a4t(d))},
$S:42}
A.aTa.prototype={
$0(){this.a.l6(D.a1s)},
$S:0}
A.aTb.prototype={
$1(d){this.a.l6(new A.Mx(d))},
$S:107}
A.aTc.prototype={
$1(d){this.a.l6(new A.a4n(d))},
$S:202}
A.aTd.prototype={
$1(d){this.a.l6(new A.a4m(d))},
$S:203}
A.aTe.prototype={
$1(d){return this.a.l6(new A.Ms(d))},
$S:192}
A.aTf.prototype={
$1(d){return this.a.l6(new A.a4r(d))},
$S:59}
A.aTg.prototype={
$1(d){return this.a.l6(new A.Mv(d))},
$S:55}
A.bd7.prototype={
$1(d){var w=this.a.db.h(0,C.b.iq(this.b.ch,d))
return d.aPw(w==null?B.b([],x.t):w)},
$S:z+37}
A.bd5.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bd6.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.P(q,x.dw)
C.b.h1(w,new A.bd4())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.G9(w))},
$S:0}
A.bd4.prototype={
$2(d,e){return C.d.cw(e.b,d.b)},
$S:z+8}
A.bd8.prototype={
$1(d){return new A.yY(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aIR.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.bq4.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga1(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bBn(t?A.bwA(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tg(w,new A.yd(!0,A.bxl(),new A.bq3(v)))},
$S:z+41}
A.bq3.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bPV(A.bwA(d,e,f),w,A.bYE(d,e,f))},
$S:z+42}
A.bq1.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga1(t.a)
u=t==null?u.r:t
w=B.iW(v,v,u==null?D.di:u,v,v,v,v,v,v,v,v,14,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rj(C.d.j(d.b),w)},
$S:z+43}
A.aIT.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aIU.prototype={
$1(d){return!d.k(0,D.fI)},
$S:z+1}
A.aIY.prototype={
$2(d,e){return C.d.cw(e.c.b,d.c.b)},
$S:z+45}
A.aIW.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eN(v,t)
u=u.Q
u===$&&B.a()
w.eN(v,u)},
$S:0}
A.aIX.prototype={
$0(){this.a.ada(this.b,this.c)},
$S:0}
A.aIZ.prototype={
$2(d,e){return C.d.cw(d.w,e.w)},
$S:z+8}
A.awf.prototype={
$1(d){return d.gdq(0)},
$S:z+46}
A.awg.prototype={
$2(d,e){return d+e},
$S:45}
A.awj.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iM(v,B.ac(v).i("iM<1>")).au(0,new A.awk(w,this.a/(u+1),this.c))},
$S:0}
A.awk.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdq(0)/2
this.c[d]=v
w.a=v+e.gdq(0)/2},
$S:z+2}
A.awh.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdq(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdq(0)/2},
$S:z+2}
A.awi.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdq(0)/2
this.c[d]=u
u+=e.gdq(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aFZ.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:996}
A.azw.prototype={
$1(d){return d},
$S:997}
A.aTp.prototype={
$2(d,e){return this.a.Au(d,e)},
$S:23};(function aliases(){var w=A.Kg.prototype
w.a_A=w.i6
w.al7=w.aRd
w.al8=w.ad3
w=A.SO.prototype
w.anL=w.l
w=A.Kq.prototype
w.a_B=w.i6
w=A.FI.prototype
w.a0k=w.Yw})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c1h","bPS",49)
var q
v(q=A.SQ.prototype,"gaDF","aDG",23)
v(q,"gaCJ","HM",4)
v(q,"gaDp","HX",4)
u(A.SR.prototype,"garx","ary",25)
t(A,"c05",3,null,["$3"],["bNc"],50,0)
t(A,"c06",3,null,["$3"],["bNd"],51,0)
t(A,"c07",3,null,["$3"],["bNe"],52,0)
t(A,"c09",4,null,["$4"],["c0V"],53,0)
w(A,"c08","c0U",54)
s(A,"bwQ","c0W",55)
t(A,"c00",3,null,["$3"],["bPW"],56,0)
w(A,"Zy","c3j",57)
w(A,"atL","c0Z",7)
t(A,"c02",3,null,["$3"],["bQH"],58,0)
t(A,"c04",3,null,["$3"],["bVU"],59,0)
t(A,"c01",3,null,["$3"],["bQG"],60,0)
t(A,"c03",3,null,["$3"],["bVT"],61,0)
w(A,"caq","bQF",62)
w(A,"car","bVS",63)
r(A.Xk.prototype,"ga3X","ax_",30)
u(A.V8.prototype,"gayh","ayi",36)
t(A,"c2a",3,null,["$3"],["bRa"],64,0)
t(A,"c29",3,null,["$3"],["bNg"],65,0)
w(A,"c2d","c3k",1)
t(A,"bHN",4,null,["$5$size","$4"],["bGe",function(d,e,f,g){return A.bGe(d,e,f,g,null)}],66,0)
s(A,"bxl","c3i",67)
s(A,"bHO","c_O",68)
s(A,"bHR","c11",69)
s(A,"bHQ","c0Y",3)
s(A,"bHP","c0X",3)
w(A,"c2c","bHq",71)
w(A,"c2b","bHp",72)
u(A.PL.prototype,"gaG0","a6y",73)
t(A,"ZD",3,null,["$3"],["c28"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.V,[A.a5Y,A.afr,A.akC,A.It,A.IW,A.afp,A.HC,A.HW,A.ajW,A.al7,A.TZ,A.Xv,A.Tc,A.To,A.alB,A.ahZ,A.BP,A.arb,A.wr,A.Kh,A.Al])
u(B.B,[A.uC,A.DJ,A.bd,A.agu,A.agk,A.agm,A.agn,A.agc,A.ajG,A.agq,A.ago,A.awB,A.arf,A.awo,A.agl,A.Kq,A.a50,A.tf,A.apF,A.apE,A.agb,A.ajF,A.ew,A.ajC,A.ajE,A.anT,A.akt,A.arT,A.ajD,A.ajl,A.ajB,A.aw3,A.bd2,A.aw6,A.ag8,A.nJ,A.ajy,A.ajz,A.vs,A.hi,A.alf,A.ali,A.agh,A.agw,A.agi,A.ajA,A.all,A.alj,A.are,A.apD,A.aIS,A.alh,A.vb,A.a0u,A.als,A.a0E,A.b0j])
u(B.uA,[A.q6,A.vg,A.w9,A.ayW,A.aA1,A.o0,A.Ck,A.o1])
u(B.nO,[A.aDt,A.aDu,A.aDv,A.aDM,A.bqg,A.bqh,A.bs5,A.bqi,A.bqf,A.bqe,A.aDB,A.aDH,A.aDA,A.aIz,A.bcJ,A.bcK,A.bcL,A.bcM,A.bcN,A.bcO,A.bcP,A.bcQ,A.bcR,A.bcS,A.bcT,A.bpo,A.bkC,A.b3V,A.b4H,A.b4I,A.bdq,A.bmC,A.b2m,A.b2p,A.b2q,A.bpm,A.b2s,A.awm,A.awp,A.aw5,A.aXQ,A.aXR,A.aXS,A.aXT,A.aXU,A.aT4,A.aT5,A.aT6,A.aT8,A.aT9,A.aTb,A.aTc,A.aTd,A.aTe,A.aTf,A.aTg,A.bd7,A.bd8,A.aIR,A.bq4,A.bq3,A.bq1,A.aIT,A.aIU,A.awf,A.azw])
t(A.yb,B.fw)
u(B.xC,[A.aDs,A.aDr,A.aDK,A.aDC,A.aDD,A.aDE,A.aDF,A.aDG,A.aDJ,A.aDy,A.aDz,A.bfl,A.bfm,A.bfn,A.aIB,A.bcV,A.bcW,A.bpn,A.bcX,A.b2o,A.b2g,A.b2h,A.b2k,A.b2l,A.bpl,A.b2a,A.b2b,A.b2c,A.b2e,A.b2d,A.b2f,A.b2r,A.aws,A.aT7,A.aTa,A.bd5,A.bd6,A.aIW,A.aIX,A.awj])
u(B.xK,[A.yc,A.amN,A.a5Z,A.agg])
u(B.xD,[A.aDI,A.bfk,A.bll,A.aIA,A.bcU,A.bkA,A.bkB,A.b3U,A.b3W,A.b3X,A.b4J,A.b4K,A.bdr,A.bmD,A.b2n,A.b2i,A.b2j,A.awn,A.awr,A.aw4,A.bd4,A.aIY,A.aIZ,A.awg,A.awk,A.awh,A.awi,A.aFZ,A.aTp])
u(B.O,[A.AU,A.QS])
u(B.a1,[A.SQ,A.Xk])
u(B.N9,[A.Km,A.NQ])
u(B.xf,[A.SR,A.V8])
t(A.a05,A.agu)
t(A.ag7,A.a05)
t(A.a_Q,A.ag7)
u(A.a_Q,[A.agj,A.alg])
t(A.nK,A.agj)
u(B.HB,[A.awd,A.acU,A.CB,A.aCT,A.aIC,A.MX])
t(A.fA,A.agk)
t(A.ig,A.agm)
t(A.mv,A.agn)
t(A.a_X,A.agc)
t(A.My,A.ajG)
u(A.My,[A.agp,A.alk])
t(A.a01,A.agp)
t(A.a02,A.agq)
t(A.CC,A.ago)
u(A.awB,[A.Kn,A.NS])
t(A.acW,A.arf)
t(A.agr,A.acW)
t(A.a03,A.agr)
u(B.bc,[A.xn,A.yY])
t(A.uf,A.agl)
t(A.Kg,A.Kq)
u(A.Kg,[A.awq,A.aIV])
u(B.NM,[A.a0_,A.a6b])
u(B.J,[A.FI,A.ag9])
u(A.FI,[A.aa4,A.aah])
t(A.pY,A.apF)
t(A.abt,A.apE)
t(A.p3,A.agb)
t(A.uE,A.ajF)
t(A.ye,A.ajC)
t(A.pp,A.ajE)
t(A.Pr,A.anT)
t(A.mP,A.akt)
t(A.ng,A.arT)
u(A.pp,[A.aks,A.arS])
t(A.kI,A.aks)
t(A.l7,A.arS)
t(A.a4l,A.ajD)
u(A.a4l,[A.akr,A.arR])
t(A.a5b,A.akr)
t(A.adi,A.arR)
t(A.Mh,A.ajl)
t(A.uD,A.ajB)
t(A.Mr,A.uD)
t(A.abu,B.h0)
t(A.aga,A.ag9)
t(A.SO,A.aga)
t(A.a_R,A.SO)
t(A.jL,A.ag8)
t(A.a4i,A.ajy)
t(A.a4k,A.ajz)
u(A.hi,[A.a4o,A.a4p,A.a4q,A.Mt,A.Mu,A.a4t,A.Mw,A.Mx,A.a4n,A.a4m,A.Ms,A.a4r,A.a4s,A.Mv])
t(A.pC,A.alg)
t(A.ea,A.alf)
t(A.NR,A.ali)
t(A.a_Z,A.agh)
t(A.mw,A.agw)
t(A.Kl,A.agi)
t(A.yd,A.ajA)
t(A.Em,A.alk)
t(A.a6c,A.all)
t(A.ale,A.ew)
t(A.mU,A.ale)
t(A.q4,A.mU)
t(A.rj,A.alj)
t(A.tg,A.are)
t(A.G9,A.apD)
t(A.yZ,A.alh)
t(A.z1,A.als)
t(A.PL,B.PY)
t(A.a4d,B.bM)
w(A.agc,A.bd)
w(A.agj,A.bd)
w(A.agk,A.bd)
w(A.agm,A.bd)
w(A.agn,A.bd)
w(A.ago,A.bd)
w(A.agp,A.bd)
w(A.agq,A.bd)
w(A.agr,A.bd)
w(A.agl,A.bd)
w(A.ag7,A.bd)
w(A.agb,A.bd)
w(A.ajl,A.bd)
w(A.ajB,A.bd)
w(A.ajC,A.bd)
w(A.ajE,A.bd)
w(A.ajF,A.bd)
w(A.aks,A.bd)
w(A.akr,A.bd)
w(A.akt,A.bd)
w(A.anT,A.bd)
w(A.apE,A.bd)
w(A.apF,A.bd)
w(A.arf,A.bd)
w(A.arS,A.bd)
w(A.arR,A.bd)
w(A.arT,A.bd)
w(A.ag8,A.bd)
v(A.ag9,B.aB)
w(A.aga,B.e6)
v(A.SO,B.a3i)
w(A.agu,A.bd)
w(A.ajy,A.bd)
w(A.ajz,A.bd)
w(A.ajG,A.bd)
w(A.agh,A.bd)
w(A.agi,A.bd)
w(A.agw,A.bd)
w(A.ajA,A.bd)
w(A.ajD,A.bd)
w(A.ale,A.bd)
w(A.alf,A.bd)
w(A.alg,A.bd)
w(A.ali,A.bd)
w(A.alj,A.bd)
w(A.alk,A.bd)
w(A.all,A.bd)
w(A.apD,A.bd)
w(A.are,A.bd)
w(A.alh,A.bd)
w(A.als,A.bd)})()
B.bmP(b.typeUniverse,JSON.parse('{"a5Y":{"V":[],"c":[]},"DJ":{"aDx":[]},"yb":{"fw":["be<~>"],"fw.T":"be<~>"},"IW":{"V":[],"c":[]},"HC":{"V":[],"c":[]},"yc":{"bj":[],"O":[],"c":[]},"afr":{"V":[],"c":[]},"akC":{"V":[],"c":[]},"amN":{"bj":[],"O":[],"c":[]},"It":{"V":[],"c":[]},"afp":{"V":[],"c":[]},"HW":{"V":[],"c":[]},"wr":{"V":[],"c":[]},"AU":{"O":[],"c":[]},"a5Z":{"bj":[],"O":[],"c":[]},"ajW":{"V":[],"c":[]},"al7":{"V":[],"c":[]},"TZ":{"V":[],"c":[]},"Xv":{"V":[],"c":[]},"Tc":{"V":[],"c":[]},"To":{"V":[],"c":[]},"alB":{"V":[],"c":[]},"ahZ":{"V":[],"c":[]},"BP":{"V":[],"c":[]},"arb":{"V":[],"c":[]},"agg":{"bj":[],"O":[],"c":[]},"SQ":{"a1":["AU"]},"Km":{"O":[],"c":[]},"SR":{"a1":["Km"]},"nK":{"bd":[]},"fA":{"bd":[]},"ig":{"bd":[]},"mv":{"bd":[]},"CC":{"bd":[]},"xn":{"bc":["nK"],"b3":["nK"],"b3.T":"nK","bc.T":"nK"},"a_X":{"bd":[]},"a01":{"bd":[]},"a02":{"bd":[]},"a03":{"bd":[]},"uf":{"bd":[]},"a0_":{"aT":[],"c":[]},"aa4":{"J":[],"K":[],"jk":[],"aS":[]},"pp":{"bd":[]},"mP":{"bd":[]},"ng":{"bd":[]},"kI":{"bd":[]},"l7":{"bd":[]},"uD":{"bd":[]},"a_Q":{"bd":[]},"pY":{"bd":[]},"abt":{"bd":[]},"p3":{"bd":[]},"uE":{"bd":[]},"ye":{"bd":[]},"acW":{"bd":[]},"Pr":{"bd":[]},"a5b":{"bd":[]},"adi":{"bd":[]},"Mh":{"bd":[]},"Mr":{"bd":[]},"Kh":{"V":[],"c":[]},"QS":{"O":[],"c":[]},"Xk":{"a1":["QS"]},"jL":{"bd":[]},"abu":{"h0":[],"aT":[],"c":[]},"a_R":{"e6":["J","hj"],"J":[],"aB":["J","hj"],"K":[],"aS":[],"aB.1":"hj","e6.1":"hj","aB.0":"J"},"Al":{"V":[],"c":[]},"a05":{"bd":[]},"a4i":{"bd":[]},"My":{"bd":[]},"a4k":{"bd":[]},"a4o":{"hi":[]},"a4p":{"hi":[]},"a4q":{"hi":[]},"Mt":{"hi":[]},"Mu":{"hi":[]},"a4t":{"hi":[]},"Mw":{"hi":[]},"Mx":{"hi":[]},"a4n":{"hi":[]},"a4m":{"hi":[]},"Ms":{"hi":[]},"a4r":{"hi":[]},"a4s":{"hi":[]},"Mv":{"hi":[]},"FI":{"J":[],"K":[],"jk":[],"aS":[]},"NQ":{"O":[],"c":[]},"V8":{"a1":["NQ"]},"pC":{"bd":[]},"ea":{"bd":[]},"mw":{"bd":[]},"mU":{"ew":[],"bd":[]},"q4":{"mU":[],"ew":[],"bd":[]},"rj":{"bd":[]},"tg":{"bd":[]},"G9":{"bd":[]},"yY":{"bc":["pC"],"b3":["pC"],"b3.T":"pC","bc.T":"pC"},"NR":{"bd":[]},"a_Z":{"bd":[]},"Kl":{"bd":[]},"yd":{"bd":[]},"a4l":{"bd":[]},"Em":{"bd":[]},"a6c":{"bd":[]},"yZ":{"bd":[]},"a6b":{"aT":[],"c":[]},"aah":{"J":[],"K":[],"jk":[],"aS":[]},"z1":{"bd":[]},"PL":{"J":[],"bu":["J"],"K":[],"aS":[]},"a4d":{"bM":[],"aT":[],"c":[]}}'))
B.bFJ(b.typeUniverse,JSON.parse('{"Kg":1,"My":1,"Kq":1,"FI":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("Ck"),e:w("be<o0>"),aN:w("be<o1>"),fM:w("be<a0<f,@>?>"),b:w("be<~>"),W:w("jL"),B:w("nK"),dB:w("fA"),T:w("uf"),fj:w("ig"),G:w("mv"),J:w("mw"),k:w("at"),cX:w("a0E<L>"),dO:w("un"),R:w("ai<f,@>"),v:w("hD"),bz:w("ly<b9>"),f0:w("nU"),E:w("bd"),F:w("yb"),X:w("o0"),P:w("lD"),D:w("uC"),a:w("aDx"),d:w("o1"),cw:w("ew"),L:w("hj"),m:w("dt<w,E>"),cm:w("kI"),dv:w("mP"),g:w("C<nJ>"),O:w("C<fA>"),Y:w("C<ig>"),C:w("C<btL>"),U:w("C<ew>"),K:w("C<a50>"),u:w("C<ea>"),bC:w("C<vb>"),aA:w("C<u<ew>>"),r:w("C<G9>"),s:w("C<f>"),eg:w("C<td>"),df:w("C<q4>"),p:w("C<c>"),n:w("C<L>"),t:w("C<w>"),eF:w("bf<a1<O>>"),Z:w("mU"),cz:w("ea"),hf:w("pC"),dj:w("yZ"),fT:w("rj"),c_:w("ij<oK<be<~>>>"),x:w("z1<fA>"),y:w("z1<ea>"),I:w("u<w>"),ef:w("vg"),c:w("a0<f,@>"),f:w("a0<@,@>"),gj:w("aa<L,L>"),w:w("jY"),aU:w("B"),Q:w("vs<nK>"),o:w("vs<pC>"),eo:w("pO"),gJ:w("pP"),V:w("n8<lD>"),N:w("f"),A:w("na"),bO:w("bI"),er:w("td"),j:w("w9"),dw:w("q4"),bY:w("tg"),cZ:w("q6"),gc:w("ke"),es:w("l7"),bN:w("ng"),l:w("c"),q:w("wL"),g4:w("ia<L>"),cJ:w("D"),i:w("L"),z:w("@"),S:w("w"),bn:w("xn?"),f3:w("yY?"),M:w("u<@>?"),h:w("a0<f,@>?"),fF:w("a0<@,@>?"),cK:w("B?"),aD:w("ke?"),h6:w("w?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.AE=new B.nB(C.l,B.au("nB<E>"))
D.AL=new A.CB(0,"left")
D.mp=new A.CB(1,"top")
D.AM=new A.CB(2,"right")
D.dE=new A.CB(3,"bottom")
D.auL=new A.pY(!1,A.bwQ(),22,null)
D.kh=new A.p3(16,null,D.auL,!0)
D.a8s=new A.pp(C.B,null,2,null)
D.vR=new A.Kl(!1,D.a8s,A.c2d(),!0)
D.a_x=new A.awd(3,"spaceEvenly")
D.a_G=new B.xr(6,"dstIn")
D.XF=new B.aW(3,3)
D.AQ=new B.d4(D.XF,D.XF,C.a1,C.a1)
D.a_R=new B.bl(C.B,0,C.T,-1)
D.Bp=new A.a4k()
D.a1r=new A.Mt()
D.a1s=new A.Mw()
D.aM5=new A.abt()
D.akT=w([],B.au("C<kI>"))
D.akU=w([],B.au("C<l7>"))
D.Du=new A.Mh(D.akT,D.akU,!0)
D.a8b=new B.e3("Zeitraum",!1,null)
D.a8f=new B.e3("Konten (SKR 03)",!1,null)
D.xn=new A.aCT(0,"center")
D.aMh=new A.yd(!0,A.bxl(),A.bHN())
D.Dy=new A.yd(!1,A.bxl(),A.bHN())
D.Dz=new A.ye(!1,!0,null,A.atL(),A.Zy(),!0,null,A.atL(),A.Zy())
D.aMi=new A.ye(!0,!0,null,A.atL(),A.Zy(),!0,null,A.atL(),A.Zy())
D.a3I=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.j)
D.a3u=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.j)
D.a3R=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.j)
D.a3M=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.j)
D.a3f=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.j)
D.a3e=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.a4b=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.j)
D.a3B=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.j)
D.a4e=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.j)
D.a48=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.j)
D.aoU=new B.dt([50,D.a3I,100,D.a3u,200,D.a3R,300,D.a3M,400,D.a3f,500,D.a3e,600,D.a4b,700,D.a3B,800,D.a4e,900,D.a48],x.m)
D.di=new B.rr(D.aoU,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.j)
D.ahc=w([8,4],x.t)
D.a8q=new A.pp(D.di,null,0.4,D.ahc)
D.a8r=new A.pp(C.ai,null,0.5,null)
D.fI=new A.ew(0/0,0/0)
D.auN=new A.pY(!0,A.bwQ(),44,null)
D.mq=new A.p3(16,null,D.auN,!0)
D.auM=new A.pY(!0,A.bwQ(),30,null)
D.mr=new A.p3(16,null,D.auM,!0)
D.a8t=new A.uE(!1,D.mq,D.mr,D.mq,D.mr)
D.aMj=new A.uE(!0,D.mq,D.mr,D.mq,D.mr)
D.DH=new A.MX(0,"left")
D.a95=new A.MX(1,"center")
D.DI=new A.MX(2,"right")
D.a9a=new B.a8(57495,"MaterialIcons",null,!1)
D.xD=new B.a8(58927,"MaterialIcons",null,!1)
D.a9T=new B.a8(59005,"MaterialIcons",null,!0)
D.a9U=new B.a8(59007,"MaterialIcons",null,!0)
D.a9V=new B.a8(59011,"MaterialIcons",null,!1)
D.aaP=new B.a8(62589,"MaterialIcons",null,!1)
D.aa7=new B.a8(61349,"MaterialIcons",null,!1)
D.abC=new B.aF(D.aa7,20,C.h,null,null)
D.aae=new B.a8(61487,"MaterialIcons",null,!1)
D.abE=new B.aF(D.aae,18,null,null,null)
D.abF=new B.aF(D.xD,18,null,null,null)
D.ac_=new B.aF(C.j5,null,C.h,null,null)
D.ac0=new B.aF(C.nB,null,C.r,null,null)
D.act=new B.aF(C.nF,16,null,null,null)
D.acz=new B.aF(C.xJ,16,null,null,null)
D.a9m=new B.a8(57912,"MaterialIcons",null,!1)
D.acB=new B.aF(D.a9m,null,C.ac,null,null)
D.aaN=new B.a8(62584,"MaterialIcons",null,!1)
D.acJ=new B.aF(D.aaN,16,null,null,null)
D.acO=new B.aF(D.xD,16,null,null,null)
D.aeP=new A.a5Z(null)
D.aMo=new A.aIC(0,"horizontal")
D.xU=new A.yZ(0,0,0,0,!1)
D.EZ=new A.NR(0.5)
D.Bv=new A.a6c()
D.aeT=new A.Em(D.Bv,A.bHR(),10,A.bHO(),!0,A.bHQ(),A.bHP(),!1,null,null,null)
D.aMq=new A.Em(D.Bv,A.bHR(),10,A.bHO(),!0,A.bHQ(),A.bHP(),!0,null,null,null)
D.agh=w([4,3],x.t)
D.asW=new B.aA("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.asM=new B.aA("receivables","Forderungen (kurzfristig)")
D.asz=new B.aA("inventory_value","Vorr\xe4te (Warenbestand)")
D.asx=new B.aA("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.asj=new B.aA("fixed_assets","Anlageverm\xf6gen")
D.asr=new B.aA("current_liabilities","Kurzfristige Verbindlichkeiten")
D.asT=new B.aA("long_term_liabilities","Langfristige Verbindlichkeiten")
D.asL=new B.aA("equity","Eigenkapital")
D.pk=w([D.asW,D.asM,D.asz,D.asx,D.asj,D.asr,D.asT,D.asL],B.au("C<+(f,f)>"))
D.aMt=w([],x.g)
D.akF=w([],x.O)
D.akG=w([],x.Y)
D.akH=w([],B.au("C<mv>"))
D.akI=w([],B.au("C<mw>"))
D.aMu=w([],x.U)
D.aMv=w([],x.u)
D.akJ=w([],x.r)
D.apv={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.Ti={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.yy=new B.ai(D.Ti,[0,0,0,0,0,0,0,C.c6],B.au("ai<f,B>"))
D.apt={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aoO=new B.ai(D.apt,[0,0,0,0],B.au("ai<f,w>"))
D.apK={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.ao9=new B.ai(D.apK,[0,0,0,0,null,null,null,null],B.au("ai<f,w?>"))
D.ao5=new B.ai(D.apv,[D.yy,D.yy,D.yy,C.c6,C.c6,C.c6,D.aoO,D.ao9],x.R)
D.aom=new B.ai(D.Ti,[0,0,0,0,0,0,0,C.cL],x.R)
D.apw={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aoo=new B.ai(D.apw,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("ai<f,L>"))
D.aoK=new B.ai(C.cO,[],B.au("ai<@,@>"))
D.aps={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aoP=new B.ai(D.aps,[0,0,0,0,0,0,0,C.cL],x.R)
D.apV={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.aoQ=new B.ai(D.apV,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("ai<f,f>"))
D.a4j=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.j)
D.a4r=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.j)
D.a3i=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.j)
D.a3E=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.j)
D.a3O=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.j)
D.a4F=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a35=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.j)
D.a3G=new B.E(1,0,0.592156862745098,0.6549019607843137,C.j)
D.a3Q=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.j)
D.a49=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.j)
D.aoV=new B.dt([50,D.a4j,100,D.a4r,200,D.a3i,300,D.a3E,400,D.a3O,500,D.a4F,600,D.a35,700,D.a3G,800,D.a3Q,900,D.a49],x.m)
D.T7=new B.rr(D.aoV,1,0,0.7372549019607844,0.8313725490196079,C.j)
D.a7x=new B.aj(32,32,32,32)
D.aqP=new B.ae(D.a7x,C.bo,null)
D.a7z=new B.aj(48,48,48,48)
D.aqS=new B.ae(D.a7z,C.bo,null)
D.aqX=new B.ae(C.aa,C.bo,null)
D.akV=w([],B.au("C<mP>"))
D.akW=w([],B.au("C<ng>"))
D.XG=new A.Pr(D.akV,D.akW)
D.atG=new B.ft("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.atH=new B.ft("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.atK=new B.ft("Automaten-Business","Umsatz je Automat",null,null)
D.atM=new B.ft("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.atO=new B.ft("Top","Meistverkaufte Produkte",null,null)
D.atR=new B.ft("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.atS=new B.ft("Kennzahlen","Rentabilit\xe4t",null,null)
D.Ym=new B.rZ(C.G,C.u,0)
D.aCb=new B.ag("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.awl=new B.dI(D.aCb,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aE9=new B.ag('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.awo=new B.dI(D.aE9,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aCp=new B.ag("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.awp=new B.dI(D.aCp,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aE3=new B.ag("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.awr=new B.dI(D.aE3,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aDx=new B.ag("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aws=new B.dI(D.aDx,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aDu=new B.ag("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.awN=new B.dI(D.aDu,null,null,null,null,null,null,null,null,null,null,null,null,C.H,!1,null,null,null,C.q,null)
D.aMF=new B.R(!0,C.B,null,null,null,null,14,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCl=new B.ag("Demo",null,null,null,null,null,null,null,null,null)
D.aCy=new B.ag("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aDg=new B.ag("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aDm=new B.ag("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aDB=new B.ag("sevDesk",null,null,null,null,null,null,null,null,null)
D.aEl=new B.ag("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.Zz=new A.acU(0,"auto")
D.aEX=new A.acU(1,"top")
D.aJg=new A.wr("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aJh=new A.wr("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"caQ","bM_",()=>B.jq(new A.bqg(),x.D))
w($,"caR","aup",()=>B.jq(new A.bqh(),x.a))
w($,"cbO","x7",()=>B.bvz(new A.bs5(),x.P))
w($,"caS","bsQ",()=>C.aJ.$1$1(new A.bqi(),x.d))
w($,"caP","bLZ",()=>C.aJ.$1$1(new A.bqf(),x.X))
w($,"caO","bsP",()=>C.aJ.$1$1(new A.bqe(),x.h))
w($,"caN","bsO",()=>B.aYI(A.c1h(),x.F,x.b))
w($,"c44","bsr",()=>new A.aw3())
v($,"c7j","lr",()=>new A.b0j())})()};
(a=>{a["rIhZLFXIla+9YSXl06lz8/1bs6g="]=a.current})($__dart_deferred_initializers__);