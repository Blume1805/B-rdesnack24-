((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Om(d,e,f,g,h){return new A.a7x(f,g,d,h,e,null)},
a7x:function a7x(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uX:function uX(d){this.a=d},
Ec:function Ec(d){this.a=d},
bUe(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.X(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.zi
w=x.f
v=x.N
u=x.z
t=A.aG3(B.cZ(w.a(e.h(a0,"current")),v,u))
s=A.aG3(B.cZ(w.a(e.h(a0,"prior_year")),v,u))
r=A.aG3(B.cZ(w.a(e.h(a0,"prior_period")),v,u))
q=x.M
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bZ
p=J.cT(p,new A.aFM(),x.cZ)
p=B.Q(p,p.$ti.i("av.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bZ
o=J.cT(o,new A.aFN(),x.ef)
o=B.Q(o,o.$ti.i("av.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bZ
q=J.cT(q,new A.aFO(),x.j)
q=B.Q(q,q.$ti.i("av.E"))
n=B.cZ(w.a(e.h(a0,"customer")),v,u)
m=B.b5(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.p6(n.h(0,"app_gross"))
k=B.b5(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.p6(n.h(0,"avg_basket"))
u=B.cZ(w.a(e.h(a0,"derived")),v,u)
v=A.p6(u.h(0,"gross_margin_pct"))
e=A.p6(u.h(0,"net_margin_pct"))
w=A.p6(u.h(0,"ebitda_margin_pct"))
j=A.p6(u.h(0,"cashflow_operating"))
i=A.bto(u.h(0,"revenue_growth_yoy_pct"))
h=A.bto(u.h(0,"revenue_growth_mom_pct"))
g=A.bto(u.h(0,"result_growth_yoy_pct"))
u=A.bto(u.h(0,"result_growth_mom_pct"))
f=B.b5(J.a2(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.od(t,s,r,p,o,q,new A.aBc(m,l,k,n),new A.aCk(v,e,w,j,i,h,g,u),f)},
p6(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.al(d))
return w==null?0:w},
bto(d){if(d==null)return null
if(typeof d=="number")return d
return B.iV(J.al(d))},
qk:function qk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vB:function vB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wy:function wy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBc:function aBc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCk:function aCk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
od:function od(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFM:function aFM(){},
aFN:function aFN(){},
aFO:function aFO(){},
aG3(d){var w=J.X(d),v=A.ug(w.h(d,"revenue_net_7")),u=A.ug(w.h(d,"revenue_net_19")),t=A.ug(w.h(d,"revenue_net")),s=A.ug(w.h(d,"expense_net")),r=A.ug(w.h(d,"result_net")),q=A.ug(w.h(d,"vat_collected")),p=A.ug(w.h(d,"vat_paid"))
w=x.M.a(w.h(d,"accounts"))
if(w==null)w=C.bZ
w=J.cT(w,new A.aG4(),x._)
w=B.Q(w,w.$ti.i("av.E"))
return new A.oe(v,u,t,s,r,q,p,w)},
ug(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.iV(J.al(d))
return w==null?0:w},
CM:function CM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
oe:function oe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aG4:function aG4(){},
bUd(d){return new A.yv(d,new B.is(x.c_),C.dN)},
buc:function buc(){},
bud:function bud(){},
bw_:function bw_(){},
bue:function bue(){},
bub:function bub(){},
bua:function bua(){},
yv:function yv(d,e,f){this.r=d
this.a=e
this.f=f},
aFL:function aFL(d,e,f){this.a=d
this.b=e
this.c=f},
aFK:function aFK(d,e,f){this.a=d
this.b=e
this.c=f},
bUf(){return new A.yw(null)},
amu(d,e,f,g,h){return new A.amt(e,h,g,f,d,null)},
yw:function yw(d){this.a=d},
aG2:function aG2(d){this.a=d},
aFV:function aFV(d,e,f){this.a=d
this.b=e
this.c=f},
aFW:function aFW(d,e,f){this.a=d
this.b=e
this.c=f},
aFX:function aFX(d){this.a=d},
aFU:function aFU(){},
aFY:function aFY(d){this.a=d},
aFZ:function aFZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG1:function aG1(){},
aG0:function aG0(){},
aG_:function aG_(){},
aFT:function aFT(d,e){this.a=d
this.b=e},
aFR:function aFR(d){this.a=d},
aFS:function aFS(d){this.a=d},
ah3:function ah3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amt:function amt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aoJ:function aoJ(d,e){this.e=d
this.a=e},
biG:function biG(d){this.a=d},
biH:function biH(d){this.a=d},
biI:function biI(d,e,f){this.a=d
this.b=e
this.c=f},
biF:function biF(){},
J4:function J4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ju:function Ju(d,e){this.c=d
this.a=e},
bpm:function bpm(d){this.a=d},
ah1:function ah1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ia:function Ia(d,e){this.c=d
this.a=e},
bAO(d,e,f,g,h){var w=null
return B.ja(w,w,!0,w,new A.btj(h,g,e,f),d,w,!0,!0,x.H)},
jN(d,e,f,g,h,i,j,k,l,m,n){return new A.an0(g,n,i,e,d,m,f,k,l,j,null)},
avV(d,e){return A.c3P(d,e)},
c3P(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avV=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.P(x.q).f
l.be(D.ayX)
t=4
o=e.aI(0,$.bW(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.k(o.fX("finance-balance-sync",B.A(n,n)),$async$avV)
case 7:r=g
q=B.cZ(x.f.a(r.a),x.N,n)
l.Mn()
if(J.d(J.a2(q,"configured"),!1)){l.be(D.az0)
w=1
break}if(J.d(J.a2(q,"ok"),!0)){o=$.bwQ()
if(e.e==null)B.S(B.a_(y.b))
e.gce().c7(o)
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Bilanz aus sevDesk \xfcbernommen ("+B.j(J.a2(q,"as_of"))+").",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}else{o=J.a2(q,"error")
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync-Fehler: "+B.j(o==null?"unbekannt":o),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a1(k)
l.Mn()
l.be(B.c2(null,null,null,null,null,C.r,null,B.i("Sync fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avV,v)},
avY(d,e,f){var w=0,v=B.q(x.H)
var $async$avY=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.k(B.ja(null,null,!0,null,new A.bth(f,e,e.aI(0,$.bW(),x.A)),d,null,!0,!0,x.H),$async$avY)
case 2:return B.o(null,v)}})
return B.p($async$avY,v)},
a7y:function a7y(d){this.a=d},
aKY:function aKY(){},
aKX:function aKX(){},
aKW:function aKW(){},
Iv:function Iv(d,e){this.c=d
this.a=e},
bfK:function bfK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfz:function bfz(){},
bfA:function bfA(){},
bfB:function bfB(){},
bfC:function bfC(){},
bfD:function bfD(){},
bfE:function bfE(){},
bfF:function bfF(){},
bfG:function bfG(){},
bfH:function bfH(d){this.a=d},
bfI:function bfI(d){this.a=d},
bfJ:function bfJ(d){this.a=d},
bfL:function bfL(d,e){this.a=d
this.b=e},
bfM:function bfM(d,e){this.a=d
this.b=e},
btj:function btj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bti:function bti(d){this.a=d},
alL:function alL(d){this.a=d},
an0:function an0(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bfN:function bfN(d,e){this.a=d
this.b=e},
V7:function V7(d,e,f){this.c=d
this.d=e
this.a=f},
YN:function YN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bor:function bor(){},
bos:function bos(){},
bot:function bot(d){this.a=d},
Uh:function Uh(d,e,f){this.c=d
this.d=e
this.a=f},
b6j:function b6j(){},
b6l:function b6l(d){this.a=d},
b6m:function b6m(d){this.a=d},
b6k:function b6k(){},
Uy:function Uy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7j:function b7j(){},
b7k:function b7k(){},
b7l:function b7l(){},
b7m:function b7m(d){this.a=d},
anv:function anv(d,e){this.c=d
this.a=e},
bgl:function bgl(){},
bgm:function bgm(){},
ajL:function ajL(d,e){this.c=d
this.a=e},
Ch:function Ch(d,e,f){this.c=d
this.d=e
this.a=f},
atl:function atl(d,e){this.c=d
this.a=e},
bqE:function bqE(){},
bqF:function bqF(){},
wP:function wP(d,e){this.c=d
this.a=e},
ahX:function ahX(d,e){this.e=d
this.a=e},
b4K:function b4K(){},
b4J:function b4J(){},
b4I:function b4I(d,e,f){this.a=d
this.b=e
this.c=f},
b4C:function b4C(d,e){this.a=d
this.b=e},
b4D:function b4D(d,e){this.a=d
this.b=e},
b4L:function b4L(d){this.a=d},
b4M:function b4M(d){this.a=d},
b4E:function b4E(){},
b4F:function b4F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4G:function b4G(d,e){this.a=d
this.b=e},
b4H:function b4H(d,e,f){this.a=d
this.b=e
this.c=f},
bth:function bth(d,e,f){this.a=d
this.b=e
this.c=f},
btg:function btg(d){this.a=d},
Bi:function Bi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TU:function TU(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4w:function b4w(){},
b4x:function b4x(d){this.a=d},
b4y:function b4y(d){this.a=d},
b4A:function b4A(d,e){this.a=d
this.b=e},
b4z:function b4z(d,e){this.a=d
this.b=e},
b4B:function b4B(d){this.a=d},
bh:function bh(){},
bEc(d){return new A.L7(d,C.al,C.bV,null,null)},
L7:function L7(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TV:function TV(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.ea$=f
_.c5$=g
_.c=_.a=null},
b4N:function b4N(d,e){this.a=d
this.b=e},
b4O:function b4O(d){this.a=d},
ayv(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.amG:f,p=a0==null?16:a0,o=d==null?D.a0k:d,n=g==null,m=n?A.bxh(r,r,r,r,r,r,r,r):g,l=a3==null?D.Yl:a3
n=n?A.bxh(r,r,r,r,r,r,r,r):g
w=j==null?D.E7:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.J:e
return new A.nW(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C3,s,w,i,n)},
ayC(d,e,f,g,h){var w=d==null?D.amH:d,v=e==null?2:e,u=g==null?C.lw:g
return new A.fG(h,f===!0,w,v,u)},
bRz(d,e,f){var w=d.a
w=C.d.aO(w+(e.a-w)*f)
return A.ayC(A.kC(d.c,e.c,f,A.c4z(),x.fj),B.ae(d.d,e.d,f),!1,A.kC(d.e,e.e,f,A.a05(),x.S),w)},
a1x(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.TL
else w=h
v=m==null
u=v?8:m
t=$.lE()
s=t.aX9(f,v?8:m)
t=t.aXa(g,v?8:m)
v=d==null?A.bEa(r,r,r,r,r):d
return new A.ip(q,l,w,j,u,s,e,t,v,k==null?D.amI:k)},
bRA(d,e,f){var w,v,u,t,s=B.a0(d.c,e.c,f),r=B.ae(d.e,e.e,f),q=B.mM(d.f,e.f,f),p=A.kC(d.r,e.r,f,A.a05(),x.S),o=B.bY(d.w,e.w,f),n=B.ae(d.a,e.a,f),m=B.ae(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ae(w.b,v.b,f)
t=B.ae(w.c,v.c,f)
v=B.a0(w.d,v.d,f)
return A.a1x(A.bEa(v,u,null,!1,t),p,q,o,s,n,null,A.kC(d.y,e.y,f,A.c4A(),x.G),m,r)},
bRB(d,e,f){var w,v,u=B.ae(d.a,e.a,f)
u.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
v.toString
return new A.mK(u,w,v,B.bY(d.d,e.d,f))},
bEa(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.du
else w=d
return new A.a1t(g===!0,v,u,w,f)},
bxh(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1z(4,C.fN,16,D.xT,0,120,A.c4C(),!1,!1,D.a_i,0,C.I,A.c4B())
else w=k
v=j==null?C.l2:j
return new A.a1y(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c5p(d,e,f,g){var w=null,v=B.j3(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.H,w,w,!0,w,w,w,w,w,w,w,w)
return new A.D3(C.d.j(f.b),v)},
c5o(d){return A.aAD(D.du,15)},
nW:function nW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayu:function ayu(d,e){this.a=d
this.b=e},
fG:function fG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayD:function ayD(){},
ayE:function ayE(){},
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
mK:function mK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1t:function a1t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1y:function a1y(d,e,f,g,h,i,j,k){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.a=h
_.b=i
_.c=j
_.d=k},
aeu:function aeu(d,e){this.a=d
this.b=e},
a1z:function a1z(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
L8:function L8(d){this.a=d},
a1A:function a1A(d,e,f,g,h,i,j,k){var _=this
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
ahT:function ahT(){},
ai_:function ai_(){},
ai0:function ai0(){},
ai2:function ai2(){},
ai3:function ai3(){},
ai4:function ai4(){},
ai5:function ai5(){},
ai6:function ai6(){},
ai7:function ai7(){},
ayF:function ayF(d){this.a=d},
ayG:function ayG(){},
uC:function uC(d,e,f){this.a=d
this.b=e
this.c=f},
ai1:function ai1(){},
ayH:function ayH(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayI:function ayI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayJ:function ayJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6z:function a6z(d){this.b=d},
a1w:function a1w(d,e,f){this.d=d
this.e=e
this.a=f},
abE:function abE(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.cX=f
_.fW=g
_.B=h
_.a4=_.U=_.W=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
c5q(d,e){var w=null
return new A.RR(e.w,B.i(e.r,w,w,w,w,w,w,w,w),w)},
ayo(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ae(w.c,v.c,f)
u.toString
return new A.pi(t,e.b,new A.q9(v.a,v.b,u,B.ae(w.d,v.d,f)),!0)},
bFz(d,e,f){var w=A.ayo(d.b,e.b,f),v=A.ayo(d.d,e.d,f),u=A.ayo(d.e,e.e,f)
return new A.uZ(e.a,w,A.ayo(d.c,e.c,f),v,u)},
bUh(d,e,f){var w,v
if(d.k(0,D.fP))return e
if(e.k(0,D.fP))return d
w=B.ae(d.a,e.a,f)
w.toString
v=B.ae(d.b,e.b,f)
v.toString
return new A.ez(w,v)},
bFx(d,e,f){return new A.yy(e.a,!0,B.ae(d.c,e.c,f),e.d,e.e,e.f,B.ae(d.r,e.r,f),e.w,e.x)},
c7K(d){return!0},
c5t(d){return D.a9X},
bFy(d,e,f,g){var w
if(d==null)w=f==null?C.C:null
else w=d
return new A.pD(w,f,g,e)},
bHu(d,e,f){var w,v=A.kC(d.a,e.a,f,A.c4v(),x.dv)
v.toString
w=A.kC(d.b,e.b,f,A.c4x(),x.bN)
w.toString
return new A.Qo(v,w)},
bV4(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rl(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.n4(t,w,v,u)},
c_l(d,e,f){var w,v,u,t=B.ae(d.a,e.a,f)
t.toString
w=B.ae(d.b,e.b,f)
w.toString
v=B.a0(d.c,e.c,f)
u=B.rl(d.d,e.d,f)
if(v==null)v=u==null?C.n:null
return new A.nr(t,w,v,u)},
bV3(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.bV1(B.bxa(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rl(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kC(d.d,e.d,f,A.a05(),x.S)
if(u==null)u=v==null?C.C:null
return new A.kV(r,e.f,e.r,t,e.x,u,v,w,s)},
c_k(d,e,f){var w,v,u,t,s,r=B.ae(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.px(w.b,v.b,f)
u.toString
t=B.cu(w.c,v.c,f)
t=A.c_i(B.bxa(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a0(d.a,e.a,f)
v=B.rl(d.b,e.b,f)
w=B.ae(d.c,e.c,f)
w.toString
s=A.kC(d.d,e.d,f,A.a05(),x.S)
if(u==null)u=v==null?C.C:null
return new A.lm(r,e.f,e.r,t,e.x,u,v,w,s)},
bV1(d,e,f,g,h,i){return new A.a6K(f,!1,g,i,d,e)},
bV2(d){return C.d.aj(d.e,1)},
c_i(d,e,f,g,h,i){return new A.aeU(f,!1,g,i,d,e)},
c_j(d){return C.d.aj(d.e,1)},
bFu(d,e,f){var w,v=A.kC(d.a,e.a,f,A.c4u(),x.cm)
v.toString
w=A.kC(d.b,e.b,f,A.c4w(),x.es)
w.toString
return new A.N0(v,w,!0)},
bUg(d,e,f){return new A.Nb(d,e==null?4:e,f)},
a1m:function a1m(){},
D2:function D2(d,e){this.a=d
this.b=e},
tz:function tz(d,e){this.r=d
this.w=e},
q9:function q9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad3:function ad3(){},
pi:function pi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uZ:function uZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ez:function ez(d,e){this.a=d
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
aew:function aew(){},
Qo:function Qo(d,e){this.a=d
this.b=e},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nr:function nr(d,e,f,g){var _=this
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
lm:function lm(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.a=i
_.b=j
_.c=k
_.d=l},
a6K:function a6K(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeU:function aeU(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N0:function N0(d,e,f){this.a=d
this.b=e
this.c=f},
uY:function uY(){},
Nb:function Nb(d,e,f){this.a=d
this.b=e
this.c=f},
ahO:function ahO(){},
ahS:function ahS(){},
al5:function al5(){},
alq:function alq(){},
alr:function alr(){},
alt:function alt(){},
alu:function alu(){},
amj:function amj(){},
ami:function ami(){},
amk:function amk(){},
apU:function apU(){},
arL:function arL(){},
arM:function arM(){},
atp:function atp(){},
au6:function au6(){},
au5:function au5(){},
au7:function au7(){},
ayk:function ayk(){},
L1:function L1(){},
L2:function L2(d,e,f){this.c=d
this.d=e
this.a=f},
aym:function aym(d){this.a=d},
ayl:function ayl(d){this.a=d},
RR:function RR(d,e,f){this.c=d
this.e=e
this.a=f},
YB:function YB(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bYR(d,e,f){var w=B.af(f),v=w.i("ab<1,jV>")
v=B.Q(new B.ab(f,new A.b_2(),v),v.i("av.E"))
w=w.i("ab<1,c>")
w=B.Q(new B.ab(f,new A.b_3(),w),w.i("av.E"))
return new A.ad4(e,d,v,w,null)},
bRx(d,e,f){var w,v=null,u=B.aK(x.dO),t=J.a7o(4,x.er)
for(w=0;w<4;++w)t[w]=new B.tx(v,C.au,C.w,new B.kw(1),v,v,v,v,C.bC,v)
u=new A.a1n(f,d,e,u,t,!0,0,v,v,new B.bp(),B.aK(x.v))
u.bi()
return u},
ad4:function ad4(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_2:function b_2(){},
b_3:function b_3(){},
a1n:function a1n(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.W=e
_.U=f
_.a4=g
_.Wb$=h
_.aSZ$=i
_.dq$=j
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
bfT:function bfT(d,e){this.a=d
this.b=e},
ayn:function ayn(){},
jV:function jV(d,e){this.a=d
this.b=e},
nV:function nV(d,e){this.a=d
this.b=e},
ahP:function ahP(){},
ahQ:function ahQ(){},
ahR:function ahR(){},
TS:function TS(){},
AI:function AI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_4:function b_4(d){this.a=d},
b_5:function b_5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_6:function b_6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5Q(d,e){var w=d==null?B.cn(C.C,1):d
return new A.a5P(e!==!1,w)},
a1C:function a1C(){},
a5P:function a5P(d,e){this.a=d
this.b=e},
Ni:function Ni(){},
a5R:function a5R(){},
ayS:function ayS(){},
aFb:function aFb(d,e){this.a=d
this.b=e},
aia:function aia(){},
aln:function aln(){},
alo:function alo(){},
alv:function alv(){},
Lb:function Lb(){},
vN:function vN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hv:function hv(){},
a5V:function a5V(d){this.a=d},
a5W:function a5W(d){this.a=d},
a5X:function a5X(d){this.a=d},
Nd:function Nd(){},
Ne:function Ne(){},
a6_:function a6_(d){this.a=d},
Ng:function Ng(){},
Nh:function Nh(d){this.a=d},
a5U:function a5U(d){this.a=d},
a5T:function a5T(d){this.a=d},
Nc:function Nc(d){this.a=d},
a5Y:function a5Y(d){this.a=d},
a5Z:function a5Z(d){this.a=d},
Nf:function Nf(d){this.a=d},
Gf:function Gf(){},
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
Wl:function Wl(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.ea$=g
_.c5$=h
_.c=_.a=null},
bfY:function bfY(d,e){this.a=d
this.b=e},
bfW:function bfW(d){this.a=d},
bfX:function bfX(d,e){this.a=d
this.b=e},
bfV:function bfV(){},
bfZ:function bfZ(d){this.a=d},
byz(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.J:d
return new A.pQ(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.TL:u
else w=g
v=f==null?A.ayt(!1,u,0,u,!1,D.we):f
w=new A.eb(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayt(!1,u,0,u,!1,D.we):d,j,a0,i,s,!1,p)
w.ar_(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bVv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ae(d.x,e.x,f)
m.toString
w=A.bEb(d.ay,e.ay,f)
v=A.bEb(d.ch,e.ch,f)
u=B.ae(d.as,e.as,f)
u.toString
t=e.CW
s=A.kC(d.cy,e.cy,f,A.a05(),x.S)
r=B.a0(d.r,e.r,f)
q=B.rl(d.w,e.w,f)
p=A.kC(d.a,e.a,f,A.c4t(),x.cw)
p.toString
o=B.bI2(d.db,e.db,f)
o.toString
n=B.ae(d.dy.a,e.dy.a,f)
n.toString
return A.aLc(v,m,w,r,e.z,s,new A.yx(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OC(n),!1,u,o,!0,e.cx,p)},
ayt(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aH(C.d.aO(127.5),D.du.A()>>>16&255,D.du.A()>>>8&255,D.du.A()&255):null
else w=e
return new A.a1v(h,w,g,i,f,!1)},
bEb(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a0(v.a,u.a,f),s=B.rl(v.b,u.b,f),r=B.ae(v.c,u.c,f)
r.toString
r=A.bFy(t,A.kC(v.d,u.d,f,A.a05(),x.S),s,r)
s=B.a0(d.b,e.b,f)
u=B.rl(d.c,e.c,f)
v=B.ae(d.e,e.e,f)
v.toString
return A.ayt(!1,s,v,u,e.a,new A.L6(!1,r,w.c,!0))},
bRC(d,e,f){var w=B.a0(d.c,e.c,f),v=B.rl(d.d,e.d,f)
if(w==null)w=v==null?B.aH(C.d.aO(127.5),D.du.A()>>>16&255,D.du.A()>>>8&255,D.du.A()&255):null
return new A.mL(e.a,e.b,w,v)},
c7L(d){return!0},
bAC(d,e,f){var w=f.w,v=w==null
if(!v&&w instanceof B.ka)return A.bBn(w.a,A.byb(w),e/100)
w=v?null:C.b.ga3(w.a)
if(w==null)w=f.r
return w==null?D.du:w},
c29(d,e,f){var w,v=f.w,u=v==null
if(!u&&v instanceof B.ka)w=A.bBn(v.a,A.byb(v),e/100)
else{v=u?null:C.b.ga3(v.a)
w=v==null?f.r:v
if(w==null)w=D.du}return A.aAD(w,40)},
bKy(d,e,f,g,h){var w,v=A.bAC(d,e,f),u=f.w,t=u==null
if(!t&&u instanceof B.ka)w=A.bBn(u.a,A.byb(u),e/100)
else{u=t?null:C.b.ga3(u.a)
w=u==null?f.r:u
if(w==null)w=D.du}u=A.aAD(w,40)
return new A.Nb(v,h==null?4:h,u)},
c7J(d,e){return!0},
c4g(d,e){return Math.abs(d.a-e.a)},
c5w(d,e){var w=J.cT(e,new A.bu1(d),x.bY)
w=B.Q(w,w.$ti.i("av.E"))
return w},
c5s(d,e){return-1/0},
c5r(d,e){return d.a[e].b},
bLJ(d){var w=J.cT(d,new A.btZ(),x.fT)
w=B.Q(w,w.$ti.i("av.E"))
return w},
bLI(d){return A.aAD(D.du,15)},
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
eb:function eb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aLd:function aLd(){},
OC:function OC(d){this.a=d},
a1v:function a1v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mL:function mL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
L6:function L6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yx:function yx(d,e,f){this.a=d
this.b=e
this.c=f},
aKZ:function aKZ(d,e){this.a=d
this.b=e},
a5S:function a5S(){},
EO:function EO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bu1:function bu1(d){this.a=d},
bu0:function bu0(d){this.a=d},
a7L:function a7L(){},
btZ:function btZ(){},
n7:function n7(){},
qi:function qi(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rA:function rA(d,e){this.a=d
this.b=e},
tA:function tA(d,e){this.a=d
this.b=e},
GH:function GH(d){this.a=d},
OD:function OD(d){this.a=d},
zi:function zi(d,e){this.a=d
this.b=e},
ahY:function ahY(){},
ahZ:function ahZ(){},
aib:function aib(){},
alp:function alp(){},
als:function als(){},
an7:function an7(){},
an8:function an8(){},
an9:function an9(){},
anb:function anb(){},
anc:function anc(){},
and:function and(){},
ane:function ane(){},
arK:function arK(){},
ato:function ato(){},
aLe:function aLe(d){this.a=d},
aLf:function aLf(){},
aLg:function aLg(){},
zj:function zj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ana:function ana(){},
aLh:function aLh(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLk:function aLk(){},
aLi:function aLi(d,e,f){this.a=d
this.b=e
this.c=f},
aLj:function aLj(d,e,f){this.a=d
this.b=e
this.c=f},
aLl:function aLl(){},
vw:function vw(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7K:function a7K(d,e,f){this.d=d
this.e=e
this.a=f},
abR:function abR(d,e,f,g,h,i,j,k){var _=this
_.aC=d
_.i6=e
_.cX=f
_.fW=g
_.B=h
_.a4=_.U=_.W=null
_.Y=i
_.bD=_.aE=_.ai=_.ar=$
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
bxg(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bD(o.length,0,!1,x.i),m=B.af(o),l=new B.ab(o,new A.ayw(),m.i("ab<1,F>")).jG(0,new A.ayx()),k=e-l,j=new A.ayA(k,d,n)
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
new B.iU(o,m.i("iU<1>")).aw(0,new A.ayy(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.iU(o,m.i("iU<1>")).aw(0,new A.ayz(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayw:function ayw(){},
ayx:function ayx(){},
ayA:function ayA(d,e,f){this.a=d
this.b=e
this.c=f},
ayB:function ayB(d,e,f){this.a=d
this.b=e
this.c=f},
ayy:function ayy(d,e,f){this.a=d
this.b=e
this.c=f},
ayz:function ayz(d,e,f){this.a=d
this.b=e
this.c=f},
byb(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.iU(w,B.af(w).i("iU<1>")).aw(0,new A.aIh(v,d))
else throw B.e(B.bK('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIh:function aIh(d,e){this.a=d
this.b=e},
aBO(d,e){var w,v
if(e!=null){w=B.af(e).i("ab<1,F>")
v=B.Q(new B.ab(e,new A.aBP(),w),w.i("av.E"))
return A.c5j(d,new A.a2a(v,x.cX))}else return d},
aBP:function aBP(){},
bZs(d,e){var w=!0
if(d!==C.fC)if(!(d===C.au&&e===C.w))w=d===C.ix&&e===C.b0
if(w)return D.Ek
else{w=!0
if(d!==C.hv)if(!(d===C.ix&&e===C.w))w=d===C.au&&e===C.b0
if(w)return D.El
else return D.aaC}},
NH:function NH(d,e){this.a=d
this.b=e},
a20:function a20(d,e){this.a=d
this.b=e},
zn:function zn(d,e){this.a=d
this.$ti=e},
anl:function anl(){},
c5j(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=B.cG($.an().r)
for(w=B.b([],x.C),v=new B.Ou(d,!1,w),u=e.a,t=l.e;v.u();){s=v.c
if(s===0||v.f)B.S(B.fy('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--s
r=new B.Ot(v,s)
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
if(o){q=new B.Kn(d.aSV(r,p,p+n,!0),C.v,null)
t.push(q)
m=l.d
if(m!=null)q.il(m)}p+=n
o=!o}}return l},
a2a:function a2a(d,e){this.a=d
this.b=0
this.$ti=e},
b2z:function b2z(){},
by_(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
if(!u.k(0,D.fP))C.b.gag(s).push(u)
else if(C.b.gag(s).length!==0)s.push(B.b([],t))}if(C.b.gag(s).length===0)s.pop()
return s},
bRF(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gel(v)===0){v=d.a.a
if(v.gel(v)===0){v=d.b.a
if(v.gel(v)===0){v=d.c.a
v=v.gel(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAD(d,e){var w=1-e/100
return B.aH(d.gfF(d),C.d.aO(d.gNS()*w),C.d.aO(d.gG3()*w),C.d.aO(d.gKg()*w))},
bFw(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.ag(v,u,t,w?d.b.c.b:0)},
by0(d){var w=d.a,v=w?A.b_1(d.b):0,u=w?A.b_1(d.c):0,t=w?A.b_1(d.d):0
return new B.ag(v,u,t,w?A.b_1(d.e):0)},
bWK(d){var w
if(d.c===0){d.seT(null)
w=B.c3(d.r)
d.r=B.aH(0,w.A()>>>16&255,w.A()>>>8&255,w.A()&255).gq(0)}},
byV(d,e,f,g){var w
if(f!=null){d.r=C.C.gq(0)
d.seT(f.mP(0,g))}else{w=e==null?C.J:e
d.r=w.gq(w)
d.seT(null)}},
b_1(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kC(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.k9(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.k9(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c6y(d,e,f){return C.d.aO(d+(e-d)*f)},
bBn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.k9(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a0(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gag(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7x.prototype={
p(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.aK:C.n
r=r?C.m:C.a3
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.bZ(t.x,C.m,s,18),C.aN],w))
v.push(B.au(new B.dG(t.c,!1,s),1))
v=B.ah(v,C.z,s,C.f,C.i,0,s,s)
u=t.w
w=B.b([v,C.G,B.i(t.d,s,1,C.ai,s,B.bz(u==null?C.h:u,22,C.H),s,s,s)],w)
return B.bm(r,B.a6(w,C.z,C.ig,C.i),q,s,C.aj,s,s,3)}}
A.uX.prototype={
LG(d){return this.aSY(d)},
aSY(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.em("finance_summary",B.a5(["p_from",E.rf(d.a),"p_to",E.rf(d.b)],s,r),r),$async$LG)
case 3:q=f
if(q==null){u=D.aqC
w=1
break}if(x.f.b(q)){u=B.cZ(q,s,r)
w=1
break}u=D.aqZ
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LG,v)},
LF(d){return this.aSX(d)},
aSX(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$LF=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.k(t.a.em("finance_kpis",B.a5(["p_from",E.rf(d.a),"p_to",E.rf(d.b)],s,r),r),$async$LF)
case 3:q=f
if(x.f.b(q)){u=B.cZ(q,s,r)
w=1
break}u=D.aqi
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$LF,v)},
pG(d){return this.aqI(d)},
aqI(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pG=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fX("sevdesk-sync",B.a5(["from",E.rf(d.a),"to",E.rf(d.b)],s,s)),$async$pG)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"upserted")=="number"){u=C.d.a0(B.fp(J.a2(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pG,v)},
LB(d){return this.aSN(d)},
aSN(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$LB=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.k(q.fX("finance-export-pdf",B.a5(["from",E.rf(d.a),"to",E.rf(d.b)],s,s)),$async$LB)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a2(r,"base64")=="string"){u=B.aF(J.a2(r,"base64"))
w=1
break}throw B.e(B.dQ("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$LB,v)}}
A.Ec.prototype={
FY(d){return this.ajL(d)},
ajL(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FY=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LG(d),$async$FY)
case 7:q=f
o=A.aG3(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FY,v)},
FT(d){return this.ajw(d)},
ajw(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$FT=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LF(d),$async$FT)
case 7:q=f
o=A.bUe(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$FT,v)},
pG(d){return this.aqJ(d)},
aqJ(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
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
q=B.a1(n)
p=r.HA(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pG,v)},
LA(d){return this.aSM(d)},
aSM(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$LA=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.k(r.a.LB(d),$async$LA)
case 7:q=f
o=C.iT.cF(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a1(m)
o=r.HA(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$LA,v)},
HA(d){if(d instanceof B.ys)return d
if(d instanceof B.me){if(d.b==="42501")return new B.vR(d.a)
return new B.tg(d.a)}if(d instanceof B.Nv)return new B.tg("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Ba("Unerwarteter Fehler: "+B.j(d))},
$iaFQ:1}
A.qk.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vB.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wy.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aBc.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aCk.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.od.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.CM.prototype={
gbw(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.oe.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yv.prototype={
GU(d){return this.aqH(0)},
aqH(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$GU=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se6(0,C.dA)
s=t.r
r=s.aI(0,$.xr(),x.P)
p.a=null
w=3
return B.k(B.ph(new A.aFL(p,t,r),x.H),$async$GU)
case 3:t.se6(0,f)
q=t.f
if(q.ght(q)==null){q=$.bwR()
s=s.e
s===$&&B.a()
s.c7(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$GU,v)},
Lz(){return this.aSL()},
aSL(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$Lz=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se6(0,C.dA)
s=t.r.aI(0,$.xr(),x.P)
q.a=null
w=3
return B.k(B.ph(new A.aFK(q,t,s),x.H),$async$Lz)
case 3:t.se6(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Lz,v)}}
A.yw.prototype={
de(d,e){var w=null,v=e.al($.xr(),x.P),u=e.al($.bwR(),x.aN)
return B.t6(B.dv(B.b([new B.fS("Finanzen","Dashboard",new A.ah3(e.al($.bwP(),x.b).gje(),new A.aFV(this,d,e),new A.aFW(this,d,e),new A.aFX(d),new A.aFY(d),new A.aFZ(this,d,e,v),w),w),C.aE,new A.aoJ(v,w),C.c8,D.agJ,C.c8,B.db(u,new A.aG_(),new A.aG0(),new A.aG1(),!1,!0,!1,x.d,x.l)],x.p),w,C.cM,w,C.F,!1),C.m,new A.aG2(e))},
Jp(d,e){return this.aLd(d,e)},
aLd(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$Jp=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bwP()
w=3
return B.k(e.aI(0,s.ghR(),x.F).GU(0),$async$Jp)
case 3:r=g
if(d.e==null){w=1
break}s=e.aI(0,s,x.b)
s=s.ght(s)
t=d.P(x.q).f
t.be(B.c2(null,null,null,null,null,C.r,null,B.i(s==null?"sevDesk synchronisiert: "+B.j(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$Jp,v)},
Bj(d,e){return this.awK(d,e)},
awK(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$Bj=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.k(e.aI(0,$.bwP().ghR(),x.F).Lz(),$async$Bj)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.P(x.q).f.be(D.az2)
w=1
break}t=B.oB(C.v,10)
w=4
return B.k($.bNT().tX(s,"finanzauswertung.pdf",t,null,null,null),$async$Bj)
case 4:case 1:return B.o(u,v)}})
return B.p($async$Bj,v)},
Bk(d,e,f){return this.aIV(d,e,f)},
aIV(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$Bk=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.k(B.ja(null,null,!0,null,new A.aFT(f,d),d,null,!0,!0,x.cJ),$async$Bk)
case 3:if(h!==!0){w=1
break}t=5
r=new E.nQ(e.aI(0,$.bW(),x.A))
p=f.a
o=f.b
n=$.dO()
m=n.ap(p)
n=n.ap(o)
w=8
return B.k(r.zy("finance_period",p,o,B.a5(["period_from",p.eg()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$Bk)
case 8:if(d.e!=null)d.P(x.q).f.be(F.vf)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a1(k)
if(d.e!=null)d.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Fehler: "+B.j(q),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Bk,v)}}
A.ah3.prototype={
p(d){var w=this,v=null,u=A.amu(C.m,F.hX,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.amu(v,D.acv,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.amu(v,D.yb,v,s?v:w.d,"sevDesk synchronisieren"),q=A.amu(C.aa,C.jk,C.aa,s?v:w.e,"PDF-Export")
return B.ah(B.b([u,C.aN,t,C.aN,r,C.aN,q,C.aN,A.amu(C.ac,C.fR,C.ac,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.j,v,C.f,C.E,0,v,v)}}
A.amt.prototype={
p(d){var w,v=this,u=null,t=B.ax(12),s=B.ax(12),r=B.ax(12),q=v.w
if(q==null)q=C.a3
q=B.cn(q,1)
w=v.r
if(w==null)w=C.h
return B.wx(B.dE(!1,C.X,!0,t,B.eB(!1,s,!0,B.aQ(u,B.bZ(v.c,w,u,20),C.q,u,u,new B.aD(u,u,q,r,u,u,C.A),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.q,C.a8,0,u,u,u,u,u,C.bn),u,v.d,u,u)}}
A.aoJ.prototype={
de(d,e){var w=null,v=this.e,u=$.dO(),t=x.p
return B.bm(w,B.a6(B.b([D.a9E,C.G,B.ah(B.b([D.adn,C.ao,B.au(B.i(u.ap(v.a)+" \u2013 "+u.ap(v.b),w,w,w,w,B.y(C.h,16,C.H),w,w,w),1)],t),C.j,w,C.f,C.i,0,w,w),C.t,B.ku(C.cj,B.b([new A.J4("Monat",new A.biG(e),w,w),new A.J4("Jahr (YTD)",new A.biH(e),w,w),new A.J4("Zeitraum w\xe4hlen \u2026",new A.biI(this,d,e),D.aby,w)],t),C.dy,6,8)],t),C.z,C.f,C.i),w,w,C.D,w,w,3)},
IM(d,e){return this.aHO(d,e)},
aHO(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$IM=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b9(Date.now(),0,!1)
s=u.e
w=2
return B.k(E.awg(new A.biF(),d,B.bP(B.aZ(t)-5,1,1,0,0,0,0),new B.lN(s.a,s.b,x.bz),B.bP(B.aZ(t)+1,1,1,0,0,0,0),C.e3),$async$IM)
case 2:r=g
if(r!=null)e.aI(0,$.xr().ghR(),x.V).uc(0,new E.lU(r.a,r.b))
return B.o(null,v)}})
return B.p($async$IM,v)}}
A.J4.prototype={
p(d){var w=null,v=B.ax(9999),u=B.ax(9999),t=B.ax(9999),s=B.cn(C.a3,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.bZ(p,C.h,w,14),C.aN],r))
q.push(B.i(this.c,w,w,w,w,B.y(C.h,13,C.H),w,w,w))
return B.dE(!1,C.X,!0,v,B.eB(!1,u,!0,B.aQ(w,B.ah(q,C.j,w,C.f,C.E,0,w,w),C.q,w,w,new B.aD(w,w,s,t,w,w,C.A),w,w,w,w,C.hQ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.q,C.a8,0,w,w,w,w,w,C.bn)}}
A.Ju.prototype={
p(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.js(new A.bpm(this)),C.c8,D.a9K,C.t],r),p=this.c.w
if(p.length===0)q.push(B.bm(s,B.ah(B.b([D.adP,C.aq,B.au(B.i("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,s,B.y(C.p,14,C.l),s,s,s),1)],r),C.j,s,C.f,C.i,0,s,s),C.a8,s,C.D,s,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.M)(p),++u){t=p[u]
C.b.K(w,B.b([new A.ah1(t.a,t.b,t.c==="revenue",t.d,s),C.G],r))}q.push(B.a6(w,C.j,C.f,C.i))}return B.a6(q,C.a9,C.f,C.i)}}
A.ah1.prototype={
p(d){var w=this,v=null,u=w.e,t=u?C.aK:C.a8,s=B.cn(u?C.m:C.a3,1),r=B.ax(4),q=w.c
r=B.aQ(C.U,B.i(C.c.a1(q,0,1),v,v,v,v,B.bz(C.h,14,C.o),v,v,v),C.q,v,v,new B.aD(t,v,s,r,v,v,C.A),v,36,v,v,v,v,v,36)
q=B.i(q+" \xb7 "+w.d,v,1,C.ai,v,B.y(C.h,14,C.H),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.au(B.a6(B.b([q,B.i(t,v,v,v,v,B.y(C.p,12,C.l),v,v,v)],s),C.z,C.f,C.i),1)
q=$.dr().ap(w.f)
return B.bm(v,B.ah(B.b([r,C.aq,t,B.i(q,v,v,v,v,B.y(u?C.ac:C.h,15,C.H),v,v,v)],s),C.j,v,C.f,C.i,0,v,v),v,v,C.dh,v,v,3)}}
A.Ia.prototype={
p(d){var w=null
return B.bm(C.aa,B.ah(B.b([D.aeo,C.aq,B.au(B.i(this.c,w,w,w,w,B.y(C.h,14,C.l),w,w,w),1)],x.p),C.j,w,C.f,C.i,0,w,w),C.fg,w,C.D,w,w,3)}}
A.a7y.prototype={
de(d,e){return B.db(e.al($.bQl(),x.e),new A.aKW(),new A.aKX(),new A.aKY(),!1,!0,!1,x.X,x.l)}}
A.Iv.prototype={
p(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.awk,C.t,B.js(new A.bfK(v,q,100-t.w.a,w,p)),C.t,new A.alL(u),C.aE,D.awj,C.t,new A.ahX(t,u),C.aE,D.awd,C.t,B.bA(u,!0,u,B.k5(u,B.bm(u,new A.Uh(t,220,u),u,u,C.D,u,u,3),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfL(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aE,D.aw6,C.t,B.bA(u,!0,u,B.k5(u,new A.Uy(t,200,!1,u),C.ab,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bfM(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.N,u),C.aE,D.awa,C.t,new A.anv(t,u),C.aE,D.aw8,C.t,new A.ajL(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aE,D.awf,C.t,new A.atl(t,u)],s))
return B.a6(r,C.a9,C.f,C.i)}}
A.alL.prototype={
p(d){var w=null
return B.i("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,w,B.y(C.p,11,C.l).cA(1.35),w,w,w)}}
A.an0.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cv(m.d,"-")?C.aa:C.ac
else w=C.h
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bfN(m,d):l
r=x.p
q=B.b([B.au(B.i(m.c.toUpperCase(),l,l,l,l,B.y(C.p,10,C.o).fu(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cn(C.aa,0.8)
n=B.ax(4)
q.push(B.aQ(l,B.i("Ziel "+p,l,l,l,l,B.y(C.aa,9,C.o),l,l,l),C.q,l,l,new B.aD(l,l,o,n,l,l,C.A),l,l,l,l,C.nt,l,l,l))}q=B.b([B.ah(q,C.j,l,C.f,C.i,0,l,l),C.aV,B.N9(C.d0,B.i(m.d,l,l,l,l,B.bz(w,22,C.o),l,l,l),C.hF)],r)
p=m.e
if(p!=null)q.push(B.i(p,l,2,C.ai,l,B.y(C.p,10,C.aD),l,l,l))
q.push(C.cX)
q.push(B.ah(B.b([new A.V7("Vormonat",m.r,l),C.cx,new A.V7("Vorjahr",m.f,l)],r),C.j,l,C.f,C.i,0,l,l))
q.push(C.cX)
q.push(B.au(new A.YN(v,m.y,m.z,l),1))
return B.bA(l,u,l,B.k5(l,B.bm(l,B.a6(q,C.z,C.f,C.i),l,l,C.bW,l,l,3),C.ab,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.N,l)}}
A.V7.prototype={
p(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.ax(4)
return B.aQ(r,B.i(this.c+" \u2014",r,r,r,r,B.y(C.p,9,C.o),r,r,r),C.q,r,r,new B.aD(C.a3,r,r,q,r,r,C.A),r,r,r,r,C.nt,r,r,r)}w=q>=0
v=w?C.ac:C.aa
u=v.eh(0.12)
t=B.cn(v,0.7)
s=B.ax(4)
return B.aQ(r,B.ah(B.b([B.bZ(w?F.aaI:D.aaH,v,r,10),C.ZA,B.i(this.c+" "+C.d.aj(q,1)+" %",r,r,r,r,B.y(v,9,C.o),r,r,r)],x.p),C.j,r,C.f,C.E,0,r,r),C.q,r,r,new B.aD(u,r,t,s,r,r,C.A),r,r,r,r,C.nt,r,r,r)}}
A.YN.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.am
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.ez(v,j[v]))
u=C.b.jG(j,new A.bor())
t=C.b.jG(j,new A.bos())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.bot(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5Q(k,!1)
w=B.b([A.aLc(k,2,A.ayt(!1,C.m.eh(0.16),0,k,!0,D.we),C.m,0.35,k,D.Eb,k,!0,!1,!0,!1,D.Fz,!1,10,D.Z2,!0,C.lw,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OB(A.byz(k,k,k,D.amJ,l,D.C3,D.E7,D.Ec,w,D.agN,k,m,k,n,D.Yl,D.amK,D.aa_),C.al,C.a1,k,k)}}
A.Uh.prototype={
p(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aLZ
w=C.b.fI(p,0,new A.b6j())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayC(B.b([A.a1x(q,q,D.Bv,q,C.m,q,q,q,r.b,6),A.a1x(q,q,D.Bv,q,C.h,q,q,q,r.c,6)],t),2,q,q,s))}return B.bN(A.bEc(A.ayv(q,q,u,q,q,A.a5Q(q,!1),q,new A.yy(!0,!0,q,new A.b6k(),A.a00(),!1,q,A.aw0(),A.a00()),q,v,q,q,new A.uZ(!0,new A.pi(16,q,new A.q9(!0,new A.b6l(this),46,q),!0),D.kv,D.kv,new A.pi(16,q,new A.q9(!0,new A.b6m(p),26,q),!0)))),this.d,q)},
aKv(d){if(Math.abs(d)>=1000)return C.d.aj(d/1000,1)+" k"
return C.d.aj(d,0)}}
A.Uy.prototype={
p(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ab(v,new A.b7j(),w),x.i)
C.b.K(o,new B.ab(u,new A.b7k(),w))
t=C.b.fI(o,0,new A.b7l())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayC(B.b([A.a1x(q,q,q,q,C.m,q,q,q,v[s],14),A.a1x(q,q,q,q,C.ac,q,q,q,u[s],14)],m),4,q,q,s))
r=B.bN(A.bEc(A.ayv(q,q,n,q,q,A.a5Q(q,!1),q,D.Ec,q,o,q,q,new A.uZ(!0,D.kv,D.kv,D.kv,new A.pi(16,q,new A.q9(!0,new A.b7m(p),26,q),!0)))),this.d,q)
return this.e?r:B.bm(q,r,q,q,C.D,q,q,3)}}
A.anv.prototype={
p(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.c.e
if(l.length===0)return D.aLY
w=new B.ab(l,new A.bgl(),B.af(l).i("ab<1,F>")).jG(0,new A.bgm())
v=x.p
u=B.b([],v)
for(t=l.length,s=0;s<l.length;l.length===t||(0,B.M)(l),++s){r=l[s]
q=B.i(r.b,m,m,m,m,B.y(C.h,14,C.o),m,m,m)
p=$.dr()
o=r.d
n=new B.aW(4,4)
o=B.b([new B.hU(C.ah,C.f,C.i,C.j,m,C.aQ,m,0,B.b([new B.jo(1,C.di,B.a6(B.b([q,B.i(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+p.ap(r.f),m,m,m,m,B.y(C.p,12,C.aD),m,m,m)],v),C.z,C.f,C.i),m),C.ao,B.i(p.ap(o),m,m,m,m,B.bz(C.h,16,C.o),m,m,m)],v),m),C.cX,new B.Ds(new B.d3(n,n,n,n),C.bx,B.zk(C.a3,m,8,C.d.bo(o/w,0,1),D.Bk),m)],v)
q=C.b.gag(l)
if(r!==q)q=B.L(r)===B.L(q)&&B.a03(r.gbw(),q.gbw())
else q=!0
if(!q)o.push(C.t)
C.b.K(u,o)}return B.bm(m,B.a6(u,C.j,C.f,C.i),m,m,C.D,m,m,3)}}
A.ajL.prototype={
p(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.au(new A.Ch("Aktive Kunden",""+s,u),1)
w=B.au(new A.Ch("K\xe4ufe",""+t.a,u),1)
v=$.dr()
return B.bm(u,B.ah(B.b([s,w,B.au(new A.Ch("\xd8-Warenkorb",v.ap(t.d),u),1),B.au(new A.Ch("Umsatz/Kunde",v.ap(r),u),1)],x.p),C.j,u,C.f,C.i,0,u,u),u,u,C.D,u,u,3)}}
A.Ch.prototype={
p(d){var w=null
return B.a6(B.b([B.i(this.c.toUpperCase(),w,w,w,w,B.y(C.p,10,C.o).fu(0.6),w,w,w),C.b8,B.i(this.d,w,w,w,w,B.bz(C.h,20,C.o),w,w,w)],x.p),C.z,C.f,C.E)}}
A.atl.prototype={
p(d){var w,v,u,t,s,r=null,q=this.c.f,p=new B.ab(q,new A.bqE(),B.af(q).i("ab<1,F>")).jG(0,new A.bqF()),o=x.p,n=B.b([],o)
for(w=q.length,v=0;v<q.length;q.length===w||(0,B.M)(q),++v){u=q[v]
t=u.d
s=new B.aW(4,4)
t=B.b([new B.hU(C.ah,C.f,C.i,C.j,r,C.aQ,r,0,B.b([new B.jo(1,C.di,B.i(u.b,r,1,C.ai,r,B.y(C.h,13,C.o),r,r,r),r),B.i(""+u.c+"\xd7 ",r,r,r,r,B.y(C.p,12,C.H),r,r,r),B.i($.dr().ap(t),r,r,r,r,B.y(C.h,13,C.o),r,r,r)],o),r),C.aV,new B.Ds(new B.d3(s,s,s,s),C.bx,B.zk(C.a3,r,6,C.d.bo(t/p,0,1),D.Bk),r)],o)
s=C.b.gag(q)
if(u!==s)s=B.L(u)===B.L(s)&&B.a03(u.gbw(),s.gbw())
else s=!0
if(!s)t.push(C.G)
C.b.K(n,t)}return B.bm(r,B.a6(n,C.j,C.f,C.i),r,r,C.D,r,r,3)}}
A.wP.prototype={
p(d){var w=null
return B.bm(w,B.i(this.c,w,w,w,w,B.y(C.p,13,C.l),w,w,w),C.a8,w,C.D,w,w,3)}}
A.ahX.prototype={
de(d,e){return B.db(e.al($.bwQ(),x.fM),new A.b4I(this,d,e),new A.b4J(),new A.b4K(),!1,!0,!1,x.h,x.l)}}
A.Bi.prototype={
V(){return new A.TU()},
aXN(){return this.d.$0()}}
A.TU.prototype={
aq(){var w,v,u,t,s,r,q=this
q.aJ()
q.d=new B.b9(Date.now(),0,!1)
w=q.a.c
v=w==null
if((v?null:J.a2(w,"as_of"))!=null){w.toString
u=B.es(J.al(J.a2(w,"as_of")))
q.d=u==null?q.d:u}u=B.A(x.N,x.bO)
for(t=0;t<8;++t){s=D.pG[t].a
if(v)r=""
else{r=B.b5(J.a2(w,s))
if(r==null)r=null
r=C.d.aj(r==null?0:r,2)
r=B.b4(r,".",",")}u.m(0,s,new B.bJ(new B.cV(r,C.bK,C.aT),$.ak()))}q.e!==$&&B.b1()
q.e=u},
l(){var w,v=this.e
v===$&&B.a()
v=new B.ca(v,v.r,v.e,B.l(v).i("ca<2>"))
while(v.u()){w=v.d
w.S$=$.ak()
w.T$=0}this.am()},
ro(d){var w=this.e
w===$&&B.a()
w=C.c.aS(w.h(0,d).a.a)
w=B.b4(w,".","")
w=B.iV(B.b4(w,",","."))
return w==null?0:w},
a3U(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pG[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.aj(u,2)
s=B.b4(s,".",",")
t.ks(0,t.a.xY(C.aT,C.bK,s))}}this.J(new A.b4w())},
aEr(){this.a3U(D.aqE)
this.c.P(x.q).f.be(D.azm)},
I1(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$I1=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.ba(a1)
for(e=0;e<8;++e)a2.E(0,D.pG[e].a)
q=a2
t=4
w=7
return B.k($.aFE.ck().zd(B.b(["csv","txt"],x.s),C.xW,!0),$async$I1)
case 7:p=a5
a2=p
o=a2==null?null:J.Kj(a2.a).c
if(o==null){w=1
break}n=C.aG.ade(0,o,!0)
m=B.A(a1,x.i)
for(a1=C.C8.cF(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.M)(a1),++e){l=a1[e]
k=J.awR(l,B.bT("[;,\t]",!0,!1,!1))
if(J.ce(k)<2)continue
j=C.c.aS(J.a2(k,0)).toLowerCase()
i=J.CI(q,j)?j:D.ar_.h(0,j)
if(i==null)continue
d=C.c.aS(C.b.n6(J.bR5(k,1)))
d=B.b4(d,"\u20ac","")
d=B.b4(d," ","")
d=B.b4(d,".","")
h=B.b4(d,",",".")
g=B.iV(h)
if(g!=null)J.fr(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.P(x.q).f.be(D.az_)
w=1
break}r.a3U(m)
r.c.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a1(a3)
a1=r.c
if(a1==null){w=1
break}a1.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Import fehlgeschlagen: "+B.j(f),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$I1,v)},
Ic(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$Ic=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4x(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b_g("upsert_finance_balance",B.a5(["p_as_of",C.c.a1(n.eg(),0,10),"p_cash_and_bank",q.ro("cash_and_bank"),"p_receivables",q.ro("receivables"),"p_inventory_value",q.ro("inventory_value"),"p_other_current_assets",q.ro("other_current_assets"),"p_fixed_assets",q.ro("fixed_assets"),"p_current_liabilities",q.ro("current_liabilities"),"p_long_term_liabilities",q.ro("long_term_liabilities"),"p_equity",q.ro("equity")],x.N,x.aU))
w=7
return B.k(n,$async$Ic)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aXN()
o=q.c
o.toString
B.bb(o,!1).eQ()
q.c.P(x.q).f.be(D.az3)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a1(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.P(x.q).f.be(B.c2(null,null,null,null,null,C.r,null,B.i("Speichern fehlgeschlagen: "+B.j(p),null,null,null,null,null,null,null,null),null,C.L,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4y(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ic,v)},
p(d){var w,v,u,t,s=this,r=null,q=B.i("Bilanzwerte erfassen",r,r,r,r,B.bz(C.h,18,C.o),r,r,r),p=s.f?r:new A.b4A(s,d),o=s.d
o===$&&B.a()
p=B.fP(D.adp,B.i("Stichtag: "+C.c.a1(o.eg(),0,10),r,r,r,r,r,r,r,r),p,r)
o=s.f
w=B.au(B.fP(D.aez,D.aF7,o?r:s.gaDt(),r),1)
v=x.p
w=B.b([p,C.G,B.ah(B.b([w,C.ao,B.au(B.fP(D.ael,D.aEX,o?r:s.gaEq(),r),1)],v),C.j,r,C.f,C.i,0,r,r),C.t],v)
for(u=0;u<8;++u){p=D.pG[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.f5(r,C.aX,!1,r,!0,C.r,r,B.fh(),o.h(0,p.a),r,r,r,r,r,2,new B.ch(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.ab,!0,r,!0,r,!1,r,C.b1,r,r,r,r,C.iz,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.D,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.au,r,C.a5,r,r,r,r),C.G],v))}w.push(B.i("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,r,B.y(C.p,11,C.l),r,r,r))
p=B.bN(B.f4(B.a6(w,C.a9,C.f,C.E),r,C.F),r,380)
o=s.f
w=B.dJ(C.cY,r,r,o?r:new A.b4B(d),r,r)
o=o?r:s.gaEa()
t=B.dC(C.m,C.h,r,r,r,r,r)
return B.lH(B.b([w,B.dY(s.f?F.ZD:C.ez,o,t)],v),C.n,p,q)}}
A.bh.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a03(this.gbw(),e.gbw())
else w=!0
return w},
gv(d){return(B.f2(B.L(this))^B.bMd(this.gbw()))>>>0},
j(d){B.bFs()
return B.L(this).j(0)}}
A.L7.prototype={
V(){return new A.TV(B.A(x.S,x.I),new A.ayF(B.A(x.x,x.T)),null,null)}}
A.TV.prototype={
p(d){var w,v=this,u=v.a1R(),t=v.CW
t.toString
t=v.a1S(t.au(0,v.gfp().gq(0)))
w=v.a1S(u)
v.a.toString
return new A.L2(new A.a1w(t,w,null),u,null)},
a1S(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayC(s.c,s.d,!1,r,s.a))}return d.aPN(w)},
a1R(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.UL(t.ch)
if(r)s=w.a
r=t.y
t=t.aQI(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aPO(A.bxh(!1,!0,!0,v.d,v.c,u.gase(),v.f,v.e))}return t},
asf(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gafC()||e==null||e.a==null){w=v.cy
v.J(w.gaPc(w))
return}v.J(new A.b4N(v,e))},
lu(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a1R(),new A.b4O(w)))}}
A.nW.prototype={
Vm(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayv(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aQI(d,e){return this.Vm(null,null,d,e)},
aPO(d){return this.Vm(null,d,null,null)},
aPN(d){return this.Vm(d,null,null,null)},
Xh(d,e,f){var w,v,u,t=A.kC(d.ch,e.ch,f,A.c4y(),x.dB),s=B.ae(d.CW,e.CW,f),r=A.bFz(d.d,e.d,f),q=A.bHu(d.e,e.e,f),p=A.bFx(d.c,e.c,f),o=e.a
o=A.a5Q(B.a1N(d.a.b,o.b,f),o.a)
w=B.ae(d.y,e.y,f)
v=B.ae(d.x,e.x,f)
u=B.ae(d.z,e.z,f)
r=A.ayv(e.cx,B.a0(d.as,e.as,f),t,e.cy,u,o,A.bFu(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbw(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayu.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fG.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ab(v,new A.ayD(),B.af(v).i("ab<1,F>")).jG(0,new A.ayE())
v=v.length
return w+(v-1)*this.d},
gbw(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.ip.prototype={
gbw(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mK.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1t.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1y.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aeu.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1z.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.D3.prototype={
gbw(){return[this.a,this.b,C.bs,C.w,null]}}
A.L8.prototype={}
A.a1A.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xF.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ahT.prototype={}
A.ai_.prototype={}
A.ai0.prototype={}
A.ai2.prototype={}
A.ai3.prototype={}
A.ai4.prototype={}
A.ai5.prototype={}
A.ai6.prototype={}
A.ai7.prototype={}
A.ayF.prototype={
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uC(0,0,!1)
v=new A.zn(d,x.x)
u=this.a
if(u.aD(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uC(t,u,!0)}w=null
try{w=C.b.oX(d,new A.ayG())}catch(s){return new A.uC(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
q=Math.min(w.c[0].a,w.c[0].b)
for(t=d.length,p=0;p<t;++p)for(o=d[p].c,n=o.length,m=0;m<n;++m){l=o[m]
k=l.a
r=Math.max(r,k)
q=Math.min(q,k)
k=l.b
r=Math.max(r,k)
q=Math.min(q,k)}j=new A.uC(q,r,!1)
u.m(0,v,j)
return j}}
A.uC.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.ai1.prototype={}
A.ayH.prototype={
ie(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a_W(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ace(t,A.bxg(w,t.a),u)
l.y=u
l.aS4(e,u,f)
l.alL(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aSd(d,e,m,t,r,s,n,o,f)}}},
ace(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.dQ("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.iU(p,B.af(p).i("iU<1>")).aw(0,new A.ayI(t,q,r,s))
w.push(new A.a6z(q))}return w},
aS4(b6,b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b8.a,b5=b6.b
for(w=b4.ch,v=b6.a,u=v.a,t=b4.y,s=b4.x,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aW(m,m)
l=new B.d3(k,k,k,k)}j=o.w
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
a4=B.Qk(h,Math.min(b3.dG(a1,b5,b8),a3-a0),g,a3,e,d,k,f)}else{a5=b3.dG(Math.min(t,a2),b5,b8)
a4=B.Qk(h,a5,g,Math.max(b3.dG(a1,b5,b8),a5+a0),e,d,k,f)}k=b3.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.J:f).gq(0)
k.seT(null)
a6=b3.f.en()
u.drawRRect(B.lC(a4),a6)
a6.delete()
k=o.y
if(k.length!==0)for(a7=0;a7<k.length;++a7){a8=k[a7]
f=a8.a
a9=b3.dG(f,b5,b8)
e=a8.b
b0=b3.dG(e,b5,b8)
b3.f.r=a8.c.gq(0)
b1=e<f?new B.J(h,a9,g,b0):new B.J(h,b0,g,a9)
J.b_(u.save())
u.clipRect(B.dN(b1),$.nM()[1],!0)
a6=b3.f.en()
u.drawRRect(B.lC(a4),a6)
a6.delete()
u.restore()
b3.aSb(b6,a8,a7,k.length,n,a4,b5,b8)}n=j.b
if(n>0){k=j.a
k=k.gel(k)>0}else k=!1
if(k){k=b3.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
b2=B.cG($.an().r)
n=new B.hm(a4)
b2.e.push(n)
k=b2.d
if(k!=null)n.il(k)
v.fV(A.aBO(b2,o.r),b3.r)}}}},
aSd(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.AY(a5,a5,a5,a5,B.cW(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lE().ZX(a8,a7.b),a7.a),C.bs,C.w,a5,b6.c,C.bC)
w.afW(b1.f)
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
n=u+o.gev()
m=v+4+(o.gd0(0)+o.gd4(0))
l=Math.min(r,p)
k=Math.max(r,p)
v=b1.y
if(v!==D.aHz)j=v===D.a_i&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.ZY(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.J(h,i,v,t)
s=b1.a
f=new B.aW(s,s)
e=B.FZ(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lE().Kr(new B.G(v,t),d).b
s=$.lE()
q=w.b
p=q.c
q=q.a.c
a0=s.Kr(new B.G(p,q.gbU(q)),d)
q=g.gcb()
p=w.b.c
s=g.gai7()
a1=b1.Q
if(!a1.k(0,C.I)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.VY(d,new A.ayJ(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.G(v,t))},
aSb(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
if(l!==0){w=m.a
w=w.gel(w)===0}else w=!0
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
q=B.Qk(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dG(v,j,k),i.b)
r=n.dG(t,j,k)
v=t<v
t=v?C.a2:new B.aW(i.z,i.Q)
p=v?C.a2:new B.aW(i.x,i.y)
o=v?new B.aW(i.e,i.f):C.a2
q=B.Qk(w,s,u,r,t,p,o,v?new B.aW(i.r,i.w):C.a2)}else q=B.bze(w,n.dG(v,j,k),u,n.dG(t,j,k),C.a2)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eO(q,n.r)},
WE(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ace(b2,A.bxg(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1A(d,q,a0,o,a2,a1,new A.ez(d.a,v),new B.r(n,t))}}return null}}
A.a6z.prototype={}
A.a1w.prototype={
bm(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcO(),t=new A.ayH()
t.a18()
$.an()
w=B.aX()
w.b=C.bh
t.f=w
w=B.aX()
w.b=C.aZ
t.r=w
w=B.aX()
w.b=C.bh
w.r=C.n.gq(0)
t.w=w
w=B.aX()
w.b=C.aZ
w.r=C.J.gq(0)
w.c=1
t.x=w
t=new A.abE(this.d,v,u,t,d,C.bg,new B.bp(),B.aK(x.v))
t.bi()
t.YS(v.cy)
t.af3()
return t},
bx(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scO(B.by(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.abE.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYD(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0G(d.cy)
w.bc()},
scO(d){if(this.cX.k(0,d))return
this.cX=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.ie(w,new A.a20(t,v),new A.vN(u.aC,u.i6,u.cX,x.Q))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.L8(w.fW.WE(d,v,new A.vN(w.aC,w.i6,w.cX,x.Q)))}}
A.a1m.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.D2.prototype={
L(){return"AxisSide."+this.b}}
A.tz.prototype={}
A.q9.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad3.prototype={
gbw(){return[!1,0,0,0]}}
A.pi.prototype={
gbw(){return[this.b,this.a,this.c,!0]}}
A.uZ.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ez.prototype={
j(d){return"("+B.j(this.a)+", "+B.j(this.b)+")"},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(!(e instanceof A.ez))return!1
w=v.a
if(isNaN(w)&&isNaN(v.b)&&isNaN(e.a)&&isNaN(e.b))return!0
return e.a===w&&e.b===v.b},
gv(d){return C.d.gv(this.a)^C.d.gv(this.b)}}
A.yy.prototype={
gbw(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pD.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aew.prototype={
gbw(){return[this.a,this.b]}}
A.Qo.prototype={
gbw(){return[this.a,this.b]}}
A.n4.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nr.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kV.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.lm.prototype={
gbw(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6K.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeU.prototype={
gbw(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N0.prototype={
gbw(){return[this.a,this.b,!0]}}
A.uY.prototype={}
A.Nb.prototype={
adF(d,e,f){var w,v
$.an()
w=B.aX()
v=this.a
w.r=v.gq(v)
w.b=C.bh
d.iU(f,this.b,w)},
gbw(){return[this.a,this.b,this.c,0]}}
A.ahO.prototype={}
A.ahS.prototype={}
A.al5.prototype={}
A.alq.prototype={}
A.alr.prototype={}
A.alt.prototype={}
A.alu.prototype={}
A.amj.prototype={}
A.ami.prototype={}
A.amk.prototype={}
A.apU.prototype={}
A.arL.prototype={}
A.arM.prototype={}
A.atp.prototype={}
A.au6.prototype={}
A.au5.prototype={}
A.au7.prototype={}
A.ayk.prototype={
ME(d,e,f,g,h,i){return new B.ih(this.aVS(d,e,f,g,h,i),x.g4)},
aVR(d,e,f,g){return this.ME(d,e,f,!0,g,!0)},
aVS(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$ME(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lE().aji(s,u,v,w)
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
A.L1.prototype={
a18(){var w,v=this
$.an()
w=B.aX()
w.b=C.aZ
v.a=w
w=B.aX()
w.b=C.bh
v.b=w
w=B.aX()
w.b=C.bh
v.e=w
w=B.aX()
w.b=C.aZ
v.c=w
v.d=B.aX()},
ie(d,e,f){var w=this
w.a_X(d,e,f)
w.aS0(e,f)
w.aSa(e,f)
w.aS9(e,f)},
aS9(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lE().OH(w.a,a1.r-a1.f)
u=$.bwq().ME(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fg(u.a(),u.$ti.i("fg<1>")),s=w.b,r=a2.w,q=a2.x;t.u();){p=t.b
if(!q.$1(p))continue
o=d.fc(p,w,a4)
n=new B.r(o,0)
m=new B.r(o,s)
l=r.$1(p)
p=d.a
p===$&&B.a()
k=l.a
j=l.b
i=B.la(n,m)
if(j!=null){p.r=C.C.gq(0)
p.seT(j.mP(0,i))}else{if(k==null)k=C.J
p.r=k.gq(k)
p.seT(a0)}k=l.c
p.c=k
if(k===0){p.seT(a0)
k=B.c3(p.r)
p.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}a3.Dz(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lE().OH(w.b,a1.y-a1.x)
u=$.bwq().ME(a1.z,h,a1.y,!1,a1.x,!1)
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
i=B.la(n,m)
if(k!=null){q.r=C.C.gq(0)
q.seT(k.mP(0,i))}else{if(p==null)p=C.J
q.r=p.gq(p)
q.seT(a0)}p=f.c
q.c=p
if(p===0){q.seT(a0)
p=B.c3(q.r)
q.r=B.aH(0,p.A()>>>16&255,p.A()>>>8&255,p.A()&255).gq(0)}a3.Dz(n,m,d.a,f.d)}},
aS0(d,e){var w,v,u=e.a.as
if((u.A()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.he(new B.J(0,0,0+w.a,0+w.b),this.b)},
aSa(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.M)(k),++u){t=k[u]
s=B.la(new B.r(n.fc(t.a,m,e),0),new B.r(n.fc(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.C.gq(0)
r.seT(p.mP(0,s))}else{r.r=(q==null?C.J:q).gq(0)
r.seT(null)}o=n.e.en()
w.drawRect(B.dN(s),o)
o.delete()}l=l.a
k=l.length
if(k!==0)for(j=d.a.a,w=m.a,u=0;u<l.length;l.length===k||(0,B.M)(l),++u){t=l[u]
s=B.la(new B.r(0,n.dG(t.a,m,e)),new B.r(w,n.dG(t.b,m,e)))
v=n.e
v===$&&B.a()
r=t.c
q=t.d
if(q!=null){v.r=C.C.gq(0)
v.seT(q.mP(0,s))}else{v.r=(r==null?C.J:r).gq(0)
v.seT(null)}o=n.e.en()
j.drawRect(B.dN(s),o)
o.delete()}},
aS8(d,e,f){var w,v
this.a_X(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.adG(d,e,f,w)
if(v.b.length!==0)this.aSf(d,e,f,w)},
adG(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
for(w=a0.a.at.a,v=w.length,u=a1.a,t=a1.b,s=e.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
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
if(j!=null){n.r=C.C.gq(0)
n.seT(j.mP(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
e.Dz(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eF(0,2)
g=C.d.an(o,n.gbU(n).eF(0,2))
J.b_(r.save())
r.translate(h,g)
n=n.gNC().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eF(0,2)
o=C.d.an(o,n.gbU(n).eF(0,2))
k=f.d
k===$&&B.a()
s.adH(0,n,new B.r(h,o),k)}}},
aSf(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
for(w=a2.a.at.b,v=w.length,u=a3.b,t=a3.a,s=a1.a,r=s.a,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.e
n=d.fc(o,a3,a2)
m=new B.r(n,0)
o=d.fc(o,a3,a2)
l=new B.r(o,u)
if(!(n<0||o<0||n>t||o>t)){n=d.c
n===$&&B.a()
k=p.a
j=p.b
i=B.la(m,l)
if(j!=null){n.r=C.C.gq(0)
n.seT(j.mP(0,i))}else{if(k==null)k=C.J
n.r=k.gq(k)
n.seT(null)}k=p.c
n.c=k
if(k===0){n.seT(null)
k=B.c3(n.r)
n.r=B.aH(0,k.A()>>>16&255,k.A()>>>8&255,k.A()&255).gq(0)}n.d=p.x
a1.Dz(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eF(0,2)
g=n.gbU(n).eF(0,2)
f=C.d.an(o,h)
e=C.d.an(u,g)
J.b_(r.save())
r.translate(f,e)
n=n.gNC().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eF(0,2)
g=n.gbU(n).ae(0,2)
o=C.d.an(o,h)
k=C.d.an(u,g)
j=d.d
j===$&&B.a()
s.adH(0,n,new B.r(o,k),j)}}},
fc(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dG(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
ZY(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.L2.prototype={
gal2(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gal3(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gal4(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gal0(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
alp(d){var w,v=this,u=null,t=v.d,s=A.by0(t.d),r=t.a
r=r.a&&A.bRF(r.b)?r.b:u
w=B.b([B.aQ(u,v.c,C.q,u,u,new B.aD(u,u,r,u,u,u,C.A),u,u,u,s,u,u,u,u)],x.p)
s=new A.aym(w)
if(v.gal2())C.b.hz(w,s.$1(!0),new A.AI(D.Br,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal4())C.b.hz(w,s.$1(!0),new A.AI(D.mG,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal3())C.b.hz(w,s.$1(!0),new A.AI(D.Bs,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
if(v.gal0())C.b.hz(w,s.$1(!0),new A.AI(D.dO,t,new B.G(B.O(1/0,d.a,d.b),B.O(1/0,d.c,d.d)),u))
return w},
p(d){return B.js(new A.ayl(this))}}
A.RR.prototype={
V(){return new A.YB(new B.bk(null,x.eF))}}
A.YB.prototype={
axK(){switch(this.a.c.a){case 0:return C.ee
case 1:return C.fb
case 2:return C.d0
case 3:return C.dM}},
ayf(){switch(this.a.c.a){case 0:return new B.ag(0,0,8,0)
case 1:return new B.ag(0,0,0,8)
case 2:return new B.ag(8,0,0,0)
case 3:return new B.ag(0,8,0,0)}},
axM(d){this.a.toString
return},
aq(){this.aJ()
$.cA.x1$.push(this.ga4n())},
bb(d){this.bE(d)
$.cA.x1$.push(this.ga4n())},
p(d){var w,v=this,u=null,t=v.a
t.toString
w=v.ayf()
return B.B7(B.b27(0,B.aQ(v.axK(),t.e,C.q,u,u,u,u,u,v.d,w,u,u,u,u)),C.v)}}
A.ad4.prototype={
bm(d){return A.bRx(this.f,this.r,this.e)},
bx(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.W!==w){e.W=w
e.a7()}w=this.r
if(e.U!==w){e.U=w
e.a7()}}}
A.a1n.prototype={
hm(d){if(!(d.b instanceof B.hw))d.b=new B.hw(null,null,C.v)},
hZ(d){if(this.B===C.ah)return this.y7(d)
return this.adi(d)},
aKH(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a95(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a94(d,B.hJ())
switch(this.B.a){case 0:return d.c3(new B.G(w.a,w.b))
case 1:return d.c3(new B.G(w.b,w.a))}},
a94(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ah?d.b:d.d,m=o.ah$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.ho(u,null)
break
case 1:q=B.ho(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a95(p)
t=Math.max(t,o.aKH(p))
m=r.aG$}return new A.bfT(n<1/0?n:s,t)},
cC(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga6.call(p)),n=p.a94(o,B.mF()),m=n.a,l=n.b
switch(p.B.a){case 0:p.fy=o.c3(new B.G(m,l))
p.gC(0)
p.gC(0)
break
case 1:p.fy=o.c3(new B.G(l,m))
p.gC(0)
p.gC(0)
break}w=p.ah$
for(v=x.L,u=0;w!=null;){t=w.b
t.toString
v.a(t)
s=p.U[u]
r=w.fy
q=s.b-p.a95(r==null?B.S(B.a_("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c8(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aG$;++u}},
eb(d,e){return this.y8(d,e)},
aM(d,e){if(this.gC(0).ga_(0))return
this.a4.sbh(0,null)
this.v0(d,e)},
l(){this.a4.sbh(0,null)
this.aol()}}
A.bfT.prototype={}
A.ayn.prototype={}
A.jV.prototype={
gbw(){return[this.a,this.b]}}
A.nV.prototype={}
A.ahP.prototype={}
A.ahQ.prototype={
aQ(d){var w,v,u
this.fo(d)
w=this.ah$
for(v=x.L;w!=null;){w.aQ(d)
u=w.b
u.toString
w=v.a(u).aG$}},
aF(d){var w,v,u
this.fh(0)
w=this.ah$
for(v=x.L;w!=null;){w.aF(0)
u=w.b
u.toString
w=v.a(u).aG$}}}
A.ahR.prototype={}
A.TS.prototype={
l(){var w,v,u
for(w=this.Wb$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.AI.prototype={
goD(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.d0
case 1:return C.dM
case 2:return C.ee
case 3:return C.fb}},
gb_t(){var w=this.d,v=A.by0(w.d),u=A.bFw(w.a)
switch(this.c.a){case 2:case 0:return new B.ag(0,v.b,0,v.d).ae(0,new B.ag(0,u.b,0,u.d))
case 1:case 3:return new B.ag(v.a,0,v.c,0).ae(0,new B.ag(u.a,0,u.c,0))}},
gahW(){var w=this.d,v=A.bFw(w.a),u=A.by0(w.d)
switch(this.c.a){case 2:case 0:return u.gd0(0)+u.gd4(0)+(v.gd0(0)+v.gd4(0))
case 1:case 3:return u.gev()+v.gev()}},
aWA(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goD().c.d
if(o==null)o=$.lE().OH(d,f-e)
w=p.c
v=w!==D.mG
if((!v||w===D.dO)&&p.d instanceof A.nW){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.g)
t=A.bxg(u,d)
w=new B.iU(t,B.af(t).i("iU<1>"))
s=w.giG(w).f0(0,new A.b_4(u),x.W).h_(0)}else{r=$.bwq()
w=!v||w===D.dO
v=p.d
q=r.aVR(w?v.w:v.z,o,f,e)
v=B.or(q,new A.b_5(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.af(s).i("ab<1,nV>")
w=B.Q(new B.ab(s,new A.b_6(p,e,f,o,g,d),w),w.i("av.E"))
return w},
p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
j.goD()
w=j.goD()
w=w.c
w=!(w.a&&w.c!==0)
if(w)return B.aQ(i,i,C.q,i,i,i,i,i,i,i,i,i,i,i)
w=j.c
v=w===D.mG
u=!v
t=!u||w===D.dO
s=j.e
r=t?s.a:s.b
t=j.ghL()
s=!u||w===D.dO?C.F:C.ah
q=B.b([],x.p)
if(w===D.Br||v)j.goD()
if(j.goD().c.a){v=!u||w===D.dO?r:j.goD().c.c
p=!u||w===D.dO?j.goD().c.c:r
o=j.gb_t()
n=!u||w===D.dO?C.ah:C.F
j.gahW()
m=j.gahW()
l=!u||w===D.dO
k=j.d
l=l?k.f:k.x
u=!u||w===D.dO?k.r:k.y
q.push(B.aQ(i,A.bYR(new A.ayn(),n,j.aWA(r-m,l,u,w)),C.q,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bs||w===D.dO)j.goD()
return new B.e9(t,i,i,B.bUi(q,C.j,s,i,C.f,C.E,0,i,i,C.aQ),i)}}
A.a1C.prototype={
gbw(){return[this.a,this.b]}}
A.a5P.prototype={
gbw(){return[this.a,this.b]}}
A.Ni.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5R.prototype={
gabz(d){return!1},
gbw(){return[!1,!1,!1,!1]}}
A.ayS.prototype={}
A.aFb.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.aia.prototype={}
A.aln.prototype={}
A.alo.prototype={}
A.alv.prototype={}
A.Lb.prototype={
ie(d,e,f){}}
A.vN.prototype={}
A.hv.prototype={
gdL(){return null},
gafC(){var w,v=this
B.bB()
B.bB()
B.bB()
w=v instanceof A.Nh
if(w)return!0
return!(v instanceof A.Ne)&&!(v instanceof A.Nd)&&!(v instanceof A.Nf)&&!(v instanceof A.Nc)&&!w&&!(v instanceof A.Ng)}}
A.a5V.prototype={
gdL(){return this.a.b}}
A.a5W.prototype={
gdL(){return this.a.b}}
A.a5X.prototype={
gdL(){return this.a.b}}
A.Nd.prototype={}
A.Ne.prototype={}
A.a6_.prototype={
gdL(){return this.a.b}}
A.Ng.prototype={}
A.Nh.prototype={
gdL(){return this.a.b}}
A.a5U.prototype={
gdL(){return this.a.b}}
A.a5T.prototype={
gdL(){return this.a.b}}
A.Nc.prototype={
gdL(){return this.a.b}}
A.a5Y.prototype={
gdL(){return this.a.gdL()}}
A.a5Z.prototype={
gdL(){return this.a.gdL()}}
A.Nf.prototype={
gdL(){return this.a.gdL()}}
A.Gf.prototype={
YS(d){this.W=d.b
this.U=d.c
this.a4=d.d},
af3(){var w=this,v=null,u=w.ai=B.byW(v,v)
u.ay=new A.aVl(w)
u.ch=new A.aVm(w)
u.CW=new A.aVn(w)
u.cy=new A.aVo(w)
u.cx=new A.aVp(w)
u=w.aE=B.H3(v,-1,v)
u.B=new A.aVq(w)
u.Y=new A.aVr(w)
u.W=new A.aVs(w)
u=w.bD=B.a7S(v,w.a4,v)
u.p3=new A.aVt(w)
u.p4=new A.aVu(w)
u.RG=new A.aVv(w)},
cC(){var w=x.k.a(B.K.prototype.ga6.call(this))
this.fy=new B.G(w.b,w.d)},
dE(d){return new B.G(d.b,d.d)},
kK(d){return!0},
mZ(d,e){var w,v=this
if(v.W==null)return
if(x.eo.b(d)){w=v.bD
w===$&&B.a()
w.rL(d)
w=v.aE
w===$&&B.a()
w.rL(d)
w=v.ai
w===$&&B.a()
w.rL(d)}else if(x.gJ.b(d))v.l6(new A.a5Z(d))},
gN8(d){return new A.aVw(this)},
gNa(d){return new A.aVx(this)},
l6(d){var w,v,u=this
if(u.W==null)return
w=d.gdL()
v=w!=null?u.ZR(w):null
u.W.$2(d,v)
u.Y=C.bg},
gKW(d){return this.Y},
gFw(){var w=this.ar
w===$&&B.a()
return w},
aQ(d){this.fo(d)
this.ar=!0},
aF(d){this.ar=!1
this.fh(0)},
$iju:1}
A.OB.prototype={
V(){return new A.Wl(B.b([],x.r),B.A(x.S,x.I),new A.aLe(B.A(x.y,x.dj)),null,null)}}
A.Wl.prototype={
p(d){var w,v=this,u=v.a4p(),t=v.CW
t.toString
t=v.ab6(t.au(0,v.gfp().gq(0)))
w=v.ab6(u)
v.a.toString
return new A.L2(new A.a7K(t,w,null),u,null)},
ab6(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.af(w).i("ab<1,eb>")
w=B.Q(new B.ab(w,new A.bfY(this,d),v),v.i("av.E"))
return d.aQF(w,this.cy)},
a4p(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.UL(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aQU(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aQj(new A.EO(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaz1(),t.c,t.d))}return r},
az2(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gafC())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bfW(v))
return}v.J(new A.bfX(v,e))},
lu(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a4p(),new A.bfZ(w)))}}
A.pQ.prototype={
Xh(d,e,f){var w,v,u,t,s,r,q=B.ae(d.f,e.f,f),p=B.ae(d.r,e.r,f),o=B.ae(d.w,e.w,f),n=B.ae(d.x,e.x,f),m=B.ae(d.y,e.y,f),l=B.ae(d.z,e.z,f),k=B.a0(d.as,e.as,f),j=e.a
j=A.a5Q(B.a1N(d.a.b,j.b,f),j.a)
w=A.bFu(d.at,e.at,f)
v=A.bFx(d.c,e.c,f)
u=A.bFz(d.d,e.d,f)
t=A.bHu(d.e,e.e,f)
s=A.kC(d.ch,e.ch,f,A.c6A(),x.cz)
s.toString
r=A.kC(d.CW,e.CW,f,A.c6z(),x.J)
r.toString
u=A.byz(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
Vn(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byz(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aQU(d,e,f,g){return this.Vn(null,null,d,e,f,g,null)},
aQj(d){var w=null
return this.Vn(w,d,w,w,w,w,w)},
aQF(d,e){var w=null
return this.Vn(d,w,w,w,w,w,e)},
gbw(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.eb.prototype={
ar_(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.oX(n.a,new A.aLd())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.M)(v),++p){o=v[p]
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
acX(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLc(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aQq(d){return this.acX(d,null)},
aQs(d){return this.acX(null,d)},
gbw(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OC.prototype={
gbw(){return[this.a]}}
A.a1v.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mL.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.L6.prototype={
gbw(){return[!1,this.b,this.c,!0]}}
A.yx.prototype={
gbw(){return[this.a,this.b,this.c]}}
A.aKZ.prototype={
L(){return"LabelDirection."+this.b}}
A.a5S.prototype={
gbw(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.EO.prototype={
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7L.prototype={
gbw(){return[4,C.fN,16,D.xT,0,120,A.c6C(),!1,!1,!1,0,C.I,A.c6B()]}}
A.n7.prototype={
gbw(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qi.prototype={}
A.rA.prototype={
gbw(){return[this.a,this.b,C.bs,C.w,null]}}
A.tA.prototype={
gbw(){return[this.a,this.b]}}
A.GH.prototype={
gbw(){return[this.a]}}
A.OD.prototype={}
A.zi.prototype={
hi(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.Xh(v,w,d)}}
A.ahY.prototype={}
A.ahZ.prototype={}
A.aib.prototype={}
A.alp.prototype={}
A.als.prototype={}
A.an7.prototype={}
A.an8.prototype={}
A.an9.prototype={}
A.anb.prototype={}
A.anc.prototype={}
A.and.prototype={}
A.ane.prototype={}
A.arK.prototype={}
A.ato.prototype={}
A.aLe.prototype={
UL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yu
u=new A.zn(d,x.y)
t=this.a
if(t.aD(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zj(s,r,q,t,!0)}w=null
try{w=C.b.oX(d,new A.aLf())}catch(p){return D.yu}v=null
try{v=C.b.oX(w.a,new A.aLg())}catch(p){return D.yu}o=v.a
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
gbw(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.ana.prototype={}
A.aLh.prototype={
ie(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gabz(0)){v=a3.b
u=v.a
v=v.b
$.an()
a3.a.iP(new B.J(0,-40,0+(u+40),-40+(v+40)),B.aX())
a3.aPj(new B.J(0,0,u,v))}d.a_W(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t)d.aS6(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aS2(a3,q,a4)
d.aS7(a3,q,a4)
d.alK(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.X(o)
if(n.gt(o)!==p.length)throw B.e(B.dQ("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vw(q,i,j,k))}}d.aSe(a3,s,a4)
if(w.gabz(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aSc(a2,a3,v,f,new A.GH(g),a4)}},
aS2(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.by_(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.M)(n),++v){u=n[v]
t=p.Zq(o,e,u,f)
s=p.aja(o,e,t,u,f)
r=p.Zs(o,e,t,u,f,!0)
q=p.aj9(o,e,t,u,f)
p.aS5(d,s,p.Zp(o,e,t,u,f,!0),f,e)
p.aS_(d,q,r,f,e)
p.aS3(d,t,e)
p.aS1(d,t,e,f)}},
aS6(b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=b0.b,a5=b1.ch,a6=a5[b2.a],a7=a5[b2.b],a8=A.by_(a6.a),a9=A.by_(a7.a)
if(a8.length!==a9.length)throw B.e(B.bK("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a5=b0.a,w=a5.a,v=b2.c,u=b2.d,t=$.bX.a,s=0+a4.a,r=0+a4.b,q=v==null,p=u!=null,o=0;o<a8.length;++o){n=a8[o]
m=a9[o]
l=B.af(m).i("cH<1>")
k=B.Q(new B.cH(m,l),l.i("av.E"))
j=a3.Zq(a4,a6,n,b3)
i=a3.Zr(a4,a7.aQs(k),k,b3,j)
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
m=a3.fc(h,a4,b3)
l=a3.dG(g,a4,b3)
d=a3.fc(f,a4,b3)
a0=a3.dG(e,a4,b3)
a1=a3.r
a1===$&&B.a()
if(p){a1.r=C.C.gq(0)
a1.seT(u.mP(0,new B.J(m,l,d,a0)))}else{a1.r=(q?C.J:v).gq(0)
a1.seT(null)}$.an()
a2=new B.mO(C.dB,C.bh,C.e7,C.ex,C.dV).en()
m=B.dN(new B.J(0,0,s,r))
l=$.bX.b
if(l===$.bX)B.S(B.vt(t))
l=l.TileMode.Clamp
w.saveLayer.apply(w,[a2,m,null,null,l])
a2.delete()
a5.fV(i,a3.r)
w.restore()}},
aS7(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.Zw(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fP)&&t.$2(q,e)){p=this.fc(q.a,w,f)
o=this.dG(q.b,w,f)
n.$4(q,p/v*100,e,r).adF(s,q,new B.r(p,o))}}},
aSe(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.h4(b3,new A.aLk())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.M)(b3),++o){n=b3[o]
m=n.a
l=b1.Zw(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fc(j.a,w,b4)
g=b1.dG(j.b,w,b4)
f=i.b
e=f.a
d=B.co()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.S(B.rz(d.a))
a0=f.b*2}else a0=0
a1=Math.min(s,Math.max(r,B.lA(p.$2(m,k))))
a2=Math.min(s,Math.max(r,B.lA(q.$2(m,k))))
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
if(a6!=null){f.r=C.C.gq(0)
f.seT(a6.mP(0,b0))}else{if(a4==null)a4=C.J
f.r=a4.gq(a4)
f.seT(null)}a4=a9.c
f.c=a4
if(a4===0){f.seT(null)
a4=B.c3(f.r)
f.r=B.aH(0,a4.A()>>>16&255,a4.A()>>>8&255,a4.A()&255).gq(0)}b2.Dz(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.S(B.rz(d.a))
f.adF(t,j,new B.r(h,g))}}},
Zr(d,e,f,g,h){var w=this.ajb(d,e,f,g,h)
return w},
Zq(d,e,f,g){return this.Zr(d,e,f,g,null)},
ajb(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?B.cG($.an().r):a5,f=J.X(a3),e=f.gt(a3),d=i.fc(f.h(a3,0).a,a1,a4),a0=i.dG(f.h(a3,0).b,a1,a4)
if(h){g.aA(new B.fc(d,a0))
if(e===1)g.aA(new B.cs(d,a0))}else g.aA(new B.cs(d,a0))
for(h=g.e,w=a2.y,v=a2.z,u=C.v,t=1;t<e;t=o,u=j){s=i.fc(f.h(a3,t).a,a1,a4)
r=i.dG(f.h(a3,t).b,a1,a4)
q=t-1
p=i.fc(f.h(a3,q).a,a1,a4)
q=i.dG(f.h(a3,q).b,a1,a4)
o=t+1
n=o<e
m=i.fc(f.h(a3,n?o:t).a,a1,a4)
l=i.dG(f.h(a3,n?o:t).b,a1,a4)
k=w?v:0
n=(m-p)/2*k
l=(l-q)/2*k
j=new B.r(n,l)
s=new B.M7(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.d
if(r!=null)s.il(r)}return g},
Zs(d,e,f,g,h,i){var w,v,u,t,s=this
$.an()
w=B.byx(f)
v=J.X(g)
u=s.fc(v.h(g,v.gt(g)-1).a,d,h)
t=d.b
w.aA(new B.cs(u,t))
u=s.fc(v.h(g,0).a,d,h)
w.aA(new B.cs(u,t))
w.aA(new B.cs(s.fc(v.h(g,0).a,d,h),s.dG(v.h(g,0).b,d,h)))
w.aA(new B.pp())
return w},
aja(d,e,f,g,h){return this.Zs(d,e,f,g,h,!1)},
Zp(d,e,f,g,h,i){var w,v,u,t=this
$.an()
w=B.byx(f)
v=J.X(g)
u=t.fc(v.h(g,v.gt(g)-1).a,d,h)
w.aA(new B.cs(u,0))
u=t.fc(v.h(g,0).a,d,h)
w.aA(new B.cs(u,0))
w.aA(new B.cs(t.fc(v.h(g,0).a,d,h),t.dG(v.h(g,0).b,d,h)))
w.aA(new B.pp())
return w},
aj9(d,e,f,g,h){return this.Zp(d,e,f,g,h,!1)},
aS5(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.c
u===$&&B.a()
u=r.dG(u.b,w,g)
t=h.d
t===$&&B.a()
t=r.fc(t.a,w,g)
s=r.r
s===$&&B.a()
A.byV(s,q.b,q.c,new B.J(v,u,t,w.b))
d.a.fV(e,r.r)},
aS_(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
if(!q.a)return
w=d.b
v=h.b
v===$&&B.a()
v=r.fc(v.a,w,g)
u=h.d
u===$&&B.a()
u=r.fc(u.a,w,g)
t=h.e
t===$&&B.a()
t=r.dG(t.b,w,g)
s=r.r
s===$&&B.a()
A.byV(s,q.b,q.c,new B.J(v,0,u,t))
d.a.fV(e,r.r)},
aS3(d,e,f){var w=f.db,v=w.a,u=v.A()
if((u>>>24&255)/255===0)return
if(!new B.Ou(e,!1,B.b([],x.C)).u())return
u=this.f
u===$&&B.a()
u.d=f.at?C.iv:C.e7
u.e=C.ex
u.r=v.gq(0)
u.seT(null)
u.c=f.x
u.r=v.gq(0)
$.lE()
u.z=new B.zs(C.av,w.c*0.57735+0.5)
d.a.fV(B.byy(A.aBO(e,f.cy),w.b),this.f)},
aS1(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
q===$&&B.a()
q.d=f.at?C.iv:C.e7
q.e=C.ex
q=f.b
q===$&&B.a()
q=s.fc(q.a,r,g)
w=f.c
w===$&&B.a()
w=s.dG(w.b,r,g)
v=f.d
v===$&&B.a()
v=s.fc(v.a,r,g)
u=f.e
u===$&&B.a()
u=s.dG(u.b,r,g)
t=s.f
A.byV(t,f.r,f.w,new B.J(q,w,v,u))
t.z=null
t.c=f.x
A.bWK(t)
d.a.fV(A.aBO(e,f.cy),s.f)},
aSc(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bLJ(b1),b3=J.X(b2)
if(b3.gt(b2)!==b1.length)throw B.e(B.dQ("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lE().ZX(b4,u.b)
s=u.a
r=w.k(0,C.iY)?new B.kw(1):w
q=new B.tx(new B.fT(s,a8,a8,C.bg,a8,a8,a8,a8,a8,a8,t),C.bs,C.w,r,a8,a8,a8,a8,C.bC,a8)
q.afW(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.M)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbU(w)}b3=a7.fc(b7.a,a9,b9)
t=a7.dG(b7.b,a9,b9)
l=p+C.fN.gev()
k=o+(w-1)*4+(C.fN.gd0(0)+C.fN.gd4(0))
j=t-k-16
i=a7.ZY(b3,l,D.xT,0)
b3=i+l
w=j+k
h=new B.aW(4,4)
g=B.FZ(new B.J(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bLI(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lE().Kr(new B.G(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lE().Kr(new B.G(t,w),0)
if(!C.I.k(0,C.I)){s=a7.Q
s===$&&B.a()
s.r=C.C.gq(0)
s.c=0}b5.VY(0,new A.aLi(a7,b5,g),a0,d,new B.G(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.M)(b0),++n){q=b0[n]
a5=A.bZs(q.r,q.w)
A:{if(D.Ek===a5){a6=a3
break A}if(D.El===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.VY(0,new A.aLj(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.G(t,w))
a6=q.b.a.c
a4=a4+a6.gbU(a6)+4}},
Zw(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fc(v[0].a,e,f)
return this.fc(v[v.length-1].a,e,f)-w},
WE(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.ajC(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.h4(t,new A.aLl())
return t.length===0?null:t},
ajC(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
if(q.k(0,D.fP))continue
p=u.$2(e,new B.r(this.fc(q.a,d,h),this.dG(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga3(o)
s.toString
return new A.qi(s,f,g,C.b.i8(w,v),v.a,v.b)}else return null}}
A.vw.prototype={}
A.a7K.prototype={
bm(d){var w,v=this.e,u=B.by(d,null,x.w).w.gcO(),t=new A.aLh()
t.a18()
$.an()
w=B.aX()
w.b=C.aZ
t.f=w
w=B.aX()
w.b=C.bh
t.r=w
w=B.aX()
w.b=C.aZ
t.w=w
w=B.aX()
w.b=C.bh
w.r=C.J.gq(0)
w.a=D.a0t
t.x=w
w=B.aX()
w.b=C.aZ
w.r=C.C.gq(0)
t.y=w
w=B.aX()
w.b=C.bh
w.r=C.n.gq(0)
t.z=w
w=B.aX()
w.b=C.aZ
w.r=C.J.gq(0)
w.c=1
t.Q=w
t=new A.abR(this.d,v,u,t,d,C.bg,new B.bp(),B.aK(x.v))
t.bi()
t.YS(v.cx)
t.af3()
return t},
bx(d,e){e.sip(0,this.d)
e.sYD(this.e)
e.scO(B.by(d,null,x.w).w.gcO())
e.B=d
e.bc()}}
A.abR.prototype={
sip(d,e){if(this.aC.k(0,e))return
this.aC=e
this.bc()},
sYD(d){var w=this
if(w.i6.k(0,d))return
w.i6=d
w.a0G(d.cx)
w.bc()},
scO(d){if(this.cX.k(0,d))return
this.cX=d
this.bc()},
aM(d,e){var w,v,u=this,t=d.gdH(0),s=t.a
J.b_(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fW.ie(w,new A.a20(t,v),new A.vN(u.aC,u.i6,u.cX,x.o))
s.restore()},
ZR(d){var w=this,v=w.gC(0)
return new A.OD(w.fW.WE(d,v,new A.vN(w.aC,w.i6,w.cX,x.o)))}}
A.NH.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a20.prototype={
aPj(d){this.a.a.clipRect(B.dN(d),$.nM()[1],!0)
return null},
adN(d,e){d.aM(this.a,e)},
VY(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.b_(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lE()
s.YB(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
Dz(d,e,f,g){var w=B.cG($.an().r)
w.aA(new B.fc(d.a,d.b))
w.aA(new B.cs(e.a,e.b))
this.a.fV(A.aBO(w,g),f)}}
A.zn.prototype={
gbw(){return[this.a]}}
A.anl.prototype={}
A.a2a.prototype={}
A.b2z.prototype={
Kr(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aX9(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aW(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aW(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aW(v,v)
s=d.d
return new B.d3(w,u,t,s.a>v||s.b>v?new B.aW(v,v):s)},
aXa(d,e){var w,v
if(d==null)return D.a0E
w=d.b
v=e/2
return d.aQv(w>v?v:w)},
OH(d,e){var w,v=Math.max(C.d.cz(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b_d(w)},
b_d(d){if(d<1)return this.aJf(d)
return this.a88(d)},
aJf(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a88(d*q)/q},
a88(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aO(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
ajq(d){if(d>=1)return 1
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
ZX(d,e){var w,v,u=d.P(x.f0)
if(u==null)u=C.j2
w=e.a?u.w.c6(e):e
v=B.b2(d,C.vL)
v=v==null?null:v.ay
return v===!0?w.c6(C.mn):w},
aji(d,e,f,g){var w=C.d.af(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qk)","D(ez)","~(v,fG)","F(eb,v)","R<~>()","F(F,qk)","bM(F,tz)","pD(F)","v(qi,qi)","Iv(od)","Ia(B,bH)","Ju(oe)","vB(@)","wy(@)","eb(F)","CM(@)","aj(F,tz)","uX(dF<uX>)","Ec(dF<aFQ>)","F(vB)","F(wy)","wP(B,bH)","Bi(z)","~()","qk(@)","~(hv,L8?)","xF(@)","F(ip)","D(fG)","~(v,ip)","~(@)","jV(nV)","c(nV)","jV(bG<v,F>)","jV(F)","nV(jV)","~(hv,OD?)","eb(eb)","lU(wn<lU>)","zi(@)","R<oe>(c5<oe>)","tA(v)","uY(ez,F,eb,v)","rA(n7)","D(eb)","v(vw,vw)","F(fG)","R<od>(c5<od>)","v(v,v,F)","fG(fG,fG,F)","ip(ip,ip,F)","mK(mK,mK,F)","D3?(fG,v,ip,v)","E(fG)","c(F,tz)","ez(ez,ez,F)","D(F)","n4(n4,n4,F)","nr(nr,nr,F)","kV(kV,kV,F)","lm(lm,lm,F)","f(kV)","f(lm)","eb(eb,eb,F)","mL(mL,mL,F)","uY(ez,F,eb,v{size:F?})","D(ez,eb)","F(r,r)","u<tA>(eb,u<v>)","y8(z)","u<rA>(u<n7>)","E(n7)","yv(en<B?>)"])
A.aFM.prototype={
$1(d){var w=B.cZ(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qk(J.al(v==null?"":v),A.p6(w.h(0,"revenue_net")),A.p6(w.h(0,"expense_net")),A.p6(w.h(0,"result_net")))},
$S:z+24}
A.aFN.prototype={
$1(d){var w,v,u,t=B.cZ(x.f.a(d),x.N,x.z),s=B.ac(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.al(r==null?"unbekannt":r)
w=B.ac(t.h(0,"code"))
v=A.p6(t.h(0,"gross"))
u=B.b5(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vB(s,r,w,v,u,A.p6(t.h(0,"avg_basket")))},
$S:z+12}
A.aFO.prototype={
$1(d){var w,v=B.cZ(x.f.a(d),x.N,x.z),u=B.ac(v.h(0,"product_id")),t=v.h(0,"name")
t=J.al(t==null?"unbekannt":t)
w=B.b5(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wy(u,t,w,A.p6(v.h(0,"gross")))},
$S:z+13}
A.aG4.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.X(d)
v=w.h(d,"code")
v=J.al(v==null?"":v)
u=w.h(d,"name")
u=J.al(u==null?"":u)
t=w.h(d,"direction")
return new A.CM(v,u,J.al(t==null?"expense":t),A.ug(w.h(d,"net")),A.ug(w.h(d,"tax")),A.ug(w.h(d,"gross")))},
$S:z+15}
A.buc.prototype={
$1(d){return new A.uX(d.al($.bW(),x.A))},
$S:z+17}
A.bud.prototype={
$1(d){return new A.Ec(d.al($.bQm(),x.D))},
$S:z+18}
A.bw_.prototype={
$1(d){return E.aFP()},
$S:z+38}
A.bue.prototype={
$1(d){var w=d.al($.xr(),x.P)
return d.al($.awE(),x.a).FY(w)},
$S:z+40}
A.bub.prototype={
$1(d){var w=d.al($.xr(),x.P)
return d.al($.awE(),x.a).FT(w)},
$S:z+47}
A.bua.prototype={
$1(d){return this.aj0(d)},
aj0(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.k(d.al($.bW(),x.A).fB("finance_balance_kpis",t),$async$$1)
case 3:s=r.cZ(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:215}
A.aFL.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awE(),x.a).pG(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFK.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.k(u.b.r.aI(0,$.awE(),x.a).LA(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aG2.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bwR()
if(s.e==null)B.S(B.a_(y.b))
s.gce().c7(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFV.prototype={
$0(){return this.a.Jp(this.b,this.c)},
$S:0}
A.aFW.prototype={
$0(){return this.a.Bj(this.b,this.c)},
$S:0}
A.aFX.prototype={
$0(){var w=x.z
return B.bb(this.a,!1).dT(B.dH(new A.aFU(),null,w),w)},
$S:0}
A.aFU.prototype={
$1(d){return F.Di},
$S:z+69}
A.aFY.prototype={
$0(){return B.oi(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFZ.prototype={
$0(){var w=this
return w.a.Bk(w.b,w.c,w.d)},
$S:0}
A.aG1.prototype={
$0(){return D.at1},
$S:109}
A.aG0.prototype={
$2(d,e){return new A.Ia(B.j(d),null)},
$S:z+10}
A.aG_.prototype={
$1(d){return new A.Ju(d,null)},
$S:z+11}
A.aFT.prototype={
$1(d){var w=null,v=this.a,u=$.dO()
v=B.i("Die Finanzauswertung f\xfcr "+u.ap(v.a)+" \u2013 "+u.ap(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w,w)
u=this.b
return B.lH(B.b([B.dJ(C.cY,w,w,new A.aFR(u),w,w),B.dY(F.vn,new A.aFS(u),B.dC(C.m,C.h,w,w,w,w,w))],x.p),w,v,F.vo)},
$S:55}
A.aFR.prototype={
$0(){B.bb(this.a,!1).dj(!1)
return null},
$S:0}
A.aFS.prototype={
$0(){B.bb(this.a,!1).dj(!0)
return null},
$S:0}
A.biG.prototype={
$0(){var w=this.a.aI(0,$.xr().ghR(),x.V),v=E.aFP()
w.uc(0,v)
return v},
$S:0}
A.biH.prototype={
$0(){var w=this.a.aI(0,$.xr().ghR(),x.V),v=new B.b9(Date.now(),0,!1),u=new E.lU(B.bP(B.aZ(v),1,1,0,0,0,0),v)
w.uc(0,u)
return u},
$S:0}
A.biI.prototype={
$0(){return this.a.IM(this.b,this.c)},
$S:0}
A.biF.prototype={
$2(d,e){return new B.oN(B.V(d).aPR(B.V(d).ax.aQK(C.h,C.m)),e,null)},
$S:1023}
A.bpm.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.dr(),s=A.Om(!1,C.lh,"Umsatz 7 %",t.ap(u.a),w),r=A.Om(!1,C.lh,"Umsatz 19 %",t.ap(u.b),w),q=A.Om(!0,D.abx,"Umsatz netto",t.ap(u.c),w),p=A.Om(!1,D.abw,"Aufwand",t.ap(u.d),w),o=u.e,n=t.ap(o)
return E.aIi(1.7,B.b([s,r,q,p,A.Om(!0,C.nT,"Ergebnis",n,o<0?C.aa:C.ac),A.Om(!1,C.fR,"USt-Saldo",t.ap(u.f-u.r),w)],x.p),v,12,12,C.ii,!0)},
$S:121}
A.aKY.prototype={
$0(){return D.asZ},
$S:109}
A.aKX.prototype={
$2(d,e){var w=null
return B.bm(C.aa,B.i("KPIs konnten nicht geladen werden: "+B.j(d),w,w,w,w,B.y(C.h,13,C.l),w,w,w),C.fg,w,C.D,w,w,3)},
$S:182}
A.aKW.prototype={
$1(d){return new A.Iv(d,null)},
$S:z+9}
A.bfK.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.dr(),i=j.ap(k.c),h=l.w,g=l.d,f=B.af(g).i("ab<1,F>"),e=f.i("av.E"),d=B.Q(new B.ab(g,new A.bfz(),f),e)
i=A.jN(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.ap(r.b)
w=B.Q(new B.ab(g,new A.bfA(),f),e)
d=A.jN(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.ap(k.e)
w=B.Q(new B.ab(g,new A.bfB(),f),e)
k=A.jN(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.aj(h.b,1)
v=B.Q(new B.ab(g,new A.bfC(),f),e)
w=A.jN(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.aj(h.a,1)
u=B.Q(new B.ab(g,new A.bfD(),f),e)
v=A.jN(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.aj(r.c,1)
t=B.Q(new B.ab(g,new A.bfE(),f),e)
u=A.jN(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.aj(h.c,1)
s=B.Q(new B.ab(g,new A.bfF(),f),e)
t=A.jN(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.ap(h.d)
s=B.Q(new B.ab(g,new A.bfG(),f),e)
h=A.jN(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.ap(l.r.d)
m=B.Q(new B.ab(g,new A.bfH(m),f),e)
m=A.jN(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.ap(l)
l=B.Q(new B.ab(g,new A.bfI(l),f),e)
l=A.jN(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.aj(j,1)
j=B.Q(new B.ab(g,new A.bfJ(j),f),e)
return E.aIi(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jN(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.ii,!0)},
$S:121}
A.bfz.prototype={
$1(d){return d.b},
$S:z+0}
A.bfA.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bfB.prototype={
$1(d){return d.d},
$S:z+0}
A.bfC.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfD.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bfE.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bfF.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bfG.prototype={
$1(d){return d.d},
$S:z+0}
A.bfH.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bfI.prototype={
$1(d){return this.a},
$S:z+0}
A.bfJ.prototype={
$1(d){return this.a},
$S:z+0}
A.bfL.prototype={
$0(){return A.bAO(this.b,1.45,new A.Uh(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bfM.prototype={
$0(){return A.bAO(this.b,1.6,new A.Uy(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.btj.prototype={
$1(d){var w=this,v=null,u=B.ax(16),t=x.p,s=B.b([B.ah(B.b([B.au(B.i(w.a,v,v,v,v,B.bz(C.h,18,C.o),v,v,v),1),B.fa(v,v,D.adO,v,v,new A.bti(d),v,v,"Schlie\xdfen",v)],t),C.j,v,C.f,C.i,0,v,v)],t)
C.b.K(s,B.b([B.i(w.b,v,v,v,v,B.y(C.p,12,C.aD),v,v,v),C.G],t))
s.push(C.t)
s.push(B.bN(new B.mJ(w.c,w.d,v),v,17976931348623157e292))
return B.a55(v,C.n,new B.ad(C.aj,B.a6(s,C.z,C.f,C.E),v),v,v,v,C.fO,C.v4,v,new B.d_(u,C.I),v)},
$S:1024}
A.bti.prototype={
$0(){return B.bb(this.a,!1).eQ()},
$S:0}
A.bfN.prototype={
$0(){var w=this.a,v=B.b4(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bAO(this.b,2.4,new A.YN(w.w,w.y,w.z,null),C.b.cm(u," \xb7 "),v)
return null},
$S:0}
A.bor.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.bos.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bot.prototype={
$1(d){return A.aLc(null,1.4,null,C.aa,0.35,D.aia,D.Eb,null,!1,!1,!1,!1,D.Fz,!1,10,D.Z2,!0,C.lw,B.b([new A.ez(0,d),new A.ez(this.a,d)],x.U))},
$S:z+14}
A.b6j.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6l.prototype={
$2(d,e){var w=null
return B.i(this.a.aKv(d),w,w,w,w,B.y(C.p,10,C.H),w,w,w)},
$S:z+16}
A.b6m.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.vc
return new B.ad(C.l0,B.i(C.c.cU(this.a[v].a,5),w,w,w,w,B.y(C.p,9,C.H),w,w,w),w)},
$S:z+6}
A.b6k.prototype={
$1(d){return D.a9Y},
$S:z+7}
A.b7j.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7k.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7l.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b7m.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.vc
return new B.ad(C.l0,B.i(this.a[v],w,w,w,w,B.y(C.h,12,C.o),w,w,w),w)},
$S:z+6}
A.bgl.prototype={
$1(d){return d.d},
$S:z+19}
A.bgm.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bqE.prototype={
$1(d){return d.d},
$S:z+20}
A.bqF.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b4K.prototype={
$0(){return D.at7},
$S:109}
A.b4J.prototype={
$2(d,e){return new A.wP("Bilanzdaten nicht verf\xfcgbar: "+B.j(d),null)},
$S:z+21}
A.b4I.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.bm(m,B.a6(B.b([B.i("Noch keine Bilanzdaten erfasst.",m,m,m,m,B.y(C.h,14,C.H),m,m,m),C.G,B.i("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,m,B.y(C.p,12.5,C.l),m,m,m),C.t,B.ku(C.cj,B.b([B.fP(C.F7,D.aGW,new A.b4C(w,v),m),B.fP(D.adq,D.aFS,new A.b4D(w,v),m)],u),C.dy,8,8)],u),C.z,C.f,C.i),C.a8,m,C.D,m,m,3)}w=new A.b4L(d)
t=C.b.fI(n.a.e.d,0,new A.b4E())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.js(new A.b4F(new A.b4M(w),r,w,s))
v=J.X(d)
u=B.j(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.a6(B.b([w,C.G,B.ah(B.b([B.au(B.i("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,m,B.y(C.p,11,C.l),m,m,m),1),B.qf(D.aeF,D.aGc,new A.b4G(q,p),m),B.qf(D.aef,D.aFY,new A.b4H(q,p,d),m)],o),C.j,m,C.f,C.i,0,m,m)],o),C.a9,C.f,C.i)},
$S:223}
A.b4C.prototype={
$0(){return A.avY(this.a,this.b,null)},
$S:0}
A.b4D.prototype={
$0(){return A.avV(this.a,this.b)},
$S:0}
A.b4L.prototype={
$1(d){var w=B.b5(J.a2(this.a,d))
return w==null?null:w},
$S:1025}
A.b4M.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.aj(v,1)
w=B.b4(w,".",",")+" %"}return w},
$S:34}
A.b4E.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4F.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jN(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.i2,o.$1("liquidity1_pct")),m=A.jN(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.i2,o.$1("liquidity2_pct")),l=A.jN(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.i2,o.$1("liquidity3_pct"))
o=A.jN(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.i2,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.aj(w,1)
w=B.b4(w,".",",")+" %"}w=A.jN(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.i2,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.dr()
v=u.ap(v)
return E.aIi(p,B.b([n,m,l,o,w,A.jN(s,s,!1,"Bilanzsumme",!1,"EK "+u.ap(t.d),s,s,s,C.i2,v)],x.p),q,12,12,C.ii,!0)},
$S:121}
A.b4G.prototype={
$0(){return A.avV(this.a,this.b)},
$S:0}
A.b4H.prototype={
$0(){return A.avY(this.a,this.b,this.c)},
$S:0}
A.bth.prototype={
$1(d){return new A.Bi(this.a,new A.btg(this.b),this.c,null)},
$S:z+22}
A.btg.prototype={
$0(){var w=this.a,v=$.bwQ()
if(w.e==null)B.S(B.a_(y.b))
w.gce().c7(v)},
$S:0}
A.b4w.prototype={
$0(){},
$S:0}
A.b4x.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4y.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4A.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.k(B.un(u.b,B.bP(2024,1,1,0,0,0,0),null,r,new B.b9(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4z(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4z.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4B.prototype={
$0(){return B.bb(this.a,!1).eQ()},
$S:0}
A.b4N.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a9(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b4O.prototype={
$1(d){return new A.xF(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayD.prototype={
$1(d){return d.e},
$S:z+27}
A.ayE.prototype={
$2(d,e){return d+e},
$S:46}
A.ayG.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayI.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayJ.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eO(t,r)
s=s.x
s===$&&B.a()
w.eO(t,s)
u.adN(v.d,v.e)},
$S:0}
A.aym.prototype={
$1(d){return 0},
$S:1026}
A.ayl.prototype={
$2(d,e){return B.eU(C.bU,this.a.alp(e),C.r,C.bj,null)},
$S:1027}
A.b_2.prototype={
$1(d){return d.a},
$S:z+31}
A.b_3.prototype={
$1(d){return d.b},
$S:z+32}
A.b_4.prototype={
$1(d){return new A.jV(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_5.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mG||v===D.dO))t=1-t
return new A.jV(d,t*w.d)},
$S:z+34}
A.b_6.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goD(),p=d.a
r.goD()
r=$.lE()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.aj(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.aj(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.aj(v/1000,1)
t="K"}else{u=C.d.aj(v,r.ajq(Math.abs(s.b-s.c)))
t=""}if(C.c.hs(u,".0"))u=C.c.a1(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.nV(d,q.c.b.$2(p,new A.tz(u+t,s.e)))},
$S:z+35}
A.aVl.prototype={
$1(d){this.a.l6(new A.a5V(d))},
$S:170}
A.aVm.prototype={
$1(d){this.a.l6(new A.a5W(d))},
$S:42}
A.aVn.prototype={
$1(d){this.a.l6(new A.a5X(d))},
$S:28}
A.aVo.prototype={
$0(){this.a.l6(D.a2n)},
$S:0}
A.aVp.prototype={
$1(d){this.a.l6(new A.Ne())},
$S:44}
A.aVq.prototype={
$1(d){this.a.l6(new A.a6_(d))},
$S:40}
A.aVr.prototype={
$0(){this.a.l6(D.a2o)},
$S:0}
A.aVs.prototype={
$1(d){this.a.l6(new A.Nh(d))},
$S:87}
A.aVt.prototype={
$1(d){this.a.l6(new A.a5U(d))},
$S:174}
A.aVu.prototype={
$1(d){this.a.l6(new A.a5T(d))},
$S:175}
A.aVv.prototype={
$1(d){return this.a.l6(new A.Nc(d))},
$S:176}
A.aVw.prototype={
$1(d){return this.a.l6(new A.a5Y(d))},
$S:65}
A.aVx.prototype={
$1(d){return this.a.l6(new A.Nf(d))},
$S:59}
A.bfY.prototype={
$1(d){var w=this.a.db.h(0,C.b.i8(this.b.ch,d))
return d.aQq(w==null?B.b([],x.t):w)},
$S:z+37}
A.bfW.prototype={
$0(){var w=this.a
C.b.a9(w.cy)
w.db.a9(0)},
$S:0}
A.bfX.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.h4(w,new A.bfV())
v=this.a
u=v.db
u.a9(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a9(q)
q.push(new A.GH(w))},
$S:0}
A.bfV.prototype={
$2(d,e){return C.d.cD(e.b,d.b)},
$S:z+8}
A.bfZ.prototype={
$1(d){return new A.zi(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aLd.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.bu1.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga3(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bFy(t?A.bAC(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tA(w,new A.yx(!0,A.bBo(),new A.bu0(v)))},
$S:z+41}
A.bu0.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUg(A.bAC(d,e,f),w,A.c29(d,e,f))},
$S:z+42}
A.btZ.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga3(t.a)
u=t==null?u.r:t
w=B.j3(v,v,u==null?D.du:u,v,v,v,v,v,v,v,v,14,v,v,C.H,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rA(C.d.j(d.b),w)},
$S:z+43}
A.aLf.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLg.prototype={
$1(d){return!d.k(0,D.fP)},
$S:z+1}
A.aLk.prototype={
$2(d,e){return C.d.cD(e.c.b,d.c.b)},
$S:z+45}
A.aLi.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eO(v,t)
u=u.Q
u===$&&B.a()
w.eO(v,u)},
$S:0}
A.aLj.prototype={
$0(){this.a.adN(this.b,this.c)},
$S:0}
A.aLl.prototype={
$2(d,e){return C.d.cD(d.w,e.w)},
$S:z+8}
A.ayw.prototype={
$1(d){return d.gdt(0)},
$S:z+46}
A.ayx.prototype={
$2(d,e){return d+e},
$S:46}
A.ayA.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.iU(v,B.af(v).i("iU<1>")).aw(0,new A.ayB(w,this.a/(u+1),this.c))},
$S:0}
A.ayB.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+2}
A.ayy.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+2}
A.ayz.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIh.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1028}
A.aBP.prototype={
$1(d){return d},
$S:1029};(function aliases(){var w=A.L1.prototype
w.a_W=w.ie
w.alK=w.aS8
w.alL=w.adG
w=A.TS.prototype
w.aol=w.l
w=A.Lb.prototype
w.a_X=w.ie
w=A.Gf.prototype
w.a0G=w.YS})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c5M","bUd",72)
var q
v(q=A.TU.prototype,"gaEq","aEr",23)
v(q,"gaDt","I1",4)
v(q,"gaEa","Ic",4)
u(A.TV.prototype,"gase","asf",25)
t(A,"c4y",3,null,["$3"],["bRz"],49,0)
t(A,"c4z",3,null,["$3"],["bRA"],50,0)
t(A,"c4A",3,null,["$3"],["bRB"],51,0)
t(A,"c4C",4,null,["$4"],["c5p"],52,0)
w(A,"c4B","c5o",53)
s(A,"bAS","c5q",54)
t(A,"c4t",3,null,["$3"],["bUh"],55,0)
w(A,"a00","c7K",56)
w(A,"aw0","c5t",7)
t(A,"c4v",3,null,["$3"],["bV4"],57,0)
t(A,"c4x",3,null,["$3"],["c_l"],58,0)
t(A,"c4u",3,null,["$3"],["bV3"],59,0)
t(A,"c4w",3,null,["$3"],["c_k"],60,0)
w(A,"ceX","bV2",61)
w(A,"ceY","c_j",62)
r(A.YB.prototype,"ga4n","axM",30)
u(A.Wl.prototype,"gaz1","az2",36)
t(A,"c6A",3,null,["$3"],["bVv"],63,0)
t(A,"c6z",3,null,["$3"],["bRC"],64,0)
w(A,"c6D","c7L",1)
t(A,"bM5",4,null,["$5$size","$4"],["bKy",function(d,e,f,g){return A.bKy(d,e,f,g,null)}],65,0)
s(A,"bBo","c7J",66)
s(A,"bM6","c4g",67)
s(A,"bM9","c5w",68)
s(A,"bM8","c5s",3)
s(A,"bM7","c5r",3)
w(A,"c6C","bLJ",70)
w(A,"c6B","bLI",71)
t(A,"a05",3,null,["$3"],["c6y"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.H,[A.a7x,A.ah3,A.amt,A.J4,A.Ju,A.ah1,A.Ia,A.Iv,A.alL,A.an0,A.V7,A.YN,A.Uh,A.Uy,A.anv,A.ajL,A.Ch,A.atl,A.wP,A.L2,A.AI])
u(B.B,[A.uX,A.Ec,A.bh,A.aia,A.ai0,A.ai2,A.ai3,A.ahT,A.alv,A.ai6,A.ai4,A.ayS,A.atp,A.ayF,A.ai1,A.Lb,A.a6z,A.tz,A.arM,A.arL,A.ahS,A.alu,A.ez,A.alr,A.alt,A.apU,A.amk,A.au7,A.als,A.al5,A.alq,A.ayk,A.bfT,A.ayn,A.ahP,A.nV,A.aln,A.alo,A.vN,A.hv,A.an8,A.anb,A.ahY,A.aib,A.ahZ,A.alp,A.ane,A.anc,A.ato,A.arK,A.aLe,A.ana,A.vw,A.a20,A.anl,A.a2a,A.b2z])
u(B.uV,[A.qk,A.vB,A.wy,A.aBc,A.aCk,A.od,A.CM,A.oe])
u(B.o0,[A.aFM,A.aFN,A.aFO,A.aG4,A.buc,A.bud,A.bw_,A.bue,A.bub,A.bua,A.aFU,A.aG_,A.aFT,A.aKW,A.bfz,A.bfA,A.bfB,A.bfC,A.bfD,A.bfE,A.bfF,A.bfG,A.bfH,A.bfI,A.bfJ,A.btj,A.bot,A.b6k,A.b7j,A.b7k,A.bgl,A.bqE,A.b4I,A.b4L,A.b4M,A.bth,A.b4O,A.ayD,A.ayG,A.aym,A.b_2,A.b_3,A.b_4,A.b_5,A.b_6,A.aVl,A.aVm,A.aVn,A.aVp,A.aVq,A.aVs,A.aVt,A.aVu,A.aVv,A.aVw,A.aVx,A.bfY,A.bfZ,A.aLd,A.bu1,A.bu0,A.btZ,A.aLf,A.aLg,A.ayw,A.aBP])
t(A.yv,B.fB)
u(B.xV,[A.aFL,A.aFK,A.aG2,A.aFV,A.aFW,A.aFX,A.aFY,A.aFZ,A.aG1,A.aFR,A.aFS,A.biG,A.biH,A.biI,A.aKY,A.bfL,A.bfM,A.bti,A.bfN,A.b4K,A.b4C,A.b4D,A.b4G,A.b4H,A.btg,A.b4w,A.b4x,A.b4y,A.b4A,A.b4z,A.b4B,A.b4N,A.ayJ,A.aVo,A.aVr,A.bfW,A.bfX,A.aLi,A.aLj,A.ayA])
u(B.y2,[A.yw,A.aoJ,A.a7y,A.ahX])
u(B.xW,[A.aG0,A.biF,A.bpm,A.aKX,A.bfK,A.bor,A.bos,A.b6j,A.b6l,A.b6m,A.b7l,A.b7m,A.bgm,A.bqF,A.b4J,A.b4E,A.b4F,A.ayE,A.ayI,A.ayl,A.bfV,A.aLk,A.aLl,A.ayx,A.ayB,A.ayy,A.ayz,A.aIh])
u(B.N,[A.Bi,A.RR])
u(B.Z,[A.TU,A.YB])
u(B.NU,[A.L7,A.OB])
u(B.uw,[A.TV,A.Wl])
t(A.a1C,A.aia)
t(A.ahO,A.a1C)
t(A.a1m,A.ahO)
u(A.a1m,[A.ai_,A.an9])
t(A.nW,A.ai_)
u(B.I9,[A.ayu,A.aeu,A.D2,A.aFb,A.aKZ,A.NH])
t(A.fG,A.ai0)
t(A.ip,A.ai2)
t(A.mK,A.ai3)
t(A.a1t,A.ahT)
t(A.Ni,A.alv)
u(A.Ni,[A.ai5,A.and])
t(A.a1y,A.ai5)
t(A.a1z,A.ai6)
t(A.D3,A.ai4)
u(A.ayS,[A.L8,A.OD])
t(A.aew,A.atp)
t(A.ai7,A.aew)
t(A.a1A,A.ai7)
u(B.b3,[A.xF,A.zi])
t(A.uC,A.ai1)
t(A.L1,A.Lb)
u(A.L1,[A.ayH,A.aLh])
u(B.Ow,[A.a1w,A.a7K])
u(B.I,[A.Gf,A.ahQ])
u(A.Gf,[A.abE,A.abR])
t(A.q9,A.arM)
t(A.ad3,A.arL)
t(A.pi,A.ahS)
t(A.uZ,A.alu)
t(A.yy,A.alr)
t(A.pD,A.alt)
t(A.Qo,A.apU)
t(A.n4,A.amk)
t(A.nr,A.au7)
u(A.pD,[A.amj,A.au6])
t(A.kV,A.amj)
t(A.lm,A.au6)
t(A.a5S,A.als)
u(A.a5S,[A.ami,A.au5])
t(A.a6K,A.ami)
t(A.aeU,A.au5)
t(A.N0,A.al5)
t(A.uY,A.alq)
t(A.Nb,A.uY)
t(A.ad4,B.h9)
t(A.ahR,A.ahQ)
t(A.TS,A.ahR)
t(A.a1n,A.TS)
t(A.jV,A.ahP)
t(A.a5P,A.aln)
t(A.a5R,A.alo)
u(A.hv,[A.a5V,A.a5W,A.a5X,A.Nd,A.Ne,A.a6_,A.Ng,A.Nh,A.a5U,A.a5T,A.Nc,A.a5Y,A.a5Z,A.Nf])
t(A.pQ,A.an9)
t(A.eb,A.an8)
t(A.OC,A.anb)
t(A.a1v,A.ahY)
t(A.mL,A.aib)
t(A.L6,A.ahZ)
t(A.yx,A.alp)
t(A.EO,A.and)
t(A.a7L,A.ane)
t(A.an7,A.ez)
t(A.n7,A.an7)
t(A.qi,A.n7)
t(A.rA,A.anc)
t(A.tA,A.ato)
t(A.GH,A.arK)
t(A.zj,A.ana)
t(A.zn,A.anl)
w(A.ahT,A.bh)
w(A.ai_,A.bh)
w(A.ai0,A.bh)
w(A.ai2,A.bh)
w(A.ai3,A.bh)
w(A.ai4,A.bh)
w(A.ai5,A.bh)
w(A.ai6,A.bh)
w(A.ai7,A.bh)
w(A.ai1,A.bh)
w(A.ahO,A.bh)
w(A.ahS,A.bh)
w(A.al5,A.bh)
w(A.alq,A.bh)
w(A.alr,A.bh)
w(A.alt,A.bh)
w(A.alu,A.bh)
w(A.amj,A.bh)
w(A.ami,A.bh)
w(A.amk,A.bh)
w(A.apU,A.bh)
w(A.arL,A.bh)
w(A.arM,A.bh)
w(A.atp,A.bh)
w(A.au6,A.bh)
w(A.au5,A.bh)
w(A.au7,A.bh)
w(A.ahP,A.bh)
v(A.ahQ,B.aE)
w(A.ahR,B.e8)
v(A.TS,B.a4P)
w(A.aia,A.bh)
w(A.aln,A.bh)
w(A.alo,A.bh)
w(A.alv,A.bh)
w(A.ahY,A.bh)
w(A.ahZ,A.bh)
w(A.aib,A.bh)
w(A.alp,A.bh)
w(A.als,A.bh)
w(A.an7,A.bh)
w(A.an8,A.bh)
w(A.an9,A.bh)
w(A.anb,A.bh)
w(A.anc,A.bh)
w(A.and,A.bh)
w(A.ane,A.bh)
w(A.arK,A.bh)
w(A.ato,A.bh)
w(A.ana,A.bh)
w(A.anl,A.bh)})()
B.bqT(b.typeUniverse,JSON.parse('{"a7x":{"H":[],"c":[]},"Ec":{"aFQ":[]},"yv":{"fB":["bg<~>"],"fB.T":"bg<~>"},"Ju":{"H":[],"c":[]},"Ia":{"H":[],"c":[]},"yw":{"bf":[],"N":[],"c":[]},"ah3":{"H":[],"c":[]},"amt":{"H":[],"c":[]},"aoJ":{"bf":[],"N":[],"c":[]},"J4":{"H":[],"c":[]},"ah1":{"H":[],"c":[]},"Iv":{"H":[],"c":[]},"wP":{"H":[],"c":[]},"Bi":{"N":[],"c":[]},"a7y":{"bf":[],"N":[],"c":[]},"alL":{"H":[],"c":[]},"an0":{"H":[],"c":[]},"V7":{"H":[],"c":[]},"YN":{"H":[],"c":[]},"Uh":{"H":[],"c":[]},"Uy":{"H":[],"c":[]},"anv":{"H":[],"c":[]},"ajL":{"H":[],"c":[]},"Ch":{"H":[],"c":[]},"atl":{"H":[],"c":[]},"ahX":{"bf":[],"N":[],"c":[]},"TU":{"Z":["Bi"]},"L7":{"N":[],"c":[]},"TV":{"Z":["L7"]},"nW":{"bh":[]},"fG":{"bh":[]},"ip":{"bh":[]},"mK":{"bh":[]},"D3":{"bh":[]},"xF":{"b3":["nW"],"b6":["nW"],"b6.T":"nW","b3.T":"nW"},"a1t":{"bh":[]},"a1y":{"bh":[]},"a1z":{"bh":[]},"a1A":{"bh":[]},"uC":{"bh":[]},"a1w":{"aV":[],"c":[]},"abE":{"I":[],"K":[],"ju":[],"aU":[]},"pD":{"bh":[]},"n4":{"bh":[]},"nr":{"bh":[]},"kV":{"bh":[]},"lm":{"bh":[]},"uY":{"bh":[]},"a1m":{"bh":[]},"q9":{"bh":[]},"ad3":{"bh":[]},"pi":{"bh":[]},"uZ":{"bh":[]},"yy":{"bh":[]},"aew":{"bh":[]},"Qo":{"bh":[]},"a6K":{"bh":[]},"aeU":{"bh":[]},"N0":{"bh":[]},"Nb":{"bh":[]},"L2":{"H":[],"c":[]},"RR":{"N":[],"c":[]},"YB":{"Z":["RR"]},"jV":{"bh":[]},"ad4":{"h9":[],"aV":[],"c":[]},"a1n":{"e8":["I","hw"],"I":[],"aE":["I","hw"],"K":[],"aU":[],"aE.1":"hw","e8.1":"hw","aE.0":"I"},"AI":{"H":[],"c":[]},"a1C":{"bh":[]},"a5P":{"bh":[]},"Ni":{"bh":[]},"a5R":{"bh":[]},"a5V":{"hv":[]},"a5W":{"hv":[]},"a5X":{"hv":[]},"Nd":{"hv":[]},"Ne":{"hv":[]},"a6_":{"hv":[]},"Ng":{"hv":[]},"Nh":{"hv":[]},"a5U":{"hv":[]},"a5T":{"hv":[]},"Nc":{"hv":[]},"a5Y":{"hv":[]},"a5Z":{"hv":[]},"Nf":{"hv":[]},"Gf":{"I":[],"K":[],"ju":[],"aU":[]},"OB":{"N":[],"c":[]},"Wl":{"Z":["OB"]},"pQ":{"bh":[]},"eb":{"bh":[]},"mL":{"bh":[]},"n7":{"ez":[],"bh":[]},"qi":{"n7":[],"ez":[],"bh":[]},"rA":{"bh":[]},"tA":{"bh":[]},"GH":{"bh":[]},"zi":{"b3":["pQ"],"b6":["pQ"],"b6.T":"pQ","b3.T":"pQ"},"OC":{"bh":[]},"a1v":{"bh":[]},"L6":{"bh":[]},"yx":{"bh":[]},"a5S":{"bh":[]},"EO":{"bh":[]},"a7L":{"bh":[]},"zj":{"bh":[]},"a7K":{"aV":[],"c":[]},"abR":{"I":[],"K":[],"ju":[],"aU":[]},"zn":{"bh":[]}}'))
B.bK2(b.typeUniverse,JSON.parse('{"L1":1,"Ni":1,"Lb":1,"Gf":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.aw
return{_:w("CM"),e:w("bg<od>"),aN:w("bg<oe>"),fM:w("bg<a3<f,@>?>"),b:w("bg<~>"),W:w("jV"),B:w("nW"),dB:w("fG"),T:w("uC"),fj:w("ip"),G:w("mK"),J:w("mL"),k:w("ar"),cX:w("a2a<F>"),dO:w("uK"),R:w("am<f,@>"),v:w("hq"),bz:w("lN<b9>"),f0:w("o6"),E:w("bh"),F:w("yv"),X:w("od"),P:w("lU"),D:w("uX"),a:w("aFQ"),d:w("oe"),cw:w("ez"),L:w("hw"),m:w("du<v,E>"),cm:w("kV"),dv:w("n4"),g:w("C<nV>"),O:w("C<fG>"),Y:w("C<ip>"),C:w("C<bxL>"),U:w("C<ez>"),K:w("C<a6z>"),u:w("C<eb>"),bC:w("C<vw>"),aA:w("C<u<ez>>"),r:w("C<GH>"),s:w("C<f>"),eg:w("C<tx>"),df:w("C<qi>"),p:w("C<c>"),n:w("C<F>"),t:w("C<v>"),eF:w("bk<Z<N>>"),Z:w("n7"),cz:w("eb"),hf:w("pQ"),dj:w("zj"),fT:w("rA"),c_:w("is<p_<bg<~>>>"),x:w("zn<fG>"),y:w("zn<eb>"),I:w("u<v>"),ef:w("vB"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ab<F,F>"),w:w("kb"),aU:w("B"),Q:w("vN<nW>"),o:w("vN<pQ>"),eo:w("q_"),gJ:w("q0"),V:w("km<lU>"),N:w("f"),A:w("nm"),bO:w("bJ"),er:w("tx"),j:w("wy"),dw:w("qi"),bY:w("tA"),cZ:w("qk"),gc:w("kt"),es:w("lm"),bN:w("nr"),l:w("c"),q:w("x6"),g4:w("ih<F>"),cJ:w("D"),i:w("F"),z:w("@"),S:w("v"),bn:w("xF?"),f3:w("zi?"),M:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("B?"),aD:w("kt?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bk=new B.lI(C.m,B.aw("lI<E>"))
D.Br=new A.D2(0,"left")
D.mG=new A.D2(1,"top")
D.Bs=new A.D2(2,"right")
D.dO=new A.D2(3,"bottom")
D.axb=new A.q9(!1,A.bAS(),22,null)
D.kv=new A.pi(16,null,D.axb,!0)
D.a9Z=new A.pD(C.C,null,2,null)
D.we=new A.L6(!1,D.a9Z,A.c6D(),!0)
D.a0k=new A.ayu(3,"spaceEvenly")
D.a0t=new B.xJ(6,"dstIn")
D.Yj=new B.aW(3,3)
D.Bv=new B.d3(D.Yj,D.Yj,C.a2,C.a2)
D.a0E=new B.bn(C.C,0,C.T,-1)
D.C3=new A.a5R()
D.a2n=new A.Nd()
D.a2o=new A.Ng()
D.aP1=new A.ad3()
D.amT=w([],B.aw("C<kV>"))
D.amV=w([],B.aw("C<lm>"))
D.E7=new A.N0(D.amT,D.amV,!0)
D.a9E=new B.dG("Zeitraum",!1,null)
D.a9K=new B.dG("Konten (SKR 03)",!1,null)
D.xT=new A.aFb(0,"center")
D.aPe=new A.yx(!0,A.bBo(),A.bM5())
D.Eb=new A.yx(!1,A.bBo(),A.bM5())
D.Ec=new A.yy(!1,!0,null,A.aw0(),A.a00(),!0,null,A.aw0(),A.a00())
D.aPf=new A.yy(!0,!0,null,A.aw0(),A.a00(),!0,null,A.aw0(),A.a00())
D.a4K=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.k)
D.a4u=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.k)
D.a4U=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.k)
D.a4O=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.k)
D.a4b=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.k)
D.a4a=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.a5i=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.k)
D.a4D=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.k)
D.a5l=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.k)
D.a5f=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.k)
D.ar3=new B.du([50,D.a4K,100,D.a4u,200,D.a4U,300,D.a4O,400,D.a4b,500,D.a4a,600,D.a5i,700,D.a4D,800,D.a5l,900,D.a5f],x.m)
D.du=new B.rG(D.ar3,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.k)
D.aj6=w([8,4],x.t)
D.a9X=new A.pD(D.du,null,0.4,D.aj6)
D.a9Y=new A.pD(C.a3,null,0.5,null)
D.fP=new A.ez(0/0,0/0)
D.axd=new A.q9(!0,A.bAS(),44,null)
D.mH=new A.pi(16,null,D.axd,!0)
D.axc=new A.q9(!0,A.bAS(),30,null)
D.mI=new A.pi(16,null,D.axc,!0)
D.aa_=new A.uZ(!1,D.mH,D.mI,D.mH,D.mI)
D.aPg=new A.uZ(!0,D.mH,D.mI,D.mH,D.mI)
D.Ek=new A.NH(0,"left")
D.aaC=new A.NH(1,"center")
D.El=new A.NH(2,"right")
D.aaH=new B.a4(57495,"MaterialIcons",null,!1)
D.yb=new B.a4(58927,"MaterialIcons",null,!1)
D.abw=new B.a4(59005,"MaterialIcons",null,!0)
D.abx=new B.a4(59007,"MaterialIcons",null,!0)
D.aby=new B.a4(59011,"MaterialIcons",null,!1)
D.acv=new B.a4(62589,"MaterialIcons",null,!1)
D.abO=new B.a4(61349,"MaterialIcons",null,!1)
D.adn=new B.aA(D.abO,20,C.h,null,null)
D.abU=new B.a4(61487,"MaterialIcons",null,!1)
D.adp=new B.aA(D.abU,18,null,null,null)
D.adq=new B.aA(D.yb,18,null,null,null)
D.adO=new B.aA(C.hV,null,C.h,null,null)
D.adP=new B.aA(C.nU,null,C.p,null,null)
D.aef=new B.aA(C.o_,16,null,null,null)
D.ael=new B.aA(C.yi,16,null,null,null)
D.aaS=new B.a4(57912,"MaterialIcons",null,!1)
D.aeo=new B.aA(D.aaS,null,C.aa,null,null)
D.act=new B.a4(62584,"MaterialIcons",null,!1)
D.aez=new B.aA(D.act,16,null,null,null)
D.aeF=new B.aA(D.yb,16,null,null,null)
D.agJ=new A.a7y(null)
D.aPl=new A.aKZ(0,"horizontal")
D.yu=new A.zj(0,0,0,0,!1)
D.Fz=new A.OC(0.5)
D.C9=new A.a7L()
D.agN=new A.EO(D.C9,A.bM9(),10,A.bM6(),!0,A.bM8(),A.bM7(),!1,null,null,null)
D.aPn=new A.EO(D.C9,A.bM9(),10,A.bM6(),!0,A.bM8(),A.bM7(),!0,null,null,null)
D.aia=w([4,3],x.t)
D.avk=new B.aI("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.av9=new B.aI("receivables","Forderungen (kurzfristig)")
D.auY=new B.aI("inventory_value","Vorr\xe4te (Warenbestand)")
D.auW=new B.aI("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.auJ=new B.aI("fixed_assets","Anlageverm\xf6gen")
D.auQ=new B.aI("current_liabilities","Kurzfristige Verbindlichkeiten")
D.avg=new B.aI("long_term_liabilities","Langfristige Verbindlichkeiten")
D.av8=new B.aI("equity","Eigenkapital")
D.pG=w([D.avk,D.av9,D.auY,D.auW,D.auJ,D.auQ,D.avg,D.av8],B.aw("C<+(f,f)>"))
D.aPq=w([],x.g)
D.amG=w([],x.O)
D.amH=w([],x.Y)
D.amI=w([],B.aw("C<mK>"))
D.amJ=w([],B.aw("C<mL>"))
D.aPr=w([],x.U)
D.aPs=w([],x.u)
D.amK=w([],x.r)
D.arF={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.TZ={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z9=new B.am(D.TZ,[0,0,0,0,0,0,0,C.bZ],B.aw("am<f,B>"))
D.arC={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.aqY=new B.am(D.arC,[0,0,0,0],B.aw("am<f,v>"))
D.arU={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.aqp=new B.am(D.arU,[0,0,0,0,null,null,null,null],B.aw("am<f,v?>"))
D.aqi=new B.am(D.arF,[D.z9,D.z9,D.z9,C.bZ,C.bZ,C.bZ,D.aqY,D.aqp],x.R)
D.aqC=new B.am(D.TZ,[0,0,0,0,0,0,0,C.cu],x.R)
D.arG={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aqE=new B.am(D.arG,[8500,1200,3400,300,22e3,4200,9000,22200],B.aw("am<f,F>"))
D.arB={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.aqZ=new B.am(D.arB,[0,0,0,0,0,0,0,C.cu],x.R)
D.as4={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.ar_=new B.am(D.as4,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.aw("am<f,f>"))
D.a5r=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.k)
D.a5z=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.k)
D.a4e=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.k)
D.a4G=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.k)
D.a4Q=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.k)
D.a5O=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a4_=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.k)
D.a4I=new B.E(1,0,0.592156862745098,0.6549019607843137,C.k)
D.a4T=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.k)
D.a5g=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.k)
D.ar4=new B.du([50,D.a5r,100,D.a5z,200,D.a4e,300,D.a4G,400,D.a4Q,500,D.a5O,600,D.a4_,700,D.a4I,800,D.a4T,900,D.a5g],x.m)
D.TL=new B.rG(D.ar4,1,0,0.7372549019607844,0.8313725490196079,C.k)
D.a8X=new B.ag(32,32,32,32)
D.asZ=new B.ad(D.a8X,C.bJ,null)
D.a8Z=new B.ag(48,48,48,48)
D.at1=new B.ad(D.a8Z,C.bJ,null)
D.at7=new B.ad(C.aj,C.bJ,null)
D.amW=w([],B.aw("C<n4>"))
D.amX=w([],B.aw("C<nr>"))
D.Yl=new A.Qo(D.amW,D.amX)
D.aw6=new B.fS("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.aw8=new B.fS("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.awa=new B.fS("Automaten-Business","Umsatz je Automat",null,null)
D.awd=new B.fS("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.awf=new B.fS("Top","Meistverkaufte Produkte",null,null)
D.awj=new B.fS("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.awk=new B.fS("Kennzahlen","Rentabilit\xe4t",null,null)
D.Z2=new B.th(C.J,C.v,0)
D.aEN=new B.aj("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.ayX=new B.e2(D.aEN,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGK=new B.aj('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.az_=new B.e2(D.aGK,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aF_=new B.aj("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.az0=new B.e2(D.aF_,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aGD=new B.aj("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.az2=new B.e2(D.aGD,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aG8=new B.aj("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.az3=new B.e2(D.aG8,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aG5=new B.aj("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.azm=new B.e2(D.aG5,null,null,null,null,null,null,null,null,null,null,null,null,C.L,!1,null,null,null,C.r,null)
D.aPC=new B.T(!0,C.C,null,null,null,null,14,C.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEX=new B.aj("Demo",null,null,null,null,null,null,null,null,null)
D.aF7=new B.aj("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aFS=new B.aj("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aFY=new B.aj("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aGc=new B.aj("sevDesk",null,null,null,null,null,null,null,null,null)
D.aGW=new B.aj("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.a_i=new A.aeu(0,"auto")
D.aHz=new A.aeu(1,"top")
D.aLY=new A.wP("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aLZ=new A.wP("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cfo","bQm",()=>B.iX(new A.buc(),x.D))
w($,"cfp","awE",()=>B.iX(new A.bud(),x.a))
w($,"cgr","xr",()=>B.bzA(new A.bw_(),x.P))
w($,"cfq","bwR",()=>C.aF.$1$1(new A.bue(),x.d))
w($,"cfn","bQl",()=>C.aF.$1$1(new A.bub(),x.X))
w($,"cfm","bwQ",()=>C.aF.$1$1(new A.bua(),x.h))
w($,"cfl","bwP",()=>B.b_T(A.c5M(),x.F,x.b))
w($,"c8y","bwq",()=>new A.ayk())
v($,"cbS","lE",()=>new A.b2z())})()};
(a=>{a["vhnWTnuNPk9k5sN/8zvUEc2pzi8="]=a.current})($__dart_deferred_initializers__);